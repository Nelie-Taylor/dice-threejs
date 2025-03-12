var bt = (A, e, t) => {
  if (!e.has(A))
    throw TypeError("Cannot " + t);
};
var l = (A, e, t) => (bt(A, e, "read from private field"), t ? t.call(A) : e.get(A)), b = (A, e, t) => {
  if (e.has(A))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(A) : e.set(A, t);
}, w = (A, e, t, a) => (bt(A, e, "write to private field"), a ? a.call(A, t) : e.set(A, t), t);
var wt = (A, e, t, a) => ({
  set _(i) {
    w(A, e, i, t);
  },
  get _() {
    return l(A, e, a);
  }
}), N = (A, e, t) => (bt(A, e, "access private method"), t);
import tr, { createContext as Pr, useRef as Yt, useState as Wr, useEffect as rr, useContext as Br } from "react";
import * as S from "three";
import * as R from "cannon-es";
import { Platform as Ir, View as Vr } from "react-native-web";
var vt = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function Or() {
  if (qt)
    return Me;
  qt = 1;
  var A = tr, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(n, c, h) {
    var d, p = {}, _ = null, C = null;
    h !== void 0 && (_ = "" + h), c.key !== void 0 && (_ = "" + c.key), c.ref !== void 0 && (C = c.ref);
    for (d in c)
      a.call(c, d) && !s.hasOwnProperty(d) && (p[d] = c[d]);
    if (n && n.defaultProps)
      for (d in c = n.defaultProps, c)
        p[d] === void 0 && (p[d] = c[d]);
    return { $$typeof: e, type: n, key: _, ref: C, props: p, _owner: i.current };
  }
  return Me.Fragment = t, Me.jsx = o, Me.jsxs = o, Me;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function Lr() {
  return Xt || (Xt = 1, process.env.NODE_ENV !== "production" && function() {
    var A = tr, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), n = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), x = Symbol.iterator, y = "@@iterator";
    function f(r) {
      if (r === null || typeof r != "object")
        return null;
      var u = x && r[x] || r[y];
      return typeof u == "function" ? u : null;
    }
    var D = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(r) {
      {
        for (var u = arguments.length, m = new Array(u > 1 ? u - 1 : 0), F = 1; F < u; F++)
          m[F - 1] = arguments[F];
        v("error", r, m);
      }
    }
    function v(r, u, m) {
      {
        var F = D.ReactDebugCurrentFrame, P = F.getStackAddendum();
        P !== "" && (u += "%s", m = m.concat([P]));
        var B = m.map(function(E) {
          return String(E);
        });
        B.unshift("Warning: " + u), Function.prototype.apply.call(console[r], console, B);
      }
    }
    var k = !1, W = !1, z = !1, se = !1, I = !1, ie = Symbol.for("react.module.reference");
    function T(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === a || r === s || I || r === i || r === h || r === d || se || r === C || k || W || z || typeof r == "object" && r !== null && (r.$$typeof === _ || r.$$typeof === p || r.$$typeof === o || r.$$typeof === n || r.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === ie || r.getModuleId !== void 0));
    }
    function L(r, u, m) {
      var F = r.displayName;
      if (F)
        return F;
      var P = u.displayName || u.name || "";
      return P !== "" ? m + "(" + P + ")" : m;
    }
    function Y(r) {
      return r.displayName || "Context";
    }
    function q(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case a:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case n:
            var u = r;
            return Y(u) + ".Consumer";
          case o:
            var m = r;
            return Y(m._context) + ".Provider";
          case c:
            return L(r, r.render, "ForwardRef");
          case p:
            var F = r.displayName || null;
            return F !== null ? F : q(r.type) || "Memo";
          case _: {
            var P = r, B = P._payload, E = P._init;
            try {
              return q(E(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, X = 0, Ke, de, Dt, kt, Rt, Mt, Et;
    function Tt() {
    }
    Tt.__reactDisabledLog = !0;
    function lr() {
      {
        if (X === 0) {
          Ke = console.log, de = console.info, Dt = console.warn, kt = console.error, Rt = console.group, Mt = console.groupCollapsed, Et = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Tt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        X++;
      }
    }
    function cr() {
      {
        if (X--, X === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, r, {
              value: Ke
            }),
            info: G({}, r, {
              value: de
            }),
            warn: G({}, r, {
              value: Dt
            }),
            error: G({}, r, {
              value: kt
            }),
            group: G({}, r, {
              value: Rt
            }),
            groupCollapsed: G({}, r, {
              value: Mt
            }),
            groupEnd: G({}, r, {
              value: Et
            })
          });
        }
        X < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ut = D.ReactCurrentDispatcher, ht;
    function Je(r, u, m) {
      {
        if (ht === void 0)
          try {
            throw Error();
          } catch (P) {
            var F = P.stack.trim().match(/\n( *(at )?)/);
            ht = F && F[1] || "";
          }
        return `
` + ht + r;
      }
    }
    var dt = !1, Ze;
    {
      var ur = typeof WeakMap == "function" ? WeakMap : Map;
      Ze = new ur();
    }
    function Pt(r, u) {
      if (!r || dt)
        return "";
      {
        var m = Ze.get(r);
        if (m !== void 0)
          return m;
      }
      var F;
      dt = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = ut.current, ut.current = null, lr();
      try {
        if (u) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (ne) {
              F = ne;
            }
            Reflect.construct(r, [], E);
          } else {
            try {
              E.call();
            } catch (ne) {
              F = ne;
            }
            r.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            F = ne;
          }
          r();
        }
      } catch (ne) {
        if (ne && F && typeof ne.stack == "string") {
          for (var M = ne.stack.split(`
`), $ = F.stack.split(`
`), V = M.length - 1, O = $.length - 1; V >= 1 && O >= 0 && M[V] !== $[O]; )
            O--;
          for (; V >= 1 && O >= 0; V--, O--)
            if (M[V] !== $[O]) {
              if (V !== 1 || O !== 1)
                do
                  if (V--, O--, O < 0 || M[V] !== $[O]) {
                    var K = `
` + M[V].replace(" at new ", " at ");
                    return r.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", r.displayName)), typeof r == "function" && Ze.set(r, K), K;
                  }
                while (V >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        dt = !1, ut.current = B, cr(), Error.prepareStackTrace = P;
      }
      var Fe = r ? r.displayName || r.name : "", Ut = Fe ? Je(Fe) : "";
      return typeof r == "function" && Ze.set(r, Ut), Ut;
    }
    function hr(r, u, m) {
      return Pt(r, !1);
    }
    function dr(r) {
      var u = r.prototype;
      return !!(u && u.isReactComponent);
    }
    function Qe(r, u, m) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Pt(r, dr(r));
      if (typeof r == "string")
        return Je(r);
      switch (r) {
        case h:
          return Je("Suspense");
        case d:
          return Je("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            return hr(r.render);
          case p:
            return Qe(r.type, u, m);
          case _: {
            var F = r, P = F._payload, B = F._init;
            try {
              return Qe(B(P), u, m);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, Wt = {}, Bt = D.ReactDebugCurrentFrame;
    function tt(r) {
      if (r) {
        var u = r._owner, m = Qe(r.type, r._source, u ? u.type : null);
        Bt.setExtraStackFrame(m);
      } else
        Bt.setExtraStackFrame(null);
    }
    function fr(r, u, m, F, P) {
      {
        var B = Function.call.bind(et);
        for (var E in r)
          if (B(r, E)) {
            var M = void 0;
            try {
              if (typeof r[E] != "function") {
                var $ = Error((F || "React class") + ": " + m + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              M = r[E](u, E, F, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              M = V;
            }
            M && !(M instanceof Error) && (tt(P), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", m, E, typeof M), tt(null)), M instanceof Error && !(M.message in Wt) && (Wt[M.message] = !0, tt(P), g("Failed %s type: %s", m, M.message), tt(null));
          }
      }
    }
    var pr = Array.isArray;
    function ft(r) {
      return pr(r);
    }
    function mr(r) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, m = u && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return m;
      }
    }
    function gr(r) {
      try {
        return It(r), !1;
      } catch {
        return !0;
      }
    }
    function It(r) {
      return "" + r;
    }
    function Vt(r) {
      if (gr(r))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(r)), It(r);
    }
    var Re = D.ReactCurrentOwner, yr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ot, Lt, pt;
    pt = {};
    function br(r) {
      if (et.call(r, "ref")) {
        var u = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function wr(r) {
      if (et.call(r, "key")) {
        var u = Object.getOwnPropertyDescriptor(r, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function vr(r, u) {
      if (typeof r.ref == "string" && Re.current && u && Re.current.stateNode !== u) {
        var m = q(Re.current.type);
        pt[m] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(Re.current.type), r.ref), pt[m] = !0);
      }
    }
    function _r(r, u) {
      {
        var m = function() {
          Ot || (Ot = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        m.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function xr(r, u) {
      {
        var m = function() {
          Lt || (Lt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        m.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Fr = function(r, u, m, F, P, B, E) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: r,
        key: u,
        ref: m,
        props: E,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Sr(r, u, m, F, P) {
      {
        var B, E = {}, M = null, $ = null;
        m !== void 0 && (Vt(m), M = "" + m), wr(u) && (Vt(u.key), M = "" + u.key), br(u) && ($ = u.ref, vr(u, P));
        for (B in u)
          et.call(u, B) && !yr.hasOwnProperty(B) && (E[B] = u[B]);
        if (r && r.defaultProps) {
          var V = r.defaultProps;
          for (B in V)
            E[B] === void 0 && (E[B] = V[B]);
        }
        if (M || $) {
          var O = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          M && _r(E, O), $ && xr(E, O);
        }
        return Fr(r, M, $, P, F, Re.current, E);
      }
    }
    var mt = D.ReactCurrentOwner, zt = D.ReactDebugCurrentFrame;
    function xe(r) {
      if (r) {
        var u = r._owner, m = Qe(r.type, r._source, u ? u.type : null);
        zt.setExtraStackFrame(m);
      } else
        zt.setExtraStackFrame(null);
    }
    var gt;
    gt = !1;
    function yt(r) {
      return typeof r == "object" && r !== null && r.$$typeof === e;
    }
    function jt() {
      {
        if (mt.current) {
          var r = q(mt.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Ar(r) {
      {
        if (r !== void 0) {
          var u = r.fileName.replace(/^.*[\\\/]/, ""), m = r.lineNumber;
          return `

Check your code at ` + u + ":" + m + ".";
        }
        return "";
      }
    }
    var Gt = {};
    function Cr(r) {
      {
        var u = jt();
        if (!u) {
          var m = typeof r == "string" ? r : r.displayName || r.name;
          m && (u = `

Check the top-level render call using <` + m + ">.");
        }
        return u;
      }
    }
    function $t(r, u) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var m = Cr(u);
        if (Gt[m])
          return;
        Gt[m] = !0;
        var F = "";
        r && r._owner && r._owner !== mt.current && (F = " It was passed a child from " + q(r._owner.type) + "."), xe(r), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, F), xe(null);
      }
    }
    function Ht(r, u) {
      {
        if (typeof r != "object")
          return;
        if (ft(r))
          for (var m = 0; m < r.length; m++) {
            var F = r[m];
            yt(F) && $t(F, u);
          }
        else if (yt(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var P = f(r);
          if (typeof P == "function" && P !== r.entries)
            for (var B = P.call(r), E; !(E = B.next()).done; )
              yt(E.value) && $t(E.value, u);
        }
      }
    }
    function Dr(r) {
      {
        var u = r.type;
        if (u == null || typeof u == "string")
          return;
        var m;
        if (typeof u == "function")
          m = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === p))
          m = u.propTypes;
        else
          return;
        if (m) {
          var F = q(u);
          fr(m, r.props, "prop", F, r);
        } else if (u.PropTypes !== void 0 && !gt) {
          gt = !0;
          var P = q(u);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(r) {
      {
        for (var u = Object.keys(r.props), m = 0; m < u.length; m++) {
          var F = u[m];
          if (F !== "children" && F !== "key") {
            xe(r), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), xe(null);
            break;
          }
        }
        r.ref !== null && (xe(r), g("Invalid attribute `ref` supplied to `React.Fragment`."), xe(null));
      }
    }
    function Nt(r, u, m, F, P, B) {
      {
        var E = T(r);
        if (!E) {
          var M = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = Ar(P);
          $ ? M += $ : M += jt();
          var V;
          r === null ? V = "null" : ft(r) ? V = "array" : r !== void 0 && r.$$typeof === e ? (V = "<" + (q(r.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : V = typeof r, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, M);
        }
        var O = Sr(r, u, m, P, B);
        if (O == null)
          return O;
        if (E) {
          var K = u.children;
          if (K !== void 0)
            if (F)
              if (ft(K)) {
                for (var Fe = 0; Fe < K.length; Fe++)
                  Ht(K[Fe], r);
                Object.freeze && Object.freeze(K);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ht(K, r);
        }
        return r === a ? kr(O) : Dr(O), O;
      }
    }
    function Rr(r, u, m) {
      return Nt(r, u, m, !0);
    }
    function Mr(r, u, m) {
      return Nt(r, u, m, !1);
    }
    var Er = Mr, Tr = Rr;
    Ee.Fragment = a, Ee.jsx = Er, Ee.jsxs = Tr;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? vt.exports = Or() : vt.exports = Lr();
var _t = vt.exports, oe, Te, Pe, At, Ct, pe, ce, me, ue, ge, ye, st;
class Kt {
  constructor(e) {
    b(this, oe, []);
    b(this, Te, /* @__PURE__ */ new Map());
    b(this, Pe, 0);
    b(this, At, []);
    b(this, Ct, 0);
    b(this, pe, "");
    b(this, ce, null);
    b(this, me, []);
    b(this, ue, !1);
    b(this, ge, 1);
    b(this, ye, "");
    b(this, st, []);
    if (typeof e == "object" && (e = e.notation), !e || e === "0") {
      w(this, ue, !0);
      return;
    }
    this.parseNotation(e);
  }
  get error() {
    return l(this, ue);
  }
  get notation() {
    return l(this, ye);
  }
  get result() {
    return l(this, me);
  }
  get boost() {
    return l(this, ge);
  }
  get set() {
    return l(this, oe);
  }
  get constant() {
    return l(this, ce);
  }
  get op() {
    return l(this, pe);
  }
  get vectors() {
    return l(this, st);
  }
  parseNotation(e) {
    if (!e)
      return;
    const t = (e.match(/!/g) || []).length;
    t > 0 && (w(this, ge, Math.min(Math.max(t, 0), 3) * 4), e = e.replace(/!/g, "")), e = e.replace(/\s+/g, "");
    const a = (e.match(/\(/g) || []).length, i = (e.match(/\)/g) || []).length;
    if (a !== i) {
      w(this, ue, !0);
      return;
    }
    const s = l(this, ye).length > 0 ? "+" : "";
    w(this, ye, l(this, ye) + s + e);
    let [o, n] = e.split("@");
    const c = /(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/i, h = /(\b)*(\-\d+|\d+)(\b)*/gi;
    let d = 0;
    const p = 30;
    let _ = 0, C = 0;
    for (; !l(this, ue) && o.length > 0 && d < p; ) {
      const x = c.exec(o);
      if (!x)
        break;
      d++;
      let [
        y,
        f,
        D,
        g,
        v,
        k = "",
        W = "",
        z
      ] = x;
      o = o.substring(y.length);
      const se = D && D.length > 0, I = z && z.length > 0;
      let ie = !0;
      se && (_ += D.length);
      const T = W.split(",").slice(1);
      d === 1 && o.length === 0 && !v && f && g ? (w(this, pe, f), w(this, ce, parseInt(g, 10)), this.addSet(
        1,
        "d20",
        C,
        _,
        k,
        T,
        f
      )) : d > 1 && o.length === 0 && !v ? (w(this, pe, f), w(this, ce, parseInt(g, 10)), ie = !1) : ie && this.addSet(
        g,
        v,
        C,
        _,
        k,
        T,
        f
      ), I && (_ -= z.length, C += z.length);
    }
    if (!l(this, ue) && n) {
      const x = n.match(h);
      x && w(this, me, [...x]);
    }
  }
  stringify(e = !0) {
    if (l(this, oe).length === 0)
      return "";
    const t = l(this, oe).reduce((o, n, c) => {
      const h = c > 0 && n.op ? n.op : "", d = n.func ? `{${n.func}${n.args ? "," + (Array.isArray(n.args) ? n.args.join(",") : n.args) : ""}}` : "";
      return `${o}${h}${n.num}${n.type}${d}`;
    }, ""), a = l(this, ce) ? `${l(this, pe)}${Math.abs(l(this, ce))}` : "", i = e && l(this, me).length > 0 ? `@${l(this, me).join(",")}` : "", s = l(this, ge) > 1 ? "!".repeat(l(this, ge) / 4) : "";
    return `${t}${a}${i}${s}`;
  }
  addSet(e, t, a = 0, i = 0, s = "", o = "", n = "+") {
    if (e = Math.abs(parseInt(e || 1, 10)), e === 0)
      return;
    const c = `${n}${t}${a}${i}${s}${o}`, h = l(this, Te).get(c);
    if (h !== void 0) {
      const d = l(this, oe)[h];
      d.num += e;
    } else {
      const d = {
        num: e,
        type: t,
        sid: l(this, Pe),
        gid: a,
        glvl: i,
        ...s && { func: s },
        ...o && { args: o },
        ...n && { op: n }
      };
      l(this, Te).set(c, l(this, oe).length), l(this, oe).push(d), wt(this, Pe)._++;
    }
  }
  static mergeNotation(e, t) {
    return {
      ...e,
      constant: (e.constant ?? 0) + (t.constant ?? 0),
      notation: `${e.notation}+${t.notation}`,
      set: [...e.set, ...t.set],
      vectors: [
        ...e.vectors || [],
        ...t.vectors || []
      ]
    };
  }
}
oe = new WeakMap(), Te = new WeakMap(), Pe = new WeakMap(), At = new WeakMap(), Ct = new WeakMap(), pe = new WeakMap(), ce = new WeakMap(), me = new WeakMap(), ue = new WeakMap(), ge = new WeakMap(), ye = new WeakMap(), st = new WeakMap();
const Jt = {
  d2: {
    name: "d2",
    labels: ["1", "2"],
    values: [1, 2],
    inertia: 8,
    mass: 400,
    scale: 0.9,
    system: "dweird"
  },
  dc: {
    type: "d2",
    name: "Coin",
    labels: [
      "textures/silvercoin/tail.png",
      "textures/silvercoin/heads.png"
    ],
    setBumpMaps: [
      "textures/silvercoin/tail_bump.png",
      "textures/silvercoin/heads_bump.png"
    ],
    values: [0, 1],
    inertia: 8,
    mass: 400,
    scale: 0.9,
    colorset: "coin_silver"
  },
  d1: {
    name: "One-sided Dice",
    type: "d6",
    labels: ["1"],
    values: [1, 1],
    scale: 0.9,
    system: "dweird"
  },
  /*d2', 'd6: {
  	name: 'Two-Sided Dice',
  	labels: ['1', '2'],
  	values: [ 1,2 ],
  	scale: 0.9,
  	system: 'dweird',
  },*/
  d3: {
    name: "Three-Sided Dice",
    type: "d6",
    labels: ["1", "2", "3"],
    values: [1, 3],
    scale: 0.9,
    system: "dweird"
  },
  df: {
    name: "Fudge Dice",
    type: "d6",
    labels: ["-", "0", "+"],
    values: [-1, 1],
    scale: 0.9,
    system: "dweird"
  },
  d4: {
    name: "Four-Sided Dice",
    labels: ["1", "2", "3", "4"],
    values: [1, 4],
    inertia: 5,
    scale: 1.2
  },
  d6: {
    name: "Six-Sided Dice (Numbers)",
    labels: ["1", "2", "3", "4", "5", "6"],
    values: [1, 6],
    scale: 0.9
  },
  dpip: {
    name: "Six-Sided Dice (Pips)",
    type: "d6",
    labels: [
      `   
 ⬤ 
   `,
      `⬤  
   
  ⬤`,
      `⬤  
 ⬤ 
  ⬤`,
      `⬤ ⬤
   
⬤ ⬤`,
      `⬤ ⬤
 ⬤ 
⬤ ⬤`,
      `⬤ ⬤
⬤ ⬤
⬤ ⬤`
    ],
    values: [1, 6],
    scale: 0.9,
    font: "monospace"
  },
  dsex: {
    name: "Sex-Sided Emoji Dice",
    type: "d6",
    labels: ["🍆", "🍑", "👌", "💦", "🙏", "💥"],
    values: [1, 6],
    scale: 0.9,
    display: "labels",
    system: "dweird"
  },
  dpoker: {
    name: "Poker Dice (9-Ace)",
    type: "d6",
    labels: ["A", "9", "10", "J", "Q", "K"],
    values: [1, 6],
    scale: 0.9,
    display: "labels",
    system: "dweird",
    font: "Times New Roman"
  },
  dspanpoker: {
    name: "Spanish Poker Dice (7-Ace)",
    type: "d8",
    labels: ["A", "7", "8", "9", "10", "J", "Q", "K"],
    values: [1, 8],
    display: "labels",
    system: "dweird",
    font: "Times New Roman"
  },
  disotope: {
    name: "Radioactive Twelve-Sided Dice",
    type: "d12",
    labels: ["", "", "", "", "", "", "", "", "", "", "", "☢️"],
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    mass: 350,
    inertia: 8,
    scale: 0.9,
    system: "dweird"
  },
  dsuit: {
    name: "Four-Suited Dice",
    type: "d4",
    labels: ["♠️", "♥️", "♦️", "♣️"],
    values: [1, 4],
    inertia: 5,
    scale: 1.2,
    display: "labels",
    system: "dweird"
  },
  d8: {
    name: "Eight-Sided Dice",
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    values: [1, 8]
  },
  d10: {
    name: "Ten-Sided Dice (Single Digit)",
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    values: [1, 10],
    mass: 350,
    inertia: 9,
    scale: 0.9
  },
  d100: {
    name: "Ten-Sided Dice (Tens Digit)",
    type: "d10",
    labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "00"],
    values: [10, 100, 10],
    mass: 350,
    inertia: 9,
    scale: 0.9
  },
  d12: {
    name: "Twelve-Sided Dice",
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    values: [1, 12],
    mass: 350,
    inertia: 8,
    scale: 0.9
  },
  d20: {
    name: "Twenty-Sided Dice",
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    values: [1, 20],
    mass: 400,
    inertia: 6
  },
  //star wars rpg dice
  // Ability
  dabi: {
    name: "Star Wars RPG: Ability Dice",
    type: "d8",
    labels: ["s", "a", `s
a`, `s
s`, "a", "s", `a
a`, ""],
    values: [1, 8],
    font: "SWRPG-Symbol-Regular",
    color: "#00FF00",
    colorset: "swrpg_abi",
    display: "labels",
    system: "swrpg"
  },
  // Difficulty
  ddif: {
    name: "Star Wars RPG: Difficulty Dice",
    type: "d8",
    labels: ["t", "f", `f
t`, "t", "", `t
t`, `f
f`, "t"],
    values: [1, 8],
    font: "SWRPG-Symbol-Regular",
    color: "#8000FC",
    colorset: "swrpg_dif",
    display: "labels",
    system: "swrpg"
  },
  // Proficiency
  dpro: {
    name: "Star Wars RPG: Proficiency Dice",
    type: "d12",
    labels: [`a
a`, "a", `a
a`, "x", "s", `s
a`, "s", `s
a`, `s
s`, `s
a`, `s
s`, ""],
    values: [1, 12],
    mass: 350,
    inertia: 8,
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#FFFF00",
    colorset: "swrpg_pro",
    display: "labels",
    system: "swrpg"
  },
  // Challenge
  dcha: {
    name: "Star Wars RPG: Challenge Dice",
    type: "d12",
    labels: [`t
t`, "t", `t
t`, "t", `t
f`, "f", `t
f`, "f", `f
f`, "y", `f
f`, ""],
    values: [1, 12],
    mass: 350,
    inertia: 8,
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#FF0000",
    colorset: "swrpg_cha",
    display: "labels",
    system: "swrpg"
  },
  // Force
  dfor: {
    name: "Star Wars RPG: Force Dice",
    type: "d12",
    labels: ["z", `Z
Z`, "z", `Z
Z`, "z", `Z
Z`, "z", "Z", "z", "Z", "z", `z
z`],
    values: [1, 12],
    mass: 350,
    inertia: 8,
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#FFFFFF",
    colorset: "swrpg_for",
    display: "labels",
    system: "swrpg"
  },
  // Boost
  dboo: {
    name: "Star Wars RPG: Boost Dice",
    type: "d6",
    labels: [`s  
  a`, `a  
  a`, "s", "a", "", ""],
    values: [1, 6],
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#00FFFF",
    colorset: "swrpg_boo",
    display: "labels",
    system: "swrpg"
  },
  // Setback
  dset: {
    name: "Star Wars RPG: Setback Dice",
    type: "d6",
    labels: ["", "t", "f"],
    values: [1, 3],
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#111111",
    colorset: "swrpg_set",
    display: "labels",
    system: "swrpg"
  },
  // star wars armada dice
  // Attack Red
  swar: {
    name: "Star Wars Armada: Red Attack Dice",
    type: "d8",
    labels: ["F", "F", `F
F`, "E", "E", "G", "", ""],
    values: [1, 8],
    font: "Armada-Symbol-Regular",
    color: "#FF0000",
    colorset: "swa_red",
    display: "labels",
    system: "swarmada"
  },
  // Attack Blue
  swab: {
    name: "Star Wars Armada: Blue Attack Dice",
    type: "d8",
    labels: ["F", "F", "F", "F", "E", "E", "G", "G"],
    values: [1, 8],
    font: "Armada-Symbol-Regular",
    color: "#0000FF",
    colorset: "swa_blue",
    display: "labels",
    system: "swarmada"
  },
  // Attack Black
  swak: {
    name: "Star Wars Armada: Black Attack Dice",
    type: "d8",
    labels: ["F", "F", "F", "F", `F
E`, `F
E`, "", ""],
    values: [1, 8],
    font: "Armada-Symbol-Regular",
    color: "#111111",
    colorset: "swa_black",
    display: "labels",
    system: "swarmada"
  },
  // star wars x-wing
  // Attack - Red
  xwatk: {
    name: "Star Wars X-Wing: Red Attack Dice",
    type: "d8",
    labels: ["c", "d", "d", "d", "f", "f", "", ""],
    values: [1, 8],
    font: "XWing-Symbol-Regular",
    color: "#FF0000",
    colorset: "xwing_red",
    display: "labels",
    system: "xwing"
  },
  // Defense - Green
  xwdef: {
    name: "Star Wars X-Wing: Green Defense Dice",
    type: "d8",
    labels: ["e", "e", "e", "f", "f", "", "", ""],
    values: [1, 8],
    font: "XWing-Symbol-Regular",
    color: "#00FF00",
    colorset: "xwing_green",
    display: "labels",
    system: "xwing"
  },
  // star wars legion
  // Attack Red
  swlar: {
    name: "Star Wars Legion: Red Attack Dice",
    type: "d8",
    labels: ["h", "h", "h", "h", "h", "c", "o", ""],
    values: [1, 8],
    font: "Legion-Symbol-Regular",
    color: "#FF0000",
    colorset: "swl_atkred",
    display: "labels",
    system: "legion"
  },
  // Attack Black
  swlab: {
    name: "Star Wars Legion: Black Attack Dice",
    type: "d8",
    labels: ["h", "h", "h", "", "", "c", "o", ""],
    values: [1, 8],
    font: "Legion-Symbol-Regular",
    color: "#111111",
    colorset: "swl_atkblack",
    display: "labels",
    system: "legion"
  },
  // Attack White
  swlaw: {
    name: "Star Wars Legion: White Attack Dice",
    type: "d8",
    labels: ["h", "", "", "", "", "c", "o", ""],
    values: [1, 8],
    font: "Legion-Symbol-Regular",
    color: "#FFFFFF",
    colorset: "swl_atkwhite",
    display: "labels",
    system: "legion"
  },
  // Defense Red
  swldr: {
    name: "Star Wars Legion: Red Defense Dice",
    type: "d6",
    labels: ["s", "s", "s", "d", "", ""],
    values: [1, 6],
    scale: 0.9,
    font: "Legion-Symbol-Regular",
    color: "#FF0000",
    colorset: "swl_defred",
    display: "labels",
    system: "legion"
  },
  // Defense White
  swldw: {
    name: "Star Wars Legion: White Defense Dice",
    type: "d6",
    labels: ["s", "", "", "d", "", ""],
    values: [1, 6],
    scale: 0.9,
    font: "Legion-Symbol-Regular",
    color: "#FFFFFF",
    colorset: "swl_defwhite",
    display: "labels",
    system: "legion"
  }
}, J = {
  d4: {
    vertices: [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]],
    faces: [[1, 0, 2, 1], [0, 1, 3, 2], [0, 3, 2, 3], [1, 2, 3, 4]]
  },
  d6: {
    vertices: [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]],
    faces: [[0, 3, 2, 1, 1], [1, 2, 6, 5, 2], [0, 1, 5, 4, 3], [3, 7, 6, 2, 4], [0, 4, 7, 3, 5], [4, 5, 6, 7, 6]]
  },
  d8: {
    vertices: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
    faces: [[0, 2, 4, 1], [0, 4, 3, 2], [0, 3, 5, 3], [0, 5, 2, 4], [1, 3, 4, 5], [1, 4, 2, 6], [1, 2, 5, 7], [1, 5, 3, 8]]
  },
  d10: {
    vertices: [[1, 0, -0.105], [0.809, 0.5877, 0.105], [0.309, 0.951, -0.105], [-0.309, 0.951, 0.105], [-0.809, 0.5877, -0.105], [-1, 0, 0.105], [-0.809, -0.587, -0.105], [-0.309, -0.951, 0.105], [0.309, -0.951, -0.105], [0.809, -0.5877, 0.105], [0, 0, -1], [0, 0, 1]],
    faces: [[5, 6, 7, 11, 0], [4, 3, 2, 10, 1], [1, 2, 3, 11, 2], [0, 9, 8, 10, 3], [7, 8, 9, 11, 4], [8, 7, 6, 10, 5], [9, 0, 1, 11, 6], [2, 1, 0, 10, 7], [3, 4, 5, 11, 8], [6, 5, 4, 10, 9]]
  },
  d12: {
    vertices: [[0, 0.618, 1.618], [0, 0.618, -1.618], [0, -0.618, 1.618], [0, -0.618, -1.618], [1.618, 0, 0.618], [1.618, 0, -0.618], [-1.618, 0, 0.618], [-1.618, 0, -0.618], [0.618, 1.618, 0], [0.618, -1.618, 0], [-0.618, 1.618, 0], [-0.618, -1.618, 0], [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1], [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1]],
    faces: [[2, 14, 4, 12, 0, 1], [15, 9, 11, 19, 3, 2], [16, 10, 17, 7, 6, 3], [6, 7, 19, 11, 18, 4], [6, 18, 2, 0, 16, 5], [18, 11, 9, 14, 2, 6], [1, 17, 10, 8, 13, 7], [1, 13, 5, 15, 3, 8], [13, 8, 12, 4, 5, 9], [5, 4, 14, 9, 15, 10], [0, 12, 8, 10, 16, 11], [3, 19, 7, 17, 1, 12]]
  },
  d20: {
    vertices: [[-1, 1.618, 0], [1, 1.618, 0], [-1, -1.618, 0], [1, -1.618, 0], [0, -1, 1.618], [0, 1, 1.618], [0, -1, -1.618], [0, 1, -1.618], [1.618, 0, -1], [1.618, 0, 1], [-1.618, 0, -1], [-1.618, 0, 1]],
    faces: [[0, 11, 5, 1], [0, 5, 1, 2], [0, 1, 7, 3], [0, 7, 10, 4], [0, 10, 11, 5], [1, 5, 9, 6], [5, 11, 4, 7], [11, 10, 2, 8], [10, 7, 6, 9], [7, 1, 8, 10], [3, 9, 4, 11], [3, 4, 2, 12], [3, 2, 6, 13], [3, 6, 8, 14], [3, 8, 9, 15], [4, 9, 5, 16], [2, 4, 11, 17], [6, 2, 10, 18], [8, 6, 7, 19], [9, 8, 1, 20]]
  }
}, zr = {
  name: "",
  scale: 1,
  font: "Arial",
  color: "",
  labels: [],
  valueMap: [],
  values: [],
  normals: [],
  mass: 300,
  inertia: 13,
  geometry: null,
  display: "values",
  system: "d20"
};
var be, We, Se, Be, Ie, Ae, Ve, Oe, Le, ze, je, Ge, $e, He, we, Ne, xt;
class jr {
  constructor(e) {
    b(this, Ne);
    b(this, be, void 0);
    b(this, We, void 0);
    b(this, Se, []);
    b(this, Be, []);
    b(this, Ie, []);
    b(this, Ae, []);
    b(this, Ve, void 0);
    b(this, Oe, void 0);
    b(this, Le, void 0);
    b(this, ze, void 0);
    b(this, je, void 0);
    b(this, Ge, void 0);
    b(this, $e, void 0);
    b(this, He, void 0);
    b(this, we, void 0);
    if (!Jt[e])
      throw new Error("Dice type unavailable");
    const t = { ...zr, ...Jt[e] };
    w(this, be, t.type || e), w(this, We, e), w(this, Ve, t.font), w(this, Oe, t.color), w(this, Le, t.mass), w(this, ze, t.inertia), w(this, je, t.scale), w(this, Ge, t.geometry), w(this, $e, t.display), w(this, He, t.system), w(this, we, t.bumpMaps), this.setLabels(t.labels), this.setValues(t.values[0], t.values[1], t.values[2]), this.setValueMap(t.valueMap), l(this, we) && this.setBumpMaps(l(this, we));
  }
  // Getters
  get shape() {
    return l(this, be);
  }
  get type() {
    return l(this, We);
  }
  get labels() {
    return l(this, Se);
  }
  get normals() {
    return l(this, Be);
  }
  get valueMap() {
    return l(this, Ie);
  }
  get values() {
    return l(this, Ae);
  }
  get font() {
    return l(this, Ve);
  }
  get color() {
    return l(this, Oe);
  }
  get mass() {
    return l(this, Le);
  }
  get inertia() {
    return l(this, ze);
  }
  get scale() {
    return l(this, je);
  }
  get geometry() {
    return l(this, Ge);
  }
  get display() {
    return l(this, $e);
  }
  get system() {
    return l(this, He);
  }
  get bumpMaps() {
    return l(this, we);
  }
  setValues(e = 1, t = 20, a = 1) {
    w(this, Ae, Array.from(
      { length: Math.floor((t - e) / a) + 1 },
      (i, s) => e + s * a
    ));
  }
  setValueMap(e) {
    w(this, Ie, l(this, Ae).reduce((t, a) => (e[a] != null && (t[a] = e[a]), t), {}));
  }
  registerFaces(e, t = "labels") {
    const a = t === "labels" ? l(this, Se) : l(this, Be);
    if (a.unshift(""), ["d2", "d10"].includes(l(this, be)) || a.unshift(""), l(this, be) === "d4") {
      const [i, s, o, n] = e;
      w(this, Se, [
        [[], [0, 0, 0], [s, n, o], [i, o, n], [s, i, n], [i, s, o]],
        [[], [0, 0, 0], [s, o, n], [o, i, n], [s, n, i], [o, s, i]],
        [[], [0, 0, 0], [n, o, s], [o, n, i], [n, s, i], [o, i, s]],
        [[], [0, 0, 0], [n, s, o], [i, n, o], [n, i, s], [i, o, s]]
      ]);
    } else
      a.push(...e);
  }
  setLabels(e) {
    N(this, Ne, xt).call(this, e, this.registerFaces.bind(this), "labels");
  }
  setBumpMaps(e) {
    N(this, Ne, xt).call(this, e, this.registerFaces.bind(this), "bump");
  }
}
be = new WeakMap(), We = new WeakMap(), Se = new WeakMap(), Be = new WeakMap(), Ie = new WeakMap(), Ae = new WeakMap(), Ve = new WeakMap(), Oe = new WeakMap(), Le = new WeakMap(), ze = new WeakMap(), je = new WeakMap(), Ge = new WeakMap(), $e = new WeakMap(), He = new WeakMap(), we = new WeakMap(), Ne = new WeakSet(), xt = async function(e, t, a) {
  const i = /\.(png|jpe?g|gif|webp)$/i;
  if (!e.some(
    (o) => o && i.test(o)
  )) {
    t(e, a);
    return;
  }
  try {
    const o = await Promise.all(
      e.map(async (n, c) => {
        if (!n || !i.test(n))
          return n;
        const h = new Image();
        return await new Promise((d, p) => {
          h.onload = d, h.onerror = p, h.src = n;
        }), h;
      })
    );
    t(o, a);
  } catch (o) {
    throw console.error("Error loading textures:", o), o;
  }
};
const Gr = {
  none: {
    name: "Plastic"
  },
  perfectmetal: {
    name: "Perfect Metal",
    color: 14540253,
    roughness: 0,
    metalness: 1,
    envMapIntensity: 1
  },
  metal: {
    name: "Metal",
    color: 14540253,
    roughness: 0.5,
    metalness: 0.6,
    envMapIntensity: 1
  },
  wood: {
    name: "Wood",
    color: 14540253,
    roughness: 0.9,
    metalness: 0,
    envMapIntensity: 1
  },
  glass: {
    name: "Glass",
    color: 14540253,
    roughness: 0.1,
    metalness: 0,
    envMapIntensity: 1
  }
};
async function Zt() {
  if (Ir.OS === "web") {
    const A = document.createElement("canvas"), e = A.getContext("2d", { alpha: !0 });
    return { canvas: A, context: e };
  } else {
    const { Canvas: A } = ReactNativeCanvas, e = new A(), t = e.getContext("2d");
    return { canvas: e, context: t };
  }
}
const $r = {
  baseScale: 100,
  bumpMapping: !0
}, Hr = {
  specular: 16777215,
  color: 11908533,
  shininess: 5,
  flatShading: !0
};
var ve, Ce, _e, U, ee, te, H, Z, re, it, ar, nt, sr, ot, ir;
const fe = class fe {
  constructor(e = {}) {
    b(this, it);
    b(this, nt);
    b(this, ot);
    b(this, Ce, /* @__PURE__ */ new Map());
    b(this, _e, /* @__PURE__ */ new Map());
    b(this, U, "");
    b(this, ee, "");
    b(this, te, "");
    b(this, H, "");
    b(this, Z, "");
    b(this, re, "");
    Object.assign(this, $r, e);
  }
  updateConfig(e = {}) {
    Object.assign(this, e), e.scale && N(this, nt, sr).call(this);
  }
  setBumpMapping(e) {
    this.bumpMapping = e, l(this, _e).clear();
  }
  async create(e) {
    const t = this.get(e);
    if (!t)
      return null;
    let a = l(this, Ce).get(e);
    if (a || (a = this.createGeometry(t.shape, t.scale * this.baseScale), l(this, Ce).set(e, a)), !a)
      return null;
    this.setMaterialInfo();
    const i = new S.Mesh(
      a,
      await this.createMaterials(t, this.baseScale / 2, 1)
    );
    if (Object.assign(i, {
      result: [],
      shape: t.shape,
      rerolls: 0,
      resultReason: "natural",
      mass: t.mass
    }), N(this, it, ar).call(this, i), t.color) {
      const s = i.material[0];
      s.color = new S.Color(t.color), s.emissive = new S.Color(t.color), s.emissiveIntensity = 1, s.needsUpdate = !0;
    }
    return N(this, ot, ir).call(this, i, t.values.length);
  }
  get(e) {
    return l(fe, ve).has(e) || l(fe, ve).set(e, new jr(e)), l(fe, ve).get(e);
  }
  getGeometry(e) {
    return l(this, Ce).get(e);
  }
  async createMaterials(e, t, a, i = !0, s = 0) {
    let o = [], n = e.labels;
    e.shape == "d4" && (n = e.labels[s], t = this.baseScale / 2, a = this.baseScale * 2);
    for (var c = 0; c < n.length; ++c) {
      var h;
      this.dice_material != "none" ? (h = new S.MeshStandardMaterial(Gr[this.dice_material]), h.envMapIntensity = 0) : h = new S.MeshPhongMaterial(Hr);
      let d;
      if (c == 0) {
        let p = { name: "none" };
        this.dice_texture_rand.composite != "source-over" && (p = this.dice_texture_rand), d = await this.createTextMaterial(
          e,
          n,
          c,
          t,
          a,
          p,
          this.label_color_rand,
          this.label_outline_rand,
          this.edge_color_rand,
          i
        ), h.map = d.composite;
      } else if (d = await this.createTextMaterial(
        e,
        n,
        c,
        t,
        a,
        this.dice_texture_rand,
        this.label_color_rand,
        this.label_outline_rand,
        this.dice_color_rand,
        i
      ), h.map = d.composite, this.bumpMapping) {
        let p = 0.75;
        t > 35 && (p = 1), t > 40 && (p = 2.5), t > 45 && (p = 4), h.bumpScale = p, d.bump && (h.bumpMap = d.bump), e.shape != "d4" && e.normals[c] && (h.bumpMap = new S.Texture(e.normals[c]), h.bumpScale = 4, h.bumpMap.needsUpdate = !0);
      }
      h.opacity = 1, h.transparent = !0, h.depthTest = !1, h.needUpdate = !0, o.push(h);
    }
    return o;
  }
  async createTextMaterial(e, t, a, i, s, o, n, c, h, d) {
    if (t[a] === void 0)
      return null;
    o = o || this.dice_texture_rand, n = n || this.label_color_rand, c = c || this.label_outline_rand, h = h || this.dice_color_rand, d = d ?? !0;
    let p = t[a], _ = !1, C = p;
    p instanceof HTMLImageElement ? C = p.src : p instanceof Array && p.forEach((I) => {
      C += I.src;
    });
    let x = e.type + C + a + o.name + n + c + h;
    if (e.shape == "d4" && (x = e.type + C + o.name + n + c + h), d && l(this, _e).get(x) != null)
      return l(this, _e).get(x);
    const { canvas: y, context: f } = await Zt();
    f.globalAlpha = 0, f.clearRect(0, 0, y.width, y.height);
    const { canvas: D, context: g } = await Zt();
    g.globalAlpha = 0, g.clearRect(0, 0, D.width, D.height);
    let v;
    if (e.shape == "d4" ? v = this.calc_texture_size(i + s) * 4 : v = this.calc_texture_size(i + i * 2 * s) * 4, y.width = y.height = v, D.width = D.height = v, f.fillStyle = h, f.fillRect(0, 0, y.width, y.height), g.fillStyle = "#FFFFFF", g.fillRect(0, 0, D.width, D.height), o.texture && o.name != "" && o.name != "none" ? (f.globalCompositeOperation = o.composite || "source-over", f.drawImage(o.texture, 0, 0, y.width, y.height), f.globalCompositeOperation = "source-over", o.bump && (g.globalCompositeOperation = "source-over", g.drawImage(o.bump, 0, 0, y.width, y.height))) : f.globalCompositeOperation = "source-over", f.globalCompositeOperation = "source-over", f.textAlign = "center", f.textBaseline = "middle", g.textAlign = "center", g.textBaseline = "middle", e.shape != "d4") {
      let ie = {
        d8: { even: -7.5, odd: -127.5 },
        d10: { all: -6 },
        d12: { all: 5 },
        d20: { all: -7.5 }
      }[e.shape];
      if (ie) {
        let T;
        if (ie.hasOwnProperty("all") ? T = ie.all : a > 0 && a % 2 != 0 ? T = ie.odd : T = ie.even, T && T != 0) {
          var k = y.width / 2, W = y.height / 2;
          f.translate(k, W), f.rotate(T * (Math.PI / 180)), f.translate(-k, -W), g.translate(k, W), g.rotate(T * (Math.PI / 180)), g.translate(-k, -W);
        }
      }
      if (p instanceof HTMLImageElement)
        _ = !0, f.drawImage(
          p,
          0,
          0,
          p.width,
          p.height,
          0,
          0,
          y.width,
          y.height
        );
      else {
        let T = v / (1 + 2 * s), L = y.height / 2 + 10, Y = y.width / 2;
        e.shape == "d10" ? (T = T * 0.75, L = L * 1.15 - 10) : e.shape == "d20" && (Y = Y * 0.98), f.font = T + "pt " + e.font, g.font = T + "pt " + e.font;
        let q = f.measureText("M").width * 1.4, G = p.split(`
`);
        G.length > 1 && (T = T / G.length, f.font = T + "pt " + e.font, g.font = T + "pt " + e.font, q = f.measureText("M").width * 1.2, L -= q * G.length / 2);
        for (let X = 0, Ke = G.length; X < Ke; X++) {
          let de = G[X].trim();
          c != "none" && c != h && (f.strokeStyle = c, f.lineWidth = 5, f.strokeText(G[X], Y, L), g.strokeStyle = "#000000", g.lineWidth = 5, g.strokeText(G[X], Y, L), (de == "6" || de == "9") && (f.strokeText("  .", Y, L), g.strokeText("  .", Y, L))), f.fillStyle = n, f.fillText(G[X], Y, L), g.fillStyle = "#000000", g.fillText(G[X], Y, L), (de == "6" || de == "9") && (f.fillText("  .", Y, L), g.fillText("  .", Y, L)), L += q * 1.5;
        }
      }
    } else {
      var k = y.width / 2, W = y.height / 2;
      f.font = v / 128 * 24 + "pt " + e.font, g.font = v / 128 * 24 + "pt " + e.font;
      for (let T = 0; T < p.length; T++) {
        if (p[T] instanceof HTMLImageElement) {
          let L = p[T].width / y.width;
          f.drawImage(
            p[T],
            0,
            0,
            p[T].width,
            p[T].height,
            100 / L,
            25 / L,
            60 / L,
            60 / L
          );
        } else
          c != "none" && c != h && (f.strokeStyle = c, f.lineWidth = 5, f.strokeText(p[T], k, W - v * 0.3), g.strokeStyle = "#000000", g.lineWidth = 5, g.strokeText(p[T], k, W - v * 0.3)), f.fillStyle = n, f.fillText(p[T], k, W - v * 0.3), g.fillStyle = "#000000", g.fillText(p[T], k, W - v * 0.3);
        f.translate(k, W), f.rotate(Math.PI * 2 / 3), f.translate(-k, -W), g.translate(k, W), g.rotate(Math.PI * 2 / 3), g.translate(-k, -W);
      }
    }
    var z = new S.CanvasTexture(y), se;
    return _ ? se = null : se = new S.CanvasTexture(D), d && l(this, _e).set(x, {
      composite: z,
      bump: se
    }), { composite: z, bump: se };
  }
  applyColorSet(e) {
    var t;
    this.colordata = e, w(this, U, e.foreground), w(this, ee, e.background), w(this, H, e.outline), w(this, Z, e.texture), w(this, re, ((t = e == null ? void 0 : e.texture) == null ? void 0 : t.material) || "none"), w(this, te, e.hasOwnProperty("edge") ? e.edge : e.background);
  }
  setRandomColors() {
    if (Array.isArray(l(this, ee))) {
      var e = Math.floor(Math.random() * l(this, ee).length);
      Array.isArray(l(this, U)) && l(this, U).length == l(this, ee).length && (this.label_color_rand = l(this, U)[e], Array.isArray(l(this, H)) && l(this, H).length == l(this, U).length && (this.label_outline_rand = l(this, H)[e])), Array.isArray(l(this, Z)) && l(this, Z).length == l(this, ee).length && (this.dice_texture_rand = l(this, Z)[e], this.dice_material_rand = this.dice_texture_rand.material), Array.isArray(l(this, te)) && l(this, te).length == l(this, ee).length && (this.edge_color_rand = l(this, te)[e]), this.dice_color_rand = l(this, ee)[e];
    } else
      this.dice_color_rand = l(this, ee);
    if (this.edge_color_rand == "")
      if (Array.isArray(l(this, te))) {
        var e = Math.floor(Math.random() * l(this, te).length);
        this.edge_color_rand = l(this, te)[e];
      } else
        this.edge_color_rand = l(this, te);
    if (this.label_color_rand == "" && Array.isArray(l(this, U))) {
      var e = l(this, U)[Math.floor(Math.random() * l(this, U).length)];
      Array.isArray(l(this, H)) && l(this, H).length == l(this, U).length && (this.label_outline_rand = l(this, H)[e]), this.label_color_rand = l(this, U)[e];
    } else
      this.label_color_rand == "" && (this.label_color_rand = l(this, U));
    if (this.label_outline_rand == "" && Array.isArray(l(this, H))) {
      var e = l(this, H)[Math.floor(Math.random() * l(this, H).length)];
      this.label_outline_rand = l(this, H)[e];
    } else
      this.label_outline_rand == "" && (this.label_outline_rand = l(this, H));
    this.dice_texture_rand == "" && Array.isArray(l(this, Z)) ? (this.dice_texture_rand = l(this, Z)[Math.floor(Math.random() * l(this, Z).length)], this.dice_material_rand = this.dice_texture_rand.material || l(this, re)) : this.dice_texture_rand == "" && (this.dice_texture_rand = l(this, Z), this.dice_material_rand = this.dice_texture_rand.material || l(this, re)), this.dice_material_rand == "" && Array.isArray(l(this, re)) ? this.dice_material_rand = l(this, re)[Math.floor(Math.random() * l(this, re).length)] : this.dice_material_rand == "" && (this.dice_material_rand = l(this, re));
  }
  setMaterialInfo(e = "") {
    let t = this.colordata, a = l(this, Z), i = l(this, re);
    this.dice_color_rand = "", this.label_color_rand = "", this.label_outline_rand = "", this.dice_texture_rand = "", this.dice_material_rand = "", this.edge_color_rand = "", this.setRandomColors(), this.colordata && this.colordata.id != t.id && this.applyColorSet(t, a, i);
  }
  calc_texture_size(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.log(2)));
  }
  createGeometry(e, t, a = !1) {
    const i = a ? "create_shape" : "create_geom";
    switch (e) {
      case "d2":
        var s = new S.CylinderGeometry(
          1 * t,
          1 * t,
          0.1 * t,
          32
        );
        return s.cannon_shape = new R.Cylinder(
          1 * t,
          1 * t,
          0.1 * t,
          8
        ), s;
      case "d4":
        return this[i](
          J.d4.vertices,
          J.d4.faces,
          t,
          -0.1,
          Math.PI * 7 / 6,
          0.96
        );
      case "d6":
        return this[i](
          J.d6.vertices,
          J.d6.faces,
          t,
          0.1,
          Math.PI / 4,
          0.96
        );
      case "d8":
        return this[i](
          J.d8.vertices,
          J.d8.faces,
          t,
          0,
          -Math.PI / 4 / 2,
          0.965
        );
      case "d10":
        return this[i](
          J.d10.vertices,
          J.d10.faces,
          t,
          0.3,
          Math.PI,
          0.945
        );
      case "d12":
        return this[i](
          J.d12.vertices,
          J.d12.faces,
          t,
          0.2,
          -Math.PI / 4 / 2,
          0.968
        );
      case "d20":
        return this[i](
          J.d20.vertices,
          J.d20.faces,
          t,
          -0.2,
          -Math.PI / 4 / 2,
          0.955
        );
      default:
        return console.error(`Geometry for ${e} is not available`), null;
    }
  }
  create_shape(e, t, a) {
    for (var i = new Array(e.length), s = 0; s < e.length; ++s)
      i[s] = new S.Vector3().fromArray(e[s]).normalize();
    for (var o = new Array(e.length), n = new Array(t.length), s = 0; s < i.length; ++s) {
      var c = i[s];
      o[s] = new R.Vec3(c.x * a, c.y * a, c.z * a);
    }
    for (var s = 0; s < t.length; ++s)
      n[s] = t[s].slice(0, t[s].length - 1);
    return new R.ConvexPolyhedron({ vertices: o, faces: n });
  }
  make_geom(e, t, a, i, s) {
    let o = new S.BufferGeometry();
    for (let x = 0; x < e.length; ++x)
      e[x] = e[x].multiplyScalar(a);
    let n = [];
    const c = [], h = [], d = new S.Vector3(), p = new S.Vector3();
    let _, C = 0;
    for (let x = 0; x < t.length; ++x) {
      let y = t[x], f = y.length - 1, D = Math.PI * 2 / f;
      _ = y[f] + 1;
      for (let v = 0; v < f - 2; ++v)
        n.push(...e[y[0]].toArray()), n.push(...e[y[v + 1]].toArray()), n.push(...e[y[v + 2]].toArray()), d.subVectors(e[y[v + 2]], e[y[v + 1]]), p.subVectors(e[y[0]], e[y[v + 1]]), d.cross(p), d.normalize(), c.push(...d.toArray()), c.push(...d.toArray()), c.push(...d.toArray()), h.push(
          (Math.cos(s) + 1 + i) / 2 / (1 + i),
          (Math.sin(s) + 1 + i) / 2 / (1 + i)
        ), h.push(
          (Math.cos(D * (v + 1) + s) + 1 + i) / 2 / (1 + i),
          (Math.sin(D * (v + 1) + s) + 1 + i) / 2 / (1 + i)
        ), h.push(
          (Math.cos(D * (v + 2) + s) + 1 + i) / 2 / (1 + i),
          (Math.sin(D * (v + 2) + s) + 1 + i) / 2 / (1 + i)
        );
      let g = (f - 2) * 3;
      for (let v = 0; v < g / 3; v++)
        o.addGroup(C, 3, _), C += 3;
    }
    return o.setAttribute(
      "position",
      new S.Float32BufferAttribute(n, 3)
    ), o.setAttribute("normal", new S.Float32BufferAttribute(c, 3)), o.setAttribute("uv", new S.Float32BufferAttribute(h, 2)), o.boundingSphere = new S.Sphere(new S.Vector3(), a), o;
  }
  make_d10_geom(e, t, a, i, s) {
    let o = new S.BufferGeometry();
    for (let v = 0; v < e.length; ++v)
      e[v] = e[v].multiplyScalar(a);
    let n = [];
    const c = [], h = [], d = new S.Vector3(), p = new S.Vector3();
    let _, C = 0;
    for (let v = 0; v < t.length; ++v) {
      let k = t[v], W = k.length - 1, z = Math.PI * 2 / W;
      _ = k[W] + 1;
      var x = 0.65, y = 0.85, f = 1 - 1 * y, D = 1 - 0.895 / 1.105 * y, g = 1;
      for (let I = 0; I < W - 2; ++I)
        n.push(...e[k[0]].toArray()), n.push(...e[k[I + 1]].toArray()), n.push(...e[k[I + 2]].toArray()), d.subVectors(e[k[I + 2]], e[k[I + 1]]), p.subVectors(e[k[0]], e[k[I + 1]]), d.cross(p), d.normalize(), c.push(...d.toArray()), c.push(...d.toArray()), c.push(...d.toArray()), t[v][t[v].length - 1] == -1 || I >= 2 ? (h.push(
          (Math.cos(s) + 1 + i) / 2 / (1 + i),
          (Math.sin(s) + 1 + i) / 2 / (1 + i)
        ), h.push(
          (Math.cos(z * (I + 1) + s) + 1 + i) / 2 / (1 + i),
          (Math.sin(z * (I + 1) + s) + 1 + i) / 2 / (1 + i)
        ), h.push(
          (Math.cos(z * (I + 2) + s) + 1 + i) / 2 / (1 + i),
          (Math.sin(z * (I + 2) + s) + 1 + i) / 2 / (1 + i)
        )) : I == 0 ? (h.push(0.5 - x / 2, D), h.push(0.5, f), h.push(0.5 + x / 2, D)) : I == 1 && (h.push(0.5 - x / 2, D), h.push(0.5 + x / 2, D), h.push(0.5, g));
      let se = (W - 2) * 3;
      for (let I = 0; I < se / 3; I++)
        o.addGroup(C, 3, _), C += 3;
    }
    return o.setAttribute(
      "position",
      new S.Float32BufferAttribute(n, 3)
    ), o.setAttribute("normal", new S.Float32BufferAttribute(c, 3)), o.setAttribute("uv", new S.Float32BufferAttribute(h, 2)), o.boundingSphere = new S.Sphere(new S.Vector3(), a), o;
  }
  chamfer_geom(e, t, a) {
    for (var i = [], s = [], o = new Array(e.length), n = 0; n < e.length; ++n)
      o[n] = [];
    for (var n = 0; n < t.length; ++n) {
      for (var c = t[n], h = c.length - 1, d = new S.Vector3(), p = new Array(h), _ = 0; _ < h; ++_) {
        var C = e[c[_]].clone();
        d.add(C), o[c[_]].push(p[_] = i.push(C) - 1);
      }
      d.divideScalar(h);
      for (var _ = 0; _ < h; ++_) {
        var C = i[p[_]];
        C.subVectors(C, d).multiplyScalar(a).addVectors(C, d);
      }
      p.push(c[h]), s.push(p);
    }
    for (var n = 0; n < t.length - 1; ++n)
      for (var _ = n + 1; _ < t.length; ++_) {
        for (var x = [], y = -1, f = 0; f < t[n].length - 1; ++f) {
          var D = t[_].indexOf(t[n][f]);
          D >= 0 && D < t[_].length - 1 && (y >= 0 && f != y + 1 ? x.unshift([n, f], [_, D]) : x.push([n, f], [_, D]), y = f);
        }
        x.length == 4 && s.push([
          s[x[0][0]][x[0][1]],
          s[x[1][0]][x[1][1]],
          s[x[3][0]][x[3][1]],
          s[x[2][0]][x[2][1]],
          -1
        ]);
      }
    for (var n = 0; n < o.length; ++n) {
      for (var g = o[n], p = [g[0]], v = g.length - 1; v; ) {
        for (var f = t.length; f < s.length; ++f) {
          var k = s[f].indexOf(p[p.length - 1]);
          if (k >= 0 && k < 4) {
            --k == -1 && (k = 3);
            var W = s[f][k];
            if (g.indexOf(W) >= 0) {
              p.push(W);
              break;
            }
          }
        }
        --v;
      }
      p.push(-1), s.push(p);
    }
    return { vectors: i, faces: s };
  }
  create_geom(e, t, a, i, s, o) {
    for (var n = new Array(e.length), c = 0; c < e.length; ++c)
      n[c] = new S.Vector3().fromArray(e[c]).normalize();
    var h = this.chamfer_geom(n, t, o);
    if (t.length != 10)
      var d = this.make_geom(h.vectors, h.faces, a, i, s);
    else
      var d = this.make_d10_geom(h.vectors, h.faces, a, i, s);
    return d.cannon_shape = this.create_shape(e, t, a), d.name = "d" + t.length, d;
  }
};
ve = new WeakMap(), Ce = new WeakMap(), _e = new WeakMap(), U = new WeakMap(), ee = new WeakMap(), te = new WeakMap(), H = new WeakMap(), Z = new WeakMap(), re = new WeakMap(), it = new WeakSet(), ar = function(e) {
  e.getFaceValue = function() {
    const t = this.resultReason, a = new S.Vector3(0, 0, this.shape === "d4" ? -1 : 1);
    let i, s = Math.PI * 2;
    const o = this.geometry.getAttribute("normal").array;
    for (let C = 0; C < this.geometry.groups.length; ++C) {
      const x = this.geometry.groups[C];
      if (x.materialIndex === 0)
        continue;
      const y = C * 9, D = new S.Vector3(
        o[y],
        o[y + 1],
        o[y + 2]
      ).clone().applyQuaternion(this.body.quaternion).angleTo(a);
      D < s && (s = D, i = x);
    }
    const n = i.materialIndex - 1, c = l(fe, ve).get(this.notation.type);
    if (this.shape === "d4") {
      const C = n - 1 === 0 ? 5 : n;
      return {
        value: n,
        label: c.labels[n - 1][C][0],
        reason: t
      };
    }
    const h = ["d10", "d2"].includes(this.shape) ? 1 : 2, d = ["d10", "d2"].includes(this.shape) ? n + 1 : n, p = c.values[(d - 1) % c.values.length], _ = c.labels[(d - 1) % (c.labels.length - 2) + h];
    return { value: p, label: _, reason: t };
  }, e.storeRolledValue = function(t) {
    this.resultReason = t || this.resultReason, this.result.push(this.getFaceValue());
  }, e.getLastValue = function() {
    var t;
    return ((t = this.result) == null ? void 0 : t.at(-1)) ?? { value: void 0, label: "", reason: "" };
  }, e.ignoreLastValue = function(t) {
    const a = this.getLastValue();
    a.value !== void 0 && (a.ignore = t, this.setLastValue(a));
  }, e.setLastValue = function(t) {
    var a;
    if (!(!((a = this.result) != null && a.length) || !(t != null && t.length)))
      return this.result[this.result.length - 1] = t;
  };
}, nt = new WeakSet(), sr = function() {
}, ot = new WeakSet(), ir = function(e, t) {
  if (t <= 3) {
    const a = [...e.material], i = a.length - t;
    for (let s = 0; s < i; s++)
      a[s] = a[i];
    e.material = a;
  }
  return e;
}, b(fe, ve, /* @__PURE__ */ new Map());
let Ft = fe;
const Qt = {
  cloudy: {
    name: "Clouds (Transparent)",
    composite: "destination-in",
    source: "textures/cloudy.webp",
    source_bump: "textures/cloudy.alt.webp"
  },
  cloudy_2: {
    name: "Clouds",
    composite: "multiply",
    source: "textures/cloudy.alt.webp",
    source_bump: "textures/cloudy.alt.webp"
  },
  fire: {
    name: "Fire",
    composite: "multiply",
    source: "textures/fire.webp",
    source_bump: "textures/fire.webp",
    material: "metal"
  },
  marble: {
    name: "Marble",
    composite: "multiply",
    source: "textures/marble.webp",
    source_bump: "",
    material: "glass"
  },
  water: {
    name: "Water",
    composite: "destination-in",
    source: "textures/water.webp",
    source_bump: "textures/water.webp",
    material: "glass"
  },
  ice: {
    name: "Ice",
    composite: "destination-in",
    source: "textures/ice.webp",
    source_bump: "textures/ice.webp",
    material: "glass"
  },
  paper: {
    name: "Paper",
    composite: "multiply",
    source: "textures/paper.webp",
    source_bump: "textures/paper-bump.webp",
    material: "wood"
  },
  speckles: {
    name: "Speckles",
    composite: "multiply",
    source: "textures/speckles.webp",
    source_bump: "textures/speckles.webp",
    material: "none"
  },
  glitter: {
    name: "Glitter",
    composite: "multiply",
    source: "textures/glitter.webp",
    source_bump: "textures/glitter-bump.webp",
    material: "none"
  },
  glitter_2: {
    name: "Glitter (Transparent)",
    composite: "destination-in",
    source: "textures/glitter-alpha.webp",
    source_bump: "",
    material: "none"
  },
  stars: {
    name: "Stars",
    composite: "multiply",
    source: "textures/stars.webp",
    source_bump: "textures/stars.webp",
    material: "none"
  },
  stainedglass: {
    name: "Stained Glass",
    composite: "multiply",
    source: "textures/stainedglass.webp",
    source_bump: "textures/stainedglass-bump.webp",
    material: "glass"
  },
  wood: {
    name: "Wood",
    composite: "multiply",
    source: "textures/wood.webp",
    source_bump: "textures/wood.webp",
    material: "wood"
  },
  metal: {
    name: "Stainless Steel",
    composite: "multiply",
    source: "textures/metal.webp",
    source_bump: "textures/metal-bump.webp",
    material: "metal"
  },
  skulls: {
    name: "Skulls",
    composite: "multiply",
    source: "textures/skulls.webp",
    source_bump: "textures/skulls.webp"
  },
  leopard: {
    name: "Leopard",
    composite: "multiply",
    source: "textures/leopard.webp",
    source_bump: "textures/leopard.webp",
    material: "wood"
  },
  tiger: {
    name: "Tiger",
    composite: "multiply",
    source: "textures/tiger.webp",
    source_bump: "textures/tiger.webp",
    material: "wood"
  },
  cheetah: {
    name: "Cheetah",
    composite: "multiply",
    source: "textures/cheetah.webp",
    source_bump: "textures/cheetah.webp",
    material: "wood"
  },
  dragon: {
    name: "Dragon",
    composite: "multiply",
    source: "textures/dragon.webp",
    source_bump: "textures/dragon-bump.webp",
    material: "none"
  },
  lizard: {
    name: "Lizard",
    composite: "multiply",
    source: "textures/lizard.webp",
    source_bump: "textures/lizard.webp",
    material: "none"
  },
  bird: {
    name: "Bird",
    composite: "multiply",
    source: "textures/feather.webp",
    source_bump: "textures/feather-bump.webp",
    material: "wood"
  },
  astral: {
    name: "Astral Sea",
    composite: "multiply",
    source: "textures/astral.webp",
    source_bump: "textures/stars.webp",
    material: "none"
  },
  acleaf: {
    name: "AC Leaf",
    composite: "multiply",
    source: "textures/acleaf.webp",
    source_bump: "textures/acleaf.webp",
    material: "none"
  },
  thecage: {
    name: "Nicholas Cage",
    composite: "multiply",
    source: "textures/thecage.webp",
    source_bump: "",
    material: "metal"
  },
  isabelle: {
    name: "Isabelle",
    composite: "source-over",
    source: "textures/isabelle.webp",
    source_bump: "",
    material: "none"
  },
  bronze01: {
    name: "bronze01",
    composite: "difference",
    source: "textures/bronze01.webp",
    source_bump: "",
    material: "metal"
  },
  bronze02: {
    name: "bronze02",
    composite: "difference",
    source: "textures/bronze02.webp",
    source_bump: "",
    material: "metal"
  },
  bronze03: {
    name: "bronze03",
    composite: "difference",
    source: "textures/bronze03.webp",
    source_bump: "",
    material: "metal"
  },
  bronze03a: {
    name: "bronze03a",
    composite: "difference",
    source: "textures/bronze03a.webp",
    source_bump: "",
    material: "metal"
  },
  bronze03b: {
    name: "bronze03b",
    composite: "difference",
    source: "textures/bronze03b.webp",
    source_bump: "",
    material: "metal"
  },
  bronze04: {
    name: "bronze04",
    composite: "difference",
    source: "textures/bronze04.webp",
    source_bump: "",
    material: "metal"
  },
  none: {
    name: "none",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: ""
  },
  "": {
    name: "~ Preset ~",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: ""
  }
}, er = {
  coin_default: {
    name: "Gold Coin",
    description: "Gold Dragonhead Coin",
    category: "Other",
    foreground: "#f6c928",
    background: "#f6c928",
    outline: "none",
    texture: "metal"
  },
  coin_silver: {
    name: "Silver Coin",
    description: "Gold Dragonhead Coin",
    category: "Other",
    foreground: "#f6c928",
    background: "#f6c928",
    outline: "none",
    texture: "metal"
  },
  radiant: {
    name: "Radiant",
    category: "Damage Types",
    foreground: "#F9B333",
    background: "#FFFFFF",
    outline: "",
    texture: "paper",
    description: "Radiant"
  },
  fire: {
    name: "Fire",
    category: "Damage Types",
    foreground: "#f8d84f",
    background: ["#f8d84f", "#f9b02d", "#f43c04", "#910200", "#4c1009"],
    outline: "black",
    texture: "fire",
    description: "Fire"
  },
  ice: {
    name: "Ice",
    category: "Damage Types",
    foreground: "#60E9FF",
    background: ["#214fa3", "#3c6ac1", "#253f70", "#0b56e2", "#09317a"],
    outline: "black",
    texture: "ice",
    description: "Ice"
  },
  poison: {
    name: "Poison",
    category: "Damage Types",
    foreground: "#D6A8FF",
    background: ["#313866", "#504099", "#66409e", "#934fc3", "#c949fc"],
    outline: "black",
    texture: "cloudy",
    description: "Poison"
  },
  acid: {
    name: "Acid",
    category: "Damage Types",
    foreground: "#A9FF70",
    background: ["#a6ff00", "#83b625", "#5ace04", "#69f006", "#b0f006", "#93bc25"],
    outline: "black",
    texture: "marble",
    description: "Acid"
  },
  thunder: {
    name: "Thunder",
    category: "Damage Types",
    foreground: "#FFC500",
    background: "#7D7D7D",
    outline: "black",
    texture: "cloudy",
    description: "Thunder"
  },
  lightning: {
    name: "Lightning",
    category: "Damage Types",
    foreground: "#FFC500",
    background: ["#f17105", "#f3ca40", "#eddea4", "#df9a57", "#dea54b"],
    outline: "#7D7D7D",
    texture: "ice",
    description: "Lightning"
  },
  air: {
    name: "Air",
    category: "Damage Types",
    foreground: "#ffffff",
    background: ["#d0e5ea", "#c3dee5", "#a4ccd6", "#8dafb7", "#80a4ad"],
    outline: "black",
    texture: "cloudy",
    description: "Air"
  },
  water: {
    name: "Water",
    category: "Damage Types",
    foreground: "#60E9FF",
    background: ["#87b8c4", "#77a6b2", "#6b98a3", "#5b8691", "#4b757f"],
    outline: "black",
    texture: "water",
    description: "Water"
  },
  earth: {
    name: "Earth",
    category: "Damage Types",
    foreground: "#6C9943",
    background: ["#346804", "#184200", "#527f22", "#3a1d04", "#56341a", "#331c17", "#5a352a", "#302210"],
    outline: "black",
    texture: "speckles",
    description: "Earth"
  },
  force: {
    name: "Force",
    category: "Damage Types",
    foreground: "white",
    background: ["#FF97FF", "#FF68FF", "#C651C6"],
    outline: "#570000",
    texture: "stars",
    description: "Force"
  },
  psychic: {
    name: "Psychic",
    category: "Damage Types",
    foreground: "#D6A8FF",
    background: ["#313866", "#504099", "#66409E", "#934FC3", "#C949FC", "#313866"],
    outline: "black",
    texture: "speckles",
    description: "Psychic"
  },
  necrotic: {
    name: "Necrotic",
    category: "Damage Types",
    foreground: "#ffffff",
    background: "#6F0000",
    outline: "black",
    texture: "skulls",
    description: "Necrotic"
  },
  breebaby: {
    name: "Pastel Sunset",
    category: "Custom Sets",
    foreground: ["#5E175E", "#564A5E", "#45455E", "#3D5A5E", "#1E595E", "#5E3F3D", "#5E1E29", "#283C5E", "#25295E"],
    background: ["#FE89CF", "#DFD4F2", "#C2C2E8", "#CCE7FA", "#A1D9FC", "#F3C3C2", "#EB8993", "#8EA1D2", "#7477AD"],
    outline: "white",
    texture: "marble",
    description: "Pastel Sunset, for Breyanna"
  },
  pinkdreams: {
    name: "Pink Dreams",
    category: "Custom Sets",
    foreground: "white",
    background: ["#ff007c", "#df73ff", "#f400a1", "#df00ff", "#ff33cc"],
    outline: "#570000",
    texture: "skulls",
    description: "Pink Dreams, for Ethan"
  },
  inspired: {
    name: "Inspired",
    category: "Custom Sets",
    foreground: "#FFD800",
    background: "#C4C4B6",
    outline: "#8E8E86",
    texture: "none",
    description: "Inspired, for Austin"
  },
  bloodmoon: {
    name: "Blood Moon",
    category: "Custom Sets",
    foreground: "#CDB800",
    background: "#6F0000",
    outline: "black",
    texture: "marble",
    description: "Blood Moon, for Jared"
  },
  starynight: {
    name: "Stary Night",
    category: "Custom Sets",
    foreground: "#4F708F",
    background: ["#091636", "#233660", "#4F708F", "#8597AD", "#E2E2E2"],
    outline: "white",
    texture: "speckles",
    description: "Stary Night, for Mai"
  },
  glitterparty: {
    name: "Glitter Party",
    category: "Custom Sets",
    foreground: "white",
    background: ["#FFB5F5", "#7FC9FF", "#A17FFF"],
    outline: "none",
    texture: "glitter",
    description: "Glitter Party, for Austin"
  },
  astralsea: {
    name: "Astral Sea",
    category: "Custom Sets",
    foreground: "#565656",
    background: "white",
    outline: "none",
    texture: "astral",
    description: "The Astral Sea, for Austin"
  },
  bronze: {
    name: "Thylean Bronze",
    description: "Thylean Bronze by @SpencerThayer",
    category: "Custom Sets",
    foreground: ["#FF9159", "#FFB066", "#FFBF59", "#FFD059"],
    background: ["#705206", "#7A4E06", "#643100", "#7A2D06"],
    outline: ["#3D2D03", "#472D04", "#301700", "#471A04"],
    edge: ["#FF5D0D", "#FF7B00", "#FFA20D", "#FFBA0D"],
    texture: ["bronze01", "bronze02", "bronze03", "bronze03a", "bronze03b", "bronze04"]
  },
  dragons: {
    name: "Here be Dragons",
    category: "Custom Sets",
    foreground: "#FFFFFF",
    // 			[ red,       black,     blue,      green      white      gold,      silver,    bronze,    copper     brass
    background: ["#B80000", "#4D5A5A", "#5BB8FF", "#7E934E", "#FFFFFF", "#F6ED7C", "#7797A3", "#A78437", "#862C1A", "#FFDF8A"],
    outline: "black",
    texture: ["dragon", "lizard"],
    description: "Here be Dragons"
  },
  birdup: {
    name: "Bird Up",
    category: "Custom Sets",
    foreground: "#FFFFFF",
    background: ["#F11602", "#FFC000", "#6EC832", "#0094BC", "#05608D", "#FEABB3", "#F75680", "#F3F0DF", "#C7A57F"],
    outline: "black",
    texture: "bird",
    description: "Bird Up!"
  },
  tigerking: {
    name: "Tiger King",
    category: "Other",
    foreground: "#ffffff",
    background: "#FFCC40",
    outline: "black",
    texture: ["leopard", "tiger", "cheetah"],
    description: "Leopard Print"
  },
  covid: {
    name: "COViD",
    category: "Other",
    foreground: "#A9FF70",
    background: ["#a6ff00", "#83b625", "#5ace04", "#69f006", "#b0f006", "#93bc25"],
    outline: "black",
    texture: "fire",
    description: "Covid-19"
  },
  acleaf: {
    name: "Animal Crossing",
    category: "Other",
    foreground: "#00FF00",
    background: "#07540A",
    outline: "black",
    texture: "acleaf",
    description: "Animal Crossing Leaf"
  },
  isabelle: {
    name: "Isabelle",
    category: "Other",
    foreground: "white",
    background: "#FEE5CC",
    outline: "black",
    texture: "isabelle",
    description: "Isabelle"
  },
  thecage: {
    name: "Nicholas Cage",
    category: "Other",
    foreground: "#ffffff",
    background: "#ffffff",
    outline: "black",
    texture: "thecage",
    description: "Nicholas Cage"
  },
  test: {
    name: "Test",
    category: "Colors",
    foreground: ["#00FF00", "#0000FF", "#FF0000"],
    background: ["#FF0000", "#00FF00", "#0000FF"],
    outline: "black",
    texture: "none",
    description: "Test"
  },
  rainbow: {
    name: "Rainblow",
    category: "Colors",
    foreground: ["#FF5959", "#FFA74F", "#FFFF56", "#59FF59", "#2374FF", "#00FFFF", "#FF59FF"],
    background: ["#900000", "#CE3900", "#BCBC00", "#00B500", "#00008E", "#008282", "#A500A5"],
    outline: "black",
    texture: "none",
    description: "Rainblow"
  },
  black: {
    name: "Black",
    category: "Colors",
    foreground: "#ffffff",
    background: "#000000",
    outline: "black",
    texture: "none",
    description: "Black"
  },
  white: {
    name: "White",
    category: "Colors",
    foreground: "#000000",
    background: "#FFFFFF",
    outline: "#FFFFFF",
    texture: "none",
    description: "White"
  },
  swrpg_abi: {
    name: "Star Wars RPG - Ability",
    category: "Star Wars™ RPG",
    foreground: "#00FF00",
    background: ["#3D9238", "#52B848", "#5EAC56", "#9ECB9A"],
    outline: "#000000",
    texture: "cloudy_2",
    description: "Star Wars™ RPG Ability Dice"
  },
  swrpg_pro: {
    name: "Star Wars RPG - Proficiency",
    category: "Star Wars™ RPG",
    foreground: "#FFFF00",
    background: ["#CABB1C", "#F9E33B", "#FFE900", "#F0E49D"],
    outline: "#000000",
    texture: "paper",
    description: "Star Wars™ RPG Proficiency Dice"
  },
  swrpg_dif: {
    name: "Star Wars RPG - Difficulty",
    category: "Star Wars™ RPG",
    foreground: "#8000FC",
    background: ["#39165F", "#664B84", "#50247E", "#745F88"],
    outline: "#000000",
    texture: "cloudy_2",
    description: "Star Wars™ RPG Difficulty Dice"
  },
  swrpg_cha: {
    name: "Star Wars RPG - Challenge",
    category: "Star Wars™ RPG",
    foreground: "#FF0000",
    background: ["#A91F32", "#EB4254", "#E51836", "#BA3645"],
    outline: "#000000",
    texture: "paper",
    description: "Star Wars™ RPG Challenge Dice"
  },
  swrpg_boo: {
    name: "Star Wars RPG - Boost",
    category: "Star Wars™ RPG",
    foreground: "#00FFFF",
    background: ["#4B9DC6", "#689FC4", "#85CFF2", "#8FC0D8"],
    outline: "#000000",
    texture: "glitter",
    description: "Star Wars™ RPG Boost Dice"
  },
  swrpg_set: {
    name: "Star Wars RPG - Setback",
    category: "Star Wars™ RPG",
    foreground: "#111111",
    background: ["#252223", "#241F21", "#282828", "#111111"],
    outline: "#ffffff",
    texture: "glitter",
    description: "Star Wars™ RPG Setback Dice"
  },
  swrpg_for: {
    name: "Star Wars RPG - Force",
    category: "Star Wars™ RPG",
    foreground: "#000000",
    background: ["#F3F3F3", "#D3D3D3", "#BABABA", "#FFFFFF"],
    outline: "#FFFFFF",
    texture: "stars",
    description: "Star Wars™ RPG Force Dice"
  },
  swa_red: {
    name: "Armada Attack - Red",
    category: "Star Wars™ Armada",
    foreground: "#ffffff",
    background: ["#440D19", "#8A1425", "#C72336", "#C04551"],
    outline: "none",
    texture: "stainedglass",
    description: "Star Wars™ Armada Red Attack Dice"
  },
  swa_blue: {
    name: "Armada Attack - Blue",
    category: "Star Wars™ Armada",
    foreground: "#ffffff",
    background: ["#212642", "#28286E", "#2B348C", "#3D4BB5", "#5D64AB"],
    outline: "none",
    texture: "stainedglass",
    description: "Star Wars™ Armada Blue Attack Dice"
  },
  swa_black: {
    name: "Armada Attack - Black",
    category: "Star Wars™ Armada",
    foreground: "#ffffff",
    background: ["#252223", "#241F21", "#282828", "#111111"],
    outline: "none",
    texture: "stainedglass",
    description: "Star Wars™ Armada Black Attack Dice"
  },
  xwing_red: {
    name: "X-Wing Attack - Red",
    category: "Star Wars™ X-Wing",
    foreground: "#ffffff",
    background: ["#440D19", "#8A1425", "#C72336", "#C04551"],
    outline: "none",
    texture: "stars",
    description: "Star Wars™ X-Wing Red Attack Dice"
  },
  xwing_green: {
    name: "X-Wing Attack - Green",
    category: "Star Wars™ X-Wing",
    foreground: "#ffffff",
    background: ["#3D9238", "#52B848", "#5EAC56", "#9ECB9A"],
    outline: "none",
    texture: "stars",
    description: "Star Wars™ X-Wing Green Attack Dice"
  },
  swl_atkred: {
    name: "Legion Attack - Red",
    category: "Star Wars™ Legion",
    foreground: "#ffffff",
    background: ["#440D19", "#8A1425", "#C72336", "#C04551"],
    outline: "none",
    texture: "fire",
    description: "Star Wars™ Legion Red Attack Dice"
  },
  swl_atkblack: {
    name: "Legion Attack - Black",
    category: "Star Wars™ Legion",
    foreground: "#ffffff",
    background: ["#252223", "#241F21", "#282828", "#111111"],
    outline: "none",
    texture: "fire",
    description: "Star Wars™ Legion Black Attack Dice"
  },
  swl_atkwhite: {
    name: "Legion Attack - White",
    category: "Star Wars™ Legion",
    foreground: "#000000",
    background: ["#ffffff", "#DFF4FA", "#BCBCBC", "#F1EDE2", "#F2ECE0"],
    outline: "none",
    texture: "fire",
    description: "Star Wars™ Legion White Attack Dice"
  },
  swl_defred: {
    name: "Legion Defense - Red",
    category: "Star Wars™ Legion",
    foreground: "#ffffff",
    background: ["#440D19", "#8A1425", "#C72336", "#C04551"],
    outline: "none",
    texture: "fire",
    description: "Star Wars™ Legion Red Defense Dice"
  },
  swl_defwhite: {
    name: "Legion Defense - White",
    category: "Star Wars™ Legion",
    foreground: "#000000",
    background: ["#ffffff", "#DFF4FA", "#BCBCBC", "#F1EDE2", "#F2ECE0"],
    outline: "none",
    texture: "fire",
    description: "Star Wars™ Legion White Defense Dice"
  }
};
var le, Ue, Ye, St, De, rt, ke, at;
class Nr {
  constructor(e = {}) {
    b(this, Ye);
    b(this, De);
    b(this, ke);
    b(this, le, /* @__PURE__ */ new Map());
    b(this, Ue, void 0);
    w(this, Ue, e.assetPath);
  }
  async getColorSet(e) {
    const t = typeof e == "string" ? e : e == null ? void 0 : e.colorset;
    if (l(this, le).has(t))
      return l(this, le).get(t);
    const a = { ...er[t] }, i = (e == null ? void 0 : e.texture) ?? a.texture;
    return a.texture = await N(this, De, rt).call(this, N(this, ke, at).call(this, i)), e != null && e.material && (a.texture.material = e.material), l(this, le).set(t, a), a;
  }
  async makeColorSet(e = {}) {
    var s;
    if (l(this, le).has(e.name))
      return l(this, le).get(e.name);
    const a = {
      ...er.white,
      ...e,
      name: ((s = e.name) == null ? void 0 : s.toLowerCase()) === "white" ? Date.now().toString() : e.name
    }, i = N(this, ke, at).call(this, a.texture);
    return a.texture = await N(this, De, rt).call(this, i), e.material && (a.texture.material = e.material), l(this, le).set(a.name, a), a;
  }
}
le = new WeakMap(), Ue = new WeakMap(), Ye = new WeakSet(), St = async function(e) {
  try {
    const t = new Image();
    return t.crossOrigin = "anonymous", t.src = l(this, Ue) + e, await new Promise((a, i) => {
      t.onload = a, t.onerror = i;
    }), t;
  } catch (t) {
    throw console.error("Unable to load image texture:", t), new Error("Image loading failed");
  }
}, De = new WeakSet(), rt = async function(e) {
  if (Array.isArray(e))
    return Promise.all(e.map((a) => N(this, De, rt).call(this, a)));
  const t = { ...e };
  return t.source && t.source !== "" && (t.texture = await N(this, Ye, St).call(this, t.source)), t.source_bump && t.source_bump !== "" && (t.bump = await N(this, Ye, St).call(this, t.source_bump)), t;
}, ke = new WeakSet(), at = function(e) {
  return Array.isArray(e) ? e.map((t) => N(this, ke, at).call(this, t)) : Qt[e] ?? Qt.none;
};
const Ur = {
  default: {
    name: "Solid Color",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "wood_tray",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    cubeMap: [
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg"
    ]
  },
  "blue-felt": {
    name: "Blue Felt",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "felt",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    // ['', '', 'top', 'bottom', '', ''] -- looking down/camera view
    cubeMap: [
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg"
    ]
  },
  "red-felt": {
    name: "Red Felt",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "felt",
    colors: { fg: "#ff9494", bg: "#4d1e1e" },
    cubeMap: [
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg"
    ]
  },
  "green-felt": {
    name: "Green Felt",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "felt",
    colors: { fg: "#97ff94", bg: "#244d1e" },
    // ['', '', 'top', 'bottom', '', ''] -- looking down/camera view
    cubeMap: [
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg",
      "envmap.jpg"
    ]
  },
  taverntable: {
    name: "Old Tavern Table",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "wood_table",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  },
  mahogany: {
    name: "(Mah-Hog-Any)",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "wood_table",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  },
  stainless: {
    name: "Stainless Steel",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "metal",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  },
  cyberpunk: {
    name: "Neo-New-Future-City",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "metal",
    colors: { fg: "#3494A6", bg: "#440B28" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  },
  cagetown: {
    name: "Cage Town",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "wood_table",
    colors: { fg: "#D7A866", bg: "#282811" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  }
};
var Yr = qr;
function qr(A, e, t) {
  var a = null, i = null, s = function() {
    a && (clearTimeout(a), i = null, a = null);
  }, o = function() {
    var c = i;
    s(), c && c();
  }, n = function() {
    if (!e)
      return A.apply(this, arguments);
    var c = this, h = arguments, d = t && !a;
    if (s(), i = function() {
      A.apply(c, h);
    }, a = setTimeout(function() {
      if (a = null, !d) {
        var p = i;
        return i = null, p();
      }
    }, e), d)
      return i();
  };
  return n.cancel = s, n.flush = o, n;
}
const Xr = {
  assetPath: "./",
  framerate: 1 / 60,
  sounds: !1,
  volume: 100,
  color_spotlight: 15720405,
  shadows: !0,
  theme_surface: "green-felt",
  sound_dieMaterial: "plastic",
  theme_customColorset: null,
  theme_colorset: "white",
  theme_texture: "",
  theme_material: "glass",
  gravity_multiplier: 400,
  light_intensity: 0.7,
  baseScale: 100,
  strength: 1,
  iterationLimit: 1e3
};
var qe, Xe, Q, j, ae, lt, he, ct;
class Kr {
  constructor(e, t = {}) {
    b(this, qe, !1);
    b(this, Xe, !1);
    b(this, Q, 0);
    b(this, j, !1);
    b(this, ae, !1);
    b(this, lt, 10);
    b(this, he, "");
    b(this, ct, 0);
    if (!(e instanceof HTMLElement))
      throw new Error("DiceBox constructor requires an HTMLElement");
    this.container = e, this.dimensions = new S.Vector2(
      this.container.clientWidth,
      this.container.clientHeight
    ), this.box_body = {
      desk: null,
      topWall: null,
      bottomWall: null,
      leftWall: null,
      rightWall: null
    }, this.diceList = [], this.display = {
      currentWidth: null,
      currentHeight: null,
      containerWidth: null,
      containerHeight: null,
      aspect: null,
      scale: null
    }, this.cameraHeight = {
      max: null,
      close: null,
      medium: null,
      far: null
    }, this.scene = new S.Scene(), this.world = new R.World(), this.dice_body_material = new R.Material(), this.sounds_table = /* @__PURE__ */ new Map(), this.sounds_dice = [], this.lastSoundType = "", this.lastSoundStep = 0, this.lastSound = 0, this.selector = {
      animate: !0,
      rotate: !0,
      intersected: null,
      dice: []
    }, Object.assign(this, Xr, t), this.DiceColors = new Nr({ assetPath: this.assetPath }), this.DiceFactory = new Ft({
      baseScale: this.baseScale
    }), this.DiceFactory.setBumpMapping(!0), this.surface = Ur[this.theme_surface].surface;
  }
  get initialized() {
    return l(this, qe);
  }
  get running() {
    return l(this, j);
  }
  get rolling() {
    return l(this, ae);
  }
  toggleShadows(e) {
    this.shadows = e, this.renderer && (this.renderer.shadowMap.enabled = this.shadows), this.light && (this.light.castShadow = this.shadows), this.desk && (this.desk.receiveShadow = this.shadows);
  }
  async initialize() {
    this.renderer = new S.WebGLRenderer({
      antialias: !0,
      alpha: !0,
      powerPreference: "high-performance"
    }), this.container.appendChild(this.renderer.domElement), this.renderer.shadowMap.enabled = this.shadows, this.renderer.shadowMap.type = S.PCFSoftShadowMap, this.renderer.setClearColor(0, 0), this.setDimensions(this.dimensions), this.world.gravity.set(0, 0, -9.8 * this.gravity_multiplier), this.world.broadphase = new R.NaiveBroadphase(), this.world.solver.iterations = 14, this.world.allowSleep = !0, this.makeWorldBox(), this.resizeWorld();
    try {
      await this.loadTheme({
        colorset: this.theme_colorset,
        texture: this.theme_texture,
        material: this.theme_material
      }), this.sounds && await this.loadSounds(), w(this, qe, !0), this.renderer.render(this.scene, this.camera);
    } catch (e) {
      throw console.error("Initialization failed:", e), e;
    }
  }
  makeWorldBox() {
    this.box_body.desk && this.world.removeBody(this.box_body.desk), this.box_body.topWall && this.world.removeBody(this.box_body.topWall), this.box_body.bottomWall && this.world.removeBody(this.box_body.bottomWall), this.box_body.leftWall && this.world.removeBody(this.box_body.leftWall), this.box_body.rightWall && this.world.removeBody(this.box_body.rightWall);
    const e = new R.Material(), t = new R.Material();
    this.world.addContactMaterial(
      new R.ContactMaterial(e, this.dice_body_material, {
        mass: 0,
        friction: 0.6,
        restitution: 0.5
      })
    ), this.world.addContactMaterial(
      new R.ContactMaterial(
        t,
        this.dice_body_material,
        { mass: 0, friction: 0.6, restitution: 1 }
      )
    ), this.world.addContactMaterial(
      new R.ContactMaterial(
        this.dice_body_material,
        this.dice_body_material,
        { mass: 0, friction: 0.6, restitution: 0.5 }
      )
    ), this.box_body.desk = new R.Body({
      allowSleep: !1,
      mass: 0,
      shape: new R.Plane(),
      material: e
    }), this.world.addBody(this.box_body.desk), this.box_body.topWall = new R.Body({
      allowSleep: !1,
      mass: 0,
      shape: new R.Plane(),
      material: t
    }), this.box_body.topWall.quaternion.setFromAxisAngle(
      new R.Vec3(1, 0, 0),
      Math.PI / 2
    ), this.box_body.topWall.position.set(
      0,
      this.display.containerHeight * 0.93,
      0
    ), this.world.addBody(this.box_body.topWall), this.box_body.bottomWall = new R.Body({
      allowSleep: !1,
      mass: 0,
      shape: new R.Plane(),
      material: t
    }), this.box_body.bottomWall.quaternion.setFromAxisAngle(
      new R.Vec3(1, 0, 0),
      -Math.PI / 2
    ), this.box_body.bottomWall.position.set(
      0,
      -this.display.containerHeight * 0.93,
      0
    ), this.world.addBody(this.box_body.bottomWall), this.box_body.leftWall = new R.Body({
      allowSleep: !1,
      mass: 0,
      shape: new R.Plane(),
      material: t
    }), this.box_body.leftWall.quaternion.setFromAxisAngle(
      new R.Vec3(0, 1, 0),
      -Math.PI / 2
    ), this.box_body.leftWall.position.set(
      this.display.containerWidth * 0.93,
      0,
      0
    ), this.world.addBody(this.box_body.leftWall), this.box_body.rightWall = new R.Body({
      allowSleep: !1,
      mass: 0,
      shape: new R.Plane(),
      material: t
    }), this.box_body.rightWall.quaternion.setFromAxisAngle(
      new R.Vec3(0, 1, 0),
      Math.PI / 2
    ), this.box_body.rightWall.position.set(
      -this.display.containerWidth * 0.93,
      0,
      0
    ), this.world.addBody(this.box_body.rightWall);
  }
  async loadTheme(e) {
    let t;
    this.theme_customColorset ? t = await this.DiceColors.makeColorSet(this.theme_customColorset) : t = await this.DiceColors.getColorSet(e), this.DiceFactory.applyColorSet(t), this.colorData = t;
  }
  async loadSounds() {
    let e = {
      felt: 7,
      wood_table: 7,
      wood_tray: 7,
      metal: 9
    }, t = {
      coin: 6,
      metal: 12,
      plastic: 15,
      wood: 12
    };
    const a = this.colorData.texture.material.match(/wood|metal/g);
    if (this.sound_dieMaterial = a ? this.colorData.texture.material : "plastic", !this.sounds_table.has(this.surface)) {
      this.sounds_table.set(this.surface, []);
      let i = e[this.surface];
      for (let s = 1; s <= i; ++s) {
        const o = await this.loadAudio(
          this.assetPath + "sounds/surfaces/surface_" + this.surface + s + ".mp3"
        );
        this.sounds_table.get(this.surface).push(o);
      }
    }
    if (!this.sounds_dice.hasOwnProperty("coin")) {
      this.sounds_dice.coin = [];
      let i = t.coin;
      for (let s = 1; s <= i; ++s) {
        const o = await this.loadAudio(
          this.assetPath + "sounds/dicehit/dicehit_coin" + s + ".mp3"
        );
        this.sounds_dice.coin.push(o);
      }
    }
    if (!this.sounds_dice.hasOwnProperty(this.sound_dieMaterial)) {
      this.sounds_dice[this.sound_dieMaterial] = [];
      let i = t[this.sound_dieMaterial];
      for (let s = 1; s <= i; ++s) {
        const o = await this.loadAudio(
          this.assetPath + "sounds/dicehit/dicehit_" + this.sound_dieMaterial + s + ".mp3"
        );
        this.sounds_dice[this.sound_dieMaterial].push(o);
      }
    }
  }
  loadAudio(e) {
    return new Promise((t, a) => {
      let i = new Audio();
      i.oncanplaythrough = () => t(i), i.crossOrigin = "anonymous", i.src = e, i.onerror = (s) => a(s);
    }).catch((t) => {
      console.error("Unable to load audio");
    });
  }
  async updateConfig(e = {}) {
    Object.apply(this, e), this.theme_customColorset = e.theme_customColorset ? e.theme_customColorset : null, e.theme_colorset && (this.theme_colorset = e.theme_colorset), e.theme_texture && (this.theme_texture = e.theme_texture), e.theme_material && (this.theme_material = e.theme_material), (e.theme_colorset || e.theme_texture || e.theme_material || e.theme_customColorset) && await this.loadTheme({
      colorset: this.theme_colorset,
      texture: this.theme_texture,
      material: this.theme_material
    });
  }
  setDimensions(e) {
    switch (this.display.currentWidth = this.container.clientWidth / 2, this.display.currentHeight = this.container.clientHeight / 2, e ? (this.display.containerWidth = e.x, this.display.containerHeight = e.y) : (this.display.containerWidth = this.display.currentWidth, this.display.containerHeight = this.display.currentHeight), this.display.aspect = Math.min(
      this.display.currentWidth / this.display.containerWidth,
      this.display.currentHeight / this.display.containerHeight
    ), this.display.scale = Math.sqrt(
      this.display.containerWidth * this.display.containerWidth + this.display.containerHeight * this.display.containerHeight
    ) / 13, this.makeWorldBox(), this.renderer.setSize(
      this.display.currentWidth * 2,
      this.display.currentHeight * 2
    ), this.cameraHeight.max = this.display.currentHeight / this.display.aspect / Math.tan(10 * Math.PI / 180), this.cameraHeight.medium = this.cameraHeight.max / 1.5, this.cameraHeight.far = this.cameraHeight.max, this.cameraHeight.close = this.cameraHeight.max / 2, this.camera && this.scene.remove(this.camera), this.camera = new S.PerspectiveCamera(
      20,
      this.display.currentWidth / this.display.currentHeight,
      1,
      this.cameraHeight.max * 1.3
    ), l(this, he)) {
      case "selector":
        this.camera.position.z = this.selector.dice.length > 9 ? this.cameraHeight.far : this.selector.dice.length < 6 ? this.cameraHeight.close : this.cameraHeight.medium;
        break;
      case "throw":
      case "afterthrow":
      default:
        this.camera.position.z = this.cameraHeight.far;
    }
    this.camera.lookAt(new S.Vector3(0, 0, 0));
    const t = Math.max(
      this.display.containerWidth,
      this.display.containerHeight
    );
    this.light && this.scene.remove(this.light), this.light_amb && this.scene.remove(this.light_amb), this.light = new S.SpotLight(
      this.color_spotlight,
      this.light_intensity
    ), this.light.position.set(-t / 2, t / 2, t * 3), this.light.target.position.set(0, 0, 0), this.light.distance = t * 5, this.light.angle = Math.PI / 4, this.light.castShadow = this.shadows, this.light.shadow.camera.near = t / 10, this.light.shadow.camera.far = t * 5, this.light.shadow.camera.fov = 50, this.light.shadow.bias = 1e-3, this.light.shadow.mapSize.width = 1024, this.light.shadow.mapSize.height = 1024, this.scene.add(this.light), this.light_amb = new S.HemisphereLight(
      16777147,
      6776689,
      this.light_intensity
    ), this.scene.add(this.light_amb), this.desk && this.scene.remove(this.desk);
    let a = new S.ShadowMaterial();
    a.opacity = 0.5, this.desk = new S.Mesh(
      new S.PlaneGeometry(
        this.display.containerWidth * 6,
        this.display.containerHeight * 6,
        1,
        1
      ),
      a
    ), this.desk.receiveShadow = this.shadows, this.scene.add(this.desk), this.renderer.render(this.scene, this.camera);
  }
  resizeWorld() {
    const t = Yr(() => {
      const a = this.renderer.domElement, i = this.container.clientWidth, s = this.container.clientHeight, o = a.width !== i || a.height !== s;
      return o && this.setDimensions(
        new S.Vector2(
          this.container.clientWidth,
          this.container.clientHeight
        )
      ), o;
    });
    window.addEventListener("resize", t);
  }
  vectorRand({ x: e, y: t }) {
    let a = Math.random() * Math.PI / 5 - Math.PI / 5 / 2, i = {
      x: e * Math.cos(a) - t * Math.sin(a),
      y: e * Math.sin(a) + t * Math.cos(a)
    };
    return i.x == 0 && (i.x = 0.01), i.y == 0 && (i.y = 0.01), i;
  }
  //returns an array of vectordata objects
  getNotationVectors(e, t, a, i) {
    let s = new Kt(e);
    for (let o in s.set) {
      const n = this.DiceFactory.get(s.set[o].type);
      let c = s.set[o].num, h = s.set[o].op, d = s.set[o].sid, p = s.set[o].gid, _ = s.set[o].glvl, C = s.set[o].func, x = s.set[o].args;
      for (let y = 0; y < c; y++) {
        let f = this.vectorRand(t);
        f.x /= i, f.y /= i;
        let D = {
          x: this.display.containerWidth * (f.x > 0 ? -1 : 1) * 0.9,
          y: this.display.containerHeight * (f.y > 0 ? -1 : 1) * 0.9,
          z: Math.random() * 200 + 200
        }, g = Math.abs(f.x / f.y);
        g > 1 ? D.y /= g : D.x *= g;
        let v = this.vectorRand(t);
        v.x /= i, v.y /= i;
        let k, W, z;
        n.shape != "d2" ? (k = {
          x: v.x * a,
          y: v.y * a,
          z: -10
        }, W = {
          x: -(Math.random() * f.y * 5 + n.inertia * f.y),
          y: Math.random() * f.x * 5 + n.inertia * f.x,
          z: 0
        }, z = {
          x: Math.random(),
          y: Math.random(),
          z: Math.random(),
          a: Math.random()
        }) : (k = {
          x: v.x * a / 10,
          y: v.y * a / 10,
          z: 3e3
        }, W = {
          x: 12 * n.inertia,
          //-(Math.random() * velvec.y * 50 + diceobj.inertia * velvec.y ) ,
          y: 1 * n.inertia,
          //Math.random() * velvec.x * 50 + diceobj.inertia * velvec.x ,
          z: 0
        }, z = {
          x: 1,
          //Math.random(),
          y: 1,
          //Math.random(),
          z: Math.random(),
          a: Math.random()
        }), s.vectors.push({
          index: wt(this, ct)._++,
          type: n.type,
          op: h,
          sid: d,
          gid: p,
          glvl: _,
          func: C,
          args: x,
          pos: D,
          velocity: k,
          angle: W,
          axis: z
        });
      }
    }
    return s;
  }
  // swaps dice faces to match desired result
  swapDiceFace(e, t) {
    const a = this.DiceFactory.get(e.notation.type);
    if (e.resultReason = "forced", a.shape == "d4") {
      this.swapDiceFace_D4(e, t);
      return;
    }
    a.values;
    let i = parseInt(e.getLastValue().value);
    t = parseInt(t), e.notation.type == "d10" && i == 0 && (i = 10), e.notation.type == "d100" && i == 0 && (i = 100), e.notation.type == "d100" && i > 0 && i < 10 && (i *= 10), e.notation.type == "d10" && t == 0 && (t = 10), e.notation.type == "d100" && t == 0 && (t = 100), e.notation.type == "d100" && t > 0 && t < 10 && (t *= 10);
    let s = a.values.indexOf(i), o = a.values.indexOf(t);
    if (s < 0 || o < 0 || s == o)
      return;
    let n = e.geometry.clone(), c = [], h = [], d = 2;
    a.shape == "d10" && (d = 1);
    let p, _ = o + d;
    a.shape != "d2" ? (p = s + d, _ = o + d) : (p = s + 1, _ = o + 1);
    for (var C = 0, x = n.groups.length; C < x; ++C) {
      const f = n.groups[C].materialIndex;
      if (f == p) {
        c.push(C);
        continue;
      }
      if (f == _) {
        h.push(C);
        continue;
      }
    }
    if (!(c.length <= 0 || h.length <= 0)) {
      for (let y = 0, f = h.length; y < f; y++)
        n.groups[h[y]].materialIndex = p;
      for (let y = 0, f = c.length; y < f; y++)
        n.groups[c[y]].materialIndex = _;
      e.geometry = n, e.result = [];
    }
  }
  swapDiceFace_D4(e, t) {
    const a = this.DiceFactory.get(e.notation.type);
    let i = parseInt(e.getLastValue().value);
    if (t = parseInt(t), !(i >= 1 && i <= 4))
      return;
    let s = t - i, o = e.geometry.clone();
    for (let n = 0, c = o.groups.length; n < c; ++n) {
      const h = o.groups[n];
      let d = h.materialIndex;
      if (d != 0) {
        for (d += s - 1; d > 4; )
          d -= 4;
        for (; d < 1; )
          d += 4;
        h.materialIndex = d + 1;
      }
    }
    s != 0 && (s < 0 && (s += 4), e.material = this.DiceFactory.createMaterials(
      a,
      0,
      0,
      !1,
      s
    )), e.geometry = o;
  }
  //spawns one dicemesh object from a single vectordata object
  async spawnDice(e, t = !1) {
    const { pos: a, axis: i, angle: s, velocity: o } = e;
    let n;
    if (t)
      n = t, n.stopped = 0, this.world.removeBody(n.body);
    else {
      if (n = await this.DiceFactory.create(e.type, this.colorData), !n)
        return;
      n.notation = e, n.result = [], n.stopped = 0, n.castShadow = this.shadows, this.scene.add(n), this.diceList.push(n);
    }
    n.body = new R.Body({
      allowSleep: !0,
      sleepSpeedLimit: 75,
      sleepTimeLimit: 0.9,
      mass: n.mass,
      shape: n.geometry.cannon_shape,
      material: this.dice_body_material
    }), n.body.type = R.Body.DYNAMIC, n.body.position.set(a.x, a.y, a.z), n.body.quaternion.setFromAxisAngle(
      new R.Vec3(i.x, i.y, i.z),
      i.a * Math.PI * 2
    ), n.body.angularVelocity.set(s.x, s.y, s.z), n.body.velocity.set(o.x, o.y, o.z), n.body.linearDamping = 0.1, n.body.angularDamping = 0.1, n.body.diceShape = n.shape, n.body.sleepState = 0, n.body.addEventListener("collide", this.eventCollide.bind(this)), this.world.addBody(n.body);
  }
  eventCollide({ body: e, target: t }) {
    if (l(this, he) == "simulate" || !this.sounds || !e || this.volume <= 0)
      return;
    let a = Date.now(), i = e.mass > 0 ? "dice" : "table";
    if (!((this.lastSoundStep == e.world.stepnumber || this.lastSound > a) && i != "dice") && !((this.lastSoundStep == e.world.stepnumber || this.lastSound > a) && i == "dice" && this.lastSoundType == "dice")) {
      if (e.mass > 0) {
        let s = e.velocity.length();
        if (s < 250)
          return;
        let o;
        e.diceShape === "d2" ? o = this.sounds_dice.coin[Math.floor(Math.random() * this.sounds_dice.coin.length)] : o = this.sounds_dice[this.sound_dieMaterial][Math.floor(
          Math.random() * this.sounds_dice[this.sound_dieMaterial].length
        )], o && (o.volume = Math.min(s / 8e3, this.volume / 100), o.play().catch((n) => {
        })), this.lastSoundType = "dice";
      } else {
        let s = t.velocity.length();
        if (s < 250)
          return;
        let o = this.surface, n = this.sounds_table.get(o), c = n[Math.floor(Math.random() * n.length)];
        c && (c.volume = Math.min(s / 8e3, this.volume / 100), c.play().catch((h) => {
        })), this.lastSoundType = "table";
      }
      this.lastSoundStep = e.world.stepnumber, this.lastSound = a + l(this, lt);
    }
  }
  checkForRethrow(e) {
    var s, o, n;
    const t = ((s = e.notation.func) == null ? void 0 : s.toLowerCase()) || "";
    if (!t)
      return !1;
    const a = (n = (o = this.DiceFunctions) == null ? void 0 : o.rethrowFunctions) == null ? void 0 : n[t];
    if (!(a != null && a.method))
      return !1;
    const i = e.notation.args || "";
    return a.method(e, i);
  }
  throwFinished() {
    const e = this.iteration > this.iterationLimit, t = R.Body.SLEEPING;
    for (const a of this.diceList) {
      if (a.body.type === R.Body.KINEMATIC)
        continue;
      if (a.body.sleepState < t && !e)
        return !1;
      if (a.body.sleepState !== t && !e)
        continue;
      if (a.result.length === 0 ? a.storeRolledValue(a.resultReason) : a.result.length > 0 && a.rerolling && (a.rerolling = !1, a.storeRolledValue("reroll")), this.checkForRethrow(a))
        return a.rerolls += 1, a.rerolling = !0, a.body.wakeUp(), a.body.type = R.Body.DYNAMIC, a.body.angularVelocity = new R.Vec3(25, 25, 25), a.body.velocity = new R.Vec3(0, 0, 3e3), !1;
      a.rerolling = !1, a.body.type = R.Body.KINEMATIC;
    }
    return !0;
  }
  simulateThrow() {
    for (w(this, he, "simulate"), this.iteration = 0, w(this, ae, !0); !this.throwFinished(!0); )
      ++this.iteration, this.world.step(this.framerate);
  }
  animateThrow(e, t) {
    w(this, he, "throw");
    let a = Date.now();
    w(this, Q, l(this, Q) || a - this.framerate * 1e3);
    let i = (a - l(this, Q)) / 1e3;
    ++this.iteration;
    let s = Math.floor(i / this.framerate);
    for (let o = 0; o < s; o++)
      this.world.step(this.framerate), ++this.steps;
    for (let o in this.scene.children) {
      let n = this.scene.children[o];
      n.body != null && (n.position.copy(n.body.position), n.quaternion.copy(n.body.quaternion));
    }
    if (this.renderer.render(this.scene, this.camera), w(this, Q, l(this, Q) + s * this.framerate * 1e3), l(this, j) == e && this.throwFinished()) {
      w(this, j, !1), w(this, ae, !1), t && t.call(this, this.notationVectors), w(this, j, Date.now()), this.animateAfterThrow(l(this, j));
      return;
    }
    l(this, j) == e && ((o, n, c, h, d) => {
      !c && i < this.framerate ? setTimeout(() => {
        requestAnimationFrame(() => {
          o.call(this, n, h, d);
        });
      }, (this.framerate - i) * 1e3) : requestAnimationFrame(() => {
        o.call(this, n, h, d);
      });
    }).bind(this)(
      this.animateThrow,
      e,
      l(this, Xe),
      t
    );
  }
  animateAfterThrow(e) {
    w(this, he, "afterthrow");
    let t = Date.now(), a = (t - l(this, Q)) / 1e3;
    a > 3 && (a = this.framerate), w(this, j, !1), w(this, Q, t), this.renderer.render(this.scene, this.camera), l(this, j) == e && ((i, s, o) => {
      !o && a < this.framerate ? setTimeout(() => {
        requestAnimationFrame(() => {
          i.call(this, s);
        });
      }, (this.framerate - a) * 1e3) : requestAnimationFrame(() => {
        i.call(this, s);
      });
    }).bind(this)(this.animateAfterThrow, e, l(this, Xe));
  }
  startClickThrow(e) {
    l(this, ae) && (this.clearDice(), w(this, ae, !1));
    let t = {
      x: (Math.random() * 2 - 0.5) * this.display.currentWidth,
      y: -(Math.random() * 2 - 0.5) * this.display.currentHeight
    }, a = Math.sqrt(t.x * t.x + t.y * t.y) + 100, i = (Math.random() + 3) * a * this.strength;
    return this.getNotationVectors(
      e,
      t,
      i,
      a
    );
  }
  clearDice() {
    w(this, j, !1);
    let e;
    for (; e = this.diceList.pop(); )
      this.scene.remove(e), e.body && this.world.removeBody(e.body);
    this.renderer.render(this.scene, this.camera), setTimeout(() => {
      this.renderer.render(this.scene, this.camera);
    }, 100);
  }
  getDiceResults(e) {
    if (e !== void 0)
      return {
        type: this.diceList[e].shape,
        sides: parseInt(this.diceList[e].shape.substring(1)),
        id: e,
        ...this.diceList[e].result.at(-1)
      };
    let t = 0;
    const a = this.notationVectors.constant ? parseInt(`${this.notationVectors.op}${this.notationVectors.constant}`) : 0;
    let i = a;
    return {
      notation: this.notationVectors.notation,
      sets: this.notationVectors.set.map((o) => {
        const n = t + o.num - 1;
        let c = 0;
        const h = [];
        for (let p = t; p <= n; p++) {
          if (this.diceList[t].result.at(-1).reason === "remove") {
            t++;
            continue;
          }
          h.push({
            type: o.type,
            sides: parseInt(o.type.substring(1)),
            id: t,
            ...this.diceList[t].result.at(-1)
          }), c += this.diceList[t].result.at(-1).value, t++;
        }
        const d = {
          num: o.num,
          type: o.type,
          sides: parseInt(o.type.substring(1)),
          rolls: h,
          total: c
        };
        return i += c, d;
      }),
      modifier: a,
      total: i
    };
  }
  async roll(e) {
    if (this.notationVectors = this.startClickThrow(e), this.notationVectors)
      return new Promise((t, a) => {
        this.rollDice(() => {
          const i = this.getDiceResults();
          t(i);
        });
      });
  }
  async reroll(e) {
    return w(this, ae, !0), w(this, j, Date.now()), this.iteration = 0, new Promise((t, a) => {
      e.forEach((i) => {
        const s = this.diceList[i];
        s.rerolls += 1, s.rerolling = !0, s.body.wakeUp(), s.body.type = R.Body.DYNAMIC, s.body.angularVelocity = new R.Vec3(25, 25, 25), s.body.velocity = new R.Vec3(0, 0, 3e3);
      }), this.animateThrow(l(this, j), () => {
        const i = e.map((s) => this.getDiceResults(s));
        t(i);
      });
    });
  }
  async add(e) {
    let t = this.diceList.length;
    if (!t)
      return this.roll(e);
    let a = this.startClickThrow(e), i = [];
    for (let s = 0, o = a.vectors.length; s < o; ++s)
      await this.spawnDice(a.vectors[s]);
    this.simulateThrow(), this.steps = 0, this.iteration = 0;
    for (let s = 0, o = a.vectors.length; s < o; ++s) {
      const n = t + s;
      this.diceList[n] && (await this.spawnDice(a.vectors[s], this.diceList[n]), i.push(n));
    }
    if (a.result && a.result.length > 0)
      for (let s = 0; s < a.result.length; s++) {
        const o = t + s;
        let n = this.diceList[o];
        n && n.getLastValue().value != a.result[s] && this.swapDiceFace(n, a.result[s]);
      }
    return this.notationVectors = Kt.mergeNotation(
      this.notationVectors,
      a
    ), new Promise((s, o) => {
      const n = () => {
        const c = i.map((h) => this.getDiceResults(h));
        s(c);
      };
      w(this, ae, !0), w(this, j, Date.now()), w(this, Q, 0), this.animateThrow(l(this, j), n);
    });
  }
  async remove(e) {
    return new Promise((t, a) => {
      const i = [];
      e.forEach((s) => {
        const o = this.diceList[s];
        o.body && this.world.removeBody(o.body), this.scene.remove(o), o.storeRolledValue("remove"), i.push(this.getDiceResults(s));
      }), this.renderer.render(this.scene, this.camera), t(i);
    });
  }
  async rollDice(e) {
    if (this.notationVectors.error) {
      e.call(this);
      return;
    }
    this.clearDice();
    for (let t = 0, a = this.notationVectors.vectors.length; t < a; ++t)
      await this.spawnDice(this.notationVectors.vectors[t]);
    this.simulateThrow(), this.steps = 0, this.iteration = 0;
    for (let t = 0, a = this.diceList.length; t < a; ++t)
      this.diceList[t] && await this.spawnDice(this.notationVectors.vectors[t], this.diceList[t]);
    if (this.notationVectors.result && this.notationVectors.result.length > 0)
      for (let t = 0; t < this.notationVectors.result.length; t++) {
        let a = this.diceList[t];
        a && a.getLastValue().value != this.notationVectors.result[t] && this.swapDiceFace(a, this.notationVectors.result[t]);
      }
    w(this, ae, !0), w(this, j, Date.now()), w(this, Q, 0), this.animateThrow(l(this, j), e);
  }
}
qe = new WeakMap(), Xe = new WeakMap(), Q = new WeakMap(), j = new WeakMap(), ae = new WeakMap(), lt = new WeakMap(), he = new WeakMap(), ct = new WeakMap();
const nr = Pr({
  diceBox: null,
  containerRef: null,
  status: "loading",
  setStatus: () => {
  }
}), ta = ({ children: A, ...e }) => {
  const t = Yt(null), a = Yt(null), [i, s] = Wr("loading");
  return rr(() => {
    if (!(t.current || !a.current))
      try {
        t.current = new Kr(a.current, e), s("initializing");
      } catch {
        s("error");
      }
  }, [a, e, i]), /* @__PURE__ */ _t.jsx(nr.Provider, { value: { diceBox: t.current, containerRef: a, status: i, setStatus: s }, children: A });
}, or = () => Br(nr);
function Jr() {
  const { diceBox: A, status: e, setStatus: t } = or();
  return rr(() => {
    e === "initializing" && (A.initialize(), t("ready"));
  }, [A, e, t]), null;
}
function ra() {
  const { containerRef: A } = or();
  return /* @__PURE__ */ _t.jsx(
    Vr,
    {
      ref: A,
      style: {
        position: "relative",
        width: "100%",
        height: 600,
        backgroundColor: "red"
      },
      children: /* @__PURE__ */ _t.jsx(Jr, {})
    }
  );
}
export {
  ta as DiceProvider,
  ra as RollableArea,
  or as useDice
};
