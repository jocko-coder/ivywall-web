/* IvyWall homepage redesign — sections homepage-gated, navbar site-wide */
/* splash */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  try {
    // First frame of the hero video (ourstory.mp4) so the splash flows seamlessly into the hero.
    var PHOTO = "/clips/ourstory_poster.jpg";

    // Suppress the legacy dark "CinematicIntro" so only this splash plays.
    try { sessionStorage.setItem("ivywall-intro-played", "1"); } catch (e) {}

    var reduce = false;
    try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    var played = false;
    try { played = !!sessionStorage.getItem("iw-splash-v2"); } catch (e) {}
    if (played || reduce) return;            // play once per session; respect reduced motion
    try { sessionStorage.setItem("iw-splash-v2", "1"); } catch (e) {}

    var docEl = document.documentElement;

    // --- styles ---
    var style = document.createElement("style");
    style.textContent = [
      "@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600&display=swap');",
      "html.iw-lock{overflow:hidden !important;}",
      "#iw-splash{position:fixed;inset:0;z-index:2147483600;display:flex;align-items:center;justify-content:center;background:#faf9f6;overflow:hidden;-webkit-font-smoothing:antialiased;}",
      "#iw-splash .iw-wm{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;white-space:nowrap;",
        "font-family:'Cormorant Garamond','Cormorant',Georgia,'Times New Roman',serif;font-weight:500;color:#1a1a17;",
        "font-size:clamp(38px,7.6vw,112px);line-height:1;letter-spacing:.012em;padding:0 4vw;}",
      "#iw-splash .iw-word{opacity:0;filter:blur(9px);transform:translateY(.14em);",
        "transition:opacity 1.05s cubic-bezier(.2,.7,.2,1),filter 1.05s cubic-bezier(.2,.7,.2,1),transform 1.05s cubic-bezier(.2,.7,.2,1);}",
      "#iw-splash .iw-word.iw-in{opacity:1;filter:blur(0);transform:none;}",
      "#iw-splash .iw-card{position:relative;flex:0 0 auto;align-self:center;width:0;height:.92em;margin:0 .12em;",
        "border-radius:7px;overflow:hidden;opacity:0;transform:scale(.7);",
        "box-shadow:0 14px 34px rgba(20,18,14,.22);",
        "transition:width .72s cubic-bezier(.2,.7,.2,1),margin .72s cubic-bezier(.2,.7,.2,1),opacity .55s ease,transform .72s cubic-bezier(.2,.7,.2,1);}",
      "#iw-splash .iw-card.iw-in{width:1.62em;margin:0 .3em;opacity:1;transform:scale(1);}",
      "#iw-splash .iw-card img,#iw-splash .iw-hero img{width:100%;height:100%;object-fit:cover;display:block;}",
      "#iw-splash .iw-hero{position:fixed;overflow:hidden;border-radius:7px;z-index:2147483601;",
        "transform-origin:center center;box-shadow:0 18px 50px rgba(20,18,14,.28);will-change:transform;}"
    ].join("");
    (document.head || docEl).appendChild(style);

    // --- overlay (attached to <html>, outside <body>, so it never collides with React hydration) ---
    var splash = document.createElement("div");
    splash.id = "iw-splash";
    splash.setAttribute("aria-hidden", "true");

    var wm = document.createElement("div");
    wm.className = "iw-wm";

    var w1 = document.createElement("span"); w1.className = "iw-word"; w1.textContent = "The";
    var card = document.createElement("div"); card.className = "iw-card";
    var cimg = document.createElement("img"); cimg.src = PHOTO; cimg.alt = ""; card.appendChild(cimg);
    var w2 = document.createElement("span"); w2.className = "iw-word"; w2.textContent = "Ivywall";

    wm.appendChild(w1); wm.appendChild(card); wm.appendChild(w2);
    splash.appendChild(wm);
    docEl.appendChild(splash);
    docEl.classList.add("iw-lock");

    // Keep overlay attached if anything (e.g. hydration) tries to detach it mid-run.
    var obs = null;
    try {
      obs = new MutationObserver(function () {
        if (!docEl.contains(splash) && !done) docEl.appendChild(splash);
      });
      obs.observe(docEl, { childList: true });
    } catch (e) {}

    var done = false, failTimer = null;
    function finish() {
      if (done) return; done = true;
      try { if (obs) obs.disconnect(); } catch (e) {}
      if (failTimer) clearTimeout(failTimer);
      docEl.classList.remove("iw-lock");
      if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
    }
    function reveal() {
      if (done) return;
      // restart the hero video from frame 0 so what's revealed matches the splash image
      try {
        var hv = document.querySelector('#iwh video');
        if (hv) { hv.currentTime = 0; var pp = hv.play(); if (pp && pp.catch) pp.catch(function(){}); }
      } catch (e) {}
      splash.style.transition = "opacity .72s ease";
      splash.style.opacity = "0";
      setTimeout(finish, 760);
    }
    function expand() {
      if (done) return;
      var r = card.getBoundingClientRect();
      var vw = window.innerWidth, vh = window.innerHeight;
      if (!r.width || !r.height) { reveal(); return; }
      var hero = document.createElement("div");
      hero.className = "iw-hero";
      hero.style.left = r.left + "px"; hero.style.top = r.top + "px";
      hero.style.width = r.width + "px"; hero.style.height = r.height + "px";
      var him = document.createElement("img"); him.src = PHOTO; him.alt = ""; hero.appendChild(him);
      splash.appendChild(hero);
      card.style.visibility = "hidden";
      // words clear away
      w1.style.transition = w2.style.transition = "opacity .45s ease, filter .45s ease, transform .6s ease";
      w1.style.opacity = w2.style.opacity = "0";
      w1.style.transform = w2.style.transform = "translateY(-.12em)";

      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var scale = Math.max(vw / r.width, vh / r.height) * 1.001;
      var tx = (vw / 2 - cx), ty = (vh / 2 - cy);
      var anim = hero.animate(
        [
          { transform: "translate(0px,0px) scale(1)", borderRadius: "7px" },
          { transform: "translate(" + tx + "px," + ty + "px) scale(" + scale + ")", borderRadius: "0px" }
        ],
        { duration: 1180, easing: "cubic-bezier(0.76,0,0.24,1)", fill: "forwards" }
      );
      anim.onfinish = function () { setTimeout(reveal, 280); };
    }
    function run() {
      requestAnimationFrame(function () {
        w1.classList.add("iw-in");
        setTimeout(function () { w2.classList.add("iw-in"); }, 150);
        setTimeout(function () { card.classList.add("iw-in"); }, 1060);
        setTimeout(expand, 2380);
      });
    }

    // skip on interaction
    function skip() { if (done) return; reveal(); }
    splash.addEventListener("click", skip);
    window.addEventListener("keydown", function (e) { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip(); });

    // failsafe: never trap the page
    failTimer = setTimeout(finish, 7000);

    // start after the display font is ready (max ~650ms wait), avoids a fallback->serif flash
    function go() { run(); }
    if (document.fonts && document.fonts.load) {
      var fp = document.fonts.load("500 90px 'Cormorant Garamond'");
      Promise.race([
        (fp && fp.then ? fp : Promise.resolve()),
        new Promise(function (res) { setTimeout(res, 650); })
      ]).then(go, go);
    } else { go(); }
  } catch (err) {
    // On any error, make sure nothing stays locked.
    try { document.documentElement.classList.remove("iw-lock"); } catch (e) {}
  }
})();

/* navbar */
(function () {
  "use strict";
  var BRAND = "THE IVYWALL";
  var LINKS = [["Rooms & Suites","/rooms/"],["Dining","/dining/"],["Experiences","/experiences/"],["Gallery","/gallery/"],["Our Story","/about/"],["Contact","/contact/"]];
  var BOOK_HREF = "/book/";
  var built = false, nav = null, menu = null;

  function build() {
    if (built && document.getElementById("iwnav")) return true;
    if (!document.body) return false;

    nav = document.createElement("nav"); nav.id = "iwnav"; nav.setAttribute("aria-label","Primary");
    nav.innerHTML =
      '<div class="nav-side l"><a class="nav-book" href="' + BOOK_HREF + '">Book now</a></div>' +
      '<a class="nav-brand" href="/">' + BRAND + '</a>' +
      '<div class="nav-side r"><button class="nav-burger" aria-label="Open menu"><span></span><span></span><span></span></button></div>';

    menu = document.createElement("div"); menu.id = "iwnav-menu";
    menu.innerHTML = '<button class="mclose" aria-label="Close menu">Close ✕</button>' +
      LINKS.map(function (l) { return '<a href="' + l[1] + '">' + l[0] + '</a>'; }).join("") +
      '<div class="mfoot">Best Western Plus · Panglao, Bohol</div>';

    document.body.appendChild(nav);
    document.body.appendChild(menu);
    built = true;

    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 60); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    function openMenu(o) {
      menu.classList.toggle("open", o);
      document.documentElement.style.overflow = o ? "hidden" : "";
    }
    nav.querySelector(".nav-burger").addEventListener("click", function () { openMenu(true); });
    menu.querySelector(".mclose").addEventListener("click", function () { openMenu(false); });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { openMenu(false); }); });
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") openMenu(false); });
    return true;
  }

  function enforce() { if (!document.getElementById("iwnav")) { built = false; build(); } }
  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }
  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-hero-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var VIDEO = "/clips/ourstory.mp4";
  var POSTER = "/clips/ourstory_poster.jpg";
  var BIGWORD = "THE IVYWALL";
  var LOCLABEL = "PANGLAO · BOHOL";

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  var wrap, stage, group, frame, video, word, loc, intro, eyebrow, cue, raf = 0, built = false;

  function build() {
    if (built) return true;
    var anchor = document.querySelector('main .min-h-\\[100svh\\].bg-palm-night');
    var parentRef = null, beforeRef = null;
    if (anchor) {
      var holder = anchor.parentElement || anchor;     // reveal wrapper
      parentRef = holder.parentElement; beforeRef = holder;
    } else {
      var main = document.querySelector('main');
      if (!main) return false;
      parentRef = main; beforeRef = main.firstChild;
    }

    wrap = document.createElement("section"); wrap.id = "iwh";
    stage = document.createElement("div"); stage.className = "iwh-stage";
    group = document.createElement("div"); group.className = "iwh-group";

    word = document.createElement("div"); word.className = "iwh-word";
    word.innerHTML = '<span class="w-the">THE</span> <span class="w-ivy">IVYWALL</span>';
    loc = document.createElement("div"); loc.className = "iwh-loc"; loc.textContent = LOCLABEL;

    frame = document.createElement("div"); frame.className = "iwh-frame";
    video = document.createElement("video");
    video.src = VIDEO; video.poster = POSTER;
    video.muted = true; video.loop = true; video.autoplay = true;
    video.setAttribute("muted", ""); video.setAttribute("playsinline", ""); video.playsInline = true;
    video.preload = "auto";
    var scrim = document.createElement("div"); scrim.className = "iwh-scrim";
    frame.appendChild(video); frame.appendChild(scrim);

    intro = document.createElement("div"); intro.className = "iwh-intro";
    var c1 = document.createElement("div"); c1.className = "col";
    c1.textContent = "International comfort, a Boholano soul. We built Bohol’s first international-chain beach resort the way the island lives — unhurried, generous, and proud of where it stands.";
    var c2 = document.createElement("div"); c2.className = "col";
    c2.textContent = "Eighty rooms wrapped around a pool, a rooftop above Alona Beach, and a welcome you feel from the first hello — four-star comfort, told in a Boholano accent.";
    intro.appendChild(c1); intro.appendChild(c2);

    cue = document.createElement("div"); cue.className = "iwh-cue";
    cue.innerHTML = "SCROLL<span class='bar'></span>";

    group.appendChild(word); group.appendChild(loc);
    group.appendChild(frame); group.appendChild(intro);
    stage.appendChild(group); stage.appendChild(cue);
    wrap.appendChild(stage);

    parentRef.insertBefore(wrap, beforeRef);
    built = true;
    try { var p = video.play(); if (p && p.catch) p.catch(function(){}); } catch (e) {}
    update();
    return true;
  }

  function update() {
    if (!wrap) return;
    var vw = window.innerWidth, vh = window.innerHeight;
    var total = wrap.offsetHeight - vh;
    var top = wrap.getBoundingClientRect().top;
    var p = total > 0 ? clamp(-top / total, 0, 1) : 0;

    // ---- video frame: full-bleed -> centered portrait frame (first ~58% of scroll) ----
    var ts = easeInOut(clamp(p / 0.58, 0, 1));
    var Hs = vh * 0.50, Ws = Hs * 0.82;                 // small (portrait) target
    if (Ws > vw * 0.58) { Ws = vw * 0.58; Hs = Ws / 0.82; }
    var sx = (vw - Ws) / 2, sy = vh * 0.07;             // upper-centered
    var L = lerp(0, sx, ts), T = lerp(0, sy, ts);
    var W = lerp(vw, Ws, ts), H = lerp(vh, Hs, ts);
    var R = lerp(0, 16, ts);
    frame.style.left = L + "px"; frame.style.top = T + "px";
    frame.style.width = W + "px"; frame.style.height = H + "px";
    frame.style.borderRadius = R + "px";

    // ---- wordmark + location reveal (frame overlaps the top of the word, inspo-style) ----
    var wt = easeOut(clamp((p - 0.16) / 0.42, 0, 1));
    word.style.opacity = wt;
    word.style.top = (vh * 0.595) + "px";   // higher, so the video frame overlaps the top of the word
    word.style.transform = "translateY(" + (-50 + (1 - wt) * 6) + "%)";
    loc.style.opacity = clamp((p - 0.34) / 0.30, 0, 1);
    loc.style.top = (vh * 0.805) + "px";

    // ---- group lifts slightly + intro fades in near the end ----
    var gl = easeOut(clamp((p - 0.66) / 0.34, 0, 1));
    group.style.transform = "translateY(" + (-gl * vh * 0.085) + "px)";
    intro.style.opacity = gl;
    intro.style.transform = "translateY(" + ((1 - gl) * 22) + "px)";

    // ---- scroll cue only while video is large ----
    cue.style.opacity = clamp(1 - p / 0.22, 0, 1);
  }

  function onScroll() { if (raf) return; raf = requestAnimationFrame(function () { raf = 0; update(); }); }

  function enforce() {
    // keep our hero present even if a late hydration pass re-renders the tree
    if (!document.getElementById("iwh")) { built = false; build(); }
  }

  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }

  // run after hydration settles to avoid mismatch (splash overlay covers this moment)
  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-os-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var HEAD = "A Boholano welcome";
  var EYEBROW = "Best Western Plus · The Ivywall";
  var STMT = "International comfort, a Boholano soul. We built Bohol’s first international-chain beach resort the way the island lives — unhurried, generous, and proud of where it stands.";
  var SUB = "Eighty rooms wrapped around a pool, a rooftop above Alona Beach, and a welcome you feel from the first hello. Every detail is woven in native Filipino craft — banig headboards, capiz light, and people who learn your name by dinner. Four-star comfort, told in a Boholano accent.";
  var LINK_HREF = "/about/";

  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  var built = false, sectionEl = null, words = [], stmtEl = null, raf = 0;

  function build() {
    if (built && document.getElementById("iwos")) return true;
    var orig = document.querySelector("section.bg-pearl.py-20");
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else {
      var main = document.querySelector("main"); if (!main) return false;
      parentRef = main; beforeRef = null;
    }

    var s = document.createElement("section"); s.id = "iwos";
    s.innerHTML =
      '<div class="iwos-side">Est. Panglao · Bohol</div>' +
      '<div class="iwos-wrap">' +
        '<div class="iwos-top rv d1"><span class="dot"><i></i></span><span>Our story</span></div>' +
        '<h2 class="iwos-head rv d1"></h2>' +
        '<span class="iwos-eyebrow rv d2"></span>' +
        '<p class="iwos-statement"></p>' +
        '<p class="iwos-sub rv d4"></p>' +
        '<a class="iwos-link rv d5"><span class="lbl">Read our story</span><span class="arr">→</span></a>' +
      '</div>';

    s.querySelector(".iwos-head").textContent = HEAD;
    s.querySelector(".iwos-eyebrow").textContent = EYEBROW;
    s.querySelector(".iwos-sub").textContent = SUB;
    s.querySelector(".iwos-link").setAttribute("href", LINK_HREF);

    // build the statement as individual words for the scroll-linked fade
    stmtEl = s.querySelector(".iwos-statement");
    STMT.split(" ").forEach(function (wd) {
      var sp = document.createElement("span"); sp.className = "w"; sp.textContent = wd;
      stmtEl.appendChild(sp);
      stmtEl.appendChild(document.createTextNode(" "));   // real space between inline-block words
      words.push(sp);
    });

    parentRef.insertBefore(s, beforeRef);
    sectionEl = s; built = true;

    try {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { s.classList.add("in"); } });
      }, { threshold: 0.12 });
      io.observe(s);
      var r = s.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) s.classList.add("in");
    } catch (e) { s.classList.add("in"); }

    fill();
    return true;
  }

  // light up the statement word-by-word as it scrolls up through the viewport
  function fill() {
    if (!stmtEl || !words.length) return;
    var vh = window.innerHeight;
    var r = stmtEl.getBoundingClientRect();
    var p = clamp((vh * 0.80 - r.top) / (r.height * 0.78 + vh * 0.22), 0, 1);
    var n = words.length;
    for (var i = 0; i < n; i++) {
      var local = clamp(p * n - i, 0, 1);
      words[i].style.opacity = (0.16 + 0.84 * local).toFixed(3);
    }
  }
  function onScroll(){ if (raf) return; raf = requestAnimationFrame(function(){ raf = 0; fill(); }); }
  function enforce(){ if (!document.getElementById("iwos")) { built = false; words = []; build(); } }

  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }

  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-sop-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var BG = "/photos/BWPlus_Ivywall_02_Facade_Pool.jpg";
  var HEAD = ['DESIGNED', 'FOR HERE'];           // two lines, icon between
  var EYEBROW = "A sense of place";
  var CARDS = [
    { cls:"c1", t:"ROOTED IN BOHOL", d:"We didn’t import a foreign hotel onto Panglao — Best Western Plus standards, native Filipino soul, a hotel that belongs here.", img:"/photos/ivy_story_aerial.jpg" },
    { cls:"c2", t:"NATIVE FILIPINO DETAIL", d:"Banig-weave headboards, capiz-shell light, palm-wood inlay — each made by a Visayan supplier we know by name.", img:"/photos/BWPlus_Ivywall_11_Family_Room.jpg" },
    { cls:"c3", t:"SUNSETS ON TERAZA", d:"Calamansi mojitos and the Bohol horizon. The rooftop opens at four; most guests stay to the second cocktail.", img:"/photos/ivy_story_terrace_deck.jpg" }
  ];

  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function easeOut(t){return 1-Math.pow(1-t,3);}

  var wrap, stage, bg, head, eyebrow, cards = [], raf = 0, built = false;

  function build() {
    if (built && document.getElementById("iwsop")) return true;
    var orig = document.querySelector('section[class*="250vh"]');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else {
      var main = document.querySelector("main"); if (!main) return false;
      parentRef = main; beforeRef = null;
    }

    wrap = document.createElement("section"); wrap.id = "iwsop";
    stage = document.createElement("div"); stage.className = "sop-stage";

    bg = document.createElement("div"); bg.className = "sop-bg";
    var bgimg = document.createElement("img"); bgimg.src = BG; bgimg.alt = "A sense of place — The Ivywall, Panglao"; bg.appendChild(bgimg);
    var scrim = document.createElement("div"); scrim.className = "sop-scrim";

    head = document.createElement("h2"); head.className = "sop-head";
    head.innerHTML = HEAD[0] + '<br><span class="ic">✦</span>' + HEAD[1];

    eyebrow = document.createElement("div"); eyebrow.className = "sop-eyebrow"; eyebrow.textContent = EYEBROW.toUpperCase();

    stage.appendChild(bg); stage.appendChild(scrim); stage.appendChild(head);

    CARDS.forEach(function (cd) {
      var a = document.createElement("article"); a.className = "sop-card " + cd.cls;
      a.innerHTML =
        '<div class="cap"><span class="t"></span><span class="ar">→</span></div>' +
        '<p class="d"></p><div class="thumb"><img alt=""></div>';
      a.querySelector(".t").textContent = cd.t;
      a.querySelector(".d").textContent = cd.d;
      a.querySelector(".thumb img").src = cd.img;
      a.querySelector(".thumb img").alt = cd.t;
      stage.appendChild(a);
      cards.push(a);
    });
    stage.appendChild(eyebrow);
    wrap.appendChild(stage);
    parentRef.insertBefore(wrap, beforeRef);
    built = true;
    update();
    return true;
  }

  function update() {
    if (!wrap) return;
    var vh = window.innerHeight;
    var total = wrap.offsetHeight - vh;
    var p = total > 0 ? clamp(-wrap.getBoundingClientRect().top / total, 0, 1) : 0;

    // bg gentle zoom-out + parallax
    var bz = lerp(1.14, 1.02, easeOut(p));
    bg.style.transform = "scale(" + bz + ") translateY(" + (p * -2.4) + "%)";

    // heading rises and fades as you scroll
    head.style.transform = "translateY(" + (-p * vh * 0.22) + "px)";
    head.style.opacity = String(clamp(1 - (p - 0.32) / 0.34, 0.06, 1));

    // cards reveal staggered, then drift up slightly (depth parallax)
    var th = [0.05, 0.13, 0.21], drift = [0.05, 0.075, 0.1];
    for (var i = 0; i < cards.length; i++) {
      var rv = easeOut(clamp((p - th[i]) / 0.2, 0, 1));
      var y = (1 - rv) * 64 - p * vh * drift[i];
      cards[i].style.opacity = String(rv);
      cards[i].style.transform = "translateY(" + y + "px)";
    }

    eyebrow.style.opacity = String(clamp((p - 0.4) / 0.22, 0, 1));
  }

  function onScroll(){ if (raf) return; raf = requestAnimationFrame(function(){ raf = 0; update(); }); }
  function enforce(){ if (!document.getElementById("iwsop")) { built = false; cards = []; build(); } }

  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    try {
      var mo = new MutationObserver(function(){ enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function(){ try { mo.disconnect(); } catch(e){} }, 9000);
    } catch (e) {}
  }

  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function(){ setTimeout(init, 350); });
})();

/* iw-rog-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var WATERMARK = "GLANCE";
  var LABEL = "The resort · in one glance";
  var INTRO = "80 rooms means the team learns your name by day two. The grounds, the pool, the rooftop — all five minutes apart, never more.";
  var LINES = ["Small enough to feel personal.", "Complete enough to stay.", "Everything, five minutes apart."];

  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  var built = false, lineEls = [], water = null, open = null, raf = 0;

  function build() {
    if (built && document.getElementById("iwrog")) return true;
    var orig = document.querySelector('section[data-ivy-station="highlights"]');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else {
      var main = document.querySelector("main"); if (!main) return false;
      parentRef = main; beforeRef = null;
    }

    var s = document.createElement("section"); s.id = "iwrog";
    var linesHtml = LINES.map(function (t) { return '<div class="rog-line"><div class="txt">' + t + '</div></div>'; }).join("");
    s.innerHTML =
      '<div class="rog-stage">' +
        '<div class="rog-water"><span></span></div>' +
        '<div class="rog-open">' +
          '<div class="rog-emblem"><b>IW</b><em>EST · PANGLAO</em></div>' +
          '<div class="rog-label"></div>' +
          '<p class="rog-intro"></p>' +
        '</div>' +
        linesHtml +
      '</div>';

    s.querySelector(".rog-water span").textContent = WATERMARK;
    s.querySelector(".rog-label").textContent = LABEL.toUpperCase();
    s.querySelector(".rog-intro").textContent = INTRO;

    parentRef.insertBefore(s, beforeRef);
    built = true;
    water = s.querySelector(".rog-water span");
    open = s.querySelector(".rog-open");
    lineEls = [].slice.call(s.querySelectorAll(".rog-line")).map(function (l) { return l.querySelector(".txt"); });
    update();
    return true;
  }

  function update() {
    var sec = document.getElementById("iwrog"); if (!sec) return;
    var vh = window.innerHeight;
    var total = sec.offsetHeight - vh;
    var p = total > 0 ? clamp(-sec.getBoundingClientRect().top / total, 0, 1) : 0;

    // watermark gentle zoom for depth
    if (water) water.style.transform = "scale(" + (1 + p * 0.12).toFixed(3) + ")";

    // opening fades out as the lines begin
    if (open) {
      var oo = clamp(1 - p / 0.16, 0, 1);
      open.style.opacity = oo.toFixed(3);
      open.style.transform = "scale(" + (1 - (1 - oo) * 0.06).toFixed(3) + ")";
    }

    // each line flies from far (small, faint, low) -> focal (center) -> near (large, fading, high)
    var N = lineEls.length;
    for (var i = 0; i < N; i++) {
      var pc = 0.30 + i * 0.24;            // staggered peaks; windows overlap so 2+ show at once
      var t = (p - pc) / 0.20;             // -1 entering .. 0 focal .. +1 leaving
      var op = clamp(1 - Math.abs(t), 0, 1);
      op = Math.pow(op, 0.85);
      var sc = 0.62 + (clamp(t, -1, 1.3) + 1) / 2 * 0.92;   // ~0.62 (far) .. ~1.6 (close)
      var dy = -t * vh * 0.15;             // rises upward as it advances
      var el = lineEls[i];
      el.style.opacity = op.toFixed(3);
      el.style.transform = "translateY(" + dy.toFixed(1) + "px) scale(" + sc.toFixed(3) + ")";
      el.style.filter = op < 0.92 ? "blur(" + ((1 - op) * 1.7).toFixed(2) + "px)" : "none";
      el.parentNode.style.zIndex = String(3 + Math.round(sc * 10));
    }
  }

  function onScroll(){ if (raf) return; raf = requestAnimationFrame(function(){ raf = 0; update(); }); }
  function enforce(){ if (!document.getElementById("iwrog")) { built = false; lineEls = []; build(); } }

  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }

  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-rooms-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var EYEBROW = "Rooms & Suites — Four ways to settle in";
  var HEAD = "A room shaped around your stay";
  var ROOMS = [
    { n:"Superior Room", s:"28 m² · Queen · Sleeps 2", p:"₱5,800", img:"/photos/BWPlus_Ivywall_04_Superior_Room.jpg" },
    { n:"Deluxe Room",   s:"32 m² · King · Sleeps 3",  p:"₱7,800", img:"/photos/BWPlus_Ivywall_05_Deluxe_Room_SeaView.jpg" },
    { n:"Premier Room",  s:"38 m² · King · Sleeps 3",  p:"₱10,500", img:"/photos/BWPlus_Ivywall_06_Premier_Room.jpg" },
    { n:"Family Room",   s:"48 m² · Two Queens · Sleeps 4", p:"₱12,500", img:"/photos/BWPlus_Ivywall_11_Family_Room.jpg" }
  ];
  var ROOMS_HREF = "/rooms/";
  var built = false, sectionEl = null, headEl = null;

  function build() {
    if (built && document.getElementById("iwrooms")) return true;
    var orig = document.querySelector('section[style*="vh"]:not(.bg-palm-night)');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else {
      var main = document.querySelector("main"); if (!main) return false;
      parentRef = main; beforeRef = null;
    }

    var s = document.createElement("section"); s.id = "iwrooms";
    var n = ROOMS.length;
    var panels = ROOMS.map(function (r, i) {
      return '<div class="rs-panel"><div class="rs-card">' +
          '<img src="' + r.img + '" alt="' + r.n + ' — The Ivywall, Panglao">' +
          '<div class="rs-cap"><div class="left">' +
            '<div class="idx">0' + (i + 1) + ' / 0' + n + '</div>' +
            '<h3>' + r.n + '</h3><div class="specs">' + r.s + '</div></div>' +
          '<div class="right"><div class="price">' + r.p + '<small>From / night</small></div>' +
            '<a class="view" href="' + ROOMS_HREF + '">View details →</a></div></div>' +
        '</div></div>';
    }).join("");
    s.innerHTML =
      '<div class="rs-head"><div class="eyebrow">' + EYEBROW + '</div><h2>' + HEAD + '</h2></div>' +
      '<div class="rs-deck">' + panels + '</div>' +
      '<div class="rs-foot"><a href="' + ROOMS_HREF + '">See all rooms <span>→</span></a></div>';

    parentRef.insertBefore(s, beforeRef);
    sectionEl = s; headEl = s.querySelector(".rs-head"); built = true;
    measure();
    try {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("shown"); } });
      }, { threshold: 0.25 });
      s.querySelectorAll(".rs-panel").forEach(function (p) { io.observe(p); });
    } catch (e) { s.querySelectorAll(".rs-panel").forEach(function (p) { p.classList.add("shown"); }); }
    return true;
  }

  function measure() {
    if (!sectionEl || !headEl) return;
    var nav = document.getElementById("iwnav") || document.querySelector("header");
    var topH = nav ? Math.round(nav.getBoundingClientRect().height) : 64;
    if (!topH || topH < 30) topH = 64;
    sectionEl.style.setProperty("--rsTop", topH + "px");
    sectionEl.style.setProperty("--rsHeadH", headEl.offsetHeight + "px");
  }
  function enforce() { if (!document.getElementById("iwrooms")) { built = false; build(); } }
  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    window.addEventListener("resize", function () { measure(); }, { passive: true });
    setTimeout(measure, 500); setTimeout(measure, 1300);
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }
  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-bohol-v1 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var EYEBROW = "Two restaurants · one menu of memory";
  var HEAD = 'BOHOL ON<br><span class="orn">✦</span>A PLATE';
  var DESC_LABEL = "Alon · Teraza";
  var DESC = "Slow Filipino breakfasts at Alon, sunset cocktails on Teraza — both open to the island air.";
  // scattered food collage; pos in vw/vh, slide-in from each edge
  var IMAGES = [
    { img:"/photos/BWPlus_Ivywall_21_Boodle_Platter.jpg",    css:"top:9%;left:3.5%;width:clamp(150px,17vw,270px);height:clamp(110px,13vw,200px);", fx:-90, fy:0,  th:0.05, tag:"Boodle <b>feast</b>" },
    { img:"/photos/BWPlus_Ivywall_10_Signature_Seafood.jpg", css:"top:13%;right:4%;width:clamp(165px,19vw,310px);height:clamp(120px,14vw,220px);", fx:100, fy:0,  th:0.12, tag:"Seafood <b>paella</b>" },
    { img:"/photos/BWPlus_Ivywall_22_Banana_Cocktail.jpg",   css:"top:44%;left:5.5%;width:clamp(110px,12vw,200px);height:clamp(140px,15vw,250px);", fx:-80, fy:0, th:0.2,  tag:"Calamansi <b>&amp; coconut</b>" },
    { img:"/photos/BWPlus_Ivywall_07_Restaurant.jpg",        css:"bottom:7%;left:12%;width:clamp(150px,16vw,260px);height:clamp(105px,12vw,180px);", fx:0, fy:90, th:0.28, tag:"" },
    { img:"/photos/BWPlus_Ivywall_19_Alon_Dining_Alt.jpg",   css:"bottom:5%;left:40%;width:clamp(160px,16vw,270px);height:clamp(110px,13vw,195px);", fx:0, fy:100,th:0.36, tag:"Alon <b>all-day</b>" },
    { img:"/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg", css:"bottom:13%;right:5%;width:clamp(155px,17vw,280px);height:clamp(115px,14vw,205px);", fx:95, fy:0, th:0.44, tag:"Teraza <b>rooftop</b>" }
  ];
  var DINING_HREF = "/dining/";

  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function easeOut(t){return 1-Math.pow(1-t,3);}
  var built = false, imgs = [], head = null, eyebrow = null, desc = null, raf = 0;

  function build() {
    if (built && document.getElementById("iwbp")) return true;
    var orig = document.querySelector('section[data-ivy-station="dining"]');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else {
      var main = document.querySelector("main"); if (!main) return false;
      parentRef = main; beforeRef = null;
    }

    var s = document.createElement("section"); s.id = "iwbp";
    var imgsHtml = IMAGES.map(function (im) {
      return '<div class="bp-img" style="' + im.css + '"><img src="' + im.img + '" alt="Local Boholano dish at The Ivywall">' +
        (im.tag ? '<div class="tag">' + im.tag + '</div>' : '') + '</div>';
    }).join("");
    s.innerHTML =
      '<div class="bp-stage">' +
        '<div class="bp-eyebrow">' + EYEBROW + '</div>' +
        '<h2 class="bp-head">' + HEAD + '</h2>' +
        '<div class="bp-desc"><span class="l">' + DESC_LABEL + '</span>' + DESC + '</div>' +
        imgsHtml +
      '</div>' +
      '<div class="bp-foot"><a href="' + DINING_HREF + '">Explore dining <span>→</span></a></div>';

    parentRef.insertBefore(s, beforeRef);
    built = true;
    head = s.querySelector(".bp-head"); eyebrow = s.querySelector(".bp-eyebrow"); desc = s.querySelector(".bp-desc");
    imgs = [].slice.call(s.querySelectorAll(".bp-img"));
    update();
    return true;
  }

  function update() {
    var sec = document.getElementById("iwbp"); if (!sec) return;
    var vh = window.innerHeight;
    var total = sec.offsetHeight - vh;
    var p = total > 0 ? clamp(-sec.getBoundingClientRect().top / total, 0, 1) : 0;

    var he = easeOut(clamp(p / 0.10, 0, 1));
    if (head) head.style.opacity = String(0.2 + 0.8 * he);
    if (eyebrow) eyebrow.style.opacity = String(he);
    if (desc) desc.style.opacity = String(clamp((p - 0.3) / 0.22, 0, 1));

    for (var i = 0; i < imgs.length; i++) {
      var d = IMAGES[i];
      var rv = easeOut(clamp((p - d.th) / 0.24, 0, 1));
      var par = (p - 0.5) * (8 + i * 3);          // gentle differential parallax (depth)
      var tx = (1 - rv) * d.fx;
      var ty = (1 - rv) * d.fy - par;
      imgs[i].style.opacity = String(rv);
      imgs[i].style.transform = "translate(" + tx.toFixed(1) + "px," + ty.toFixed(1) + "px)";
    }
  }

  function onScroll(){ if (raf) return; raf = requestAnimationFrame(function(){ raf = 0; update(); }); }
  function enforce(){ if (!document.getElementById("iwbp")) { built = false; imgs = []; build(); } }

  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }

  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-exp-v1 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var EYEBROW = "Premium Bohol experiences";
  var HEAD = "Experiences";
  var VIEWALL_HREF = "/experiences/";
  var FOOT = "Handpicked experiences that showcase the best of Bohol’s nature, culture and adventures — all arranged by our front desk.";
  var EXPS = [
    { t:"Balicasag Dolphin & Marine Sanctuary", c:"Island", h:"4 hrs", img:"/experiences/exp_balicasag.jpg" },
    { t:"Chocolate Hills & Countryside", c:"Nature", h:"8 hrs", img:"/experiences/exp_chocolate_hills.jpg" },
    { t:"Tarsier Sanctuary", c:"Nature", h:"1.5 hrs", img:"/experiences/exp_tarsier.jpg" },
    { t:"Loboc River Cruise", c:"Culture", h:"2 hrs", img:"/experiences/exp_loboc_river.jpg" },
    { t:"Hinagdanan Cave", c:"Adventure", h:"1 hr", img:"/experiences/exp_hinagdanan_cave.jpg" },
    { t:"Panglao Wall Diving", c:"Adventure", h:"5 hrs", img:"/experiences/exp_panglao_wall_diving.jpg" }
  ];

  var built = false, preview = null, pvImg = null, raf = 0, mx = 0, my = 0;

  function build() {
    if (built && document.getElementById("iwex")) return true;
    var orig = document.querySelector('section.container-x.py-14');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else {
      var main = document.querySelector("main"); if (!main) return false;
      parentRef = main; beforeRef = null;
    }

    var arrow = '<span class="ex-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg></span>';
    var rows = EXPS.map(function (e, i) {
      return '<a class="ex-row" href="' + VIEWALL_HREF + '" data-img="' + e.img + '">' +
        '<span class="ex-l"><span class="ex-num">0' + (i + 1) + '</span>' +
          '<span class="ex-main"><h3 class="ex-title">' + e.t + '</h3>' +
            '<span class="ex-tags"><span>' + e.c + '</span><span>' + e.h + '</span></span></span></span>' +
        arrow + '</a>';
    }).join("");

    var s = document.createElement("section"); s.id = "iwex";
    s.innerHTML =
      '<div class="ex-wrap">' +
        '<div class="ex-top"><div><div class="ex-eyebrow">' + EYEBROW + '</div>' +
          '<h2 class="ex-h">' + HEAD + '</h2></div>' +
          '<a class="ex-viewall" href="' + VIEWALL_HREF + '">View all experiences ↗</a></div>' +
        '<div class="ex-list">' + rows + '</div>' +
      '</div>' +
      '<div class="ex-foot">' + FOOT + '</div>';

    parentRef.insertBefore(s, beforeRef);

    preview = document.createElement("div"); preview.id = "iwex-preview";
    preview.innerHTML = '<img alt=""><span class="vb">View</span>';
    pvImg = preview.querySelector("img");
    document.body.appendChild(preview);

    built = true;
    wire(s);
    return true;
  }

  function wire(s) {
    var rows = [].slice.call(s.querySelectorAll(".ex-row"));
    rows.forEach(function (r) {
      r.addEventListener("mouseenter", function () { pvImg.src = r.getAttribute("data-img"); preview.classList.add("on"); });
      r.addEventListener("mouseleave", function () { preview.classList.remove("on"); });
    });
    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(function () { raf = 0; preview.style.left = mx + "px"; preview.style.top = my + "px"; });
    }, { passive: true });

    // reveal rows on scroll
    try {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e, idx) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { threshold: 0.2 });
      rows.forEach(function (r, i) { r.style.transitionDelay = (i * 0.05) + "s"; io.observe(r); });
    } catch (e) { rows.forEach(function (r) { r.classList.add("in"); }); }
  }

  function enforce() { if (!document.getElementById("iwex")) { built = false; build(); } }

  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }

  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-rv-v1 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var EYEBROW = "Guest reviews · 4.6 ★";
  var HEAD = "What guests say,<br>in their own words.";
  var META = '<b>4.6</b> average · <b>1,240+</b> reviews · Tripadvisor &amp; Google <span class="dot"></span> <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener">Read all reviews ↗</a>';
  // full + short testimonials (the user's real review copy), arranged like a community thread
  var CARDS = [
    { cls:"sage",  t:"Our favourite stay in the Philippines", q:"Everything from the welcome to the pillow menu felt considered. The pool-access room was magical at sunset, and the Teraza rooftop dinner was the highlight of our trip.", av:"HK", nm:"Hiroko & Kenji", mt:"Tokyo, Japan · Honeymoon · 4 nights", src:"Tripadvisor · Mar 2026" },
    { cls:"short coral", q:"Felt like coming home — Boholano warmth with a four-star finish.", av:"AM", nm:"Aileen & Marco", mt:"Manila" },
    { cls:"cream", t:"Kids refused to leave the pool", q:"The reservation team handled our late arrival without any fuss — a free upgrade we didn’t expect. Kids loved the pool. We already booked a return trip for December.", av:"P", nm:"The Park Family", mt:"Seoul, Korea · Family · 5 nights", src:"Tripadvisor · Feb 2026" },
    { cls:"gray", t:"Quiet luxury, genuinely warm staff", q:"They remembered our names by day two. Banig textile headboard, capiz shell lamp, palm-wood details — never kitschy. Would return without hesitation.", av:"ML", nm:"Marco & Lucia", mt:"Milan, Italy · Couple · 6 nights", src:"Tripadvisor · Jan 2026" },
    { cls:"short sage", q:"Three stays in. The little things make it every single time.", av:"JT", nm:"Jonathan T.", mt:"Singapore" },
    { cls:"cream", t:"Best four-star on Panglao", q:"Late checkout when you ask, a breakfast you actually look forward to, and a team that remembers returning guests. Nothing feels transactional here.", av:"JT", nm:"Jonathan T.", mt:"Singapore · Solo · 3 nights", src:"Tripadvisor · Dec 2025" },
    { cls:"blush", t:"Honeymoon perfection", q:"The suite overlooking Balicasag at sunrise — we still talk about it. The honeymoon setup felt sincere rather than staged. Book it early.", av:"MD", nm:"Mei Lin & David", mt:"Hong Kong · Honeymoon · 5 nights", src:"Tripadvisor · Nov 2025" },
    { cls:"short gray", q:"Soft mornings, an incredible breakfast, and staff who knew our names by dinner.", av:"HK", nm:"Hiroko & Kenji", mt:"Tokyo" }
  ];

  var built = false;
  function build() {
    if (built && document.getElementById("iwrv")) return true;
    var orig = document.querySelector('section[data-ivy-station="reviews"]');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else {
      var main = document.querySelector("main"); if (!main) return false;
      parentRef = main; beforeRef = null;
    }

    var cards = CARDS.map(function (c) {
      var title = c.t ? '<h3 class="rv-t">' + c.t + '</h3>' : '';
      var src = c.src ? '<div class="rv-src">' + c.src + '</div>' : '';
      return '<article class="rv-card ' + c.cls + '">' + title +
        '<p class="rv-q">' + (c.cls.indexOf("short") > -1 ? "“" + c.q + "”" : c.q) + '</p>' +
        '<div class="rv-who"><span class="rv-av">' + c.av + '</span>' +
          '<span><span class="nm">' + c.nm + '</span><span class="mt">' + c.mt + '</span></span></div>' +
        src + '</article>';
    }).join("");

    var s = document.createElement("section"); s.id = "iwrv";
    s.innerHTML =
      '<div class="rv-wrap">' +
        '<div class="rv-head"><div class="rv-eyebrow">' + EYEBROW + '</div>' +
          '<h2>' + HEAD + '</h2><div class="rv-meta">' + META + '</div></div>' +
        '<div class="rv-grid">' + cards + '</div>' +
      '</div>';

    parentRef.insertBefore(s, beforeRef);
    built = true;
    try {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      s.querySelectorAll(".rv-card").forEach(function (c, i) { c.style.transitionDelay = (i % 3 * 0.06) + "s"; io.observe(c); });
    } catch (e) { s.querySelectorAll(".rv-card").forEach(function (c) { c.classList.add("in"); }); }
    return true;
  }
  function enforce() { if (!document.getElementById("iwrv")) { built = false; build(); } }
  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }
  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

