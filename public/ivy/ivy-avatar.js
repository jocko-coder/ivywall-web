/*! IvyAvatar — animated transparent mascot.
    Renders a black-background MP4 to a canvas and keys the black to transparent
    in-browser (works on iOS Safari + everywhere). Clips named 'idle' and 'talk'
    loop; every other clip is a one-shot that returns to idle/talk when it ends.
    Auto-pauses its render loop while off-screen. */
(function (global) {
  'use strict';
  var LOOPING = { idle: 1, talk: 1 };

  function IvyAvatar(container, opts) {
    opts = opts || {};
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    this.clips = opts.clips || {};
    this.keyLo = opts.keyLo != null ? opts.keyLo : 16;
    this.keyHi = opts.keyHi != null ? opts.keyHi : 54;
    this.fps = opts.fps != null ? opts.fps : 30;
    this.maxKeyPx = opts.maxKeyPx != null ? opts.maxKeyPx : 440;
    this.fit = opts.fit || 'contain';
    this.zoom = opts.zoom != null ? opts.zoom : 1;
    this._speaking = false; this._oneshot = null; this._active = null;
    this._videos = {}; this._raf = null; this._running = false; this._last = 0;
    this._audio = null; this._destroyed = false;
    this._loop = this._loop.bind(this);
    if (global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches) this.fps = 8;
    this._buildDOM(); this._loadClips(); this._observe(); this.resume();
  }

  IvyAvatar.prototype._buildDOM = function () {
    var c = this.container;
    if (getComputedStyle(c).position === 'static') c.style.position = 'relative';
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '100%'; this.canvas.style.height = '100%'; this.canvas.style.display = 'block';
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    c.appendChild(this.canvas);
  };

  IvyAvatar.prototype._mkVideo = function (src, loop, noAutoplay) {
    var v = document.createElement('video');
    v.src = src; v.crossOrigin = 'anonymous'; v.muted = true; v.loop = !!loop;
    v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
    v.preload = 'auto'; if (!noAutoplay) v.play().catch(function () {});
    return v;
  };

  IvyAvatar.prototype._loadClips = function () {
    var self = this, names = Object.keys(this.clips);
    this._lp = {};
    names.forEach(function (name) {
      var looping = !!LOOPING[name];
      // Looping is managed here (loop=false) instead of via the native video
      // loop, so the seam can be CROSSFADED: each looping clip gets a second
      // buffer video, and the render loop dissolves the end of one pass into
      // the start of the next — the clip's end melts back into its start
      // rather than hard-cutting, so it never reads as an obvious video loop.
      var v = self._videos[name] = self._mkVideo(self.clips[name], false);
      if (looping) {
        self._lp[name] = { a: v, b: self._mkVideo(self.clips[name], false, true), front: 'a' };
      } else {
        v.addEventListener('ended', function () {
          if (self._oneshot === name) { self._oneshot = null; self._resolveState(); }
        });
      }
    });
    var resume = function () {
      Object.keys(self._videos).forEach(function (k) { self._videos[k].play().catch(function () {}); });
      global.removeEventListener('pointerdown', resume); global.removeEventListener('keydown', resume);
    };
    global.addEventListener('pointerdown', resume); global.addEventListener('keydown', resume);
    this._active = this._videos.intro ? 'intro' : (this._videos.idle ? 'idle' : names[0]);
  };

  IvyAvatar.prototype._observe = function () {
    var self = this;
    if (!global.IntersectionObserver) return;
    this._io = new IntersectionObserver(function (es) {
      var vis = es[0] && es[0].isIntersecting;
      if (vis) self.resume(); else self.pause();
    }, { threshold: 0.01 });
    this._io.observe(this.canvas);
  };

  IvyAvatar.prototype._resolveState = function () {
    if (this._oneshot && this._videos[this._oneshot]) { this._active = this._oneshot; return; }
    this._active = (this._speaking && this._videos.talk) ? 'talk' : (this._videos.idle ? 'idle' : this._active);
  };

  IvyAvatar.prototype.idle = function () { this._oneshot = null; this._speaking = false; this._resolveState(); return this; };
  IvyAvatar.prototype.talk = function () { this._oneshot = null; this._speaking = true; this._resolveState(); return this; };
  IvyAvatar.prototype.setSpeaking = function (on) { this._speaking = !!on; if (!this._oneshot) this._resolveState(); return this; };
  IvyAvatar.prototype.playOnce = function (name) {
    var v = this._videos[name];
    if (!v) { return (name === 'intro' && this._videos.wave) ? this.playOnce('wave') : this; }
    this._oneshot = name; try { v.currentTime = 0; } catch (e) {} v.play().catch(function () {});
    this._active = name; return this;
  };
  IvyAvatar.prototype.wave = function () { return this.playOnce('wave'); };
  IvyAvatar.prototype.playIntro = function () { return this.playOnce('intro'); };
  IvyAvatar.prototype.setState = function (s) {
    if (s === 'speaking') return this.setSpeaking(true);
    if (s === 'wave' || s === 'greeting') return this.wave();
    return this.setSpeaking(false);
  };

  IvyAvatar.prototype.pause = function () {
    this._running = false;
    if (this._raf) { cancelAnimationFrame(this._raf); this._raf = null; }
    var self = this;
    Object.keys(this._videos).forEach(function (k) { try { self._videos[k].pause(); } catch (e) {} });
    if (this._lp) Object.keys(this._lp).forEach(function (k) { try { self._lp[k].b.pause(); } catch (e) {} });
  };
  IvyAvatar.prototype.resume = function () {
    if (this._destroyed || this._running) return;
    this._running = true; this._last = 0;
    var lp = this._lp && this._lp[this._active];
    var v = lp ? lp[lp.front] : this._videos[this._active];
    if (v) v.play().catch(function () {});
    this._raf = requestAnimationFrame(this._loop);
  };

  IvyAvatar.prototype.bindAudio = function (source, opts) {
    opts = opts || {}; var threshold = opts.threshold != null ? opts.threshold : 0.025, hangover = opts.hangover != null ? opts.hangover : 180;
    var self = this;
    try {
      var AC = global.AudioContext || global.webkitAudioContext; var ac = new AC(); var node;
      if (source instanceof MediaStream) node = ac.createMediaStreamSource(source);
      else { node = ac.createMediaElementSource(source); node.connect(ac.destination); }
      var an = ac.createAnalyser(); an.fftSize = 512; node.connect(an); var buf = new Uint8Array(an.fftSize); var last = 0; this._audio = { ac: ac };
      var tick = function () {
        if (!self._audio) return; an.getByteTimeDomainData(buf); var s = 0;
        for (var i = 0; i < buf.length; i++) { var dd = (buf[i] - 128) / 128; s += dd * dd; }
        var rms = Math.sqrt(s / buf.length); var now = performance.now(); if (rms > threshold) last = now;
        self.setSpeaking(now - last < hangover); self._audio.t = requestAnimationFrame(tick);
      };
      global.addEventListener('pointerdown', function () { ac.resume && ac.resume(); }, { once: true }); tick();
    } catch (e) {}
    return this;
  };
  IvyAvatar.prototype.bindRetell = function (c) {
    var self = this;
    c.on('call_started', function () { self.wave(); });
    c.on('agent_start_talking', function () { self.setSpeaking(true); });
    c.on('agent_stop_talking', function () { self.setSpeaking(false); });
    c.on('call_ended', function () { self.idle(); });
    return this;
  };

  IvyAvatar.prototype._loop = function (ts) {
    if (!this._running) return;
    this._raf = requestAnimationFrame(this._loop);
    if (ts - this._last < 1000 / this.fps) return; this._last = ts;
    var name = this._active, lp = this._lp[name];
    var v, fadeBack = null, frontAlpha = 1;
    if (lp) {
      v = lp[lp.front];
      if (!v || v.readyState < 2 || !v.videoWidth) return;
      var dur = v.duration || 0;
      var FADE = dur > 1 ? Math.min(0.4, dur * 0.22) : 0;
      if (FADE > 0) {
        var rem = dur - v.currentTime;
        if (rem <= FADE) {
          // approaching the seam: bring the buffer copy in from the start and
          // dissolve this pass out over it, so end melts back into start.
          fadeBack = lp.front === 'a' ? lp.b : lp.a;
          if (fadeBack.paused) { try { fadeBack.currentTime = 0; } catch (e) {} fadeBack.play().catch(function () {}); }
          frontAlpha = rem > 0 ? rem / FADE : 0;
        }
        if (v.ended || v.currentTime >= dur - 0.03) {
          // hand off to the buffer copy (already mid-fade) and recycle this one
          var other = lp.front === 'a' ? 'b' : 'a';
          try { v.pause(); v.currentTime = 0; } catch (e) {}
          lp.front = other; v = lp[other]; fadeBack = null; frontAlpha = 1;
          if (v.paused) v.play().catch(function () {});
          if (!v.videoWidth || v.readyState < 2) return;
        }
      } else if (v.ended || (dur > 0 && v.currentTime >= dur - 0.03)) {
        try { v.currentTime = 0; } catch (e) {} v.play().catch(function () {});
      }
    } else {
      v = this._videos[name];
      if (!v || v.readyState < 2 || !v.videoWidth) return;
    }
    var rect = this.container.getBoundingClientRect(); var dpr = Math.min(global.devicePixelRatio || 1, 2);
    var cw = Math.max(2, Math.round(rect.width * dpr)), ch = Math.max(2, Math.round(rect.height * dpr));
    var long = Math.max(cw, ch); if (long > this.maxKeyPx) { var s2 = this.maxKeyPx / long; cw = Math.round(cw * s2); ch = Math.round(ch * s2); }
    if (this.canvas.width !== cw || this.canvas.height !== ch) { this.canvas.width = cw; this.canvas.height = ch; }
    var vw = v.videoWidth, vh = v.videoHeight; var scale = this.fit === 'cover' ? Math.max(cw / vw, ch / vh) : Math.min(cw / vw, ch / vh);
    scale *= this.zoom;
    var dw = vw * scale, dh = vh * scale, dx = (cw - dw) / 2, dy = (ch - dh) / 2; var ctx = this.ctx; ctx.clearRect(0, 0, cw, ch);
    // during a seam crossfade, draw the incoming start frame as the opaque base
    // then dissolve the outgoing end over it (Ivy stays opaque; only the seam blends)
    if (fadeBack) { try { ctx.drawImage(fadeBack, dx, dy, dw, dh); } catch (e) {} }
    ctx.globalAlpha = frontAlpha;
    try { ctx.drawImage(v, dx, dy, dw, dh); } catch (e) { ctx.globalAlpha = 1; return; }
    ctx.globalAlpha = 1;
    var img; try { img = ctx.getImageData(0, 0, cw, ch); } catch (e) { return; }
    var d = img.data, lo = this.keyLo, hi = this.keyHi, span = hi - lo || 1;
    var n = cw * ch;
    // reusable buffers
    if (!this._isDark || this._isDark.length !== n) { this._isDark = new Uint8Array(n); this._mask = new Uint8Array(n); this._stack = new Int32Array(n); }
    var isDark = this._isDark, mask = this._mask, stack = this._stack;
    // 1) classify dark (background-candidate) pixels by max channel
    for (var p = 0, idx = 0; p < n; p++, idx += 4) {
      var r = d[idx], g = d[idx + 1], bl = d[idx + 2];
      var m = r > g ? (r > bl ? r : bl) : (g > bl ? g : bl);
      isDark[p] = m <= hi ? 1 : 0; mask[p] = 0;
    }
    // 2) flood-fill ONLY the black connected to the frame border -> that is the true background.
    //    Interior darks (eyes, mouth, accent dots) are never reached, so they stay opaque.
    var sp = 0, x, y, q;
    for (x = 0; x < cw; x++) {
      var tb = x, bb = (ch - 1) * cw + x;
      if (isDark[tb] && !mask[tb]) { mask[tb] = 1; stack[sp++] = tb; }
      if (isDark[bb] && !mask[bb]) { mask[bb] = 1; stack[sp++] = bb; }
    }
    for (y = 0; y < ch; y++) {
      var lb = y * cw, rb = y * cw + cw - 1;
      if (isDark[lb] && !mask[lb]) { mask[lb] = 1; stack[sp++] = lb; }
      if (isDark[rb] && !mask[rb]) { mask[rb] = 1; stack[sp++] = rb; }
    }
    while (sp > 0) {
      var cur = stack[--sp]; var cx = cur % cw, cy = (cur / cw) | 0;
      if (cx > 0)      { q = cur - 1;  if (isDark[q] && !mask[q]) { mask[q] = 1; stack[sp++] = q; } }
      if (cx < cw - 1) { q = cur + 1;  if (isDark[q] && !mask[q]) { mask[q] = 1; stack[sp++] = q; } }
      if (cy > 0)      { q = cur - cw; if (isDark[q] && !mask[q]) { mask[q] = 1; stack[sp++] = q; } }
      if (cy < ch - 1) { q = cur + cw; if (isDark[q] && !mask[q]) { mask[q] = 1; stack[sp++] = q; } }
    }
    // 3) only background pixels get keyed; soft ramp at the silhouette edge for clean anti-aliasing
    for (var p2 = 0, a = 0; p2 < n; p2++, a += 4) {
      if (mask[p2]) {
        var rr = d[a], gg = d[a + 1], bb2 = d[a + 2];
        var mm = rr > gg ? (rr > bb2 ? rr : bb2) : (gg > bb2 ? gg : bb2);
        d[a + 3] = mm <= lo ? 0 : (((mm - lo) * 255 / span) | 0);
      }
    }
    ctx.putImageData(img, 0, 0);
  };

  IvyAvatar.prototype.destroy = function () {
    this._destroyed = true; this.pause();
    if (this._io) { try { this._io.disconnect(); } catch (e) {} }
    if (this._audio) { if (this._audio.t) cancelAnimationFrame(this._audio.t); try { this._audio.ac.close(); } catch (e) {} this._audio = null; }
    var self = this; Object.keys(this._videos).forEach(function (k) { var v = self._videos[k]; v.pause(); v.src = ''; });
    if (this.canvas) this.canvas.remove();
  };

  global.IvyAvatar = IvyAvatar;
  if (typeof module !== 'undefined' && module.exports) module.exports = IvyAvatar;
})(typeof window !== 'undefined' ? window : this);
