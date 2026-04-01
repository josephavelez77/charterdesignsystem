import { jsx as L, jsxs as Mt, Fragment as Xa } from "react/jsx-runtime";
import ne, { useId as Rt } from "react";
const Ka = "_button_11o6p_3", Ja = "_brandPrimary_11o6p_43", qa = "_primary_11o6p_43", Qa = "_secondary_11o6p_53", Za = "_tertiary_11o6p_63", en = "_brandSecondary_11o6p_74", tn = "_neutral_11o6p_105", an = "_fullWidth_11o6p_163", nn = "_loading_11o6p_169", rn = "_spinner_11o6p_173", on = "_spin_11o6p_173", H = {
  button: Ka,
  brandPrimary: Ja,
  primary: qa,
  secondary: Qa,
  tertiary: Za,
  brandSecondary: en,
  neutral: tn,
  fullWidth: an,
  loading: nn,
  spinner: rn,
  spin: on
}, sn = ne.forwardRef(
  ({
    variant: e = "brandPrimary",
    emphasis: t = "primary",
    leadingIcon: a,
    trailingIcon: n,
    fullWidth: r = !1,
    loading: i = !1,
    disabled: o,
    className: s,
    children: l,
    ...u
  }, d) => {
    const c = [
      H.button,
      H[e],
      H[t],
      r ? H.fullWidth : "",
      i ? H.loading : "",
      s ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ L(
      "button",
      {
        ref: d,
        className: c,
        disabled: o || i,
        "aria-busy": i || void 0,
        ...u,
        children: i ? /* @__PURE__ */ L("span", { className: H.spinner, "aria-hidden": "true" }) : /* @__PURE__ */ Mt(Xa, { children: [
          a,
          l,
          n
        ] })
      }
    );
  }
);
sn.displayName = "Button";
/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */
function Fe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function ln(e) {
  if (Array.isArray(e)) return e;
}
function fn(e) {
  if (Array.isArray(e)) return Fe(e);
}
function un(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function cn(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Dt(n.key), n);
  }
}
function dn(e, t, a) {
  return t && cn(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ue(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = He(e)) || t) {
      a && (e = a);
      var n = 0, r = function() {
      };
      return {
        s: r,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: r
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, s = !1;
  return {
    s: function() {
      a = a.call(e);
    },
    n: function() {
      var l = a.next();
      return o = l.done, l;
    },
    e: function(l) {
      s = !0, i = l;
    },
    f: function() {
      try {
        o || a.return == null || a.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function p(e, t, a) {
  return (t = Dt(t)) in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function mn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function hn(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n, r, i, o, s = [], l = !0, u = !1;
    try {
      if (i = (a = a.call(e)).next, t === 0) {
        if (Object(a) !== a) return;
        l = !1;
      } else for (; !(l = (n = i.call(a)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      u = !0, r = d;
    } finally {
      try {
        if (!l && a.return != null && (o = a.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw r;
      }
    }
    return s;
  }
}
function vn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function at(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? at(Object(a), !0).forEach(function(n) {
      p(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : at(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function pe(e, t) {
  return ln(e) || hn(e, t) || He(e, t) || vn();
}
function _(e) {
  return fn(e) || mn(e) || He(e) || pn();
}
function gn(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dt(e) {
  var t = gn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function me(e) {
  "@babel/helpers - typeof";
  return me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, me(e);
}
function He(e, t) {
  if (e) {
    if (typeof e == "string") return Fe(e, t);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Fe(e, t) : void 0;
  }
}
var nt = function() {
}, Ge = {}, zt = {}, Wt = null, Ut = {
  mark: nt,
  measure: nt
};
try {
  typeof window < "u" && (Ge = window), typeof document < "u" && (zt = document), typeof MutationObserver < "u" && (Wt = MutationObserver), typeof performance < "u" && (Ut = performance);
} catch {
}
var bn = Ge.navigator || {}, rt = bn.userAgent, it = rt === void 0 ? "" : rt, M = Ge, x = zt, ot = Wt, le = Ut;
M.document;
var $ = !!x.documentElement && !!x.head && typeof x.addEventListener == "function" && typeof x.createElement == "function", Yt = ~it.indexOf("MSIE") || ~it.indexOf("Trident/"), we, yn = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, xn = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, Ht = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  },
  slab: {
    "fa-regular": "regular",
    faslr: "regular"
  },
  "slab-press": {
    "fa-regular": "regular",
    faslpr: "regular"
  },
  thumbprint: {
    "fa-light": "light",
    fatl: "light"
  },
  whiteboard: {
    "fa-semibold": "semibold",
    fawsb: "semibold"
  },
  notdog: {
    "fa-solid": "solid",
    fans: "solid"
  },
  "notdog-duo": {
    "fa-solid": "solid",
    fands: "solid"
  },
  etch: {
    "fa-solid": "solid",
    faes: "solid"
  },
  graphite: {
    "fa-thin": "thin",
    fagt: "thin"
  },
  jelly: {
    "fa-regular": "regular",
    fajr: "regular"
  },
  "jelly-fill": {
    "fa-regular": "regular",
    fajfr: "regular"
  },
  "jelly-duo": {
    "fa-regular": "regular",
    fajdr: "regular"
  },
  chisel: {
    "fa-regular": "regular",
    facr: "regular"
  },
  utility: {
    "fa-semibold": "semibold",
    fausb: "semibold"
  },
  "utility-duo": {
    "fa-semibold": "semibold",
    faudsb: "semibold"
  },
  "utility-fill": {
    "fa-semibold": "semibold",
    faufsb: "semibold"
  }
}, Sn = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Gt = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], I = "classic", re = "duotone", Bt = "sharp", Vt = "sharp-duotone", Xt = "chisel", Kt = "etch", Jt = "graphite", qt = "jelly", Qt = "jelly-duo", Zt = "jelly-fill", ea = "notdog", ta = "notdog-duo", aa = "slab", na = "slab-press", ra = "thumbprint", ia = "utility", oa = "utility-duo", sa = "utility-fill", la = "whiteboard", wn = "Classic", An = "Duotone", kn = "Sharp", In = "Sharp Duotone", Pn = "Chisel", En = "Etch", _n = "Graphite", Fn = "Jelly", Nn = "Jelly Duo", On = "Jelly Fill", Cn = "Notdog", Tn = "Notdog Duo", jn = "Slab", $n = "Slab Press", Ln = "Thumbprint", Mn = "Utility", Rn = "Utility Duo", Dn = "Utility Fill", zn = "Whiteboard", fa = [I, re, Bt, Vt, Xt, Kt, Jt, qt, Qt, Zt, ea, ta, aa, na, ra, ia, oa, sa, la];
we = {}, p(p(p(p(p(p(p(p(p(p(we, I, wn), re, An), Bt, kn), Vt, In), Xt, Pn), Kt, En), Jt, _n), qt, Fn), Qt, Nn), Zt, On), p(p(p(p(p(p(p(p(p(we, ea, Cn), ta, Tn), aa, jn), na, $n), ra, Ln), ia, Mn), oa, Rn), sa, Dn), la, zn);
var Wn = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  slab: {
    400: "faslr"
  },
  "slab-press": {
    400: "faslpr"
  },
  whiteboard: {
    600: "fawsb"
  },
  thumbprint: {
    300: "fatl"
  },
  notdog: {
    900: "fans"
  },
  "notdog-duo": {
    900: "fands"
  },
  etch: {
    900: "faes"
  },
  graphite: {
    100: "fagt"
  },
  chisel: {
    400: "facr"
  },
  jelly: {
    400: "fajr"
  },
  "jelly-fill": {
    400: "fajfr"
  },
  "jelly-duo": {
    400: "fajdr"
  },
  utility: {
    600: "fausb"
  },
  "utility-duo": {
    600: "faudsb"
  },
  "utility-fill": {
    600: "faufsb"
  }
}, Un = {
  "Font Awesome 7 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 7 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 7 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 7 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 7 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 7 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  "Font Awesome 7 Jelly": {
    400: "fajr",
    normal: "fajr"
  },
  "Font Awesome 7 Jelly Fill": {
    400: "fajfr",
    normal: "fajfr"
  },
  "Font Awesome 7 Jelly Duo": {
    400: "fajdr",
    normal: "fajdr"
  },
  "Font Awesome 7 Slab": {
    400: "faslr",
    normal: "faslr"
  },
  "Font Awesome 7 Slab Press": {
    400: "faslpr",
    normal: "faslpr"
  },
  "Font Awesome 7 Thumbprint": {
    300: "fatl",
    normal: "fatl"
  },
  "Font Awesome 7 Notdog": {
    900: "fans",
    normal: "fans"
  },
  "Font Awesome 7 Notdog Duo": {
    900: "fands",
    normal: "fands"
  },
  "Font Awesome 7 Etch": {
    900: "faes",
    normal: "faes"
  },
  "Font Awesome 7 Graphite": {
    100: "fagt",
    normal: "fagt"
  },
  "Font Awesome 7 Chisel": {
    400: "facr",
    normal: "facr"
  },
  "Font Awesome 7 Whiteboard": {
    600: "fawsb",
    normal: "fawsb"
  },
  "Font Awesome 7 Utility": {
    600: "fausb",
    normal: "fausb"
  },
  "Font Awesome 7 Utility Duo": {
    600: "faudsb",
    normal: "faudsb"
  },
  "Font Awesome 7 Utility Fill": {
    600: "faufsb",
    normal: "faufsb"
  }
}, Yn = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["chisel", {
  defaultShortPrefixId: "facr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["etch", {
  defaultShortPrefixId: "faes",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["graphite", {
  defaultShortPrefixId: "fagt",
  defaultStyleId: "thin",
  styleIds: ["thin"],
  futureStyleIds: [],
  defaultFontWeight: 100
}], ["jelly", {
  defaultShortPrefixId: "fajr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-duo", {
  defaultShortPrefixId: "fajdr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-fill", {
  defaultShortPrefixId: "fajfr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["notdog", {
  defaultShortPrefixId: "fans",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["notdog-duo", {
  defaultShortPrefixId: "fands",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["slab", {
  defaultShortPrefixId: "faslr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["slab-press", {
  defaultShortPrefixId: "faslpr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["thumbprint", {
  defaultShortPrefixId: "fatl",
  defaultStyleId: "light",
  styleIds: ["light"],
  futureStyleIds: [],
  defaultFontWeight: 300
}], ["utility", {
  defaultShortPrefixId: "fausb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-duo", {
  defaultShortPrefixId: "faudsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-fill", {
  defaultShortPrefixId: "faufsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["whiteboard", {
  defaultShortPrefixId: "fawsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}]]), Hn = {
  chisel: {
    regular: "facr"
  },
  classic: {
    brands: "fab",
    light: "fal",
    regular: "far",
    solid: "fas",
    thin: "fat"
  },
  duotone: {
    light: "fadl",
    regular: "fadr",
    solid: "fad",
    thin: "fadt"
  },
  etch: {
    solid: "faes"
  },
  graphite: {
    thin: "fagt"
  },
  jelly: {
    regular: "fajr"
  },
  "jelly-duo": {
    regular: "fajdr"
  },
  "jelly-fill": {
    regular: "fajfr"
  },
  notdog: {
    solid: "fans"
  },
  "notdog-duo": {
    solid: "fands"
  },
  sharp: {
    light: "fasl",
    regular: "fasr",
    solid: "fass",
    thin: "fast"
  },
  "sharp-duotone": {
    light: "fasdl",
    regular: "fasdr",
    solid: "fasds",
    thin: "fasdt"
  },
  slab: {
    regular: "faslr"
  },
  "slab-press": {
    regular: "faslpr"
  },
  thumbprint: {
    light: "fatl"
  },
  utility: {
    semibold: "fausb"
  },
  "utility-duo": {
    semibold: "faudsb"
  },
  "utility-fill": {
    semibold: "faufsb"
  },
  whiteboard: {
    semibold: "fawsb"
  }
}, ua = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], st = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Gn = ["kit"], Bn = "kit", Vn = "kit-duotone", Xn = "Kit", Kn = "Kit Duotone";
p(p({}, Bn, Xn), Vn, Kn);
var Jn = {
  kit: {
    "fa-kit": "fak"
  }
}, qn = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Qn = {
  kit: {
    fak: "fa-kit"
  }
}, lt = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ae, fe = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Zn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], er = "classic", tr = "duotone", ar = "sharp", nr = "sharp-duotone", rr = "chisel", ir = "etch", or = "graphite", sr = "jelly", lr = "jelly-duo", fr = "jelly-fill", ur = "notdog", cr = "notdog-duo", dr = "slab", mr = "slab-press", hr = "thumbprint", vr = "utility", pr = "utility-duo", gr = "utility-fill", br = "whiteboard", yr = "Classic", xr = "Duotone", Sr = "Sharp", wr = "Sharp Duotone", Ar = "Chisel", kr = "Etch", Ir = "Graphite", Pr = "Jelly", Er = "Jelly Duo", _r = "Jelly Fill", Fr = "Notdog", Nr = "Notdog Duo", Or = "Slab", Cr = "Slab Press", Tr = "Thumbprint", jr = "Utility", $r = "Utility Duo", Lr = "Utility Fill", Mr = "Whiteboard";
Ae = {}, p(p(p(p(p(p(p(p(p(p(Ae, er, yr), tr, xr), ar, Sr), nr, wr), rr, Ar), ir, kr), or, Ir), sr, Pr), lr, Er), fr, _r), p(p(p(p(p(p(p(p(p(Ae, ur, Fr), cr, Nr), dr, Or), mr, Cr), hr, Tr), vr, jr), pr, $r), gr, Lr), br, Mr);
var Rr = "kit", Dr = "kit-duotone", zr = "Kit", Wr = "Kit Duotone";
p(p({}, Rr, zr), Dr, Wr);
var Ur = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  },
  slab: {
    "fa-regular": "faslr"
  },
  "slab-press": {
    "fa-regular": "faslpr"
  },
  whiteboard: {
    "fa-semibold": "fawsb"
  },
  thumbprint: {
    "fa-light": "fatl"
  },
  notdog: {
    "fa-solid": "fans"
  },
  "notdog-duo": {
    "fa-solid": "fands"
  },
  etch: {
    "fa-solid": "faes"
  },
  graphite: {
    "fa-thin": "fagt"
  },
  jelly: {
    "fa-regular": "fajr"
  },
  "jelly-fill": {
    "fa-regular": "fajfr"
  },
  "jelly-duo": {
    "fa-regular": "fajdr"
  },
  chisel: {
    "fa-regular": "facr"
  },
  utility: {
    "fa-semibold": "fausb"
  },
  "utility-duo": {
    "fa-semibold": "faudsb"
  },
  "utility-fill": {
    "fa-semibold": "faufsb"
  }
}, Yr = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  slab: ["faslr"],
  "slab-press": ["faslpr"],
  whiteboard: ["fawsb"],
  thumbprint: ["fatl"],
  notdog: ["fans"],
  "notdog-duo": ["fands"],
  etch: ["faes"],
  graphite: ["fagt"],
  jelly: ["fajr"],
  "jelly-fill": ["fajfr"],
  "jelly-duo": ["fajdr"],
  chisel: ["facr"],
  utility: ["fausb"],
  "utility-duo": ["faudsb"],
  "utility-fill": ["faufsb"]
}, Ne = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  },
  slab: {
    faslr: "fa-regular"
  },
  "slab-press": {
    faslpr: "fa-regular"
  },
  whiteboard: {
    fawsb: "fa-semibold"
  },
  thumbprint: {
    fatl: "fa-light"
  },
  notdog: {
    fans: "fa-solid"
  },
  "notdog-duo": {
    fands: "fa-solid"
  },
  etch: {
    faes: "fa-solid"
  },
  graphite: {
    fagt: "fa-thin"
  },
  jelly: {
    fajr: "fa-regular"
  },
  "jelly-fill": {
    fajfr: "fa-regular"
  },
  "jelly-duo": {
    fajdr: "fa-regular"
  },
  chisel: {
    facr: "fa-regular"
  },
  utility: {
    fausb: "fa-semibold"
  },
  "utility-duo": {
    faudsb: "fa-semibold"
  },
  "utility-fill": {
    faufsb: "fa-semibold"
  }
}, Hr = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], ca = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(Zn, Hr), Gr = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], da = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Br = da.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Vr = ["aw", "fw", "pull-left", "pull-right"], Xr = [].concat(_(Object.keys(Yr)), Gr, Vr, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", fe.GROUP, fe.SWAP_OPACITY, fe.PRIMARY, fe.SECONDARY]).concat(da.map(function(e) {
  return "".concat(e, "x");
})).concat(Br.map(function(e) {
  return "w-".concat(e);
})), Kr = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, T = "___FONT_AWESOME___", Oe = 16, ma = "fa", ha = "svg-inline--fa", U = "data-fa-i2svg", Ce = "data-fa-pseudo-element", Jr = "data-fa-pseudo-element-pending", Be = "data-prefix", Ve = "data-icon", ft = "fontawesome-i2svg", qr = "async", Qr = ["HTML", "HEAD", "STYLE", "SCRIPT"], va = ["::before", "::after", ":before", ":after"], pa = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}();
function ie(e) {
  return new Proxy(e, {
    get: function(a, n) {
      return n in a ? a[n] : a[I];
    }
  });
}
var ga = f({}, Ht);
ga[I] = f(f(f(f({}, {
  "fa-duotone": "duotone"
}), Ht[I]), st.kit), st["kit-duotone"]);
var Zr = ie(ga), Te = f({}, Hn);
Te[I] = f(f(f(f({}, {
  duotone: "fad"
}), Te[I]), lt.kit), lt["kit-duotone"]);
var ut = ie(Te), je = f({}, Ne);
je[I] = f(f({}, je[I]), Qn.kit);
var Xe = ie(je), $e = f({}, Ur);
$e[I] = f(f({}, $e[I]), Jn.kit);
ie($e);
var ei = yn, ba = "fa-layers-text", ti = xn, ai = f({}, Wn);
ie(ai);
var ni = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ke = Sn, ri = [].concat(_(Gn), _(Xr)), Z = M.FontAwesomeConfig || {};
function ii(e) {
  var t = x.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function oi(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (x && typeof x.querySelector == "function") {
  var si = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  si.forEach(function(e) {
    var t = pe(e, 2), a = t[0], n = t[1], r = oi(ii(a));
    r != null && (Z[n] = r);
  });
}
var ya = {
  styleDefault: "solid",
  familyDefault: I,
  cssPrefix: ma,
  replacementClass: ha,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  searchPseudoElements: !1,
  searchPseudoElementsWarnings: !0,
  searchPseudoElementsFullScan: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Z.familyPrefix && (Z.cssPrefix = Z.familyPrefix);
var K = f(f({}, ya), Z);
K.autoReplaceSvg || (K.observeMutations = !1);
var m = {};
Object.keys(ya).forEach(function(e) {
  Object.defineProperty(m, e, {
    enumerable: !0,
    set: function(a) {
      K[e] = a, ee.forEach(function(n) {
        return n(m);
      });
    },
    get: function() {
      return K[e];
    }
  });
});
Object.defineProperty(m, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    K.cssPrefix = t, ee.forEach(function(a) {
      return a(m);
    });
  },
  get: function() {
    return K.cssPrefix;
  }
});
M.FontAwesomeConfig = m;
var ee = [];
function li(e) {
  return ee.push(e), function() {
    ee.splice(ee.indexOf(e), 1);
  };
}
var G = Oe, F = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function fi(e) {
  if (!(!e || !$)) {
    var t = x.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var a = x.head.childNodes, n = null, r = a.length - 1; r > -1; r--) {
      var i = a[r], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
    }
    return x.head.insertBefore(t, n), e;
  }
}
var ui = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ct() {
  for (var e = 12, t = ""; e-- > 0; )
    t += ui[Math.random() * 62 | 0];
  return t;
}
function q(e) {
  for (var t = [], a = (e || []).length >>> 0; a--; )
    t[a] = e[a];
  return t;
}
function Ke(e) {
  return e.classList ? q(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function xa(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ci(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, '="').concat(xa(e[a]), '" ');
  }, "").trim();
}
function ge(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, ": ").concat(e[a].trim(), ";");
  }, "");
}
function Je(e) {
  return e.size !== F.size || e.x !== F.x || e.y !== F.y || e.rotate !== F.rotate || e.flipX || e.flipY;
}
function di(e) {
  var t = e.transform, a = e.containerWidth, n = e.iconWidth, r = {
    transform: "translate(".concat(a / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: u
  };
}
function mi(e) {
  var t = e.transform, a = e.width, n = a === void 0 ? Oe : a, r = e.height, i = r === void 0 ? Oe : r, o = "";
  return Yt ? o += "translate(".concat(t.x / G - n / 2, "em, ").concat(t.y / G - i / 2, "em) ") : o += "translate(calc(-50% + ".concat(t.x / G, "em), calc(-50% + ").concat(t.y / G, "em)) "), o += "scale(".concat(t.size / G * (t.flipX ? -1 : 1), ", ").concat(t.size / G * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var hi = `:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;
function Sa() {
  var e = ma, t = ha, a = m.cssPrefix, n = m.replacementClass, r = hi;
  if (a !== e || n !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    r = r.replace(i, ".".concat(a, "-")).replace(o, "--".concat(a, "-")).replace(s, ".".concat(n));
  }
  return r;
}
var dt = !1;
function Ie() {
  m.autoAddCss && !dt && (fi(Sa()), dt = !0);
}
var vi = {
  mixout: function() {
    return {
      dom: {
        css: Sa,
        insertCss: Ie
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ie();
      },
      beforeI2svg: function() {
        Ie();
      }
    };
  }
}, j = M || {};
j[T] || (j[T] = {});
j[T].styles || (j[T].styles = {});
j[T].hooks || (j[T].hooks = {});
j[T].shims || (j[T].shims = []);
var E = j[T], wa = [], Aa = function() {
  x.removeEventListener("DOMContentLoaded", Aa), he = 1, wa.map(function(t) {
    return t();
  });
}, he = !1;
$ && (he = (x.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(x.readyState), he || x.addEventListener("DOMContentLoaded", Aa));
function pi(e) {
  $ && (he ? setTimeout(e, 0) : wa.push(e));
}
function oe(e) {
  var t = e.tag, a = e.attributes, n = a === void 0 ? {} : a, r = e.children, i = r === void 0 ? [] : r;
  return typeof e == "string" ? xa(e) : "<".concat(t, " ").concat(ci(n), ">").concat(i.map(oe).join(""), "</").concat(t, ">");
}
function mt(e, t, a) {
  if (e && e[t] && e[t][a])
    return {
      prefix: t,
      iconName: a,
      icon: e[t][a]
    };
}
var Pe = function(t, a, n, r) {
  var i = Object.keys(t), o = i.length, s = a, l, u, d;
  for (n === void 0 ? (l = 1, d = t[i[0]]) : (l = 0, d = n); l < o; l++)
    u = i[l], d = s(d, t[u], u, t);
  return d;
};
function ka(e) {
  return _(e).length !== 1 ? null : e.codePointAt(0).toString(16);
}
function ht(e) {
  return Object.keys(e).reduce(function(t, a) {
    var n = e[a], r = !!n.icon;
    return r ? t[n.iconName] = n.icon : t[a] = n, t;
  }, {});
}
function Le(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.skipHooks, r = n === void 0 ? !1 : n, i = ht(t);
  typeof E.hooks.addPack == "function" && !r ? E.hooks.addPack(e, ht(t)) : E.styles[e] = f(f({}, E.styles[e] || {}), i), e === "fas" && Le("fa", t);
}
var ae = E.styles, gi = E.shims, Ia = Object.keys(Xe), bi = Ia.reduce(function(e, t) {
  return e[t] = Object.keys(Xe[t]), e;
}, {}), qe = null, Pa = {}, Ea = {}, _a = {}, Fa = {}, Na = {};
function yi(e) {
  return ~ri.indexOf(e);
}
function xi(e, t) {
  var a = t.split("-"), n = a[0], r = a.slice(1).join("-");
  return n === e && r !== "" && !yi(r) ? r : null;
}
var Oa = function() {
  var t = function(i) {
    return Pe(ae, function(o, s, l) {
      return o[l] = Pe(s, i, {}), o;
    }, {});
  };
  Pa = t(function(r, i, o) {
    if (i[3] && (r[i[3]] = o), i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        r[l.toString(16)] = o;
      });
    }
    return r;
  }), Ea = t(function(r, i, o) {
    if (r[o] = o, i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        r[l] = o;
      });
    }
    return r;
  }), Na = t(function(r, i, o) {
    var s = i[2];
    return r[o] = o, s.forEach(function(l) {
      r[l] = o;
    }), r;
  });
  var a = "far" in ae || m.autoFetchSvg, n = Pe(gi, function(r, i) {
    var o = i[0], s = i[1], l = i[2];
    return s === "far" && !a && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  _a = n.names, Fa = n.unicodes, qe = be(m.styleDefault, {
    family: m.familyDefault
  });
};
li(function(e) {
  qe = be(e.styleDefault, {
    family: m.familyDefault
  });
});
Oa();
function Qe(e, t) {
  return (Pa[e] || {})[t];
}
function Si(e, t) {
  return (Ea[e] || {})[t];
}
function W(e, t) {
  return (Na[e] || {})[t];
}
function Ca(e) {
  return _a[e] || {
    prefix: null,
    iconName: null
  };
}
function wi(e) {
  var t = Fa[e], a = Qe("fas", e);
  return t || (a ? {
    prefix: "fas",
    iconName: a
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function R() {
  return qe;
}
var Ta = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ai(e) {
  var t = I, a = Ia.reduce(function(n, r) {
    return n[r] = "".concat(m.cssPrefix, "-").concat(r), n;
  }, {});
  return fa.forEach(function(n) {
    (e.includes(a[n]) || e.some(function(r) {
      return bi[n].includes(r);
    })) && (t = n);
  }), t;
}
function be(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.family, n = a === void 0 ? I : a, r = Zr[n][e];
  if (n === re && !e)
    return "fad";
  var i = ut[n][e] || ut[n][r], o = e in E.styles ? e : null, s = i || o || null;
  return s;
}
function ki(e) {
  var t = [], a = null;
  return e.forEach(function(n) {
    var r = xi(m.cssPrefix, n);
    r ? a = r : n && t.push(n);
  }), {
    iconName: a,
    rest: t
  };
}
function vt(e) {
  return e.sort().filter(function(t, a, n) {
    return n.indexOf(t) === a;
  });
}
var pt = ca.concat(ua);
function ye(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.skipLookups, n = a === void 0 ? !1 : a, r = null, i = vt(e.filter(function(v) {
    return pt.includes(v);
  })), o = vt(e.filter(function(v) {
    return !pt.includes(v);
  })), s = i.filter(function(v) {
    return r = v, !Gt.includes(v);
  }), l = pe(s, 1), u = l[0], d = u === void 0 ? null : u, c = Ai(i), h = f(f({}, ki(o)), {}, {
    prefix: be(d, {
      family: c
    })
  });
  return f(f(f({}, h), _i({
    values: e,
    family: c,
    styles: ae,
    config: m,
    canonical: h,
    givenPrefix: r
  })), Ii(n, r, h));
}
function Ii(e, t, a) {
  var n = a.prefix, r = a.iconName;
  if (e || !n || !r)
    return {
      prefix: n,
      iconName: r
    };
  var i = t === "fa" ? Ca(r) : {}, o = W(n, r);
  return r = i.iconName || o || r, n = i.prefix || n, n === "far" && !ae.far && ae.fas && !m.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: r
  };
}
var Pi = fa.filter(function(e) {
  return e !== I || e !== re;
}), Ei = Object.keys(Ne).filter(function(e) {
  return e !== I;
}).map(function(e) {
  return Object.keys(Ne[e]);
}).flat();
function _i(e) {
  var t = e.values, a = e.family, n = e.canonical, r = e.givenPrefix, i = r === void 0 ? "" : r, o = e.styles, s = o === void 0 ? {} : o, l = e.config, u = l === void 0 ? {} : l, d = a === re, c = t.includes("fa-duotone") || t.includes("fad"), h = u.familyDefault === "duotone", v = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!d && (c || h || v) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Pi.includes(a)) {
    var y = Object.keys(s).find(function(S) {
      return Ei.includes(S);
    });
    if (y || u.autoFetchSvg) {
      var b = Yn.get(a).defaultShortPrefixId;
      n.prefix = b, n.iconName = W(n.prefix, n.iconName) || n.iconName;
    }
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = R() || "fas"), n;
}
var Fi = /* @__PURE__ */ function() {
  function e() {
    un(this, e), this.definitions = {};
  }
  return dn(e, [{
    key: "add",
    value: function() {
      for (var a = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        a.definitions[s] = f(f({}, a.definitions[s] || {}), o[s]), Le(s, o[s]);
        var l = Xe[I][s];
        l && Le(l, o[s]), Oa();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(a, n) {
      var r = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(r).map(function(i) {
        var o = r[i], s = o.prefix, l = o.iconName, u = o.icon, d = u[2];
        a[s] || (a[s] = {}), d.length > 0 && d.forEach(function(c) {
          typeof c == "string" && (a[s][c] = u);
        }), a[s][l] = u;
      }), a;
    }
  }]);
}(), gt = [], V = {}, X = {}, Ni = Object.keys(X);
function Oi(e, t) {
  var a = t.mixoutsTo;
  return gt = e, V = {}, Object.keys(X).forEach(function(n) {
    Ni.indexOf(n) === -1 && delete X[n];
  }), gt.forEach(function(n) {
    var r = n.mixout ? n.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (a[o] = r[o]), me(r[o]) === "object" && Object.keys(r[o]).forEach(function(s) {
        a[o] || (a[o] = {}), a[o][s] = r[o][s];
      });
    }), n.hooks) {
      var i = n.hooks();
      Object.keys(i).forEach(function(o) {
        V[o] || (V[o] = []), V[o].push(i[o]);
      });
    }
    n.provides && n.provides(X);
  }), a;
}
function Me(e, t) {
  for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
    n[r - 2] = arguments[r];
  var i = V[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(n));
  }), t;
}
function Y(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    a[n - 1] = arguments[n];
  var r = V[e] || [];
  r.forEach(function(i) {
    i.apply(null, a);
  });
}
function D() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return X[e] ? X[e].apply(null, t) : void 0;
}
function Re(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, a = e.prefix || R();
  if (t)
    return t = W(a, t) || t, mt(ja.definitions, a, t) || mt(E.styles, a, t);
}
var ja = new Fi(), Ci = function() {
  m.autoReplaceSvg = !1, m.observeMutations = !1, Y("noAuto");
}, Ti = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return $ ? (Y("beforeI2svg", t), D("pseudoElements2svg", t), D("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot;
    m.autoReplaceSvg === !1 && (m.autoReplaceSvg = !0), m.observeMutations = !0, pi(function() {
      $i({
        autoReplaceSvgRoot: a
      }), Y("watch", t);
    });
  }
}, ji = {
  icon: function(t) {
    if (t === null)
      return null;
    if (me(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: W(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var a = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = be(t[0]);
      return {
        prefix: n,
        iconName: W(n, a) || a
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(m.cssPrefix, "-")) > -1 || t.match(ei))) {
      var r = ye(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || R(),
        iconName: W(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof t == "string") {
      var i = R();
      return {
        prefix: i,
        iconName: W(i, t) || t
      };
    }
  }
}, P = {
  noAuto: Ci,
  config: m,
  dom: Ti,
  parse: ji,
  library: ja,
  findIconDefinition: Re,
  toHtml: oe
}, $i = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot, n = a === void 0 ? x : a;
  (Object.keys(E.styles).length > 0 || m.autoFetchSvg) && $ && m.autoReplaceSvg && P.dom.i2svg({
    node: n
  });
};
function xe(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return oe(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if ($) {
        var n = x.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function Li(e) {
  var t = e.children, a = e.main, n = e.mask, r = e.attributes, i = e.styles, o = e.transform;
  if (Je(o) && a.found && !n.found) {
    var s = a.width, l = a.height, u = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = ge(f(f({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function Mi(e) {
  var t = e.prefix, a = e.iconName, n = e.children, r = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(m.cssPrefix, "-").concat(a) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: f(f({}, r), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function Ri(e) {
  var t = ["aria-label", "aria-labelledby", "title", "role"];
  return t.some(function(a) {
    return a in e;
  });
}
function Ze(e) {
  var t = e.icons, a = t.main, n = t.mask, r = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, l = e.maskId, u = e.extra, d = e.watchable, c = d === void 0 ? !1 : d, h = n.found ? n : a, v = h.width, y = h.height, b = [m.replacementClass, i ? "".concat(m.cssPrefix, "-").concat(i) : ""].filter(function(g) {
    return u.classes.indexOf(g) === -1;
  }).filter(function(g) {
    return g !== "" || !!g;
  }).concat(u.classes).join(" "), S = {
    children: [],
    attributes: f(f({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: b,
      role: u.attributes.role || "img",
      viewBox: "0 0 ".concat(v, " ").concat(y)
    })
  };
  !Ri(u.attributes) && !u.attributes["aria-hidden"] && (S.attributes["aria-hidden"] = "true"), c && (S.attributes[U] = "");
  var w = f(f({}, S), {}, {
    prefix: r,
    iconName: i,
    main: a,
    mask: n,
    maskId: l,
    transform: o,
    symbol: s,
    styles: f({}, u.styles)
  }), A = n.found && a.found ? D("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : D("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  }, k = A.children, N = A.attributes;
  return w.children = k, w.attributes = N, s ? Mi(w) : Li(w);
}
function bt(e) {
  var t = e.content, a = e.width, n = e.height, r = e.transform, i = e.extra, o = e.watchable, s = o === void 0 ? !1 : o, l = f(f({}, i.attributes), {}, {
    class: i.classes.join(" ")
  });
  s && (l[U] = "");
  var u = f({}, i.styles);
  Je(r) && (u.transform = mi({
    transform: r,
    width: a,
    height: n
  }), u["-webkit-transform"] = u.transform);
  var d = ge(u);
  d.length > 0 && (l.style = d);
  var c = [];
  return c.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), c;
}
function Di(e) {
  var t = e.content, a = e.extra, n = f(f({}, a.attributes), {}, {
    class: a.classes.join(" ")
  }), r = ge(a.styles);
  r.length > 0 && (n.style = r);
  var i = [];
  return i.push({
    tag: "span",
    attributes: n,
    children: [t]
  }), i;
}
var Ee = E.styles;
function De(e) {
  var t = e[0], a = e[1], n = e.slice(4), r = pe(n, 1), i = r[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(m.cssPrefix, "-").concat(ke.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(m.cssPrefix, "-").concat(ke.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(m.cssPrefix, "-").concat(ke.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: a,
    icon: o
  };
}
var zi = {
  found: !1,
  width: 512,
  height: 512
};
function Wi(e, t) {
  !pa && !m.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function ze(e, t) {
  var a = t;
  return t === "fa" && m.styleDefault !== null && (t = R()), new Promise(function(n, r) {
    if (a === "fa") {
      var i = Ca(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Ee[t] && Ee[t][e]) {
      var o = Ee[t][e];
      return n(De(o));
    }
    Wi(e, t), n(f(f({}, zi), {}, {
      icon: m.showMissingIcons && e ? D("missingIconAbstract") || {} : {}
    }));
  });
}
var yt = function() {
}, We = m.measurePerformance && le && le.mark && le.measure ? le : {
  mark: yt,
  measure: yt
}, Q = 'FA "7.2.0"', Ui = function(t) {
  return We.mark("".concat(Q, " ").concat(t, " begins")), function() {
    return $a(t);
  };
}, $a = function(t) {
  We.mark("".concat(Q, " ").concat(t, " ends")), We.measure("".concat(Q, " ").concat(t), "".concat(Q, " ").concat(t, " begins"), "".concat(Q, " ").concat(t, " ends"));
}, et = {
  begin: Ui,
  end: $a
}, ce = function() {
};
function xt(e) {
  var t = e.getAttribute ? e.getAttribute(U) : null;
  return typeof t == "string";
}
function Yi(e) {
  var t = e.getAttribute ? e.getAttribute(Be) : null, a = e.getAttribute ? e.getAttribute(Ve) : null;
  return t && a;
}
function Hi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(m.replacementClass);
}
function Gi() {
  if (m.autoReplaceSvg === !0)
    return de.replace;
  var e = de[m.autoReplaceSvg];
  return e || de.replace;
}
function Bi(e) {
  return x.createElementNS("http://www.w3.org/2000/svg", e);
}
function Vi(e) {
  return x.createElement(e);
}
function La(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.ceFn, n = a === void 0 ? e.tag === "svg" ? Bi : Vi : a;
  if (typeof e == "string")
    return x.createTextNode(e);
  var r = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    r.appendChild(La(o, {
      ceFn: n
    }));
  }), r;
}
function Xi(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var de = {
  replace: function(t) {
    var a = t[0];
    if (a.parentNode)
      if (t[1].forEach(function(r) {
        a.parentNode.insertBefore(La(r), a);
      }), a.getAttribute(U) === null && m.keepOriginalSource) {
        var n = x.createComment(Xi(a));
        a.parentNode.replaceChild(n, a);
      } else
        a.remove();
  },
  nest: function(t) {
    var a = t[0], n = t[1];
    if (~Ke(a).indexOf(m.replacementClass))
      return de.replace(t);
    var r = new RegExp("".concat(m.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var i = n[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === m.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? a.removeAttribute("class") : a.setAttribute("class", i.toNode.join(" "));
    }
    var o = n.map(function(s) {
      return oe(s);
    }).join(`
`);
    a.setAttribute(U, ""), a.innerHTML = o;
  }
};
function St(e) {
  e();
}
function Ma(e, t) {
  var a = typeof t == "function" ? t : ce;
  if (e.length === 0)
    a();
  else {
    var n = St;
    m.mutateApproach === qr && (n = M.requestAnimationFrame || St), n(function() {
      var r = Gi(), i = et.begin("mutate");
      e.map(r), i(), a();
    });
  }
}
var tt = !1;
function Ra() {
  tt = !0;
}
function Ue() {
  tt = !1;
}
var ve = null;
function wt(e) {
  if (ot && m.observeMutations) {
    var t = e.treeCallback, a = t === void 0 ? ce : t, n = e.nodeCallback, r = n === void 0 ? ce : n, i = e.pseudoElementsCallback, o = i === void 0 ? ce : i, s = e.observeMutationsRoot, l = s === void 0 ? x : s;
    ve = new ot(function(u) {
      if (!tt) {
        var d = R();
        q(u).forEach(function(c) {
          if (c.type === "childList" && c.addedNodes.length > 0 && !xt(c.addedNodes[0]) && (m.searchPseudoElements && o(c.target), a(c.target)), c.type === "attributes" && c.target.parentNode && m.searchPseudoElements && o([c.target], !0), c.type === "attributes" && xt(c.target) && ~ni.indexOf(c.attributeName))
            if (c.attributeName === "class" && Yi(c.target)) {
              var h = ye(Ke(c.target)), v = h.prefix, y = h.iconName;
              c.target.setAttribute(Be, v || d), y && c.target.setAttribute(Ve, y);
            } else Hi(c.target) && r(c.target);
        });
      }
    }), $ && ve.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Ki() {
  ve && ve.disconnect();
}
function Ji(e) {
  var t = e.getAttribute("style"), a = [];
  return t && (a = t.split(";").reduce(function(n, r) {
    var i = r.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), a;
}
function qi(e) {
  var t = e.getAttribute("data-prefix"), a = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", r = ye(Ke(e));
  return r.prefix || (r.prefix = R()), t && a && (r.prefix = t, r.iconName = a), r.iconName && r.prefix || (r.prefix && n.length > 0 && (r.iconName = Si(r.prefix, e.innerText) || Qe(r.prefix, ka(e.innerText))), !r.iconName && m.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function Qi(e) {
  var t = q(e.attributes).reduce(function(a, n) {
    return a.name !== "class" && a.name !== "style" && (a[n.name] = n.value), a;
  }, {});
  return t;
}
function Zi() {
  return {
    iconName: null,
    prefix: null,
    transform: F,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function At(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, a = qi(e), n = a.iconName, r = a.prefix, i = a.rest, o = Qi(e), s = Me("parseNodeAttributes", {}, e), l = t.styleParser ? Ji(e) : [];
  return f({
    iconName: n,
    prefix: r,
    transform: F,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: o
    }
  }, s);
}
var eo = E.styles;
function Da(e) {
  var t = m.autoReplaceSvg === "nest" ? At(e, {
    styleParser: !1
  }) : At(e);
  return ~t.extra.classes.indexOf(ba) ? D("generateLayersText", e, t) : D("generateSvgReplacementMutation", e, t);
}
function to() {
  return [].concat(_(ua), _(ca));
}
function kt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!$) return Promise.resolve();
  var a = x.documentElement.classList, n = function(c) {
    return a.add("".concat(ft, "-").concat(c));
  }, r = function(c) {
    return a.remove("".concat(ft, "-").concat(c));
  }, i = m.autoFetchSvg ? to() : Gt.concat(Object.keys(eo));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(ba, ":not([").concat(U, "])")].concat(i.map(function(d) {
    return ".".concat(d, ":not([").concat(U, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = q(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), r("complete");
  else
    return Promise.resolve();
  var l = et.begin("onTree"), u = s.reduce(function(d, c) {
    try {
      var h = Da(c);
      h && d.push(h);
    } catch (v) {
      pa || v.name === "MissingIcon" && console.error(v);
    }
    return d;
  }, []);
  return new Promise(function(d, c) {
    Promise.all(u).then(function(h) {
      Ma(h, function() {
        n("active"), n("complete"), r("pending"), typeof t == "function" && t(), l(), d();
      });
    }).catch(function(h) {
      l(), c(h);
    });
  });
}
function ao(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Da(e).then(function(a) {
    a && Ma([a], t);
  });
}
function no(e) {
  return function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : Re(t || {}), r = a.mask;
    return r && (r = (r || {}).icon ? r : Re(r || {})), e(n, f(f({}, a), {}, {
      mask: r
    }));
  };
}
var ro = function(t) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.transform, r = n === void 0 ? F : n, i = a.symbol, o = i === void 0 ? !1 : i, s = a.mask, l = s === void 0 ? null : s, u = a.maskId, d = u === void 0 ? null : u, c = a.classes, h = c === void 0 ? [] : c, v = a.attributes, y = v === void 0 ? {} : v, b = a.styles, S = b === void 0 ? {} : b;
  if (t) {
    var w = t.prefix, A = t.iconName, k = t.icon;
    return xe(f({
      type: "icon"
    }, t), function() {
      return Y("beforeDOMElementCreation", {
        iconDefinition: t,
        params: a
      }), Ze({
        icons: {
          main: De(k),
          mask: l ? De(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: w,
        iconName: A,
        transform: f(f({}, F), r),
        symbol: o,
        maskId: d,
        extra: {
          attributes: y,
          styles: S,
          classes: h
        }
      });
    });
  }
}, io = {
  mixout: function() {
    return {
      icon: no(ro)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.treeCallback = kt, a.nodeCallback = ao, a;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(a) {
      var n = a.node, r = n === void 0 ? x : n, i = a.callback, o = i === void 0 ? function() {
      } : i;
      return kt(r, o);
    }, t.generateSvgReplacementMutation = function(a, n) {
      var r = n.iconName, i = n.prefix, o = n.transform, s = n.symbol, l = n.mask, u = n.maskId, d = n.extra;
      return new Promise(function(c, h) {
        Promise.all([ze(r, i), l.iconName ? ze(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(v) {
          var y = pe(v, 2), b = y[0], S = y[1];
          c([a, Ze({
            icons: {
              main: b,
              mask: S
            },
            prefix: i,
            iconName: r,
            transform: o,
            symbol: s,
            maskId: u,
            extra: d,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, t.generateAbstractIcon = function(a) {
      var n = a.children, r = a.attributes, i = a.main, o = a.transform, s = a.styles, l = ge(s);
      l.length > 0 && (r.style = l);
      var u;
      return Je(o) && (u = D("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(u || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, oo = {
  mixout: function() {
    return {
      layer: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.classes, i = r === void 0 ? [] : r;
        return xe({
          type: "layer"
        }, function() {
          Y("beforeDOMElementCreation", {
            assembler: a,
            params: n
          });
          var o = [];
          return a(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(m.cssPrefix, "-layers")].concat(_(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, so = {
  mixout: function() {
    return {
      counter: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n.title;
        var r = n.classes, i = r === void 0 ? [] : r, o = n.attributes, s = o === void 0 ? {} : o, l = n.styles, u = l === void 0 ? {} : l;
        return xe({
          type: "counter",
          content: a
        }, function() {
          return Y("beforeDOMElementCreation", {
            content: a,
            params: n
          }), Di({
            content: a.toString(),
            extra: {
              attributes: s,
              styles: u,
              classes: ["".concat(m.cssPrefix, "-layers-counter")].concat(_(i))
            }
          });
        });
      }
    };
  }
}, lo = {
  mixout: function() {
    return {
      text: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? F : r, o = n.classes, s = o === void 0 ? [] : o, l = n.attributes, u = l === void 0 ? {} : l, d = n.styles, c = d === void 0 ? {} : d;
        return xe({
          type: "text",
          content: a
        }, function() {
          return Y("beforeDOMElementCreation", {
            content: a,
            params: n
          }), bt({
            content: a,
            transform: f(f({}, F), i),
            extra: {
              attributes: u,
              styles: c,
              classes: ["".concat(m.cssPrefix, "-layers-text")].concat(_(s))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(a, n) {
      var r = n.transform, i = n.extra, o = null, s = null;
      if (Yt) {
        var l = parseInt(getComputedStyle(a).fontSize, 10), u = a.getBoundingClientRect();
        o = u.width / l, s = u.height / l;
      }
      return Promise.resolve([a, bt({
        content: a.innerHTML,
        width: o,
        height: s,
        transform: r,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, za = new RegExp('"', "ug"), It = [1105920, 1112319], Pt = f(f(f(f({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Un), Kr), qn), Ye = Object.keys(Pt).reduce(function(e, t) {
  return e[t.toLowerCase()] = Pt[t], e;
}, {}), fo = Object.keys(Ye).reduce(function(e, t) {
  var a = Ye[t];
  return e[t] = a[900] || _(Object.entries(a))[0][1], e;
}, {});
function uo(e) {
  var t = e.replace(za, "");
  return ka(_(t)[0] || "");
}
function co(e) {
  var t = e.getPropertyValue("font-feature-settings").includes("ss01"), a = e.getPropertyValue("content"), n = a.replace(za, ""), r = n.codePointAt(0), i = r >= It[0] && r <= It[1], o = n.length === 2 ? n[0] === n[1] : !1;
  return i || o || t;
}
function mo(e, t) {
  var a = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), r = isNaN(n) ? "normal" : n;
  return (Ye[a] || {})[r] || fo[a];
}
function Et(e, t) {
  var a = "".concat(Jr).concat(t.replace(":", "-"));
  return new Promise(function(n, r) {
    if (e.getAttribute(a) !== null)
      return n();
    var i = q(e.children), o = i.filter(function(se) {
      return se.getAttribute(Ce) === t;
    })[0], s = M.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), u = l.match(ti), d = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), n();
    if (u && c !== "none" && c !== "") {
      var h = s.getPropertyValue("content"), v = mo(l, d), y = uo(h), b = u[0].startsWith("FontAwesome"), S = co(s), w = Qe(v, y), A = w;
      if (b) {
        var k = wi(y);
        k.iconName && k.prefix && (w = k.iconName, v = k.prefix);
      }
      if (w && !S && (!o || o.getAttribute(Be) !== v || o.getAttribute(Ve) !== A)) {
        e.setAttribute(a, A), o && e.removeChild(o);
        var N = Zi(), g = N.extra;
        g.attributes[Ce] = t, ze(w, v).then(function(se) {
          var Ba = Ze(f(f({}, N), {}, {
            icons: {
              main: se,
              mask: Ta()
            },
            prefix: v,
            iconName: A,
            extra: g,
            watchable: !0
          })), Se = x.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(Se, e.firstChild) : e.appendChild(Se), Se.outerHTML = Ba.map(function(Va) {
            return oe(Va);
          }).join(`
`), e.removeAttribute(a), n();
        }).catch(r);
      } else
        n();
    } else
      n();
  });
}
function ho(e) {
  return Promise.all([Et(e, "::before"), Et(e, "::after")]);
}
function vo(e) {
  return e.parentNode !== document.head && !~Qr.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Ce) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var po = function(t) {
  return !!t && va.some(function(a) {
    return t.includes(a);
  });
}, go = function(t) {
  if (!t) return [];
  var a = /* @__PURE__ */ new Set(), n = t.split(/,(?![^()]*\))/).map(function(l) {
    return l.trim();
  });
  n = n.flatMap(function(l) {
    return l.includes("(") ? l : l.split(",").map(function(u) {
      return u.trim();
    });
  });
  var r = ue(n), i;
  try {
    for (r.s(); !(i = r.n()).done; ) {
      var o = i.value;
      if (po(o)) {
        var s = va.reduce(function(l, u) {
          return l.replace(u, "");
        }, o);
        s !== "" && s !== "*" && a.add(s);
      }
    }
  } catch (l) {
    r.e(l);
  } finally {
    r.f();
  }
  return a;
};
function _t(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if ($) {
    var a;
    if (t)
      a = e;
    else if (m.searchPseudoElementsFullScan)
      a = e.querySelectorAll("*");
    else {
      var n = /* @__PURE__ */ new Set(), r = ue(document.styleSheets), i;
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var o = i.value;
          try {
            var s = ue(o.cssRules), l;
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var u = l.value, d = go(u.selectorText), c = ue(d), h;
                try {
                  for (c.s(); !(h = c.n()).done; ) {
                    var v = h.value;
                    n.add(v);
                  }
                } catch (b) {
                  c.e(b);
                } finally {
                  c.f();
                }
              }
            } catch (b) {
              s.e(b);
            } finally {
              s.f();
            }
          } catch (b) {
            m.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href, " (").concat(b.message, `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`));
          }
        }
      } catch (b) {
        r.e(b);
      } finally {
        r.f();
      }
      if (!n.size) return;
      var y = Array.from(n).join(", ");
      try {
        a = e.querySelectorAll(y);
      } catch {
      }
    }
    return new Promise(function(b, S) {
      var w = q(a).filter(vo).map(ho), A = et.begin("searchPseudoElements");
      Ra(), Promise.all(w).then(function() {
        A(), Ue(), b();
      }).catch(function() {
        A(), Ue(), S();
      });
    });
  }
}
var bo = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.pseudoElementsCallback = _t, a;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(a) {
      var n = a.node, r = n === void 0 ? x : n;
      m.searchPseudoElements && _t(r);
    };
  }
}, Ft = !1, yo = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Ra(), Ft = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        wt(Me("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Ki();
      },
      watch: function(a) {
        var n = a.observeMutationsRoot;
        Ft ? Ue() : wt(Me("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Nt = function(t) {
  var a = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, r) {
    var i = r.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, a);
}, xo = {
  mixout: function() {
    return {
      parse: {
        transform: function(a) {
          return Nt(a);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-transform");
        return r && (a.transform = Nt(r)), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(a) {
      var n = a.main, r = a.transform, i = a.containerWidth, o = a.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), d = "rotate(".concat(r.rotate, " 0 0)"), c = {
        transform: "".concat(l, " ").concat(u, " ").concat(d)
      }, h = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, v = {
        outer: s,
        inner: c,
        path: h
      };
      return {
        tag: "g",
        attributes: f({}, v.outer),
        children: [{
          tag: "g",
          attributes: f({}, v.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: f(f({}, n.icon.attributes), v.path)
          }]
        }]
      };
    };
  }
}, _e = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Ot(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function So(e) {
  return e.tag === "g" ? e.children : [e];
}
var wo = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-mask"), i = r ? ye(r.split(" ").map(function(o) {
          return o.trim();
        })) : Ta();
        return i.prefix || (i.prefix = R()), a.mask = i, a.maskId = n.getAttribute("data-fa-mask-id"), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(a) {
      var n = a.children, r = a.attributes, i = a.main, o = a.mask, s = a.maskId, l = a.transform, u = i.width, d = i.icon, c = o.width, h = o.icon, v = di({
        transform: l,
        containerWidth: c,
        iconWidth: u
      }), y = {
        tag: "rect",
        attributes: f(f({}, _e), {}, {
          fill: "white"
        })
      }, b = d.children ? {
        children: d.children.map(Ot)
      } : {}, S = {
        tag: "g",
        attributes: f({}, v.inner),
        children: [Ot(f({
          tag: d.tag,
          attributes: f(f({}, d.attributes), v.path)
        }, b))]
      }, w = {
        tag: "g",
        attributes: f({}, v.outer),
        children: [S]
      }, A = "mask-".concat(s || ct()), k = "clip-".concat(s || ct()), N = {
        tag: "mask",
        attributes: f(f({}, _e), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, w]
      }, g = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: k
          },
          children: So(h)
        }, N]
      };
      return n.push(g, {
        tag: "rect",
        attributes: f({
          fill: "currentColor",
          "clip-path": "url(#".concat(k, ")"),
          mask: "url(#".concat(A, ")")
        }, _e)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Ao = {
  provides: function(t) {
    var a = !1;
    M.matchMedia && (a = M.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = f(f({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: f(f({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return a || s.children.push({
        tag: "animate",
        attributes: f(f({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: f(f({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: a ? [] : [{
          tag: "animate",
          attributes: f(f({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), a || n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: f(f({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, ko = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-symbol"), i = r === null ? !1 : r === "" ? !0 : r;
        return a.symbol = i, a;
      }
    };
  }
}, Io = [vi, io, oo, so, lo, bo, yo, xo, wo, Ao, ko];
Oi(Io, {
  mixoutsTo: P
});
P.noAuto;
var J = P.config;
P.library;
P.dom;
var Wa = P.parse;
P.findIconDefinition;
P.toHtml;
var Po = P.icon;
P.layer;
P.text;
P.counter;
function Eo(e) {
  return e = e - 0, e === e;
}
function Ua(e) {
  return Eo(e) ? e : (e = e.replace(/[_-]+(.)?/g, (t, a) => a ? a.toUpperCase() : ""), e.charAt(0).toLowerCase() + e.slice(1));
}
var _o = (e, t) => ne.createElement("stop", {
  key: `${t}-${e.offset}`,
  offset: e.offset,
  stopColor: e.color,
  ...e.opacity !== void 0 && { stopOpacity: e.opacity }
});
function Fo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var B = /* @__PURE__ */ new Map(), No = 1e3;
function Oo(e) {
  if (B.has(e))
    return B.get(e);
  const t = {};
  let a = 0;
  const n = e.length;
  for (; a < n; ) {
    const r = e.indexOf(";", a), i = r === -1 ? n : r, o = e.slice(a, i).trim();
    if (o) {
      const s = o.indexOf(":");
      if (s > 0) {
        const l = o.slice(0, s).trim(), u = o.slice(s + 1).trim();
        if (l && u) {
          const d = Ua(l);
          t[d.startsWith("webkit") ? Fo(d) : d] = u;
        }
      }
    }
    a = i + 1;
  }
  if (B.size === No) {
    const r = B.keys().next().value;
    r && B.delete(r);
  }
  return B.set(e, t), t;
}
function Ya(e, t, a = {}) {
  if (typeof t == "string")
    return t;
  const n = (t.children || []).map((c) => {
    let h = c;
    return ("fill" in a || a.gradientFill) && c.tag === "path" && "fill" in c.attributes && (h = {
      ...c,
      attributes: {
        ...c.attributes,
        fill: void 0
      }
    }), Ya(e, h);
  }), r = t.attributes || {}, i = {};
  for (const [c, h] of Object.entries(r))
    switch (!0) {
      case c === "class": {
        i.className = h;
        break;
      }
      case c === "style": {
        i.style = Oo(String(h));
        break;
      }
      case c.startsWith("aria-"):
      case c.startsWith("data-"): {
        i[c.toLowerCase()] = h;
        break;
      }
      default:
        i[Ua(c)] = h;
    }
  const {
    style: o,
    role: s,
    "aria-label": l,
    gradientFill: u,
    ...d
  } = a;
  if (o && (i.style = i.style ? { ...i.style, ...o } : o), s && (i.role = s), l && (i["aria-label"] = l, i["aria-hidden"] = "false"), u) {
    i.fill = `url(#${u.id})`;
    const {
      type: c,
      stops: h = [],
      ...v
    } = u;
    n.unshift(
      e(
        c === "linear" ? "linearGradient" : "radialGradient",
        {
          ...v,
          id: u.id
        },
        h.map(_o)
      )
    );
  }
  return e(t.tag, { ...i, ...d }, ...n);
}
var Co = Ya.bind(null, ne.createElement), Ct = (e, t) => {
  const a = Rt();
  return e || (t ? a : void 0);
}, To = class {
  constructor(e = "react-fontawesome") {
    var a;
    this.enabled = !1;
    let t = !1;
    try {
      t = typeof process < "u" && ((a = process.env) == null ? void 0 : a.NODE_ENV) === "development";
    } catch {
    }
    this.scope = e, this.enabled = t;
  }
  /**
   * Logs messages to the console if not in production.
   * @param args - The message and/or data to log.
   */
  log(...e) {
    this.enabled && console.log(`[${this.scope}]`, ...e);
  }
  /**
   * Logs warnings to the console if not in production.
   * @param args - The warning message and/or data to log.
   */
  warn(...e) {
    this.enabled && console.warn(`[${this.scope}]`, ...e);
  }
  /**
   * Logs errors to the console if not in production.
   * @param args - The error message and/or data to log.
   */
  error(...e) {
    this.enabled && console.error(`[${this.scope}]`, ...e);
  }
}, Lt;
typeof process < "u" && ((Lt = process.env) != null && Lt.FA_VERSION);
var jo = (
  // @ts-expect-error TS2872 - Expression is always truthy - This is true when v7 of SVGCore is used, but not when v6 is used.
  // This is the point of this check - if the property exists on config, we have v7, otherwise we have v6.
  // TS is checking this against the dev dependencies which uses v7, so it reports a false error here.
  "searchPseudoElementsFullScan" in J && typeof J.searchPseudoElementsFullScan == "boolean" ? "7.0.0" : "6.0.0"
), $o = Number.parseInt(jo) >= 7, Lo = () => $o, te = "fa", O = {
  beat: "fa-beat",
  fade: "fa-fade",
  beatFade: "fa-beat-fade",
  bounce: "fa-bounce",
  shake: "fa-shake",
  spin: "fa-spin",
  spinPulse: "fa-spin-pulse",
  spinReverse: "fa-spin-reverse",
  pulse: "fa-pulse"
}, Mo = {
  left: "fa-pull-left",
  right: "fa-pull-right"
}, Ro = {
  90: "fa-rotate-90",
  180: "fa-rotate-180",
  270: "fa-rotate-270"
}, Do = {
  "2xs": "fa-2xs",
  xs: "fa-xs",
  sm: "fa-sm",
  lg: "fa-lg",
  xl: "fa-xl",
  "2xl": "fa-2xl",
  "1x": "fa-1x",
  "2x": "fa-2x",
  "3x": "fa-3x",
  "4x": "fa-4x",
  "5x": "fa-5x",
  "6x": "fa-6x",
  "7x": "fa-7x",
  "8x": "fa-8x",
  "9x": "fa-9x",
  "10x": "fa-10x"
}, C = {
  border: "fa-border",
  /** @deprecated */
  fixedWidth: "fa-fw",
  flip: "fa-flip",
  flipHorizontal: "fa-flip-horizontal",
  flipVertical: "fa-flip-vertical",
  inverse: "fa-inverse",
  rotateBy: "fa-rotate-by",
  swapOpacity: "fa-swap-opacity",
  widthAuto: "fa-width-auto"
};
function zo(e) {
  const t = J.cssPrefix || J.familyPrefix || te;
  return t === te ? e : e.replace(
    new RegExp(String.raw`(?<=^|\s)${te}-`, "g"),
    `${t}-`
  );
}
function Wo(e) {
  const {
    beat: t,
    fade: a,
    beatFade: n,
    bounce: r,
    shake: i,
    spin: o,
    spinPulse: s,
    spinReverse: l,
    pulse: u,
    fixedWidth: d,
    inverse: c,
    border: h,
    flip: v,
    size: y,
    rotation: b,
    pull: S,
    swapOpacity: w,
    rotateBy: A,
    widthAuto: k,
    className: N
  } = e, g = [];
  return N && g.push(...N.split(" ")), t && g.push(O.beat), a && g.push(O.fade), n && g.push(O.beatFade), r && g.push(O.bounce), i && g.push(O.shake), o && g.push(O.spin), l && g.push(O.spinReverse), s && g.push(O.spinPulse), u && g.push(O.pulse), d && g.push(C.fixedWidth), c && g.push(C.inverse), h && g.push(C.border), v === !0 && g.push(C.flip), (v === "horizontal" || v === "both") && g.push(C.flipHorizontal), (v === "vertical" || v === "both") && g.push(C.flipVertical), y != null && g.push(Do[y]), b != null && b !== 0 && g.push(Ro[b]), S != null && g.push(Mo[S]), w && g.push(C.swapOpacity), Lo() ? (A && g.push(C.rotateBy), k && g.push(C.widthAuto), (J.cssPrefix || J.familyPrefix || te) === te ? g : (
    // TODO: see if we can achieve custom prefix support without iterating
    // eslint-disable-next-line unicorn/no-array-callback-reference
    g.map(zo)
  )) : g;
}
var Uo = (e) => typeof e == "object" && "icon" in e && !!e.icon;
function Tt(e) {
  if (e)
    return Uo(e) ? e : Wa.icon(e);
}
function Yo(e) {
  return Object.keys(e);
}
var jt = new To("FontAwesomeIcon"), Ha = {
  border: !1,
  className: "",
  mask: void 0,
  maskId: void 0,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: void 0,
  listItem: !1,
  pull: void 0,
  pulse: !1,
  rotation: void 0,
  rotateBy: !1,
  size: void 0,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: void 0,
  transform: void 0,
  swapOpacity: !1,
  widthAuto: !1
}, Ho = new Set(Object.keys(Ha)), Ga = ne.forwardRef((e, t) => {
  const a = { ...Ha, ...e }, {
    icon: n,
    mask: r,
    symbol: i,
    title: o,
    titleId: s,
    maskId: l,
    transform: u
  } = a, d = Ct(l, !!r), c = Ct(s, !!o), h = Tt(n);
  if (!h)
    return jt.error("Icon lookup is undefined", n), null;
  const v = Wo(a), y = typeof u == "string" ? Wa.transform(u) : u, b = Tt(r), S = Po(h, {
    ...v.length > 0 && { classes: v },
    ...y && { transform: y },
    ...b && { mask: b },
    symbol: i,
    title: o,
    titleId: c,
    maskId: d
  });
  if (!S)
    return jt.error("Could not find icon", h), null;
  const { abstract: w } = S, A = { ref: t };
  for (const k of Yo(a))
    Ho.has(k) || (A[k] = a[k]);
  return Co(w[0], A);
});
Ga.displayName = "FontAwesomeIcon";
const Go = "_icon_h7mjs_1", Bo = "_xs_h7mjs_18", Vo = "_small_h7mjs_22", Xo = "_medium_h7mjs_26", Ko = "_large_h7mjs_30", Jo = "_xl_h7mjs_34", $t = {
  icon: Go,
  xs: Bo,
  small: Vo,
  medium: Xo,
  large: Ko,
  xl: Jo
}, qo = ({
  icon: e,
  size: t = "medium",
  className: a,
  "aria-label": n
}) => {
  const r = [$t.icon, $t[t], a].filter(Boolean).join(" ");
  return /* @__PURE__ */ L(
    "span",
    {
      className: r,
      "aria-label": n,
      "aria-hidden": n ? void 0 : !0,
      role: n ? "img" : void 0,
      children: /* @__PURE__ */ L(Ga, { icon: e, "aria-hidden": !0 })
    }
  );
};
qo.displayName = "Icon";
const Qo = "_root_1k2so_1", Zo = "_label_1k2so_8", es = "_input_1k2so_17", ts = "_inputError_1k2so_47", as = "_disabled_1k2so_58", ns = "_errorText_1k2so_69", rs = "_hintText_1k2so_70", z = {
  root: Qo,
  label: Zo,
  input: es,
  inputError: ts,
  disabled: as,
  errorText: ns,
  hintText: rs
}, is = ne.forwardRef(
  ({ label: e, error: t, hint: a, className: n, disabled: r, ...i }, o) => {
    const s = Rt(), l = i["aria-label"] ? void 0 : s, u = t ? `${s}-error` : void 0, d = a ? `${s}-hint` : void 0, c = [
      z.input,
      t ? z.inputError : "",
      n ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ Mt("div", { className: `${z.root} ${r ? z.disabled : ""}`, children: [
      e && /* @__PURE__ */ L("label", { htmlFor: l, className: z.label, children: e }),
      /* @__PURE__ */ L(
        "input",
        {
          ref: o,
          id: l,
          className: c,
          disabled: r,
          "aria-invalid": !!t,
          "aria-describedby": [u, d].filter(Boolean).join(" ") || void 0,
          ...i
        }
      ),
      t && /* @__PURE__ */ L("span", { id: u, className: z.errorText, role: "alert", children: t }),
      a && !t && /* @__PURE__ */ L("span", { id: d, className: z.hintText, children: a })
    ] });
  }
);
is.displayName = "TextField";
export {
  sn as Button,
  qo as Icon,
  is as TextField
};
