/* ═══════════════════════════════════════════════════════════════════
   Cookie consent for hublytix.ai
   ═══════════════════════════════════════════════════════════════════
   Two tags run on this site and they need opposite treatment.

   GOOGLE'S TAGS ARE ALWAYS PRESENT. Every page sets consent mode to denied
   before gtag.js loads, so an unanswered banner still measures — cookielessly,
   with no identifier written and no cross-site profile. Accepting calls
   'consent'/'update' and storage turns on. That is why the default lives
   inline in the head rather than here: it has to run before gtag.js, and a
   deferred file cannot.

   FACTORS HAS NO SUCH MODE. Its script IS the identification — it resolves a
   visit to the company behind it — so the only way to honour "Essential only"
   is not to load it at all. It is injected from here, after a yes, and never
   otherwise.

   ⚠ THE CHOICE IS A COOKIE ON .hublytix.ai, NOT localStorage, and that is the
   whole point of storing it this way. localStorage is per-ORIGIN: a visitor
   who accepted here would arrive at app.hublytix.ai denied and be asked a
   second time, which is how the app's own banner behaves today. A cookie on
   the parent domain is readable by both, so the app can adopt this same choice
   without asking again. Nothing reads it there yet — that is the follow-up —
   but storing it any other way would close the door on it.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var NAME = "hublytix_consent_v1";
  var DAYS = 180;
  var POLICY = "https://app.hublytix.ai/legal/cookies";

  var FACTORS_TOKEN = "6rqvxvkcyyd3izjkjo70ssl92zyd8c4j";
  var FACTORS_HOST = "https://api.factors.ai";
  var FACTORS_SDK = "https://app.factors.ai/assets/factors.js";

  function read() {
    try {
      var m = document.cookie.match(new RegExp("(?:^|; )" + NAME + "=([^;]*)"));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (e) { return null; }
  }

  function write(v) {
    try {
      // Host-wide on purpose — see the note above. Lax is correct for a
      // preference read on normal navigation; it is never sent cross-site.
      document.cookie =
        NAME + "=" + v + "; Max-Age=" + DAYS * 86400 +
        "; Path=/; Domain=.hublytix.ai; SameSite=Lax; Secure";
    } catch (e) { /* a preference must never break the page */ }
  }

  function tellGoogle(granted) {
    try {
      var v = granted ? "granted" : "denied";
      // gtag is defined inline in the head, so this is safe even if gtag.js
      // itself has not finished loading: the shim queues onto dataLayer.
      if (window.gtag) window.gtag("consent", "update", {
        ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v
      });
    } catch (e) { /* as above */ }
  }

  var factorsLoaded = false;
  function loadFactors() {
    if (factorsLoaded || window.faitracker) return;
    factorsLoaded = true;
    try {
      window.faitracker = window.faitracker || (function () {
        this.q = [];
        var t = new CustomEvent("FAITRACKER_QUEUED_EVENT");
        this.init = function (tok, params, cb) {
          this.TOKEN = tok; this.INIT_PARAMS = params; this.INIT_CALLBACK = cb;
          window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"));
        };
        this.call = function () {
          var e = { k: "", a: [] };
          if (arguments && arguments.length >= 1) {
            for (var i = 1; i < arguments.length; i++) e.a.push(arguments[i]);
            e.k = arguments[0];
          }
          this.q.push(e); window.dispatchEvent(t);
        };
        this.message = function () {
          window.addEventListener("message", function (ev) {
            if (ev.data && ev.data.origin === "faitracker")
              window.faitracker.call("message", ev.data.type, ev.data.message);
          });
        };
        this.message();
        this.init(FACTORS_TOKEN, { host: FACTORS_HOST });
        return this;
        // ⚠ .call(window), NOT (). This file is strict-mode, where a plain
        // call gets `this === undefined` and the first line of the shim throws
        // — into the catch below, silently, leaving Factors unloaded while
        // every other part of accepting appears to work. Factors ship this
        // snippet for a sloppy-mode <script>, where `this` IS window, and the
        // shim genuinely means window: it hangs q/init/call/message off it.
        // Binding it explicitly is what makes strict mode safe here.
      }).call(window);
      var s = document.createElement("script");
      s.type = "text/javascript"; s.src = FACTORS_SDK; s.async = true;
      var first = document.getElementsByTagName("script")[0];
      first.parentNode.insertBefore(s, first);
    } catch (e) { /* analytics must never break the page */ }
  }

  function apply(granted) {
    tellGoogle(granted);
    if (granted) loadFactors();
  }

  // ── Banner ────────────────────────────────────────────────────────
  function banner() {
    var style = document.createElement("style");
    style.textContent =
      '.hx-cc{position:fixed;left:0;right:0;bottom:0;z-index:9999;padding:16px;' +
      'padding-bottom:max(16px,env(safe-area-inset-bottom));pointer-events:none}' +
      '.hx-cc-in{pointer-events:auto;max-width:640px;margin:0 auto;background:var(--white,#fff);' +
      'border:1px solid var(--line,#E4E7EC);border-radius:14px;padding:18px 20px;' +
      'box-shadow:0 14px 38px rgba(36,54,90,.16)}' +
      '.hx-cc p{margin:0;font-size:13.5px;line-height:1.6;color:var(--ink-2,#3C5077)}' +
      '.hx-cc a{color:var(--blue,#0057FF)}' +
      '.hx-cc-btns{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}' +
      '.hx-cc button{min-height:44px;padding:0 18px;border-radius:9px;font:inherit;' +
      'font-size:14px;font-weight:500;cursor:pointer;border:1px solid transparent}' +
      '.hx-cc .hx-ok{background:var(--blue,#0057FF);color:#fff}' +
      '.hx-cc .hx-ok:hover{background:var(--blue-hover,#0049D9)}' +
      '.hx-cc .hx-no{background:var(--white,#fff);border-color:var(--line,#E4E7EC);color:var(--ink,#24365A)}' +
      '.hx-cc .hx-no:hover{border-color:var(--muted,#728096)}';
    document.head.appendChild(style);

    var wrap = document.createElement("div");
    wrap.className = "hx-cc";
    wrap.setAttribute("role", "region");
    wrap.setAttribute("aria-label", "Cookie choices");
    wrap.innerHTML =
      '<div class="hx-cc-in"><p>We use cookies to keep this site working. With your ' +
      'consent we also use Google Analytics, Google Ads and Factors.ai to see how ' +
      'people find us and which adverts lead to a purchase. Choose Essential only ' +
      'and none of them is set. See our <a href="' + POLICY + '">Cookie Policy</a>.</p>' +
      '<div class="hx-cc-btns"><button type="button" class="hx-ok">Accept</button>' +
      '<button type="button" class="hx-no">Essential only</button></div></div>';
    document.body.appendChild(wrap);

    // The banner is fixed, so without this it can sit over the footer on a
    // document only slightly taller than the viewport — the same bug the app's
    // banner solves with a measured spacer.
    var pad = document.body.style.paddingBottom;
    document.body.style.paddingBottom = wrap.offsetHeight + "px";

    function choose(granted) {
      write(granted ? "granted" : "denied");
      apply(granted);
      document.body.style.paddingBottom = pad;
      wrap.remove();
    }
    wrap.querySelector(".hx-ok").addEventListener("click", function () { choose(true); });
    wrap.querySelector(".hx-no").addEventListener("click", function () { choose(false); });
  }

  var stored = read();
  if (stored === "granted") {
    // ⚠ THE RETURNING VISITOR. Consent mode defaults to denied on EVERY page
    // load, so a stored yes must be re-applied here or it is granted exactly
    // once — on the click — and silently lost on every visit afterwards.
    apply(true);
  } else if (stored === "denied") {
    apply(false);
  } else if (document.body) {
    banner();
  } else {
    document.addEventListener("DOMContentLoaded", banner);
  }
})();
