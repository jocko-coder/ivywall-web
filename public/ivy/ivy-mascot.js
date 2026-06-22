/* Ivy mascot. Two pieces:
   1) HERO WAVER — a waving Ivy that stands just above the hero booking window.
   2) FLOATING DOCK — a lively bottom-left avatar that opens the chat, cycles
      cute clips (happy / giggle / stretch / gaze / wave) and pops speech
      bubbles. The YAWN only fires once, when the Rooms & Suites section
      scrolls into view.
   Reuses the IvyAvatar chroma-key engine (ivy-avatar3.js). ADDITIVE ONLY:
   appends its own fixed/absolute elements, never mutates React-owned DOM.
   The chat drawer is the React <IvyAgent>; the dock just calls window.__openIvy().
   IvyAgent toggles html.ivy-panel-open so we hide/pause while chatting. */
(function () {
  "use strict";
  if (window.__ivyMascotInit) return;
  window.__ivyMascotInit = true;

  var C = {
    idle: "/clips/ivy_idle.mp4",
    wave: "/clips/ivy_wave.mp4",
    yawn: "/clips/ivy_yawn.mp4",
    happy: "/clips/ivy_happy.mp4",
    giggle: "/clips/ivy_giggle.mp4",
    stretch: "/clips/ivy_stretch.mp4",
    gaze: "/clips/ivy_gaze.mp4"
  };
  var POSTER = "/clips/poster.png";
  var isMobile = matchMedia("(max-width: 768px)").matches;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Old / low-power devices: skip the CPU-heavy chroma-key canvas + video clips
  // and fall back to a static poster. Ivy still appears, opens chat, and speaks
  // bubbles — she just doesn't animate. Keeps the site light on weak hardware.
  var nv = typeof navigator !== "undefined" ? navigator : {};
  var lowEnd = (nv.deviceMemory && nv.deviceMemory < 4)
    || (nv.hardwareConcurrency && nv.hardwareConcurrency <= 2)
    || (nv.connection && nv.connection.saveData);
  var hasEngine = !!window.IvyAvatar && !reduce && !lowEnd;
  var avatars = [];
  var dockReady = false;

  function panelOpen() { return document.documentElement.classList.contains("ivy-panel-open"); }

  /* ---- styles ---- */
  var dockSize = isMobile ? 80 : 116;        // a little bigger than before (was 64 / 88)
  var dockBottom = isMobile ? 20 : 24;
  var css = ""
    + "#ivy-dock{position:fixed;left:18px;bottom:" + dockBottom + "px;z-index:60;width:" + dockSize + "px;height:" + dockSize + "px;border:0;background:transparent;padding:0;cursor:pointer;opacity:0;transform:translateY(14px) scale(.9);transition:opacity .45s ease,transform .45s cubic-bezier(.18,.9,.3,1.2);-webkit-tap-highlight-color:transparent}"
    + "#ivy-dock.in{opacity:1;transform:none}"
    + "#ivy-dock:hover{transform:translateY(-3px)}"
    + "#ivy-dock .ivy-dock-canvas{width:100%;height:100%}"
    + ".ivy-bub{position:fixed;left:18px;z-index:61;max-width:236px;background:#fff;color:#22201c;border-radius:16px;border-bottom-left-radius:4px;padding:10px 13px;font:500 13px/1.4 var(--font-sans),system-ui,sans-serif;box-shadow:0 14px 32px rgba(0,0,0,.22);opacity:0;transform:translateY(8px) scale(.96);transform-origin:bottom left;transition:.4s cubic-bezier(.18,.9,.3,1.2);pointer-events:none}"
    + ".ivy-bub.in{opacity:1;transform:none}"
    + "#ivy-hero-waver{position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .5s ease}"
    + "#ivy-hero-waver.in{opacity:1}"
    + "html.ivy-panel-open #ivy-dock,html.ivy-panel-open .ivy-bub{opacity:0!important;visibility:hidden!important;pointer-events:none!important}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ================= 1) HERO WAVER (stands above the booking window) ========= */
  function removeHeroWaver() {
    var w = document.getElementById("ivy-hero-waver"); if (!w) return;
    if (w._av) { try { w._av.pause(); } catch (e) {} var k = avatars.indexOf(w._av); if (k >= 0) avatars.splice(k, 1); }
    w.remove();
  }
  function placeHeroWaver() {
    if (isMobile || !hasEngine) return;               // desktop only
    var booking = document.querySelector("[data-ivy-booking]");
    var hero = document.querySelector("main section");
    var onHome = hero && /soft mornings|boholano/i.test(hero.textContent || "");
    if (!booking || !onHome) { removeHeroWaver(); return; }

    var W = 104, H = 104;                              // smaller waver
    var wrap = document.getElementById("ivy-hero-waver");
    if (!wrap) {
      wrap = document.createElement("div"); wrap.id = "ivy-hero-waver";
      wrap.style.width = W + "px"; wrap.style.height = H + "px";
      document.body.appendChild(wrap);
      wrap._av = new IvyAvatar(wrap, { clips: { idle: C.wave }, fit: "contain", zoom: 1, gLo: 14, gHi: 50 }); // wave loops
      avatars.push(wrap._av);
    }
    // Prefer standing on the orange Search button; fall back to the card's top-right.
    var anchor = booking.querySelector("[data-ivy-search]") || booking;
    var r = anchor.getBoundingClientRect();
    // Centre her over the button and rest her feet on its top edge (small overlap).
    var left = r.left + window.scrollX + r.width / 2 - W / 2;
    var top = r.top + window.scrollY - H + 10;         // +10 => feet rest on the button's top edge
    wrap.style.left = Math.round(left) + "px";
    wrap.style.top = Math.round(top) + "px";
    requestAnimationFrame(function () { wrap.classList.add("in"); });
  }
  addEventListener("resize", placeHeroWaver, { passive: true });
  addEventListener("scroll", placeHeroWaver, { passive: true });

  /* ================= 2) FLOATING DOCK ======================================= */
  var dock = document.createElement("button");
  dock.id = "ivy-dock";
  dock.setAttribute("aria-label", "Chat with Ivy");
  dock.innerHTML = '<div class="ivy-dock-canvas"></div>';
  document.body.appendChild(dock);
  dock.addEventListener("click", function () { hideBubble(); try { window.__openIvy && window.__openIvy(); } catch (e) {} });

  // Lean clip set on mobile (data saving); full lively set on desktop.
  var dockClips = isMobile
    ? { idle: C.idle, wave: C.wave, yawn: C.yawn }
    : { idle: C.idle, wave: C.wave, yawn: C.yawn, happy: C.happy, giggle: C.giggle, stretch: C.stretch, gaze: C.gaze };

  var dockIvy = null;
  if (!hasEngine) {
    var img = document.createElement("img"); img.src = POSTER; img.alt = ""; img.style.cssText = "width:100%;height:100%;object-fit:contain";
    dock.querySelector(".ivy-dock-canvas").appendChild(img); dockReady = true;
  } else {
    dockIvy = new IvyAvatar(dock.querySelector(".ivy-dock-canvas"), { clips: dockClips, fit: "contain", zoom: 1, gLo: 14, gHi: 50 });
    avatars.push(dockIvy); dockReady = true;
  }

  /* ---- speech bubble (just above the dock) ---- */
  var bub = document.createElement("div");
  bub.className = "ivy-bub";
  bub.style.bottom = (dockBottom + dockSize + 8) + "px";
  document.body.appendChild(bub);
  var bubTimer = null;
  function hideBubble() { bub.classList.remove("in"); }
  function showBubble(text, ms) {
    if (panelOpen() || !dockVisible()) return;
    bub.textContent = text;
    bub.classList.add("in");
    clearTimeout(bubTimer);
    bubTimer = setTimeout(hideBubble, ms || 5000);
  }

  // Cute clips for the random "alive" beats — yawn is NOT here (rooms-only).
  var BEATS = isMobile ? ["wave"] : ["happy", "giggle", "stretch", "gaze", "wave"];
  var LINES = [
    "Need a hand booking? Tap me 🐚",
    "Ask me anything about the resort ✦",
    "Best rates are right here. Let's chat!",
    "Curious about Alona Beach? I know it all 🌊",
    "Hi! I'm Ivy, your reef-side concierge ✨"
  ];
  var li = 0, bi = 0;

  /* ---- visibility (reveal after the hero scrolls away) ---- */
  function dockVisible() {
    return dockReady && !panelOpen() && (window.scrollY || window.pageYOffset || 0) > 60;
  }
  function updateDock() {
    var show = dockVisible();
    dock.classList.toggle("in", show);
    if (!show) hideBubble();
  }
  addEventListener("scroll", updateDock, { passive: true });
  updateDock();

  /* ---- "alive" beats: a cute clip + rotating speech bubble ---- */
  function performBeat() {
    if (!dockVisible()) return;
    if (dockIvy) {                       // animated clip only when the engine is on
      try {
        var clip = BEATS[bi % BEATS.length]; bi++;
        if (clip === "wave" && dockIvy.wave) dockIvy.wave();
        else if (dockIvy.playOnce) dockIvy.playOnce(clip);
      } catch (e) {}
    }
    showBubble(LINES[li % LINES.length], 5200); li++;   // bubble shows on any device
  }
  var firstShown = false;
  addEventListener("scroll", function () {
    if (!firstShown && dockVisible()) { firstShown = true; setTimeout(performBeat, 700); }
  }, { passive: true });
  setInterval(performBeat, 14000);

  /* ---- YAWN: fires once when Rooms & Suites scrolls into view ---- */
  function byHeading(re) {
    var hs = document.querySelectorAll("h1,h2,h3");
    for (var i = 0; i < hs.length; i++) if (re.test((hs[i].textContent || "").trim())) return hs[i];
    return null;
  }
  var yawnArmed = false, yawnFired = false;
  function armYawn() {
    if (yawnArmed || yawnFired || !window.IntersectionObserver) return;
    var h = byHeading(/rooms\s*&\s*suites/i) || byHeading(/four ways to settle/i);
    if (!h) return;
    yawnArmed = true;
    new IntersectionObserver(function (es, obs) {
      es.forEach(function (e) {
        if (!e.isIntersecting || yawnFired || panelOpen()) return;
        yawnFired = true; obs.disconnect();
        if (dockIvy && dockIvy.playOnce) { try { dockIvy.playOnce("yawn"); } catch (er) {} }
        showBubble("I test-nap every bed — strictly quality control 😴", 5600);
      });
    }, { threshold: 0.5 }).observe(h);
  }

  /* ---- pause/resume rendering when the chat drawer opens/closes ---- */
  var mo = new MutationObserver(function () {
    var p = panelOpen();
    avatars.forEach(function (a) { try { p ? a.pause && a.pause() : a.resume && a.resume(); } catch (e) {} });
    updateDock();
  });
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  /* ---- setup + SPA route handling ---- */
  function setup() { placeHeroWaver(); armYawn(); }
  setup();
  [400, 1200, 2600, 5000].forEach(function (t) { setTimeout(setup, t); });
  addEventListener("scroll", function once() { setup(); }, { passive: true, once: true });

  function onRoute() {
    hideBubble(); yawnArmed = false; yawnFired = false;
    [80, 400, 900].forEach(function (t) { setTimeout(function () { setup(); updateDock(); }, t); });
  }
  addEventListener("popstate", onRoute);
  ["pushState", "replaceState"].forEach(function (m) {
    var o = history[m]; if (typeof o !== "function") return;
    history[m] = function () { var r = o.apply(this, arguments); onRoute(); return r; };
  });
})();
