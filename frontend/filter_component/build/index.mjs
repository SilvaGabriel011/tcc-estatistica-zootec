import Pi, { useState as ys, useEffect as tr, useCallback as er } from "react";
import nc from "react-dom";
var lr = { exports: {} }, _n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function ic() {
  if (ms) return _n;
  ms = 1;
  var n = Pi, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, d) {
    var h, p = {}, _ = null, b = null;
    d !== void 0 && (_ = "" + d), c.key !== void 0 && (_ = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (h in c) i.call(c, h) && !s.hasOwnProperty(h) && (p[h] = c[h]);
    if (a && a.defaultProps) for (h in c = a.defaultProps, c) p[h] === void 0 && (p[h] = c[h]);
    return { $$typeof: t, type: a, key: _, ref: b, props: p, _owner: r.current };
  }
  return _n.Fragment = e, _n.jsx = o, _n.jsxs = o, _n;
}
var vn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs;
function rc() {
  return bs || (bs = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Pi, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), C = Symbol.iterator, dt = "@@iterator";
    function k(l) {
      if (l === null || typeof l != "object")
        return null;
      var f = C && l[C] || l[dt];
      return typeof f == "function" ? f : null;
    }
    var v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function V(l) {
      {
        for (var f = arguments.length, m = new Array(f > 1 ? f - 1 : 0), w = 1; w < f; w++)
          m[w - 1] = arguments[w];
        W("error", l, m);
      }
    }
    function W(l, f, m) {
      {
        var w = v.ReactDebugCurrentFrame, J = w.getStackAddendum();
        J !== "" && (f += "%s", m = m.concat([J]));
        var Q = m.map(function(z) {
          return String(z);
        });
        Q.unshift("Warning: " + f), Function.prototype.apply.call(console[l], console, Q);
      }
    }
    var N = !1, y = !1, mt = !1, Ut = !1, $i = !1, $n;
    $n = Symbol.for("react.module.reference");
    function Yi(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === i || l === s || $i || l === r || l === d || l === h || Ut || l === b || N || y || mt || typeof l == "object" && l !== null && (l.$$typeof === _ || l.$$typeof === p || l.$$typeof === o || l.$$typeof === a || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === $n || l.getModuleId !== void 0));
    }
    function Wi(l, f, m) {
      var w = l.displayName;
      if (w)
        return w;
      var J = f.displayName || f.name || "";
      return J !== "" ? m + "(" + J + ")" : m;
    }
    function Yn(l) {
      return l.displayName || "Context";
    }
    function Vt(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && V("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
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
            return Yn(f) + ".Consumer";
          case o:
            var m = l;
            return Yn(m._context) + ".Provider";
          case c:
            return Wi(l, l.render, "ForwardRef");
          case p:
            var w = l.displayName || null;
            return w !== null ? w : Vt(l.type) || "Memo";
          case _: {
            var J = l, Q = J._payload, z = J._init;
            try {
              return Vt(z(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, Oe = 0, Wn, Jn, hn, Hn, fn, Kn, Gn;
    function qn() {
    }
    qn.__reactDisabledLog = !0;
    function Ji() {
      {
        if (Oe === 0) {
          Wn = console.log, Jn = console.info, hn = console.warn, Hn = console.error, fn = console.group, Kn = console.groupCollapsed, Gn = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: qn,
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
        Oe++;
      }
    }
    function Hi() {
      {
        if (Oe--, Oe === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, l, {
              value: Wn
            }),
            info: ne({}, l, {
              value: Jn
            }),
            warn: ne({}, l, {
              value: hn
            }),
            error: ne({}, l, {
              value: Hn
            }),
            group: ne({}, l, {
              value: fn
            }),
            groupCollapsed: ne({}, l, {
              value: Kn
            }),
            groupEnd: ne({}, l, {
              value: Gn
            })
          });
        }
        Oe < 0 && V("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pn = v.ReactCurrentDispatcher, yn;
    function ke(l, f, m) {
      {
        if (yn === void 0)
          try {
            throw Error();
          } catch (J) {
            var w = J.stack.trim().match(/\n( *(at )?)/);
            yn = w && w[1] || "";
          }
        return `
` + yn + l;
      }
    }
    var mn = !1, Ve;
    {
      var Ki = typeof WeakMap == "function" ? WeakMap : Map;
      Ve = new Ki();
    }
    function g(l, f) {
      if (!l || mn)
        return "";
      {
        var m = Ve.get(l);
        if (m !== void 0)
          return m;
      }
      var w;
      mn = !0;
      var J = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = pn.current, pn.current = null, Ji();
      try {
        if (f) {
          var z = function() {
            throw Error();
          };
          if (Object.defineProperty(z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(z, []);
            } catch (bt) {
              w = bt;
            }
            Reflect.construct(l, [], z);
          } else {
            try {
              z.call();
            } catch (bt) {
              w = bt;
            }
            l.call(z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            w = bt;
          }
          l();
        }
      } catch (bt) {
        if (bt && w && typeof bt.stack == "string") {
          for (var L = bt.stack.split(`
`), ht = w.stack.split(`
`), ot = L.length - 1, at = ht.length - 1; ot >= 1 && at >= 0 && L[ot] !== ht[at]; )
            at--;
          for (; ot >= 1 && at >= 0; ot--, at--)
            if (L[ot] !== ht[at]) {
              if (ot !== 1 || at !== 1)
                do
                  if (ot--, at--, at < 0 || L[ot] !== ht[at]) {
                    var Rt = `
` + L[ot].replace(" at new ", " at ");
                    return l.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", l.displayName)), typeof l == "function" && Ve.set(l, Rt), Rt;
                  }
                while (ot >= 1 && at >= 0);
              break;
            }
        }
      } finally {
        mn = !1, pn.current = Q, Hi(), Error.prepareStackTrace = J;
      }
      var Ye = l ? l.displayName || l.name : "", Te = Ye ? ke(Ye) : "";
      return typeof l == "function" && Ve.set(l, Te), Te;
    }
    function bn(l, f, m) {
      return g(l, !1);
    }
    function ze(l) {
      var f = l.prototype;
      return !!(f && f.isReactComponent);
    }
    function Fe(l, f, m) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return g(l, ze(l));
      if (typeof l == "string")
        return ke(l);
      switch (l) {
        case d:
          return ke("Suspense");
        case h:
          return ke("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return bn(l.render);
          case p:
            return Fe(l.type, f, m);
          case _: {
            var w = l, J = w._payload, Q = w._init;
            try {
              return Fe(Q(J), f, m);
            } catch {
            }
          }
        }
      return "";
    }
    var gn = Object.prototype.hasOwnProperty, es = {}, ns = v.ReactDebugCurrentFrame;
    function Zn(l) {
      if (l) {
        var f = l._owner, m = Fe(l.type, l._source, f ? f.type : null);
        ns.setExtraStackFrame(m);
      } else
        ns.setExtraStackFrame(null);
    }
    function Na(l, f, m, w, J) {
      {
        var Q = Function.call.bind(gn);
        for (var z in l)
          if (Q(l, z)) {
            var L = void 0;
            try {
              if (typeof l[z] != "function") {
                var ht = Error((w || "React class") + ": " + m + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              L = l[z](f, z, w, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ot) {
              L = ot;
            }
            L && !(L instanceof Error) && (Zn(J), V("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", m, z, typeof L), Zn(null)), L instanceof Error && !(L.message in es) && (es[L.message] = !0, Zn(J), V("Failed %s type: %s", m, L.message), Zn(null));
          }
      }
    }
    var Ca = Array.isArray;
    function Gi(l) {
      return Ca(l);
    }
    function La(l) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, m = f && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return m;
      }
    }
    function Ua(l) {
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
      if (Ua(l))
        return V("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", La(l)), is(l);
    }
    var ss = v.ReactCurrentOwner, Pa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, os, as;
    function ja(l) {
      if (gn.call(l, "ref")) {
        var f = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function ka(l) {
      if (gn.call(l, "key")) {
        var f = Object.getOwnPropertyDescriptor(l, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Va(l, f) {
      typeof l.ref == "string" && ss.current;
    }
    function za(l, f) {
      {
        var m = function() {
          os || (os = !0, V("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function $a(l, f) {
      {
        var m = function() {
          as || (as = !0, V("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Ya = function(l, f, m, w, J, Q, z) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: f,
        ref: m,
        props: z,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function Wa(l, f, m, w, J) {
      {
        var Q, z = {}, L = null, ht = null;
        m !== void 0 && (rs(m), L = "" + m), ka(f) && (rs(f.key), L = "" + f.key), ja(f) && (ht = f.ref, Va(f, J));
        for (Q in f)
          gn.call(f, Q) && !Pa.hasOwnProperty(Q) && (z[Q] = f[Q]);
        if (l && l.defaultProps) {
          var ot = l.defaultProps;
          for (Q in ot)
            z[Q] === void 0 && (z[Q] = ot[Q]);
        }
        if (L || ht) {
          var at = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          L && za(z, at), ht && $a(z, at);
        }
        return Ya(l, L, ht, J, w, ss.current, z);
      }
    }
    var qi = v.ReactCurrentOwner, cs = v.ReactDebugCurrentFrame;
    function $e(l) {
      if (l) {
        var f = l._owner, m = Fe(l.type, l._source, f ? f.type : null);
        cs.setExtraStackFrame(m);
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
          var l = Vt(qi.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Ja(l) {
      return "";
    }
    var us = {};
    function Ha(l) {
      {
        var f = ls();
        if (!f) {
          var m = typeof l == "string" ? l : l.displayName || l.name;
          m && (f = `

Check the top-level render call using <` + m + ">.");
        }
        return f;
      }
    }
    function ds(l, f) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var m = Ha(f);
        if (us[m])
          return;
        us[m] = !0;
        var w = "";
        l && l._owner && l._owner !== qi.current && (w = " It was passed a child from " + Vt(l._owner.type) + "."), $e(l), V('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, w), $e(null);
      }
    }
    function hs(l, f) {
      {
        if (typeof l != "object")
          return;
        if (Gi(l))
          for (var m = 0; m < l.length; m++) {
            var w = l[m];
            Xi(w) && ds(w, f);
          }
        else if (Xi(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var J = k(l);
          if (typeof J == "function" && J !== l.entries)
            for (var Q = J.call(l), z; !(z = Q.next()).done; )
              Xi(z.value) && ds(z.value, f);
        }
      }
    }
    function Ka(l) {
      {
        var f = l.type;
        if (f == null || typeof f == "string")
          return;
        var m;
        if (typeof f == "function")
          m = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          m = f.propTypes;
        else
          return;
        if (m) {
          var w = Vt(f);
          Na(m, l.props, "prop", w, l);
        } else if (f.PropTypes !== void 0 && !Zi) {
          Zi = !0;
          var J = Vt(f);
          V("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && V("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ga(l) {
      {
        for (var f = Object.keys(l.props), m = 0; m < f.length; m++) {
          var w = f[m];
          if (w !== "children" && w !== "key") {
            $e(l), V("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), $e(null);
            break;
          }
        }
        l.ref !== null && ($e(l), V("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    var fs = {};
    function ps(l, f, m, w, J, Q) {
      {
        var z = Yi(l);
        if (!z) {
          var L = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = Ja();
          ht ? L += ht : L += ls();
          var ot;
          l === null ? ot = "null" : Gi(l) ? ot = "array" : l !== void 0 && l.$$typeof === t ? (ot = "<" + (Vt(l.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof l, V("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, L);
        }
        var at = Wa(l, f, m, J, Q);
        if (at == null)
          return at;
        if (z) {
          var Rt = f.children;
          if (Rt !== void 0)
            if (w)
              if (Gi(Rt)) {
                for (var Ye = 0; Ye < Rt.length; Ye++)
                  hs(Rt[Ye], l);
                Object.freeze && Object.freeze(Rt);
              } else
                V("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hs(Rt, l);
        }
        if (gn.call(f, "key")) {
          var Te = Vt(l), bt = Object.keys(f).filter(function(ec) {
            return ec !== "key";
          }), Qi = bt.length > 0 ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fs[Te + Qi]) {
            var tc = bt.length > 0 ? "{" + bt.join(": ..., ") + ": ...}" : "{}";
            V(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Qi, Te, tc, Te), fs[Te + Qi] = !0;
          }
        }
        return l === i ? Ga(at) : Ka(at), at;
      }
    }
    function qa(l, f, m) {
      return ps(l, f, m, !0);
    }
    function Za(l, f, m) {
      return ps(l, f, m, !1);
    }
    var Xa = Za, Qa = qa;
    vn.Fragment = i, vn.jsx = Xa, vn.jsxs = Qa;
  }()), vn;
}
process.env.NODE_ENV === "production" ? lr.exports = ic() : lr.exports = rc();
var U = lr.exports, In = {}, wn = nc;
if (process.env.NODE_ENV === "production")
  In.createRoot = wn.createRoot, In.hydrateRoot = wn.hydrateRoot;
else {
  var Xn = wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  In.createRoot = function(n, t) {
    Xn.usingClientEntryPoint = !0;
    try {
      return wn.createRoot(n, t);
    } finally {
      Xn.usingClientEntryPoint = !1;
    }
  }, In.hydrateRoot = function(n, t, e) {
    Xn.usingClientEntryPoint = !0;
    try {
      return wn.hydrateRoot(n, t, e);
    } finally {
      Xn.usingClientEntryPoint = !1;
    }
  };
}
var ur = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs;
function sc() {
  if (gs) return H;
  gs = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, o = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, p = n ? Symbol.for("react.suspense") : 60113, _ = n ? Symbol.for("react.suspense_list") : 60120, b = n ? Symbol.for("react.memo") : 60115, C = n ? Symbol.for("react.lazy") : 60116, dt = n ? Symbol.for("react.block") : 60121, k = n ? Symbol.for("react.fundamental") : 60117, v = n ? Symbol.for("react.responder") : 60118, V = n ? Symbol.for("react.scope") : 60119;
  function W(y) {
    if (typeof y == "object" && y !== null) {
      var mt = y.$$typeof;
      switch (mt) {
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
                case C:
                case b:
                case o:
                  return y;
                default:
                  return mt;
              }
          }
        case e:
          return mt;
      }
    }
  }
  function N(y) {
    return W(y) === d;
  }
  return H.AsyncMode = c, H.ConcurrentMode = d, H.ContextConsumer = a, H.ContextProvider = o, H.Element = t, H.ForwardRef = h, H.Fragment = i, H.Lazy = C, H.Memo = b, H.Portal = e, H.Profiler = s, H.StrictMode = r, H.Suspense = p, H.isAsyncMode = function(y) {
    return N(y) || W(y) === c;
  }, H.isConcurrentMode = N, H.isContextConsumer = function(y) {
    return W(y) === a;
  }, H.isContextProvider = function(y) {
    return W(y) === o;
  }, H.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, H.isForwardRef = function(y) {
    return W(y) === h;
  }, H.isFragment = function(y) {
    return W(y) === i;
  }, H.isLazy = function(y) {
    return W(y) === C;
  }, H.isMemo = function(y) {
    return W(y) === b;
  }, H.isPortal = function(y) {
    return W(y) === e;
  }, H.isProfiler = function(y) {
    return W(y) === s;
  }, H.isStrictMode = function(y) {
    return W(y) === r;
  }, H.isSuspense = function(y) {
    return W(y) === p;
  }, H.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === i || y === d || y === s || y === r || y === p || y === _ || typeof y == "object" && y !== null && (y.$$typeof === C || y.$$typeof === b || y.$$typeof === o || y.$$typeof === a || y.$$typeof === h || y.$$typeof === k || y.$$typeof === v || y.$$typeof === V || y.$$typeof === dt);
  }, H.typeOf = W, H;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function oc() {
  return _s || (_s = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, o = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, p = n ? Symbol.for("react.suspense") : 60113, _ = n ? Symbol.for("react.suspense_list") : 60120, b = n ? Symbol.for("react.memo") : 60115, C = n ? Symbol.for("react.lazy") : 60116, dt = n ? Symbol.for("react.block") : 60121, k = n ? Symbol.for("react.fundamental") : 60117, v = n ? Symbol.for("react.responder") : 60118, V = n ? Symbol.for("react.scope") : 60119;
    function W(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === i || g === d || g === s || g === r || g === p || g === _ || typeof g == "object" && g !== null && (g.$$typeof === C || g.$$typeof === b || g.$$typeof === o || g.$$typeof === a || g.$$typeof === h || g.$$typeof === k || g.$$typeof === v || g.$$typeof === V || g.$$typeof === dt);
    }
    function N(g) {
      if (typeof g == "object" && g !== null) {
        var bn = g.$$typeof;
        switch (bn) {
          case t:
            var ze = g.type;
            switch (ze) {
              case c:
              case d:
              case i:
              case s:
              case r:
              case p:
                return ze;
              default:
                var Fe = ze && ze.$$typeof;
                switch (Fe) {
                  case a:
                  case h:
                  case C:
                  case b:
                  case o:
                    return Fe;
                  default:
                    return bn;
                }
            }
          case e:
            return bn;
        }
      }
    }
    var y = c, mt = d, Ut = a, $i = o, $n = t, Yi = h, Wi = i, Yn = C, Vt = b, ne = e, Oe = s, Wn = r, Jn = p, hn = !1;
    function Hn(g) {
      return hn || (hn = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), fn(g) || N(g) === c;
    }
    function fn(g) {
      return N(g) === d;
    }
    function Kn(g) {
      return N(g) === a;
    }
    function Gn(g) {
      return N(g) === o;
    }
    function qn(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function Ji(g) {
      return N(g) === h;
    }
    function Hi(g) {
      return N(g) === i;
    }
    function pn(g) {
      return N(g) === C;
    }
    function yn(g) {
      return N(g) === b;
    }
    function ke(g) {
      return N(g) === e;
    }
    function mn(g) {
      return N(g) === s;
    }
    function Ve(g) {
      return N(g) === r;
    }
    function Ki(g) {
      return N(g) === p;
    }
    K.AsyncMode = y, K.ConcurrentMode = mt, K.ContextConsumer = Ut, K.ContextProvider = $i, K.Element = $n, K.ForwardRef = Yi, K.Fragment = Wi, K.Lazy = Yn, K.Memo = Vt, K.Portal = ne, K.Profiler = Oe, K.StrictMode = Wn, K.Suspense = Jn, K.isAsyncMode = Hn, K.isConcurrentMode = fn, K.isContextConsumer = Kn, K.isContextProvider = Gn, K.isElement = qn, K.isForwardRef = Ji, K.isFragment = Hi, K.isLazy = pn, K.isMemo = yn, K.isPortal = ke, K.isProfiler = mn, K.isStrictMode = Ve, K.isSuspense = Ki, K.isValidElementType = W, K.typeOf = N;
  }()), K;
}
process.env.NODE_ENV === "production" ? ur.exports = sc() : ur.exports = oc();
var ac = ur.exports, zs = ac, cc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, lc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $s = {};
$s[zs.ForwardRef] = cc;
$s[zs.Memo] = lc;
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
function vs(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && n[t], i = 0;
  if (e) return e.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function E(n) {
  return this instanceof E ? (this.v = n, this) : new E(n);
}
function Zt(n, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = e.apply(n, t || []), r, s = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function o(b) {
    return function(C) {
      return Promise.resolve(C).then(b, p);
    };
  }
  function a(b, C) {
    i[b] && (r[b] = function(dt) {
      return new Promise(function(k, v) {
        s.push([b, dt, k, v]) > 1 || c(b, dt);
      });
    }, C && (r[b] = C(r[b])));
  }
  function c(b, C) {
    try {
      d(i[b](C));
    } catch (dt) {
      _(s[0][3], dt);
    }
  }
  function d(b) {
    b.value instanceof E ? Promise.resolve(b.value.v).then(h, p) : _(s[0][2], b);
  }
  function h(b) {
    c("next", b);
  }
  function p(b) {
    c("throw", b);
  }
  function _(b, C) {
    b(C), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function ni(n) {
  var t, e;
  return t = {}, i("next"), i("throw", function(r) {
    throw r;
  }), i("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function i(r, s) {
    t[r] = n[r] ? function(o) {
      return (e = !e) ? { value: E(n[r](o)), done: !1 } : s ? s(o) : o;
    } : s;
  }
}
function Le(n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = n[Symbol.asyncIterator], e;
  return t ? t.call(n) : (n = typeof vs == "function" ? vs(n) : n[Symbol.iterator](), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
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
const uc = new TextDecoder("utf-8"), dr = (n) => uc.decode(n), dc = new TextEncoder(), Or = (n) => dc.encode(n), [ed, hc] = (() => {
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
})(), [Ln] = (() => {
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
})(), [Un] = (() => {
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
})(), fc = (n) => typeof n == "number", Ys = (n) => typeof n == "boolean", lt = (n) => typeof n == "function", It = (n) => n != null && Object(n) === n, be = (n) => It(n) && lt(n.then), Pn = (n) => It(n) && lt(n[Symbol.iterator]), un = (n) => It(n) && lt(n[Symbol.asyncIterator]), hr = (n) => It(n) && It(n.schema), Ws = (n) => It(n) && "done" in n && "value" in n, Js = (n) => It(n) && lt(n.stat) && fc(n.fd), Hs = (n) => It(n) && Fr(n.body), ji = (n) => "_getDOMStream" in n && "_getNodeStream" in n, pc = (n) => It(n) && lt(n.abort) && lt(n.getWriter) && !ji(n), Fr = (n) => It(n) && lt(n.cancel) && lt(n.getReader) && !ji(n), yc = (n) => It(n) && lt(n.end) && lt(n.write) && Ys(n.writable) && !ji(n), Ks = (n) => It(n) && lt(n.read) && lt(n.pipe) && Ys(n.readable) && !ji(n), mc = (n) => It(n) && lt(n.clear) && lt(n.bytes) && lt(n.position) && lt(n.setPosition) && lt(n.capacity) && lt(n.getBufferIdentifier) && lt(n.createLong), Tr = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function bc(n) {
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
function ws(n, t, e = 0, i = t.byteLength) {
  const r = n.byteLength, s = new Uint8Array(n.buffer, n.byteOffset, r), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(i, r));
  return s.set(o, e), n;
}
function Qt(n, t) {
  const e = bc(n), i = e.reduce((h, p) => h + p.byteLength, 0);
  let r, s, o, a = 0, c = -1;
  const d = Math.min(t || Number.POSITIVE_INFINITY, i);
  for (const h = e.length; ++c < h; ) {
    if (r = e[c], s = r.subarray(0, Math.min(r.length, d - a)), d <= a + s.length) {
      s.length < r.length ? e[c] = r.subarray(s.length) : s.length === r.length && c++, o ? ws(o, s, a) : o = s;
      break;
    }
    ws(o || (o = new Uint8Array(d)), s, a), a += s.length;
  }
  return [o || new Uint8Array(0), e.slice(c), i - (o ? o.byteLength : 0)];
}
function tt(n, t) {
  let e = Ws(t) ? t.value : t;
  return e instanceof n ? n === Uint8Array ? new n(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = Or(e)), e instanceof ArrayBuffer ? new n(e) : e instanceof Tr ? new n(e) : mc(e) ? tt(n, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new n(0) : new n(e.buffer, e.byteOffset, e.byteLength / n.BYTES_PER_ELEMENT) : n.from(e)) : new n(0);
}
const Sn = (n) => tt(Int32Array, n), $ = (n) => tt(Uint8Array, n), fr = (n) => (n.next(), n);
function* gc(n, t) {
  const e = function* (r) {
    yield r;
  }, i = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Tr ? e(t) : Pn(t) ? t : e(t);
  return yield* fr(function* (r) {
    let s = null;
    do
      s = r.next(yield tt(n, s));
    while (!s.done);
  }(i[Symbol.iterator]())), new n();
}
const _c = (n) => gc(Uint8Array, n);
function Gs(n, t) {
  return Zt(this, arguments, function* () {
    if (be(t))
      return yield E(yield E(yield* ni(Le(Gs(n, yield E(t))))));
    const i = function(o) {
      return Zt(this, arguments, function* () {
        yield yield E(yield E(o));
      });
    }, r = function(o) {
      return Zt(this, arguments, function* () {
        yield E(yield* ni(Le(fr(function* (a) {
          let c = null;
          do
            c = a.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        }(o[Symbol.iterator]())))));
      });
    }, s = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Tr ? i(t) : Pn(t) ? r(t) : un(t) ? t : i(t);
    return yield E(
      // otherwise if AsyncIterable, use it
      yield* ni(Le(fr(function(o) {
        return Zt(this, arguments, function* () {
          let a = null;
          do
            a = yield E(o.next(yield yield E(tt(n, a))));
          while (!a.done);
        });
      }(s[Symbol.asyncIterator]()))))
    ), yield E(new n());
  });
}
const vc = (n) => Gs(Uint8Array, n);
function Dr(n, t, e) {
  if (n !== 0) {
    e = e.slice(0, t + 1);
    for (let i = -1; ++i <= t; )
      e[i] += n;
  }
  return e;
}
function wc(n, t) {
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
const Mt = {
  fromIterable(n) {
    return Qn(Sc(n));
  },
  fromAsyncIterable(n) {
    return Qn(Ic(n));
  },
  fromDOMStream(n) {
    return Qn(Bc(n));
  },
  fromNodeStream(n) {
    return Qn(Oc(n));
  },
  // @ts-ignore
  toDOMStream(n, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(n, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, Qn = (n) => (n.next(), n);
function* Sc(n) {
  let t, e = !1, i = [], r, s, o, a = 0;
  function c() {
    return s === "peek" ? Qt(i, o)[0] : ([r, i, a] = Qt(i, o), r);
  }
  ({ cmd: s, size: o } = yield null);
  const d = _c(n)[Symbol.iterator]();
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
function Ic(n) {
  return Zt(this, arguments, function* () {
    let e, i = !1, r = [], s, o, a, c = 0;
    function d() {
      return o === "peek" ? Qt(r, a)[0] : ([s, r, c] = Qt(r, a), s);
    }
    ({ cmd: o, size: a } = yield yield E(null));
    const h = vc(n)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield E(h.next()) : yield E(h.next(a - c)), !e && s.byteLength > 0 && (r.push(s), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(d()));
          while (a < c);
      while (!e);
    } catch (p) {
      (i = !0) && typeof h.throw == "function" && (yield E(h.throw(p)));
    } finally {
      i === !1 && typeof h.return == "function" && (yield E(h.return(new Uint8Array(0))));
    }
    return yield E(null);
  });
}
function Bc(n) {
  return Zt(this, arguments, function* () {
    let e = !1, i = !1, r = [], s, o, a, c = 0;
    function d() {
      return o === "peek" ? Qt(r, a)[0] : ([s, r, c] = Qt(r, a), s);
    }
    ({ cmd: o, size: a } = yield yield E(null));
    const h = new Ac(n);
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield E(h.read()) : yield E(h.read(a - c)), !e && s.byteLength > 0 && (r.push($(s)), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(d()));
          while (a < c);
      while (!e);
    } catch (p) {
      (i = !0) && (yield E(h.cancel(p)));
    } finally {
      i === !1 ? yield E(h.cancel()) : n.locked && h.releaseLock();
    }
    return yield E(null);
  });
}
class Ac {
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
      return !e.done && (e.value = $(e)), e;
    });
  }
}
const nr = (n, t) => {
  const e = (r) => i([t, r]);
  let i;
  return [t, e, new Promise((r) => (i = r) && n.once(t, e))];
};
function Oc(n) {
  return Zt(this, arguments, function* () {
    const e = [];
    let i = "error", r = !1, s = null, o, a, c = 0, d = [], h;
    function p() {
      return o === "peek" ? Qt(d, a)[0] : ([h, d, c] = Qt(d, a), h);
    }
    if ({ cmd: o, size: a } = yield yield E(null), n.isTTY)
      return yield yield E(new Uint8Array(0)), yield E(null);
    try {
      e[0] = nr(n, "end"), e[1] = nr(n, "error");
      do {
        if (e[2] = nr(n, "readable"), [i, s] = yield E(Promise.race(e.map((b) => b[2]))), i === "error")
          break;
        if ((r = i === "end") || (Number.isFinite(a - c) ? (h = $(n.read(a - c)), h.byteLength < a - c && (h = $(n.read()))) : h = $(n.read()), h.byteLength > 0 && (d.push(h), c += h.byteLength)), r || a <= c)
          do
            ({ cmd: o, size: a } = yield yield E(p()));
          while (a < c);
      } while (!r);
    } finally {
      yield E(_(e, i === "error" ? s : null));
    }
    return yield E(null);
    function _(b, C) {
      return h = d = null, new Promise((dt, k) => {
        for (const [v, V] of b)
          n.off(v, V);
        try {
          const v = n.destroy;
          v && v.call(n, C), C = void 0;
        } catch (v) {
          C = v || C;
        } finally {
          C != null ? k(C) : dt();
        }
      });
    }
  });
}
var Tt;
(function(n) {
  n[n.V1 = 0] = "V1", n[n.V2 = 1] = "V2", n[n.V3 = 2] = "V3", n[n.V4 = 3] = "V4", n[n.V5 = 4] = "V5";
})(Tt || (Tt = {}));
var Dt;
(function(n) {
  n[n.Sparse = 0] = "Sparse", n[n.Dense = 1] = "Dense";
})(Dt || (Dt = {}));
var St;
(function(n) {
  n[n.HALF = 0] = "HALF", n[n.SINGLE = 1] = "SINGLE", n[n.DOUBLE = 2] = "DOUBLE";
})(St || (St = {}));
var de;
(function(n) {
  n[n.DAY = 0] = "DAY", n[n.MILLISECOND = 1] = "MILLISECOND";
})(de || (de = {}));
var Y;
(function(n) {
  n[n.SECOND = 0] = "SECOND", n[n.MILLISECOND = 1] = "MILLISECOND", n[n.MICROSECOND = 2] = "MICROSECOND", n[n.NANOSECOND = 3] = "NANOSECOND";
})(Y || (Y = {}));
var ge;
(function(n) {
  n[n.YEAR_MONTH = 0] = "YEAR_MONTH", n[n.DAY_TIME = 1] = "DAY_TIME", n[n.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(ge || (ge = {}));
var G;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Schema = 1] = "Schema", n[n.DictionaryBatch = 2] = "DictionaryBatch", n[n.RecordBatch = 3] = "RecordBatch", n[n.Tensor = 4] = "Tensor", n[n.SparseTensor = 5] = "SparseTensor";
})(G || (G = {}));
var u;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Null = 1] = "Null", n[n.Int = 2] = "Int", n[n.Float = 3] = "Float", n[n.Binary = 4] = "Binary", n[n.Utf8 = 5] = "Utf8", n[n.Bool = 6] = "Bool", n[n.Decimal = 7] = "Decimal", n[n.Date = 8] = "Date", n[n.Time = 9] = "Time", n[n.Timestamp = 10] = "Timestamp", n[n.Interval = 11] = "Interval", n[n.List = 12] = "List", n[n.Struct = 13] = "Struct", n[n.Union = 14] = "Union", n[n.FixedSizeBinary = 15] = "FixedSizeBinary", n[n.FixedSizeList = 16] = "FixedSizeList", n[n.Map = 17] = "Map", n[n.Dictionary = -1] = "Dictionary", n[n.Int8 = -2] = "Int8", n[n.Int16 = -3] = "Int16", n[n.Int32 = -4] = "Int32", n[n.Int64 = -5] = "Int64", n[n.Uint8 = -6] = "Uint8", n[n.Uint16 = -7] = "Uint16", n[n.Uint32 = -8] = "Uint32", n[n.Uint64 = -9] = "Uint64", n[n.Float16 = -10] = "Float16", n[n.Float32 = -11] = "Float32", n[n.Float64 = -12] = "Float64", n[n.DateDay = -13] = "DateDay", n[n.DateMillisecond = -14] = "DateMillisecond", n[n.TimestampSecond = -15] = "TimestampSecond", n[n.TimestampMillisecond = -16] = "TimestampMillisecond", n[n.TimestampMicrosecond = -17] = "TimestampMicrosecond", n[n.TimestampNanosecond = -18] = "TimestampNanosecond", n[n.TimeSecond = -19] = "TimeSecond", n[n.TimeMillisecond = -20] = "TimeMillisecond", n[n.TimeMicrosecond = -21] = "TimeMicrosecond", n[n.TimeNanosecond = -22] = "TimeNanosecond", n[n.DenseUnion = -23] = "DenseUnion", n[n.SparseUnion = -24] = "SparseUnion", n[n.IntervalDayTime = -25] = "IntervalDayTime", n[n.IntervalYearMonth = -26] = "IntervalYearMonth";
})(u || (u = {}));
var re;
(function(n) {
  n[n.OFFSET = 0] = "OFFSET", n[n.DATA = 1] = "DATA", n[n.VALIDITY = 2] = "VALIDITY", n[n.TYPE = 3] = "TYPE";
})(re || (re = {}));
const Fc = void 0;
function Dn(n) {
  if (n === null)
    return "null";
  if (n === Fc)
    return "undefined";
  switch (typeof n) {
    case "number":
      return `${n}`;
    case "bigint":
      return `${n}`;
    case "string":
      return `"${n}"`;
  }
  return typeof n[Symbol.toPrimitive] == "function" ? n[Symbol.toPrimitive]("string") : ArrayBuffer.isView(n) ? n instanceof Ln || n instanceof Un ? `[${[...n].map((t) => Dn(t))}]` : `[${n}]` : ArrayBuffer.isView(n) ? `[${n}]` : JSON.stringify(n, (t, e) => typeof e == "bigint" ? `${e}` : e);
}
const Tc = Symbol.for("isArrowBigNum");
function kt(n, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(tt(this.TypedArray, n), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(n, ...t), this.constructor.prototype);
}
kt.prototype[Tc] = !0;
kt.prototype.toJSON = function() {
  return `"${Ue(this)}"`;
};
kt.prototype.valueOf = function() {
  return qs(this);
};
kt.prototype.toString = function() {
  return Ue(this);
};
kt.prototype[Symbol.toPrimitive] = function(n = "default") {
  switch (n) {
    case "number":
      return qs(this);
    case "string":
      return Ue(this);
    case "default":
      return pr(this);
  }
  return Ue(this);
};
function Ze(...n) {
  return kt.apply(this, n);
}
function Xe(...n) {
  return kt.apply(this, n);
}
function xn(...n) {
  return kt.apply(this, n);
}
Object.setPrototypeOf(Ze.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Xe.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(xn.prototype, Object.create(Uint32Array.prototype));
Object.assign(Ze.prototype, kt.prototype, { constructor: Ze, signed: !0, TypedArray: Int32Array, BigIntArray: Ln });
Object.assign(Xe.prototype, kt.prototype, { constructor: Xe, signed: !1, TypedArray: Uint32Array, BigIntArray: Un });
Object.assign(xn.prototype, kt.prototype, { constructor: xn, signed: !0, TypedArray: Uint32Array, BigIntArray: Un });
function qs(n) {
  const { buffer: t, byteOffset: e, length: i, signed: r } = n, s = new Un(t, e, i), o = r && s[s.length - 1] & BigInt(1) << BigInt(63);
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
let Ue, pr;
hc ? (pr = (n) => n.byteLength === 8 ? new n.BigIntArray(n.buffer, n.byteOffset, 1)[0] : ir(n), Ue = (n) => n.byteLength === 8 ? `${new n.BigIntArray(n.buffer, n.byteOffset, 1)[0]}` : ir(n)) : (Ue = ir, pr = Ue);
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
class xr {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new Ze(t);
      case !1:
        return new Xe(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Ln:
        return new Ze(t);
    }
    return t.byteLength === 16 ? new xn(t) : new Xe(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new Ze(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new Xe(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new xn(t);
  }
  constructor(t, e) {
    return xr.new(t, e);
  }
}
var Zs, Xs, Qs, to, eo, no, io, ro, so, oo, ao, co, lo, uo, ho, fo, po, yo, mo;
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
    return I.isUnion(t) && t.mode === Dt.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return I.isUnion(t) && t.mode === Dt.Sparse;
  }
  get typeId() {
    return u.NONE;
  }
}
Zs = Symbol.toStringTag;
I[Zs] = ((n) => (n.children = null, n.ArrayType = Array, n[Symbol.toStringTag] = "DataType"))(I.prototype);
let _e = class extends I {
  toString() {
    return "Null";
  }
  get typeId() {
    return u.Null;
  }
};
Xs = Symbol.toStringTag;
_e[Xs] = ((n) => n[Symbol.toStringTag] = "Null")(_e.prototype);
class ve extends I {
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
        return this.isSigned ? Ln : Un;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
  }
}
Qs = Symbol.toStringTag;
ve[Qs] = ((n) => (n.isSigned = null, n.bitWidth = null, n[Symbol.toStringTag] = "Int"))(ve.prototype);
class Rn extends ve {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(Rn.prototype, "ArrayType", { value: Int32Array });
class En extends I {
  constructor(t) {
    super(), this.precision = t;
  }
  get typeId() {
    return u.Float;
  }
  get ArrayType() {
    switch (this.precision) {
      case St.HALF:
        return Uint16Array;
      case St.SINGLE:
        return Float32Array;
      case St.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
to = Symbol.toStringTag;
En[to] = ((n) => (n.precision = null, n[Symbol.toStringTag] = "Float"))(En.prototype);
let li = class extends I {
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
eo = Symbol.toStringTag;
li[eo] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Binary"))(li.prototype);
let ui = class extends I {
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
no = Symbol.toStringTag;
ui[no] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Utf8"))(ui.prototype);
let di = class extends I {
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
io = Symbol.toStringTag;
di[io] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Bool"))(di.prototype);
let hi = class extends I {
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
ro = Symbol.toStringTag;
hi[ro] = ((n) => (n.scale = null, n.precision = null, n.ArrayType = Uint32Array, n[Symbol.toStringTag] = "Decimal"))(hi.prototype);
class fi extends I {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return u.Date;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${de[this.unit]}>`;
  }
}
so = Symbol.toStringTag;
fi[so] = ((n) => (n.unit = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Date"))(fi.prototype);
class Mn extends I {
  constructor(t, e) {
    super(), this.unit = t, this.bitWidth = e;
  }
  get typeId() {
    return u.Time;
  }
  toString() {
    return `Time${this.bitWidth}<${Y[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return Ln;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
}
oo = Symbol.toStringTag;
Mn[oo] = ((n) => (n.unit = null, n.bitWidth = null, n[Symbol.toStringTag] = "Time"))(Mn.prototype);
class pi extends I {
  constructor(t, e) {
    super(), this.unit = t, this.timezone = e;
  }
  get typeId() {
    return u.Timestamp;
  }
  toString() {
    return `Timestamp<${Y[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
ao = Symbol.toStringTag;
pi[ao] = ((n) => (n.unit = null, n.timezone = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Timestamp"))(pi.prototype);
class yi extends I {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return u.Interval;
  }
  toString() {
    return `Interval<${ge[this.unit]}>`;
  }
}
co = Symbol.toStringTag;
yi[co] = ((n) => (n.unit = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Interval"))(yi.prototype);
let mi = class extends I {
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
lo = Symbol.toStringTag;
mi[lo] = ((n) => (n.children = null, n[Symbol.toStringTag] = "List"))(mi.prototype);
class pt extends I {
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
uo = Symbol.toStringTag;
pt[uo] = ((n) => (n.children = null, n[Symbol.toStringTag] = "Struct"))(pt.prototype);
class bi extends I {
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
ho = Symbol.toStringTag;
bi[ho] = ((n) => (n.mode = null, n.typeIds = null, n.children = null, n.typeIdToChildIndex = null, n.ArrayType = Int8Array, n[Symbol.toStringTag] = "Union"))(bi.prototype);
let gi = class extends I {
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
fo = Symbol.toStringTag;
gi[fo] = ((n) => (n.byteWidth = null, n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "FixedSizeBinary"))(gi.prototype);
let _i = class extends I {
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
po = Symbol.toStringTag;
_i[po] = ((n) => (n.children = null, n.listSize = null, n[Symbol.toStringTag] = "FixedSizeList"))(_i.prototype);
class vi extends I {
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
yo = Symbol.toStringTag;
vi[yo] = ((n) => (n.children = null, n.keysSorted = null, n[Symbol.toStringTag] = "Map_"))(vi.prototype);
const Dc = /* @__PURE__ */ ((n) => () => ++n)(-1);
class nn extends I {
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
mo = Symbol.toStringTag;
nn[mo] = ((n) => (n.id = null, n.indices = null, n.isOrdered = null, n.dictionary = null, n[Symbol.toStringTag] = "Dictionary"))(nn.prototype);
function se(n) {
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
class j {
  visitMany(t, ...e) {
    return t.map((i, r) => this.visit(i, ...e.map((s) => s[r])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], !1).apply(this, t);
  }
  getVisitFn(t, e = !0) {
    return xc(this, t, e);
  }
  getVisitFnByTypeId(t, e = !0) {
    return Je(this, t, e);
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
function xc(n, t, e = !0) {
  return typeof t == "number" ? Je(n, t, e) : typeof t == "string" && t in u ? Je(n, u[t], e) : t && t instanceof I ? Je(n, Ss(t), e) : t != null && t.type && t.type instanceof I ? Je(n, Ss(t.type), e) : Je(n, u.NONE, e);
}
function Je(n, t, e = !0) {
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
function Ss(n) {
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
        case St.HALF:
          return u.Float16;
        case St.SINGLE:
          return u.Float32;
        case St.DOUBLE:
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
        case Y.SECOND:
          return u.TimeSecond;
        case Y.MILLISECOND:
          return u.TimeMillisecond;
        case Y.MICROSECOND:
          return u.TimeMicrosecond;
        case Y.NANOSECOND:
          return u.TimeNanosecond;
      }
      return u.Time;
    case u.Timestamp:
      switch (n.unit) {
        case Y.SECOND:
          return u.TimestampSecond;
        case Y.MILLISECOND:
          return u.TimestampMillisecond;
        case Y.MICROSECOND:
          return u.TimestampMicrosecond;
        case Y.NANOSECOND:
          return u.TimestampNanosecond;
      }
      return u.Timestamp;
    case u.Date:
      switch (n.unit) {
        case de.DAY:
          return u.DateDay;
        case de.MILLISECOND:
          return u.DateMillisecond;
      }
      return u.Date;
    case u.Interval:
      switch (n.unit) {
        case ge.DAY_TIME:
          return u.IntervalDayTime;
        case ge.YEAR_MONTH:
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
        case Dt.Dense:
          return u.DenseUnion;
        case Dt.Sparse:
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
j.prototype.visitInt8 = null;
j.prototype.visitInt16 = null;
j.prototype.visitInt32 = null;
j.prototype.visitInt64 = null;
j.prototype.visitUint8 = null;
j.prototype.visitUint16 = null;
j.prototype.visitUint32 = null;
j.prototype.visitUint64 = null;
j.prototype.visitFloat16 = null;
j.prototype.visitFloat32 = null;
j.prototype.visitFloat64 = null;
j.prototype.visitDateDay = null;
j.prototype.visitDateMillisecond = null;
j.prototype.visitTimestampSecond = null;
j.prototype.visitTimestampMillisecond = null;
j.prototype.visitTimestampMicrosecond = null;
j.prototype.visitTimestampNanosecond = null;
j.prototype.visitTimeSecond = null;
j.prototype.visitTimeMillisecond = null;
j.prototype.visitTimeMicrosecond = null;
j.prototype.visitTimeNanosecond = null;
j.prototype.visitDenseUnion = null;
j.prototype.visitSparseUnion = null;
j.prototype.visitIntervalDayTime = null;
j.prototype.visitIntervalYearMonth = null;
const bo = new Float64Array(1), We = new Uint32Array(bo.buffer);
function go(n) {
  const t = (n & 31744) >> 10, e = (n & 1023) / 1024, i = Math.pow(-1, (n & 32768) >> 15);
  switch (t) {
    case 31:
      return i * (e ? Number.NaN : 1 / 0);
    case 0:
      return i * (e ? 6103515625e-14 * e : 0);
  }
  return i * Math.pow(2, t - 15) * (1 + e);
}
function Rc(n) {
  if (n !== n)
    return 32256;
  bo[0] = n;
  const t = (We[1] & 2147483648) >> 16 & 65535;
  let e = We[1] & 2146435072, i = 0;
  return e >= 1089470464 ? We[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, i = (We[1] & 1048575) >> 10) : e <= 1056964608 ? (i = 1048576 + (We[1] & 1048575), i = 1048576 + (i << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, i = (We[1] & 1048575) + 512 >> 10), t | e | i & 65535;
}
class T extends j {
}
function R(n) {
  return (t, e, i) => {
    if (t.setValid(e, i != null))
      return n(t, e, i);
  };
}
const Ec = (n, t, e) => {
  n[t] = Math.trunc(e / 864e5);
}, Rr = (n, t, e) => {
  n[t] = Math.trunc(e % 4294967296), n[t + 1] = Math.trunc(e / 4294967296);
}, Mc = (n, t, e) => {
  n[t] = Math.trunc(e * 1e3 % 4294967296), n[t + 1] = Math.trunc(e * 1e3 / 4294967296);
}, Nc = (n, t, e) => {
  n[t] = Math.trunc(e * 1e6 % 4294967296), n[t + 1] = Math.trunc(e * 1e6 / 4294967296);
}, _o = (n, t, e, i) => {
  if (e + 1 < t.length) {
    const { [e]: r, [e + 1]: s } = t;
    n.set(i.subarray(0, s - r), r);
  }
}, Cc = ({ offset: n, values: t }, e, i) => {
  const r = n + e;
  i ? t[r >> 3] |= 1 << r % 8 : t[r >> 3] &= ~(1 << r % 8);
}, he = ({ values: n }, t, e) => {
  n[t] = e;
}, Er = ({ values: n }, t, e) => {
  n[t] = e;
}, vo = ({ values: n }, t, e) => {
  n[t] = Rc(e);
}, Lc = (n, t, e) => {
  switch (n.type.precision) {
    case St.HALF:
      return vo(n, t, e);
    case St.SINGLE:
    case St.DOUBLE:
      return Er(n, t, e);
  }
}, wo = ({ values: n }, t, e) => {
  Ec(n, t, e.valueOf());
}, So = ({ values: n }, t, e) => {
  Rr(n, t * 2, e.valueOf());
}, Uc = ({ stride: n, values: t }, e, i) => {
  t.set(i.subarray(0, n), n * e);
}, Pc = ({ values: n, valueOffsets: t }, e, i) => _o(n, t, e, i), jc = ({ values: n, valueOffsets: t }, e, i) => {
  _o(n, t, e, Or(i));
}, kc = (n, t, e) => {
  n.type.unit === de.DAY ? wo(n, t, e) : So(n, t, e);
}, Io = ({ values: n }, t, e) => Rr(n, t * 2, e / 1e3), Bo = ({ values: n }, t, e) => Rr(n, t * 2, e), Ao = ({ values: n }, t, e) => Mc(n, t * 2, e), Oo = ({ values: n }, t, e) => Nc(n, t * 2, e), Vc = (n, t, e) => {
  switch (n.type.unit) {
    case Y.SECOND:
      return Io(n, t, e);
    case Y.MILLISECOND:
      return Bo(n, t, e);
    case Y.MICROSECOND:
      return Ao(n, t, e);
    case Y.NANOSECOND:
      return Oo(n, t, e);
  }
}, Fo = ({ values: n }, t, e) => {
  n[t] = e;
}, To = ({ values: n }, t, e) => {
  n[t] = e;
}, Do = ({ values: n }, t, e) => {
  n[t] = e;
}, xo = ({ values: n }, t, e) => {
  n[t] = e;
}, zc = (n, t, e) => {
  switch (n.type.unit) {
    case Y.SECOND:
      return Fo(n, t, e);
    case Y.MILLISECOND:
      return To(n, t, e);
    case Y.MICROSECOND:
      return Do(n, t, e);
    case Y.NANOSECOND:
      return xo(n, t, e);
  }
}, $c = ({ values: n, stride: t }, e, i) => {
  n.set(i.subarray(0, t), t * e);
}, Yc = (n, t, e) => {
  const i = n.children[0], r = n.valueOffsets, s = Lt.getVisitFn(i);
  if (Array.isArray(e))
    for (let o = -1, a = r[t], c = r[t + 1]; a < c; )
      s(i, a++, e[++o]);
  else
    for (let o = -1, a = r[t], c = r[t + 1]; a < c; )
      s(i, a++, e.get(++o));
}, Wc = (n, t, e) => {
  const i = n.children[0], { valueOffsets: r } = n, s = Lt.getVisitFn(i);
  let { [t]: o, [t + 1]: a } = r;
  const c = e instanceof Map ? e.entries() : Object.entries(e);
  for (const d of c)
    if (s(i, o, d), ++o >= a)
      break;
}, Jc = (n, t) => (e, i, r, s) => i && e(i, n, t[s]), Hc = (n, t) => (e, i, r, s) => i && e(i, n, t.get(s)), Kc = (n, t) => (e, i, r, s) => i && e(i, n, t.get(r.name)), Gc = (n, t) => (e, i, r, s) => i && e(i, n, t[r.name]), qc = (n, t, e) => {
  const i = n.type.children.map((s) => Lt.getVisitFn(s.type)), r = e instanceof Map ? Kc(t, e) : e instanceof q ? Hc(t, e) : Array.isArray(e) ? Jc(t, e) : Gc(t, e);
  n.type.children.forEach((s, o) => r(i[o], n.children[o], s, o));
}, Zc = (n, t, e) => {
  n.type.mode === Dt.Dense ? Ro(n, t, e) : Eo(n, t, e);
}, Ro = (n, t, e) => {
  const i = n.type.typeIdToChildIndex[n.typeIds[t]], r = n.children[i];
  Lt.visit(r, n.valueOffsets[t], e);
}, Eo = (n, t, e) => {
  const i = n.type.typeIdToChildIndex[n.typeIds[t]], r = n.children[i];
  Lt.visit(r, t, e);
}, Xc = (n, t, e) => {
  var i;
  (i = n.dictionary) === null || i === void 0 || i.set(n.values[t], e);
}, Qc = (n, t, e) => {
  n.type.unit === ge.DAY_TIME ? Mo(n, t, e) : No(n, t, e);
}, Mo = ({ values: n }, t, e) => {
  n.set(e.subarray(0, 2), 2 * t);
}, No = ({ values: n }, t, e) => {
  n[t] = e[0] * 12 + e[1] % 12;
}, tl = (n, t, e) => {
  const { stride: i } = n, r = n.children[0], s = Lt.getVisitFn(r);
  if (Array.isArray(e))
    for (let o = -1, a = t * i; ++o < i; )
      s(r, a + o, e[o]);
  else
    for (let o = -1, a = t * i; ++o < i; )
      s(r, a + o, e.get(o));
};
T.prototype.visitBool = R(Cc);
T.prototype.visitInt = R(he);
T.prototype.visitInt8 = R(he);
T.prototype.visitInt16 = R(he);
T.prototype.visitInt32 = R(he);
T.prototype.visitInt64 = R(he);
T.prototype.visitUint8 = R(he);
T.prototype.visitUint16 = R(he);
T.prototype.visitUint32 = R(he);
T.prototype.visitUint64 = R(he);
T.prototype.visitFloat = R(Lc);
T.prototype.visitFloat16 = R(vo);
T.prototype.visitFloat32 = R(Er);
T.prototype.visitFloat64 = R(Er);
T.prototype.visitUtf8 = R(jc);
T.prototype.visitBinary = R(Pc);
T.prototype.visitFixedSizeBinary = R(Uc);
T.prototype.visitDate = R(kc);
T.prototype.visitDateDay = R(wo);
T.prototype.visitDateMillisecond = R(So);
T.prototype.visitTimestamp = R(Vc);
T.prototype.visitTimestampSecond = R(Io);
T.prototype.visitTimestampMillisecond = R(Bo);
T.prototype.visitTimestampMicrosecond = R(Ao);
T.prototype.visitTimestampNanosecond = R(Oo);
T.prototype.visitTime = R(zc);
T.prototype.visitTimeSecond = R(Fo);
T.prototype.visitTimeMillisecond = R(To);
T.prototype.visitTimeMicrosecond = R(Do);
T.prototype.visitTimeNanosecond = R(xo);
T.prototype.visitDecimal = R($c);
T.prototype.visitList = R(Yc);
T.prototype.visitStruct = R(qc);
T.prototype.visitUnion = R(Zc);
T.prototype.visitDenseUnion = R(Ro);
T.prototype.visitSparseUnion = R(Eo);
T.prototype.visitDictionary = R(Xc);
T.prototype.visitInterval = R(Qc);
T.prototype.visitIntervalDayTime = R(Mo);
T.prototype.visitIntervalYearMonth = R(No);
T.prototype.visitFixedSizeList = R(tl);
T.prototype.visitMap = R(Wc);
const Lt = new T(), Pt = Symbol.for("parent"), Qe = Symbol.for("rowIndex");
class Mr {
  constructor(t, e) {
    return this[Pt] = t, this[Qe] = e, new Proxy(this, new nl());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Qe], e = this[Pt], i = e.type.children, r = {};
    for (let s = -1, o = i.length; ++s < o; )
      r[i[s].name] = Bt.visit(e.children[s], t);
    return r;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${Dn(t)}: ${Dn(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new el(this[Pt], this[Qe]);
  }
}
class el {
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
        Bt.visit(this.children[t], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
}
Object.defineProperties(Mr.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Pt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [Qe]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
class nl {
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
    return t[Pt].type.children.map((e) => e.name);
  }
  has(t, e) {
    return t[Pt].type.children.findIndex((i) => i.name === e) !== -1;
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Pt].type.children.findIndex((i) => i.name === e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const i = t[Pt].type.children.findIndex((r) => r.name === e);
    if (i !== -1) {
      const r = Bt.visit(t[Pt].children[i], t[Qe]);
      return Reflect.set(t, e, r), r;
    }
  }
  set(t, e, i) {
    const r = t[Pt].type.children.findIndex((s) => s.name === e);
    return r !== -1 ? (Lt.visit(t[Pt].children[r], t[Qe], i), Reflect.set(t, e, i)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, i) : !1;
  }
}
class B extends j {
}
function D(n) {
  return (t, e) => t.getValid(e) ? n(t, e) : null;
}
const il = (n, t) => 864e5 * n[t], Nr = (n, t) => 4294967296 * n[t + 1] + (n[t] >>> 0), rl = (n, t) => 4294967296 * (n[t + 1] / 1e3) + (n[t] >>> 0) / 1e3, sl = (n, t) => 4294967296 * (n[t + 1] / 1e6) + (n[t] >>> 0) / 1e6, Co = (n) => new Date(n), ol = (n, t) => Co(il(n, t)), al = (n, t) => Co(Nr(n, t)), cl = (n, t) => null, Lo = (n, t, e) => {
  if (e + 1 >= t.length)
    return null;
  const i = t[e], r = t[e + 1];
  return n.subarray(i, r);
}, ll = ({ offset: n, values: t }, e) => {
  const i = n + e;
  return (t[i >> 3] & 1 << i % 8) !== 0;
}, Uo = ({ values: n }, t) => ol(n, t), Po = ({ values: n }, t) => al(n, t * 2), Ie = ({ stride: n, values: t }, e) => t[n * e], ul = ({ stride: n, values: t }, e) => go(t[n * e]), jo = ({ values: n }, t) => n[t], dl = ({ stride: n, values: t }, e) => t.subarray(n * e, n * (e + 1)), hl = ({ values: n, valueOffsets: t }, e) => Lo(n, t, e), fl = ({ values: n, valueOffsets: t }, e) => {
  const i = Lo(n, t, e);
  return i !== null ? dr(i) : null;
}, pl = ({ values: n }, t) => n[t], yl = ({ type: n, values: t }, e) => n.precision !== St.HALF ? t[e] : go(t[e]), ml = (n, t) => n.type.unit === de.DAY ? Uo(n, t) : Po(n, t), ko = ({ values: n }, t) => 1e3 * Nr(n, t * 2), Vo = ({ values: n }, t) => Nr(n, t * 2), zo = ({ values: n }, t) => rl(n, t * 2), $o = ({ values: n }, t) => sl(n, t * 2), bl = (n, t) => {
  switch (n.type.unit) {
    case Y.SECOND:
      return ko(n, t);
    case Y.MILLISECOND:
      return Vo(n, t);
    case Y.MICROSECOND:
      return zo(n, t);
    case Y.NANOSECOND:
      return $o(n, t);
  }
}, Yo = ({ values: n }, t) => n[t], Wo = ({ values: n }, t) => n[t], Jo = ({ values: n }, t) => n[t], Ho = ({ values: n }, t) => n[t], gl = (n, t) => {
  switch (n.type.unit) {
    case Y.SECOND:
      return Yo(n, t);
    case Y.MILLISECOND:
      return Wo(n, t);
    case Y.MICROSECOND:
      return Jo(n, t);
    case Y.NANOSECOND:
      return Ho(n, t);
  }
}, _l = ({ values: n, stride: t }, e) => xr.decimal(n.subarray(t * e, t * (e + 1))), vl = (n, t) => {
  const { valueOffsets: e, stride: i, children: r } = n, { [t * i]: s, [t * i + 1]: o } = e, c = r[0].slice(s, o - s);
  return new q([c]);
}, wl = (n, t) => {
  const { valueOffsets: e, children: i } = n, { [t]: r, [t + 1]: s } = e, o = i[0];
  return new Cr(o.slice(r, s - r));
}, Sl = (n, t) => new Mr(n, t), Il = (n, t) => n.type.mode === Dt.Dense ? Ko(n, t) : Go(n, t), Ko = (n, t) => {
  const e = n.type.typeIdToChildIndex[n.typeIds[t]], i = n.children[e];
  return Bt.visit(i, n.valueOffsets[t]);
}, Go = (n, t) => {
  const e = n.type.typeIdToChildIndex[n.typeIds[t]], i = n.children[e];
  return Bt.visit(i, t);
}, Bl = (n, t) => {
  var e;
  return (e = n.dictionary) === null || e === void 0 ? void 0 : e.get(n.values[t]);
}, Al = (n, t) => n.type.unit === ge.DAY_TIME ? qo(n, t) : Zo(n, t), qo = ({ values: n }, t) => n.subarray(2 * t, 2 * (t + 1)), Zo = ({ values: n }, t) => {
  const e = n[t], i = new Int32Array(2);
  return i[0] = Math.trunc(e / 12), i[1] = Math.trunc(e % 12), i;
}, Ol = (n, t) => {
  const { stride: e, children: i } = n, s = i[0].slice(t * e, e);
  return new q([s]);
};
B.prototype.visitNull = D(cl);
B.prototype.visitBool = D(ll);
B.prototype.visitInt = D(pl);
B.prototype.visitInt8 = D(Ie);
B.prototype.visitInt16 = D(Ie);
B.prototype.visitInt32 = D(Ie);
B.prototype.visitInt64 = D(jo);
B.prototype.visitUint8 = D(Ie);
B.prototype.visitUint16 = D(Ie);
B.prototype.visitUint32 = D(Ie);
B.prototype.visitUint64 = D(jo);
B.prototype.visitFloat = D(yl);
B.prototype.visitFloat16 = D(ul);
B.prototype.visitFloat32 = D(Ie);
B.prototype.visitFloat64 = D(Ie);
B.prototype.visitUtf8 = D(fl);
B.prototype.visitBinary = D(hl);
B.prototype.visitFixedSizeBinary = D(dl);
B.prototype.visitDate = D(ml);
B.prototype.visitDateDay = D(Uo);
B.prototype.visitDateMillisecond = D(Po);
B.prototype.visitTimestamp = D(bl);
B.prototype.visitTimestampSecond = D(ko);
B.prototype.visitTimestampMillisecond = D(Vo);
B.prototype.visitTimestampMicrosecond = D(zo);
B.prototype.visitTimestampNanosecond = D($o);
B.prototype.visitTime = D(gl);
B.prototype.visitTimeSecond = D(Yo);
B.prototype.visitTimeMillisecond = D(Wo);
B.prototype.visitTimeMicrosecond = D(Jo);
B.prototype.visitTimeNanosecond = D(Ho);
B.prototype.visitDecimal = D(_l);
B.prototype.visitList = D(vl);
B.prototype.visitStruct = D(Sl);
B.prototype.visitUnion = D(Il);
B.prototype.visitDenseUnion = D(Ko);
B.prototype.visitSparseUnion = D(Go);
B.prototype.visitDictionary = D(Bl);
B.prototype.visitInterval = D(Al);
B.prototype.visitIntervalDayTime = D(qo);
B.prototype.visitIntervalYearMonth = D(Zo);
B.prototype.visitFixedSizeList = D(Ol);
B.prototype.visitMap = D(wl);
const Bt = new B(), Wt = Symbol.for("keys"), tn = Symbol.for("vals");
class Cr {
  constructor(t) {
    return this[Wt] = new q([t.children[0]]).memoize(), this[tn] = t.children[1], new Proxy(this, new Tl());
  }
  [Symbol.iterator]() {
    return new Fl(this[Wt], this[tn]);
  }
  get size() {
    return this[Wt].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Wt], e = this[tn], i = {};
    for (let r = -1, s = t.length; ++r < s; )
      i[t.get(r)] = Bt.visit(e, r);
    return i;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${Dn(t)}: ${Dn(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class Fl {
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
        Bt.visit(this.vals, t)
      ]
    });
  }
}
class Tl {
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
    return t[Wt].toArray().map(String);
  }
  has(t, e) {
    return t[Wt].includes(e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Wt].indexOf(e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const i = t[Wt].indexOf(e);
    if (i !== -1) {
      const r = Bt.visit(Reflect.get(t, tn), i);
      return Reflect.set(t, e, r), r;
    }
  }
  set(t, e, i) {
    const r = t[Wt].indexOf(e);
    return r !== -1 ? (Lt.visit(Reflect.get(t, tn), r, i), Reflect.set(t, e, i)) : Reflect.has(t, e) ? Reflect.set(t, e, i) : !1;
  }
}
Object.defineProperties(Cr.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Wt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [tn]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let Is;
function Xo(n, t, e, i) {
  const { length: r = 0 } = n;
  let s = typeof t != "number" ? 0 : t, o = typeof e != "number" ? r : e;
  return s < 0 && (s = (s % r + r) % r), o < 0 && (o = (o % r + r) % r), o < s && (Is = s, s = o, o = Is), o > r && (o = r), i ? i(n, s, o) : [s, o];
}
const Bs = (n) => n !== n;
function dn(n) {
  if (typeof n !== "object" || n === null)
    return Bs(n) ? Bs : (e) => e === n;
  if (n instanceof Date) {
    const e = n.valueOf();
    return (i) => i instanceof Date ? i.valueOf() === e : !1;
  }
  return ArrayBuffer.isView(n) ? (e) => e ? wc(n, e) : !1 : n instanceof Map ? xl(n) : Array.isArray(n) ? Dl(n) : n instanceof q ? Rl(n) : El(n, !0);
}
function Dl(n) {
  const t = [];
  for (let e = -1, i = n.length; ++e < i; )
    t[e] = dn(n[e]);
  return ki(t);
}
function xl(n) {
  let t = -1;
  const e = [];
  for (const i of n.values())
    e[++t] = dn(i);
  return ki(e);
}
function Rl(n) {
  const t = [];
  for (let e = -1, i = n.length; ++e < i; )
    t[e] = dn(n.get(e));
  return ki(t);
}
function El(n, t = !1) {
  const e = Object.keys(n);
  if (!t && e.length === 0)
    return () => !1;
  const i = [];
  for (let r = -1, s = e.length; ++r < s; )
    i[r] = dn(n[e[r]]);
  return ki(i, e);
}
function ki(n, t) {
  return (e) => {
    if (!e || typeof e != "object")
      return !1;
    switch (e.constructor) {
      case Array:
        return Ml(n, e);
      case Map:
        return As(n, e, e.keys());
      case Cr:
      case Mr:
      case Object:
      case void 0:
        return As(n, e, t || Object.keys(e));
    }
    return e instanceof q ? Nl(n, e) : !1;
  };
}
function Ml(n, t) {
  const e = n.length;
  if (t.length !== e)
    return !1;
  for (let i = -1; ++i < e; )
    if (!n[i](t[i]))
      return !1;
  return !0;
}
function Nl(n, t) {
  const e = n.length;
  if (t.length !== e)
    return !1;
  for (let i = -1; ++i < e; )
    if (!n[i](t.get(i)))
      return !1;
  return !0;
}
function As(n, t, e) {
  const i = e[Symbol.iterator](), r = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), s = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const a = n.length;
  let c = s.next(), d = i.next(), h = r.next();
  for (; o < a && !d.done && !h.done && !c.done && !(d.value !== h.value || !n[o](c.value)); ++o, d = i.next(), h = r.next(), c = s.next())
    ;
  return o === a && d.done && h.done && c.done ? !0 : (i.return && i.return(), r.return && r.return(), s.return && s.return(), !1);
}
function Qo(n, t, e, i) {
  return (e & 1 << i) !== 0;
}
function Cl(n, t, e, i) {
  return (e & 1 << i) >> i;
}
function Lr(n, t, e) {
  const i = e.byteLength + 7 & -8;
  if (n > 0 || e.byteLength < i) {
    const r = new Uint8Array(i);
    return r.set(n % 8 === 0 ? e.subarray(n >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      wi(new Ur(e, n, t, null, Qo)).subarray(0, i)
    )), r;
  }
  return e;
}
function wi(n) {
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
    for (const o of new Ur(n, t, e - t, n, Cl))
      s += o;
    return s;
  }
  const i = e >> 3 << 3, r = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    yr(n, t, r) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    yr(n, i, e) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    Ll(n, r >> 3, i - r >> 3)
  );
}
function Ll(n, t, e) {
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
const Ul = -1;
class nt {
  constructor(t, e, i, r, s, o = [], a) {
    this.type = t, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(i || 0, 0)), this._nullCount = Math.floor(Math.max(r || 0, -1));
    let c;
    s instanceof nt ? (this.stride = s.stride, this.values = s.values, this.typeIds = s.typeIds, this.nullBitmap = s.nullBitmap, this.valueOffsets = s.valueOffsets) : (this.stride = se(t), s && ((c = s[0]) && (this.valueOffsets = c), (c = s[1]) && (this.values = c), (c = s[2]) && (this.nullBitmap = c), (c = s[3]) && (this.typeIds = c))), this.nullable = this._nullCount !== 0 && this.nullBitmap && this.nullBitmap.byteLength > 0;
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
    return t <= Ul && (e = this.nullBitmap) && (this._nullCount = t = this.length - yr(e, this.offset, this.offset + this.length)), t;
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
    return new nt(t, e, i, r, s, o, this.dictionary);
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
    return s[re.VALIDITY] = r, this.clone(this.type, 0, t, i + (t - e), s);
  }
  _sliceBuffers(t, e, i, r) {
    let s;
    const { buffers: o } = this;
    return (s = o[re.TYPE]) && (o[re.TYPE] = s.subarray(t, t + e)), (s = o[re.OFFSET]) && (o[re.OFFSET] = s.subarray(t, t + e + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (s = o[re.DATA]) && (o[re.DATA] = r === 6 ? s : s.subarray(i * t, i * (t + e))), o;
  }
  _sliceChildren(t, e, i) {
    return t.map((r) => r.slice(e, i));
  }
}
nt.prototype.children = Object.freeze([]);
class On extends j {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["length"]: r = 0 } = t;
    return new nt(e, i, r, 0);
  }
  visitBool(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length >> 3, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, s, r]);
  }
  visitInt(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, s, r]);
  }
  visitFloat(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, s, r]);
  }
  visitUtf8(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.data), s = $(t.nullBitmap), o = Sn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, a, c, [o, r, s]);
  }
  visitBinary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.data), s = $(t.nullBitmap), o = Sn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, a, c, [o, r, s]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / se(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, s, r]);
  }
  visitDate(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / se(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, s, r]);
  }
  visitTimestamp(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / se(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, s, r]);
  }
  visitTime(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / se(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, s, r]);
  }
  visitDecimal(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / se(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, s, r]);
  }
  visitList(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: r } = t, s = $(t.nullBitmap), o = Sn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, a, c, [o, void 0, s], [r]);
  }
  visitStruct(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["children"]: r = [] } = t, s = $(t.nullBitmap), { length: o = r.reduce((c, { length: d }) => Math.max(c, d), 0), nullCount: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, void 0, s], r);
  }
  visitUnion(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["children"]: r = [] } = t, s = $(t.nullBitmap), o = tt(e.ArrayType, t.typeIds), { ["length"]: a = o.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    if (I.isSparseUnion(e))
      return new nt(e, i, a, c, [void 0, void 0, s, o], r);
    const d = Sn(t.valueOffsets);
    return new nt(e, i, a, c, [d, void 0, s, o], r);
  }
  visitDictionary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.indices.ArrayType, t.data), { ["dictionary"]: o = new q([new On().visit({ type: e.dictionary })]) } = t, { ["length"]: a = s.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, a, c, [void 0, s, r], [], o);
  }
  visitInterval(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = $(t.nullBitmap), s = tt(e.ArrayType, t.data), { ["length"]: o = s.length / se(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, s, r]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: r = new On().visit({ type: e.valueType }) } = t, s = $(t.nullBitmap), { ["length"]: o = r.length / se(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, o, a, [void 0, void 0, s], [r]);
  }
  visitMap(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: r = new On().visit({ type: e.childType }) } = t, s = $(t.nullBitmap), o = Sn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new nt(e, i, a, c, [o, void 0, s], [r]);
  }
}
function P(n) {
  return new On().visit(n);
}
class Os {
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
function ta(n) {
  return n.reduce((t, e) => t + e.nullCount, 0);
}
function ea(n) {
  return n.reduce((t, e, i) => (t[i + 1] = t[i] + e.length, t), new Uint32Array(n.length + 1));
}
function na(n, t, e, i) {
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
function en(n) {
  function t(e, i, r) {
    return n(e[i], r);
  }
  return function(e) {
    const i = this.data;
    return Pr(i, this._offsets, e, t);
  };
}
function ia(n) {
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
function ra(n) {
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
class A extends j {
}
function Pl(n, t) {
  return t === null && n.length > 0 ? 0 : -1;
}
function jl(n, t) {
  const { nullBitmap: e } = n;
  if (!e || n.nullCount <= 0)
    return -1;
  let i = 0;
  for (const r of new Ur(e, n.offset + (t || 0), n.length, e, Qo)) {
    if (!r)
      return i;
    ++i;
  }
  return -1;
}
function M(n, t, e) {
  if (t === void 0)
    return -1;
  if (t === null)
    return jl(n, e);
  const i = Bt.getVisitFn(n), r = dn(t);
  for (let s = (e || 0) - 1, o = n.length; ++s < o; )
    if (r(i(n, s)))
      return s;
  return -1;
}
function sa(n, t, e) {
  const i = Bt.getVisitFn(n), r = dn(t);
  for (let s = (e || 0) - 1, o = n.length; ++s < o; )
    if (r(i(n, s)))
      return s;
  return -1;
}
A.prototype.visitNull = Pl;
A.prototype.visitBool = M;
A.prototype.visitInt = M;
A.prototype.visitInt8 = M;
A.prototype.visitInt16 = M;
A.prototype.visitInt32 = M;
A.prototype.visitInt64 = M;
A.prototype.visitUint8 = M;
A.prototype.visitUint16 = M;
A.prototype.visitUint32 = M;
A.prototype.visitUint64 = M;
A.prototype.visitFloat = M;
A.prototype.visitFloat16 = M;
A.prototype.visitFloat32 = M;
A.prototype.visitFloat64 = M;
A.prototype.visitUtf8 = M;
A.prototype.visitBinary = M;
A.prototype.visitFixedSizeBinary = M;
A.prototype.visitDate = M;
A.prototype.visitDateDay = M;
A.prototype.visitDateMillisecond = M;
A.prototype.visitTimestamp = M;
A.prototype.visitTimestampSecond = M;
A.prototype.visitTimestampMillisecond = M;
A.prototype.visitTimestampMicrosecond = M;
A.prototype.visitTimestampNanosecond = M;
A.prototype.visitTime = M;
A.prototype.visitTimeSecond = M;
A.prototype.visitTimeMillisecond = M;
A.prototype.visitTimeMicrosecond = M;
A.prototype.visitTimeNanosecond = M;
A.prototype.visitDecimal = M;
A.prototype.visitList = M;
A.prototype.visitStruct = M;
A.prototype.visitUnion = M;
A.prototype.visitDenseUnion = sa;
A.prototype.visitSparseUnion = sa;
A.prototype.visitDictionary = M;
A.prototype.visitInterval = M;
A.prototype.visitIntervalDayTime = M;
A.prototype.visitIntervalYearMonth = M;
A.prototype.visitFixedSizeList = M;
A.prototype.visitMap = M;
const Si = new A();
class O extends j {
}
function x(n) {
  const { type: t } = n;
  if (n.nullCount === 0 && n.stride === 1 && (t.typeId === u.Timestamp || t instanceof ve && t.bitWidth !== 64 || t instanceof Mn && t.bitWidth !== 64 || t instanceof En && t.precision !== St.HALF))
    return new Os(n.data.length, (i) => {
      const r = n.data[i];
      return r.values.subarray(0, r.length)[Symbol.iterator]();
    });
  let e = 0;
  return new Os(n.data.length, (i) => {
    const s = n.data[i].length, o = n.slice(e, e + s);
    return e += s, new kl(o);
  });
}
class kl {
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
O.prototype.visitNull = x;
O.prototype.visitBool = x;
O.prototype.visitInt = x;
O.prototype.visitInt8 = x;
O.prototype.visitInt16 = x;
O.prototype.visitInt32 = x;
O.prototype.visitInt64 = x;
O.prototype.visitUint8 = x;
O.prototype.visitUint16 = x;
O.prototype.visitUint32 = x;
O.prototype.visitUint64 = x;
O.prototype.visitFloat = x;
O.prototype.visitFloat16 = x;
O.prototype.visitFloat32 = x;
O.prototype.visitFloat64 = x;
O.prototype.visitUtf8 = x;
O.prototype.visitBinary = x;
O.prototype.visitFixedSizeBinary = x;
O.prototype.visitDate = x;
O.prototype.visitDateDay = x;
O.prototype.visitDateMillisecond = x;
O.prototype.visitTimestamp = x;
O.prototype.visitTimestampSecond = x;
O.prototype.visitTimestampMillisecond = x;
O.prototype.visitTimestampMicrosecond = x;
O.prototype.visitTimestampNanosecond = x;
O.prototype.visitTime = x;
O.prototype.visitTimeSecond = x;
O.prototype.visitTimeMillisecond = x;
O.prototype.visitTimeMicrosecond = x;
O.prototype.visitTimeNanosecond = x;
O.prototype.visitDecimal = x;
O.prototype.visitList = x;
O.prototype.visitStruct = x;
O.prototype.visitUnion = x;
O.prototype.visitDenseUnion = x;
O.prototype.visitSparseUnion = x;
O.prototype.visitDictionary = x;
O.prototype.visitInterval = x;
O.prototype.visitIntervalDayTime = x;
O.prototype.visitIntervalYearMonth = x;
O.prototype.visitFixedSizeList = x;
O.prototype.visitMap = x;
const kr = new O(), Vl = (n, t) => n + t;
class Be extends j {
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
    return t.type.unit === Y.SECOND ? 4 : 8;
  }
  visitInterval(t, e) {
    return (t.type.unit + 1) * 4;
  }
  visitStruct(t, e) {
    return t.children.reduce((i, r) => i + te.visit(r, e), 0);
  }
  visitFixedSizeBinary(t, e) {
    return t.type.byteWidth;
  }
  visitMap(t, e) {
    return 8 + t.children.reduce((i, r) => i + te.visit(r, e), 0);
  }
  visitDictionary(t, e) {
    var i;
    return t.type.indices.bitWidth / 8 + (((i = t.dictionary) === null || i === void 0 ? void 0 : i.getByteLength(t.values[e])) || 0);
  }
}
const zl = ({ valueOffsets: n }, t) => 8 + (n[t + 1] - n[t]), $l = ({ valueOffsets: n }, t) => 8 + (n[t + 1] - n[t]), Yl = ({ valueOffsets: n, stride: t, children: e }, i) => {
  const r = e[0], { [i * t]: s } = n, { [i * t + 1]: o } = n, a = te.getVisitFn(r.type), c = r.slice(s, o - s);
  let d = 8;
  for (let h = -1, p = o - s; ++h < p; )
    d += a(c, h);
  return d;
}, Wl = ({ stride: n, children: t }, e) => {
  const i = t[0], r = i.slice(e * n, n), s = te.getVisitFn(i.type);
  let o = 0;
  for (let a = -1, c = r.length; ++a < c; )
    o += s(r, a);
  return o;
}, Jl = (n, t) => n.type.mode === Dt.Dense ? oa(n, t) : aa(n, t), oa = ({ type: n, children: t, typeIds: e, valueOffsets: i }, r) => {
  const s = n.typeIdToChildIndex[e[r]];
  return 8 + te.visit(t[s], i[r]);
}, aa = ({ children: n }, t) => 4 + te.visitMany(n, n.map(() => t)).reduce(Vl, 0);
Be.prototype.visitUtf8 = zl;
Be.prototype.visitBinary = $l;
Be.prototype.visitList = Yl;
Be.prototype.visitFixedSizeList = Wl;
Be.prototype.visitUnion = Jl;
Be.prototype.visitDenseUnion = oa;
Be.prototype.visitSparseUnion = aa;
const te = new Be();
var ca;
const la = {}, ua = {};
class q {
  constructor(t) {
    var e, i, r;
    const s = t[0] instanceof q ? t.flatMap((a) => a.data) : t;
    if (s.length === 0 || s.some((a) => !(a instanceof nt)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (e = s[0]) === null || e === void 0 ? void 0 : e.type;
    switch (s.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: c, indexOf: d, byteLength: h } = la[o.typeId], p = s[0];
        this.isValid = (_) => jr(p, _), this.get = (_) => a(p, _), this.set = (_, b) => c(p, _, b), this.indexOf = (_) => d(p, _), this.getByteLength = (_) => h(p, _), this._offsets = [0, p.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, ua[o.typeId]), this._offsets = ea(s);
        break;
    }
    this.data = s, this.type = o, this.stride = se(o), this.numChildren = (r = (i = o.children) === null || i === void 0 ? void 0 : i.length) !== null && r !== void 0 ? r : 0, this.length = this._offsets[this._offsets.length - 1];
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
    return this._nullCount === -1 && (this._nullCount = ta(this.data)), this._nullCount;
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
    return new q(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    return new q(Xo(this, t, e, ({ data: i, _offsets: r }, s, o) => na(i, r, s, o)));
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
    return t > -1 && t < this.numChildren ? new q(this.data.map(({ children: e }) => e[t])) : null;
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
      const t = new Ii(this.data[0].dictionary), e = this.data.map((i) => {
        const r = i.clone();
        return r.dictionary = t, r;
      });
      return new q(e);
    }
    return new Ii(this);
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
      return new q(e);
    }
    return this;
  }
}
ca = Symbol.toStringTag;
q[ca] = ((n) => {
  n.type = I.prototype, n.data = [], n.length = 0, n.stride = 1, n.numChildren = 0, n._nullCount = -1, n._byteLength = -1, n._offsets = new Uint32Array([0]), n[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(u).map((e) => u[e]).filter((e) => typeof e == "number" && e !== u.NONE);
  for (const e of t) {
    const i = Bt.getVisitFnByTypeId(e), r = Lt.getVisitFnByTypeId(e), s = Si.getVisitFnByTypeId(e), o = te.getVisitFnByTypeId(e);
    la[e] = { get: i, set: r, indexOf: s, byteLength: o }, ua[e] = Object.create(n, {
      isValid: { value: en(jr) },
      get: { value: en(Bt.getVisitFnByTypeId(e)) },
      set: { value: ia(Lt.getVisitFnByTypeId(e)) },
      indexOf: { value: ra(Si.getVisitFnByTypeId(e)) },
      getByteLength: { value: en(te.getVisitFnByTypeId(e)) }
    });
  }
  return "Vector";
})(q.prototype);
class Ii extends q {
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
      value: (o, a) => new Ii(r.call(this, o, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new q(this.data)
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
const sr = 2, Jt = 4, ae = 4, et = 4, ye = new Int32Array(2), Fs = new Float32Array(ye.buffer), Ts = new Float64Array(ye.buffer), ti = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
let le = class br {
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
le.ZERO = new le(0, 0);
var gr;
(function(n) {
  n[n.UTF8_BYTES = 1] = "UTF8_BYTES", n[n.UTF16_STRING = 2] = "UTF16_STRING";
})(gr || (gr = {}));
let rn = class da {
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
    return new da(new Uint8Array(t));
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
    return new le(this.readInt32(t), this.readInt32(t + 4));
  }
  readUint64(t) {
    return new le(this.readUint32(t), this.readUint32(t + 4));
  }
  readFloat32(t) {
    return ye[0] = this.readInt32(t), Fs[0];
  }
  readFloat64(t) {
    return ye[ti ? 0 : 1] = this.readInt32(t), ye[ti ? 1 : 0] = this.readInt32(t + 4), Ts[0];
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
    Fs[0] = e, this.writeInt32(t, ye[0]);
  }
  writeFloat64(t, e) {
    Ts[0] = e, this.writeInt32(t, ye[ti ? 0 : 1]), this.writeInt32(t + 4, ye[ti ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + Jt + ae)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < ae; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + Jt + e));
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
    if (t += Jt, e === gr.UTF8_BYTES)
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
    return t + this.readInt32(t) + Jt;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != ae)
      throw new Error("FlatBuffers: file identifier must be length " + ae);
    for (let e = 0; e < ae; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + Jt + e))
        return !1;
    return !0;
  }
  /**
   * A helper function to avoid generated code depending on this file directly.
   */
  createLong(t, e) {
    return le.create(t, e);
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
}, ha = class fa {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
    let e;
    t ? e = t : e = 1024, this.bb = rn.allocate(e), this.space = e;
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
      this.bb = fa.growByteBuffer(this.bb), this.space += this.bb.capacity() - r;
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
    const i = e << 1, r = rn.allocate(i);
    return r.setPosition(i - e), r.bytes().set(t.bytes(), i - e), r;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(Jt, 0), this.writeInt32(this.offset() - t + Jt);
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
    const r = i ? et : 0;
    if (e) {
      const s = e;
      if (this.prep(this.minalign, Jt + ae + r), s.length != ae)
        throw new Error("FlatBuffers: file identifier must be length " + ae);
      for (let o = ae - 1; o >= 0; o--)
        this.writeInt8(s.charCodeAt(o));
    }
    this.prep(this.minalign, Jt + r), this.addOffset(t), r && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
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
    this.notNested(), this.vector_num_elems = e, this.prep(Jt, t * e), this.prep(i, t * e);
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
    return le.create(t, e);
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
    return t.setPosition(t.position() + et), (e || new ut()).__init(t.readInt32(t.position()) + t.position(), t);
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
var sn;
(function(n) {
  n[n.V1 = 0] = "V1", n[n.V2 = 1] = "V2", n[n.V3 = 2] = "V3", n[n.V4 = 3] = "V4", n[n.V5 = 4] = "V5";
})(sn || (sn = {}));
var on;
(function(n) {
  n[n.Little = 0] = "Little", n[n.Big = 1] = "Big";
})(on || (on = {}));
var Bi;
(function(n) {
  n[n.DenseArray = 0] = "DenseArray";
})(Bi || (Bi = {}));
class Ft {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInt(t, e) {
    return (e || new Ft()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, e) {
    return t.setPosition(t.position() + et), (e || new Ft()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Ft.startInt(t), Ft.addBitWidth(t, e), Ft.addIsSigned(t, i), Ft.endInt(t);
  }
}
class ce {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryEncoding(t, e) {
    return (e || new ce()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, e) {
    return t.setPosition(t.position() + et), (e || new ce()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return e ? (t || new Ft()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Bi.DenseArray;
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
    t.addFieldInt16(3, e, Bi.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class xe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBinary(t, e) {
    return (e || new xe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, e) {
    return t.setPosition(t.position() + et), (e || new xe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return xe.startBinary(t), xe.endBinary(t);
  }
}
class Re {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBool(t, e) {
    return (e || new Re()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, e) {
    return t.setPosition(t.position() + et), (e || new Re()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return Re.startBool(t), Re.endBool(t);
  }
}
var Ai;
(function(n) {
  n[n.DAY = 0] = "DAY", n[n.MILLISECOND = 1] = "MILLISECOND";
})(Ai || (Ai = {}));
let ii = class He {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDate(t, e) {
    return (e || new He()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, e) {
    return t.setPosition(t.position() + et), (e || new He()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ai.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Ai.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, e) {
    return He.startDate(t), He.addUnit(t, e), He.endDate(t);
  }
};
class _t {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDecimal(t, e) {
    return (e || new _t()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, e) {
    return t.setPosition(t.position() + et), (e || new _t()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return _t.startDecimal(t), _t.addPrecision(t, e), _t.addScale(t, i), _t.addBitWidth(t, r), _t.endDecimal(t);
  }
}
var an;
(function(n) {
  n[n.SECOND = 0] = "SECOND", n[n.MILLISECOND = 1] = "MILLISECOND", n[n.MICROSECOND = 2] = "MICROSECOND", n[n.NANOSECOND = 3] = "NANOSECOND";
})(an || (an = {}));
class Ht {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeBinary(t, e) {
    return (e || new Ht()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, e) {
    return t.setPosition(t.position() + et), (e || new Ht()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Ht.startFixedSizeBinary(t), Ht.addByteWidth(t, e), Ht.endFixedSizeBinary(t);
  }
}
class Kt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeList(t, e) {
    return (e || new Kt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, e) {
    return t.setPosition(t.position() + et), (e || new Kt()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Kt.startFixedSizeList(t), Kt.addListSize(t, e), Kt.endFixedSizeList(t);
  }
}
var Oi;
(function(n) {
  n[n.HALF = 0] = "HALF", n[n.SINGLE = 1] = "SINGLE", n[n.DOUBLE = 2] = "DOUBLE";
})(Oi || (Oi = {}));
class Gt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFloatingPoint(t, e) {
    return (e || new Gt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, e) {
    return t.setPosition(t.position() + et), (e || new Gt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Oi.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, e) {
    t.addFieldInt16(0, e, Oi.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, e) {
    return Gt.startFloatingPoint(t), Gt.addPrecision(t, e), Gt.endFloatingPoint(t);
  }
}
var Fi;
(function(n) {
  n[n.YEAR_MONTH = 0] = "YEAR_MONTH", n[n.DAY_TIME = 1] = "DAY_TIME", n[n.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Fi || (Fi = {}));
class qt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInterval(t, e) {
    return (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, e) {
    return t.setPosition(t.position() + et), (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Fi.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Fi.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, e) {
    return qt.startInterval(t), qt.addUnit(t, e), qt.endInterval(t);
  }
}
class Ee {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsList(t, e) {
    return (e || new Ee()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, e) {
    return t.setPosition(t.position() + et), (e || new Ee()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Ee.startList(t), Ee.endList(t);
  }
}
let ri = class Ke {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMap(t, e) {
    return (e || new Ke()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, e) {
    return t.setPosition(t.position() + et), (e || new Ke()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Ke.startMap(t), Ke.addKeysSorted(t, e), Ke.endMap(t);
  }
};
class Me {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsNull(t, e) {
    return (e || new Me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, e) {
    return t.setPosition(t.position() + et), (e || new Me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return Me.startNull(t), Me.endNull(t);
  }
}
class Ne {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsStruct_(t, e) {
    return (e || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, e) {
    return t.setPosition(t.position() + et), (e || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return Ne.startStruct_(t), Ne.endStruct_(t);
  }
}
class Nt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTime(t, e) {
    return (e || new Nt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, e) {
    return t.setPosition(t.position() + et), (e || new Nt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : an.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, an.MILLISECOND);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(1, e, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, e, i) {
    return Nt.startTime(t), Nt.addUnit(t, e), Nt.addBitWidth(t, i), Nt.endTime(t);
  }
}
class Ct {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTimestamp(t, e) {
    return (e || new Ct()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, e) {
    return t.setPosition(t.position() + et), (e || new Ct()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : an.SECOND;
  }
  timezone(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, an.SECOND);
  }
  static addTimezone(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, e, i) {
    return Ct.startTimestamp(t), Ct.addUnit(t, e), Ct.addTimezone(t, i), Ct.endTimestamp(t);
  }
}
var Ti;
(function(n) {
  n[n.Sparse = 0] = "Sparse", n[n.Dense = 1] = "Dense";
})(Ti || (Ti = {}));
class vt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUnion(t, e) {
    return (e || new vt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, e) {
    return t.setPosition(t.position() + et), (e || new vt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ti.Sparse;
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
    t.addFieldInt16(0, e, Ti.Sparse);
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
    return vt.startUnion(t), vt.addMode(t, e), vt.addTypeIds(t, i), vt.endUnion(t);
  }
}
class Ce {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUtf8(t, e) {
    return (e || new Ce()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, e) {
    return t.setPosition(t.position() + et), (e || new Ce()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Ce.startUtf8(t), Ce.endUtf8(t);
  }
}
var rt;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Null = 1] = "Null", n[n.Int = 2] = "Int", n[n.FloatingPoint = 3] = "FloatingPoint", n[n.Binary = 4] = "Binary", n[n.Utf8 = 5] = "Utf8", n[n.Bool = 6] = "Bool", n[n.Decimal = 7] = "Decimal", n[n.Date = 8] = "Date", n[n.Time = 9] = "Time", n[n.Timestamp = 10] = "Timestamp", n[n.Interval = 11] = "Interval", n[n.List = 12] = "List", n[n.Struct_ = 13] = "Struct_", n[n.Union = 14] = "Union", n[n.FixedSizeBinary = 15] = "FixedSizeBinary", n[n.FixedSizeList = 16] = "FixedSizeList", n[n.Map = 17] = "Map", n[n.Duration = 18] = "Duration", n[n.LargeBinary = 19] = "LargeBinary", n[n.LargeUtf8 = 20] = "LargeUtf8", n[n.LargeList = 21] = "LargeList";
})(rt || (rt = {}));
let Et = class si {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsField(t, e) {
    return (e || new si()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, e) {
    return t.setPosition(t.position() + et), (e || new si()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return t ? this.bb.readUint8(this.bb_pos + t) : rt.NONE;
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
    return e ? (t || new ce()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, e) {
    const i = this.bb.__offset(this.bb_pos, 14);
    return i ? (e || new si()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
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
    t.addFieldInt8(2, e, rt.NONE);
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
}, $t = class ie {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSchema(t, e) {
    return (e || new ie()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, e) {
    return t.setPosition(t.position() + et), (e || new ie()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : on.Little;
  }
  fields(t, e) {
    const i = this.bb.__offset(this.bb_pos, 6);
    return i ? (e || new Et()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
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
    t.addFieldInt16(0, e, on.Little);
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
    return ie.startSchema(t), ie.addEndianness(t, e), ie.addFields(t, i), ie.addCustomMetadata(t, r), ie.addFeatures(t, s), ie.endSchema(t);
  }
};
class Ot {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFooter(t, e) {
    return (e || new Ot()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, e) {
    return t.setPosition(t.position() + et), (e || new Ot()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : sn.V1;
  }
  schema(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new $t()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
    t.addFieldInt16(0, e, sn.V1);
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
class Z {
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
    return new Z(i, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const e = t.map((i) => this.fields[i]).filter(Boolean);
    return new Z(e, this.metadata);
  }
  assign(...t) {
    const e = t[0] instanceof Z ? t[0] : Array.isArray(t[0]) ? new Z(t[0]) : new Z(t), i = [...this.fields], r = ei(ei(/* @__PURE__ */ new Map(), this.metadata), e.metadata), s = e.fields.filter((a) => {
      const c = i.findIndex((d) => d.name === a.name);
      return ~c ? (i[c] = a.clone({
        metadata: ei(ei(/* @__PURE__ */ new Map(), i[c].metadata), a.metadata)
      })) && !1 : !0;
    }), o = _r(s, /* @__PURE__ */ new Map());
    return new Z([...i, ...s], r, new Map([...this.dictionaries, ...o]));
  }
}
Z.prototype.fields = null;
Z.prototype.metadata = null;
Z.prototype.dictionaries = null;
class it {
  constructor(t, e, i = !1, r) {
    this.name = t, this.type = e, this.nullable = i, this.metadata = r || /* @__PURE__ */ new Map();
  }
  /** @nocollapse */
  static new(...t) {
    let [e, i, r, s] = t;
    return t[0] && typeof t[0] == "object" && ({ name: e } = t[0], i === void 0 && (i = t[0].type), r === void 0 && (r = t[0].nullable), s === void 0 && (s = t[0].metadata)), new it(`${e}`, i, r, s);
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
    return !t[0] || typeof t[0] != "object" ? [e = this.name, i = this.type, r = this.nullable, s = this.metadata] = t : { name: e = this.name, type: i = this.type, nullable: r = this.nullable, metadata: s = this.metadata } = t[0], it.new(e, i, r, s);
  }
}
it.prototype.type = null;
it.prototype.name = null;
it.prototype.nullable = null;
it.prototype.metadata = null;
function ei(n, t) {
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
var Ds = le, Hl = ha, Kl = rn;
class Nn {
  constructor(t, e = Tt.V4, i, r) {
    this.schema = t, this.version = e, i && (this._recordBatches = i), r && (this._dictionaryBatches = r);
  }
  /** @nocollapse */
  static decode(t) {
    t = new Kl($(t));
    const e = Ot.getRootAsFooter(t), i = Z.decode(e.schema());
    return new Gl(i, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new Hl(), i = Z.encode(e, t.schema);
    Ot.startRecordBatchesVector(e, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      we.encode(e, o);
    const r = e.endVector();
    Ot.startDictionariesVector(e, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      we.encode(e, o);
    const s = e.endVector();
    return Ot.startFooter(e), Ot.addSchema(e, i), Ot.addVersion(e, Tt.V4), Ot.addRecordBatches(e, r), Ot.addDictionaries(e, s), Ot.finishFooterBuffer(e, Ot.endFooter(e)), e.asUint8Array();
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
class Gl extends Nn {
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
        return we.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return we.decode(e);
    }
    return null;
  }
}
class we {
  constructor(t, e, i) {
    this.metaDataLength = t, this.offset = typeof i == "number" ? i : i.low, this.bodyLength = typeof e == "number" ? e : e.low;
  }
  /** @nocollapse */
  static decode(t) {
    return new we(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: i } = e, r = new Ds(e.offset, 0), s = new Ds(e.bodyLength, 0);
    return mr.createBlock(t, r, i, s);
  }
}
const st = Object.freeze({ done: !0, value: void 0 });
class xs {
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
class ql extends Vr {
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
        t.shift().resolve(st);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return Mt.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return Mt.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return S(this, void 0, void 0, function* () {
      return yield this.abort(t), st;
    });
  }
  return(t) {
    return S(this, void 0, void 0, function* () {
      return yield this.close(), st;
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
    }) : Promise.resolve(st);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
class oi extends ql {
  write(t) {
    if ((t = $(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? dr(this.toUint8Array(!0)) : this.toUint8Array(!1).then(dr);
  }
  toUint8Array(t = !1) {
    return t ? Qt(this._values)[0] : S(this, void 0, void 0, function* () {
      var e, i;
      const r = [];
      let s = 0;
      try {
        for (var o = Le(this), a; a = yield o.next(), !a.done; ) {
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
      return Qt(r, s)[0];
    });
  }
}
class Di {
  constructor(t) {
    t && (this.source = new Zl(Mt.fromIterable(t)));
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
class cn {
  constructor(t) {
    t instanceof cn ? this.source = t.source : t instanceof oi ? this.source = new De(Mt.fromAsyncIterable(t)) : Ks(t) ? this.source = new De(Mt.fromNodeStream(t)) : Fr(t) ? this.source = new De(Mt.fromDOMStream(t)) : Hs(t) ? this.source = new De(Mt.fromDOMStream(t.body)) : Pn(t) ? this.source = new De(Mt.fromIterable(t)) : be(t) ? this.source = new De(Mt.fromAsyncIterable(t)) : un(t) && (this.source = new De(Mt.fromAsyncIterable(t)));
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
class Zl {
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
    return Object.create(this.source.throw && this.source.throw(t) || st);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || st);
  }
}
class De {
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
      const e = this.source.throw && (yield this.source.throw(t)) || st;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
  return(t) {
    return S(this, void 0, void 0, function* () {
      const e = this.source.return && (yield this.source.return(t)) || st;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
}
class Rs extends Di {
  constructor(t, e) {
    super(), this.position = 0, this.buffer = $(t), this.size = typeof e > "u" ? this.buffer.byteLength : e;
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
class xi extends cn {
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
const Xl = 65536;
function qe(n) {
  return n < 0 && (n = 4294967295 + n + 1), `0x${n.toString(16)}`;
}
const ln = 8, zr = [
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
class pa {
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
    return r = e[2] * i[3], s += r, r = e[3] * i[2] >>> 0, s += r, this.buffer[0] += s << 16, this.buffer[1] = s >>> 0 < r ? Xl : 0, this.buffer[1] += s >>> 16, this.buffer[1] += e[1] * i[3] + e[2] * i[2] + e[3] * i[1], this.buffer[1] += e[0] * i[3] + e[1] * i[2] + e[2] * i[1] + e[3] * i[0] << 16, this;
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
    return `${qe(this.buffer[1])} ${qe(this.buffer[0])}`;
  }
}
class X extends pa {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return X.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return X.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const i = t.length, r = new X(e);
    for (let s = 0; s < i; ) {
      const o = ln < i - s ? ln : i - s, a = new X(new Uint32Array([Number.parseInt(t.slice(s, s + o), 10), 0])), c = new X(new Uint32Array([zr[o], 0]));
      r.times(c), r.plus(a), s += o;
    }
    return r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let i = -1, r = t.length; ++i < r; )
      X.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 2 * i * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new X(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new X(new Uint32Array(t.buffer)).plus(e);
  }
}
class gt extends pa {
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
    return gt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return gt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const i = t.startsWith("-"), r = t.length, s = new gt(e);
    for (let o = i ? 1 : 0; o < r; ) {
      const a = ln < r - o ? ln : r - o, c = new gt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])), d = new gt(new Uint32Array([zr[a], 0]));
      s.times(d), s.plus(c), o += a;
    }
    return i ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let i = -1, r = t.length; ++i < r; )
      gt.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 2 * i * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new gt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new gt(new Uint32Array(t.buffer)).plus(e);
  }
}
class Yt {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new gt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new gt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const e = new X(new Uint32Array([this.buffer[3], 0])), i = new X(new Uint32Array([this.buffer[2], 0])), r = new X(new Uint32Array([this.buffer[1], 0])), s = new X(new Uint32Array([this.buffer[0], 0])), o = new X(new Uint32Array([t.buffer[3], 0])), a = new X(new Uint32Array([t.buffer[2], 0])), c = new X(new Uint32Array([t.buffer[1], 0])), d = new X(new Uint32Array([t.buffer[0], 0]));
    let h = X.multiply(s, d);
    this.buffer[0] = h.low();
    const p = new X(new Uint32Array([h.high(), 0]));
    return h = X.multiply(r, d), p.plus(h), h = X.multiply(s, c), p.plus(h), this.buffer[1] = p.low(), this.buffer[3] = p.lessThan(h) ? 1 : 0, this.buffer[2] = p.high(), new X(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(X.multiply(i, d)).plus(X.multiply(r, c)).plus(X.multiply(s, a)), this.buffer[3] += X.multiply(e, d).plus(X.multiply(i, c)).plus(X.multiply(r, a)).plus(X.multiply(s, o)).low(), this;
  }
  plus(t) {
    const e = new Uint32Array(4);
    return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this;
  }
  hex() {
    return `${qe(this.buffer[3])} ${qe(this.buffer[2])} ${qe(this.buffer[1])} ${qe(this.buffer[0])}`;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new Yt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new Yt(new Uint32Array(t.buffer)).plus(e);
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(4)) {
    return Yt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(4)) {
    return Yt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(4)) {
    const i = t.startsWith("-"), r = t.length, s = new Yt(e);
    for (let o = i ? 1 : 0; o < r; ) {
      const a = ln < r - o ? ln : r - o, c = new Yt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])), d = new Yt(new Uint32Array([zr[a], 0, 0, 0]));
      s.times(d), s.plus(c), o += a;
    }
    return i ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 4);
    for (let i = -1, r = t.length; ++i < r; )
      Yt.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 4 * 4 * i, 4));
    return e;
  }
}
class ya extends j {
  constructor(t, e, i, r) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = i, this.dictionaries = r;
  }
  visit(t) {
    return super.visit(t instanceof it ? t.type : t);
  }
  visitNull(t, { length: e } = this.nextFieldNode()) {
    return P({ type: t, length: e });
  }
  visitBool(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitInt(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFloat(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitUtf8(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDate(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTimestamp(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTime(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDecimal(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitList(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), children: this.visitMany(t.children) });
  }
  visitUnion(t) {
    return t.mode === Dt.Sparse ? this.visitSparseUnion(t) : this.visitDenseUnion(t);
  }
  visitDenseUnion(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return P({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
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
class Ql extends ya {
  constructor(t, e, i, r) {
    super(new Uint8Array(0), e, i, r), this.sources = t;
  }
  readNullBitmap(t, e, { offset: i } = this.nextBufferRange()) {
    return e <= 0 ? new Uint8Array(0) : wi(this.sources[i]);
  }
  readOffsets(t, { offset: e } = this.nextBufferRange()) {
    return tt(Uint8Array, tt(Int32Array, this.sources[e]));
  }
  readTypeIds(t, { offset: e } = this.nextBufferRange()) {
    return tt(Uint8Array, tt(t.ArrayType, this.sources[e]));
  }
  readData(t, { offset: e } = this.nextBufferRange()) {
    const { sources: i } = this;
    return I.isTimestamp(t) || (I.isInt(t) || I.isTime(t)) && t.bitWidth === 64 || I.isDate(t) && t.unit === de.MILLISECOND ? tt(Uint8Array, gt.convertArray(i[e])) : I.isDecimal(t) ? tt(Uint8Array, Yt.convertArray(i[e])) : I.isBinary(t) || I.isFixedSizeBinary(t) ? tu(i[e]) : I.isBool(t) ? wi(i[e]) : I.isUtf8(t) ? Or(i[e].join("")) : tt(Uint8Array, tt(t.ArrayType, i[e].map((r) => +r)));
  }
}
function tu(n) {
  const t = n.join(""), e = new Uint8Array(t.length / 2);
  for (let i = 0; i < t.length; i += 2)
    e[i >> 1] = Number.parseInt(t.slice(i, i + 2), 16);
  return e;
}
class F extends j {
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
function At(n, t) {
  return t instanceof n.constructor;
}
function jn(n, t) {
  return n === t || At(n, t);
}
function fe(n, t) {
  return n === t || At(n, t) && n.bitWidth === t.bitWidth && n.isSigned === t.isSigned;
}
function Vi(n, t) {
  return n === t || At(n, t) && n.precision === t.precision;
}
function eu(n, t) {
  return n === t || At(n, t) && n.byteWidth === t.byteWidth;
}
function $r(n, t) {
  return n === t || At(n, t) && n.unit === t.unit;
}
function kn(n, t) {
  return n === t || At(n, t) && n.unit === t.unit && n.timezone === t.timezone;
}
function Vn(n, t) {
  return n === t || At(n, t) && n.unit === t.unit && n.bitWidth === t.bitWidth;
}
function nu(n, t) {
  return n === t || At(n, t) && n.children.length === t.children.length && Se.compareManyFields(n.children, t.children);
}
function iu(n, t) {
  return n === t || At(n, t) && n.children.length === t.children.length && Se.compareManyFields(n.children, t.children);
}
function Yr(n, t) {
  return n === t || At(n, t) && n.mode === t.mode && n.typeIds.every((e, i) => e === t.typeIds[i]) && Se.compareManyFields(n.children, t.children);
}
function ru(n, t) {
  return n === t || At(n, t) && n.id === t.id && n.isOrdered === t.isOrdered && Se.visit(n.indices, t.indices) && Se.visit(n.dictionary, t.dictionary);
}
function Wr(n, t) {
  return n === t || At(n, t) && n.unit === t.unit;
}
function su(n, t) {
  return n === t || At(n, t) && n.listSize === t.listSize && n.children.length === t.children.length && Se.compareManyFields(n.children, t.children);
}
function ou(n, t) {
  return n === t || At(n, t) && n.keysSorted === t.keysSorted && n.children.length === t.children.length && Se.compareManyFields(n.children, t.children);
}
F.prototype.visitNull = jn;
F.prototype.visitBool = jn;
F.prototype.visitInt = fe;
F.prototype.visitInt8 = fe;
F.prototype.visitInt16 = fe;
F.prototype.visitInt32 = fe;
F.prototype.visitInt64 = fe;
F.prototype.visitUint8 = fe;
F.prototype.visitUint16 = fe;
F.prototype.visitUint32 = fe;
F.prototype.visitUint64 = fe;
F.prototype.visitFloat = Vi;
F.prototype.visitFloat16 = Vi;
F.prototype.visitFloat32 = Vi;
F.prototype.visitFloat64 = Vi;
F.prototype.visitUtf8 = jn;
F.prototype.visitBinary = jn;
F.prototype.visitFixedSizeBinary = eu;
F.prototype.visitDate = $r;
F.prototype.visitDateDay = $r;
F.prototype.visitDateMillisecond = $r;
F.prototype.visitTimestamp = kn;
F.prototype.visitTimestampSecond = kn;
F.prototype.visitTimestampMillisecond = kn;
F.prototype.visitTimestampMicrosecond = kn;
F.prototype.visitTimestampNanosecond = kn;
F.prototype.visitTime = Vn;
F.prototype.visitTimeSecond = Vn;
F.prototype.visitTimeMillisecond = Vn;
F.prototype.visitTimeMicrosecond = Vn;
F.prototype.visitTimeNanosecond = Vn;
F.prototype.visitDecimal = jn;
F.prototype.visitList = nu;
F.prototype.visitStruct = iu;
F.prototype.visitUnion = Yr;
F.prototype.visitDenseUnion = Yr;
F.prototype.visitSparseUnion = Yr;
F.prototype.visitDictionary = ru;
F.prototype.visitInterval = Wr;
F.prototype.visitIntervalDayTime = Wr;
F.prototype.visitIntervalYearMonth = Wr;
F.prototype.visitFixedSizeList = su;
F.prototype.visitMap = ou;
const Se = new F();
function vr(n, t) {
  return Se.compareSchemas(n, t);
}
function or(n, t) {
  return au(n, t.map((e) => e.data.concat()));
}
function au(n, t) {
  const e = [...n.fields], i = [], r = { numBatches: t.reduce((p, _) => Math.max(p, _.length), 0) };
  let s = 0, o = 0, a = -1;
  const c = t.length;
  let d, h = [];
  for (; r.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
      h[a] = d = t[a].shift(), o = Math.min(o, d ? d.length : o);
    Number.isFinite(o) && (h = cu(e, o, h, t, r), o > 0 && (i[s++] = P({
      type: new pt(e),
      length: o,
      nullCount: 0,
      children: h.slice()
    })));
  }
  return [
    n = n.assign(e),
    i.map((p) => new wt(n, p))
  ];
}
function cu(n, t, e, i, r) {
  var s;
  const o = (t + 63 & -64) >> 3;
  for (let a = -1, c = i.length; ++a < c; ) {
    const d = e[a], h = d == null ? void 0 : d.length;
    if (h >= t)
      h === t ? e[a] = d : (e[a] = d.slice(0, t), r.numBatches = Math.max(r.numBatches, i[a].unshift(d.slice(t, h - t))));
    else {
      const p = n[a];
      n[a] = p.clone({ nullable: !0 }), e[a] = (s = d == null ? void 0 : d._changeLengthAndBackfillNullBitmap(t)) !== null && s !== void 0 ? s : P({
        type: p.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(o)
      });
    }
  }
  return e;
}
var ma;
class ft {
  constructor(...t) {
    var e, i;
    if (t.length === 0)
      return this.batches = [], this.schema = new Z([]), this._offsets = [0], this;
    let r, s;
    t[0] instanceof Z && (r = t.shift()), t[t.length - 1] instanceof Uint32Array && (s = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof wt)
          return [c];
        if (c instanceof ft)
          return c.batches;
        if (c instanceof nt) {
          if (c.type instanceof pt)
            return [new wt(new Z(c.type.children), c)];
        } else {
          if (Array.isArray(c))
            return c.flatMap((d) => o(d));
          if (typeof c[Symbol.iterator] == "function")
            return [...c].flatMap((d) => o(d));
          if (typeof c == "object") {
            const d = Object.keys(c), h = d.map((b) => new q([c[b]])), p = new Z(d.map((b, C) => new it(String(b), h[C].type))), [, _] = or(p, h);
            return _.length === 0 ? [new wt(c)] : _;
          }
        }
      }
      return [];
    }, a = t.flatMap((c) => o(c));
    if (r = (i = r ?? ((e = a[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && i !== void 0 ? i : new Z([]), !(r instanceof Z))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of a) {
      if (!(c instanceof wt))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!vr(r, c.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = r, this.batches = a, this._offsets = s ?? ea(this.data);
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
    return this._nullCount === -1 && (this._nullCount = ta(this.data)), this._nullCount;
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
    return this.batches.length > 0 ? kr.visit(new q(this.data)) : new Array(0)[Symbol.iterator]();
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
    return new ft(e, i.map((r) => new wt(e, r)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const i = this.schema;
    [t, e] = Xo({ length: this.numRows }, t, e);
    const r = na(this.data, this._offsets, t, e);
    return new ft(i, r.map((s) => new wt(i, s)));
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
        const { type: i } = this.schema.fields[t], r = P({ type: i, length: 0, nullCount: 0 });
        e.push(r._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new q(e);
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
      e || (e = new q([P({ type: new _e(), length: this.numRows })]));
      const s = i.fields.slice(), o = s[t].clone({ type: e.type }), a = this.schema.fields.map((c, d) => this.getChildAt(d));
      [s[t], a[t]] = [o, e], [i, r] = or(i, a);
    }
    return new ft(i, r);
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
    return new ft(e, i);
  }
  assign(t) {
    const e = this.schema.fields, [i, r] = t.schema.fields.reduce((a, c, d) => {
      const [h, p] = a, _ = e.findIndex((b) => b.name === c.name);
      return ~_ ? p[_] = d : h.push(d), a;
    }, [[], []]), s = this.schema.assign(t.schema), o = [
      ...e.map((a, c) => [c, r[c]]).map(([a, c]) => c === void 0 ? this.getChildAt(a) : t.getChildAt(c)),
      ...i.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new ft(...or(s, o));
  }
}
ma = Symbol.toStringTag;
ft[ma] = ((n) => (n.schema = null, n.batches = [], n._offsets = new Uint32Array([0]), n._nullCount = -1, n[Symbol.isConcatSpreadable] = !0, n.isValid = en(jr), n.get = en(Bt.getVisitFn(u.Struct)), n.set = ia(Lt.getVisitFn(u.Struct)), n.indexOf = ra(Si.getVisitFn(u.Struct)), n.getByteLength = en(te.getVisitFn(u.Struct)), "Table"))(ft.prototype);
var ba;
let wt = class Bn {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof Z))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = P({
            nullCount: 0,
            type: new pt(this.schema.fields),
            children: this.schema.fields.map((e) => P({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof nt))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = Es(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: i, children: r, length: s } = Object.keys(e).reduce((c, d, h) => (c.children[h] = e[d], c.length = Math.max(c.length, e[d].length), c.fields[h] = it.new({ name: d, type: e[d].type, nullable: !0 }), c), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new Z(i), a = P({ type: new pt(i), length: s, children: r, nullCount: 0 });
        [this.schema, this.data] = Es(o, a.children, s);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = ga(this.schema.fields, this.data.children));
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
    return Bt.visit(this.data, t);
  }
  /**
   * Set a row by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  set(t, e) {
    return Lt.visit(this.data, t, e);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, e) {
    return Si.visit(this.data, t, e);
  }
  /**
   * Get the size (in bytes) of a row by index.
   * @param index The row index for which to compute the byteLength.
   */
  getByteLength(t) {
    return te.visit(this.data, t);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return kr.visit(new q([this.data]));
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
    return new ft(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const [i] = new q([this.data]).slice(t, e).data;
    return new Bn(this.schema, i);
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
    return t > -1 && t < this.schema.fields.length ? new q([this.data.children[t]]) : null;
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
      e || (e = new q([P({ type: new _e(), length: this.numRows })]));
      const s = i.fields.slice(), o = r.children.slice(), a = s[t].clone({ type: e.type });
      [s[t], o[t]] = [a, e.data[0]], i = new Z(s, new Map(this.schema.metadata)), r = P({ type: new pt(s), children: o });
    }
    return new Bn(i, r);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.select(t), i = new pt(e.fields), r = [];
    for (const s of t) {
      const o = this.schema.fields.findIndex((a) => a.name === s);
      ~o && (r[o] = this.data.children[o]);
    }
    return new Bn(e, P({ type: i, length: this.numRows, children: r }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), i = t.map((s) => this.data.children[s]).filter(Boolean), r = P({ type: new pt(e.fields), length: this.numRows, children: i });
    return new Bn(e, r);
  }
};
ba = Symbol.toStringTag;
wt[ba] = ((n) => (n._nullCount = -1, n[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(wt.prototype);
function Es(n, t, e = t.reduce((i, r) => Math.max(i, r.length), 0)) {
  var i;
  const r = [...n.fields], s = [...t], o = (e + 63 & -64) >> 3;
  for (const [a, c] of n.fields.entries()) {
    const d = t[a];
    (!d || d.length !== e) && (r[a] = c.clone({ nullable: !0 }), s[a] = (i = d == null ? void 0 : d._changeLengthAndBackfillNullBitmap(e)) !== null && i !== void 0 ? i : P({
      type: c.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    n.assign(r),
    P({ type: new pt(r), length: e, children: s })
  ];
}
function ga(n, t, e = /* @__PURE__ */ new Map()) {
  for (let i = -1, r = n.length; ++i < r; ) {
    const o = n[i].type, a = t[i];
    if (I.isDictionary(o)) {
      if (!e.has(o.id))
        a.dictionary && e.set(o.id, a.dictionary);
      else if (e.get(o.id) !== a.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    o.children && o.children.length > 0 && ga(o.children, a.children, e);
  }
  return e;
}
class Jr extends wt {
  constructor(t) {
    const e = t.fields.map((r) => P({ type: r.type })), i = P({ type: new pt(t.fields), nullCount: 0, children: e });
    super(t, i);
  }
}
var Ri;
(function(n) {
  n[n.BUFFER = 0] = "BUFFER";
})(Ri || (Ri = {}));
var Ei;
(function(n) {
  n[n.LZ4_FRAME = 0] = "LZ4_FRAME", n[n.ZSTD = 1] = "ZSTD";
})(Ei || (Ei = {}));
class me {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBodyCompression(t, e) {
    return (e || new me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, e) {
    return t.setPosition(t.position() + et), (e || new me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : Ei.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : Ri.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, e) {
    t.addFieldInt8(0, e, Ei.LZ4_FRAME);
  }
  static addMethod(t, e) {
    t.addFieldInt8(1, e, Ri.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, e, i) {
    return me.startBodyCompression(t), me.addCodec(t, e), me.addMethod(t, i), me.endBodyCompression(t);
  }
}
class _a {
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
let va = class {
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
}, oe = class wr {
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
    return t.setPosition(t.position() + et), (e || new wr()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return i ? (e || new va()).__init(this.bb.__vector(this.bb_pos + i) + t * 16, this.bb) : null;
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
    return i ? (e || new _a()).__init(this.bb.__vector(this.bb_pos + i) + t * 16, this.bb) : null;
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
    return e ? (t || new me()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
}, Ge = class Sr {
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
    return t.setPosition(t.position() + et), (e || new Sr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  data(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new oe()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
var Mi;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Schema = 1] = "Schema", n[n.DictionaryBatch = 2] = "DictionaryBatch", n[n.RecordBatch = 3] = "RecordBatch", n[n.Tensor = 4] = "Tensor", n[n.SparseTensor = 5] = "SparseTensor";
})(Mi || (Mi = {}));
let pe = class zt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMessage(t, e) {
    return (e || new zt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, e) {
    return t.setPosition(t.position() + et), (e || new zt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : sn.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : Mi.NONE;
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
    t.addFieldInt16(0, e, sn.V1);
  }
  static addHeaderType(t, e) {
    t.addFieldInt8(1, e, Mi.NONE);
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
    return zt.startMessage(t), zt.addVersion(t, e), zt.addHeaderType(t, i), zt.addHeader(t, r), zt.addBodyLength(t, s), zt.addCustomMetadata(t, o), zt.endMessage(t);
  }
};
var lu = le;
class uu extends j {
  visit(t, e) {
    return t == null || e == null ? void 0 : super.visit(t, e);
  }
  visitNull(t, e) {
    return Me.startNull(e), Me.endNull(e);
  }
  visitInt(t, e) {
    return Ft.startInt(e), Ft.addBitWidth(e, t.bitWidth), Ft.addIsSigned(e, t.isSigned), Ft.endInt(e);
  }
  visitFloat(t, e) {
    return Gt.startFloatingPoint(e), Gt.addPrecision(e, t.precision), Gt.endFloatingPoint(e);
  }
  visitBinary(t, e) {
    return xe.startBinary(e), xe.endBinary(e);
  }
  visitBool(t, e) {
    return Re.startBool(e), Re.endBool(e);
  }
  visitUtf8(t, e) {
    return Ce.startUtf8(e), Ce.endUtf8(e);
  }
  visitDecimal(t, e) {
    return _t.startDecimal(e), _t.addScale(e, t.scale), _t.addPrecision(e, t.precision), _t.addBitWidth(e, t.bitWidth), _t.endDecimal(e);
  }
  visitDate(t, e) {
    return ii.startDate(e), ii.addUnit(e, t.unit), ii.endDate(e);
  }
  visitTime(t, e) {
    return Nt.startTime(e), Nt.addUnit(e, t.unit), Nt.addBitWidth(e, t.bitWidth), Nt.endTime(e);
  }
  visitTimestamp(t, e) {
    const i = t.timezone && e.createString(t.timezone) || void 0;
    return Ct.startTimestamp(e), Ct.addUnit(e, t.unit), i !== void 0 && Ct.addTimezone(e, i), Ct.endTimestamp(e);
  }
  visitInterval(t, e) {
    return qt.startInterval(e), qt.addUnit(e, t.unit), qt.endInterval(e);
  }
  visitList(t, e) {
    return Ee.startList(e), Ee.endList(e);
  }
  visitStruct(t, e) {
    return Ne.startStruct_(e), Ne.endStruct_(e);
  }
  visitUnion(t, e) {
    vt.startTypeIdsVector(e, t.typeIds.length);
    const i = vt.createTypeIdsVector(e, t.typeIds);
    return vt.startUnion(e), vt.addMode(e, t.mode), vt.addTypeIds(e, i), vt.endUnion(e);
  }
  visitDictionary(t, e) {
    const i = this.visit(t.indices, e);
    return ce.startDictionaryEncoding(e), ce.addId(e, new lu(t.id, 0)), ce.addIsOrdered(e, t.isOrdered), i !== void 0 && ce.addIndexType(e, i), ce.endDictionaryEncoding(e);
  }
  visitFixedSizeBinary(t, e) {
    return Ht.startFixedSizeBinary(e), Ht.addByteWidth(e, t.byteWidth), Ht.endFixedSizeBinary(e);
  }
  visitFixedSizeList(t, e) {
    return Kt.startFixedSizeList(e), Kt.addListSize(e, t.listSize), Kt.endFixedSizeList(e);
  }
  visitMap(t, e) {
    return ri.startMap(e), ri.addKeysSorted(e, t.keysSorted), ri.endMap(e);
  }
}
const ar = new uu();
function du(n, t = /* @__PURE__ */ new Map()) {
  return new Z(fu(n, t), ai(n.customMetadata), t);
}
function wa(n) {
  return new xt(n.count, Sa(n.columns), Ia(n.columns));
}
function hu(n) {
  return new ee(wa(n.data), n.id, n.isDelta);
}
function fu(n, t) {
  return (n.fields || []).filter(Boolean).map((e) => it.fromJSON(e, t));
}
function Ms(n, t) {
  return (n.children || []).filter(Boolean).map((e) => it.fromJSON(e, t));
}
function Sa(n) {
  return (n || []).reduce((t, e) => [
    ...t,
    new je(e.count, pu(e.VALIDITY)),
    ...Sa(e.children)
  ], []);
}
function Ia(n, t = []) {
  for (let e = -1, i = (n || []).length; ++e < i; ) {
    const r = n[e];
    r.VALIDITY && t.push(new Xt(t.length, r.VALIDITY.length)), r.TYPE && t.push(new Xt(t.length, r.TYPE.length)), r.OFFSET && t.push(new Xt(t.length, r.OFFSET.length)), r.DATA && t.push(new Xt(t.length, r.DATA.length)), t = Ia(r.children, t);
  }
  return t;
}
function pu(n) {
  return (n || []).reduce((t, e) => t + +(e === 0), 0);
}
function yu(n, t) {
  let e, i, r, s, o, a;
  return !t || !(s = n.dictionary) ? (o = Cs(n, Ms(n, t)), r = new it(n.name, o, n.nullable, ai(n.customMetadata))) : t.has(e = s.id) ? (i = (i = s.indexType) ? Ns(i) : new Rn(), a = new nn(t.get(e), i, e, s.isOrdered), r = new it(n.name, a, n.nullable, ai(n.customMetadata))) : (i = (i = s.indexType) ? Ns(i) : new Rn(), t.set(e, o = Cs(n, Ms(n, t))), a = new nn(o, i, e, s.isOrdered), r = new it(n.name, a, n.nullable, ai(n.customMetadata))), r || null;
}
function ai(n) {
  return new Map(Object.entries(n || {}));
}
function Ns(n) {
  return new ve(n.isSigned, n.bitWidth);
}
function Cs(n, t) {
  const e = n.type.name;
  switch (e) {
    case "NONE":
      return new _e();
    case "null":
      return new _e();
    case "binary":
      return new li();
    case "utf8":
      return new ui();
    case "bool":
      return new di();
    case "list":
      return new mi((t || [])[0]);
    case "struct":
      return new pt(t || []);
    case "struct_":
      return new pt(t || []);
  }
  switch (e) {
    case "int": {
      const i = n.type;
      return new ve(i.isSigned, i.bitWidth);
    }
    case "floatingpoint": {
      const i = n.type;
      return new En(St[i.precision]);
    }
    case "decimal": {
      const i = n.type;
      return new hi(i.scale, i.precision, i.bitWidth);
    }
    case "date": {
      const i = n.type;
      return new fi(de[i.unit]);
    }
    case "time": {
      const i = n.type;
      return new Mn(Y[i.unit], i.bitWidth);
    }
    case "timestamp": {
      const i = n.type;
      return new pi(Y[i.unit], i.timezone);
    }
    case "interval": {
      const i = n.type;
      return new yi(ge[i.unit]);
    }
    case "union": {
      const i = n.type;
      return new bi(Dt[i.mode], i.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const i = n.type;
      return new gi(i.byteWidth);
    }
    case "fixedsizelist": {
      const i = n.type;
      return new _i(i.listSize, (t || [])[0]);
    }
    case "map": {
      const i = n.type;
      return new vi((t || [])[0], i.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${e}"`);
}
var Pe = le, mu = ha, bu = rn;
class yt {
  constructor(t, e, i, r) {
    this._version = e, this._headerType = i, this.body = new Uint8Array(0), r && (this._createHeader = () => r), this._bodyLength = typeof t == "number" ? t : t.low;
  }
  /** @nocollapse */
  static fromJSON(t, e) {
    const i = new yt(0, Tt.V4, e);
    return i._createHeader = gu(t, e), i;
  }
  /** @nocollapse */
  static decode(t) {
    t = new bu($(t));
    const e = pe.getRootAsMessage(t), i = e.bodyLength(), r = e.version(), s = e.headerType(), o = new yt(i, r, s);
    return o._createHeader = _u(e, s), o;
  }
  /** @nocollapse */
  static encode(t) {
    const e = new mu();
    let i = -1;
    return t.isSchema() ? i = Z.encode(e, t.header()) : t.isRecordBatch() ? i = xt.encode(e, t.header()) : t.isDictionaryBatch() && (i = ee.encode(e, t.header())), pe.startMessage(e), pe.addVersion(e, Tt.V4), pe.addHeader(e, i), pe.addHeaderType(e, t.headerType), pe.addBodyLength(e, new Pe(t.bodyLength, 0)), pe.finishMessageBuffer(e, pe.endMessage(e)), e.asUint8Array();
  }
  /** @nocollapse */
  static from(t, e = 0) {
    if (t instanceof Z)
      return new yt(0, Tt.V4, G.Schema, t);
    if (t instanceof xt)
      return new yt(e, Tt.V4, G.RecordBatch, t);
    if (t instanceof ee)
      return new yt(e, Tt.V4, G.DictionaryBatch, t);
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
    return this.headerType === G.Schema;
  }
  isRecordBatch() {
    return this.headerType === G.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === G.DictionaryBatch;
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
class ee {
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
class Xt {
  constructor(t, e) {
    this.offset = typeof t == "number" ? t : t.low, this.length = typeof e == "number" ? e : e.low;
  }
}
class je {
  constructor(t, e) {
    this.length = typeof t == "number" ? t : t.low, this.nullCount = typeof e == "number" ? e : e.low;
  }
}
function gu(n, t) {
  return () => {
    switch (t) {
      case G.Schema:
        return Z.fromJSON(n);
      case G.RecordBatch:
        return xt.fromJSON(n);
      case G.DictionaryBatch:
        return ee.fromJSON(n);
    }
    throw new Error(`Unrecognized Message type: { name: ${G[t]}, type: ${t} }`);
  };
}
function _u(n, t) {
  return () => {
    switch (t) {
      case G.Schema:
        return Z.decode(n.header(new $t()));
      case G.RecordBatch:
        return xt.decode(n.header(new oe()), n.version());
      case G.DictionaryBatch:
        return ee.decode(n.header(new Ge()), n.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${G[t]}, type: ${t} }`);
  };
}
it.encode = xu;
it.decode = Tu;
it.fromJSON = yu;
Z.encode = Du;
Z.decode = vu;
Z.fromJSON = du;
xt.encode = Ru;
xt.decode = wu;
xt.fromJSON = wa;
ee.encode = Eu;
ee.decode = Su;
ee.fromJSON = hu;
je.encode = Mu;
je.decode = Bu;
Xt.encode = Nu;
Xt.decode = Iu;
function vu(n, t = /* @__PURE__ */ new Map()) {
  const e = Fu(n, t);
  return new Z(e, ci(n), t);
}
function wu(n, t = Tt.V4) {
  if (n.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new xt(n.length(), Au(n), Ou(n, t));
}
function Su(n, t = Tt.V4) {
  return new ee(xt.decode(n.data(), t), n.id(), n.isDelta());
}
function Iu(n) {
  return new Xt(n.offset(), n.length());
}
function Bu(n) {
  return new je(n.length(), n.nullCount());
}
function Au(n) {
  const t = [];
  for (let e, i = -1, r = -1, s = n.nodesLength(); ++i < s; )
    (e = n.nodes(i)) && (t[++r] = je.decode(e));
  return t;
}
function Ou(n, t) {
  const e = [];
  for (let i, r = -1, s = -1, o = n.buffersLength(); ++r < o; )
    (i = n.buffers(r)) && (t < Tt.V4 && (i.bb_pos += 8 * (r + 1)), e[++s] = Xt.decode(i));
  return e;
}
function Fu(n, t) {
  const e = [];
  for (let i, r = -1, s = -1, o = n.fieldsLength(); ++r < o; )
    (i = n.fields(r)) && (e[++s] = it.decode(i, t));
  return e;
}
function Ls(n, t) {
  const e = [];
  for (let i, r = -1, s = -1, o = n.childrenLength(); ++r < o; )
    (i = n.children(r)) && (e[++s] = it.decode(i, t));
  return e;
}
function Tu(n, t) {
  let e, i, r, s, o, a;
  return !t || !(a = n.dictionary()) ? (r = Ps(n, Ls(n, t)), i = new it(n.name(), r, n.nullable(), ci(n))) : t.has(e = a.id().low) ? (s = (s = a.indexType()) ? Us(s) : new Rn(), o = new nn(t.get(e), s, e, a.isOrdered()), i = new it(n.name(), o, n.nullable(), ci(n))) : (s = (s = a.indexType()) ? Us(s) : new Rn(), t.set(e, r = Ps(n, Ls(n, t))), o = new nn(r, s, e, a.isOrdered()), i = new it(n.name(), o, n.nullable(), ci(n))), i || null;
}
function ci(n) {
  const t = /* @__PURE__ */ new Map();
  if (n)
    for (let e, i, r = -1, s = Math.trunc(n.customMetadataLength()); ++r < s; )
      (e = n.customMetadata(r)) && (i = e.key()) != null && t.set(i, e.value());
  return t;
}
function Us(n) {
  return new ve(n.isSigned(), n.bitWidth());
}
function Ps(n, t) {
  const e = n.typeType();
  switch (e) {
    case rt.NONE:
      return new _e();
    case rt.Null:
      return new _e();
    case rt.Binary:
      return new li();
    case rt.Utf8:
      return new ui();
    case rt.Bool:
      return new di();
    case rt.List:
      return new mi((t || [])[0]);
    case rt.Struct_:
      return new pt(t || []);
  }
  switch (e) {
    case rt.Int: {
      const i = n.type(new Ft());
      return new ve(i.isSigned(), i.bitWidth());
    }
    case rt.FloatingPoint: {
      const i = n.type(new Gt());
      return new En(i.precision());
    }
    case rt.Decimal: {
      const i = n.type(new _t());
      return new hi(i.scale(), i.precision(), i.bitWidth());
    }
    case rt.Date: {
      const i = n.type(new ii());
      return new fi(i.unit());
    }
    case rt.Time: {
      const i = n.type(new Nt());
      return new Mn(i.unit(), i.bitWidth());
    }
    case rt.Timestamp: {
      const i = n.type(new Ct());
      return new pi(i.unit(), i.timezone());
    }
    case rt.Interval: {
      const i = n.type(new qt());
      return new yi(i.unit());
    }
    case rt.Union: {
      const i = n.type(new vt());
      return new bi(i.mode(), i.typeIdsArray() || [], t || []);
    }
    case rt.FixedSizeBinary: {
      const i = n.type(new Ht());
      return new gi(i.byteWidth());
    }
    case rt.FixedSizeList: {
      const i = n.type(new Kt());
      return new _i(i.listSize(), (t || [])[0]);
    }
    case rt.Map: {
      const i = n.type(new ri());
      return new vi((t || [])[0], i.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${rt[e]}" (${e})`);
}
function Du(n, t) {
  const e = t.fields.map((s) => it.encode(n, s));
  $t.startFieldsVector(n, e.length);
  const i = $t.createFieldsVector(n, e), r = t.metadata && t.metadata.size > 0 ? $t.createCustomMetadataVector(n, [...t.metadata].map(([s, o]) => {
    const a = n.createString(`${s}`), c = n.createString(`${o}`);
    return ut.startKeyValue(n), ut.addKey(n, a), ut.addValue(n, c), ut.endKeyValue(n);
  })) : -1;
  return $t.startSchema(n), $t.addFields(n, i), $t.addEndianness(n, Cu ? on.Little : on.Big), r !== -1 && $t.addCustomMetadata(n, r), $t.endSchema(n);
}
function xu(n, t) {
  let e = -1, i = -1, r = -1;
  const s = t.type;
  let o = t.typeId;
  I.isDictionary(s) ? (o = s.dictionary.typeId, r = ar.visit(s, n), i = ar.visit(s.dictionary, n)) : i = ar.visit(s, n);
  const a = (s.children || []).map((h) => it.encode(n, h)), c = Et.createChildrenVector(n, a), d = t.metadata && t.metadata.size > 0 ? Et.createCustomMetadataVector(n, [...t.metadata].map(([h, p]) => {
    const _ = n.createString(`${h}`), b = n.createString(`${p}`);
    return ut.startKeyValue(n), ut.addKey(n, _), ut.addValue(n, b), ut.endKeyValue(n);
  })) : -1;
  return t.name && (e = n.createString(t.name)), Et.startField(n), Et.addType(n, i), Et.addTypeType(n, o), Et.addChildren(n, c), Et.addNullable(n, !!t.nullable), e !== -1 && Et.addName(n, e), r !== -1 && Et.addDictionary(n, r), d !== -1 && Et.addCustomMetadata(n, d), Et.endField(n);
}
function Ru(n, t) {
  const e = t.nodes || [], i = t.buffers || [];
  oe.startNodesVector(n, e.length);
  for (const o of e.slice().reverse())
    je.encode(n, o);
  const r = n.endVector();
  oe.startBuffersVector(n, i.length);
  for (const o of i.slice().reverse())
    Xt.encode(n, o);
  const s = n.endVector();
  return oe.startRecordBatch(n), oe.addLength(n, new Pe(t.length, 0)), oe.addNodes(n, r), oe.addBuffers(n, s), oe.endRecordBatch(n);
}
function Eu(n, t) {
  const e = xt.encode(n, t.data);
  return Ge.startDictionaryBatch(n), Ge.addId(n, new Pe(t.id, 0)), Ge.addIsDelta(n, t.isDelta), Ge.addData(n, e), Ge.endDictionaryBatch(n);
}
function Mu(n, t) {
  return va.createFieldNode(n, new Pe(t.length, 0), new Pe(t.nullCount, 0));
}
function Nu(n, t) {
  return _a.createBuffer(n, new Pe(t.offset, 0), new Pe(t.length, 0));
}
const Cu = (() => {
  const n = new ArrayBuffer(2);
  return new DataView(n).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(n)[0] === 256;
})(), Hr = (n) => `Expected ${G[n]} Message in stream, but was null or length 0.`, Kr = (n) => `Header pointer of flatbuffer-encoded ${G[n]} Message is null or length 0.`, Ba = (n, t) => `Expected to read ${n} metadata bytes, but only read ${t}.`, Aa = (n, t) => `Expected to read ${n} bytes for message body, but only read ${t}.`;
class Oa {
  constructor(t) {
    this.source = t instanceof Di ? t : new Di(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? st : t;
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
    const e = $(this.source.read(t));
    if (e.byteLength < t)
      throw new Error(Aa(t, e.byteLength));
    return (
      /* 1. */
      e.byteOffset % 8 === 0 && /* 2. */
      e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
    );
  }
  readSchema(t = !1) {
    const e = G.Schema, i = this.readMessage(e), r = i == null ? void 0 : i.header();
    if (t && !r)
      throw new Error(Kr(e));
    return r;
  }
  readMetadataLength() {
    const t = this.source.read(zi), e = t && new rn(t), i = (e == null ? void 0 : e.readInt32(0)) || 0;
    return { done: i === 0, value: i };
  }
  readMetadata(t) {
    const e = this.source.read(t);
    if (!e)
      return st;
    if (e.byteLength < t)
      throw new Error(Ba(t, e.byteLength));
    return { done: !1, value: yt.decode(e) };
  }
}
class Lu {
  constructor(t, e) {
    this.source = t instanceof cn ? t : Js(t) ? new xi(t, e) : new cn(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return S(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? st : t;
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
      const e = $(yield this.source.read(t));
      if (e.byteLength < t)
        throw new Error(Aa(t, e.byteLength));
      return (
        /* 1. */
        e.byteOffset % 8 === 0 && /* 2. */
        e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
      );
    });
  }
  readSchema(t = !1) {
    return S(this, void 0, void 0, function* () {
      const e = G.Schema, i = yield this.readMessage(e), r = i == null ? void 0 : i.header();
      if (t && !r)
        throw new Error(Kr(e));
      return r;
    });
  }
  readMetadataLength() {
    return S(this, void 0, void 0, function* () {
      const t = yield this.source.read(zi), e = t && new rn(t), i = (e == null ? void 0 : e.readInt32(0)) || 0;
      return { done: i === 0, value: i };
    });
  }
  readMetadata(t) {
    return S(this, void 0, void 0, function* () {
      const e = yield this.source.read(t);
      if (!e)
        return st;
      if (e.byteLength < t)
        throw new Error(Ba(t, e.byteLength));
      return { done: !1, value: yt.decode(e) };
    });
  }
}
class Uu extends Oa {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof xs ? t : new xs(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: yt.fromJSON(t.schema, G.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const e = t.dictionaries[this._dictionaryIndex++];
      return this._body = e.data.columns, { done: !1, value: yt.fromJSON(e, G.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const e = t.batches[this._batchIndex++];
      return this._body = e.columns, { done: !1, value: yt.fromJSON(e, G.RecordBatch) };
    }
    return this._body = [], st;
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
    const t = G.Schema, e = this.readMessage(t), i = e == null ? void 0 : e.header();
    if (!e || !i)
      throw new Error(Kr(t));
    return i;
  }
}
const zi = 4, Ir = "ARROW1", Cn = new Uint8Array(Ir.length);
for (let n = 0; n < Ir.length; n += 1)
  Cn[n] = Ir.codePointAt(n);
function Gr(n, t = 0) {
  for (let e = -1, i = Cn.length; ++e < i; )
    if (Cn[e] !== n[t + e])
      return !1;
  return !0;
}
const zn = Cn.length, Fa = zn + zi, Pu = zn * 2 + zi;
class ue extends Vr {
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
    return be(e) ? e.then(() => this) : this;
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
    return Mt.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return Mt.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
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
    return t instanceof ue ? t : hr(t) ? zu(t) : Js(t) ? Wu(t) : be(t) ? S(this, void 0, void 0, function* () {
      return yield ue.from(yield t);
    }) : Hs(t) || Fr(t) || Ks(t) || un(t) ? Yu(new cn(t)) : $u(new Di(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof ue ? t.isSync() ? js(t) : ks(t) : hr(t) || ArrayBuffer.isView(t) || Pn(t) || Ws(t) ? js(t) : ks(t);
  }
}
class Ni extends ue {
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
    return Zt(this, arguments, function* () {
      yield E(yield* ni(Le(this[Symbol.iterator]())));
    });
  }
}
class Ci extends ue {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    var t, e;
    return S(this, void 0, void 0, function* () {
      const i = new Array();
      try {
        for (var r = Le(this), s; s = yield r.next(), !s.done; ) {
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
class Ta extends Ni {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class ju extends Ci {
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
    const i = this._loadVectors(t, e, this.schema.fields), r = P({ type: new pt(this.schema.fields), length: t.length, children: i });
    return new wt(this.schema, r);
  }
  _loadDictionaryBatch(t, e) {
    const { id: i, isDelta: r } = t, { dictionaries: s, schema: o } = this, a = s.get(i);
    if (r || !a) {
      const c = o.dictionaries.get(i), d = this._loadVectors(t.data, e, [c]);
      return (a && r ? a.concat(new q(d)) : new q(d)).memoize();
    }
    return a.memoize();
  }
  _loadVectors(t, e, i) {
    return new ya(e, t.nodes, t.buffers, this.dictionaries).visitMany(i);
  }
}
class Li extends Da {
  constructor(t, e) {
    super(e), this._reader = hr(t) ? new Uu(this._handle = t) : new Oa(this._handle = t);
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
    return this.closed || (this.autoDestroy = Ra(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : st;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : st;
  }
  next() {
    if (this.closed)
      return st;
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
class Ui extends Da {
  constructor(t, e) {
    super(e), this._reader = new Lu(this._handle = t);
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
      return this.closed || (this.autoDestroy = Ra(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return S(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : st;
    });
  }
  return(t) {
    return S(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : st;
    });
  }
  next() {
    return S(this, void 0, void 0, function* () {
      if (this.closed)
        return st;
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
class xa extends Li {
  constructor(t, e) {
    super(t instanceof Rs ? t : new Rs(t), e);
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
      const r = this._reader.readMessage(G.RecordBatch);
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
      const r = this._reader.readMessage(G.DictionaryBatch);
      if (r != null && r.isDictionaryBatch()) {
        const s = r.header(), o = this._reader.readMessageBody(r.bodyLength), a = this._loadDictionaryBatch(s, o);
        this.dictionaries.set(s.id, a);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, e = t.size - Fa, i = t.readInt32(e), r = t.readAt(e - i, i);
    return Nn.decode(r);
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
class ku extends Ui {
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
        const r = yield this._reader.readMessage(G.RecordBatch);
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
        const r = yield this._reader.readMessage(G.DictionaryBatch);
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
      const e = t.size - Fa, i = yield t.readInt32(e), r = yield t.readAt(e - i, i);
      return Nn.decode(r);
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
class Vu extends Li {
  constructor(t, e) {
    super(t, e);
  }
  _loadVectors(t, e, i) {
    return new Ql(e, t.nodes, t.buffers, this.dictionaries).visitMany(i);
  }
}
function Ra(n, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : n.autoDestroy;
}
function* js(n) {
  const t = ue.from(n);
  try {
    if (!t.open({ autoDestroy: !1 }).closed)
      do
        yield t;
      while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function ks(n) {
  return Zt(this, arguments, function* () {
    const e = yield E(ue.from(n));
    try {
      if (!(yield E(e.open({ autoDestroy: !1 }))).closed)
        do
          yield yield E(e);
        while (!(yield E(e.reset().open())).closed);
    } finally {
      yield E(e.cancel());
    }
  });
}
function zu(n) {
  return new Ni(new Vu(n));
}
function $u(n) {
  const t = n.peek(zn + 7 & -8);
  return t && t.byteLength >= 4 ? Gr(t) ? new Ta(new xa(n.read())) : new Ni(new Li(n)) : new Ni(new Li(function* () {
  }()));
}
function Yu(n) {
  return S(this, void 0, void 0, function* () {
    const t = yield n.peek(zn + 7 & -8);
    return t && t.byteLength >= 4 ? Gr(t) ? new Ta(new xa(yield n.read())) : new Ci(new Ui(n)) : new Ci(new Ui(function() {
      return Zt(this, arguments, function* () {
      });
    }()));
  });
}
function Wu(n) {
  return S(this, void 0, void 0, function* () {
    const { size: t } = yield n.stat(), e = new xi(n, t);
    return t >= Pu && Gr(yield e.readAt(0, zn + 7 & -8)) ? new ju(new ku(e)) : new Ci(new Ui(e));
  });
}
class ct extends j {
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  /** @nocollapse */
  static assemble(...t) {
    const e = (r) => r.flatMap((s) => Array.isArray(s) ? e(s) : s instanceof wt ? s.data.children : s.data), i = new ct();
    return i.visitMany(e(t)), i;
  }
  visit(t) {
    if (t instanceof q)
      return this.visitMany(t.data), this;
    const { type: e } = t;
    if (!I.isDictionary(e)) {
      const { length: i, nullCount: r } = t;
      if (i > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      I.isNull(e) || jt.call(this, r <= 0 ? new Uint8Array(0) : Lr(t.offset, i, t.nullBitmap)), this.nodes.push(new je(i, r));
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
function jt(n) {
  const t = n.byteLength + 7 & -8;
  return this.buffers.push(n), this.bufferRegions.push(new Xt(this._byteLength, t)), this._byteLength += t, this;
}
function Ju(n) {
  const { type: t, length: e, typeIds: i, valueOffsets: r } = n;
  if (jt.call(this, i), t.mode === Dt.Sparse)
    return Br.call(this, n);
  if (t.mode === Dt.Dense) {
    if (n.offset <= 0)
      return jt.call(this, r), Br.call(this, n);
    {
      const s = i.reduce((h, p) => Math.max(h, p), i[0]), o = new Int32Array(s + 1), a = new Int32Array(s + 1).fill(-1), c = new Int32Array(e), d = Dr(-r[0], e, r);
      for (let h, p, _ = -1; ++_ < e; )
        (p = a[h = i[_]]) === -1 && (p = a[h] = d[h]), c[_] = d[_] - p, ++o[h];
      jt.call(this, c);
      for (let h, p = -1, _ = t.children.length; ++p < _; )
        if (h = n.children[p]) {
          const b = t.typeIds[p], C = Math.min(e, o[b]);
          this.visit(h.slice(a[b], C));
        }
    }
  }
  return this;
}
function Hu(n) {
  let t;
  return n.nullCount >= n.length ? jt.call(this, new Uint8Array(0)) : (t = n.values) instanceof Uint8Array ? jt.call(this, Lr(n.offset, n.length, t)) : jt.call(this, wi(n.values));
}
function Ae(n) {
  return jt.call(this, n.values.subarray(0, n.length * n.stride));
}
function Ea(n) {
  const { length: t, values: e, valueOffsets: i } = n, r = i[0], s = i[t], o = Math.min(s - r, e.byteLength - r);
  return jt.call(this, Dr(-i[0], t, i)), jt.call(this, e.subarray(r, r + o)), this;
}
function qr(n) {
  const { length: t, valueOffsets: e } = n;
  return e && jt.call(this, Dr(e[0], t, e)), this.visit(n.children[0]);
}
function Br(n) {
  return this.visitMany(n.type.children.map((t, e) => n.children[e]).filter(Boolean))[0];
}
ct.prototype.visitBool = Hu;
ct.prototype.visitInt = Ae;
ct.prototype.visitFloat = Ae;
ct.prototype.visitUtf8 = Ea;
ct.prototype.visitBinary = Ea;
ct.prototype.visitFixedSizeBinary = Ae;
ct.prototype.visitDate = Ae;
ct.prototype.visitTimestamp = Ae;
ct.prototype.visitTime = Ae;
ct.prototype.visitDecimal = Ae;
ct.prototype.visitList = qr;
ct.prototype.visitStruct = Br;
ct.prototype.visitUnion = Ju;
ct.prototype.visitInterval = Ae;
ct.prototype.visitFixedSizeList = qr;
ct.prototype.visitMap = qr;
class Ma extends Vr {
  constructor(t) {
    super(), this._position = 0, this._started = !1, this._sink = new oi(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), It(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
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
    return be(t) ? t.then((e) => this.writeAll(e)) : un(t) ? ts(this, t) : Qr(this, t);
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
    return t === this._sink || t instanceof oi ? this._sink = t : (this._sink = new oi(), t && pc(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && yc(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!e || !vr(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this;
  }
  write(t) {
    let e = null;
    if (this._sink) {
      if (t == null)
        return this.finish() && void 0;
      if (t instanceof ft && !(e = t.schema))
        return this.finish() && void 0;
      if (t instanceof wt && !(e = t.schema))
        return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (e && !vr(e, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, e);
    }
    t instanceof wt ? t instanceof Jr || this._writeRecordBatch(t) : t instanceof ft ? this.writeAll(t.batches) : Pn(t) && this.writeAll(t);
  }
  _writeMessage(t, e = 8) {
    const i = e - 1, r = yt.encode(t), s = r.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, a = s + o + i & ~i, c = a - s - o;
    return t.headerType === G.RecordBatch ? this._recordBatchBlocks.push(new we(a, t.bodyLength, this._position)) : t.headerType === G.DictionaryBatch && this._dictionaryBlocks.push(new we(a, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(a - o)), s > 0 && this._write(r), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const e = $(t);
      e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(yt.from(t));
  }
  // @ts-ignore
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(Cn);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: e, nodes: i, bufferRegions: r, buffers: s } = ct.assemble(t), o = new xt(t.numRows, i, r), a = yt.from(o, e);
    return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(s);
  }
  _writeDictionaryBatch(t, e, i = !1) {
    this._dictionaryDeltaOffsets.set(e, t.length + (this._dictionaryDeltaOffsets.get(e) || 0));
    const { byteLength: r, nodes: s, bufferRegions: o, buffers: a } = ct.assemble(new q([t])), c = new xt(t.length, s, o), d = new ee(c, e, i), h = yt.from(d, r);
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
class Zr extends Ma {
  /** @nocollapse */
  static writeAll(t, e) {
    const i = new Zr(e);
    return be(t) ? t.then((r) => i.writeAll(r)) : un(t) ? ts(i, t) : Qr(i, t);
  }
}
class Xr extends Ma {
  /** @nocollapse */
  static writeAll(t) {
    const e = new Xr();
    return be(t) ? t.then((i) => e.writeAll(i)) : un(t) ? ts(e, t) : Qr(e, t);
  }
  constructor() {
    super(), this._autoDestroy = !0;
  }
  // @ts-ignore
  _writeSchema(t) {
    return this._writeMagic()._writePadding(2);
  }
  _writeFooter(t) {
    const e = Nn.encode(new Nn(t, Tt.V4, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic();
  }
}
function Qr(n, t) {
  let e = t;
  t instanceof ft && (e = t.batches, n.reset(void 0, t.schema));
  for (const i of e)
    n.write(i);
  return n.finish();
}
function ts(n, t) {
  var e, i, r, s;
  return S(this, void 0, void 0, function* () {
    try {
      for (e = Le(t); i = yield e.next(), !i.done; ) {
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
function An(n) {
  const t = ue.from(n);
  return be(t) ? t.then((e) => An(e)) : t.isAsync() ? t.readAll().then((e) => new ft(e)) : new ft(t.readAll());
}
function cr(n, t = "stream") {
  return (t === "stream" ? Zr : Xr).writeAll(n).toUint8Array(!0);
}
var Vs = (
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
          var _ = a - s.headerColumns, p = [
            "col_heading",
            "level" + o,
            "col" + _
          ];
          return {
            type: "columns",
            classNames: p.join(" "),
            content: s.getContent(s.columnsTable, _, o)
          };
        } else if (d) {
          var b = o - s.headerRows, p = [
            "row_heading",
            "level" + a,
            "row" + b
          ];
          return {
            type: "index",
            id: "T_".concat(s.uuid, "level").concat(a, "_row").concat(b),
            classNames: p.join(" "),
            content: s.getContent(s.indexTable, b, a)
          };
        } else {
          var b = o - s.headerRows, _ = a - s.headerColumns, p = [
            "data",
            "row" + b,
            "col" + _
          ], C = s.styler ? s.getContent(s.styler.displayValuesTable, b, _) : s.getContent(s.dataTable, b, _);
          return {
            type: "data",
            id: "T_".concat(s.uuid, "row").concat(b, "_col").concat(_),
            classNames: p.join(" "),
            content: C
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
      }, this.dataTable = An(t), this.indexTable = An(e), this.columnsTable = An(i), this.styler = r ? {
        caption: r.caption,
        displayValuesTable: An(r.displayValues),
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
), Fn = function() {
  return Fn = Object.assign || function(n) {
    for (var t, e = 1, i = arguments.length; e < i; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Fn.apply(this, arguments);
}, Tn;
(function(n) {
  n.COMPONENT_READY = "streamlit:componentReady", n.SET_COMPONENT_VALUE = "streamlit:setComponentValue", n.SET_FRAME_HEIGHT = "streamlit:setFrameHeight";
})(Tn || (Tn = {}));
var Ar = (
  /** @class */
  function() {
    function n() {
    }
    return n.API_VERSION = 1, n.RENDER_EVENT = "streamlit:render", n.events = new EventTarget(), n.registeredMessageListener = !1, n.setComponentReady = function() {
      n.registeredMessageListener || (window.addEventListener("message", n.onMessageEvent), n.registeredMessageListener = !0), n.sendBackMsg(Tn.COMPONENT_READY, {
        apiVersion: n.API_VERSION
      });
    }, n.setFrameHeight = function(t) {
      t === void 0 && (t = document.body.scrollHeight), t !== n.lastFrameHeight && (n.lastFrameHeight = t, n.sendBackMsg(Tn.SET_FRAME_HEIGHT, { height: t }));
    }, n.setComponentValue = function(t) {
      var e;
      t instanceof Vs ? (e = "dataframe", t = t.serialize()) : Gu(t) ? (e = "bytes", t = new Uint8Array(t.buffer)) : t instanceof ArrayBuffer ? (e = "bytes", t = new Uint8Array(t)) : e = "json", n.sendBackMsg(Tn.SET_COMPONENT_VALUE, {
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
      e = Fn(Fn({}, e), i);
      var r = !!t.disabled, s = t.theme;
      s && Ku(s);
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
      return new Vs(i, r, s, o);
    }, n.sendBackMsg = function(t, e) {
      window.parent.postMessage(Fn({ isStreamlitMessage: !0, type: t }, e), "*");
    }, n;
  }()
), Ku = function(n) {
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
function Gu(n) {
  var t = !1;
  try {
    t = n instanceof BigInt64Array || n instanceof BigUint64Array;
  } catch {
  }
  return n instanceof Int8Array || n instanceof Uint8Array || n instanceof Uint8ClampedArray || n instanceof Int16Array || n instanceof Uint16Array || n instanceof Int32Array || n instanceof Uint32Array || n instanceof Float32Array || n instanceof Float64Array || t;
}
var qu = /* @__PURE__ */ function() {
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
  qu(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    Ar.setFrameHeight();
  }, t.prototype.componentDidUpdate = function() {
    Ar.setFrameHeight();
  }, t;
})(Pi.PureComponent);
const Zu = ({
  filters: n,
  initialValues: t = {},
  onFilterChange: e
}) => {
  const [i, r] = ys(t), [s, o] = ys(!1);
  tr(() => {
    const k = localStorage.getItem("gado-gordo-filters");
    if (k)
      try {
        const v = JSON.parse(k);
        r(v);
      } catch (v) {
        console.warn("Failed to load saved filters:", v);
      }
  }, []), tr(() => {
    localStorage.setItem("gado-gordo-filters", JSON.stringify(i));
  }, [i]), tr(() => {
    Ar.setComponentValue({
      filters: i,
      timestamp: Date.now()
    }), e && e(i);
  }, [i, e]);
  const a = er((k, v) => {
    r((V) => ({
      ...V,
      [k]: v
    }));
  }, []), c = er(() => {
    r({}), localStorage.removeItem("gado-gordo-filters");
  }, []), d = er(() => {
    console.log("Filters applied:", i);
  }, [i]), h = (k) => {
    const { column: v, options: V = [] } = k, W = i[v] || "";
    return /* @__PURE__ */ U.jsxs("div", { style: { marginBottom: "16px" }, children: [
      /* @__PURE__ */ U.jsx("label", { style: {
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold",
        color: "#333"
      }, children: v }),
      /* @__PURE__ */ U.jsxs(
        "select",
        {
          value: W,
          onChange: (N) => a(v, N.target.value || null),
          style: {
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "14px",
            backgroundColor: "#fff"
          },
          children: [
            /* @__PURE__ */ U.jsx("option", { value: "", children: "Todos" }),
            V.map((N) => /* @__PURE__ */ U.jsxs("option", { value: N.value, children: [
              N.label,
              " ",
              N.count ? `(${N.count})` : ""
            ] }, N.value))
          ]
        }
      )
    ] }, v);
  }, p = (k) => {
    const { column: v, options: V = [] } = k, W = i[v] || [];
    return /* @__PURE__ */ U.jsxs("div", { style: { marginBottom: "16px" }, children: [
      /* @__PURE__ */ U.jsx("label", { style: {
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold",
        color: "#333"
      }, children: v }),
      /* @__PURE__ */ U.jsx("div", { style: {
        maxHeight: "120px",
        overflowY: "auto",
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "8px",
        backgroundColor: "#fff"
      }, children: V.map((N) => /* @__PURE__ */ U.jsxs("label", { style: {
        display: "flex",
        alignItems: "center",
        marginBottom: "4px",
        cursor: "pointer"
      }, children: [
        /* @__PURE__ */ U.jsx(
          "input",
          {
            type: "checkbox",
            checked: W.includes(N.value),
            onChange: (y) => {
              const mt = y.target.checked ? [...W, N.value] : W.filter((Ut) => Ut !== N.value);
              a(v, mt.length > 0 ? mt : null);
            },
            style: { marginRight: "8px" }
          }
        ),
        /* @__PURE__ */ U.jsxs("span", { style: { fontSize: "14px" }, children: [
          N.label,
          " ",
          N.count ? `(${N.count})` : ""
        ] })
      ] }, N.value)) })
    ] }, v);
  }, _ = (k) => {
    const { column: v, min: V = 0, max: W = 100, step: N = 1 } = k, y = i[v] || [V, W];
    return /* @__PURE__ */ U.jsxs("div", { style: { marginBottom: "16px" }, children: [
      /* @__PURE__ */ U.jsxs("label", { style: {
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold",
        color: "#333"
      }, children: [
        v,
        ": ",
        y[0],
        " - ",
        y[1]
      ] }),
      /* @__PURE__ */ U.jsxs("div", { style: { padding: "0 8px" }, children: [
        /* @__PURE__ */ U.jsx(
          "input",
          {
            type: "range",
            min: V,
            max: W,
            step: N,
            value: y[0],
            onChange: (mt) => {
              const Ut = parseFloat(mt.target.value);
              Ut <= y[1] && a(v, [Ut, y[1]]);
            },
            style: {
              width: "100%",
              marginBottom: "8px"
            }
          }
        ),
        /* @__PURE__ */ U.jsx(
          "input",
          {
            type: "range",
            min: V,
            max: W,
            step: N,
            value: y[1],
            onChange: (mt) => {
              const Ut = parseFloat(mt.target.value);
              Ut >= y[0] && a(v, [y[0], Ut]);
            },
            style: {
              width: "100%"
            }
          }
        )
      ] }),
      /* @__PURE__ */ U.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "#666",
        marginTop: "4px"
      }, children: [
        /* @__PURE__ */ U.jsx("span", { children: V }),
        /* @__PURE__ */ U.jsx("span", { children: W })
      ] })
    ] }, v);
  }, b = (k) => {
    const { column: v } = k, V = i[v] || "";
    return /* @__PURE__ */ U.jsxs("div", { style: { marginBottom: "16px" }, children: [
      /* @__PURE__ */ U.jsx("label", { style: {
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold",
        color: "#333"
      }, children: v }),
      /* @__PURE__ */ U.jsx(
        "input",
        {
          type: "text",
          value: V,
          onChange: (W) => a(v, W.target.value || null),
          placeholder: "Digite para buscar...",
          style: {
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "14px"
          }
        }
      )
    ] }, v);
  }, C = (k) => {
    switch (k.type) {
      case "select":
        return h(k);
      case "multiselect":
        return p(k);
      case "range":
        return _(k);
      case "search":
        return b(k);
      default:
        return null;
    }
  }, dt = () => Object.values(i).filter(
    (k) => k != null && k !== "" && !(Array.isArray(k) && k.length === 0)
  ).length;
  return /* @__PURE__ */ U.jsxs("div", { style: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ U.jsxs("div", { style: {
      backgroundColor: "#f8f9fa",
      padding: "12px 16px",
      borderBottom: "1px solid #e0e0e0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer"
    }, onClick: () => o(!s), children: [
      /* @__PURE__ */ U.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ U.jsx("h3", { style: { margin: 0, fontSize: "16px", color: "#333" }, children: "🔍 Filtros Avançados" }),
        dt() > 0 && /* @__PURE__ */ U.jsx("span", { style: {
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "12px",
          padding: "2px 8px",
          fontSize: "12px",
          fontWeight: "bold"
        }, children: dt() })
      ] }),
      /* @__PURE__ */ U.jsx("span", { style: {
        fontSize: "18px",
        transform: s ? "rotate(0deg)" : "rotate(180deg)",
        transition: "transform 0.3s ease"
      }, children: "▼" })
    ] }),
    !s && /* @__PURE__ */ U.jsxs("div", { style: { padding: "16px" }, children: [
      /* @__PURE__ */ U.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        marginBottom: "16px"
      }, children: n.map(C) }),
      /* @__PURE__ */ U.jsxs("div", { style: {
        display: "flex",
        gap: "8px",
        justifyContent: "flex-end",
        paddingTop: "16px",
        borderTop: "1px solid #e0e0e0"
      }, children: [
        /* @__PURE__ */ U.jsx(
          "button",
          {
            onClick: c,
            style: {
              padding: "8px 16px",
              border: "1px solid #dc3545",
              borderRadius: "4px",
              backgroundColor: "#fff",
              color: "#dc3545",
              cursor: "pointer",
              fontSize: "14px"
            },
            children: "Limpar"
          }
        ),
        /* @__PURE__ */ U.jsx(
          "button",
          {
            onClick: d,
            style: {
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              fontSize: "14px"
            },
            children: "Aplicar Filtros"
          }
        )
      ] })
    ] })
  ] });
}, Xu = In.createRoot(
  document.getElementById("root")
);
Xu.render(
  /* @__PURE__ */ U.jsx(Pi.StrictMode, { children: /* @__PURE__ */ U.jsx(Zu, {}) })
);
