/*! IvyAvatar (v3 — GREEN-SCREEN keyer). OVERRIDES window.IvyAvatar.
    For the new greenscreen clips (clips/ivy_*.mp4). Keys GREEN → transparent,
    removes green spill, and despeckles — cleaner than black-keying because green
    never collides with Ivy's orange body or her dark eyes.
      • green test: greenExcess = G - max(R,B); strong green = background.
      • border flood so only the connected green bg is removed.
      • despeckle: keep only Ivy's largest shape; detached specks → transparent.
      • despill: any green-dominant pixel has its G pulled to max(R,B) → no green rim.
      • gentle colour pull-back via CSS filter on the canvas (visual only).
    Same animation/clips/character — load AFTER ivy-avatar.js, BEFORE ivy-init.js.
    REVERT: point pages back to ivy-avatar2.js + restore clips-black-v1/. */
(function (global) {
  'use strict';
  var LOOPING = { idle: 1, talk: 1 };

  function IvyAvatar(container, opts) {
    opts = opts || {};
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    this.clips = opts.clips || {};
    this.gLo = opts.gLo != null ? opts.gLo : 16;   // greenExcess: below → fully Ivy
    this.gHi = opts.gHi != null ? opts.gHi : 70;   // greenExcess: above → fully background
    this.fps = opts.fps != null ? opts.fps : 30;
    this.maxKeyPx = opts.maxKeyPx != null ? opts.maxKeyPx : 440;
    this.fit = opts.fit || 'contain';
    // green clips frame Ivy smaller (more margin) than the old black clips, so
    // boost zoom ~1.45x to restore her previous on-screen presence. No crop risk
    // (she only filled ~15% of the frame at 1x).
    this.zoom = (opts.zoom != null ? opts.zoom : 1) * 1.45;
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
    this.canvas.style.filter = 'saturate(0.85) brightness(1.05)';   // gentle colour pull-back (visual only)
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
          fadeBack = lp.front === 'a' ? lp.b : lp.a;
          if (fadeBack.paused) { try { fadeBack.currentTime = 0; } catch (e) {} fadeBack.play().catch(function () {}); }
          frontAlpha = rem > 0 ? rem / FADE : 0;
        }
        if (v.ended || v.currentTime >= dur - 0.03) {
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
    if (fadeBack) { try { ctx.drawImage(fadeBack, dx, dy, dw, dh); } catch (e) {} }
    ctx.globalAlpha = frontAlpha;
    try { ctx.drawImage(v, dx, dy, dw, dh); } catch (e) { ctx.globalAlpha = 1; return; }
    ctx.globalAlpha = 1;
    var img; try { img = ctx.getImageData(0, 0, cw, ch); } catch (e) { return; }
    var d = img.data, gLo = this.gLo, gHi = this.gHi, gSpan = gHi - gLo || 1;
    var n = cw * ch;
    if (!this._isBg || this._isBg.length !== n) {
      this._isBg = new Uint8Array(n); this._mask = new Uint8Array(n);
      this._stack = new Int32Array(n); this._label = new Int32Array(n);
    }
    var isBg = this._isBg, mask = this._mask, stack = this._stack, label = this._label;
    // 1) classify GREEN (background) pixels: greenExcess = G - max(R,B)
    for (var p = 0, idx = 0; p < n; p++, idx += 4) {
      var r = d[idx], g = d[idx + 1], bl = d[idx + 2];
      var mxrb = r > bl ? r : bl;
      isBg[p] = (g - mxrb >= gLo && g > 60) ? 1 : 0; mask[p] = 0;
    }
    // 2) flood-fill the green connected to the frame border -> true background (mask=1)
    var sp = 0, x, y, q;
    for (x = 0; x < cw; x++) {
      var tb = x, bb = (ch - 1) * cw + x;
      if (isBg[tb] && !mask[tb]) { mask[tb] = 1; stack[sp++] = tb; }
      if (isBg[bb] && !mask[bb]) { mask[bb] = 1; stack[sp++] = bb; }
    }
    for (y = 0; y < ch; y++) {
      var lb = y * cw, rb = y * cw + cw - 1;
      if (isBg[lb] && !mask[lb]) { mask[lb] = 1; stack[sp++] = lb; }
      if (isBg[rb] && !mask[rb]) { mask[rb] = 1; stack[sp++] = rb; }
    }
    while (sp > 0) {
      var cur = stack[--sp]; var cx = cur % cw, cy = (cur / cw) | 0;
      if (cx > 0)      { q = cur - 1;  if (isBg[q] && !mask[q]) { mask[q] = 1; stack[sp++] = q; } }
      if (cx < cw - 1) { q = cur + 1;  if (isBg[q] && !mask[q]) { mask[q] = 1; stack[sp++] = q; } }
      if (cy > 0)      { q = cur - cw; if (isBg[q] && !mask[q]) { mask[q] = 1; stack[sp++] = q; } }
      if (cy < ch - 1) { q = cur + cw; if (isBg[q] && !mask[q]) { mask[q] = 1; stack[sp++] = q; } }
    }
    // 2.5) DESPECKLE — keep only Ivy's largest foreground component; others → mask=2 (transparent)
    for (var li = 0; li < n; li++) label[li] = 0;
    var curLabel = 0, bestLabel = 0, bestSize = 0;
    for (var seed = 0; seed < n; seed++) {
      if (mask[seed] === 0 && label[seed] === 0) {
        curLabel++; var size = 0, sp2 = 0; stack[sp2++] = seed; label[seed] = curLabel;
        while (sp2 > 0) {
          var cc = stack[--sp2]; size++;
          var ax = cc % cw, ay = (cc / cw) | 0, w2;
          if (ax > 0)      { w2 = cc - 1;  if (mask[w2] === 0 && label[w2] === 0) { label[w2] = curLabel; stack[sp2++] = w2; } }
          if (ax < cw - 1) { w2 = cc + 1;  if (mask[w2] === 0 && label[w2] === 0) { label[w2] = curLabel; stack[sp2++] = w2; } }
          if (ay > 0)      { w2 = cc - cw; if (mask[w2] === 0 && label[w2] === 0) { label[w2] = curLabel; stack[sp2++] = w2; } }
          if (ay < ch - 1) { w2 = cc + cw; if (mask[w2] === 0 && label[w2] === 0) { label[w2] = curLabel; stack[sp2++] = w2; } }
        }
        if (size > bestSize) { bestSize = size; bestLabel = curLabel; }
      }
    }
    if (bestSize > 0) { for (var ki = 0; ki < n; ki++) { if (mask[ki] === 0 && label[ki] !== bestLabel) mask[ki] = 2; } }
    // 3) alpha + DESPILL. greenExcess from original pixel drives bg feather; any
    //    green-dominant pixel gets its green pulled down to neutral (no green rim).
    for (var p2 = 0, a = 0; p2 < n; p2++, a += 4) {
      var rr = d[a], gg = d[a + 1], bb2 = d[a + 2];
      var mrb = rr > bb2 ? rr : bb2;
      var ge = gg - mrb;
      var mk = mask[p2], al;
      if (mk === 2) al = 0;
      else if (mk === 1) al = ge >= gHi ? 0 : (ge <= gLo ? 255 : (((gHi - ge) * 255 / gSpan) | 0));
      else al = 255;
      if (ge > 0) d[a + 1] = mrb;   // despill: neutralise any green tint
      d[a + 3] = al;
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

  global.IvyAvatar = IvyAvatar;   // override
  if (typeof module !== 'undefined' && module.exports) module.exports = IvyAvatar;
})(typeof window !== 'undefined' ? window : this);
