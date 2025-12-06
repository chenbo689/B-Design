import ee from "react";
var p = { exports: {} }, _ = {};
var F;
function re() {
  if (F) return _;
  F = 1;
  var l = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function c(u, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var f in o)
        f !== "key" && (s[f] = o[f]);
    } else s = o;
    return o = s.ref, {
      $$typeof: l,
      type: u,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return _.Fragment = m, _.jsx = c, _.jsxs = c, _;
}
var E = {};
var D;
function te() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case q:
          return "Profiler";
        case U:
          return "StrictMode";
        case G:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case O:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function c(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), m(e);
      }
    }
    function u(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function v() {
      var e = l(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, r, t, n, R, P) {
      var a = t.ref;
      return e = {
        $$typeof: h,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, r, t, n, R, P) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              y(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(a);
      if (g.call(r, "key")) {
        a = l(e);
        var d = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          d,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), i(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var j in r)
          j !== "key" && (t[j] = r[j]);
      } else t = r;
      return a && f(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        a,
        t,
        o(),
        R,
        P
      );
    }
    function y(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === O && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    var b = ee, h = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), V = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), A = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, Q = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, Y = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), $ = S(u(s)), I = {};
    E.Fragment = k, E.jsx = function(e, r, t) {
      var n = 1e4 > A.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : Y,
        n ? S(u(e)) : $
      );
    }, E.jsxs = function(e, r, t) {
      var n = 1e4 > A.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : Y,
        n ? S(u(e)) : $
      );
    };
  })()), E;
}
var L;
function ne() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? p.exports = re() : p.exports = te()), p.exports;
}
var M = ne();
const oe = ({
  variant: l = "primary",
  size: m = "medium",
  disabled: c = !1,
  loading: u = !1,
  onClick: o,
  children: s,
  className: i = "",
  type: f = "button",
  ...v
}) => {
  const T = [
    "btn",
    `btn--${l}`,
    `btn--${m}`,
    c && "btn--disabled",
    u && "btn--loading",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ M.jsxs(
    "button",
    {
      type: f,
      className: T,
      disabled: c || u,
      onClick: o,
      ...v,
      children: [
        u && /* @__PURE__ */ M.jsx("span", { className: "btn__spinner" }),
        s
      ]
    }
  );
};
export {
  oe as Button
};
