// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [{ function: "__e" }, { function: "__cid" }],
      tags: [
        {
          function: "__rep",
          once_per_event: true,
          vtp_containerId: ["macro", 1],
          tag_id: 1,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { a: !0 },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.a;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ja = ea,
    ka = function (a, b) {
      a.prototype = ca(b.prototype);
      a.prototype.constructor = a;
      if (ja) ja(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.pk = b.prototype;
    },
    la = this || self,
    ma = function (a) {
      return a;
    };
  var na = function () {},
    oa = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    qa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    ra = Array.isArray,
    sa = function (a, b) {
      if (a && ra(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ta = function (a, b) {
      if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    wa = function (a, b) {
      for (var c = new ua(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    xa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    ya = function (a) {
      return Math.round(Number(a)) || 0;
    },
    za = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Aa = function (a) {
      var b = [];
      if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ba = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ca = function () {
      return new Date(Date.now());
    },
    z = function () {
      return Ca().getTime();
    },
    ua = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ua.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ua.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ea = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Fa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ga = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ha = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ia = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ja = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ka = /^\w{1,9}$/,
    La = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Ka.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Oa = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Pa,
    Qa = function () {
      if (void 0 === Pa) {
        var a = null,
          b = la.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ma,
              createScript: ma,
              createScriptURL: ma,
            });
          } catch (c) {
            la.console && la.console.error(c.message);
          }
          Pa = a;
        } else Pa = a;
      }
      return Pa;
    };
  var Sa = function (a, b) {
    this.h = b === Ra ? a : "";
  };
  Sa.prototype.toString = function () {
    return this.h + "";
  };
  var Ra = {};
  var Ua = function (a) {
    this.h = Ta === Ta ? a : "";
  };
  Ua.prototype.toString = function () {
    return this.h.toString();
  };
  var Va = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Ta = {};
  function Wa() {
    var a = la.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function Xa(a) {
    return -1 != Wa().indexOf(a);
  }
  function Ya() {
    return Xa("Firefox") || Xa("FxiOS");
  }
  function Za() {
    return ((Xa("Chrome") || Xa("CriOS")) && !Xa("Edge")) || Xa("Silk");
  }
  var $a = {},
    ab = function (a, b) {
      this.h = b === $a ? a : "";
    };
  ab.prototype.toString = function () {
    return this.h.toString();
  };
  var bb = function (a) {
      return a instanceof ab && a.constructor === ab
        ? a.h
        : "type_error:SafeHtml";
    },
    cb = function (a) {
      var b = a,
        c = Qa(),
        d = c ? c.createHTML(b) : b;
      return new ab(d, $a);
    };
  function db(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var eb = {},
    fb = function (a, b) {
      eb[a] = eb[a] || [];
      eb[a][b] = !0;
    },
    gb = function () {
      delete eb.GA4_EVENT;
    },
    hb = function (a) {
      for (var b = [], c = eb[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    };
  var E = window,
    F = document,
    ib = navigator,
    jb = F.currentScript && F.currentScript.src,
    kb = function (a, b) {
      var c = E[a];
      E[a] = void 0 === c ? b : c;
      return E[a];
    },
    lb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    mb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    nb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function ob(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var pb = function (a, b, c, d, e) {
      var f = F.createElement("script");
      ob(f, d, mb);
      f.type = "text/javascript";
      f.async = !0;
      var g,
        l = a,
        m = Qa(),
        n = m ? m.createScriptURL(l) : l;
      g = new Sa(n, Ra);
      f.src =
        g instanceof Sa && g.constructor === Sa
          ? g.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        t,
        u =
          null ==
          (t = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : t.call(q, "script[nonce]");
      (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      lb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var r = F.getElementsByTagName("script")[0] || F.body || F.head;
        r.parentNode.insertBefore(f, r);
      }
      return f;
    },
    qb = function () {
      if (jb) {
        var a = jb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    rb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        l = !1;
      g || ((g = F.createElement("iframe")), (l = !0));
      ob(g, c, nb);
      d &&
        k(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (l) {
        var m = (F.body && F.body.lastChild) || F.body || F.head;
        m.parentNode.insertBefore(g, m);
      }
      lb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    sb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    tb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    ub = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      E.setTimeout(a, 0);
    },
    vb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    wb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    xb = function (a) {
      var b = F.createElement("div"),
        c = b,
        d = cb("A<div>" + a + "</div>");
      void 0 !== c.tagName && db(c);
      c.innerHTML = bb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    yb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    zb = function (a) {
      var b;
      try {
        b = ib.sendBeacon && ib.sendBeacon(a);
      } catch (c) {
        fb("TAGGING", 15);
      }
      b || sb(a);
    },
    Ab = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Bb = function () {
      var a = E.performance;
      if (a && oa(a.now)) return a.now();
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Cb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Db = function (a) {
      if (null == a) return String(a);
      var b = Cb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Eb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    J = function (a) {
      if (!a || "object" != Db(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Eb(a, "constructor") &&
          !Eb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Eb(a, b);
    },
    N = function (a, b) {
      var c = b || ("array" == Db(a) ? [] : {}),
        d;
      for (d in a)
        if (Eb(a, d)) {
          var e = a[d];
          "array" == Db(e)
            ? ("array" != Db(c[d]) && (c[d] = []), (c[d] = N(e, c[d])))
            : J(e)
            ? (J(c[d]) || (c[d] = {}), (c[d] = N(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Fb = function (a) {
    if (void 0 === a || ra(a) || J(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var Gb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Hh: a("consent"),
      Cf: a("convert_case_to"),
      Df: a("convert_false_to"),
      Ef: a("convert_null_to"),
      Ff: a("convert_true_to"),
      Gf: a("convert_undefined_to"),
      dk: a("debug_mode_metadata"),
      xb: a("function"),
      Oe: a("instance_name"),
      ui: a("live_only"),
      vi: a("malware_disabled"),
      wi: a("metadata"),
      zi: a("original_activity_id"),
      gk: a("original_vendor_template_id"),
      fk: a("once_on_load"),
      yi: a("once_per_event"),
      Lg: a("once_per_load"),
      hk: a("priority_override"),
      ik: a("respected_consent_types"),
      Pg: a("setup_tags"),
      Qg: a("tag_id"),
      Rg: a("teardown_tags"),
    };
  })();
  var cc;
  var dc = [],
    ec = [],
    fc = [],
    gc = [],
    hc = [],
    ic = {},
    jc,
    kc,
    mc = function () {
      var a = lc;
      kc = kc || a;
    },
    nc,
    oc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = ic[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e && d && d.Wg && d.Wg(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.Vg && (f.vtp_gtmCachedValues = d.Vg);
      if (b) {
        if (null == b.name) {
          var l;
          a: {
            var m = b.index;
            if (null == m) l = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = dc[m];
                  break;
                case 1:
                  n = gc[m];
                  break;
                default:
                  l = "";
                  break a;
              }
              var p = n && n[Gb.Oe];
              l = p ? String(p) : "";
            }
          }
          b.name = l;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : cc(c, f, b);
    },
    qc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = pc(a[e], b, c));
      return d;
    },
    pc = function (a, b, c) {
      if (ra(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(pc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = dc[f];
            if (!g || b.cf(g)) return;
            c[f] = !0;
            var l = String(g[Gb.Oe]);
            try {
              var m = qc(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = oc(m, { event: b, index: f, type: 2, name: l });
              nc && (d = nc.Ni(d, m));
            } catch (x) {
              b.kh && b.kh(x, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[pc(a[n], b, c)] = pc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = pc(a[q], b, c);
              kc && (p = p || t === kc.Kd);
              d.push(t);
            }
            return kc && p ? kc.Oi(d) : d.join("");
          case "escape":
            d = pc(a[1], b, c);
            if (kc && ra(a[1]) && "macro" === a[1][0] && kc.mj(a))
              return kc.Ej(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Hb[a[u]] && (d = Hb[a[u]](d));
            return d;
          case "tag":
            var r = a[1];
            if (!gc[r])
              throw Error("Unable to resolve tag reference " + r + ".");
            return (d = { dh: a[2], index: r });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = rc(v, b, c),
              y = !!a[4];
            return y || 2 !== w ? y !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    rc = function (a, b, c) {
      try {
        return jc(qc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var uc = function (a) {
      function b(t) {
        for (var u = 0; u < t.length; u++) d[t[u]] = !0;
      }
      for (var c = [], d = [], e = sc(a), f = 0; f < ec.length; f++) {
        var g = ec[f],
          l = tc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < gc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    tc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    sc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = rc(fc[c], a));
        return b[c];
      };
    };
  var vc = {
    Ni: function (a, b) {
      b[Gb.Cf] &&
        "string" === typeof a &&
        (a = 1 == b[Gb.Cf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Gb.Ef) && null === a && (a = b[Gb.Ef]);
      b.hasOwnProperty(Gb.Gf) && void 0 === a && (a = b[Gb.Gf]);
      b.hasOwnProperty(Gb.Ff) && !0 === a && (a = b[Gb.Ff]);
      b.hasOwnProperty(Gb.Df) && !1 === a && (a = b[Gb.Df]);
      return a;
    },
  };

  var Tc = function (a) {
      return Sc ? F.querySelectorAll(a) : null;
    },
    Uc = function (a, b) {
      if (!Sc) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Vc = !1;
  if (F.querySelectorAll)
    try {
      var Wc = F.querySelectorAll(":root");
      Wc && 1 == Wc.length && Wc[0] == F.documentElement && (Vc = !0);
    } catch (a) {}
  var Sc = Vc;
  var Xc = [];
  Xc[20] = !0;
  Xc[21] = !0;
  Xc[22] = !0;
  Xc[43] = !0;
  Xc[17] = !0;
  Xc[19] = !0;
  Xc[25] = !0;
  Xc[30] = !0;
  Xc[35] = !0;
  Xc[36] = !0;
  Xc[37] = !0;
  Xc[38] = !0;
  Xc[40] = !0;
  var Yc = function (a) {
    return !!Xc[a];
  };
  var P = function (a) {
    fb("GTM", a);
  };
  var Q = {
      g: {
        F: "ad_storage",
        U: "analytics_storage",
        zf: "region",
        Af: "consent_updated",
        Bf: "wait_for_update",
        Kh: "app_remove",
        Lh: "app_store_refund",
        Mh: "app_store_subscription_cancel",
        Nh: "app_store_subscription_convert",
        Oh: "app_store_subscription_renew",
        Hf: "add_payment_info",
        If: "add_shipping_info",
        kc: "add_to_cart",
        mc: "remove_from_cart",
        Jf: "view_cart",
        Hb: "begin_checkout",
        nc: "select_item",
        qb: "view_item_list",
        Ib: "select_promotion",
        rb: "view_promotion",
        Ba: "purchase",
        oc: "refund",
        Ha: "view_item",
        Kf: "add_to_wishlist",
        Ph: "first_open",
        Qh: "first_visit",
        va: "gtag.config",
        Ca: "gtag.get",
        Rh: "in_app_purchase",
        qc: "page_view",
        Sh: "session_start",
        oe: "user_engagement",
        Jb: "gclid",
        ia: "ads_data_redaction",
        X: "allow_ad_personalization_signals",
        pe: "allow_custom_scripts",
        Th: "allow_display_features",
        sc: "allow_enhanced_conversions",
        uc: "allow_google_signals",
        wa: "allow_interest_groups",
        pd: "auid",
        Uh: "auto_detection_enabled",
        Va: "aw_remarketing",
        qd: "aw_remarketing_only",
        vc: "discount",
        wc: "aw_feed_country",
        xc: "aw_feed_language",
        Z: "items",
        yc: "aw_merchant_id",
        Lf: "aw_basket_type",
        rd: "campaign_content",
        sd: "campaign_id",
        ud: "campaign_medium",
        vd: "campaign_name",
        zc: "campaign",
        wd: "campaign_source",
        xd: "campaign_term",
        jb: "client_id",
        Vh: "content_group",
        Wh: "content_type",
        Da: "conversion_cookie_prefix",
        Ac: "conversion_id",
        Wa: "conversion_label",
        qa: "conversion_linker",
        qe: "conversion_api",
        Xa: "cookie_domain",
        Ia: "cookie_expires",
        Ya: "cookie_flags",
        Bc: "cookie_name",
        se: "cookie_path",
        Pa: "cookie_prefix",
        sb: "cookie_update",
        Kb: "country",
        ma: "currency",
        Cc: "customer_lifetime_value",
        Dc: "custom_map",
        Xh: "debug_mode",
        aa: "developer_id",
        Mf: "disable_merchant_reported_purchases",
        Yh: "dc_custom_params",
        Zh: "dc_natural_search",
        te: "dynamic_event_settings",
        ai: "affiliation",
        Nf: "checkout_option",
        Of: "checkout_step",
        bi: "coupon",
        Pf: "item_list_name",
        Qf: "list_name",
        ci: "promotions",
        Ec: "shipping",
        Rf: "tax",
        yd: "engagement_time_msec",
        Fc: "enhanced_client_id",
        Gc: "enhanced_conversions",
        Sf: "enhanced_conversions_automatic_settings",
        Hc: "estimated_delivery_date",
        ue: "euid_logged_in_state",
        Lb: "event_callback",
        Mb: "event_developer_id_string",
        Tf: "event",
        zd: "event_settings",
        Ad: "event_timeout",
        di: "experiments",
        ve: "firebase_id",
        Bd: "first_party_collection",
        Cd: "_x_20",
        tb: "_x_19",
        Uf: "fledge",
        Vf: "flight_error_code",
        Wf: "flight_error_message",
        Xf: "gac_gclid",
        Dd: "gac_wbraid",
        Yf: "gac_wbraid_multiple_conversions",
        Ic: "ga_restrict_domain",
        we: "ga_temp_client_id",
        Zf: "gdpr_applies",
        ag: "geo_granularity",
        Za: "value_callback",
        Qa: "value_key",
        Nb: "global_developer_id_string",
        ek: "google_ono",
        kb: "google_signals",
        Ed: "google_tld",
        Fd: "groups",
        cg: "gsa_experiment_id",
        dg: "iframe_state",
        Gd: "ignore_referrer",
        xe: "internal_traffic_results",
        eg: "is_passthrough",
        Ja: "language",
        ye: "legacy_developer_id_string",
        ra: "linker",
        Ob: "accept_incoming",
        Pb: "decorate_forms",
        R: "domains",
        Jc: "url_position",
        fg: "method",
        Qb: "new_customer",
        gg: "non_interaction",
        ei: "optimize_id",
        Ka: "page_location",
        ze: "page_path",
        La: "page_referrer",
        Rb: "page_title",
        hg: "passengers",
        ig: "phone_conversion_callback",
        fi: "phone_conversion_country_code",
        jg: "phone_conversion_css_class",
        gi: "phone_conversion_ids",
        kg: "phone_conversion_number",
        lg: "phone_conversion_options",
        mg: "quantity",
        Hd: "redact_device_info",
        ng: "redact_enhanced_user_id",
        hi: "redact_ga_client_id",
        ii: "redact_user_id",
        Id: "referral_exclusion_definition",
        lb: "restricted_data_processing",
        ji: "retoken",
        og: "screen_name",
        ub: "screen_resolution",
        ki: "search_term",
        xa: "send_page_view",
        vb: "send_to",
        Kc: "session_duration",
        Ae: "session_engaged",
        Be: "session_engaged_time",
        wb: "session_id",
        Ce: "session_number",
        Sb: "delivery_postal_code",
        pg: "tc_privacy_string",
        qg: "temporary_client_id",
        li: "tracking_id",
        De: "traffic_type",
        Ea: "transaction_id",
        na: "transport_url",
        rg: "trip_type",
        Lc: "update",
        ab: "url_passthrough",
        Ee: "_user_agent_architecture",
        Fe: "_user_agent_bitness",
        Ge: "_user_agent_full_version_list",
        sg: "_user_agent_mobile",
        He: "_user_agent_model",
        Ie: "_user_agent_platform",
        Je: "_user_agent_platform_version",
        Ke: "_user_agent_wow64",
        ca: "user_data",
        ug: "user_data_auto_latency",
        vg: "user_data_auto_meta",
        wg: "user_data_auto_multi",
        xg: "user_data_auto_selectors",
        yg: "user_data_auto_status",
        zg: "user_data_mode",
        Le: "user_data_settings",
        sa: "user_id",
        Ma: "user_properties",
        Ag: "us_privacy_string",
        ka: "value",
        Jd: "wbraid",
        Bg: "wbraid_multiple_conversions",
        Fg: "_host_name",
        Gg: "_in_page_command",
        Hg: "_is_linker_valid",
        Ig: "_is_passthrough_cid",
        Kg: "non_personalized_ads",
      },
    },
    Bd = {},
    Cd = Object.freeze(
      ((Bd[Q.g.X] = 1),
      (Bd[Q.g.sc] = 1),
      (Bd[Q.g.uc] = 1),
      (Bd[Q.g.Z] = 1),
      (Bd[Q.g.Xa] = 1),
      (Bd[Q.g.Ia] = 1),
      (Bd[Q.g.Ya] = 1),
      (Bd[Q.g.Bc] = 1),
      (Bd[Q.g.se] = 1),
      (Bd[Q.g.Pa] = 1),
      (Bd[Q.g.sb] = 1),
      (Bd[Q.g.Dc] = 1),
      (Bd[Q.g.aa] = 1),
      (Bd[Q.g.te] = 1),
      (Bd[Q.g.Lb] = 1),
      (Bd[Q.g.zd] = 1),
      (Bd[Q.g.Ad] = 1),
      (Bd[Q.g.Bd] = 1),
      (Bd[Q.g.Ic] = 1),
      (Bd[Q.g.kb] = 1),
      (Bd[Q.g.Ed] = 1),
      (Bd[Q.g.Fd] = 1),
      (Bd[Q.g.xe] = 1),
      (Bd[Q.g.ra] = 1),
      (Bd[Q.g.Id] = 1),
      (Bd[Q.g.lb] = 1),
      (Bd[Q.g.xa] = 1),
      (Bd[Q.g.vb] = 1),
      (Bd[Q.g.Kc] = 1),
      (Bd[Q.g.Be] = 1),
      (Bd[Q.g.Sb] = 1),
      (Bd[Q.g.na] = 1),
      (Bd[Q.g.Lc] = 1),
      (Bd[Q.g.Le] = 1),
      (Bd[Q.g.Ma] = 1),
      Bd)
    );
  Object.freeze([
    Q.g.Ka,
    Q.g.La,
    Q.g.Rb,
    Q.g.Ja,
    Q.g.og,
    Q.g.sa,
    Q.g.ve,
    Q.g.Vh,
  ]);
  var Dd = {},
    Ed = Object.freeze(
      ((Dd[Q.g.Kh] = 1),
      (Dd[Q.g.Lh] = 1),
      (Dd[Q.g.Mh] = 1),
      (Dd[Q.g.Nh] = 1),
      (Dd[Q.g.Oh] = 1),
      (Dd[Q.g.Ph] = 1),
      (Dd[Q.g.Qh] = 1),
      (Dd[Q.g.Rh] = 1),
      (Dd[Q.g.Sh] = 1),
      (Dd[Q.g.oe] = 1),
      Dd)
    ),
    Fd = {},
    Gd = Object.freeze(
      ((Fd[Q.g.Hf] = 1),
      (Fd[Q.g.If] = 1),
      (Fd[Q.g.kc] = 1),
      (Fd[Q.g.mc] = 1),
      (Fd[Q.g.Jf] = 1),
      (Fd[Q.g.Hb] = 1),
      (Fd[Q.g.nc] = 1),
      (Fd[Q.g.qb] = 1),
      (Fd[Q.g.Ib] = 1),
      (Fd[Q.g.rb] = 1),
      (Fd[Q.g.Ba] = 1),
      (Fd[Q.g.oc] = 1),
      (Fd[Q.g.Ha] = 1),
      (Fd[Q.g.Kf] = 1),
      Fd)
    ),
    Hd = Object.freeze([Q.g.X, Q.g.uc, Q.g.sb]),
    Id = Object.freeze([].concat(Hd)),
    Jd = Object.freeze([Q.g.Ia, Q.g.Ad, Q.g.Kc, Q.g.Be, Q.g.yd]),
    Kd = Object.freeze([].concat(Jd)),
    Ld = {},
    Md = ((Ld[Q.g.F] = "1"), (Ld[Q.g.U] = "2"), Ld),
    Nd = {},
    Od = Object.freeze(
      ((Nd[Q.g.X] = 1),
      (Nd[Q.g.sc] = 1),
      (Nd[Q.g.wa] = 1),
      (Nd[Q.g.Va] = 1),
      (Nd[Q.g.qd] = 1),
      (Nd[Q.g.vc] = 1),
      (Nd[Q.g.wc] = 1),
      (Nd[Q.g.xc] = 1),
      (Nd[Q.g.Z] = 1),
      (Nd[Q.g.yc] = 1),
      (Nd[Q.g.Da] = 1),
      (Nd[Q.g.qa] = 1),
      (Nd[Q.g.Xa] = 1),
      (Nd[Q.g.Ia] = 1),
      (Nd[Q.g.Ya] = 1),
      (Nd[Q.g.Pa] = 1),
      (Nd[Q.g.ma] = 1),
      (Nd[Q.g.Cc] = 1),
      (Nd[Q.g.aa] = 1),
      (Nd[Q.g.Mf] = 1),
      (Nd[Q.g.Gc] = 1),
      (Nd[Q.g.Hc] = 1),
      (Nd[Q.g.ve] = 1),
      (Nd[Q.g.Bd] = 1),
      (Nd[Q.g.Ja] = 1),
      (Nd[Q.g.Qb] = 1),
      (Nd[Q.g.Ka] = 1),
      (Nd[Q.g.La] = 1),
      (Nd[Q.g.ig] = 1),
      (Nd[Q.g.jg] = 1),
      (Nd[Q.g.kg] = 1),
      (Nd[Q.g.lg] = 1),
      (Nd[Q.g.lb] = 1),
      (Nd[Q.g.xa] = 1),
      (Nd[Q.g.vb] = 1),
      (Nd[Q.g.Sb] = 1),
      (Nd[Q.g.Ea] = 1),
      (Nd[Q.g.na] = 1),
      (Nd[Q.g.Lc] = 1),
      (Nd[Q.g.ab] = 1),
      (Nd[Q.g.ca] = 1),
      (Nd[Q.g.sa] = 1),
      (Nd[Q.g.ka] = 1),
      Nd)
    );
  Object.freeze(Q.g);
  var Pd = {},
    Qd = (E.google_tag_manager = E.google_tag_manager || {}),
    Rd = Math.random();
  Pd.Od = "9s0";
  Pd.fa = "dataLayer";
  Pd.Jh =
    "ChAI8O3kmQYQzsz6u6C5vI0lEicApkU7dAHFyd5stPwHrE2Ud1sgwS0aqUEO6xTQ6FUQnwbBcQ1uYQoaAgID";
  var Sd = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Td = { __paused: !0, __tg: !0 },
    Ud;
  for (Ud in Sd) Sd.hasOwnProperty(Ud) && (Td[Ud] = !0);
  Pd.ic = "www.googletagmanager.com";
  var Vd,
    Wd = Pd.ic + "/gtm.js";
  Wd = Pd.ic + "/gtag/js";
  Vd = Wd;
  var Xd = za(""),
    Yd = za(""),
    Zd = null,
    $d = null,
    ae = {},
    be = {},
    ce = function () {
      var a = Qd.sequence || 1;
      Qd.sequence = a + 1;
      return a;
    };
  Pd.Ih = "";
  var de = "";
  Pd.Pd = de;
  var ee = new ua(),
    fe = {},
    ge = {},
    je = {
      name: Pd.fa,
      set: function (a, b) {
        N(Ja(a, b), fe);
        he();
      },
      get: function (a) {
        return ie(a, 2);
      },
      reset: function () {
        ee = new ua();
        fe = {};
        he();
      },
    },
    ie = function (a, b) {
      return 2 != b ? ee.get(a) : ke(a);
    },
    ke = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = fe, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    le = function (a, b) {
      ge.hasOwnProperty(a) || (ee.set(a, b), N(Ja(a, b), fe), he());
    },
    he = function (a) {
      k(ge, function (b, c) {
        ee.set(b, c);
        N(Ja(b), fe);
        N(Ja(b, c), fe);
        a && delete ge[b];
      });
    },
    me = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? ke(a) : ee.get(a);
      "array" === Db(d) || "object" === Db(d) ? (c = N(d)) : (c = d);
      return c;
    };
  var ne,
    oe = !1,
    pe = function (a) {
      if (!oe) {
        oe = !0;
        ne = ne || {};
      }
      return ne[a];
    };
  var qe = function () {
      var a = E.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    re = function (a) {
      if (F.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle)
        return !0;
      var c = E.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var l = g.indexOf("opacity(");
          0 <= l &&
            ((g = g.substring(l + 8, g.indexOf(")", l))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = E.getComputedStyle(d, null));
      }
      return !1;
    };
  var Ae = /:[0-9]+$/,
    Be = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    Ee = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Ce(a.protocol) || Ce(E.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : E.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || E.location.hostname)
            .replace(Ae, "")
            .toLowerCase());
      return De(a, b, c, d, e);
    },
    De = function (a, b, c, d, e) {
      var f,
        g = Ce(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = He(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Ae, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || fb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Be(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Ce = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    He = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Ie = function (a) {
      var b = F.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || fb("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Ae, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Je = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Ie(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    };
  var Ke = {};
  var mf = {},
    nf = function (a, b) {
      if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a))
        return E._gtmexpgrp[a];
      void 0 === mf[a] && (mf[a] = Math.floor(Math.random() * b));
      return mf[a];
    };
  var pf = { Yg: "VN", Kj: "VN-DN" };
  var qf = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var rf = function (a) {
    rf[" "](a);
    return a;
  };
  rf[" "] = function () {};
  var tf = function () {
    var a = sf,
      b = "af";
    if (a.af && a.hasOwnProperty(b)) return a.af;
    var c = new a();
    return (a.af = c);
  };
  var sf = function () {
    var a = {};
    this.h = function () {
      var b = qf.h,
        c = qf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {
      a[qf.h] = !0;
    };
  };
  var uf = [];
  function vf() {
    var a = kb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: wf,
        update: xf,
        addListener: yf,
        notifyListeners: zf,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function wf(a, b, c, d, e, f) {
    var g = vf();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          t = {
            region: p,
            initial: "granted" === b,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.initial) l[a] = t;
        q &&
          E.setTimeout(function () {
            l[a] === t &&
              t.quiet &&
              ((t.quiet = !1), Af(a), zf(), fb("TAGGING", 2));
          }, f);
      }
    }
  }
  function xf(a, b) {
    var c = vf();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Bf(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Bf(c, a);
      f.quiet ? ((f.quiet = !1), Af(a)) : g !== d && Af(a);
    }
  }
  function yf(a, b) {
    uf.push({ Te: a, Vi: b });
  }
  function Af(a) {
    for (var b = 0; b < uf.length; ++b) {
      var c = uf[b];
      ra(c.Te) && -1 !== c.Te.indexOf(a) && (c.ph = !0);
    }
  }
  function zf(a, b) {
    for (var c = 0; c < uf.length; ++c) {
      var d = uf[c];
      if (d.ph) {
        d.ph = !1;
        try {
          d.Vi({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Bf(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var Cf = function (a) {
      var b = vf();
      b.accessedAny = !0;
      return Bf(b, a);
    },
    Df = function (a) {
      var b = vf();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Ef = function (a) {
      var b = vf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Ff = function () {
      if (!tf().h()) return !1;
      var a = vf();
      a.accessedAny = !0;
      return a.active;
    },
    Gf = function () {
      var a = vf();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Hf = function (a, b) {
      vf().addListener(a, b);
    },
    If = function (a, b) {
      vf().notifyListeners(a, b);
    },
    Jf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Ef(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Hf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Kf = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === Cf(l) || e[l] || (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Hf(d, function (f) {
          var g = c();
          0 < g.length && ((f.Te = g), a(f));
        });
    };
  function Lf() {}
  function Mf() {}
  function Nf(a) {
    for (var b = [], c = 0; c < Of.length; c++) {
      var d = a(Of[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Of = [Q.g.F, Q.g.U],
    Pf = function (a) {
      var b = a[Q.g.zf];
      b && P(40);
      var c = a[Q.g.Bf];
      c && P(41);
      for (
        var d = ra(b) ? b : [b], e = { fc: 0 };
        e.fc < d.length;
        e = { fc: e.fc }, ++e.fc
      )
        k(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== Q.g.zf && g !== Q.g.Bf) {
                var m = d[f.fc],
                  n = pf.Yg,
                  p = pf.Kj;
                vf().set(g, l, m, n, p, c);
              }
            };
          })(e)
        );
    },
    Qf = 0,
    Rf = function (a, b) {
      k(a, function (e, f) {
        vf().update(e, f);
      });
      If(b.eventId, b.priorityId);
      var c = z(),
        d = c - Qf;
      Qf && 0 <= d && 1e3 > d && P(66);
      Qf = c;
    },
    Sf = function (a) {
      var b = Cf(a);
      return void 0 != b ? b : !0;
    },
    Tf = function () {
      return "G1" + Nf(Cf);
    },
    Uf = function (a, b) {
      Kf(a, b);
    },
    Vf = function (a, b) {
      Jf(a, b);
    };
  var Wf = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Xf = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Yf = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Zf = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function $f(a) {
    return "null" !== a.origin;
  }
  var cg = function (a, b, c, d) {
      return ag(d) ? Xf(a, String(b || bg()), c) : [];
    },
    fg = function (a, b, c, d, e) {
      if (ag(e)) {
        var f = dg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = eg(
            f,
            function (g) {
              return g.Vd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = eg(
            f,
            function (g) {
              return g.ad;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function gg(a, b, c, d) {
    var e = bg(),
      f = window;
    $f(f) && (f.document.cookie = a);
    var g = bg();
    return e != g || (void 0 != c && 0 <= cg(b, g, !1, d).indexOf(c));
  }
  var kg = function (a, b, c) {
      function d(u, r, v) {
        if (null == v) return delete g[r], u;
        g[r] = v;
        return u + "; " + r + "=" + v;
      }
      function e(u, r) {
        if (null == r) return delete g[r], u;
        g[r] = !0;
        return u + "; " + r;
      }
      if (!ag(c.pb)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = hg(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.lk);
      f = d(f, "samesite", c.mk);
      c.nk && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = ig(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!jg(q, c.path) && gg(t, a, b, c.pb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return jg(m, c.path) ? 1 : gg(f, a, b, c.pb) ? 0 : 1;
    },
    lg = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return kg(a, b, c);
    };
  function eg(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function dg(a, b, c) {
    for (var d = [], e = cg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), Vd: 1 * m[0] || 1, ad: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var hg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    tg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    ug = /(^|\.)doubleclick\.net$/i,
    jg = function (a, b) {
      return (
        ug.test(window.document.location.hostname) || ("/" === b && tg.test(a))
      );
    },
    bg = function () {
      return $f(window) ? window.document.cookie : "";
    },
    ig = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      ug.test(e) || tg.test(e) || a.push("none");
      return a;
    },
    ag = function (a) {
      if (!tf().h() || !a || !Ff()) return !0;
      if (!Ef(a)) return !1;
      var b = Cf(a);
      return null == b ? !0 : !!b;
    };
  var vg = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Wf(a) & 2147483647)) : String(b);
    },
    wg = function (a) {
      return [vg(a), Math.round(z() / 1e3)].join(".");
    },
    zg = function (a, b, c, d, e) {
      var f = xg(b);
      return fg(a, f, yg(c), d, e);
    },
    Ag = function (a, b, c, d) {
      var e = "" + xg(c),
        f = yg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    xg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    yg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Bg = function () {
    Qd.dedupe_gclid || (Qd.dedupe_gclid = "" + wg());
    return Qd.dedupe_gclid;
  };
  var Cg = function () {
    var a = !1;
    return a;
  };
  var Dg = { M: "UA-142535906-6", Gb: "" },
    Eg = { mh: "UA-142535906-6", nh: "UA-142535906-6" };
  Dg.Jg = za("");
  var Fg = function () {
      return Eg.mh ? Eg.mh.split("|") : [Dg.M];
    },
    Gg = function () {
      if (Eg.nh) return Eg.nh.split("|");
      P(84);
      return [];
    },
    Hg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    Jg = function () {
      for (var a = Ig(), b = Fg(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        !d || qa(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2);
      }
      for (var e = Gg(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && P(93);
        g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 });
      }
      a.canonical[Dg.Gb] = 2;
    },
    Kg = function (a) {
      return !!Ig().container[a];
    },
    Lg = function () {
      var a = Ig().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var c = a[b];
          if (qa(c)) {
            if (1 === c) return !0;
          } else if (1 === c.state) return !0;
        }
      return !1;
    },
    Mg = function () {
      var a = {};
      k(Ig().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  function Ig() {
    var a = Qd.tidr;
    a || ((a = new Hg()), (Qd.tidr = a));
    return a;
  }
  var Ng;
  if (3 === Pd.Od.length) Ng = "g";
  else {
    var Og = "G";
    Og = "g";
    Ng = Og;
  }
  var Pg = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      GT: "t",
      HA: "h",
      MC: "m",
      GTM: Ng,
      OPT: "o",
    },
    Qg = function (a) {
      var b = Dg.M.split("-"),
        c = b[0].toUpperCase(),
        d = Pg[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Pd.Od.length) {
        var g = "w";
        g = Cg() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + Pd.Od + e;
    };
  function Rg(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Sg = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function Tg() {
    return Xa("iPhone") && !Xa("iPod") && !Xa("iPad");
  }
  function Ug() {
    Tg() || Xa("iPad") || Xa("iPod");
  }
  Xa("Opera");
  Xa("Trident") || Xa("MSIE");
  Xa("Edge");
  !Xa("Gecko") ||
    (-1 != Wa().toLowerCase().indexOf("webkit") && !Xa("Edge")) ||
    Xa("Trident") ||
    Xa("MSIE") ||
    Xa("Edge");
  -1 != Wa().toLowerCase().indexOf("webkit") && !Xa("Edge") && Xa("Mobile");
  Xa("Macintosh");
  Xa("Windows");
  Xa("Linux") || Xa("CrOS");
  var Vg = la.navigator || null;
  Vg && (Vg.appVersion || "").indexOf("X11");
  Xa("Android");
  Tg();
  Xa("iPad");
  Xa("iPod");
  Ug();
  Wa().toLowerCase().indexOf("kaios");
  var Wg = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Xg = /#|$/,
    Yg = function (a, b) {
      var c = a.search(Xg),
        d = Wg(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Zg = /[?&]($|#)/,
    $g = function (a, b, c) {
      for (
        var d, e = a.search(Xg), f = 0, g, l = [];
        0 <= (g = Wg(a, f, b, e));

      )
        l.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(Zg, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          t = d.indexOf("#");
        0 > t && (t = d.length);
        var u = d.indexOf("?"),
          r;
        0 > u || u > t ? ((u = t), (r = "")) : (r = d.substring(u + 1, t));
        q = [d.slice(0, u), r, d.slice(t)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function ah(a) {
    if (!a || !F.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    F.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var bh = function () {
    if (E.top == E) return 0;
    var a = E.location.ancestorOrigins;
    if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
    var b;
    var c = E.top;
    try {
      var d;
      if ((d = !!c && null != c.location.href))
        b: {
          try {
            rf(c.foo);
            d = !0;
            break b;
          } catch (e) {}
          d = !1;
        }
      b = d;
    } catch (e) {
      b = !1;
    }
    return b ? 1 : 2;
  };
  var ch = function () {};
  var dh = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    eh = function (a, b, c) {
      this.m = a;
      this.h = null;
      this.K = {};
      this.Ga = 0;
      this.P = void 0 === b ? 500 : b;
      this.D = void 0 === c ? !1 : c;
      this.B = null;
    };
  ka(eh, ch);
  eh.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.D },
      d = Zf(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.P &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.P));
    var f = function (g, l) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = dh(c)),
          (c.internalBlockOnErrors = b.D),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      fh(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  eh.prototype.removeEventListener = function (a) {
    a && a.listenerId && fh(this, "removeEventListener", null, a.listenerId);
  };
  var hh = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === g && (l = 1))
        : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = gh(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && gh(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? gh(a.purpose.legitimateInterests, b) &&
                gh(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    gh = function (a, b) {
      return !(!a || !a[b]);
    },
    fh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d);
      } else if (ih(a)) {
        jh(a);
        var f = ++a.Ga;
        a.K[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    ih = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    jh = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.K[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Sg(a.m, a.B));
    };
  var kh = !0;
  kh = !1;
  var lh = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    mh = Rg("", 550),
    nh = Rg("", 500);
  function oh() {
    var a = Qd.tcf || {};
    return (Qd.tcf = a);
  }
  var th = function () {
    var a = oh(),
      b = new eh(E, kh ? 3e3 : -1);
    if (
      !0 === E.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof E.__tcfapi ||
        "function" === typeof b.m.__tcfapi ||
        null != ih(b))
    ) {
      a.active = !0;
      a.cd = {};
      ph();
      var c = null;
      kh
        ? (c = E.setTimeout(function () {
            qh(a);
            rh(a);
            c = null;
          }, nh))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) qh(a), rh(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = sh()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in lh)
                if (lh.hasOwnProperty(g))
                  if ("1" === g) {
                    var l = d,
                      m = !0;
                    m = void 0 === m ? !1 : m;
                    var n;
                    var p = l;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = dh(p)),
                        (n =
                          "error" === p.cmpStatus || 0 !== p.internalErrorState
                            ? !p.internalBlockOnErrors
                            : "loaded" !== p.cmpStatus ||
                              ("tcloaded" !== p.eventStatus &&
                                "useractioncomplete" !== p.eventStatus)
                            ? !1
                            : !0));
                    f["1"] = n
                      ? !1 === l.gdprApplies ||
                        "tcunavailable" === l.tcString ||
                        (void 0 === l.gdprApplies && !m) ||
                        "string" !== typeof l.tcString ||
                        !l.tcString.length
                        ? !0
                        : hh(l, "1", 0)
                      : !1;
                  } else f[g] = hh(d, g, lh[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.cd = e), rh(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), qh(a), rh(a);
      }
    }
  };
  function qh(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    kh && (a.cd = sh());
  }
  function ph() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = mh), a);
    Pf(b);
  }
  function sh() {
    var a = {},
      b;
    for (b in lh) lh.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function rh(a) {
    var b = {},
      c = ((b.ad_storage = a.cd["1"] ? "granted" : "denied"), b);
    Rf(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: uh() }
    );
  }
  var uh = function () {
      var a = oh();
      return a.active ? a.tcString || "" : "";
    },
    vh = function () {
      var a = oh();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    wh = function (a) {
      if (!lh.hasOwnProperty(String(a))) return !0;
      var b = oh();
      return b.active && b.cd ? !!b.cd[String(a)] : !0;
    };
  function xh(a, b, c, d) {
    var e,
      f = Number(null != a.Sa ? a.Sa : void 0);
    0 !== f && (e = new Date((b || z()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      pb: d,
    };
  }
  var yh = ["1"],
    zh = {},
    Ah = {},
    Ch = function (a) {
      return zh[Bh(a)];
    },
    Fh = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Bh(a.prefix);
      if (!zh[c] && !Dh(c, a.path, a.domain) && b) {
        var d = Bh(a.prefix),
          e = wg();
        if (0 === Eh(d, e, a)) {
          var f = kb("google_tag_data", {});
          f._gcl_au ? fb("GTM", 57) : (f._gcl_au = e);
        }
        Dh(c, a.path, a.domain);
      }
    };
  function Eh(a, b, c, d) {
    var e = Ag(b, "1", c.domain, c.path),
      f = xh(c, d);
    f.pb = "ad_storage";
    return lg(a, e, f);
  }
  function Dh(a, b, c) {
    var d = zg(a, b, c, yh, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((zh[a] = e.slice(0, 2).join(".")),
        (Ah[a] = { id: e.slice(2, 4).join("."), jh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (Ah[a] = { id: e.slice(0, 2).join("."), jh: Number(e[2]) || 0 })
      : (zh[a] = d);
    return !0;
  }
  function Bh(a) {
    return (a || "_gcl") + "_au";
  }
  function Gh() {
    for (var a = Hh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Ih() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Hh, Jh;
  function Kh(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Jh[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Hh = Hh || Ih();
    Jh = Jh || Gh();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var Lh;
  var Ph = function () {
      var a = Mh,
        b = Nh,
        c = Oh(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        tb(F, "mousedown", d);
        tb(F, "keyup", d);
        tb(F, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Qh = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Oh().decorators.push(f);
    },
    Rh = function (a, b, c) {
      for (var d = Oh().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== F.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && Ga(e, g.callback());
        }
      }
      return e;
    };
  function Oh() {
    var a = kb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Sh = /(.*?)\*(.*?)\*(.*)/,
    Th = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Uh = /^(?:www\.|m\.|amp\.)+/,
    Vh = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Wh(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Yh = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            l = String(d);
          Hh = Hh || Ih();
          Jh = Jh || Gh();
          for (var m = [], n = 0; n < l.length; n += 3) {
            var p = n + 1 < l.length,
              q = n + 2 < l.length,
              t = l.charCodeAt(n),
              u = p ? l.charCodeAt(n + 1) : 0,
              r = q ? l.charCodeAt(n + 2) : 0,
              v = t >> 2,
              w = ((t & 3) << 4) | (u >> 4),
              y = ((u & 15) << 2) | (r >> 6),
              x = r & 63;
            q || ((x = 64), p || (y = 64));
            m.push(Hh[v], Hh[w], Hh[y], Hh[x]);
          }
          g = m.join("");
          f.call(e, g);
        }
      }
    var A = b.join("*");
    return ["1", Xh(A), A].join("*");
  };
  function Xh(a, b) {
    var c = [
        E.navigator.userAgent,
        new Date().getTimezoneOffset(),
        ib.userLanguage || ib.language,
        Math.floor(z() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Lh)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Lh = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Lh[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Zh() {
    return function (a) {
      var b = Ie(E.location.href),
        c = b.search.replace("?", ""),
        d = Be(c, "_gl", !0) || "";
      a.query = $h(d) || {};
      var e = Ee(b, "fragment").match(Wh("_gl"));
      a.fragment = $h((e && e[3]) || "") || {};
    };
  }
  function ai(a, b) {
    var c = Wh(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var bi = function (a, b) {
      b || (b = "_gl");
      var c = Vh.exec(a);
      if (!c) return "";
      var d = c[1],
        e = ai(b, (c[2] || "").slice(1)),
        f = ai(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    ci = function (a) {
      var b = Zh(),
        c = Oh();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ga(d, e.query), a && Ga(d, e.fragment));
      return d;
    },
    $h = function (a) {
      try {
        var b = di(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Kh(d[e + 1]);
            c[f] = g;
          }
          fb("TAGGING", 6);
          return c;
        }
      } catch (l) {
        fb("TAGGING", 8);
      }
    };
  function di(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Sh.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Xh(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        fb("TAGGING", 7);
      }
    }
  }
  function ei(a, b, c, d) {
    function e(p) {
      p = ai(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Vh.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + g + l + m;
  }
  function fi(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Rh(b, 1, c),
      e = Rh(b, 2, c),
      f = Rh(b, 3, c);
    if (Ha(d)) {
      var g = Yh(d);
      c ? gi("_gl", g, a) : hi("_gl", g, a, !1);
    }
    if (!c && Ha(e)) {
      var l = Yh(e);
      hi("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              hi(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              gi(n, p, q);
              break a;
            }
          }
          "string" == typeof q && ei(n, p, q);
        }
  }
  function hi(a, b, c, d) {
    if (c.href) {
      var e = ei(a, b, c.href, void 0 === d ? !1 : d);
      Va.test(e) && (c.href = e);
    }
  }
  function gi(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = F.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = ei(a, b, c.action);
        Va.test(n) && (c.action = n);
      }
    }
  }
  function Mh(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || fi(e, e.hostname);
      }
    } catch (g) {}
  }
  function Nh(a) {
    try {
      if (a.action) {
        var b = Ee(Ie(a.action), "host");
        fi(a, b);
      }
    } catch (c) {}
  }
  var ii = function (a, b, c, d) {
      Ph();
      Qh(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    ji = function (a, b) {
      Ph();
      Qh(a, [De(E.location, "host", !0)], b, !0, !0);
    },
    ki = function () {
      var a = F.location.hostname,
        b = Th.exec(F.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Uh, ""),
        m = e.replace(Uh, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    li = function (a, b) {
      return !1 === a ? !1 : a || b || ki();
    };
  var mi = {};
  var ni = function (a) {
    for (
      var b = [],
        c = F.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          vf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };
  function oi(a, b) {
    var c = ni(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].vf] || (d[c[e].vf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), da: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].vf].push(g);
      }
    }
    return d;
  }
  var pi = /^\w+$/,
    qi = /^[\w-]+$/,
    ri = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    si = function () {
      if (!tf().h() || !Ff()) return !0;
      var a = Cf("ad_storage");
      return null == a ? !0 : !!a;
    },
    ti = function (a, b) {
      Ef("ad_storage")
        ? si()
          ? a()
          : Kf(a, "ad_storage")
        : b
        ? fb("TAGGING", 3)
        : Jf(
            function () {
              ti(a, !0);
            },
            ["ad_storage"]
          );
    },
    vi = function (a) {
      return ui(a).map(function (b) {
        return b.da;
      });
    },
    ui = function (a) {
      var b = [];
      if (!$f(E) || !F.cookie) return b;
      var c = cg(a, F.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { kd: d.kd }, e++) {
        var f = wi(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.kd = g.da;
          var m = g.timestamp,
            n = g.labels,
            p = sa(
              b,
              (function (q) {
                return function (t) {
                  return t.da === q.kd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = xi(p.labels, n || [])))
            : b.push({ version: l, da: d.kd, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return yi(b);
    };
  function xi(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function zi(a) {
    return a && "string" == typeof a && a.match(pi) ? a : "_gcl";
  }
  var Bi = function () {
      var a = Ie(E.location.href),
        b = Ee(a, "query", !1, void 0, "gclid"),
        c = Ee(a, "query", !1, void 0, "gclsrc"),
        d = Ee(a, "query", !1, void 0, "wbraid"),
        e = Ee(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Be(f, "gclid");
        c = c || Be(f, "gclsrc");
        d = d || Be(f, "wbraid");
      }
      return Ai(b, c, e, d);
    },
    Ai = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && qi.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(qi))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Di = function (a) {
      var b = Bi();
      ti(function () {
        Ci(b, !1, a);
      });
    };
  function Ci(a, b, c, d, e) {
    function f(w, y) {
      var x = Ei(w, g);
      x && (lg(x, y, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = zi(c.prefix);
    d = d || z();
    var l = xh(c, d, !0);
    l.pb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var y = ["GCL", n, w];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == mi.enable_gbraid_cookie_write
        ? 0
        : mi.enable_gbraid_cookie_write) &&
      !m &&
      a.gb
    ) {
      var q = a.gb[0],
        t = Ei("gb", g),
        u = !1;
      if (!b)
        for (var r = ui(t), v = 0; v < r.length; v++)
          r[v].da === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var Gi = function (a, b) {
      var c = ci(!0);
      ti(function () {
        for (var d = zi(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== ri[f]) {
            var g = Ei(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(Fi(l), z()),
                n;
              b: {
                var p = m;
                if ($f(E))
                  for (
                    var q = cg(g, F.cookie, void 0, "ad_storage"), t = 0;
                    t < q.length;
                    ++t
                  )
                    if (Fi(q[t]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = xh(b, m, !0);
                u.pb = "ad_storage";
                lg(g, l, u);
              }
            }
          }
        }
        Ci(Ai(c.gclid, c.gclsrc), !1, b);
      });
    },
    Ei = function (a, b) {
      var c = ri[a];
      if (void 0 !== c) return b + c;
    },
    Fi = function (a) {
      return 0 !== Hi(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function wi(a) {
    var b = Hi(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          da: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Hi(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !qi.test(a[2])
      ? []
      : a;
  }
  var Ii = function (a, b, c, d, e) {
      if (ra(b) && $f(E)) {
        var f = zi(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Ei(a[m], f);
              if (n) {
                var p = cg(n, F.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        ti(function () {
          ii(g, b, c, d);
        });
      }
    },
    yi = function (a) {
      return a.filter(function (b) {
        return qi.test(b.da);
      });
    },
    Ji = function (a, b) {
      if ($f(E)) {
        for (var c = zi(b.prefix), d = {}, e = 0; e < a.length; e++)
          ri[a[e]] && (d[a[e]] = ri[a[e]]);
        ti(function () {
          k(d, function (f, g) {
            var l = cg(c + g, F.cookie, void 0, "ad_storage");
            l.sort(function (u, r) {
              return Fi(r) - Fi(u);
            });
            if (l.length) {
              var m = l[0],
                n = Fi(m),
                p = 0 !== Hi(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Hi(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              Ci(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Ki(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Li = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Ff()) {
        var c = Bi();
        if (Ki(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          ji(function () {
            return d;
          }, 3);
          ji(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Mi = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!si()) return e;
      var f = ui(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.da]
            .concat(l.labels || [], [b])
            .join("."),
          p = xh(c, m, !0);
        p.pb = "ad_storage";
        lg(a, n, p);
      }
      return e;
    };
  function Ni(a, b) {
    var c = zi(b),
      d = Ei(a, c);
    if (!d) return 0;
    for (var e = ui(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Oi(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Pi = function (a) {
    var b = Math.max(Ni("aw", a), Oi(si() ? oi() : {}));
    return Math.max(Ni("gb", a), Oi(si() ? oi("_gac_gb", !0) : {})) > b;
  };
  var Ui = /[A-Z]+/,
    Vi = /\s/,
    Wi = function (a) {
      if (h(a)) {
        a = Ba(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Ui.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (Vi.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, T: c + "-" + d[0], I: d };
          }
        }
      }
    },
    Yi = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Wi(a[c]);
        d && (b[d.id] = d);
      }
      Xi(b);
      var e = [];
      k(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function Xi(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.I[1] && b.push(d.T);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var $i = function (a, b, c, d) {
      return (2 === Zi() || d || "http:" != E.location.protocol ? a : b) + c;
    },
    Zi = function () {
      var a = qb(),
        b;
      if (1 === a)
        a: {
          var c = Vd;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = F.getElementsByTagName("script"),
              l = 0;
            l < g.length && 100 > l;
            l++
          ) {
            var m = g[l].src;
            if (m) {
              m = m.toLowerCase();
              if (0 === m.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === m.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var bj = function (a, b, c) {
      if (E[a.functionName]) return b.lf && G(b.lf), E[a.functionName];
      var d = aj();
      E[a.functionName] = d;
      if (a.Rd)
        for (var e = 0; e < a.Rd.length; e++) E[a.Rd[e]] = E[a.Rd[e]] || aj();
      a.ee && void 0 === E[a.ee] && (E[a.ee] = c);
      pb($i("https://", "http://", a.uf), b.lf, b.zj);
      return d;
    },
    aj = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    cj = {
      functionName: "_googWcmImpl",
      ee: "_googWcmAk",
      uf: "www.gstatic.com/wcm/loader.js",
    },
    dj = {
      functionName: "_gaPhoneImpl",
      ee: "ga_wpid",
      uf: "www.gstatic.com/gaphone/loader.js",
    },
    ej = { Gh: "", Ai: "5" },
    fj = {
      functionName: "_googCallTrackingImpl",
      Rd: [dj.functionName, cj.functionName],
      uf:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (ej.Gh || ej.Ai) +
        ".js",
    },
    gj = {},
    hj = function (a, b, c, d) {
      P(22);
      if (c) {
        d = d || {};
        var e = bj(cj, d, a),
          f = { ak: a, cl: b };
        void 0 === d.eb && (f.autoreplace = c);
        e(2, d.eb, f, c, 0, Ca(), d.options);
      }
    },
    ij = function (a, b, c, d) {
      P(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Ca(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          gj[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.I.length
              ? ((e.adData = { ak: g.I[0], cl: g.I[1] }), (gj[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.T }), (gj[g.id] = !0)));
        }
        (e.gaData || e.adData) && bj(fj, d)(d.eb, e, d.options);
      }
    },
    jj = function () {
      var a = !1;
      return a;
    },
    zj = function (a, b) {
      if (a)
        if (Cg()) {
        } else {
          if (h(a)) {
            var c = Wi(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = T(b, Q.g.gi);
          if (f && ra(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var l = Wi(f[g]);
              l &&
                (d.push(l),
                (a.id === l.id || (a.id === a.T && a.T === l.T)) && (e = !0));
            }
          }
          if (!d || e) {
            var m = T(b, Q.g.kg),
              n;
            if (m) {
              ra(m) ? (n = m) : (n = [m]);
              var p = T(b, Q.g.ig),
                q = T(b, Q.g.jg),
                t = T(b, Q.g.lg),
                u = T(b, Q.g.fi),
                r = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) ij(d, n[w], u, { eb: r, options: t });
                  else if ("AW" === a.prefix && a.I[1])
                    jj()
                      ? ij([a], n[w], u || "US", { eb: r, options: t })
                      : hj(a.I[0], a.I[1], n[w], { eb: r, options: t });
                  else if ("UA" === a.prefix)
                    if (jj()) ij([a], n[w], u || "US", { eb: r });
                    else {
                      var y = a.T,
                        x = n[w],
                        A = { eb: r };
                      P(23);
                      if (x) {
                        A = A || {};
                        var B = bj(dj, A, y),
                          D = {};
                        void 0 !== A.eb ? (D.receiver = A.eb) : (D.replace = x);
                        D.ga_wpid = y;
                        D.destination = x;
                        B(2, Ca(), D);
                      }
                    }
            }
          }
        }
    };
  var Aj = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.h = c;
      this.m = {};
      this.metadata = N(c.eventMetadata || {});
      this.H = !1;
    },
    Bj = function (a, b, c) {
      var d = T(a.h, b);
      void 0 !== d ? (a.m[b] = d) : void 0 !== c && (a.m[b] = c);
    },
    Cj = function (a, b, c) {
      var d = pe(a.target.T);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Dj(a) {
    return {
      getDestinationId: function () {
        return a.target.T;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        return void (a.m[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        Bj(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.H = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
      getFromEventContext: function (b) {
        return T(a.h, b);
      },
    };
  }
  var Wj = function (a, b, c, d, e, f, g, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.K = d;
      this.m = e;
      this.D = f;
      this.P = g;
      this.B = l;
      this.eventMetadata = m;
      this.O = n;
      this.N = p;
      this.C = q;
    },
    T = function (a, b) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.K[b]) return a.K[b];
      if (void 0 !== a.m[b]) return a.m[b];
      Xj(a, a.D[b], a.P[b]) && (P(71), P(79));
      if (void 0 !== a.D[b]) return a.D[b];
      if (void 0 !== a.B[b]) return a.B[b];
    },
    Yj = function (a) {
      function b(g) {
        for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.m);
      b(a.D);
      for (var d = Object.keys(a.P), e = 0; e < d.length; e++) {
        var f = d[e];
        if (
          "event" !== f &&
          "gtm" !== f &&
          "tagTypeBlacklist" !== f &&
          !c.hasOwnProperty(f)
        ) {
          P(71);
          P(80);
          break;
        }
      }
      return Object.keys(c);
    },
    Zj = function (a, b, c) {
      function d(m) {
        J(m) &&
          k(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.K[b]));
      (c && 2 !== c) || d(a.h[b]);
      var g = f,
        l = e;
      e = {};
      f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.P[b]), d(a.m[b]), d(a.K[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (f !== g || Xj(a, e, l)) P(71), P(81);
      f = g;
      e = l;
      return f ? e : void 0;
    },
    ak = function (a) {
      var b = [Q.g.zc, Q.g.rd, Q.g.sd, Q.g.ud, Q.g.vd, Q.g.wd, Q.g.xd],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++)
            void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.K) || e(a.m)) return c;
      e(a.D);
      var f = c,
        g = d;
      c = {};
      d = !1;
      e(a.P);
      Xj(a, c, f) && (P(71), P(82));
      c = f;
      d = g;
      if (d) return c;
      e(a.B);
      return c;
    },
    Xj = function (a, b, c) {
      try {
        if (b === c) return !1;
        var d = Db(b);
        if (d !== Db(c) || !((J(b) && J(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Xj(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Xj(a, b[g], c[g])) return !0;
        }
      } catch (l) {
        P(72);
      }
      return !1;
    },
    bk = function (a, b) {
      this.mi = a;
      this.ni = b;
      this.D = {};
      this.Dg = {};
      this.h = {};
      this.K = {};
      this.m = {};
      this.Cg = {};
      this.B = {};
      this.jc = function () {};
      this.Ga = function () {};
      this.P = !1;
    },
    ck = function (a, b) {
      a.D = b;
      return a;
    },
    dk = function (a, b) {
      a.Dg = b;
      return a;
    },
    ek = function (a, b) {
      a.h = b;
      return a;
    },
    fk = function (a, b) {
      a.K = b;
      return a;
    },
    gk = function (a, b) {
      a.m = b;
      return a;
    },
    hk = function (a, b) {
      a.Cg = b;
      return a;
    },
    ik = function (a, b) {
      a.B = b || {};
      return a;
    },
    jk = function (a, b) {
      a.jc = b;
      return a;
    },
    kk = function (a, b) {
      a.Ga = b;
      return a;
    },
    lk = function (a) {
      a.P = !0;
      return a;
    },
    mk = function (a) {
      return new Wj(
        a.mi,
        a.ni,
        a.D,
        a.Dg,
        a.h,
        a.K,
        a.m,
        a.Cg,
        a.B,
        a.jc,
        a.Ga,
        a.P
      );
    };
  var sk = function (a) {
      var b = !1;
      if (!qk || !rk[qk]) return !1;
      b = a || "C" in rk[qk];
      return b;
    },
    vk = function (a, b) {
      var c;
      if (!qk || !sk(b)) return "";
      var d = rk[qk];
      c =
        "&al=" +
        tk
          .filter(function (e) {
            return void 0 !== d[e];
          })
          .map(function (e) {
            return e + Math.floor(d[e]);
          })
          .join(".") +
        (".Z" + uk[qk]);
      a && delete rk[qk];
      return c;
    },
    yk = function (a) {},
    Ck = function (a) {},
    Dk = function () {
      return (
        "&tc=" +
        gc.filter(function (a) {
          return a;
        }).length
      );
    },
    Gk = function () {
      2022 <= Ek().length && Fk();
    },
    Hk = function (a) {
      return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
    },
    Jk = function () {
      Ik || (Ik = E.setTimeout(Fk, 500));
    },
    Fk = function (a) {
      Ik && (E.clearTimeout(Ik), (Ik = void 0));
      if (void 0 !== qk && (!Kk[qk] || Lk || Mk || sk(a)))
        if (void 0 === uk[qk] && (Nk[qk] || Ok.nj() || 0 >= Pk--))
          P(1), (Nk[qk] = !0);
        else {
          void 0 === uk[qk] && Ok.Lj();
          var b = Ek(!0, a);
          a ? zb(b) : sb(b);
          if (Qk || (Rk && 0 < Sk.length)) {
            var c = b.replace("/a?", "/td?");
            sb(c);
          }
          Kk[qk] = !0;
          Rk = Qk = Tk = Uk = Mk = Lk = "";
          Sk = [];
        }
    },
    Ek = function (a, b) {
      var c = qk;
      if (void 0 === c) return "";
      var d = hb("GTM"),
        e = hb("TAGGING"),
        f = Vk,
        g = Kk[c] ? "" : "&es=1",
        l = Wk[c],
        m = yk(c),
        n = Dk(),
        p = Lk,
        q = Mk,
        t = Uk,
        u = Ck(a),
        r = Tk,
        v = Qk,
        w = vk(a, b),
        y;
      return [
        f,
        g,
        l,
        m,
        d ? "&u=" + d : "",
        e ? "&ut=" + e : "",
        n,
        p,
        q,
        t,
        u,
        r,
        v,
        w,
        y,
        Rk ? "&dl=" + encodeURIComponent(Rk) : "",
        0 < Sk.length ? "&tdp=" + Sk.join(".") : "",
        "&z=0",
      ].join("");
    },
    Zk = function () {
      Vk = Yk();
    },
    Yk = function () {
      return [$k, "&v=3&t=t", "&pid=" + ta(), "&rv=" + Pd.Od].join("");
    },
    Bk = ["L", "S", "Y"],
    xk = ["S", "E"],
    al = { sampleRate: "0.005000", Dh: "", Ch: Number("5") },
    bl =
      0 <= F.location.search.indexOf("?gtm_latency=") ||
      0 <= F.location.search.indexOf("&gtm_latency="),
    cl;
  if (!(cl = bl)) {
    var dl = Math.random(),
      el = al.sampleRate;
    cl = dl < el;
  }
  var fl = cl,
    $k = "https://www.googletagmanager.com/a?id=" + Dg.M + "&cv=1",
    gl = {
      label: Dg.M + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Vk = Yk(),
    Kk = {},
    Lk = "",
    Mk = "",
    Tk = "",
    Qk = "",
    Sk = [],
    Rk = "",
    Ak = {},
    zk = !1,
    wk = {},
    hl = {},
    Uk = "",
    qk = void 0,
    Wk = {},
    Nk = {},
    Ik = void 0,
    il = 5;
  0 < al.Ch && (il = al.Ch);
  var Ok = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        nj: function () {
          return c < a ? !1 : z() - d[c % a] < b;
        },
        Lj: function () {
          var f = c++ % a;
          d[f] = z();
        },
      };
    })(il, 1e3),
    Pk = 1e3,
    kl = function (a, b) {
      if (fl && !Nk[a] && qk !== a) {
        Fk();
        qk = a;
        Tk = Lk = "";
        Wk[a] = "&e=" + Hk(b) + "&eid=" + a;
        Jk();
      }
    },
    ll = function (a, b, c, d) {
      if (fl && b) {
        var e,
          f = String(b[Gb.xb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Nk[a]) {
          a !== qk && (Fk(), (qk = a));
          Lk = Lk ? Lk + "." + g : "&tr=" + g;
          var l = b["function"];
          if (!l)
            throw Error("Error: No function name given for function call.");
          var m = (ic[l] ? "1" : "2") + e;
          Tk = Tk ? Tk + "." + m : "&ti=" + m;
          Jk();
          Gk();
        }
      }
    };
  var sl = function (a, b, c) {
      if (fl && void 0 !== a && !Nk[a]) {
        a !== qk && (Fk(), (qk = a));
        var d = c + b;
        Mk = Mk ? Mk + "." + d : "&epr=" + d;
        Jk();
        Gk();
      }
    },
    tl = function (a, b, c) {},
    tk = ["S", "P", "C", "Z"],
    ul = {},
    vl = ((ul[1] = 5), (ul[2] = 5), (ul[3] = 5), ul),
    rk = {},
    uk = {},
    Xk = void 0,
    wl = function (a, b) {
      var c = !1;
      if (!fl || uk[a] || 0 === vl[b]) return !1;
      --vl[b];
      uk[a] = b;
      c = !0;
      return c;
    },
    xl = function (a, b, c) {
      if (!fl || !uk[a]) return;
      var d = rk[a];
      d || (rk[a] = d = {});
      d[b] = c;
    },
    yl = function () {
      if (fl) {
        E.setInterval(Zk, 864e5);
        tb(E, "pagehide", function () {
          qk && uk[qk] && Fk(!0);
          for (var a in rk) rk.hasOwnProperty(a) && ((qk = Number(a)), Fk(!0));
        });
      }
    };
  Ya();
  Tg() || Xa("iPod");
  Xa("iPad");
  !Xa("Android") || Za() || Ya() || Xa("Opera") || Xa("Silk");
  Za();
  !Xa("Safari") ||
    Za() ||
    Xa("Coast") ||
    Xa("Opera") ||
    Xa("Edge") ||
    Xa("Edg/") ||
    Xa("OPR") ||
    Ya() ||
    Xa("Silk") ||
    Xa("Android") ||
    Ug();
  var zl = {},
    Al = null,
    Bl = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!Al) {
        Al = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(l[m].split(""));
          zl[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === Al[q] && (Al[q] = p);
          }
        }
      }
      for (
        var t = zl[f],
          u = Array(Math.floor(b.length / 3)),
          r = t[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var y = b[v],
          x = b[v + 1],
          A = b[v + 2],
          B = t[y >> 2],
          D = t[((y & 3) << 4) | (x >> 4)],
          H = t[((x & 15) << 2) | (A >> 6)],
          I = t[A & 63];
        u[w++] = "" + B + D + H + I;
      }
      var C = 0,
        M = r;
      switch (b.length - v) {
        case 2:
          (C = b[v + 1]), (M = t[(C & 15) << 2] || r);
        case 1:
          var K = b[v];
          u[w] = "" + t[K >> 2] + t[((K & 3) << 4) | (C >> 4)] + M + r;
      }
      return u.join("");
    };
  var Cl =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Dl() {
    var a;
    return null != (a = E.google_tag_data) ? a : (E.google_tag_data = {});
  }
  function El() {
    var a = E.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Fl() {
    var a, b;
    return null !=
      (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function Gl() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = E.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function Hl() {
    if (!Gl()) return null;
    var a = Dl();
    if (a.uach_promise) return a.uach_promise;
    var b = E.navigator.userAgentData
      .getHighEntropyValues(Cl)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  function Nl() {
    return "attribution-reporting";
  }
  function Ol(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Pl = !1;
  function Ql() {
    if (Ol("join-ad-interest-group") && oa(ib.joinAdInterestGroup)) return !0;
    Pl ||
      (ah(
        "A7bG5hJ4XpMV5a3V1wwAR0PalkFSxLOZeL9D/YBYdupYUIgUgGhfVJ1zBFOqGybb7gRhswfJ+AmO7S2rNK2IOwkAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (Pl = !0));
    return Ol("join-ad-interest-group") && oa(ib.joinAdInterestGroup);
  }
  function Rl(a, b) {
    var c = void 0;
    try {
      c = F.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > z() - d) {
        fb("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          F.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          fb("TAGGING", 10);
          return;
        }
      } catch (e) {}
    rb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: z() },
      c
    );
  }
  var Sl = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Tl = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Ul = /^\d+\.fls\.doubleclick\.net$/,
    Vl = /;gac=([^;?]+)/,
    Wl = /;gacgb=([^;?]+)/,
    Xl = /;gclaw=([^;?]+)/,
    Yl = /;gclgb=([^;?]+)/;
  function Zl(a, b) {
    if (Ul.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && 2 == c.length && c[1].match(Sl)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].da);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var $l = function (a, b, c) {
    var d = si() ? oi("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var l = Mi("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + l.join(","));
    }
    return { Yi: f ? e.join(";") : "", Xi: Zl(d, Wl) };
  };
  function am(a, b, c) {
    if (Ul.test(F.location.host)) {
      var d = F.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Tl)) return [{ da: d[1] }];
    } else return ui((a || "_gcl") + b);
    return [];
  }
  var bm = function (a) {
      return am(a, "_aw", Xl)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    cm = function (a) {
      return am(a, "_gb", Yl)
        .map(function (b) {
          return b.da;
        })
        .join(".");
    },
    dm = function (a, b) {
      var c = Mi(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var em = function () {
    if (oa(E.__uspapi)) {
      var a = "";
      try {
        E.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Om = function (a, b) {
    var c,
      d = E.GooglebQhCsO;
    d || ((d = {}), (E.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var Pm = function (a, b) {
    var c = Yg(a, "fmt");
    if (b) {
      var d = Yg(a, "random"),
        e = Yg(a, "label") || "";
      if (!d) return !1;
      var f = Bl(
        decodeURIComponent(e.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(d.replace(/\+/g, " "))
      );
      if (!Om(f, b)) return !1;
    }
    c && 4 != c && (a = $g(a, "rfmt", c));
    var g = $g(a, "fmt", 4);
    pb(
      g,
      function () {
        E.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((E.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      F.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var en = function () {
      this.h = {};
    },
    fn = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    gn = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    jn = function (a, b, c, d, e) {};
  function ln(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ie("" + c + b).href;
    }
  }
  function mn(a, b) {
    return nn() ? ln(a, b) : void 0;
  }
  function nn() {
    var a = !1;
    return a;
  }
  function on() {
    return !!Pd.Pd && "SGTM_TOKEN" !== Pd.Pd.split("@@").join("");
  }
  var qn = function (a, b, c, d) {
      if (!pn() && !Kg(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + Pd.fa,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var l = on();
        l && (f += "&sign=" + Pd.Pd);
        var m = mn(b, e + f);
        if (!m) {
          var n = Pd.ic + e;
          l &&
            jb &&
            g &&
            (n = jb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = $i("https://", "http://", n + f);
        }
        Ig().container[a] = { state: 1, context: d };
        pb(m);
      }
    },
    rn = function (a, b, c) {
      var d;
      if ((d = !pn())) {
        var e = Ig().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (Lg())
          (Ig().destination[a] = { state: 0, transportUrl: b, context: c }),
            P(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Pd.fa +
            "&cx=c";
          on() && (f += "&sign=" + Pd.Pd);
          var g = mn(b, f);
          g || (g = $i("https://", "http://", Pd.ic + f));
          Ig().destination[a] = { state: 1, context: c };
          pb(g);
        }
    };
  function pn() {
    if (Cg()) {
      return !0;
    }
    return !1;
  }
  var sn = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    tn = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    un = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    vn =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var wn = function () {
      var a = !1;
      a = !0;
      return a;
    },
    yn = function (a) {
      var b = ie("gtm.allowlist") || ie("gtm.whitelist");
      b && P(9);
      wn() && (b = ["google", "gtagfl", "lcl", "zone"]);
      var c = b && Ia(Aa(b), tn),
        d = ie("gtm.blocklist") || ie("gtm.blacklist");
      d || ((d = ie("tagTypeBlacklist")) && P(3));
      d ? P(8) : (d = []);
      xn() &&
        ((d = Aa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Aa(d).indexOf("google") && P(2);
      var e = d && Ia(Aa(d), un),
        f = {};
      return function (g) {
        var l = g && g[Gb.xb];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = be[l] || [],
          n = a(l, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      P(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var t = !1;
        if (d) {
          var u = 0 <= e.indexOf(l);
          if (u) t = u;
          else {
            var r = wa(e, m || []);
            r && P(10);
            t = r;
          }
        }
        var v = !n || t;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = wa(e, vn));
        return (f[l] = v);
      };
    },
    xn = function () {
      return sn.test(E.location && E.location.hostname);
    };
  var zn = { initialized: 11, complete: 12, interactive: 13 },
    An = {},
    Bn = Object.freeze(((An[Q.g.xa] = !0), An)),
    Cn =
      0 <= F.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= F.location.search.indexOf("&gtm_diagnostics="),
    En = function (a, b, c) {
      if ("config" !== a || 1 < Wi(b).I.length) return;
      var d,
        e = kb("google_tag_data", {});
      e.td || (e.td = {});
      d = e.td;
      var f = N(c.D);
      N(c.h, f);
      var g = [],
        l;
      for (l in d) {
        var m = Dn(d[l], f);
        m.length && (Cn && console.log(m), g.push(l));
      }
      if (g.length) {
        if (g.length) {
          var n = b + "*" + g.join(".");
          Qk = Qk ? Qk + "!" + n : "&tdc=" + n;
        }
        fb("TAGGING", zn[F.readyState] || 14);
      }
      d[b] = f;
    };
  function Fn() {
    var a = Ie(E.location.href);
    return a.hostname + a.pathname;
  }
  function Gn(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Dn(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, t) {
        var u = t[q];
        return void 0 === u ? Bn[q] : u;
      },
      f;
    for (f in Gn(a, b)) {
      var g = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Db(l) || "array" === Db(l),
        p = "object" === Db(m) || "array" === Db(m);
      if (n && p) Dn(l, m, c, g);
      else if (n || p || l !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var Hn = !1,
    In = 0,
    Jn = [];
  function Kn(a) {
    if (!Hn) {
      var b = F.createEventObject,
        c = "complete" == F.readyState,
        d = "interactive" == F.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Hn = !0;
        for (var e = 0; e < Jn.length; e++) G(Jn[e]);
      }
      Jn.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }
  function Ln() {
    if (!Hn && 140 > In) {
      In++;
      try {
        F.documentElement.doScroll("left"), Kn();
      } catch (a) {
        E.setTimeout(Ln, 50);
      }
    }
  }
  var Mn = function (a) {
    Hn ? a() : Jn.push(a);
  };
  var Nn = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: Dg.M,
    };
  };
  var Pn = function (a, b) {
      this.h = !1;
      this.D = [];
      this.K = { tags: [] };
      this.P = !1;
      this.m = this.B = 0;
      On(this, a, b);
    },
    Qn = function (a, b, c, d) {
      if (Td.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      J(d) && (e = N(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    Rn = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Sn = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    On = function (a, b, c) {
      void 0 !== b && Tn(a, b);
      c &&
        E.setTimeout(function () {
          return Sn(a);
        }, Number(c));
    },
    Tn = function (a, b) {
      var c = Fa(function () {
        return G(function () {
          b(Dg.M, a.K);
        });
      });
      a.h ? c() : a.D.push(c);
    },
    Un = function (a) {
      a.B++;
      return Fa(function () {
        a.m++;
        a.P && a.m >= a.B && Sn(a);
      });
    },
    Vn = function (a) {
      a.P = !0;
      a.m >= a.B && Sn(a);
    };
  var Wn = function () {
      function a(d) {
        return !qa(d) || 0 > d ? 0 : d;
      }
      if (!Qd._li && E.performance && E.performance.timing) {
        var b = E.performance.timing.navigationStart,
          c = qa(je.get("gtm.start")) ? je.get("gtm.start") : 0;
        Qd._li = { cst: a(c - b), cbt: a($d - b) };
      }
    },
    Xn = function (a) {
      E.performance && E.performance.mark(Dg.M + "_" + a + "_start");
    },
    Yn = function (a) {
      if (E.performance) {
        var b = Dg.M + "_" + a + "_start",
          c = Dg.M + "_" + a + "_duration";
        E.performance.measure(c, b);
        var d = E.performance.getEntriesByName(c)[0];
        E.performance.clearMarks(b);
        E.performance.clearMeasures(c);
        var e = Qd._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Qd._p = e));
        return d.duration;
      }
    },
    Zn = function () {
      var a = Bb();
      if (void 0 !== a) {
        var b = Qd._p || {};
        b.PAGEVIEW = a;
        Qd._p = b;
      }
    };
  var $n = {},
    ao = function () {
      return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject];
    },
    bo = !1;
  var co = function (a) {
      E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
      var b = E.GoogleAnalyticsObject;
      if (E[b]) E.hasOwnProperty(b) || P(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ca());
        E[b] = c;
      }
      Wn();
      return E[b];
    },
    eo = function (a) {
      if (Ff()) {
        var b = ao();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function fo() {
    return E.GoogleAnalyticsObject || "ga";
  }
  var go = function (a) {},
    ho = function (a, b) {
      return function () {
        var c = ao(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function mo(a, b, c, d) {
    var e = gc[a],
      f = no(a, b, c, d);
    if (!f) return null;
    var g = pc(e[Gb.Pg], c, []);
    if (g && g.length) {
      var l = g[0];
      f = mo(
        l.index,
        { O: f, N: 1 === l.dh ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function no(a, b, c, d) {
    function e() {
      if (f[Gb.vi]) l();
      else {
        var w = qc(f, c, []),
          y = w[Gb.Hh];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!Sf(y[x])) {
              l();
              return;
            }
        var A = Qn(c.zb, String(f[Gb.xb]), Number(f[Gb.Qg]), w[Gb.wi]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            ll(c.id, gc[a], "5", I);
            Rn(c.zb, A, "success", I);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var I = z() - H;
            ll(c.id, gc[a], "6", I);
            Rn(c.zb, A, "failure", I);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        ll(c.id, f, "1");
        var D = function () {
          var I = z() - H;
          ll(c.id, f, "7", I);
          Rn(c.zb, A, "exception", I);
          B || ((B = !0), l());
        };
        var H = z();
        try {
          oc(w, { event: c, index: a, type: 1 });
        } catch (I) {
          D(I);
        }
      }
    }
    var f = gc[a],
      g = b.O,
      l = b.N,
      m = b.terminate;
    if (c.cf(f)) return null;
    var n = pc(f[Gb.Rg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = mo(p.index, { O: g, N: l, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.dh ? m : q;
    }
    if (f[Gb.Lg] || f[Gb.yi]) {
      var t = f[Gb.Lg] ? hc : c.Wj,
        u = g,
        r = l;
      if (!t[a]) {
        e = Fa(e);
        var v = oo(a, t, e);
        g = v.O;
        l = v.N;
      }
      return function () {
        t[a](u, r);
      };
    }
    return e;
  }
  function oo(a, b, c) {
    var d = [],
      e = [];
    b[a] = po(d, e, c);
    return {
      O: function () {
        b[a] = qo;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      N: function () {
        b[a] = ro;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function po(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function qo(a) {
    a();
  }
  function ro(a, b) {
    b();
  }
  var to = function (a, b) {
      return 1 === arguments.length ? so("config", a) : so("config", a, b);
    },
    uo = function (a, b, c) {
      c = c || {};
      c[Q.g.vb] = a;
      return so("event", b, c);
    };
  function so(a) {
    return arguments;
  }
  var vo = function () {
    this.h = [];
    this.m = [];
  };
  vo.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++)
      try {
        this.m[f](e);
      } catch (g) {}
  };
  vo.prototype.listen = function (a) {
    this.m.push(a);
  };
  vo.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  vo.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var xo = function (a, b, c) {
      wo().enqueue(a, b, c);
    },
    zo = function () {
      var a = yo;
      wo().listen(a);
    };
  function wo() {
    var a = Qd.mb;
    a || ((a = new vo()), (Qd.mb = a));
    return a;
  }
  var Ho = function (a) {
      var b = Qd.zones;
      return b
        ? b.getIsAllowedFn(Fg(), a)
        : function () {
            return !0;
          };
    },
    Io = function (a) {
      var b = Qd.zones;
      return b ? b.isActive(Fg(), a) : !0;
    };
  var Lo = function (a, b) {
    for (var c = [], d = 0; d < gc.length; d++)
      if (a[d]) {
        var e = gc[d];
        var f = Un(b.zb);
        try {
          var g = mo(d, { O: f, N: f, terminate: f }, b, d);
          if (g) {
            var l = c,
              m = l.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = ic[p];
            m.call(l, {
              zh: n,
              qh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else Jo(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(Ko);
    for (var t = 0; t < c.length; t++) c[t].execute();
    return 0 < c.length;
  };
  function Ko(a, b) {
    var c,
      d = b.qh,
      e = a.qh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.zh,
        l = b.zh;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }
  function Jo(a, b) {
    if (!fl) return;
    var c = function (d) {
      var e = b.cf(gc[d]) ? "3" : "4",
        f = pc(gc[d][Gb.Pg], b, []);
      f && f.length && c(f[0].index);
      ll(b.id, gc[d], e);
      var g = pc(gc[d][Gb.Rg], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var Oo = !1,
    Mo;
  var To = function (a) {
    var b = z(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (Oo) return !1;
      Oo = !0;
    }
    var l,
      m = !1;
    if (Io(c)) l = Ho(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      m = !0;
      l = Ho(Number.MAX_SAFE_INTEGER);
    }
    kl(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var t = {
        id: c,
        priorityId: d,
        name: e,
        cf: yn(l),
        Wj: [],
        kh: function () {
          P(6);
        },
        Vg: Po(),
        Wg: Qo(c),
        zb: new Pn(q, p),
      },
      u = uc(t);
    m && (u = Ro(u));
    var r = Lo(u, t),
      v = !1;
    Vn(t.zb);
    ("gtm.js" !== e && "gtm.sync" !== e) || go(Dg.M);
    return So(u, r) || v;
  };
  function Qo(a) {
    return function (b) {
      fl && (Fb(b) || tl(a, "input", b));
    };
  }
  function Po() {
    var a = {};
    a.event = me("event", 1);
    a.ecommerce = me("ecommerce", 1);
    a.gtm = me("gtm");
    a.eventModel = me("eventModel");
    return a;
  }
  function Ro(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(gc[c][Gb.xb]),
          e;
        if (!(e = Sd[d] || void 0 !== gc[c][Gb.zi])) {
          var f = gc[c]["function"];
          if (!f) throw "Error: No function name given for function call.";
          var g = ic[f];
          e = g ? g.isInfrastructure || !1 : !1;
        }
        if (
          e ||
          0 === d.indexOf("__ccd") ||
          0 === d.indexOf("__ogt") ||
          "__set_product_settings" === d
        )
          b[c] = !0;
      }
    return b;
  }
  function So(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && gc[c] && !Td[String(gc[c][Gb.xb])]) return !0;
    return !1;
  }
  var Vo = function (a, b, c, d) {
      Uo.push("event", [b, a], c, d);
    },
    Wo = function (a, b, c, d) {
      Uo.push("get", [a, b], c, d);
    },
    Xo = function () {
      this.status = 1;
      this.D = {};
      this.h = {};
      this.K = {};
      this.P = null;
      this.B = {};
      this.m = !1;
    },
    Yo = function (a, b, c, d) {
      var e = z();
      this.type = a;
      this.m = e;
      this.W = b || "";
      this.h = c;
      this.messageContext = d;
    },
    Zo = function () {
      this.m = {};
      this.B = {};
      this.h = [];
    },
    zp = function (a, b) {
      var c = Wi(b);
      return (a.m[c.T] = a.m[c.T] || new Xo());
    },
    Ap = function (a, b, c, d) {
      if (d.W) {
        var e = zp(a, d.W),
          f = e.P;
        if (f) {
          var g = N(c),
            l = N(e.D[d.W]),
            m = N(e.B),
            n = N(e.h),
            p = N(a.B),
            q = {};
          try {
            q = N(fe);
          } catch (v) {
            P(72);
          }
          var t = Wi(d.W).prefix,
            u = function (v) {
              sl(d.messageContext.eventId, t, v);
              var w = g[Q.g.Lb];
              w && G(w);
            },
            r = mk(
              kk(
                jk(
                  ik(
                    gk(
                      fk(
                        hk(
                          ek(
                            dk(
                              ck(
                                new bk(
                                  d.messageContext.eventId,
                                  d.messageContext.priorityId
                                ),
                                g
                              ),
                              l
                            ),
                            m
                          ),
                          n
                        ),
                        p
                      ),
                      q
                    ),
                    d.messageContext.eventMetadata
                  ),
                  function () {
                    if (u) {
                      var v = u;
                      u = void 0;
                      v("2");
                    }
                  }
                ),
                function () {
                  if (u) {
                    var v = u;
                    u = void 0;
                    v("3");
                  }
                }
              )
            );
          try {
            sl(d.messageContext.eventId, t, "1"), En(d.type, d.W, r);
            f(d.W, b, d.m, r);
          } catch (v) {
            sl(d.messageContext.eventId, t, "4");
          }
        }
      }
    };
  Zo.prototype.register = function (a, b, c) {
    var d = zp(this, a);
    3 !== d.status &&
      ((d.P = b), (d.status = 3), c && (N(d.h, c), (d.h = c)), this.flush());
  };
  Zo.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!Wi(c)) return;
      if (c) {
        var e = Wi(c);
        e &&
          1 === zp(this, c).status &&
          ((zp(this, c).status = 2), this.push("require", [{}], e.T, {}));
      }
      zp(this, c).m && (d.deferrable = !1);
    }
    this.h.push(new Yo(a, c, b, d));
    d.deferrable || this.flush();
  };
  Zo.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.W || zp(this, f.W).m
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = zp(this, f.W);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.h[0], function (t, u) {
              N(Ja(t, u), b.B);
            });
            break;
          case "config":
            g = zp(this, f.W);
            e.fb = {};
            k(
              f.h[0],
              (function (t) {
                return function (u, r) {
                  N(Ja(u, r), t.fb);
                };
              })(e)
            );
            var l = !!e.fb[Q.g.Lc];
            delete e.fb[Q.g.Lc];
            var m = Wi(f.W),
              n = m.T === m.id;
            l || (n ? (g.B = {}) : (g.D[f.W] = {}));
            (g.m && l) || Ap(this, Q.g.va, e.fb, f);
            g.m = !0;
            n ? N(e.fb, g.B) : (N(e.fb, g.D[f.W]), P(70));
            d = !0;
            break;
          case "event":
            g = zp(this, f.W);
            e.jd = {};
            k(
              f.h[0],
              (function (t) {
                return function (u, r) {
                  N(Ja(u, r), t.jd);
                };
              })(e)
            );
            Ap(this, f.h[1], e.jd, f);
            break;
          case "get":
            g = zp(this, f.W);
            var p = {},
              q = ((p[Q.g.Qa] = f.h[0]), (p[Q.g.Za] = f.h[1]), p);
            Ap(this, Q.g.Ca, q, f);
        }
        this.h.shift();
        Bp(this, f);
      }
      e = { fb: e.fb, jd: e.jd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Bp = function (a, b) {
      if ("require" !== b.type)
        if (b.W)
          for (var c = zp(a, b.W).K[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.K)
                for (var g = f.K[b.type] || [], l = 0; l < g.length; l++)
                  g[l]();
            }
    },
    Cp = function (a, b) {
      var c = Uo,
        d = N(b);
      N(zp(c, a).h, d);
      zp(c, a).h = d;
    },
    Uo = new Zo();
  var Dp = {},
    Ep = {},
    Fp = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { od: d.od, ld: d.ld }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-")) {
          if (((d.od = Wi(f)), d.od)) {
            var g = Gg();
            sa(
              g,
              (function (q) {
                return function (t) {
                  return q.od.T === t;
                };
              })(d)
            )
              ? b.push(f)
              : c.push(f);
          }
        } else {
          var l = Dp[f] || [];
          d.ld = {};
          l.forEach(
            (function (q) {
              return function (t) {
                return (q.ld[t] = !0);
              };
            })(d)
          );
          for (var m = Fg(), n = 0; n < m.length; n++)
            if (d.ld[m[n]]) {
              b = b.concat(Gg());
              break;
            }
          var p = Ep[f] || [];
          p.length && (b = b.concat(p));
        }
      }
      return { wj: b, yj: c };
    },
    Gp = function (a) {
      k(Dp, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Hp = function (a) {
      k(Ep, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Ip = "HA GF G UA AW DC MC".split(" "),
    Jp = !1,
    Kp = !1;
  function Lp(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: ce() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Mp = {
      config: function (a, b) {
        var c = Lp(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !J(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = Wi(a[1]);
          if (e) {
            kl(c.eventId, "gtag.config");
            var f = e.T,
              g = e.id !== f;
            if (g ? -1 === Gg().indexOf(f) : -1 === Fg().indexOf(f)) {
              var l = d[Q.g.na] || Uo.B[Q.g.na];
              g
                ? rn(f, l, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  })
                : qn(f, l, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
            } else {
              if (Yd && !g && !d[Q.g.Lc]) {
                var m = Kp;
                Kp = !0;
                if (m) return;
              }
              Jp || P(43);
              if (!b.noTargetGroup)
                if (g) {
                  Hp(e.id);
                  var n = e.id,
                    p = d[Q.g.Fd] || "default";
                  p = String(p).split(",");
                  for (var q = 0; q < p.length; q++) {
                    var t = Ep[p[q]] || [];
                    Ep[p[q]] = t;
                    0 > t.indexOf(n) && t.push(n);
                  }
                } else {
                  Gp(e.id);
                  var u = e.id,
                    r = d[Q.g.Fd] || "default";
                  r = r.toString().split(",");
                  for (var v = 0; v < r.length; v++) {
                    var w = Dp[r[v]] || [];
                    Dp[r[v]] = w;
                    0 > w.indexOf(u) && w.push(u);
                  }
                }
              delete d[Q.g.Fd];
              var y = b.eventMetadata || {};
              y.hasOwnProperty("is_external_event") ||
                (y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = y;
              delete d[Q.g.Lb];
              for (var x = g ? [e.id] : Gg(), A = 0; A < x.length; A++) {
                var B = N(b);
                Uo.push("config", [d], x[A], B);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          P(39);
          var c = Lp(a, b),
            d = a[1];
          "default" === d ? Pf(a[2]) : "update" === d && Rf(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if ((!J(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = N(e)),
            e[Q.g.Lb] && (g.eventCallback = e[Q.g.Lb]),
            e[Q.g.Ad] && (g.eventTimeout = e[Q.g.Ad]));
          var l = Lp(a, b),
            m = l.eventId,
            n = l.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            t = q && q[Q.g.vb];
          void 0 === t &&
            ((t = ie(Q.g.vb, 2)), void 0 === t && (t = "default"));
          if (h(t) || ra(t)) {
            var u = t.toString().replace(/\s+/g, "").split(","),
              r = Fp(u),
              v = r.wj,
              w = r.yj;
            if (w.length)
              for (
                var y = (q && q[Q.g.na]) || Uo.B[Q.g.na], x = 0;
                x < w.length;
                x++
              ) {
                var A = Wi(w[x]);
                A &&
                  rn(A.T, y, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Yi(v);
          } else p = void 0;
          var B = p;
          if (B) {
            kl(m, c);
            for (var D = [], H = 0; H < B.length; H++) {
              var I = B[H],
                C = N(b);
              if (-1 !== Ip.indexOf(I.prefix)) {
                var M = N(d),
                  K = C.eventMetadata || {};
                K.hasOwnProperty("is_external_event") ||
                  (K.is_external_event = !C.fromContainerExecution);
                C.eventMetadata = K;
                delete M[Q.g.Lb];
                Vo(c, M, I.id, C);
              }
              D.push(I.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[Q.g.vb] = D.join())
              : delete g.eventModel[Q.g.vb];
            Jp || P(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        P(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && oa(a[3])) {
          var c = Wi(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Jp || P(43);
            var f = Uo.B[Q.g.na];
            if (
              !sa(Gg(), function (l) {
                return c.T === l;
              })
            )
              rn(c.T, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Ip.indexOf(c.prefix)) {
              Lp(a, b);
              var g = {};
              Lf(N(((g[Q.g.Qa] = d), (g[Q.g.Za] = e), g)));
              Wo(
                d,
                function (l) {
                  G(function () {
                    return e(l);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Jp = !0;
          var c = Lp(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && J(a[1])
          ? (c = N(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((c = {}),
            J(a[2]) || ra(a[2]) ? (c[a[1]] = N(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Lp(a, b),
            e = d.eventId,
            f = d.priorityId;
          N(c);
          var g = N(c);
          Uo.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Np = { policy: !0 };
  var Op = function (a) {
      var b = E[Pd.fa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Pp = function (a) {
      var b = E[Pd.fa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Qp = !1,
    Rp = [];
  function Sp() {
    if (!Qp) {
      Qp = !0;
      for (var a = 0; a < Rp.length; a++) G(Rp[a]);
    }
  }
  var Tp = function (a) {
    Qp ? G(a) : Rp.push(a);
  };
  var jq = function (a) {
    if (iq(a)) return a;
    this.h = a;
  };
  jq.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var iq = function (a) {
    return !a || "object" !== Db(a) || J(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  jq.prototype.getUntrustedMessageValue = jq.prototype.getUntrustedMessageValue;
  var kq = 0,
    lq = {},
    mq = [],
    nq = [],
    oq = !1,
    pq = !1;
  function qq(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var rq = function (a) {
      return E[Pd.fa].push(a);
    },
    sq = function (a, b) {
      var c = Qd[Pd.fa],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = E.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (E.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function tq(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && le(e), le(e, f));
    });
    Zd || (Zd = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = ce()), (a["gtm.uniqueEventId"] = d), le("gtm.uniqueEventId", d));
    return To(a);
  }
  function uq(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (xa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function vq() {
    var a;
    if (nq.length) a = nq.shift();
    else if (mq.length) a = mq.shift();
    else return;
    var b;
    var c = a;
    if (oq || !uq(c.message)) b = c;
    else {
      oq = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = ce());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        l = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      mq.unshift(l, c);
      b: {
        if (!Dg.M) break b;
        if (!Yc(36)) {
          var m = Fn(),
            n = Dg.M;
          Rk || (Rk = m);
          Sk.push(n);
          break b;
        }
        var p;
        if (Dg.Jg) {
          var q = Dg.M,
            t = Ig().destination[q];
          p = t && t.context;
        } else {
          var u = Dg.M,
            r = Ig().container[u];
          p = r && r.context;
        }
        var v = p,
          w = Fn(),
          y = v && v.fromContainerExecution,
          x = v && v.source,
          A = Dg.M,
          B = Dg.Gb,
          D = Dg.Jg;
        Rk || (Rk = w);
        Sk.push(
          A + ";" + B + ";" + (y ? 1 : 0) + ";" + (x || 0) + ";" + (D ? 1 : 0)
        );
      }
      b = f;
    }
    return b;
  }
  function wq() {
    for (var a = !1, b; !pq && (b = vq()); ) {
      pq = !0;
      delete fe.eventModel;
      he();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) pq = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var l = f[g],
              m = ie(l, 1);
            if (ra(m) || J(m)) m = N(m);
            ge[l] = m;
          }
        try {
          if (oa(d))
            try {
              d.call(je);
            } catch (A) {}
          else if (ra(d)) {
            var n = d;
            if (h(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                t = n.slice(1),
                u = ie(p.join("."), 2);
              if (null != u)
                try {
                  u[q].apply(u, t);
                } catch (A) {}
            }
          } else {
            var r = void 0;
            if (xa(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var v = Mp[d[0]];
                  if (v && (!e.fromContainerExecution || !Np[d[0]])) {
                    r = v(d, e);
                    break a;
                  }
                }
                r = void 0;
              }
              r && "set" === d[0] && r.event && P(101);
            } else r = d;
            r && (a = tq(r, e) || a);
          }
        } finally {
          e.fromContainerExecution && he(!0);
          var w = d["gtm.uniqueEventId"];
          if ("number" === typeof w) {
            for (var y = lq[String(w)] || [], x = 0; x < y.length; x++)
              nq.push(xq(y[x]));
            y.length && nq.sort(qq);
            delete lq[String(w)];
            w > kq && (kq = w);
          }
          pq = !1;
        }
      }
    }
    return !a;
  }
  function yq() {
    var b = wq();
    try {
      Op(Dg.M);
    } catch (c) {}
    return b;
  }
  function yo(a) {
    if (kq < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      lq[b] = lq[b] || [];
      lq[b].push(a);
    } else
      nq.push(xq(a)),
        nq.sort(qq),
        G(function () {
          pq || wq();
        });
  }
  function xq(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Aq = function () {
      function a(f) {
        var g = {};
        if (iq(f)) {
          var l = f;
          f = iq(l) ? l.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = kb(Pd.fa, []),
        c = (Qd[Pd.fa] = Qd[Pd.fa] || {});
      !0 === c.pruned && P(83);
      lq = wo().get();
      zo();
      Mn(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      Tp(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Qd.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new jq(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        mq.push.apply(mq, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (P(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return wq() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      mq.push.apply(mq, e);
      if (zq()) {
        G(yq);
      }
    },
    zq = function () {
      var a = !0;
      return a;
    };
  function Bq(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = z();
    return b < c + 3e5 && b > c - 9e5;
  }
  var lc = {};
  lc.Kd = new String("undefined");
  var Eq = function (a) {
    this.oj = a;
  };
  function Fq(a) {
    return new Eq(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Gq = [
    Fq("data"),
    Fq("http"),
    Fq("https"),
    Fq("mailto"),
    Fq("ftp"),
    new Eq(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  var er = E.clearTimeout,
    fr = E.setTimeout,
    V = function (a, b, c, d) {
      if (Cg()) {
        b && G(b);
      } else return pb(a, b, c, d);
    },
    gr = function () {
      return new Date();
    },
    hr = function () {
      return E.location.href;
    },
    ir = function (a) {
      return Ee(Ie(a), "fragment");
    },
    jr = function (a) {
      return He(Ie(a));
    },
    kr = function (a, b) {
      return ie(a, b || 2);
    },
    lr = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = rq(a)))
        : (d = rq(a));
      return d;
    },
    mr = function (a, b) {
      E[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === E[a] || (c && !E[a])) && (E[a] = b);
      return E[a];
    },
    nr = function (a, b, c) {
      return cg(a, b, void 0 === c ? !0 : !!c);
    },
    or = function (a, b, c) {
      return 0 === lg(a, b, c);
    },
    pr = function (a, b) {
      if (Cg()) {
        b && G(b);
      } else rb(a, b);
    },
    qr = function (a) {
      return !!Lq(a, "init", !1);
    },
    rr = function (a) {
      Jq(a, "init", !0);
    },
    sr = function (a, b, c) {
      fl && (Fb(a) || tl(c, b, a));
    };
  var Qr = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function Rr(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Sr = new ua();
  function Tr(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Sr.get(e);
      f || ((f = new RegExp(b, d)), Sr.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Ur(a, b) {
    function c(g) {
      var l = Ie(g),
        m = Ee(l, "protocol"),
        n = Ee(l, "host", !0),
        p = Ee(l, "port"),
        q = Ee(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Vr(a) {
    return Wr(a) ? 1 : 0;
  }
  function Wr(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = N(a, {});
        N({ arg1: c[d], any_of: void 0 }, e);
        if (Vr(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Qr.length; g++) {
                var l = Qr[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Rr(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Tr(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Ur(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  function ns() {
    return (E.gaGlobal = E.gaGlobal || {});
  }
  var os = function () {
      var a = ns();
      a.hid = a.hid || ta();
      return a.hid;
    },
    ps = function (a, b) {
      var c = ns();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Ms = function () {
      var a = !0;
      (wh(7) && wh(9) && wh(10)) || (a = !1);
      return a;
    },
    Ns = function () {
      var a = !0;
      (wh(3) && wh(4)) || (a = !1);
      return a;
    };
  var pt = window,
    qt = document,
    rt = function (a) {
      var b = pt._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === pt["ga-disable-" + a]))
        return !0;
      try {
        var c = pt.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Xf("AMP_TOKEN", String(qt.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return qt.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function At(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.Ma] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Lt = function (a, b) {};
  function Kt(a, b) {
    var c = function () {};
    return c;
  }
  function Mt(a, b, c) {}
  var Ru = function (a, b) {
      if (!b.C) {
        var c = T(b, Q.g.Qa),
          d = T(b, Q.g.Za),
          e = T(b, c);
        if (void 0 === e) {
          var f = void 0;
          Ou.hasOwnProperty(c)
            ? (f = Ou[c])
            : Pu.hasOwnProperty(c) && (f = Pu[c]);
          1 === f && (f = Qu(c));
          h(f)
            ? ao()(function () {
                var g = ao().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    Su = function (a, b) {
      var c = a[Q.g.Jc],
        d = b + ".",
        e = a[Q.g.R] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[Q.g.Pb];
      e = String(e).replace(/\s+/g, "").split(",");
      var l = ao();
      l(d + "require", "linker");
      l(d + "linker:autoLink", e, f, g);
    },
    Wu = function (a, b, c) {
      if (Ff() && (!c.C || !Tu[a])) {
        var d = !Sf(Q.g.U),
          e = function (f) {
            var g,
              l,
              m = ao(),
              n = Uu(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.C || Vu(b, n.createOnlyFields)) {
              c.C &&
                ((g = "gtm" + ce()),
                (l = n.createOnlyFields),
                n.gtmTrackerName && (l.name = g));
              m(function () {
                var u = m.getByName(b);
                u && (p = u.get("clientId"));
                c.C || m.remove(b);
              });
              m("create", a, c.C ? l : n.createOnlyFields);
              d &&
                Sf(Q.g.U) &&
                ((d = !1),
                m(function () {
                  var u = ao().getByName(c.C ? g : b);
                  !u ||
                    (u.get("clientId") == p && q) ||
                    (c.C
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&gcut"] = Md[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&gcut"] = Md[f])),
                    u.set(n.fieldsToSet),
                    c.C
                      ? u.send("pageview")
                      : u.send("pageview", n.fieldsToSend));
                }));
              c.C &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        Uf(function () {
          return e(Q.g.U);
        }, Q.g.U);
        Uf(function () {
          return e(Q.g.F);
        }, Q.g.F);
        c.C && (Tu[a] = !0);
      }
    },
    Xu = function (a, b) {
      on() && b && (a[Q.g.tb] = b);
    },
    fv = function (a, b, c) {
      function d() {
        var C = T(c, Q.g.Dc);
        l(function () {
          if (!c.C && J(C)) {
            var M = r.fieldsToSend,
              K = m().getByName(n),
              S;
            for (S in C)
              if (
                C.hasOwnProperty(S) &&
                /^(dimension|metric)\d+$/.test(S) &&
                void 0 != C[S]
              ) {
                var da = K.get(Qu(C[S]));
                Yu(M, S, da);
              }
          }
        });
      }
      function e() {
        if (r.displayfeatures) {
          var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: C });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        l = c.C ? co(T(c, "gaFunctionName")) : co();
      if (oa(l)) {
        var m = ao,
          n;
        c.C
          ? (n = T(c, "name") || T(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (C) {
            var M = [].slice.call(arguments, 0);
            M[0] = n ? n + "." + M[0] : "" + M[0];
            l.apply(window, M);
          },
          q = function (C) {
            var M = function (X, U) {
                for (var O = 0; U && O < U.length; O++) p(X, U[O]);
              },
              K = c.C,
              S = K ? Zu(r) : $u(b, c);
            if (S) {
              var da = {};
              Xu(da, C);
              p("require", "ec", "ec.js", da);
              K && S.Ve && p("set", "&cu", S.Ve);
              var R = S.action;
              if (K || "impressions" === R)
                if ((M("ec:addImpression", S.ih), !K)) return;
              if ("promo_click" === R || "promo_view" === R || (K && S.bd)) {
                var L = S.bd;
                M("ec:addPromo", L);
                if (L && 0 < L.length && "promo_click" === R) {
                  K ? p("ec:setAction", R, S.Ra) : p("ec:setAction", R);
                  return;
                }
                if (!K) return;
              }
              "promo_view" !== R &&
                "impressions" !== R &&
                (M("ec:addProduct", S.Bb), p("ec:setAction", R, S.Ra));
            }
          },
          t = function (C) {
            if (C) {
              var M = {};
              if (J(C))
                for (var K in av) av.hasOwnProperty(K) && bv(av[K], K, C[K], M);
              Xu(M, y);
              p("require", "linkid", M);
            }
          },
          u = function () {
            if (Cg()) {
            } else {
              var C = T(c, Q.g.ei);
              C &&
                (p("require", C, { dataLayer: Pd.fa }), p("require", "render"));
            }
          },
          r = Uu(n, b, c),
          v = function (C, M, K) {
            K && (M = "" + M);
            r.fieldsToSend[C] = M;
          };
        !c.C &&
          Vu(n, r.createOnlyFields) &&
          (l(function () {
            m() && m().remove(n);
          }),
          (cv[n] = !1));
        l("create", f, r.createOnlyFields);
        if (r.createOnlyFields[Q.g.tb] && !c.C) {
          var w = mn(r.createOnlyFields[Q.g.tb], "/analytics.js");
          w && (g = w);
        }
        var y = c.C ? r.fieldsToSet[Q.g.tb] : r.createOnlyFields[Q.g.tb];
        if (y) {
          var x = c.C ? r.fieldsToSet[Q.g.Cd] : r.createOnlyFields[Q.g.Cd];
          x && !cv[n] && ((cv[n] = !0), l(ho(n, x)));
        }
        c.C
          ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), t(r.linkAttribution));
        var A = r[Q.g.ra];
        A && A[Q.g.R] && Su(A, n);
        p("set", r.fieldsToSet);
        if (c.C) {
          if (r.enableLinkId) {
            var B = {};
            Xu(B, y);
            p("require", "linkid", "linkid.js", B);
          }
          Ff() && Wu(f, n, c);
        }
        if (b === Q.g.qc)
          if (c.C) {
            e();
            if (r.remarketingLists) {
              var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: D });
            }
            q(y);
            p("send", "pageview");
            r.createOnlyFields._useUp && eo(n + ".");
          } else u(), p("send", "pageview", r.fieldsToSend);
        else
          b === Q.g.va
            ? (u(),
              zj(f, c),
              T(c, Q.g.ab) && (Li(["aw", "dc"]), eo(n + ".")),
              0 != r.sendPageView && p("send", "pageview", r.fieldsToSend),
              Wu(f, n, c))
            : b === Q.g.Ca
            ? Ru(n, c)
            : "screen_view" === b
            ? p("send", "screenview", r.fieldsToSend)
            : "timing_complete" === b
            ? ((r.fieldsToSend.hitType = "timing"),
              v("timingCategory", r.eventCategory, !0),
              c.C
                ? v("timingVar", r.timingVar, !0)
                : v("timingVar", r.name, !0),
              v("timingValue", ya(r.value)),
              void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0),
              p("send", r.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", r.fieldsToSend)
            : ("" === b && c.C) ||
              ("track_social" === b && c.C
                ? ((r.fieldsToSend.hitType = "social"),
                  v("socialNetwork", r.socialNetwork, !0),
                  v("socialAction", r.socialAction, !0),
                  v("socialTarget", r.socialTarget, !0))
                : ((c.C || dv[b]) && q(y),
                  c.C && e(),
                  (r.fieldsToSend.hitType = "event"),
                  v("eventCategory", r.eventCategory, !0),
                  v("eventAction", r.eventAction || b, !0),
                  void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0),
                  void 0 !== r.value && v("eventValue", ya(r.value))),
              p("send", r.fieldsToSend));
        if (!ev && !c.C) {
          ev = !0;
          Wn();
          var H = function () {
              c.N();
            },
            I = function () {
              m().loaded || H();
            };
          Cg() ? G(I) : pb(g, I, H);
        }
      } else G(c.N);
    },
    gv = function (a, b, c, d) {
      Vf(
        function () {
          fv(a, b, d);
        },
        [Q.g.U, Q.g.F]
      );
    },
    jv = function (a, b) {
      function c(f) {
        function g(n, p) {
          for (var q = 0; q < p.length; q++) {
            var t = p[q];
            if (f[t]) {
              m[n] = f[t];
              break;
            }
          }
        }
        function l() {
          if (f.category) m.category = f.category;
          else {
            for (var n = "", p = 0; p < hv.length; p++)
              void 0 !== f[hv[p]] && (n && (n += "/"), (n += f[hv[p]]));
            n && (m.category = n);
          }
        }
        var m = N(f);
        if (iv || b)
          g("id", ["id", "item_id", "promotion_id"]),
            g("name", ["name", "item_name", "promotion_name"]),
            g("brand", ["brand", "item_brand"]),
            g("variant", ["variant", "item_variant"]),
            g("list", ["list_name", "item_list_name"]),
            g("position", ["list_position", "creative_slot", "index"]),
            l();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return m;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++)
        a[e] && J(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    kv = function (a) {
      return Sf(a);
    },
    lv = !1;
  var iv = !1;
  iv = !0;
  var ev,
    cv = {},
    Tu = {},
    mv = {},
    Ou = Object.freeze(
      ((mv.client_storage = "storage"),
      (mv.sample_rate = 1),
      (mv.site_speed_sample_rate = 1),
      (mv.store_gac = 1),
      (mv.use_amp_client_id = 1),
      (mv[Q.g.jb] = 1),
      (mv[Q.g.qa] = "storeGac"),
      (mv[Q.g.Xa] = 1),
      (mv[Q.g.Ia] = 1),
      (mv[Q.g.Ya] = 1),
      (mv[Q.g.Bc] = 1),
      (mv[Q.g.se] = 1),
      (mv[Q.g.sb] = 1),
      mv)
    ),
    nv = {},
    ov = Object.freeze(
      ((nv._cs = 1),
      (nv._useUp = 1),
      (nv.allowAnchor = 1),
      (nv.allowLinker = 1),
      (nv.alwaysSendReferrer = 1),
      (nv.clientId = 1),
      (nv.cookieDomain = 1),
      (nv.cookieExpires = 1),
      (nv.cookieFlags = 1),
      (nv.cookieName = 1),
      (nv.cookiePath = 1),
      (nv.cookieUpdate = 1),
      (nv.legacyCookieDomain = 1),
      (nv.legacyHistoryImport = 1),
      (nv.name = 1),
      (nv.sampleRate = 1),
      (nv.siteSpeedSampleRate = 1),
      (nv.storage = 1),
      (nv.storeGac = 1),
      (nv.useAmpClientId = 1),
      (nv._cd2l = 1),
      nv)
    ),
    pv = Object.freeze({ anonymize_ip: 1 }),
    qv = {},
    Pu = Object.freeze(
      ((qv.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (qv.app_id = 1),
      (qv.app_installer_id = 1),
      (qv.app_name = 1),
      (qv.app_version = 1),
      (qv.description = "exDescription"),
      (qv.fatal = "exFatal"),
      (qv.language = 1),
      (qv.page_hostname = "hostname"),
      (qv.transport_type = "transport"),
      (qv[Q.g.ma] = "currencyCode"),
      (qv[Q.g.gg] = 1),
      (qv[Q.g.Ka] = "location"),
      (qv[Q.g.ze] = "page"),
      (qv[Q.g.La] = "referrer"),
      (qv[Q.g.Rb] = "title"),
      (qv[Q.g.og] = 1),
      (qv[Q.g.sa] = 1),
      qv)
    ),
    rv = {},
    sv = Object.freeze(
      ((rv.content_id = 1),
      (rv.event_action = 1),
      (rv.event_category = 1),
      (rv.event_label = 1),
      (rv.link_attribution = 1),
      (rv.name = 1),
      (rv[Q.g.ra] = 1),
      (rv[Q.g.fg] = 1),
      (rv[Q.g.xa] = 1),
      (rv[Q.g.ka] = 1),
      rv)
    ),
    tv = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    hv = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    uv = {},
    av = Object.freeze(
      ((uv.levels = 1), (uv[Q.g.Ia] = "duration"), (uv[Q.g.Bc] = 1), uv)
    ),
    vv = {},
    wv = Object.freeze(
      ((vv.anonymize_ip = 1),
      (vv.fatal = 1),
      (vv.send_page_view = 1),
      (vv.store_gac = 1),
      (vv.use_amp_client_id = 1),
      (vv[Q.g.qa] = 1),
      (vv[Q.g.gg] = 1),
      vv)
    ),
    bv = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (wv[b] && (c = za(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Qu(b)] = c;
        else if (h(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Qu = function (a) {
      return a && h(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    xv = {},
    dv = Object.freeze(
      ((xv.checkout_progress = 1),
      (xv.select_content = 1),
      (xv.set_checkout_option = 1),
      (xv[Q.g.kc] = 1),
      (xv[Q.g.mc] = 1),
      (xv[Q.g.Hb] = 1),
      (xv[Q.g.nc] = 1),
      (xv[Q.g.qb] = 1),
      (xv[Q.g.Ib] = 1),
      (xv[Q.g.rb] = 1),
      (xv[Q.g.Ba] = 1),
      (xv[Q.g.oc] = 1),
      (xv[Q.g.Ha] = 1),
      xv)
    ),
    yv = {},
    zv = Object.freeze(
      ((yv.checkout_progress = 1),
      (yv.set_checkout_option = 1),
      (yv[Q.g.Hf] = 1),
      (yv[Q.g.If] = 1),
      (yv[Q.g.kc] = 1),
      (yv[Q.g.mc] = 1),
      (yv[Q.g.Jf] = 1),
      (yv[Q.g.Hb] = 1),
      (yv[Q.g.Ba] = 1),
      (yv[Q.g.oc] = 1),
      (yv[Q.g.Kf] = 1),
      yv)
    ),
    Av = {},
    Bv = Object.freeze(
      ((Av.generate_lead = 1),
      (Av.login = 1),
      (Av.search = 1),
      (Av.select_content = 1),
      (Av.share = 1),
      (Av.sign_up = 1),
      (Av.view_search_results = 1),
      (Av[Q.g.nc] = 1),
      (Av[Q.g.qb] = 1),
      (Av[Q.g.Ib] = 1),
      (Av[Q.g.rb] = 1),
      (Av[Q.g.Ha] = 1),
      Av)
    ),
    Cv = function (a) {
      var b = "general";
      zv[a]
        ? (b = "ecommerce")
        : Bv[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    Dv = {},
    Ev = Object.freeze(
      ((Dv.view_search_results = 1),
      (Dv[Q.g.qb] = 1),
      (Dv[Q.g.rb] = 1),
      (Dv[Q.g.Ha] = 1),
      Dv)
    ),
    Yu = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    Fv = function (a) {
      if (ra(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    Uu = function (a, b, c) {
      var d = function (M) {
          return T(c, M);
        },
        e = {},
        f = {},
        g = {},
        l = {},
        m = Fv(d(Q.g.di));
      !c.C && m && Yu(f, "exp", m);
      g["&gtm"] = Qg(!0);
      Ff() && (l._cs = kv);
      var n = d(Q.g.Dc);
      if (!c.C && J(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && Yu(f, p, q);
          }
      for (var t = Yj(c), u = 0; u < t.length; ++u) {
        var r = t[u];
        if (c.C) {
          var v = d(r);
          tv.hasOwnProperty(r)
            ? (e[r] = v)
            : ov.hasOwnProperty(r)
            ? (l[r] = v)
            : (g[r] = v);
        } else {
          var w = void 0;
          w = r !== Q.g.aa ? d(r) : Zj(c, r);
          if (sv.hasOwnProperty(r)) bv(sv[r], r, w, e);
          else if (pv.hasOwnProperty(r)) bv(pv[r], r, w, g);
          else if (Pu.hasOwnProperty(r)) bv(Pu[r], r, w, f);
          else if (Ou.hasOwnProperty(r)) bv(Ou[r], r, w, l);
          else if (/^(dimension|metric|content_group)\d+$/.test(r))
            bv(1, r, w, f);
          else if (r === Q.g.aa) {
            if (!lv) {
              var y = La(w);
              y && (f["&did"] = y);
            }
            var x = void 0,
              A = void 0;
            b === Q.g.va
              ? (x = La(Zj(c, r), "."))
              : ((x = La(Zj(c, r, 1), ".")), (A = La(Zj(c, r, 2), ".")));
            x && (f["&gdid"] = x);
            A && (f["&edid"] = A);
          } else
            r === Q.g.Pa && 0 > t.indexOf(Q.g.Bc) && (l.cookieName = w + "_ga");
        }
      }
      (!1 !== d(Q.g.Th) && !1 !== d(Q.g.uc) && Ms()) ||
        (g.allowAdFeatures = !1);
      (!1 !== d(Q.g.X) && Ns()) || (g.allowAdPersonalizationSignals = !1);
      !c.C && d(Q.g.ab) && (l._useUp = !0);
      if (c.C) {
        l.name = l.name || e.gtmTrackerName;
        var B = g.hitCallback;
        g.hitCallback = function () {
          oa(B) && B();
          c.O();
        };
      } else {
        Yu(l, "cookieDomain", "auto");
        Yu(g, "forceSSL", !0);
        Yu(e, "eventCategory", Cv(b));
        Ev[b] && Yu(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? Yu(e, "eventLabel", d(Q.g.fg))
          : "search" === b || "view_search_results" === b
          ? Yu(e, "eventLabel", d(Q.g.ki))
          : "select_content" === b && Yu(e, "eventLabel", d(Q.g.Wh));
        var D = e[Q.g.ra] || {},
          H = D[Q.g.Ob];
        H || (0 != H && D[Q.g.R])
          ? (l.allowLinker = !0)
          : !1 === H && Yu(l, "useAmpClientId", !1);
        f.hitCallback = c.O;
        l.name = a;
      }
      Ff() &&
        ((g["&gcs"] = Tf()),
        Sf(Q.g.U) || (l.storage = "none"),
        Sf(Q.g.F) || ((g.allowAdFeatures = !1), (l.storeGac = !1)));
      var I = d(Q.g.na) || d(Q.g.tb),
        C = d(Q.g.Cd);
      I && (c.C || (l[Q.g.tb] = I), (l._cd2l = !0));
      C && !c.C && (l[Q.g.Cd] = C);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = l;
      return e;
    },
    Zu = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Ve = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.ih = "impressions" === b.translateIfKeyEquals ? jv(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.bd = "promoView" === b.translateIfKeyEquals ? jv(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.bd = "promoClick" === b.translateIfKeyEquals ? jv(f, !0) : f;
        c.Ra = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var l = b[g].products;
          c.Bb = "products" === b.translateIfKeyEquals ? jv(l, !0) : l;
          c.Ra = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    $u = function (a, b) {
      function c(v) {
        return {
          id: d(Q.g.Ea),
          affiliation: d(Q.g.ai),
          revenue: d(Q.g.ka),
          tax: d(Q.g.Rf),
          shipping: d(Q.g.Ec),
          coupon: d(Q.g.bi),
          list: e() || v,
        };
      }
      for (
        var d = function (v) {
            return T(b, v);
          },
          e = function () {
            var v;
            iv && (v = d(Q.g.Pf));
            return d(Q.g.Qf) || v;
          },
          f = d(Q.g.Z),
          g,
          l = 0;
        f &&
        l < f.length &&
        ((g = f[l][Q.g.Qf]), !g && iv && (g = f[l][Q.g.Pf]), !g);
        l++
      );
      var m = d(Q.g.Dc);
      if (J(m))
        for (var n = 0; f && n < f.length; ++n) {
          var p = f[n],
            q;
          for (q in m)
            m.hasOwnProperty(q) &&
              /^(dimension|metric)\d+$/.test(q) &&
              void 0 != m[q] &&
              Yu(p, q, p[m[q]]);
        }
      var t = null,
        u = d(Q.g.ci);
      if (a === Q.g.Ba || a === Q.g.oc) t = { action: a, Ra: c(), Bb: jv(f) };
      else if (a === Q.g.kc) t = { action: "add", Ra: c(), Bb: jv(f) };
      else if (a === Q.g.mc) t = { action: "remove", Ra: c(), Bb: jv(f) };
      else if (a === Q.g.Ha) t = { action: "detail", Ra: c(g), Bb: jv(f) };
      else if (a === Q.g.qb) t = { action: "impressions", ih: jv(f) };
      else if (a === Q.g.rb)
        t = { action: "promo_view", bd: iv ? jv(u) || jv(f) : jv(u) };
      else if (
        ("select_content" === a && u && 0 < u.length) ||
        (iv && a === Q.g.Ib)
      )
        t = { action: "promo_click", bd: iv ? jv(u) || jv(f) : jv(u) };
      else if ("select_content" === a || (iv && a === Q.g.nc))
        t = { action: "click", Ra: { list: e() || g }, Bb: jv(f) };
      else if (a === Q.g.Hb || "checkout_progress" === a) {
        var r = { step: a === Q.g.Hb ? 1 : d(Q.g.Of), option: d(Q.g.Nf) };
        t = { action: "checkout", Bb: jv(f), Ra: N(c(), r) };
      } else
        "set_checkout_option" === a &&
          (t = {
            action: "checkout_option",
            Ra: { step: d(Q.g.Of), option: d(Q.g.Nf) },
          });
      t && (t.Ve = d(Q.g.ma));
      return t;
    },
    Gv = {},
    Vu = function (a, b) {
      var c = Gv[a];
      Gv[a] = N(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var Hv = Kt;
  var Jv = encodeURI,
    Y = encodeURIComponent,
    Kv = function (a, b, c) {
      sb(a, b, c);
    },
    Lv = function (a, b) {
      if (!a) return !1;
      var c = Ee(Ie(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Mv = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { o: {} };
  (Z.o.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.s = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.o.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.s = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
        Z.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = kr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        sr(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.o.rep = ["google"]),
    (function () {
      (function (a) {
        Z.__rep = a;
        Z.__rep.s = "rep";
        Z.__rep.isVendorTemplate = !0;
        Z.__rep.priorityOverride = 0;
        Z.__rep.isInfrastructure = !1;
      })(function (a) {
        var b = Wi(a.vtp_containerId),
          c;
        switch (b.prefix) {
          case "AW":
            c = pu;
            break;
          case "DC":
            c = zu;
            break;
          case "GF":
            c = Fu;
            break;
          case "HA":
            c = Ku;
            break;
          case "UA":
            c = gv;
            break;
          case "MC":
            break;
          default:
            G(a.vtp_gtmOnFailure);
            return;
        }
        c
          ? (G(a.vtp_gtmOnSuccess),
            Uo.register(a.vtp_containerId, c),
            a.vtp_remoteConfig &&
              Cp(a.vtp_containerId, a.vtp_remoteConfig || {}))
          : G(a.vtp_gtmOnFailure);
      });
    })();
  (Z.o.cid = ["google"]),
    (function () {
      (function (a) {
        Z.__cid = a;
        Z.__cid.s = "cid";
        Z.__cid.isVendorTemplate = !0;
        Z.__cid.priorityOverride = 0;
        Z.__cid.isInfrastructure = !1;
      })(function () {
        return Dg.M;
      });
    })();

  (Z.o.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.s = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
        Z.__get.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = uo(String(b.streamId), d, c);
        xo(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var dx = {};
  dx.dataLayer = je;
  dx.callback = function (a) {
    ae.hasOwnProperty(a) && oa(ae[a]) && ae[a]();
    delete ae[a];
  };
  dx.bootstrap = 0;
  dx._spx = !1;
  function ex() {
    Qd[Dg.M] = dx;
    Dg.Gb && (Qd["ctid_" + Dg.Gb] = dx);
    Jg();
    Lg() ||
      k(Mg(), function (a, b) {
        rn(a, b.transportUrl, b.context);
        P(92);
      });
    Ga(be, Z.o);
    nc = vc;
  }
  (function (a) {
    if (!E["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (F.referrer) {
        var c = Ie(F.referrer);
        b = "cct.google" === De(c, "host");
      }
      if (!b) {
        var d = cg("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((E["__TAGGY_INSTALLED"] = !0),
        pb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var t = "GTM",
          u = "GTM";
        (t = "OGT"), (u = "GTAG");
        var r = E["google.tagmanager.debugui2.queue"];
        r ||
          ((r = []),
          (E["google.tagmanager.debugui2.queue"] = r),
          pb(
            "https://" +
              Pd.ic +
              "/debug/bootstrap?id=" +
              Dg.M +
              "&src=" +
              u +
              "&cond=" +
              q +
              "&gtm=" +
              Qg()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: jb,
            containerProduct: t,
            debug: !1,
            id: Dg.M,
            isGte: Yd,
          },
        };
        v.data.resume = function () {
          a();
        };
        Pd.Ih && (v.data.initialPublish = !0);
        r.push(v);
      },
      g = void 0,
      l = Ee(E.location, "query", !1, void 0, "gtm_debug");
    Bq(l) && (g = 2);
    if (!g && F.referrer) {
      var m = Ie(F.referrer);
      "tagassistant.google.com" === De(m, "host") && (g = 3);
    }
    if (!g) {
      var n = cg("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = F.documentElement.getAttribute("data-tag-assistant-present");
      Bq(p) && (g = 5);
    }
    g && jb ? f(g) : a();
  })(function () {
    var a = !1;
    a && Xn("INIT");
    tf().m();
    th();
    mi.enable_gbraid_cookie_write = !0;
    var b = !!Qd[Dg.M];
    !b && Dg.Gb && (b = !!Qd["ctid_" + Dg.Gb]);
    if (b) {
      var c = Qd.zones;
      c && c.unregisterChild(Fg());
    } else {
      for (
        var d = data.resource || {}, e = d.macros || [], f = 0;
        f < e.length;
        f++
      )
        dc.push(e[f]);
      for (var g = d.tags || [], l = 0; l < g.length; l++) gc.push(g[l]);
      for (var m = d.predicates || [], n = 0; n < m.length; n++) fc.push(m[n]);
      for (var p = d.rules || [], q = 0; q < p.length; q++) {
        for (var t = p[q], u = {}, r = 0; r < t.length; r++)
          u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
        ec.push(u);
      }
      ic = Z;
      jc = Vr;
      ex();
      Aq();
      Hn = !1;
      In = 0;
      if (
        ("interactive" == F.readyState && !F.createEventObject) ||
        "complete" == F.readyState
      )
        Kn();
      else {
        tb(F, "DOMContentLoaded", Kn);
        tb(F, "readystatechange", Kn);
        if (F.createEventObject && F.documentElement.doScroll) {
          var v = !0;
          try {
            v = !E.frameElement;
          } catch (B) {}
          v && Ln();
        }
        tb(E, "load", Kn);
      }
      Qp = !1;
      "complete" === F.readyState ? Sp() : tb(E, "load", Sp);
      yl();
      $d = z();
      dx.bootstrap = $d;
      if (a) {
        var A = Yn("INIT");
      }
    }
  });
})();
