!(function () {
  var e,
    t,
    r,
    o,
    a = {
      frameRate: 60,
      animationTime: 500,
      stepSize: 100,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: !0,
      accelerationDelta: 0,
      accelerationMax: 0,
      keyboardSupport: !0,
      arrowScroll: 100,
      fixedBackground: !0,
      excluded: "",
    },
    n = a,
    l = !1,
    i = { x: 0, y: 0 },
    s = !1,
    c = document.documentElement,
    u = [],
    d = /^Mac/.test(navigator.platform),
    f = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
    },
    h = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function $() {
    if (!s && document.body) {
      s = !0;
      var o = document.body,
        a = document.documentElement,
        i = window.innerHeight,
        u = o.scrollHeight;
      if (
        ((c = document.compatMode.indexOf("CSS") >= 0 ? a : o),
        (e = o),
        n.keyboardSupport && X("keydown", b),
        top != self)
      )
        l = !0;
      else if (Z && u > i && (o.offsetHeight <= i || a.offsetHeight <= i)) {
        var d,
          f = document.createElement("div");
        if (
          ((f.style.cssText =
            "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
            c.scrollHeight +
            "px"),
          document.body.appendChild(f),
          (r = function () {
            d ||
              (d = setTimeout(function () {
                (f.style.height = "0"),
                  (f.style.height = c.scrollHeight + "px"),
                  (d = null);
              }, 500));
          }),
          setTimeout(r, 10),
          X("resize", r),
          (t = new q(r)).observe(o, {
            attributes: !0,
            childList: !0,
            characterData: !1,
          }),
          c.offsetHeight <= i)
        ) {
          var h = document.createElement("div");
          (h.style.clear = "both"), o.appendChild(h);
        }
      }
      n.fixedBackground ||
        ((o.style.backgroundAttachment = "scroll"),
        (a.style.backgroundAttachment = "scroll"));
    }
  }
  var p = [],
    v = !1,
    m = Date.now();
  function _(e, t, r) {
    var o, a;
    if (
      ((o = (o = t) > 0 ? 1 : -1),
      (a = (a = r) > 0 ? 1 : -1),
      (i.x !== o || i.y !== a) && ((i.x = o), (i.y = a), (p = []), (m = 0)),
      1 != n.accelerationMax)
    ) {
      var l = Date.now() - m;
      if (l < n.accelerationDelta) {
        var s = (1 + 50 / l) / 2;
        s > 1 && ((t *= s = Math.min(s, n.accelerationMax)), (r *= s));
      }
      m = Date.now();
    }
    if (
      (p.push({
        x: t,
        y: r,
        lastX: t < 0 ? 0.99 : -0.99,
        lastY: r < 0 ? 0.99 : -0.99,
        start: Date.now(),
      }),
      !v)
    ) {
      var c = e === j() || e === document.body;
      null == e.$scrollBehavior &&
        (function (e) {
          var t = x(e);
          if (null == D[t]) {
            var r = getComputedStyle(e, "")["scroll-behavior"];
            D[t] = "smooth" == r;
          }
          return D[t];
        })(e) &&
        ((e.$scrollBehavior = e.style.scrollBehavior),
        (e.style.scrollBehavior = "auto"));
      var u = function (o) {
        for (var a = Date.now(), l = 0, i = 0, s = 0; s < p.length; s++) {
          var d = p[s],
            f = a - d.start,
            h = f >= n.animationTime,
            $ = h ? 1 : f / n.animationTime;
          n.pulseAlgorithm && ($ = F($));
          var m = (d.x * $ - d.lastX) >> 0,
            _ = (d.y * $ - d.lastY) >> 0;
          (l += m),
            (i += _),
            (d.lastX += m),
            (d.lastY += _),
            h && (p.splice(s, 1), s--);
        }
        c
          ? window.scrollBy(l, i)
          : (l && (e.scrollLeft += l), i && (e.scrollTop += i)),
          t || r || (p = []),
          p.length
            ? R(u, e, 1e3 / n.frameRate + 1)
            : ((v = !1),
              null != e.$scrollBehavior &&
                ((e.style.scrollBehavior = e.$scrollBehavior),
                (e.$scrollBehavior = null)));
      };
      R(u, e, 0), (v = !0);
    }
  }
  function y(t) {
    s || $();
    var r = t.target;
    if (
      t.defaultPrevented ||
      t.ctrlKey ||
      A(e, "embed") ||
      (A(r, "embed") && /\.pdf/i.test(r.src)) ||
      A(e, "object") ||
      r.shadowRoot
    )
      return !0;
    var a = -t.wheelDeltaX || t.deltaX || 0,
      i = -t.wheelDeltaY || t.deltaY || 0;
    d &&
      (t.wheelDeltaX &&
        O(t.wheelDeltaX, 120) &&
        (a = -((t.wheelDeltaX / Math.abs(t.wheelDeltaX)) * 120)),
      t.wheelDeltaY &&
        O(t.wheelDeltaY, 120) &&
        (i = -((t.wheelDeltaY / Math.abs(t.wheelDeltaY)) * 120))),
      a || i || (i = -t.wheelDelta || 0),
      1 === t.deltaMode && ((a *= 40), (i *= 40));
    var c = z(r);
    return c
      ? !!(function (e) {
          if (e) {
            u.length || (u = [e, e, e]),
              (e = Math.abs(e)),
              u.push(e),
              u.shift(),
              clearTimeout(o),
              (o = setTimeout(function () {
                try {
                  localStorage.SS_deltaBuffer = u.join(",");
                } catch (e) {}
              }, 1e3));
            var t = e > 120 && K(e);
            return !K(120) && !K(100) && !t;
          }
        })(i) ||
          (Math.abs(a) > 1.2 && (a *= n.stepSize / 120),
          Math.abs(i) > 1.2 && (i *= n.stepSize / 120),
          _(c, a, i),
          t.preventDefault(),
          void B())
      : !l ||
          !U ||
          (Object.defineProperty(t, "target", { value: window.frameElement }),
          parent.wheel(t));
  }
  function b(t) {
    var r = t.target,
      o =
        t.ctrlKey ||
        t.altKey ||
        t.metaKey ||
        (t.shiftKey && t.keyCode !== f.spacebar);
    document.body.contains(e) || (e = document.activeElement);
    var a = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (
      t.defaultPrevented ||
      /^(textarea|select|embed|object)$/i.test(r.nodeName) ||
      (A(r, "input") && !a.test(r.type)) ||
      A(e, "video") ||
      (function (e) {
        var t = e.target,
          r = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
          do
            if (
              (r = t.classList && t.classList.contains("html5-video-controls"))
            )
              break;
          while ((t = t.parentNode));
        return r;
      })(t) ||
      r.isContentEditable ||
      o ||
      ((A(r, "button") || (A(r, "input") && a.test(r.type))) &&
        t.keyCode === f.spacebar) ||
      (A(r, "input") && "radio" == r.type && h[t.keyCode])
    )
      return !0;
    var i = 0,
      s = 0,
      c = z(e);
    if (!c) return !l || !U || parent.keydown(t);
    var u = c.clientHeight;
    switch ((c == document.body && (u = window.innerHeight), t.keyCode)) {
      case f.up:
        s = -n.arrowScroll;
        break;
      case f.down:
        s = n.arrowScroll;
        break;
      case f.spacebar:
        s = -(t.shiftKey ? 1 : -1) * u * 0.9;
        break;
      case f.pageup:
        s = -(0.9 * u);
        break;
      case f.pagedown:
        s = 0.9 * u;
        break;
      case f.home:
        c == document.body &&
          document.scrollingElement &&
          (c = document.scrollingElement),
          (s = -c.scrollTop);
        break;
      case f.end:
        var d = c.scrollHeight - c.scrollTop - u;
        s = d > 0 ? d + 10 : 0;
        break;
      case f.left:
        i = -n.arrowScroll;
        break;
      case f.right:
        i = n.arrowScroll;
        break;
      default:
        return !0;
    }
    _(c, i, s), t.preventDefault(), B();
  }
  function g(t) {
    e = t.target;
  }
  var w,
    S,
    x =
      ((w = 0),
      function (e) {
        return e.uniqueID || (e.uniqueID = w++);
      }),
    k = {},
    E = {},
    D = {};
  function B() {
    clearTimeout(S),
      (S = setInterval(function () {
        k = E = D = {};
      }, 1e3));
  }
  function H(e, t, r) {
    for (var o = r ? k : E, a = e.length; a--; ) o[x(e[a])] = t;
    return t;
  }
  function T(e, t) {
    return (t ? k : E)[x(e)];
  }
  function z(e) {
    var t = [],
      r = document.body,
      o = c.scrollHeight;
    do {
      var a = T(e, !1);
      if (a) return H(t, a);
      if ((t.push(e), o === e.scrollHeight)) {
        var n = (L(c) && L(r)) || M(c);
        if ((l && C(c)) || (!l && n)) return H(t, j());
      } else if (C(e) && M(e)) return H(t, e);
    } while ((e = e.parentElement));
  }
  function C(e) {
    return e.clientHeight + 10 < e.scrollHeight;
  }
  function L(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
  }
  function M(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t;
  }
  function X(e, t, r) {
    window.addEventListener(e, t, r || !1);
  }
  function Y(e, t, r) {
    window.removeEventListener(e, t, r || !1);
  }
  function A(e, t) {
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
  }
  if (window.localStorage && localStorage.SS_deltaBuffer)
    try {
      u = localStorage.SS_deltaBuffer.split(",");
    } catch (N) {}
  function O(e, t) {
    return Math.floor(e / t) == e / t;
  }
  function K(e) {
    return O(u[0], e) && O(u[1], e) && O(u[2], e);
  }
  var P,
    R =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e, t, r) {
        window.setTimeout(e, r || 1e3 / 60);
      },
    q =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver,
    j =
      ((P = document.scrollingElement),
      function () {
        if (!P) {
          var e = document.createElement("div");
          (e.style.cssText = "height:10000px;width:1px;"),
            document.body.appendChild(e);
          var t = document.body.scrollTop;
          document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            (P =
              document.body.scrollTop != t
                ? document.body
                : document.documentElement),
            window.scrollBy(0, -3),
            document.body.removeChild(e);
        }
        return P;
      });
  function V(e) {
    var t, r;
    return (
      (e *= n.pulseScale) < 1
        ? (t = e - (1 - Math.exp(-e)))
        : ((e -= 1), (t = (r = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - r))),
      t * n.pulseNormalize
    );
  }
  function F(e) {
    return e >= 1
      ? 1
      : e <= 0
      ? 0
      : (1 == n.pulseNormalize && (n.pulseNormalize /= V(1)), V(e));
  }
  var I = window.navigator.userAgent,
    W = /Edge/.test(I),
    U = /chrome/i.test(I) && !W,
    G = /safari/i.test(I) && !W,
    J = /mobile/i.test(I),
    Q = /Windows NT 6.1/i.test(I) && /rv:11/i.test(I),
    Z = G && (/Version\/8/i.test(I) || /Version\/9/i.test(I)),
    ee = !1;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          ee = !0;
        },
      })
    );
  } catch (et) {}
  var er = !!ee && { passive: !1 },
    eo = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  function ea(e) {
    for (var t in e) a.hasOwnProperty(t) && (n[t] = e[t]);
  }
  eo && (U || G || Q) && !J && (X(eo, y, er), X("mousedown", g), X("load", $)),
    (ea.destroy = function () {
      t && t.disconnect(),
        Y(eo, y),
        Y("mousedown", g),
        Y("keydown", b),
        Y("resize", r),
        Y("load", $);
    }),
    window.SmoothScrollOptions && ea(window.SmoothScrollOptions),
    "function" == typeof define && define.amd
      ? define(function () {
          return ea;
        })
      : "object" == typeof exports
      ? (module.exports = ea)
      : (window.SmoothScroll = ea);
})();
