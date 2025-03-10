!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).faceapi = t.faceapi || {})
}(this, function (c) {
    "use strict";
    var r = function (t, e) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        })(t, e)
    };

    function t(t, e) {
        function n() {
            this.constructor = t
        }

        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }

    function y(i, a, s, u) {
        return new (s = s || Promise)(function (t, e) {
            function n(t) {
                try {
                    o(u.next(t))
                } catch (t) {
                    e(t)
                }
            }

            function r(t) {
                try {
                    o(u.throw(t))
                } catch (t) {
                    e(t)
                }
            }

            function o(e) {
                e.done ? t(e.value) : new s(function (t) {
                    t(e.value)
                }).then(n, r)
            }

            o((u = u.apply(i, a || [])).next())
        })
    }

    function R(n, r) {
        var o, i, a, t, s = {
            label: 0, sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1]
            }, trys: [], ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (t[Symbol.iterator] = function () {
            return this
        }), t;

        function e(e) {
            return function (t) {
                return function (e) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                        switch (i = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                            case 0:
                            case 1:
                                a = e;
                                break;
                            case 4:
                                return s.label++, {value: e[1], done: !1};
                            case 5:
                                s.label++, i = e[1], e = [0];
                                continue;
                            case 7:
                                e = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                    s.label = e[1];
                                    break
                                }
                                if (6 === e[0] && s.label < a[1]) {
                                    s.label = a[1], a = e;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(e);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        e = r.call(n, s)
                    } catch (t) {
                        e = [6, t], i = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & e[0]) throw e[1];
                    return {value: e[0] ? e[1] : void 0, done: !0}
                }([e, t])
            }
        }
    }

    var o = (e.prototype.setPlatform = function (t, e) {
        null != this.platform && console.warn("Platform " + this.platformName + " has already been set. Overwriting the platform with " + e + "."), this.platformName = t, this.platform = e
    }, e.prototype.registerFlag = function (t, e, n) {
        if (this.flagRegistry[t] = {evaluationFn: e, setHook: n}, null != this.urlFlags[t]) {
            var r = this.urlFlags[t];
            console.warn("Setting feature override from URL " + t + ": " + r + "."), this.set(t, r)
        }
    }, e.prototype.get = function (t) {
        return t in this.flags || (this.flags[t] = this.evaluateFlag(t)), this.flags[t]
    }, e.prototype.getNumber = function (t) {
        return this.get(t)
    }, e.prototype.getBool = function (t) {
        return this.get(t)
    }, e.prototype.getFlags = function () {
        return this.flags
    }, Object.defineProperty(e.prototype, "features", {
        get: function () {
            return this.flags
        }, enumerable: !0, configurable: !0
    }), e.prototype.set = function (t, e) {
        if (null == this.flagRegistry[t]) throw new Error("Cannot set flag " + t + " as it has not been registered.");
        this.flags[t] = e, null != this.flagRegistry[t].setHook && this.flagRegistry[t].setHook(e)
    }, e.prototype.evaluateFlag = function (t) {
        if (null == this.flagRegistry[t]) throw new Error("Cannot evaluate flag '" + t + "': no evaluation function found.");
        return this.flagRegistry[t].evaluationFn()
    }, e.prototype.setFlags = function (t) {
        this.flags = Object.assign({}, t)
    }, e.prototype.reset = function () {
        this.flags = {}, this.urlFlags = {}, this.populateURLFlags()
    }, e.prototype.populateURLFlags = function () {
        var o = this;
        if (void 0 !== this.global && void 0 !== this.global.location && void 0 !== this.global.location.search) {
            var t, r,
                e = (t = this.global.location.search, r = {}, t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function (t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return function (t, e, n) {
                        t[decodeURIComponent(e)] = decodeURIComponent(n || "")
                    }(r, e[0], e[1]), e.join("=")
                }), r);
            "tfjsflags" in e && e.tfjsflags.split(",").forEach(function (t) {
                var e = t.split(":"), n = e[0], r = e[1];
                o.urlFlags[n] = function (t, e) {
                    if ("true" === (e = e.toLowerCase()) || "false" === e) return "true" === e;
                    if ("" + +e === e) return +e;
                    throw new Error("Could not parse value flag value " + e + " for flag " + t + ".")
                }(n, r)
            })
        }
    }, e);

    function e(t) {
        this.global = t, this.flags = {}, this.flagRegistry = {}, this.urlFlags = {}, this.populateURLFlags()
    }

    function _() {
        return i
    }

    var i = null, u = new Map, n = new Map;

    function g(t, e) {
        var n = f(t, e);
        return u.get(n)
    }

    function l(t) {
        return n.get(t)
    }

    function a(t) {
        for (var e = u.entries(), n = []; ;) {
            var r = e.next(), o = r.done, i = r.value;
            if (o) break;
            var a = i[0], s = i[1];
            a.split("_")[0] === t && n.push(s)
        }
        return n
    }

    function s(t) {
        var e = t.kernelName, n = t.backendName, r = f(e, n);
        if (u.has(r)) throw new Error("The kernel '" + e + "' for backend '" + n + "' is already registered");
        u.set(r, t)
    }

    function h(t) {
        var e = t.kernelName;
        n.has(e) && console.warn("Overriding the gradient for '" + e + "'"), n.set(e, t)
    }

    function f(t, e) {
        return e + "_" + t
    }

    function p(t) {
        for (var e = t.length, n = 0, r = 0; 0 < e;) r = Math.random() * e | 0, n = t[--e], t[e] = t[r], t[r] = n
    }

    function d(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }

    function E(t) {
        return t % 2 == 0 ? t : t + 1
    }

    function v(t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n];
        return e
    }

    function P(t, e) {
        if (!t) throw new Error("string" == typeof e ? e : e())
    }

    function x(t, e, n) {
        void 0 === n && (n = ""), P(A(t, e), function () {
            return n + " Shapes " + t + " and " + e + " must match"
        })
    }

    function m(t) {
        P(null != t, function () {
            return "The input to the tensor constructor must be a non-null value."
        })
    }

    function b(t, e, n) {
        if (void 0 === e && (e = []), void 0 === n && (n = !1), null == e && (e = []), Array.isArray(t) || z(t) && !n) for (var r = 0; r < t.length; ++r) b(t[r], e, n); else e.push(t);
        return e
    }

    function L(t) {
        if (0 === t.length) return 1;
        for (var e = t[0], n = 1; n < t.length; n++) e *= t[n];
        return e
    }

    function A(t, e) {
        if (t === e) return !0;
        if (null == t || null == e) return !1;
        if (t.length !== e.length) return !1;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
        return !0
    }

    function B(t) {
        return t % 1 == 0
    }

    function w(t) {
        if (null != Math.tanh) return Math.tanh(t);
        if (t === 1 / 0) return 1;
        if (t === -1 / 0) return -1;
        var e = Math.exp(2 * t);
        return (e - 1) / (e + 1)
    }

    function C(t) {
        var e = Math.ceil(Math.sqrt(t));
        return [e, Math.ceil(t / e)]
    }

    function I(t, e) {
        return e <= t.length ? t : t + " ".repeat(e - t.length)
    }

    function k(i, a, s) {
        return void 0 === a && (a = function (t) {
            return 0
        }), new Promise(function (e, n) {
            var r = 0, o = function () {
                if (i()) e(); else {
                    var t = a(++r);
                    null != s && s <= r ? n() : setTimeout(o, t)
                }
            };
            o()
        })
    }

    function S(t, e) {
        for (var n = 1, r = -1, o = 0; o < t.length; ++o) if (0 <= t[o]) n *= t[o]; else if (-1 === t[o]) {
            if (-1 !== r) throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + r + " and dim " + o);
            r = o
        } else if (t[o] < 0) throw Error("Shapes can not be < 0. Found " + t[o] + " at dim " + o);
        if (-1 === r) {
            if (0 < e && e !== n) throw Error("Size(" + e + ") must match the product of shape " + t);
            return t
        }
        if (0 === n) throw Error("Cannot infer the missing size in [" + t + "] when there are 0 elements");
        if (e % n != 0) throw Error("The implicit shape can't be a fractional number. Got " + e + " / " + n);
        var i = t.slice();
        return i[r] = e / n, i
    }

    function D(t, e) {
        var n = e.length;
        return P((t = null == t ? e.map(function (t, e) {
            return e
        }) : [].concat(t)).every(function (t) {
            return -n <= t && t < n
        }), function () {
            return "All values in axis param must be in range [-" + n + ", " + n + ") but got axis " + t
        }), P(t.every(function (t) {
            return B(t)
        }), function () {
            return "All values in axis param must be integers but got axis " + t
        }), t.map(function (t) {
            return t < 0 ? n + t : t
        })
    }

    function T(t, e) {
        for (var n = [], r = [], o = null != e && Array.isArray(e) && 0 === e.length, i = null == e || o ? null : D(e, t).sort(), a = 0, s = 0; s < t.length; ++s) {
            if (null != i) {
                if (i[a] === s && 1 !== t[s]) throw new Error("Can't squeeze axis " + s + " since its dim '" + t[s] + "' is not 1");
                (null == i[a] || i[a] > s) && 1 === t[s] && (n.push(t[s]), r.push(s)), i[a] <= s && a++
            }
            1 !== t[s] && (n.push(t[s]), r.push(s))
        }
        return {newShape: n, keptDims: r}
    }

    function N(t, e) {
        var n = null;
        if (null == t || "float32" === t) n = new Float32Array(e); else if ("int32" === t) n = new Int32Array(e); else {
            if ("bool" !== t) throw new Error("Unknown data type " + t);
            n = new Uint8Array(e)
        }
        return n
    }

    function F(t, e) {
        var n = null;
        if (null == t || "float32" === t) n = new Float32Array(e); else if ("int32" === t) n = new Int32Array(e); else if ("bool" === t) n = new Uint8Array(e); else {
            if ("string" !== t) throw new Error("Unknown data type " + t);
            n = new Array(e)
        }
        return n
    }

    function M(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (isNaN(r) || !isFinite(r)) throw Error("A tensor of type " + e + " being uploaded contains " + r + ".")
        }
    }

    function O(t) {
        return "bool" === t || "complex64" === t || "float32" === t || "int32" === t || "string" === t
    }

    function W(t, e) {
        return !("complex64" === e || "float32" === e && "complex64" !== t || "int32" === e && "float32" !== t && "complex64" !== t || "bool" === e && "bool" === t)
    }

    function z(t) {
        return t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array
    }

    function U(t) {
        if ("float32" === t || "int32" === t) return 4;
        if ("complex64" === t) return 8;
        if ("bool" === t) return 1;
        throw new Error("Unknown dtype " + t)
    }

    function V(t) {
        if (null == t) return 0;
        var e = 0;
        return t.forEach(function (t) {
            return e += t.length
        }), e
    }

    function G(t) {
        return "string" == typeof t || t instanceof String
    }

    function H(t) {
        return "boolean" == typeof t
    }

    function q(t) {
        return "number" == typeof t
    }

    function j(t) {
        return Array.isArray(t) ? j(t[0]) : t instanceof Float32Array ? "float32" : t instanceof Int32Array || t instanceof Uint8Array ? "int32" : q(t) ? "float32" : G(t) ? "string" : H(t) ? "bool" : "float32"
    }

    function K(t) {
        return !!(t && t.constructor && t.call && t.apply)
    }

    function X(t, e) {
        for (var n = e; n < t; ++n) if (t % n == 0) return n;
        return t
    }

    function Y(t) {
        var e = t.length;
        if (e < 2) return [];
        var n = new Array(e - 1);
        n[e - 2] = t[e - 1];
        for (var r = e - 3; 0 <= r; --r) n[r] = n[r + 1] * t[r + 1];
        return n
    }

    function $(t, e, n) {
        if ("string" === e) throw new Error("Cannot convert a string[] to a TypedArray");
        if (Array.isArray(t) && (t = b(t)), n && M(t, e), t instanceof Float32Array && "float32" === e || t instanceof Int32Array && "int32" === e || t instanceof Uint8Array && "bool" === e) return t;
        if (null == e || "float32" === e || "complex64" === e) return new Float32Array(t);
        if ("int32" === e) return new Int32Array(t);
        if ("bool" !== e) throw new Error("Unknown data type " + e);
        for (var r = new Uint8Array(t.length), o = 0; o < r.length; ++o) 0 !== Math.round(t[o]) && (r[o] = 1);
        return r
    }

    function J(t, e) {
        if (0 === t.length) return e[0];
        var n = t.reduce(function (t, e) {
            return t * e
        });
        if (0 === n) return [];
        if (n !== e.length) throw new Error("[" + t + "] does not match the input size.");
        return function t(e, n, r) {
            var o = new Array;
            if (1 === n.length) for (var i = n[0], a = 0; a < i; a++) o[a] = r[e + a]; else {
                i = n[0];
                var s = n.slice(1), u = s.reduce(function (t, e) {
                    return t * e
                });
                for (a = 0; a < i; a++) o[a] = t(e + a * u, s, r)
            }
            return o
        }(0, t, e)
    }

    function Q(t, e) {
        for (var n = Z(t, e), r = 0; r < n.length; r++) n[r] = 1;
        return n
    }

    function Z(t, e) {
        if (null == e || "float32" === e || "complex64" === e) return new Float32Array(t);
        if ("int32" === e) return new Int32Array(t);
        if ("bool" === e) return new Uint8Array(t);
        throw new Error("Unknown data type " + e)
    }

    function tt() {
        return _().platform.now()
    }

    function et(e) {
        e.forEach(function (t) {
            P(Number.isInteger(t) && 0 <= t, function () {
                return "Tensor must have a shape comprised of positive integers but got shape [" + e + "]."
            })
        })
    }

    function nt(t, e) {
        return void 0 === e && (e = "utf-8"), e = e || "utf-8", _().platform.encode(t, e)
    }

    function rt(t, e) {
        return void 0 === e && (e = "utf-8"), e = e || "utf-8", _().platform.decode(t, e)
    }

    function ot(t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return t[0];
        for (var r = t[t.length - 1], o = 0; o < t.length - 1; ++o) r += n[o] * t[o];
        return r
    }

    function it(t, e, n) {
        if (0 === e) return [];
        if (1 === e) return [t];
        for (var r = new Array(e), o = 0; o < r.length - 1; ++o) r[o] = Math.floor(t / n[o]), t -= r[o] * n[o];
        return r[r.length - 1] = t, r
    }

    var at = Object.freeze({
        shuffle: p,
        clamp: d,
        nearestLargerEven: E,
        sum: v,
        randUniform: function (t, e) {
            var n = Math.random();
            return e * n + (1 - n) * t
        },
        distSquared: function (t, e) {
            for (var n = 0, r = 0; r < t.length; r++) {
                var o = Number(t[r]) - Number(e[r]);
                n += o * o
            }
            return n
        },
        assert: P,
        assertShapesMatch: x,
        assertNonNull: m,
        flatten: b,
        sizeFromShape: L,
        isScalarShape: function (t) {
            return 0 === t.length
        },
        arraysEqual: A,
        isInt: B,
        tanh: w,
        sizeToSquarishShape: C,
        createShuffledIndices: function (t) {
            for (var e = new Uint32Array(t), n = 0; n < t; ++n) e[n] = n;
            return p(e), e
        },
        rightPad: I,
        repeatedTry: k,
        inferFromImplicitShape: S,
        parseAxisParam: D,
        squeezeShape: T,
        getTypedArrayFromDType: N,
        getArrayFromDType: F,
        checkConversionForErrors: M,
        isValidDtype: O,
        hasEncodingLoss: W,
        isTypedArray: z,
        bytesPerElement: U,
        bytesFromStringArray: V,
        isString: G,
        isBoolean: H,
        isNumber: q,
        inferDtype: j,
        isFunction: K,
        nearestDivisor: X,
        computeStrides: Y,
        toTypedArray: $,
        toNestedArray: J,
        makeOnesTypedArray: Q,
        makeZerosTypedArray: Z,
        now: tt,
        assertNonNegativeIntegerDimensions: et,
        fetch: function (t, e) {
            return _().platform.fetch(t, e)
        },
        encodeString: nt,
        decodeString: rt,
        locToIndex: ot,
        indexToLoc: it
    }), st = (ut.prototype.profileKernel = function (o, i, t) {
        var e, a = this, s = this.backendTimer.time(function () {
            e = t()
        });
        return e.forEach(function (r) {
            r.data().then(function (n) {
                !function (t, e, n) {
                    if ("float32" === e) for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        if (isNaN(o) || !isFinite(o)) return console.warn("Found " + o + " in the result of '" + n + "'")
                    }
                }(n, r.dtype, o), s.then(function (t) {
                    var e = "";
                    null != t.getExtraProfileInfo && (e = t.getExtraProfileInfo()), a.logger.logKernelProfile(o, r, n, t.kernelMs, i, e)
                })
            })
        }), e
    }, ut);

    function ut(t, e) {
        this.backendTimer = t, null == (this.logger = e) && (this.logger = new ct)
    }

    var ct = (lt.prototype.logKernelProfile = function (t, e, n, r, o, i) {
        var a = "number" == typeof r ? I(r + "ms", 9) : r.error, s = I(t, 25), u = e.rank, c = e.size,
            l = I(e.shape.toString(), 14), h = "";
        for (var f in o) {
            var p = o[f].shape || e.shape, d = p.length;
            h += f + ": " + d + "D " + (0 < d ? p : "") + " "
        }
        console.log("%c" + s + "\t%c" + a + "\t%c" + u + "D " + l + "\t%c" + c + "\t%c" + h + "\t%c" + i, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue")
    }, lt);

    function lt() {
    }

    var ht = 7;

    function ft(t, e, n) {
        return I(Array.isArray(t) ? parseFloat(t[0].toFixed(ht)) + " + " + parseFloat(t[1].toFixed(ht)) + "j" : G(t) ? "'" + t + "'" : "bool" === n ? pt(t) : parseFloat(t.toFixed(ht)).toString(), e)
    }

    function pt(t) {
        return 0 === t ? "false" : "true"
    }

    function dt(t) {
        for (var e = [], n = 0; n < t.length; n += 2) e.push([t[n], t[n + 1]]);
        return e
    }

    var vt = (xt.prototype.set = function (t) {
        for (var e = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        0 === n.length && (n = [0]), P(n.length === this.rank, function () {
            return "The number of provided coordinates (" + n.length + ") must match the rank (" + e.rank + ")"
        });
        var o = this.locToIndex(n);
        this.values[o] = t
    }, xt.prototype.get = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        0 === t.length && (t = [0]);
        for (var n = 0, r = 0, o = t; r < o.length; r++) {
            var i = o[r];
            if (i < 0 || i >= this.shape[n]) {
                var a = "Requested out of range element at " + t + ".   Buffer shape=" + this.shape;
                throw new Error(a)
            }
            n++
        }
        for (var s = t[t.length - 1], u = 0; u < t.length - 1; ++u) s += this.strides[u] * t[u];
        return this.values[s]
    }, xt.prototype.locToIndex = function (t) {
        if (0 === this.rank) return 0;
        if (1 === this.rank) return t[0];
        for (var e = t[t.length - 1], n = 0; n < t.length - 1; ++n) e += this.strides[n] * t[n];
        return e
    }, xt.prototype.indexToLoc = function (t) {
        if (0 === this.rank) return [];
        if (1 === this.rank) return [t];
        for (var e = new Array(this.shape.length), n = 0; n < e.length - 1; ++n) e[n] = Math.floor(t / this.strides[n]), t -= e[n] * this.strides[n];
        return e[e.length - 1] = t, e
    }, Object.defineProperty(xt.prototype, "rank", {
        get: function () {
            return this.shape.length
        }, enumerable: !0, configurable: !0
    }), xt.prototype.toTensor = function () {
        return mt().makeTensor(this.values, this.shape, this.dtype)
    }, xt), mt = null, gt = null, yt = null;

    function xt(t, e, n) {
        var r = this;
        if (this.dtype = e, this.shape = t.slice(), this.size = L(t), null != n) {
            var o = n.length;
            P(o === this.size, function () {
                return "Length of values '" + o + "' does not match the size inferred by the shape '" + r.size + "'."
            })
        }
        if ("complex64" === e) throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
        this.values = n || F(e, this.size), this.strides = Y(t)
    }

    var bt = (wt.prototype.flatten = function () {
        return this.throwIfDisposed(), this.as1D()
    }, wt.prototype.asScalar = function () {
        return this.throwIfDisposed(), P(1 === this.size, function () {
            return "The array must have only 1 element."
        }), this.reshape([])
    }, wt.prototype.as1D = function () {
        return this.throwIfDisposed(), this.reshape([this.size])
    }, wt.prototype.as2D = function (t, e) {
        return this.throwIfDisposed(), this.reshape([t, e])
    }, wt.prototype.as3D = function (t, e, n) {
        return this.throwIfDisposed(), this.reshape([t, e, n])
    }, wt.prototype.as4D = function (t, e, n, r) {
        return this.throwIfDisposed(), this.reshape([t, e, n, r])
    }, wt.prototype.as5D = function (t, e, n, r, o) {
        return this.throwIfDisposed(), this.reshape([t, e, n, r, o])
    }, wt.prototype.asType = function (t) {
        return this.throwIfDisposed(), gt.cast(this, t)
    }, Object.defineProperty(wt.prototype, "rank", {
        get: function () {
            return this.shape.length
        }, enumerable: !0, configurable: !0
    }), wt.prototype.buffer = function () {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.data()];
                    case 1:
                        return e = t.sent(), [2, gt.buffer(this.shape, this.dtype, e)]
                }
            })
        })
    }, wt.prototype.bufferSync = function () {
        return gt.buffer(this.shape, this.dtype, this.dataSync())
    }, wt.prototype.array = function () {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.data()];
                    case 1:
                        return e = t.sent(), [2, J(this.shape, e)]
                }
            })
        })
    }, wt.prototype.arraySync = function () {
        return J(this.shape, this.dataSync())
    }, wt.prototype.data = function () {
        return y(this, void 0, void 0, function () {
            var e, n;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return this.throwIfDisposed(), e = mt().read(this.dataId), "string" !== this.dtype ? [3, 2] : [4, e];
                    case 1:
                        n = t.sent();
                        try {
                            return [2, n.map(function (t) {
                                return rt(t)
                            })]
                        } catch (t) {
                            throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")
                        }
                        t.label = 2;
                    case 2:
                        return [2, e]
                }
            })
        })
    }, wt.prototype.dataSync = function () {
        this.throwIfDisposed();
        var t = mt().readSync(this.dataId);
        if ("string" === this.dtype) try {
            return t.map(function (t) {
                return rt(t)
            })
        } catch (t) {
            throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")
        }
        return t
    }, wt.prototype.bytes = function () {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return this.throwIfDisposed(), [4, mt().read(this.dataId)];
                    case 1:
                        return e = t.sent(), "string" === this.dtype ? [2, e] : [2, new Uint8Array(e.buffer)]
                }
            })
        })
    }, wt.prototype.dispose = function () {
        this.isDisposed || (mt().disposeTensor(this), this.isDisposedInternal = !0)
    }, Object.defineProperty(wt.prototype, "isDisposed", {
        get: function () {
            return this.isDisposedInternal
        }, enumerable: !0, configurable: !0
    }), wt.prototype.throwIfDisposed = function () {
        if (this.isDisposed) throw new Error("Tensor is disposed.")
    }, wt.prototype.toFloat = function () {
        return this.asType("float32")
    }, wt.prototype.toInt = function () {
        return this.asType("int32")
    }, wt.prototype.toBool = function () {
        return this.asType("bool")
    }, wt.prototype.print = function (t) {
        return void 0 === t && (t = !1), gt.print(this, t)
    }, wt.prototype.reshape = function (t) {
        return this.throwIfDisposed(), gt.reshape(this, t)
    }, wt.prototype.reshapeAs = function (t) {
        return this.throwIfDisposed(), this.reshape(t.shape)
    }, wt.prototype.expandDims = function (t) {
        return void 0 === t && (t = 0), gt.expandDims(this, t)
    }, wt.prototype.cumsum = function (t, e, n) {
        return void 0 === t && (t = 0), void 0 === e && (e = !1), void 0 === n && (n = !1), gt.cumsum(this, t, e, n)
    }, wt.prototype.squeeze = function (t) {
        return this.throwIfDisposed(), gt.squeeze(this, t)
    }, wt.prototype.clone = function () {
        return this.throwIfDisposed(), gt.clone(this)
    }, wt.prototype.oneHot = function (t, e, n) {
        return this.throwIfDisposed(), gt.oneHot(this, t, e, n)
    }, wt.prototype.toString = function (t) {
        return void 0 === t && (t = !1), function (t, e, n, r) {
            var o = Y(e), i = function (t, e, n, r) {
                var o = L(e), i = r[r.length - 1], a = new Array(i).fill(0), s = e.length,
                    u = "complex64" === n ? dt(t) : t;
                if (1 < s) for (var c = 0; c < o / i; c++) for (var l = c * i, h = 0; h < i; h++) a[h] = Math.max(a[h], ft(u[l + h], 0, n).length);
                return a
            }(t, e, n, o), a = e.length, s = function t(e, n, r, o, i, a) {
                void 0 === a && (a = !0);
                var s = "complex64" === r ? 2 : 1, u = n[0], c = n.length;
                if (0 === c) return "complex64" === r ? [ft(dt(e)[0], 0, r)] : "bool" === r ? [pt(e[0])] : [e[0].toString()];
                if (1 === c) {
                    if (20 < u) {
                        var l = 3 * s, h = Array.from(e.slice(0, l)), f = Array.from(e.slice((u - 3) * s, u * s));
                        return "complex64" === r && (h = dt(h), f = dt(f)), ["[" + h.map(function (t, e) {
                            return ft(t, i[e], r)
                        }).join(", ") + ", ..., " + f.map(function (t, e) {
                            return ft(t, i[u - 3 + e], r)
                        }).join(", ") + "]"]
                    }
                    return ["[" + ("complex64" === r ? dt(e) : Array.from(e)).map(function (t, e) {
                        return ft(t, i[e], r)
                    }).join(", ") + "]"]
                }
                var p = n.slice(1), d = o.slice(1), v = o[0] * s, m = [];
                if (20 < u) {
                    for (var g = 0; g < 3; g++) {
                        var y = (x = g * v) + v;
                        m.push.apply(m, t(e.slice(x, y), p, r, d, i, !1))
                    }
                    for (m.push("..."), g = u - 3; g < u; g++) y = (x = g * v) + v, m.push.apply(m, t(e.slice(x, y), p, r, d, i, g === u - 1))
                } else for (g = 0; g < u; g++) {
                    var x;
                    y = (x = g * v) + v, m.push.apply(m, t(e.slice(x, y), p, r, d, i, g === u - 1))
                }
                var b = 2 === c ? "," : "";
                for (m[0] = "[" + m[0] + b, g = 1; g < m.length - 1; g++) m[g] = " " + m[g] + b;
                var w = ",\n";
                for (g = 2; g < c; g++) w += "\n";
                return m[m.length - 1] = " " + m[m.length - 1] + "]" + (a ? "" : w), m
            }(t, e, n, o, i), u = ["Tensor"];
            return r && (u.push("  dtype: " + n), u.push("  rank: " + a), u.push("  shape: [" + e + "]"), u.push("  values:")), u.push(s.map(function (t) {
                return "    " + t
            }).join("\n")), u.join("\n")
        }(this.dataSync(), this.shape, this.dtype, t)
    }, wt.prototype.tile = function (t) {
        return this.throwIfDisposed(), gt.tile(this, t)
    }, wt.prototype.gather = function (t, e) {
        return void 0 === e && (e = 0), this.throwIfDisposed(), gt.gather(this, t, e)
    }, wt.prototype.matMul = function (t, e, n) {
        return void 0 === e && (e = !1), void 0 === n && (n = !1), this.throwIfDisposed(), gt.matMul(this, t, e, n)
    }, wt.prototype.dot = function (t) {
        return this.throwIfDisposed(), gt.dot(this, t)
    }, wt.prototype.norm = function (t, e, n) {
        return void 0 === t && (t = "euclidean"), void 0 === e && (e = null), void 0 === n && (n = !1), this.throwIfDisposed(), gt.norm(this, t, e, n)
    }, wt.prototype.slice = function (t, e) {
        return this.throwIfDisposed(), gt.slice(this, t, e)
    }, wt.prototype.reverse = function (t) {
        return this.throwIfDisposed(), gt.reverse(this, t)
    }, wt.prototype.concat = function (t, e) {
        return void 0 === e && (e = 0), this.throwIfDisposed(), t instanceof wt && (t = [t]), gt.concat([this].concat(t), e)
    }, wt.prototype.split = function (t, e) {
        return void 0 === e && (e = 0), this.throwIfDisposed(), gt.split(this, t, e)
    }, wt.prototype.stack = function (t, e) {
        return void 0 === e && (e = 0), gt.stack([this, t], e)
    }, wt.prototype.unstack = function (t) {
        return void 0 === t && (t = 0), gt.unstack(this, t)
    }, wt.prototype.pad = function (t, e) {
        return void 0 === e && (e = 0), gt.pad(this, t, e)
    }, wt.prototype.batchNormalization = function (t, e, n, r, o) {
        return void 0 === n && (n = .001), yt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"), this.batchNorm(t, e, o, r, n)
    }, wt.prototype.batchNorm = function (t, e, n, r, o) {
        return void 0 === o && (o = .001), this.throwIfDisposed(), gt.batchNorm(this, t, e, n, r, o)
    }, wt.prototype.all = function (t, e) {
        return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.all(this, t, e)
    }, wt.prototype.any = function (t, e) {
        return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.any(this, t, e)
    }, wt.prototype.logSumExp = function (t, e) {
        return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.logSumExp(this, t, e)
    }, wt.prototype.sum = function (t, e) {
        return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.sum(this, t, e)
    }, wt.prototype.prod = function (t, e) {
        return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.prod(this, t, e)
    }, wt.prototype.mean = function (t, e) {
        return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.mean(this, t, e)
    }, wt.prototype.min = function (t, e) {
        return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.min(this, t, e)
    }, wt.prototype.max = function (t, e) {
        return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), gt.max(this, t, e)
    }, wt.prototype.argMin = function (t) {
        return void 0 === t && (t = null), this.throwIfDisposed(), gt.argMin(this, t)
    }, wt.prototype.argMax = function (t) {
        return void 0 === t && (t = null), this.throwIfDisposed(), gt.argMax(this, t)
    }, wt.prototype.cast = function (t) {
        return this.throwIfDisposed(), gt.cast(this, t)
    }, wt.prototype.add = function (t) {
        return this.throwIfDisposed(), gt.add(this, t)
    }, wt.prototype.addStrict = function (t) {
        return this.throwIfDisposed(), gt.addStrict(this, t)
    }, wt.prototype.atan2 = function (t) {
        return this.throwIfDisposed(), gt.atan2(this, t)
    }, wt.prototype.sub = function (t) {
        return this.throwIfDisposed(), gt.sub(this, t)
    }, wt.prototype.subStrict = function (t) {
        return this.throwIfDisposed(), gt.subStrict(this, t)
    }, wt.prototype.pow = function (t) {
        return this.throwIfDisposed(), gt.pow(this, t)
    }, wt.prototype.powStrict = function (t) {
        return this.throwIfDisposed(), gt.powStrict(this, t)
    }, wt.prototype.mul = function (t) {
        return this.throwIfDisposed(), gt.mul(this, t)
    }, wt.prototype.mulStrict = function (t) {
        return this.throwIfDisposed(), gt.mulStrict(this, t)
    }, wt.prototype.div = function (t) {
        return this.throwIfDisposed(), gt.div(this, t)
    }, wt.prototype.divNoNan = function (t) {
        return this.throwIfDisposed(), gt.divNoNan(this, t)
    }, wt.prototype.floorDiv = function (t) {
        return this.throwIfDisposed(), gt.floorDiv(this, t)
    }, wt.prototype.divStrict = function (t) {
        return this.throwIfDisposed(), gt.divStrict(this, t)
    }, wt.prototype.minimum = function (t) {
        return this.throwIfDisposed(), gt.minimum(this, t)
    }, wt.prototype.minimumStrict = function (t) {
        return this.throwIfDisposed(), gt.minimumStrict(this, t)
    }, wt.prototype.maximum = function (t) {
        return this.throwIfDisposed(), gt.maximum(this, t)
    }, wt.prototype.maximumStrict = function (t) {
        return this.throwIfDisposed(), gt.maximumStrict(this, t)
    }, wt.prototype.mod = function (t) {
        return this.throwIfDisposed(), gt.mod(this, t)
    }, wt.prototype.modStrict = function (t) {
        return this.throwIfDisposed(), gt.modStrict(this, t)
    }, wt.prototype.squaredDifferenceStrict = function (t) {
        return this.throwIfDisposed(), gt.squaredDifferenceStrict(this, t)
    }, wt.prototype.transpose = function (t) {
        return this.throwIfDisposed(), gt.transpose(this, t)
    }, wt.prototype.notEqual = function (t) {
        return this.throwIfDisposed(), gt.notEqual(this, t)
    }, wt.prototype.notEqualStrict = function (t) {
        return this.throwIfDisposed(), gt.notEqualStrict(this, t)
    }, wt.prototype.less = function (t) {
        return this.throwIfDisposed(), gt.less(this, t)
    }, wt.prototype.lessStrict = function (t) {
        return this.throwIfDisposed(), gt.lessStrict(this, t)
    }, wt.prototype.equal = function (t) {
        return this.throwIfDisposed(), gt.equal(this, t)
    }, wt.prototype.equalStrict = function (t) {
        return this.throwIfDisposed(), gt.equalStrict(this, t)
    }, wt.prototype.lessEqual = function (t) {
        return this.throwIfDisposed(), gt.lessEqual(this, t)
    }, wt.prototype.lessEqualStrict = function (t) {
        return this.throwIfDisposed(), gt.lessEqualStrict(this, t)
    }, wt.prototype.greater = function (t) {
        return this.throwIfDisposed(), gt.greater(this, t)
    }, wt.prototype.greaterStrict = function (t) {
        return this.throwIfDisposed(), gt.greaterStrict(this, t)
    }, wt.prototype.greaterEqual = function (t) {
        return this.throwIfDisposed(), gt.greaterEqual(this, t)
    }, wt.prototype.greaterEqualStrict = function (t) {
        return this.throwIfDisposed(), gt.greaterEqualStrict(this, t)
    }, wt.prototype.logicalAnd = function (t) {
        return this.throwIfDisposed(), gt.logicalAnd(this, t)
    }, wt.prototype.logicalOr = function (t) {
        return this.throwIfDisposed(), gt.logicalOr(this, t)
    }, wt.prototype.logicalNot = function () {
        return this.throwIfDisposed(), gt.logicalNot(this)
    }, wt.prototype.logicalXor = function (t) {
        return this.throwIfDisposed(), gt.logicalXor(this, t)
    }, wt.prototype.where = function (t, e) {
        return this.throwIfDisposed(), gt.where(t, this, e)
    }, wt.prototype.neg = function () {
        return this.throwIfDisposed(), gt.neg(this)
    }, wt.prototype.ceil = function () {
        return this.throwIfDisposed(), gt.ceil(this)
    }, wt.prototype.floor = function () {
        return this.throwIfDisposed(), gt.floor(this)
    }, wt.prototype.sign = function () {
        return this.throwIfDisposed(), gt.sign(this)
    }, wt.prototype.isNaN = function () {
        return this.throwIfDisposed(), gt.isNaN(this)
    }, wt.prototype.isInf = function () {
        return this.throwIfDisposed(), gt.isInf(this)
    }, wt.prototype.isFinite = function () {
        return this.throwIfDisposed(), gt.isFinite(this)
    },wt.prototype.exp = function () {
        return this.throwIfDisposed(), gt.exp(this)
    },wt.prototype.expm1 = function () {
        return this.throwIfDisposed(), gt.expm1(this)
    },wt.prototype.log = function () {
        return this.throwIfDisposed(), gt.log(this)
    },wt.prototype.log1p = function () {
        return this.throwIfDisposed(), gt.log1p(this)
    },wt.prototype.sqrt = function () {
        return this.throwIfDisposed(), gt.sqrt(this)
    },wt.prototype.rsqrt = function () {
        return this.throwIfDisposed(), gt.rsqrt(this)
    },wt.prototype.square = function () {
        return this.throwIfDisposed(), gt.square(this)
    },wt.prototype.reciprocal = function () {
        return this.throwIfDisposed(), gt.reciprocal(this)
    },wt.prototype.abs = function () {
        return this.throwIfDisposed(), gt.abs(this)
    },wt.prototype.clipByValue = function (t, e) {
        return this.throwIfDisposed(), gt.clipByValue(this, t, e)
    },wt.prototype.relu = function () {
        return this.throwIfDisposed(), gt.relu(this)
    },wt.prototype.relu6 = function () {
        return this.throwIfDisposed(), gt.relu6(this)
    },wt.prototype.elu = function () {
        return this.throwIfDisposed(), gt.elu(this)
    },wt.prototype.selu = function () {
        return this.throwIfDisposed(), gt.selu(this)
    },wt.prototype.leakyRelu = function (t) {
        return void 0 === t && (t = .2), this.throwIfDisposed(), gt.leakyRelu(this, t)
    },wt.prototype.prelu = function (t) {
        return this.throwIfDisposed(), gt.prelu(this, t)
    },wt.prototype.sigmoid = function () {
        return this.throwIfDisposed(), gt.sigmoid(this)
    },wt.prototype.logSigmoid = function () {
        return this.throwIfDisposed(), gt.logSigmoid(this)
    },wt.prototype.softplus = function () {
        return this.throwIfDisposed(), gt.softplus(this)
    },wt.prototype.zerosLike = function () {
        return this.throwIfDisposed(), gt.zerosLike(this)
    },wt.prototype.onesLike = function () {
        return this.throwIfDisposed(), gt.onesLike(this)
    },wt.prototype.sin = function () {
        return this.throwIfDisposed(), gt.sin(this)
    },wt.prototype.cos = function () {
        return this.throwIfDisposed(), gt.cos(this)
    },wt.prototype.tan = function () {
        return this.throwIfDisposed(), gt.tan(this)
    },wt.prototype.asin = function () {
        return this.throwIfDisposed(), gt.asin(this)
    },wt.prototype.acos = function () {
        return this.throwIfDisposed(), gt.acos(this)
    },wt.prototype.atan = function () {
        return this.throwIfDisposed(), gt.atan(this)
    },wt.prototype.sinh = function () {
        return this.throwIfDisposed(), gt.sinh(this)
    },wt.prototype.cosh = function () {
        return this.throwIfDisposed(), gt.cosh(this)
    },wt.prototype.tanh = function () {
        return this.throwIfDisposed(), gt.tanh(this)
    },wt.prototype.asinh = function () {
        return this.throwIfDisposed(), gt.asinh(this)
    },wt.prototype.acosh = function () {
        return this.throwIfDisposed(), gt.acosh(this)
    },wt.prototype.atanh = function () {
        return this.throwIfDisposed(), gt.atanh(this)
    },wt.prototype.erf = function () {
        return this.throwIfDisposed(), gt.erf(this)
    },wt.prototype.round = function () {
        return this.throwIfDisposed(), gt.round(this)
    },wt.prototype.step = function (t) {
        return void 0 === t && (t = 0), this.throwIfDisposed(), gt.step(this, t)
    },wt.prototype.softmax = function (t) {
        return void 0 === t && (t = -1), this.throwIfDisposed(), gt.softmax(this, t)
    },wt.prototype.logSoftmax = function (t) {
        return void 0 === t && (t = -1), this.throwIfDisposed(), gt.logSoftmax(this, t)
    },wt.prototype.resizeBilinear = function (t, e) {
        return void 0 === e && (e = !1), this.throwIfDisposed(), gt.image.resizeBilinear(this, t, e)
    },wt.prototype.resizeNearestNeighbor = function (t, e) {
        return void 0 === e && (e = !1), this.throwIfDisposed(), gt.image.resizeNearestNeighbor(this, t, e)
    },wt.prototype.conv1d = function (t, e, n, r, o, i) {
        return void 0 === r && (r = "NWC"), void 0 === o && (o = 1), this.throwIfDisposed(), gt.conv1d(this, t, e, n, r, o, i)
    },wt.prototype.conv2d = function (t, e, n, r, o, i) {
        return void 0 === r && (r = "NHWC"), void 0 === o && (o = [1, 1]), this.throwIfDisposed(), gt.conv2d(this, t, e, n, r, o, i)
    },wt.prototype.conv2dTranspose = function (t, e, n, r, o) {
        return this.throwIfDisposed(), gt.conv2dTranspose(this, t, e, n, r, o)
    },wt.prototype.depthwiseConv2D = function (t, e, n, r, o, i) {
        return void 0 === r && (r = "NHWC"), void 0 === o && (o = [1, 1]), this.throwIfDisposed(), gt.depthwiseConv2d(this, t, e, n, r, o, i)
    },wt.prototype.separableConv2d = function (t, e, n, r, o, i) {
        return void 0 === o && (o = [1, 1]), void 0 === i && (i = "NHWC"), this.throwIfDisposed(), gt.separableConv2d(this, t, e, n, r, o, i)
    },wt.prototype.avgPool = function (t, e, n, r) {
        return this.throwIfDisposed(), gt.avgPool(this, t, e, n, r)
    },wt.prototype.maxPool = function (t, e, n, r) {
        return this.throwIfDisposed(), gt.maxPool(this, t, e, n, r)
    },wt.prototype.localResponseNormalization = function (t, e, n, r) {
        return void 0 === t && (t = 5), void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === r && (r = .5), gt.localResponseNormalization(this, t, e, n, r)
    },wt.prototype.pool = function (t, e, n, r, o) {
        return this.throwIfDisposed(), gt.pool(this, t, e, n, r, o)
    },wt.prototype.variable = function (t, e, n) {
        return void 0 === t && (t = !0), this.throwIfDisposed(), mt().makeVariable(this, t, e, n)
    },wt.prototype.unsortedSegmentSum = function (t, e) {
        return this.throwIfDisposed(), gt.unsortedSegmentSum(this, t, e)
    },wt.prototype.batchToSpaceND = function (t, e) {
        return this.throwIfDisposed(), gt.batchToSpaceND(this, t, e)
    },wt.prototype.spaceToBatchND = function (t, e) {
        return this.throwIfDisposed(), gt.spaceToBatchND(this, t, e)
    },wt.prototype.topk = function (t, e) {
        return void 0 === t && (t = 1), void 0 === e && (e = !0), this.throwIfDisposed(), gt.topk(this, t, e)
    },wt.prototype.stridedSlice = function (t, e, n, r, o, i, a, s) {
        return void 0 === r && (r = 0), void 0 === o && (o = 0), void 0 === i && (i = 0), void 0 === a && (a = 0), void 0 === s && (s = 0), this.throwIfDisposed(), gt.stridedSlice(this, t, e, n, r, o, i, a, s)
    },wt.prototype.depthToSpace = function (t, e) {
        return this.throwIfDisposed(), gt.depthToSpace(this, t, e)
    },wt.prototype.fft = function () {
        return this.throwIfDisposed(), gt.spectral.fft(this)
    },wt.prototype.ifft = function () {
        return this.throwIfDisposed(), gt.spectral.ifft(this)
    },wt.prototype.rfft = function () {
        return this.throwIfDisposed(), gt.spectral.rfft(this)
    },wt.prototype.irfft = function () {
        return this.throwIfDisposed(), gt.spectral.irfft(this)
    },wt);

    function wt(t, e, n, r) {
        this.kept = !1, this.isDisposedInternal = !1, this.shape = t.slice(), this.dtype = e || "float32", this.size = L(t), this.strides = Y(t), this.dataId = n, this.id = r, this.rankType = this.rank < 5 ? this.rank.toString() : "higher"
    }

    Object.defineProperty(bt, Symbol.hasInstance, {
        value: function (t) {
            return !!t && null != t.dataId && null != t.shape && null != t.dtype
        }
    });
    var Ct, Et, _t, It, Rt, kt, St, Dt, At, Tt, Nt, Ft = (t(Mt, kt = bt), Mt.prototype.assign = function (t) {
        if (t.dtype !== this.dtype) throw new Error("dtype of the new value (" + t.dtype + ") and previous value (" + this.dtype + ") must match");
        if (!A(t.shape, this.shape)) throw new Error("shape of the new value (" + t.shape + ") and previous value (" + this.shape + ") must match");
        mt().disposeTensor(this), this.dataId = t.dataId, mt().incRef(this, null)
    }, Mt.prototype.dispose = function () {
        mt().disposeVariable(this), this.isDisposedInternal = !0
    }, Mt);

    function Mt(t, e, n, r) {
        var o = kt.call(this, t.shape, t.dtype, t.dataId, r) || this;
        return o.trainable = e, o.name = n, o
    }

    Object.defineProperty(Ft, Symbol.hasInstance, {
        value: function (t) {
            return t instanceof bt && null != t.assign && t.assign instanceof Function
        }
    }), (Nt = Ct = Ct || {}).R0 = "R0", Nt.R1 = "R1", Nt.R2 = "R2", Nt.R3 = "R3", Nt.R4 = "R4", Nt.R5 = "R5", Nt.R6 = "R6", (Tt = Et = Et || {}).float32 = "float32", Tt.int32 = "int32", Tt.bool = "int32", Tt.complex64 = "complex64", (At = _t = _t || {}).float32 = "float32", At.int32 = "int32", At.bool = "bool", At.complex64 = "complex64", (Dt = It = It || {}).float32 = "float32", Dt.int32 = "float32", Dt.bool = "float32", Dt.complex64 = "complex64", (St = Rt = Rt || {}).float32 = "complex64", St.int32 = "complex64", St.bool = "complex64", St.complex64 = "complex64";
    var Ot = {float32: It, int32: Et, bool: _t, complex64: Rt};

    function Pt(t, e) {
        if ("string" !== t && "string" !== e) return Ot[t][e];
        if ("string" === t && "string" === e) return "string";
        throw new Error("Can not upcast " + t + " with " + e)
    }

    function Bt(t) {
        return Pt(t, "int32")
    }

    function Lt(t, e) {
        if (t.dtype === e.dtype) return [t, e];
        var n = Pt(t.dtype, e.dtype);
        return [t.cast(n), e.cast(n)]
    }

    function Wt(t, e) {
        P(t.dtype === e.dtype, function () {
            return "The dtypes of the first(" + t.dtype + ") and second(" + e.dtype + ") input must match"
        })
    }

    function zt(t) {
        var e = [];
        return function t(e, n, r) {
            if (null != e) if (e instanceof bt) n.push(e); else if (o = e, Array.isArray(o) || "object" == typeof o) {
                var o, i = e;
                for (var a in i) {
                    var s = i[a];
                    r.has(s) || (r.add(s), t(s, n, r))
                }
            }
        }(t, e, new Set), e
    }

    var Ut, Vt = Object.freeze({
        makeTypesMatch: Lt, assertTypesMatch: Wt, isTensorInList: function (e, t) {
            return t.some(function (t) {
                return t.id === e.id
            })
        }, getTensorsInContainer: zt
    }), Gt = (jt.prototype.dispose = function () {
        for (var t in this.registeredVariables) this.registeredVariables[t].dispose()
    }, jt), Ht = (qt.prototype.ready = function () {
        return y(this, void 0, void 0, function () {
            var e, n, r;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (null != this.pendingBackendInit) return [2, this.pendingBackendInit.then(function () {
                        })];
                        if (null != this.backendInstance) return [2];
                        e = this.getSortedBackends(), n = 0, t.label = 1;
                    case 1:
                        return n < e.length ? (r = e[n], [4, this.initializeBackend(r).success]) : [3, 5];
                    case 2:
                        return t.sent() ? [4, this.setBackend(r)] : [3, 4];
                    case 3:
                        return t.sent(), [2];
                    case 4:
                        return n++, [3, 1];
                    case 5:
                        throw new Error("Could not initialize any backends, all backend initializations failed.")
                }
            })
        })
    }, Object.defineProperty(qt.prototype, "backend", {
        get: function () {
            if (null != this.pendingBackendInit) throw new Error("Backend '" + this.backendName + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
            if (null == this.backendInstance) {
                var t = this.initializeBackendsAndReturnBest(), e = t.name;
                if (t.asyncInit) throw new Error("The highest priority backend '" + e + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
                this.setBackend(e)
            }
            return this.backendInstance
        }, enumerable: !0, configurable: !0
    }), qt.prototype.backendNames = function () {
        return Object.keys(this.registryFactory)
    }, qt.prototype.findBackend = function (t) {
        if (!(t in this.registry)) {
            if (!(t in this.registryFactory)) return null;
            if (this.initializeBackend(t).asyncInit) return null
        }
        return this.registry[t]
    }, qt.prototype.findBackendFactory = function (t) {
        return t in this.registryFactory ? this.registryFactory[t].factory : null
    }, qt.prototype.registerBackend = function (t, e, n) {
        return void 0 === n && (n = 1), t in this.registryFactory ? (console.warn(t + " backend was already registered. Reusing existing backend factory."), !1) : (this.registryFactory[t] = {
            factory: e,
            priority: n
        }, !0)
    }, qt.prototype.setBackend = function (o) {
        return y(this, void 0, void 0, function () {
            var e, n, r;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (null == this.registryFactory[o]) throw new Error("Backend name '" + o + "' not found in registry");
                        return this.backendName = o, null != this.registry[o] ? [3, 4] : (this.backendInstance = null, e = this.initializeBackend(o), n = e.success, e.asyncInit ? [4, n] : [3, 2]);
                    case 1:
                        return r = t.sent(), [3, 3];
                    case 2:
                        r = n, t.label = 3;
                    case 3:
                        if (!r) return [2, !1];
                        t.label = 4;
                    case 4:
                        return this.backendInstance = this.registry[o], this.setupRegisteredKernels(), this.profiler = new st(this.backendInstance), [2, !0]
                }
            })
        })
    }, qt.prototype.setupRegisteredKernels = function () {
        var e = this;
        a(this.backendName).forEach(function (t) {
            null != t.setupFunc && t.setupFunc(e.backendInstance)
        })
    }, qt.prototype.disposeRegisteredKernels = function (e) {
        var n = this;
        a(e).forEach(function (t) {
            null != t.disposeFunc && t.disposeFunc(n.registry[e])
        })
    }, qt.prototype.initializeBackend = function (e) {
        var n = this, t = this.registryFactory[e];
        if (null == t) throw new Error("Cannot initialize backend " + e + ", no registration found.");
        try {
            var r = t.factory();
            if (Promise.resolve(r) !== r) return this.registry[e] = r, {success: !0, asyncInit: !1};
            var o = ++this.pendingBackendInitId, i = r.then(function (t) {
                return !(o < n.pendingBackendInitId || (n.registry[e] = t, n.pendingBackendInit = null))
            }).catch(function (t) {
                return !(o < n.pendingBackendInitId || (n.pendingBackendInit = null, console.warn("Initialization of backend " + e + " failed"), console.warn(t.stack || t.message), 1))
            });
            return {success: this.pendingBackendInit = i, asyncInit: !0}
        } catch (n) {
            return console.warn("Initialization of backend " + e + " failed"), console.warn(n.stack || n.message), {
                success: !1,
                asyncInit: !1
            }
        }
    }, qt.prototype.removeBackend = function (t) {
        if (!(t in this.registryFactory)) throw new Error(t + " backend not found in registry");
        this.backendName === t && null != this.pendingBackendInit && this.pendingBackendInitId++, t in this.registry && (this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t]), delete this.registryFactory[t], this.backendName === t && (this.pendingBackendInit = null, this.backendName = null, this.backendInstance = null)
    }, qt.prototype.getSortedBackends = function () {
        var n = this;
        if (0 === Object.keys(this.registryFactory).length) throw new Error("No backend found in registry.");
        return Object.keys(this.registryFactory).sort(function (t, e) {
            return n.registryFactory[e].priority - n.registryFactory[t].priority
        })
    }, qt.prototype.initializeBackendsAndReturnBest = function () {
        for (var t = this.getSortedBackends(), e = 0; e < t.length; e++) {
            var n = t[e], r = this.initializeBackend(n), o = r.success, i = r.asyncInit;
            if (i || o) return {name: n, asyncInit: i}
        }
        throw new Error("Could not initialize any backends, all backend initializations failed.")
    }, qt.prototype.moveData = function (t, e) {
        var n = this.state.tensorInfo.get(e), r = n.backend, o = this.readSync(e);
        r.disposeData(e), (n.backend = t).move(e, o, n.shape, n.dtype), this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++
    }, qt.prototype.tidy = function (t, e) {
        var n, r = this, o = null;
        if (null == e) {
            if ("function" != typeof t) throw new Error("Please provide a function to tidy()");
            e = t
        } else {
            if ("string" != typeof t && !(t instanceof String)) throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
            if ("function" != typeof e) throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
            o = t
        }
        return this.scopedRun(function () {
            return r.startScope(o)
        }, function () {
            return r.endScope(n)
        }, function () {
            return (n = e()) instanceof Promise && console.error("Cannot return a Promise inside of tidy."), n
        })
    }, qt.prototype.scopedRun = function (t, e, n) {
        t();
        try {
            var r = n();
            return e(), r
        } catch (t) {
            throw e(), t
        }
    }, qt.prototype.nextTensorId = function () {
        return qt.nextTensorId++
    }, qt.prototype.nextVariableId = function () {
        return qt.nextVariableId++
    }, qt.prototype.clone = function (t) {
        var e = this.makeTensorFromDataId(t.dataId, t.shape, t.dtype), n = {x: t};
        return this.addTapeNode(this.state.activeScope.name, n, [e], function (t) {
            return {
                x: function () {
                    return t.toFloat()
                }
            }
        }, []), e
    }, qt.prototype.runKernel = function (t, e, n, r, o) {
        return this.runKernelFunc(null, e, null, t, n, r, o)
    }, qt.prototype.shouldCheckForMemLeaks = function () {
        return this.ENV.getBool("IS_TEST")
    }, qt.prototype.checkKernelForMemLeak = function (t, e, n) {
        var r = this.backend.numDataIds(), o = 0;
        n.forEach(function (t) {
            o += "complex64" === t.dtype ? 3 : 1
        });
        var i = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1], a = r - e - o - i;
        if (0 < a) throw new Error("Backend '" + this.backendName + "' has an internal memory leak (" + a + " data ids) after running '" + t + "'")
    }, qt.prototype.runKernelFunc = function (n, o, t, i, a, s, u) {
        var e, c = this;
        void 0 === s && (s = []), void 0 === u && (u = []);
        var r = [], l = this.isTapeOn();

        function h(t) {
            l && (r = t.map(function (t) {
                return c.keep(c.clone(t))
            }))
        }

        null == i && (i = null != this.state.activeScope ? this.state.activeScope.name : "");
        var f, p = this.state.numBytes, d = this.state.numTensors;
        this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0);
        var v, m = g(i, this.backendName);
        return f = null != m ? function () {
            var t = c.backend.numDataIds();
            v = m.kernelFunc({inputs: o, attrs: a, backend: c.backend});
            var e = Array.isArray(v) ? v : [v];
            c.shouldCheckForMemLeaks() && c.checkKernelForMemLeak(i, t, e);
            var n = e.map(function (t) {
                var e = t.dataId, n = t.shape, r = t.dtype;
                return c.makeTensorFromDataId(e, n, r)
            }), r = n.filter(function (t, e) {
                return u[e]
            });
            return h((s || []).slice().concat(r)), n
        } : function () {
            var t = c.backend.numDataIds();
            v = c.tidy(function () {
                return n(c.backend, h)
            });
            var e = Array.isArray(v) ? v : [v];
            return c.shouldCheckForMemLeaks() && c.checkKernelForMemLeak(i, t, e), e
        }, this.scopedRun(function () {
            return c.state.kernelDepth++
        }, function () {
            return c.state.kernelDepth--
        }, function () {
            e = c.ENV.getBool("DEBUG") ? c.profiler.profileKernel(i, o, function () {
                return f()
            }) : f()
        }), l && this.addTapeNode(i, o, e, t, r), this.state.profiling && this.state.activeProfile.kernels.push({
            name: i,
            bytesAdded: this.state.numBytes - p,
            totalBytesSnapshot: this.state.numBytes,
            tensorsAdded: this.state.numTensors - d,
            totalTensorsSnapshot: this.state.numTensors,
            inputShapes: Object.keys(o).map(function (t) {
                return o[t].shape
            }),
            outputShapes: e.map(function (t) {
                return t.shape
            })
        }), Array.isArray(v) ? e : e[0]
    }, qt.prototype.makeTensor = function (t, e, n, r) {
        if (null == t) throw new Error("Values passed to engine.makeTensor() are null");
        n = n || "float32", r = r || this.backend;
        var o = t;
        "string" === n && G(t[0]) && (o = t.map(function (t) {
            return nt(t)
        }));
        var i = r.write(o, e, n), a = new bt(e, n, i, this.nextTensorId());
        if (this.incRef(a, r), "string" === n) {
            var s = this.state.tensorInfo.get(i), u = V(o);
            this.state.numBytes += u - s.bytes, s.bytes = u
        }
        return a
    }, qt.prototype.makeTensorFromDataId = function (t, e, n, r) {
        var o = new bt(e, n = n || "float32", t, this.nextTensorId());
        return this.incRef(o, r), o
    }, qt.prototype.makeVariable = function (t, e, n, r) {
        void 0 === e && (e = !0), n = n || this.nextVariableId().toString(), null != r && r !== t.dtype && (t = t.asType(r));
        var o = new Ft(t, e, n, this.nextTensorId());
        if (null != this.state.registeredVariables[o.name]) throw new Error("Variable with name " + o.name + " was already registered");
        return this.state.registeredVariables[o.name] = o, this.incRef(o, this.backend), o
    }, qt.prototype.incRef = function (t, e) {
        var n = this.state.tensorInfo.has(t.dataId) ? this.state.tensorInfo.get(t.dataId).refCount : 0;
        if (this.state.numTensors++, "string" === t.dtype && this.state.numStringTensors++, 0 === n) {
            this.state.numDataBuffers++;
            var r = 0;
            "complex64" !== t.dtype && "string" !== t.dtype && (r = t.size * U(t.dtype)), this.state.tensorInfo.set(t.dataId, {
                backend: e || this.backend,
                dtype: t.dtype,
                shape: t.shape,
                bytes: r,
                refCount: 0
            }), this.state.numBytes += r
        }
        this.state.tensorInfo.get(t.dataId).refCount++, t instanceof Ft || this.track(t)
    }, qt.prototype.disposeTensor = function (t) {
        if (this.state.tensorInfo.has(t.dataId)) {
            this.state.numTensors--, "string" === t.dtype && this.state.numStringTensors--;
            var e = this.state.tensorInfo.get(t.dataId);
            e.refCount <= 1 ? ("complex64" !== t.dtype && (this.state.numBytes -= e.bytes), this.state.numDataBuffers--, e.backend.disposeData(t.dataId), this.state.tensorInfo.delete(t.dataId)) : this.state.tensorInfo.get(t.dataId).refCount--
        }
    }, qt.prototype.disposeVariables = function () {
        for (var t in this.state.registeredVariables) {
            var e = this.state.registeredVariables[t];
            this.disposeVariable(e)
        }
    }, qt.prototype.disposeVariable = function (t) {
        this.disposeTensor(t), null != this.state.registeredVariables[t.name] && delete this.state.registeredVariables[t.name]
    }, qt.prototype.memory = function () {
        var t = this.backend.memory();
        return t.numTensors = this.state.numTensors, t.numDataBuffers = this.state.numDataBuffers, t.numBytes = this.state.numBytes, 0 < this.state.numStringTensors && (t.unreliable = !0, null == t.reasons && (t.reasons = []), t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")), t
    }, qt.prototype.profile = function (r) {
        return y(this, void 0, void 0, function () {
            var e, n;
            return R(this, function (t) {
                return this.state.profiling = !0, e = this.state.numBytes, n = this.state.numTensors, this.state.activeProfile.kernels = [], this.state.activeProfile.result = r(), this.state.profiling = !1, this.state.activeProfile.peakBytes = Math.max.apply(Math, this.state.activeProfile.kernels.map(function (t) {
                    return t.totalBytesSnapshot
                })), this.state.activeProfile.newBytes = this.state.numBytes - e, this.state.activeProfile.newTensors = this.state.numTensors - n, [2, this.state.activeProfile]
            })
        })
    }, qt.prototype.isTapeOn = function () {
        return 0 < this.state.gradientDepth && 0 === this.state.kernelDepth
    }, qt.prototype.addTapeNode = function (t, e, o, n, r) {
        var i = this, a = {id: this.state.nextTapeNodeId++, kernelName: t, inputs: e, outputs: o, saved: r}, s = l(t);
        null != s && (n = s.gradFunc), null != n && (a.gradient = function (t) {
            return t = t.map(function (t, e) {
                if (null != t) return t;
                var n = o[e], r = Z(n.size, n.dtype);
                return i.makeTensor(r, n.shape, n.dtype)
            }), n(1 < t.length ? t : t[0], r)
        }), this.state.activeTape.push(a)
    }, qt.prototype.keep = function (t) {
        return t.kept = !0, t
    }, qt.prototype.startTape = function () {
        0 === this.state.gradientDepth && (this.state.activeTape = []), this.state.gradientDepth++
    }, qt.prototype.endTape = function () {
        this.state.gradientDepth--
    }, qt.prototype.startScope = function (t) {
        var e = {track: [], name: "unnamed scope", id: this.state.nextScopeId++};
        t && (e.name = t), this.state.scopeStack.push(e), this.state.activeScope = e
    }, qt.prototype.endScope = function (t) {
        for (var e = this, n = zt(t), r = new Set(n.map(function (t) {
            return t.id
        })), o = 0; o < this.state.activeScope.track.length; o++) {
            var i = this.state.activeScope.track[o];
            i.kept || r.has(i.id) || i.dispose()
        }
        var a = this.state.scopeStack.pop();
        this.state.activeScope = 0 === this.state.scopeStack.length ? null : this.state.scopeStack[this.state.scopeStack.length - 1], n.forEach(function (t) {
            t.kept || t.scopeId !== a.id || e.track(t)
        })
    }, qt.prototype.gradients = function (t, o, i, e) {
        var u = this;
        if (void 0 === e && (e = !1), P(0 < o.length, function () {
            return "gradients() received an empty list of xs."
        }), null != i && "float32" !== i.dtype) throw new Error("dy must have 'float32' dtype, but has '" + i.dtype + "'");
        var a = this.scopedRun(function () {
            return u.startTape()
        }, function () {
            return u.endTape()
        }, function () {
            return u.tidy("forward", t)
        });
        P(a instanceof bt, function () {
            return "The result y returned by f() must be a tensor."
        });
        var s = function (t, e, n) {
            for (var r = {}, o = {}, i = 0; i < e.length; i++) r[e[i].id] = !0;
            for (i = 0; i < t.length; i++) {
                var a = (d = t[i]).inputs;
                for (var s in a) {
                    for (var u = a[s], c = !1, l = 0; l < e.length; l++) if (r[u.id]) {
                        d.outputs.forEach(function (t) {
                            return r[t.id] = !0
                        }), c = !0, o[d.id] = !0;
                        break
                    }
                    if (c) break
                }
            }
            var h = {};
            h[n.id] = !0;
            var f = {};
            for (i = t.length - 1; 0 <= i; i--) for (a = (d = t[i]).inputs, l = 0; l < d.outputs.length; l++) if (h[d.outputs[l].id]) {
                for (var s in a) h[a[s].id] = !0, f[d.id] = !0;
                break
            }
            var p = [];
            for (i = 0; i < t.length; i++) {
                var d;
                if (o[(d = t[i]).id] && f[d.id]) {
                    var v = {};
                    for (var s in d.inputs) {
                        var m = d.inputs[s];
                        r[m.id] && (v[s] = m)
                    }
                    var g = Object.assign({}, d);
                    g.inputs = v, g.outputs = d.outputs, p.push(g)
                }
            }
            return p
        }(this.state.activeTape, o, a);
        if (!e && 0 === s.length && 0 < o.length) throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
        return this.tidy("backward", function () {
            var t, e, n = {};
            n[a.id] = null == i ? (e = Q(L(t = a.shape), "float32"), Kt.makeTensor(e, t, "float32")) : i, function (a, s) {
                for (var t = function (t) {
                    var o = s[t], n = [];
                    if (o.outputs.forEach(function (t) {
                        var e = a[t.id];
                        null != e ? n.push(e) : n.push(null)
                    }), null == o.gradient) throw new Error("Cannot compute gradient: gradient function not found for " + o.kernelName + ".");

                    function e(t) {
                        if (!(t in i)) throw new Error("Cannot backprop through input " + t + ". Available gradients found: " + Object.keys(i) + ".");
                        var e = function (t) {
                            return u.tidy(t)
                        }(function () {
                            return i[t]()
                        });
                        if ("float32" !== e.dtype) throw new Error("Error in gradient for op " + o.kernelName + ". The gradient of input " + t + " must have 'float32' dtype, but has '" + e.dtype + "'");
                        var n = o.inputs[t];
                        if (!A(e.shape, n.shape)) throw new Error("Error in gradient for op " + o.kernelName + ". The gradient of input '" + t + "' has shape '" + e.shape + "', which does not match the shape of the input '" + n.shape + "'");
                        if (null == a[n.id]) a[n.id] = e; else {
                            var r = a[n.id];
                            a[n.id] = r.add(e), r.dispose()
                        }
                    }

                    var i = o.gradient(n);
                    for (var r in o.inputs) e(r)
                }, e = s.length - 1; 0 <= e; e--) t(e)
            }(n, s);
            var r = o.map(function (t) {
                return n[t.id]
            });
            return 0 === u.state.gradientDepth && (u.state.activeTape.forEach(function (t) {
                for (var e = 0, n = t.saved; e < n.length; e++) n[e].dispose()
            }), u.state.activeTape = null), {value: a, grads: r}
        })
    }, qt.prototype.customGrad = function (r) {
        var e = this;
        return P(K(r), function () {
            return "The f passed in customGrad(f) must be a function."
        }), function () {
            for (var i, a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
            P(a.every(function (t) {
                return t instanceof bt
            }), function () {
                return "The args passed in customGrad(f)(x1, x2,...) must all be tensors"
            });
            var n = {};
            return a.forEach(function (t, e) {
                n[e] = t
            }), e.runKernelFunc(function (t, e) {
                return P((i = r.apply(void 0, a.concat([e]))).value instanceof bt, function () {
                    return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"
                }), P(K(i.gradFunc), function () {
                    return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."
                }), i.value
            }, n, function (t, e) {
                var n = i.gradFunc(t, e), r = Array.isArray(n) ? n : [n];
                P(r.length === a.length, function () {
                    return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."
                }), P(r.every(function (t) {
                    return t instanceof bt
                }), function () {
                    return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."
                });
                var o = {};
                return r.forEach(function (t, e) {
                    o[e] = function () {
                        return t
                    }
                }), o
            })
        }
    }, qt.prototype.readSync = function (t) {
        return this.state.tensorInfo.get(t).backend.readSync(t)
    }, qt.prototype.read = function (t) {
        return this.state.tensorInfo.get(t).backend.read(t)
    }, qt.prototype.time = function (r) {
        return y(this, void 0, void 0, function () {
            var e, n;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = tt(), [4, this.backend.time(r)];
                    case 1:
                        return (n = t.sent()).wallMs = tt() - e, [2, n]
                }
            })
        })
    }, qt.prototype.track = function (t) {
        return null != this.state.activeScope && (t.scopeId = this.state.activeScope.id, this.state.activeScope.track.push(t)), t
    }, Object.defineProperty(qt.prototype, "registeredVariables", {
        get: function () {
            return this.state.registeredVariables
        }, enumerable: !0, configurable: !0
    }), qt.prototype.reset = function () {
        for (var t in this.pendingBackendInitId++, this.state.dispose(), this.ENV.reset(), this.state = new Gt, this.registry) this.disposeRegisteredKernels(t), this.registry[t].dispose(), delete this.registry[t];
        this.backendName = null, this.backendInstance = null, this.pendingBackendInit = null
    }, qt.nextTensorId = 0, qt.nextVariableId = 0, qt);

    function qt(t) {
        this.ENV = t, this.registry = {}, this.registryFactory = {}, this.pendingBackendInitId = 0, this.state = new Gt
    }

    function jt() {
        this.registeredVariables = {}, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0, this.numStringTensors = 0, this.numDataBuffers = 0, this.gradientDepth = 0, this.kernelDepth = 0, this.scopeStack = [], this.numDataMovesStack = [], this.nextScopeId = 0, this.tensorInfo = new WeakMap, this.profiling = !1, this.activeProfile = {
            newBytes: 0,
            newTensors: 0,
            peakBytes: 0,
            kernels: [],
            result: null
        }
    }

    var Kt = function () {
        var t, e = function () {
            if (null == Ut) {
                var t = void 0;
                if ("undefined" != typeof window) t = window; else if ("undefined" != typeof global) t = global; else if ("undefined" != typeof process) t = process; else {
                    if ("undefined" == typeof self) throw new Error("Could not find a global object");
                    t = self
                }
                Ut = t
            }
            return Ut
        }();
        if (null == e._tfengine) {
            var n = new o(e);
            e._tfengine = new Ht(n)
        }
        return t = e._tfengine.ENV, i = t, mt = function () {
            return e._tfengine
        }, e._tfengine
    }();

    function Xt() {
        return "undefined" != typeof window && null != window.document || "undefined" != typeof WorkerGlobalScope
    }

    var Yt = _();
    Yt.registerFlag("DEBUG", function () {
        return !1
    }, function (t) {
        t && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")
    }), Yt.registerFlag("IS_BROWSER", function () {
        return Xt()
    }), Yt.registerFlag("IS_NODE", function () {
        return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node
    }), Yt.registerFlag("IS_CHROME", function () {
        return "undefined" != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    }), Yt.registerFlag("PROD", function () {
        return !1
    }), Yt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", function () {
        return Yt.getBool("DEBUG")
    }), Yt.registerFlag("DEPRECATION_WARNINGS_ENABLED", function () {
        return !0
    }), Yt.registerFlag("IS_TEST", function () {
        return !1
    });
    var $t, Jt, Qt, Zt, te, ee, ne = {}, re = {
        alpha: !1,
        antialias: !1,
        premultipliedAlpha: !1,
        preserveDrawingBuffer: !1,
        depth: !1,
        stencil: !1,
        failIfMajorPerformanceCaveat: !0
    };

    function oe(t, e) {
        ne[t] = e
    }

    function ie(t) {
        t in ne || (ne[t] = function (e) {
            if (1 !== e && 2 !== e) throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
            var t = function () {
                if ("undefined" != typeof OffscreenCanvas && 2 === e) return new OffscreenCanvas(300, 150);
                if ("undefined" != typeof document) return document.createElement("canvas");
                throw new Error("Cannot create a canvas in this context")
            }();
            return t.addEventListener("webglcontextlost", function (t) {
                t.preventDefault(), delete ne[e]
            }, !1), 1 === e ? t.getContext("webgl", re) || t.getContext("experimental-webgl", re) : t.getContext("webgl2", re)
        }(t));
        var e = ne[t];
        return e.isContextLost() ? (delete ne[t], ie(t)) : (e.disable(e.DEPTH_TEST), e.disable(e.STENCIL_TEST), e.disable(e.BLEND), e.disable(e.DITHER), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SAMPLE_COVERAGE), e.enable(e.SCISSOR_TEST), e.enable(e.CULL_FACE), e.cullFace(e.BACK), ne[t])
    }

    function ae(t, e) {
        return [e, t]
    }

    function se(t) {
        var e = L(t);
        return C(Math.ceil(e / 4))
    }

    function ue(t, e) {
        return [Math.max(1, Math.ceil(e / 2)), Math.max(1, Math.ceil(t / 2))]
    }

    function ce(t, e) {
        var n, r, o, i, a, s, u, c, l, h = t;
        return l = 2 === _().getNumber("WEBGL_VERSION") ? (n = h.R32F, r = h.R16F, o = h.RGBA16F, i = h.RGBA32F, a = h.RED, s = 4, u = 1, c = h.HALF_FLOAT, h.FLOAT) : (n = t.RGBA, r = t.RGBA, o = t.RGBA, i = h.RGBA, a = t.RGBA, u = s = 4, c = null != e ? e.HALF_FLOAT_OES : null, t.FLOAT), {
            internalFormatFloat: n,
            internalFormatHalfFloat: r,
            internalFormatPackedHalfFloat: o,
            internalFormatPackedFloat: i,
            textureFormatFloat: a,
            downloadTextureFormat: t.RGBA,
            downloadUnpackNumChannels: s,
            defaultNumChannels: u,
            textureTypeHalfFloat: c,
            textureTypeFloat: l
        }
    }

    function le(t, e, n) {
        var r = n();
        return e && function (t) {
            var e = t.getError();
            if (e !== t.NO_ERROR) throw new Error("WebGL Error: " + fe(t, e))
        }(t), r
    }

    (ee = $t = $t || {})[ee.DENSE = 0] = "DENSE", ee[ee.SHARED_BATCH = 1] = "SHARED_BATCH", (te = Jt = Jt || {})[te.RENDER = 0] = "RENDER", te[te.UPLOAD = 1] = "UPLOAD", te[te.PIXELS = 2] = "PIXELS", te[te.DOWNLOAD = 3] = "DOWNLOAD", (Zt = Qt = Qt || {})[Zt.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16", Zt[Zt.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32", Zt[Zt.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE", Zt[Zt.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32", Zt[Zt.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16";

    function he(t) {
        return !!(_().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || 0 === t || 5.96e-8 < Math.abs(t) && Math.abs(t) < 65504)
    }

    function fe(t, e) {
        switch (e) {
            case t.NO_ERROR:
                return "NO_ERROR";
            case t.INVALID_ENUM:
                return "INVALID_ENUM";
            case t.INVALID_VALUE:
                return "INVALID_VALUE";
            case t.INVALID_OPERATION:
                return "INVALID_OPERATION";
            case t.INVALID_FRAMEBUFFER_OPERATION:
                return "INVALID_FRAMEBUFFER_OPERATION";
            case t.OUT_OF_MEMORY:
                return "OUT_OF_MEMORY";
            case t.CONTEXT_LOST_WEBGL:
                return "CONTEXT_LOST_WEBGL";
            default:
                return "Unknown error code " + e
        }
    }

    function pe(t, e, n) {
        return Pe(t, e, function () {
            return t.getExtension(n)
        }, 'Extension "' + n + '" not supported on this browser.')
    }

    function de(t, e, n) {
        var r = Pe(t, e, function () {
            return t.createShader(t.VERTEX_SHADER)
        }, "Unable to create vertex WebGLShader.");
        if (le(t, e, function () {
            return t.shaderSource(r, n)
        }), le(t, e, function () {
            return t.compileShader(r)
        }), !1 === t.getShaderParameter(r, t.COMPILE_STATUS)) throw console.log(t.getShaderInfoLog(r)), new Error("Failed to compile vertex shader.");
        return r
    }

    function ve(t, e, n) {
        var r = Pe(t, e, function () {
            return t.createShader(t.FRAGMENT_SHADER)
        }, "Unable to create fragment WebGLShader.");
        if (le(t, e, function () {
            return t.shaderSource(r, n)
        }), le(t, e, function () {
            return t.compileShader(r)
        }), !1 === t.getShaderParameter(r, t.COMPILE_STATUS)) throw function (t, e) {
            var n = ye.exec(e);
            if (null == n) return console.log("Couldn't parse line number in error: " + e), console.log(t);
            for (var r = +n[1], o = t.split("\n"), i = o.length.toString().length + 2, a = o.map(function (t, e) {
                return I((e + 1).toString(), i) + t
            }), s = 0, u = 0; u < a.length; u++) s = Math.max(a[u].length, s);
            var c = a.slice(0, r - 1), l = a.slice(r - 1, r), h = a.slice(r);
            console.log(c.join("\n")), console.log(e.split("\n")[0]), console.log("%c " + I(l[0], s), "border:1px solid red; background-color:#e3d2d2; color:#a61717"), console.log(h.join("\n"))
        }(n, t.getShaderInfoLog(r)), new Error("Failed to compile fragment shader.");
        return r
    }

    var me, ge, ye = /ERROR: [0-9]+:([0-9]+):/g;

    function xe(t, e) {
        return Pe(t, e, function () {
            return t.createProgram()
        }, "Unable to create WebGLProgram.")
    }

    function be(t, e, n) {
        if (le(t, e, function () {
            return t.linkProgram(n)
        }), !1 === t.getProgramParameter(n, t.LINK_STATUS)) throw console.log(t.getProgramInfoLog(n)), new Error("Failed to link vertex and fragment shaders.")
    }

    function we(t, e, n) {
        if (le(t, e, function () {
            return t.validateProgram(n)
        }), !1 === t.getProgramParameter(n, t.VALIDATE_STATUS)) throw console.log(t.getProgramInfoLog(n)), new Error("Shader program validation failed.")
    }

    function Ce(t, e, n) {
        var r = Pe(t, e, function () {
            return t.createBuffer()
        }, "Unable to create WebGLBuffer");
        return le(t, e, function () {
            return t.bindBuffer(t.ARRAY_BUFFER, r)
        }), le(t, e, function () {
            return t.bufferData(t.ARRAY_BUFFER, n, t.STATIC_DRAW)
        }), r
    }

    function Ee(t, e, n) {
        var r = Pe(t, e, function () {
            return t.createBuffer()
        }, "Unable to create WebGLBuffer");
        return le(t, e, function () {
            return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r)
        }), le(t, e, function () {
            return t.bufferData(t.ELEMENT_ARRAY_BUFFER, n, t.STATIC_DRAW)
        }), r
    }

    function _e(t, e) {
        return Pe(t, e, function () {
            return t.createTexture()
        }, "Unable to create WebGLTexture.")
    }

    function Ie(t, e) {
        var n = _().getNumber("WEBGL_MAX_TEXTURE_SIZE");
        if (t <= 0 || e <= 0) {
            var r = "[" + t + "x" + e + "]";
            throw new Error("Requested texture size " + r + " is invalid.")
        }
        if (n < t || n < e) throw r = "[" + t + "x" + e + "]", new Error("Requested texture size " + r + " greater than WebGL maximum on this browser / GPU [" + n + "x" + n + "].")
    }

    function Re(t, e) {
        return Pe(t, e, function () {
            return t.createFramebuffer()
        }, "Unable to create WebGLFramebuffer.")
    }

    function ke(t, e, n, r, o, i, a, s) {
        var u = t.getAttribLocation(n, r);
        return -1 !== u && (le(t, e, function () {
            return t.bindBuffer(t.ARRAY_BUFFER, o)
        }), le(t, e, function () {
            return t.vertexAttribPointer(u, i, t.FLOAT, !1, a, s)
        }), le(t, e, function () {
            return t.enableVertexAttribArray(u)
        }), !0)
    }

    function Se(t, e, n, r) {
        Be(t, r), le(t, e, function () {
            return t.activeTexture(t.TEXTURE0 + r)
        }), le(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, n)
        })
    }

    function De(t, e, n, r) {
        return Pe(t, e, function () {
            return t.getUniformLocation(n, r)
        }, 'uniform "' + r + '" not present in program.')
    }

    function Ae(t, e, n) {
        return t.getUniformLocation(e, n)
    }

    function Te(t, e, n, r, o, i) {
        le(t, e, function () {
            return Se(t, e, r, i)
        }), le(t, e, function () {
            return t.uniform1i(o, i)
        })
    }

    function Ne(t, e, n, r) {
        le(t, e, function () {
            return t.bindFramebuffer(t.FRAMEBUFFER, r)
        }), le(t, e, function () {
            return t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0)
        })
    }

    function Fe(t, e, n) {
        le(t, e, function () {
            return t.bindFramebuffer(t.FRAMEBUFFER, n)
        }), le(t, e, function () {
            return t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0)
        })
    }

    function Me(t) {
        var e = t.checkFramebufferStatus(t.FRAMEBUFFER);
        if (e !== t.FRAMEBUFFER_COMPLETE) throw new Error("Error binding framebuffer: " + Oe(t, e))
    }

    function Oe(t, e) {
        switch (e) {
            case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
            case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
            case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
            case t.FRAMEBUFFER_UNSUPPORTED:
                return "FRAMEBUFFER_UNSUPPORTED";
            default:
                return "unknown error " + e
        }
    }

    function Pe(t, e, n, r) {
        var o = le(t, e, function () {
            return n()
        });
        if (null == o) throw new Error(r);
        return o
    }

    function Be(t, e) {
        var n = t.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1, r = e + t.TEXTURE0;
        if (r < t.TEXTURE0 || n < r) throw new Error("textureUnit must be in [gl.TEXTURE0, gl.TEXTURE" + n + "].")
    }

    function Le(t, e) {
        return void 0 === e && (e = 2), L(t.slice(0, t.length - e))
    }

    function We(t) {
        if (0 === t.length) throw Error("Cannot get rows and columns of an empty shape array.");
        return [1 < t.length ? t[t.length - 2] : 1, t[t.length - 1]]
    }

    function ze(t) {
        var e = [1, 1, 1];
        return 0 === t.length || 1 === t.length && 1 === t[0] || (e = [Le(t)].concat(We(t))), e
    }

    function Ue(n, t) {
        var e;
        void 0 === t && (t = !1);
        var r = _().getNumber("WEBGL_MAX_TEXTURE_SIZE");
        if (t && (r *= 2, 1 === (n = n.map(function (t, e) {
            return e >= n.length - 2 ? E(n[e]) : n[e]
        })).length && (n = [2, n[0]])), 2 !== n.length) {
            var o = T(n);
            n = o.newShape
        }
        var i = L(n);
        if (n.length <= 1 && i <= r) return [1, i];
        if (2 === n.length && n[0] <= r && n[1] <= r) return n;
        if (3 === n.length && n[0] * n[1] <= r && n[2] <= r) return [n[0] * n[1], n[2]];
        if (3 === n.length && n[0] <= r && n[1] * n[2] <= r) return [n[0], n[1] * n[2]];
        if (4 === n.length && n[0] * n[1] * n[2] <= r && n[3] <= r) return [n[0] * n[1] * n[2], n[3]];
        if (4 === n.length && n[0] <= r && n[1] * n[2] * n[3] <= r) return [n[0], n[1] * n[2] * n[3]];
        if (t) {
            var a = Le(n), s = 2, u = 2;
            return n.length && (s = (e = We(n))[0], u = e[1]), C(i = a * (s / 2) * (u / 2)).map(function (t) {
                return 2 * t
            })
        }
        return C(i)
    }

    function Ve(t) {
        return t % 2 == 0
    }

    function Ge(t, e) {
        if (A(t = t.slice(-2), e = e.slice(-2))) return !0;
        if (!t.length || !e.length) return !0;
        if (0 === t[0] || 0 === t[1] || 0 === e[0] || 0 === e[1]) return !0;
        if (t.length !== e.length) {
            var n = t.slice(-1)[0], r = e.slice(-1)[0];
            if (n === r) return !0;
            if (Ve(n) && Ve(r) && (1 === t[0] || 1 === e[0])) return !0
        }
        return t[1] === e[1] && Ve(t[0]) && Ve(e[0])
    }

    function He(t) {
        if (null == me) {
            var e = ie(t);
            me = e.getParameter(e.MAX_TEXTURE_SIZE)
        }
        return me
    }

    function qe(t) {
        if (null == ge) {
            var e = ie(t);
            ge = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
        }
        return Math.min(16, ge)
    }

    function je(t) {
        if (0 === t) return 0;
        var e = ie(t);
        return Ke(e, "EXT_disjoint_timer_query_webgl2") && 2 === t ? 2 : Ke(e, "EXT_disjoint_timer_query") ? 1 : 0
    }

    function Ke(t, e) {
        return null != t.getExtension(e)
    }

    function Xe(t) {
        try {
            if (null != ie(t)) return !0
        } catch (t) {
            return !1
        }
        return !1
    }

    function Ye(t) {
        if (0 === t) return !1;
        var e = ie(t);
        if (1 === t) {
            if (!Ke(e, "OES_texture_float")) return !1
        } else if (!Ke(e, "EXT_color_buffer_float")) return !1;
        return Je(e)
    }

    function $e(t) {
        if (0 === t) return !1;
        var e = ie(t);
        if (1 === t) return !!Ke(e, "OES_texture_float") && !!Ke(e, "WEBGL_color_buffer_float") && Je(e);
        if (Ke(e, "EXT_color_buffer_float")) return Je(e);
        if (Ke(e, "EXT_color_buffer_half_float")) {
            var i = e.getExtension("EXT_color_buffer_half_float");
            return function (t) {
                var e = ce(t, i), n = t.createTexture();
                t.bindTexture(t.TEXTURE_2D, n), t.texImage2D(t.TEXTURE_2D, 0, e.internalFormatHalfFloat, 1, 1, 0, e.textureFormatFloat, e.textureTypeHalfFloat, null);
                var r = t.createFramebuffer();
                t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0);
                var o = t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE;
                return t.bindTexture(t.TEXTURE_2D, null), t.bindFramebuffer(t.FRAMEBUFFER, null), t.deleteTexture(n), t.deleteFramebuffer(r), o
            }(e)
        }
        return !1
    }

    function Je(t) {
        var e = ce(t), n = t.createTexture();
        t.bindTexture(t.TEXTURE_2D, n), t.texImage2D(t.TEXTURE_2D, 0, e.internalFormatFloat, 1, 1, 0, e.textureFormatFloat, e.textureTypeFloat, null);
        var r = t.createFramebuffer();
        t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0);
        var o = t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE;
        return t.bindTexture(t.TEXTURE_2D, null), t.bindFramebuffer(t.FRAMEBUFFER, null), t.deleteTexture(n), t.deleteFramebuffer(r), o
    }

    function Qe(t) {
        return 2 === t && null != ie(t).fenceSync
    }

    var Ze = Object.freeze({
        callAndCheck: le,
        canBeRepresented: he,
        getWebGLErrorMessage: fe,
        getExtensionOrThrow: pe,
        createVertexShader: de,
        createFragmentShader: ve,
        createProgram: xe,
        linkProgram: be,
        validateProgram: we,
        createStaticVertexBuffer: Ce,
        createStaticIndexBuffer: Ee,
        getNumChannels: function () {
            return 2 === _().getNumber("WEBGL_VERSION") ? 1 : 4
        },
        createTexture: _e,
        validateTextureSize: Ie,
        createFramebuffer: Re,
        bindVertexBufferToProgramAttribute: ke,
        bindTextureUnit: Se,
        unbindTextureUnit: function (t, e, n) {
            Be(t, n), le(t, e, function () {
                return t.activeTexture(t.TEXTURE0 + n)
            }), le(t, e, function () {
                return t.bindTexture(t.TEXTURE_2D, null)
            })
        },
        getProgramUniformLocationOrThrow: De,
        getProgramUniformLocation: Ae,
        bindTextureToProgramUniformSampler: Te,
        bindCanvasToFramebuffer: function (t, e) {
            le(t, e, function () {
                return t.bindFramebuffer(t.FRAMEBUFFER, null)
            }), le(t, e, function () {
                return t.viewport(0, 0, t.canvas.width, t.canvas.height)
            }), le(t, e, function () {
                return t.scissor(0, 0, t.canvas.width, t.canvas.height)
            })
        },
        bindColorTextureToFramebuffer: Ne,
        unbindColorTextureFromFramebuffer: Fe,
        validateFramebuffer: Me,
        getFramebufferErrorMessage: Oe,
        getBatchDim: Le,
        getRowsCols: We,
        getShapeAs3D: ze,
        getTextureShapeFromLogicalShape: Ue,
        isReshapeFree: Ge,
        getWebGLMaxTextureSize: He,
        resetMaxTextureSize: function () {
            me = null
        },
        resetMaxTexturesInShader: function () {
            ge = null
        },
        getMaxTexturesInShader: qe,
        getWebGLDisjointQueryTimerVersion: je,
        hasExtension: Ke,
        isWebGLVersionEnabled: Xe,
        isCapableOfRenderingToFloatTexture: Ye,
        isDownloadFloatTextureEnabled: $e,
        isWebGLFenceEnabled: Qe
    }), tn = _();

    function en(t) {
        _().getBool("DEPRECATION_WARNINGS_ENABLED") && console.warn(t + " You can disable deprecation warnings with tf.disableDeprecationWarnings().")
    }

    function nn(t, e) {
        return Kt.tidy(t, e)
    }

    function rn(t) {
        zt(t).forEach(function (t) {
            return t.dispose()
        })
    }

    function on(t) {
        return Kt.keep(t)
    }

    function an() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        _().getBool("IS_TEST") || console.warn.apply(console, t)
    }

    function sn(t, e) {
        var n = t;
        if (z(t)) return "string" === e ? [] : [t.length];
        if (!Array.isArray(t)) return [];
        for (var r = []; Array.isArray(n) || z(n) && "string" !== e;) r.push(n.length), n = n[0];
        return Array.isArray(t) && _().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && function t(e, n, r) {
            if (r = r || [], Array.isArray(e) || z(e)) {
                P(0 < n.length, function () {
                    return "Element arr[" + r.join("][") + "] should be a primitive, but is an array of " + e.length + " elements"
                }), P(e.length === n[0], function () {
                    return "Element arr[" + r.join("][") + "] should have " + n[0] + " elements, but has " + e.length + " elements"
                });
                for (var o = n.slice(1), i = 0; i < e.length; ++i) t(e[i], o, r.concat(i))
            } else P(0 === n.length, function () {
                return "Element arr[" + r.join("][") + "] is a primitive, but should be an array/TypedArray of " + n[0] + " elements"
            })
        }(t, r, []), r
    }

    function un(t, e, n, r) {
        if (null != t && ("numeric" !== t && t !== e || "numeric" === t && "string" === e)) throw new Error("Argument '" + n + "' passed to '" + r + "' must be " + t + " tensor, but got " + e + " tensor")
    }

    function cn(t, e, n, r) {
        if (void 0 === r && (r = "numeric"), t instanceof bt) return un(r, t.dtype, e, n), t;
        var o = j(t);
        if ("string" !== o && 0 <= ["bool", "int32", "float32"].indexOf(r) && (o = r), un(r, o, e, n), null == t || !z(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t) {
            var i = null == t ? "null" : t.constructor.name;
            throw new Error("Argument '" + e + "' passed to '" + n + "' must be a Tensor or TensorLike, but got '" + i + "'")
        }
        var a = sn(t, o);
        z(t) || Array.isArray(t) || (t = [t]);
        var s = "string" !== o ? $(t, o, _().getBool("DEBUG")) : b(t, [], !0);
        return Kt.makeTensor(s, a, o)
    }

    function ln(t, n, r, e) {
        if (void 0 === e && (e = "numeric"), !Array.isArray(t)) throw new Error("Argument " + n + " passed to " + r + " must be a `Tensor[]` or `TensorLike[]`");
        return t.map(function (t, e) {
            return cn(t, n + "[" + e + "]", r)
        }, e)
    }

    function hn(t, e) {
        for (var n = 0; n < t.length; ++n) if (t[t.length - n - 1] !== e - 1 - n) return !1;
        return !0
    }

    function fn(t, e, n) {
        for (var r = t.length + e.length, o = [], i = 0, a = 0, s = 0; s < r; s++) -1 === n.indexOf(s) ? o.push(t[i++]) : o.push(e[a++]);
        return o
    }

    function pn(e, t) {
        for (var n = [], r = e.length, o = 0; o < r; o++) -1 === t.indexOf(o) && n.push(e[o]);
        return [n, t.map(function (t) {
            return e[t]
        })]
    }

    function dn(t, e) {
        return fn(t, e.map(function (t) {
            return 1
        }), e)
    }

    function vn(t, e, n) {
        P(hn(e, n), function () {
            return t + " supports only inner-most axes for now. Got axes " + e + " and rank-" + n + " input."
        })
    }

    function mn(t, e) {
        if (hn(t, e)) return null;
        for (var n = [], r = 0; r < e; ++r) -1 === t.indexOf(r) && n.push(r);
        return t.forEach(function (t) {
            return n.push(t)
        }), n
    }

    function gn(t) {
        return t.map(function (t, e) {
            return [e, t]
        }).sort(function (t, e) {
            return t[1] - e[1]
        }).map(function (t) {
            return t[0]
        })
    }

    function yn(t, e) {
        for (var n = [], r = e - t; r < e; ++r) n.push(r);
        return n
    }

    function xn(t, r) {
        var o = t[0].length;
        t.forEach(function (t, e) {
            P(t.length === o, function () {
                return "Error in concat" + o + "D: rank of tensors[" + e + "] must be the same as the rank of the rest (" + o + ")"
            })
        }), P(0 <= r && r < o, function () {
            return "Error in concat" + o + "D: axis must be between 0 and " + (o - 1) + "."
        });
        var i = t[0];
        t.forEach(function (t, e) {
            for (var n = 0; n < o; n++) P(n === r || t[n] === i[n], function () {
                return "Error in concat" + o + "D: Shape of tensors[" + e + "] (" + t + ") does not match the shape of the rest (" + i + ") along the non-concatenated axis " + e + "."
            })
        })
    }

    function bn(t, e) {
        for (var n = t[0].slice(), r = 1; r < t.length; r++) n[e] += t[r][e];
        return n
    }

    function wn(t) {
        var e = Object.keys(t);
        if (1 !== e.length) throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + e.length + " keys.");
        var r = e[0], o = t[r];
        r.endsWith("_") && (r = r.substring(0, r.length - 1));

        function n() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            Kt.startScope(r);
            try {
                var n = o.apply(void 0, t);
                return n instanceof Promise && console.error("Cannot return a Promise inside of tidy."), Kt.endScope(n), n
            } catch (t) {
                throw Kt.endScope(null), t
            }
        }

        return Object.defineProperty(n, "name", {value: r, configurable: !0}), n
    }

    tn.registerFlag("HAS_WEBGL", function () {
        return 0 < tn.getNumber("WEBGL_VERSION")
    }), tn.registerFlag("WEBGL_VERSION", function () {
        return Xe(2) ? 2 : Xe(1) ? 1 : 0
    }), tn.registerFlag("WEBGL_BUFFER_SUPPORTED", function () {
        return 2 === tn.get("WEBGL_VERSION")
    }), tn.registerFlag("WEBGL_CPU_FORWARD", function () {
        return !0
    }), tn.registerFlag("WEBGL_FORCE_F16_TEXTURES", function () {
        return !1
    }), tn.registerFlag("WEBGL_PACK", function () {
        return tn.getBool("HAS_WEBGL")
    }), tn.registerFlag("WEBGL_PACK_NORMALIZATION", function () {
        return tn.getBool("WEBGL_PACK")
    }), tn.registerFlag("WEBGL_PACK_CLIP", function () {
        return tn.getBool("WEBGL_PACK")
    }), tn.registerFlag("WEBGL_PACK_DEPTHWISECONV", function () {
        return !1
    }), tn.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", function () {
        return tn.getBool("WEBGL_PACK")
    }), tn.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", function () {
        return tn.getBool("WEBGL_PACK")
    }), tn.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", function () {
        return tn.getBool("WEBGL_PACK")
    }), tn.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", function () {
        return tn.getBool("WEBGL_PACK")
    }), tn.registerFlag("WEBGL_PACK_REDUCE", function () {
        return tn.getBool("WEBGL_PACK")
    }), tn.registerFlag("WEBGL_LAZILY_UNPACK", function () {
        return tn.getBool("WEBGL_PACK")
    }), tn.registerFlag("WEBGL_CONV_IM2COL", function () {
        return tn.getBool("WEBGL_PACK")
    }), tn.registerFlag("WEBGL_MAX_TEXTURE_SIZE", function () {
        return He(tn.getNumber("WEBGL_VERSION"))
    }), tn.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", function () {
        return qe(tn.getNumber("WEBGL_VERSION"))
    }), tn.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", function () {
        var t = tn.getNumber("WEBGL_VERSION");
        return 0 === t ? 0 : je(t)
    }), tn.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", function () {
        return 0 < tn.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") && (t = navigator.userAgent || navigator.vendor || window.opera, !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))));
        var t
    }), tn.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", function () {
        return Ye(tn.getNumber("WEBGL_VERSION"))
    }), tn.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", function () {
        return !tn.getBool("WEBGL_FORCE_F16_TEXTURES") && tn.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")
    }), tn.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", function () {
        return $e(tn.getNumber("WEBGL_VERSION"))
    }), tn.registerFlag("WEBGL_FENCE_API_ENABLED", function () {
        return Qe(tn.getNumber("WEBGL_VERSION"))
    }), tn.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", function () {
        return tn.getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0
    }), yt = en;
    var Cn = wn({
        complex_: function (t, e) {
            var n = cn(t, "real", "complex"), r = cn(e, "imag", "complex");
            return x(n.shape, r.shape, "real and imag shapes, " + n.shape + " and " + r.shape + ", must match in call to tf.complex()."), Kt.runKernelFunc(function (t) {
                return t.complex(n, r)
            }, {$real: n, $imag: r})
        }
    }), En = wn({
        real_: function (t) {
            var e = cn(t, "input", "real");
            return Kt.runKernelFunc(function (t) {
                return t.real(e)
            }, {$input: e})
        }
    }), _n = wn({
        imag_: function (t) {
            var e = cn(t, "input", "imag");
            return Kt.runKernelFunc(function (t) {
                return t.imag(e)
            }, {$input: e})
        }
    });

    function In(t, e, n) {
        return Rn(t, e, sn(t, n), n)
    }

    function Rn(t, e, n, r) {
        if (null == r && (r = j(t)), "complex64" === r) throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
        if (!z(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t) throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
        if (null != e) {
            et(e);
            var o = L(e), i = L(n);
            P(o === i, function () {
                return "Based on the provided shape, [" + e + "], the tensor should have " + o + " values but has " + i
            });
            for (var a = 0; a < n.length; ++a) {
                var s = n[a], u = a !== n.length - 1 || s !== L(e.slice(a));
                P(n[a] === e[a] || !u, function () {
                    return "Error creating a new Tensor. Inferred shape (" + n + ") does not match the provided shape (" + e + "). "
                })
            }
        }
        return z(t) || Array.isArray(t) || (t = [t]), e = e || n, t = "string" !== r ? $(t, r, _().getBool("DEBUG")) : b(t, [], !0), Kt.makeTensor(t, e, r)
    }

    function kn(t, e) {
        if ((z(t) && "string" !== e || Array.isArray(t)) && "complex64" !== e) throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
        if ("string" === e && z(t) && !(t instanceof Uint8Array)) throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
        return Rn(t, [], [], e)
    }

    function Sn(t, e) {
        m(t);
        var n = sn(t, e);
        if (1 !== n.length) throw new Error("tensor1d() requires values to be a flat/TypedArray");
        return Rn(t, null, n, e)
    }

    function Dn(t, e, n) {
        if (m(t), null != e && 2 !== e.length) throw new Error("tensor2d() requires shape to have two numbers");
        var r = sn(t, n);
        if (2 !== r.length && 1 !== r.length) throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
        return Rn(t, e, r, n)
    }

    function An(t, e, n) {
        if (m(t), null != e && 3 !== e.length) throw new Error("tensor3d() requires shape to have three numbers");
        var r = sn(t, n);
        if (3 !== r.length && 1 !== r.length) throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
        return Rn(t, e, r, n)
    }

    function Tn(t, e, n) {
        if (m(t), null != e && 4 !== e.length) throw new Error("tensor4d() requires shape to have four numbers");
        var r = sn(t, n);
        if (4 !== r.length && 1 !== r.length) throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
        return Rn(t, e, r, n)
    }

    function Nn(t, e, n) {
        if (m(t), null != e && 5 !== e.length) throw new Error("tensor5d() requires shape to have five numbers");
        var r = sn(t, n);
        if (5 !== r.length && 1 !== r.length) throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
        return Rn(t, e, r, n)
    }

    function Fn(t, e, n) {
        if (m(t), null != e && 6 !== e.length) throw new Error("tensor6d() requires shape to have six numbers");
        var r = sn(t, n);
        if (6 !== r.length && 1 !== r.length) throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
        return Rn(t, e = e || r, r, n)
    }

    function Mn(t, e, n, r) {
        return void 0 === e && (e = !0), Kt.makeVariable(t, e, n, r)
    }

    function On(t, e) {
        if (void 0 === e && (e = "float32"), "complex64" === e) {
            var n = On(t, "float32"), r = Pn(t, "float32");
            return Cn(n, r)
        }
        var o = Q(L(t), e);
        return Kt.makeTensor(o, t, e)
    }

    function Pn(t, e) {
        if (void 0 === e && (e = "float32"), "complex64" === e) {
            var n = Pn(t, "float32"), r = Pn(t, "float32");
            return Cn(n, r)
        }
        var o = Z(L(t), e);
        return Kt.makeTensor(o, t, e)
    }

    function Bn(e, n, r) {
        return Kt.runKernelFunc(function (t) {
            return t.fill(e, n, r)
        }, {})
    }

    function Ln(e, n, r) {
        if (r <= 0) throw new Error("The number of values should be positive.");
        return Kt.runKernelFunc(function (t) {
            return t.linspace(e, n, r)
        }, {})
    }

    function Wn(t, e, n, r) {
        if (void 0 === n && (n = 1), void 0 === r && (r = "float32"), 0 === n) throw new Error("Cannot have a step of zero");
        if (t === e || t < e && n < 0 || e < t && 1 < n) return Pn([0], r);
        var o = Z(Math.abs(Math.ceil((e - t) / n)), r);
        e < t && 1 === n && (n = -1), o[0] = t;
        for (var i = 1; i < o.length; i++) o[i] = o[i - 1] + n;
        return Sn(o, r)
    }

    var zn = wn({
        onesLike_: function (t) {
            var e = cn(t, "x", "onesLike");
            if ("complex64" !== e.dtype) return Kt.runKernelFunc(function (t) {
                return t.onesLike(e)
            }, {$x: e}, function (t, e) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            });
            var n = zn(En(e)), r = Un(_n(e));
            return Cn(n, r)
        }
    }), Un = wn({
        zerosLike_: function (t) {
            var e = cn(t, "x", "zerosLike");
            return Kt.runKernelFunc(function (t) {
                return t.zerosLike(e)
            }, {$x: e}, function (t, e) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            })
        }
    }), Vn = wn({
        concat_: function (t, n) {
            void 0 === n && (n = 0), P(1 <= t.length, function () {
                return "Pass at least one tensor to concat"
            });
            var e = ln(t, "tensors", "concat");
            "complex64" === e[0].dtype && e.forEach(function (t) {
                if ("complex64" !== t.dtype) throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype " + t.dtype + ". ")
            }), n = D(n, e[0].shape)[0];
            var r = bn(e.map(function (t) {
                return t.shape
            }), n);
            if (0 === L(r)) return In([], r);
            if (1 === (e = e.filter(function (t) {
                return 0 < t.size
            })).length) return e[0];
            var o = e.map(function (t) {
                return t.shape
            });
            xn(o, n);
            var i = e, a = {axis: n};
            return Kt.runKernelFunc(function (t) {
                return t.concat(e, n)
            }, i, function (t) {
                var e = o.map(function (t) {
                    return t[n]
                });
                return Kn(t, e, n).map(function (t) {
                    return function () {
                        return t
                    }
                })
            }, "Concat", a)
        }
    }), Gn = wn({
        concat1d_: function (t) {
            return Vn(t, 0)
        }
    }), Hn = wn({
        concat2d_: function (t, e) {
            return Vn(t, e)
        }
    }), qn = wn({
        concat3d_: function (t, e) {
            return Vn(t, e)
        }
    }), jn = wn({
        concat4d_: function (t, e) {
            return Vn(t, e)
        }
    }), Kn = wn({
        split_: function (t, e, n) {
            void 0 === n && (n = 0);
            var r, o = cn(t, "x", "split");
            return n = D(n, o.shape)[0], r = "number" == typeof e ? (P(o.shape[n] % e == 0, function () {
                return "Number of splits must evenly divide the axis."
            }), new Array(e).fill(o.shape[n] / e)) : (P(o.shape[n] === e.reduce(function (t, e) {
                return t + e
            }), function () {
                return "The sum of sizes must match the size of the axis dimension."
            }), e), Kt.runKernelFunc(function (t) {
                return t.split(o, r, n)
            }, {$x: o}, function (t) {
                return {
                    $x: function () {
                        return Vn(t, n)
                    }
                }
            })
        }
    });

    function Xn(t, e) {
        return t(e = {exports: {}}, e.exports), e.exports
    }

    var Yn = Xn(function (t) {
        !function (t, e) {
            function i(t) {
                var r, e = this, n = (r = 4022871197, function (t) {
                    t = t.toString();
                    for (var e = 0; e < t.length; e++) {
                        var n = .02519603282416938 * (r += t.charCodeAt(e));
                        n -= r = n >>> 0, r = (n *= r) >>> 0, r += 4294967296 * (n -= r)
                    }
                    return 2.3283064365386963e-10 * (r >>> 0)
                });
                e.next = function () {
                    var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c;
                    return e.s0 = e.s1, e.s1 = e.s2, e.s2 = t - (e.c = 0 | t)
                }, e.c = 1, e.s0 = n(" "), e.s1 = n(" "), e.s2 = n(" "), e.s0 -= n(t), e.s0 < 0 && (e.s0 += 1), e.s1 -= n(t), e.s1 < 0 && (e.s1 += 1), e.s2 -= n(t), e.s2 < 0 && (e.s2 += 1), n = null
            }

            function a(t, e) {
                return e.c = t.c, e.s0 = t.s0, e.s1 = t.s1, e.s2 = t.s2, e
            }

            function n(t, e) {
                var n = new i(t), r = e && e.state, o = n.next;
                return o.int32 = function () {
                    return 4294967296 * n.next() | 0
                }, o.double = function () {
                    return o() + 11102230246251565e-32 * (2097152 * o() | 0)
                }, o.quick = o, r && ("object" == typeof r && a(r, n), o.state = function () {
                    return a(n, {})
                }), o
            }

            e && e.exports ? e.exports = n : this.alea = n
        }(0, t)
    }), $n = Xn(function (t) {
        !function (t, e) {
            function i(t) {
                var e = this, n = "";
                e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.next = function () {
                    var t = e.x ^ e.x << 11;
                    return e.x = e.y, e.y = e.z, e.z = e.w, e.w ^= e.w >>> 19 ^ t ^ t >>> 8
                }, t === (0 | t) ? e.x = t : n += t;
                for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), e.next()
            }

            function a(t, e) {
                return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e
            }

            function n(t, e) {
                function n() {
                    return (r.next() >>> 0) / 4294967296
                }

                var r = new i(t), o = e && e.state;
                return n.double = function () {
                    do {
                        var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, n.int32 = r.next, n.quick = n, o && ("object" == typeof o && a(o, r), n.state = function () {
                    return a(r, {})
                }), n
            }

            e && e.exports ? e.exports = n : this.xor128 = n
        }(0, t)
    }), Jn = Xn(function (t) {
        !function (t, e) {
            function i(t) {
                var e = this, n = "";
                e.next = function () {
                    var t = e.x ^ e.x >>> 2;
                    return e.x = e.y, e.y = e.z, e.z = e.w, e.w = e.v, (e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ t ^ t << 1) | 0
                }, e.x = 0, e.y = 0, e.z = 0, e.w = 0, t === ((e.v = 0) | t) ? e.x = t : n += t;
                for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), r == n.length && (e.d = e.x << 10 ^ e.x >>> 4), e.next()
            }

            function a(t, e) {
                return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e.v = t.v, e.d = t.d, e
            }

            function n(t, e) {
                function n() {
                    return (r.next() >>> 0) / 4294967296
                }

                var r = new i(t), o = e && e.state;
                return n.double = function () {
                    do {
                        var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, n.int32 = r.next, n.quick = n, o && ("object" == typeof o && a(o, r), n.state = function () {
                    return a(r, {})
                }), n
            }

            e && e.exports ? e.exports = n : this.xorwow = n
        }(0, t)
    }), Qn = Xn(function (t) {
        !function (t, e) {
            function i(t) {
                var o = this;
                o.next = function () {
                    var t, e, n = o.x, r = o.i;
                    return t = n[r], e = (t ^= t >>> 7) ^ t << 24, e ^= (t = n[r + 1 & 7]) ^ t >>> 10, e ^= (t = n[r + 3 & 7]) ^ t >>> 3, e ^= (t = n[r + 4 & 7]) ^ t << 7, t = n[r + 7 & 7], e ^= (t ^= t << 13) ^ t << 9, n[r] = e, o.i = r + 1 & 7, e
                }, function (t, e) {
                    var n, r = [];
                    if (e === (0 | e)) r[0] = e; else for (e = "" + e, n = 0; n < e.length; ++n) r[7 & n] = r[7 & n] << 15 ^ e.charCodeAt(n) + r[n + 1 & 7] << 13;
                    for (; r.length < 8;) r.push(0);
                    for (n = 0; n < 8 && 0 === r[n]; ++n) ;
                    for (8 == n ? r[7] = -1 : r[n], t.x = r, t.i = 0, n = 256; 0 < n; --n) t.next()
                }(o, t)
            }

            function a(t, e) {
                return e.x = t.x.slice(), e.i = t.i, e
            }

            function n(t, e) {
                null == t && (t = +new Date);

                function n() {
                    return (r.next() >>> 0) / 4294967296
                }

                var r = new i(t), o = e && e.state;
                return n.double = function () {
                    do {
                        var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, n.int32 = r.next, n.quick = n, o && (o.x && a(o, r), n.state = function () {
                    return a(r, {})
                }), n
            }

            e && e.exports ? e.exports = n : this.xorshift7 = n
        }(0, t)
    }), Zn = Xn(function (t) {
        !function (t, e) {
            function i(t) {
                var i = this;
                i.next = function () {
                    var t, e, n = i.w, r = i.X, o = i.i;
                    return i.w = n = n + 1640531527 | 0, e = r[o + 34 & 127], t = r[o = o + 1 & 127], e ^= e << 13, t ^= t << 17, e ^= e >>> 15, t ^= t >>> 12, e = r[o] = e ^ t, i.i = o, e + (n ^ n >>> 16) | 0
                }, function (t, e) {
                    var n, r, o, i, a, s = [], u = 128;
                    for (e === (0 | e) ? (r = e, e = null) : (e += "\0", r = 0, u = Math.max(u, e.length)), o = 0, i = -32; i < u; ++i) e && (r ^= e.charCodeAt((i + 32) % e.length)), 0 === i && (a = r), r ^= r << 10, r ^= r >>> 15, r ^= r << 4, r ^= r >>> 13, 0 <= i && (a = a + 1640531527 | 0, o = 0 == (n = s[127 & i] ^= r + a) ? o + 1 : 0);
                    for (128 <= o && (s[127 & (e && e.length || 0)] = -1), o = 127, i = 512; 0 < i; --i) r = s[o + 34 & 127], n = s[o = o + 1 & 127], r ^= r << 13, n ^= n << 17, r ^= r >>> 15, n ^= n >>> 12, s[o] = r ^ n;
                    t.w = a, t.X = s, t.i = o
                }(i, t)
            }

            function a(t, e) {
                return e.i = t.i, e.w = t.w, e.X = t.X.slice(), e
            }

            function n(t, e) {
                null == t && (t = +new Date);

                function n() {
                    return (r.next() >>> 0) / 4294967296
                }

                var r = new i(t), o = e && e.state;
                return n.double = function () {
                    do {
                        var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, n.int32 = r.next, n.quick = n, o && (o.X && a(o, r), n.state = function () {
                    return a(r, {})
                }), n
            }

            e && e.exports ? e.exports = n : this.xor4096 = n
        }(0, t)
    }), tr = Xn(function (t) {
        !function (t, e) {
            function i(t) {
                var o = this, e = "";
                o.next = function () {
                    var t = o.b, e = o.c, n = o.d, r = o.a;
                    return t = t << 25 ^ t >>> 7 ^ e, e = e - n | 0, n = n << 24 ^ n >>> 8 ^ r, r = r - t | 0, o.b = t = t << 20 ^ t >>> 12 ^ e, o.c = e = e - n | 0, o.d = n << 16 ^ e >>> 16 ^ r, o.a = r - t | 0
                }, o.a = 0, o.b = 0, o.c = -1640531527, o.d = 1367130551, t === Math.floor(t) ? (o.a = t / 4294967296 | 0, o.b = 0 | t) : e += t;
                for (var n = 0; n < e.length + 20; n++) o.b ^= 0 | e.charCodeAt(n), o.next()
            }

            function a(t, e) {
                return e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e
            }

            function n(t, e) {
                function n() {
                    return (r.next() >>> 0) / 4294967296
                }

                var r = new i(t), o = e && e.state;
                return n.double = function () {
                    do {
                        var t = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, n.int32 = r.next, n.quick = n, o && ("object" == typeof o && a(o, r), n.state = function () {
                    return a(r, {})
                }), n
            }

            e && e.exports ? e.exports = n : this.tychei = n
        }(0, t)
    }), er = Xn(function (e) {
        !function (s, u) {
            var c, l = this, h = 256, f = 6, p = "random", d = u.pow(h, f), v = u.pow(2, 52), m = 2 * v, g = h - 1;

            function t(t, e, n) {
                function r() {
                    for (var t = a.g(f), e = d, n = 0; t < v;) t = (t + n) * h, e *= h, n = a.g(1);
                    for (; m <= t;) t /= 2, e /= 2, n >>>= 1;
                    return (t + n) / e
                }

                var o = [], i = b(function t(e, n) {
                    var r, o = [], i = typeof e;
                    if (n && "object" == i) for (r in e) try {
                        o.push(t(e[r], n - 1))
                    } catch (t) {
                    }
                    return o.length ? o : "string" == i ? e : e + "\0"
                }((e = 1 == e ? {entropy: !0} : e || {}).entropy ? [t, w(s)] : null == t ? function () {
                    try {
                        var t;
                        return c && (t = c.randomBytes) ? t = t(h) : (t = new Uint8Array(h), (l.crypto || l.msCrypto).getRandomValues(t)), w(t)
                    } catch (t) {
                        var e = l.navigator, n = e && e.plugins;
                        return [+new Date, l, n, l.screen, w(s)]
                    }
                }() : t, 3), o), a = new y(o);
                return r.int32 = function () {
                    return 0 | a.g(4)
                }, r.quick = function () {
                    return a.g(4) / 4294967296
                }, r.double = r, b(w(a.S), s), (e.pass || n || function (t, e, n, r) {
                    return r && (r.S && x(r, a), t.state = function () {
                        return x(a, {})
                    }), n ? (u[p] = t, e) : t
                })(r, i, "global" in e ? e.global : this == u, e.state)
            }

            function y(t) {
                var e, n = t.length, a = this, r = 0, o = a.i = a.j = 0, i = a.S = [];
                for (n || (t = [n++]); r < h;) i[r] = r++;
                for (r = 0; r < h; r++) i[r] = i[o = g & o + t[r % n] + (e = i[r])], i[o] = e;
                (a.g = function (t) {
                    for (var e, n = 0, r = a.i, o = a.j, i = a.S; t--;) e = i[r = g & r + 1], n = n * h + i[g & (i[r] = i[o = g & o + e]) + (i[o] = e)];
                    return a.i = r, a.j = o, n
                })(h)
            }

            function x(t, e) {
                return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
            }

            function b(t, e) {
                for (var n, r = t + "", o = 0; o < r.length;) e[g & o] = g & (n ^= 19 * e[g & o]) + r.charCodeAt(o++);
                return w(e)
            }

            function w(t) {
                return String.fromCharCode.apply(0, t)
            }

            if (u["seed" + p] = t, b(u.random(), s), e.exports) {
                e.exports = t;
                try {
                    c = require("crypto")
                } catch (t) {
                }
            }
        }([], Math)
    });
    er.alea = Yn, er.xor128 = $n, er.xorwow = Jn, er.xorshift7 = Qn, er.xor4096 = Zn, er.tychei = tr;
    var nr = er.alea, rr = (ur.prototype.nextValue = function () {
        if (!isNaN(this.nextVal)) {
            var t = this.nextVal;
            return this.nextVal = NaN, t
        }
        for (var e, n, r = !1; !r;) {
            for (var o = void 0, i = void 0, a = void 0; 1 <= (a = (o = 2 * this.random() - 1) * o + (i = 2 * this.random() - 1) * i) || 0 === a;) ;
            var s = Math.sqrt(-2 * Math.log(a) / a);
            e = this.mean + this.stdDev * o * s, n = this.mean + this.stdDev * i * s, this.truncated && !this.isValidTruncated(e) || (r = !0)
        }
        return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)), this.convertValue(e)
    }, ur.prototype.convertValue = function (t) {
        return null == this.dtype || "float32" === this.dtype ? t : Math.round(t)
    }, ur.prototype.isValidTruncated = function (t) {
        return t <= this.upper && t >= this.lower
    }, ur), or = (sr.prototype.nextValue = function () {
        for (var t, e, n, r, o, i; ;) {
            for (; r = this.randn.nextValue(), (i = 1 + this.c * r) <= 0;) ;
            if (i *= i * i, e = 1 - .331 * (t = r * r) * t, n = .5 * t + this.d * (1 - i + Math.log(i)), (o = this.randu()) < e || Math.log(o) < n) break
        }
        return i = 1 / this.beta * this.d * i, this.alpha < 1 && (i *= Math.pow(this.randu(), 1 / this.alpha)), this.convertValue(i)
    }, sr.prototype.convertValue = function (t) {
        return "float32" === this.dtype ? t : Math.round(t)
    }, sr), ir = (ar.prototype.convertValue = function (t) {
        return this.canReturnFloat() ? t : Math.round(t)
    }, ar.prototype.nextValue = function () {
        return this.convertValue(this.min + this.range * this.random())
    }, ar);

    function ar(t, e, n, r) {
        var o = this;
        if (void 0 === t && (t = 0), void 0 === e && (e = 1), this.canReturnFloat = function () {
            return null == o.dtype || "float32" === o.dtype
        }, this.min = t, this.range = e - t, this.dtype = n, null == r && (r = Math.random()), "number" == typeof r && (r = r.toString()), !this.canReturnFloat() && this.range <= 1) throw new Error("The difference between " + t + " - " + e + " <= 1 and dtype is not float");
        this.random = nr(r)
    }

    function sr(t, e, n, r) {
        this.alpha = t, this.beta = 1 / e, this.dtype = n;
        var o = r || Math.random();
        this.randu = nr(o.toString()), this.randn = new rr(0, 1, n, !1, this.randu()), this.d = t < 1 ? t + 2 / 3 : t - 1 / 3, this.c = 1 / Math.sqrt(9 * this.d)
    }

    function ur(t, e, n, r, o) {
        this.mean = t, this.stdDev = e, this.dtype = n, this.nextVal = NaN, this.truncated = r, this.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this.stdDev);
        var i = o || Math.random();
        this.random = nr(i.toString())
    }

    function cr(t, e, n) {
        return void 0 === e && (e = "float32"), e = e || "float32", et(t), new vt(t, e, n)
    }

    function lr(t, e) {
        void 0 === e && (e = !1), console.log(t.toString(e))
    }

    function hr(h, f) {
        return y(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = cn(h, "x", "setdiff1d"), n = cn(f, "y", "setdiff1d"), P(e.dtype === n.dtype, function () {
                            return "x and y should have the same dtype, but got x (" + e.dtype + ") and y (" + n.dtype + ")."
                        }), P(1 === e.rank, function () {
                            return "x should be 1D tensor, but got x (" + e.shape + ")."
                        }), P(1 === n.rank, function () {
                            return "y should be 1D tensor, but got y (" + n.shape + ")."
                        }), [4, e.data()];
                    case 1:
                        return r = t.sent(), [4, n.data()];
                    case 2:
                        for (o = t.sent(), i = new Set(o), c = a = 0; c < r.length; c++) i.has(r[c]) || a++;
                        for (s = new vt([a], e.dtype), u = new vt([a], "int32"), l = c = 0; c < r.length; c++) i.has(r[c]) || (s.values[l] = r[c], u.values[l] = c, l++);
                        return [2, [s.toTensor(), u.toTensor()]]
                }
            })
        })
    }

    var fr = wn({
        batchToSpaceND_: function (t, e, n) {
            var r = cn(t, "x", "batchToSpaceND"), o = e.reduce(function (t, e) {
                return t * e
            });
            return P(r.rank >= 1 + e.length, function () {
                return "input rank is " + r.rank + " but should be > than blockShape.length " + e.length
            }), P(n.length === e.length, function () {
                return "crops.length is " + n.length + " but should be equal to blockShape.length  " + e.length
            }), P(r.shape[0] % o == 0, function () {
                return "input tensor batch is " + r.shape[0] + " but is not divisible by the product of the elements of blockShape " + e.join(" * ") + " === " + o
            }), Kt.runKernelFunc(function (t) {
                return t.batchToSpaceND(r, e, n)
            }, {$x: r}, function (t) {
                return {
                    $x: function () {
                        return t.spaceToBatchND(e, n)
                    }
                }
            })
        }
    }), pr = wn({
        broadcastTo_: function (t, e) {
            var n = cn(t, "broadcastTo", "x"), r = n.shape;
            if (e.some(function (t) {
                return !(0 < t) || t % 1 != 0
            })) throw new Error("broadcastTo(): Invalid broadcast shape [" + e + "].");
            if (e.length < n.rank) throw new Error("broadcastTo(): shape.length=" + e.length + " < input.rank=" + n.rank + ".");
            if (e.length > n.rank) {
                for (var o = n.shape.slice(); o.length < e.length;) o.unshift(1);
                n = n.reshape(o)
            }
            for (var i = Array.from(e), a = e.length - 1; 0 <= a; a--) if (n.shape[a] === e[a]) i[a] = 1; else if (1 !== n.shape[a]) throw new Error("broadcastTo(): [" + r + "] cannot be broadcast to [" + e + "].");
            var s = i.map(function (t, e) {
                return 1 < t ? e : -1
            }).filter(function (t) {
                return 0 <= t
            });
            return 0 === s.length ? n.clone() : Kt.runKernelFunc(function (t) {
                return t.tile(n, i)
            }, {input: n}, function (t) {
                return {
                    input: function () {
                        return t.sum(s, !0)
                    }
                }
            })
        }
    }), dr = wn({
        cast_: function (t, e) {
            var n = cn(t, "x", "cast");
            if (!O(e)) throw new Error("Failed to cast to unknown dtype " + e);
            if ("string" === e && "string" !== n.dtype || "string" !== e && "string" === n.dtype) throw new Error("Only strings can be casted to strings");
            var r = {dtype: e};
            return Kt.runKernelFunc(function (t) {
                return t.cast(n, e)
            }, {x: n}, function (t) {
                return {
                    x: function () {
                        return t.clone()
                    }
                }
            }, "Cast", r)
        }
    }), vr = wn({
        clone_: function (t) {
            var e = cn(t, "x", "clone", null);
            return Kt.runKernelFunc(function () {
                return Kt.makeTensorFromDataId(e.dataId, e.shape, e.dtype)
            }, {$x: e}, function (t) {
                return {
                    $x: function () {
                        return t.toFloat()
                    }
                }
            })
        }
    }), mr = wn({
        cumsum_: function (t, e, n, r) {
            void 0 === e && (e = 0), void 0 === n && (n = !1), void 0 === r && (r = !1);
            var o = cn(t, "x", "cumsum"), i = mn([e |= 0], o.rank), a = o;
            null != i && (a = o.transpose(i));
            var s = yn(1, o.rank)[0], u = Kt.runKernelFunc(function (t) {
                return t.cumsum(a, s, n, r)
            }, {permutedX: a}, function (t) {
                return {
                    permutedX: function () {
                        return t.cumsum(e, n, !r)
                    }
                }
            });
            return null != i && (u = u.transpose(i)), u
        }
    }), gr = wn({
        depthToSpace_: function (t, e, n) {
            void 0 === n && (n = "NHWC");
            var r = cn(t, "x", "depthToSpace"), o = "NHWC" === n ? r.shape[1] : r.shape[2],
                i = "NHWC" === n ? r.shape[2] : r.shape[3], a = "NHWC" === n ? r.shape[3] : r.shape[1];
            return P(0 <= o * e, function () {
                return "Negative dimension size caused by overflow when multiplying\n      " + o + " and " + e + "  for depthToSpace with input shape\n      " + r.shape
            }), P(0 <= i * e, function () {
                return "Negative dimension size caused by overflow when multiplying\n      " + i + " and " + e + " for depthToSpace with input shape\n          " + r.shape
            }), P(a % (e * e) == 0, function () {
                return "Dimension size must be evenly divisible by " + e * e + " but is " + a + " for depthToSpace with input shape " + r.shape
            }), Kt.runKernelFunc(function (t) {
                return t.depthToSpace(r, e, n)
            }, {$x: r})
        }
    }), yr = wn({
        expandDims_: function (t, e) {
            void 0 === e && (e = 0);
            var n = cn(t, "x", "expandDims", null);
            P(e <= n.rank, function () {
                return "Axis must be <= rank of the tensor"
            });
            var r = n.shape.slice();
            return e < 0 && (P(-(n.rank + 1) <= e, function () {
                return "Axis must be in the interval [" + -(n.rank + 1) + ", " + n.rank + "]"
            }), e = n.rank + e + 1), r.splice(e, 0, 1), Tr(n, r)
        }
    }), xr = wn({
        eye_: function (t, e, n, r) {
            void 0 === r && (r = "float32"), null == e && (e = t);
            for (var o = cr([t, e], r), i = t <= e ? t : e, a = 0; a < i; ++a) o.set(1, a, a);
            var s = o.toTensor().as2D(t, e);
            if (null == n) return s;
            if (1 === n.length) return Or(yr(s, 0), [n[0], 1, 1]);
            if (2 === n.length) return Or(yr(yr(s, 0), 0), [n[0], n[1], 1, 1]);
            if (3 === n.length) return Or(yr(yr(yr(s, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
            throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + n.length + "D.")
        }
    }), br = wn({
        multinomial_: function (t, e, n, r) {
            void 0 === r && (r = !1);
            var o = cn(t, "logits", "multinomial"), i = o.size, a = o.rank;
            if (i < 2) throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + i + ".");
            if (2 < a) throw new Error("Rank of probabilities must be 1 or 2, but is " + a);
            n = n || Math.random();
            var s = 1 === a ? o.as2D(1, -1) : o, u = Kt.runKernelFunc(function (t) {
                return t.multinomial(s, r, e, n)
            }, {logits2D: s});
            return 1 === a ? u.as1D() : u
        }
    }), wr = wn({
        oneHot_: function (t, e, n, r) {
            if (void 0 === n && (n = 1), void 0 === r && (r = 0), e < 2) throw new Error("Error in oneHot: depth must be >=2, but it is " + e);
            var o = cn(t, "indices", "oneHot", "int32"), i = o.shape.concat([e]);
            return o = o.flatten(), Kt.runKernelFunc(function (t) {
                return t.oneHot(o, e, n, r)
            }, {$indices: o}, function (t) {
                return {
                    $indices: function () {
                        return Pn(o.shape, "float32")
                    }
                }
            }).reshape(i)
        }
    }), Cr = wn({
        pad_: function (t, n, e) {
            void 0 === e && (e = 0);
            var r = cn(t, "x", "pad");
            if (0 === r.rank) throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
            var o = {paddings: n, constantValue: e};
            return Kt.runKernelFunc(function (t) {
                return t.pad(r, n, e)
            }, {x: r}, function (t) {
                var e = n.map(function (t) {
                    return t[0]
                });
                return {
                    x: function () {
                        return t.slice(e, r.shape)
                    }
                }
            }, "PadV2", o)
        }
    }), Er = wn({
        pad1d_: function (t, e, n) {
            return void 0 === n && (n = 0), P(2 === e.length, function () {
                return "Invalid number of paddings. Must be length of 2."
            }), Cr(t, [e], n)
        }
    }), _r = wn({
        pad2d_: function (t, e, n) {
            return void 0 === n && (n = 0), P(2 === e.length && 2 === e[0].length && 2 === e[1].length, function () {
                return "Invalid number of paddings. Must be length of 2 each."
            }), Cr(t, e, n)
        }
    }), Ir = wn({
        pad3d_: function (t, e, n) {
            return void 0 === n && (n = 0), P(3 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length, function () {
                return "Invalid number of paddings. Must be length of 2 each."
            }), Cr(t, e, n)
        }
    }), Rr = wn({
        pad4d_: function (t, e, n) {
            return void 0 === n && (n = 0), P(4 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length && 2 === e[3].length, function () {
                return "Invalid number of paddings. Must be length of 2 each."
            }), Cr(t, e, n)
        }
    }), kr = wn({
        rand_: function (t, e, n) {
            var r = L(t), o = null;
            if (null == n || "float32" === n) o = new Float32Array(r); else if ("int32" === n) o = new Int32Array(r); else {
                if ("bool" !== n) throw new Error("Unknown data type " + n);
                o = new Uint8Array(r)
            }
            for (var i = 0; i < r; i++) o[i] = e();
            return Kt.makeTensor(o, t, n)
        }
    }), Sr = wn({
        randomNormal_: function (t, e, n, r, o) {
            if (void 0 === e && (e = 0), void 0 === n && (n = 1), null != r && "bool" === r) throw new Error("Unsupported data type " + r);
            for (var i = new rr(e, n, r, !1, o), a = cr(t, r), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue();
            return a.toTensor()
        }
    }), Dr = wn({
        randomGamma_: function (t, e, n, r, o) {
            if (void 0 === n && (n = 1), void 0 === r && (r = "float32"), null == n && (n = 1), null == r && (r = "float32"), "float32" !== r && "int32" !== r) throw new Error("Unsupported data type " + r);
            for (var i = new or(e, n, r, o), a = cr(t, r), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue();
            return a.toTensor()
        }
    }), Ar = wn({
        randomUniform_: function (t, e, n, r, o) {
            void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = "float32");
            for (var i = cr(t, r), a = new ir(e, n, null, o), s = 0; s < i.values.length; s++) i.values[s] = a.nextValue();
            return i.toTensor()
        }
    }), Tr = wn({
        reshape_: function (t, e) {
            var n = cn(t, "x", "reshape", null);
            e = S(e, n.size), P(n.size === L(e), function () {
                return "new shape and old shape must have the same number of elements."
            });
            var r = {shape: e};
            return Kt.runKernelFunc(function (t) {
                return t.reshape(n, e)
            }, {x: n}, function (t) {
                return {
                    x: function () {
                        return t.reshape(n.shape)
                    }
                }
            }, "Reshape", r)
        }
    }), Nr = wn({
        spaceToBatchND_: function (t, r, o) {
            var e = cn(t, "x", "spaceToBatchND");
            return P(e.rank >= 1 + r.length, function () {
                return "input rank " + e.rank + " should be > than [blockShape] " + r.length
            }), P(o.length === r.length, function () {
                return "paddings.shape[0] " + o.length + " must be equal to [blockShape] " + r.length
            }), P(e.shape.reduce(function (t, e, n) {
                return 0 < n && n <= r.length ? t && (e + o[n - 1][0] + o[n - 1][1]) % r[n - 1] == 0 : t
            }, !0), function () {
                return "input spatial dimensions " + e.shape.slice(1) + " with paddings " + o.toString() + " must be divisible by blockShapes " + r.toString()
            }), Kt.runKernelFunc(function (t) {
                return t.spaceToBatchND(e, r, o)
            }, {$x: e}, function (t) {
                return {
                    $x: function () {
                        return t.batchToSpaceND(r, o)
                    }
                }
            })
        }
    }), Fr = wn({
        squeeze_: function (t, e) {
            var n = cn(t, "x", "squeeze");
            return Tr(n, T(n.shape, e).newShape)
        }
    }), Mr = wn({
        stack_: function (t, e) {
            void 0 === e && (e = 0);
            var n = ln(t, "tensors", "stack");
            if (P(1 <= n.length, function () {
                return "Pass at least one tensor to tf.stack"
            }), 1 === n.length) return n[0].expandDims(e);
            var r = n[0].rank, o = n[0].shape, i = n[0].dtype;
            P(e <= r, function () {
                return "Axis must be <= rank of the tensor"
            }), n.forEach(function (t) {
                x(o, t.shape, "All tensors passed to stack must have matching shapes")
            }), n.forEach(function (t) {
                P(i === t.dtype, function () {
                    return "All tensors passed to stack must have matching dtypes"
                })
            });
            var a = n.map(function (t) {
                return t.expandDims(e)
            });
            return Vn(a, e)
        }
    }), Or = wn({
        tile_: function (t, s) {
            var r = cn(t, "x", "tile", null);
            P(r.rank === s.length, function () {
                return "Error in transpose: rank of input " + r.rank + " must match length of reps " + s + "."
            });
            var e = [r], n = {reps: s};
            return Kt.runKernelFunc(function (t, e) {
                var n = t.tile(r, s);
                return e([r]), n
            }, {x: r}, function (i, t) {
                var a = t[0];
                return {
                    x: function () {
                        var t = Un(a);
                        if (1 === a.rank) for (var e = 0; e < s[0]; ++e) t = t.add(i.slice([e * a.shape[0]], [a.shape[0]])); else if (2 === a.rank) for (e = 0; e < s[0]; ++e) for (var n = 0; n < s[1]; ++n) t = t.add(i.slice([e * a.shape[0], n * a.shape[1]], [a.shape[0], a.shape[1]])); else if (3 === a.rank) for (e = 0; e < s[0]; ++e) for (n = 0; n < s[1]; ++n) for (var r = 0; r < s[2]; ++r) t = t.add(i.slice([e * a.shape[0], n * a.shape[1], r * a.shape[2]], [a.shape[0], a.shape[1], a.shape[2]])); else {
                            if (4 !== a.rank) throw new Error("Gradient for tile operation is not implemented for rank-" + a.rank + " tensors yet.");
                            for (e = 0; e < s[0]; ++e) for (n = 0; n < s[1]; ++n) for (r = 0; r < s[2]; ++r) for (var o = 0; o < s[3]; ++o) t = t.add(i.slice([e * a.shape[0], n * a.shape[1], r * a.shape[2], o * a.shape[3]], [a.shape[0], a.shape[1], a.shape[2], a.shape[3]]))
                        }
                        return t
                    }
                }
            }, "Tile", n, e)
        }
    }), Pr = wn({
        truncatedNormal_: function (t, e, n, r, o) {
            if (void 0 === e && (e = 0), void 0 === n && (n = 1), null != r && "bool" === r) throw new Error("Unsupported data type " + r);
            for (var i = new rr(e, n, r, !0, o), a = cr(t, r), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue();
            return a.toTensor()
        }
    }), Br = wn({
        unstack_: function (t, e) {
            void 0 === e && (e = 0), e = e || 0;
            var n = cn(t, "x", "unstack");
            P(e >= -n.shape.length && e < n.shape.length, function () {
                return "Axis = " + e + " is not in [-" + n.shape.length + ", " + n.shape.length + ")"
            }), e < 0 && (e += n.shape.length);
            var r = {axis: e};
            return Kt.runKernelFunc(function (t) {
                return t.unstack(n, e)
            }, {x: n}, function (t) {
                return {
                    x: function () {
                        return Mr(t, e)
                    }
                }
            }, "Unpack", r)
        }
    });

    function Lr(t, e, n, r) {
        void 0 === r && (r = !0);
        var o = [];
        if (r) (o = o.concat(e.slice(0))).push(t[0] / n), o = o.concat(t.slice(1)); else {
            o = o.concat(t[0]);
            for (var i = e.length, a = 0; a < i; ++a) o = o.concat([t[a + 1] / e[a], e[a]]);
            o = o.concat(t.slice(i + 1))
        }
        return o
    }

    function Wr(t, e, n) {
        void 0 === n && (n = !0);
        var r = [];
        if (n) {
            r.push(e);
            for (var o = e + 1; o < t; ++o) o <= 2 * e ? (r.push(o), r.push(o - (e + 1))) : r.push(o)
        } else {
            var i = [], a = [];
            for (o = 1; o < t; ++o) 2 * e + 1 <= o || o % 2 == 1 ? a.push(o) : i.push(o);
            r.push.apply(r, i), r.push(0), r.push.apply(r, a)
        }
        return r
    }

    function zr(t, e, n, r) {
        void 0 === r && (r = !0);
        var o = [];
        r ? o.push(t[0] / n) : o.push(t[0] * n);
        for (var i = 1; i < t.length; ++i) i <= e.length ? r ? o.push(e[i - 1] * t[i]) : o.push(t[i] / e[i - 1]) : o.push(t[i]);
        return o
    }

    function Ur(t, e) {
        for (var n = [0], r = 0; r < e; ++r) n.push(t[r][0]);
        return n
    }

    function Vr(t, e, n) {
        for (var r = t.slice(0, 1), o = 0; o < n; ++o) r.push(t[o + 1] - e[o][0] - e[o][1]);
        return r
    }

    function Gr(t, e) {
        if (t.rank < 1) throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + t.rank + ".");
        if (e.rank < 1) throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
        if ("int32" !== e.dtype) throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + e.dtype + ".");
        if (e.shape[e.rank - 1] > t.rank) throw new Error("index innermost dimension length must be <= tensor rank; saw: " + e.shape[e.rank - 1] + " vs. " + t.rank);
        if (0 === t.size) throw new Error("Requested more than 0 entries, but input is empty. Input shape: " + t.shape + ".");
        for (var n = e.shape, r = n[n.length - 1], o = 1, i = 0; i < n.length - 1; ++i) o *= n[i];
        var a = t.shape, s = n.slice();
        s.pop();
        var u = 1;
        for (i = r; i < t.rank; ++i) u *= a[i], s.push(a[i]);
        var c = Y(t.shape).map(function (t) {
            return t / u
        }).concat([1]).slice(0, r);
        return [s, o, u, c]
    }

    var Hr = Object.freeze({prepareAndValidate: Gr});

    function qr(t) {
        return t <= 30 ? t : X(t, Math.floor(Math.sqrt(t)))
    }

    function jr(t, e, n) {
        var r = 1 < e.rank ? e.shape[e.rank - 1] : 1, o = 1 < e.rank ? e.rank - 1 : 1,
            i = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + n.shape + ", indices.shape: " + e.shape + ", shape: " + t + ", sliceDim: " + r + ", and batchDim: " + o + ".";
        if (n.rank < o) throw new Error(i + " update.rank < " + o + ". ");
        if (t.length < r + (n.rank - o)) throw new Error(i + " Output shape length < " + (r + (n.rank - o)));
        if (n.rank !== o + t.length - r) throw new Error(i + " update.rank != " + (o + t.length - r));
        for (var a = 0; a < o; ++a) if (n.shape[a] !== e.shape[a]) throw new Error(i + " updates.shape[" + a + "] (" + n.shape[a] + ") != indices.shape[" + a + "] (" + e.shape[a] + ").");
        for (a = 0; a < n.rank - o; ++a) if (n.shape[a + o] !== t[a + r]) throw new Error(i + " updates.shape[" + (a + o) + "] (" + n.shape[a + o] + ") != shape[" + (a + o) + "] (" + t[a + o] + ")")
    }

    function Kr(t, e, n) {
        if (e.rank < 1) throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
        if (t.rank < 1) throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + t.rank + ".");
        if ("int32" !== e.dtype) throw new Error("The dtype of 'indices' should be int32, but got dtype: " + e.dtype);
        if (n.length < 1) throw new Error("Output rank must be greater or equal to 1, but got shape: " + n);
        if (0 === n.length) {
            if (0 === e.size) throw new Error("Indices specified for empty output. indices shape: " + e.shape);
            if (0 === t.size) throw new Error("Updates specified for empty output. updates shape: " + t.shape)
        }
        jr(n, e, t)
    }

    function Xr(t, e, n) {
        for (var r = e.shape.length, o = 1 < r ? e.shape[r - 1] : 1, i = n.length, a = 1, s = o; s < i; ++s) a *= n[s];
        var u = o < 1 ? 1 : o;
        return {
            sliceRank: o,
            numUpdates: L(e.shape) / u,
            sliceSize: a,
            strides: Y(n.slice(0, o)).concat([1]),
            outputSize: L(n)
        }
    }

    var Yr = Object.freeze({validateUpdateShape: jr, validateInput: Kr, calculateShapes: Xr});

    function $r(e, n, r) {
        P(e.rank === n.length, function () {
            return "Error in slice" + e.rank + "D: Length of begin " + n + " must match the rank of the array (" + e.rank + ")."
        }), P(e.rank === r.length, function () {
            return "Error in slice" + e.rank + "D: Length of size " + r + " must match the rank of the array (" + e.rank + ")."
        });
        for (var t = function (t) {
            P(n[t] + r[t] <= e.shape[t], function () {
                return "Error in slice" + e.rank + "D: begin[" + t + "] + size[" + t + "] (" + (n[t] + r[t]) + ") would overflow input.shape[" + t + "] (" + e.shape[t] + ")"
            })
        }, o = 0; o < e.rank; ++o) t(o)
    }

    function Jr(t) {
        for (var e = [], n = 0; 0 < t;) 1 & t && e.push(n), t /= 2, n++;
        return e
    }

    function Qr(t, e, n) {
        for (var r = [], o = 0; o < t.length; o++) r[o] = Math.ceil((e[o] - t[o]) / n[o]);
        return r
    }

    function Zr(t, e, n, r, o) {
        var i = e[o], a = n[o] || 1;
        (t & 1 << o || null == i) && (i = 0 < a ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
        var s = r[o];
        return i < 0 && (i += s), d(0, i, s - 1)
    }

    function to(t, e, n, r, o) {
        var i = e[o], a = n[o] || 1;
        (t & 1 << o || null == i) && (i = 0 < a ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
        var s = r[o];
        return i < 0 && (i += s), 0 < a ? d(0, i, s) : d(-1, i, s - 1)
    }

    function eo(t, e, n) {
        for (var r = n.length, o = 0; o < n.length; o++) if (1 < n[o]) {
            r = o;
            break
        }
        for (o = r + 1; o < n.length; o++) if (0 < e[o] || n[o] !== t[o]) return !1;
        return !0
    }

    function no(t, e) {
        for (var n = 0 < t.length ? t[t.length - 1] : 1, r = 0; r < t.length - 1; r++) n += t[r] * e[r];
        return n
    }

    var ro = Object.freeze({
        assertParamsValid: $r,
        maskToAxes: Jr,
        computeOutShape: Qr,
        startForAxis: Zr,
        stopForAxis: to,
        isSliceContinous: eo,
        computeFlatOffset: no
    });

    function oo(t, e) {
        P(K(t), function () {
            return "The f passed in variableGrads(f) must be a function"
        }), P(null == e || Array.isArray(e) && e.every(function (t) {
            return t instanceof Ft
        }), function () {
            return "The varList passed in variableGrads(f, varList) must be an array of variables"
        });
        var n = null != e;
        if (!n) for (var r in e = [], Kt.registeredVariables) e.push(Kt.registeredVariables[r]);
        var o = n ? e.filter(function (t) {
            return !t.trainable
        }) : null, i = e.length;
        P(0 < (e = e.filter(function (t) {
            return t.trainable
        })).length, function () {
            return "variableGrads() expects at least one of the input variables to be trainable, but none of the " + i + " variables is trainable."
        });
        var a = Kt.gradients(t, e, null, !0), s = a.value, u = a.grads;
        P(u.some(function (t) {
            return null != t
        }), function () {
            return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."
        }), P(0 === s.rank, function () {
            return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + s.rank + " tensor"
        });
        var c = {};
        return e.forEach(function (t, e) {
            null != u[e] && (c[t.name] = u[e])
        }), null != o && o.forEach(function (t) {
            return c[t.name] = null
        }), {value: s, grads: c}
    }

    function io(t) {
        return Kt.customGrad(t)
    }

    function ao(t) {
        if (0 < t.filter(function (t) {
            return null == t
        }).length) throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")
    }

    var so = wn({
        softmax_: function (t, o) {
            void 0 === o && (o = -1);
            var r = cn(t, "logits", "softmax", "float32");
            if (-1 === o && (o = r.rank - 1), o !== r.rank - 1) throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + r.rank + " and dim was " + o);
            return Kt.runKernelFunc(function (t, e) {
                var n = t.softmax(r, o);
                return e([n]), n
            }, {logits: r}, function (t, e) {
                var n = e[0], r = t.mul(n);
                return {
                    logits: function () {
                        return r.sub(r.sum([o], !0).mul(n))
                    }
                }
            }, "Softmax", {dim: o}, [], [!0])
        }
    }), uo = wn({
        logSoftmax_: function (t, i) {
            void 0 === i && (i = -1);
            var e = cn(t, "logits", "logSoftmax");
            if (-1 === i && (i = e.rank - 1), i !== e.rank - 1) throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + e.rank + " and axis was " + i);
            return io(function (t, e) {
                var n = t.max(i, !0), r = t.sub(n), o = r.toFloat().sub(r.exp().sum(i, !0).log());
                return e([o]), {
                    value: o, gradFunc: function (t, e) {
                        var n = e[0].exp();
                        return t.sub(t.sum(i, !0).mul(n))
                    }
                }
            })(e)
        }
    }), co = (fo.prototype.get = function (t) {
        return this.data.has(t) || this.dataMover.moveData(this.backend, t), this.data.get(t)
    }, fo.prototype.set = function (t, e) {
        this.dataIdsCount++, this.data.set(t, e)
    }, fo.prototype.has = function (t) {
        return this.data.has(t)
    }, fo.prototype.delete = function (t) {
        return this.dataIdsCount--, this.data.delete(t)
    }, fo.prototype.numDataIds = function () {
        return this.dataIdsCount
    }, fo), lo = (ho.prototype.time = function (t) {
        return po("time")
    }, ho.prototype.read = function (t) {
        return po("read")
    }, ho.prototype.readSync = function (t) {
        return po("readSync")
    }, ho.prototype.numDataIds = function () {
        return po("numDataIds")
    }, ho.prototype.disposeData = function (t) {
        return po("disposeData")
    }, ho.prototype.write = function (t, e, n) {
        return po("write")
    }, ho.prototype.move = function (t, e, n, r) {
        return po("move")
    }, ho.prototype.memory = function () {
        return po("memory")
    }, ho.prototype.floatPrecision = function () {
        return po("floatPrecision")
    }, ho.prototype.epsilon = function () {
        return 32 === this.floatPrecision() ? 1e-7 : 1e-4
    }, ho.prototype.batchMatMul = function (t, e, n, r) {
        return po("batchMatMul")
    }, ho.prototype.fusedBatchMatMul = function (t) {
        return t.a, t.b, t.transposeA, t.transposeB, t.bias, t.activation, t.preluActivationWeights, po("fusedBatchMatMul")
    }, ho.prototype.slice = function (t, e, n) {
        return po("slice")
    }, ho.prototype.stridedSlice = function (t, e, n, r) {
        return po("stridedSlice")
    }, ho.prototype.unstack = function (t, e) {
        return po("unstack")
    }, ho.prototype.reverse = function (t, e) {
        return po("reverse")
    }, ho.prototype.concat = function (t, e) {
        return po("concat")
    }, ho.prototype.neg = function (t) {
        return po("neg")
    }, ho.prototype.add = function (t, e) {
        return po("add")
    }, ho.prototype.addN = function (t) {
        return po("addN")
    }, ho.prototype.subtract = function (t, e) {
        return po("subtract")
    }, ho.prototype.multiply = function (t, e) {
        return po("multiply")
    }, ho.prototype.realDivide = function (t, e) {
        return po("realDivide")
    }, ho.prototype.floorDiv = function (t, e) {
        return po("floorDiv")
    }, ho.prototype.sum = function (t, e) {
        return po("sum")
    }, ho.prototype.prod = function (t, e) {
        return po("prod")
    }, ho.prototype.unsortedSegmentSum = function (t, e, n) {
        return po("unsortedSegmentSum")
    }, ho.prototype.argMin = function (t, e) {
        return po("argMin")
    }, ho.prototype.argMax = function (t, e) {
        return po("argMax")
    }, ho.prototype.equal = function (t, e) {
        return po("equal")
    }, ho.prototype.notEqual = function (t, e) {
        return po("notEqual")
    }, ho.prototype.less = function (t, e) {
        return po("less")
    }, ho.prototype.lessEqual = function (t, e) {
        return po("lessEqual")
    }, ho.prototype.greater = function (t, e) {
        return po("greater")
    }, ho.prototype.greaterEqual = function (t, e) {
        return po("greaterEqual")
    }, ho.prototype.logicalNot = function (t) {
        return po("logicalNot")
    }, ho.prototype.logicalAnd = function (t, e) {
        return po("logicalAnd")
    }, ho.prototype.logicalOr = function (t, e) {
        return po("logicalOr")
    }, ho.prototype.where = function (t) {
        return po("where")
    }, ho.prototype.select = function (t, e, n) {
        return po("select")
    }, ho.prototype.topk = function (t, e, n) {
        return po("topk")
    }, ho.prototype.min = function (t, e) {
        return po("min")
    }, ho.prototype.minimum = function (t, e) {
        return po("minimum")
    }, ho.prototype.mod = function (t, e) {
        return po("mod")
    }, ho.prototype.max = function (t, e) {
        return po("max")
    }, ho.prototype.maximum = function (t, e) {
        return po("maximum")
    }, ho.prototype.all = function (t, e) {
        return po("all")
    }, ho.prototype.any = function (t, e) {
        return po("any")
    }, ho.prototype.squaredDifference = function (t, e) {
        return po("squaredDifference")
    }, ho.prototype.ceil = function (t) {
        return po("ceil")
    }, ho.prototype.floor = function (t) {
        return po("floor")
    }, ho.prototype.round = function (t) {
        return po("round")
    }, ho.prototype.sign = function (t) {
        return po("sign")
    }, ho.prototype.isNaN = function (t) {
        return po("isNaN")
    }, ho.prototype.isInf = function (t) {
        return po("isInf")
    }, ho.prototype.isFinite = function (t) {
        return po("isFinite")
    }, ho.prototype.pow = function (t, e) {
        return po("pow")
    }, ho.prototype.exp = function (t) {
        return po("exp")
    }, ho.prototype.expm1 = function (t) {
        return po("expm1")
    }, ho.prototype.softmax = function (t, e) {
        return po("softmax")
    }, ho.prototype.log = function (t) {
        return po("log")
    }, ho.prototype.log1p = function (t) {
        return po("log1p")
    }, ho.prototype.sqrt = function (t) {
        return po("sqrt")
    }, ho.prototype.rsqrt = function (t) {
        return po("rsqrt")
    }, ho.prototype.square = function (t) {
        return po("square")
    }, ho.prototype.reciprocal = function (t) {
        return po("reciprocal")
    }, ho.prototype.relu = function (t) {
        return po("relu")
    }, ho.prototype.relu6 = function (t) {
        return po("relu6")
    }, ho.prototype.prelu = function (t, e) {
        return po("prelu")
    }, ho.prototype.elu = function (t) {
        return po("elu")
    }, ho.prototype.eluDer = function (t, e) {
        return po("eluDer")
    }, ho.prototype.selu = function (t) {
        return po("selu")
    }, ho.prototype.int = function (t) {
        return po("int")
    }, ho.prototype.clip = function (t, e, n) {
        return po("clip")
    }, ho.prototype.abs = function (t) {
        return po("abs")
    }, ho.prototype.complexAbs = function (t) {
        return po("complexAbs")
    }, ho.prototype.sigmoid = function (t) {
        return po("sigmoid")
    }, ho.prototype.softplus = function (t) {
        return po("softplus")
    }, ho.prototype.sin = function (t) {
        return po("sin")
    }, ho.prototype.cos = function (t) {
        return po("cos")
    }, ho.prototype.tan = function (t) {
        return po("tan")
    }, ho.prototype.asin = function (t) {
        return po("asin")
    }, ho.prototype.acos = function (t) {
        return po("acos")
    }, ho.prototype.atan = function (t) {
        return po("atan")
    }, ho.prototype.atan2 = function (t, e) {
        return po("atan2")
    }, ho.prototype.sinh = function (t) {
        return po("sinh")
    }, ho.prototype.cosh = function (t) {
        return po("cosh")
    }, ho.prototype.tanh = function (t) {
        return po("tanh")
    }, ho.prototype.asinh = function (t) {
        return po("asinh")
    }, ho.prototype.acosh = function (t) {
        return po("acosh")
    }, ho.prototype.atanh = function (t) {
        return po("atanh")
    }, ho.prototype.erf = function (t) {
        return po("erf")
    }, ho.prototype.step = function (t, e) {
        return po("step")
    }, ho.prototype.fusedConv2d = function (t) {
        return t.input, t.filter, t.convInfo, t.bias, t.activation, t.preluActivationWeights, po("fusedConv2d")
    }, ho.prototype.conv2d = function (t, e, n) {
        return po("conv2d")
    }, ho.prototype.conv2dDerInput = function (t, e, n) {
        return po("conv2dDerInput")
    }, ho.prototype.conv2dDerFilter = function (t, e, n) {
        return po("conv2dDerFilter")
    }, ho.prototype.fusedDepthwiseConv2D = function (t) {
        return t.input, t.filter, t.convInfo, t.bias, t.activation, t.preluActivationWeights, po("fusedDepthwiseConv2D")
    }, ho.prototype.depthwiseConv2D = function (t, e, n) {
        return po("depthwiseConv2D")
    }, ho.prototype.depthwiseConv2DDerInput = function (t, e, n) {
        return po("depthwiseConv2DDerInput")
    }, ho.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
        return po("depthwiseConv2DDerFilter")
    },ho.prototype.conv3d = function (t, e, n) {
        return po("conv3d")
    },ho.prototype.conv3dDerInput = function (t, e, n) {
        return po("conv3dDerInput")
    },ho.prototype.conv3dDerFilter = function (t, e, n) {
        return po("conv3dDerFilter")
    },ho.prototype.maxPool = function (t, e) {
        return po("maxPool")
    },ho.prototype.maxPoolBackprop = function (t, e, n, r) {
        return po("maxPoolBackprop")
    },ho.prototype.avgPool = function (t, e) {
        return po("avgPool")
    },ho.prototype.avgPoolBackprop = function (t, e, n) {
        return po("avgPoolBackprop")
    },ho.prototype.avgPool3d = function (t, e) {
        return po("avgPool3d")
    },ho.prototype.avgPool3dBackprop = function (t, e, n) {
        return po("avgPool3dBackprop")
    },ho.prototype.maxPool3d = function (t, e) {
        return po("maxPool3d")
    },ho.prototype.maxPool3dBackprop = function (t, e, n, r) {
        return po("maxPool3dBackprop")
    },ho.prototype.reshape = function (t, e) {
        return po("reshape")
    },ho.prototype.cast = function (t, e) {
        return po("cast")
    },ho.prototype.tile = function (t, e) {
        return po("tile")
    },ho.prototype.pad = function (t, e, n) {
        return po("pad")
    },ho.prototype.transpose = function (t, e) {
        return po("transpose")
    },ho.prototype.gather = function (t, e, n) {
        return po("gather")
    },ho.prototype.gatherND = function (t, e) {
        return po("gatherND")
    },ho.prototype.scatterND = function (t, e, n) {
        return po("scatterND")
    },ho.prototype.batchToSpaceND = function (t, e, n) {
        return po("batchToSpaceND")
    },ho.prototype.spaceToBatchND = function (t, e, n) {
        return po("spaceToBatchND")
    },ho.prototype.resizeBilinear = function (t, e, n, r) {
        return po("resizeBilinear")
    },ho.prototype.resizeBilinearBackprop = function (t, e, n) {
        return po("resizeBilinearBackprop")
    },ho.prototype.resizeNearestNeighbor = function (t, e, n, r) {
        return po("resizeNearestNeighbor")
    },ho.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
        return po("resizeNearestNeighborBackprop")
    },ho.prototype.batchNormalization = function (t, e, n, r, o, i) {
        return po("batchNormalization")
    },ho.prototype.localResponseNormalization4D = function (t, e, n, r, o) {
        return po("localResponseNormalization4D")
    },ho.prototype.LRNGrad = function (t, e, n, r, o, i, a) {
        return po("LRNGrad")
    },ho.prototype.multinomial = function (t, e, n, r) {
        return po("multinomial")
    },ho.prototype.oneHot = function (t, e, n, r) {
        return po("oneHot")
    },ho.prototype.cumsum = function (t, e, n, r) {
        return po("cumsum")
    },ho.prototype.nonMaxSuppression = function (t, e, n, r, o) {
        return po("nonMaxSuppression")
    },ho.prototype.fft = function (t) {
        return po("fft")
    },ho.prototype.ifft = function (t) {
        return po("ifft")
    },ho.prototype.complex = function (t, e) {
        return po("complex")
    },ho.prototype.real = function (t) {
        return po("real")
    },ho.prototype.imag = function (t) {
        return po("imag")
    },ho.prototype.cropAndResize = function (t, e, n, r, o, i) {
        return po("cropAndResize")
    },ho.prototype.depthToSpace = function (t, e, n) {
        return po("depthToSpace")
    },ho.prototype.split = function (t, e, n) {
        return po("split")
    },ho.prototype.sparseToDense = function (t, e, n, r) {
        return po("sparseToDense")
    },ho.prototype.diag = function (t) {
        return po("diag")
    },ho.prototype.fill = function (t, e, n) {
        return po("fill")
    },ho.prototype.onesLike = function (t) {
        return po("onesLike")
    },ho.prototype.zerosLike = function (t) {
        return po("zerosLike")
    },ho.prototype.linspace = function (t, e, n) {
        return po("linspace")
    },ho.prototype.dispose = function () {
        return po("dispose")
    },ho);

    function ho() {
    }

    function fo(t, e) {
        this.backend = t, this.dataMover = e, this.data = new WeakMap, this.dataIdsCount = 0
    }

    function po(t) {
        throw new Error("'" + t + "' not yet implemented or not found in the registry. Did you forget to import the kernel?")
    }

    function vo(t, e) {
        for (var n = t.length, r = [], o = 0; o < n; o++) {
            var i = n - 1 - o, a = t[i] || 1;
            1 < (e[e.length - 1 - o] || 1) && 1 === a && r.unshift(i)
        }
        return r
    }

    function mo(t, e) {
        for (var n = [], r = 0; r < e.length; r++) {
            var o = t[t.length - r - 1], i = e.length - r - 1, a = e[i];
            (null == o || 1 === o && 1 < a) && n.unshift(i)
        }
        return n
    }

    function go(t, e) {
        for (var n = [], r = Math.max(t.length, e.length), o = 0; o < r; o++) {
            var i = t[t.length - o - 1];
            null == i && (i = 1);
            var a = e[e.length - o - 1];
            if (null == a && (a = 1), 1 === i) n.unshift(a); else if (1 === a) n.unshift(i); else {
                if (i !== a) throw Error("Operands could not be broadcast together with shapes " + t + " and " + e + ".");
                n.unshift(i)
            }
        }
        return n
    }

    function yo(t, e, n, r, o, i, a) {
        void 0 === a && (a = "channelsLast");
        var s, u = Eo(e), c = u[0], l = u[1];
        if ("channelsLast" === a) s = [c, l, t[3], t[3]]; else {
            if ("channelsFirst" !== a) throw new Error("Unknown dataFormat " + a);
            s = [c, l, t[1], t[1]]
        }
        return bo(t, s, n, r, o, i, !1, a)
    }

    function xo(t, e, n, r, o, i, a) {
        void 0 === a && (a = "NDHWC");
        var s, u, c = _o(e), l = c[0], h = c[1], f = c[2];
        if ("NDHWC" === a) u = "channelsLast", s = [l, h, f, t[4], t[4]]; else {
            if ("NCDHW" !== a) throw new Error("Unknown dataFormat " + a);
            u = "channelsFirst", s = [l, h, f, t[1], t[1]]
        }
        return wo(t, s, n, r, o, !1, u, i)
    }

    function bo(t, e, n, r, o, m, i, a) {
        void 0 === i && (i = !1), void 0 === a && (a = "channelsLast");
        var s = [-1, -1, -1, -1], u = s[0], c = s[1], l = s[2], h = s[3];
        if ("channelsLast" === a) u = t[0], c = t[1], l = t[2], h = t[3]; else {
            if ("channelsFirst" !== a) throw new Error("Unknown dataFormat " + a);
            u = t[0], h = t[1], c = t[2], l = t[3]
        }
        var f, p = e[0], d = e[1], v = e[3], g = Eo(n), y = g[0], x = g[1], b = Eo(r), w = b[0], C = b[1], E = Io(p, w),
            _ = Io(d, C), I = function (t, e, n, r, o, i, a) {
                var s, u, c;
                if ("number" == typeof t) {
                    s = {top: t, bottom: t, left: t, right: t, type: 0 === t ? "VALID" : "NUMBER"};
                    var l = function (t, e, n, r, o) {
                        null == r && (r = Co(t, e, n));
                        var i = t[1], a = Ro((t[0] - e + 2 * r) / n + 1, o);
                        P(B(a), function () {
                            return "The output # of rows (" + a + ") must be an integer. Change the stride and/or zero pad parameters"
                        });
                        var s = Ro((i - e + 2 * r) / n + 1, o);
                        return P(B(s), function () {
                            return "The output # of columns (" + s + ") must be an integer. Change the stride and/or zero pad parameters"
                        }), [a, s]
                    }([e, n], i, r, t, m);
                    u = l[0], c = l[1]
                } else if ("same" === t) {
                    u = Math.ceil(e / r), c = Math.ceil(n / o);
                    var h = Math.max(0, (u - 1) * r + i - e), f = Math.max(0, (c - 1) * o + a - n), p = Math.floor(h / 2),
                        d = h - p, v = Math.floor(f / 2);
                    s = {top: p, bottom: d, left: v, right: f - v, type: "SAME"}
                } else {
                    if ("valid" !== t) throw Error("Unknown padding parameter: " + t);
                    s = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        type: "VALID"
                    }, u = Math.ceil((e - i + 1) / r), c = Math.ceil((n - a + 1) / o)
                }
                return {padInfo: s, outHeight: u, outWidth: c}
            }(o, c, l, y, x, E, _), R = I.padInfo, k = I.outHeight, S = I.outWidth, D = i ? v * h : v;
        return "channelsFirst" === a ? f = [u, D, k, S] : "channelsLast" === a && (f = [u, k, S, D]), {
            batchSize: u,
            dataFormat: a,
            inHeight: c,
            inWidth: l,
            inChannels: h,
            outHeight: k,
            outWidth: S,
            outChannels: D,
            padInfo: R,
            strideHeight: y,
            strideWidth: x,
            filterHeight: p,
            filterWidth: d,
            effectiveFilterHeight: E,
            effectiveFilterWidth: _,
            dilationHeight: w,
            dilationWidth: C,
            inShape: t,
            outShape: f,
            filterShape: e
        }
    }

    function wo(t, e, n, r, o, i, a, E) {
        void 0 === i && (i = !1), void 0 === a && (a = "channelsLast");
        var s = [-1, -1, -1, -1, -1], u = s[0], c = s[1], l = s[2], h = s[3], f = s[4];
        if ("channelsLast" === a) u = t[0], c = t[1], l = t[2], h = t[3], f = t[4]; else {
            if ("channelsFirst" !== a) throw new Error("Unknown dataFormat " + a);
            u = t[0], f = t[1], c = t[2], l = t[3], h = t[4]
        }
        var p, d = e[0], v = e[1], m = e[2], g = e[4], y = _o(n), x = y[0], b = y[1], w = y[2], C = _o(r), _ = C[0],
            I = C[1], R = C[2], k = Io(d, _), S = Io(v, I), D = Io(m, R), A = function (t, e, n, r, o, i, a, s, u, c) {
                var l, h, f, p;
                if ("number" == typeof t) {
                    l = {top: t, bottom: t, left: t, right: t, front: t, back: t, type: 0 === t ? "VALID" : "NUMBER"};
                    var d = function (t, e, n, r, o, i) {
                        null == o && (o = Co(t, e, r));
                        var a = t[1], s = t[2], u = Ro((t[0] - e + 2 * o) / r + 1, i);
                        P(B(u), function () {
                            return "The output # of depths (" + u + ") must be an integer. Change the stride and/or zero pad parameters"
                        });
                        var c = Ro((a - e + 2 * o) / r + 1, i);
                        P(B(c), function () {
                            return "The output # of rows (" + c + ") must be an integer. Change the stride and/or zero pad parameters"
                        });
                        var l = Ro((s - e + 2 * o) / r + 1, i);
                        return P(B(l), function () {
                            return "The output # of columns (" + l + ") must be an integer. Change the stride and/or zero pad parameters"
                        }), [u, c, l, 1]
                    }([e, n, r, 1], s, 0, o, t, E);
                    h = d[0], f = d[1], p = d[2]
                } else if ("same" === t) {
                    var v = ((h = Math.ceil(e / o)) - 1) * o + s - e, m = ((f = Math.ceil(n / i)) - 1) * i + u - n,
                        g = ((p = Math.ceil(r / a)) - 1) * a + c - r, y = Math.floor(v / 2), x = v - y,
                        b = Math.floor(m / 2), w = m - b, C = Math.floor(g / 2);
                    l = {top: b, bottom: w, left: C, right: g - C, front: y, back: x, type: "SAME"}
                } else {
                    if ("valid" !== t) throw Error("Unknown padding parameter: " + t);
                    l = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        front: 0,
                        back: 0,
                        type: "VALID"
                    }, h = Math.ceil((e - s + 1) / o), f = Math.ceil((n - u + 1) / i), p = Math.ceil((r - c + 1) / a)
                }
                return {padInfo: l, outDepth: h, outHeight: f, outWidth: p}
            }(o, c, l, h, x, b, w, k, S, D), T = A.padInfo, N = A.outDepth, F = A.outHeight, M = A.outWidth,
            O = i ? g * f : g;
        return "channelsFirst" === a ? p = [u, O, N, F, M] : "channelsLast" === a && (p = [u, N, F, M, O]), {
            batchSize: u,
            dataFormat: a,
            inDepth: c,
            inHeight: l,
            inWidth: h,
            inChannels: f,
            outDepth: N,
            outHeight: F,
            outWidth: M,
            outChannels: O,
            padInfo: T,
            strideDepth: x,
            strideHeight: b,
            strideWidth: w,
            filterDepth: d,
            filterHeight: v,
            filterWidth: m,
            effectiveFilterDepth: k,
            effectiveFilterHeight: S,
            effectiveFilterWidth: D,
            dilationDepth: _,
            dilationHeight: I,
            dilationWidth: R,
            inShape: t,
            outShape: p,
            filterShape: e
        }
    }

    function Co(t, e, n, r) {
        void 0 === r && (r = 1);
        var o = Io(e, r);
        return Math.floor((t[0] * (n - 1) - n + o) / 2)
    }

    function Eo(t) {
        return "number" == typeof t ? [t, t, t] : 2 === t.length ? [t[0], t[1], 1] : t
    }

    function _o(t) {
        return "number" == typeof t ? [t, t, t] : t
    }

    function Io(t, e) {
        return e <= 1 ? t : t + (t - 1) * (e - 1)
    }

    function Ro(t, e) {
        if (!e) return t;
        switch (e) {
            case"round":
                return Math.round(t);
            case"ceil":
                return Math.ceil(t);
            case"floor":
                return Math.floor(t);
            default:
                throw new Error("Unknown roundingMode " + e)
        }
    }

    function ko(t) {
        var e = Eo(t), n = e[0], r = e[1], o = e[2];
        return 1 === n && 1 === r && 1 === o
    }

    function So(t, e) {
        return ko(t) || ko(e)
    }

    function Do(t) {
        if ("NHWC" === t) return "channelsLast";
        if ("NCHW" === t) return "channelsFirst";
        throw new Error("Unknown dataFormat " + t)
    }

    function Ao(t, e, n) {
        if ("complex64" === e) {
            if ("complex64" === t.dtype) return t.clone();
            var r = Pn(t.shape), o = t.toFloat(), i = n.complex(o, r);
            return r.dispose(), o.dispose(), i
        }
        if (!W(t.dtype, e)) return Kt.makeTensorFromDataId(t.dataId, t.shape, e);
        if ("complex64" === t.dtype) {
            var a = n.real(t);
            return i = a.cast(e), a.dispose(), i
        }
        if ("int32" === e) return n.int(t);
        if ("bool" !== e) throw new Error("Error in Cast: failed to cast " + t.dtype + " to " + e);
        var s = kn(0, t.dtype);
        return i = n.notEqual(t, s), s.dispose(), i
    }

    function To(t, e) {
        return Kt.makeTensorFromDataId(t.dataId, e, t.dtype)
    }

    function No(t, e, n) {
        var r = (e - t) / (n - 1), o = Z(n, "float32");
        o[0] = t;
        for (var i = 1; i < o.length; i++) o[i] = o[i - 1] + r;
        return Sn(o, "float32")
    }

    var Fo = Object.freeze({
        castTensor: Ao,
        reshapeTensor: To,
        linspaceImpl: No,
        upcastType: Pt,
        axesAreInnerMostDims: hn,
        combineLocations: fn,
        computeOutAndReduceShapes: pn,
        expandShapeToKeepDim: dn,
        assertAxesAreInnerMostDims: vn,
        getAxesPermutation: mn,
        getUndoAxesPermutation: gn,
        getInnerMostAxes: yn,
        getBroadcastDims: vo,
        getReductionAxes: mo,
        assertAndGetBroadcastShape: go,
        assertParamsConsistent: xn,
        computeOutShape: bn,
        computePool2DInfo: yo,
        computePool3DInfo: xo,
        computeConv2DInfo: bo,
        computeConv3DInfo: wo,
        computeDefaultPad: Co,
        tupleValuesAreOne: ko,
        eitherStridesOrDilationsAreOne: So,
        convertConv2DDataFormat: Do,
        PARALLELIZE_THRESHOLD: 30,
        computeOptimalWindowSize: qr
    });

    function Mo(t, e) {
        if (t.length !== e.length) throw new Error("Cannot merge real and imag arrays of different lengths. real:" + t.length + ", imag: " + e.length + ".");
        for (var n = new Float32Array(2 * t.length), r = 0; r < n.length; r += 2) n[r] = t[r / 2], n[r + 1] = e[r / 2];
        return n
    }

    function Oo(t, e) {
        return {real: t[2 * e], imag: t[2 * e + 1]}
    }

    function Po(t, e) {
        return e < t ? 1 : t < e ? -1 : 0
    }

    function Bo(t, e, n, r, o) {
        return Wo(t, e, n, r, o, 0).selectedIndices
    }

    function Lo(t, e, n, r, o, i) {
        var a = Wo(t, e, n, r, o, i);
        return a.numValidOutputs.dispose(), {selectedIndices: a.selectedIndices, selectedScores: a.selectedScores}
    }

    function Wo(t, e, n, r, o, i, a, s) {
        void 0 === s && (s = !1);
        for (var u = Array.from(e).map(function (t, e) {
            return {score: t, boxIndex: e, suppressBeginIndex: 0}
        }).filter(function (t) {
            return t.score > o
        }).sort(Uo), c = 0 < i ? -.5 / i : 0, l = [], h = []; l.length < n && 0 < u.length;) {
            var f = u.pop(), p = f.score, d = f.boxIndex, v = f.suppressBeginIndex;
            if (p < o) break;
            for (var m = !1, g = l.length - 1; v <= g; --g) {
                var y = zo(t, d, l[g]);
                if (r <= y) {
                    m = !0;
                    break
                }
                if (f.score = f.score * (E = r, _ = c, I = y, void 0, R = Math.exp(_ * I * I), I <= E ? R : 0), f.score <= o) break
            }
            f.suppressBeginIndex = l.length, m || (f.score === p ? (l.push(d), h.push(f.score)) : f.score > o && (void 0, w = function (t, e, n) {
                for (var r = 0, o = t.length, i = 0, a = !1; r < o;) {
                    var s = n(e, t[i = r + (o - r >>> 1)]);
                    0 < s ? r = i + 1 : (o = i, a = !s)
                }
                return a ? r : -r - 1
            }(x = u, b = f, Uo || Po), C = w < 0 ? -(w + 1) : w, x.splice(C, 0, b)))
        }
        var x, b, w, C, E, _, I, R, k = l.length;
        return s && (l.fill(0, k), h.fill(0, k)), {
            selectedIndices: Sn(l, "int32"),
            selectedScores: Sn(h, "float32"),
            numValidOutputs: kn(k, "int32")
        }
    }

    function zo(t, e, n) {
        var r = t.subarray(4 * e, 4 * e + 4), o = t.subarray(4 * n, 4 * n + 4), i = Math.min(r[0], r[2]),
            a = Math.min(r[1], r[3]), s = Math.max(r[0], r[2]), u = Math.max(r[1], r[3]), c = Math.min(o[0], o[2]),
            l = Math.min(o[1], o[3]), h = Math.max(o[0], o[2]), f = Math.max(o[1], o[3]), p = (s - i) * (u - a),
            d = (h - c) * (f - l);
        if (p <= 0 || d <= 0) return 0;
        var v = Math.max(i, c), m = Math.max(a, l), g = Math.min(s, h), y = Math.min(u, f),
            x = Math.max(g - v, 0) * Math.max(y - m, 0);
        return x / (p + d - x)
    }

    function Uo(t, e) {
        return t.score - e.score || t.score === e.score && e.boxIndex - t.boxIndex
    }

    function Vo(n, t, r) {
        var o = new Array(n.rank).fill(0), i = n.shape.slice();
        return t.map(function (t) {
            i[r] = t;
            var e = n.slice(o, i);
            return o[r] += t, e
        })
    }

    function Go(t, e) {
        for (var n = new Array(t.rank), r = 0; r < n.length; r++) n[r] = t.shape[r] * e[r];
        var o = cr(n, t.dtype);
        for (r = 0; r < o.values.length; ++r) {
            for (var i = o.indexToLoc(r), a = new Array(t.rank), s = 0; s < a.length; s++) a[s] = i[s] % t.shape[s];
            var u = t.locToIndex(a);
            o.values[r] = t.values[u]
        }
        return o.toTensor()
    }

    function Ho(t, e, n, r) {
        for (var o = e[e.length - 1], i = [t.length / o, o], a = i[0], s = i[1], u = N(n, a * r), c = N("int32", a * r), l = 0; l < a; l++) {
            for (var h = l * s, f = t.subarray(h, h + s), p = [], d = 0; d < f.length; d++) p.push({
                value: f[d],
                index: d
            });
            p.sort(function (t, e) {
                return e.value - t.value
            });
            var v = l * r, m = u.subarray(v, v + r), g = c.subarray(v, v + r);
            for (d = 0; d < r; d++) m[d] = p[d].value, g[d] = p[d].index
        }
        var y = e.slice();
        return y[y.length - 1] = r, [In(u, y, n), In(c, y, "int32")]
    }

    function qo(t, e) {
        for (var n = [], r = 0; r < e.length; r++) e[r] && n.push(r);
        var o = cr(t, "int32"), i = cr([n.length, t.length], "int32");
        for (r = 0; r < n.length; r++) {
            var a = o.indexToLoc(n[r]), s = r * t.length;
            i.values.set(a, s)
        }
        return i.toTensor()
    }

    function jo(t, e) {
        this.outputShape = [], this.outputShape = t, this.variableNames = e.map(function (t, e) {
            return "T" + e
        });
        var n = [];
        this.variableNames.forEach(function (t) {
            n.push("float v" + t + " = get" + t + "AtOutCoords();")
        });
        var r = this.variableNames.map(function (t) {
            return "v" + t
        }).join(" + ");
        this.userCode = "\n      void main() {\n        " + n.join("\n        ") + "\n\n        float result = " + r + ";\n        setOutput(result);\n      }\n    "
    }

    function Ko(t, e) {
        this.outputShape = [], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t, this.variableNames = e.map(function (t, e) {
            return "T" + e
        });
        var n = [];
        this.variableNames.forEach(function (t) {
            n.push("vec4 v" + t + " = get" + t + "AtOutCoords();")
        });
        var r = this.variableNames.map(function (t) {
            return "v" + t
        }).join(" + ");
        this.userCode = "\n      void main() {\n        " + n.join("\n        ") + "\n\n        vec4 result = " + r + ";\n        setOutput(result);\n      }\n    "
    }

    function Xo(t, e, n) {
        this.variableNames = ["A"];
        var r = t.windowSize, o = t.batchSize, i = t.inSize, a = Math.ceil(i / r);
        n || this.variableNames.push("bestIndicesA"), this.outputShape = [o, a];
        var s = "max" === e ? ">" : "<", u = n ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + r + ";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < " + r + "; i++) {\n          int inIdx = " + u + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + s + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    "
    }

    function Yo(e, t) {
        return ["x", "y", "z", "w", "u", "v"].slice(0, t).map(function (t) {
            return e + "." + t
        })
    }

    function $o(t, e) {
        return 1 === e ? [t] : Yo(t, e)
    }

    function Jo() {
        var t, e, n, r, o, i, a, s, u, c;
        return c = 2 === _().getNumber("WEBGL_VERSION") ? (t = "#version 300 es", n = "out", r = e = "in", o = "texture", i = "outputColor", a = "out vec4 outputColor;", s = "\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ", u = "", "\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ") : (e = "attribute", r = n = "varying", o = "texture2D", i = "gl_FragColor", a = t = "", s = "\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ", u = "\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ", "\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "), {
            version: t,
            attribute: e,
            varyingVs: n,
            varyingFs: r,
            texture2D: o,
            output: i,
            defineOutput: a,
            defineSpecialNaN: s,
            defineSpecialInf: u,
            defineRound: c
        }
    }

    function Qo(n, t, r) {
        void 0 === r && (r = "index");
        var o = Y(t);
        return o.map(function (t, e) {
            return "int " + n[e] + " = " + r + " / " + t + "; " + (e === o.length - 1 ? "int " + n[e + 1] + " = " + r + " - " + n[e] + " * " + t : "index -= " + n[e] + " * " + t) + ";"
        }).join("")
    }

    function Zo(t) {
        var e = Y(t).map(function (t) {
            return t.toString()
        });
        return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * " + e[0] + " + coords.y * " + e[1] + " + coords.z;\n  }\n"
    }

    var ti = "\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n";

    function ei(t, e, n, r) {
        var o = [];
        t.forEach(function (t) {
            var e = L(t.shapeInfo.logicalShape);
            t.shapeInfo.isUniform ? o.push("uniform float " + t.name + (1 < e ? "[" + e + "]" : "") + ";") : (o.push("uniform sampler2D " + t.name + ";"), o.push("uniform int offset" + t.name + ";"))
        });
        var i, a, s, u = o.join("\n"), c = t.map(function (t) {
                return function (t, e, n) {
                    void 0 === n && (n = !1);
                    var r = "";
                    r += n ? function p(t) {
                        var e, n, r;
                        switch (t.shapeInfo.logicalShape.length) {
                            case 0:
                                return e = t.name, n = "get" + e.charAt(0).toUpperCase() + e.slice(1), r = Jo(), "\n    vec4 " + n + "() {\n      return " + r.texture2D + "(" + e + ", halfCR);\n    }\n  ";
                            case 1:
                                return function (t) {
                                    var e = t.name, n = "get" + e.charAt(0).toUpperCase() + e.slice(1),
                                        r = t.shapeInfo.texShape, o = [Math.ceil(r[0] / 2), Math.ceil(r[1] / 2)], i = Jo();
                                    return "\n    vec4 " + n + "(int index) {\n      vec2 uv = packedUVfrom1D(\n        " + o[0] + ", " + o[1] + ", index);\n      return " + i.texture2D + "(" + e + ", uv);\n    }\n  "
                                }(t);
                            case 2:
                                return function (t) {
                                    var e = t.shapeInfo.logicalShape, n = t.name,
                                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1), o = t.shapeInfo.texShape,
                                        i = o[0], a = o[1], s = Jo();
                                    if (null != o && A(e, o)) return "\n      vec4 " + r + "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(" + a + ".0, " + i + ".0);\n\n        return " + s.texture2D + "(" + n + ", uv);\n      }\n    ";
                                    var u = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)], c = Math.ceil(e[1] / 2);
                                    return "\n    vec4 " + r + "(int row, int col) {\n      vec2 uv = packedUVfrom2D(" + c + ", " + u[0] + ", " + u[1] + ", row, col);\n      return " + s.texture2D + "(" + n + ", uv);\n    }\n  "
                                }(t);
                            case 3:
                                return function (t) {
                                    var e = t.shapeInfo.logicalShape, n = t.name,
                                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1), o = t.shapeInfo.texShape,
                                        i = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)];
                                    if (1 === e[0]) {
                                        var a = e.slice(1), s = ii(t, a);
                                        return "\n        " + p(s) + "\n        vec4 " + r + "(int b, int row, int col) {\n          return " + r + "(" + ai(["b", "row", "col"], [1, 2]) + ");\n        }\n      "
                                    }
                                    var u = i[0], c = i[1], l = Math.ceil(e[2] / 2), h = l * Math.ceil(e[1] / 2), f = Jo();
                                    return "\n    vec4 " + r + "(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        " + u + ", " + c + ", " + h + ", " + l + ", b, row, col);\n      return " + f.texture2D + "(" + n + ", uv);\n    }\n  "
                                }(t);
                            default:
                                return function (t) {
                                    for (var e = t.shapeInfo.logicalShape, n = e.length, r = t.name, o = "get" + r.charAt(0).toUpperCase() + r.slice(1), i = t.shapeInfo.texShape, a = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)], s = a[0], u = a[1], c = Math.ceil(e[n - 1] / 2), l = c * Math.ceil(e[n - 2] / 2), h = "int b, int row, int col", f = "b * " + l + " + (row / 2) * " + c + " + (col / 2)", p = 2; p < n - 1; p++) h = "int b" + p + ", " + h, l *= e[n - p - 1], f = "b" + p + " * " + l + " + " + f;
                                    var d = Jo();
                                    return "\n    vec4 " + o + "(" + h + ") {\n      int index = " + f + ";\n      int texR = index / " + u + ";\n      int texC = index - texR * " + u + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + u + ", " + s + ");\n      return " + d.texture2D + "(" + r + ", uv);\n    }\n  "
                                }(t)
                        }
                    }(t) : function y(t) {
                        var e = t.shapeInfo.logicalShape;
                        switch (e.length) {
                            case 0:
                                return function (t) {
                                    var e = t.name, n = "get" + e.charAt(0).toUpperCase() + e.slice(1);
                                    if (t.shapeInfo.isUniform) return "float " + n + "() {return " + e + ";}";
                                    var r = t.shapeInfo.texShape, o = r[0], i = r[1];
                                    if (1 === o && 1 === i) return "\n      float " + n + "() {\n        return sampleTexture(" + e + ", halfCR);\n      }\n    ";
                                    var a = t.shapeInfo.texShape, s = a[0], u = a[1], c = ni(e);
                                    return "\n    float " + n + "() {\n      vec2 uv = uvFromFlat(" + s + ", " + u + ", " + c + ");\n      return sampleTexture(" + e + ", uv);\n    }\n  "
                                }(t);
                            case 1:
                                return function (t) {
                                    var e = t.name, n = "get" + e.charAt(0).toUpperCase() + e.slice(1);
                                    if (t.shapeInfo.isUniform) return "\n      float " + n + "(int index) {\n        " + ri(t) + "\n      }\n    ";
                                    var r = t.shapeInfo.texShape, o = r[0], i = r[1];
                                    if (1 === i && 1 === o) return "\n      float " + n + "(int index) {\n        return sampleTexture(" + e + ", halfCR);\n      }\n    ";
                                    var a = ni(e);
                                    return 1 === i ? "\n      float " + n + "(int index) {\n        vec2 uv = vec2(0.5, (float(index + " + a + ") + 0.5) / " + o + ".0);\n        return sampleTexture(" + e + ", uv);\n      }\n    " : 1 === o ? "\n      float " + n + "(int index) {\n        vec2 uv = vec2((float(index + " + a + ") + 0.5) / " + i + ".0, 0.5);\n        return sampleTexture(" + e + ", uv);\n      }\n    " : "\n    float " + n + "(int index) {\n      vec2 uv = uvFromFlat(" + o + ", " + i + ", index + " + a + ");\n      return sampleTexture(" + e + ", uv);\n    }\n  "
                                }(t);
                            case 2:
                                return function (t) {
                                    var e = t.shapeInfo.logicalShape, n = t.name,
                                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1), o = t.shapeInfo.texShape;
                                    if (null != o && A(e, o)) {
                                        var i = o[0], a = o[1];
                                        return "\n    float " + r + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + a + ".0, " + i + ".0);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
                                    }
                                    var s = T(e), u = s.newShape, c = s.keptDims, l = u;
                                    if (l.length < e.length) {
                                        var h = ii(t, l);
                                        return "\n      " + y(h) + "\n      float " + r + "(int row, int col) {\n        return " + r + "(" + ai(["row", "col"], c) + ");\n      }\n    "
                                    }
                                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(" + e[1] + ", 1)));\n        " + ri(t) + "\n      }\n    ";
                                    var f = o[0], p = o[1], d = ni(n);
                                    return 1 === p ? "\n    float " + r + "(int row, int col) {\n      float index = dot(vec3(row, col, " + d + "), vec3(" + e[1] + ", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / " + f + ".0);\n      return sampleTexture(" + n + ", uv);\n    }\n  " : 1 === f ? "\n    float " + r + "(int row, int col) {\n      float index = dot(vec3(row, col, " + d + "), vec3(" + e[1] + ", 1, 1));\n      vec2 uv = vec2((index + 0.5) / " + p + ".0, 0.5);\n      return sampleTexture(" + n + ", uv);\n    }\n  " : "\n  float " + r + "(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * " + e[1] + " + col + " + d + ";\n    vec2 uv = uvFromFlat(" + f + ", " + p + ", index);\n    return sampleTexture(" + n + ", uv);\n  }\n"
                                }(t);
                            case 3:
                                return function (t) {
                                    var e = t.shapeInfo.logicalShape, n = t.name,
                                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1), o = e[1] * e[2], i = e[2],
                                        a = T(e), s = a.newShape, u = a.keptDims, c = s;
                                    if (c.length < e.length) {
                                        var l = ii(t, c);
                                        return "\n        " + y(l) + "\n        float " + r + "(int row, int col, int depth) {\n          return " + r + "(" + ai(["row", "col", "depth"], u) + ");\n        }\n      "
                                    }
                                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(" + o + ", " + i + ", 1)));\n        " + ri(t) + "\n      }\n    ";
                                    var h = t.shapeInfo.texShape, f = h[0], p = h[1], d = t.shapeInfo.flatOffset;
                                    if (p === o && null == d) return "\n        float " + r + "(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(" + i + ", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + p + ".0, " + f + ".0);\n          return sampleTexture(" + n + ", uv);\n        }\n      ";
                                    if (p === i && null == d) return "\n    float " + r + "(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(" + e[1] + ", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + p + ".0, " + f + ".0);\n      return sampleTexture(" + n + ", uv);\n    }\n  ";
                                    var v = ni(n);
                                    return "\n      float " + r + "(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * " + o + " + col * " + i + " + depth + " + v + ";\n        vec2 uv = uvFromFlat(" + f + ", " + p + ", index);\n        return sampleTexture(" + n + ", uv);\n      }\n  "
                                }(t);
                            case 4:
                                return function (t) {
                                    var e = t.shapeInfo.logicalShape, n = t.name,
                                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1), o = e[3], i = e[2] * o,
                                        a = e[1] * i, s = T(e), u = s.newShape, c = s.keptDims;
                                    if (u.length < e.length) {
                                        var l = ii(t, u);
                                        return "\n      " + y(l) + "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        return " + r + "(" + ai(["row", "col", "depth", "depth2"], c) + ");\n      }\n    "
                                    }
                                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(" + a + ", " + i + ", " + o + ", 1)));\n        " + ri(t) + "\n      }\n    ";
                                    var h = t.shapeInfo.flatOffset, f = t.shapeInfo.texShape, p = f[0], d = f[1];
                                    if (d === a && null == h) return "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(" + i + ", " + o + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + d + ".0, " + p + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    ";
                                    if (d === o && null == h) return "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(" + e[1] * e[2] + ", " + e[2] + ", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + d + ".0, " + p + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    ";
                                    var v = ni(n);
                                    return "\n    float " + r + "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + a + " + col * " + i + " +\n          depth * " + o + " + depth2;\n      vec2 uv = uvFromFlat(" + p + ", " + d + ", index + " + v + ");\n      return sampleTexture(" + n + ", uv);\n    }\n  "
                                }(t);
                            case 5:
                                return function (t) {
                                    var e = t.shapeInfo.logicalShape, n = t.name,
                                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1), o = e[4], i = e[3] * o,
                                        a = e[2] * i, s = e[1] * a, u = T(e), c = u.newShape, l = u.keptDims;
                                    if (c.length < e.length) {
                                        var h = ii(t, c);
                                        return "\n      " + y(h) + "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        return " + r + "(" + ai(["row", "col", "depth", "depth2", "depth3"], l) + ");\n      }\n    "
                                    }
                                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + s + ", " + a + ", " + i + ", " + o + ")) +\n          depth3;\n        " + ri(t) + "\n      }\n    ";
                                    var f = t.shapeInfo.flatOffset, p = t.shapeInfo.texShape, d = p[0], v = p[1];
                                    if (v === s && null == f) return "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(" + a + ", " + i + ", " + o + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + v + ".0, " + d + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    ";
                                    if (v === o && null == f) return "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + e[1] * e[2] * e[3] + ",\n               " + e[2] * e[3] + ", " + e[3] + ", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + v + ".0, " + d + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    ";
                                    var m = ni(n);
                                    return "\n    float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + s + " + col * " + a + " + depth * " + i + " +\n          depth2 * " + o + " + depth3 + " + m + ";\n      vec2 uv = uvFromFlat(" + d + ", " + v + ", index);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
                                }(t);
                            case 6:
                                return function (t) {
                                    var e = t.shapeInfo.logicalShape, n = t.name,
                                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1), o = T(e), i = o.newShape,
                                        a = o.keptDims;
                                    if (i.length < e.length) {
                                        var s = ii(t, i);
                                        return "\n      " + y(s) + "\n      float " + r + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return " + r + "(" + ai(["row", "col", "depth", "depth2", "depth3", "depth4"], a) + ");\n      }\n    "
                                    }
                                    var u = e[5], c = e[4] * u, l = e[3] * c, h = e[2] * l, f = e[1] * h;
                                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + f + ", " + h + ", " + l + ", " + c + ")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(" + u + ", 1)));\n        " + ri(t) + "\n      }\n    ";
                                    var p = t.shapeInfo.flatOffset, d = t.shapeInfo.texShape, v = d[0], m = d[1];
                                    if (m === f && null == p) return "\n      float " + r + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(" + h + ", " + l + ", " + c + ", " + u + ")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + m + ".0, " + v + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    ";
                                    if (m === u && null == p) return "\n      float " + r + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(" + e[1] * e[2] * e[3] * e[4] + ",\n               " + e[2] * e[3] * e[4] + ",\n               " + e[3] * e[4] + ",\n               " + e[4] + ")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + m + ".0, " + v + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    ";
                                    var g = ni(n);
                                    return "\n    float " + r + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + f + " + col * " + h + " + depth * " + l + " +\n          depth2 * " + c + " + depth3 * " + u + " + depth4 + " + g + ";\n      vec2 uv = uvFromFlat(" + v + ", " + m + ", index);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
                                }(t);
                            default:
                                throw new Error(e.length + "-D input sampling is not yet supported")
                        }
                    }(t);
                    var o = t.shapeInfo.logicalShape, i = e.logicalShape;
                    return o.length <= i.length && (r += n ? function (t, e) {
                        var n, r = t.name, o = r.charAt(0).toUpperCase() + r.slice(1), i = "get" + o + "AtOutCoords",
                            a = t.shapeInfo.logicalShape.length, s = e.logicalShape.length,
                            u = vo(t.shapeInfo.logicalShape, e.logicalShape), c = oi(s), l = s - a,
                            h = ["x", "y", "z", "w", "u", "v"];
                        n = 0 === a ? "" : s < 2 && 1 <= u.length ? "coords = 0;" : u.map(function (t) {
                            return "coords." + h[t + l] + " = 0;"
                        }).join("\n");
                        var f;
                        f = s < 2 && 0 < a ? "coords" : t.shapeInfo.logicalShape.map(function (t, e) {
                            return "coords." + h[e + l]
                        }).join(", ");
                        var p = "return outputValue;", d = 1 === L(t.shapeInfo.logicalShape), v = 1 === L(e.logicalShape);
                        if (1 !== a || d || v) {
                            if (d && !v) p = 1 === s ? "\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      " : "\n        return vec4(outputValue.x);\n      "; else if (u.length) {
                                var m = a - 2, g = a - 1;
                                -1 < u.indexOf(m) && -1 < u.indexOf(g) ? p = "return vec4(outputValue.x);" : -1 < u.indexOf(m) ? p = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : -1 < u.indexOf(g) && (p = "return vec4(outputValue.xx, outputValue.zz);")
                            }
                        } else p = "\n      return vec4(outputValue.xy, outputValue.xy);\n    ";
                        return "\n    vec4 " + i + "() {\n      " + c + " coords = getOutputCoords();\n      " + n + "\n      vec4 outputValue = get" + o + "(" + f + ");\n      " + p + "\n    }\n  "
                    }(t, e) : function (t, e) {
                        var n = t.name, r = n.charAt(0).toUpperCase() + n.slice(1), o = "get" + r + "AtOutCoords",
                            i = e.texShape, a = t.shapeInfo.texShape, s = t.shapeInfo.logicalShape.length,
                            u = e.logicalShape.length;
                        if (!t.shapeInfo.isUniform && s === u && null == t.shapeInfo.flatOffset && A(a, i)) return "\n      float " + o + "() {\n        return sampleTexture(" + n + ", resultUV);\n      }\n    ";
                        var c = oi(u), l = vo(t.shapeInfo.logicalShape, e.logicalShape), h = u - s,
                            f = ["x", "y", "z", "w", "u", "v"];
                        return "\n    float " + o + "() {\n      " + c + " coords = getOutputCoords();\n      " + (0 === s ? "" : u < 2 && 1 <= l.length ? "coords = 0;" : l.map(function (t) {
                            return "coords." + f[t + h] + " = 0;"
                        }).join("\n")) + "\n      return get" + r + "(" + (u < 2 && 0 < s ? "coords" : t.shapeInfo.logicalShape.map(function (t, e) {
                            return "coords." + f[e + h]
                        }).join(", ")) + ");\n    }\n  "
                    }(t, e)), r
                }(t, e, r)
            }).join("\n"), l = e.texShape, h = Jo(),
            f = "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return " + h.texture2D + "(textureSampler, uv).r;\n    }\n  ",
            p = (s = h).version + "\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    " + s.varyingFs + " vec2 resultUV;\n    " + s.defineOutput + "\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    " + s.defineSpecialNaN + "\n    " + s.defineSpecialInf + "\n    " + s.defineRound + "\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    \nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n    \nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n    \nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  ";
        return a = e.isPacked ? (i = function (t, e) {
            switch (t.length) {
                case 0:
                    return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
                case 1:
                    return n = e, 1 === (r = [Math.ceil(n[0] / 2), Math.ceil(n[1] / 2)])[0] ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * " + r[1] + ".0);\n      }\n    " : 1 === r[1] ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * " + r[0] + ".0);\n      }\n    " : "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + r[0] + ", " + r[1] + "));\n      return 2 * (resTexRC.x * " + r[1] + " + resTexRC.y);\n    }\n  ";
                case 2:
                    return function (t, e) {
                        var n = [Math.ceil(e[0] / 2), Math.ceil(e[1] / 2)];
                        if (A(t, e)) return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(" + n[0] + ", " + n[1] + "));\n      }\n    ";
                        var r = Math.ceil(t[1] / 2);
                        return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n[0] + ", " + n[1] + "));\n\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n      int r = 2 * (index / " + r + ");\n      int c = imod(index, " + r + ") * 2;\n\n      return ivec2(r, c);\n    }\n  "
                    }(t, e);
                case 3:
                    return o = t, i = e, a = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)], u = (s = Math.ceil(o[2] / 2)) * Math.ceil(o[1] / 2), "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + a[0] + ", " + a[1] + "));\n      int index = resTexRC.x * " + a[1] + " + resTexRC.y;\n\n      int b = index / " + u + ";\n      index -= b * " + u + ";\n\n      int r = 2 * (index / " + s + ");\n      int c = imod(index, " + s + ") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";
                default:
                    return function (t, e) {
                        for (var n = [Math.ceil(e[0] / 2), Math.ceil(e[1] / 2)], r = Math.ceil(t[t.length - 1] / 2), o = r * Math.ceil(t[t.length - 2] / 2), i = o, a = "", s = "b, r, c", u = 2; u < t.length - 1; u++) a = "\n      int b" + u + " = index / " + (i *= t[t.length - u - 1]) + ";\n      index -= b" + u + " * " + i + ";\n    " + a, s = "b" + u + ", " + s;
                        return "\n    ivec" + t.length + " getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n[0] + ", " + n[1] + "));\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n\n      " + a + "\n\n      int b = index / " + o + ";\n      index -= b * " + o + ";\n\n      int r = 2 * (index / " + r + ");\n      int c = imod(index, " + r + ") * 2;\n\n      return ivec" + t.length + "(" + s + ");\n    }\n  "
                    }(t, e)
            }
            var n, r, o, i, a, s, u
        }(e.logicalShape, l), "\n    void setOutput(vec4 val) {\n      " + h.output + " = val;\n    }\n  ") : (i = function (t, e) {
            switch (t.length) {
                case 0:
                    return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
                case 1:
                    return 1 === (l = e)[0] ? "\n      int getOutputCoords() {\n        return int(resultUV.x * " + l[1] + ".0);\n      }\n    " : 1 === l[1] ? "\n      int getOutputCoords() {\n        return int(resultUV.y * " + l[0] + ".0);\n      }\n    " : "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + l[0] + ", " + l[1] + "));\n      return resTexRC.x * " + l[1] + " + resTexRC.y;\n    }\n  ";
                case 2:
                    return A(u = t, c = e) ? "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + c[0] + ", " + c[1] + "));\n      }\n    " : 1 === u[1] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + c[0] + ", " + c[1] + "));\n        int index = resTexRC.x * " + c[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    " : 1 === u[0] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + c[0] + ", " + c[1] + "));\n        int index = resTexRC.x * " + c[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    " : "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + c[0] + ", " + c[1] + "));\n      int index = resTexRC.x * " + c[1] + " + resTexRC.y;\n      int r = index / " + u[1] + ";\n      int c = index - r * " + u[1] + ";\n      return ivec2(r, c);\n    }\n  ";
                case 3:
                    return h = e, f = Qo(["r", "c", "d"], t), "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + h[0] + ", " + h[1] + "));\n      int index = resTexRC.x * " + h[1] + " + resTexRC.y;\n      " + f + "\n      return ivec3(r, c, d);\n    }\n  ";
                case 4:
                    return a = e, s = Qo(["r", "c", "d", "d2"], t), "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + a[0] + ", " + a[1] + "));\n      int index = resTexRC.x * " + a[1] + " + resTexRC.y;\n      " + s + "\n      return ivec4(r, c, d, d2);\n    }\n  ";
                case 5:
                    return o = e, i = Qo(["r", "c", "d", "d2", "d3"], t), "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(" + o[0] + ",\n                             " + o[1] + "));\n\n      int index = resTexRC.x * " + o[1] + " + resTexRC.y;\n\n      " + i + "\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  ";
                case 6:
                    return n = e, r = Qo(["r", "c", "d", "d2", "d3", "d4"], t), "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + n[0] + ", " + n[1] + "));\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n\n      " + r + "\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  ";
                default:
                    throw new Error(t.length + "-D output sampling is not yet supported")
            }
            var n, r, o, i, a, s, u, c, l, h, f
        }(e.logicalShape, l), "\n    void setOutput(float val) {\n      " + h.output + " = vec4(val, 0, 0, 0);\n    }\n  "), r && (p += "\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n"), [p, f, a, u, i, c, n].join("\n")
    }

    function ni(t) {
        return "offset" + t
    }

    function ri(t) {
        var e = t.name, n = L(t.shapeInfo.logicalShape);
        return n < 2 ? "return " + e + ";" : "\n    for (int i = 0; i < " + n + "; i++) {\n      if (i == index) {\n        return " + e + "[i];\n      }\n    }\n  "
    }

    function oi(t) {
        if (t <= 1) return "int";
        if (2 === t) return "ivec2";
        if (3 === t) return "ivec3";
        if (4 === t) return "ivec4";
        if (5 === t) return "ivec5";
        if (6 === t) return "ivec6";
        throw Error("GPU for rank " + t + " is not yet supported")
    }

    function ii(t, e) {
        var n = JSON.parse(JSON.stringify(t));
        return n.shapeInfo.logicalShape = e, n
    }

    function ai(e, t) {
        return t.map(function (t) {
            return e[t]
        }).join(", ")
    }

    function si(t, e, n, r) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, P(2 < t.length, function () {
            return "Packed arg" + (n.charAt(0).toUpperCase() + n.slice(1)) + " supports only inputs with rank above 2."
        });
        var o = t[t.length - 1], i = Math.ceil(o / e);
        this.outputShape = t.slice(0, -1), 1 < i && this.outputShape.push(i), r || this.variableNames.push("bestIndicesA");
        var a, s, u = this.outputShape, c = u.length, l = oi(c), h = $o("coords", c);
        if (1 === i) {
            var f = oi(s = c + 1);
            a = "\n        " + f + " sourceLocR = " + f + "(" + h.join() + ", 0);\n        ++" + h[c - 1] + ";\n        " + f + " sourceLocG = " + f + "(" + h.join() + ", 0);\n        ++" + h[c - 2] + ";\n        " + f + " sourceLocA = " + f + "(" + h.join() + ", 0);\n        --" + h[c - 1] + ";\n        " + f + " sourceLocB = " + f + "(" + h.join() + ", 0);\n        --" + h[c - 2] + ";"
        } else a = "\n        " + l + " sourceLocR = coords;\n        ++" + h[(s = c) - 1] + ";\n        " + l + " sourceLocG = coords;\n        ++" + h[c - 2] + ";\n        " + l + " sourceLocA = coords;\n        --" + h[c - 1] + ";\n        " + l + " sourceLocB = coords;\n        --" + h[c - 2] + ";";
        var p = ["x", "y", "z", "w", "u", "v"].slice(0, s), d = "." + p[s - 1], v = p.map(function (t) {
                return "int " + t
            }), m = $o("sourceLocR", s - 1).concat("inIdx.r"), g = $o("sourceLocG", s - 1).concat("inIdx.g"),
            y = $o("sourceLocB", s - 1).concat("inIdx.b"), x = $o("sourceLocA", s - 1).concat("inIdx.a"),
            b = "max" === n ? "greaterThan" : "lessThan",
            w = r ? "" : "\n          inIdx = round(vec4(getBestIndicesAChannel(" + m.join() + "),\n                             getBestIndicesAChannel(" + g.join() + "),\n                             getBestIndicesAChannel(" + y.join() + "),\n                             getBestIndicesAChannel(" + x.join() + ")));",
            C = "vec4(\n            getAChannel(" + m.join() + "),\n            hasNextCol ? getAChannel(" + g.join() + ") : 0.,\n            hasNextRow ? getAChannel(" + y.join() + ") : 0.,\n            hasNextRow && hasNextCol ? getAChannel(" + x.join() + ") : 0.)",
            E = r ? "" : "\n      float getBestIndicesAChannel(" + v.join() + ") {\n        return getChannel(getBestIndicesA(" + p.join() + "),\n                                          vec2(" + p.slice(-2).join() + "));\n      }";
        this.userCode = "\n      float getAChannel(" + v.join() + ") {\n        return getChannel(getA(" + p.join() + "),\n                               vec2(" + p.slice(-2).join() + "));\n      }\n      " + E + "\n      void main() {\n        " + l + " coords = getOutputCoords();\n        bool hasNextCol = " + h[c - 1] + " < " + (u[c - 1] - 1) + ";\n        bool hasNextRow = " + h[c - 2] + " < " + (u[c - 2] - 1) + ";\n        " + a + "\n        ivec4 srcIdx = ivec4(sourceLocR" + d + ", sourceLocG" + d + ",\n          sourceLocB" + d + ", sourceLocA" + d + ") * " + e + ";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = " + C + ";\n\n        for (int i = 0; i < " + e + "; i++) {\n          inIdx = srcIdx;\n          " + w + "\n          vec4 candidate = " + C + ";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(" + b + "(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    "
    }

    function ui(t) {
        this.variableNames = ["dy"], this.outputShape = t.inShape;
        var e = t.filterHeight, n = t.filterWidth, r = t.strideHeight, o = t.strideWidth, i = t.dilationHeight,
            a = t.dilationWidth, s = t.effectiveFilterHeight, u = t.effectiveFilterWidth, c = s - 1 - t.padInfo.top,
            l = u - 1 - t.padInfo.left, h = 1 / (e * n);
        this.userCode = "\n      const ivec2 pads = ivec2(" + c + ", " + l + ");\n      const float avgMultiplier = float(" + h + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + s + ";\n            wR += " + i + ") {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + u + ";\n            wC+= " + a + ") {\n            float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function ci(t) {
        this.variableNames = ["dy"], this.outputShape = t.inShape;
        var e = t.filterDepth, n = t.filterHeight, r = t.filterWidth, o = t.strideDepth, i = t.strideHeight,
            a = t.strideWidth, s = t.dilationDepth, u = t.dilationHeight, c = t.dilationWidth,
            l = t.effectiveFilterDepth, h = t.effectiveFilterHeight, f = t.effectiveFilterWidth,
            p = l - 1 - t.padInfo.front, d = h - 1 - t.padInfo.top, v = f - 1 - t.padInfo.left, m = 1 / (e * n * r);
        this.userCode = "\n      const ivec3 pads = ivec3(" + p + ", " + d + ", " + v + ");\n      const float avgMultiplier = float(" + m + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + l + ";\n            wD += " + s + ") {\n          float dyD = float(dyDCorner + wD) / " + o + ".0;\n\n          if (dyD < 0.0 || dyD >= " + t.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + h + ";\n              wR += " + u + ") {\n            float dyR = float(dyRCorner + wR) / " + i + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + f + ";\n                wC += " + c + ") {\n              float dyC = float(dyCCorner + wC) / " + a + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function li(t, e, n, r, o, i) {
        this.outputShape = [], this.variableNames = ["x", "mean", "variance"], go(t, e), go(t, n);
        var a = "0.0";
        null != r && (go(t, r), this.variableNames.push("offset"), a = "getOffsetAtOutCoords()");
        var s = "1.0";
        null != o && (go(t, o), this.variableNames.push("scale"), s = "getScaleAtOutCoords()"), this.outputShape = t, this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + a + ";\n        float scale = " + s + ";\n        float inv = scale * inversesqrt(variance + float(" + i + "));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    "
    }

    function hi(t, e, n, r, o, i) {
        this.packedInputs = !0, this.packedOutput = !0, this.variableNames = ["x", "mean", "variance"], go(t, e), go(t, n);
        var a = "vec4(0.0)";
        null != r && (go(t, r), this.variableNames.push("offset"), a = "getOffsetAtOutCoords()");
        var s = "vec4(1.0)";
        null != o && (go(t, o), this.variableNames.push("scale"), s = "getScaleAtOutCoords()"), this.outputShape = t, this.userCode = "\n      void main() {\n        vec4 offset = " + a + ";\n        vec4 scale = " + s + ";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(" + i + "));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    "
    }

    function fi(t, e, n) {
        this.variableNames = ["AReal", "AImag", "BReal", "BImag"], this.outputShape = go(e, n), this.userCode = "\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        " + t + "\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    "
    }

    function pi(t, e, n) {
        this.variableNames = ["A", "B"], this.outputShape = go(e, n), this.userCode = "\n      float binaryOperation(float a, float b) {\n        " + t + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    "
    }

    function di(t, e, n, r) {
        void 0 === r && (r = !1), this.variableNames = ["A", "B"], this.supportsBroadcasting = !0, this.packedInputs = !0, this.packedOutput = !0, this.outputShape = go(e, n);
        var o = this.outputShape.length, i = "";
        if (r) if (0 === o || 1 === L(this.outputShape)) i = "\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        "; else if (i = "\n          " + oi(o) + " coords = getOutputCoords();\n        ", 1 === o) i += "\n            result.y = (coords + 1) >= " + this.outputShape[0] + " ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          "; else {
            var a = $o("coords", o);
            i += "\n            bool nextRowOutOfBounds =\n              (" + a[o - 2] + " + 1) >= " + this.outputShape[o - 2] + ";\n            bool nextColOutOfBounds =\n              (" + a[o - 1] + " + 1) >= " + this.outputShape[o - 1] + ";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          "
        }
        this.userCode = "\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        " + t + "\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        " + i + "\n\n        setOutput(result);\n      }\n    "
    }

    function vi(t) {
        this.variableNames = ["real", "imag"], this.outputShape = t, this.userCode = "\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "
    }

    function mi(t) {
        this.outputShape = [], this.outputShape = bn(t, 1), this.variableNames = t.map(function (t, e) {
            return "T" + e
        });
        var e = new Array(t.length - 1);
        e[0] = t[0][1];
        for (var n = 1; n < e.length; n++) e[n] = e[n - 1] + t[n][1];
        var r = ["if (yC < " + e[0] + ") setOutput(getT0(yR, yC));"];
        for (n = 1; n < e.length; n++) {
            var o = e[n - 1];
            r.push("else if (yC < " + e[n] + ") setOutput(getT" + n + "(yR, yC-" + o + "));")
        }
        var i = e.length, a = e[e.length - 1];
        r.push("else setOutput(getT" + i + "(yR, yC-" + a + "));"), this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        " + r.join("\n        ") + "\n      }\n    "
    }

    function gi(t, e) {
        this.packedInputs = !0, this.packedOutput = !0, this.outputShape = [], this.outputShape = bn(t, e);
        var n = this.outputShape, r = n.length, o = oi(r), i = $o("coords", r),
            a = ["x", "y", "z", "w", "u", "v"].slice(0, r);
        this.variableNames = t.map(function (t, e) {
            return "T" + e
        });
        var s = new Array(t.length - 1);
        s[0] = t[0][e];
        for (var u = 1; u < s.length; u++) s[u] = s[u - 1] + t[u][e];
        var c = a[e], l = a.slice(-2), h = a.join(),
            f = "if (" + c + " < " + s[0] + ") {\n        return getChannel(\n            getT0(" + h + "), vec2(" + l.join() + "));\n        }";
        for (u = 1; u < s.length; u++) {
            var p = s[u - 1];
            f += "\n        if (" + c + " < " + s[u] + "  && " + c + " >= " + s[u - 1] + ") {\n          return getChannel(\n            getT" + u + "(" + ki(a, c, p) + "),\n            vec2(" + ki(l, c, p) + "));\n        }"
        }
        var d = s.length, v = s[s.length - 1];
        f += "\n        return getChannel(\n          getT" + d + "(" + ki(a, c, v) + "),\n          vec2(" + ki(l, c, v) + "));", this.userCode = "\n      float getValue(" + a.map(function (t) {
            return "int " + t
        }) + ") {\n        " + f + "\n      }\n\n      void main() {\n        " + o + " coords = getOutputCoords();\n        vec4 result = vec4(getValue(" + i + "), 0., 0., 0.);\n\n        " + i[r - 1] + " = " + i[r - 1] + " + 1;\n        if (" + i[r - 1] + " < " + n[r - 1] + ") {\n          result.g = getValue(" + i + ");\n        }\n\n        " + i[r - 2] + " = " + i[r - 2] + " + 1;\n        if (" + i[r - 2] + " < " + n[r - 2] + ") {\n          result.a = getValue(" + i + ");\n        }\n\n        " + i[r - 1] + " = " + i[r - 1] + " - 1;\n        if (" + i[r - 2] + " < " + n[r - 2] + " &&\n            " + i[r - 1] + " < " + n[r - 1] + ") {\n          result.b = getValue(" + i + ");\n        }\n        setOutput(result);\n      }\n    "
    }

    var yi = "return a + b;", xi = "return a - b;", bi = "return a * b;", wi = "return (a < 0.) ? b * a : a;",
        Ci = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n",
        Ei = (Ri.prototype.getCustomSetupFunc = function (n, r) {
            var o = this;
            return function (t, e) {
                null == o.minLoc && (o.minLoc = t.getUniformLocationNoThrow(e, "minVal"), o.maxLoc = t.getUniformLocationNoThrow(e, "maxVal")), t.gl.uniform1f(o.minLoc, n), t.gl.uniform1f(o.maxLoc, r)
            }
        }, Ri), _i = (Ii.prototype.getCustomSetupFunc = function (n, r) {
            var o = this;
            return function (t, e) {
                null == o.minLoc && (o.minLoc = t.getUniformLocationNoThrow(e, "minVal"), o.maxLoc = t.getUniformLocationNoThrow(e, "maxVal")), t.gl.uniform1f(o.minLoc, n), t.gl.uniform1f(o.maxLoc, r)
            }
        }, Ii);

    function Ii(t) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t, this.userCode = "\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "
    }

    function Ri(t) {
        this.variableNames = ["A"], this.outputShape = t, this.userCode = "\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "
    }

    function ki(t, e, n) {
        var r = t.indexOf(e);
        return t.map(function (t, e) {
            return e === r ? t + " - " + n : t
        }).join()
    }

    function Si(t) {
        this.variableNames = ["x", "dy"], this.outputShape = t.filterShape;
        var e = t.strideHeight, n = t.strideWidth, r = t.padInfo.top, o = t.padInfo.left,
            i = "channelsLast" === t.dataFormat;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t.outHeight + "; yR++) {\n            int xR = wR + yR * " + e + " - " + r + ";\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t.outWidth + "; yC++) {\n              int xC = wC + yC * " + n + " - " + o + ";\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              if (" + i + ") {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function Di(t) {
        this.variableNames = ["dy", "W"], this.outputShape = t.inShape;
        var e = t.filterHeight, n = t.filterWidth, r = t.strideHeight, o = t.strideWidth,
            i = "channelsLast" === t.dataFormat, a = e - 1 - t.padInfo.top, s = n - 1 - t.padInfo.left, u = i ? 1 : 2,
            c = i ? 2 : 3, l = i ? 3 : 1;
        this.userCode = "\n      const ivec2 pads = ivec2(" + a + ", " + s + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[" + l + "];\n\n        ivec2 dyCorner = ivec2(coords[" + u + "], coords[" + c + "]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + e + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + t.outChannels + "; d2++) {\n\n              if (" + i + ") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function Ai(t) {
        this.variableNames = ["x", "dy"], this.outputShape = t.filterShape;
        var e = t.strideDepth, n = t.strideHeight, r = t.strideWidth, o = t.padInfo.front, i = t.padInfo.top,
            a = t.padInfo.left;
        this.userCode = "\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t.batchSize + "; b++) {\n          for (int yF = 0; yF < " + t.outDepth + "; yF++) {\n            int xF = wF + yF * " + e + " - " + o + ";\n\n            if (xF < 0 || xF >= " + t.inDepth + ") {\n              continue;\n            }\n\n            for (int yR = 0; yR < " + t.outHeight + "; yR++) {\n              int xR = wR + yR * " + n + " - " + i + ";\n\n              if (xR < 0 || xR >= " + t.inHeight + ") {\n                continue;\n              }\n\n              for (int yC = 0; yC < " + t.outWidth + "; yC++) {\n                int xC = wC + yC * " + r + " - " + a + ";\n\n                if (xC < 0 || xC >= " + t.inWidth + ") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function Ti(t) {
        this.variableNames = ["dy", "W"], this.outputShape = t.inShape;
        var e = t.filterDepth, n = t.filterHeight, r = t.filterWidth, o = t.strideDepth, i = t.strideHeight,
            a = t.strideWidth, s = e - 1 - t.padInfo.front, u = n - 1 - t.padInfo.top, c = r - 1 - t.padInfo.left;
        this.userCode = "\n      const ivec3 pads = ivec3(" + s + ", " + u + ", " + c + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + e + "; wF++) {\n          float dyF = float(dyFCorner + wF) / " + o + ".0;\n\n          if (dyF < 0.0 || dyF >= " + t.outDepth + ".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = " + e + " - 1 - wF;\n\n          for (int wR = 0; wR < " + n + "; wR++) {\n            float dyR = float(dyRCorner + wR) / " + i + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = " + n + " - 1 - wR;\n\n            for (int wC = 0; wC < " + r + "; wC++) {\n              float dyC = float(dyCCorner + wC) / " + a + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = " + r + " - 1 - wC;\n\n              for (int d2 = 0; d2 < " + t.outChannels + "; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function Ni(t) {
        this.variableNames = ["x", "dy"], this.outputShape = t.filterShape;
        var e = t.strideHeight, n = t.strideWidth, r = t.padInfo.top, o = t.padInfo.left,
            i = t.outChannels / t.inChannels;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * " + i + " + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < " + t.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t.outHeight + "; yR++) {\n            int xR = wR + yR * " + e + " - " + r + ";\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t.outWidth + "; yC++) {\n              int xC = wC + yC * " + n + " - " + o + ";\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function Fi(t) {
        this.variableNames = ["dy", "W"], this.outputShape = t.inShape;
        var e = t.filterHeight, n = t.filterWidth, r = t.strideHeight, o = t.strideWidth, i = e - 1 - t.padInfo.top,
            a = n - 1 - t.padInfo.left, s = t.outChannels / t.inChannels;
        this.userCode = "\n      const ivec2 pads = ivec2(" + i + ", " + a + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < " + e + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n + " - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < " + s + "; dm++) {\n              int d2 = d1 * " + s + " + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function Mi(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = null), void 0 === r && (r = !1), this.variableNames = ["x", "W"], this.outputShape = t.outShape;
        var o = t.padInfo.top, i = t.padInfo.left, a = t.strideHeight, s = t.strideWidth, u = t.dilationHeight,
            c = t.dilationWidth, l = t.filterHeight, h = t.filterWidth, f = 4 * Math.floor(t.inChannels / 4),
            p = t.inChannels % 4, d = "channelsLast" === t.dataFormat, v = d ? 1 : 2, m = d ? 2 : 3, g = d ? 3 : 1,
            y = "", x = "";
        n && (y = r ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + n + "\n        }" : "\n          float activation(float x) {\n            " + n + "\n          }\n        ", x = "result = activation(result);");
        var b = e ? "result += getBiasAtOutCoords();" : "";
        e && this.variableNames.push("bias"), r && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + y + "\n\n      const ivec2 strides = ivec2(" + a + ", " + s + ");\n      const ivec2 pads = ivec2(" + o + ", " + i + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[" + g + "];\n\n        ivec2 xRCCorner =\n            ivec2(coords[" + v + "], coords[" + m + "]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + l + "; wR++) {\n          int xR = xRCorner + wR * " + u + ";\n\n          if (xR < 0 || xR >= " + t.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + h + "; wC++) {\n            int xC = xCCorner + wC * " + c + ";\n\n            if (xC < 0 || xC >= " + t.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + f + "; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (" + d + ") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (" + (1 == p) + ") {\n\n              if (" + d + ") {\n                dotProd +=\n                    getX(batch, xR, xC, " + f + ") *\n                    getW(wR, wC, " + f + ", d2);\n              } else {\n                dotProd +=\n                    getX(batch, " + f + ", xR, xC) *\n                    getW(wR, wC, " + f + ", d2);\n              }\n\n            } else if (" + (2 == p) + ") {\n              vec2 wValues = vec2(\n                getW(wR, wC, " + f + ", d2),\n                getW(wR, wC, " + f + " + 1, d2)\n              );\n\n              if (" + d + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, " + f + "),\n                  getX(batch, xR, xC, " + f + " + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, " + f + ", xR, xC),\n                  getX(batch, " + f + " + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (" + (3 == p) + ") {\n              vec3 wValues = vec3(\n                getW(wR, wC, " + f + ", d2),\n                getW(wR, wC, " + f + " + 1, d2),\n                getW(wR, wC, " + f + " + 2, d2)\n              );\n\n              if (" + d + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, " + f + "),\n                  getX(batch, xR, xC, " + f + " + 1),\n                  getX(batch, xR, xC, " + f + " + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, " + f + ", xR, xC),\n                  getX(batch, " + f + " + 1, xR, xC),\n                  getX(batch, " + f + " + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        " + b + "\n        " + x + "\n        setOutput(result);\n      }\n    "
    }

    function Oi(t) {
        this.variableNames = ["x", "W"], this.outputShape = t.outShape;
        var e = t.padInfo.front, n = t.padInfo.top, r = t.padInfo.left, o = t.strideDepth, i = t.strideHeight,
            a = t.strideWidth, s = t.dilationDepth, u = t.dilationHeight, c = t.dilationWidth, l = t.filterDepth,
            h = t.filterHeight, f = t.filterWidth, p = 4 * Math.floor(t.inChannels / 4), d = t.inChannels % 4;
        this.userCode = "\n      const ivec3 strides = ivec3(" + o + ", " + i + ", " + a + ");\n      const ivec3 pads = ivec3(" + e + ", " + n + ", " + r + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + l + "; wF++) {\n          int xF = xFCorner + wF * " + s + ";\n\n          if (xF < 0 || xF >= " + t.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h + "; wR++) {\n            int xR = xRCorner + wR * " + u + ";\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + f + "; wC++) {\n              int xC = xCCorner + wC * " + c + ";\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < " + p + "; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (" + (1 == d) + ") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, " + p + ") *\n                  getW(wF, wR, wC, " + p + ", d2);\n              } else if (" + (2 == d) + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, " + p + "),\n                  getX(batch, xF, xR, xC, " + p + " + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, " + p + ", d2),\n                  getW(wF, wR, wC, " + p + " + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (" + (3 == d) + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, " + p + "),\n                  getX(batch, xF, xR, xC, " + p + " + 1),\n                  getX(batch, xF, xR, xC, " + p + " + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, " + p + ", d2),\n                  getW(wF, wR, wC, " + p + " + 1, d2),\n                  getW(wF, wR, wC, " + p + " + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function Pi(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = null), void 0 === r && (r = !1), this.variableNames = ["x", "W"], this.outputShape = t.outShape;
        var o = t.inHeight, i = t.inWidth, a = t.padInfo.top, s = t.padInfo.left, u = t.strideHeight, c = t.strideWidth,
            l = t.dilationHeight, h = t.dilationWidth, f = t.filterHeight, p = t.filterWidth,
            d = t.outChannels / t.inChannels, v = "", m = "";
        n && (v = r ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + n + "\n        }" : "\n          float activation(float x) {\n            " + n + "\n          }\n        ", m = "result = activation(result);");
        var g = e ? "result += getBiasAtOutCoords();" : "";
        e && this.variableNames.push("bias"), r && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + v + "\n\n      const ivec2 strides = ivec2(" + u + ", " + c + ");\n      const ivec2 pads = ivec2(" + a + ", " + s + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + d + ";\n        int q = d2 - d1 * " + d + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + f + "; wR++) {\n          int xR = xRCorner + wR * " + l + ";\n\n          if (xR < 0 || xR >= " + o + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + p + "; wC++) {\n            int xC = xCCorner + wC * " + h + ";\n\n            if (xC < 0 || xC >= " + i + ") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        " + g + "\n        " + m + "\n        setOutput(result);\n      }\n    "
    }

    function Bi(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = null), void 0 === r && (r = !1), this.variableNames = ["x", "W"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t.outShape;
        for (var o = t.inHeight, i = t.inWidth, a = t.padInfo.top, s = t.padInfo.left, u = t.strideHeight, c = t.strideWidth, l = t.dilationHeight, h = t.dilationWidth, f = t.filterHeight, p = t.filterWidth, d = p, v = "int xR; int xC; int xCOffset;", m = 0; m < f; m++) for (var g = 0; g < p; g++) v += "\n          vec4 xTexelR" + m + "C" + 2 * g + " = vec4(0.);\n          vec4 wR" + m + "C" + g + " = vec4(0.);\n          vec4 xR" + m + "C" + g + " = vec4(0.);";
        for (m = 0; m < f; m++) for (var y = 0; y < d; y++) {
            if (v += "\n          xR = xRCorner + " + m * l + ";\n          xC = xCCorner + " + (g = 2 * y) * h + ";\n        ", 1 === c) {
                if (g < p && (v += s % 2 == 1 ? "\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < " + o + " && xCOffset >= 0 && xCOffset < " + i + ") {\n                  xTexelR" + m + "C" + g + " = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= " + i + ") {\n                    xTexelR" + m + "C" + g + ".zw = vec2(0.);\n                  }\n                } else {\n                  xTexelR" + m + "C" + g + " = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < " + o + " && xCOffset >= 0 && xCOffset < " + i + ") {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= " + i + ") {\n                    previous.zw = vec2(0.);\n                  }\n\n                  xR" + m + "C" + g + " = vec4(previous.zw, xTexelR" + m + "C" + g + ".xy);\n                } else {\n                  xR" + m + "C" + g + " = vec4(0, 0, xTexelR" + m + "C" + g + ".xy);\n                }\n              " : "\n                if(xR >= 0 && xR < " + o + " && xC >= 0 && xC < " + i + ") {\n                  xTexelR" + m + "C" + g + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + m + "C" + g + " = vec4(0.);\n                }\n\n                xR" + m + "C" + g + " = xTexelR" + m + "C" + g + ";\n              ", g + 1 < p)) {
                    var x = s % 2 == 0 ? E(h) : h;
                    h % 2 == 0 && s % 2 == 1 || h % 2 != 0 && s % 2 != 1 ? (v += "\n                  xCOffset = xC + " + s % 2 + " + " + x + ";\n\n                  if(xR >= 0 && xR < " + o + " &&\n                    xCOffset >= 0 && xCOffset < " + i + ") {\n                    xTexelR" + m + "C" + (g + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n                ", 1 < h && (v += "\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < " + o + " &&\n                      xCOffset >= 0 && xCOffset < " + i + ") {\n                      xTexelR" + m + "C" + g + " = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR" + m + "C" + g + " = vec4(0.);\n                    }\n                  "), v += "\n                  xR" + m + "C" + (g + 1) + " = vec4(\n                    xTexelR" + m + "C" + g + ".zw, xTexelR" + m + "C" + (g + 2) + ".xy);\n                ") : v += "\n                  xCOffset = xC + " + x + ";\n\n                  if(xR >= 0 && xR < " + o + " &&\n                    xCOffset >= 0 && xCOffset < " + i + ") {\n                    xTexelR" + m + "C" + (g + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR" + m + "C" + (g + 1) + " = xTexelR" + m + "C" + (g + 2) + ";\n                "
                }
            } else g < p && (v += "\n              if(xR >= 0 && xR < " + o + ") {\n            ", s % 2 == 1 ? (v += "\n                xCOffset = xC + 1 - " + c + ";\n                if(xCOffset >= 0 && xCOffset < " + i + ") {\n                  xTexelR" + m + "C" + g + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + m + "C" + g + " = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < " + i + ") {\n                  xTexelR" + m + "C" + (g + 2) + " = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR" + m + "C" + (g + 2) + " = vec4(0.);\n                }\n\n                xR" + m + "C" + g + " = vec4(\n                  xTexelR" + m + "C" + g + ".zw, xTexelR" + m + "C" + (g + 2) + ".zw);\n              ", g + 1 < p && (v += "\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + " + c + ";\n                  if(xCOffset >= 0 && xCOffset < " + i + ") {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR" + m + "C" + (g + 1) + " = vec4(xTexelR" + m + "C" + (g + 2) + ".xy, final.xy);\n                ")) : (v += "\n                if(xC >= 0 && xC < " + i + ") {\n                  xTexelR" + m + "C" + g + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + m + "C" + g + " = vec4(0.);\n                }\n\n                xCOffset = xC + " + c + ";\n                if(xCOffset >= 0 && xCOffset < " + i + ") {\n                  xTexelR" + m + "C" + (g + 2) + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + m + "C" + (g + 2) + " = vec4(0.);\n                }\n\n                xR" + m + "C" + g + " = vec4(\n                  xTexelR" + m + "C" + g + ".xy, xTexelR" + m + "C" + (g + 2) + ".xy);\n              ", g + 1 < p && (v += "\n                  xR" + m + "C" + (g + 1) + " = vec4(\n                    xTexelR" + m + "C" + g + ".zw, xTexelR" + m + "C" + (g + 2) + ".zw);\n                ")), v += "}");
            g < p && (v += "\n            vec4 wTexelR" + m + "C" + g + " = getW(" + m + ", " + g + ", d1, q);\n            wR" + m + "C" + g + " = vec4(wTexelR" + m + "C" + g + ".xz, wTexelR" + m + "C" + g + ".xz);\n          ", g + 1 < p && (v += "\n              vec4 wTexelR" + m + "C" + (g + 1) + " = getW(" + m + ", " + (g + 1) + ", d1, q);\n              wR" + m + "C" + (g + 1) + " =\n                vec4(wTexelR" + m + "C" + (g + 1) + ".xz, wTexelR" + m + "C" + (g + 1) + ".xz);"))
        }
        for (m = 0; m < f; m++) for (g = 0; g < p; g++) v += "dotProd += xR" + m + "C" + g + " * wR" + m + "C" + g + ";";
        var b = "", w = "";
        n && (b = r ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + n + "\n        }" : "vec4 activation(vec4 x) {\n          " + n + "\n        }", w = "result = activation(result);");
        var C = e ? "result += getBiasAtOutCoords();" : "";
        e && this.variableNames.push("bias"), r && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + b + "\n\n      const ivec2 strides = ivec2(" + u + ", " + c + ");\n      const ivec2 pads = ivec2(" + a + ", " + s + ");\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 dotProd = vec4(0.);\n\n        " + v + "\n\n        vec4 result = dotProd;\n        " + C + "\n        " + w + "\n        setOutput(result);\n      }\n    "
    }

    function Li(t, e, n, r, o) {
        this.variableNames = ["Image", "Boxes", "BoxInd"], this.outputShape = [];
        var i = t[0], a = t[1], s = t[2], u = t[3], c = e[0], l = n[0], h = n[1];
        this.outputShape = [c, l, h, u];
        var f = "bilinear" === r ? 1 : 0, p = [a - 1 + ".0", s - 1 + ".0"], d = p[0], v = p[1],
            m = 1 < l ? ["" + (a - 1) / (l - 1), "(y2-y1) * height_ratio", "y1*" + d + " + float(y)*(height_scale)"] : ["0.0", "0.0", "0.5 * (y1+y2) * " + d],
            g = m[0], y = m[1], x = m[2],
            b = 1 < h ? ["" + (s - 1) / (h - 1), "(x2-x1) * width_ratio", "x1*" + v + " + float(x)*(width_scale)"] : ["0.0", "0.0", "0.5 * (x1+x2) * " + v],
            w = b[0], C = b[1], E = b[2];
        this.userCode = "\n      const float height_ratio = float(" + g + ");\n      const float width_ratio = float(" + w + ");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= " + i + ") {\n          return;\n        }\n\n        float height_scale = " + y + ";\n        float width_scale = " + C + ";\n\n        float in_y = " + x + ";\n        if( in_y < 0.0 || in_y > " + d + " ) {\n          setOutput(float(" + o + "));\n          return;\n        }\n        float in_x = " + E + ";\n        if( in_x < 0.0 || in_x > " + v + " ) {\n          setOutput(float(" + o + "));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(" + f + " == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    "
    }

    function Wi(t, e, n) {
        this.variableNames = ["x"];
        var r = (this.outputShape = t).length, o = t[t.length - 1], i = n ? "<" : ">";
        this.userCode = "\n      int getIndex(int i) {\n        " + (n ? "return " + o + " -i - 1;" : "return i;") + "\n      }\n\n      void main() {\n        " + oi(r) + " coords = getOutputCoords();\n        int end = " + zi(r, "coords") + ";\n        float val = 0.0;\n        for (int i = " + o + " - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx " + i + " end) {\n            continue;\n          }\n          if (idx == end && " + e + ") {\n            continue;\n          }\n          " + zi(r, "coords") + " = idx;\n          val += getX(" + function (t, e) {
            if (1 === r) return e;
            if (2 === r) return e + ".x, " + e + ".y";
            if (3 === r) return "coords.x, coords.y, coords.z";
            if (4 === r) return "coords.x, coords.y, coords.z, coords.w";
            throw Error("Cumulative sum for rank " + r + " is not yet supported")
        }(0, "coords") + ");\n        }\n        setOutput(val);\n      }\n    "
    }

    function zi(t, e) {
        if (1 === t) return "" + e;
        if (2 === t) return e + ".y";
        if (3 === t) return e + ".z";
        if (4 === t) return e + ".w";
        throw Error("Cumulative sum for rank " + t + " is not yet supported")
    }

    function Ui(t) {
        this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0, this.outPackingScheme = $t.DENSE;
        var e = se(t), n = Jo();
        this.outputShape = t, this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + Qo(["r", "c", "d"], t) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(" + e[0] + ", " + e[1] + "));\n        int index = 4 * (resTexRC.x * " + e[1] + " + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        " + n.output + " = result;\n      }\n    "
    }

    function Vi(t) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outPackingScheme = $t.DENSE;
        var e = se(t), n = Jo();
        this.outputShape = t, this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + Qo(["r", "c", "d"], t) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(" + e[0] + ", " + e[1] + "));\n        int index = 4 * (resTexRC.x * " + e[1] + " + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        " + n.output + " = result;\n      }\n    "
    }

    function Gi(t) {
        this.variableNames = ["X"], this.outputShape = [t, t], this.userCode = "\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "
    }

    function Hi(t) {
        this.variableNames = ["A"], this.outTexUsage = Jt.DOWNLOAD;
        var e = Jo();
        this.outputShape = t, this.userCode = "\n      " + ti + "\n\n      void main() {\n        float x = getAAtOutCoords();\n        " + e.output + " = encode_float(x);\n      }\n    "
    }

    function qi(t) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !1, this.outTexUsage = Jt.DOWNLOAD;
        var e = Jo();
        this.outputShape = t, this.userCode = "\n      " + ti + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        " + e.output + " = encode_float(x);\n      }\n    "
    }

    function ji(t, e, n) {
        void 0 === n && (n = !1), this.variableNames = ["A"];
        var r = Jo(), o = e[0], i = e[1];
        this.outputShape = t;
        var a = "result";
        n && (a = "floor(result * 255. + 0.5)"), this.userCode = "\n      " + Zo(t) + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n        \n        int r = flatIndex / " + i + ";\n        int c = imod(flatIndex, " + i + ");\n        vec2 uv = (vec2(c, r) + halfCR) / vec2(" + i + ".0, " + o + ".0);\n        vec4 values = " + r.texture2D + "(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        " + r.output + " = vec4(" + a + ", 0., 0., 0.);\n      }\n    "
    }

    function Ki(t, e, n) {
        void 0 === n && (n = !1), this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0;
        var r = Jo(), o = e[0], i = e[1];
        this.outputShape = t;
        var a = "", s = "result";
        n && (s = "floor(result * 255. + 0.5)");
        for (var u = 0; u <= 1; u++) for (var c = 0; c <= 1; c++) {
            var l = 2 * u + c;
            a += "\n          localCoords = coords;\n          if(localCoords[2] + " + c + " < " + t[2] + ") {\n            localCoords[2] += " + c + ";\n            if(localCoords[1] + " + u + " < " + t[1] + ") {\n              localCoords[1] += " + u + ";\n\n              flatIndex = getFlatIndex(localCoords);\n              offset = imod(flatIndex, 4);\n\n              flatIndex = idiv(flatIndex, 4, 1.);\n\n              r = flatIndex / " + i + ";\n              c = imod(flatIndex, " + i + ");\n              uv = (vec2(c, r) + halfCR) / vec2(" + i + ".0, " + o + ".0);\n              values = " + r.texture2D + "(A, uv);\n\n              if(offset == 0) {\n                result[" + l + "] = values[0];\n              } else if(offset == 1) {\n                result[" + l + "] = values[1];\n              } else if(offset == 2) {\n                result[" + l + "] = values[2];\n              } else {\n                result[" + l + "] = values[3];\n              }\n            }\n          }\n        "
        }
        this.userCode = "\n      " + Zo(t) + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        vec4 result = vec4(0.);\n        int flatIndex, r, c, offset;\n        ivec3 localCoords;\n        vec2 uv;\n        vec4 values;\n\n        " + a + "\n\n        " + r.output + " = " + s + ";\n      }\n    "
    }

    function Xi(t, e, n) {
        this.variableNames = ["real", "imag"];
        var r = e[1];
        this.outputShape = e;
        var o = n ? "2.0 * " + Math.PI : "-2.0 * " + Math.PI, i = n ? r + ".0" : "1.0";
        this.userCode = "\n      const float exponentMultiplier = " + o + ";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        " + t + "\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(" + r + ");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < " + r + "; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / " + i + ";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    "
    }

    function Yi(t, e, n) {
        this.variableNames = ["A", "indices"];
        var r = t.slice();
        r[n] = e, this.outputShape = r, this.rank = r.length;
        var o = oi(this.rank), i = function (t, e) {
            var n = t.length;
            if (4 < n) throw Error("Gather for rank " + n + " is not yet supported");
            if (1 === n) return "int(getIndices(resRC))";
            for (var r = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], o = [], i = 0; i < t.length; i++) i === e ? o.push("int(getIndices(" + r[i] + "))") : o.push("" + r[i]);
            return o.join()
        }(t, n);
        this.userCode = "\n      void main() {\n        " + o + " resRC = getOutputCoords();\n        setOutput(getA(" + i + "));\n      }\n    "
    }

    var $i = (Zi.prototype.getHeightCoordString = function () {
        return "NHWC" === this.dataFormat ? "coords[1]" : "coords[2]"
    }, Zi.prototype.getWidthCoordString = function () {
        return "NHWC" === this.dataFormat ? "coords[2]" : "coords[3]"
    }, Zi.prototype.getDepthCoordString = function () {
        return "NHWC" === this.dataFormat ? "coords[3]" : "coords[1]"
    }, Zi.prototype.getOutputDepthSize = function () {
        return "NHWC" === this.dataFormat ? this.outputShape[3] : this.outputShape[1]
    }, Zi.prototype.getInputSamplingString = function () {
        return "NHWC" === this.dataFormat ? "getX(b, in_h, in_w, in_d)" : "getX(b, in_d, in_h, in_w)"
    }, Zi), Ji = (Qi.prototype.getCustomSetupFunc = function (n) {
        var r = this;
        return function (t, e) {
            null == r.valueLoc && (r.valueLoc = t.getUniformLocationNoThrow(e, "value")), t.gl.uniform1f(r.valueLoc, n)
        }
    }, Qi);

    function Qi(t, e) {
        this.outputShape = [], this.variableNames = ["x"], this.outputShape = t, this.userCode = "\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "
    }

    function Zi(t, e, n) {
        this.variableNames = ["x"], this.outputShape = [], this.outputShape = t, this.blockSize = e, this.dataFormat = n, this.userCode = "\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = " + this.getHeightCoordString() + ";\n      int w = " + this.getWidthCoordString() + ";\n      int d = " + this.getDepthCoordString() + ";\n\n      int in_h = h / " + e + ";\n      int offset_h = imod(h, " + e + ");\n      int in_w = w / " + e + ";\n      int offset_w = imod(w, " + e + ");\n      int offset_d = (offset_h * " + e + " + offset_w) *\n        " + this.getOutputDepthSize() + ";\n      int in_d = d + offset_d;\n\n      float result = " + this.getInputSamplingString() + ";\n      setOutput(result);\n    }\n  "
    }

    function ta(t, e, n) {
        this.sliceDim = t, this.strides = e, this.variableNames = ["x", "indices"], this.outputShape = n;
        var r = oi(e.length), o = oi(n.length), i = 1 < this.sliceDim ? "strides[j]" : "strides";
        this.userCode = "\n        " + r + " strides = " + r + "(" + this.strides + ");\n         void main() {\n          " + o + " coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < " + this.sliceDim + "; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * " + i + ";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      "
    }

    function ea(t, e) {
        var n = Jo();
        return de(t, e, n.version + "\n    precision highp float;\n    " + n.attribute + " vec3 clipSpacePos;\n    " + n.attribute + " vec2 uv;\n    " + n.varyingVs + " vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")
    }

    function na(t, e) {
        return Ce(t, e, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]))
    }

    function ra(t, e) {
        return Ee(t, e, new Uint16Array([0, 1, 2, 2, 1, 3]))
    }

    function oa(t, e, n, r, o, i, a) {
        Ie(n, r);
        var s = _e(t, e), u = t.TEXTURE_2D;
        return le(t, e, function () {
            return t.bindTexture(u, s)
        }), le(t, e, function () {
            return t.texParameteri(u, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE)
        }), le(t, e, function () {
            return t.texParameteri(u, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
        }), le(t, e, function () {
            return t.texParameteri(u, t.TEXTURE_MIN_FILTER, t.NEAREST)
        }), le(t, e, function () {
            return t.texParameteri(u, t.TEXTURE_MAG_FILTER, t.NEAREST)
        }), le(t, e, function () {
            return t.texImage2D(u, 0, o, n, r, 0, i, a, null)
        }), le(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, null)
        }), s
    }

    function ia(t, e, n, r, o) {
        var i = ae(n, r);
        return oa(t, e, i[0], i[1], o.internalFormatFloat, o.textureFormatFloat, t.FLOAT)
    }

    function aa(t, e, n, r, o) {
        var i = ae(n, r);
        return oa(t, e, i[0], i[1], o.internalFormatHalfFloat, o.textureFormatFloat, o.textureTypeHalfFloat)
    }

    function sa(t, e, n, r, o) {
        var i = ae(n, r);
        return oa(t, e, i[0], i[1], t.RGBA, t.RGBA, t.UNSIGNED_BYTE)
    }

    function ua(t, e, n, r, o) {
        var i = ue(n, r);
        return oa(t, e, i[0], i[1], o.internalFormatPackedFloat, t.RGBA, t.FLOAT)
    }

    function ca(t, e, n, r, o) {
        var i = ue(n, r);
        return oa(t, e, i[0], i[1], o.internalFormatPackedHalfFloat, t.RGBA, o.textureTypeHalfFloat)
    }

    function la(t, e, n, r) {
        return le(t, e, function () {
            return t.bindBuffer(t.ARRAY_BUFFER, r)
        }), ke(t, e, n, "clipSpacePos", r, 3, 20, 0) && ke(t, e, n, "uv", r, 2, 20, 12)
    }

    function ha(t, e, n, r, o, i, a) {
        var s, u, c;
        le(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, n)
        }), c = i instanceof Uint8Array ? (s = new Uint8Array(r * o * 4), u = t.UNSIGNED_BYTE, t.RGBA) : (s = new Float32Array(r * o * 4), u = t.FLOAT, a.internalFormatPackedFloat), s.set(i), le(t, e, function () {
            return t.texImage2D(t.TEXTURE_2D, 0, c, r, o, 0, t.RGBA, u, s)
        }), le(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, null)
        })
    }

    function fa(t, e, n, r) {
        le(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, n)
        }), r.data instanceof Uint8Array ? le(t, e, function () {
            return t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, r.width, r.height, 0, t.RGBA, t.UNSIGNED_BYTE, r.data)
        }) : le(t, e, function () {
            return t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r)
        }), le(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, null)
        })
    }

    function pa(t, e, n, r, o) {
        var i = t.createBuffer();
        le(t, e, function () {
            return t.bindBuffer(t.PIXEL_PACK_BUFFER, i)
        });
        var a = 16 * n * r;
        return le(t, e, function () {
            return t.bufferData(t.PIXEL_PACK_BUFFER, a, t.STREAM_READ)
        }), le(t, e, function () {
            return t.readPixels(0, 0, r, n, t.RGBA, t.FLOAT, 0)
        }), le(t, e, function () {
            return t.bindBuffer(t.PIXEL_PACK_BUFFER, null)
        }), i
    }

    function da(t, e, n) {
        var r = t, o = new Float32Array(n);
        return r.bindBuffer(r.PIXEL_PACK_BUFFER, e), r.getBufferSubData(r.PIXEL_PACK_BUFFER, 0, o), r.bindBuffer(r.PIXEL_PACK_BUFFER, null), o
    }

    function va(t, e, n, r, o) {
        var i = ae(n, r), a = i[0], s = i[1], u = new Uint8Array(n * r * 4);
        return le(t, e, function () {
            return t.readPixels(0, 0, a, s, o.downloadTextureFormat, t.UNSIGNED_BYTE, u)
        }), new Float32Array(u.buffer)
    }

    function ma(t, e, n, r, o, i, a, s) {
        var u, c = t, l = new Float32Array((u = ue(i, a))[0] * u[1] * 4);
        return c.bindBuffer(c.PIXEL_PACK_BUFFER, e), c.getBufferSubData(c.PIXEL_PACK_BUFFER, 0, l), c.bindBuffer(c.PIXEL_PACK_BUFFER, null), l
    }

    function ga(t, e, n, r) {
        var o = new Float32Array(n * r * 4);
        return le(t, e, function () {
            return t.readPixels(0, 0, r, n, t.RGBA, t.FLOAT, o)
        }), o
    }

    var ya = Object.freeze({
        createVertexShader: ea,
        createVertexBuffer: na,
        createIndexBuffer: ra,
        createFloat32MatrixTexture: ia,
        createFloat16MatrixTexture: aa,
        createUnsignedBytesMatrixTexture: sa,
        createPackedMatrixTexture: ua,
        createFloat16PackedMatrixTexture: ca,
        bindVertexProgramAttributeStreams: la,
        uploadDenseMatrixToTexture: ha,
        uploadPixelDataToTexture: fa,
        createBufferFromOutputTexture: pa,
        downloadFloat32MatrixFromBuffer: da,
        downloadByteEncodedFloatMatrixFromOutputTexture: va,
        downloadPackedMatrixFromBuffer: ma,
        downloadMatrixFromPackedOutputTexture: ga
    }), xa = (Object.defineProperty(ba.prototype, "debug", {
        get: function () {
            return _().getBool("DEBUG")
        }, enumerable: !0, configurable: !0
    }), ba.prototype.dispose = function () {
        var t = this;
        if (!this.disposed) {
            null != this.program && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."), null != this.outputTexture && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
            var e = this.gl;
            le(e, this.debug, function () {
                return e.finish()
            }), le(e, this.debug, function () {
                return e.bindFramebuffer(e.FRAMEBUFFER, null)
            }), le(e, this.debug, function () {
                return e.deleteFramebuffer(t.framebuffer)
            }), le(e, this.debug, function () {
                return e.bindBuffer(e.ARRAY_BUFFER, null)
            }), le(e, this.debug, function () {
                return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null)
            }), le(e, this.debug, function () {
                return e.deleteBuffer(t.indexBuffer)
            }), this.disposed = !0
        }
    }, ba.prototype.createFloat32MatrixTexture = function (t, e) {
        return this.throwIfDisposed(), ia(this.gl, this.debug, t, e, this.textureConfig)
    }, ba.prototype.createFloat16MatrixTexture = function (t, e) {
        return this.throwIfDisposed(), aa(this.gl, this.debug, t, e, this.textureConfig)
    }, ba.prototype.createUnsignedBytesMatrixTexture = function (t, e) {
        return this.throwIfDisposed(), sa(this.gl, this.debug, t, e, this.textureConfig)
    }, ba.prototype.uploadPixelDataToTexture = function (t, e) {
        this.throwIfDisposed(), fa(this.gl, this.debug, t, e)
    }, ba.prototype.uploadDenseMatrixToTexture = function (t, e, n, r) {
        this.throwIfDisposed(), ha(this.gl, this.debug, t, e, n, r, this.textureConfig)
    }, ba.prototype.createFloat16PackedMatrixTexture = function (t, e) {
        return this.throwIfDisposed(), ca(this.gl, this.debug, t, e, this.textureConfig)
    }, ba.prototype.createPackedMatrixTexture = function (t, e) {
        return this.throwIfDisposed(), ua(this.gl, this.debug, t, e, this.textureConfig)
    }, ba.prototype.deleteMatrixTexture = function (t) {
        var e = this;
        this.throwIfDisposed(), this.outputTexture === t && (Fe(this.gl, this.debug, this.framebuffer), this.outputTexture = null), le(this.gl, this.debug, function () {
            return e.gl.deleteTexture(t)
        })
    }, ba.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function (t, e, n) {
        var r = this;
        return this.downloadMatrixDriver(t, function () {
            return va(r.gl, r.debug, e, n, r.textureConfig)
        })
    }, ba.prototype.downloadPackedMatrixFromBuffer = function (t, e, n, r, o, i) {
        return ma(this.gl, t, 0, 0, 0, o, i, this.textureConfig)
    }, ba.prototype.downloadFloat32MatrixFromBuffer = function (t, e) {
        return da(this.gl, t, e)
    }, ba.prototype.createBufferFromTexture = function (t, e, n) {
        this.bindTextureToFrameBuffer(t);
        var r = pa(this.gl, this.debug, e, n, this.textureConfig);
        return this.unbindTextureToFrameBuffer(), r
    }, ba.prototype.createAndWaitForFence = function () {
        var t = this.createFence(this.gl);
        return this.pollFence(t)
    }, ba.prototype.createFence = function (t) {
        var e, n, r = this;
        if (_().getBool("WEBGL_FENCE_API_ENABLED")) {
            var o = t, i = o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE, 0);
            t.flush(), n = function () {
                var t = o.clientWaitSync(i, 0, 0);
                return t === o.ALREADY_SIGNALED || t === o.CONDITION_SATISFIED
            }, e = i
        } else n = 0 < _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? (e = this.beginQuery(), this.endQuery(), function () {
            return r.isQueryAvailable(e, _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
        }) : function () {
            return !0
        };
        return {query: e, isFencePassed: n}
    }, ba.prototype.downloadMatrixFromPackedTexture = function (t, e, n) {
        var r = this;
        return this.downloadMatrixDriver(t, function () {
            return ga(r.gl, r.debug, e, n)
        })
    }, ba.prototype.createProgram = function (t) {
        this.throwIfDisposed();
        var e = this.gl, n = ve(e, this.debug, t), r = ea(e, this.debug), o = xe(e, this.debug);
        return le(e, this.debug, function () {
            return e.attachShader(o, r)
        }), le(e, this.debug, function () {
            return e.attachShader(o, n)
        }), be(e, this.debug, o), this.debug && we(e, this.debug, o), this.vertexAttrsAreBound || (this.setProgram(o), this.vertexAttrsAreBound = la(e, this.debug, this.program, this.vertexBuffer)), o
    }, ba.prototype.deleteProgram = function (t) {
        var e = this;
        this.throwIfDisposed(), t === this.program && (this.program = null), null != t && le(this.gl, this.debug, function () {
            return e.gl.deleteProgram(t)
        })
    }, ba.prototype.setProgram = function (t) {
        var e = this;
        this.throwIfDisposed(), this.program = t, null != this.program && this.debug && we(this.gl, this.debug, this.program), le(this.gl, this.debug, function () {
            return e.gl.useProgram(t)
        })
    }, ba.prototype.getUniformLocation = function (t, e, n) {
        return void 0 === n && (n = !0), this.throwIfDisposed(), n ? De(this.gl, this.debug, t, e) : Ae(this.gl, t, e)
    }, ba.prototype.getAttributeLocation = function (t, e) {
        var n = this;
        return this.throwIfDisposed(), le(this.gl, this.debug, function () {
            return n.gl.getAttribLocation(t, e)
        })
    }, ba.prototype.getUniformLocationNoThrow = function (t, e) {
        return this.throwIfDisposed(), this.gl.getUniformLocation(t, e)
    }, ba.prototype.setInputMatrixTexture = function (t, e, n) {
        this.throwIfDisposed(), this.throwIfNoProgram(), Te(this.gl, this.debug, this.program, t, e, n)
    }, ba.prototype.setOutputMatrixTexture = function (t, e, n) {
        this.setOutputMatrixTextureDriver(t, n, e)
    }, ba.prototype.setOutputPackedMatrixTexture = function (t, e, n) {
        this.throwIfDisposed();
        var r = ue(e, n), o = r[0], i = r[1];
        this.setOutputMatrixTextureDriver(t, o, i)
    }, ba.prototype.setOutputMatrixWriteRegion = function (t, e, n, r) {
        this.setOutputMatrixWriteRegionDriver(n, t, r, e)
    }, ba.prototype.setOutputPackedMatrixWriteRegion = function (t, e, n, r) {
        throw new Error("setOutputPackedMatrixWriteRegion not implemented.")
    }, ba.prototype.debugValidate = function () {
        null != this.program && we(this.gl, this.debug, this.program), Me(this.gl)
    }, ba.prototype.executeProgram = function () {
        this.throwIfDisposed(), this.throwIfNoProgram();
        var t = this.gl;
        this.debug && this.debugValidate(), le(t, this.debug, function () {
            return t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0)
        })
    }, ba.prototype.blockUntilAllProgramsCompleted = function () {
        var t = this;
        this.throwIfDisposed(), le(this.gl, this.debug, function () {
            return t.gl.finish()
        })
    }, ba.prototype.getQueryTimerExtension = function () {
        return null == this.disjointQueryTimerExtension && (this.disjointQueryTimerExtension = pe(this.gl, this.debug, 2 === _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")), this.disjointQueryTimerExtension
    }, ba.prototype.getQueryTimerExtensionWebGL2 = function () {
        return this.getQueryTimerExtension()
    }, ba.prototype.getQueryTimerExtensionWebGL1 = function () {
        return this.getQueryTimerExtension()
    }, ba.prototype.beginQuery = function () {
        if (2 === _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
            var t = this.gl, e = this.getQueryTimerExtensionWebGL2(), n = t.createQuery();
            return t.beginQuery(e.TIME_ELAPSED_EXT, n), n
        }
        var r = this.getQueryTimerExtensionWebGL1(), o = r.createQueryEXT();
        return r.beginQueryEXT(r.TIME_ELAPSED_EXT, o), o
    }, ba.prototype.endQuery = function () {
        if (2 !== _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
            var t = this.getQueryTimerExtensionWebGL1();
            t.endQueryEXT(t.TIME_ELAPSED_EXT)
        } else {
            var e = this.gl, n = this.getQueryTimerExtensionWebGL2();
            e.endQuery(n.TIME_ELAPSED_EXT)
        }
    }, ba.prototype.waitForQueryAndGetTime = function (n) {
        return y(this, void 0, void 0, function () {
            var e = this;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, k(function () {
                            return e.disposed || e.isQueryAvailable(n, _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
                        })];
                    case 1:
                        return t.sent(), [2, this.getQueryTime(n, _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]
                }
            })
        })
    }, ba.prototype.getQueryTime = function (t, e) {
        if (0 === e) return null;
        if (2 === e) {
            var n = this.gl;
            return n.getQueryParameter(t, n.QUERY_RESULT) / 1e6
        }
        var r = this.getQueryTimerExtensionWebGL1();
        return r.getQueryObjectEXT(t, r.QUERY_RESULT_EXT) / 1e6
    }, ba.prototype.isQueryAvailable = function (t, e) {
        if (0 === e) return !0;
        if (2 !== e) return o = (r = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t, r.QUERY_RESULT_AVAILABLE_EXT), null == this.disjoint && (this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)), o && !this.disjoint;
        var n = this.gl, r = this.getQueryTimerExtensionWebGL2(), o = n.getQueryParameter(t, n.QUERY_RESULT_AVAILABLE);
        return null == this.disjoint && (this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)), o && !this.disjoint
    }, ba.prototype.pollFence = function (e) {
        var n = this;
        return new Promise(function (t) {
            n.addItemToPoll(function () {
                return e.isFencePassed()
            }, function () {
                return t()
            })
        })
    }, ba.prototype.pollItems = function () {
        for (var t = function (t) {
            for (var e = 0; e < t.length && t[e](); ++e) ;
            return e - 1
        }(this.itemsToPoll.map(function (t) {
            return t.isDoneFn
        })), e = 0; e <= t; ++e) (0, this.itemsToPoll[e].resolveFn)();
        this.itemsToPoll = this.itemsToPoll.slice(t + 1)
    }, ba.prototype.addItemToPoll = function (t, e) {
        var n = this;
        this.itemsToPoll.push({isDoneFn: t, resolveFn: e}), 1 < this.itemsToPoll.length || k(function () {
            return n.pollItems(), 0 === n.itemsToPoll.length
        })
    }, ba.prototype.bindTextureToFrameBuffer = function (t) {
        this.throwIfDisposed(), Ne(this.gl, this.debug, t, this.framebuffer), this.debug && Me(this.gl)
    }, ba.prototype.unbindTextureToFrameBuffer = function () {
        null != this.outputTexture ? (Ne(this.gl, this.debug, this.outputTexture, this.framebuffer), this.debug && Me(this.gl)) : Fe(this.gl, this.debug, this.framebuffer)
    }, ba.prototype.downloadMatrixDriver = function (t, e) {
        this.bindTextureToFrameBuffer(t);
        var n = e();
        return this.unbindTextureToFrameBuffer(), n
    }, ba.prototype.setOutputMatrixTextureDriver = function (t, e, n) {
        this.throwIfDisposed();
        var r = this.gl;
        Ne(r, this.debug, t, this.framebuffer), this.debug && Me(r), this.outputTexture = t, le(r, this.debug, function () {
            return r.viewport(0, 0, e, n)
        }), le(r, this.debug, function () {
            return r.scissor(0, 0, e, n)
        })
    }, ba.prototype.setOutputMatrixWriteRegionDriver = function (t, e, n, r) {
        var o = this;
        this.throwIfDisposed(), le(this.gl, this.debug, function () {
            return o.gl.scissor(t, e, n, r)
        })
    }, ba.prototype.throwIfDisposed = function () {
        if (this.disposed) throw new Error("Attempted to use disposed GPGPUContext.")
    }, ba.prototype.throwIfNoProgram = function () {
        if (null == this.program) throw new Error("No GPU program is currently set.")
    }, ba);

    function ba(t) {
        this.outputTexture = null, this.program = null, this.disposed = !1, this.vertexAttrsAreBound = !1, this.itemsToPoll = [];
        var e = _().getNumber("WEBGL_VERSION");
        null != t ? oe(e, this.gl = t) : this.gl = ie(e);
        var n = "WEBGL_color_buffer_float";
        if (1 === _().getNumber("WEBGL_VERSION")) {
            if (this.textureFloatExtension = pe(this.gl, this.debug, "OES_texture_float"), Ke(this.gl, "OES_texture_half_float")) this.textureHalfFloatExtension = pe(this.gl, this.debug, "OES_texture_half_float"); else if (_().get("WEBGL_FORCE_F16_TEXTURES")) throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
            if (this.colorBufferFloatExtension = this.gl.getExtension(n), Ke(this.gl, "EXT_color_buffer_half_float")) this.colorBufferHalfFloatExtension = pe(this.gl, this.debug, "EXT_color_buffer_half_float"); else if (_().get("WEBGL_FORCE_F16_TEXTURES")) throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")
        } else if (n = "EXT_color_buffer_float", Ke(this.gl, n)) this.colorBufferFloatExtension = this.gl.getExtension(n); else {
            if (!Ke(this.gl, "EXT_color_buffer_half_float")) throw new Error("GL context does not support color renderable floats");
            this.colorBufferHalfFloatExtension = this.gl.getExtension("EXT_color_buffer_half_float")
        }
        this.vertexBuffer = na(this.gl, this.debug), this.indexBuffer = ra(this.gl, this.debug), this.framebuffer = Re(this.gl, this.debug), this.textureConfig = ce(this.gl, this.textureHalfFloatExtension)
    }

    function wa(t, s) {
        if (t.length !== s.length) throw Error("Binary was compiled with " + t.length + " inputs, but was executed with " + s.length + " inputs");
        t.forEach(function (t, e) {
            var n = t.logicalShape, r = s[e], o = r.shape;
            if (!A(n, o)) throw Error("Binary was compiled with different shapes than the current args. Shapes " + n + " and " + o + " must match");
            if (!t.isUniform || !r.isUniform) {
                var i = t.texShape, a = r.isUniform ? null : r.texData.texShape;
                if (!A(i, a)) throw Error("Binary was compiled with different texture shapes than the current args. Shape " + i + " and " + a + " must match")
            }
        })
    }

    function Ca(t, e, n) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t;
        for (var r = n.filterWidth, o = n.inChannels, i = n.strideWidth, a = n.strideHeight, s = n.padInfo, u = n.outWidth, c = n.dilationWidth, l = n.dilationHeight, h = n.dataFormat, f = s.left, p = s.top, d = o * r, v = Jo(), m = "channelsLast" === h, g = m ? 0 : 1, y = m ? 1 : 2, x = "", b = 0; b <= 1; b++) for (var w = 0; w <= 1; w++) x += "\n          blockIndex = rc.y + " + w + ";\n          pos = rc.x + " + b + ";\n\n          if(blockIndex < " + t[1] + " && pos < " + t[0] + ") {\n            offsetY = int(blockIndex / (" + u + ")) * " + a + " - " + p + ";\n            d0 = offsetY + " + l + " * (pos / " + d + ");\n\n            if(d0 < " + e[g] + " && d0 >= 0) {\n\n              offsetX = int(mod(float(blockIndex), " + u + ".) * " + i + ". - " + f + ".);\n              d1 = offsetX + " + c + " * (int(mod(float(pos), " + d + ".) / " + o + ".));\n\n              if(d1 < " + e[y] + " && d1 >= 0) {\n\n                ch = int(mod(float(pos), " + o + ".));\n\n                if (" + m + ") {\n                  innerDims = vec2(d1, ch);\n                  result[" + (2 * b + w) + "] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[" + (2 * b + w) + "] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ";
        this.userCode = "\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        " + x + "\n\n        " + v.output + " = result;\n      }\n    "
    }

    function Ea(t, e, n, r, o) {
        this.variableNames = ["x"], this.outputShape = [];
        var i, a = e, s = t[3] - 1;
        this.outputShape = t;
        var u = "float(" + n + ") + float(" + r + ") * sum";
        i = .5 === o ? "inversesqrt(" + u + ")" : 1 === o ? "1.0/(" + u + ")" : "exp(log(" + u + ") * float(-" + o + "));", this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + a + "; j <= " + a + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + s + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + i + ";\n        setOutput(val);\n      }\n    "
    }

    function _a(t, e, n, r, o) {
        this.variableNames = ["inputImage", "outputImage", "dy"], this.outputShape = [], this.outputShape = t, this.depth = t[3], this.depthRadius = e, this.bias = n, this.alpha = r, this.beta = o, this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < " + this.depth + "; ++d) {\n          int depthBegin = int(max(0.0, float(d - " + e + ")));\n          int depthEnd = int(min(float(" + this.depth + "),\n              float(d + " + e + " + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = " + this.depth + ";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(" + r + ") * norm + float(" + n + ");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(" + r + ")\n                * float(" + o + ")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * " + o + ");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    "
    }

    function Ia(t, e, n, r, o) {
        this.variableNames = ["x"], this.outputShape = [], this.packedInputs = !0, this.packedOutput = !0;
        var i, a = e, s = t[3] - 1;
        this.outputShape = t;
        var u = "float(" + n + ") + float(" + r + ") * sum";
        i = .5 === o ? "inversesqrt(" + u + ")" : 1 === o ? "1.0/(" + u + ")" : "exp(log(" + u + ") * float(-" + o + "));", this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < " + this.outputShape[3] + ";\n        bool hasNextRow = c < " + this.outputShape[2] + ";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - " + a + ";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - " + a + "; j <= " + a + "; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(" + s + "));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * " + i + ";\n        setOutput(result);\n      }\n    "
    }

    function Ra(t) {
        this.variableNames = ["dy", "maxPos"], this.outputShape = t.inShape;
        var e = t.strideHeight, n = t.strideWidth, r = t.dilationHeight, o = t.effectiveFilterHeight,
            i = t.effectiveFilterWidth, a = o - 1 - t.padInfo.top, s = i - 1 - t.padInfo.left, u = o * i - 1;
        this.userCode = "\n      const ivec2 pads = ivec2(" + a + ", " + s + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + o + ";\n          wR += " + r + ") {\n          float dyR = float(dyRCorner + wR) / " + e + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + i + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + n + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + u + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + i + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function ka(t) {
        this.variableNames = ["dy", "maxPos"], this.outputShape = t.inShape;
        var e = t.strideDepth, n = t.strideHeight, r = t.strideWidth, o = t.dilationDepth, i = t.dilationHeight,
            a = t.dilationWidth, s = t.effectiveFilterDepth, u = t.effectiveFilterHeight, c = t.effectiveFilterWidth,
            l = s - 1 - t.padInfo.front, h = u - 1 - t.padInfo.top, f = c - 1 - t.padInfo.left, p = s * u * c - 1;
        this.userCode = "\n      const ivec3 pads = ivec3(" + l + ", " + h + ", " + f + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + s + ";\n           wD += " + o + ") {\n          float dyD = float(dyDCorner + wD) / " + e + ".0;\n\n          if (dyD < 0.0 || dyD >= " + t.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + u + ";\n              wR += " + i + ") {\n            float dyR = float(dyRCorner + wR) / " + n + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + c + ";\n                wC += " + a + ") {\n              float dyC = float(dyCCorner + wC) / " + r + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = " + p + " -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * " + u + " * " + c + " +\n                  wR * " + c + " + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }

    function Sa(t, e, n, r, o, i, a) {
        void 0 === n && (n = !1), void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === i && (i = null), void 0 === a && (a = !1), this.variableNames = ["matrixA", "matrixB"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = e;
        var s = n ? t[1] : t[2], u = Math.ceil(s / 2), c = n ? "i * 2, rc.y" : "rc.y, i * 2",
            l = r ? "rc.z, i * 2" : "i * 2, rc.z", h = n ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"],
            f = r ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"], p = "", d = "";
        i && (p = a ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + i + "\n        }" : "vec4 activation(vec4 x) {\n          " + i + "\n        }", d = "result = activation(result);");
        var v = o ? "result += getBiasAtOutCoords();" : "";
        o && this.variableNames.push("bias"), a && this.variableNames.push("preluActivationWeights"), this.userCode = "\n      " + p + "\n\n      const float sharedDimension = " + u + ".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < " + u + "; i++) {\n          vec4 a = getMatrixA(rc.x, " + c + ");\n          vec4 b = getMatrixB(rc.x, " + l + ");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (" + h[0] + " * " + f[0] + ");\n          result += (" + h[1] + " * " + f[1] + ");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        " + v + "\n\n        " + d + "\n\n        setOutput(result);\n      }\n    "
    }

    function Da(t, e, n, r) {
        this.variableNames = ["indices"], this.outputShape = [t, e], this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + r + "), float(" + n + "),\n                      float(index == coords.y)));\n      }\n    "
    }

    function Aa(t) {
        this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0;
        var e, n, r, o, i = (this.outputShape = t).length;
        if (0 === i) this.userCode = "\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      "; else {
            var a = $o("rc", i), s = oi(i), u = function (t, e, n) {
                if (1 === t) return "rc > " + e[0];
                for (var r = "", o = t - 2; o < t; o++) r += n[o] + " >= " + e[o], o < t - 1 && (r += "||");
                return r
            }(i, t, a), c = function (t, e, n) {
                if (1 === t) return "";
                var r = a.slice(-2);
                return "\n    int r = " + r[0] + ";\n    int c = " + r[1] + ";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= " + e + ";\n    bool rEdge = rp1 >= " + n + ";\n  "
            }(i, t[t.length - 1], t[t.length - 2]), l = (n = a, r = (e = t).length, o = function (t, e) {
                for (var n = [], r = 0; r <= 1; r++) for (var o = 0; o <= 1; o++) {
                    for (var i = (0 === r ? "r" : "rp1") + ", " + (0 === o ? "c" : "cp1"), a = 2; a < t; a++) i = e[e.length - 1 - a] + "," + i;
                    n.push(i)
                }
                return n
            }(r, n), 1 === r ? "getA(rc),\n            rc + 1 >= " + e[0] + " ? 0. : getA(rc + 1),\n            0, 0" : "getA(" + o[0] + "),\n          cEdge ? 0. : getA(" + o[1] + "),\n          rEdge ? 0. : getA(" + o[2] + "),\n          rEdge || cEdge ? 0. : getA(" + o[3] + ")");
            this.userCode = "\n        void main() {\n          " + s + " rc = getOutputCoords();\n\n          if(" + u + ") {\n            setOutput(vec4(0));\n          } else {\n            " + c + "\n\n            setOutput(vec4(" + l + "));\n          }\n        }\n      "
        }
    }

    var Ta = (Na.prototype.getCustomSetupFunc = function (n) {
        var r = this;
        return function (t, e) {
            null == r.seedLoc && (r.seedLoc = t.getUniformLocation(e, "seed")), t.gl.uniform1f(r.seedLoc, n)
        }
    }, Na);

    function Na(t, e, n) {
        this.variableNames = ["probs"], this.outputShape = [t, n], this.userCode = "\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (e - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (e - 1) + "));\n      }\n    "
    }

    function Fa(n, t, e) {
        this.variableNames = ["x"], this.outputShape = t.map(function (t, e) {
            return t[0] + n[e] + t[1]
        });
        var r = n.length, o = oi(r), i = t.map(function (t) {
            return t[0]
        }).join(","), a = t.map(function (t, e) {
            return t[0] + n[e]
        }).join(","), s = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, r);
        this.userCode = 1 !== r ? "\n      " + o + " start = " + o + "(" + i + ");\n      " + o + " end = " + o + "(" + a + ");\n\n      void main() {\n        " + o + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(" + e + "));\n        } else {\n          " + o + " coords = outC - start;\n          setOutput(getX(" + s + "));\n        }\n      }\n    " : "\n        int start = " + i + ";\n        int end = " + a + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(" + e + "));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      "
    }

    function Ma(n, t, e) {
        this.variableNames = ["x"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t.map(function (t, e) {
            return t[0] + n[e] + t[1]
        });
        for (var r = n.length, o = oi(r), i = t.map(function (t) {
            return t[0]
        }).join(","), a = t.map(function (t, e) {
            return t[0] + n[e]
        }).join(","), s = $o("rc", r), u = $o("source", r), c = s[r - 1] + " < " + this.outputShape[r - 1], l = 1 === r ? "source" : "vec2(" + u.slice(-2).join() + ")", h = [o + " rc = outputLoc;", s[r - 1] + " += 1;\n       if(" + c + ") {\n      ", 1 === r ? "" : "}\n       rc = outputLoc;\n       " + s[r - 2] + " += 1;\n       if(" + s[r - 2] + " < " + this.outputShape[r - 2] + ") {", 1 === r ? "" : "  " + s[r - 1] + " += 1;\n         if(" + c + ") {"], f = 1 === r ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))", p = "", d = 0, v = 1 === r ? 2 : 4; d < v; d++) p += "\n        " + h[d] + "\n        if (" + f + ") {\n          result[" + d + "] = float(" + e + ");\n        } else {\n          " + o + " source = rc - start;\n          result[" + d + "] = getChannel(getX(" + u.join() + "), " + l + ");\n        }\n      ";
        p += 1 === r ? "} " : "}}", this.userCode = "\n      const " + o + " start = " + o + "(" + i + ");\n      const " + o + " end = " + o + "(" + a + ");\n\n      void main() {\n        " + o + " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        " + p + "\n        setOutput(result);\n      }\n    "
    }

    function Oa(t, e, n) {
        if (this.variableNames = ["x"], "avg" === e && n) throw new Error("Cannot compute positions for average pool.");
        var r = t.filterWidth, o = t.strideHeight, i = t.strideWidth, a = t.dilationHeight, s = t.dilationWidth,
            u = t.effectiveFilterHeight, c = t.effectiveFilterWidth, l = t.padInfo.top, h = t.padInfo.left;
        this.outputShape = t.outShape;
        var f = "avg" === e, p = "0.0";
        if (f || (p = "-1.0 / 1e-20"), n) this.userCode = "\n        const ivec2 strides = ivec2(" + o + ", " + i + ");\n        const ivec2 pads = ivec2(" + l + ", " + h + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + u + ";\n              wR += " + a + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + c + ";\n                wC += " + s + ") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * " + c + " + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      "; else {
            var d = e + "(" + e + "(" + e + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
            "avg" === e && (d = "avgValue / count");
            var v = 4 * Math.floor(r / 4), m = r % 4,
                g = "\n      if (" + f + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
            this.userCode = "\n      const ivec2 strides = ivec2(" + o + ", " + i + ");\n      const ivec2 pads = ivec2(" + l + ", " + h + ");\n      const float initializationValue = " + p + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + t.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + p + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + u + ";\n            wR += " + a + ") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + t.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + v + "; wC += 4) {\n            int xC = xCCorner + wC * " + s + ";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s + ", d),\n              getValue(batch, xR, xC + 2 * " + s + ", d),\n              getValue(batch, xR, xC + 3 * " + s + ", d)\n            );\n\n            " + g + "\n          }\n\n          int xC = xCCorner + " + v + ";\n          if (" + (1 == m) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + g + "\n          } else if (" + (2 == m) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s + ", d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + g + "\n          } else if (" + (3 == m) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s + ", d),\n              getValue(batch, xR, xC + 2 * " + s + ", d),\n              initializationValue\n            );\n\n            " + g + "\n          }\n        }\n        setOutput(" + d + ");\n      }\n    "
        }
    }

    function Pa(t, e, n) {
        if (this.variableNames = ["x"], "avg" === e && n) throw new Error("Cannot compute positions for average pool.");
        var r = t.filterWidth, o = t.strideDepth, i = t.strideHeight, a = t.strideWidth, s = t.dilationDepth,
            u = t.dilationHeight, c = t.dilationWidth, l = t.effectiveFilterDepth, h = t.effectiveFilterHeight,
            f = t.effectiveFilterWidth, p = t.padInfo.front, d = t.padInfo.top, v = t.padInfo.left;
        this.outputShape = t.outShape;
        var m = "avg" === e, g = "0.0";
        if (m || (g = "-1.0 / 1e-20"), n) this.userCode = "\n        const ivec3 strides =\n            ivec3(" + o + ", " + i + ", " + a + ");\n        const ivec3 pads = ivec3(" + p + ", " + d + ", " + v + ");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < " + l + ";\n              wD += " + s + ") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= " + t.inDepth + ") {\n              continue;\n            }\n\n            for (int wR = 0; wR < " + h + ";\n                wR += " + u + ") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= " + t.inHeight + ") {\n                continue;\n              }\n\n              for (int wC = 0; wC < " + f + ";\n                  wC += " + c + ") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= " + t.inWidth + ") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition =\n                      wD * " + h + " * " + f + " +\n                      wR * " + f + " + wC;;\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      "; else {
            var y = e + "(" + e + "(" + e + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
            "avg" === e && (y = "avgValue / count");
            var x = 4 * Math.floor(r / 4), b = r % 4,
                w = "\n      if (" + m + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
            this.userCode = "\n      const ivec3 strides =\n        ivec3(" + o + ", " + i + ", " + a + ");\n      const ivec3 pads = ivec3(" + p + ", " + d + ", " + v + ");\n      const float initializationValue = " + g + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= " + t.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + g + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < " + l + ";\n            wD += " + s + ") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= " + t.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h + ";\n            wR += " + u + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + x + "; wC += 4) {\n              int xC = xCCorner + wC * " + c + ";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + c + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + c + ", ch),\n                getValue(batch, xD, xR, xC + 3 * " + c + ", ch)\n              );\n\n              " + w + "\n            }\n\n            int xC = xCCorner + " + x + ";\n            if (" + (1 == b) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              " + w + "\n            } else if (" + (2 == b) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + c + ", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              " + w + "\n            } else if (" + (3 == b) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + c + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + c + ", ch),\n                initializationValue\n              );\n\n              " + w + "\n            }\n          }\n          setOutput(" + y + ");\n        }\n      }\n    "
        }
    }

    function Ba(t, e) {
        this.variableNames = ["x"];
        var n = t.windowSize, r = t.batchSize, o = t.inSize, i = Math.ceil(o / n);
        this.outputShape = [r, i];
        var a = "0.0", s = "";
        "prod" === e ? a = "1.0" : "min" === e ? (a = "1.0 / 1e-20", s = "min") : "max" === e && (a = "-1.0 / 1e-20", s = "max");
        var u = e + "(" + e + "(" + e + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
        "sum" === e ? u = "sumValue" : "prod" === e ? u = "prodValue" : "all" === e ? u = "allValue" : "any" === e && (u = "anyValue");
        var c = 4 * Math.floor(n / 4), l = n % 4,
            h = "\n      if (" + ("sum" === e) + ") {\n        sumValue += dot(values, ones);\n      } else if (" + ("prod" === e) + ") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = " + s + "(values, minMaxValue);\n      }\n    ",
            f = "vec4";
        "all" === e ? (a = "1.0", h = "\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ", f = "bvec4") : "any" === e && (a = "0.0", h = "\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ", f = "bvec4");
        var p = "";
        0 < o % n && (p = "\n        if (inIdx < 0 || inIdx >= " + o + ") {\n          return initializationValue;\n        }\n      "), this.userCode = "\n      const float initializationValue = " + a + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + p + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + n + ";\n\n        vec4 minMaxValue = vec4(" + a + ");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < " + c + "; i += 4) {\n          int inIdx = inOffset + i;\n          " + f + " values = " + f + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + h + "\n        }\n\n        int inIdx = inOffset + " + c + ";\n        if (" + (1 == l) + ") {\n          " + f + " values = " + f + "(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          " + h + "\n        } else if (" + (2 == l) + ") {\n          " + f + " values = " + f + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          " + h + "\n        } else if (" + (3 == l) + ") {\n          " + f + " values = " + f + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          " + h + "\n        }\n        setOutput(" + u + ");\n      }\n    "
    }

    function La(t, e) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t;
        for (var n = "", r = 0; r < 4; r++) {
            var o = "thisRC = rc;";
            r % 2 == 1 && (o += "thisRC.z += 1;"), 1 < r && (o += "thisRC.y += 1;"), n += "\n        " + o + "\n        " + (0 < r ? "if(thisRC.y < rows && thisRC.z < cols){" : "") + "\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[" + r + "] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        " + (0 < r ? "}" : "") + "\n      "
        }
        this.userCode = "\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      " + Qo(["r", "c", "d"], e) + "\n      return ivec3(r, c, d);\n    }\n  \n      " + Zo(t) + "\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = " + t[1] + ";\n        int cols = " + t[2] + ";\n\n        " + n + "\n\n        setOutput(result);\n      }\n    "
    }

    function Wa(t, e, n) {
        this.variableNames = ["dy"], this.outputShape = [], this.outputShape = e.shape;
        var r = e.shape, o = r[1], i = r[2], a = t.shape, s = a[1], u = a[2],
            c = [n && 1 < s ? o - 1 : o, n && 1 < u ? i - 1 : i], l = [n && 1 < s ? s - 1 : s, n && 1 < u ? u - 1 : u],
            h = c[0] / l[0], f = c[1] / l[1], p = 1 / h, d = 1 / f, v = 2 * Math.ceil(p) + 2, m = 2 * Math.ceil(d) + 2;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h + ");\n        const float widthScale = float(" + f + ");\n\n        const float invHeightScale = float(" + p + ");\n        const float invWidthScale = float(" + d + ");\n\n        const int winHeight = int(" + v + ");\n        const int winWidth = int(" + m + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u + ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), " + (o - 1) + ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), " + (i - 1) + ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "
    }

    function za(t, e, n, r) {
        this.variableNames = ["A"], this.outputShape = [];
        var o = t[0], i = t[1], a = t[2], s = t[3];
        this.outputShape = [o, e, n, s];
        var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a], c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n];
        this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u[0] / c[0] + ",\n          " + u[1] / c[1] + ");\n      const vec2 inputShapeRC = vec2(" + i + ".0, " + a + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    "
    }

    function Ua(t, e, n, r) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = [];
        var o = t[0], i = t[1], a = t[2], s = t[3];
        this.outputShape = [o, e, n, s];
        var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a], c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n];
        this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          " + u[0] / c[0] + ",\n          " + u[1] / c[1] + ",\n          " + u[1] / c[1] + ");\n      const vec3 inputShapeRC = vec3(" + i + ".0, " + a + ".0,\n                                     " + a + ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < " + (s - 1) + ";\n        bool hasNextRow = coords.z < " + (n - 1) + ";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    "
    }

    function Va(t, e, n) {
        this.variableNames = ["dy"], this.outputShape = [], this.outputShape = e.shape;
        var r = e.shape, o = r[1], i = r[2], a = t.shape, s = a[1], u = a[2],
            c = [n && 1 < s ? o - 1 : o, n && 1 < u ? i - 1 : i], l = [n && 1 < s ? s - 1 : s, n && 1 < u ? u - 1 : u],
            h = c[0] / l[0], f = c[1] / l[1], p = 1 / h, d = 1 / f, v = 2 * Math.ceil(p) + 2, m = 2 * Math.ceil(d) + 2;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h + ");\n        const float widthScale = float(" + f + ");\n\n        const float invHeightScale = float(" + p + ");\n        const float invWidthScale = float(" + d + ");\n\n        const int winHeight = int(" + v + ");\n        const int winWidth = int(" + m + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u + ") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(" + c[0] + ") *\n                (float(dyR) / float(" + l[0] + "));\n\n            float sourceFracCol =\n                float(" + c[1] + ") *\n                  (float(dyC) / float(" + l[1] + "));\n\n            int sourceNearestRow = int(min(\n                float(int(" + o + ") - 1),\n                " + n + " ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(" + i + ") - 1),\n                " + n + " ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "
    }

    function Ga(t, e, n, r) {
        this.variableNames = ["A"], this.outputShape = [];
        var o = t[0], i = t[1], a = t[2], s = t[3];
        this.outputShape = [o, e, n, s];
        var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a], c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n],
            l = r ? "0.5" : "0.0";
        this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u[0] / c[0] + ",\n          " + u[1] / c[1] + ");\n      const vec2 inputShapeRC = vec2(" + i + ".0, " + a + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + l + ")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    "
    }

    function Ha(r, o) {
        this.variableNames = ["x"];
        var t = r.length;
        if (4 < t) throw new Error("WebGL backend: Reverse of rank-" + t + " tensor is not yet supported");
        if (this.outputShape = r, 1 !== t) {
            var e = r.map(function (t, e) {
                return n = e, -1 !== o.indexOf(n) && 1 !== r[n] ? r[n] + " - coords[" + n + "] - 1" : "coords[" + n + "]";
                var n
            }).join(","), n = oi(t);
            this.userCode = "\n      void main() {\n        " + n + " coords = getOutputCoords();\n        setOutput(getX(" + e + "));\n      }\n    "
        } else this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + r[0] + " - coord - 1));\n        }\n      "
    }

    function qa(i, a) {
        this.variableNames = ["x"], this.packedInputs = !0, this.packedOutput = !0;
        var t = i.length;
        if (4 < t) throw new Error("WebGL backend: Reverse of rank-" + t + " tensor is not yet supported");
        this.outputShape = i;
        var e, n, r, o = $o("rc", t), s = o[t - 1] + " + 1 < " + this.outputShape[t - 1],
            u = o[t - 2] + " + 1 < " + this.outputShape[t - 2], c = oi(t);

        function l(o) {
            var t = i.map(function (t, e) {
                return n = e, r = o, -1 !== a.indexOf(n) && 1 !== i[n] ? i[n] + " - " + r[n] + " - 1" : "" + r[n];
                var n, r
            });
            return "getChannel(getX(" + t.join(",") + "), vec2(" + t.slice(-2).join(",") + "))"
        }

        this.userCode = 1 === t ? "\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(" + i[0] + " - rc - 1),\n            " + i[0] + " - rc - 1);\n          if(" + s + "){\n              result.g = getChannel(getX(" + i[0] + " - (rc  + 1) - 1),\n                " + i[0] + " - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      " : "\n        void main() {\n          " + c + " rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = " + l(o.slice()) + ";\n          if(" + s + "){\n            result.g = " + ((r = o.slice())[t - 1] = "(" + r[t - 1] + " + 1)", l(r)) + ";\n          }\n          if(" + u + ") {\n            result.b = " + ((n = o.slice())[t - 2] = "(" + n[t - 2] + " + 1)", l(n)) + ";\n            if(" + s + ") {\n              result.a = " + ((e = o.slice())[t - 1] = "(" + e[t - 1] + " + 1)", e[t - 2] = "(" + e[t - 2] + " + 1)", l(e)) + ";\n            }\n          }\n          setOutput(result);\n        }\n    "
    }

    function ja(t, e, n, r, o, i, a) {
        this.variableNames = ["updates", "indices", "defaultValue"], this.outputShape = i;
        var s = oi(o.length), u = oi(i.length), c = "";
        1 === n ? c = "i" : 2 === n && (c = "i, j");
        var l = "getIndices(" + c + ")", h = "";
        1 === r ? h = "i" : 2 === r && (h = "i, coords[1]");
        var f = "getUpdates(" + h + ")", p = 1 < e ? "strides[j]" : "strides";
        this.userCode = "\n        " + s + " strides = " + s + "(" + o + ");\n\n        void main() {\n          " + u + " coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < " + t + "; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < " + e + "; j++) {\n              int index = round(" + l + ");\n              flattenedIndex += index * " + p + ";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += " + f + ";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      "
    }

    function Ka(t, e) {
        this.variableNames = ["x", "segmentIds"];
        var n = t.windowSize, r = t.batchSize, o = t.inSize, i = t.numSegments, a = i * Math.ceil(o / n);
        this.outputShape = [r, a];
        var s = 4 * Math.floor(n / 4), u = n % 4, c = "\n        sumValue += dot(values, segFilter);\n    ", l = "";
        0 < o % n && (l = "\n        if (inIdx < 0 || inIdx >= " + o + ") {\n          return initializationValue;\n        }\n      ");
        var h = "";
        0 < o % n && (h = "\n        if (inIdx < 0 || inIdx >= " + o + ") {\n          return -1.0;\n        }\n      "), this.userCode = "\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        " + l + "\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        " + h + "\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          " + i + ")) * float(" + n + "));\n        int currentSeg = int(mod(float(outIdx), float(" + i + ")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + s + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          " + c + "\n        }\n\n        int inIdx = inOffset + " + s + ";\n        if (" + (1 == u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          " + c + "\n        } else if (" + (2 == u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          " + c + "\n        } else if (" + (3 == u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          " + c + "\n        }\n        setOutput(sumValue);\n      }\n    "
    }

    function Xa(t, e, n) {
        var r, o;
        if (this.variableNames = ["c", "a", "b"], this.outputShape = e, 4 < n) throw Error("Where for rank " + n + " is not yet supported");
        if (1 === n) r = o = "resRC"; else {
            for (var i = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], a = [], s = [], u = 0; u < e.length; u++) s.push("" + i[u]), u < t && a.push("" + i[u]);
            r = a.join(), o = s.join()
        }
        var c = oi(n);
        this.userCode = "\n      void main() {\n        " + c + " resRC = getOutputCoords();\n        float cVal = getC(" + r + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + o + "));\n        } else {\n          setOutput(getB(" + o + "));\n        }\n      }\n    "
    }

    var Ya = (Ja.prototype.getCustomSetupFunc = function (n) {
        var r = this;
        if (n.length !== this.rank) throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + n.length + ")");
        return function (t, e) {
            null == r.startLoc && (r.startLoc = t.getUniformLocationNoThrow(e, "start"), null == r.startLoc) || t.gl.uniform1iv(r.startLoc, n)
        }
    }, Ja), $a = ["x", "y", "z", "w", "u", "v"];

    function Ja(t) {
        this.variableNames = ["source"], this.outputShape = t, this.rank = t.length;
        var e, n = oi(this.rank), r = "uniform int start[" + this.rank + "];", o = function (t) {
            if (1 === t) return "sourceLoc";
            if (t <= 6) return $a.slice(0, t).map(function (t) {
                return "sourceLoc." + t
            }).join(",");
            throw Error("Slicing for rank " + t + " is not yet supported")
        }(this.rank);
        e = "\n        " + n + " sourceLoc;\n        " + n + " coords = getOutputCoords();\n        " + t.map(function (t, e) {
            return "sourceLoc." + $a[e] + " = start[" + e + "] + coords." + $a[e] + ";"
        }).join("\n") + "\n      ", this.userCode = "\n      " + r + "\n      void main() {\n        " + e + "\n        setOutput(getSource(" + o + "));\n      }\n    "
    }

    function Qa(t, e, n) {
        this.variableNames = ["x"];
        var r = (this.outputShape = n).length, o = oi(n.length), i = oi(n.length), a = "";
        if (1 === r) a = "coords * strides + begin"; else {
            var s = 0;
            a = n.map(function (t, e) {
                return s++, 1 === n.length ? "coords * strides[" + e + "] + begin[" + e + "]" : "coords[" + (s - 1) + "] * strides[" + e + "] + begin[" + e + "]"
            }).join(",")
        }
        this.userCode = "\n      " + o + " begin = " + o + "(" + t + ");\n      " + o + " strides = " + o + "(" + e + ");\n\n      void main() {\n        " + i + " coords = getOutputCoords();\n        setOutput(getX(" + a + "));\n      }\n    "
    }

    var Za = (ns.prototype.getCustomSetupFunc = function (n) {
        var r = this;
        if (n.length !== this.rank) throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + n.length + ")");
        return function (t, e) {
            null == r.startLoc && (r.startLoc = t.getUniformLocationNoThrow(e, "start"), null == r.startLoc) || t.gl.uniform1iv(r.startLoc, n)
        }
    }, ns), ts = (es.prototype.acquireTexture = function (t, e, n) {
        var r, o = rs(e, n), i = os(t, o, n);
        if (i in this.freeTextures || (this.freeTextures[i] = []), i in this.usedTextures || (this.usedTextures[i] = []), 0 < this.freeTextures[i].length) {
            this.numFreeTextures--, this.numUsedTextures++, this.log();
            var a = this.freeTextures[i].shift();
            return this.usedTextures[i].push(a), a
        }
        return this.numUsedTextures++, this.log(), o === Qt.PACKED_2X2_FLOAT32 ? r = this.gpgpu.createPackedMatrixTexture(t[0], t[1]) : o === Qt.PACKED_2X2_FLOAT16 ? r = this.gpgpu.createFloat16PackedMatrixTexture(t[0], t[1]) : o === Qt.UNPACKED_FLOAT32 ? r = this.gpgpu.createFloat32MatrixTexture(t[0], t[1]) : o === Qt.UNPACKED_FLOAT16 ? r = this.gpgpu.createFloat16MatrixTexture(t[0], t[1]) : o === Qt.PACKED_4X1_UNSIGNED_BYTE && (r = this.gpgpu.createUnsignedBytesMatrixTexture(t[0], t[1])), this.usedTextures[i].push(r), r
    }, es.prototype.releaseTexture = function (t, e, n, r) {
        if (null != this.freeTextures) {
            var o = os(e, rs(n, r), r);
            o in this.freeTextures || (this.freeTextures[o] = []), this.freeTextures[o].push(t), this.numFreeTextures++, this.numUsedTextures--;
            var i = this.usedTextures[o], a = i.indexOf(t);
            if (a < 0) throw new Error("Cannot release a texture that was never provided by this texture manager");
            i.splice(a, 1), this.log()
        }
    }, es.prototype.log = function () {
        if (this.logEnabled) {
            var t = this.numFreeTextures + this.numUsedTextures;
            console.log("Free/Used", this.numFreeTextures + " / " + this.numUsedTextures, "(" + t + ")")
        }
    }, es.prototype.getNumUsedTextures = function () {
        return this.numUsedTextures
    }, es.prototype.getNumFreeTextures = function () {
        return this.numFreeTextures
    }, es.prototype.dispose = function () {
        var e = this;
        if (null != this.freeTextures) {
            for (var t in this.freeTextures) this.freeTextures[t].forEach(function (t) {
                e.gpgpu.deleteMatrixTexture(t)
            });
            for (var t in this.usedTextures) this.usedTextures[t].forEach(function (t) {
                e.gpgpu.deleteMatrixTexture(t)
            });
            this.freeTextures = null, this.usedTextures = null, this.numUsedTextures = 0, this.numFreeTextures = 0
        }
    }, es);

    function es(t) {
        this.gpgpu = t, this.numUsedTextures = 0, this.numFreeTextures = 0, this.freeTextures = {}, this.logEnabled = !1, this.usedTextures = {}
    }

    function ns(t) {
        this.variableNames = ["source"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t, this.rank = t.length;
        var e = oi(this.rank), n = $o("coords", this.rank), r = $o("sourceLoc", this.rank),
            o = 1 === this.rank ? "sourceLoc" : "vec2(" + r.slice(-2).join() + ")",
            i = "getChannel(getSource(" + r.join() + "), " + o + ")",
            a = "\n      result.x = " + i + ";\n      if (++" + n[this.rank - 1] + " < " + t[this.rank - 1] + ") {\n        ++" + r[this.rank - 1] + ";\n        result.y = " + i + ";\n        --" + r[this.rank - 1] + ";\n      }\n    ",
            s = 1 === this.rank ? "" : "\n      --" + n[this.rank - 1] + ";\n      if (++" + n[this.rank - 2] + " < " + t[this.rank - 2] + ") {\n        ++" + r[this.rank - 2] + ";\n        result.z = " + i + ";\n        if (++" + n[this.rank - 1] + " < " + t[this.rank - 1] + ") {\n          ++" + r[this.rank - 1] + ";\n          result.w = " + i + ";\n        }\n      }\n    ",
            u = this.rank <= 4 ? "sourceLoc = coords +\n            " + e + "(" + t.map(function (t, e) {
                return "start[" + e + "]"
            }).join() + ");" : t.map(function (t, e) {
                return r[e] + " = " + n[e] + " + start[" + e + "];"
            }).join("\n");
        this.userCode = "\n      uniform int start[" + this.rank + "];\n      void main() {\n        " + e + " coords = getOutputCoords();\n        " + e + " sourceLoc;\n        " + u + "\n        vec4 result = vec4(0.);\n        " + a + "\n        " + s + "\n        setOutput(result);\n      }\n    "
    }

    function rs(t, e) {
        if (t === Jt.UPLOAD) return Qt.PACKED_2X2_FLOAT32;
        if (t === Jt.RENDER || null == t) return n = e, _().getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? n ? Qt.PACKED_2X2_FLOAT32 : Qt.UNPACKED_FLOAT32 : n ? Qt.PACKED_2X2_FLOAT16 : Qt.UNPACKED_FLOAT16;
        var n;
        if (t === Jt.DOWNLOAD || t === Jt.PIXELS) return Qt.PACKED_4X1_UNSIGNED_BYTE;
        throw new Error("Unknown logical texture type " + t)
    }

    function os(t, e, n) {
        return t[0] + "_" + t[1] + "_" + e + "_" + n
    }

    function is(t, e) {
        this.variableNames = ["A"];
        for (var n = new Array(t.length), r = 0; r < n.length; r++) n[r] = t[r] * e[r];
        this.outputShape = n, this.rank = n.length;
        var o = oi(this.rank), i = function (t) {
            var e = t.length;
            if (5 < e) throw Error("Tile for rank " + e + " is not yet supported");
            if (1 === e) return "imod(resRC, " + t[0] + ")";
            for (var n = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"], r = [], o = 0; o < t.length; o++) r.push("imod(" + n[o] + ", " + t[o] + ")");
            return r.join()
        }(t);
        this.userCode = "\n      void main() {\n        " + o + " resRC = getOutputCoords();\n        setOutput(getA(" + i + "));\n      }\n    "
    }

    function as(t, e) {
        this.variableNames = ["A"];
        for (var n = new Array(t.length), r = 0; r < n.length; r++) n[r] = t[e[r]];
        this.outputShape = n, this.rank = n.length;
        var o = oi(this.rank), i = function (t) {
            var e = t.length;
            if (6 < e) throw Error("Transpose for rank " + e + " is not yet supported");
            for (var n = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"], r = new Array(e), o = 0; o < t.length; o++) r[t[o]] = n[o];
            return r.join()
        }(e);
        this.userCode = "\n    void main() {\n      " + o + " resRC = getOutputCoords();\n      setOutput(getA(" + i + "));\n    }\n    "
    }

    function ss(t, e) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0;
        for (var n = new Array(t.length), r = 0; r < n.length; r++) n[r] = t[e[r]];
        if (this.outputShape = n, this.rank = n.length, 6 < this.rank) throw Error("Packed transpose for rank " + this.rank + " is not yet supported.");
        var o = oi(this.rank), i = Yo("rc", this.rank), a = new Array(this.rank);
        for (r = 0; r < e.length; r++) a[e[r]] = i[r];
        var s = "vec2(" + a.slice(-2).join() + ")", u = "++" + i[this.rank - 1] + " < " + n[this.rank - 1],
            c = "getChannel(getA(" + a.join() + "), " + s + ")";
        this.userCode = "\n    void main() {\n      " + o + " rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = " + c + ";\n      if(" + u + ") {\n        result[1] = " + c + ";\n      }\n      --" + i[this.rank - 1] + ";\n      if(++" + i[this.rank - 2] + " < " + n[this.rank - 2] + ") {\n        result[2] = " + c + ";\n        if(" + u + ") {\n          result[3] = " + c + ";\n        }\n      }\n      setOutput(result);\n    }\n    "
    }

    function us(t, e) {
        this.variableNames = ["A"], this.outputShape = t, this.userCode = "\n      float unaryOperation(float x) {\n        " + e + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "
    }

    function cs(t, e) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !0, this.outputShape = t, this.userCode = "\n      vec4 unaryOperation(vec4 x) {\n        " + e + "\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "
    }

    function ls(t) {
        this.variableNames = ["A"], this.packedInputs = !0, this.packedOutput = !1;
        var e = (this.outputShape = t).length, n = $o("rc", e), r = oi(e), o = function (t, e) {
            if (1 === t) return "rc";
            for (var n = "", r = 0; r < t; r++) n += e[r], r < t - 1 && (n += ",");
            return n
        }(e, n), i = n.slice(-2), a = e <= 1 ? "rc" : "vec2(" + i.join(",") + ")";
        this.userCode = "\n      void main() {\n        " + r + " rc = getOutputCoords();\n        vec4 packedInput = getA(" + o + ");\n\n        setOutput(getChannel(packedInput, " + a + "));\n      }\n    "
    }

    var hs = 1.7580993408473768, fs = 1.0507009873554805, ps = "if (isnan(x)) return x;", ds = "return abs(x);",
        vs = ps + "\n  return (x < 0.0) ? 0.0 : x;\n", ms = ps + "\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",
        gs = "return (x >= 0.0) ? x : (exp(x) - 1.0);", ys = "return -x;", xs = "return ceil(x);",
        bs = "return floor(x);", ws = "return exp(x);", Cs = "return exp(x) - 1.0;", Es = "return x;",
        _s = "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",
        Is = "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",
        Rs = "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n",
        ks = {};

    function Ss(t, e) {
        if (void 0 === e && (e = !1), "linear" === t) return "return x;";
        if ("relu" === t) return e ? _s : vs;
        if ("elu" === t) return e ? Rs : gs;
        if ("relu6" === t) return e ? Is : ms;
        if ("prelu" === t) return e ? Ci : wi;
        throw new Error("Activation " + t + " has not been implemented for the WebGL backend.")
    }

    var Ds, As = (t(Ts, Ds = lo), Ts.prototype.numDataIds = function () {
        return this.texData.numDataIds() + (this.cpuBackend ? this.cpuBackend.numDataIds() : 0) - this.pendingDeletes
    }, Ts.prototype.write = function (t, e, n) {
        if (_().getBool("DEBUG") && this.checkNumericalProblems(t), "complex64" === n && null != t) throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
        var r = {};
        return this.texData.set(r, {shape: e, dtype: n, values: t, usage: Jt.UPLOAD}), r
    }, Ts.prototype.move = function (t, e, n, r) {
        if (_().getBool("DEBUG") && this.checkNumericalProblems(e), "complex64" === r) throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
        this.texData.set(t, {shape: n, dtype: r, values: e, usage: Jt.UPLOAD})
    }, Ts.prototype.readSync = function (t) {
        var e = this.texData.get(t), n = e.values, r = e.dtype, o = e.complexTensors, i = e.slice, a = e.shape,
            s = e.isPacked;
        if (null != i) {
            var u;
            u = s ? new cs(a, Es) : new us(a, Es);
            var c = this.runWebGLProgram(u, [{dataId: t, shape: a, dtype: r}], r), l = this.readSync(c.dataId);
            return this.disposeData(c.dataId), l
        }
        if (null != n) return this.convertAndCacheOnCPU(t);
        if ("string" === r) return n;
        var h, f, p = null != this.activeTimers;
        return p && (h = tt()), f = "complex64" === r ? Mo(o.real.dataSync(), o.imag.dataSync()) : this.getValuesFromTexture(t), p && (this.downloadWaitMs += tt() - h), this.convertAndCacheOnCPU(t, f)
    }, Ts.prototype.read = function (E) {
        return y(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l, h, f, p, d, v, m, g, y, x, b, w, C;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (this.pendingRead.has(E)) return e = this.pendingRead.get(E), [2, new Promise(function (t) {
                            return e.push(t)
                        })];
                        if (n = this.texData.get(E), r = n.values, o = n.shape, i = n.slice, a = n.dtype, s = n.complexTensors, u = n.isPacked, null != i) return c = u ? new cs(o, Es) : new us(o, Es), l = this.runWebGLProgram(c, [{
                            dataId: E,
                            shape: o,
                            dtype: a
                        }], a), h = this.read(l.dataId), this.disposeData(l.dataId), [2, h];
                        if (null != r) return [2, this.convertAndCacheOnCPU(E)];
                        if (!_().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED") && 2 === _().getNumber("WEBGL_VERSION")) throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");
                        return f = null, "complex64" !== a && _().get("WEBGL_BUFFER_SUPPORTED") && (p = this.decode(E), d = this.texData.get(p.dataId), f = (C = this.gpgpu).createBufferFromTexture.apply(C, [d.texture].concat(se(o)))), this.pendingRead.set(E, []), "complex64" === a ? [3, 2] : [4, this.gpgpu.createAndWaitForFence()];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return "complex64" !== a ? [3, 4] : [4, Promise.all([s.real.data(), s.imag.data()])];
                    case 3:
                        return m = t.sent(), g = m[0], y = m[1], v = Mo(g, y), [3, 5];
                    case 4:
                        v = null == f ? this.getValuesFromTexture(E) : (x = L(o), this.gpgpu.downloadFloat32MatrixFromBuffer(f, x)), t.label = 5;
                    case 5:
                        return null != p && this.disposeData(p.dataId), b = this.convertAndCacheOnCPU(E, v), w = this.pendingRead.get(E), this.pendingRead.delete(E), w.forEach(function (t) {
                            return t(b)
                        }), this.pendingDisposal.has(E) && (this.pendingDisposal.delete(E), this.disposeData(E), this.pendingDeletes--), [2, b]
                }
            })
        })
    }, Ts.prototype.checkNumericalProblems = function (t) {
        if (null != t) for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (!he(n)) {
                if (_().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")) throw Error("The value " + n + " cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");
                throw Error("The value " + n + " cannot be represented on this device.")
            }
        }
    }, Ts.prototype.getValuesFromTexture = function (t) {
        var e, n = this.texData.get(t), r = n.shape, o = n.dtype, i = n.isPacked, a = L(r);
        if (_().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
            var s = this.decode(t), u = this.texData.get(s.dataId),
                c = (e = this.gpgpu).downloadMatrixFromPackedTexture.apply(e, [u.texture].concat(se(r))).subarray(0, a);
            return this.disposeData(s.dataId), c
        }
        var l = _().getBool("WEBGL_PACK") && !0 === i, h = l ? ze(r) : r, f = l ? new qi(h) : new Hi(h),
            p = this.runWebGLProgram(f, [{shape: h, dtype: o, dataId: t}], "float32"), d = this.texData.get(p.dataId),
            v = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(d.texture, d.texShape[0], d.texShape[1]).subarray(0, a);
        return this.disposeData(p.dataId), v
    }, Ts.prototype.time = function (u) {
        return y(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.activeTimers, r = !(n = []), null == this.programTimersStack ? (this.programTimersStack = n, r = !0) : this.activeTimers.push(n), this.activeTimers = n, u(), o = b(this.activeTimers.map(function (t) {
                            return t.query
                        })).filter(function (t) {
                            return null != t
                        }), i = b(this.activeTimers.map(function (t) {
                            return t.name
                        })).filter(function (t) {
                            return null != t
                        }), this.activeTimers = e, r && (this.programTimersStack = null), a = {
                            uploadWaitMs: this.uploadWaitMs,
                            downloadWaitMs: this.downloadWaitMs,
                            kernelMs: null,
                            wallMs: null
                        }, 0 < _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") ? [4, Promise.all(o)] : [3, 2];
                    case 1:
                        return s = t.sent(), a.kernelMs = v(s), a.getExtraProfileInfo = function () {
                            return s.map(function (t, e) {
                                return {name: i[e], ms: t}
                            }).map(function (t) {
                                return t.name + ": " + t.ms
                            }).join(", ")
                        }, [3, 3];
                    case 2:
                        a.kernelMs = {error: "WebGL query timers are not supported in this environment."}, t.label = 3;
                    case 3:
                        return this.uploadWaitMs = 0, this.downloadWaitMs = 0, [2, a]
                }
            })
        })
    }, Ts.prototype.memory = function () {
        return {unreliable: !1, numBytesInGPU: this.numBytesInGPU}
    }, Ts.prototype.startTimer = function () {
        return 0 < _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") ? this.gpgpu.beginQuery() : {
            startMs: tt(),
            endMs: null
        }
    }, Ts.prototype.endTimer = function (t) {
        return 0 < _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") ? this.gpgpu.endQuery() : t.endMs = tt(), t
    }, Ts.prototype.getQueryTime = function (n) {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                return 0 < _().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") ? [2, this.gpgpu.waitForQueryAndGetTime(n)] : [2, (e = n).endMs - e.startMs]
            })
        })
    }, Ts.prototype.disposeData = function (t) {
        if (!this.pendingDisposal.has(t)) {
            if (this.pendingRead.has(t)) return this.pendingDisposal.add(t), void this.pendingDeletes++;
            if (this.texData.has(t)) {
                this.releaseGPUData(t);
                var e = this.texData.get(t).complexTensors;
                null != e && (e.real.dispose(), e.imag.dispose()), this.texData.delete(t)
            }
        }
    }, Ts.prototype.releaseGPUData = function (t) {
        var e = this.texData.get(t), n = e.texture, r = e.dtype, o = e.texShape, i = e.usage, a = e.isPacked,
            s = e.slice, u = s && s.origDataId || t, c = this.dataRefCount.get(u);
        1 < c ? this.dataRefCount.set(u, c - 1) : (this.dataRefCount.delete(u), null != n && (this.numBytesInGPU -= this.computeBytes(o, r), this.textureManager.releaseTexture(n, o, i, a)));
        var l = this.texData.get(t);
        l.texture = null, l.texShape = null, l.isPacked = !1, l.slice = null
    }, Ts.prototype.getTexture = function (t) {
        return this.uploadToGPU(t), this.texData.get(t).texture
    }, Ts.prototype.getDataInfo = function (t) {
        return this.texData.get(t)
    }, Ts.prototype.getCPUBackend = function () {
        return _().getBool("WEBGL_CPU_FORWARD") ? (null == this.cpuBackend && (this.cpuBackend = Kt.findBackend("cpu")), this.cpuBackend) : null
    }, Ts.prototype.shouldExecuteOnCPU = function (t, e) {
        var n = this;
        return void 0 === e && (e = 128), null != this.getCPUBackend() && t.every(function (t) {
            return null == n.texData.get(t.dataId).texture && t.size < e
        })
    }, Ts.prototype.getGPGPUContext = function () {
        return this.gpgpu
    }, Ts.prototype.complex = function (t, e) {
        var n = this.makeOutput(t.shape, "complex64");
        return this.texData.get(n.dataId).complexTensors = {real: Kt.keep(t.clone()), imag: Kt.keep(e.clone())}, n
    }, Ts.prototype.real = function (t) {
        return this.texData.get(t.dataId).complexTensors.real.clone()
    }, Ts.prototype.imag = function (t) {
        return this.texData.get(t.dataId).complexTensors.imag.clone()
    }, Ts.prototype.slice = function (t, e, n) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.slice(t, e, n);
        if (0 === L(n)) return In([], n, t.dtype);
        var r = this.texData.get(t.dataId).isPacked, o = eo(t.shape, e, n);
        if (!r && o) return this.uploadToGPU(t.dataId), this.shallowSlice(t, e, n);
        var i = _().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Za(n) : new Ya(n), a = i.getCustomSetupFunc(e);
        return this.compileAndRun(i, [t], null, a)
    }, Ts.prototype.shallowSlice = function (t, e, n) {
        var r = this.texData.get(t.dataId), o = this.makeOutput(n, t.dtype), i = this.texData.get(o.dataId);
        Object.assign(i, r), i.shape = n, i.dtype = t.dtype;
        var a = no(e, t.strides);
        r.slice && (a += r.slice.flatOffset), i.slice = {
            flatOffset: a,
            origDataId: r.slice && r.slice.origDataId || t.dataId
        };
        var s = this.dataRefCount.get(i.slice.origDataId) || 1;
        return this.dataRefCount.set(i.slice.origDataId, s + 1), o
    }, Ts.prototype.stridedSlice = function (t, e, n, r) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.stridedSlice(t, e, n, r);
        var o = Qr(e, n, r);
        if (o.some(function (t) {
            return 0 === t
        })) return In([], o);
        var i = new Qa(e, r, o);
        return this.compileAndRun(i, [t])
    }, Ts.prototype.reverse = function (t, e) {
        var n = _().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new qa(t.shape, e) : new Ha(t.shape, e);
        return this.compileAndRun(n, [t])
    }, Ts.prototype.concat = function (t, e) {
        if ("complex64" === t[0].dtype) {
            var n = t.map(function (t) {
                return En(t)
            }), r = t.map(function (t) {
                return _n(t)
            });
            return Cn(this.concat(n, e), this.concat(r, e))
        }
        if (this.shouldExecuteOnCPU(t)) return this.cpuBackend.concat(t, e);
        if (1 === t.length) return t[0];
        if (t.length > _().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")) {
            var o = Math.floor(t.length / 2), i = this.concat(t.slice(0, o), e), a = this.concat(t.slice(o), e);
            return this.concat([i, a], e)
        }
        if (_().getBool("WEBGL_PACK_ARRAY_OPERATIONS") && 1 < t[0].rank) {
            var s = new gi(t.map(function (t) {
                return t.shape
            }), e);
            return this.compileAndRun(s, t)
        }
        var u = bn(t.map(function (t) {
            return t.shape
        }), e), c = t.map(function (t) {
            return t.as2D(-1, L(t.shape.slice(e)))
        }), l = new mi(c.map(function (t) {
            return t.shape
        }));
        return this.compileAndRun(l, c).reshape(u)
    }, Ts.prototype.neg = function (t) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.neg(t);
        if (_().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t, ys, t.dtype);
        var e = new us(t.shape, ys);
        return this.compileAndRun(e, [t])
    }, Ts.prototype.batchMatMul = function (t, e, n, r) {
        var o = n ? t.shape[2] : t.shape[1], i = r ? e.shape[1] : e.shape[2], a = n ? t.shape[1] : t.shape[2],
            s = t.shape[0];
        if ((1 === o || 1 === i) && 1e3 < a) {
            n && (t = t.transpose([0, 2, 1])), r && (e = e.transpose([0, 2, 1]));
            var u = 1 === i ? t : t.as3D(s, a, 1), c = 1 === i ? 2 : 1, l = 1 === i ? e.as3D(s, 1, a) : e;
            return this.multiply(u, l).sum(c, !0)
        }
        var h = Pt(t.dtype, e.dtype), f = new Sa(t.shape, [s, o, i], n, r);
        return this.compileAndRun(f, [t, e], h)
    }, Ts.prototype.fusedBatchMatMul = function (t) {
        var e = t.a, n = t.b, r = t.transposeA, o = t.transposeB, i = t.bias, a = t.activation,
            s = t.preluActivationWeights, u = r ? e.shape[2] : e.shape[1], c = o ? n.shape[1] : n.shape[2],
            l = e.shape[0], h = Pt(e.dtype, n.dtype), f = null != i, p = null != s, d = a ? Ss(a, !0) : null,
            v = new Sa(e.shape, [l, u, c], r, o, f, d, p), m = [e, n];
        return i && m.push(i), s && m.push(s), this.compileAndRun(v, m, h)
    }, Ts.prototype.multiply = function (t, e) {
        if ("complex64" === t.dtype) {
            var n = this.texData.get(t.dataId), r = this.texData.get(e.dataId),
                o = new fi("return areal * breal - aimag * bimag;", t.shape, e.shape),
                i = new fi("return areal * bimag + aimag * breal;", t.shape, e.shape),
                a = [this.makeComplexComponentTensorInfo(t, n.complexTensors.real), this.makeComplexComponentTensorInfo(t, n.complexTensors.imag), this.makeComplexComponentTensorInfo(e, r.complexTensors.real), this.makeComplexComponentTensorInfo(e, r.complexTensors.imag)],
                s = this.compileAndRun(o, a), u = this.compileAndRun(i, a), c = this.complex(s, u);
            return s.dispose(), u.dispose(), c
        }
        if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.multiply(t, e);
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, bi, t.dtype);
        var l = new pi(bi, t.shape, e.shape);
        return this.compileAndRun(l, [t, e], t.dtype)
    }, Ts.prototype.batchNormalization = function (t, e, n, r, o, i) {
        var a = [t, e, n], s = null;
        null != i && (s = i.shape, a.push(i));
        var u = null;
        if (null != o && (u = o.shape, a.push(o)), _().getBool("WEBGL_PACK_NORMALIZATION")) {
            var c = new hi(t.shape, e.shape, n.shape, s, u, r);
            return this.compileAndRun(c, a)
        }
        var l = new li(t.shape, e.shape, n.shape, s, u, r);
        return this.compileAndRun(l, a)
    }, Ts.prototype.localResponseNormalization4D = function (t, e, n, r, o) {
        var i = _().getBool("WEBGL_PACK_NORMALIZATION") ? new Ia(t.shape, e, n, r, o) : new Ea(t.shape, e, n, r, o);
        return this.compileAndRun(i, [t])
    }, Ts.prototype.LRNGrad = function (t, e, n, r, o, i, a) {
        var s = new _a(e.shape, r, o, i, a);
        return this.compileAndRun(s, [e, n, t])
    }, Ts.prototype.tile = function (t, e) {
        if ("string" === t.dtype) {
            var n = this.readSync(t.dataId).map(function (t) {
                return rt(t)
            });
            return Go(cr(t.shape, t.dtype, n), e)
        }
        var r = new is(t.shape, e);
        return this.compileAndRun(r, [t])
    }, Ts.prototype.pad = function (t, e, n) {
        var r = _().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Ma(t.shape, e, n) : new Fa(t.shape, e, n);
        return this.compileAndRun(r, [t])
    }, Ts.prototype.transpose = function (t, e) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.transpose(t, e);
        var n = _().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new ss(t.shape, e) : new as(t.shape, e);
        return this.compileAndRun(n, [t])
    }, Ts.prototype.gather = function (t, e, n) {
        if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.gather(t, e, n);
        var r = new Yi(t.shape, e.size, n);
        return this.compileAndRun(r, [t, e])
    }, Ts.prototype.batchToSpaceND = function (t, e, n) {
        P(t.rank <= 4, function () {
            return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"
        });
        var r = e.reduce(function (t, e) {
                return t * e
            }), o = Lr(t.shape, e, r), i = Wr(o.length, e.length), a = zr(t.shape, e, r), s = Ur(n, e.length),
            u = Vr(a, n, e.length);
        return t.reshape(o).transpose(i).reshape(a).slice(s, u)
    }, Ts.prototype.spaceToBatchND = function (t, e, n) {
        P(t.rank <= 4, function () {
            return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"
        });
        var r = e.reduce(function (t, e) {
            return t * e
        }), o = [[0, 0]];
        o.push.apply(o, n);
        for (var i = 1 + e.length; i < t.shape.length; ++i) o.push([0, 0]);
        var a = t.pad(o), s = Lr(a.shape, e, r, !1), u = Wr(s.length, e.length, !1), c = zr(a.shape, e, r, !1);
        return a.reshape(s).transpose(u).reshape(c)
    }, Ts.prototype.reduce = function (t, e, n) {
        var r = t.shape[0], o = t.shape[1], i = qr(o), a = new Ba({windowSize: i, inSize: o, batchSize: r}, e),
            s = this.compileAndRun(a, [t], n);
        return 1 === s.shape[1] ? s : this.reduce(s, e, n)
    }, Ts.prototype.argReduce = function (t, e, n) {
        void 0 === n && (n = null);
        var r = t.shape[0], o = t.shape[1];
        null != n && (r = n.shape[0], o = n.shape[1]);
        var i = qr(o), a = new Xo({windowSize: i, inSize: o, batchSize: r}, e, null == n), s = [t];
        null != n && s.push(n);
        var u = this.compileAndRun(a, s, "int32");
        return 1 === u.shape[1] ? u : this.argReduce(t, e, u)
    }, Ts.prototype.argReducePacked = function (t, e, n) {
        void 0 === n && (n = null);
        var r = null != n ? n.shape : t.shape, o = qr(r[r.length - 1]), i = new si(r, o, e, null == n),
            a = null == n ? [t] : [t, n], s = this.compileAndRun(i, a, "int32");
        return s.rank === t.rank ? this.argReducePacked(t, e, s) : s
    }, Ts.prototype.sum = function (t, e) {
        vn("sum", e, t.rank);
        var n = pn(t.shape, e), r = n[0], o = L(n[1]), i = t.as2D(-1, o), a = Bt(t.dtype);
        return this.reduce(i, "sum", a).reshape(r)
    }, Ts.prototype.prod = function (t, e) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.prod(t, e);
        var n = pn(t.shape, e), r = n[0], o = L(n[1]), i = t.as2D(-1, o), a = Bt(t.dtype);
        return this.reduce(i, "prod", a).reshape(r)
    }, Ts.prototype.unsortedSegmentSum = function (t, e, n) {
        var r = 0, o = mn([r], t.rank), i = t;
        null != o && (i = t.transpose(o), r = yn(1, t.rank)[0]);
        var a = function (t, e, n) {
                for (var r = [], o = t.length, i = 0; i < o; i++) i !== e ? r.push(t[i]) : r.push(n);
                return r
            }(i.shape, r, n), s = L([i.shape[r]]), u = i.as2D(-1, s), c = Bt(t.dtype),
            l = this.segOpCompute(u, "unsortedSegmentSum", e, c, n).reshape(a);
        return null != o && (l = l.transpose(gn(o))), l
    }, Ts.prototype.segOpCompute = function (t, e, n, r, o) {
        var i = t.shape[0], a = t.shape[1], s = function (t, e) {
                var n, r = !1;
                for (t <= 30 ? (n = t, r = !0) : n = X(t, Math.floor(Math.sqrt(t))); !r;) e < n || n === t ? r = !0 : n = X(t, n + 1);
                return n
            }(a, o), u = new Ka({windowSize: s, inSize: a, batchSize: i, numSegments: o}, e),
            c = this.compileAndRun(u, [t, n], r);
        return c.shape[1] === o ? c : (n = Wn(0, o).tile([a / s]), this.segOpCompute(c, e, n, r, o))
    }, Ts.prototype.argMinMaxReduce = function (t, e, n) {
        var r = [e];
        if (vn("arg" + n.charAt(0).toUpperCase() + n.slice(1), r, t.rank), !_().getBool("WEBGL_PACK_REDUCE") || t.rank <= 2) {
            var o = pn(t.shape, r), i = o[0], a = L(o[1]), s = t.as2D(-1, a);
            return this.argReduce(s, n).reshape(i)
        }
        return this.argReducePacked(t, n)
    }, Ts.prototype.argMin = function (t, e) {
        return this.argMinMaxReduce(t, e, "min")
    }, Ts.prototype.argMax = function (t, e) {
        return this.argMinMaxReduce(t, e, "max")
    }, Ts.prototype.cumsum = function (t, e, n, r) {
        if (e !== t.rank - 1) throw new Error("WebGL cumsum shader expects an inner-most axis=" + (t.rank - 1) + " but got axis=" + e);
        var o = new Wi(t.shape, n, r);
        return this.compileAndRun(o, [t])
    }, Ts.prototype.equal = function (t, e) {
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(equal(a, b));\n", "bool");
        var n = new pi("return float(a == b);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "bool")
    }, Ts.prototype.notEqual = function (t, e) {
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(notEqual(a, b));\n", "bool");
        var n = new pi("return float(a != b);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "bool")
    }, Ts.prototype.less = function (t, e) {
        if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.less(t, e);
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(lessThan(a, b));\n", "bool");
        var n = new pi("return float(a < b);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "bool")
    }, Ts.prototype.lessEqual = function (t, e) {
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(lessThanEqual(a, b));\n", "bool");
        var n = new pi("return float(a <= b);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "bool")
    }, Ts.prototype.greater = function (t, e) {
        if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.greater(t, e);
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(greaterThan(a, b));\n", "bool");
        var n = new pi("return float(a > b);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "bool")
    }, Ts.prototype.greaterEqual = function (t, e) {
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(greaterThanEqual(a, b));\n", "bool");
        var n = new pi("return float(a >= b);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "bool")
    }, Ts.prototype.logicalNot = function (t) {
        var e = new us(t.shape, "return float(!(x >= 1.0));");
        return this.compileAndRun(e, [t])
    }, Ts.prototype.logicalAnd = function (t, e) {
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n", "bool");
        var n = new pi("return float(a >= 1.0 && b >= 1.0);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "bool")
    }, Ts.prototype.logicalOr = function (t, e) {
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n", "bool");
        var n = new pi("return float(a >= 1.0 || b >= 1.0);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "bool")
    }, Ts.prototype.select = function (t, e, n) {
        var r = new Xa(t.rank, e.shape, e.rank);
        return this.compileAndRun(r, [t, e, n], Pt(e.dtype, n.dtype))
    }, Ts.prototype.where = function (t) {
        an("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
        var e = t.dataSync();
        return qo(t.shape, e)
    }, Ts.prototype.topk = function (t, e, n) {
        return Ho(t.dataSync(), t.shape, t.dtype, e)
    }, Ts.prototype.min = function (t, e) {
        vn("min", e, t.rank);
        var n = pn(t.shape, e), r = n[0], o = L(n[1]), i = t.as2D(-1, o);
        return this.reduce(i, "min", i.dtype).reshape(r)
    }, Ts.prototype.minimum = function (t, e) {
        if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.minimum(t, e);
        var n = _().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new di("\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new pi("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n", t.shape, e.shape);
        return this.compileAndRun(n, [t, e])
    }, Ts.prototype.mod = function (t, e) {
        var n = _().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new di("\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new pi("if (b == 0.0) return NAN;\n  return mod(a, b);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e])
    }, Ts.prototype.max = function (t, e) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.max(t, e);
        vn("max", e, t.rank);
        var n = pn(t.shape, e), r = n[0], o = L(n[1]), i = t.as2D(-1, o);
        return this.reduce(i, "max", i.dtype).reshape(r)
    }, Ts.prototype.maximum = function (t, e) {
        if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.maximum(t, e);
        var n = _().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new di("\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new pi("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n", t.shape, e.shape);
        return this.compileAndRun(n, [t, e])
    }, Ts.prototype.all = function (t, e) {
        vn("all", e, t.rank);
        var n = pn(t.shape, e), r = n[0], o = L(n[1]), i = t.as2D(-1, o);
        return this.reduce(i, "all", i.dtype).reshape(r)
    }, Ts.prototype.any = function (t, e) {
        vn("any", e, t.rank);
        var n = pn(t.shape, e), r = n[0], o = L(n[1]), i = t.as2D(-1, o);
        return this.reduce(i, "any", i.dtype).reshape(r)
    }, Ts.prototype.realDivide = function (t, e) {
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n", "float32", !0);
        var n = new pi("\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "float32")
    }, Ts.prototype.floorDiv = function (t, e) {
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n", "int32");
        var n = new pi("\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n", t.shape, e.shape);
        return this.compileAndRun(n, [t, e], "int32")
    }, Ts.prototype.add = function (t, e) {
        if ("complex64" === t.dtype && "complex64" === e.dtype) return this.complexSeparableBinaryOp(t, e, yi);
        if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.add(t, e);
        var n = Pt(t.dtype, e.dtype);
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, yi, n);
        var r = new pi(yi, t.shape, e.shape);
        return this.compileAndRun(r, [t, e], n)
    }, Ts.prototype.packedUnaryOp = function (t, e, n) {
        var r = new cs(t.shape, e);
        return this.compileAndRun(r, [t], n)
    }, Ts.prototype.packedBinaryOp = function (t, e, n, r, o) {
        void 0 === o && (o = !1);
        var i = new di(n, t.shape, e.shape, o);
        return this.compileAndRun(i, [t, e], r)
    }, Ts.prototype.complexSeparableBinaryOp = function (a, s, u) {
        var c = this, t = this.texData.get(a.dataId), e = this.texData.get(s.dataId),
            n = [[t.complexTensors.real, e.complexTensors.real], [t.complexTensors.imag, e.complexTensors.imag]].map(function (t) {
                var e = t[0], n = t[1], r = c.makeComplexComponentTensorInfo(a, e),
                    o = c.makeComplexComponentTensorInfo(s, n), i = new pi(u, a.shape, s.shape);
                return c.compileAndRun(i, [r, o], Pt(e.dtype, n.dtype))
            }), r = n[0], o = n[1], i = this.complex(r, o);
        return r.dispose(), o.dispose(), i
    }, Ts.prototype.makeComplexComponentTensorInfo = function (t, e) {
        return {dataId: e.dataId, dtype: e.dtype, shape: t.shape}
    }, Ts.prototype.addN = function (t) {
        if (1 === t.length) return t[0];
        if (t.length > _().get("WEBGL_MAX_TEXTURES_IN_SHADER")) {
            var e = Math.floor(t.length / 2), n = this.addN(t.slice(0, e)), r = this.addN(t.slice(e));
            return this.addN([n, r])
        }
        var o = t.map(function (t) {
            return t.dtype
        }).reduce(function (t, e) {
            return Pt(t, e)
        }), i = t.map(function (t) {
            return t.shape
        }), a = _().getBool("WEBGL_PACK") ? new Ko(t[0].shape, i) : new jo(t[0].shape, i);
        return this.compileAndRun(a, t, o)
    }, Ts.prototype.subtract = function (t, e) {
        if ("complex64" === t.dtype && "complex64" === e.dtype) return this.complexSeparableBinaryOp(t, e, xi);
        if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.subtract(t, e);
        var n = Pt(t.dtype, e.dtype);
        if (_().getBool("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, xi, t.dtype);
        var r = new pi(xi, t.shape, e.shape);
        return this.compileAndRun(r, [t, e], n)
    }, Ts.prototype.pow = function (t, e) {
        var n = _().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new di("\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new pi("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nif (b == 0.0) {\n  return 1.0;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n", t.shape, e.shape),
            r = Pt(t.dtype, e.dtype);
        return this.compileAndRun(n, [t, e], r)
    }, Ts.prototype.ceil = function (t) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.ceil(t);
        if (_().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t, xs, t.dtype);
        var e = new us(t.shape, xs);
        return this.compileAndRun(e, [t])
    }, Ts.prototype.floor = function (t) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.floor(t);
        if (_().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t, bs, t.dtype);
        var e = new us(t.shape, bs);
        return this.compileAndRun(e, [t])
    }, Ts.prototype.sign = function (t) {
        var e = new us(t.shape, "\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n");
        return this.compileAndRun(e, [t])
    }, Ts.prototype.isNaN = function (t) {
        var e = new us(t.shape, "return float(isnan(x));");
        return this.compileAndRun(e, [t], "bool")
    }, Ts.prototype.isInf = function (t) {
        var e = new us(t.shape, "return float(isinf(x));");
        return this.compileAndRun(e, [t], "bool")
    }, Ts.prototype.isFinite = function (t) {
        var e = new us(t.shape, "return float(!isnan(x) && !isinf(x));");
        return this.compileAndRun(e, [t], "bool")
    }, Ts.prototype.round = function (t) {
        var e = new us(t.shape, "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");
        return this.compileAndRun(e, [t])
    }, Ts.prototype.exp = function (t) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.exp(t);
        if (_().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t, ws, t.dtype);
        var e = new us(t.shape, ws);
        return this.compileAndRun(e, [t])
    }, Ts.prototype.expm1 = function (t) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.expm1(t);
        if (_().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t, Cs, t.dtype);
        var e = new us(t.shape, Cs);
        return this.compileAndRun(e, [t])
    }, Ts.prototype.softmax = function (t, e) {
        var n = D([e], t.shape), r = this.max(t, n), o = dn(r.shape, n), i = this.subtract(t, r.reshape(o)),
            a = this.exp(i), s = this.sum(a, n).reshape(o);
        return this.realDivide(a, s)
    }, Ts.prototype.log = function (t) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.log(t);
        if (_().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t, "\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n", t.dtype);
        var e = new us(t.shape, "if (x < 0.0) return NAN;\n  return log(x);");
        return this.compileAndRun(e, [t])
    }, Ts.prototype.log1p = function (t) {
        var e = new us(t.shape, "return log(1.0 + x);");
        return this.compileAndRun(e, [t])
    }, Ts.prototype.sqrt = function (t) {
        var e = new us(t.shape, "return sqrt(x);");
        return this.compileAndRun(e, [t])
    }, Ts.prototype.rsqrt = function (t) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.rsqrt(t);
        var e = new us(t.shape, "return inversesqrt(x);");
        return this.compileAndRun(e, [t])
    }, Ts.prototype.reciprocal = function (t) {
        var e = new us(t.shape, "return 1.0 / x;");
        return this.compileAndRun(e, [t])
    }, Ts.prototype.relu = function (t) {
        var e;
        return e = _().getBool("WEBGL_PACK") ? new cs(t.shape, _s) : new us(t.shape, vs), this.compileAndRun(e, [t])
    }, Ts.prototype.relu6 = function (t) {
        var e;
        return e = _().getBool("WEBGL_PACK") ? new cs(t.shape, Is) : new us(t.shape, ms), this.compileAndRun(e, [t])
    }, Ts.prototype.prelu = function (t, e) {
        var n = _().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new di(Ci, t.shape, e.shape) : new pi(wi, t.shape, e.shape);
        return this.compileAndRun(n, [t, e])
    }, Ts.prototype.elu = function (t) {
        if (_().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t, Rs, t.dtype);
        var e = new us(t.shape, gs);
        return this.compileAndRun(e, [t])
    }, Ts.prototype.eluDer = function (t, e) {
        var n = _().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new di("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n", t.shape, e.shape) : new pi("return (b >= 1.0) ? a : a * (b + 1.0);", t.shape, e.shape);
        return this.compileAndRun(n, [t, e])
    },Ts.prototype.selu = function (t) {
        var e = new us(t.shape, "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = 1.7580993408473768;\n  float scale = 1.0507009873554805;\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.int = function (t) {
        var e = new us(t.shape, "return float(int(x));");
        return this.compileAndRun(e, [t], "int32")
    },Ts.prototype.clip = function (t, e, n) {
        var r, o = (r = _().getBool("WEBGL_PACK_CLIP") ? new _i(t.shape) : new Ei(t.shape)).getCustomSetupFunc(e, n);
        return this.compileAndRun(r, [t], null, o)
    },Ts.prototype.abs = function (t) {
        if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.abs(t);
        if (_().getBool("WEBGL_PACK_UNARY_OPERATIONS")) return this.packedUnaryOp(t, ds, t.dtype);
        var e = new us(t.shape, ds);
        return this.compileAndRun(e, [t])
    },Ts.prototype.complexAbs = function (t) {
        var e = this.texData.get(t.dataId), n = new vi(t.shape),
            r = [this.makeComplexComponentTensorInfo(t, e.complexTensors.real), this.makeComplexComponentTensorInfo(t, e.complexTensors.imag)];
        return this.compileAndRun(n, r)
    },Ts.prototype.sigmoid = function (t) {
        var e = new us(t.shape, "return 1.0 / (1.0 + exp(-1.0 * x));");
        return this.compileAndRun(e, [t])
    },Ts.prototype.softplus = function (t) {
        var e = new us(t.shape, "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.sin = function (t) {
        var e = new us(t.shape, "if (isnan(x)) return x;\n  return sin(x);\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.cos = function (t) {
        var e = new us(t.shape, "if (isnan(x)) return x;\n  return cos(x);\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.tan = function (t) {
        var e = new us(t.shape, "return tan(x);");
        return this.compileAndRun(e, [t])
    },Ts.prototype.asin = function (t) {
        var e = new us(t.shape, "if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.acos = function (t) {
        var e = new us(t.shape, "if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.atan = function (t) {
        var e = new us(t.shape, "if (isnan(x)) return x;\n  return atan(x);\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.atan2 = function (t, e) {
        var n = _().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new di("\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new pi("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n", t.shape, e.shape);
        return this.compileAndRun(n, [t, e])
    },Ts.prototype.sinh = function (t) {
        var e = new us(t.shape, "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.cosh = function (t) {
        var e = new us(t.shape, "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.tanh = function (t) {
        var e = new us(t.shape, "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");
        return this.compileAndRun(e, [t])
    },Ts.prototype.asinh = function (t) {
        var e = new us(t.shape, "if (isnan(x)) return x;return log(x + sqrt(x * x + 1.0));");
        return this.compileAndRun(e, [t])
    },Ts.prototype.acosh = function (t) {
        var e = new us(t.shape, "if (isnan(x)) return x;\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));");
        return this.compileAndRun(e, [t])
    },Ts.prototype.atanh = function (t) {
        var e = new us(t.shape, "if (isnan(x)) return x;\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;");
        return this.compileAndRun(e, [t])
    },Ts.prototype.erf = function (t) {
        var e = new us(t.shape, '\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n');
        return this.compileAndRun(e, [t])
    },Ts.prototype.step = function (t, e) {
        var n,
            r = new us(t.shape, (void 0 === (n = e) && (n = 0), ps + "\n    return x > 0.0 ? 1.0 : float(" + n + ");\n  "));
        return this.compileAndRun(r, [t])
    },Ts.prototype.conv2dByMatMul = function (t, e, n, r, o, i) {
        var a = t.shape, s = this.texData.get(t.dataId), u = n.inChannels, c = a[0] * a[1] * a[2], l = n.outChannels,
            h = "channelsLast" === n.dataFormat, f = (1 == c || 1 === l) && 1e3 < u, p = a[2] % 2 != 0 && !!s.isPacked;
        if (f || !_().getBool("WEBGL_LAZILY_UNPACK") || !_().getBool("WEBGL_PACK_BINARY_OPERATIONS") || !p) {
            var d = h ? a[0] * a[1] * a[2] : a[0] * a[2] * a[3], v = this.reshape(t, [1, d, n.inChannels]),
                m = this.reshape(e, [1, n.inChannels, n.outChannels]);
            return this.reshape(this.fusedBatchMatMul({
                a: v,
                b: m,
                transposeA: !1,
                transposeB: !1,
                bias: r,
                activation: o,
                preluActivationWeights: i
            }), n.outShape)
        }
        var g = h ? a[0] * a[1] * (a[2] + 1) : a[0] * a[2] * (a[3] + 1),
            y = {dataId: t.dataId, shape: [1, g, n.inChannels], dtype: t.dtype}, x = s.shape;
        s.shape = s.shape.slice(), s.shape[s.shape.length - 2]++, P(Ge(s.shape, y.shape), function () {
            return "packed reshape " + s.shape + " to " + y.shape + " isn't free"
        });
        var b = this.reshape(e, [1, n.inChannels, n.outChannels]), w = this.fusedBatchMatMul({
            a: y,
            b: b,
            transposeA: !1,
            transposeB: !1,
            bias: r,
            activation: o,
            preluActivationWeights: i
        }), C = this.texData.get(w.dataId);
        return P(C.isPacked, function () {
            return "batchMatMul result is expected to be packed"
        }), s.shape = x, C.shape = n.outShape, Kt.makeTensorFromDataId(w.dataId, n.outShape, w.dtype)
    },Ts.prototype.conv2dWithIm2Row = function (t, e, n, r, o, i) {
        var a = n.filterWidth, s = n.filterHeight, u = n.inChannels, c = n.outWidth, l = n.outHeight,
            h = "channelsLast" === n.dataFormat, f = a * s * u, p = l * c, d = [f, p], v = t.squeeze([0]),
            m = e.reshape([1, f, -1]), g = new Ca(d, v.shape, n),
            y = this.compileAndRun(g, [v]).reshape([1, d[0], d[1]]), x = null != r, b = null != i,
            w = o ? Ss(o, !0) : null, C = new Sa(y.shape, [1, p, n.outChannels], !0, !1, x, w, b), E = [y, m];
        r && E.push(r), b && E.push(i);
        var _ = this.compileAndRun(C, E);
        return h ? _.reshape([1, l, c, n.outChannels]) : _.reshape([1, n.outChannels, l, c])
    },Ts.prototype.fusedConv2d = function (t) {
        var e = t.input, n = t.filter, r = t.convInfo, o = t.bias, i = t.activation, a = t.preluActivationWeights;
        if (1 === r.filterHeight && 1 === r.filterWidth && 1 === r.dilationHeight && 1 === r.dilationWidth && 1 === r.strideHeight && 1 === r.strideWidth && ("SAME" === r.padInfo.type || "VALID" === r.padInfo.type)) return this.conv2dByMatMul(e, n, r, o, i, a);
        if (_().getBool("WEBGL_CONV_IM2COL") && 1 === e.shape[0]) return this.conv2dWithIm2Row(e, n, r, o, i, a);
        var s = null != o, u = null != a, c = i ? Ss(i, !1) : null, l = new Mi(r, s, c, u), h = [e, n];
        return o && h.push(o), a && h.push(a), this.compileAndRun(l, h)
    },Ts.prototype.conv2d = function (t, e, n) {
        if (1 === n.filterHeight && 1 === n.filterWidth && 1 === n.dilationHeight && 1 === n.dilationWidth && 1 === n.strideHeight && 1 === n.strideWidth && ("SAME" === n.padInfo.type || "VALID" === n.padInfo.type)) return this.conv2dByMatMul(t, e, n);
        if (_().getBool("WEBGL_CONV_IM2COL") && 1 === t.shape[0]) return this.conv2dWithIm2Row(t, e, n);
        var r = new Mi(n);
        return this.compileAndRun(r, [t, e])
    },Ts.prototype.conv2dDerInput = function (t, e, n) {
        var r = new Di(n);
        return this.compileAndRun(r, [t, e])
    },Ts.prototype.conv2dDerFilter = function (t, e, n) {
        var r = new Si(n);
        return this.compileAndRun(r, [t, e])
    },Ts.prototype.fusedDepthwiseConv2D = function (t) {
        var e, n = t.input, r = t.filter, o = t.convInfo, i = t.bias, a = t.activation, s = t.preluActivationWeights,
            u = _().getBool("WEBGL_PACK_DEPTHWISECONV") && o.strideWidth <= 2 && o.outChannels / o.inChannels == 1,
            c = a ? Ss(a, u) : null, l = [n, r], h = null != i, f = null != s;
        return h && l.push(i), f && l.push(s), e = u ? new Bi(o, h, c, f) : new Pi(o, h, c, f), this.compileAndRun(e, l)
    },Ts.prototype.depthwiseConv2D = function (t, e, n) {
        var r;
        return r = _().getBool("WEBGL_PACK_DEPTHWISECONV") && n.strideWidth <= 2 && n.outChannels / n.inChannels == 1 ? new Bi(n) : new Pi(n), this.compileAndRun(r, [t, e])
    },Ts.prototype.depthwiseConv2DDerInput = function (t, e, n) {
        var r = new Fi(n);
        return this.compileAndRun(r, [t, e])
    },Ts.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
        var r = new Ni(n);
        return this.compileAndRun(r, [t, e])
    },Ts.prototype.conv3d = function (t, e, n) {
        var r = new Oi(n);
        return this.compileAndRun(r, [t, e])
    },Ts.prototype.conv3dDerInput = function (t, e, n) {
        var r = new Ti(n);
        return this.compileAndRun(r, [t, e])
    },Ts.prototype.conv3dDerFilter = function (t, e, n) {
        var r = new Ai(n);
        return this.compileAndRun(r, [t, e])
    },Ts.prototype.maxPool = function (t, e) {
        var n = new Oa(e, "max", !1);
        return this.compileAndRun(n, [t])
    },Ts.prototype.avgPool = function (t, e) {
        var n = new Oa(e, "avg", !1);
        return this.compileAndRun(n, [t], "float32")
    },Ts.prototype.maxPoolBackprop = function (t, e, n, r) {
        var o = new Oa(r, "max", !0), i = this.compileAndRun(o, [e]), a = new Ra(r),
            s = this.compileAndRun(a, [t, i], e.dtype);
        return i.dispose(), s
    },Ts.prototype.avgPoolBackprop = function (t, e, n) {
        var r = new ui(n);
        return this.compileAndRun(r, [t], e.dtype)
    },Ts.prototype.cast = function (t, e) {
        return Ao(t, e, this)
    },Ts.prototype.unstack = function (t, e) {
        for (var n = t.shape[e], r = new Array(t.rank - 1), o = 0, i = 0; i < t.rank; i++) i !== e && (r[o++] = t.shape[i]);
        var a = new Array(t.rank).fill(0), s = t.shape.slice();
        s[e] = 1;
        var u = new Array(n);
        for (i = 0; i < u.length; i++) u[a[e] = i] = this.slice(t, a, s).reshape(r);
        return u
    },Ts.prototype.avgPool3d = function (t, e) {
        var n = new Pa(e, "avg", !1);
        return this.compileAndRun(n, [t], "float32")
    },Ts.prototype.avgPool3dBackprop = function (t, e, n) {
        var r = new ci(n);
        return this.compileAndRun(r, [t], e.dtype)
    },Ts.prototype.maxPool3d = function (t, e) {
        var n = new Pa(e, "max", !1);
        return this.compileAndRun(n, [t], "float32")
    },Ts.prototype.maxPool3dBackprop = function (t, e, n, r) {
        var o = new Pa(r, "max", !0), i = this.compileAndRun(o, [e]), a = new ka(r),
            s = this.compileAndRun(a, [t, i], e.dtype);
        return i.dispose(), s
    },Ts.prototype.reshape = function (t, e) {
        var n = this.texData.get(t.dataId);
        if (!n.isPacked || Ge(t.shape, e) || null !== n.texture && Ge(n.shape, e)) return To(t, e);
        var r = this.packedReshape(t, e);
        return Kt.makeTensorFromDataId(r.dataId, r.shape, r.dtype)
    },Ts.prototype.resizeBilinear = function (t, e, n, r) {
        var o = _().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new Ua(t.shape, e, n, r) : new za(t.shape, e, n, r);
        return this.compileAndRun(o, [t], "float32")
    },Ts.prototype.resizeBilinearBackprop = function (t, e, n) {
        var r = new Wa(t, e, n);
        return this.compileAndRun(r, [t])
    },Ts.prototype.resizeNearestNeighbor = function (t, e, n, r) {
        var o = new Ga(t.shape, e, n, r);
        return this.compileAndRun(o, [t])
    },Ts.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
        var r = new Va(t, e, n);
        return this.compileAndRun(r, [t])
    },Ts.prototype.multinomial = function (t, e, n, r) {
        var o = e ? t : so(t), i = o.shape[0], a = o.shape[1], s = new Ta(i, a, n), u = s.getCustomSetupFunc(r);
        return this.compileAndRun(s, [o], "int32", u)
    },Ts.prototype.oneHot = function (t, e, n, r) {
        var o = new Da(t.size, e, n, r);
        return this.compileAndRun(o, [t])
    },Ts.prototype.diag = function (t) {
        var e = new Gi(t.size);
        return this.compileAndRun(e, [t])
    },Ts.prototype.nonMaxSuppression = function (t, e, n, r, o) {
        return an("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"), Bo(t.dataSync(), e.dataSync(), n, r, o)
    },Ts.prototype.cropAndResize = function (t, e, n, r, o, i) {
        var a = new Li(t.shape, e.shape, r, o, i);
        return this.compileAndRun(a, [t, e, n], "float32")
    },Ts.prototype.depthToSpace = function (t, e, n) {
        P(1 < e, function () {
            return "blockSize should be > 1 for depthToSpace, but was: " + e
        });
        var r = t.shape[0], o = "NHWC" === n ? t.shape[1] : t.shape[2], i = "NHWC" === n ? t.shape[2] : t.shape[3],
            a = "NHWC" === n ? t.shape[3] : t.shape[1], s = o * e, u = i * e, c = a / (e * e),
            l = new $i("NHWC" === n ? [r, s, u, c] : [r, c, s, u], e, n);
        return this.compileAndRun(l, [t])
    },Ts.prototype.split = function (t, e, n) {
        return Vo(t, e, n)
    },Ts.prototype.scatterND = function (t, e, n) {
        var r = Xr(0, t, n), o = r.sliceRank, i = r.numUpdates, a = r.sliceSize, s = r.strides, u = r.outputSize,
            c = [u / a, a], l = t.reshape([i, o]), h = e.reshape([i, a]);
        if (0 === u) return To(In([]), n);
        var f = kn(0), p = new ja(i, o, l.rank, h.rank, s, c);
        return this.compileAndRun(p, [h, l, f]).reshape(n)
    },Ts.prototype.sparseToDense = function (t, e, n, r) {
        var o = Xr(0, t, n), i = o.sliceRank, a = o.numUpdates, s = o.strides, u = o.outputSize,
            c = new ja(a, i, t.rank, e.rank, s, [u, 1], !1);
        return this.compileAndRun(c, [e, t, r]).reshape(n)
    },Ts.prototype.fft = function (t) {
        return this.fftImpl(t, !1)
    },Ts.prototype.ifft = function (t) {
        return this.fftImpl(t, !0)
    },Ts.prototype.fftImpl = function (t, e) {
        var n = this.texData.get(t.dataId), r = new Xi("return real * expR - imag * expI;", t.shape, e),
            o = new Xi("return real * expI + imag * expR;", t.shape, e),
            i = [this.makeComplexComponentTensorInfo(t, n.complexTensors.real), this.makeComplexComponentTensorInfo(t, n.complexTensors.imag)],
            a = this.compileAndRun(r, i), s = this.compileAndRun(o, i),
            u = this.complex(a, s).as2D(t.shape[0], t.shape[1]);
        return a.dispose(), s.dispose(), u
    },Ts.prototype.gatherND = function (t, e) {
        var n = e.shape, r = n[n.length - 1], o = Gr(t, e), i = o[0], a = o[1], s = o[2], u = o[3],
            c = e.reshape([a, r]), l = t.reshape([t.size / s, s]), h = new ta(r, u, [a, s]);
        return this.compileAndRun(h, [l, c]).reshape(i)
    },Ts.prototype.fill = function (t, e, n) {
        if ("string" === (n = n || j(e))) {
            var r = F(n, L(t));
            return r.fill(e), Kt.makeTensor(r, t, n, this)
        }
        var o = new Ji(t, e), i = o.getCustomSetupFunc(e);
        return this.compileAndRun(o, [], n, i)
    },Ts.prototype.onesLike = function (t) {
        if ("string" === t.dtype) throw new Error("onesLike is not supported under string dtype");
        return this.fill(t.shape, 1, t.dtype)
    },Ts.prototype.zerosLike = function (t) {
        return this.fill(t.shape, "string" === t.dtype ? "" : 0, t.dtype)
    },Ts.prototype.linspace = function (t, e, n) {
        return No(t, e, n)
    },Ts.prototype.makeTensorInfo = function (t, e) {
        var n = this.write(null, t, e);
        return this.texData.get(n).usage = null, {dataId: n, shape: t, dtype: e}
    },Ts.prototype.makeOutput = function (t, e) {
        var n = this.makeTensorInfo(t, e).dataId;
        return Kt.makeTensorFromDataId(n, t, e, this)
    },Ts.prototype.unpackTensor = function (t) {
        var e = new ls(t.shape);
        return this.runWebGLProgram(e, [t], t.dtype)
    },Ts.prototype.packTensor = function (t) {
        var e = new Aa(t.shape);
        return this.runWebGLProgram(e, [t], t.dtype, null, !0)
    },Ts.prototype.packedReshape = function (t, e) {
        var n = [Le(t.shape)].concat(We(t.shape)), r = {dtype: t.dtype, shape: n, dataId: t.dataId},
            o = [Le(e)].concat(We(e)), i = new La(o, n), a = this.runWebGLProgram(i, [r], t.dtype, null, !0);
        return {dataId: a.dataId, shape: e, dtype: a.dtype}
    },Ts.prototype.decode = function (t) {
        var e, n = this.texData.get(t), r = n.isPacked, o = n.shape, i = n.dtype, a = ze(o);
        return e = r ? new Vi(a) : new Ui(a), {
            dtype: i,
            shape: o,
            dataId: this.runWebGLProgram(e, [{shape: a, dtype: i, dataId: t}], i, null, !0).dataId
        }
    },Ts.prototype.runWebGLProgram = function (o, t, e, n, r) {
        var i = this;
        void 0 === r && (r = !1);
        var a = this.makeTensorInfo(o.outputShape, e), s = this.texData.get(a.dataId);
        if (o.packedOutput && (s.isPacked = !0), o.outPackingScheme === $t.DENSE) {
            var u = se(o.outputShape);
            s.texShape = u.map(function (t) {
                return 2 * t
            })
        }
        if (null != o.outTexUsage && (s.usage = o.outTexUsage), 0 === L(a.shape)) return s.values = N(a.dtype, 0), a;
        var c = [], l = t.map(function (t) {
            if ("complex64" === t.dtype) throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");
            var e = i.texData.get(t.dataId);
            if (null == e.texture) {
                if (!o.packedInputs && L(t.shape) <= _().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM")) return {
                    shape: t.shape,
                    texData: null,
                    isUniform: !0,
                    uniformValues: e.values
                };
                o.packedInputs && (e.isPacked = !0, e.shape = t.shape)
            } else if (!!e.isPacked != !!o.packedInputs) t = e.isPacked ? i.unpackTensor(t) : i.packTensor(t), c.push(t), e = i.texData.get(t.dataId); else if (e.isPacked && !Ge(e.shape, t.shape)) {
                var n = t, r = t.shape;
                t.shape = e.shape, t = i.packedReshape(t, r), c.push(t), e = i.texData.get(t.dataId), n.shape = r
            }
            return i.uploadToGPU(t.dataId), {shape: t.shape, texData: e, isUniform: !1}
        });
        this.uploadToGPU(a.dataId);
        var h, f = {shape: a.shape, texData: s, isUniform: !1}, p = function (t, e, n) {
            var r = "";
            l.concat(n).forEach(function (t) {
                var e = null != t.texData && null != t.texData.slice && 0 < t.texData.slice.flatOffset,
                    n = t.isUniform ? "uniform" : t.texData.texShape;
                r += t.shape + "_" + n + "_" + e
            });
            var o = t.userCode;
            return t.constructor.name + "_" + r + "_" + o
        }(o, 0, f), d = this.getAndSaveBinary(p, function () {
            return function (t, r, e, n) {
                var o = r.userCode, i = e.map(function (t, e) {
                        var n = {
                            logicalShape: t.shape,
                            texShape: t.isUniform ? null : t.texData.texShape,
                            isUniform: t.isUniform,
                            isPacked: !t.isUniform && t.texData.isPacked,
                            flatOffset: null
                        };
                        return null != t.texData && null != t.texData.slice && 0 < t.texData.slice.flatOffset && (n.flatOffset = t.texData.slice.flatOffset), {
                            name: r.variableNames[e],
                            shapeInfo: n
                        }
                    }), a = i.map(function (t) {
                        return t.shapeInfo
                    }), s = {
                        logicalShape: n.shape,
                        texShape: n.texData.texShape,
                        isUniform: !1,
                        isPacked: n.texData.isPacked,
                        flatOffset: null
                    }, u = ei(i, s, o, r.packedInputs), c = t.createProgram(u), l = null,
                    h = t.getUniformLocation(c, "NAN", !1);
                1 === _().getNumber("WEBGL_VERSION") && (l = t.getUniformLocation(c, "INFINITY", !1));
                for (var f = {}, p = 0; p < r.variableNames.length; p++) {
                    var d = r.variableNames[p];
                    f[d] = t.getUniformLocation(c, d, !1), f["offset" + d] = t.getUniformLocation(c, "offset" + d, !1)
                }
                return {
                    program: r,
                    source: u,
                    webGLProgram: c,
                    uniformLocations: f,
                    inShapeInfos: a,
                    outShapeInfo: s,
                    infLoc: l,
                    nanLoc: h
                }
            }(i.gpgpu, o, l, f)
        }), v = null != this.activeTimers;
        if (v && (h = this.startTimer()), function (a, s, t, e, n) {
            wa(s.inShapeInfos, t), wa([s.outShapeInfo], [e]);
            var r = e.texData.texture, o = e.texData.texShape;
            e.texData.isPacked ? a.setOutputPackedMatrixTexture(r, o[0], o[1]) : a.setOutputMatrixTexture(r, o[0], o[1]), a.setProgram(s.webGLProgram), 1 === _().getNumber("WEBGL_VERSION") && null !== s.infLoc && a.gl.uniform1f(s.infLoc, 1 / 0), null !== s.nanLoc && a.gl.uniform1f(s.nanLoc, NaN), t.forEach(function (t, e) {
                var n = s.program.variableNames[e], r = s.uniformLocations[n], o = s.uniformLocations["offset" + n];
                if (null != r) if (t.isUniform) if (L(t.shape) < 2) a.gl.uniform1f(r, t.uniformValues[0]); else {
                    var i = t.uniformValues;
                    i instanceof Float32Array || (i = new Float32Array(i)), a.gl.uniform1fv(r, i)
                } else null != t.texData.slice && null != o && a.gl.uniform1i(o, t.texData.slice.flatOffset), a.setInputMatrixTexture(t.texData.texture, r, e)
            }), null != n && n(a, s.webGLProgram), a.executeProgram()
        }(this.gpgpu, d, l, f, n), c.forEach(function (t) {
            return i.disposeData(t.dataId)
        }), v && (h = this.endTimer(h), this.activeTimers.push({
            name: o.constructor.name,
            query: this.getQueryTime(h)
        })), _().getBool("WEBGL_LAZILY_UNPACK") || !s.isPacked || !1 !== r) return a;
        var m = this.unpackTensor(a);
        return this.disposeData(a.dataId), m
    },Ts.prototype.compileAndRun = function (t, e, n, r, o) {
        void 0 === o && (o = !1), n = n || e[0].dtype;
        var i = this.runWebGLProgram(t, e, n, r, o);
        return Kt.makeTensorFromDataId(i.dataId, i.shape, i.dtype)
    },Ts.prototype.getAndSaveBinary = function (t, e) {
        return t in this.binaryCache || (this.binaryCache[t] = e()), this.binaryCache[t]
    },Ts.prototype.getTextureManager = function () {
        return this.textureManager
    },Ts.prototype.dispose = function () {
        var e = this;
        this.disposed || (_().getBool("IS_TEST") || Object.keys(this.binaryCache).forEach(function (t) {
            e.gpgpu.deleteProgram(e.binaryCache[t].webGLProgram), delete e.binaryCache[t]
        }), this.textureManager.dispose(), null != this.canvas && "undefined" != typeof HTMLCanvasElement && this.canvas instanceof HTMLCanvasElement ? this.canvas.remove() : this.canvas = null, this.gpgpuCreatedLocally && (this.gpgpu.program = null, this.gpgpu.dispose()), this.disposed = !0)
    },Ts.prototype.floatPrecision = function () {
        var n = this;
        return null == this.floatPrecisionValue && (this.floatPrecisionValue = nn(function () {
            if (!_().get("WEBGL_RENDER_FLOAT32_ENABLED")) {
                var t = _().getBool("DEBUG");
                _().set("DEBUG", !1);
                var e = n.abs(kn(1e-8)).dataSync()[0];
                if (_().set("DEBUG", t), 0 < e) return 32
            }
            return 16
        })), this.floatPrecisionValue
    },Ts.prototype.epsilon = function () {
        return 32 === this.floatPrecision() ? 1e-7 : 1e-4
    },Ts.prototype.uploadToGPU = function (t) {
        var e, n = this.texData.get(t), r = n.shape, o = n.dtype, i = n.values, a = n.texture, s = n.usage,
            u = n.isPacked;
        if (null == a) {
            var c, l = null != this.activeTimers;
            l && (c = tt());
            var h = n.texShape;
            if (null == h && (h = Ue(r, u), n.texShape = h), null != i) {
                var f = ze(r), p = void 0, d = h[1], v = h[0], m = i instanceof Uint8Array;
                p = u ? (d = (e = ue(h[0], h[1]))[0], v = e[1], new Ki(f, [v, d], m)) : new ji(f, [v, d], m);
                var g = this.makeTensorInfo([v, d], o);
                this.texData.get(g.dataId).usage = m ? Jt.PIXELS : Jt.UPLOAD, this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g.dataId), d, v, i);
                var y = this.runWebGLProgram(p, [g], o, null, !0), x = this.texData.get(y.dataId);
                n.texture = x.texture, n.texShape = x.texShape, n.isPacked = x.isPacked, n.usage = x.usage, this.disposeData(g.dataId), this.texData.delete(y.dataId), n.values = null, l && (this.uploadWaitMs += tt() - c)
            } else {
                var b = this.acquireTexture(h, s, o, u);
                n.texture = b
            }
        }
    },Ts.prototype.convertAndCacheOnCPU = function (t, e) {
        var n = this.texData.get(t), r = n.dtype;
        return this.releaseGPUData(t), null != e && (n.values = function (t, e) {
            if ("float32" === e || "complex64" === e) return t;
            if ("int32" !== e && "bool" !== e) throw new Error("Unknown dtype " + e);
            for (var n = "int32" === e ? new Int32Array(t.length) : new Uint8Array(t.length), r = 0; r < n.length; ++r) n[r] = Math.round(t[r]);
            return n
        }(e, r)), n.values
    },Ts.prototype.acquireTexture = function (t, e, n, r) {
        if (this.numBytesInGPU += this.computeBytes(t, n), !this.warnedAboutMemory && this.numBytesInGPU > 1024 * this.numMBBeforeWarning * 1024) {
            var o = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
            this.warnedAboutMemory = !0, console.warn("High memory usage in GPU: " + o + " MB, most likely due to a memory leak")
        }
        return this.textureManager.acquireTexture(t, e, r)
    },Ts.prototype.computeBytes = function (t, e) {
        return t[0] * t[1] * U(e)
    },Ts);

    function Ts(t) {
        var e, n = Ds.call(this) || this;
        if (n.pendingRead = new WeakMap, n.pendingDisposal = new WeakSet, n.dataRefCount = new WeakMap, n.numBytesInGPU = 0, n.uploadWaitMs = 0, n.downloadWaitMs = 0, n.warnedAboutMemory = !1, n.pendingDeletes = 0, n.disposed = !1, !_().getBool("HAS_WEBGL")) throw new Error("WebGL is not supported on this device");
        if (null == t) {
            var r = ie(_().getNumber("WEBGL_VERSION"));
            n.binaryCache = ((e = _().getNumber("WEBGL_VERSION")) in ks || (ks[e] = {}), ks[e]), n.gpgpu = new xa(r), n.canvas = r.canvas, n.gpgpuCreatedLocally = !0
        } else n.gpgpu = t, n.binaryCache = {}, n.gpgpuCreatedLocally = !1, n.canvas = t.gl.canvas;
        return n.textureManager = new ts(n.gpgpu), n.numMBBeforeWarning = null == _().global.screen ? 1024 : _().global.screen.height * _().global.screen.width * window.devicePixelRatio * 600 / 1024 / 1024, n.texData = new co(n, Kt), n
    }

    Xt() && Kt.registerBackend("webgl", function () {
        return new As
    }, 2);
    var Ns = wn({
        square_: function (t) {
            var n = cn(t, "x", "square"), e = [n];
            return Kt.runKernelFunc(function (t, e) {
                return e([n]), t.square(n)
            }, {x: n}, null, "Square", {}, e, [])
        }
    }), Fs = "SquaredDifference", Ms = wn({
        squaredDifference_: function (t, e) {
            var n, r = cn(t, "a", "squaredDifference"), o = cn(e, "b", "squaredDifference");
            n = Lt(r, o), r = n[0], o = n[1], go(r.shape, o.shape);
            var i = {a: r, b: o}, a = [r, o];
            return Kt.runKernelFunc(function (t, e) {
                var n = t.squaredDifference(r, o);
                return e([r, o]), n
            }, i, function (t, e) {
                var n = e[0], r = e[1], o = kn(2);
                return {
                    a: function () {
                        return t.mul(n.sub(r).mul(o))
                    }, b: function () {
                        return t.mul(r.sub(n).mul(o))
                    }
                }
            }, Fs, {}, a, [])
        }
    }), Os = wn({
        abs_: function (t) {
            var r = cn(t, "x", "abs");
            return "complex64" === r.dtype ? Kt.runKernelFunc(function (t) {
                return t.complexAbs(r)
            }, {$x: r}) : Kt.runKernelFunc(function (t, e) {
                var n = t.abs(r);
                return e([r]), n
            }, {x: r}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return t.mul(n.toFloat().step(-1))
                    }
                }
            }, "Abs")
        }
    }), Ps = wn({
        acos_: function (t) {
            var r = cn(t, "x", "acos");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.acos(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.divStrict(kn(1).sub(n.toFloat().square()).sqrt()).neg()
                    }
                }
            })
        }
    }), Bs = wn({
        acosh_: function (t) {
            var r = cn(t, "x", "acosh");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.acosh(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.divStrict(n.toFloat().square().sub(1).sqrt())
                    }
                }
            })
        }
    }), Ls = wn({
        asin_: function (t) {
            var r = cn(t, "x", "asin");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.asin(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.divStrict(kn(1).sub(n.toFloat().square()).sqrt())
                    }
                }
            })
        }
    }), Ws = wn({
        asinh_: function (t) {
            var r = cn(t, "x", "asinh");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.asinh(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.divStrict(kn(1).add(n.toFloat().square()).sqrt())
                    }
                }
            })
        }
    }), zs = wn({
        atan_: function (t) {
            var r = cn(t, "x", "atan");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.atan(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.div(n.toFloat().square().add(1))
                    }
                }
            })
        }
    }), Us = wn({
        atanh_: function (t) {
            var r = cn(t, "x", "atanh");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.atanh(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.div(kn(1).sub(n.toFloat().square()))
                    }
                }
            })
        }
    }), Vs = wn({
        ceil_: function (t) {
            var e = cn(t, "x", "ceil");
            return Kt.runKernelFunc(function (t) {
                return t.ceil(e)
            }, {$x: e}, function (t) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            })
        }
    }), Gs = wn({
        clipByValue_: function (t, r, o) {
            var i = cn(t, "x", "clipByValue");
            P(r <= o, function () {
                return "Error in clip: min (" + r + ") must be less than or equal to max (" + o + ")."
            });
            var e = [i], n = {min: r, max: o};
            return Kt.runKernelFunc(function (t, e) {
                var n = t.clip(i, r, o);
                return e([i]), n
            }, {x: i}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return t.where(n.greaterEqual(r).logicalAnd(n.lessEqual(o)), Un(t))
                    }
                }
            }, "ClipByValue", n, e)
        }
    }), Hs = wn({
        cos_: function (t) {
            var r = cn(t, "x", "cos"), e = [r];
            return Kt.runKernelFunc(function (t, e) {
                var n = t.cos(r);
                return e([r]), n
            }, {x: r}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return n.toFloat().sin().neg().mul(t)
                    }
                }
            }, "Cos", {}, e)
        }
    }), qs = wn({
        cosh_: function (t) {
            var r = cn(t, "x", "cosh");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.cosh(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return n.toFloat().sinh().mulStrict(t)
                    }
                }
            })
        }
    }), js = wn({
        erf_: function (t) {
            var r = cn(t, "x", "erf");
            return P("int32" === r.dtype || "float32" === r.dtype, function () {
                return "Input dtype must be `int32` or `float32`."
            }), "int32" === r.dtype && (r = r.toFloat()), Kt.runKernelFunc(function (t, e) {
                var n = t.erf(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.mul(n.square().neg().exp().mul(2 / Math.sqrt(Math.PI)))
                    }
                }
            })
        }
    }), Ks = wn({
        exp_: function (t) {
            var r = cn(t, "x", "exp");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.exp(r);
                return e([n]), n
            }, {x: r}, function (t, e) {
                return {
                    x: function () {
                        return t.mulStrict(e[0])
                    }
                }
            }, "Exp", {}, [], [!0])
        }
    }), Xs = wn({
        expm1_: function (t) {
            var r = cn(t, "x", "expm1");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.expm1(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.mul(n.exp())
                    }
                }
            })
        }
    }), Ys = wn({
        floor_: function (t) {
            var e = cn(t, "x", "floor");
            return Kt.runKernelFunc(function (t) {
                return t.floor(e)
            }, {$x: e}, function (t) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            })
        }
    }), $s = wn({
        log_: function (t) {
            var r = cn(t, "x", "log"), e = [r];
            return Kt.runKernelFunc(function (t, e) {
                var n = t.log(r);
                return e([r]), n
            }, {x: r}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return t.div(n.toFloat())
                    }
                }
            }, "Log", {}, e)
        }
    }), Js = wn({
        log1p_: function (t) {
            var r = cn(t, "x", "log1p");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.log1p(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.div(n.add(1))
                    }
                }
            })
        }
    }), Qs = wn({
        logSigmoid_: function (t) {
            var r = cn(t, "x", "logSigmoid");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.softplus(r.neg()).neg();
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.mul(n.neg().sigmoid())
                    }
                }
            })
        }
    }), Zs = wn({
        neg_: function (t) {
            var e = cn(t, "x", "neg"), n = [e];
            return Kt.runKernelFunc(function (t) {
                return t.neg(e)
            }, {x: e}, function (t) {
                return {
                    x: function () {
                        return t.neg()
                    }
                }
            }, "Neg", {}, n)
        }
    }), tu = wn({
        reciprocal_: function (t) {
            var r = cn(t, "x", "reciprocal");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.reciprocal(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.div(n.square().neg())
                    }
                }
            })
        }
    }), eu = wn({
        round_: function (t) {
            var e = cn(t, "x", "round");
            return Kt.runKernelFunc(function (t) {
                return t.round(e)
            }, {$x: e}, function (t) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            })
        }
    }), nu = wn({
        rsqrt_: function (t) {
            var r = cn(t, "x", "rsqrt"), e = [r];
            return Kt.runKernelFunc(function (t, e) {
                var n = t.rsqrt(r);
                return e([r]), n
            }, {x: r}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return t.div(n.pow(1.5).mul(2)).neg()
                    }
                }
            }, "Rsqrt", {}, e)
        }
    }), ru = wn({
        sigmoid_: function (t) {
            var r = cn(t, "x", "sigmoid");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.sigmoid(r);
                return e([n]), n
            }, {x: r}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return t.mul(n.mul(kn(1).sub(n)))
                    }
                }
            }, "Sigmoid")
        }
    }), ou = wn({
        sign_: function (t) {
            var e = cn(t, "x", "sign");
            return Kt.runKernelFunc(function (t) {
                return t.sign(e)
            }, {$x: e}, function (t) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            })
        }
    }), iu = wn({
        isNaN_: function (t) {
            var e = cn(t, "x", "isNaN");
            return Kt.runKernelFunc(function (t) {
                return t.isNaN(e)
            }, {$x: e}, function (t) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            })
        }
    }), au = wn({
        isInf_: function (t) {
            var e = cn(t, "x", "isInf");
            return Kt.runKernelFunc(function (t) {
                return t.isInf(e)
            }, {$x: e}, function (t) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            })
        }
    }), su = wn({
        isFinite_: function (t) {
            var e = cn(t, "x", "isFinite");
            return Kt.runKernelFunc(function (t) {
                return t.isFinite(e)
            }, {$x: e}, function (t) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            })
        }
    }), uu = wn({
        sin_: function (t) {
            var r = cn(t, "x", "sin"), e = [r];
            return Kt.runKernelFunc(function (t, e) {
                var n = t.sin(r);
                return e([r]), n
            }, {x: r}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return n.toFloat().cos().mul(t)
                    }
                }
            }, "Sin", {}, e)
        }
    }), cu = wn({
        sinh_: function (t) {
            var r = cn(t, "x", "sinh");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.sinh(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return n.toFloat().cosh().mulStrict(t)
                    }
                }
            })
        }
    }), lu = wn({
        softplus_: function (t) {
            var r = cn(t, "x", "softplus");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.softplus(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.mul(n.sigmoid())
                    }
                }
            })
        }
    }), hu = wn({
        sqrt_: function (t) {
            var r = cn(t, "x", "sqrt");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.sqrt(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.div(n.toFloat().sqrt().mul(2))
                    }
                }
            })
        }
    }), fu = wn({
        step_: function (t, e) {
            void 0 === e && (e = 0);
            var n = cn(t, "x", "step");
            return Kt.runKernelFunc(function (t) {
                return t.step(n, e)
            }, {$x: n}, function (t) {
                return {
                    $x: function () {
                        return Un(t)
                    }
                }
            })
        }
    }), pu = wn({
        tan_: function (t) {
            var r = cn(t, "x", "tan");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.tan(r);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return t.div(n.cos().square())
                    }
                }
            })
        }
    }), du = wn({
        tanh_: function (t) {
            var r = cn(t, "x", "tanh");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.tanh(r);
                return e([n]), n
            }, {x: r}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return kn(1).sub(n.square()).mulStrict(t)
                    }
                }
            }, "Tanh", {}, null, [!0])
        }
    });

    function vu(t, e, n, r, o, i) {
        var a, s, u = cn(t, "x", "batchNorm"), c = cn(e, "mean", "batchNorm"), l = cn(n, "variance", "batchNorm");
        return null != o && (a = cn(o, "scale", "batchNorm")), null != r && (s = cn(r, "offset", "batchNorm")), P(2 === u.rank, function () {
            return "Error in batchNorm3D: x must be rank 3 but got rank " + u.rank + "."
        }), P(2 === c.rank || 1 === c.rank, function () {
            return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank " + c.rank + "."
        }), P(2 === l.rank || 1 === l.rank, function () {
            return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank " + l.rank + "."
        }), null != a && P(2 === a.rank || 1 === a.rank, function () {
            return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank " + a.rank + "."
        }), null != s && P(2 === s.rank || 1 === s.rank, function () {
            return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank " + s.rank + "."
        }), yu(u, c, l, s, a, i)
    }

    function mu(t, e, n, r, o, i) {
        var a, s, u = cn(t, "x", "batchNorm"), c = cn(e, "mean", "batchNorm"), l = cn(n, "variance", "batchNorm");
        return null != o && (a = cn(o, "scale", "batchNorm")), null != r && (s = cn(r, "offset", "batchNorm")), P(3 === u.rank, function () {
            return "Error in batchNorm3D: x must be rank 3 but got rank " + u.rank + "."
        }), P(3 === c.rank || 1 === c.rank, function () {
            return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank " + c.rank + "."
        }), P(3 === l.rank || 1 === l.rank, function () {
            return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank " + l.rank + "."
        }), null != a && P(3 === a.rank || 1 === a.rank, function () {
            return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank " + a.rank + "."
        }), null != s && P(3 === s.rank || 1 === s.rank, function () {
            return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank " + s.rank + "."
        }), yu(u, c, l, s, a, i)
    }

    function gu(t, e, n, r, o, i) {
        var a, s, u = cn(t, "x", "batchNorm"), c = cn(e, "mean", "batchNorm"), l = cn(n, "variance", "batchNorm");
        return null != o && (a = cn(o, "scale", "batchNorm")), null != r && (s = cn(r, "offset", "batchNorm")), P(4 === u.rank, function () {
            return "Error in batchNorm4D: x must be rank 4 but got rank " + u.rank + "."
        }), P(4 === c.rank || 1 === c.rank, function () {
            return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank " + c.rank + "."
        }), P(4 === l.rank || 1 === l.rank, function () {
            return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank " + l.rank + "."
        }), null != a && P(4 === a.rank || 1 === a.rank, function () {
            return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank " + a.rank + "."
        }), null != s && P(4 === s.rank || 1 === s.rank, function () {
            return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank " + s.rank + "."
        }), yu(u, c, l, s, a, i)
    }

    function yu(t, e, n, r, o, v) {
        null == v && (v = .001);
        var i, a, m, s = cn(t, "x", "batchNorm"), u = cn(e, "mean", "batchNorm"), c = cn(n, "variance", "batchNorm");
        null != o && (i = cn(o, "scale", "batchNorm")), null != r && (a = cn(r, "offset", "batchNorm")), P(u.rank === c.rank, function () {
            return "Batch normalization gradient requires mean and variance to have equal ranks."
        }), P(null == a || u.rank === a.rank, function () {
            return "Batch normalization gradient requires mean and offset to have equal ranks."
        }), P(null == i || u.rank === i.rank, function () {
            return "Batch normalization gradient requires mean and scale to have equal ranks."
        }), m = 0 === s.rank || 1 === s.rank ? s.as4D(1, 1, 1, s.size) : 2 === s.rank ? s.as4D(1, 1, s.shape[0], s.shape[1]) : 3 === s.rank ? s.as4D(1, s.shape[0], s.shape[1], s.shape[2]) : s;
        var l = [s, u, c, i];
        return Kt.runKernelFunc(function (t, e) {
            var n = t.batchNormalization(m, xu(u), xu(c), v, xu(i), xu(a));
            return e([s, u, c, i]), n
        }, {x: s, mean: u, variance: c, scale: i, offset: a}, function (n, t) {
            var e = t, r = e[0], o = e[1], i = e[2], a = e[3], s = null == a ? kn(1) : a, u = mo(o.shape, m.shape),
                c = [];
            if (1 === o.rank) {
                for (var l = 0; l < m.shape.length - 1; ++l) c.push(m.shape[l]);
                c.push(1)
            }
            var h = r.sub(o), f = n.mul(s), p = nu(i.add(kn(v))), d = p.mul(p).mul(p).mul(kn(-.5));
            return {
                x: function () {
                    return 1 === o.rank ? n.mul(Or(p.as4D(1, 1, 1, o.shape[0]), c)).mul(s).reshape(r.shape) : n.mul(p).mul(s).reshape(r.shape)
                }, mean: function () {
                    var t = p.mul(kn(-1)).mul(f);
                    return 1 === o.rank && (t = t.sum(u)), t.reshape(o.shape)
                }, variance: function () {
                    var t = d.mul(h).mul(f);
                    return 1 === o.rank && (t = t.sum(u)), t.reshape(o.shape)
                }, scale: function () {
                    var t = h.mul(p), e = n.mul(t);
                    return 1 === o.rank && (e = e.sum(u)), e.reshape(o.shape)
                }, offset: function () {
                    var t = n;
                    return 1 === o.rank && (t = t.sum(u)), t.reshape(o.shape)
                }
            }
        }, "BatchNormalization", {varianceEpsilon: v}, l).reshape(s.shape)
    }

    function xu(t) {
        return null == t ? null : 0 === t.rank ? t.as1D() : 1 === t.rank ? t : 2 === t.rank ? t.as4D(1, 1, t.shape[0], t.shape[1]) : 3 === t.rank ? t.as4D(1, t.shape[0], t.shape[1], t.shape[2]) : t
    }

    function bu() {
        en("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")
    }

    function wu(o) {
        return y(this, void 0, void 0, function () {
            var e, n, r;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, (e = cn(o, "condition", "whereAsync", "bool")).data()];
                    case 1:
                        return n = t.sent(), r = qo(e.shape, n), o !== e && e.dispose(), [2, r]
                }
            })
        })
    }

    var Cu = wn({
            batchNormalization2d_: function (t, e, n, r, o, i) {
                return void 0 === r && (r = .001), bu(), vu(t, e, n, i, o, r)
            }
        }), Eu = wn({
            batchNormalization3d_: function (t, e, n, r, o, i) {
                return void 0 === r && (r = .001), bu(), mu(t, e, n, i, o, r)
            }
        }), _u = wn({
            batchNormalization4d_: function (t, e, n, r, o, i) {
                return void 0 === r && (r = .001), bu(), gu(t, e, n, i, o, r)
            }
        }), Iu = wn({
            batchNormalization_: function (t, e, n, r, o, i) {
                return void 0 === r && (r = .001), bu(), yu(t, e, n, i, o, r)
            }
        }), Ru = wn({batchNorm_: yu}), ku = wn({batchNorm2d_: vu}), Su = wn({batchNorm3d_: mu}),
        Du = wn({batchNorm4d_: gu}), Au = wn({
            logicalAnd_: function (t, e) {
                var n = cn(t, "a", "logicalAnd", "bool"), r = cn(e, "b", "logicalAnd", "bool");
                return go(n.shape, r.shape), Kt.runKernelFunc(function (t) {
                    return t.logicalAnd(n, r)
                }, {a: n, b: r}, null, "LogicalAnd")
            }
        }), Tu = wn({
            logicalNot_: function (t) {
                var e = cn(t, "x", "logicalNot", "bool");
                return Kt.runKernelFunc(function (t) {
                    return t.logicalNot(e)
                }, {$x: e})
            }
        }), Nu = wn({
            logicalOr_: function (t, e) {
                var n = cn(t, "a", "logicalOr", "bool"), r = cn(e, "b", "logicalOr", "bool");
                return go(n.shape, r.shape), Kt.runKernelFunc(function (t) {
                    return t.logicalOr(n, r)
                }, {$a: n, $b: r})
            }
        }), Fu = wn({
            logicalXor_: function (t, e) {
                var n = cn(t, "a", "logicalXor", "bool"), r = cn(e, "b", "logicalXor", "bool");
                return go(n.shape, r.shape), Nu(t, e).logicalAnd(Au(t, e).logicalNot())
            }
        }), Mu = wn({
            where_: function (t, e, n) {
                var r = cn(e, "a", "where"), o = cn(n, "b", "where"), i = cn(t, "condition", "where", "bool");
                return x(r.shape, o.shape, "Error in where: "), 1 === i.rank ? P(i.shape[0] === r.shape[0], function () {
                    return "The first dimension of `a` must match the size of `condition`."
                }) : x(i.shape, o.shape, "Error in where: "), Kt.runKernelFunc(function (t, e) {
                    var n = t.select(i, r, o);
                    return e([i]), n
                }, {$condition: i, $a: r, $b: o}, function (t, e) {
                    var n = e[0];
                    return {
                        $condition: function () {
                            return Un(n).toFloat()
                        }, $a: function () {
                            return t.mul(n.cast(t.dtype))
                        }, $b: function () {
                            return t.mul(n.logicalNot().cast(t.dtype))
                        }
                    }
                })
            }
        }), Ou = wn({
            add_: function (t, e) {
                var n, r = cn(t, "a", "add"), o = cn(e, "b", "add");
                n = Lt(r, o), r = n[0], o = n[1];
                var i = go(r.shape, o.shape);
                return Kt.runKernelFunc(function (t) {
                    return t.add(r, o)
                }, {a: r, b: o}, function (n) {
                    return {
                        a: function () {
                            var t = n, e = mo(r.shape, i);
                            return 0 < e.length && (t = t.sum(e)), t.reshape(r.shape)
                        }, b: function () {
                            var t = n, e = mo(o.shape, i);
                            return 0 < e.length && (t = t.sum(e)), t.reshape(o.shape)
                        }
                    }
                }, "Add")
            }
        }), Pu = wn({
            addN_: function (t) {
                P(Array.isArray(t), function () {
                    return "The argument passed to tf.addN() must be a list of tensors"
                }), P(1 <= t.length, function () {
                    return "Must pass at least one tensor to tf.addN(), but got " + t.length
                });
                var e = t.map(function (t, e) {
                    return cn(t, "tensors" + e, "addN")
                }), n = e[0];
                e.forEach(function (t) {
                    if (t.dtype !== n.dtype) throw new Error("All tensors passed to tf.addN() must have the same dtype")
                }), e.forEach(function (t) {
                    if (!A(t.shape, n.shape)) throw new Error("All tensors passed to tf.addN() must have the same shape")
                });
                var r = e;
                return Kt.runKernelFunc(function (t) {
                    return t.addN(e)
                }, r, function (n) {
                    var r = {};
                    return e.forEach(function (t, e) {
                        r[e] = function () {
                            return n.clone()
                        }
                    }), r
                }, "AddN")
            }
        }), Bu = wn({
            addStrict_: function (t, e) {
                var n = cn(t, "a", "addStrict"), r = cn(e, "b", "addStrict");
                return x(n.shape, r.shape, "Error in addStrict: "), n.add(r)
            }
        }), Lu = wn({
            atan2_: function (t, e) {
                var n, r = cn(t, "a", "atan2"), o = cn(e, "b", "atan2");
                n = Lt(r, o), r = n[0], o = n[1];
                var a = go(r.shape, o.shape);
                return Kt.runKernelFunc(function (t, e) {
                    var n = t.atan2(r, o);
                    return e([r, o]), n
                }, {$a: r, $b: o}, function (r, t) {
                    var o = t[0], i = t[1];
                    return {
                        $a: function () {
                            var t = Ou(o.square(), i.square()), e = r.mul(i.div(t)), n = mo(o.shape, a);
                            return 0 < n.length && (e = e.sum(n)), e.reshape(o.shape)
                        }, $b: function () {
                            var t = Ou(o.square(), i.square()), e = Zs(r.mul(o.div(t))), n = mo(i.shape, a);
                            return 0 < n.length && (e = e.sum(n)), e.reshape(i.shape)
                        }
                    }
                })
            }
        }), Wu = wn({
            div_: function (t, e) {
                var n, r = cn(t, "a", "div"), o = cn(e, "b", "div");
                if (n = Lt(r, o), r = n[0], o = n[1], "int32" === r.dtype && "int32" === o.dtype) return Vu(r, o);
                var a = go(r.shape, o.shape);
                return Kt.runKernelFunc(function (t, e) {
                    var n = t.realDivide(r, o);
                    return e([r, o]), n
                }, {a: r, b: o}, function (r, t) {
                    var o = t[0], i = t[1];
                    return {
                        a: function () {
                            var t = r.div(i.toFloat()), e = mo(o.shape, a);
                            return 0 < e.length ? t.sum(e).reshape(o.shape) : t
                        }, b: function () {
                            var t = r.mul(o.toFloat()), e = mo(i.shape, a);
                            0 < e.length && (t = t.sum(e).reshape(i.shape));
                            var n = i.square();
                            return t.div(n.toFloat()).neg()
                        }
                    }
                }, "Div")
            }
        }), zu = wn({
            divNoNan_: function (t, e) {
                var n, r = cn(t, "a", "div"), o = cn(e, "b", "div");
                r = (n = Lt(r, o))[0], o = n[1];
                var i = Wu(r, o), a = Un(i), s = o.equal(a);
                return Mu(s, a, i)
            }
        }), Uu = wn({
            divStrict_: function (t, e) {
                var n = cn(t, "a", "div"), r = cn(e, "b", "div");
                return x(n.shape, r.shape, "Error in divideStrict: "), n.div(r)
            }
        }), Vu = wn({
            floorDiv_: function (t, e) {
                var n, r = cn(t, "a", "floorDiv"), o = cn(e, "b", "floorDiv");
                n = Lt(r, o), r = n[0], o = n[1];
                var a = go(r.shape, o.shape);
                return Kt.runKernelFunc(function (t, e) {
                    var n = t.floorDiv(r, o);
                    return e([r, o]), n
                }, {a: r, b: o}, function (r, t) {
                    var o = t[0], i = t[1];
                    return {
                        a: function () {
                            var t = r.div(i.toFloat()), e = mo(o.shape, a);
                            return 0 < e.length ? t.sum(e).reshape(o.shape) : t
                        }, b: function () {
                            var t = r.mul(o.toFloat()), e = mo(i.shape, a);
                            0 < e.length && (t = t.sum(e).reshape(i.shape));
                            var n = i.square();
                            return t.div(n.toFloat()).neg()
                        }
                    }
                }, "FloorDiv")
            }
        }), Gu = wn({
            maximum_: function (t, e) {
                var n, r = cn(t, "a", "maximum"), o = cn(e, "b", "maximum");
                return n = Lt(r, o), r = n[0], o = n[1], "bool" === r.dtype && (r = r.toInt(), o = o.toInt()), go(r.shape, o.shape), Kt.runKernelFunc(function (t, e) {
                    var n = t.maximum(r, o);
                    return e([r, o]), n
                }, {a: r, b: o}, function (t, e) {
                    var n = e[0], r = e[1];
                    return {
                        a: function () {
                            return t.mul(n.greaterEqual(r).toFloat())
                        }, b: function () {
                            return t.mul(n.less(r).toFloat())
                        }
                    }
                }, "Maximum")
            }
        }), Hu = wn({
            maximumStrict_: function (t, e) {
                var n = cn(t, "a", "maximumStrict"), r = cn(e, "b", "maximumStrict");
                return x(n.shape, r.shape, "Error in maximumStrict: "), n.maximum(r)
            }
        }), qu = wn({
            minimum_: function (t, e) {
                var n, r = cn(t, "a", "minimum"), o = cn(e, "b", "minimum");
                return n = Lt(r, o), r = n[0], o = n[1], "bool" === r.dtype && (r = r.toInt(), o = o.toInt()), go(r.shape, o.shape), Kt.runKernelFunc(function (t, e) {
                    var n = t.minimum(r, o);
                    return e([r, o]), n
                }, {a: r, b: o}, function (t, e) {
                    var n = e[0], r = e[1];
                    return {
                        a: function () {
                            return t.mul(n.lessEqual(r).toFloat())
                        }, b: function () {
                            return t.mul(n.greater(r).toFloat())
                        }
                    }
                }, "Minimum")
            }
        }), ju = wn({
            minimumStrict_: function (t, e) {
                var n = cn(t, "a", "minimumStrict"), r = cn(e, "b", "minimumStrict");
                return x(n.shape, r.shape, "Error in minimumStrict: "), n.minimum(r)
            }
        }), Ku = wn({
            mod_: function (t, e) {
                var n, r = cn(t, "a", "mod"), o = cn(e, "b", "mod");
                n = Lt(r, o), r = n[0], o = n[1];
                var i = go(r.shape, o.shape);
                return Kt.runKernelFunc(function (t, e) {
                    var n = t.mod(r, o);
                    return e([r, o]), n
                }, {$a: r, $b: o}, function (n, t) {
                    var r = t[0], o = t[1];
                    return {
                        $a: function () {
                            var t = mo(r.shape, i);
                            return 0 < t.length ? n.sum(t).reshape(r.shape) : n
                        }, $b: function () {
                            var t = n.mul(r.div(o).floor().neg()), e = mo(o.shape, i);
                            return 0 < e.length ? t.sum(e).reshape(o.shape) : t
                        }
                    }
                })
            }
        }), Xu = wn({
            modStrict_: function (t, e) {
                var n = cn(t, "a", "modStrict"), r = cn(e, "b", "modStrict");
                return x(n.shape, r.shape, "Error in modStrict: "), n.mod(r)
            }
        }), Yu = wn({
            mul_: function (t, e) {
                var n, r = cn(t, "a", "mul"), o = cn(e, "b", "mul");
                n = Lt(r, o), r = n[0], o = n[1];
                var i = go(r.shape, o.shape);
                return Kt.runKernelFunc(function (t, e) {
                    var n = t.multiply(r, o);
                    return e([r, o]), n
                }, {a: r, b: o}, function (n, t) {
                    var r = t[0], o = t[1];
                    return {
                        a: function () {
                            var t = n.mul(o.toFloat()), e = mo(r.shape, i);
                            return 0 < e.length ? t.sum(e).reshape(r.shape) : t
                        }, b: function () {
                            var t = n.mul(r.toFloat()), e = mo(o.shape, i);
                            return 0 < e.length ? t.sum(e).reshape(o.shape) : t
                        }
                    }
                }, "Mul")
            }
        }), $u = wn({
            mulStrict_: function (t, e) {
                var n = cn(t, "a", "mul"), r = cn(e, "b", "mul");
                return x(n.shape, r.shape, "Error in multiplyStrict: "), n.mul(r)
            }
        }), Ju = wn({
            pow_: function (t, e) {
                var n, r = cn(t, "base", "pow"), o = cn(e, "exp", "pow");
                n = Lt(r, o), r = n[0], o = n[1];
                var u = go(r.shape, o.shape), i = [r, o];
                return Kt.runKernelFunc(function (t, e) {
                    var n = t.pow(r, o);
                    return e([r, o, n]), n
                }, {a: r, b: o}, function (o, t) {
                    var i = t[0], a = t[1], s = t[2];
                    return {
                        a: function () {
                            var t = a.toFloat(), e = o.mul(t.mul(i.pow(t.sub(kn(1))))), n = mo(i.shape, u);
                            return 0 < n.length && (e = e.sum(n)), e.reshape(i.shape)
                        }, b: function () {
                            var t = i.greater(0), e = i.log().where(t, Un(i)), n = o.mul(s.mul(e)), r = mo(a.shape, u);
                            return 0 < r.length && (n = n.sum(r)), n.reshape(a.shape)
                        }
                    }
                }, "Pow", {}, i, [!0])
            }
        }), Qu = wn({
            powStrict_: function (t, e) {
                return x(t.shape, e.shape, "Error in powStrict: "), t.pow(e)
            }
        }), Zu = wn({
            squaredDifferenceStrict_: function (t, e) {
                var n = cn(t, "a", "squaredDifferenceStrict"), r = cn(e, "b", "squaredDifferenceStrict");
                return x(n.shape, r.shape, "Error in squaredDifferenceStrict: "), n.squaredDifference(r)
            }
        }), tc = wn({
            sub_: function (t, e) {
                var n, r = cn(t, "a", "sub"), o = cn(e, "b", "sub");
                n = Lt(r, o), r = n[0], o = n[1];
                var i = go(r.shape, o.shape);
                return Kt.runKernelFunc(function (t) {
                    return t.subtract(r, o)
                }, {a: r, b: o}, function (n) {
                    return {
                        a: function () {
                            var t = n, e = mo(r.shape, i);
                            return 0 < e.length && (t = t.sum(e)), t.reshape(r.shape)
                        }, b: function () {
                            var t = n, e = mo(o.shape, i);
                            return 0 < e.length && (t = t.sum(e)), t.neg().reshape(o.shape)
                        }
                    }
                }, "Sub")
            }
        }), ec = wn({
            subStrict_: function (t, e) {
                var n = cn(t, "a", "subStrict"), r = cn(e, "b", "subStrict");
                return x(n.shape, r.shape, "Error in subStrict: "), n.sub(r)
            }
        }), nc = wn({
            equal_: function (t, e) {
                var n, r = cn(t, "a", "equal"), o = cn(e, "b", "equal");
                return n = Lt(r, o), r = n[0], o = n[1], go(r.shape, o.shape), Kt.runKernelFunc(function (t) {
                    return t.equal(r, o)
                }, {$a: r, $b: o})
            }
        }), rc = wn({
            equalStrict_: function (t, e) {
                var n = cn(t, "a", "equalStrict"), r = cn(e, "b", "equalStrict");
                return x(n.shape, r.shape, "Error in equalStrict: "), n.equal(r)
            }
        }), oc = wn({
            greater_: function (t, e) {
                var n, r = cn(t, "a", "greater"), o = cn(e, "b", "greater");
                return n = Lt(r, o), r = n[0], o = n[1], go(r.shape, o.shape), Kt.runKernelFunc(function (t) {
                    return t.greater(r, o)
                }, {a: r, b: o}, null, "Greater")
            }
        }), ic = wn({
            greaterEqual_: function (t, e) {
                var n, r = cn(t, "a", "greaterEqual"), o = cn(e, "b", "greaterEqual");
                return n = Lt(r, o), r = n[0], o = n[1], go(r.shape, o.shape), Kt.runKernelFunc(function (t, e) {
                    var n = t.greaterEqual(r, o);
                    return e([r, o]), n
                }, {a: r, b: o}, function (t, e) {
                    var n = e[0], r = e[1];
                    return {
                        a: function () {
                            return Un(n)
                        }, b: function () {
                            return Un(r)
                        }
                    }
                }, "GreaterEqual")
            }
        }), ac = wn({
            greaterEqualStrict_: function (t, e) {
                var n = cn(t, "a", "greaterEqualStrict"), r = cn(e, "b", "greaterEqualStrict");
                return x(n.shape, r.shape, "Error in greaterEqualStrict: "), n.greaterEqual(r)
            }
        }), sc = wn({
            greaterStrict_: function (t, e) {
                var n = cn(t, "a", "greaterStrict"), r = cn(e, "b", "greaterStrict");
                return x(n.shape, r.shape, "Error in greaterStrict: "), n.greater(r)
            }
        }), uc = wn({
            less_: function (t, e) {
                var n, r = cn(t, "a", "less"), o = cn(e, "b", "less");
                return n = Lt(r, o), r = n[0], o = n[1], go(r.shape, o.shape), Kt.runKernelFunc(function (t) {
                    return t.less(r, o)
                }, {a: r, b: o}, null, "Less")
            }
        }), cc = wn({
            lessEqual_: function (t, e) {
                var n, r = cn(t, "a", "lessEqual"), o = cn(e, "b", "lessEqual");
                return n = Lt(r, o), r = n[0], o = n[1], go(r.shape, o.shape), Kt.runKernelFunc(function (t, e) {
                    var n = t.lessEqual(r, o);
                    return e([r, o]), n
                }, {a: r, b: o}, null, "LessEqual")
            }
        }), lc = wn({
            lessEqualStrict_: function (t, e) {
                var n = cn(t, "a", "lessEqualStrict"), r = cn(e, "b", "lessEqualStrict");
                return x(n.shape, r.shape, "Error in lessEqualStrict: "), n.lessEqual(r)
            }
        }), hc = wn({
            lessStrict_: function (t, e) {
                var n = cn(t, "a", "lessStrict"), r = cn(e, "b", "lessStrict");
                return x(n.shape, r.shape, "Error in lessStrict: "), n.less(r)
            }
        }), fc = wn({
            notEqual_: function (t, e) {
                var n, r = cn(t, "a", "notEqual"), o = cn(e, "b", "notEqual");
                return n = Lt(r, o), r = n[0], o = n[1], go(r.shape, o.shape), Kt.runKernelFunc(function (t) {
                    return t.notEqual(r, o)
                }, {a: r, b: o}, null, "NotEqual")
            }
        }), pc = wn({
            notEqualStrict_: function (t, e) {
                var n = cn(t, "a", "notEqualStrict"), r = cn(e, "b", "notEqualStrict");
                return x(n.shape, r.shape, "Error in notEqualStrict: "), n.notEqual(r)
            }
        });

    function dc(t, e) {
        for (var n = [], r = t; r < e; ++r) n.push(r);
        return n
    }

    function vc(t) {
        for (var e = [], n = 0; n < t.length; ++n) for (var r = 0; r < t[n].length; ++r) e.push(t[n][r]);
        return e
    }

    function mc(d, v, m) {
        return y(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l, h, f, p;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        for (e = cn(d, "tensor", "boolMask"), n = cn(v, "mask", "boolMask", "bool"), r = null == m ? 0 : m, o = n.rank, i = e.shape, P(0 < o, function () {
                            return "mask cannot be scalar"
                        }), x(i.slice(r, r + o), n.shape, "mask's shape must match the first K dimensions of tensor's shape,"), a = 1, s = r; s < r + o; s++) a *= i[s];
                        return u = i.slice(0, r).concat([a], i.slice(r + o)), c = e.reshape(u), l = n.reshape([-1]), [4, wu(l)];
                    case 1:
                        return h = t.sent(), f = h.squeeze([1]), p = gc(c, f, r), d !== e && e.dispose(), v !== n && n.dispose(), f.dispose(), c.dispose(), l.dispose(), h.dispose(), [2, p]
                }
            })
        })
    }

    var gc = wn({
        gather_: function (t, e, g) {
            void 0 === g && (g = 0);
            var y = cn(t, "x", "gather"), r = cn(e, "indices", "gather", "int32");
            g = D(g, y.shape)[0];
            var n = function (t, e, n) {
                for (var r = t.shape[n], o = [], i = 1, a = 1, s = 0; s < n; s++) o.push(t.shape[s]), i *= t.shape[s];
                for (s = 0; s < e.rank; s++) o.push(e.shape[s]);
                for (s = n + 1; s < t.rank; s++) o.push(t.shape[s]), a *= t.shape[s];
                return {batchSize: i, sliceSize: a, dimSize: r, outputShape: o}
            }(y, r, g);
            return Kt.runKernelFunc(function (t, e) {
                var n = t.gather(y, r.flatten(), g);
                return e([r]), n
            }, {x: y, indices: r}, function (v, t) {
                var m = t[0];
                return {
                    x: function () {
                        var t = y.shape, e = m.size, n = t.slice(0, g), r = n.length, o = t.slice(g, t.length).slice(1),
                            i = o.length, a = dc(0, r), s = dc(r + 1, r + 1 + i), u = vc([n, [e], o]), c = v.reshape(u),
                            l = m.reshape([e]), h = vc([[r], a, s]), f = c.transpose(h), p = yc(f, l, y.shape[g]),
                            d = gn(h);
                        return p.transpose(d)
                    }, indices: function () {
                        return m
                    }
                }
            }, "Gather", {axis: g}).reshape(n.outputShape)
        }
    }), yc = wn({
        unsortedSegmentSum_: function (t, e, r) {
            var o = cn(t, "x", "unsortedSegmentSum"), i = cn(e, "segmentIds", "unsortedSegmentSum", "int32");
            return P(B(r), function () {
                return "numSegments must be of dtype int"
            }), Kt.runKernelFunc(function (t, e) {
                var n = t.unsortedSegmentSum(o, i, r);
                return e([i]), n
            }, {$x: o}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return function (t, e) {
                            for (var n = Gu(e, Un(e)), r = gc(t, n), o = ic(e, kn(0, "int32")), i = r.rank - o.rank, a = 0; a < i; ++a) o = yr(o, a + 1);
                            o = Au(o, On(r.shape, "bool"));
                            var s = Un(r);
                            return Mu(o, r, s)
                        }(t, n)
                    }
                }
            })
        }
    });

    function xc(t, e, r, o, i, a, s) {
        void 0 === a && (a = "NHWC"), P(t.length === e.rank, function () {
            return "Length of inShape (" + t.length + ") and rank of dy (" + e.rank + ") must match"
        });
        var n = t, u = e, c = !1;
        3 === e.rank && (c = !0, u = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]), n = [1, t[0], t[1], t[2]]), P(4 === n.length, function () {
            return "Error in conv2dDerInput: inShape must be length 4, but got length " + n.length + "."
        }), P(4 === u.rank, function () {
            return "Error in conv2dDerInput: dy must be rank 4, but got rank " + u.rank
        }), P(4 === r.rank, function () {
            return "Error in conv2dDerInput: filter must be rank 4, but got rank " + r.rank
        });
        var l = "NHWC" === a ? n[3] : n[1], h = "NHWC" === a ? u.shape[3] : u.shape[1];
        P(l === r.shape[2], function () {
            return "Error in conv2dDerInput: depth of input (" + l + ") must match input depth for filter " + r.shape[2] + "."
        }), P(h === r.shape[3], function () {
            return "Error in conv2dDerInput: depth of output (" + h + ") must match output depth for filter " + r.shape[3] + "."
        }), null != s && P(B(i), function () {
            return "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode " + s + " but got pad " + i + "."
        });
        var f = Do(a), p = bo(n, r.shape, o, 1, i, s, !1, f), d = Kt.runKernelFunc(function (t, e) {
            var n = t.conv2dDerInput(u, r, p);
            return e([r, u]), n
        }, {dy4D: u, filter: r}, function (t, e) {
            var n = e[0], r = e[1];
            return {
                dy4D: function () {
                    return Ec(t, n, o, i, a, 1, s)
                }, filter: function () {
                    return Ic(t, r, n.shape, o, i, a, s)
                }
            }
        });
        return c ? d.as3D(d.shape[1], d.shape[2], d.shape[3]) : d
    }

    function bc(t) {
        var e, n = "number" == typeof (e = t) ? [e, e, e] : 2 === e.length ? [e[0], e[1], 1] : e, r = n[0], o = n[1],
            i = n[2];
        return 1 === r && 1 === o && 1 === i
    }

    function wc(t, e, n, r, o) {
        P(t.length === e.rank, function () {
            return "Length of inShape (" + t.length + ") and rank of dy (" + e.rank + ") must match"
        });
        var i = t, a = e, s = !1;
        4 === e.rank && (s = !0, a = e.as5D(1, e.shape[0], e.shape[1], e.shape[2], e.shape[3]), i = [1, t[0], t[1], t[2], t[3]]);
        var u = i[4], c = a.shape[4];
        P(5 === i.length, function () {
            return "Error in conv3dDerInput: inShape must be length 5, but got length " + i.length + "."
        }), P(5 === a.rank, function () {
            return "Error in conv3dDerInput: dy must be rank 5, but got rank " + a.rank
        }), P(5 === n.rank, function () {
            return "Error in conv3dDerInput: filter must be rank 5, but got rank " + n.rank
        }), P(u === n.shape[3], function () {
            return "Error in conv3dDerInput: depth of input (" + u + ") must match input depth for filter " + n.shape[3] + "."
        }), P(c === n.shape[4], function () {
            return "Error in conv3dDerInput: depth of output (" + c + ") must match output depth for filter " + n.shape[4] + "."
        });
        var l = wo(i, n.shape, r, 1, o), h = Kt.runKernelFunc(function (t) {
            return t.conv3dDerInput(a, n, l)
        }, {dy5D: a});
        return s ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h
    }

    var Cc = wn({
        conv1d_: function (t, e, n, r, o, i, a) {
            void 0 === o && (o = "NWC"), void 0 === i && (i = 1);
            var s = cn(t, "x", "conv1d"), u = cn(e, "filter", "conv1d"), c = s, l = !1;
            2 === s.rank && (l = !0, c = s.as3D(1, s.shape[0], s.shape[1])), P(3 === c.rank, function () {
                return "Error in conv1d: input must be rank 3, but got rank " + c.rank + "."
            }), P(3 === u.rank, function () {
                return "Error in conv1d: filter must be rank 3, but got rank " + u.rank + "."
            }), null != a && P(B(r), function () {
                return "Error in conv1d: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + r + "."
            }), P(c.shape[2] === u.shape[1], function () {
                return "Error in conv1d: depth of input (" + c.shape[2] + ") must match input depth for filter " + u.shape[1] + "."
            }), P(So(n, i), function () {
                return "Error in conv1D: Either stride or dilation must be 1. Got stride " + n + " and dilation '" + i + "'"
            }), P("NWC" === o, function () {
                return "Error in conv1d: got dataFormat of " + o + " but only NWC is currently supported."
            });
            var h = u.as4D(1, u.shape[0], u.shape[1], u.shape[2]), f = c.as4D(c.shape[0], 1, c.shape[1], c.shape[2]),
                p = Ec(f, h, [1, n], r, "NHWC", [1, i], a);
            return l ? p.as2D(p.shape[2], p.shape[3]) : p.as3D(p.shape[0], p.shape[2], p.shape[3])
        }
    }), Ec = wn({
        conv2d_: function (t, e, i, a, s, u, n) {
            void 0 === s && (s = "NHWC"), void 0 === u && (u = [1, 1]);
            var r = cn(t, "x", "conv2d"), o = cn(e, "filter", "conv2d"), c = r, l = !1;
            3 === r.rank && (l = !0, c = r.as4D(1, r.shape[0], r.shape[1], r.shape[2])), P(4 === c.rank, function () {
                return "Error in conv2d: input must be rank 4, but got rank " + c.rank + "."
            }), P(4 === o.rank, function () {
                return "Error in conv2d: filter must be rank 4, but got rank " + o.rank + "."
            }), null != n && P(B(a), function () {
                return "Error in conv2d: pad must be an integer when using, dimRoundingMode " + n + " but got pad " + a + "."
            });
            var h = "NHWC" === s ? c.shape[3] : c.shape[1];
            P(h === o.shape[2], function () {
                return "Error in conv2d: depth of input (" + h + ") must match input depth for filter " + o.shape[2] + "."
            }), P(So(i, u), function () {
                return "Error in conv2D: Either strides or dilations must be 1. Got strides " + i + " and dilations '" + u + "'"
            });
            var f = Do(s), p = bo(c.shape, o.shape, i, u, a, n, !1, f), d = [o, c],
                v = Kt.runKernelFunc(function (t, e) {
                    var n = t.conv2d(c, o, p);
                    return e([o, c]), n
                }, {x: c, filter: o}, function (t, e) {
                    var n = e, r = n[0], o = n[1];
                    return P(ko(u), function () {
                        return "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + u + "'"
                    }), {
                        x: function () {
                            return Rc(o.shape, t, r, i, a, s)
                        }, filter: function () {
                            return Ic(o, t, r.shape, i, a, s)
                        }
                    }
                }, "Conv2D", p, d);
            return l ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v
        }
    }), _c = wn({
        conv3d_: function (t, e, o, i, n, a) {
            void 0 === n && (n = "NDHWC"), void 0 === a && (a = [1, 1, 1]);
            var r, s = cn(t, "x", "conv3d"), u = cn(e, "filter", "conv3d"), c = s, l = !1;
            4 === s.rank && (l = !0, c = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3])), P(5 === c.rank, function () {
                return "Error in conv3d: input must be rank 5, but got rank " + c.rank + "."
            }), P(5 === u.rank, function () {
                return "Error in conv3d: filter must be rank 5, but got rank " + u.rank + "."
            }), P(c.shape[4] === u.shape[3], function () {
                return "Error in conv3d: depth of input (" + c.shape[4] + ") must match input depth for filter " + u.shape[3] + "."
            }), P((r = a, bc(o) || bc(r)), function () {
                return "Error in conv3D: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + a + "'"
            }), P("NDHWC" === n, function () {
                return "Error in conv3d: got dataFormat of " + n + " but only NDHWC is currently supported."
            });
            var h = wo(c.shape, u.shape, o, a, i), f = Kt.runKernelFunc(function (t, e) {
                var n = t.conv3d(c, u, h);
                return e([c, u]), n
            }, {x: c, $filter: u}, function (t, e) {
                P(bc(a), function () {
                    return "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + a + "'"
                });
                var n = e[0], r = e[1];
                return {
                    x: function () {
                        return wc(n.shape, t, r, o, i)
                    }, $filter: function () {
                        return function (t, e, n, r, o) {
                            var i = t;
                            4 === t.rank && (i = t.as5D(1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]));
                            var a = e;
                            4 === a.rank && (a = e.as5D(1, e.shape[0], e.shape[1], e.shape[2], e.shape[3])), P(5 === i.rank, function () {
                                return "Error in conv3dDerFilter: input must be rank 5, but got shape " + i.shape + "."
                            }), P(5 === a.rank, function () {
                                return "Error in conv3dDerFilter: dy must be rank 5, but got shape " + a.shape + "."
                            }), P(5 === n.length, function () {
                                return "Error in conv3dDerFilter: filterShape must be length 5, but got " + n + "."
                            }), P(i.shape[4] === n[3], function () {
                                return "Error in conv3dDerFilter: depth of input " + i.shape[4] + ") must match input depth in filter (" + n[3] + "."
                            }), P(a.shape[4] === n[4], function () {
                                return "Error in conv3dDerFilter: depth of dy (" + a.shape[4] + ") must match output depth for filter (" + n[4] + ")."
                            });
                            var s = wo(i.shape, n, r, 1, o);
                            return Kt.runKernelFunc(function (t) {
                                return t.conv3dDerFilter(i, a, s)
                            }, {x5D: i, dy5D: a})
                        }(n, t, r.shape, o, i)
                    }
                }
            });
            return l ? f.as4D(f.shape[1], f.shape[2], f.shape[3], f.shape[4]) : f
        }
    }), Ic = wn({
        conv2dDerFilter_: function (t, e, n, r, o, i, a) {
            void 0 === i && (i = "NHWC");
            var s = t;
            3 === t.rank && (s = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
            var u = e;
            3 === u.rank && (u = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])), P(4 === s.rank, function () {
                return "Error in conv2dDerFilter: input must be rank 4, but got shape " + s.shape + "."
            }), P(4 === u.rank, function () {
                return "Error in conv2dDerFilter: dy must be rank 4, but got shape " + u.shape + "."
            }), P(4 === n.length, function () {
                return "Error in conv2dDerFilter: filterShape must be length 4, but got " + n + "."
            });
            var c = "NHWC" === i ? s.shape[3] : s.shape[1], l = "NHWC" === i ? u.shape[3] : u.shape[1];
            P(c === n[2], function () {
                return "Error in conv2dDerFilter: depth of input " + c + ") must match input depth in filter (" + n[2] + "."
            }), P(l === n[3], function () {
                return "Error in conv2dDerFilter: depth of dy (" + l + ") must match output depth for filter (" + n[3] + ")."
            }), null != a && P(B(o), function () {
                return "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + o + "."
            });
            var h = Do(i), f = bo(s.shape, n, r, 1, o, a, !1, h);
            return Kt.runKernelFunc(function (t) {
                return t.conv2dDerFilter(s, u, f)
            }, {x4D: s, dy4D: u})
        }
    }), Rc = wn({conv2dDerInput_: xc}), kc = wn({
        depthwiseConv2d_: function (t, e, n, r, o, i, a) {
            void 0 === i && (i = [1, 1]);
            var s = cn(t, "x", "depthwiseConv2d"), u = cn(e, "filter", "depthwiseConv2d"), c = s, l = !1;
            3 === s.rank && (l = !0, c = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), P(4 === c.rank, function () {
                return "Error in depthwiseConv2d: input must be rank 4, but got rank " + c.rank + "."
            }), P(4 === u.rank, function () {
                return "Error in depthwiseConv2d: filter must be rank 4, but got rank " + u.rank + "."
            }), P(c.shape[3] === u.shape[2], function () {
                return "Error in depthwiseConv2d: number of input channels (" + c.shape[3] + ") must match the inChannels dimension in filter " + u.shape[2] + "."
            }), null == i && (i = [1, 1]), P(So(n, i), function () {
                return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + i + "'"
            }), null != a && P(B(r), function () {
                return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + r + "."
            });
            var h = bo(c.shape, u.shape, n, i, r, a, !0), f = [c, u], p = Kt.runKernelFunc(function (t, e) {
                var n = t.depthwiseConv2D(c, u, h);
                return e([c, u]), n
            }, {x: c, filter: u}, function (t, e) {
                P(ko(i), function () {
                    return "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + i + "'"
                });
                var n = e[0], r = e[1];
                return {
                    x: function () {
                        return Sc(n.shape, t, r, h)
                    }, filter: function () {
                        return Dc(n, t, r.shape, h)
                    }
                }
            }, "DepthwiseConv2dNative", h, f);
            return l ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p
        }
    }), Sc = wn({
        depthwiseConv2dDerInput_: function (t, e, n, r) {
            var o = e, i = !1;
            3 === e.rank && (i = !0, o = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
            var a = Kt.runKernelFunc(function (t) {
                return t.depthwiseConv2DDerInput(o, n, r)
            }, {dy4D: o});
            return i ? a.as3D(a.shape[1], a.shape[2], a.shape[3]) : a
        }
    }), Dc = wn({
        depthwiseConv2dDerFilter_: function (t, e, n, r) {
            var o = t;
            3 === t.rank && (o = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
            var i = e;
            return 3 === i.rank && (i = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])), Kt.runKernelFunc(function (t) {
                return t.depthwiseConv2DDerFilter(o, i, r)
            }, {x4D: o, dy4D: i})
        }
    }), Ac = wn({
        separableConv2d_: function (t, e, n, r, o, i, a) {
            void 0 === i && (i = [1, 1]), void 0 === a && (a = "NHWC");
            var s = cn(t, "x", "separableConv2d"), u = cn(e, "depthwiseFilter", "separableConv2d"),
                c = cn(n, "pointwiseFilter", "separableConv2d"), l = s, h = !1;
            if (3 === s.rank && (h = !0, l = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), "NCHW" === a) throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
            P(4 === l.rank, function () {
                return "Error in separableConv2d: input must be rank 4, but got rank " + l.rank + "."
            }), P(4 === u.rank, function () {
                return "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + u.rank + "."
            }), P(4 === c.rank, function () {
                return "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + u.rank + "."
            }), P(1 === c.shape[0], function () {
                return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + c.shape[0] + "."
            }), P(1 === c.shape[1], function () {
                return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got " + c.shape[1] + "."
            });
            var f = u.shape[2], p = u.shape[3];
            P(c.shape[2] === f * p, function () {
                return "Error in separableConv2d: the third dimension of pointwise filter must be " + f * p + ", but got " + c.shape[2] + "."
            });
            var d = kc(l, u, r, o, a, i), v = Ec(d, c, 1, "valid", a);
            return h ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v
        }
    }), Tc = wn({
        conv2dTranspose_: function (t, e, n, r, o, i) {
            return xc(n, cn(t, "x", "conv2dTranspose"), cn(e, "filter", "conv2dTranspose"), r, o, "NHWC", i)
        }
    }), Nc = wn({
        conv3dTranspose_: function (t, e, n, r, o) {
            return wc(n, cn(t, "x", "conv3dTranspose"), cn(e, "filter", "conv3dTranspose"), r, o)
        }
    }), Fc = wn({
        matMul_: function (t, e, i, a) {
            var n;
            void 0 === i && (i = !1), void 0 === a && (a = !1);
            var r = cn(t, "a", "matMul"), o = cn(e, "b", "matMul");
            n = Lt(r, o), r = n[0], o = n[1];
            var s = i ? r.shape[r.rank - 2] : r.shape[r.rank - 1], u = a ? o.shape[o.rank - 1] : o.shape[o.rank - 2],
                c = i ? r.shape[r.rank - 1] : r.shape[r.rank - 2], l = a ? o.shape[o.rank - 2] : o.shape[o.rank - 1],
                h = r.shape.slice(0, -2), f = o.shape.slice(0, -2), p = L(h), d = L(f);
            P(2 <= r.rank && 2 <= o.rank && r.rank === o.rank, function () {
                return "Error in matMul: inputs must have the same rank of at least 2, got ranks " + r.rank + " and " + o.rank + "."
            }), P(A(h, f), function () {
                return "Error in matMul: outer dimensions (" + h + ") and (" + f + ") of Tensors with shapes " + r.shape + " and " + o.shape + " must match."
            }), P(s === u, function () {
                return "Error in matMul: inner shapes (" + s + ") and (" + u + ") of Tensors with shapes " + r.shape + " and " + o.shape + " and transposeA=" + i + " and transposeB=" + a + " must match."
            });
            var v = r.shape.slice(0, -2).concat([c, l]), m = i ? r.as3D(p, s, c) : r.as3D(p, c, s),
                g = a ? o.as3D(d, l, u) : o.as3D(d, u, l), y = {transposeA: i, transposeB: a};
            return Kt.runKernelFunc(function (t, e) {
                var n = t.batchMatMul(m, g, i, a);
                return e([m, g]), n
            }, {a: m, b: g}, function (t, e) {
                var n = e, r = n[0], o = n[1];
                return i || a ? !i && a ? {
                    a: function () {
                        return t.matMul(o, !1, !1)
                    }, b: function () {
                        return t.matMul(r, !0, !1)
                    }
                } : i && !a ? {
                    a: function () {
                        return o.matMul(t, !1, !0)
                    }, b: function () {
                        return r.matMul(t, !1, !1)
                    }
                } : {
                    a: function () {
                        return o.matMul(t, !0, !0)
                    }, b: function () {
                        return t.matMul(r, !0, !0)
                    }
                } : {
                    a: function () {
                        return t.matMul(o, !1, !0)
                    }, b: function () {
                        return r.matMul(t, !0, !1)
                    }
                }
            }, "BatchMatMul", y).reshape(v)
        }
    }), Mc = wn({
        dot_: function (t, e) {
            var n = cn(t, "t1", "dot"), r = cn(e, "t2", "dot");
            P(!(1 !== n.rank && 2 !== n.rank || 1 !== r.rank && 2 !== r.rank), function () {
                return "Error in dot: inputs must all be rank 1 or 2, but got ranks " + n.rank + " and " + r.rank + "."
            });
            var o = 1 === n.rank ? n.size : n.shape[1], i = 1 === r.rank ? r.size : r.shape[0];
            return P(o === i, function () {
                return "Error in dot: inner dimensions of inputs must match, but got " + o + " and " + i + "."
            }), 1 === n.rank && 1 === r.rank ? n.as2D(1, -1).matMul(r.as2D(-1, 1)).asScalar() : 1 === n.rank && 2 === r.rank ? n.as2D(1, -1).matMul(r.as2D(r.shape[0], r.shape[1])).as1D() : 2 === n.rank && 1 === r.rank ? n.matMul(r.as2D(-1, 1)).as1D() : n.matMul(r.as2D(r.shape[0], r.shape[1]))
        }
    }), Oc = wn({
        outerProduct_: function (t, e) {
            var n = cn(t, "v1", "outerProduct"), r = cn(e, "v2", "outerProduct");
            return P(1 === n.rank && 1 === r.rank, function () {
                return "Error in outerProduct: inputs must be rank 1, but got ranks " + n.rank + " and " + r.rank + "."
            }), n.as2D(-1, 1).matMul(r.as2D(1, -1))
        }
    }), Pc = wn({
        reverse_: function (t, e) {
            var n = cn(t, "x", "reverse");
            if (0 === n.rank) return n.clone();
            var r = D(e, n.shape);
            return Kt.runKernelFunc(function (t) {
                return t.reverse(n, r)
            }, {$x: n}, function (t) {
                return {
                    $x: function () {
                        return t.reverse(r)
                    }
                }
            }).reshapeAs(n)
        }
    }), Bc = wn({
        reverse1d_: function (t) {
            var e = cn(t, "x", "reverse");
            return P(1 === e.rank, function () {
                return "Error in reverse1D: x must be rank 1 but got rank " + e.rank + "."
            }), Pc(e, 0)
        }
    }), Lc = wn({
        reverse2d_: function (t, e) {
            var n = cn(t, "x", "reverse");
            return P(2 === n.rank, function () {
                return "Error in reverse2D: x must be rank 2 but got rank " + n.rank + "."
            }), Pc(n, e)
        }
    }), Wc = wn({
        reverse3d_: function (t, e) {
            var n = cn(t, "x", "reverse");
            return P(3 === n.rank, function () {
                return "Error in reverse3D: x must be rank 3 but got rank " + n.rank + "."
            }), Pc(n, e)
        }
    }), zc = wn({
        reverse4d_: function (t, e) {
            var n = cn(t, "x", "reverse");
            return P(4 === n.rank, function () {
                return "Error in reverse4D: x must be rank 4 but got rank " + n.rank + "."
            }), Pc(n, e)
        }
    });

    function Uc(t, r, o, i, a, e) {
        var n = cn(t, "x", "maxPool"), s = n, u = !1;
        3 === n.rank && (u = !0, s = n.as4D(1, n.shape[0], n.shape[1], n.shape[2])), null == i && (i = [1, 1]), P(4 === s.rank, function () {
            return "Error in maxPool: input must be rank 4 but got rank " + s.rank + "."
        }), P(So(o, i), function () {
            return "Error in maxPool: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + i + "'"
        }), null != e && P(B(a), function () {
            return "Error in maxPool: pad must be an integer when using, dimRoundingMode " + e + " but got pad " + a + "."
        });
        var c = yo(s.shape, r, o, i, a, e);
        if (1 === c.filterWidth && 1 === c.filterHeight && A(c.inShape, c.outShape)) return n.clone();
        var l = [s], h = Kt.runKernelFunc(function (t, e) {
            var n = t.maxPool(s, c);
            return e([s, n]), n
        }, {x: s}, function (h, t) {
            var e = t[0], n = t[1];
            return {
                x: function () {
                    return function (t, e, n, r, o, i, a) {
                        var s = cn(h, "dy", "maxPoolBackprop"), u = cn(e, "input", "maxPoolBackprop"),
                            c = cn(n, "output", "maxPoolBackprop");
                        P(u.rank === s.rank, function () {
                            return "Rank of input (" + u.rank + ") does not match rank of dy (" + s.rank + ")"
                        }), null == i && (i = [1, 1]), P(So(o, i), function () {
                            return "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + i + "'"
                        }), P(4 === s.rank, function () {
                            return "Error in maxPoolBackprop: dy must be rank 4 but got rank " + s.rank + "."
                        }), P(4 === u.rank, function () {
                            return "Error in maxPoolBackprop: input must be rank 4 but got rank " + u.rank + "."
                        });
                        var l = yo(u.shape, r, o, i, a, void 0);
                        return Kt.runKernelFunc(function (t) {
                            return t.maxPoolBackprop(s, u, c, l)
                        }, {$dy: s, $input: u})
                    }(0, e, n, r, o, i, a)
                }
            }
        }, "MaxPool", c, l);
        return u ? h.as3D(h.shape[1], h.shape[2], h.shape[3]) : h
    }

    function Vc(t, e, n, r, o, i) {
        var a = cn(t, "x", "avgPool", "float32");
        null == r && (r = [1, 1]), P(So(n, r), function () {
            return "Error in avgPool: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + r + "'"
        });
        var s = a, u = !1;
        3 === a.rank && (u = !0, s = a.as4D(1, a.shape[0], a.shape[1], a.shape[2])), P(4 === s.rank, function () {
            return "Error in avgPool: x must be rank 4 but got rank " + s.rank + "."
        }), null != i && P(B(o), function () {
            return "Error in avgPool: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + "."
        });
        var c = yo(s.shape, e, n, r, o, i);
        if (1 === c.filterWidth && 1 === c.filterHeight && A(c.inShape, c.outShape)) return a.clone();
        var l = Kt.runKernelFunc(function (t) {
            return t.avgPool(s, c)
        }, {x: s}, function (p) {
            return {
                x: function () {
                    return function (t, e, n, r, o, i) {
                        var a = cn(p, "dy", "avgPoolBackprop"), s = cn(e, "input", "avgPoolBackprop");
                        P(s.rank === a.rank, function () {
                            return "Rank of input (" + s.rank + ") does not match rank of dy (" + a.rank + ")"
                        }), null == o && (o = [1, 1]), P(So(r, o), function () {
                            return "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + o + "'"
                        });
                        var u = s, c = a, l = !1;
                        3 === s.rank && (l = !0, u = s.as4D(1, s.shape[0], s.shape[1], s.shape[2]), c = a.as4D(1, a.shape[0], a.shape[1], a.shape[2])), P(4 === c.rank, function () {
                            return "Error in avgPoolBackprop: dy must be rank 4 but got rank " + c.rank + "."
                        }), P(4 === u.rank, function () {
                            return "Error in avgPoolBackprop: input must be rank 4 but got rank " + u.rank + "."
                        });
                        var h = yo(u.shape, n, r, o, i), f = Kt.runKernelFunc(function (t) {
                            return t.avgPoolBackprop(c, u, h)
                        }, {dy4D: c, input4D: u});
                        return l ? f.as3D(f.shape[1], f.shape[2], f.shape[3]) : f
                    }(0, s, e, n, r, o)
                }
            }
        }, "AvgPool", c);
        return l = l.cast(a.dtype), u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
    }

    var Gc = wn({
        maxPool_: function (t, e, n, r, o) {
            return Uc(t, e, n, 1, r, o)
        }
    }), Hc = wn({
        avgPool_: function (t, e, n, r, o) {
            return Vc(t, e, n, 1, r, o)
        }
    }), qc = wn({
        pool_: function (t, e, n, r, o, i) {
            null == o && (o = [1, 1]), null == i && (i = 1), 0 === r && (r = "valid");
            var a = cn(t, "x", "maxPool"), s = a, u = !1;
            3 === a.rank && (u = !0, s = a.as4D(1, a.shape[0], a.shape[1], a.shape[2])), P(So(i, o), function () {
                return "Error in pool: Either strides or dilations must be 1. Got strides " + i + " and dilations '" + o + "'"
            });
            var c, l, h, f, p, d, v = yo(s.shape, e, i, o, r), m = [v.dilationHeight, v.dilationWidth];
            c = "same" === r ? (l = [v.filterHeight, v.filterWidth], h = m, f = l.map(function (t, e) {
                return t + (t - 1) * (h[e] - 1)
            }).map(function (t) {
                return t - 1
            }), p = f.map(function (t) {
                return Math.floor(t / 2)
            }), d = f.map(function (t, e) {
                return t - p[e]
            }), f.map(function (t, e) {
                return [p[e], d[e]]
            })) : [[0, 0], [0, 0]];
            var g, y, x, b, w, C, E, _, I = 1 === m[0] && 1 === m[1],
                R = (g = [v.inHeight, v.inWidth], y = m, b = (x = c).map(function (t) {
                    return t[0]
                }), w = x.map(function (t) {
                    return t[1]
                }), C = g.concat(b, w), E = y.map(function (t, e) {
                    return (t - C[e] % t) % t
                }), _ = w.map(function (t, e) {
                    return t + E[e]
                }), [y.map(function (t, e) {
                    return [b[e], _[e]]
                }), y.map(function (t, e) {
                    return [0, E[e]]
                })]), k = R[1], S = I ? r : "valid", D = I ? s : Nr(s, m, R[0]), A = ("avg" === n ? function () {
                    return Vc(D, e, i, 1, S)
                } : function () {
                    return Uc(D, e, i, 1, S)
                })(), T = I ? A : fr(A, m, k);
            return u ? T.as3D(T.shape[1], T.shape[2], T.shape[3]) : T
        }
    }), jc = wn({
        maxPool3d_: function (t, r, o, i, a, e, s) {
            void 0 === e && (e = "NDHWC");
            var n = cn(t, "x", "maxPool3d"), u = n, c = !1;
            4 === n.rank && (c = !0, u = n.as5D(1, n.shape[0], n.shape[1], n.shape[2], n.shape[3])), null == s && (s = [1, 1, 1]), P(5 === u.rank, function () {
                return "Error in maxPool3d: x must be rank 5 but got rank " + u.rank + "."
            }), P("NDHWC" === e, function () {
                return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of " + e
            }), P(So(o, s), function () {
                return "Error in maxPool3d: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + s + "'"
            }), null != a && P(B(i), function () {
                return "Error in maxPool3d: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + i + "."
            });
            var l = xo(u.shape, r, o, s, i, a, e), h = Kt.runKernelFunc(function (t, e) {
                var n = t.maxPool3d(u, l);
                return e([u, n]), n
            }, {x: u}, function (g, t) {
                var e = t[0], n = t[1];
                return {
                    x: function () {
                        return function (t, e, n, r, o, i, a, s) {
                            var u = cn(g, "dy", "maxPool3dBackprop"), c = cn(e, "input", "maxPool3dBackprop"),
                                l = cn(n, "output", "maxPool3dBackprop"), h = u, f = c, p = l, d = !1;
                            4 === c.rank && (d = !0, h = u.as5D(1, u.shape[0], u.shape[1], u.shape[2], u.shape[3]), f = c.as5D(1, c.shape[0], c.shape[1], c.shape[2], c.shape[3]), p = l.as5D(1, l.shape[0], l.shape[1], l.shape[2], l.shape[3])), P(5 === h.rank, function () {
                                return "Error in maxPool3dBackprop: dy must be rank 5 but got rank " + h.rank + "."
                            }), P(5 === f.rank, function () {
                                return "Error in maxPool3dBackprop: input must be rank 5 but got rank " + f.rank + "."
                            }), P(5 === p.rank, function () {
                                return "Error in maxPool3dBackprop: output must be rank 5 but got rank " + p.rank + "."
                            }), null == i && (i = [1, 1, 1]), P(So(o, i), function () {
                                return "Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + i + "'"
                            }), null != s && P(B(a), function () {
                                return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + s + " but got pad " + a + "."
                            });
                            var v = xo(f.shape, r, o, i, a, s), m = Kt.runKernelFunc(function (t) {
                                return t.maxPool3dBackprop(h, f, p, v)
                            }, {dy5D: h, input5D: f});
                            return d ? m.as4D(m.shape[1], m.shape[2], m.shape[3], m.shape[4]) : m
                        }(0, e, n, r, o, s, i, a)
                    }
                }
            });
            return c ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h
        }
    }), Kc = wn({
        avgPool3d_: function (t, e, n, r, o, i, a) {
            void 0 === i && (i = "NDHWC");
            var s = cn(t, "x", "avgPool3d", "float32"), u = s, c = !1;
            4 === s.rank && (c = !0, u = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3])), null == a && (a = [1, 1, 1]), P(5 === u.rank, function () {
                return "Error in avgPool3d: x must be rank 5 but got rank " + u.rank + "."
            }), P("NDHWC" === i, function () {
                return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of " + i
            }), P(So(n, a), function () {
                return "Error in avgPool3d: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + a + "'"
            }), null != o && P(B(r), function () {
                return "Error in avgPool3d: pad must be an integer when using, dimRoundingMode " + o + " but got pad " + r + "."
            });
            var l = xo(u.shape, e, n, a, r, o, i), h = Kt.runKernelFunc(function (t) {
                return t.avgPool3d(u, l)
            }, {x: u}, function (d) {
                return {
                    x: function () {
                        return function (t, e, n, r, o, i, a) {
                            var s = cn(d, "dy", "avgPool3dBackprop"), u = cn(e, "input", "avgPool3dBackprop"), c = s,
                                l = u, h = !1;
                            4 === u.rank && (h = !0, c = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3]), l = u.as5D(1, u.shape[0], u.shape[1], u.shape[2], u.shape[3])), P(5 === c.rank, function () {
                                return "Error in avgPool3dBackprop: dy must be rank 5 but got rank " + c.rank + "."
                            }), P(5 === l.rank, function () {
                                return "Error in avgPool3dBackprop: input must be rank 5 but got rank " + l.rank + "."
                            }), null == o && (o = [1, 1, 1]), P(So(r, o), function () {
                                return "Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + o + "'"
                            }), null != a && P(B(i), function () {
                                return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + i + "."
                            });
                            var f = xo(l.shape, n, r, o, i, a), p = Kt.runKernelFunc(function (t) {
                                return t.avgPool3dBackprop(c, l, f)
                            }, {dy5D: c, input5D: l});
                            return h ? p.as4D(p.shape[1], p.shape[2], p.shape[3], p.shape[4]) : p
                        }(0, u, e, n, a, r, o)
                    }
                }
            });
            return h = h.cast(u.dtype), c ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h
        }
    }), Xc = wn({
        slice_: function (t, e, n) {
            var r, o, i = cn(t, "x", "slice");
            if (0 === i.rank) throw new Error("Slicing scalar is not possible");
            (r = "number" == typeof e ? [e].concat(new Array(i.rank - 1).fill(0)) : e.length < i.rank ? e.concat(new Array(i.rank - e.length).fill(0)) : e.slice()).forEach(function (t) {
                P(-1 !== t, function () {
                    return "slice() does not support negative begin indexing."
                })
            }), o = (o = null == n ? new Array(i.rank).fill(-1) : "number" == typeof n ? [n].concat(new Array(i.rank - 1).fill(-1)) : n.length < i.rank ? n.concat(new Array(i.rank - n.length).fill(-1)) : n).map(function (t, e) {
                return 0 <= t ? t : (P(-1 === t, function () {
                    return "Negative size values should be exactly -1 but got " + t + " for the slice() size at index " + e + "."
                }), i.shape[e] - r[e])
            }), $r(i, r, o);
            var a = i.shape, s = {begin: r, size: o};
            return Kt.runKernelFunc(function (t) {
                return t.slice(i, r, o)
            }, {x: i}, function (t) {
                for (var e = [], n = 0; n < t.rank; n++) e.push([r[n], a[n] - r[n] - o[n]]);
                return {
                    x: function () {
                        return t.pad(e)
                    }
                }
            }, "Slice", s)
        }
    }), Yc = wn({
        slice1d_: function (t, e, n) {
            var r = cn(t, "x", "slice1d");
            return P(1 === r.rank, function () {
                return "slice1d expects a rank-1 tensor, but got a rank-" + r.rank + " tensor"
            }), Xc(r, [e], [n])
        }
    }), $c = wn({
        slice2d_: function (t, e, n) {
            var r = cn(t, "x", "slice2d");
            return P(2 === r.rank, function () {
                return "slice2d expects a rank-2 tensor, but got a rank-" + r.rank + " tensor"
            }), Xc(r, e, n)
        }
    }), Jc = wn({
        slice3d_: function (t, e, n) {
            var r = cn(t, "x", "slice3d");
            return P(3 === r.rank, function () {
                return "slice3d expects a rank-3 tensor, but got a rank-" + r.rank + " tensor"
            }), Xc(r, e, n)
        }
    }), Qc = wn({
        slice4d_: function (t, e, n) {
            var r = cn(t, "x", "slice4d");
            return P(4 === r.rank, function () {
                return "slice4d expects a rank-4 tensor, but got a rank-" + r.rank + " tensor"
            }), Xc(r, e, n)
        }
    });

    function Zc(e, n, r, t, o) {
        return n.rank < r.rank && (n = n.reshape(dn(n.shape, t))), e.rank < r.rank && (e = e.reshape(dn(e.shape, t))), {
            x: function () {
                var t = e.mul(r.equal(n).cast(e.dtype));
                return null == o ? t : t.transpose(o)
            }
        }
    }

    var tl = wn({
        all_: function (t, e, n) {
            void 0 === e && (e = null), void 0 === n && (n = !1);
            var r = cn(t, "x", "all", "bool"), o = D(e, r.shape), i = o, a = mn(i, r.rank);
            null != a && (r = r.transpose(a), i = yn(i.length, r.rank));
            var s = Kt.runKernelFunc(function (t) {
                return t.all(r, i)
            }, {$x: r});
            if (n) {
                var u = dn(s.shape, o);
                return s.reshape(u)
            }
            return s
        }
    }), el = wn({
        any_: function (t, e, n) {
            void 0 === e && (e = null), void 0 === n && (n = !1);
            var r = cn(t, "x", "any", "bool"), o = D(e, r.shape), i = o, a = mn(i, r.rank);
            null != a && (r = r.transpose(a), i = yn(i.length, r.rank));
            var s = Kt.runKernelFunc(function (t) {
                return t.any(r, i)
            }, {$x: r});
            if (n) {
                var u = dn(s.shape, o);
                return s.reshape(u)
            }
            return s
        }
    }), nl = wn({
        argMax_: function (t, e) {
            void 0 === e && (e = 0);
            var r = cn(t, "x", "argMax");
            null == e && (e = 0);
            var o = D(e, r.shape), n = mn(o, r.rank);
            null != n && (r = r.transpose(n), o = yn(o.length, r.rank));
            var i = {axis: o[0]}, a = [r];
            return Kt.runKernelFunc(function (t, e) {
                var n = t.argMax(r, o[0]);
                return e([r]), n
            }, {x: r}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return Un(n)
                    }
                }
            }, "ArgMax", i, a)
        }
    }), rl = wn({
        argMin_: function (t, e) {
            void 0 === e && (e = 0);
            var r = cn(t, "x", "argMin");
            null == e && (e = 0);
            var o = D(e, r.shape), n = mn(o, r.rank);
            return null != n && (r = r.transpose(n), o = yn(o.length, r.rank)), Kt.runKernelFunc(function (t, e) {
                var n = t.argMin(r, o[0]);
                return e([r]), n
            }, {$x: r}, function (t, e) {
                var n = e[0];
                return {
                    $x: function () {
                        return Un(n)
                    }
                }
            })
        }
    }), ol = wn({
        logSumExp_: function (t, e, n) {
            void 0 === e && (e = null), void 0 === n && (n = !1);
            var r = cn(t, "x", "logSumExp"), o = D(e, r.shape), i = r.max(o, !0), a = r.sub(i).exp().sum(o).log(),
                s = i.reshape(a.shape).add(a);
            if (n) {
                var u = dn(s.shape, o);
                return s.reshape(u)
            }
            return s
        }
    }), il = wn({
        max_: function (t, e, n) {
            void 0 === e && (e = null), void 0 === n && (n = !1);
            var r = cn(t, "x", "max"), o = r, i = D(e, r.shape), a = i, s = mn(a, r.rank);
            null != s && (r = r.transpose(s), a = yn(a.length, r.rank));
            var u = [r], c = Kt.runKernelFunc(function (t, e) {
                var n = t.max(r, a);
                return e([o, n]), n
            }, {x: r}, function (t, e) {
                return Zc(t, e[1], e[0], i, s)
            }, "Max", {axes: a}, u, [!0]);
            if (n) {
                var l = dn(c.shape, i);
                c = c.reshape(l)
            }
            return c
        }
    }), al = wn({
        mean_: function (t, e, r) {
            void 0 === e && (e = null), void 0 === r && (r = !1);
            var n = cn(t, "x", "mean"), o = D(e, n.shape), i = L(pn(n.shape, o)[1]);
            return io(function (n) {
                var t = kn(i);
                return {
                    value: (t.dtype === n.dtype ? n : n.cast(t.dtype)).div(t).sum(e, r), gradFunc: function (t) {
                        var e = n.shape.slice();
                        return o.forEach(function (t) {
                            e[t] = 1
                        }), t.reshape(e).mul(On(n.shape, "float32")).div(i)
                    }
                }
            })(n)
        }
    }), sl = wn({
        min_: function (t, e, n) {
            void 0 === e && (e = null), void 0 === n && (n = !1);
            var r = cn(t, "x", "min"), o = r, i = D(e, r.shape), a = i, s = mn(a, r.rank);
            null != s && (r = r.transpose(s), a = yn(a.length, r.rank));
            var u = [r], c = Kt.runKernelFunc(function (t, e) {
                var n = t.min(r, a);
                return e([o, n]), n
            }, {x: r}, function (t, e) {
                return Zc(t, e[1], e[0], i, s)
            }, "Min", {axes: a}, u, [!0]);
            if (n) {
                var l = dn(c.shape, i);
                c = c.reshape(l)
            }
            return c
        }
    }), ul = wn({
        moments_: function (t, e, n) {
            void 0 === e && (e = null), void 0 === n && (n = !1);
            var r = D(e, (t = cn(t, "x", "moments")).shape), o = t.mean(r, n), i = o.shape;
            n || (i = dn(o.shape, r));
            var a = t.toFloat().sub(o.reshape(i)).square();
            return {mean: o, variance: a.mean(r, n)}
        }
    }), cl = wn({
        sum_: function (t, e, u) {
            void 0 === e && (e = null), void 0 === u && (u = !1);
            var n = cn(t, "x", "sum");
            "bool" === n.dtype && (n = n.toInt());
            var c = D(e, n.shape);
            return io(function (n) {
                var t = mn(c, n.rank), e = c, r = n;
                null != t && (r = n.transpose(t), e = yn(e.length, n.rank));

                function o(t) {
                    var e = n.shape.slice();
                    return c.forEach(function (t) {
                        e[t] = 1
                    }), t.reshape(e).mul(On(n.shape, "float32"))
                }

                var i = {axes: e}, a = Kt.runKernelFunc(function (t) {
                    return t.sum(r, e)
                }, {x: r}, function (t) {
                    return {
                        x: function () {
                            return o(t)
                        }
                    }
                }, "Sum", i);
                if (u) {
                    var s = dn(a.shape, c);
                    a = a.reshape(s)
                }
                return {value: a, gradFunc: o}
            })(n)
        }
    }), ll = wn({
        prod_: function (t, e, n) {
            void 0 === e && (e = null), void 0 === n && (n = !1);
            var r = cn(t, "x", "prod");
            "bool" === r.dtype && (r = r.toInt());
            var o = D(e, r.shape), i = mn(o, r.rank), a = o, s = r;
            null != i && (s = r.transpose(i), a = yn(a.length, r.rank));
            var u = Kt.runKernelFunc(function (t) {
                return t.prod(s, a)
            }, {permutedX: s});
            if (n) {
                var c = dn(u.shape, o);
                u = u.reshape(c)
            }
            return u
        }
    }), hl = wn({
        elu_: function (t) {
            var r = cn(t, "x", "elu");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.elu(r);
                return e([n]), n
            }, {$x: r}, function (e, t) {
                var n = t[0];
                return {
                    $x: function () {
                        return Kt.runKernelFunc(function (t) {
                            return t.eluDer(e, n)
                        }, {dy: e, y: n})
                    }
                }
            })
        }
    }), fl = wn({
        leakyRelu_: function (t, e) {
            void 0 === e && (e = .2);
            var n = cn(t, "x", "leakyRelu");
            return Gu(kn(e).mul(n), n)
        }
    }), pl = wn({
        prelu_: function (t, e) {
            var r = cn(t, "x", "prelu"), o = cn(e, "alpha", "prelu");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.prelu(r, o);
                return e([r, o]), n
            }, {x: r, alpha: o}, function (n, t) {
                var r = t[0], o = t[1], i = r.greater(0);
                return {
                    x: function () {
                        return Mu(i, n, n.mul(o))
                    }, alpha: function () {
                        var t = Mu(i, Un(n), n.mul(r)), e = mo(o.shape, n.shape);
                        return 0 < e.length && (t = t.sum(e)), t.reshape(o.shape)
                    }
                }
            }, "Prelu")
        }
    }), dl = wn({
        relu_: function (t) {
            var r = cn(t, "x", "relu");
            return "bool" === r.dtype ? r.toInt() : Kt.runKernelFunc(function (t, e) {
                var n = t.relu(r);
                return e([r]), n
            }, {x: r}, function (t, e) {
                var n = e[0];
                return {
                    x: function () {
                        return t.mulStrict(n.step().toFloat())
                    }
                }
            }, "Relu")
        }
    }), vl = wn({
        relu6_: function (t) {
            var r = cn(t, "x", "relu6");
            return "bool" === r.dtype ? r.toInt() : Kt.runKernelFunc(function (t, e) {
                var n = t.relu6(r);
                return e([r]), n
            }, {x: r}, function (t, e) {
                var n = e[0], r = n.lessEqual(6).mul(n.step());
                return {
                    x: function () {
                        return t.mulStrict(r.toFloat())
                    }
                }
            }, "Relu6")
        }
    }), ml = wn({
        selu_: function (t) {
            var r = cn(t, "x", "selu");
            return Kt.runKernelFunc(function (t, e) {
                var n = t.selu(r);
                return e([r]), n
            }, {$x: r}, function (i, t) {
                var a = t[0];
                return {
                    $x: function () {
                        var t = a.greater(kn(0)), e = kn(hs), n = kn(fs), r = i.mul(n),
                            o = i.mul(e).mul(a.toFloat().exp());
                        return Mu(t, r, o)
                    }
                }
            })
        }
    }), gl = wn({
        transpose_: function (t, n) {
            var e = cn(t, "x", "transpose");
            if (null == n && (n = e.shape.map(function (t, e) {
                return e
            }).reverse()), P(e.rank === n.length, function () {
                return "Error in transpose: rank of input " + e.rank + " must match length of perm " + n + "."
            }), n.forEach(function (t) {
                P(0 <= t && t < e.rank, function () {
                    return "All entries in 'perm' must be between 0 and " + (e.rank - 1) + " but got " + n
                })
            }), e.rank <= 1) return e.clone();
            var r = {perm: n};
            return Kt.runKernelFunc(function (t) {
                return t.transpose(e, n)
            }, {x: e}, function (t) {
                var e = gn(n);
                return {
                    x: function () {
                        return t.transpose(e)
                    }
                }
            }, "Transpose", r)
        }
    }), yl = wn({
        localResponseNormalization_: function (t, o, i, a, s) {
            void 0 === o && (o = 5), void 0 === i && (i = 1), void 0 === a && (a = 1), void 0 === s && (s = .5);
            var e = cn(t, "x", "localResponseNormalization");
            P(4 === e.rank || 3 === e.rank, function () {
                return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + e.rank + "."
            }), P(B(o), function () {
                return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius " + o + "."
            });
            var r = e, n = !1;
            3 === e.rank && (n = !0, r = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
            var u = Kt.runKernelFunc(function (t, e) {
                var n = t.localResponseNormalization4D(r, o, i, a, s);
                return e([r, n]), n
            }, {x4D: r}, function (e, t) {
                var n = t[0], r = t[1];
                return {
                    x4D: function () {
                        return Kt.runKernelFunc(function (t) {
                            return t.LRNGrad(e, n, r, o, i, a, s)
                        }, {})
                    }
                }
            });
            return n ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u
        }
    }), xl = wn({
        norm_: function (t, e, n, r) {
            void 0 === e && (e = "euclidean"), void 0 === n && (n = null), void 0 === r && (r = !1);
            var o = function t(e, n, r) {
                if (void 0 === r && (r = null), 0 === e.rank) return e.abs();
                if (1 !== e.rank && null === r) return t(e.reshape([-1]), n, r);
                if (1 === e.rank || "number" == typeof r || Array.isArray(r) && 1 === r.length) {
                    if (1 === n) return e.abs().sum(r);
                    if (n === 1 / 0) return e.abs().max(r);
                    if (n === -1 / 0) return e.abs().min(r);
                    if ("euclidean" === n || 2 === n) return e.abs().pow(kn(2, "int32")).sum(r).sqrt();
                    throw new Error("Error in norm: invalid ord value: " + n)
                }
                if (Array.isArray(r) && 2 === r.length) {
                    if (1 === n) return e.abs().sum(r[0]).max(r[1] - 1);
                    if (n === 1 / 0) return e.abs().sum(r[1]).max(r[0]);
                    if (n === -1 / 0) return e.abs().sum(r[1]).min(r[0]);
                    if ("fro" === n || "euclidean" === n) return e.square().sum(r).sqrt();
                    throw new Error("Error in norm: invalid ord value: " + n)
                }
                throw new Error("Error in norm: invalid axis: " + r)
            }(t = cn(t, "x", "norm"), e, n), i = o.shape;
            if (r) {
                var a = D(n, t.shape);
                i = dn(o.shape, a)
            }
            return o.reshape(i)
        }
    }), bl = wn({
        basicLSTMCell_: function (t, e, n, r, o, i) {
            var a = cn(t, "forgetBias", "basicLSTMCell"), s = cn(e, "lstmKernel", "basicLSTMCell"),
                u = cn(n, "lstmBias", "basicLSTMCell"), c = cn(r, "data", "basicLSTMCell"),
                l = cn(o, "c", "basicLSTMCell"), h = cn(i, "h", "basicLSTMCell"), f = c.concat(h, 1).matMul(s).add(u),
                p = f.shape[0], d = f.shape[1] / 4, v = [p, d], m = f.slice([0, 0], v), g = f.slice([0, d], v),
                y = f.slice([0, 2 * d], v), x = f.slice([0, 3 * d], v),
                b = m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(a.add(y).sigmoid())),
                w = b.tanh().mulStrict(x.sigmoid());
            return [b, w]
        }
    }), wl = wn({
        multiRNNCell_: function (t, e, n, r) {
            for (var o = cn(e, "data", "multiRNNCell"), i = ln(n, "c", "multiRNNCell"), a = ln(r, "h", "multiRNNCell"), s = o, u = [], c = 0; c < t.length; c++) {
                var l = t[c](s, i[c], a[c]);
                u.push(l[0]), u.push(l[1]), s = l[1]
            }
            var h = [], f = [];
            for (c = 0; c < u.length; c += 2) h.push(u[c]), f.push(u[c + 1]);
            return [h, f]
        }
    }), Cl = wn({
        movingAverage_: function (t, e, n, r, o) {
            void 0 === o && (o = !0);
            var i = cn(t, "v", "movingAverage"), a = cn(e, "x", "movingAverage"), s = cn(n, "decay", "movingAverage");
            Wt(i, a), P(A(i.shape, a.shape), function () {
                return "Shape mismatch in v and x"
            });
            var u = kn(1), c = u.sub(s), l = a.sub(i).mul(c);
            if (o) {
                P(null != r, function () {
                    return "When using zeroDebias: true, step is required."
                });
                var h = cn(r, "step", "movingAverage");
                l = l.div(u.sub(Ju(s, h)))
            }
            return i.add(l)
        }
    }), El = wn({
        stridedSlice_: function (t, e, n, r, o, i, a, s, u) {
            if (void 0 === o && (o = 0), void 0 === i && (i = 0), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === u && (u = 0), null == r && (r = new Array(e.length)), 0 !== a) throw new Error("ellipsis mask is not yet supported");
            var c = cn(t, "x", "stridedSlice"), l = Jr(s), h = c.shape.slice();
            l.forEach(function (t) {
                e[t] = 0, n[t] = 1, h.splice(t, 0, 1)
            }), c = c.reshape(h);
            for (var f = 0; f < c.rank; f++) e[f] = Zr(o, e, r, c.shape, f), n[f] = to(i, n, r, c.shape, f), r[f] = r[f] || 1;
            var p = Jr(u);
            p.forEach(function (t) {
                n[t] = e[t] + 1, r[t] = 1
            });
            var d = Qr(e, n, r), v = d.filter(function (t, e) {
                return -1 === p.indexOf(e)
            });
            return r.every(function (t) {
                return 1 === t
            }) ? Xc(c, e, d).reshape(v) : Kt.runKernelFunc(function (t) {
                return t.stridedSlice(c, e, n, r)
            }, {$x: c}).reshape(v)
        }
    }), _l = wn({
        topk_: function (t, e, n) {
            void 0 === e && (e = 1), void 0 === n && (n = !0);
            var r = cn(t, "x", "topk");
            if (0 === r.rank) throw new Error("topk() expects the input to be of rank 1 or higher");
            var o = r.shape[r.shape.length - 1];
            if (o < e) throw new Error("'k' passed to topk() must be <= the last dimension (" + o + ") but got " + e);
            var i = Kt.runKernelFunc(function (t) {
                return t.topk(r, e, n)
            }, {$x: r});
            return {values: i[0], indices: i[1]}
        }
    }), Il = wn({
        scatterND_: function (t, e, n) {
            var r = cn(t, "indices", "scatterND", "int32"), o = cn(e, "updates", "scatterND");
            return Kr(o, r, n), Kt.runKernelFunc(function (t) {
                return t.scatterND(r, o, n)
            }, {indices: r, updates: o}, null, "ScatterNd", {shape: n})
        }
    }), Rl = wn({
        fft_: function (t) {
            P("complex64" === t.dtype, function () {
                return "The dtype for tf.spectral.fft() must be complex64 but got " + t.dtype + "."
            });
            var e = t.shape[t.shape.length - 1], n = t.size / e, r = t.as2D(n, e);
            return Kt.runKernelFunc(function (t) {
                return t.fft(r)
            }, {input: t}).reshape(t.shape)
        }
    }), kl = wn({
        ifft_: function (t) {
            P("complex64" === t.dtype, function () {
                return "The dtype for tf.spectral.ifft() must be complex64 but got " + t.dtype + "."
            });
            var e = t.shape[t.shape.length - 1], n = t.size / e, r = t.as2D(n, e);
            return Kt.runKernelFunc(function (t) {
                return t.ifft(r)
            }, {input: t}).reshape(t.shape)
        }
    }), Sl = wn({
        rfft_: function (t, e) {
            P("float32" === t.dtype, function () {
                return "The dtype for rfft() must be real value but got " + t.dtype
            });
            var n, r = t.shape[t.shape.length - 1], o = t.size / r;
            if (null != e && e < r) {
                var i = t.shape.map(function (t) {
                    return 0
                }), a = t.shape.map(function (t) {
                    return t
                });
                a[t.shape.length - 1] = e, n = t.slice(i, a), r = e
            } else if (null != e && r < e) {
                var s = t.shape.map(function (t) {
                    return t
                });
                s[t.shape.length - 1] = e - r, n = t.concat(Pn(s), t.shape.length - 1), r = e
            } else n = t;
            var u = n.zerosLike(), c = Cn(n, u).as2D(o, r), l = Rl(c), h = Math.floor(r / 2) + 1, f = En(l), p = _n(l),
                d = f.split([h, r - h], f.shape.length - 1), v = p.split([h, r - h], p.shape.length - 1),
                m = n.shape.slice();
            return m[n.shape.length - 1] = h, Cn(d[0], v[0]).reshape(m)
        }
    }), Dl = wn({
        irfft_: function (t) {
            var e = t.shape[t.shape.length - 1], n = t.size / e;
            if (e <= 2) {
                var r = t.as2D(n, e), o = kl(r);
                return En(o)
            }
            var i = [n, 2 * (e - 1)], a = En(t).as2D(n, e), s = _n(t).as2D(n, e),
                u = a.slice([0, 1], [n, e - 2]).reverse(1), c = s.slice([0, 1], [n, e - 2]).reverse(1).mul(kn(-1)),
                l = a.concat(u, 1), h = s.concat(c, 1);
            return r = Cn(l, h).as2D(i[0], i[1]), o = kl(r), En(o)
        }
    }), Al = Object.freeze({fft: Rl, ifft: kl, rfft: Sl, irfft: Dl}), Tl = wn({
        sparseToDense_: function (t, e, n, r) {
            void 0 === r && (r = 0);
            var o = cn(t, "sparseIndices", "sparseToDense", "int32"), i = cn(e, "sparseValues", "sparseToDense"),
                a = cn(r, "defaultValue", "sparseToDense", i.dtype);
            return function (t, e, n, r) {
                if ("int32" !== t.dtype) throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + t.dtype + ".");
                if (2 < t.rank) throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + t.shape + ".");
                var o = 0 < t.rank ? t.shape[0] : 1, i = 1 < t.rank ? t.shape[1] : 1;
                if (n.length !== i) throw new Error("outputShape has incorrect number of elements:, " + n.length + ", should be: " + i + ".");
                var a = e.size;
                if (0 !== e.rank && (1 !== e.rank || a !== o)) throw new Error("sparseValues has incorrect shape " + e.shape + ", should be [] or [" + o + "]");
                if (e.dtype !== r.dtype) throw new Error("sparseValues.dtype must match defaultValues.dtype")
            }(o, i, n, a), Kt.runKernelFunc(function (t) {
                return t.sparseToDense(o, i, n, a)
            }, {$sparseIndices: o, $sparseValues: i, $defaultValue: a})
        }
    }), Nl = wn({
        gatherND_: function (t, e) {
            var n = cn(e, "indices", "gatherND", "int32"), r = cn(t, "x", "gatherND");
            return Kt.runKernelFunc(function (t) {
                return t.gatherND(r, n)
            }, {x: r, indices: n}, null, "GatherNd")
        }
    }), Fl = wn({
        diag_: function (t) {
            var e = cn(t, "x", "diag").flatten(), n = t.shape.concat(t.shape);
            return Kt.runKernelFunc(function (t) {
                return t.diag(e)
            }, {$x: e}).reshape(n)
        }
    }), Ml = wn({
        dropout_: function (t, e, n, r) {
            var o = cn(t, "x", "dropout");
            if (P("float32" === o.dtype, function () {
                return "x has to be a floating point tensor since it's going to be scaled, but got a " + o.dtype + " tensor instead."
            }), P(0 <= e && e < 1, function () {
                return "rate must be a float in the range [0, 1), but got " + e + "."
            }), 0 === e) return t instanceof bt ? o.clone() : o;
            var i = function (t, e) {
                if (null == e) return t.shape.slice();
                if (A(t.shape, e)) return e;
                if (t.shape.length !== e.length) return e;
                for (var n = [], r = 0; r < t.shape.length; r++) null == e[r] && null != t.shape[r] ? n.push(t.shape[r]) : n.push(e[r]);
                return n
            }(o, n), a = 1 - e, s = Ar(i, 0, 1, "float32", r).add(a).floor().div(a);
            return o.mul(s)
        }
    });

    function Ol(t, e, n) {
        for (var r = 1 - t % 2, o = new Float32Array(t), i = 0; i < t; ++i) {
            var a = 2 * Math.PI * i / (t + r - 1);
            o[i] = e - n * Math.cos(a)
        }
        return Sn(o, "float32")
    }

    function Pl(v, m, g) {
        return void 0 === g && (g = 1), y(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l, h, f, p, d;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = cn(v, "predictions", "inTopK"), n = cn(m, "targets", "inTopK"), P(1 < e.rank, function () {
                            return "inTopK() expects the predictions to be of rank 2 or higher, but got " + e.rank
                        }), P(e.rank - 1 === n.rank, function () {
                            return "predictions rank should be 1 larger than targets rank, but got predictions rank " + e.rank + " and targets rank " + n.rank
                        }), x(e.shape.slice(0, e.shape.length - 1), n.shape, "predictions's shape should be align with the targets' shape, except the last dimension."), r = e.shape[e.shape.length - 1], P(0 < g && g <= r, function () {
                            return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension (" + r + "), but got " + g
                        }), [4, e.data()];
                    case 1:
                        return o = t.sent(), [4, n.data()];
                    case 2:
                        for (i = t.sent(), a = [o.length / r, r], u = a[1], c = N("bool", s = a[0]), l = 0; l < s; l++) {
                            for (h = l * u, f = o.subarray(h, h + u), p = [], d = 0; d < f.length; d++) p.push({
                                value: f[d],
                                index: d
                            });
                            for (p.sort(function (t, e) {
                                return e.value - t.value
                            }), c[l] = 0, d = 0; d < g; d++) if (p[d].index === i[l]) {
                                c[l] = 1;
                                break
                            }
                        }
                        return v !== e && e.dispose(), m !== n && n.dispose(), [2, In(c, n.shape, "bool")]
                }
            })
        })
    }

    var Bl, Ll, Wl = wn({
        hannWindow_: function (t) {
            return Ol(t, .5, .5)
        }
    }), zl = wn({
        hammingWindow_: function (t) {
            return Ol(t, .54, .46)
        }
    }), Ul = wn({
        frame_: function (t, e, n, r, o) {
            void 0 === r && (r = !1), void 0 === o && (o = 0);
            for (var i = 0, a = []; i + e <= t.size;) a.push(Xc(t, i, e)), i += n;
            if (r) for (; i < t.size;) {
                var s = i + e - t.size, u = Vn([Xc(t, i, e - s), Bn([s], o)]);
                a.push(u), i += n
            }
            return 0 === a.length ? Dn([], [0, e]) : Vn(a).as2D(a.length, e)
        }
    }), Vl = wn({
        stft_: function (t, e, n, r, o) {
            var i;
            void 0 === o && (o = Wl), null == r && (i = e, r = Math.floor(Math.pow(2, Math.ceil(Math.log(i) / Math.log(2)))));
            for (var a = Ul(t, e, n), s = Yu(a, o(e)), u = [], c = 0; c < a.shape[0]; c++) u.push(Sl(s.slice([c, 0], [1, e]), r));
            return Vn(u)
        }
    }), Gl = Object.freeze({hannWindow: Wl, hammingWindow: zl, frame: Ul, stft: Vl});
    (Ll = Bl = Bl || {})[Ll.NONE = 0] = "NONE", Ll[Ll.MEAN = 1] = "MEAN", Ll[Ll.SUM = 2] = "SUM", Ll[Ll.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS";
    var Hl = wn({
        absoluteDifference_: function (t, e, n, r) {
            void 0 === r && (r = Bl.SUM_BY_NONZERO_WEIGHTS);
            var o = cn(t, "labels", "absoluteDifference"), i = cn(e, "predictions", "absoluteDifference"), a = null;
            null != n && (a = cn(n, "weights", "absoluteDifference")), x(o.shape, i.shape, "Error in absoluteDifference: ");
            var s = o.sub(i).abs();
            return ql(s, a, r)
        }
    }), ql = wn({
        computeWeightedLoss_: function (t, e, n) {
            void 0 === n && (n = Bl.SUM_BY_NONZERO_WEIGHTS);
            var r = cn(t, "losses", "computeWeightedLoss"), o = null;
            null != e && (o = cn(e, "weights", "computeWeightedLoss"));
            var i = null == o ? r : r.mul(o);
            if (n === Bl.NONE) return i;
            if (n === Bl.SUM) return i.sum();
            if (n === Bl.MEAN) {
                if (null == o) return i.mean();
                var a = r.size / o.size, s = i.sum().div(o.sum());
                return 1 < a ? s.div(kn(a)) : s
            }
            if (n !== Bl.SUM_BY_NONZERO_WEIGHTS) throw Error("Unknown reduction: " + n);
            if (null == o) return i.sum().div(kn(r.size));
            var u = o.mul(On(r.shape)).notEqual(kn(0)).sum().toFloat();
            return i.sum().div(u)
        }
    }), jl = wn({
        cosineDistance_: function (t, e, n, r, o) {
            void 0 === o && (o = Bl.SUM_BY_NONZERO_WEIGHTS);
            var i = cn(t, "labels", "cosineDistance"), a = cn(e, "predictions", "cosineDistance"), s = null;
            null != r && (s = cn(r, "weights", "cosineDistance")), x(i.shape, a.shape, "Error in cosineDistance: ");
            var u = kn(1).sub(i.mul(a).sum(n, !0));
            return ql(u, s, o)
        }
    }), Kl = wn({
        hingeLoss_: function (t, e, n, r) {
            void 0 === r && (r = Bl.SUM_BY_NONZERO_WEIGHTS);
            var o = cn(t, "labels", "hingeLoss"), i = cn(e, "predictions", "hingeLoss"), a = null;
            null != n && (a = cn(n, "weights", "hingeLoss")), x(o.shape, i.shape, "Error in hingeLoss: ");
            var s = kn(1);
            o = kn(2).mul(o).sub(s);
            var u = s.sub(o.mul(i)).relu();
            return ql(u, a, r)
        }
    }), Xl = wn({
        huberLoss_: function (t, e, n, r, o) {
            void 0 === r && (r = 1), void 0 === o && (o = Bl.SUM_BY_NONZERO_WEIGHTS);
            var i = cn(t, "labels", "huberLoss"), a = cn(e, "predictions", "huberLoss"), s = null;
            null != n && (s = cn(n, "weights", "huberLoss")), x(i.shape, a.shape, "Error in huberLoss: ");
            var u = kn(r), c = a.sub(i).abs(), l = qu(c, u), h = c.sub(l), f = kn(.5).mul(l.square()).add(u.mul(h));
            return ql(f, s, o)
        }
    }), Yl = wn({
        logLoss_: function (t, e, n, r, o) {
            void 0 === r && (r = 1e-7), void 0 === o && (o = Bl.SUM_BY_NONZERO_WEIGHTS);
            var i = cn(t, "labels", "logLoss"), a = cn(e, "predictions", "logLoss"), s = null;
            null != n && (s = cn(n, "weights", "logLoss")), x(i.shape, a.shape, "Error in logLoss: ");
            var u = kn(1), c = kn(r), l = i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));
            return ql(l, s, o)
        }
    }), $l = wn({
        meanSquaredError_: function (t, e, n, r) {
            void 0 === r && (r = Bl.SUM_BY_NONZERO_WEIGHTS);
            var o = cn(t, "labels", "meanSquaredError"), i = cn(e, "predictions", "meanSquaredError"), a = null;
            null != n && (a = cn(n, "weights", "meanSquaredError")), x(o.shape, i.shape, "Error in meanSquaredError: ");
            var s = o.squaredDifference(i);
            return ql(s, a, r)
        }
    }), Jl = wn({
        sigmoidCrossEntropy_: function (t, e, n, r, o) {
            void 0 === r && (r = 0), void 0 === o && (o = Bl.SUM_BY_NONZERO_WEIGHTS);
            var s = cn(t, "multiClassLabels", "sigmoidCrossEntropy"), i = cn(e, "logits", "sigmoidCrossEntropy"),
                a = null;
            if (null != n && (a = cn(n, "weights", "sigmoidCrossEntropy")), x(s.shape, i.shape, "Error in sigmoidCrossEntropy: "), 0 < r) {
                var u = kn(r), c = kn(1), l = kn(.5);
                s = s.mul(c.sub(u)).add(l.mul(u))
            }
            var h = function (t, e) {
                var n = cn(s, "labels", "sigmoidCrossEntropyWithLogits"),
                    r = cn(e, "logits", "sigmoidCrossEntropyWithLogits");
                x(n.shape, r.shape, "Error in sigmoidCrossEntropyWithLogits: ");
                var o = r.relu(), i = r.mul(n), a = r.abs().neg().exp().log1p();
                return o.sub(i).add(a)
            }(0, i);
            return ql(h, a, o)
        }
    }), Ql = wn({
        softmaxCrossEntropy_: function (t, e, n, r, o) {
            void 0 === r && (r = 0), void 0 === o && (o = Bl.SUM_BY_NONZERO_WEIGHTS);
            var i = cn(t, "onehotLabels", "softmaxCrossEntropy"), a = cn(e, "logits", "softmaxCrossEntropy"), s = null;
            if (null != n && (s = cn(n, "weights", "softmaxCrossEntropy")), x(i.shape, a.shape, "Error in softmaxCrossEntropy: "), 0 < r) {
                var u = kn(r), c = kn(1), l = kn(i.shape[1]);
                i = i.mul(c.sub(u)).add(u.div(l))
            }
            var h = function (t, e, i) {
                if (void 0 === i && (i = -1), -1 === i && (i = e.rank - 1), i !== e.rank - 1) throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + e.rank + " and dim was " + i);
                return io(function (t, e, n) {
                    var r = e.logSumExp([i], !0), o = e.toFloat().sub(r);
                    return n([t, o]), {
                        value: o.mul(t).neg().sum([i]), gradFunc: function (t, e) {
                            var n = e[0], r = e[1], o = dn(t.shape, [i]);
                            return [t.reshape(o).mul(n.toFloat().sub(r.exp())), t.reshape(o).mul(r.exp().sub(n.toFloat()))]
                        }
                    }
                })(t, e)
            }(i, a);
            return ql(h, s, o)
        }
    }), Zl = Object.freeze({
        get Reduction() {
            return Bl
        },
        absoluteDifference: Hl,
        computeWeightedLoss: ql,
        cosineDistance: jl,
        hingeLoss: Kl,
        huberLoss: Xl,
        logLoss: Yl,
        meanSquaredError: $l,
        sigmoidCrossEntropy: Jl,
        softmaxCrossEntropy: Ql
    });

    function th(r, o) {
        return void 0 === o && (o = !1), Kt.tidy(function () {
            if (2 !== r.shape.length) throw new Error("qr2d() requires a 2D Tensor, but got a " + r.shape.length + "D Tensor.");
            for (var p = r.shape[0], d = r.shape[1], v = xr(p), m = r.clone(), g = Dn([[1]], [1, 1]), y = g.clone(), t = d <= p ? d : p, e = function (f) {
                var t, e = m, n = y, r = v;
                y = (t = Kt.tidy(function () {
                    var t = m.slice([f, f], [p - f, 1]), e = t.norm(), n = m.slice([f, f], [1, 1]),
                        r = Dn([[-1]]).where(n.greater(0), Dn([[1]])), o = n.sub(r.mul(e)), i = t.div(o);
                    y = 1 === i.shape[0] ? g.clone() : g.concat(i.slice([1, 0], [i.shape[0] - 1, i.shape[1]]), 0);
                    var a = r.matMul(o).div(e).neg(), s = m.slice([f, 0], [p - f, d]), u = a.mul(y);
                    if (0 === f) m = s.sub(u.matMul(y.transpose().matMul(s))); else {
                        var c = s.sub(u.matMul(y.transpose().matMul(s)));
                        m = m.slice([0, 0], [f, d]).concat(c, 0)
                    }
                    var l = v.slice([0, f], [p, v.shape[1] - f]);
                    if (0 === f) v = l.sub(l.matMul(y).matMul(u.transpose())); else {
                        var h = l.sub(l.matMul(y).matMul(u.transpose()));
                        v = v.slice([0, 0], [p, f]).concat(h, 1)
                    }
                    return [y, m, v]
                }))[0], m = t[1], v = t[2], rn([e, n, r])
            }, n = 0; n < t; ++n) e(n);
            return !o && d < p && (v = v.slice([0, 0], [p, d]), m = m.slice([0, 0], [d, d])), [v, m]
        })
    }

    var eh = wn({
        bandPart_: function (t, e, n) {
            if (e % 1 != 0) throw new Error("bandPart(): numLower must be an integer, got " + e + ".");
            if (n % 1 != 0) throw new Error("bandPart(): numUpper must be an integer, got " + n + ".");
            var r = cn(t, "a", "bandPart");
            if (r.rank < 2) throw new Error("bandPart(): Rank must be at least 2, got " + r.rank + ".");
            var o = r.shape, i = r.shape.slice(-2), a = i[0], s = i[1];
            if (!(e <= a)) throw new Error("bandPart(): numLower (" + e + ") must not be greater than the number of rows (" + a + ").");
            if (!(n <= s)) throw new Error("bandPart(): numUpper (" + n + ") must not be greater than the number of columns (" + s + ").");
            e < 0 && (e = a), n < 0 && (n = s);
            var u = Wn(0, a, 1, "int32").reshape([-1, 1]), c = Wn(0, s, 1, "int32"), l = tc(u, c),
                h = Au(l.lessEqual(kn(+e, "int32")), l.greaterEqual(kn(-n, "int32"))), f = Pn([a, s], r.dtype);
            return Mr(Br(r.reshape([-1, a, s])).map(function (t) {
                return Mu(h, t, f)
            })).reshape(o)
        }
    }), nh = wn({
        gramSchmidt_: function (e) {
            var t;
            if (Array.isArray(e)) {
                t = !1, P(null != e && 0 < e.length, function () {
                    return "Gram-Schmidt process: input must not be null, undefined, or empty"
                });
                for (var n = e[0].shape[0], r = function (t) {
                    P(e[t].shape[0] === n, function () {
                        return "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + e[t].shape[0] + " vs. " + n + ")"
                    })
                }, o = 1; o < e.length; ++o) r(o)
            } else t = !0, e = Kn(e, e.shape[0], 0).map(function (t) {
                return Fr(t, [0])
            });
            P(e.length <= e[0].shape[0], function () {
                return "Gram-Schmidt: Number of vectors (" + e.length + ") exceeds number of dimensions (" + e[0].shape[0] + ")."
            });

            function i(r) {
                a.push(Kt.tidy(function () {
                    var t = s[r];
                    if (0 < r) for (var e = 0; e < r; ++e) {
                        var n = cl(a[e].mulStrict(t)).mul(a[e]);
                        t = t.sub(n)
                    }
                    return t.div(xl(t, "euclidean"))
                }))
            }

            var a = [], s = e;
            for (o = 0; o < e.length; ++o) i(o);
            return t ? Mr(a, 0) : a
        }
    }), rh = wn({
        qr_: function (t, o) {
            if (void 0 === o && (o = !1), t.rank < 2) throw new Error("qr() requires input tensor to have a rank >= 2, but got rank " + t.rank);
            if (2 === t.rank) return th(t, o);
            var e = t.shape.slice(0, t.shape.length - 2).reduce(function (t, e) {
                return t * e
            }), n = Br(t.reshape([e, t.shape[t.shape.length - 2], t.shape[t.shape.length - 1]]), 0), i = [], a = [];
            return n.forEach(function (t) {
                var e = th(t, o), n = e[0], r = e[1];
                i.push(n), a.push(r)
            }), [Mr(i, 0).reshape(t.shape), Mr(a, 0).reshape(t.shape)]
        }
    }), oh = Object.freeze({bandPart: eh, gramSchmidt: nh, qr: rh});

    function ih(t, e, n, r, o, i) {
        null == r && (r = .5), null == o && (o = Number.NEGATIVE_INFINITY), null == i && (i = 0);
        var a = t.shape[0];
        return n = Math.min(n, a), P(0 <= r && r <= 1, function () {
            return "iouThreshold must be in [0, 1], but was '" + r + "'"
        }), P(2 === t.rank, function () {
            return "boxes must be a 2D tensor, but was of rank '" + t.rank + "'"
        }), P(4 === t.shape[1], function () {
            return "boxes must have 4 columns, but 2nd dimension was " + t.shape[1]
        }), P(1 === e.rank, function () {
            return "scores must be a 1D tensor"
        }), P(e.shape[0] === a, function () {
            return "scores has incompatible shape with boxes. Expected " + a + ", but was " + e.shape[0]
        }), P(0 <= i && i <= 1, function () {
            return "softNmsSigma must be in [0, 1], but was '" + i + "'"
        }), {maxOutputSize: n, iouThreshold: r, scoreThreshold: o, softNmsSigma: i}
    }

    function ah(t, e) {
        return !(0 < t) || "linear" === e
    }

    function sh(t, e, n) {
        if (null == n || "linear" === n) return t;
        if ("relu" === n) return t.mul(e.step());
        throw new Error("Gradient for activation " + n + " has not been implemented yet.")
    }

    function uh(t, e) {
        var n = e, r = mo(t.shape, e.shape);
        return 0 < r.length && (n = n.sum(r)), n.reshape(t.shape)
    }

    function ch(t, e, n) {
        if ("linear" === e) return t;
        if ("relu" === e) return dl(t);
        if ("elu" === e) return hl(t);
        if ("relu6" === e) return vl(t);
        if ("prelu" === e) return pl(t, n);
        throw new Error("Unknown fused activation " + e + ".")
    }

    var lh = wn({
        resizeBilinear_: function (t, e, r) {
            void 0 === r && (r = !1);
            var n = cn(t, "images", "resizeBilinear");
            P(3 === n.rank || 4 === n.rank, function () {
                return "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + n.rank + "."
            }), P(2 === e.length, function () {
                return "Error in resizeBilinear: new shape must 2D, but got shape " + e + "."
            });
            var o = n, i = !1;
            3 === n.rank && (i = !0, o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]));
            var a = e[0], s = e[1], u = Kt.runKernelFunc(function (t, e) {
                return e([o]), t.resizeBilinear(o, a, s, r)
            }, {x: o}, function (e, n) {
                return {
                    x: function () {
                        return Kt.runKernelFunc(function (t) {
                            return t.resizeBilinearBackprop(e, n[0], r)
                        }, {})
                    }
                }
            }, "ResizeBilinear", {alignCorners: r, newHeight: a, newWidth: s});
            return i ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u
        }
    }), hh = wn({
        resizeNearestNeighbor_: function (t, e, r) {
            void 0 === r && (r = !1);
            var n = cn(t, "images", "resizeNearestNeighbor");
            P(3 === n.rank || 4 === n.rank, function () {
                return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + n.rank + "."
            }), P(2 === e.length, function () {
                return "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + e + "."
            }), P("float32" === n.dtype || "int32" === n.dtype, function () {
                return "`images` must have `int32` or `float32` as dtype"
            });
            var o = n, i = !1;
            3 === n.rank && (i = !0, o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]));
            var a = e[0], s = e[1], u = Kt.runKernelFunc(function (t, e) {
                return e([o]), t.resizeNearestNeighbor(o, a, s, r)
            }, {batchImages: o}, function (e, n) {
                return {
                    batchImages: function () {
                        return Kt.runKernelFunc(function (t) {
                            return t.resizeNearestNeighborBackprop(e, n[0], r)
                        }, {})
                    }
                }
            });
            return i ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u
        }
    }), fh = wn({
        nonMaxSuppression_: function (t, e, n, r, o) {
            void 0 === r && (r = .5), void 0 === o && (o = Number.NEGATIVE_INFINITY);
            var i = cn(t, "boxes", "nonMaxSuppression"), a = cn(e, "scores", "nonMaxSuppression"),
                s = ih(i, a, n, r, o);
            n = s.maxOutputSize, r = s.iouThreshold, o = s.scoreThreshold;
            var u = {maxOutputSize: n, iouThreshold: r, scoreThreshold: o};
            return Kt.runKernelFunc(function (t) {
                return t.nonMaxSuppression(i, a, n, r, o)
            }, {boxes: i, scores: a}, null, "NonMaxSuppressionV3", u)
        }
    }), ph = wn({
        nonMaxSuppressionWithScore_: function (t, e, n, r, o, i) {
            void 0 === r && (r = .5), void 0 === o && (o = Number.NEGATIVE_INFINITY), void 0 === i && (i = 0);
            var a = cn(t, "boxes", "nonMaxSuppression"), s = cn(e, "scores", "nonMaxSuppression"),
                u = ih(a, s, n, r, o, i), c = {
                    maxOutputSize: n = u.maxOutputSize,
                    iouThreshold: r = u.iouThreshold,
                    scoreThreshold: o = u.scoreThreshold,
                    softNmsSigma: i = u.softNmsSigma
                }, l = Kt.runKernel("NonMaxSuppressionV5", {boxes: a, scores: s}, c);
            return {selectedIndices: l[0], selectedScores: l[1]}
        }
    }), dh = wn({
        cropAndResize_: function (t, e, n, r, o, i) {
            var a = cn(t, "image", "cropAndResize"), s = cn(e, "boxes", "cropAndResize", "float32"),
                u = cn(n, "boxInd", "cropAndResize", "int32");
            o = o || "bilinear", i = i || 0;
            var c = s.shape[0];
            return P(4 === a.rank, function () {
                return "Error in cropAndResize: image must be rank 4,but got rank " + a.rank + "."
            }), P(2 === s.rank && 4 === s.shape[1], function () {
                return "Error in cropAndResize: boxes must be have size [" + c + ",4] but had shape " + s.shape + "."
            }), P(1 === u.rank && u.shape[0] === c, function () {
                return "Error in cropAndResize: boxInd must be have size [" + c + "] but had shape " + s.shape + "."
            }), P(2 === r.length, function () {
                return "Error in cropAndResize: cropSize must be of length 2, but got length " + r.length + "."
            }), P(1 <= r[0] && 1 <= r[1], function () {
                return "cropSize must be atleast [1,1], but was " + r
            }), P("bilinear" === o || "nearest" === o, function () {
                return "method must be bilinear or nearest, but was " + o
            }), Kt.runKernelFunc(function (t, e) {
                return t.cropAndResize(a, s, u, r, o, i)
            }, {images: a, boxes: s, boxInd: u}, null, "CropAndResize", {method: o, extrapolationValue: i, cropSize: r})
        }
    }), vh = Object.freeze({
        resizeBilinear: lh,
        resizeNearestNeighbor: hh,
        nonMaxSuppression: fh,
        nonMaxSuppressionAsync: function (u, c, l, h, f) {
            return void 0 === h && (h = .5), void 0 === f && (f = Number.NEGATIVE_INFINITY), y(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = cn(u, "boxes", "nonMaxSuppressionAsync"), n = cn(c, "scores", "nonMaxSuppressionAsync"), r = ih(e, n, l, h, f), l = r.maxOutputSize, h = r.iouThreshold, f = r.scoreThreshold, [4, Promise.all([e.data(), n.data()])];
                        case 1:
                            return o = t.sent(), i = o[0], a = o[1], s = Bo(i, a, l, h, f), e !== u && e.dispose(), n !== c && n.dispose(), [2, s]
                    }
                })
            })
        },
        nonMaxSuppressionWithScore: ph,
        nonMaxSuppressionWithScoreAsync: function (u, c, l, h, f, p) {
            return void 0 === h && (h = .5), void 0 === f && (f = Number.NEGATIVE_INFINITY), void 0 === p && (p = 0), y(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = cn(u, "boxes", "nonMaxSuppressionAsync"), n = cn(c, "scores", "nonMaxSuppressionAsync"), r = ih(e, n, l, h, f, p), l = r.maxOutputSize, h = r.iouThreshold, f = r.scoreThreshold, p = r.softNmsSigma, [4, Promise.all([e.data(), n.data()])];
                        case 1:
                            return o = t.sent(), i = o[0], a = o[1], s = Lo(i, a, l, h, f, p), e !== u && e.dispose(), n !== c && n.dispose(), [2, s]
                    }
                })
            })
        },
        cropAndResize: dh
    }), mh = wn({
        fusedMatMul_: function (t) {
            var e, n = t.a, r = t.b, o = t.transposeA, s = void 0 !== o && o, i = t.transposeB, u = void 0 !== i && i,
                c = t.bias, a = t.activation, l = void 0 === a ? "linear" : a, h = t.preluActivationWeights;
            if (!1 === ah(Kt.state.gradientDepth, l)) {
                var f = Fc(n, r, s, u);
                return null != c && (f = Ou(f, c)), ch(f, l, h)
            }
            var p = cn(n, "a", "fused matMul"), d = cn(r, "b", "fused matMul");
            e = Lt(p, d), p = e[0], d = e[1];
            var v = s ? p.shape[p.rank - 2] : p.shape[p.rank - 1], m = u ? d.shape[d.rank - 1] : d.shape[d.rank - 2],
                g = s ? p.shape[p.rank - 1] : p.shape[p.rank - 2], y = u ? d.shape[d.rank - 2] : d.shape[d.rank - 1],
                x = p.shape.slice(0, -2), b = d.shape.slice(0, -2), w = L(x), C = L(b);
            P(2 <= p.rank && 2 <= d.rank && p.rank === d.rank, function () {
                return "Error in fused matMul: inputs must have the same rank of at least 2, got ranks " + p.rank + " and " + d.rank + "."
            }), P(A(x, b), function () {
                return "Error in fused matMul: outer dimensions (" + x + ") and (" + b + ") of Tensors with shapes " + p.shape + " and " + d.shape + " must match."
            }), P(v === m, function () {
                return "Error in fused matMul: inner shapes (" + v + ") and (" + m + ") of Tensors with shapes " + p.shape + " and " + d.shape + " and transposeA=" + s + " and transposeB=" + u + " must match."
            });
            var E, _, I = p.shape.slice(0, -2).concat([g, y]), R = s ? p.as3D(w, v, g) : p.as3D(w, g, v),
                k = u ? d.as3D(C, y, m) : d.as3D(C, m, y);
            null != c && go(I, (E = Lt(E = cn(c, "bias", "fused matMul"), p)[0]).shape), null != h && (_ = cn(h, "prelu weights", "fused matMul"));
            var S = {a: R, b: k};
            null != c && (S.bias = E), null != h && (S.preluActivationWeights = _);
            var D = [R, k];
            return Kt.runKernelFunc(function (t, e) {
                var n = t.fusedBatchMatMul({
                    a: R,
                    b: k,
                    transposeA: s,
                    transposeB: u,
                    bias: E,
                    activation: l,
                    preluActivationWeights: _
                });
                return e([R, k, n]), n
            }, S, function (t, e) {
                var n = e[0], r = e[1], o = e[2], i = sh(t, o, l), a = {};
                return null != c && (a = {
                    bias: function () {
                        return uh(E, i)
                    }
                }), s || u ? !s && u ? Object.assign({
                    a: function () {
                        return i.matMul(r, !1, !1)
                    }, b: function () {
                        return i.matMul(n, !0, !1)
                    }
                }, a) : s && !u ? Object.assign({
                    a: function () {
                        return r.matMul(i, !1, !0)
                    }, b: function () {
                        return n.matMul(i, !1, !1)
                    }
                }, a) : Object.assign({
                    a: function () {
                        return r.matMul(i, !0, !0)
                    }, b: function () {
                        return i.matMul(n, !0, !0)
                    }
                }, a) : Object.assign({
                    a: function () {
                        return i.matMul(r, !1, !0)
                    }, b: function () {
                        return n.matMul(i, !0, !1)
                    }
                }, a)
            }, "_FusedMatMul", {transposeA: s, transposeB: u, activation: l}, D, [!0]).reshape(I)
        }
    }), gh = wn({
        fusedConv2d_: function (t) {
            var e = t.x, n = t.filter, u = t.strides, c = t.pad, r = t.dataFormat, o = void 0 === r ? "NHWC" : r,
                i = t.dilations, l = void 0 === i ? [1, 1] : i, a = t.dimRoundingMode, h = t.bias, s = t.activation,
                f = void 0 === s ? "linear" : s, p = t.preluActivationWeights;
            if (f = f || "linear", !1 === ah(Kt.state.gradientDepth, f)) {
                var d = Ec(e, n, u, c, o, l, a);
                return null != h && (d = Ou(d, h)), ch(d, f, p)
            }
            var v = cn(e, "x", "conv2d"), m = cn(n, "filter", "conv2d"), g = v, y = !1;
            3 === v.rank && (y = !0, g = v.as4D(1, v.shape[0], v.shape[1], v.shape[2])), P(4 === g.rank, function () {
                return "Error in fused conv2d: input must be rank 4, but got rank " + g.rank + "."
            }), P(4 === m.rank, function () {
                return "Error in fused conv2d: filter must be rank 4, but got rank " + m.rank + "."
            }), null != a && P(B(c), function () {
                return "Error in fused conv2d: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + c + "."
            }), P(g.shape[3] === m.shape[2], function () {
                return "Error in conv2d: depth of input (" + g.shape[3] + ") must match input depth for filter " + m.shape[2] + "."
            }), P(So(u, l), function () {
                return "Error in conv2D: Either strides or dilations must be 1. Got strides " + u + " and dilations '" + l + "'"
            }), P("NHWC" === o, function () {
                return "Error in conv2d: got dataFormat of " + o + " but only NHWC is currently supported."
            });
            var x, b, w = bo(g.shape, m.shape, u, l, c, a);
            null != h && (x = Lt(x = cn(h, "bias", "fused conv2d"), v)[0], go(w.outShape, x.shape)), null != p && (b = cn(p, "prelu weights", "fused conv2d"));
            var C = {x: g, filter: m};
            null != h && (C.bias = x), null != p && (C.preluActivationWeights = b);
            var E = [m, g], _ = Kt.runKernelFunc(function (t, e) {
                var n = t.fusedConv2d({
                    input: g,
                    filter: m,
                    convInfo: w,
                    bias: x,
                    activation: f,
                    preluActivationWeights: b
                });
                return e([m, g, n]), n
            }, C, function (t, e) {
                var n = e, r = n[0], o = n[1], i = n[2], a = sh(t, i, f);
                P(ko(l), function () {
                    return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + l + "'"
                });
                var s = {};
                return null != h && (s = {
                    bias: function () {
                        return uh(x, a)
                    }
                }), Object.assign({
                    x: function () {
                        return Rc(o.shape, a, r, u, c)
                    }, filter: function () {
                        return Ic(o, a, r.shape, u, c)
                    }
                }, s)
            }, "FusedConv2D", {convInfo: w, activation: f}, E, [!0]);
            return y ? _.as3D(_.shape[1], _.shape[2], _.shape[3]) : _
        }
    }), yh = wn({
        fusedDepthwiseConv2d_: function (t) {
            var e = t.x, n = t.filter, r = t.strides, o = t.pad, i = t.dataFormat, a = void 0 === i ? "NHWC" : i,
                s = t.dilations, u = void 0 === s ? [1, 1] : s, c = t.dimRoundingMode, l = t.bias, h = t.activation,
                f = void 0 === h ? "linear" : h, p = t.preluActivationWeights;
            if (!1 === ah(Kt.state.gradientDepth, f)) {
                var d = kc(e, n, r, o, a, u, c);
                return null != l && (d = Ou(d, l)), ch(d, f, p)
            }
            var v = cn(e, "x", "depthwiseConv2d"), m = cn(n, "filter", "depthwiseConv2d"), g = v, y = !1;
            3 === v.rank && (y = !0, g = v.as4D(1, v.shape[0], v.shape[1], v.shape[2])), P(4 === g.rank, function () {
                return "Error in fused depthwiseConv2d: input must be rank 4, but got rank " + g.rank + "."
            }), P(4 === m.rank, function () {
                return "Error in fused depthwiseConv2d: filter must be rank 4, but got rank " + m.rank + "."
            }), P(g.shape[3] === m.shape[2], function () {
                return "Error in fused depthwiseConv2d: number of input channels (" + g.shape[3] + ") must match the inChannels dimension in filter " + m.shape[2] + "."
            }), null == u && (u = [1, 1]), P(So(r, u), function () {
                return "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + u + "'"
            }), null != c && P(B(o), function () {
                return "Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode " + c + " but got pad " + o + "."
            });
            var x, b, w = bo(g.shape, m.shape, r, u, o, c, !0);
            null != l && (x = Lt(x = cn(l, "bias", "fused conv2d"), v)[0], go(w.outShape, x.shape)), null != p && (b = cn(p, "prelu weights", "fused depthwiseConv2d"));
            var C = {x: g, filter: m};
            null != l && (C.bias = x), null != p && (C.preluActivationWeights = b);
            var E = [m, g], _ = Kt.runKernelFunc(function (t, e) {
                var n = t.fusedDepthwiseConv2D({
                    input: g,
                    filter: m,
                    convInfo: w,
                    bias: x,
                    activation: f,
                    preluActivationWeights: b
                });
                return e([m, g, n]), n
            }, C, function (t, e) {
                P(ko(u), function () {
                    return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + u + "'"
                });
                var n = e[0], r = e[1], o = e[2], i = sh(t, o, f), a = {};
                return null != l && (a = {
                    bias: function () {
                        return uh(x, i)
                    }
                }), Object.assign({
                    x: function () {
                        return Sc(r.shape, i, n, w)
                    }, filter: function () {
                        return Dc(r, i, n.shape, w)
                    }
                }, a)
            }, "FusedDepthwiseConv2D", {convInfo: w, activation: f}, E, [!0]);
            return y ? _.as3D(_.shape[1], _.shape[2], _.shape[3]) : _
        }
    }), xh = Object.freeze({matMul: mh, conv2d: gh, depthwiseConv2d: yh}), bh = Object.freeze({
        image: vh,
        linalg: oh,
        losses: Zl,
        spectral: Al,
        fused: xh,
        signal: Gl,
        square: Ns,
        squaredDifference: Ms,
        conv1d: Cc,
        conv2d: Ec,
        conv3d: _c,
        depthwiseConv2d: kc,
        separableConv2d: Ac,
        conv2dTranspose: Tc,
        conv3dTranspose: Nc,
        op: wn,
        batchNormalization2d: Cu,
        batchNormalization3d: Eu,
        batchNormalization4d: _u,
        batchNormalization: Iu,
        batchNorm: Ru,
        batchNorm2d: ku,
        batchNorm3d: Su,
        batchNorm4d: Du,
        booleanMaskAsync: mc,
        complex: Cn,
        real: En,
        imag: _n,
        concat: Vn,
        concat1d: Gn,
        concat2d: Hn,
        concat3d: qn,
        concat4d: jn,
        split: Kn,
        matMul: Fc,
        dot: Mc,
        outerProduct: Oc,
        reverse: Pc,
        reverse1d: Bc,
        reverse2d: Lc,
        reverse3d: Wc,
        reverse4d: zc,
        maxPool: Gc,
        avgPool: Hc,
        pool: qc,
        maxPool3d: jc,
        avgPool3d: Kc,
        slice: Xc,
        slice1d: Yc,
        slice2d: $c,
        slice3d: Jc,
        slice4d: Qc,
        abs: Os,
        acos: Ps,
        acosh: Bs,
        asin: Ls,
        asinh: Ws,
        atan: zs,
        atanh: Us,
        ceil: Vs,
        clipByValue: Gs,
        cos: Hs,
        cosh: qs,
        erf: js,
        exp: Ks,
        expm1: Xs,
        floor: Ys,
        log: $s,
        log1p: Js,
        logSigmoid: Qs,
        neg: Zs,
        reciprocal: tu,
        round: eu,
        rsqrt: nu,
        sigmoid: ru,
        sign: ou,
        isNaN: iu,
        isInf: au,
        isFinite: su,
        sin: uu,
        sinh: cu,
        softplus: lu,
        sqrt: hu,
        step: fu,
        tan: pu,
        tanh: du,
        all: tl,
        any: el,
        argMax: nl,
        argMin: rl,
        logSumExp: ol,
        max: il,
        mean: al,
        min: sl,
        moments: ul,
        sum: cl,
        prod: ll,
        equal: nc,
        equalStrict: rc,
        greater: oc,
        greaterEqual: ic,
        greaterEqualStrict: ac,
        greaterStrict: sc,
        less: uc,
        lessEqual: cc,
        lessEqualStrict: lc,
        lessStrict: hc,
        notEqual: fc,
        notEqualStrict: pc,
        add: Ou,
        addN: Pu,
        addStrict: Bu,
        atan2: Lu,
        div: Wu,
        divNoNan: zu,
        divStrict: Uu,
        floorDiv: Vu,
        maximum: Gu,
        maximumStrict: Hu,
        minimum: qu,
        minimumStrict: ju,
        mod: Ku,
        modStrict: Xu,
        mul: Yu,
        mulStrict: $u,
        pow: Ju,
        powStrict: Qu,
        squaredDifferenceStrict: Zu,
        sub: tc,
        subStrict: ec,
        elu: hl,
        leakyRelu: fl,
        prelu: pl,
        relu: dl,
        relu6: vl,
        selu: ml,
        logicalAnd: Au,
        logicalNot: Tu,
        logicalOr: Nu,
        logicalXor: Fu,
        where: Mu,
        whereAsync: wu,
        buffer: cr,
        print: lr,
        batchToSpaceND: fr,
        broadcastTo: pr,
        cast: dr,
        clone: vr,
        cumsum: mr,
        depthToSpace: gr,
        expandDims: yr,
        eye: xr,
        multinomial: br,
        oneHot: wr,
        pad: Cr,
        pad1d: Er,
        pad2d: _r,
        pad3d: Ir,
        pad4d: Rr,
        rand: kr,
        randomNormal: Sr,
        randomGamma: Dr,
        randomUniform: Ar,
        reshape: Tr,
        spaceToBatchND: Nr,
        squeeze: Fr,
        stack: Mr,
        tile: Or,
        truncatedNormal: Pr,
        unstack: Br,
        setdiff1dAsync: hr,
        fill: Bn,
        linspace: Ln,
        ones: On,
        range: Wn,
        scalar: kn,
        tensor: In,
        tensor1d: Sn,
        tensor2d: Dn,
        tensor3d: An,
        tensor4d: Tn,
        tensor5d: Nn,
        tensor6d: Fn,
        variable: Mn,
        zeros: Pn,
        onesLike: zn,
        zerosLike: Un,
        transpose: gl,
        softmax: so,
        logSoftmax: uo,
        localResponseNormalization: yl,
        norm: xl,
        gather: gc,
        unsortedSegmentSum: yc,
        basicLSTMCell: bl,
        multiRNNCell: wl,
        movingAverage: Cl,
        stridedSlice: El,
        topk: _l,
        scatterND: Il,
        fft: Rl,
        ifft: kl,
        rfft: Sl,
        irfft: Dl,
        sparseToDense: Tl,
        gatherND: Nl,
        diag: Fl,
        dropout: Ml,
        hannWindow: Wl,
        hammingWindow: zl,
        frame: Ul,
        stft: Vl,
        inTopKAsync: Pl
    });

    function wh(t, e) {
        Array.isArray(t) || (t = [t]), t.forEach(function (t) {
            null != t && P("complex64" !== t.dtype, function () {
                return e + " does not support complex64 tensors."
            })
        })
    }

    function Ch(t, e, n, r) {
        if ("linear" === n) return t.linear(e);
        if ("relu" === n) return t.relu(e);
        if ("elu" === n) return t.elu(e);
        if ("relu6" === n) return t.relu6(e);
        if ("prelu" === n) return t.prelu(e, r);
        throw new Error("Activation " + n + " has not been implemented for the CPU backend.")
    }

    var Eh, _h = (t(Ih, Eh = lo), Ih.prototype.write = function (t, e, n) {
        this.firstUse && (this.firstUse = !1, _().get("IS_NODE") && an("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"));
        var r = {};
        return this.data.set(r, {values: t, dtype: n}), r
    }, Ih.prototype.move = function (t, e, n, r) {
        this.data.set(t, {values: e, dtype: r})
    }, Ih.prototype.numDataIds = function () {
        return this.data.numDataIds()
    }, Ih.prototype.read = function (e) {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                return [2, this.readSync(e)]
            })
        })
    }, Ih.prototype.readSync = function (t) {
        var e = this.data.get(t), n = e.dtype, r = e.complexTensors;
        return "complex64" === n ? Mo(this.readSync(r.real.dataId), this.readSync(r.imag.dataId)) : this.data.get(t).values
    }, Ih.prototype.bufferSync = function (t) {
        var e = this.readSync(t.dataId), n = e;
        if ("string" === t.dtype) try {
            n = e.map(function (t) {
                return rt(t)
            })
        } catch (t) {
            throw new Error("Failed to decode encoded string bytes into utf-8")
        }
        return cr(t.shape, t.dtype, n)
    }, Ih.prototype.makeOutput = function (t, e, n) {
        var r = this.write(t, e, n);
        return Kt.makeTensorFromDataId(r, e, n, this)
    }, Ih.prototype.disposeData = function (t) {
        if (this.data.has(t)) {
            var e = this.data.get(t).complexTensors;
            null != e && (e.real.dispose(), e.imag.dispose()), this.data.delete(t)
        }
    }, Ih.prototype.time = function (n) {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                return e = tt(), n(), [2, {kernelMs: tt() - e}]
            })
        })
    }, Ih.prototype.memory = function () {
        return {
            unreliable: !0,
            reasons: ["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]
        }
    }, Ih.prototype.complex = function (t, e) {
        var n = this.makeOutput(null, t.shape, "complex64");
        return this.data.get(n.dataId).complexTensors = {real: Kt.keep(t.clone()), imag: Kt.keep(e.clone())}, n
    }, Ih.prototype.real = function (t) {
        return this.data.get(t.dataId).complexTensors.real.clone()
    }, Ih.prototype.imag = function (t) {
        return this.data.get(t.dataId).complexTensors.imag.clone()
    }, Ih.prototype.slice = function (t, n, e) {
        if (wh(t, "slice"), eo(t.shape, n, e)) {
            var r = no(n, t.strides), o = L(e);
            return In(this.readSync(t.dataId).subarray(r, r + o), e, t.dtype)
        }
        for (var i = cr(e, t.dtype), a = this.bufferSync(t), s = 0; s < i.size; ++s) {
            var u = i.indexToLoc(s).map(function (t, e) {
                return t + n[e]
            });
            i.values[s] = a.get.apply(a, u)
        }
        return i.toTensor()
    }, Ih.prototype.stridedSlice = function (t, e, n, r) {
        wh(t, "stridedSlice");
        var o = Qr(e, n, r);
        if (o.some(function (t) {
            return 0 === t
        })) return In([], o);
        for (var i = cr(o, t.dtype), a = this.bufferSync(t), s = 0; s < i.size; s++) {
            for (var u = i.indexToLoc(s), c = new Array(u.length), l = 0; l < c.length; l++) c[l] = u[l] * r[l] + e[l];
            i.set.apply(i, [a.get.apply(a, c)].concat(u))
        }
        return i.toTensor()
    }, Ih.prototype.diag = function (t) {
        for (var e = this.readSync(t.dataId), n = cr([t.size, t.size], t.dtype), r = n.values, o = 0; o < e.length; o++) r[o * t.size + o] = e[o];
        return n.toTensor()
    }, Ih.prototype.unstack = function (t, e) {
        for (var n = t.shape[e], r = new Array(t.rank - 1), o = 0, i = 0; i < t.rank; i++) i !== e && (r[o++] = t.shape[i]);
        var a = new Array(t.rank).fill(0), s = t.shape.slice();
        s[e] = 1;
        var u = new Array(n);
        for (i = 0; i < u.length; i++) u[a[e] = i] = this.slice(t, a, s).reshape(r);
        return u
    }, Ih.prototype.reverse = function (r, o) {
        wh(r, "reverse");
        for (var i = cr(r.shape, r.dtype), a = this.bufferSync(r), t = function (t) {
            var e = i.indexToLoc(t), n = e.slice();
            o.forEach(function (t) {
                return n[t] = r.shape[t] - 1 - n[t]
            }), i.set.apply(i, [a.get.apply(a, n)].concat(e))
        }, e = 0; e < i.size; e++) t(e);
        return i.toTensor()
    }, Ih.prototype.concat = function (t, n) {
        var a = this;
        if ("complex64" === t[0].dtype) {
            var e = t.map(function (t) {
                return En(t)
            }), r = t.map(function (t) {
                return _n(t)
            });
            return Cn(this.concat(e, n), this.concat(r, n))
        }
        var o = t.map(function (t) {
            var e = L(t.shape.slice(n));
            return t.as2D(-1, e)
        }), s = bn(o.map(function (t) {
            return t.shape
        }), 1), u = cr(s, t[0].dtype).values;
        if (1 === o[0].shape[0]) {
            var i = 0;
            o.forEach(function (t) {
                u.set(a.readSync(t.dataId), i), i += t.size
            })
        } else {
            var c = 0;
            o.forEach(function (t) {
                for (var e = a.readSync(t.dataId), n = 0, r = 0; r < t.shape[0]; ++r) for (var o = r * s[1] + c, i = 0; i < t.shape[1]; ++i) u[o + i] = e[n++];
                c += t.shape[1]
            })
        }
        var l = bn(t.map(function (t) {
            return t.shape
        }), n);
        return In(u, l, t[0].dtype)
    }, Ih.prototype.neg = function (t) {
        return wh(t, "neg"), this.multiply(kn(-1), t)
    }, Ih.prototype.add = function (t, e) {
        return "complex64" === t.dtype || "complex64" === e.dtype ? this.broadcastedBinaryComplexOp(t.cast("complex64"), e.cast("complex64"), function (t, e, n, r) {
            return {real: t + n, imag: e + r}
        }) : this.broadcastedBinaryOp(t, e, Pt(t.dtype, e.dtype), function (t, e) {
            return t + e
        })
    }, Ih.prototype.addN = function (t) {
        var e = this;
        wh(t, "addN");
        for (var n = t.map(function (t) {
            return e.readSync(t.dataId)
        }), r = cr(t[0].shape, t[0].dtype), o = r.values, i = 0; i < t.length; i++) for (var a = n[i], s = 0; s < o.length; s++) o[s] += a[s];
        return r.toTensor()
    }, Ih.prototype.softmax = function (t, e) {
        var n = D([e], t.shape), r = this.max(t, n), o = dn(r.shape, n), i = this.subtract(t, r.reshape(o)),
            a = this.exp(i), s = this.sum(a, n).reshape(o);
        return this.realDivide(a, s)
    }, Ih.prototype.subtract = function (t, e) {
        return "complex64" === t.dtype || "complex64" === e.dtype ? this.broadcastedBinaryComplexOp(t.cast("complex64"), e.cast("complex64"), function (t, e, n, r) {
            return {real: t - n, imag: e - r}
        }) : this.broadcastedBinaryOp(t, e, Pt(t.dtype, e.dtype), function (t, e) {
            return t - e
        })
    }, Ih.prototype.pow = function (t, e) {
        return wh([t, e], "pow"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
            return Math.pow(t, e)
        })
    }, Ih.prototype.batchMatMul = function (t, e, n, r) {
        wh([t, e], "matMul");
        for (var o = n ? t.shape[1] : t.shape[2], i = n ? t.shape[2] : t.shape[1], a = r ? e.shape[1] : e.shape[2], s = t.shape[0], u = this.readSync(t.dataId), c = this.readSync(e.dataId), l = n ? [t.strides[0], 1, t.strides[1]] : [t.strides[0], t.strides[1], 1], h = l[0], f = l[1], p = l[2], d = r ? [1, e.strides[1], e.strides[0]] : [e.strides[1], 1, e.strides[0]], v = d[0], m = d[1], g = d[2], y = i * a, x = cr([s, i, a], t.dtype), b = x.values, w = this.blockSize, C = 0; C < s; C++) for (var E = 0; E < i; E += w) for (var _ = 0; _ < a; _ += w) for (var I = 0; I < o; I += w) for (var R = Math.min(E + w, i), k = Math.min(_ + w, a), S = Math.min(I + w, o), D = E; D < R; D++) for (var A = _; A < k; A++) {
            for (var T = 0, N = I; N < S; N++) T += u[C * h + D * f + N * p] * c[N * v + A * m + C * g];
            b[C * y + (D * a + A)] += T
        }
        return x.toTensor()
    }, Ih.prototype.fusedBatchMatMul = function (t) {
        var e = t.a, n = t.b, r = t.transposeA, o = t.transposeB, i = t.bias, a = t.activation,
            s = t.preluActivationWeights, u = this.batchMatMul(e, n, r, o);
        return i && (u = this.add(u, i)), a && (u = Ch(this, u, a, s)), u
    }, Ih.prototype.multiply = function (t, e) {
        return "complex64" === t.dtype || "complex64" === e.dtype ? this.broadcastedBinaryComplexOp(t.cast("complex64"), e.cast("complex64"), function (t, e, n, r) {
            return {real: t * n - e * r, imag: t * r + e * n}
        }) : this.broadcastedBinaryOp(t, e, Pt(t.dtype, e.dtype), function (t, e) {
            return t * e
        })
    }, Ih.prototype.realDivide = function (t, e) {
        return wh([t, e], "realDivide"), this.broadcastedBinaryOp(t, e, "float32", function (t, e) {
            return t / e
        })
    }, Ih.prototype.floorDiv = function (t, e) {
        return wh([t, e], "floorDiv"), this.broadcastedBinaryOp(t, e, "int32", function (t, e) {
            return Math.floor(t / e)
        })
    }, Ih.prototype.sum = function (t, e) {
        wh(t, "sum"), vn("sum", e, t.rank);
        for (var n = pn(t.shape, e), r = n[0], o = n[1], i = Pn(r, Pt(t.dtype, "int32")), a = L(o), s = this.readSync(i.dataId), u = this.readSync(t.dataId), c = 0; c < s.length; ++c) {
            for (var l = c * a, h = 0, f = 0; f < a; ++f) h += u[l + f];
            s[c] = h
        }
        return i
    }, Ih.prototype.prod = function (t, e) {
        wh(t, "sum");
        for (var n = pn(t.shape, e), r = n[0], o = n[1], i = Pn(r, Pt(t.dtype, "int32")), a = L(o), s = this.readSync(i.dataId), u = this.readSync(t.dataId), c = 0; c < s.length; ++c) {
            for (var l = c * a, h = 1, f = 0; f < a; ++f) h *= u[l + f];
            s[c] = h
        }
        return i
    }, Ih.prototype.unsortedSegmentSum = function (t, e, n) {
        wh(t, "unsortedSegmentSum");
        for (var r = [], o = t.rank - e.rank, i = 0; i < o; ++i) e = e.expandDims(i + 1);
        for (i = 0; i < n; ++i) {
            var a = kn(i, "int32"), s = nc(a, e).asType("float32").mul(t).sum(0);
            r.push(s)
        }
        return Mr(r)
    }, Ih.prototype.argMin = function (t, e) {
        wh(t, "argMin");
        var n = [e];
        vn("argMin", n, t.rank);
        for (var r = pn(t.shape, n), o = r[0], i = r[1], a = Pn(o, "int32"), s = L(i), u = this.readSync(a.dataId), c = this.readSync(t.dataId), l = 0; l < u.length; ++l) {
            for (var h = l * s, f = c[h], p = 0, d = 0; d < s; ++d) {
                var v = c[h + d];
                v < f && (f = v, p = d)
            }
            u[l] = p
        }
        return a
    }, Ih.prototype.argMax = function (t, e) {
        wh(t, "argMax");
        var n = [e];
        vn("argMax", n, t.rank);
        for (var r = pn(t.shape, n), o = r[0], i = r[1], a = Pn(o, "int32"), s = L(i), u = this.readSync(a.dataId), c = this.readSync(t.dataId), l = 0; l < u.length; ++l) {
            for (var h = l * s, f = c[h], p = 0, d = 0; d < s; ++d) {
                var v = c[h + d];
                f < v && (f = v, p = d)
            }
            u[l] = p
        }
        return a
    }, Ih.prototype.cumsum = function (t, e, n, r) {
        if (wh(t, "cumsum"), e !== t.rank - 1) throw new Error("backend.cumsum in CPU expects an inner-most axis=" + (t.rank - 1) + " but got axis=" + e);
        for (var o = Pt(t.dtype, "int32"), i = Pn(t.shape, o), a = this.readSync(i.dataId), s = this.readSync(t.dataId), u = t.shape[t.rank - 1], c = r ? function (t, e) {
            return t + u - e - 1
        } : function (t, e) {
            return t + e
        }, l = 0; l < s.length; l += u) for (var h = 0; h < u; h++) {
            var f = c(l, h);
            if (0 === h) a[f] = n ? 0 : s[f]; else {
                var p = c(l, h - 1);
                a[f] = n ? s[p] + a[p] : s[f] + a[p]
            }
        }
        return i
    }, Ih.prototype.equal = function (t, e) {
        return wh([t, e], "equal"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
            return t === e ? 1 : 0
        })
    }, Ih.prototype.notEqual = function (t, e) {
        return wh([t, e], "notEqual"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
            return t !== e ? 1 : 0
        })
    }, Ih.prototype.less = function (t, e) {
        return wh([t, e], "less"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
            return t < e ? 1 : 0
        })
    }, Ih.prototype.lessEqual = function (t, e) {
        return wh([t, e], "lessEqual"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
            return t <= e ? 1 : 0
        })
    }, Ih.prototype.greater = function (t, e) {
        return wh([t, e], "greater"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
            return e < t ? 1 : 0
        })
    }, Ih.prototype.greaterEqual = function (t, e) {
        return wh([t, e], "greaterEqual"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
            return e <= t ? 1 : 0
        })
    }, Ih.prototype.logicalNot = function (t) {
        wh(t, "logicalNot");
        for (var e = this.readSync(t.dataId), n = new Uint8Array(e.length), r = 0; r < e.length; ++r) n[r] = e[r] ? 0 : 1;
        return this.makeOutput(n, t.shape, "bool")
    }, Ih.prototype.logicalAnd = function (t, e) {
        return wh([t, e], "logicalAnd"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
            return t && e
        })
    }, Ih.prototype.logicalOr = function (t, e) {
        return wh([t, e], "logicalOr"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
            return t || e
        })
    }, Ih.prototype.select = function (t, e, n) {
        wh([t, e, n], "select");
        for (var r = this.readSync(t.dataId), o = this.readSync(e.dataId), i = this.readSync(n.dataId), a = Pn(e.shape, Pt(e.dtype, n.dtype)), s = this.readSync(a.dataId), u = 0, c = 0 === t.rank || 1 < t.rank || 1 === e.rank ? 1 : L(e.shape.slice(1)), l = 0; l < r.length; l++) for (var h = 0; h < c; h++) 1 === r[l] ? s[u++] = o[l] : s[u++] = i[l];
        return a
    }, Ih.prototype.where = function (t) {
        wh([t], "where");
        var e = this.readSync(t.dataId);
        return qo(t.shape, e)
    }, Ih.prototype.topk = function (t, e, n) {
        return wh(t, "topk"), Ho(this.readSync(t.dataId), t.shape, t.dtype, e)
    }, Ih.prototype.min = function (t, e) {
        wh(t, "min"), vn("min", e, t.rank);
        for (var n = pn(t.shape, e), r = n[0], o = n[1], i = Pn(r, t.dtype), a = L(o), s = this.readSync(i.dataId), u = this.readSync(t.dataId), c = 0; c < s.length; ++c) {
            for (var l = c * a, h = u[l], f = 0; f < a; ++f) {
                var p = u[l + f];
                p < h && (h = p)
            }
            s[c] = h
        }
        return i
    }, Ih.prototype.minimum = function (t, e) {
        return wh([t, e], "minimum"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
            return Math.min(t, e)
        })
    }, Ih.prototype.mod = function (t, e) {
        return wh([t, e], "mod"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
            var n = t % e;
            return t < 0 && e < 0 || 0 <= t && 0 <= e ? n : (n + e) % e
        })
    }, Ih.prototype.max = function (t, e) {
        wh(t, "max"), vn("max", e, t.rank);
        for (var n = pn(t.shape, e), r = n[0], o = n[1], i = Pn(r, t.dtype), a = L(o), s = this.readSync(i.dataId), u = this.readSync(t.dataId), c = 0; c < s.length; ++c) {
            for (var l = c * a, h = u[l], f = 0; f < a; ++f) {
                var p = u[l + f];
                h < p && (h = p)
            }
            s[c] = h
        }
        return i
    }, Ih.prototype.maximum = function (t, e) {
        return wh([t, e], "maximum"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
            return Math.max(t, e)
        })
    }, Ih.prototype.all = function (t, e) {
        wh(t, "all"), vn("all", e, t.rank);
        for (var n = pn(t.shape, e), r = n[0], o = n[1], i = Pn(r, t.dtype), a = L(o), s = this.readSync(i.dataId), u = this.readSync(t.dataId), c = 0; c < s.length; ++c) {
            for (var l = c * a, h = u[l], f = 0; f < a; ++f) {
                var p = u[l + f];
                h = h && p
            }
            s[c] = h
        }
        return i
    }, Ih.prototype.any = function (t, e) {
        wh(t, "any"), vn("any", e, t.rank);
        for (var n = pn(t.shape, e), r = n[0], o = n[1], i = Pn(r, t.dtype), a = L(o), s = this.readSync(i.dataId), u = this.readSync(t.dataId), c = 0; c < s.length; ++c) {
            for (var l = c * a, h = u[l], f = 0; f < a; ++f) {
                var p = u[l + f];
                h = h || p
            }
            s[c] = h
        }
        return i
    }, Ih.prototype.squaredDifference = function (t, e) {
        return wh([t, e], "squaredDifference"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
            var n = t - e;
            return n * n
        })
    }, Ih.prototype.ceil = function (t) {
        wh(t, "ceil");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = Math.ceil(e[r]);
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.floor = function (t) {
        wh(t, "floor");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = Math.floor(e[r]);
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.sign = function (t) {
        wh(t, "x");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) e[r] < 0 ? n[r] = -1 : 0 < e[r] ? n[r] = 1 : n[r] = 0;
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.isNaN = function (t) {
        wh(t, "x");
        for (var e = this.readSync(t.dataId), n = new Uint8Array(e.length), r = 0; r < e.length; ++r) Number.isNaN(e[r]) && (n[r] = 1);
        return this.makeOutput(n, t.shape, "bool")
    }, Ih.prototype.isInf = function (t) {
        wh(t, "x");
        for (var e = this.readSync(t.dataId), n = new Uint8Array(e.length), r = 0; r < e.length; ++r) Math.abs(e[r]) === 1 / 0 && (n[r] = 1);
        return this.makeOutput(n, t.shape, "bool")
    }, Ih.prototype.isFinite = function (t) {
        wh(t, "x");
        for (var e = this.readSync(t.dataId), n = new Uint8Array(e.length), r = 0; r < e.length; ++r) Number.isFinite(e[r]) && (n[r] = 1);
        return this.makeOutput(n, t.shape, "bool")
    }, Ih.prototype.round = function (t) {
        wh(t, "round");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
            var o = Math.floor(e[r]);
            e[r] - o < .5 ? n[r] = Math.floor(e[r]) : .5 < e[r] - o ? n[r] = Math.ceil(e[r]) : n[r] = o % 2 == 0 ? o : o + 1
        }
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.exp = function (t) {
        wh(t, "exp");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = Math.exp(e[r]);
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.expm1 = function (t) {
        wh(t, "expm1");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = Math.expm1(e[r]);
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.log = function (t) {
        wh(t, "log");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
            var o = e[r];
            n[r] = Math.log(o)
        }
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.log1p = function (t) {
        wh(t, "log1p");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
            var o = e[r];
            n[r] = Math.log1p(o)
        }
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.sqrt = function (t) {
        wh(t, "sqrt");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
            var o = e[r];
            n[r] = Math.sqrt(o)
        }
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.rsqrt = function (t) {
        wh(t, "rsqrt");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
            var o = e[r];
            n[r] = 1 / Math.sqrt(o)
        }
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.reciprocal = function (t) {
        wh(t, "reciprocal");
        for (var e = this.readSync(t.dataId), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = 1 / e[r];
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.linear = function (t) {
        return t
    }, Ih.prototype.relu = function (t) {
        wh(t, "relu");
        for (var e = Pn(t.shape, t.dtype), n = this.readSync(e.dataId), r = this.readSync(t.dataId), o = 0; o < r.length; ++o) n[o] = Math.max(0, r[o]);
        return e
    }, Ih.prototype.relu6 = function (t) {
        wh(t, "relu");
        for (var e = Pn(t.shape, t.dtype), n = this.readSync(e.dataId), r = this.readSync(t.dataId), o = 0; o < r.length; ++o) n[o] = Math.min(Math.max(0, r[o]), 6);
        return e
    }, Ih.prototype.prelu = function (t, e) {
        return wh([t, e], "prelu"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
            return t < 0 ? e * t : t
        })
    }, Ih.prototype.elu = function (t) {
        wh(t, "elu");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) {
            var o = n[r];
            e[r] = 0 <= o ? o : Math.exp(o) - 1
        }
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.eluDer = function (t, e) {
        wh([t, e], "eluDer");
        for (var n = new Float32Array(e.size), r = this.readSync(e.dataId), o = this.readSync(t.dataId), i = 0; i < r.length; ++i) {
            var a = r[i];
            n[i] = 1 <= a ? o[i] : o[i] * (a + 1)
        }
        return this.makeOutput(n, e.shape, "float32")
    }, Ih.prototype.selu = function (t) {
        wh(t, "selu");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) {
            var o = n[r];
            e[r] = 0 <= o ? 1.0507009873554805 * o : 1.7580993408473768 * (Math.exp(o) - 1)
        }
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.clip = function (t, e, n) {
        wh(t, "clip");
        for (var r = new Float32Array(t.size), o = this.readSync(t.dataId), i = 0; i < o.length; ++i) {
            var a = o[i];
            r[i] = n < a ? n : a < e ? e : a
        }
        return this.makeOutput(r, t.shape, "float32")
    }, Ih.prototype.abs = function (t) {
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.abs(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.complexAbs = function (t) {
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < t.size; ++r) {
            var o = n[2 * r], i = n[2 * r + 1];
            e[r] = Math.hypot(o, i)
        }
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.int = function (t) {
        wh(t, "int");
        for (var e = new Int32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = n[r];
        return this.makeOutput(e, t.shape, "int32")
    }, Ih.prototype.sigmoid = function (t) {
        wh(t, "sigmoid");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = 1 / (1 + Math.exp(-n[r]));
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.softplus = function (t) {
        wh(t, "softplus");
        for (var e = Math.log(1.1920928955078125e-7) + 2, n = new Float32Array(t.size), r = this.readSync(t.dataId), o = 0; o < r.length; ++o) {
            var i, a = r[o] > -e, s = r[o] < e, u = Math.exp(r[o]);
            i = s ? u : a ? r[o] : Math.log(1 + u), n[o] = i
        }
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.sin = function (t) {
        wh(t, "sin");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.sin(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.cos = function (t) {
        wh(t, "cos");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.cos(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.tan = function (t) {
        wh(t, "tan");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.tan(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.asin = function (t) {
        wh(t, "asin");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.asin(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.acos = function (t) {
        wh(t, "acos");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.acos(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.atan = function (t) {
        wh(t, "atan");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.atan(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.atan2 = function (t, e) {
        return wh([t, e], "atan2"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
            return Math.atan2(t, e)
        })
    }, Ih.prototype.sinh = function (t) {
        wh(t, "sinh");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.sinh(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.cosh = function (t) {
        wh(t, "cosh");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.cosh(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.tanh = function (t) {
        wh(t, "tanh");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = w(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.asinh = function (t) {
        wh(t, "asinh");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.asinh(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.acosh = function (t) {
        wh(t, "acosh");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.acosh(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.atanh = function (t) {
        wh(t, "atanh");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) e[r] = Math.atanh(n[r]);
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.erf = function (t) {
        wh(t, "erf");
        for (var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0; r < n.length; ++r) {
            var o = Math.sign(n[r]), i = Math.abs(n[r]), a = 1 / (1 + .3275911 * i);
            e[r] = o * (1 - ((((1.061405429 * a - 1.453152027) * a + 1.421413741) * a - .284496736) * a + .254829592) * a * Math.exp(-i * i))
        }
        return this.makeOutput(e, t.shape, "float32")
    }, Ih.prototype.step = function (t, e) {
        void 0 === e && (e = 0), wh(t, "step");
        for (var n = new Float32Array(t.size), r = this.readSync(t.dataId), o = 0; o < r.length; ++o) {
            var i = r[o];
            isNaN(i) ? n[o] = NaN : n[o] = 0 < i ? 1 : e
        }
        return this.makeOutput(n, t.shape, "float32")
    }, Ih.prototype.fusedConv2d = function (t) {
        var e = t.input, n = t.filter, r = t.convInfo, o = t.bias, i = t.activation, a = t.preluActivationWeights,
            s = this.conv2d(e, n, r);
        return o && (s = this.add(s, o)), i && (s = Ch(this, s, i, a)), s
    }, Ih.prototype.conv2d = function (t, e, n) {
        wh([t, e], "conv2d");
        for (var r = n.filterHeight, o = n.filterWidth, i = n.dilationHeight, a = n.dilationWidth, s = n.padInfo.left, u = n.padInfo.top, c = "channelsLast" === n.dataFormat, l = cr(n.outShape, t.dtype), h = t.strides[0], f = c ? t.strides[1] : t.strides[2], p = c ? t.strides[2] : 1, d = c ? 1 : t.strides[1], v = l.strides[0], m = c ? l.strides[1] : l.strides[2], g = c ? l.strides[2] : 1, y = c ? 1 : l.strides[1], x = this.readSync(t.dataId), b = this.readSync(e.dataId), w = l.values, C = 0; C < n.batchSize; ++C) for (var E = C * h, _ = C * v, I = 0; I < n.outHeight; ++I) for (var R = _ + I * m, k = I * n.strideHeight - u, S = 0; S < r; S++) {
            var D = k + S * i;
            if (!(D < 0 || D >= n.inHeight)) for (var A = S * e.strides[0], T = E + D * f, N = 0; N < n.outWidth; ++N) for (var F = R + N * g, M = N * n.strideWidth - s, O = 0; O < o; O++) {
                var P = M + O * a;
                if (!(P < 0 || P >= n.inWidth)) for (var B = T + P * p, L = A + O * e.strides[1], W = 0; W < n.inChannels; ++W) {
                    for (var z = x[B + W * d], U = 0; U < n.outChannels; ++U) w[F + U * y] += z * b[L + U];
                    L += n.outChannels
                }
            }
        }
        return l.toTensor()
    },Ih.prototype.conv3d = function (t, e, n) {
        for (var r = n.filterDepth, o = n.filterHeight, i = n.filterWidth, a = n.dilationDepth, s = n.dilationHeight, u = n.dilationWidth, c = n.padInfo.front, l = n.padInfo.left, h = n.padInfo.top, f = cr(n.outShape, t.dtype), p = this.readSync(t.dataId), d = this.readSync(e.dataId), v = f.values, m = 0; m < n.batchSize; ++m) for (var g = m * t.strides[0], y = m * f.strides[0], x = 0; x < n.outDepth; ++x) for (var b = y + x * f.strides[1], w = x * n.strideDepth - c, C = 0; C < r; C++) {
            var E = w + C * a;
            if (!(E < 0 || E >= n.inDepth)) for (var _ = C * e.strides[0], I = g + E * t.strides[1], R = 0; R < n.outHeight; ++R) for (var k = b + R * f.strides[2], S = R * n.strideHeight - h, D = 0; D < o; D++) {
                var A = S + D * s;
                if (!(A < 0 || A >= n.inHeight)) for (var T = _ + D * e.strides[1], N = I + A * t.strides[2], F = 0; F < n.outWidth; ++F) for (var M = k + F * n.outChannels, O = F * n.strideWidth - l, P = 0; P < i; P++) {
                    var B = O + P * u;
                    if (!(B < 0 || B >= n.inWidth)) for (var L = T + P * e.strides[2], W = N + B * n.inChannels, z = L, U = 0; U < n.inChannels; ++U) {
                        for (var V = p[W + U], G = 0; G < n.outChannels; ++G) v[M + G] += V * d[z + G];
                        z += n.outChannels
                    }
                }
            }
        }
        return f.toTensor()
    },Ih.prototype.conv2dDerInput = function (t, e, n) {
        wh([t, e], "conv2dDerInput");
        for (var r = cr(n.inShape, "float32"), o = r.values, i = this.readSync(t.dataId), a = this.readSync(e.dataId), s = e.strides, u = s[0], c = s[1], l = s[2], h = n.batchSize, f = n.filterHeight, p = n.filterWidth, d = n.inChannels, v = n.inHeight, m = n.inWidth, g = n.outChannels, y = n.outHeight, x = n.outWidth, b = n.strideHeight, w = n.strideWidth, C = n.dataFormat, E = f - 1 - n.padInfo.top, _ = p - 1 - n.padInfo.left, I = "channelsLast" === C, R = r.strides[0], k = I ? r.strides[1] : r.strides[2], S = I ? r.strides[2] : 1, D = I ? 1 : r.strides[1], A = t.strides[0], T = I ? t.strides[1] : t.strides[2], N = I ? t.strides[2] : 1, F = I ? 1 : t.strides[1], M = 0; M < h; ++M) for (var O = 0; O < d; ++O) for (var P = 0; P < v; ++P) for (var B = P - E, L = Math.max(0, Math.ceil(B / b)), W = Math.min(y, (f + B) / b), z = 0; z < m; ++z) {
            for (var U = z - _, V = Math.max(0, Math.ceil(U / w)), G = Math.min(x, (p + U) / w), H = 0, q = L; q < W; ++q) for (var j = q * b - B, K = V; K < G; ++K) for (var X = A * M + T * q + N * K, Y = u * (f - 1 - j) + c * (p - 1 - (K * w - U)) + l * O, $ = 0; $ < g; ++$) H += i[X + F * $] * a[Y + $];
            o[R * M + k * P + S * z + D * O] = H
        }
        return r.toTensor()
    },Ih.prototype.conv3dDerInput = function (t, e, n) {
        for (var r = cr(n.inShape, "float32"), o = r.values, i = r.strides, a = i[0], s = i[1], u = i[2], c = i[3], l = this.readSync(t.dataId), h = t.strides, f = h[0], p = h[1], d = h[2], v = h[3], m = this.readSync(e.dataId), g = e.strides, y = g[0], x = g[1], b = g[2], w = g[3], C = n.batchSize, E = n.filterDepth, _ = n.filterHeight, I = n.filterWidth, R = n.inChannels, k = n.inDepth, S = n.inHeight, D = n.inWidth, A = n.outChannels, T = n.outDepth, N = n.outHeight, F = n.outWidth, M = n.strideDepth, O = n.strideHeight, P = n.strideWidth, B = E - 1 - n.padInfo.front, L = _ - 1 - n.padInfo.top, W = I - 1 - n.padInfo.left, z = 0; z < C; ++z) for (var U = 0; U < R; ++U) for (var V = 0; V < k; ++V) for (var G = V - B, H = Math.max(0, Math.ceil(G / M)), q = Math.min(T, (E + G) / M), j = 0; j < S; ++j) for (var K = j - L, X = Math.max(0, Math.ceil(K / O)), Y = Math.min(N, (_ + K) / O), $ = 0; $ < D; ++$) {
            for (var J = $ - W, Q = Math.max(0, Math.ceil(J / P)), Z = Math.min(F, (I + J) / P), tt = 0, et = H; et < q; ++et) for (var nt = et * M - G, rt = X; rt < Y; ++rt) for (var ot = rt * O - K, it = Q; it < Z; ++it) for (var at = f * z + p * et + d * rt + v * it, st = y * (E - 1 - nt) + x * (_ - 1 - ot) + b * (I - 1 - (it * P - J)) + w * U, ut = 0; ut < A; ++ut) tt += l[at + ut] * m[st + ut];
            o[a * z + s * V + u * j + c * $ + U] = tt
        }
        return r.toTensor()
    },Ih.prototype.conv2dDerFilter = function (t, e, n) {
        wh([t, e], "conv2dDerFilter");
        for (var r = n.strideHeight, o = n.strideWidth, i = n.filterHeight, a = n.filterWidth, s = "channelsLast" === n.dataFormat, u = cr(n.filterShape, "float32"), c = n.padInfo.left, l = n.padInfo.top, h = this.bufferSync(t), f = this.bufferSync(e), p = 0; p < i; ++p) for (var d = Math.max(0, Math.ceil((l - p) / r)), v = Math.min(n.outHeight, (n.inHeight + l - p) / r), m = 0; m < a; ++m) for (var g = Math.max(0, Math.ceil((c - m) / o)), y = Math.min(n.outWidth, (n.inWidth + c - m) / o), x = 0; x < n.inChannels; ++x) for (var b = 0; b < n.outChannels; ++b) {
            for (var w = 0, C = 0; C < n.batchSize; ++C) for (var E = d; E < v; ++E) for (var _ = p + E * r - l, I = g; I < y; ++I) {
                var R = m + I * o - c;
                w += s ? h.get(C, _, R, x) * f.get(C, E, I, b) : h.get(C, x, _, R) * f.get(C, b, E, I)
            }
            u.set(w, p, m, x, b)
        }
        return u.toTensor()
    },Ih.prototype.conv3dDerFilter = function (t, e, n) {
        for (var r = n.strideDepth, o = n.strideHeight, i = n.strideWidth, a = n.filterDepth, s = n.filterHeight, u = n.filterWidth, c = cr(n.filterShape, "float32"), l = c.values, h = c.strides, f = h[0], p = h[1], d = h[2], v = h[3], m = this.readSync(e.dataId), g = e.strides, y = g[0], x = g[1], b = g[2], w = g[3], C = this.readSync(t.dataId), E = t.strides, _ = E[0], I = E[1], R = E[2], k = E[3], S = n.padInfo.front, D = n.padInfo.left, A = n.padInfo.top, T = 0; T < a; ++T) for (var N = Math.max(0, Math.ceil((S - T) / r)), F = Math.min(n.outDepth, (n.inDepth + S - T) / r), M = T * f, O = 0; O < s; ++O) for (var P = Math.max(0, Math.ceil((A - O) / o)), B = Math.min(n.outHeight, (n.inHeight + A - O) / o), L = O * p + M, W = 0; W < u; ++W) for (var z = Math.max(0, Math.ceil((D - W) / i)), U = Math.min(n.outWidth, (n.inWidth + D - W) / i), V = W * d + L, G = 0; G < n.inChannels; ++G) for (var H = G * v + V, q = 0; q < n.outChannels; ++q) {
            for (var j = 0, K = 0; K < n.batchSize; ++K) for (var X = K * _, Y = K * y, $ = N; $ < F; ++$) for (var J = (T + $ * r - S) * I + X, Q = $ * x + Y, Z = P; Z < B; ++Z) for (var tt = (O + Z * o - A) * R + J, et = Z * b + Q, nt = z; nt < U; ++nt) {
                var rt = nt * w + et;
                j += C[(W + nt * i - D) * k + tt + G] * m[rt + q]
            }
            l[H + q] = j
        }
        return c.toTensor()
    },Ih.prototype.fusedDepthwiseConv2D = function (t) {
        var e = t.input, n = t.filter, r = t.convInfo, o = t.bias, i = t.activation, a = t.preluActivationWeights,
            s = this.depthwiseConv2D(e, n, r);
        return o && (s = this.add(s, o)), i && (s = Ch(this, s, i, a)), s
    },Ih.prototype.depthwiseConv2D = function (t, e, n) {
        wh([t, e], "depthwiseConv2D");
        for (var r = n.filterHeight, o = n.filterWidth, i = n.dilationHeight, a = n.dilationWidth, s = n.padInfo.left, u = n.padInfo.top, c = n.outChannels / n.inChannels, l = cr(n.outShape, t.dtype), h = this.readSync(t.dataId), f = this.readSync(e.dataId), p = l.values, d = 0; d < n.batchSize; ++d) for (var v = d * t.strides[0], m = d * l.strides[0], g = 0; g < n.outHeight; ++g) for (var y = m + g * l.strides[1], x = g * n.strideHeight - s, b = 0; b < r; ++b) {
            var w = x + b * i;
            if (!(w < 0 || w >= n.inHeight)) for (var C = b * e.strides[0], E = v + w * t.strides[1], _ = 0; _ < n.outWidth; ++_) for (var I = y + _ * l.strides[2], R = _ * n.strideWidth - u, k = 0; k < o; ++k) {
                var S = R + k * a;
                if (!(S < 0 || S >= n.inWidth)) for (var D = C + k * e.strides[1], A = E + S * n.inChannels, T = I, N = D, F = 0; F < n.inChannels; ++F) {
                    for (var M = h[A + F], O = 0; O < c; ++O) p[T + O] += M * f[N + O];
                    T += c, N += c
                }
            }
        }
        return l.toTensor()
    },Ih.prototype.depthwiseConv2DDerInput = function (t, e, n) {
        wh([t, e], "depthwiseConv2DDerInput");
        for (var r = cr(n.inShape, "float32"), o = r.values, i = r.strides, a = i[0], s = i[1], u = i[2], c = this.readSync(t.dataId), l = t.strides, h = l[0], f = l[1], p = l[2], d = this.readSync(e.dataId), v = e.strides, m = v[0], g = v[1], y = v[2], x = n.batchSize, b = n.filterHeight, w = n.filterWidth, C = n.inChannels, E = n.inHeight, _ = n.inWidth, I = n.outChannels, R = n.outHeight, k = n.outWidth, S = n.strideHeight, D = n.strideWidth, A = b - 1 - n.padInfo.top, T = w - 1 - n.padInfo.left, N = I / C, F = 0; F < x; ++F) for (var M = 0; M < C; ++M) for (var O = 0; O < E; ++O) for (var P = O - A, B = Math.max(0, Math.ceil(P / S)), L = Math.min(R, (b + P) / S), W = 0; W < _; ++W) {
            for (var z = W - T, U = Math.max(0, Math.ceil(z / D)), V = Math.min(k, (w + z) / D), G = 0, H = B; H < L; ++H) for (var q = H * S - P, j = U; j < V; ++j) for (var K = h * F + f * H + p * j, X = m * (b - 1 - q) + g * (w - 1 - (j * D - z)) + y * M, Y = 0; Y < N; ++Y) G += c[K + (M * N + Y)] * d[X + Y];
            o[a * F + s * O + u * W + M] = G
        }
        return r.toTensor()
    },Ih.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
        wh([t, e], "depthwiseConv2DDerFilter");
        for (var r = n.strideHeight, o = n.strideWidth, i = n.filterHeight, a = n.filterWidth, s = cr(n.filterShape, "float32"), u = n.padInfo.left, c = n.padInfo.top, l = n.outChannels / n.inChannels, h = this.bufferSync(t), f = this.bufferSync(e), p = 0; p < i; ++p) for (var d = Math.max(0, Math.ceil((c - p) / r)), v = Math.min(n.outHeight, (n.inHeight + c - p) / r), m = 0; m < a; ++m) for (var g = Math.max(0, Math.ceil((u - m) / o)), y = Math.min(n.outWidth, (n.inWidth + u - m) / o), x = 0; x < n.outChannels; ++x) {
            for (var b = Math.trunc(x / l), w = x % l, C = 0, E = 0; E < n.batchSize; ++E) for (var _ = d; _ < v; ++_) for (var I = p + _ * r - c, R = g; R < y; ++R) {
                var k = m + R * o - u;
                C += h.get(E, I, k, b) * f.get(E, _, R, x)
            }
            s.set(C, p, m, b, w)
        }
        return s.toTensor()
    },Ih.prototype.tile = function (t, e) {
        return wh(t, "tile"), Go(this.bufferSync(t), e)
    },Ih.prototype.pad = function (n, t, e) {
        wh(n, "pad");
        var r = t.map(function (t, e) {
            return t[0] + n.shape[e] + t[1]
        }), o = t.map(function (t) {
            return t[0]
        }), i = this.bufferSync(n), a = cr(r, n.dtype);
        0 !== e && a.values.fill(e);
        for (var s = 0; s < n.size; s++) {
            var u = i.indexToLoc(s), c = u.map(function (t, e) {
                return t + o[e]
            });
            a.set.apply(a, [i.get.apply(i, u)].concat(c))
        }
        return a.toTensor()
    },Ih.prototype.transpose = function (t, e) {
        wh(t, "transpose");
        for (var n = new Array(t.rank), r = 0; r < n.length; r++) n[r] = t.shape[e[r]];
        var o = this.readSync(t.dataId), i = cr(n, t.dtype), a = this.bufferSync(t);
        for (r = 0; r < t.size; ++r) {
            for (var s = a.indexToLoc(r), u = new Array(s.length), c = 0; c < u.length; c++) u[c] = s[e[c]];
            var l = i.locToIndex(u);
            i.values[l] = o[r]
        }
        return i.toTensor()
    },Ih.prototype.gather = function (t, e, n) {
        wh([t, e], "gather");
        var r = t.shape.slice(), o = this.readSync(e.dataId);
        r[n] = o.length;
        for (var i = cr(r, t.dtype), a = this.bufferSync(t), s = 0; s < i.size; ++s) {
            var u = i.indexToLoc(s), c = u.slice();
            c[n] = o[u[n]];
            var l = a.locToIndex(c);
            i.values[s] = a.values[l]
        }
        return i.toTensor()
    },Ih.prototype.batchToSpaceND = function (t, e, n) {
        wh([t], "batchToSpaceND");
        var r = e.reduce(function (t, e) {
                return t * e
            }), o = Lr(t.shape, e, r), i = Wr(o.length, e.length), a = zr(t.shape, e, r), s = Ur(n, e.length),
            u = Vr(a, n, e.length);
        return t.reshape(o).transpose(i).reshape(a).slice(s, u)
    },Ih.prototype.spaceToBatchND = function (t, e, n) {
        wh([t], "spaceToBatchND");
        var r = e.reduce(function (t, e) {
            return t * e
        }), o = [[0, 0]];
        o.push.apply(o, n);
        for (var i = 1 + e.length; i < t.shape.length; ++i) o.push([0, 0]);
        var a = t.pad(o), s = Lr(a.shape, e, r, !1), u = Wr(s.length, e.length, !1), c = zr(a.shape, e, r, !1);
        return a.reshape(s).transpose(u).reshape(c)
    },Ih.prototype.pool = function (t, e, n) {
        wh(t, "pool");
        for (var r = e.strideHeight, o = e.strideWidth, i = e.dilationHeight, a = e.dilationWidth, s = e.effectiveFilterHeight, u = e.effectiveFilterWidth, c = e.padInfo.top, l = e.padInfo.left, h = "max" === n ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, f = this.readSync(t.dataId), p = cr(e.outShape, t.dtype), d = p.values, v = e.outShape[1] * e.outShape[2] * e.outShape[3], m = e.outShape[2] * e.outShape[3], g = e.outShape[3], y = 0; y < e.batchSize; ++y) for (var x = y * v, b = y * t.strides[0], w = 0; w < e.inChannels; ++w) for (var C = 0; C < e.outHeight; ++C) for (var E = C * r - c, _ = Math.max(0, E), I = Math.min(e.inHeight, s + E), R = x + C * m, k = 0; k < e.outWidth; ++k) {
            for (var S = k * o - l, D = Math.max(0, S), A = Math.min(e.inWidth, u + S), T = h, N = 0, F = 0, M = _; M < I; M += i) {
                for (var O = b + M * t.strides[1], P = D; P < A; P += a) {
                    var B = f[O + P * t.strides[2] + w];
                    "max" === n && T < B ? T = B : "avg" === n && (N += B, F++)
                }
                if (isNaN(T)) break
            }
            d[R + k * g + w] = "avg" === n ? N / F : T
        }
        return p.toTensor()
    },Ih.prototype.maxPool = function (t, e) {
        return this.pool(t, e, "max")
    },Ih.prototype.maxPoolPositions = function (t, e) {
        for (var n = cr(e.outShape, "int32"), r = e.strideHeight, o = e.strideWidth, i = e.dilationHeight, a = e.dilationWidth, s = e.effectiveFilterHeight, u = e.effectiveFilterWidth, c = e.padInfo.top, l = e.padInfo.left, h = this.bufferSync(t), f = 0; f < e.batchSize; ++f) for (var p = 0; p < e.inChannels; ++p) for (var d = 0; d < e.outHeight; ++d) {
            for (var v = d * r - c, m = v; m < 0;) m += i;
            for (var g = Math.min(e.inHeight, s + v), y = 0; y < e.outWidth; ++y) {
                for (var x = y * o - l, b = x; b < 0;) b += a;
                for (var w = Math.min(e.inWidth, u + x), C = Number.NEGATIVE_INFINITY, E = -1, _ = m; _ < g; _ += i) for (var I = _ - v, R = b; R < w; R += a) {
                    var k = R - x, S = h.get(f, _, R, p);
                    C < S && (C = S, E = I * u + k)
                }
                n.set(E, f, d, y, p)
            }
        }
        return n.toTensor()
    },Ih.prototype.maxPoolBackprop = function (t, e, n, r) {
        wh([e, n], "maxPoolBackprop");
        for (var o = this.maxPoolPositions(e, r), i = r.strideHeight, a = r.strideWidth, s = r.dilationHeight, u = r.dilationWidth, c = r.effectiveFilterHeight, l = r.effectiveFilterWidth, h = l - 1 - r.padInfo.left, f = c - 1 - r.padInfo.top, p = cr(e.shape, "float32"), d = this.bufferSync(o), v = this.bufferSync(t), m = 0; m < r.batchSize; ++m) for (var g = 0; g < r.inChannels; ++g) for (var y = 0; y < r.inHeight; ++y) for (var x = 0; x < r.inWidth; ++x) {
            for (var b = y - f, w = x - h, C = 0, E = 0; E < c; E += s) {
                var _ = (b + E) / i;
                if (!(_ < 0 || _ >= r.outHeight || Math.floor(_) !== _)) for (var I = 0; I < l; I += u) {
                    var R = (w + I) / a;
                    if (!(R < 0 || R >= r.outWidth || Math.floor(R) !== R)) {
                        var k = c * l - 1 - d.get(m, _, R, g) === E * l + I ? 1 : 0;
                        0 != k && (C += v.get(m, _, R, g) * k)
                    }
                }
            }
            p.set(C, m, y, x, g)
        }
        return p.toTensor()
    },Ih.prototype.avgPoolBackprop = function (t, e, n) {
        wh([t, e], "avgPoolBackprop");
        for (var r = n.strideHeight, o = n.strideWidth, i = n.filterHeight, a = n.filterWidth, s = n.dilationHeight, u = n.dilationWidth, c = n.effectiveFilterHeight, l = n.effectiveFilterWidth, h = l - 1 - n.padInfo.left, f = c - 1 - n.padInfo.top, p = cr(e.shape, "float32"), d = 1 / (i * a), v = this.bufferSync(t), m = 0; m < n.batchSize; ++m) for (var g = 0; g < n.inChannels; ++g) for (var y = 0; y < n.inHeight; ++y) for (var x = 0; x < n.inWidth; ++x) {
            for (var b = y - f, w = x - h, C = 0, E = 0; E < c; E += s) {
                var _ = (b + E) / r;
                if (!(_ < 0 || _ >= n.outHeight || Math.floor(_) !== _)) for (var I = 0; I < l; I += u) {
                    var R = (w + I) / o;
                    R < 0 || R >= n.outWidth || Math.floor(R) !== R || (C += v.get(m, _, R, g))
                }
            }
            p.set(C * d, m, y, x, g)
        }
        return p.toTensor()
    },Ih.prototype.pool3d = function (t, e, n) {
        wh(t, "pool3d");
        for (var r = e.strideDepth, o = e.strideHeight, i = e.strideWidth, a = e.dilationDepth, s = e.dilationHeight, u = e.dilationWidth, c = e.effectiveFilterDepth, l = e.effectiveFilterHeight, h = e.effectiveFilterWidth, f = e.padInfo.front, p = e.padInfo.top, d = e.padInfo.left, v = "max" === n ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, m = this.readSync(t.dataId), g = cr(e.outShape, t.dtype), y = g.values, x = e.outShape[1] * e.outShape[2] * e.outShape[3] * e.outShape[4], b = e.outShape[2] * e.outShape[3] * e.outShape[4], w = e.outShape[3] * e.outShape[4], C = e.outShape[4], E = 0; E < e.batchSize; ++E) for (var _ = E * x, I = E * t.strides[0], R = 0; R < e.inChannels; ++R) for (var k = 0; k < e.outDepth; ++k) {
            for (var S = k * r - f, D = S; D < 0;) D += a;
            for (var A = Math.min(e.inDepth, c + S), T = _ + k * b, N = 0; N < e.outHeight; ++N) {
                for (var F = N * o - p, M = F; M < 0;) M += s;
                for (var O = Math.min(e.inHeight, l + F), P = T + N * w, B = 0; B < e.outWidth; ++B) {
                    for (var L = B * i - d, W = L; W < 0;) W += u;
                    for (var z = Math.min(e.inWidth, h + L), U = P + B * C, V = v, G = 0, H = 0, q = D; q < A; q += a) {
                        for (var j = I + q * t.strides[1], K = M; K < O; K += s) {
                            for (var X = j + K * t.strides[2], Y = W; Y < z; Y += u) {
                                var $ = m[X + Y * t.strides[3] + R];
                                if ("max" === n && V < $ ? V = $ : "avg" === n && (G += $, H++), isNaN(V)) break
                            }
                            if (isNaN(V)) break
                        }
                        if (isNaN(V)) break
                    }
                    y[U + R] = "avg" === n ? G / H : V
                }
            }
        }
        return g.toTensor()
    },Ih.prototype.avgPool3d = function (t, e) {
        return wh(t, "avgPool3d"), this.pool3d(t, e, "avg").toFloat()
    },Ih.prototype.avgPool3dBackprop = function (t, e, n) {
        wh([t, e], "avgPool3dBackprop");
        for (var r = n.strideDepth, o = n.strideHeight, i = n.strideWidth, a = n.filterDepth, s = n.filterHeight, u = n.filterWidth, c = n.dilationDepth, l = n.dilationHeight, h = n.dilationWidth, f = n.effectiveFilterDepth, p = n.effectiveFilterHeight, d = n.effectiveFilterWidth, v = f - 1 - n.padInfo.front, m = d - 1 - n.padInfo.left, g = p - 1 - n.padInfo.top, y = cr(e.shape, "float32"), x = 1 / (a * s * u), b = this.bufferSync(t), w = 0; w < n.batchSize; ++w) for (var C = 0; C < n.inChannels; ++C) for (var E = 0; E < n.inDepth; ++E) for (var _ = 0; _ < n.inHeight; ++_) for (var I = 0; I < n.inWidth; ++I) {
            for (var R = E - v, k = _ - g, S = I - m, D = 0, A = 0; A < f; A += c) {
                var T = (R + A) / r;
                if (!(T < 0 || T >= n.outDepth || Math.floor(T) !== T)) for (var N = 0; N < p; N += l) {
                    var F = (k + N) / o;
                    if (!(F < 0 || F >= n.outHeight || Math.floor(F) !== F)) for (var M = 0; M < d; M += h) {
                        var O = (S + M) / i;
                        O < 0 || O >= n.outWidth || Math.floor(O) !== O || (D += b.get(w, T, F, O, C))
                    }
                }
            }
            y.set(D * x, w, E, _, I, C)
        }
        return y.toTensor()
    },Ih.prototype.maxPool3d = function (t, e) {
        return wh(t, "maxPool3d"), this.pool3d(t, e, "max").toFloat()
    },Ih.prototype.maxPool3dPositions = function (t, e) {
        for (var n = cr(e.outShape, "int32"), r = e.strideDepth, o = e.strideHeight, i = e.strideWidth, a = e.dilationDepth, s = e.dilationHeight, u = e.dilationWidth, c = e.effectiveFilterDepth, l = e.effectiveFilterHeight, h = e.effectiveFilterWidth, f = e.padInfo.front, p = e.padInfo.top, d = e.padInfo.left, v = this.bufferSync(t), m = 0; m < e.batchSize; ++m) for (var g = 0; g < e.inChannels; ++g) for (var y = 0; y < e.outDepth; ++y) {
            for (var x = y * r - f, b = x; b < 0;) b += a;
            for (var w = Math.min(e.inDepth, c + x), C = 0; C < e.outHeight; ++C) {
                for (var E = C * o - p, _ = E; _ < 0;) _ += s;
                for (var I = Math.min(e.inHeight, l + E), R = 0; R < e.outWidth; ++R) {
                    for (var k = R * i - d, S = k; S < 0;) S += u;
                    for (var D = Math.min(e.inWidth, h + k), A = Number.NEGATIVE_INFINITY, T = -1, N = b; N < w; N += a) for (var F = N - x, M = _; M < I; M += s) for (var O = M - E, P = S; P < D; P += u) {
                        var B = P - k, L = v.get(m, N, M, P, g);
                        A <= L && (A = L, T = F * l * h + O * l + B)
                    }
                    n.set(T, m, y, C, R, g)
                }
            }
        }
        return n.toTensor()
    },Ih.prototype.maxPool3dBackprop = function (t, e, n, r) {
        wh([e, n], "maxPool3dBackprop");
        for (var o = this.maxPool3dPositions(e, r), i = r.strideDepth, a = r.strideHeight, s = r.strideWidth, u = r.dilationDepth, c = r.dilationHeight, l = r.dilationWidth, h = r.effectiveFilterDepth, f = r.effectiveFilterHeight, p = r.effectiveFilterWidth, d = h - 1 - r.padInfo.front, v = p - 1 - r.padInfo.left, m = f - 1 - r.padInfo.top, g = cr(e.shape, "float32"), y = this.bufferSync(o), x = this.bufferSync(t), b = 0; b < r.batchSize; ++b) for (var w = 0; w < r.inChannels; ++w) for (var C = 0; C < r.inDepth; ++C) for (var E = 0; E < r.inHeight; ++E) for (var _ = 0; _ < r.inWidth; ++_) {
            for (var I = C - d, R = E - m, k = _ - v, S = 0, D = 0; D < h; D += u) {
                var A = (I + D) / i;
                if (!(A < 0 || A >= r.outDepth || Math.floor(A) !== A)) for (var T = 0; T < f; T += c) {
                    var N = (R + T) / a;
                    if (!(N < 0 || N >= r.outHeight || Math.floor(N) !== N)) for (var F = 0; F < p; F += l) {
                        var M = (k + F) / s;
                        if (!(M < 0 || M >= r.outWidth || Math.floor(M) !== M)) {
                            var O = h * f * p - 1 - y.get(b, A, N, M, w) === D * f * p + T * p + F ? 1 : 0;
                            0 != O && (S += x.get(b, A, N, M, w) * O)
                        }
                    }
                }
            }
            g.set(S, b, C, E, _, w)
        }
        return g.toTensor()
    },Ih.prototype.cast = function (t, e) {
        return Ao(t, e, this)
    },Ih.prototype.reshape = function (t, e) {
        return To(t, e)
    },Ih.prototype.avgPool = function (t, e) {
        return wh(t, "avgPool"), this.pool(t, e, "avg").toFloat()
    },Ih.prototype.resizeBilinear = function (t, e, n, r) {
        wh(t, "resizeBilinear");
        for (var o = t.shape, i = o[0], a = o[1], s = o[2], u = o[3], c = this.readSync(t.dataId), l = new Float32Array(L([i, e, n, u])), h = [r && 1 < e ? a - 1 : a, r && 1 < n ? s - 1 : s], f = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n], p = 0, d = h[0] / f[0], v = h[1] / f[1], m = 0; m < i; m++) for (var g = 0; g < e; g++) for (var y = d * g, x = Math.floor(y), b = y - x, w = Math.min(a - 1, Math.ceil(y)), C = m * t.strides[0] + x * t.strides[1], E = m * t.strides[0] + w * t.strides[1], _ = 0; _ < n; _++) for (var I = v * _, R = Math.floor(I), k = I - R, S = Math.min(s - 1, Math.ceil(I)), D = C + R * t.strides[2], A = E + R * t.strides[2], T = C + S * t.strides[2], N = E + S * t.strides[2], F = 0; F < u; F++) {
            var M = c[D + F], O = c[A + F], P = M + (c[T + F] - M) * k, B = P + (O + (c[N + F] - O) * k - P) * b;
            l[p++] = B
        }
        return In(l, [i, e, n, u])
    },Ih.prototype.resizeBilinearBackprop = function (t, e, n) {
        wh([t, e], "resizeBilinearBackprop");
        for (var r = e.shape, o = r[0], i = r[1], a = r[2], s = r[3], u = t.shape, c = u[1], l = u[2], h = new Float32Array(o * i * a * s), f = [n && 1 < c ? i - 1 : i, n && 1 < l ? a - 1 : a], p = [n && 1 < c ? c - 1 : c, n && 1 < l ? l - 1 : l], d = f[0] / p[0], v = f[1] / p[1], m = this.readSync(t.dataId), g = 0, y = 0; y < o; y++) for (var x = y * e.strides[0], b = 0; b < c; b++) for (var w = b * d, C = Math.floor(w), E = Math.min(Math.ceil(w), i - 1), _ = x + C * e.strides[1], I = x + E * e.strides[1], R = w - C, k = 1 - R, S = 0; S < l; S++) for (var D = S * v, A = Math.floor(D), T = Math.min(Math.ceil(D), a - 1), N = D - A, F = 1 - N, M = _ + A * e.strides[2], O = _ + T * e.strides[2], P = I + A * e.strides[2], B = I + T * e.strides[2], L = k * F, W = k * N, z = R * F, U = R * N, V = 0; V < s; V++) {
            var G = m[g++];
            h[M + V] += G * L, h[O + V] += G * W, h[P + V] += G * z, h[B + V] += G * U
        }
        return Tn(h, [o, a, i, s], e.dtype)
    },Ih.prototype.resizeNearestNeighbor = function (t, e, n, r) {
        wh(t, "resizeNearestNeighbor");
        for (var o = t.shape, i = o[0], a = o[1], s = o[2], u = o[3], c = this.readSync(t.dataId), l = new Float32Array(i * e * n * u), h = [r && 1 < e ? a - 1 : a, r && 1 < n ? s - 1 : s], f = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n], p = h[0] / f[0], d = h[1] / f[1], v = 0, m = 0; m < i; m++) for (var g = m * t.strides[0], y = 0; y < e; y++) for (var x = p * y, b = g + Math.min(a - 1, r ? Math.round(x) : Math.floor(x)) * t.strides[1], w = 0; w < n; w++) for (var C = d * w, E = b + Math.min(s - 1, r ? Math.round(C) : Math.floor(C)) * t.strides[2], _ = 0; _ < u; _++) {
            var I = c[E + _];
            l[v++] = I
        }
        return In(l, [i, e, n, u], t.dtype)
    },Ih.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
        wh([t, e], "resizeNearestNeighborBackprop");
        for (var r = e.shape, o = r[0], i = r[1], a = r[2], s = r[3], u = t.shape, c = u[1], l = u[2], h = new Float32Array(o * i * a * s), f = this.readSync(t.dataId), p = [n && 1 < c ? i - 1 : i, n && 1 < l ? a - 1 : a], d = [n && 1 < c ? c - 1 : c, n && 1 < l ? l - 1 : l], v = p[0] / d[0], m = p[1] / d[1], g = 1 / v, y = 1 / m, x = 2 * Math.ceil(g) + 2, b = 2 * Math.ceil(y) + 2, w = 0; w < o; w++) for (var C = w * e.strides[0], E = 0; E < i; E++) for (var _ = C + E * e.strides[1], I = Math.floor(E * g), R = Math.floor(I - x / 2), k = 0; k < a; k++) for (var S = _ + k * e.strides[2], D = Math.floor(k * y), A = Math.floor(D - b / 2), T = 0; T < s; T++) {
            for (var N = 0, F = 0; F < x; F++) {
                var M = F + R;
                if (!(M < 0 || c <= M)) {
                    var O = C + M * t.strides[1], P = M * v;
                    if (E === Math.min(i - 1, n ? Math.round(P) : Math.floor(P))) for (var B = 0; B < b; B++) {
                        var L = B + A;
                        if (!(L < 0 || l <= L)) {
                            var W = O + L * t.strides[2], z = L * m;
                            k === Math.min(a - 1, n ? Math.round(z) : Math.floor(z)) && (N += f[W + T])
                        }
                    }
                }
            }
            h[S + T] = N
        }
        return Tn(h, e.shape, e.dtype)
    },Ih.prototype.batchNormalization = function (t, e, n, r, o, i) {
        wh([t, e, n, o, i], "batchNorm");
        for (var a = this.readSync(t.dataId), s = this.readSync(e.dataId), u = this.readSync(n.dataId), c = o ? this.readSync(o.dataId) : new Float32Array([1]), l = i ? this.readSync(i.dataId) : new Float32Array([0]), h = new Float32Array(a.length), f = l.length, p = c.length, d = u.length, v = s.length, m = 0, g = 0, y = 0, x = 0, b = 0; b < a.length; ++b) h[b] = l[m++] + (a[b] - s[g++]) * c[y++] / Math.sqrt(u[x++] + r), f <= m && (m = 0), v <= g && (g = 0), p <= y && (y = 0), d <= x && (x = 0);
        return Tn(h, t.shape)
    },Ih.prototype.localResponseNormalization4D = function (t, a, e, n, r) {
        wh(t, "localResponseNormalization4D");
        var s = t.shape[3], u = s - 1, c = this.readSync(t.dataId), o = t.size, i = new Float32Array(o);

        function l(t) {
            for (var e = t % s, n = t - e + Math.max(0, e - a), r = t - e + Math.min(e + a, u), o = 0; n <= r; n++) {
                var i = c[n];
                o += i * i
            }
            return o
        }

        for (var h = 0; h < o; h++) {
            var f = l(h), p = c[h] * Math.pow(e + n * f, -r);
            i[h] = p
        }
        return Tn(i, t.shape)
    },Ih.prototype.LRNGrad = function (t, e, n, r, o, i, a) {
        wh(t, "LRNGrad");
        for (var s = t.shape[3], u = this.readSync(t.dataId), c = this.readSync(e.dataId), l = this.readSync(n.dataId), h = new Float32Array(t.size), f = t.size, p = 0; p < f; p++) {
            for (var d = p % s, v = p - d + Math.max(0, d - r), m = p - d + Math.min(s, d + r + 1), g = 0, y = v; y < m; y++) g += Math.pow(c[y], 2);
            for (g = i * g + o, y = v; y < m; y++) {
                var x = -2 * i * a * c[y] * l[p] / g;
                p === y && (x += Math.pow(g, -a)), x *= u[p], h[y] += x
            }
        }
        return Tn(h, t.shape)
    },Ih.prototype.multinomial = function (t, e, n, r) {
        wh(t, "multinomial");
        for (var o = e ? t : so(t), i = o.shape[0], a = o.shape[1], s = Pn([i, n], "int32"), u = this.readSync(s.dataId), c = this.readSync(o.dataId), l = 0; l < i; ++l) {
            var h = l * a, f = new Float32Array(a - 1);
            f[0] = c[h];
            for (var p = 1; p < f.length; ++p) f[p] = f[p - 1] + c[h + p];
            for (var d = nr(r.toString()), v = l * n, m = 0; m < n; ++m) {
                var g = d();
                u[v + m] = f.length;
                for (var y = 0; y < f.length; y++) if (g < f[y]) {
                    u[v + m] = y;
                    break
                }
            }
        }
        return s
    },Ih.prototype.oneHot = function (t, e, n, r) {
        wh(t, "oneHot");
        var o = new Float32Array(t.size * e);
        o.fill(r);
        for (var i = this.readSync(t.dataId), a = 0; a < t.size; ++a) 0 <= i[a] && i[a] < e && (o[a * e + i[a]] = n);
        return Dn(o, [t.size, e], "int32")
    },Ih.prototype.nonMaxSuppression = function (t, e, n, r, o) {
        return wh(t, "nonMaxSuppression"), Bo(this.readSync(t.dataId), this.readSync(e.dataId), n, r, o)
    },Ih.prototype.fft = function (t) {
        return this.fftBatch(t, !1)
    },Ih.prototype.ifft = function (t) {
        return this.fftBatch(t, !0)
    },Ih.prototype.fftBatch = function (t, e) {
        for (var n = t.shape[0], r = t.shape[1], o = cr(t.shape, "float32"), i = cr(t.shape, "float32"), a = En(t).as2D(n, r), s = _n(t).as2D(n, r), u = 0; u < n; u++) for (var c = a.slice([u, 0], [1, r]), l = s.slice([u, 0], [1, r]), h = Cn(c, l), f = this.readSync(this.fftImpl(h, e).dataId), p = 0; p < r; p++) {
            var d = Oo(f, p);
            o.values[u * r + p] = d.real, i.values[u * r + p] = d.imag
        }
        return Cn(o.toTensor(), i.toTensor()).as2D(n, r)
    },Ih.prototype.fftImpl = function (t, e) {
        var n = t.as1D(), r = n.size;
        if (this.isExponentOf2(r)) {
            var o = this.fftRadix2(n, r, e).as2D(t.shape[0], t.shape[1]);
            return e && (o = Cn(En(o).div(kn(r)), _n(o).div(kn(r)))), o
        }
        var i = this.readSync(t.dataId), a = function (t) {
            for (var e = new Float32Array(t.length / 2), n = new Float32Array(t.length / 2), r = 0; r < t.length; r += 2) e[r / 2] = t[r], n[r / 2] = t[r + 1];
            return {real: e, imag: n}
        }(this.fourierTransformByMatmul(i, r, e));
        return Cn(a.real, a.imag).as2D(t.shape[0], t.shape[1])
    },Ih.prototype.isExponentOf2 = function (t) {
        return 0 == (t & t - 1)
    },Ih.prototype.fftRadix2 = function (t, e, n) {
        if (1 === e) return t;
        var r = this.readSync(t.dataId), o = e / 2, i = function (t) {
            for (var e = Math.ceil(t.length / 4), n = new Float32Array(e), r = new Float32Array(e), o = 0; o < t.length; o += 4) n[Math.floor(o / 4)] = t[o], r[Math.floor(o / 4)] = t[o + 1];
            return {real: n, imag: r}
        }(r), a = Cn(i.real, i.imag).as1D(), s = function (t) {
            for (var e = Math.floor(t.length / 4), n = new Float32Array(e), r = new Float32Array(e), o = 2; o < t.length; o += 4) n[Math.floor(o / 4)] = t[o], r[Math.floor(o / 4)] = t[o + 1];
            return {real: n, imag: r}
        }(r), u = Cn(s.real, s.imag).as1D();
        a = this.fftRadix2(a, o, n), u = this.fftRadix2(u, o, n);
        var c = function (t, e) {
                for (var n = new Float32Array(t / 2), r = new Float32Array(t / 2), o = 0; o < Math.ceil(t / 2); o++) {
                    var i = (e ? 2 : -2) * Math.PI * (o / t);
                    n[o] = Math.cos(i), r[o] = Math.sin(i)
                }
                return {real: n, imag: r}
            }(e, n), l = Cn(c.real, c.imag).mul(u), h = a.add(l), f = a.sub(l), p = En(h).concat(En(f)),
            d = _n(h).concat(_n(f));
        return Cn(p, d).as1D()
    },Ih.prototype.fourierTransformByMatmul = function (t, e, n) {
        for (var r = new Float32Array(2 * e), o = 0; o < e; o++) {
            for (var i = 0, a = 0, s = 0; s < e; s++) {
                var u = (d = o * s, v = e, m = (n ? 2 : -2) * Math.PI * (d / v), {
                    real: Math.cos(m),
                    imag: Math.sin(m)
                }), c = Oo(t, s);
                i += c.real * u.real - c.imag * u.imag, a += c.real * u.imag + c.imag * u.real
            }
            n && (i /= e, a /= e), h = i, f = a, (l = r)[2 * (p = o)] = h, l[2 * p + 1] = f
        }
        var l, h, f, p, d, v, m;
        return r
    },Ih.prototype.depthToSpace = function (t, e, n) {
        P("NHWC" === n, function () {
            return "Only NHWC dataFormat supported on CPU for depthToSpace. Got " + n
        }), P(1 < e, function () {
            return "blockSize should be > 1 for depthToSpace, but was: " + e
        });
        for (var r = t.shape[0], o = t.shape[1], i = t.shape[2], a = t.shape[3], s = o * e, u = i * e, c = a / (e * e), l = this.readSync(t.dataId), h = new Float32Array(r * s * u * c), f = 0, p = 0; p < r; ++p) for (var d = 0; d < s; ++d) for (var v = Math.floor(d / e), m = d % e, g = 0; g < u; ++g) for (var y = Math.floor(g / e), x = (m * e + g % e) * c, b = 0; b < c; ++b) {
            var w = b + x + a * (y + i * (v + o * p));
            h[f++] = l[w]
        }
        return Tn(h, [r, s, u, c])
    },Ih.prototype.broadcastedBinaryOp = function (a, s, t, u) {
        var e = go(a.shape, s.shape), c = cr(e, t), l = this.readSync(a.dataId), h = this.readSync(s.dataId),
            f = vo(a.shape, e), p = vo(s.shape, e), d = c.values;
        if (f.length + p.length === 0) for (var n = 0; n < d.length; ++n) d[n] = u(l[n % l.length], h[n % h.length]); else {
            var v = this.bufferSync(a), m = this.bufferSync(s), r = function (t) {
                var e = c.indexToLoc(t), n = e.slice(-a.rank);
                f.forEach(function (t) {
                    return n[t] = 0
                });
                var r = v.locToIndex(n), o = e.slice(-s.rank);
                p.forEach(function (t) {
                    return o[t] = 0
                });
                var i = m.locToIndex(o);
                d[t] = u(l[r], h[i])
            };
            for (n = 0; n < d.length; ++n) r(n)
        }
        return c.toTensor()
    },Ih.prototype.broadcastedBinaryComplexOp = function (s, u, c) {
        var t = go(s.shape, u.shape), l = cr(t, "float32"), e = cr(t, "float32"), h = this.readSync(s.dataId),
            f = this.readSync(u.dataId), p = vo(s.shape, t), d = vo(u.shape, t), v = l.values, m = e.values;
        if (p.length + d.length === 0) for (var n = 0; n < v.length; n++) {
            var r = n % h.length, o = n % f.length, i = c(h[2 * r], h[2 * r + 1], f[2 * o], f[2 * o + 1]);
            v[n] = i.real, m[n] = i.imag
        } else {
            var g = this.bufferSync(this.data.get(s.dataId).complexTensors.real),
                y = this.bufferSync(this.data.get(u.dataId).complexTensors.real), a = function (t) {
                    var e = l.indexToLoc(t), n = e.slice(-s.rank);
                    p.forEach(function (t) {
                        return n[t] = 0
                    });
                    var r = g.locToIndex(n), o = e.slice(-u.rank);
                    d.forEach(function (t) {
                        return o[t] = 0
                    });
                    var i = y.locToIndex(o), a = c(h[2 * r], h[2 * r + 1], f[2 * i], f[2 * i + 1]);
                    v[t] = a.real, m[t] = a.imag
                };
            for (n = 0; n < v.length; n++) a(n)
        }
        return this.complex(l.toTensor(), e.toTensor())
    },Ih.prototype.split = function (t, e, n) {
        return Vo(t, e, n)
    },Ih.prototype.dispose = function () {
    },Ih.prototype.floatPrecision = function () {
        return 32
    },Ih.prototype.epsilon = function () {
        return 1e-7
    },Ih.prototype.cropAndResize = function (t, e, n, r, o, i) {
        for (var a = t.shape, s = a[0], u = a[1], c = a[2], l = a[3], h = e.shape[0], f = r[0], p = r[1], d = cr([h, f, p, l], "float32"), v = this.readSync(e.dataId), m = this.readSync(n.dataId), g = this.readSync(t.dataId), y = t.strides, x = d.strides, b = 0; b < h; b++) {
            var w = 4 * b, C = v[w], E = v[1 + w], _ = v[2 + w], I = v[3 + w], R = m[b];
            if (!(s <= R)) for (var k = 1 < f ? (_ - C) * (u - 1) / (f - 1) : 0, S = 1 < p ? (I - E) * (c - 1) / (p - 1) : 0, D = 0; D < f; D++) {
                var A = 1 < f ? C * (u - 1) + D * k : .5 * (C + _) * (u - 1);
                if (A < 0 || u - 1 < A) for (var T = 0; T < p; T++) for (var N = 0; N < l; N++) {
                    var F = N + T * x[2] + D * x[1] + b * x[0];
                    d.values[F] = i
                } else if ("bilinear" === o) {
                    var M = Math.floor(A), O = Math.ceil(A), P = A - M;
                    for (T = 0; T < p; T++) if ((q = 1 < p ? E * (c - 1) + T * S : .5 * (E + I) * (c - 1)) < 0 || c - 1 < q) for (N = 0; N < l; N++) F = N + T * x[2] + D * x[1] + b * x[0], d.values[F] = i; else {
                        var B = Math.floor(q), L = Math.ceil(q), W = q - B;
                        for (N = 0; N < l; N++) {
                            var z = g[F = N + B * y[2] + M * y[1] + R * y[0]],
                                U = g[F = N + L * y[2] + M * y[1] + R * y[0]],
                                V = g[F = N + B * y[2] + O * y[1] + R * y[0]], G = z + (U - z) * W,
                                H = V + (g[F = N + L * y[2] + O * y[1] + R * y[0]] - V) * W;
                            F = N + T * x[2] + D * x[1] + b * x[0], d.values[F] = G + (H - G) * P
                        }
                    }
                } else for (T = 0; T < p; ++T) {
                    var q;
                    if ((q = 1 < p ? E * (c - 1) + T * S : .5 * (E + I) * (c - 1)) < 0 || c - 1 < q) for (N = 0; N < l; N++) F = N + T * x[2] + D * x[1] + b * x[0], d.values[F] = i; else {
                        var j = Math.round(q), K = Math.round(A);
                        for (N = 0; N < l; N++) {
                            var X = N + j * y[2] + K * y[1] + R * y[0], Y = N + T * x[2] + D * x[1] + b * x[0];
                            d.values[Y] = g[X]
                        }
                    }
                }
            }
        }
        return d.toTensor()
    },Ih.prototype.sparseToDense = function (t, e, n, r) {
        var o = Xr(0, t, n), i = o.sliceRank, a = o.numUpdates, s = o.sliceSize, u = o.strides, c = o.outputSize;
        return this.scatter(t, e, n, c, s, a, i, u, r, !1)
    },Ih.prototype.gatherND = function (t, e) {
        var n = e.shape, r = n[n.length - 1], o = Gr(t, e), i = o[0], a = o[1], s = o[2], u = o[3];
        if (0 === a) return In([], i, t.dtype);
        for (var c = new vt([a, s], t.dtype), l = this.readSync(e.dataId), h = this.readSync(t.dataId), f = 0; f < a; f++) {
            for (var p = [], d = 0, v = 0; v < r; v++) {
                var m = l[f * r + v];
                d += m * u[v], p.push(m)
            }
            if (d < 0 || d >= t.size / s) throw new Error("Invalid indices: " + p + " does not index into " + t.shape);
            for (var g = 0; g < s; g++) c.values[f * s + g] = h[d * s + g]
        }
        return c.toTensor().reshape(i)
    },Ih.prototype.scatterND = function (t, e, n) {
        var r = Xr(0, t, n), o = r.sliceRank, i = r.numUpdates, a = r.sliceSize, s = r.strides, u = r.outputSize,
            c = kn(0);
        return this.scatter(t, e, n, u, a, i, o, s, c, !0)
    },Ih.prototype.fill = function (t, e, n) {
        var r = F(n = n || j(e), L(t));
        return r.fill(e), Kt.makeTensor(r, t, n, this)
    },Ih.prototype.onesLike = function (t) {
        if ("string" === t.dtype) throw new Error("onesLike is not supported for string tensors");
        return this.fill(t.shape, 1, t.dtype)
    },Ih.prototype.zerosLike = function (t) {
        var e = F(t.dtype, L(t.shape));
        return this.makeOutput(e, t.shape, t.dtype)
    },Ih.prototype.linspace = function (t, e, n) {
        return No(t, e, n)
    },Ih.prototype.scatter = function (t, e, n, r, o, i, a, s, u, c) {
        var l = [r / o, o], h = this.readSync(t.dataId), f = this.readSync(e.dataId);
        if (0 === r) return In([], n, e.dtype);
        var p = new vt(l, e.dtype);
        p.values.fill(this.readSync(u.dataId)[0]);
        for (var d = 0; d < i; d++) {
            for (var v = [], m = 0, g = 0; g < a; g++) {
                var y = h[d * a + g];
                v.push(y), m += y * s[g]
            }
            if (m < 0 || r / o <= m) throw new Error("Invalid indices: " + v + " does not index into " + n);
            for (var x = 0; x < o; x++) c ? p.values[m * o + x] += f[d * o + x] : p.values[m * o + x] = 0 === e.rank ? f[0] : f[d * o + x]
        }
        return p.toTensor().reshape(n)
    },Ih);

    function Ih() {
        var t = Eh.call(this) || this;
        return t.blockSize = 48, t.firstUse = !0, t.data = new co(t, Kt), t
    }

    Kt.registerBackend("cpu", function () {
        return new _h
    }, 1);
    for (var Rh = 0, kh = [{
        kernelName: "NonMaxSuppressionV5", backendName: "cpu", kernelFunc: function (t) {
            var e = t.inputs, n = t.backend, r = t.attrs, o = e, i = o.boxes, a = o.scores, s = r, u = s.maxOutputSize,
                c = s.iouThreshold, l = s.scoreThreshold, h = s.softNmsSigma, f = n;
            wh(i, "NonMaxSuppressionWithScore");
            var p = Lo(f.data.get(i.dataId).values, f.data.get(a.dataId).values, u, c, l, h);
            return [p.selectedIndices, p.selectedScores]
        }
    }, {
        kernelName: "Square", backendName: "cpu", kernelFunc: function (t) {
            var e = t.inputs, n = t.backend, r = e.x, o = n;
            wh(r, "square");
            for (var i = o.data.get(r.dataId).values, a = new Float32Array(i.length), s = 0; s < i.length; ++s) {
                var u = i[s];
                a[s] = u * u
            }
            return {dataId: o.write(a, r.shape, r.dtype), shape: r.shape, dtype: r.dtype}
        }
    }, {
        kernelName: Fs, backendName: "cpu", kernelFunc: function (t) {
            var e = t.inputs, n = t.backend, r = e, o = r.a, i = r.b, a = n;
            wh([o, i], Fs);
            var s = a.data.get(o.dataId).values, u = a.data.get(i.dataId).values, c = function (t, e, a, s, n, u) {
                var r = go(t, e), c = r.length, l = Y(r), h = N(n, L(r)), f = t.length, p = e.length, d = Y(t),
                    v = Y(e), m = vo(t, r), g = vo(e, r);
                if (m.length + g.length === 0) for (var o = 0; o < h.length; ++o) h[o] = u(a[o % a.length], s[o % s.length]); else {
                    var i = function (t) {
                        var e = it(t, c, l), n = e.slice(-f);
                        m.forEach(function (t) {
                            return n[t] = 0
                        });
                        var r = ot(n, f, d), o = e.slice(-p);
                        g.forEach(function (t) {
                            return o[t] = 0
                        });
                        var i = ot(o, p, v);
                        h[t] = u(a[r], s[i])
                    };
                    for (o = 0; o < h.length; ++o) i(o)
                }
                return [h, r]
            }(o.shape, i.shape, s, u, o.dtype, function (t, e) {
                var n = t - e;
                return n * n
            }), l = c[0], h = c[1];
            return {dataId: a.write(l, h, o.dtype), shape: h, dtype: o.dtype}
        }
    }]; Rh < kh.length; Rh++) s(kh[Rh]);
    for (var Sh, Dh = function (t) {
        this.variableNames = ["A"];
        var e = Jo(), n = t[0], r = t[1];
        this.outputShape = t, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + r + ".0, " + n + ".0);\n\n        vec4 values = " + e.texture2D + "(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    "
    }, Ah = function (t) {
        this.variableNames = ["A"], this.packedInputs = !1, this.packedOutput = !0;
        var e = Jo(), n = t[0], r = t[1];
        this.outputShape = t, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(" + r + ".0, " + n + ".0);\n            vec4 values = " + e.texture2D + "(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        " + e.output + " = result;\n      }\n    "
    }, Th = 0, Nh = [{
        kernelName: "FromPixels", backendName: "webgl", kernelFunc: function (t) {
            var e = t.inputs, n = t.backend, r = t.attrs, o = e.pixels, i = r.numChannels,
                a = "undefined" != typeof HTMLVideoElement && o instanceof HTMLVideoElement,
                s = "undefined" != typeof HTMLImageElement && o instanceof HTMLImageElement,
                u = a ? [o.videoWidth, o.videoHeight] : [o.width, o.height], c = u[0], l = u[1], h = [l, c],
                f = [l, c, i];
            (s || a) && (null == Sh && (Sh = document.createElement("canvas").getContext("2d")), Sh.canvas.width = c, Sh.canvas.height = l, Sh.drawImage(o, 0, 0, c, l), o = Sh.canvas);
            var p = n.makeTensorInfo(h, "int32");
            n.texData.get(p.dataId).usage = Jt.PIXELS, n.gpgpu.uploadPixelDataToTexture(n.getTexture(p.dataId), o);
            var d = _().getBool("WEBGL_PACK") ? new Ah(f) : new Dh(f), v = n.runWebGLProgram(d, [p], "int32");
            return n.disposeData(p.dataId), v
        }
    }, {
        kernelName: "NonMaxSuppressionV5", backendName: "webgl", kernelFunc: function (t) {
            var e = t.inputs, n = t.backend, r = t.attrs;
            an("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
            var o = e, i = o.boxes, a = o.scores, s = r, u = s.maxOutputSize, c = s.iouThreshold, l = s.scoreThreshold,
                h = s.softNmsSigma, f = n, p = Lo(f.readSync(i.dataId), f.readSync(a.dataId), u, c, l, h);
            return [p.selectedIndices, p.selectedScores]
        }
    }, {
        kernelName: "Square", backendName: "webgl", kernelFunc: function (t) {
            var e = t.inputs, n = t.backend, r = e.x, o = n, i = new us(r.shape, "return x * x;");
            return o.runWebGLProgram(i, [r], r.dtype)
        }
    }, {
        kernelName: Fs, backendName: "webgl", kernelFunc: function (t) {
            var e = t.inputs, n = t.backend, r = e, o = r.a, i = r.b, a = n,
                s = _().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new di("return (a - b) * (a - b);", o.shape, i.shape) : new pi("return (a - b) * (a - b);", o.shape, i.shape);
            return a.compileAndRun(s, [o, i])
        }
    }]; Th < Nh.length; Th++) s(Nh[Th]);
    for (var Fh = 0, Mh = [{
        kernelName: "Square", gradFunc: function (t, e) {
            var n = e[0];
            return {
                x: function () {
                    return t.mul(n.toFloat().mul(2))
                }
            }
        }
    }, {
        kernelName: Fs, gradFunc: function (t, e) {
            var n = e[0], r = e[1], o = kn(2);
            return {
                a: function () {
                    return Yu(t, Yu(o, tc(n, r)))
                }, b: function () {
                    return Yu(t, Yu(o, tc(r, n)))
                }
            }
        }
    }]; Fh < Mh.length; Fh++) h(Mh[Fh]);
    var Oh = (Ph.prototype.fetch = function (t, e) {
        return fetch(t, e)
    }, Ph.prototype.now = function () {
        return performance.now()
    }, Ph.prototype.encode = function (t, e) {
        if ("utf-8" !== e && "utf8" !== e) throw new Error("Browser's encoder only supports utf-8, but got " + e);
        return null == this.textEncoder && (this.textEncoder = new TextEncoder), this.textEncoder.encode(t)
    }, Ph.prototype.decode = function (t, e) {
        return new TextDecoder(e).decode(t)
    }, Ph);

    function Ph() {
    }

    _().get("IS_BROWSER") && _().setPlatform("browser", new Oh);
    var Bh, Lh = (Wh.prototype.fetch = function (t, e) {
        return null != _().global.fetch ? _().global.fetch(t, e) : (null == Bh && (Bh = require("node-fetch")), Bh(t, e))
    }, Wh.prototype.now = function () {
        var t = process.hrtime();
        return 1e3 * t[0] + t[1] / 1e6
    }, Wh.prototype.encode = function (t, e) {
        if ("utf-8" !== e && "utf8" !== e) throw new Error("Node built-in encoder only supports utf-8, but got " + e);
        return this.textEncoder.encode(t)
    }, Wh.prototype.decode = function (t, e) {
        return 0 === t.length ? "" : new this.util.TextDecoder(e).decode(t)
    }, Wh);

    function Wh() {
        this.util = require("util"), this.textEncoder = new this.util.TextEncoder
    }

    _().get("IS_NODE") && _().setPlatform("node", new Lh);
    var zh = {float32: 4, int32: 4, uint16: 2, uint8: 1, bool: 1}, Uh = 4;

    function Vh(v, t) {
        for (var m = {}, g = 0, e = function (t) {
            var e = t.name, n = t.dtype, r = t.shape, o = L(r), i = void 0;
            if ("quantization" in t) {
                var a = t.quantization;
                if ("uint8" !== a.dtype && "uint16" !== a.dtype) throw new Error("Weight " + t.name + " has unknown quantization dtype " + a.dtype + ". Supported quantization dtypes are: 'uint8' and 'uint16'.");
                var s = zh[a.dtype], u = v.slice(g, g + o * s),
                    c = "uint8" === a.dtype ? new Uint8Array(u) : new Uint16Array(u);
                if ("float32" === n) i = Float32Array.from(c, function (t) {
                    return t * a.scale + a.min
                }); else {
                    if ("int32" !== n) throw new Error("Unsupported dtype in weight '" + e + "': " + n);
                    i = Int32Array.from(c, function (t) {
                        return Math.round(t * a.scale + a.min)
                    })
                }
                g += o * s
            } else if ("string" === n) {
                var l = L(t.shape);
                i = [];
                for (var h = 0; h < l; h++) {
                    var f = new Uint32Array(v.slice(g, g + Uh))[0];
                    g += Uh;
                    var p = new Uint8Array(v.slice(g, g + f));
                    i.push(p), g += f
                }
            } else {
                var d = zh[n];
                if (u = v.slice(g, g + o * d), "float32" === n) i = new Float32Array(u); else if ("int32" === n) i = new Int32Array(u); else {
                    if ("bool" !== n) throw new Error("Unsupported dtype in weight '" + e + "': " + n);
                    i = new Uint8Array(u)
                }
                g += o * d
            }
            m[e] = In(i, r, n)
        }, n = 0, r = t; n < r.length; n++) e(r[n]);
        return m
    }

    var Gh = "undefined" != typeof Buffer && ("undefined" == typeof Blob || "undefined" == typeof atob || "undefined" == typeof btoa);

    function Hh(t) {
        return Gh ? Buffer.byteLength(t) : new Blob([t]).size
    }

    function qh(t) {
        var e = 0;
        t.forEach(function (t) {
            e += t.byteLength
        });
        var n = new Uint8Array(e), r = 0;
        return t.forEach(function (t) {
            n.set(new Uint8Array(t), r), r += t.byteLength
        }), n.buffer
    }

    function jh(t) {
        for (t = t.trim(); t.endsWith("/");) t = t.slice(0, t.length - 1);
        var e = t.split("/");
        return e[e.length - 1]
    }

    function Kh(t) {
        if (t.modelTopology instanceof ArrayBuffer) throw new Error("Expected JSON model topology, received ArrayBuffer.");
        return {
            dateSaved: new Date,
            modelTopologyType: "JSON",
            modelTopologyBytes: null == t.modelTopology ? 0 : Hh(JSON.stringify(t.modelTopology)),
            weightSpecsBytes: null == t.weightSpecs ? 0 : Hh(JSON.stringify(t.weightSpecs)),
            weightDataBytes: null == t.weightData ? 0 : t.weightData.byteLength
        }
    }

    var Xh = (Qh.getInstance = function () {
        return null == Qh.instance && (Qh.instance = new Qh), Qh.instance
    }, Qh.registerSaveRouter = function (t) {
        Qh.getInstance().saveRouters.push(t)
    }, Qh.registerLoadRouter = function (t) {
        Qh.getInstance().loadRouters.push(t)
    }, Qh.getSaveHandlers = function (t) {
        return Qh.getHandlers(t, "save")
    }, Qh.getLoadHandlers = function (t, e) {
        return Qh.getHandlers(t, "load", e)
    }, Qh.getHandlers = function (n, t, r) {
        var o = [];
        return ("load" === t ? Qh.getInstance().loadRouters : Qh.getInstance().saveRouters).forEach(function (t) {
            var e = t(n, r);
            null !== e && o.push(e)
        }), o
    }, Qh), Yh = "://", $h = (Jh.getInstance = function () {
        return null == Jh.instance && (Jh.instance = new Jh), Jh.instance
    }, Jh.registerManager = function (t, e) {
        P(null != t, function () {
            return "scheme must not be undefined or null."
        }), t.endsWith(Yh) && (t = t.slice(0, t.indexOf(Yh))), P(0 < t.length, function () {
            return "scheme must not be an empty string."
        });
        var n = Jh.getInstance();
        P(null == n.managers[t], function () {
            return "A model store manager is already registered for scheme '" + t + "'."
        }), n.managers[t] = e
    }, Jh.getManager = function (t) {
        var e = this.getInstance().managers[t];
        if (null == e) throw new Error("Cannot find model manager for scheme '" + t + "'");
        return e
    }, Jh.getSchemes = function () {
        return Object.keys(this.getInstance().managers)
    }, Jh);

    function Jh() {
        this.managers = {}
    }

    function Qh() {
        this.saveRouters = [], this.loadRouters = []
    }

    function Zh(t) {
        if (-1 === t.indexOf(Yh)) throw new Error("The url string provided does not contain a scheme. Supported schemes are: " + $h.getSchemes().join(","));
        return {scheme: t.split(Yh)[0], path: t.split(Yh)[1]}
    }

    function tf(l, h, f) {
        return void 0 === f && (f = !1), y(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return P(l !== h, function () {
                            return "Old path and new path are the same: '" + l + "'"
                        }), P(0 < (e = Xh.getLoadHandlers(l)).length, function () {
                            return "Copying failed because no load handler is found for source URL " + l + "."
                        }), P(e.length < 2, function () {
                            return "Copying failed because more than one (" + e.length + ") load handlers for source URL " + l + "."
                        }), n = e[0], P(0 < (r = Xh.getSaveHandlers(h)).length, function () {
                            return "Copying failed because no save handler is found for destination URL " + h + "."
                        }), P(r.length < 2, function () {
                            return "Copying failed because more than one (" + e.length + ") save handlers for destination URL " + h + "."
                        }), o = r[0], i = Zh(l).scheme, a = Zh(l).path, s = i === Zh(l).scheme, [4, n.load()];
                    case 1:
                        return u = t.sent(), f && s ? [4, $h.getManager(i).removeModel(a)] : [3, 3];
                    case 2:
                        t.sent(), t.label = 3;
                    case 3:
                        return [4, o.save(u)];
                    case 4:
                        return c = t.sent(), !f || s ? [3, 6] : [4, $h.getManager(i).removeModel(a)];
                    case 5:
                        t.sent(), t.label = 6;
                    case 6:
                        return [2, c.modelArtifactsInfo]
                }
            })
        })
    }

    var ef = "models_store", nf = "model_info_store";

    function rf() {
        if (!_().getBool("IS_BROWSER")) throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
        var t = window || self,
            e = t.indexedDB || t.mozIndexedDB || t.webkitIndexedDB || t.msIndexedDB || t.shimIndexedDB;
        if (null == e) throw new Error("The current browser does not appear to support IndexedDB.");
        return e
    }

    function of(t) {
        var e = t.result;
        e.createObjectStore(ef, {keyPath: "modelPath"}), e.createObjectStore(nf, {keyPath: "modelPath"})
    }

    function af(t) {
        return _().getBool("IS_BROWSER") && !Array.isArray(t) && t.startsWith(sf.URL_SCHEME) ? (e = t.slice(sf.URL_SCHEME.length), new sf(e)) : null;
        var e
    }

    var sf = (uf.prototype.save = function (e) {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                if (e.modelTopology instanceof ArrayBuffer) throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
                return [2, this.databaseAction(this.modelPath, e)]
            })
        })
    }, uf.prototype.load = function () {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                return [2, this.databaseAction(this.modelPath)]
            })
        })
    }, uf.prototype.databaseAction = function (t, h) {
        var f = this;
        return new Promise(function (u, c) {
            var l = f.indexedDB.open("tensorflowjs", 1);
            l.onupgradeneeded = function () {
                return of(l)
            }, l.onsuccess = function () {
                var r = l.result;
                if (null == h) {
                    var t = r.transaction(ef, "readonly"), e = t.objectStore(ef).get(f.modelPath);
                    e.onsuccess = function () {
                        if (null == e.result) return r.close(), c(new Error("Cannot find model with path '" + f.modelPath + "' in IndexedDB."));
                        u(e.result.modelArtifacts)
                    }, e.onerror = function (t) {
                        return r.close(), c(e.error)
                    }, t.oncomplete = function () {
                        return r.close()
                    }
                } else {
                    var o, i = Kh(h), a = r.transaction(nf, "readwrite"), s = a.objectStore(nf),
                        n = s.put({modelPath: f.modelPath, modelArtifactsInfo: i});
                    n.onsuccess = function () {
                        var n = (o = r.transaction(ef, "readwrite")).objectStore(ef).put({
                            modelPath: f.modelPath,
                            modelArtifacts: h,
                            modelArtifactsInfo: i
                        });
                        n.onsuccess = function () {
                            return u({modelArtifactsInfo: i})
                        }, n.onerror = function (t) {
                            var e = (s = a.objectStore(nf)).delete(f.modelPath);
                            e.onsuccess = function () {
                                return r.close(), c(n.error)
                            }, e.onerror = function (t) {
                                return r.close(), c(n.error)
                            }
                        }
                    }, n.onerror = function (t) {
                        return r.close(), c(n.error)
                    }, a.oncomplete = function () {
                        null == o ? r.close() : o.oncomplete = function () {
                            return r.close()
                        }
                    }
                }
            }, l.onerror = function (t) {
                return c(l.error)
            }
        })
    }, uf.URL_SCHEME = "indexeddb://", uf);

    function uf(t) {
        if (this.indexedDB = rf(), null == t || !t) throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
        this.modelPath = t
    }

    Xh.registerSaveRouter(af), Xh.registerLoadRouter(af);
    var cf = (lf.prototype.listModels = function () {
        return y(this, void 0, void 0, function () {
            var e = this;
            return R(this, function (t) {
                return [2, new Promise(function (i, n) {
                    var r = e.indexedDB.open("tensorflowjs", 1);
                    r.onupgradeneeded = function () {
                        return of(r)
                    }, r.onsuccess = function () {
                        var e = r.result, t = e.transaction(nf, "readonly"), o = t.objectStore(nf).getAll();
                        o.onsuccess = function () {
                            for (var t = {}, e = 0, n = o.result; e < n.length; e++) {
                                var r = n[e];
                                t[r.modelPath] = r.modelArtifactsInfo
                            }
                            i(t)
                        }, o.onerror = function (t) {
                            return e.close(), n(o.error)
                        }, t.oncomplete = function () {
                            return e.close()
                        }
                    }, r.onerror = function (t) {
                        return n(r.error)
                    }
                })]
            })
        })
    }, lf.prototype.removeModel = function (u) {
        return y(this, void 0, void 0, function () {
            var n = this;
            return R(this, function (t) {
                var e;
                return u = (e = u).startsWith(sf.URL_SCHEME) ? e.slice(sf.URL_SCHEME.length) : e, [2, new Promise(function (a, s) {
                    var e = n.indexedDB.open("tensorflowjs", 1);
                    e.onupgradeneeded = function () {
                        return of(e)
                    }, e.onsuccess = function () {
                        var n, r = e.result, t = r.transaction(nf, "readwrite"), o = t.objectStore(nf), i = o.get(u);
                        i.onsuccess = function () {
                            if (null == i.result) return r.close(), s(new Error("Cannot find model with path '" + u + "' in IndexedDB."));

                            function e() {
                                var t = (n = r.transaction(ef, "readwrite")).objectStore(ef).delete(u);
                                t.onsuccess = function () {
                                    return a(i.result.modelArtifactsInfo)
                                }, t.onerror = function (t) {
                                    return s(i.error)
                                }
                            }

                            var t = o.delete(u);
                            t.onsuccess = e, t.onerror = function (t) {
                                return e(), r.close(), s(i.error)
                            }
                        }, i.onerror = function (t) {
                            return r.close(), s(i.error)
                        }, t.oncomplete = function () {
                            null == n ? r.close() : n.oncomplete = function () {
                                return r.close()
                            }
                        }
                    }, e.onerror = function (t) {
                        return s(e.error)
                    }
                })]
            })
        })
    }, lf);

    function lf() {
        this.indexedDB = rf()
    }

    if (_().getBool("IS_BROWSER")) try {
        $h.registerManager(sf.URL_SCHEME, new cf)
    } catch (r) {
    }
    var hf = "/", ff = "tensorflowjs_models", pf = "info", df = "model_topology", vf = "weight_specs",
        mf = "weight_data", gf = "model_metadata";

    function yf(t) {
        return {
            info: [ff, t, pf].join(hf),
            topology: [ff, t, df].join(hf),
            weightSpecs: [ff, t, vf].join(hf),
            weightData: [ff, t, mf].join(hf),
            modelMetadata: [ff, t, gf].join(hf)
        }
    }

    function xf(t) {
        var e = t.split(hf);
        if (e.length < 3) throw new Error("Invalid key format: " + t);
        return e.slice(1, e.length - 1).join(hf)
    }

    function bf(t) {
        return _().getBool("IS_BROWSER") && !Array.isArray(t) && t.startsWith(wf.URL_SCHEME) ? (e = t.slice(wf.URL_SCHEME.length), new wf(e)) : null;
        var e
    }

    var wf = (Cf.prototype.save = function (o) {
        return y(this, void 0, void 0, function () {
            var e, n, r;
            return R(this, function (t) {
                if (o.modelTopology instanceof ArrayBuffer) throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
                e = JSON.stringify(o.modelTopology), n = JSON.stringify(o.weightSpecs), r = Kh(o);
                try {
                    return this.LS.setItem(this.keys.info, JSON.stringify(r)), this.LS.setItem(this.keys.topology, e), this.LS.setItem(this.keys.weightSpecs, n), this.LS.setItem(this.keys.weightData, function (t) {
                        if (Gh) return Buffer.from(t).toString("base64");
                        for (var e = new Uint8Array(t), n = "", r = 0, o = e.length; r < o; r++) n += String.fromCharCode(e[r]);
                        return btoa(n)
                    }(o.weightData)), this.LS.setItem(this.keys.modelMetadata, JSON.stringify({
                        format: o.format,
                        generatedBy: o.generatedBy,
                        convertedBy: o.convertedBy,
                        userDefinedMetadata: o.userDefinedMetadata
                    })), [2, {modelArtifactsInfo: r}]
                } catch (t) {
                    throw this.LS.removeItem(this.keys.info), this.LS.removeItem(this.keys.topology), this.LS.removeItem(this.keys.weightSpecs), this.LS.removeItem(this.keys.weightData), this.LS.removeItem(this.keys.modelMetadata), new Error("Failed to save model '" + this.modelPath + "' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" + r.modelTopologyBytes + ", weightSpecsBytes=" + r.weightSpecsBytes + ", weightDataBytes=" + r.weightDataBytes + ".")
                }
                return [2]
            })
        })
    }, Cf.prototype.load = function () {
        return y(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s;
            return R(this, function (t) {
                if (null == (e = JSON.parse(this.LS.getItem(this.keys.info)))) throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
                if ("JSON" !== e.modelTopologyType) throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
                if (n = {}, null == (r = JSON.parse(this.LS.getItem(this.keys.topology)))) throw new Error("In local storage, the topology of model '" + this.modelPath + "' is missing.");
                if (n.modelTopology = r, null == (o = JSON.parse(this.LS.getItem(this.keys.weightSpecs)))) throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' are missing.");
                if (n.weightSpecs = o, null != (i = this.LS.getItem(this.keys.modelMetadata)) && (a = JSON.parse(i), n.format = a.format, n.generatedBy = a.generatedBy, n.convertedBy = a.convertedBy, n.userDefinedMetadata = a.userDefinedMetadata), null == (s = this.LS.getItem(this.keys.weightData))) throw new Error("In local storage, the binary weight values of model '" + this.modelPath + "' are missing.");
                return n.weightData = function (t) {
                    if (Gh) {
                        var e = Buffer.from(t, "base64");
                        return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                    }
                    for (var n = atob(t), r = new Uint8Array(n.length), o = 0; o < n.length; ++o) r.set([n.charCodeAt(o)], o);
                    return r.buffer
                }(s), [2, n]
            })
        })
    }, Cf.URL_SCHEME = "localstorage://", Cf);

    function Cf(t) {
        if (!_().getBool("IS_BROWSER") || "undefined" == typeof window || void 0 === window.localStorage) throw new Error("The current environment does not support local storage.");
        if (this.LS = window.localStorage, null == t || !t) throw new Error("For local storage, modelPath must not be null, undefined or empty.");
        this.modelPath = t, this.keys = yf(this.modelPath)
    }

    Xh.registerSaveRouter(bf), Xh.registerLoadRouter(bf);
    var Ef = (_f.prototype.listModels = function () {
        return y(this, void 0, void 0, function () {
            var e, n, r, o, i, a;
            return R(this, function (t) {
                for (e = {}, n = ff + hf, r = hf + pf, o = 0; o < this.LS.length; ++o) (i = this.LS.key(o)).startsWith(n) && i.endsWith(r) && (a = xf(i), e[a] = JSON.parse(this.LS.getItem(i)));
                return [2, e]
            })
        })
    }, _f.prototype.removeModel = function (o) {
        return y(this, void 0, void 0, function () {
            var n, r;
            return R(this, function (t) {
                var e;
                if (o = (e = o).startsWith(wf.URL_SCHEME) ? e.slice(wf.URL_SCHEME.length) : e, n = yf(o), null == this.LS.getItem(n.info)) throw new Error("Cannot find model at path '" + o + "'");
                return r = JSON.parse(this.LS.getItem(n.info)), this.LS.removeItem(n.info), this.LS.removeItem(n.topology), this.LS.removeItem(n.weightSpecs), this.LS.removeItem(n.weightData), [2, r]
            })
        })
    }, _f);

    function _f() {
        P(_().getBool("IS_BROWSER"), function () {
            return "Current environment is not a web browser"
        }), P("undefined" == typeof window || void 0 !== window.localStorage, function () {
            return "Current browser does not appear to support localStorage"
        }), this.LS = window.localStorage
    }

    if (_().getBool("IS_BROWSER")) try {
        $h.registerManager(wf.URL_SCHEME, new Ef)
    } catch (r) {
    }

    function If(t) {
        return new Promise(function (t) {
            return setTimeout(t)
        }).then(t)
    }

    var Rf = (Df.prototype.save = function (s) {
        return y(this, void 0, void 0, function () {
            var e, n, r, o, i, a;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        if ("undefined" == typeof document) throw new Error("Browser downloads are not supported in this environment since `document` is not present");
                        if (e = window.URL.createObjectURL(new Blob([s.weightData], {type: "application/octet-stream"})), !(s.modelTopology instanceof ArrayBuffer)) return [3, 1];
                        throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
                    case 1:
                        return n = [{
                            paths: ["./" + this.weightDataFileName],
                            weights: s.weightSpecs
                        }], r = {
                            modelTopology: s.modelTopology,
                            format: s.format,
                            generatedBy: s.generatedBy,
                            convertedBy: s.convertedBy,
                            weightsManifest: n
                        }, o = window.URL.createObjectURL(new Blob([JSON.stringify(r)], {type: "application/json"})), (i = null == this.jsonAnchor ? document.createElement("a") : this.jsonAnchor).download = this.modelTopologyFileName, i.href = o, [4, If(function () {
                            return i.dispatchEvent(new MouseEvent("click"))
                        })];
                    case 2:
                        return t.sent(), null == s.weightData ? [3, 4] : ((a = null == this.weightDataAnchor ? document.createElement("a") : this.weightDataAnchor).download = this.weightDataFileName, a.href = e, [4, If(function () {
                            return a.dispatchEvent(new MouseEvent("click"))
                        })]);
                    case 3:
                        t.sent(), t.label = 4;
                    case 4:
                        return [2, {modelArtifactsInfo: Kh(s)}]
                }
            })
        })
    }, Df.URL_SCHEME = "downloads://", Df), kf = (Sf.prototype.load = function () {
        return y(this, void 0, void 0, function () {
            var r, h, f = this;
            return R(this, function (t) {
                return r = this.files[0], h = this.files.slice(1), [2, new Promise(function (c, l) {
                    var t = new FileReader;
                    t.onload = function (t) {
                        var o = JSON.parse(t.target.result), i = o.modelTopology;
                        if (null != i) {
                            0 === h.length && c({modelTopology: i});
                            var e = o.weightsManifest;
                            if (null != e) {
                                var n;
                                try {
                                    n = f.checkManifestAndWeightFiles(e, h)
                                } catch (t) {
                                    return void l(t)
                                }
                                var a = [], s = [], u = [];
                                e.forEach(function (t) {
                                    t.paths.forEach(function (t) {
                                        s.push(t), u.push(null)
                                    }), a.push.apply(a, t.weights)
                                }), e.forEach(function (t) {
                                    t.paths.forEach(function (r) {
                                        var t = new FileReader;
                                        t.onload = function (t) {
                                            var e = t.target.result, n = s.indexOf(r);
                                            u[n] = e, -1 === u.indexOf(null) && c({
                                                modelTopology: i,
                                                weightSpecs: a,
                                                weightData: qh(u),
                                                format: o.format,
                                                generatedBy: o.generatedBy,
                                                convertedBy: o.convertedBy,
                                                userDefinedMetadata: o.userDefinedMetadata
                                            })
                                        }, t.onerror = function (t) {
                                            return l("Failed to weights data from file of path '" + r + "'.")
                                        }, t.readAsArrayBuffer(n[r])
                                    })
                                })
                            } else l(new Error("weightManifest field is missing from file " + r.name))
                        } else l(new Error("modelTopology field is missing from file " + r.name))
                    }, t.onerror = function (t) {
                        return l("Failed to read model topology and weights manifest JSON from file '" + r.name + "'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")
                    }, t.readAsText(r)
                })]
            })
        })
    }, Sf.prototype.checkManifestAndWeightFiles = function (t, n) {
        for (var r = [], o = n.map(function (t) {
            return jh(t.name)
        }), i = {}, e = 0, a = t; e < a.length; e++) a[e].paths.forEach(function (t) {
            var e = jh(t);
            if (-1 !== r.indexOf(e)) throw new Error("Duplicate file basename found in weights manifest: '" + e + "'");
            if (r.push(e), -1 === o.indexOf(e)) throw new Error("Weight file with basename '" + e + "' is not provided.");
            i[t] = n[o.indexOf(e)]
        });
        if (r.length !== n.length) throw new Error("Mismatch in the number of files in weights manifest (" + r.length + ") and the number of weight files provided (" + n.length + ").");
        return i
    }, Sf);

    function Sf(t) {
        if (null == t || t.length < 1) throw new Error("When calling browserFiles, at least 1 file is required, but received " + t);
        this.files = t
    }

    function Df(t) {
        if (!_().getBool("IS_BROWSER")) throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
        t.startsWith(Df.URL_SCHEME) && (t = t.slice(Df.URL_SCHEME.length)), null != t && 0 !== t.length || (t = "model"), this.modelTopologyFileName = t + ".json", this.weightDataFileName = t + ".weights.bin"
    }

    function Af(n, r, o, i) {
        var t, e, a;
        P(null != (a = n) && Array.isArray(a) && 0 < a.length, function () {
            return "promises must be a none empty array"
        }), t = o = null == o ? 0 : o, e = i = null == i ? 1 : i, P(0 <= t && t <= 1, function () {
            return "Progress fraction must be in range [0, 1], but got startFraction " + t
        }), P(0 <= e && e <= 1, function () {
            return "Progress fraction must be in range [0, 1], but got endFraction " + e
        }), P(t <= e, function () {
            return "startFraction must be no more than endFraction, but got startFraction " + t + " and endFraction " + e
        });
        var s = 0;
        return Promise.all(n.map(function (t) {
            return t.then(function (t) {
                var e = o + ++s / n.length * (i - o);
                return r(e), t
            }), t
        }))
    }

    function Tf(l, h) {
        return y(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return null == h && (h = {}), e = null == h.fetchFunc ? _().platform.fetch : h.fetchFunc, n = l.map(function (t) {
                            return e(t, h.requestInit, {isBinary: !0})
                        }), r = 0, o = .5, null != h.onProgress ? [3, 2] : [4, Promise.all(n)];
                    case 1:
                        return i = t.sent(), [3, 4];
                    case 2:
                        return [4, Af(n, h.onProgress, r, o)];
                    case 3:
                        i = t.sent(), t.label = 4;
                    case 4:
                        return a = i.map(function (t) {
                            return t.arrayBuffer()
                        }), s = .5, u = 1, null != h.onProgress ? [3, 6] : [4, Promise.all(a)];
                    case 5:
                        return c = t.sent(), [3, 8];
                    case 6:
                        return [4, Af(a, h.onProgress, s, u)];
                    case 7:
                        c = t.sent(), t.label = 8;
                    case 8:
                        return [2, c]
                }
            })
        })
    }

    function Nf(i) {
        var t = this;
        return function (p, o, d) {
            return void 0 === o && (o = ""), y(t, void 0, void 0, function () {
                var a, c, s, u, e, n, r, l, h, f;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (a = p.map(function () {
                                return !1
                            }), c = {}, s = null != d ? d.map(function () {
                                return !1
                            }) : [], u = [], p.forEach(function (t, o) {
                                var i = 0;
                                t.weights.forEach(function (n) {
                                    function r() {
                                        a[o] = !0, null == c[o] && (c[o] = []), c[o].push({
                                            manifestEntry: n,
                                            groupOffset: i,
                                            sizeBytes: e
                                        })
                                    }

                                    var t = "quantization" in n ? n.quantization.dtype : n.dtype,
                                        e = zh[t] * L(n.shape);
                                    null != d ? d.forEach(function (t, e) {
                                        t === n.name && (r(), s[e] = !0)
                                    }) : r(), u.push(n.name), i += e
                                })
                            }), !s.every(function (t) {
                                return t
                            })) throw e = d.filter(function (t, e) {
                                return !s[e]
                            }), new Error("Could not find weights in manifest with names: " + e.join(", ") + ". \nManifest JSON has weights with names: " + u.join(", ") + ".");
                            return n = a.reduce(function (t, e, n) {
                                return e && t.push(n), t
                            }, []), r = [], n.forEach(function (t) {
                                p[t].paths.forEach(function (t) {
                                    var e = o + (o.endsWith("/") ? "" : "/") + t;
                                    r.push(e)
                                })
                            }), [4, i(r)];
                        case 1:
                            return l = t.sent(), h = {}, f = 0, n.forEach(function (t) {
                                for (var e = p[t].paths.length, n = 0, r = 0; r < e; r++) n += l[f + r].byteLength;
                                for (var o = new ArrayBuffer(n), i = new Uint8Array(o), a = 0, s = 0; s < e; s++) {
                                    var u = new Uint8Array(l[f + s]);
                                    i.set(u, a), a += u.byteLength
                                }
                                c[t].forEach(function (t) {
                                    var e = Vh(o.slice(t.groupOffset, t.groupOffset + t.sizeBytes), [t.manifestEntry]);
                                    for (var n in e) h[n] = e[n]
                                }), f += e
                            }), [2, h]
                    }
                })
            })
        }
    }

    Xh.registerSaveRouter(function (t) {
        return _().getBool("IS_BROWSER") && !Array.isArray(t) && t.startsWith(Rf.URL_SCHEME) ? (void 0 === (e = t.slice(Rf.URL_SCHEME.length)) && (e = "model"), new Rf(e)) : null;
        var e
    });
    var Ff = (Mf.prototype.save = function (i) {
        return y(this, void 0, void 0, function () {
            var e, n, r, o;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (i.modelTopology instanceof ArrayBuffer) throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
                        return (e = Object.assign({method: this.DEFAULT_METHOD}, this.requestInit)).body = new FormData, n = [{
                            paths: ["./model.weights.bin"],
                            weights: i.weightSpecs
                        }], r = {
                            modelTopology: i.modelTopology,
                            format: i.format,
                            generatedBy: i.generatedBy,
                            convertedBy: i.convertedBy,
                            userDefinedMetadata: i.userDefinedMetadata,
                            weightsManifest: n
                        }, e.body.append("model.json", new Blob([JSON.stringify(r)], {type: "application/json"}), "model.json"), null != i.weightData && e.body.append("model.weights.bin", new Blob([i.weightData], {type: "application/octet-stream"}), "model.weights.bin"), [4, this.fetch(this.path, e)];
                    case 1:
                        if ((o = t.sent()).ok) return [2, {modelArtifactsInfo: Kh(i), responses: [o]}];
                        throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " + o.status + ".")
                }
            })
        })
    }, Mf.prototype.load = function () {
        return y(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l, h, f;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.fetch(this.path, this.requestInit)];
                    case 1:
                        if (!(e = t.sent()).ok) throw new Error("Request to " + this.path + " failed with status code " + e.status + ". Please verify this URL points to the model JSON of the model to load.");
                        t.label = 2;
                    case 2:
                        return t.trys.push([2, 4, , 5]), [4, e.json()];
                    case 3:
                        return n = t.sent(), [3, 5];
                    case 4:
                        throw t.sent(), r = "Failed to parse model JSON of response from " + this.path + ".", this.path.endsWith(".pb") ? r += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository." : r += " Please make sure the server is serving valid JSON for this request.", new Error(r);
                    case 5:
                        if (o = n.modelTopology, i = n.weightsManifest, a = n.generatedBy, s = n.convertedBy, u = n.format, c = n.userDefinedMetadata, null == o && null == i) throw new Error("The JSON from HTTP path " + this.path + " contains neither model topology or manifest for weights.");
                        return null == i ? [3, 7] : [4, this.loadWeights(i)];
                    case 6:
                        f = t.sent(), l = f[0], h = f[1], t.label = 7;
                    case 7:
                        return [2, {
                            modelTopology: o,
                            weightSpecs: l,
                            weightData: h,
                            userDefinedMetadata: c,
                            generatedBy: a,
                            convertedBy: s,
                            format: u
                        }]
                }
            })
        })
    }, Mf.prototype.loadWeights = function (v) {
        return y(this, void 0, void 0, function () {
            var o, i, a, s, u, c, l, h, f, p, d;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        for (o = Array.isArray(this.path) ? this.path[1] : this.path, n = (e = o).lastIndexOf("/"), r = e.lastIndexOf("?"), i = [e.substring(0, n) + "/", n < r ? e.substring(r) : ""], a = i[0], s = i[1], u = this.weightPathPrefix || a, c = [], l = 0, h = v; l < h.length; l++) f = h[l], c.push.apply(c, f.weights);
                        return p = [], v.forEach(function (t) {
                            t.paths.forEach(function (t) {
                                p.push(u + t + s)
                            })
                        }), [4, Tf(p, {
                            requestInit: this.requestInit,
                            fetchFunc: this.fetch,
                            onProgress: this.onProgress
                        })];
                    case 1:
                        return d = t.sent(), [2, [c, qh(d)]]
                }
                var e, n, r
            })
        })
    }, Mf.URL_SCHEME_REGEX = /^https?:\/\//, Mf);

    function Mf(t, e) {
        if (this.DEFAULT_METHOD = "POST", null == e && (e = {}), this.weightPathPrefix = e.weightPathPrefix, this.onProgress = e.onProgress, null != e.fetchFunc ? (P("function" == typeof e.fetchFunc, function () {
            return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"
        }), this.fetch = e.fetchFunc) : this.fetch = _().platform.fetch, P(null != t && 0 < t.length, function () {
            return "URL path for http must not be null, undefined or empty."
        }), Array.isArray(t) && P(2 === t.length, function () {
            return "URL paths for http must have a length of 2, (actual length is " + t.length + ")."
        }), this.path = t, null != e.requestInit && null != e.requestInit.body) throw new Error("requestInit is expected to have no pre-existing body, but has one.");
        this.requestInit = e.requestInit || {}
    }

    function Of(t) {
        return null != t.match(Ff.URL_SCHEME_REGEX)
    }

    function Pf(t, e) {
        return "undefined" == typeof fetch ? null : (Array.isArray(t) ? t.every(function (t) {
            return Of(t)
        }) : Of(t)) ? Bf(t, {onProgress: e}) : null
    }

    function Bf(t, e) {
        return new Ff(t, e)
    }

    Xh.registerSaveRouter(Pf), Xh.registerLoadRouter(Pf);
    var Lf = (Uf.prototype.load = function () {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                return [2, this.modelArtifacts]
            })
        })
    }, Uf), Wf = (zf.prototype.save = function (e) {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                return [2, this.saveHandler(e)]
            })
        })
    }, zf);

    function zf(t) {
        this.saveHandler = t
    }

    function Uf(t) {
        this.modelArtifacts = t
    }

    var Vf, Gf = Object.freeze({
        browserFiles: function (t) {
            return new kf(t)
        }, browserHTTPRequest: function (t, e) {
            return Bf(t, e)
        }, concatenateArrayBuffers: qh, decodeWeights: Vh, encodeWeights: function (u, l) {
            return y(this, void 0, void 0, function () {
                var o, i, a, e, n, s = this;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            for (o = [], i = [], a = Array.isArray(u) ? u.map(function (t) {
                                return t.name
                            }) : Object.keys(u), e = function (t) {
                                var e = a[t], c = Array.isArray(u) ? u[t].tensor : u[e];
                                if ("float32" !== c.dtype && "int32" !== c.dtype && "bool" !== c.dtype && "string" !== c.dtype) throw new Error("Unsupported dtype in weight '" + e + "': " + c.dtype);
                                var n = {name: e, shape: c.shape, dtype: c.dtype};
                                if ("string" === c.dtype) {
                                    var r = new Promise(function (u) {
                                        return y(s, void 0, void 0, function () {
                                            var e, n, r, o, i, a, s;
                                            return R(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, c.bytes()];
                                                    case 1:
                                                        for (e = t.sent(), n = e.reduce(function (t, e) {
                                                            return t + e.length
                                                        }, 0) + Uh * e.length, r = new Uint8Array(n), i = o = 0; i < e.length; i++) a = e[i], s = new Uint8Array(new Uint32Array([a.length]).buffer), r.set(s, o), o += Uh, r.set(a, o), o += a.length;
                                                        return u(r), [2]
                                                }
                                            })
                                        })
                                    });
                                    i.push(r)
                                } else i.push(c.data());
                                null != l && (n.group = l), o.push(n)
                            }, n = 0; n < a.length; ++n) e(n);
                            return [4, Promise.all(i)];
                        case 1:
                            return [2, {
                                data: function (t) {
                                    if (null === t) throw new Error("Invalid input value: " + JSON.stringify(t));
                                    var e = 0, n = [];
                                    t.forEach(function (t) {
                                        if (e += t.byteLength, n.push(t.byteLength === t.buffer.byteLength ? t : new t.constructor(t)), !(t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array)) throw new Error("Unsupported TypedArray subtype: " + t.constructor.name)
                                    });
                                    var r = new Uint8Array(e), o = 0;
                                    return n.forEach(function (t) {
                                        r.set(new Uint8Array(t.buffer), o), o += t.byteLength
                                    }), r.buffer
                                }(t.sent()), specs: o
                            }]
                    }
                })
            })
        }, fromMemory: function (t, e, n, r) {
            return 1 === arguments.length ? null != t.modelTopology || null != t.weightSpecs ? new Lf(t) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new Lf({modelTopology: t})) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new Lf({
                modelTopology: t,
                weightSpecs: e,
                weightData: n,
                trainingConfig: r
            }))
        }, getLoadHandlers: function (t, e) {
            return Xh.getLoadHandlers(t, e)
        }, getModelArtifactsInfoForJSON: Kh, getSaveHandlers: function (t) {
            return Xh.getSaveHandlers(t)
        }, http: Bf, isHTTPScheme: Of, loadWeights: function (e, n, r, o) {
            return void 0 === n && (n = ""), y(this, void 0, void 0, function () {
                return R(this, function (t) {
                    return [2, Nf(function (t) {
                        return Tf(t, {requestInit: o})
                    })(e, n, r)]
                })
            })
        }, registerLoadRouter: function (t) {
            return Xh.registerLoadRouter(t)
        }, registerSaveRouter: function (t) {
            return Xh.registerSaveRouter(t)
        }, weightsLoaderFactory: Nf, withSaveHandler: function (t) {
            return new Wf(t)
        }, copyModel: function (e, n) {
            return y(this, void 0, void 0, function () {
                return R(this, function (t) {
                    return [2, tf(e, n, !1)]
                })
            })
        }, listModels: function () {
            return y(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            e = $h.getSchemes(), n = {}, r = 0, o = e, t.label = 1;
                        case 1:
                            return r < o.length ? (i = o[r], [4, $h.getManager(i).listModels()]) : [3, 4];
                        case 2:
                            for (s in a = t.sent()) n[i + Yh + s] = a[s];
                            t.label = 3;
                        case 3:
                            return r++, [3, 1];
                        case 4:
                            return [2, n]
                    }
                })
            })
        }, moveModel: function (e, n) {
            return y(this, void 0, void 0, function () {
                return R(this, function (t) {
                    return [2, tf(e, n, !0)]
                })
            })
        }, removeModel: function (n) {
            return y(this, void 0, void 0, function () {
                var e;
                return R(this, function (t) {
                    return e = Zh(n), [2, $h.getManager(e.scheme).removeModel(e.path)]
                })
            })
        }
    }), Hf = wn({
        confusionMatrix_: function (t, e, n) {
            var r = cn(t, "labels", "confusionMatrix"), o = cn(e, "predictions", "confusionMatrix");
            P(null == n || 0 < n && Number.isInteger(n), function () {
                return "If provided, numClasses must be a positive integer, but got " + n
            }), P(1 === r.rank, function () {
                return "Expected the rank of labels to be 1, but got " + r.rank
            }), P(1 === o.rank, function () {
                return "Expected the rank of predictions to be 1, but got " + o.rank
            }), P(r.shape[0] === o.shape[0], function () {
                return "Mismatch in the number of examples: " + r.shape[0] + " vs. " + o.shape[0] + ". Labels and predictions should have the same number of elements."
            }), P(0 < n && Number.isInteger(n), function () {
                return "numClasses is required to be a positive integer, but got " + n
            });
            var i = wr(r.asType("int32"), n), a = wr(o.asType("int32"), n);
            return i.transpose().matMul(a).asType("int32")
        }
    }), qf = Object.freeze({confusionMatrix: Hf}), jf = wn({
        fromPixels_: function (t, e) {
            if (void 0 === e && (e = 3), 4 < e) throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
            if (null == t) throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
            var n = !1, r = !1, o = !1, i = !1, a = !1;
            if (t.data instanceof Uint8Array) n = !0; else if ("undefined" != typeof ImageData && t instanceof ImageData) r = !0; else if ("undefined" != typeof HTMLVideoElement && t instanceof HTMLVideoElement) o = !0; else if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement) i = !0; else {
                if (null == t.getContext) throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was " + t.constructor.name);
                a = !0
            }
            if (o && o && t.readyState < 2) throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");
            if (null != g("FromPixels", Kt.backendName)) return Kt.runKernel("FromPixels", {pixels: t}, {numChannels: e});
            var s, u, c = o ? [t.videoWidth, t.videoHeight] : [t.width, t.height], l = c[0], h = c[1];
            if (a ? s = t.getContext("2d").getImageData(0, 0, l, h).data : r || n ? s = t.data : (i || o) && (null == Vf && (Vf = document.createElement("canvas").getContext("2d")), Vf.canvas.width = l, Vf.canvas.height = h, Vf.drawImage(t, 0, 0, l, h), s = Vf.getImageData(0, 0, l, h).data), 4 === e) u = new Int32Array(s); else {
                var f = l * h;
                u = new Int32Array(f * e);
                for (var p = 0; p < f; p++) for (var d = 0; d < e; ++d) u[p * e + d] = s[4 * p + d]
            }
            return An(u, [h, l, e], "int32")
        }
    }), Kf = Object.freeze({
        toPixels: function (_, I) {
            return y(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s, u, c, l, h, f, p, d, v, m, g, y, x, b, w, C, E;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (e = cn(_, "img", "toPixels"), _ instanceof bt || (e = e.toInt()), 2 !== e.rank && 3 !== e.rank) throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + e.rank + ".");
                            if (n = e.shape.slice(0, 2), r = n[0], o = n[1], 4 < (i = 2 === e.rank ? 1 : e.shape[2]) || 2 === i) throw new Error("toPixels only supports depth of size 1, 3 or 4 but got " + i);
                            return [4, e.data()];
                        case 1:
                            return a = t.sent(), s = e.min(), u = e.max(), [4, Promise.all([s.data(), u.data()])];
                        case 2:
                            if (c = t.sent(), l = c[0], h = c[1], f = l[0], p = h[0], s.dispose(), u.dispose(), "float32" === e.dtype) {
                                if (f < 0 || 1 < p) throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [" + f + " - " + p + "].")
                            } else {
                                if ("int32" !== e.dtype) throw new Error("Unsupported type for toPixels: " + e.dtype + ". Please use float32 or int32 tensors.");
                                if (f < 0 || 255 < p) throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [" + f + " - " + p + "].")
                            }
                            for (d = "float32" === e.dtype ? 255 : 1, v = new Uint8ClampedArray(o * r * 4), m = 0; m < r * o; ++m) b = x = y = g = void 0, 1 === i ? (g = a[m] * d, y = a[m] * d, x = a[m] * d, b = 255) : 3 === i ? (g = a[3 * m] * d, y = a[3 * m + 1] * d, x = a[3 * m + 2] * d, b = 255) : 4 === i && (g = a[4 * m] * d, y = a[4 * m + 1] * d, x = a[4 * m + 2] * d, b = a[4 * m + 3] * d), v[0 + (w = 4 * m)] = Math.round(g), v[1 + w] = Math.round(y), v[2 + w] = Math.round(x), v[3 + w] = Math.round(b);
                            return null != I && (I.width = o, I.height = r, C = I.getContext("2d"), E = new ImageData(v, o, r), C.putImageData(E, 0, 0)), e !== _ && e.dispose(), [2, v]
                    }
                })
            })
        }, fromPixels: jf
    }), Xf = (Jf.prototype.getClassName = function () {
        return this.constructor.className
    }, Jf.fromConfig = function (t, e) {
        return new t(e)
    }, Jf), Yf = ($f.getMap = function () {
        return null == $f.instance && ($f.instance = new $f), $f.instance
    }, $f.register = function (t) {
        $f.getMap().classNameMap[t.className] = [t, t.fromConfig]
    }, $f);

    function $f() {
        this.classNameMap = {}
    }

    function Jf() {
    }

    function Qf(t) {
        P(null != t.className, function () {
            return "Class being registered does not have the static className property defined."
        }), P("string" == typeof t.className, function () {
            return "className is required to be a string, but got type " + typeof t.className
        }), P(0 < t.className.length, function () {
            return "Class being registered has an empty-string as its className, which is disallowed."
        }), Yf.register(t)
    }

    var Zf = Object.freeze({Serializable: Xf, SerializationMap: Yf, registerClass: Qf});

    function tp() {
        return 32 === Kt.backend.floatPrecision() ? .001 : .1
    }

    function ep(t, e, n) {
        var r = !0;
        if ((z(t) || z(e)) && (r = !1), z(t) && z(e) && (r = !0), r) {
            var o = t.constructor.name, i = e.constructor.name;
            if (o !== i) throw new Error("Arrays are of different type. Actual: " + o + ". Expected: " + i)
        }
        if (Array.isArray(t) && Array.isArray(e)) {
            var a = sn(t), s = sn(e);
            if (!A(a, s)) throw new Error("Arrays have different shapes. Actual: [" + a + "]. Expected: [" + s + "]")
        }
        var u = z(t) ? t : b(t), c = z(e) ? e : b(e);
        if (u.length !== c.length) throw new Error("Arrays have different lengths actual: " + u.length + " vs expected: " + c.length + ".\nActual:   " + u + ".\nExpected: " + c + ".");
        for (var l = 0; l < c.length; ++l) {
            var h = u[l], f = c[l];
            if (!n(h, f)) throw new Error("Arrays differ: actual[" + l + "] = " + h + ", expected[" + l + "] = " + f + ".\nActual:   " + u + ".\nExpected: " + c + ".")
        }
    }

    function np(t, e, n) {
        return !isFinite(t) && !isFinite(e) || !(isNaN(t) || isNaN(e) || Math.abs(t - e) > n)
    }

    var rp, op = Object.freeze({
        TEST_EPSILON_FLOAT16: .1, expectArraysClose: function (t, e, n) {
            return null == n && (n = tp()), ep(t, e, function (t, e) {
                return np(t, e, n)
            })
        }, testEpsilon: tp, expectPromiseToFail: function (t, e) {
            t().then(function () {
                return e.fail()
            }, function () {
                return e()
            })
        }, expectArraysEqual: function (t, e) {
            var n = "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? [e] : e;
            return G(t) || G(t[0]) || G(e) || G(e[0]) ? ep(t, n, function (t, e) {
                return t == e
            }) : ep(t, e, function (t, e) {
                return np(t, e, 0)
            })
        }, expectNumbersClose: function (t, e, n) {
            if (null == n && (n = tp()), !np(t, e, n)) throw new Error("Numbers differ: actual === " + t + ", expected === " + e)
        }, expectValuesInRange: function (t, e, n) {
            for (var r = 0; r < t.length; r++) if (t[r] < e || t[r] > n) throw new Error("Value out of range:" + t[r] + " low: " + e + ", high: " + n)
        }, expectArrayBuffersEqual: function (t, e) {
            expect(new Float32Array(t)).toEqual(new Float32Array(e))
        }
    }), ip = Object.freeze({
        gpgpu_util: ya, webgl_util: Ze, forceHalfFloat: function () {
            _().set("WEBGL_FORCE_F16_TEXTURES", !0)
        }, MathBackendWebGL: As, setWebGLContext: oe, GPGPUContext: xa
    }), ap = (t(sp, rp = Xf), sp.prototype.minimize = function (t, e, n) {
        void 0 === e && (e = !1);
        var r = this.computeGradients(t, n), o = r.value, i = r.grads;
        if (null != n) {
            var a = n.map(function (t) {
                return {name: t.name, tensor: i[t.name]}
            });
            this.applyGradients(a)
        } else this.applyGradients(i);
        return rn(i), e ? o : (o.dispose(), null)
    }, Object.defineProperty(sp.prototype, "iterations", {
        get: function () {
            return null == this.iterations_ && (this.iterations_ = 0), this.iterations_
        }, enumerable: !0, configurable: !0
    }), sp.prototype.incrementIterations = function () {
        this.iterations_ = this.iterations + 1
    }, sp.prototype.computeGradients = function (t, e) {
        return oo(t, e)
    }, sp.prototype.dispose = function () {
        null != this.iterations_ && rn(this.iterations_)
    }, sp.prototype.saveIterations = function () {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                return null == this.iterations_ && (this.iterations_ = 0), [2, {
                    name: "iter",
                    tensor: kn(this.iterations_, "int32")
                }]
            })
        })
    }, sp.prototype.getWeights = function () {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                throw new Error("getWeights() is not implemented for this optimizer yet.")
            })
        })
    }, sp.prototype.setWeights = function (t) {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                throw new Error("setWeights() is not implemented for this optimizer class " + this.getClassName())
            })
        })
    }, sp.prototype.extractIterations = function (n) {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this, [4, n[0].tensor.data()];
                    case 1:
                        return e.iterations_ = t.sent()[0], [2, n.slice(1)]
                }
            })
        })
    }, sp);

    function sp() {
        return null !== rp && rp.apply(this, arguments) || this
    }

    Object.defineProperty(ap, Symbol.hasInstance, {
        value: function (t) {
            return null != t.minimize && null != t.computeGradients && null != t.applyGradients
        }
    });
    var up, cp = (t(lp, up = ap), lp.prototype.applyGradients = function (n) {
        var u = this;
        (Array.isArray(n) ? n.map(function (t) {
            return t.name
        }) : Object.keys(n)).forEach(function (t, e) {
            var o = Kt.registeredVariables[t];
            null == u.accumulatedGrads[e] && (u.accumulatedGrads[e] = {
                originalName: t + "/accum_grad",
                variable: nn(function () {
                    return Un(o).variable(!1)
                })
            }), null == u.accumulatedUpdates[e] && (u.accumulatedUpdates[e] = {
                originalName: t + "/accum_var",
                variable: nn(function () {
                    return Un(o).variable(!1)
                })
            });
            var i = Array.isArray(n) ? n[e].tensor : n[t];
            if (null != i) {
                var a = u.accumulatedGrads[e].variable, s = u.accumulatedUpdates[e].variable;
                nn(function () {
                    var t = a.mul(u.rho).add(i.square().mul(1 - u.rho)),
                        e = s.add(u.epsilon).sqrt().div(a.add(u.epsilon).sqrt()).mul(i),
                        n = s.mul(u.rho).add(e.square().mul(1 - u.rho));
                    a.assign(t), s.assign(n);
                    var r = e.mul(-u.learningRate).add(o);
                    o.assign(r)
                })
            }
        }), this.incrementIterations()
    }, lp.prototype.dispose = function () {
        null != this.accumulatedUpdates && (rn(this.accumulatedGrads.map(function (t) {
            return t.variable
        })), rn(this.accumulatedUpdates.map(function (t) {
            return t.variable
        })))
    }, lp.prototype.getWeights = function () {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.accumulatedGrads.concat(this.accumulatedUpdates), [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(e.map(function (t) {
                            return {name: t.originalName, tensor: t.variable}
                        }))]
                }
            })
        })
    }, lp.prototype.setWeights = function (n) {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.extractIterations(n)];
                    case 1:
                        return n = t.sent(), e = n.length / 2, this.accumulatedGrads = n.slice(0, e).map(function (t) {
                            return {originalName: t.name, variable: t.tensor.variable(!1)}
                        }), this.accumulatedUpdates = n.slice(e, 2 * e).map(function (t) {
                            return {originalName: t.name, variable: t.tensor.variable(!1)}
                        }), [2]
                }
            })
        })
    }, lp.prototype.getConfig = function () {
        return {learningRate: this.learningRate, rho: this.rho, epsilon: this.epsilon}
    }, lp.fromConfig = function (t, e) {
        return new t(e.learningRate, e.rho, e.epsilon)
    }, lp.className = "Adadelta", lp);

    function lp(t, e, n) {
        void 0 === n && (n = null);
        var r = up.call(this) || this;
        return r.learningRate = t, r.rho = e, r.epsilon = n, r.accumulatedGrads = [], r.accumulatedUpdates = [], null == n && (r.epsilon = Kt.backend.epsilon()), r
    }

    Qf(cp);
    var hp, fp = (t(pp, hp = ap), pp.prototype.applyGradients = function (i) {
        var a = this;
        (Array.isArray(i) ? i.map(function (t) {
            return t.name
        }) : Object.keys(i)).forEach(function (t, e) {
            var n = Kt.registeredVariables[t];
            null == a.accumulatedGrads[e] && (a.accumulatedGrads[e] = {
                originalName: t + "/accumulator",
                variable: nn(function () {
                    return Bn(n.shape, a.initialAccumulatorValue).variable(!1)
                })
            });
            var r = Array.isArray(i) ? i[e].tensor : i[t];
            if (null != r) {
                var o = a.accumulatedGrads[e].variable;
                nn(function () {
                    var t = o.add(r.square());
                    o.assign(t);
                    var e = r.div(t.add(Kt.backend.epsilon()).sqrt()).mul(-a.learningRate).add(n);
                    n.assign(e)
                })
            }
        }), this.incrementIterations()
    }, pp.prototype.dispose = function () {
        null != this.accumulatedGrads && rn(this.accumulatedGrads.map(function (t) {
            return t.variable
        }))
    }, pp.prototype.getWeights = function () {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(this.accumulatedGrads.map(function (t) {
                            return {name: t.originalName, tensor: t.variable}
                        }))]
                }
            })
        })
    }, pp.prototype.setWeights = function (e) {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.extractIterations(e)];
                    case 1:
                        return e = t.sent(), this.accumulatedGrads = e.map(function (t) {
                            return {originalName: t.name, variable: t.tensor.variable(!1)}
                        }), [2]
                }
            })
        })
    }, pp.prototype.getConfig = function () {
        return {learningRate: this.learningRate, initialAccumulatorValue: this.initialAccumulatorValue}
    }, pp.fromConfig = function (t, e) {
        return new t(e.learningRate, e.initialAccumulatorValue)
    }, pp.className = "Adagrad", pp);

    function pp(t, e) {
        void 0 === e && (e = .1);
        var n = hp.call(this) || this;
        return n.learningRate = t, n.initialAccumulatorValue = e, n.accumulatedGrads = [], n
    }

    Qf(fp);
    var dp, vp = (t(mp, dp = ap), mp.prototype.applyGradients = function (p) {
        var d = this, t = Array.isArray(p) ? p.map(function (t) {
            return t.name
        }) : Object.keys(p);
        nn(function () {
            var h = tc(1, d.accBeta1), f = tc(1, d.accBeta2);
            t.forEach(function (t, e) {
                var n = Kt.registeredVariables[t];
                null == d.accumulatedFirstMoment[e] && (d.accumulatedFirstMoment[e] = {
                    originalName: t + "/m",
                    variable: nn(function () {
                        return Un(n).variable(!1)
                    })
                }), null == d.accumulatedSecondMoment[e] && (d.accumulatedSecondMoment[e] = {
                    originalName: t + "/v",
                    variable: nn(function () {
                        return Un(n).variable(!1)
                    })
                });
                var r = Array.isArray(p) ? p[e].tensor : p[t];
                if (null != r) {
                    var o = d.accumulatedFirstMoment[e].variable, i = d.accumulatedSecondMoment[e].variable,
                        a = o.mul(d.beta1).add(r.mul(1 - d.beta1)), s = i.mul(d.beta2).add(r.square().mul(1 - d.beta2)),
                        u = a.div(h), c = s.div(f);
                    o.assign(a), i.assign(s);
                    var l = u.div(c.sqrt().add(d.epsilon)).mul(-d.learningRate).add(n);
                    n.assign(l)
                }
            }), d.accBeta1.assign(d.accBeta1.mul(d.beta1)), d.accBeta2.assign(d.accBeta2.mul(d.beta2))
        }), this.incrementIterations()
    }, mp.prototype.dispose = function () {
        this.accBeta1.dispose(), this.accBeta2.dispose(), null != this.accumulatedFirstMoment && rn(this.accumulatedFirstMoment.map(function (t) {
            return t.variable
        })), null != this.accumulatedSecondMoment && rn(this.accumulatedSecondMoment.map(function (t) {
            return t.variable
        }))
    }, mp.prototype.getWeights = function () {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment), [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(e.map(function (t) {
                            return {name: t.originalName, tensor: t.variable}
                        }))]
                }
            })
        })
    }, mp.prototype.setWeights = function (r) {
        return y(this, void 0, void 0, function () {
            var e, n = this;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.extractIterations(r)];
                    case 1:
                        return r = t.sent(), nn(function () {
                            n.accBeta1.assign(Ju(n.beta1, n.iterations_ + 1)), n.accBeta2.assign(Ju(n.beta2, n.iterations_ + 1))
                        }), e = r.length / 2, this.accumulatedFirstMoment = r.slice(0, e).map(function (t) {
                            return {originalName: t.name, variable: t.tensor.variable(!1)}
                        }), this.accumulatedSecondMoment = r.slice(e, 2 * e).map(function (t) {
                            return {originalName: t.name, variable: t.tensor.variable(!1)}
                        }), [2]
                }
            })
        })
    }, mp.prototype.getConfig = function () {
        return {learningRate: this.learningRate, beta1: this.beta1, beta2: this.beta2, epsilon: this.epsilon}
    }, mp.fromConfig = function (t, e) {
        return new t(e.learningRate, e.beta1, e.beta2, e.epsilon)
    }, mp.className = "Adam", mp);

    function mp(t, e, n, r) {
        void 0 === r && (r = null);
        var o = dp.call(this) || this;
        return o.learningRate = t, o.beta1 = e, o.beta2 = n, o.epsilon = r, o.accumulatedFirstMoment = [], o.accumulatedSecondMoment = [], nn(function () {
            o.accBeta1 = kn(e).variable(), o.accBeta2 = kn(n).variable()
        }), null == r && (o.epsilon = Kt.backend.epsilon()), o
    }

    Qf(vp);
    var gp, yp = (t(xp, gp = ap), xp.prototype.applyGradients = function (p) {
        var d = this, t = Array.isArray(p) ? p.map(function (t) {
            return t.name
        }) : Object.keys(p);
        nn(function () {
            var h = tc(1, d.accBeta1), f = Wu(-d.learningRate, d.iteration.mul(d.decay).add(1));
            t.forEach(function (t, e) {
                var n = Kt.registeredVariables[t];
                null == d.accumulatedFirstMoment[e] && (d.accumulatedFirstMoment[e] = {
                    originalName: t + "/m",
                    variable: Un(n).variable(!1)
                }), null == d.accumulatedWeightedInfNorm[e] && (d.accumulatedWeightedInfNorm[e] = {
                    originalName: t + "/v",
                    variable: Un(n).variable(!1)
                });
                var r = Array.isArray(p) ? p[e].tensor : p[t];
                if (null != r) {
                    var o = d.accumulatedFirstMoment[e].variable, i = d.accumulatedWeightedInfNorm[e].variable,
                        a = o.mul(d.beta1).add(r.mul(1 - d.beta1)), s = i.mul(d.beta2), u = r.abs(), c = s.maximum(u);
                    o.assign(a), i.assign(c);
                    var l = f.div(h).mul(a.div(c.add(d.epsilon))).add(n);
                    n.assign(l)
                }
            }), d.iteration.assign(d.iteration.add(1)), d.accBeta1.assign(d.accBeta1.mul(d.beta1))
        }), this.incrementIterations()
    }, xp.prototype.dispose = function () {
        this.accBeta1.dispose(), this.iteration.dispose(), null != this.accumulatedFirstMoment && rn(this.accumulatedFirstMoment.map(function (t) {
            return t.variable
        })), null != this.accumulatedWeightedInfNorm && rn(this.accumulatedWeightedInfNorm.map(function (t) {
            return t.variable
        }))
    }, xp.prototype.getWeights = function () {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                throw new Error("getWeights() is not implemented for Adamax yet.")
            })
        })
    }, xp.prototype.setWeights = function (t) {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                throw new Error("setWeights() is not implemented for Adamax yet.")
            })
        })
    }, xp.prototype.getConfig = function () {
        return {
            learningRate: this.learningRate,
            beta1: this.beta1,
            beta2: this.beta2,
            epsilon: this.epsilon,
            decay: this.decay
        }
    }, xp.fromConfig = function (t, e) {
        return new t(e.learningRate, e.beta1, e.beta2, e.epsilon, e.decay)
    }, xp.className = "Adamax", xp);

    function xp(t, e, n, r, o) {
        void 0 === r && (r = null), void 0 === o && (o = 0);
        var i = gp.call(this) || this;
        return i.learningRate = t, i.beta1 = e, i.beta2 = n, i.epsilon = r, i.decay = o, i.accumulatedFirstMoment = [], i.accumulatedWeightedInfNorm = [], nn(function () {
            i.iteration = kn(0).variable(), i.accBeta1 = kn(e).variable()
        }), null == r && (i.epsilon = Kt.backend.epsilon()), i
    }

    Qf(yp);
    var bp, wp = (t(Cp, bp = ap), Cp.prototype.applyGradients = function (o) {
        var i = this;
        (Array.isArray(o) ? o.map(function (t) {
            return t.name
        }) : Object.keys(o)).forEach(function (t, e) {
            var n = Array.isArray(o) ? o[e].tensor : o[t];
            if (null != n) {
                var r = Kt.registeredVariables[t];
                nn(function () {
                    var t = i.c.mul(n).add(r);
                    r.assign(t)
                })
            }
        }), this.incrementIterations()
    }, Cp.prototype.setLearningRate = function (t) {
        this.learningRate = t, null != this.c && this.c.dispose(), this.c = on(kn(-t))
    }, Cp.prototype.dispose = function () {
        this.c.dispose()
    }, Cp.prototype.getWeights = function () {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()]]
                }
            })
        })
    }, Cp.prototype.setWeights = function (e) {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.extractIterations(e)];
                    case 1:
                        if (0 !== (e = t.sent()).length) throw new Error("SGD optimizer does not have settable weights.");
                        return [2]
                }
            })
        })
    }, Cp.prototype.getConfig = function () {
        return {learningRate: this.learningRate}
    }, Cp.fromConfig = function (t, e) {
        return new t(e.learningRate)
    }, Cp.className = "SGD", Cp);

    function Cp(t) {
        var e = bp.call(this) || this;
        return e.learningRate = t, e.setLearningRate(t), e
    }

    Qf(wp);
    var Ep, _p = (t(Ip, Ep = wp), Ip.prototype.applyGradients = function (i) {
        var a = this;
        (Array.isArray(i) ? i.map(function (t) {
            return t.name
        }) : Object.keys(i)).forEach(function (t, e) {
            var n = Kt.registeredVariables[t];
            null == a.accumulations[e] && (a.accumulations[e] = {
                originalName: t + "/momentum",
                variable: nn(function () {
                    return Un(n).variable(!1)
                })
            });
            var r = a.accumulations[e].variable, o = Array.isArray(i) ? i[e].tensor : i[t];
            null != o && nn(function () {
                var t, e = a.m.mul(r).add(o);
                t = a.useNesterov ? a.c.mul(o.add(e.mul(a.m))).add(n) : a.c.mul(e).add(n), r.assign(e), n.assign(t)
            })
        }), this.incrementIterations()
    }, Ip.prototype.dispose = function () {
        this.m.dispose(), null != this.accumulations && rn(this.accumulations.map(function (t) {
            return t.variable
        }))
    }, Ip.prototype.setMomentum = function (t) {
        this.momentum = t
    }, Ip.prototype.getWeights = function () {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(this.accumulations.map(function (t) {
                            return {name: t.originalName, tensor: t.variable}
                        }))]
                }
            })
        })
    }, Ip.prototype.setWeights = function (e) {
        return y(this, void 0, void 0, function () {
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.extractIterations(e)];
                    case 1:
                        return e = t.sent(), this.accumulations = e.map(function (t) {
                            return {originalName: t.name, variable: t.tensor.variable(!1)}
                        }), [2]
                }
            })
        })
    }, Ip.prototype.getConfig = function () {
        return {learningRate: this.learningRate, momentum: this.momentum, useNesterov: this.useNesterov}
    }, Ip.fromConfig = function (t, e) {
        return new t(e.learningRate, e.momentum, e.useNesterov)
    }, Ip.className = "Momentum", Ip);

    function Ip(t, e, n) {
        void 0 === n && (n = !1);
        var r = Ep.call(this, t) || this;
        return r.learningRate = t, r.momentum = e, r.useNesterov = n, r.accumulations = [], r.m = kn(r.momentum), r
    }

    Qf(_p);
    var Rp, kp = (t(Sp, Rp = ap), Sp.prototype.applyGradients = function (e) {
        var h = this;
        (Array.isArray(e) ? e.map(function (t) {
            return t.name
        }) : Object.keys(e)).forEach(function (t, a) {
            var s = Kt.registeredVariables[t];
            null == h.accumulatedMeanSquares[a] && (h.accumulatedMeanSquares[a] = {
                originalName: t + "/rms",
                variable: nn(function () {
                    return Un(s).variable(!1)
                })
            }), null == h.accumulatedMoments[a] && (h.accumulatedMoments[a] = {
                originalName: t + "/momentum",
                variable: nn(function () {
                    return Un(s).variable(!1)
                })
            }), null == h.accumulatedMeanGrads[a] && h.centered && (h.accumulatedMeanGrads[a] = {
                originalName: t + "/mg",
                variable: nn(function () {
                    return Un(s).variable(!1)
                })
            });
            var u = Array.isArray(e) ? e[a].tensor : e[t];
            if (null != u) {
                var c = h.accumulatedMeanSquares[a].variable, l = h.accumulatedMoments[a].variable;
                nn(function () {
                    var t = c.mul(h.decay).add(u.square().mul(1 - h.decay));
                    if (h.centered) {
                        var e = h.accumulatedMeanGrads[a].variable, n = e.mul(h.decay).add(u.mul(1 - h.decay)),
                            r = l.mul(h.momentum).add(u.mul(h.learningRate).div(t.sub(n.square().add(h.epsilon)).sqrt()));
                        c.assign(t), e.assign(n), l.assign(r);
                        var o = s.sub(r);
                        s.assign(o)
                    } else {
                        var i = c.mul(h.decay).add(u.square().mul(1 - h.decay));
                        r = l.mul(h.momentum).add(u.mul(h.learningRate).div(i.add(h.epsilon).sqrt())), c.assign(i), l.assign(r), o = s.sub(r), s.assign(o)
                    }
                })
            }
        }), this.incrementIterations()
    }, Sp.prototype.dispose = function () {
        null != this.accumulatedMeanSquares && rn(this.accumulatedMeanSquares.map(function (t) {
            return t.variable
        })), null != this.accumulatedMeanGrads && this.centered && rn(this.accumulatedMeanGrads.map(function (t) {
            return t.variable
        })), null != this.accumulatedMoments && rn(this.accumulatedMoments.map(function (t) {
            return t.variable
        }))
    }, Sp.prototype.getWeights = function () {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.accumulatedMeanSquares.concat(this.accumulatedMoments), this.centered && e.push.apply(e, this.accumulatedMeanGrads), [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(e.map(function (t) {
                            return {name: t.originalName, tensor: t.variable}
                        }))]
                }
            })
        })
    }, Sp.prototype.setWeights = function (n) {
        return y(this, void 0, void 0, function () {
            var e;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.extractIterations(n)];
                    case 1:
                        return n = t.sent(), e = this.centered ? n.length / 3 : n.length / 2, this.accumulatedMeanSquares = n.slice(0, e).map(function (t) {
                            return {originalName: t.name, variable: t.tensor.variable(!1)}
                        }), this.accumulatedMoments = n.slice(e, 2 * e).map(function (t) {
                            return {originalName: t.name, variable: t.tensor.variable(!1)}
                        }), this.centered && (this.accumulatedMeanGrads = n.slice(2 * e, 3 * e).map(function (t) {
                            return {originalName: t.name, variable: t.tensor.variable(!1)}
                        })), [2]
                }
            })
        })
    }, Sp.prototype.getConfig = function () {
        return {
            learningRate: this.learningRate,
            decay: this.decay,
            momentum: this.momentum,
            epsilon: this.epsilon,
            centered: this.centered
        }
    }, Sp.fromConfig = function (t, e) {
        return new t(e.learningRate, e.decay, e.momentum, e.epsilon, e.centered)
    }, Sp.className = "RMSProp", Sp);

    function Sp(t, e, n, r, o) {
        void 0 === e && (e = .9), void 0 === n && (n = 0), void 0 === r && (r = null), void 0 === o && (o = !1);
        var i = Rp.call(this) || this;
        if (i.learningRate = t, i.decay = e, i.momentum = n, i.epsilon = r, i.accumulatedMeanSquares = [], i.accumulatedMoments = [], i.accumulatedMeanGrads = [], i.centered = o, null == r && (i.epsilon = Kt.backend.epsilon()), null == t) throw new Error("learningRate for RMSPropOptimizer must be defined.");
        return i
    }

    Qf(kp);
    var Dp = (Np.sgd = function (t) {
            return new wp(t)
        }, Np.momentum = function (t, e, n) {
            return void 0 === n && (n = !1), new _p(t, e, n)
        }, Np.rmsprop = function (t, e, n, r, o) {
            return void 0 === e && (e = .9), void 0 === n && (n = 0), void 0 === r && (r = null), void 0 === o && (o = !1), new kp(t, e, n, r, o)
        }, Np.adam = function (t, e, n, r) {
            return void 0 === t && (t = .001), void 0 === e && (e = .9), void 0 === n && (n = .999), void 0 === r && (r = null), new vp(t, e, n, r)
        }, Np.adadelta = function (t, e, n) {
            return void 0 === t && (t = .001), void 0 === e && (e = .95), void 0 === n && (n = null), new cp(t, e, n)
        }, Np.adamax = function (t, e, n, r, o) {
            return void 0 === t && (t = .002), void 0 === e && (e = .9), void 0 === n && (n = .999), void 0 === r && (r = null), void 0 === o && (o = 0), new yp(t, e, n, r, o)
        }, Np.adagrad = function (t, e) {
            return void 0 === e && (e = .1), new fp(t, e)
        }, Np), Ap = {
            sgd: Dp.sgd,
            momentum: Dp.momentum,
            adadelta: Dp.adadelta,
            adagrad: Dp.adagrad,
            rmsprop: Dp.rmsprop,
            adamax: Dp.adamax,
            adam: Dp.adam
        },
        Tp = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : "undefined" != typeof setImmediate ? setImmediate : function (t) {
            return t()
        };

    function Np() {
    }

    bt.prototype.squaredDifference = function (t) {
        return Ms(this, t)
    }, gt = bh;
    var Fp = Object.freeze({
        __proto__: null,
        AdadeltaOptimizer: cp,
        AdagradOptimizer: fp,
        AdamOptimizer: vp,
        AdamaxOptimizer: yp,
        DataStorage: co,
        get ENV() {
            return i
        },
        Environment: o,
        KernelBackend: lo,
        MomentumOptimizer: _p,
        Optimizer: ap,
        RMSPropOptimizer: kp,
        get Rank() {
            return Ct
        },
        get Reduction() {
            return Bl
        },
        SGDOptimizer: wp,
        Tensor: bt,
        TensorBuffer: vt,
        Variable: Ft,
        abs: Os,
        acos: Ps,
        acosh: Bs,
        add: Ou,
        addN: Pu,
        addStrict: Bu,
        all: tl,
        any: el,
        argMax: nl,
        argMin: rl,
        asin: Ls,
        asinh: Ws,
        atan: zs,
        atan2: Lu,
        atanh: Us,
        avgPool: Hc,
        avgPool3d: Kc,
        backend: function () {
            return Kt.backend
        },
        backend_util: Fo,
        basicLSTMCell: bl,
        batchNorm: Ru,
        batchNorm2d: ku,
        batchNorm3d: Su,
        batchNorm4d: Du,
        batchNormalization: Iu,
        batchNormalization2d: Cu,
        batchNormalization3d: Eu,
        batchNormalization4d: _u,
        batchToSpaceND: fr,
        booleanMaskAsync: mc,
        broadcastTo: pr,
        browser: Kf,
        buffer: cr,
        cast: dr,
        ceil: Vs,
        clipByValue: Gs,
        clone: vr,
        complex: Cn,
        concat: Vn,
        concat1d: Gn,
        concat2d: Hn,
        concat3d: qn,
        concat4d: jn,
        conv1d: Cc,
        conv2d: Ec,
        conv2dTranspose: Tc,
        conv3d: _c,
        conv3dTranspose: Nc,
        cos: Hs,
        cosh: qs,
        cumsum: mr,
        customGrad: io,
        deprecationWarn: en,
        depthToSpace: gr,
        depthwiseConv2d: kc,
        diag: Fl,
        disableDeprecationWarnings: function () {
            _().set("DEPRECATION_WARNINGS_ENABLED", !1), console.warn("TensorFlow.js deprecation warnings have been disabled.")
        },
        dispose: rn,
        disposeVariables: function () {
            Kt.disposeVariables()
        },
        div: Wu,
        divNoNan: zu,
        divStrict: Uu,
        dot: Mc,
        dropout: Ml,
        elu: hl,
        enableDebugMode: function () {
            _().set("DEBUG", !0)
        },
        enableProdMode: function () {
            _().set("PROD", !0)
        },
        engine: function () {
            return Kt
        },
        env: _,
        equal: nc,
        equalStrict: rc,
        erf: js,
        exp: Ks,
        expandDims: yr,
        expm1: Xs,
        eye: xr,
        fft: Rl,
        fill: Bn,
        findBackend: function (t) {
            return Kt.findBackend(t)
        },
        findBackendFactory: function (t) {
            return Kt.findBackendFactory(t)
        },
        floor: Ys,
        floorDiv: Vu,
        frame: Ul,
        fused: xh,
        gather: gc,
        gatherND: Nl,
        gather_util: Hr,
        getBackend: function () {
            return Kt.backendName
        },
        getGradient: l,
        getKernel: g,
        getKernelsForBackend: a,
        grad: function (i) {
            return P(K(i), function () {
                return "The f passed in grad(f) must be a function"
            }), function (t, e) {
                var r = cn(t, "x", "tf.grad", null), o = null != e ? cn(e, "dy", "tf.grad") : null;
                return Kt.tidy(function () {
                    var t = Kt.gradients(function () {
                        return i(r)
                    }, [r], o), e = t.value, n = t.grads;
                    return null != o && x(e.shape, o.shape, "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"), ao(n), n[0]
                })
            }
        },
        grads: function (i) {
            return P(K(i), function () {
                return "The f passed in grads(f) must be a function"
            }), function (t, e) {
                P(Array.isArray(t), function () {
                    return "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"
                });
                var r = ln(t, "args", "tf.grads", null), o = null != e ? cn(e, "dy", "tf.grads") : null;
                return Kt.tidy(function () {
                    var t = Kt.gradients(function () {
                        return i.apply(void 0, r)
                    }, r, o), e = t.value, n = t.grads;
                    return null != o && x(e.shape, o.shape, "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), ao(n), n
                })
            }
        },
        greater: oc,
        greaterEqual: ic,
        greaterEqualStrict: ac,
        greaterStrict: sc,
        hammingWindow: zl,
        hannWindow: Wl,
        ifft: kl,
        imag: _n,
        image: vh,
        inTopKAsync: Pl,
        io: Gf,
        irfft: Dl,
        isFinite: su,
        isInf: au,
        isNaN: iu,
        keep: on,
        leakyRelu: fl,
        less: uc,
        lessEqual: cc,
        lessEqualStrict: lc,
        lessStrict: hc,
        linalg: oh,
        linspace: Ln,
        localResponseNormalization: yl,
        log: $s,
        log1p: Js,
        logSigmoid: Qs,
        logSoftmax: uo,
        logSumExp: ol,
        logicalAnd: Au,
        logicalNot: Tu,
        logicalOr: Nu,
        logicalXor: Fu,
        losses: Zl,
        matMul: Fc,
        math: qf,
        max: il,
        maxPool: Gc,
        maxPool3d: jc,
        maximum: Gu,
        maximumStrict: Hu,
        mean: al,
        memory: function () {
            return Kt.memory()
        },
        min: sl,
        minimum: qu,
        minimumStrict: ju,
        mod: Ku,
        modStrict: Xu,
        moments: ul,
        movingAverage: Cl,
        mul: Yu,
        mulStrict: $u,
        multiRNNCell: wl,
        multinomial: br,
        neg: Zs,
        nextFrame: function () {
            return new Promise(function (t) {
                return Tp(function () {
                    return t()
                })
            })
        },
        norm: xl,
        notEqual: fc,
        notEqualStrict: pc,
        oneHot: wr,
        ones: On,
        onesLike: zn,
        op: wn,
        outerProduct: Oc,
        pad: Cr,
        pad1d: Er,
        pad2d: _r,
        pad3d: Ir,
        pad4d: Rr,
        pool: qc,
        pow: Ju,
        powStrict: Qu,
        prelu: pl,
        print: lr,
        prod: ll,
        profile: function (t) {
            return Kt.profile(t)
        },
        rand: kr,
        randomGamma: Dr,
        randomNormal: Sr,
        randomUniform: Ar,
        range: Wn,
        ready: function () {
            return Kt.ready()
        },
        real: En,
        reciprocal: tu,
        registerBackend: function (t, e, n) {
            return void 0 === n && (n = 1), Kt.registerBackend(t, e, n)
        },
        registerGradient: h,
        registerKernel: s,
        relu: dl,
        relu6: vl,
        removeBackend: function (t) {
            Kt.removeBackend(t)
        },
        reshape: Tr,
        reverse: Pc,
        reverse1d: Bc,
        reverse2d: Lc,
        reverse3d: Wc,
        reverse4d: zc,
        rfft: Sl,
        round: eu,
        rsqrt: nu,
        scalar: kn,
        scatterND: Il,
        scatter_util: Yr,
        selu: ml,
        separableConv2d: Ac,
        serialization: Zf,
        setBackend: function (t) {
            return Kt.setBackend(t)
        },
        setPlatform: function (t, e) {
            _().setPlatform(t, e)
        },
        setdiff1dAsync: hr,
        sigmoid: ru,
        sign: ou,
        signal: Gl,
        sin: uu,
        sinh: cu,
        slice: Xc,
        slice1d: Yc,
        slice2d: $c,
        slice3d: Jc,
        slice4d: Qc,
        slice_util: ro,
        softmax: so,
        softplus: lu,
        spaceToBatchND: Nr,
        sparseToDense: Tl,
        spectral: Al,
        split: Kn,
        sqrt: hu,
        square: Ns,
        squaredDifference: Ms,
        squaredDifferenceStrict: Zu,
        squeeze: Fr,
        stack: Mr,
        step: fu,
        stft: Vl,
        stridedSlice: El,
        sub: tc,
        subStrict: ec,
        sum: cl,
        sumOutType: Bt,
        tan: pu,
        tanh: du,
        tensor: In,
        tensor1d: Sn,
        tensor2d: Dn,
        tensor3d: An,
        tensor4d: Tn,
        tensor5d: Nn,
        tensor6d: Fn,
        tensor_util: Vt,
        test_util: op,
        tidy: nn,
        tile: Or,
        time: function (t) {
            return Kt.time(t)
        },
        topk: _l,
        train: Ap,
        transpose: gl,
        truncatedNormal: Pr,
        unregisterGradient: function (t) {
            if (!n.has(t)) throw new Error("The gradient '" + t + "' for backend is not registered");
            n.delete(t)
        },
        unregisterKernel: function (t, e) {
            var n = f(t, e);
            if (!u.has(n)) throw new Error("The kernel '" + t + "' for backend '" + e + "' is not registered");
            u.delete(n)
        },
        unsortedSegmentSum: yc,
        unstack: Br,
        util: at,
        valueAndGrad: function (i) {
            return P(K(i), function () {
                return "The f passed in valueAndGrad(f) must be a function"
            }), function (t, e) {
                P(t instanceof bt, function () {
                    return "The x passed in valueAndGrad(f)(x) must be a tensor"
                }), P(null == e || e instanceof bt, function () {
                    return "The dy passed in valueAndGrad(f)(x, dy) must be a tensor"
                });
                var n = Kt.gradients(function () {
                    return i(t)
                }, [t], e), r = n.grads, o = n.value;
                return ao(r), {grad: r[0], value: o}
            }
        },
        valueAndGrads: function (r) {
            return P(K(r), function () {
                return "The f passed in valueAndGrads(f) must be a function"
            }), function (t, e) {
                P(Array.isArray(t) && t.every(function (t) {
                    return t instanceof bt
                }), function () {
                    return "The args passed in valueAndGrads(f)(args) must be array of tensors"
                }), P(null == e || e instanceof bt, function () {
                    return "The dy passed in valueAndGrads(f)(args, dy) must be a tensor"
                });
                var n = Kt.gradients(function () {
                    return r.apply(void 0, t)
                }, t, e);
                return null != e && x(n.value.shape, e.shape, "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), ao(n.grads), n
            }
        },
        variable: Mn,
        variableGrads: oo,
        version_core: "1.7.0",
        webgl: ip,
        where: Mu,
        whereAsync: wu,
        zeros: Pn,
        zerosLike: Un
    });

    function Mp(i, a, t) {
        if (void 0 === t && (t = !1), i.beginPath(), a.slice(1).forEach(function (t, e) {
            var n = t.x, r = t.y, o = a[e];
            i.moveTo(o.x, o.y), i.lineTo(n, r)
        }), t) {
            var e = a[a.length - 1], n = a[0];
            if (!e || !n) return;
            i.moveTo(e.x, e.y), i.lineTo(n.x, n.y)
        }
        i.stroke()
    }

    var Op = function (t, e) {
        return (Op = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        })(t, e)
    };

    function Pp(t, e) {
        function n() {
            this.constructor = t
        }

        Op(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }

    var Bp = function () {
        return (Bp = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    };

    function Lp(i, a, s, u) {
        return new (s = s || Promise)(function (t, e) {
            function n(t) {
                try {
                    o(u.next(t))
                } catch (t) {
                    e(t)
                }
            }

            function r(t) {
                try {
                    o(u.throw(t))
                } catch (t) {
                    e(t)
                }
            }

            function o(e) {
                e.done ? t(e.value) : new s(function (t) {
                    t(e.value)
                }).then(n, r)
            }

            o((u = u.apply(i, a || [])).next())
        })
    }

    function Wp(n, r) {
        var o, i, a, t, s = {
            label: 0, sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1]
            }, trys: [], ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (t[Symbol.iterator] = function () {
            return this
        }), t;

        function e(e) {
            return function (t) {
                return function (e) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                        switch (i = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                            case 0:
                            case 1:
                                a = e;
                                break;
                            case 4:
                                return s.label++, {value: e[1], done: !1};
                            case 5:
                                s.label++, i = e[1], e = [0];
                                continue;
                            case 7:
                                e = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                    s.label = e[1];
                                    break
                                }
                                if (6 === e[0] && s.label < a[1]) {
                                    s.label = a[1], a = e;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(e);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        e = r.call(n, s)
                    } catch (t) {
                        e = [6, t], i = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & e[0]) throw e[1];
                    return {value: e[0] ? e[1] : void 0, done: !0}
                }([e, t])
            }
        }
    }

    function zp() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
        var r = Array(t), o = 0;
        for (e = 0; e < n; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
        return r
    }

    var Up = (Object.defineProperty(Vp.prototype, "width", {
        get: function () {
            return this._width
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Vp.prototype, "height", {
        get: function () {
            return this._height
        }, enumerable: !0, configurable: !0
    }), Vp.prototype.reverse = function () {
        return new Vp(1 / this.width, 1 / this.height)
    }, Vp);

    function Vp(t, e) {
        if (!td(t) || !td(e)) throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have " + JSON.stringify({
            width: t,
            height: e
        }));
        this._width = t, this._height = e
    }

    function Gp(t, e) {
        return t instanceof bt && t.shape.length === e
    }

    function Hp(t) {
        return Gp(t, 2)
    }

    function qp(t) {
        return Gp(t, 3)
    }

    function jp(t) {
        return Gp(t, 4)
    }

    function Kp(t) {
        return t % 1 != 0
    }

    function Xp(t) {
        return t % 2 == 0
    }

    function Yp(t, e) {
        void 0 === e && (e = 2);
        var n = Math.pow(10, e);
        return Math.floor(t * n) / n
    }

    function $p(t) {
        return t && t.width && t.height
    }

    function Jp(t, e) {
        var n = t.width, r = t.height, o = e / Math.max(r, n);
        return new Up(Math.round(n * o), Math.round(r * o))
    }

    function Qp(t) {
        return t.reduce(function (t, e) {
            return t.add(e)
        }, new rd(0, 0)).div(new rd(t.length, t.length))
    }

    function Zp(t, n, r) {
        return Array(t).fill(0).map(function (t, e) {
            return n + e * r
        })
    }

    function td(t) {
        return !!t && t !== 1 / 0 && t !== -1 / 0 && !isNaN(t) || 0 === t
    }

    function ed(t) {
        return td(t) && 0 <= t && t <= 1
    }

    var nd = Object.freeze({
        __proto__: null,
        isTensor: Gp,
        isTensor1D: function (t) {
            return Gp(t, 1)
        },
        isTensor2D: Hp,
        isTensor3D: qp,
        isTensor4D: jp,
        isFloat: Kp,
        isEven: Xp,
        round: Yp,
        isDimensions: $p,
        computeReshapedDimensions: Jp,
        getCenterPoint: Qp,
        range: Zp,
        isValidNumber: td,
        isValidProbablitiy: ed
    }), rd = (Object.defineProperty(od.prototype, "x", {
        get: function () {
            return this._x
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(od.prototype, "y", {
        get: function () {
            return this._y
        }, enumerable: !0, configurable: !0
    }), od.prototype.add = function (t) {
        return new od(this.x + t.x, this.y + t.y)
    }, od.prototype.sub = function (t) {
        return new od(this.x - t.x, this.y - t.y)
    }, od.prototype.mul = function (t) {
        return new od(this.x * t.x, this.y * t.y)
    }, od.prototype.div = function (t) {
        return new od(this.x / t.x, this.y / t.y)
    }, od.prototype.abs = function () {
        return new od(Math.abs(this.x), Math.abs(this.y))
    }, od.prototype.magnitude = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }, od.prototype.floor = function () {
        return new od(Math.floor(this.x), Math.floor(this.y))
    }, od);

    function od(t, e) {
        this._x = t, this._y = e
    }

    var id = (ad.isRect = function (t) {
        return !!t && [t.x, t.y, t.width, t.height].every(td)
    }, ad.assertIsValidBox = function (t, e, n) {
        if (void 0 === n && (n = !1), !ad.isRect(t)) throw new Error(e + " - invalid box: " + JSON.stringify(t) + ", expected object with properties x, y, width, height");
        if (!n && (t.width < 0 || t.height < 0)) throw new Error(e + " - width (" + t.width + ") and height (" + t.height + ") must be positive numbers")
    }, Object.defineProperty(ad.prototype, "x", {
        get: function () {
            return this._x
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "y", {
        get: function () {
            return this._y
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "width", {
        get: function () {
            return this._width
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "height", {
        get: function () {
            return this._height
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "left", {
        get: function () {
            return this.x
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "top", {
        get: function () {
            return this.y
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "right", {
        get: function () {
            return this.x + this.width
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "bottom", {
        get: function () {
            return this.y + this.height
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "area", {
        get: function () {
            return this.width * this.height
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "topLeft", {
        get: function () {
            return new rd(this.left, this.top)
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "topRight", {
        get: function () {
            return new rd(this.right, this.top)
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "bottomLeft", {
        get: function () {
            return new rd(this.left, this.bottom)
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ad.prototype, "bottomRight", {
        get: function () {
            return new rd(this.right, this.bottom)
        }, enumerable: !0, configurable: !0
    }), ad.prototype.round = function () {
        var t = [this.x, this.y, this.width, this.height].map(function (t) {
            return Math.round(t)
        });
        return new ad({x: t[0], y: t[1], width: t[2], height: t[3]})
    }, ad.prototype.floor = function () {
        var t = [this.x, this.y, this.width, this.height].map(function (t) {
            return Math.floor(t)
        });
        return new ad({x: t[0], y: t[1], width: t[2], height: t[3]})
    }, ad.prototype.toSquare = function () {
        var t = this.x, e = this.y, n = this.width, r = this.height, o = Math.abs(n - r);
        return n < r && (t -= o / 2, n += o), r < n && (e -= o / 2, r += o), new ad({x: t, y: e, width: n, height: r})
    }, ad.prototype.rescale = function (t) {
        var e = $p(t) ? t.width : t, n = $p(t) ? t.height : t;
        return new ad({x: this.x * e, y: this.y * n, width: this.width * e, height: this.height * n})
    }, ad.prototype.pad = function (t, e) {
        var n = [this.x - t / 2, this.y - e / 2, this.width + t, this.height + e];
        return new ad({x: n[0], y: n[1], width: n[2], height: n[3]})
    }, ad.prototype.clipAtImageBorders = function (t, e) {
        var n = this.x, r = this.y, o = this.right, i = this.bottom, a = Math.max(n, 0), s = Math.max(r, 0), u = o - a,
            c = i - s;
        return new ad({x: a, y: s, width: Math.min(u, t - a), height: Math.min(c, e - s)}).floor()
    }, ad.prototype.shift = function (t, e) {
        var n = this.width, r = this.height;
        return new ad({x: this.x + t, y: this.y + e, width: n, height: r})
    }, ad.prototype.padAtBorders = function (t, e) {
        var n = this.width + 1, r = this.height + 1, o = n, i = r, a = this.left, s = this.top, u = this.right,
            c = this.bottom;
        return e < u && (o = -u + e + n, u = e), t < c && (i = -c + t + r, c = t), a < 1 && (i = 2 - a, a = 1), s < 1 && (i = 2 - s, s = 1), {
            dy: 1,
            edy: i,
            dx: 1,
            edx: o,
            y: s,
            ey: c,
            x: a,
            ex: u,
            w: n,
            h: r
        }
    }, ad.prototype.calibrate = function (t) {
        return new ad({
            left: this.left + t.left * this.width,
            top: this.top + t.top * this.height,
            right: this.right + t.right * this.width,
            bottom: this.bottom + t.bottom * this.height
        }).toSquare().round()
    }, ad);

    function ad(t, e) {
        void 0 === e && (e = !0);
        var n = t || {}, r = [n.left, n.top, n.right, n.bottom].every(td), o = [n.x, n.y, n.width, n.height].every(td);
        if (!o && !r) throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have " + JSON.stringify(n));
        var i = o ? [n.x, n.y, n.width, n.height] : [n.left, n.top, n.right - n.left, n.bottom - n.top], a = i[0],
            s = i[1], u = i[2], c = i[3];
        ad.assertIsValidBox({
            x: a,
            y: s,
            width: u,
            height: c
        }, "Box.constructor", e), this._x = a, this._y = s, this._width = u, this._height = c
    }

    var sd, ud = (Pp(cd, sd = id), cd);

    function cd(t, e, n, r, o) {
        return void 0 === o && (o = !1), sd.call(this, {left: t, top: e, right: n, bottom: r}, o) || this
    }

    var ld = (Object.defineProperty(hd.prototype, "score", {
        get: function () {
            return this._score
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(hd.prototype, "classScore", {
        get: function () {
            return this._classScore
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(hd.prototype, "className", {
        get: function () {
            return this._className
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(hd.prototype, "box", {
        get: function () {
            return this._box
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(hd.prototype, "imageDims", {
        get: function () {
            return this._imageDims
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(hd.prototype, "imageWidth", {
        get: function () {
            return this.imageDims.width
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(hd.prototype, "imageHeight", {
        get: function () {
            return this.imageDims.height
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(hd.prototype, "relativeBox", {
        get: function () {
            return new id(this._box).rescale(this.imageDims.reverse())
        }, enumerable: !0, configurable: !0
    }), hd.prototype.forSize = function (t, e) {
        return new hd(this.score, this.classScore, this.className, this.relativeBox, {width: t, height: e})
    }, hd);

    function hd(t, e, n, r, o) {
        this._imageDims = new Up(o.width, o.height), this._score = t, this._classScore = e, this._className = n, this._box = new id(r).rescale(this._imageDims)
    }

    var fd, pd = (Pp(dd, fd = ld), dd.prototype.forSize = function (t, e) {
        var n = fd.prototype.forSize.call(this, t, e);
        return new dd(n.score, n.relativeBox, n.imageDims)
    }, dd);

    function dd(t, e, n) {
        return fd.call(this, t, t, "", e, n) || this
    }

    function vd(t, e, n) {
        void 0 === n && (n = !0);
        var r = Math.max(0, Math.min(t.right, e.right) - Math.max(t.left, e.left)) * Math.max(0, Math.min(t.bottom, e.bottom) - Math.max(t.top, e.top));
        return n ? r / (t.area + e.area - r) : r / Math.min(t.area, e.area)
    }

    function md(t) {
        var e = t.map(function (t) {
            return t.x
        }), n = t.map(function (t) {
            return t.y
        }), r = e.reduce(function (t, e) {
            return e < t ? e : t
        }, 1 / 0), o = n.reduce(function (t, e) {
            return e < t ? e : t
        }, 1 / 0), i = e.reduce(function (t, e) {
            return t < e ? e : t
        }, 0), a = n.reduce(function (t, e) {
            return t < e ? e : t
        }, 0);
        return new ud(r, o, i, a)
    }

    function gd(s, t, u, c) {
        void 0 === c && (c = !0);
        for (var l = t.map(function (t, e) {
            return {score: t, boxIndex: e}
        }).sort(function (t, e) {
            return t.score - e.score
        }).map(function (t) {
            return t.boxIndex
        }), h = [], e = function () {
            var t = l.pop();
            h.push(t);
            for (var e = l, n = [], r = 0; r < e.length; r++) {
                var o = e[r], i = s[t], a = s[o];
                n.push(vd(i, a, c))
            }
            l = l.filter(function (t, e) {
                return n[e] <= u
            })
        }; 0 < l.length;) e();
        return h
    }

    function yd(s, u) {
        return nn(function () {
            var t = u[0], e = u[1], n = u[2], r = Bn(zp(s.shape.slice(0, 3), [1]), t),
                o = Bn(zp(s.shape.slice(0, 3), [1]), e), i = Bn(zp(s.shape.slice(0, 3), [1]), n), a = Vn([r, o, i], 3);
            return tc(s, a)
        })
    }

    function xd(l, h) {
        return void 0 === h && (h = !1), nn(function () {
            var t = l.shape.slice(1), e = t[0], n = t[1];
            if (e === n) return l;

            function r(t) {
                var e = l.shape.slice();
                return e[a] = t, Bn(e, 0)
            }

            var o = Math.abs(e - n), i = Math.round(o * (h ? .5 : 1)), a = n < e ? 2 : 1, s = r(i), u = o - s.shape[a],
                c = [h && u ? r(u) : null, l, s].filter(function (t) {
                    return !!t
                }).map(function (t) {
                    return t.toFloat()
                });
            return Vn(c, a)
        })
    }

    function bd(t) {
        return 1 / (1 + Math.exp(-t))
    }

    var wd, Cd = (Pp(Ed, wd = id), Ed);

    function Ed(t, e, n, r, o) {
        return void 0 === o && (o = !1), wd.call(this, {x: t, y: e, width: n, height: r}, o) || this
    }

    var _d = (Object.defineProperty(Id.prototype, "shift", {
        get: function () {
            return new rd(this._shift.x, this._shift.y)
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Id.prototype, "imageWidth", {
        get: function () {
            return this._imgDims.width
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Id.prototype, "imageHeight", {
        get: function () {
            return this._imgDims.height
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Id.prototype, "positions", {
        get: function () {
            return this._positions
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Id.prototype, "relativePositions", {
        get: function () {
            var e = this;
            return this._positions.map(function (t) {
                return t.sub(e._shift).div(new rd(e.imageWidth, e.imageHeight))
            })
        }, enumerable: !0, configurable: !0
    }), Id.prototype.forSize = function (t, e) {
        return new this.constructor(this.relativePositions, {width: t, height: e})
    }, Id.prototype.shiftBy = function (t, e) {
        return new this.constructor(this.relativePositions, this._imgDims, new rd(t, e))
    }, Id.prototype.shiftByPoint = function (t) {
        return this.shiftBy(t.x, t.y)
    }, Id.prototype.align = function (t, e) {
        if (void 0 === e && (e = {}), t) {
            var n = t instanceof pd ? t.box.floor() : new id(t);
            return this.shiftBy(n.x, n.y).align(null, e)
        }
        var r = Object.assign({}, {useDlibAlignment: !1, minBoxPadding: .2}, e), o = r.useDlibAlignment,
            i = r.minBoxPadding;
        return o ? this.alignDlib() : this.alignMinBbox(i)
    }, Id.prototype.alignDlib = function () {
        function t(t) {
            return o.sub(t).magnitude()
        }

        var e = this.getRefPointsForAlignment(), n = e[0], r = e[1], o = e[2], i = (t(n) + t(r)) / 2,
            a = Math.floor(i / .45), s = Qp(e), u = Math.floor(Math.max(0, s.x - .5 * a)),
            c = Math.floor(Math.max(0, s.y - .43 * a));
        return new Cd(u, c, Math.min(a, this.imageWidth + u), Math.min(a, this.imageHeight + c))
    }, Id.prototype.alignMinBbox = function (t) {
        var e = md(this.positions);
        return e.pad(e.width * t, e.height * t)
    }, Id.prototype.getRefPointsForAlignment = function () {
        throw new Error("getRefPointsForAlignment not implemented by base class")
    }, Id);

    function Id(t, e, n) {
        void 0 === n && (n = new rd(0, 0));
        var r = e.width, o = e.height;
        this._imgDims = new Up(r, o), this._shift = n, this._positions = t.map(function (t) {
            return t.mul(new rd(r, o)).add(n)
        })
    }

    var Rd, kd = (Pp(Sd, Rd = _d), Sd.prototype.getRefPointsForAlignment = function () {
        var t = this.positions;
        return [t[0], t[1], Qp([t[3], t[4]])]
    }, Sd);

    function Sd() {
        return null !== Rd && Rd.apply(this, arguments) || this
    }

    var Dd, Ad = (Pp(Td, Dd = _d), Td.prototype.getJawOutline = function () {
        return this.positions.slice(0, 17)
    }, Td.prototype.getLeftEyeBrow = function () {
        return this.positions.slice(17, 22)
    }, Td.prototype.getRightEyeBrow = function () {
        return this.positions.slice(22, 27)
    }, Td.prototype.getNose = function () {
        return this.positions.slice(27, 36)
    }, Td.prototype.getLeftEye = function () {
        return this.positions.slice(36, 42)
    }, Td.prototype.getRightEye = function () {
        return this.positions.slice(42, 48)
    }, Td.prototype.getMouth = function () {
        return this.positions.slice(48, 68)
    }, Td.prototype.getRefPointsForAlignment = function () {
        return [this.getLeftEye(), this.getRightEye(), this.getMouth()].map(Qp)
    }, Td);

    function Td() {
        return null !== Dd && Dd.apply(this, arguments) || this
    }

    var Nd = (Object.defineProperty(Fd.prototype, "label", {
        get: function () {
            return this._label
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Fd.prototype, "distance", {
        get: function () {
            return this._distance
        }, enumerable: !0, configurable: !0
    }), Fd.prototype.toString = function (t) {
        return void 0 === t && (t = !0), this.label + (t ? " (" + Yp(this.distance) + ")" : "")
    }, Fd);

    function Fd(t, e) {
        this._label = t, this._distance = e
    }

    var Md, Od = (Pp(Pd, Md = id), Pd.assertIsValidLabeledBox = function (t, e) {
        if (id.assertIsValidBox(t, e), !td(t.label)) throw new Error(e + " - expected property label (" + t.label + ") to be a number")
    }, Object.defineProperty(Pd.prototype, "label", {
        get: function () {
            return this._label
        }, enumerable: !0, configurable: !0
    }), Pd);

    function Pd(t, e) {
        var n = Md.call(this, t) || this;
        return n._label = e, n
    }

    var Bd = (Object.defineProperty(Ld.prototype, "label", {
        get: function () {
            return this._label
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Ld.prototype, "descriptors", {
        get: function () {
            return this._descriptors
        }, enumerable: !0, configurable: !0
    }), Ld.prototype.toJSON = function () {
        return {
            label: this.label, descriptors: this.descriptors.map(function (t) {
                return Array.from(t)
            })
        }
    }, Ld.fromJSON = function (t) {
        var e = t.descriptors.map(function (t) {
            return new Float32Array(t)
        });
        return new Ld(t.label, e)
    }, Ld);

    function Ld(t, e) {
        if ("string" != typeof t) throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");
        if (!Array.isArray(e) || e.some(function (t) {
            return !(t instanceof Float32Array)
        })) throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");
        this._label = t, this._descriptors = e
    }

    var Wd, zd, Ud = (Pp(Vd, Wd = Od), Vd.assertIsValidPredictedBox = function (t, e) {
        if (Od.assertIsValidLabeledBox(t, e), !ed(t.score) || !ed(t.classScore)) throw new Error(e + " - expected properties score (" + t.score + ") and (" + t.classScore + ") to be a number between [0, 1]")
    }, Object.defineProperty(Vd.prototype, "score", {
        get: function () {
            return this._score
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Vd.prototype, "classScore", {
        get: function () {
            return this._classScore
        }, enumerable: !0, configurable: !0
    }), Vd);

    function Vd(t, e, n, r) {
        var o = Wd.call(this, t, e) || this;
        return o._score = n, o._classScore = r, o
    }

    function Gd(t) {
        return t.detection instanceof pd
    }

    function Hd(t, e) {
        var n = {detection: e};
        return Object.assign({}, t, n)
    }

    function qd() {
        var t = window.fetch || function () {
            throw new Error("fetch - missing fetch implementation for browser environment")
        };
        return {
            Canvas: HTMLCanvasElement,
            CanvasRenderingContext2D: CanvasRenderingContext2D,
            Image: HTMLImageElement,
            ImageData: ImageData,
            Video: HTMLVideoElement,
            createCanvasElement: function () {
                return document.createElement("canvas")
            },
            createImageElement: function () {
                return document.createElement("img")
            },
            fetch: t,
            readFile: function () {
                throw new Error("readFile - filesystem not available for browser environment")
            }
        }
    }

    function jd(e) {
        var n = "";
        if (!e) try {
            e = require("fs")
        } catch (t) {
            n = t.toString()
        }
        return {
            readFile: e ? function (t) {
                return new Promise(function (n, r) {
                    e.readFile(t, function (t, e) {
                        return t ? r(t) : n(e)
                    })
                })
            } : function () {
                throw new Error("readFile - failed to require fs in nodejs environment with error: " + n)
            }
        }
    }

    function Kd() {
        var t = global.Canvas || global.HTMLCanvasElement, e = global.Image || global.HTMLImageElement,
            n = global.fetch || function () {
                throw new Error("fetch - missing fetch implementation for nodejs environment")
            }, r = jd();
        return Bp({
            Canvas: t || function () {
            }, CanvasRenderingContext2D: global.CanvasRenderingContext2D || function () {
            }, Image: e || function () {
            }, ImageData: global.ImageData || function () {
            }, Video: global.HTMLVideoElement || function () {
            }, createCanvasElement: function () {
                if (t) return new t;
                throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")
            }, createImageElement: function () {
                if (e) return new e;
                throw new Error("createImageElement - missing Image implementation for nodejs environment")
            }, fetch: n
        }, r)
    }

    function Xd() {
        return "object" == typeof window && "undefined" != typeof document && "undefined" != typeof HTMLImageElement && "undefined" != typeof HTMLCanvasElement && "undefined" != typeof HTMLVideoElement && "undefined" != typeof ImageData && "undefined" != typeof CanvasRenderingContext2D
    }

    function Yd() {
        return "object" == typeof global && "function" == typeof require && "undefined" != typeof module && "undefined" != typeof process && !!process.version
    }

    function $d(t) {
        zd = t
    }

    function Jd() {
        Xd() && $d(qd()), Yd() && $d(Kd())
    }

    var Qd, Zd, tv = {
        getEnv: function () {
            if (!zd) throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");
            return zd
        },
        setEnv: $d,
        initialize: Jd,
        createBrowserEnv: qd,
        createFileSystem: jd,
        createNodejsEnv: Kd,
        monkeyPatch: function (t) {
            if (zd || Jd(), !zd) throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");
            var e = t.Canvas, n = void 0 === e ? zd.Canvas : e, r = t.Image, o = void 0 === r ? zd.Image : r;
            zd.Canvas = n, zd.Image = o, zd.createCanvasElement = t.createCanvasElement || function () {
                return new n
            }, zd.createImageElement = t.createImageElement || function () {
                return new o
            }, zd.ImageData = t.ImageData || zd.ImageData, zd.Video = t.Video || zd.Video, zd.fetch = t.fetch || zd.fetch, zd.readFile = t.readFile || zd.readFile
        },
        isBrowser: Xd,
        isNodejs: Yd
    };

    function ev(t) {
        return tv.isNodejs() || "string" != typeof t ? t : document.getElementById(t)
    }

    function nv(t) {
        var e = tv.getEnv(), n = e.Canvas;
        if (t instanceof e.CanvasRenderingContext2D) return t;
        var r = ev(t);
        if (!(r instanceof n)) throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");
        var o = r.getContext("2d");
        if (!o) throw new Error("resolveContext2d - canvas 2d context is null");
        return o
    }

    Jd(), (Zd = Qd = Qd || {}).TOP_LEFT = "TOP_LEFT", Zd.TOP_RIGHT = "TOP_RIGHT", Zd.BOTTOM_LEFT = "BOTTOM_LEFT", Zd.BOTTOM_RIGHT = "BOTTOM_RIGHT";
    var rv = function (t) {
        void 0 === t && (t = {});
        var e = t.anchorPosition, n = t.backgroundColor, r = t.fontColor, o = t.fontSize, i = t.fontStyle,
            a = t.padding;
        this.anchorPosition = e || Qd.TOP_LEFT, this.backgroundColor = n || "rgba(0, 0, 0, 0.5)", this.fontColor = r || "rgba(255, 255, 255, 1)", this.fontSize = o || 14, this.fontStyle = i || "Georgia", this.padding = a || 4
    }, ov = (iv.prototype.measureWidth = function (e) {
        var t = this.options.padding;
        return this.text.map(function (t) {
            return e.measureText(t).width
        }).reduce(function (t, e) {
            return t < e ? e : t
        }, 0) + 2 * t
    }, iv.prototype.measureHeight = function () {
        var t = this.options, e = t.fontSize, n = t.padding;
        return this.text.length * e + 2 * n
    }, iv.prototype.getUpperLeft = function (t, e) {
        var n = this.options.anchorPosition, r = n === Qd.BOTTOM_RIGHT || n === Qd.TOP_RIGHT,
            o = n === Qd.BOTTOM_LEFT || n === Qd.BOTTOM_RIGHT, i = this.measureWidth(t), a = this.measureHeight(),
            s = r ? this.anchor.x - i : this.anchor.x, u = o ? this.anchor.y - a : this.anchor.y;
        if (e) {
            var c = e.width, l = e.height;
            return {x: Math.max(Math.min(s, c - i), 0), y: Math.max(Math.min(u, l - a), 0)}
        }
        return {x: s, y: u}
    }, iv.prototype.draw = function (t) {
        var e = ev(t), o = nv(e), n = this.options, r = n.backgroundColor, i = n.fontColor, a = n.fontSize,
            s = n.fontStyle, u = n.padding;
        o.font = a + "px " + s;
        var c = this.measureWidth(o), l = this.measureHeight();
        o.fillStyle = r;
        var h = this.getUpperLeft(o, e);
        o.fillRect(h.x, h.y, c, l), o.fillStyle = i, this.text.forEach(function (t, e) {
            var n = u + h.x, r = u + h.y + (e + 1) * a;
            o.fillText(t, n, r)
        })
    }, iv);

    function iv(t, e, n) {
        void 0 === n && (n = {}), this.text = "string" == typeof t ? [t] : t instanceof iv ? t.text : t, this.anchor = e, this.options = new rv(n)
    }

    var av = function (t) {
        void 0 === t && (t = {});
        var e = t.boxColor, n = t.lineWidth, r = t.label, o = t.drawLabelOptions;
        this.boxColor = e || "rgba(0, 0, 255, 1)", this.lineWidth = n || 2, this.label = r;
        var i = {anchorPosition: Qd.BOTTOM_LEFT, backgroundColor: this.boxColor};
        this.drawLabelOptions = new rv(Object.assign({}, i, o))
    }, sv = (uv.prototype.draw = function (t) {
        var e = nv(t), n = this.options, r = n.boxColor, o = n.lineWidth, i = this.box, a = i.x, s = i.y, u = i.width,
            c = i.height;
        e.strokeStyle = r, e.lineWidth = o, e.strokeRect(a, s, u, c);
        var l = this.options.label;
        l && new ov([l], {x: a - o / 2, y: s}, this.options.drawLabelOptions).draw(t)
    }, uv);

    function uv(t, e) {
        void 0 === e && (e = {}), this.box = new id(t), this.options = new av(e)
    }

    function cv(t) {
        var e = tv.getEnv(), n = e.Image, r = e.Video;
        return t instanceof n && t.complete || t instanceof r && 3 <= t.readyState
    }

    function lv(t) {
        return new Promise(function (e, n) {
            if (t instanceof tv.getEnv().Canvas || cv(t)) return e();

            function r(t) {
                t.currentTarget && (t.currentTarget.removeEventListener("load", r), t.currentTarget.removeEventListener("error", o), e(t))
            }

            function o(t) {
                t.currentTarget && (t.currentTarget.removeEventListener("load", r), t.currentTarget.removeEventListener("error", o), n(t))
            }

            t.addEventListener("load", r), t.addEventListener("error", o)
        })
    }

    function hv(t) {
        return new Promise(function (e, n) {
            if (!(t instanceof Blob)) return n("bufferToImage - expected buf to be of type: Blob");
            var r = new FileReader;
            r.onload = function () {
                if ("string" != typeof r.result) return n("bufferToImage - expected reader.result to be a string, in onload");
                var t = tv.getEnv().createImageElement();
                t.onload = function () {
                    return e(t)
                }, t.onerror = n, t.src = r.result
            }, r.onerror = n, r.readAsDataURL(t)
        })
    }

    function fv(t) {
        var e = tv.getEnv(), n = e.Image, r = e.Video;
        return t instanceof n ? new Up(t.naturalWidth, t.naturalHeight) : t instanceof r ? new Up(t.videoWidth, t.videoHeight) : new Up(t.width, t.height)
    }

    function pv(t) {
        var e = t.width, n = t.height, r = (0, tv.getEnv().createCanvasElement)();
        return r.width = e, r.height = n, r
    }

    function dv(t, e) {
        var n = tv.getEnv().ImageData;
        if (!(t instanceof n || cv(t))) throw new Error("createCanvasFromMedia - media has not finished loading yet");
        var r = e || fv(t), o = r.width, i = r.height, a = pv({width: o, height: i});
        return t instanceof n ? nv(a).putImageData(t, 0, 0) : nv(a).drawImage(t, 0, 0, o, i), a
    }

    function vv(s, u) {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i, a;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = u || tv.getEnv().createCanvasElement(), n = s.shape.slice(jp(s) ? 1 : 0), r = n[0], o = n[1], i = n[2], a = nn(function () {
                            return s.as3D(r, o, i).toInt()
                        }), [4, Kf.toPixels(a, e)];
                    case 1:
                        return t.sent(), a.dispose(), [2, e]
                }
            })
        })
    }

    function mv(t) {
        var e = tv.getEnv(), n = e.Image, r = e.Canvas, o = e.Video;
        return t instanceof n || t instanceof r || t instanceof o
    }

    function gv(t, e, n) {
        void 0 === n && (n = !1);
        var r = tv.getEnv(), o = r.Image, i = r.Canvas;
        if (!(t instanceof o || t instanceof i)) throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");
        var a = fv(t), s = e / Math.max(a.height, a.width), u = s * a.width, c = s * a.height,
            l = pv({width: e, height: e}), h = t instanceof i ? t : dv(t), f = Math.abs(u - c) / 2,
            p = n && u < c ? f : 0, d = n && c < u ? f : 0;
        return nv(l).drawImage(h, p, d, u, c), l
    }

    var yv = (Object.defineProperty(xv.prototype, "imageTensors", {
        get: function () {
            return this._imageTensors
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(xv.prototype, "canvases", {
        get: function () {
            return this._canvases
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(xv.prototype, "isBatchInput", {
        get: function () {
            return 1 < this.batchSize || this._treatAsBatchInput
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(xv.prototype, "batchSize", {
        get: function () {
            return this._batchSize
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(xv.prototype, "inputDimensions", {
        get: function () {
            return this._inputDimensions
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(xv.prototype, "inputSize", {
        get: function () {
            return this._inputSize
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(xv.prototype, "reshapedInputDimensions", {
        get: function () {
            var n = this;
            return Zp(this.batchSize, 0, 1).map(function (t, e) {
                return n.getReshapedInputDimensions(e)
            })
        }, enumerable: !0, configurable: !0
    }), xv.prototype.getInput = function (t) {
        return this.canvases[t] || this.imageTensors[t]
    }, xv.prototype.getInputDimensions = function (t) {
        return this._inputDimensions[t]
    }, xv.prototype.getInputHeight = function (t) {
        return this._inputDimensions[t][0]
    }, xv.prototype.getInputWidth = function (t) {
        return this._inputDimensions[t][1]
    }, xv.prototype.getReshapedInputDimensions = function (t) {
        if ("number" != typeof this.inputSize) throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");
        return Jp({width: this.getInputWidth(t), height: this.getInputHeight(t)}, this.inputSize)
    }, xv.prototype.toBatchTensor = function (r, o) {
        var i = this;
        return void 0 === o && (o = !0), this._inputSize = r, nn(function () {
            var t = Zp(i.batchSize, 0, 1).map(function (t) {
                var e = i.getInput(t);
                if (e instanceof bt) {
                    var n = jp(e) ? e : e.expandDims();
                    return (n = xd(n, o)).shape[1] === r && n.shape[2] === r || (n = vh.resizeBilinear(n, [r, r])), n.as3D(r, r, 3)
                }
                if (e instanceof tv.getEnv().Canvas) return Kf.fromPixels(gv(e, r, o));
                throw new Error("toBatchTensor - at batchIdx " + t + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + e)
            });
            return Mr(t.map(function (t) {
                return t.toFloat()
            })).as4D(i.batchSize, r, r, 3)
        })
    }, xv);

    function xv(t, e) {
        var o = this;
        if (void 0 === e && (e = !1), this._imageTensors = [], this._canvases = [], this._treatAsBatchInput = !1, this._inputDimensions = [], !Array.isArray(t)) throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have " + t);
        this._treatAsBatchInput = e, this._batchSize = t.length, t.forEach(function (t, e) {
            if (qp(t)) return o._imageTensors[e] = t, void (o._inputDimensions[e] = t.shape);
            if (jp(t)) {
                var n = t.shape[0];
                if (1 !== n) throw new Error("NetInput - tf.Tensor4D with batchSize " + n + " passed, but not supported in input array");
                return o._imageTensors[e] = t, void (o._inputDimensions[e] = t.shape.slice(1))
            }
            var r = t instanceof tv.getEnv().Canvas ? t : dv(t);
            o._canvases[e] = r, o._inputDimensions[e] = [r.height, r.width, 3]
        })
    }

    function bv(n) {
        return Lp(this, void 0, void 0, function () {
            var r, o, e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (n instanceof yv) return [2, n];
                        if (!(r = Array.isArray(n) ? n : [n]).length) throw new Error("toNetInput - empty array passed as input");
                        return o = function (t) {
                            return Array.isArray(n) ? " at input index " + t + ":" : ""
                        }, (e = r.map(ev)).forEach(function (t, e) {
                            if (!mv(t) && !qp(t) && !jp(t)) {
                                if ("string" == typeof r[e]) throw new Error("toNetInput -" + o(e) + " string passed, but could not resolve HTMLElement for element id " + r[e]);
                                throw new Error("toNetInput -" + o(e) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id")
                            }
                            if (jp(t)) {
                                var n = t.shape[0];
                                if (1 !== n) throw new Error("toNetInput -" + o(e) + " tf.Tensor4D with batchSize " + n + " passed, but not supported in input array")
                            }
                        }), [4, Promise.all(e.map(function (t) {
                            return mv(t) && lv(t)
                        }))];
                    case 1:
                        return t.sent(), [2, new yv(e, Array.isArray(n))]
                }
            })
        })
    }

    function wv(s, u) {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i, a;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = tv.getEnv().Canvas, (n = s) instanceof e ? [3, 5] : [4, bv(s)];
                    case 1:
                        if (1 < (r = t.sent()).batchSize) throw new Error("extractFaces - batchSize > 1 not supported");
                        return (o = r.getInput(0)) instanceof e ? (i = o, [3, 4]) : [3, 2];
                    case 2:
                        return [4, vv(o)];
                    case 3:
                        i = t.sent(), t.label = 4;
                    case 4:
                        n = i, t.label = 5;
                    case 5:
                        return a = nv(n), [2, u.map(function (t) {
                            return t instanceof pd ? t.forSize(n.width, n.height).box.floor() : t
                        }).map(function (t) {
                            return t.clipAtImageBorders(n.width, n.height)
                        }).map(function (t) {
                            var e = t.x, n = t.y, r = t.width, o = t.height, i = pv({width: r, height: o});
                            return nv(i).putImageData(a.getImageData(e, n, r, o), 0, 0), i
                        })]
                }
            })
        })
    }

    function Cv(u, e) {
        return Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                if (!qp(u) && !jp(u)) throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");
                if (jp(u) && 1 < u.shape[0]) throw new Error("extractFaceTensors - batchSize > 1 not supported");
                return [2, nn(function () {
                    var t = u.shape.slice(jp(u) ? 1 : 0), i = t[0], a = t[1], s = t[2];
                    return e.map(function (t) {
                        return t instanceof pd ? t.forSize(a, i).box : t
                    }).map(function (t) {
                        return t.clipAtImageBorders(a, i)
                    }).map(function (t) {
                        var e = t.x, n = t.y, r = t.width, o = t.height;
                        return Jc(u.as3D(i, a, s), [n, e, 0], [o, r, s])
                    })
                })]
            })
        })
    }

    function Ev(n, r) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, (0, tv.getEnv().fetch)(n, r)];
                    case 1:
                        if (!((e = t.sent()).status < 400)) throw new Error("failed to fetch: (" + e.status + ") " + e.statusText + ", from url: " + e.url);
                        return [2, e]
                }
            })
        })
    }

    function _v(e) {
        return Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, Ev(e)];
                    case 1:
                        return [2, t.sent().json()]
                }
            })
        })
    }

    function Iv(t, e) {
        var n = e + "-weights_manifest.json";
        if (!t) return {modelBaseUri: "", manifestUri: n};
        if ("/" === t) return {modelBaseUri: "/", manifestUri: "/" + n};
        var r = t.startsWith("http://") ? "http://" : t.startsWith("https://") ? "https://" : "",
            o = (t = t.replace(r, "")).split("/").filter(function (t) {
                return t
            }), i = t.endsWith(".json") ? o[o.length - 1] : n,
            a = r + (t.endsWith(".json") ? o.slice(0, o.length - 1) : o).join("/");
        return {modelBaseUri: a = t.startsWith("/") ? "/" + a : a, manifestUri: "/" === a ? "/" + i : a + "/" + i}
    }

    function Rv(i, a) {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = Iv(i, a), n = e.manifestUri, r = e.modelBaseUri, [4, _v(n)];
                    case 1:
                        return o = t.sent(), [2, Gf.loadWeights(o, r)]
                }
            })
        })
    }

    var kv = (Object.defineProperty(Sv.prototype, "params", {
        get: function () {
            return this._params
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Sv.prototype, "paramMappings", {
        get: function () {
            return this._paramMappings
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Sv.prototype, "isLoaded", {
        get: function () {
            return !!this.params
        }, enumerable: !0, configurable: !0
    }), Sv.prototype.getParamFromPath = function (t) {
        var e = this.traversePropertyPath(t);
        return e.obj[e.objProp]
    }, Sv.prototype.reassignParamFromPath = function (t, e) {
        var n = this.traversePropertyPath(t), r = n.obj, o = n.objProp;
        r[o].dispose(), r[o] = e
    }, Sv.prototype.getParamList = function () {
        var n = this;
        return this._paramMappings.map(function (t) {
            var e = t.paramPath;
            return {path: e, tensor: n.getParamFromPath(e)}
        })
    }, Sv.prototype.getTrainableParams = function () {
        return this.getParamList().filter(function (t) {
            return t.tensor instanceof Ft
        })
    }, Sv.prototype.getFrozenParams = function () {
        return this.getParamList().filter(function (t) {
            return !(t.tensor instanceof Ft)
        })
    }, Sv.prototype.variable = function () {
        var r = this;
        this.getFrozenParams().forEach(function (t) {
            var e = t.path, n = t.tensor;
            r.reassignParamFromPath(e, n.variable())
        })
    }, Sv.prototype.freeze = function () {
        var o = this;
        this.getTrainableParams().forEach(function (t) {
            var e = t.path, n = t.tensor, r = In(n.dataSync());
            n.dispose(), o.reassignParamFromPath(e, r)
        })
    }, Sv.prototype.dispose = function (e) {
        void 0 === e && (e = !0), this.getParamList().forEach(function (t) {
            if (e && t.tensor.isDisposed) throw new Error("param tensor has already been disposed for path " + t.path);
            t.tensor.dispose()
        }), this._params = void 0
    }, Sv.prototype.serializeParams = function () {
        return new Float32Array(this.getParamList().map(function (t) {
            var e = t.tensor;
            return Array.from(e.dataSync())
        }).reduce(function (t, e) {
            return t.concat(e)
        }))
    }, Sv.prototype.load = function (e) {
        return Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e instanceof Float32Array ? (this.extractWeights(e), [2]) : [4, this.loadFromUri(e)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, Sv.prototype.loadFromUri = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (n && "string" != typeof n) throw new Error(this._name + ".loadFromUri - expected model uri");
                        return [4, Rv(n, this.getDefaultModelName())];
                    case 1:
                        return e = t.sent(), this.loadFromWeightMap(e), [2]
                }
            })
        })
    }, Sv.prototype.loadFromDisk = function (h) {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (h && "string" != typeof h) throw new Error(this._name + ".loadFromDisk - expected model file path");
                        return e = tv.getEnv().readFile, n = Iv(h, this.getDefaultModelName()), r = n.manifestUri, o = n.modelBaseUri, i = function (t) {
                            return Promise.all(t.map(function (t) {
                                return e(t).then(function (t) {
                                    return t.buffer
                                })
                            }))
                        }, a = Gf.weightsLoaderFactory(i), c = (u = JSON).parse, [4, e(r)];
                    case 1:
                        return s = c.apply(u, [t.sent().toString()]), [4, a(s, o)];
                    case 2:
                        return l = t.sent(), this.loadFromWeightMap(l), [2]
                }
            })
        })
    }, Sv.prototype.loadFromWeightMap = function (t) {
        var e = this.extractParamsFromWeigthMap(t), n = e.paramMappings, r = e.params;
        this._paramMappings = n, this._params = r
    }, Sv.prototype.extractWeights = function (t) {
        var e = this.extractParams(t), n = e.paramMappings, r = e.params;
        this._paramMappings = n, this._params = r
    }, Sv.prototype.traversePropertyPath = function (n) {
        if (!this.params) throw new Error("traversePropertyPath - model has no loaded params");
        var t = n.split("/").reduce(function (t, e) {
            if (!t.nextObj.hasOwnProperty(e)) throw new Error("traversePropertyPath - object does not have property " + e + ", for path " + n);
            return {obj: t.nextObj, objProp: e, nextObj: t.nextObj[e]}
        }, {nextObj: this.params}), e = t.obj, r = t.objProp;
        if (!(e && r && e[r] instanceof bt)) throw new Error("traversePropertyPath - parameter is not a tensor, for path " + n);
        return {obj: e, objProp: r}
    }, Sv);

    function Sv(t) {
        this._name = t, this._params = void 0, this._paramMappings = []
    }

    function Dv(e, n, r) {
        return nn(function () {
            var t = Ac(e, n.depthwise_filter, n.pointwise_filter, r, "same");
            return t = Ou(t, n.bias)
        })
    }

    function Av(r, o, i) {
        return void 0 === i && (i = !1), nn(function () {
            var t = dl(i ? Ou(Ec(r, o.conv0.filters, [2, 2], "same"), o.conv0.bias) : Dv(r, o.conv0, [2, 2])),
                e = Dv(t, o.conv1, [1, 1]), n = Dv(dl(Ou(t, e)), o.conv2, [1, 1]);
            return dl(Ou(t, Ou(e, n)))
        })
    }

    function Tv(o, i, a, s) {
        return void 0 === a && (a = !1), void 0 === s && (s = !0), nn(function () {
            var t = dl(a ? Ou(Ec(o, i.conv0.filters, s ? [2, 2] : [1, 1], "same"), i.conv0.bias) : Dv(o, i.conv0, s ? [2, 2] : [1, 1])),
                e = Dv(t, i.conv1, [1, 1]), n = Dv(dl(Ou(t, e)), i.conv2, [1, 1]),
                r = Dv(dl(Ou(t, Ou(e, n))), i.conv3, [1, 1]);
            return dl(Ou(t, Ou(e, Ou(n, r))))
        })
    }

    function Nv(e, n, r, o) {
        return void 0 === r && (r = "same"), void 0 === o && (o = !1), nn(function () {
            var t = Ou(Ec(e, n.filters, [1, 1], r), n.bias);
            return o ? dl(t) : t
        })
    }

    function Fv(t, n) {
        Object.keys(t).forEach(function (e) {
            n.some(function (t) {
                return t.originalPath === e
            }) || t[e].dispose()
        })
    }

    function Mv(a, s) {
        return function (t, e, n, r) {
            var o = Tn(a(t * e * n * n), [n, n, t, e]), i = Sn(a(e));
            return s.push({paramPath: r + "/filters"}, {paramPath: r + "/bias"}), {filters: o, bias: i}
        }
    }

    function Ov(i, a) {
        return function (t, e, n) {
            var r = Dn(i(t * e), [t, e]), o = Sn(i(e));
            return a.push({paramPath: n + "/weights"}, {paramPath: n + "/bias"}), {weights: r, bias: o}
        }
    }

    var Pv = function (t, e, n) {
        this.depthwise_filter = t, this.pointwise_filter = e, this.bias = n
    };

    function Bv(a, s) {
        return function (t, e, n) {
            var r = Tn(a(9 * t), [3, 3, t, 1]), o = Tn(a(t * e), [1, 1, t, e]), i = Sn(a(e));
            return s.push({paramPath: n + "/depthwise_filter"}, {paramPath: n + "/pointwise_filter"}, {paramPath: n + "/bias"}), new Pv(r, o, i)
        }
    }

    function Lv(o) {
        return function (t) {
            var e = o(t + "/depthwise_filter", 4), n = o(t + "/pointwise_filter", 4), r = o(t + "/bias", 1);
            return new Pv(e, n, r)
        }
    }

    function Wv(o, i) {
        return function (t, e, n) {
            var r = o[t];
            if (!Gp(r, e)) throw new Error("expected weightMap[" + t + "] to be a Tensor" + e + "D, instead have " + r);
            return i.push({originalPath: t, paramPath: n || t}), r
        }
    }

    function zv(t) {
        var n = t;
        return {
            extractWeights: function (t) {
                var e = n.slice(0, t);
                return n = n.slice(t), e
            }, getRemainingWeights: function () {
                return n
            }
        }
    }

    function Uv(t, e) {
        var o = Mv(t, e), i = Bv(t, e);

        function a(t, e, n, r) {
            return void 0 === r && (r = !1), {
                conv0: r ? o(t, e, 3, n + "/conv0") : i(t, e, n + "/conv0"),
                conv1: i(e, e, n + "/conv1"),
                conv2: i(e, e, n + "/conv2")
            }
        }

        return {
            extractDenseBlock3Params: a, extractDenseBlock4Params: function (t, e, n, r) {
                void 0 === r && (r = !1);
                var o = a(t, e, n, r);
                return {conv0: o.conv0, conv1: o.conv1, conv2: o.conv2, conv3: i(e, e, n + "/conv3")}
            }
        }
    }

    function Vv(e) {
        return function (t) {
            return {filters: e(t + "/filters", 4), bias: e(t + "/bias", 1)}
        }
    }

    function Gv(t, e) {
        var n = Wv(t, e), r = Vv(n), o = Lv(n);
        return {
            extractDenseBlock3Params: function (t, e) {
                return void 0 === e && (e = !1), {
                    conv0: e ? r(t + "/conv0") : o(t + "/conv0"),
                    conv1: o(t + "/conv1"),
                    conv2: o(t + "/conv2")
                }
            }, extractDenseBlock4Params: function (t, e) {
                return void 0 === e && (e = !1), {
                    conv0: e ? r(t + "/conv0") : o(t + "/conv0"),
                    conv1: o(t + "/conv1"),
                    conv2: o(t + "/conv2"),
                    conv3: o(t + "/conv3")
                }
            }
        }
    }

    var Hv, qv = (Pp(jv, Hv = kv), jv.prototype.forwardInput = function (e) {
        var n = this.params;
        if (!n) throw new Error("FaceFeatureExtractor - load model before inference");
        return nn(function () {
            var t = Tv(yd(e.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(kn(255)), n.dense0, !0);
            return t = Tv(t = Tv(t = Tv(t, n.dense1), n.dense2), n.dense3), t = Hc(t, [7, 7], [2, 2], "valid")
        })
    }, jv.prototype.forward = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [2, e.apply(this, [t.sent()])]
                }
            })
        })
    }, jv.prototype.getDefaultModelName = function () {
        return "face_feature_extractor_model"
    }, jv.prototype.extractParamsFromWeigthMap = function (t) {
        return function (t) {
            var e = [], n = Gv(t, e).extractDenseBlock4Params,
                r = {dense0: n("dense0", !0), dense1: n("dense1"), dense2: n("dense2"), dense3: n("dense3")};
            return Fv(t, e), {params: r, paramMappings: e}
        }(t)
    }, jv.prototype.extractParams = function (t) {
        return function (t) {
            var e = [], n = zv(t), r = n.extractWeights, o = n.getRemainingWeights,
                i = Uv(r, e).extractDenseBlock4Params, a = i(3, 32, "dense0", !0), s = i(32, 64, "dense1"),
                u = i(64, 128, "dense2"), c = i(128, 256, "dense3");
            if (0 !== o().length) throw new Error("weights remaing after extract: " + o().length);
            return {paramMappings: e, params: {dense0: a, dense1: s, dense2: u, dense3: c}}
        }(t)
    }, jv);

    function jv() {
        return Hv.call(this, "FaceFeatureExtractor") || this
    }

    function Kv(t, e) {
        return nn(function () {
            return Ou(Fc(t, e.weights), e.bias)
        })
    }

    function Xv(e) {
        var n = {}, r = {};
        return Object.keys(e).forEach(function (t) {
            (t.startsWith("fc") ? r : n)[t] = e[t]
        }), {featureExtractorMap: n, classifierMap: r}
    }

    var Yv, $v = (Pp(Jv, Yv = kv), Object.defineProperty(Jv.prototype, "faceFeatureExtractor", {
        get: function () {
            return this._faceFeatureExtractor
        }, enumerable: !0, configurable: !0
    }), Jv.prototype.runNet = function (e) {
        var n = this, r = this.params;
        if (!r) throw new Error(this._name + " - load model before inference");
        return nn(function () {
            var t = e instanceof yv ? n.faceFeatureExtractor.forwardInput(e) : e;
            return Kv(t.as2D(t.shape[0], -1), r.fc)
        })
    }, Jv.prototype.dispose = function (t) {
        void 0 === t && (t = !0), this.faceFeatureExtractor.dispose(t), Yv.prototype.dispose.call(this, t)
    }, Jv.prototype.loadClassifierParams = function (t) {
        var e = this.extractClassifierParams(t), n = e.params, r = e.paramMappings;
        this._params = n, this._paramMappings = r
    }, Jv.prototype.extractClassifierParams = function (t) {
        return function (t, e, n) {
            var r = [], o = zv(t), i = o.extractWeights, a = o.getRemainingWeights, s = Ov(i, r)(e, n, "fc");
            if (0 !== a().length) throw new Error("weights remaing after extract: " + a().length);
            return {paramMappings: r, params: {fc: s}}
        }(t, this.getClassifierChannelsIn(), this.getClassifierChannelsOut())
    }, Jv.prototype.extractParamsFromWeigthMap = function (t) {
        var e = Xv(t), n = e.featureExtractorMap, r = e.classifierMap;
        return this.faceFeatureExtractor.loadFromWeightMap(n), function (t) {
            var e, n = [], r = Wv(t, n), o = {fc: (e = "fc", {weights: r(e + "/weights", 2), bias: r(e + "/bias", 1)})};
            return Fv(t, n), {params: o, paramMappings: n}
        }(r)
    }, Jv.prototype.extractParams = function (t) {
        var e = this.getClassifierChannelsIn(), n = this.getClassifierChannelsOut(), r = n * e + n,
            o = t.slice(0, t.length - r), i = t.slice(t.length - r);
        return this.faceFeatureExtractor.extractWeights(o), this.extractClassifierParams(i)
    }, Jv);

    function Jv(t, e) {
        var n = Yv.call(this, t) || this;
        return n._faceFeatureExtractor = e, n
    }

    var Qv = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"],
        Zv = (tm.prototype.asSortedArray = function () {
            var e = this;
            return Qv.map(function (t) {
                return {expression: t, probability: e[t]}
            }).sort(function (t, e) {
                return e.probability - t.probability
            })
        }, tm);

    function tm(n) {
        var r = this;
        if (7 !== n.length) throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: " + n.length);
        Qv.forEach(function (t, e) {
            r[t] = n[e]
        })
    }

    var em, nm = (Pp(rm, em = $v), rm.prototype.forwardInput = function (t) {
        var e = this;
        return nn(function () {
            return so(e.runNet(t))
        })
    }, rm.prototype.forward = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [2, e.apply(this, [t.sent()])]
                }
            })
        })
    }, rm.prototype.predictExpressions = function (a) {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, bv(a)];
                    case 1:
                        return e = t.sent(), [4, this.forwardInput(e)];
                    case 2:
                        return n = t.sent(), [4, Promise.all(Br(n).map(function (n) {
                            return Lp(i, void 0, void 0, function () {
                                var e;
                                return Wp(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, n.data()];
                                        case 1:
                                            return e = t.sent(), n.dispose(), [2, e]
                                    }
                                })
                            })
                        }))];
                    case 3:
                        return r = t.sent(), n.dispose(), o = r.map(function (t) {
                            return new Zv(t)
                        }), [2, e.isBatchInput ? o : o[0]]
                }
            })
        })
    }, rm.prototype.getDefaultModelName = function () {
        return "face_expression_model"
    }, rm.prototype.getClassifierChannelsIn = function () {
        return 256
    }, rm.prototype.getClassifierChannelsOut = function () {
        return 7
    }, rm);

    function rm(t) {
        return void 0 === t && (t = new qv), em.call(this, "FaceExpressionNet", t) || this
    }

    function om(t) {
        return t.expressions instanceof Zv
    }

    function im(t, e) {
        var n = {expressions: e};
        return Object.assign({}, t, n)
    }

    function am(t) {
        return Gd(t) && t.landmarks instanceof _d && t.unshiftedLandmarks instanceof _d && t.alignedRect instanceof pd
    }

    function sm(t, e) {
        var n = t.detection.box, r = e.shiftBy(n.x, n.y), o = r.align(), i = t.detection.imageDims, a = {
            landmarks: r,
            unshiftedLandmarks: e,
            alignedRect: new pd(t.detection.score, o.rescale(i.reverse()), i)
        };
        return Object.assign({}, t, a)
    }

    var um = function (t) {
        void 0 === t && (t = {});
        var e = t.drawLines, n = void 0 === e || e, r = t.drawPoints, o = void 0 === r || r, i = t.lineWidth,
            a = t.lineColor, s = t.pointSize, u = t.pointColor;
        this.drawLines = n, this.drawPoints = o, this.lineWidth = i || 1, this.pointSize = s || 2, this.lineColor = a || "rgba(0, 255, 255, 1)", this.pointColor = u || "rgba(255, 0, 255, 1)"
    }, cm = (lm.prototype.draw = function (t) {
        var e = nv(t), n = this.options, r = n.drawLines, o = n.drawPoints, i = n.lineWidth, a = n.lineColor,
            s = n.pointSize, u = n.pointColor;
        r && this.faceLandmarks instanceof Ad && (e.strokeStyle = a, e.lineWidth = i, Mp(e, this.faceLandmarks.getJawOutline()), Mp(e, this.faceLandmarks.getLeftEyeBrow()), Mp(e, this.faceLandmarks.getRightEyeBrow()), Mp(e, this.faceLandmarks.getNose()), Mp(e, this.faceLandmarks.getLeftEye(), !0), Mp(e, this.faceLandmarks.getRightEye(), !0), Mp(e, this.faceLandmarks.getMouth(), !0)), o && (e.strokeStyle = u, e.fillStyle = u, this.faceLandmarks.positions.forEach(function (t) {
            e.beginPath(), e.arc(t.x, t.y, s, 0, 2 * Math.PI), e.fill()
        }))
    }, lm);

    function lm(t, e) {
        void 0 === e && (e = {}), this.faceLandmarks = t, this.options = new um(e)
    }

    var hm = Object.freeze({
        __proto__: null,
        drawContour: Mp,
        drawDetections: function (o, t) {
            (Array.isArray(t) ? t : [t]).forEach(function (t) {
                var e = t instanceof pd ? t.score : Gd(t) ? t.detection.score : void 0,
                    n = t instanceof pd ? t.box : Gd(t) ? t.detection.box : new id(t), r = e ? "" + Yp(e) : void 0;
                new sv(n, {label: r}).draw(o)
            })
        },
        drawFaceExpressions: function (o, t, i, a) {
            void 0 === i && (i = .1), (Array.isArray(t) ? t : [t]).forEach(function (t) {
                var e = t instanceof Zv ? t : om(t) ? t.expressions : void 0;
                if (!e) throw new Error("drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof");
                var n = e.asSortedArray().filter(function (t) {
                    return t.probability > i
                }), r = Gd(t) ? t.detection.box.bottomLeft : a || new rd(0, 0);
                new ov(n.map(function (t) {
                    return t.expression + " (" + Yp(t.probability) + ")"
                }), r).draw(o)
            })
        },
        DrawBoxOptions: av,
        DrawBox: sv,
        DrawFaceLandmarksOptions: um,
        DrawFaceLandmarks: cm,
        drawFaceLandmarks: function (n, t) {
            (Array.isArray(t) ? t : [t]).forEach(function (t) {
                var e = t instanceof _d ? t : am(t) ? t.landmarks : void 0;
                if (!e) throw new Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");
                new cm(e).draw(n)
            })
        },
        get AnchorPosition() {
            return Qd
        },
        DrawTextFieldOptions: rv,
        DrawTextField: ov
    });

    function fm(t, e) {
        var n = [], r = zv(t), o = r.extractWeights, i = r.getRemainingWeights, a = function (t, e) {
                var r = Mv(t, e), o = Bv(t, e);
                return {
                    extractConvParams: r,
                    extractSeparableConvParams: o,
                    extractReductionBlockParams: function (t, e, n) {
                        return {
                            separable_conv0: o(t, e, n + "/separable_conv0"),
                            separable_conv1: o(e, e, n + "/separable_conv1"),
                            expansion_conv: r(t, e, 1, n + "/expansion_conv")
                        }
                    },
                    extractMainBlockParams: function (t, e) {
                        return {
                            separable_conv0: o(t, t, e + "/separable_conv0"),
                            separable_conv1: o(t, t, e + "/separable_conv1"),
                            separable_conv2: o(t, t, e + "/separable_conv2")
                        }
                    }
                }
            }(o, n), s = a.extractConvParams, u = a.extractSeparableConvParams, c = a.extractReductionBlockParams,
            l = a.extractMainBlockParams, h = {
                conv_in: s(3, 32, 3, "entry_flow/conv_in"),
                reduction_block_0: c(32, 64, "entry_flow/reduction_block_0"),
                reduction_block_1: c(64, 128, "entry_flow/reduction_block_1")
            }, f = {};
        Zp(e, 0, 1).forEach(function (t) {
            f["main_block_" + t] = l(128, "middle_flow/main_block_" + t)
        });
        var p = {
            reduction_block: c(128, 256, "exit_flow/reduction_block"),
            separable_conv: u(256, 512, "exit_flow/separable_conv")
        };
        if (0 !== i().length) throw new Error("weights remaing after extract: " + i().length);
        return {paramMappings: n, params: {entry_flow: h, middle_flow: f, exit_flow: p}}
    }

    function pm(t, e) {
        var n = [], r = function (t, e) {
                var n = Wv(t, e), r = Vv(n), o = Lv(n);
                return {
                    extractConvParams: r, extractSeparableConvParams: o, extractReductionBlockParams: function (t) {
                        return {
                            separable_conv0: o(t + "/separable_conv0"),
                            separable_conv1: o(t + "/separable_conv1"),
                            expansion_conv: r(t + "/expansion_conv")
                        }
                    }, extractMainBlockParams: function (t) {
                        return {
                            separable_conv0: o(t + "/separable_conv0"),
                            separable_conv1: o(t + "/separable_conv1"),
                            separable_conv2: o(t + "/separable_conv2")
                        }
                    }
                }
            }(t, n), o = r.extractConvParams, i = r.extractSeparableConvParams, a = r.extractReductionBlockParams,
            s = r.extractMainBlockParams, u = {
                conv_in: o("entry_flow/conv_in"),
                reduction_block_0: a("entry_flow/reduction_block_0"),
                reduction_block_1: a("entry_flow/reduction_block_1")
            }, c = {};
        Zp(e, 0, 1).forEach(function (t) {
            c["main_block_" + t] = s("middle_flow/main_block_" + t)
        });
        var l = {reduction_block: a("exit_flow/reduction_block"), separable_conv: i("exit_flow/separable_conv")};
        return Fv(t, n), {params: {entry_flow: u, middle_flow: c, exit_flow: l}, paramMappings: n}
    }

    function dm(t, e, n) {
        return Ou(Ec(t, e.filters, n, "same"), e.bias)
    }

    function vm(t, e, n) {
        void 0 === n && (n = !0);
        var r = n ? dl(t) : t;
        return r = Dv(r, e.separable_conv0, [1, 1]), r = Dv(dl(r), e.separable_conv1, [1, 1]), r = Gc(r, [3, 3], [2, 2], "same"), r = Ou(r, dm(t, e.expansion_conv, [2, 2]))
    }

    var mm, gm, ym = (Pp(xm, mm = kv), xm.prototype.forwardInput = function (n) {
        var r = this, o = this.params;
        if (!o) throw new Error("TinyXception - load model before inference");
        return nn(function () {
            var t = yd(n.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(kn(256)),
                e = dl(dm(t, o.entry_flow.conv_in, [2, 2]));
            return e = vm(e = vm(e, o.entry_flow.reduction_block_0, !1), o.entry_flow.reduction_block_1), Zp(r._numMainBlocks, 0, 1).forEach(function (t) {
                e = function (t, e) {
                    var n = Dv(dl(t), e.separable_conv0, [1, 1]);
                    return n = Dv(dl(n), e.separable_conv1, [1, 1]), n = Dv(dl(n), e.separable_conv2, [1, 1]), n = Ou(n, t)
                }(e, o.middle_flow["main_block_" + t])
            }), e = vm(e, o.exit_flow.reduction_block), e = dl(Dv(e, o.exit_flow.separable_conv, [1, 1]))
        })
    }, xm.prototype.forward = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [2, e.apply(this, [t.sent()])]
                }
            })
        })
    }, xm.prototype.getDefaultModelName = function () {
        return "tiny_xception_model"
    }, xm.prototype.extractParamsFromWeigthMap = function (t) {
        return pm(t, this._numMainBlocks)
    }, xm.prototype.extractParams = function (t) {
        return fm(t, this._numMainBlocks)
    }, xm);

    function xm(t) {
        var e = mm.call(this, "TinyXception") || this;
        return e._numMainBlocks = t, e
    }

    (gm = c.Gender || (c.Gender = {})).FEMALE = "female", gm.MALE = "male";
    var bm, wm = (Pp(Cm, bm = kv), Object.defineProperty(Cm.prototype, "faceFeatureExtractor", {
        get: function () {
            return this._faceFeatureExtractor
        }, enumerable: !0, configurable: !0
    }), Cm.prototype.runNet = function (n) {
        var r = this, o = this.params;
        if (!o) throw new Error(this._name + " - load model before inference");
        return nn(function () {
            var t = n instanceof yv ? r.faceFeatureExtractor.forwardInput(n) : n,
                e = Hc(t, [7, 7], [2, 2], "valid").as2D(t.shape[0], -1);
            return {age: Kv(e, o.fc.age).as1D(), gender: Kv(e, o.fc.gender)}
        })
    }, Cm.prototype.forwardInput = function (r) {
        var o = this;
        return nn(function () {
            var t = o.runNet(r), e = t.age, n = t.gender;
            return {age: e, gender: so(n)}
        })
    }, Cm.prototype.forward = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [2, e.apply(this, [t.sent()])]
                }
            })
        })
    }, Cm.prototype.predictAgeAndGender = function (s) {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i, a, u = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, bv(s)];
                    case 1:
                        return e = t.sent(), [4, this.forwardInput(e)];
                    case 2:
                        return n = t.sent(), r = Br(n.age), o = Br(n.gender), i = r.map(function (t, e) {
                            return {ageTensor: t, genderTensor: o[e]}
                        }), [4, Promise.all(i.map(function (t) {
                            var a = t.ageTensor, s = t.genderTensor;
                            return Lp(u, void 0, void 0, function () {
                                var e, n, r, o, i;
                                return Wp(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, a.data()];
                                        case 1:
                                            return e = t.sent()[0], [4, s.data()];
                                        case 2:
                                            return n = t.sent()[0], o = (r = .5 < n) ? c.Gender.MALE : c.Gender.FEMALE, i = r ? n : 1 - n, a.dispose(), s.dispose(), [2, {
                                                age: e,
                                                gender: o,
                                                genderProbability: i
                                            }]
                                    }
                                })
                            })
                        }))];
                    case 3:
                        return a = t.sent(), n.age.dispose(), n.gender.dispose(), [2, e.isBatchInput ? a : a[0]]
                }
            })
        })
    }, Cm.prototype.getDefaultModelName = function () {
        return "age_gender_model"
    }, Cm.prototype.dispose = function (t) {
        void 0 === t && (t = !0), this.faceFeatureExtractor.dispose(t), bm.prototype.dispose.call(this, t)
    }, Cm.prototype.loadClassifierParams = function (t) {
        var e = this.extractClassifierParams(t), n = e.params, r = e.paramMappings;
        this._params = n, this._paramMappings = r
    }, Cm.prototype.extractClassifierParams = function (t) {
        return function (t) {
            var e = [], n = zv(t), r = n.extractWeights, o = n.getRemainingWeights, i = Ov(r, e),
                a = i(512, 1, "fc/age"), s = i(512, 2, "fc/gender");
            if (0 !== o().length) throw new Error("weights remaing after extract: " + o().length);
            return {paramMappings: e, params: {fc: {age: a, gender: s}}}
        }(t)
    }, Cm.prototype.extractParamsFromWeigthMap = function (t) {
        var e = Xv(t), n = e.featureExtractorMap, r = e.classifierMap;
        return this.faceFeatureExtractor.loadFromWeightMap(n), function (t) {
            var e = [], n = Wv(t, e);

            function r(t) {
                return {weights: n(t + "/weights", 2), bias: n(t + "/bias", 1)}
            }

            var o = {fc: {age: r("fc/age"), gender: r("fc/gender")}};
            return Fv(t, e), {params: o, paramMappings: e}
        }(r)
    }, Cm.prototype.extractParams = function (t) {
        var e = t.slice(0, t.length - 1539), n = t.slice(t.length - 1539);
        return this.faceFeatureExtractor.extractWeights(e), this.extractClassifierParams(n)
    }, Cm);

    function Cm(t) {
        void 0 === t && (t = new ym(2));
        var e = bm.call(this, "AgeGenderNet") || this;
        return e._faceFeatureExtractor = t, e
    }

    var Em, _m = (Pp(Im, Em = $v), Im.prototype.postProcess = function (t, o, e) {
        var i = e.map(function (t) {
            var e = t.width, n = t.height, r = o / Math.max(n, e);
            return {width: e * r, height: n * r}
        }), a = i.length;
        return nn(function () {
            function n(t, e) {
                return Mr([Bn([68], t), Bn([68], e)], 1).as2D(1, 136).as1D()
            }

            function r(t, e) {
                var n = i[t], r = n.width, o = n.height;
                return e(r, o) ? Math.abs(r - o) / 2 : 0
            }

            return t.mul(Bn([a, 136], o)).sub(Mr(Array.from(Array(a), function (t, e) {
                return n(function (t) {
                    return r(t, function (t, e) {
                        return t < e
                    })
                }(e), function (t) {
                    return r(t, function (t, e) {
                        return e < t
                    })
                }(e))
            }))).div(Mr(Array.from(Array(a), function (t, e) {
                return n(i[e].width, i[e].height)
            })))
        })
    }, Im.prototype.forwardInput = function (e) {
        var n = this;
        return nn(function () {
            var t = n.runNet(e);
            return n.postProcess(t, e.inputSize, e.inputDimensions.map(function (t) {
                return {height: t[0], width: t[1]}
            }))
        })
    }, Im.prototype.forward = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [2, e.apply(this, [t.sent()])]
                }
            })
        })
    }, Im.prototype.detectLandmarks = function (o) {
        return Lp(this, void 0, void 0, function () {
            var u, e, n, r = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, bv(o)];
                    case 1:
                        return u = t.sent(), e = nn(function () {
                            return Br(r.forwardInput(u))
                        }), [4, Promise.all(e.map(function (a, s) {
                            return Lp(r, void 0, void 0, function () {
                                var e, n, r, o, i;
                                return Wp(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return r = (n = Array).from, [4, a.data()];
                                        case 1:
                                            return e = r.apply(n, [t.sent()]), o = e.filter(function (t, e) {
                                                return Xp(e)
                                            }), i = e.filter(function (t, e) {
                                                return !Xp(e)
                                            }), [2, new Ad(Array(68).fill(0).map(function (t, e) {
                                                return new rd(o[e], i[e])
                                            }), {height: u.getInputHeight(s), width: u.getInputWidth(s)})]
                                    }
                                })
                            })
                        }))];
                    case 2:
                        return n = t.sent(), e.forEach(function (t) {
                            return t.dispose()
                        }), [2, u.isBatchInput ? n : n[0]]
                }
            })
        })
    }, Im.prototype.getClassifierChannelsOut = function () {
        return 136
    }, Im);

    function Im() {
        return null !== Em && Em.apply(this, arguments) || this
    }

    var Rm, km = (Pp(Sm, Rm = _m), Sm.prototype.getDefaultModelName = function () {
        return "face_landmark_68_model"
    }, Sm.prototype.getClassifierChannelsIn = function () {
        return 256
    }, Sm);

    function Sm(t) {
        return void 0 === t && (t = new qv), Rm.call(this, "FaceLandmark68Net", t) || this
    }

    var Dm, Am = (Pp(Tm, Dm = kv), Tm.prototype.forwardInput = function (e) {
        var n = this.params;
        if (!n) throw new Error("TinyFaceFeatureExtractor - load model before inference");
        return nn(function () {
            var t = Av(yd(e.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(kn(255)), n.dense0, !0);
            return t = Av(t = Av(t, n.dense1), n.dense2), t = Hc(t, [14, 14], [2, 2], "valid")
        })
    }, Tm.prototype.forward = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [2, e.apply(this, [t.sent()])]
                }
            })
        })
    }, Tm.prototype.getDefaultModelName = function () {
        return "face_feature_extractor_tiny_model"
    }, Tm.prototype.extractParamsFromWeigthMap = function (t) {
        return function (t) {
            var e = [], n = Gv(t, e).extractDenseBlock3Params,
                r = {dense0: n("dense0", !0), dense1: n("dense1"), dense2: n("dense2")};
            return Fv(t, e), {params: r, paramMappings: e}
        }(t)
    }, Tm.prototype.extractParams = function (t) {
        return function (t) {
            var e = [], n = zv(t), r = n.extractWeights, o = n.getRemainingWeights,
                i = Uv(r, e).extractDenseBlock3Params, a = i(3, 32, "dense0", !0), s = i(32, 64, "dense1"),
                u = i(64, 128, "dense2");
            if (0 !== o().length) throw new Error("weights remaing after extract: " + o().length);
            return {paramMappings: e, params: {dense0: a, dense1: s, dense2: u}}
        }(t)
    }, Tm);

    function Tm() {
        return Dm.call(this, "TinyFaceFeatureExtractor") || this
    }

    var Nm, Fm = (Pp(Mm, Nm = _m), Mm.prototype.getDefaultModelName = function () {
        return "face_landmark_68_tiny_model"
    }, Mm.prototype.getClassifierChannelsIn = function () {
        return 128
    }, Mm);

    function Mm(t) {
        return void 0 === t && (t = new Am), Nm.call(this, "FaceLandmark68TinyNet", t) || this
    }

    var Om, Pm = (Pp(Bm, Om = km), Bm);

    function Bm() {
        return null !== Om && Om.apply(this, arguments) || this
    }

    function Lm(t, e, n, r, o) {
        void 0 === o && (o = "same");
        var i = e.conv, a = i.filters, s = i.bias, u = Ec(t, a, n, o);
        return u = function (t, e) {
            return Ou(Yu(t, e.weights), e.biases)
        }(u = Ou(u, s), e.scale), r ? dl(u) : u
    }

    function Wm(t, e) {
        return Lm(t, e, [1, 1], !1)
    }

    function zm(t, e) {
        return Lm(t, e, [2, 2], !0, "valid")
    }

    function Um(a, s) {
        function o(t, e, n, r) {
            var o = function (t, e, n) {
                var r = a(t), o = r.length / (e * n * n);
                if (Kp(o)) throw new Error("depth has to be an integer: " + o + ", weights.length: " + r.length + ", numFilters: " + e + ", filterSize: " + n);
                return nn(function () {
                    return gl(Tn(r, [e, o, n, n]), [2, 3, 1, 0])
                })
            }(t, e, n), i = Sn(a(e));
            return s.push({paramPath: r + "/filters"}, {paramPath: r + "/bias"}), {filters: o, bias: i}
        }

        function i(t, e, n, r) {
            return {
                conv: o(t, e, n, r + "/conv"), scale: function (t, e) {
                    var n = Sn(a(t)), r = Sn(a(t));
                    return s.push({paramPath: e + "/weights"}, {paramPath: e + "/biases"}), {weights: n, biases: r}
                }(e, r + "/scale")
            }
        }

        return {
            extractConvLayerParams: i, extractResidualLayerParams: function (t, e, n, r, o) {
                return void 0 === o && (o = !1), {
                    conv1: i((o ? .5 : 1) * t, e, n, r + "/conv1"),
                    conv2: i(t, e, n, r + "/conv2")
                }
            }
        }
    }

    function Vm(t, e) {
        var n = Wv(t, e);

        function r(t) {
            return {
                conv: {filters: n(t + "/conv/filters", 4), bias: n(t + "/conv/bias", 1)}, scale: function (t) {
                    return {weights: n(t + "/scale/weights", 1), biases: n(t + "/scale/biases", 1)}
                }(t)
            }
        }

        return {
            extractConvLayerParams: r, extractResidualLayerParams: function (t) {
                return {conv1: r(t + "/conv1"), conv2: r(t + "/conv2")}
            }
        }
    }

    function Gm(t, e) {
        var n = function (t, e) {
            return Lm(t, e, [1, 1], !0)
        }(t, e.conv1);
        return n = Wm(n, e.conv2), n = Ou(n, t), n = dl(n)
    }

    function Hm(t, e) {
        var n = zm(t, e.conv1);
        n = Wm(n, e.conv2);
        var r = Hc(t, 2, 2, "valid"), o = Pn(r.shape), i = r.shape[3] !== n.shape[3];
        if (r.shape[1] !== n.shape[1] || r.shape[2] !== n.shape[2]) {
            var a = zp(n.shape);
            a[1] = 1;
            var s = Pn(a), u = zp((n = Vn([n, s], 1)).shape);
            u[2] = 1;
            var c = Pn(u);
            n = Vn([n, c], 2)
        }
        return r = i ? Vn([r, o], 3) : r, n = Ou(r, n), n = dl(n)
    }

    var qm, jm = (Pp(Km, qm = kv), Km.prototype.forwardInput = function (n) {
        var r = this.params;
        if (!r) throw new Error("FaceRecognitionNet - load model before inference");
        return nn(function () {
            var t = zm(yd(n.toBatchTensor(150, !0).toFloat(), [122.782, 117.001, 104.298]).div(kn(256)), r.conv32_down),
                e = (t = Hm(t = Gm(t = Gm(t = Hm(t = Gm(t = Gm(t = Hm(t = Gm(t = Gm(t = Gm(t = Hm(t = Gm(t = Gm(t = Gm(t = Gc(t, 3, 2, "valid"), r.conv32_1), r.conv32_2), r.conv32_3), r.conv64_down), r.conv64_1), r.conv64_2), r.conv64_3), r.conv128_down), r.conv128_1), r.conv128_2), r.conv256_down), r.conv256_1), r.conv256_2), r.conv256_down_out)).mean([1, 2]);
            return Fc(e, r.fc)
        })
    }, Km.prototype.forward = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [2, e.apply(this, [t.sent()])]
                }
            })
        })
    }, Km.prototype.computeFaceDescriptor = function (i) {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, bv(i)];
                    case 1:
                        return e = t.sent(), n = nn(function () {
                            return Br(o.forwardInput(e))
                        }), [4, Promise.all(n.map(function (t) {
                            return t.data()
                        }))];
                    case 2:
                        return r = t.sent(), n.forEach(function (t) {
                            return t.dispose()
                        }), [2, e.isBatchInput ? r : r[0]]
                }
            })
        })
    }, Km.prototype.getDefaultModelName = function () {
        return "face_recognition_model"
    }, Km.prototype.extractParamsFromWeigthMap = function (t) {
        return function (t) {
            var e = [], n = Vm(t, e), r = n.extractConvLayerParams, o = n.extractResidualLayerParams,
                i = r("conv32_down"), a = o("conv32_1"), s = o("conv32_2"), u = o("conv32_3"), c = o("conv64_down"),
                l = o("conv64_1"), h = o("conv64_2"), f = o("conv64_3"), p = o("conv128_down"), d = o("conv128_1"),
                v = o("conv128_2"), m = o("conv256_down"), g = o("conv256_1"), y = o("conv256_2"),
                x = o("conv256_down_out"), b = t.fc;
            if (e.push({
                originalPath: "fc",
                paramPath: "fc"
            }), !Hp(b)) throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + b);
            var w = {
                conv32_down: i,
                conv32_1: a,
                conv32_2: s,
                conv32_3: u,
                conv64_down: c,
                conv64_1: l,
                conv64_2: h,
                conv64_3: f,
                conv128_down: p,
                conv128_1: d,
                conv128_2: v,
                conv256_down: m,
                conv256_1: g,
                conv256_2: y,
                conv256_down_out: x,
                fc: b
            };
            return Fv(t, e), {params: w, paramMappings: e}
        }(t)
    }, Km.prototype.extractParams = function (t) {
        return function (t) {
            var e = zv(t), n = e.extractWeights, r = e.getRemainingWeights, o = [], i = Um(n, o),
                a = i.extractConvLayerParams, s = i.extractResidualLayerParams, u = a(4704, 32, 7, "conv32_down"),
                c = s(9216, 32, 3, "conv32_1"), l = s(9216, 32, 3, "conv32_2"), h = s(9216, 32, 3, "conv32_3"),
                f = s(36864, 64, 3, "conv64_down", !0), p = s(36864, 64, 3, "conv64_1"),
                d = s(36864, 64, 3, "conv64_2"), v = s(36864, 64, 3, "conv64_3"),
                m = s(147456, 128, 3, "conv128_down", !0), g = s(147456, 128, 3, "conv128_1"),
                y = s(147456, 128, 3, "conv128_2"), x = s(589824, 256, 3, "conv256_down", !0),
                b = s(589824, 256, 3, "conv256_1"), w = s(589824, 256, 3, "conv256_2"),
                C = s(589824, 256, 3, "conv256_down_out"), E = nn(function () {
                    return gl(Dn(n(32768), [128, 256]), [1, 0])
                });
            if (o.push({paramPath: "fc"}), 0 !== r().length) throw new Error("weights remaing after extract: " + r().length);
            return {
                params: {
                    conv32_down: u,
                    conv32_1: c,
                    conv32_2: l,
                    conv32_3: h,
                    conv64_down: f,
                    conv64_1: p,
                    conv64_2: d,
                    conv64_3: v,
                    conv128_down: m,
                    conv128_1: g,
                    conv128_2: y,
                    conv256_down: x,
                    conv256_1: b,
                    conv256_2: w,
                    conv256_down_out: C,
                    fc: E
                }, paramMappings: o
            }
        }(t)
    }, Km);

    function Km() {
        return qm.call(this, "FaceRecognitionNet") || this
    }

    function Xm(t, e) {
        var n = {descriptor: e};
        return Object.assign({}, t, n)
    }

    function Ym(t, e) {
        var n = {age: e};
        return Object.assign({}, t, n)
    }

    function $m(t, e, n) {
        var r = {gender: e, genderProbability: n};
        return Object.assign({}, t, r)
    }

    var Jm = (Object.defineProperty(Qm.prototype, "minFaceSize", {
        get: function () {
            return this._minFaceSize
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Qm.prototype, "scaleFactor", {
        get: function () {
            return this._scaleFactor
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Qm.prototype, "maxNumScales", {
        get: function () {
            return this._maxNumScales
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Qm.prototype, "scoreThresholds", {
        get: function () {
            return this._scoreThresholds
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Qm.prototype, "scaleSteps", {
        get: function () {
            return this._scaleSteps
        }, enumerable: !0, configurable: !0
    }), Qm);

    function Qm(t) {
        var e = void 0 === t ? {} : t, n = e.minFaceSize, r = e.scaleFactor, o = e.maxNumScales, i = e.scoreThresholds,
            a = e.scaleSteps;
        if (this._name = "MtcnnOptions", this._minFaceSize = n || 20, this._scaleFactor = r || .709, this._maxNumScales = o || 10, this._scoreThresholds = i || [.6, .7, .7], this._scaleSteps = a, "number" != typeof this._minFaceSize || this._minFaceSize < 0) throw new Error(this._name + " - expected minFaceSize to be a number > 0");
        if ("number" != typeof this._scaleFactor || this._scaleFactor <= 0 || 1 <= this._scaleFactor) throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
        if ("number" != typeof this._maxNumScales || this._maxNumScales < 0) throw new Error(this._name + " - expected maxNumScales to be a number > 0");
        if (!Array.isArray(this._scoreThresholds) || 3 !== this._scoreThresholds.length || this._scoreThresholds.some(function (t) {
            return "number" != typeof t
        })) throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
        if (this._scaleSteps && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function (t) {
            return "number" != typeof t
        }))) throw new Error(this._name + " - expected scaleSteps to be an array of numbers")
    }

    function Zm(s, u) {
        function i(t, e, n, r, o) {
            var i = Tn(s(t * e * n * n), [n, n, t, e]), a = Sn(s(e));
            return u.push({paramPath: r + "/filters"}, {paramPath: r + "/" + (o ? "batch_norm_offset" : "bias")}), {
                filters: i,
                bias: a
            }
        }

        function r(t, e, n, r) {
            var o = i(t, e, n, r, !0);
            return {filters: o.filters, batch_norm_offset: o.bias}
        }

        function t(t, e, n) {
            return {
                depthwise_conv: function (t, e) {
                    var n = Tn(s(9 * t), [3, 3, t, 1]), r = Sn(s(t)), o = Sn(s(t)), i = Sn(s(t)), a = Sn(s(t));
                    return u.push({paramPath: e + "/filters"}, {paramPath: e + "/batch_norm_scale"}, {paramPath: e + "/batch_norm_offset"}, {paramPath: e + "/batch_norm_mean"}, {paramPath: e + "/batch_norm_variance"}), {
                        filters: n,
                        batch_norm_scale: r,
                        batch_norm_offset: o,
                        batch_norm_mean: i,
                        batch_norm_variance: a
                    }
                }(t, n + "/depthwise_conv"), pointwise_conv: r(t, e, 1, n + "/pointwise_conv")
            }
        }

        return {
            extractMobilenetV1Params: function () {
                return {
                    conv_0: r(3, 32, 3, "mobilenetv1/conv_0"),
                    conv_1: t(32, 64, "mobilenetv1/conv_1"),
                    conv_2: t(64, 128, "mobilenetv1/conv_2"),
                    conv_3: t(128, 128, "mobilenetv1/conv_3"),
                    conv_4: t(128, 256, "mobilenetv1/conv_4"),
                    conv_5: t(256, 256, "mobilenetv1/conv_5"),
                    conv_6: t(256, 512, "mobilenetv1/conv_6"),
                    conv_7: t(512, 512, "mobilenetv1/conv_7"),
                    conv_8: t(512, 512, "mobilenetv1/conv_8"),
                    conv_9: t(512, 512, "mobilenetv1/conv_9"),
                    conv_10: t(512, 512, "mobilenetv1/conv_10"),
                    conv_11: t(512, 512, "mobilenetv1/conv_11"),
                    conv_12: t(512, 1024, "mobilenetv1/conv_12"),
                    conv_13: t(1024, 1024, "mobilenetv1/conv_13")
                }
            }, extractPredictionLayerParams: function () {
                return {
                    conv_0: r(1024, 256, 1, "prediction_layer/conv_0"),
                    conv_1: r(256, 512, 3, "prediction_layer/conv_1"),
                    conv_2: r(512, 128, 1, "prediction_layer/conv_2"),
                    conv_3: r(128, 256, 3, "prediction_layer/conv_3"),
                    conv_4: r(256, 128, 1, "prediction_layer/conv_4"),
                    conv_5: r(128, 256, 3, "prediction_layer/conv_5"),
                    conv_6: r(256, 64, 1, "prediction_layer/conv_6"),
                    conv_7: r(64, 128, 3, "prediction_layer/conv_7"),
                    box_predictor_0: {
                        box_encoding_predictor: i(512, 12, 1, "prediction_layer/box_predictor_0/box_encoding_predictor"),
                        class_predictor: i(512, 9, 1, "prediction_layer/box_predictor_0/class_predictor")
                    },
                    box_predictor_1: {
                        box_encoding_predictor: i(1024, 24, 1, "prediction_layer/box_predictor_1/box_encoding_predictor"),
                        class_predictor: i(1024, 18, 1, "prediction_layer/box_predictor_1/class_predictor")
                    },
                    box_predictor_2: {
                        box_encoding_predictor: i(512, 24, 1, "prediction_layer/box_predictor_2/box_encoding_predictor"),
                        class_predictor: i(512, 18, 1, "prediction_layer/box_predictor_2/class_predictor")
                    },
                    box_predictor_3: {
                        box_encoding_predictor: i(256, 24, 1, "prediction_layer/box_predictor_3/box_encoding_predictor"),
                        class_predictor: i(256, 18, 1, "prediction_layer/box_predictor_3/class_predictor")
                    },
                    box_predictor_4: {
                        box_encoding_predictor: i(256, 24, 1, "prediction_layer/box_predictor_4/box_encoding_predictor"),
                        class_predictor: i(256, 18, 1, "prediction_layer/box_predictor_4/class_predictor")
                    },
                    box_predictor_5: {
                        box_encoding_predictor: i(128, 24, 1, "prediction_layer/box_predictor_5/box_encoding_predictor"),
                        class_predictor: i(128, 18, 1, "prediction_layer/box_predictor_5/class_predictor")
                    }
                }
            }
        }
    }

    function tg(t) {
        var e = [], n = function (t, e) {
            var i = Wv(t, e);

            function a(t, e, n) {
                return {
                    filters: i(t + "/Conv2d_" + e + "_pointwise/weights", 4, n + "/filters"),
                    batch_norm_offset: i(t + "/Conv2d_" + e + "_pointwise/convolution_bn_offset", 1, n + "/batch_norm_offset")
                }
            }

            function n(t) {
                var e = "mobilenetv1/conv_" + t, n = "MobilenetV1/Conv2d_" + t + "_depthwise",
                    r = e + "/depthwise_conv", o = e + "/pointwise_conv";
                return {
                    depthwise_conv: {
                        filters: i(n + "/depthwise_weights", 4, r + "/filters"),
                        batch_norm_scale: i(n + "/BatchNorm/gamma", 1, r + "/batch_norm_scale"),
                        batch_norm_offset: i(n + "/BatchNorm/beta", 1, r + "/batch_norm_offset"),
                        batch_norm_mean: i(n + "/BatchNorm/moving_mean", 1, r + "/batch_norm_mean"),
                        batch_norm_variance: i(n + "/BatchNorm/moving_variance", 1, r + "/batch_norm_variance")
                    }, pointwise_conv: a("MobilenetV1", t, o)
                }
            }

            function r(t, e) {
                return {filters: i(t + "/weights", 4, e + "/filters"), bias: i(t + "/biases", 1, e + "/bias")}
            }

            function o(t) {
                return {
                    box_encoding_predictor: r("Prediction/BoxPredictor_" + t + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + t + "/box_encoding_predictor"),
                    class_predictor: r("Prediction/BoxPredictor_" + t + "/ClassPredictor", "prediction_layer/box_predictor_" + t + "/class_predictor")
                }
            }

            return {
                extractMobilenetV1Params: function () {
                    return {
                        conv_0: a("MobilenetV1", 0, "mobilenetv1/conv_0"),
                        conv_1: n(1),
                        conv_2: n(2),
                        conv_3: n(3),
                        conv_4: n(4),
                        conv_5: n(5),
                        conv_6: n(6),
                        conv_7: n(7),
                        conv_8: n(8),
                        conv_9: n(9),
                        conv_10: n(10),
                        conv_11: n(11),
                        conv_12: n(12),
                        conv_13: n(13)
                    }
                }, extractPredictionLayerParams: function () {
                    return {
                        conv_0: a("Prediction", 0, "prediction_layer/conv_0"),
                        conv_1: a("Prediction", 1, "prediction_layer/conv_1"),
                        conv_2: a("Prediction", 2, "prediction_layer/conv_2"),
                        conv_3: a("Prediction", 3, "prediction_layer/conv_3"),
                        conv_4: a("Prediction", 4, "prediction_layer/conv_4"),
                        conv_5: a("Prediction", 5, "prediction_layer/conv_5"),
                        conv_6: a("Prediction", 6, "prediction_layer/conv_6"),
                        conv_7: a("Prediction", 7, "prediction_layer/conv_7"),
                        box_predictor_0: o(0),
                        box_predictor_1: o(1),
                        box_predictor_2: o(2),
                        box_predictor_3: o(3),
                        box_predictor_4: o(4),
                        box_predictor_5: o(5)
                    }
                }
            }
        }(t, e), r = n.extractMobilenetV1Params, o = n.extractPredictionLayerParams, i = t["Output/extra_dim"];
        if (e.push({
            originalPath: "Output/extra_dim",
            paramPath: "output_layer/extra_dim"
        }), !qp(i)) throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + i);
        var a = {mobilenetv1: r(), prediction_layer: o(), output_layer: {extra_dim: i}};
        return Fv(t, e), {params: a, paramMappings: e}
    }

    function eg(e, n, r) {
        return nn(function () {
            var t = Ec(e, n.filters, r, "same");
            return t = Ou(t, n.batch_norm_offset), Gs(t, 0, 6)
        })
    }

    var ng = .0010000000474974513;

    function rg(t, e) {
        return nn(function () {
            var o = null, i = eg(t, e.conv_0, [2, 2]);
            if ([e.conv_1, e.conv_2, e.conv_3, e.conv_4, e.conv_5, e.conv_6, e.conv_7, e.conv_8, e.conv_9, e.conv_10, e.conv_11, e.conv_12, e.conv_13].forEach(function (t, e) {
                var n = e + 1, r = function (e) {
                    return [2, 4, 6, 12].some(function (t) {
                        return t === e
                    }) ? [2, 2] : [1, 1]
                }(n);
                i = eg(i = function (e, n, r) {
                    return nn(function () {
                        var t = kc(e, n.filters, r, "same");
                        return t = Ru(t, n.batch_norm_mean, n.batch_norm_variance, n.batch_norm_offset, n.batch_norm_scale, ng), Gs(t, 0, 6)
                    })
                }(i, t.depthwise_conv, r), t.pointwise_conv, [1, 1]), 11 === n && (o = i)
            }), null === o) throw new Error("mobileNetV1 - output of conv layer 11 is null");
            return {out: i, conv11: o}
        })
    }

    function og(t, e, n) {
        var r = t.arraySync(), o = Math.min(r[e][0], r[e][2]), i = Math.min(r[e][1], r[e][3]),
            a = Math.max(r[e][0], r[e][2]), s = Math.max(r[e][1], r[e][3]), u = Math.min(r[n][0], r[n][2]),
            c = Math.min(r[n][1], r[n][3]), l = Math.max(r[n][0], r[n][2]), h = Math.max(r[n][1], r[n][3]),
            f = (a - o) * (s - i), p = (l - u) * (h - c);
        if (f <= 0 || p <= 0) return 0;
        var d = Math.max(o, u), v = Math.max(i, c), m = Math.min(a, l), g = Math.min(s, h),
            y = Math.max(m - d, 0) * Math.max(g - v, 0);
        return y / (f + p - y)
    }

    function ig(t, e) {
        var n = function (t) {
                var e = Br(gl(t, [1, 0])), n = [tc(e[2], e[0]), tc(e[3], e[1])];
                return {sizes: n, centers: [Ou(e[0], Wu(n[0], kn(2))), Ou(e[1], Wu(n[1], kn(2)))]}
            }(t), r = n.sizes, o = n.centers, i = Br(gl(e, [1, 0])), a = Wu(Yu(Ks(Wu(i[2], kn(5))), r[0]), kn(2)),
            s = Ou(Yu(Wu(i[0], kn(10)), r[0]), o[0]), u = Wu(Yu(Ks(Wu(i[3], kn(5))), r[1]), kn(2)),
            c = Ou(Yu(Wu(i[1], kn(10)), r[1]), o[1]);
        return gl(Mr([tc(s, a), tc(c, u), Ou(s, a), Ou(c, u)]), [1, 0])
    }

    function ag(e, n) {
        return nn(function () {
            var t = e.shape[0];
            return {
                boxPredictionEncoding: Tr(Nv(e, n.box_encoding_predictor), [t, -1, 1, 4]),
                classPrediction: Tr(Nv(e, n.class_predictor), [t, -1, 3])
            }
        })
    }

    var sg = (Object.defineProperty(ug.prototype, "minConfidence", {
        get: function () {
            return this._minConfidence
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(ug.prototype, "maxResults", {
        get: function () {
            return this._maxResults
        }, enumerable: !0, configurable: !0
    }), ug);

    function ug(t) {
        var e = void 0 === t ? {} : t, n = e.minConfidence, r = e.maxResults;
        if (this._name = "SsdMobilenetv1Options", this._minConfidence = n || .5, this._maxResults = r || 100, "number" != typeof this._minConfidence || this._minConfidence <= 0 || 1 <= this._minConfidence) throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
        if ("number" != typeof this._maxResults) throw new Error(this._name + " - expected maxResults to be a number")
    }

    var cg, lg = (Pp(hg, cg = kv), hg.prototype.forwardInput = function (r) {
        var o = this.params;
        if (!o) throw new Error("SsdMobilenetv1 - load model before inference");
        return nn(function () {
            var t = r.toBatchTensor(512, !1).toFloat(),
                e = rg(tc(Yu(t, kn(.007843137718737125)), kn(1)), o.mobilenetv1), n = function (l, h, f) {
                    return nn(function () {
                        var t = eg(eg(l, f.conv_0, [1, 1]), f.conv_1, [2, 2]),
                            e = eg(eg(t, f.conv_2, [1, 1]), f.conv_3, [2, 2]),
                            n = eg(eg(e, f.conv_4, [1, 1]), f.conv_5, [2, 2]),
                            r = eg(eg(n, f.conv_6, [1, 1]), f.conv_7, [2, 2]), o = ag(h, f.box_predictor_0),
                            i = ag(l, f.box_predictor_1), a = ag(t, f.box_predictor_2), s = ag(e, f.box_predictor_3),
                            u = ag(n, f.box_predictor_4), c = ag(r, f.box_predictor_5);
                        return {
                            boxPredictions: Vn([o.boxPredictionEncoding, i.boxPredictionEncoding, a.boxPredictionEncoding, s.boxPredictionEncoding, u.boxPredictionEncoding, c.boxPredictionEncoding], 1),
                            classPredictions: Vn([o.classPrediction, i.classPrediction, a.classPrediction, s.classPrediction, u.classPrediction, c.classPrediction], 1)
                        }
                    })
                }(e.out, e.conv11, o.prediction_layer);
            return function (o, i, a) {
                return nn(function () {
                    var t = o.shape[0], e = ig(Tr(Or(a.extra_dim, [t, 1, 1]), [-1, 4]), Tr(o, [-1, 4]));
                    e = Tr(e, [t, e.shape[0] / t, 4]);
                    var n = ru(Xc(i, [0, 0, 1], [-1, -1, -1])), r = Xc(n, [0, 0, 0], [-1, -1, 1]);
                    return r = Tr(r, [t, r.shape[1]]), {boxes: Br(e), scores: Br(r)}
                })
            }(n.boxPredictions, n.classPredictions, o.output_layer)
        })
    }, hg.prototype.forward = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [2, e.apply(this, [t.sent()])]
                }
            })
        })
    }, hg.prototype.locateFaces = function (w, C) {
        return void 0 === C && (C = {}), Lp(this, void 0, void 0, function () {
            var e, n, r, s, o, i, a, u, c, l, h, f, p, d, v, m, g, y, x, b;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = new sg(C), n = e.maxResults, r = e.minConfidence, [4, bv(w)];
                    case 1:
                        for (s = t.sent(), o = this.forwardInput(s), i = o.boxes, a = o.scores, u = i[0], c = a[0], l = 1; l < i.length; l++) i[l].dispose(), a[l].dispose();
                        return p = (f = Array).from, [4, c.data()];
                    case 2:
                        return h = p.apply(f, [t.sent()]), d = function (o, t, e, i, a) {
                            var n = o.shape[0], s = Math.min(e, n), r = t.map(function (t, e) {
                                return {score: t, boxIndex: e}
                            }).filter(function (t) {
                                return t.score > a
                            }).sort(function (t, e) {
                                return e.score - t.score
                            }), u = [];
                            return r.forEach(function (t) {
                                if (!(u.length >= s)) {
                                    for (var e = t.score, n = u.length - 1; 0 <= n; --n) {
                                        var r = og(o, t.boxIndex, u[n]);
                                        if (0 !== r && (t.score *= r <= i ? 1 : 0, t.score <= a)) break
                                    }
                                    e === t.score && u.push(t.boxIndex)
                                }
                            }), u
                        }(u, h, n, .5, r), v = s.getReshapedInputDimensions(0), m = s.inputSize, g = m / v.width, y = m / v.height, x = u.arraySync(), b = d.map(function (t) {
                            var e = [Math.max(0, x[t][0]), Math.min(1, x[t][2])].map(function (t) {
                                return t * y
                            }), n = e[0], r = e[1], o = [Math.max(0, x[t][1]), Math.min(1, x[t][3])].map(function (t) {
                                return t * g
                            }), i = o[0], a = o[1];
                            return new pd(h[t], new Cd(i, n, a - i, r - n), {
                                height: s.getInputHeight(0),
                                width: s.getInputWidth(0)
                            })
                        }), u.dispose(), c.dispose(), [2, b]
                }
            })
        })
    }, hg.prototype.getDefaultModelName = function () {
        return "ssd_mobilenetv1_model"
    }, hg.prototype.extractParamsFromWeigthMap = function (t) {
        return tg(t)
    }, hg.prototype.extractParams = function (t) {
        return function (t) {
            var e = [], n = zv(t), r = n.extractWeights, o = n.getRemainingWeights, i = Zm(r, e),
                a = i.extractMobilenetV1Params, s = i.extractPredictionLayerParams, u = a(), c = s(),
                l = {extra_dim: An(r(20472), [1, 5118, 4])};
            if (e.push({paramPath: "output_layer/extra_dim"}), 0 !== o().length) throw new Error("weights remaing after extract: " + o().length);
            return {params: {mobilenetv1: u, prediction_layer: c, output_layer: l}, paramMappings: e}
        }(t)
    }, hg);

    function hg() {
        return cg.call(this, "SsdMobilenetv1") || this
    }

    function fg(t) {
        var e = new lg;
        return e.extractWeights(t), e
    }

    var pg, dg = (Pp(vg, pg = lg), vg);

    function vg() {
        return null !== pg && pg.apply(this, arguments) || this
    }

    var mg,
        gg = [new rd(.738768, .874946), new rd(2.42204, 2.65704), new rd(4.30971, 7.04493), new rd(10.246, 4.59428), new rd(12.6868, 11.8741)],
        yg = [new rd(1.603231, 2.094468), new rd(6.041143, 7.080126), new rd(2.882459, 3.518061), new rd(4.266906, 5.178857), new rd(9.041765, 10.66308)],
        xg = [117.001, 114.697, 97.404], bg = function (t) {
            return "number" == typeof t
        };

    function wg(t) {
        if (!t) throw new Error("invalid config: " + t);
        if ("boolean" != typeof t.withSeparableConvs) throw new Error("config.withSeparableConvs has to be a boolean, have: " + t.withSeparableConvs);
        if (!bg(t.iouThreshold) || t.iouThreshold < 0 || 1 < t.iouThreshold) throw new Error("config.iouThreshold has to be a number between [0, 1], have: " + t.iouThreshold);
        if (!Array.isArray(t.classes) || !t.classes.length || !t.classes.every(function (t) {
            return "string" == typeof t
        })) throw new Error("config.classes has to be an array class names: string[], have: " + JSON.stringify(t.classes));
        if (!Array.isArray(t.anchors) || !t.anchors.length || !t.anchors.map(function (t) {
            return t || {}
        }).every(function (t) {
            return bg(t.x) && bg(t.y)
        })) throw new Error("config.anchors has to be an array of { x: number, y: number }, have: " + JSON.stringify(t.anchors));
        if (t.meanRgb && (!Array.isArray(t.meanRgb) || 3 !== t.meanRgb.length || !t.meanRgb.every(bg))) throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: " + JSON.stringify(t.meanRgb))
    }

    function Cg(e) {
        return nn(function () {
            var t = Yu(e, kn(.10000000149011612));
            return Ou(dl(tc(e, t)), t)
        })
    }

    function Eg(e, n) {
        return nn(function () {
            var t = Cr(e, [[0, 0], [1, 1], [1, 1], [0, 0]]);
            return t = Ec(t, n.conv.filters, [1, 1], "valid"), t = tc(t, n.bn.sub), t = Yu(t, n.bn.truediv), Cg(t = Ou(t, n.conv.bias))
        })
    }

    function _g(e, n) {
        return nn(function () {
            var t = Cr(e, [[0, 0], [1, 1], [1, 1], [0, 0]]);
            return t = Ac(t, n.depthwise_filter, n.pointwise_filter, [1, 1], "valid"), Cg(t = Ou(t, n.bias))
        })
    }

    function Ig(o, i) {
        var r = Mv(o, i);
        var t = Bv(o, i);
        return {
            extractConvParams: r, extractConvWithBatchNormParams: function (t, e, n) {
                return {
                    conv: r(t, e, 3, n + "/conv"), bn: function (t, e) {
                        var n = Sn(o(t)), r = Sn(o(t));
                        return i.push({paramPath: e + "/sub"}, {paramPath: e + "/truediv"}), {sub: n, truediv: r}
                    }(e, n + "/bn")
                }
            }, extractSeparableConvParams: t
        }
    }

    function Rg(t, e) {
        var n = Wv(t, e);

        function r(t) {
            return {filters: n(t + "/filters", 4), bias: n(t + "/bias", 1)}
        }

        return {
            extractConvParams: r, extractConvWithBatchNormParams: function (t) {
                return {
                    conv: r(t + "/conv"), bn: function (t) {
                        return {sub: n(t + "/sub", 1), truediv: n(t + "/truediv", 1)}
                    }(t + "/bn")
                }
            }, extractSeparableConvParams: Lv(n)
        }
    }

    (mg = c.TinyYolov2SizeType || (c.TinyYolov2SizeType = {}))[mg.XS = 224] = "XS", mg[mg.SM = 320] = "SM", mg[mg.MD = 416] = "MD", mg[mg.LG = 608] = "LG";
    var kg = (Object.defineProperty(Sg.prototype, "inputSize", {
        get: function () {
            return this._inputSize
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Sg.prototype, "scoreThreshold", {
        get: function () {
            return this._scoreThreshold
        }, enumerable: !0, configurable: !0
    }), Sg);

    function Sg(t) {
        var e = void 0 === t ? {} : t, n = e.inputSize, r = e.scoreThreshold;
        if (this._name = "TinyYolov2Options", this._inputSize = n || 416, this._scoreThreshold = r || .5, "number" != typeof this._inputSize || this._inputSize % 32 != 0) throw new Error(this._name + " - expected inputSize to be a number divisible by 32");
        if ("number" != typeof this._scoreThreshold || this._scoreThreshold <= 0 || 1 <= this._scoreThreshold) throw new Error(this._name + " - expected scoreThreshold to be a number between 0 and 1")
    }

    var Dg, Ag = (Pp(Tg, Dg = kv), Object.defineProperty(Tg.prototype, "config", {
        get: function () {
            return this._config
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Tg.prototype, "withClassScores", {
        get: function () {
            return this.config.withClassScores || 1 < this.config.classes.length
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Tg.prototype, "boxEncodingSize", {
        get: function () {
            return 5 + (this.withClassScores ? this.config.classes.length : 0)
        }, enumerable: !0, configurable: !0
    }), Tg.prototype.runTinyYolov2 = function (t, e) {
        var n = Eg(t, e.conv0);
        return n = Eg(n = Gc(n, [2, 2], [2, 2], "same"), e.conv1), n = Eg(n = Gc(n, [2, 2], [2, 2], "same"), e.conv2), n = Eg(n = Gc(n, [2, 2], [2, 2], "same"), e.conv3), n = Eg(n = Gc(n, [2, 2], [2, 2], "same"), e.conv4), n = Eg(n = Gc(n, [2, 2], [2, 2], "same"), e.conv5), Nv(n = Eg(n = Eg(n = Gc(n, [2, 2], [1, 1], "same"), e.conv6), e.conv7), e.conv8, "valid", !1)
    }, Tg.prototype.runMobilenet = function (t, e) {
        var n = this.config.isFirstLayerConv2d ? Cg(Nv(t, e.conv0, "valid", !1)) : _g(t, e.conv0);
        return n = _g(n = Gc(n, [2, 2], [2, 2], "same"), e.conv1), n = _g(n = Gc(n, [2, 2], [2, 2], "same"), e.conv2), n = _g(n = Gc(n, [2, 2], [2, 2], "same"), e.conv3), n = _g(n = Gc(n, [2, 2], [2, 2], "same"), e.conv4), n = _g(n = Gc(n, [2, 2], [2, 2], "same"), e.conv5), n = Gc(n, [2, 2], [1, 1], "same"), n = e.conv6 ? _g(n, e.conv6) : n, Nv(n = e.conv7 ? _g(n, e.conv7) : n, e.conv8, "valid", !1)
    }, Tg.prototype.forwardInput = function (e, n) {
        var r = this, o = this.params;
        if (!o) throw new Error("TinyYolov2 - load model before inference");
        return nn(function () {
            var t = e.toBatchTensor(n, !1).toFloat();
            return t = (t = r.config.meanRgb ? yd(t, r.config.meanRgb) : t).div(kn(256)), r.config.withSeparableConvs ? r.runMobilenet(t, o) : r.runTinyYolov2(t, o)
        })
    }, Tg.prototype.forward = function (n, r) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [4, e.apply(this, [t.sent(), r])];
                    case 2:
                        return [2, t.sent()]
                }
            })
        })
    }, Tg.prototype.detect = function (d, v) {
        return void 0 === v && (v = {}), Lp(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l, h, f, p = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = new kg(v), n = e.inputSize, r = e.scoreThreshold, [4, bv(d)];
                    case 1:
                        return o = t.sent(), [4, this.forwardInput(o, n)];
                    case 2:
                        return i = t.sent(), a = nn(function () {
                            return Br(i)[0].expandDims()
                        }), s = {
                            width: o.getInputWidth(0),
                            height: o.getInputHeight(0)
                        }, [4, this.extractBoxes(a, o.getReshapedInputDimensions(0), r)];
                    case 3:
                        return u = t.sent(), i.dispose(), a.dispose(), c = u.map(function (t) {
                            return t.box
                        }), l = u.map(function (t) {
                            return t.score
                        }), h = u.map(function (t) {
                            return t.classScore
                        }), f = u.map(function (t) {
                            return p.config.classes[t.label]
                        }), [2, gd(c.map(function (t) {
                            return t.rescale(n)
                        }), l, this.config.iouThreshold, !0).map(function (t) {
                            return new ld(l[t], h[t], f[t], c[t], s)
                        })]
                }
            })
        })
    }, Tg.prototype.getDefaultModelName = function () {
        return ""
    }, Tg.prototype.extractParamsFromWeigthMap = function (t) {
        return function (t, e) {
            var n, r = [], o = Rg(t, r), i = o.extractConvParams, a = o.extractConvWithBatchNormParams,
                s = o.extractSeparableConvParams;
            if (e.withSeparableConvs) {
                var u = e.filterSizes && e.filterSizes.length || 9;
                n = {
                    conv0: e.isFirstLayerConv2d ? i("conv0") : s("conv0"),
                    conv1: s("conv1"),
                    conv2: s("conv2"),
                    conv3: s("conv3"),
                    conv4: s("conv4"),
                    conv5: s("conv5"),
                    conv6: 7 < u ? s("conv6") : void 0,
                    conv7: 8 < u ? s("conv7") : void 0,
                    conv8: i("conv8")
                }
            } else n = {
                conv0: a("conv0"),
                conv1: a("conv1"),
                conv2: a("conv2"),
                conv3: a("conv3"),
                conv4: a("conv4"),
                conv5: a("conv5"),
                conv6: a("conv6"),
                conv7: a("conv7"),
                conv8: i("conv8")
            };
            return Fv(t, r), {params: n, paramMappings: r}
        }(t, this.config)
    }, Tg.prototype.extractParams = function (t) {
        var e = this.config.filterSizes || Tg.DEFAULT_FILTER_SIZES, n = e ? e.length : void 0;
        if (7 !== n && 8 !== n && 9 !== n) throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + n + " filterSizes in config");
        return function (t, e, n, r) {
            var o, i = zv(t), a = i.extractWeights, s = i.getRemainingWeights, u = [], c = Ig(a, u),
                l = c.extractConvParams, h = c.extractConvWithBatchNormParams, f = c.extractSeparableConvParams;
            if (e.withSeparableConvs) {
                var p = r[0], d = r[1], v = r[2], m = r[3], g = r[4], y = r[5], x = r[6], b = r[7], w = r[8];
                o = {
                    conv0: e.isFirstLayerConv2d ? l(p, d, 3, "conv0") : f(p, d, "conv0"),
                    conv1: f(d, v, "conv1"),
                    conv2: f(v, m, "conv2"),
                    conv3: f(m, g, "conv3"),
                    conv4: f(g, y, "conv4"),
                    conv5: f(y, x, "conv5"),
                    conv6: b ? f(x, b, "conv6") : void 0,
                    conv7: w ? f(b, w, "conv7") : void 0,
                    conv8: l(w || b || x, 5 * n, 1, "conv8")
                }
            } else p = r[0], d = r[1], v = r[2], m = r[3], g = r[4], y = r[5], x = r[6], b = r[7], w = r[8], o = {
                conv0: h(p, d, "conv0"),
                conv1: h(d, v, "conv1"),
                conv2: h(v, m, "conv2"),
                conv3: h(m, g, "conv3"),
                conv4: h(g, y, "conv4"),
                conv5: h(y, x, "conv5"),
                conv6: h(x, b, "conv6"),
                conv7: h(b, w, "conv7"),
                conv8: l(w, 5 * n, 1, "conv8")
            };
            if (0 !== s().length) throw new Error("weights remaing after extract: " + s().length);
            return {params: o, paramMappings: u}
        }(t, this.config, this.boxEncodingSize, e)
    }, Tg.prototype.extractBoxes = function (T, N, F) {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l, h, f, p, d, v, m, g, y, x, b, w, C, E, _, I, R, k, S, D, A = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = N.width, n = N.height, r = Math.max(e, n), o = r / e, i = r / n, a = T.shape[1], s = this.config.anchors.length, u = nn(function () {
                            var t = T.reshape([a, a, s, A.boxEncodingSize]);
                            return [t.slice([0, 0, 0, 0], [a, a, s, 4]), t.slice([0, 0, 0, 4], [a, a, s, 1]), A.withClassScores ? so(t.slice([0, 0, 0, 5], [a, a, s, A.config.classes.length]), 3) : kn(0)]
                        }), c = u[0], l = u[1], h = u[2], f = [], [4, l.array()];
                    case 1:
                        return p = t.sent(), [4, c.array()];
                    case 2:
                        d = t.sent(), v = 0, t.label = 3;
                    case 3:
                        if (!(v < a)) return [3, 12];
                        m = 0, t.label = 4;
                    case 4:
                        if (!(m < a)) return [3, 11];
                        g = 0, t.label = 5;
                    case 5:
                        return g < s ? (y = bd(p[v][m][g][0]), !F || F < y ? (x = (m + bd(d[v][m][g][0])) / a * o, b = (v + bd(d[v][m][g][1])) / a * i, w = Math.exp(d[v][m][g][2]) * this.config.anchors[g].x / a * o, C = Math.exp(d[v][m][g][3]) * this.config.anchors[g].y / a * i, E = x - w / 2, _ = b - C / 2, I = {
                            row: v,
                            col: m,
                            anchor: g
                        }, this.withClassScores ? [4, this.extractPredictedClass(h, I)] : [3, 7]) : [3, 9]) : [3, 10];
                    case 6:
                        return D = t.sent(), [3, 8];
                    case 7:
                        D = {classScore: 1, label: 0}, t.label = 8;
                    case 8:
                        k = (R = D).classScore, S = R.label, f.push(Bp({
                            box: new ud(E, _, E + w, _ + C),
                            score: y,
                            classScore: y * k,
                            label: S
                        }, I)), t.label = 9;
                    case 9:
                        return g++, [3, 5];
                    case 10:
                        return m++, [3, 4];
                    case 11:
                        return v++, [3, 3];
                    case 12:
                        return c.dispose(), l.dispose(), h.dispose(), [2, f]
                }
            })
        })
    }, Tg.prototype.extractPredictedClass = function (e, a) {
        return Lp(this, void 0, void 0, function () {
            var n, r, o, i;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return n = a.row, r = a.col, o = a.anchor, [4, e.array()];
                    case 1:
                        return i = t.sent(), [2, Array(this.config.classes.length).fill(0).map(function (t, e) {
                            return i[n][r][o][e]
                        }).map(function (t, e) {
                            return {classScore: t, label: e}
                        }).reduce(function (t, e) {
                            return t.classScore > e.classScore ? t : e
                        })]
                }
            })
        })
    }, Tg.DEFAULT_FILTER_SIZES = [3, 16, 32, 64, 128, 256, 512, 1024, 1024], Tg);

    function Tg(t) {
        var e = Dg.call(this, "TinyYolov2") || this;
        return wg(t), e._config = t, e
    }

    var Ng, Fg = (Pp(Mg, Ng = Ag), Object.defineProperty(Mg.prototype, "withSeparableConvs", {
        get: function () {
            return this.config.withSeparableConvs
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Mg.prototype, "anchors", {
        get: function () {
            return this.config.anchors
        }, enumerable: !0, configurable: !0
    }), Mg.prototype.locateFaces = function (e, n) {
        return Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.detect(e, n)];
                    case 1:
                        return [2, t.sent().map(function (t) {
                            return new pd(t.score, t.relativeBox, {width: t.imageWidth, height: t.imageHeight})
                        })]
                }
            })
        })
    }, Mg.prototype.getDefaultModelName = function () {
        return this.withSeparableConvs ? "tiny_yolov2_separable_conv_model" : "tiny_yolov2_model"
    }, Mg.prototype.extractParamsFromWeigthMap = function (t) {
        return Ng.prototype.extractParamsFromWeigthMap.call(this, t)
    }, Mg);

    function Mg(t) {
        void 0 === t && (t = !0);
        var e = Object.assign({}, {withSeparableConvs: t, iouThreshold: .4, classes: ["face"]}, t ? {
            anchors: yg,
            meanRgb: xg
        } : {anchors: gg, withClassScores: !0});
        return Ng.call(this, e) || this
    }

    var Og, Pg = (Pp(Bg, Og = kg), Bg);

    function Bg() {
        var t = null !== Og && Og.apply(this, arguments) || this;
        return t._name = "TinyFaceDetectorOptions", t
    }

    var Lg = (Wg.prototype.then = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = n, [4, this.run()];
                    case 1:
                        return [2, e.apply(void 0, [t.sent()])]
                }
            })
        })
    }, Wg.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                throw new Error("ComposableTask - run is not implemented")
            })
        })
    }, Wg);

    function Wg() {
    }

    function zg(a, s, u, c, l) {
        return void 0 === l && (l = function (t) {
            return t.alignedRect
        }), Lp(this, void 0, void 0, function () {
            var e, n, r, o, i;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = a.map(function (t) {
                            return am(t) ? l(t) : t.detection
                        }), (r = c) ? [3, 5] : s instanceof bt ? [4, Cv(s, e)] : [3, 2];
                    case 1:
                        return o = t.sent(), [3, 4];
                    case 2:
                        return [4, wv(s, e)];
                    case 3:
                        o = t.sent(), t.label = 4;
                    case 4:
                        r = o, t.label = 5;
                    case 5:
                        return [4, u(n = r)];
                    case 6:
                        return i = t.sent(), n.forEach(function (t) {
                            return t instanceof bt && t.dispose()
                        }), [2, i]
                }
            })
        })
    }

    function Ug(e, r, o, i, a) {
        return Lp(this, void 0, void 0, function () {
            var n = this;
            return Wp(this, function (t) {
                return [2, zg([e], r, function (e) {
                    return Lp(n, void 0, void 0, function () {
                        return Wp(this, function (t) {
                            return [2, o(e[0])]
                        })
                    })
                }, i, a)]
            })
        })
    }

    var Vg = 2, Gg = 12;

    function Hg(t) {
        var e = zv(t), n = e.extractWeights, r = e.getRemainingWeights, o = [], i = function (r, o) {
            var u = Mv(r, o), c = Ov(r, o);

            function l(t, e) {
                var n = Sn(r(t));
                return o.push({paramPath: e}), n
            }

            function h(t, e, n) {
                return void 0 === n && (n = !1), {
                    conv1: u(t[0], t[1], 3, e + "/conv1"),
                    prelu1_alpha: l(t[1], e + "/prelu1_alpha"),
                    conv2: u(t[1], t[2], 3, e + "/conv2"),
                    prelu2_alpha: l(t[2], e + "/prelu2_alpha"),
                    conv3: u(t[2], t[3], n ? 2 : 3, e + "/conv3"),
                    prelu3_alpha: l(t[3], e + "/prelu3_alpha")
                }
            }

            return {
                extractPNetParams: function () {
                    var t = h([3, 10, 16, 32], "pnet"), e = u(32, 2, 1, "pnet/conv4_1"),
                        n = u(32, 4, 1, "pnet/conv4_2");
                    return Bp(Bp({}, t), {conv4_1: e, conv4_2: n})
                }, extractRNetParams: function () {
                    var t = h([3, 28, 48, 64], "rnet", !0), e = c(576, 128, "rnet/fc1"),
                        n = l(128, "rnet/prelu4_alpha"), r = c(128, 2, "rnet/fc2_1"), o = c(128, 4, "rnet/fc2_2");
                    return Bp(Bp({}, t), {fc1: e, prelu4_alpha: n, fc2_1: r, fc2_2: o})
                }, extractONetParams: function () {
                    var t = h([3, 32, 64, 64], "onet"), e = u(64, 128, 2, "onet/conv4"),
                        n = l(128, "onet/prelu4_alpha"), r = c(1152, 256, "onet/fc1"), o = l(256, "onet/prelu5_alpha"),
                        i = c(256, 2, "onet/fc2_1"), a = c(256, 4, "onet/fc2_2"), s = c(256, 10, "onet/fc2_3");
                    return Bp(Bp({}, t), {
                        conv4: e,
                        prelu4_alpha: n,
                        fc1: r,
                        prelu5_alpha: o,
                        fc2_1: i,
                        fc2_2: a,
                        fc2_3: s
                    })
                }
            }
        }(n, o), a = i.extractPNetParams, s = i.extractRNetParams, u = i.extractONetParams, c = a(), l = s(), h = u();
        if (0 !== r().length) throw new Error("weights remaing after extract: " + r().length);
        return {params: {pnet: c, rnet: l, onet: h}, paramMappings: o}
    }

    function qg(t) {
        var e = [], n = function (t, e) {
            var n = Wv(t, e);

            function u(t) {
                return {filters: n(t + "/weights", 4, t + "/filters"), bias: n(t + "/bias", 1)}
            }

            function c(t) {
                return {weights: n(t + "/weights", 2), bias: n(t + "/bias", 1)}
            }

            function l(t) {
                return n(t, 1)
            }

            function h(t) {
                return {
                    conv1: u(t + "/conv1"),
                    prelu1_alpha: l(t + "/prelu1_alpha"),
                    conv2: u(t + "/conv2"),
                    prelu2_alpha: l(t + "/prelu2_alpha"),
                    conv3: u(t + "/conv3"),
                    prelu3_alpha: l(t + "/prelu3_alpha")
                }
            }

            return {
                extractPNetParams: function () {
                    var t = h("pnet"), e = u("pnet/conv4_1"), n = u("pnet/conv4_2");
                    return Bp(Bp({}, t), {conv4_1: e, conv4_2: n})
                }, extractRNetParams: function () {
                    var t = h("rnet"), e = c("rnet/fc1"), n = l("rnet/prelu4_alpha"), r = c("rnet/fc2_1"),
                        o = c("rnet/fc2_2");
                    return Bp(Bp({}, t), {fc1: e, prelu4_alpha: n, fc2_1: r, fc2_2: o})
                }, extractONetParams: function () {
                    var t = h("onet"), e = u("onet/conv4"), n = l("onet/prelu4_alpha"), r = c("onet/fc1"),
                        o = l("onet/prelu5_alpha"), i = c("onet/fc2_1"), a = c("onet/fc2_2"), s = c("onet/fc2_3");
                    return Bp(Bp({}, t), {
                        conv4: e,
                        prelu4_alpha: n,
                        fc1: r,
                        prelu5_alpha: o,
                        fc2_1: i,
                        fc2_2: a,
                        fc2_3: s
                    })
                }
            }
        }(t, e), r = n.extractPNetParams, o = n.extractRNetParams, i = n.extractONetParams, a = r(), s = o(), u = i();
        return Fv(t, e), {params: {pnet: a, rnet: s, onet: u}, paramMappings: e}
    }

    function jg(t, e) {
        var n = e[0], r = e[1];
        return {height: Math.floor(n * t), width: Math.floor(r * t)}
    }

    var Kg, Xg = (Pp(Yg, Kg = id), Yg);

    function Yg(t, e, n, r) {
        return Kg.call(this, {left: t, top: e, right: n, bottom: r}, !0) || this
    }

    function $g(t) {
        return nn(function () {
            return Yu(tc(t, kn(127.5)), kn(.0078125))
        })
    }

    function Jg(t, e) {
        return nn(function () {
            return Ou(dl(t), Yu(e, Zs(dl(Zs(t)))))
        })
    }

    function Qg(e, n, r) {
        return void 0 === r && (r = !1), nn(function () {
            var t = Nv(e, n.conv1, "valid");
            return t = Jg(t, n.prelu1_alpha), t = Jg(t = Nv(t = Gc(t, r ? [2, 2] : [3, 3], [2, 2], "same"), n.conv2, "valid"), n.prelu2_alpha), t = Jg(t = Nv(t = r ? t : Gc(t, [3, 3], [2, 2], "valid"), n.conv3, "valid"), n.prelu3_alpha)
        })
    }

    function Zg(s, t, u, c, l) {
        l.stage1 = [];
        var e = t.map(function (a) {
            return nn(function () {
                var t = {scale: a}, e = function (o, i) {
                    return nn(function () {
                        var t = jg(i, o.shape.slice(1)), e = t.height, n = t.width,
                            r = $g(vh.resizeBilinear(o, [e, n]));
                        return gl(r, [0, 2, 1, 3])
                    })
                }(s, a), n = Date.now(), r = function (r, o) {
                    return nn(function () {
                        var t = Qg(r, o, !0), e = Nv(t, o.conv4_1, "valid"), n = yr(il(e, 3), 3);
                        return {prob: so(tc(e, n), 3), regions: Nv(t, o.conv4_2, "valid")}
                    })
                }(e, c), o = r.prob, i = r.regions;
                return t.pnet = Date.now() - n, {
                    scoresTensor: Br(Br(o, 3)[1])[0],
                    regionsTensor: Br(i)[0],
                    scale: a,
                    statsForScale: t
                }
            })
        }).map(function (t) {
            var e = t.scoresTensor, n = t.regionsTensor, r = t.scale, o = t.statsForScale, i = function (t, o, i, e) {
                for (var n = [], a = t.arraySync(), r = 0; r < t.shape[0]; r++) for (var s = 0; s < t.shape[1]; s++) a[r][s] >= e && n.push(new rd(s, r));
                return n.map(function (t) {
                    var e = new ud(Math.round((t.y * Vg + 1) / i), Math.round((t.x * Vg + 1) / i), Math.round((t.y * Vg + Gg) / i), Math.round((t.x * Vg + Gg) / i)),
                        n = a[t.y][t.x], r = o.arraySync();
                    return {
                        cell: e,
                        score: n,
                        region: new Xg(r[t.y][t.x][0], r[t.y][t.x][1], r[t.y][t.x][2], r[t.y][t.x][3])
                    }
                })
            }(e, n, r, u);
            if (e.dispose(), n.dispose(), !i.length) return l.stage1.push(o), [];
            var a = Date.now(), s = gd(i.map(function (t) {
                return t.cell
            }), i.map(function (t) {
                return t.score
            }), .5);
            return o.nms = Date.now() - a, o.numBoxes = s.length, l.stage1.push(o), s.map(function (t) {
                return i[t]
            })
        }).reduce(function (t, e) {
            return t.concat(e)
        }, []), n = [], r = [];
        if (0 < e.length) {
            var o = Date.now(), i = gd(e.map(function (t) {
                return t.cell
            }), e.map(function (t) {
                return t.score
            }), .7);
            l.stage1_nms = Date.now() - o, r = i.map(function (t) {
                return e[t].score
            }), n = i.map(function (t) {
                return e[t]
            }).map(function (t) {
                var e = t.cell, n = t.region;
                return new ud(e.left + n.left * e.width, e.top + n.top * e.height, e.right + n.right * e.width, e.bottom + n.bottom * e.height).toSquare().round()
            })
        }
        return {boxes: n, scores: r}
    }

    function ty(h, r, t) {
        var a = t.width, s = t.height;
        return Lp(this, void 0, void 0, function () {
            var l, e, i, n = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return l = nv(h), [4, Promise.all(r.map(function (c) {
                            return Lp(n, void 0, void 0, function () {
                                var e, n, r, o, i, a, s, u;
                                return Wp(this, function (t) {
                                    return e = c.padAtBorders(h.height, h.width), n = e.y, r = e.ey, o = e.x, i = e.ex, a = o - 1, s = n - 1, u = l.getImageData(a, s, i - a, r - s), [2, tv.isNodejs() ? dv(u) : createImageBitmap(u)]
                                })
                            })
                        }))];
                    case 1:
                        return e = t.sent(), i = [], e.forEach(function (t) {
                            var e = nv(pv({width: a, height: s}));
                            e.drawImage(t, 0, 0, a, s);
                            for (var n = e.getImageData(0, 0, a, s).data, r = [], o = 0; o < n.length; o += 4) r.push(n[o + 2]), r.push(n[o + 1]), r.push(n[o]);
                            i.push(r)
                        }), [2, i.map(function (t) {
                            return nn(function () {
                                return $g(gl(Tn(t, [1, a, s, 3]), [0, 2, 1, 3]).toFloat())
                            })
                        })]
                }
            })
        })
    }

    function ey(v, m, g, y, x) {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l, h, f, p, d;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = Date.now(), [4, ty(v, m, {width: 24, height: 24})];
                    case 1:
                        return n = t.sent(), x.stage2_extractImagePatches = Date.now() - e, e = Date.now(), r = n.map(function (t) {
                            var e = function (a, s) {
                                return nn(function () {
                                    var t = Qg(a, s),
                                        e = Jg(Kv(Tr(t, [t.shape[0], s.fc1.weights.shape[0]]), s.fc1), s.prelu4_alpha),
                                        n = Kv(e, s.fc2_1), r = yr(il(n, 1), 1), o = so(tc(n, r), 1),
                                        i = Kv(e, s.fc2_2);
                                    return {scores: Br(o, 1)[1], regions: i}
                                })
                            }(t, y);
                            return t.dispose(), e
                        }), x.stage2_rnet = Date.now() - e, o = 1 < r.length ? Vn(r.map(function (t) {
                            return t.scores
                        })) : r[0].scores, s = (a = Array).from, [4, o.data()];
                    case 2:
                        return i = s.apply(a, [t.sent()]), o.dispose(), u = i.map(function (t, e) {
                            return {score: t, idx: e}
                        }).filter(function (t) {
                            return t.score > g
                        }).map(function (t) {
                            return t.idx
                        }), c = u.map(function (t) {
                            return m[t]
                        }), l = u.map(function (t) {
                            return i[t]
                        }), h = [], f = [], 0 < c.length && (e = Date.now(), p = gd(c, l, .7), x.stage2_nms = Date.now() - e, d = p.map(function (t) {
                            var e = r[u[t]].regions.arraySync();
                            return new Xg(e[0][0], e[0][1], e[0][2], e[0][3])
                        }), f = p.map(function (t) {
                            return l[t]
                        }), h = p.map(function (t, e) {
                            return c[t].calibrate(d[e])
                        })), r.forEach(function (t) {
                            t.regions.dispose(), t.scores.dispose()
                        }), [2, {boxes: h, scores: f}]
                }
            })
        })
    }

    function ny(m, g, y, x, b) {
        return Lp(this, void 0, void 0, function () {
            var e, n, i, r, o, a, s, u, c, l, h, f, p, d, v;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = Date.now(), [4, ty(m, g, {width: 48, height: 48})];
                    case 1:
                        return n = t.sent(), b.stage3_extractImagePatches = Date.now() - e, e = Date.now(), i = n.map(function (t) {
                            var e = function (s, u) {
                                return nn(function () {
                                    var t = Qg(s, u);
                                    t = Jg(t = Nv(t = Gc(t, [2, 2], [2, 2], "same"), u.conv4, "valid"), u.prelu4_alpha);
                                    var e = Jg(Kv(Tr(t, [t.shape[0], u.fc1.weights.shape[0]]), u.fc1), u.prelu5_alpha),
                                        n = Kv(e, u.fc2_1), r = yr(il(n, 1), 1), o = so(tc(n, r), 1),
                                        i = Kv(e, u.fc2_2), a = Kv(e, u.fc2_3);
                                    return {scores: Br(o, 1)[1], regions: i, points: a}
                                })
                            }(t, x);
                            return t.dispose(), e
                        }), b.stage3_onet = Date.now() - e, r = 1 < i.length ? Vn(i.map(function (t) {
                            return t.scores
                        })) : i[0].scores, s = (a = Array).from, [4, r.data()];
                    case 2:
                        return o = s.apply(a, [t.sent()]), r.dispose(), u = o.map(function (t, e) {
                            return {score: t, idx: e}
                        }).filter(function (t) {
                            return t.score > y
                        }).map(function (t) {
                            return t.idx
                        }), c = u.map(function (t) {
                            var e = i[t].regions.arraySync();
                            return new Xg(e[0][0], e[0][1], e[0][2], e[0][3])
                        }), l = u.map(function (t, e) {
                            return g[t].calibrate(c[e])
                        }), h = u.map(function (t) {
                            return o[t]
                        }), f = [], p = [], d = [], 0 < l.length && (e = Date.now(), v = gd(l, h, .7, !1), b.stage3_nms = Date.now() - e, f = v.map(function (t) {
                            return l[t]
                        }), p = v.map(function (t) {
                            return h[t]
                        }), d = v.map(function (r, o) {
                            return Array(5).fill(0).map(function (t, e) {
                                var n = i[r].points.arraySync();
                                return new rd(n[0][e] * (f[o].width + 1) + f[o].left, n[0][e + 5] * (f[o].height + 1) + f[o].top)
                            })
                        })), i.forEach(function (t) {
                            t.regions.dispose(), t.scores.dispose(), t.points.dispose()
                        }), [2, {boxes: f, scores: p, points: d}]
                }
            })
        })
    }

    var ry, oy = (Pp(iy, ry = kv), iy.prototype.load = function (e) {
        return Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                return console.warn("mtcnn is deprecated and will be removed soon"), [2, ry.prototype.load.call(this, e)]
            })
        })
    }, iy.prototype.loadFromDisk = function (e) {
        return Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                return console.warn("mtcnn is deprecated and will be removed soon"), [2, ry.prototype.loadFromDisk.call(this, e)]
            })
        })
    }, iy.prototype.forwardInput = function (C, E) {
        return void 0 === E && (E = {}), Lp(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l, h, f, p, d, v, m, g, y, x, b, w;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (!(e = this.params)) throw new Error("Mtcnn - load model before inference");
                        if (!(n = C.canvases[0])) throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");
                        return r = {}, o = Date.now(), i = nn(function () {
                            return function (t) {
                                return nn(function () {
                                    return Mr(Br(t, 3).reverse(), 3)
                                })
                            }(yr(Kf.fromPixels(n)).toFloat())
                        }), a = function (t) {
                            return i.dispose(), r.total = Date.now() - o, t
                        }, s = i.shape.slice(1), u = s[0], c = s[1], l = new Jm(E), h = l.minFaceSize, f = l.scaleFactor, p = l.maxNumScales, d = l.scoreThresholds, v = l.scaleSteps, m = (v || function (t, e, n) {
                            for (var r = n[0], o = n[1], i = Gg / t, a = [], s = Math.min(r, o) * i, u = 0; 12 <= s;) a.push(i * Math.pow(e, u)), s *= e, u += 1;
                            return a
                        }(h, f, [u, c])).filter(function (t) {
                            var e = jg(t, [u, c]);
                            return Math.min(e.width, e.height) > Gg
                        }).slice(0, p), r.scales = m, r.pyramid = m.map(function (t) {
                            return jg(t, [u, c])
                        }), g = Date.now(), [4, Zg(i, m, d[0], e.pnet, r)];
                    case 1:
                        return y = t.sent(), r.total_stage1 = Date.now() - g, y.boxes.length ? (r.stage2_numInputBoxes = y.boxes.length, g = Date.now(), [4, ey(n, y.boxes, d[1], e.rnet, r)]) : [2, a({
                            results: [],
                            stats: r
                        })];
                    case 2:
                        return x = t.sent(), r.total_stage2 = Date.now() - g, x.boxes.length ? (r.stage3_numInputBoxes = x.boxes.length, g = Date.now(), [4, ny(n, x.boxes, d[2], e.onet, r)]) : [2, a({
                            results: [],
                            stats: r
                        })];
                    case 3:
                        return b = t.sent(), r.total_stage3 = Date.now() - g, w = b.boxes.map(function (e, t) {
                            return sm(Hd({}, new pd(b.scores[t], new Cd(e.left / c, e.top / u, e.width / c, e.height / u), {
                                height: u,
                                width: c
                            })), new kd(b.points[t].map(function (t) {
                                return t.sub(new rd(e.left, e.top)).div(new rd(e.width, e.height))
                            }), {width: e.width, height: e.height}))
                        }), [2, a({results: w, stats: r})]
                }
            })
        })
    }, iy.prototype.forward = function (n, r) {
        return void 0 === r && (r = {}), Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [4, e.apply(this, [t.sent(), r])];
                    case 2:
                        return [2, t.sent().results]
                }
            })
        })
    }, iy.prototype.forwardWithStats = function (n, r) {
        return void 0 === r && (r = {}), Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = this.forwardInput, [4, bv(n)];
                    case 1:
                        return [2, e.apply(this, [t.sent(), r])]
                }
            })
        })
    }, iy.prototype.getDefaultModelName = function () {
        return "mtcnn_model"
    }, iy.prototype.extractParamsFromWeigthMap = function (t) {
        return qg(t)
    }, iy.prototype.extractParams = function (t) {
        return Hg(t)
    }, iy);

    function iy() {
        return ry.call(this, "Mtcnn") || this
    }

    var ay,
        sy = [new rd(1.603231, 2.094468), new rd(6.041143, 7.080126), new rd(2.882459, 3.518061), new rd(4.266906, 5.178857), new rd(9.041765, 10.66308)],
        uy = [117.001, 114.697, 97.404], cy = (Pp(ly, ay = Ag), Object.defineProperty(ly.prototype, "anchors", {
            get: function () {
                return this.config.anchors
            }, enumerable: !0, configurable: !0
        }), ly.prototype.locateFaces = function (e, n) {
            return Lp(this, void 0, void 0, function () {
                return Wp(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.detect(e, n)];
                        case 1:
                            return [2, t.sent().map(function (t) {
                                return new pd(t.score, t.relativeBox, {width: t.imageWidth, height: t.imageHeight})
                            })]
                    }
                })
            })
        }, ly.prototype.getDefaultModelName = function () {
            return "tiny_face_detector_model"
        }, ly.prototype.extractParamsFromWeigthMap = function (t) {
            return ay.prototype.extractParamsFromWeigthMap.call(this, t)
        }, ly);

    function ly() {
        var t = {
            withSeparableConvs: !0,
            iouThreshold: .4,
            classes: ["face"],
            anchors: sy,
            meanRgb: uy,
            isFirstLayerConv2d: !0,
            filterSizes: [3, 16, 32, 64, 128, 256, 512]
        };
        return ay.call(this, t) || this
    }

    function hy(t, e) {
        return vy.ssdMobilenetv1.locateFaces(t, e)
    }

    function fy(t) {
        return vy.faceLandmark68Net.detectLandmarks(t)
    }

    function py(t) {
        return vy.ssdMobilenetv1.load(t)
    }

    var dy, vy = {
        ssdMobilenetv1: new lg,
        tinyFaceDetector: new cy,
        tinyYolov2: new Fg,
        mtcnn: new oy,
        faceLandmark68Net: new km,
        faceLandmark68TinyNet: new Fm,
        faceRecognitionNet: new jm,
        faceExpressionNet: new nm,
        ageGenderNet: new wm
    }, my = py, gy = hy, yy = fy, xy = (Pp(by, dy = Lg), by);

    function by(t, e, n) {
        var r = dy.call(this) || this;
        return r.parentTask = t, r.input = e, r.extractedFaces = n, r
    }

    var wy, Cy = (Pp(Ey, wy = xy), Ey.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var e, n, r = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.parentTask];
                    case 1:
                        return [4, zg(e = t.sent(), this.input, function (e) {
                            return Lp(r, void 0, void 0, function () {
                                return Wp(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, Promise.all(e.map(function (t) {
                                                return vy.faceExpressionNet.predictExpressions(t)
                                            }))];
                                        case 1:
                                            return [2, t.sent()]
                                    }
                                })
                            })
                        }, this.extractedFaces)];
                    case 2:
                        return n = t.sent(), [2, e.map(function (t, e) {
                            return im(t, n[e])
                        })]
                }
            })
        })
    }, Ey.prototype.withAgeAndGender = function () {
        return new By(this, this.input)
    }, Ey);

    function Ey() {
        return null !== wy && wy.apply(this, arguments) || this
    }

    var _y, Iy = (Pp(Ry, _y = xy), Ry.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var e, n;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.parentTask];
                    case 1:
                        return (e = t.sent()) ? [4, Ug(e, this.input, function (t) {
                            return vy.faceExpressionNet.predictExpressions(t)
                        }, this.extractedFaces)] : [2];
                    case 2:
                        return n = t.sent(), [2, im(e, n)]
                }
            })
        })
    }, Ry.prototype.withAgeAndGender = function () {
        return new zy(this, this.input)
    }, Ry);

    function Ry() {
        return null !== _y && _y.apply(this, arguments) || this
    }

    var ky, Sy = (Pp(Dy, ky = Cy), Dy.prototype.withAgeAndGender = function () {
        return new Gy(this, this.input)
    }, Dy.prototype.withFaceDescriptors = function () {
        return new Qy(this, this.input)
    }, Dy);

    function Dy() {
        return null !== ky && ky.apply(this, arguments) || this
    }

    var Ay, Ty = (Pp(Ny, Ay = Iy), Ny.prototype.withAgeAndGender = function () {
        return new jy(this, this.input)
    }, Ny.prototype.withFaceDescriptor = function () {
        return new ex(this, this.input)
    }, Ny);

    function Ny() {
        return null !== Ay && Ay.apply(this, arguments) || this
    }

    var Fy, My = (Pp(Oy, Fy = Lg), Oy);

    function Oy(t, e, n) {
        var r = Fy.call(this) || this;
        return r.parentTask = t, r.input = e, r.extractedFaces = n, r
    }

    var Py, By = (Pp(Ly, Py = My), Ly.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var e, o, n = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.parentTask];
                    case 1:
                        return [4, zg(e = t.sent(), this.input, function (e) {
                            return Lp(n, void 0, void 0, function () {
                                return Wp(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, Promise.all(e.map(function (t) {
                                                return vy.ageGenderNet.predictAgeAndGender(t)
                                            }))];
                                        case 1:
                                            return [2, t.sent()]
                                    }
                                })
                            })
                        }, this.extractedFaces)];
                    case 2:
                        return o = t.sent(), [2, e.map(function (t, e) {
                            var n = o[e], r = n.age;
                            return Ym($m(t, n.gender, n.genderProbability), r)
                        })]
                }
            })
        })
    }, Ly.prototype.withFaceExpressions = function () {
        return new Cy(this, this.input)
    }, Ly);

    function Ly() {
        return null !== Py && Py.apply(this, arguments) || this
    }

    var Wy, zy = (Pp(Uy, Wy = My), Uy.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.parentTask];
                    case 1:
                        return (e = t.sent()) ? [4, Ug(e, this.input, function (t) {
                            return vy.ageGenderNet.predictAgeAndGender(t)
                        }, this.extractedFaces)] : [2];
                    case 2:
                        return n = t.sent(), r = n.age, o = n.gender, i = n.genderProbability, [2, Ym($m(e, o, i), r)]
                }
            })
        })
    }, Uy.prototype.withFaceExpressions = function () {
        return new Iy(this, this.input)
    }, Uy);

    function Uy() {
        return null !== Wy && Wy.apply(this, arguments) || this
    }

    var Vy, Gy = (Pp(Hy, Vy = By), Hy.prototype.withFaceExpressions = function () {
        return new Sy(this, this.input)
    }, Hy.prototype.withFaceDescriptors = function () {
        return new Qy(this, this.input)
    }, Hy);

    function Hy() {
        return null !== Vy && Vy.apply(this, arguments) || this
    }

    var qy, jy = (Pp(Ky, qy = zy), Ky.prototype.withFaceExpressions = function () {
        return new Ty(this, this.input)
    }, Ky.prototype.withFaceDescriptor = function () {
        return new ex(this, this.input)
    }, Ky);

    function Ky() {
        return null !== qy && qy.apply(this, arguments) || this
    }

    var Xy, Yy = (Pp($y, Xy = Lg), $y);

    function $y(t, e) {
        var n = Xy.call(this) || this;
        return n.parentTask = t, n.input = e, n
    }

    var Jy, Qy = (Pp(Zy, Jy = Yy), Zy.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var n;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.parentTask];
                    case 1:
                        return [4, zg(n = t.sent(), this.input, function (t) {
                            return Promise.all(t.map(function (t) {
                                return vy.faceRecognitionNet.computeFaceDescriptor(t)
                            }))
                        }, null, function (t) {
                            return t.landmarks.align(null, {useDlibAlignment: !0})
                        })];
                    case 2:
                        return [2, t.sent().map(function (t, e) {
                            return Xm(n[e], t)
                        })]
                }
            })
        })
    }, Zy.prototype.withFaceExpressions = function () {
        return new Sy(this, this.input)
    }, Zy.prototype.withAgeAndGender = function () {
        return new Gy(this, this.input)
    }, Zy);

    function Zy() {
        return null !== Jy && Jy.apply(this, arguments) || this
    }

    var tx, ex = (Pp(nx, tx = Yy), nx.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var e, n;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.parentTask];
                    case 1:
                        return (e = t.sent()) ? [4, Ug(e, this.input, function (t) {
                            return vy.faceRecognitionNet.computeFaceDescriptor(t)
                        }, null, function (t) {
                            return t.landmarks.align(null, {useDlibAlignment: !0})
                        })] : [2];
                    case 2:
                        return n = t.sent(), [2, Xm(e, n)]
                }
            })
        })
    }, nx.prototype.withFaceExpressions = function () {
        return new Ty(this, this.input)
    }, nx.prototype.withAgeAndGender = function () {
        return new jy(this, this.input)
    }, nx);

    function nx() {
        return null !== tx && tx.apply(this, arguments) || this
    }

    var rx, ox = (Pp(ix, rx = Lg), Object.defineProperty(ix.prototype, "landmarkNet", {
        get: function () {
            return this.useTinyLandmarkNet ? vy.faceLandmark68TinyNet : vy.faceLandmark68Net
        }, enumerable: !0, configurable: !0
    }), ix);

    function ix(t, e, n) {
        var r = rx.call(this) || this;
        return r.parentTask = t, r.input = e, r.useTinyLandmarkNet = n, r
    }

    var ax, sx = (Pp(ux, ax = ox), ux.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i, a = this;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.parentTask];
                    case 1:
                        return e = t.sent(), n = e.map(function (t) {
                            return t.detection
                        }), this.input instanceof bt ? [4, Cv(this.input, n)] : [3, 3];
                    case 2:
                        return o = t.sent(), [3, 5];
                    case 3:
                        return [4, wv(this.input, n)];
                    case 4:
                        o = t.sent(), t.label = 5;
                    case 5:
                        return r = o, [4, Promise.all(r.map(function (t) {
                            return a.landmarkNet.detectLandmarks(t)
                        }))];
                    case 6:
                        return i = t.sent(), r.forEach(function (t) {
                            return t instanceof bt && t.dispose()
                        }), [2, e.map(function (t, e) {
                            return sm(t, i[e])
                        })]
                }
            })
        })
    }, ux.prototype.withFaceExpressions = function () {
        return new Sy(this, this.input)
    }, ux.prototype.withAgeAndGender = function () {
        return new Gy(this, this.input)
    }, ux.prototype.withFaceDescriptors = function () {
        return new Qy(this, this.input)
    }, ux);

    function ux() {
        return null !== ax && ax.apply(this, arguments) || this
    }

    var cx, lx = (Pp(hx, cx = ox), hx.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o, i;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.parentTask];
                    case 1:
                        return (e = t.sent()) ? (n = e.detection, this.input instanceof bt ? [4, Cv(this.input, [n])] : [3, 3]) : [2];
                    case 2:
                        return o = t.sent(), [3, 5];
                    case 3:
                        return [4, wv(this.input, [n])];
                    case 4:
                        o = t.sent(), t.label = 5;
                    case 5:
                        return r = o, [4, this.landmarkNet.detectLandmarks(r[0])];
                    case 6:
                        return i = t.sent(), r.forEach(function (t) {
                            return t instanceof bt && t.dispose()
                        }), [2, sm(e, i)]
                }
            })
        })
    }, hx.prototype.withFaceExpressions = function () {
        return new Ty(this, this.input)
    }, hx.prototype.withAgeAndGender = function () {
        return new jy(this, this.input)
    }, hx.prototype.withFaceDescriptor = function () {
        return new ex(this, this.input)
    }, hx);

    function hx() {
        return null !== cx && cx.apply(this, arguments) || this
    }

    var fx, px = (Pp(dx, fx = Lg), dx);

    function dx(t, e) {
        void 0 === e && (e = new sg);
        var n = fx.call(this) || this;
        return n.input = t, n.options = e, n
    }

    var vx, mx = (Pp(gx, vx = px), gx.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var e, n, r, o;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return n = (e = this).input, (r = e.options) instanceof Jm ? [4, vy.mtcnn.forward(n, r)] : [3, 2];
                    case 1:
                        return [2, t.sent().map(function (t) {
                            return t.detection
                        })];
                    case 2:
                        if (!(o = r instanceof Pg ? function (t) {
                            return vy.tinyFaceDetector.locateFaces(t, r)
                        } : r instanceof sg ? function (t) {
                            return vy.ssdMobilenetv1.locateFaces(t, r)
                        } : r instanceof kg ? function (t) {
                            return vy.tinyYolov2.locateFaces(t, r)
                        } : null)) throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");
                        return [2, o(n)]
                }
            })
        })
    }, gx.prototype.runAndExtendWithFaceDetections = function () {
        var t = this;
        return new Promise(function (n) {
            return Lp(t, void 0, void 0, function () {
                var e;
                return Wp(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.run()];
                        case 1:
                            return e = t.sent(), [2, n(e.map(function (t) {
                                return Hd({}, t)
                            }))]
                    }
                })
            })
        })
    }, gx.prototype.withFaceLandmarks = function (t) {
        return void 0 === t && (t = !1), new sx(this.runAndExtendWithFaceDetections(), this.input, t)
    }, gx.prototype.withFaceExpressions = function () {
        return new Cy(this.runAndExtendWithFaceDetections(), this.input)
    }, gx.prototype.withAgeAndGender = function () {
        return new By(this.runAndExtendWithFaceDetections(), this.input)
    }, gx);

    function gx() {
        return null !== vx && vx.apply(this, arguments) || this
    }

    var yx, xx = (Pp(bx, yx = px), bx.prototype.run = function () {
        return Lp(this, void 0, void 0, function () {
            var e, n;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, new mx(this.input, this.options)];
                    case 1:
                        return e = t.sent(), n = e[0], e.forEach(function (t) {
                            t.score > n.score && (n = t)
                        }), [2, n]
                }
            })
        })
    }, bx.prototype.runAndExtendWithFaceDetection = function () {
        var t = this;
        return new Promise(function (n) {
            return Lp(t, void 0, void 0, function () {
                var e;
                return Wp(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.run()];
                        case 1:
                            return e = t.sent(), [2, n(e ? Hd({}, e) : void 0)]
                    }
                })
            })
        })
    }, bx.prototype.withFaceLandmarks = function (t) {
        return void 0 === t && (t = !1), new lx(this.runAndExtendWithFaceDetection(), this.input, t)
    }, bx.prototype.withFaceExpressions = function () {
        return new Iy(this.runAndExtendWithFaceDetection(), this.input)
    }, bx.prototype.withAgeAndGender = function () {
        return new zy(this.runAndExtendWithFaceDetection(), this.input)
    }, bx);

    function bx() {
        return null !== yx && yx.apply(this, arguments) || this
    }

    function wx(t, e) {
        return void 0 === e && (e = new sg), new mx(t, e)
    }

    function Cx(e, n) {
        return Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return console.warn("allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead"), [4, wx(e, new sg(n ? {minConfidence: n} : {})).withFaceLandmarks().withFaceDescriptors()];
                    case 1:
                        return [2, t.sent()]
                }
            })
        })
    }

    var Ex = Cx;

    function _x(t, e) {
        if (t.length !== e.length) throw new Error("euclideanDistance: arr1.length !== arr2.length");
        var n = Array.from(t), r = Array.from(e);
        return Math.sqrt(n.map(function (t, e) {
            return t - r[e]
        }).reduce(function (t, e) {
            return t + Math.pow(e, 2)
        }, 0))
    }

    var Ix = (Object.defineProperty(Rx.prototype, "labeledDescriptors", {
        get: function () {
            return this._labeledDescriptors
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(Rx.prototype, "distanceThreshold", {
        get: function () {
            return this._distanceThreshold
        }, enumerable: !0, configurable: !0
    }), Rx.prototype.computeMeanDistance = function (e, t) {
        return t.map(function (t) {
            return _x(t, e)
        }).reduce(function (t, e) {
            return t + e
        }, 0) / (t.length || 1)
    }, Rx.prototype.matchDescriptor = function (r) {
        var o = this;
        return this.labeledDescriptors.map(function (t) {
            var e = t.descriptors, n = t.label;
            return new Nd(n, o.computeMeanDistance(r, e))
        }).reduce(function (t, e) {
            return t.distance < e.distance ? t : e
        })
    }, Rx.prototype.findBestMatch = function (t) {
        var e = this.matchDescriptor(t);
        return e.distance < this.distanceThreshold ? e : new Nd("unknown", e.distance)
    }, Rx.prototype.toJSON = function () {
        return {
            distanceThreshold: this.distanceThreshold,
            labeledDescriptors: this.labeledDescriptors.map(function (t) {
                return t.toJSON()
            })
        }
    }, Rx.fromJSON = function (t) {
        return new Rx(t.labeledDescriptors.map(function (t) {
            return Bd.fromJSON(t)
        }), t.distanceThreshold)
    }, Rx);

    function Rx(t, e) {
        void 0 === e && (e = .6), this._distanceThreshold = e;
        var n = Array.isArray(t) ? t : [t];
        if (!n.length) throw new Error("FaceRecognizer.constructor - expected atleast one input");

        function r() {
            return "person " + o++
        }

        var o = 1;
        this._labeledDescriptors = n.map(function (t) {
            if (t instanceof Bd) return t;
            if (t instanceof Float32Array) return new Bd(r(), [t]);
            if (t.descriptor && t.descriptor instanceof Float32Array) return new Bd(r(), [t.descriptor]);
            throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")
        })
    }

    c.AgeGenderNet = wm, c.BoundingBox = ud, c.Box = id, c.ComposableTask = Lg, c.ComputeAllFaceDescriptorsTask = Qy, c.ComputeFaceDescriptorsTaskBase = Yy, c.ComputeSingleFaceDescriptorTask = ex, c.DetectAllFaceLandmarksTask = sx, c.DetectAllFacesTask = mx, c.DetectFaceLandmarksTaskBase = ox, c.DetectFacesTaskBase = px, c.DetectSingleFaceLandmarksTask = lx, c.DetectSingleFaceTask = xx, c.Dimensions = Up, c.FACE_EXPRESSION_LABELS = Qv, c.FaceDetection = pd, c.FaceDetectionNet = dg, c.FaceExpressionNet = nm, c.FaceExpressions = Zv, c.FaceLandmark68Net = km, c.FaceLandmark68TinyNet = Fm, c.FaceLandmarkNet = Pm, c.FaceLandmarks = _d, c.FaceLandmarks5 = kd, c.FaceLandmarks68 = Ad, c.FaceMatch = Nd, c.FaceMatcher = Ix, c.FaceRecognitionNet = jm, c.LabeledBox = Od, c.LabeledFaceDescriptors = Bd, c.Mtcnn = oy, c.MtcnnOptions = Jm, c.NetInput = yv, c.NeuralNetwork = kv, c.ObjectDetection = ld, c.Point = rd, c.PredictedBox = Ud, c.Rect = Cd, c.SsdMobilenetv1 = lg, c.SsdMobilenetv1Options = sg, c.TinyFaceDetector = cy, c.TinyFaceDetectorOptions = Pg, c.TinyYolov2 = Fg, c.TinyYolov2Options = kg, c.allFaces = Ex, c.allFacesMtcnn = function (e, n) {
        return void 0 === n && (n = {}), Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return console.warn("allFacesMtcnn is deprecated and will be removed soon, use the high level api instead"), [4, wx(e, new Jm(n)).withFaceLandmarks().withFaceDescriptors()];
                    case 1:
                        return [2, t.sent()]
                }
            })
        })
    }, c.allFacesSsdMobilenetv1 = Cx, c.allFacesTinyYolov2 = function (e, n) {
        return void 0 === n && (n = {}), Lp(this, void 0, void 0, function () {
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return console.warn("allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead"), [4, wx(e, new kg(n)).withFaceLandmarks().withFaceDescriptors()];
                    case 1:
                        return [2, t.sent()]
                }
            })
        })
    }, c.awaitMediaLoaded = lv, c.bufferToImage = hv, c.computeFaceDescriptor = function (t) {
        return vy.faceRecognitionNet.computeFaceDescriptor(t)
    }, c.createCanvas = pv, c.createCanvasFromMedia = dv, c.createFaceDetectionNet = function (t) {
        return fg(t)
    }, c.createFaceRecognitionNet = function (t) {
        var e = new jm;
        return e.extractWeights(t), e
    }, c.createMtcnn = function (t) {
        var e = new oy;
        return e.extractWeights(t), e
    }, c.createSsdMobilenetv1 = fg, c.createTinyFaceDetector = function (t) {
        var e = new cy;
        return e.extractWeights(t), e
    }, c.createTinyYolov2 = function (t, e) {
        void 0 === e && (e = !0);
        var n = new Fg(e);
        return n.extractWeights(t), n
    }, c.detectAllFaces = wx, c.detectFaceLandmarks = fy, c.detectFaceLandmarksTiny = function (t) {
        return vy.faceLandmark68TinyNet.detectLandmarks(t)
    }, c.detectLandmarks = yy, c.detectSingleFace = function (t, e) {
        return void 0 === e && (e = new sg), new xx(t, e)
    }, c.draw = hm, c.env = tv, c.euclideanDistance = _x, c.extendWithAge = Ym, c.extendWithFaceDescriptor = Xm, c.extendWithFaceDetection = Hd, c.extendWithFaceExpressions = im, c.extendWithFaceLandmarks = sm, c.extendWithGender = $m, c.extractFaceTensors = Cv, c.extractFaces = wv, c.fetchImage = function (r) {
        return Lp(this, void 0, void 0, function () {
            var e, n;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, Ev(r)];
                    case 1:
                        return [4, (e = t.sent()).blob()];
                    case 2:
                        if (!(n = t.sent()).type.startsWith("image/")) throw new Error("fetchImage - expected blob type to be of type image/*, instead have: " + n.type + ", for url: " + e.url);
                        return [2, hv(n)]
                }
            })
        })
    }, c.fetchJson = _v, c.fetchNetWeights = function (n) {
        return Lp(this, void 0, void 0, function () {
            var e;
            return Wp(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = Float32Array.bind, [4, Ev(n)];
                    case 1:
                        return [4, t.sent().arrayBuffer()];
                    case 2:
                        return [2, new (e.apply(Float32Array, [void 0, t.sent()]))]
                }
            })
        })
    }, c.fetchOrThrow = Ev, c.getContext2dOrThrow = nv, c.getMediaDimensions = fv, c.imageTensorToCanvas = vv, c.imageToSquare = gv, c.inverseSigmoid = function (t) {
        return Math.log(t / (1 - t))
    }, c.iou = vd, c.isMediaElement = mv, c.isMediaLoaded = cv, c.isWithAge = function (t) {
        return "number" == typeof t.age
    }, c.isWithFaceDetection = Gd, c.isWithFaceExpressions = om, c.isWithFaceLandmarks = am, c.isWithGender = function (t) {
        return (t.gender === c.Gender.MALE || t.gender === c.Gender.FEMALE) && ed(t.genderProbability)
    }, c.loadAgeGenderModel = function (t) {
        return vy.ageGenderNet.load(t)
    }, c.loadFaceDetectionModel = my, c.loadFaceExpressionModel = function (t) {
        return vy.faceExpressionNet.load(t)
    }, c.loadFaceLandmarkModel = function (t) {
        return vy.faceLandmark68Net.load(t)
    }, c.loadFaceLandmarkTinyModel = function (t) {
        return vy.faceLandmark68TinyNet.load(t)
    }, c.loadFaceRecognitionModel = function (t) {
        return vy.faceRecognitionNet.load(t)
    }, c.loadMtcnnModel = function (t) {
        return vy.mtcnn.load(t)
    }, c.loadSsdMobilenetv1Model = py, c.loadTinyFaceDetectorModel = function (t) {
        return vy.tinyFaceDetector.load(t)
    },c.loadTinyYolov2Model = function (t) {
        return vy.tinyYolov2.load(t)
    },c.loadWeightMap = Rv,c.locateFaces = gy,c.matchDimensions = function (t, e, n) {
        void 0 === n && (n = !1);
        var r = n ? fv(e) : e, o = r.width, i = r.height;
        return {width: t.width = o, height: t.height = i}
    },c.minBbox = md,c.mtcnn = function (t, e) {
        return vy.mtcnn.forward(t, e)
    },c.nets = vy,c.nonMaxSuppression = gd,c.normalize = yd,c.padToSquare = xd,c.predictAgeAndGender = function (t) {
        return vy.ageGenderNet.predictAgeAndGender(t)
    },c.recognizeFaceExpressions = function (t) {
        return vy.faceExpressionNet.predictExpressions(t)
    },c.resizeResults = function e(t, n) {
        var r = new Up(n.width, n.height), o = r.width, i = r.height;
        if (o <= 0 || i <= 0) throw new Error("resizeResults - invalid dimensions: " + JSON.stringify({
            width: o,
            height: i
        }));
        if (Array.isArray(t)) return t.map(function (t) {
            return e(t, {width: o, height: i})
        });
        if (am(t)) {
            var a = t.detection.forSize(o, i), s = t.unshiftedLandmarks.forSize(a.box.width, a.box.height);
            return sm(Hd(t, a), s)
        }
        return Gd(t) ? Hd(t, t.detection.forSize(o, i)) : t instanceof _d || t instanceof pd ? t.forSize(o, i) : t
    },c.resolveInput = ev,c.shuffleArray = function (t) {
        for (var e = t.slice(), n = e.length - 1; 0 < n; n--) {
            var r = Math.floor(Math.random() * (n + 1)), o = e[n];
            e[n] = e[r], e[r] = o
        }
        return e
    },c.sigmoid = bd,c.ssdMobilenetv1 = hy,c.tf = Fp,c.tinyFaceDetector = function (t, e) {
        return vy.tinyFaceDetector.locateFaces(t, e)
    },c.tinyYolov2 = function (t, e) {
        return vy.tinyYolov2.locateFaces(t, e)
    },c.toNetInput = bv,c.utils = nd,c.validateConfig = wg,Object.defineProperty(c, "__esModule", {value: !0})
});