import Vi, { useState as vn, useRef as ps, useEffect as ys } from "react";
import nc from "react-dom";
var lr = { exports: {} }, wn = {};
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
  if (ms) return wn;
  ms = 1;
  var n = Vi, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, d) {
    var h, y = {}, g = null, m = null;
    d !== void 0 && (g = "" + d), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (h in c) i.call(c, h) && !s.hasOwnProperty(h) && (y[h] = c[h]);
    if (a && a.defaultProps) for (h in c = a.defaultProps, c) y[h] === void 0 && (y[h] = c[h]);
    return { $$typeof: t, type: a, key: g, ref: m, props: y, _owner: r.current };
  }
  return wn.Fragment = e, wn.jsx = o, wn.jsxs = o, wn;
}
var Sn = {};
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
    var n = Vi, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), M = Symbol.iterator, mt = "@@iterator";
    function Ut(l) {
      if (l === null || typeof l != "object")
        return null;
      var p = M && l[M] || l[mt];
      return typeof p == "function" ? p : null;
    }
    var nt = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Q(l) {
      {
        for (var p = arguments.length, b = new Array(p > 1 ? p - 1 : 0), v = 1; v < p; v++)
          b[v - 1] = arguments[v];
        at("error", l, b);
      }
    }
    function at(l, p, b) {
      {
        var v = nt.ReactDebugCurrentFrame, V = v.getStackAddendum();
        V !== "" && (p += "%s", b = b.concat([V]));
        var K = b.map(function(U) {
          return String(U);
        });
        K.unshift("Warning: " + p), Function.prototype.apply.call(console[l], console, K);
      }
    }
    var rt = !1, f = !1, dt = !1, ut = !1, Pt = !1, Wn;
    Wn = Symbol.for("react.module.reference");
    function Ji(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === i || l === s || Pt || l === r || l === d || l === h || ut || l === m || rt || f || dt || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === y || l.$$typeof === o || l.$$typeof === a || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Wn || l.getModuleId !== void 0));
    }
    function Hi(l, p, b) {
      var v = l.displayName;
      if (v)
        return v;
      var V = p.displayName || p.name || "";
      return V !== "" ? b + "(" + V + ")" : b;
    }
    function Jn(l) {
      return l.displayName || "Context";
    }
    function zt(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && Q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
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
            var p = l;
            return Jn(p) + ".Consumer";
          case o:
            var b = l;
            return Jn(b._context) + ".Provider";
          case c:
            return Hi(l, l.render, "ForwardRef");
          case y:
            var v = l.displayName || null;
            return v !== null ? v : zt(l.type) || "Memo";
          case g: {
            var V = l, K = V._payload, U = V._init;
            try {
              return zt(U(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, Fe = 0, Hn, Kn, fn, Gn, pn, qn, Zn;
    function Xn() {
    }
    Xn.__reactDisabledLog = !0;
    function Ki() {
      {
        if (Fe === 0) {
          Hn = console.log, Kn = console.info, fn = console.warn, Gn = console.error, pn = console.group, qn = console.groupCollapsed, Zn = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: Xn,
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
        Fe++;
      }
    }
    function Gi() {
      {
        if (Fe--, Fe === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ie({}, l, {
              value: Hn
            }),
            info: ie({}, l, {
              value: Kn
            }),
            warn: ie({}, l, {
              value: fn
            }),
            error: ie({}, l, {
              value: Gn
            }),
            group: ie({}, l, {
              value: pn
            }),
            groupCollapsed: ie({}, l, {
              value: qn
            }),
            groupEnd: ie({}, l, {
              value: Zn
            })
          });
        }
        Fe < 0 && Q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yn = nt.ReactCurrentDispatcher, mn;
    function Ve(l, p, b) {
      {
        if (mn === void 0)
          try {
            throw Error();
          } catch (V) {
            var v = V.stack.trim().match(/\n( *(at )?)/);
            mn = v && v[1] || "";
          }
        return `
` + mn + l;
      }
    }
    var bn = !1, ze;
    {
      var qi = typeof WeakMap == "function" ? WeakMap : Map;
      ze = new qi();
    }
    function _(l, p) {
      if (!l || bn)
        return "";
      {
        var b = ze.get(l);
        if (b !== void 0)
          return b;
      }
      var v;
      bn = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = yn.current, yn.current = null, Ki();
      try {
        if (p) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (bt) {
              v = bt;
            }
            Reflect.construct(l, [], U);
          } else {
            try {
              U.call();
            } catch (bt) {
              v = bt;
            }
            l.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            v = bt;
          }
          l();
        }
      } catch (bt) {
        if (bt && v && typeof bt.stack == "string") {
          for (var N = bt.stack.split(`
`), ht = v.stack.split(`
`), it = N.length - 1, st = ht.length - 1; it >= 1 && st >= 0 && N[it] !== ht[st]; )
            st--;
          for (; it >= 1 && st >= 0; it--, st--)
            if (N[it] !== ht[st]) {
              if (it !== 1 || st !== 1)
                do
                  if (it--, st--, st < 0 || N[it] !== ht[st]) {
                    var Rt = `
` + N[it].replace(" at new ", " at ");
                    return l.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", l.displayName)), typeof l == "function" && ze.set(l, Rt), Rt;
                  }
                while (it >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        bn = !1, yn.current = K, Gi(), Error.prepareStackTrace = V;
      }
      var We = l ? l.displayName || l.name : "", Te = We ? Ve(We) : "";
      return typeof l == "function" && ze.set(l, Te), Te;
    }
    function gn(l, p, b) {
      return _(l, !1);
    }
    function $e(l) {
      var p = l.prototype;
      return !!(p && p.isReactComponent);
    }
    function De(l, p, b) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return _(l, $e(l));
      if (typeof l == "string")
        return Ve(l);
      switch (l) {
        case d:
          return Ve("Suspense");
        case h:
          return Ve("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return gn(l.render);
          case y:
            return De(l.type, p, b);
          case g: {
            var v = l, V = v._payload, K = v._init;
            try {
              return De(K(V), p, b);
            } catch {
            }
          }
        }
      return "";
    }
    var _n = Object.prototype.hasOwnProperty, ts = {}, es = nt.ReactDebugCurrentFrame;
    function Qn(l) {
      if (l) {
        var p = l._owner, b = De(l.type, l._source, p ? p.type : null);
        es.setExtraStackFrame(b);
      } else
        es.setExtraStackFrame(null);
    }
    function Na(l, p, b, v, V) {
      {
        var K = Function.call.bind(_n);
        for (var U in l)
          if (K(l, U)) {
            var N = void 0;
            try {
              if (typeof l[U] != "function") {
                var ht = Error((v || "React class") + ": " + b + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              N = l[U](p, U, v, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (it) {
              N = it;
            }
            N && !(N instanceof Error) && (Qn(V), Q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", b, U, typeof N), Qn(null)), N instanceof Error && !(N.message in ts) && (ts[N.message] = !0, Qn(V), Q("Failed %s type: %s", b, N.message), Qn(null));
          }
      }
    }
    var Ca = Array.isArray;
    function Zi(l) {
      return Ca(l);
    }
    function La(l) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, b = p && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return b;
      }
    }
    function Ua(l) {
      try {
        return ns(l), !1;
      } catch {
        return !0;
      }
    }
    function ns(l) {
      return "" + l;
    }
    function is(l) {
      if (Ua(l))
        return Q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", La(l)), ns(l);
    }
    var rs = nt.ReactCurrentOwner, Pa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ss, os;
    function ka(l) {
      if (_n.call(l, "ref")) {
        var p = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function ja(l) {
      if (_n.call(l, "key")) {
        var p = Object.getOwnPropertyDescriptor(l, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Va(l, p) {
      typeof l.ref == "string" && rs.current;
    }
    function za(l, p) {
      {
        var b = function() {
          ss || (ss = !0, Q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        b.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function $a(l, p) {
      {
        var b = function() {
          os || (os = !0, Q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        b.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Ya = function(l, p, b, v, V, K, U) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: p,
        ref: b,
        props: U,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function Wa(l, p, b, v, V) {
      {
        var K, U = {}, N = null, ht = null;
        b !== void 0 && (is(b), N = "" + b), ja(p) && (is(p.key), N = "" + p.key), ka(p) && (ht = p.ref, Va(p, V));
        for (K in p)
          _n.call(p, K) && !Pa.hasOwnProperty(K) && (U[K] = p[K]);
        if (l && l.defaultProps) {
          var it = l.defaultProps;
          for (K in it)
            U[K] === void 0 && (U[K] = it[K]);
        }
        if (N || ht) {
          var st = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          N && za(U, st), ht && $a(U, st);
        }
        return Ya(l, N, ht, V, v, rs.current, U);
      }
    }
    var Xi = nt.ReactCurrentOwner, as = nt.ReactDebugCurrentFrame;
    function Ye(l) {
      if (l) {
        var p = l._owner, b = De(l.type, l._source, p ? p.type : null);
        as.setExtraStackFrame(b);
      } else
        as.setExtraStackFrame(null);
    }
    var Qi;
    Qi = !1;
    function tr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function cs() {
      {
        if (Xi.current) {
          var l = zt(Xi.current.type);
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
    var ls = {};
    function Ha(l) {
      {
        var p = cs();
        if (!p) {
          var b = typeof l == "string" ? l : l.displayName || l.name;
          b && (p = `

Check the top-level render call using <` + b + ">.");
        }
        return p;
      }
    }
    function us(l, p) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var b = Ha(p);
        if (ls[b])
          return;
        ls[b] = !0;
        var v = "";
        l && l._owner && l._owner !== Xi.current && (v = " It was passed a child from " + zt(l._owner.type) + "."), Ye(l), Q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, v), Ye(null);
      }
    }
    function ds(l, p) {
      {
        if (typeof l != "object")
          return;
        if (Zi(l))
          for (var b = 0; b < l.length; b++) {
            var v = l[b];
            tr(v) && us(v, p);
          }
        else if (tr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var V = Ut(l);
          if (typeof V == "function" && V !== l.entries)
            for (var K = V.call(l), U; !(U = K.next()).done; )
              tr(U.value) && us(U.value, p);
        }
      }
    }
    function Ka(l) {
      {
        var p = l.type;
        if (p == null || typeof p == "string")
          return;
        var b;
        if (typeof p == "function")
          b = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === y))
          b = p.propTypes;
        else
          return;
        if (b) {
          var v = zt(p);
          Na(b, l.props, "prop", v, l);
        } else if (p.PropTypes !== void 0 && !Qi) {
          Qi = !0;
          var V = zt(p);
          Q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && Q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ga(l) {
      {
        for (var p = Object.keys(l.props), b = 0; b < p.length; b++) {
          var v = p[b];
          if (v !== "children" && v !== "key") {
            Ye(l), Q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Ye(null);
            break;
          }
        }
        l.ref !== null && (Ye(l), Q("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
      }
    }
    var hs = {};
    function fs(l, p, b, v, V, K) {
      {
        var U = Ji(l);
        if (!U) {
          var N = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = Ja();
          ht ? N += ht : N += cs();
          var it;
          l === null ? it = "null" : Zi(l) ? it = "array" : l !== void 0 && l.$$typeof === t ? (it = "<" + (zt(l.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : it = typeof l, Q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", it, N);
        }
        var st = Wa(l, p, b, V, K);
        if (st == null)
          return st;
        if (U) {
          var Rt = p.children;
          if (Rt !== void 0)
            if (v)
              if (Zi(Rt)) {
                for (var We = 0; We < Rt.length; We++)
                  ds(Rt[We], l);
                Object.freeze && Object.freeze(Rt);
              } else
                Q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ds(Rt, l);
        }
        if (_n.call(p, "key")) {
          var Te = zt(l), bt = Object.keys(p).filter(function(ec) {
            return ec !== "key";
          }), er = bt.length > 0 ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!hs[Te + er]) {
            var tc = bt.length > 0 ? "{" + bt.join(": ..., ") + ": ...}" : "{}";
            Q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, er, Te, tc, Te), hs[Te + er] = !0;
          }
        }
        return l === i ? Ga(st) : Ka(st), st;
      }
    }
    function qa(l, p, b) {
      return fs(l, p, b, !0);
    }
    function Za(l, p, b) {
      return fs(l, p, b, !1);
    }
    var Xa = Za, Qa = qa;
    Sn.Fragment = i, Sn.jsx = Xa, Sn.jsxs = Qa;
  }()), Sn;
}
process.env.NODE_ENV === "production" ? lr.exports = ic() : lr.exports = rc();
var P = lr.exports, An = {}, In = nc;
if (process.env.NODE_ENV === "production")
  An.createRoot = In.createRoot, An.hydrateRoot = In.hydrateRoot;
else {
  var ti = In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  An.createRoot = function(n, t) {
    ti.usingClientEntryPoint = !0;
    try {
      return In.createRoot(n, t);
    } finally {
      ti.usingClientEntryPoint = !1;
    }
  }, An.hydrateRoot = function(n, t, e) {
    ti.usingClientEntryPoint = !0;
    try {
      return In.hydrateRoot(n, t, e);
    } finally {
      ti.usingClientEntryPoint = !1;
    }
  };
}
var ur = { exports: {} }, z = {};
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
  if (gs) return z;
  gs = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, o = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, y = n ? Symbol.for("react.suspense") : 60113, g = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, M = n ? Symbol.for("react.lazy") : 60116, mt = n ? Symbol.for("react.block") : 60121, Ut = n ? Symbol.for("react.fundamental") : 60117, nt = n ? Symbol.for("react.responder") : 60118, Q = n ? Symbol.for("react.scope") : 60119;
  function at(f) {
    if (typeof f == "object" && f !== null) {
      var dt = f.$$typeof;
      switch (dt) {
        case t:
          switch (f = f.type, f) {
            case c:
            case d:
            case i:
            case s:
            case r:
            case y:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case h:
                case M:
                case m:
                case o:
                  return f;
                default:
                  return dt;
              }
          }
        case e:
          return dt;
      }
    }
  }
  function rt(f) {
    return at(f) === d;
  }
  return z.AsyncMode = c, z.ConcurrentMode = d, z.ContextConsumer = a, z.ContextProvider = o, z.Element = t, z.ForwardRef = h, z.Fragment = i, z.Lazy = M, z.Memo = m, z.Portal = e, z.Profiler = s, z.StrictMode = r, z.Suspense = y, z.isAsyncMode = function(f) {
    return rt(f) || at(f) === c;
  }, z.isConcurrentMode = rt, z.isContextConsumer = function(f) {
    return at(f) === a;
  }, z.isContextProvider = function(f) {
    return at(f) === o;
  }, z.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, z.isForwardRef = function(f) {
    return at(f) === h;
  }, z.isFragment = function(f) {
    return at(f) === i;
  }, z.isLazy = function(f) {
    return at(f) === M;
  }, z.isMemo = function(f) {
    return at(f) === m;
  }, z.isPortal = function(f) {
    return at(f) === e;
  }, z.isProfiler = function(f) {
    return at(f) === s;
  }, z.isStrictMode = function(f) {
    return at(f) === r;
  }, z.isSuspense = function(f) {
    return at(f) === y;
  }, z.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === i || f === d || f === s || f === r || f === y || f === g || typeof f == "object" && f !== null && (f.$$typeof === M || f.$$typeof === m || f.$$typeof === o || f.$$typeof === a || f.$$typeof === h || f.$$typeof === Ut || f.$$typeof === nt || f.$$typeof === Q || f.$$typeof === mt);
  }, z.typeOf = at, z;
}
var $ = {};
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
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, r = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, o = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, y = n ? Symbol.for("react.suspense") : 60113, g = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, M = n ? Symbol.for("react.lazy") : 60116, mt = n ? Symbol.for("react.block") : 60121, Ut = n ? Symbol.for("react.fundamental") : 60117, nt = n ? Symbol.for("react.responder") : 60118, Q = n ? Symbol.for("react.scope") : 60119;
    function at(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === i || _ === d || _ === s || _ === r || _ === y || _ === g || typeof _ == "object" && _ !== null && (_.$$typeof === M || _.$$typeof === m || _.$$typeof === o || _.$$typeof === a || _.$$typeof === h || _.$$typeof === Ut || _.$$typeof === nt || _.$$typeof === Q || _.$$typeof === mt);
    }
    function rt(_) {
      if (typeof _ == "object" && _ !== null) {
        var gn = _.$$typeof;
        switch (gn) {
          case t:
            var $e = _.type;
            switch ($e) {
              case c:
              case d:
              case i:
              case s:
              case r:
              case y:
                return $e;
              default:
                var De = $e && $e.$$typeof;
                switch (De) {
                  case a:
                  case h:
                  case M:
                  case m:
                  case o:
                    return De;
                  default:
                    return gn;
                }
            }
          case e:
            return gn;
        }
      }
    }
    var f = c, dt = d, ut = a, Pt = o, Wn = t, Ji = h, Hi = i, Jn = M, zt = m, ie = e, Fe = s, Hn = r, Kn = y, fn = !1;
    function Gn(_) {
      return fn || (fn = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), pn(_) || rt(_) === c;
    }
    function pn(_) {
      return rt(_) === d;
    }
    function qn(_) {
      return rt(_) === a;
    }
    function Zn(_) {
      return rt(_) === o;
    }
    function Xn(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Ki(_) {
      return rt(_) === h;
    }
    function Gi(_) {
      return rt(_) === i;
    }
    function yn(_) {
      return rt(_) === M;
    }
    function mn(_) {
      return rt(_) === m;
    }
    function Ve(_) {
      return rt(_) === e;
    }
    function bn(_) {
      return rt(_) === s;
    }
    function ze(_) {
      return rt(_) === r;
    }
    function qi(_) {
      return rt(_) === y;
    }
    $.AsyncMode = f, $.ConcurrentMode = dt, $.ContextConsumer = ut, $.ContextProvider = Pt, $.Element = Wn, $.ForwardRef = Ji, $.Fragment = Hi, $.Lazy = Jn, $.Memo = zt, $.Portal = ie, $.Profiler = Fe, $.StrictMode = Hn, $.Suspense = Kn, $.isAsyncMode = Gn, $.isConcurrentMode = pn, $.isContextConsumer = qn, $.isContextProvider = Zn, $.isElement = Xn, $.isForwardRef = Ki, $.isFragment = Gi, $.isLazy = yn, $.isMemo = mn, $.isPortal = Ve, $.isProfiler = bn, $.isStrictMode = ze, $.isSuspense = qi, $.isValidElementType = at, $.typeOf = rt;
  }()), $;
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
function w(n, t, e, i) {
  function r(s) {
    return s instanceof e ? s : new e(function(o) {
      o(s);
    });
  }
  return new (e || (e = Promise))(function(s, o) {
    function a(h) {
      try {
        d(i.next(h));
      } catch (y) {
        o(y);
      }
    }
    function c(h) {
      try {
        d(i.throw(h));
      } catch (y) {
        o(y);
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
function R(n) {
  return this instanceof R ? (this.v = n, this) : new R(n);
}
function Xt(n, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = e.apply(n, t || []), r, s = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function o(m) {
    return function(M) {
      return Promise.resolve(M).then(m, y);
    };
  }
  function a(m, M) {
    i[m] && (r[m] = function(mt) {
      return new Promise(function(Ut, nt) {
        s.push([m, mt, Ut, nt]) > 1 || c(m, mt);
      });
    }, M && (r[m] = M(r[m])));
  }
  function c(m, M) {
    try {
      d(i[m](M));
    } catch (mt) {
      g(s[0][3], mt);
    }
  }
  function d(m) {
    m.value instanceof R ? Promise.resolve(m.value.v).then(h, y) : g(s[0][2], m);
  }
  function h(m) {
    c("next", m);
  }
  function y(m) {
    c("throw", m);
  }
  function g(m, M) {
    m(M), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function ri(n) {
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
function Ue(n) {
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
const uc = new TextDecoder("utf-8"), dr = (n) => uc.decode(n), dc = new TextEncoder(), Ar = (n) => dc.encode(n), [ed, hc] = (() => {
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
})(), [Pn] = (() => {
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
})(), [kn] = (() => {
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
})(), fc = (n) => typeof n == "number", Ys = (n) => typeof n == "boolean", ct = (n) => typeof n == "function", It = (n) => n != null && Object(n) === n, ge = (n) => It(n) && ct(n.then), jn = (n) => It(n) && ct(n[Symbol.iterator]), dn = (n) => It(n) && ct(n[Symbol.asyncIterator]), hr = (n) => It(n) && It(n.schema), Ws = (n) => It(n) && "done" in n && "value" in n, Js = (n) => It(n) && ct(n.stat) && fc(n.fd), Hs = (n) => It(n) && Or(n.body), zi = (n) => "_getDOMStream" in n && "_getNodeStream" in n, pc = (n) => It(n) && ct(n.abort) && ct(n.getWriter) && !zi(n), Or = (n) => It(n) && ct(n.cancel) && ct(n.getReader) && !zi(n), yc = (n) => It(n) && ct(n.end) && ct(n.write) && Ys(n.writable) && !zi(n), Ks = (n) => It(n) && ct(n.read) && ct(n.pipe) && Ys(n.readable) && !zi(n), mc = (n) => It(n) && ct(n.clear) && ct(n.bytes) && ct(n.position) && ct(n.setPosition) && ct(n.capacity) && ct(n.getBufferIdentifier) && ct(n.createLong), Fr = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
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
function te(n, t) {
  const e = bc(n), i = e.reduce((h, y) => h + y.byteLength, 0);
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
function G(n, t) {
  let e = Ws(t) ? t.value : t;
  return e instanceof n ? n === Uint8Array ? new n(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = Ar(e)), e instanceof ArrayBuffer ? new n(e) : e instanceof Fr ? new n(e) : mc(e) ? G(n, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new n(0) : new n(e.buffer, e.byteOffset, e.byteLength / n.BYTES_PER_ELEMENT) : n.from(e)) : new n(0);
}
const Bn = (n) => G(Int32Array, n), k = (n) => G(Uint8Array, n), fr = (n) => (n.next(), n);
function* gc(n, t) {
  const e = function* (r) {
    yield r;
  }, i = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Fr ? e(t) : jn(t) ? t : e(t);
  return yield* fr(function* (r) {
    let s = null;
    do
      s = r.next(yield G(n, s));
    while (!s.done);
  }(i[Symbol.iterator]())), new n();
}
const _c = (n) => gc(Uint8Array, n);
function Gs(n, t) {
  return Xt(this, arguments, function* () {
    if (ge(t))
      return yield R(yield R(yield* ri(Ue(Gs(n, yield R(t))))));
    const i = function(o) {
      return Xt(this, arguments, function* () {
        yield yield R(yield R(o));
      });
    }, r = function(o) {
      return Xt(this, arguments, function* () {
        yield R(yield* ri(Ue(fr(function* (a) {
          let c = null;
          do
            c = a.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        }(o[Symbol.iterator]())))));
      });
    }, s = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Fr ? i(t) : jn(t) ? r(t) : dn(t) ? t : i(t);
    return yield R(
      // otherwise if AsyncIterable, use it
      yield* ri(Ue(fr(function(o) {
        return Xt(this, arguments, function* () {
          let a = null;
          do
            a = yield R(o.next(yield yield R(G(n, a))));
          while (!a.done);
        });
      }(s[Symbol.asyncIterator]()))))
    ), yield R(new n());
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
    return ei(Sc(n));
  },
  fromAsyncIterable(n) {
    return ei(Ic(n));
  },
  fromDOMStream(n) {
    return ei(Bc(n));
  },
  fromNodeStream(n) {
    return ei(Oc(n));
  },
  // @ts-ignore
  toDOMStream(n, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(n, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, ei = (n) => (n.next(), n);
function* Sc(n) {
  let t, e = !1, i = [], r, s, o, a = 0;
  function c() {
    return s === "peek" ? te(i, o)[0] : ([r, i, a] = te(i, o), r);
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
  return Xt(this, arguments, function* () {
    let e, i = !1, r = [], s, o, a, c = 0;
    function d() {
      return o === "peek" ? te(r, a)[0] : ([s, r, c] = te(r, a), s);
    }
    ({ cmd: o, size: a } = yield yield R(null));
    const h = vc(n)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield R(h.next()) : yield R(h.next(a - c)), !e && s.byteLength > 0 && (r.push(s), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield R(d()));
          while (a < c);
      while (!e);
    } catch (y) {
      (i = !0) && typeof h.throw == "function" && (yield R(h.throw(y)));
    } finally {
      i === !1 && typeof h.return == "function" && (yield R(h.return(new Uint8Array(0))));
    }
    return yield R(null);
  });
}
function Bc(n) {
  return Xt(this, arguments, function* () {
    let e = !1, i = !1, r = [], s, o, a, c = 0;
    function d() {
      return o === "peek" ? te(r, a)[0] : ([s, r, c] = te(r, a), s);
    }
    ({ cmd: o, size: a } = yield yield R(null));
    const h = new Ac(n);
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield R(h.read()) : yield R(h.read(a - c)), !e && s.byteLength > 0 && (r.push(k(s)), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield R(d()));
          while (a < c);
      while (!e);
    } catch (y) {
      (i = !0) && (yield R(h.cancel(y)));
    } finally {
      i === !1 ? yield R(h.cancel()) : n.locked && h.releaseLock();
    }
    return yield R(null);
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
    return w(this, void 0, void 0, function* () {
      const { reader: e, source: i } = this;
      e && (yield e.cancel(t).catch(() => {
      })), i && i.locked && this.releaseLock();
    });
  }
  read(t) {
    return w(this, void 0, void 0, function* () {
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
function Oc(n) {
  return Xt(this, arguments, function* () {
    const e = [];
    let i = "error", r = !1, s = null, o, a, c = 0, d = [], h;
    function y() {
      return o === "peek" ? te(d, a)[0] : ([h, d, c] = te(d, a), h);
    }
    if ({ cmd: o, size: a } = yield yield R(null), n.isTTY)
      return yield yield R(new Uint8Array(0)), yield R(null);
    try {
      e[0] = nr(n, "end"), e[1] = nr(n, "error");
      do {
        if (e[2] = nr(n, "readable"), [i, s] = yield R(Promise.race(e.map((m) => m[2]))), i === "error")
          break;
        if ((r = i === "end") || (Number.isFinite(a - c) ? (h = k(n.read(a - c)), h.byteLength < a - c && (h = k(n.read()))) : h = k(n.read()), h.byteLength > 0 && (d.push(h), c += h.byteLength)), r || a <= c)
          do
            ({ cmd: o, size: a } = yield yield R(y()));
          while (a < c);
      } while (!r);
    } finally {
      yield R(g(e, i === "error" ? s : null));
    }
    return yield R(null);
    function g(m, M) {
      return h = d = null, new Promise((mt, Ut) => {
        for (const [nt, Q] of m)
          n.off(nt, Q);
        try {
          const nt = n.destroy;
          nt && nt.call(n, M), M = void 0;
        } catch (nt) {
          M = nt || M;
        } finally {
          M != null ? Ut(M) : mt();
        }
      });
    }
  });
}
var Dt;
(function(n) {
  n[n.V1 = 0] = "V1", n[n.V2 = 1] = "V2", n[n.V3 = 2] = "V3", n[n.V4 = 3] = "V4", n[n.V5 = 4] = "V5";
})(Dt || (Dt = {}));
var Tt;
(function(n) {
  n[n.Sparse = 0] = "Sparse", n[n.Dense = 1] = "Dense";
})(Tt || (Tt = {}));
var St;
(function(n) {
  n[n.HALF = 0] = "HALF", n[n.SINGLE = 1] = "SINGLE", n[n.DOUBLE = 2] = "DOUBLE";
})(St || (St = {}));
var he;
(function(n) {
  n[n.DAY = 0] = "DAY", n[n.MILLISECOND = 1] = "MILLISECOND";
})(he || (he = {}));
var j;
(function(n) {
  n[n.SECOND = 0] = "SECOND", n[n.MILLISECOND = 1] = "MILLISECOND", n[n.MICROSECOND = 2] = "MICROSECOND", n[n.NANOSECOND = 3] = "NANOSECOND";
})(j || (j = {}));
var _e;
(function(n) {
  n[n.YEAR_MONTH = 0] = "YEAR_MONTH", n[n.DAY_TIME = 1] = "DAY_TIME", n[n.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(_e || (_e = {}));
var Y;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Schema = 1] = "Schema", n[n.DictionaryBatch = 2] = "DictionaryBatch", n[n.RecordBatch = 3] = "RecordBatch", n[n.Tensor = 4] = "Tensor", n[n.SparseTensor = 5] = "SparseTensor";
})(Y || (Y = {}));
var u;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Null = 1] = "Null", n[n.Int = 2] = "Int", n[n.Float = 3] = "Float", n[n.Binary = 4] = "Binary", n[n.Utf8 = 5] = "Utf8", n[n.Bool = 6] = "Bool", n[n.Decimal = 7] = "Decimal", n[n.Date = 8] = "Date", n[n.Time = 9] = "Time", n[n.Timestamp = 10] = "Timestamp", n[n.Interval = 11] = "Interval", n[n.List = 12] = "List", n[n.Struct = 13] = "Struct", n[n.Union = 14] = "Union", n[n.FixedSizeBinary = 15] = "FixedSizeBinary", n[n.FixedSizeList = 16] = "FixedSizeList", n[n.Map = 17] = "Map", n[n.Dictionary = -1] = "Dictionary", n[n.Int8 = -2] = "Int8", n[n.Int16 = -3] = "Int16", n[n.Int32 = -4] = "Int32", n[n.Int64 = -5] = "Int64", n[n.Uint8 = -6] = "Uint8", n[n.Uint16 = -7] = "Uint16", n[n.Uint32 = -8] = "Uint32", n[n.Uint64 = -9] = "Uint64", n[n.Float16 = -10] = "Float16", n[n.Float32 = -11] = "Float32", n[n.Float64 = -12] = "Float64", n[n.DateDay = -13] = "DateDay", n[n.DateMillisecond = -14] = "DateMillisecond", n[n.TimestampSecond = -15] = "TimestampSecond", n[n.TimestampMillisecond = -16] = "TimestampMillisecond", n[n.TimestampMicrosecond = -17] = "TimestampMicrosecond", n[n.TimestampNanosecond = -18] = "TimestampNanosecond", n[n.TimeSecond = -19] = "TimeSecond", n[n.TimeMillisecond = -20] = "TimeMillisecond", n[n.TimeMicrosecond = -21] = "TimeMicrosecond", n[n.TimeNanosecond = -22] = "TimeNanosecond", n[n.DenseUnion = -23] = "DenseUnion", n[n.SparseUnion = -24] = "SparseUnion", n[n.IntervalDayTime = -25] = "IntervalDayTime", n[n.IntervalYearMonth = -26] = "IntervalYearMonth";
})(u || (u = {}));
var se;
(function(n) {
  n[n.OFFSET = 0] = "OFFSET", n[n.DATA = 1] = "DATA", n[n.VALIDITY = 2] = "VALIDITY", n[n.TYPE = 3] = "TYPE";
})(se || (se = {}));
const Fc = void 0;
function Rn(n) {
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
  return typeof n[Symbol.toPrimitive] == "function" ? n[Symbol.toPrimitive]("string") : ArrayBuffer.isView(n) ? n instanceof Pn || n instanceof kn ? `[${[...n].map((t) => Rn(t))}]` : `[${n}]` : ArrayBuffer.isView(n) ? `[${n}]` : JSON.stringify(n, (t, e) => typeof e == "bigint" ? `${e}` : e);
}
const Dc = Symbol.for("isArrowBigNum");
function Vt(n, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(G(this.TypedArray, n), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(n, ...t), this.constructor.prototype);
}
Vt.prototype[Dc] = !0;
Vt.prototype.toJSON = function() {
  return `"${Pe(this)}"`;
};
Vt.prototype.valueOf = function() {
  return qs(this);
};
Vt.prototype.toString = function() {
  return Pe(this);
};
Vt.prototype[Symbol.toPrimitive] = function(n = "default") {
  switch (n) {
    case "number":
      return qs(this);
    case "string":
      return Pe(this);
    case "default":
      return pr(this);
  }
  return Pe(this);
};
function Xe(...n) {
  return Vt.apply(this, n);
}
function Qe(...n) {
  return Vt.apply(this, n);
}
function En(...n) {
  return Vt.apply(this, n);
}
Object.setPrototypeOf(Xe.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Qe.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(En.prototype, Object.create(Uint32Array.prototype));
Object.assign(Xe.prototype, Vt.prototype, { constructor: Xe, signed: !0, TypedArray: Int32Array, BigIntArray: Pn });
Object.assign(Qe.prototype, Vt.prototype, { constructor: Qe, signed: !1, TypedArray: Uint32Array, BigIntArray: kn });
Object.assign(En.prototype, Vt.prototype, { constructor: En, signed: !0, TypedArray: Uint32Array, BigIntArray: kn });
function qs(n) {
  const { buffer: t, byteOffset: e, length: i, signed: r } = n, s = new kn(t, e, i), o = r && s[s.length - 1] & BigInt(1) << BigInt(63);
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
let Pe, pr;
hc ? (pr = (n) => n.byteLength === 8 ? new n.BigIntArray(n.buffer, n.byteOffset, 1)[0] : ir(n), Pe = (n) => n.byteLength === 8 ? `${new n.BigIntArray(n.buffer, n.byteOffset, 1)[0]}` : ir(n)) : (Pe = ir, pr = Pe);
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
class Tr {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new Xe(t);
      case !1:
        return new Qe(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Pn:
        return new Xe(t);
    }
    return t.byteLength === 16 ? new En(t) : new Qe(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new Xe(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new Qe(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new En(t);
  }
  constructor(t, e) {
    return Tr.new(t, e);
  }
}
var Zs, Xs, Qs, to, eo, no, io, ro, so, oo, ao, co, lo, uo, ho, fo, po, yo, mo;
class S {
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
    return S.isUnion(t) && t.mode === Tt.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return S.isUnion(t) && t.mode === Tt.Sparse;
  }
  get typeId() {
    return u.NONE;
  }
}
Zs = Symbol.toStringTag;
S[Zs] = ((n) => (n.children = null, n.ArrayType = Array, n[Symbol.toStringTag] = "DataType"))(S.prototype);
let ve = class extends S {
  toString() {
    return "Null";
  }
  get typeId() {
    return u.Null;
  }
};
Xs = Symbol.toStringTag;
ve[Xs] = ((n) => n[Symbol.toStringTag] = "Null")(ve.prototype);
class we extends S {
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
        return this.isSigned ? Pn : kn;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
  }
}
Qs = Symbol.toStringTag;
we[Qs] = ((n) => (n.isSigned = null, n.bitWidth = null, n[Symbol.toStringTag] = "Int"))(we.prototype);
class Mn extends we {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(Mn.prototype, "ArrayType", { value: Int32Array });
class Nn extends S {
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
Nn[to] = ((n) => (n.precision = null, n[Symbol.toStringTag] = "Float"))(Nn.prototype);
let di = class extends S {
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
di[eo] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Binary"))(di.prototype);
let hi = class extends S {
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
hi[no] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Utf8"))(hi.prototype);
let fi = class extends S {
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
fi[io] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Bool"))(fi.prototype);
let pi = class extends S {
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
pi[ro] = ((n) => (n.scale = null, n.precision = null, n.ArrayType = Uint32Array, n[Symbol.toStringTag] = "Decimal"))(pi.prototype);
class yi extends S {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return u.Date;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${he[this.unit]}>`;
  }
}
so = Symbol.toStringTag;
yi[so] = ((n) => (n.unit = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Date"))(yi.prototype);
class Cn extends S {
  constructor(t, e) {
    super(), this.unit = t, this.bitWidth = e;
  }
  get typeId() {
    return u.Time;
  }
  toString() {
    return `Time${this.bitWidth}<${j[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return Pn;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
}
oo = Symbol.toStringTag;
Cn[oo] = ((n) => (n.unit = null, n.bitWidth = null, n[Symbol.toStringTag] = "Time"))(Cn.prototype);
class mi extends S {
  constructor(t, e) {
    super(), this.unit = t, this.timezone = e;
  }
  get typeId() {
    return u.Timestamp;
  }
  toString() {
    return `Timestamp<${j[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
ao = Symbol.toStringTag;
mi[ao] = ((n) => (n.unit = null, n.timezone = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Timestamp"))(mi.prototype);
class bi extends S {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return u.Interval;
  }
  toString() {
    return `Interval<${_e[this.unit]}>`;
  }
}
co = Symbol.toStringTag;
bi[co] = ((n) => (n.unit = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Interval"))(bi.prototype);
let gi = class extends S {
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
gi[lo] = ((n) => (n.children = null, n[Symbol.toStringTag] = "List"))(gi.prototype);
class pt extends S {
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
class _i extends S {
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
_i[ho] = ((n) => (n.mode = null, n.typeIds = null, n.children = null, n.typeIdToChildIndex = null, n.ArrayType = Int8Array, n[Symbol.toStringTag] = "Union"))(_i.prototype);
let vi = class extends S {
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
vi[fo] = ((n) => (n.byteWidth = null, n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "FixedSizeBinary"))(vi.prototype);
let wi = class extends S {
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
wi[po] = ((n) => (n.children = null, n.listSize = null, n[Symbol.toStringTag] = "FixedSizeList"))(wi.prototype);
class Si extends S {
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
Si[yo] = ((n) => (n.children = null, n.keysSorted = null, n[Symbol.toStringTag] = "Map_"))(Si.prototype);
const Tc = /* @__PURE__ */ ((n) => () => ++n)(-1);
class rn extends S {
  constructor(t, e, i, r) {
    super(), this.indices = e, this.dictionary = t, this.isOrdered = r || !1, this.id = i == null ? Tc() : typeof i == "number" ? i : i.low;
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
rn[mo] = ((n) => (n.id = null, n.indices = null, n.isOrdered = null, n.dictionary = null, n[Symbol.toStringTag] = "Dictionary"))(rn.prototype);
function oe(n) {
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
class L {
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
    return He(this, t, e);
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
  return typeof t == "number" ? He(n, t, e) : typeof t == "string" && t in u ? He(n, u[t], e) : t && t instanceof S ? He(n, Ss(t), e) : t != null && t.type && t.type instanceof S ? He(n, Ss(t.type), e) : He(n, u.NONE, e);
}
function He(n, t, e = !0) {
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
        case j.SECOND:
          return u.TimeSecond;
        case j.MILLISECOND:
          return u.TimeMillisecond;
        case j.MICROSECOND:
          return u.TimeMicrosecond;
        case j.NANOSECOND:
          return u.TimeNanosecond;
      }
      return u.Time;
    case u.Timestamp:
      switch (n.unit) {
        case j.SECOND:
          return u.TimestampSecond;
        case j.MILLISECOND:
          return u.TimestampMillisecond;
        case j.MICROSECOND:
          return u.TimestampMicrosecond;
        case j.NANOSECOND:
          return u.TimestampNanosecond;
      }
      return u.Timestamp;
    case u.Date:
      switch (n.unit) {
        case he.DAY:
          return u.DateDay;
        case he.MILLISECOND:
          return u.DateMillisecond;
      }
      return u.Date;
    case u.Interval:
      switch (n.unit) {
        case _e.DAY_TIME:
          return u.IntervalDayTime;
        case _e.YEAR_MONTH:
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
        case Tt.Dense:
          return u.DenseUnion;
        case Tt.Sparse:
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
L.prototype.visitInt8 = null;
L.prototype.visitInt16 = null;
L.prototype.visitInt32 = null;
L.prototype.visitInt64 = null;
L.prototype.visitUint8 = null;
L.prototype.visitUint16 = null;
L.prototype.visitUint32 = null;
L.prototype.visitUint64 = null;
L.prototype.visitFloat16 = null;
L.prototype.visitFloat32 = null;
L.prototype.visitFloat64 = null;
L.prototype.visitDateDay = null;
L.prototype.visitDateMillisecond = null;
L.prototype.visitTimestampSecond = null;
L.prototype.visitTimestampMillisecond = null;
L.prototype.visitTimestampMicrosecond = null;
L.prototype.visitTimestampNanosecond = null;
L.prototype.visitTimeSecond = null;
L.prototype.visitTimeMillisecond = null;
L.prototype.visitTimeMicrosecond = null;
L.prototype.visitTimeNanosecond = null;
L.prototype.visitDenseUnion = null;
L.prototype.visitSparseUnion = null;
L.prototype.visitIntervalDayTime = null;
L.prototype.visitIntervalYearMonth = null;
const bo = new Float64Array(1), Je = new Uint32Array(bo.buffer);
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
  const t = (Je[1] & 2147483648) >> 16 & 65535;
  let e = Je[1] & 2146435072, i = 0;
  return e >= 1089470464 ? Je[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, i = (Je[1] & 1048575) >> 10) : e <= 1056964608 ? (i = 1048576 + (Je[1] & 1048575), i = 1048576 + (i << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, i = (Je[1] & 1048575) + 512 >> 10), t | e | i & 65535;
}
class F extends L {
}
function x(n) {
  return (t, e, i) => {
    if (t.setValid(e, i != null))
      return n(t, e, i);
  };
}
const Ec = (n, t, e) => {
  n[t] = Math.trunc(e / 864e5);
}, xr = (n, t, e) => {
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
}, fe = ({ values: n }, t, e) => {
  n[t] = e;
}, Rr = ({ values: n }, t, e) => {
  n[t] = e;
}, vo = ({ values: n }, t, e) => {
  n[t] = Rc(e);
}, Lc = (n, t, e) => {
  switch (n.type.precision) {
    case St.HALF:
      return vo(n, t, e);
    case St.SINGLE:
    case St.DOUBLE:
      return Rr(n, t, e);
  }
}, wo = ({ values: n }, t, e) => {
  Ec(n, t, e.valueOf());
}, So = ({ values: n }, t, e) => {
  xr(n, t * 2, e.valueOf());
}, Uc = ({ stride: n, values: t }, e, i) => {
  t.set(i.subarray(0, n), n * e);
}, Pc = ({ values: n, valueOffsets: t }, e, i) => _o(n, t, e, i), kc = ({ values: n, valueOffsets: t }, e, i) => {
  _o(n, t, e, Ar(i));
}, jc = (n, t, e) => {
  n.type.unit === he.DAY ? wo(n, t, e) : So(n, t, e);
}, Io = ({ values: n }, t, e) => xr(n, t * 2, e / 1e3), Bo = ({ values: n }, t, e) => xr(n, t * 2, e), Ao = ({ values: n }, t, e) => Mc(n, t * 2, e), Oo = ({ values: n }, t, e) => Nc(n, t * 2, e), Vc = (n, t, e) => {
  switch (n.type.unit) {
    case j.SECOND:
      return Io(n, t, e);
    case j.MILLISECOND:
      return Bo(n, t, e);
    case j.MICROSECOND:
      return Ao(n, t, e);
    case j.NANOSECOND:
      return Oo(n, t, e);
  }
}, Fo = ({ values: n }, t, e) => {
  n[t] = e;
}, Do = ({ values: n }, t, e) => {
  n[t] = e;
}, To = ({ values: n }, t, e) => {
  n[t] = e;
}, xo = ({ values: n }, t, e) => {
  n[t] = e;
}, zc = (n, t, e) => {
  switch (n.type.unit) {
    case j.SECOND:
      return Fo(n, t, e);
    case j.MILLISECOND:
      return Do(n, t, e);
    case j.MICROSECOND:
      return To(n, t, e);
    case j.NANOSECOND:
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
  const i = n.type.children.map((s) => Lt.getVisitFn(s.type)), r = e instanceof Map ? Kc(t, e) : e instanceof W ? Hc(t, e) : Array.isArray(e) ? Jc(t, e) : Gc(t, e);
  n.type.children.forEach((s, o) => r(i[o], n.children[o], s, o));
}, Zc = (n, t, e) => {
  n.type.mode === Tt.Dense ? Ro(n, t, e) : Eo(n, t, e);
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
  n.type.unit === _e.DAY_TIME ? Mo(n, t, e) : No(n, t, e);
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
F.prototype.visitBool = x(Cc);
F.prototype.visitInt = x(fe);
F.prototype.visitInt8 = x(fe);
F.prototype.visitInt16 = x(fe);
F.prototype.visitInt32 = x(fe);
F.prototype.visitInt64 = x(fe);
F.prototype.visitUint8 = x(fe);
F.prototype.visitUint16 = x(fe);
F.prototype.visitUint32 = x(fe);
F.prototype.visitUint64 = x(fe);
F.prototype.visitFloat = x(Lc);
F.prototype.visitFloat16 = x(vo);
F.prototype.visitFloat32 = x(Rr);
F.prototype.visitFloat64 = x(Rr);
F.prototype.visitUtf8 = x(kc);
F.prototype.visitBinary = x(Pc);
F.prototype.visitFixedSizeBinary = x(Uc);
F.prototype.visitDate = x(jc);
F.prototype.visitDateDay = x(wo);
F.prototype.visitDateMillisecond = x(So);
F.prototype.visitTimestamp = x(Vc);
F.prototype.visitTimestampSecond = x(Io);
F.prototype.visitTimestampMillisecond = x(Bo);
F.prototype.visitTimestampMicrosecond = x(Ao);
F.prototype.visitTimestampNanosecond = x(Oo);
F.prototype.visitTime = x(zc);
F.prototype.visitTimeSecond = x(Fo);
F.prototype.visitTimeMillisecond = x(Do);
F.prototype.visitTimeMicrosecond = x(To);
F.prototype.visitTimeNanosecond = x(xo);
F.prototype.visitDecimal = x($c);
F.prototype.visitList = x(Yc);
F.prototype.visitStruct = x(qc);
F.prototype.visitUnion = x(Zc);
F.prototype.visitDenseUnion = x(Ro);
F.prototype.visitSparseUnion = x(Eo);
F.prototype.visitDictionary = x(Xc);
F.prototype.visitInterval = x(Qc);
F.prototype.visitIntervalDayTime = x(Mo);
F.prototype.visitIntervalYearMonth = x(No);
F.prototype.visitFixedSizeList = x(tl);
F.prototype.visitMap = x(Wc);
const Lt = new F(), kt = Symbol.for("parent"), tn = Symbol.for("rowIndex");
class Er {
  constructor(t, e) {
    return this[kt] = t, this[tn] = e, new Proxy(this, new nl());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[tn], e = this[kt], i = e.type.children, r = {};
    for (let s = -1, o = i.length; ++s < o; )
      r[i[s].name] = Bt.visit(e.children[s], t);
    return r;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${Rn(t)}: ${Rn(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new el(this[kt], this[tn]);
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
Object.defineProperties(Er.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [kt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [tn]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
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
    return t[kt].type.children.map((e) => e.name);
  }
  has(t, e) {
    return t[kt].type.children.findIndex((i) => i.name === e) !== -1;
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[kt].type.children.findIndex((i) => i.name === e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const i = t[kt].type.children.findIndex((r) => r.name === e);
    if (i !== -1) {
      const r = Bt.visit(t[kt].children[i], t[tn]);
      return Reflect.set(t, e, r), r;
    }
  }
  set(t, e, i) {
    const r = t[kt].type.children.findIndex((s) => s.name === e);
    return r !== -1 ? (Lt.visit(t[kt].children[r], t[tn], i), Reflect.set(t, e, i)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, i) : !1;
  }
}
class I extends L {
}
function D(n) {
  return (t, e) => t.getValid(e) ? n(t, e) : null;
}
const il = (n, t) => 864e5 * n[t], Mr = (n, t) => 4294967296 * n[t + 1] + (n[t] >>> 0), rl = (n, t) => 4294967296 * (n[t + 1] / 1e3) + (n[t] >>> 0) / 1e3, sl = (n, t) => 4294967296 * (n[t + 1] / 1e6) + (n[t] >>> 0) / 1e6, Co = (n) => new Date(n), ol = (n, t) => Co(il(n, t)), al = (n, t) => Co(Mr(n, t)), cl = (n, t) => null, Lo = (n, t, e) => {
  if (e + 1 >= t.length)
    return null;
  const i = t[e], r = t[e + 1];
  return n.subarray(i, r);
}, ll = ({ offset: n, values: t }, e) => {
  const i = n + e;
  return (t[i >> 3] & 1 << i % 8) !== 0;
}, Uo = ({ values: n }, t) => ol(n, t), Po = ({ values: n }, t) => al(n, t * 2), Be = ({ stride: n, values: t }, e) => t[n * e], ul = ({ stride: n, values: t }, e) => go(t[n * e]), ko = ({ values: n }, t) => n[t], dl = ({ stride: n, values: t }, e) => t.subarray(n * e, n * (e + 1)), hl = ({ values: n, valueOffsets: t }, e) => Lo(n, t, e), fl = ({ values: n, valueOffsets: t }, e) => {
  const i = Lo(n, t, e);
  return i !== null ? dr(i) : null;
}, pl = ({ values: n }, t) => n[t], yl = ({ type: n, values: t }, e) => n.precision !== St.HALF ? t[e] : go(t[e]), ml = (n, t) => n.type.unit === he.DAY ? Uo(n, t) : Po(n, t), jo = ({ values: n }, t) => 1e3 * Mr(n, t * 2), Vo = ({ values: n }, t) => Mr(n, t * 2), zo = ({ values: n }, t) => rl(n, t * 2), $o = ({ values: n }, t) => sl(n, t * 2), bl = (n, t) => {
  switch (n.type.unit) {
    case j.SECOND:
      return jo(n, t);
    case j.MILLISECOND:
      return Vo(n, t);
    case j.MICROSECOND:
      return zo(n, t);
    case j.NANOSECOND:
      return $o(n, t);
  }
}, Yo = ({ values: n }, t) => n[t], Wo = ({ values: n }, t) => n[t], Jo = ({ values: n }, t) => n[t], Ho = ({ values: n }, t) => n[t], gl = (n, t) => {
  switch (n.type.unit) {
    case j.SECOND:
      return Yo(n, t);
    case j.MILLISECOND:
      return Wo(n, t);
    case j.MICROSECOND:
      return Jo(n, t);
    case j.NANOSECOND:
      return Ho(n, t);
  }
}, _l = ({ values: n, stride: t }, e) => Tr.decimal(n.subarray(t * e, t * (e + 1))), vl = (n, t) => {
  const { valueOffsets: e, stride: i, children: r } = n, { [t * i]: s, [t * i + 1]: o } = e, c = r[0].slice(s, o - s);
  return new W([c]);
}, wl = (n, t) => {
  const { valueOffsets: e, children: i } = n, { [t]: r, [t + 1]: s } = e, o = i[0];
  return new Nr(o.slice(r, s - r));
}, Sl = (n, t) => new Er(n, t), Il = (n, t) => n.type.mode === Tt.Dense ? Ko(n, t) : Go(n, t), Ko = (n, t) => {
  const e = n.type.typeIdToChildIndex[n.typeIds[t]], i = n.children[e];
  return Bt.visit(i, n.valueOffsets[t]);
}, Go = (n, t) => {
  const e = n.type.typeIdToChildIndex[n.typeIds[t]], i = n.children[e];
  return Bt.visit(i, t);
}, Bl = (n, t) => {
  var e;
  return (e = n.dictionary) === null || e === void 0 ? void 0 : e.get(n.values[t]);
}, Al = (n, t) => n.type.unit === _e.DAY_TIME ? qo(n, t) : Zo(n, t), qo = ({ values: n }, t) => n.subarray(2 * t, 2 * (t + 1)), Zo = ({ values: n }, t) => {
  const e = n[t], i = new Int32Array(2);
  return i[0] = Math.trunc(e / 12), i[1] = Math.trunc(e % 12), i;
}, Ol = (n, t) => {
  const { stride: e, children: i } = n, s = i[0].slice(t * e, e);
  return new W([s]);
};
I.prototype.visitNull = D(cl);
I.prototype.visitBool = D(ll);
I.prototype.visitInt = D(pl);
I.prototype.visitInt8 = D(Be);
I.prototype.visitInt16 = D(Be);
I.prototype.visitInt32 = D(Be);
I.prototype.visitInt64 = D(ko);
I.prototype.visitUint8 = D(Be);
I.prototype.visitUint16 = D(Be);
I.prototype.visitUint32 = D(Be);
I.prototype.visitUint64 = D(ko);
I.prototype.visitFloat = D(yl);
I.prototype.visitFloat16 = D(ul);
I.prototype.visitFloat32 = D(Be);
I.prototype.visitFloat64 = D(Be);
I.prototype.visitUtf8 = D(fl);
I.prototype.visitBinary = D(hl);
I.prototype.visitFixedSizeBinary = D(dl);
I.prototype.visitDate = D(ml);
I.prototype.visitDateDay = D(Uo);
I.prototype.visitDateMillisecond = D(Po);
I.prototype.visitTimestamp = D(bl);
I.prototype.visitTimestampSecond = D(jo);
I.prototype.visitTimestampMillisecond = D(Vo);
I.prototype.visitTimestampMicrosecond = D(zo);
I.prototype.visitTimestampNanosecond = D($o);
I.prototype.visitTime = D(gl);
I.prototype.visitTimeSecond = D(Yo);
I.prototype.visitTimeMillisecond = D(Wo);
I.prototype.visitTimeMicrosecond = D(Jo);
I.prototype.visitTimeNanosecond = D(Ho);
I.prototype.visitDecimal = D(_l);
I.prototype.visitList = D(vl);
I.prototype.visitStruct = D(Sl);
I.prototype.visitUnion = D(Il);
I.prototype.visitDenseUnion = D(Ko);
I.prototype.visitSparseUnion = D(Go);
I.prototype.visitDictionary = D(Bl);
I.prototype.visitInterval = D(Al);
I.prototype.visitIntervalDayTime = D(qo);
I.prototype.visitIntervalYearMonth = D(Zo);
I.prototype.visitFixedSizeList = D(Ol);
I.prototype.visitMap = D(wl);
const Bt = new I(), Jt = Symbol.for("keys"), en = Symbol.for("vals");
class Nr {
  constructor(t) {
    return this[Jt] = new W([t.children[0]]).memoize(), this[en] = t.children[1], new Proxy(this, new Dl());
  }
  [Symbol.iterator]() {
    return new Fl(this[Jt], this[en]);
  }
  get size() {
    return this[Jt].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Jt], e = this[en], i = {};
    for (let r = -1, s = t.length; ++r < s; )
      i[t.get(r)] = Bt.visit(e, r);
    return i;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${Rn(t)}: ${Rn(e)}`).join(", ")}}`;
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
class Dl {
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
    return t[Jt].toArray().map(String);
  }
  has(t, e) {
    return t[Jt].includes(e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Jt].indexOf(e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const i = t[Jt].indexOf(e);
    if (i !== -1) {
      const r = Bt.visit(Reflect.get(t, en), i);
      return Reflect.set(t, e, r), r;
    }
  }
  set(t, e, i) {
    const r = t[Jt].indexOf(e);
    return r !== -1 ? (Lt.visit(Reflect.get(t, en), r, i), Reflect.set(t, e, i)) : Reflect.has(t, e) ? Reflect.set(t, e, i) : !1;
  }
}
Object.defineProperties(Nr.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Jt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [en]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let Is;
function Xo(n, t, e, i) {
  const { length: r = 0 } = n;
  let s = typeof t != "number" ? 0 : t, o = typeof e != "number" ? r : e;
  return s < 0 && (s = (s % r + r) % r), o < 0 && (o = (o % r + r) % r), o < s && (Is = s, s = o, o = Is), o > r && (o = r), i ? i(n, s, o) : [s, o];
}
const Bs = (n) => n !== n;
function hn(n) {
  if (typeof n !== "object" || n === null)
    return Bs(n) ? Bs : (e) => e === n;
  if (n instanceof Date) {
    const e = n.valueOf();
    return (i) => i instanceof Date ? i.valueOf() === e : !1;
  }
  return ArrayBuffer.isView(n) ? (e) => e ? wc(n, e) : !1 : n instanceof Map ? xl(n) : Array.isArray(n) ? Tl(n) : n instanceof W ? Rl(n) : El(n, !0);
}
function Tl(n) {
  const t = [];
  for (let e = -1, i = n.length; ++e < i; )
    t[e] = hn(n[e]);
  return $i(t);
}
function xl(n) {
  let t = -1;
  const e = [];
  for (const i of n.values())
    e[++t] = hn(i);
  return $i(e);
}
function Rl(n) {
  const t = [];
  for (let e = -1, i = n.length; ++e < i; )
    t[e] = hn(n.get(e));
  return $i(t);
}
function El(n, t = !1) {
  const e = Object.keys(n);
  if (!t && e.length === 0)
    return () => !1;
  const i = [];
  for (let r = -1, s = e.length; ++r < s; )
    i[r] = hn(n[e[r]]);
  return $i(i, e);
}
function $i(n, t) {
  return (e) => {
    if (!e || typeof e != "object")
      return !1;
    switch (e.constructor) {
      case Array:
        return Ml(n, e);
      case Map:
        return As(n, e, e.keys());
      case Nr:
      case Er:
      case Object:
      case void 0:
        return As(n, e, t || Object.keys(e));
    }
    return e instanceof W ? Nl(n, e) : !1;
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
function Cr(n, t, e) {
  const i = e.byteLength + 7 & -8;
  if (n > 0 || e.byteLength < i) {
    const r = new Uint8Array(i);
    return r.set(n % 8 === 0 ? e.subarray(n >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      Ii(new Lr(e, n, t, null, Qo)).subarray(0, i)
    )), r;
  }
  return e;
}
function Ii(n) {
  const t = [];
  let e = 0, i = 0, r = 0;
  for (const o of n)
    o && (r |= 1 << i), ++i === 8 && (t[e++] = r, r = i = 0);
  (e === 0 || i > 0) && (t[e++] = r);
  const s = new Uint8Array(t.length + 7 & -8);
  return s.set(t), s;
}
class Lr {
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
    for (const o of new Lr(n, t, e - t, n, Cl))
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
class Z {
  constructor(t, e, i, r, s, o = [], a) {
    this.type = t, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(i || 0, 0)), this._nullCount = Math.floor(Math.max(r || 0, -1));
    let c;
    s instanceof Z ? (this.stride = s.stride, this.values = s.values, this.typeIds = s.typeIds, this.nullBitmap = s.nullBitmap, this.valueOffsets = s.valueOffsets) : (this.stride = oe(t), s && ((c = s[0]) && (this.valueOffsets = c), (c = s[1]) && (this.values = c), (c = s[2]) && (this.nullBitmap = c), (c = s[3]) && (this.typeIds = c))), this.nullable = this._nullCount !== 0 && this.nullBitmap && this.nullBitmap.byteLength > 0;
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
    return new Z(t, e, i, r, s, o, this.dictionary);
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
    r[e >> 3] = (1 << e - (e & -8)) - 1, i > 0 && r.set(Cr(this.offset, e, this.nullBitmap), 0);
    const s = this.buffers;
    return s[se.VALIDITY] = r, this.clone(this.type, 0, t, i + (t - e), s);
  }
  _sliceBuffers(t, e, i, r) {
    let s;
    const { buffers: o } = this;
    return (s = o[se.TYPE]) && (o[se.TYPE] = s.subarray(t, t + e)), (s = o[se.OFFSET]) && (o[se.OFFSET] = s.subarray(t, t + e + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (s = o[se.DATA]) && (o[se.DATA] = r === 6 ? s : s.subarray(i * t, i * (t + e))), o;
  }
  _sliceChildren(t, e, i) {
    return t.map((r) => r.slice(e, i));
  }
}
Z.prototype.children = Object.freeze([]);
class Dn extends L {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["length"]: r = 0 } = t;
    return new Z(e, i, r, 0);
  }
  visitBool(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.ArrayType, t.data), { ["length"]: o = s.length >> 3, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, s, r]);
  }
  visitInt(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, s, r]);
  }
  visitFloat(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, s, r]);
  }
  visitUtf8(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.data), s = k(t.nullBitmap), o = Bn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, a, c, [o, r, s]);
  }
  visitBinary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.data), s = k(t.nullBitmap), o = Bn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, a, c, [o, r, s]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.ArrayType, t.data), { ["length"]: o = s.length / oe(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, s, r]);
  }
  visitDate(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.ArrayType, t.data), { ["length"]: o = s.length / oe(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, s, r]);
  }
  visitTimestamp(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.ArrayType, t.data), { ["length"]: o = s.length / oe(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, s, r]);
  }
  visitTime(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.ArrayType, t.data), { ["length"]: o = s.length / oe(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, s, r]);
  }
  visitDecimal(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.ArrayType, t.data), { ["length"]: o = s.length / oe(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, s, r]);
  }
  visitList(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: r } = t, s = k(t.nullBitmap), o = Bn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, a, c, [o, void 0, s], [r]);
  }
  visitStruct(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["children"]: r = [] } = t, s = k(t.nullBitmap), { length: o = r.reduce((c, { length: d }) => Math.max(c, d), 0), nullCount: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, void 0, s], r);
  }
  visitUnion(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["children"]: r = [] } = t, s = k(t.nullBitmap), o = G(e.ArrayType, t.typeIds), { ["length"]: a = o.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    if (S.isSparseUnion(e))
      return new Z(e, i, a, c, [void 0, void 0, s, o], r);
    const d = Bn(t.valueOffsets);
    return new Z(e, i, a, c, [d, void 0, s, o], r);
  }
  visitDictionary(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.indices.ArrayType, t.data), { ["dictionary"]: o = new W([new Dn().visit({ type: e.dictionary })]) } = t, { ["length"]: a = s.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, a, c, [void 0, s, r], [], o);
  }
  visitInterval(t) {
    const { ["type"]: e, ["offset"]: i = 0 } = t, r = k(t.nullBitmap), s = G(e.ArrayType, t.data), { ["length"]: o = s.length / oe(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, s, r]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: r = new Dn().visit({ type: e.valueType }) } = t, s = k(t.nullBitmap), { ["length"]: o = r.length / oe(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, o, a, [void 0, void 0, s], [r]);
  }
  visitMap(t) {
    const { ["type"]: e, ["offset"]: i = 0, ["child"]: r = new Dn().visit({ type: e.childType }) } = t, s = k(t.nullBitmap), o = Bn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Z(e, i, a, c, [o, void 0, s], [r]);
  }
}
function C(n) {
  return new Dn().visit(n);
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
    const h = Math.max(0, e - c), y = Math.min(i - c, d);
    r.push(a.slice(h, y - h));
  }
  return r.length === 0 && r.push(n[0].slice(0, 0)), r;
}
function Ur(n, t, e, i) {
  let r = 0, s = 0, o = t.length - 1;
  do {
    if (r >= o - 1)
      return e < t[o] ? i(n, r, e - t[r]) : null;
    s = r + Math.trunc((o - r) * 0.5), e < t[s] ? o = s : r = s;
  } while (r < o);
}
function Pr(n, t) {
  return n.getValid(t);
}
function nn(n) {
  function t(e, i, r) {
    return n(e[i], r);
  }
  return function(e) {
    const i = this.data;
    return Ur(i, this._offsets, e, t);
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
    const o = Ur(s, this._offsets, i, e);
    return t = void 0, o;
  };
}
function ra(n) {
  let t;
  function e(i, r, s) {
    let o = s, a = 0, c = 0;
    for (let d = r - 1, h = i.length; ++d < h; ) {
      const y = i[d];
      if (~(a = n(y, t, o)))
        return c + a;
      o = 0, c += y.length;
    }
    return -1;
  }
  return function(i, r) {
    t = i;
    const s = this.data, o = typeof r != "number" ? e(s, 0, 0) : Ur(s, this._offsets, r, e);
    return t = void 0, o;
  };
}
class B extends L {
}
function Pl(n, t) {
  return t === null && n.length > 0 ? 0 : -1;
}
function kl(n, t) {
  const { nullBitmap: e } = n;
  if (!e || n.nullCount <= 0)
    return -1;
  let i = 0;
  for (const r of new Lr(e, n.offset + (t || 0), n.length, e, Qo)) {
    if (!r)
      return i;
    ++i;
  }
  return -1;
}
function E(n, t, e) {
  if (t === void 0)
    return -1;
  if (t === null)
    return kl(n, e);
  const i = Bt.getVisitFn(n), r = hn(t);
  for (let s = (e || 0) - 1, o = n.length; ++s < o; )
    if (r(i(n, s)))
      return s;
  return -1;
}
function sa(n, t, e) {
  const i = Bt.getVisitFn(n), r = hn(t);
  for (let s = (e || 0) - 1, o = n.length; ++s < o; )
    if (r(i(n, s)))
      return s;
  return -1;
}
B.prototype.visitNull = Pl;
B.prototype.visitBool = E;
B.prototype.visitInt = E;
B.prototype.visitInt8 = E;
B.prototype.visitInt16 = E;
B.prototype.visitInt32 = E;
B.prototype.visitInt64 = E;
B.prototype.visitUint8 = E;
B.prototype.visitUint16 = E;
B.prototype.visitUint32 = E;
B.prototype.visitUint64 = E;
B.prototype.visitFloat = E;
B.prototype.visitFloat16 = E;
B.prototype.visitFloat32 = E;
B.prototype.visitFloat64 = E;
B.prototype.visitUtf8 = E;
B.prototype.visitBinary = E;
B.prototype.visitFixedSizeBinary = E;
B.prototype.visitDate = E;
B.prototype.visitDateDay = E;
B.prototype.visitDateMillisecond = E;
B.prototype.visitTimestamp = E;
B.prototype.visitTimestampSecond = E;
B.prototype.visitTimestampMillisecond = E;
B.prototype.visitTimestampMicrosecond = E;
B.prototype.visitTimestampNanosecond = E;
B.prototype.visitTime = E;
B.prototype.visitTimeSecond = E;
B.prototype.visitTimeMillisecond = E;
B.prototype.visitTimeMicrosecond = E;
B.prototype.visitTimeNanosecond = E;
B.prototype.visitDecimal = E;
B.prototype.visitList = E;
B.prototype.visitStruct = E;
B.prototype.visitUnion = E;
B.prototype.visitDenseUnion = sa;
B.prototype.visitSparseUnion = sa;
B.prototype.visitDictionary = E;
B.prototype.visitInterval = E;
B.prototype.visitIntervalDayTime = E;
B.prototype.visitIntervalYearMonth = E;
B.prototype.visitFixedSizeList = E;
B.prototype.visitMap = E;
const Bi = new B();
class A extends L {
}
function T(n) {
  const { type: t } = n;
  if (n.nullCount === 0 && n.stride === 1 && (t.typeId === u.Timestamp || t instanceof we && t.bitWidth !== 64 || t instanceof Cn && t.bitWidth !== 64 || t instanceof Nn && t.precision !== St.HALF))
    return new Os(n.data.length, (i) => {
      const r = n.data[i];
      return r.values.subarray(0, r.length)[Symbol.iterator]();
    });
  let e = 0;
  return new Os(n.data.length, (i) => {
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
A.prototype.visitNull = T;
A.prototype.visitBool = T;
A.prototype.visitInt = T;
A.prototype.visitInt8 = T;
A.prototype.visitInt16 = T;
A.prototype.visitInt32 = T;
A.prototype.visitInt64 = T;
A.prototype.visitUint8 = T;
A.prototype.visitUint16 = T;
A.prototype.visitUint32 = T;
A.prototype.visitUint64 = T;
A.prototype.visitFloat = T;
A.prototype.visitFloat16 = T;
A.prototype.visitFloat32 = T;
A.prototype.visitFloat64 = T;
A.prototype.visitUtf8 = T;
A.prototype.visitBinary = T;
A.prototype.visitFixedSizeBinary = T;
A.prototype.visitDate = T;
A.prototype.visitDateDay = T;
A.prototype.visitDateMillisecond = T;
A.prototype.visitTimestamp = T;
A.prototype.visitTimestampSecond = T;
A.prototype.visitTimestampMillisecond = T;
A.prototype.visitTimestampMicrosecond = T;
A.prototype.visitTimestampNanosecond = T;
A.prototype.visitTime = T;
A.prototype.visitTimeSecond = T;
A.prototype.visitTimeMillisecond = T;
A.prototype.visitTimeMicrosecond = T;
A.prototype.visitTimeNanosecond = T;
A.prototype.visitDecimal = T;
A.prototype.visitList = T;
A.prototype.visitStruct = T;
A.prototype.visitUnion = T;
A.prototype.visitDenseUnion = T;
A.prototype.visitSparseUnion = T;
A.prototype.visitDictionary = T;
A.prototype.visitInterval = T;
A.prototype.visitIntervalDayTime = T;
A.prototype.visitIntervalYearMonth = T;
A.prototype.visitFixedSizeList = T;
A.prototype.visitMap = T;
const kr = new A(), Vl = (n, t) => n + t;
class Ae extends L {
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
    return t.type.unit === j.SECOND ? 4 : 8;
  }
  visitInterval(t, e) {
    return (t.type.unit + 1) * 4;
  }
  visitStruct(t, e) {
    return t.children.reduce((i, r) => i + ee.visit(r, e), 0);
  }
  visitFixedSizeBinary(t, e) {
    return t.type.byteWidth;
  }
  visitMap(t, e) {
    return 8 + t.children.reduce((i, r) => i + ee.visit(r, e), 0);
  }
  visitDictionary(t, e) {
    var i;
    return t.type.indices.bitWidth / 8 + (((i = t.dictionary) === null || i === void 0 ? void 0 : i.getByteLength(t.values[e])) || 0);
  }
}
const zl = ({ valueOffsets: n }, t) => 8 + (n[t + 1] - n[t]), $l = ({ valueOffsets: n }, t) => 8 + (n[t + 1] - n[t]), Yl = ({ valueOffsets: n, stride: t, children: e }, i) => {
  const r = e[0], { [i * t]: s } = n, { [i * t + 1]: o } = n, a = ee.getVisitFn(r.type), c = r.slice(s, o - s);
  let d = 8;
  for (let h = -1, y = o - s; ++h < y; )
    d += a(c, h);
  return d;
}, Wl = ({ stride: n, children: t }, e) => {
  const i = t[0], r = i.slice(e * n, n), s = ee.getVisitFn(i.type);
  let o = 0;
  for (let a = -1, c = r.length; ++a < c; )
    o += s(r, a);
  return o;
}, Jl = (n, t) => n.type.mode === Tt.Dense ? oa(n, t) : aa(n, t), oa = ({ type: n, children: t, typeIds: e, valueOffsets: i }, r) => {
  const s = n.typeIdToChildIndex[e[r]];
  return 8 + ee.visit(t[s], i[r]);
}, aa = ({ children: n }, t) => 4 + ee.visitMany(n, n.map(() => t)).reduce(Vl, 0);
Ae.prototype.visitUtf8 = zl;
Ae.prototype.visitBinary = $l;
Ae.prototype.visitList = Yl;
Ae.prototype.visitFixedSizeList = Wl;
Ae.prototype.visitUnion = Jl;
Ae.prototype.visitDenseUnion = oa;
Ae.prototype.visitSparseUnion = aa;
const ee = new Ae();
var ca;
const la = {}, ua = {};
class W {
  constructor(t) {
    var e, i, r;
    const s = t[0] instanceof W ? t.flatMap((a) => a.data) : t;
    if (s.length === 0 || s.some((a) => !(a instanceof Z)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (e = s[0]) === null || e === void 0 ? void 0 : e.type;
    switch (s.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: c, indexOf: d, byteLength: h } = la[o.typeId], y = s[0];
        this.isValid = (g) => Pr(y, g), this.get = (g) => a(y, g), this.set = (g, m) => c(y, g, m), this.indexOf = (g) => d(y, g), this.getByteLength = (g) => h(y, g), this._offsets = [0, y.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, ua[o.typeId]), this._offsets = ea(s);
        break;
    }
    this.data = s, this.type = o, this.stride = oe(o), this.numChildren = (r = (i = o.children) === null || i === void 0 ? void 0 : i.length) !== null && r !== void 0 ? r : 0, this.length = this._offsets[this._offsets.length - 1];
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
    return new W(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    return new W(Xo(this, t, e, ({ data: i, _offsets: r }, s, o) => na(i, r, s, o)));
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
    return t > -1 && t < this.numChildren ? new W(this.data.map(({ children: e }) => e[t])) : null;
  }
  get isMemoized() {
    return S.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
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
    if (S.isDictionary(this.type)) {
      const t = new Ai(this.data[0].dictionary), e = this.data.map((i) => {
        const r = i.clone();
        return r.dictionary = t, r;
      });
      return new W(e);
    }
    return new Ai(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A a vector without memoization.
   */
  unmemoize() {
    if (S.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), e = this.data.map((i) => {
        const r = i.clone();
        return r.dictionary = t, r;
      });
      return new W(e);
    }
    return this;
  }
}
ca = Symbol.toStringTag;
W[ca] = ((n) => {
  n.type = S.prototype, n.data = [], n.length = 0, n.stride = 1, n.numChildren = 0, n._nullCount = -1, n._byteLength = -1, n._offsets = new Uint32Array([0]), n[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(u).map((e) => u[e]).filter((e) => typeof e == "number" && e !== u.NONE);
  for (const e of t) {
    const i = Bt.getVisitFnByTypeId(e), r = Lt.getVisitFnByTypeId(e), s = Bi.getVisitFnByTypeId(e), o = ee.getVisitFnByTypeId(e);
    la[e] = { get: i, set: r, indexOf: s, byteLength: o }, ua[e] = Object.create(n, {
      isValid: { value: nn(Pr) },
      get: { value: nn(Bt.getVisitFnByTypeId(e)) },
      set: { value: ia(Lt.getVisitFnByTypeId(e)) },
      indexOf: { value: ra(Bi.getVisitFnByTypeId(e)) },
      getByteLength: { value: nn(ee.getVisitFnByTypeId(e)) }
    });
  }
  return "Vector";
})(W.prototype);
class Ai extends W {
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
      value: (o, a) => new Ai(r.call(this, o, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new W(this.data)
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
const sr = 2, Ht = 4, ce = 4, q = 4, me = new Int32Array(2), Fs = new Float32Array(me.buffer), Ds = new Float64Array(me.buffer), ni = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
let ue = class br {
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
ue.ZERO = new ue(0, 0);
var gr;
(function(n) {
  n[n.UTF8_BYTES = 1] = "UTF8_BYTES", n[n.UTF16_STRING = 2] = "UTF16_STRING";
})(gr || (gr = {}));
let sn = class da {
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
    return new ue(this.readInt32(t), this.readInt32(t + 4));
  }
  readUint64(t) {
    return new ue(this.readUint32(t), this.readUint32(t + 4));
  }
  readFloat32(t) {
    return me[0] = this.readInt32(t), Fs[0];
  }
  readFloat64(t) {
    return me[ni ? 0 : 1] = this.readInt32(t), me[ni ? 1 : 0] = this.readInt32(t + 4), Ds[0];
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
    Fs[0] = e, this.writeInt32(t, me[0]);
  }
  writeFloat64(t, e) {
    Ds[0] = e, this.writeInt32(t, me[ni ? 0 : 1]), this.writeInt32(t + 4, me[ni ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + Ht + ce)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < ce; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + Ht + e));
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
    if (t += Ht, e === gr.UTF8_BYTES)
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
    return t + this.readInt32(t) + Ht;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != ce)
      throw new Error("FlatBuffers: file identifier must be length " + ce);
    for (let e = 0; e < ce; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + Ht + e))
        return !1;
    return !0;
  }
  /**
   * A helper function to avoid generated code depending on this file directly.
   */
  createLong(t, e) {
    return ue.create(t, e);
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
    t ? e = t : e = 1024, this.bb = sn.allocate(e), this.space = e;
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
    const i = e << 1, r = sn.allocate(i);
    return r.setPosition(i - e), r.bytes().set(t.bytes(), i - e), r;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(Ht, 0), this.writeInt32(this.offset() - t + Ht);
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
    const r = i ? q : 0;
    if (e) {
      const s = e;
      if (this.prep(this.minalign, Ht + ce + r), s.length != ce)
        throw new Error("FlatBuffers: file identifier must be length " + ce);
      for (let o = ce - 1; o >= 0; o--)
        this.writeInt8(s.charCodeAt(o));
    }
    this.prep(this.minalign, Ht + r), this.addOffset(t), r && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
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
    this.notNested(), this.vector_num_elems = e, this.prep(Ht, t * e), this.prep(i, t * e);
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
    return ue.create(t, e);
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
class lt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsKeyValue(t, e) {
    return (e || new lt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, e) {
    return t.setPosition(t.position() + q), (e || new lt()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return lt.startKeyValue(t), lt.addKey(t, e), lt.addValue(t, i), lt.endKeyValue(t);
  }
}
var on;
(function(n) {
  n[n.V1 = 0] = "V1", n[n.V2 = 1] = "V2", n[n.V3 = 2] = "V3", n[n.V4 = 3] = "V4", n[n.V5 = 4] = "V5";
})(on || (on = {}));
var an;
(function(n) {
  n[n.Little = 0] = "Little", n[n.Big = 1] = "Big";
})(an || (an = {}));
var Oi;
(function(n) {
  n[n.DenseArray = 0] = "DenseArray";
})(Oi || (Oi = {}));
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
    return t.setPosition(t.position() + q), (e || new Ft()).__init(t.readInt32(t.position()) + t.position(), t);
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
class le {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryEncoding(t, e) {
    return (e || new le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, e) {
    return t.setPosition(t.position() + q), (e || new le()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Oi.DenseArray;
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
    t.addFieldInt16(3, e, Oi.DenseArray);
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
    return t.setPosition(t.position() + q), (e || new Re()).__init(t.readInt32(t.position()) + t.position(), t);
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
class Ee {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBool(t, e) {
    return (e || new Ee()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, e) {
    return t.setPosition(t.position() + q), (e || new Ee()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return Ee.startBool(t), Ee.endBool(t);
  }
}
var Fi;
(function(n) {
  n[n.DAY = 0] = "DAY", n[n.MILLISECOND = 1] = "MILLISECOND";
})(Fi || (Fi = {}));
let si = class Ke {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDate(t, e) {
    return (e || new Ke()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, e) {
    return t.setPosition(t.position() + q), (e || new Ke()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Fi.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Fi.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, e) {
    return Ke.startDate(t), Ke.addUnit(t, e), Ke.endDate(t);
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
    return t.setPosition(t.position() + q), (e || new _t()).__init(t.readInt32(t.position()) + t.position(), t);
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
var cn;
(function(n) {
  n[n.SECOND = 0] = "SECOND", n[n.MILLISECOND = 1] = "MILLISECOND", n[n.MICROSECOND = 2] = "MICROSECOND", n[n.NANOSECOND = 3] = "NANOSECOND";
})(cn || (cn = {}));
class Kt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeBinary(t, e) {
    return (e || new Kt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, e) {
    return t.setPosition(t.position() + q), (e || new Kt()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Kt.startFixedSizeBinary(t), Kt.addByteWidth(t, e), Kt.endFixedSizeBinary(t);
  }
}
class Gt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeList(t, e) {
    return (e || new Gt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, e) {
    return t.setPosition(t.position() + q), (e || new Gt()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Gt.startFixedSizeList(t), Gt.addListSize(t, e), Gt.endFixedSizeList(t);
  }
}
var Di;
(function(n) {
  n[n.HALF = 0] = "HALF", n[n.SINGLE = 1] = "SINGLE", n[n.DOUBLE = 2] = "DOUBLE";
})(Di || (Di = {}));
class qt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFloatingPoint(t, e) {
    return (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, e) {
    return t.setPosition(t.position() + q), (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Di.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, e) {
    t.addFieldInt16(0, e, Di.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, e) {
    return qt.startFloatingPoint(t), qt.addPrecision(t, e), qt.endFloatingPoint(t);
  }
}
var Ti;
(function(n) {
  n[n.YEAR_MONTH = 0] = "YEAR_MONTH", n[n.DAY_TIME = 1] = "DAY_TIME", n[n.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Ti || (Ti = {}));
class Zt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInterval(t, e) {
    return (e || new Zt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, e) {
    return t.setPosition(t.position() + q), (e || new Zt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ti.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Ti.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, e) {
    return Zt.startInterval(t), Zt.addUnit(t, e), Zt.endInterval(t);
  }
}
class Me {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsList(t, e) {
    return (e || new Me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, e) {
    return t.setPosition(t.position() + q), (e || new Me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Me.startList(t), Me.endList(t);
  }
}
let oi = class Ge {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMap(t, e) {
    return (e || new Ge()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, e) {
    return t.setPosition(t.position() + q), (e || new Ge()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Ge.startMap(t), Ge.addKeysSorted(t, e), Ge.endMap(t);
  }
};
class Ne {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsNull(t, e) {
    return (e || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, e) {
    return t.setPosition(t.position() + q), (e || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return Ne.startNull(t), Ne.endNull(t);
  }
}
class Ce {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsStruct_(t, e) {
    return (e || new Ce()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, e) {
    return t.setPosition(t.position() + q), (e || new Ce()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return Ce.startStruct_(t), Ce.endStruct_(t);
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
    return t.setPosition(t.position() + q), (e || new Nt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : cn.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, cn.MILLISECOND);
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
    return t.setPosition(t.position() + q), (e || new Ct()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : cn.SECOND;
  }
  timezone(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, cn.SECOND);
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
var xi;
(function(n) {
  n[n.Sparse = 0] = "Sparse", n[n.Dense = 1] = "Dense";
})(xi || (xi = {}));
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
    return t.setPosition(t.position() + q), (e || new vt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : xi.Sparse;
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
    t.addFieldInt16(0, e, xi.Sparse);
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
class Le {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUtf8(t, e) {
    return (e || new Le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, e) {
    return t.setPosition(t.position() + q), (e || new Le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Le.startUtf8(t), Le.endUtf8(t);
  }
}
var tt;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Null = 1] = "Null", n[n.Int = 2] = "Int", n[n.FloatingPoint = 3] = "FloatingPoint", n[n.Binary = 4] = "Binary", n[n.Utf8 = 5] = "Utf8", n[n.Bool = 6] = "Bool", n[n.Decimal = 7] = "Decimal", n[n.Date = 8] = "Date", n[n.Time = 9] = "Time", n[n.Timestamp = 10] = "Timestamp", n[n.Interval = 11] = "Interval", n[n.List = 12] = "List", n[n.Struct_ = 13] = "Struct_", n[n.Union = 14] = "Union", n[n.FixedSizeBinary = 15] = "FixedSizeBinary", n[n.FixedSizeList = 16] = "FixedSizeList", n[n.Map = 17] = "Map", n[n.Duration = 18] = "Duration", n[n.LargeBinary = 19] = "LargeBinary", n[n.LargeUtf8 = 20] = "LargeUtf8", n[n.LargeList = 21] = "LargeList";
})(tt || (tt = {}));
let Et = class ai {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsField(t, e) {
    return (e || new ai()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, e) {
    return t.setPosition(t.position() + q), (e || new ai()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return t ? this.bb.readUint8(this.bb_pos + t) : tt.NONE;
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
    return e ? (t || new le()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, e) {
    const i = this.bb.__offset(this.bb_pos, 14);
    return i ? (e || new ai()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
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
    return i ? (e || new lt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
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
    t.addFieldInt8(2, e, tt.NONE);
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
}, Yt = class re {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSchema(t, e) {
    return (e || new re()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, e) {
    return t.setPosition(t.position() + q), (e || new re()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : an.Little;
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
    return i ? (e || new lt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
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
    t.addFieldInt16(0, e, an.Little);
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
    return re.startSchema(t), re.addEndianness(t, e), re.addFields(t, i), re.addCustomMetadata(t, r), re.addFeatures(t, s), re.endSchema(t);
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
    return t.setPosition(t.position() + q), (e || new Ot()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : on.V1;
  }
  schema(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new Yt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
    return i ? (e || new lt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, on.V1);
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
class J {
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
    return new J(i, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const e = t.map((i) => this.fields[i]).filter(Boolean);
    return new J(e, this.metadata);
  }
  assign(...t) {
    const e = t[0] instanceof J ? t[0] : Array.isArray(t[0]) ? new J(t[0]) : new J(t), i = [...this.fields], r = ii(ii(/* @__PURE__ */ new Map(), this.metadata), e.metadata), s = e.fields.filter((a) => {
      const c = i.findIndex((d) => d.name === a.name);
      return ~c ? (i[c] = a.clone({
        metadata: ii(ii(/* @__PURE__ */ new Map(), i[c].metadata), a.metadata)
      })) && !1 : !0;
    }), o = _r(s, /* @__PURE__ */ new Map());
    return new J([...i, ...s], r, new Map([...this.dictionaries, ...o]));
  }
}
J.prototype.fields = null;
J.prototype.metadata = null;
J.prototype.dictionaries = null;
class X {
  constructor(t, e, i = !1, r) {
    this.name = t, this.type = e, this.nullable = i, this.metadata = r || /* @__PURE__ */ new Map();
  }
  /** @nocollapse */
  static new(...t) {
    let [e, i, r, s] = t;
    return t[0] && typeof t[0] == "object" && ({ name: e } = t[0], i === void 0 && (i = t[0].type), r === void 0 && (r = t[0].nullable), s === void 0 && (s = t[0].metadata)), new X(`${e}`, i, r, s);
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
    return !t[0] || typeof t[0] != "object" ? [e = this.name, i = this.type, r = this.nullable, s = this.metadata] = t : { name: e = this.name, type: i = this.type, nullable: r = this.nullable, metadata: s = this.metadata } = t[0], X.new(e, i, r, s);
  }
}
X.prototype.type = null;
X.prototype.name = null;
X.prototype.nullable = null;
X.prototype.metadata = null;
function ii(n, t) {
  return new Map([...n || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function _r(n, t = /* @__PURE__ */ new Map()) {
  for (let e = -1, i = n.length; ++e < i; ) {
    const s = n[e].type;
    if (S.isDictionary(s)) {
      if (!t.has(s.id))
        t.set(s.id, s.dictionary);
      else if (t.get(s.id) !== s.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    s.children && s.children.length > 0 && _r(s.children, t);
  }
  return t;
}
var Ts = ue, Hl = ha, Kl = sn;
class Ln {
  constructor(t, e = Dt.V4, i, r) {
    this.schema = t, this.version = e, i && (this._recordBatches = i), r && (this._dictionaryBatches = r);
  }
  /** @nocollapse */
  static decode(t) {
    t = new Kl(k(t));
    const e = Ot.getRootAsFooter(t), i = J.decode(e.schema());
    return new Gl(i, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new Hl(), i = J.encode(e, t.schema);
    Ot.startRecordBatchesVector(e, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      Se.encode(e, o);
    const r = e.endVector();
    Ot.startDictionariesVector(e, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      Se.encode(e, o);
    const s = e.endVector();
    return Ot.startFooter(e), Ot.addSchema(e, i), Ot.addVersion(e, Dt.V4), Ot.addRecordBatches(e, r), Ot.addDictionaries(e, s), Ot.finishFooterBuffer(e, Ot.endFooter(e)), e.asUint8Array();
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
class Gl extends Ln {
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
        return Se.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return Se.decode(e);
    }
    return null;
  }
}
class Se {
  constructor(t, e, i) {
    this.metaDataLength = t, this.offset = typeof i == "number" ? i : i.low, this.bodyLength = typeof e == "number" ? e : e.low;
  }
  /** @nocollapse */
  static decode(t) {
    return new Se(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: i } = e, r = new Ts(e.offset, 0), s = new Ts(e.bodyLength, 0);
    return mr.createBlock(t, r, i, s);
  }
}
const et = Object.freeze({ done: !0, value: void 0 });
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
class jr {
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
class ql extends jr {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return w(this, void 0, void 0, function* () {
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
        t.shift().resolve(et);
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
    return w(this, void 0, void 0, function* () {
      return yield this.abort(t), et;
    });
  }
  return(t) {
    return w(this, void 0, void 0, function* () {
      return yield this.close(), et;
    });
  }
  read(t) {
    return w(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return w(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((e, i) => {
      this.resolvers.push({ resolve: e, reject: i });
    }) : Promise.resolve(et);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
class ci extends ql {
  write(t) {
    if ((t = k(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? dr(this.toUint8Array(!0)) : this.toUint8Array(!1).then(dr);
  }
  toUint8Array(t = !1) {
    return t ? te(this._values)[0] : w(this, void 0, void 0, function* () {
      var e, i;
      const r = [];
      let s = 0;
      try {
        for (var o = Ue(this), a; a = yield o.next(), !a.done; ) {
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
      return te(r, s)[0];
    });
  }
}
class Ri {
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
class ln {
  constructor(t) {
    t instanceof ln ? this.source = t.source : t instanceof ci ? this.source = new xe(Mt.fromAsyncIterable(t)) : Ks(t) ? this.source = new xe(Mt.fromNodeStream(t)) : Or(t) ? this.source = new xe(Mt.fromDOMStream(t)) : Hs(t) ? this.source = new xe(Mt.fromDOMStream(t.body)) : jn(t) ? this.source = new xe(Mt.fromIterable(t)) : ge(t) ? this.source = new xe(Mt.fromAsyncIterable(t)) : dn(t) && (this.source = new xe(Mt.fromAsyncIterable(t)));
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
    return Object.create(this.source.throw && this.source.throw(t) || et);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || et);
  }
}
class xe {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
  }
  cancel(t) {
    return w(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return w(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return w(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t, e = "read") {
    return w(this, void 0, void 0, function* () {
      return yield this.source.next({ cmd: e, size: t });
    });
  }
  throw(t) {
    return w(this, void 0, void 0, function* () {
      const e = this.source.throw && (yield this.source.throw(t)) || et;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
  return(t) {
    return w(this, void 0, void 0, function* () {
      const e = this.source.return && (yield this.source.return(t)) || et;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
}
class Rs extends Ri {
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
class Ei extends ln {
  constructor(t, e) {
    super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = w(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return w(this, void 0, void 0, function* () {
      const { buffer: e, byteOffset: i } = yield this.readAt(t, 4);
      return new DataView(e, i).getInt32(0, !0);
    });
  }
  seek(t) {
    return w(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return w(this, void 0, void 0, function* () {
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
    return w(this, void 0, void 0, function* () {
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
    return w(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return w(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
  return(t) {
    return w(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
}
const Xl = 65536;
function Ze(n) {
  return n < 0 && (n = 4294967295 + n + 1), `0x${n.toString(16)}`;
}
const un = 8, Vr = [
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
    return `${Ze(this.buffer[1])} ${Ze(this.buffer[0])}`;
  }
}
class H extends pa {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return H.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return H.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const i = t.length, r = new H(e);
    for (let s = 0; s < i; ) {
      const o = un < i - s ? un : i - s, a = new H(new Uint32Array([Number.parseInt(t.slice(s, s + o), 10), 0])), c = new H(new Uint32Array([Vr[o], 0]));
      r.times(c), r.plus(a), s += o;
    }
    return r;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let i = -1, r = t.length; ++i < r; )
      H.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 2 * i * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new H(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new H(new Uint32Array(t.buffer)).plus(e);
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
      const a = un < r - o ? un : r - o, c = new gt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])), d = new gt(new Uint32Array([Vr[a], 0]));
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
class Wt {
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
    const e = new H(new Uint32Array([this.buffer[3], 0])), i = new H(new Uint32Array([this.buffer[2], 0])), r = new H(new Uint32Array([this.buffer[1], 0])), s = new H(new Uint32Array([this.buffer[0], 0])), o = new H(new Uint32Array([t.buffer[3], 0])), a = new H(new Uint32Array([t.buffer[2], 0])), c = new H(new Uint32Array([t.buffer[1], 0])), d = new H(new Uint32Array([t.buffer[0], 0]));
    let h = H.multiply(s, d);
    this.buffer[0] = h.low();
    const y = new H(new Uint32Array([h.high(), 0]));
    return h = H.multiply(r, d), y.plus(h), h = H.multiply(s, c), y.plus(h), this.buffer[1] = y.low(), this.buffer[3] = y.lessThan(h) ? 1 : 0, this.buffer[2] = y.high(), new H(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(H.multiply(i, d)).plus(H.multiply(r, c)).plus(H.multiply(s, a)), this.buffer[3] += H.multiply(e, d).plus(H.multiply(i, c)).plus(H.multiply(r, a)).plus(H.multiply(s, o)).low(), this;
  }
  plus(t) {
    const e = new Uint32Array(4);
    return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this;
  }
  hex() {
    return `${Ze(this.buffer[3])} ${Ze(this.buffer[2])} ${Ze(this.buffer[1])} ${Ze(this.buffer[0])}`;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new Wt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new Wt(new Uint32Array(t.buffer)).plus(e);
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(4)) {
    return Wt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(4)) {
    return Wt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(4)) {
    const i = t.startsWith("-"), r = t.length, s = new Wt(e);
    for (let o = i ? 1 : 0; o < r; ) {
      const a = un < r - o ? un : r - o, c = new Wt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])), d = new Wt(new Uint32Array([Vr[a], 0, 0, 0]));
      s.times(d), s.plus(c), o += a;
    }
    return i ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 4);
    for (let i = -1, r = t.length; ++i < r; )
      Wt.from(t[i], new Uint32Array(e.buffer, e.byteOffset + 4 * 4 * i, 4));
    return e;
  }
}
class ya extends L {
  constructor(t, e, i, r) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = i, this.dictionaries = r;
  }
  visit(t) {
    return super.visit(t instanceof X ? t.type : t);
  }
  visitNull(t, { length: e } = this.nextFieldNode()) {
    return C({ type: t, length: e });
  }
  visitBool(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitInt(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFloat(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitUtf8(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDate(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTimestamp(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitTime(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitDecimal(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitList(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), children: this.visitMany(t.children) });
  }
  visitUnion(t) {
    return t.mode === Tt.Sparse ? this.visitSparseUnion(t) : this.visitDenseUnion(t);
  }
  visitDenseUnion(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: e, nullCount: i } = this.nextFieldNode()) {
    return C({ type: t, length: e, nullCount: i, nullBitmap: this.readNullBitmap(t, i), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
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
    return e <= 0 ? new Uint8Array(0) : Ii(this.sources[i]);
  }
  readOffsets(t, { offset: e } = this.nextBufferRange()) {
    return G(Uint8Array, G(Int32Array, this.sources[e]));
  }
  readTypeIds(t, { offset: e } = this.nextBufferRange()) {
    return G(Uint8Array, G(t.ArrayType, this.sources[e]));
  }
  readData(t, { offset: e } = this.nextBufferRange()) {
    const { sources: i } = this;
    return S.isTimestamp(t) || (S.isInt(t) || S.isTime(t)) && t.bitWidth === 64 || S.isDate(t) && t.unit === he.MILLISECOND ? G(Uint8Array, gt.convertArray(i[e])) : S.isDecimal(t) ? G(Uint8Array, Wt.convertArray(i[e])) : S.isBinary(t) || S.isFixedSizeBinary(t) ? tu(i[e]) : S.isBool(t) ? Ii(i[e]) : S.isUtf8(t) ? Ar(i[e].join("")) : G(Uint8Array, G(t.ArrayType, i[e].map((r) => +r)));
  }
}
function tu(n) {
  const t = n.join(""), e = new Uint8Array(t.length / 2);
  for (let i = 0; i < t.length; i += 2)
    e[i >> 1] = Number.parseInt(t.slice(i, i + 2), 16);
  return e;
}
class O extends L {
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
function Vn(n, t) {
  return n === t || At(n, t);
}
function pe(n, t) {
  return n === t || At(n, t) && n.bitWidth === t.bitWidth && n.isSigned === t.isSigned;
}
function Yi(n, t) {
  return n === t || At(n, t) && n.precision === t.precision;
}
function eu(n, t) {
  return n === t || At(n, t) && n.byteWidth === t.byteWidth;
}
function zr(n, t) {
  return n === t || At(n, t) && n.unit === t.unit;
}
function zn(n, t) {
  return n === t || At(n, t) && n.unit === t.unit && n.timezone === t.timezone;
}
function $n(n, t) {
  return n === t || At(n, t) && n.unit === t.unit && n.bitWidth === t.bitWidth;
}
function nu(n, t) {
  return n === t || At(n, t) && n.children.length === t.children.length && Ie.compareManyFields(n.children, t.children);
}
function iu(n, t) {
  return n === t || At(n, t) && n.children.length === t.children.length && Ie.compareManyFields(n.children, t.children);
}
function $r(n, t) {
  return n === t || At(n, t) && n.mode === t.mode && n.typeIds.every((e, i) => e === t.typeIds[i]) && Ie.compareManyFields(n.children, t.children);
}
function ru(n, t) {
  return n === t || At(n, t) && n.id === t.id && n.isOrdered === t.isOrdered && Ie.visit(n.indices, t.indices) && Ie.visit(n.dictionary, t.dictionary);
}
function Yr(n, t) {
  return n === t || At(n, t) && n.unit === t.unit;
}
function su(n, t) {
  return n === t || At(n, t) && n.listSize === t.listSize && n.children.length === t.children.length && Ie.compareManyFields(n.children, t.children);
}
function ou(n, t) {
  return n === t || At(n, t) && n.keysSorted === t.keysSorted && n.children.length === t.children.length && Ie.compareManyFields(n.children, t.children);
}
O.prototype.visitNull = Vn;
O.prototype.visitBool = Vn;
O.prototype.visitInt = pe;
O.prototype.visitInt8 = pe;
O.prototype.visitInt16 = pe;
O.prototype.visitInt32 = pe;
O.prototype.visitInt64 = pe;
O.prototype.visitUint8 = pe;
O.prototype.visitUint16 = pe;
O.prototype.visitUint32 = pe;
O.prototype.visitUint64 = pe;
O.prototype.visitFloat = Yi;
O.prototype.visitFloat16 = Yi;
O.prototype.visitFloat32 = Yi;
O.prototype.visitFloat64 = Yi;
O.prototype.visitUtf8 = Vn;
O.prototype.visitBinary = Vn;
O.prototype.visitFixedSizeBinary = eu;
O.prototype.visitDate = zr;
O.prototype.visitDateDay = zr;
O.prototype.visitDateMillisecond = zr;
O.prototype.visitTimestamp = zn;
O.prototype.visitTimestampSecond = zn;
O.prototype.visitTimestampMillisecond = zn;
O.prototype.visitTimestampMicrosecond = zn;
O.prototype.visitTimestampNanosecond = zn;
O.prototype.visitTime = $n;
O.prototype.visitTimeSecond = $n;
O.prototype.visitTimeMillisecond = $n;
O.prototype.visitTimeMicrosecond = $n;
O.prototype.visitTimeNanosecond = $n;
O.prototype.visitDecimal = Vn;
O.prototype.visitList = nu;
O.prototype.visitStruct = iu;
O.prototype.visitUnion = $r;
O.prototype.visitDenseUnion = $r;
O.prototype.visitSparseUnion = $r;
O.prototype.visitDictionary = ru;
O.prototype.visitInterval = Yr;
O.prototype.visitIntervalDayTime = Yr;
O.prototype.visitIntervalYearMonth = Yr;
O.prototype.visitFixedSizeList = su;
O.prototype.visitMap = ou;
const Ie = new O();
function vr(n, t) {
  return Ie.compareSchemas(n, t);
}
function or(n, t) {
  return au(n, t.map((e) => e.data.concat()));
}
function au(n, t) {
  const e = [...n.fields], i = [], r = { numBatches: t.reduce((y, g) => Math.max(y, g.length), 0) };
  let s = 0, o = 0, a = -1;
  const c = t.length;
  let d, h = [];
  for (; r.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
      h[a] = d = t[a].shift(), o = Math.min(o, d ? d.length : o);
    Number.isFinite(o) && (h = cu(e, o, h, t, r), o > 0 && (i[s++] = C({
      type: new pt(e),
      length: o,
      nullCount: 0,
      children: h.slice()
    })));
  }
  return [
    n = n.assign(e),
    i.map((y) => new wt(n, y))
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
      const y = n[a];
      n[a] = y.clone({ nullable: !0 }), e[a] = (s = d == null ? void 0 : d._changeLengthAndBackfillNullBitmap(t)) !== null && s !== void 0 ? s : C({
        type: y.type,
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
      return this.batches = [], this.schema = new J([]), this._offsets = [0], this;
    let r, s;
    t[0] instanceof J && (r = t.shift()), t[t.length - 1] instanceof Uint32Array && (s = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof wt)
          return [c];
        if (c instanceof ft)
          return c.batches;
        if (c instanceof Z) {
          if (c.type instanceof pt)
            return [new wt(new J(c.type.children), c)];
        } else {
          if (Array.isArray(c))
            return c.flatMap((d) => o(d));
          if (typeof c[Symbol.iterator] == "function")
            return [...c].flatMap((d) => o(d));
          if (typeof c == "object") {
            const d = Object.keys(c), h = d.map((m) => new W([c[m]])), y = new J(d.map((m, M) => new X(String(m), h[M].type))), [, g] = or(y, h);
            return g.length === 0 ? [new wt(c)] : g;
          }
        }
      }
      return [];
    }, a = t.flatMap((c) => o(c));
    if (r = (i = r ?? ((e = a[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && i !== void 0 ? i : new J([]), !(r instanceof J))
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
    return this.batches.length > 0 ? kr.visit(new W(this.data)) : new Array(0)[Symbol.iterator]();
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
        const { type: i } = this.schema.fields[t], r = C({ type: i, length: 0, nullCount: 0 });
        e.push(r._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new W(e);
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
      e || (e = new W([C({ type: new ve(), length: this.numRows })]));
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
      const [h, y] = a, g = e.findIndex((m) => m.name === c.name);
      return ~g ? y[g] = d : h.push(d), a;
    }, [[], []]), s = this.schema.assign(t.schema), o = [
      ...e.map((a, c) => [c, r[c]]).map(([a, c]) => c === void 0 ? this.getChildAt(a) : t.getChildAt(c)),
      ...i.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new ft(...or(s, o));
  }
}
ma = Symbol.toStringTag;
ft[ma] = ((n) => (n.schema = null, n.batches = [], n._offsets = new Uint32Array([0]), n._nullCount = -1, n[Symbol.isConcatSpreadable] = !0, n.isValid = nn(Pr), n.get = nn(Bt.getVisitFn(u.Struct)), n.set = ia(Lt.getVisitFn(u.Struct)), n.indexOf = ra(Bi.getVisitFn(u.Struct)), n.getByteLength = nn(ee.getVisitFn(u.Struct)), "Table"))(ft.prototype);
var ba;
let wt = class On {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof J))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = C({
            nullCount: 0,
            type: new pt(this.schema.fields),
            children: this.schema.fields.map((e) => C({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof Z))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = Es(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: i, children: r, length: s } = Object.keys(e).reduce((c, d, h) => (c.children[h] = e[d], c.length = Math.max(c.length, e[d].length), c.fields[h] = X.new({ name: d, type: e[d].type, nullable: !0 }), c), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new J(i), a = C({ type: new pt(i), length: s, children: r, nullCount: 0 });
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
    return Bi.visit(this.data, t, e);
  }
  /**
   * Get the size (in bytes) of a row by index.
   * @param index The row index for which to compute the byteLength.
   */
  getByteLength(t) {
    return ee.visit(this.data, t);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return kr.visit(new W([this.data]));
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
    const [i] = new W([this.data]).slice(t, e).data;
    return new On(this.schema, i);
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
    return t > -1 && t < this.schema.fields.length ? new W([this.data.children[t]]) : null;
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
      e || (e = new W([C({ type: new ve(), length: this.numRows })]));
      const s = i.fields.slice(), o = r.children.slice(), a = s[t].clone({ type: e.type });
      [s[t], o[t]] = [a, e.data[0]], i = new J(s, new Map(this.schema.metadata)), r = C({ type: new pt(s), children: o });
    }
    return new On(i, r);
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
    return new On(e, C({ type: i, length: this.numRows, children: r }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), i = t.map((s) => this.data.children[s]).filter(Boolean), r = C({ type: new pt(e.fields), length: this.numRows, children: i });
    return new On(e, r);
  }
};
ba = Symbol.toStringTag;
wt[ba] = ((n) => (n._nullCount = -1, n[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(wt.prototype);
function Es(n, t, e = t.reduce((i, r) => Math.max(i, r.length), 0)) {
  var i;
  const r = [...n.fields], s = [...t], o = (e + 63 & -64) >> 3;
  for (const [a, c] of n.fields.entries()) {
    const d = t[a];
    (!d || d.length !== e) && (r[a] = c.clone({ nullable: !0 }), s[a] = (i = d == null ? void 0 : d._changeLengthAndBackfillNullBitmap(e)) !== null && i !== void 0 ? i : C({
      type: c.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    n.assign(r),
    C({ type: new pt(r), length: e, children: s })
  ];
}
function ga(n, t, e = /* @__PURE__ */ new Map()) {
  for (let i = -1, r = n.length; ++i < r; ) {
    const o = n[i].type, a = t[i];
    if (S.isDictionary(o)) {
      if (!e.has(o.id))
        a.dictionary && e.set(o.id, a.dictionary);
      else if (e.get(o.id) !== a.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    o.children && o.children.length > 0 && ga(o.children, a.children, e);
  }
  return e;
}
class Wr extends wt {
  constructor(t) {
    const e = t.fields.map((r) => C({ type: r.type })), i = C({ type: new pt(t.fields), nullCount: 0, children: e });
    super(t, i);
  }
}
var Mi;
(function(n) {
  n[n.BUFFER = 0] = "BUFFER";
})(Mi || (Mi = {}));
var Ni;
(function(n) {
  n[n.LZ4_FRAME = 0] = "LZ4_FRAME", n[n.ZSTD = 1] = "ZSTD";
})(Ni || (Ni = {}));
class be {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBodyCompression(t, e) {
    return (e || new be()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, e) {
    return t.setPosition(t.position() + q), (e || new be()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : Ni.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : Mi.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, e) {
    t.addFieldInt8(0, e, Ni.LZ4_FRAME);
  }
  static addMethod(t, e) {
    t.addFieldInt8(1, e, Mi.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, e, i) {
    return be.startBodyCompression(t), be.addCodec(t, e), be.addMethod(t, i), be.endBodyCompression(t);
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
}, ae = class wr {
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
    return t.setPosition(t.position() + q), (e || new wr()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return e ? (t || new be()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
}, qe = class Sr {
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
    return t.setPosition(t.position() + q), (e || new Sr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  data(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new ae()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
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
var Ci;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Schema = 1] = "Schema", n[n.DictionaryBatch = 2] = "DictionaryBatch", n[n.RecordBatch = 3] = "RecordBatch", n[n.Tensor = 4] = "Tensor", n[n.SparseTensor = 5] = "SparseTensor";
})(Ci || (Ci = {}));
let ye = class $t {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMessage(t, e) {
    return (e || new $t()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, e) {
    return t.setPosition(t.position() + q), (e || new $t()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : on.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : Ci.NONE;
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
    return i ? (e || new lt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + i) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, on.V1);
  }
  static addHeaderType(t, e) {
    t.addFieldInt8(1, e, Ci.NONE);
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
    return $t.startMessage(t), $t.addVersion(t, e), $t.addHeaderType(t, i), $t.addHeader(t, r), $t.addBodyLength(t, s), $t.addCustomMetadata(t, o), $t.endMessage(t);
  }
};
var lu = ue;
class uu extends L {
  visit(t, e) {
    return t == null || e == null ? void 0 : super.visit(t, e);
  }
  visitNull(t, e) {
    return Ne.startNull(e), Ne.endNull(e);
  }
  visitInt(t, e) {
    return Ft.startInt(e), Ft.addBitWidth(e, t.bitWidth), Ft.addIsSigned(e, t.isSigned), Ft.endInt(e);
  }
  visitFloat(t, e) {
    return qt.startFloatingPoint(e), qt.addPrecision(e, t.precision), qt.endFloatingPoint(e);
  }
  visitBinary(t, e) {
    return Re.startBinary(e), Re.endBinary(e);
  }
  visitBool(t, e) {
    return Ee.startBool(e), Ee.endBool(e);
  }
  visitUtf8(t, e) {
    return Le.startUtf8(e), Le.endUtf8(e);
  }
  visitDecimal(t, e) {
    return _t.startDecimal(e), _t.addScale(e, t.scale), _t.addPrecision(e, t.precision), _t.addBitWidth(e, t.bitWidth), _t.endDecimal(e);
  }
  visitDate(t, e) {
    return si.startDate(e), si.addUnit(e, t.unit), si.endDate(e);
  }
  visitTime(t, e) {
    return Nt.startTime(e), Nt.addUnit(e, t.unit), Nt.addBitWidth(e, t.bitWidth), Nt.endTime(e);
  }
  visitTimestamp(t, e) {
    const i = t.timezone && e.createString(t.timezone) || void 0;
    return Ct.startTimestamp(e), Ct.addUnit(e, t.unit), i !== void 0 && Ct.addTimezone(e, i), Ct.endTimestamp(e);
  }
  visitInterval(t, e) {
    return Zt.startInterval(e), Zt.addUnit(e, t.unit), Zt.endInterval(e);
  }
  visitList(t, e) {
    return Me.startList(e), Me.endList(e);
  }
  visitStruct(t, e) {
    return Ce.startStruct_(e), Ce.endStruct_(e);
  }
  visitUnion(t, e) {
    vt.startTypeIdsVector(e, t.typeIds.length);
    const i = vt.createTypeIdsVector(e, t.typeIds);
    return vt.startUnion(e), vt.addMode(e, t.mode), vt.addTypeIds(e, i), vt.endUnion(e);
  }
  visitDictionary(t, e) {
    const i = this.visit(t.indices, e);
    return le.startDictionaryEncoding(e), le.addId(e, new lu(t.id, 0)), le.addIsOrdered(e, t.isOrdered), i !== void 0 && le.addIndexType(e, i), le.endDictionaryEncoding(e);
  }
  visitFixedSizeBinary(t, e) {
    return Kt.startFixedSizeBinary(e), Kt.addByteWidth(e, t.byteWidth), Kt.endFixedSizeBinary(e);
  }
  visitFixedSizeList(t, e) {
    return Gt.startFixedSizeList(e), Gt.addListSize(e, t.listSize), Gt.endFixedSizeList(e);
  }
  visitMap(t, e) {
    return oi.startMap(e), oi.addKeysSorted(e, t.keysSorted), oi.endMap(e);
  }
}
const ar = new uu();
function du(n, t = /* @__PURE__ */ new Map()) {
  return new J(fu(n, t), li(n.customMetadata), t);
}
function wa(n) {
  return new xt(n.count, Sa(n.columns), Ia(n.columns));
}
function hu(n) {
  return new ne(wa(n.data), n.id, n.isDelta);
}
function fu(n, t) {
  return (n.fields || []).filter(Boolean).map((e) => X.fromJSON(e, t));
}
function Ms(n, t) {
  return (n.children || []).filter(Boolean).map((e) => X.fromJSON(e, t));
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
    r.VALIDITY && t.push(new Qt(t.length, r.VALIDITY.length)), r.TYPE && t.push(new Qt(t.length, r.TYPE.length)), r.OFFSET && t.push(new Qt(t.length, r.OFFSET.length)), r.DATA && t.push(new Qt(t.length, r.DATA.length)), t = Ia(r.children, t);
  }
  return t;
}
function pu(n) {
  return (n || []).reduce((t, e) => t + +(e === 0), 0);
}
function yu(n, t) {
  let e, i, r, s, o, a;
  return !t || !(s = n.dictionary) ? (o = Cs(n, Ms(n, t)), r = new X(n.name, o, n.nullable, li(n.customMetadata))) : t.has(e = s.id) ? (i = (i = s.indexType) ? Ns(i) : new Mn(), a = new rn(t.get(e), i, e, s.isOrdered), r = new X(n.name, a, n.nullable, li(n.customMetadata))) : (i = (i = s.indexType) ? Ns(i) : new Mn(), t.set(e, o = Cs(n, Ms(n, t))), a = new rn(o, i, e, s.isOrdered), r = new X(n.name, a, n.nullable, li(n.customMetadata))), r || null;
}
function li(n) {
  return new Map(Object.entries(n || {}));
}
function Ns(n) {
  return new we(n.isSigned, n.bitWidth);
}
function Cs(n, t) {
  const e = n.type.name;
  switch (e) {
    case "NONE":
      return new ve();
    case "null":
      return new ve();
    case "binary":
      return new di();
    case "utf8":
      return new hi();
    case "bool":
      return new fi();
    case "list":
      return new gi((t || [])[0]);
    case "struct":
      return new pt(t || []);
    case "struct_":
      return new pt(t || []);
  }
  switch (e) {
    case "int": {
      const i = n.type;
      return new we(i.isSigned, i.bitWidth);
    }
    case "floatingpoint": {
      const i = n.type;
      return new Nn(St[i.precision]);
    }
    case "decimal": {
      const i = n.type;
      return new pi(i.scale, i.precision, i.bitWidth);
    }
    case "date": {
      const i = n.type;
      return new yi(he[i.unit]);
    }
    case "time": {
      const i = n.type;
      return new Cn(j[i.unit], i.bitWidth);
    }
    case "timestamp": {
      const i = n.type;
      return new mi(j[i.unit], i.timezone);
    }
    case "interval": {
      const i = n.type;
      return new bi(_e[i.unit]);
    }
    case "union": {
      const i = n.type;
      return new _i(Tt[i.mode], i.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const i = n.type;
      return new vi(i.byteWidth);
    }
    case "fixedsizelist": {
      const i = n.type;
      return new wi(i.listSize, (t || [])[0]);
    }
    case "map": {
      const i = n.type;
      return new Si((t || [])[0], i.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${e}"`);
}
var ke = ue, mu = ha, bu = sn;
class yt {
  constructor(t, e, i, r) {
    this._version = e, this._headerType = i, this.body = new Uint8Array(0), r && (this._createHeader = () => r), this._bodyLength = typeof t == "number" ? t : t.low;
  }
  /** @nocollapse */
  static fromJSON(t, e) {
    const i = new yt(0, Dt.V4, e);
    return i._createHeader = gu(t, e), i;
  }
  /** @nocollapse */
  static decode(t) {
    t = new bu(k(t));
    const e = ye.getRootAsMessage(t), i = e.bodyLength(), r = e.version(), s = e.headerType(), o = new yt(i, r, s);
    return o._createHeader = _u(e, s), o;
  }
  /** @nocollapse */
  static encode(t) {
    const e = new mu();
    let i = -1;
    return t.isSchema() ? i = J.encode(e, t.header()) : t.isRecordBatch() ? i = xt.encode(e, t.header()) : t.isDictionaryBatch() && (i = ne.encode(e, t.header())), ye.startMessage(e), ye.addVersion(e, Dt.V4), ye.addHeader(e, i), ye.addHeaderType(e, t.headerType), ye.addBodyLength(e, new ke(t.bodyLength, 0)), ye.finishMessageBuffer(e, ye.endMessage(e)), e.asUint8Array();
  }
  /** @nocollapse */
  static from(t, e = 0) {
    if (t instanceof J)
      return new yt(0, Dt.V4, Y.Schema, t);
    if (t instanceof xt)
      return new yt(e, Dt.V4, Y.RecordBatch, t);
    if (t instanceof ne)
      return new yt(e, Dt.V4, Y.DictionaryBatch, t);
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
    return this.headerType === Y.Schema;
  }
  isRecordBatch() {
    return this.headerType === Y.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === Y.DictionaryBatch;
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
class ne {
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
class Qt {
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
      case Y.Schema:
        return J.fromJSON(n);
      case Y.RecordBatch:
        return xt.fromJSON(n);
      case Y.DictionaryBatch:
        return ne.fromJSON(n);
    }
    throw new Error(`Unrecognized Message type: { name: ${Y[t]}, type: ${t} }`);
  };
}
function _u(n, t) {
  return () => {
    switch (t) {
      case Y.Schema:
        return J.decode(n.header(new Yt()));
      case Y.RecordBatch:
        return xt.decode(n.header(new ae()), n.version());
      case Y.DictionaryBatch:
        return ne.decode(n.header(new qe()), n.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${Y[t]}, type: ${t} }`);
  };
}
X.encode = xu;
X.decode = Du;
X.fromJSON = yu;
J.encode = Tu;
J.decode = vu;
J.fromJSON = du;
xt.encode = Ru;
xt.decode = wu;
xt.fromJSON = wa;
ne.encode = Eu;
ne.decode = Su;
ne.fromJSON = hu;
je.encode = Mu;
je.decode = Bu;
Qt.encode = Nu;
Qt.decode = Iu;
function vu(n, t = /* @__PURE__ */ new Map()) {
  const e = Fu(n, t);
  return new J(e, ui(n), t);
}
function wu(n, t = Dt.V4) {
  if (n.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new xt(n.length(), Au(n), Ou(n, t));
}
function Su(n, t = Dt.V4) {
  return new ne(xt.decode(n.data(), t), n.id(), n.isDelta());
}
function Iu(n) {
  return new Qt(n.offset(), n.length());
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
    (i = n.buffers(r)) && (t < Dt.V4 && (i.bb_pos += 8 * (r + 1)), e[++s] = Qt.decode(i));
  return e;
}
function Fu(n, t) {
  const e = [];
  for (let i, r = -1, s = -1, o = n.fieldsLength(); ++r < o; )
    (i = n.fields(r)) && (e[++s] = X.decode(i, t));
  return e;
}
function Ls(n, t) {
  const e = [];
  for (let i, r = -1, s = -1, o = n.childrenLength(); ++r < o; )
    (i = n.children(r)) && (e[++s] = X.decode(i, t));
  return e;
}
function Du(n, t) {
  let e, i, r, s, o, a;
  return !t || !(a = n.dictionary()) ? (r = Ps(n, Ls(n, t)), i = new X(n.name(), r, n.nullable(), ui(n))) : t.has(e = a.id().low) ? (s = (s = a.indexType()) ? Us(s) : new Mn(), o = new rn(t.get(e), s, e, a.isOrdered()), i = new X(n.name(), o, n.nullable(), ui(n))) : (s = (s = a.indexType()) ? Us(s) : new Mn(), t.set(e, r = Ps(n, Ls(n, t))), o = new rn(r, s, e, a.isOrdered()), i = new X(n.name(), o, n.nullable(), ui(n))), i || null;
}
function ui(n) {
  const t = /* @__PURE__ */ new Map();
  if (n)
    for (let e, i, r = -1, s = Math.trunc(n.customMetadataLength()); ++r < s; )
      (e = n.customMetadata(r)) && (i = e.key()) != null && t.set(i, e.value());
  return t;
}
function Us(n) {
  return new we(n.isSigned(), n.bitWidth());
}
function Ps(n, t) {
  const e = n.typeType();
  switch (e) {
    case tt.NONE:
      return new ve();
    case tt.Null:
      return new ve();
    case tt.Binary:
      return new di();
    case tt.Utf8:
      return new hi();
    case tt.Bool:
      return new fi();
    case tt.List:
      return new gi((t || [])[0]);
    case tt.Struct_:
      return new pt(t || []);
  }
  switch (e) {
    case tt.Int: {
      const i = n.type(new Ft());
      return new we(i.isSigned(), i.bitWidth());
    }
    case tt.FloatingPoint: {
      const i = n.type(new qt());
      return new Nn(i.precision());
    }
    case tt.Decimal: {
      const i = n.type(new _t());
      return new pi(i.scale(), i.precision(), i.bitWidth());
    }
    case tt.Date: {
      const i = n.type(new si());
      return new yi(i.unit());
    }
    case tt.Time: {
      const i = n.type(new Nt());
      return new Cn(i.unit(), i.bitWidth());
    }
    case tt.Timestamp: {
      const i = n.type(new Ct());
      return new mi(i.unit(), i.timezone());
    }
    case tt.Interval: {
      const i = n.type(new Zt());
      return new bi(i.unit());
    }
    case tt.Union: {
      const i = n.type(new vt());
      return new _i(i.mode(), i.typeIdsArray() || [], t || []);
    }
    case tt.FixedSizeBinary: {
      const i = n.type(new Kt());
      return new vi(i.byteWidth());
    }
    case tt.FixedSizeList: {
      const i = n.type(new Gt());
      return new wi(i.listSize(), (t || [])[0]);
    }
    case tt.Map: {
      const i = n.type(new oi());
      return new Si((t || [])[0], i.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${tt[e]}" (${e})`);
}
function Tu(n, t) {
  const e = t.fields.map((s) => X.encode(n, s));
  Yt.startFieldsVector(n, e.length);
  const i = Yt.createFieldsVector(n, e), r = t.metadata && t.metadata.size > 0 ? Yt.createCustomMetadataVector(n, [...t.metadata].map(([s, o]) => {
    const a = n.createString(`${s}`), c = n.createString(`${o}`);
    return lt.startKeyValue(n), lt.addKey(n, a), lt.addValue(n, c), lt.endKeyValue(n);
  })) : -1;
  return Yt.startSchema(n), Yt.addFields(n, i), Yt.addEndianness(n, Cu ? an.Little : an.Big), r !== -1 && Yt.addCustomMetadata(n, r), Yt.endSchema(n);
}
function xu(n, t) {
  let e = -1, i = -1, r = -1;
  const s = t.type;
  let o = t.typeId;
  S.isDictionary(s) ? (o = s.dictionary.typeId, r = ar.visit(s, n), i = ar.visit(s.dictionary, n)) : i = ar.visit(s, n);
  const a = (s.children || []).map((h) => X.encode(n, h)), c = Et.createChildrenVector(n, a), d = t.metadata && t.metadata.size > 0 ? Et.createCustomMetadataVector(n, [...t.metadata].map(([h, y]) => {
    const g = n.createString(`${h}`), m = n.createString(`${y}`);
    return lt.startKeyValue(n), lt.addKey(n, g), lt.addValue(n, m), lt.endKeyValue(n);
  })) : -1;
  return t.name && (e = n.createString(t.name)), Et.startField(n), Et.addType(n, i), Et.addTypeType(n, o), Et.addChildren(n, c), Et.addNullable(n, !!t.nullable), e !== -1 && Et.addName(n, e), r !== -1 && Et.addDictionary(n, r), d !== -1 && Et.addCustomMetadata(n, d), Et.endField(n);
}
function Ru(n, t) {
  const e = t.nodes || [], i = t.buffers || [];
  ae.startNodesVector(n, e.length);
  for (const o of e.slice().reverse())
    je.encode(n, o);
  const r = n.endVector();
  ae.startBuffersVector(n, i.length);
  for (const o of i.slice().reverse())
    Qt.encode(n, o);
  const s = n.endVector();
  return ae.startRecordBatch(n), ae.addLength(n, new ke(t.length, 0)), ae.addNodes(n, r), ae.addBuffers(n, s), ae.endRecordBatch(n);
}
function Eu(n, t) {
  const e = xt.encode(n, t.data);
  return qe.startDictionaryBatch(n), qe.addId(n, new ke(t.id, 0)), qe.addIsDelta(n, t.isDelta), qe.addData(n, e), qe.endDictionaryBatch(n);
}
function Mu(n, t) {
  return va.createFieldNode(n, new ke(t.length, 0), new ke(t.nullCount, 0));
}
function Nu(n, t) {
  return _a.createBuffer(n, new ke(t.offset, 0), new ke(t.length, 0));
}
const Cu = (() => {
  const n = new ArrayBuffer(2);
  return new DataView(n).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(n)[0] === 256;
})(), Jr = (n) => `Expected ${Y[n]} Message in stream, but was null or length 0.`, Hr = (n) => `Header pointer of flatbuffer-encoded ${Y[n]} Message is null or length 0.`, Ba = (n, t) => `Expected to read ${n} metadata bytes, but only read ${t}.`, Aa = (n, t) => `Expected to read ${n} bytes for message body, but only read ${t}.`;
class Oa {
  constructor(t) {
    this.source = t instanceof Ri ? t : new Ri(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? et : t;
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
      throw new Error(Jr(t));
    return e.value;
  }
  readMessageBody(t) {
    if (t <= 0)
      return new Uint8Array(0);
    const e = k(this.source.read(t));
    if (e.byteLength < t)
      throw new Error(Aa(t, e.byteLength));
    return (
      /* 1. */
      e.byteOffset % 8 === 0 && /* 2. */
      e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
    );
  }
  readSchema(t = !1) {
    const e = Y.Schema, i = this.readMessage(e), r = i == null ? void 0 : i.header();
    if (t && !r)
      throw new Error(Hr(e));
    return r;
  }
  readMetadataLength() {
    const t = this.source.read(Wi), e = t && new sn(t), i = (e == null ? void 0 : e.readInt32(0)) || 0;
    return { done: i === 0, value: i };
  }
  readMetadata(t) {
    const e = this.source.read(t);
    if (!e)
      return et;
    if (e.byteLength < t)
      throw new Error(Ba(t, e.byteLength));
    return { done: !1, value: yt.decode(e) };
  }
}
class Lu {
  constructor(t, e) {
    this.source = t instanceof ln ? t : Js(t) ? new Ei(t, e) : new ln(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return w(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? et : t;
    });
  }
  throw(t) {
    return w(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return w(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return w(this, void 0, void 0, function* () {
      let e;
      if ((e = yield this.next()).done)
        return null;
      if (t != null && e.value.headerType !== t)
        throw new Error(Jr(t));
      return e.value;
    });
  }
  readMessageBody(t) {
    return w(this, void 0, void 0, function* () {
      if (t <= 0)
        return new Uint8Array(0);
      const e = k(yield this.source.read(t));
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
    return w(this, void 0, void 0, function* () {
      const e = Y.Schema, i = yield this.readMessage(e), r = i == null ? void 0 : i.header();
      if (t && !r)
        throw new Error(Hr(e));
      return r;
    });
  }
  readMetadataLength() {
    return w(this, void 0, void 0, function* () {
      const t = yield this.source.read(Wi), e = t && new sn(t), i = (e == null ? void 0 : e.readInt32(0)) || 0;
      return { done: i === 0, value: i };
    });
  }
  readMetadata(t) {
    return w(this, void 0, void 0, function* () {
      const e = yield this.source.read(t);
      if (!e)
        return et;
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
      return this._schema = !0, { done: !1, value: yt.fromJSON(t.schema, Y.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const e = t.dictionaries[this._dictionaryIndex++];
      return this._body = e.data.columns, { done: !1, value: yt.fromJSON(e, Y.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const e = t.batches[this._batchIndex++];
      return this._body = e.columns, { done: !1, value: yt.fromJSON(e, Y.RecordBatch) };
    }
    return this._body = [], et;
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
      throw new Error(Jr(t));
    return e.value;
  }
  readSchema() {
    const t = Y.Schema, e = this.readMessage(t), i = e == null ? void 0 : e.header();
    if (!e || !i)
      throw new Error(Hr(t));
    return i;
  }
}
const Wi = 4, Ir = "ARROW1", Un = new Uint8Array(Ir.length);
for (let n = 0; n < Ir.length; n += 1)
  Un[n] = Ir.codePointAt(n);
function Kr(n, t = 0) {
  for (let e = -1, i = Un.length; ++e < i; )
    if (Un[e] !== n[t + e])
      return !1;
  return !0;
}
const Yn = Un.length, Fa = Yn + Wi, Pu = Yn * 2 + Wi;
class de extends jr {
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
    return ge(e) ? e.then(() => this) : this;
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
    return t instanceof de ? t : hr(t) ? zu(t) : Js(t) ? Wu(t) : ge(t) ? w(this, void 0, void 0, function* () {
      return yield de.from(yield t);
    }) : Hs(t) || Or(t) || Ks(t) || dn(t) ? Yu(new ln(t)) : $u(new Ri(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof de ? t.isSync() ? ks(t) : js(t) : hr(t) || ArrayBuffer.isView(t) || jn(t) || Ws(t) ? ks(t) : js(t);
  }
}
class Li extends de {
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
    return Xt(this, arguments, function* () {
      yield R(yield* ri(Ue(this[Symbol.iterator]())));
    });
  }
}
class Ui extends de {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    var t, e;
    return w(this, void 0, void 0, function* () {
      const i = new Array();
      try {
        for (var r = Ue(this), s; s = yield r.next(), !s.done; ) {
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
class Da extends Li {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class ku extends Ui {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class Ta {
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
    const i = this._loadVectors(t, e, this.schema.fields), r = C({ type: new pt(this.schema.fields), length: t.length, children: i });
    return new wt(this.schema, r);
  }
  _loadDictionaryBatch(t, e) {
    const { id: i, isDelta: r } = t, { dictionaries: s, schema: o } = this, a = s.get(i);
    if (r || !a) {
      const c = o.dictionaries.get(i), d = this._loadVectors(t.data, e, [c]);
      return (a && r ? a.concat(new W(d)) : new W(d)).memoize();
    }
    return a.memoize();
  }
  _loadVectors(t, e, i) {
    return new ya(e, t.nodes, t.buffers, this.dictionaries).visitMany(i);
  }
}
class Pi extends Ta {
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
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : et;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : et;
  }
  next() {
    if (this.closed)
      return et;
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
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Wr(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class ki extends Ta {
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
    return w(this, void 0, void 0, function* () {
      !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return w(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = Ra(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return w(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : et;
    });
  }
  return(t) {
    return w(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : et;
    });
  }
  next() {
    return w(this, void 0, void 0, function* () {
      if (this.closed)
        return et;
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
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Wr(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return w(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class xa extends Pi {
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
      const r = this._reader.readMessage(Y.RecordBatch);
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
      const r = this._reader.readMessage(Y.DictionaryBatch);
      if (r != null && r.isDictionaryBatch()) {
        const s = r.header(), o = this._reader.readMessageBody(r.bodyLength), a = this._loadDictionaryBatch(s, o);
        this.dictionaries.set(s.id, a);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, e = t.size - Fa, i = t.readInt32(e), r = t.readAt(e - i, i);
    return Ln.decode(r);
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
    super(t instanceof Ei ? t : new Ei(t, i), r);
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
    return w(this, void 0, void 0, function* () {
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
    return w(this, void 0, void 0, function* () {
      if (this.closed)
        return null;
      this._footer || (yield this.open());
      const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
      if (i && (yield this._handle.seek(i.offset))) {
        const r = yield this._reader.readMessage(Y.RecordBatch);
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
    return w(this, void 0, void 0, function* () {
      const i = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
      if (i && (yield this._handle.seek(i.offset))) {
        const r = yield this._reader.readMessage(Y.DictionaryBatch);
        if (r != null && r.isDictionaryBatch()) {
          const s = r.header(), o = yield this._reader.readMessageBody(r.bodyLength), a = this._loadDictionaryBatch(s, o);
          this.dictionaries.set(s.id, a);
        }
      }
    });
  }
  _readFooter() {
    return w(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const e = t.size - Fa, i = yield t.readInt32(e), r = yield t.readAt(e - i, i);
      return Ln.decode(r);
    });
  }
  _readNextMessageAndValidate(t) {
    return w(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const e = this._footer.getRecordBatch(this._recordBatchIndex);
        if (e && (yield this._handle.seek(e.offset)))
          return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class Vu extends Pi {
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
function* ks(n) {
  const t = de.from(n);
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
  return Xt(this, arguments, function* () {
    const e = yield R(de.from(n));
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
function zu(n) {
  return new Li(new Vu(n));
}
function $u(n) {
  const t = n.peek(Yn + 7 & -8);
  return t && t.byteLength >= 4 ? Kr(t) ? new Da(new xa(n.read())) : new Li(new Pi(n)) : new Li(new Pi(function* () {
  }()));
}
function Yu(n) {
  return w(this, void 0, void 0, function* () {
    const t = yield n.peek(Yn + 7 & -8);
    return t && t.byteLength >= 4 ? Kr(t) ? new Da(new xa(yield n.read())) : new Ui(new ki(n)) : new Ui(new ki(function() {
      return Xt(this, arguments, function* () {
      });
    }()));
  });
}
function Wu(n) {
  return w(this, void 0, void 0, function* () {
    const { size: t } = yield n.stat(), e = new Ei(n, t);
    return t >= Pu && Kr(yield e.readAt(0, Yn + 7 & -8)) ? new ku(new ju(e)) : new Ui(new ki(e));
  });
}
class ot extends L {
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  /** @nocollapse */
  static assemble(...t) {
    const e = (r) => r.flatMap((s) => Array.isArray(s) ? e(s) : s instanceof wt ? s.data.children : s.data), i = new ot();
    return i.visitMany(e(t)), i;
  }
  visit(t) {
    if (t instanceof W)
      return this.visitMany(t.data), this;
    const { type: e } = t;
    if (!S.isDictionary(e)) {
      const { length: i, nullCount: r } = t;
      if (i > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      S.isNull(e) || jt.call(this, r <= 0 ? new Uint8Array(0) : Cr(t.offset, i, t.nullBitmap)), this.nodes.push(new je(i, r));
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
  return this.buffers.push(n), this.bufferRegions.push(new Qt(this._byteLength, t)), this._byteLength += t, this;
}
function Ju(n) {
  const { type: t, length: e, typeIds: i, valueOffsets: r } = n;
  if (jt.call(this, i), t.mode === Tt.Sparse)
    return Br.call(this, n);
  if (t.mode === Tt.Dense) {
    if (n.offset <= 0)
      return jt.call(this, r), Br.call(this, n);
    {
      const s = i.reduce((h, y) => Math.max(h, y), i[0]), o = new Int32Array(s + 1), a = new Int32Array(s + 1).fill(-1), c = new Int32Array(e), d = Dr(-r[0], e, r);
      for (let h, y, g = -1; ++g < e; )
        (y = a[h = i[g]]) === -1 && (y = a[h] = d[h]), c[g] = d[g] - y, ++o[h];
      jt.call(this, c);
      for (let h, y = -1, g = t.children.length; ++y < g; )
        if (h = n.children[y]) {
          const m = t.typeIds[y], M = Math.min(e, o[m]);
          this.visit(h.slice(a[m], M));
        }
    }
  }
  return this;
}
function Hu(n) {
  let t;
  return n.nullCount >= n.length ? jt.call(this, new Uint8Array(0)) : (t = n.values) instanceof Uint8Array ? jt.call(this, Cr(n.offset, n.length, t)) : jt.call(this, Ii(n.values));
}
function Oe(n) {
  return jt.call(this, n.values.subarray(0, n.length * n.stride));
}
function Ea(n) {
  const { length: t, values: e, valueOffsets: i } = n, r = i[0], s = i[t], o = Math.min(s - r, e.byteLength - r);
  return jt.call(this, Dr(-i[0], t, i)), jt.call(this, e.subarray(r, r + o)), this;
}
function Gr(n) {
  const { length: t, valueOffsets: e } = n;
  return e && jt.call(this, Dr(e[0], t, e)), this.visit(n.children[0]);
}
function Br(n) {
  return this.visitMany(n.type.children.map((t, e) => n.children[e]).filter(Boolean))[0];
}
ot.prototype.visitBool = Hu;
ot.prototype.visitInt = Oe;
ot.prototype.visitFloat = Oe;
ot.prototype.visitUtf8 = Ea;
ot.prototype.visitBinary = Ea;
ot.prototype.visitFixedSizeBinary = Oe;
ot.prototype.visitDate = Oe;
ot.prototype.visitTimestamp = Oe;
ot.prototype.visitTime = Oe;
ot.prototype.visitDecimal = Oe;
ot.prototype.visitList = Gr;
ot.prototype.visitStruct = Br;
ot.prototype.visitUnion = Ju;
ot.prototype.visitInterval = Oe;
ot.prototype.visitFixedSizeList = Gr;
ot.prototype.visitMap = Gr;
class Ma extends jr {
  constructor(t) {
    super(), this._position = 0, this._started = !1, this._sink = new ci(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), It(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
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
    return ge(t) ? t.then((e) => this.writeAll(e)) : dn(t) ? Qr(this, t) : Xr(this, t);
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
    return t === this._sink || t instanceof ci ? this._sink = t : (this._sink = new ci(), t && pc(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && yc(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!e || !vr(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this;
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
    t instanceof wt ? t instanceof Wr || this._writeRecordBatch(t) : t instanceof ft ? this.writeAll(t.batches) : jn(t) && this.writeAll(t);
  }
  _writeMessage(t, e = 8) {
    const i = e - 1, r = yt.encode(t), s = r.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, a = s + o + i & ~i, c = a - s - o;
    return t.headerType === Y.RecordBatch ? this._recordBatchBlocks.push(new Se(a, t.bodyLength, this._position)) : t.headerType === Y.DictionaryBatch && this._dictionaryBlocks.push(new Se(a, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(a - o)), s > 0 && this._write(r), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const e = k(t);
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
    return this._write(Un);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: e, nodes: i, bufferRegions: r, buffers: s } = ot.assemble(t), o = new xt(t.numRows, i, r), a = yt.from(o, e);
    return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(s);
  }
  _writeDictionaryBatch(t, e, i = !1) {
    this._dictionaryDeltaOffsets.set(e, t.length + (this._dictionaryDeltaOffsets.get(e) || 0));
    const { byteLength: r, nodes: s, bufferRegions: o, buffers: a } = ot.assemble(new W([t])), c = new xt(t.length, s, o), d = new ne(c, e, i), h = yt.from(d, r);
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
class qr extends Ma {
  /** @nocollapse */
  static writeAll(t, e) {
    const i = new qr(e);
    return ge(t) ? t.then((r) => i.writeAll(r)) : dn(t) ? Qr(i, t) : Xr(i, t);
  }
}
class Zr extends Ma {
  /** @nocollapse */
  static writeAll(t) {
    const e = new Zr();
    return ge(t) ? t.then((i) => e.writeAll(i)) : dn(t) ? Qr(e, t) : Xr(e, t);
  }
  constructor() {
    super(), this._autoDestroy = !0;
  }
  // @ts-ignore
  _writeSchema(t) {
    return this._writeMagic()._writePadding(2);
  }
  _writeFooter(t) {
    const e = Ln.encode(new Ln(t, Dt.V4, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic();
  }
}
function Xr(n, t) {
  let e = t;
  t instanceof ft && (e = t.batches, n.reset(void 0, t.schema));
  for (const i of e)
    n.write(i);
  return n.finish();
}
function Qr(n, t) {
  var e, i, r, s;
  return w(this, void 0, void 0, function* () {
    try {
      for (e = Ue(t); i = yield e.next(), !i.done; ) {
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
function Fn(n) {
  const t = de.from(n);
  return ge(t) ? t.then((e) => Fn(e)) : t.isAsync() ? t.readAll().then((e) => new ft(e)) : new ft(t.readAll());
}
function cr(n, t = "stream") {
  return (t === "stream" ? qr : Zr).writeAll(n).toUint8Array(!0);
}
var Vs = (
  /** @class */
  function() {
    function n(t, e, i, r) {
      var s = this;
      this.getCell = function(o, a) {
        var c = o < s.headerRows && a < s.headerColumns, d = o >= s.headerRows && a < s.headerColumns, h = o < s.headerRows && a >= s.headerColumns;
        if (c) {
          var y = ["blank"];
          return a > 0 && y.push("level" + o), {
            type: "blank",
            classNames: y.join(" "),
            content: ""
          };
        } else if (h) {
          var g = a - s.headerColumns, y = [
            "col_heading",
            "level" + o,
            "col" + g
          ];
          return {
            type: "columns",
            classNames: y.join(" "),
            content: s.getContent(s.columnsTable, g, o)
          };
        } else if (d) {
          var m = o - s.headerRows, y = [
            "row_heading",
            "level" + a,
            "row" + m
          ];
          return {
            type: "index",
            id: "T_".concat(s.uuid, "level").concat(a, "_row").concat(m),
            classNames: y.join(" "),
            content: s.getContent(s.indexTable, m, a)
          };
        } else {
          var m = o - s.headerRows, g = a - s.headerColumns, y = [
            "data",
            "row" + m,
            "col" + g
          ], M = s.styler ? s.getContent(s.styler.displayValuesTable, m, g) : s.getContent(s.dataTable, m, g);
          return {
            type: "data",
            id: "T_".concat(s.uuid, "row").concat(m, "_col").concat(g),
            classNames: y.join(" "),
            content: M
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
      }, this.dataTable = Fn(t), this.indexTable = Fn(e), this.columnsTable = Fn(i), this.styler = r ? {
        caption: r.caption,
        displayValuesTable: Fn(r.displayValues),
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
), Tn = function() {
  return Tn = Object.assign || function(n) {
    for (var t, e = 1, i = arguments.length; e < i; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Tn.apply(this, arguments);
}, xn;
(function(n) {
  n.COMPONENT_READY = "streamlit:componentReady", n.SET_COMPONENT_VALUE = "streamlit:setComponentValue", n.SET_FRAME_HEIGHT = "streamlit:setFrameHeight";
})(xn || (xn = {}));
var ji = (
  /** @class */
  function() {
    function n() {
    }
    return n.API_VERSION = 1, n.RENDER_EVENT = "streamlit:render", n.events = new EventTarget(), n.registeredMessageListener = !1, n.setComponentReady = function() {
      n.registeredMessageListener || (window.addEventListener("message", n.onMessageEvent), n.registeredMessageListener = !0), n.sendBackMsg(xn.COMPONENT_READY, {
        apiVersion: n.API_VERSION
      });
    }, n.setFrameHeight = function(t) {
      t === void 0 && (t = document.body.scrollHeight), t !== n.lastFrameHeight && (n.lastFrameHeight = t, n.sendBackMsg(xn.SET_FRAME_HEIGHT, { height: t }));
    }, n.setComponentValue = function(t) {
      var e;
      t instanceof Vs ? (e = "dataframe", t = t.serialize()) : Gu(t) ? (e = "bytes", t = new Uint8Array(t.buffer)) : t instanceof ArrayBuffer ? (e = "bytes", t = new Uint8Array(t)) : e = "json", n.sendBackMsg(xn.SET_COMPONENT_VALUE, {
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
      e = Tn(Tn({}, e), i);
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
      window.parent.postMessage(Tn({ isStreamlitMessage: !0, type: t }, e), "*");
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
    ji.setFrameHeight();
  }, t.prototype.componentDidUpdate = function() {
    ji.setFrameHeight();
  }, t;
})(Vi.PureComponent);
const Zu = ({
  websocketUrl: n = "ws://localhost:8000/ws/chat",
  sessionId: t = "default",
  initialMessages: e = []
}) => {
  const [i, r] = vn(e), [s, o] = vn(""), [a, c] = vn(!1), [d, h] = vn(!1), [y, g] = vn(""), m = ps(null), M = ps(null), mt = () => {
    var f;
    (f = M.current) == null || f.scrollIntoView({ behavior: "smooth" });
  };
  ys(() => {
    mt();
  }, [i, y]), ys(() => {
    const f = `${n}/${t}`;
    return m.current = new WebSocket(f), m.current.onopen = () => {
      c(!0), console.log("WebSocket connected");
    }, m.current.onmessage = (dt) => {
      try {
        const ut = JSON.parse(dt.data);
        Ut(ut);
      } catch (ut) {
        console.error("Error parsing WebSocket message:", ut);
      }
    }, m.current.onclose = () => {
      c(!1), console.log("WebSocket disconnected");
    }, m.current.onerror = (dt) => {
      console.error("WebSocket error:", dt), c(!1);
    }, () => {
      m.current && m.current.close();
    };
  }, [n, t]);
  const Ut = (f) => {
    switch (f.type) {
      case "message_received":
        h(!0);
        break;
      case "stream_start":
        h(!0), g("");
        const dt = `streaming-${Date.now()}`;
        r((ut) => [...ut, {
          id: dt,
          role: "assistant",
          content: "",
          timestamp: /* @__PURE__ */ new Date(),
          isStreaming: !0
        }]);
        break;
      case "token":
        g((ut) => ut + f.token), r((ut) => ut.map(
          (Pt) => Pt.isStreaming ? { ...Pt, content: f.partial_response } : Pt
        ));
        break;
      case "stream_end":
        h(!1), g(""), r((ut) => ut.map(
          (Pt) => Pt.isStreaming ? { ...Pt, content: f.full_response, isStreaming: !1 } : Pt
        )), ji.setComponentValue({
          type: "message_complete",
          message: f.full_response,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
        break;
      case "error":
        h(!1), g(""), r((ut) => [...ut, {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: `❌ Erro: ${f.message}`,
          timestamp: /* @__PURE__ */ new Date(),
          isStreaming: !1
        }]);
        break;
      default:
        console.log("Unknown message type:", f.type);
    }
  }, nt = () => {
    if (!s.trim() || !a) return;
    const f = {
      id: `user-${Date.now()}`,
      role: "user",
      content: s.trim(),
      timestamp: /* @__PURE__ */ new Date()
    };
    r((dt) => [...dt, f]), m.current && m.current.readyState === WebSocket.OPEN && m.current.send(JSON.stringify({
      message: s.trim()
    })), o("");
  }, Q = (f) => {
    f.key === "Enter" && !f.shiftKey && (f.preventDefault(), nt());
  }, at = (f) => f.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  }), rt = () => {
    r([]), g(""), ji.setComponentValue({
      type: "chat_cleared",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  };
  return /* @__PURE__ */ P.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    height: "600px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ P.jsxs("div", { style: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "12px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ P.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ P.jsx("span", { style: { fontSize: "18px" }, children: "🤖" }),
        /* @__PURE__ */ P.jsx("span", { style: { fontWeight: "bold" }, children: "Assistente IA" }),
        /* @__PURE__ */ P.jsx("div", { style: {
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: a ? "#28a745" : "#dc3545"
        } })
      ] }),
      /* @__PURE__ */ P.jsx(
        "button",
        {
          onClick: rt,
          style: {
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "14px",
            padding: "4px 8px",
            borderRadius: "4px"
          },
          onMouseOver: (f) => f.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)",
          onMouseOut: (f) => f.currentTarget.style.backgroundColor = "transparent",
          children: "Limpar"
        }
      )
    ] }),
    /* @__PURE__ */ P.jsxs("div", { style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }, children: [
      i.length === 0 && /* @__PURE__ */ P.jsxs("div", { style: {
        textAlign: "center",
        color: "#666",
        fontStyle: "italic",
        marginTop: "50px"
      }, children: [
        /* @__PURE__ */ P.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "🤖" }),
        /* @__PURE__ */ P.jsx("div", { children: "Olá! Sou seu assistente especializado em análise de dados de bovinos." }),
        /* @__PURE__ */ P.jsx("div", { style: { marginTop: "8px", fontSize: "14px" }, children: "Faça uma pergunta sobre seus dados ou zootecnia!" })
      ] }),
      i.map((f) => /* @__PURE__ */ P.jsx(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: f.role === "user" ? "flex-end" : "flex-start",
            marginBottom: "8px"
          },
          children: /* @__PURE__ */ P.jsxs(
            "div",
            {
              style: {
                maxWidth: "70%",
                padding: "12px 16px",
                borderRadius: "18px",
                backgroundColor: f.role === "user" ? "#007bff" : "#ffffff",
                color: f.role === "user" ? "#ffffff" : "#333333",
                border: f.role === "assistant" ? "1px solid #e0e0e0" : "none",
                position: "relative",
                wordWrap: "break-word"
              },
              children: [
                /* @__PURE__ */ P.jsxs("div", { style: { whiteSpace: "pre-wrap" }, children: [
                  f.content,
                  f.isStreaming && /* @__PURE__ */ P.jsx("span", { style: {
                    display: "inline-block",
                    width: "8px",
                    height: "16px",
                    backgroundColor: "#007bff",
                    marginLeft: "4px",
                    animation: "blink 1s infinite"
                  } })
                ] }),
                /* @__PURE__ */ P.jsx("div", { style: {
                  fontSize: "11px",
                  opacity: 0.7,
                  marginTop: "4px",
                  textAlign: "right"
                }, children: at(f.timestamp) })
              ]
            }
          )
        },
        f.id
      )),
      d && !y && /* @__PURE__ */ P.jsx("div", { style: {
        display: "flex",
        justifyContent: "flex-start"
      }, children: /* @__PURE__ */ P.jsxs("div", { style: {
        padding: "12px 16px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        border: "1px solid #e0e0e0",
        display: "flex",
        alignItems: "center",
        gap: "4px"
      }, children: [
        /* @__PURE__ */ P.jsx("div", { style: {
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          animation: "pulse 1.5s infinite"
        } }),
        /* @__PURE__ */ P.jsx("div", { style: {
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          animation: "pulse 1.5s infinite",
          animationDelay: "0.2s"
        } }),
        /* @__PURE__ */ P.jsx("div", { style: {
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          animation: "pulse 1.5s infinite",
          animationDelay: "0.4s"
        } })
      ] }) }),
      /* @__PURE__ */ P.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { style: {
      padding: "16px",
      backgroundColor: "#ffffff",
      borderTop: "1px solid #e0e0e0"
    }, children: [
      /* @__PURE__ */ P.jsxs("div", { style: {
        display: "flex",
        gap: "8px",
        alignItems: "flex-end"
      }, children: [
        /* @__PURE__ */ P.jsx(
          "textarea",
          {
            value: s,
            onChange: (f) => o(f.target.value),
            onKeyPress: Q,
            placeholder: a ? "Digite sua pergunta..." : "Conectando...",
            disabled: !a || d,
            style: {
              flex: 1,
              minHeight: "40px",
              maxHeight: "120px",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "20px",
              resize: "none",
              fontFamily: "inherit",
              fontSize: "14px",
              outline: "none"
            }
          }
        ),
        /* @__PURE__ */ P.jsx(
          "button",
          {
            onClick: nt,
            disabled: !s.trim() || !a || d,
            style: {
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: a && s.trim() && !d ? "#007bff" : "#ccc",
              color: "white",
              cursor: a && s.trim() && !d ? "pointer" : "not-allowed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px"
            },
            children: "➤"
          }
        )
      ] }),
      !a && /* @__PURE__ */ P.jsx("div", { style: {
        marginTop: "8px",
        fontSize: "12px",
        color: "#dc3545",
        textAlign: "center"
      }, children: "⚠️ Desconectado. Verifique a conexão com o servidor." })
    ] }),
    /* @__PURE__ */ P.jsx("style", { children: `
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        ` })
  ] });
}, Xu = An.createRoot(
  document.getElementById("root")
);
Xu.render(
  /* @__PURE__ */ P.jsx(Vi.StrictMode, { children: /* @__PURE__ */ P.jsx(Zu, {}) })
);
