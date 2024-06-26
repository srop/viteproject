function X_(J) {
  return J && J.__esModule && Object.prototype.hasOwnProperty.call(J, "default") ? J.default : J;
}
var p0 = { exports: {} }, Yp = {}, v0 = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function K_() {
  if (K1)
    return Et;
  K1 = 1;
  var J = Symbol.for("react.element"), Z = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), Kt = Symbol.for("react.strict_mode"), on = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), S = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), de = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), re = Symbol.iterator;
  function he(_) {
    return _ === null || typeof _ != "object" ? null : (_ = re && _[re] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Be = Object.assign, Tt = {};
  function dt(_, V, ze) {
    this.props = _, this.context = V, this.refs = Tt, this.updater = ze || ue;
  }
  dt.prototype.isReactComponent = {}, dt.prototype.setState = function(_, V) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, V, "setState");
  }, dt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function dn() {
  }
  dn.prototype = dt.prototype;
  function rt(_, V, ze) {
    this.props = _, this.context = V, this.refs = Tt, this.updater = ze || ue;
  }
  var We = rt.prototype = new dn();
  We.constructor = rt, Be(We, dt.prototype), We.isPureReactComponent = !0;
  var pt = Array.isArray, ke = Object.prototype.hasOwnProperty, ot = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function tn(_, V, ze) {
    var Ve, Je = {}, Ze = null, mt = null;
    if (V != null)
      for (Ve in V.ref !== void 0 && (mt = V.ref), V.key !== void 0 && (Ze = "" + V.key), V)
        ke.call(V, Ve) && !He.hasOwnProperty(Ve) && (Je[Ve] = V[Ve]);
    var at = arguments.length - 2;
    if (at === 1)
      Je.children = ze;
    else if (1 < at) {
      for (var it = Array(at), Zt = 0; Zt < at; Zt++)
        it[Zt] = arguments[Zt + 2];
      Je.children = it;
    }
    if (_ && _.defaultProps)
      for (Ve in at = _.defaultProps, at)
        Je[Ve] === void 0 && (Je[Ve] = at[Ve]);
    return { $$typeof: J, type: _, key: Ze, ref: mt, props: Je, _owner: ot.current };
  }
  function bn(_, V) {
    return { $$typeof: J, type: _.type, key: V, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Yt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === J;
  }
  function bt(_) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(ze) {
      return V[ze];
    });
  }
  var En = /\/+/g;
  function Ne(_, V) {
    return typeof _ == "object" && _ !== null && _.key != null ? bt("" + _.key) : V.toString(36);
  }
  function Xe(_, V, ze, Ve, Je) {
    var Ze = typeof _;
    (Ze === "undefined" || Ze === "boolean") && (_ = null);
    var mt = !1;
    if (_ === null)
      mt = !0;
    else
      switch (Ze) {
        case "string":
        case "number":
          mt = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case J:
            case Z:
              mt = !0;
          }
      }
    if (mt)
      return mt = _, Je = Je(mt), _ = Ve === "" ? "." + Ne(mt, 0) : Ve, pt(Je) ? (ze = "", _ != null && (ze = _.replace(En, "$&/") + "/"), Xe(Je, V, ze, "", function(Zt) {
        return Zt;
      })) : Je != null && (Yt(Je) && (Je = bn(Je, ze + (!Je.key || mt && mt.key === Je.key ? "" : ("" + Je.key).replace(En, "$&/") + "/") + _)), V.push(Je)), 1;
    if (mt = 0, Ve = Ve === "" ? "." : Ve + ":", pt(_))
      for (var at = 0; at < _.length; at++) {
        Ze = _[at];
        var it = Ve + Ne(Ze, at);
        mt += Xe(Ze, V, ze, it, Je);
      }
    else if (it = he(_), typeof it == "function")
      for (_ = it.call(_), at = 0; !(Ze = _.next()).done; )
        Ze = Ze.value, it = Ve + Ne(Ze, at++), mt += Xe(Ze, V, ze, it, Je);
    else if (Ze === "object")
      throw V = String(_), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return mt;
  }
  function zt(_, V, ze) {
    if (_ == null)
      return _;
    var Ve = [], Je = 0;
    return Xe(_, Ve, "", "", function(Ze) {
      return V.call(ze, Ze, Je++);
    }), Ve;
  }
  function wt(_) {
    if (_._status === -1) {
      var V = _._result;
      V = V(), V.then(function(ze) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = ze);
      }, function(ze) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = ze);
      }), _._status === -1 && (_._status = 0, _._result = V);
    }
    if (_._status === 1)
      return _._result.default;
    throw _._result;
  }
  var me = { current: null }, K = { transition: null }, be = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: K, ReactCurrentOwner: ot };
  function ae() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: zt, forEach: function(_, V, ze) {
    zt(_, function() {
      V.apply(this, arguments);
    }, ze);
  }, count: function(_) {
    var V = 0;
    return zt(_, function() {
      V++;
    }), V;
  }, toArray: function(_) {
    return zt(_, function(V) {
      return V;
    }) || [];
  }, only: function(_) {
    if (!Yt(_))
      throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Et.Component = dt, Et.Fragment = F, Et.Profiler = on, Et.PureComponent = rt, Et.StrictMode = Kt, Et.Suspense = ve, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, Et.act = ae, Et.cloneElement = function(_, V, ze) {
    if (_ == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ve = Be({}, _.props), Je = _.key, Ze = _.ref, mt = _._owner;
    if (V != null) {
      if (V.ref !== void 0 && (Ze = V.ref, mt = ot.current), V.key !== void 0 && (Je = "" + V.key), _.type && _.type.defaultProps)
        var at = _.type.defaultProps;
      for (it in V)
        ke.call(V, it) && !He.hasOwnProperty(it) && (Ve[it] = V[it] === void 0 && at !== void 0 ? at[it] : V[it]);
    }
    var it = arguments.length - 2;
    if (it === 1)
      Ve.children = ze;
    else if (1 < it) {
      at = Array(it);
      for (var Zt = 0; Zt < it; Zt++)
        at[Zt] = arguments[Zt + 2];
      Ve.children = at;
    }
    return { $$typeof: J, type: _.type, key: Je, ref: Ze, props: Ve, _owner: mt };
  }, Et.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: lt, _context: _ }, _.Consumer = _;
  }, Et.createElement = tn, Et.createFactory = function(_) {
    var V = tn.bind(null, _);
    return V.type = _, V;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(_) {
    return { $$typeof: $t, render: _ };
  }, Et.isValidElement = Yt, Et.lazy = function(_) {
    return { $$typeof: ut, _payload: { _status: -1, _result: _ }, _init: wt };
  }, Et.memo = function(_, V) {
    return { $$typeof: de, type: _, compare: V === void 0 ? null : V };
  }, Et.startTransition = function(_) {
    var V = K.transition;
    K.transition = {};
    try {
      _();
    } finally {
      K.transition = V;
    }
  }, Et.unstable_act = ae, Et.useCallback = function(_, V) {
    return me.current.useCallback(_, V);
  }, Et.useContext = function(_) {
    return me.current.useContext(_);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(_) {
    return me.current.useDeferredValue(_);
  }, Et.useEffect = function(_, V) {
    return me.current.useEffect(_, V);
  }, Et.useId = function() {
    return me.current.useId();
  }, Et.useImperativeHandle = function(_, V, ze) {
    return me.current.useImperativeHandle(_, V, ze);
  }, Et.useInsertionEffect = function(_, V) {
    return me.current.useInsertionEffect(_, V);
  }, Et.useLayoutEffect = function(_, V) {
    return me.current.useLayoutEffect(_, V);
  }, Et.useMemo = function(_, V) {
    return me.current.useMemo(_, V);
  }, Et.useReducer = function(_, V, ze) {
    return me.current.useReducer(_, V, ze);
  }, Et.useRef = function(_) {
    return me.current.useRef(_);
  }, Et.useState = function(_) {
    return me.current.useState(_);
  }, Et.useSyncExternalStore = function(_, V, ze) {
    return me.current.useSyncExternalStore(_, V, ze);
  }, Et.useTransition = function() {
    return me.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var Wp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Wp.exports;
var Z1;
function Z_() {
  return Z1 || (Z1 = 1, function(J, Z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var F = "18.3.1", Kt = Symbol.for("react.element"), on = Symbol.for("react.portal"), lt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), $t = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), de = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), Tt = Symbol.for("react.offscreen"), dt = Symbol.iterator, dn = "@@iterator";
      function rt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = dt && h[dt] || h[dn];
        return typeof C == "function" ? C : null;
      }
      var We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pt = {
        transition: null
      }, ke = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ot = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, tn = null;
      function bn(h) {
        tn = h;
      }
      He.setExtraStackFrame = function(h) {
        tn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        tn && (h += tn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Yt = !1, bt = !1, En = !1, Ne = !1, Xe = !1, zt = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: pt,
        ReactCurrentOwner: ot
      };
      zt.ReactDebugCurrentFrame = He, zt.ReactCurrentActQueue = ke;
      function wt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
            N[A - 1] = arguments[A];
          K("warn", h, N);
        }
      }
      function me(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
            N[A - 1] = arguments[A];
          K("error", h, N);
        }
      }
      function K(h, C, N) {
        {
          var A = zt.ReactDebugCurrentFrame, q = A.getStackAddendum();
          q !== "" && (C += "%s", N = N.concat([q]));
          var Ae = N.map(function(ie) {
            return String(ie);
          });
          Ae.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ae);
        }
      }
      var be = {};
      function ae(h, C) {
        {
          var N = h.constructor, A = N && (N.displayName || N.name) || "ReactClass", q = A + "." + C;
          if (be[q])
            return;
          me("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, A), be[q] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          ae(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, A) {
          ae(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, A) {
          ae(h, "setState");
        }
      }, V = Object.assign, ze = {};
      Object.freeze(ze);
      function Ve(h, C, N) {
        this.props = h, this.context = C, this.refs = ze, this.updater = N || _;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ve.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Je = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ze = function(h, C) {
          Object.defineProperty(Ve.prototype, h, {
            get: function() {
              wt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var mt in Je)
          Je.hasOwnProperty(mt) && Ze(mt, Je[mt]);
      }
      function at() {
      }
      at.prototype = Ve.prototype;
      function it(h, C, N) {
        this.props = h, this.context = C, this.refs = ze, this.updater = N || _;
      }
      var Zt = it.prototype = new at();
      Zt.constructor = it, V(Zt, Ve.prototype), Zt.isPureReactComponent = !0;
      function vr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Pr = Array.isArray;
      function pn(h) {
        return Pr(h);
      }
      function Qn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Hn(h) {
        try {
          return Nn(h), !1;
        } catch {
          return !0;
        }
      }
      function Nn(h) {
        return "" + h;
      }
      function _n(h) {
        if (Hn(h))
          return me("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(h)), Nn(h);
      }
      function Br(h, C, N) {
        var A = h.displayName;
        if (A)
          return A;
        var q = C.displayName || C.name || "";
        return q !== "" ? N + "(" + q + ")" : N;
      }
      function $r(h) {
        return h.displayName || "Context";
      }
      function Wn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && me("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case lt:
            return "Fragment";
          case on:
            return "Portal";
          case $t:
            return "Profiler";
          case S:
            return "StrictMode";
          case re:
            return "Suspense";
          case he:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case de:
              var C = h;
              return $r(C) + ".Consumer";
            case ve:
              var N = h;
              return $r(N._context) + ".Provider";
            case ut:
              return Br(h, h.render, "ForwardRef");
            case ue:
              var A = h.displayName || null;
              return A !== null ? A : Wn(h.type) || "Memo";
            case Be: {
              var q = h, Ae = q._payload, ie = q._init;
              try {
                return Wn(ie(Ae));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var hr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, mr, fa, nr;
      nr = {};
      function Ir(h) {
        if (hr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function vn(h) {
        if (hr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function wr(h, C) {
        var N = function() {
          mr || (mr = !0, me("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function ci(h, C) {
        var N = function() {
          fa || (fa = !0, me("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function da(h) {
        if (typeof h.ref == "string" && ot.current && h.__self && ot.current.stateNode !== h.__self) {
          var C = Wn(ot.current.type);
          nr[C] || (me('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), nr[C] = !0);
        }
      }
      var ee = function(h, C, N, A, q, Ae, ie) {
        var Me = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Kt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ie,
          // Record the component responsible for creating this element.
          _owner: Ae
        };
        return Me._store = {}, Object.defineProperty(Me._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Me, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: A
        }), Object.defineProperty(Me, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
      };
      function _e(h, C, N) {
        var A, q = {}, Ae = null, ie = null, Me = null, st = null;
        if (C != null) {
          Ir(C) && (ie = C.ref, da(C)), vn(C) && (_n(C.key), Ae = "" + C.key), Me = C.__self === void 0 ? null : C.__self, st = C.__source === void 0 ? null : C.__source;
          for (A in C)
            hr.call(C, A) && !Yr.hasOwnProperty(A) && (q[A] = C[A]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          q.children = N;
        else if (xt > 1) {
          for (var Gt = Array(xt), Bt = 0; Bt < xt; Bt++)
            Gt[Bt] = arguments[Bt + 2];
          Object.freeze && Object.freeze(Gt), q.children = Gt;
        }
        if (h && h.defaultProps) {
          var qt = h.defaultProps;
          for (A in qt)
            q[A] === void 0 && (q[A] = qt[A]);
        }
        if (Ae || ie) {
          var Jt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ae && wr(q, Jt), ie && ci(q, Jt);
        }
        return ee(h, Ae, ie, Me, st, ot.current, q);
      }
      function et(h, C) {
        var N = ee(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Mt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var A, q = V({}, h.props), Ae = h.key, ie = h.ref, Me = h._self, st = h._source, xt = h._owner;
        if (C != null) {
          Ir(C) && (ie = C.ref, xt = ot.current), vn(C) && (_n(C.key), Ae = "" + C.key);
          var Gt;
          h.type && h.type.defaultProps && (Gt = h.type.defaultProps);
          for (A in C)
            hr.call(C, A) && !Yr.hasOwnProperty(A) && (C[A] === void 0 && Gt !== void 0 ? q[A] = Gt[A] : q[A] = C[A]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          q.children = N;
        else if (Bt > 1) {
          for (var qt = Array(Bt), Jt = 0; Jt < Bt; Jt++)
            qt[Jt] = arguments[Jt + 2];
          q.children = qt;
        }
        return ee(h.type, Ae, ie, Me, st, xt, q);
      }
      function Ut(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Kt;
      }
      var Dn = ".", hn = ":";
      function yr(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, A = h.replace(C, function(q) {
          return N[q];
        });
        return "$" + A;
      }
      var Pt = !1, xr = /\/+/g;
      function At(h) {
        return h.replace(xr, "$&/");
      }
      function Ft(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (_n(h.key), yr("" + h.key)) : C.toString(36);
      }
      function Za(h, C, N, A, q) {
        var Ae = typeof h;
        (Ae === "undefined" || Ae === "boolean") && (h = null);
        var ie = !1;
        if (h === null)
          ie = !0;
        else
          switch (Ae) {
            case "string":
            case "number":
              ie = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Kt:
                case on:
                  ie = !0;
              }
          }
        if (ie) {
          var Me = h, st = q(Me), xt = A === "" ? Dn + Ft(Me, 0) : A;
          if (pn(st)) {
            var Gt = "";
            xt != null && (Gt = At(xt) + "/"), Za(st, C, Gt, "", function($f) {
              return $f;
            });
          } else
            st != null && (Ut(st) && (st.key && (!Me || Me.key !== st.key) && _n(st.key), st = et(
              st,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (st.key && (!Me || Me.key !== st.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                At("" + st.key) + "/"
              ) : "") + xt
            )), C.push(st));
          return 1;
        }
        var Bt, qt, Jt = 0, St = A === "" ? Dn : A + hn;
        if (pn(h))
          for (var Ui = 0; Ui < h.length; Ui++)
            Bt = h[Ui], qt = St + Ft(Bt, Ui), Jt += Za(Bt, C, N, qt, q);
        else {
          var Bu = rt(h);
          if (typeof Bu == "function") {
            var Go = h;
            Bu === Go.entries && (Pt || wt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Pt = !0);
            for (var Bf = Bu.call(Go), ni, qo = 0; !(ni = Bf.next()).done; )
              Bt = ni.value, qt = St + Ft(Bt, qo++), Jt += Za(Bt, C, N, qt, q);
          } else if (Ae === "object") {
            var Xo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Xo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Xo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function _a(h, C, N) {
        if (h == null)
          return h;
        var A = [], q = 0;
        return Za(h, A, "", "", function(Ae) {
          return C.call(N, Ae, q++);
        }), A;
      }
      function ul(h) {
        var C = 0;
        return _a(h, function() {
          C++;
        }), C;
      }
      function Il(h, C, N) {
        _a(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function Lu(h) {
        return _a(h, function(C) {
          return C;
        }) || [];
      }
      function Li(h) {
        if (!Ut(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ol(h) {
        var C = {
          $$typeof: de,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ve,
          _context: C
        };
        var N = !1, A = !1, q = !1;
        {
          var Ae = {
            $$typeof: de,
            _context: C
          };
          Object.defineProperties(Ae, {
            Provider: {
              get: function() {
                return A || (A = !0, me("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ie) {
                C.Provider = ie;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ie) {
                C._currentValue = ie;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ie) {
                C._currentValue2 = ie;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ie) {
                C._threadCount = ie;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, me("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ie) {
                q || (wt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ie), q = !0);
              }
            }
          }), C.Consumer = Ae;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, fi = 0, va = 1, Ja = 2;
      function br(h) {
        if (h._status === pa) {
          var C = h._result, N = C();
          if (N.then(function(Ae) {
            if (h._status === fi || h._status === pa) {
              var ie = h;
              ie._status = va, ie._result = Ae;
            }
          }, function(Ae) {
            if (h._status === fi || h._status === pa) {
              var ie = h;
              ie._status = Ja, ie._result = Ae;
            }
          }), h._status === pa) {
            var A = h;
            A._status = fi, A._result = N;
          }
        }
        if (h._status === va) {
          var q = h._result;
          return q === void 0 && me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw h._result;
      }
      function ha(h) {
        var C = {
          // We use these fields to store the result.
          _status: pa,
          _result: h
        }, N = {
          $$typeof: Be,
          _payload: C,
          _init: br
        };
        {
          var A, q;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return A;
              },
              set: function(Ae) {
                me("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), A = Ae, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Ae) {
                me("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Ae, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function di(h) {
        h != null && h.$$typeof === ue ? me("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? me("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && me("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && me("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: ut,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(A) {
              N = A, !h.name && !h.displayName && (h.displayName = A);
            }
          });
        }
        return C;
      }
      var pi;
      pi = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === lt || h === $t || Xe || h === S || h === re || h === he || Ne || h === Tt || Yt || bt || En || typeof h == "object" && h !== null && (h.$$typeof === Be || h.$$typeof === ue || h.$$typeof === ve || h.$$typeof === de || h.$$typeof === ut || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === pi || h.getModuleId !== void 0));
      }
      function Y(h, C) {
        R(h) || me("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var A;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return A;
            },
            set: function(q) {
              A = q, !h.name && !h.displayName && (h.displayName = q);
            }
          });
        }
        return N;
      }
      function G() {
        var h = We.current;
        return h === null && me(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Te(h) {
        var C = G();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? me("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && me("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function ft(h) {
        var C = G();
        return C.useState(h);
      }
      function yt(h, C, N) {
        var A = G();
        return A.useReducer(h, C, N);
      }
      function Ue(h) {
        var C = G();
        return C.useRef(h);
      }
      function tt(h, C) {
        var N = G();
        return N.useEffect(h, C);
      }
      function zn(h, C) {
        var N = G();
        return N.useInsertionEffect(h, C);
      }
      function Wt(h, C) {
        var N = G();
        return N.useLayoutEffect(h, C);
      }
      function nn(h, C) {
        var N = G();
        return N.useCallback(h, C);
      }
      function gr(h, C) {
        var N = G();
        return N.useMemo(h, C);
      }
      function vi(h, C, N) {
        var A = G();
        return A.useImperativeHandle(h, C, N);
      }
      function _t(h, C) {
        {
          var N = G();
          return N.useDebugValue(h, C);
        }
      }
      function Gn() {
        var h = G();
        return h.useTransition();
      }
      function _r(h) {
        var C = G();
        return C.useDeferredValue(h);
      }
      function nt() {
        var h = G();
        return h.useId();
      }
      function Da(h, C, N) {
        var A = G();
        return A.useSyncExternalStore(h, C, N);
      }
      var sl = 0, Mu, cl, Qr, Yo, Dr, Io, Qo;
      function Xs() {
      }
      Xs.__reactDisabledLog = !0;
      function Nu() {
        {
          if (sl === 0) {
            Mu = console.log, cl = console.info, Qr = console.warn, Yo = console.error, Dr = console.group, Io = console.groupCollapsed, Qo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Xs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          sl++;
        }
      }
      function fl() {
        {
          if (sl--, sl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: V({}, h, {
                value: Mu
              }),
              info: V({}, h, {
                value: cl
              }),
              warn: V({}, h, {
                value: Qr
              }),
              error: V({}, h, {
                value: Yo
              }),
              group: V({}, h, {
                value: Dr
              }),
              groupCollapsed: V({}, h, {
                value: Io
              }),
              groupEnd: V({}, h, {
                value: Qo
              })
            });
          }
          sl < 0 && me("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ei = zt.ReactCurrentDispatcher, kr;
      function dl(h, C, N) {
        {
          if (kr === void 0)
            try {
              throw Error();
            } catch (q) {
              var A = q.stack.trim().match(/\n( *(at )?)/);
              kr = A && A[1] || "";
            }
          return `
` + kr + h;
        }
      }
      var pl = !1, vl;
      {
        var zu = typeof WeakMap == "function" ? WeakMap : Map;
        vl = new zu();
      }
      function Uu(h, C) {
        if (!h || pl)
          return "";
        {
          var N = vl.get(h);
          if (N !== void 0)
            return N;
        }
        var A;
        pl = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ae;
        Ae = ei.current, ei.current = null, Nu();
        try {
          if (C) {
            var ie = function() {
              throw Error();
            };
            if (Object.defineProperty(ie.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ie, []);
              } catch (St) {
                A = St;
              }
              Reflect.construct(h, [], ie);
            } else {
              try {
                ie.call();
              } catch (St) {
                A = St;
              }
              h.call(ie.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (St) {
              A = St;
            }
            h();
          }
        } catch (St) {
          if (St && A && typeof St.stack == "string") {
            for (var Me = St.stack.split(`
`), st = A.stack.split(`
`), xt = Me.length - 1, Gt = st.length - 1; xt >= 1 && Gt >= 0 && Me[xt] !== st[Gt]; )
              Gt--;
            for (; xt >= 1 && Gt >= 0; xt--, Gt--)
              if (Me[xt] !== st[Gt]) {
                if (xt !== 1 || Gt !== 1)
                  do
                    if (xt--, Gt--, Gt < 0 || Me[xt] !== st[Gt]) {
                      var Bt = `
` + Me[xt].replace(" at new ", " at ");
                      return h.displayName && Bt.includes("<anonymous>") && (Bt = Bt.replace("<anonymous>", h.displayName)), typeof h == "function" && vl.set(h, Bt), Bt;
                    }
                  while (xt >= 1 && Gt >= 0);
                break;
              }
          }
        } finally {
          pl = !1, ei.current = Ae, fl(), Error.prepareStackTrace = q;
        }
        var qt = h ? h.displayName || h.name : "", Jt = qt ? dl(qt) : "";
        return typeof h == "function" && vl.set(h, Jt), Jt;
      }
      function Mi(h, C, N) {
        return Uu(h, !1);
      }
      function Pf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function hi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Uu(h, Pf(h));
        if (typeof h == "string")
          return dl(h);
        switch (h) {
          case re:
            return dl("Suspense");
          case he:
            return dl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ut:
              return Mi(h.render);
            case ue:
              return hi(h.type, C, N);
            case Be: {
              var A = h, q = A._payload, Ae = A._init;
              try {
                return hi(Ae(q), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Dt = {}, Au = zt.ReactDebugCurrentFrame;
      function Ql(h) {
        if (h) {
          var C = h._owner, N = hi(h.type, h._source, C ? C.type : null);
          Au.setExtraStackFrame(N);
        } else
          Au.setExtraStackFrame(null);
      }
      function Fu(h, C, N, A, q) {
        {
          var Ae = Function.call.bind(hr);
          for (var ie in h)
            if (Ae(h, ie)) {
              var Me = void 0;
              try {
                if (typeof h[ie] != "function") {
                  var st = Error((A || "React class") + ": " + N + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Me = h[ie](C, ie, A, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (xt) {
                Me = xt;
              }
              Me && !(Me instanceof Error) && (Ql(q), me("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", N, ie, typeof Me), Ql(null)), Me instanceof Error && !(Me.message in Dt) && (Dt[Me.message] = !0, Ql(q), me("Failed %s type: %s", N, Me.message), Ql(null));
            }
        }
      }
      function gt(h) {
        if (h) {
          var C = h._owner, N = hi(h.type, h._source, C ? C.type : null);
          bn(N);
        } else
          bn(null);
      }
      var ju;
      ju = !1;
      function Hu() {
        if (ot.current) {
          var h = Wn(ot.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ie(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Wl(h) {
        return h != null ? Ie(h.__source) : "";
      }
      var mn = {};
      function Wr(h) {
        var C = Hu();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function Or(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = Wr(C);
          if (!mn[N]) {
            mn[N] = !0;
            var A = "";
            h && h._owner && h._owner !== ot.current && (A = " It was passed a child from " + Wn(h._owner.type) + "."), gt(h), me('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, A), gt(null);
          }
        }
      }
      function hl(h, C) {
        if (typeof h == "object") {
          if (pn(h))
            for (var N = 0; N < h.length; N++) {
              var A = h[N];
              Ut(A) && Or(A, C);
            }
          else if (Ut(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var q = rt(h);
            if (typeof q == "function" && q !== h.entries)
              for (var Ae = q.call(h), ie; !(ie = Ae.next()).done; )
                Ut(ie.value) && Or(ie.value, C);
          }
        }
      }
      function Cn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === ut || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            N = C.propTypes;
          else
            return;
          if (N) {
            var A = Wn(C);
            Fu(N, h.props, "prop", A, h);
          } else if (C.PropTypes !== void 0 && !ju) {
            ju = !0;
            var q = Wn(C);
            me("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && me("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function jt(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var A = C[N];
            if (A !== "children" && A !== "key") {
              gt(h), me("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), gt(null);
              break;
            }
          }
          h.ref !== null && (gt(h), me("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
        }
      }
      function Ks(h, C, N) {
        var A = R(h);
        if (!A) {
          var q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = Wl(C);
          Ae ? q += Ae : q += Hu();
          var ie;
          h === null ? ie = "null" : pn(h) ? ie = "array" : h !== void 0 && h.$$typeof === Kt ? (ie = "<" + (Wn(h.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof h, me("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, q);
        }
        var Me = _e.apply(this, arguments);
        if (Me == null)
          return Me;
        if (A)
          for (var st = 2; st < arguments.length; st++)
            hl(arguments[st], h);
        return h === lt ? jt(Me) : Cn(Me), Me;
      }
      var Gr = !1;
      function qn(h) {
        var C = Ks.bind(null, h);
        return C.type = h, Gr || (Gr = !0, wt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return wt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function mi(h, C, N) {
        for (var A = Mt.apply(this, arguments), q = 2; q < arguments.length; q++)
          hl(arguments[q], A.type);
        return Cn(A), A;
      }
      function Zs(h, C) {
        var N = pt.transition;
        pt.transition = {};
        var A = pt.transition;
        pt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (pt.transition = N, N === null && A._updatedFibers) {
            var q = A._updatedFibers.size;
            q > 10 && wt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), A._updatedFibers.clear();
          }
        }
      }
      var Ni = !1, ml = null;
      function Js(h) {
        if (ml === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = J && J[C];
            ml = N.call(J, "timers").setImmediate;
          } catch {
            ml = function(q) {
              Ni === !1 && (Ni = !0, typeof MessageChannel > "u" && me("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ae = new MessageChannel();
              Ae.port1.onmessage = q, Ae.port2.postMessage(void 0);
            };
          }
        return ml(h);
      }
      var ka = 0, yl = !1;
      function zi(h) {
        {
          var C = ka;
          ka++, ke.current === null && (ke.current = []);
          var N = ke.isBatchingLegacy, A;
          try {
            if (ke.isBatchingLegacy = !0, A = h(), !N && ke.didScheduleLegacyUpdate) {
              var q = ke.current;
              q !== null && (ke.didScheduleLegacyUpdate = !1, Sl(q));
            }
          } catch (qt) {
            throw Oa(C), qt;
          } finally {
            ke.isBatchingLegacy = N;
          }
          if (A !== null && typeof A == "object" && typeof A.then == "function") {
            var Ae = A, ie = !1, Me = {
              then: function(qt, Jt) {
                ie = !0, Ae.then(function(St) {
                  Oa(C), ka === 0 ? Vu(St, qt, Jt) : qt(St);
                }, function(St) {
                  Oa(C), Jt(St);
                });
              }
            };
            return !yl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ie || (yl = !0, me("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Me;
          } else {
            var st = A;
            if (Oa(C), ka === 0) {
              var xt = ke.current;
              xt !== null && (Sl(xt), ke.current = null);
              var Gt = {
                then: function(qt, Jt) {
                  ke.current === null ? (ke.current = [], Vu(st, qt, Jt)) : qt(st);
                }
              };
              return Gt;
            } else {
              var Bt = {
                then: function(qt, Jt) {
                  qt(st);
                }
              };
              return Bt;
            }
          }
        }
      }
      function Oa(h) {
        h !== ka - 1 && me("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ka = h;
      }
      function Vu(h, C, N) {
        {
          var A = ke.current;
          if (A !== null)
            try {
              Sl(A), Js(function() {
                A.length === 0 ? (ke.current = null, C(h)) : Vu(h, C, N);
              });
            } catch (q) {
              N(q);
            }
          else
            C(h);
        }
      }
      var gl = !1;
      function Sl(h) {
        if (!gl) {
          gl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (A) {
            throw h = h.slice(C + 1), A;
          } finally {
            gl = !1;
          }
        }
      }
      var Gl = Ks, Pu = mi, Wo = qn, ti = {
        map: _a,
        forEach: Il,
        count: ul,
        toArray: Lu,
        only: Li
      };
      Z.Children = ti, Z.Component = Ve, Z.Fragment = lt, Z.Profiler = $t, Z.PureComponent = it, Z.StrictMode = S, Z.Suspense = re, Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zt, Z.act = zi, Z.cloneElement = Pu, Z.createContext = ol, Z.createElement = Gl, Z.createFactory = Wo, Z.createRef = vr, Z.forwardRef = di, Z.isValidElement = Ut, Z.lazy = ha, Z.memo = Y, Z.startTransition = Zs, Z.unstable_act = zi, Z.useCallback = nn, Z.useContext = Te, Z.useDebugValue = _t, Z.useDeferredValue = _r, Z.useEffect = tt, Z.useId = nt, Z.useImperativeHandle = vi, Z.useInsertionEffect = zn, Z.useLayoutEffect = Wt, Z.useMemo = gr, Z.useReducer = yt, Z.useRef = Ue, Z.useState = ft, Z.useSyncExternalStore = Da, Z.useTransition = Gn, Z.version = F, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Wp, Wp.exports)), Wp.exports;
}
process.env.NODE_ENV === "production" ? v0.exports = K_() : v0.exports = Z_();
var qp = v0.exports;
const J_ = /* @__PURE__ */ X_(qp);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function eD() {
  if (J1)
    return Yp;
  J1 = 1;
  var J = qp, Z = Symbol.for("react.element"), F = Symbol.for("react.fragment"), Kt = Object.prototype.hasOwnProperty, on = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S($t, ve, de) {
    var ut, re = {}, he = null, ue = null;
    de !== void 0 && (he = "" + de), ve.key !== void 0 && (he = "" + ve.key), ve.ref !== void 0 && (ue = ve.ref);
    for (ut in ve)
      Kt.call(ve, ut) && !lt.hasOwnProperty(ut) && (re[ut] = ve[ut]);
    if ($t && $t.defaultProps)
      for (ut in ve = $t.defaultProps, ve)
        re[ut] === void 0 && (re[ut] = ve[ut]);
    return { $$typeof: Z, type: $t, key: he, ref: ue, props: re, _owner: on.current };
  }
  return Yp.Fragment = F, Yp.jsx = S, Yp.jsxs = S, Yp;
}
var Ip = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function tD() {
  return eR || (eR = 1, process.env.NODE_ENV !== "production" && function() {
    var J = qp, Z = Symbol.for("react.element"), F = Symbol.for("react.portal"), Kt = Symbol.for("react.fragment"), on = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), $t = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), ut = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Be = Symbol.iterator, Tt = "@@iterator";
    function dt(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = Be && R[Be] || R[Tt];
      return typeof Y == "function" ? Y : null;
    }
    var dn = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(R) {
      {
        for (var Y = arguments.length, G = new Array(Y > 1 ? Y - 1 : 0), Te = 1; Te < Y; Te++)
          G[Te - 1] = arguments[Te];
        We("error", R, G);
      }
    }
    function We(R, Y, G) {
      {
        var Te = dn.ReactDebugCurrentFrame, ft = Te.getStackAddendum();
        ft !== "" && (Y += "%s", G = G.concat([ft]));
        var yt = G.map(function(Ue) {
          return String(Ue);
        });
        yt.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, yt);
      }
    }
    var pt = !1, ke = !1, ot = !1, He = !1, tn = !1, bn;
    bn = Symbol.for("react.module.reference");
    function Yt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Kt || R === lt || tn || R === on || R === de || R === ut || He || R === ue || pt || ke || ot || typeof R == "object" && R !== null && (R.$$typeof === he || R.$$typeof === re || R.$$typeof === S || R.$$typeof === $t || R.$$typeof === ve || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === bn || R.getModuleId !== void 0));
    }
    function bt(R, Y, G) {
      var Te = R.displayName;
      if (Te)
        return Te;
      var ft = Y.displayName || Y.name || "";
      return ft !== "" ? G + "(" + ft + ")" : G;
    }
    function En(R) {
      return R.displayName || "Context";
    }
    function Ne(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && rt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Kt:
          return "Fragment";
        case F:
          return "Portal";
        case lt:
          return "Profiler";
        case on:
          return "StrictMode";
        case de:
          return "Suspense";
        case ut:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case $t:
            var Y = R;
            return En(Y) + ".Consumer";
          case S:
            var G = R;
            return En(G._context) + ".Provider";
          case ve:
            return bt(R, R.render, "ForwardRef");
          case re:
            var Te = R.displayName || null;
            return Te !== null ? Te : Ne(R.type) || "Memo";
          case he: {
            var ft = R, yt = ft._payload, Ue = ft._init;
            try {
              return Ne(Ue(yt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Xe = Object.assign, zt = 0, wt, me, K, be, ae, _, V;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function Ve() {
      {
        if (zt === 0) {
          wt = console.log, me = console.info, K = console.warn, be = console.error, ae = console.group, _ = console.groupCollapsed, V = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        zt++;
      }
    }
    function Je() {
      {
        if (zt--, zt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Xe({}, R, {
              value: wt
            }),
            info: Xe({}, R, {
              value: me
            }),
            warn: Xe({}, R, {
              value: K
            }),
            error: Xe({}, R, {
              value: be
            }),
            group: Xe({}, R, {
              value: ae
            }),
            groupCollapsed: Xe({}, R, {
              value: _
            }),
            groupEnd: Xe({}, R, {
              value: V
            })
          });
        }
        zt < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ze = dn.ReactCurrentDispatcher, mt;
    function at(R, Y, G) {
      {
        if (mt === void 0)
          try {
            throw Error();
          } catch (ft) {
            var Te = ft.stack.trim().match(/\n( *(at )?)/);
            mt = Te && Te[1] || "";
          }
        return `
` + mt + R;
      }
    }
    var it = !1, Zt;
    {
      var vr = typeof WeakMap == "function" ? WeakMap : Map;
      Zt = new vr();
    }
    function Pr(R, Y) {
      if (!R || it)
        return "";
      {
        var G = Zt.get(R);
        if (G !== void 0)
          return G;
      }
      var Te;
      it = !0;
      var ft = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var yt;
      yt = Ze.current, Ze.current = null, Ve();
      try {
        if (Y) {
          var Ue = function() {
            throw Error();
          };
          if (Object.defineProperty(Ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ue, []);
            } catch (Gn) {
              Te = Gn;
            }
            Reflect.construct(R, [], Ue);
          } else {
            try {
              Ue.call();
            } catch (Gn) {
              Te = Gn;
            }
            R.call(Ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Gn) {
            Te = Gn;
          }
          R();
        }
      } catch (Gn) {
        if (Gn && Te && typeof Gn.stack == "string") {
          for (var tt = Gn.stack.split(`
`), zn = Te.stack.split(`
`), Wt = tt.length - 1, nn = zn.length - 1; Wt >= 1 && nn >= 0 && tt[Wt] !== zn[nn]; )
            nn--;
          for (; Wt >= 1 && nn >= 0; Wt--, nn--)
            if (tt[Wt] !== zn[nn]) {
              if (Wt !== 1 || nn !== 1)
                do
                  if (Wt--, nn--, nn < 0 || tt[Wt] !== zn[nn]) {
                    var gr = `
` + tt[Wt].replace(" at new ", " at ");
                    return R.displayName && gr.includes("<anonymous>") && (gr = gr.replace("<anonymous>", R.displayName)), typeof R == "function" && Zt.set(R, gr), gr;
                  }
                while (Wt >= 1 && nn >= 0);
              break;
            }
        }
      } finally {
        it = !1, Ze.current = yt, Je(), Error.prepareStackTrace = ft;
      }
      var vi = R ? R.displayName || R.name : "", _t = vi ? at(vi) : "";
      return typeof R == "function" && Zt.set(R, _t), _t;
    }
    function pn(R, Y, G) {
      return Pr(R, !1);
    }
    function Qn(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Hn(R, Y, G) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Pr(R, Qn(R));
      if (typeof R == "string")
        return at(R);
      switch (R) {
        case de:
          return at("Suspense");
        case ut:
          return at("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ve:
            return pn(R.render);
          case re:
            return Hn(R.type, Y, G);
          case he: {
            var Te = R, ft = Te._payload, yt = Te._init;
            try {
              return Hn(yt(ft), Y, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Nn = Object.prototype.hasOwnProperty, _n = {}, Br = dn.ReactDebugCurrentFrame;
    function $r(R) {
      if (R) {
        var Y = R._owner, G = Hn(R.type, R._source, Y ? Y.type : null);
        Br.setExtraStackFrame(G);
      } else
        Br.setExtraStackFrame(null);
    }
    function Wn(R, Y, G, Te, ft) {
      {
        var yt = Function.call.bind(Nn);
        for (var Ue in R)
          if (yt(R, Ue)) {
            var tt = void 0;
            try {
              if (typeof R[Ue] != "function") {
                var zn = Error((Te || "React class") + ": " + G + " type `" + Ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zn.name = "Invariant Violation", zn;
              }
              tt = R[Ue](Y, Ue, Te, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Wt) {
              tt = Wt;
            }
            tt && !(tt instanceof Error) && ($r(ft), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", G, Ue, typeof tt), $r(null)), tt instanceof Error && !(tt.message in _n) && (_n[tt.message] = !0, $r(ft), rt("Failed %s type: %s", G, tt.message), $r(null));
          }
      }
    }
    var hr = Array.isArray;
    function Yr(R) {
      return hr(R);
    }
    function mr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, G = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return G;
      }
    }
    function fa(R) {
      try {
        return nr(R), !1;
      } catch {
        return !0;
      }
    }
    function nr(R) {
      return "" + R;
    }
    function Ir(R) {
      if (fa(R))
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(R)), nr(R);
    }
    var vn = dn.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, da, ee;
    ee = {};
    function _e(R) {
      if (Nn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function et(R) {
      if (Nn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Mt(R, Y) {
      if (typeof R.ref == "string" && vn.current && Y && vn.current.stateNode !== Y) {
        var G = Ne(vn.current.type);
        ee[G] || (rt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ne(vn.current.type), R.ref), ee[G] = !0);
      }
    }
    function Ut(R, Y) {
      {
        var G = function() {
          ci || (ci = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        G.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function Dn(R, Y) {
      {
        var G = function() {
          da || (da = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        G.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var hn = function(R, Y, G, Te, ft, yt, Ue) {
      var tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Z,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: G,
        props: Ue,
        // Record the component responsible for creating this element.
        _owner: yt
      };
      return tt._store = {}, Object.defineProperty(tt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(tt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ft
      }), Object.freeze && (Object.freeze(tt.props), Object.freeze(tt)), tt;
    };
    function yr(R, Y, G, Te, ft) {
      {
        var yt, Ue = {}, tt = null, zn = null;
        G !== void 0 && (Ir(G), tt = "" + G), et(Y) && (Ir(Y.key), tt = "" + Y.key), _e(Y) && (zn = Y.ref, Mt(Y, ft));
        for (yt in Y)
          Nn.call(Y, yt) && !wr.hasOwnProperty(yt) && (Ue[yt] = Y[yt]);
        if (R && R.defaultProps) {
          var Wt = R.defaultProps;
          for (yt in Wt)
            Ue[yt] === void 0 && (Ue[yt] = Wt[yt]);
        }
        if (tt || zn) {
          var nn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          tt && Ut(Ue, nn), zn && Dn(Ue, nn);
        }
        return hn(R, tt, zn, ft, Te, vn.current, Ue);
      }
    }
    var Pt = dn.ReactCurrentOwner, xr = dn.ReactDebugCurrentFrame;
    function At(R) {
      if (R) {
        var Y = R._owner, G = Hn(R.type, R._source, Y ? Y.type : null);
        xr.setExtraStackFrame(G);
      } else
        xr.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function Za(R) {
      return typeof R == "object" && R !== null && R.$$typeof === Z;
    }
    function _a() {
      {
        if (Pt.current) {
          var R = Ne(Pt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ul(R) {
      return "";
    }
    var Il = {};
    function Lu(R) {
      {
        var Y = _a();
        if (!Y) {
          var G = typeof R == "string" ? R : R.displayName || R.name;
          G && (Y = `

Check the top-level render call using <` + G + ">.");
        }
        return Y;
      }
    }
    function Li(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var G = Lu(Y);
        if (Il[G])
          return;
        Il[G] = !0;
        var Te = "";
        R && R._owner && R._owner !== Pt.current && (Te = " It was passed a child from " + Ne(R._owner.type) + "."), At(R), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Te), At(null);
      }
    }
    function ol(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var G = 0; G < R.length; G++) {
            var Te = R[G];
            Za(Te) && Li(Te, Y);
          }
        else if (Za(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var ft = dt(R);
          if (typeof ft == "function" && ft !== R.entries)
            for (var yt = ft.call(R), Ue; !(Ue = yt.next()).done; )
              Za(Ue.value) && Li(Ue.value, Y);
        }
      }
    }
    function pa(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var G;
        if (typeof Y == "function")
          G = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === ve || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === re))
          G = Y.propTypes;
        else
          return;
        if (G) {
          var Te = Ne(Y);
          Wn(G, R.props, "prop", Te, R);
        } else if (Y.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var ft = Ne(Y);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ft || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fi(R) {
      {
        for (var Y = Object.keys(R.props), G = 0; G < Y.length; G++) {
          var Te = Y[G];
          if (Te !== "children" && Te !== "key") {
            At(R), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), At(null);
            break;
          }
        }
        R.ref !== null && (At(R), rt("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    var va = {};
    function Ja(R, Y, G, Te, ft, yt) {
      {
        var Ue = Yt(R);
        if (!Ue) {
          var tt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zn = ul();
          zn ? tt += zn : tt += _a();
          var Wt;
          R === null ? Wt = "null" : Yr(R) ? Wt = "array" : R !== void 0 && R.$$typeof === Z ? (Wt = "<" + (Ne(R.type) || "Unknown") + " />", tt = " Did you accidentally export a JSX literal instead of a component?") : Wt = typeof R, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Wt, tt);
        }
        var nn = yr(R, Y, G, ft, yt);
        if (nn == null)
          return nn;
        if (Ue) {
          var gr = Y.children;
          if (gr !== void 0)
            if (Te)
              if (Yr(gr)) {
                for (var vi = 0; vi < gr.length; vi++)
                  ol(gr[vi], R);
                Object.freeze && Object.freeze(gr);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ol(gr, R);
        }
        if (Nn.call(Y, "key")) {
          var _t = Ne(R), Gn = Object.keys(Y).filter(function(Da) {
            return Da !== "key";
          }), _r = Gn.length > 0 ? "{key: someKey, " + Gn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!va[_t + _r]) {
            var nt = Gn.length > 0 ? "{" + Gn.join(": ..., ") + ": ...}" : "{}";
            rt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _r, _t, nt, _t), va[_t + _r] = !0;
          }
        }
        return R === Kt ? fi(nn) : pa(nn), nn;
      }
    }
    function br(R, Y, G) {
      return Ja(R, Y, G, !0);
    }
    function ha(R, Y, G) {
      return Ja(R, Y, G, !1);
    }
    var di = ha, pi = br;
    Ip.Fragment = Kt, Ip.jsx = di, Ip.jsxs = pi;
  }()), Ip;
}
process.env.NODE_ENV === "production" ? p0.exports = eD() : p0.exports = tD();
var Pm = p0.exports, Gp = {}, h0 = { exports: {} }, Xa = {}, Hm = { exports: {} }, f0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function nD() {
  return tR || (tR = 1, function(J) {
    function Z(K, be) {
      var ae = K.length;
      K.push(be);
      e:
        for (; 0 < ae; ) {
          var _ = ae - 1 >>> 1, V = K[_];
          if (0 < on(V, be))
            K[_] = be, K[ae] = V, ae = _;
          else
            break e;
        }
    }
    function F(K) {
      return K.length === 0 ? null : K[0];
    }
    function Kt(K) {
      if (K.length === 0)
        return null;
      var be = K[0], ae = K.pop();
      if (ae !== be) {
        K[0] = ae;
        e:
          for (var _ = 0, V = K.length, ze = V >>> 1; _ < ze; ) {
            var Ve = 2 * (_ + 1) - 1, Je = K[Ve], Ze = Ve + 1, mt = K[Ze];
            if (0 > on(Je, ae))
              Ze < V && 0 > on(mt, Je) ? (K[_] = mt, K[Ze] = ae, _ = Ze) : (K[_] = Je, K[Ve] = ae, _ = Ve);
            else if (Ze < V && 0 > on(mt, ae))
              K[_] = mt, K[Ze] = ae, _ = Ze;
            else
              break e;
          }
      }
      return be;
    }
    function on(K, be) {
      var ae = K.sortIndex - be.sortIndex;
      return ae !== 0 ? ae : K.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var lt = performance;
      J.unstable_now = function() {
        return lt.now();
      };
    } else {
      var S = Date, $t = S.now();
      J.unstable_now = function() {
        return S.now() - $t;
      };
    }
    var ve = [], de = [], ut = 1, re = null, he = 3, ue = !1, Be = !1, Tt = !1, dt = typeof setTimeout == "function" ? setTimeout : null, dn = typeof clearTimeout == "function" ? clearTimeout : null, rt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(K) {
      for (var be = F(de); be !== null; ) {
        if (be.callback === null)
          Kt(de);
        else if (be.startTime <= K)
          Kt(de), be.sortIndex = be.expirationTime, Z(ve, be);
        else
          break;
        be = F(de);
      }
    }
    function pt(K) {
      if (Tt = !1, We(K), !Be)
        if (F(ve) !== null)
          Be = !0, wt(ke);
        else {
          var be = F(de);
          be !== null && me(pt, be.startTime - K);
        }
    }
    function ke(K, be) {
      Be = !1, Tt && (Tt = !1, dn(tn), tn = -1), ue = !0;
      var ae = he;
      try {
        for (We(be), re = F(ve); re !== null && (!(re.expirationTime > be) || K && !bt()); ) {
          var _ = re.callback;
          if (typeof _ == "function") {
            re.callback = null, he = re.priorityLevel;
            var V = _(re.expirationTime <= be);
            be = J.unstable_now(), typeof V == "function" ? re.callback = V : re === F(ve) && Kt(ve), We(be);
          } else
            Kt(ve);
          re = F(ve);
        }
        if (re !== null)
          var ze = !0;
        else {
          var Ve = F(de);
          Ve !== null && me(pt, Ve.startTime - be), ze = !1;
        }
        return ze;
      } finally {
        re = null, he = ae, ue = !1;
      }
    }
    var ot = !1, He = null, tn = -1, bn = 5, Yt = -1;
    function bt() {
      return !(J.unstable_now() - Yt < bn);
    }
    function En() {
      if (He !== null) {
        var K = J.unstable_now();
        Yt = K;
        var be = !0;
        try {
          be = He(!0, K);
        } finally {
          be ? Ne() : (ot = !1, He = null);
        }
      } else
        ot = !1;
    }
    var Ne;
    if (typeof rt == "function")
      Ne = function() {
        rt(En);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), zt = Xe.port2;
      Xe.port1.onmessage = En, Ne = function() {
        zt.postMessage(null);
      };
    } else
      Ne = function() {
        dt(En, 0);
      };
    function wt(K) {
      He = K, ot || (ot = !0, Ne());
    }
    function me(K, be) {
      tn = dt(function() {
        K(J.unstable_now());
      }, be);
    }
    J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, J.unstable_continueExecution = function() {
      Be || ue || (Be = !0, wt(ke));
    }, J.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : bn = 0 < K ? Math.floor(1e3 / K) : 5;
    }, J.unstable_getCurrentPriorityLevel = function() {
      return he;
    }, J.unstable_getFirstCallbackNode = function() {
      return F(ve);
    }, J.unstable_next = function(K) {
      switch (he) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = he;
      }
      var ae = he;
      he = be;
      try {
        return K();
      } finally {
        he = ae;
      }
    }, J.unstable_pauseExecution = function() {
    }, J.unstable_requestPaint = function() {
    }, J.unstable_runWithPriority = function(K, be) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var ae = he;
      he = K;
      try {
        return be();
      } finally {
        he = ae;
      }
    }, J.unstable_scheduleCallback = function(K, be, ae) {
      var _ = J.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? _ + ae : _) : ae = _, K) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = ae + V, K = { id: ut++, callback: be, priorityLevel: K, startTime: ae, expirationTime: V, sortIndex: -1 }, ae > _ ? (K.sortIndex = ae, Z(de, K), F(ve) === null && K === F(de) && (Tt ? (dn(tn), tn = -1) : Tt = !0, me(pt, ae - _))) : (K.sortIndex = V, Z(ve, K), Be || ue || (Be = !0, wt(ke))), K;
    }, J.unstable_shouldYield = bt, J.unstable_wrapCallback = function(K) {
      var be = he;
      return function() {
        var ae = he;
        he = be;
        try {
          return K.apply(this, arguments);
        } finally {
          he = ae;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nR;
function rD() {
  return nR || (nR = 1, function(J) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Z = !1, F = !1, Kt = 5;
      function on(ee, _e) {
        var et = ee.length;
        ee.push(_e), $t(ee, _e, et);
      }
      function lt(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function S(ee) {
        if (ee.length === 0)
          return null;
        var _e = ee[0], et = ee.pop();
        return et !== _e && (ee[0] = et, ve(ee, et, 0)), _e;
      }
      function $t(ee, _e, et) {
        for (var Mt = et; Mt > 0; ) {
          var Ut = Mt - 1 >>> 1, Dn = ee[Ut];
          if (de(Dn, _e) > 0)
            ee[Ut] = _e, ee[Mt] = Dn, Mt = Ut;
          else
            return;
        }
      }
      function ve(ee, _e, et) {
        for (var Mt = et, Ut = ee.length, Dn = Ut >>> 1; Mt < Dn; ) {
          var hn = (Mt + 1) * 2 - 1, yr = ee[hn], Pt = hn + 1, xr = ee[Pt];
          if (de(yr, _e) < 0)
            Pt < Ut && de(xr, yr) < 0 ? (ee[Mt] = xr, ee[Pt] = _e, Mt = Pt) : (ee[Mt] = yr, ee[hn] = _e, Mt = hn);
          else if (Pt < Ut && de(xr, _e) < 0)
            ee[Mt] = xr, ee[Pt] = _e, Mt = Pt;
          else
            return;
        }
      }
      function de(ee, _e) {
        var et = ee.sortIndex - _e.sortIndex;
        return et !== 0 ? et : ee.id - _e.id;
      }
      var ut = 1, re = 2, he = 3, ue = 4, Be = 5;
      function Tt(ee, _e) {
      }
      var dt = typeof performance == "object" && typeof performance.now == "function";
      if (dt) {
        var dn = performance;
        J.unstable_now = function() {
          return dn.now();
        };
      } else {
        var rt = Date, We = rt.now();
        J.unstable_now = function() {
          return rt.now() - We;
        };
      }
      var pt = 1073741823, ke = -1, ot = 250, He = 5e3, tn = 1e4, bn = pt, Yt = [], bt = [], En = 1, Ne = null, Xe = he, zt = !1, wt = !1, me = !1, K = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _(ee) {
        for (var _e = lt(bt); _e !== null; ) {
          if (_e.callback === null)
            S(bt);
          else if (_e.startTime <= ee)
            S(bt), _e.sortIndex = _e.expirationTime, on(Yt, _e);
          else
            return;
          _e = lt(bt);
        }
      }
      function V(ee) {
        if (me = !1, _(ee), !wt)
          if (lt(Yt) !== null)
            wt = !0, Ir(ze);
          else {
            var _e = lt(bt);
            _e !== null && vn(V, _e.startTime - ee);
          }
      }
      function ze(ee, _e) {
        wt = !1, me && (me = !1, wr()), zt = !0;
        var et = Xe;
        try {
          var Mt;
          if (!F)
            return Ve(ee, _e);
        } finally {
          Ne = null, Xe = et, zt = !1;
        }
      }
      function Ve(ee, _e) {
        var et = _e;
        for (_(et), Ne = lt(Yt); Ne !== null && !Z && !(Ne.expirationTime > et && (!ee || $r())); ) {
          var Mt = Ne.callback;
          if (typeof Mt == "function") {
            Ne.callback = null, Xe = Ne.priorityLevel;
            var Ut = Ne.expirationTime <= et, Dn = Mt(Ut);
            et = J.unstable_now(), typeof Dn == "function" ? Ne.callback = Dn : Ne === lt(Yt) && S(Yt), _(et);
          } else
            S(Yt);
          Ne = lt(Yt);
        }
        if (Ne !== null)
          return !0;
        var hn = lt(bt);
        return hn !== null && vn(V, hn.startTime - et), !1;
      }
      function Je(ee, _e) {
        switch (ee) {
          case ut:
          case re:
          case he:
          case ue:
          case Be:
            break;
          default:
            ee = he;
        }
        var et = Xe;
        Xe = ee;
        try {
          return _e();
        } finally {
          Xe = et;
        }
      }
      function Ze(ee) {
        var _e;
        switch (Xe) {
          case ut:
          case re:
          case he:
            _e = he;
            break;
          default:
            _e = Xe;
            break;
        }
        var et = Xe;
        Xe = _e;
        try {
          return ee();
        } finally {
          Xe = et;
        }
      }
      function mt(ee) {
        var _e = Xe;
        return function() {
          var et = Xe;
          Xe = _e;
          try {
            return ee.apply(this, arguments);
          } finally {
            Xe = et;
          }
        };
      }
      function at(ee, _e, et) {
        var Mt = J.unstable_now(), Ut;
        if (typeof et == "object" && et !== null) {
          var Dn = et.delay;
          typeof Dn == "number" && Dn > 0 ? Ut = Mt + Dn : Ut = Mt;
        } else
          Ut = Mt;
        var hn;
        switch (ee) {
          case ut:
            hn = ke;
            break;
          case re:
            hn = ot;
            break;
          case Be:
            hn = bn;
            break;
          case ue:
            hn = tn;
            break;
          case he:
          default:
            hn = He;
            break;
        }
        var yr = Ut + hn, Pt = {
          id: En++,
          callback: _e,
          priorityLevel: ee,
          startTime: Ut,
          expirationTime: yr,
          sortIndex: -1
        };
        return Ut > Mt ? (Pt.sortIndex = Ut, on(bt, Pt), lt(Yt) === null && Pt === lt(bt) && (me ? wr() : me = !0, vn(V, Ut - Mt))) : (Pt.sortIndex = yr, on(Yt, Pt), !wt && !zt && (wt = !0, Ir(ze))), Pt;
      }
      function it() {
      }
      function Zt() {
        !wt && !zt && (wt = !0, Ir(ze));
      }
      function vr() {
        return lt(Yt);
      }
      function Pr(ee) {
        ee.callback = null;
      }
      function pn() {
        return Xe;
      }
      var Qn = !1, Hn = null, Nn = -1, _n = Kt, Br = -1;
      function $r() {
        var ee = J.unstable_now() - Br;
        return !(ee < _n);
      }
      function Wn() {
      }
      function hr(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? _n = Math.floor(1e3 / ee) : _n = Kt;
      }
      var Yr = function() {
        if (Hn !== null) {
          var ee = J.unstable_now();
          Br = ee;
          var _e = !0, et = !0;
          try {
            et = Hn(_e, ee);
          } finally {
            et ? mr() : (Qn = !1, Hn = null);
          }
        } else
          Qn = !1;
      }, mr;
      if (typeof ae == "function")
        mr = function() {
          ae(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var fa = new MessageChannel(), nr = fa.port2;
        fa.port1.onmessage = Yr, mr = function() {
          nr.postMessage(null);
        };
      } else
        mr = function() {
          K(Yr, 0);
        };
      function Ir(ee) {
        Hn = ee, Qn || (Qn = !0, mr());
      }
      function vn(ee, _e) {
        Nn = K(function() {
          ee(J.unstable_now());
        }, _e);
      }
      function wr() {
        be(Nn), Nn = -1;
      }
      var ci = Wn, da = null;
      J.unstable_IdlePriority = Be, J.unstable_ImmediatePriority = ut, J.unstable_LowPriority = ue, J.unstable_NormalPriority = he, J.unstable_Profiling = da, J.unstable_UserBlockingPriority = re, J.unstable_cancelCallback = Pr, J.unstable_continueExecution = Zt, J.unstable_forceFrameRate = hr, J.unstable_getCurrentPriorityLevel = pn, J.unstable_getFirstCallbackNode = vr, J.unstable_next = Ze, J.unstable_pauseExecution = it, J.unstable_requestPaint = ci, J.unstable_runWithPriority = Je, J.unstable_scheduleCallback = at, J.unstable_shouldYield = $r, J.unstable_wrapCallback = mt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var rR;
function lR() {
  return rR || (rR = 1, process.env.NODE_ENV === "production" ? Hm.exports = nD() : Hm.exports = rD()), Hm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function aD() {
  if (aR)
    return Xa;
  aR = 1;
  var J = qp, Z = lR();
  function F(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Kt = /* @__PURE__ */ new Set(), on = {};
  function lt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (on[n] = r, n = 0; n < r.length; n++)
      Kt.add(r[n]);
  }
  var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ve = Object.prototype.hasOwnProperty, de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ut = {}, re = {};
  function he(n) {
    return ve.call(re, n) ? !0 : ve.call(ut, n) ? !1 : de.test(n) ? re[n] = !0 : (ut[n] = !0, !1);
  }
  function ue(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Be(n, r, l, o) {
    if (r === null || typeof r > "u" || ue(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Tt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var dt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    dt[n] = new Tt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    dt[r] = new Tt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    dt[n] = new Tt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    dt[n] = new Tt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    dt[n] = new Tt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    dt[n] = new Tt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    dt[n] = new Tt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    dt[n] = new Tt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    dt[n] = new Tt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var dn = /[\-:]([a-z])/g;
  function rt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      dn,
      rt
    );
    dt[r] = new Tt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(dn, rt);
    dt[r] = new Tt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(dn, rt);
    dt[r] = new Tt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    dt[n] = new Tt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), dt.xlinkHref = new Tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    dt[n] = new Tt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function We(n, r, l, o) {
    var c = dt.hasOwnProperty(r) ? dt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Be(r, l, c, o) && (l = null), o || c === null ? he(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var pt = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ke = Symbol.for("react.element"), ot = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), tn = Symbol.for("react.strict_mode"), bn = Symbol.for("react.profiler"), Yt = Symbol.for("react.provider"), bt = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), zt = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), me = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = K && n[K] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = Object.assign, _;
  function V(n) {
    if (_ === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        _ = r && r[1] || "";
      }
    return `
` + _ + n;
  }
  var ze = !1;
  function Ve(n, r) {
    if (!n || ze)
      return "";
    ze = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (z) {
            var o = z;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (z) {
            o = z;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var T = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      ze = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? V(n) : "";
  }
  function Je(n) {
    switch (n.tag) {
      case 5:
        return V(n.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ze(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case He:
        return "Fragment";
      case ot:
        return "Portal";
      case bn:
        return "Profiler";
      case tn:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Xe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case bt:
          return (n.displayName || "Context") + ".Consumer";
        case Yt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case zt:
          return r = n.displayName || null, r !== null ? r : Ze(n.type) || "Memo";
        case wt:
          r = n._payload, n = n._init;
          try {
            return Ze(n(r));
          } catch {
          }
      }
    return null;
  }
  function mt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ze(r);
      case 8:
        return r === tn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function at(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function it(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Zt(n) {
    var r = it(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function vr(n) {
    n._valueTracker || (n._valueTracker = Zt(n));
  }
  function Pr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = it(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function pn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Qn(n, r) {
    var l = r.checked;
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Hn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = at(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Nn(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function _n(n, r) {
    Nn(n, r);
    var l = at(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? $r(n, r.type, l) : r.hasOwnProperty("defaultValue") && $r(n, r.type, at(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Br(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function $r(n, r, l) {
    (r !== "number" || pn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Wn = Array.isArray;
  function hr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + at(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(F(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function mr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(F(92));
        if (Wn(l)) {
          if (1 < l.length)
            throw Error(F(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: at(l) };
  }
  function fa(n, r) {
    var l = at(r.value), o = at(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function nr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ir(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function vn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ir(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var wr, ci = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (wr = wr || document.createElement("div"), wr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = wr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ee = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, _e = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(n) {
    _e.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ee[r] = ee[n];
    });
  });
  function et(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ee.hasOwnProperty(n) && ee[n] ? ("" + r).trim() : r + "px";
  }
  function Mt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = et(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ut = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dn(n, r) {
    if (r) {
      if (Ut[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(F(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(F(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(F(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(F(62));
    }
  }
  function hn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var yr = null;
  function Pt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var xr = null, At = null, Ft = null;
  function Za(n) {
    if (n = us(n)) {
      if (typeof xr != "function")
        throw Error(F(280));
      var r = n.stateNode;
      r && (r = Oe(r), xr(n.stateNode, n.type, r));
    }
  }
  function _a(n) {
    At ? Ft ? Ft.push(n) : Ft = [n] : At = n;
  }
  function ul() {
    if (At) {
      var n = At, r = Ft;
      if (Ft = At = null, Za(n), r)
        for (n = 0; n < r.length; n++)
          Za(r[n]);
    }
  }
  function Il(n, r) {
    return n(r);
  }
  function Lu() {
  }
  var Li = !1;
  function ol(n, r, l) {
    if (Li)
      return n(r, l);
    Li = !0;
    try {
      return Il(n, r, l);
    } finally {
      Li = !1, (At !== null || Ft !== null) && (Lu(), ul());
    }
  }
  function pa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Oe(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(F(231, r, typeof l));
    return l;
  }
  var fi = !1;
  if ($t)
    try {
      var va = {};
      Object.defineProperty(va, "passive", { get: function() {
        fi = !0;
      } }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
    } catch {
      fi = !1;
    }
  function Ja(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (I) {
      this.onError(I);
    }
  }
  var br = !1, ha = null, di = !1, pi = null, R = { onError: function(n) {
    br = !0, ha = n;
  } };
  function Y(n, r, l, o, c, d, m, E, T) {
    br = !1, ha = null, Ja.apply(R, arguments);
  }
  function G(n, r, l, o, c, d, m, E, T) {
    if (Y.apply(this, arguments), br) {
      if (br) {
        var z = ha;
        br = !1, ha = null;
      } else
        throw Error(F(198));
      di || (di = !0, pi = z);
    }
  }
  function Te(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function ft(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function yt(n) {
    if (Te(n) !== n)
      throw Error(F(188));
  }
  function Ue(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Te(n), r === null)
        throw Error(F(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return yt(c), n;
          if (d === o)
            return yt(c), r;
          d = d.sibling;
        }
        throw Error(F(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(F(189));
        }
      }
      if (l.alternate !== o)
        throw Error(F(190));
    }
    if (l.tag !== 3)
      throw Error(F(188));
    return l.stateNode.current === l ? n : r;
  }
  function tt(n) {
    return n = Ue(n), n !== null ? zn(n) : null;
  }
  function zn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = zn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Wt = Z.unstable_scheduleCallback, nn = Z.unstable_cancelCallback, gr = Z.unstable_shouldYield, vi = Z.unstable_requestPaint, _t = Z.unstable_now, Gn = Z.unstable_getCurrentPriorityLevel, _r = Z.unstable_ImmediatePriority, nt = Z.unstable_UserBlockingPriority, Da = Z.unstable_NormalPriority, sl = Z.unstable_LowPriority, Mu = Z.unstable_IdlePriority, cl = null, Qr = null;
  function Yo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(cl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Dr = Math.clz32 ? Math.clz32 : Xs, Io = Math.log, Qo = Math.LN2;
  function Xs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Io(n) / Qo | 0) | 0;
  }
  var Nu = 64, fl = 4194304;
  function ei(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function kr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = ei(E) : (d &= m, d !== 0 && (o = ei(d)));
    } else
      m = l & ~c, m !== 0 ? o = ei(m) : d !== 0 && (o = ei(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function dl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = dl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function vl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function zu() {
    var n = Nu;
    return Nu <<= 1, !(Nu & 4194240) && (Nu = 64), n;
  }
  function Uu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Mi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Pf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function hi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function Au(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ql, Fu, gt, ju, Hu, Ie = !1, Wl = [], mn = null, Wr = null, Or = null, hl = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), jt = [], Ks = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        Or = null;
        break;
      case "pointerover":
      case "pointerout":
        hl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = us(r), r !== null && Fu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function mi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return mn = qn(mn, n, r, l, o, c), !0;
      case "dragenter":
        return Wr = qn(Wr, n, r, l, o, c), !0;
      case "mouseover":
        return Or = qn(Or, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return hl.set(d, qn(hl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, qn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zs(n) {
    var r = Ma(n.target);
    if (r !== null) {
      var l = Te(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ft(l), r !== null) {
            n.blockedOn = r, Hu(n.priority, function() {
              gt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ni(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Pu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        yr = o, l.target.dispatchEvent(o), yr = null;
      } else
        return r = us(l), r !== null && Fu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function ml(n, r, l) {
    Ni(n) && l.delete(r);
  }
  function Js() {
    Ie = !1, mn !== null && Ni(mn) && (mn = null), Wr !== null && Ni(Wr) && (Wr = null), Or !== null && Ni(Or) && (Or = null), hl.forEach(ml), Cn.forEach(ml);
  }
  function ka(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ie || (Ie = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, Js)));
  }
  function yl(n) {
    function r(c) {
      return ka(c, n);
    }
    if (0 < Wl.length) {
      ka(Wl[0], n);
      for (var l = 1; l < Wl.length; l++) {
        var o = Wl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (mn !== null && ka(mn, n), Wr !== null && ka(Wr, n), Or !== null && ka(Or, n), hl.forEach(r), Cn.forEach(r), l = 0; l < jt.length; l++)
      o = jt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < jt.length && (l = jt[0], l.blockedOn === null); )
      Zs(l), l.blockedOn === null && jt.shift();
  }
  var zi = pt.ReactCurrentBatchConfig, Oa = !0;
  function Vu(n, r, l, o) {
    var c = Dt, d = zi.transition;
    zi.transition = null;
    try {
      Dt = 1, Sl(n, r, l, o);
    } finally {
      Dt = c, zi.transition = d;
    }
  }
  function gl(n, r, l, o) {
    var c = Dt, d = zi.transition;
    zi.transition = null;
    try {
      Dt = 4, Sl(n, r, l, o);
    } finally {
      Dt = c, zi.transition = d;
    }
  }
  function Sl(n, r, l, o) {
    if (Oa) {
      var c = Pu(n, r, l, o);
      if (c === null)
        oc(n, r, o, Gl, l), Gr(n, o);
      else if (mi(c, n, r, l, o))
        o.stopPropagation();
      else if (Gr(n, o), r & 4 && -1 < Ks.indexOf(n)) {
        for (; c !== null; ) {
          var d = us(c);
          if (d !== null && Ql(d), d = Pu(n, r, l, o), d === null && oc(n, r, o, Gl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        oc(n, r, o, null, l);
    }
  }
  var Gl = null;
  function Pu(n, r, l, o) {
    if (Gl = null, n = Pt(o), n = Ma(n), n !== null)
      if (r = Te(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = ft(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Gl = n, null;
  }
  function Wo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Gn()) {
          case _r:
            return 1;
          case nt:
            return 4;
          case Da:
          case sl:
            return 16;
          case Mu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ti = null, h = null, C = null;
  function N() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in ti ? ti.value : ti.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function A(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function Ae() {
    return !1;
  }
  function ie(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? q : Ae, this.isPropagationStopped = Ae, this;
    }
    return ae(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = q);
    }, persist: function() {
    }, isPersistent: q }), r;
  }
  var Me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, st = ie(Me), xt = ae({}, Me, { view: 0, detail: 0 }), Gt = ie(xt), Bt, qt, Jt, St = ae({}, xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Jt && (Jt && n.type === "mousemove" ? (Bt = n.screenX - Jt.screenX, qt = n.screenY - Jt.screenY) : qt = Bt = 0, Jt = n), Bt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qt;
  } }), Ui = ie(St), Bu = ae({}, St, { dataTransfer: 0 }), Go = ie(Bu), Bf = ae({}, xt, { relatedTarget: 0 }), ni = ie(Bf), qo = ae({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xo = ie(qo), $f = ae({}, Me, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Bm = ie($f), $m = ae({}, Me, { data: 0 }), Yf = ie($m), If = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Xp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Kp[n]) ? !!r[n] : !1;
  }
  function Qf() {
    return Zp;
  }
  var Ai = ae({}, xt, { key: function(n) {
    if (n.key) {
      var r = If[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = A(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Xp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qf, charCode: function(n) {
    return n.type === "keypress" ? A(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? A(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ym = ie(Ai), Wf = ae({}, St, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ec = ie(Wf), Gf = ae({}, xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qf }), Im = ie(Gf), tc = ae({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = ie(tc), qr = ae({}, St, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fi = ie(qr), Un = [9, 13, 27, 32], ri = $t && "CompositionEvent" in window, ql = null;
  $t && "documentMode" in document && (ql = document.documentMode);
  var nc = $t && "TextEvent" in window && !ql, ev = $t && (!ri || ql && 8 < ql && 11 >= ql), $u = " ", tv = !1;
  function nv(n, r) {
    switch (n) {
      case "keyup":
        return Un.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Yu = !1;
  function Qm(n, r) {
    switch (n) {
      case "compositionend":
        return rc(r);
      case "keypress":
        return r.which !== 32 ? null : (tv = !0, $u);
      case "textInput":
        return n = r.data, n === $u && tv ? null : n;
      default:
        return null;
    }
  }
  function Wm(n, r) {
    if (Yu)
      return n === "compositionend" || !ri && nv(n, r) ? (n = N(), C = h = ti = null, Yu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ev && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var rv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!rv[n.type] : r === "textarea";
  }
  function iv(n, r, l, o) {
    _a(o), r = as(r, "onChange"), 0 < r.length && (l = new st("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ko = null, Iu = null;
  function Qu(n) {
    uc(n, 0);
  }
  function Wu(n) {
    var r = qu(n);
    if (Pr(r))
      return n;
  }
  function lv(n, r) {
    if (n === "change")
      return r;
  }
  var qf = !1;
  if ($t) {
    var Xf;
    if ($t) {
      var Kf = "oninput" in document;
      if (!Kf) {
        var uv = document.createElement("div");
        uv.setAttribute("oninput", "return;"), Kf = typeof uv.oninput == "function";
      }
      Xf = Kf;
    } else
      Xf = !1;
    qf = Xf && (!document.documentMode || 9 < document.documentMode);
  }
  function ov() {
    Ko && (Ko.detachEvent("onpropertychange", sv), Iu = Ko = null);
  }
  function sv(n) {
    if (n.propertyName === "value" && Wu(Iu)) {
      var r = [];
      iv(r, Iu, n, Pt(n)), ol(Qu, r);
    }
  }
  function Gm(n, r, l) {
    n === "focusin" ? (ov(), Ko = r, Iu = l, Ko.attachEvent("onpropertychange", sv)) : n === "focusout" && ov();
  }
  function qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Wu(Iu);
  }
  function Xm(n, r) {
    if (n === "click")
      return Wu(r);
  }
  function cv(n, r) {
    if (n === "input" || n === "change")
      return Wu(r);
  }
  function Km(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var La = typeof Object.is == "function" ? Object.is : Km;
  function Zo(n, r) {
    if (La(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ve.call(r, c) || !La(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function fv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function dv(n, r) {
    var l = fv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = fv(l);
    }
  }
  function pv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? pv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ac() {
    for (var n = window, r = pn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = pn(n.document);
    }
    return r;
  }
  function ji(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ic(n) {
    var r = ac(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ji(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = dv(l, d);
          var m = dv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var vv = $t && "documentMode" in document && 11 >= document.documentMode, ai = null, Zf = null, Jo = null, Jf = !1;
  function hv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Jf || ai == null || ai !== pn(o) || (o = ai, "selectionStart" in o && ji(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Jo && Zo(Jo, o) || (Jo = o, o = as(Zf, "onSelect"), 0 < o.length && (r = new st("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ai)));
  }
  function lc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Xl = { animationend: lc("Animation", "AnimationEnd"), animationiteration: lc("Animation", "AnimationIteration"), animationstart: lc("Animation", "AnimationStart"), transitionend: lc("Transition", "TransitionEnd") }, ed = {}, td = {};
  $t && (td = document.createElement("div").style, "AnimationEvent" in window || (delete Xl.animationend.animation, delete Xl.animationiteration.animation, delete Xl.animationstart.animation), "TransitionEvent" in window || delete Xl.transitionend.transition);
  function Xn(n) {
    if (ed[n])
      return ed[n];
    if (!Xl[n])
      return n;
    var r = Xl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in td)
        return ed[n] = r[l];
    return n;
  }
  var nd = Xn("animationend"), mv = Xn("animationiteration"), yv = Xn("animationstart"), gv = Xn("transitionend"), Sv = /* @__PURE__ */ new Map(), Ev = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Hi(n, r) {
    Sv.set(n, r), lt(r, [n]);
  }
  for (var es = 0; es < Ev.length; es++) {
    var Kl = Ev[es], Zm = Kl.toLowerCase(), ts = Kl[0].toUpperCase() + Kl.slice(1);
    Hi(Zm, "on" + ts);
  }
  Hi(nd, "onAnimationEnd"), Hi(mv, "onAnimationIteration"), Hi(yv, "onAnimationStart"), Hi("dblclick", "onDoubleClick"), Hi("focusin", "onFocus"), Hi("focusout", "onBlur"), Hi(gv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
  function Cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, G(o, r, void 0, n), n.currentTarget = null;
  }
  function uc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], T = E.instance, z = E.currentTarget;
            if (E = E.listener, T !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, z), d = T;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, z), d = T;
          }
      }
    }
    if (di)
      throw n = pi, di = !1, pi = null, n;
  }
  function Xt(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Rv(r, n, 2, !1), l.add(o));
  }
  function El(n, r, l) {
    var o = 0;
    r && (o |= 4), Rv(l, n, o, r);
  }
  var Vi = "_reactListening" + Math.random().toString(36).slice(2);
  function Gu(n) {
    if (!n[Vi]) {
      n[Vi] = !0, Kt.forEach(function(l) {
        l !== "selectionchange" && (Jm.has(l) || El(l, !1, n), El(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Vi] || (r[Vi] = !0, El("selectionchange", !1, r));
    }
  }
  function Rv(n, r, l, o) {
    switch (Wo(r)) {
      case 1:
        var c = Vu;
        break;
      case 4:
        c = gl;
        break;
      default:
        c = Sl;
    }
    l = c.bind(null, r, l, n), c = void 0, !fi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function oc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var T = m.tag;
                if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Ma(E), m === null)
                return;
              if (T = m.tag, T === 5 || T === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    ol(function() {
      var z = d, I = Pt(l), Q = [];
      e: {
        var $ = Sv.get(n);
        if ($ !== void 0) {
          var se = st, ye = n;
          switch (n) {
            case "keypress":
              if (A(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              se = Ym;
              break;
            case "focusin":
              ye = "focus", se = ni;
              break;
            case "focusout":
              ye = "blur", se = ni;
              break;
            case "beforeblur":
            case "afterblur":
              se = ni;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              se = Ui;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = Go;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = Im;
              break;
            case nd:
            case mv:
            case yv:
              se = Xo;
              break;
            case gv:
              se = Jp;
              break;
            case "scroll":
              se = Gt;
              break;
            case "wheel":
              se = Fi;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Bm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = ec;
          }
          var Ee = (r & 4) !== 0, Ln = !Ee && n === "scroll", D = Ee ? $ !== null ? $ + "Capture" : null : $;
          Ee = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var X = L.stateNode;
            if (L.tag === 5 && X !== null && (L = X, D !== null && (X = pa(x, D), X != null && Ee.push(rs(x, X, L)))), Ln)
              break;
            x = x.return;
          }
          0 < Ee.length && ($ = new se($, ye, null, l, I), Q.push({ event: $, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", $ && l !== yr && (ye = l.relatedTarget || l.fromElement) && (Ma(ye) || ye[Pi]))
            break e;
          if ((se || $) && ($ = I.window === I ? I : ($ = I.ownerDocument) ? $.defaultView || $.parentWindow : window, se ? (ye = l.relatedTarget || l.toElement, se = z, ye = ye ? Ma(ye) : null, ye !== null && (Ln = Te(ye), ye !== Ln || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (se = null, ye = z), se !== ye)) {
            if (Ee = Ui, X = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = ec, X = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Ln = se == null ? $ : qu(se), L = ye == null ? $ : qu(ye), $ = new Ee(X, x + "leave", se, l, I), $.target = Ln, $.relatedTarget = L, X = null, Ma(I) === z && (Ee = new Ee(D, x + "enter", ye, l, I), Ee.target = L, Ee.relatedTarget = Ln, X = Ee), Ln = X, se && ye)
              t: {
                for (Ee = se, D = ye, x = 0, L = Ee; L; L = Zl(L))
                  x++;
                for (L = 0, X = D; X; X = Zl(X))
                  L++;
                for (; 0 < x - L; )
                  Ee = Zl(Ee), x--;
                for (; 0 < L - x; )
                  D = Zl(D), L--;
                for (; x--; ) {
                  if (Ee === D || D !== null && Ee === D.alternate)
                    break t;
                  Ee = Zl(Ee), D = Zl(D);
                }
                Ee = null;
              }
            else
              Ee = null;
            se !== null && rd(Q, $, se, Ee, !1), ye !== null && Ln !== null && rd(Q, Ln, ye, Ee, !0);
          }
        }
        e: {
          if ($ = z ? qu(z) : window, se = $.nodeName && $.nodeName.toLowerCase(), se === "select" || se === "input" && $.type === "file")
            var Re = lv;
          else if (av($))
            if (qf)
              Re = cv;
            else {
              Re = qm;
              var Fe = Gm;
            }
          else
            (se = $.nodeName) && se.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (Re = Xm);
          if (Re && (Re = Re(n, z))) {
            iv(Q, Re, l, I);
            break e;
          }
          Fe && Fe(n, $, z), n === "focusout" && (Fe = $._wrapperState) && Fe.controlled && $.type === "number" && $r($, "number", $.value);
        }
        switch (Fe = z ? qu(z) : window, n) {
          case "focusin":
            (av(Fe) || Fe.contentEditable === "true") && (ai = Fe, Zf = z, Jo = null);
            break;
          case "focusout":
            Jo = Zf = ai = null;
            break;
          case "mousedown":
            Jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jf = !1, hv(Q, l, I);
            break;
          case "selectionchange":
            if (vv)
              break;
          case "keydown":
          case "keyup":
            hv(Q, l, I);
        }
        var ge;
        if (ri)
          e: {
            switch (n) {
              case "compositionstart":
                var je = "onCompositionStart";
                break e;
              case "compositionend":
                je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                je = "onCompositionUpdate";
                break e;
            }
            je = void 0;
          }
        else
          Yu ? nv(n, l) && (je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (je = "onCompositionStart");
        je && (ev && l.locale !== "ko" && (Yu || je !== "onCompositionStart" ? je === "onCompositionEnd" && Yu && (ge = N()) : (ti = I, h = "value" in ti ? ti.value : ti.textContent, Yu = !0)), Fe = as(z, je), 0 < Fe.length && (je = new Yf(je, n, null, l, I), Q.push({ event: je, listeners: Fe }), ge ? je.data = ge : (ge = rc(l), ge !== null && (je.data = ge)))), (ge = nc ? Qm(n, l) : Wm(n, l)) && (z = as(z, "onBeforeInput"), 0 < z.length && (I = new Yf("onBeforeInput", "beforeinput", null, l, I), Q.push({ event: I, listeners: z }), I.data = ge));
      }
      uc(Q, r);
    });
  }
  function rs(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = pa(n, l), d != null && o.unshift(rs(n, d, c)), d = pa(n, r), d != null && o.push(rs(n, d, c))), n = n.return;
    }
    return o;
  }
  function Zl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function rd(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o)
        break;
      E.tag === 5 && z !== null && (E = z, c ? (T = pa(l, d), T != null && m.unshift(rs(l, T, E))) : c || (T = pa(l, d), T != null && m.push(rs(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ad = /\r\n?/g, ey = /\u0000|\uFFFD/g;
  function id(n) {
    return (typeof n == "string" ? n : "" + n).replace(ad, `
`).replace(ey, "");
  }
  function sc(n, r, l) {
    if (r = id(r), id(n) !== r && l)
      throw Error(F(425));
  }
  function cc() {
  }
  var ld = null, Jl = null;
  function is(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var eu = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, ud = typeof Promise == "function" ? Promise : void 0, od = typeof queueMicrotask == "function" ? queueMicrotask : typeof ud < "u" ? function(n) {
    return ud.resolve(null).then(n).catch(ty);
  } : eu;
  function ty(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Cl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), yl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    yl(r);
  }
  function ii(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ls(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Rl = Math.random().toString(36).slice(2), yi = "__reactFiber$" + Rl, tu = "__reactProps$" + Rl, Pi = "__reactContainer$" + Rl, sd = "__reactEvents$" + Rl, ny = "__reactListeners$" + Rl, cd = "__reactHandles$" + Rl;
  function Ma(n) {
    var r = n[yi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Pi] || l[yi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = ls(n); n !== null; ) {
            if (l = n[yi])
              return l;
            n = ls(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function us(n) {
    return n = n[yi] || n[Pi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function qu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(F(33));
  }
  function Oe(n) {
    return n[tu] || null;
  }
  var Tl = [], rn = -1;
  function Ke(n) {
    return { current: n };
  }
  function Nt(n) {
    0 > rn || (n.current = Tl[rn], Tl[rn] = null, rn--);
  }
  function Ht(n, r) {
    rn++, Tl[rn] = n.current, n.current = r;
  }
  var gi = {}, $e = Ke(gi), Rn = Ke(!1), Xr = gi;
  function Na(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return gi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function za() {
    Nt(Rn), Nt($e);
  }
  function wl(n, r, l) {
    if ($e.current !== gi)
      throw Error(F(168));
    Ht($e, r), Ht(Rn, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(F(108, mt(n) || "Unknown", c));
    return ae({}, l, o);
  }
  function fc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || gi, Xr = $e.current, Ht($e, n), Ht(Rn, Rn.current), !0;
  }
  function wv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(F(169));
    l ? (n = os(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, Nt(Rn), Nt($e), Ht($e, n)) : Nt(Rn), Ht(Rn, l);
  }
  var ma = null, Kn = !1, ss = !1;
  function fd(n) {
    ma === null ? ma = [n] : ma.push(n);
  }
  function dd(n) {
    Kn = !0, fd(n);
  }
  function Kr() {
    if (!ss && ma !== null) {
      ss = !0;
      var n = 0, r = Dt;
      try {
        var l = ma;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ma = null, Kn = !1;
      } catch (c) {
        throw ma !== null && (ma = ma.slice(n + 1)), Wt(_r, Kr), c;
      } finally {
        Dt = r, ss = !1;
      }
    }
    return null;
  }
  var xl = [], Zr = 0, nu = null, Xu = 0, Jr = [], Sr = 0, Ua = null, rr = 1, Bi = "";
  function ya(n, r) {
    xl[Zr++] = Xu, xl[Zr++] = nu, nu = n, Xu = r;
  }
  function pd(n, r, l) {
    Jr[Sr++] = rr, Jr[Sr++] = Bi, Jr[Sr++] = Ua, Ua = n;
    var o = rr;
    n = Bi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, rr = 1 << 32 - Dr(r) + c | l << c | o, Bi = d + n;
    } else
      rr = 1 << d | l << c | o, Bi = n;
  }
  function dc(n) {
    n.return !== null && (ya(n, 1), pd(n, 1, 0));
  }
  function vd(n) {
    for (; n === nu; )
      nu = xl[--Zr], xl[Zr] = null, Xu = xl[--Zr], xl[Zr] = null;
    for (; n === Ua; )
      Ua = Jr[--Sr], Jr[Sr] = null, Bi = Jr[--Sr], Jr[Sr] = null, rr = Jr[--Sr], Jr[Sr] = null;
  }
  var ga = null, ea = null, an = !1, Aa = null;
  function hd(n, r) {
    var l = Ya(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ga = n, ea = ii(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ga = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ua !== null ? { id: rr, overflow: Bi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ya(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ga = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function vc(n) {
    if (an) {
      var r = ea;
      if (r) {
        var l = r;
        if (!xv(n, r)) {
          if (pc(n))
            throw Error(F(418));
          r = ii(l.nextSibling);
          var o = ga;
          r && xv(n, r) ? hd(o, l) : (n.flags = n.flags & -4097 | 2, an = !1, ga = n);
        }
      } else {
        if (pc(n))
          throw Error(F(418));
        n.flags = n.flags & -4097 | 2, an = !1, ga = n;
      }
    }
  }
  function bv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ga = n;
  }
  function hc(n) {
    if (n !== ga)
      return !1;
    if (!an)
      return bv(n), an = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !is(n.type, n.memoizedProps)), r && (r = ea)) {
      if (pc(n))
        throw _v(), Error(F(418));
      for (; r; )
        hd(n, r), r = ii(r.nextSibling);
    }
    if (bv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(F(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ii(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else
      ea = ga ? ii(n.stateNode.nextSibling) : null;
    return !0;
  }
  function _v() {
    for (var n = ea; n; )
      n = ii(n.nextSibling);
  }
  function yn() {
    ea = ga = null, an = !1;
  }
  function md(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var mc = pt.ReactCurrentBatchConfig;
  function ru(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(F(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(F(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(F(284));
      if (!l._owner)
        throw Error(F(290, n));
    }
    return n;
  }
  function Si(n, r) {
    throw n = Object.prototype.toString.call(r), Error(F(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Dv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yc(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Nl(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, X) {
      return x === null || x.tag !== 6 ? (x = af(L, D.mode, X), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, X) {
      var Re = L.type;
      return Re === He ? I(D, x, L.props.children, X, L.key) : x !== null && (x.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === wt && Dv(Re) === x.type) ? (X = c(x, L.props), X.ref = ru(D, x, L), X.return = D, X) : (X = nf(L.type, L.key, L.props, null, D.mode, X), X.ref = ru(D, x, L), X.return = D, X);
    }
    function z(D, x, L, X) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = _s(L, D.mode, X), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function I(D, x, L, X, Re) {
      return x === null || x.tag !== 7 ? (x = gu(L, D.mode, X, Re), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function Q(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = af("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ke:
            return L = nf(x.type, x.key, x.props, null, D.mode, L), L.ref = ru(D, null, x), L.return = D, L;
          case ot:
            return x = _s(x, D.mode, L), x.return = D, x;
          case wt:
            var X = x._init;
            return Q(D, X(x._payload), L);
        }
        if (Wn(x) || be(x))
          return x = gu(x, D.mode, L, null), x.return = D, x;
        Si(D, x);
      }
      return null;
    }
    function $(D, x, L, X) {
      var Re = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return Re !== null ? null : E(D, x, "" + L, X);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ke:
            return L.key === Re ? T(D, x, L, X) : null;
          case ot:
            return L.key === Re ? z(D, x, L, X) : null;
          case wt:
            return Re = L._init, $(
              D,
              x,
              Re(L._payload),
              X
            );
        }
        if (Wn(L) || be(L))
          return Re !== null ? null : I(D, x, L, X, null);
        Si(D, L);
      }
      return null;
    }
    function se(D, x, L, X, Re) {
      if (typeof X == "string" && X !== "" || typeof X == "number")
        return D = D.get(L) || null, E(x, D, "" + X, Re);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case ke:
            return D = D.get(X.key === null ? L : X.key) || null, T(x, D, X, Re);
          case ot:
            return D = D.get(X.key === null ? L : X.key) || null, z(x, D, X, Re);
          case wt:
            var Fe = X._init;
            return se(D, x, L, Fe(X._payload), Re);
        }
        if (Wn(X) || be(X))
          return D = D.get(L) || null, I(x, D, X, Re, null);
        Si(x, X);
      }
      return null;
    }
    function ye(D, x, L, X) {
      for (var Re = null, Fe = null, ge = x, je = x = 0, Yn = null; ge !== null && je < L.length; je++) {
        ge.index > je ? (Yn = ge, ge = null) : Yn = ge.sibling;
        var kt = $(D, ge, L[je], X);
        if (kt === null) {
          ge === null && (ge = Yn);
          break;
        }
        n && ge && kt.alternate === null && r(D, ge), x = d(kt, x, je), Fe === null ? Re = kt : Fe.sibling = kt, Fe = kt, ge = Yn;
      }
      if (je === L.length)
        return l(D, ge), an && ya(D, je), Re;
      if (ge === null) {
        for (; je < L.length; je++)
          ge = Q(D, L[je], X), ge !== null && (x = d(ge, x, je), Fe === null ? Re = ge : Fe.sibling = ge, Fe = ge);
        return an && ya(D, je), Re;
      }
      for (ge = o(D, ge); je < L.length; je++)
        Yn = se(ge, D, je, L[je], X), Yn !== null && (n && Yn.alternate !== null && ge.delete(Yn.key === null ? je : Yn.key), x = d(Yn, x, je), Fe === null ? Re = Yn : Fe.sibling = Yn, Fe = Yn);
      return n && ge.forEach(function(qi) {
        return r(D, qi);
      }), an && ya(D, je), Re;
    }
    function Ee(D, x, L, X) {
      var Re = be(L);
      if (typeof Re != "function")
        throw Error(F(150));
      if (L = Re.call(L), L == null)
        throw Error(F(151));
      for (var Fe = Re = null, ge = x, je = x = 0, Yn = null, kt = L.next(); ge !== null && !kt.done; je++, kt = L.next()) {
        ge.index > je ? (Yn = ge, ge = null) : Yn = ge.sibling;
        var qi = $(D, ge, kt.value, X);
        if (qi === null) {
          ge === null && (ge = Yn);
          break;
        }
        n && ge && qi.alternate === null && r(D, ge), x = d(qi, x, je), Fe === null ? Re = qi : Fe.sibling = qi, Fe = qi, ge = Yn;
      }
      if (kt.done)
        return l(
          D,
          ge
        ), an && ya(D, je), Re;
      if (ge === null) {
        for (; !kt.done; je++, kt = L.next())
          kt = Q(D, kt.value, X), kt !== null && (x = d(kt, x, je), Fe === null ? Re = kt : Fe.sibling = kt, Fe = kt);
        return an && ya(D, je), Re;
      }
      for (ge = o(D, ge); !kt.done; je++, kt = L.next())
        kt = se(ge, D, je, kt.value, X), kt !== null && (n && kt.alternate !== null && ge.delete(kt.key === null ? je : kt.key), x = d(kt, x, je), Fe === null ? Re = kt : Fe.sibling = kt, Fe = kt);
      return n && ge.forEach(function(Ey) {
        return r(D, Ey);
      }), an && ya(D, je), Re;
    }
    function Ln(D, x, L, X) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ke:
            e: {
              for (var Re = L.key, Fe = x; Fe !== null; ) {
                if (Fe.key === Re) {
                  if (Re = L.type, Re === He) {
                    if (Fe.tag === 7) {
                      l(D, Fe.sibling), x = c(Fe, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Fe.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === wt && Dv(Re) === Fe.type) {
                    l(D, Fe.sibling), x = c(Fe, L.props), x.ref = ru(D, Fe, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Fe);
                  break;
                } else
                  r(D, Fe);
                Fe = Fe.sibling;
              }
              L.type === He ? (x = gu(L.props.children, D.mode, X, L.key), x.return = D, D = x) : (X = nf(L.type, L.key, L.props, null, D.mode, X), X.ref = ru(D, x, L), X.return = D, D = X);
            }
            return m(D);
          case ot:
            e: {
              for (Fe = L.key; x !== null; ) {
                if (x.key === Fe)
                  if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                    l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                    break e;
                  } else {
                    l(D, x);
                    break;
                  }
                else
                  r(D, x);
                x = x.sibling;
              }
              x = _s(L, D.mode, X), x.return = D, D = x;
            }
            return m(D);
          case wt:
            return Fe = L._init, Ln(D, x, Fe(L._payload), X);
        }
        if (Wn(L))
          return ye(D, x, L, X);
        if (be(L))
          return Ee(D, x, L, X);
        Si(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = af(L, D.mode, X), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Ln;
  }
  var Ku = yc(!0), kv = yc(!1), $i = Ke(null), Vn = null, te = null, Fa = null;
  function Sa() {
    Fa = te = Vn = null;
  }
  function yd(n) {
    var r = $i.current;
    Nt($i), n._currentValue = r;
  }
  function gd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Zu(n, r) {
    Vn = n, Fa = te = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ra = !0), n.firstContext = null);
  }
  function ja(n) {
    var r = n._currentValue;
    if (Fa !== n)
      if (n = { context: n, memoizedValue: r, next: null }, te === null) {
        if (Vn === null)
          throw Error(F(308));
        te = n, Vn.dependencies = { lanes: 0, firstContext: n };
      } else
        te = te.next = n;
    return r;
  }
  var au = null;
  function An(n) {
    au === null ? au = [n] : au.push(n);
  }
  function Ov(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, An(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Yi(n, o);
  }
  function Yi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var bl = !1;
  function gc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ju(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ta(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function _l(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, vt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Yi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, An(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Yi(n, l);
  }
  function Sc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, hi(n, l);
    }
  }
  function Lv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Ec(n, r, l, o) {
    var c = n.updateQueue;
    bl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var I = n.alternate;
      I !== null && (I = I.updateQueue, E = I.lastBaseUpdate, E !== m && (E === null ? I.firstBaseUpdate = z : E.next = z, I.lastBaseUpdate = T));
    }
    if (d !== null) {
      var Q = c.baseState;
      m = 0, I = z = T = null, E = d;
      do {
        var $ = E.lane, se = E.eventTime;
        if ((o & $) === $) {
          I !== null && (I = I.next = {
            eventTime: se,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch ($ = r, se = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  Q = ye.call(se, Q, $);
                  break e;
                }
                Q = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, $ = typeof ye == "function" ? ye.call(se, Q, $) : ye, $ == null)
                  break e;
                Q = ae({}, Q, $);
                break e;
              case 2:
                bl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else
          se = { eventTime: se, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, I === null ? (z = I = se, T = Q) : I = I.next = se, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (I === null && (T = Q), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = I, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      vu |= m, n.lanes = m, n.memoizedState = Q;
    }
  }
  function Mv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(F(191, c));
          c.call(o);
        }
      }
  }
  var cs = {}, li = Ke(cs), eo = Ke(cs), fs = Ke(cs);
  function iu(n) {
    if (n === cs)
      throw Error(F(174));
    return n;
  }
  function Sd(n, r) {
    switch (Ht(fs, r), Ht(eo, n), Ht(li, cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = vn(r, n);
    }
    Nt(li), Ht(li, r);
  }
  function to() {
    Nt(li), Nt(eo), Nt(fs);
  }
  function Nv(n) {
    iu(fs.current);
    var r = iu(li.current), l = vn(r, n.type);
    r !== l && (Ht(eo, n), Ht(li, l));
  }
  function Ed(n) {
    eo.current === n && (Nt(li), Nt(eo));
  }
  var cn = Ke(0);
  function Cc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Rc = [];
  function Cd() {
    for (var n = 0; n < Rc.length; n++)
      Rc[n]._workInProgressVersionPrimary = null;
    Rc.length = 0;
  }
  var Tc = pt.ReactCurrentDispatcher, ds = pt.ReactCurrentBatchConfig, Ce = 0, we = null, Ye = null, ct = null, Ea = !1, no = !1, ps = 0, ry = 0;
  function Er() {
    throw Error(F(321));
  }
  function vs(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!La(n[l], r[l]))
        return !1;
    return !0;
  }
  function B(n, r, l, o, c, d) {
    if (Ce = d, we = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Tc.current = n === null || n.memoizedState === null ? ay : en, n = l(o, c), no) {
      d = 0;
      do {
        if (no = !1, ps = 0, 25 <= d)
          throw Error(F(301));
        d += 1, ct = Ye = null, r.updateQueue = null, Tc.current = jc, n = l(o, c);
      } while (no);
    }
    if (Tc.current = Cr, r = Ye !== null && Ye.next !== null, Ce = 0, ct = Ye = we = null, Ea = !1, r)
      throw Error(F(300));
    return n;
  }
  function Fn() {
    var n = ps !== 0;
    return ps = 0, n;
  }
  function De() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ct === null ? we.memoizedState = ct = n : ct = ct.next = n, ct;
  }
  function ar() {
    if (Ye === null) {
      var n = we.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Ye.next;
    var r = ct === null ? we.memoizedState : ct.next;
    if (r !== null)
      ct = r, Ye = n;
    else {
      if (n === null)
        throw Error(F(310));
      Ye = n, n = { memoizedState: Ye.memoizedState, baseState: Ye.baseState, baseQueue: Ye.baseQueue, queue: Ye.queue, next: null }, ct === null ? we.memoizedState = ct = n : ct = ct.next = n;
    }
    return ct;
  }
  function Ca(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ii(n) {
    var r = ar(), l = r.queue;
    if (l === null)
      throw Error(F(311));
    l.lastRenderedReducer = n;
    var o = Ye, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var I = z.lane;
        if ((Ce & I) === I)
          T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var Q = {
            lane: I,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = Q, m = o) : T = T.next = Q, we.lanes |= I, vu |= I;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, La(o, r.memoizedState) || (ra = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, we.lanes |= d, vu |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ha(n) {
    var r = ar(), l = r.queue;
    if (l === null)
      throw Error(F(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      La(d, r.memoizedState) || (ra = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ro() {
  }
  function lu(n, r) {
    var l = we, o = ar(), c = r(), d = !La(o.memoizedState, c);
    if (d && (o.memoizedState = c, ra = !0), o = o.queue, hs(xc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || ct !== null && ct.memoizedState.tag & 1) {
      if (l.flags |= 2048, uu(9, wc.bind(null, l, o, c, r), void 0, null), wn === null)
        throw Error(F(349));
      Ce & 30 || ao(l, r, c);
    }
    return c;
  }
  function ao(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = we.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, we.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function wc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, bc(r) && _c(n);
  }
  function xc(n, r, l) {
    return l(function() {
      bc(r) && _c(n);
    });
  }
  function bc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !La(n, l);
    } catch {
      return !0;
    }
  }
  function _c(n) {
    var r = Yi(n, 1);
    r !== null && gn(r, n, 1, -1);
  }
  function Dc(n) {
    var r = De();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ca, lastRenderedState: n }, r.queue = n, n = n.dispatch = ms.bind(null, we, n), [r.memoizedState, n];
  }
  function uu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = we.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, we.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function kc() {
    return ar().memoizedState;
  }
  function io(n, r, l, o) {
    var c = De();
    we.flags |= n, c.memoizedState = uu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function lo(n, r, l, o) {
    var c = ar();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ye !== null) {
      var m = Ye.memoizedState;
      if (d = m.destroy, o !== null && vs(o, m.deps)) {
        c.memoizedState = uu(r, l, d, o);
        return;
      }
    }
    we.flags |= n, c.memoizedState = uu(1 | r, l, d, o);
  }
  function Oc(n, r) {
    return io(8390656, 8, n, r);
  }
  function hs(n, r) {
    return lo(2048, 8, n, r);
  }
  function Lc(n, r) {
    return lo(4, 2, n, r);
  }
  function Mc(n, r) {
    return lo(4, 4, n, r);
  }
  function Nc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function zc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, lo(4, 4, Nc.bind(null, r, n), l);
  }
  function uo() {
  }
  function ou(n, r) {
    var l = ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && vs(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Uc(n, r) {
    var l = ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && vs(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ac(n, r, l) {
    return Ce & 21 ? (La(l, r) || (l = zu(), we.lanes |= l, vu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ra = !0), n.memoizedState = l);
  }
  function Rd(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ds.transition;
    ds.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, ds.transition = o;
    }
  }
  function Fc() {
    return ar().memoizedState;
  }
  function zv(n, r, l) {
    var o = Gi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Td(n))
      oo(r, l);
    else if (l = Ov(n, r, l, o), l !== null) {
      var c = er();
      gn(l, n, o, c), Dl(l, r, o);
    }
  }
  function ms(n, r, l) {
    var o = Gi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Td(n))
      oo(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, La(E, m)) {
            var T = r.interleaved;
            T === null ? (c.next = c, An(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Ov(n, r, c, o), l !== null && (c = er(), gn(l, n, o, c), Dl(l, r, o));
    }
  }
  function Td(n) {
    var r = n.alternate;
    return n === we || r !== null && r === we;
  }
  function oo(n, r) {
    no = Ea = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Dl(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, hi(n, l);
    }
  }
  var Cr = { readContext: ja, useCallback: Er, useContext: Er, useEffect: Er, useImperativeHandle: Er, useInsertionEffect: Er, useLayoutEffect: Er, useMemo: Er, useReducer: Er, useRef: Er, useState: Er, useDebugValue: Er, useDeferredValue: Er, useTransition: Er, useMutableSource: Er, useSyncExternalStore: Er, useId: Er, unstable_isNewReconciler: !1 }, ay = { readContext: ja, useCallback: function(n, r) {
    return De().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ja, useEffect: Oc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, io(
      4194308,
      4,
      Nc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return io(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return io(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = De();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = De();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = zv.bind(null, we, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = De();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Dc, useDebugValue: uo, useDeferredValue: function(n) {
    return De().memoizedState = n;
  }, useTransition: function() {
    var n = Dc(!1), r = n[0];
    return n = Rd.bind(null, n[1]), De().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = we, c = De();
    if (an) {
      if (l === void 0)
        throw Error(F(407));
      l = l();
    } else {
      if (l = r(), wn === null)
        throw Error(F(349));
      Ce & 30 || ao(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Oc(xc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, uu(9, wc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = De(), r = wn.identifierPrefix;
    if (an) {
      var l = Bi, o = rr;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ps++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ry++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, en = {
    readContext: ja,
    useCallback: ou,
    useContext: ja,
    useEffect: hs,
    useImperativeHandle: zc,
    useInsertionEffect: Lc,
    useLayoutEffect: Mc,
    useMemo: Uc,
    useReducer: Ii,
    useRef: kc,
    useState: function() {
      return Ii(Ca);
    },
    useDebugValue: uo,
    useDeferredValue: function(n) {
      var r = ar();
      return Ac(r, Ye.memoizedState, n);
    },
    useTransition: function() {
      var n = Ii(Ca)[0], r = ar().memoizedState;
      return [n, r];
    },
    useMutableSource: ro,
    useSyncExternalStore: lu,
    useId: Fc,
    unstable_isNewReconciler: !1
  }, jc = { readContext: ja, useCallback: ou, useContext: ja, useEffect: hs, useImperativeHandle: zc, useInsertionEffect: Lc, useLayoutEffect: Mc, useMemo: Uc, useReducer: Ha, useRef: kc, useState: function() {
    return Ha(Ca);
  }, useDebugValue: uo, useDeferredValue: function(n) {
    var r = ar();
    return Ye === null ? r.memoizedState = n : Ac(r, Ye.memoizedState, n);
  }, useTransition: function() {
    var n = Ha(Ca)[0], r = ar().memoizedState;
    return [n, r];
  }, useMutableSource: ro, useSyncExternalStore: lu, useId: Fc, unstable_isNewReconciler: !1 };
  function na(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function su(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ae({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var cu = { isMounted: function(n) {
    return (n = n._reactInternals) ? Te(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = er(), c = Gi(n), d = ta(o, c);
    d.payload = r, l != null && (d.callback = l), r = _l(n, d, c), r !== null && (gn(r, n, c, o), Sc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = er(), c = Gi(n), d = ta(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = _l(n, d, c), r !== null && (gn(r, n, c, o), Sc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = er(), o = Gi(n), c = ta(l, o);
    c.tag = 2, r != null && (c.callback = r), r = _l(n, c, o), r !== null && (gn(r, n, o, l), Sc(r, n, o));
  } };
  function Uv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Av(n, r, l) {
    var o = !1, c = gi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ja(d) : (c = sn(r) ? Xr : $e.current, o = r.contextTypes, d = (o = o != null) ? Na(n, c) : gi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = cu, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Fv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && cu.enqueueReplaceState(r, r.state, null);
  }
  function wd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, gc(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ja(d) : (d = sn(r) ? Xr : $e.current, c.context = Na(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (su(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && cu.enqueueReplaceState(c, c.state, null), Ec(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function kl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Je(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function xd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function ys(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var jv = typeof WeakMap == "function" ? WeakMap : Map;
  function Hv(n, r, l) {
    l = ta(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Xc || (Xc = !0, zd = o), ys(n, r);
    }, l;
  }
  function Vv(n, r, l) {
    l = ta(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        ys(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      ys(n, r), typeof o != "function" && (Ba === null ? Ba = /* @__PURE__ */ new Set([this]) : Ba.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function gs(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new jv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = vy.bind(null, n, r, l), r.then(n, n));
  }
  function Pv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function bd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ta(-1, 1), r.tag = 2, _l(l, r, 1))), l.lanes |= 1), n);
  }
  var Bv = pt.ReactCurrentOwner, ra = !1;
  function kn(n, r, l, o) {
    r.child = n === null ? kv(r, null, l, o) : Ku(r, n.child, l, o);
  }
  function so(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Zu(r, c), o = B(n, r, l, o, d, c), l = Fn(), n !== null && !ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (an && l && dc(r), r.flags |= 1, kn(n, r, o, c), r.child);
  }
  function Ol(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Hd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Hc(n, r, d, o, c)) : (n = nf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref)
        return On(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Hc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref)
        if (ra = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (ra = !0);
        else
          return r.lanes = n.lanes, On(n, r, c);
    }
    return qe(n, r, l, o, c);
  }
  function aa(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ht(Eo, ia), ia |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ht(Eo, ia), ia |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ht(Eo, ia), ia |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ht(Eo, ia), ia |= o;
    return kn(n, r, c, l), r.child;
  }
  function fu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qe(n, r, l, o, c) {
    var d = sn(l) ? Xr : $e.current;
    return d = Na(r, d), Zu(r, c), l = B(n, r, l, o, d, c), o = Fn(), n !== null && !ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (an && o && dc(r), r.flags |= 1, kn(n, r, l, c), r.child);
  }
  function Ss(n, r, l, o, c) {
    if (sn(l)) {
      var d = !0;
      fc(r);
    } else
      d = !1;
    if (Zu(r, c), r.stateNode === null)
      Cs(n, r), Av(r, l, o), wd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = ja(z) : (z = sn(l) ? Xr : $e.current, z = Na(r, z));
      var I = l.getDerivedStateFromProps, Q = typeof I == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Fv(r, m, o, z), bl = !1;
      var $ = r.memoizedState;
      m.state = $, Ec(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || Rn.current || bl ? (typeof I == "function" && (su(r, l, I, o), T = r.memoizedState), (E = bl || Uv(r, l, E, o, $, T, z)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Ju(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : na(r.type, E), m.props = z, Q = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = ja(T) : (T = sn(l) ? Xr : $e.current, T = Na(r, T));
      var se = l.getDerivedStateFromProps;
      (I = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Q || $ !== T) && Fv(r, m, o, T), bl = !1, $ = r.memoizedState, m.state = $, Ec(r, o, m, c);
      var ye = r.memoizedState;
      E !== Q || $ !== ye || Rn.current || bl ? (typeof se == "function" && (su(r, l, se, o), ye = r.memoizedState), (z = bl || Uv(r, l, z, o, $, ye, T) || !1) ? (I || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Vc(n, r, l, o, d, c);
  }
  function Vc(n, r, l, o, c, d) {
    fu(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && wv(r, l, !1), On(n, r, d);
    o = r.stateNode, Bv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ku(r, n.child, null, d), r.child = Ku(r, null, E, d)) : kn(n, r, E, d), r.memoizedState = o.state, c && wv(r, l, !0), r.child;
  }
  function iy(n) {
    var r = n.stateNode;
    r.pendingContext ? wl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && wl(n, r.context, !1), Sd(n, r.containerInfo);
  }
  function $v(n, r, l, o, c) {
    return yn(), md(c), r.flags |= 256, kn(n, r, l, o), r.child;
  }
  var Es = { dehydrated: null, treeContext: null, retryLane: 0 };
  function du(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Yv(n, r, l) {
    var o = r.pendingProps, c = cn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ht(cn, c & 1), n === null)
      return vc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = rf(m, o, 0, null), n = gu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = du(l), r.memoizedState = Es, n) : Pc(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return _d(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Nl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = gu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? du(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Es, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Pc(n, r) {
    return r = rf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Bc(n, r, l, o) {
    return o !== null && md(o), Ku(r, n.child, null, l), n = Pc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function _d(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = xd(Error(F(422))), Bc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = rf({ mode: "visible", children: o.children }, c, 0, null), d = gu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ku(r, n.child, null, m), r.child.memoizedState = du(m), r.memoizedState = Es, d);
    if (!(r.mode & 1))
      return Bc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(F(419)), o = xd(d, o, void 0), Bc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, ra || E) {
      if (o = wn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Yi(n, c), gn(o, n, c, -1));
      }
      return bs(), o = xd(Error(F(421))), Bc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = jd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ii(c.nextSibling), ga = r, an = !0, Aa = null, n !== null && (Jr[Sr++] = rr, Jr[Sr++] = Bi, Jr[Sr++] = Ua, rr = n.id, Bi = n.overflow, Ua = r), r = Pc(r, o.children), r.flags |= 4096, r);
  }
  function Iv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), gd(n.return, r, l);
  }
  function $c(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Dd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (kn(n, r, o.children, l), o = cn.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Iv(n, l, r);
            else if (n.tag === 19)
              Iv(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Ht(cn, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Cc(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), $c(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Cc(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          $c(r, !0, l, null, d);
          break;
        case "together":
          $c(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Cs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function On(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), vu |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(F(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Qi(n, r, l) {
    switch (r.tag) {
      case 3:
        iy(r), yn();
        break;
      case 5:
        Nv(r);
        break;
      case 1:
        sn(r.type) && fc(r);
        break;
      case 4:
        Sd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ht($i, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ht(cn, cn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Yv(n, r, l) : (Ht(cn, cn.current & 1), n = On(n, r, l), n !== null ? n.sibling : null);
        Ht(cn, cn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Dd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ht(cn, cn.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, aa(n, r, l);
    }
    return On(n, r, l);
  }
  var Ei, co, fo, Va;
  Ei = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, co = function() {
  }, fo = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, iu(li.current);
      var d = null;
      switch (l) {
        case "input":
          c = Qn(n, c), o = Qn(n, o), d = [];
          break;
        case "select":
          c = ae({}, c, { value: void 0 }), o = ae({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = cc);
      }
      Dn(l, o);
      var m;
      l = null;
      for (z in c)
        if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null)
          if (z === "style") {
            var E = c[z];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (on.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c?.[z], o.hasOwnProperty(z) && T !== E && (T != null || E != null))
          if (z === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
            } else
              l || (d || (d = []), d.push(
                z,
                l
              )), l = T;
          else
            z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (on.hasOwnProperty(z) ? (T != null && z === "onScroll" && Xt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Va = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Tn(n, r) {
    if (!an)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ly(n, r, l) {
    var o = r.pendingProps;
    switch (vd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rr(r), null;
      case 1:
        return sn(r.type) && za(), Rr(r), null;
      case 3:
        return o = r.stateNode, to(), Nt(Rn), Nt($e), Cd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (Ud(Aa), Aa = null))), co(n, r), Rr(r), null;
      case 5:
        Ed(r);
        var c = iu(fs.current);
        if (l = r.type, n !== null && r.stateNode != null)
          fo(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(F(166));
            return Rr(r), null;
          }
          if (n = iu(li.current), hc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[yi] = r, o[tu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Xt("cancel", o), Xt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Xt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ns.length; c++)
                  Xt(ns[c], o);
                break;
              case "source":
                Xt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Xt(
                  "error",
                  o
                ), Xt("load", o);
                break;
              case "details":
                Xt("toggle", o);
                break;
              case "input":
                Hn(o, d), Xt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Xt("invalid", o);
                break;
              case "textarea":
                mr(o, d), Xt("invalid", o);
            }
            Dn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && sc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : on.hasOwnProperty(m) && E != null && m === "onScroll" && Xt("scroll", o);
              }
            switch (l) {
              case "input":
                vr(o), Br(o, d, !0);
                break;
              case "textarea":
                vr(o), nr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = cc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ir(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[yi] = r, n[tu] = o, Ei(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = hn(l, o), l) {
                case "dialog":
                  Xt("cancel", n), Xt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Xt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ns.length; c++)
                    Xt(ns[c], n);
                  c = o;
                  break;
                case "source":
                  Xt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Xt(
                    "error",
                    n
                  ), Xt("load", n), c = o;
                  break;
                case "details":
                  Xt("toggle", n), c = o;
                  break;
                case "input":
                  Hn(n, o), c = Qn(n, o), Xt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ae({}, o, { value: void 0 }), Xt("invalid", n);
                  break;
                case "textarea":
                  mr(n, o), c = Yr(n, o), Xt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Dn(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var T = E[d];
                  d === "style" ? Mt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && da(n, T) : typeof T == "number" && da(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (on.hasOwnProperty(d) ? T != null && d === "onScroll" && Xt("scroll", n) : T != null && We(n, d, T, m));
                }
              switch (l) {
                case "input":
                  vr(n), Br(n, o, !1);
                  break;
                case "textarea":
                  vr(n), nr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + at(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? hr(n, !!o.multiple, d, !1) : o.defaultValue != null && hr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = cc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Rr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Va(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(F(166));
          if (l = iu(fs.current), iu(li.current), hc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[yi] = r, (d = o.nodeValue !== l) && (n = ga, n !== null))
              switch (n.tag) {
                case 3:
                  sc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && sc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[yi] = r, r.stateNode = o;
        }
        return Rr(r), null;
      case 13:
        if (Nt(cn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (an && ea !== null && r.mode & 1 && !(r.flags & 128))
            _v(), yn(), r.flags |= 98560, d = !1;
          else if (d = hc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(F(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(F(317));
              d[yi] = r;
            } else
              yn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Rr(r), d = !1;
          } else
            Aa !== null && (Ud(Aa), Aa = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || cn.current & 1 ? Bn === 0 && (Bn = 3) : bs())), r.updateQueue !== null && (r.flags |= 4), Rr(r), null);
      case 4:
        return to(), co(n, r), n === null && Gu(r.stateNode.containerInfo), Rr(r), null;
      case 10:
        return yd(r.type._context), Rr(r), null;
      case 17:
        return sn(r.type) && za(), Rr(r), null;
      case 19:
        if (Nt(cn), d = r.memoizedState, d === null)
          return Rr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Tn(d, !1);
          else {
            if (Bn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = Cc(n), m !== null) {
                  for (r.flags |= 128, Tn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Ht(cn, cn.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && _t() > Ro && (r.flags |= 128, o = !0, Tn(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Cc(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Tn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !an)
                return Rr(r), null;
            } else
              2 * _t() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, Tn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = _t(), r.sibling = null, l = cn.current, Ht(cn, o ? l & 1 | 2 : l & 1), r) : (Rr(r), null);
      case 22:
      case 23:
        return ef(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ia & 1073741824 && (Rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(F(156, r.tag));
  }
  function uy(n, r) {
    switch (vd(r), r.tag) {
      case 1:
        return sn(r.type) && za(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return to(), Nt(Rn), Nt($e), Cd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ed(r), null;
      case 13:
        if (Nt(cn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(F(340));
          yn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Nt(cn), null;
      case 4:
        return to(), null;
      case 10:
        return yd(r.type._context), null;
      case 22:
      case 23:
        return ef(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var po = !1, ir = !1, Yc = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function vo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          xn(n, r, o);
        }
      else
        l.current = null;
  }
  function kd(n, r, l) {
    try {
      l();
    } catch (o) {
      xn(n, r, o);
    }
  }
  var Ic = !1;
  function oy(n, r) {
    if (ld = Oa, n = ac(), ji(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, T = -1, z = 0, I = 0, Q = n, $ = null;
            t:
              for (; ; ) {
                for (var se; Q !== l || c !== 0 && Q.nodeType !== 3 || (E = m + c), Q !== d || o !== 0 && Q.nodeType !== 3 || (T = m + o), Q.nodeType === 3 && (m += Q.nodeValue.length), (se = Q.firstChild) !== null; )
                  $ = Q, Q = se;
                for (; ; ) {
                  if (Q === n)
                    break t;
                  if ($ === l && ++z === c && (E = m), $ === d && ++I === o && (T = m), (se = Q.nextSibling) !== null)
                    break;
                  Q = $, $ = Q.parentNode;
                }
                Q = se;
              }
            l = E === -1 || T === -1 ? null : { start: E, end: T };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Jl = { focusedElem: n, selectionRange: l }, Oa = !1, pe = r; pe !== null; )
      if (r = pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, pe = n;
      else
        for (; pe !== null; ) {
          r = pe;
          try {
            var ye = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ye !== null) {
                    var Ee = ye.memoizedProps, Ln = ye.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : na(r.type, Ee), Ln);
                    D.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(F(163));
              }
          } catch (X) {
            xn(r, r.return, X);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, pe = n;
            break;
          }
          pe = r.return;
        }
    return ye = Ic, Ic = !1, ye;
  }
  function ho(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && kd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Qc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Wc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Qv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Qv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[yi], delete r[tu], delete r[sd], delete r[ny], delete r[cd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Od(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Wv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Od(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Rs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = cc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Rs(n, r, l), n = n.sibling; n !== null; )
        Rs(n, r, l), n = n.sibling;
  }
  function mo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (mo(n, r, l), n = n.sibling; n !== null; )
        mo(n, r, l), n = n.sibling;
  }
  var fn = null, Zn = !1;
  function Lr(n, r, l) {
    for (l = l.child; l !== null; )
      yo(n, r, l), l = l.sibling;
  }
  function yo(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(cl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        ir || vo(l, r);
      case 6:
        var o = fn, c = Zn;
        fn = null, Lr(n, r, l), fn = o, Zn = c, fn !== null && (Zn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : fn.removeChild(l.stateNode));
        break;
      case 18:
        fn !== null && (Zn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? Cl(n.parentNode, l) : n.nodeType === 1 && Cl(n, l), yl(n)) : Cl(fn, l.stateNode));
        break;
      case 4:
        o = fn, c = Zn, fn = l.stateNode.containerInfo, Zn = !0, Lr(n, r, l), fn = o, Zn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ir && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && kd(l, r, m), c = c.next;
          } while (c !== o);
        }
        Lr(n, r, l);
        break;
      case 1:
        if (!ir && (vo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            xn(l, r, E);
          }
        Lr(n, r, l);
        break;
      case 21:
        Lr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ir = (o = ir) || l.memoizedState !== null, Lr(n, r, l), ir = o) : Lr(n, r, l);
        break;
      default:
        Lr(n, r, l);
    }
  }
  function go(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Yc()), r.forEach(function(o) {
        var c = hy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Jn(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  fn = E.stateNode, Zn = !1;
                  break e;
                case 3:
                  fn = E.stateNode.containerInfo, Zn = !0;
                  break e;
                case 4:
                  fn = E.stateNode.containerInfo, Zn = !0;
                  break e;
              }
              E = E.return;
            }
          if (fn === null)
            throw Error(F(160));
          yo(d, m, c), fn = null, Zn = !1;
          var T = c.alternate;
          T !== null && (T.return = null), c.return = null;
        } catch (z) {
          xn(c, r, z);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Gv(r, n), r = r.sibling;
  }
  function Gv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Jn(r, n), Ci(n), o & 4) {
          try {
            ho(3, n, n.return), Qc(3, n);
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
          try {
            ho(5, n, n.return);
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        Jn(r, n), Ci(n), o & 512 && l !== null && vo(l, l.return);
        break;
      case 5:
        if (Jn(r, n), Ci(n), o & 512 && l !== null && vo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            da(c, "");
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Nn(c, d), hn(E, m);
              var z = hn(E, d);
              for (m = 0; m < T.length; m += 2) {
                var I = T[m], Q = T[m + 1];
                I === "style" ? Mt(c, Q) : I === "dangerouslySetInnerHTML" ? ci(c, Q) : I === "children" ? da(c, Q) : We(c, I, Q, z);
              }
              switch (E) {
                case "input":
                  _n(c, d);
                  break;
                case "textarea":
                  fa(c, d);
                  break;
                case "select":
                  var $ = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var se = d.value;
                  se != null ? hr(c, !!d.multiple, se, !1) : $ !== !!d.multiple && (d.defaultValue != null ? hr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : hr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[tu] = d;
            } catch (Ee) {
              xn(n, n.return, Ee);
            }
        }
        break;
      case 6:
        if (Jn(r, n), Ci(n), o & 4) {
          if (n.stateNode === null)
            throw Error(F(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (Jn(r, n), Ci(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            yl(r.containerInfo);
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
        break;
      case 4:
        Jn(r, n), Ci(n);
        break;
      case 13:
        Jn(r, n), Ci(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (qc = _t())), o & 4 && go(n);
        break;
      case 22:
        if (I = l !== null && l.memoizedState !== null, n.mode & 1 ? (ir = (z = ir) || I, Jn(r, n), ir = z) : Jn(r, n), Ci(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !I && n.mode & 1)
            for (pe = n, I = n.child; I !== null; ) {
              for (Q = pe = I; pe !== null; ) {
                switch ($ = pe, se = $.child, $.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ho(4, $, $.return);
                    break;
                  case 1:
                    vo($, $.return);
                    var ye = $.stateNode;
                    if (typeof ye.componentWillUnmount == "function") {
                      o = $, l = $.return;
                      try {
                        r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                      } catch (Ee) {
                        xn(o, l, Ee);
                      }
                    }
                    break;
                  case 5:
                    vo($, $.return);
                    break;
                  case 22:
                    if ($.memoizedState !== null) {
                      qv(Q);
                      continue;
                    }
                }
                se !== null ? (se.return = $, pe = se) : qv(Q);
              }
              I = I.sibling;
            }
          e:
            for (I = null, Q = n; ; ) {
              if (Q.tag === 5) {
                if (I === null) {
                  I = Q;
                  try {
                    c = Q.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Q.stateNode, T = Q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = et("display", m));
                  } catch (Ee) {
                    xn(n, n.return, Ee);
                  }
                }
              } else if (Q.tag === 6) {
                if (I === null)
                  try {
                    Q.stateNode.nodeValue = z ? "" : Q.memoizedProps;
                  } catch (Ee) {
                    xn(n, n.return, Ee);
                  }
              } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === n) && Q.child !== null) {
                Q.child.return = Q, Q = Q.child;
                continue;
              }
              if (Q === n)
                break e;
              for (; Q.sibling === null; ) {
                if (Q.return === null || Q.return === n)
                  break e;
                I === Q && (I = null), Q = Q.return;
              }
              I === Q && (I = null), Q.sibling.return = Q.return, Q = Q.sibling;
            }
        }
        break;
      case 19:
        Jn(r, n), Ci(n), o & 4 && go(n);
        break;
      case 21:
        break;
      default:
        Jn(
          r,
          n
        ), Ci(n);
    }
  }
  function Ci(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Od(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(F(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (da(c, ""), o.flags &= -33);
            var d = Wv(n);
            mo(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Wv(n);
            Rs(n, E, m);
            break;
          default:
            throw Error(F(161));
        }
      } catch (T) {
        xn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function sy(n, r, l) {
    pe = n, Ld(n);
  }
  function Ld(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || po;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || ir;
          E = po;
          var z = ir;
          if (po = m, (ir = T) && !z)
            for (pe = c; pe !== null; )
              m = pe, T = m.child, m.tag === 22 && m.memoizedState !== null ? Md(c) : T !== null ? (T.return = m, pe = T) : Md(c);
          for (; d !== null; )
            pe = d, Ld(d), d = d.sibling;
          pe = c, po = E, ir = z;
        }
        So(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, pe = d) : So(n);
    }
  }
  function So(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ir || Qc(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !ir)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : na(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && Mv(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  Mv(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var T = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && l.focus();
                      break;
                    case "img":
                      T.src && (l.src = T.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var z = r.alternate;
                  if (z !== null) {
                    var I = z.memoizedState;
                    if (I !== null) {
                      var Q = I.dehydrated;
                      Q !== null && yl(Q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(F(163));
            }
          ir || r.flags & 512 && Wc(r);
        } catch ($) {
          xn(r, r.return, $);
        }
      }
      if (r === n) {
        pe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function qv(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r === n) {
        pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function Md(n) {
    for (; pe !== null; ) {
      var r = pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Qc(4, r);
            } catch (T) {
              xn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                xn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Wc(r);
            } catch (T) {
              xn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Wc(r);
            } catch (T) {
              xn(r, m, T);
            }
        }
      } catch (T) {
        xn(r, r.return, T);
      }
      if (r === n) {
        pe = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, pe = E;
        break;
      }
      pe = r.return;
    }
  }
  var cy = Math.ceil, pu = pt.ReactCurrentDispatcher, Gc = pt.ReactCurrentOwner, Pa = pt.ReactCurrentBatchConfig, vt = 0, wn = null, ln = null, Pn = 0, ia = 0, Eo = Ke(0), Bn = 0, Ts = null, vu = 0, Co = 0, Nd = 0, Ll = null, Tr = null, qc = 0, Ro = 1 / 0, Wi = null, Xc = !1, zd = null, Ba = null, To = !1, $a = null, Kc = 0, ws = 0, Zc = null, xs = -1, hu = 0;
  function er() {
    return vt & 6 ? _t() : xs !== -1 ? xs : xs = _t();
  }
  function Gi(n) {
    return n.mode & 1 ? vt & 2 && Pn !== 0 ? Pn & -Pn : mc.transition !== null ? (hu === 0 && (hu = zu()), hu) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Wo(n.type)), n) : 1;
  }
  function gn(n, r, l, o) {
    if (50 < ws)
      throw ws = 0, Zc = null, Error(F(185));
    Mi(n, l, o), (!(vt & 2) || n !== wn) && (n === wn && (!(vt & 2) && (Co |= l), Bn === 4 && Ri(n, Pn)), $n(n, o), l === 1 && vt === 0 && !(r.mode & 1) && (Ro = _t() + 500, Kn && Kr()));
  }
  function $n(n, r) {
    var l = n.callbackNode;
    pl(n, r);
    var o = kr(n, n === wn ? Pn : 0);
    if (o === 0)
      l !== null && nn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && nn(l), r === 1)
        n.tag === 0 ? dd(wo.bind(null, n)) : fd(wo.bind(null, n)), od(function() {
          !(vt & 6) && Kr();
        }), l = null;
      else {
        switch (Au(o)) {
          case 1:
            l = _r;
            break;
          case 4:
            l = nt;
            break;
          case 16:
            l = Da;
            break;
          case 536870912:
            l = Mu;
            break;
          default:
            l = Da;
        }
        l = rh(l, Jc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Jc(n, r) {
    if (xs = -1, hu = 0, vt & 6)
      throw Error(F(327));
    var l = n.callbackNode;
    if (xo() && n.callbackNode !== l)
      return null;
    var o = kr(n, n === wn ? Pn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = tf(n, o);
    else {
      r = o;
      var c = vt;
      vt |= 2;
      var d = Kv();
      (wn !== n || Pn !== r) && (Wi = null, Ro = _t() + 500, yu(n, r));
      do
        try {
          dy();
          break;
        } catch (E) {
          Xv(n, E);
        }
      while (!0);
      Sa(), pu.current = d, vt = c, ln !== null ? r = 0 : (wn = null, Pn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = vl(n), c !== 0 && (o = c, r = mu(n, c))), r === 1)
        throw l = Ts, yu(n, 0), Ri(n, o), $n(n, _t()), l;
      if (r === 6)
        Ri(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Ad(c) && (r = tf(n, o), r === 2 && (d = vl(n), d !== 0 && (o = d, r = mu(n, d))), r === 1))
          throw l = Ts, yu(n, 0), Ri(n, o), $n(n, _t()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(F(345));
          case 2:
            Ml(n, Tr, Wi);
            break;
          case 3:
            if (Ri(n, o), (o & 130023424) === o && (r = qc + 500 - _t(), 10 < r)) {
              if (kr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                er(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = eu(Ml.bind(null, n, Tr, Wi), r);
              break;
            }
            Ml(n, Tr, Wi);
            break;
          case 4:
            if (Ri(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = _t() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = eu(Ml.bind(null, n, Tr, Wi), o);
              break;
            }
            Ml(n, Tr, Wi);
            break;
          case 5:
            Ml(n, Tr, Wi);
            break;
          default:
            throw Error(F(329));
        }
      }
    }
    return $n(n, _t()), n.callbackNode === l ? Jc.bind(null, n) : null;
  }
  function mu(n, r) {
    var l = Ll;
    return n.current.memoizedState.isDehydrated && (yu(n, r).flags |= 256), n = tf(n, r), n !== 2 && (r = Tr, Tr = l, r !== null && Ud(r)), n;
  }
  function Ud(n) {
    Tr === null ? Tr = n : Tr.push.apply(Tr, n);
  }
  function Ad(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!La(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ri(n, r) {
    for (r &= ~Nd, r &= ~Co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function wo(n) {
    if (vt & 6)
      throw Error(F(327));
    xo();
    var r = kr(n, 0);
    if (!(r & 1))
      return $n(n, _t()), null;
    var l = tf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = vl(n);
      o !== 0 && (r = o, l = mu(n, o));
    }
    if (l === 1)
      throw l = Ts, yu(n, 0), Ri(n, r), $n(n, _t()), l;
    if (l === 6)
      throw Error(F(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ml(n, Tr, Wi), $n(n, _t()), null;
  }
  function Fd(n, r) {
    var l = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = l, vt === 0 && (Ro = _t() + 500, Kn && Kr());
    }
  }
  function Ti(n) {
    $a !== null && $a.tag === 0 && !(vt & 6) && xo();
    var r = vt;
    vt |= 1;
    var l = Pa.transition, o = Dt;
    try {
      if (Pa.transition = null, Dt = 1, n)
        return n();
    } finally {
      Dt = o, Pa.transition = l, vt = r, !(vt & 6) && Kr();
    }
  }
  function ef() {
    ia = Eo.current, Nt(Eo);
  }
  function yu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Tv(l)), ln !== null)
      for (l = ln.return; l !== null; ) {
        var o = l;
        switch (vd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && za();
            break;
          case 3:
            to(), Nt(Rn), Nt($e), Cd();
            break;
          case 5:
            Ed(o);
            break;
          case 4:
            to();
            break;
          case 13:
            Nt(cn);
            break;
          case 19:
            Nt(cn);
            break;
          case 10:
            yd(o.type._context);
            break;
          case 22:
          case 23:
            ef();
        }
        l = l.return;
      }
    if (wn = n, ln = n = Nl(n.current, null), Pn = ia = r, Bn = 0, Ts = null, Nd = Co = vu = 0, Tr = Ll = null, au !== null) {
      for (r = 0; r < au.length; r++)
        if (l = au[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      au = null;
    }
    return n;
  }
  function Xv(n, r) {
    do {
      var l = ln;
      try {
        if (Sa(), Tc.current = Cr, Ea) {
          for (var o = we.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ea = !1;
        }
        if (Ce = 0, ct = Ye = we = null, no = !1, ps = 0, Gc.current = null, l === null || l.return === null) {
          Bn = 1, Ts = r, ln = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Pn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, I = E, Q = I.tag;
            if (!(I.mode & 1) && (Q === 0 || Q === 11 || Q === 15)) {
              var $ = I.alternate;
              $ ? (I.updateQueue = $.updateQueue, I.memoizedState = $.memoizedState, I.lanes = $.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var se = Pv(m);
            if (se !== null) {
              se.flags &= -257, bd(se, m, E, d, r), se.mode & 1 && gs(d, z, r), r = se, T = z;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else
                ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                gs(d, z, r), bs();
                break e;
              }
              T = Error(F(426));
            }
          } else if (an && E.mode & 1) {
            var Ln = Pv(m);
            if (Ln !== null) {
              !(Ln.flags & 65536) && (Ln.flags |= 256), bd(Ln, m, E, d, r), md(kl(T, E));
              break e;
            }
          }
          d = T = kl(T, E), Bn !== 4 && (Bn = 2), Ll === null ? Ll = [d] : Ll.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Hv(d, T, r);
                Lv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ba === null || !Ba.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var X = Vv(d, E, r);
                  Lv(d, X);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Jv(l);
      } catch (Re) {
        r = Re, ln === l && l !== null && (ln = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Kv() {
    var n = pu.current;
    return pu.current = Cr, n === null ? Cr : n;
  }
  function bs() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), wn === null || !(vu & 268435455) && !(Co & 268435455) || Ri(wn, Pn);
  }
  function tf(n, r) {
    var l = vt;
    vt |= 2;
    var o = Kv();
    (wn !== n || Pn !== r) && (Wi = null, yu(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        Xv(n, c);
      }
    while (!0);
    if (Sa(), vt = l, pu.current = o, ln !== null)
      throw Error(F(261));
    return wn = null, Pn = 0, Bn;
  }
  function fy() {
    for (; ln !== null; )
      Zv(ln);
  }
  function dy() {
    for (; ln !== null && !gr(); )
      Zv(ln);
  }
  function Zv(n) {
    var r = nh(n.alternate, n, ia);
    n.memoizedProps = n.pendingProps, r === null ? Jv(n) : ln = r, Gc.current = null;
  }
  function Jv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uy(l, r), l !== null) {
          l.flags &= 32767, ln = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, ln = null;
          return;
        }
      } else if (l = ly(l, r, ia), l !== null) {
        ln = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        ln = r;
        return;
      }
      ln = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Ml(n, r, l) {
    var o = Dt, c = Pa.transition;
    try {
      Pa.transition = null, Dt = 1, py(n, r, l, o);
    } finally {
      Pa.transition = c, Dt = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      xo();
    while ($a !== null);
    if (vt & 6)
      throw Error(F(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(F(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Pf(n, d), n === wn && (ln = wn = null, Pn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || To || (To = !0, rh(Da, function() {
      return xo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Pa.transition, Pa.transition = null;
      var m = Dt;
      Dt = 1;
      var E = vt;
      vt |= 4, Gc.current = null, oy(n, l), Gv(l, n), ic(Jl), Oa = !!ld, Jl = ld = null, n.current = l, sy(l), vi(), vt = E, Dt = m, Pa.transition = d;
    } else
      n.current = l;
    if (To && (To = !1, $a = n, Kc = c), d = n.pendingLanes, d === 0 && (Ba = null), Yo(l.stateNode), $n(n, _t()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Xc)
      throw Xc = !1, n = zd, zd = null, n;
    return Kc & 1 && n.tag !== 0 && xo(), d = n.pendingLanes, d & 1 ? n === Zc ? ws++ : (ws = 0, Zc = n) : ws = 0, Kr(), null;
  }
  function xo() {
    if ($a !== null) {
      var n = Au(Kc), r = Pa.transition, l = Dt;
      try {
        if (Pa.transition = null, Dt = 16 > n ? 16 : n, $a === null)
          var o = !1;
        else {
          if (n = $a, $a = null, Kc = 0, vt & 6)
            throw Error(F(331));
          var c = vt;
          for (vt |= 4, pe = n.current; pe !== null; ) {
            var d = pe, m = d.child;
            if (pe.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (pe = z; pe !== null; ) {
                    var I = pe;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(8, I, d);
                    }
                    var Q = I.child;
                    if (Q !== null)
                      Q.return = I, pe = Q;
                    else
                      for (; pe !== null; ) {
                        I = pe;
                        var $ = I.sibling, se = I.return;
                        if (Qv(I), I === z) {
                          pe = null;
                          break;
                        }
                        if ($ !== null) {
                          $.return = se, pe = $;
                          break;
                        }
                        pe = se;
                      }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var Ln = Ee.sibling;
                      Ee.sibling = null, Ee = Ln;
                    } while (Ee !== null);
                  }
                }
                pe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, pe = m;
            else
              e:
                for (; pe !== null; ) {
                  if (d = pe, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(9, d, d.return);
                    }
                  var D = d.sibling;
                  if (D !== null) {
                    D.return = d.return, pe = D;
                    break e;
                  }
                  pe = d.return;
                }
          }
          var x = n.current;
          for (pe = x; pe !== null; ) {
            m = pe;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null)
              L.return = m, pe = L;
            else
              e:
                for (m = x; pe !== null; ) {
                  if (E = pe, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qc(9, E);
                      }
                    } catch (Re) {
                      xn(E, E.return, Re);
                    }
                  if (E === m) {
                    pe = null;
                    break e;
                  }
                  var X = E.sibling;
                  if (X !== null) {
                    X.return = E.return, pe = X;
                    break e;
                  }
                  pe = E.return;
                }
          }
          if (vt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(cl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Dt = l, Pa.transition = r;
      }
    }
    return !1;
  }
  function eh(n, r, l) {
    r = kl(l, r), r = Hv(n, r, 1), n = _l(n, r, 1), r = er(), n !== null && (Mi(n, 1, r), $n(n, r));
  }
  function xn(n, r, l) {
    if (n.tag === 3)
      eh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          eh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ba === null || !Ba.has(o))) {
            n = kl(l, n), n = Vv(r, n, 1), r = _l(r, n, 1), n = er(), r !== null && (Mi(r, 1, n), $n(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = er(), n.pingedLanes |= n.suspendedLanes & l, wn === n && (Pn & l) === l && (Bn === 4 || Bn === 3 && (Pn & 130023424) === Pn && 500 > _t() - qc ? yu(n, 0) : Nd |= l), $n(n, r);
  }
  function th(n, r) {
    r === 0 && (n.mode & 1 ? (r = fl, fl <<= 1, !(fl & 130023424) && (fl = 4194304)) : r = 1);
    var l = er();
    n = Yi(n, r), n !== null && (Mi(n, r, l), $n(n, l));
  }
  function jd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), th(n, l);
  }
  function hy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(F(314));
    }
    o !== null && o.delete(r), th(n, l);
  }
  var nh;
  nh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rn.current)
        ra = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return ra = !1, Qi(n, r, l);
        ra = !!(n.flags & 131072);
      }
    else
      ra = !1, an && r.flags & 1048576 && pd(r, Xu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Cs(n, r), n = r.pendingProps;
        var c = Na(r, $e.current);
        Zu(r, l), c = B(null, r, o, n, c, l);
        var d = Fn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, sn(o) ? (d = !0, fc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, gc(r), c.updater = cu, r.stateNode = c, c._reactInternals = r, wd(r, o, n, l), r = Vc(null, r, o, !0, d, l)) : (r.tag = 0, an && d && dc(r), kn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Cs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = na(o, n), c) {
            case 0:
              r = qe(null, r, o, n, l);
              break e;
            case 1:
              r = Ss(null, r, o, n, l);
              break e;
            case 11:
              r = so(null, r, o, n, l);
              break e;
            case 14:
              r = Ol(null, r, o, na(o.type, n), l);
              break e;
          }
          throw Error(F(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), qe(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Ss(n, r, o, c, l);
      case 3:
        e: {
          if (iy(r), n === null)
            throw Error(F(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Ju(n, r), Ec(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = kl(Error(F(423)), r), r = $v(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = kl(Error(F(424)), r), r = $v(n, r, o, l, c);
              break e;
            } else
              for (ea = ii(r.stateNode.containerInfo.firstChild), ga = r, an = !0, Aa = null, l = kv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (yn(), o === c) {
              r = On(n, r, l);
              break e;
            }
            kn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Nv(r), n === null && vc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, is(o, c) ? m = null : d !== null && is(o, d) && (r.flags |= 32), fu(n, r), kn(n, r, m, l), r.child;
      case 6:
        return n === null && vc(r), null;
      case 13:
        return Yv(n, r, l);
      case 4:
        return Sd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ku(r, null, o, l) : kn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), so(n, r, o, c, l);
      case 7:
        return kn(n, r, r.pendingProps, l), r.child;
      case 8:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Ht($i, o._currentValue), o._currentValue = m, d !== null)
            if (La(d.value, m)) {
              if (d.children === c.children && !Rn.current) {
                r = On(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var T = E.firstContext; T !== null; ) {
                    if (T.context === o) {
                      if (d.tag === 1) {
                        T = ta(-1, l & -l), T.tag = 2;
                        var z = d.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var I = z.pending;
                          I === null ? T.next = T : (T.next = I.next, I.next = T), z.pending = T;
                        }
                      }
                      d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), gd(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    T = T.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(F(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), gd(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          kn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Zu(r, l), c = ja(c), o = o(c), r.flags |= 1, kn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = na(o, r.pendingProps), c = na(o.type, c), Ol(n, r, o, c, l);
      case 15:
        return Hc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Cs(n, r), r.tag = 1, sn(o) ? (n = !0, fc(r)) : n = !1, Zu(r, l), Av(r, o, c), wd(r, o, c, l), Vc(null, r, o, !0, n, l);
      case 19:
        return Dd(n, r, l);
      case 22:
        return aa(n, r, l);
    }
    throw Error(F(156, r.tag));
  };
  function rh(n, r) {
    return Wt(n, r);
  }
  function ah(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, l, o) {
    return new ah(n, r, l, o);
  }
  function Hd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function")
      return Hd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === zt)
        return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ya(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function nf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Hd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case He:
            return gu(l.children, c, d, r);
          case tn:
            m = 8, c |= 8;
            break;
          case bn:
            return n = Ya(12, l, r, c | 2), n.elementType = bn, n.lanes = d, n;
          case Ne:
            return n = Ya(13, l, r, c), n.elementType = Ne, n.lanes = d, n;
          case Xe:
            return n = Ya(19, l, r, c), n.elementType = Xe, n.lanes = d, n;
          case me:
            return rf(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Yt:
                  m = 10;
                  break e;
                case bt:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case zt:
                  m = 14;
                  break e;
                case wt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(F(130, n == null ? n : typeof n, ""));
        }
    return r = Ya(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function gu(n, r, l, o) {
    return n = Ya(7, n, o, r), n.lanes = l, n;
  }
  function rf(n, r, l, o) {
    return n = Ya(22, n, o, r), n.elementType = me, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function af(n, r, l) {
    return n = Ya(6, n, null, r), n.lanes = l, n;
  }
  function _s(n, r, l) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ds(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Uu(0), this.expirationTimes = Uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Vd(n, r, l, o, c, d, m, E, T) {
    return n = new Ds(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ya(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gc(d), n;
  }
  function ih(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ot, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Pd(n) {
    if (!n)
      return gi;
    n = n._reactInternals;
    e: {
      if (Te(n) !== n || n.tag !== 1)
        throw Error(F(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (sn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(F(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (sn(l))
        return os(n, l, r);
    }
    return r;
  }
  function Bd(n, r, l, o, c, d, m, E, T) {
    return n = Vd(l, o, !0, n, c, d, m, E, T), n.context = Pd(null), l = n.current, o = er(), c = Gi(l), d = ta(o, c), d.callback = r ?? null, _l(l, d, c), n.current.lanes = c, Mi(n, c, o), $n(n, o), n;
  }
  function lf(n, r, l, o) {
    var c = r.current, d = er(), m = Gi(c);
    return l = Pd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ta(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = _l(c, r, m), n !== null && (gn(n, c, m, d), Sc(n, c, m)), m;
  }
  function ks(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function lh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function $d(n, r) {
    lh(n, r), (n = n.alternate) && lh(n, r);
  }
  function yy() {
    return null;
  }
  var Yd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function uf(n) {
    this._internalRoot = n;
  }
  Os.prototype.render = uf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(F(409));
    lf(n, r, null, null);
  }, Os.prototype.unmount = uf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ti(function() {
        lf(null, n, null, null);
      }), r[Pi] = null;
    }
  };
  function Os(n) {
    this._internalRoot = n;
  }
  Os.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ju();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < jt.length && r !== 0 && r < jt[l].priority; l++)
        ;
      jt.splice(l, 0, n), l === 0 && Zs(n);
    }
  };
  function zl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function uh() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = ks(m);
          d.call(z);
        };
      }
      var m = Bd(r, o, n, 0, null, !1, !1, "", uh);
      return n._reactRootContainer = m, n[Pi] = m.current, Gu(n.nodeType === 8 ? n.parentNode : n), Ti(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = ks(T);
        E.call(z);
      };
    }
    var T = Vd(n, 0, !1, null, null, !1, !1, "", uh);
    return n._reactRootContainer = T, n[Pi] = T.current, Gu(n.nodeType === 8 ? n.parentNode : n), Ti(function() {
      lf(r, T, l, o);
    }), T;
  }
  function sf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = ks(m);
          E.call(T);
        };
      }
      lf(r, m, n, c);
    } else
      m = gy(l, r, n, c, o);
    return ks(m);
  }
  Ql = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ei(r.pendingLanes);
          l !== 0 && (hi(r, l | 1), $n(r, _t()), !(vt & 6) && (Ro = _t() + 500, Kr()));
        }
        break;
      case 13:
        Ti(function() {
          var o = Yi(n, 1);
          if (o !== null) {
            var c = er();
            gn(o, n, 1, c);
          }
        }), $d(n, 1);
    }
  }, Fu = function(n) {
    if (n.tag === 13) {
      var r = Yi(n, 134217728);
      if (r !== null) {
        var l = er();
        gn(r, n, 134217728, l);
      }
      $d(n, 134217728);
    }
  }, gt = function(n) {
    if (n.tag === 13) {
      var r = Gi(n), l = Yi(n, r);
      if (l !== null) {
        var o = er();
        gn(l, n, r, o);
      }
      $d(n, r);
    }
  }, ju = function() {
    return Dt;
  }, Hu = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, xr = function(n, r, l) {
    switch (r) {
      case "input":
        if (_n(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Oe(o);
              if (!c)
                throw Error(F(90));
              Pr(o), _n(o, c);
            }
          }
        }
        break;
      case "textarea":
        fa(n, l);
        break;
      case "select":
        r = l.value, r != null && hr(n, !!l.multiple, r, !1);
    }
  }, Il = Fd, Lu = Ti;
  var Sy = { usingClientEntryPoint: !1, Events: [us, qu, Oe, _a, ul, Fd] }, Ls = { findFiberByHostInstance: Ma, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, oh = { bundleType: Ls.bundleType, version: Ls.version, rendererPackageName: Ls.rendererPackageName, rendererConfig: Ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = tt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ls.findFiberByHostInstance || yy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cf.isDisabled && cf.supportsFiber)
      try {
        cl = cf.inject(oh), Qr = cf;
      } catch {
      }
  }
  return Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Xa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zl(r))
      throw Error(F(200));
    return ih(n, r, null, l);
  }, Xa.createRoot = function(n, r) {
    if (!zl(n))
      throw Error(F(299));
    var l = !1, o = "", c = Yd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Vd(n, 1, !1, null, null, l, !1, o, c), n[Pi] = r.current, Gu(n.nodeType === 8 ? n.parentNode : n), new uf(r);
  }, Xa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(F(188)) : (n = Object.keys(n).join(","), Error(F(268, n)));
    return n = tt(r), n = n === null ? null : n.stateNode, n;
  }, Xa.flushSync = function(n) {
    return Ti(n);
  }, Xa.hydrate = function(n, r, l) {
    if (!of(r))
      throw Error(F(200));
    return sf(null, n, r, !0, l);
  }, Xa.hydrateRoot = function(n, r, l) {
    if (!zl(n))
      throw Error(F(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Yd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Bd(r, null, n, 1, l ?? null, c, !1, d, m), n[Pi] = r.current, Gu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Os(r);
  }, Xa.render = function(n, r, l) {
    if (!of(r))
      throw Error(F(200));
    return sf(null, n, r, !1, l);
  }, Xa.unmountComponentAtNode = function(n) {
    if (!of(n))
      throw Error(F(40));
    return n._reactRootContainer ? (Ti(function() {
      sf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Pi] = null;
      });
    }), !0) : !1;
  }, Xa.unstable_batchedUpdates = Fd, Xa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!of(l))
      throw Error(F(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(F(38));
    return sf(n, r, l, !1, o);
  }, Xa.version = "18.3.1-next-f1338f8080-20240426", Xa;
}
var Ka = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function iD() {
  return iR || (iR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var J = qp, Z = lR(), F = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kt = !1;
    function on(e) {
      Kt = e;
    }
    function lt(e) {
      if (!Kt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        $t("warn", e, a);
      }
    }
    function S(e) {
      if (!Kt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        $t("error", e, a);
      }
    }
    function $t(e, t, a) {
      {
        var i = F.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ve = 0, de = 1, ut = 2, re = 3, he = 4, ue = 5, Be = 6, Tt = 7, dt = 8, dn = 9, rt = 10, We = 11, pt = 12, ke = 13, ot = 14, He = 15, tn = 16, bn = 17, Yt = 18, bt = 19, En = 21, Ne = 22, Xe = 23, zt = 24, wt = 25, me = !0, K = !1, be = !1, ae = !1, _ = !1, V = !0, ze = !1, Ve = !0, Je = !0, Ze = !0, mt = !0, at = /* @__PURE__ */ new Set(), it = {}, Zt = {};
    function vr(e, t) {
      Pr(e, t), Pr(e + "Capture", t);
    }
    function Pr(e, t) {
      it[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), it[e] = t;
      {
        var a = e.toLowerCase();
        Zt[a] = e, e === "onDoubleClick" && (Zt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        at.add(t[i]);
    }
    var pn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Qn = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Nn(e) {
      try {
        return _n(e), !1;
      } catch {
        return !0;
      }
    }
    function _n(e) {
      return "" + e;
    }
    function Br(e, t) {
      if (Nn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), _n(e);
    }
    function $r(e) {
      if (Nn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), _n(e);
    }
    function Wn(e, t) {
      if (Nn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), _n(e);
    }
    function hr(e, t) {
      if (Nn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), _n(e);
    }
    function Yr(e) {
      if (Nn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), _n(e);
    }
    function mr(e) {
      if (Nn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), _n(e);
    }
    var fa = 0, nr = 1, Ir = 2, vn = 3, wr = 4, ci = 5, da = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", _e = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", et = new RegExp("^[" + ee + "][" + _e + "]*$"), Mt = {}, Ut = {};
    function Dn(e) {
      return Qn.call(Ut, e) ? !0 : Qn.call(Mt, e) ? !1 : et.test(e) ? (Ut[e] = !0, !0) : (Mt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, a) {
      return t !== null ? t.type === fa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function yr(e, t, a, i) {
      if (a !== null && a.type === fa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Pt(e, t, a, i) {
      if (t === null || typeof t > "u" || yr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case vn:
            return !t;
          case wr:
            return t === !1;
          case ci:
            return isNaN(t);
          case da:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function xr(e) {
      return Ft.hasOwnProperty(e) ? Ft[e] : null;
    }
    function At(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ir || t === vn || t === wr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ft = {}, Za = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Za.forEach(function(e) {
      Ft[e] = new At(
        e,
        fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ft[t] = new At(
        t,
        nr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ft[e] = new At(
        e,
        Ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ft[e] = new At(
        e,
        Ir,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ft[e] = new At(
        e,
        vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ft[e] = new At(
        e,
        vn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ft[e] = new At(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ft[e] = new At(
        e,
        da,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ft[e] = new At(
        e,
        ci,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _a = /[\-\:]([a-z])/g, ul = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, ul);
      Ft[t] = new At(
        t,
        nr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, ul);
      Ft[t] = new At(
        t,
        nr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, ul);
      Ft[t] = new At(
        t,
        nr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ft[e] = new At(
        e,
        nr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Il = "xlinkHref";
    Ft[Il] = new At(
      "xlinkHref",
      nr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ft[e] = new At(
        e,
        nr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Lu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Li = !1;
    function ol(e) {
      !Li && Lu.test(e) && (Li = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Br(a, t), i.sanitizeURL && ol("" + a);
        var s = i.attributeName, f = null;
        if (i.type === wr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Pt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Pt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === vn)
            return a;
          f = e.getAttribute(s);
        }
        return Pt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function fi(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Br(a, t), u === "" + a ? a : u;
      }
    }
    function va(e, t, a, i) {
      var u = xr(t);
      if (!hn(t, u, i)) {
        if (Pt(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Br(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === vn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === vn || b === wr && a === !0 ? w = "" : (Br(a, y), w = "" + a, u.sanitizeURL && ol(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var Ja = Symbol.for("react.element"), br = Symbol.for("react.portal"), ha = Symbol.for("react.fragment"), di = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), Y = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), Te = Symbol.for("react.suspense"), ft = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), tt = Symbol.for("react.scope"), zn = Symbol.for("react.debug_trace_mode"), Wt = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), gr = Symbol.for("react.cache"), vi = Symbol.for("react.tracing_marker"), _t = Symbol.iterator, Gn = "@@iterator";
    function _r(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = _t && e[_t] || e[Gn];
      return typeof t == "function" ? t : null;
    }
    var nt = Object.assign, Da = 0, sl, Mu, cl, Qr, Yo, Dr, Io;
    function Qo() {
    }
    Qo.__reactDisabledLog = !0;
    function Xs() {
      {
        if (Da === 0) {
          sl = console.log, Mu = console.info, cl = console.warn, Qr = console.error, Yo = console.group, Dr = console.groupCollapsed, Io = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Qo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Da++;
      }
    }
    function Nu() {
      {
        if (Da--, Da === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, e, {
              value: sl
            }),
            info: nt({}, e, {
              value: Mu
            }),
            warn: nt({}, e, {
              value: cl
            }),
            error: nt({}, e, {
              value: Qr
            }),
            group: nt({}, e, {
              value: Yo
            }),
            groupCollapsed: nt({}, e, {
              value: Dr
            }),
            groupEnd: nt({}, e, {
              value: Io
            })
          });
        }
        Da < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fl = F.ReactCurrentDispatcher, ei;
    function kr(e, t, a) {
      {
        if (ei === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ei = i && i[1] || "";
          }
        return `
` + ei + e;
      }
    }
    var dl = !1, pl;
    {
      var vl = typeof WeakMap == "function" ? WeakMap : Map;
      pl = new vl();
    }
    function zu(e, t) {
      if (!e || dl)
        return "";
      {
        var a = pl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      dl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = fl.current, fl.current = null, Xs();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && pl.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        dl = !1, fl.current = s, Nu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", M = w ? kr(w) : "";
      return typeof e == "function" && pl.set(e, M), M;
    }
    function Uu(e, t, a) {
      return zu(e, !0);
    }
    function Mi(e, t, a) {
      return zu(e, !1);
    }
    function Pf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return zu(e, Pf(e));
      if (typeof e == "string")
        return kr(e);
      switch (e) {
        case Te:
          return kr("Suspense");
        case ft:
          return kr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return Mi(e.render);
          case yt:
            return hi(e.type, t, a);
          case Ue: {
            var i = e, u = i._payload, s = i._init;
            try {
              return hi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Dt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return kr(e.type);
        case tn:
          return kr("Lazy");
        case ke:
          return kr("Suspense");
        case bt:
          return kr("SuspenseList");
        case ve:
        case ut:
        case He:
          return Mi(e.type);
        case We:
          return Mi(e.type.render);
        case de:
          return Uu(e.type);
        default:
          return "";
      }
    }
    function Au(e) {
      try {
        var t = "", a = e;
        do
          t += Dt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ql(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Fu(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ha:
          return "Fragment";
        case br:
          return "Portal";
        case pi:
          return "Profiler";
        case di:
          return "StrictMode";
        case Te:
          return "Suspense";
        case ft:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            var t = e;
            return Fu(t) + ".Consumer";
          case R:
            var a = e;
            return Fu(a._context) + ".Provider";
          case G:
            return Ql(e, e.render, "ForwardRef");
          case yt:
            var i = e.displayName || null;
            return i !== null ? i : gt(e.type) || "Memo";
          case Ue: {
            var u = e, s = u._payload, f = u._init;
            try {
              return gt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ju(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Hu(e) {
      return e.displayName || "Context";
    }
    function Ie(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case zt:
          return "Cache";
        case dn:
          var i = a;
          return Hu(i) + ".Consumer";
        case rt:
          var u = a;
          return Hu(u._context) + ".Provider";
        case Yt:
          return "DehydratedFragment";
        case We:
          return ju(a, a.render, "ForwardRef");
        case Tt:
          return "Fragment";
        case ue:
          return a;
        case he:
          return "Portal";
        case re:
          return "Root";
        case Be:
          return "Text";
        case tn:
          return gt(a);
        case dt:
          return a === di ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case pt:
          return "Profiler";
        case En:
          return "Scope";
        case ke:
          return "Suspense";
        case bt:
          return "SuspenseList";
        case wt:
          return "TracingMarker";
        case de:
        case ve:
        case bn:
        case ut:
        case ot:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Wl = F.ReactDebugCurrentFrame, mn = null, Wr = !1;
    function Or() {
      {
        if (mn === null)
          return null;
        var e = mn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ie(e);
      }
      return null;
    }
    function hl() {
      return mn === null ? "" : Au(mn);
    }
    function Cn() {
      Wl.getCurrentStack = null, mn = null, Wr = !1;
    }
    function jt(e) {
      Wl.getCurrentStack = e === null ? null : hl, mn = e, Wr = !1;
    }
    function Ks() {
      return mn;
    }
    function Gr(e) {
      Wr = e;
    }
    function qn(e) {
      return "" + e;
    }
    function mi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return mr(e), e;
        default:
          return "";
      }
    }
    var Zs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ni(e, t) {
      Zs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ml(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Js(e) {
      return e._valueTracker;
    }
    function ka(e) {
      e._valueTracker = null;
    }
    function yl(e) {
      var t = "";
      return e && (ml(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function zi(e) {
      var t = ml(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      mr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            mr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            mr(p), i = "" + p;
          },
          stopTracking: function() {
            ka(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Oa(e) {
      Js(e) || (e._valueTracker = zi(e));
    }
    function Vu(e) {
      if (!e)
        return !1;
      var t = Js(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = yl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function gl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Sl = !1, Gl = !1, Pu = !1, Wo = !1;
    function ti(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Ni("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Gl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), Gl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Sl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), Sl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: mi(t.value != null ? t.value : i),
        controlled: ti(t)
      };
    }
    function N(e, t) {
      var a = e, i = t.checked;
      i != null && va(a, "checked", i, !1);
    }
    function A(e, t) {
      var a = e;
      {
        var i = ti(t);
        !a._wrapperState.controlled && i && !Wo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Wo = !0), a._wrapperState.controlled && !i && !Pu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Pu = !0);
      }
      N(e, t);
      var u = mi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = qn(u)) : a.value !== qn(u) && (a.value = qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Me(a, t.type, u) : t.hasOwnProperty("defaultValue") && Me(a, t.type, mi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function q(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ae(e, t) {
      var a = e;
      A(a, t), ie(a, t);
    }
    function ie(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Br(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = xh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Vu(f), A(f, p);
          }
        }
      }
    }
    function Me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || gl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = qn(e._wrapperState.initialValue) : e.defaultValue !== qn(a) && (e.defaultValue = qn(a)));
    }
    var st = !1, xt = !1, Gt = !1;
    function Bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? J.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || xt || (xt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Gt || (Gt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !st && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), st = !0);
    }
    function qt(e, t) {
      t.value != null && e.setAttribute("value", qn(mi(t.value)));
    }
    var Jt = Array.isArray;
    function St(e) {
      return Jt(e);
    }
    var Ui;
    Ui = !1;
    function Bu() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Go = ["value", "defaultValue"];
    function Bf(e) {
      {
        Ni("select", e);
        for (var t = 0; t < Go.length; t++) {
          var a = Go[t];
          if (e[a] != null) {
            var i = St(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Bu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Bu());
          }
        }
      }
    }
    function ni(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = qn(mi(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function qo(e, t) {
      return nt({}, t, {
        value: void 0
      });
    }
    function Xo(e, t) {
      var a = e;
      Bf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ui && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ui = !0);
    }
    function $f(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ni(a, !!t.multiple, i, !1) : t.defaultValue != null && ni(a, !!t.multiple, t.defaultValue, !0);
    }
    function Bm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ni(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ni(a, !!t.multiple, t.defaultValue, !0) : ni(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function $m(e, t) {
      var a = e, i = t.value;
      i != null && ni(a, !!t.multiple, i, !1);
    }
    var Yf = !1;
    function If(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xp(e, t) {
      var a = e;
      Ni("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Yf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), Yf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (St(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: mi(i)
      };
    }
    function Kp(e, t) {
      var a = e, i = mi(t.value), u = mi(t.defaultValue);
      if (i != null) {
        var s = qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = qn(u));
    }
    function Zp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Qf(e, t) {
      Kp(e, t);
    }
    var Ai = "http://www.w3.org/1999/xhtml", Ym = "http://www.w3.org/1998/Math/MathML", Wf = "http://www.w3.org/2000/svg";
    function ec(e) {
      switch (e) {
        case "svg":
          return Wf;
        case "math":
          return Ym;
        default:
          return Ai;
      }
    }
    function Gf(e, t) {
      return e == null || e === Ai ? ec(t) : e === Wf && t === "foreignObject" ? Ai : e;
    }
    var Im = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, tc, Jp = Im(function(e, t) {
      if (e.namespaceURI === Wf && !("innerHTML" in e)) {
        tc = tc || document.createElement("div"), tc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = tc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Fi = 3, Un = 8, ri = 9, ql = 11, nc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Fi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ev = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, $u = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function tv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys($u).forEach(function(e) {
      nv.forEach(function(t) {
        $u[tv(t, e)] = $u[e];
      });
    });
    function rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !($u.hasOwnProperty(e) && $u[e]) ? t + "px" : (hr(t, e), ("" + t).trim());
    }
    var Yu = /([A-Z])/g, Qm = /^ms-/;
    function Wm(e) {
      return e.replace(Yu, "-$1").toLowerCase().replace(Qm, "-ms-");
    }
    var rv = function() {
    };
    {
      var av = /^(?:webkit|moz|o)[A-Z]/, iv = /^-ms-/, Ko = /-(.)/g, Iu = /;\s*$/, Qu = {}, Wu = {}, lv = !1, qf = !1, Xf = function(e) {
        return e.replace(Ko, function(t, a) {
          return a.toUpperCase();
        });
      }, Kf = function(e) {
        Qu.hasOwnProperty(e) && Qu[e] || (Qu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xf(e.replace(iv, "ms-"))
        ));
      }, uv = function(e) {
        Qu.hasOwnProperty(e) && Qu[e] || (Qu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ov = function(e, t) {
        Wu.hasOwnProperty(t) && Wu[t] || (Wu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Iu, "")));
      }, sv = function(e, t) {
        lv || (lv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Gm = function(e, t) {
        qf || (qf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rv = function(e, t) {
        e.indexOf("-") > -1 ? Kf(e) : av.test(e) ? uv(e) : Iu.test(t) && ov(e, t), typeof t == "number" && (isNaN(t) ? sv(e, t) : isFinite(t) || Gm(e, t));
      };
    }
    var qm = rv;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Wm(i)) + ":", t += rc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || qm(i, t[i]);
          var s = rc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Km(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function La(e) {
      var t = {};
      for (var a in e)
        for (var i = ev[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Zo(e, t) {
      {
        if (!t)
          return;
        var a = La(e), i = La(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Km(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var fv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, dv = nt({
      menuitem: !0
    }, fv), pv = "__html";
    function ac(e, t) {
      if (t) {
        if (dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(pv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ji(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ic = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, vv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ai = {}, Zf = new RegExp("^(aria)-[" + _e + "]*$"), Jo = new RegExp("^(aria)[A-Z][" + _e + "]*$");
    function Jf(e, t) {
      {
        if (Qn.call(ai, t) && ai[t])
          return !0;
        if (Jo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ai[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ai[t] = !0, !0;
        }
        if (Zf.test(t)) {
          var u = t.toLowerCase(), s = vv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ai[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ai[t] = !0, !0;
        }
      }
      return !0;
    }
    function hv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Jf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function lc(e, t) {
      ji(e, t) || hv(e, t);
    }
    var Xl = !1;
    function ed(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Xl && (Xl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var td = function() {
    };
    {
      var Xn = {}, nd = /^on./, mv = /^on[^A-Z]/, yv = new RegExp("^(aria)-[" + _e + "]*$"), gv = new RegExp("^(aria)[A-Z][" + _e + "]*$");
      td = function(e, t, a, i) {
        if (Qn.call(Xn, t) && Xn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Xn[t] = !0, !0;
          if (nd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Xn[t] = !0, !0;
        } else if (nd.test(t))
          return mv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xn[t] = !0, !0;
        if (yv.test(t) || gv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Xn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xn[t] = !0, !0;
        var v = xr(t), y = v !== null && v.type === fa;
        if (ic.hasOwnProperty(u)) {
          var g = ic[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Xn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Xn[t] = !0, !0;
        return typeof a == "boolean" && yr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Xn[t] = !0, !0) : y ? !0 : yr(t, a, v, !1) ? (Xn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === vn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Xn[t] = !0), !0);
      };
    }
    var Sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = td(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ev(e, t, a) {
      ji(e, t) || Sv(e, t, a);
    }
    var Hi = 1, es = 2, Kl = 4, Zm = Hi | es | Kl, ts = null;
    function ns(e) {
      ts !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ts = e;
    }
    function Jm() {
      ts === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ts = null;
    }
    function Cv(e) {
      return e === ts;
    }
    function uc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Fi ? t.parentNode : t;
    }
    var Xt = null, El = null, Vi = null;
    function Gu(e) {
      var t = Do(e);
      if (t) {
        if (typeof Xt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = xh(a);
          Xt(t.stateNode, t.type, i);
        }
      }
    }
    function Rv(e) {
      Xt = e;
    }
    function oc(e) {
      El ? Vi ? Vi.push(e) : Vi = [e] : El = e;
    }
    function rs() {
      return El !== null || Vi !== null;
    }
    function as() {
      if (El) {
        var e = El, t = Vi;
        if (El = null, Vi = null, Gu(e), t)
          for (var a = 0; a < t.length; a++)
            Gu(t[a]);
      }
    }
    var Zl = function(e, t) {
      return e(t);
    }, rd = function() {
    }, ad = !1;
    function ey() {
      var e = rs();
      e && (rd(), as());
    }
    function id(e, t, a) {
      if (ad)
        return e(t, a);
      ad = !0;
      try {
        return Zl(e, t, a);
      } finally {
        ad = !1, ey();
      }
    }
    function sc(e, t, a) {
      Zl = e, rd = a;
    }
    function cc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ld(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && cc(t));
        default:
          return !1;
      }
    }
    function Jl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = xh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ld(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (pn)
      try {
        var eu = {};
        Object.defineProperty(eu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", eu, eu), window.removeEventListener("test", eu, eu);
      } catch {
        is = !1;
      }
    function Tv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var ud = Tv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var od = document.createElement("react");
      ud = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          od.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, j(), a.apply(i, le), w = !1;
        }
        var xe, Rt = !1, ht = !1;
        function k(O) {
          if (xe = O.error, Rt = !0, xe === null && O.colno === 0 && O.lineno === 0 && (ht = !0), O.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), od.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), od.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && w && (Rt ? ht && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", k), !b)
          return j(), Tv.apply(this, arguments);
      };
    }
    var ty = ud, Cl = !1, ii = null, ls = !1, Rl = null, yi = {
      onError: function(e) {
        Cl = !0, ii = e;
      }
    };
    function tu(e, t, a, i, u, s, f, p, v) {
      Cl = !1, ii = null, ty.apply(yi, arguments);
    }
    function Pi(e, t, a, i, u, s, f, p, v) {
      if (tu.apply(this, arguments), Cl) {
        var y = cd();
        ls || (ls = !0, Rl = y);
      }
    }
    function sd() {
      if (ls) {
        var e = Rl;
        throw ls = !1, Rl = null, e;
      }
    }
    function ny() {
      return Cl;
    }
    function cd() {
      if (Cl) {
        var e = ii;
        return Cl = !1, ii = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ma(e) {
      return e._reactInternals;
    }
    function us(e) {
      return e._reactInternals !== void 0;
    }
    function qu(e, t) {
      e._reactInternals = t;
    }
    var Oe = (
      /*                      */
      0
    ), Tl = (
      /*                */
      1
    ), rn = (
      /*                    */
      2
    ), Ke = (
      /*                       */
      4
    ), Nt = (
      /*                */
      16
    ), Ht = (
      /*                 */
      32
    ), gi = (
      /*                     */
      64
    ), $e = (
      /*                   */
      128
    ), Rn = (
      /*            */
      256
    ), Xr = (
      /*                          */
      512
    ), Na = (
      /*                     */
      1024
    ), sn = (
      /*                      */
      2048
    ), za = (
      /*                    */
      4096
    ), wl = (
      /*                   */
      8192
    ), os = (
      /*             */
      16384
    ), fc = sn | Ke | gi | Xr | Na | os, wv = (
      /*               */
      32767
    ), ma = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), ss = (
      /* */
      131072
    ), fd = (
      /*                       */
      1048576
    ), dd = (
      /*                    */
      2097152
    ), Kr = (
      /*                 */
      4194304
    ), xl = (
      /*                */
      8388608
    ), Zr = (
      /*               */
      16777216
    ), nu = (
      /*              */
      33554432
    ), Xu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ke | Na | 0
    ), Jr = rn | Ke | Nt | Ht | Xr | za | wl, Sr = Ke | gi | Xr | wl, Ua = sn | Nt, rr = Kr | xl | dd, Bi = F.ReactCurrentOwner;
    function ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (rn | za)) !== Oe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === re ? a : null;
    }
    function pd(e) {
      if (e.tag === ke) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function dc(e) {
      return e.tag === re ? e.stateNode.containerInfo : null;
    }
    function vd(e) {
      return ya(e) === e;
    }
    function ga(e) {
      {
        var t = Bi.current;
        if (t !== null && t.tag === de) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ie(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ma(e);
      return u ? ya(u) === u : !1;
    }
    function ea(e) {
      if (ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function an(e) {
      var t = e.alternate;
      if (!t) {
        var a = ya(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ea(s), e;
            if (v === u)
              return ea(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== re)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Aa(e) {
      var t = an(e);
      return t !== null ? hd(t) : null;
    }
    function hd(e) {
      if (e.tag === ue || e.tag === Be)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xv(e) {
      var t = an(e);
      return t !== null ? pc(t) : null;
    }
    function pc(e) {
      if (e.tag === ue || e.tag === Be)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== he) {
          var a = pc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vc = Z.unstable_scheduleCallback, bv = Z.unstable_cancelCallback, hc = Z.unstable_shouldYield, _v = Z.unstable_requestPaint, yn = Z.unstable_now, md = Z.unstable_getCurrentPriorityLevel, mc = Z.unstable_ImmediatePriority, ru = Z.unstable_UserBlockingPriority, Si = Z.unstable_NormalPriority, Dv = Z.unstable_LowPriority, yc = Z.unstable_IdlePriority, Ku = Z.unstable_yieldValue, kv = Z.unstable_setDisableYieldValue, $i = null, Vn = null, te = null, Fa = !1, Sa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Je && (e = nt({}, e, {
          getLaneLabelMap: Yi,
          injectProfilingHooks: Ov
        })), $i = t.inject(e), Vn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (Vn && typeof Vn.onScheduleFiberRoot == "function")
        try {
          Vn.onScheduleFiberRoot($i, e, t);
        } catch (a) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Zu(e, t) {
      if (Vn && typeof Vn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & $e) === $e;
          if (Ze) {
            var i;
            switch (t) {
              case On:
                i = mc;
                break;
              case Qi:
                i = ru;
                break;
              case Ei:
                i = Si;
                break;
              case co:
                i = yc;
                break;
              default:
                i = Si;
                break;
            }
            Vn.onCommitFiberRoot($i, e, i, a);
          }
        } catch (u) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function ja(e) {
      if (Vn && typeof Vn.onPostCommitFiberRoot == "function")
        try {
          Vn.onPostCommitFiberRoot($i, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function au(e) {
      if (Vn && typeof Vn.onCommitFiberUnmount == "function")
        try {
          Vn.onCommitFiberUnmount($i, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function An(e) {
      if (typeof Ku == "function" && (kv(e), on(e)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode($i, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ov(e) {
      te = e;
    }
    function Yi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < vs; a++) {
          var i = ay(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function bl(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function gc() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function Ju(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function ta() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function _l(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Sc() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Lv(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ec() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function Mv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function cs() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function li(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function eo() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function iu(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function Sd(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function to() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Nv(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function Ed() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function cn(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function Cc() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function Rc() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function Cd(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function Tc(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function ds(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var Ce = (
      /*                         */
      0
    ), we = (
      /*                 */
      1
    ), Ye = (
      /*                    */
      2
    ), ct = (
      /*               */
      8
    ), Ea = (
      /*              */
      16
    ), no = Math.clz32 ? Math.clz32 : Er, ps = Math.log, ry = Math.LN2;
    function Er(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ps(t) / ry | 0) | 0;
    }
    var vs = 31, B = (
      /*                        */
      0
    ), Fn = (
      /*                          */
      0
    ), De = (
      /*                        */
      1
    ), ar = (
      /*    */
      2
    ), Ca = (
      /*             */
      4
    ), Ii = (
      /*            */
      8
    ), Ha = (
      /*                     */
      16
    ), ro = (
      /*                */
      32
    ), lu = (
      /*                       */
      4194240
    ), ao = (
      /*                        */
      64
    ), wc = (
      /*                        */
      128
    ), xc = (
      /*                        */
      256
    ), bc = (
      /*                        */
      512
    ), _c = (
      /*                        */
      1024
    ), Dc = (
      /*                        */
      2048
    ), uu = (
      /*                        */
      4096
    ), kc = (
      /*                        */
      8192
    ), io = (
      /*                        */
      16384
    ), lo = (
      /*                       */
      32768
    ), Oc = (
      /*                       */
      65536
    ), hs = (
      /*                       */
      131072
    ), Lc = (
      /*                       */
      262144
    ), Mc = (
      /*                       */
      524288
    ), Nc = (
      /*                       */
      1048576
    ), zc = (
      /*                       */
      2097152
    ), uo = (
      /*                            */
      130023424
    ), ou = (
      /*                             */
      4194304
    ), Uc = (
      /*                             */
      8388608
    ), Ac = (
      /*                             */
      16777216
    ), Rd = (
      /*                             */
      33554432
    ), Fc = (
      /*                             */
      67108864
    ), zv = ou, ms = (
      /*          */
      134217728
    ), Td = (
      /*                          */
      268435455
    ), oo = (
      /*               */
      268435456
    ), Dl = (
      /*                        */
      536870912
    ), Cr = (
      /*                   */
      1073741824
    );
    function ay(e) {
      {
        if (e & De)
          return "Sync";
        if (e & ar)
          return "InputContinuousHydration";
        if (e & Ca)
          return "InputContinuous";
        if (e & Ii)
          return "DefaultHydration";
        if (e & Ha)
          return "Default";
        if (e & ro)
          return "TransitionHydration";
        if (e & lu)
          return "Transition";
        if (e & uo)
          return "Retry";
        if (e & ms)
          return "SelectiveHydration";
        if (e & oo)
          return "IdleHydration";
        if (e & Dl)
          return "Idle";
        if (e & Cr)
          return "Offscreen";
      }
    }
    var en = -1, jc = ao, na = ou;
    function su(e) {
      switch (kn(e)) {
        case De:
          return De;
        case ar:
          return ar;
        case Ca:
          return Ca;
        case Ii:
          return Ii;
        case Ha:
          return Ha;
        case ro:
          return ro;
        case ao:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case uu:
        case kc:
        case io:
        case lo:
        case Oc:
        case hs:
        case Lc:
        case Mc:
        case Nc:
        case zc:
          return e & lu;
        case ou:
        case Uc:
        case Ac:
        case Rd:
        case Fc:
          return e & uo;
        case ms:
          return ms;
        case oo:
          return oo;
        case Dl:
          return Dl;
        case Cr:
          return Cr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function cu(e, t) {
      var a = e.pendingLanes;
      if (a === B)
        return B;
      var i = B, u = e.suspendedLanes, s = e.pingedLanes, f = a & Td;
      if (f !== B) {
        var p = f & ~u;
        if (p !== B)
          i = su(p);
        else {
          var v = f & s;
          v !== B && (i = su(v));
        }
      } else {
        var y = a & ~u;
        y !== B ? i = su(y) : s !== B && (i = su(s));
      }
      if (i === B)
        return B;
      if (t !== B && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === B) {
        var g = kn(i), b = kn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Ha && (b & lu) !== B
        )
          return t;
      }
      (i & Ca) !== B && (i |= a & Ha);
      var w = e.entangledLanes;
      if (w !== B)
        for (var M = e.entanglements, U = i & w; U > 0; ) {
          var j = Ol(U), le = 1 << j;
          i |= M[j], U &= ~le;
        }
      return i;
    }
    function Uv(e, t) {
      for (var a = e.eventTimes, i = en; t > 0; ) {
        var u = Ol(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Av(e, t) {
      switch (e) {
        case De:
        case ar:
        case Ca:
          return t + 250;
        case Ii:
        case Ha:
        case ro:
        case ao:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case uu:
        case kc:
        case io:
        case lo:
        case Oc:
        case hs:
        case Lc:
        case Mc:
        case Nc:
        case zc:
          return t + 5e3;
        case ou:
        case Uc:
        case Ac:
        case Rd:
        case Fc:
          return en;
        case ms:
        case oo:
        case Dl:
        case Cr:
          return en;
        default:
          return S("Should have found matching lanes. This is a bug in React."), en;
      }
    }
    function Fv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p, y = s[p];
        y === en ? ((v & i) === B || (v & u) !== B) && (s[p] = Av(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function wd(e) {
      return su(e.pendingLanes);
    }
    function kl(e) {
      var t = e.pendingLanes & ~Cr;
      return t !== B ? t : t & Cr ? Cr : B;
    }
    function xd(e) {
      return (e & De) !== B;
    }
    function ys(e) {
      return (e & Td) !== B;
    }
    function jv(e) {
      return (e & uo) === e;
    }
    function Hv(e) {
      var t = De | Ca | Ha;
      return (e & t) === B;
    }
    function Vv(e) {
      return (e & lu) === e;
    }
    function gs(e, t) {
      var a = ar | Ca | Ii | Ha;
      return (t & a) !== B;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== B;
    }
    function bd(e) {
      return (e & lu) !== B;
    }
    function Bv() {
      var e = jc;
      return jc <<= 1, (jc & lu) === B && (jc = ao), e;
    }
    function ra() {
      var e = na;
      return na <<= 1, (na & uo) === B && (na = ou), e;
    }
    function kn(e) {
      return e & -e;
    }
    function so(e) {
      return kn(e);
    }
    function Ol(e) {
      return 31 - no(e);
    }
    function Hc(e) {
      return Ol(e);
    }
    function aa(e, t) {
      return (e & t) !== B;
    }
    function fu(e, t) {
      return (e & t) === t;
    }
    function qe(e, t) {
      return e | t;
    }
    function Ss(e, t) {
      return e & ~t;
    }
    function Vc(e, t) {
      return e & t;
    }
    function iy(e) {
      return e;
    }
    function $v(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function Es(e) {
      for (var t = [], a = 0; a < vs; a++)
        t.push(e);
      return t;
    }
    function du(e, t, a) {
      e.pendingLanes |= t, t !== Dl && (e.suspendedLanes = B, e.pingedLanes = B);
      var i = e.eventTimes, u = Hc(t);
      i[u] = a;
    }
    function Yv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ol(i), s = 1 << u;
        a[u] = en, i &= ~s;
      }
    }
    function Pc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Bc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = B, e.pingedLanes = B, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p;
        i[p] = B, u[p] = en, s[p] = en, f &= ~v;
      }
    }
    function _d(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ol(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Iv(e, t) {
      var a = kn(t), i;
      switch (a) {
        case Ca:
          i = ar;
          break;
        case Ha:
          i = Ii;
          break;
        case ao:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case uu:
        case kc:
        case io:
        case lo:
        case Oc:
        case hs:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case ou:
        case Uc:
        case Ac:
        case Rd:
        case Fc:
          i = ro;
          break;
        case Dl:
          i = oo;
          break;
        default:
          i = Fn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Fn ? Fn : i;
    }
    function $c(e, t, a) {
      if (Sa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Hc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Dd(e, t) {
      if (Sa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Hc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Cs(e, t) {
      return null;
    }
    var On = De, Qi = Ca, Ei = Ha, co = Dl, fo = Fn;
    function Va() {
      return fo;
    }
    function Tn(e) {
      fo = e;
    }
    function Rr(e, t) {
      var a = fo;
      try {
        return fo = e, t();
      } finally {
        fo = a;
      }
    }
    function ly(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function uy(e, t) {
      return e > t ? e : t;
    }
    function po(e, t) {
      return e !== 0 && e < t;
    }
    function ir(e) {
      var t = kn(e);
      return po(On, t) ? po(Qi, t) ? ys(t) ? Ei : co : Qi : On;
    }
    function Yc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var pe;
    function vo(e) {
      pe = e;
    }
    function kd(e) {
      pe(e);
    }
    var Ic;
    function oy(e) {
      Ic = e;
    }
    var ho;
    function Qc(e) {
      ho = e;
    }
    var Wc;
    function Qv(e) {
      Wc = e;
    }
    var Od;
    function Wv(e) {
      Od = e;
    }
    var Rs = !1, mo = [], fn = null, Zn = null, Lr = null, yo = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), Jn = [], Gv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ci(e) {
      return Gv.indexOf(e) > -1;
    }
    function sy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Ld(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          fn = null;
          break;
        case "dragenter":
        case "dragleave":
          Zn = null;
          break;
        case "mouseover":
        case "mouseout":
          Lr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          yo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          go.delete(i);
          break;
        }
      }
    }
    function So(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = sy(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && Ic(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function qv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return fn = So(fn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Zn = So(Zn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Lr = So(Lr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return yo.set(y, So(yo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return go.set(b, So(go.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Md(e) {
      var t = zs(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ke) {
            var u = pd(a);
            if (u !== null) {
              e.blockedOn = u, Od(e.priority, function() {
                ho(a);
              });
              return;
            }
          } else if (i === re) {
            var s = a.stateNode;
            if (Yc(s)) {
              e.blockedOn = dc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function cy(e) {
      for (var t = Wc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Jn.length && po(t, Jn[i].priority); i++)
        ;
      Jn.splice(i, 0, a), i === 0 && Md(a);
    }
    function pu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Tr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ns(s), u.target.dispatchEvent(s), Jm();
        } else {
          var f = Do(i);
          return f !== null && Ic(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Gc(e, t, a) {
      pu(e) && a.delete(t);
    }
    function Pa() {
      Rs = !1, fn !== null && pu(fn) && (fn = null), Zn !== null && pu(Zn) && (Zn = null), Lr !== null && pu(Lr) && (Lr = null), yo.forEach(Gc), go.forEach(Gc);
    }
    function vt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Rs || (Rs = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, Pa)));
    }
    function wn(e) {
      if (mo.length > 0) {
        vt(mo[0], e);
        for (var t = 1; t < mo.length; t++) {
          var a = mo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      fn !== null && vt(fn, e), Zn !== null && vt(Zn, e), Lr !== null && vt(Lr, e);
      var i = function(p) {
        return vt(p, e);
      };
      yo.forEach(i), go.forEach(i);
      for (var u = 0; u < Jn.length; u++) {
        var s = Jn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Jn.length > 0; ) {
        var f = Jn[0];
        if (f.blockedOn !== null)
          break;
        Md(f), f.blockedOn === null && Jn.shift();
      }
    }
    var ln = F.ReactCurrentBatchConfig, Pn = !0;
    function ia(e) {
      Pn = !!e;
    }
    function Eo() {
      return Pn;
    }
    function Bn(e, t, a) {
      var i = qc(t), u;
      switch (i) {
        case On:
          u = Ts;
          break;
        case Qi:
          u = vu;
          break;
        case Ei:
        default:
          u = Co;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Ts(e, t, a, i) {
      var u = Va(), s = ln.transition;
      ln.transition = null;
      try {
        Tn(On), Co(e, t, a, i);
      } finally {
        Tn(u), ln.transition = s;
      }
    }
    function vu(e, t, a, i) {
      var u = Va(), s = ln.transition;
      ln.transition = null;
      try {
        Tn(Qi), Co(e, t, a, i);
      } finally {
        Tn(u), ln.transition = s;
      }
    }
    function Co(e, t, a, i) {
      Pn && Nd(e, t, a, i);
    }
    function Nd(e, t, a, i) {
      var u = Tr(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Ll, a), Ld(e, i);
        return;
      }
      if (qv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Ld(e, i), t & Kl && Ci(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && kd(s);
          var f = Tr(e, t, a, i);
          if (f === null && _y(e, t, i, Ll, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Ll = null;
    function Tr(e, t, a, i) {
      Ll = null;
      var u = uc(i), s = zs(u);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ke) {
            var v = pd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === re) {
            var y = f.stateNode;
            if (Yc(y))
              return dc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Ll = s, null;
    }
    function qc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return On;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Qi;
        case "message": {
          var t = md();
          switch (t) {
            case mc:
              return On;
            case ru:
              return Qi;
            case Si:
            case Dv:
              return Ei;
            case yc:
              return co;
            default:
              return Ei;
          }
        }
        default:
          return Ei;
      }
    }
    function Ro(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Wi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Xc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function zd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ba = null, To = null, $a = null;
    function Kc(e) {
      return Ba = e, To = xs(), !0;
    }
    function ws() {
      Ba = null, To = null, $a = null;
    }
    function Zc() {
      if ($a)
        return $a;
      var e, t = To, a = t.length, i, u = xs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return $a = u.slice(e, p), $a;
    }
    function xs() {
      return "value" in Ba ? Ba.value : Ba.textContent;
    }
    function hu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function er() {
      return !0;
    }
    function Gi() {
      return !1;
    }
    function gn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = er : this.isDefaultPrevented = Gi, this.isPropagationStopped = Gi, this;
      }
      return nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = er);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = er);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: er
      }), t;
    }
    var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Jc = gn($n), mu = nt({}, $n, {
      view: 0,
      detail: 0
    }), Ud = gn(mu), Ad, Ri, wo;
    function Fd(e) {
      e !== wo && (wo && e.type === "mousemove" ? (Ad = e.screenX - wo.screenX, Ri = e.screenY - wo.screenY) : (Ad = 0, Ri = 0), wo = e);
    }
    var Ti = nt({}, mu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: jd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Fd(e), Ad);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ri;
      }
    }), ef = gn(Ti), yu = nt({}, Ti, {
      dataTransfer: 0
    }), Xv = gn(yu), Kv = nt({}, mu, {
      relatedTarget: 0
    }), bs = gn(Kv), tf = nt({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), fy = gn(tf), dy = nt({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zv = gn(dy), Jv = nt({}, $n, {
      data: 0
    }), Ml = gn(Jv), py = Ml, xo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, eh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function xn(e) {
      if (e.key) {
        var t = xo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = hu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? eh[e.keyCode] || "Unidentified" : "";
    }
    var vy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function th(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = vy[e];
      return i ? !!a[i] : !1;
    }
    function jd(e) {
      return th;
    }
    var hy = nt({}, mu, {
      key: xn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: jd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? hu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? hu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), nh = gn(hy), rh = nt({}, Ti, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), ah = gn(rh), Ya = nt({}, mu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jd
    }), Hd = gn(Ya), my = nt({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Nl = gn(my), nf = nt({}, Ti, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), gu = gn(nf), rf = [9, 13, 27, 32], af = 229, _s = pn && "CompositionEvent" in window, Ds = null;
    pn && "documentMode" in document && (Ds = document.documentMode);
    var Vd = pn && "TextEvent" in window && !Ds, ih = pn && (!_s || Ds && Ds > 8 && Ds <= 11), Pd = 32, Bd = String.fromCharCode(Pd);
    function lf() {
      vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), vr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ks = !1;
    function lh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function $d(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function yy(e, t) {
      return e === "keydown" && t.keyCode === af;
    }
    function Yd(e, t) {
      switch (e) {
        case "keyup":
          return rf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== af;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function uf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Os(e) {
      return e.locale === "ko";
    }
    var zl = !1;
    function of(e, t, a, i, u) {
      var s, f;
      if (_s ? s = $d(t) : zl ? Yd(t, i) && (s = "onCompositionEnd") : yy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ih && !Os(i) && (!zl && s === "onCompositionStart" ? zl = Kc(u) : s === "onCompositionEnd" && zl && (f = Zc()));
      var p = dh(a, s);
      if (p.length > 0) {
        var v = new Ml(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = uf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function uh(e, t) {
      switch (e) {
        case "compositionend":
          return uf(t);
        case "keypress":
          var a = t.which;
          return a !== Pd ? null : (ks = !0, Bd);
        case "textInput":
          var i = t.data;
          return i === Bd && ks ? null : i;
        default:
          return null;
      }
    }
    function gy(e, t) {
      if (zl) {
        if (e === "compositionend" || !_s && Yd(e, t)) {
          var a = Zc();
          return ws(), zl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!lh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ih && !Os(t) ? null : t.data;
        default:
          return null;
      }
    }
    function sf(e, t, a, i, u) {
      var s;
      if (Vd ? s = uh(t, i) : s = gy(t, i), !s)
        return null;
      var f = dh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new py("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Sy(e, t, a, i, u, s, f) {
      of(e, t, a, i, u), sf(e, t, a, i, u);
    }
    var Ls = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function oh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ls[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function cf(e) {
      if (!pn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      vr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      oc(i);
      var u = dh(t, "onChange");
      if (u.length > 0) {
        var s = new Jc("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, uc(e)), id(m, t);
    }
    function m(e) {
      D0(e, 0);
    }
    function E(e) {
      var t = mf(e);
      if (Vu(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    pn && (z = cf("input") && (!document.documentMode || document.documentMode > 9));
    function I(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", $);
    }
    function Q() {
      l && (l.detachEvent("onpropertychange", $), l = null, o = null);
    }
    function $(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (Q(), I(t, a)) : e === "focusout" && Q();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function Ee(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ln(e, t) {
      if (e === "click")
        return E(t);
    }
    function D(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Me(e, "number", e.value);
    }
    function L(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window, v, y;
      if (c(p) ? v = T : oh(p) ? z ? v = D : (v = ye, y = se) : Ee(p) && (v = Ln), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && x(p);
    }
    function X() {
      Pr("onMouseEnter", ["mouseout", "mouseover"]), Pr("onMouseLeave", ["mouseout", "mouseover"]), Pr("onPointerEnter", ["pointerout", "pointerover"]), Pr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Re(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Cv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (zs(y) || ap(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, M;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, M = U ? zs(U) : null, M !== null) {
            var j = ya(M);
            (M !== j || M.tag !== ue && M.tag !== Be) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var le = ef, Le = "onMouseLeave", xe = "onMouseEnter", Rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = ah, Le = "onPointerLeave", xe = "onPointerEnter", Rt = "pointer");
          var ht = w == null ? g : mf(w), k = M == null ? g : mf(M), H = new le(Le, Rt + "leave", w, i, u);
          H.target = ht, H.relatedTarget = k;
          var O = null, W = zs(u);
          if (W === a) {
            var fe = new le(xe, Rt + "enter", M, i, u);
            fe.target = k, fe.relatedTarget = ht, O = fe;
          }
          DR(e, H, O, w, M);
        }
      }
    }
    function Fe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ge = typeof Object.is == "function" ? Object.is : Fe;
    function je(e, t) {
      if (ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Qn.call(t, s) || !ge(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Yn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function kt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function qi(e, t) {
      for (var a = Yn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Fi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Yn(kt(a));
      }
    }
    function Ey(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return oR(e, u, s, f, p);
    }
    function oR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e:
        for (; ; ) {
          for (var w = null; g === t && (a === 0 || g.nodeType === Fi) && (f = s + a), g === i && (u === 0 || g.nodeType === Fi) && (p = s + u), g.nodeType === Fi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
            b = g, g = w;
          for (; ; ) {
            if (g === e)
              break e;
            if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
              break;
            g = b, b = g.parentNode;
          }
          g = w;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function sR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = qi(e, f), g = qi(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function m0(e) {
      return e && e.nodeType === Fi;
    }
    function y0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : m0(e) ? !1 : m0(t) ? y0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cR(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function fR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = gl(); t instanceof e.HTMLIFrameElement; ) {
        if (fR(t))
          e = t.contentWindow;
        else
          return t;
        t = gl(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dR() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? vR(e) : null
      };
    }
    function pR(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cR(a)) {
        i !== null && Cy(a) && hR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function vR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ey(e), t || {
        start: 0,
        end: 0
      };
    }
    function hR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : sR(e, t);
    }
    var mR = pn && "documentMode" in document && document.documentMode <= 11;
    function yR() {
      vr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var ff = null, Ry = null, Id = null, Ty = !1;
    function gR(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function SR(e) {
      return e.window === e ? e.document : e.nodeType === ri ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = SR(a);
      if (!(Ty || ff == null || ff !== gl(i))) {
        var u = gR(ff);
        if (!Id || !je(Id, u)) {
          Id = u;
          var s = dh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Jc("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = ff;
          }
        }
      }
    }
    function ER(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window;
      switch (t) {
        case "focusin":
          (oh(p) || p.contentEditable === "true") && (ff = p, Ry = a, Id = null);
          break;
        case "focusout":
          ff = null, Ry = null, Id = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, S0(e, i, u);
          break;
        case "selectionchange":
          if (mR)
            break;
        case "keydown":
        case "keyup":
          S0(e, i, u);
      }
    }
    function sh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var df = {
      animationend: sh("Animation", "AnimationEnd"),
      animationiteration: sh("Animation", "AnimationIteration"),
      animationstart: sh("Animation", "AnimationStart"),
      transitionend: sh("Transition", "TransitionEnd")
    }, wy = {}, E0 = {};
    pn && (E0 = document.createElement("div").style, "AnimationEvent" in window || (delete df.animationend.animation, delete df.animationiteration.animation, delete df.animationstart.animation), "TransitionEvent" in window || delete df.transitionend.transition);
    function ch(e) {
      if (wy[e])
        return wy[e];
      if (!df[e])
        return e;
      var t = df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in E0)
          return wy[e] = t[a];
      return e;
    }
    var C0 = ch("animationend"), R0 = ch("animationiteration"), T0 = ch("animationstart"), w0 = ch("transitionend"), x0 = /* @__PURE__ */ new Map(), b0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function bo(e, t) {
      x0.set(e, t), vr(t, [e]);
    }
    function CR() {
      for (var e = 0; e < b0.length; e++) {
        var t = b0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        bo(a, "on" + i);
      }
      bo(C0, "onAnimationEnd"), bo(R0, "onAnimationIteration"), bo(T0, "onAnimationStart"), bo("dblclick", "onDoubleClick"), bo("focusin", "onFocus"), bo("focusout", "onBlur"), bo(w0, "onTransitionEnd");
    }
    function RR(e, t, a, i, u, s, f) {
      var p = x0.get(t);
      if (p !== void 0) {
        var v = Jc, y = t;
        switch (t) {
          case "keypress":
            if (hu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = nh;
            break;
          case "focusin":
            y = "focus", v = bs;
            break;
          case "focusout":
            y = "blur", v = bs;
            break;
          case "beforeblur":
          case "afterblur":
            v = bs;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = ef;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Xv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Hd;
            break;
          case C0:
          case R0:
          case T0:
            v = fy;
            break;
          case w0:
            v = Nl;
            break;
          case "scroll":
            v = Ud;
            break;
          case "wheel":
            v = gu;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ah;
            break;
        }
        var g = (s & Kl) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = bR(a, p, i.type, g, b);
          if (w.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: w
            });
          }
        }
      }
    }
    CR(), X(), n(), yR(), lf();
    function TR(e, t, a, i, u, s, f) {
      RR(e, t, a, i, u, s);
      var p = (s & Zm) === 0;
      p && (Re(e, t, a, i, u), L(e, t, a, i, u), ER(e, t, a, i, u), Sy(e, t, a, i, u));
    }
    var Qd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Qd));
    function _0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Pi(i, t, void 0, e), e.currentTarget = null;
    }
    function wR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          _0(e, M, w), i = b;
        }
    }
    function D0(e, t) {
      for (var a = (t & Kl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        wR(s, f, a);
      }
      sd();
    }
    function xR(e, t, a, i, u) {
      var s = uc(a), f = [];
      TR(f, e, i, a, s, t), D0(f, t);
    }
    function Sn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tw(t), u = kR(e);
      i.has(u) || (k0(t, e, es, a), i.add(u));
    }
    function by(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Kl), k0(a, e, i, t);
    }
    var fh = "_reactListening" + Math.random().toString(36).slice(2);
    function Wd(e) {
      if (!e[fh]) {
        e[fh] = !0, at.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === ri ? e : e.ownerDocument;
        t !== null && (t[fh] || (t[fh] = !0, by("selectionchange", !1, t)));
      }
    }
    function k0(e, t, a, i, u) {
      var s = Bn(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Xc(e, t, s, f) : Wi(e, t, s) : f !== void 0 ? zd(e, t, s, f) : Ro(e, t, s);
    }
    function O0(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & Hi) && !(t & es)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === re || v === he) {
                var y = p.stateNode.containerInfo;
                if (O0(y, f))
                  break;
                if (v === he)
                  for (var g = p.return; g !== null; ) {
                    var b = g.tag;
                    if (b === re || b === he) {
                      var w = g.stateNode.containerInfo;
                      if (O0(w, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var M = zs(y);
                  if (M === null)
                    return;
                  var U = M.tag;
                  if (U === ue || U === Be) {
                    p = s = M;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      id(function() {
        return xR(e, t, a, s);
      });
    }
    function Gd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function bR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, M = b.tag;
        if (M === ue && w !== null && (g = w, p !== null)) {
          var U = Jl(y, p);
          U != null && v.push(Gd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function dh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = Jl(u, a);
          y != null && i.unshift(Gd(u, y, v));
          var g = Jl(u, t);
          g != null && i.push(Gd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function pf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function _R(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = pf(s))
        u++;
      for (var f = 0, p = i; p; p = pf(p))
        f++;
      for (; u - f > 0; )
        a = pf(a), u--;
      for (; f - u > 0; )
        i = pf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = pf(a), i = pf(i);
      }
      return null;
    }
    function L0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ue && g !== null) {
          var w = g;
          if (u) {
            var M = Jl(p, s);
            M != null && f.unshift(Gd(p, M, w));
          } else if (!u) {
            var U = Jl(p, s);
            U != null && f.push(Gd(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function DR(e, t, a, i, u) {
      var s = i && u ? _R(i, u) : null;
      i !== null && L0(e, t, i, s, !1), u !== null && a !== null && L0(e, a, u, s, !0);
    }
    function kR(e, t) {
      return e + "__bubble";
    }
    var Ia = !1, qd = "dangerouslySetInnerHTML", ph = "suppressContentEditableWarning", _o = "suppressHydrationWarning", M0 = "autoFocus", Ms = "children", Ns = "style", vh = "__html", Dy, hh, Xd, N0, mh, z0, U0;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, hh = function(e, t) {
      lc(e, t), ed(e, t), Ev(e, t, {
        registrationNameDependencies: it,
        possibleRegistrationNames: Zt
      });
    }, z0 = pn && !document.documentMode, Xd = function(e, t, a) {
      if (!Ia) {
        var i = yh(a), u = yh(t);
        u !== i && (Ia = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, N0 = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, mh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === Ai ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OR = /\r\n?/g, LR = /\u0000|\uFFFD/g;
    function yh(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OR, `
`).replace(LR, "");
    }
    function gh(e, t, a, i) {
      var u = yh(t), s = yh(e);
      if (s !== u && (i && (Ia || (Ia = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && me))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === ri ? e : e.ownerDocument;
    }
    function MR() {
    }
    function Sh(e) {
      e.onclick = MR;
    }
    function NR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ns)
            f && Object.freeze(f), cv(t, f);
          else if (s === qd) {
            var p = f ? f[vh] : void 0;
            p != null && Jp(t, p);
          } else if (s === Ms)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && nc(t, f);
            } else
              typeof f == "number" && nc(t, "" + f);
          else
            s === ph || s === _o || s === M0 || (it.hasOwnProperty(s) ? f != null && (typeof f != "function" && mh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && va(t, s, f, u));
        }
    }
    function zR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ns ? cv(e, f) : s === qd ? Jp(e, f) : s === Ms ? nc(e, f) : va(e, s, f, i);
      }
    }
    function UR(e, t, a, i) {
      var u, s = A0(a), f, p = i;
      if (p === Ai && (p = ec(e)), p === Ai) {
        if (u = ji(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ai && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Qn.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AR(e, t) {
      return A0(t).createTextNode(e);
    }
    function FR(e, t, a, i) {
      var u = ji(t, a);
      hh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Qd.length; f++)
            Sn(Qd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          Bt(e, a), s = a;
          break;
        case "select":
          Xo(e, a), s = qo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), s = If(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ac(t, s), NR(t, e, i, s, u), t) {
        case "input":
          Oa(e), q(e, a, !1);
          break;
        case "textarea":
          Oa(e), Zp(e);
          break;
        case "option":
          qt(e, a);
          break;
        case "select":
          $f(e, a);
          break;
        default:
          typeof s.onClick == "function" && Sh(e);
          break;
      }
    }
    function jR(e, t, a, i, u) {
      hh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = qo(e, a), p = qo(e, i), s = [];
          break;
        case "textarea":
          f = If(e, a), p = If(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Sh(e);
          break;
      }
      ac(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ns) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === qd || v === Ms || v === ph || v === _o || v === M0 || (it.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], M = f?.[v];
        if (!(!p.hasOwnProperty(v) || w === M || w == null && M == null))
          if (v === Ns)
            if (w && Object.freeze(w), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && M[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === qd) {
            var U = w ? w[vh] : void 0, j = M ? M[vh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else
            v === Ms ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === ph || v === _o || (it.hasOwnProperty(v) ? (w != null && (typeof w != "function" && mh(v, w), v === "onScroll" && Sn("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Zo(g, p[Ns]), (s = s || []).push(Ns, g)), s;
    }
    function HR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && N(e, u);
      var s = ji(a, i), f = ji(a, u);
      switch (zR(e, t, s, f), a) {
        case "input":
          A(e, u);
          break;
        case "textarea":
          Kp(e, u);
          break;
        case "select":
          Bm(e, u);
          break;
      }
    }
    function VR(e) {
      {
        var t = e.toLowerCase();
        return ic.hasOwnProperty(t) && ic[t] || null;
      }
    }
    function PR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ji(t, a), hh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Qd.length; y++)
            Sn(Qd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          Bt(e, a);
          break;
        case "select":
          Xo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), Sn("invalid", e);
          break;
      }
      ac(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === Ms)
            typeof j == "string" ? e.textContent !== j && (a[_o] !== !0 && gh(e.textContent, j, s, f), M = [Ms, j]) : typeof j == "number" && e.textContent !== "" + j && (a[_o] !== !0 && gh(e.textContent, j, s, f), M = [Ms, "" + j]);
          else if (it.hasOwnProperty(U))
            j != null && (typeof j != "function" && mh(U, j), U === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Le = p && ze ? null : xr(U);
            if (a[_o] !== !0) {
              if (!(U === ph || U === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === qd) {
                  var xe = e.innerHTML, Rt = j ? j[vh] : void 0;
                  if (Rt != null) {
                    var ht = U0(e, Rt);
                    ht !== xe && Xd(U, xe, ht);
                  }
                } else if (U === Ns) {
                  if (v.delete(U), z0) {
                    var k = Xm(j);
                    le = e.getAttribute("style"), k !== le && Xd(U, le, k);
                  }
                } else if (p && !ze)
                  v.delete(U.toLowerCase()), le = fi(e, U, j), j !== le && Xd(U, le, j);
                else if (!hn(U, Le, p) && !Pt(U, j, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), le = pa(e, U, j, Le);
                  else {
                    var O = i;
                    if (O === Ai && (O = ec(t)), O === Ai)
                      v.delete(U.toLowerCase());
                    else {
                      var W = VR(U);
                      W !== null && W !== U && (H = !0, v.delete(W)), v.delete(U);
                    }
                    le = fi(e, U, j);
                  }
                  var fe = ze;
                  !fe && j !== le && !H && Xd(U, le, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && N0(v), t) {
        case "input":
          Oa(e), q(e, a, !0);
          break;
        case "textarea":
          Oa(e), Zp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Sh(e);
          break;
      }
      return M;
    }
    function BR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $R(e, t, a) {
      switch (t) {
        case "input":
          Ae(e, a);
          return;
        case "textarea":
          Qf(e, a);
          return;
        case "select":
          $m(e, a);
          return;
      }
    }
    var Kd = function() {
    }, Zd = function() {
    };
    {
      var YR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], F0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], IR = F0.concat(["button"]), QR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], j0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Zd = function(e, t) {
        var a = nt({}, e || j0), i = {
          tag: t
        };
        return F0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), IR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return QR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, GR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, H0 = {};
      Kd = function(e, t, a) {
        a = a || j0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = WR(e, u) ? null : i, f = s ? null : GR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!H0[y]) {
            H0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Eh = "suppressHydrationWarning", Ch = "$", Rh = "/$", Jd = "$?", ep = "$!", qR = "style", Ny = null, zy = null;
    function XR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ri:
        case ql: {
          t = i === ri ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Gf(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Gf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Zd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function KR(e, t, a) {
      {
        var i = e, u = Gf(i.namespace, t), s = Zd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function sD(e) {
      return e;
    }
    function ZR(e) {
      Ny = Eo(), zy = dR();
      var t = null;
      return ia(!1), t;
    }
    function JR(e) {
      pR(zy), ia(Ny), Ny = null, zy = null;
    }
    function eT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Kd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Zd(f.ancestorInfo, e);
          Kd(null, p, v);
        }
        s = f.namespace;
      }
      var y = UR(e, t, a, s);
      return rp(u, y), By(y, t), y;
    }
    function tT(e, t) {
      e.appendChild(t);
    }
    function nT(e, t, a, i, u) {
      switch (FR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function rT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Zd(f.ancestorInfo, t);
          Kd(null, p, v);
        }
      }
      return jR(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function aT(e, t, a, i) {
      {
        var u = a;
        Kd(null, e, u.ancestorInfo);
      }
      var s = AR(e, t);
      return rp(i, s), s;
    }
    function iT() {
      var e = window.event;
      return e === void 0 ? Ei : qc(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, lT = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, V0 = typeof Promise == "function" ? Promise : void 0, uT = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(e) {
      return V0.resolve(null).then(e).catch(oT);
    } : Ay;
    function oT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function cT(e, t, a, i, u, s) {
      HR(e, t, a, i, u), By(e, u);
    }
    function P0(e) {
      nc(e, "");
    }
    function fT(e, t, a) {
      e.nodeValue = a;
    }
    function dT(e, t) {
      e.appendChild(t);
    }
    function pT(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Sh(a);
    }
    function vT(e, t, a) {
      e.insertBefore(t, a);
    }
    function hT(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function mT(e, t) {
      e.removeChild(t);
    }
    function yT(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var s = u.data;
          if (s === Rh)
            if (i === 0) {
              e.removeChild(u), wn(t);
              return;
            } else
              i--;
          else
            (s === Ch || s === Jd || s === ep) && i++;
        }
        a = u;
      } while (a);
      wn(t);
    }
    function gT(e, t) {
      e.nodeType === Un ? jy(e.parentNode, t) : e.nodeType === qr && jy(e, t), wn(e);
    }
    function ST(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ET(e) {
      e.nodeValue = "";
    }
    function CT(e, t) {
      e = e;
      var a = t[qR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = rc("display", i);
    }
    function RT(e, t) {
      e.nodeValue = t;
    }
    function TT(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === ri && e.documentElement && e.removeChild(e.documentElement);
    }
    function wT(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function xT(e, t) {
      return t === "" || e.nodeType !== Fi ? null : e;
    }
    function bT(e) {
      return e.nodeType !== Un ? null : e;
    }
    function B0(e) {
      return e.data === Jd;
    }
    function Hy(e) {
      return e.data === ep;
    }
    function _T(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function DT(e, t) {
      e._reactRetry = t;
    }
    function Th(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Fi)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === Ch || a === ep || a === Jd)
            break;
          if (a === Rh)
            return null;
        }
      }
      return e;
    }
    function tp(e) {
      return Th(e.nextSibling);
    }
    function kT(e) {
      return Th(e.firstChild);
    }
    function OT(e) {
      return Th(e.firstChild);
    }
    function LT(e) {
      return Th(e.nextSibling);
    }
    function MT(e, t, a, i, u, s, f) {
      rp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & we) !== Ce;
      return PR(e, t, a, p, i, y, f);
    }
    function NT(e, t, a, i) {
      return rp(a, e), a.mode & we, BR(e, t);
    }
    function zT(e, t) {
      rp(t, e);
    }
    function UT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Rh) {
            if (a === 0)
              return tp(t);
            a--;
          } else
            (i === Ch || i === ep || i === Jd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function $0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Ch || i === ep || i === Jd) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Rh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function AT(e) {
      wn(e);
    }
    function FT(e) {
      wn(e);
    }
    function jT(e) {
      return e !== "head" && e !== "body";
    }
    function HT(e, t, a, i) {
      var u = !0;
      gh(t.nodeValue, a, i, u);
    }
    function VT(e, t, a, i, u, s) {
      if (t[Eh] !== !0) {
        var f = !0;
        gh(i.nodeValue, u, s, f);
      }
    }
    function PT(e, t) {
      t.nodeType === qr ? ky(e, t) : t.nodeType === Un || Oy(e, t);
    }
    function BT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? ky(a, t) : t.nodeType === Un || Oy(a, t));
      }
    }
    function $T(e, t, a, i, u) {
      (u || t[Eh] !== !0) && (i.nodeType === qr ? ky(a, i) : i.nodeType === Un || Oy(a, i));
    }
    function YT(e, t, a) {
      Ly(e, t);
    }
    function IT(e, t) {
      My(e, t);
    }
    function QT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function WT(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function GT(e, t, a, i, u, s) {
      (s || t[Eh] !== !0) && Ly(a, i);
    }
    function qT(e, t, a, i, u) {
      (u || t[Eh] !== !0) && My(a, i);
    }
    function XT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function KT(e) {
      Wd(e);
    }
    var vf = Math.random().toString(36).slice(2), hf = "__reactFiber$" + vf, Vy = "__reactProps$" + vf, np = "__reactContainer$" + vf, Py = "__reactEvents$" + vf, ZT = "__reactListeners$" + vf, JT = "__reactHandles$" + vf;
    function ew(e) {
      delete e[hf], delete e[Vy], delete e[Py], delete e[ZT], delete e[JT];
    }
    function rp(e, t) {
      t[hf] = e;
    }
    function wh(e, t) {
      t[np] = e;
    }
    function Y0(e) {
      e[np] = null;
    }
    function ap(e) {
      return !!e[np];
    }
    function zs(e) {
      var t = e[hf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[np] || a[hf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = $0(e); u !== null; ) {
              var s = u[hf];
              if (s)
                return s;
              u = $0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[hf] || e[np];
      return t && (t.tag === ue || t.tag === Be || t.tag === ke || t.tag === re) ? t : null;
    }
    function mf(e) {
      if (e.tag === ue || e.tag === Be)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function xh(e) {
      return e[Vy] || null;
    }
    function By(e, t) {
      e[Vy] = t;
    }
    function tw(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var I0 = {}, Q0 = F.ReactDebugCurrentFrame;
    function bh(e) {
      if (e) {
        var t = e._owner, a = hi(e.type, e._source, t ? t.type : null);
        Q0.setExtraStackFrame(a);
      } else
        Q0.setExtraStackFrame(null);
    }
    function Xi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Qn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (bh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), bh(null)), p instanceof Error && !(p.message in I0) && (I0[p.message] = !0, bh(u), S("Failed %s type: %s", a, p.message), bh(null));
          }
      }
    }
    var $y = [], _h;
    _h = [];
    var Su = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (Su < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== _h[Su] && S("Unexpected Fiber popped."), e.current = $y[Su], $y[Su] = null, _h[Su] = null, Su--;
    }
    function ua(e, t, a) {
      Su++, $y[Su] = e.current, _h[Su] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var ui = {};
    Object.freeze(ui);
    var Eu = ko(ui), Ul = ko(!1), Iy = ui;
    function yf(e, t, a) {
      return a && Al(t) ? Iy : Eu.current;
    }
    function W0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function gf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ie(e) || "Unknown";
          Xi(i, s, "context", p);
        }
        return u && W0(e, t, s), s;
      }
    }
    function Dh() {
      return Ul.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function kh(e) {
      la(Ul, e), la(Eu, e);
    }
    function Qy(e) {
      la(Ul, e), la(Eu, e);
    }
    function G0(e, t, a) {
      {
        if (Eu.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(Eu, t, e), ua(Ul, a, e);
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ie(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ie(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ie(e) || "Unknown";
          Xi(u, f, "child context", v);
        }
        return nt({}, a, f);
      }
    }
    function Oh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Iy = Eu.current, ua(Eu, a, e), ua(Ul, Ul.current, e), !0;
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = q0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, la(Ul, e), la(Eu, e), ua(Eu, u, e), ua(Ul, a, e);
        } else
          la(Ul, e), ua(Ul, a, e);
      }
    }
    function nw(e) {
      {
        if (!vd(e) || e.tag !== de)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case re:
              return t.stateNode.context;
            case de: {
              var a = t.type;
              if (Al(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Oo = 0, Lh = 1, Cu = null, Wy = !1, Gy = !1;
    function K0(e) {
      Cu === null ? Cu = [e] : Cu.push(e);
    }
    function rw(e) {
      Wy = !0, K0(e);
    }
    function Z0() {
      Wy && Lo();
    }
    function Lo() {
      if (!Gy && Cu !== null) {
        Gy = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = Cu;
          for (Tn(On); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Cu = null, Wy = !1;
        } catch (s) {
          throw Cu !== null && (Cu = Cu.slice(e + 1)), vc(mc, Lo), s;
        } finally {
          Tn(t), Gy = !1;
        }
      }
      return null;
    }
    var Sf = [], Ef = 0, Mh = null, Nh = 0, wi = [], xi = 0, Us = null, Ru = 1, Tu = "";
    function aw(e) {
      return Fs(), (e.flags & fd) !== Oe;
    }
    function iw(e) {
      return Fs(), Nh;
    }
    function lw() {
      var e = Tu, t = Ru, a = t & ~uw(t);
      return a.toString(32) + e;
    }
    function As(e, t) {
      Fs(), Sf[Ef++] = Nh, Sf[Ef++] = Mh, Mh = e, Nh = t;
    }
    function J0(e, t, a) {
      Fs(), wi[xi++] = Ru, wi[xi++] = Tu, wi[xi++] = Us, Us = e;
      var i = Ru, u = Tu, s = zh(i) - 1, f = i & ~(1 << s), p = a + 1, v = zh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, M = s - y, U = zh(t) + M, j = p << M, le = j | w, Le = b + u;
        Ru = 1 << U | le, Tu = Le;
      } else {
        var xe = p << s, Rt = xe | f, ht = u;
        Ru = 1 << v | Rt, Tu = ht;
      }
    }
    function qy(e) {
      Fs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        As(e, a), J0(e, a, i);
      }
    }
    function zh(e) {
      return 32 - no(e);
    }
    function uw(e) {
      return 1 << zh(e) - 1;
    }
    function Xy(e) {
      for (; e === Mh; )
        Mh = Sf[--Ef], Sf[Ef] = null, Nh = Sf[--Ef], Sf[Ef] = null;
      for (; e === Us; )
        Us = wi[--xi], wi[xi] = null, Tu = wi[--xi], wi[xi] = null, Ru = wi[--xi], wi[xi] = null;
    }
    function ow() {
      return Fs(), Us !== null ? {
        id: Ru,
        overflow: Tu
      } : null;
    }
    function sw(e, t) {
      Fs(), wi[xi++] = Ru, wi[xi++] = Tu, wi[xi++] = Us, Ru = t.id, Tu = t.overflow, Us = e;
    }
    function Fs() {
      Nr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Mr = null, bi = null, Ki = !1, js = !1, Mo = null;
    function cw() {
      Ki && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eE() {
      js = !0;
    }
    function fw() {
      return js;
    }
    function dw(e) {
      var t = e.stateNode.containerInfo;
      return bi = OT(t), Mr = e, Ki = !0, Mo = null, js = !1, !0;
    }
    function pw(e, t, a) {
      return bi = LT(t), Mr = e, Ki = !0, Mo = null, js = !1, a !== null && sw(e, a), !0;
    }
    function tE(e, t) {
      switch (e.tag) {
        case re: {
          PT(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & we) !== Ce;
          $T(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ke: {
          var i = e.memoizedState;
          i.dehydrated !== null && BT(i.dehydrated, t);
          break;
        }
      }
    }
    function nE(e, t) {
      tE(e, t);
      var a = y_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Nt) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (js)
          return;
        switch (e.tag) {
          case re: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, YT(a, i);
                break;
              case Be:
                var u = t.pendingProps;
                IT(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & we) !== Ce;
                GT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Be: {
                var b = t.pendingProps, w = (e.mode & we) !== Ce;
                qT(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case ke: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null)
              switch (t.tag) {
                case ue:
                  var j = t.type;
                  t.pendingProps, QT(U, j);
                  break;
                case Be:
                  var le = t.pendingProps;
                  WT(U, le);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function rE(e, t) {
      t.flags = t.flags & ~za | rn, Ky(e, t);
    }
    function aE(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = wT(t, a);
          return i !== null ? (e.stateNode = i, Mr = e, bi = kT(i), !0) : !1;
        }
        case Be: {
          var u = e.pendingProps, s = xT(t, u);
          return s !== null ? (e.stateNode = s, Mr = e, bi = null, !0) : !1;
        }
        case ke: {
          var f = bT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ow(),
              retryLane: Cr
            };
            e.memoizedState = p;
            var v = g_(f);
            return v.return = e, e.child = v, Mr = e, bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & we) !== Ce && (e.flags & $e) === Oe;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Ki) {
        var t = bi;
        if (!t) {
          Zy(e) && (Ky(Mr, e), Jy()), rE(Mr, e), Ki = !1, Mr = e;
          return;
        }
        var a = t;
        if (!aE(e, t)) {
          Zy(e) && (Ky(Mr, e), Jy()), t = tp(a);
          var i = Mr;
          if (!t || !aE(e, t)) {
            rE(Mr, e), Ki = !1, Mr = e;
            return;
          }
          nE(i, a);
        }
      }
    }
    function vw(e, t, a) {
      var i = e.stateNode, u = !js, s = MT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = NT(t, a, e);
      if (i) {
        var u = Mr;
        if (u !== null)
          switch (u.tag) {
            case re: {
              var s = u.stateNode.containerInfo, f = (u.mode & we) !== Ce;
              HT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & we) !== Ce;
              VT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      zT(a, e);
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return UT(a);
    }
    function iE(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== re && t.tag !== ke; )
        t = t.return;
      Mr = t;
    }
    function Uh(e) {
      if (e !== Mr)
        return !1;
      if (!Ki)
        return iE(e), Ki = !0, !1;
      if (e.tag !== re && (e.tag !== ue || jT(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = bi;
        if (t)
          if (Zy(e))
            lE(e), Jy();
          else
            for (; t; )
              nE(e, t), t = tp(t);
      }
      return iE(e), e.tag === ke ? bi = yw(e) : bi = Mr ? tp(e.stateNode) : null, !0;
    }
    function gw() {
      return Ki && bi !== null;
    }
    function lE(e) {
      for (var t = bi; t; )
        tE(e, t), t = tp(t);
    }
    function Cf() {
      Mr = null, bi = null, Ki = !1, js = !1;
    }
    function uE() {
      Mo !== null && (e1(Mo), Mo = null);
    }
    function Nr() {
      return Ki;
    }
    function tg(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var Sw = F.ReactCurrentBatchConfig, Ew = null;
    function Cw() {
      return Sw.transition;
    }
    var Zi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Rw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ct && (t = a), a = a.return;
        return t;
      }, Hs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, ip = [], lp = [], up = [], op = [], sp = [], cp = [], Vs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Vs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && ip.push(e), e.mode & ct && typeof t.UNSAFE_componentWillMount == "function" && lp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && up.push(e), e.mode & ct && typeof t.UNSAFE_componentWillReceiveProps == "function" && op.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && sp.push(e), e.mode & ct && typeof t.UNSAFE_componentWillUpdate == "function" && cp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        ip.length > 0 && (ip.forEach(function(w) {
          e.add(Ie(w) || "Component"), Vs.add(w.type);
        }), ip = []);
        var t = /* @__PURE__ */ new Set();
        lp.length > 0 && (lp.forEach(function(w) {
          t.add(Ie(w) || "Component"), Vs.add(w.type);
        }), lp = []);
        var a = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(w) {
          a.add(Ie(w) || "Component"), Vs.add(w.type);
        }), up = []);
        var i = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(w) {
          i.add(Ie(w) || "Component"), Vs.add(w.type);
        }), op = []);
        var u = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(w) {
          u.add(Ie(w) || "Component"), Vs.add(w.type);
        }), sp = []);
        var s = /* @__PURE__ */ new Set();
        if (cp.length > 0 && (cp.forEach(function(w) {
          s.add(Ie(w) || "Component"), Vs.add(w.type);
        }), cp = []), t.size > 0) {
          var f = Hs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Hs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Hs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Hs(e);
          lt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Hs(a);
          lt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Hs(u);
          lt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Ah = /* @__PURE__ */ new Map(), oE = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = Rw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oE.has(e.type)) {
          var i = Ah.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ah.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Ah.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ie(s) || "Component"), oE.add(s.type);
            });
            var u = Hs(i);
            try {
              jt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        ip = [], lp = [], up = [], op = [], sp = [], cp = [], Ah = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, sE = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, sE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ie(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Tw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function fp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ct || Ve) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== de) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Tw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ie(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== de)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Wn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Fh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function jh(e) {
      {
        var t = Ie(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function fE(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= Nt) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), W = H; W !== null; )
          W.key !== null ? O.set(W.key, W) : O.set(W.index, W), W = W.sibling;
        return O;
      }
      function u(k, H) {
        var O = qs(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= fd, H;
        var W = k.alternate;
        if (W !== null) {
          var fe = W.index;
          return fe < H ? (k.flags |= rn, H) : fe;
        } else
          return k.flags |= rn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= rn), k;
      }
      function p(k, H, O, W) {
        if (H === null || H.tag !== Be) {
          var fe = t0(O, k.mode, W);
          return fe.return = k, fe;
        } else {
          var oe = u(H, O);
          return oe.return = k, oe;
        }
      }
      function v(k, H, O, W) {
        var fe = O.type;
        if (fe === ha)
          return g(k, H, O.props.children, W, O.key);
        if (H !== null && (H.elementType === fe || // Keep this check inline so it only runs on the false path:
        m1(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof fe == "object" && fe !== null && fe.$$typeof === Ue && cE(fe) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = fp(k, H, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Pe = e0(O, k.mode, W);
        return Pe.ref = fp(k, H, O), Pe.return = k, Pe;
      }
      function y(k, H, O, W) {
        if (H === null || H.tag !== he || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var fe = n0(O, k.mode, W);
          return fe.return = k, fe;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, H, O, W, fe) {
        if (H === null || H.tag !== Tt) {
          var oe = $o(O, k.mode, W, fe);
          return oe.return = k, oe;
        } else {
          var Pe = u(H, O);
          return Pe.return = k, Pe;
        }
      }
      function b(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var W = t0("" + H, k.mode, O);
          return W.return = k, W;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Ja: {
              var fe = e0(H, k.mode, O);
              return fe.ref = fp(k, null, H), fe.return = k, fe;
            }
            case br: {
              var oe = n0(H, k.mode, O);
              return oe.return = k, oe;
            }
            case Ue: {
              var Pe = H._payload, Ge = H._init;
              return b(k, Ge(Pe), O);
            }
          }
          if (St(H) || _r(H)) {
            var Qt = $o(H, k.mode, O, null);
            return Qt.return = k, Qt;
          }
          Fh(k, H);
        }
        return typeof H == "function" && jh(k), null;
      }
      function w(k, H, O, W) {
        var fe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return fe !== null ? null : p(k, H, "" + O, W);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Ja:
              return O.key === fe ? v(k, H, O, W) : null;
            case br:
              return O.key === fe ? y(k, H, O, W) : null;
            case Ue: {
              var oe = O._payload, Pe = O._init;
              return w(k, H, Pe(oe), W);
            }
          }
          if (St(O) || _r(O))
            return fe !== null ? null : g(k, H, O, W, null);
          Fh(k, O);
        }
        return typeof O == "function" && jh(k), null;
      }
      function M(k, H, O, W, fe) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var oe = k.get(O) || null;
          return p(H, oe, "" + W, fe);
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case Ja: {
              var Pe = k.get(W.key === null ? O : W.key) || null;
              return v(H, Pe, W, fe);
            }
            case br: {
              var Ge = k.get(W.key === null ? O : W.key) || null;
              return y(H, Ge, W, fe);
            }
            case Ue:
              var Qt = W._payload, Ot = W._init;
              return M(k, H, O, Ot(Qt), fe);
          }
          if (St(W) || _r(W)) {
            var In = k.get(O) || null;
            return g(H, In, W, fe, null);
          }
          Fh(H, W);
        }
        return typeof W == "function" && jh(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case Ja:
            case br:
              sE(k, O);
              var W = k.key;
              if (typeof W != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(W);
                break;
              }
              if (!H.has(W)) {
                H.add(W);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", W);
              break;
            case Ue:
              var fe = k._payload, oe = k._init;
              U(oe(fe), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, W) {
        for (var fe = null, oe = 0; oe < O.length; oe++) {
          var Pe = O[oe];
          fe = U(Pe, fe, k);
        }
        for (var Ge = null, Qt = null, Ot = H, In = 0, Lt = 0, jn = null; Ot !== null && Lt < O.length; Lt++) {
          Ot.index > Lt ? (jn = Ot, Ot = null) : jn = Ot.sibling;
          var sa = w(k, Ot, O[Lt], W);
          if (sa === null) {
            Ot === null && (Ot = jn);
            break;
          }
          e && Ot && sa.alternate === null && t(k, Ot), In = s(sa, In, Lt), Qt === null ? Ge = sa : Qt.sibling = sa, Qt = sa, Ot = jn;
        }
        if (Lt === O.length) {
          if (a(k, Ot), Nr()) {
            var Vr = Lt;
            As(k, Vr);
          }
          return Ge;
        }
        if (Ot === null) {
          for (; Lt < O.length; Lt++) {
            var si = b(k, O[Lt], W);
            si !== null && (In = s(si, In, Lt), Qt === null ? Ge = si : Qt.sibling = si, Qt = si);
          }
          if (Nr()) {
            var xa = Lt;
            As(k, xa);
          }
          return Ge;
        }
        for (var ba = i(k, Ot); Lt < O.length; Lt++) {
          var ca = M(ba, k, Lt, O[Lt], W);
          ca !== null && (e && ca.alternate !== null && ba.delete(ca.key === null ? Lt : ca.key), In = s(ca, In, Lt), Qt === null ? Ge = ca : Qt.sibling = ca, Qt = ca);
        }
        if (e && ba.forEach(function(Vf) {
          return t(k, Vf);
        }), Nr()) {
          var Ou = Lt;
          As(k, Ou);
        }
        return Ge;
      }
      function le(k, H, O, W) {
        var fe = _r(O);
        if (typeof fe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === fe && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var oe = fe.call(O);
          if (oe)
            for (var Pe = null, Ge = oe.next(); !Ge.done; Ge = oe.next()) {
              var Qt = Ge.value;
              Pe = U(Qt, Pe, k);
            }
        }
        var Ot = fe.call(O);
        if (Ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, Lt = null, jn = H, sa = 0, Vr = 0, si = null, xa = Ot.next(); jn !== null && !xa.done; Vr++, xa = Ot.next()) {
          jn.index > Vr ? (si = jn, jn = null) : si = jn.sibling;
          var ba = w(k, jn, xa.value, W);
          if (ba === null) {
            jn === null && (jn = si);
            break;
          }
          e && jn && ba.alternate === null && t(k, jn), sa = s(ba, sa, Vr), Lt === null ? In = ba : Lt.sibling = ba, Lt = ba, jn = si;
        }
        if (xa.done) {
          if (a(k, jn), Nr()) {
            var ca = Vr;
            As(k, ca);
          }
          return In;
        }
        if (jn === null) {
          for (; !xa.done; Vr++, xa = Ot.next()) {
            var Ou = b(k, xa.value, W);
            Ou !== null && (sa = s(Ou, sa, Vr), Lt === null ? In = Ou : Lt.sibling = Ou, Lt = Ou);
          }
          if (Nr()) {
            var Vf = Vr;
            As(k, Vf);
          }
          return In;
        }
        for (var $p = i(k, jn); !xa.done; Vr++, xa = Ot.next()) {
          var Yl = M($p, k, Vr, xa.value, W);
          Yl !== null && (e && Yl.alternate !== null && $p.delete(Yl.key === null ? Vr : Yl.key), sa = s(Yl, sa, Vr), Lt === null ? In = Yl : Lt.sibling = Yl, Lt = Yl);
        }
        if (e && $p.forEach(function(q_) {
          return t(k, q_);
        }), Nr()) {
          var G_ = Vr;
          As(k, G_);
        }
        return In;
      }
      function Le(k, H, O, W) {
        if (H !== null && H.tag === Be) {
          a(k, H.sibling);
          var fe = u(H, O);
          return fe.return = k, fe;
        }
        a(k, H);
        var oe = t0(O, k.mode, W);
        return oe.return = k, oe;
      }
      function xe(k, H, O, W) {
        for (var fe = O.key, oe = H; oe !== null; ) {
          if (oe.key === fe) {
            var Pe = O.type;
            if (Pe === ha) {
              if (oe.tag === Tt) {
                a(k, oe.sibling);
                var Ge = u(oe, O.props.children);
                return Ge.return = k, Ge._debugSource = O._source, Ge._debugOwner = O._owner, Ge;
              }
            } else if (oe.elementType === Pe || // Keep this check inline so it only runs on the false path:
            m1(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Pe == "object" && Pe !== null && Pe.$$typeof === Ue && cE(Pe) === oe.type) {
              a(k, oe.sibling);
              var Qt = u(oe, O.props);
              return Qt.ref = fp(k, oe, O), Qt.return = k, Qt._debugSource = O._source, Qt._debugOwner = O._owner, Qt;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === ha) {
          var Ot = $o(O.props.children, k.mode, W, O.key);
          return Ot.return = k, Ot;
        } else {
          var In = e0(O, k.mode, W);
          return In.ref = fp(k, H, O), In.return = k, In;
        }
      }
      function Rt(k, H, O, W) {
        for (var fe = O.key, oe = H; oe !== null; ) {
          if (oe.key === fe)
            if (oe.tag === he && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var Pe = u(oe, O.children || []);
              return Pe.return = k, Pe;
            } else {
              a(k, oe);
              break;
            }
          else
            t(k, oe);
          oe = oe.sibling;
        }
        var Ge = n0(O, k.mode, W);
        return Ge.return = k, Ge;
      }
      function ht(k, H, O, W) {
        var fe = typeof O == "object" && O !== null && O.type === ha && O.key === null;
        if (fe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Ja:
              return f(xe(k, H, O, W));
            case br:
              return f(Rt(k, H, O, W));
            case Ue:
              var oe = O._payload, Pe = O._init;
              return ht(k, H, Pe(oe), W);
          }
          if (St(O))
            return j(k, H, O, W);
          if (_r(O))
            return le(k, H, O, W);
          Fh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, H, "" + O, W)) : (typeof O == "function" && jh(k), a(k, H));
      }
      return ht;
    }
    var Rf = fE(!0), dE = fE(!1);
    function ww(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = qs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = qs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function xw(e, t) {
      for (var a = e.child; a !== null; )
        d_(a, t), a = a.sibling;
    }
    var ug = ko(null), og;
    og = {};
    var Hh = null, Tf = null, sg = null, Vh = !1;
    function Ph() {
      Hh = null, Tf = null, sg = null, Vh = !1;
    }
    function pE() {
      Vh = !0;
    }
    function vE() {
      Vh = !1;
    }
    function hE(e, t, a) {
      ua(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      la(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (fu(i.childLanes, t) ? u !== null && !fu(u.childLanes, t) && (u.childLanes = qe(u.childLanes, t)) : (i.childLanes = qe(i.childLanes, t), u !== null && (u.childLanes = qe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function bw(e, t, a) {
      _w(e, t, a);
    }
    function _w(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === de) {
                var p = so(a), v = wu(en, p);
                v.tag = $h;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = qe(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = qe(w.lanes, a)), fg(i.return, a, e), s.lanes = qe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Yt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = qe(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = qe(U.lanes, a)), fg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function wf(e, t) {
      Hh = e, Tf = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && bp(), a.firstContext = null);
      }
    }
    function tr(e) {
      Vh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Tf === null) {
          if (Hh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Tf = a, Hh.dependencies = {
            lanes: B,
            firstContext: a
          };
        } else
          Tf = Tf.next = a;
      }
      return t;
    }
    var Ps = null;
    function dg(e) {
      Ps === null ? Ps = [e] : Ps.push(e);
    }
    function Dw() {
      if (Ps !== null) {
        for (var e = 0; e < Ps.length; e++) {
          var t = Ps[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ps = null;
      }
    }
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function kw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ow(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function Qa(e, t) {
      return Bh(e, t);
    }
    var Lw = Bh;
    function Bh(e, t) {
      e.lanes = qe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = qe(a.lanes, t)), a === null && (e.flags & (rn | za)) !== Oe && d1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = qe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = qe(a.childLanes, t) : (u.flags & (rn | za)) !== Oe && d1(e), i = u, u = u.return;
      if (i.tag === re) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, $h = 2, pg = 3, Yh = !1, vg, Ih;
    vg = !1, Ih = null;
    function hg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: B
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function SE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function wu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Ih === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), kb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Lw(e, a);
      } else
        return Ow(e, u, t, a);
    }
    function Qh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (bd(a)) {
          var s = u.lanes;
          s = Vc(s, e.pendingLanes);
          var f = qe(s, a);
          u.lanes = f, _d(e, f);
        }
      }
    }
    function mg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Mw(e, t, a, i, u, s) {
      switch (a.tag) {
        case gE: {
          var f = a.payload;
          if (typeof f == "function") {
            pE();
            var p = f.call(s, i, u);
            {
              if (e.mode & ct) {
                An(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  An(!1);
                }
              }
              vE();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~Kn | $e;
        case yE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pE(), y = v.call(s, i, u);
            {
              if (e.mode & ct) {
                An(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  An(!1);
                }
              }
              vE();
            }
          } else
            y = v;
          return y == null ? i : nt({}, i, y);
        }
        case $h:
          return Yh = !0, i;
      }
      return i;
    }
    function Wh(e, t, a, i) {
      var u = e.updateQueue;
      Yh = !1, Ih = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, U = B, j = null, le = null, Le = null, xe = s;
        do {
          var Rt = xe.lane, ht = xe.eventTime;
          if (fu(i, Rt)) {
            if (Le !== null) {
              var H = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                tag: xe.tag,
                payload: xe.payload,
                callback: xe.callback,
                next: null
              };
              Le = Le.next = H;
            }
            M = Mw(e, u, xe, M, t, a);
            var O = xe.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            xe.lane !== Fn) {
              e.flags |= gi;
              var W = u.effects;
              W === null ? u.effects = [xe] : W.push(xe);
            }
          } else {
            var k = {
              eventTime: ht,
              lane: Rt,
              tag: xe.tag,
              payload: xe.payload,
              callback: xe.callback,
              next: null
            };
            Le === null ? (le = Le = k, j = M) : Le = Le.next = k, U = qe(U, Rt);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var fe = p, oe = fe.next;
            fe.next = null, xe = oe, u.lastBaseUpdate = fe, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (j = M), u.baseState = j, u.firstBaseUpdate = le, u.lastBaseUpdate = Le;
        var Pe = u.shared.interleaved;
        if (Pe !== null) {
          var Ge = Pe;
          do
            U = qe(U, Ge.lane), Ge = Ge.next;
          while (Ge !== Pe);
        } else
          s === null && (u.shared.lanes = B);
        jp(U), e.lanes = U, e.memoizedState = M;
      }
      Ih = null;
    }
    function Nw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      Yh = !1;
    }
    function Gh() {
      return Yh;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Nw(f, a));
        }
    }
    var dp = {}, zo = ko(dp), pp = ko(dp), qh = ko(dp);
    function Xh(e) {
      if (e === dp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RE() {
      var e = Xh(qh.current);
      return e;
    }
    function yg(e, t) {
      ua(qh, t, e), ua(pp, e, e), ua(zo, dp, e);
      var a = XR(t);
      la(zo, e), ua(zo, a, e);
    }
    function xf(e) {
      la(zo, e), la(pp, e), la(qh, e);
    }
    function gg() {
      var e = Xh(zo.current);
      return e;
    }
    function TE(e) {
      Xh(qh.current);
      var t = Xh(zo.current), a = KR(t, e.type);
      t !== a && (ua(pp, e, e), ua(zo, a, e));
    }
    function Sg(e) {
      pp.current === e && (la(zo, e), la(pp, e));
    }
    var zw = 0, wE = 1, xE = 1, vp = 2, Ji = ko(zw);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function bf(e) {
      return e & wE;
    }
    function Cg(e, t) {
      return e & wE | t;
    }
    function Uw(e, t) {
      return e | t;
    }
    function Uo(e, t) {
      ua(Ji, t, e);
    }
    function _f(e) {
      la(Ji, e);
    }
    function Aw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Kh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ke) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === bt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & $e) !== Oe;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Wa = (
      /*   */
      0
    ), lr = (
      /* */
      1
    ), Fl = (
      /*  */
      2
    ), ur = (
      /*    */
      4
    ), zr = (
      /*   */
      8
    ), Rg = [];
    function Tg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function Fw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = F.ReactCurrentDispatcher, hp = F.ReactCurrentBatchConfig, wg, Df;
    wg = /* @__PURE__ */ new Set();
    var Bs = B, It = null, or = null, sr = null, Zh = !1, mp = !1, yp = 0, jw = 0, Hw = 25, P = null, _i = null, Ao = -1, xg = !1;
    function Vt() {
      {
        var e = P;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function ne() {
      {
        var e = P;
        _i !== null && (Ao++, _i[Ao] !== e && Vw(e));
      }
    }
    function kf(e) {
      e != null && !St(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Vw(e) {
      {
        var t = Ie(It);
        if (!wg.has(t) && (wg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ao; u++) {
            for (var s = _i[u], f = u === Ao ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function oa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function bg(e, t) {
      if (xg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ge(e[a], t[a]))
          return !1;
      return !0;
    }
    function Of(e, t, a, i, u, s) {
      Bs = s, It = t, _i = e !== null ? e._debugHookTypes : null, Ao = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = B, e !== null && e.memoizedState !== null ? ce.current = WE : _i !== null ? ce.current = QE : ce.current = IE;
      var f = a(i, u);
      if (mp) {
        var p = 0;
        do {
          if (mp = !1, yp = 0, p >= Hw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, or = null, sr = null, t.updateQueue = null, Ao = -1, ce.current = GE, f = a(i, u);
        } while (mp);
      }
      ce.current = fm, t._debugHookTypes = _i;
      var v = or !== null && or.next !== null;
      if (Bs = B, It = null, or = null, sr = null, P = null, _i = null, Ao = -1, e !== null && (e.flags & rr) !== (t.flags & rr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & we) !== Ce && S("Internal React error: Expected static flag was missing. Please notify the React team."), Zh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Lf() {
      var e = yp !== 0;
      return yp = 0, e;
    }
    function bE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ea) !== Ce ? t.flags &= ~(nu | Zr | sn | Ke) : t.flags &= ~(sn | Ke), e.lanes = Ss(e.lanes, a);
    }
    function _E() {
      if (ce.current = fm, Zh) {
        for (var e = It.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Zh = !1;
      }
      Bs = B, It = null, or = null, sr = null, _i = null, Ao = -1, P = null, VE = !1, mp = !1, yp = 0;
    }
    function jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return sr === null ? It.memoizedState = sr = e : sr = sr.next = e, sr;
    }
    function Di() {
      var e;
      if (or === null) {
        var t = It.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = or.next;
      var a;
      if (sr === null ? a = It.memoizedState : a = sr.next, a !== null)
        sr = a, a = sr.next, or = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        or = e;
        var i = {
          memoizedState: or.memoizedState,
          baseState: or.baseState,
          baseQueue: or.baseQueue,
          queue: or.queue,
          next: null
        };
        sr === null ? It.memoizedState = sr = i : sr = sr.next = i;
      }
      return sr;
    }
    function DE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Dg(e, t, a) {
      var i = jl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: B,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Yw.bind(null, It, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = or, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, M = null, U = null, j = g;
        do {
          var le = j.lane;
          if (fu(Bs, le)) {
            if (U !== null) {
              var xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = xe;
            }
            if (j.hasEagerState)
              b = j.eagerState;
            else {
              var Rt = j.action;
              b = e(b, Rt);
            }
          } else {
            var Le = {
              lane: le,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (M = U = Le, w = b) : U = U.next = Le, It.lanes = qe(It.lanes, le), jp(le);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = b : U.next = M, ge(b, i.memoizedState) || bp(), i.memoizedState = b, i.baseState = w, i.baseQueue = U, u.lastRenderedState = b;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var k = ht;
        do {
          var H = k.lane;
          It.lanes = qe(It.lanes, H), jp(H), k = k.next;
        } while (k !== ht);
      } else
        f === null && (u.lanes = B);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Og(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        ge(p, i.memoizedState) || bp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function cD(e, t, a) {
    }
    function fD(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = It, u = jl(), s, f = Nr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Df || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Df = !0);
      } else {
        if (s = t(), !Df) {
          var p = t();
          ge(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Df = !0);
        }
        var v = Om();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        gs(v, Bs) || kE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, rm(LE.bind(null, i, y, e), [e]), i.flags |= sn, gp(lr | zr, OE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Jh(e, t, a) {
      var i = It, u = Di(), s = t();
      if (!Df) {
        var f = t();
        ge(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Df = !0);
      }
      var p = u.memoizedState, v = !ge(p, s);
      v && (u.memoizedState = s, bp());
      var y = u.queue;
      if (Ep(LE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      sr !== null && sr.memoizedState.tag & lr) {
        i.flags |= sn, gp(lr | zr, OE.bind(null, i, y, s, t), void 0, null);
        var g = Om();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        gs(g, Bs) || kE(i, t, s);
      }
      return s;
    }
    function kE(e, t, a) {
      e.flags |= os;
      var i = {
        getSnapshot: t,
        value: a
      }, u = It.updateQueue;
      if (u === null)
        u = DE(), It.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ME(t) && NE(e);
    }
    function LE(e, t, a) {
      var i = function() {
        ME(t) && NE(e);
      };
      return a(i);
    }
    function ME(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ge(a, i);
      } catch {
        return !0;
      }
    }
    function NE(e) {
      var t = Qa(e, De);
      t !== null && pr(t, e, De, en);
    }
    function em(e) {
      var t = jl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: B,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Iw.bind(null, It, a);
      return [t.memoizedState, i];
    }
    function Mg(e) {
      return kg(_g);
    }
    function Ng(e) {
      return Og(_g);
    }
    function gp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = It.updateQueue;
      if (s === null)
        s = DE(), It.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function zg(e) {
      var t = jl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function tm(e) {
      var t = Di();
      return t.memoizedState;
    }
    function Sp(e, t, a, i) {
      var u = jl(), s = i === void 0 ? null : i;
      It.flags |= e, u.memoizedState = gp(lr | t, a, void 0, s);
    }
    function nm(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (or !== null) {
        var p = or.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = gp(t, a, f, s);
            return;
          }
        }
      }
      It.flags |= e, u.memoizedState = gp(lr | t, a, f, s);
    }
    function rm(e, t) {
      return (It.mode & Ea) !== Ce ? Sp(nu | sn | xl, zr, e, t) : Sp(sn | xl, zr, e, t);
    }
    function Ep(e, t) {
      return nm(sn, zr, e, t);
    }
    function Ug(e, t) {
      return Sp(Ke, Fl, e, t);
    }
    function am(e, t) {
      return nm(Ke, Fl, e, t);
    }
    function Ag(e, t) {
      var a = Ke;
      return a |= Kr, (It.mode & Ea) !== Ce && (a |= Zr), Sp(a, ur, e, t);
    }
    function im(e, t) {
      return nm(Ke, ur, e, t);
    }
    function zE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Fg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ke;
      return u |= Kr, (It.mode & Ea) !== Ce && (u |= Zr), Sp(u, ur, zE.bind(null, t, e), i);
    }
    function lm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return nm(Ke, ur, zE.bind(null, t, e), i);
    }
    function Pw(e, t) {
    }
    var um = Pw;
    function jg(e, t) {
      var a = jl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function om(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = jl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function sm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Vg(e) {
      var t = jl();
      return t.memoizedState = e, e;
    }
    function UE(e) {
      var t = Di(), a = or, i = a.memoizedState;
      return FE(t, i, e);
    }
    function AE(e) {
      var t = Di();
      if (or === null)
        return t.memoizedState = e, e;
      var a = or.memoizedState;
      return FE(t, a, e);
    }
    function FE(e, t, a) {
      var i = !Hv(Bs);
      if (i) {
        if (!ge(a, t)) {
          var u = Bv();
          It.lanes = qe(It.lanes, u), jp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, bp()), e.memoizedState = a, a;
    }
    function Bw(e, t, a) {
      var i = Va();
      Tn(ly(i, Qi)), e(!0);
      var u = hp.transition;
      hp.transition = {};
      var s = hp.transition;
      hp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Tn(i), hp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = em(!1), t = e[0], a = e[1], i = Bw.bind(null, a), u = jl();
      return u.memoizedState = i, [t, i];
    }
    function jE() {
      var e = Mg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function HE() {
      var e = Ng(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var VE = !1;
    function $w() {
      return VE;
    }
    function Bg() {
      var e = jl(), t = Om(), a = t.identifierPrefix, i;
      if (Nr()) {
        var u = lw();
        i = ":" + a + "R" + u;
        var s = yp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = jw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function cm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function Yw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        BE(t, u);
      else {
        var s = mE(e, t, u, i);
        if (s !== null) {
          var f = wa();
          pr(s, e, i, f), $E(s, t, i);
        }
      }
      YE(e, i);
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        BE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === B && (s === null || s.lanes === B)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = el;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ge(y, v)) {
                kw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = mE(e, t, u, i);
        if (g !== null) {
          var b = wa();
          pr(g, e, i, b), $E(g, t, i);
        }
      }
      YE(e, i);
    }
    function PE(e) {
      var t = e.alternate;
      return e === It || t !== null && t === It;
    }
    function BE(e, t) {
      mp = Zh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function $E(e, t, a) {
      if (bd(a)) {
        var i = t.lanes;
        i = Vc(i, e.pendingLanes);
        var u = qe(i, a);
        t.lanes = u, _d(e, u);
      }
    }
    function YE(e, t, a) {
      ds(e, t);
    }
    var fm = {
      readContext: tr,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: K
    }, IE = null, QE = null, WE = null, GE = null, Hl = null, el = null, dm = null;
    {
      var $g = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Vt(), kf(t), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Vt(), kf(t), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Vt(), kf(a), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Vt(), kf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Vt(), kf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Vt(), kf(t);
          var a = ce.current;
          ce.current = Hl;
          try {
            return Hg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Vt();
          var i = ce.current;
          ce.current = Hl;
          try {
            return Dg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Vt(), zg(e);
        },
        useState: function(e) {
          P = "useState", Vt();
          var t = ce.current;
          ce.current = Hl;
          try {
            return em(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Vt(), Vg(e);
        },
        useTransition: function() {
          return P = "useTransition", Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Vt(), Lg(e, t, a);
        },
        useId: function() {
          return P = "useId", Vt(), Bg();
        },
        unstable_isNewReconciler: K
      }, QE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), Ag(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = ce.current;
          ce.current = Hl;
          try {
            return Hg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = ce.current;
          ce.current = Hl;
          try {
            return Dg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), zg(e);
        },
        useState: function(e) {
          P = "useState", ne();
          var t = ce.current;
          ce.current = Hl;
          try {
            return em(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), Vg(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), Lg(e, t, a);
        },
        useId: function() {
          return P = "useId", ne(), Bg();
        },
        unstable_isNewReconciler: K
      }, WE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), om(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), Ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), im(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = ce.current;
          ce.current = el;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = ce.current;
          ce.current = el;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), tm();
        },
        useState: function(e) {
          P = "useState", ne();
          var t = ce.current;
          ce.current = el;
          try {
            return Mg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), UE(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), jE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), Jh(e, t);
        },
        useId: function() {
          return P = "useId", ne(), cm();
        },
        unstable_isNewReconciler: K
      }, GE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ne(), om(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ne(), Ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ne(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ne(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ne(), im(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ne();
          var a = ce.current;
          ce.current = dm;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ne();
          var i = ce.current;
          ce.current = dm;
          try {
            return Og(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ne(), tm();
        },
        useState: function(e) {
          P = "useState", ne();
          var t = ce.current;
          ce.current = dm;
          try {
            return Ng(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ne(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ne(), AE(e);
        },
        useTransition: function() {
          return P = "useTransition", ne(), HE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ne(), Jh(e, t);
        },
        useId: function() {
          return P = "useId", ne(), cm();
        },
        unstable_isNewReconciler: K
      }, Hl = {
        readContext: function(e) {
          return $g(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Qe(), Vt(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Qe(), Vt(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Qe(), Vt(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Qe(), Vt(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Qe(), Vt(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Qe(), Vt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Qe(), Vt();
          var a = ce.current;
          ce.current = Hl;
          try {
            return Hg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Qe(), Vt();
          var i = ce.current;
          ce.current = Hl;
          try {
            return Dg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Qe(), Vt(), zg(e);
        },
        useState: function(e) {
          P = "useState", Qe(), Vt();
          var t = ce.current;
          ce.current = Hl;
          try {
            return em(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Qe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Qe(), Vt(), Vg(e);
        },
        useTransition: function() {
          return P = "useTransition", Qe(), Vt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Qe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Qe(), Vt(), Lg(e, t, a);
        },
        useId: function() {
          return P = "useId", Qe(), Vt(), Bg();
        },
        unstable_isNewReconciler: K
      }, el = {
        readContext: function(e) {
          return $g(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Qe(), ne(), om(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Qe(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Qe(), ne(), Ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Qe(), ne(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Qe(), ne(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Qe(), ne(), im(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Qe(), ne();
          var a = ce.current;
          ce.current = el;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Qe(), ne();
          var i = ce.current;
          ce.current = el;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Qe(), ne(), tm();
        },
        useState: function(e) {
          P = "useState", Qe(), ne();
          var t = ce.current;
          ce.current = el;
          try {
            return Mg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Qe(), ne(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Qe(), ne(), UE(e);
        },
        useTransition: function() {
          return P = "useTransition", Qe(), ne(), jE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Qe(), ne(), Jh(e, t);
        },
        useId: function() {
          return P = "useId", Qe(), ne(), cm();
        },
        unstable_isNewReconciler: K
      }, dm = {
        readContext: function(e) {
          return $g(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Qe(), ne(), om(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Qe(), ne(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Qe(), ne(), Ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Qe(), ne(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Qe(), ne(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Qe(), ne(), im(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Qe(), ne();
          var a = ce.current;
          ce.current = el;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Qe(), ne();
          var i = ce.current;
          ce.current = el;
          try {
            return Og(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Qe(), ne(), tm();
        },
        useState: function(e) {
          P = "useState", Qe(), ne();
          var t = ce.current;
          ce.current = el;
          try {
            return Ng(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Qe(), ne(), um();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Qe(), ne(), AE(e);
        },
        useTransition: function() {
          return P = "useTransition", Qe(), ne(), HE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Qe(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Qe(), ne(), Jh(e, t);
        },
        useId: function() {
          return P = "useId", Qe(), ne(), cm();
        },
        unstable_isNewReconciler: K
      };
    }
    var Fo = Z.unstable_now, qE = 0, pm = -1, Cp = -1, vm = -1, Yg = !1, hm = !1;
    function XE() {
      return Yg;
    }
    function Qw() {
      hm = !0;
    }
    function Ww() {
      Yg = !1, hm = !1;
    }
    function Gw() {
      Yg = hm, hm = !1;
    }
    function KE() {
      return qE;
    }
    function ZE() {
      qE = Fo();
    }
    function Ig(e) {
      Cp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function JE(e) {
      Cp = -1;
    }
    function mm(e, t) {
      if (Cp >= 0) {
        var a = Fo() - Cp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Cp = -1;
      }
    }
    function Vl(e) {
      if (pm >= 0) {
        var t = Fo() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case pt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Qg(e) {
      if (vm >= 0) {
        var t = Fo() - vm;
        vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case pt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Pl() {
      pm = Fo();
    }
    function Wg() {
      vm = Fo();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function tl(e, t) {
      if (e && e.defaultProps) {
        var a = nt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Xg, Kg, Zg, Jg, eS, eC, ym, tS, nS, rS, Rp;
    {
      Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), Rp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      ym = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = gt(e) || "Component";
          eS.has(a) || (eS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & ct) {
          An(!0);
          try {
            s = a(i, u);
          } finally {
            An(!1);
          }
        }
        eC(t, s);
      }
      var f = s == null ? u : nt({}, u, s);
      if (e.memoizedState = f, e.lanes === B) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: ga,
      enqueueSetState: function(e, t, a) {
        var i = Ma(e), u = wa(), s = Po(i), f = wu(u, s);
        f.payload = t, a != null && (ym(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (pr(p, i, s, u), Qh(p, i, s)), ds(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ma(e), u = wa(), s = Po(i), f = wu(u, s);
        f.tag = gE, f.payload = t, a != null && (ym(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (pr(p, i, s, u), Qh(p, i, s)), ds(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ma(e), i = wa(), u = Po(a), s = wu(i, u);
        s.tag = $h, t != null && (ym(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (pr(f, a, u, i), Qh(f, a, u)), Tc(a, u);
      }
    };
    function nC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ct) {
            An(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              An(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", gt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !je(a, i) || !je(u, s) : !0;
    }
    function qw(e, t, a) {
      var i = e.stateNode;
      {
        var u = gt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Rp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ct) === Ce && (Rp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Rp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ct) === Ce && (Rp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Zg.has(t) && (Zg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", gt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || St(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rC(e, t) {
      t.updater = iS, e.stateNode = t, qu(t, e), t._reactInternalInstance = qg;
    }
    function aC(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Y && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", gt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = yf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? gf(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & ct) {
        An(!0);
        try {
          g = new t(a, s);
        } finally {
          An(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      rC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = gt(t) || "Component";
          Kg.has(w) || (Kg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), M !== null || U !== null || j !== null) {
            var le = gt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(le) || (Jg.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Le, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && W0(e, u, s), g;
    }
    function Xw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          Xg.has(s) || (Xg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      qw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = yf(e, t, !0);
        u.context = gf(e, f);
      }
      {
        if (u.state === a) {
          var p = gt(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ct && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xw(e, u), Wh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ke;
        y |= Kr, (e.mode & Ea) !== Ce && (y |= Zr), e.flags |= y;
      }
    }
    function Kw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = yf(e, t, !0);
        v = gf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && iC(e, u, a, v), EE();
      var w = e.memoizedState, M = u.state = w;
      if (Wh(e, a, u, i), M = e.memoizedState, s === a && w === M && !Dh() && !Gh()) {
        if (typeof u.componentDidMount == "function") {
          var U = Ke;
          U |= Kr, (e.mode & Ea) !== Ce && (U |= Zr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), M = e.memoizedState);
      var j = Gh() || nC(e, t, s, a, w, M, v);
      if (j) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Ke;
          le |= Kr, (e.mode & Ea) !== Ce && (le |= Zr), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Ke;
          Le |= Kr, (e.mode & Ea) !== Ce && (Le |= Zr), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, j;
    }
    function Zw(e, t, a, i, u) {
      var s = t.stateNode;
      SE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : tl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ui;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var w = yf(t, a, !0);
        b = gf(t, w);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && iC(t, s, i, b), EE();
      var j = t.memoizedState, le = s.state = j;
      if (Wh(t, i, s, u), le = t.memoizedState, f === v && j === le && !Dh() && !Gh() && !be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), !1;
      typeof M == "function" && (aS(t, a, M, i), le = t.memoizedState);
      var Le = Gh() || nC(t, a, p, i, j, le, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      be;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Na)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = b, Le;
    }
    function $s(e, t) {
      return {
        value: e,
        source: t,
        stack: Au(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Jw(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = Jw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === de)
            return;
          console.error(i);
        }
        var p = u ? Ie(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === re)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ie(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var ex = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = wu(en, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Qb(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = wu(en, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          y1(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        y1(e), oS(e, t), typeof u != "function" && Yb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (aa(e.lanes, De) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ex(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Wb.bind(null, e, t, a);
        Sa && Hp(e, a), t.then(s, s);
      }
    }
    function tx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nx(e, t) {
      var a = e.tag;
      if ((e.mode & we) === Ce && (a === ve || a === We || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === ke && Aw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & we) === Ce) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= $e, a.flags |= ss, a.flags &= ~(fc | ma), a.tag === de) {
            var s = a.alternate;
            if (s === null)
              a.tag = bn;
            else {
              var f = wu(en, De);
              f.tag = $h, No(a, f, De);
            }
          }
          a.lanes = qe(a.lanes, De);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function rx(e, t, a, i, u) {
      if (a.flags |= ma, Sa && Hp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nx(a), Nr() && a.mode & we && eE();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~Rn, sC(f, t, a, e, u), f.mode & we && uC(e, s, u), tx(f, e, s);
          return;
        } else {
          if (!xd(u)) {
            uC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Nr() && a.mode & we) {
        eE();
        var v = oC(t);
        if (v !== null) {
          (v.flags & Kn) === Oe && (v.flags |= Rn), sC(v, t, a, e, u), tg($s(i, a));
          return;
        }
      }
      i = $s(i, a), Ab(i);
      var y = t;
      do {
        switch (y.tag) {
          case re: {
            var g = i;
            y.flags |= Kn;
            var b = so(u);
            y.lanes = qe(y.lanes, b);
            var w = lC(y, g, b);
            mg(y, w);
            return;
          }
          case de:
            var M = i, U = y.type, j = y.stateNode;
            if ((y.flags & $e) === Oe && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !o1(j))) {
              y.flags |= Kn;
              var le = so(u);
              y.lanes = qe(y.lanes, le);
              var Le = sS(y, M, le);
              mg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ax() {
      return null;
    }
    var Tp = F.ReactCurrentOwner, nl = !1, cS, wp, fS, dS, pS, Ys, vS, gm, xp;
    cS = {}, wp = {}, fS = {}, dS = {}, pS = {}, Ys = !1, vS = {}, gm = {}, xp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = dE(t, null, a, i) : t.child = Rf(t, e.child, a, i);
    }
    function ix(e, t, a, i) {
      t.child = Rf(t, e.child, null, i), t.child = Rf(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      wf(t, u), Ju(t);
      {
        if (Tp.current = t, Gr(!0), v = Of(e, t, f, i, p, u), y = Lf(), t.mode & ct) {
          An(!0);
          try {
            v = Of(e, t, f, i, p, u), y = Lf();
          } finally {
            An(!1);
          }
        }
        Gr(!1);
      }
      return ta(), e !== null && !nl ? (bE(e, t, u), xu(e, t, u)) : (Nr() && y && qy(t), t.flags |= Tl, Ra(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (c_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Hf(s), t.tag = He, t.type = f, yS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xi(
            p,
            i,
            // Resolved props
            "prop",
            gt(s)
          ), a.defaultProps !== void 0) {
            var v = gt(s) || "Unknown";
            xp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), xp[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && Xi(
          b,
          i,
          // Resolved props
          "prop",
          gt(g)
        );
      }
      var w = e.child, M = TS(e, u);
      if (!M) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : je, j(U, i) && e.ref === t.ref)
          return xu(e, t, u);
      }
      t.flags |= Tl;
      var le = qs(w, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ue) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Xi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            gt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (je(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (nl = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & ss) !== Oe && (nl = !0);
          else
            return t.lanes = e.lanes, xu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ae)
        if ((t.mode & we) === Ce) {
          var f = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Lm(t, a);
        } else if (aa(a, Cr)) {
          var b = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          Lm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = qe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Cr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Lm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = qe(s.baseLanes, a), t.memoizedState = null) : M = a, Lm(t, M);
      }
      return Ra(e, t, u, a), t.child;
    }
    function lx(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function ux(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function ox(e, t, a) {
      {
        t.flags |= Ke;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function vC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= dd);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f;
      {
        var p = yf(t, a, !0);
        f = gf(t, p);
      }
      var v, y;
      wf(t, u), Ju(t);
      {
        if (Tp.current = t, Gr(!0), v = Of(e, t, a, i, f, u), y = Lf(), t.mode & ct) {
          An(!0);
          try {
            v = Of(e, t, a, i, f, u), y = Lf();
          } finally {
            An(!1);
          }
        }
        Gr(!1);
      }
      return ta(), e !== null && !nl ? (bE(e, t, u), xu(e, t, u)) : (Nr() && y && qy(t), t.flags |= Tl, Ra(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (x_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= $e, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = so(u);
            t.lanes = qe(t.lanes, g);
            var b = sS(t, $s(y, t), g);
            mg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Xi(
            w,
            i,
            // Resolved props
            "prop",
            gt(a)
          );
        }
      }
      var M;
      Al(a) ? (M = !0, Oh(t)) : M = !1, wf(t, u);
      var U = t.stateNode, j;
      U === null ? (Em(e, t), aC(t, a, i), lS(t, a, i, u), j = !0) : e === null ? j = Kw(t, a, i, u) : j = Zw(e, t, a, i, u);
      var le = mS(e, t, a, j, M, u);
      {
        var Le = t.stateNode;
        j && Le.props !== i && (Ys || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), Ys = !0);
      }
      return le;
    }
    function mS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & $e) !== Oe;
      if (!i && !f)
        return u && X0(t, a, !1), xu(e, t, s);
      var p = t.stateNode;
      Tp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, JE();
      else {
        Ju(t);
        {
          if (Gr(!0), v = p.render(), t.mode & ct) {
            An(!0);
            try {
              p.render();
            } finally {
              An(!1);
            }
          }
          Gr(!1);
        }
        ta();
      }
      return t.flags |= Tl, e !== null && f ? ix(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && X0(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), yg(e, t.containerInfo);
    }
    function sx(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SE(e, t), Wh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rn) {
          var g = $s(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yC(e, t, p, a, g);
        } else if (p !== s) {
          var b = $s(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, b);
        } else {
          dw(t);
          var w = dE(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & ~rn | za, M = M.sibling;
        }
      } else {
        if (Cf(), p === s)
          return xu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, u) {
      return Cf(), tg(u), t.flags |= Rn, Ra(e, t, a, i), t.child;
    }
    function cx(e, t, a) {
      TE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Ht), vC(e, t), Ra(e, t, f, a), t.child;
    }
    function fx(e, t) {
      return e === null && eg(t), null;
    }
    function dx(e, t, a, i) {
      Em(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = f_(v), g = tl(v, u), b;
      switch (y) {
        case ve:
          return yS(t, v), t.type = v = Hf(v), b = hS(null, t, v, g, i), b;
        case de:
          return t.type = v = WS(v), b = hC(null, t, v, g, i), b;
        case We:
          return t.type = v = GS(v), b = cC(null, t, v, g, i), b;
        case ot: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Xi(
              w,
              g,
              // Resolved for outer only
              "prop",
              gt(v)
            );
          }
          return b = fC(
            null,
            t,
            v,
            tl(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ue && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function px(e, t, a, i, u) {
      Em(e, t), t.tag = de;
      var s;
      return Al(a) ? (s = !0, Oh(t)) : s = !1, wf(t, u), aC(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function vx(e, t, a, i) {
      Em(e, t);
      var u = t.pendingProps, s;
      {
        var f = yf(t, a, !1);
        s = gf(t, f);
      }
      wf(t, i);
      var p, v;
      Ju(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = gt(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & ct && Zi.recordLegacyContextWarning(t, null), Gr(!0), Tp.current = t, p = Of(null, t, a, u, s, i), v = Lf(), Gr(!1);
      }
      if (ta(), t.flags |= Tl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = gt(a) || "Unknown";
        wp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), wp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = gt(a) || "Unknown";
          wp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), wp[b] = !0);
        }
        t.tag = de, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Al(a) ? (w = !0, Oh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), rC(t, p), lS(t, a, u, i), mS(null, t, a, !0, w, i);
      } else {
        if (t.tag = ve, t.mode & ct) {
          An(!0);
          try {
            p = Of(null, t, a, u, s, i), v = Lf();
          } finally {
            An(!1);
          }
        }
        return Nr() && v && qy(t), Ra(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = gt(t) || "Unknown";
          xp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), xp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = gt(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = gt(t) || "Unknown";
          fS[v] || (S("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Fn
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: ax(),
        transitions: null
      };
    }
    function hx(e, t) {
      var a = null;
      return {
        baseLanes: qe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, vp);
    }
    function yx(e, t) {
      return Ss(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      b_(t) && (t.flags |= $e);
      var u = Ji.current, s = !1, f = (t.flags & $e) !== Oe;
      if (f || mx(u, e) ? (s = !0, t.flags &= ~$e) : (e === null || e.memoizedState !== null) && (u = Uw(u, xE)), u = bf(u), Uo(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Rx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = gx(t, y, g, a), w = t.child;
          return w.memoizedState = SS(a), t.memoizedState = gS, b;
        } else
          return ES(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return Tx(e, t, f, i, U, M, a);
        }
        if (s) {
          var j = i.fallback, le = i.children, Le = Ex(e, t, le, j, a), xe = t.child, Rt = e.child.memoizedState;
          return xe.memoizedState = Rt === null ? SS(a) : hx(Rt, a), xe.childLanes = yx(e, a), t.memoizedState = gS, Le;
        } else {
          var ht = i.children, k = Sx(e, t, ht, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function gx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & we) === Ce && s !== null ? (p = s, p.childLanes = B, p.pendingProps = f, e.mode & Ye && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = $o(a, u, i, null)) : (p = CS(f, u), v = $o(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return S1(e, t, B, null);
    }
    function SC(e, t) {
      return qs(e, t);
    }
    function Sx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & we) === Ce && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Nt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ex(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & we) === Ce && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = B, y.pendingProps = v, t.mode & Ye && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & rr;
      var b;
      return p !== null ? b = qs(p, i) : (b = $o(i, s, u, null), b.flags |= rn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function Sm(e, t, a, i) {
      i !== null && tg(i), Rf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= rn, t.memoizedState = null, f;
    }
    function Cx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = $o(i, s, u, null);
      return v.flags |= rn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & we) !== Ce && Rf(t, e.child, null, u), v;
    }
    function Rx(e, t, a) {
      return (e.mode & we) === Ce ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = De) : Hy(t) ? e.lanes = Ii : e.lanes = Cr, null;
    }
    function Tx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Sm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= $e, null;
          var H = i.children, O = i.fallback, W = Cx(e, t, H, O, f), fe = t.child;
          return fe.memoizedState = SS(f), t.memoizedState = gS, W;
        }
      else {
        if (cw(), (t.mode & we) === Ce)
          return Sm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = _T(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = uS(b, p, y);
          return Sm(e, t, f, w);
        }
        var M = aa(f, e.childLanes);
        if (nl || M) {
          var U = Om();
          if (U !== null) {
            var j = Iv(U, f);
            if (j !== Fn && j !== s.retryLane) {
              s.retryLane = j;
              var le = en;
              Qa(e, j), pr(U, e, j, le);
            }
          }
          BS();
          var Le = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Sm(e, t, f, Le);
        } else if (B0(u)) {
          t.flags |= $e, t.child = e.child;
          var xe = Gb.bind(null, e);
          return DT(u, xe), null;
        } else {
          pw(t, u, s.treeContext);
          var Rt = i.children, ht = ES(t, Rt);
          return ht.flags |= za, ht;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = qe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = qe(i.lanes, t)), fg(e.return, t, a);
    }
    function wx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ke) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === bt)
          EC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function xx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Kh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function _x(e, t) {
      e !== void 0 && !gm[e] && (e !== "collapsed" && e !== "hidden" ? (gm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (gm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = St(e), i = !a && typeof _r(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (St(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = _r(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!CC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      bx(u), _x(s, u), Dx(f, u), Ra(e, t, f, a);
      var p = Ji.current, v = Eg(p, vp);
      if (v)
        p = Cg(p, vp), t.flags |= $e;
      else {
        var y = e !== null && (e.flags & $e) !== Oe;
        y && wx(t, t.child, a), p = bf(p);
      }
      if (Uo(t, p), (t.mode & we) === Ce)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = xx(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var U = M.alternate;
              if (U !== null && Kh(U) === null) {
                t.child = M;
                break;
              }
              var j = M.sibling;
              M.sibling = w, w = M, M = j;
            }
            RS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function kx(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Rf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var TC = !1;
    function Ox(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xi(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var y = f.value;
        if (ge(y, p)) {
          if (f.children === s.children && !Dh())
            return xu(e, t, a);
        } else
          bw(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var wC = !1;
    function Lx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), wf(t, a);
      var f = tr(i);
      Ju(t);
      var p;
      return Tp.current = t, Gr(!0), p = s(f), Gr(!1), ta(), t.flags |= Tl, Ra(e, t, p, a), t.child;
    }
    function bp() {
      nl = !0;
    }
    function Em(e, t) {
      (t.mode & we) === Ce && e !== null && (e.alternate = null, t.alternate = null, t.flags |= rn);
    }
    function xu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), JE(), jp(t.lanes), aa(a, t.childLanes) ? (ww(e, t), t.child) : null;
    }
    function Mx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Nt) : s.push(e), a.flags |= rn, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function Nx(e, t, a) {
      switch (t.tag) {
        case re:
          mC(t), t.stateNode, Cf();
          break;
        case ue:
          TE(t);
          break;
        case de: {
          var i = t.type;
          Al(i) && Oh(t);
          break;
        }
        case he:
          yg(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case pt:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= Ke);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ke: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Uo(t, bf(Ji.current)), t.flags |= $e, null;
            var y = t.child, g = y.childLanes;
            if (aa(a, g))
              return gC(e, t, a);
            Uo(t, bf(Ji.current));
            var b = xu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Uo(t, bf(Ji.current));
          break;
        }
        case bt: {
          var w = (e.flags & $e) !== Oe, M = aa(a, t.childLanes);
          if (w) {
            if (M)
              return RC(e, t, a);
            t.flags |= $e;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Uo(t, Ji.current), M)
            break;
          return null;
        }
        case Ne:
        case Xe:
          return t.lanes = B, pC(e, t, a);
      }
      return xu(e, t, a);
    }
    function xC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mx(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Dh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          nl = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & $e) === Oe)
            return nl = !1, Nx(e, t, a);
          (e.flags & ss) !== Oe ? nl = !0 : nl = !1;
        }
      } else if (nl = !1, Nr() && aw(t)) {
        var f = t.index, p = iw();
        J0(t, p, f);
      }
      switch (t.lanes = B, t.tag) {
        case ut:
          return vx(e, t, t.type, a);
        case tn: {
          var v = t.elementType;
          return dx(e, t, v, a);
        }
        case ve: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : tl(y, g);
          return hS(e, t, y, b, a);
        }
        case de: {
          var w = t.type, M = t.pendingProps, U = t.elementType === w ? M : tl(w, M);
          return hC(e, t, w, U, a);
        }
        case re:
          return sx(e, t, a);
        case ue:
          return cx(e, t, a);
        case Be:
          return fx(e, t);
        case ke:
          return gC(e, t, a);
        case he:
          return kx(e, t, a);
        case We: {
          var j = t.type, le = t.pendingProps, Le = t.elementType === j ? le : tl(j, le);
          return cC(e, t, j, Le, a);
        }
        case Tt:
          return lx(e, t, a);
        case dt:
          return ux(e, t, a);
        case pt:
          return ox(e, t, a);
        case rt:
          return Ox(e, t, a);
        case dn:
          return Lx(e, t, a);
        case ot: {
          var xe = t.type, Rt = t.pendingProps, ht = tl(xe, Rt);
          if (t.type !== t.elementType) {
            var k = xe.propTypes;
            k && Xi(
              k,
              ht,
              // Resolved for outer only
              "prop",
              gt(xe)
            );
          }
          return ht = tl(xe.type, ht), fC(e, t, xe, ht, a);
        }
        case He:
          return dC(e, t, t.type, t.pendingProps, a);
        case bn: {
          var H = t.type, O = t.pendingProps, W = t.elementType === H ? O : tl(H, O);
          return px(e, t, H, W, a);
        }
        case bt:
          return RC(e, t, a);
        case En:
          break;
        case Ne:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mf(e) {
      e.flags |= Ke;
    }
    function bC(e) {
      e.flags |= Xr, e.flags |= dd;
    }
    var _C, wS, DC, kC;
    _C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === Be)
          tT(e, u.stateNode);
        else if (u.tag !== he) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, wS = function(e, t) {
    }, DC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = rT(f, a, s, i, u, p);
        t.updateQueue = v, v && Mf(t);
      }
    }, kC = function(e, t, a, i) {
      a !== i && Mf(t);
    };
    function _p(e, t) {
      if (!Nr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Ur(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = B, i = Oe;
      if (t) {
        if ((e.mode & Ye) !== Ce) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = qe(a, qe(y.lanes, y.childLanes)), i |= y.subtreeFlags & rr, i |= y.flags & rr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = qe(a, qe(g.lanes, g.childLanes)), i |= g.subtreeFlags & rr, i |= g.flags & rr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ye) !== Ce) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = qe(a, qe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = qe(a, qe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zx(e, t, a) {
      if (gw() && (t.mode & we) !== Ce && (t.flags & $e) === Oe)
        return lE(t), Cf(), t.flags |= Rn | ma | Kn, !1;
      var i = Uh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mw(t), Ur(t), (t.mode & Ye) !== Ce) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Cf(), (t.flags & $e) === Oe && (t.memoizedState = null), t.flags |= Ke, Ur(t), (t.mode & Ye) !== Ce) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return uE(), !0;
    }
    function OC(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case ut:
        case tn:
        case He:
        case ve:
        case We:
        case Tt:
        case dt:
        case pt:
        case dn:
        case ot:
          return Ur(t), null;
        case de: {
          var u = t.type;
          return Al(u) && kh(t), Ur(t), null;
        }
        case re: {
          var s = t.stateNode;
          if (xf(t), Qy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Uh(t);
            if (f)
              Mf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rn) !== Oe) && (t.flags |= Na, uE());
            }
          }
          return wS(e, t), Ur(t), null;
        }
        case ue: {
          Sg(t);
          var v = RE(), y = t.type;
          if (e !== null && t.stateNode != null)
            DC(e, t, y, i, v), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ur(t), null;
            }
            var g = gg(), b = Uh(t);
            if (b)
              vw(t, v, g) && Mf(t);
            else {
              var w = eT(y, i, v, g, t);
              _C(w, t, !1, !1), t.stateNode = w, nT(w, y, i, v) && Mf(t);
            }
            t.ref !== null && bC(t);
          }
          return Ur(t), null;
        }
        case Be: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            kC(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = RE(), le = gg(), Le = Uh(t);
            Le ? hw(t) && Mf(t) : t.stateNode = aT(M, j, le, t);
          }
          return Ur(t), null;
        }
        case ke: {
          _f(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Rt = zx(e, t, xe);
            if (!Rt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & $e) !== Oe)
            return t.lanes = a, (t.mode & Ye) !== Ce && Gg(t), t;
          var ht = xe !== null, k = e !== null && e.memoizedState !== null;
          if (ht !== k && ht) {
            var H = t.child;
            if (H.flags |= wl, (t.mode & we) !== Ce) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !_);
              O || Eg(Ji.current, xE) ? Ub() : BS();
            }
          }
          var W = t.updateQueue;
          if (W !== null && (t.flags |= Ke), Ur(t), (t.mode & Ye) !== Ce && ht) {
            var fe = t.child;
            fe !== null && (t.treeBaseDuration -= fe.treeBaseDuration);
          }
          return null;
        }
        case he:
          return xf(t), wS(e, t), e === null && KT(t.stateNode.containerInfo), Ur(t), null;
        case rt:
          var oe = t.type._context;
          return cg(oe, t), Ur(t), null;
        case bn: {
          var Pe = t.type;
          return Al(Pe) && kh(t), Ur(t), null;
        }
        case bt: {
          _f(t);
          var Ge = t.memoizedState;
          if (Ge === null)
            return Ur(t), null;
          var Qt = (t.flags & $e) !== Oe, Ot = Ge.rendering;
          if (Ot === null)
            if (Qt)
              _p(Ge, !1);
            else {
              var In = Fb() && (e === null || (e.flags & $e) === Oe);
              if (!In)
                for (var Lt = t.child; Lt !== null; ) {
                  var jn = Kh(Lt);
                  if (jn !== null) {
                    Qt = !0, t.flags |= $e, _p(Ge, !1);
                    var sa = jn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= Ke), t.subtreeFlags = Oe, xw(t, a), Uo(t, Cg(Ji.current, vp)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              Ge.tail !== null && yn() > KC() && (t.flags |= $e, Qt = !0, _p(Ge, !1), t.lanes = zv);
            }
          else {
            if (!Qt) {
              var Vr = Kh(Ot);
              if (Vr !== null) {
                t.flags |= $e, Qt = !0;
                var si = Vr.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Ke), _p(Ge, !0), Ge.tail === null && Ge.tailMode === "hidden" && !Ot.alternate && !Nr())
                  return Ur(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                yn() * 2 - Ge.renderingStartTime > KC() && a !== Cr && (t.flags |= $e, Qt = !0, _p(Ge, !1), t.lanes = zv);
            }
            if (Ge.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var xa = Ge.last;
              xa !== null ? xa.sibling = Ot : t.child = Ot, Ge.last = Ot;
            }
          }
          if (Ge.tail !== null) {
            var ba = Ge.tail;
            Ge.rendering = ba, Ge.tail = ba.sibling, Ge.renderingStartTime = yn(), ba.sibling = null;
            var ca = Ji.current;
            return Qt ? ca = Cg(ca, vp) : ca = bf(ca), Uo(t, ca), ba;
          }
          return Ur(t), null;
        }
        case En:
          break;
        case Ne:
        case Xe: {
          PS(t);
          var Ou = t.memoizedState, Vf = Ou !== null;
          if (e !== null) {
            var $p = e.memoizedState, Yl = $p !== null;
            Yl !== Vf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ae && (t.flags |= wl);
          }
          return !Vf || (t.mode & we) === Ce ? Ur(t) : aa($l, Cr) && (Ur(t), t.subtreeFlags & (rn | Ke) && (t.flags |= wl)), null;
        }
        case zt:
          return null;
        case wt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ux(e, t, a) {
      switch (Xy(t), t.tag) {
        case de: {
          var i = t.type;
          Al(i) && kh(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | $e, (t.mode & Ye) !== Ce && Gg(t), t) : null;
        }
        case re: {
          t.stateNode, xf(t), Qy(t), Tg();
          var s = t.flags;
          return (s & Kn) !== Oe && (s & $e) === Oe ? (t.flags = s & ~Kn | $e, t) : null;
        }
        case ue:
          return Sg(t), null;
        case ke: {
          _f(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Cf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | $e, (t.mode & Ye) !== Ce && Gg(t), t) : null;
        }
        case bt:
          return _f(t), null;
        case he:
          return xf(t), null;
        case rt:
          var v = t.type._context;
          return cg(v, t), null;
        case Ne:
        case Xe:
          return PS(t), null;
        case zt:
          return null;
        default:
          return null;
      }
    }
    function LC(e, t, a) {
      switch (Xy(t), t.tag) {
        case de: {
          var i = t.type.childContextTypes;
          i != null && kh(t);
          break;
        }
        case re: {
          t.stateNode, xf(t), Qy(t), Tg();
          break;
        }
        case ue: {
          Sg(t);
          break;
        }
        case he:
          xf(t);
          break;
        case ke:
          _f(t);
          break;
        case bt:
          _f(t);
          break;
        case rt:
          var u = t.type._context;
          cg(u, t);
          break;
        case Ne:
        case Xe:
          PS(t);
          break;
      }
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var Cm = !1, Ar = !1, Ax = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Nf = null, zf = null;
    function Fx(e) {
      tu(null, function() {
        throw e;
      }), cd();
    }
    var jx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ye)
        try {
          Pl(), t.componentWillUnmount();
        } finally {
          Vl(e);
        }
      else
        t.componentWillUnmount();
    };
    function NC(e, t) {
      try {
        jo(ur, e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        jx(e, a);
      } catch (i) {
        un(e, t, i);
      }
    }
    function Hx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        un(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function Uf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ze && mt && e.mode & Ye)
              try {
                Pl(), i = a(null);
              } finally {
                Vl(e);
              }
            else
              i = a(null);
          } catch (u) {
            un(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          a.current = null;
    }
    function Rm(e, t, a) {
      try {
        a();
      } catch (i) {
        un(e, t, i);
      }
    }
    var UC = !1;
    function Vx(e, t) {
      ZR(e.containerInfo), Se = t, Px();
      var a = UC;
      return UC = !1, a;
    }
    function Px() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & Xu) !== Oe && t !== null ? (t.return = e, Se = t) : Bx();
      }
    }
    function Bx() {
      for (; Se !== null; ) {
        var e = Se;
        jt(e);
        try {
          $x(e);
        } catch (a) {
          un(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function $x(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Na) !== Oe) {
        switch (jt(e), e.tag) {
          case ve:
          case We:
          case He:
            break;
          case de: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ys && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : tl(e.type, i), u);
              {
                var p = MC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ie(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case re: {
            {
              var v = e.stateNode;
              TT(v.containerInfo);
            }
            break;
          }
          case ue:
          case Be:
          case he:
          case bn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function rl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & zr) !== Wa ? Lv(t) : (e & ur) !== Wa && li(t), (e & Fl) !== Wa && Vp(!0), Rm(t, a, p), (e & Fl) !== Wa && Vp(!1), (e & zr) !== Wa ? Ec() : (e & ur) !== Wa && eo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function jo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & zr) !== Wa ? _l(t) : (e & ur) !== Wa && Mv(t);
            var f = s.create;
            (e & Fl) !== Wa && Vp(!0), s.destroy = f(), (e & Fl) !== Wa && Vp(!1), (e & zr) !== Wa ? Sc() : (e & ur) !== Wa && cs();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ur) !== Oe ? v = "useLayoutEffect" : (s.tag & Fl) !== Oe ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Yx(e, t) {
      if ((t.flags & Ke) !== Oe)
        switch (t.tag) {
          case pt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = KE(), p = t.alternate === null ? "mount" : "update";
            XE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case re:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case pt:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Ix(e, t, a, i) {
      if ((a.flags & Sr) !== Oe)
        switch (a.tag) {
          case ve:
          case We:
          case He: {
            if (!Ar)
              if (a.mode & Ye)
                try {
                  Pl(), jo(ur | lr, a);
                } finally {
                  Vl(a);
                }
              else
                jo(ur | lr, a);
            break;
          }
          case de: {
            var u = a.stateNode;
            if (a.flags & Ke && !Ar)
              if (t === null)
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Ye)
                  try {
                    Pl(), u.componentDidMount();
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : tl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Ye)
                  try {
                    Pl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), CE(a, p, u));
            break;
          }
          case re: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case de:
                    y = a.child.stateNode;
                    break;
                }
              CE(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & Ke) {
              var b = a.type, w = a.memoizedProps;
              sT(g, b, w);
            }
            break;
          }
          case Be:
            break;
          case he:
            break;
          case pt: {
            {
              var M = a.memoizedProps, U = M.onCommit, j = M.onRender, le = a.stateNode.effectDuration, Le = KE(), xe = t === null ? "mount" : "update";
              XE() && (xe = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, xe, le, Le), Bb(a);
                var Rt = a.return;
                e:
                  for (; Rt !== null; ) {
                    switch (Rt.tag) {
                      case re:
                        var ht = Rt.stateNode;
                        ht.effectDuration += le;
                        break e;
                      case pt:
                        var k = Rt.stateNode;
                        k.effectDuration += le;
                        break e;
                    }
                    Rt = Rt.return;
                  }
              }
            }
            break;
          }
          case ke: {
            Jx(e, a);
            break;
          }
          case bt:
          case bn:
          case En:
          case Ne:
          case Xe:
          case wt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Xr && AC(a);
    }
    function Qx(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          if (e.mode & Ye)
            try {
              Pl(), NC(e, e.return);
            } finally {
              Vl(e);
            }
          else
            NC(e, e.return);
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hx(e, e.return, t), zC(e, e.return);
          break;
        }
        case ue: {
          zC(e, e.return);
          break;
        }
      }
    }
    function Wx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? ST(u) : CT(i.stateNode, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
          }
        } else if (i.tag === Be) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ET(s) : RT(s, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === Xe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function AC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ye)
            try {
              Pl(), u = t(i);
            } finally {
              Vl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ie(e)), t.current = i;
      }
    }
    function Gx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function FC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, FC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && ew(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function qx(e) {
      for (var t = e.return; t !== null; ) {
        if (jC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function jC(e) {
      return e.tag === ue || e.tag === re || e.tag === he;
    }
    function HC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || jC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== Be && t.tag !== Yt; ) {
            if (t.flags & rn || t.child === null || t.tag === he)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & rn))
            return t.stateNode;
        }
    }
    function Xx(e) {
      var t = qx(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Ht && (P0(a), t.flags &= ~Ht);
          var i = HC(e);
          _S(e, i, a);
          break;
        }
        case re:
        case he: {
          var u = t.stateNode.containerInfo, s = HC(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === ue || i === Be;
      if (u) {
        var s = e.stateNode;
        t ? hT(a, s, t) : pT(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === ue || i === Be;
      if (u) {
        var s = e.stateNode;
        t ? vT(a, s, t) : dT(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Fr = null, al = !1;
    function Kx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ue: {
                Fr = i.stateNode, al = !1;
                break e;
              }
              case re: {
                Fr = i.stateNode.containerInfo, al = !0;
                break e;
              }
              case he: {
                Fr = i.stateNode.containerInfo, al = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        VC(e, t, a), Fr = null, al = !1;
      }
      Gx(a);
    }
    function Ho(e, t, a) {
      for (var i = a.child; i !== null; )
        VC(e, t, i), i = i.sibling;
    }
    function VC(e, t, a) {
      switch (au(a), a.tag) {
        case ue:
          Ar || Uf(a, t);
        case Be: {
          {
            var i = Fr, u = al;
            Fr = null, Ho(e, t, a), Fr = i, al = u, Fr !== null && (al ? yT(Fr, a.stateNode) : mT(Fr, a.stateNode));
          }
          return;
        }
        case Yt: {
          Fr !== null && (al ? gT(Fr, a.stateNode) : jy(Fr, a.stateNode));
          return;
        }
        case he: {
          {
            var s = Fr, f = al;
            Fr = a.stateNode.containerInfo, al = !0, Ho(e, t, a), Fr = s, al = f;
          }
          return;
        }
        case ve:
        case We:
        case ot:
        case He: {
          if (!Ar) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, M = b.tag;
                  w !== void 0 && ((M & Fl) !== Wa ? Rm(a, t, w) : (M & ur) !== Wa && (li(a), a.mode & Ye ? (Pl(), Rm(a, t, w), Vl(a)) : Rm(a, t, w), eo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Ho(e, t, a);
          return;
        }
        case de: {
          if (!Ar) {
            Uf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && xS(a, t, U);
          }
          Ho(e, t, a);
          return;
        }
        case En: {
          Ho(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & we
          ) {
            var j = Ar;
            Ar = j || a.memoizedState !== null, Ho(e, t, a), Ar = j;
          } else
            Ho(e, t, a);
          break;
        }
        default: {
          Ho(e, t, a);
          return;
        }
      }
    }
    function Zx(e) {
      e.memoizedState;
    }
    function Jx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && FT(s);
          }
        }
      }
    }
    function PC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ax()), t.forEach(function(i) {
          var u = qb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Sa)
              if (Nf !== null && zf !== null)
                Hp(zf, Nf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function eb(e, t, a) {
      Nf = a, zf = e, jt(t), BC(t, e), jt(t), Nf = null, zf = null;
    }
    function il(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Kx(e, t, s);
          } catch (v) {
            un(s, t, v);
          }
        }
      var f = Ks();
      if (t.subtreeFlags & Jr)
        for (var p = t.child; p !== null; )
          jt(p), BC(p, e), p = p.sibling;
      jt(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ve:
        case We:
        case ot:
        case He: {
          if (il(t, e), Bl(e), u & Ke) {
            try {
              rl(Fl | lr, e, e.return), jo(Fl | lr, e);
            } catch (Pe) {
              un(e, e.return, Pe);
            }
            if (e.mode & Ye) {
              try {
                Pl(), rl(ur | lr, e, e.return);
              } catch (Pe) {
                un(e, e.return, Pe);
              }
              Vl(e);
            } else
              try {
                rl(ur | lr, e, e.return);
              } catch (Pe) {
                un(e, e.return, Pe);
              }
          }
          return;
        }
        case de: {
          il(t, e), Bl(e), u & Xr && i !== null && Uf(i, i.return);
          return;
        }
        case ue: {
          il(t, e), Bl(e), u & Xr && i !== null && Uf(i, i.return);
          {
            if (e.flags & Ht) {
              var s = e.stateNode;
              try {
                P0(s);
              } catch (Pe) {
                un(e, e.return, Pe);
              }
            }
            if (u & Ke) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    cT(f, g, y, v, p, e);
                  } catch (Pe) {
                    un(e, e.return, Pe);
                  }
              }
            }
          }
          return;
        }
        case Be: {
          if (il(t, e), Bl(e), u & Ke) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              fT(b, M, w);
            } catch (Pe) {
              un(e, e.return, Pe);
            }
          }
          return;
        }
        case re: {
          if (il(t, e), Bl(e), u & Ke && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                AT(t.containerInfo);
              } catch (Pe) {
                un(e, e.return, Pe);
              }
          }
          return;
        }
        case he: {
          il(t, e), Bl(e);
          return;
        }
        case ke: {
          il(t, e), Bl(e);
          var j = e.child;
          if (j.flags & wl) {
            var le = j.stateNode, Le = j.memoizedState, xe = Le !== null;
            if (le.isHidden = xe, xe) {
              var Rt = j.alternate !== null && j.alternate.memoizedState !== null;
              Rt || zb();
            }
          }
          if (u & Ke) {
            try {
              Zx(e);
            } catch (Pe) {
              un(e, e.return, Pe);
            }
            PC(e);
          }
          return;
        }
        case Ne: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & we
          ) {
            var k = Ar;
            Ar = k || ht, il(t, e), Ar = k;
          } else
            il(t, e);
          if (Bl(e), u & wl) {
            var H = e.stateNode, O = e.memoizedState, W = O !== null, fe = e;
            if (H.isHidden = W, W && !ht && (fe.mode & we) !== Ce) {
              Se = fe;
              for (var oe = fe.child; oe !== null; )
                Se = oe, nb(oe), oe = oe.sibling;
            }
            Wx(fe, W);
          }
          return;
        }
        case bt: {
          il(t, e), Bl(e), u & Ke && PC(e);
          return;
        }
        case En:
          return;
        default: {
          il(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & rn) {
        try {
          Xx(e);
        } catch (a) {
          un(e, e.return, a);
        }
        e.flags &= ~rn;
      }
      t & za && (e.flags &= ~za);
    }
    function tb(e, t, a) {
      Nf = a, zf = t, Se = e, $C(e, t, a), Nf = null, zf = null;
    }
    function $C(e, t, a) {
      for (var i = (e.mode & we) !== Ce; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Ne && i) {
          var f = u.memoizedState !== null, p = f || Cm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ar, b = Cm, w = Ar;
            Cm = p, Ar = g, Ar && !w && (Se = u, rb(u));
            for (var M = s; M !== null; )
              Se = M, $C(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Se = u, Cm = b, Ar = w, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sr) !== Oe && s !== null ? (s.return = u, Se = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Sr) !== Oe) {
          var u = i.alternate;
          jt(i);
          try {
            Ix(t, u, i, a);
          } catch (f) {
            un(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function nb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case ve:
          case We:
          case ot:
          case He: {
            if (t.mode & Ye)
              try {
                Pl(), rl(ur, t, t.return);
              } finally {
                Vl(t);
              }
            else
              rl(ur, t, t.return);
            break;
          }
          case de: {
            Uf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case ue: {
            Uf(t, t.return);
            break;
          }
          case Ne: {
            var u = t.memoizedState !== null;
            if (u) {
              YC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : YC(e);
      }
    }
    function YC(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function rb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Ne) {
          var i = t.memoizedState !== null;
          if (i) {
            IC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : IC(e);
      }
    }
    function IC(e) {
      for (; Se !== null; ) {
        var t = Se;
        jt(t);
        try {
          Qx(t);
        } catch (i) {
          un(t, t.return, i);
        }
        if (Cn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function ab(e, t, a, i) {
      Se = t, ib(t, e, a, i);
    }
    function ib(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Ua) !== Oe && s !== null ? (s.return = u, Se = s) : lb(e, t, a, i);
      }
    }
    function lb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & sn) !== Oe) {
          jt(u);
          try {
            ub(t, u, a, i);
          } catch (f) {
            un(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function ub(e, t, a, i) {
      switch (t.tag) {
        case ve:
        case We:
        case He: {
          if (t.mode & Ye) {
            Wg();
            try {
              jo(zr | lr, t);
            } finally {
              Qg(t);
            }
          } else
            jo(zr | lr, t);
          break;
        }
      }
    }
    function ob(e) {
      Se = e, sb();
    }
    function sb() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Nt) !== Oe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, db(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Se = e;
          }
        }
        (e.subtreeFlags & Ua) !== Oe && t !== null ? (t.return = e, Se = t) : cb();
      }
    }
    function cb() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & sn) !== Oe && (jt(e), fb(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function fb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          e.mode & Ye ? (Wg(), rl(zr | lr, e, e.return), Qg(e)) : rl(zr | lr, e, e.return);
          break;
        }
      }
    }
    function db(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        jt(a), vb(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : pb(e);
      }
    }
    function pb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (FC(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function vb(e, t) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          e.mode & Ye ? (Wg(), rl(zr, e, t), Qg(e)) : rl(zr, e, t);
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          try {
            jo(ur | lr, e);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          try {
            jo(zr | lr, e);
          } catch (t) {
            un(e, e.return, t);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          try {
            rl(ur | lr, e, e.return);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He:
          try {
            rl(zr | lr, e, e.return);
          } catch (t) {
            un(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Dp = Symbol.for;
      Dp("selector.component"), Dp("selector.has_pseudo_class"), Dp("selector.role"), Dp("selector.test_id"), Dp("selector.text");
    }
    var Sb = [];
    function Eb() {
      Sb.forEach(function(e) {
        return e();
      });
    }
    var Cb = F.ReactCurrentActQueue;
    function Rb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function QC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Cb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tb = Math.ceil, kS = F.ReactCurrentDispatcher, OS = F.ReactCurrentOwner, jr = F.ReactCurrentBatchConfig, ll = F.ReactCurrentActQueue, cr = (
      /*             */
      0
    ), WC = (
      /*               */
      1
    ), Hr = (
      /*                */
      2
    ), ki = (
      /*                */
      4
    ), bu = 0, kp = 1, Is = 2, Tm = 3, Op = 4, GC = 5, LS = 6, Ct = cr, Ta = null, Mn = null, fr = B, $l = B, MS = ko(B), dr = bu, Lp = null, wm = B, Mp = B, xm = B, Np = null, Ga = null, NS = 0, qC = 500, XC = 1 / 0, wb = 500, _u = null;
    function zp() {
      XC = yn() + wb;
    }
    function KC() {
      return XC;
    }
    var bm = !1, zS = null, Af = null, Qs = !1, Vo = null, Up = B, US = [], AS = null, xb = 50, Ap = 0, FS = null, jS = !1, _m = !1, bb = 50, Ff = 0, Dm = null, Fp = en, km = B, ZC = !1;
    function Om() {
      return Ta;
    }
    function wa() {
      return (Ct & (Hr | ki)) !== cr ? yn() : (Fp !== en || (Fp = yn()), Fp);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & we) === Ce)
        return De;
      if ((Ct & Hr) !== cr && fr !== B)
        return so(fr);
      var a = Cw() !== Ew;
      if (a) {
        if (jr.transition !== null) {
          var i = jr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return km === Fn && (km = Bv()), km;
      }
      var u = Va();
      if (u !== Fn)
        return u;
      var s = iT();
      return s;
    }
    function _b(e) {
      var t = e.mode;
      return (t & we) === Ce ? De : ra();
    }
    function pr(e, t, a, i) {
      Kb(), ZC && S("useInsertionEffect must not schedule updates."), jS && (_m = !0), du(e, a, i), (Ct & Hr) !== B && e === Ta ? e_(t) : (Sa && $c(e, t, a), t_(t), e === Ta && ((Ct & Hr) === cr && (Mp = qe(Mp, a)), dr === Op && Bo(e, fr)), qa(e, i), a === De && Ct === cr && (t.mode & we) === Ce && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ll.isBatchingLegacy && (zp(), Z0()));
    }
    function Db(e, t, a) {
      var i = e.current;
      i.lanes = t, du(e, t, a), qa(e, a);
    }
    function kb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ct & Hr) !== cr
      );
    }
    function qa(e, t) {
      var a = e.callbackNode;
      Fv(e, t);
      var i = cu(e, e === Ta ? fr : B);
      if (i === B) {
        a !== null && v1(a), e.callbackNode = null, e.callbackPriority = Fn;
        return;
      }
      var u = kn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ll.current !== null && a !== IS)) {
        a == null && s !== De && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && v1(a);
      var f;
      if (u === De)
        e.tag === Oo ? (ll.isBatchingLegacy !== null && (ll.didScheduleLegacyUpdate = !0), rw(t1.bind(null, e))) : K0(t1.bind(null, e)), ll.current !== null ? ll.current.push(Lo) : uT(function() {
          (Ct & (Hr | ki)) === cr && Lo();
        }), f = null;
      else {
        var p;
        switch (ir(i)) {
          case On:
            p = mc;
            break;
          case Qi:
            p = ru;
            break;
          case Ei:
            p = Si;
            break;
          case co:
            p = yc;
            break;
          default:
            p = Si;
            break;
        }
        f = QS(p, JC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function JC(e, t) {
      if (Ww(), Fp = en, km = B, (Ct & (Hr | ki)) !== cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ku();
      if (i && e.callbackNode !== a)
        return null;
      var u = cu(e, e === Ta ? fr : B);
      if (u === B)
        return null;
      var s = !gs(e, u) && !Pv(e, u) && !t, f = s ? Hb(e, u) : Mm(e, u);
      if (f !== bu) {
        if (f === Is) {
          var p = kl(e);
          p !== B && (u = p, f = HS(e, p));
        }
        if (f === kp) {
          var v = Lp;
          throw Ws(e, B), Bo(e, u), qa(e, yn()), v;
        }
        if (f === LS)
          Bo(e, u);
        else {
          var y = !gs(e, u), g = e.current.alternate;
          if (y && !Lb(g)) {
            if (f = Mm(e, u), f === Is) {
              var b = kl(e);
              b !== B && (u = b, f = HS(e, b));
            }
            if (f === kp) {
              var w = Lp;
              throw Ws(e, B), Bo(e, u), qa(e, yn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ob(e, f, u);
        }
      }
      return qa(e, yn()), e.callbackNode === a ? JC.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Np;
      if (Yc(e)) {
        var i = Ws(e, t);
        i.flags |= Rn, XT(e.containerInfo);
      }
      var u = Mm(e, t);
      if (u !== Is) {
        var s = Ga;
        Ga = a, s !== null && e1(s);
      }
      return u;
    }
    function e1(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function Ob(e, t, a) {
      switch (t) {
        case bu:
        case kp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Is: {
          Gs(e, Ga, _u);
          break;
        }
        case Tm: {
          if (Bo(e, a), jv(a) && // do not delay if we're inside an act() scope
          !h1()) {
            var i = NS + qC - yn();
            if (i > 10) {
              var u = cu(e, B);
              if (u !== B)
                break;
              var s = e.suspendedLanes;
              if (!fu(s, a)) {
                wa(), Pc(e, s);
                break;
              }
              e.timeoutHandle = Ay(Gs.bind(null, e, Ga, _u), i);
              break;
            }
          }
          Gs(e, Ga, _u);
          break;
        }
        case Op: {
          if (Bo(e, a), Vv(a))
            break;
          if (!h1()) {
            var f = Uv(e, a), p = f, v = yn() - p, y = Xb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(Gs.bind(null, e, Ga, _u), y);
              break;
            }
          }
          Gs(e, Ga, _u);
          break;
        }
        case GC: {
          Gs(e, Ga, _u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Lb(e) {
      for (var t = e; ; ) {
        if (t.flags & os) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ge(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & os && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Bo(e, t) {
      t = Ss(t, xm), t = Ss(t, Mp), Yv(e, t);
    }
    function t1(e) {
      if (Gw(), (Ct & (Hr | ki)) !== cr)
        throw new Error("Should not already be working.");
      ku();
      var t = cu(e, B);
      if (!aa(t, De))
        return qa(e, yn()), null;
      var a = Mm(e, t);
      if (e.tag !== Oo && a === Is) {
        var i = kl(e);
        i !== B && (t = i, a = HS(e, i));
      }
      if (a === kp) {
        var u = Lp;
        throw Ws(e, B), Bo(e, t), qa(e, yn()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Gs(e, Ga, _u), qa(e, yn()), null;
    }
    function Mb(e, t) {
      t !== B && (_d(e, qe(t, De)), qa(e, yn()), (Ct & (Hr | ki)) === cr && (zp(), Lo()));
    }
    function VS(e, t) {
      var a = Ct;
      Ct |= WC;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ll.isBatchingLegacy && (zp(), Z0());
      }
    }
    function Nb(e, t, a, i, u) {
      var s = Va(), f = jr.transition;
      try {
        return jr.transition = null, Tn(On), e(t, a, i, u);
      } finally {
        Tn(s), jr.transition = f, Ct === cr && zp();
      }
    }
    function Du(e) {
      Vo !== null && Vo.tag === Oo && (Ct & (Hr | ki)) === cr && ku();
      var t = Ct;
      Ct |= WC;
      var a = jr.transition, i = Va();
      try {
        return jr.transition = null, Tn(On), e ? e() : void 0;
      } finally {
        Tn(i), jr.transition = a, Ct = t, (Ct & (Hr | ki)) === cr && Lo();
      }
    }
    function n1() {
      return (Ct & (Hr | ki)) !== cr;
    }
    function Lm(e, t) {
      ua(MS, $l, e), $l = qe($l, t);
    }
    function PS(e) {
      $l = MS.current, la(MS, e);
    }
    function Ws(e, t) {
      e.finishedWork = null, e.finishedLanes = B;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, lT(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var u = i.alternate;
          LC(u, i), i = i.return;
        }
      Ta = e;
      var s = qs(e.current, null);
      return Mn = s, fr = $l = t, dr = bu, Lp = null, wm = B, Mp = B, xm = B, Np = null, Ga = null, Dw(), Zi.discardPendingWarnings(), s;
    }
    function r1(e, t) {
      do {
        var a = Mn;
        try {
          if (Ph(), _E(), Cn(), OS.current = null, a === null || a.return === null) {
            dr = kp, Lp = t, Mn = null;
            return;
          }
          if (Ze && a.mode & Ye && mm(a, !0), Je)
            if (ta(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              iu(a, i, fr);
            } else
              fs(a, t, fr);
          rx(e, a.return, a, t, fr), u1(a);
        } catch (u) {
          t = u, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function a1() {
      var e = kS.current;
      return kS.current = fm, e === null ? fm : e;
    }
    function i1(e) {
      kS.current = e;
    }
    function zb() {
      NS = yn();
    }
    function jp(e) {
      wm = qe(e, wm);
    }
    function Ub() {
      dr === bu && (dr = Tm);
    }
    function BS() {
      (dr === bu || dr === Tm || dr === Is) && (dr = Op), Ta !== null && (ys(wm) || ys(Mp)) && Bo(Ta, fr);
    }
    function Ab(e) {
      dr !== Op && (dr = Is), Np === null ? Np = [e] : Np.push(e);
    }
    function Fb() {
      return dr === bu;
    }
    function Mm(e, t) {
      var a = Ct;
      Ct |= Hr;
      var i = a1();
      if (Ta !== e || fr !== t) {
        if (Sa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Hp(e, fr), u.clear()), Dd(e, t);
        }
        _u = Cs(), Ws(e, t);
      }
      cn(t);
      do
        try {
          jb();
          break;
        } catch (s) {
          r1(e, s);
        }
      while (!0);
      if (Ph(), Ct = a, i1(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Rc(), Ta = null, fr = B, dr;
    }
    function jb() {
      for (; Mn !== null; )
        l1(Mn);
    }
    function Hb(e, t) {
      var a = Ct;
      Ct |= Hr;
      var i = a1();
      if (Ta !== e || fr !== t) {
        if (Sa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Hp(e, fr), u.clear()), Dd(e, t);
        }
        _u = Cs(), zp(), Ws(e, t);
      }
      cn(t);
      do
        try {
          Vb();
          break;
        } catch (s) {
          r1(e, s);
        }
      while (!0);
      return Ph(), i1(i), Ct = a, Mn !== null ? (Cc(), bu) : (Rc(), Ta = null, fr = B, dr);
    }
    function Vb() {
      for (; Mn !== null && !hc(); )
        l1(Mn);
    }
    function l1(e) {
      var t = e.alternate;
      jt(e);
      var a;
      (e.mode & Ye) !== Ce ? (Ig(e), a = $S(t, e, $l), mm(e, !0)) : a = $S(t, e, $l), Cn(), e.memoizedProps = e.pendingProps, a === null ? u1(e) : Mn = a, OS.current = null;
    }
    function u1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ma) === Oe) {
          jt(t);
          var u = void 0;
          if ((t.mode & Ye) === Ce ? u = OC(a, t, $l) : (Ig(t), u = OC(a, t, $l), mm(t, !1)), Cn(), u !== null) {
            Mn = u;
            return;
          }
        } else {
          var s = Ux(a, t);
          if (s !== null) {
            s.flags &= wv, Mn = s;
            return;
          }
          if ((t.mode & Ye) !== Ce) {
            mm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ma, i.subtreeFlags = Oe, i.deletions = null;
          else {
            dr = LS, Mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mn = v;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      dr === bu && (dr = GC);
    }
    function Gs(e, t, a) {
      var i = Va(), u = jr.transition;
      try {
        jr.transition = null, Tn(On), Pb(e, t, a, i);
      } finally {
        jr.transition = u, Tn(i);
      }
      return null;
    }
    function Pb(e, t, a, i) {
      do
        ku();
      while (Vo !== null);
      if (Zb(), (Ct & (Hr | ki)) !== cr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (bl(s), u === null)
        return gc(), null;
      if (s === B && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = B, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = qe(u.lanes, u.childLanes);
      Bc(e, f), e === Ta && (Ta = null, Mn = null, fr = B), ((u.subtreeFlags & Ua) !== Oe || (u.flags & Ua) !== Oe) && (Qs || (Qs = !0, AS = a, QS(Si, function() {
        return ku(), null;
      })));
      var p = (u.subtreeFlags & (Xu | Jr | Sr | Ua)) !== Oe, v = (u.flags & (Xu | Jr | Sr | Ua)) !== Oe;
      if (p || v) {
        var y = jr.transition;
        jr.transition = null;
        var g = Va();
        Tn(On);
        var b = Ct;
        Ct |= ki, OS.current = null, Vx(e, u), ZE(), eb(e, u, s), JR(e.containerInfo), e.current = u, Sd(s), tb(u, e, s), to(), _v(), Ct = b, Tn(g), jr.transition = y;
      } else
        e.current = u, ZE();
      var w = Qs;
      if (Qs ? (Qs = !1, Vo = e, Up = s) : (Ff = 0, Dm = null), f = e.pendingLanes, f === B && (Af = null), w || f1(e.current, !1), Zu(u.stateNode, i), Sa && e.memoizedUpdaters.clear(), Eb(), qa(e, yn()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], le = j.stack, Le = j.digest;
          M(j.value, {
            componentStack: le,
            digest: Le
          });
        }
      if (bm) {
        bm = !1;
        var xe = zS;
        throw zS = null, xe;
      }
      return aa(Up, De) && e.tag !== Oo && ku(), f = e.pendingLanes, aa(f, De) ? (Qw(), e === FS ? Ap++ : (Ap = 0, FS = e)) : Ap = 0, Lo(), gc(), null;
    }
    function ku() {
      if (Vo !== null) {
        var e = ir(Up), t = uy(Ei, e), a = jr.transition, i = Va();
        try {
          return jr.transition = null, Tn(t), $b();
        } finally {
          Tn(i), jr.transition = a;
        }
      }
      return !1;
    }
    function Bb(e) {
      US.push(e), Qs || (Qs = !0, QS(Si, function() {
        return ku(), null;
      }));
    }
    function $b() {
      if (Vo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Vo, a = Up;
      if (Vo = null, Up = B, (Ct & (Hr | ki)) !== cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, _m = !1, Nv(a);
      var i = Ct;
      Ct |= ki, ob(t.current), ab(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yx(t, f);
        }
      }
      Ed(), f1(t.current, !0), Ct = i, Lo(), _m ? t === Dm ? Ff++ : (Ff = 0, Dm = t) : Ff = 0, jS = !1, _m = !1, ja(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function o1(e) {
      return Af !== null && Af.has(e);
    }
    function Yb(e) {
      Af === null ? Af = /* @__PURE__ */ new Set([e]) : Af.add(e);
    }
    function Ib(e) {
      bm || (bm = !0, zS = e);
    }
    var Qb = Ib;
    function s1(e, t, a) {
      var i = $s(a, t), u = lC(e, i, De), s = No(e, u, De), f = wa();
      s !== null && (du(s, De, f), qa(s, f));
    }
    function un(e, t, a) {
      if (Fx(a), Vp(!1), e.tag === re) {
        s1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === re) {
          s1(i, e, a);
          return;
        } else if (i.tag === de) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !o1(s)) {
            var f = $s(a, e), p = sS(i, f, De), v = No(i, p, De), y = wa();
            v !== null && (du(v, De, y), qa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Wb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Pc(e, a), n_(e), Ta === e && fu(fr, a) && (dr === Op || dr === Tm && jv(fr) && yn() - NS < qC ? Ws(e, B) : xm = qe(xm, a)), qa(e, u);
    }
    function c1(e, t) {
      t === Fn && (t = _b(e));
      var a = wa(), i = Qa(e, t);
      i !== null && (du(i, t, a), qa(i, a));
    }
    function Gb(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), c1(e, a);
    }
    function qb(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case ke:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case bt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), c1(e, a);
    }
    function Xb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tb(e / 1960) * 1960;
    }
    function Kb() {
      if (Ap > xb)
        throw Ap = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ff > bb && (Ff = 0, Dm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Zb() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function f1(e, t) {
      jt(e), Nm(e, Zr, yb), t && Nm(e, nu, gb), Nm(e, Zr, hb), t && Nm(e, nu, mb), Cn();
    }
    function Nm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Oe ? i = i.child : ((i.flags & t) !== Oe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var zm = null;
    function d1(e) {
      {
        if ((Ct & Hr) !== cr || !(e.mode & we))
          return;
        var t = e.tag;
        if (t !== ut && t !== re && t !== de && t !== ve && t !== We && t !== ot && t !== He)
          return;
        var a = Ie(e) || "ReactComponent";
        if (zm !== null) {
          if (zm.has(a))
            return;
          zm.add(a);
        } else
          zm = /* @__PURE__ */ new Set([a]);
        var i = mn;
        try {
          jt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? jt(e) : Cn();
        }
      }
    }
    var $S;
    {
      var Jb = null;
      $S = function(e, t, a) {
        var i = E1(Jb, t);
        try {
          return xC(e, t, a);
        } catch (s) {
          if (fw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ph(), _E(), LC(e, t), E1(t, i), t.mode & Ye && Ig(t), tu(null, xC, null, e, t, a), ny()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var p1 = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function e_(e) {
      if (Wr && !$w())
        switch (e.tag) {
          case ve:
          case We:
          case He: {
            var t = Mn && Ie(Mn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ie(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case de: {
            p1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), p1 = !0);
            break;
          }
        }
    }
    function Hp(e, t) {
      if (Sa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          $c(e, i, t);
        });
      }
    }
    var IS = {};
    function QS(e, t) {
      {
        var a = ll.current;
        return a !== null ? (a.push(t), IS) : vc(e, t);
      }
    }
    function v1(e) {
      if (e !== IS)
        return bv(e);
    }
    function h1() {
      return ll.current !== null;
    }
    function t_(e) {
      {
        if (e.mode & we) {
          if (!QC())
            return;
        } else if (!Rb() || Ct !== cr || e.tag !== ve && e.tag !== We && e.tag !== He)
          return;
        if (ll.current === null) {
          var t = mn;
          try {
            jt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ie(e));
          } finally {
            t ? jt(e) : Cn();
          }
        }
      }
    }
    function n_(e) {
      e.tag !== Oo && QC() && ll.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Vp(e) {
      ZC = e;
    }
    var Oi = null, jf = null, r_ = function(e) {
      Oi = e;
    };
    function Hf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return Hf(e);
    }
    function GS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Hf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: G,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function m1(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case de: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ve: {
            (typeof i == "function" || s === Ue) && (u = !0);
            break;
          }
          case We: {
            (s === G || s === Ue) && (u = !0);
            break;
          }
          case ot:
          case He: {
            (s === yt || s === Ue) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function y1(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        jf === null && (jf = /* @__PURE__ */ new WeakSet()), jf.add(e);
      }
    }
    var a_ = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ku(), Du(function() {
          qS(e.current, i, a);
        });
      }
    }, i_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        ku(), Du(function() {
          Pp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ve:
          case He:
          case de:
            v = p;
            break;
          case We:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Oi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === de ? g = !0 : y = !0));
        }
        if (jf !== null && (jf.has(e) || i !== null && jf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Qa(e, De);
          w !== null && pr(w, e, De, en);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var l_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ve:
          case He:
          case de:
            p = f;
            break;
          case We:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? u_(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function u_(e, t) {
      {
        var a = o_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case he:
              t.add(i.stateNode.containerInfo);
              return;
            case re:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function o_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var KS;
    {
      KS = !1;
      try {
        var g1 = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function s_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Oe, this.subtreeFlags = Oe, this.deletions = null, this.lanes = B, this.childLanes = B, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new s_(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function c_(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function f_(e) {
      if (typeof e == "function")
        return ZS(e) ? de : ve;
      if (e != null) {
        var t = e.$$typeof;
        if (t === G)
          return We;
        if (t === yt)
          return ot;
      }
      return ut;
    }
    function qs(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Oe, a.subtreeFlags = Oe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & rr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ut:
        case ve:
        case He:
          a.type = Hf(e.type);
          break;
        case de:
          a.type = WS(e.type);
          break;
        case We:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function d_(e, t) {
      e.flags &= rr | rn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = B, e.lanes = t, e.child = null, e.subtreeFlags = Oe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Oe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function p_(e, t, a) {
      var i;
      return e === Lh ? (i = we, t === !0 && (i |= ct, i |= Ea)) : i = Ce, Sa && (i |= Ye), oi(re, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = ut, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = de, p = WS(p)) : p = Hf(p);
      else if (typeof e == "string")
        f = ue;
      else
        e:
          switch (e) {
            case ha:
              return $o(a.children, u, s, t);
            case di:
              f = dt, u |= ct, (u & we) !== Ce && (u |= Ea);
              break;
            case pi:
              return v_(a, u, s, t);
            case Te:
              return h_(a, u, s, t);
            case ft:
              return m_(a, u, s, t);
            case Wt:
              return S1(a, u, s, t);
            case nn:
            case tt:
            case gr:
            case vi:
            case zn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case R:
                    f = rt;
                    break e;
                  case Y:
                    f = dn;
                    break e;
                  case G:
                    f = We, p = GS(p);
                    break e;
                  case yt:
                    f = ot;
                    break e;
                  case Ue:
                    f = tn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ie(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function $o(e, t, a, i) {
      var u = oi(Tt, e, i, t);
      return u.lanes = a, u;
    }
    function v_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(pt, e, i, t | Ye);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function h_(e, t, a, i) {
      var u = oi(ke, e, i, t);
      return u.elementType = Te, u.lanes = a, u;
    }
    function m_(e, t, a, i) {
      var u = oi(bt, e, i, t);
      return u.elementType = ft, u.lanes = a, u;
    }
    function S1(e, t, a, i) {
      var u = oi(Ne, e, i, t);
      u.elementType = Wt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = oi(Be, e, null, t);
      return i.lanes = a, i;
    }
    function y_() {
      var e = oi(ue, null, null, Ce);
      return e.elementType = "DELETED", e;
    }
    function g_(e) {
      var t = oi(Yt, null, null, Ce);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(he, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function E1(e, t) {
      return e === null && (e = oi(ut, null, null, Ce)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function S_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = Es(B), this.expirationTimes = Es(en), this.pendingLanes = B, this.suspendedLanes = B, this.pingedLanes = B, this.expiredLanes = B, this.mutableReadLanes = B, this.finishedLanes = B, this.entangledLanes = B, this.entanglements = Es(B), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < vs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Lh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Oo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function C1(e, t, a, i, u, s, f, p, v, y) {
      var g = new S_(e, t, a, p, v), b = p_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return hg(b), g;
    }
    var r0 = "18.3.1";
    function E_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $r(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: br,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function R1(e) {
      if (!e)
        return ui;
      var t = Ma(e), a = nw(t);
      if (t.tag === de) {
        var i = t.type;
        if (Al(i))
          return q0(t, i, a);
      }
      return a;
    }
    function C_(e, t) {
      {
        var a = Ma(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Aa(a);
        if (u === null)
          return null;
        if (u.mode & ct) {
          var s = Ie(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = mn;
            try {
              jt(u), a.mode & ct ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? jt(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function T1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return C1(e, t, v, y, a, i, u, s, f);
    }
    function w1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = C1(a, i, g, e, u, s, f, p, v);
      b.context = R1(null);
      var w = b.current, M = wa(), U = Po(w), j = wu(M, U);
      return j.callback = t ?? null, No(w, j, U), Db(b, U, M), b;
    }
    function Pp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = wa(), f = Po(u);
      Cd(f);
      var p = R1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && mn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(mn) || "Unknown"));
      var v = wu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (pr(y, u, f, s), Qh(y, u, f)), f;
    }
    function Um(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function R_(e) {
      switch (e.tag) {
        case re: {
          var t = e.stateNode;
          if (Yc(t)) {
            var a = wd(t);
            Mb(t, a);
          }
          break;
        }
        case ke: {
          Du(function() {
            var u = Qa(e, De);
            if (u !== null) {
              var s = wa();
              pr(u, e, De, s);
            }
          });
          var i = De;
          l0(e, i);
          break;
        }
      }
    }
    function x1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = $v(a.retryLane, t));
    }
    function l0(e, t) {
      x1(e, t);
      var a = e.alternate;
      a && x1(a, t);
    }
    function T_(e) {
      if (e.tag === ke) {
        var t = ms, a = Qa(e, t);
        if (a !== null) {
          var i = wa();
          pr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function w_(e) {
      if (e.tag === ke) {
        var t = Po(e), a = Qa(e, t);
        if (a !== null) {
          var i = wa();
          pr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function b1(e) {
      var t = xv(e);
      return t === null ? null : t.stateNode;
    }
    var _1 = function(e) {
      return null;
    };
    function x_(e) {
      return _1(e);
    }
    var D1 = function(e) {
      return !1;
    };
    function b_(e) {
      return D1(e);
    }
    var k1 = null, O1 = null, L1 = null, M1 = null, N1 = null, z1 = null, U1 = null, A1 = null, F1 = null;
    {
      var j1 = function(e, t, a) {
        var i = t[a], u = St(e) ? e.slice() : nt({}, e);
        return a + 1 === t.length ? (St(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = j1(e[i], t, a + 1), u);
      }, H1 = function(e, t) {
        return j1(e, t, 0);
      }, V1 = function(e, t, a, i) {
        var u = t[i], s = St(e) ? e.slice() : nt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], St(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = V1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, P1 = function(e, t, a) {
        if (t.length !== a.length) {
          lt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              lt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return V1(e, t, a, 0);
      }, B1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = St(e) ? e.slice() : nt({}, e);
        return s[u] = B1(e[u], t, a + 1, i), s;
      }, $1 = function(e, t, a) {
        return B1(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      k1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = $1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Qa(e, De);
          f !== null && pr(f, e, De, en);
        }
      }, O1 = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = H1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = nt({}, e.memoizedProps);
          var s = Qa(e, De);
          s !== null && pr(s, e, De, en);
        }
      }, L1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = P1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Qa(e, De);
          f !== null && pr(f, e, De, en);
        }
      }, M1 = function(e, t, a) {
        e.pendingProps = $1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, De);
        i !== null && pr(i, e, De, en);
      }, N1 = function(e, t) {
        e.pendingProps = H1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, De);
        a !== null && pr(a, e, De, en);
      }, z1 = function(e, t, a) {
        e.pendingProps = P1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, De);
        i !== null && pr(i, e, De, en);
      }, U1 = function(e) {
        var t = Qa(e, De);
        t !== null && pr(t, e, De, en);
      }, A1 = function(e) {
        _1 = e;
      }, F1 = function(e) {
        D1 = e;
      };
    }
    function __(e) {
      var t = Aa(e);
      return t === null ? null : t.stateNode;
    }
    function D_(e) {
      return null;
    }
    function k_() {
      return mn;
    }
    function O_(e) {
      var t = e.findFiberByHostInstance, a = F.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: k1,
        overrideHookStateDeletePath: O1,
        overrideHookStateRenamePath: L1,
        overrideProps: M1,
        overridePropsDeletePath: N1,
        overridePropsRenamePath: z1,
        setErrorHandler: A1,
        setSuspenseHandler: F1,
        scheduleUpdate: U1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: __,
        findFiberByHostInstance: t || D_,
        // React Refresh
        findHostInstancesForRefresh: l_,
        scheduleRefresh: a_,
        scheduleRoot: i_,
        setRefreshHandler: r_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: k_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var Y1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Am.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Fm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = b1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Pp(e, t, null, null);
    }, Am.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        n1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Du(function() {
          Pp(null, e, null, null);
        }), Y0(t);
      }
    };
    function L_(e, t) {
      if (!Fm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      I1(e);
      var a = !1, i = !1, u = "", s = Y1;
      t != null && (t.hydrate ? lt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ja && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = T1(e, Lh, null, a, i, u, s);
      wh(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
      return Wd(p), new o0(f);
    }
    function Am(e) {
      this._internalRoot = e;
    }
    function M_(e) {
      e && cy(e);
    }
    Am.prototype.unstable_scheduleHydration = M_;
    function N_(e, t, a) {
      if (!Fm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      I1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = Y1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = w1(t, null, e, Lh, i, s, f, p, v);
      if (wh(y.current, e), Wd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Fw(y, b);
        }
      return new Am(y);
    }
    function Fm(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === ri || e.nodeType === ql || !V));
    }
    function Bp(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === ri || e.nodeType === ql || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function I1(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), ap(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var z_ = F.ReactCurrentOwner, Q1;
    Q1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = b1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === ri ? e.documentElement : e.firstChild : null;
    }
    function W1() {
    }
    function U_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Um(f);
            s.call(w);
          };
        }
        var f = w1(
          t,
          i,
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          W1
        );
        e._reactRootContainer = f, wh(f.current, e);
        var p = e.nodeType === Un ? e.parentNode : e;
        return Wd(p), Du(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Um(g);
            y.call(w);
          };
        }
        var g = T1(
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          W1
        );
        e._reactRootContainer = g, wh(g.current, e);
        var b = e.nodeType === Un ? e.parentNode : e;
        return Wd(b), Du(function() {
          Pp(t, g, a, i);
        }), g;
      }
    }
    function A_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function jm(e, t, a, i, u) {
      Q1(a), A_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = U_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Um(f);
            p.call(v);
          };
        }
        Pp(t, f, e, u);
      }
      return Um(f);
    }
    var G1 = !1;
    function F_(e) {
      {
        G1 || (G1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = z_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : C_(e, "findDOMNode");
    }
    function j_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ap(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return jm(null, e, t, !0, a);
    }
    function H_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ap(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return jm(null, e, t, !1, a);
    }
    function V_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !us(e))
        throw new Error("parentComponent must be a valid React Component");
      return jm(e, t, a, !1, i);
    }
    var q1 = !1;
    function P_(e) {
      if (q1 || (q1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Bp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = ap(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Du(function() {
          jm(null, null, e, !1, function() {
            e._reactRootContainer = null, Y0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && Do(u)), f = e.nodeType === qr && Bp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    vo(R_), oy(T_), Qc(w_), Qv(Va), Wv(Rr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Rv($R), sc(VS, Nb, Du);
    function B_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Fm(t))
        throw new Error("Target container is not a DOM element.");
      return E_(e, t, null, a);
    }
    function $_(e, t, a, i) {
      return V_(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, mf, xh, oc, as, VS]
    };
    function Y_(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), L_(e, t);
    }
    function I_(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), N_(e, t, a);
    }
    function Q_(e) {
      return n1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Du(e);
    }
    var W_ = O_({
      findFiberByHostInstance: zs,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!W_ && pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var X1 = window.location.protocol;
      /^(https?|file):$/.test(X1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (X1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Ka.createPortal = B_, Ka.createRoot = Y_, Ka.findDOMNode = F_, Ka.flushSync = Q_, Ka.hydrate = j_, Ka.hydrateRoot = I_, Ka.render = H_, Ka.unmountComponentAtNode = P_, Ka.unstable_batchedUpdates = VS, Ka.unstable_renderSubtreeIntoContainer = $_, Ka.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ka;
}
function uR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uR);
    } catch (J) {
      console.error(J);
    }
  }
}
process.env.NODE_ENV === "production" ? (uR(), h0.exports = aD()) : h0.exports = iD();
var lD = h0.exports, Qp = lD;
if (process.env.NODE_ENV === "production")
  Gp.createRoot = Qp.createRoot, Gp.hydrateRoot = Qp.hydrateRoot;
else {
  var Vm = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Gp.createRoot = function(J, Z) {
    Vm.usingClientEntryPoint = !0;
    try {
      return Qp.createRoot(J, Z);
    } finally {
      Vm.usingClientEntryPoint = !1;
    }
  }, Gp.hydrateRoot = function(J, Z, F) {
    Vm.usingClientEntryPoint = !0;
    try {
      return Qp.hydrateRoot(J, Z, F);
    } finally {
      Vm.usingClientEntryPoint = !1;
    }
  };
}
const uD = ({ name: J }) => /* @__PURE__ */ Pm.jsxs("h1", { children: [
  "Hello, ",
  J,
  "!"
] });
function oD() {
  return /* @__PURE__ */ Pm.jsx(uD, { name: "sdfsdfsa" });
}
Gp.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Pm.jsx(J_.StrictMode, { children: /* @__PURE__ */ Pm.jsx(oD, {}) })
);
