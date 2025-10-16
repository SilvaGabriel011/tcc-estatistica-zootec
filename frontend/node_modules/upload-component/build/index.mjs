import Vi, { useState as tr, useCallback as er } from "react";
import ec from "react-dom";
var lr = { exports: {} }, In = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ys;
function nc() {
  if (ys) return In;
  ys = 1;
  var n = Vi, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, d) {
    var h, p = {}, v = null, g = null;
    d !== void 0 && (v = "" + d), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (h in c) i.call(c, h) && !s.hasOwnProperty(h) && (p[h] = c[h]);
    if (a && a.defaultProps) for (h in c = a.defaultProps, c) p[h] === void 0 && (p[h] = c[h]);
    return { $$typeof: t, type: a, key: v, ref: g, props: p, _owner: r.current };
  }
  return In.Fragment = e, In.jsx = o, In.jsxs = o, In;
}
var Bn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function ic() {
  return ms || (ms = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Vi, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), N = Symbol.iterator, bt = "@@iterator";
    function kt(l) {
      if (l === null || typeof l != "object")
        return null;
      var f = N && l[N] || l[bt];
      return typeof f == "function" ? f : null;
    }
    var st = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function et(l) {
      {
        for (var f = arguments.length, b = new Array(f > 1 ? f - 1 : 0), w = 1; w < f; w++)
          b[w - 1] = arguments[w];
        m("error", l, b);
      }
    }
    function m(l, f, b) {
      {
        var w = st.ReactDebugCurrentFrame, z = w.getStackAddendum();
        z !== "" && (f += "%s", b = b.concat([z]));
        var G = b.map(function(P) {
          return String(P);
        });
        G.unshift("Warning: " + f), Function.prototype.apply.call(console[l], console, G);
      }
    }
    var j = !1, y = !1, Q = !1, re = !1, dt = !1, ht;
    ht = Symbol.for("react.module.reference");
    function yn(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === i || l === s || dt || l === r || l === d || l === h || re || l === g || j || y || Q || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === p || l.$$typeof === o || l.$$typeof === a || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === ht || l.getModuleId !== void 0));
    }
    function Hn(l, f, b) {
      var w = l.displayName;
      if (w)
        return w;
      var z = f.displayName || f.name || "";
      return z !== "" ? b + "(" + z + ")" : b;
    }
    function ze(l) {
      return l.displayName || "Context";
    }
    function gt(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && et("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case i:
          return "Fragment";
        case e:
          return "Portal";
        case s:
          return "Profiler";
        case r:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case a:
            var f = l;
            return ze(f) + ".Consumer";
          case o:
            var b = l;
            return ze(b._context) + ".Provider";
          case c:
            return Hn(l, l.render, "ForwardRef");
          case p:
            var w = l.displayName || null;
            return w !== null ? w : gt(l.type) || "Memo";
          case v: {
            var z = l, G = z._payload, P = z._init;
            try {
              return gt(P(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Dt = Object.assign, De = 0, Kn, Gn, mn, qn, bn, Zn, Xn;
    function Qn() {
    }
    Qn.__reactDisabledLog = !0;
    function Ji() {
      {
        if (De === 0) {
          Kn = console.log, Gn = console.info, mn = console.warn, qn = console.error, bn = console.group, Zn = console.groupCollapsed, Xn = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: Qn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        De++;
      }
    }
    function Hi() {
      {
        if (De--, De === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Dt({}, l, {
              value: Kn
            }),
            info: Dt({}, l, {
              value: Gn
            }),
            warn: Dt({}, l, {
              value: mn
            }),
            error: Dt({}, l, {
              value: qn
            }),
            group: Dt({}, l, {
              value: bn
            }),
            groupCollapsed: Dt({}, l, {
              value: Zn
            }),
            groupEnd: Dt({}, l, {
              value: Xn
            })
          });
        }
        De < 0 && et("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gn = st.ReactCurrentDispatcher, _n;
    function $e(l, f, b) {
      {
        if (_n === void 0)
          try {
            throw Error();
          } catch (z) {
            var w = z.stack.trim().match(/\n( *(at )?)/);
            _n = w && w[1] || "";
          }
        return `
` + _n + l;
      }
    }
    var vn = !1, Ye;
    {
      var Ki = typeof WeakMap == "function" ? WeakMap : Map;
      Ye = new Ki();
    }
    function _(l, f) {
      if (!l || vn)
        return "";
      {
        var b = Ye.get(l);
        if (b !== void 0)
          return b;
      }
      var w;
      vn = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = gn.current, gn.current = null, Ji();
      try {
        if (f) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (_t) {
              w = _t;
            }
            Reflect.construct(l, [], P);
          } else {
            try {
              P.call();
            } catch (_t) {
              w = _t;
            }
            l.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            w = _t;
          }
          l();
        }
      } catch (_t) {
        if (_t && w && typeof _t.stack == "string") {
          for (var C = _t.stack.split(`
`), ft = w.stack.split(`
`), ot = C.length - 1, at = ft.length - 1; ot >= 1 && at >= 0 && C[ot] !== ft[at]; )
            at--;
          for (; ot >= 1 && at >= 0; ot--, at--)
            if (C[ot] !== ft[at]) {
              if (ot !== 1 || at !== 1)
                do
                  if (ot--, at--, at < 0 || C[ot] !== ft[at]) {
                    var Nt = `
` + C[ot].replace(" at new ", " at ");
                    return l.displayName && Nt.includes("<anonymous>") && (Nt = Nt.replace("<anonymous>", l.displayName)), typeof l == "function" && Ye.set(l, Nt), Nt;
                  }
                while (ot >= 1 && at >= 0);
              break;
            }
        }
      } finally {
        vn = !1, gn.current = G, Hi(), Error.prepareStackTrace = z;
      }
      var He = l ? l.displayName || l.name : "", Ee = He ? $e(He) : "";
      return typeof l == "function" && Ye.set(l, Ee), Ee;
    }
    function wn(l, f, b) {
      return _(l, !1);
    }
    function We(l) {
      var f = l.prototype;
      return !!(f && f.isReactComponent);
    }
    function Te(l, f, b) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return _(l, We(l));
      if (typeof l == "string")
        return $e(l);
      switch (l) {
        case d:
          return $e("Suspense");
        case h:
          return $e("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return wn(l.render);
          case p:
            return Te(l.type, f, b);
          case v: {
            var w = l, z = w._payload, G = w._init;
            try {
              return Te(G(z), f, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Sn = Object.prototype.hasOwnProperty, es = {}, ns = st.ReactDebugCurrentFrame;
    function ti(l) {
      if (l) {
        var f = l._owner, b = Te(l.type, l._source, f ? f.type : null);
        ns.setExtraStackFrame(b);
      } else
        ns.setExtraStackFrame(null);
    }
    function xa(l, f, b, w, z) {
      {
        var G = Function.call.bind(Sn);
        for (var P in l)
          if (G(l, P)) {
            var C = void 0;
            try {
              if (typeof l[P] != "function") {
                var ft = Error((w || "React class") + ": " + b + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ft.name = "Invariant Violation", ft;
              }
              C = l[P](f, P, w, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ot) {
              C = ot;
            }
            C && !(C instanceof Error) && (ti(z), et("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", b, P, typeof C), ti(null)), C instanceof Error && !(C.message in es) && (es[C.message] = !0, ti(z), et("Failed %s type: %s", b, C.message), ti(null));
          }
      }
    }
    var Na = Array.isArray;
    function Gi(l) {
      return Na(l);
    }
    function Ca(l) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, b = f && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return b;
      }
    }
    function La(l) {
      try {
        return is(l), !1;
      } catch {
        return !0;
      }
    }
    function is(l) {
      return "" + l;
    }
    function rs(l) {
      if (La(l))
        return et("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ca(l)), is(l);
    }
    var ss = st.ReactCurrentOwner, Ua = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, os, as;
    function Pa(l) {
      if (Sn.call(l, "ref")) {
        var f = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function ja(l) {
      if (Sn.call(l, "key")) {
        var f = Object.getOwnPropertyDescriptor(l, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function ka(l, f) {
      typeof l.ref == "string" && ss.current;
    }
    function Va(l, f) {
      {
        var b = function() {
          os || (os = !0, et("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        b.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function za(l, f) {
      {
        var b = function() {
          as || (as = !0, et("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        b.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var $a = function(l, f, b, w, z, G, P) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: f,
        ref: b,
        props: P,
        // Record the component responsible for creating this element.
        _owner: G
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function Ya(l, f, b, w, z) {
      {
        var G, P = {}, C = null, ft = null;
        b !== void 0 && (rs(b), C = "" + b), ja(f) && (rs(f.key), C = "" + f.key), Pa(f) && (ft = f.ref, ka(f, z));
        for (G in f)
          Sn.call(f, G) && !Ua.hasOwnProperty(G) && (P[G] = f[G]);
        if (l && l.defaultProps) {
          var ot = l.defaultProps;
          for (G in ot)
            P[G] === void 0 && (P[G] = ot[G]);
        }
        if (C || ft) {
          var at = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          C && Va(P, at), ft && za(P, at);
        }
        return $a(l, C, ft, z, w, ss.current, P);
      }
    }
    var qi = st.ReactCurrentOwner, cs = st.ReactDebugCurrentFrame;
    function Je(l) {
      if (l) {
        var f = l._owner, b = Te(l.type, l._source, f ? f.type : null);
        cs.setExtraStackFrame(b);
      } else
        cs.setExtraStackFrame(null);
    }
    var Zi;
    Zi = !1;
    function Xi(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function ls() {
      {
        if (qi.current) {
          var l = gt(qi.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Wa(l) {
      return "";
    }
    var us = {};
    function Ja(l) {
      {
        var f = ls();
        if (!f) {
          var b = typeof l == "string" ? l : l.displayName || l.name;
          b && (f = `

Check the top-level render call using <` + b + ">.");
        }
        return f;
      }
    }
    function ds(l, f) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var b = Ja(f);
        if (us[b])
          return;
        us[b] = !0;
        var w = "";
        l && l._owner && l._owner !== qi.current && (w = " It was passed a child from " + gt(l._owner.type) + "."), Je(l), et('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, w), Je(null);
      }
    }
    function hs(l, f) {
      {
        if (typeof l != "object")
          return;
        if (Gi(l))
          for (var b = 0; b < l.length; b++) {
            var w = l[b];
            Xi(w) && ds(w, f);
          }
        else if (Xi(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var z = kt(l);
          if (typeof z == "function" && z !== l.entries)
            for (var G = z.call(l), P; !(P = G.next()).done; )
              Xi(P.value) && ds(P.value, f);
        }
      }
    }
    function Ha(l) {
      {
        var f = l.type;
        if (f == null || typeof f == "string")
          return;
        var b;
        if (typeof f == "function")
          b = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          b = f.propTypes;
        else
          return;
        if (b) {
          var w = gt(f);
          xa(b, l.props, "prop", w, l);
        } else if (f.PropTypes !== void 0 && !Zi) {
          Zi = !0;
          var z = gt(f);
          et("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && et("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ka(l) {
      {
        for (var f = Object.keys(l.props), b = 0; b < f.length; b++) {
          var w = f[b];
          if (w !== "children" && w !== "key") {
            Je(l), et("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Je(null);
            break;
          }
        }
        l.ref !== null && (Je(l), et("Invalid attribute `ref` supplied to `React.Fragment`."), Je(null));
      }
    }
    var fs = {};
    function ps(l, f, b, w, z, G) {
      {
        var P = yn(l);
        if (!P) {
          var C = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ft = Wa();
          ft ? C += ft : C += ls();
          var ot;
          l === null ? ot = "null" : Gi(l) ? ot = "array" : l !== void 0 && l.$$typeof === t ? (ot = "<" + (gt(l.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof l, et("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, C);
        }
        var at = Ya(l, f, b, z, G);
        if (at == null)
          return at;
        if (P) {
          var Nt = f.children;
          if (Nt !== void 0)
            if (w)
              if (Gi(Nt)) {
                for (var He = 0; He < Nt.length; He++)
                  hs(Nt[He], l);
                Object.freeze && Object.freeze(Nt);
              } else
                et("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hs(Nt, l);
        }
        if (Sn.call(f, "key")) {
          var Ee = gt(l), _t = Object.keys(f).filter(function(tc) {
            return tc !== "key";
          }), Qi = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fs[Ee + Qi]) {
            var Qa = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            et(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Qi, Ee, Qa, Ee), fs[Ee + Qi] = !0;
          }
        }
        return l === i ? Ka(at) : Ha(at), at;
      }
    }
    function Ga(l, f, b) {
      return ps(l, f, b, !0);
    }
    function qa(l, f, b) {
      return ps(l, f, b, !1);
    }
    var Za = qa, Xa = Ga;
    Bn.Fragment = i, Bn.jsx = Za, Bn.jsxs = Xa;
  }()), Bn;
}
process.env.NODE_ENV === "production" ? lr.exports = nc() : lr.exports = ic();
var rt = lr.exports, Fn = {}, An = ec;
if (process.env.NODE_ENV === "production")
  Fn.createRoot = An.createRoot, Fn.hydrateRoot = An.hydrateRoot;
else {
  var ei = An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Fn.createRoot = function(n, t) {
    ei.usingClientEntryPoint = !0;
    try {
      return An.createRoot(n, t);
    } finally {
      ei.usingClientEntryPoint = !1;
    }
  }, Fn.hydrateRoot = function(n, t, e) {
    ei.usingClientEntryPoint = !0;
    try {
      return An.hydrateRoot(n, t, e);
    } finally {
      ei.usingClientEntryPoint = !1;
    }
  };
}
var ur = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs;
function rc() {
  if (bs) return $;
  bs = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, o = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, p = n ? Symbol.for("react.suspense") : 60113, v = n ? Symbol.for("react.suspense_list") : 60120, g = n ? Symbol.for("react.memo") : 60115, N = n ? Symbol.for("react.lazy") : 60116, bt = n ? Symbol.for("react.block") : 60121, kt = n ? Symbol.for("react.fundamental") : 60117, st = n ? Symbol.for("react.responder") : 60118, et = n ? Symbol.for("react.scope") : 60119;
  function m(y) {
    if (typeof y == "object" && y !== null) {
      var Q = y.$$typeof;
      switch (Q) {
        case t:
          switch (y = y.type, y) {
            case c:
            case d:
            case i:
            case s:
            case r:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case h:
                case N:
                case g:
                case o:
                  return y;
                default:
                  return Q;
              }
          }
        case e:
          return Q;
      }
    }
  }
  function j(y) {
    return m(y) === d;
  }
  return $.AsyncMode = c, $.ConcurrentMode = d, $.ContextConsumer = a, $.ContextProvider = o, $.Element = t, $.ForwardRef = h, $.Fragment = i, $.Lazy = N, $.Memo = g, $.Portal = e, $.Profiler = s, $.StrictMode = r, $.Suspense = p, $.isAsyncMode = function(y) {
    return j(y) || m(y) === c;
  }, $.isConcurrentMode = j, $.isContextConsumer = function(y) {
    return m(y) === a;
  }, $.isContextProvider = function(y) {
    return m(y) === o;
  }, $.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, $.isForwardRef = function(y) {
    return m(y) === h;
  }, $.isFragment = function(y) {
    return m(y) === i;
  }, $.isLazy = function(y) {
    return m(y) === N;
  }, $.isMemo = function(y) {
    return m(y) === g;
  }, $.isPortal = function(y) {
    return m(y) === e;
  }, $.isProfiler = function(y) {
    return m(y) === s;
  }, $.isStrictMode = function(y) {
    return m(y) === r;
  }, $.isSuspense = function(y) {
    return m(y) === p;
  }, $.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === i || y === d || y === s || y === r || y === p || y === v || typeof y == "object" && y !== null && (y.$$typeof === N || y.$$typeof === g || y.$$typeof === o || y.$$typeof === a || y.$$typeof === h || y.$$typeof === kt || y.$$typeof === st || y.$$typeof === et || y.$$typeof === bt);
  }, $.typeOf = m, $;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs;
function sc() {
  return gs || (gs = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, o = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, p = n ? Symbol.for("react.suspense") : 60113, v = n ? Symbol.for("react.suspense_list") : 60120, g = n ? Symbol.for("react.memo") : 60115, N = n ? Symbol.for("react.lazy") : 60116, bt = n ? Symbol.for("react.block") : 60121, kt = n ? Symbol.for("react.fundamental") : 60117, st = n ? Symbol.for("react.responder") : 60118, et = n ? Symbol.for("react.scope") : 60119;
    function m(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === i || _ === d || _ === s || _ === r || _ === p || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === N || _.$$typeof === g || _.$$typeof === o || _.$$typeof === a || _.$$typeof === h || _.$$typeof === kt || _.$$typeof === st || _.$$typeof === et || _.$$typeof === bt);
    }
    function j(_) {
      if (typeof _ == "object" && _ !== null) {
        var wn = _.$$typeof;
        switch (wn) {
          case t:
            var We = _.type;
            switch (We) {
              case c:
              case d:
              case i:
              case s:
              case r:
              case p:
                return We;
              default:
                var Te = We && We.$$typeof;
                switch (Te) {
                  case a:
                  case h:
                  case N:
                  case g:
                  case o:
                    return Te;
                  default:
                    return wn;
                }
            }
          case e:
            return wn;
        }
      }
    }
    var y = c, Q = d, re = a, dt = o, ht = t, yn = h, Hn = i, ze = N, gt = g, Dt = e, De = s, Kn = r, Gn = p, mn = !1;
    function qn(_) {
      return mn || (mn = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), bn(_) || j(_) === c;
    }
    function bn(_) {
      return j(_) === d;
    }
    function Zn(_) {
      return j(_) === a;
    }
    function Xn(_) {
      return j(_) === o;
    }
    function Qn(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Ji(_) {
      return j(_) === h;
    }
    function Hi(_) {
      return j(_) === i;
    }
    function gn(_) {
      return j(_) === N;
    }
    function _n(_) {
      return j(_) === g;
    }
    function $e(_) {
      return j(_) === e;
    }
    function vn(_) {
      return j(_) === s;
    }
    function Ye(_) {
      return j(_) === r;
    }
    function Ki(_) {
      return j(_) === p;
    }
    Y.AsyncMode = y, Y.ConcurrentMode = Q, Y.ContextConsumer = re, Y.ContextProvider = dt, Y.Element = ht, Y.ForwardRef = yn, Y.Fragment = Hn, Y.Lazy = ze, Y.Memo = gt, Y.Portal = Dt, Y.Profiler = De, Y.StrictMode = Kn, Y.Suspense = Gn, Y.isAsyncMode = qn, Y.isConcurrentMode = bn, Y.isContextConsumer = Zn, Y.isContextProvider = Xn, Y.isElement = Qn, Y.isForwardRef = Ji, Y.isFragment = Hi, Y.isLazy = gn, Y.isMemo = _n, Y.isPortal = $e, Y.isProfiler = vn, Y.isStrictMode = Ye, Y.isSuspense = Ki, Y.isValidElementType = m, Y.typeOf = j;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ur.exports = rc() : ur.exports = sc();
var oc = ur.exports, Vs = oc, ac = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, cc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zs = {};
zs[Vs.ForwardRef] = ac;
zs[Vs.Memo] = cc;
function S(n, t, e, i) {
  function r(s) {
    return s instanceof e ? s : new e(function(o) {
      o(s);
    });
  }
  return new (e || (e = Promise))(function(s, o) {
    function a(h) {
      try {
        d(i.next(h));
      } catch (p) {
        o(p);
      }
    }
    function c(h) {
      try {
        d(i.throw(h));
      } catch (p) {
        o(p);
      }
    }
    function d(h) {
      h.done ? s(h.value) : r(h.value).then(a, c);
    }
    d((i = i.apply(n, t || [])).next());
  });
}
function _s(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && n[t], i = 0;
  if (e) return e.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function R(n) {
  return this instanceof R ? (this.v = n, this) : new R(n);
}
function Qt(n, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = e.apply(n, t || []), r, s = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function o(g) {
    return function(N) {
      return Promise.resolve(N).then(g, p);
    };
  }
  function a(g, N) {
    i[g] && (r[g] = function(bt) {
      return new Promise(function(kt, st) {
        s.push([g, bt, kt, st]) > 1 || c(g, bt);
      });
    }, N && (r[g] = N(r[g])));
  }
  function c(g, N) {
    try {
      d(i[g](N));
    } catch (bt) {
      v(s[0][3], bt);
    }
  }
  function d(g) {
    g.value instanceof R ? Promise.resolve(g.value.v).then(h, p) : v(s[0][2], g);
  }
  function h(g) {
    c("next", g);
  }
  function p(g) {
    c("throw", g);
  }
  function v(g, N) {
    g(N), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function si(n) {
  var t, e;
  return t = {}, i("next"), i("throw", function(r) {
    throw r;
  }), i("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function i(r, s) {
    t[r] = n[r] ? function(o) {
      return (e = !e) ? { value: R(n[r](o)), done: !1 } : s ? s(o) : o;
    } : s;
  }
}
function Pe(n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = n[Symbol.asyncIterator], e;
  return t ? t.call(n) : (n = typeof _s == "function" ? _s(n) : n[Symbol.iterator](), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function i(s) {
    e[s] = n[s] && function(o) {
      return new Promise(function(a, c) {
        o = n[s](o), r(a, c, o.done, o.value);
      });
    };
  }
  function r(s, o, a, c) {
    Promise.resolve(c).then(function(d) {
      s({ value: d, done: a });
    }, o);
  }
}
const lc = new TextDecoder("utf-8"), dr = (n) => lc.decode(n), uc = new TextEncoder(), Or = (n) => uc.encode(n), [td, dc] = (() => {
  const n = () => {
    throw new Error("BigInt is not available in this environment");
  };
  function t() {
    throw n();
  }
  return t.asIntN = () => {
    throw n();
  }, t.asUintN = () => {
    throw n();
  }, typeof BigInt < "u" ? [BigInt, !0] : [t, !1];
})(), [kn] = (() => {
  const n = () => {
    throw new Error("BigInt64Array is not available in this environment");
  };
  class t {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw n();
    }
    static from() {
      throw n();
    }
    constructor() {
      throw n();
    }
  }
  return typeof BigInt64Array < "u" ? [BigInt64Array, !0] : [t, !1];
})(), [Vn] = (() => {
  const n = () => {
    throw new Error("BigUint64Array is not available in this environment");
  };
  class t {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw n();
    }
    static from() {
      throw n();
    }
    constructor() {
      throw n();
    }
  }
  return typeof BigUint64Array < "u" ? [BigUint64Array, !0] : [t, !1];
})(), hc = (n) => typeof n == "number", $s = (n) => typeof n == "boolean", lt = (n) => typeof n == "function", At = (n) => n != null && Object(n) === n, _e = (n) => At(n) && lt(n.then), zn = (n) => At(n) && lt(n[Symbol.iterator]), fn = (n) => At(n) && lt(n[Symbol.asyncIterator]), hr = (n) => At(n) && At(n.schema), Ys = (n) => At(n) && "done" in n && "value" in n, Ws = (n) => At(n) && lt(n.stat) && hc(n.fd), Js = (n) => At(n) && Fr(n.body), zi = (n) => "_getDOMStream" in n && "_getNodeStream" in n, fc = (n) => At(n) && lt(n.abort) && lt(n.getWriter) && !zi(n), Fr = (n) => At(n) && lt(n.cancel) && lt(n.getReader) && !zi(n), pc = (n) => At(n) && lt(n.end) && lt(n.write) && $s(n.writable) && !zi(n), Hs = (n) => At(n) && lt(n.read) && lt(n.pipe) && $s(n.readable) && !zi(n), yc = (n) => At(n) && lt(n.clear) && lt(n.bytes) && lt(n.position) && lt(n.setPosition) && lt(n.capacity) && lt(n.getBufferIdentifier) && lt(n.createLong), Dr = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function mc(n) {
  const t = n[0] ? [n[0]] : [];
  let e, i, r, s;
  for (let o, a, c = 0, d = 0, h = n.length; ++c < h; ) {
    if (o = t[d], a = n[c], !o || !a || o.buffer !== a.buffer || a.byteOffset < o.byteOffset) {
      a && (t[++d] = a);
      continue;
    }
    if ({ byteOffset: e, byteLength: r } = o, { byteOffset: i, byteLength: s } = a, e + r < i || i + s < e) {
      a && (t[++d] = a);
      continue;
    }
    t[d] = new Uint8Array(o.buffer, e, i - e + s);
  }
  return t;
}
function vs(n, t, e = 0, i = t.byteLength) {
  const r = n.byteLength, s = new Uint8Array(n.buffer, n.byteOffset, r), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(i, r));
  return s.set(o, e), n;
}
function ee(n, t) {
  const e = mc(n), i = e.reduce((h, p) => h + p.byteLength, 0);
  let r, s, o, a = 0, c = -1;
  const d = Math.min(t || Number.POSITIVE_INFINITY, i);
  for (const h = e.length; ++c < h; ) {
    if (r = e[c], s = r.subarray(0, Math.min(r.length, d - a)), d <= a + s.length) {
      s.length < r.length ? e[c] = r.subarray(s.length) : s.length === r.length && c++, o ? vs(o, s, a) : o = s;
      break;
    }
    vs(o || (o = new Uint8Array(d)), s, a), a += s.length;
  }
  return [o || new Uint8Array(0), e.slice(c), i - (o ? o.byteLength : 0)];
}
function q(n, t) {
  let e = Ys(t) ? t.value : t;
  return e instanceof n ? n === Uint8Array ? new n(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = Or(e)), e instanceof ArrayBuffer ? new n(e) : e instanceof Dr ? new n(e) : yc(e) ? q(n, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new n(0) : new n(e.buffer, e.byteOffset, e.byteLength / n.BYTES_PER_ELEMENT) : n.from(e)) : new n(0);
}
const On = (n) => q(Int32Array, n), k = (n) => q(Uint8Array, n), fr = (n) => (n.next(), n);
function* bc(n, t) {
  const e = function* (r) {
    yield r;
  }, i = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Dr ? e(t) : zn(t) ? t : e(t);
  return yield* fr(function* (r) {
    let s = null;
    do
      s = r.next(yield q(n, s));
    while (!s.done);
  }(i[Symbol.iterator]())), new n();
}
const gc = (n) => bc(Uint8Array, n);
function Ks(n, t) {
  return Qt(this, arguments, function* () {
    if (_e(t))
      return yield R(yield R(yield* si(Pe(Ks(n, yield R(t))))));
    const i = function(o) {
      return Qt(this, arguments, function* () {
        yield yield R(yield R(o));
      });
    }, r = function(o) {
      return Qt(this, arguments, function* () {
        yield R(yield* si(Pe(fr(function* (a) {
          let c = null;
          do
            c = a.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        }(o[Symbol.iterator]())))));
      });
    }, s = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Dr ? i(t) : zn(t) ? r(t) : fn(t) ? t : i(t);
    return yield R(
      // otherwise if AsyncIterable, use it
      yield* si(Pe(fr(function(o) {
        return Qt(this, arguments, function* () {
          let a = null;
          do
            a = yield R(o.next(yield yield R(q(n, a))));
          while (!a.done);
        });
      }(s[Symbol.asyncIterator]()))))
    ), yield R(new n());
  });
}
const _c = (n) => Ks(Uint8Array, n);
function Tr(n, t, e) {
  if (n !== 0) {
    e = e.slice(0, t + 1);
    for (let i = -1; ++i <= t; )
      e[i] += n;
  }
  return e;
}
function vc(n, t) {
  let e = 0;
  const i = n.length;
  if (i !== t.length)
    return !1;
  if (i > 0)
    do
      if (n[e] !== t[e])
        return !1;
    while (++e < i);
  return !0;
}
const Lt = {
  fromIterable(n) {
    return ni(wc(n));
  },
  fromAsyncIterable(n) {
    return ni(Sc(n));
  },
  fromDOMStream(n) {
    return ni(Ic(n));
  },
  fromNodeStream(n) {
    return ni(Ac(n));
  },
  // @ts-ignore
  toDOMStream(n, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(n, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, ni = (n) => (n.next(), n);
function* wc(n) {
  let t, e = !1, i = [], r, s, o, a = 0;
  function c() {
    return s === "peek" ? ee(i, o)[0] : ([r, i, a] = ee(i, o), r);
  }
  ({ cmd: s, size: o } = yield null);
  const d = gc(n)[Symbol.iterator]();
  try {
    do
      if ({ done: t, value: r } = Number.isNaN(o - a) ? d.next() : d.next(o - a), !t && r.byteLength > 0 && (i.push(r), a += r.byteLength), t || o <= a)
        do
          ({ cmd: s, size: o } = yield c());
        while (o < a);
    while (!t);
  } catch (h) {
    (e = !0) && typeof d.throw == "function" && d.throw(h);
  } finally {
    e === !1 && typeof d.return == "function" && d.return(null);
  }
  return null;
}
function Sc(n) {
  return Qt(this, arguments, function* () {
    let e, i = !1, r = [], s, o, a, c = 0;
    function d() {
      return o === "peek" ? ee(r, a)[0] : ([s, r, c] = ee(r, a), s);
    }
    ({ cmd: o, size: a } = yield yield R(null));
    const h = _c(n)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield R(h.next()) : yield R(h.next(a - c)), !e && s.byteLength > 0 && (r.push(s), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield R(d()));
          while (a < c);
      while (!e);
    } catch (p) {
      (i = !0) && typeof h.throw == "function" && (yield R(h.throw(p)));
    } finally {
      i === !1 && typeof h.return == "function" && (yield R(h.return(new Uint8Array(0))));
    }
    return yield R(null);
  });
}
function Ic(n) {
  return Qt(this, arguments, function* () {
    let e = !1, i = !1, r = [], s, o, a, c = 0;
    function d() {
      return o === "peek" ? ee(r, a)[0] : ([s, r, c] = ee(r, a), s);
    }
    ({ cmd: o, size: a } = yield yield R(null));
    const h = new Bc(n);
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield R(h.read()) : yield R(h.read(a - c)), !e && s.byteLength > 0 && (r.push(k(s)), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield R(d()));
          while (a < c);
      while (!e);
    } catch (p) {
      (i = !0) && (yield R(h.cancel(p)));
    } finally {
      i === !1 ? yield R(h.cancel()) : n.locked && h.releaseLock();
    }
    return yield R(null);
  });
}
class Bc {
  constructor(t) {
    this.source = t, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {
    });
  }
  get closed() {
    return this.reader ? this.reader.closed.catch(() => {
    }) : Promise.resolve();
  }
  releaseLock() {
    this.reader && this.reader.releaseLock(), this.reader = null;
  }
  cancel(t) {
    return S(this, void 0, void 0, function* () {
      const { reader: e, source: i } = this;
      e && (yield e.cancel(t).catch(() => {
      })), i && i.locked && this.releaseLock();
    });
  }
  read(t) {
    return S(this, void 0, void 0, function* () {
      if (t === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      const e = yield this.reader.read();
      return !e.done && (e.value = k(e)), e;
    });
  }
}
const nr = (n, t) => {
  const e = (r) => i([t, r]);
  let i;
  return [t, e, new Promise((r) => (i = r) && n.once(t, e))];
};
function Ac(n) {
  return Qt(this, arguments, function* () {
    const e = [];
    let i = "error", r = !1, s = null, o, a, c = 0, d = [], h;
    function p() {
      return o === "peek" ? ee(d, a)[0] : ([h, d, c] = ee(d, a), h);
    }
    if ({ cmd: o, size: a } = yield yield R(null), n.isTTY)
      return yield yield R(new Uint8Array(0)), yield R(null);
    try {
      e[0] = nr(n, "end"), e[1] = nr(n, "error");
      do {
        if (e[2] = nr(n, "readable"), [i, s] = yield R(Promise.race(e.map((g) => g[2]))), i === "error")
          break;
        if ((r = i === "end") || (Number.isFinite(a - c) ? (h = k(n.read(a - c)), h.byteLength < a - c && (h = k(n.read()))) : h = k(n.read()), h.byteLength > 0 && (d.push(h), c += h.byteLength)), r || a <= c)
          do
            ({ cmd: o, size: a } = yield yield R(p()));
          while (a < c);
      } while (!r);
    } finally {
      yield R(v(e, i === "error" ? s : null));
    }
    return yield R(null);
    function v(g, N) {
      return h = d = null, new Promise((bt, kt) => {
        for (const [st, et] of g)
          n.off(st, et);
        try {
          const st = n.destroy;
          st && st.call(n, N), N = void 0;
        } catch (st) {
          N = st || N;
        } finally {
          N != null ? kt(N) : bt();
        }
      });
    }
  });
}
var Mt;
(function(n) {
  n[n.V1 = 0] = "V1", n[n.V2 = 1] = "V2", n[n.V3 = 2] = "V3", n[n.V4 = 3] = "V4", n[n.V5 = 4] = "V5";
})(Mt || (Mt = {}));
var Rt;
(function(n) {
  n[n.Sparse = 0] = "Sparse", n[n.Dense = 1] = "Dense";
})(Rt || (Rt = {}));
var Bt;
(function(n) {
  n[n.HALF = 0] = "HALF", n[n.SINGLE = 1] = "SINGLE", n[n.DOUBLE = 2] = "DOUBLE";
})(Bt || (Bt = {}));
var fe;
(function(n) {
  n[n.DAY = 0] = "DAY", n[n.MILLISECOND = 1] = "MILLISECOND";
})(fe || (fe = {}));
var V;
(function(n) {
  n[n.SECOND = 0] = "SECOND", n[n.MILLISECOND = 1] = "MILLISECOND", n[n.MICROSECOND = 2] = "MICROSECOND", n[n.NANOSECOND = 3] = "NANOSECOND";
})(V || (V = {}));
var ve;
(function(n) {
  n[n.YEAR_MONTH = 0] = "YEAR_MONTH", n[n.DAY_TIME = 1] = "DAY_TIME", n[n.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(ve || (ve = {}));
var W;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Schema = 1] = "Schema", n[n.DictionaryBatch = 2] = "DictionaryBatch", n[n.RecordBatch = 3] = "RecordBatch", n[n.Tensor = 4] = "Tensor", n[n.SparseTensor = 5] = "SparseTensor";
})(W || (W = {}));
var u;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Null = 1] = "Null", n[n.Int = 2] = "Int", n[n.Float = 3] = "Float", n[n.Binary = 4] = "Binary", n[n.Utf8 = 5] = "Utf8", n[n.Bool = 6] = "Bool", n[n.Decimal = 7] = "Decimal", n[n.Date = 8] = "Date", n[n.Time = 9] = "Time", n[n.Timestamp = 10] = "Timestamp", n[n.Interval = 11] = "Interval", n[n.List = 12] = "List", n[n.Struct = 13] = "Struct", n[n.Union = 14] = "Union", n[n.FixedSizeBinary = 15] = "FixedSizeBinary", n[n.FixedSizeList = 16] = "FixedSizeList", n[n.Map = 17] = "Map", n[n.Dictionary = -1] = "Dictionary", n[n.Int8 = -2] = "Int8", n[n.Int16 = -3] = "Int16", n[n.Int32 = -4] = "Int32", n[n.Int64 = -5] = "Int64", n[n.Uint8 = -6] = "Uint8", n[n.Uint16 = -7] = "Uint16", n[n.Uint32 = -8] = "Uint32", n[n.Uint64 = -9] = "Uint64", n[n.Float16 = -10] = "Float16", n[n.Float32 = -11] = "Float32", n[n.Float64 = -12] = "Float64", n[n.DateDay = -13] = "DateDay", n[n.DateMillisecond = -14] = "DateMillisecond", n[n.TimestampSecond = -15] = "TimestampSecond", n[n.TimestampMillisecond = -16] = "TimestampMillisecond", n[n.TimestampMicrosecond = -17] = "TimestampMicrosecond", n[n.TimestampNanosecond = -18] = "TimestampNanosecond", n[n.TimeSecond = -19] = "TimeSecond", n[n.TimeMillisecond = -20] = "TimeMillisecond", n[n.TimeMicrosecond = -21] = "TimeMicrosecond", n[n.TimeNanosecond = -22] = "TimeNanosecond", n[n.DenseUnion = -23] = "DenseUnion", n[n.SparseUnion = -24] = "SparseUnion", n[n.IntervalDayTime = -25] = "IntervalDayTime", n[n.IntervalYearMonth = -26] = "IntervalYearMonth";
})(u || (u = {}));
var oe;
(function(n) {
  n[n.OFFSET = 0] = "OFFSET", n[n.DATA = 1] = "DATA", n[n.VALIDITY = 2] = "VALIDITY", n[n.TYPE = 3] = "TYPE";
})(oe || (oe = {}));
const Oc = void 0;
function xn(n) {
  if (n === null)
    return "null";
  if (n === Oc)
    return "undefined";
  switch (typeof n) {
    case "number":
      return `${n}`;
    case "bigint":
      return `${n}`;
    case "string":
      return `"${n}"`;
  }
  return typeof n[Symbol.toPrimitive] == "function" ? n[Symbol.toPrimitive]("string") : ArrayBuffer.isView(n) ? n instanceof kn || n instanceof Vn ? `[${[...n].map((t) => xn(t))}]` : `[${n}]` : ArrayBuffer.isView(n) ? `[${n}]` : JSON.stringify(n, (t, e) => typeof e == "bigint" ? `${e}` : e);
}
const Fc = Symbol.for("isArrowBigNum");
function $t(n, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(q(this.TypedArray, n), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(n, ...t), this.constructor.prototype);
}
$t.prototype[Fc] = !0;
$t.prototype.toJSON = function() {
  return `"${je(this)}"`;
};
$t.prototype.valueOf = function() {
  return Gs(this);
};
$t.prototype.toString = function() {
  return je(this);
};
$t.prototype[Symbol.toPrimitive] = function(n = "default") {
  switch (n) {
    case "number":
      return Gs(this);
    case "string":
      return je(this);
    case "default":
      return pr(this);
  }
  return je(this);
};
function tn(...n) {
  return $t.apply(this, n);
}
function en(...n) {
  return $t.apply(this, n);
}
function Nn(...n) {
  return $t.apply(this, n);
}
Object.setPrototypeOf(tn.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(en.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(Nn.prototype, Object.create(Uint32Array.prototype));
Object.assign(tn.prototype, $t.prototype, { constructor: tn, signed: !0, TypedArray: Int32Array, BigIntArray: kn });
Object.assign(en.prototype, $t.prototype, { constructor: en, signed: !1, TypedArray: Uint32Array, BigIntArray: Vn });
Object.assign(Nn.prototype, $t.prototype, { constructor: Nn, signed: !0, TypedArray: Uint32Array, BigIntArray: Vn });
function Gs(n) {
  const { buffer: t, byteOffset: e, length: i, signed: r } = n, s = new Vn(t, e, i), o = r && s[s.length - 1] & BigInt(1) << BigInt(63);
  let a = BigInt(o ? 1 : 0), c = BigInt(0);
  if (o) {
    for (const d of s)
      a += ~d * (BigInt(1) << BigInt(32) * c++);
    a *= BigInt(-1);
  } else
    for (const d of s)
      a += d * (BigInt(1) << BigInt(32) * c++);
  return a;
}
let je, pr;
dc ? (pr = (n) => n.byteLength === 8 ? new n.BigIntArray(n.buffer, n.byteOffset, 1)[0] : ir(n), je = (n) => n.byteLength === 8 ? `${new n.BigIntArray(n.buffer, n.byteOffset, 1)[0]}` : ir(n)) : (je = ir, pr = je);
function ir(n) {
  let t = "";
  const e = new Uint32Array(2);
  let i = new Uint16Array(n.buffer, n.byteOffset, n.byteLength / 2);
  const r = new Uint32Array((i = new Uint16Array(i).reverse()).buffer);
  let s = -1;
  const o = i.length - 1;
  do {
    for (e[0] = i[s = 0]; s < o; )
      i[s++] = e[1] = e[0] / 10, e[0] = (e[0] - e[1] * 10 << 16) + i[s];
    i[s] = e[1] = e[0] / 10, e[0] = e[0] - e[1] * 10, t = `${e[0]}${t}`;
  } while (r[0] || r[1] || r[2] || r[3]);
  return t ?? "0";
}
class Er {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new tn(t);
      case !1:
        return new en(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case kn:
        return new tn(t);
    }
    return t.byteLength === 16 ? new Nn(t) : new en(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new tn(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new en(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new Nn(t);
  }
  constructor(t, e) {
    return Er.new(t, e);
  }
}
var qs, Zs, Xs, Qs, to, eo, no, io, ro, so, oo, ao, co, lo, uo, ho, fo, po, yo;
class I {
  /** @nocollapse */
  static isNull(t) {
    return (t == null ? void 0 : t.typeId) === u.Null;
  }
  /** @nocollapse */
  static isInt(t) {
    return (t == null ? void 0 : t.typeId) === u.Int;
  }
  /** @nocollapse */
  static isFloat(t) {
    return (t == null ? void 0 : t.typeId) === u.Float;
  }
  /** @nocollapse */
  static isBinary(t) {
    return (t == null ? void 0 : t.typeId) === u.Binary;
  }
  /** @nocollapse */
  static isUtf8(t) {
    return (t == null ? void 0 : t.typeId) === u.Utf8;
  }
  /** @nocollapse */
  static isBool(t) {
    return (t == null ? void 0 : t.typeId) === u.Bool;
  }
  /** @nocollapse */
  static isDecimal(t) {
    return (t == null ? void 0 : t.typeId) === u.Decimal;
  }
  /** @nocollapse */
  static isDate(t) {
    return (t == null ? void 0 : t.typeId) === u.Date;
  }
  /** @nocollapse */
  static isTime(t) {
    return (t == null ? void 0 : t.typeId) === u.Time;
  }
  /** @nocollapse */
  static isTimestamp(t) {
    return (t == null ? void 0 : t.typeId) === u.Timestamp;
  }
  /** @nocollapse */
  static isInterval(t) {
    return (t == null ? void 0 : t.typeId) === u.Interval;
  }
  /** @nocollapse */
  static isList(t) {
    return (t == null ? void 0 : t.typeId) === u.List;
  }
  /** @nocollapse */
  static isStruct(t) {
    return (t == null ? void 0 : t.typeId) === u.Struct;
  }
  /** @nocollapse */
  static isUnion(t) {
    return (t == null ? void 0 : t.typeId) === u.Union;
  }
  /** @nocollapse */
  static isFixedSizeBinary(t) {
    return (t == null ? void 0 : t.typeId) === u.FixedSizeBinary;
  }
  /** @nocollapse */
  static isFixedSizeList(t) {
    return (t == null ? void 0 : t.typeId) === u.FixedSizeList;
  }
  /** @nocollapse */
  static isMap(t) {
    return (t == null ? void 0 : t.typeId) === u.Map;
  }
  /** @nocollapse */
  static isDictionary(t) {
    return (t == null ? void 0 : t.typeId) === u.Dictionary;
  }
  /** @nocollapse */
  static isDenseUnion(t) {
    return I.isUnion(t) && t.mode === Rt.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return I.isUnion(t) && t.mode === Rt.Sparse;
  }
  get typeId() {
    return u.NONE;
  }
}
qs = Symbol.toStringTag;
I[qs] = ((n) => (n.children = null, n.ArrayType = Array, n[Symbol.toStringTag] = "DataType"))(I.prototype);
let we = class extends I {
  toString() {
    return "Null";
  }
  get typeId() {
    return u.Null;
  }
};
Zs = Symbol.toStringTag;
we[Zs] = ((n) => n[Symbol.toStringTag] = "Null")(we.prototype);
class Se extends I {
  constructor(t, e) {
    super(), this.isSigned = t, this.bitWidth = e;
  }
  get typeId() {
    return u.Int;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 8:
        return this.isSigned ? Int8Array : Uint8Array;
      case 16:
        return this.isSigned ? Int16Array : Uint16Array;
      case 32:
        return this.isSigned ? Int32Array : Uint32Array;
      case 64:
        return this.isSigned ? kn : Vn;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
  }
}
Xs = Symbol.toStringTag;
Se[Xs] = ((n) => (n.isSigned = null, n.bitWidth = null, n[Symbol.toStringTag] = "Int"))(Se.prototype);
class Cn extends Se {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(Cn.prototype, "ArrayType", { value: Int32Array });
class Ln extends I {
  constructor(t) {
    super(), this.precision = t;
  }
  get typeId() {
    return u.Float;
  }
  get ArrayType() {
    switch (this.precision) {
      case Bt.HALF:
        return Uint16Array;
      case Bt.SINGLE:
        return Float32Array;
      case Bt.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
Qs = Symbol.toStringTag;
Ln[Qs] = ((n) => (n.precision = null, n[Symbol.toStringTag] = "Float"))(Ln.prototype);
let hi = class extends I {
  constructor() {
    super();
  }
  get typeId() {
    return u.Binary;
  }
  toString() {
    return "Binary";
  }
};
to = Symbol.toStringTag;
hi[to] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Binary"))(hi.prototype);
let fi = class extends I {
  constructor() {
    super();
  }
  get typeId() {
    return u.Utf8;
  }
  toString() {
    return "Utf8";
  }
};
eo = Symbol.toStringTag;
fi[eo] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Utf8"))(fi.prototype);
let pi = class extends I {
  constructor() {
    super();
  }
  get typeId() {
    return u.Bool;
  }
  toString() {
    return "Bool";
  }
};
no = Symbol.toStringTag;
pi[no] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Bool"))(pi.prototype);
let yi = class extends I {
  constructor(t, e, i = 128) {
    super(), this.scale = t, this.precision = e, this.bitWidth = i;
  }
  get typeId() {
    return u.Decimal;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
};
io = Symbol.toStringTag;
yi[io] = ((n) => (n.scale = null, n.precision = null, n.ArrayType = Uint32Array, n[Symbol.toStringTag] = "Decimal"))(yi.prototype);
class mi extends I {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return u.Date;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${fe[this.unit]}>`;
  }
}
ro = Symbol.toStringTag;
mi[ro] = ((n) => (n.unit = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Date"))(mi.prototype);
class Un extends I {
  constructor(t, e) {
    super(), this.unit = t, this.bitWidth = e;
  }
  get typeId() {
    return u.Time;
  }
  toString() {
    return `Time${this.bitWidth}<${V[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return kn;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
}
so = Symbol.toStringTag;
Un[so] = ((n) => (n.unit = null, n.bitWidth = null, n[Symbol.toStringTag] = "Time"))(Un.prototype);
class bi extends I {
  constructor(t, e) {
    super(), this.unit = t, this.timezone = e;
  }
  get typeId() {
    return u.Timestamp;
  }
  toString() {
    return `Timestamp<${V[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
oo = Symbol.toStringTag;
bi[oo] = ((n) => (n.unit = null, n.timezone = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Timestamp"))(bi.prototype);
class gi extends I {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return u.Interval;
  }
  toString() {
    return `Interval<${ve[this.unit]}>`;
  }
}
ao = Symbol.toStringTag;
gi[ao] = ((n) => (n.unit = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Interval"))(gi.prototype);
let _i = class extends I {
  constructor(t) {
    super(), this.children = [t];
  }
  get typeId() {
    return u.List;
  }
  toString() {
    return `List<${this.valueType}>`;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
};
co = Symbol.toStringTag;
_i[co] = ((n) => (n.children = null, n[Symbol.toStringTag] = "List"))(_i.prototype);
class yt extends I {
  constructor(t) {
    super(), this.children = t;
  }
  get typeId() {
    return u.Struct;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
lo = Symbol.toStringTag;
yt[lo] = ((n) => (n.children = null, n[Symbol.toStringTag] = "Struct"))(yt.prototype);
class vi extends I {
  constructor(t, e, i) {
    super(), this.mode = t, this.children = i, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((r, s, o) => (r[s] = o) && r || r, /* @__PURE__ */ Object.create(null));
  }
  get typeId() {
    return u.Union;
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
uo = Symbol.toStringTag;
vi[uo] = ((n) => (n.mode = null, n.typeIds = null, n.children = null, n.typeIdToChildIndex = null, n.ArrayType = Int8Array, n[Symbol.toStringTag] = "Union"))(vi.prototype);
let wi = class extends I {
  constructor(t) {
    super(), this.byteWidth = t;
  }
  get typeId() {
    return u.FixedSizeBinary;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
};
ho = Symbol.toStringTag;
wi[ho] = ((n) => (n.byteWidth = null, n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "FixedSizeBinary"))(wi.prototype);
let Si = class extends I {
  constructor(t, e) {
    super(), this.listSize = t, this.children = [e];
  }
  get typeId() {
    return u.FixedSizeList;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
  toString() {
    return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
  }
};
fo = Symbol.toStringTag;
Si[fo] = ((n) => (n.children = null, n.listSize = null, n[Symbol.toStringTag] = "FixedSizeList"))(Si.prototype);
class Ii extends I {
  constructor(t, e = !1) {
    super(), this.children = [t], this.keysSorted = e;
  }
  get typeId() {
    return u.Map;
  }
  get keyType() {
    return this.children[0].type.children[0].type;
  }
  get valueType() {
    return this.children[0].type.children[1].type;
  }
  get childType() {
    return this.children[0].type;
  }
  toString() {
    return `Map<{${this.children[0].type.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
po = Symbol.toStringTag;
Ii[po] = ((n) => (n.children = null, n.keysSorted = null, n[Symbol.toStringTag] = "Map_"))(Ii.prototype);
const Dc = /* @__PURE__ */ ((n) => () => ++n)(-1);
class on extends I {
  constructor(t, e, i, r) {
    super(), this.indices = e, this.dictionary = t, this.isOrdered = r || !1, this.id = i == null ? Dc() : typeof i == "number" ? i : i.low;
  }
  get typeId() {
    return u.Dictionary;
  }
  get children() {
    return this.dictionary.children;
  }
  get valueType() {
    return this.dictionary;
  }
  get ArrayType() {
    return this.dictionary.ArrayType;
  }
  toString() {
    return `Dictionary<${this.indices}, ${this.dictionary}>`;
  }
}
yo = Symbol.toStringTag;
on[yo] = ((n) => (n.id = null, n.indices = null, n.isOrdered = null, n.dictionary = null, n[Symbol.toStringTag] = "Dictionary"))(on.prototype);
function ae(n) {
  const t = n;
  switch (n.typeId) {
    case u.Decimal:
      return n.bitWidth / 32;
    case u.Timestamp:
      return 2;
    case u.Date:
      return 1 + t.unit;
    case u.Interval:
      return 1 + t.unit;
    case u.FixedSizeList:
      return t.listSize;
    case u.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
class U {
  visitMany(t, ...e) {
    return t.map((i, r) => this.visit(i, ...e.map((s) => s[r])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], !1).apply(this, t);
  }
  getVisitFn(t, e = !0) {
    return Tc(this, t, e);
  }
  getVisitFnByTypeId(t, e = !0) {
    return Ge(this, t, e);
  }
  visitNull(t, ...e) {
    return null;
  }
  visitBool(t, ...e) {
    return null;
  }
  visitInt(t, ...e) {
    return null;
  }
  visitFloat(t, ...e) {
    return null;
  }
  visitUtf8(t, ...e) {
    return null;
  }
  visitBinary(t, ...e) {
    return null;
  }
  visitFixedSizeBinary(t, ...e) {
    return null;
  }
  visitDate(t, ...e) {
    return null;
  }
  visitTimestamp(t, ...e) {
    return null;
  }
  visitTime(t, ...e) {
    return null;
  }
  visitDecimal(t, ...e) {
    return null;
  }
  visitList(t, ...e) {
    return null;
  }
  visitStruct(t, ...e) {
    return null;
  }
  visitUnion(t, ...e) {
    return null;
  }
  visitDictionary(t, ...e) {
    return null;
  }
  visitInterval(t, ...e) {
    return null;
  }
  visitFixedSizeList(t, ...e) {
    return null;
  }
  visitMap(t, ...e) {
    return null;
  }
}
function Tc(n, t, e = !0) {
  return typeof t == "number" ? Ge(n, t, e) : typeof t == "string" && t in u ? Ge(n, u[t], e) : t && t instanceof I ? Ge(n, ws(t), e) : t != null && t.type && t.type instanceof I ? Ge(n, ws(t.type), e) : Ge(n, u.NONE, e);
}
function Ge(n, t, e = !0) {
  let i = null;
  switch (t) {
    case u.Null:
      i = n.visitNull;
      break;
    case u.Bool:
      i = n.visitBool;
      break;
    case u.Int:
      i = n.visitInt;
      break;
    case u.Int8:
      i = n.visitInt8 || n.visitInt;
      break;
    case u.Int16:
      i = n.visitInt16 || n.visitInt;
      break;
    case u.Int32:
      i = n.visitInt32 || n.visitInt;
      break;
    case u.Int64:
      i = n.visitInt64 || n.visitInt;
      break;
    case u.Uint8:
      i = n.visitUint8 || n.visitInt;
      break;
    case u.Uint16:
      i = n.visitUint16 || n.visitInt;
      break;
    case u.Uint32:
      i = n.visitUint32 || n.visitInt;
      break;
    case u.Uint64:
      i = n.visitUint64 || n.visitInt;
      break;
    case u.Float:
      i = n.visitFloat;
      break;
    case u.Float16:
      i = n.visitFloat16 || n.visitFloat;
      break;
    case u.Float32:
      i = n.visitFloat32 || n.visitFloat;
      break;
    case u.Float64:
      i = n.visitFloat64 || n.visitFloat;
      break;
    case u.Utf8:
      i = n.visitUtf8;
      break;
    case u.Binary:
      i = n.visitBinary;
      break;
    case u.FixedSizeBinary:
      i = n.visitFixedSizeBinary;
      break;
    case u.Date:
      i = n.visitDate;
      break;
    case u.DateDay:
      i = n.visitDateDay || n.visitDate;
      break;
    case u.DateMillisecond:
      i = n.visitDateMillisecond || n.visitDate;
      break;
    case u.Timestamp:
      i = n.visitTimestamp;
      break;
    case u.TimestampSecond:
      i = n.visitTimestampSecond || n.visitTimestamp;
      break;
    case u.TimestampMillisecond:
      i = n.visitTimestampMillisecond || n.visitTimestamp;
      break;
    case u.TimestampMicrosecond:
      i = n.visitTimestampMicrosecond || n.visitTimestamp;
      break;
    case u.TimestampNanosecond:
      i = n.visitTimestampNanosecond || n.visitTimestamp;
      break;
    case u.Time:
      i = n.visitTime;
      break;
    case u.TimeSecond:
      i = n.visitTimeSecond || n.visitTime;
      break;
    case u.TimeMillisecond:
      i = n.visitTimeMillisecond || n.visitTime;
      break;
    case u.TimeMicrosecond:
      i = n.visitTimeMicrosecond || n.visitTime;
      break;
    case u.TimeNanosecond:
      i = n.visitTimeNanosecond || n.visitTime;
      break;
    case u.Decimal:
      i = n.visitDecimal;
      break;
    case u.List:
      i = n.visitList;
      break;
    case u.Struct:
      i = n.visitStruct;
      break;
    case u.Union:
      i = n.visitUnion;
      break;
    case u.DenseUnion:
      i = n.visitDenseUnion || n.visitUnion;
      break;
    case u.SparseUnion:
      i = n.visitSparseUnion || n.visitUnion;
      break;
    case u.Dictionary:
      i = n.visitDictionary;
      break;
    case u.Interval:
      i = n.visitInterval;
      break;
    case u.IntervalDayTime:
      i = n.visitIntervalDayTime || n.visitInterval;
      break;
    case u.IntervalYearMonth:
      i = n.visitIntervalYearMonth || n.visitInterval;
      break;
    case u.FixedSizeList:
      i = n.visitFixedSizeList;
      break;
    case u.Map:
      i = n.visitMap;
      break;
  }
  if (typeof i == "function")
    return i;
  if (!e)
    return () => null;
  throw new Error(`Unrecognized type '${u[t]}'`);
}
function ws(n) {
  switch (n.typeId) {
    case u.Null:
      return u.Null;
    case u.Int: {
      const { bitWidth: t, isSigned: e } = n;
      switch (t) {
        case 8:
          return e ? u.Int8 : u.Uint8;
        case 16:
          return e ? u.Int16 : u.Uint16;
        case 32:
          return e ? u.Int32 : u.Uint32;
        case 64:
          return e ? u.Int64 : u.Uint64;
      }
      return u.Int;
    }
    case u.Float:
      switch (n.precision) {
        case Bt.HALF:
          return u.Float16;
        case Bt.SINGLE:
          return u.Float32;
        case Bt.DOUBLE:
          return u.Float64;
      }
      return u.Float;
    case u.Binary:
      return u.Binary;
    case u.Utf8:
      return u.Utf8;
    case u.Bool:
      return u.Bool;
    case u.Decimal:
      return u.Decimal;
    case u.Time:
      switch (n.unit) {
        case V.SECOND:
          return u.TimeSecond;
        case V.MILLISECOND:
          return u.TimeMillisecond;
        case V.MICROSECOND:
          return u.TimeMicrosecond;
        case V.NANOSECOND:
          return u.TimeNanosecond;
      }
      return u.Time;
    case u.Timestamp:
      switch (n.unit) {
        case V.SECOND:
          return u.TimestampSecond;
        case V.MILLISECOND:
          return u.TimestampMillisecond;
        case V.MICROSECOND:
          return u.TimestampMicrosecond;
        case V.NANOSECOND:
          return u.TimestampNanosecond;
      }
      return u.Timestamp;
    case u.Date:
      switch (n.unit) {
        case fe.DAY:
          return u.DateDay;
        case fe.MILLISECOND:
          return u.DateMillisecond;
      }
      return u.Date;
    case u.Interval:
      switch (n.unit) {
        case ve.DAY_TIME:
          return u.IntervalDayTime;
        case ve.YEAR_MONTH:
          return u.IntervalYearMonth;
      }
      return u.Interval;
    case u.Map:
      return u.Map;
    case u.List:
      return u.List;
    case u.Struct:
      return u.Struct;
    case u.Union:
      switch (n.mode) {
        case Rt.Dense:
          return u.DenseUnion;
        case Rt.Sparse:
          return u.SparseUnion;
      }
      return u.Union;
    case u.FixedSizeBinary:
      return u.FixedSizeBinary;
    case u.FixedSizeList:
      return u.FixedSizeList;
    case u.Dictionary:
      return u.Dictionary;
  }
  throw new Error(`Unrecognized type '${u[n.typeId]}'`);
}
U.prototype.visitInt8 = null;
U.prototype.visitInt16 = null;
U.prototype.visitInt32 = null;
U.prototype.visitInt64 = null;
U.prototype.visitUint8 = null;
U.prototype.visitUint16 = null;
U.prototype.visitUint32 = null;
U.prototype.visitUint64 = null;
U.prototype.visitFloat16 = null;
U.prototype.visitFloat32 = null;
U.prototype.visitFloat64 = null;
U.prototype.visitDateDay = null;
U.prototype.visitDateMillisecond = null;
U.prototype.visitTimestampSecond = null;
U.prototype.visitTimestampMillisecond = null;
U.prototype.visitTimestampMicrosecond = null;
U.prototype.visitTimestampNanosecond = null;
U.prototype.visitTimeSecond = null;
U.prototype.visitTimeMillisecond = null;
U.prototype.visitTimeMicrosecond = null;
U.prototype.visitTimeNanosecond = null;
U.prototype.visitDenseUnion = null;
U.prototype.visitSparseUnion = null;
U.prototype.visitIntervalDayTime = null;
U.prototype.visitIntervalYearMonth = null;
const mo = new Float64Array(1), Ke = new Uint32Array(mo.buffer);
function bo(n) {
  const t = (n & 31744) >> 10, e = (n & 1023) / 1024, i = Math.pow(-1, (n & 32768) >> 15);
  switch (t) {
    case 31:
      return i * (e ? Number.NaN : 1 / 0);
    case 0:
      return i * (e ? 6103515625e-14 * e : 0);
  }
  return i * Math.pow(2, t - 15) * (1 + e);
}
function Ec(n) {
  if (n !== n)
    return 32256;
  mo[0] = n;
  const t = (Ke[1] & 2147483648) >> 16 & 65535;
  let e = Ke[1] & 2146435072, i = 0;
  return e >= 1089470464 ? Ke[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, i = (Ke[1] & 1048575) >> 10) : e <= 1056964608 ? (i = 1048576 + (Ke[1] & 1048575), i = 1048576 + (i << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, i = (Ke[1] & 1048575) + 512 >> 10), t | e | i & 65535;
}
class D extends U {
}
function M(n) {
  return (t, e, i) => {
    if (t.setValid(e, i != null))
      return n(t, e, i);
  };
}
const Mc = (n, t, e) => {
  n[t] = Math.trunc(e / 864e5);
}, Mr = (n, t, e) => {
  n[t] = Math.trunc(e % 4294967296), n[t + 1] = Math.trunc(e / 4294967296);
}, Rc = (n, t, e) => {
  n[t] = Math.trunc(e * 1e3 % 4294967296), n[t + 1] = Math.trunc(e * 1e3 / 4294967296);
}, xc = (n, t, e) => {
  n[t] = Math.trunc(e * 1e6 % 4294967296), n[t + 1] = Math.trunc(e * 1e6 / 4294967296);
}, go = (n, t, e, i) => {
  if (e + 1 < t.length) {
    const { [e]: r, [e + 1]: s } = t;
    n.set(i.subarray(0, s - r), r);
  }
}, Nc = ({ offset: n, values: t }, e, i) => {
  const r = n + e;
  i ? t[r >> 3] |= 1 << r % 8 : t[r >> 3] &= ~(1 << r % 8);
}, pe = ({ values: n }, t, e) => {
  n[t] = e;
}, Rr = ({ values: n }, t, e) => {
  n[t] = e;
}, _o = ({ values: n }, t, e) => {
  n[t] = Ec(e);
}, Cc = (n, t, e) => {
  switch (n.type.precision) {
    case Bt.HALF:
      return _o(n, t, e);
    case Bt.SINGLE:
    case Bt.DOUBLE:
      return Rr(n, t, e);
  }
}, vo = ({ values: n }, t, e) => {
  Mc(n, t, e.valueOf());
}, wo = ({ values: n }, t, e) => {
  Mr(n, t * 2, e.valueOf());
}, Lc = ({ stride: n, values: t }, e, i) => {
  t.set(i.subarray(0, n), n * e);
}, Uc = ({ values: n, valueOffsets: t }, e, i) => go(n, t, e, i), Pc = ({ values: n, valueOffsets: t }, e, i) => {
  go(n, t, e, Or(i));
}, jc = (n, t, e) => {
  n.type.unit === fe.DAY ? vo(n, t, e) : wo(n, t, e);
}, So = ({ values: n }, t, e) => Mr(n, t * 2, e / 1e3), Io = ({ values: n }, t, e) => Mr(n, t * 2, e), Bo = ({ values: n }, t, e) => Rc(n, t * 2, e), Ao = ({ values: n }, t, e) => xc(n, t * 2, e), kc = (n, t, e) => {
  switch (n.type.unit) {
    case V.SECOND:
      return So(n, t, e);
    case V.MILLISECOND:
      return Io(n, t, e);
    case V.MICROSECOND:
      return Bo(n, t, e);
    case V.NANOSECOND:
      return Ao(n, t, e);
  }
}, Oo = ({ values: n }, t, e) => {
  n[t] = e;
}, Fo = ({ values: n }, t, e) => {
  n[t] = e;
}, Do = ({ values: n }, t, e) => {
  n[t] = e;
}, To = ({ values: n }, t, e) => {
  n[t] = e;
}, Vc = (n, t, e) => {
  switch (n.type.unit) {
    case V.SECOND:
      return Oo(n, t, e);
    case V.MILLISECOND:
      return Fo(n, t, e);
    case V.MICROSECOND:
      return Do(n, t, e);
    case V.NANOSECOND:
      return To(n, t, e);
  }
}, zc = ({ values: n, stride: t }, e, i) => {
  n.set(i.subarray(0, t), t * e);
}, $c = (n, t, e) => {
  const i = n.children[0], r = n.valueOffsets, s = jt.getVisitFn(i);
  if (Array.isArray(e))
    for (let o = -1, a = r[t], c = r[t + 1]; a < c; )
      s(i, a++, e[++o]);
  else
    for (let o = -1, a = r[t], c = r[t + 1]; a < c; )
      s(i, a++, e.get(++o));
}, Yc = (n, t, e) => {
  const i = n.children[0], { valueOffsets: r } = n, s = jt.getVisitFn(i);
  let { [t]: o, [t + 1]: a } = r;
  const c = e instanceof Map ? e.entries() : Object.entries(e);
  for (const d of c)
    if (s(i, o, d), ++o >= a)
      break;
}, Wc = (n, t) => (e, i, r, s) => i && e(i, n, t[s]), Jc = (n, t) => (e, i, r, s) => i && e(i, n, t.get(s)), Hc = (n, t) => (e, i, r, s) => i && e(i, n, t.get(r.name)), Kc = (n, t) => (e, i, r, s) => i && e(i, n, t[r.name]), Gc = (n, t, e) => {
  const i = n.type.children.map((s) => jt.getVisitFn(s.type)), r = e instanceof Map ? Hc(t, e) : e instanceof J ? Jc(t, e) : Array.isArray(e) ? Wc(t, e) : Kc(t, e);
  n.type.children.forEach((s, o) => r(i[o], n.children[o], s, o));
}, qc = (n, t, e) => {
  n.type.mode === Rt.Dense ? Eo(n, t, e) : Mo(n, t, e);
}, Eo = (n, t, e) => {
  const i = n.type.typeIdToChildIndex[n.typeIds[t]], r = n.children[i];
  jt.visit(r, n.valueOffsets[t], e);
}, Mo = (n, t, e) => {
  const i = n.type.typeIdToChildIndex[n.typeIds[t]], r = n.children[i];
  jt.visit(r, t, e);
}, Zc = (n, t, e) => {
  var i;
  (i = n.dictionary) === null || i === void 0 || i.set(n.values[t], e);
}, Xc = (n, t, e) => {
  n.type.unit === ve.DAY_TIME ? Ro(n, t, e) : xo(n, t, e);
}, Ro = ({ values: n }, t, e) => {
  n.set(e.subarray(0, 2), 2 * t);
}, xo = ({ values: n }, t, e) => {
  n[t] = e[0] * 12 + e[1] % 12;
}, Qc = (n, t, e) => {
  const { stride: i } = n, r = n.children[0], s = jt.getVisitFn(r);
  if (Array.isArray(e))
    for (let o = -1, a = t * i; ++o < i; )
      s(r, a + o, e[o]);
  else
    for (let o = -1, a = t * i; ++o < i; )
      s(r, a + o, e.get(o));
};
D.prototype.visitBool = M(Nc);
D.prototype.visitInt = M(pe);
D.prototype.visitInt8 = M(pe);
D.prototype.visitInt16 = M(pe);
D.prototype.visitInt32 = M(pe);
D.prototype.visitInt64 = M(pe);
D.prototype.visitUint8 = M(pe);
D.prototype.visitUint16 = M(pe);
D.prototype.visitUint32 = M(pe);
D.prototype.visitUint64 = M(pe);
D.prototype.visitFloat = M(Cc);
D.prototype.visitFloat16 = M(_o);
D.prototype.visitFloat32 = M(Rr);
D.prototype.visitFloat64 = M(Rr);
D.prototype.visitUtf8 = M(Pc);
D.prototype.visitBinary = M(Uc);
D.prototype.visitFixedSizeBinary = M(Lc);
D.prototype.visitDate = M(jc);
D.prototype.visitDateDay = M(vo);
D.prototype.visitDateMillisecond = M(wo);
D.prototype.visitTimestamp = M(kc);
D.prototype.visitTimestampSecond = M(So);
D.prototype.visitTimestampMillisecond = M(Io);
D.prototype.visitTimestampMicrosecond = M(Bo);
D.prototype.visitTimestampNanosecond = M(Ao);
D.prototype.visitTime = M(Vc);
D.prototype.visitTimeSecond = M(Oo);
D.prototype.visitTimeMillisecond = M(Fo);
D.prototype.visitTimeMicrosecond = M(Do);
D.prototype.visitTimeNanosecond = M(To);
D.prototype.visitDecimal = M(zc);
D.prototype.visitList = M($c);
D.prototype.visitStruct = M(Gc);
D.prototype.visitUnion = M(qc);
D.prototype.visitDenseUnion = M(Eo);
D.prototype.visitSparseUnion = M(Mo);
D.prototype.visitDictionary = M(Zc);
D.prototype.visitInterval = M(Xc);
D.prototype.visitIntervalDayTime = M(Ro);
D.prototype.visitIntervalYearMonth = M(xo);
D.prototype.visitFixedSizeList = M(Qc);
D.prototype.visitMap = M(Yc);
const jt = new D(), Vt = Symbol.for("parent"), nn = Symbol.for("rowIndex");
class xr {
  constructor(t, e) {
    return this[Vt] = t, this[nn] = e, new Proxy(this, new el());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[nn], e = this[Vt], i = e.type.children, r = {};
    for (let s = -1, o = i.length; ++s < o; )
      r[i[s].name] = Ot.visit(e.children[s], t);
    return r;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${xn(t)}: ${xn(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new tl(this[Vt], this[nn]);
  }
}
class tl {
  constructor(t, e) {
    this.childIndex = 0, this.children = t.children, this.rowIndex = e, this.childFields = t.type.children, this.numChildren = this.childFields.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.childIndex;
    return t < this.numChildren ? (this.childIndex = t + 1, {
      done: !1,
      value: [
        this.childFields[t].name,
        Ot.visit(this.children[t], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
}
Object.defineProperties(xr.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Vt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [nn]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
class el {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(t) {
    return t[Vt].type.children.map((e) => e.name);
  }
  has(t, e) {
    return t[Vt].type.children.findIndex((i) => i.name === e) !== -1;
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Vt].type.children.findIndex((i) => i.name === e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const i = t[Vt].type.children.findIndex((r) => r.name === e);
    if (i !== -1) {
      const r = Ot.visit(t[Vt].children[i], t[nn]);
      return Reflect.set(t, e, r), r;
    }
  }
  set(t, e, i) {
    const r = t[Vt].type.children.findIndex((s) => s.name === e);
    return r !== -1 ? (jt.visit(t[Vt].children[r], t[nn], i), Reflect.set(t, e, i)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, i) : !1;
  }
}
class B extends U {
}
function T(n) {
  return (t, e) => t.getValid(e) ? n(t, e) : null;
}
const nl = (n, t) => 864e5 * n[t], Nr = (n, t) => 4294967296 * n[t + 1] + (n[t] >>> 0), il = (n, t) => 4294967296 * (n[t + 1] / 1e3) + (n[t] >>> 0) / 1e3, rl = (n, t) => 4294967296 * (n[t + 1] / 1e6) + (n[t] >>> 0) / 1e6, No = (n) => new Date(n), sl = (n, t) => No(nl(n, t)), ol = (n, t) => No(Nr(n, t)), al = (n, t) => null, Co = (n, t, e) => {
  if (e + 1 >= t.length)
    return null;
  const i = t[e], r = t[e + 1];
  return n.subarray(i, r);
}, cl = ({ offset: n, values: t }, e) => {
  const i = n + e;
  return (t[i >> 3] & 1 << i % 8) !== 0;
}, Lo = ({ values: n }, t) => sl(n, t), Uo = ({ values: n }, t) => ol(n, t * 2), Ae = ({ stride: n, values: t }, e) => t[n * e], ll = ({ stride: n, values: t }, e) => bo(t[n * e]), Po = ({ values: n }, t) => n[t], ul = ({ stride: n, values: t }, e) => t.subarray(n * e, n * (e + 1)), dl = ({ values: n, valueOffsets: t }, e) => Co(n, t, e), hl = ({ values: n, valueOffsets: t }, e) => {
  const i = Co(n, t, e);
  return i !== null ? dr(i) : null;
}, fl = ({ values: n }, t) => n[t], pl = ({ type: n, values: t }, e) => n.precision !== Bt.HALF ? t[e] : bo(t[e]), yl = (n, t) => n.type.unit === fe.DAY ? Lo(n, t) : Uo(n, t), jo = ({ values: n }, t) => 1e3 * Nr(n, t * 2), ko = ({ values: n }, t) => Nr(n, t * 2), Vo = ({ values: n }, t) => il(n, t * 2), zo = ({ values: n }, t) => rl(n, t * 2), ml = (n, t) => {
  switch (n.type.unit) {
    case V.SECOND:
      return jo(n, t);
    case V.MILLISECOND:
      return ko(n, t);
    case V.MICROSECOND:
      return Vo(n, t);
    case V.NANOSECOND:
      return zo(n, t);
  }
}, $o = ({ values: n }, t) => n[t], Yo = ({ values: n }, t) => n[t], Wo = ({ values: n }, t) => n[t], Jo = ({ values: n }, t) => n[t], bl = (n, t) => {
  switch (n.type.unit) {
    case V.SECOND:
      return $o(n, t);
    case V.MILLISECOND:
      return Yo(n, t);
    case V.MICROSECOND:
      return Wo(n, t);
    case V.NANOSECOND:
      return Jo(n, t);
  }
}, gl = ({ values: n, stride: t }, e) => Er.decimal(n.subarray(t * e, t * (e + 1))), _l = (n, t) => {
  const { valueOffsets: e, stride: i, children: r } = n, { [t * i]: s, [t * i + 1]: o } = e, c = r[0].slice(s, o - s);
  return new J([c]);
}, vl = (n, t) => {
  const { valueOffsets: e, children: i } = n, { [t]: r, [t + 1]: s } = e, o = i[0];
  return new Cr(o.slice(r, s - r));
}, wl = (n, t) => new xr(n, t), Sl = (n, t) => n.type.mode === Rt.Dense ? Ho(n, t) : Ko(n, t), Ho = (n, t) => {
  const e = n.type.typeIdToChildIndex[n.typeIds[t]], i = n.children[e];
  return Ot.visit(i, n.valueOffsets[t]);
}, Ko = (n, t) => {
  const e = n.type.typeIdToChildIndex[n.typeIds[t]], i = n.children[e];
  return Ot.visit(i, t);
}, Il = (n, t) => {
  var e;
  return (e = n.dictionary) === null || e === void 0 ? void 0 : e.get(n.values[t]);
}, Bl = (n, t) => n.type.unit === ve.DAY_TIME ? Go(n, t) : qo(n, t), Go = ({ values: n }, t) => n.subarray(2 * t, 2 * (t + 1)), qo = ({ values: n }, t) => {
  const e = n[t], i = new Int32Array(2);
  return i[0] = Math.trunc(e / 12), i[1] = Math.trunc(e % 12), i;
}, Al = (n, t) => {
  const { stride: e, children: i } = n, s = i[0].slice(t * e, e);
  return new J([s]);
};
B.prototype.visitNull = T(al);
B.prototype.visitBool = T(cl);
B.prototype.visitInt = T(fl);
B.prototype.visitInt8 = T(Ae);
B.prototype.visitInt16 = T(Ae);
B.prototype.visitInt32 = T(Ae);
B.prototype.visitInt64 = T(Po);
B.prototype.visitUint8 = T(Ae);
B.prototype.visitUint16 = T(Ae);
B.prototype.visitUint32 = T(Ae);
B.prototype.visitUint64 = T(Po);
B.prototype.visitFloat = T(pl);
B.prototype.visitFloat16 = T(ll);
B.prototype.visitFloat32 = T(Ae);
B.prototype.visitFloat64 = T(Ae);
B.prototype.visitUtf8 = T(hl);
B.prototype.visitBinary = T(dl);
B.prototype.visitFixedSizeBinary = T(ul);
B.prototype.visitDate = T(yl);
B.prototype.visitDateDay = T(Lo);
B.prototype.visitDateMillisecond = T(Uo);
B.prototype.visitTimestamp = T(ml);
B.prototype.visitTimestampSecond = T(jo);
B.prototype.visitTimestampMillisecond = T(ko);
B.prototype.visitTimestampMicrosecond = T(Vo);
B.prototype.visitTimestampNanosecond = T(zo);
B.prototype.visitTime = T(bl);
B.prototype.visitTimeSecond = T($o);
B.prototype.visitTimeMillisecond = T(Yo);
B.prototype.visitTimeMicrosecond = T(Wo);
B.prototype.visitTimeNanosecond = T(Jo);
B.prototype.visitDecimal = T(gl);
B.prototype.visitList = T(_l);
B.prototype.visitStruct = T(wl);
B.prototype.visitUnion = T(Sl);
B.prototype.visitDenseUnion = T(Ho);
B.prototype.visitSparseUnion = T(Ko);
B.prototype.visitDictionary = T(Il);
B.prototype.visitInterval = T(Bl);
B.prototype.visitIntervalDayTime = T(Go);
B.prototype.visitIntervalYearMonth = T(qo);
B.prototype.visitFixedSizeList = T(Al);
B.prototype.visitMap = T(vl);
const Ot = new B(), Ht = Symbol.for("keys"), rn = Symbol.for("vals");
class Cr {
  constructor(t) {
    return this[Ht] = new J([t.children[0]]).memoize(), this[rn] = t.children[1], new Proxy(this, new Fl());
  }
  [Symbol.iterator]() {
    return new Ol(this[Ht], this[rn]);
  }
  get size() {
    return this[Ht].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Ht], e = this[rn], i = {};
    for (let r = -1, s = t.length; ++r < s; )
      i[t.get(r)] = Ot.visit(e, r);
    return i;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${xn(t)}: ${xn(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class Ol {
  constructor(t, e) {
    this.keys = t, this.vals = e, this.keyIndex = 0, this.numKeys = t.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.keyIndex;
    return t === this.numKeys ? { done: !0, value: null } : (this.keyIndex++, {
      done: !1,
      value: [
        this.keys.get(t),
        Ot.visit(this.vals, t)
      ]
    });
  }
}
class Fl {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(t) {
    return t[Ht].toArray().map(String);
  }
  has(t, e) {
    return t[Ht].includes(e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Ht].indexOf(e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const i = t[Ht].indexOf(e);
    if (i !== -1) {
      const r = Ot.visit(Reflect.get(t, rn), i);
      return Reflect.set(t, e, r), r;
    }
  }
  set(t, e, i) {
    const r = t[Ht].indexOf(e);
    return r !== -1 ? (jt.visit(Reflect.get(t, rn), r, i), Reflect.set(t, e, i)) : Reflect.has(t, e) ? Reflect.set(t, e, i) : !1;
  }
}
Object.defineProperties(Cr.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Ht]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [rn]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let Ss;
function Zo(n, t, e, i) {
  const { length: r = 0 } = n;
  let s = typeof t != "number" ? 0 : t, o = typeof e != "number" ? r : e;
  return s < 0 && (s = (s % r + r) % r), o < 0 && (o = (o % r + r) % r), o < s && (Ss = s, s = o, o = Ss), o > r && (o = r), i ? i(n, s, o) : [s, o];
}
const Is = (n) => n !== n;
function pn(n) {
  if (typeof n !== "object" || n === null)
    return Is(n) ? Is : (e) => e === n;
  if (n instanceof Date) {
    const e = n.valueOf();
    return (i) => i instanceof Date ? i.valueOf() === e : !1;
  }
  return ArrayBuffer.isView(n) ? (e) => e ? vc(n, e) : !1 : n instanceof Map ? Tl(n) : Array.isArray(n) ? Dl(n) : n instanceof J ? El(n) : Ml(n, !0);
}
function Dl(n) {
  const t = [];
  for (let e = -1, i = n.length; ++e < i; )
    t[e] = pn(n[e]);
  return $i(t);
}
function Tl(n) {
  let t = -1;
  const e = [];
  for (const i of n.values())
    e[++t] = pn(i);
  return $i(e);
}
function El(n) {
  const t = [];
  for (let e = -1, i = n.length; ++e < i; )
    t[e] = pn(n.get(e));
  return $i(t);
}
function Ml(n, t = !1) {
  const e = Object.keys(n);
  if (!t && e.length === 0)
    return () => !1;
  const i = [];
  for (let r = -1, s = e.length; ++r < s; )
    i[r] = pn(n[e[r]]);
  return $i(i, e);
}
function $i(n, t) {
  return (e) => {
    if (!e || typeof e != "object")
      return !1;
    switch (e.constructor) {
      case Array:
        return Rl(n, e);
      case Map:
        return Bs(n, e, e.keys());
      case Cr:
      case xr:
      case Object:
      case void 0:
        return Bs(n, e, t || Object.keys(e));
    }
    return e instanceof J ? xl(n, e) : !1;
  };
}
function Rl(n, t) {
  const e = n.length;
  if (t.length !== e)
    return !1;
  for (let i = -1; ++i < e; )
    if (!n[i](t[i]))
      return !1;
  return !0;
}
function xl(n, t) {
  const e = n.length;
  if (t.length !== e)
    return !1;
  for (let i = -1; ++i < e; )
    if (!n[i](t.get(i)))
      return !1;
  return !0;
}
function Bs(n, t, e) {
  const i = e[Symbol.iterator](), r = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), s = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const a = n.length;
  let c = s.next(), d = i.next(), h = r.next();
  for (; o < a && !d.done && !h.done && !c.done && !(d.value !== h.value || !n[o](c.value)); ++o, d = i.next(), h = r.next(), c = s.next())
    ;
  return o === a && d.done && h.done && c.done ? !0 : (i.return && i.return(), r.return && r.return(), s.return && s.return(), !1);
}
function Xo(n, t, e, i) {
  return (e & 1 << i) !== 0;
}
function Nl(n, t, e, i) {
  return (e & 1 << i) >> i;
}
function Lr(n, t, e) {
  const i = e.byteLength + 7 & -8;
  if (n > 0 || e.byteLength < i) {
    const r = new Uint8Array(i);
    return r.set(n % 8 === 0 ? e.subarray(n >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      Bi(new Ur(e, n, t, null, Xo)).subarray(0, i)
    )), r;
  }
  return e;
}
function Bi(n) {
  const t = [];
  let e = 0, i = 0, r = 0;
  for (const o of n)
    o && (r |= 1 << i), ++i === 8 && (t[e++] = r, r = i = 0);
  (e === 0 || i > 0) && (t[e++] = r);
  const s = new Uint8Array(t.length + 7 & -8);
  return s.set(t), s;
}
class Ur {
  constructor(t, e, i, r, s) {
    this.bytes = t, this.length = i, this.context = r, this.get = s, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0;
  }
  next() {
    return this.index < this.length ? (this.bit === 8 && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), {
      value: this.get(this.context, this.index++, this.byte, this.bit++)
    }) : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function yr(n, t, e) {
  if (e - t <= 0)
    return 0;
  if (e - t < 8) {
    let s = 0;
    for (const o of new Ur(n, t, e - t, n, Nl))
      s += o;
    return s;
  }
  const i = e >> 3 << 3, r = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    yr(n, t, r) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    yr(n, i, e) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    Cl(n, r >> 3, i - r >> 3)
  );
}
function Cl(n, t, e) {
  let i = 0, r = Math.trunc(t);
  const s = new DataView(n.buffer, n.byteOffset, n.byteLength), o = e === void 0 ? n.byteLength : r + e;
  for (; o - r >= 4; )
    i += rr(s.getUint32(r)), r += 4;
  for (; o - r >= 2; )
    i += rr(s.getUint16(r)), r += 2;
  for (; o - r >= 1; )
    i += rr(s.getUint8(r)), r += 1;
  return i;
}
function rr(n) {
  let t = Math.trunc(n);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const Ll = -1;
class X {
  constructor(t, e, i, r, s, o = [], a) {
    this.type = t, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(i || 0, 0)), this._nullCount = Math.floor(Math.max(r || 0, -1));
    let c;
    s instanceof X ? (this.stride = s.stride, this.values = s.values, this.typeIds = s.typeIds, this.nullBitmap = s.nullBitmap, this.valueOffsets = s.valueOffsets) : (this.stride = ae(t), s && ((c = s[0]) && (this.valueOffsets = c), (c = s[1]) && (this.values = c), (c = s[2]) && (this.nullBitmap = c), (c = s[3]) && (this.typeIds = c))), this.nullable = this._nullCount !== 0 && this.nullBitmap && this.nullBitmap.byteLength > 0;
  }
  get typeId() {
    return this.type.typeId;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get buffers() {
    return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: e, values: i, nullBitmap: r, typeIds: s } = this;
    return e && (t += e.byteLength), i && (t += i.byteLength), r && (t += r.byteLength), s && (t += s.byteLength), this.children.reduce((o, a) => o + a.byteLength, t);
  }
  get nullCount() {
    let t = this._nullCount, e;
    return t <= Ll && (e = this.nullBitmap) && (this._nullCount = t = this.length - yr(e, this.offset, this.offset + this.length)), t;
  }
  getValid(t) {
    if (this.nullable && this.nullCount > 0) {
      const e = this.offset + t;
      return (this.nullBitmap[e >> 3] & 1 << e % 8) !== 0;
    }
    return !0;
  }
  setValid(t, e) {
    if (!this.nullable)
      return e;
    if (!this.nullBitmap || this.nullBitmap.byteLength <= t >> 3) {
      const { nullBitmap: c } = this._changeLengthAndBackfillNullBitmap(this.length);
      Object.assign(this, { nullBitmap: c, _nullCount: 0 });
    }
    const { nullBitmap: i, offset: r } = this, s = r + t >> 3, o = (r + t) % 8, a = i[s] >> o & 1;
    return e ? a === 0 && (i[s] |= 1 << o, this._nullCount = this.nullCount + 1) : a === 1 && (i[s] &= ~(1 << o), this._nullCount = this.nullCount - 1), e;
  }
  clone(t = this.type, e = this.offset, i = this.length, r = this._nullCount, s = this, o = this.children) {
    return new X(t, e, i, r, s, o, this.dictionary);
  }
  slice(t, e) {
    const { stride: i, typeId: r, children: s } = this, o = +(this._nullCount === 0) - 1, a = r === 16 ? i : 1, c = this._sliceBuffers(t, e, i, r);
    return this.clone(
      this.type,
      this.offset + t,
      e,
      o,
      c,
      // Don't slice children if we have value offsets (the variable-width types)
      s.length === 0 || this.valueOffsets ? s : this._sliceChildren(s, a * t, a * e)
    );
  }
  _changeLengthAndBackfillNullBitmap(t) {
    if (this.typeId === u.Null)
      return this.clone(this.type, 0, t, 0);
    const { length: e, nullCount: i } = this, r = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
    r[e >> 3] = (1 << e - (e & -8)) - 1, i > 0 && r.set(Lr(this.offset, e, this.nullBitmap), 0);
    const s = this.buffers;
    return s[oe.VALIDITY] = r, this.clone(this.type, 0, t, i + (t - e), s);
  }
  _sliceBuffers(t, e, i, r) {
    let s;
    const { buffers: o } = this;
    return (s = o[oe.TYPE]) && (o[oe.TYPE] = s.subarray(t, t + e)), (s = o[oe.OFFSET]) && (o[oe.OFFSET] = s.subarray(t, t + e + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (s = o[oe.DATA]) && (o[oe.DATA] = r === 6 ? s : s.subarray(i * t, i * (t + e))), o;
  }
  _sliceChildren(t, e, i) {
    return t.map((r) => r.slice(e, i));
  }
}
X.prototype.children = Object.freeze([]);
class En extends U {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["length"]: r = 0 } = t;
    return new X(e, i, r, 0);
  }
  visitBool(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.ArrayType, t.data), { ["length"]: o = s.length >> 3, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, s, r]);
  }
  visitInt(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, s, r]);
  }
  visitFloat(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, s, r]);
  }
  visitUtf8(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.data), s = k(t.nullBitmap), o = On(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, a, c, [o, r, s]);
  }
  visitBinary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.data), s = k(t.nullBitmap), o = On(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, a, c, [o, r, s]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.ArrayType, t.data), { ["length"]: o = s.length / ae(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, s, r]);
  }
  visitDate(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.ArrayType, t.data), { ["length"]: o = s.length / ae(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, s, r]);
  }
  visitTimestamp(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.ArrayType, t.data), { ["length"]: o = s.length / ae(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, s, r]);
  }
  visitTime(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.ArrayType, t.data), { ["length"]: o = s.length / ae(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, s, r]);
  }
  visitDecimal(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.ArrayType, t.data), { ["length"]: o = s.length / ae(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, s, r]);
  }
  visitList(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: r } = t, s = k(t.nullBitmap), o = On(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, a, c, [o, void 0, s], [r]);
  }
  visitStruct(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["children"]: r = [] } = t, s = k(t.nullBitmap), { length: o = r.reduce((c, { length: d }) => Math.max(c, d), 0), nullCount: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, void 0, s], r);
  }
  visitUnion(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["children"]: r = [] } = t, s = k(t.nullBitmap), o = q(e.ArrayType, t.typeIds), { ["length"]: a = o.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    if (I.isSparseUnion(e))
      return new X(e, i, a, c, [void 0, void 0, s, o], r);
    const d = On(t.valueOffsets);
    return new X(e, i, a, c, [d, void 0, s, o], r);
  }
  visitDictionary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.indices.ArrayType, t.data), { ["dictionary"]: o = new J([new En().visit({ type: e.dictionary })]) } = t, { ["length"]: a = s.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, a, c, [void 0, s, r], [], o);
  }
  visitInterval(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = q(e.ArrayType, t.data), { ["length"]: o = s.length / ae(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, s, r]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: r = new En().visit({ type: e.valueType }) } = t, s = k(t.nullBitmap), { ["length"]: o = r.length / ae(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, o, a, [void 0, void 0, s], [r]);
  }
  visitMap(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: r = new En().visit({ type: e.childType }) } = t, s = k(t.nullBitmap), o = On(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new X(e, i, a, c, [o, void 0, s], [r]);
  }
}
function L(n) {
  return new En().visit(n);
}
class As {
  constructor(t = 0, e) {
    this.numChunks = t, this.getChunkIterator = e, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
  }
  next() {
    for (; this.chunkIndex < this.numChunks; ) {
      const t = this.chunkIterator.next();
      if (!t.done)
        return t;
      ++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
    }
    return { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function Qo(n) {
  return n.reduce((t, e) => t + e.nullCount, 0);
}
function ta(n) {
  return n.reduce((t, e, i) => (t[i + 1] = t[i] + e.length, t), new Uint32Array(n.length + 1));
}
function ea(n, t, e, i) {
  const r = [];
  for (let s = -1, o = n.length; ++s < o; ) {
    const a = n[s], c = t[s], { length: d } = a;
    if (c >= i)
      break;
    if (e >= c + d)
      continue;
    if (c >= e && c + d <= i) {
      r.push(a);
      continue;
    }
    const h = Math.max(0, e - c), p = Math.min(i - c, d);
    r.push(a.slice(h, p - h));
  }
  return r.length === 0 && r.push(n[0].slice(0, 0)), r;
}
function Pr(n, t, e, i) {
  let r = 0, s = 0, o = t.length - 1;
  do {
    if (r >= o - 1)
      return e < t[o] ? i(n, r, e - t[r]) : null;
    s = r + Math.trunc((o - r) * 0.5), e < t[s] ? o = s : r = s;
  } while (r < o);
}
function jr(n, t) {
  return n.getValid(t);
}
function sn(n) {
  function t(e, i, r) {
    return n(e[i], r);
  }
  return function(e) {
    const i = this.data;
    return Pr(i, this._offsets, e, t);
  };
}
function na(n) {
  let t;
  function e(i, r, s) {
    return n(i[r], s, t);
  }
  return function(i, r) {
    const s = this.data;
    t = r;
    const o = Pr(s, this._offsets, i, e);
    return t = void 0, o;
  };
}
function ia(n) {
  let t;
  function e(i, r, s) {
    let o = s, a = 0, c = 0;
    for (let d = r - 1, h = i.length; ++d < h; ) {
      const p = i[d];
      if (~(a = n(p, t, o)))
        return c + a;
      o = 0, c += p.length;
    }
    return -1;
  }
  return function(i, r) {
    t = i;
    const s = this.data, o = typeof r != "number" ? e(s, 0, 0) : Pr(s, this._offsets, r, e);
    return t = void 0, o;
  };
}
class A extends U {
}
function Ul(n, t) {
  return t === null && n.length > 0 ? 0 : -1;
}
function Pl(n, t) {
  const { nullBitmap: e } = n;
  if (!e || n.nullCount <= 0)
    return -1;
  let i = 0;
  for (const r of new Ur(e, n.offset + (t || 0), n.length, e, Xo)) {
    if (!r)
      return i;
    ++i;
  }
  return -1;
}
function x(n, t, e) {
  if (t === void 0)
    return -1;
  if (t === null)
    return Pl(n, e);
  const i = Ot.getVisitFn(n), r = pn(t);
  for (let s = (e || 0) - 1, o = n.length; ++s < o; )
    if (r(i(n, s)))
      return s;
  return -1;
}
function ra(n, t, e) {
  const i = Ot.getVisitFn(n), r = pn(t);
  for (let s = (e || 0) - 1, o = n.length; ++s < o; )
    if (r(i(n, s)))
      return s;
  return -1;
}
A.prototype.visitNull = Ul;
A.prototype.visitBool = x;
A.prototype.visitInt = x;
A.prototype.visitInt8 = x;
A.prototype.visitInt16 = x;
A.prototype.visitInt32 = x;
A.prototype.visitInt64 = x;
A.prototype.visitUint8 = x;
A.prototype.visitUint16 = x;
A.prototype.visitUint32 = x;
A.prototype.visitUint64 = x;
A.prototype.visitFloat = x;
A.prototype.visitFloat16 = x;
A.prototype.visitFloat32 = x;
A.prototype.visitFloat64 = x;
A.prototype.visitUtf8 = x;
A.prototype.visitBinary = x;
A.prototype.visitFixedSizeBinary = x;
A.prototype.visitDate = x;
A.prototype.visitDateDay = x;
A.prototype.visitDateMillisecond = x;
A.prototype.visitTimestamp = x;
A.prototype.visitTimestampSecond = x;
A.prototype.visitTimestampMillisecond = x;
A.prototype.visitTimestampMicrosecond = x;
A.prototype.visitTimestampNanosecond = x;
A.prototype.visitTime = x;
A.prototype.visitTimeSecond = x;
A.prototype.visitTimeMillisecond = x;
A.prototype.visitTimeMicrosecond = x;
A.prototype.visitTimeNanosecond = x;
A.prototype.visitDecimal = x;
A.prototype.visitList = x;
A.prototype.visitStruct = x;
A.prototype.visitUnion = x;
A.prototype.visitDenseUnion = ra;
A.prototype.visitSparseUnion = ra;
A.prototype.visitDictionary = x;
A.prototype.visitInterval = x;
A.prototype.visitIntervalDayTime = x;
A.prototype.visitIntervalYearMonth = x;
A.prototype.visitFixedSizeList = x;
A.prototype.visitMap = x;
const Ai = new A();
class O extends U {
}
function E(n) {
  const { type: t } = n;
  if (n.nullCount === 0 && n.stride === 1 && (t.typeId === u.Timestamp || t instanceof Se && t.bitWidth !== 64 || t instanceof Un && t.bitWidth !== 64 || t instanceof Ln && t.precision !== Bt.HALF))
    return new As(n.data.length, (i) => {
      const r = n.data[i];
      return r.values.subarray(0, r.length)[Symbol.iterator]();
    });
  let e = 0;
  return new As(n.data.length, (i) => {
    const s = n.data[i].length, o = n.slice(e, e + s);
    return e += s, new jl(o);
  });
}
class jl {
  constructor(t) {
    this.vector = t, this.index = 0;
  }
  next() {
    return this.index < this.vector.length ? {
      value: this.vector.get(this.index++)
    } : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
O.prototype.visitNull = E;
O.prototype.visitBool = E;
O.prototype.visitInt = E;
O.prototype.visitInt8 = E;
O.prototype.visitInt16 = E;
O.prototype.visitInt32 = E;
O.prototype.visitInt64 = E;
O.prototype.visitUint8 = E;
O.prototype.visitUint16 = E;
O.prototype.visitUint32 = E;
O.prototype.visitUint64 = E;
O.prototype.visitFloat = E;
O.prototype.visitFloat16 = E;
O.prototype.visitFloat32 = E;
O.prototype.visitFloat64 = E;
O.prototype.visitUtf8 = E;
O.prototype.visitBinary = E;
O.prototype.visitFixedSizeBinary = E;
O.prototype.visitDate = E;
O.prototype.visitDateDay = E;
O.prototype.visitDateMillisecond = E;
O.prototype.visitTimestamp = E;
O.prototype.visitTimestampSecond = E;
O.prototype.visitTimestampMillisecond = E;
O.prototype.visitTimestampMicrosecond = E;
O.prototype.visitTimestampNanosecond = E;
O.prototype.visitTime = E;
O.prototype.visitTimeSecond = E;
O.prototype.visitTimeMillisecond = E;
O.prototype.visitTimeMicrosecond = E;
O.prototype.visitTimeNanosecond = E;
O.prototype.visitDecimal = E;
O.prototype.visitList = E;
O.prototype.visitStruct = E;
O.prototype.visitUnion = E;
O.prototype.visitDenseUnion = E;
O.prototype.visitSparseUnion = E;
O.prototype.visitDictionary = E;
O.prototype.visitInterval = E;
O.prototype.visitIntervalDayTime = E;
O.prototype.visitIntervalYearMonth = E;
O.prototype.visitFixedSizeList = E;
O.prototype.visitMap = E;
const kr = new O(), kl = (n, t) => n + t;
class Oe extends U {
  visitNull(t, e) {
    return 0;
  }
  visitInt(t, e) {
    return t.type.bitWidth / 8;
  }
  visitFloat(t, e) {
    return t.type.ArrayType.BYTES_PER_ELEMENT;
  }
  visitBool(t, e) {
    return 1 / 8;
  }
  visitDecimal(t, e) {
    return t.type.bitWidth / 8;
  }
  visitDate(t, e) {
    return (t.type.unit + 1) * 4;
  }
  visitTime(t, e) {
    return t.type.bitWidth / 8;
  }
  visitTimestamp(t, e) {
    return t.type.unit === V.SECOND ? 4 : 8;
  }
  visitInterval(t, e) {
    return (t.type.unit + 1) * 4;
  }
  visitStruct(t, e) {
    return t.children.reduce((i, r) => i + ne.visit(r, e), 0);
  }
  visitFixedSizeBinary(t, e) {
    return t.type.byteWidth;
  }
  visitMap(t, e) {
    return 8 + t.children.reduce((i, r) => i + ne.visit(r, e), 0);
  }
  visitDictionary(t, e) {
    var i;
    return t.type.indices.bitWidth / 8 + (((i = t.dictionary) === null || i === void 0 ? void 0 : i.getByteLength(t.values[e])) || 0);
  }
}
const Vl = ({ valueOffsets: n }, t) => 8 + (n[t + 1] - n[t]), zl = ({ valueOffsets: n }, t) => 8 + (n[t + 1] - n[t]), $l = ({ valueOffsets: n, stride: t, children: e }, i) => {
  const r = e[0], { [i * t]: s } = n, { [i * t + 1]: o } = n, a = ne.getVisitFn(r.type), c = r.slice(s, o - s);
  let d = 8;
  for (let h = -1, p = o - s; ++h < p; )
    d += a(c, h);
  return d;
}, Yl = ({ stride: n, children: t }, e) => {
  const i = t[0], r = i.slice(e * n, n), s = ne.getVisitFn(i.type);
  let o = 0;
  for (let a = -1, c = r.length; ++a < c; )
    o += s(r, a);
  return o;
}, Wl = (n, t) => n.type.mode === Rt.Dense ? sa(n, t) : oa(n, t), sa = ({ type: n, children: t, typeIds: e, valueOffsets: i }, r) => {
  const s = n.typeIdToChildIndex[e[r]];
  return 8 + ne.visit(t[s], i[r]);
}, oa = ({ children: n }, t) => 4 + ne.visitMany(n, n.map(() => t)).reduce(kl, 0);
Oe.prototype.visitUtf8 = Vl;
Oe.prototype.visitBinary = zl;
Oe.prototype.visitList = $l;
Oe.prototype.visitFixedSizeList = Yl;
Oe.prototype.visitUnion = Wl;
Oe.prototype.visitDenseUnion = sa;
Oe.prototype.visitSparseUnion = oa;
const ne = new Oe();
var aa;
const ca = {}, la = {};
class J {
  constructor(t) {
    var e, i, r;
    const s = t[0] instanceof J ? t.flatMap((a) => a.data) : t;
    if (s.length === 0 || s.some((a) => !(a instanceof X)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (e = s[0]) === null || e === void 0 ? void 0 : e.type;
    switch (s.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: c, indexOf: d, byteLength: h } = ca[o.typeId], p = s[0];
        this.isValid = (v) => jr(p, v), this.get = (v) => a(p, v), this.set = (v, g) => c(p, v, g), this.indexOf = (v) => d(p, v), this.getByteLength = (v) => h(p, v), this._offsets = [0, p.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, la[o.typeId]), this._offsets = ta(s);
        break;
    }
    this.data = s, this.type = o, this.stride = ae(o), this.numChildren = (r = (i = o.children) === null || i === void 0 ? void 0 : i.length) !== null && r !== void 0 ? r : 0, this.length = this._offsets[this._offsets.length - 1];
  }
  /**
   * The aggregate size (in bytes) of this Vector's buffers and/or child Vectors.
   */
  get byteLength() {
    return this._byteLength === -1 && (this._byteLength = this.data.reduce((t, e) => t + e.byteLength, 0)), this._byteLength;
  }
  /**
   * The number of null elements in this Vector.
   */
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = Qo(this.data)), this._nullCount;
  }
  /**
   * The Array or TypedAray constructor used for the JS representation
   *  of the element's values in {@link Vector.prototype.toArray `toArray()`}.
   */
  get ArrayType() {
    return this.type.ArrayType;
  }
  /**
   * The name that should be printed when the Vector is logged in a message.
   */
  get [Symbol.toStringTag]() {
    return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
  }
  /**
   * The name of this Vector.
   */
  get VectorName() {
    return `${u[this.type.typeId]}Vector`;
  }
  /**
   * Check whether an element is null.
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(t) {
    return !1;
  }
  /**
   * Get an element value by position.
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(t) {
    return null;
  }
  /**
   * Set an element value by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, e) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, e) {
    return -1;
  }
  includes(t, e) {
    return this.indexOf(t, e) > 0;
  }
  /**
   * Get the size in bytes of an element by index.
   * @param index The index at which to get the byteLength.
   */
  // @ts-ignore
  getByteLength(t) {
    return 0;
  }
  /**
   * Iterator for the Vector's elements.
   */
  [Symbol.iterator]() {
    return kr.visit(this);
  }
  /**
   * Combines two or more Vectors of the same type.
   * @param others Additional Vectors to add to the end of this Vector.
   */
  concat(...t) {
    return new J(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    return new J(Zo(this, t, e, ({ data: i, _offsets: r }, s, o) => ea(i, r, s, o)));
  }
  toJSON() {
    return [...this];
  }
  /**
   * Return a JavaScript Array or TypedArray of the Vector's elements.
   *
   * @note If this Vector contains a single Data chunk and the Vector's type is a
   *  primitive numeric type corresponding to one of the JavaScript TypedArrays, this
   *  method returns a zero-copy slice of the underlying TypedArray values. If there's
   *  more than one chunk, the resulting TypedArray will be a copy of the data from each
   *  chunk's underlying TypedArray values.
   *
   * @returns An Array or TypedArray of the Vector's elements, based on the Vector's DataType.
   */
  toArray() {
    const { type: t, data: e, length: i, stride: r, ArrayType: s } = this;
    switch (t.typeId) {
      case u.Int:
      case u.Float:
      case u.Decimal:
      case u.Time:
      case u.Timestamp:
        switch (e.length) {
          case 0:
            return new s();
          case 1:
            return e[0].values.subarray(0, i * r);
          default:
            return e.reduce((o, { values: a, length: c }) => (o.array.set(a.subarray(0, c * r), o.offset), o.offset += c * r, o), { array: new s(i * r), offset: 0 }).array;
        }
    }
    return [...this];
  }
  /**
   * Returns a string representation of the Vector.
   *
   * @returns A string representation of the Vector.
   */
  toString() {
    return `[${[...this].join(",")}]`;
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.type.children) === null || e === void 0 ? void 0 : e.findIndex((i) => i.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.numChildren ? new J(this.data.map(({ children: e }) => e[t])) : null;
  }
  get isMemoized() {
    return I.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
  }
  /**
   * Adds memoization to the Vector's {@link get} method. For dictionary
   * vectors, this method return a vector that memoizes only the dictionary
   * values.
   *
   * Memoization is very useful when decoding a value is expensive such as
   * Uft8. The memoization creates a cache of the size of the Vector and
   * therfore increases memory usage.
   *
   * @returns A new vector that memoizes calls to {@link get}.
   */
  memoize() {
    if (I.isDictionary(this.type)) {
      const t = new Oi(this.data[0].dictionary), e = this.data.map((i) => {
        const r = i.clone();
        return r.dictionary = t, r;
      });
      return new J(e);
    }
    return new Oi(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A a vector without memoization.
   */
  unmemoize() {
    if (I.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), e = this.data.map((i) => {
        const r = i.clone();
        return r.dictionary = t, r;
      });
      return new J(e);
    }
    return this;
  }
}
aa = Symbol.toStringTag;
J[aa] = ((n) => {
  n.type = I.prototype, n.data = [], n.length = 0, n.stride = 1, n.numChildren = 0, n._nullCount = -1, n._byteLength = -1, n._offsets = new Uint32Array([0]), n[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(u).map((e) => u[e]).filter((e) => typeof e == "number" && e !== u.NONE);
  for (const e of t) {
    const i = Ot.getVisitFnByTypeId(e), r = jt.getVisitFnByTypeId(e), s = Ai.getVisitFnByTypeId(e), o = ne.getVisitFnByTypeId(e);
    ca[e] = { get: i, set: r, indexOf: s, byteLength: o }, la[e] = Object.create(n, {
      isValid: { value: sn(jr) },
      get: { value: sn(Ot.getVisitFnByTypeId(e)) },
      set: { value: na(jt.getVisitFnByTypeId(e)) },
      indexOf: { value: ia(Ai.getVisitFnByTypeId(e)) },
      getByteLength: { value: sn(ne.getVisitFnByTypeId(e)) }
    });
  }
  return "Vector";
})(J.prototype);
class Oi extends J {
  constructor(t) {
    super(t.data);
    const e = this.get, i = this.set, r = this.slice, s = new Array(this.length);
    Object.defineProperty(this, "get", {
      value(o) {
        const a = s[o];
        if (a !== void 0)
          return a;
        const c = e.call(this, o);
        return s[o] = c, c;
      }
    }), Object.defineProperty(this, "set", {
      value(o, a) {
        i.call(this, o, a), s[o] = a;
      }
    }), Object.defineProperty(this, "slice", {
      value: (o, a) => new Oi(r.call(this, o, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new J(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}
class mr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * Index to the start of the RecordBlock (note this is past the Message header)
   */
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * Length of the metadata
   */
  metaDataLength() {
    return this.bb.readInt32(this.bb_pos + 8);
  }
  /**
   * Length of the data (this is aligned so there can be a gap between this and
   * the metadata).
   */
  bodyLength() {
    return this.bb.readInt64(this.bb_pos + 16);
  }
  static sizeOf() {
    return 24;
  }
  static createBlock(t, e, i, r) {
    return t.prep(8, 24), t.writeInt64(r), t.pad(4), t.writeInt32(i), t.writeInt64(e), t.offset();
  }
}
const sr = 2, Kt = 4, le = 4, Z = 4, be = new Int32Array(2), Os = new Float32Array(be.buffer), Fs = new Float64Array(be.buffer), ii = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
let de = class br {
  constructor(t, e) {
    this.low = t | 0, this.high = e | 0;
  }
  static create(t, e) {
    return t == 0 && e == 0 ? br.ZERO : new br(t, e);
  }
  toFloat64() {
    return (this.low >>> 0) + this.high * 4294967296;
  }
  equals(t) {
    return this.low == t.low && this.high == t.high;
  }
};
de.ZERO = new de(0, 0);
var gr;
(function(n) {
  n[n.UTF8_BYTES = 1] = "UTF8_BYTES", n[n.UTF16_STRING = 2] = "UTF16_STRING";
})(gr || (gr = {}));
let an = class ua {
  /**
   * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
   */
  constructor(t) {
    this.bytes_ = t, this.position_ = 0;
  }
  /**
   * Create and allocate a new ByteBuffer with a given size.
   */
  static allocate(t) {
    return new ua(new Uint8Array(t));
  }
  clear() {
    this.position_ = 0;
  }
  /**
   * Get the underlying `Uint8Array`.
   */
  bytes() {
    return this.bytes_;
  }
  /**
   * Get the buffer's position.
   */
  position() {
    return this.position_;
  }
  /**
   * Set the buffer's position.
   */
  setPosition(t) {
    this.position_ = t;
  }
  /**
   * Get the buffer's capacity.
   */
  capacity() {
    return this.bytes_.length;
  }
  readInt8(t) {
    return this.readUint8(t) << 24 >> 24;
  }
  readUint8(t) {
    return this.bytes_[t];
  }
  readInt16(t) {
    return this.readUint16(t) << 16 >> 16;
  }
  readUint16(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8;
  }
  readInt32(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24;
  }
  readUint32(t) {
    return this.readInt32(t) >>> 0;
  }
  readInt64(t) {
    return new de(this.readInt32(t), this.readInt32(t + 4));
  }
  readUint64(t) {
    return new de(this.readUint32(t), this.readUint32(t + 4));
  }
  readFloat32(t) {
    return be[0] = this.readInt32(t), Os[0];
  }
  readFloat64(t) {
    return be[ii ? 0 : 1] = this.readInt32(t), be[ii ? 1 : 0] = this.readInt32(t + 4), Fs[0];
  }
  writeInt8(t, e) {
    this.bytes_[t] = e;
  }
  writeUint8(t, e) {
    this.bytes_[t] = e;
  }
  writeInt16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeUint16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeInt32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeUint32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeInt64(t, e) {
    this.writeInt32(t, e.low), this.writeInt32(t + 4, e.high);
  }
  writeUint64(t, e) {
    this.writeUint32(t, e.low), this.writeUint32(t + 4, e.high);
  }
  writeFloat32(t, e) {
    Os[0] = e, this.writeInt32(t, be[0]);
  }
  writeFloat64(t, e) {
    Fs[0] = e, this.writeInt32(t, be[ii ? 0 : 1]), this.writeInt32(t + 4, be[ii ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + Kt + le)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < le; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + Kt + e));
    return t;
  }
  /**
   * Look up a field in the vtable, return an offset into the object, or 0 if the
   * field is not present.
   */
  __offset(t, e) {
    const i = t - this.readInt32(t);
    return e < this.readInt16(i) ? this.readInt16(i + e) : 0;
  }
  /**
   * Initialize any Table-derived type to point to the union at the given offset.
   */
  __union(t, e) {
    return t.bb_pos = e + this.readInt32(e), t.bb = this, t;
  }
  /**
   * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
   * This allocates a new string and converts to wide chars upon each access.
   *
   * To avoid the conversion to UTF-16, pass Encoding.UTF8_BYTES as
   * the "optionalEncoding" argument. This is useful for avoiding conversion to
   * and from UTF-16 when the data will just be packaged back up in another
   * FlatBuffer later on.
   *
   * @param offset
   * @param opt_encoding Defaults to UTF16_STRING
   */
  __string(t, e) {
    t += this.readInt32(t);
    const i = this.readInt32(t);
    let r = "", s = 0;
    if (t += Kt, e === gr.UTF8_BYTES)
      return this.bytes_.subarray(t, t + i);
    for (; s < i; ) {
      let o;
      const a = this.readUint8(t + s++);
      if (a < 192)
        o = a;
      else {
        const c = this.readUint8(t + s++);
        if (a < 224)
          o = (a & 31) << 6 | c & 63;
        else {
          const d = this.readUint8(t + s++);
          if (a < 240)
            o = (a & 15) << 12 | (c & 63) << 6 | d & 63;
          else {
            const h = this.readUint8(t + s++);
            o = (a & 7) << 18 | (c & 63) << 12 | (d & 63) << 6 | h & 63;
          }
        }
      }
      o < 65536 ? r += String.fromCharCode(o) : (o -= 65536, r += String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320));
    }
    return r;
  }
  /**
   * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
   * if a string then return a new one
   *
   * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
   * makes the behaviour of __union_with_string different compared to __union
   */
  __union_with_string(t, e) {
    return typeof t == "string" ? this.__string(e) : this.__union(t, e);
  }
  /**
   * Retrieve the relative offset stored at "offset"
   */
  __indirect(t) {
    return t + this.readInt32(t);
  }
  /**
   * Get the start of data of a vector whose offset is stored at "offset" in this object.
   */
  __vector(t) {
    return t + this.readInt32(t) + Kt;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != le)
      throw new Error("FlatBuffers: file identifier must be length " + le);
    for (let e = 0; e < le; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + Kt + e))
        return !1;
    return !0;
  }
  /**
   * A helper function to avoid generated code depending on this file directly.
   */
  createLong(t, e) {
    return de.create(t, e);
  }
  /**
   * A helper function for generating list for obj api
   */
  createScalarList(t, e) {
    const i = [];
    for (let r = 0; r < e; ++r)
      t(r) !== null && i.push(t(r));
    return i;
  }
  /**
   * A helper function for generating list for obj api
   * @param listAccessor function that accepts an index and return data at that index
   * @param listLength listLength
   * @param res result list
   */
  createObjList(t, e) {
    const i = [];
    for (let r = 0; r < e; ++r) {
      const s = t(r);
      s !== null && i.push(s.unpack());
    }
    return i;
  }
}, da = class ha {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
    let e;
    t ? e = t : e = 1024, this.bb = an.allocate(e), this.space = e;
  }
  clear() {
    this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
  }
  /**
   * In order to save space, fields that are set to their default value
   * don't get serialized into the buffer. Forcing defaults provides a
   * way to manually disable this optimization.
   *
   * @param forceDefaults true always serializes default values
   */
  forceDefaults(t) {
    this.force_defaults = t;
  }
  /**
   * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
   * called finish(). The actual data starts at the ByteBuffer's current position,
   * not necessarily at 0.
   */
  dataBuffer() {
    return this.bb;
  }
  /**
   * Get the bytes representing the FlatBuffer. Only call this after you've
   * called finish().
   */
  asUint8Array() {
    return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
  }
  /**
   * Prepare to write an element of `size` after `additional_bytes` have been
   * written, e.g. if you write a string, you need to align such the int length
   * field is aligned to 4 bytes, and the string data follows it directly. If all
   * you need to do is alignment, `additional_bytes` will be 0.
   *
   * @param size This is the of the new element to write
   * @param additional_bytes The padding size
   */
  prep(t, e) {
    t > this.minalign && (this.minalign = t);
    const i = ~(this.bb.capacity() - this.space + e) + 1 & t - 1;
    for (; this.space < i + t + e; ) {
      const r = this.bb.capacity();
      this.bb = ha.growByteBuffer(this.bb), this.space += this.bb.capacity() - r;
    }
    this.pad(i);
  }
  pad(t) {
    for (let e = 0; e < t; e++)
      this.bb.writeInt8(--this.space, 0);
  }
  writeInt8(t) {
    this.bb.writeInt8(this.space -= 1, t);
  }
  writeInt16(t) {
    this.bb.writeInt16(this.space -= 2, t);
  }
  writeInt32(t) {
    this.bb.writeInt32(this.space -= 4, t);
  }
  writeInt64(t) {
    this.bb.writeInt64(this.space -= 8, t);
  }
  writeFloat32(t) {
    this.bb.writeFloat32(this.space -= 4, t);
  }
  writeFloat64(t) {
    this.bb.writeFloat64(this.space -= 8, t);
  }
  /**
   * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int8` to add the the buffer.
   */
  addInt8(t) {
    this.prep(1, 0), this.writeInt8(t);
  }
  /**
   * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int16` to add the the buffer.
   */
  addInt16(t) {
    this.prep(2, 0), this.writeInt16(t);
  }
  /**
   * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int32` to add the the buffer.
   */
  addInt32(t) {
    this.prep(4, 0), this.writeInt32(t);
  }
  /**
   * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int64` to add the the buffer.
   */
  addInt64(t) {
    this.prep(8, 0), this.writeInt64(t);
  }
  /**
   * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float32` to add the the buffer.
   */
  addFloat32(t) {
    this.prep(4, 0), this.writeFloat32(t);
  }
  /**
   * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float64` to add the the buffer.
   */
  addFloat64(t) {
    this.prep(8, 0), this.writeFloat64(t);
  }
  addFieldInt8(t, e, i) {
    (this.force_defaults || e != i) && (this.addInt8(e), this.slot(t));
  }
  addFieldInt16(t, e, i) {
    (this.force_defaults || e != i) && (this.addInt16(e), this.slot(t));
  }
  addFieldInt32(t, e, i) {
    (this.force_defaults || e != i) && (this.addInt32(e), this.slot(t));
  }
  addFieldInt64(t, e, i) {
    (this.force_defaults || !e.equals(i)) && (this.addInt64(e), this.slot(t));
  }
  addFieldFloat32(t, e, i) {
    (this.force_defaults || e != i) && (this.addFloat32(e), this.slot(t));
  }
  addFieldFloat64(t, e, i) {
    (this.force_defaults || e != i) && (this.addFloat64(e), this.slot(t));
  }
  addFieldOffset(t, e, i) {
    (this.force_defaults || e != i) && (this.addOffset(e), this.slot(t));
  }
  /**
   * Structs are stored inline, so nothing additional is being added. `d` is always 0.
   */
  addFieldStruct(t, e, i) {
    e != i && (this.nested(e), this.slot(t));
  }
  /**
   * Structures are always stored inline, they need to be created right
   * where they're used.  You'll get this assertion failure if you
   * created it elsewhere.
   */
  nested(t) {
    if (t != this.offset())
      throw new Error("FlatBuffers: struct must be serialized inline.");
  }
  /**
   * Should not be creating any other object, string or vector
   * while an object is being constructed
   */
  notNested() {
    if (this.isNested)
      throw new Error("FlatBuffers: object serialization must not be nested.");
  }
  /**
   * Set the current vtable at `voffset` to the current location in the buffer.
   */
  slot(t) {
    this.vtable !== null && (this.vtable[t] = this.offset());
  }
  /**
   * @returns Offset relative to the end of the buffer.
   */
  offset() {
    return this.bb.capacity() - this.space;
  }
  /**
   * Doubles the size of the backing ByteBuffer and copies the old data towards
   * the end of the new buffer (since we build the buffer backwards).
   *
   * @param bb The current buffer with the existing data
   * @returns A new byte buffer with the old data copied
   * to it. The data is located at the end of the buffer.
   *
   * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
   * it a uint8Array we need to suppress the type check:
   * @suppress {checkTypes}
   */
  static growByteBuffer(t) {
    const e = t.capacity();
    if (e & 3221225472)
      throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    const i = e << 1, r = an.allocate(i);
    return r.setPosition(i - e), r.bytes().set(t.bytes(), i - e), r;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(Kt, 0), this.writeInt32(this.offset() - t + Kt);
  }
  /**
   * Start encoding a new object in the buffer.  Users will not usually need to
   * call this directly. The FlatBuffers compiler will generate helper methods
   * that call this method internally.
   */
  startObject(t) {
    this.notNested(), this.vtable == null && (this.vtable = []), this.vtable_in_use = t;
    for (let e = 0; e < t; e++)
      this.vtable[e] = 0;
    this.isNested = !0, this.object_start = this.offset();
  }
  /**
   * Finish off writing the object that is under construction.
   *
   * @returns The offset to the object inside `dataBuffer`
   */
  endObject() {
    if (this.vtable == null || !this.isNested)
      throw new Error("FlatBuffers: endObject called without startObject");
    this.addInt32(0);
    const t = this.offset();
    let e = this.vtable_in_use - 1;
    for (; e >= 0 && this.vtable[e] == 0; e--)
      ;
    const i = e + 1;
    for (; e >= 0; e--)
      this.addInt16(this.vtable[e] != 0 ? t - this.vtable[e] : 0);
    const r = 2;
    this.addInt16(t - this.object_start);
    const s = (i + r) * sr;
    this.addInt16(s);
    let o = 0;
    const a = this.space;
    t: for (e = 0; e < this.vtables.length; e++) {
      const c = this.bb.capacity() - this.vtables[e];
      if (s == this.bb.readInt16(c)) {
        for (let d = sr; d < s; d += sr)
          if (this.bb.readInt16(a + d) != this.bb.readInt16(c + d))
            continue t;
        o = this.vtables[e];
        break;
      }
    }
    return o ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, o - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t;
  }
  /**
   * Finalize a buffer, poiting to the given `root_table`.
   */
  finish(t, e, i) {
    const r = i ? Z : 0;
    if (e) {
      const s = e;
      if (this.prep(this.minalign, Kt + le + r), s.length != le)
        throw new Error("FlatBuffers: file identifier must be length " + le);
      for (let o = le - 1; o >= 0; o--)
        this.writeInt8(s.charCodeAt(o));
    }
    this.prep(this.minalign, Kt + r), this.addOffset(t), r && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  /**
   * Finalize a size prefixed buffer, pointing to the given `root_table`.
   */
  finishSizePrefixed(t, e) {
    this.finish(t, e, !0);
  }
  /**
   * This checks a required field has been set in a given table that has
   * just been constructed.
   */
  requiredField(t, e) {
    const i = this.bb.capacity() - t, r = i - this.bb.readInt32(i);
    if (!(this.bb.readInt16(r + e) != 0))
      throw new Error("FlatBuffers: field " + e + " must be set");
  }
  /**
   * Start a new array/vector of objects.  Users usually will not call
   * this directly. The FlatBuffers compiler will create a start/end
   * method for vector types in generated code.
   *
   * @param elem_size The size of each element in the array
   * @param num_elems The number of elements in the array
   * @param alignment The alignment of the array
   */
  startVector(t, e, i) {
    this.notNested(), this.vector_num_elems = e, this.prep(Kt, t * e), this.prep(i, t * e);
  }
  /**
   * Finish off the creation of an array and all its elements. The array must be
   * created with `startVector`.
   *
   * @returns The offset at which the newly created array
   * starts.
   */
  endVector() {
    return this.writeInt32(this.vector_num_elems), this.offset();
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If the string passed has
   * already been seen, we return the offset of the already written string
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createSharedString(t) {
    if (!t)
      return 0;
    if (this.string_maps || (this.string_maps = /* @__PURE__ */ new Map()), this.string_maps.has(t))
      return this.string_maps.get(t);
    const e = this.createString(t);
    return this.string_maps.set(t, e), e;
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
   * instead of a string, it is assumed to contain valid UTF-8 encoded data.
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createString(t) {
    if (!t)
      return 0;
    let e;
    if (t instanceof Uint8Array)
      e = t;
    else {
      e = [];
      let i = 0;
      for (; i < t.length; ) {
        let r;
        const s = t.charCodeAt(i++);
        if (s < 55296 || s >= 56320)
          r = s;
        else {
          const o = t.charCodeAt(i++);
          r = (s << 10) + o + -56613888;
        }
        r < 128 ? e.push(r) : (r < 2048 ? e.push(r >> 6 & 31 | 192) : (r < 65536 ? e.push(r >> 12 & 15 | 224) : e.push(r >> 18 & 7 | 240, r >> 12 & 63 | 128), e.push(r >> 6 & 63 | 128)), e.push(r & 63 | 128));
      }
    }
    this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length);
    for (let i = 0, r = this.space, s = this.bb.bytes(); i < e.length; i++)
      s[r++] = e[i];
    return this.endVector();
  }
  /**
   * A helper function to avoid generated code depending on this file directly.
   */
  createLong(t, e) {
    return de.create(t, e);
  }
  /**
   * A helper function to pack an object
   *
   * @returns offset of obj
   */
  createObjectOffset(t) {
    return t === null ? 0 : typeof t == "string" ? this.createString(t) : t.pack(this);
  }
  /**
   * A helper function to pack a list of object
   *
   * @returns list of offsets of each non null object
   */
  createObjectOffsetList(t) {
    const e = [];
    for (let i = 0; i < t.length; ++i) {
      const r = t[i];
      if (r !== null)
        e.push(this.createObjectOffset(r));
      else
        throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return e;
  }
  createStructOffsetList(t, e) {
    return e(this, t.length), this.createObjectOffsetList(t), this.endVector();
  }
};
class ut {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsKeyValue(t, e) {
    return (e || new ut()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, e) {
    return t.setPosition(t.position() + Z), (e || new ut()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  key(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  value(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startKeyValue(t) {
    t.startObject(2);
  }
  static addKey(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addValue(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endKeyValue(t) {
    return t.endObject();
  }
  static createKeyValue(t, e, i) {
    return ut.startKeyValue(t), ut.addKey(t, e), ut.addValue(t, i), ut.endKeyValue(t);
  }
}
var cn;
(function(n) {
  n[n.V1 = 0] = "V1", n[n.V2 = 1] = "V2", n[n.V3 = 2] = "V3", n[n.V4 = 3] = "V4", n[n.V5 = 4] = "V5";
})(cn || (cn = {}));
var ln;
(function(n) {
  n[n.Little = 0] = "Little", n[n.Big = 1] = "Big";
})(ln || (ln = {}));
var Fi;
(function(n) {
  n[n.DenseArray = 0] = "DenseArray";
})(Fi || (Fi = {}));
class Et {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInt(t, e) {
    return (e || new Et()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, e) {
    return t.setPosition(t.position() + Z), (e || new Et()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  isSigned() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startInt(t) {
    t.startObject(2);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static addIsSigned(t, e) {
    t.addFieldInt8(1, +e, 0);
  }
  static endInt(t) {
    return t.endObject();
  }
  static createInt(t, e, i) {
    return Et.startInt(t), Et.addBitWidth(t, e), Et.addIsSigned(t, i), Et.endInt(t);
  }
}
class ue {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryEncoding(t, e) {
    return (e || new ue()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, e) {
    return t.setPosition(t.position() + Z), (e || new ue()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * The known dictionary id in the application where this data is used. In
   * the file or streaming formats, the dictionary ids are found in the
   * DictionaryBatch messages
   */
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  /**
   * The dictionary indices are constrained to be non-negative integers. If
   * this field is null, the indices must be signed int32. To maximize
   * cross-language compatibility and performance, implementations are
   * recommended to prefer signed integer types over unsigned integer types
   * and to avoid uint64 indices unless they are required by an application.
   */
  indexType(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new Et()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * By default, dictionaries are not ordered, or the order does not have
   * semantic meaning. In some statistical, applications, dictionary-encoding
   * is used to represent ordered categorical data, and we provide a way to
   * preserve that metadata here
   */
  isOrdered() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  dictionaryKind() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt16(this.bb_pos + t) : Fi.DenseArray;
  }
  static startDictionaryEncoding(t) {
    t.startObject(4);
  }
  static addId(t, e) {
    t.addFieldInt64(0, e, t.createLong(0, 0));
  }
  static addIndexType(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addIsOrdered(t, e) {
    t.addFieldInt8(2, +e, 0);
  }
  static addDictionaryKind(t, e) {
    t.addFieldInt16(3, e, Fi.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class Re {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBinary(t, e) {
    return (e || new Re()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, e) {
    return t.setPosition(t.position() + Z), (e || new Re()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return Re.startBinary(t), Re.endBinary(t);
  }
}
class xe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBool(t, e) {
    return (e || new xe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, e) {
    return t.setPosition(t.position() + Z), (e || new xe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return xe.startBool(t), xe.endBool(t);
  }
}
var Di;
(function(n) {
  n[n.DAY = 0] = "DAY", n[n.MILLISECOND = 1] = "MILLISECOND";
})(Di || (Di = {}));
let oi = class qe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDate(t, e) {
    return (e || new qe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, e) {
    return t.setPosition(t.position() + Z), (e || new qe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Di.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Di.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, e) {
    return qe.startDate(t), qe.addUnit(t, e), qe.endDate(t);
  }
};
class wt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDecimal(t, e) {
    return (e || new wt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, e) {
    return t.setPosition(t.position() + Z), (e || new wt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Total number of decimal digits
   */
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of digits after the decimal point "."
   */
  scale() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of bits per value. The only accepted widths are 128 and 256.
   * We use bitWidth for consistency with Int::bitWidth.
   */
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readInt32(this.bb_pos + t) : 128;
  }
  static startDecimal(t) {
    t.startObject(3);
  }
  static addPrecision(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static addScale(t, e) {
    t.addFieldInt32(1, e, 0);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(2, e, 128);
  }
  static endDecimal(t) {
    return t.endObject();
  }
  static createDecimal(t, e, i, r) {
    return wt.startDecimal(t), wt.addPrecision(t, e), wt.addScale(t, i), wt.addBitWidth(t, r), wt.endDecimal(t);
  }
}
var un;
(function(n) {
  n[n.SECOND = 0] = "SECOND", n[n.MILLISECOND = 1] = "MILLISECOND", n[n.MICROSECOND = 2] = "MICROSECOND", n[n.NANOSECOND = 3] = "NANOSECOND";
})(un || (un = {}));
class Gt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeBinary(t, e) {
    return (e || new Gt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, e) {
    return t.setPosition(t.position() + Z), (e || new Gt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of bytes per value
   */
  byteWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeBinary(t) {
    t.startObject(1);
  }
  static addByteWidth(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static endFixedSizeBinary(t) {
    return t.endObject();
  }
  static createFixedSizeBinary(t, e) {
    return Gt.startFixedSizeBinary(t), Gt.addByteWidth(t, e), Gt.endFixedSizeBinary(t);
  }
}
class qt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeList(t, e) {
    return (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, e) {
    return t.setPosition(t.position() + Z), (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of list items per value
   */
  listSize() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeList(t) {
    t.startObject(1);
  }
  static addListSize(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static endFixedSizeList(t) {
    return t.endObject();
  }
  static createFixedSizeList(t, e) {
    return qt.startFixedSizeList(t), qt.addListSize(t, e), qt.endFixedSizeList(t);
  }
}
var Ti;
(function(n) {
  n[n.HALF = 0] = "HALF", n[n.SINGLE = 1] = "SINGLE", n[n.DOUBLE = 2] = "DOUBLE";
})(Ti || (Ti = {}));
class Zt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFloatingPoint(t, e) {
    return (e || new Zt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, e) {
    return t.setPosition(t.position() + Z), (e || new Zt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ti.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, e) {
    t.addFieldInt16(0, e, Ti.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, e) {
    return Zt.startFloatingPoint(t), Zt.addPrecision(t, e), Zt.endFloatingPoint(t);
  }
}
var Ei;
(function(n) {
  n[n.YEAR_MONTH = 0] = "YEAR_MONTH", n[n.DAY_TIME = 1] = "DAY_TIME", n[n.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Ei || (Ei = {}));
class Xt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInterval(t, e) {
    return (e || new Xt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, e) {
    return t.setPosition(t.position() + Z), (e || new Xt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ei.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Ei.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, e) {
    return Xt.startInterval(t), Xt.addUnit(t, e), Xt.endInterval(t);
  }
}
class Ne {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsList(t, e) {
    return (e || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, e) {
    return t.setPosition(t.position() + Z), (e || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Ne.startList(t), Ne.endList(t);
  }
}
let ai = class Ze {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMap(t, e) {
    return (e || new Ze()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, e) {
    return t.setPosition(t.position() + Z), (e || new Ze()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Set to true if the keys within each value are sorted
   */
  keysSorted() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startMap(t) {
    t.startObject(1);
  }
  static addKeysSorted(t, e) {
    t.addFieldInt8(0, +e, 0);
  }
  static endMap(t) {
    return t.endObject();
  }
  static createMap(t, e) {
    return Ze.startMap(t), Ze.addKeysSorted(t, e), Ze.endMap(t);
  }
};
class Ce {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsNull(t, e) {
    return (e || new Ce()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, e) {
    return t.setPosition(t.position() + Z), (e || new Ce()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return Ce.startNull(t), Ce.endNull(t);
  }
}
class Le {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsStruct_(t, e) {
    return (e || new Le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, e) {
    return t.setPosition(t.position() + Z), (e || new Le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return Le.startStruct_(t), Le.endStruct_(t);
  }
}
class Ut {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTime(t, e) {
    return (e || new Ut()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, e) {
    return t.setPosition(t.position() + Z), (e || new Ut()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : un.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, un.MILLISECOND);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(1, e, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, e, i) {
    return Ut.startTime(t), Ut.addUnit(t, e), Ut.addBitWidth(t, i), Ut.endTime(t);
  }
}
class Pt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTimestamp(t, e) {
    return (e || new Pt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, e) {
    return t.setPosition(t.position() + Z), (e || new Pt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : un.SECOND;
  }
  timezone(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, un.SECOND);
  }
  static addTimezone(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, e, i) {
    return Pt.startTimestamp(t), Pt.addUnit(t, e), Pt.addTimezone(t, i), Pt.endTimestamp(t);
  }
}
var Mi;
(function(n) {
  n[n.Sparse = 0] = "Sparse", n[n.Dense = 1] = "Dense";
})(Mi || (Mi = {}));
class St {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUnion(t, e) {
    return (e || new St()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, e) {
    return t.setPosition(t.position() + Z), (e || new St()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Mi.Sparse;
  }
  typeIds(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + t * 4) : 0;
  }
  typeIdsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  typeIdsArray() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startUnion(t) {
    t.startObject(2);
  }
  static addMode(t, e) {
    t.addFieldInt16(0, e, Mi.Sparse);
  }
  static addTypeIds(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createTypeIdsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let i = e.length - 1; i >= 0; i--)
      t.addInt32(e[i]);
    return t.endVector();
  }
  static startTypeIdsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endUnion(t) {
    return t.endObject();
  }
  static createUnion(t, e, i) {
    return St.startUnion(t), St.addMode(t, e), St.addTypeIds(t, i), St.endUnion(t);
  }
}
class Ue {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUtf8(t, e) {
    return (e || new Ue()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, e) {
    return t.setPosition(t.position() + Z), (e || new Ue()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Ue.startUtf8(t), Ue.endUtf8(t);
  }
}
var nt;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Null = 1] = "Null", n[n.Int = 2] = "Int", n[n.FloatingPoint = 3] = "FloatingPoint", n[n.Binary = 4] = "Binary", n[n.Utf8 = 5] = "Utf8", n[n.Bool = 6] = "Bool", n[n.Decimal = 7] = "Decimal", n[n.Date = 8] = "Date", n[n.Time = 9] = "Time", n[n.Timestamp = 10] = "Timestamp", n[n.Interval = 11] = "Interval", n[n.List = 12] = "List", n[n.Struct_ = 13] = "Struct_", n[n.Union = 14] = "Union", n[n.FixedSizeBinary = 15] = "FixedSizeBinary", n[n.FixedSizeList = 16] = "FixedSizeList", n[n.Map = 17] = "Map", n[n.Duration = 18] = "Duration", n[n.LargeBinary = 19] = "LargeBinary", n[n.LargeUtf8 = 20] = "LargeUtf8", n[n.LargeList = 21] = "LargeList";
})(nt || (nt = {}));
let Ct = class ci {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsField(t, e) {
    return (e || new ci()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, e) {
    return t.setPosition(t.position() + Z), (e || new ci()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  name(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  /**
   * Whether or not this field can contain nulls. Should be true in general.
   */
  nullable() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  typeType() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readUint8(this.bb_pos + t) : nt.NONE;
  }
  /**
   * This is the type of the decoded value if the field is dictionary encoded.
   */
  // @ts-ignore
  type(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.__union(t, this.bb_pos + e) : null;
  }
  /**
   * Present only if the field is dictionary encoded.
   */
  dictionary(t) {
    const e = this.bb.__offset(this.bb_pos, 12);
    return e ? (t || new ue()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, e) {
    const i = this.bb.__offset(this.bb_pos, 14);
    return i ? (e || new ci()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  childrenLength() {
    const t = this.bb.__offset(this.bb_pos, 14);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const i = this.bb.__offset(this.bb_pos, 16);
    return i ? (e || new ut()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 16);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startField(t) {
    t.startObject(7);
  }
  static addName(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addNullable(t, e) {
    t.addFieldInt8(1, +e, 0);
  }
  static addTypeType(t, e) {
    t.addFieldInt8(2, e, nt.NONE);
  }
  static addType(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static addDictionary(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static addChildren(t, e) {
    t.addFieldOffset(5, e, 0);
  }
  static createChildrenVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
    return t.endVector();
  }
  static startChildrenVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(6, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endField(t) {
    return t.endObject();
  }
}, Wt = class se {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSchema(t, e) {
    return (e || new se()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, e) {
    return t.setPosition(t.position() + Z), (e || new se()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ln.Little;
  }
  fields(t, e) {
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? (e || new Ct()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, e) {
    const i = this.bb.__offset(this.bb_pos, 8);
    return i ? (e || new ut()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Features used in the stream/file.
   */
  features(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e) + t * 8) : this.bb.createLong(0, 0);
  }
  featuresLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startSchema(t) {
    t.startObject(4);
  }
  static addEndianness(t, e) {
    t.addFieldInt16(0, e, ln.Little);
  }
  static addFields(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createFieldsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
    return t.endVector();
  }
  static startFieldsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addFeatures(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static createFeaturesVector(t, e) {
    t.startVector(8, e.length, 8);
    for (let i = e.length - 1; i >= 0; i--)
      t.addInt64(e[i]);
    return t.endVector();
  }
  static startFeaturesVector(t, e) {
    t.startVector(8, e, 8);
  }
  static endSchema(t) {
    return t.endObject();
  }
  static finishSchemaBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedSchemaBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
  static createSchema(t, e, i, r, s) {
    return se.startSchema(t), se.addEndianness(t, e), se.addFields(t, i), se.addCustomMetadata(t, r), se.addFeatures(t, s), se.endSchema(t);
  }
};
class Tt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFooter(t, e) {
    return (e || new Tt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, e) {
    return t.setPosition(t.position() + Z), (e || new Tt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : cn.V1;
  }
  schema(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new Wt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  dictionaries(t, e) {
    const i = this.bb.__offset(this.bb_pos, 8);
    return i ? (e || new mr()).__init(this.bb.__vector(this.bb_pos + i) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, e) {
    const i = this.bb.__offset(this.bb_pos, 10);
    return i ? (e || new mr()).__init(this.bb.__vector(this.bb_pos + i) + t * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const i = this.bb.__offset(this.bb_pos, 12);
    return i ? (e || new ut()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, cn.V1);
  }
  static addSchema(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addDictionaries(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static startDictionariesVector(t, e) {
    t.startVector(24, e, 8);
  }
  static addRecordBatches(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static startRecordBatchesVector(t, e) {
    t.startVector(24, e, 8);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endFooter(t) {
    return t.endObject();
  }
  static finishFooterBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedFooterBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
}
class H {
  constructor(t = [], e, i) {
    this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), i || (i = _r(t)), this.dictionaries = i;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  get names() {
    return this.fields.map((t) => t.name);
  }
  toString() {
    return `Schema<{ ${this.fields.map((t, e) => `${e}: ${t}`).join(", ")} }>`;
  }
  /**
   * Construct a new Schema containing only specified fields.
   *
   * @param fieldNames Names of fields to keep.
   * @returns A new Schema of fields matching the specified names.
   */
  select(t) {
    const e = new Set(t), i = this.fields.filter((r) => e.has(r.name));
    return new H(i, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const e = t.map((i) => this.fields[i]).filter(Boolean);
    return new H(e, this.metadata);
  }
  assign(...t) {
    const e = t[0] instanceof H ? t[0] : Array.isArray(t[0]) ? new H(t[0]) : new H(t), i = [...this.fields], r = ri(ri(/* @__PURE__ */ new Map(), this.metadata), e.metadata), s = e.fields.filter((a) => {
      const c = i.findIndex((d) => d.name === a.name);
      return ~c ? (i[c] = a.clone({
        metadata: ri(ri(/* @__PURE__ */ new Map(), i[c].metadata), a.metadata)
      })) && !1 : !0;
    }), o = _r(s, /* @__PURE__ */ new Map());
    return new H([...i, ...s], r, new Map([...this.dictionaries, ...o]));
  }
}
H.prototype.fields = null;
H.prototype.metadata = null;
H.prototype.dictionaries = null;
class tt {
  constructor(t, e, i = !1, r) {
    this.name = t, this.type = e, this.nullable = i, this.metadata = r || /* @__PURE__ */ new Map();
  }
  /** @nocollapse */
  static new(...t) {
    let [e, i, r, s] = t;
    return t[0] && typeof t[0] == "object" && ({ name: e } = t[0], i === void 0 && (i = t[0].type), r === void 0 && (r = t[0].nullable), s === void 0 && (s = t[0].metadata)), new tt(`${e}`, i, r, s);
  }
  get typeId() {
    return this.type.typeId;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    return `${this.name}: ${this.type}`;
  }
  clone(...t) {
    let [e, i, r, s] = t;
    return !t[0] || typeof t[0] != "object" ? [e = this.name, i = this.type, r = this.nullable, s = this.metadata] = t : { name: e = this.name, type: i = this.type, nullable: r = this.nullable, metadata: s = this.metadata } = t[0], tt.new(e, i, r, s);
  }
}
tt.prototype.type = null;
tt.prototype.name = null;
tt.prototype.nullable = null;
tt.prototype.metadata = null;
function ri(n, t) {
  return new Map([...n || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function _r(n, t = /* @__PURE__ */ new Map()) {
  for (let e = -1, i = n.length; ++e < i; ) {
    const s = n[e].type;
    if (I.isDictionary(s)) {
      if (!t.has(s.id))
        t.set(s.id, s.dictionary);
      else if (t.get(s.id) !== s.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    s.children && s.children.length > 0 && _r(s.children, t);
  }
  return t;
}
var Ds = de, Jl = da, Hl = an;
class Pn {
  constructor(t, e = Mt.V4, i, r) {
    this.schema = t, this.version = e, i && (this._recordBatches = i), r && (this._dictionaryBatches = r);
  }
  /** @nocollapse */
  static decode(t) {
    t = new Hl(k(t));
    const e = Tt.getRootAsFooter(t), i = H.decode(e.schema());
    return new Kl(i, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new Jl(), i = H.encode(e, t.schema);
    Tt.startRecordBatchesVector(e, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      Ie.encode(e, o);
    const r = e.endVector();
    Tt.startDictionariesVector(e, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      Ie.encode(e, o);
    const s = e.endVector();
    return Tt.startFooter(e), Tt.addSchema(e, i), Tt.addVersion(e, Mt.V4), Tt.addRecordBatches(e, r), Tt.addDictionaries(e, s), Tt.finishFooterBuffer(e, Tt.endFooter(e)), e.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  *recordBatches() {
    for (let t, e = -1, i = this.numRecordBatches; ++e < i; )
      (t = this.getRecordBatch(e)) && (yield t);
  }
  *dictionaryBatches() {
    for (let t, e = -1, i = this.numDictionaries; ++e < i; )
      (t = this.getDictionaryBatch(e)) && (yield t);
  }
  getRecordBatch(t) {
    return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null;
  }
  getDictionaryBatch(t) {
    return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null;
  }
}
class Kl extends Pn {
  constructor(t, e) {
    super(t, e.version()), this._footer = e;
  }
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  getRecordBatch(t) {
    if (t >= 0 && t < this.numRecordBatches) {
      const e = this._footer.recordBatches(t);
      if (e)
        return Ie.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return Ie.decode(e);
    }
    return null;
  }
}
class Ie {
  constructor(t, e, i) {
    this.metaDataLength = t, this.offset = typeof i == "number" ? i : i.low, this.bodyLength = typeof e == "number" ? e : e.low;
  }
  /** @nocollapse */
  static decode(t) {
    return new Ie(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: i } = e, r = new Ds(e.offset, 0), s = new Ds(e.bodyLength, 0);
    return mr.createBlock(t, r, i, s);
  }
}
const it = Object.freeze({ done: !0, value: void 0 });
class Ts {
  constructor(t) {
    this._json = t;
  }
  get schema() {
    return this._json.schema;
  }
  get batches() {
    return this._json.batches || [];
  }
  get dictionaries() {
    return this._json.dictionaries || [];
  }
}
class Vr {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(t, e) {
    return this._getNodeStream().pipe(t, e);
  }
  pipeTo(t, e) {
    return this._getDOMStream().pipeTo(t, e);
  }
  pipeThrough(t, e) {
    return this._getDOMStream().pipeThrough(t, e);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
}
class Gl extends Vr {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return S(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  write(t) {
    this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(t) : this.resolvers.shift().resolve({ done: !1, value: t }));
  }
  abort(t) {
    this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = { error: t } : this.resolvers.shift().reject({ done: !0, value: t }));
  }
  close() {
    if (this._closedPromiseResolve) {
      const { resolvers: t } = this;
      for (; t.length > 0; )
        t.shift().resolve(it);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return Lt.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return Lt.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return S(this, void 0, void 0, function* () {
      return yield this.abort(t), it;
    });
  }
  return(t) {
    return S(this, void 0, void 0, function* () {
      return yield this.close(), it;
    });
  }
  read(t) {
    return S(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return S(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((e, i) => {
      this.resolvers.push({ resolve: e, reject: i });
    }) : Promise.resolve(it);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
class li extends Gl {
  write(t) {
    if ((t = k(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? dr(this.toUint8Array(!0)) : this.toUint8Array(!1).then(dr);
  }
  toUint8Array(t = !1) {
    return t ? ee(this._values)[0] : S(this, void 0, void 0, function* () {
      var e, i;
      const r = [];
      let s = 0;
      try {
        for (var o = Pe(this), a; a = yield o.next(), !a.done; ) {
          const c = a.value;
          r.push(c), s += c.byteLength;
        }
      } catch (c) {
        e = { error: c };
      } finally {
        try {
          a && !a.done && (i = o.return) && (yield i.call(o));
        } finally {
          if (e) throw e.error;
        }
      }
      return ee(r, s)[0];
    });
  }
}
class Ri {
  constructor(t) {
    t && (this.source = new ql(Lt.fromIterable(t)));
  }
  [Symbol.iterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class dn {
  constructor(t) {
    t instanceof dn ? this.source = t.source : t instanceof li ? this.source = new Me(Lt.fromAsyncIterable(t)) : Hs(t) ? this.source = new Me(Lt.fromNodeStream(t)) : Fr(t) ? this.source = new Me(Lt.fromDOMStream(t)) : Js(t) ? this.source = new Me(Lt.fromDOMStream(t.body)) : zn(t) ? this.source = new Me(Lt.fromIterable(t)) : _e(t) ? this.source = new Me(Lt.fromAsyncIterable(t)) : fn(t) && (this.source = new Me(Lt.fromAsyncIterable(t)));
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  get closed() {
    return this.source.closed;
  }
  cancel(t) {
    return this.source.cancel(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class ql {
  constructor(t) {
    this.source = t;
  }
  cancel(t) {
    this.return(t);
  }
  peek(t) {
    return this.next(t, "peek").value;
  }
  read(t) {
    return this.next(t, "read").value;
  }
  next(t, e = "read") {
    return this.source.next({ cmd: e, size: t });
  }
  throw(t) {
    return Object.create(this.source.throw && this.source.throw(t) || it);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || it);
  }
}
class Me {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
  }
  cancel(t) {
    return S(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return S(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return S(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t, e = "read") {
    return S(this, void 0, void 0, function* () {
      return yield this.source.next({ cmd: e, size: t });
    });
  }
  throw(t) {
    return S(this, void 0, void 0, function* () {
      const e = this.source.throw && (yield this.source.throw(t)) || it;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
  return(t) {
    return S(this, void 0, void 0, function* () {
      const e = this.source.return && (yield this.source.return(t)) || it;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
}
class Es extends Ri {
  constructor(t, e) {
    super(), this.position = 0, this.buffer = k(t), this.size = typeof e > "u" ? this.buffer.byteLength : e;
  }
  readInt32(t) {
    const { buffer: e, byteOffset: i } = this.readAt(t, 4);
    return new DataView(e, i).getInt32(0, !0);
  }
  seek(t) {
    return this.position = Math.min(t, this.size), t < this.size;
  }
  read(t) {
    const { buffer: e, size: i, position: r } = this;
    return e && r < i ? (typeof t != "number" && (t = Number.POSITIVE_INFINITY), this.position = Math.min(i, r + Math.min(i - r, t)), e.subarray(r, this.position)) : null;
  }
  readAt(t, e) {
    const i = this.buffer, r = Math.min(this.size, t + e);
    return i ? i.subarray(t, r) : new Uint8Array(e);
  }
  close() {
    this.buffer && (this.buffer = null);
  }
  throw(t) {
    return this.close(), { done: !0, value: t };
  }
  return(t) {
    return this.close(), { done: !0, value: t };
  }
}
class xi extends dn {
  constructor(t, e) {
    super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = S(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return S(this, void 0, void 0, function* () {
      const { buffer: e, byteOffset: i } = yield this.readAt(t, 4);
      return new DataView(e, i).getInt32(0, !0);
    });
  }
  seek(t) {
    return S(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return S(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: e, size: i, position: r } = this;
      if (e && r < i) {
        typeof t != "number" && (t = Number.POSITIVE_INFINITY);
        let s = r, o = 0, a = 0;
        const c = Math.min(i, s + Math.min(i - s, t)), d = new Uint8Array(Math.max(0, (this.position = c) - s));
        for (; (s += a) < c && (o += a) < d.byteLength; )
          ({ bytesRead: a } = yield e.read(d, o, d.byteLength - o, s));
        return d;
      }
      return null;
    });
  }
  readAt(t, e) {
    return S(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: i, size: r } = this;
      if (i && t + e < r) {
        const s = Math.min(r, t + e), o = new Uint8Array(s - t);
        return (yield i.read(o, 0, e, t)).buffer;
      }
      return new Uint8Array(e);
    });
  }
  close() {
    return S(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return S(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
  return(t) {
    return S(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
}
const Zl = 65536;
function Qe(n) {
  return n < 0 && (n = 4294967295 + n + 1), `0x${n.toString(16)}`;
}
const hn = 8, zr = [
  1,
  10,
  100,
  1e3,
  1e4,
  1e5,
  1e6,
  1e7,
  1e8
];
class fa {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return this.buffer[1];
  }
  low() {
    return this.buffer[0];
  }
  _times(t) {
    const e = new Uint32Array([
      this.buffer[1] >>> 16,
      this.buffer[1] & 65535,
      this.buffer[0] >>> 16,
      this.buffer[0] & 65535
    ]), i = new Uint32Array([
      t.buffer[1] >>> 16,
      t.buffer[1] & 65535,
      t.buffer[0] >>> 16,
      t.buffer[0] & 65535
    ]);
    let r = e[3] * i[3];
    this.buffer[0] = r & 65535;
    let s = r >>> 16;
    return r = e[2] * i[3], s += r, r = e[3] * i[2] >>> 0, s += r, this.buffer[0] += s << 16, this.buffer[1] = s >>> 0 < r ? Zl : 0, this.buffer[1] += s >>> 16, this.buffer[1] += e[1] * i[3] + e[2] * i[2] + e[3] * i[1], this.buffer[1] += e[0] * i[3] + e[1] * i[2] + e[2] * i[1] + e[3] * i[0] << 16, this;
  }
  _plus(t) {
    const e = this.buffer[0] + t.buffer[0] >>> 0;
    this.buffer[1] += t.buffer[1], e < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = e;
  }
  lessThan(t) {
    return this.buffer[1] < t.buffer[1] || this.buffer[1] === t.buffer[1] && this.buffer[0] < t.buffer[0];
  }
  equals(t) {
    return this.buffer[1] === t.buffer[1] && this.buffer[0] == t.buffer[0];
  }
  greaterThan(t) {
    return t.lessThan(this);
  }
  hex() {
    return `${Qe(this.buffer[1])} ${Qe(this.buffer[0])}`;
  }
}
class K extends fa {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return K.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return K.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const i = t.length, r = new K(e);
    for (let s = 0; s < i; ) {
      const o = hn < i - s ? hn : i - s, a = new K(new Uint32Array([Number.parseInt(t.slice(s, s + o), 10), 0])), c = new K(new Uint32Array([zr[o], 0]));
      r.times(c), r.plus(a), s += o;
    }
    return r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let i = -1, r = t.length; ++i < r; )
      K.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 2 * i * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new K(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new K(new Uint32Array(t.buffer)).plus(e);
  }
}
class vt extends fa {
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[0] == 0 && ++this.buffer[1], this;
  }
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  lessThan(t) {
    const e = this.buffer[1] << 0, i = t.buffer[1] << 0;
    return e < i || e === i && this.buffer[0] < t.buffer[0];
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return vt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return vt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const i = t.startsWith("-"), r = t.length, s = new vt(e);
    for (let o = i ? 1 : 0; o < r; ) {
      const a = hn < r - o ? hn : r - o, c = new vt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])), d = new vt(new Uint32Array([zr[a], 0]));
      s.times(d), s.plus(c), o += a;
    }
    return i ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let i = -1, r = t.length; ++i < r; )
      vt.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 2 * i * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new vt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new vt(new Uint32Array(t.buffer)).plus(e);
  }
}
class Jt {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new vt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new vt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const e = new K(new Uint32Array([this.buffer[3], 0])), i = new K(new Uint32Array([this.buffer[2], 0])), r = new K(new Uint32Array([this.buffer[1], 0])), s = new K(new Uint32Array([this.buffer[0], 0])), o = new K(new Uint32Array([t.buffer[3], 0])), a = new K(new Uint32Array([t.buffer[2], 0])), c = new K(new Uint32Array([t.buffer[1], 0])), d = new K(new Uint32Array([t.buffer[0], 0]));
    let h = K.multiply(s, d);
    this.buffer[0] = h.low();
    const p = new K(new Uint32Array([h.high(), 0]));
    return h = K.multiply(r, d), p.plus(h), h = K.multiply(s, c), p.plus(h), this.buffer[1] = p.low(), this.buffer[3] = p.lessThan(h) ? 1 : 0, this.buffer[2] = p.high(), new K(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(K.multiply(i, d)).plus(K.multiply(r, c)).plus(K.multiply(s, a)), this.buffer[3] += K.multiply(e, d).plus(K.multiply(i, c)).plus(K.multiply(r, a)).plus(K.multiply(s, o)).low(), this;
  }
  plus(t) {
    const e = new Uint32Array(4);
    return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this;
  }
  hex() {
    return `${Qe(this.buffer[3])} ${Qe(this.buffer[2])} ${Qe(this.buffer[1])} ${Qe(this.buffer[0])}`;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new Jt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new Jt(new Uint32Array(t.buffer)).plus(e);
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(4)) {
    return Jt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(4)) {
    return Jt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(4)) {
    const i = t.startsWith("-"), r = t.length, s = new Jt(e);
    for (let o = i ? 1 : 0; o < r; ) {
      const a = hn < r - o ? hn : r - o, c = new Jt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])), d = new Jt(new Uint32Array([zr[a], 0, 0, 0]));
      s.times(d), s.plus(c), o += a;
    }
    return i ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 4);
    for (let i = -1, r = t.length; ++i < r; )
      Jt.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 4 * 4 * i, 4));
    return e;
  }
}
class pa extends U {
  constructor(t, e, i, r) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = i, this.dictionaries = r;
  }
  visit(t) {
    return super.visit(t instanceof tt ? t.type : t);
  }
  visitNull(t, { length: e } = this.nextFieldNode()) {
    return L({ type: t, length: e });
  }
  visitBool(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitInt(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFloat(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitUtf8(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDate(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTimestamp(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTime(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDecimal(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitList(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), children: this.visitMany(t.children) });
  }
  visitUnion(t) {
    return t.mode === Rt.Sparse ? this.visitSparseUnion(t) : this.visitDenseUnion(t);
  }
  visitDenseUnion(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return L({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(t, e, i = this.nextBufferRange()) {
    return e > 0 && this.readData(t, i) || new Uint8Array(0);
  }
  readOffsets(t, e) {
    return this.readData(t, e);
  }
  readTypeIds(t, e) {
    return this.readData(t, e);
  }
  readData(t, { length: e, offset: i } = this.nextBufferRange()) {
    return this.bytes.subarray(i, i + e);
  }
  readDictionary(t) {
    return this.dictionaries.get(t.id);
  }
}
class Xl extends pa {
  constructor(t, e, i, r) {
    super(new Uint8Array(0), e, i, r), this.sources = t;
  }
  readNullBitmap(t, e, { offset: i } = this.nextBufferRange()) {
    return e <= 0 ? new Uint8Array(0) : Bi(this.sources[i]);
  }
  readOffsets(t, { offset: e } = this.nextBufferRange()) {
    return q(Uint8Array, q(Int32Array, this.sources[e]));
  }
  readTypeIds(t, { offset: e } = this.nextBufferRange()) {
    return q(Uint8Array, q(t.ArrayType, this.sources[e]));
  }
  readData(t, { offset: e } = this.nextBufferRange()) {
    const { sources: i } = this;
    return I.isTimestamp(t) || (I.isInt(t) || I.isTime(t)) && t.bitWidth === 64 || I.isDate(t) && t.unit === fe.MILLISECOND ? q(Uint8Array, vt.convertArray(i[e])) : I.isDecimal(t) ? q(Uint8Array, Jt.convertArray(i[e])) : I.isBinary(t) || I.isFixedSizeBinary(t) ? Ql(i[e]) : I.isBool(t) ? Bi(i[e]) : I.isUtf8(t) ? Or(i[e].join("")) : q(Uint8Array, q(t.ArrayType, i[e].map((r) => +r)));
  }
}
function Ql(n) {
  const t = n.join(""), e = new Uint8Array(t.length / 2);
  for (let i = 0; i < t.length; i += 2)
    e[i >> 1] = Number.parseInt(t.slice(i, i + 2), 16);
  return e;
}
class F extends U {
  compareSchemas(t, e) {
    return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields);
  }
  compareManyFields(t, e) {
    return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every((i, r) => this.compareFields(i, e[r]));
  }
  compareFields(t, e) {
    return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type);
  }
}
function Ft(n, t) {
  return t instanceof n.constructor;
}
function $n(n, t) {
  return n === t || Ft(n, t);
}
function ye(n, t) {
  return n === t || Ft(n, t) && n.bitWidth === t.bitWidth && n.isSigned === t.isSigned;
}
function Yi(n, t) {
  return n === t || Ft(n, t) && n.precision === t.precision;
}
function tu(n, t) {
  return n === t || Ft(n, t) && n.byteWidth === t.byteWidth;
}
function $r(n, t) {
  return n === t || Ft(n, t) && n.unit === t.unit;
}
function Yn(n, t) {
  return n === t || Ft(n, t) && n.unit === t.unit && n.timezone === t.timezone;
}
function Wn(n, t) {
  return n === t || Ft(n, t) && n.unit === t.unit && n.bitWidth === t.bitWidth;
}
function eu(n, t) {
  return n === t || Ft(n, t) && n.children.length === t.children.length && Be.compareManyFields(n.children, t.children);
}
function nu(n, t) {
  return n === t || Ft(n, t) && n.children.length === t.children.length && Be.compareManyFields(n.children, t.children);
}
function Yr(n, t) {
  return n === t || Ft(n, t) && n.mode === t.mode && n.typeIds.every((e, i) => e === t.typeIds[i]) && Be.compareManyFields(n.children, t.children);
}
function iu(n, t) {
  return n === t || Ft(n, t) && n.id === t.id && n.isOrdered === t.isOrdered && Be.visit(n.indices, t.indices) && Be.visit(n.dictionary, t.dictionary);
}
function Wr(n, t) {
  return n === t || Ft(n, t) && n.unit === t.unit;
}
function ru(n, t) {
  return n === t || Ft(n, t) && n.listSize === t.listSize && n.children.length === t.children.length && Be.compareManyFields(n.children, t.children);
}
function su(n, t) {
  return n === t || Ft(n, t) && n.keysSorted === t.keysSorted && n.children.length === t.children.length && Be.compareManyFields(n.children, t.children);
}
F.prototype.visitNull = $n;
F.prototype.visitBool = $n;
F.prototype.visitInt = ye;
F.prototype.visitInt8 = ye;
F.prototype.visitInt16 = ye;
F.prototype.visitInt32 = ye;
F.prototype.visitInt64 = ye;
F.prototype.visitUint8 = ye;
F.prototype.visitUint16 = ye;
F.prototype.visitUint32 = ye;
F.prototype.visitUint64 = ye;
F.prototype.visitFloat = Yi;
F.prototype.visitFloat16 = Yi;
F.prototype.visitFloat32 = Yi;
F.prototype.visitFloat64 = Yi;
F.prototype.visitUtf8 = $n;
F.prototype.visitBinary = $n;
F.prototype.visitFixedSizeBinary = tu;
F.prototype.visitDate = $r;
F.prototype.visitDateDay = $r;
F.prototype.visitDateMillisecond = $r;
F.prototype.visitTimestamp = Yn;
F.prototype.visitTimestampSecond = Yn;
F.prototype.visitTimestampMillisecond = Yn;
F.prototype.visitTimestampMicrosecond = Yn;
F.prototype.visitTimestampNanosecond = Yn;
F.prototype.visitTime = Wn;
F.prototype.visitTimeSecond = Wn;
F.prototype.visitTimeMillisecond = Wn;
F.prototype.visitTimeMicrosecond = Wn;
F.prototype.visitTimeNanosecond = Wn;
F.prototype.visitDecimal = $n;
F.prototype.visitList = eu;
F.prototype.visitStruct = nu;
F.prototype.visitUnion = Yr;
F.prototype.visitDenseUnion = Yr;
F.prototype.visitSparseUnion = Yr;
F.prototype.visitDictionary = iu;
F.prototype.visitInterval = Wr;
F.prototype.visitIntervalDayTime = Wr;
F.prototype.visitIntervalYearMonth = Wr;
F.prototype.visitFixedSizeList = ru;
F.prototype.visitMap = su;
const Be = new F();
function vr(n, t) {
  return Be.compareSchemas(n, t);
}
function or(n, t) {
  return ou(n, t.map((e) => e.data.concat()));
}
function ou(n, t) {
  const e = [...n.fields], i = [], r = { numBatches: t.reduce((p, v) => Math.max(p, v.length), 0) };
  let s = 0, o = 0, a = -1;
  const c = t.length;
  let d, h = [];
  for (; r.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
      h[a] = d = t[a].shift(), o = Math.min(o, d ? d.length : o);
    Number.isFinite(o) && (h = au(e, o, h, t, r), o > 0 && (i[s++] = L({
      type: new yt(e),
      length: o,
      nullCount: 0,
      children: h.slice()
    })));
  }
  return [
    n = n.assign(e),
    i.map((p) => new It(n, p))
  ];
}
function au(n, t, e, i, r) {
  var s;
  const o = (t + 63 & -64) >> 3;
  for (let a = -1, c = i.length; ++a < c; ) {
    const d = e[a], h = d == null ? void 0 : d.length;
    if (h >= t)
      h === t ? e[a] = d : (e[a] = d.slice(0, t), r.numBatches = Math.max(r.numBatches, i[a].unshift(d.slice(t, h - t))));
    else {
      const p = n[a];
      n[a] = p.clone({ nullable: !0 }), e[a] = (s = d == null ? void 0 : d._changeLengthAndBackfillNullBitmap(t)) !== null && s !== void 0 ? s : L({
        type: p.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(o)
      });
    }
  }
  return e;
}
var ya;
class pt {
  constructor(...t) {
    var e, i;
    if (t.length === 0)
      return this.batches = [], this.schema = new H([]), this._offsets = [0], this;
    let r, s;
    t[0] instanceof H && (r = t.shift()), t[t.length - 1] instanceof Uint32Array && (s = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof It)
          return [c];
        if (c instanceof pt)
          return c.batches;
        if (c instanceof X) {
          if (c.type instanceof yt)
            return [new It(new H(c.type.children), c)];
        } else {
          if (Array.isArray(c))
            return c.flatMap((d) => o(d));
          if (typeof c[Symbol.iterator] == "function")
            return [...c].flatMap((d) => o(d));
          if (typeof c == "object") {
            const d = Object.keys(c), h = d.map((g) => new J([c[g]])), p = new H(d.map((g, N) => new tt(String(g), h[N].type))), [, v] = or(p, h);
            return v.length === 0 ? [new It(c)] : v;
          }
        }
      }
      return [];
    }, a = t.flatMap((c) => o(c));
    if (r = (i = r ?? ((e = a[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && i !== void 0 ? i : new H([]), !(r instanceof H))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of a) {
      if (!(c instanceof It))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!vr(r, c.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = r, this.batches = a, this._offsets = s ?? ta(this.data);
  }
  /**
   * The contiguous {@link RecordBatch `RecordBatch`} chunks of the Table rows.
   */
  get data() {
    return this.batches.map(({ data: t }) => t);
  }
  /**
   * The number of columns in this Table.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this Table.
   */
  get numRows() {
    return this.data.reduce((t, e) => t + e.length, 0);
  }
  /**
   * The number of null rows in this Table.
   */
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = Qo(this.data)), this._nullCount;
  }
  /**
   * Check whether an element is null.
   *
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(t) {
    return !1;
  }
  /**
   * Get an element value by position.
   *
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(t) {
    return null;
  }
  /**
   * Set an element value by position.
   *
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, e) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   *
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, e) {
    return -1;
  }
  /**
   * Get the size in bytes of an element by index.
   * @param index The index at which to get the byteLength.
   */
  // @ts-ignore
  getByteLength(t) {
    return 0;
  }
  /**
   * Iterator for rows in this Table.
   */
  [Symbol.iterator]() {
    return this.batches.length > 0 ? kr.visit(new J(this.data)) : new Array(0)[Symbol.iterator]();
  }
  /**
   * Return a JavaScript Array of the Table rows.
   *
   * @returns An Array of Table rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Returns a string representation of the Table rows.
   *
   * @returns A string representation of the Table rows.
   */
  toString() {
    return `[
  ${this.toArray().join(`,
  `)}
]`;
  }
  /**
   * Combines two or more Tables of the same schema.
   *
   * @param others Additional Tables to add to the end of this Tables.
   */
  concat(...t) {
    const e = this.schema, i = this.data.concat(t.flatMap(({ data: r }) => r));
    return new pt(e, i.map((r) => new It(e, r)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const i = this.schema;
    [t, e] = Zo({ length: this.numRows }, t, e);
    const r = ea(this.data, this._offsets, t, e);
    return new pt(i, r.map((s) => new It(i, s)));
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   *
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    return this.getChildAt(this.schema.fields.findIndex((e) => e.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   *
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    if (t > -1 && t < this.schema.fields.length) {
      const e = this.data.map((i) => i.children[t]);
      if (e.length === 0) {
        const { type: i } = this.schema.fields[t], r = L({ type: i, length: 0, nullCount: 0 });
        e.push(r._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new J(e);
    }
    return null;
  }
  /**
   * Sets a child Vector by name.
   *
   * @param name The name of the child to overwrite.
   * @returns A new Table with the supplied child for the specified name.
   */
  setChild(t, e) {
    var i;
    return this.setChildAt((i = this.schema.fields) === null || i === void 0 ? void 0 : i.findIndex((r) => r.name === t), e);
  }
  setChildAt(t, e) {
    let i = this.schema, r = [...this.batches];
    if (t > -1 && t < this.numCols) {
      e || (e = new J([L({ type: new we(), length: this.numRows })]));
      const s = i.fields.slice(), o = s[t].clone({ type: e.type }), a = this.schema.fields.map((c, d) => this.getChildAt(d));
      [s[t], a[t]] = [o, e], [i, r] = or(i, a);
    }
    return new pt(i, r);
  }
  /**
   * Construct a new Table containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new Table of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.fields.reduce((i, r, s) => i.set(r.name, s), /* @__PURE__ */ new Map());
    return this.selectAt(t.map((i) => e.get(i)).filter((i) => i > -1));
  }
  /**
   * Construct a new Table containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new Table of columns at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), i = this.batches.map((r) => r.selectAt(t));
    return new pt(e, i);
  }
  assign(t) {
    const e = this.schema.fields, [i, r] = t.schema.fields.reduce((a, c, d) => {
      const [h, p] = a, v = e.findIndex((g) => g.name === c.name);
      return ~v ? p[v] = d : h.push(d), a;
    }, [[], []]), s = this.schema.assign(t.schema), o = [
      ...e.map((a, c) => [c, r[c]]).map(([a, c]) => c === void 0 ? this.getChildAt(a) : t.getChildAt(c)),
      ...i.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new pt(...or(s, o));
  }
}
ya = Symbol.toStringTag;
pt[ya] = ((n) => (n.schema = null, n.batches = [], n._offsets = new Uint32Array([0]), n._nullCount = -1, n[Symbol.isConcatSpreadable] = !0, n.isValid = sn(jr), n.get = sn(Ot.getVisitFn(u.Struct)), n.set = na(jt.getVisitFn(u.Struct)), n.indexOf = ia(Ai.getVisitFn(u.Struct)), n.getByteLength = sn(ne.getVisitFn(u.Struct)), "Table"))(pt.prototype);
var ma;
let It = class Dn {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof H))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = L({
            nullCount: 0,
            type: new yt(this.schema.fields),
            children: this.schema.fields.map((e) => L({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof X))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = Ms(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: i, children: r, length: s } = Object.keys(e).reduce((c, d, h) => (c.children[h] = e[d], c.length = Math.max(c.length, e[d].length), c.fields[h] = tt.new({ name: d, type: e[d].type, nullable: !0 }), c), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new H(i), a = L({ type: new yt(i), length: s, children: r, nullCount: 0 });
        [this.schema, this.data] = Ms(o, a.children, s);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = ba(this.schema.fields, this.data.children));
  }
  /**
   * The number of columns in this RecordBatch.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this RecordBatch.
   */
  get numRows() {
    return this.data.length;
  }
  /**
   * The number of null rows in this RecordBatch.
   */
  get nullCount() {
    return this.data.nullCount;
  }
  /**
   * Check whether an element is null.
   * @param index The index at which to read the validity bitmap.
   */
  isValid(t) {
    return this.data.getValid(t);
  }
  /**
   * Get a row by position.
   * @param index The index of the element to read.
   */
  get(t) {
    return Ot.visit(this.data, t);
  }
  /**
   * Set a row by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  set(t, e) {
    return jt.visit(this.data, t, e);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, e) {
    return Ai.visit(this.data, t, e);
  }
  /**
   * Get the size (in bytes) of a row by index.
   * @param index The row index for which to compute the byteLength.
   */
  getByteLength(t) {
    return ne.visit(this.data, t);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return kr.visit(new J([this.data]));
  }
  /**
   * Return a JavaScript Array of the RecordBatch rows.
   * @returns An Array of RecordBatch rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Combines two or more RecordBatch of the same schema.
   * @param others Additional RecordBatch to add to the end of this RecordBatch.
   */
  concat(...t) {
    return new pt(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const [i] = new J([this.data]).slice(t, e).data;
    return new Dn(this.schema, i);
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.schema.fields) === null || e === void 0 ? void 0 : e.findIndex((i) => i.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.schema.fields.length ? new J([this.data.children[t]]) : null;
  }
  /**
   * Sets a child Vector by name.
   * @param name The name of the child to overwrite.
   * @returns A new RecordBatch with the new child for the specified name.
   */
  setChild(t, e) {
    var i;
    return this.setChildAt((i = this.schema.fields) === null || i === void 0 ? void 0 : i.findIndex((r) => r.name === t), e);
  }
  setChildAt(t, e) {
    let i = this.schema, r = this.data;
    if (t > -1 && t < this.numCols) {
      e || (e = new J([L({ type: new we(), length: this.numRows })]));
      const s = i.fields.slice(), o = r.children.slice(), a = s[t].clone({ type: e.type });
      [s[t], o[t]] = [a, e.data[0]], i = new H(s, new Map(this.schema.metadata)), r = L({ type: new yt(s), children: o });
    }
    return new Dn(i, r);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.select(t), i = new yt(e.fields), r = [];
    for (const s of t) {
      const o = this.schema.fields.findIndex((a) => a.name === s);
      ~o && (r[o] = this.data.children[o]);
    }
    return new Dn(e, L({ type: i, length: this.numRows, children: r }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), i = t.map((s) => this.data.children[s]).filter(Boolean), r = L({ type: new yt(e.fields), length: this.numRows, children: i });
    return new Dn(e, r);
  }
};
ma = Symbol.toStringTag;
It[ma] = ((n) => (n._nullCount = -1, n[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(It.prototype);
function Ms(n, t, e = t.reduce((i, r) => Math.max(i, r.length), 0)) {
  var i;
  const r = [...n.fields], s = [...t], o = (e + 63 & -64) >> 3;
  for (const [a, c] of n.fields.entries()) {
    const d = t[a];
    (!d || d.length !== e) && (r[a] = c.clone({ nullable: !0 }), s[a] = (i = d == null ? void 0 : d._changeLengthAndBackfillNullBitmap(e)) !== null && i !== void 0 ? i : L({
      type: c.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    n.assign(r),
    L({ type: new yt(r), length: e, children: s })
  ];
}
function ba(n, t, e = /* @__PURE__ */ new Map()) {
  for (let i = -1, r = n.length; ++i < r; ) {
    const o = n[i].type, a = t[i];
    if (I.isDictionary(o)) {
      if (!e.has(o.id))
        a.dictionary && e.set(o.id, a.dictionary);
      else if (e.get(o.id) !== a.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    o.children && o.children.length > 0 && ba(o.children, a.children, e);
  }
  return e;
}
class Jr extends It {
  constructor(t) {
    const e = t.fields.map((r) => L({ type: r.type })), i = L({ type: new yt(t.fields), nullCount: 0, children: e });
    super(t, i);
  }
}
var Ni;
(function(n) {
  n[n.BUFFER = 0] = "BUFFER";
})(Ni || (Ni = {}));
var Ci;
(function(n) {
  n[n.LZ4_FRAME = 0] = "LZ4_FRAME", n[n.ZSTD = 1] = "ZSTD";
})(Ci || (Ci = {}));
class ge {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBodyCompression(t, e) {
    return (e || new ge()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, e) {
    return t.setPosition(t.position() + Z), (e || new ge()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : Ci.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : Ni.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, e) {
    t.addFieldInt8(0, e, Ci.LZ4_FRAME);
  }
  static addMethod(t, e) {
    t.addFieldInt8(1, e, Ni.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, e, i) {
    return ge.startBodyCompression(t), ge.addCodec(t, e), ge.addMethod(t, i), ge.endBodyCompression(t);
  }
}
class ga {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * The relative offset into the shared memory page where the bytes for this
   * buffer starts
   */
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * The absolute length (in bytes) of the memory buffer. The memory is found
   * from offset (inclusive) to offset + length (non-inclusive). When building
   * messages using the encapsulated IPC message, padding bytes may be written
   * after a buffer, but such padding bytes do not need to be accounted for in
   * the size here.
   */
  length() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createBuffer(t, e, i) {
    return t.prep(8, 16), t.writeInt64(i), t.writeInt64(e), t.offset();
  }
}
let _a = class {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * The number of value slots in the Arrow array at this level of a nested
   * tree
   */
  length() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * The number of observed nulls. Fields with null_count == 0 may choose not
   * to write their physical validity bitmap out as a materialized buffer,
   * instead setting the length of the bitmap buffer to 0.
   */
  nullCount() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createFieldNode(t, e, i) {
    return t.prep(8, 16), t.writeInt64(i), t.writeInt64(e), t.offset();
  }
}, ce = class wr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsRecordBatch(t, e) {
    return (e || new wr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, e) {
    return t.setPosition(t.position() + Z), (e || new wr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * number of records / rows. The arrays in the batch should all have this
   * length
   */
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  /**
   * Nodes correspond to the pre-ordered flattened logical schema
   */
  nodes(t, e) {
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? (e || new _a()).__init(this.bb.__vector(this.bb_pos + i) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Buffers correspond to the pre-ordered flattened buffer tree
   *
   * The number of buffers appended to this list depends on the schema. For
   * example, most primitive arrays will have 2 buffers, 1 for the validity
   * bitmap and 1 for the values. For struct arrays, there will only be a
   * single buffer for the validity (nulls) bitmap
   */
  buffers(t, e) {
    const i = this.bb.__offset(this.bb_pos, 8);
    return i ? (e || new ga()).__init(this.bb.__vector(this.bb_pos + i) + t * 16, this.bb) : null;
  }
  buffersLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Optional compression of the message body
   */
  compression(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? (t || new ge()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  static startRecordBatch(t) {
    t.startObject(4);
  }
  static addLength(t, e) {
    t.addFieldInt64(0, e, t.createLong(0, 0));
  }
  static addNodes(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static startNodesVector(t, e) {
    t.startVector(16, e, 8);
  }
  static addBuffers(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static startBuffersVector(t, e) {
    t.startVector(16, e, 8);
  }
  static addCompression(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static endRecordBatch(t) {
    return t.endObject();
  }
}, Xe = class Sr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryBatch(t, e) {
    return (e || new Sr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, e) {
    return t.setPosition(t.position() + Z), (e || new Sr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  data(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new ce()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * If isDelta is true the values in the dictionary are to be appended to a
   * dictionary with the indicated id. If isDelta is false this dictionary
   * should replace the existing dictionary.
   */
  isDelta() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startDictionaryBatch(t) {
    t.startObject(3);
  }
  static addId(t, e) {
    t.addFieldInt64(0, e, t.createLong(0, 0));
  }
  static addData(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addIsDelta(t, e) {
    t.addFieldInt8(2, +e, 0);
  }
  static endDictionaryBatch(t) {
    return t.endObject();
  }
};
var Li;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Schema = 1] = "Schema", n[n.DictionaryBatch = 2] = "DictionaryBatch", n[n.RecordBatch = 3] = "RecordBatch", n[n.Tensor = 4] = "Tensor", n[n.SparseTensor = 5] = "SparseTensor";
})(Li || (Li = {}));
let me = class Yt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMessage(t, e) {
    return (e || new Yt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, e) {
    return t.setPosition(t.position() + Z), (e || new Yt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : cn.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : Li.NONE;
  }
  // @ts-ignore
  header(t) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? this.bb.__union(t, this.bb_pos + e) : null;
  }
  bodyLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  customMetadata(t, e) {
    const i = this.bb.__offset(this.bb_pos, 12);
    return i ? (e || new ut()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, cn.V1);
  }
  static addHeaderType(t, e) {
    t.addFieldInt8(1, e, Li.NONE);
  }
  static addHeader(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static addBodyLength(t, e) {
    t.addFieldInt64(3, e, t.createLong(0, 0));
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let i = e.length - 1; i >= 0; i--)
      t.addOffset(e[i]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endMessage(t) {
    return t.endObject();
  }
  static finishMessageBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedMessageBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
  static createMessage(t, e, i, r, s, o) {
    return Yt.startMessage(t), Yt.addVersion(t, e), Yt.addHeaderType(t, i), Yt.addHeader(t, r), Yt.addBodyLength(t, s), Yt.addCustomMetadata(t, o), Yt.endMessage(t);
  }
};
var cu = de;
class lu extends U {
  visit(t, e) {
    return t == null || e == null ? void 0 : super.visit(t, e);
  }
  visitNull(t, e) {
    return Ce.startNull(e), Ce.endNull(e);
  }
  visitInt(t, e) {
    return Et.startInt(e), Et.addBitWidth(e, t.bitWidth), Et.addIsSigned(e, t.isSigned), Et.endInt(e);
  }
  visitFloat(t, e) {
    return Zt.startFloatingPoint(e), Zt.addPrecision(e, t.precision), Zt.endFloatingPoint(e);
  }
  visitBinary(t, e) {
    return Re.startBinary(e), Re.endBinary(e);
  }
  visitBool(t, e) {
    return xe.startBool(e), xe.endBool(e);
  }
  visitUtf8(t, e) {
    return Ue.startUtf8(e), Ue.endUtf8(e);
  }
  visitDecimal(t, e) {
    return wt.startDecimal(e), wt.addScale(e, t.scale), wt.addPrecision(e, t.precision), wt.addBitWidth(e, t.bitWidth), wt.endDecimal(e);
  }
  visitDate(t, e) {
    return oi.startDate(e), oi.addUnit(e, t.unit), oi.endDate(e);
  }
  visitTime(t, e) {
    return Ut.startTime(e), Ut.addUnit(e, t.unit), Ut.addBitWidth(e, t.bitWidth), Ut.endTime(e);
  }
  visitTimestamp(t, e) {
    const i = t.timezone && e.createString(t.timezone) || void 0;
    return Pt.startTimestamp(e), Pt.addUnit(e, t.unit), i !== void 0 && Pt.addTimezone(e, i), Pt.endTimestamp(e);
  }
  visitInterval(t, e) {
    return Xt.startInterval(e), Xt.addUnit(e, t.unit), Xt.endInterval(e);
  }
  visitList(t, e) {
    return Ne.startList(e), Ne.endList(e);
  }
  visitStruct(t, e) {
    return Le.startStruct_(e), Le.endStruct_(e);
  }
  visitUnion(t, e) {
    St.startTypeIdsVector(e, t.typeIds.length);
    const i = St.createTypeIdsVector(e, t.typeIds);
    return St.startUnion(e), St.addMode(e, t.mode), St.addTypeIds(e, i), St.endUnion(e);
  }
  visitDictionary(t, e) {
    const i = this.visit(t.indices, e);
    return ue.startDictionaryEncoding(e), ue.addId(e, new cu(t.id, 0)), ue.addIsOrdered(e, t.isOrdered), i !== void 0 && ue.addIndexType(e, i), ue.endDictionaryEncoding(e);
  }
  visitFixedSizeBinary(t, e) {
    return Gt.startFixedSizeBinary(e), Gt.addByteWidth(e, t.byteWidth), Gt.endFixedSizeBinary(e);
  }
  visitFixedSizeList(t, e) {
    return qt.startFixedSizeList(e), qt.addListSize(e, t.listSize), qt.endFixedSizeList(e);
  }
  visitMap(t, e) {
    return ai.startMap(e), ai.addKeysSorted(e, t.keysSorted), ai.endMap(e);
  }
}
const ar = new lu();
function uu(n, t = /* @__PURE__ */ new Map()) {
  return new H(hu(n, t), ui(n.customMetadata), t);
}
function va(n) {
  return new xt(n.count, wa(n.columns), Sa(n.columns));
}
function du(n) {
  return new ie(va(n.data), n.id, n.isDelta);
}
function hu(n, t) {
  return (n.fields || []).filter(Boolean).map((e) => tt.fromJSON(e, t));
}
function Rs(n, t) {
  return (n.children || []).filter(Boolean).map((e) => tt.fromJSON(e, t));
}
function wa(n) {
  return (n || []).reduce((t, e) => [
    ...t,
    new Ve(e.count, fu(e.VALIDITY)),
    ...wa(e.children)
  ], []);
}
function Sa(n, t = []) {
  for (let e = -1, i = (n || []).length; ++e < i; ) {
    const r = n[e];
    r.VALIDITY && t.push(new te(t.length, r.VALIDITY.length)), r.TYPE && t.push(new te(t.length, r.TYPE.length)), r.OFFSET && t.push(new te(t.length, r.OFFSET.length)), r.DATA && t.push(new te(t.length, r.DATA.length)), t = Sa(r.children, t);
  }
  return t;
}
function fu(n) {
  return (n || []).reduce((t, e) => t + +(e === 0), 0);
}
function pu(n, t) {
  let e, i, r, s, o, a;
  return !t || !(s = n.dictionary) ? (o = Ns(n, Rs(n, t)), r = new tt(n.name, o, n.nullable, ui(n.customMetadata))) : t.has(e = s.id) ? (i = (i = s.indexType) ? xs(i) : new Cn(), a = new on(t.get(e), i, e, s.isOrdered), r = new tt(n.name, a, n.nullable, ui(n.customMetadata))) : (i = (i = s.indexType) ? xs(i) : new Cn(), t.set(e, o = Ns(n, Rs(n, t))), a = new on(o, i, e, s.isOrdered), r = new tt(n.name, a, n.nullable, ui(n.customMetadata))), r || null;
}
function ui(n) {
  return new Map(Object.entries(n || {}));
}
function xs(n) {
  return new Se(n.isSigned, n.bitWidth);
}
function Ns(n, t) {
  const e = n.type.name;
  switch (e) {
    case "NONE":
      return new we();
    case "null":
      return new we();
    case "binary":
      return new hi();
    case "utf8":
      return new fi();
    case "bool":
      return new pi();
    case "list":
      return new _i((t || [])[0]);
    case "struct":
      return new yt(t || []);
    case "struct_":
      return new yt(t || []);
  }
  switch (e) {
    case "int": {
      const i = n.type;
      return new Se(i.isSigned, i.bitWidth);
    }
    case "floatingpoint": {
      const i = n.type;
      return new Ln(Bt[i.precision]);
    }
    case "decimal": {
      const i = n.type;
      return new yi(i.scale, i.precision, i.bitWidth);
    }
    case "date": {
      const i = n.type;
      return new mi(fe[i.unit]);
    }
    case "time": {
      const i = n.type;
      return new Un(V[i.unit], i.bitWidth);
    }
    case "timestamp": {
      const i = n.type;
      return new bi(V[i.unit], i.timezone);
    }
    case "interval": {
      const i = n.type;
      return new gi(ve[i.unit]);
    }
    case "union": {
      const i = n.type;
      return new vi(Rt[i.mode], i.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const i = n.type;
      return new wi(i.byteWidth);
    }
    case "fixedsizelist": {
      const i = n.type;
      return new Si(i.listSize, (t || [])[0]);
    }
    case "map": {
      const i = n.type;
      return new Ii((t || [])[0], i.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${e}"`);
}
var ke = de, yu = da, mu = an;
class mt {
  constructor(t, e, i, r) {
    this._version = e, this._headerType = i, this.body = new Uint8Array(0), r && (this._createHeader = () => r), this._bodyLength = typeof t == "number" ? t : t.low;
  }
  /** @nocollapse */
  static fromJSON(t, e) {
    const i = new mt(0, Mt.V4, e);
    return i._createHeader = bu(t, e), i;
  }
  /** @nocollapse */
  static decode(t) {
    t = new mu(k(t));
    const e = me.getRootAsMessage(t), i = e.bodyLength(), r = e.version(), s = e.headerType(), o = new mt(i, r, s);
    return o._createHeader = gu(e, s), o;
  }
  /** @nocollapse */
  static encode(t) {
    const e = new yu();
    let i = -1;
    return t.isSchema() ? i = H.encode(e, t.header()) : t.isRecordBatch() ? i = xt.encode(e, t.header()) : t.isDictionaryBatch() && (i = ie.encode(e, t.header())), me.startMessage(e), me.addVersion(e, Mt.V4), me.addHeader(e, i), me.addHeaderType(e, t.headerType), me.addBodyLength(e, new ke(t.bodyLength, 0)), me.finishMessageBuffer(e, me.endMessage(e)), e.asUint8Array();
  }
  /** @nocollapse */
  static from(t, e = 0) {
    if (t instanceof H)
      return new mt(0, Mt.V4, W.Schema, t);
    if (t instanceof xt)
      return new mt(e, Mt.V4, W.RecordBatch, t);
    if (t instanceof ie)
      return new mt(e, Mt.V4, W.DictionaryBatch, t);
    throw new Error(`Unrecognized Message header: ${t}`);
  }
  get type() {
    return this.headerType;
  }
  get version() {
    return this._version;
  }
  get headerType() {
    return this._headerType;
  }
  get bodyLength() {
    return this._bodyLength;
  }
  header() {
    return this._createHeader();
  }
  isSchema() {
    return this.headerType === W.Schema;
  }
  isRecordBatch() {
    return this.headerType === W.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === W.DictionaryBatch;
  }
}
class xt {
  constructor(t, e, i) {
    this._nodes = e, this._buffers = i, this._length = typeof t == "number" ? t : t.low;
  }
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
}
class ie {
  constructor(t, e, i = !1) {
    this._data = t, this._isDelta = i, this._id = typeof e == "number" ? e : e.low;
  }
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get isDelta() {
    return this._isDelta;
  }
  get length() {
    return this.data.length;
  }
  get nodes() {
    return this.data.nodes;
  }
  get buffers() {
    return this.data.buffers;
  }
}
class te {
  constructor(t, e) {
    this.offset = typeof t == "number" ? t : t.low, this.length = typeof e == "number" ? e : e.low;
  }
}
class Ve {
  constructor(t, e) {
    this.length = typeof t == "number" ? t : t.low, this.nullCount = typeof e == "number" ? e : e.low;
  }
}
function bu(n, t) {
  return () => {
    switch (t) {
      case W.Schema:
        return H.fromJSON(n);
      case W.RecordBatch:
        return xt.fromJSON(n);
      case W.DictionaryBatch:
        return ie.fromJSON(n);
    }
    throw new Error(`Unrecognized Message type: { name: ${W[t]}, type: ${t} }`);
  };
}
function gu(n, t) {
  return () => {
    switch (t) {
      case W.Schema:
        return H.decode(n.header(new Wt()));
      case W.RecordBatch:
        return xt.decode(n.header(new ce()), n.version());
      case W.DictionaryBatch:
        return ie.decode(n.header(new Xe()), n.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${W[t]}, type: ${t} }`);
  };
}
tt.encode = Tu;
tt.decode = Fu;
tt.fromJSON = pu;
H.encode = Du;
H.decode = _u;
H.fromJSON = uu;
xt.encode = Eu;
xt.decode = vu;
xt.fromJSON = va;
ie.encode = Mu;
ie.decode = wu;
ie.fromJSON = du;
Ve.encode = Ru;
Ve.decode = Iu;
te.encode = xu;
te.decode = Su;
function _u(n, t = /* @__PURE__ */ new Map()) {
  const e = Ou(n, t);
  return new H(e, di(n), t);
}
function vu(n, t = Mt.V4) {
  if (n.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new xt(n.length(), Bu(n), Au(n, t));
}
function wu(n, t = Mt.V4) {
  return new ie(xt.decode(n.data(), t), n.id(), n.isDelta());
}
function Su(n) {
  return new te(n.offset(), n.length());
}
function Iu(n) {
  return new Ve(n.length(), n.nullCount());
}
function Bu(n) {
  const t = [];
  for (let e, i = -1, r = -1, s = n.nodesLength(); ++i < s; )
    (e = n.nodes(i)) && (t[++r] = Ve.decode(e));
  return t;
}
function Au(n, t) {
  const e = [];
  for (let i, r = -1, s = -1, o = n.buffersLength(); ++r < o; )
    (i = n.buffers(r)) && (t < Mt.V4 && (i.bb_pos += 8 * (r + 1)), e[++s] = te.decode(i));
  return e;
}
function Ou(n, t) {
  const e = [];
  for (let i, r = -1, s = -1, o = n.fieldsLength(); ++r < o; )
    (i = n.fields(r)) && (e[++s] = tt.decode(i, t));
  return e;
}
function Cs(n, t) {
  const e = [];
  for (let i, r = -1, s = -1, o = n.childrenLength(); ++r < o; )
    (i = n.children(r)) && (e[++s] = tt.decode(i, t));
  return e;
}
function Fu(n, t) {
  let e, i, r, s, o, a;
  return !t || !(a = n.dictionary()) ? (r = Us(n, Cs(n, t)), i = new tt(n.name(), r, n.nullable(), di(n))) : t.has(e = a.id().low) ? (s = (s = a.indexType()) ? Ls(s) : new Cn(), o = new on(t.get(e), s, e, a.isOrdered()), i = new tt(n.name(), o, n.nullable(), di(n))) : (s = (s = a.indexType()) ? Ls(s) : new Cn(), t.set(e, r = Us(n, Cs(n, t))), o = new on(r, s, e, a.isOrdered()), i = new tt(n.name(), o, n.nullable(), di(n))), i || null;
}
function di(n) {
  const t = /* @__PURE__ */ new Map();
  if (n)
    for (let e, i, r = -1, s = Math.trunc(n.customMetadataLength()); ++r < s; )
      (e = n.customMetadata(r)) && (i = e.key()) != null && t.set(i, e.value());
  return t;
}
function Ls(n) {
  return new Se(n.isSigned(), n.bitWidth());
}
function Us(n, t) {
  const e = n.typeType();
  switch (e) {
    case nt.NONE:
      return new we();
    case nt.Null:
      return new we();
    case nt.Binary:
      return new hi();
    case nt.Utf8:
      return new fi();
    case nt.Bool:
      return new pi();
    case nt.List:
      return new _i((t || [])[0]);
    case nt.Struct_:
      return new yt(t || []);
  }
  switch (e) {
    case nt.Int: {
      const i = n.type(new Et());
      return new Se(i.isSigned(), i.bitWidth());
    }
    case nt.FloatingPoint: {
      const i = n.type(new Zt());
      return new Ln(i.precision());
    }
    case nt.Decimal: {
      const i = n.type(new wt());
      return new yi(i.scale(), i.precision(), i.bitWidth());
    }
    case nt.Date: {
      const i = n.type(new oi());
      return new mi(i.unit());
    }
    case nt.Time: {
      const i = n.type(new Ut());
      return new Un(i.unit(), i.bitWidth());
    }
    case nt.Timestamp: {
      const i = n.type(new Pt());
      return new bi(i.unit(), i.timezone());
    }
    case nt.Interval: {
      const i = n.type(new Xt());
      return new gi(i.unit());
    }
    case nt.Union: {
      const i = n.type(new St());
      return new vi(i.mode(), i.typeIdsArray() || [], t || []);
    }
    case nt.FixedSizeBinary: {
      const i = n.type(new Gt());
      return new wi(i.byteWidth());
    }
    case nt.FixedSizeList: {
      const i = n.type(new qt());
      return new Si(i.listSize(), (t || [])[0]);
    }
    case nt.Map: {
      const i = n.type(new ai());
      return new Ii((t || [])[0], i.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${nt[e]}" (${e})`);
}
function Du(n, t) {
  const e = t.fields.map((s) => tt.encode(n, s));
  Wt.startFieldsVector(n, e.length);
  const i = Wt.createFieldsVector(n, e), r = t.metadata && t.metadata.size > 0 ? Wt.createCustomMetadataVector(n, [...t.metadata].map(([s, o]) => {
    const a = n.createString(`${s}`), c = n.createString(`${o}`);
    return ut.startKeyValue(n), ut.addKey(n, a), ut.addValue(n, c), ut.endKeyValue(n);
  })) : -1;
  return Wt.startSchema(n), Wt.addFields(n, i), Wt.addEndianness(n, Nu ? ln.Little : ln.Big), r !== -1 && Wt.addCustomMetadata(n, r), Wt.endSchema(n);
}
function Tu(n, t) {
  let e = -1, i = -1, r = -1;
  const s = t.type;
  let o = t.typeId;
  I.isDictionary(s) ? (o = s.dictionary.typeId, r = ar.visit(s, n), i = ar.visit(s.dictionary, n)) : i = ar.visit(s, n);
  const a = (s.children || []).map((h) => tt.encode(n, h)), c = Ct.createChildrenVector(n, a), d = t.metadata && t.metadata.size > 0 ? Ct.createCustomMetadataVector(n, [...t.metadata].map(([h, p]) => {
    const v = n.createString(`${h}`), g = n.createString(`${p}`);
    return ut.startKeyValue(n), ut.addKey(n, v), ut.addValue(n, g), ut.endKeyValue(n);
  })) : -1;
  return t.name && (e = n.createString(t.name)), Ct.startField(n), Ct.addType(n, i), Ct.addTypeType(n, o), Ct.addChildren(n, c), Ct.addNullable(n, !!t.nullable), e !== -1 && Ct.addName(n, e), r !== -1 && Ct.addDictionary(n, r), d !== -1 && Ct.addCustomMetadata(n, d), Ct.endField(n);
}
function Eu(n, t) {
  const e = t.nodes || [], i = t.buffers || [];
  ce.startNodesVector(n, e.length);
  for (const o of e.slice().reverse())
    Ve.encode(n, o);
  const r = n.endVector();
  ce.startBuffersVector(n, i.length);
  for (const o of i.slice().reverse())
    te.encode(n, o);
  const s = n.endVector();
  return ce.startRecordBatch(n), ce.addLength(n, new ke(t.length, 0)), ce.addNodes(n, r), ce.addBuffers(n, s), ce.endRecordBatch(n);
}
function Mu(n, t) {
  const e = xt.encode(n, t.data);
  return Xe.startDictionaryBatch(n), Xe.addId(n, new ke(t.id, 0)), Xe.addIsDelta(n, t.isDelta), Xe.addData(n, e), Xe.endDictionaryBatch(n);
}
function Ru(n, t) {
  return _a.createFieldNode(n, new ke(t.length, 0), new ke(t.nullCount, 0));
}
function xu(n, t) {
  return ga.createBuffer(n, new ke(t.offset, 0), new ke(t.length, 0));
}
const Nu = (() => {
  const n = new ArrayBuffer(2);
  return new DataView(n).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(n)[0] === 256;
})(), Hr = (n) => `Expected ${W[n]} Message in stream, but was null or length 0.`, Kr = (n) => `Header pointer of flatbuffer-encoded ${W[n]} Message is null or length 0.`, Ia = (n, t) => `Expected to read ${n} metadata bytes, but only read ${t}.`, Ba = (n, t) => `Expected to read ${n} bytes for message body, but only read ${t}.`;
class Aa {
  constructor(t) {
    this.source = t instanceof Ri ? t : new Ri(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? it : t;
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  readMessage(t) {
    let e;
    if ((e = this.next()).done)
      return null;
    if (t != null && e.value.headerType !== t)
      throw new Error(Hr(t));
    return e.value;
  }
  readMessageBody(t) {
    if (t <= 0)
      return new Uint8Array(0);
    const e = k(this.source.read(t));
    if (e.byteLength < t)
      throw new Error(Ba(t, e.byteLength));
    return (
      /* 1. */
      e.byteOffset % 8 === 0 && /* 2. */
      e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
    );
  }
  readSchema(t = !1) {
    const e = W.Schema, i = this.readMessage(e), r = i == null ? void 0 : i.header();
    if (t && !r)
      throw new Error(Kr(e));
    return r;
  }
  readMetadataLength() {
    const t = this.source.read(Wi), e = t && new an(t), i = (e == null ? void 0 : e.readInt32(0)) || 0;
    return { done: i === 0, value: i };
  }
  readMetadata(t) {
    const e = this.source.read(t);
    if (!e)
      return it;
    if (e.byteLength < t)
      throw new Error(Ia(t, e.byteLength));
    return { done: !1, value: mt.decode(e) };
  }
}
class Cu {
  constructor(t, e) {
    this.source = t instanceof dn ? t : Ws(t) ? new xi(t, e) : new dn(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return S(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? it : t;
    });
  }
  throw(t) {
    return S(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return S(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return S(this, void 0, void 0, function* () {
      let e;
      if ((e = yield this.next()).done)
        return null;
      if (t != null && e.value.headerType !== t)
        throw new Error(Hr(t));
      return e.value;
    });
  }
  readMessageBody(t) {
    return S(this, void 0, void 0, function* () {
      if (t <= 0)
        return new Uint8Array(0);
      const e = k(yield this.source.read(t));
      if (e.byteLength < t)
        throw new Error(Ba(t, e.byteLength));
      return (
        /* 1. */
        e.byteOffset % 8 === 0 && /* 2. */
        e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
      );
    });
  }
  readSchema(t = !1) {
    return S(this, void 0, void 0, function* () {
      const e = W.Schema, i = yield this.readMessage(e), r = i == null ? void 0 : i.header();
      if (t && !r)
        throw new Error(Kr(e));
      return r;
    });
  }
  readMetadataLength() {
    return S(this, void 0, void 0, function* () {
      const t = yield this.source.read(Wi), e = t && new an(t), i = (e == null ? void 0 : e.readInt32(0)) || 0;
      return { done: i === 0, value: i };
    });
  }
  readMetadata(t) {
    return S(this, void 0, void 0, function* () {
      const e = yield this.source.read(t);
      if (!e)
        return it;
      if (e.byteLength < t)
        throw new Error(Ia(t, e.byteLength));
      return { done: !1, value: mt.decode(e) };
    });
  }
}
class Lu extends Aa {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof Ts ? t : new Ts(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: mt.fromJSON(t.schema, W.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const e = t.dictionaries[this._dictionaryIndex++];
      return this._body = e.data.columns, { done: !1, value: mt.fromJSON(e, W.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const e = t.batches[this._batchIndex++];
      return this._body = e.columns, { done: !1, value: mt.fromJSON(e, W.RecordBatch) };
    }
    return this._body = [], it;
  }
  readMessageBody(t) {
    return e(this._body);
    function e(i) {
      return (i || []).reduce((r, s) => [
        ...r,
        ...s.VALIDITY && [s.VALIDITY] || [],
        ...s.TYPE && [s.TYPE] || [],
        ...s.OFFSET && [s.OFFSET] || [],
        ...s.DATA && [s.DATA] || [],
        ...e(s.children)
      ], []);
    }
  }
  readMessage(t) {
    let e;
    if ((e = this.next()).done)
      return null;
    if (t != null && e.value.headerType !== t)
      throw new Error(Hr(t));
    return e.value;
  }
  readSchema() {
    const t = W.Schema, e = this.readMessage(t), i = e == null ? void 0 : e.header();
    if (!e || !i)
      throw new Error(Kr(t));
    return i;
  }
}
const Wi = 4, Ir = "ARROW1", jn = new Uint8Array(Ir.length);
for (let n = 0; n < Ir.length; n += 1)
  jn[n] = Ir.codePointAt(n);
function Gr(n, t = 0) {
  for (let e = -1, i = jn.length; ++e < i; )
    if (jn[e] !== n[t + e])
      return !1;
  return !0;
}
const Jn = jn.length, Oa = Jn + Wi, Uu = Jn * 2 + Wi;
class he extends Vr {
  constructor(t) {
    super(), this._impl = t;
  }
  get closed() {
    return this._impl.closed;
  }
  get schema() {
    return this._impl.schema;
  }
  get autoDestroy() {
    return this._impl.autoDestroy;
  }
  get dictionaries() {
    return this._impl.dictionaries;
  }
  get numDictionaries() {
    return this._impl.numDictionaries;
  }
  get numRecordBatches() {
    return this._impl.numRecordBatches;
  }
  get footer() {
    return this._impl.isFile() ? this._impl.footer : null;
  }
  isSync() {
    return this._impl.isSync();
  }
  isAsync() {
    return this._impl.isAsync();
  }
  isFile() {
    return this._impl.isFile();
  }
  isStream() {
    return this._impl.isStream();
  }
  next() {
    return this._impl.next();
  }
  throw(t) {
    return this._impl.throw(t);
  }
  return(t) {
    return this._impl.return(t);
  }
  cancel() {
    return this._impl.cancel();
  }
  reset(t) {
    return this._impl.reset(t), this._DOMStream = void 0, this._nodeStream = void 0, this;
  }
  open(t) {
    const e = this._impl.open(t);
    return _e(e) ? e.then(() => this) : this;
  }
  readRecordBatch(t) {
    return this._impl.isFile() ? this._impl.readRecordBatch(t) : null;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
  toDOMStream() {
    return Lt.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return Lt.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
  }
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, e) {
    throw new Error('"throughDOM" not available in this environment');
  }
  /** @nocollapse */
  static from(t) {
    return t instanceof he ? t : hr(t) ? Vu(t) : Ws(t) ? Yu(t) : _e(t) ? S(this, void 0, void 0, function* () {
      return yield he.from(yield t);
    }) : Js(t) || Fr(t) || Hs(t) || fn(t) ? $u(new dn(t)) : zu(new Ri(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof he ? t.isSync() ? Ps(t) : js(t) : hr(t) || ArrayBuffer.isView(t) || zn(t) || Ys(t) ? Ps(t) : js(t);
  }
}
class Ui extends he {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return [...this];
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return Qt(this, arguments, function* () {
      yield R(yield* si(Pe(this[Symbol.iterator]())));
    });
  }
}
class Pi extends he {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    var t, e;
    return S(this, void 0, void 0, function* () {
      const i = new Array();
      try {
        for (var r = Pe(this), s; s = yield r.next(), !s.done; ) {
          const o = s.value;
          i.push(o);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          s && !s.done && (e = r.return) && (yield e.call(r));
        } finally {
          if (t) throw t.error;
        }
      }
      return i;
    });
  }
  [Symbol.iterator]() {
    throw new Error("AsyncRecordBatchStreamReader is not Iterable");
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
}
class Fa extends Ui {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class Pu extends Pi {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class Da {
  constructor(t = /* @__PURE__ */ new Map()) {
    this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = t;
  }
  get numDictionaries() {
    return this._dictionaryIndex;
  }
  get numRecordBatches() {
    return this._recordBatchIndex;
  }
  isSync() {
    return !1;
  }
  isAsync() {
    return !1;
  }
  isFile() {
    return !1;
  }
  isStream() {
    return !1;
  }
  reset(t) {
    return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = t, this.dictionaries = /* @__PURE__ */ new Map(), this;
  }
  _loadRecordBatch(t, e) {
    const i = this._loadVectors(t, e, this.schema.fields), r = L({ type: new yt(this.schema.fields), length: t.length, children: i });
    return new It(this.schema, r);
  }
  _loadDictionaryBatch(t, e) {
    const { id: i, isDelta: r } = t, { dictionaries: s, schema: o } = this, a = s.get(i);
    if (r || !a) {
      const c = o.dictionaries.get(i), d = this._loadVectors(t.data, e, [c]);
      return (a && r ? a.concat(new J(d)) : new J(d)).memoize();
    }
    return a.memoize();
  }
  _loadVectors(t, e, i) {
    return new pa(e, t.nodes, t.buffers, this.dictionaries).visitMany(i);
  }
}
class ji extends Da {
  constructor(t, e) {
    super(e), this._reader = hr(t) ? new Lu(this._handle = t) : new Aa(this._handle = t);
  }
  isSync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.iterator]() {
    return this;
  }
  cancel() {
    !this.closed && (this.closed = !0) && (this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
  }
  open(t) {
    return this.closed || (this.autoDestroy = Ea(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : it;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : it;
  }
  next() {
    if (this.closed)
      return it;
    let t;
    const { _reader: e } = this;
    for (; t = this._readNextMessageAndValidate(); )
      if (t.isSchema())
        this.reset(t.header());
      else if (t.isRecordBatch()) {
        this._recordBatchIndex++;
        const i = t.header(), r = e.readMessageBody(t.bodyLength);
        return { done: !1, value: this._loadRecordBatch(i, r) };
      } else if (t.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const i = t.header(), r = e.readMessageBody(t.bodyLength), s = this._loadDictionaryBatch(i, r);
        this.dictionaries.set(i.id, s);
      }
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Jr(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class ki extends Da {
  constructor(t, e) {
    super(e), this._reader = new Cu(this._handle = t);
  }
  isAsync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  cancel() {
    return S(this, void 0, void 0, function* () {
      !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return S(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = Ea(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return S(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : it;
    });
  }
  return(t) {
    return S(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : it;
    });
  }
  next() {
    return S(this, void 0, void 0, function* () {
      if (this.closed)
        return it;
      let t;
      const { _reader: e } = this;
      for (; t = yield this._readNextMessageAndValidate(); )
        if (t.isSchema())
          yield this.reset(t.header());
        else if (t.isRecordBatch()) {
          this._recordBatchIndex++;
          const i = t.header(), r = yield e.readMessageBody(t.bodyLength);
          return { done: !1, value: this._loadRecordBatch(i, r) };
        } else if (t.isDictionaryBatch()) {
          this._dictionaryIndex++;
          const i = t.header(), r = yield e.readMessageBody(t.bodyLength), s = this._loadDictionaryBatch(i, r);
          this.dictionaries.set(i.id, s);
        }
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Jr(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return S(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class Ta extends ji {
  constructor(t, e) {
    super(t instanceof Es ? t : new Es(t), e);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isSync() {
    return !0;
  }
  isFile() {
    return !0;
  }
  open(t) {
    if (!this.closed && !this._footer) {
      this.schema = (this._footer = this._readFooter()).schema;
      for (const e of this._footer.dictionaryBatches())
        e && this._readDictionaryBatch(this._dictionaryIndex++);
    }
    return super.open(t);
  }
  readRecordBatch(t) {
    var e;
    if (this.closed)
      return null;
    this._footer || this.open();
    const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
    if (i && this._handle.seek(i.offset)) {
      const r = this._reader.readMessage(W.RecordBatch);
      if (r != null && r.isRecordBatch()) {
        const s = r.header(), o = this._reader.readMessageBody(r.bodyLength);
        return this._loadRecordBatch(s, o);
      }
    }
    return null;
  }
  _readDictionaryBatch(t) {
    var e;
    const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
    if (i && this._handle.seek(i.offset)) {
      const r = this._reader.readMessage(W.DictionaryBatch);
      if (r != null && r.isDictionaryBatch()) {
        const s = r.header(), o = this._reader.readMessageBody(r.bodyLength), a = this._loadDictionaryBatch(s, o);
        this.dictionaries.set(s.id, a);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, e = t.size - Oa, i = t.readInt32(e), r = t.readAt(e - i, i);
    return Pn.decode(r);
  }
  _readNextMessageAndValidate(t) {
    var e;
    if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(this._recordBatchIndex);
      if (i && this._handle.seek(i.offset))
        return this._reader.readMessage(t);
    }
    return null;
  }
}
class ju extends ki {
  constructor(t, ...e) {
    const i = typeof e[0] != "number" ? e.shift() : void 0, r = e[0] instanceof Map ? e.shift() : void 0;
    super(t instanceof xi ? t : new xi(t, i), r);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isFile() {
    return !0;
  }
  isAsync() {
    return !0;
  }
  open(t) {
    const e = Object.create(null, {
      open: { get: () => super.open }
    });
    return S(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const i of this._footer.dictionaryBatches())
          i && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield e.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    var e;
    return S(this, void 0, void 0, function* () {
      if (this.closed)
        return null;
      this._footer || (yield this.open());
      const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
      if (i && (yield this._handle.seek(i.offset))) {
        const r = yield this._reader.readMessage(W.RecordBatch);
        if (r != null && r.isRecordBatch()) {
          const s = r.header(), o = yield this._reader.readMessageBody(r.bodyLength);
          return this._loadRecordBatch(s, o);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(t) {
    var e;
    return S(this, void 0, void 0, function* () {
      const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
      if (i && (yield this._handle.seek(i.offset))) {
        const r = yield this._reader.readMessage(W.DictionaryBatch);
        if (r != null && r.isDictionaryBatch()) {
          const s = r.header(), o = yield this._reader.readMessageBody(r.bodyLength), a = this._loadDictionaryBatch(s, o);
          this.dictionaries.set(s.id, a);
        }
      }
    });
  }
  _readFooter() {
    return S(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const e = t.size - Oa, i = yield t.readInt32(e), r = yield t.readAt(e - i, i);
      return Pn.decode(r);
    });
  }
  _readNextMessageAndValidate(t) {
    return S(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const e = this._footer.getRecordBatch(this._recordBatchIndex);
        if (e && (yield this._handle.seek(e.offset)))
          return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class ku extends ji {
  constructor(t, e) {
    super(t, e);
  }
  _loadVectors(t, e, i) {
    return new Xl(e, t.nodes, t.buffers, this.dictionaries).visitMany(i);
  }
}
function Ea(n, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : n.autoDestroy;
}
function* Ps(n) {
  const t = he.from(n);
  try {
    if (!t.open({ autoDestroy: !1 }).closed)
      do
        yield t;
      while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function js(n) {
  return Qt(this, arguments, function* () {
    const e = yield R(he.from(n));
    try {
      if (!(yield R(e.open({ autoDestroy: !1 }))).closed)
        do
          yield yield R(e);
        while (!(yield R(e.reset().open())).closed);
    } finally {
      yield R(e.cancel());
    }
  });
}
function Vu(n) {
  return new Ui(new ku(n));
}
function zu(n) {
  const t = n.peek(Jn + 7 & -8);
  return t && t.byteLength >= 4 ? Gr(t) ? new Fa(new Ta(n.read())) : new Ui(new ji(n)) : new Ui(new ji(function* () {
  }()));
}
function $u(n) {
  return S(this, void 0, void 0, function* () {
    const t = yield n.peek(Jn + 7 & -8);
    return t && t.byteLength >= 4 ? Gr(t) ? new Fa(new Ta(yield n.read())) : new Pi(new ki(n)) : new Pi(new ki(function() {
      return Qt(this, arguments, function* () {
      });
    }()));
  });
}
function Yu(n) {
  return S(this, void 0, void 0, function* () {
    const { size: t } = yield n.stat(), e = new xi(n, t);
    return t >= Uu && Gr(yield e.readAt(0, Jn + 7 & -8)) ? new Pu(new ju(e)) : new Pi(new ki(e));
  });
}
class ct extends U {
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  /** @nocollapse */
  static assemble(...t) {
    const e = (r) => r.flatMap((s) => Array.isArray(s) ? e(s) : s instanceof It ? s.data.children : s.data), i = new ct();
    return i.visitMany(e(t)), i;
  }
  visit(t) {
    if (t instanceof J)
      return this.visitMany(t.data), this;
    const { type: e } = t;
    if (!I.isDictionary(e)) {
      const { length: i, nullCount: r } = t;
      if (i > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      I.isNull(e) || zt.call(this, r <= 0 ? new Uint8Array(0) : Lr(t.offset, i, t.nullBitmap)), this.nodes.push(new Ve(i, r));
    }
    return super.visit(t);
  }
  visitNull(t) {
    return this;
  }
  visitDictionary(t) {
    return this.visit(t.clone(t.type.indices));
  }
  get nodes() {
    return this._nodes;
  }
  get buffers() {
    return this._buffers;
  }
  get byteLength() {
    return this._byteLength;
  }
  get bufferRegions() {
    return this._bufferRegions;
  }
}
function zt(n) {
  const t = n.byteLength + 7 & -8;
  return this.buffers.push(n), this.bufferRegions.push(new te(this._byteLength, t)), this._byteLength += t, this;
}
function Wu(n) {
  const { type: t, length: e, typeIds: i, valueOffsets: r } = n;
  if (zt.call(this, i), t.mode === Rt.Sparse)
    return Br.call(this, n);
  if (t.mode === Rt.Dense) {
    if (n.offset <= 0)
      return zt.call(this, r), Br.call(this, n);
    {
      const s = i.reduce((h, p) => Math.max(h, p), i[0]), o = new Int32Array(s + 1), a = new Int32Array(s + 1).fill(-1), c = new Int32Array(e), d = Tr(-r[0], e, r);
      for (let h, p, v = -1; ++v < e; )
        (p = a[h = i[v]]) === -1 && (p = a[h] = d[h]), c[v] = d[v] - p, ++o[h];
      zt.call(this, c);
      for (let h, p = -1, v = t.children.length; ++p < v; )
        if (h = n.children[p]) {
          const g = t.typeIds[p], N = Math.min(e, o[g]);
          this.visit(h.slice(a[g], N));
        }
    }
  }
  return this;
}
function Ju(n) {
  let t;
  return n.nullCount >= n.length ? zt.call(this, new Uint8Array(0)) : (t = n.values) instanceof Uint8Array ? zt.call(this, Lr(n.offset, n.length, t)) : zt.call(this, Bi(n.values));
}
function Fe(n) {
  return zt.call(this, n.values.subarray(0, n.length * n.stride));
}
function Ma(n) {
  const { length: t, values: e, valueOffsets: i } = n, r = i[0], s = i[t], o = Math.min(s - r, e.byteLength - r);
  return zt.call(this, Tr(-i[0], t, i)), zt.call(this, e.subarray(r, r + o)), this;
}
function qr(n) {
  const { length: t, valueOffsets: e } = n;
  return e && zt.call(this, Tr(e[0], t, e)), this.visit(n.children[0]);
}
function Br(n) {
  return this.visitMany(n.type.children.map((t, e) => n.children[e]).filter(Boolean))[0];
}
ct.prototype.visitBool = Ju;
ct.prototype.visitInt = Fe;
ct.prototype.visitFloat = Fe;
ct.prototype.visitUtf8 = Ma;
ct.prototype.visitBinary = Ma;
ct.prototype.visitFixedSizeBinary = Fe;
ct.prototype.visitDate = Fe;
ct.prototype.visitTimestamp = Fe;
ct.prototype.visitTime = Fe;
ct.prototype.visitDecimal = Fe;
ct.prototype.visitList = qr;
ct.prototype.visitStruct = Br;
ct.prototype.visitUnion = Wu;
ct.prototype.visitInterval = Fe;
ct.prototype.visitFixedSizeList = qr;
ct.prototype.visitMap = qr;
class Ra extends Vr {
  constructor(t) {
    super(), this._position = 0, this._started = !1, this._sink = new li(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), At(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
  }
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, e) {
    throw new Error('"throughDOM" not available in this environment');
  }
  toString(t = !1) {
    return this._sink.toString(t);
  }
  toUint8Array(t = !1) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return _e(t) ? t.then((e) => this.writeAll(e)) : fn(t) ? ts(this, t) : Qr(this, t);
  }
  get closed() {
    return this._sink.closed;
  }
  [Symbol.asyncIterator]() {
    return this._sink[Symbol.asyncIterator]();
  }
  toDOMStream(t) {
    return this._sink.toDOMStream(t);
  }
  toNodeStream(t) {
    return this._sink.toNodeStream(t);
  }
  close() {
    return this.reset()._sink.close();
  }
  abort(t) {
    return this.reset()._sink.abort(t);
  }
  finish() {
    return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this;
  }
  reset(t = this._sink, e = null) {
    return t === this._sink || t instanceof li ? this._sink = t : (this._sink = new li(), t && fc(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && pc(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!e || !vr(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this;
  }
  write(t) {
    let e = null;
    if (this._sink) {
      if (t == null)
        return this.finish() && void 0;
      if (t instanceof pt && !(e = t.schema))
        return this.finish() && void 0;
      if (t instanceof It && !(e = t.schema))
        return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (e && !vr(e, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, e);
    }
    t instanceof It ? t instanceof Jr || this._writeRecordBatch(t) : t instanceof pt ? this.writeAll(t.batches) : zn(t) && this.writeAll(t);
  }
  _writeMessage(t, e = 8) {
    const i = e - 1, r = mt.encode(t), s = r.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, a = s + o + i & ~i, c = a - s - o;
    return t.headerType === W.RecordBatch ? this._recordBatchBlocks.push(new Ie(a, t.bodyLength, this._position)) : t.headerType === W.DictionaryBatch && this._dictionaryBlocks.push(new Ie(a, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(a - o)), s > 0 && this._write(r), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const e = k(t);
      e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(mt.from(t));
  }
  // @ts-ignore
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(jn);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: e, nodes: i, bufferRegions: r, buffers: s } = ct.assemble(t), o = new xt(t.numRows, i, r), a = mt.from(o, e);
    return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(s);
  }
  _writeDictionaryBatch(t, e, i = !1) {
    this._dictionaryDeltaOffsets.set(e, t.length + (this._dictionaryDeltaOffsets.get(e) || 0));
    const { byteLength: r, nodes: s, bufferRegions: o, buffers: a } = ct.assemble(new J([t])), c = new xt(t.length, s, o), d = new ie(c, e, i), h = mt.from(d, r);
    return this._writeMessage(h)._writeBodyBuffers(a);
  }
  _writeBodyBuffers(t) {
    let e, i, r;
    for (let s = -1, o = t.length; ++s < o; )
      (e = t[s]) && (i = e.byteLength) > 0 && (this._write(e), (r = (i + 7 & -8) - i) > 0 && this._writePadding(r));
    return this;
  }
  _writeDictionaries(t) {
    for (let [e, i] of t.dictionaries) {
      let r = this._dictionaryDeltaOffsets.get(e) || 0;
      if (r === 0 || (i = i == null ? void 0 : i.slice(r)).length > 0)
        for (const s of i.data)
          this._writeDictionaryBatch(s, e, r > 0), r += s.length;
    }
    return this;
  }
}
class Zr extends Ra {
  /** @nocollapse */
  static writeAll(t, e) {
    const i = new Zr(e);
    return _e(t) ? t.then((r) => i.writeAll(r)) : fn(t) ? ts(i, t) : Qr(i, t);
  }
}
class Xr extends Ra {
  /** @nocollapse */
  static writeAll(t) {
    const e = new Xr();
    return _e(t) ? t.then((i) => e.writeAll(i)) : fn(t) ? ts(e, t) : Qr(e, t);
  }
  constructor() {
    super(), this._autoDestroy = !0;
  }
  // @ts-ignore
  _writeSchema(t) {
    return this._writeMagic()._writePadding(2);
  }
  _writeFooter(t) {
    const e = Pn.encode(new Pn(t, Mt.V4, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic();
  }
}
function Qr(n, t) {
  let e = t;
  t instanceof pt && (e = t.batches, n.reset(void 0, t.schema));
  for (const i of e)
    n.write(i);
  return n.finish();
}
function ts(n, t) {
  var e, i, r, s;
  return S(this, void 0, void 0, function* () {
    try {
      for (e = Pe(t); i = yield e.next(), !i.done; ) {
        const o = i.value;
        n.write(o);
      }
    } catch (o) {
      r = { error: o };
    } finally {
      try {
        i && !i.done && (s = e.return) && (yield s.call(e));
      } finally {
        if (r) throw r.error;
      }
    }
    return n.finish();
  });
}
function Tn(n) {
  const t = he.from(n);
  return _e(t) ? t.then((e) => Tn(e)) : t.isAsync() ? t.readAll().then((e) => new pt(e)) : new pt(t.readAll());
}
function cr(n, t = "stream") {
  return (t === "stream" ? Zr : Xr).writeAll(n).toUint8Array(!0);
}
var ks = (
  /** @class */
  function() {
    function n(t, e, i, r) {
      var s = this;
      this.getCell = function(o, a) {
        var c = o < s.headerRows && a < s.headerColumns, d = o >= s.headerRows && a < s.headerColumns, h = o < s.headerRows && a >= s.headerColumns;
        if (c) {
          var p = ["blank"];
          return a > 0 && p.push("level" + o), {
            type: "blank",
            classNames: p.join(" "),
            content: ""
          };
        } else if (h) {
          var v = a - s.headerColumns, p = [
            "col_heading",
            "level" + o,
            "col" + v
          ];
          return {
            type: "columns",
            classNames: p.join(" "),
            content: s.getContent(s.columnsTable, v, o)
          };
        } else if (d) {
          var g = o - s.headerRows, p = [
            "row_heading",
            "level" + a,
            "row" + g
          ];
          return {
            type: "index",
            id: "T_".concat(s.uuid, "level").concat(a, "_row").concat(g),
            classNames: p.join(" "),
            content: s.getContent(s.indexTable, g, a)
          };
        } else {
          var g = o - s.headerRows, v = a - s.headerColumns, p = [
            "data",
            "row" + g,
            "col" + v
          ], N = s.styler ? s.getContent(s.styler.displayValuesTable, g, v) : s.getContent(s.dataTable, g, v);
          return {
            type: "data",
            id: "T_".concat(s.uuid, "row").concat(g, "_col").concat(v),
            classNames: p.join(" "),
            content: N
          };
        }
      }, this.getContent = function(o, a, c) {
        var d = o.getChildAt(c);
        if (d === null)
          return "";
        var h = s.getColumnTypeId(o, c);
        switch (h) {
          case u.Timestamp:
            return s.nanosToDate(d.get(a));
          default:
            return d.get(a);
        }
      }, this.dataTable = Tn(t), this.indexTable = Tn(e), this.columnsTable = Tn(i), this.styler = r ? {
        caption: r.caption,
        displayValuesTable: Tn(r.displayValues),
        styles: r.styles,
        uuid: r.uuid
      } : void 0;
    }
    return Object.defineProperty(n.prototype, "rows", {
      get: function() {
        return this.indexTable.numRows + this.columnsTable.numCols;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "columns", {
      get: function() {
        return this.indexTable.numCols + this.columnsTable.numRows;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "headerRows", {
      get: function() {
        return this.rows - this.dataRows;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "headerColumns", {
      get: function() {
        return this.columns - this.dataColumns;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "dataRows", {
      get: function() {
        return this.dataTable.numRows;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "dataColumns", {
      get: function() {
        return this.dataTable.numCols;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "uuid", {
      get: function() {
        return this.styler && this.styler.uuid;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "caption", {
      get: function() {
        return this.styler && this.styler.caption;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "styles", {
      get: function() {
        return this.styler && this.styler.styles;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "table", {
      get: function() {
        return this.dataTable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "index", {
      get: function() {
        return this.indexTable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "columnTable", {
      get: function() {
        return this.columnsTable;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.serialize = function() {
      return {
        data: cr(this.dataTable),
        index: cr(this.indexTable),
        columns: cr(this.columnsTable)
      };
    }, n.prototype.getColumnTypeId = function(t, e) {
      return t.schema.fields[e].type.typeId;
    }, n.prototype.nanosToDate = function(t) {
      return new Date(t / 1e6);
    }, n;
  }()
), Mn = function() {
  return Mn = Object.assign || function(n) {
    for (var t, e = 1, i = arguments.length; e < i; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Mn.apply(this, arguments);
}, Rn;
(function(n) {
  n.COMPONENT_READY = "streamlit:componentReady", n.SET_COMPONENT_VALUE = "streamlit:setComponentValue", n.SET_FRAME_HEIGHT = "streamlit:setFrameHeight";
})(Rn || (Rn = {}));
var Ar = (
  /** @class */
  function() {
    function n() {
    }
    return n.API_VERSION = 1, n.RENDER_EVENT = "streamlit:render", n.events = new EventTarget(), n.registeredMessageListener = !1, n.setComponentReady = function() {
      n.registeredMessageListener || (window.addEventListener("message", n.onMessageEvent), n.registeredMessageListener = !0), n.sendBackMsg(Rn.COMPONENT_READY, {
        apiVersion: n.API_VERSION
      });
    }, n.setFrameHeight = function(t) {
      t === void 0 && (t = document.body.scrollHeight), t !== n.lastFrameHeight && (n.lastFrameHeight = t, n.sendBackMsg(Rn.SET_FRAME_HEIGHT, { height: t }));
    }, n.setComponentValue = function(t) {
      var e;
      t instanceof ks ? (e = "dataframe", t = t.serialize()) : Ku(t) ? (e = "bytes", t = new Uint8Array(t.buffer)) : t instanceof ArrayBuffer ? (e = "bytes", t = new Uint8Array(t)) : e = "json", n.sendBackMsg(Rn.SET_COMPONENT_VALUE, {
        value: t,
        dataType: e
      });
    }, n.onMessageEvent = function(t) {
      var e = t.data.type;
      switch (e) {
        case n.RENDER_EVENT:
          n.onRenderMessage(t.data);
          break;
      }
    }, n.onRenderMessage = function(t) {
      var e = t.args;
      e == null && (console.error("Got null args in onRenderMessage. This should never happen"), e = {});
      var i = t.dfs && t.dfs.length > 0 ? n.argsDataframeToObject(t.dfs) : {};
      e = Mn(Mn({}, e), i);
      var r = !!t.disabled, s = t.theme;
      s && Hu(s);
      var o = { disabled: r, args: e, theme: s }, a = new CustomEvent(n.RENDER_EVENT, {
        detail: o
      });
      n.events.dispatchEvent(a);
    }, n.argsDataframeToObject = function(t) {
      var e = t.map(function(i) {
        var r = i.key, s = i.value;
        return [r, n.toArrowTable(s)];
      });
      return Object.fromEntries(e);
    }, n.toArrowTable = function(t) {
      var e, i = (e = t.data, e.data), r = e.index, s = e.columns, o = e.styler;
      return new ks(i, r, s, o);
    }, n.sendBackMsg = function(t, e) {
      window.parent.postMessage(Mn({ isStreamlitMessage: !0, type: t }, e), "*");
    }, n;
  }()
), Hu = function(n) {
  var t = document.createElement("style");
  document.head.appendChild(t), t.innerHTML = `
    :root {
      --primary-color: `.concat(n.primaryColor, `;
      --background-color: `).concat(n.backgroundColor, `;
      --secondary-background-color: `).concat(n.secondaryBackgroundColor, `;
      --text-color: `).concat(n.textColor, `;
      --font: `).concat(n.font, `;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
    }
  `);
};
function Ku(n) {
  var t = !1;
  try {
    t = n instanceof BigInt64Array || n instanceof BigUint64Array;
  } catch {
  }
  return n instanceof Int8Array || n instanceof Uint8Array || n instanceof Uint8ClampedArray || n instanceof Int16Array || n instanceof Uint16Array || n instanceof Int32Array || n instanceof Uint32Array || n instanceof Float32Array || n instanceof Float64Array || t;
}
var Gu = /* @__PURE__ */ function() {
  var n = function(t, e) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
      i.__proto__ = r;
    } || function(i, r) {
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
    }, n(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    n(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
  };
}();
(function(n) {
  Gu(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    Ar.setFrameHeight();
  }, t.prototype.componentDidUpdate = function() {
    Ar.setFrameHeight();
  }, t;
})(Vi.PureComponent);
const qu = ({
  maxFileSize: n = 100 * 1024 * 1024,
  // 100MB default
  allowedTypes: t = [".xlsx", ".csv"],
  chunkSize: e = 1024 * 1024
  // 1MB chunks
}) => {
  const [i, r] = tr(!1), [s, o] = tr([]), [a, c] = tr(!1), d = (m) => {
    var y;
    if (m.size > n)
      return `Arquivo muito grande. Máximo: ${Math.round(n / 1024 / 1024)}MB`;
    const j = "." + ((y = m.name.split(".").pop()) == null ? void 0 : y.toLowerCase());
    return t.includes(j) ? null : `Tipo de arquivo não suportado. Permitidos: ${t.join(", ")}`;
  }, h = async (m) => {
    const j = d(m);
    if (j) {
      o((Q) => [...Q, {
        file: m,
        progress: 0,
        status: "error",
        error: j
      }]);
      return;
    }
    const y = Date.now().toString();
    o((Q) => [...Q, {
      file: m,
      progress: 0,
      status: "uploading"
    }]);
    try {
      const Q = Math.ceil(m.size / e);
      for (let dt = 0; dt < Q; dt++) {
        const ht = dt * e, yn = Math.min(ht + e, m.size), Hn = m.slice(ht, yn);
        await new Promise((gt) => setTimeout(gt, 100));
        const ze = Math.round((dt + 1) / Q * 90);
        o((gt) => gt.map(
          (Dt) => Dt.file === m ? { ...Dt, progress: ze } : Dt
        ));
      }
      o((dt) => dt.map(
        (ht) => ht.file === m ? { ...ht, progress: 95, status: "processing" } : ht
      )), await new Promise((dt) => setTimeout(dt, 500)), o((dt) => dt.map(
        (ht) => ht.file === m ? { ...ht, progress: 100, status: "completed" } : ht
      ));
      const re = await p(m);
      Ar.setComponentValue({
        file: {
          name: m.name,
          size: m.size,
          type: m.type,
          data: re
        },
        uploadId: y,
        status: "completed"
      });
    } catch (Q) {
      o((re) => re.map(
        (dt) => dt.file === m ? {
          ...dt,
          progress: 0,
          status: "error",
          error: Q instanceof Error ? Q.message : "Erro no upload"
        } : dt
      ));
    }
  }, p = (m) => new Promise((j, y) => {
    const Q = new FileReader();
    Q.readAsDataURL(m), Q.onload = () => j(Q.result), Q.onerror = (re) => y(re);
  }), v = er((m) => {
    m.preventDefault(), r(!1), Array.from(m.dataTransfer.files).forEach(h);
  }, []), g = er((m) => {
    m.preventDefault(), r(!0);
  }, []), N = er((m) => {
    m.preventDefault(), r(!1);
  }, []), bt = (m) => {
    Array.from(m.target.files || []).forEach(h);
  }, kt = (m) => {
    if (m === 0) return "0 Bytes";
    const j = 1024, y = ["Bytes", "KB", "MB", "GB"], Q = Math.floor(Math.log(m) / Math.log(j));
    return parseFloat((m / Math.pow(j, Q)).toFixed(2)) + " " + y[Q];
  }, st = (m) => {
    switch (m) {
      case "uploading":
      case "processing":
        return "⏳";
      case "completed":
        return "✅";
      case "error":
        return "❌";
      default:
        return "📄";
    }
  }, et = (m) => {
    switch (m) {
      case "uploading":
        return "Enviando...";
      case "processing":
        return "Processando...";
      case "completed":
        return "Concluído";
      case "error":
        return "Erro";
      default:
        return "Aguardando...";
    }
  };
  return /* @__PURE__ */ rt.jsxs("div", { style: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px"
  }, children: [
    /* @__PURE__ */ rt.jsxs(
      "div",
      {
        style: {
          border: `2px dashed ${i ? "#007bff" : "#ccc"}`,
          borderRadius: "8px",
          padding: "40px 20px",
          textAlign: "center",
          backgroundColor: i ? "#f8f9fa" : "#fff",
          cursor: "pointer",
          transition: "all 0.3s ease"
        },
        onDrop: v,
        onDragOver: g,
        onDragLeave: N,
        onClick: () => {
          var m;
          return (m = document.getElementById("file-input")) == null ? void 0 : m.click();
        },
        children: [
          /* @__PURE__ */ rt.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "📁" }),
          /* @__PURE__ */ rt.jsx("h3", { style: { margin: "0 0 8px 0", color: "#333" }, children: "Arraste arquivos aqui ou clique para selecionar" }),
          /* @__PURE__ */ rt.jsxs("p", { style: { margin: "0", color: "#666", fontSize: "14px" }, children: [
            "Formatos aceitos: ",
            t.join(", "),
            " • Máximo: ",
            Math.round(n / 1024 / 1024),
            "MB"
          ] }),
          /* @__PURE__ */ rt.jsx(
            "input",
            {
              id: "file-input",
              type: "file",
              multiple: !0,
              accept: t.join(","),
              onChange: bt,
              style: { display: "none" }
            }
          )
        ]
      }
    ),
    s.length > 0 && /* @__PURE__ */ rt.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ rt.jsx("h4", { style: { margin: "0 0 16px 0", color: "#333" }, children: "Arquivos" }),
      s.map((m, j) => /* @__PURE__ */ rt.jsxs(
        "div",
        {
          style: {
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "12px",
            backgroundColor: "#fff"
          },
          children: [
            /* @__PURE__ */ rt.jsxs("div", { style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "8px"
            }, children: [
              /* @__PURE__ */ rt.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                /* @__PURE__ */ rt.jsx("span", { style: { fontSize: "20px" }, children: st(m.status) }),
                /* @__PURE__ */ rt.jsxs("div", { children: [
                  /* @__PURE__ */ rt.jsx("div", { style: { fontWeight: "bold", color: "#333" }, children: m.file.name }),
                  /* @__PURE__ */ rt.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: kt(m.file.size) })
                ] })
              ] }),
              /* @__PURE__ */ rt.jsx("div", { style: {
                fontSize: "14px",
                color: m.status === "error" ? "#dc3545" : "#28a745"
              }, children: et(m.status) })
            ] }),
            /* @__PURE__ */ rt.jsx("div", { style: {
              width: "100%",
              height: "6px",
              backgroundColor: "#e0e0e0",
              borderRadius: "3px",
              overflow: "hidden"
            }, children: /* @__PURE__ */ rt.jsx(
              "div",
              {
                style: {
                  width: `${m.progress}%`,
                  height: "100%",
                  backgroundColor: m.status === "error" ? "#dc3545" : "#007bff",
                  transition: "width 0.3s ease"
                }
              }
            ) }),
            m.error && /* @__PURE__ */ rt.jsx("div", { style: {
              marginTop: "8px",
              padding: "8px",
              backgroundColor: "#f8d7da",
              border: "1px solid #f5c6cb",
              borderRadius: "4px",
              color: "#721c24",
              fontSize: "12px"
            }, children: m.error }),
            m.status !== "error" && m.status !== "completed" && /* @__PURE__ */ rt.jsxs("div", { style: {
              textAlign: "right",
              fontSize: "12px",
              color: "#666",
              marginTop: "4px"
            }, children: [
              m.progress,
              "%"
            ] })
          ]
        },
        j
      ))
    ] })
  ] });
}, Zu = Fn.createRoot(
  document.getElementById("root")
);
Zu.render(
  /* @__PURE__ */ rt.jsx(Vi.StrictMode, { children: /* @__PURE__ */ rt.jsx(qu, {}) })
);
