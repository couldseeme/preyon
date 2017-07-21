(function() {
    for (var a = 0, d = ["ms", "moz", "webkit", "o"], m = 0; m < d.length && !window.requestAnimationFrame; ++m) window.requestAnimationFrame = window[d[m] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[d[m] + "CancelAnimationFrame"] || window[d[m] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(d, m) {
        var h = (new Date).getTime(),
            n = Math.max(0, 16 - (h - a)),
            g = window.setTimeout(function() {
                d(h + n)
            }, n);
        a = h + n;
        return g
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame =
        function(a) {
            clearTimeout(a)
        });
    window.requestTimeout = function(a, d) {
        function h(r) {
            n || (n = r);
            r - n >= d ? a.call() : g.value = window.requestAnimationFrame(h)
        }
        var n = null,
            g = {};
        g.value = window.requestAnimationFrame(h);
        return g
    };
    window.clearRequestTimeout = function(a) {
        window.cancelAnimationFrame ? window.cancelAnimationFrame(a.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(a.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(a.value) : window.mozCancelRequestAnimationFrame ?
            window.mozCancelRequestAnimationFrame(a.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(a.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(a.value) : clearTimeout(a)
    }
})();
! function(a, d) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? d(a, !0) : function(a) {
        if (!a.document) throw Error("jQuery requires a window with a document");
        return d(a)
    } : d(a)
}("undefined" != typeof window ? window : this, function(a, d) {
    function m(e) {
        var D = !!e && "length" in e && e.length,
            a = c.type(e);
        return "function" === a || c.isWindow(e) ? !1 : "array" === a || 0 === D || "number" == typeof D && 0 < D && D - 1 in e
    }

    function k(e, D, a) {
        if (c.isFunction(D)) return c.grep(e, function(e, c) {
            return !!D.call(e, c, e) !==
                a
        });
        if (D.nodeType) return c.grep(e, function(e) {
            return e === D !== a
        });
        if ("string" == typeof D) {
            if (jb.test(D)) return c.filter(D, e, a);
            D = c.filter(D, e)
        }
        return c.grep(e, function(e) {
            return -1 < xa.call(D, e) !== a
        })
    }

    function p(e, c) {
        for (;
            (e = e[c]) && 1 !== e.nodeType;);
        return e
    }

    function h(e) {
        var D = {};
        return c.each(e.match(na) || [], function(e, c) {
            D[c] = !0
        }), D
    }

    function n() {
        F.removeEventListener("DOMContentLoaded", n);
        a.removeEventListener("load", n);
        c.ready()
    }

    function g() {
        this.expando = c.expando + g.uid++
    }

    function r(e, D, a) {
        var l;
        if (void 0 ===
            a && 1 === e.nodeType)
            if (l = "data-" + D.replace(Aa, "-$&").toLowerCase(), a = e.getAttribute(l), "string" == typeof a) {
                try {
                    a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : +a + "" === a ? +a : Ya.test(a) ? c.parseJSON(a) : a
                } catch (f) {}
                oa.set(e, D, a)
            } else a = void 0;
        return a
    }

    function s(e, D, a, l) {
        var f, b = 1,
            d = 20,
            q = l ? function() {
                return l.cur()
            } : function() {
                return c.css(e, D, "")
            },
            x = q(),
            B = a && a[3] || (c.cssNumber[D] ? "" : "px"),
            g = (c.cssNumber[D] || "px" !== B && +x) && za.exec(c.css(e, D));
        if (g && g[3] !== B) {
            B = B || g[3];
            a = a || [];
            g = +x || 1;
            do b = b || ".5", g /= b, c.style(e,
                D, g + B); while (b !== (b = q() / x) && 1 !== b && --d)
        }
        return a && (g = +g || +x || 0, f = a[1] ? g + (a[1] + 1) * a[2] : +a[2], l && (l.unit = B, l.start = g, l.end = f)), f
    }

    function z(e, D) {
        var a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(D || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(D || "*") : [];
        return void 0 === D || D && c.nodeName(e, D) ? c.merge([e], a) : a
    }

    function w(e, c) {
        for (var a = 0, l = e.length; l > a; a++) la.set(e[a], "globalEval", !c || la.get(c[a], "globalEval"))
    }

    function t(e, D, a, l, f) {
        for (var b, d, q, x, B = D.createDocumentFragment(),
                g = [], h = 0, n = e.length; n > h; h++)
            if (b = e[h], b || 0 === b)
                if ("object" === c.type(b)) c.merge(g, b.nodeType ? [b] : b);
                else if (kb.test(b)) {
            d = d || B.appendChild(D.createElement("div"));
            q = (Za.exec(b) || ["", ""])[1].toLowerCase();
            q = Ja[q] || Ja._default;
            d.innerHTML = q[1] + c.htmlPrefilter(b) + q[2];
            for (q = q[0]; q--;) d = d.lastChild;
            c.merge(g, d.childNodes);
            d = B.firstChild;
            d.textContent = ""
        } else g.push(D.createTextNode(b));
        B.textContent = "";
        for (h = 0; b = g[h++];)
            if (l && -1 < c.inArray(b, l)) f && f.push(b);
            else if (x = c.contains(b.ownerDocument, b), d = z(B.appendChild(b),
                "script"), x && w(d), a)
            for (q = 0; b = d[q++];) eb.test(b.type || "") && a.push(b);
        return B
    }

    function v() {
        return !0
    }

    function y() {
        return !1
    }

    function b() {
        try {
            return F.activeElement
        } catch (e) {}
    }

    function u(e, D, a, l, f, b) {
        var d, q;
        if ("object" == typeof D) {
            "string" != typeof a && (l = l || a, a = void 0);
            for (q in D) u(e, q, a, l, D[q], b);
            return e
        }
        if (null == l && null == f ? (f = a, l = a = void 0) : null == f && ("string" == typeof a ? (f = l, l = void 0) : (f = l, l = a, a = void 0)), !1 === f) f = y;
        else if (!f) return e;
        return 1 === b && (d = f, f = function(e) {
                return c().off(e), d.apply(this, arguments)
            },
            f.guid = d.guid || (d.guid = c.guid++)), e.each(function() {
            c.event.add(this, D, f, l, a)
        })
    }

    function H(e, D) {
        return c.nodeName(e, "table") && c.nodeName(11 !== D.nodeType ? D : D.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function J(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function C(e) {
        var c = nb.exec(e.type);
        return c ? e.type = c[1] : e.removeAttribute("type"), e
    }

    function N(e, D) {
        var a, l, f, b, d, q;
        if (1 === D.nodeType) {
            if (la.hasData(e) && (a = la.access(e),
                    l = la.set(D, a), q = a.events))
                for (f in delete l.handle, l.events = {}, q)
                    for (a = 0, l = q[f].length; l > a; a++) c.event.add(D, f, q[f][a]);
            oa.hasData(e) && (b = oa.access(e), d = c.extend({}, b), oa.set(D, d))
        }
    }

    function G(e, D, a, l) {
        D = ua.apply([], D);
        var f, b, d, x, B = 0,
            g = e.length,
            h = g - 1,
            n = D[0],
            R = c.isFunction(n);
        if (R || 1 < g && "string" == typeof n && !q.checkClone && Va.test(n)) return e.each(function(c) {
            var f = e.eq(c);
            R && (D[0] = n.call(this, c, f.html()));
            G(f, D, a, l)
        });
        if (g && (f = t(D, e[0].ownerDocument, !1, e, l), b = f.firstChild, 1 === f.childNodes.length &&
                (f = b), b || l)) {
            b = c.map(z(f, "script"), J);
            for (d = b.length; g > B; B++) x = f, B !== h && (x = c.clone(x, !0, !0), d && c.merge(b, z(x, "script"))), a.call(e[B], x, B);
            if (d)
                for (f = b[b.length - 1].ownerDocument, c.map(b, C), B = 0; d > B; B++) x = b[B], eb.test(x.type || "") && !la.access(x, "globalEval") && c.contains(f, x) && (x.src ? c._evalUrl && c._evalUrl(x.src) : c.globalEval(x.textContent.replace(ob, "")))
        }
        return e
    }

    function I(e, D, a) {
        for (var l = D ? c.filter(D, e) : e, f = 0; null != (D = l[f]); f++) a || 1 !== D.nodeType || c.cleanData(z(D)), D.parentNode && (a && c.contains(D.ownerDocument,
            D) && w(z(D, "script")), D.parentNode.removeChild(D));
        return e
    }

    function K(e, D) {
        var a = c(D.createElement(e)).appendTo(D.body),
            l = c.css(a[0], "display");
        return a.detach(), l
    }

    function A(e) {
        var D = F,
            a = Wa[e];
        return a || (a = K(e, D), "none" !== a && a || ($a = ($a || c("<iframe frameborder='0' width='0' height='0'/>")).appendTo(D.documentElement), D = $a[0].contentDocument, D.write(), D.close(), a = K(e, D), $a.detach()), Wa[e] = a), a
    }

    function W(e, D, a) {
        var l, f, b, d, x = e.style;
        return a = a || Pa(e), d = a ? a.getPropertyValue(D) || a[D] : void 0, "" !== d &&
            void 0 !== d || c.contains(e.ownerDocument, e) || (d = c.style(e, D)), a && !q.pixelMarginRight() && ab.test(d) && fb.test(D) && (l = x.width, f = x.minWidth, b = x.maxWidth, x.minWidth = x.maxWidth = x.width = d, d = a.width, x.width = l, x.minWidth = f, x.maxWidth = b), void 0 !== d ? d + "" : d
    }

    function Q(e, c) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = c).apply(this, arguments)
            }
        }
    }

    function S(e) {
        if (e in Fa) return e;
        for (var c = e[0].toUpperCase() + e.slice(1), a = B.length; a--;)
            if (e = B[a] + c, e in Fa) return e
    }

    function ga(e, c, a) {
        return (e = za.exec(c)) ?
            Math.max(0, e[2] - (a || 0)) + (e[3] || "px") : c
    }

    function O(e, a, l, f, b) {
        a = l === (f ? "border" : "content") ? 4 : "width" === a ? 1 : 0;
        for (var d = 0; 4 > a; a += 2) "margin" === l && (d += c.css(e, l + Ra[a], !0, b)), f ? ("content" === l && (d -= c.css(e, "padding" + Ra[a], !0, b)), "margin" !== l && (d -= c.css(e, "border" + Ra[a] + "Width", !0, b))) : (d += c.css(e, "padding" + Ra[a], !0, b), "padding" !== l && (d += c.css(e, "border" + Ra[a] + "Width", !0, b)));
        return d
    }

    function ea(e, D, l) {
        var f = !0,
            b = "width" === D ? e.offsetWidth : e.offsetHeight,
            d = Pa(e),
            x = "border-box" === c.css(e, "boxSizing", !1, d);
        if (F.msFullscreenElement && a.top !== a && e.getClientRects().length && (b = Math.round(100 * e.getBoundingClientRect()[D])), 0 >= b || null == b) {
            if (b = W(e, D, d), (0 > b || null == b) && (b = e.style[D]), ab.test(b)) return b;
            f = x && (q.boxSizingReliable() || b === e.style[D]);
            b = parseFloat(b) || 0
        }
        return b + O(e, D, l || (x ? "border" : "content"), f, d) + "px"
    }

    function fa(e, a) {
        for (var l, f, b, d = [], q = 0, x = e.length; x > q; q++) f = e[q], f.style && (d[q] = la.get(f, "olddisplay"), l = f.style.display, a ? (d[q] || "none" !== l || (f.style.display = ""), "" === f.style.display && Ma(f) &&
            (d[q] = la.access(f, "olddisplay", A(f.nodeName)))) : (b = Ma(f), "none" === l && b || la.set(f, "olddisplay", b ? l : c.css(f, "display"))));
        for (q = 0; x > q; q++) f = e[q], f.style && (a && "none" !== f.style.display && "" !== f.style.display || (f.style.display = a ? d[q] || "" : "none"));
        return e
    }

    function Y(e, c, a, f, l) {
        return new Y.prototype.init(e, c, a, f, l)
    }

    function X() {
        return a.setTimeout(function() {
            ya = void 0
        }), ya = c.now()
    }

    function U(e, c) {
        var a, f = 0,
            l = {
                height: e
            };
        for (c = c ? 1 : 0; 4 > f; f += 2 - c) a = Ra[f], l["margin" + a] = l["padding" + a] = e;
        return c && (l.opacity = l.width =
            e), l
    }

    function T(e, c, a) {
        for (var f, l = (V.tweeners[c] || []).concat(V.tweeners["*"]), b = 0, d = l.length; d > b; b++)
            if (f = l[b].call(a, c, e)) return f
    }

    function ia(e, a) {
        var f, l, b, d, q;
        for (f in e)
            if (l = c.camelCase(f), b = a[l], d = e[f], c.isArray(d) && (b = d[1], d = e[f] = d[0]), f !== l && (e[l] = d, delete e[f]), q = c.cssHooks[l], q && "expand" in q)
                for (f in d = q.expand(d), delete e[l], d) f in e || (e[f] = d[f], a[f] = b);
            else a[l] = b
    }

    function V(e, a, f) {
        var l, b = 0,
            d = V.prefilters.length,
            q = c.Deferred().always(function() {
                delete x.elem
            }),
            x = function() {
                if (l) return !1;
                for (var c = ya || X(), c = Math.max(0, B.startTime + B.duration - c), a = 1 - (c / B.duration || 0), D = 0, f = B.tweens.length; f > D; D++) B.tweens[D].run(a);
                return q.notifyWith(e, [B, a, c]), 1 > a && f ? c : (q.resolveWith(e, [B]), !1)
            },
            B = q.promise({
                elem: e,
                props: c.extend({}, a),
                opts: c.extend(!0, {
                    specialEasing: {},
                    easing: c.easing._default
                }, f),
                originalProperties: a,
                originalOptions: f,
                startTime: ya || X(),
                duration: f.duration,
                tweens: [],
                createTween: function(a, D) {
                    var f = c.Tween(e, B.opts, a, D, B.opts.specialEasing[a] || B.opts.easing);
                    return B.tweens.push(f),
                        f
                },
                stop: function(c) {
                    var a = 0,
                        D = c ? B.tweens.length : 0;
                    if (l) return this;
                    for (l = !0; D > a; a++) B.tweens[a].run(1);
                    return c ? (q.notifyWith(e, [B, 1, 0]), q.resolveWith(e, [B, c])) : q.rejectWith(e, [B, c]), this
                }
            });
        f = B.props;
        for (ia(f, B.opts.specialEasing); d > b; b++)
            if (a = V.prefilters[b].call(B, e, f, B.opts)) return c.isFunction(a.stop) && (c._queueHooks(B.elem, B.opts.queue).stop = c.proxy(a.stop, a)), a;
        return c.map(f, T, B), c.isFunction(B.opts.start) && B.opts.start.call(e, B), c.fx.timer(c.extend(x, {
                elem: e,
                anim: B,
                queue: B.opts.queue
            })),
            B.progress(B.opts.progress).done(B.opts.done, B.opts.complete).fail(B.opts.fail).always(B.opts.always)
    }

    function P(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ja(e) {
        return function(a, f) {
            "string" != typeof a && (f = a, a = "*");
            var l, b = 0,
                d = a.toLowerCase().match(na) || [];
            if (c.isFunction(f))
                for (; l = d[b++];) "+" === l[0] ? (l = l.slice(1) || "*", (e[l] = e[l] || []).unshift(f)) : (e[l] = e[l] || []).push(f)
        }
    }

    function ca(e, a, f, l) {
        function b(x) {
            var B;
            return d[x] = !0, c.each(e[x] || [], function(e, c) {
                var x = c(a, f, l);
                return "string" !=
                    typeof x || q || d[x] ? q ? !(B = x) : void 0 : (a.dataTypes.unshift(x), b(x), !1)
            }), B
        }
        var d = {},
            q = e === sb;
        return b(a.dataTypes[0]) || !d["*"] && b("*")
    }

    function ba(e, a) {
        var f, l, b = c.ajaxSettings.flatOptions || {};
        for (f in a) void 0 !== a[f] && ((b[f] ? e : l || (l = {}))[f] = a[f]);
        return l && c.extend(!0, e, l), e
    }

    function ha(e, a, f, l) {
        var b;
        if (c.isArray(a)) c.each(a, function(c, a) {
            f || Fb.test(e) ? l(e, a) : ha(e + "[" + ("object" == typeof a && null != a ? c : "") + "]", a, f, l)
        });
        else if (f || "object" !== c.type(a)) l(e, a);
        else
            for (b in a) ha(e + "[" + b + "]", a[b], f, l)
    }
    var L = [],
        F = a.document,
        ka = L.slice,
        ua = L.concat,
        sa = L.push,
        xa = L.indexOf,
        da = {},
        qa = da.toString,
        f = da.hasOwnProperty,
        q = {},
        c = function(e, a) {
            return new c.fn.init(e, a)
        },
        M = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        aa = /^-ms-/,
        Z = /-([\da-z])/gi,
        Ga = function(e, c) {
            return c.toUpperCase()
        };
    c.fn = c.prototype = {
        jquery: "2.2.3",
        constructor: c,
        selector: "",
        length: 0,
        toArray: function() {
            return ka.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : ka.call(this)
        },
        pushStack: function(e) {
            e = c.merge(this.constructor(), e);
            return e.prevObject =
                this, e.context = this.context, e
        },
        each: function(e) {
            return c.each(this, e)
        },
        map: function(e) {
            return this.pushStack(c.map(this, function(c, a) {
                return e.call(c, a, c)
            }))
        },
        slice: function() {
            return this.pushStack(ka.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var c = this.length;
            e = +e + (0 > e ? c : 0);
            return this.pushStack(0 <= e && c > e ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: sa,
        sort: L.sort,
        splice: L.splice
    };
    c.extend = c.fn.extend =
        function() {
            var e, a, f, l, b, d, q = arguments[0] || {},
                x = 1,
                B = arguments.length,
                g = !1;
            "boolean" == typeof q && (g = q, q = arguments[x] || {}, x++);
            "object" == typeof q || c.isFunction(q) || (q = {});
            for (x === B && (q = this, x--); B > x; x++)
                if (null != (e = arguments[x]))
                    for (a in e) f = q[a], l = e[a], q !== l && (g && l && (c.isPlainObject(l) || (b = c.isArray(l))) ? (b ? (b = !1, d = f && c.isArray(f) ? f : []) : d = f && c.isPlainObject(f) ? f : {}, q[a] = c.extend(g, d, l)) : void 0 !== l && (q[a] = l));
            return q
        };
    c.extend({
        expando: "jQuery" + ("2.2.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === c.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var a = e && e.toString();
            return !c.isArray(e) && 0 <= a - parseFloat(a) + 1
        },
        isPlainObject: function(e) {
            var a;
            if ("object" !== c.type(e) || (e.nodeType || c.isWindow(e)) || e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (a in e);
            return void 0 === a || f.call(e, a)
        },
        isEmptyObject: function(e) {
            for (var c in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? da[qa.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var a, f = eval;
            (e = c.trim(e)) && (1 === e.indexOf("use strict") ? (a = F.createElement("script"), a.text = e, F.head.appendChild(a).parentNode.removeChild(a)) : f(e))
        },
        camelCase: function(e) {
            return e.replace(aa, "ms-").replace(Z, Ga)
        },
        nodeName: function(e, c) {
            return e.nodeName && e.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(e, c) {
            var a, f = 0;
            if (m(e))
                for (a = e.length; a >
                    f && !1 !== c.call(e[f], f, e[f]); f++);
            else
                for (f in e)
                    if (!1 === c.call(e[f], f, e[f])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(M, "")
        },
        makeArray: function(e, a) {
            var f = a || [];
            return null != e && (m(Object(e)) ? c.merge(f, "string" == typeof e ? [e] : e) : sa.call(f, e)), f
        },
        inArray: function(e, c, a) {
            return null == c ? -1 : xa.call(c, e, a)
        },
        merge: function(e, c) {
            for (var a = +c.length, f = 0, l = e.length; a > f; f++) e[l++] = c[f];
            return e.length = l, e
        },
        grep: function(e, c, a) {
            for (var f = [], l = 0, b = e.length, d = !a; b > l; l++) a = !c(e[l], l), a !==
                d && f.push(e[l]);
            return f
        },
        map: function(e, c, a) {
            var f, l, b = 0,
                d = [];
            if (m(e))
                for (f = e.length; f > b; b++) l = c(e[b], b, a), null != l && d.push(l);
            else
                for (b in e) l = c(e[b], b, a), null != l && d.push(l);
            return ua.apply([], d)
        },
        guid: 1,
        proxy: function(e, a) {
            var f, l, b;
            return "string" == typeof a && (f = e[a], a = e, e = f), c.isFunction(e) ? (l = ka.call(arguments, 2), b = function() {
                return e.apply(a || this, l.concat(ka.call(arguments)))
            }, b.guid = e.guid = e.guid || c.guid++, b) : void 0
        },
        now: Date.now,
        support: q
    });
    "function" == typeof Symbol && (c.fn[Symbol.iterator] =
        L[Symbol.iterator]);
    c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, c) {
        da["[object " + c + "]"] = c.toLowerCase()
    });
    var pa = function(e) {
        function c(e, a, f, l) {
            var D, b, d, q, x, B = a && a.ownerDocument,
                ta = a ? a.nodeType : 9;
            if (f = f || [], "string" != typeof e || !e || 1 !== ta && 9 !== ta && 11 !== ta) return f;
            if (!l && ((a ? a.ownerDocument || a : C) !== Z && t(a), a = a || Z, s)) {
                if (11 !== ta && (q = ca.exec(e)))
                    if (D = q[1])
                        if (9 === ta) {
                            if (!(b = a.getElementById(D))) return f;
                            if (b.id === D) return f.push(b), f
                        } else {
                            if (B &&
                                (b = B.getElementById(D)) && qa(a, b) && b.id === D) return f.push(b), f
                        } else {
                    if (q[2]) return sa.apply(f, a.getElementsByTagName(e)), f;
                    if ((D = q[3]) && r.getElementsByClassName && a.getElementsByClassName) return sa.apply(f, a.getElementsByClassName(D)), f
                }
                if (r.qsa && !(pa[e + " "] || y && y.test(e))) {
                    if (1 !== ta) B = a, x = e;
                    else if ("object" !== a.nodeName.toLowerCase()) {
                        (d = a.getAttribute("id")) ? d = d.replace(V, "\\$&"): a.setAttribute("id", d = ra);
                        q = p(e);
                        D = q.length;
                        for (b = Ka.test(d) ? "#" + d : "[id='" + d + "']"; D--;) q[D] = b + " " + n(q[D]);
                        x = q.join(",");
                        B = T.test(e) && g(a.parentNode) || a
                    }
                    if (x) try {
                        return sa.apply(f, B.querySelectorAll(x)), f
                    } catch (h) {} finally {
                        d === ra && a.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(db, "$1"), a, f, l)
        }

        function a() {
            function e(a, f) {
                return c.push(a + " ") > F.cacheLength && delete e[c.shift()], e[a + " "] = f
            }
            var c = [];
            return e
        }

        function f(e) {
            return e[ra] = !0, e
        }

        function l(e) {
            var c = Z.createElement("div");
            try {
                return !!e(c)
            } catch (a) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        }

        function b(e, c) {
            for (var a = e.split("|"), f = a.length; f--;) F.attrHandle[a[f]] =
                c
        }

        function d(e, c) {
            var a = c && e,
                f = a && 1 === e.nodeType && 1 === c.nodeType && (~c.sourceIndex || H) - (~e.sourceIndex || H);
            if (f) return f;
            if (a)
                for (; a = a.nextSibling;)
                    if (a === c) return -1;
            return e ? 1 : -1
        }

        function q(e) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === e
            }
        }

        function x(e) {
            return function(c) {
                var a = c.nodeName.toLowerCase();
                return ("input" === a || "button" === a) && c.type === e
            }
        }

        function B(e) {
            return f(function(c) {
                return c = +c, f(function(a, f) {
                    for (var l, D = e([], a.length, c), b = D.length; b--;) a[l = D[b]] && (a[l] = !(f[l] = a[l]))
                })
            })
        }

        function g(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function h() {}

        function n(e) {
            for (var c = 0, a = e.length, f = ""; a > c; c++) f += e[c].value;
            return f
        }

        function R(e, c, a) {
            var f = c.dir,
                l = a && "parentNode" === f,
                D = Ga++;
            return c.first ? function(c, a, D) {
                for (; c = c[f];)
                    if (1 === c.nodeType || l) return e(c, a, D)
            } : function(c, a, b) {
                var d, q, x, B = [z, D];
                if (b)
                    for (; c = c[f];) {
                        if ((1 === c.nodeType || l) && e(c, a, b)) return !0
                    } else
                        for (; c = c[f];)
                            if (1 === c.nodeType || l) {
                                if (x = c[ra] || (c[ra] = {}), q = x[c.uniqueID] || (x[c.uniqueID] = {}), (d = q[f]) && d[0] === z && d[1] === D) return B[2] = d[2];
                                if (q[f] = B, B[2] = e(c, a, b)) return !0
                            }
            }
        }

        function E(e) {
            return 1 < e.length ? function(c, a, f) {
                for (var l = e.length; l--;)
                    if (!e[l](c, a, f)) return !1;
                return !0
            } : e[0]
        }

        function Ia(e, c, a, f, l) {
            for (var D, b = [], d = 0, q = e.length, x = null != c; q > d; d++)(D = e[d]) && (a && !a(D, f, l) || (b.push(D), x && c.push(d)));
            return b
        }

        function ma(e, a, l, b, d, q) {
            return b && !b[ra] && (b = ma(b)), d && !d[ra] && (d = ma(d, q)), f(function(f, q, x, B) {
                var ta, g, h = [],
                    La = [],
                    n = q.length,
                    R;
                if (!(R = f)) {
                    R = a || "*";
                    for (var E = x.nodeType ? [x] :
                            x, ma = [], L = 0, F = E.length; F > L; L++) c(R, E[L], ma);
                    R = ma
                }
                R = !e || !f && a ? R : Ia(R, h, e, x, B);
                E = l ? d || (f ? e : n || b) ? [] : q : R;
                if (l && l(R, E, x, B), b)
                    for (ta = Ia(E, La), b(ta, [], x, B), x = ta.length; x--;)(g = ta[x]) && (E[La[x]] = !(R[La[x]] = g));
                if (f) {
                    if (d || e) {
                        if (d) {
                            ta = [];
                            for (x = E.length; x--;)(g = E[x]) && ta.push(R[x] = g);
                            d(null, E = [], ta, B)
                        }
                        for (x = E.length; x--;)(g = E[x]) && -1 < (ta = d ? J(f, g) : h[x]) && (f[ta] = !(q[ta] = g))
                    }
                } else E = Ia(E === q ? E.splice(n, E.length) : E), d ? d(null, q, E, B) : sa.apply(q, E)
            })
        }

        function L(e) {
            var c, a, f, l = e.length,
                D = F.relative[e[0].type];
            a = D ||
                F.relative[" "];
            for (var b = D ? 1 : 0, d = R(function(e) {
                    return e === c
                }, a, !0), q = R(function(e) {
                    return -1 < J(c, e)
                }, a, !0), x = [function(e, a, f) {
                    e = !D && (f || a !== ka) || ((c = a).nodeType ? d(e, a, f) : q(e, a, f));
                    return c = null, e
                }]; l > b; b++)
                if (a = F.relative[e[b].type]) x = [R(E(x), a)];
                else {
                    if (a = F.filter[e[b].type].apply(null, e[b].matches), a[ra]) {
                        for (f = ++b; l > f && !F.relative[e[f].type]; f++);
                        return ma(1 < b && E(x), 1 < b && n(e.slice(0, b - 1).concat({
                                value: " " === e[b - 2].type ? "*" : ""
                            })).replace(db, "$1"), a, f > b && L(e.slice(b, f)), l > f && L(e = e.slice(f)), l > f &&
                            n(e))
                    }
                    x.push(a)
                }
            return E(x)
        }

        function ya(e, a) {
            var l = 0 < a.length,
                b = 0 < e.length,
                d = function(f, d, q, x, B) {
                    var ta, g, h, La = 0,
                        R = "0",
                        n = f && [],
                        E = [],
                        L = ka,
                        ma = f || b && F.find.TAG("*", B),
                        wa = z += null == L ? 1 : Math.random() || 0.1,
                        r = ma.length;
                    for (B && (ka = d === Z || d || B); R !== r && null != (ta = ma[R]); R++) {
                        if (b && ta) {
                            g = 0;
                            for (d || ta.ownerDocument === Z || (t(ta), q = !s); h = e[g++];)
                                if (h(ta, d || Z, q)) {
                                    x.push(ta);
                                    break
                                }
                            B && (z = wa)
                        }
                        l && ((ta = !h && ta) && La--, f && n.push(ta))
                    }
                    if (La += R, l && R !== La) {
                        for (g = 0; h = a[g++];) h(n, E, d, q);
                        if (f) {
                            if (0 < La)
                                for (; R--;) n[R] || E[R] || (E[R] =
                                    K.call(x));
                            E = Ia(E)
                        }
                        sa.apply(x, E);
                        B && !f && 0 < E.length && 1 < La + a.length && c.uniqueSort(x)
                    }
                    return B && (z = wa, ka = L), n
                };
            return l ? f(d) : d
        }
        var wa, r, F, m, k, p, Ca, u, ka, M, w, t, Z, v, s, y, Fa, A, qa, ra = "sizzle" + 1 * new Date,
            C = e.document,
            z = 0,
            Ga = 0,
            da = a(),
            aa = a(),
            pa = a(),
            pb = function(e, c) {
                return e === c && (w = !0), 0
            },
            H = -2147483648,
            ua = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            xa = G.push,
            sa = G.push,
            rb = G.slice,
            J = function(e, c) {
                for (var a = 0, f = e.length; f > a; a++)
                    if (e[a] === c) return a;
                return -1
            },
            I = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
            db = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"),
            N = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            W = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            ja = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            Q = RegExp(":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            Ka = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            S = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
                PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                    "i")
            },
            ba = /^(?:input|select|textarea|button)$/i,
            Ua = /^h\d$/i,
            O = /^[^{]+\{\s*\[native \w/,
            ca = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            T = /[+~]/,
            V = /'|\\/g,
            Oa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            P = function(e, c, a) {
                e = "0x" + c - 65536;
                return e !== e || a ? c : 0 > e ? String.fromCharCode(e + 65536) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320)
            },
            ha = function() {
                t()
            };
        try {
            sa.apply(G = rb.call(C.childNodes), C.childNodes), G[C.childNodes.length].nodeType
        } catch (Ea) {
            sa = {
                apply: G.length ? function(e, c) {
                    xa.apply(e,
                        rb.call(c))
                } : function(e, c) {
                    for (var a = e.length, f = 0; e[a++] = c[f++];);
                    e.length = a - 1
                }
            }
        }
        r = c.support = {};
        k = c.isXML = function(e) {
            return (e = e && (e.ownerDocument || e).documentElement) ? "HTML" !== e.nodeName : !1
        };
        t = c.setDocument = function(e) {
            var c, a;
            e = e ? e.ownerDocument || e : C;
            return e !== Z && 9 === e.nodeType && e.documentElement ? (Z = e, v = Z.documentElement, s = !k(Z), (a = Z.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", ha, !1) : a.attachEvent && a.attachEvent("onunload", ha)), r.attributes = l(function(e) {
                    return e.className =
                        "i", !e.getAttribute("className")
                }), r.getElementsByTagName = l(function(e) {
                    return e.appendChild(Z.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = O.test(Z.getElementsByClassName), r.getById = l(function(e) {
                    return v.appendChild(e).id = ra, !Z.getElementsByName || !Z.getElementsByName(ra).length
                }), r.getById ? (F.find.ID = function(e, c) {
                    if ("undefined" != typeof c.getElementById && s) {
                        var a = c.getElementById(e);
                        return a ? [a] : []
                    }
                }, F.filter.ID = function(e) {
                    var c = e.replace(Oa, P);
                    return function(e) {
                        return e.getAttribute("id") ===
                            c
                    }
                }) : (delete F.find.ID, F.filter.ID = function(e) {
                    var c = e.replace(Oa, P);
                    return function(e) {
                        return (e = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id")) && e.value === c
                    }
                }), F.find.TAG = r.getElementsByTagName ? function(e, c) {
                    return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(e) : r.qsa ? c.querySelectorAll(e) : void 0
                } : function(e, c) {
                    var a, f = [],
                        l = 0,
                        D = c.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; a = D[l++];) 1 === a.nodeType && f.push(a);
                        return f
                    }
                    return D
                }, F.find.CLASS = r.getElementsByClassName &&
                function(e, c) {
                    return "undefined" != typeof c.getElementsByClassName && s ? c.getElementsByClassName(e) : void 0
                }, Fa = [], y = [], (r.qsa = O.test(Z.querySelectorAll)) && (l(function(e) {
                    v.appendChild(e).innerHTML = "<a id='" + ra + "'></a><select id='" + ra + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                    e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    e.querySelectorAll("[selected]").length || y.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    e.querySelectorAll("[id~=" + ra + "-]").length || y.push("~=");
                    e.querySelectorAll(":checked").length || y.push(":checked");
                    e.querySelectorAll("a#" + ra + "+*").length || y.push(".#.+[+~]")
                }), l(function(e) {
                    var c = Z.createElement("input");
                    c.setAttribute("type", "hidden");
                    e.appendChild(c).setAttribute("name", "D");
                    e.querySelectorAll("[name=d]").length && y.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled");
                    e.querySelectorAll("*,:x");
                    y.push(",.*:")
                })), (r.matchesSelector =
                    O.test(A = v.matches || v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector)) && l(function(e) {
                    r.disconnectedMatch = A.call(e, "div");
                    A.call(e, "[s!='']:x");
                    Fa.push("!=", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                }),
                y = y.length && RegExp(y.join("|")), Fa = Fa.length && RegExp(Fa.join("|")), c = O.test(v.compareDocumentPosition), qa = c || O.test(v.contains) ? function(e, c) {
                    var a = 9 === e.nodeType ? e.documentElement : e,
                        f = c && c.parentNode;
                    return e === f || !(!f || 1 !== f.nodeType || !(a.contains ? a.contains(f) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(f)))
                } : function(e, c) {
                    if (c)
                        for (; c = c.parentNode;)
                            if (c === e) return !0;
                    return !1
                }, pb = c ? function(e, c) {
                    if (e === c) return w = !0, 0;
                    var a = !e.compareDocumentPosition - !c.compareDocumentPosition;
                    return a ?
                        a : (a = (e.ownerDocument || e) === (c.ownerDocument || c) ? e.compareDocumentPosition(c) : 1, 1 & a || !r.sortDetached && c.compareDocumentPosition(e) === a ? e === Z || e.ownerDocument === C && qa(C, e) ? -1 : c === Z || c.ownerDocument === C && qa(C, c) ? 1 : M ? J(M, e) - J(M, c) : 0 : 4 & a ? -1 : 1)
                } : function(e, c) {
                    if (e === c) return w = !0, 0;
                    var a, f = 0;
                    a = e.parentNode;
                    var l = c.parentNode,
                        D = [e],
                        b = [c];
                    if (!a || !l) return e === Z ? -1 : c === Z ? 1 : a ? -1 : l ? 1 : M ? J(M, e) - J(M, c) : 0;
                    if (a === l) return d(e, c);
                    for (a = e; a = a.parentNode;) D.unshift(a);
                    for (a = c; a = a.parentNode;) b.unshift(a);
                    for (; D[f] ===
                        b[f];) f++;
                    return f ? d(D[f], b[f]) : D[f] === C ? -1 : b[f] === C ? 1 : 0
                }, Z) : Z
        };
        c.matches = function(e, a) {
            return c(e, null, null, a)
        };
        c.matchesSelector = function(e, a) {
            if ((e.ownerDocument || e) !== Z && t(e), a = a.replace(ja, "='$1']"), r.matchesSelector && s && !(pa[a + " "] || Fa && Fa.test(a) || y && y.test(a))) try {
                var f = A.call(e, a);
                if (f || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return f
            } catch (l) {}
            return 0 < c(a, Z, null, [e]).length
        };
        c.contains = function(e, c) {
            return (e.ownerDocument || e) !== Z && t(e), qa(e, c)
        };
        c.attr = function(e, c) {
            (e.ownerDocument ||
                e) !== Z && t(e);
            var a = F.attrHandle[c.toLowerCase()],
                a = a && ua.call(F.attrHandle, c.toLowerCase()) ? a(e, c, !s) : void 0;
            return void 0 !== a ? a : r.attributes || !s ? e.getAttribute(c) : (a = e.getAttributeNode(c)) && a.specified ? a.value : null
        };
        c.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        };
        c.uniqueSort = function(e) {
            var c, a = [],
                f = 0,
                l = 0;
            if (w = !r.detectDuplicates, M = !r.sortStable && e.slice(0), e.sort(pb), w) {
                for (; c = e[l++];) c === e[l] && (f = a.push(l));
                for (; f--;) e.splice(a[f], 1)
            }
            return M = null, e
        };
        m = c.getText =
            function(e) {
                var c, a = "",
                    f = 0;
                if (c = e.nodeType)
                    if (1 === c || 9 === c || 11 === c) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) a += m(e)
                    } else {
                        if (3 === c || 4 === c) return e.nodeValue
                    } else
                    for (; c = e[f++];) a += m(c);
                return a
            };
        F = c.selectors = {
            cacheLength: 50,
            createPseudo: f,
            match: S,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Oa,
                        P), e[3] = (e[3] || e[4] || e[5] || "").replace(Oa, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || c.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && c.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var c, a = !e[6] && e[2];
                    return S.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : a && Q.test(a) && (c = p(a, !0)) && (c = a.indexOf(")", a.length - c) - a.length) && (e[0] = e[0].slice(0, c), e[2] = a.slice(0,
                        c)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var c = e.replace(Oa, P).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === c
                    }
                },
                CLASS: function(e) {
                    var c = da[e + " "];
                    return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "([\\x20\\t\\r\\n\\f]|$)")) && da(e, function(e) {
                        return c.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, a, f) {
                    return function(l) {
                        l = c.attr(l, e);
                        return null == l ? "!=" ===
                            a : a ? (l += "", "=" === a ? l === f : "!=" === a ? l !== f : "^=" === a ? f && 0 === l.indexOf(f) : "*=" === a ? f && -1 < l.indexOf(f) : "$=" === a ? f && l.slice(-f.length) === f : "~=" === a ? -1 < (" " + l.replace(I, " ") + " ").indexOf(f) : "|=" === a ? l === f || l.slice(0, f.length + 1) === f + "-" : !1) : !0
                    }
                },
                CHILD: function(e, c, a, f, l) {
                    var D = "nth" !== e.slice(0, 3),
                        b = "last" !== e.slice(-4),
                        d = "of-type" === c;
                    return 1 === f && 0 === l ? function(e) {
                        return !!e.parentNode
                    } : function(c, a, q) {
                        var x, B, ta, g, h, R;
                        a = D !== b ? "nextSibling" : "previousSibling";
                        var La = c.parentNode,
                            n = d && c.nodeName.toLowerCase();
                        q = !q && !d;
                        var E = !1;
                        if (La) {
                            if (D) {
                                for (; a;) {
                                    for (g = c; g = g[a];)
                                        if (d ? g.nodeName.toLowerCase() === n : 1 === g.nodeType) return !1;
                                    R = a = "only" === e && !R && "nextSibling"
                                }
                                return !0
                            }
                            if (R = [b ? La.firstChild : La.lastChild], b && q)
                                for (g = La, ta = g[ra] || (g[ra] = {}), B = ta[g.uniqueID] || (ta[g.uniqueID] = {}), x = B[e] || [], E = (h = x[0] === z && x[1]) && x[2], g = h && La.childNodes[h]; g = ++h && g && g[a] || (E = h = 0) || R.pop();) {
                                    if (1 === g.nodeType && ++E && g === c) {
                                        B[e] = [z, h, E];
                                        break
                                    }
                                } else if (q && (g = c, ta = g[ra] || (g[ra] = {}), B = ta[g.uniqueID] || (ta[g.uniqueID] = {}), x = B[e] || [], h = x[0] ===
                                        z && x[1], E = h), !1 === E)
                                    for (;
                                        (g = ++h && g && g[a] || (E = h = 0) || R.pop()) && ((d ? g.nodeName.toLowerCase() !== n : 1 !== g.nodeType) || !++E || (q && (ta = g[ra] || (g[ra] = {}), B = ta[g.uniqueID] || (ta[g.uniqueID] = {}), B[e] = [z, E]), g !== c)););
                            return E -= l, E === f || 0 === E % f && 0 <= E / f
                        }
                    }
                },
                PSEUDO: function(e, a) {
                    var l, b = F.pseudos[e] || F.setFilters[e.toLowerCase()] || c.error("unsupported pseudo: " + e);
                    return b[ra] ? b(a) : 1 < b.length ? (l = [e, e, "", a], F.setFilters.hasOwnProperty(e.toLowerCase()) ? f(function(e, c) {
                        for (var f, l = b(e, a), D = l.length; D--;) f = J(e, l[D]), e[f] = !(c[f] = l[D])
                    }) : function(e) {
                        return b(e, 0, l)
                    }) : b
                }
            },
            pseudos: {
                not: f(function(e) {
                    var c = [],
                        a = [],
                        l = Ca(e.replace(db, "$1"));
                    return l[ra] ? f(function(e, c, a, f) {
                        var D;
                        a = l(e, null, f, []);
                        for (f = e.length; f--;)(D = a[f]) && (e[f] = !(c[f] = D))
                    }) : function(e, f, D) {
                        return c[0] = e, l(c, null, D, a), c[0] = null, !a.pop()
                    }
                }),
                has: f(function(e) {
                    return function(a) {
                        return 0 < c(e, a).length
                    }
                }),
                contains: f(function(e) {
                    return e = e.replace(Oa, P),
                        function(c) {
                            return -1 < (c.textContent || c.innerText || m(c)).indexOf(e)
                        }
                }),
                lang: f(function(e) {
                    return Ka.test(e ||
                            "") || c.error("unsupported lang: " + e), e = e.replace(Oa, P).toLowerCase(),
                        function(c) {
                            var a;
                            do
                                if (a = s ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return a = a.toLowerCase(), a === e || 0 === a.indexOf(e + "-");
                            while ((c = c.parentNode) && 1 === c.nodeType);
                            return !1
                        }
                }),
                target: function(c) {
                    var a = e.location && e.location.hash;
                    return a && a.slice(1) === c.id
                },
                root: function(e) {
                    return e === v
                },
                focus: function(e) {
                    return e === Z.activeElement && (!Z.hasFocus || Z.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 ===
                        e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var c = e.nodeName.toLowerCase();
                    return "input" === c && !!e.checked || "option" === c && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (6 > e.nodeType) return !1;
                    return !0
                },
                parent: function(e) {
                    return !F.pseudos.empty(e)
                },
                header: function(e) {
                    return Ua.test(e.nodeName)
                },
                input: function(e) {
                    return ba.test(e.nodeName)
                },
                button: function(e) {
                    var c =
                        e.nodeName.toLowerCase();
                    return "input" === c && "button" === e.type || "button" === c
                },
                text: function(e) {
                    var c;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (c = e.getAttribute("type")) || "text" === c.toLowerCase())
                },
                first: B(function() {
                    return [0]
                }),
                last: B(function(e, c) {
                    return [c - 1]
                }),
                eq: B(function(e, c, a) {
                    return [0 > a ? a + c : a]
                }),
                even: B(function(e, c) {
                    for (var a = 0; c > a; a += 2) e.push(a);
                    return e
                }),
                odd: B(function(e, c) {
                    for (var a = 1; c > a; a += 2) e.push(a);
                    return e
                }),
                lt: B(function(e, c, a) {
                    for (c = 0 > a ? a + c : a; 0 <= --c;) e.push(c);
                    return e
                }),
                gt: B(function(e, c, a) {
                    for (a = 0 > a ? a + c : a; ++a < c;) e.push(a);
                    return e
                })
            }
        };
        F.pseudos.nth = F.pseudos.eq;
        for (wa in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) F.pseudos[wa] = q(wa);
        for (wa in {
                submit: !0,
                reset: !0
            }) F.pseudos[wa] = x(wa);
        h.prototype = F.filters = F.pseudos;
        F.setFilters = new h;
        p = c.tokenize = function(e, a) {
            var f, l, b, d, q, x, B;
            if (q = aa[e + " "]) return a ? 0 : q.slice(0);
            q = e;
            x = [];
            for (B = F.preFilter; q;) {
                f && !(l = N.exec(q)) || (l && (q = q.slice(l[0].length) || q), x.push(b = []));
                f = !1;
                (l = W.exec(q)) && (f = l.shift(), b.push({
                    value: f,
                    type: l[0].replace(db, " ")
                }), q = q.slice(f.length));
                for (d in F.filter) !(l = S[d].exec(q)) || B[d] && !(l = B[d](l)) || (f = l.shift(), b.push({
                    value: f,
                    type: d,
                    matches: l
                }), q = q.slice(f.length));
                if (!f) break
            }
            return a ? q.length : q ? c.error(e) : aa(e, x).slice(0)
        };
        return Ca = c.compile = function(e, c) {
            var a, f = [],
                l = [],
                D = pa[e + " "];
            if (!D) {
                c || (c = p(e));
                for (a = c.length; a--;) D = L(c[a]), D[ra] ? f.push(D) : l.push(D);
                D = pa(e, ya(l, f));
                D.selector = e
            }
            return D
        }, u = c.select = function(e, c, a, f) {
            var l, D, b, d, q, x = "function" == typeof e && e,
                B = !f && p(e = x.selector ||
                    e);
            if (a = a || [], 1 === B.length) {
                if (D = B[0] = B[0].slice(0), 2 < D.length && "ID" === (b = D[0]).type && r.getById && 9 === c.nodeType && s && F.relative[D[1].type]) {
                    if (c = (F.find.ID(b.matches[0].replace(Oa, P), c) || [])[0], !c) return a;
                    x && (c = c.parentNode);
                    e = e.slice(D.shift().value.length)
                }
                for (l = S.needsContext.test(e) ? 0 : D.length; l-- && (b = D[l], !F.relative[d = b.type]);)
                    if ((q = F.find[d]) && (f = q(b.matches[0].replace(Oa, P), T.test(D[0].type) && g(c.parentNode) || c))) {
                        if (D.splice(l, 1), e = f.length && n(D), !e) return sa.apply(a, f), a;
                        break
                    }
            }
            return (x ||
                Ca(e, B))(f, c, !s, a, !c || T.test(e) && g(c.parentNode) || c), a
        }, r.sortStable = ra.split("").sort(pb).join("") === ra, r.detectDuplicates = !!w, t(), r.sortDetached = l(function(e) {
            return 1 & e.compareDocumentPosition(Z.createElement("div"))
        }), l(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || b("type|href|height|width", function(e, c, a) {
            return a ? void 0 : e.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
        }), r.attributes && l(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value",
                ""), "" === e.firstChild.getAttribute("value")
        }) || b("value", function(e, c, a) {
            return a || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), l(function(e) {
            return null == e.getAttribute("disabled")
        }) || b("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(e, c, a) {
            var f;
            return a ? void 0 : !0 === e[c] ? c.toLowerCase() : (f = e.getAttributeNode(c)) && f.specified ? f.value : null
        }), c
    }(a);
    c.find = pa;
    c.expr = pa.selectors;
    c.expr[":"] = c.expr.pseudos;
    c.uniqueSort = c.unique = pa.uniqueSort;
    c.text = pa.getText;
    c.isXMLDoc = pa.isXML;
    c.contains = pa.contains;
    var Ka = function(e, a, f) {
            for (var l = [], b = void 0 !== f;
                (e = e[a]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (b && c(e).is(f)) break;
                    l.push(e)
                }
            return l
        },
        Ua = function(e, c) {
            for (var a = []; e; e = e.nextSibling) 1 === e.nodeType && e !== c && a.push(e);
            return a
        },
        bb = c.expr.match.needsContext,
        Xa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        jb = /^.[^:#\[\.,]*$/;
    c.filter = function(e, a, f) {
        var l = a[0];
        return f && (e = ":not(" + e + ")"), 1 === a.length && 1 === l.nodeType ?
            c.find.matchesSelector(l, e) ? [l] : [] : c.find.matches(e, c.grep(a, function(e) {
                return 1 === e.nodeType
            }))
    };
    c.fn.extend({
        find: function(e) {
            var a, f = this.length,
                l = [],
                b = this;
            if ("string" != typeof e) return this.pushStack(c(e).filter(function() {
                for (a = 0; f > a; a++)
                    if (c.contains(b[a], this)) return !0
            }));
            for (a = 0; f > a; a++) c.find(e, b[a], l);
            return l = this.pushStack(1 < f ? c.unique(l) : l), l.selector = this.selector ? this.selector + " " + e : e, l
        },
        filter: function(e) {
            return this.pushStack(k(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(k(this,
                e || [], !0))
        },
        is: function(e) {
            return !!k(this, "string" == typeof e && bb.test(e) ? c(e) : e || [], !1).length
        }
    });
    var Ea, lb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (c.fn.init = function(e, a, f) {
        var l, b;
        if (!e) return this;
        if (f = f || Ea, "string" == typeof e) {
            if (l = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : lb.exec(e), !l || !l[1] && a) return !a || a.jquery ? (a || f).find(e) : this.constructor(a).find(e);
            if (l[1]) {
                if (a = a instanceof c ? a[0] : a, c.merge(this, c.parseHTML(l[1], a && a.nodeType ? a.ownerDocument || a : F, !0)), Xa.test(l[1]) &&
                    c.isPlainObject(a))
                    for (l in a) c.isFunction(this[l]) ? this[l](a[l]) : this.attr(l, a[l]);
                return this
            }
            return b = F.getElementById(l[2]), b && b.parentNode && (this.length = 1, this[0] = b), this.context = F, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : c.isFunction(e) ? void 0 !== f.ready ? f.ready(e) : e(c) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), c.makeArray(e, this))
    }).prototype = c.fn;
    Ea = c(F);
    var Da = /^(?:parents|prev(?:Until|All))/,
        Sa = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    c.fn.extend({
        has: function(e) {
            var a = c(e, this),
                f = a.length;
            return this.filter(function() {
                for (var e = 0; f > e; e++)
                    if (c.contains(this, a[e])) return !0
            })
        },
        closest: function(e, a) {
            for (var f, l = 0, b = this.length, d = [], q = bb.test(e) || "string" != typeof e ? c(e, a || this.context) : 0; b > l; l++)
                for (f = this[l]; f && f !== a; f = f.parentNode)
                    if (11 > f.nodeType && (q ? -1 < q.index(f) : 1 === f.nodeType && c.find.matchesSelector(f, e))) {
                        d.push(f);
                        break
                    }
            return this.pushStack(1 < d.length ? c.uniqueSort(d) : d)
        },
        index: function(e) {
            return e ? "string" ==
                typeof e ? xa.call(c(e), this[0]) : xa.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, a) {
            return this.pushStack(c.uniqueSort(c.merge(this.get(), c(e, a))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    c.each({
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return Ka(e, "parentNode")
        },
        parentsUntil: function(e, c, a) {
            return Ka(e, "parentNode", a)
        },
        next: function(e) {
            return p(e,
                "nextSibling")
        },
        prev: function(e) {
            return p(e, "previousSibling")
        },
        nextAll: function(e) {
            return Ka(e, "nextSibling")
        },
        prevAll: function(e) {
            return Ka(e, "previousSibling")
        },
        nextUntil: function(e, c, a) {
            return Ka(e, "nextSibling", a)
        },
        prevUntil: function(e, c, a) {
            return Ka(e, "previousSibling", a)
        },
        siblings: function(e) {
            return Ua((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ua(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || c.merge([], e.childNodes)
        }
    }, function(e, a) {
        c.fn[e] = function(f, l) {
            var b =
                c.map(this, a, f);
            return "Until" !== e.slice(-5) && (l = f), l && "string" == typeof l && (b = c.filter(l, b)), 1 < this.length && (Sa[e] || c.uniqueSort(b), Da.test(e) && b.reverse()), this.pushStack(b)
        }
    });
    var na = /\S+/g;
    c.Callbacks = function(e) {
        e = "string" == typeof e ? h(e) : c.extend({}, e);
        var a, f, l, b, d = [],
            q = [],
            x = -1,
            B = function() {
                b = e.once;
                for (l = a = !0; q.length; x = -1)
                    for (f = q.shift(); ++x < d.length;) !1 === d[x].apply(f[0], f[1]) && e.stopOnFalse && (x = d.length, f = !1);
                e.memory || (f = !1);
                a = !1;
                b && (d = f ? [] : "")
            },
            g = {
                add: function() {
                    return d && (f && !a && (x = d.length -
                        1, q.push(f)), function Eb(a) {
                        c.each(a, function(a, f) {
                            c.isFunction(f) ? e.unique && g.has(f) || d.push(f) : f && f.length && "string" !== c.type(f) && Eb(f)
                        })
                    }(arguments), f && !a && B()), this
                },
                remove: function() {
                    return c.each(arguments, function(e, a) {
                        for (var f; - 1 < (f = c.inArray(a, d, f));) d.splice(f, 1), x >= f && x--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < c.inArray(e, d) : 0 < d.length
                },
                empty: function() {
                    return d && (d = []), this
                },
                disable: function() {
                    return b = q = [], d = f = "", this
                },
                disabled: function() {
                    return !d
                },
                lock: function() {
                    return b = q = [], f || (d = f =
                        ""), this
                },
                locked: function() {
                    return !!b
                },
                fireWith: function(e, c) {
                    return b || (c = c || [], c = [e, c.slice ? c.slice() : c], q.push(c), a || B()), this
                },
                fire: function() {
                    return g.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!l
                }
            };
        return g
    };
    c.extend({
        Deferred: function(e) {
            var a = [
                    ["resolve", "done", c.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", c.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", c.Callbacks("memory")]
                ],
                f = "pending",
                l = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return b.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var e = arguments;
                        return c.Deferred(function(f) {
                            c.each(a, function(a, D) {
                                var d = c.isFunction(e[a]) && e[a];
                                b[D[1]](function() {
                                    var e = d && d.apply(this, arguments);
                                    e && c.isFunction(e.promise) ? e.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[D[0] + "With"](this === l ? f.promise() : this, d ? [e] : arguments)
                                })
                            });
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? c.extend(e, l) : l
                    }
                },
                b = {};
            return l.pipe = l.then, c.each(a, function(e, c) {
                var d = c[2],
                    q = c[3];
                l[c[1]] = d.add;
                q && d.add(function() {
                    f =
                        q
                }, a[1 ^ e][2].disable, a[2][2].lock);
                b[c[0]] = function() {
                    return b[c[0] + "With"](this === b ? l : this, arguments), this
                };
                b[c[0] + "With"] = d.fireWith
            }), l.promise(b), e && e.call(b, b), b
        },
        when: function(e) {
            var a = 0,
                f = ka.call(arguments),
                l = f.length,
                b = 1 !== l || e && c.isFunction(e.promise) ? l : 0,
                d = 1 === b ? e : c.Deferred(),
                q = function(e, c, a) {
                    return function(f) {
                        c[e] = this;
                        a[e] = 1 < arguments.length ? ka.call(arguments) : f;
                        a === x ? d.notifyWith(c, a) : --b || d.resolveWith(c, a)
                    }
                },
                x, B, g;
            if (1 < l)
                for (x = Array(l), B = Array(l), g = Array(l); l > a; a++) f[a] && c.isFunction(f[a].promise) ?
                    f[a].promise().progress(q(a, B, x)).done(q(a, g, f)).fail(d.reject) : --b;
            return b || d.resolveWith(g, f), d.promise()
        }
    });
    var Ba;
    c.fn.ready = function(e) {
        return c.ready.promise().done(e), this
    };
    c.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? c.readyWait++ : c.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --c.readyWait : c.isReady) || (c.isReady = !0, !0 !== e && 0 < --c.readyWait || (Ba.resolveWith(F, [c]), c.fn.triggerHandler && (c(F).triggerHandler("ready"), c(F).off("ready"))))
        }
    });
    c.ready.promise = function(e) {
        return Ba || (Ba = c.Deferred(),
            "complete" === F.readyState || "loading" !== F.readyState && !F.documentElement.doScroll ? a.setTimeout(c.ready) : (F.addEventListener("DOMContentLoaded", n), a.addEventListener("load", n))), Ba.promise(e)
    };
    c.ready.promise();
    var Ha = function(e, a, f, l, b, d, q) {
            var x = 0,
                B = e.length,
                g = null == f;
            if ("object" === c.type(f))
                for (x in b = !0, f) Ha(e, a, x, f[x], !0, d, q);
            else if (void 0 !== l && (b = !0, c.isFunction(l) || (q = !0), g && (q ? (a.call(e, l), a = null) : (g = a, a = function(e, a, f) {
                    return g.call(c(e), f)
                })), a))
                for (; B > x; x++) a(e[x], f, q ? l : l.call(e[x], x, a(e[x],
                    f)));
            return b ? e : g ? a.call(e) : B ? a(e[0], f) : d
        },
        va = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    g.uid = 1;
    g.prototype = {
        register: function(e, c) {
            var a = c || {};
            return e.nodeType ? e[this.expando] = a : Object.defineProperty(e, this.expando, {
                value: a,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!va(e)) return {};
            var c = e[this.expando];
            return c || (c = {}, va(e) && (e.nodeType ? e[this.expando] = c : Object.defineProperty(e, this.expando, {
                value: c,
                configurable: !0
            }))), c
        },
        set: function(e, c, a) {
            var f;
            e = this.cache(e);
            if ("string" == typeof c) e[c] = a;
            else
                for (f in c) e[f] = c[f];
            return e
        },
        get: function(e, c) {
            return void 0 === c ? this.cache(e) : e[this.expando] && e[this.expando][c]
        },
        access: function(e, a, f) {
            var l;
            return void 0 === a || a && "string" == typeof a && void 0 === f ? (l = this.get(e, a), void 0 !== l ? l : this.get(e, c.camelCase(a))) : (this.set(e, a, f), void 0 !== f ? f : a)
        },
        remove: function(e, a) {
            var f, l, b = e[this.expando];
            if (void 0 !== b) {
                if (void 0 === a) this.register(e);
                else
                    for (c.isArray(a) ? l = a.concat(a.map(c.camelCase)) : (f = c.camelCase(a),
                            a in b ? l = [a, f] : (l = f, l = l in b ? [l] : l.match(na) || [])), f = l.length; f--;) delete b[l[f]];
                (void 0 === a || c.isEmptyObject(b)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !c.isEmptyObject(e)
        }
    };
    var la = new g,
        oa = new g,
        Ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Aa = /[A-Z]/g;
    c.extend({
        hasData: function(e) {
            return oa.hasData(e) || la.hasData(e)
        },
        data: function(e, c, a) {
            return oa.access(e, c, a)
        },
        removeData: function(e, c) {
            oa.remove(e, c)
        },
        _data: function(e, c, a) {
            return la.access(e,
                c, a)
        },
        _removeData: function(e, c) {
            la.remove(e, c)
        }
    });
    c.fn.extend({
        data: function(e, a) {
            var f, l, b, d = this[0],
                q = d && d.attributes;
            if (void 0 === e) {
                if (this.length && (b = oa.get(d), 1 === d.nodeType && !la.get(d, "hasDataAttrs"))) {
                    for (f = q.length; f--;) q[f] && (l = q[f].name, 0 === l.indexOf("data-") && (l = c.camelCase(l.slice(5)), r(d, l, b[l])));
                    la.set(d, "hasDataAttrs", !0)
                }
                return b
            }
            return "object" == typeof e ? this.each(function() {
                oa.set(this, e)
            }) : Ha(this, function(a) {
                var f, l;
                if (d && void 0 === a) {
                    if ((f = oa.get(d, e) || oa.get(d, e.replace(Aa, "-$&").toLowerCase()),
                            void 0 !== f) || (l = c.camelCase(e), f = oa.get(d, l), void 0 !== f) || (f = r(d, l, void 0), void 0 !== f)) return f
                } else l = c.camelCase(e), this.each(function() {
                    var c = oa.get(this, l);
                    oa.set(this, l, a); - 1 < e.indexOf("-") && void 0 !== c && oa.set(this, e, a)
                })
            }, null, a, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                oa.remove(this, e)
            })
        }
    });
    c.extend({
        queue: function(e, a, f) {
            var l;
            return e ? (a = (a || "fx") + "queue", l = la.get(e, a), f && (!l || c.isArray(f) ? l = la.access(e, a, c.makeArray(f)) : l.push(f)), l || []) : void 0
        },
        dequeue: function(e,
            a) {
            a = a || "fx";
            var f = c.queue(e, a),
                l = f.length,
                b = f.shift(),
                d = c._queueHooks(e, a),
                q = function() {
                    c.dequeue(e, a)
                };
            "inprogress" === b && (b = f.shift(), l--);
            b && ("fx" === a && f.unshift("inprogress"), delete d.stop, b.call(e, q, d));
            !l && d && d.empty.fire()
        },
        _queueHooks: function(e, a) {
            var f = a + "queueHooks";
            return la.get(e, f) || la.access(e, f, {
                empty: c.Callbacks("once memory").add(function() {
                    la.remove(e, [a + "queue", f])
                })
            })
        }
    });
    c.fn.extend({
        queue: function(e, a) {
            var f = 2;
            return "string" != typeof e && (a = e, e = "fx", f--), arguments.length < f ? c.queue(this[0],
                e) : void 0 === a ? this : this.each(function() {
                var f = c.queue(this, e, a);
                c._queueHooks(this, e);
                "fx" === e && "inprogress" !== f[0] && c.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                c.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, a) {
            var f, l = 1,
                b = c.Deferred(),
                d = this,
                q = this.length,
                x = function() {
                    --l || b.resolveWith(d, [d])
                };
            "string" != typeof e && (a = e, e = void 0);
            for (e = e || "fx"; q--;)(f = la.get(d[q], e + "queueHooks")) && f.empty && (l++, f.empty.add(x));
            return x(), b.promise(a)
        }
    });
    var Ta = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        za = RegExp("^(?:([+-])=|)(" + Ta + ")([a-z%]*)$", "i"),
        Ra = ["Top", "Right", "Bottom", "Left"],
        Ma = function(e, a) {
            return e = a || e, "none" === c.css(e, "display") || !c.contains(e.ownerDocument, e)
        },
        Na = /^(?:checkbox|radio)$/i,
        Za = /<([\w:-]+)/,
        eb = /^$|\/(?:java|ecma)script/i,
        Ja = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>",
                "</tr></tbody></table>"
            ],
            _default: [0, "", ""]
        };
    Ja.optgroup = Ja.option;
    Ja.tbody = Ja.tfoot = Ja.colgroup = Ja.caption = Ja.thead;
    Ja.th = Ja.td;
    var kb = /<|&#?\w+;/;
    ! function() {
        var e = F.createDocumentFragment().appendChild(F.createElement("div")),
            a = F.createElement("input");
        a.setAttribute("type", "radio");
        a.setAttribute("checked", "checked");
        a.setAttribute("name", "t");
        e.appendChild(a);
        q.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
        e.innerHTML = "<textarea>x</textarea>";
        q.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var mb = /^key/,
        cb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        gb = /^([^.]*)(?:\.(.+)|)/;
    c.event = {
        global: {},
        add: function(e, a, f, l, b) {
            var d, q, x, B, g, h, R, E, n, L;
            if (g = la.get(e))
                for (f.handler && (d = f, f = d.handler, b = d.selector), f.guid || (f.guid = c.guid++), (B = g.events) || (B = g.events = {}), (q = g.handle) || (q = g.handle = function(a) {
                        return "undefined" != typeof c && c.event.triggered !== a.type ? c.event.dispatch.apply(e, arguments) : void 0
                    }), a = (a || "").match(na) || [""], g = a.length; g--;) x = gb.exec(a[g]) || [], n = L = x[1], x = (x[2] || "").split(".").sort(),
                    n && (R = c.event.special[n] || {}, n = (b ? R.delegateType : R.bindType) || n, R = c.event.special[n] || {}, h = c.extend({
                        type: n,
                        origType: L,
                        data: l,
                        handler: f,
                        guid: f.guid,
                        selector: b,
                        needsContext: b && c.expr.match.needsContext.test(b),
                        namespace: x.join(".")
                    }, d), (E = B[n]) || (E = B[n] = [], E.delegateCount = 0, R.setup && !1 !== R.setup.call(e, l, x, q) || e.addEventListener && e.addEventListener(n, q)), R.add && (R.add.call(e, h), h.handler.guid || (h.handler.guid = f.guid)), b ? E.splice(E.delegateCount++, 0, h) : E.push(h), c.event.global[n] = !0)
        },
        remove: function(e,
            a, f, l, b) {
            var d, q, x, B, g, h, R, n, E, L, ma, Ia = la.hasData(e) && la.get(e);
            if (Ia && (B = Ia.events)) {
                a = (a || "").match(na) || [""];
                for (g = a.length; g--;)
                    if (x = gb.exec(a[g]) || [], E = ma = x[1], L = (x[2] || "").split(".").sort(), E) {
                        R = c.event.special[E] || {};
                        E = (l ? R.delegateType : R.bindType) || E;
                        n = B[E] || [];
                        x = x[2] && RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (q = d = n.length; d--;) h = n[d], !b && ma !== h.origType || f && f.guid !== h.guid || x && !x.test(h.namespace) || l && l !== h.selector && ("**" !== l || !h.selector) || (n.splice(d, 1), h.selector && n.delegateCount--,
                            R.remove && R.remove.call(e, h));
                        q && !n.length && (R.teardown && !1 !== R.teardown.call(e, L, Ia.handle) || c.removeEvent(e, E, Ia.handle), delete B[E])
                    } else
                        for (E in B) c.event.remove(e, E + a[g], f, l, !0);
                c.isEmptyObject(B) && la.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = c.event.fix(e);
            var a, f, l, b, d, q = [],
                x = ka.call(arguments);
            a = (la.get(this, "events") || {})[e.type] || [];
            var B = c.event.special[e.type] || {};
            if (x[0] = e, e.delegateTarget = this, !B.preDispatch || !1 !== B.preDispatch.call(this, e)) {
                q = c.event.handlers.call(this, e,
                    a);
                for (a = 0;
                    (b = q[a++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = b.elem, f = 0;
                        (d = b.handlers[f++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(d.namespace) || (e.handleObj = d, e.data = d.data, l = ((c.event.special[d.origType] || {}).handle || d.handler).apply(b.elem, x), void 0 !== l && !1 === (e.result = l) && (e.preventDefault(), e.stopPropagation()));
                return B.postDispatch && B.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, a) {
            var f, l, b, d, q = [],
                x = a.delegateCount,
                B = e.target;
            if (x && B.nodeType &&
                ("click" !== e.type || isNaN(e.button) || 1 > e.button))
                for (; B !== this; B = B.parentNode || this)
                    if (1 === B.nodeType && (!0 !== B.disabled || "click" !== e.type)) {
                        l = [];
                        for (f = 0; x > f; f++) d = a[f], b = d.selector + " ", void 0 === l[b] && (l[b] = d.needsContext ? -1 < c(b, this).index(B) : c.find(b, this, null, [B]).length), l[b] && l.push(d);
                        l.length && q.push({
                            elem: B,
                            handlers: l
                        })
                    }
            return x < a.length && q.push({
                elem: this,
                handlers: a.slice(x)
            }), q
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(e, a) {
                return null == e.which && (e.which = null != a.charCode ? a.charCode : a.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, a) {
                var c, f, l, b = a.button;
                return null == e.pageX && null != a.clientX && (c = e.target.ownerDocument || F, f = c.documentElement, l = c.body, e.pageX = a.clientX + (f && f.scrollLeft || l && l.scrollLeft || 0) - (f && f.clientLeft || l && l.clientLeft ||
                    0), e.pageY = a.clientY + (f && f.scrollTop || l && l.scrollTop || 0) - (f && f.clientTop || l && l.clientTop || 0)), e.which || void 0 === b || (e.which = 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[c.expando]) return e;
            var a, f, l;
            a = e.type;
            var b = e,
                d = this.fixHooks[a];
            d || (this.fixHooks[a] = d = cb.test(a) ? this.mouseHooks : mb.test(a) ? this.keyHooks : {});
            l = d.props ? this.props.concat(d.props) : this.props;
            e = new c.Event(b);
            for (a = l.length; a--;) f = l[a], e[f] = b[f];
            return e.target || (e.target = F), 3 === e.target.nodeType && (e.target = e.target.parentNode),
                d.filter ? d.filter(e, b) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== b() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === b() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && c.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return c.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent &&
                        (e.originalEvent.returnValue = e.result)
                }
            }
        }
    };
    c.removeEvent = function(e, a, c) {
        e.removeEventListener && e.removeEventListener(a, c)
    };
    c.Event = function(e, a) {
        return this instanceof c.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? v : y) : this.type = e, a && c.extend(this, a), this.timeStamp = e && e.timeStamp || c.now(), void(this[c.expando] = !0)) : new c.Event(e, a)
    };
    c.Event.prototype = {
        constructor: c.Event,
        isDefaultPrevented: y,
        isPropagationStopped: y,
        isImmediatePropagationStopped: y,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = v;
            e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = v;
            e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = v;
            e && e.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e,
        a) {
        c.event.special[e] = {
            delegateType: a,
            bindType: a,
            handle: function(e) {
                var f, l = e.relatedTarget,
                    b = e.handleObj;
                return l && (l === this || c.contains(this, l)) || (e.type = b.origType, f = b.handler.apply(this, arguments), e.type = a), f
            }
        }
    });
    c.fn.extend({
        on: function(e, a, c, f) {
            return u(this, e, a, c, f)
        },
        one: function(e, a, c, f) {
            return u(this, e, a, c, f, 1)
        },
        off: function(e, a, f) {
            var l, b;
            if (e && e.preventDefault && e.handleObj) return l = e.handleObj, c(e.delegateTarget).off(l.namespace ? l.origType + "." + l.namespace : l.origType, l.selector, l.handler),
                this;
            if ("object" == typeof e) {
                for (b in e) this.off(b, a, e[b]);
                return this
            }
            return !1 !== a && "function" != typeof a || (f = a, a = void 0), !1 === f && (f = y), this.each(function() {
                c.event.remove(this, e, f, a)
            })
        }
    });
    var hb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ib = /<script|<style|<link/i,
        Va = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nb = /^true\/(.*)/,
        ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    c.extend({
        htmlPrefilter: function(e) {
            return e.replace(hb, "<$1></$2>")
        },
        clone: function(e, a, f) {
            var l, b, d,
                x, B = e.cloneNode(!0),
                g = c.contains(e.ownerDocument, e);
            if (!(q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || c.isXMLDoc(e)))
                for (x = z(B), d = z(e), l = 0, b = d.length; b > l; l++) {
                    var h = d[l],
                        R = x[l],
                        E = R.nodeName.toLowerCase();
                    "input" === E && Na.test(h.type) ? R.checked = h.checked : "input" !== E && "textarea" !== E || (R.defaultValue = h.defaultValue)
                }
            if (a)
                if (f)
                    for (d = d || z(e), x = x || z(B), l = 0, b = d.length; b > l; l++) N(d[l], x[l]);
                else N(e, B);
            return x = z(B, "script"), 0 < x.length && w(x, !g && z(e, "script")), B
        },
        cleanData: function(e) {
            for (var a, f, l, b =
                    c.event.special, d = 0; void 0 !== (f = e[d]); d++)
                if (va(f)) {
                    if (a = f[la.expando]) {
                        if (a.events)
                            for (l in a.events) b[l] ? c.event.remove(f, l) : c.removeEvent(f, l, a.handle);
                        f[la.expando] = void 0
                    }
                    f[oa.expando] && (f[oa.expando] = void 0)
                }
        }
    });
    c.fn.extend({
        domManip: G,
        detach: function(e) {
            return I(this, e, !0)
        },
        remove: function(e) {
            return I(this, e)
        },
        text: function(e) {
            return Ha(this, function(e) {
                    return void 0 === e ? c.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                },
                null, e, arguments.length)
        },
        append: function() {
            return G(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || H(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return G(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var a = H(this, e);
                    a.insertBefore(e, a.firstChild)
                }
            })
        },
        before: function() {
            return G(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return G(this, arguments, function(e) {
                this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, a = 0; null != (e = this[a]); a++) 1 === e.nodeType && (c.cleanData(z(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, a) {
            return e = null == e ? !1 : e, a = null == a ? e : a, this.map(function() {
                return c.clone(this, e, a)
            })
        },
        html: function(e) {
            return Ha(this, function(e) {
                var a = this[0] || {},
                    f = 0,
                    l = this.length;
                if (void 0 === e && 1 === a.nodeType) return a.innerHTML;
                if ("string" == typeof e && !ib.test(e) && !Ja[(Za.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = c.htmlPrefilter(e);
                    try {
                        for (; l > f; f++) a = this[f] || {}, 1 === a.nodeType && (c.cleanData(z(a, !1)), a.innerHTML = e);
                        a = 0
                    } catch (b) {}
                }
                a && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return G(this, arguments, function(a) {
                var f = this.parentNode;
                0 > c.inArray(this, e) && (c.cleanData(z(this)), f && f.replaceChild(a, this))
            }, e)
        }
    });
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        c.fn[e] = function(e) {
            for (var f = [], l = c(e), b = l.length - 1, d =
                    0; b >= d; d++) e = d === b ? this : this.clone(!0), c(l[d])[a](e), sa.apply(f, e.get());
            return this.pushStack(f)
        }
    });
    var $a, Wa = {
            HTML: "block",
            BODY: "block"
        },
        fb = /^margin/,
        ab = RegExp("^(" + Ta + ")(?!px)[a-z%]+$", "i"),
        Pa = function(e) {
            var c = e.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(e)
        },
        Qa = function(e, a, c, f) {
            var l, b = {};
            for (l in a) b[l] = e.style[l], e.style[l] = a[l];
            c = c.apply(e, f || []);
            for (l in a) e.style[l] = b[l];
            return c
        },
        x = F.documentElement;
    ! function() {
        var e, f, l, b, d = F.createElement("div"),
            B = F.createElement("div");
        if (B.style) {
            B.style.backgroundClip = "content-box";
            B.cloneNode(!0).style.backgroundClip = "";
            q.clearCloneStyle = "content-box" === B.style.backgroundClip;
            d.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
            d.appendChild(B);
            var g = function() {
                B.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                B.innerHTML = "";
                x.appendChild(d);
                var c = a.getComputedStyle(B);
                e = "1%" !== c.top;
                b = "2px" === c.marginLeft;
                f = "4px" === c.width;
                B.style.marginRight = "50%";
                l = "4px" === c.marginRight;
                x.removeChild(d)
            };
            c.extend(q, {
                pixelPosition: function() {
                    return g(), e
                },
                boxSizingReliable: function() {
                    return null == f && g(), f
                },
                pixelMarginRight: function() {
                    return null == f && g(), l
                },
                reliableMarginLeft: function() {
                    return null == f && g(), b
                },
                reliableMarginRight: function() {
                    var e, c = B.appendChild(F.createElement("div"));
                    return c.style.cssText = B.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        c.style.marginRight = c.style.width = "0", B.style.width = "1px", x.appendChild(d), e = !parseFloat(a.getComputedStyle(c).marginRight), x.removeChild(d), B.removeChild(c), e
                }
            })
        }
    }();
    var Ia = /^(none|table(?!-c[ea]).+)/,
        ma = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        B = ["Webkit", "O", "Moz", "ms"],
        Fa = F.createElement("div").style;
    c.extend({
        cssHooks: {
            opacity: {
                get: function(e, a) {
                    if (a) {
                        var c = W(e, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, a, f, l) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var b, d, x, B = c.camelCase(a),
                    g = e.style;
                return a = c.cssProps[B] || (c.cssProps[B] = S(B) || B), x = c.cssHooks[a] || c.cssHooks[B], void 0 === f ? x && "get" in x && void 0 !== (b = x.get(e, !1, l)) ? b : g[a] : (d = typeof f, "string" === d && (b = za.exec(f)) && b[1] && (f = s(e, a, b), d = "number"), null != f && f === f && ("number" ===
                    d && (f += b && b[3] || (c.cssNumber[B] ? "" : "px")), q.clearCloneStyle || "" !== f || 0 !== a.indexOf("background") || (g[a] = "inherit"), x && "set" in x && void 0 === (f = x.set(e, f, l)) || (g[a] = f)), void 0)
            }
        },
        css: function(e, a, f, l) {
            var b, d, q, x = c.camelCase(a);
            return a = c.cssProps[x] || (c.cssProps[x] = S(x) || x), q = c.cssHooks[a] || c.cssHooks[x], q && "get" in q && (b = q.get(e, !0, f)), void 0 === b && (b = W(e, a, l)), "normal" === b && a in wa && (b = wa[a]), "" === f || f ? (d = parseFloat(b), !0 === f || isFinite(d) ? d || 0 : b) : b
        }
    });
    c.each(["height", "width"], function(e, a) {
        c.cssHooks[a] = {
            get: function(e, f, l) {
                return f ? Ia.test(c.css(e, "display")) && 0 === e.offsetWidth ? Qa(e, ma, function() {
                    return ea(e, a, l)
                }) : ea(e, a, l) : void 0
            },
            set: function(e, f, l) {
                var b, d = l && Pa(e);
                l = l && O(e, a, l, "border-box" === c.css(e, "boxSizing", !1, d), d);
                return l && (b = za.exec(f)) && "px" !== (b[3] || "px") && (e.style[a] = f, f = c.css(e, a)), ga(e, f, l)
            }
        }
    });
    c.cssHooks.marginLeft = Q(q.reliableMarginLeft, function(e, a) {
        return a ? (parseFloat(W(e, "marginLeft")) || e.getBoundingClientRect().left - Qa(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) +
            "px" : void 0
    });
    c.cssHooks.marginRight = Q(q.reliableMarginRight, function(e, a) {
        return a ? Qa(e, {
            display: "inline-block"
        }, W, [e, "marginRight"]) : void 0
    });
    c.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, a) {
        c.cssHooks[e + a] = {
            expand: function(c) {
                var f = 0,
                    l = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > f; f++) l[e + Ra[f] + a] = c[f] || c[f - 2] || c[0];
                return l
            }
        };
        fb.test(e) || (c.cssHooks[e + a].set = ga)
    });
    c.fn.extend({
        css: function(e, a) {
            return Ha(this, function(e, a, f) {
                var l, b = {},
                    d = 0;
                if (c.isArray(a)) {
                    f = Pa(e);
                    for (l = a.length; l >
                        d; d++) b[a[d]] = c.css(e, a[d], !1, f);
                    return b
                }
                return void 0 !== f ? c.style(e, a, f) : c.css(e, a)
            }, e, a, 1 < arguments.length)
        },
        show: function() {
            return fa(this, !0)
        },
        hide: function() {
            return fa(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ma(this) ? c(this).show() : c(this).hide()
            })
        }
    });
    c.Tween = Y;
    Y.prototype = {
        constructor: Y,
        init: function(e, a, f, l, b, d) {
            this.elem = e;
            this.prop = f;
            this.easing = b || c.easing._default;
            this.options = a;
            this.start = this.now = this.cur();
            this.end = l;
            this.unit =
                d || (c.cssNumber[f] ? "" : "px")
        },
        cur: function() {
            var e = Y.propHooks[this.prop];
            return e && e.get ? e.get(this) : Y.propHooks._default.get(this)
        },
        run: function(e) {
            var a, f = Y.propHooks[this.prop];
            return this.options.duration ? this.pos = a = c.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = a = e, this.now = (this.end - this.start) * a + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), f && f.set ? f.set(this) : Y.propHooks._default.set(this), this
        }
    };
    Y.prototype.init.prototype =
        Y.prototype;
    Y.propHooks = {
        _default: {
            get: function(e) {
                var a;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (a = c.css(e.elem, e.prop, ""), a && "auto" !== a ? a : 0)
            },
            set: function(e) {
                c.fx.step[e.prop] ? c.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[c.cssProps[e.prop]] && !c.cssHooks[e.prop] ? e.elem[e.prop] = e.now : c.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    };
    Y.propHooks.scrollTop = Y.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] =
                e.now)
        }
    };
    c.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    };
    c.fx = Y.prototype.init;
    c.fx.step = {};
    var ya, Ca, l = /^(?:toggle|show|hide)$/,
        E = /queueHooks$/;
    c.Animation = c.extend(V, {
        tweeners: {
            "*": [function(e, a) {
                var c = this.createTween(e, a);
                return s(c.elem, e, za.exec(a), c), c
            }]
        },
        tweener: function(e, a) {
            c.isFunction(e) ? (a = e, e = ["*"]) : e = e.match(na);
            for (var f, l = 0, b = e.length; b > l; l++) f = e[l], V.tweeners[f] = V.tweeners[f] || [], V.tweeners[f].unshift(a)
        },
        prefilters: [function(e,
            a, f) {
            var b, d, q, x, B, g, h, R = this,
                E = {},
                n = e.style,
                L = e.nodeType && Ma(e),
                ma = la.get(e, "fxshow");
            f.queue || (x = c._queueHooks(e, "fx"), null == x.unqueued && (x.unqueued = 0, B = x.empty.fire, x.empty.fire = function() {
                x.unqueued || B()
            }), x.unqueued++, R.always(function() {
                R.always(function() {
                    x.unqueued--;
                    c.queue(e, "fx").length || x.empty.fire()
                })
            }));
            1 === e.nodeType && ("height" in a || "width" in a) && (f.overflow = [n.overflow, n.overflowX, n.overflowY], g = c.css(e, "display"), h = "none" === g ? la.get(e, "olddisplay") || A(e.nodeName) : g, "inline" === h &&
                "none" === c.css(e, "float") && (n.display = "inline-block"));
            f.overflow && (n.overflow = "hidden", R.always(function() {
                n.overflow = f.overflow[0];
                n.overflowX = f.overflow[1];
                n.overflowY = f.overflow[2]
            }));
            for (b in a)
                if (d = a[b], l.exec(d)) {
                    if (delete a[b], q = q || "toggle" === d, d === (L ? "hide" : "show")) {
                        if ("show" !== d || !ma || void 0 === ma[b]) continue;
                        L = !0
                    }
                    E[b] = ma && ma[b] || c.style(e, b)
                } else g = void 0;
            if (c.isEmptyObject(E)) "inline" === ("none" === g ? A(e.nodeName) : g) && (n.display = g);
            else
                for (b in ma ? "hidden" in ma && (L = ma.hidden) : ma = la.access(e,
                        "fxshow", {}), q && (ma.hidden = !L), L ? c(e).show() : R.done(function() {
                        c(e).hide()
                    }), R.done(function() {
                        var a;
                        la.remove(e, "fxshow");
                        for (a in E) c.style(e, a, E[a])
                    }), E) a = T(L ? ma[b] : 0, b, R), b in ma || (ma[b] = a.start, L && (a.end = a.start, a.start = "width" === b || "height" === b ? 1 : 0))
        }],
        prefilter: function(e, a) {
            a ? V.prefilters.unshift(e) : V.prefilters.push(e)
        }
    });
    c.speed = function(e, a, f) {
        var l = e && "object" == typeof e ? c.extend({}, e) : {
            complete: f || !f && a || c.isFunction(e) && e,
            duration: e,
            easing: f && a || a && !c.isFunction(a) && a
        };
        return l.duration =
            c.fx.off ? 0 : "number" == typeof l.duration ? l.duration : l.duration in c.fx.speeds ? c.fx.speeds[l.duration] : c.fx.speeds._default, null != l.queue && !0 !== l.queue || (l.queue = "fx"), l.old = l.complete, l.complete = function() {
                c.isFunction(l.old) && l.old.call(this);
                l.queue && c.dequeue(this, l.queue)
            }, l
    };
    c.fn.extend({
        fadeTo: function(e, a, c, f) {
            return this.filter(Ma).css("opacity", 0).show().end().animate({
                opacity: a
            }, e, c, f)
        },
        animate: function(e, a, f, l) {
            var b = c.isEmptyObject(e),
                d = c.speed(a, f, l);
            a = function() {
                var a = V(this, c.extend({},
                    e), d);
                (b || la.get(this, "finish")) && a.stop(!0)
            };
            return a.finish = a, b || !1 === d.queue ? this.each(a) : this.queue(d.queue, a)
        },
        stop: function(e, a, f) {
            var l = function(e) {
                var a = e.stop;
                delete e.stop;
                a(f)
            };
            return "string" != typeof e && (f = a, a = e, e = void 0), a && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var a = !0,
                    b = null != e && e + "queueHooks",
                    d = c.timers,
                    x = la.get(this);
                if (b) x[b] && x[b].stop && l(x[b]);
                else
                    for (b in x) x[b] && x[b].stop && E.test(b) && l(x[b]);
                for (b = d.length; b--;) d[b].elem !== this || null != e && d[b].queue !== e || (d[b].anim.stop(f),
                    a = !1, d.splice(b, 1));
                !a && f || c.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var a, f = la.get(this),
                    l = f[e + "queue"];
                a = f[e + "queueHooks"];
                var b = c.timers,
                    d = l ? l.length : 0;
                f.finish = !0;
                c.queue(this, e, []);
                a && a.stop && a.stop.call(this, !0);
                for (a = b.length; a--;) b[a].elem === this && b[a].queue === e && (b[a].anim.stop(!0), b.splice(a, 1));
                for (a = 0; d > a; a++) l[a] && l[a].finish && l[a].finish.call(this);
                delete f.finish
            })
        }
    });
    c.each(["toggle", "show", "hide"], function(e, a) {
        var f = c.fn[a];
        c.fn[a] = function(e,
            c, l) {
            return null == e || "boolean" == typeof e ? f.apply(this, arguments) : this.animate(U(a, !0), e, c, l)
        }
    });
    c.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, a) {
        c.fn[e] = function(e, c, f) {
            return this.animate(a, e, c, f)
        }
    });
    c.timers = [];
    c.fx.tick = function() {
        var e, a = 0,
            f = c.timers;
        for (ya = c.now(); a < f.length; a++) e = f[a], e() || f[a] !== e || f.splice(a--, 1);
        f.length || c.fx.stop();
        ya = void 0
    };
    c.fx.timer = function(e) {
        c.timers.push(e);
        e() ? c.fx.start() : c.timers.pop()
    };
    c.fx.interval = 13;
    c.fx.start = function() {
        Ca || (Ca = a.setInterval(c.fx.tick, c.fx.interval))
    };
    c.fx.stop = function() {
        a.clearInterval(Ca);
        Ca = null
    };
    c.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    c.fn.delay = function(e, f) {
        return e = c.fx ? c.fx.speeds[e] || e : e, f = f || "fx", this.queue(f, function(c, f) {
            var l = a.setTimeout(c, e);
            f.stop = function() {
                a.clearTimeout(l)
            }
        })
    };
    (function() {
        var e = F.createElement("input"),
            a = F.createElement("select"),
            c = a.appendChild(F.createElement("option"));
        e.type = "checkbox";
        q.checkOn = "" !== e.value;
        q.optSelected = c.selected;
        a.disabled = !0;
        q.optDisabled = !c.disabled;
        e = F.createElement("input");
        e.value = "t";
        e.type = "radio";
        q.radioValue = "t" === e.value
    })();
    var R, ra = c.expr.attrHandle;
    c.fn.extend({
        attr: function(e, a) {
            return Ha(this, c.attr, e, a, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                c.removeAttr(this, e)
            })
        }
    });
    c.extend({
        attr: function(e, a, f) {
            var l, b, d = e.nodeType;
            if (3 !== d && 8 !== d && 2 !== d) return "undefined" == typeof e.getAttribute ? c.prop(e, a, f) : (1 === d && c.isXMLDoc(e) ||
                (a = a.toLowerCase(), b = c.attrHooks[a] || (c.expr.match.bool.test(a) ? R : void 0)), void 0 !== f ? null === f ? void c.removeAttr(e, a) : b && "set" in b && void 0 !== (l = b.set(e, f, a)) ? l : (e.setAttribute(a, f + ""), f) : b && "get" in b && null !== (l = b.get(e, a)) ? l : (l = c.find.attr(e, a), null == l ? void 0 : l))
        },
        attrHooks: {
            type: {
                set: function(e, a) {
                    if (!q.radioValue && "radio" === a && c.nodeName(e, "input")) {
                        var f = e.value;
                        return e.setAttribute("type", a), f && (e.value = f), a
                    }
                }
            }
        },
        removeAttr: function(e, a) {
            var f, l, b = 0,
                d = a && a.match(na);
            if (d && 1 === e.nodeType)
                for (; f =
                    d[b++];) l = c.propFix[f] || f, c.expr.match.bool.test(f) && (e[l] = !1), e.removeAttribute(f)
        }
    });
    R = {
        set: function(e, a, f) {
            return !1 === a ? c.removeAttr(e, f) : e.setAttribute(f, f), f
        }
    };
    c.each(c.expr.match.bool.source.match(/\w+/g), function(e, a) {
        var f = ra[a] || c.find.attr;
        ra[a] = function(e, a, c) {
            var l, b;
            return c || (b = ra[a], ra[a] = l, l = null != f(e, a, c) ? a.toLowerCase() : null, ra[a] = b), l
        }
    });
    var pb = /^(?:input|select|textarea|button)$/i,
        rb = /^(?:a|area)$/i;
    c.fn.extend({
        prop: function(e, a) {
            return Ha(this, c.prop, e, a, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[c.propFix[e] || e]
            })
        }
    });
    c.extend({
        prop: function(e, a, f) {
            var l, b, d = e.nodeType;
            if (3 !== d && 8 !== d && 2 !== d) return 1 === d && c.isXMLDoc(e) || (a = c.propFix[a] || a, b = c.propHooks[a]), void 0 !== f ? b && "set" in b && void 0 !== (l = b.set(e, f, a)) ? l : e[a] = f : b && "get" in b && null !== (l = b.get(e, a)) ? l : e[a]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var a = c.find.attr(e, "tabindex");
                    return a ? parseInt(a, 10) : pb.test(e.nodeName) || rb.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    q.optSelected || (c.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    });
    c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        c.propFix[this.toLowerCase()] = this
    });
    var db = /[\t\r\n\f]/g;
    c.fn.extend({
        addClass: function(e) {
            var a, f, l, b, d, x, q = 0;
            if (c.isFunction(e)) return this.each(function(a) {
                c(this).addClass(e.call(this,
                    a, P(this)))
            });
            if ("string" == typeof e && e)
                for (a = e.match(na) || []; f = this[q++];)
                    if (b = P(f), l = 1 === f.nodeType && (" " + b + " ").replace(db, " ")) {
                        for (x = 0; d = a[x++];) 0 > l.indexOf(" " + d + " ") && (l += d + " ");
                        l = c.trim(l);
                        b !== l && f.setAttribute("class", l)
                    }
            return this
        },
        removeClass: function(e) {
            var a, f, l, b, d, x, q = 0;
            if (c.isFunction(e)) return this.each(function(a) {
                c(this).removeClass(e.call(this, a, P(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (a = e.match(na) || []; f = this[q++];)
                    if (b = P(f), l =
                        1 === f.nodeType && (" " + b + " ").replace(db, " ")) {
                        for (x = 0; d = a[x++];)
                            for (; - 1 < l.indexOf(" " + d + " ");) l = l.replace(" " + d + " ", " ");
                        l = c.trim(l);
                        b !== l && f.setAttribute("class", l)
                    }
            return this
        },
        toggleClass: function(e, a) {
            var f = typeof e;
            return "boolean" == typeof a && "string" === f ? a ? this.addClass(e) : this.removeClass(e) : c.isFunction(e) ? this.each(function(f) {
                c(this).toggleClass(e.call(this, f, P(this), a), a)
            }) : this.each(function() {
                var a, l, b, d;
                if ("string" === f)
                    for (l = 0, b = c(this), d = e.match(na) || []; a = d[l++];) b.hasClass(a) ? b.removeClass(a) :
                        b.addClass(a);
                else void 0 !== e && "boolean" !== f || (a = P(this), a && la.set(this, "__className__", a), this.setAttribute && this.setAttribute("class", a || !1 === e ? "" : la.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var a, c = 0;
            for (e = " " + e + " "; a = this[c++];)
                if (1 === a.nodeType && -1 < (" " + P(a) + " ").replace(db, " ").indexOf(e)) return !0;
            return !1
        }
    });
    var Gb = /\r/g,
        Hb = /[\x20\t\r\n\f]+/g;
    c.fn.extend({
        val: function(e) {
            var a, f, l, b = this[0];
            if (arguments.length) return l = c.isFunction(e), this.each(function(f) {
                var b;
                1 === this.nodeType &&
                    (b = l ? e.call(this, f, c(this).val()) : e, null == b ? b = "" : "number" == typeof b ? b += "" : c.isArray(b) && (b = c.map(b, function(e) {
                        return null == e ? "" : e + ""
                    })), a = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], a && "set" in a && void 0 !== a.set(this, b, "value") || (this.value = b))
            });
            if (b) return a = c.valHooks[b.type] || c.valHooks[b.nodeName.toLowerCase()], a && "get" in a && void 0 !== (f = a.get(b, "value")) ? f : (f = b.value, "string" == typeof f ? f.replace(Gb, "") : null == f ? "" : f)
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var a = c.find.attr(e,
                        "value");
                    return null != a ? a : c.trim(c.text(e)).replace(Hb, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var a, f = e.options, l = e.selectedIndex, b = "select-one" === e.type || 0 > l, d = b ? null : [], x = b ? l + 1 : f.length, B = 0 > l ? x : b ? l : 0; x > B; B++)
                        if (a = f[B], !(!a.selected && B !== l || (q.optDisabled ? a.disabled : null !== a.getAttribute("disabled")) || a.parentNode.disabled && c.nodeName(a.parentNode, "optgroup"))) {
                            if (e = c(a).val(), b) return e;
                            d.push(e)
                        }
                    return d
                },
                set: function(e, a) {
                    for (var f, l, b = e.options, d = c.makeArray(a), x = b.length; x--;) l = b[x], (l.selected = -1 < c.inArray(c.valHooks.option.get(l), d)) && (f = !0);
                    return f || (e.selectedIndex = -1), d
                }
            }
        }
    });
    c.each(["radio", "checkbox"], function() {
        c.valHooks[this] = {
            set: function(e, a) {
                return c.isArray(a) ? e.checked = -1 < c.inArray(c(e).val(), a) : void 0
            }
        };
        q.checkOn || (c.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xb = /^(?:focusinfocus|focusoutblur)$/;
    c.extend(c.event, {
        trigger: function(e, l, b, d) {
            var x, q, B, g, h, R, E, n = [b || F],
                ma = f.call(e, "type") ? e.type : e;
            x = f.call(e, "namespace") ? e.namespace.split(".") : [];
            if (q = B = b = b || F, 3 !== b.nodeType && 8 !== b.nodeType && !xb.test(ma + c.event.triggered) && (-1 < ma.indexOf(".") && (x = ma.split("."), ma = x.shift(), x.sort()), h = 0 > ma.indexOf(":") && "on" + ma, e = e[c.expando] ? e : new c.Event(ma, "object" == typeof e && e), e.isTrigger = d ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = b), l = null == l ? [e] : c.makeArray(l, [e]), E = c.event.special[ma] || {}, d || !E.trigger || !1 !== E.trigger.apply(b, l))) {
                if (!d && !E.noBubble &&
                    !c.isWindow(b)) {
                    g = E.delegateType || ma;
                    for (xb.test(g + ma) || (q = q.parentNode); q; q = q.parentNode) n.push(q), B = q;
                    B === (b.ownerDocument || F) && n.push(B.defaultView || B.parentWindow || a)
                }
                for (x = 0;
                    (q = n[x++]) && !e.isPropagationStopped();) e.type = 1 < x ? g : E.bindType || ma, (R = (la.get(q, "events") || {})[e.type] && la.get(q, "handle")) && R.apply(q, l), (R = h && q[h]) && R.apply && va(q) && (e.result = R.apply(q, l), !1 === e.result && e.preventDefault());
                return e.type = ma, d || e.isDefaultPrevented() || E._default && !1 !== E._default.apply(n.pop(), l) || !va(b) ||
                    h && c.isFunction(b[ma]) && !c.isWindow(b) && (B = b[h], B && (b[h] = null), c.event.triggered = ma, b[ma](), c.event.triggered = void 0, B && (b[h] = B)), e.result
            }
        },
        simulate: function(e, a, f) {
            e = c.extend(new c.Event, f, {
                type: e,
                isSimulated: !0
            });
            c.event.trigger(e, null, a);
            e.isDefaultPrevented() && f.preventDefault()
        }
    });
    c.fn.extend({
        trigger: function(e, a) {
            return this.each(function() {
                c.event.trigger(e, a, this)
            })
        },
        triggerHandler: function(e, a) {
            var f = this[0];
            return f ? c.event.trigger(e, a, f, !0) : void 0
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(e, a) {
            c.fn[a] = function(e, c) {
                return 0 < arguments.length ? this.on(a, null, e, c) : this.trigger(a)
            }
        });
    c.fn.extend({
        hover: function(e, a) {
            return this.mouseenter(e).mouseleave(a || e)
        }
    });
    q.focusin = "onfocusin" in a;
    q.focusin || c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, a) {
        var f = function(e) {
            c.event.simulate(a, e.target, c.event.fix(e))
        };
        c.event.special[a] = {
            setup: function() {
                var c = this.ownerDocument || this,
                    l = la.access(c, a);
                l || c.addEventListener(e, f, !0);
                la.access(c, a, (l || 0) + 1)
            },
            teardown: function() {
                var c =
                    this.ownerDocument || this,
                    l = la.access(c, a) - 1;
                l ? la.access(c, a, l) : (c.removeEventListener(e, f, !0), la.remove(c, a))
            }
        }
    });
    var Oa = a.location,
        tb = c.now(),
        ub = /\?/;
    c.parseJSON = function(e) {
        return JSON.parse(e + "")
    };
    c.parseXML = function(e) {
        var f;
        if (!e || "string" != typeof e) return null;
        try {
            f = (new a.DOMParser).parseFromString(e, "text/xml")
        } catch (l) {
            f = void 0
        }
        return f && !f.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + e), f
    };
    var Ib = /#.*$/,
        yb = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        zb = {},
        sb = {},
        Ab = "*/".concat("*"),
        vb = F.createElement("a");
    vb.href = Oa.href;
    c.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Oa.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Oa.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ab,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, a) {
            return a ? ba(ba(e, c.ajaxSettings), a) : ba(c.ajaxSettings, e)
        },
        ajaxPrefilter: ja(zb),
        ajaxTransport: ja(sb),
        ajax: function(e, f) {
            function l(e, f, q, g) {
                var R, r, F, ya, k = f;
                if (2 !== m) {
                    m = 2;
                    B && a.clearTimeout(B);
                    b = void 0;
                    x = g || "";
                    p.readyState = 0 < e ? 4 : 0;
                    g = 200 <= e && 300 > e || 304 === e;
                    if (q) {
                        F =
                            E;
                        for (var Ca = p, u, Z, ka, M, w = F.contents, t = F.dataTypes;
                            "*" === t[0];) t.shift(), void 0 === u && (u = F.mimeType || Ca.getResponseHeader("Content-Type"));
                        if (u)
                            for (Z in w)
                                if (w[Z] && w[Z].test(u)) {
                                    t.unshift(Z);
                                    break
                                }
                        if (t[0] in q) ka = t[0];
                        else {
                            for (Z in q) {
                                if (!t[0] || F.converters[Z + " " + t[0]]) {
                                    ka = Z;
                                    break
                                }
                                M || (M = Z)
                            }
                            ka = ka || M
                        }
                        F = ka ? (ka !== t[0] && t.unshift(ka), q[ka]) : void 0
                    }
                    var v;
                    a: {
                        q = E;
                        u = F;
                        Z = p;
                        ka = g;
                        var s, y, ra;
                        F = {};
                        Ca = q.dataTypes.slice();
                        if (Ca[1])
                            for (s in q.converters) F[s.toLowerCase()] = q.converters[s];
                        for (M = Ca.shift(); M;)
                            if (q.responseFields[M] &&
                                (Z[q.responseFields[M]] = u), !ra && ka && q.dataFilter && (u = q.dataFilter(u, q.dataType)), ra = M, M = Ca.shift())
                                if ("*" === M) M = ra;
                                else if ("*" !== ra && ra !== M) {
                            if (s = F[ra + " " + M] || F["* " + M], !s)
                                for (v in F)
                                    if (y = v.split(" "), y[1] === M && (s = F[ra + " " + y[0]] || F["* " + y[0]])) {
                                        !0 === s ? s = F[v] : !0 !== F[v] && (M = y[0], Ca.unshift(y[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && q["throws"]) u = s(u);
                                else try {
                                    u = s(u)
                                } catch (D) {
                                    v = {
                                        state: "parsererror",
                                        error: s ? D : "No conversion from " + ra + " to " + M
                                    };
                                    break a
                                }
                        }
                        v = {
                            state: "success",
                            data: u
                        }
                    }
                    F = v;
                    g ? (E.ifModified && (ya = p.getResponseHeader("Last-Modified"),
                        ya && (c.lastModified[d] = ya), ya = p.getResponseHeader("etag"), ya && (c.etag[d] = ya)), 204 === e || "HEAD" === E.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = F.state, R = F.data, r = F.error, g = !r)) : (r = k, !e && k || (k = "error", 0 > e && (e = 0)));
                    p.status = e;
                    p.statusText = (f || k) + "";
                    g ? L.resolveWith(n, [R, k, p]) : L.rejectWith(n, [p, k, r]);
                    p.statusCode(wa);
                    wa = void 0;
                    h && ma.trigger(g ? "ajaxSuccess" : "ajaxError", [p, E, g ? R : r]);
                    Ia.fireWith(n, [p, k]);
                    h && (ma.trigger("ajaxComplete", [p, E]), --c.active || c.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e &&
                (f = e, e = void 0);
            f = f || {};
            var b, d, x, q, B, g, h, R, E = c.ajaxSetup({}, f),
                n = E.context || E,
                ma = E.context && (n.nodeType || n.jquery) ? c(n) : c.event,
                L = c.Deferred(),
                Ia = c.Callbacks("once memory"),
                wa = E.statusCode || {},
                r = {},
                ya = {},
                m = 0,
                k = "canceled",
                p = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var a;
                        if (2 === m) {
                            if (!q)
                                for (q = {}; a = Jb.exec(x);) q[a[1].toLowerCase()] = a[2];
                            a = q[e.toLowerCase()]
                        }
                        return null == a ? null : a
                    },
                    getAllResponseHeaders: function() {
                        return 2 === m ? x : null
                    },
                    setRequestHeader: function(e, a) {
                        var c = e.toLowerCase();
                        return m || (e =
                            ya[c] = ya[c] || e, r[e] = a), this
                    },
                    overrideMimeType: function(e) {
                        return m || (E.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var a;
                        if (e)
                            if (2 > m)
                                for (a in e) wa[a] = [wa[a], e[a]];
                            else p.always(e[p.status]);
                        return this
                    },
                    abort: function(e) {
                        e = e || k;
                        return b && b.abort(e), l(0, e), this
                    }
                };
            if (L.promise(p).complete = Ia.add, p.success = p.done, p.error = p.fail, E.url = ((e || E.url || Oa.href) + "").replace(Ib, "").replace(Lb, Oa.protocol + "//"), E.type = f.method || f.type || E.method || E.type, E.dataTypes = c.trim(E.dataType || "*").toLowerCase().match(na) || [""], null == E.crossDomain) {
                g = F.createElement("a");
                try {
                    g.href = E.url, g.href = g.href, E.crossDomain = vb.protocol + "//" + vb.host != g.protocol + "//" + g.host
                } catch (Ca) {
                    E.crossDomain = !0
                }
            }
            if (E.data && E.processData && "string" != typeof E.data && (E.data = c.param(E.data, E.traditional)), ca(zb, E, f, p), 2 === m) return p;
            (h = c.event && E.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
            E.type = E.type.toUpperCase();
            E.hasContent = !Kb.test(E.type);
            d = E.url;
            E.hasContent || (E.data && (d = E.url += (ub.test(d) ? "&" : "?") + E.data, delete E.data), !1 ===
                E.cache && (E.url = yb.test(d) ? d.replace(yb, "$1_=" + tb++) : d + (ub.test(d) ? "&" : "?") + "_=" + tb++));
            E.ifModified && (c.lastModified[d] && p.setRequestHeader("If-Modified-Since", c.lastModified[d]), c.etag[d] && p.setRequestHeader("If-None-Match", c.etag[d]));
            (E.data && E.hasContent && !1 !== E.contentType || f.contentType) && p.setRequestHeader("Content-Type", E.contentType);
            p.setRequestHeader("Accept", E.dataTypes[0] && E.accepts[E.dataTypes[0]] ? E.accepts[E.dataTypes[0]] + ("*" !== E.dataTypes[0] ? ", " + Ab + "; q=0.01" : "") : E.accepts["*"]);
            for (R in E.headers) p.setRequestHeader(R, E.headers[R]);
            if (E.beforeSend && (!1 === E.beforeSend.call(n, p, E) || 2 === m)) return p.abort();
            k = "abort";
            for (R in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) p[R](E[R]);
            if (b = ca(sb, E, f, p)) {
                if (p.readyState = 1, h && ma.trigger("ajaxSend", [p, E]), 2 === m) return p;
                E.async && 0 < E.timeout && (B = a.setTimeout(function() {
                    p.abort("timeout")
                }, E.timeout));
                try {
                    m = 1, b.send(r, l)
                } catch (u) {
                    if (!(2 > m)) throw u;
                    l(-1, u)
                }
            } else l(-1, "No Transport");
            return p
        },
        getJSON: function(e, a, f) {
            return c.get(e, a, f, "json")
        },
        getScript: function(e,
            a) {
            return c.get(e, void 0, a, "script")
        }
    });
    c.each(["get", "post"], function(e, a) {
        c[a] = function(e, f, l, b) {
            return c.isFunction(f) && (b = b || l, l = f, f = void 0), c.ajax(c.extend({
                url: e,
                type: a,
                dataType: b,
                data: f,
                success: l
            }, c.isPlainObject(e) && e))
        }
    });
    c._evalUrl = function(e) {
        return c.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    c.fn.extend({
        wrapAll: function(e) {
            var a;
            return c.isFunction(e) ? this.each(function(a) {
                c(this).wrapAll(e.call(this, a))
            }) : (this[0] && (a = c(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && a.insertBefore(this[0]), a.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
        },
        wrapInner: function(e) {
            return c.isFunction(e) ? this.each(function(a) {
                c(this).wrapInner(e.call(this, a))
            }) : this.each(function() {
                var a = c(this),
                    f = a.contents();
                f.length ? f.wrapAll(e) : a.append(e)
            })
        },
        wrap: function(e) {
            var a = c.isFunction(e);
            return this.each(function(f) {
                c(this).wrapAll(a ? e.call(this, f) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this,
                    "body") || c(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    c.expr.filters.hidden = function(e) {
        return !c.expr.filters.visible(e)
    };
    c.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Mb = /%20/g,
        Fb = /\[\]$/,
        Bb = /\r?\n/g,
        Nb = /^(?:submit|button|image|reset|file)$/i,
        Ob = /^(?:input|select|textarea|keygen)/i;
    c.param = function(e, a) {
        var f, l = [],
            b = function(e, a) {
                a = c.isFunction(a) ? a() : null == a ? "" : a;
                l[l.length] = encodeURIComponent(e) + "=" + encodeURIComponent(a)
            };
        if (void 0 ===
            a && (a = c.ajaxSettings && c.ajaxSettings.traditional), c.isArray(e) || e.jquery && !c.isPlainObject(e)) c.each(e, function() {
            b(this.name, this.value)
        });
        else
            for (f in e) ha(f, e[f], a, b);
        return l.join("&").replace(Mb, "+")
    };
    c.fn.extend({
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = c.prop(this, "elements");
                return e ? c.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !c(this).is(":disabled") && Ob.test(this.nodeName) && !Nb.test(e) &&
                    (this.checked || !Na.test(e))
            }).map(function(e, a) {
                var f = c(this).val();
                return null == f ? null : c.isArray(f) ? c.map(f, function(e) {
                    return {
                        name: a.name,
                        value: e.replace(Bb, "\r\n")
                    }
                }) : {
                    name: a.name,
                    value: f.replace(Bb, "\r\n")
                }
            }).get()
        }
    });
    c.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (e) {}
    };
    var Pb = {
            0: 200,
            1223: 204
        },
        qb = c.ajaxSettings.xhr();
    q.cors = !!qb && "withCredentials" in qb;
    q.ajax = qb = !!qb;
    c.ajaxTransport(function(e) {
        var c, f;
        return q.cors || qb && !e.crossDomain ? {
            send: function(l, b) {
                var d, q = e.xhr();
                if (q.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (d in e.xhrFields) q[d] = e.xhrFields[d];
                e.mimeType && q.overrideMimeType && q.overrideMimeType(e.mimeType);
                e.crossDomain || l["X-Requested-With"] || (l["X-Requested-With"] = "XMLHttpRequest");
                for (d in l) q.setRequestHeader(d, l[d]);
                c = function(e) {
                    return function() {
                        c && (c = f = q.onload = q.onerror = q.onabort = q.onreadystatechange = null, "abort" === e ? q.abort() : "error" === e ? "number" != typeof q.status ? b(0, "error") : b(q.status, q.statusText) : b(Pb[q.status] || q.status,
                            q.statusText, "text" !== (q.responseType || "text") || "string" != typeof q.responseText ? {
                                binary: q.response
                            } : {
                                text: q.responseText
                            }, q.getAllResponseHeaders()))
                    }
                };
                q.onload = c();
                f = q.onerror = c("error");
                void 0 !== q.onabort ? q.onabort = f : q.onreadystatechange = function() {
                    4 === q.readyState && a.setTimeout(function() {
                        c && f()
                    })
                };
                c = c("abort");
                try {
                    q.send(e.hasContent && e.data || null)
                } catch (x) {
                    if (c) throw x;
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return c.globalEval(e), e
            }
        }
    });
    c.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1);
        e.crossDomain && (e.type = "GET")
    });
    c.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var a, f;
            return {
                send: function(l, b) {
                    a = c("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", f = function(e) {
                        a.remove();
                        f = null;
                        e && b("error" === e.type ? 404 : 200, e.type)
                    });
                    F.head.appendChild(a[0])
                },
                abort: function() {
                    f && f()
                }
            }
        }
    });
    var Cb = [],
        wb = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Cb.pop() || c.expando + "_" + tb++;
            return this[e] = !0, e
        }
    });
    c.ajaxPrefilter("json jsonp", function(e, f, l) {
        var b, d, q, x = !1 !== e.jsonp && (wb.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && wb.test(e.data) && "data");
        return x || "jsonp" === e.dataTypes[0] ? (b = e.jsonpCallback = c.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, x ? e[x] = e[x].replace(wb, "$1" +
            b) : !1 !== e.jsonp && (e.url += (ub.test(e.url) ? "&" : "?") + e.jsonp + "=" + b), e.converters["script json"] = function() {
            return q || c.error(b + " was not called"), q[0]
        }, e.dataTypes[0] = "json", d = a[b], a[b] = function() {
            q = arguments
        }, l.always(function() {
            void 0 === d ? c(a).removeProp(b) : a[b] = d;
            e[b] && (e.jsonpCallback = f.jsonpCallback, Cb.push(b));
            q && c.isFunction(d) && d(q[0]);
            q = d = void 0
        }), "script") : void 0
    });
    c.parseHTML = function(e, a, f) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof a && (f = a, a = !1);
        a = a || F;
        var l = Xa.exec(e);
        f = !f && [];
        return l ? [a.createElement(l[1])] : (l = t([e], a, f), f && f.length && c(f).remove(), c.merge([], l.childNodes))
    };
    var Db = c.fn.load;
    c.fn.load = function(e, a, f) {
        if ("string" != typeof e && Db) return Db.apply(this, arguments);
        var l, b, d, q = this,
            x = e.indexOf(" ");
        return -1 < x && (l = c.trim(e.slice(x)), e = e.slice(0, x)), c.isFunction(a) ? (f = a, a = void 0) : a && "object" == typeof a && (b = "POST"), 0 < q.length && c.ajax({
            url: e,
            type: b || "GET",
            dataType: "html",
            data: a
        }).done(function(e) {
            d = arguments;
            q.html(l ? c("<div>").append(c.parseHTML(e)).find(l) : e)
        }).always(f &&
            function(e, a) {
                q.each(function() {
                    f.apply(this, d || [e.responseText, a, e])
                })
            }), this
    };
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, a) {
        c.fn[a] = function(e) {
            return this.on(a, e)
        }
    });
    c.expr.filters.animated = function(e) {
        return c.grep(c.timers, function(a) {
            return e === a.elem
        }).length
    };
    c.offset = {
        setOffset: function(e, a, f) {
            var l, b, d, q, x, B, g = c.css(e, "position"),
                E = c(e),
                R = {};
            "static" === g && (e.style.position = "relative");
            x = E.offset();
            d = c.css(e, "top");
            B = c.css(e, "left");
            ("absolute" ===
                g || "fixed" === g) && -1 < (d + B).indexOf("auto") ? (l = E.position(), q = l.top, b = l.left) : (q = parseFloat(d) || 0, b = parseFloat(B) || 0);
            c.isFunction(a) && (a = a.call(e, f, c.extend({}, x)));
            null != a.top && (R.top = a.top - x.top + q);
            null != a.left && (R.left = a.left - x.left + b);
            "using" in a ? a.using.call(e, R) : E.css(R)
        }
    };
    c.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(f) {
                c.offset.setOffset(this, a, f)
            });
            var f, l, b = this[0],
                d = {
                    top: 0,
                    left: 0
                },
                q = b && b.ownerDocument;
            if (q) return f = q.documentElement, c.contains(f,
                b) ? (d = b.getBoundingClientRect(), l = c.isWindow(q) ? q : 9 === q.nodeType && q.defaultView, {
                top: d.top + l.pageYOffset - f.clientTop,
                left: d.left + l.pageXOffset - f.clientLeft
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, f, l = this[0],
                    b = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === c.css(l, "position") ? f = l.getBoundingClientRect() : (a = this.offsetParent(), f = this.offset(), c.nodeName(a[0], "html") || (b = a.offset()), b.top += c.css(a[0], "borderTopWidth", !0), b.left += c.css(a[0], "borderLeftWidth", !0)), {
                    top: f.top - b.top - c.css(l, "marginTop", !0),
                    left: f.left -
                        b.left - c.css(l, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === c.css(a, "position");) a = a.offsetParent;
                return a || x
            })
        }
    });
    c.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, f) {
        var l = "pageYOffset" === f;
        c.fn[a] = function(b) {
            return Ha(this, function(a, e, b) {
                var d = c.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
                return void 0 === b ? d ? d[f] : a[e] : void(d ? d.scrollTo(l ? d.pageXOffset : b, l ? b : d.pageYOffset) : a[e] = b)
            }, a, b, arguments.length)
        }
    });
    c.each(["top", "left"], function(a, f) {
        c.cssHooks[f] = Q(q.pixelPosition, function(a, e) {
            return e ? (e = W(a, f), ab.test(e) ? c(a).position()[f] + "px" : e) : void 0
        })
    });
    c.each({
        Height: "height",
        Width: "width"
    }, function(a, f) {
        c.each({
            padding: "inner" + a,
            content: f,
            "": "outer" + a
        }, function(l, b) {
            c.fn[b] = function(b, d) {
                var q = arguments.length && (l || "boolean" != typeof b),
                    x = l || (!0 === b || !0 === d ? "margin" : "border");
                return Ha(this, function(f, l, b) {
                    var d;
                    return c.isWindow(f) ? f.document.documentElement["client" + a] : 9 === f.nodeType ? (d = f.documentElement,
                        Math.max(f.body["scroll" + a], d["scroll" + a], f.body["offset" + a], d["offset" + a], d["client" + a])) : void 0 === b ? c.css(f, l, x) : c.style(f, l, b, x)
                }, f, q ? b : void 0, q, null)
            }
        })
    });
    c.fn.extend({
        bind: function(a, c, f) {
            return this.on(a, null, c, f)
        },
        unbind: function(a, c) {
            return this.off(a, null, c)
        },
        delegate: function(a, c, f, l) {
            return this.on(c, a, f, l)
        },
        undelegate: function(a, c, f) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", f)
        },
        size: function() {
            return this.length
        }
    });
    c.fn.andSelf = c.fn.addBack;
    "function" == typeof define &&
        define.amd && define("jquery", [], function() {
            return c
        });
    var Qb = a.jQuery,
        Rb = a.$;
    return c.noConflict = function(e) {
        return a.$ === c && (a.$ = Rb), e && a.jQuery === c && (a.jQuery = Qb), c
    }, d || (a.jQuery = a.$ = c), c
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function d(d) {
        var h = d || window.event,
            n = g.call(arguments, 1),
            r = 0,
            y = 0,
            b = 0,
            u = 0,
            H = 0,
            J = 0;
        if (d = a.event.fix(h), d.type = "mousewheel", "detail" in h && (b = -1 * h.detail), "wheelDelta" in h && (b = h.wheelDelta), "wheelDeltaY" in h && (b = h.wheelDeltaY), "wheelDeltaX" in h && (y = -1 * h.wheelDeltaX), "axis" in h && h.axis === h.HORIZONTAL_AXIS && (y = -1 * b, b = 0), r = 0 === b ? y : b, "deltaY" in h && (b = -1 * h.deltaY, r = b), "deltaX" in
            h && (y = h.deltaX, 0 === b && (r = -1 * y)), 0 !== b || 0 !== y) {
            if (1 === h.deltaMode) var C = a.data(this, "mousewheel-line-height"),
                r = r * C,
                b = b * C,
                y = y * C;
            else 2 === h.deltaMode && (C = a.data(this, "mousewheel-page-height"), r *= C, b *= C, y *= C);
            if (u = Math.max(Math.abs(b), Math.abs(y)), (!p || p > u) && (p = u, s.settings.adjustOldDeltas && ("mousewheel" === h.type && 0 === u % 120) && (p /= 40)), s.settings.adjustOldDeltas && ("mousewheel" === h.type && 0 === u % 120) && (r /= 40, y /= 40, b /= 40), r = Math[1 <= r ? "floor" : "ceil"](r / p), y = Math[1 <= y ? "floor" : "ceil"](y / p), b = Math[1 <= b ? "floor" :
                    "ceil"](b / p), s.settings.normalizeOffset && this.getBoundingClientRect) h = this.getBoundingClientRect(), H = d.clientX - h.left, J = d.clientY - h.top;
            return d.deltaX = y, d.deltaY = b, d.deltaFactor = p, d.offsetX = H, d.offsetY = J, d.deltaMode = 0, n.unshift(d, r, y, b), k && clearTimeout(k), k = setTimeout(m, 200), (a.event.dispatch || a.event.handle).apply(this, n)
        }
    }

    function m() {
        p = null
    }
    var k, p, h = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        n = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll",
            "MozMousePixelScroll"
        ],
        g = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var r = h.length; r;) a.event.fixHooks[h[--r]] = a.event.mouseHooks;
    var s = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var g = n.length; g;) this.addEventListener(n[--g], d, !1);
            else this.onmousewheel = d;
            a.data(this, "mousewheel-line-height", s.getLineHeight(this));
            a.data(this, "mousewheel-page-height", s.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var g = n.length; g;) this.removeEventListener(n[--g],
                    d, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height");
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(d) {
            d = a(d);
            var g = d["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return g.length || (g = a("body")), parseInt(g.css("fontSize"), 10) || parseInt(d.css("fontSize"), 10) || 16
        },
        getPageHeight: function(d) {
            return a(d).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
(function(a) {
    "undefined" !== typeof module && module.exports ? module.exports = a : a(jQuery, window, document)
})(function(a) {
    (function(d) {
        var m = "undefined" !== typeof module && module.exports,
            k = "https:" == document.location.protocol ? "https:" : "http:";
        "function" === typeof define && define.amd || (m ? require("jquery-mousewheel")(a) : a.event.special.mousewheel || a("head").append(decodeURI("%3Cscript src=" + k + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E")));
        d()
    })(function() {
        var d =
            "mCS",
            m = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            k = 0,
            p = {},
            h = window.attachEvent && !window.addEventListener ? 1 : 0,
            n = !1,
            g, r = "mCSB_dragger_onDrag mCSB_scrollTools_onDrag mCS_img_loaded mCS_disabled mCS_destroyed mCS_no_scrollbar mCS-autoHide mCS-dir-rtl mCS_no_scrollbar_y mCS_no_scrollbar_x mCS_y_hidden mCS_x_hidden mCSB_draggerContainer mCSB_buttonUp mCSB_buttonDown mCSB_buttonLeft mCSB_buttonRight".split(" "),
            s = {
                init: function(b) {
                    b = a.extend(!0, {}, m, b);
                    var g = z.call(this);
                    if (b.live) {
                        var h = b.liveSelector || this.selector || ".mCustomScrollbar",
                            n = a(h);
                        if ("off" === b.live) {
                            t(h);
                            return
                        }
                        p[h] = setTimeout(function() {
                            n.mCustomScrollbar(b);
                            "once" === b.live && n.length && t(h)
                        }, 500)
                    } else t(h);
                    b.setWidth = b.set_width ? b.set_width : b.setWidth;
                    b.setHeight = b.set_height ? b.set_height : b.setHeight;
                    b.axis = b.horizontalScroll ? "x" : "yx" === b.axis || "xy" === b.axis || "auto" === b.axis ? "yx" : "x" === b.axis || "horizontal" === b.axis ? "x" : "y";
                    b.scrollInertia =
                        0 < b.scrollInertia && 17 > b.scrollInertia ? 17 : b.scrollInertia;
                    "object" !== typeof b.mouseWheel && !0 == b.mouseWheel && (b.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    });
                    b.mouseWheel.scrollAmount = b.mouseWheelPixels ? b.mouseWheelPixels : b.mouseWheel.scrollAmount;
                    b.mouseWheel.normalizeDelta = b.advanced.normalizeMouseWheelDelta ? b.advanced.normalizeMouseWheelDelta : b.mouseWheel.normalizeDelta;
                    b.scrollButtons.scrollType = "stepped" === b.scrollButtons.scrollType ||
                        "pixels" === b.scrollButtons.scrollType || "step" === b.scrollButtons.scrollType || "click" === b.scrollButtons.scrollType ? "stepped" : "stepless";
                    w(b);
                    return a(g).each(function() {
                        var g = a(this);
                        if (!g.data(d)) {
                            g.data(d, {
                                idx: ++k,
                                opt: b,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: g.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var h = g.data(d),
                                n = h.opt,
                                F = g.data("mcs-axis"),
                                f = g.data("mcs-scrollbar-position"),
                                q = g.data("mcs-theme");
                            F && (n.axis = F);
                            f && (n.scrollbarPosition = f);
                            q && (n.theme = q, w(n));
                            var f = a(this),
                                F = f.data(d),
                                q = F.opt,
                                c = q.autoExpandScrollbar ? " " + r[1] + "_expand" : "",
                                c = ["<div id='mCSB_" + F.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + F.idx + "_scrollbar mCS-" + q.theme + " mCSB_scrollTools_vertical" + c + "'><div class='" + r[12] + "'><div id='mCSB_" + F.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                                    "<div id='mCSB_" + F.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + F.idx + "_scrollbar mCS-" + q.theme + " mCSB_scrollTools_horizontal" + c + "'><div class='" + r[12] + "'><div id='mCSB_" + F.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"
                                ],
                                p = "yx" === q.axis ? "mCSB_vertical_horizontal" : "x" === q.axis ? "mCSB_horizontal" : "mCSB_vertical",
                                c = "yx" === q.axis ? c[0] + c[1] : "x" === q.axis ?
                                c[1] : c[0],
                                m = "yx" === q.axis ? "<div id='mCSB_" + F.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                                u = q.autoHideScrollbar ? " " + r[6] : "",
                                ka = "x" !== q.axis && "rtl" === F.langDir ? " " + r[7] : "";
                            q.setWidth && f.css("width", q.setWidth);
                            q.setHeight && f.css("height", q.setHeight);
                            q.setLeft = "y" !== q.axis && "rtl" === F.langDir ? "989999px" : q.setLeft;
                            f.addClass("mCustomScrollbar _" + d + "_" + F.idx + u + ka).wrapInner("<div id='mCSB_" + F.idx + "' class='mCustomScrollBox mCS-" + q.theme + " " + p + "'><div id='mCSB_" + F.idx + "_container' class='mCSB_container' style='position:relative; top:" +
                                q.setTop + "; left:" + q.setLeft + ";' dir=" + F.langDir + " /></div>");
                            p = a("#mCSB_" + F.idx);
                            u = a("#mCSB_" + F.idx + "_container");
                            "y" === q.axis || q.advanced.autoExpandHorizontalScroll || u.css("width", v(u));
                            "outside" === q.scrollbarPosition ? ("static" === f.css("position") && f.css("position", "relative"), f.css("overflow", "visible"), p.addClass("mCSB_outside").after(c)) : (p.addClass("mCSB_inside").append(c), u.wrap(m));
                            q = a(this).data(d);
                            f = q.opt;
                            q = a(".mCSB_" + q.idx + "_scrollbar:first");
                            c = ca(f.scrollButtons.tabindex) ? "tabindex='" +
                                f.scrollButtons.tabindex + "'" : "";
                            c = ["<a href='#' class='" + r[13] + "' oncontextmenu='return false;' " + c + " />", "<a href='#' class='" + r[14] + "' oncontextmenu='return false;' " + c + " />", "<a href='#' class='" + r[15] + "' oncontextmenu='return false;' " + c + " />", "<a href='#' class='" + r[16] + "' oncontextmenu='return false;' " + c + " />"];
                            c = ["x" === f.axis ? c[2] : c[0], "x" === f.axis ? c[3] : c[1], c[2], c[3]];
                            f.scrollButtons.enable && q.prepend(c[0]).append(c[1]).next(".mCSB_scrollTools").prepend(c[2]).append(c[3]);
                            F = [a("#mCSB_" + F.idx +
                                "_dragger_vertical"), a("#mCSB_" + F.idx + "_dragger_horizontal")];
                            F[0].css("min-height", F[0].height());
                            F[1].css("min-width", F[1].width());
                            h && (n.callbacks.onCreate && "function" === typeof n.callbacks.onCreate) && n.callbacks.onCreate.call(this);
                            a("#mCSB_" + h.idx + "_container img:not(." + r[2] + ")").addClass(r[2]);
                            s.update.call(null, g)
                        }
                    })
                },
                update: function(g, n) {
                    var p = g || z.call(this);
                    return a(p).each(function() {
                        var g = a(this);
                        if (g.data(d)) {
                            var p = g.data(d),
                                L = p.opt,
                                m = a("#mCSB_" + p.idx + "_container"),
                                k = a("#mCSB_" + p.idx),
                                f = [a("#mCSB_" + p.idx + "_dragger_vertical"), a("#mCSB_" + p.idx + "_dragger_horizontal")];
                            if (m.length) {
                                p.tweenRunning && U(g);
                                n && (p && L.callbacks.onBeforeUpdate && "function" === typeof L.callbacks.onBeforeUpdate) && L.callbacks.onBeforeUpdate.call(this);
                                g.hasClass(r[3]) && g.removeClass(r[3]);
                                g.hasClass(r[4]) && g.removeClass(r[4]);
                                k.css("max-height", "none");
                                k.height() !== g.height() && k.css("max-height", g.height());
                                var q = a(this).data(d),
                                    k = q.opt,
                                    q = a("#mCSB_" + q.idx + "_container");
                                if (k.advanced.autoExpandHorizontalScroll &&
                                    "y" !== k.axis) {
                                    q.css({
                                        width: "auto",
                                        "min-width": 0,
                                        "overflow-x": "scroll"
                                    });
                                    var c = Math.ceil(q[0].scrollWidth);
                                    3 === k.advanced.autoExpandHorizontalScroll || 2 !== k.advanced.autoExpandHorizontalScroll && c > q.parent().width() ? q.css({
                                        width: c,
                                        "min-width": "100%",
                                        "overflow-x": "inherit"
                                    }) : q.css({
                                        "overflow-x": "inherit",
                                        position: "absolute"
                                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                        width: Math.ceil(q[0].getBoundingClientRect().right + 0.4) - Math.floor(q[0].getBoundingClientRect().left),
                                        "min-width": "100%",
                                        position: "relative"
                                    }).unwrap()
                                }
                                "y" === L.axis || L.advanced.autoExpandHorizontalScroll || m.css("width", v(m));
                                var M = a(this).data(d),
                                    k = a("#mCSB_" + M.idx),
                                    c = a("#mCSB_" + M.idx + "_container"),
                                    q = null == M.overflowed ? c.height() : c.outerHeight(!1),
                                    M = null == M.overflowed ? c.width() : c.outerWidth(!1),
                                    ka = c[0].scrollHeight,
                                    c = c[0].scrollWidth;
                                ka > q && (q = ka);
                                c > M && (M = c);
                                k = [q > k.height(), M > k.width()];
                                p.overflowed = k;
                                J.call(this);
                                L.autoDraggerLength && (k = a(this).data(d), q = a("#mCSB_" + k.idx), c = a("#mCSB_" + k.idx + "_container"),
                                    k = [a("#mCSB_" + k.idx + "_dragger_vertical"), a("#mCSB_" + k.idx + "_dragger_horizontal")], q = [q.height() / c.outerHeight(!1), q.width() / c.outerWidth(!1)], q = [parseInt(k[0].css("min-height")), Math.round(q[0] * k[0].parent().height()), parseInt(k[1].css("min-width")), Math.round(q[1] * k[1].parent().width())], c = h && q[3] < q[2] ? q[2] : q[3], k[0].css({
                                        height: h && q[1] < q[0] ? q[0] : q[1],
                                        "max-height": k[0].parent().height() - 10
                                    }).find(".mCSB_dragger_bar").css({
                                        "line-height": q[0] + "px"
                                    }), k[1].css({
                                        width: c,
                                        "max-width": k[1].parent().width() -
                                            10
                                    }));
                                k = a(this).data(d);
                                c = a("#mCSB_" + k.idx);
                                M = a("#mCSB_" + k.idx + "_container");
                                q = [a("#mCSB_" + k.idx + "_dragger_vertical"), a("#mCSB_" + k.idx + "_dragger_horizontal")];
                                c = [M.outerHeight(!1) - c.height(), M.outerWidth(!1) - c.width()];
                                q = [c[0] / (q[0].parent().height() - q[0].height()), c[1] / (q[1].parent().width() - q[1].width())];
                                k.scrollRatio = {
                                    y: q[0],
                                    x: q[1]
                                };
                                u.call(this);
                                m = [Math.abs(m[0].offsetTop), Math.abs(m[0].offsetLeft)];
                                "x" !== L.axis && (p.overflowed[0] ? f[0].height() > f[0].parent().height() ? b.call(this) : (T(g, m[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }), p.contentReset.y = null) : (b.call(this), "y" === L.axis ? H.call(this) : "yx" === L.axis && p.overflowed[1] && T(g, m[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                })));
                                "y" !== L.axis && (p.overflowed[1] ? f[1].width() > f[1].parent().width() ? b.call(this) : (T(g, m[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }), p.contentReset.x = null) : (b.call(this), "x" === L.axis ? H.call(this) : "yx" === L.axis && p.overflowed[0] && T(g, m[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                })));
                                n && p && (2 === n && L.callbacks.onImageLoad &&
                                    "function" === typeof L.callbacks.onImageLoad ? L.callbacks.onImageLoad.call(this) : 3 === n && L.callbacks.onSelectorChange && "function" === typeof L.callbacks.onSelectorChange ? L.callbacks.onSelectorChange.call(this) : L.callbacks.onUpdate && "function" === typeof L.callbacks.onUpdate && L.callbacks.onUpdate.call(this));
                                X.call(this)
                            }
                        }
                    })
                },
                scrollTo: function(b, g) {
                    if ("undefined" != typeof b && null != b) {
                        var h = z.call(this);
                        return a(h).each(function() {
                            var h = a(this);
                            if (h.data(d)) {
                                var n = h.data(d),
                                    r = n.opt,
                                    p = a.extend(!0, {}, {
                                        trigger: "external",
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    }, g),
                                    k = fa.call(this, b),
                                    f = 0 < p.scrollInertia && 17 > p.scrollInertia ? 17 : p.scrollInertia;
                                k[0] = Y.call(this, k[0], "y");
                                k[1] = Y.call(this, k[1], "x");
                                p.moveDragger && (k[0] *= n.scrollRatio.y, k[1] *= n.scrollRatio.x);
                                p.dur = ha() ? 0 : f;
                                setTimeout(function() {
                                    null !== k[0] && ("undefined" !== typeof k[0] && "x" !== r.axis && n.overflowed[0]) && (p.dir = "y", p.overwrite = "all", T(h, k[0].toString(), p));
                                    null !== k[1] &&
                                        ("undefined" !== typeof k[1] && "y" !== r.axis && n.overflowed[1]) && (p.dir = "x", p.overwrite = "none", T(h, k[1].toString(), p))
                                }, p.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var b = z.call(this);
                    return a(b).each(function() {
                        var b = a(this);
                        b.data(d) && U(b)
                    })
                },
                disable: function(g) {
                    var h = z.call(this);
                    return a(h).each(function() {
                        var h = a(this);
                        h.data(d) && (h.data(d), X.call(this, "remove"), H.call(this), g && b.call(this), J.call(this, !0), h.addClass(r[3]))
                    })
                },
                destroy: function() {
                    var g = z.call(this);
                    return a(g).each(function() {
                        var h = a(this);
                        if (h.data(d)) {
                            var n =
                                h.data(d),
                                p = n.opt,
                                k = a("#mCSB_" + n.idx),
                                m = a("#mCSB_" + n.idx + "_container"),
                                u = a(".mCSB_" + n.idx + "_scrollbar");
                            p.live && t(p.liveSelector || a(g).selector);
                            X.call(this, "remove");
                            H.call(this);
                            b.call(this);
                            h.removeData(d);
                            P(this, "mcs");
                            u.remove();
                            m.find("img." + r[2]).removeClass(r[2]);
                            k.replaceWith(m.contents());
                            h.removeClass("mCustomScrollbar _" + d + "_" + n.idx + " " + r[6] + " " + r[7] + " " + r[5] + " " + r[3]).addClass(r[4])
                        }
                    })
                }
            },
            z = function() {
                return "object" !== typeof a(this) || 1 > a(this).length ? ".mCustomScrollbar" : this
            },
            w = function(b) {
                b.autoDraggerLength = -1 < a.inArray(b.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) ? !1 : b.autoDraggerLength;
                b.autoExpandScrollbar = -1 < a.inArray(b.theme, "rounded-dots rounded-dots-dark 3d 3d-dark 3d-thick 3d-thick-dark inset inset-dark inset-2 inset-2-dark inset-3 inset-3-dark".split(" ")) ? !1 : b.autoExpandScrollbar;
                b.scrollButtons.enable = -1 < a.inArray(b.theme, ["minimal", "minimal-dark"]) ? !1 : b.scrollButtons.enable;
                b.autoHideScrollbar = -1 < a.inArray(b.theme, ["minimal", "minimal-dark"]) ? !0 : b.autoHideScrollbar;
                b.scrollbarPosition = -1 < a.inArray(b.theme, ["minimal", "minimal-dark"]) ? "outside" : b.scrollbarPosition
            },
            t = function(a) {
                p[a] && (clearTimeout(p[a]), P(p, a))
            },
            v = function(b) {
                var d = [b[0].scrollWidth, Math.max.apply(Math, b.children().map(function() {
                    return a(this).outerWidth(!0)
                }).get())];
                b = b.parent().width();
                return d[0] > b ? d[0] : d[1] > b ? d[1] : "100%"
            },
            y = function(a, b, d) {
                d = d ? r[0] + "_expanded" : "";
                var g = a.closest(".mCSB_scrollTools");
                "active" === b ? (a.toggleClass(r[0] + " " + d), g.toggleClass(r[1]), a[0]._draggable = a[0]._draggable ?
                    0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(r[0]), g.removeClass(r[1])) : (a.addClass(r[0]), g.addClass(r[1])))
            },
            b = function() {
                var b = a(this),
                    g = b.data(d),
                    h = g.opt,
                    n = a("#mCSB_" + g.idx),
                    p = a("#mCSB_" + g.idx + "_container"),
                    k = [a("#mCSB_" + g.idx + "_dragger_vertical"), a("#mCSB_" + g.idx + "_dragger_horizontal")];
                U(b);
                if ("x" !== h.axis && !g.overflowed[0] || "y" === h.axis && g.overflowed[0]) k[0].add(p).css("top", 0), T(b, "_resetY");
                if ("y" !== h.axis && !g.overflowed[1] || "x" === h.axis && g.overflowed[1]) h = dx = 0, "rtl" === g.langDir && (h = n.width() -
                    p.outerWidth(!1), dx = Math.abs(h / g.scrollRatio.x)), p.css("left", h), k[1].css("left", dx), T(b, "_resetX")
            },
            u = function() {
                var b = a(this),
                    g = b.data(d),
                    h = g.opt;
                if (!g.bindEvents) {
                    N.call(this);
                    h.contentTouchScroll && G.call(this);
                    I.call(this);
                    if (h.mouseWheel.enable) {
                        var n = function() {
                                p = setTimeout(function() {
                                    a.event.special.mousewheel ? (clearTimeout(p), K.call(b[0])) : n()
                                }, 100)
                            },
                            p;
                        n()
                    }
                    W.call(this);
                    S.call(this);
                    h.advanced.autoScrollOnFocus && Q.call(this);
                    h.scrollButtons.enable && ga.call(this);
                    h.keyboard.enable && O.call(this);
                    g.bindEvents = !0
                }
            },
            H = function() {
                var b = a(this),
                    g = b.data(d),
                    h = g.opt,
                    n = d + "_" + g.idx,
                    p = ".mCSB_" + g.idx + "_scrollbar",
                    p = a("#mCSB_" + g.idx + ",#mCSB_" + g.idx + "_container,#mCSB_" + g.idx + "_container_wrapper," + p + " ." + r[12] + ",#mCSB_" + g.idx + "_dragger_vertical,#mCSB_" + g.idx + "_dragger_horizontal," + p + ">a"),
                    k = a("#mCSB_" + g.idx + "_container");
                h.advanced.releaseDraggableSelectors && p.add(a(h.advanced.releaseDraggableSelectors));
                h.advanced.extraDraggableSelectors && p.add(a(h.advanced.extraDraggableSelectors));
                g.bindEvents && (a(document).add(a(!A() ||
                    top.document)).unbind("." + n), p.each(function() {
                    a(this).unbind("." + n)
                }), clearTimeout(b[0]._focusTimeout), P(b[0], "_focusTimeout"), clearTimeout(g.sequential.step), P(g.sequential, "step"), clearTimeout(k[0].onCompleteTimeout), P(k[0], "onCompleteTimeout"), g.bindEvents = !1)
            },
            J = function(b) {
                var g = a(this),
                    h = g.data(d),
                    n = h.opt,
                    p = a("#mCSB_" + h.idx + "_container_wrapper"),
                    p = p.length ? p : a("#mCSB_" + h.idx + "_container"),
                    k = [a("#mCSB_" + h.idx + "_scrollbar_vertical"), a("#mCSB_" + h.idx + "_scrollbar_horizontal")],
                    m = [k[0].find(".mCSB_dragger"),
                        k[1].find(".mCSB_dragger")
                    ];
                "x" !== n.axis && (h.overflowed[0] && !b ? (k[0].add(m[0]).add(k[0].children("a")).css("display", "block"), p.removeClass(r[8] + " " + r[10])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && m[0].css("display", "none"), p.removeClass(r[10])) : (k[0].css("display", "none"), p.addClass(r[10])), p.addClass(r[8])));
                "y" !== n.axis && (h.overflowed[1] && !b ? (k[1].add(m[1]).add(k[1].children("a")).css("display", "block"), p.removeClass(r[9] + " " + r[11])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar &&
                    m[1].css("display", "none"), p.removeClass(r[11])) : (k[1].css("display", "none"), p.addClass(r[11])), p.addClass(r[9])));
                h.overflowed[0] || h.overflowed[1] ? g.removeClass(r[5]) : g.addClass(r[5])
            },
            C = function(b) {
                var d = b.type,
                    g = b.target.ownerDocument !== document ? [a(frameElement).offset().top, a(frameElement).offset().left] : null,
                    h = A() && b.target.ownerDocument !== top.document ? [a(b.view.frameElement).offset().top, a(b.view.frameElement).offset().left] : [0, 0];
                switch (d) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return g ? [b.originalEvent.pageY - g[0] + h[0], b.originalEvent.pageX - g[1] + h[1], !1] : [b.originalEvent.pageY, b.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        return d = b.originalEvent.touches[0] || b.originalEvent.changedTouches[0], g = b.originalEvent.touches.length || b.originalEvent.changedTouches.length, b.target.ownerDocument !== document ? [d.screenY, d.screenX, 1 < g] : [d.pageY, d.pageX, 1 < g];
                    default:
                        return g ? [b.pageY - g[0] + h[0], b.pageX - g[1] + h[1], !1] : [b.pageY, b.pageX, !1]
                }
            },
            N = function() {
                function b(a) {
                    var c =
                        s.find("iframe");
                    c.length && c.css("pointer-events", a ? "auto" : "none")
                }

                function g(a, c, f, b) {
                    s[0].idleTimer = 233 > r.scrollInertia ? 250 : 0;
                    if (q.attr("id") === u[1]) {
                        var d = "x";
                        a = (q[0].offsetLeft - c + b) * k.scrollRatio.x
                    } else d = "y", a = (q[0].offsetTop - a + f) * k.scrollRatio.y;
                    T(p, a.toString(), {
                        dir: d,
                        drag: !0
                    })
                }
                var p = a(this),
                    k = p.data(d),
                    r = k.opt,
                    m = d + "_" + k.idx,
                    u = ["mCSB_" + k.idx + "_dragger_vertical", "mCSB_" + k.idx + "_dragger_horizontal"],
                    s = a("#mCSB_" + k.idx + "_container"),
                    f = a("#" + u[0] + ",#" + u[1]),
                    q, c, M, t = r.advanced.releaseDraggableSelectors ?
                    f.add(a(r.advanced.releaseDraggableSelectors)) : f,
                    Z = r.advanced.extraDraggableSelectors ? a(!A() || top.document).add(a(r.advanced.extraDraggableSelectors)) : a(!A() || top.document);
                f.bind("mousedown." + m + " touchstart." + m + " pointerdown." + m + " MSPointerDown." + m, function(f) {
                    f.stopImmediatePropagation();
                    f.preventDefault();
                    if (!f.which || 1 === f.which) {
                        n = !0;
                        h && (document.onselectstart = function() {
                            return !1
                        });
                        b(!1);
                        U(p);
                        q = a(this);
                        var d = q.offset(),
                            g = C(f)[0] - d.top;
                        f = C(f)[1] - d.left;
                        var k = q.height() + d.top,
                            d = q.width() + d.left;
                        g < k && (0 < g && f < d && 0 < f) && (c = g, M = f);
                        y(q, "active", r.autoExpandScrollbar)
                    }
                }).bind("touchmove." + m, function(a) {
                    a.stopImmediatePropagation();
                    a.preventDefault();
                    var f = q.offset(),
                        b = C(a)[0] - f.top;
                    a = C(a)[1] - f.left;
                    g(c, M, b, a)
                });
                a(document).add(Z).bind("mousemove." + m + " pointermove." + m + " MSPointerMove." + m, function(a) {
                    if (q) {
                        var f = q.offset(),
                            b = C(a)[0] - f.top;
                        a = C(a)[1] - f.left;
                        c === b && M === a || g(c, M, b, a)
                    }
                }).add(t).bind("mouseup." + m + " touchend." + m + " pointerup." + m + " MSPointerUp." + m, function(a) {
                    q && (y(q, "active", r.autoExpandScrollbar),
                        q = null);
                    n = !1;
                    h && (document.onselectstart = null);
                    b(!0)
                })
            },
            G = function() {
                function b(a) {
                    if (!ja(a) || n || C(a)[2]) g = 0;
                    else {
                        g = 1;
                        ha = P = 0;
                        Z = 1;
                        u.removeClass("mCS_touch_action");
                        var c = M.offset();
                        y = C(a)[0] - c.top;
                        v = C(a)[1] - c.left;
                        ca = [C(a)[0], C(a)[1]]
                    }
                }

                function h(a) {
                    if (ja(a) && (!n && !C(a)[2]) && (f.documentTouchScroll || a.preventDefault(), a.stopImmediatePropagation(), (!ha || P) && Z)) {
                        J = V();
                        var b = c.offset(),
                            d = C(a)[0] - b.top,
                            b = C(a)[1] - b.left;
                        H.push(d);
                        G.push(b);
                        ca[2] = Math.abs(C(a)[0] - ca[0]);
                        ca[3] = Math.abs(C(a)[1] - ca[1]);
                        if (s.overflowed[0]) var q =
                            t[0].parent().height() - t[0].height(),
                            q = 0 < y - d && d - y > -(q * s.scrollRatio.y) && (2 * ca[3] < ca[2] || "yx" === f.axis);
                        if (s.overflowed[1]) var g = t[1].parent().width() - t[1].width(),
                            g = 0 < v - b && b - v > -(g * s.scrollRatio.x) && (2 * ca[2] < ca[3] || "yx" === f.axis);
                        q || g ? (fa || a.preventDefault(), P = 1) : (ha = 1, u.addClass("mCS_touch_action"));
                        fa && a.preventDefault();
                        Q = "yx" === f.axis ? [y - d, v - b] : "x" === f.axis ? [null, v - b] : [y - d, null];
                        M[0].idleTimer = 250;
                        s.overflowed[0] && m(Q[0], S, "mcsLinearOut", "y", "all", !0);
                        s.overflowed[1] && m(Q[1], S, "mcsLinearOut", "x",
                            O, !0)
                    }
                }

                function p(a) {
                    if (!ja(a) || n || C(a)[2]) g = 0;
                    else {
                        g = 1;
                        a.stopImmediatePropagation();
                        U(u);
                        K = V();
                        var f = c.offset();
                        w = C(a)[0] - f.top;
                        z = C(a)[1] - f.left;
                        H = [];
                        G = []
                    }
                }

                function k(a) {
                    if (ja(a) && !n && !C(a)[2]) {
                        Z = 0;
                        a.stopImmediatePropagation();
                        ha = P = 0;
                        I = V();
                        var b = c.offset(),
                            d = C(a)[0] - b.top,
                            b = C(a)[1] - b.left;
                        if (!(30 < I - J)) {
                            W = 1E3 / (I - K);
                            var q = (a = 2.5 > W) ? [H[H.length - 2], G[G.length - 2]] : [0, 0];
                            N = a ? [d - q[0], b - q[1]] : [d - w, b - z];
                            d = [Math.abs(N[0]), Math.abs(N[1])];
                            W = a ? [Math.abs(N[0] / 4), Math.abs(N[1] / 4)] : [W, W];
                            a = [Math.abs(M[0].offsetTop) -
                                N[0] * r(d[0] / W[0], W[0]), Math.abs(M[0].offsetLeft) - N[1] * r(d[1] / W[1], W[1])
                            ];
                            Q = "yx" === f.axis ? [a[0], a[1]] : "x" === f.axis ? [null, a[1]] : [a[0], null];
                            ba = [4 * d[0] + f.scrollInertia, 4 * d[1] + f.scrollInertia];
                            a = parseInt(f.contentTouchScroll) || 0;
                            Q[0] = d[0] > a ? Q[0] : 0;
                            Q[1] = d[1] > a ? Q[1] : 0;
                            s.overflowed[0] && m(Q[0], ba[0], "mcsEaseOut", "y", O, !1);
                            s.overflowed[1] && m(Q[1], ba[1], "mcsEaseOut", "x", O, !1)
                        }
                    }
                }

                function r(a, c) {
                    var f = [1.5 * c, 2 * c, c / 1.5, c / 2];
                    return 90 < a ? 4 < c ? f[0] : f[3] : 60 < a ? 3 < c ? f[3] : f[2] : 30 < a ? 8 < c ? f[1] : 6 < c ? f[0] : 4 < c ? c : f[2] : 8 < c ? c : f[3]
                }

                function m(a, c, f, b, d, q) {
                    a && T(u, a.toString(), {
                        dur: c,
                        scrollEasing: f,
                        dir: b,
                        overwrite: d,
                        drag: q
                    })
                }
                var u = a(this),
                    s = u.data(d),
                    f = s.opt,
                    q = d + "_" + s.idx,
                    c = a("#mCSB_" + s.idx),
                    M = a("#mCSB_" + s.idx + "_container"),
                    t = [a("#mCSB_" + s.idx + "_dragger_vertical"), a("#mCSB_" + s.idx + "_dragger_horizontal")],
                    Z, y, v, w, z, H = [],
                    G = [],
                    K, J, I, N, W, Q, S = 0,
                    ba, O = "yx" === f.axis ? "none" : "all",
                    ca = [],
                    P, ha, ga = M.find("iframe"),
                    Y = ["touchstart." + q + " pointerdown." + q + " MSPointerDown." + q, "touchmove." + q + " pointermove." + q + " MSPointerMove." + q, "touchend." + q + " pointerup." +
                        q + " MSPointerUp." + q
                    ],
                    fa = void 0 !== document.body.style.touchAction;
                M.bind(Y[0], function(a) {
                    b(a)
                }).bind(Y[1], function(a) {
                    h(a)
                });
                c.bind(Y[0], function(a) {
                    p(a)
                }).bind(Y[2], function(a) {
                    k(a)
                });
                ga.length && ga.each(function() {
                    a(this).load(function() {
                        A(this) && a(this.contentDocument || this.contentWindow.document).bind(Y[0], function(a) {
                            b(a);
                            p(a)
                        }).bind(Y[1], function(a) {
                            h(a)
                        }).bind(Y[2], function(a) {
                            k(a)
                        })
                    })
                })
            },
            I = function() {
                function b(a, c, d) {
                    r.type = d && f ? "stepped" : "stepless";
                    r.scrollAmount = 10;
                    ea(h, a, c, "mcsLinearOut",
                        d ? 60 : null)
                }
                var h = a(this),
                    p = h.data(d),
                    k = p.opt,
                    r = p.sequential,
                    m = d + "_" + p.idx,
                    u = a("#mCSB_" + p.idx + "_container"),
                    s = u.parent(),
                    f;
                u.bind("mousedown." + m, function(a) {
                    g || f || (f = 1, n = !0)
                }).add(document).bind("mousemove." + m, function(a) {
                    if (!g && f && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                        var c = u.offset(),
                            d = C(a)[0] - c.top + u[0].offsetTop;
                        a = C(a)[1] - c.left + u[0].offsetLeft;
                        0 < d && d < s.height() && 0 < a && a < s.width() ? r.step &&
                            b("off", null, "stepped") : ("x" !== k.axis && p.overflowed[0] && (0 > d ? b("on", 38) : d > s.height() && b("on", 40)), "y" !== k.axis && p.overflowed[1] && (0 > a ? b("on", 37) : a > s.width() && b("on", 39)))
                    }
                }).bind("mouseup." + m + " dragend." + m, function(a) {
                    g || (f && (f = 0, b("off", null)), n = !1)
                })
            },
            K = function() {
                function b(f, q) {
                    U(g);
                    var c = g,
                        k = f.target,
                        u = k.nodeName.toLowerCase(),
                        c = c.data(d).opt.mouseWheel.disableOver,
                        s = ["select", "textarea"];
                    if (!(-1 < a.inArray(u, c)) || -1 < a.inArray(u, s) && !a(k).is(":focus")) {
                        c = "auto" !== p.mouseWheel.deltaFactor ? parseInt(p.mouseWheel.deltaFactor) :
                            h && 100 > f.deltaFactor ? 100 : f.deltaFactor || 100;
                        k = p.scrollInertia;
                        if ("x" === p.axis || "x" === p.mouseWheel.axis) var u = "x",
                            c = [Math.round(c * n.scrollRatio.x), parseInt(p.mouseWheel.scrollAmount)],
                            c = "auto" !== p.mouseWheel.scrollAmount ? c[1] : c[0] >= r.width() ? 0.9 * r.width() : c[0],
                            s = Math.abs(a("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                            t = m[1][0].offsetLeft,
                            y = m[1].parent().width() - m[1].width(),
                            v = f.deltaX || f.deltaY || q;
                        else u = "y", c = [Math.round(c * n.scrollRatio.y), parseInt(p.mouseWheel.scrollAmount)], c = "auto" !== p.mouseWheel.scrollAmount ?
                            c[1] : c[0] >= r.height() ? 0.9 * r.height() : c[0], s = Math.abs(a("#mCSB_" + n.idx + "_container")[0].offsetTop), t = m[0][0].offsetTop, y = m[0].parent().height() - m[0].height(), v = f.deltaY || q;
                        if (("y" !== u || n.overflowed[0]) && ("x" !== u || n.overflowed[1])) {
                            if (p.mouseWheel.invert || f.webkitDirectionInvertedFromDevice) v = -v;
                            p.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1);
                            if (0 < v && 0 !== t || 0 > v && t !== y || p.mouseWheel.preventDefault) f.stopImmediatePropagation(), f.preventDefault();
                            2 > f.deltaFactor && !p.mouseWheel.normalizeDelta && (c = f.deltaFactor,
                                k = 17);
                            T(g, (s - v * c).toString(), {
                                dir: u,
                                dur: k
                            })
                        }
                    }
                }
                if (a(this).data(d)) {
                    var g = a(this),
                        n = g.data(d),
                        p = n.opt,
                        k = d + "_" + n.idx,
                        r = a("#mCSB_" + n.idx),
                        m = [a("#mCSB_" + n.idx + "_dragger_vertical"), a("#mCSB_" + n.idx + "_dragger_horizontal")],
                        u = a("#mCSB_" + n.idx + "_container").find("iframe");
                    u.length && u.each(function() {
                        a(this).load(function() {
                            A(this) && a(this.contentDocument || this.contentWindow.document).bind("mousewheel." + k, function(a, d) {
                                b(a, d)
                            })
                        })
                    });
                    r.bind("mousewheel." + k, function(a, d) {
                        b(a, d)
                    })
                }
            },
            A = function(a) {
                var b = null;
                if (a) try {
                    g =
                        a.contentDocument || a.contentWindow.document, b = g.body.innerHTML
                } catch (d) {} else try {
                    var g = top.document,
                        b = g.body.innerHTML
                } catch (h) {}
                return null !== b
            },
            W = function() {
                var b = a(this),
                    g = b.data(d),
                    h = d + "_" + g.idx,
                    p = a("#mCSB_" + g.idx + "_container"),
                    k = p.parent(),
                    m;
                a(".mCSB_" + g.idx + "_scrollbar ." + r[12]).bind("mousedown." + h + " touchstart." + h + " pointerdown." + h + " MSPointerDown." + h, function(b) {
                    n = !0;
                    a(b.target).hasClass("mCSB_dragger") || (m = 1)
                }).bind("touchend." + h + " pointerup." + h + " MSPointerUp." + h, function(a) {
                    n = !1
                }).bind("click." +
                    h,
                    function(d) {
                        if (m && (m = 0, a(d.target).hasClass(r[12]) || a(d.target).hasClass("mCSB_draggerRail"))) {
                            U(b);
                            var h = a(this),
                                f = h.find(".mCSB_dragger");
                            if (0 < h.parent(".mCSB_scrollTools_horizontal").length) {
                                if (!g.overflowed[1]) return;
                                h = "x";
                                d = d.pageX > f.offset().left ? -1 : 1;
                                d = Math.abs(p[0].offsetLeft) - d * 0.9 * k.width()
                            } else {
                                if (!g.overflowed[0]) return;
                                h = "y";
                                d = d.pageY > f.offset().top ? -1 : 1;
                                d = Math.abs(p[0].offsetTop) - d * 0.9 * k.height()
                            }
                            T(b, d.toString(), {
                                dir: h,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    })
            },
            Q = function() {
                var b = a(this),
                    g = b.data(d),
                    h = g.opt,
                    n = d + "_" + g.idx,
                    p = a("#mCSB_" + g.idx + "_container"),
                    k = p.parent();
                p.bind("focusin." + n, function(d) {
                    var g = a(document.activeElement);
                    d = p.find(".mCustomScrollBox").length;
                    g.is(h.advanced.autoScrollOnFocus) && (U(b), clearTimeout(b[0]._focusTimeout), b[0]._focusTimer = d ? 17 * d : 0, b[0]._focusTimeout = setTimeout(function() {
                        var a = [ba(g)[0], ba(g)[1]],
                            d = [p[0].offsetTop, p[0].offsetLeft],
                            d = [0 <= d[0] + a[0] && d[0] + a[0] < k.height() - g.outerHeight(!1), 0 <= d[1] + a[1] && d[0] + a[1] < k.width() - g.outerWidth(!1)],
                            c = "yx" !==
                            h.axis || d[0] || d[1] ? "all" : "none";
                        "x" === h.axis || d[0] || T(b, a[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: 0
                        });
                        "y" === h.axis || d[1] || T(b, a[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: 0
                        })
                    }, b[0]._focusTimer))
                })
            },
            S = function() {
                var b = a(this).data(d),
                    g = d + "_" + b.idx,
                    h = a("#mCSB_" + b.idx + "_container").parent();
                h.bind("scroll." + g, function(d) {
                    0 === h.scrollTop() && 0 === h.scrollLeft() || a(".mCSB_" + b.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            ga = function() {
                var b = a(this),
                    g =
                    b.data(d),
                    h = g.opt,
                    p = g.sequential,
                    k = d + "_" + g.idx;
                a(".mCSB_" + g.idx + "_scrollbar>a").bind("mousedown." + k + " touchstart." + k + " pointerdown." + k + " MSPointerDown." + k + " mouseup." + k + " touchend." + k + " pointerup." + k + " MSPointerUp." + k + " mouseout." + k + " pointerout." + k + " MSPointerOut." + k + " click." + k, function(d) {
                    function k(a, d) {
                        p.scrollAmount = h.scrollButtons.scrollAmount;
                        ea(b, a, d)
                    }
                    d.preventDefault();
                    if (!d.which || 1 === d.which) {
                        var r = a(this).attr("class");
                        p.type = h.scrollButtons.scrollType;
                        switch (d.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" ===
                                    p.type) break;
                                n = !0;
                                g.tweenRunning = !1;
                                k("on", r);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === p.type) break;
                                n = !1;
                                p.dir && k("off", r);
                                break;
                            case "click":
                                if ("stepped" !== p.type || g.tweenRunning) break;
                                k("on", r)
                        }
                    }
                })
            },
            O = function() {
                function b(c) {
                    function d(a, c) {
                        p.type = n.keyboard.scrollType;
                        p.scrollAmount = n.keyboard.scrollAmount;
                        "stepped" === p.type && h.tweenRunning || ea(g, a, c)
                    }
                    switch (c.type) {
                        case "blur":
                            h.tweenRunning &&
                                p.dir && d("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var k = c.keyCode ? c.keyCode : c.which,
                                r = "on";
                            if ("x" !== n.axis && (38 === k || 40 === k) || "y" !== n.axis && (37 === k || 39 === k)) {
                                if ((38 === k || 40 === k) && !h.overflowed[0] || (37 === k || 39 === k) && !h.overflowed[1]) break;
                                "keyup" === c.type && (r = "off");
                                a(document.activeElement).is(q) || (c.preventDefault(), c.stopImmediatePropagation(), d(r, k))
                            } else if (33 === k || 34 === k) {
                                if (h.overflowed[0] || h.overflowed[1]) c.preventDefault(), c.stopImmediatePropagation();
                                "keyup" === c.type && (U(g), k = 34 === k ?
                                    -1 : 1, "x" === n.axis || "yx" === n.axis && h.overflowed[1] && !h.overflowed[0] ? (c = "x", k = Math.abs(m[0].offsetLeft) - k * 0.9 * f.width()) : (c = "y", k = Math.abs(m[0].offsetTop) - k * 0.9 * f.height()), T(g, k.toString(), {
                                        dir: c,
                                        scrollEasing: "mcsEaseInOut"
                                    }))
                            } else if ((35 === k || 36 === k) && !a(document.activeElement).is(q)) {
                                if (h.overflowed[0] || h.overflowed[1]) c.preventDefault(), c.stopImmediatePropagation();
                                "keyup" === c.type && ("x" === n.axis || "yx" === n.axis && h.overflowed[1] && !h.overflowed[0] ? (c = "x", k = 35 === k ? Math.abs(f.width() - m.outerWidth(!1)) :
                                    0) : (c = "y", k = 35 === k ? Math.abs(f.height() - m.outerHeight(!1)) : 0), T(g, k.toString(), {
                                    dir: c,
                                    scrollEasing: "mcsEaseInOut"
                                }))
                            }
                    }
                }
                var g = a(this),
                    h = g.data(d),
                    n = h.opt,
                    p = h.sequential,
                    k = d + "_" + h.idx,
                    r = a("#mCSB_" + h.idx),
                    m = a("#mCSB_" + h.idx + "_container"),
                    f = m.parent(),
                    q = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    c = m.find("iframe"),
                    u = ["blur." + k + " keydown." + k + " keyup." + k];
                c.length && c.each(function() {
                    a(this).load(function() {
                        A(this) && a(this.contentDocument || this.contentWindow.document).bind(u[0], function(a) {
                            b(a)
                        })
                    })
                });
                r.attr("tabindex", "0").bind(u[0], function(a) {
                    b(a)
                })
            },
            ea = function(b, g, h, n, k) {
                function p(a) {
                    u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                    var c = "stepped" !== f.type,
                        d = k ? k : a ? c ? s / 1.5 : t : 1E3 / 60,
                        g = a ? c ? 7.5 : 40 : 2.5,
                        h = [Math.abs(q[0].offsetTop), Math.abs(q[0].offsetLeft)],
                        r = [10 < m.scrollRatio.y ? 10 : m.scrollRatio.y, 10 < m.scrollRatio.x ? 10 : m.scrollRatio.x],
                        g = "x" === f.dir[0] ? h[1] + f.dir[1] * r[1] * g : h[0] + f.dir[1] * r[0] * g,
                        r = "x" === f.dir[0] ? h[1] + f.dir[1] *
                        parseInt(f.scrollAmount) : h[0] + f.dir[1] * parseInt(f.scrollAmount),
                        g = "auto" !== f.scrollAmount ? r : g,
                        c = n ? n : a ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear";
                    a && 17 > d && (g = "x" === f.dir[0] ? h[1] : h[0]);
                    T(b, g.toString(), {
                        dir: f.dir[0],
                        scrollEasing: c,
                        dur: d,
                        onComplete: a ? !0 : !1
                    });
                    a ? f.dir = !1 : (clearTimeout(f.step), f.step = setTimeout(function() {
                        p()
                    }, d))
                }
                var m = b.data(d),
                    u = m.opt,
                    f = m.sequential,
                    q = a("#mCSB_" + m.idx + "_container"),
                    c = "stepped" === f.type ? !0 : !1,
                    s = 26 > u.scrollInertia ? 26 : u.scrollInertia,
                    t = 1 > u.scrollInertia ? 17 : u.scrollInertia;
                switch (g) {
                    case "on":
                        f.dir = [h === r[16] || h === r[15] || 39 === h || 37 === h ? "x" : "y", h === r[13] || h === r[15] || 38 === h || 37 === h ? -1 : 1];
                        U(b);
                        if (ca(h) && "stepped" === f.type) break;
                        p(c);
                        break;
                    case "off":
                        clearTimeout(f.step), P(f, "step"), U(b), (c || m.tweenRunning && f.dir) && p(!0)
                }
            },
            fa = function(b) {
                var g = a(this).data(d).opt,
                    h = [];
                "function" === typeof b && (b = b());
                b instanceof Array ? h = 1 < b.length ? [b[0], b[1]] : "x" === g.axis ? [null, b[0]] : [b[0], null] : (h[0] = b.y ? b.y : b.x || "x" === g.axis ? null : b, h[1] = b.x ? b.x : b.y || "y" === g.axis ? null : b);
                "function" === typeof h[0] &&
                    (h[0] = h[0]());
                "function" === typeof h[1] && (h[1] = h[1]());
                return h
            },
            Y = function(b, g) {
                if (null != b && "undefined" != typeof b) {
                    var h = a(this),
                        n = h.data(d),
                        k = n.opt,
                        n = a("#mCSB_" + n.idx + "_container"),
                        p = n.parent(),
                        r = typeof b;
                    g || (g = "x" === k.axis ? "x" : "y");
                    var k = "x" === g ? n.outerWidth(!1) : n.outerHeight(!1),
                        m = "x" === g ? n[0].offsetLeft : n[0].offsetTop,
                        f = "x" === g ? "left" : "top";
                    switch (r) {
                        case "function":
                            return b();
                        case "object":
                            h = b.jquery ? b : a(b);
                            if (!h.length) break;
                            return "x" === g ? ba(h)[1] : ba(h)[0];
                        case "string":
                        case "number":
                            if (ca(b)) return Math.abs(b);
                            if (-1 !== b.indexOf("%")) return Math.abs(k * parseInt(b) / 100);
                            if (-1 !== b.indexOf("-=")) return Math.abs(m - parseInt(b.split("-=")[1]));
                            if (-1 !== b.indexOf("+=")) return h = m + parseInt(b.split("+=")[1]), 0 <= h ? 0 : Math.abs(h);
                            if (-1 !== b.indexOf("px") && ca(b.split("px")[0])) return Math.abs(b.split("px")[0]);
                            if ("top" === b || "left" === b) return 0;
                            if ("bottom" === b) return Math.abs(p.height() - n.outerHeight(!1));
                            if ("right" === b) return Math.abs(p.width() - n.outerWidth(!1));
                            if ("first" === b || "last" === b) return h = n.find(":" + b), "x" === g ?
                                ba(h)[1] : ba(h)[0];
                            if (a(b).length) return "x" === g ? ba(a(b))[1] : ba(a(b))[0];
                            n.css(f, b);
                            s.update.call(null, h[0])
                    }
                }
            },
            X = function(b) {
                function g() {
                    clearTimeout(f[0].autoUpdate);
                    0 === p.parents("html").length ? p = null : f[0].autoUpdate = setTimeout(function() {
                        if (u.advanced.updateOnSelectorChange && (m.poll.change.n = n(), m.poll.change.n !== m.poll.change.o)) {
                            m.poll.change.o = m.poll.change.n;
                            k(3);
                            return
                        }
                        if (u.advanced.updateOnContentResize && (m.poll.size.n = p[0].scrollHeight + p[0].scrollWidth + f[0].offsetHeight + p[0].offsetHeight +
                                p[0].offsetWidth, m.poll.size.n !== m.poll.size.o)) {
                            m.poll.size.o = m.poll.size.n;
                            k(1);
                            return
                        }
                        if (u.advanced.updateOnImageLoad && ("auto" !== u.advanced.updateOnImageLoad || "y" !== u.axis) && (m.poll.img.n = f.find("img").length, m.poll.img.n !== m.poll.img.o)) {
                            m.poll.img.o = m.poll.img.n;
                            f.find("img").each(function() {
                                h(this)
                            });
                            return
                        }(u.advanced.updateOnSelectorChange || u.advanced.updateOnContentResize || u.advanced.updateOnImageLoad) && g()
                    }, u.advanced.autoUpdateTimeout)
                }

                function h(f) {
                    function c(a, c) {
                        return function() {
                            return c.apply(a,
                                arguments)
                        }
                    }

                    function b() {
                        this.onload = null;
                        a(f).addClass(r[2]);
                        k(2)
                    }
                    if (a(f).hasClass(r[2])) k();
                    else {
                        var d = new Image;
                        d.onload = c(d, b);
                        d.src = f.src
                    }
                }

                function n() {
                    !0 === u.advanced.updateOnSelectorChange && (u.advanced.updateOnSelectorChange = "*");
                    var a = 0,
                        c = f.find(u.advanced.updateOnSelectorChange);
                    u.advanced.updateOnSelectorChange && 0 < c.length && c.each(function() {
                        a += this.offsetHeight + this.offsetWidth
                    });
                    return a
                }

                function k(a) {
                    clearTimeout(f[0].autoUpdate);
                    s.update.call(null, p[0], a)
                }
                var p = a(this),
                    m = p.data(d),
                    u =
                    m.opt,
                    f = a("#mCSB_" + m.idx + "_container");
                b ? (clearTimeout(f[0].autoUpdate), P(f[0], "autoUpdate")) : g()
            },
            U = function(b) {
                b = b.data(d);
                a("#mCSB_" + b.idx + "_container,#mCSB_" + b.idx + "_container_wrapper,#mCSB_" + b.idx + "_dragger_vertical,#mCSB_" + b.idx + "_dragger_horizontal").each(function() {
                    this._mTween || (this._mTween = {
                        top: {},
                        left: {}
                    });
                    for (var a = ["top", "left"], b = 0; b < a.length; b++) {
                        var d = a[b];
                        this._mTween[d].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(this._mTween[d].id) : clearTimeout(this._mTween[d].id),
                            this._mTween[d].id = null, this._mTween[d].stop = 1)
                    }
                })
            },
            T = function(b, g, h) {
                function n(a) {
                    return p && m.callbacks[a] && "function" === typeof m.callbacks[a]
                }

                function k() {
                    var a = [q[0].offsetTop, q[0].offsetLeft],
                        c = [t[0].offsetTop, t[0].offsetLeft],
                        d = [q.outerHeight(!1), q.outerWidth(!1)],
                        g = [f.height(), f.width()];
                    b[0].mcs = {
                        content: q,
                        top: a[0],
                        left: a[1],
                        draggerTop: c[0],
                        draggerLeft: c[1],
                        topPct: Math.round(100 * Math.abs(a[0]) / (Math.abs(d[0]) - g[0])),
                        leftPct: Math.round(100 * Math.abs(a[1]) / (Math.abs(d[1]) - g[1])),
                        direction: h.dir
                    }
                }
                var p = b.data(d),
                    m = p.opt;
                h = a.extend({
                    trigger: "internal",
                    dir: "y",
                    scrollEasing: "mcsEaseOut",
                    drag: !1,
                    dur: m.scrollInertia,
                    overwrite: "all",
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                }, h);
                var r = [h.dur, h.drag ? 0 : h.dur],
                    f = a("#mCSB_" + p.idx),
                    q = a("#mCSB_" + p.idx + "_container"),
                    c = q.parent(),
                    u = m.callbacks.onTotalScrollOffset ? fa.call(b, m.callbacks.onTotalScrollOffset) : [0, 0],
                    s = m.callbacks.onTotalScrollBackOffset ? fa.call(b, m.callbacks.onTotalScrollBackOffset) : [0, 0];
                p.trigger = h.trigger;
                if (0 !== c.scrollTop() || 0 !==
                    c.scrollLeft()) a(".mCSB_" + p.idx + "_scrollbar").css("visibility", "visible"), c.scrollTop(0).scrollLeft(0);
                "_resetY" !== g || p.contentReset.y || (n("onOverflowYNone") && m.callbacks.onOverflowYNone.call(b[0]), p.contentReset.y = 1);
                "_resetX" !== g || p.contentReset.x || (n("onOverflowXNone") && m.callbacks.onOverflowXNone.call(b[0]), p.contentReset.x = 1);
                if ("_resetY" !== g && "_resetX" !== g) {
                    !p.contentReset.y && b[0].mcs || !p.overflowed[0] || (n("onOverflowY") && m.callbacks.onOverflowY.call(b[0]), p.contentReset.x = null);
                    !p.contentReset.x &&
                        b[0].mcs || !p.overflowed[1] || (n("onOverflowX") && m.callbacks.onOverflowX.call(b[0]), p.contentReset.x = null);
                    m.snapAmount && (c = m.snapAmount instanceof Array ? "x" === h.dir ? m.snapAmount[1] : m.snapAmount[0] : m.snapAmount, g = Math.round(g / c) * c - m.snapOffset);
                    switch (h.dir) {
                        case "x":
                            var t = a("#mCSB_" + p.idx + "_dragger_horizontal"),
                                v = "left",
                                w = q[0].offsetLeft,
                                C = [f.width() - q.outerWidth(!1), t.parent().width() - t.width()],
                                A = [g, 0 === g ? 0 : g / p.scrollRatio.x],
                                z = u[1],
                                H = s[1],
                                G = 0 < z ? z / p.scrollRatio.x : 0,
                                K = 0 < H ? H / p.scrollRatio.x : 0;
                            break;
                        case "y":
                            t = a("#mCSB_" + p.idx + "_dragger_vertical"), v = "top", w = q[0].offsetTop, C = [f.height() - q.outerHeight(!1), t.parent().height() - t.height()], A = [g, 0 === g ? 0 : g / p.scrollRatio.y], z = u[0], H = s[0], G = 0 < z ? z / p.scrollRatio.y : 0, K = 0 < H ? H / p.scrollRatio.y : 0
                    }
                    0 > A[1] || 0 === A[0] && 0 === A[1] ? A = [0, 0] : A[1] >= C[1] ? A = [C[0], C[1]] : A[0] = -A[0];
                    b[0].mcs || (k(), n("onInit") && m.callbacks.onInit.call(b[0]));
                    clearTimeout(q[0].onCompleteTimeout);
                    ia(t[0], v, Math.round(A[1]), r[1], h.scrollEasing);
                    !p.tweenRunning && (0 === w && 0 <= A[0] || w === C[0] && A[0] <=
                        C[0]) || ia(q[0], v, Math.round(A[0]), r[0], h.scrollEasing, h.overwrite, {
                        onStart: function() {
                            h.callbacks && (h.onStart && !p.tweenRunning) && (n("onScrollStart") && (k(), m.callbacks.onScrollStart.call(b[0])), p.tweenRunning = !0, y(t), p.cbOffsets = [m.callbacks.alwaysTriggerOffsets || w >= C[0] + z, m.callbacks.alwaysTriggerOffsets || w <= -H])
                        },
                        onUpdate: function() {
                            h.callbacks && h.onUpdate && n("whileScrolling") && (k(), m.callbacks.whileScrolling.call(b[0]))
                        },
                        onComplete: function() {
                            h.callbacks && h.onComplete && ("yx" === m.axis && clearTimeout(q[0].onCompleteTimeout),
                                q[0].onCompleteTimeout = setTimeout(function() {
                                    n("onScroll") && (k(), m.callbacks.onScroll.call(b[0]));
                                    n("onTotalScroll") && (A[1] >= C[1] - G && p.cbOffsets[0]) && (k(), m.callbacks.onTotalScroll.call(b[0]));
                                    n("onTotalScrollBack") && (A[1] <= K && p.cbOffsets[1]) && (k(), m.callbacks.onTotalScrollBack.call(b[0]));
                                    p.tweenRunning = !1;
                                    q[0].idleTimer = 0;
                                    y(t, "hide")
                                }, q[0].idleTimer || 0))
                        }
                    })
                }
            },
            ia = function(a, b, d, g, h, n, p) {
                function k() {
                    A.stop || (t || c.call(), t = V() - u, f(), t >= A.time && (A.time = t > A.time ? t + s - (t - A.time) : t + s - 1, A.time < t + 1 && (A.time =
                        t + 1)), A.time < g ? A.id = w(k) : r.call())
                }

                function f() {
                    0 < g ? (A.currVal = q(A.time, v, C, g, h), y[b] = Math.round(A.currVal) + "px") : y[b] = d + "px";
                    m.call()
                }

                function q(a, c, f, b, d) {
                    switch (d) {
                        case "linear":
                        case "mcsLinear":
                            return f * a / b + c;
                        case "mcsLinearOut":
                            return a /= b, a--, f * Math.sqrt(1 - a * a) + c;
                        case "easeInOutSmooth":
                            a /= b / 2;
                            if (1 > a) return f / 2 * a * a + c;
                            a--;
                            return -f / 2 * (a * (a - 2) - 1) + c;
                        case "easeInOutStrong":
                            a /= b / 2;
                            if (1 > a) return f / 2 * Math.pow(2, 10 * (a - 1)) + c;
                            a--;
                            return f / 2 * (-Math.pow(2, -10 * a) + 2) + c;
                        case "easeInOut":
                        case "mcsEaseInOut":
                            a /=
                                b / 2;
                            if (1 > a) return f / 2 * a * a * a + c;
                            a -= 2;
                            return f / 2 * (a * a * a + 2) + c;
                        case "easeOutSmooth":
                            return a /= b, a--, -f * (a * a * a * a - 1) + c;
                        case "easeOutStrong":
                            return f * (-Math.pow(2, -10 * a / b) + 1) + c;
                        default:
                            return b = (a /= b) * a, d = b * a, c + f * (0.499999999999997 * d * b + -2.5 * b * b + 5.5 * d + -6.5 * b + 4 * a)
                    }
                }
                a._mTween || (a._mTween = {
                    top: {},
                    left: {}
                });
                p = p || {};
                var c = p.onStart || function() {},
                    m = p.onUpdate || function() {},
                    r = p.onComplete || function() {},
                    u = V(),
                    s, t = 0,
                    v = a.offsetTop,
                    y = a.style,
                    w, A = a._mTween[b];
                "left" === b && (v = a.offsetLeft);
                var C = d - v;
                A.stop = 0;
                "none" !== n &&
                    null != A.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(A.id) : clearTimeout(A.id), A.id = null);
                (function() {
                    s = 1E3 / 60;
                    A.time = t + s;
                    w = window.requestAnimationFrame ? window.requestAnimationFrame : function(a) {
                        f();
                        return setTimeout(a, 0.01)
                    };
                    A.id = w(k)
                })()
            },
            V = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            P = function(a, b) {
                try {
                    delete a[b]
                } catch (d) {
                    a[b] =
                        null
                }
            },
            ja = function(a) {
                a = a.originalEvent.pointerType;
                return !(a && "touch" !== a && 2 !== a)
            },
            ca = function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            ba = function(a) {
                var b = a.parents(".mCSB_container");
                return [a.offset().top - b.offset().top, a.offset().left - b.offset().left]
            },
            ha = function() {
                var a = function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var b = 0; b < a.length; b++)
                        if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                    return null
                }();
                return a ? document[a] : !1
            };
        a.fn.mCustomScrollbar =
            function(b) {
                if (s[b]) return s[b].apply(this, Array.prototype.slice.call(arguments, 1));
                if ("object" !== typeof b && b) a.error("Method " + b + " does not exist");
                else return s.init.apply(this, arguments)
            };
        a.mCustomScrollbar = function(b) {
            if (s[b]) return s[b].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" !== typeof b && b) a.error("Method " + b + " does not exist");
            else return s.init.apply(this, arguments)
        };
        a.mCustomScrollbar.defaults = m;
        window.mCustomScrollbar = !0;
        a(window).load(function() {
            a(".mCustomScrollbar").mCustomScrollbar();
            a.extend(a.expr[":"], {
                mcsInView: a.expr[":"].mcsInView || function(b) {
                    b = a(b);
                    var d = b.parents(".mCSB_container"),
                        g;
                    if (d.length) return g = d.parent(), d = [d[0].offsetTop, d[0].offsetLeft], 0 <= d[0] + ba(b)[0] && d[0] + ba(b)[0] < g.height() - b.outerHeight(!1) && 0 <= d[1] + ba(b)[1] && d[1] + ba(b)[1] < g.width() - b.outerWidth(!1)
                },
                mcsOverflow: a.expr[":"].mcsOverflow || function(b) {
                    if (b = a(b).data(d)) return b.overflowed[0] || b.overflowed[1]
                }
            })
        })
    })
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
        var d, m, k, p = _gsScope.GreenSockGlobals || _gsScope,
            h = 2 * Math.PI,
            n = Math.PI / 2,
            g = p.com.greensock._class,
            r = function(b, d) {
                var h = g("easing." + b, function() {}, !0),
                    n = h.prototype = new a;
                return n.constructor = h, n.getRatio = d, h
            },
            s = a.register || function() {},
            z = function(a, d, h, n, p) {
                d = g("easing." + a, {
                    easeOut: new d,
                    easeIn: new h,
                    easeInOut: new n
                }, !0);
                return s(d, a), d
            },
            w = function(a, d, g) {
                this.t = a;
                this.v = d;
                g && (this.next =
                    g, g.prev = this, this.c = g.v - d, this.gap = g.t - a)
            },
            t = function(b, d) {
                var h = g("easing." + b, function(a) {
                        this._p1 = a || 0 === a ? a : 1.70158;
                        this._p2 = 1.525 * this._p1
                    }, !0),
                    n = h.prototype = new a;
                return n.constructor = h, n.getRatio = d, n.config = function(a) {
                    return new h(a)
                }, h
            },
            t = z("Back", t("BackOut", function(a) {
                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
            }), t("BackIn", function(a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), t("BackInOut", function(a) {
                return 1 > (a *= 2) ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) +
                    2)
            })),
            v = g("easing.SlowMo", function(a, d, g) {
                null == a ? a = 0.7 : 1 < a && (a = 1);
                this._p = 1 !== a ? d || 0 === d ? d : 0.7 : 0;
                this._p1 = (1 - a) / 2;
                this._p2 = a;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = !0 === g
            }, !0),
            y = v.prototype = new a;
        return y.constructor = v, y.getRatio = function(a) {
                var d = a + (0.5 - a) * this._p;
                return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : d - (a = 1 - a / this._p1) * a * a * a * d : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : d + (a - d) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : d
            }, v.ease = new v(0.7, 0.7), y.config = v.config =
            function(a, d, g) {
                return new v(a, d, g)
            }, d = g("easing.SteppedEase", function(a) {
                a = a || 1;
                this._p1 = 1 / a;
                this._p2 = a + 1
            }, !0), y = d.prototype = new a, y.constructor = d, y.getRatio = function(a) {
                return 0 > a ? a = 0 : 1 <= a && (a = 0.999999999), (this._p2 * a >> 0) * this._p1
            }, y.config = d.config = function(a) {
                return new d(a)
            }, m = g("easing.RoughEase", function(b) {
                b = b || {};
                for (var d, g, h, n, p = b.taper || "none", k = [], m = 0, r = n = 0 | (b.points || 20), s = !1 !== b.randomize, t = !0 === b.clamp, v = b.template instanceof a ? b.template : null, y = "number" == typeof b.strength ? 0.4 * b.strength :
                        0.4; - 1 < --r;) b = s ? Math.random() : 1 / n * r, d = v ? v.getRatio(b) : b, "none" === p ? g = y : "out" === p ? (h = 1 - b, g = h * h * y) : "in" === p ? g = b * b * y : 0.5 > b ? (h = 2 * b, g = 0.5 * (h * h) * y) : (h = 2 * (1 - b), g = 0.5 * (h * h) * y), s ? d += Math.random() * g - 0.5 * g : r % 2 ? d += 0.5 * g : d -= 0.5 * g, t && (1 < d ? d = 1 : 0 > d && (d = 0)), k[m++] = {
                    x: b,
                    y: d
                };
                k.sort(function(a, b) {
                    return a.x - b.x
                });
                g = new w(1, 1, null);
                for (r = n; - 1 < --r;) n = k[r], g = new w(n.x, n.y, g);
                this._prev = new w(0, 0, 0 !== g.t ? g : g.next)
            }, !0), y = m.prototype = new a, y.constructor = m, y.getRatio = function(a) {
                var d = this._prev;
                if (a > d.t) {
                    for (; d.next && a >=
                        d.t;) d = d.next;
                    d = d.prev
                } else
                    for (; d.prev && a <= d.t;) d = d.prev;
                return this._prev = d, d.v + (a - d.t) / d.gap * d.c
            }, y.config = function(a) {
                return new m(a)
            }, m.ease = new m, z("Bounce", r("BounceOut", function(a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
            }), r("BounceIn", function(a) {
                return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) *
                    a + 0.984375)
            }), r("BounceInOut", function(a) {
                var d = 0.5 > a;
                return a = d ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375, d ? 0.5 * (1 - a) : 0.5 * a + 0.5
            })), z("Circ", r("CircOut", function(a) {
                return Math.sqrt(1 - (a -= 1) * a)
            }), r("CircIn", function(a) {
                return -(Math.sqrt(1 - a * a) - 1)
            }), r("CircInOut", function(a) {
                return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            })), k = function(b, d, n) {
                var p = g("easing." + b, function(a,
                    b) {
                    this._p1 = 1 <= a ? a : 1;
                    this._p2 = (b || n) / (1 > a ? a : 1);
                    this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0);
                    this._p2 = h / this._p2
                }, !0);
                b = p.prototype = new a;
                return b.constructor = p, b.getRatio = d, b.config = function(a, b) {
                    return new p(a, b)
                }, p
            }, z("Elastic", k("ElasticOut", function(a) {
                return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
            }, 0.3), k("ElasticIn", function(a) {
                return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
            }, 0.3), k("ElasticInOut", function(a) {
                return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2,
                    10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) + 1
            }, 0.45)), z("Expo", r("ExpoOut", function(a) {
                return 1 - Math.pow(2, -10 * a)
            }), r("ExpoIn", function(a) {
                return Math.pow(2, 10 * (a - 1)) - 0.001
            }), r("ExpoInOut", function(a) {
                return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
            })), z("Sine", r("SineOut", function(a) {
                return Math.sin(a * n)
            }), r("SineIn", function(a) {
                return -Math.cos(a * n) + 1
            }), r("SineInOut", function(a) {
                return -0.5 * (Math.cos(Math.PI *
                    a) - 1)
            })), g("easing.EaseLookup", {
                find: function(b) {
                    return a.map[b]
                }
            }, !0), s(p.SlowMo, "SlowMo", "ease,"), s(m, "RoughEase", "ease,"), s(d, "SteppedEase", "ease,"), t
    }, !0)
});
_gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function() {
    var a = function() {
        return _gsScope.GreenSockGlobals || _gsScope
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], a) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = a())
})();
_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, d) {
        var m, k, p, h, n = function() {
                a.call(this, "css");
                this._overwriteProps.length = 0;
                this.setRatio = n.prototype.setRatio
            },
            g = _gsScope._gsDefine.globals,
            r = {},
            s = n.prototype = new a("css");
        s.constructor = n;
        n.version = "1.18.3";
        n.API = 2;
        n.defaultTransformPerspective = 0;
        n.defaultSkewType = "compensated";
        n.defaultSmoothOrigin = !0;
        s = "px";
        n.suffixMap = {
            top: s,
            right: s,
            bottom: s,
            left: s,
            width: s,
            height: s,
            fontSize: s,
            padding: s,
            margin: s,
            perspective: s,
            lineHeight: ""
        };
        var z, w, t, v, y, b, u = /(?:\-|\.|\b)[\d\.e]+\b/g,
            H = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            J = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            C = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            N = /(?:\d|\-|\+|=|#|\.)*/g,
            G = /opacity *= *([^)]*)/i,
            I = /opacity:([^;]*)/i,
            K = /alpha\(opacity *=.+?\)/i,
            A = /^(rgb|hsl)/,
            W = /([A-Z])/g,
            Q = /-([a-z])/gi,
            S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            ga = function(a, c) {
                return c.toUpperCase()
            },
            O = /(?:Left|Right|Width)/i,
            ea = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            fa = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            Y = /,(?=[^\)]*(?:\(|$))/gi,
            X = /[\s,\(]/i,
            U = Math.PI / 180,
            T = 180 / Math.PI,
            ia = {},
            V = document,
            P = function(a) {
                return V.createElementNS ? V.createElementNS("http://www.w3.org/1999/xhtml", a) : V.createElement(a)
            },
            ja = P("div"),
            ca = P("img"),
            ba = n._internals = {
                _specialProps: r
            },
            ha = navigator.userAgent,
            L = function() {
                var a = ha.indexOf("Android"),
                    c = P("a");
                return t = -1 !== ha.indexOf("Safari") && -1 === ha.indexOf("Chrome") &&
                    (-1 === a || 3 < Number(ha.substr(a + 8, 1))), y = t && 6 > Number(ha.substr(ha.indexOf("Version/") + 8, 1)), v = -1 !== ha.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ha) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(ha)) && (b = parseFloat(RegExp.$1)), c ? (c.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(c.style.opacity)) : !1
            }(),
            F = function(a) {
                return G.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            ka = "",
            ua = "",
            sa = function(a, c) {
                c = c || ja;
                var f, b, d = c.style;
                if (void 0 !== d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.substr(1);
                f = ["O", "Moz", "ms", "Ms", "Webkit"];
                for (b = 5; - 1 < --b && void 0 === d[f[b] + a];);
                return 0 <= b ? (ua = 3 === b ? "ms" : f[b], ka = "-" + ua.toLowerCase() + "-", ua + a) : null
            },
            xa = V.defaultView ? V.defaultView.getComputedStyle : function() {},
            da = n.getStyle = function(a, c, f, b, d) {
                var g;
                return L || "opacity" !== c ? (!b && a.style[c] ? g = a.style[c] : (f = f || xa(a)) ? g = f[c] || f.getPropertyValue(c) || f.getPropertyValue(c.replace(W, "-$1").toLowerCase()) : a.currentStyle && (g = a.currentStyle[c]), null ==
                    d || g && "none" !== g && "auto" !== g && "auto auto" !== g ? g : d) : F(a)
            },
            qa = ba.convertToPixels = function(a, c, f, b, g) {
                if ("px" === b || !b) return f;
                if ("auto" === b || !f) return 0;
                var q, h, p, l = O.test(c),
                    E = a;
                q = ja.style;
                var k = 0 > f;
                if (k && (f = -f), "%" === b && -1 !== c.indexOf("border")) q = f / 100 * (l ? a.clientWidth : a.clientHeight);
                else {
                    if (q.cssText = "border:0 solid red;position:" + da(a, "position") + ";line-height:0;", "%" !== b && E.appendChild && "v" !== b.charAt(0) && "rem" !== b) q[l ? "borderLeftWidth" : "borderTopWidth"] = f + b;
                    else {
                        if (E = a.parentNode || V.body, h = E._gsCache,
                            p = d.ticker.frame, h && l && h.time === p) return h.width * f / 100;
                        q[l ? "width" : "height"] = f + b
                    }
                    E.appendChild(ja);
                    q = parseFloat(ja[l ? "offsetWidth" : "offsetHeight"]);
                    E.removeChild(ja);
                    l && "%" === b && !1 !== n.cacheWidths && (h = E._gsCache = E._gsCache || {}, h.time = p, h.width = 100 * (q / f));
                    0 !== q || g || (q = qa(a, c, f, b, !0))
                }
                return k ? -q : q
            },
            f = ba.calculateOffset = function(a, c, f) {
                if ("absolute" !== da(a, "position", f)) return 0;
                var b = "left" === c ? "Left" : "Top";
                f = da(a, "margin" + b, f);
                return a["offset" + b] - (qa(a, c, parseFloat(f), f.replace(N, "")) || 0)
            },
            q = function(a,
                c) {
                var f, b, d, g = {};
                if (c = c || xa(a, null))
                    if (f = c.length)
                        for (; - 1 < --f;) d = c[f], -1 !== d.indexOf("-transform") && Ra !== d || (g[d.replace(Q, ga)] = c.getPropertyValue(d));
                    else
                        for (f in c) - 1 !== f.indexOf("Transform") && za !== f || (g[f] = c[f]);
                else if (c = a.currentStyle || a.style)
                    for (f in c) "string" == typeof f && void 0 === g[f] && (g[f.replace(Q, ga)] = c[f]);
                return L || (g.opacity = F(a)), b = Va(a, c, !1), g.rotation = b.rotation, g.skewX = b.skewX, g.scaleX = b.scaleX, g.scaleY = b.scaleY, g.x = b.x, g.y = b.y, Na && (g.z = b.z, g.rotationX = b.rotationX, g.rotationY =
                    b.rotationY, g.scaleZ = b.scaleZ), g.filters && delete g.filters, g
            },
            c = function(a, c, b, d, g) {
                var q, h, n, l = {},
                    p = a.style;
                for (h in b) "cssText" !== h && "length" !== h && isNaN(h) && (c[h] !== (q = b[h]) || g && g[h]) && -1 === h.indexOf("Origin") && ("number" == typeof q || "string" == typeof q) && (l[h] = "auto" !== q || "left" !== h && "top" !== h ? "" !== q && "auto" !== q && "none" !== q || "string" != typeof c[h] || "" === c[h].replace(C, "") ? q : 0 : f(a, h), void 0 !== p[h] && (n = new Sa(p, h, p[h], n)));
                if (d)
                    for (h in d) "className" !== h && (l[h] = d[h]);
                return {
                    difs: l,
                    firstMPT: n
                }
            },
            M = {
                width: ["Left",
                    "Right"
                ],
                height: ["Top", "Bottom"]
            },
            aa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            Z = function(a, c) {
                if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                null != a && "" !== a || (a = "0 0");
                var f, b = a.split(" ");
                f = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : b[0];
                var d = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : b[1];
                if (3 < b.length && !c) {
                    b = a.split(", ").join(",").split(",");
                    a = [];
                    for (f = 0; f < b.length; f++) a.push(Z(b[f]));
                    return a.join(",")
                }
                return null == d ? d = "center" === f ?
                    "50%" : "0" : "center" === d && (d = "50%"), ("center" === f || isNaN(parseFloat(f)) && -1 === (f + "").indexOf("=")) && (f = "50%"), a = f + " " + d + (2 < b.length ? " " + b[2] : ""), c && (c.oxp = -1 !== f.indexOf("%"), c.oyp = -1 !== d.indexOf("%"), c.oxr = "=" === f.charAt(1), c.oyr = "=" === d.charAt(1), c.ox = parseFloat(f.replace(C, "")), c.oy = parseFloat(d.replace(C, "")), c.v = a), c || a
            },
            Ga = function(a, c) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(c) || 0
            },
            pa = function(a, c) {
                return null ==
                    a ? c : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + c : parseFloat(a) || 0
            },
            Ka = function(a, c, f, b) {
                var d, g, q, h;
                return null == a ? q = c : "number" == typeof a ? q = a : (d = a.split("_"), h = "=" === a.charAt(1), g = (h ? parseInt(a.charAt(0) + "1", 10) * parseFloat(d[0].substr(2)) : parseFloat(d[0])) * (-1 === a.indexOf("rad") ? 1 : T) - (h ? 0 : c), d.length && (b && (b[f] = c + g), -1 !== a.indexOf("short") && (g %= 360, g !== g % 180 && (g = 0 > g ? g + 360 : g - 360)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 3599999999640) % 360 - 360 * (g / 360 | 0) : -1 !==
                    a.indexOf("ccw") && 0 < g && (g = (g - 3599999999640) % 360 - 360 * (g / 360 | 0))), q = c + g), 1E-6 > q && -1E-6 < q && (q = 0), q
            },
            Ua = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            bb = function(a, c, f) {
                return a = 0 > a ? a + 1 : 1 < a ?
                    a - 1 : a, 255 * (1 > 6 * a ? c + 6 * (f - c) * a : 0.5 > a ? f : 2 > 3 * a ? c + 6 * (f - c) * (2 / 3 - a) : c) + 0.5 | 0
            },
            Xa = n.parseColor = function(a, c) {
                var f, b, d, g, q, h, l, n, p, k, m;
                if (a)
                    if ("number" == typeof a) f = [a >> 16, a >> 8 & 255, 255 & a];
                    else {
                        if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), Ua[a]) f = Ua[a];
                        else if ("#" === a.charAt(0)) 4 === a.length && (b = a.charAt(1), d = a.charAt(2), g = a.charAt(3), a = "#" + b + b + d + d + g + g), a = parseInt(a.substr(1), 16), f = [a >> 16, a >> 8 & 255, 255 & a];
                        else if ("hsl" === a.substr(0, 3))
                            if (f = m = a.match(u), c) {
                                if (-1 !== a.indexOf("=")) return a.match(H)
                            } else q =
                                Number(f[0]) % 360 / 360, h = Number(f[1]) / 100, l = Number(f[2]) / 100, d = 0.5 >= l ? l * (h + 1) : l + h - l * h, b = 2 * l - d, 3 < f.length && (f[3] = Number(a[3])), f[0] = bb(q + 1 / 3, b, d), f[1] = bb(q, b, d), f[2] = bb(q - 1 / 3, b, d);
                        else f = a.match(u) || Ua.transparent;
                        f[0] = Number(f[0]);
                        f[1] = Number(f[1]);
                        f[2] = Number(f[2]);
                        3 < f.length && (f[3] = Number(f[3]))
                    } else f = Ua.black;
                return c && !m && (b = f[0] / 255, d = f[1] / 255, g = f[2] / 255, n = Math.max(b, d, g), p = Math.min(b, d, g), l = (n + p) / 2, n === p ? q = h = 0 : (k = n - p, h = 0.5 < l ? k / (2 - n - p) : k / (n + p), q = n === b ? (d - g) / k + (g > d ? 6 : 0) : n === d ? (g - b) / k + 2 : (b - d) / k +
                    4, q *= 60), f[0] = q + 0.5 | 0, f[1] = 100 * h + 0.5 | 0, f[2] = 100 * l + 0.5 | 0), f
            },
            jb = function(a, c) {
                var f, b, d, g = a.match(Ea) || [],
                    q = 0,
                    h = g.length ? "" : a;
                for (f = 0; f < g.length; f++) b = g[f], d = a.substr(q, a.indexOf(b, q) - q), q += d.length + b.length, b = Xa(b, c), 3 === b.length && b.push(1), h += d + (c ? "hsla(" + b[0] + "," + b[1] + "%," + b[2] + "%," + b[3] : "rgba(" + b.join(",")) + ")";
                return h + a.substr(q)
            },
            Ea = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (s in Ua) Ea += "|" + s + "\\b";
        Ea = RegExp(Ea + ")", "gi");
        n.colorStringFilter = function(a) {
            var c,
                f = a[0] + a[1];
            Ea.test(f) && (c = -1 !== f.indexOf("hsl(") || -1 !== f.indexOf("hsla("), a[0] = jb(a[0], c), a[1] = jb(a[1], c));
            Ea.lastIndex = 0
        };
        d.defaultStringFilter || (d.defaultStringFilter = n.colorStringFilter);
        var lb = function(a, c, f, b) {
                if (null == a) return function(a) {
                    return a
                };
                var d, g = c ? (a.match(Ea) || [""])[0] : "",
                    q = a.split(g).join("").match(J) || [],
                    h = a.substr(0, a.indexOf(q[0])),
                    l = ")" === a.charAt(a.length - 1) ? ")" : "",
                    n = -1 !== a.indexOf(" ") ? " " : ",",
                    p = q.length,
                    k = 0 < p ? q[0].replace(u, "") : "";
                return p ? d = c ? function(a) {
                    var c, x, m;
                    if ("number" ==
                        typeof a) a += k;
                    else if (b && Y.test(a)) {
                        a = a.replace(Y, "|").split("|");
                        for (m = 0; m < a.length; m++) a[m] = d(a[m]);
                        return a.join(",")
                    }
                    if (c = (a.match(Ea) || [g])[0], x = a.split(c).join("").match(J) || [], m = x.length, p > m--)
                        for (; ++m < p;) x[m] = f ? x[(m - 1) / 2 | 0] : q[m];
                    return h + x.join(n) + n + c + l + (-1 !== a.indexOf("inset") ? " inset" : "")
                } : function(a) {
                    var c, g;
                    if ("number" == typeof a) a += k;
                    else if (b && Y.test(a)) {
                        a = a.replace(Y, "|").split("|");
                        for (g = 0; g < a.length; g++) a[g] = d(a[g]);
                        return a.join(",")
                    }
                    if (c = a.match(J) || [], g = c.length, p > g--)
                        for (; ++g <
                            p;) c[g] = f ? c[(g - 1) / 2 | 0] : q[g];
                    return h + c.join(n) + l
                } : function(a) {
                    return a
                }
            },
            Da = function(a) {
                return a = a.split(","),
                    function(c, f, b, d, g, q, h) {
                        b = (f + "").split(" ");
                        h = {};
                        for (f = 0; 4 > f; f++) h[a[f]] = b[f] = b[f] || b[(f - 1) / 2 >> 0];
                        return d.parse(c, h, g, q)
                    }
            },
            Sa = (ba._setPluginRatio = function(a) {
                this.plugin.setRatio(a);
                var c, f, b;
                b = this.data;
                for (var d = b.proxy, g = b.firstMPT; g;) c = d[g.v], g.r ? c = Math.round(c) : 1E-6 > c && -1E-6 < c && (c = 0), g.t[g.p] = c, g = g._next;
                if (b.autoRotate && (b.autoRotate.rotation = d.rotation), 1 === a || 0 === a)
                    for (g = b.firstMPT,
                        b = 1 === a ? "e" : "b"; g;) {
                        if (f = g.t, f.type) {
                            if (1 === f.type) {
                                c = f.xs0 + f.s + f.xs1;
                                for (a = 1; a < f.l; a++) c += f["xn" + a] + f["xs" + (a + 1)];
                                f[b] = c
                            }
                        } else f[b] = f.s + f.xs0;
                        g = g._next
                    }
            }, function(a, c, f, b, d) {
                this.t = a;
                this.p = c;
                this.v = f;
                this.r = d;
                b && (b._prev = this, this._next = b)
            }),
            na = (ba._parseToProxy = function(a, c, f, b, d, g) {
                var q, h, l, n = b,
                    p = {},
                    k = {};
                h = f._transform;
                var m = ia;
                f._transform = null;
                ia = c;
                b = a = f.parse(a, c, b, d);
                ia = m;
                for (g && (f._transform = h, n && (n._prev = null, n._prev && (n._prev._next = null))); b && b !== n;) {
                    if (1 >= b.type && (q = b.p, k[q] = b.s + b.c,
                            p[q] = b.s, g || (l = new Sa(b, "s", q, l, b.r), b.c = 0), 1 === b.type))
                        for (f = b.l; 0 < --f;) h = "xn" + f, q = b.p + "_" + h, k[q] = b.data[h], p[q] = b[h], g || (l = new Sa(b, h, q, l, b.rxp[h]));
                    b = b._next
                }
                return {
                    proxy: p,
                    end: k,
                    firstMPT: l,
                    pt: a
                }
            }, ba.CSSPropTween = function(a, c, f, b, d, g, q, n, l, p, k) {
                this.t = a;
                this.p = c;
                this.s = f;
                this.c = b;
                this.n = q || c;
                a instanceof na || h.push(this.n);
                this.r = n;
                this.type = g || 0;
                l && (this.pr = l, m = !0);
                this.b = void 0 === p ? f : p;
                this.e = void 0 === k ? f + b : k;
                d && (this._next = d, d._prev = this)
            }),
            Ba = function(a, c, f, b, d, g) {
                a = new na(a, c, f, b - f, d, -1, g);
                return a.b = f, a.e = a.xs0 = b, a
            },
            Ha = n.parseComplex = function(a, c, f, b, d, g, q, h, l, p) {
                f = f || g || "";
                q = new na(a, c, 0, 0, q, p ? 2 : 1, null, !1, h, f, b);
                b += "";
                d && Ea.test(b + f) && (b = [f, b], n.colorStringFilter(b), f = b[0], b = b[1]);
                var k, m, r, s, t;
                a = f.split(", ").join(",").split(" ");
                c = b.split(", ").join(",").split(" ");
                h = a.length;
                var v = !1 !== z;
                (-1 !== b.indexOf(",") || -1 !== f.indexOf(",")) && (a = a.join(" ").replace(Y, ", ").split(" "), c = c.join(" ").replace(Y, ", ").split(" "), h = a.length);
                h !== c.length && (a = (g || "").split(" "), h = a.length);
                q.plugin =
                    l;
                q.setRatio = p;
                for (f = Ea.lastIndex = 0; h > f; f++)
                    if (k = a[f], l = c[f], r = parseFloat(k), r || 0 === r) q.appendXtra("", r, Ga(l, r), l.replace(H, ""), v && -1 !== l.indexOf("px"), !0);
                    else if (d && Ea.test(k)) p = l.indexOf(")") + 1, p = ")" + (p ? l.substr(p) : ""), s = -1 !== l.indexOf("hsl") && L, k = Xa(k, s), l = Xa(l, s), (g = 6 < k.length + l.length) && !L && 0 === l[3] ? (q["xs" + q.l] += q.l ? " transparent" : "transparent", q.e = q.e.split(c[f]).join("transparent")) : (L || (g = !1), s ? q.appendXtra(g ? "hsla(" : "hsl(", k[0], Ga(l[0], k[0]), ",", !1, !0).appendXtra("", k[1], Ga(l[1], k[1]),
                    "%,", !1).appendXtra("", k[2], Ga(l[2], k[2]), g ? "%," : "%" + p, !1) : q.appendXtra(g ? "rgba(" : "rgb(", k[0], l[0] - k[0], ",", !0, !0).appendXtra("", k[1], l[1] - k[1], ",", !0).appendXtra("", k[2], l[2] - k[2], g ? "," : p, !0), g && (k = 4 > k.length ? 1 : k[3], q.appendXtra("", k, (4 > l.length ? 1 : l[3]) - k, p, !1))), Ea.lastIndex = 0;
                else if (g = k.match(u)) {
                    if (m = l.match(H), !m || m.length !== g.length) return q;
                    for (l = p = 0; l < g.length; l++) t = g[l], s = k.indexOf(t, p), q.appendXtra(k.substr(p, s - p), Number(t), Ga(m[l], t), "", v && "px" === k.substr(s + t.length, 2), 0 === l), p = s + t.length;
                    q["xs" + q.l] += k.substr(p)
                } else q["xs" + q.l] += q.l || q["xs" + q.l] ? " " + l : l;
                if (-1 !== b.indexOf("=") && q.data) {
                    p = q.xs0 + q.data.s;
                    for (f = 1; f < q.l; f++) p += q["xs" + f] + q.data["xn" + f];
                    q.e = p + q["xs" + f]
                }
                return q.l || (q.type = -1, q.xs0 = q.e), q.xfirst || q
            },
            va = 9,
            s = na.prototype;
        for (s.l = s.pr = 0; 0 < --va;) s["xn" + va] = 0, s["xs" + va] = "";
        s.xs0 = "";
        s._next = s._prev = s.xfirst = s.data = s.plugin = s.setRatio = s.rxp = null;
        s.appendXtra = function(a, c, f, b, d, g) {
            var q = this.l;
            return this["xs" + q] += g && q ? " " + a : a || "", f || 0 === q || this.plugin ? (this.l++, this.type = this.setRatio ?
                2 : 1, this["xs" + this.l] = b || "", 0 < q ? (this.data["xn" + q] = c + f, this.rxp["xn" + q] = d, this["xn" + q] = c, this.plugin || (this.xfirst = new na(this, "xn" + q, c, f, this.xfirst || this, 0, this.n, d, this.pr), this.xfirst.xs0 = 0), this) : (this.data = {
                    s: c + f
                }, this.rxp = {}, this.s = c, this.c = f, this.r = d, this)) : (this["xs" + q] += c + (b || ""), this)
        };
        var la = function(a, c) {
                c = c || {};
                this.p = c.prefix ? sa(a) || a : a;
                r[a] = r[this.p] = this;
                this.format = c.formatter || lb(c.defaultValue, c.color, c.collapsible, c.multi);
                c.parser && (this.parse = c.parser);
                this.clrs = c.color;
                this.multi =
                    c.multi;
                this.keyword = c.keyword;
                this.dflt = c.defaultValue;
                this.pr = c.priority || 0
            },
            oa = ba._registerComplexSpecialProp = function(a, c, f) {
                "object" != typeof c && (c = {
                    parser: f
                });
                var b = a.split(","),
                    d = c.defaultValue;
                f = f || [d];
                for (a = 0; a < b.length; a++) c.prefix = 0 === a && c.prefix, c.defaultValue = f[a] || d, new la(b[a], c)
            },
            Ya = function(a) {
                if (!r[a]) {
                    var c = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                    oa(a, {
                        parser: function(a, f, b, d, q, h, l) {
                            var n = g.com.greensock.plugins[c];
                            n ? a = (n._cssRegister(), r[b].parse(a, f, b, d, q, h, l)) : (window.console &&
                                console.log("Error: " + c + " js file not loaded."), a = q);
                            return a
                        }
                    })
                }
            },
            s = la.prototype;
        s.parseComplex = function(a, c, f, b, d, g) {
            var q, h, l, n, p, k, m = this.keyword;
            if (this.multi && (Y.test(f) || Y.test(c) ? (h = c.replace(Y, "|").split("|"), l = f.replace(Y, "|").split("|")) : m && (h = [c], l = [f])), l) {
                n = l.length > h.length ? l.length : h.length;
                for (q = 0; n > q; q++) c = h[q] = h[q] || this.dflt, f = l[q] = l[q] || this.dflt, m && (p = c.indexOf(m), k = f.indexOf(m), p !== k && (-1 === k ? h[q] = h[q].split(m).join("") : -1 === p && (h[q] += " " + m)));
                c = h.join(", ");
                f = l.join(", ")
            }
            return Ha(a,
                this.p, c, f, this.clrs, this.dflt, b, this.pr, d, g)
        };
        s.parse = function(a, c, f, b, d, g, q) {
            return this.parseComplex(a.style, this.format(da(a, this.p, p, !1, this.dflt)), this.format(c), d, g)
        };
        n.registerSpecialProp = function(a, c, f) {
            oa(a, {
                parser: function(a, b, d, g, q, l, h) {
                    q = new na(a, d, 0, 0, q, 2, d, !1, f);
                    return q.plugin = l, q.setRatio = c(a, b, g._tween, d), q
                },
                priority: f
            })
        };
        n.useSVGTransformAttr = t || v;
        var Aa, Ta = "scaleX scaleY scaleZ x y z skewX skewY rotation rotationX rotationY perspective xPercent yPercent".split(" "),
            za = sa("transform"),
            Ra = ka + "transform",
            Ma = sa("transformOrigin"),
            Na = null !== sa("perspective"),
            Za = ba.Transform = function() {
                this.perspective = parseFloat(n.defaultTransformPerspective) || 0;
                this.force3D = !1 !== n.defaultForce3D && Na ? n.defaultForce3D || "auto" : !1
            },
            eb = window.SVGElement,
            Ja = function(a, c, f) {
                var b;
                a = V.createElementNS("http://www.w3.org/2000/svg", a);
                var d = /([a-z])([A-Z])/g;
                for (b in f) a.setAttributeNS(null, b.replace(d, "$1-$2").toLowerCase(), f[b]);
                return c.appendChild(a), a
            },
            kb = V.documentElement,
            mb = function() {
                var a, c, f, d = b ||
                    /Android/i.test(ha) && !window.chrome;
                return V.createElementNS && !d && (a = Ja("svg", kb), c = Ja("rect", a, {
                    width: 100,
                    height: 50,
                    x: 100
                }), f = c.getBoundingClientRect().width, c.style[Ma] = "50% 50%", c.style[za] = "scaleX(0.5)", d = f === c.getBoundingClientRect().width && !(v && Na), kb.removeChild(a)), d
            }(),
            cb = function(a, c, f, b, d, g) {
                var q, h, l, p, k, m, r, s, t, u, v, y, M, A = a._gsTransform,
                    w = ib(a, !0);
                A && (y = A.xOrigin, M = A.yOrigin);
                (!b || 2 > (q = b.split(" ")).length) && (m = a.getBBox(), c = Z(c).split(" "), q = [(-1 !== c[0].indexOf("%") ? parseFloat(c[0]) /
                    100 * m.width : parseFloat(c[0])) + m.x, (-1 !== c[1].indexOf("%") ? parseFloat(c[1]) / 100 * m.height : parseFloat(c[1])) + m.y]);
                f.xOrigin = c = parseFloat(q[0]);
                f.yOrigin = p = parseFloat(q[1]);
                b && w !== hb && (k = w[0], m = w[1], r = w[2], s = w[3], t = w[4], u = w[5], v = k * s - m * r, h = c * (s / v) + p * (-r / v) + (r * u - s * t) / v, l = c * (-m / v) + p * (k / v) - (k * u - m * t) / v, c = f.xOrigin = q[0] = h, p = f.yOrigin = q[1] = l);
                A && (g && (f.xOffset = A.xOffset, f.yOffset = A.yOffset, A = f), d || !1 !== d && !1 !== n.defaultSmoothOrigin ? (h = c - y, l = p - M, A.xOffset += h * w[0] + l * w[2] - h, A.yOffset += h * w[1] + l * w[3] - l) : A.xOffset =
                    A.yOffset = 0);
                g || a.setAttribute("data-svg-origin", q.join(" "))
            },
            gb = function(a) {
                try {
                    return a.getBBox()
                } catch (c) {}
            },
            hb = [1, 0, 0, 1, 0, 0],
            ib = function(a, c) {
                var f, b, d, g, q = a._gsTransform || new Za;
                if (za ? b = da(a, Ra, null, !0) : a.currentStyle && (b = a.currentStyle.filter.match(ea), b = b && 4 === b.length ? [b[0].substr(4), Number(b[2].substr(4)), Number(b[1].substr(4)), b[3].substr(4), q.x || 0, q.y || 0].join() : ""), f = !b || "none" === b || "matrix(1, 0, 0, 1, 0, 0)" === b, (q.svg || a.getBBox && !!(eb && a.getBBox && a.getCTM && gb(a))) && (f && -1 !== (a.style[za] +
                        "").indexOf("matrix") && (b = a.style[za], f = 0), d = a.getAttribute("transform"), f && d && (-1 !== d.indexOf("matrix") ? (b = d, f = 0) : -1 !== d.indexOf("translate") && (b = "matrix(1,0,0,1," + d.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", f = 0))), f) return hb;
                d = (b || "").match(u) || [];
                for (va = d.length; - 1 < --va;) f = Number(d[va]), d[va] = (g = f - (f |= 0)) ? (1E5 * g + (0 > g ? -0.5 : 0.5) | 0) / 1E5 + f : f;
                return c && 6 < d.length ? [d[0], d[1], d[4], d[5], d[12], d[13]] : d
            },
            Va = ba.getTransform = function(a, c, f, b) {
                if (a._gsTransform && f && !b) return a._gsTransform;
                var g, q, h,
                    k = f ? a._gsTransform || new Za : new Za,
                    l = 0 > k.scaleX,
                    m = Na ? parseFloat(da(a, Ma, c, !1, "0 0 0").split(" ")[2]) || k.zOrigin || 0 : 0,
                    r = parseFloat(n.defaultTransformPerspective) || 0;
                if (k.svg = !!(a.getBBox && eb && a.getBBox && a.getCTM && gb(a)), k.svg && (cb(a, da(a, Ma, p, !1, "50% 50%") + "", k, a.getAttribute("data-svg-origin")), Aa = n.useSVGTransformAttr || mb), g = ib(a), g !== hb) {
                    if (16 === g.length) {
                        var s, t, u, v, r = g[0];
                        c = g[1];
                        b = g[2];
                        var y = g[3],
                            A = g[4],
                            w = g[5],
                            M = g[6],
                            Z = g[7],
                            F = g[8],
                            C = g[9],
                            z = g[10],
                            G = g[12],
                            H = g[13],
                            K = g[14],
                            pa = g[11],
                            aa = Math.atan2(M,
                                z);
                        k.zOrigin && (K = -k.zOrigin, G = F * K - g[12], H = C * K - g[13], K = z * K + k.zOrigin - g[14]);
                        k.rotationX = aa * T;
                        aa && (v = Math.cos(-aa), h = Math.sin(-aa), s = A * v + F * h, t = w * v + C * h, u = M * v + z * h, F = A * -h + F * v, C = w * -h + C * v, z = M * -h + z * v, pa = Z * -h + pa * v, A = s, w = t, M = u);
                        aa = Math.atan2(-b, z);
                        k.rotationY = aa * T;
                        aa && (v = Math.cos(-aa), h = Math.sin(-aa), s = r * v - F * h, t = c * v - C * h, u = b * v - z * h, C = c * h + C * v, z = b * h + z * v, pa = y * h + pa * v, r = s, c = t, b = u);
                        aa = Math.atan2(c, r);
                        k.rotation = aa * T;
                        aa && (v = Math.cos(-aa), h = Math.sin(-aa), r = r * v + A * h, t = c * v + w * h, w = c * -h + w * v, M = b * -h + M * v, c = t);
                        k.rotationX && 359.9 <
                            Math.abs(k.rotationX) + Math.abs(k.rotation) && (k.rotationX = k.rotation = 0, k.rotationY = 180 - k.rotationY);
                        k.scaleX = (1E5 * Math.sqrt(r * r + c * c) + 0.5 | 0) / 1E5;
                        k.scaleY = (1E5 * Math.sqrt(w * w + C * C) + 0.5 | 0) / 1E5;
                        k.scaleZ = (1E5 * Math.sqrt(M * M + z * z) + 0.5 | 0) / 1E5;
                        k.skewX = A || w ? Math.atan2(A, w) * T + k.rotation : k.skewX || 0;
                        90 < Math.abs(k.skewX) && 270 > Math.abs(k.skewX) && (l ? (k.scaleX *= -1, k.skewX += 0 >= k.rotation ? 180 : -180, k.rotation += 0 >= k.rotation ? 180 : -180) : (k.scaleY *= -1, k.skewX += 0 >= k.skewX ? 180 : -180));
                        k.perspective = pa ? 1 / (0 > pa ? -pa : pa) : 0;
                        k.x = G;
                        k.y =
                            H;
                        k.z = K;
                        k.svg && (k.x -= k.xOrigin - (k.xOrigin * r - k.yOrigin * A), k.y -= k.yOrigin - (k.yOrigin * c - k.xOrigin * w))
                    } else Na && !b && g.length && k.x === g[4] && k.y === g[5] && (k.rotationX || k.rotationY) || void 0 !== k.x && "none" === da(a, "display", c) || (s = (v = 6 <= g.length) ? g[0] : 1, t = g[1] || 0, u = g[2] || 0, v = v ? g[3] : 1, k.x = g[4] || 0, k.y = g[5] || 0, g = Math.sqrt(s * s + t * t), h = Math.sqrt(v * v + u * u), c = s || t ? Math.atan2(t, s) * T : k.rotation || 0, b = u || v ? Math.atan2(u, v) * T + c : k.skewX || 0, 90 < Math.abs(b) && 270 > Math.abs(b) && (l ? (g *= -1, b += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (h *= -1,
                        b += 0 >= b ? 180 : -180)), k.scaleX = g, k.scaleY = h, k.rotation = c, k.skewX = b, Na && (k.rotationX = k.rotationY = k.z = 0, k.perspective = r, k.scaleZ = 1), k.svg && (k.x -= k.xOrigin - (k.xOrigin * s + k.yOrigin * u), k.y -= k.yOrigin - (k.xOrigin * t + k.yOrigin * v)));
                    k.zOrigin = m;
                    for (q in k) 2E-5 > k[q] && -2E-5 < k[q] && (k[q] = 0)
                }
                return f && (a._gsTransform = k, k.svg && (Aa && a.style[za] ? d.delayedCall(0.001, function() {
                    Wa(a.style, za)
                }) : !Aa && a.getAttribute("transform") && d.delayedCall(0.001, function() {
                    a.removeAttribute("transform")
                }))), k
            },
            nb = function(a) {
                var c, f, d =
                    this.data,
                    g = -d.rotation * U,
                    q = g + d.skewX * U,
                    h = (1E5 * Math.cos(g) * d.scaleX | 0) / 1E5,
                    k = (1E5 * Math.sin(g) * d.scaleX | 0) / 1E5,
                    l = (1E5 * Math.sin(q) * -d.scaleY | 0) / 1E5,
                    n = (1E5 * Math.cos(q) * d.scaleY | 0) / 1E5,
                    q = this.t.style;
                if (g = this.t.currentStyle) {
                    f = k;
                    k = -l;
                    l = -f;
                    c = g.filter;
                    q.filter = "";
                    var p, m;
                    f = this.t.offsetWidth;
                    var r = this.t.offsetHeight,
                        s = "absolute" !== g.position,
                        t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + k + ", M21=" + l + ", M22=" + n,
                        u = d.x + f * d.xPercent / 100,
                        v = d.y + r * d.yPercent / 100;
                    if (null != d.ox && (p = (d.oxp ? 0.01 *
                            f * d.ox : d.ox) - f / 2, m = (d.oyp ? 0.01 * r * d.oy : d.oy) - r / 2, u += p - (p * h + m * k), v += m - (p * l + m * n)), s ? (p = f / 2, m = r / 2, t += ", Dx=" + (p - (p * h + m * k) + u) + ", Dy=" + (m - (p * l + m * n) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== c.indexOf("DXImageTransform.Microsoft.Matrix(") ? q.filter = c.replace(fa, t) : q.filter = t + " " + c, (0 === a || 1 === a) && 1 === h && 0 === k && 0 === l && 1 === n && (s && -1 === t.indexOf("Dx=0, Dy=0") || G.test(c) && 100 !== parseFloat(RegExp.$1) || -1 === c.indexOf(c.indexOf("Alpha")) && q.removeAttribute("filter")), !s)
                        for (a = 8 > b ? 1 : -1, p = d.ieOffsetX || 0, m = d.ieOffsetY ||
                            0, d.ieOffsetX = Math.round((f - ((0 > h ? -h : h) * f + (0 > k ? -k : k) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > n ? -n : n) * r + (0 > l ? -l : l) * f)) / 2 + v), va = 0; 4 > va; va++) h = aa[va], k = g[h], f = -1 !== k.indexOf("px") ? parseFloat(k) : qa(this.t, h, parseFloat(k), k.replace(N, "")) || 0, k = f !== d[h] ? 2 > va ? -d.ieOffsetX : -d.ieOffsetY : 2 > va ? p - d.ieOffsetX : m - d.ieOffsetY, q[h] = (d[h] = Math.round(f - k * (0 === va || 2 === va ? 1 : a))) + "px"
                }
            },
            ob = ba.set3DTransformRatio = ba.setTransformRatio = function(a) {
                var c, f, b, d, g, q, h, l, k, n, p, m, r, s, t, u, y, A = this.data,
                    w = this.t.style,
                    M = A.rotation,
                    Z = A.rotationX,
                    F = A.rotationY,
                    C = A.scaleX,
                    z = A.scaleY,
                    G = A.scaleZ,
                    K = A.x,
                    aa = A.y,
                    H = A.z,
                    pa = A.svg,
                    I = A.perspective;
                q = A.force3D;
                if (!((1 !== a && 0 !== a || "auto" !== q || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && q || H || I || F || Z || 1 !== G) || Aa && pa || !Na) return void(M || A.skewX || pa ? (M *= U, g = A.skewX * U, c = Math.cos(M) * C, b = Math.sin(M) * C, f = Math.sin(M - g) * -z, d = Math.cos(M - g) * z, g && "simple" === A.skewType && (u = Math.tan(g), u = Math.sqrt(1 + u * u), f *= u, d *= u, A.skewY && (c *= u, b *= u)), pa && (K += A.xOrigin - (A.xOrigin * c + A.yOrigin *
                    f) + A.xOffset, aa += A.yOrigin - (A.xOrigin * b + A.yOrigin * d) + A.yOffset, Aa && (A.xPercent || A.yPercent) && (r = this.t.getBBox(), K += 0.01 * A.xPercent * r.width, aa += 0.01 * A.yPercent * r.height), r = 1E-6, r > K && K > -r && (K = 0), r > aa && aa > -r && (aa = 0)), m = (1E5 * c | 0) / 1E5 + "," + (1E5 * b | 0) / 1E5 + "," + (1E5 * f | 0) / 1E5 + "," + (1E5 * d | 0) / 1E5 + "," + K + "," + aa + ")", pa && Aa ? this.t.setAttribute("transform", "matrix(" + m) : w[za] = (A.xPercent || A.yPercent ? "translate(" + A.xPercent + "%," + A.yPercent + "%) matrix(" : "matrix(") + m) : w[za] = (A.xPercent || A.yPercent ? "translate(" + A.xPercent +
                    "%," + A.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + z + "," + K + "," + aa + ")");
                if (v && (r = 1E-4, r > C && C > -r && (C = G = 2E-5), r > z && z > -r && (z = G = 2E-5), !I || A.z || A.rotationX || A.rotationY || (I = 0)), M || A.skewX) M *= U, s = c = Math.cos(M), t = b = Math.sin(M), A.skewX && (M -= A.skewX * U, s = Math.cos(M), t = Math.sin(M), "simple" === A.skewType && (u = Math.tan(A.skewX * U), u = Math.sqrt(1 + u * u), s *= u, t *= u, A.skewY && (c *= u, b *= u))), f = -t, d = s;
                else {
                    if (!(F || Z || 1 !== G || I || pa)) return void(w[za] = (A.xPercent || A.yPercent ? "translate(" + A.xPercent + "%," + A.yPercent + "%) translate3d(" :
                        "translate3d(") + K + "px," + aa + "px," + H + "px)" + (1 !== C || 1 !== z ? " scale(" + C + "," + z + ")" : ""));
                    c = d = 1;
                    f = b = 0
                }
                l = 1;
                a = g = q = h = k = n = 0;
                p = I ? -1 / I : 0;
                m = A.zOrigin;
                r = 1E-6;
                (M = F * U) && (s = Math.cos(M), t = Math.sin(M), q = -t, k = p * -t, a = c * t, g = b * t, l = s, p *= s, c *= s, b *= s);
                (M = Z * U) && (s = Math.cos(M), t = Math.sin(M), u = f * s + a * t, y = d * s + g * t, h = l * t, n = p * t, a = f * -t + a * s, g = d * -t + g * s, l *= s, p *= s, f = u, d = y);
                1 !== G && (a *= G, g *= G, l *= G, p *= G);
                1 !== z && (f *= z, d *= z, h *= z, n *= z);
                1 !== C && (c *= C, b *= C, q *= C, k *= C);
                (m || pa) && (m && (K += a * -m, aa += g * -m, H += l * -m + m), pa && (K += A.xOrigin - (A.xOrigin * c + A.yOrigin *
                    f) + A.xOffset, aa += A.yOrigin - (A.xOrigin * b + A.yOrigin * d) + A.yOffset), r > K && K > -r && (K = "0"), r > aa && aa > -r && (aa = "0"), r > H && H > -r && (H = 0));
                m = A.xPercent || A.yPercent ? "translate(" + A.xPercent + "%," + A.yPercent + "%) matrix3d(" : "matrix3d(";
                m = m + ((r > c && c > -r ? "0" : c) + "," + (r > b && b > -r ? "0" : b) + "," + (r > q && q > -r ? "0" : q)) + ("," + (r > k && k > -r ? "0" : k) + "," + (r > f && f > -r ? "0" : f) + "," + (r > d && d > -r ? "0" : d));
                Z || F || 1 !== G ? (m += "," + (r > h && h > -r ? "0" : h) + "," + (r > n && n > -r ? "0" : n) + "," + (r > a && a > -r ? "0" : a), m += "," + (r > g && g > -r ? "0" : g) + "," + (r > l && l > -r ? "0" : l) + "," + (r > p && p > -r ? "0" : p) +
                    ",") : m += ",0,0,0,0,1,0,";
                m += K + "," + aa + "," + H + "," + (I ? 1 + -H / I : 1) + ")";
                w[za] = m
            },
            s = Za.prototype;
        s.x = s.y = s.z = s.skewX = s.skewY = s.rotation = s.rotationX = s.rotationY = s.zOrigin = s.xPercent = s.yPercent = s.xOffset = s.yOffset = 0;
        s.scaleX = s.scaleY = s.scaleZ = 1;
        oa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(a, c, f, b, d, g, q) {
                if (b._lastParsedTransform === q) return d;
                b._lastParsedTransform = q;
                var h, l, k, m, r, s, t, u, A;
                c = a._gsTransform;
                var v = a.style,
                    M = Ta.length,
                    w = {};
                if (q.display ? (k = da(a, "display"), v.display = "block", h = Va(a, p, !0, q.parseTransform), v.display = k) : h = Va(a, p, !0, q.parseTransform), b._transform = h, "string" == typeof q.transform && za) k = ja.style, k[za] = q.transform, k.display = "block", k.position = "absolute", V.body.appendChild(ja), l = Va(ja, null, !1), h.svg && (t = h.xOrigin, u = h.yOrigin, l.x -= h.xOffset, l.y -= h.yOffset, (q.transformOrigin || q.svgOrigin) && (m = {}, cb(a, Z(q.transformOrigin), m, q.svgOrigin, q.smoothOrigin, !0), t = m.xOrigin, u = m.yOrigin, l.x -= m.xOffset - h.xOffset, l.y -= m.yOffset - h.yOffset), (t || u) && (A = ib(ja), l.x -= t - (t * A[0] + u * A[2]), l.y -= u - (t * A[1] + u * A[3]))), V.body.removeChild(ja), l.perspective || (l.perspective = h.perspective), null != q.xPercent && (l.xPercent = pa(q.xPercent, h.xPercent)), null != q.yPercent && (l.yPercent = pa(q.yPercent, h.yPercent));
                else if ("object" == typeof q) {
                    if (l = {
                            scaleX: pa(null != q.scaleX ? q.scaleX : q.scale, h.scaleX),
                            scaleY: pa(null != q.scaleY ? q.scaleY : q.scale, h.scaleY),
                            scaleZ: pa(q.scaleZ, h.scaleZ),
                            x: pa(q.x, h.x),
                            y: pa(q.y, h.y),
                            z: pa(q.z, h.z),
                            xPercent: pa(q.xPercent, h.xPercent),
                            yPercent: pa(q.yPercent, h.yPercent),
                            perspective: pa(q.transformPerspective, h.perspective)
                        }, r = q.directionalRotation, null != r)
                        if ("object" == typeof r)
                            for (k in r) q[k] = r[k];
                        else q.rotation = r;
                        "string" == typeof q.x && -1 !== q.x.indexOf("%") && (l.x = 0, l.xPercent = pa(q.x, h.xPercent));
                    "string" == typeof q.y && -1 !== q.y.indexOf("%") && (l.y = 0, l.yPercent = pa(q.y, h.yPercent));
                    l.rotation = Ka("rotation" in q ? q.rotation : "shortRotation" in q ? q.shortRotation + "_short" : "rotationZ" in q ? q.rotationZ : h.rotation - h.skewY, h.rotation - h.skewY, "rotation", w);
                    Na && (l.rotationX = Ka("rotationX" in q ? q.rotationX : "shortRotationX" in q ? q.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", w), l.rotationY = Ka("rotationY" in q ? q.rotationY : "shortRotationY" in q ? q.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", w));
                    l.skewX = Ka(q.skewX, h.skewX - h.skewY);
                    (l.skewY = Ka(q.skewY, h.skewY)) &&
                    (l.skewX += l.skewY, l.rotation += l.skewY)
                }
                Na && null != q.force3D && (h.force3D = q.force3D, s = !0);
                h.skewType = q.skewType || h.skewType || n.defaultSkewType;
                for ((r = h.force3D || h.z || h.rotationX || h.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == q.scale || (l.scaleZ = 1); - 1 < --M;) f = Ta[M], m = l[f] - h[f], (1E-6 < m || -1E-6 > m || null != q[f] || null != ia[f]) && (s = !0, d = new na(h, f, h[f], m, d), f in w && (d.e = w[f]), d.xs0 = 0, d.plugin = g, b._overwriteProps.push(d.n));
                return m = q.transformOrigin, h.svg && (m || q.svgOrigin) && (t = h.xOffset, u = h.yOffset,
                    cb(a, Z(m), l, q.svgOrigin, q.smoothOrigin), d = Ba(h, "xOrigin", (c ? h : l).xOrigin, l.xOrigin, d, "transformOrigin"), d = Ba(h, "yOrigin", (c ? h : l).yOrigin, l.yOrigin, d, "transformOrigin"), (t !== h.xOffset || u !== h.yOffset) && (d = Ba(h, "xOffset", c ? t : h.xOffset, h.xOffset, d, "transformOrigin"), d = Ba(h, "yOffset", c ? u : h.yOffset, h.yOffset, d, "transformOrigin")), m = Aa ? null : "0px 0px"), (m || Na && r && h.zOrigin) && (za ? (s = !0, f = Ma, m = (m || da(a, f, p, !1, "50% 50%")) + "", d = new na(v, f, 0, 0, d, -1, "transformOrigin"), d.b = v[f], d.plugin = g, Na ? (k = h.zOrigin, m = m.split(" "),
                    h.zOrigin = (2 < m.length && (0 === k || "0px" !== m[2]) ? parseFloat(m[2]) : k) || 0, d.xs0 = d.e = m[0] + " " + (m[1] || "50%") + " 0px", d = new na(h, "zOrigin", 0, 0, d, -1, d.n), d.b = k, d.xs0 = d.e = h.zOrigin) : d.xs0 = d.e = m) : Z(m + "", h)), s && (b._transformType = h.svg && Aa || !r && 3 !== this._transformType ? 2 : 3), d
            },
            prefix: !0
        });
        oa("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        });
        oa("borderRadius", {
            defaultValue: "0px",
            parser: function(a, c, f, b, d, q) {
                c = this.format(c);
                var g, h, l, n, m, r, t, s, u, A, v, M, w, y = ["borderTopLeftRadius",
                        "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"
                    ],
                    Z = a.style;
                b = parseFloat(a.offsetWidth);
                q = parseFloat(a.offsetHeight);
                c = c.split(" ");
                for (g = 0; g < y.length; g++) this.p.indexOf("border") && (y[g] = sa(y[g])), n = l = da(a, y[g], p, !1, "0px"), -1 !== n.indexOf(" ") && (l = n.split(" "), n = l[0], l = l[1]), m = h = c[g], r = parseFloat(n), u = n.substr((r + "").length), (A = "=" === m.charAt(1)) ? (t = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), t *= parseFloat(m), s = m.substr((t + "").length - (0 > t ? 1 : 0)) || "") : (t = parseFloat(m), s = m.substr((t +
                    "").length)), "" === s && (s = k[f] || u), s !== u && (v = qa(a, "borderLeft", r, u), M = qa(a, "borderTop", r, u), "%" === s ? (n = 100 * (v / b) + "%", l = 100 * (M / q) + "%") : "em" === s ? (w = qa(a, "borderLeft", 1, "em"), n = v / w + "em", l = M / w + "em") : (n = v + "px", l = M + "px"), A && (m = parseFloat(n) + t + s, h = parseFloat(l) + t + s)), d = Ha(Z, y[g], n + " " + l, m + " " + h, !1, "0px", d);
                return d
            },
            prefix: !0,
            formatter: lb("0px 0px 0px 0px", !1, !0)
        });
        oa("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, c, f, d, g, q) {
                var h, k, l;
                f = p || xa(a, null);
                f = this.format((f ? b ? f.getPropertyValue("background-position-x") +
                    " " + f.getPropertyValue("background-position-y") : f.getPropertyValue("background-position") : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0");
                var n = this.format(c);
                if (-1 !== f.indexOf("%") != (-1 !== n.indexOf("%")) && 2 > n.split(",").length && (h = da(a, "backgroundImage").replace(S, ""), h && "none" !== h)) {
                    c = f.split(" ");
                    d = n.split(" ");
                    ca.setAttribute("src", h);
                    for (h = 2; - 1 < --h;) f = c[h], k = -1 !== f.indexOf("%"), k !== (-1 !== d[h].indexOf("%")) && (l = 0 === h ? a.offsetWidth - ca.width : a.offsetHeight - ca.height,
                        c[h] = k ? parseFloat(f) / 100 * l + "px" : 100 * (parseFloat(f) / l) + "%");
                    f = c.join(" ")
                }
                return this.parseComplex(a.style, f, n, g, q)
            },
            formatter: Z
        });
        oa("backgroundSize", {
            defaultValue: "0 0",
            formatter: Z
        });
        oa("perspective", {
            defaultValue: "0px",
            prefix: !0
        });
        oa("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        });
        oa("transformStyle", {
            prefix: !0
        });
        oa("backfaceVisibility", {
            prefix: !0
        });
        oa("userSelect", {
            prefix: !0
        });
        oa("margin", {
            parser: Da("marginTop,marginRight,marginBottom,marginLeft")
        });
        oa("padding", {
            parser: Da("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        oa("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, c, f, d, g, q) {
                var h, k, l;
                return 9 > b ? (k = a.currentStyle, l = 8 > b ? " " : ",", h = "rect(" + k.clipTop + l + k.clipRight + l + k.clipBottom + l + k.clipLeft + ")", c = this.format(c).split(",").join(l)) : (h = this.format(da(a, this.p, p, !1, this.dflt)), c = this.format(c)), this.parseComplex(a.style, h, c, g, q)
            }
        });
        oa("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        });
        oa("autoRound,strictUnits", {
            parser: function(a, c, f, b, d) {
                return d
            }
        });
        oa("border", {
            defaultValue: "0px solid #000",
            parser: function(a, c, f, b, d, g) {
                return this.parseComplex(a.style, this.format(da(a, "borderTopWidth", p, !1, "0px") + " " + da(a, "borderTopStyle", p, !1, "solid") + " " + da(a, "borderTopColor", p, !1, "#000")), this.format(c), d, g)
            },
            color: !0,
            formatter: function(a) {
                var c = a.split(" ");
                return c[0] + " " + (c[1] || "solid") + " " + (a.match(Ea) || ["#000"])[0]
            }
        });
        oa("borderWidth", {
            parser: Da("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        });
        oa("float,cssFloat,styleFloat", {
            parser: function(a, c, f, b, d, g) {
                a = a.style;
                b = "cssFloat" in
                    a ? "cssFloat" : "styleFloat";
                return new na(a, b, 0, 0, d, -1, f, !1, 0, a[b], c)
            }
        });
        var $a = function(a) {
            var c, f = this.t,
                b = f.filter || da(this.data, "filter") || "";
            a = this.s + this.c * a | 0;
            100 === a && (-1 === b.indexOf("atrix(") && -1 === b.indexOf("radient(") && -1 === b.indexOf("oader(") ? (f.removeAttribute("filter"), c = !da(this.data, "filter")) : (f.filter = b.replace(K, ""), c = !0));
            c || (this.xn1 && (f.filter = b = b || "alpha(opacity=" + a + ")"), -1 === b.indexOf("pacity") ? 0 === a && this.xn1 || (f.filter = b + " alpha(opacity=" + a + ")") : f.filter = b.replace(G, "opacity=" +
                a))
        };
        oa("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, c, f, b, d, g) {
                var q = parseFloat(da(a, "opacity", p, !1, "1")),
                    h = a.style,
                    l = "autoAlpha" === f;
                return "string" == typeof c && "=" === c.charAt(1) && (c = ("-" === c.charAt(0) ? -1 : 1) * parseFloat(c.substr(2)) + q), l && 1 === q && "hidden" === da(a, "visibility", p) && 0 !== c && (q = 0), L ? d = new na(h, "opacity", q, c - q, d) : (d = new na(h, "opacity", 100 * q, 100 * (c - q), d), d.xn1 = l ? 1 : 0, h.zoom = 1, d.type = 2, d.b = "alpha(opacity=" + d.s + ")", d.e = "alpha(opacity=" + (d.s + d.c) + ")", d.data = a, d.plugin = g, d.setRatio =
                    $a), l && (d = new na(h, "visibility", 0, 0, d, -1, null, !1, 0, 0 !== q ? "inherit" : "hidden", 0 === c ? "hidden" : "inherit"), d.xs0 = "inherit", b._overwriteProps.push(d.n), b._overwriteProps.push(f)), d
            }
        });
        var Wa = function(a, c) {
                c && (a.removeProperty ? (("ms" === c.substr(0, 2) || "webkit" === c.substr(0, 6)) && (c = "-" + c), a.removeProperty(c.replace(W, "-$1").toLowerCase())) : a.removeAttribute(c))
            },
            fb = function(a) {
                if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                    this.t.setAttribute("class", 0 === a ? this.b : this.e);
                    for (var c = this.data, f = this.t.style; c;) c.v ?
                        f[c.p] = c.v : Wa(f, c.p), c = c._next;
                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        oa("className", {
            parser: function(a, f, b, d, g, h, k) {
                var n, l, r, t, s = a.getAttribute("class") || "",
                    u = a.style.cssText;
                if (g = d._classNamePT = new na(a, b, 0, 0, g, 2), g.setRatio = fb, g.pr = -11, m = !0, g.b = s, b = q(a, p), l = a._gsClassPT) {
                    r = {};
                    for (t = l.data; t;) r[t.p] = 1, t = t._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g, g.e = "=" !== f.charAt(1) ? f : s.replace(RegExp("(?:\\s|^)" +
                    f.substr(2) + "(?![\\w-])"), "") + ("+" === f.charAt(0) ? " " + f.substr(2) : ""), a.setAttribute("class", g.e), n = c(a, b, q(a), k, r), a.setAttribute("class", s), g.data = n.firstMPT, a.style.cssText = u, g.xfirst = d.parse(a, n.difs, g, h)
            }
        });
        var ab = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var c, f, b, d, g = this.t.style,
                    q = r.transform.parse;
                if ("all" === this.e) g.cssText = "", b = !0;
                else
                    for (a = this.e.split(" ").join("").split(","), f = a.length; - 1 < --f;) c = a[f], r[c] && (r[c].parse ===
                        q ? b = !0 : c = "transformOrigin" === c ? Ma : r[c].p), Wa(g, c);
                b && (Wa(g, za), d = this.t._gsTransform, d && (d.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        oa("clearProps", {
            parser: function(a, c, f, b, d) {
                return d = new na(a, f, 0, 0, d, 2), d.setRatio = ab, d.e = c, d.pr = -10, d.data = b._tween, m = !0, d
            }
        });
        s = ["bezier", "throwProps", "physicsProps", "physics2D"];
        for (va = s.length; va--;) Ya(s[va]);
        s = n.prototype;
        s._firstPT = s._lastParsedTransform = s._transform = null;
        s._onInitTween =
            function(a, f, b) {
                if (!a.nodeType) return !1;
                this._target = a;
                this._tween = b;
                this._vars = f;
                z = f.autoRound;
                m = !1;
                k = f.suffixMap || n.suffixMap;
                p = xa(a, "");
                h = this._overwriteProps;
                var d, g, s, u, A, l;
                l = a.style;
                if (w && "" === l.zIndex && (d = da(a, "zIndex", p), ("auto" === d || "" === d) && this._addLazySet(l, "zIndex", 0)), "string" == typeof f && (u = l.cssText, d = q(a, p), l.cssText = u + ";" + f, d = c(a, d, q(a)).difs, !L && I.test(f) && (d.opacity = parseFloat(RegExp.$1)), f = d, l.cssText = u), f.className ? this._firstPT = g = r.className.parse(a, f.className, "className", this,
                        null, null, f) : this._firstPT = g = this.parse(a, f, null), this._transformType) {
                    f = 3 === this._transformType;
                    za ? t && (w = !0, "" === l.zIndex && (s = da(a, "zIndex", p), ("auto" === s || "" === s) && this._addLazySet(l, "zIndex", 0)), y && this._addLazySet(l, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (f ? "visible" : "hidden"))) : l.zoom = 1;
                    for (s = g; s && s._next;) s = s._next;
                    l = new na(a, "transform", 0, 0, null, 2);
                    this._linkCSSP(l, null, s);
                    l.setRatio = za ? ob : nb;
                    l.data = this._transform || Va(a, p, !0);
                    l.tween = b;
                    l.pr = -1;
                    h.pop()
                }
                if (m) {
                    for (; g;) {
                        a =
                            g._next;
                        for (s = u; s && s.pr > g.pr;) s = s._next;
                        (g._prev = s ? s._prev : A) ? g._prev._next = g: u = g;
                        (g._next = s) ? s._prev = g: A = g;
                        g = a
                    }
                    this._firstPT = u
                }
                return !0
            };
        s.parse = function(a, c, b, d) {
            var g, q, h, n, l, m, s, t, u, v = a.style;
            for (g in c) {
                l = c[g];
                if (q = r[g]) b = q.parse(a, l, g, this, b, d, c);
                else if (q = da(a, g, p) + "", t = "string" == typeof l, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || t && A.test(l)) t || (l = Xa(l), l = (3 < l.length ? "rgba(" : "rgb(") + l.join(",") + ")"), b = Ha(v, g, q, l, !0, "transparent", b, 0, d);
                else if (t && X.test(l)) b = Ha(v, g, q,
                    l, !0, null, b, 0, d);
                else {
                    m = (h = parseFloat(q)) || 0 === h ? q.substr((h + "").length) : "";
                    if ("" === q || "auto" === q)
                        if ("width" === g || "height" === g) {
                            h = a;
                            var w = g;
                            m = p;
                            u = parseFloat("width" === w ? h.offsetWidth : h.offsetHeight);
                            var w = M[w],
                                y = w.length;
                            for (m = m || xa(h, null); - 1 < --y;) u -= parseFloat(da(h, "padding" + w[y], m, !0)) || 0, u -= parseFloat(da(h, "border" + w[y] + "Width", m, !0)) || 0;
                            h = u;
                            m = "px"
                        } else "left" === g || "top" === g ? (h = f(a, g, p), m = "px") : (h = "opacity" !== g ? 0 : 1, m = "");
                        (u = t && "=" === l.charAt(1)) ? (n = parseInt(l.charAt(0) + "1", 10), l = l.substr(2), n *=
                            parseFloat(l), s = l.replace(N, "")) : (n = parseFloat(l), s = t ? l.replace(N, "") : "");
                        "" === s && (s = g in k ? k[g] : m);
                    l = n || 0 === n ? (u ? n + h : n) + s : c[g];
                    m !== s && "" !== s && (n || 0 === n) && h && (h = qa(a, g, h, m), "%" === s ? (h /= qa(a, g, 100, "%") / 100, !0 !== c.strictUnits && (q = h + "%")) : "em" === s || "rem" === s || "vw" === s || "vh" === s ? h /= qa(a, g, 1, s) : "px" !== s && (n = qa(a, g, n, s), s = "px"), u && (n || 0 === n) && (l = n + h + s));
                    u && (n += h);
                    !h && 0 !== h || !n && 0 !== n ? void 0 !== v[g] && (l || "NaN" != l + "" && null != l) ? (b = new na(v, g, n || h || 0, 0, b, -1, g, !1, 0, q, l), b.xs0 = "none" !== l || "display" !== g && -1 ===
                        g.indexOf("Style") ? l : q) : window.console && console.log("invalid " + g + " tween value: " + c[g]) : (b = new na(v, g, h, n - h, b, 0, g, !1 !== z && ("px" === s || "zIndex" === g), 0, q, l), b.xs0 = s)
                }
                d && b && !b.plugin && (b.plugin = d)
            }
            return b
        };
        s.setRatio = function(a) {
            var c, f, b, d = this._firstPT;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1E-6 === this._tween._rawPrevTime)
                    for (; d;) {
                        if (c = d.c * a + d.s, d.r ? c = Math.round(c) : 1E-6 > c && -1E-6 < c && (c = 0), d.type)
                            if (1 ===
                                d.type)
                                if (b = d.l, 2 === b) d.t[d.p] = d.xs0 + c + d.xs1 + d.xn1 + d.xs2;
                                else if (3 === b) d.t[d.p] = d.xs0 + c + d.xs1 + d.xn1 + d.xs2 + d.xn2 + d.xs3;
                        else if (4 === b) d.t[d.p] = d.xs0 + c + d.xs1 + d.xn1 + d.xs2 + d.xn2 + d.xs3 + d.xn3 + d.xs4;
                        else if (5 === b) d.t[d.p] = d.xs0 + c + d.xs1 + d.xn1 + d.xs2 + d.xn2 + d.xs3 + d.xn3 + d.xs4 + d.xn4 + d.xs5;
                        else {
                            f = d.xs0 + c + d.xs1;
                            for (b = 1; b < d.l; b++) f += d["xn" + b] + d["xs" + (b + 1)];
                            d.t[d.p] = f
                        } else -1 === d.type ? d.t[d.p] = d.xs0 : d.setRatio && d.setRatio(a);
                        else d.t[d.p] = c + d.xs0;
                        d = d._next
                    } else
                        for (; d;) 2 !== d.type ? d.t[d.p] = d.b : d.setRatio(a), d = d._next;
                else
                    for (; d;) {
                        if (2 !== d.type)
                            if (d.r && -1 !== d.type)
                                if (c = Math.round(d.s + d.c), d.type) {
                                    if (1 === d.type) {
                                        f = d.xs0 + c + d.xs1;
                                        for (b = 1; b < d.l; b++) f += d["xn" + b] + d["xs" + (b + 1)];
                                        d.t[d.p] = f
                                    }
                                } else d.t[d.p] = c + d.xs0;
                        else d.t[d.p] = d.e;
                        else d.setRatio(a);
                        d = d._next
                    }
        };
        s._enableTransforms = function(a) {
            this._transform = this._transform || Va(this._target, p, !0);
            this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
        };
        var Pa = function(a) {
            this.t[this.p] = this.e;
            this.data._linkCSSP(this, this._next, null, !0)
        };
        s._addLazySet =
            function(a, c, f) {
                a = this._firstPT = new na(a, c, 0, 0, this._firstPT, 2);
                a.e = f;
                a.setRatio = Pa;
                a.data = this
            };
        s._linkCSSP = function(a, c, f, b) {
            return a && (c && (c._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, b = !0), f ? f._next = a : b || null !== this._firstPT || (this._firstPT = a), a._next = c, a._prev = f), a
        };
        s._kill = function(c) {
            var f, b, d, g = c;
            if (c.autoAlpha || c.alpha) {
                g = {};
                for (b in c) g[b] = c[b];
                g.opacity = 1;
                g.autoAlpha && (g.visibility = 1)
            }
            return c.className && (f = this._classNamePT) &&
                (d = f.xfirst, d && d._prev ? this._linkCSSP(d._prev, f._next, d._prev._prev) : d === this._firstPT && (this._firstPT = f._next), f._next && this._linkCSSP(f._next, f._next._next, d._prev), this._classNamePT = null), a.prototype._kill.call(this, g)
        };
        var Qa = function(a, c, f) {
            var b, d, g;
            if (a.slice)
                for (b = a.length; - 1 < --b;) Qa(a[b], c, f);
            else
                for (a = a.childNodes, b = a.length; - 1 < --b;) d = a[b], g = d.type, d.style && (c.push(q(d)), f && f.push(d)), 1 !== g && 9 !== g && 11 !== g || !d.childNodes.length || Qa(d, c, f)
        };
        return n.cascadeTo = function(a, f, b) {
            var g, q, h;
            h =
                d.to(a, f, b);
            var k = [h],
                n = [],
                l = [],
                p = [],
                m = d._internals.reservedProps;
            a = h._targets || h.target;
            Qa(a, n, p);
            h.render(f, !0, !0);
            Qa(a, l);
            h.render(0, !0, !0);
            h._enabled(!0);
            for (a = p.length; - 1 < --a;)
                if (g = c(p[a], n[a], l[a]), g.firstMPT) {
                    g = g.difs;
                    for (q in b) m[q] && (g[q] = b[q]);
                    h = {};
                    for (q in g) h[q] = n[a][q];
                    k.push(d.fromTo(p[a], f, h, g))
                }
            return k
        }, a.activate([n]), n
    }, !0)
});
_gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function(a) {
    var d = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], d) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = d())
})("CSSPlugin");
! function(a, d) {
    var m = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!m.TweenLite) {
        var k, p, h, n, g, r = function(a) {
                var b = a.split("."),
                    c = m;
                for (a = 0; a < b.length; a++) c[b[a]] = c = c[b[a]] || {};
                return c
            },
            s = r("com.greensock"),
            z = function(a) {
                var b, c = [],
                    d = a.length;
                for (b = 0; b !== d; c.push(a[b++]));
                return c
            },
            w = function() {},
            t = function() {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function(c) {
                    return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                }
            }(),
            v = {},
            y = function(f, b, c, g) {
                this.sc = v[f] ? v[f].sc : [];
                v[f] = this;
                this.gsClass = null;
                this.func = c;
                var h = [];
                this.check = function(k) {
                    for (var n, p, s, t = b.length, u = t; - 1 < --t;)(n = v[b[t]] || new y(b[t], [])).gsClass ? (h[t] = n.gsClass, u--) : k && n.sc.push(this);
                    if (0 === u && c)
                        for (k = ("com.greensock." + f).split("."), n = k.pop(), p = r(k.join("."))[n] = this.gsClass = c.apply(c, h), g && (m[n] = p, s = "undefined" != typeof module && module.exports, !s && "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + f.split(".").pop(), [], function() {
                                return p
                            }) : f === d && s && (module.exports =
                                p)), t = 0; t < this.sc.length; t++) this.sc[t].check()
                };
                this.check(!0)
            },
            b = a._gsDefine = function(a, b, c, d) {
                return new y(a, b, c, d)
            },
            u = s._class = function(a, d, c) {
                return d = d || function() {}, b(a, [], function() {
                    return d
                }, c), d
            };
        b.globals = m;
        var H = [0, 0, 1, 1],
            J = [],
            C = u("easing.Ease", function(a, b, c, d) {
                this._func = a;
                this._type = c || 0;
                this._power = d || 0;
                this._params = b ? H.concat(b) : H
            }, !0),
            N = C.map = {},
            G = C.register = function(a, b, c, d) {
                var g, h, k;
                b = b.split(",");
                for (var n = b.length, p = (c || "easeIn,easeOut,easeInOut").split(","); - 1 < --n;)
                    for (g = b[n],
                        c = d ? u("easing." + g, null, !0) : s.easing[g] || {}, h = p.length; - 1 < --h;) k = p[h], N[g + "." + k] = N[k + g] = c[k] = a.getRatio ? a : a[k] || new a
            };
        h = C.prototype;
        h._calcEnd = !1;
        h.getRatio = function(a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type,
                c = this._power,
                d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
        };
        k = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
        for (p = k.length; - 1 < --p;) h = k[p] + ",Power" +
            p, G(new C(null, null, 1, p), h, "easeOut", !0), G(new C(null, null, 2, p), h, "easeIn" + (0 === p ? ",easeNone" : "")), G(new C(null, null, 3, p), h, "easeInOut");
        N.linear = s.easing.Linear.easeIn;
        N.swing = s.easing.Quad.easeInOut;
        var I = u("events.EventDispatcher", function(a) {
            this._listeners = {};
            this._eventTarget = a || this
        });
        h = I.prototype;
        h.addEventListener = function(a, b, c, d, h) {
            h = h || 0;
            var k, p = this._listeners[a],
                m = 0;
            null == p && (this._listeners[a] = p = []);
            for (k = p.length; - 1 < --k;) a = p[k], a.c === b && a.s === c ? p.splice(k, 1) : 0 === m && a.pr < h && (m = k + 1);
            p.splice(m, 0, {
                c: b,
                s: c,
                up: d,
                pr: h
            });
            this !== n || g || n.wake()
        };
        h.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; - 1 < --c;)
                    if (d[c].c === b) return void d.splice(c, 1)
        };
        h.dispatchEvent = function(a) {
            var b, c, d, g = this._listeners[a];
            if (g)
                for (b = g.length, c = this._eventTarget; - 1 < --b;)(d = g[b]) && (d.up ? d.c.call(d.s || c, {
                    type: a,
                    target: c
                }) : d.c.call(d.s || c))
        };
        var K = a.requestAnimationFrame,
            A = a.cancelAnimationFrame,
            W = Date.now || function() {
                return (new Date).getTime()
            },
            Q = W();
        k = ["ms", "moz", "webkit",
            "o"
        ];
        for (p = k.length; - 1 < --p && !K;) K = a[k[p] + "RequestAnimationFrame"], A = a[k[p] + "CancelAnimationFrame"] || a[k[p] + "CancelRequestAnimationFrame"];
        u("Ticker", function(a, b) {
            var c, d, h, k, p, m = this,
                r = W(),
                s = !1 !== b && K ? "auto" : !1,
                t = 500,
                u = 33,
                v = function(a) {
                    var f, b;
                    f = W() - Q;
                    f > t && (r += f - u);
                    Q += f;
                    m.time = (Q - r) / 1E3;
                    f = m.time - p;
                    (!c || 0 < f || !0 === a) && (m.frame++, p += f + (f >= k ? 0.004 : k - f), b = !0);
                    !0 !== a && (h = d(v));
                    b && m.dispatchEvent("tick")
                };
            I.call(m);
            m.time = m.frame = 0;
            m.tick = function() {
                v(!0)
            };
            m.lagSmoothing = function(a, c) {
                t = a || 1E10;
                u = Math.min(c,
                    t, 0)
            };
            m.sleep = function() {
                null != h && (s && A ? A(h) : clearTimeout(h), d = w, h = null, m === n && (g = !1))
            };
            m.wake = function(a) {
                null !== h ? m.sleep() : a ? r += -Q + (Q = W()) : 10 < m.frame && (Q = W() - t + 5);
                d = 0 === c ? w : s && K ? K : function(a) {
                    return setTimeout(a, 1E3 * (p - m.time) + 1 | 0)
                };
                m === n && (g = !0);
                v(2)
            };
            m.fps = function(a) {
                return arguments.length ? (c = a, k = 1 / (c || 60), p = this.time + k, void m.wake()) : c
            };
            m.useRAF = function(a) {
                return arguments.length ? (m.sleep(), s = a, void m.fps(c)) : s
            };
            m.fps(a);
            setTimeout(function() {
                "auto" === s && 5 > m.frame && "hidden" !== document.visibilityState &&
                    m.useRAF(!1)
            }, 1500)
        });
        h = s.Ticker.prototype = new s.events.EventDispatcher;
        h.constructor = s.Ticker;
        var S = u("core.Animation", function(a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, L) {
                g || n.wake();
                var c = this.vars.useFrames ? ha : L;
                c.add(this, c._time);
                this.vars.paused && this.paused(!0)
            }
        });
        n = S.ticker = new s.Ticker;
        h = S.prototype;
        h._dirty = h._gc = h._initted = h._paused = !1;
        h._totalTime = h._time = 0;
        h._rawPrevTime = -1;
        h._next = h._last = h._onUpdate = h._timeline = h.timeline = null;
        h._paused = !1;
        var ga = function() {
            g && 2E3 < W() - Q && n.wake();
            setTimeout(ga, 2E3)
        };
        ga();
        h.play = function(a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        };
        h.pause = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        };
        h.resume = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        };
        h.seek = function(a, b) {
            return this.totalTime(Number(a), !1 !== b)
        };
        h.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ?
                -this._delay : 0, !1 !== b, !0)
        };
        h.reverse = function(a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        };
        h.render = function(a, b, c) {};
        h.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        };
        h.isActive = function() {
            var a, b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
        };
        h._enabled =
            function(a, b) {
                return g || n.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            };
        h._kill = function(a, b) {
            return this._enabled(!1, !1)
        };
        h.kill = function(a, b) {
            return this._kill(a, b), this
        };
        h._uncache = function(a) {
            for (a = a ? this : this.timeline; a;) a._dirty = !0, a = a.timeline;
            return this
        };
        h._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); - 1 < --b;) "{self}" === a[b] && (c[b] = this);
            return c
        };
        h._callback = function(a) {
            var b = this.vars;
            b[a].apply(b[a + "Scope"] || b.callbackScope || this, b[a + "Params"] || J)
        };
        h.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var g = this.vars;
                if (1 === arguments.length) return g[a];
                null == b ? delete g[a] : (g[a] = b, g[a + "Params"] = t(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, g[a + "Scope"] = d);
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        };
        h.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime +
                a - this._delay), this._delay = a, this) : this._delay
        };
        h.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        };
        h.totalDuration = function(a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        };
        h.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
                this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        };
        h.totalTime = function(a, b, c) {
            if (g || n.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        h = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : h._time) - (this._reversed ? d - a : a) / this._timeScale, h._dirty || this._uncache(!1), h._timeline)
                        for (; h._timeline;) h._timeline._time !==
                            (h._startTime + h._totalTime) / h._timeScale && h.totalTime(h._totalTime, !0), h = h._timeline
                }
                this._gc && this._enabled(!0, !1);
                (this._totalTime !== a || 0 === this._duration) && (fa.length && ka(), this.render(a, b, !1), fa.length && ka())
            }
            return this
        };
        h.progress = h.totalProgress = function(a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
        };
        h.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this,
                a - this._delay)), this) : this._startTime
        };
        h.endTime = function(a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        };
        h.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || 1E-10, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime,
                    b = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = b - (b - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        };
        h.reversed = function(a) {
            return arguments.length ? (a != this._reversed &&
                (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        };
        h.paused = function(a) {
            if (!arguments.length) return this._paused;
            var b, c, d = this._timeline;
            return a != this._paused && d && (g || a || n.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() &&
                (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
        };
        k = u("core.SimpleTimeline", function(a) {
            S.call(this, 0, a);
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        h = k.prototype = new S;
        h.constructor = k;
        h.kill()._gc = !1;
        h._first = h._last = h._recent = null;
        h._sortChildren = !1;
        h.add = h.insert = function(a, b, c, d) {
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() -
                    a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), b = this._last, this._sortChildren)
                for (c = a._startTime; b && b._startTime > c;) b = b._prev;
            return b ? (a._next = b._next, b._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = b, this._recent = a, this._timeline && this._uncache(!0), this
        };
        h._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first =
                a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        };
        h.render = function(a, b, c) {
            var d, g = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; g;) d = g._next, (g._active || a >= g._startTime && !g._paused) && (g._reversed ? g.render((g._dirty ? g.totalDuration() : g._totalDuration) - (a - g._startTime) * g._timeScale, b, c) : g.render((a - g._startTime) * g._timeScale, b, c)), g = d
        };
        h.rawTime =
            function() {
                return g || n.wake(), this._totalTime
            };
        var O = u("TweenLite", function(b, d, c) {
                if (S.call(this, d, c), this.render = O.prototype.render, null == b) throw "Cannot tween a null target.";
                this.target = b = "string" != typeof b ? b : O.selector(b) || b;
                var g, h;
                g = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
                c = this.vars.overwrite;
                if (this._overwrite = c = null == c ? ba[O.defaultOverwrite] : "number" == typeof c ? c >> 0 : ba[c], (g || b instanceof Array || b.push && t(b)) && "number" != typeof b[0])
                    for (this._targets =
                        h = z(b), this._propLookup = [], this._siblings = [], b = 0; b < h.length; b++)(g = h[b]) ? "string" != typeof g ? g.length && g !== a && g[0] && (g[0] === a || g[0].nodeType && g[0].style && !g.nodeType) ? (h.splice(b--, 1), this._targets = h = h.concat(z(g))) : (this._siblings[b] = ua(g, this, !1), 1 === c && 1 < this._siblings[b].length && xa(g, this, null, 1, this._siblings[b])) : (g = h[b--] = O.selector(g), "string" == typeof g && h.splice(b + 1, 1)) : h.splice(b--, 1);
                else this._propLookup = {}, this._siblings = ua(b, this, !1), 1 === c && 1 < this._siblings.length && xa(b, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === d && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1E-10, this.render(Math.min(0, -this._delay)))
            }, !0),
            ea = function(b) {
                return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
            };
        h = O.prototype = new S;
        h.constructor = O;
        h.kill()._gc = !1;
        h.ratio = 0;
        h._firstPT = h._targets = h._overwrittenProps = h._startAt = null;
        h._notifyPluginsOfEnabled = h._lazy = !1;
        O.version = "1.18.3";
        O.defaultEase = h._ease = new C(null, null, 1, 1);
        O.defaultOverwrite = "auto";
        O.ticker =
            n;
        O.autoSleep = 120;
        O.lagSmoothing = function(a, b) {
            n.lagSmoothing(a, b)
        };
        O.selector = a.$ || a.jQuery || function(b) {
            var d = a.$ || a.jQuery;
            return d ? (O.selector = d, d(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        };
        var fa = [],
            Y = {},
            X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            U = function(a) {
                for (var b, c = this._firstPT; c;) b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.r ? b = Math.round(b) : 1E-6 > b && -1E-6 < b && (b = 0), c.f ?
                    c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
            },
            T = function(a, b, c, d) {
                var g, h, k, n, p = [a, b],
                    m = 0,
                    r = "",
                    s = 0;
                p.start = a;
                c && (c(p), a = p[0], b = p[1]);
                p.length = 0;
                a = a.match(X) || [];
                c = b.match(X) || [];
                d && (d._next = null, d.blob = 1, p._firstPT = d);
                h = c.length;
                for (d = 0; h > d; d++) n = c[d], k = b.substr(m, b.indexOf(n, m) - m), r += k || !d ? k : ",", m += k.length, s ? s = (s + 1) % 5 : "rgba(" === k.substr(-5) && (s = 1), n === a[d] || a.length <= d ? r += n : (r && (p.push(r), r = ""), g = parseFloat(a[d]), p.push(g), p._firstPT = {
                    _next: p._firstPT,
                    t: p,
                    p: p.length - 1,
                    s: g,
                    c: ("=" === n.charAt(1) ?
                        parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - g) || 0,
                    f: 0,
                    r: s && 4 > s
                }), m += n.length;
                return r += b.substr(m), r && p.push(r), p.setRatio = U, p
            },
            ia = function(a, b, c, d, g, h, k, n) {
                var p, m, r = "get" === c ? a[b] : c,
                    s = typeof a[b],
                    t = "string" == typeof d && "=" === d.charAt(1);
                h = {
                    t: a,
                    p: b,
                    s: r,
                    f: "function" === s,
                    pg: 0,
                    n: g || b,
                    r: h,
                    pr: 0,
                    c: t ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - r || 0
                };
                return "number" !== s && ("function" === s && "get" === c && (m = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b :
                    "get" + b.substr(3), h.s = r = k ? a[m](k) : a[m]()), "string" == typeof r && (k || isNaN(r)) ? (h.fp = k, p = T(r, d, n || O.defaultStringFilter, h), h = {
                    t: p,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: g || b,
                    pr: 0
                }) : t || (h.s = parseFloat(r), h.c = parseFloat(d) - h.s || 0)), h.c ? ((h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h, h) : void 0
            };
        p = O._internals = {
            isArray: t,
            isSelector: ea,
            lazyTweens: fa,
            blobDif: T
        };
        var V = O._plugins = {},
            P = p.tweenLookup = {},
            ja = 0,
            ca = p.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1
            },
            ba = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            ha = S._rootFramesTimeline = new k,
            L = S._rootTimeline = new k,
            F = 30,
            ka = p.lazyRender = function() {
                var a, b = fa.length;
                for (Y = {}; - 1 < --b;)(a = fa[b]) && !1 !== a._lazy && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                fa.length = 0
            };
        L._startTime = n.time;
        ha._startTime = n.frame;
        L._active = ha._active = !0;
        setTimeout(ka, 1);
        S._updateRoot = O.render = function() {
            var a, b, c;
            if (fa.length && ka(), L.render((n.time - L._startTime) * L._timeScale, !1, !1), ha.render((n.frame - ha._startTime) * ha._timeScale, !1, !1), fa.length && ka(), n.frame >= F) {
                F = n.frame + (parseInt(O.autoSleep, 10) || 120);
                for (c in P) {
                    b =
                        P[c].tweens;
                    for (a = b.length; - 1 < --a;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete P[c]
                }
                if (c = L._first, (!c || c._paused) && O.autoSleep && !ha._first && 1 === n._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || n.sleep()
                }
            }
        };
        n.addEventListener("tick", S._updateRoot);
        var ua = function(a, b, c) {
                var d, g, h = a._gsTweenID;
                if (P[h || (a._gsTweenID = h = "t" + ja++)] || (P[h] = {
                        target: a,
                        tweens: []
                    }), b && (d = P[h].tweens, d[g = d.length] = b, c))
                    for (; - 1 < --g;) d[g] === b && d.splice(g, 1);
                return P[h].tweens
            },
            sa = function(a, b, c, d) {
                var g, h, k = a.vars.onOverwrite;
                return k && (g = k(a, b, c, d)), k = O.onOverwrite, k && (h = k(a, b, c, d)), !1 !== g && !1 !== h
            },
            xa = function(a, b, c, d, g) {
                var h, k, n;
                if (1 === d || 4 <= d) {
                    c = g.length;
                    for (h = 0; c > h; h++)
                        if ((n = g[h]) !== b) n._gc || n._kill(null, a, b) && (k = !0);
                        else if (5 === d) break;
                    return k
                }
                var p, m = b._startTime + 1E-10,
                    r = [],
                    s = 0,
                    t = 0 === b._duration;
                for (h = g.length; - 1 < --h;)(n = g[h]) === b || n._gc || n._paused || (n._timeline !== b._timeline ? (p = p || da(b, 0, t), 0 === da(n, p, t) && (r[s++] = n)) : n._startTime <= m && n._startTime + n.totalDuration() / n._timeScale > m && ((t || !n._initted) && 2E-10 >= m - n._startTime ||
                    (r[s++] = n)));
                for (h = s; - 1 < --h;)(n = r[h], 2 === d && n._kill(c, a, b) && (k = !0), 2 !== d || !n._firstPT && n._initted) && (2 === d || sa(n, b)) && n._enabled(!1, !1) && (k = !0);
                return k
            },
            da = function(a, b, c) {
                for (var d = a._timeline, g = d._timeScale, h = a._startTime; d._timeline;) {
                    if (h += d._startTime, g *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return h /= g, h > b ? h - b : c && h === b || !a._initted && 2E-10 > h - b ? 1E-10 : (h += a.totalDuration() / a._timeScale / g) > b + 1E-10 ? 0 : h - b - 1E-10
            };
        h._init = function() {
            var a, b, c, d = this.vars,
                g = this._overwrittenProps,
                h = this._duration,
                k = !!d.immediateRender,
                n = d.ease;
            if (d.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill());
                c = {};
                for (a in d.startAt) c[a] = d.startAt[a];
                if (c.overwrite = !1, c.immediateRender = !0, c.lazy = k && !1 !== d.lazy, c.startAt = c.delay = null, this._startAt = O.to(this.target, 0, c), k)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== h) return
            } else if (d.runBackwards && 0 !== h)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (k = !1);
                    c = {};
                    for (a in d) ca[a] && "autoCSS" !==
                        a || (c[a] = d[a]);
                    if (c.overwrite = 0, c.data = "isFromStart", c.lazy = k && !1 !== d.lazy, c.immediateRender = k, this._startAt = O.to(this.target, 0, c), k) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = n = n ? n instanceof C ? n : "function" == typeof n ? new C(n, d.easeParams) : N[n] || O.defaultEase : O.defaultEase, d.easeParams instanceof Array && n.config && (this._ease = n.config.apply(n, d.easeParams)), this._easeType = this._ease._type, this._easePower =
                this._ease._power, this._firstPT = null, this._targets)
                for (a = this._targets.length; - 1 < --a;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, g);
            if (b && O._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), d.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = d.onUpdate;
            this._initted = !0
        };
        h._initProps = function(b,
            d, c, g) {
            var h, k, n, p, m;
            if (null == b) return !1;
            Y[b._gsTweenID] && ka();
            if (!this.vars.css && b.style && b !== a && b.nodeType && V.css && !1 !== this.vars.autoCSS) {
                k = this.vars;
                var r = {};
                for (m in k) ca[m] || m in b && "transform" !== m && "x" !== m && "y" !== m && "width" !== m && "height" !== m && "className" !== m && "border" !== m || !(!V[m] || V[m] && V[m]._autoCSS) || (r[m] = k[m], delete k[m]);
                k.css = r
            }
            for (h in this.vars)
                if (k = this.vars[h], ca[h]) k && (k instanceof Array || k.push && t(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[h] = this._swapSelfInParams(k, this));
                else if (V[h] && (p = new V[h])._onInitTween(b, this.vars[h], this)) {
                this._firstPT = m = {
                    _next: this._firstPT,
                    t: p,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: h,
                    pg: 1,
                    pr: p._priority
                };
                for (k = p._overwriteProps.length; - 1 < --k;) d[p._overwriteProps[k]] = this._firstPT;
                (p._priority || p._onInitAllProps) && (n = !0);
                (p._onDisable || p._onEnable) && (this._notifyPluginsOfEnabled = !0);
                m._next && (m._next._prev = m)
            } else d[h] = ia.call(this, b, h, "get", k, h, 0, null, this.vars.stringFilter);
            return g && this._kill(g, b) ? this._initProps(b, d, c, g) : 1 < this._overwrite && this._firstPT &&
                1 < c.length && xa(b, this, d, this._overwrite, c) ? (this._kill(d, b), this._initProps(b, d, c, g)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (Y[b._gsTweenID] = !0), n)
        };
        h.render = function(a, b, c) {
            var d, g, h, k, n = this._time,
                p = this._duration;
            h = this._rawPrevTime;
            if (a >= p - 1E-7) this._totalTime = this._time = p, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, g = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === p && (this._initted || !this.vars.lazy ||
                c) && (this._startTime === this._timeline._duration && (a = 0), (0 > h || 0 >= a && -1E-7 <= a || 1E-10 === h && "isPause" !== this.data) && h !== a && (c = !0, 1E-10 < h && (g = "onReverseComplete")), this._rawPrevTime = k = !b || a || h === a ? a : 1E-10);
            else if (1E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== n || 0 === p && 0 < h) && (g = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === p && (this._initted || !this.vars.lazy || c) && (0 <= h && (1E-10 !== h || "isPause" !== this.data) && (c = !0), this._rawPrevTime = k = !b ||
                a || h === a ? a : 1E-10)), this._initted || (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                var m = a / p,
                    r = this._easeType,
                    s = this._easePower;
                (1 === r || 3 === r && 0.5 <= m) && (m = 1 - m);
                3 === r && (m *= 2);
                1 === s ? m *= m : 2 === s ? m *= m * m : 3 === s ? m *= m * m * m : 4 === s && (m *= m * m * m * m);
                1 === r ? this.ratio = 1 - m : 2 === r ? this.ratio = m : 0.5 > a / p ? this.ratio = m / 2 : this.ratio = 1 - m / 2
            } else this.ratio = this._ease.getRatio(a / p);
            if (this._time !== n || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration ||
                            this.vars.lazy && !this._duration)) return this._time = this._totalTime = n, this._rawPrevTime = h, fa.push(this), void(this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / p) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }!1 !== this._lazy && (this._lazy = !1);
                this._active || !this._paused && this._time !== n && 0 <= a && (this._active = !0);
                0 !== n || (this._startAt && (0 <= a ? this._startAt.render(a, b, c) : g || (g = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== p || !b && this._callback("onStart"));
                for (h = this._firstPT; h;) h.f ? h.t[h.p](h.c * this.ratio + h.s) : h.t[h.p] = h.c * this.ratio + h.s, h = h._next;
                this._onUpdate && (0 > a && this._startAt && -1E-4 !== a && this._startAt.render(a, b, c), b || (this._time !== n || d || c) && this._callback("onUpdate"));
                g && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && -1E-4 !== a && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[g] && this._callback(g), 0 === p && 1E-10 === this._rawPrevTime && 1E-10 !== k && (this._rawPrevTime = 0))
            }
        };
        h._kill = function(a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : O.selector(b) || b;
            var d, g, h, k, n, p, m, r, s = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
            if ((t(b) || ea(b)) && "number" != typeof b[0])
                for (d = b.length; - 1 < --d;) this._kill(a, b[d], c) && (p = !0);
            else {
                if (this._targets)
                    for (d = this._targets.length; - 1 < --d;) {
                        if (b === this._targets[d]) {
                            n = this._propLookup[d] || {};
                            this._overwrittenProps =
                                this._overwrittenProps || [];
                            g = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                            break
                        }
                    } else {
                        if (b !== this.target) return !1;
                        n = this._propLookup;
                        g = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                if (n) {
                    if (d = a || n, m = a !== g && "all" !== g && a !== n && ("object" != typeof a || !a._tempKill), c && (O.onOverwrite || this.vars.onOverwrite)) {
                        for (h in d) n[h] && (r || (r = []), r.push(h));
                        if ((r || !a) && !sa(this, c, b, r)) return !1
                    }
                    for (h in d)(k = n[h]) && (s && (k.f ? k.t[k.p](k.s) : k.t[k.p] = k.s, p = !0), k.pg && k.t._kill(d) && (p = !0), k.pg &&
                        0 !== k.t._overwriteProps.length || (k._prev ? k._prev._next = k._next : k === this._firstPT && (this._firstPT = k._next), k._next && (k._next._prev = k._prev), k._next = k._prev = null), delete n[h]), m && (g[h] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return p
        };
        h.invalidate = function() {
            return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], S.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1E-10, this.render(Math.min(0, -this._delay))), this
        };
        h._enabled = function(a, b) {
            if (g || n.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; - 1 < --c;) this._siblings[c] = ua(d[c], this, !0);
                else this._siblings = ua(this.target, this, !0)
            }
            return S.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        };
        O.to = function(a, b, c) {
            return new O(a, b, c)
        };
        O.from =
            function(a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new O(a, b, c)
            };
        O.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new O(a, b, d)
        };
        O.delayedCall = function(a, b, c, d, g) {
            return new O(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: g,
                overwrite: 0
            })
        };
        O.set = function(a, b) {
            return new O(a, 0, b)
        };
        O.getTweensOf = function(a, b) {
            if (null ==
                a) return [];
            a = "string" != typeof a ? a : O.selector(a) || a;
            var c, d, g, h;
            if ((t(a) || ea(a)) && "number" != typeof a[0]) {
                c = a.length;
                for (d = []; - 1 < --c;) d = d.concat(O.getTweensOf(a[c], b));
                for (c = d.length; - 1 < --c;)
                    for (h = d[c], g = c; - 1 < --g;) h === d[g] && d.splice(c, 1)
            } else
                for (d = ua(a).concat(), c = d.length; - 1 < --c;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        };
        O.killTweensOf = O.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            b = O.getTweensOf(a, b);
            for (var d = b.length; - 1 < --d;) b[d]._kill(c, a)
        };
        var qa = u("plugins.TweenPlugin",
            function(a, b) {
                this._overwriteProps = (a || "").split(",");
                this._propName = this._overwriteProps[0];
                this._priority = b || 0;
                this._super = qa.prototype
            }, !0);
        if (h = qa.prototype, qa.version = "1.18.0", qa.API = 2, h._firstPT = null, h._addTween = ia, h.setRatio = U, h._kill = function(a) {
                var b, c = this._overwriteProps,
                    d = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (b = c.length; - 1 < --b;) null != a[c[b]] && c.splice(b, 1);
                for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev =
                    null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, h._roundProps = function(a, b) {
                for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
            }, O._onPluginEvent = function(a, b) {
                var c, d, g, h, k, n = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; n;) {
                        k = n._next;
                        for (d = g; d && d.pr > n.pr;) d = d._next;
                        (n._prev = d ? d._prev : h) ? n._prev._next = n: g = n;
                        (n._next = d) ? d._prev = n: h = n;
                        n = k
                    }
                    n = b._firstPT = g
                }
                for (; n;) n.pg && "function" == typeof n.t[a] && n.t[a]() && (c = !0), n =
                    n._next;
                return c
            }, qa.activate = function(a) {
                for (var b = a.length; - 1 < --b;) a[b].API === qa.API && (V[(new a[b])._propName] = a[b]);
                return !0
            }, b.plugin = function(a) {
                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var b, c = a.propName,
                    d = a.priority || 0,
                    g = a.overwriteProps,
                    h = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    k = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                        qa.call(this, c, d);
                        this._overwriteProps = g || []
                    }, !0 === a.global),
                    n = k.prototype = new qa(c);
                n.constructor = k;
                k.API = a.API;
                for (b in h) "function" == typeof a[b] && (n[h[b]] = a[b]);
                return k.version = a.version, qa.activate([k]), k
            }, k = a._gsQueue) {
            for (p = 0; p < k.length; p++) k[p]();
            for (h in v) v[h].func || a.console.log("GSAP encountered missing dependency: com.greensock." + h)
        }
        g = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*
		    MIT License
 new NYTypo({dom:$dom, text:'text, step:26, fps:40, color:1, randomText:'-', onComplete:function(){console.log("done!")}});
*/
(function() {
    function a(a) {
        this.domStyle = this.randomText = this.dom = this.time = null;
        this.canvas = document.createElement("canvas");
        this.canvas.className = "ny-typo";
        this.ctx = null;
        this.nyText = document.createElement("span");
        this.nyText.className = "ny-text";
        this.fontColor = {
            color: a || "#292a2a",
            text: null,
            str: null
        };
        this.colorArr = "F44336 E91E63 9C27B0 673AB7 3F51B5 2196F3 03A9F4 00BCD4 009688 4CAF50 8BC34A CDDC39 FFEB3B FFC107 FF9800 FF5722 795548 607D8B".split(" ")
    }
    a.prototype.start = function(a) {
        this.clear();
        var m =
            a.step || 12,
            k = a.fps || 38,
            p = a.onComplete,
            h = a.keepLength || 0,
            n = a.randomText || "?!*&%$#abcdefghijklmnopqrstuvwxyz",
            g = a.text || "",
            r = a.clickEvent,
            s, z = [],
            w = this,
            k = 1E3 / k;
        this.isColor = a.isColor || 0;
        this.isEllipsis = a.isEllipsis || 0;
        this.yGap = a.yGap || 0;
        this.dom = a.dom;
        this.nyText.innerHTML = g;
        this.dom.appendChild(this.nyText);
        this.dom.appendChild(this.canvas);
        if (r) $(this.nyText).on("click", function(a) {
            r()
        });
        this.setting();
        this.randomText = n;
        "uppercase" == this.textTransform ? g = g.toUpperCase() : "lowercase" == this.textTransform &&
            (g = g.toLowerCase());
        s = g.split("");
        this.total = s.length;
        this.fontColor.str = s;
        this.fontColor.text = g;
        for (a = 0; a < this.total; a++) z.push(a);
        (function v(a) {
            var b, d = z.length,
                g = s.slice(0);
            if (a > d) p && p();
            else {
                for (b = Math.max(a, 0); b < d; b++) g[z[b]] = b < a + m ? w.character() : h ? w.character() : "";
                w.draw(g, d);
                w.time = window.requestTimeout(function() {
                    v(a + 1)
                }, k)
            }
        })(-m)
    };
    a.prototype.setting = function() {
        if (this.dom) {
            this.domStyle = window.getComputedStyle(this.dom);
            var a = this.domStyle.getPropertyValue("font-weight"),
                m = UI.font;
            this.textTransform =
                this.domStyle.getPropertyValue("text-transform");
            this.th = this.domStyle.getPropertyValue("line-height").split("px")[0] | 0;
            this.tw = this.domStyle.getPropertyValue("width").split("px")[0] | 0;
            this.paddingTop = this.domStyle.getPropertyValue("padding-top").split("px")[0] | 0;
            this.paddingLeft = this.domStyle.getPropertyValue("padding-left").split("px")[0] | 0;
            this.paddingRight = this.domStyle.getPropertyValue("padding-right").split("px")[0] | 0;
            this.paddingBottom = this.domStyle.getPropertyValue("padding-bottom").split("px")[0] |
                0;
            this.fontSize = this.domStyle.getPropertyValue("font-size").split("px")[0] | 0;
            this.th += this.paddingTop + this.paddingBottom;
            this.tw += this.paddingLeft + this.paddingRight;
            this.ty = this.fontSize + this.paddingTop - 1 + this.yGap;
            this.canvas.style.width = this.tw + "px";
            this.canvas.style.height = this.th + "px";
            this.canvas.width = this.tw * CMDetect.RATIO;
            this.canvas.height = this.th * CMDetect.RATIO;
            this.ctx = this.canvas.getContext("2d");
            this.ctx.scale(CMDetect.RATIO, CMDetect.RATIO);
            this.ctx.font = a + " " + this.fontSize + "px " + m
        }
    };
    a.prototype.draw = function(a, m) {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.tw, this.th);
            var k, p = this.paddingLeft,
                h = this.ty,
                n, g, r = this.tw,
                s, z = "";
            this.isEllipsis && (r -= 20);
            for (k = 0; k < m; k++) {
                n = a[k];
                n.value ? (g = n.color ? n.color : this.fontColor.color, n = n.value) : g = this.fontColor.color;
                this.isColor || (g = this.fontColor.color);
                s = p;
                p += this.ctx.measureText(n).width;
                z += n;
                if (p > r) {
                    this.isEllipsis && (this.isColor ? (this.ctx.fillStyle = this.fontColor.color, this.ctx.fillText("...", s, h)) : z += "...");
                    break
                }
                this.isColor && (this.ctx.fillStyle =
                    g, this.ctx.fillText(n, s, h))
            }
            this.isColor || this.ctx.fillText(z, 0, h)
        }
    };
    a.prototype.resize = function(a) {
        this.ctx && (this.yGap = a, this.pause(), this.setting(), this.draw(this.fontColor.str.slice(0), this.total))
    };
    a.prototype.pause = function() {
        this.time && window.clearRequestTimeout(this.time);
        this.time = null
    };
    a.prototype.clear = function() {
        this.pause();
        this.ctx && this.ctx.clearRect(0, 0, this.tw, this.th);
        this.ctx = null;
        $(this.nyText).off("click");
        this.nyText.innerHTML = "";
        this.dom && (this.dom.innerHTML = "")
    };
    a.prototype.colorChange =
        function(a) {
            if (this.fontColor.color != a) {
                var m = this;
                this.ctx ? TweenLite.to(this.fontColor, 0.6, {
                    color: a,
                    onUpdate: function() {
                        m.draw(m.fontColor.str.slice(0), m.total)
                    }
                }) : this.fontColor.color = a
            }
        };
    a.prototype.character = function() {
        var a = this.randomText.split(""),
            a = a[Math.random() * a.length | 0],
            m = "#" + this.colorArr[Math.random() * this.colorArr.length | 0];
        return {
            value: a,
            color: m
        }
    };
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
            return a
        }) : "undefined" !== typeof module && module.exports ?
        module.exports.NYTypo = a : window.NYTypo = a
})();
/*
		    MIT License
*/
(function() {
    function a(a, m) {
        this.time = null;
        this.ctx = a;
        this.randomText = null;
        this.arr = [];
        this.gap = 5;
        this.fontColor = {
            color: m || "#292a2a",
            text: null,
            str: null
        };
        this.opacity = {
            no: 1
        };
        this.colorArr = "F44336 E91E63 9C27B0 673AB7 3F51B5 2196F3 03A9F4 00BCD4 009688 4CAF50 8BC34A CDDC39 FFEB3B FFC107 FF9800 FF5722 795548 607D8B".split(" ")
    }
    a.prototype.start = function(a) {
        this.clear();
        var m = a.step || 12,
            k = a.fps || 38,
            p = a.onComplete,
            h = a.keepLength || 0,
            n = a.randomText || "?!*&%$#abcdefghijklmnopqrstuvwxyz",
            g = a.text || "",
            r = a.isUpperCase ||
            0,
            s, z = [],
            w = this,
            k = 1E3 / k;
        this.isColor = a.isColor || 0;
        this.isEllipsis = a.isEllipsis || 0;
        this.opacity.no = 1;
        this.randomText = n;
        r && (g = g.toUpperCase());
        s = g.split("");
        this.total = s.length;
        this.fontColor.str = s;
        this.fontColor.text = g;
        for (a = 0; a < this.total; a++) z.push(a);
        (function v(a) {
            var b, d = z.length,
                g = s.slice(0);
            if (a > d) p && p();
            else {
                for (b = Math.max(a, 0); b < d; b++) g[z[b]] = b < a + m ? w.character() : h ? w.character() : "";
                w.draw(g, d);
                w.time = window.requestTimeout(function() {
                    v(a + 1)
                }, k)
            }
        })(-m)
    };
    a.prototype.draw = function(a, m) {
        var k, p =
            0,
            h = 0,
            n = 0,
            g = 0,
            r, s, z = this.tw,
            w = "";
        this.isEllipsis && (z -= 5);
        this.isColor && (g = this.gap);
        this.arr = [];
        for (k = 0; k < m; k++) {
            n = a[k];
            n.value ? (s = n.color ? n.color : this.fontColor.color, r = n.value) : (s = this.fontColor.color, r = n);
            this.isColor || (s = this.fontColor.color);
            this.ctx.save();
            n = this.ctx.measureText(r).width + g;
            this.ctx.restore();
            h += n;
            w += r;
            if (h > z) {
                this.isEllipsis && (this.isColor ? this.arr.push({
                    str: "...",
                    x: p,
                    y: 0,
                    color: this.fontColor.color
                }) : w += "...");
                break
            }
            this.isColor && this.arr.push({
                str: r,
                x: p,
                y: 0,
                color: s
            });
            p += n
        }
        this.isColor ||
            this.arr.push({
                str: w,
                x: 0,
                y: 0,
                color: s
            })
    };
    a.prototype.drawText = function() {
        if (this.ctx && 0 != this.opacity.no) {
            var a, m = this.arr.length,
                k;
            this.ctx.save();
            this.ctx.font = this.fontStyle;
            this.ctx.globalAlpha = this.opacity.no;
            for (a = 0; a < m; a++) k = this.arr[a], this.ctx.fillStyle = k.color, this.ctx.fillText(k.str, k.x + this.tx, k.y + this.ty);
            this.ctx.restore()
        }
    };
    a.prototype.hide = function() {
        this.ctx && TweenLite.to(this.opacity, 0.2, {
            no: 0
        })
    };
    a.prototype.resize = function(a, m, k, p, h) {
        this.tx = a;
        this.ty = m;
        this.tw = k;
        this.fontStyle =
            p;
        this.gap = h
    };
    a.prototype.pause = function() {
        this.time && window.clearRequestTimeout(this.time);
        this.time = null;
        TweenLite.killTweensOf(this.opacity)
    };
    a.prototype.clear = function() {
        this.pause();
        this.opacity.no = 0
    };
    a.prototype.character = function() {
        var a = this.randomText.split(""),
            a = a[Math.random() * a.length | 0],
            m = "#" + this.colorArr[Math.random() * this.colorArr.length | 0];
        return {
            value: a,
            color: m
        }
    };
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
            return a
        }) : "undefined" !== typeof module &&
        module.exports ? module.exports.NYTypo2 = a : window.NYTypo2 = a
})();
var CMUtiles = CMUtiles || function() {
    function a(a, m, k, p) {
        a = k - a;
        m = p - m;
        return Math.sqrt(a * a + m * m)
    }
    return {
        domLoadScript: function(a, m) {
            var k;
            k = document.createElement("script");
            k.type = "text/javascript";
            k.src = a;
            k.onload = m;
            document.getElementsByTagName("head")[0].appendChild(k);
            return k
        },
        getFullSize: function(a, m, k, p) {
            var h = a,
                n = m,
                g = 0,
                r = 0;
            k / p > a / m ? (h = 0.5 + k * (m / p) | 0, g = 0.5 + (a - h) / 2 | 0) : (n = 0.5 + p * (a / k) | 0, r = 0.5 + (m - n) / 2 | 0);
            return {
                w: h,
                h: n,
                x: g,
                y: r
            }
        },
        getFitSize: function(a, m, k, p) {
            var h = a,
                n = m,
                g = 0,
                r = 0,
                s;
            k / p < a / m ? (s = m / p, h = 0.5 +
                k * s | 0, g = 0.5 + (a - h) / 2 | 0) : (s = a / k, n = 0.5 + p * s | 0, r = 0.5 + (m - n) / 2 | 0);
            return {
                w: h,
                h: n,
                x: g,
                y: r,
                scale: s
            }
        },
        getInsideMax: function(a, m) {
            return (a + m * (Math.abs(a / 10 | 0) + 1)) % m
        },
        openPopup: function(a, m, k, p) {
            window.open(a, m, "top=" + (screen.height - p >> 1) + ",left=" + (screen.width - k >> 1) + ",width=" + k + ",height=" + p)
        },
        addZeros: function(a, m) {
            var k = a.toString(),
                p = "",
                h = k.length,
                n = m + 1;
            if (h < n) {
                h = n - h;
                for (n = 1; n <= h; n++) p += "0";
                k = p + k
            }
            return k
        },
        addDots: function(a, m) {
            for (var k = a.toString().split(""), p = k.length, h = p / 3, n = h << 0, n = n == h ? n : n + 1, h = 1; h < n; h++) k.splice(p -
                3 * h, 0, m);
            return k.join("")
        },
        getCurrent: function(a, m, k, p, h) {
            a = (h - p) / (k - m) * (a - m) + p;
            p < h ? a < p ? a = p : a > h && (a = h) : a > p ? a = p : a < h && (a = h);
            return a
        },
        getWallPosition: function(a, m, k, p) {
            return {
                x: a % m * k,
                y: (a / m | 0) * p
            }
        },
        randomInteger: function(a, m) {
            return 0.5 + (Math.random() * (m - a) + a) | 0
        },
        randomFloat: function(a, m) {
            return a + Math.random() * (m - a)
        },
        isArray: function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        },
        isObject: function(a) {
            return "[object Object]" === Object.prototype.toString.call(a)
        },
        shuffle: function(a) {
            a =
                a.slice();
            for (var m = a.length, k = m, p, h; k--;) p = Math.random() * m | 0, h = a[k], a[k] = a[p], a[p] = h;
            return a
        },
        removeDom: function(a) {
            var m = a.parentNode;
            m && m.removeChild(a)
        },
        getQueryParams: function(a) {
            a = a.split("+").join(" ");
            for (var m = {}, k, p = /[?&]?([^=]+)=([^&]*)/g; k = p.exec(a);) m[decodeURIComponent(k[1])] = decodeURIComponent(k[2]);
            return m
        },
        loadJSON: function(a, m) {
            var k = new XMLHttpRequest;
            k.overrideMimeType("application/json");
            k.open("GET", a, !0);
            k.onreadystatechange = function() {
                if (4 == k.readyState && "200" == k.status) {
                    var a =
                        JSON.parse(k.responseText);
                    m(a)
                }
            };
            k.send(null)
        },
        getMax: function(d, m, k, p) {
            var h = a(0, 0, k, p),
                n = a(d, 0, k, p),
                g = a(0, m, k, p);
            d = a(d, m, k, p);
            h = Math.max(h, n);
            g = Math.max(g, d);
            return Math.max(h, g) + 0.5 | 0
        },
        isBlankString: function(a) {
            return !a || /^\s*$/.test(a)
        },
        escapeRegExChars: function(a) {
            return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        IsNumeric: function(a) {
            return Number(parseFloat(a)) == a
        }
    }
}();
(function(a) {
    function d(a) {
        var d = Array.prototype.slice.call(arguments, 1),
            g, b, h = d.length;
        for (b = 0; b < h; b++)
            if (g = typeof a[d[b]], !/^(?:function|object|unknown)$/.test(g)) return !1;
        return !0
    }

    function m(a, d) {
        return function(g) {
            d.call(h(a), g || window.event)
        }
    }

    function k(a, d) {
        return function(g) {
            if (w[a] && w[a][d])
                for (var b = w[a][d], h = 0, k = b.length; h < k; h++) b[h].call(this, g || window.event)
        }
    }
    var p = function() {
            if ("undefined" !== typeof document.documentElement.uniqueID) return function(a) {
                return a.uniqueID
            };
            var a = 0;
            return function(d) {
                return d.__uniqueID ||
                    (d.__uniqueID = "uniqueID__" + a++)
            }
        }(),
        h, n;
    (function() {
        var a = {};
        h = function(d) {
            return a[d]
        };
        n = function(d, g) {
            a[d] = g
        }
    })();
    var g, r;
    g = d(document.documentElement, "addEventListener", "removeEventListener") && d(window, "addEventListener", "removeEventListener");
    var s = d(document.documentElement, "attachEvent", "detachEvent") && d(window, "attachEvent", "detachEvent"),
        z = {},
        w = {};
    g ? (g = function(a, d, g) {
        a.addEventListener(d, g, !1);
        a.eventHolder || (a.eventHolder = []);
        a.eventHolder[a.eventHolder.length] = [d, g]
    }, r = function(a, d, g) {
        a.removeEventListener(d,
            g, !1)
    }) : s ? (g = function(a, d, g) {
        var b = p(a);
        n(b, a);
        z[b] || (z[b] = {});
        z[b][d] || (z[b][d] = []);
        g = {
            handler: g,
            wrappedHandler: m(b, g)
        };
        z[b][d].push(g);
        a.attachEvent("on" + d, g.wrappedHandler)
    }, r = function(a, d, g) {
        var b = p(a),
            h;
        if (z[b] && z[b][d])
            for (var k = 0, n = z[b][d].length; k < n; k++)(h = z[b][d][k]) && h.handler === g && (a.detachEvent("on" + d, h.wrappedHandler), z[b][d][k] = null)
    }) : (g = function(a, d, g) {
        var b = p(a);
        w[b] || (w[b] = {});
        if (!w[b][d]) {
            w[b][d] = [];
            var h = a["on" + d];
            h && w[b][d].push(h);
            a["on" + d] = k(b, d)
        }
        w[b][d].push(g)
    }, r = function(a,
        d, g) {
        a = p(a);
        if (w[a] && w[a][d]) {
            d = w[a][d];
            a = 0;
            for (var b = d.length; a < b; a++) d[a] === g && d.splice(a, 1)
        }
    });
    a.addListener = g;
    a.removeListener = r;
    a.hasListener = function(a, d, g) {
        if (a.eventHolder)
            if (g)
                for (var b = 0; b < a.eventHolder.length; b++) {
                    if (a.eventHolder[b][0] == d && String(a.eventHolder[b][1]) == String(g)) return !0
                } else
                    for (b = 0; b < a.eventHolder.length; b++)
                        if (a.eventHolder[b][0] == d) return !0;
        return !1
    };
    a.removeListenerByType = function(a, d) {
        if (a.eventHolder) {
            for (var g = 0, b = 0; b < a.eventHolder.length; b++) a.eventHolder[b][0] ==
                d && (r(a, d, a.eventHolder[b][1]), a.eventHolder.splice(b, 1), g++, b--);
            return 0 < g ? !0 : !1
        }
        return !1
    }
})(this);
(function(a) {
    function d(a, d, g, k, p) {
        this._listener = d;
        this._isOnce = g;
        this.context = k;
        this._signal = a;
        this._priority = p || 0
    }

    function m(a, d) {
        if ("function" !== typeof a) throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", d));
    }

    function k() {
        this._bindings = [];
        this._prevParams = null;
        var a = this;
        this.dispatch = function() {
            k.prototype.dispatch.apply(a, arguments)
        }
    }
    d.prototype = {
        active: !0,
        params: null,
        execute: function(a) {
            var d;
            this.active && this._listener && (a = this.params ? this.params.concat(a) :
                a, d = this._listener.apply(this.context, a), this._isOnce && this.detach());
            return d
        },
        detach: function() {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null
        },
        isBound: function() {
            return !!this._signal && !!this._listener
        },
        isOnce: function() {
            return this._isOnce
        },
        getListener: function() {
            return this._listener
        },
        getSignal: function() {
            return this._signal
        },
        _destroy: function() {
            delete this._signal;
            delete this._listener;
            delete this.context
        },
        toString: function() {
            return "[SignalBinding isOnce:" + this._isOnce +
                ", isBound:" + this.isBound() + ", active:" + this.active + "]"
        }
    };
    k.prototype = {
        VERSION: "1.0.0",
        memorize: !1,
        _shouldPropagate: !0,
        active: !0,
        _registerListener: function(a, k, g, p) {
            var m = this._indexOfListener(a, g);
            if (-1 !== m) {
                if (a = this._bindings[m], a.isOnce() !== k) throw Error("You cannot add" + (k ? "" : "Once") + "() then add" + (k ? "Once" : "") + "() the same listener without removing the relationship first.");
            } else a = new d(this, a, k, g, p), this._addBinding(a);
            this.memorize && this._prevParams && a.execute(this._prevParams);
            return a
        },
        _addBinding: function(a) {
            var d = this._bindings.length;
            do --d; while (this._bindings[d] && a._priority <= this._bindings[d]._priority);
            this._bindings.splice(d + 1, 0, a)
        },
        _indexOfListener: function(a, d) {
            for (var g = this._bindings.length, k; g--;)
                if (k = this._bindings[g], k._listener === a && k.context === d) return g;
            return -1
        },
        has: function(a, d) {
            return -1 !== this._indexOfListener(a, d)
        },
        add: function(a, d, g) {
            m(a, "add");
            return this._registerListener(a, !1, d, g)
        },
        addOnce: function(a, d, g) {
            m(a, "addOnce");
            return this._registerListener(a, !0,
                d, g)
        },
        remove: function(a, d) {
            m(a, "remove");
            var g = this._indexOfListener(a, d); - 1 !== g && (this._bindings[g]._destroy(), this._bindings.splice(g, 1));
            return a
        },
        removeAll: function() {
            for (var a = this._bindings.length; a--;) this._bindings[a]._destroy();
            this._bindings.length = 0
        },
        getNumListeners: function() {
            return this._bindings.length
        },
        halt: function() {
            this._shouldPropagate = !1
        },
        dispatch: function(a) {
            if (this.active) {
                var d = Array.prototype.slice.call(arguments),
                    g = this._bindings.length,
                    k;
                this.memorize && (this._prevParams =
                    d);
                if (g) {
                    k = this._bindings.slice();
                    this._shouldPropagate = !0;
                    do g--; while (k[g] && this._shouldPropagate && !1 !== k[g].execute(d))
                }
            }
        },
        forget: function() {
            this._prevParams = null
        },
        dispose: function() {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams
        },
        toString: function() {
            return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
        }
    };
    var p = k;
    p.Signal = k;
    "function" === typeof define && define.amd ? define(function() {
            return p
        }) : "undefined" !== typeof module && module.exports ? module.exports = p : a.signals =
        p
})(this);
(function() {
    var a = function(a) {
        return function(m) {
            function k(a) {
                if (!a) return "";
                var b = RegExp("^" + String(w.prependHash || "").replace(/\W/g, "\\$&") + "|" + String(w.appendHash || "").replace(/\W/g, "\\$&") + "$", "g");
                return a.replace(b, "")
            }

            function p() {
                var a = H.exec(w.getURL()),
                    a = a && a[1] || "";
                try {
                    return w.raw ? a : decodeURIComponent(a)
                } catch (b) {
                    return a
                }
            }

            function h() {
                if (b && t !== (b ? b.contentWindow.frameHash : null)) {
                    var a = b.contentWindow.document;
                    a.open();
                    a.write("<html><head><title>" + s.title + '</title><script type="text/javascript">var frameHash="' +
                        t + '";\x3c/script></head><body>&nbsp;</body></html>');
                    a.close()
                }
            }

            function n(a, d) {
                if (t !== a) {
                    var g = t;
                    t = a;
                    I && (d ? b.contentWindow.frameHash = a : h());
                    w.changed.dispatch(k(a), k(g))
                }
            }

            function g(a) {
                a = Array.prototype.slice.call(arguments);
                var b = a.join(w.separator);
                return b = b ? w.prependHash + b.replace(C, "") + w.appendHash : b
            }

            function r(a) {
                a = encodeURI(a);
                N && K && (a = a.replace(/\?/, "%3F"));
                return a
            }
            var s = m.document,
                z = a.Signal,
                w, t, v, y, b, u, H = /#(.*)$/,
                J = /(\?.*)|(\#.*)/,
                C = /^\#/,
                N = !+"\v1",
                G = "onhashchange" in m && 7 !== s.documentMode,
                I = N && !G,
                K = "file:" === location.protocol;
            u = I ? function() {
                var a = p(),
                    d = b ? b.contentWindow.frameHash : null;
                d !== t && d !== a ? w.setHash(k(d)) : a !== t && n(a)
            } : function() {
                var a = p();
                a !== t && n(a)
            };
            w = {
                VERSION: "1.2.0",
                raw: !1,
                appendHash: "",
                prependHash: "/",
                separator: "/",
                changed: new z,
                stopped: new z,
                initialized: new z,
                init: function() {
                    y || (t = p(), G ? m.addEventListener ? m.addEventListener("hashchange", u, !1) : m.attachEvent && m.attachEvent("onhashchange", u) : (I && (b || (b = s.createElement("iframe"), b.src = "about:blank", b.style.display = "none",
                        s.body.appendChild(b)), h()), v = setInterval(u, 25)), y = !0, w.initialized.dispatch(k(t)))
                },
                stop: function() {
                    y && (G ? m.removeEventListener ? m.removeEventListener("hashchange", u, !1) : m.detachEvent && m.detachEvent("onhashchange", u) : (clearInterval(v), v = null), y = !1, w.stopped.dispatch(k(t)))
                },
                isActive: function() {
                    return y
                },
                getURL: function() {
                    return m.location.href
                },
                getBaseURL: function() {
                    return w.getURL().replace(J, "")
                },
                setHash: function(a) {
                    a = g.apply(null, arguments);
                    a !== t && (n(a), a === t && (w.raw || (a = r(a)), m.location.hash =
                        "#" + a))
                },
                replaceHash: function(a) {
                    a = g.apply(null, arguments);
                    a !== t && (n(a, !0), a === t && (w.raw || (a = r(a)), m.location.replace("#" + a)))
                },
                getHash: function() {
                    return k(t)
                },
                getHashAsArray: function() {
                    return w.getHash().split(w.separator)
                },
                dispose: function() {
                    w.stop();
                    w.initialized.dispose();
                    w.stopped.dispose();
                    w.changed.dispose();
                    b = w = m.hasher = null
                },
                toString: function() {
                    return '[hasher version="' + w.VERSION + '" hash="' + w.getHash() + '"]'
                }
            };
            w.initialized.memorize = !0;
            return w
        }(window)
    };
    "function" === typeof define && define.amd ?
        define(["signals"], a) : "object" === typeof exports ? module.exports = a(require("signals")) : window.hasher = a(window.signals)
})();
! function(a, d, m) {
    function k() {
        return "function" != typeof d.createElement ? d.createElement(arguments[0]) : H ? d.createElementNS.call(d, "http://www.w3.org/2000/svg", arguments[0]) : d.createElement.apply(d, arguments)
    }

    function p(a, b, g, h) {
        var n, p, m, r, s = k("div"),
            t;
        m = d.body;
        t = (m || (m = k(H ? "svg" : "body"), m.fake = !0), m);
        if (parseInt(g, 10))
            for (; g--;) m = k("div"), m.id = h ? h[g] : "modernizr" + (g + 1), s.appendChild(m);
        return n = k("style"), n.type = "text/css", n.id = "smodernizr", (t.fake ? t : s).appendChild(n), t.appendChild(s), n.styleSheet ?
            n.styleSheet.cssText = a : n.appendChild(d.createTextNode(a)), s.id = "modernizr", t.fake && (t.style.background = "", t.style.overflow = "hidden", r = u.style.overflow, u.style.overflow = "hidden", u.appendChild(t)), p = b(s, a), t.fake ? (t.parentNode.removeChild(t), u.style.overflow = r, u.offsetHeight) : s.parentNode.removeChild(s), !!p
    }

    function h(a) {
        return a.replace(/([a-z])-([a-z])/g, function(a, b, d) {
            return b + d.toUpperCase()
        }).replace(/^-/, "")
    }

    function n(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }

    function g(a) {
        return a.replace(/([A-Z])/g,
            function(a, b) {
                return "-" + b.toLowerCase()
            }).replace(/^ms-/, "-ms-")
    }

    function r(b, d) {
        var h = b.length;
        if ("CSS" in a && "supports" in a.CSS) {
            for (; h--;)
                if (a.CSS.supports(g(b[h]), d)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in a) {
            for (var k = []; h--;) k.push("(" + g(b[h]) + ":" + d + ")");
            return k = k.join(" or "), p("@supports (" + k + ") { #modernizr { position: absolute; } }", function(a) {
                return "absolute" == getComputedStyle(a, null).position
            })
        }
        return m
    }

    function s(a, b, d, g) {
        function n() {
            s && (delete I.style, delete I.modElem)
        }
        if (g = "undefined" ===
            typeof g ? !1 : g, "undefined" !== typeof d) {
            var p = r(a, d);
            if ("undefined" !== typeof p) return p
        }
        for (var s, u, t, w, p = ["modernizr", "tspan"]; !I.style;) s = !0, I.modElem = k(p.shift()), I.style = I.modElem.style;
        u = a.length;
        for (p = 0; u > p; p++)
            if (t = a[p], w = I.style[t], !!~("" + t).indexOf("-") && (t = h(t)), I.style[t] !== m) {
                if (g || "undefined" === typeof d) return n(), "pfx" == b ? t : !0;
                try {
                    I.style[t] = d
                } catch (v) {}
                if (I.style[t] != w) return n(), "pfx" == b ? t : !0
            }
        return n(), !1
    }

    function z(a, b, d, g, h) {
        var k = a.charAt(0).toUpperCase() + a.slice(1),
            p = (a + " " + C.join(k +
                " ") + k).split(" "),
            m;
        if ("string" === typeof b || "undefined" === typeof b) m = s(p, b, g, h);
        else {
            p = (a + " " + N.join(k + " ") + k).split(" ");
            a: {
                a = p;
                for (var r in a)
                    if (a[r] in b) {
                        b = !1 === d ? a[r] : (m = b[a[r]], "function" === typeof m ? n(m, d || b) : m);
                        break a
                    }
                b = !1
            }
            m = b
        }
        return m
    }

    function w(a, b, d) {
        return z(a, m, m, b, d)
    }
    var t = [],
        v = [],
        y = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(a, b) {
                var d = this;
                setTimeout(function() {
                    b(d[a])
                }, 0)
            },
            addTest: function(a, b, d) {
                v.push({
                    name: a,
                    fn: b,
                    options: d
                })
            },
            addAsyncTest: function(a) {
                v.push({
                    name: null,
                    fn: a
                })
            }
        },
        b = function() {};
    b.prototype = y;
    var b = new b,
        u = d.documentElement,
        H = "svg" === u.nodeName.toLowerCase();
    b.addTest("canvas", function() {
        var a = k("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    });
    b.addTest("canvastext", function() {
        return !1 === b.canvas ? !1 : "function" == typeof k("canvas").getContext("2d").fillText
    });
    b.addTest("video", function() {
        var a = k("video"),
            b = !1;
        try {
            (b = !!a.canPlayType) && (b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,
                ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), b.vp9 = a.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), b.hls = a.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (d) {}
        return b
    });
    b.addTest("supports", "CSS" in a && "supports" in a.CSS || "supportsCSS" in a);
    var J = y.testStyles = p,
        C = y._config.usePrefixes ? ["Moz", "O", "ms", "Webkit"] : [];
    y._cssomPrefixes = C;
    var N = y._config.usePrefixes ? ["moz", "o", "ms", "webkit"] : [];
    y._domPrefixes = N;
    var G = {
        elem: k("modernizr")
    };
    b._q.push(function() {
        delete G.elem
    });
    var I = {
        style: G.elem.style
    };
    b._q.unshift(function() {
        delete I.style
    });
    y.testAllProps = z;
    y.testAllProps = w;
    b.addTest("csstransforms3d", function() {
        var a = !!w("perspective", "1px", !0),
            d = b._config.usePrefixes;
        if (a && (!d || "webkitPerspective" in u.style)) {
            var g;
            b.supports ? g = "@supports (perspective: 1px)" : (g = "@media (transform-3d)", d && (g += ",(-webkit-transform-3d)"));
            J("#modernizr{width:0;height:0}" + (g +
                "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"), function(b) {
                a = 7 === b.offsetWidth && 18 === b.offsetHeight
            })
        }
        return a
    });
    (function() {
        var a, d, g, h, k, n;
        for (n in v)
            if (v.hasOwnProperty(n)) {
                if (a = [], d = v[n], d.name && (a.push(d.name.toLowerCase()), d.options && d.options.aliases && d.options.aliases.length))
                    for (g = 0; g < d.options.aliases.length; g++) a.push(d.options.aliases[g].toLowerCase());
                g = "function" === typeof d.fn ? d.fn() : d.fn;
                for (h = 0; h < a.length; h++) k = a[h], k = k.split("."), 1 === k.length ? b[k[0]] = g : (!b[k[0]] ||
                    b[k[0]] instanceof Boolean || (b[k[0]] = new Boolean(b[k[0]])), b[k[0]][k[1]] = g), t.push((g ? "" : "no-") + k.join("-"))
            }
    })();
    (function(a) {
        var d = u.className,
            g = b._config.classPrefix || "";
        if (H && (d = d.baseVal), b._config.enableJSClass) d = d.replace(RegExp("(^|\\s)" + g + "no-js(\\s|$)"), "$1" + g + "js$2");
        b._config.enableClasses && (d += " " + g + a.join(" " + g), H ? u.className.baseVal = d : u.className = d)
    })(t);
    delete y.addTest;
    delete y.addAsyncTest;
    for (y = 0; y < b._q.length; y++) b._q[y]();
    a.Modernizr = b
}(window, document);
(function(a, d) {
    "function" === typeof define && define.amd ? define([], d) : "object" === typeof exports ? module.exports = d() : a.SuperGif = d()
})(this, function() {
    var a = function(a) {
            return a.reduce(function(a, d) {
                return 2 * a + d
            }, 0)
        },
        d = function(a) {
            var d = [],
                g;
            for (g = 7; 0 <= g; g--) d.push(!!(a & 1 << g));
            return d
        },
        m = function(a) {
            this.data = a;
            this.len = this.data.length;
            this.pos = 0;
            this.readByte = function() {
                if (this.pos >= this.data.length) throw Error("Attempted to read past end of stream.");
                return a instanceof Uint8Array ? a[this.pos++] : a.charCodeAt(this.pos++) &
                    255
            };
            this.readBytes = function(a) {
                for (var d = [], h = 0; h < a; h++) d.push(this.readByte());
                return d
            };
            this.read = function(a) {
                for (var d = "", h = 0; h < a; h++) d += String.fromCharCode(this.readByte());
                return d
            };
            this.readUnsigned = function() {
                var a = this.readBytes(2);
                return (a[1] << 8) + a[0]
            }
        },
        k = function(a, d) {
            for (var g = 0, k = function(a) {
                    for (var b = 0, h = 0; h < a; h++) d.charCodeAt(g >> 3) & 1 << (g & 7) && (b |= 1 << h), g++;
                    return b
                }, p = [], m = 1 << a, w = m + 1, t = a + 1, v = [], y = function() {
                    v = [];
                    t = a + 1;
                    for (var b = 0; b < m; b++) v[b] = [b];
                    v[m] = [];
                    v[w] = null
                }, b, u;;)
                if (u = b, b = k(t),
                    b === m) y();
                else {
                    if (b === w) break;
                    if (b < v.length) u !== m && v.push(v[u].concat(v[b][0]));
                    else {
                        if (b !== v.length) throw Error("Invalid LZW code.");
                        v.push(v[u].concat(v[u][0]))
                    }
                    p.push.apply(p, v[b]);
                    v.length === 1 << t && 12 > t && t++
                }
            return p
        },
        p = function(h, n) {
            n || (n = {});
            var g = function(a) {
                    for (var d = [], g = 0; g < a; g++) d.push(h.readBytes(3));
                    return d
                },
                m = function() {
                    var a, d;
                    d = "";
                    do a = h.readByte(), d += h.read(a); while (0 !== a);
                    return d
                },
                p = function(g) {
                    var k = function(b) {
                            h.readByte();
                            var g = d(h.readByte());
                            b.reserved = g.splice(0, 3);
                            b.disposalMethod =
                                a(g.splice(0, 3));
                            b.userInput = g.shift();
                            b.transparencyGiven = g.shift();
                            b.delayTime = h.readUnsigned();
                            b.transparencyIndex = h.readByte();
                            b.terminator = h.readByte();
                            n.gce && n.gce(b)
                        },
                        p = function(a) {
                            a.comment = m();
                            n.com && n.com(a)
                        },
                        s = function(a) {
                            h.readByte();
                            a.ptHeader = h.readBytes(12);
                            a.ptData = m();
                            n.pte && n.pte(a)
                        },
                        b = function(a) {
                            var b = function(a) {
                                h.readByte();
                                a.unknown = h.readByte();
                                a.iterations = h.readUnsigned();
                                a.terminator = h.readByte();
                                n.app && n.app.NETSCAPE && n.app.NETSCAPE(a)
                            };
                            h.readByte();
                            a.identifier = h.read(8);
                            a.authCode = h.read(3);
                            switch (a.identifier) {
                                case "NETSCAPE":
                                    b(a);
                                    break;
                                default:
                                    (function(a) {
                                        a.appData = m();
                                        n.app && n.app[a.identifier] && n.app[a.identifier](a)
                                    })(a)
                            }
                        };
                    g.label = h.readByte();
                    switch (g.label) {
                        case 249:
                            g.extType = "gce";
                            k(g);
                            break;
                        case 254:
                            g.extType = "com";
                            p(g);
                            break;
                        case 1:
                            g.extType = "pte";
                            s(g);
                            break;
                        case 255:
                            g.extType = "app";
                            b(g);
                            break;
                        default:
                            g.extType = "unknown",
                                function(a) {
                                    a.data = m();
                                    n.unknown && n.unknown(a)
                                }(g)
                    }
                },
                z = function() {
                    var w = {};
                    w.sentinel = h.readByte();
                    switch (String.fromCharCode(w.sentinel)) {
                        case "!":
                            w.type =
                                "ext";
                            p(w);
                            break;
                        case ",":
                            w.type = "img";
                            w.leftPos = h.readUnsigned();
                            w.topPos = h.readUnsigned();
                            w.width = h.readUnsigned();
                            w.height = h.readUnsigned();
                            var t = d(h.readByte());
                            w.lctFlag = t.shift();
                            w.interlaced = t.shift();
                            w.sorted = t.shift();
                            w.reserved = t.splice(0, 2);
                            w.lctSize = a(t.splice(0, 3));
                            w.lctFlag && (w.lct = g(1 << w.lctSize + 1));
                            w.lzwMinCodeSize = h.readByte();
                            t = m();
                            w.pixels = k(w.lzwMinCodeSize, t);
                            if (w.interlaced) {
                                for (var t = w.pixels, v = w.width, y = Array(t.length), b = t.length / v, u = [0, 4, 2, 1], H = [8, 8, 4, 2], J = 0, C = 0; 4 > C; C++)
                                    for (var N =
                                            u[C]; N < b; N += H[C]) {
                                        var G = N,
                                            I = t.slice(J * v, (J + 1) * v);
                                        y.splice.apply(y, [G * v, v].concat(I));
                                        J++
                                    }
                                w.pixels = y
                            }
                            n.img && n.img(w);
                            break;
                        case ";":
                            w.type = "eof";
                            n.eof && n.eof(w);
                            break;
                        default:
                            throw Error("Unknown block: 0x" + w.sentinel.toString(16));
                    }
                    "eof" !== w.type && window.requestTimeout(z, 0)
                };
            (function() {
                var k = {};
                k.sig = h.read(3);
                k.ver = h.read(3);
                if ("GIF" !== k.sig) throw Error("Not a GIF file.");
                k.width = h.readUnsigned();
                k.height = h.readUnsigned();
                var m = d(h.readByte());
                k.gctFlag = m.shift();
                k.colorRes = a(m.splice(0, 3));
                k.sorted =
                    m.shift();
                k.gctSize = a(m.splice(0, 3));
                k.bgColor = h.readByte();
                k.pixelAspectRatio = h.readByte();
                k.gctFlag && (k.gct = g(1 << k.gctSize + 1));
                n.hdr && n.hdr(k)
            })();
            window.requestTimeout(z, 0)
        };
    return function(a) {
        var d = a.canvas,
            g = a.ctx,
            k = a.tmp,
            s = a.tw,
            z = a.th,
            w, t, v = null,
            y = !1,
            b = null,
            u = null,
            H = null,
            J = null,
            C = null,
            N = null,
            G = null,
            I = !0,
            K = [],
            A = [];
        "undefined" == typeof a.auto_play && (a.auto_play = 1);
        var W = a.hasOwnProperty("loop_delay") ? a.loop_delay : 0,
            Q = a.hasOwnProperty("loop_mode") ? a.loop_mode : "auto",
            S = function() {
                try {
                    p(w, U)
                } catch (a) {
                    ga("parse")
                }
            },
            ga = function(a) {
                v = a;
                t = {
                    width: s,
                    height: z
                };
                K = [];
                g.save();
                g.fillStyle = "#000";
                g.fillRect(0, 0, s, z);
                g.fillStyle = "rgba(255,255,255,0.7)";
                g.font = "bold 16px Raleway";
                g.fillText("FAILED TO LOAD GIF", 10, 30);
                g.restore()
            },
            O = function() {
                !P && N && (K.push({
                    data: N.getImageData(0, 0, t.width, t.height),
                    delay: u
                }), A.push({
                    x: 0,
                    y: 0
                }))
            },
            ea = function() {
                var b = -1,
                    d = function() {
                        var a = K.length,
                            d = (b + 1 + a) % a;
                        return {
                            no: d,
                            percent: d / a
                        }
                    },
                    n = function(a) {
                        b += a;
                        p()
                    },
                    m = function() {
                        var a = !1,
                            g = function() {
                                P || (ha++, ba == ha ? (I = a = !1, GifPlayer.onFinish()) :
                                    !1 !== Q || 0 > ha ? f() : I = a = !1)
                            },
                            f = function() {
                                if (!P && (a = I)) {
                                    n(1);
                                    var h = 5 * K[b].delay;
                                    h || (h = 100);
                                    var c = d();
                                    GifPlayer.progress(c.percent);
                                    0 === c.no ? (h += W, V = window.requestTimeout(g, h)) : V = window.requestTimeout(f, h)
                                }
                            };
                        return function() {
                            a || window.requestTimeout(f, 0)
                        }
                    }(),
                    p = function() {
                        if (!P) {
                            var a;
                            b = parseInt(b, 10);
                            b > K.length - 1 && (b = 0);
                            0 > b && (b = 0);
                            a = A[b];
                            k.getContext("2d").putImageData(K[b].data, a.x, a.y);
                            g.globalCompositeOperation = "copy";
                            g.drawImage(k, 0, 0, T, ia)
                        }
                    };
                return {
                    init: function() {
                        v || (a.auto_play ? (m(), GifPlayer.onPlay()) :
                            (b = 0, p()))
                    },
                    step: m,
                    play: function() {
                        ca && (I = !0, m(), GifPlayer.onPlay())
                    },
                    pause: function() {
                        ca && (I = !1, GifPlayer.onPause())
                    },
                    playing: I,
                    move_relative: n,
                    current_frame: function() {
                        return b
                    },
                    length: function() {
                        return K.length
                    },
                    move_to: function(a) {
                        b = a;
                        p();
                        a = d();
                        GifPlayer.progress(a.percent)
                    }
                }
            }(),
            fa = function() {
                if (!P && !P) {
                    var a = w.pos / w.data.length;
                    1 == a && (ca = 1);
                    GifPlayer.loading(a)
                }
            },
            Y = function() {},
            X = function(a) {
                return function(b) {
                    P || (a(b), fa())
                }
            },
            U = {
                hdr: X(function(a) {
                    if (!P) {
                        t = a;
                        a = t.width;
                        var b = t.height;
                        k.width =
                            a;
                        k.height = b;
                        k.style.width = a + "px";
                        k.style.height = b + "px"
                    }
                }),
                gce: X(function(a) {
                    P || (O(), u = b = null, C = H, H = null, b = a.transparencyGiven ? a.transparencyIndex : null, u = a.delayTime, H = a.disposalMethod)
                }),
                com: X(Y),
                app: {
                    NETSCAPE: X(Y)
                },
                img: X(function(a) {
                    if (!P) {
                        N || (N = k.getContext("2d"));
                        var d = K.length,
                            h = a.lctFlag ? a.lct : t.gct;
                        0 < d && (3 === C ? null !== J ? N.putImageData(K[J].data, 0, 0) : N.clearRect(G.leftPos, G.topPos, G.width, G.height) : J = d - 1, 2 === C && N.clearRect(G.leftPos, G.topPos, G.width, G.height));
                        var d = N.getImageData(a.leftPos,
                                a.topPos, a.width, a.height),
                            m, n = a.pixels.length,
                            p, s;
                        for (m = 0; m < n; m++) p = a.pixels[m], s = 4 * m, p !== b && (d.data[s] = h[p][0], d.data[s + 1] = h[p][1], d.data[s + 2] = h[p][2], d.data[s + 3] = 255);
                        N.putImageData(d, a.leftPos, a.topPos);
                        g.drawImage(k, 0, 0, T, ia);
                        G = a
                    }
                }),
                eof: function(a) {
                    O();
                    fa(!1);
                    ea.init();
                    y = !1
                }
            },
            d, g, k, s = 800,
            z = 600,
            T, ia, V = null,
            P = 0,
            ja = 1,
            ca = 0,
            ba = 5,
            ha = 0,
            L = null;
        return {
            play: ea.play,
            pause: ea.pause,
            move_relative: ea.move_relative,
            move_to: ea.move_to,
            get_playing: function() {
                return I
            },
            get_canvas: function() {
                return d
            },
            get_canvas_scale: function() {
                return ja
            },
            get_loading: function() {
                return y
            },
            get_auto_play: function() {
                return a.auto_play
            },
            get_length: function() {
                return ea.length()
            },
            get_current_frame: function() {
                return ea.current_frame()
            },
            load_url: function(a) {
                ca = P = 0;
                L = new XMLHttpRequest;
                L.open("GET", a, !0);
                "overrideMimeType" in L ? L.overrideMimeType("text/plain; charset=x-user-defined") : "responseType" in L ? L.responseType = "arraybuffer" : L.setRequestHeader("Accept-Charset", "x-user-defined");
                L.onloadstart = function() {};
                L.onload = function(a) {
                    P || (200 != this.status && ga("xhr - response"),
                        "response" in this || (this.response = (new VBArray(this.responseText)).toArray().map(String.fromCharCode).join("")), a = this.response, 0 < a.toString().indexOf("ArrayBuffer") && (a = new Uint8Array(a)), w = new m(a), window.requestTimeout(S, 0))
                };
                L.onprogress = function(a) {
                    a.lengthComputable && 1 == a.loaded / a.total && GifPlayer.loaded()
                };
                L.onerror = function() {
                    ga("xhr")
                };
                L.send()
            },
            resize: function(a, b, g, h) {
                s = g;
                z = h;
                a = CMUtiles.getFitSize(a, b, g, h);
                ja = a.scale;
                T = s * ja;
                ia = z * ja;
                d.width = a.w;
                d.height = a.h;
                d.style.width = a.w + "px";
                d.style.height =
                    a.h + "px"
            },
            dispose: function() {
                P = 1;
                V && (window.clearRequestTimeout(V), V = null);
                I = !1;
                L && (L.onloadstart = null, L.onload = null, L.onprogress = null, L.onerror = null);
                L = null;
                K = [];
                A = [];
                u = b = null;
                C = H;
                G = N = C = J = H = null;
                y = !1;
                u = v = t = w = null;
                g.clearRect(0, 0, s, z)
            },
            getLoaded: function() {
                return ca
            },
            setRepeat: function(a) {
                ha = 0;
                ba = a
            },
            set_frame_offset: function(a, b) {
                P || (A[a] ? ("undefined" !== typeof b.x && (A[a].x = b.x), "undefined" !== typeof b.y && (A[a].y = b.y)) : A[a] = b)
            }
        }
    }
});
(function(a, d, m, k) {
    function p(a, b, c) {
        return Array.isArray(a) ? (h(a, c[b], c), !0) : !1
    }

    function h(a, b, c) {
        var d;
        if (a)
            if (a.forEach) a.forEach(b, c);
            else if (a.length !== k)
            for (d = 0; d < a.length;) b.call(c, a[d], d, a), d++;
        else
            for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a)
    }

    function n(b, c, d) {
        var f = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function() {
            var c = Error("get-stack-trace"),
                c = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") :
                "Unknown Stack Trace",
                d = a.console && (a.console.warn || a.console.log);
            d && d.call(a.console, f, c);
            return b.apply(this, arguments)
        }
    }

    function g(a, b, c) {
        b = b.prototype;
        var d;
        d = a.prototype = Object.create(b);
        d.constructor = a;
        d._super = b;
        c && Ga(d, c)
    }

    function r(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }

    function s(a, b) {
        return typeof a == c ? a.apply(b ? b[0] || k : k, b) : a
    }

    function z(a, b, c) {
        h(v(b), function(b) {
            a.addEventListener(b, c, !1)
        })
    }

    function w(a, b, c) {
        h(v(b), function(b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function t(a,
        b) {
        for (; a;) {
            if (a == b) return !0;
            a = a.parentNode
        }
        return !1
    }

    function v(a) {
        return a.trim().split(/\s+/g)
    }

    function y(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++
        }
        return -1
    }

    function b(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function u(a, b, c) {
        for (var d = [], f = [], g = 0; g < a.length;) {
            var h = b ? a[g][b] : a[g];
            0 > y(f, h) && d.push(a[g]);
            f[g] = h;
            g++
        }
        c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b]
        }) : d.sort());
        return d
    }

    function H(a, b) {
        for (var c, d = b[0].toUpperCase() +
                b.slice(1), g = 0; g < f.length;) {
            c = (c = f[g]) ? c + d : b;
            if (c in a) return c;
            g++
        }
        return k
    }

    function J(b) {
        b = b.ownerDocument || b;
        return b.defaultView || b.parentWindow || a
    }

    function C(a, b) {
        var c = this;
        this.manager = a;
        this.callback = b;
        this.element = a.element;
        this.target = a.options.inputTarget;
        this.domHandler = function(b) {
            s(a.options.enable, [a]) && c.handler(b)
        };
        this.init()
    }

    function N(a) {
        var b = a.options.inputClass;
        return new(b ? b : jb ? ga : Ea ? ea : Xa ? Y : S)(a, G)
    }

    function G(a, b, c) {
        var d = c.pointers.length,
            f = c.changedPointers.length,
            g = b &
            Da && 0 === d - f,
            d = b & (na | Ba) && 0 === d - f;
        c.isFirst = !!g;
        c.isFinal = !!d;
        g && (a.session = {});
        c.eventType = b;
        b = a.session;
        g = c.pointers;
        d = g.length;
        b.firstInput || (b.firstInput = I(c));
        1 < d && !b.firstMultiple ? b.firstMultiple = I(c) : 1 === d && (b.firstMultiple = !1);
        var f = b.firstInput,
            h = (d = b.firstMultiple) ? d.center : f.center,
            m = c.center = K(g);
        c.timeStamp = Z();
        c.deltaTime = c.timeStamp - f.timeStamp;
        c.angle = Q(h, m);
        c.distance = W(h, m);
        var f = c.center,
            h = b.offsetDelta || {},
            m = b.prevDelta || {},
            n = b.prevInput || {};
        if (c.eventType === Da || n.eventType === na) m =
            b.prevDelta = {
                x: n.deltaX || 0,
                y: n.deltaY || 0
            }, h = b.offsetDelta = {
                x: f.x,
                y: f.y
            };
        c.deltaX = m.x + (f.x - h.x);
        c.deltaY = m.y + (f.y - h.y);
        c.offsetDirection = A(c.deltaX, c.deltaY);
        f = c.deltaX / c.deltaTime || 0;
        h = c.deltaY / c.deltaTime || 0;
        c.overallVelocityX = f;
        c.overallVelocityY = h;
        c.overallVelocity = aa(f) > aa(h) ? f : h;
        c.scale = d ? W(g[0], g[1], Ma) / W(d.pointers[0], d.pointers[1], Ma) : 1;
        c.rotation = d ? Q(g[1], g[0], Ma) + Q(d.pointers[1], d.pointers[0], Ma) : 0;
        c.maxPointers = b.prevInput ? c.pointers.length > b.prevInput.maxPointers ? c.pointers.length : b.prevInput.maxPointers :
            c.pointers.length;
        h = b.lastInterval || c;
        g = c.timeStamp - h.timeStamp;
        c.eventType != Ba && (g > lb || h.velocity === k) ? (f = c.deltaX - h.deltaX, h = c.deltaY - h.deltaY, m = f / g || 0, n = h / g || 0, g = m, d = n, m = aa(m) > aa(n) ? m : n, f = A(f, h), b.lastInterval = c) : (m = h.velocity, g = h.velocityX, d = h.velocityY, f = h.direction);
        c.velocity = m;
        c.velocityX = g;
        c.velocityY = d;
        c.direction = f;
        b = a.element;
        t(c.srcEvent.target, b) && (b = c.srcEvent.target);
        c.target = b;
        a.emit("hammer.input", c);
        a.recognize(c);
        a.session.prevInput = c
    }

    function I(a) {
        for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
            clientX: M(a.pointers[c].clientX),
            clientY: M(a.pointers[c].clientY)
        }, c++;
        return {
            timeStamp: Z(),
            pointers: b,
            center: K(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }

    function K(a) {
        var b = a.length;
        if (1 === b) return {
            x: M(a[0].clientX),
            y: M(a[0].clientY)
        };
        for (var c = 0, d = 0, f = 0; f < b;) c += a[f].clientX, d += a[f].clientY, f++;
        return {
            x: M(c / b),
            y: M(d / b)
        }
    }

    function A(a, b) {
        return a === b ? Ha : aa(a) >= aa(b) ? 0 > a ? va : la : 0 > b ? oa : Ya
    }

    function W(a, b, c) {
        c || (c = Ra);
        var d = b[c[0]] - a[c[0]];
        a = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + a * a)
    }

    function Q(a, b, c) {
        c || (c =
            Ra);
        return 180 * Math.atan2(b[c[1]] - a[c[1]], b[c[0]] - a[c[0]]) / Math.PI
    }

    function S() {
        this.evEl = Za;
        this.evWin = eb;
        this.pressed = !1;
        C.apply(this, arguments)
    }

    function ga() {
        this.evEl = mb;
        this.evWin = cb;
        C.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = []
    }

    function O() {
        this.evTarget = hb;
        this.evWin = ib;
        this.started = !1;
        C.apply(this, arguments)
    }

    function ea() {
        this.evTarget = nb;
        this.targetIds = {};
        C.apply(this, arguments)
    }

    function fa(a, c) {
        var d = b(a.touches),
            f = this.targetIds;
        if (c & (Da | Sa) && 1 === d.length) return f[d[0].identifier] = !0, [d, d];
        var g, h = b(a.changedTouches),
            k = [],
            m = this.target;
        g = d.filter(function(a) {
            return t(a.target, m)
        });
        if (c === Da)
            for (d = 0; d < g.length;) f[g[d].identifier] = !0, d++;
        for (d = 0; d < h.length;) f[h[d].identifier] && k.push(h[d]), c & (na | Ba) && delete f[h[d].identifier], d++;
        if (k.length) return [u(g.concat(k), "identifier", !0), k]
    }

    function Y() {
        C.apply(this, arguments);
        var a = r(this.handler, this);
        this.touch = new ea(this.manager, a);
        this.mouse = new S(this.manager, a);
        this.primaryTouch = null;
        this.lastTouches = []
    }

    function X(a) {
        a = a.changedPointers[0];
        if (a.identifier === this.primaryTouch) {
            var b = {
                x: a.clientX,
                y: a.clientY
            };
            this.lastTouches.push(b);
            var c = this.lastTouches;
            setTimeout(function() {
                var a = c.indexOf(b); - 1 < a && c.splice(a, 1)
            }, ob)
        }
    }

    function U(a, b) {
        this.manager = a;
        this.set(b)
    }

    function T(a) {
        if (-1 < a.indexOf(Pa)) return Pa;
        var b = -1 < a.indexOf(Qa),
            c = -1 < a.indexOf(x);
        return b && c ? Pa : b || c ? b ? Qa : x : -1 < a.indexOf(ab) ? ab : fb
    }

    function ia(a) {
        this.options = Ga({}, this.defaults, a || {});
        this.id = Ua++;
        this.manager = null;
        this.options.enable = this.options.enable === k ? !0 : this.options.enable;
        this.state = ma;
        this.simultaneous = {};
        this.requireFail = []
    }

    function V(a) {
        return a & Ca ? "cancel" : a & Fa ? "end" : a & B ? "move" : a & wa ? "start" : ""
    }

    function P(a) {
        return a == Ya ? "down" : a == oa ? "up" : a == va ? "left" : a == la ? "right" : ""
    }

    function ja(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function ca() {
        ia.apply(this, arguments)
    }

    function ba() {
        ca.apply(this, arguments);
        this.pY = this.pX = null
    }

    function ha() {
        ca.apply(this, arguments)
    }

    function L() {
        ia.apply(this, arguments);
        this._input = this._timer = null
    }

    function F() {
        ca.apply(this, arguments)
    }

    function ka() {
        ca.apply(this,
            arguments)
    }

    function ua() {
        ia.apply(this, arguments);
        this.pCenter = this.pTime = !1;
        this._input = this._timer = null;
        this.count = 0
    }

    function sa(a, b) {
        b = b || {};
        b.recognizers = b.recognizers === k ? sa.defaults.preset : b.recognizers;
        return new xa(a, b)
    }

    function xa(a, b) {
        this.options = Ga({}, sa.defaults, b || {});
        this.options.inputTarget = this.options.inputTarget || a;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = a;
        this.input = N(this);
        this.touchAction = new U(this, this.options.touchAction);
        da(this, !0);
        h(this.options.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]);
            a[3] && b.requireFailure(a[3])
        }, this)
    }

    function da(a, b) {
        var c = a.element;
        if (c.style) {
            var d;
            h(a.options.cssProps, function(f, g) {
                d = H(c.style, g);
                b ? (a.oldCssProps[d] = c.style[d], c.style[d] = f) : c.style[d] = a.oldCssProps[d] || ""
            });
            b || (a.oldCssProps = {})
        }
    }

    function qa(a, b) {
        var c = d.createEvent("Event");
        c.initEvent(a, !0, !0);
        c.gesture = b;
        b.target.dispatchEvent(c)
    }
    var f = " webkit Moz MS ms o".split(" "),
        q = d.createElement("div"),
        c = "function",
        M = Math.round,
        aa = Math.abs,
        Z = Date.now,
        Ga;
    Ga = "function" !== typeof Object.assign ? function(a) {
        if (a === k || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d !== k && null !== d)
                for (var f in d) d.hasOwnProperty(f) && (b[f] = d[f])
        }
        return b
    } : Object.assign;
    var pa = n(function(a, b, c) {
            for (var d = Object.keys(b), f = 0; f < d.length;) {
                if (!c || c && a[d[f]] === k) a[d[f]] = b[d[f]];
                f++
            }
            return a
        }, "extend", "Use `assign`."),
        Ka = n(function(a,
            b) {
            return pa(a, b, !0)
        }, "merge", "Use `assign`."),
        Ua = 1,
        bb = /mobile|tablet|ip(ad|hone|od)|android/i,
        Xa = "ontouchstart" in a,
        jb = H(a, "PointerEvent") !== k,
        Ea = Xa && bb.test(navigator.userAgent),
        lb = 25,
        Da = 1,
        Sa = 2,
        na = 4,
        Ba = 8,
        Ha = 1,
        va = 2,
        la = 4,
        oa = 8,
        Ya = 16,
        Aa = va | la,
        Ta = oa | Ya,
        za = Aa | Ta,
        Ra = ["x", "y"],
        Ma = ["clientX", "clientY"];
    C.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && z(this.element, this.evEl, this.domHandler);
            this.evTarget && z(this.target, this.evTarget, this.domHandler);
            this.evWin && z(J(this.element), this.evWin,
                this.domHandler)
        },
        destroy: function() {
            this.evEl && w(this.element, this.evEl, this.domHandler);
            this.evTarget && w(this.target, this.evTarget, this.domHandler);
            this.evWin && w(J(this.element), this.evWin, this.domHandler)
        }
    };
    var Na = {
            mousedown: Da,
            mousemove: Sa,
            mouseup: na
        },
        Za = "mousedown",
        eb = "mousemove mouseup";
    g(S, C, {
        handler: function(a) {
            var b = Na[a.type];
            b & Da && 0 === a.button && (this.pressed = !0);
            b & Sa && 1 !== a.which && (b = na);
            this.pressed && (b & na && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: "mouse",
                srcEvent: a
            }))
        }
    });
    var Ja = {
            pointerdown: Da,
            pointermove: Sa,
            pointerup: na,
            pointercancel: Ba,
            pointerout: Ba
        },
        kb = {
            2: "touch",
            3: "pen",
            4: "mouse",
            5: "kinect"
        },
        mb = "pointerdown",
        cb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (mb = "MSPointerDown", cb = "MSPointerMove MSPointerUp MSPointerCancel");
    g(ga, C, {
        handler: function(a) {
            var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                d = Ja[d],
                f = kb[a.pointerType] || a.pointerType,
                g = "touch" == f,
                h = y(b, a.pointerId, "pointerId");
            d & Da && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : d & (na | Ba) && (c = !0);
            0 > h || (b[h] = a, this.callback(this.manager, d, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var gb = {
            touchstart: Da,
            touchmove: Sa,
            touchend: na,
            touchcancel: Ba
        },
        hb = "touchstart",
        ib = "touchstart touchmove touchend touchcancel";
    g(O, C, {
        handler: function(a) {
            var c = gb[a.type];
            c === Da && (this.started = !0);
            if (this.started) {
                var d;
                d = b(a.touches);
                var f = b(a.changedTouches);
                c & (na | Ba) && (d = u(d.concat(f), "identifier", !0));
                d = [d, f];
                c & (na | Ba) && 0 === d[0].length - d[1].length && (this.started = !1);
                this.callback(this.manager, c, {
                    pointers: d[0],
                    changedPointers: d[1],
                    pointerType: "touch",
                    srcEvent: a
                })
            }
        }
    });
    var Va = {
            touchstart: Da,
            touchmove: Sa,
            touchend: na,
            touchcancel: Ba
        },
        nb = "touchstart touchmove touchend touchcancel";
    g(ea, C, {
        handler: function(a) {
            var b = Va[a.type],
                c = fa.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: "touch",
                srcEvent: a
            })
        }
    });
    var ob = 2500;
    g(Y, C, {
        handler: function(a, b, c) {
            var d = "touch" ==
                c.pointerType,
                f = "mouse" == c.pointerType;
            if (!(f && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d) b & Da ? (this.primaryTouch = c.changedPointers[0].identifier, X.call(this, c)) : b & (na | Ba) && X.call(this, c);
                else {
                    if (d = f) a: {
                        for (var d = c.srcEvent.clientX, f = c.srcEvent.clientY, g = 0; g < this.lastTouches.length; g++) {
                            var h = this.lastTouches[g],
                                k = Math.abs(d - h.x),
                                h = Math.abs(f - h.y);
                            if (25 >= k && 25 >= h) {
                                d = !0;
                                break a
                            }
                        }
                        d = !1
                    }
                    if (d) return
                }
                this.callback(a, b, c)
            }
        },
        destroy: function() {
            this.touch.destroy();
            this.mouse.destroy()
        }
    });
    var $a = H(q.style, "touchAction"),
        Wa = $a !== k,
        fb = "auto",
        ab = "manipulation",
        Pa = "none",
        Qa = "pan-x",
        x = "pan-y",
        Ia = function() {
            if (!Wa) return !1;
            var b = {},
                c = a.CSS && a.CSS.supports;
            "auto;manipulation;pan-y;pan-x;pan-x pan-y;none".split(";").forEach(function(d) {
                b[d] = c ? a.CSS.supports("touch-action", d) : !0
            });
            return b
        }();
    U.prototype = {
        set: function(a) {
            "compute" == a && (a = this.compute());
            Wa && (this.manager.element.style && Ia[a]) && (this.manager.element.style[$a] = a);
            this.actions = a.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var a = [];
            h(this.manager.recognizers, function(b) {
                s(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            });
            return T(a.join(" "))
        },
        preventDefaults: function(a) {
            var b = a.srcEvent,
                c = a.offsetDirection;
            if (this.manager.session.prevented) b.preventDefault();
            else {
                var d = this.actions,
                    f = -1 < d.indexOf(Pa) && !Ia[Pa],
                    g = -1 < d.indexOf(x) && !Ia[x],
                    d = -1 < d.indexOf(Qa) && !Ia[Qa];
                if (f) {
                    var h = 2 > a.distance,
                        k = 250 > a.deltaTime;
                    if (1 === a.pointers.length && h && k) return
                }
                if (!d || !g)
                    if (f || g && c & Aa || d && c & Ta) return this.preventSrc(b)
            }
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0;
            a.preventDefault()
        }
    };
    var ma = 1,
        wa = 2,
        B = 4,
        Fa = 8,
        ya = Fa,
        Ca = 16;
    ia.prototype = {
        defaults: {},
        set: function(a) {
            Ga(this.options, a);
            this.manager && this.manager.touchAction.update();
            return this
        },
        recognizeWith: function(a) {
            if (p(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            a = ja(a, this);
            b[a.id] || (b[a.id] = a, a.recognizeWith(this));
            return this
        },
        dropRecognizeWith: function(a) {
            if (p(a, "dropRecognizeWith", this)) return this;
            a = ja(a, this);
            delete this.simultaneous[a.id];
            return this
        },
        requireFailure: function(a) {
            if (p(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            a = ja(a, this); - 1 === y(b, a) && (b.push(a), a.requireFailure(this));
            return this
        },
        dropRequireFailure: function(a) {
            if (p(a, "dropRequireFailure", this)) return this;
            a = ja(a, this);
            a = y(this.requireFail, a); - 1 < a && this.requireFail.splice(a, 1);
            return this
        },
        hasRequireFailures: function() {
            return 0 < this.requireFail.length
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id]
        },
        emit: function(a) {
            function b(d) {
                c.manager.emit(d,
                    a)
            }
            var c = this,
                d = this.state;
            d < Fa && b(c.options.event + V(d));
            b(c.options.event);
            a.additionalEvent && b(a.additionalEvent);
            d >= Fa && b(c.options.event + V(d))
        },
        tryEmit: function(a) {
            if (this.canEmit()) return this.emit(a);
            this.state = 32
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (32 | ma))) return !1;
                a++
            }
            return !0
        },
        recognize: function(a) {
            a = Ga({}, a);
            s(this.options.enable, [this, a]) ? (this.state & (ya | Ca | 32) && (this.state = ma), this.state = this.process(a), this.state & (wa | B | Fa | Ca) && this.tryEmit(a)) :
                (this.reset(), this.state = 32)
        },
        process: function(a) {},
        getTouchAction: function() {},
        reset: function() {}
    };
    g(ca, ia, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function(a) {
            var b = this.state,
                c = a.eventType,
                d = b & (wa | B);
            a = this.attrTest(a);
            return d && (c & Ba || !a) ? b | Ca : d || a ? c & na ? b | Fa : b & wa ? b | B : wa : 32
        }
    });
    g(ba, ca, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: za
        },
        getTouchAction: function() {
            var a = this.options.direction,
                b = [];
            a & Aa && b.push(x);
            a & Ta && b.push(Qa);
            return b
        },
        directionTest: function(a) {
            var b = this.options,
                c = !0,
                d = a.distance,
                f = a.direction,
                g = a.deltaX,
                h = a.deltaY;
            f & b.direction || (b.direction & Aa ? (f = 0 === g ? Ha : 0 > g ? va : la, c = g != this.pX, d = Math.abs(a.deltaX)) : (f = 0 === h ? Ha : 0 > h ? oa : Ya, c = h != this.pY, d = Math.abs(a.deltaY)));
            a.direction = f;
            return c && d > b.threshold && f & b.direction
        },
        attrTest: function(a) {
            return ca.prototype.attrTest.call(this, a) && (this.state & wa || !(this.state & wa) && this.directionTest(a))
        },
        emit: function(a) {
            this.pX = a.deltaX;
            this.pY = a.deltaY;
            var b =
                P(a.direction);
            b && (a.additionalEvent = this.options.event + b);
            this._super.emit.call(this, a)
        }
    });
    g(ha, ca, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Pa]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & wa)
        },
        emit: function(a) {
            1 !== a.scale && (a.additionalEvent = this.options.event + (1 > a.scale ? "in" : "out"));
            this._super.emit.call(this, a)
        }
    });
    g(L, ia, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 0.001,
            threshold: 9
        },
        getTouchAction: function() {
            return [fb]
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                b = a.distance < b.threshold;
            this._input = a;
            if (b && c) {
                if (a.eventType & Da) return this.reset(), ya;
                if (a.eventType & na) return ya
            } else this.reset();
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(a) {
            this.state === ya && (a && a.eventType & na ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = Z(), this.manager.emit(this.options.event, this._input)))
        }
    });
    g(F, ca, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Pa]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & wa)
        }
    });
    g(ka, ca, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: Aa | Ta,
            pointers: 1
        },
        getTouchAction: function() {
            return ba.prototype.getTouchAction.call(this)
        },
        attrTest: function(a) {
            var b = this.options.direction,
                c;
            b & (Aa | Ta) ? c = a.overallVelocity : b & Aa ? c = a.overallVelocityX : b & Ta && (c = a.overallVelocityY);
            return this._super.attrTest.call(this,
                a) && b & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && aa(c) > this.options.velocity && a.eventType & na
        },
        emit: function(a) {
            var b = P(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a);
            this.manager.emit(this.options.event, a)
        }
    });
    g(ua, ia, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ab]
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime < b.time;
            this.reset();
            if (a.eventType & Da && 0 === this.count) return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != na) return this.failTimeout();
                c = this.pTime ? a.timeStamp - this.pTime < b.interval : !0;
                d = !this.pCenter || W(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp;
                this.pCenter = a.center;
                this.count = d && c ? this.count + 1 : 1;
                this._input = a;
                if (0 === this.count % b.taps) return this.hasRequireFailures() ? (this._timer = setTimeout(r(function() {
                    this.state = ya;
                    this.tryEmit()
                }, this), b.interval), wa) : ya
            }
            return 32
        },
        failTimeout: function() {
            this._timer = setTimeout(r(function() {
                this.state = 32
            }, this), this.options.interval);
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ya && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    });
    sa.VERSION = "2.0.8";
    sa.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [F, {
                enable: !1
            }],
            [ha, {
                    enable: !1
                },
                ["rotate"]
            ],
            [ka, {
                direction: Aa
            }],
            [ba, {
                    direction: Aa
                },
                ["swipe"]
            ],
            [L]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    xa.prototype = {
        set: function(a) {
            Ga(this.options, a);
            a.touchAction && this.touchAction.update();
            a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init());
            return this
        },
        stop: function(a) {
            this.session.stopped = a ? 2 : 1
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers,
                    f = b.curRecognizer;
                if (!f || f && f.state &
                    ya) f = b.curRecognizer = null;
                for (var g = 0; g < d.length;) c = d[g], 2 === b.stopped || f && c != f && !c.canRecognizeWith(f) ? c.reset() : c.recognize(a), !f && c.state & (wa | B | Fa) && (f = b.curRecognizer = c), g++
            }
        },
        get: function(a) {
            if (a instanceof ia) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a) return b[c];
            return null
        },
        add: function(a) {
            if (p(a, "add", this)) return this;
            var b = this.get(a.options.event);
            b && this.remove(b);
            this.recognizers.push(a);
            a.manager = this;
            this.touchAction.update();
            return a
        },
        remove: function(a) {
            if (p(a,
                    "remove", this)) return this;
            if (a = this.get(a)) {
                var b = this.recognizers;
                a = y(b, a); - 1 !== a && (b.splice(a, 1), this.touchAction.update())
            }
            return this
        },
        on: function(a, b) {
            if (a !== k && b !== k) {
                var c = this.handlers;
                h(v(a), function(a) {
                    c[a] = c[a] || [];
                    c[a].push(b)
                });
                return this
            }
        },
        off: function(a, b) {
            if (a !== k) {
                var c = this.handlers;
                h(v(a), function(a) {
                    b ? c[a] && c[a].splice(y(c[a], b), 1) : delete c[a]
                });
                return this
            }
        },
        emit: function(a, b) {
            this.options.domEvents && qa(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type =
                    a;
                b.preventDefault = function() {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;) c[d](b), d++
            }
        },
        destroy: function() {
            this.element && da(this, !1);
            this.handlers = {};
            this.session = {};
            this.input.destroy();
            this.element = null
        }
    };
    Ga(sa, {
        INPUT_START: Da,
        INPUT_MOVE: Sa,
        INPUT_END: na,
        INPUT_CANCEL: Ba,
        STATE_POSSIBLE: ma,
        STATE_BEGAN: wa,
        STATE_CHANGED: B,
        STATE_ENDED: Fa,
        STATE_RECOGNIZED: ya,
        STATE_CANCELLED: Ca,
        STATE_FAILED: 32,
        DIRECTION_NONE: Ha,
        DIRECTION_LEFT: va,
        DIRECTION_RIGHT: la,
        DIRECTION_UP: oa,
        DIRECTION_DOWN: Ya,
        DIRECTION_HORIZONTAL: Aa,
        DIRECTION_VERTICAL: Ta,
        DIRECTION_ALL: za,
        Manager: xa,
        Input: C,
        TouchAction: U,
        TouchInput: ea,
        MouseInput: S,
        PointerEventInput: ga,
        TouchMouseInput: Y,
        SingleTouchInput: O,
        Recognizer: ia,
        AttrRecognizer: ca,
        Tap: ua,
        Pan: ba,
        Swipe: ka,
        Pinch: ha,
        Rotate: F,
        Press: L,
        on: z,
        off: w,
        each: h,
        merge: Ka,
        extend: pa,
        assign: Ga,
        inherit: g,
        bindFn: r,
        prefixed: H
    });
    ("undefined" !== typeof a ? a : "undefined" !== typeof self ? self : {}).Hammer = sa;
    "function" === typeof define && define.amd ? define(function() {
            return sa
        }) : "undefined" != typeof module && module.exports ? module.exports =
        sa : a[m] = sa
})(window, document, "Hammer");
(function() {
    var a = "undefined" !== typeof module && module.exports,
        d = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        m = function() {
            var a, d, k = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ],
                g = 0;
            d = k.length;
            for (var m = {}; g < d; g++)
                if ((a = k[g]) && a[1] in document) {
                    g = 0;
                    for (d = a.length; g < d; g++) m[k[0][g]] = a[g];
                    return m
                }
            return !1
        }(),
        k = {
            request: function(a) {
                var h = m.requestFullscreen;
                a = a || document.documentElement;
                if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) a[h]();
                else a[h](d && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                document[m.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            raw: m
        };
    m ? (Object.defineProperties(k, {
        isFullscreen: {
            get: function() {
                return Boolean(document[m.fullscreenElement])
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return document[m.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return Boolean(document[m.fullscreenEnabled])
            }
        }
    }), a ? module.exports = k : window.screenfull = k) : a ? module.exports = !1 : window.screenfull = !1
})();
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
(function() {
    function a(d, h) {
        function k(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }
        var n;
        h = h || {};
        this.trackingClick = !1;
        this.trackingClickStart = 0;
        this.targetElement = null;
        this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0;
        this.touchBoundary = h.touchBoundary || 10;
        this.layer = d;
        this.tapDelay = h.tapDelay || 200;
        this.tapTimeout = h.tapTimeout || 700;
        if (!a.notNeeded(d)) {
            for (var p = "onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "), t = 0, v = p.length; t < v; t++) this[p[t]] = k(this[p[t]],
                this);
            m && (d.addEventListener("mouseover", this.onMouse, !0), d.addEventListener("mousedown", this.onMouse, !0), d.addEventListener("mouseup", this.onMouse, !0));
            d.addEventListener("click", this.onClick, !0);
            d.addEventListener("touchstart", this.onTouchStart, !1);
            d.addEventListener("touchmove", this.onTouchMove, !1);
            d.addEventListener("touchend", this.onTouchEnd, !1);
            d.addEventListener("touchcancel", this.onTouchCancel, !1);
            Event.prototype.stopImmediatePropagation || (d.removeEventListener = function(a, b, h) {
                var k = Node.prototype.removeEventListener;
                "click" === a ? k.call(d, a, b.hijacked || b, h) : k.call(d, a, b, h)
            }, d.addEventListener = function(a, b, h) {
                var k = Node.prototype.addEventListener;
                "click" === a ? k.call(d, a, b.hijacked || (b.hijacked = function(a) {
                    a.propagationStopped || b(a)
                }), h) : k.call(d, a, b, h)
            });
            "function" === typeof d.onclick && (n = d.onclick, d.addEventListener("click", function(a) {
                n(a)
            }, !1), d.onclick = null)
        }
    }
    var d = 0 <= navigator.userAgent.indexOf("Windows Phone"),
        m = 0 < navigator.userAgent.indexOf("Android") && !d,
        k = /iP(ad|hone|od)/.test(navigator.userAgent) && !d,
        p =
        k && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        h = k && /OS [6-7]_\d/.test(navigator.userAgent),
        n = 0 < navigator.userAgent.indexOf("BB10");
    a.prototype.needsClick = function(a) {
        switch (a.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (a.disabled) return !0;
                break;
            case "input":
                if (k && "file" === a.type || a.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(a.className)
    };
    a.prototype.needsFocus = function(a) {
        switch (a.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !m;
            case "input":
                switch (a.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !a.disabled && !a.readOnly;
            default:
                return /\bneedsfocus\b/.test(a.className)
        }
    };
    a.prototype.sendClick = function(a, d) {
        var h, k;
        document.activeElement && document.activeElement !== a && document.activeElement.blur();
        k = d.changedTouches[0];
        h = document.createEvent("MouseEvents");
        h.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, k.screenX, k.screenY, k.clientX, k.clientY, !1, !1, !1, !1, 0, null);
        h.forwardedTouchEvent = !0;
        a.dispatchEvent(h)
    };
    a.prototype.determineEventType = function(a) {
        return m && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
    };
    a.prototype.focus = function(a) {
        var d;
        k && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (d = a.value.length, a.setSelectionRange(d, d)) : a.focus()
    };
    a.prototype.updateScrollParent = function(a) {
        var d, h;
        d = a.fastClickScrollParent;
        if (!d || !d.contains(a)) {
            h = a;
            do {
                if (h.scrollHeight > h.offsetHeight) {
                    d = h;
                    a.fastClickScrollParent =
                        h;
                    break
                }
                h = h.parentElement
            } while (h)
        }
        d && (d.fastClickLastScrollTop = d.scrollTop)
    };
    a.prototype.getTargetElementFromEventTarget = function(a) {
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
    };
    a.prototype.onTouchStart = function(a) {
        var d, h, m;
        if (1 < a.targetTouches.length) return !0;
        d = this.getTargetElementFromEventTarget(a.target);
        h = a.targetTouches[0];
        if (k) {
            m = window.getSelection();
            if (m.rangeCount && !m.isCollapsed) return !0;
            if (!p) {
                if (h.identifier && h.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                this.lastTouchIdentifier = h.identifier;
                this.updateScrollParent(d)
            }
        }
        this.trackingClick = !0;
        this.trackingClickStart = a.timeStamp;
        this.targetElement = d;
        this.touchStartX = h.pageX;
        this.touchStartY = h.pageY;
        a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault();
        return !0
    };
    a.prototype.touchHasMoved = function(a) {
        a = a.changedTouches[0];
        var d = this.touchBoundary;
        return Math.abs(a.pageX - this.touchStartX) > d || Math.abs(a.pageY - this.touchStartY) > d ? !0 : !1
    };
    a.prototype.onTouchMove = function(a) {
        if (!this.trackingClick) return !0;
        if (this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) this.trackingClick = !1, this.targetElement = null;
        return !0
    };
    a.prototype.findControl = function(a) {
        return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    };
    a.prototype.onTouchEnd = function(a) {
        var d, n, z = this.targetElement;
        if (!this.trackingClick) return !0;
        if (a.timeStamp - this.lastClickTime <
            this.tapDelay) return this.cancelNextClick = !0;
        if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        this.cancelNextClick = !1;
        this.lastClickTime = a.timeStamp;
        d = this.trackingClickStart;
        this.trackingClick = !1;
        this.trackingClickStart = 0;
        h && (n = a.changedTouches[0], z = document.elementFromPoint(n.pageX - window.pageXOffset, n.pageY - window.pageYOffset) || z, z.fastClickScrollParent = this.targetElement.fastClickScrollParent);
        n = z.tagName.toLowerCase();
        if ("label" === n) {
            if (d = this.findControl(z)) {
                this.focus(z);
                if (m) return !1;
                z = d
            }
        } else if (this.needsFocus(z)) {
            if (100 < a.timeStamp - d || k && window.top !== window && "input" === n) return this.targetElement = null, !1;
            this.focus(z);
            this.sendClick(z, a);
            k && "select" === n || (this.targetElement = null, a.preventDefault());
            return !1
        }
        if (k && !p && (d = z.fastClickScrollParent) && d.fastClickLastScrollTop !== d.scrollTop) return !0;
        this.needsClick(z) || (a.preventDefault(), this.sendClick(z, a));
        return !1
    };
    a.prototype.onTouchCancel = function() {
        this.trackingClick = !1;
        this.targetElement = null
    };
    a.prototype.onMouse = function(a) {
        return this.targetElement &&
            !a.forwardedTouchEvent && a.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
    };
    a.prototype.onClick = function(a) {
        if (this.trackingClick) return this.targetElement = null, this.trackingClick = !1, !0;
        if ("submit" === a.target.type && 0 === a.detail) return !0;
        a = this.onMouse(a);
        a || (this.targetElement = null);
        return a
    };
    a.prototype.destroy = function() {
        var a = this.layer;
        m && (a.removeEventListener("mouseover",
            this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0));
        a.removeEventListener("click", this.onClick, !0);
        a.removeEventListener("touchstart", this.onTouchStart, !1);
        a.removeEventListener("touchmove", this.onTouchMove, !1);
        a.removeEventListener("touchend", this.onTouchEnd, !1);
        a.removeEventListener("touchcancel", this.onTouchCancel, !1)
    };
    a.notNeeded = function(a) {
        var d, h;
        if ("undefined" === typeof window.ontouchstart) return !0;
        if (h = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])
            if (m) {
                if ((d = document.querySelector("meta[name=viewport]")) && (-1 !== d.content.indexOf("user-scalable=no") || 31 < h && document.documentElement.scrollWidth <= window.outerWidth)) return !0
            } else return !0;
        return n && (d = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= d[1] && 3 <= d[2] && (d = document.querySelector("meta[name=viewport]")) && (-1 !== d.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === a.style.msTouchAction || "manipulation" === a.style.touchAction) ||
            27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (d = document.querySelector("meta[name=viewport]")) && (-1 !== d.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth) ? !0 : "none" === a.style.touchAction || "manipulation" === a.style.touchAction ? !0 : !1
    };
    a.attach = function(d, h) {
        return new a(d, h)
    };
    "function" === typeof define && "object" === typeof define.amd && define.amd ? define(function() {
        return a
    }) : "undefined" !== typeof module && module.exports ? (module.exports = a.attach,
        module.exports.FastClick = a) : window.FastClick = a
})();
var CMDetect = new function() {
    this.isTouch = !1;
    if ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) this.isTouch = !0;
    this.DEVICE = "pc";
    this.RATIO = 2;
    this.SITE_URL = "http://booounce.cmiscm.com";
    this.APP_ID = "290821767925301";
    if (Modernizr.csstransforms3d && Modernizr.canvas && Modernizr.canvastext) {
        var a = window.getComputedStyle(document.documentElement, "");
        this.VENDOR = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
        "moz" == this.VENDOR &&
            (this.VENDOR = "Moz");
        this.TRANSFORM = this.VENDOR + "Transform";
        this.TIMING = this.VENDOR + "TransitionTimingFunction";
        this.DURATION = this.VENDOR + "TransitionDuration";
        this.DELAY = this.VENDOR + "TransitionDelay"
    } else this.VENDOR = ""
};
var StageController = StageController || function() {
    function a(a) {
        a.preventDefault()
    }

    function d() {
        var a = h.offsetWidth,
            d = h.offsetHeight;
        0 < m.maxWidth && (a = a > m.maxWidth ? m.maxWidth : a);
        0 < m.maxHeight && (d = d > m.maxHeight ? m.maxHeight : d);
        0 < m.minWidth && (a = a < m.minWidth ? m.minWidth : a);
        0 < m.minHeight && (d = d < m.minHeight ? m.minHeight : d);
        if (m.stageWidth != a || m.stageHeight != d)
            for (m.stageWidth = a, m.stageHeight = d, a = p.length; a--;) p[a]()
    }
    var m = {
            stageWidth: 0,
            stageHeight: 0,
            maxWidth: 0,
            maxHeight: 0
        },
        k = [],
        p = [],
        h;
    m.init = function(k) {
        h = document.createElement("div");
        h.id = "check";
        document.body.appendChild(h);
        k && (m.maxWidth = k.maxw || 0, m.maxHeight = k.maxh || 0, m.minWidth = k.minw || 0, m.minHeight = k.minh || 0);
        if (CMDetect.isTouch) $(window.document).on("touchmove", a);
        window.addEventListener("resize", d, !0);
        d();
        window.DeviceOrientationEvent && window.addEventListener("orientationchange", d, !1)
    };
    m.onResize = d;
    m.addResize = function(a, d) {
        -1 < k.indexOf(a) || (k.unshift(a), p.unshift(d), d())
    };
    m.removeResize = function(a) {
        a = k.indexOf(a); - 1 < a && (k.splice(a, 1), p.splice(a, 1))
    };
    return m
}();
var Address = Address || function() {
    function a() {
        H = StageController.stageWidth;
        J = StageController.stageHeight;
        d();
        n.mobileView = 0 == n.sizeMode || "pc" != CMDetect.DEVICE ? 1 : 0;
        var a, b = H - 2 * UI.GAP_X,
            g = J - (UI.GAP_Y + w);
        a = b / (UI.CANVAS_SIZE + UI.TGAP_X) | 0;
        var h = g / (UI.CANVAS_SIZE + UI.TGAP_Y) | 0;
        a >= h ? 6 < a && (a = 6) : 4 < a && (a = 4);
        8 < h && (h = 8);
        var k = (b - a * UI.CANVAS_SIZE) / (a - 1) | 0,
            m = (g - h * UI.CANVAS_SIZE) / (h - 1) | 0;
        k > UI.MAX_GAP_X && (k = UI.MAX_GAP_X);
        m > UI.MAX_GAP_Y && (m = UI.MAX_GAP_Y);
        b = b - (UI.CANVAS_SIZE * a + k * (a - 1)) >> 1;
        g = g - (UI.CANVAS_SIZE * h + m * (h -
            1)) >> 1;
        z = a * h;
        a = {
            xnum: a,
            ynum: h,
            xgap: k,
            ygap: m,
            xpos: b + UI.GAP_X,
            ypos: g + UI.GAP_Y
        };
        Menu.resize(a);
        List.resize(a, H, J);
        View.resize(a, H, J)
    }

    function d() {
        581 >= H || 463 >= J ? (n.sizeMode = 0, UI.GAP_X = 12, UI.GAP_Y = 100, UI.TGAP_X = 5, UI.TGAP_Y = 22, UI.MAX_GAP_X = 30, UI.MAX_GAP_Y = 100, UI.CANVAS_SIZE = 120, UI.LINE_W = 2, UI.LINE_OVER_W = 4, UI.THUMB_SIZE = 80, UI.TIME = 1.4, w = 40) : (665 >= H || 513 >= J ? (n.sizeMode = 1, UI.GAP_X = 60, UI.GAP_Y = 70, UI.TGAP_X = 12, UI.TGAP_Y = 25, UI.MAX_GAP_X = 80, UI.MAX_GAP_Y = 100, UI.CANVAS_SIZE = 142, UI.LINE_W = 3, UI.LINE_OVER_W = 4, UI.THUMB_SIZE =
            88) : 783 >= H || 577 >= J ? (n.sizeMode = 2, UI.GAP_X = 60, UI.GAP_Y = 70, UI.TGAP_X = 20, UI.TGAP_Y = 30, UI.MAX_GAP_X = 80, UI.MAX_GAP_Y = 100, UI.CANVAS_SIZE = 162, UI.LINE_W = 3, UI.LINE_OVER_W = 6, UI.THUMB_SIZE = 100) : 949 >= H || 649 >= J ? (n.sizeMode = 3, UI.GAP_X = 86, UI.GAP_Y = 90, UI.TGAP_X = 20, UI.TGAP_Y = 30, UI.MAX_GAP_X = 80, UI.MAX_GAP_Y = 100, UI.CANVAS_SIZE = 184, UI.LINE_W = 3, UI.LINE_OVER_W = 6, UI.THUMB_SIZE = 114) : (n.sizeMode = 4, UI.GAP_X = 130, UI.GAP_Y = 110, UI.TGAP_X = 20, UI.TGAP_Y = 30, UI.MAX_GAP_X = 80, UI.MAX_GAP_Y = 100, UI.CANVAS_SIZE = 210, UI.LINE_W = 3, UI.LINE_OVER_W =
            6, UI.THUMB_SIZE = 130), UI.TIME = 1.4, w = 60);
        UI.CICLE_SIZE = UI.CANVAS_SIZE - UI.LINE_W;
        UI.THUMB_RADIUS = UI.THUMB_SIZE >> 1;
        UI.CICLE_RADIUS = UI.CICLE_SIZE >> 1;
        UI.CANVAS_CENTER = UI.CANVAS_SIZE >> 1
    }

    function m(a, d) {
        if (u) {
            var g, m = a.split("/"),
                r = m[0],
                m = m[1];
            switch (r) {
                case n.URL_LIST:
                    g = 0;
                    m && CMUtiles.IsNumeric(m) && 0 != m || (m = 1, p(n.URL_LIST + "/1"));
                    break;
                case n.URL_ABOUT:
                    g = 2;
                    m = n.URL_ABOUT_SUB;
                    break;
                case n.URL_SUBMIT:
                    g = 2;
                    m = n.URL_SUBMIT_SUB;
                    break;
                case n.URL_VIEW:
                    g = 1;
                    break;
                default:
                    p(n.URL_LIST + "/1"), r = n.URL_LIST, m = 1, g = 0
            }
            1 == b &&
                2 == g && (p(n.URL_LIST + "/1"), r = n.URL_LIST, m = 1, g = 0);
            g = [r, m, g];
            r = g[0];
            m = g[1];
            g = g[2];
            if (r != n.curURL || m != n.curSUB) h(), Search.hideSearch(), n.prevURL = n.curURL, n.curURL = r, n.prevSUB = n.curSUB, n.curSUB = m, y = v, v = g, Menu.check(), v == y ? t[v].change(m) : b ? (b = 0, r = t[v].start(n.curSUB), TweenLite.delayedCall(r, k)) : (t[v].ready(n.curSUB), t[y].hide())
        } else p(n.curURL)
    }

    function k() {
        Menu.show()
    }

    function p(a) {
        hasher.changed.active = !1;
        hasher.setHash(a);
        hasher.changed.active = !0
    }

    function h() {
        u = 0;
        r.style.display = "block"
    }
    var n = {
            URL_LIST: "list",
            URL_ABOUT: "about",
            URL_SUBMIT: "submit",
            URL_VIEW: "view",
            URL_ABOUT_SUB: "cm-a",
            URL_SUBMIT_SUB: "cm-s",
            curURL: null,
            prevURL: null,
            curSUB: null,
            prevSUB: null,
            savePage: 1,
            sizeMode: 4,
            mobileView: 0,
            hammertime: null
        },
        g, r, s, z, w = 60,
        t = [],
        v = -1,
        y = -1,
        b = 1,
        u = 1,
        H, J;
    n.init = function(a) {
        CMDetect.DEVICE = a;
        CMDetect.RATIO = 1 >= window.devicePixelRatio ? 1 : 2;
        3600 < screen.width && 2E3 < screen.height && (CMDetect.RATIO = 1);
        r = document.getElementById("block");
        g = document.getElementById("root");
        s = document.getElementById("container");
        if ("webkit" != CMDetect.VENDOR &&
            "Moz" != CMDetect.VENDOR && "ms" != CMDetect.VENDOR || !("pc" != CMDetect.DEVICE || Modernizr.video && screenfull.enabled)) CMUtiles.removeDom(r), document.body.innerHTML = "", document.body.appendChild(g), g.className = "admin", g.innerHTML = '<h1>Oops!</h1><div class="message">Booounce was created with HTML5 and CSS3, especially <a href="https://webkit.org/" target="_blank">WebKit</a> features.<br>It\'s a Chrome experiment and you can see perfectly on Chrome browser.<br>Please use <a href="http://www.google.com/chrome" target="_blank">Google Chrome browser</a>.</div>';
      else {
            StageController.init({
                minw: 320,
                minh: 320
            });
            g.style.minWidth = "320px";
            g.style.minHeight = "320px";
            "pc" != CMDetect.DEVICE && FastClick.attach(document.body);
            n.hammertime = new Hammer.Manager(g, {
                recognizers: [
                    [Hammer.Swipe, {
                        direction: Hammer.DIRECTION_ALL
                    }]
                ]
            });
            KeyEvents.init(g);
            List.init(s);
            Popup.init(g);
            Triangle.setting();
            t = [List, View, Popup];
            H = StageController.stageWidth;
            J = StageController.stageHeight;
            d();
            Model.load(s, g);
            a = document.createElement("script");
            a.src = "https://www.youtube.com/iframe_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b)
        }
    };
    n.loaded = function() {
        View.init(g, s);
        StageController.addResize("Address", a);
        Menu.init(g)
    };
    n.start = function() {
        hasher.changed.add(m);
        hasher.initialized.add(m);
        hasher.init()
    };
    n.show = function() {
        t[v].show(n.curSUB)
    };
    n.getPage = function() {
        var a = Model.getView(n.curSUB).no; - 1 == a ? a = n.savePage : (a = Math.ceil((a + 1) / z), 0 == a && (a = 1));
        return a
    };
    n.able = function() {
        u = 1;
        r.style.display = "none"
    };
    n.unable = h;
    n.getAble = function() {
        return u
    };
    n.setHashSilently = p;
    return n
}();
var Model = Model || function() {
    function a(a) {
        var h = new Image,
            k, m, p, n, s;
        h.src = z + t[a].video.img + ".png";
        h.onload = function() {
            t[a].img = {
                thumb: h,
                big: "data/big/" + t[a].video.img + ".jpg"
            };
            m = t[a].lines;
            p = m.length;
            for (n = 0; n < p; n++) s = m[n], t[a].lines[n] = "#" + s;
            t[a].lines.push("rgba(0,0,0,0)");
            r += 1;
            k = r / w;
            TweenLite.killTweensOf(g);
            TweenLite.to(g, 1, {
                no: k,
                onUpdate: d,
                ease: Cubic.easeOut
            });
            1 == k && Address.loaded()
        }
    }

    function d() {
        if (-1 != r) {
            var a = 100 * g.no | 0;
            h.innerHTML = "LOADING.. " + a + "%";
            100 == a && (r = -1, h.style.opacity = 0, s.hide(),
                TweenLite.delayedCall(1.2, m));
            s.percent(g.no)
        }
    }

    function m() {
        CMUtiles.removeDom(p);
        h = p = s = null;
        Address.start()
    }
    var k, p, h, n, g = {
            no: 0
        },
        r = 0,
        s, z, w, t, v = [],
        y = [];
    return {
        load: function(b, d) {
            k = b;
            n = d;
            p = document.createElement("div");
            p.className = "nd loading";
            h = document.createElement("p");
            3 > Address.sizeMode && (p.style.width = "168px", p.style.height = "168px", p.style.margin = "-84px 0 0 -84px", h.style.top = "69px");
            z = "pc" != Address.DEVICE && 0 == Address.sizeMode ? "data/thumb_s/" : "data/thumb/";
            s = new UI.loading;
            s.init();
            p.appendChild(s.canvas);
            p.appendChild(h);
            k.appendChild(p);
            h.innerHTML = "LOADING.. 0%";
            $.ajax({
                url: "data/datam.json",
                dataType: "json",
                cache: !1
            }).done(function(b) {
                t = b.data.motions;
                w = t.length;
                for (b = 0; b < w; b++) v[b] = t[b].info.id, y[b] = t[b].info.title, TweenLite.delayedCall(0.005 * b, a, [b])
            }).fail(function(a, b, d) {
                CMUtiles.removeDom($block);
                document.body.innerHTML = "";
                document.body.appendChild(n);
                n.className = "admin";
                n.innerHTML = '<h1>Oops!</h1><div class="message">A network error has occurred and connection has failed.<br>Please refresh the page to try again.</div>'
            })
        },
        getData: function() {
            return t
        },
        getURL: function() {
            return v
        },
        getTitle: function() {
            return y
        },
        getView: function(a) {
            a = v.indexOf(a);
            return -1 == a ? {
                data: null,
                no: a
            } : {
                data: t[a],
                no: a
            }
        },
        getTotal: function() {
            return w
        }
    }
}();
var UI = {
    GAP_X: 130,
    GAP_Y: 110,
    TGAP_X: 20,
    TGAP_Y: 30,
    MAX_GAP_X: 80,
    MAX_GAP_Y: 100,
    CANVAS_SIZE: 210,
    LINE_W: 3,
    LINE_OVER_W: 6
};
UI.CICLE_SIZE = UI.CANVAS_SIZE - UI.LINE_W;
UI.THUMB_SIZE = 130;
UI.THUMB_RADIUS = UI.THUMB_SIZE >> 1;
UI.TIME = 1.4;
UI.CICLE_RADIUS = UI.CICLE_SIZE >> 1;
UI.CANVAS_CENTER = UI.CANVAS_SIZE >> 1;
UI.PI2 = 2 * Math.PI;
UI.easeExpo = "cubic-bezier(.07,.97,.09,.98)";
UI.font = "Raleway, Helvetica, sans-serif";
UI.loading = function(a) {
    this.canvas = document.createElement("canvas");
    this.isLoop = a;
    this.canvas.style[CMDetect.DURATION] = "0s";
    this.canvas.style.opacity = 1;
    this.isLoop ? (this.canvas.className = "loading-view", this.data = ["#fec415", "#6bb445", "#0088e6"], this.loadingSize = 106) : (this.canvas.className = "loading-dom", this.data = ["#fec415", "#6bb445", "#0088e6"], this.loadingSize = 210, 3 > Address.sizeMode && (this.loadingSize = 168));
    this.loadingW = 3;
    this.loadingCenter = this.loadingSize >> 1;
    this.loadingRadius = this.loadingSize -
        this.loadingW >> 1;
    this.canvas.style.width = this.loadingSize + "px";
    this.canvas.style.height = this.loadingSize + "px";
    this.canvas.width = this.loadingSize * CMDetect.RATIO;
    this.canvas.height = this.loadingSize * CMDetect.RATIO;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.scale(CMDetect.RATIO, CMDetect.RATIO);
    this.ctx.lineWidth = this.loadingW;
    this.total = this.data.length;
    this.ty = this.tx = this.loadingCenter;
    this.startObj = {
        no: 2 * Math.random()
    };
    this.delayObj = {
        no: 0
    };
    this.raf = null;
    this.isUsed = 0;
    return this
};
UI.loading.prototype = {
    init: function() {
        var a = this,
            d;
        this.isUsed = 1;
        this.obj = [];
        for (d = 0; d < this.total; d++) this.obj.push({
            no: 0
        });
        this.setPercent(this);
        this.start = 0.6;
        this.raf = window.requestAnimationFrame(function() {
            a.drawLine()
        });
        this.isLoop && this.loop(a)
    },
    dispose: function() {
        this.isUsed = 0;
        this.raf && (window.cancelAnimationFrame(this.raf), this.raf = null);
        TweenLite.killTweensOf(this.startObj);
        TweenLite.killTweensOf(this.delayObj);
        var a, d;
        for (a = 0; a < this.total; a++) d = this.obj[a], TweenLite.killTweensOf(d);
        this.obj = [];
        this.ctx.clearRect(0, 0, this.loadingSize, this.loadingSize);
        CMUtiles.removeDom(this.canvas);
        this.canvas.style[CMDetect.DURATION] = "0s";
        this.canvas.style.opacity = 1
    },
    percent: function(a) {
        var d, m;
        for (d = 0; d < this.total; d++) m = this.obj[d], m.no = this.percents[d] * a;
        this.startObj.no = this.start * a
    },
    loop: function(a) {
        if (this.isUsed) {
            a.setPercent(a);
            var d, m;
            for (d = 0; d < a.total; d++) m = a.obj[d], TweenLite.killTweensOf(m), TweenLite.to(m, 1, {
                no: a.percents[d],
                ease: Cubic.easeInOut
            });
            TweenLite.killTweensOf(a.startObj);
            TweenLite.to(a.startObj,
                1, {
                    no: a.start,
                    ease: Cubic.easeInOut
                });
            TweenLite.killTweensOf(a.delayObj);
            TweenLite.set(a.delayObj, {
                delay: 1,
                onStart: function() {
                    a.loop(a)
                }
            })
        }
    },
    hide: function() {
        var a, d, m, k = this.total - 1,
            p = 2 / k,
            h = 0,
            n = this;
        TweenLite.killTweensOf(this.startObj);
        TweenLite.killTweensOf(this.delayObj);
        for (a = 0; a < this.total; a++) d = this.obj[a], a == k ? m = 0 : a == k - 1 ? m = 2 - h : (m = p, h += p), TweenLite.killTweensOf(d), TweenLite.to(d, 0.2, {
            no: m,
            ease: Cubic.easeInOut
        }), TweenLite.to(d, 0.2, {
            delay: 0.2,
            no: 0,
            ease: Cubic.easeInOut
        });
        TweenLite.to(this.startObj,
            0.4, {
                no: this.start - 1.1,
                ease: Cubic.easeInOut,
                onComplete: function() {
                    n.dispose()
                }
            });
        this.canvas.style[CMDetect.DURATION] = "0.4s";
        this.canvas.style[CMDetect.TIMING] = "cubic-bezier(0.47, 0, 0.745, 0.715)";
        this.canvas.style.opacity = 0
    },
    drawLine: function() {
        if (this.isUsed) {
            var a = this;
            this.raf = window.requestAnimationFrame(function() {
                a.drawLine()
            });
            this.ctx.clearRect(0, 0, this.loadingSize, this.loadingSize);
            this.ctx.save();
            var d, m, k, p = this.startObj.no;
            for (d = 0; d < this.total; d++) m = this.data[d], k = this.obj[d].no, this.ctx.beginPath(),
                this.ctx.strokeStyle = m, this.ctx.arc(this.tx, this.ty, this.loadingRadius, p * Math.PI, (k + p) * Math.PI, !1), p += k, this.ctx.stroke();
            this.ctx.restore()
        }
    },
    addValue: function(a) {
        var d = Math.random();
        if (0.9 < d || 0 == d) d = 0.5;
        return a * d
    },
    setPercent: function(a) {
        var d, m = a.addValue(2),
            k = 0;
        a.percents = [];
        for (d = 0; d < a.total; d++) d == a.total - 1 ? a.percents.push(2 - k) : (k += m, a.percents.push(m), m = a.addValue(2 - k));
        a.percents = CMUtiles.shuffle(a.percents);
        a.start = 2 * Math.random()
    }
};
UI.line = function(a) {
    this.ctx = a;
    this.titleTypo = new NYTypo2(a, "#292a2a");
    this.subTypo = new NYTypo2(a, "#7f7f7f");
    this.isUsed = this.isOver = 0;
    return this
};
UI.line.prototype = {
    setting: function(a, d, m) {
        this.index = a;
        this.isUsed = 1;
        this.data = d;
        this.txt = m;
        this.isOver = 0;
        this.startObj = {
            no: 2 * Math.random()
        };
        this.delayObj = {
            no: 0
        };
        this.overObj = {
            no: 0
        };
        this.delayLetter = {
            no: 0
        };
        this.total = this.data.length;
        this.obj = [];
        for (a = 0; a < this.total; a++) this.obj.push({
            no: 0
        })
    },
    dispose: function() {
        this.isOver = this.isUsed = 0;
        TweenLite.killTweensOf(this.startObj);
        TweenLite.killTweensOf(this.delayObj);
        TweenLite.killTweensOf(this.overObj);
        TweenLite.killTweensOf(this.delayLetter);
        var a, d;
        for (a = 0; a < this.total; a++) d = this.obj[a], TweenLite.killTweensOf(d);
        this.obj = [];
        this.titleTypo.clear();
        this.subTypo.clear();
        this.txt = this.data = null
    },
    show: function(a) {
        var d = this;
        0 == a ? (d.loop(d), d.lettersDelay(d)) : TweenLite.set(d.delayObj, {
            delay: a,
            onStart: function() {
                d.loop(d);
                d.lettersDelay(d)
            }
        })
    },
    hide: function() {
        var a, d;
        TweenLite.killTweensOf(this.startObj);
        TweenLite.killTweensOf(this.delayObj);
        TweenLite.killTweensOf(this.overObj);
        TweenLite.killTweensOf(this.delayLetter);
        for (a = 0; a < this.total; a++) d = this.obj[a],
            TweenLite.killTweensOf(d), TweenLite.to(d, 0.2, {
                no: 0,
                ease: Sine.easeOut
            });
        this.isOver = 0;
        TweenLite.to(this.overObj, 0.2, {
            no: 0,
            ease: Sine.easeIn
        });
        this.titleTypo.hide();
        this.subTypo.hide()
    },
    resize: function(a) {
        this.tx = UI.CANVAS_CENTER + a.x;
        this.ty = UI.CANVAS_CENTER + a.y;
        var d, m, k, p, h, n, g;
        4 == Address.sizeMode ? (d = a.x, m = a.y + UI.CANVAS_SIZE + 31, p = a.x, h = a.y + UI.CANVAS_SIZE + 17, k = "bold 12px " + UI.font, n = "bold 10px " + UI.font, g = 5) : 3 == Address.sizeMode ? (d = a.x, m = a.y + UI.CANVAS_SIZE + 31, p = a.x, h = a.y + UI.CANVAS_SIZE + 17, k = "bold 12px " +
            UI.font, n = "bold 10px " + UI.font, g = 5) : 2 == Address.sizeMode ? (d = a.x, m = a.y + UI.CANVAS_SIZE + 29, p = a.x, h = a.y + UI.CANVAS_SIZE + 15, k = "bold 12px " + UI.font, n = "bold 10px " + UI.font, g = 4) : 1 == Address.sizeMode ? (d = a.x, m = a.y + UI.CANVAS_SIZE + 26, p = a.x, h = a.y + UI.CANVAS_SIZE + 14, k = "bold 11px " + UI.font, n = "bold 9px " + UI.font, g = 3) : 0 == Address.sizeMode && (d = a.x, m = a.y + UI.CANVAS_SIZE + 23, p = a.x, h = a.y + UI.CANVAS_SIZE + 12, k = "bold 10px " + UI.font, n = "bold 8px " + UI.font, g = 2);
        this.titleTypo.resize(d, m, UI.CANVAS_SIZE, k, g);
        this.subTypo.resize(p, h,
            UI.CANVAS_SIZE, n, g)
    },
    load: function() {
        var a, d, m, k = this.total - 1,
            p = 2 / k,
            h = 0;
        TweenLite.killTweensOf(this.startObj);
        TweenLite.killTweensOf(this.delayObj);
        TweenLite.killTweensOf(this.overObj);
        TweenLite.killTweensOf(this.delayLetter);
        for (a = 0; a < this.total; a++) d = this.obj[a], a == k ? m = 0 : a == k - 1 ? m = 2 - h : (m = p, h += p), TweenLite.killTweensOf(d), TweenLite.to(d, 0.5, {
            no: m,
            ease: Cubic.easeInOut
        }), TweenLite.to(d, 0.5, {
            delay: 0.5,
            no: 0,
            ease: Cubic.easeInOut
        });
        TweenLite.to(this.startObj, 1, {
            no: this.start - 3,
            ease: Cubic.easeInOut
        });
        this.isOver =
            0;
        TweenLite.to(this.overObj, 0.2, {
            no: 0,
            ease: Sine.easeIn
        });
        this.titleTypo.hide();
        this.subTypo.hide()
    },
    lettersDelay: function(a) {
        TweenLite.set(a.delayLetter, {
            delay: 0.5,
            onStart: function() {
                a.letters(a)
            }
        })
    },
    letters: function(a) {
        a.titleTypo.start({
            text: a.txt.title,
            isColor: 1,
            step: 14,
            isEllipsis: 1,
            isUpperCase: 1
        });
        a.subTypo.start({
            text: a.txt.name,
            step: 12,
            isEllipsis: 1,
            isUpperCase: 1
        })
    },
    over: function() {
        this.isOver = 1;
        TweenLite.killTweensOf(this.overObj);
        TweenLite.to(this.overObj, 0.4, {
            no: UI.LINE_OVER_W,
            ease: Cubic.easeOut
        });
        this.titleTypo.start({
            text: this.txt.title,
            isColor: 1,
            step: 1,
            keepLength: 1,
            isEllipsis: 1,
            isUpperCase: 1
        })
    },
    out: function() {
        this.isOver && (this.isOver = 0, TweenLite.killTweensOf(this.overObj), TweenLite.to(this.overObj, 0.25, {
            no: 0,
            ease: Sine.easeIn
        }))
    },
    loop: function(a) {
        if (this.isUsed) {
            a.setPercent(a);
            var d, m;
            for (d = 0; d < a.total; d++) m = a.obj[d], TweenLite.killTweensOf(m), TweenLite.to(m, UI.TIME, {
                no: a.percents[d],
                ease: Cubic.easeInOut
            });
            TweenLite.killTweensOf(a.startObj);
            TweenLite.to(a.startObj, UI.TIME, {
                no: a.start,
                ease: Cubic.easeInOut
            });
            TweenLite.killTweensOf(a.delayObj);
            TweenLite.set(a.delayObj, {
                delay: UI.TIME,
                onStart: function() {
                    a.loop(a)
                }
            })
        }
    },
    drawLine: function() {
        if (this.isUsed) {
            this.ctx.save();
            this.ctx.lineWidth = UI.LINE_W;
            var a, d, m, k = this.startObj.no;
            for (a = 0; a < this.total; a++) d = this.data[a], m = this.obj[a].no, this.ctx.beginPath(), this.ctx.strokeStyle = d, this.ctx.arc(this.tx, this.ty, UI.CICLE_RADIUS, k * Math.PI, (m + k) * Math.PI, !1), k += m, this.ctx.stroke();
            this.ctx.restore();
            0 < this.overObj.no && (this.ctx.save(), this.ctx.beginPath(), this.ctx.strokeStyle =
                this.data[0], this.ctx.lineWidth = this.overObj.no, this.ctx.arc(this.tx, this.ty, (UI.CANVAS_SIZE - this.overObj.no) / 2, 0, 2 * Math.PI, !1), this.ctx.stroke(), this.ctx.restore());
            this.titleTypo.drawText();
            this.subTypo.drawText()
        }
    },
    addValue: function(a) {
        var d = Math.random();
        if (0.9 < d || 0 == d) d = 0.5;
        return a * d
    },
    setPercent: function(a) {
        var d, m = a.addValue(2),
            k = 0;
        a.percents = [];
        for (d = 0; d < a.total; d++) d == a.total - 1 ? a.percents.push(2 - k) : (k += m, a.percents.push(m), m = a.addValue(2 - k));
        a.percents = CMUtiles.shuffle(a.percents);
        a.start =
            2 * Math.random()
    }
};
UI.item = function(a) {
    this.dom = document.createElement("div");
    this.dom.className = "list-item";
    this.ctx = a;
    this.pos = {
        scale: 0,
        x: 0,
        y: 0
    };
    this.pos2 = {
        scale: 2
    };
    this.delayObj = {
        no: 0
    };
    this.vy = this.vx = this.mode = 0;
    this.friction = 0.99;
    this.gravity = 2.9;
    this.isShowing = this.sh = this.sw = 0;
    this.url;
    this.isLoading = this.isUsed = 0;
    this.line = new UI.line(a);
    var d = this;
    $(this.dom).on("click", function(a) {
        hasher.setHash(Address.URL_VIEW + "/" + d.url)
    });
    if ("pc" == CMDetect.DEVICE) $(this.dom).on("mouseenter", function(a) {
        List.thumbOver(d.index)
    }).on("mouseleave", function(a) {
        List.thumbOver(-1)
    });
    return this
};
UI.item.prototype = {
    setting: function(a, d, m, k, p, h, n, g) {
        this.index = a;
        this.isShowing = this.isUsed = 1;
        this.data = d;
        this.url = m;
        this.pos.scale = 0;
        this.pos2.scale = 2;
        this.resize(k, p, h);
        this.mode = this.isHide = 0;
        this.line.setting(a, n, g)
    },
    resize: function(a, d, m) {
        this.pos.x = a.x;
        this.pos.y = a.y;
        this.sw = d;
        this.sh = m;
        this.line.resize(a);
        this.drawPos();
        this.draw()
    },
    dispose: function() {
        this.isLoading = this.isHide = this.mode = this.isUsed = 0;
        this.isShowing = 1;
        this.vy = this.vx = 0;
        TweenLite.killTweensOf(this.pos);
        TweenLite.killTweensOf(this.pos2);
        TweenLite.killTweensOf(this.delayObj);
        CMUtiles.removeDom(this.dom);
        this.line.dispose()
    },
    show: function(a) {
        var d = this;
        this.isShowing = 1;
        TweenLite.to(this.pos, 1.4, {
            delay: a,
            scale: 1,
            ease: Elastic.easeOut,
            easeParams: [1.2]
        });
        TweenLite.to(this.pos2, 1.4, {
            delay: a,
            scale: 1,
            ease: Quad.easeOut,
            onComplete: function() {
                d.isShowing = 0
            }
        });
        this.line.show(a)
    },
    hide: function(a) {
        var d = this;
        this.isHide = 1;
        TweenLite.killTweensOf(this.delayObj);
        0 == a ? d.mode = 1 : TweenLite.set(this.delayObj, {
            delay: a,
            onStart: function() {
                d.mode = 1
            }
        });
        this.line.hide()
    },
    load: function() {
        var a = this;
        this.isLoading = this.isHide = this.isShowing = 1;
        TweenLite.killTweensOf(this.pos);
        TweenLite.killTweensOf(this.pos2);
        TweenLite.killTweensOf(this.delayObj);
        TweenLite.to(this.pos, 0.5, {
            delay: 0.5,
            scale: 0,
            ease: Back.easeIn,
            easeParams: [1.8]
        });
        TweenLite.to(this.pos2, 0.5, {
            delay: 0.5,
            scale: 2,
            ease: Sine.easeOut,
            onComplete: function() {
                List.checkHide(a.index)
            }
        });
        this.line.load()
    },
    over: function() {
        this.isHide || this.line.over()
    },
    out: function() {
        this.line.out()
    },
    move: function() {
        this.isLoading || (this.vx *= this.friction, this.vy *=
            this.friction, 1 == this.mode && (this.vy += this.gravity), this.pos.x += this.vx, this.pos.y += this.vy, (0 > this.pos.x + UI.THUMB_SIZE || this.pos.x > this.sw || this.pos.y > this.sh) && this.isHide && (this.isHide = 0, List.checkHide(this.index)))
    },
    draw: function() {
        if (this.isUsed && this.data) {
            var a = UI.THUMB_RADIUS * this.pos.scale,
                d = UI.THUMB_SIZE * this.pos2.scale,
                m = (UI.CANVAS_SIZE - d) / 2,
                k = m + this.pos.x,
                m = m + this.pos.y;
            this.isShowing ? this.drawZoom(k, m, d, a) : this.drawBounce(k, m, d);
            this.line.drawLine()
        }
    },
    drawPos: function() {
        this.dom.style[CMDetect.TRANSFORM] =
            "translate3d(" + this.pos.x + "px, " + this.pos.y + "px, 0px)"
    },
    drawZoom: function(a, d, m, k) {
        this.data && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(this.pos.x + UI.CANVAS_CENTER, this.pos.y + UI.CANVAS_CENTER, k, 0, UI.PI2, !0), this.ctx.closePath(), this.ctx.clip(), this.ctx.drawImage(this.data, a, d, m, m), this.ctx.strokeStyle = "#fff", this.ctx.lineWidth = 1, this.ctx.arc(this.pos.x + UI.CANVAS_CENTER, this.pos.y + UI.CANVAS_CENTER, k, 0, UI.PI2, !0), this.ctx.stroke(), this.ctx.restore())
    },
    drawBounce: function(a, d, m) {
        this.data &&
            (this.ctx.save(), this.ctx.drawImage(this.data, a, d, m, m), this.ctx.restore())
    }
};
UI.button = function(a, d) {
    this.svgHeader = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">';
    this.pathArrow = 'd="M26.6,23.8l6,5.8c0.5,0.5,1.4,0.5,1.9,0c0.5-0.5,0.5-1.3,0-1.8c0,0,0,0,0,0L26,19.5 c0,0-0.1-0.1-0.1-0.1c-0.3-0.3-0.6-0.4-1-0.4c-0.4,0-0.7,0.1-1,0.4c0,0-0.1,0.1-0.1,0.1l-8.5,8.2c-0.5,0.5-0.5,1.3-0.1,1.8 c0,0,0,0,0.1,0.1c0.5,0.5,1.4,0.5,1.9,0l6.3-6.1c0.4-0.5,0.8-0.8,1.3-1C25.6,22.8,26.1,23.3,26.6,23.8z"';
    this.pathPlay =
        'd="M19.9,15.5c0.6-0.6,1.6-0.6,2.2,0c0,0,0,0,0,0l11.3,8.4c0.6,0.6,0.6,1.7,0,2.3l-11.3,8.4 c-0.6,0.6-1.6,0.6-2.2,0c0,0,0,0,0,0"';
    this.pathPause = 'd="M29.1,16L29.1,16c1.1,0,2,0.9,2,2v14c0,1.1-0.9,2-2,2l0,0c-1.1,0-2-0.9-2-2 V18C27.1,16.9,28,16,29.1,16z M20.9,16L20.9,16c1.1,0,2,0.9,2,2v14c0,1.1-0.9,2-2,2l0,0 c-1.1,0-2-0.9-2-2V18C18.9,16.9,19.8,16,20.9,16z"';
    this.pathFull = 'd="M33.8,21l-1.6-1.6l-3.9,4.2l-1.8-1.8l3.9-3.9l-1.6-1.6c0-0.7,0.6-1.2,1.2-1.2h3.8 c0.7,0,1.2,0.6,1.2,1.2v3.5C35,20.4,34.4,21,33.8,21z M21.2,33.7c0,0.7-0.6,1.2-1.2,1.2h-3.8c-0.7,0-1.2-0.6-1.2-1.2v-3.5 c0-0.7,0.6-1.2,1.2-1.2l1.6,1.6l3.9-4.2l1.8,1.8l-3.9,3.9L21.2,33.7z M16.2,21l1.6-1.6l3.9,4.2l1.8-1.8l-3.9-3.9l1.6-1.6 c0-0.7-0.6-1.2-1.2-1.2h-3.8c-0.7,0-1.2,0.6-1.2,1.2v3.5C15,20.4,15.6,21,16.2,21z M28.8,33.7c0,0.7,0.6,1.2,1.2,1.2h3.8 c0.7,0,1.2-0.6,1.2-1.2v-3.5c0-0.7-0.6-1.2-1.2-1.2l-1.6,1.6l-3.9-4.2l-1.8,1.8l3.9,3.9L28.8,33.7z"';
    this.pathNormal = 'd="M22.3,17.6l-1.6,1.6L16.8,15L15,16.8l3.9,3.9l-1.6,1.6c0,0.7,0.6,1.2,1.2,1.2h3.8c0.7,0,1.2-0.6,1.2-1.2v-3.5 C23.5,18.1,23,17.6,22.3,17.6z M22.3,26.5h-3.8c-0.7,0-1.2,0.6-1.2,1.2l1.6,1.6L15,33.2l1.8,1.8l3.9-4.2l1.6,1.6c0.7,0,1.2-0.6,1.2-1.2v-3.5 C23.5,27,23,26.5,22.3,26.5z M32.7,27.7c0-0.7-0.6-1.2-1.2-1.2h-3.8c-0.7,0-1.2,0.6-1.2,1.2v3.5c0,0.7,0.6,1.2,1.2,1.2l1.6-1.6l3.9,4.2 l1.8-1.8l-3.9-3.9L32.7,27.7z M27.7,23.5h3.8c0.7,0,1.2-0.6,1.2-1.2l-1.6-1.6l3.9-3.9L33.2,15l-3.9,4.2l-1.6-1.6c-0.7,0-1.2,0.6-1.2,1.2v3.5 C26.5,23,27,23.5,27.7,23.5z"';
    this.pathVolume = 'd="M27.5,19.4c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.3,3.7,3.5-0.1,8.4c-0.4,0.4-0.3,1.1,0.2,1.4c0.4,0.3,1.1,0.3,1.4-0.2 c5.1-6.6-0.1-11.2-0.1-11.2C28.5,18.9,27.8,19,27.5,19.4z M30.1,16c-0.4,0.4-0.3,1.1,0.1,1.4c0.3,0.3,7,6.2-0.1,15.3c-0.3,0.4-0.3,1.1,0.2,1.4c0.4,0.3,1.1,0.3,1.4-0.2 c8.3-10.6-0.1-18.1-0.1-18.1C31.1,15.5,30.5,15.5,30.1,16z M23.7,18.6c-0.3-0.2-0.7-0.1-1.1,0.1l0,0c0,0-4.4,3-4.7,3.2h-3v0.6v5v0.6h3c0.3,0.2,4.7,3.2,4.7,3.2 c0.4,0.3,0.8,0.3,1.1,0.1c0.3-0.2,0.5-0.5,0.5-1V19.5C24.2,19.1,24,18.7,23.7,18.6z"';
    this.pathMute = 'd="M23.7,18.6c-0.3-0.2-0.7-0.1-1.1,0.1l0,0c0,0-4.4,3-4.7,3.2h-3v0.6v5v0.6h3c0.3,0.2,4.7,3.2,4.7,3.2 c0.4,0.3,0.8,0.3,1.1,0.1c0.3-0.2,0.5-0.5,0.5-1V19.5C24.2,19.1,24,18.7,23.7,18.6z"';
    this.pathVimeo = 'd="M17.8,21.5c0.4,0,0.7-0.1,1-0.4c0.3-0.2,0.4-0.5,0.4-0.8c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.2-0.3-0.3-0.6-0.3 c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.5,0.5-0.5,0.8C16.9,21.2,17.2,21.5,17.8,21.5z M40.3,23.1c-0.4-0.5-0.9-0.7-1.7-0.7c-1.2,0-2.1,0.4-2.9,1.3c-0.7,0.8-1,1.6-1,2.5c0,0.1,0,0.1,0,0.2 c0,0-0.1,0-0.1,0.1c-0.9,0.4-1.7,0.6-2.5,0.6c-0.4,0-0.7-0.1-0.9-0.4c1-0.2,1.9-0.6,2.6-1.2c0.6-0.6,0.9-1.1,0.9-1.7 c-0.1-0.8-0.6-1.3-1.7-1.3c-1.1,0-2.1,0.4-2.9,1.3c-0.8,0.8-1.1,1.6-1.1,2.4c0,0.1,0,0.3,0,0.4c-0.2,0.1-0.3,0.2-0.4,0.2 c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.5c0-0.1,0.1-0.4,0.2-1c0.1-0.6,0.2-1,0.2-1.3c0-0.4-0.1-0.8-0.3-1 c-0.2-0.3-0.6-0.4-1.1-0.4c-0.4,0-0.8,0.2-1.2,0.5c-0.2,0.2-0.5,0.4-0.7,0.7c-0.1,0.1-0.2,0.1-0.2,0.2c0-0.4-0.1-0.8-0.3-1 c-0.2-0.3-0.6-0.4-1.1-0.4c-0.6,0.1-1.1,0.3-1.6,0.7c-0.2,0.2-0.4,0.4-0.6,0.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.6-0.3-0.9 c-0.2-0.2-0.4-0.4-0.7-0.3c-0.2,0-0.5,0.2-0.9,0.6c-0.6,0.6-0.9,0.9-1,0.9l0.4,0.4c0.3-0.2,0.5-0.3,0.5-0.3c0.1,0,0.2,0.1,0.1,0.3 c0,0.3-0.1,0.7-0.1,1.1c-0.1,0.3-0.1,0.6-0.1,0.8c0,0,0,0,0,0c-0.4,0.3-0.6,0.5-0.8,0.5c-0.3,0-0.5-0.2-0.5-0.7 c0.2-1,0.3-1.8,0.4-2.5c0-0.4,0-0.7-0.2-0.9c-0.2-0.2-0.4-0.3-0.8-0.3c-0.2,0-0.6,0.2-1,0.6c-0.2,0.1-0.3,0.3-0.5,0.4 c0-0.7-0.4-1.1-1-1.2c-1,0-1.6,0.5-2,1.7c0.2-0.1,0.4-0.1,0.5-0.1c0.4,0,0.5,0.2,0.5,0.6c0,0.2-0.2,0.6-0.5,1.1 c-0.3,0.5-0.5,0.7-0.7,0.7c-0.2,0-0.4-0.4-0.5-1.1c-0.1-0.2-0.1-0.8-0.3-1.6c-0.1-0.8-0.5-1.2-1-1.1c-0.2,0-0.6,0.2-1,0.6 c-0.3,0.3-0.7,0.6-1,0.9l0.3,0.4c0.3-0.2,0.5-0.3,0.6-0.3c0.2,0,0.5,0.4,0.7,1.1c0.2,0.7,0.4,1.4,0.6,2.1c0.3,0.8,0.6,1.1,1,1.1 c0.7,0,1.5-0.6,2.4-1.9c0.7-0.9,1.1-1.6,1.3-2.2c0.3-0.2,0.4-0.3,0.5-0.3c0.2,0,0.3,0.1,0.3,0.4c0,0.1-0.1,0.4-0.3,1.2 c-0.2,0.7-0.3,1.3-0.3,1.6c0,0.3,0.1,0.6,0.2,0.8c0.2,0.2,0.4,0.3,0.8,0.3c0.7,0,1.4-0.3,2.1-0.9c0.1-0.1,0.1-0.1,0.2-0.2 c0.1,0.2,0.2,0.4,0.3,0.6c0.3,0.3,0.8,0.5,1.5,0.5c-0.1-0.2-0.1-0.6-0.1-1.2c0-0.7,0.2-1.3,0.5-1.9c0.3-0.6,0.6-0.9,0.9-0.9 c0.3,0,0.5,0.2,0.4,0.6c0,0.3-0.1,0.6-0.2,0.9c-0.1,0.3-0.1,0.7-0.2,1c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.8,0.4,1.6,0.4 c-0.1-0.2-0.2-0.6-0.1-1c0-0.6,0.2-1.3,0.7-2c0.4-0.7,0.7-1,1-1c0.3,0,0.4,0.2,0.4,0.6c0,0.3-0.1,0.6-0.2,1.1 c-0.1,0.5-0.2,0.9-0.2,1.2c0,0.8,0.3,1.1,1,1.1c0.7,0,1.4-0.3,2.1-0.9c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0.4,0.6,1,0.9,1.8,0.9 c1.2,0,2.3-0.3,3.4-1c0.1-0.1,0.2-0.1,0.4-0.2c0.1,0.1,0.2,0.3,0.3,0.4c0.4,0.5,1.1,0.8,1.9,0.8c1,0,1.8-0.4,2.5-1.1 c0.7-0.7,1-1.5,1.1-2.5C40.8,24.2,40.7,23.6,40.3,23.1z M31.1,26c0-0.1,0-0.2,0-0.2c0-0.4,0.2-0.8,0.5-1.3c0.3-0.4,0.6-0.7,1-0.7 c0.2,0,0.4,0.1,0.3,0.4c0,0.2-0.2,0.5-0.5,0.8C32,25.5,31.6,25.8,31.1,26z M39,24.8c0,0.5-0.2,1-0.5,1.5c-0.3,0.6-0.7,0.8-1.2,0.8 c-0.2,0-0.4-0.1-0.5-0.3c-0.1-0.2-0.2-0.4-0.1-0.7c0-0.5,0.2-1,0.5-1.5c0.3-0.6,0.8-0.9,1.3-0.9c0.2,0,0.3,0.1,0.4,0.4 C39,24.3,39,24.5,39,24.8z"';
    this.pathYoutube = 'd="M37.2,25.4c0-0.5-0.1-0.7-0.5-0.7c-0.4,0-0.5,0.2-0.5,0.7V26l1,0V25.4z M32.8,24.7c-0.2,0-0.4,0.1-0.6,0.3l0,3.6c0.2,0.2,0.4,0.3,0.6,0.3c0.3,0,0.4-0.2,0.4-0.8v-2.5 C33.3,24.8,33.1,24.7,32.8,24.7z M39.6,22.3c0,0-0.2-1.2-0.7-1.7c-0.7-0.7-1.4-0.7-1.8-0.7c-2.5-0.2-6.2-0.2-6.2-0.2h0c0,0-3.7,0-6.2,0.2 c-0.3,0-1.1,0-1.8,0.7c-0.5,0.5-0.7,1.7-0.7,1.7s-0.2,1.4-0.2,2.8v1.3c0,1.4,0.2,2.8,0.2,2.8s0.2,1.2,0.7,1.7 c0.7,0.7,1.6,0.7,1.9,0.8c1.4,0.1,6,0.2,6,0.2s3.7,0,6.2-0.2c0.3,0,1.1,0,1.8-0.7c0.5-0.5,0.7-1.7,0.7-1.7s0.2-1.4,0.2-2.8v-1.3 C39.8,23.8,39.6,22.3,39.6,22.3z M26,29.7h-1.2v-6.8h-1.2v-1.1l3.7,0v1.1H26V29.7z M30.3,29.7h-1.1V29c-0.4,0.5-0.8,0.7-1.2,0.7 c-0.3,0-0.6-0.2-0.7-0.5c-0.1-0.2-0.1-0.5-0.1-0.9v-4.7h1.1v4.4c0,0.3,0,0.4,0,0.4c0,0.2,0.1,0.2,0.2,0.2c0.2,0,0.4-0.2,0.6-0.5 v-4.5h1.1V29.7z M34.4,27.9c0,0.5,0,0.9-0.1,1.2c-0.1,0.4-0.5,0.7-0.9,0.7c-0.4,0-0.8-0.2-1.1-0.7l0,0.6h-1.1v-7.9h1.1l0,2.6 c0.3-0.4,0.7-0.7,1.1-0.7c0.4,0,0.7,0.2,0.9,0.7c0.1,0.2,0.1,0.6,0.1,1.2V27.9z M36.7,28.8c0.3,0,0.4-0.1,0.5-0.4c0-0.1,0-0.3,0-0.7 h1.1v0.2c0,0.3,0,0.6,0,0.7c0,0.2-0.1,0.5-0.3,0.6c-0.3,0.4-0.7,0.6-1.3,0.6c-0.6,0-1-0.2-1.3-0.6c-0.2-0.3-0.4-0.7-0.4-1.4v-2.1 c0-0.6,0.1-1.1,0.4-1.4c0.3-0.4,0.7-0.6,1.3-0.6c0.5,0,1,0.2,1.3,0.6c0.2,0.3,0.3,0.8,0.3,1.4l0,1.2h-2.1V28 C36.2,28.5,36.4,28.8,36.7,28.8z M20.1,28.3c-0.2,0.3-0.4,0.5-0.6,0.5c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.2,0-0.4v-4.4h-1.1v4.7 c0,0.4,0.1,0.7,0.1,0.9c0.1,0.3,0.4,0.5,0.7,0.5c0.4,0,0.8-0.2,1.2-0.7v0.7h1.1v-6h-1.1V28.3z M15.7,23.7c-0.5,0-0.9,0.2-1.2,0.6c-0.2,0.3-0.4,0.8-0.4,1.4l0,2.1c0,0.6,0.1,1.1,0.3,1.4 c0.3,0.4,0.8,0.6,1.3,0.6s1-0.2,1.3-0.6c0.2-0.3,0.3-0.7,0.3-1.4v-2.1c0-0.6-0.1-1.1-0.4-1.4C16.6,23.8,16.2,23.7,15.7,23.7z M15.7,28.8c-0.3,0-0.5-0.3-0.5-0.9v-2.4c-0.1-0.6,0.1-0.9,0.5-0.9c0.3,0,0.5,0.3,0.5,0.9l0,2.4C16.2,28.5,16,28.8,15.7,28.8z M13.1,21.7l-0.8,3.1l-0.8-3.1h-1.2c0.3,0.7,1.5,4.7,1.5,4.7v3.3h1.2v-3.3l1.5-4.7H13.1z"';
    this.pathClose = 'd="M28.3,26.6c-0.5-0.5-1-1.1-1.3-1.7c0.2-0.5,0.6-1,1-1.4l6.1-6.3c0.5-0.5,0.5-1.4,0-1.9c0,0,0,0,0,0 c-0.5-0.5-1.3-0.5-1.8,0l-7.8,8l-7.8-8c-0.5-0.5-1.3-0.5-1.8,0c0,0,0,0,0,0c-0.5,0.5-0.5,1.4,0,1.9l6.1,6.3c0.4,0.4,0.8,0.8,1,1.4 c-0.3,0.6-0.8,1.2-1.3,1.7l-5.8,6c-0.5,0.5-0.5,1.4,0,1.9c0.5,0.5,1.3,0.5,1.8,0c0,0,0,0,0,0l7.8-8l7.8,8c0,0,0,0,0,0 c0.5,0.5,1.3,0.5,1.8,0c0.5-0.5,0.5-1.4,0-1.9L28.3,26.6z"';
    this.pathTwitter = 'd="M30.6,30.3c0,0.5-0.2,0.9-0.5,1.2c-0.3,0.3-0.8,0.5-1.2,0.5h-3.1c-1.5,0-2.7-0.5-3.7-1.5c-1-1-1.6-2.3-1.6-3.7 v-7c0-0.5,0.2-0.9,0.5-1.2c0.4-0.3,0.8-0.5,1.3-0.5c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.5,0.8,0.5,1.2v1.8h4.8c0.5,0,0.9,0.2,1.2,0.5 c0.3,0.3,0.5,0.8,0.5,1.2c0,0.5-0.2,0.9-0.5,1.2c-0.3,0.3-0.8,0.5-1.2,0.5h-4.8v1.7c0,0.5,0.2,0.9,0.5,1.2c0.3,0.3,0.8,0.5,1.2,0.5 h3.1c0.5,0,0.9,0.2,1.2,0.5C30.4,29.4,30.6,29.8,30.6,30.3z"';
    this.pathFacebook = 'd="M28.8,22.4h-2.7v-1.8c0-0.7,0.4-0.8,0.7-0.8c0.3,0,1.9,0,1.9,0v-2.9l-2.6,0c-2.9,0-3.6,2.2-3.6,3.6v1.9h-1.7v3 h1.7c0,3.9,0,8.5,0,8.5h3.5c0,0,0-4.7,0-8.5h2.4L28.8,22.4z"';
    this.pathGplus = 'd="M26.2,17.4c-0.3,0-4.3,0-4.3,0s-4.4,0.1-4.4,3.8c0,3.7,3.9,3.3,3.9,3.3s0,0.6,0,0.9c0,0.4,0.5,0.3,0.6,1 c-0.3,0-5.3-0.1-5.3,3.2s4.5,3.2,4.5,3.2s5.2,0.2,5.2-4c0-2.5-3-3.3-3-4.3c0-1,2.2-1.3,2.2-3.7c0-1.4-0.1-2.3-1.3-2.8 C24.2,17.8,26.2,18,26.2,17.4z M24.8,29.3c0.1,1.3-1.3,2.5-3.1,2.6c-1.8,0.1-3.3-0.8-3.4-2.2c-0.1-1.3,1.3-2.5,3.1-2.6 C23.2,27,24.7,28,24.8,29.3z M22.2,23.6c-1.1,0.3-2.3-0.7-2.7-2.2c-0.4-1.5,0.1-2.9,1.2-3.2c1.1-0.3,2.3,0.7,2.7,2.2 C23.8,21.9,23.2,23.3,22.2,23.6z M 31.5,20.4 31.5,17.9 30.3,17.9 30.3,20.4 27.8,20.4 27.8,21.6 30.3,21.6 30.3,24 31.5,24 31.5,21.6 34,21.6 34,20.4 z"';
    this.pathPinterest = 'd="M33.1,24c0.4,0,0.9-0.4,0.9-0.8c0.1-0.4-0.2-0.8-0.7-0.8c-0.4,0-0.9,0.4-0.9,0.8C32.3,23.6,32.6,24,33.1,24z M35.8,26.4c0.1-0.3,0.2-0.7,0.3-1.1c0.5,0,0.9,0,0.9,0c0.1,0,0.2-0.1,0.2-0.2c0-0.2,0.1-0.5,0.1-0.6 c0-0.1,0-0.2-0.2-0.2c0,0-0.9,0-0.9,0s0.4-1.7,0.4-1.7c0-0.2-0.1-0.3-0.2-0.2c0,0-0.7,0.1-0.8,0.2c-0.1,0-0.2,0.1-0.3,0.3 c0,0-0.4,1.5-0.4,1.5s-0.7,0-0.7,0c-0.1,0-0.2,0.1-0.2,0.2c0,0.2-0.1,0.5-0.1,0.6c0,0.1,0,0.2,0.2,0.2c0,0,0.3,0,0.7,0 c0,0-0.3,1-0.5,1.8c0,0.1,0,0.1,0,0.2l0,0c-0.2,0.7-0.7,1.2-1.2,1.2c-0.3,0-0.4-0.2-0.4-0.5c0-0.3,0.2-0.9,0.4-1.7 c0.2-0.9,0.4-1.7,0.5-1.8c0-0.1,0-0.2-0.2-0.2c-0.2,0-0.7,0-0.9,0c-0.2,0-0.2,0.1-0.2,0.2c0,0-0.2,0.9-0.5,2 c-0.2,0.8-0.4,1.5-0.4,1.9c0,0.6,0.3,1.1,1.1,1.1c0.6,0,1.3-0.3,1.7-0.7c0,0,0,0,0,0c0.1,0.4,0.5,0.7,1.1,0.7 c0.3,0,0.6-0.1,0.9-0.2c0.6-0.3,1-0.9,1.2-1.6c0-0.1,0-0.1-0.1-0.1c-0.1,0-0.4,0-0.4,0c-0.1,0-0.1,0-0.2,0.1 c-0.1,0.4-0.3,0.8-0.8,0.8c-0.2,0-0.3-0.1-0.3-0.2c0-0.1,0-0.1,0-0.2C35.4,27.8,35.6,27.2,35.8,26.4z M22,24c0.4,0,0.9-0.4,0.9-0.8c0.1-0.4-0.2-0.8-0.7-0.8c-0.4,0-0.9,0.4-0.9,0.8C21.3,23.6,21.6,24,22,24z M16.9,20.3c-2.8,0-4.3,2-4.3,3.7c0,1,0.4,1.9,1.2,2.3c0.1,0.1,0.3,0,0.3-0.1c0-0.1,0.1-0.4,0.1-0.5 c0-0.1,0-0.2-0.1-0.3c-0.2-0.3-0.4-0.6-0.4-1.2c0-1.5,1.1-2.9,2.9-2.9c1.6,0,2.5,1,2.5,2.3c0,1.7-0.8,3.2-1.9,3.2 c-0.6,0-1.1-0.5-0.9-1.1c0.2-0.8,0.5-1.6,0.5-2.1c0-0.5-0.3-0.9-0.8-0.9c-0.6,0-1.1,0.7-1.1,1.5c0,0.6,0.2,0.9,0.2,0.9 s-0.7,2.8-0.8,3.2c-0.2,1,0,2.1,0,2.3c0,0.1,0.1,0.1,0.1,0c0.1-0.1,0.8-1,1.1-2c0.1-0.3,0.4-1.6,0.4-1.6c0.2,0.4,0.8,0.7,1.5,0.7 c1.9,0,3.2-1.7,3.2-4.1C20.6,22,19.1,20.3,16.9,20.3z M29,27.6c-0.1,0-0.4,0-0.4,0c0,0,0,0,0,0v0c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.1c-0.1,0.4-0.3,0.8-0.8,0.8 c-0.1,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.5,0.5-1.9,0.5-2.5c0-0.8-0.4-1.3-1.3-1.3c-0.6,0-1.1,0.4-1.4,0.7 c0,0,0.1-0.3,0.1-0.4c0-0.1,0-0.2-0.2-0.2c-0.2,0-0.7,0-0.9,0c-0.2,0-0.2,0.1-0.3,0.2c0,0-0.3,1.3-0.6,2.5c0,0.1-0.1,0.2-0.1,0.3 c-0.2,0.7-0.7,1.2-1.2,1.2c-0.3,0-0.4-0.2-0.4-0.5c0-0.3,0.2-0.9,0.4-1.7c0.2-0.9,0.4-1.7,0.5-1.8c0-0.1,0-0.2-0.2-0.2 c-0.2,0-0.7,0-0.9,0c-0.2,0-0.2,0.1-0.2,0.2c0,0-0.2,0.9-0.5,2c-0.2,0.8-0.4,1.5-0.4,1.9c0,0.6,0.3,1.1,1.1,1.1 c0.6,0,1.1-0.3,1.4-0.7c0,0,0,0,0,0c-0.1,0.2-0.1,0.3-0.1,0.4c0,0.1,0,0.2,0.2,0.2c0.2,0,0.7,0,0.9,0c0.2,0,0.2-0.1,0.2-0.2 c0-0.1,0.7-2.8,0.7-2.8c0.2-0.7,0.6-1.2,1.2-1.2c0.3,0,0.5,0.2,0.5,0.6c0,0.4-0.5,1.9-0.5,2.5c0,0.3,0.1,0.7,0.3,0.9l0,0 c0,0,0,0,0.1,0c0.2,0.1,0.4,0.2,0.7,0.2c0.4,0,0.7-0.1,1-0.3c0.5-0.3,0.9-0.8,1.1-1.5C29.2,27.6,29.1,27.6,29,27.6z"';
    this.pathOK = 'd="M25,25.3c0,0.9-0.2,1.6-0.5,2.3s-0.8,1.2-1.3,1.5c-0.6,0.4-1.2,0.5-2,0.5c-0.7,0-1.4-0.2-2-0.5c-0.6-0.4-1-0.9-1.3-1.5 s-0.5-1.4-0.5-2.3v-0.4c0-0.9,0.2-1.6,0.5-2.3c0.3-0.7,0.8-1.2,1.3-1.5s1.2-0.5,2-0.5s1.4,0.2,2,0.5c0.6,0.4,1,0.9,1.3,1.5 c0.3,0.7,0.5,1.4,0.5,2.3V25.3z M23.1,24.9c0-0.9-0.2-1.6-0.5-2.1c-0.3-0.5-0.8-0.7-1.4-0.7c-0.6,0-1.1,0.2-1.4,0.7 c-0.3,0.5-0.5,1.2-0.5,2.1v0.4c0,0.9,0.2,1.6,0.5,2.1c0.3,0.5,0.8,0.8,1.4,0.8c0.6,0,1.1-0.2,1.4-0.7c0.3-0.5,0.5-1.2,0.5-2.1V24.9z M29.1,25.9l-1,1v2.5h-1.8v-8.9h1.8v4l0.8-1.1l2.3-2.9h2.3l-3.2,3.9l3.2,4.9h-2.2L29.1,25.9z"';
    this.pathRepeat = 'd="M30.7,19c0-0.1-0.1-0.2-0.1-0.2l-2.5-2.2c0,0,0,0,0,0l-2.5-2.2c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0 c-0.1,0.1-0.2,0.2-0.2,0.4v2.7l-4.3,0c-4,0-7.7,4.9-5.3,10.5c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0.1c0.3,0.4,0.7,0.8,1.3,0.8 c0.8,0,1.5-0.7,1.5-1.5c0-0.2,0-0.4-0.1-0.5l0,0c-1.9-4.2,1.1-6.6,2.6-6.6h4.3v3.1c0,0.2,0.1,0.4,0.2,0.4c0,0,0,0,0.1,0 c0,0,0.1,0,0.1-0.1l2.5-2.2l2.5-2.2c0,0,0,0,0.1-0.1C30.7,19.4,30.7,19.2,30.7,19z M19.3,31c0,0.1,0.1,0.2,0.1,0.2l2.5,2.2c0,0,0,0,0,0l2.5,2.2c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0 c0.1-0.1,0.2-0.2,0.2-0.4v-2.7l4.3,0c4,0,7.7-4.9,5.3-10.5c0-0.1-0.1-0.1-0.1-0.2c0,0,0,0,0-0.1c-0.3-0.4-0.7-0.8-1.3-0.8 c-0.8,0-1.5,0.7-1.5,1.5c0,0.2,0,0.4,0.1,0.5l0,0c1.9,4.2-1.1,6.6-2.6,6.6h-4.3v-3.1c0-0.2-0.1-0.4-0.2-0.4c0,0,0,0-0.1,0 c0,0-0.1,0-0.1,0.1L22,28.3l-2.5,2.2c0,0,0,0-0.1,0.1C19.3,30.6,19.3,30.8,19.3,31z"';
    this.path5X = 'd="M15.8,20.4c0.1-0.6,0.5-1.1,1.1-1.1h5c0.6,0,1.1,0.3,1.1,1.1c0,0.8-0.5,1.1-1.1,1.1h-4.3L17.2,24l0,0 c0.6-0.5,1.5-0.8,2.3-0.8c2.1,0,4,1.3,4,3.9c0,2.7-1.9,4.2-4.6,4.2c-2.9,0-4-1.5-4-2.4c0-0.7,0.5-1.2,1.2-1.2c1,0,1,1.6,2.8,1.6 c1.3,0,2.1-1.1,2.1-2.1c0-1.4-1-2.1-2.3-2.1c-1.3,0-1.7,0.8-2.6,0.8c-0.6,0-1.2-0.3-1.2-1.1c0-0.3,0-0.6,0.1-0.9L15.8,20.4z M28.8,24.8l-2.6-3.9c-0.2-0.3-0.3-0.5-0.3-0.8c0-0.7,0.6-1.3,1.4-1.3c0.7,0,1,0.4,1.1,0.7l2,3.4l2.1-3.4 c0.3-0.5,0.5-0.7,1.1-0.7c0.7,0,1.3,0.4,1.3,1.2c0,0.2-0.1,0.6-0.3,0.7l-2.8,4.1l2.7,4.1c0.3,0.4,0.5,0.7,0.5,1 c0,0.9-0.6,1.4-1.4,1.4c-0.5,0-0.8-0.1-1.2-0.6l-2.2-3.7l-2.4,3.8c-0.2,0.4-0.7,0.5-1.1,0.5c-0.8,0-1.3-0.5-1.3-1.2 c0-0.3,0-0.6,0.4-1.1L28.8,24.8z"';
    this.path1X = 'd="M18.9,23.4h-2.2c-0.6,0-0.9-0.2-0.9-0.9c0-0.6,0.3-0.8,1.2-1l0.6-0.1c1.9-0.4,1.3-2.3,2.8-2.3c0.5,0,1,0.2,1,1.1v9.5 c0,0.9-0.3,1.5-1.3,1.5c-0.9,0-1.3-0.6-1.3-1.5V23.4z M27.8,24.8l-2.6-3.9c-0.2-0.3-0.3-0.5-0.3-0.8c0-0.7,0.6-1.3,1.4-1.3c0.7,0,1,0.4,1.1,0.7l2,3.4l2.1-3.4 c0.3-0.5,0.5-0.7,1.1-0.7c0.7,0,1.3,0.4,1.3,1.2c0,0.2-0.1,0.6-0.3,0.7l-2.8,4.1l2.7,4.1c0.3,0.4,0.5,0.7,0.5,1 c0,0.9-0.6,1.4-1.4,1.4c-0.5,0-0.8-0.1-1.2-0.6l-2.2-3.7L27,30.7c-0.2,0.4-0.7,0.5-1.1,0.5c-0.8,0-1.3-0.5-1.3-1.2 c0-0.3,0-0.6,0.4-1.1L27.8,24.8z"';
    this.pathGIF = 'd="M22.8,29.4c0,0.4-0.3,0.8-0.8,0.8c-0.6,0-0.8-0.4-1-1.3c-0.6,0.8-1.5,1.3-3,1.3c-3.5,0-4.8-2.4-4.8-5.2 c0-3.4,2.1-5.2,5.2-5.2c2.5,0,3.8,1.5,3.8,2.4c0,0.8-0.6,1-1.1,1c-1.1,0-0.7-1.6-2.9-1.6c-1.6,0-2.8,1-2.8,3.5c0,2,1,3.3,2.8,3.3 c1.2,0,2.2-0.8,2.4-2h-1.5c-0.5,0-1-0.2-1-0.9c0-0.6,0.3-0.9,0.9-0.9h2.8c0.7,0,0.9,0.3,0.9,1V29.4z M24.8,21c0-0.7,0.4-1.1,1.1-1.1c0.7,0,1.1,0.5,1.1,1.1v8c0,0.7-0.4,1.1-1.1,1.1c-0.7,0-1.1-0.5-1.1-1.1V21z M29.3,21.4c0-1,0.5-1.3,1.3-1.3h5c0.7,0,1.1,0.2,1.1,0.9c0,0.7-0.5,0.9-1.1,0.9h-4v2.3h3.4c0.6,0,1.1,0.2,1.1,0.9 s-0.5,0.9-1.1,0.9h-3.4V29c0,0.7-0.4,1.1-1.1,1.1s-1.1-0.5-1.1-1.1V21.4z"';
    this.pathDribbble = 'd="M25,39.3c-7.9,0-14.3-6.4-14.3-14.3c0-7.9,6.4-14.3,14.3-14.3c7.9,0,14.3,6.4,14.3,14.3C39.3,32.9,32.9,39.3,25,39.3 L25,39.3z M37.1,27c-0.4-0.1-3.8-1.1-7.6-0.5c1.6,4.4,2.3,8,2.4,8.7C34.6,33.3,36.5,30.4,37.1,27L37.1,27z M29.8,36.3 c-0.2-1.1-0.9-4.8-2.6-9.3c0,0-0.1,0-0.1,0c-6.9,2.4-9.4,7.2-9.6,7.6c2.1,1.6,4.7,2.6,7.5,2.6C26.7,37.2,28.3,36.9,29.8,36.3 L29.8,36.3z M15.9,33.2c0.3-0.5,3.6-6,9.9-8.1c0.2-0.1,0.3-0.1,0.5-0.1c-0.3-0.7-0.6-1.4-1-2.1c-6.1,1.8-12,1.8-12.6,1.7 c0,0.1,0,0.2,0,0.4C12.8,28.2,14,31,15.9,33.2L15.9,33.2z M13,22.5c0.5,0,5.6,0,11.3-1.5c-2-3.6-4.2-6.6-4.5-7.1 C16.4,15.6,13.8,18.7,13,22.5L13,22.5z M22.1,13.1c0.3,0.5,2.6,3.5,4.6,7.2c4.4-1.6,6.2-4.1,6.4-4.4c-2.2-1.9-5-3.1-8.1-3.1 C24,12.8,23.1,12.9,22.1,13.1L22.1,13.1z M34.5,17.3c-0.3,0.3-2.3,3-6.8,4.8c0.3,0.6,0.6,1.2,0.8,1.8c0.1,0.2,0.2,0.4,0.3,0.6 c4.1-0.5,8.1,0.3,8.5,0.4C37.2,22,36.2,19.4,34.5,17.3L34.5,17.3z"';
    this.pathDots = 'd="M22.5,17a2.5,2.5 0 1,0 5,0a2.5,2.5 0 1,0 -5,0 M22.5,33a2.5,2.5 0 1,0 5,0a2.5,2.5 0 1,0 -5,0 M14.5,25a2.5,2.5 0 1,0 5,0a2.5,2.5 0 1,0 -5,0 M30.5,25a2.5,2.5 0 1,0 5,0a2.5,2.5 0 1,0 -5,0"';
    this.id = a;
    this.isChange = d;
    this.dom = document.createElement("div");
    this.overDom = document.createElement("div");
    this.overDom.className = "bt-icon bt-over";
    this.overDomI = document.createElement("i");
    this.outDom = document.createElement("div");
    this.outDom.className = "bt-icon bt-out";
    this.lineDom = document.createElement("div");
    this.lineDom.className = "bt-line";
    this.dom.appendChild(this.outDom);
    this.dom.appendChild(this.overDom);
    this.overDom.appendChild(this.overDomI);
    0 < this.isChange && (this.overDom2 = document.createElement("div"), this.overDom2.className = "bt-icon bt-over", this.overDomI2 = document.createElement("i"), this.outDom2 = document.createElement("div"), this.outDom2.className = "bt-icon bt-out", this.dom.appendChild(this.outDom2), this.dom.appendChild(this.overDom2), this.overDom2.appendChild(this.overDomI2));
    1 < this.isChange &&
        (this.overDom3 = document.createElement("div"), this.overDom3.className = "bt-icon bt-over", this.overDomI3 = document.createElement("i"), this.outDom3 = document.createElement("div"), this.outDom3.className = "bt-icon bt-out", this.dom.appendChild(this.outDom3), this.dom.appendChild(this.overDom3), this.overDom3.appendChild(this.overDomI3));
    this.dom.appendChild(this.lineDom);
    var m = this;
    if ("pc" == CMDetect.DEVICE) $(this.dom).on("mouseenter", function(a) {
        m.onOver(a)
    }).on("mouseleave", function(a) {
        m.onOut(a)
    });
    return this
};
UI.button.prototype = {
    setArrow: function(a, d) {
        this.dom.className = d;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathArrow + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathArrow + "/></svg>";
        var m = this.overDomI.getElementsByTagName("svg")[0],
            k = this.outDom.getElementsByTagName("svg")[0];
        switch (a) {
            case 1:
                this.overDomI.className = "ani-tb";
                break;
            case 2:
                this.overDomI.className = "ani-tb";
                m.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) rotate(180deg)";
                k.style[CMDetect.TRANSFORM] =
                    "translate3d(0px, 0px, 0px) rotate(180deg)";
                break;
            case 3:
                this.overDomI.className = "ani-lr";
                m.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) rotate(90deg)";
                k.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) rotate(90deg)";
                break;
            case 4:
                this.overDomI.className = "ani-lr", m.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) rotate(-90deg)", k.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) rotate(-90deg)"
        }
        this.setting()
    },
    setPlay: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML =
            this.svgHeader + "<path " + this.pathPlay + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathPlay + "/></svg>";
        this.overDomI2.innerHTML = this.svgHeader + "<path " + this.pathPause + "/></svg>";
        this.outDom2.innerHTML = this.svgHeader + "<path " + this.pathPause + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.overDomI2.className = "ani-lr";
        this.setting()
    },
    setDots: function(a) {
        this.dom.className = a;
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathDots + "/></svg>";
        this.setting()
    },
    setFull: function(a) {
        this.dom.className =
            a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathFull + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathFull + "/></svg>";
        this.overDomI2.innerHTML = this.svgHeader + "<path " + this.pathNormal + "/></svg>";
        this.outDom2.innerHTML = this.svgHeader + "<path " + this.pathNormal + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.overDomI2.className = "ani-lr";
        this.setting()
    },
    setVolume: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathVolume + "/></svg>";
        this.outDom.innerHTML =
            this.svgHeader + "<path " + this.pathVolume + "/></svg>";
        this.overDomI2.innerHTML = this.svgHeader + "<path " + this.pathMute + "/></svg>";
        this.outDom2.innerHTML = this.svgHeader + "<path " + this.pathMute + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.overDomI2.className = "ani-lr";
        this.setting()
    },
    setVimeo: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathVimeo + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathVimeo + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.setting()
    },
    setYoutube: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathYoutube + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathYoutube + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.setting()
    },
    setGif: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathGIF + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathGIF + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.setting()
    },
    setDribbble: function(a) {
        this.dom.className =
            a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathDribbble + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathDribbble + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.setting()
    },
    setClose: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathClose + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathClose + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.setting()
    },
    setTwitter: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML =
            this.svgHeader + "<path " + this.pathTwitter + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathTwitter + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.setting()
    },
    setFacebook: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathFacebook + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathFacebook + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.setting()
    },
    setGplus: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader +
            "<path " + this.pathGplus + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathGplus + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.setting()
    },
    setPinterest: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathPinterest + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathPinterest + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.setting()
    },
    setOK: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.pathOK +
            "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.pathOK + "/></svg>";
        this.overDomI.className = "ani-tb";
        this.setting()
    },
    setRepeat: function(a) {
        this.dom.className = a;
        this.overDomI.innerHTML = this.svgHeader + "<path " + this.path5X + "/></svg>";
        this.outDom.innerHTML = this.svgHeader + "<path " + this.path5X + "/></svg>";
        this.overDomI2.innerHTML = this.svgHeader + "<path " + this.pathRepeat + "/></svg>";
        this.outDom2.innerHTML = this.svgHeader + "<path " + this.pathRepeat + "/></svg>";
        this.overDomI3.innerHTML = this.svgHeader +
            "<path " + this.path1X + "/></svg>";
        this.outDom3.innerHTML = this.svgHeader + "<path " + this.path1X + "/></svg>";
        this.overDomI.className = "ani-lr";
        this.overDomI2.className = "ani-lr";
        this.overDomI3.className = "ani-lr";
        this.setting()
    },
    setting: function(a) {
        0 < this.isChange && this.change(0);
        this.overDom.style[CMDetect.DURATION] = "0s";
        this.overDom.style.opacity = 0;
        this.outDom.style[CMDetect.DURATION] = "0s";
        this.outDom.style.opacity = 1;
        this.overDom2 && (this.overDom2.style[CMDetect.DURATION] = "0s", this.overDom2.style.opacity =
            0, this.outDom2.style[CMDetect.DURATION] = "0s", this.outDom2.style.opacity = 1);
        this.overDom3 && (this.overDom3.style[CMDetect.DURATION] = "0s", this.overDom3.style.opacity = 0, this.outDom3.style[CMDetect.DURATION] = "0s", this.outDom3.style.opacity = 1)
    },
    onOver: function(a) {
        a = UI.easeExpo;
        this.overDom.style[CMDetect.DURATION] = ".4s";
        this.overDom.style[CMDetect.TIMING] = a;
        this.overDom.style.opacity = 1;
        this.outDom.style[CMDetect.DURATION] = ".4s";
        this.outDom.style[CMDetect.TIMING] = a;
        0 < this.isChange && (this.overDom2.style[CMDetect.DURATION] =
            ".4s", this.overDom2.style[CMDetect.TIMING] = a, this.overDom2.style.opacity = 1, this.outDom2.style[CMDetect.DURATION] = ".4s", this.outDom2.style[CMDetect.TIMING] = a, 1 < this.isChange && (this.overDom3.style[CMDetect.DURATION] = ".4s", this.overDom3.style[CMDetect.TIMING] = a, this.overDom3.style.opacity = 1, this.outDom3.style[CMDetect.DURATION] = ".4s", this.outDom3.style[CMDetect.TIMING] = a))
    },
    onOut: function(a) {
        a = UI.easeExpo;
        this.overDom.style[CMDetect.DURATION] = ".4s";
        this.overDom.style[CMDetect.TIMING] = a;
        this.overDom.style.opacity =
            0;
        this.outDom.style[CMDetect.DURATION] = ".4s";
        this.outDom.style[CMDetect.TIMING] = a;
        0 < this.isChange && (this.overDom2.style[CMDetect.DURATION] = ".4s", this.overDom2.style[CMDetect.TIMING] = a, this.overDom2.style.opacity = 0, this.outDom2.style[CMDetect.DURATION] = ".4s", this.outDom2.style[CMDetect.TIMING] = a, 1 < this.isChange && (this.overDom3.style[CMDetect.DURATION] = ".4s", this.overDom3.style[CMDetect.TIMING] = a, this.overDom3.style.opacity = 0, this.outDom3.style[CMDetect.DURATION] = ".4s", this.outDom3.style[CMDetect.TIMING] =
            a))
    },
    change: function(a) {
        1 == a ? (this.overDom.style.visibility = "hidden", this.outDom.style.visibility = "hidden", this.overDom2.style.visibility = "visible", this.outDom2.style.visibility = "visible", 1 < this.isChange && (this.overDom3.style.visibility = "hidden", this.outDom3.style.visibility = "hidden")) : 0 == a ? (this.overDom.style.visibility = "visible", this.outDom.style.visibility = "visible", this.overDom2.style.visibility = "hidden", this.outDom2.style.visibility = "hidden", 1 < this.isChange && (this.overDom3.style.visibility = "hidden",
            this.outDom3.style.visibility = "hidden")) : 2 == a && (this.overDom.style.visibility = "hidden", this.outDom.style.visibility = "hidden", this.overDom2.style.visibility = "hidden", this.outDom2.style.visibility = "hidden", 1 < this.isChange && (this.overDom3.style.visibility = "visible", this.outDom3.style.visibility = "visible"))
    }
};
UI.search = function() {
    this.dom = document.createElement("li");
    this.icon = document.createElement("i");
    this.p = document.createElement("p");
    this.span = document.createElement("span");
    this.span.className = "search-result-txt";
    this.dom.appendChild(this.icon);
    this.dom.appendChild(this.p);
    this.typo = new NYTypo("#fff");
    this.isUsed = 0;
    var a = this;
    if ("pc" == CMDetect.DEVICE) $(this.dom).on("mouseenter", function(d) {
        a.onOver(d)
    }).on("mouseleave", function(d) {
        a.onOut(d)
    });
    $(this.dom).on("click", function(d) {
        a.onClick(d)
    });
    return this
};
UI.search.prototype = {
    setting: function(a, d, m) {
        this.index = a;
        this.isUsed = 1;
        this.text = d;
        this.url = m;
        this.span.innerHTML = this.text;
        this.p.appendChild(this.span)
    },
    dispose: function() {
        this.isUsed = 0;
        this.span.innerHTML = "";
        this.typo.clear();
        CMUtiles.removeDom(this.span);
        CMUtiles.removeDom(this.dom)
    },
    onOver: function(a) {
        CMUtiles.removeDom(this.span);
        this.typo.start({
            dom: this.p,
            text: this.text,
            isColor: 1,
            step: 1,
            keepLength: 1,
            isEllipsis: 1,
            yGap: 8
        });
        this.icon.className = "ani-lr"
    },
    onOut: function(a) {
        this.icon.className =
            ""
    },
    onClick: function(a) {
        hasher.setHash(Address.URL_VIEW + "/" + this.url)
    }
};
UI.screen = function() {
    this.dom = document.createElement("div");
    this.dom.className = "screen-item";
    this.loading = new UI.loading(1);
    this.bg = document.createElement("div");
    this.bg.className = "screen-bg";
    this.bgimg = document.createElement("div");
    this.bgimg.className = "screen-bg-img";
    this.bg.appendChild(this.bgimg);
    this.dom.appendChild(this.bg);
    this.isHide = this.isUsed = 0;
    this.img = this.tween = this.data = null;
    this.tpos = {
        x: 0,
        y: 0
    };
    return this
};
UI.screen.prototype = {
    setting: function(a, d, m, k, p, h, n) {
        this.isUsed = 1;
        this.isHide = 0;
        this.data = a;
        this.resize(d, m, k, p, h, n);
        if (-1 < this.data.no) {
            this.loading && (this.loading.init(), this.dom.appendChild(this.loading.canvas));
            this.img = new Image;
            this.img.src = this.data.data.img.big;
            var g = this;
            $(this.img).on("load", function() {
                g.img && (g.bgimg.style.backgroundImage = "url(" + g.img.src + ")", g.bg.style.opacity = 1, g.bgimg.style[CMDetect.DURATION] = "10s", g.bgimg.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scale(1.2)")
            })
        } else this.bg.innerHTML =
            '<div class="error-view"><p>404 ERROR</p><h3>NO VIDEO</h3></div>', this.bg.style.opacity = 1
    },
    hide: function() {
        this.isHide = 1
    },
    chageShow: function() {
        var a = this;
        this.tween = TweenLite.delayedCall(0.3, function() {
            a.isHide || (a.dom.style[CMDetect.DURATION] = "1s", a.dom.style[CMDetect.TIMING] = UI.easeExpo, a.dom.style[CMDetect.TRANSFORM] = "translate3d(" + a.tpos.x + "px, " + a.tpos.y + "px, 0px) scale(1)", a.tween = null)
        })
    },
    chageHide: function(a) {
        this.isHide = 1;
        this.tween && TweenLite.killDelayedCallsTo(this.tween);
        var d = this.tpos.x -
            this.sw;
        a && (d = this.tpos.x + this.sw);
        this.dom.style[CMDetect.DURATION] = "0.4s";
        this.dom.style[CMDetect.TIMING] = "cubic-bezier(0.47, 0, 0.745, 0.715)";
        this.dom.style[CMDetect.TRANSFORM] = "translate3d(" + d + "px, " + this.tpos.y + "px, 0px) scale(0.7)";
        var m = this;
        TweenLite.delayedCall(0.6, function() {
            m.dispose()
        })
    },
    clearLoading: function() {
        this.loading && this.loading.hide();
        this.bgimg.style[CMDetect.DURATION] = "0.2s";
        this.bgimg.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scale(1)"
    },
    dispose: function() {
        this.tween &&
            TweenLite.killDelayedCallsTo(this.tween);
        this.img && ($(this.img).off("load"), this.img.src = "", this.img = null);
        this.bg.innerHTML = "";
        this.bg.appendChild(this.bgimg);
        this.bg.style.opacity = 0;
        this.bgimg.style[CMDetect.DURATION] = "0s";
        this.bgimg.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scale(1)";
        this.bgimg.style.backgroundImage = null; - 1 < this.data.no && this.loading && this.loading.dispose();
        this.isHide = this.isUsed = 0;
        this.data = null;
        CMUtiles.removeDom(this.dom)
    },
    resize: function(a, d, m, k, p, h) {
        if (!this.isHide) {
            this.sw =
                a;
            this.sh = d;
            var n = ScreenInfo.getGapY();
            a > d && (n = 0); - 1 == this.data.no ? (a = m, d = k - n) : (a = this.data.data.video.w, d = this.data.data.video.h);
            m = CMUtiles.getFitSize(m, k - n, a, d);
            this.tpos.x = m.x;
            this.tpos.y = m.y + n;
            this.dom.style.width = m.w + "px";
            this.dom.style.height = m.h + "px";
            this.dom.style[CMDetect.DURATION] = "0s";
            p ? (p = this.tpos.x + this.sw, h && (p = this.tpos.x - this.sw), this.dom.style[CMDetect.TRANSFORM] = "translate3d(" + p + "px, " + this.tpos.y + "px, 0px) scale(0.6)") : this.dom.style[CMDetect.TRANSFORM] = "translate3d(" + this.tpos.x +
                "px, " + this.tpos.y + "px, 0px) scale(1)"
        }
    }
};
UI.side = function() {
    this.dom = document.createElement("div");
    this.dom.className = "side-item";
    this.url = null;
    this.isUsed = 0;
    this.pos = {
        x: 0,
        y: 0
    };
    this.overObj = {
        no: 6
    };
    this.isShowed = 0;
    var a = this;
    $(this.dom).on("click", function(d) {
        SideControl.onClickSide(a.url)
    });
    a = this;
    if ("pc" == CMDetect.DEVICE) $(this.dom).on("mouseenter", function(d) {
        a.over()
    }).on("mouseleave", function(d) {
        a.out()
    });
    return this
};
UI.side.prototype = {
    setting: function(a, d, m, k, p, h) {
        this.isUsed = 1;
        this.parent = a;
        this.ctx = d;
        this.index = m;
        this.data = k;
        this.url = this.data.info.id;
        this.tx = p;
        this.tx2 = p + 140 * this.index;
        this.pos.x = this.tx2;
        this.pos.y = 0;
        this.overObj.no = 3;
        this.parent.appendChild(this.dom);
        this.dom.style.zIndex = h;
        this.dom.style[CMDetect.TRANSFORM] = "translate3d(" + this.tx + "px, 0px, 0px)";
        this.draw()
    },
    dispose: function() {
        TweenLite.killTweensOf(this.pos);
        TweenLite.killTweensOf(this.overObj);
        this.overObj.no = 3;
        this.isShowed = this.isUsed =
            0;
        this.url = this.data = null;
        CMUtiles.removeDom(this.dom)
    },
    show: function() {
        if (!this.isShowed) {
            this.isShowed = 1;
            var a = Math.abs(this.index),
                d = 0.02 * a + 0.5;
            TweenLite.killTweensOf(this.pos);
            TweenLite.to(this.pos, d, {
                delay: 0.01 * a,
                x: this.tx,
                ease: Back.easeOut,
                easeParams: [1.8]
            })
        }
    },
    hide: function() {
        this.isShowed = 0;
        TweenLite.killTweensOf(this.pos);
        this.pos.x = this.tx2;
        TweenLite.killTweensOf(this.overObj);
        this.overObj.no = 3
    },
    over: function() {
        TweenLite.killTweensOf(this.overObj);
        TweenLite.to(this.overObj, 0.4, {
            no: 12,
            ease: Cubic.easeOut
        })
    },
    out: function() {
        TweenLite.killTweensOf(this.overObj);
        TweenLite.to(this.overObj, 0.25, {
            no: 3,
            ease: Sine.easeIn
        })
    },
    draw: function() {
        this.ctx.save();
        this.ctx.drawImage(this.data.img.thumb, this.pos.x, this.pos.y, 130, 130);
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#fff";
        this.ctx.lineWidth = this.overObj.no;
        this.ctx.arc(this.pos.x + 65, this.pos.y + 65, 65 - this.overObj.no / 2, 0, UI.PI2, !0);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore()
    }
};
var Menu = Menu || function() {
    function a() {
        var a;
        d();
        b = Address.sizeMode;
        0 == b && (u = 3);
        for (a = 0; 3 > a; a++) z[a].start({
            dom: r[a],
            text: J[a],
            isColor: 1,
            step: 20,
            yGap: u
        })
    }

    function d() {
        H && "Booounce" != w && (w = "Booounce", s.start({
            dom: g,
            text: "Booounce",
            isColor: 1,
            step: 16
        }))
    }

    function m(a) {
        a = a.currentTarget.getAttribute("data-id") | 0;
        z[a].start({
            dom: r[a],
            text: J[a],
            isColor: 1,
            step: 6,
            keepLength: 1,
            yGap: u
        })
    }

    function k(a) {
        switch (a.currentTarget.getAttribute("data-id") | 0) {
            case 0:
                p();
                break;
            case 1:
                hasher.setHash(Address.URL_SUBMIT);
                break;
            case 2:
                hasher.setHash(Address.URL_ABOUT)
        }
    }

    function p() {
        var a = Address.savePage;
        Address.curURL == Address.URL_VIEW && (a = Address.getPage());
        hasher.setHash(Address.URL_LIST + "/" + a)
    }
    var h, n, g, r = [],
        s, z, w = "",
        t, v, y = 0,
        b = 4,
        u = 7,
        H = 0,
        J = ["Motions", "Submit", "About"];
    return {
        init: function(a) {
            h = document.getElementById("logo");
            n = document.getElementById("menu");
            v = n.getElementsByTagName("li");
            var b, d;
            for (b = 0; 3 > b; b++) {
                d = v[b];
                r[b] = d.getElementsByTagName("p")[0];
                if ("pc" == CMDetect.DEVICE) $(d).on("mouseenter", m);
                $(d).on("click",
                    k)
            }
            h.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42 38" style="enable-background:new 0 0 42 38;" xml:space="preserve"><polygon class="lb" points="16.2,19.5 16.2,37.9 16.2,37.9 24.8,33.2 24.8,14.8 "/><polygon class="lg" points="0,0 0,28.2 0,28.3 12,35.4 16.2,37.9 16.2,19.5 16.2,9.7 "/><polygon class="ly" points="24.8,14.8 24.8,14.8 24.8,33.2 41,24.4 "/></svg>';
            h.style.visibility = "visible";
            g = document.createElement("p");
            h.appendChild(g);
            h.style[CMDetect.DURATION] = "0s";
            h.style[CMDetect.TRANSFORM] = "translate3d(" + t + "px, -110px, 0px)";
            n.style[CMDetect.DURATION] = "0s";
            n.style[CMDetect.TRANSFORM] = "translate3d(" + -t + "px, -110px, 0px)";
            s = new NYTypo;
            z = [new NYTypo, new NYTypo, new NYTypo];
            Search.init(n);
            Help.init(n, a)
        },
        show: function() {
            H = 1;
            n.style[CMDetect.DURATION] = ".6s";
            h.style[CMDetect.DURATION] = ".6s";
            h.style[CMDetect.TIMING] = UI.easeExpo;
            n.style[CMDetect.TIMING] = UI.easeExpo;
            h.style[CMDetect.TRANSFORM] = "translate3d(" + t + "px, " +
                y + "px, 0px)";
            n.style[CMDetect.TRANSFORM] = "translate3d(" + -t + "px, " + y + "px, 0px)";
            Search.show();
            Help.show();
            TweenLite.delayedCall(0.3, a)
        },
        resize: function(a) {
            t = a.xpos;
            if (b != Address.sizeMode && s)
                for (b = Address.sizeMode, s.resize(0), u = 7, 0 == b && (u = 3), a = 0; 3 > a; a++) z[a].resize(u);
            4 == Address.sizeMode ? y = 0 : 3 == Address.sizeMode ? y = -10 : 2 == Address.sizeMode ? y = -20 : 1 == Address.sizeMode ? y = -20 : 0 == Address.sizeMode && (y = -20);
            d();
            H && (h.style[CMDetect.TRANSFORM] = "translate3d(" + t + "px, " + y + "px, 0px)", n.style[CMDetect.TRANSFORM] = "translate3d(" +
                -t + "px, " + y + "px, 0px)");
            Search.resize();
            Help.resize()
        },
        check: function() {
            var a = -1;
            switch (Address.curURL) {
                case Address.URL_LIST:
                    a = 0;
                    break;
                case Address.URL_SUBMIT:
                    a = 1;
                    break;
                case Address.URL_ABOUT:
                    a = 2
            }
            var b, d;
            for (b = 0; 3 > b; b++) d = z[b], b == a ? d.colorChange("#eeeeee") : d.colorChange("#292a2a")
        },
        goBackToList: p
    }
}();
var Search = Search || function() {
    function a() {
        ga && (J.style.width = X + 30 + "px", G.style.width = X + "px", K.style.width = X + "px", K.style[CMDetect.TRANSFORM] = "translate3d(" + -X + "px, 0px, 0px)", A.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scale(0)", v.style.width = X + 30 + "px", v.style[CMDetect.TRANSFORM] = "translate3d(" + (226 - X) + "px, 0px, 0px)", H = 32 * U + 16, v.style.height = H + "px", N && s(), k(0, 1))
    }

    function d(a) {
        if (N) {
            a = W.value;
            CMUtiles.isBlankString(a) && (a = "");
            var b = CMUtiles.escapeRegExChars(a);
            if (N) {
                var d, g;
                a = [];
                var h =
                    RegExp(b, "i");
                for (d = 0; d < ga; d++)(g = h.test(Q[d])) && a.push(d);
                m();
                if ("" == b) k(0);
                else {
                    g = a.length;
                    for (b = 0; b < g; b++) {
                        d = a[b];
                        b: {
                            for (var h = void 0, p = ea.length, n = void 0, h = 0; h < p; h++)
                                if (n = ea[h], !n.isUsed) {
                                    h = n;
                                    break b
                                }
                            n = new UI.search;
                            ea.push(n);
                            h = n
                        }
                        h.setting(d, Q[d], S[d]);
                        y.appendChild(h.dom);
                        O[b] = h
                    }
                    k(g)
                }
            }
        }
    }

    function m() {
        var a, b, d = O.length;
        for (a = 0; a < d; a++) b = O[a], b.dispose();
        O = []
    }

    function k(a, d) {
        var g, h = 0.2;
        g = H - (32 * a + 16);
        0 == a ? (g = H, v.style.pointerEvents = "none", d && (h = 0), b.style[CMDetect.DURATION] = h + "s", y.style[CMDetect.DURATION] =
            h + "s", b.style[CMDetect.TIMING] = "cubic-bezier(0.55, 0.055, 0.675, 0.19)", y.style[CMDetect.TIMING] = "cubic-bezier(0.55, 0.055, 0.675, 0.19)") : (v.style.pointerEvents = "auto", b.style[CMDetect.DURATION] = ".4s", y.style[CMDetect.DURATION] = ".4s", b.style[CMDetect.TIMING] = UI.easeExpo, y.style[CMDetect.TIMING] = UI.easeExpo);
        0 > g && (g = 0);
        b.style[CMDetect.TRANSFORM] = "translate3d(0px, " + -g + "px, 0px)";
        u.style[CMDetect.TRANSFORM] = "translate3d(0px, " + g + "px, 0px)"
    }

    function p(a) {
        N || (w.className = "search-icon ani-lr")
    }

    function h(a) {
        w.className =
            "search-icon"
    }

    function n(a) {
        t.className = "ani-lr"
    }

    function g(a) {
        t.className = ""
    }

    function r(a) {
        Y && (N ? s() : N || (N = 1, C.style[CMDetect.TRANSFORM] = "translate3d(3px, 0px, 0px)", J.style[CMDetect.TRANSFORM] = "translate3d(" + -X + "px, 0px, 0px)", I.style[CMDetect.TRANSFORM] = "translate3d(" + X + "px, 0px, 0px)", K.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px)", A.style[CMDetect.DELAY] = ".25s", A.style[CMDetect.DURATION] = ".3s", A.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scale(1)", W.focus(), Address.curURL ==
            Address.URL_LIST ? List.openSearch() : Address.curURL == Address.URL_VIEW && ScreenInfo.openSearch(), h()))
    }

    function s() {
        N && (N = 0, C.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px)", J.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px)", I.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px)", K.style[CMDetect.TRANSFORM] = "translate3d(" + -X + "px, 0px, 0px)", A.style[CMDetect.DELAY] = "0s", A.style[CMDetect.DURATION] = "0s", A.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scale(0)", W.blur(), k(0), m(), $(W).val(""),
            Address.curURL == Address.URL_LIST ? List.closeSearch() : Address.curURL == Address.URL_VIEW && ScreenInfo.closeSearch(), g())
    }
    var z, w, t, v, y, b, u, H, J, C, N = 0,
        G, I, K, A, W, Q, S, ga = 0,
        O = [],
        ea = [],
        fa = 4,
        Y = 0,
        X = 238,
        U = 12;
    return {
        init: function(m) {
            z = m;
            J = z.getElementsByClassName("search")[0];
            C = J.getElementsByClassName("sic-i")[0];
            w = C.getElementsByTagName("i")[0];
            J.getElementsByClassName("search-input-con");
            J.getElementsByClassName("sic-h");
            G = J.getElementsByClassName("sic-m")[0];
            K = G.getElementsByTagName("p")[0];
            W = G.getElementsByTagName("input")[0];
            I = J.getElementsByClassName("sic-f")[0];
            A = J.getElementsByClassName("sic-c")[0];
            t = A.getElementsByTagName("i")[0];
            v = z.getElementsByClassName("search-list")[0];
            b = v.getElementsByClassName("sl-move")[0];
            u = b.getElementsByClassName("sl-move")[0];
            y = u.getElementsByTagName("ul")[0];
            J.style[CMDetect.DURATION] = ".3s";
            J.style[CMDetect.TIMING] = UI.easeExpo;
            I.style[CMDetect.DURATION] = ".3s";
            I.style[CMDetect.TIMING] = UI.easeExpo;
            K.style[CMDetect.DURATION] = ".3s";
            K.style[CMDetect.TIMING] = UI.easeExpo;
            A.style[CMDetect.DURATION] =
                ".3s";
            A.style[CMDetect.TIMING] = UI.easeExpo;
            C.style[CMDetect.DURATION] = ".3s";
            C.style[CMDetect.TIMING] = UI.easeExpo;
            $(u).mCustomScrollbar({
                axis: "y",
                theme: "minimal"
            });
            Q = Model.getTitle();
            S = Model.getURL();
            ga = Q.length;
            "pc" == CMDetect.DEVICE && ($(C).on("mouseenter", p).on("mouseleave", h), $(A).on("mouseenter", n).on("mouseleave", g));
            $(C).on("click", r);
            $(A).on("click", r);
            $(W).on("keyup", d);
            fa = Address.sizeMode;
            a();
            k(0)
        },
        show: function() {
            Y = 1;
            J.style.visibility = "visible";
            v.style.visibility = "visible";
            v.style.pointerEvents =
                "none"
        },
        resize: function() {
            fa != Address.sizeMode && (fa = Address.sizeMode, 2 > fa ? (X = 210, U = 7) : (X = 238, U = 12), a())
        },
        hideSearch: s,
        onSearch: r,
        getIsSearch: function() {
            return N
        }
    }
}();
var Help = Help || function() {
    function a() {
        z.style[CMDetect.DURATION] = ".3s";
        z.style.opacity = 1;
        v.style[CMDetect.DURATION] = ".6s";
        v.style[CMDetect.TIMING] = UI.easeExpo;
        v.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scale(1)"
    }

    function d() {
        y && (y = 0, TweenLite.killDelayedCallsTo(a), TweenLite.killDelayedCallsTo(m), z.style[CMDetect.DURATION] = ".2s", z.style.opacity = 0, v.style[CMDetect.DURATION] = ".2s", v.style[CMDetect.TIMING] = "cubic-bezier(0.47, 0, 0.745, 0.715)", v.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scale(1.1)",
            TweenLite.delayedCall(0.2, m))
    }

    function m() {
        w.onOut();
        CMUtiles.removeDom(z)
    }

    function k(a) {
        r.className = "ani-lr"
    }

    function p(a) {
        r.className = ""
    }

    function h(b) {
        y ? d() : y || (y = 1, TweenLite.killDelayedCallsTo(a), TweenLite.killDelayedCallsTo(m), z.style[CMDetect.DURATION] = "0s", z.style.opacity = 0, v.style[CMDetect.DURATION] = "0s", v.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scale(1.2)", g.appendChild(z), TweenLite.delayedCall(0.1, a))
    }
    var n, g, r, s, z, w, t, v, y = 0;
    return {
        init: function(a, d) {
            n = a;
            g = d;
            s = n.getElementsByClassName("help")[0];
            r = s.getElementsByTagName("i")[0];
            z = document.createElement("div");
            z.className = "help-dom";
            w = new UI.button("help-close");
            w.setClose("circle-button big light help-close");
            z.appendChild(w.dom);
            t = document.createElement("div");
            t.className = "help-img";
            v = document.createElement("div");
            v.className = "help-box";
            v.innerHTML = '<div class="swipe-dom"><i></i><p>Swipe for next/prev on touch screen</p></div><ul class="key-dom"><li><div class="key-icon"><i class="ki-f"></i></div><p>Full screen (if supported)</p></li><li><div class="key-icon"><i class="ki-v"></i></div><p>Volume on/off (if supported)</p></li><li><div class="key-icon"><i class="ki-s"></i></div><p>Search</p></li><li><div class="key-icon"><i class="ki-top"></i><i class="ki-down"></i></div><p>Next/Prev on the list</p></li><li><div class="key-icon"><i class="ki-left"></i><i class="ki-right"></i></div><p>Next/Prev on the view</p></li><li><div class="key-icon"><i class="ki-space"></i></div><p>Play/Pause the video</p></li></ul>';
            t.appendChild(v);
            z.appendChild(t);
            if ("pc" == CMDetect.DEVICE) $(s).on("mouseenter", k).on("mouseleave", p);
            $(s).on("click", h);
            $(w.dom).on("click", h);
            $(t).on("click", h)
        },
        show: function() {
            s.style.visibility = "visible"
        },
        resize: function() {},
        onClick: h,
        hideHelp: d,
        getIsHelp: function() {
            return y
        }
    }
}();
var List = List || function() {
    function a(a) {
        z.appendChild(v);
        y.style[CMDetect.DURATION] = "0s";
        y.style[CMDetect.TRANSFORM] = 0 == Address.sizeMode ? "translate3d(" + -(J + 120) + "px, 0px, 0px)" : "translate3d(70px, 0px, 0px)";
        z.appendChild(y);
        K = Model.getData();
        A = K.length;
        (Q = a - 1) || (Q = 0);
        T = ga = 0;
        O = X.xnum;
        ea = X.ynum;
        fa = Address.sizeMode;
        k();
        $(b.dom).on("click", r);
        $(u.dom).on("click", s);
        g();
        m();
        TweenLite.delayedCall(1, d)
    }

    function d() {
        y.style[CMDetect.DURATION] = ".6s";
        y.style[CMDetect.TRANSFORM] = "translate3d(" + J + "px, 0px, 0px)";
        U = 1;
        Address.hammertime.on("swipe", n)
    }

    function m() {
        if (!T) {
            ia = window.requestAnimationFrame(m);
            t.fillRect(0, 0, V, P);
            var a, b, d, g, h, k, n, p;
            if (1 == ga) {
                for (n = 0; n < I - 1; n++)
                    for (a = G[n], p = n + 1; p < I; p++) b = G[p], d = b.pos.x - a.pos.x, g = b.pos.y - a.pos.y, h = Math.sqrt(d * d + g * g), k = UI.THUMB_SIZE, h < k && (g = Math.atan2(g, d), d = a.pos.x + Math.cos(g) * k, k = a.pos.y + Math.sin(g) * k, d = 0.9 * (d - b.pos.x) + 10 * Math.random(), k = 0.9 * (k - b.pos.y) + 10 * Math.random(), a.vx -= d, a.vy -= k, b.vx += d, b.vy += k);
                for (n = 0; n < I; n++) a = G[n], a.move(), a.draw()
            } else
                for (n = 0; n < W; n++) a =
                    C[n], a.draw()
        }
    }

    function k() {
        ga = 0;
        var a, b, d, h, k, m, n;
        a = X.xnum * X.ynum;
        S = Math.ceil(A / a);
        Q >= S && (Q = S - 1);
        W = a + a * Q > A ? A - a * Q : a;
        C = [];
        for (b = 0; b < W; b++) {
            m = Q * a + b;
            d = CMUtiles.getWallPosition(b, X.xnum, UI.CANVAS_SIZE + X.xgap, UI.CANVAS_SIZE + X.ygap);
            d.x += X.xpos;
            d.y += X.ypos;
            n = K[m].lines;
            k = K[m].info;
            m = K[m].img.thumb;
            a: {
                h = void 0;
                var r = N.length,
                    s = void 0;
                for (h = 0; h < r; h++)
                    if (s = N[h], !s.isUsed) {
                        h = s;
                        break a
                    }
                s = new UI.item(t);
                N.push(s);
                h = s
            }
            h.setting(b, m, k.id, d, V, P, n, k);
            v.appendChild(h.dom);
            C.push(h);
            d = 0.07 * b;
            h.show(d)
        }
        TweenLite.delayedCall(d,
            p);
        g()
    }

    function p() {
        Address.able()
    }

    function h(a) {
        ga = 1;
        G = C;
        I = W;
        C = [];
        W = 0;
        var b, d, g, h = [];
        for (b = 0; b < ea; b++) {
            g = [];
            for (d = 0; d < O; d++) g[d] = d;
            g = CMUtiles.shuffle(g);
            for (d = 0; d < O; d++) h.push(0.05 * (g[d] + b * O))
        }
        Y = [];
        for (b = 0; b < I; b++) d = G[b], g = h[b], Y[b] = 1, b == a ? d.load() : d.hide(g)
    }

    function n(a) {
        Address.getAble() && (16 == a.direction ? r() : 8 == a.direction && s())
    }

    function g() {
        H.innerHTML = Q + 1 + "/" + S;
        Address.savePage = Q + 1
    }

    function r(a) {
        U && (a = Q - 1, 0 > a && (a = 0), hasher.setHash(Address.URL_LIST + "/" + (a + 1)))
    }

    function s(a) {
        U && (a = Q + 1, a == S && (a =
            S - 1), hasher.setHash(Address.URL_LIST + "/" + (a + 1)))
    }
    var z, w, t, v, y, b, u, H, J = 0,
        C = [],
        N = [],
        G = [],
        I, K, A, W, Q, S = 1,
        ga = 0,
        O = 0,
        ea = 0,
        fa = -1,
        Y = [],
        X = null,
        U = 0,
        T = 1,
        ia, V, P;
    return {
        init: function(a) {
            z = a;
            v = document.createElement("div");
            v.id = "canvas-container";
            v.className = "nodrag";
            w = document.createElement("canvas");
            t = w.getContext("2d");
            t.fillStyle = "#ffffff";
            v.appendChild(w);
            y = document.createElement("div");
            y.className = "bt-con nodrag";
            H = document.createElement("div");
            H.className = "paging-num";
            b = new UI.button("list-prev");
            b.setArrow(1,
                "circle-button big dark prev");
            u = new UI.button("list-next");
            u.setArrow(2, "circle-button big dark next");
            y.appendChild(b.dom);
            y.appendChild(u.dom);
            y.appendChild(H);
            y.style[CMDetect.TIMING] = UI.easeExpo
        },
        resize: function(a, b, d) {
            X = a;
            V = b;
            P = d;
            J = 0 == Address.sizeMode ? a.xpos : 0;
            w.style.width = V + "px";
            w.style.height = P + "px";
            w.width = V * CMDetect.RATIO;
            w.height = P * CMDetect.RATIO;
            t.fillStyle = "#ffffff";
            t.scale(CMDetect.RATIO, CMDetect.RATIO);
            t.fillRect(0, 0, V, P);
            if (!T) {
                var g = C.length;
                if (O == X.xnum && ea == X.ynum && fa == Address.sizeMode)
                    for (a =
                        0; a < g; a++) d = CMUtiles.getWallPosition(a, X.xnum, UI.CANVAS_SIZE + X.xgap, UI.CANVAS_SIZE + X.ygap), d.x += X.xpos, d.y += X.ypos, b = C[a], b.resize(d, V, P);
                else {
                    for (a = 0; a < g; a++) b = C[a], b.dispose();
                    O = X.xnum;
                    ea = X.ynum;
                    fa = Address.sizeMode;
                    k()
                }
                y.style[CMDetect.TRANSFORM] = "translate3d(" + J + "px, 0px, 0px)"
            }
        },
        start: function(b) {
            a(b);
            return 1
        },
        ready: function(a) {},
        show: a,
        hide: function() {
            U = 0;
            var a = -1,
                b, d, g;
            if (Address.curURL == Address.URL_VIEW)
                for (g = C.length, b = 0; b < g; b++)
                    if (d = C[b], d.url == Address.curSUB) {
                        a = b;
                        break
                    }
            h(a);
            y.style[CMDetect.DURATION] =
                ".6s";
            y.style[CMDetect.TRANSFORM] = 0 == Address.sizeMode ? "translate3d(" + -(J + 120) + "px, 0px, 0px)" : "translate3d(70px, 0px, 0px)"
        },
        change: function(a) {
            a -= 1;
            Q != a && (Q = a, h(-1), g())
        },
        checkHide: function(a) {
            Y[a] = 0;
            var d;
            for (a = 0; a < I; a++)
                if (d = Y[a]) return;
            for (a = 0; a < I; a++) d = G[a], d.dispose();
            G = [];
            ga = I = 0;
            if (Address.curURL == Address.URL_LIST) k();
            else {
                T = 1;
                U = 0;
                Address.hammertime.off("swipe", n);
                ia && (window.cancelAnimationFrame(ia), ia = null);
                $(b.dom).off("click", r);
                $(u.dom).off("click", s);
                var g = C.length;
                for (a = 0; a < g; a++) d =
                    C[a], d.dispose();
                CMUtiles.removeDom(v);
                CMUtiles.removeDom(y);
                K = null;
                Address.show()
            }
        },
        thumbOver: function(a) {
            var b, d, g = C.length;
            for (b = 0; b < g; b++) d = C[b], b == a ? d.over() : d.out()
        },
        onPrev: r,
        onNext: s,
        openSearch: function() {
            0 == Address.sizeMode && (y.style[CMDetect.DURATION] = ".6s", y.style[CMDetect.TRANSFORM] = "translate3d(" + -(J + 120) + "px, 0px, 0px)")
        },
        closeSearch: function() {
            0 == Address.sizeMode && (y.style[CMDetect.DURATION] = ".6s", y.style[CMDetect.TRANSFORM] = "translate3d(" + J + "px, 0px, 0px)")
        }
    }
}();
var View = View || function() {
    function a(a, d) {
        var g;
        a: {
            var h = b.length,
                k;
            for (g = 0; g < h; g++)
                if (k = b[g], !k.isUsed) {
                    g = k;
                    break a
                }
            k = new UI.screen;
            b.push(k);
            g = k
        }
        g.setting(w, H, J, C, N, a, d);
        s.appendChild(g.dom);
        u.push(g)
    }

    function d(b, d) {
        z = d;
        w = Model.getView(b);
        Control.setting(w);
        a(0, 0);
        t = w.no;
        Control.show();
        Address.hammertime.on("swipe", h);
        r.appendChild(s);
        Triangle.show(r, "#fff", 0, C, N, UI.GAP_Y, m
      )
    }

    function m() {
        Control.delayShow();
        ScreenInfo.show(w, z);
        k();
        Address.able()
    }

    function k() {
        Player.setting(u[u.length - 1].dom, w)
    }

    function p() {
        var a, b = u.length;
        for (a = 0; a < b; a++) u[a].dispose();
        u = [];
        Control.dispose();
        ScreenInfo.dispose();
        Address.hammertime.off("swipe", h);
        CMUtiles.removeDom(s);
        TweenLite.killDelayedCallsTo(k);
        Player.clear();
        Address.show()
    }

    function h(a) {
        Address.getAble() && (2 == a.direction ? g() : 4 == a.direction && n())
    }

    function n() {
        var a = t - 1;
        0 > a && (a = y - 1);
        hasher.setHash(Address.URL_VIEW + "/" + Model.getURL()[a])
    }

    function g() {
        var a = t + 1;
        a == y && (a = 0);
        hasher.setHash(Address.URL_VIEW + "/" + Model.getURL()[a])
    }
    var r, s, z, w, t = -1,
        v = -1,
        y,
        b = [],
        u = [],
        H, J, C, N;
    return {
        init: function(a, b) {
            r = b;
            s = document.createElement("div");
            s.className = "screen nodrag";
            y = Model.getTotal();
            Control.init(a, r);
            ScreenInfo.init(r, y);
            Player.init()
        },
        start: function(a) {
            d(a, 1);
            return 0.8
        },
        ready: function(a) {},
        show: d,
        hide: function() {
            TweenLite.killDelayedCallsTo(k);
            Player.pause();
            Control.hide();
            ScreenInfo.hide();
            var a, b = u.length;
            for (a = 0; a < b; a++) u[a].hide();
            Triangle.show(r, "#fff", 1, C, N, UI.GAP_Y, p)
        },
        change: function(b) {
            Address.unable();
            TweenLite.killDelayedCallsTo(k);
            Player.clear();
            var d = u.length,
                g = 1;
            w = Model.getView(b);
            Control.setting(w);
            v = t;
            t = w.no;
            0 == t && v == y - 1 ? g = 0 : t == y - 1 && 0 == v ? g = 1 : t > v && (g = 0);
            for (b = 0; b < d; b++) u[b].chageHide(g);
            u = [];
            a(1, g);
            u[u.length - 1].chageShow();
            ScreenInfo.change(w);
            TweenLite.delayedCall(0.05, Address.able);
            TweenLite.delayedCall(1.3, k)
        },
        resize: function(a, b, d) {
            H = b;
            J = d;
            C = H;
            N = J - 2 * UI.GAP_Y;
            Address.mobileView ? (N = J - UI.GAP_Y, s.style.pointerEvents = "auto") : s.style.pointerEvents = "none";
            var g, h = u.length;
            for (g = 0; g < h; g++) u[g].resize(H, J, C, N, 0);
            s.style.width = C + "px";
            s.style.height =
                N + "px";
            s.style[CMDetect.TRANSFORM] = "translate3d(0px, " + UI.GAP_Y + "px, 0px)";
            ScreenInfo.resize(b, d, C, N, a);
            Control.resize(a, b, d);
            GifPlayer.resize(C, N)
        },
        startPlay: function() {
            u[u.length - 1].clearLoading()
        },
        playPrev: n,
        playNext: g
    }
}();
var Control = Control || function() {
    function a() {
        -1 == P.no || Address.mobileView ? d() : (v.style[CMDetect.DURATION] = ".6s", v.style[CMDetect.TIMING] = UI.easeExpo, v.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px)")
    }

    function d() {
        v.style[CMDetect.DURATION] = ".6s";
        v.style[CMDetect.TIMING] = UI.easeExpo;
        v.style[CMDetect.TRANSFORM] = "translate3d(0px, 110px, 0px)"
    }

    function m(a) {
        G.style[CMDetect.DURATION] = "0s";
        k(a)
    }

    function k(a) {
        T = a;
        G.style[CMDetect.TRANSFORM] = "translate3d(" + -(X * (1 - T)) + "px, 0px, 0px)"
    }

    function p(a) {
        ia =
            a;
        1 == ia ? Y || (Y = 1, CMUtiles.removeDom(O.dom), y.appendChild(I.dom)) : Y && (Y = 0, CMUtiles.removeDom(I.dom), y.appendChild(O.dom));
        N.style[CMDetect.TRANSFORM] = "translate3d(" + -(X * (1 - ia)) + "px, 0px, 0px)"
    }

    function h(a) {
        I.change(a)
    }

    function n(a) {
        Player.clickPlay()
    }

    function g(a) {
        KeyEvents.onFull()
    }

    function r(a) {
        Player.setPause();
        "v" == ea ? window.open("https://vimeo.com/" + P.data.video.id) : "y" == ea ? window.open("https://www.youtube.com/watch?v=" + P.data.video.id) : "d" == ea && window.open("https://dribbble.com/shots/" + P.data.video.link)
    }

    function s(a) {
        a = CMUtiles.getCurrent(a.pageX - U, 0, X, 0, 1);
        Player.clickSeek(a)
    }

    function z(a) {
        a = Player.clickVolume();
        K.change(a)
    }

    function w(a) {
        0 == fa ? (fa = 1, ga.change(2)) : 1 == fa ? (fa = 5, ga.change(0)) : 5 == fa && (fa = 0, ga.change(1));
        GifPlayer.setRepeat(fa)
    }
    var t, v, y, b, u, H, J, C, N, G, I, K, A, W, Q, S, ga, O, ea = "v",
        fa = 5,
        Y = 1,
        X, U, T = 0,
        ia = 0,
        V = 0,
        P, ja = 68,
        ca = 0,
        ba = 0,
        ha = 0,
        L;
    return {
        init: function(a, d) {
            t = d;
            v = document.createElement("div");
            v.className = "controller nodrag";
            y = document.createElement("div");
            y.className = "box-paly bt-box";
            u = document.createElement("div");
            u.className = "box-link bt-box";
            I = new UI.button("view-play", 1);
            I.setPlay("circle-button big dark bt-play");
            O = new UI.button("view-dots");
            O.setDots("circle-button big dark bt-dots");
            W = new UI.button("view-vimeo");
            W.setVimeo("circle-button big dark bt-vimeo");
            Q = new UI.button("view-youtube");
            Q.setYoutube("circle-button big dark bt-youtube");
            S = new UI.button("view-gif");
            S.setDribbble("circle-button big dark bt-gif");
            ga = new UI.button("view-repeat", 2);
            ga.setRepeat("circle-button big dark bt-repeat");
            J = document.createElement("div");
            J.className = "progress";
            C = document.createElement("div");
            C.className = "progress-total";
            N = document.createElement("div");
            N.className = "progress-loaded";
            G = document.createElement("div");
            G.className = "progress-percent";
            C.appendChild(N);
            C.appendChild(G);
            J.appendChild(C);
            v.appendChild(J);
            v.appendChild(y);
            v.appendChild(u);
            y.appendChild(I.dom);
            u.appendChild(W.dom);
            y.style[CMDetect.DURATION] = ".6s";
            u.style[CMDetect.DURATION] = ".6s";
            J.style[CMDetect.DURATION] = ".6s";
            N.style[CMDetect.DURATION] = "0s";
            G.style[CMDetect.DURATION] =
                "0s";
            y.style[CMDetect.TIMING] = UI.easeExpo;
            u.style[CMDetect.TIMING] = UI.easeExpo;
            J.style[CMDetect.TIMING] = UI.easeExpo;
            G.style[CMDetect.TIMING] = UI.easeExpo;
            ea = "v";
            $(I.dom).on("click", n);
            $(W.dom).on("click", r);
            $(Q.dom).on("click", r);
            $(S.dom).on("click", r);
            $(ga.dom).on("click", w);
            $(J).on("mousedown", s);
            KeyEvents.getIsFullSupport() ? (ba = 1, b = document.createElement("div"), b.className = "box-full bt-box", v.appendChild(b), A = new UI.button("view-full", 1), A.setFull("circle-button big dark bt-full"), b.appendChild(A.dom),
                b.style[CMDetect.DURATION] = ".6s", b.style[CMDetect.TIMING] = UI.easeExpo, $(A.dom).on("click", g)) : ba = 0;
            ha = 1;
            H = document.createElement("div");
            H.className = "box-volume bt-box";
            v.appendChild(H);
            K = new UI.button("view-volume", 1);
            K.setVolume("circle-button big dark bt-full");
            H.appendChild(K.dom);
            H.style[CMDetect.DURATION] = ".6s";
            H.style[CMDetect.TIMING] = UI.easeExpo;
            $(K.dom).on("click", z)
        },
        setting: function(b) {
            P = b;
            T = 0; - 1 != P.no && P.data.video.media != ea && (ea = P.data.video.media, "v" == ea ? (CMUtiles.removeDom(Q.dom), CMUtiles.removeDom(S.dom),
                u.appendChild(W.dom), CMUtiles.removeDom(ga.dom), H.appendChild(K.dom), p(1)) : "y" == ea ? (CMUtiles.removeDom(W.dom), CMUtiles.removeDom(S.dom), u.appendChild(Q.dom), CMUtiles.removeDom(ga.dom), H.appendChild(K.dom), p(1)) : "d" == ea && (CMUtiles.removeDom(W.dom), CMUtiles.removeDom(Q.dom), u.appendChild(S.dom), CMUtiles.removeDom(K.dom), H.appendChild(ga.dom), p(0)));
            G.style[CMDetect.DURATION] = ".3s";
            k(0);
            h(0);
            ca && a()
        },
        show: function() {
            ca = 1;
            v.style[CMDetect.DURATION] = "0s";
            v.style[CMDetect.TRANSFORM] = "translate3d(0px, 110px, 0px)";
            t.appendChild(v)
        },
        delayShow: a,
        hide: d,
        dispose: function() {
            CMUtiles.removeDom(v);
            P = null;
            ca = 0
        },
        resize: function(d, g, h) {
            L = g;
            g = d.xpos;
            3 > Address.sizeMode ? (d = L - g - 40, ja = 50) : (d = L - g - 50, ja = 68);
            U = g + ja;
            X = L - g - g - ja - ja;
            ba && (X -= ja);
            ha && (X -= ja);
            y.style[CMDetect.TRANSFORM] = "translate3d(" + g + "px, 0px, 0px)";
            J.style[CMDetect.TRANSFORM] = "translate3d(" + U + "px, 0px, 0px)";
            J.style.width = X + "px";
            ha && (g = ba ? d - ja - ja : d - ja, H.style[CMDetect.TRANSFORM] = "translate3d(" + g + "px, 0px, 0px)");
            ba && (b.style[CMDetect.TRANSFORM] = "translate3d(" +
                (d - ja) + "px, 0px, 0px)");
            u.style[CMDetect.TRANSFORM] = "translate3d(" + d + "px, 0px, 0px)";
            m(T);
            Address.mobileView && (fa = 0, ga.change(1));
            ca && a()
        },
        progress: m,
        setPlay: h,
        setNormal: function() {
            V = 0;
            A.change(V)
        },
        setFull: function() {
            V = 1;
            A.change(V)
        },
        loading: p,
        onVolume: z,
        onLink: r
    }
}();
var ScreenInfo = ScreenInfo || function() {
    function a() {
        Address.mobileView ? (p(), ua > sa || h(0), ia = 1, I.style.opacity = 1) : m(0);
        TweenLite.delayedCall(0.3, d);
        $(X.dom).on("click", t);
        $(U.dom).on("click", v);
        MouseOver.move(I, g, r);
        SideControl.addEvent();
        T.innerHTML = da + 1 + "/" + xa;
        V = 1
    }

    function d() {
        -1 != da && (fa.start({
            dom: O,
            text: S.data.info.title,
            isColor: 1,
            yGap: -1,
            isEllipsis: 1,
            clickEvent: z
        }), Y.start({
            dom: ea,
            text: S.data.info.name,
            isColor: 1,
            yGap: 4,
            isEllipsis: 1,
            clickEvent: w
        }))
    }

    function m(a) {
        Address.mobileView || (TweenLite.killDelayedCallsTo(k),
            TweenLite.delayedCall(4, k));
        a && (-1 < da ? (SideControl.change(da), h(0.3)) : (SideControl.hide(), n()));
        ia || (ia = 1, I.style.opacity = 1, -1 < da && (h(0), a || SideControl.show()), p())
    }

    function k() {
        TweenLite.killDelayedCallsTo(k);
        MouseOver.kill();
        ia && (ia = 0, I.style.opacity = 0, n(), Q.style[CMDetect.DURATION] = ".6s", Q.style[CMDetect.TRANSFORM] = 0 == Address.sizeMode ? "translate3d(" + -(P + 120) + "px, 0px, 0px)" : "translate3d(" + P + "px, -90px, 0px)", Q.style[CMDetect.TIMING] = UI.easeExpo, SideControl.hide())
    }

    function p() {
        Q.style[CMDetect.DURATION] =
            ".6s";
        Q.style[CMDetect.TRANSFORM] = "translate3d(" + P + "px, 0px, 0px)";
        Q.style[CMDetect.TIMING] = UI.easeExpo
    }

    function h(a) {
        A.style[CMDetect.DURATION] = ".6s";
        A.style[CMDetect.DELAY] = a + "s";
        A.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px)";
        A.style[CMDetect.TIMING] = UI.easeExpo
    }

    function n() {
        A.style[CMDetect.DURATION] = ".6s";
        A.style[CMDetect.DELAY] = "0s";
        A.style[CMDetect.TRANSFORM] = "translate3d(0px, -130px, 0px)";
        A.style[CMDetect.TIMING] = UI.easeExpo
    }

    function g(a) {
        ga || (!V || Address.mobileView) || (MouseOver.kill(),
            TweenLite.delayedCall(0.4, k))
    }

    function r(a) {
        ga || (!V || Address.mobileView) || (TweenLite.killDelayedCallsTo(k), MouseOver.kill(), m(0))
    }

    function s(a) {
        ga || Player.clickPlay()
    }

    function z() {
        Player.setPause();
        Control.onLink()
    }

    function w(a) {
        Player.setPause();
        window.open(S.data.info.link)
    }

    function t(a) {
        V && View.playPrev()
    }

    function v(a) {
        V && View.playNext()
    }

    function y() {
        var a = 0;
        Address.mobileView && (0 == Address.sizeMode ? a = 106 : 1 == Address.sizeMode ? a = 106 : 2 == Address.sizeMode ? a = 124 : 3 == Address.sizeMode ? a = 140 : 4 == Address.sizeMode &&
            (a = 154));
        return a
    }

    function b(a) {
        Address.mobileView || (MouseOver.kill(), TweenLite.killDelayedCallsTo(H), ga = 1)
    }

    function u(a) {
        !Address.mobileView && ga && (MouseOver.kill(), TweenLite.killDelayedCallsTo(H), TweenLite.delayedCall(0.1, H), ia ? SideControl.getShowedSide() || k() : m(0))
    }

    function H() {
        ga = 0
    }

    function J(a) {
        a = "http://twitter.com/share?url=" + encodeURIComponent(CMDetect.SITE_URL + "/#/view/" + S.data.info.id) + "&text=" + encodeURIComponent(S.data.info.title);
        CMUtiles.openPopup(a, "", 600, 260)
    }

    function C(a) {
        a = "https://www.facebook.com/dialog/feed?app_id=" +
            CMDetect.APP_ID + "&link=" + encodeURIComponent(CMDetect.SITE_URL + "/#/view/" + S.data.info.id) + "&picture=" + encodeURIComponent(CMDetect.SITE_URL + "/data/big/" + S.data.video.img + ".jpg") + "&name=" + encodeURIComponent(S.data.info.title) + "&caption=" + encodeURIComponent(CMDetect.SITE_URL) + "&description=" + encodeURIComponent("A collection of inspiring short videos and GIFs / Booounce!") + "&redirect_uri=" + encodeURIComponent(CMDetect.SITE_URL + "/close.html") + "&display=popup";
        CMUtiles.openPopup(a, "", 600, 500)
    }

    function N(a) {
        a =
            encodeURIComponent(S.data.info.title);
        a = "https://plus.google.com/share?url=" + encodeURIComponent(CMDetect.SITE_URL + "/share.php?cu=" + S.data.info.id + "&ci=" + S.data.video.img + "&cn=" + a);
        CMUtiles.openPopup(a, "", 600, 400)
    }
    var G, I, K, A, W, Q, S, ga = 0,
        O, ea, fa, Y, X, U, T, ia = 0,
        V = 0,
        P, ja, ca, ba, ha, L, F, ka, ua, sa, xa, da;
    return {
        init: function(a, d) {
            G = a;
            I = document.createElement("div");
            I.className = "screen-info nodrag";
            I.style[CMDetect.DURATION] = ".2s";
            K = document.createElement("div");
            K.className = "screen-dark";
            W = document.createElement("div");
            W.className = "si-info-box";
            A = document.createElement("div");
            A.className = "si-info";
            A.style[CMDetect.TRANSFORM] = "translate3d(0px, -130px, 0px)";
            W.appendChild(A);
            O = document.createElement("h2");
            ea = document.createElement("p");
            ja = document.createElement("ul");
            ca = document.createElement("li");
            ba = document.createElement("li");
            ha = document.createElement("li");
            A.appendChild(O);
            A.appendChild(ea);
            A.appendChild(ja);
            ja.appendChild(ca);
            ja.appendChild(ba);
            ja.appendChild(ha);
            L = new UI.button("sns-fb");
            L.setFacebook("circle-button big light sns-fb");
            ca.appendChild(L.dom);
            F = new UI.button("sns-tw");
            F.setTwitter("circle-button big light sns-ftwb");
            ba.appendChild(F.dom);
            ka = new UI.button("sns-gp");
            ka.setGplus("circle-button big light sns-gp");
            ha.appendChild(ka.dom);
            Q = document.createElement("div");
            Q.className = "si-arrow";
            X = new UI.button("view-left-arrow");
            X.setArrow(4, "circle-button big light bt-arrow-left");
            U = new UI.button("view-right-arrow");
            U.setArrow(3, "circle-button big light bt-arrow-right");
            T = document.createElement("p");
            Q.appendChild(T);
            Q.appendChild(X.dom);
            Q.appendChild(U.dom);
            fa = new NYTypo("#fff");
            Y = new NYTypo("#fff");
            xa = d;
            I.appendChild(K);
            I.appendChild(W);
            I.appendChild(Q);
            SideControl.init(I);
            $(L.dom).on("click", C);
            $(F.dom).on("click", J);
            $(ka.dom).on("click", N);
            $(K).on("click", s);
            if (CMDetect.isTouch) {
                var g = new Hammer(K);
                g.on("hammer.input", b);
                g.on("pressup", u)
            }
        },
        show: function(b, d) {
            S = b;
            da = S.no;
            G.appendChild(I);
            var g = 0.3;
            d && (g = 1);
            TweenLite.delayedCall(g, a);
            SideControl.setting(da);
            Q.style[CMDetect.DURATION] = "0s";
            Q.style[CMDetect.TRANSFORM] = 0 == Address.sizeMode ?
                "translate3d(" + -(P + 120) + "px, 0px, 0px)" : "translate3d(" + P + "px, -90px, 0px)"
        },
        change: function(a) {
            S = a;
            da = S.no;
            Address.mobileView || m(1);
            TweenLite.killDelayedCallsTo(d);
            TweenLite.delayedCall(0.3, d);
            T.innerHTML = da + 1 + "/" + xa
        },
        hide: function() {
            V = 0;
            TweenLite.killDelayedCallsTo(a);
            TweenLite.killDelayedCallsTo(d);
            k()
        },
        dispose: function() {
            CMUtiles.removeDom(I);
            TweenLite.killDelayedCallsTo(k);
            TweenLite.killDelayedCallsTo(a);
            TweenLite.killDelayedCallsTo(d);
            $(X.dom).off("click", t);
            $(U.dom).off("click", v);
            V = ia = 0;
            fa.clear();
            Y.clear();
            MouseOver.removeMove();
            I.style.opacity = 0;
            Q.style[CMDetect.DURATION] = "0s";
            Q.style[CMDetect.TRANSFORM] = 0 == Address.sizeMode ? "translate3d(" + -(P + 120) + "px, 0px, 0px)" : "translate3d(" + P + "px, -90px, 0px)";
            A.style[CMDetect.DURATION] = "0s";
            A.style[CMDetect.DELAY] = "0s";
            A.style[CMDetect.TRANSFORM] = "translate3d(0px, -130px, 0px)";
            SideControl.dispose();
            O.innerHTML = "mi";
            ea.innerHTML = "mi"
        },
        resize: function(a, b, d, c, g) {
            ua = a;
            sa = b;
            P = 0 == Address.sizeMode ? g.xpos : 0;
            I.style.width = d + "px";
            Address.mobileView ? (I.style.height =
                y() + "px", I.className = "screen-info nodrag info-top", TweenLite.killDelayedCallsTo(k), a > b ? n() : V && (m(0), h(0))) : (I.style.height = c + "px", I.className = "screen-info nodrag");
            ia && (Q.style[CMDetect.TRANSFORM] = "translate3d(" + P + "px, 0px, 0px)");
            I.style[CMDetect.TRANSFORM] = "translate3d(0px, " + UI.GAP_Y + "px, 0px)";
            SideControl.resize(a, b);
            fa.resize(-1);
            Y.resize(4)
        },
        onNext: v,
        onPrev: t,
        getGapY: y,
        openSearch: function() {
            0 == Address.sizeMode && (Q.style[CMDetect.DURATION] = ".6s", Q.style[CMDetect.TRANSFORM] = "translate3d(" + -(P +
                120) + "px, 0px, 0px)")
        },
        closeSearch: function() {
            0 == Address.sizeMode && (Q.style[CMDetect.DURATION] = ".6s", Q.style[CMDetect.TRANSFORM] = "translate3d(" + P + "px, 0px, 0px)")
        },
        onMove: r,
        onOut: g,
        setTouchEvt: function(a) {
            ga = a
        }
    }
}();
var SideControl = SideControl || function() {
    function a(a) {
        M = a;
        d()
    }

    function d() {
        qa = da = 0;
        h();
        var a, b, c, d;
        c = f.length;
        for (a = 0; a < c; a++) b = f[a], b.dispose(), b = q[a], b.dispose();
        f = [];
        q = [];
        Y.clearRect(0, 0, aa, 130);
        X.clearRect(0, 0, aa, 130);
        for (a = 0; a < ua; a++) d = ua - a + 2, b = N(), c = CMUtiles.getInsideMax(M + 1 + a, ja), b.setting(T, X, a, P[c], 100 * a, d), f[a] = b, b = N(), c = CMUtiles.getInsideMax(M - 1 - a, ja), b.setting(U, Y, -a, P[c], 100 * (ua - 1 - a) + 100, d), q[a] = b;
        ia.style[CMDetect.TRANSFORM] = "translate3d(" + 100 * ua + "px, 0px, 0px)"
    }

    function m() {
        Address.mobileView ?
            k() : (TweenLite.killDelayedCallsTo(p), TweenLite.killDelayedCallsTo(r), TweenLite.killDelayedCallsTo(z), ca = 1, U.style[CMDetect.DURATION] = ".5s", U.style[CMDetect.TIMING] = UI.easeExpo, U.style[CMDetect.TRANSFORM] = "translate3d(" + ha + "px, 0px, 0px)", T.style[CMDetect.DURATION] = ".5s", T.style[CMDetect.TIMING] = UI.easeExpo, T.style[CMDetect.TRANSFORM] = "translate3d(" + ba + "px, 0px, 0px)")
    }

    function k() {
        h();
        TweenLite.killDelayedCallsTo(r);
        TweenLite.killDelayedCallsTo(z);
        ca = 0;
        U.style[CMDetect.DURATION] = ".2s";
        U.style[CMDetect.TIMING] =
            "cubic-bezier(0.47, 0, 0.745, 0.715)";
        U.style[CMDetect.TRANSFORM] = "translate3d(" + (ha - 60) + "px, 0px, 0px)";
        T.style[CMDetect.DURATION] = ".2s";
        T.style[CMDetect.TIMING] = "cubic-bezier(0.47, 0, 0.745, 0.715)";
        T.style[CMDetect.TRANSFORM] = "translate3d(" + (ba + 60) + "px, 0px, 0px)";
        qa = da = 0
    }

    function p(b) {
        a(b);
        m()
    }

    function h() {
        ka = 0;
        xa && (window.cancelAnimationFrame(xa), xa = null)
    }

    function n() {
        xa = window.requestAnimationFrame(n);
        var a, b;
        if (da)
            for (Y.clearRect(0, 0, aa, 130), a = 0; a < ua; a++) b = q[a], b.draw();
        else if (qa)
            for (X.clearRect(0,
                    0, aa, 130), a = 0; a < ua; a++) b = f[a], b.draw();
        else
            for (Y.clearRect(0, 0, aa, 130), X.clearRect(0, 0, aa, 130), a = 0; a < ua; a++) b = q[a], b.draw(), b = f[a], b.draw()
    }

    function g() {
        TweenLite.killDelayedCallsTo(r);
        if (!da) {
            da = 1;
            U.style[CMDetect.DURATION] = ".6s";
            U.style[CMDetect.TIMING] = UI.easeExpo;
            U.style[CMDetect.TRANSFORM] = "translate3d(" + F + "px, 0px, 0px)";
            var a, b;
            for (a = 0; a < ua; a++) b = q[a], b.show();
            ka || (ka = 1, n())
        }
    }

    function r() {
        da = 0;
        TweenLite.killDelayedCallsTo(r);
        U.style[CMDetect.DURATION] = ".6s";
        U.style[CMDetect.TIMING] = UI.easeExpo;
        U.style[CMDetect.TRANSFORM] = "translate3d(" + ha + "px, 0px, 0px)";
        var a, b;
        for (a = 0; a < ua; a++) b = q[a], b.hide();
        da || qa || h()
    }

    function s() {
        TweenLite.killDelayedCallsTo(z);
        if (!qa) {
            qa = 1;
            T.style[CMDetect.DURATION] = ".6s";
            T.style[CMDetect.TIMING] = UI.easeExpo;
            T.style[CMDetect.TRANSFORM] = "translate3d(" + L + "px, 0px, 0px)";
            var a, b;
            for (a = 0; a < ua; a++) b = f[a], b.show();
            ka || (ka = 1, n())
        }
    }

    function z() {
        qa = 0;
        TweenLite.killDelayedCallsTo(z);
        T.style[CMDetect.DURATION] = ".6s";
        T.style[CMDetect.TIMING] = UI.easeExpo;
        T.style[CMDetect.TRANSFORM] =
            "translate3d(" + ba + "px, 0px, 0px)";
        var a, b;
        for (a = 0; a < ua; a++) b = f[a], b.hide();
        da || qa || h()
    }

    function w(a) {
        S || (g(), z())
    }

    function t(a) {
        S || (TweenLite.killDelayedCallsTo(r), TweenLite.delayedCall(1.3, r))
    }

    function v(a) {
        S || (MouseOver.kill(), s(), r())
    }

    function y(a) {
        S || (MouseOver.kill(), TweenLite.killDelayedCallsTo(z), TweenLite.delayedCall(1.3, z))
    }

    function b(a) {
        ga.className = "ani-lr"
    }

    function u(a) {
        ga.className = ""
    }

    function H(a) {
        O.className = "ani-lr"
    }

    function J(a) {
        O.className = ""
    }

    function C(a) {
        S || Menu.goBackToList()
    }

    function N() {
        var a, b = sa.length,
            c;
        for (a = 0; a < b; a++)
            if (c = sa[a], !c.isUsed) return c;
        c = new UI.side;
        sa.push(c);
        return c
    }

    function G(a) {
        Address.mobileView || (TweenLite.killDelayedCallsTo(W), MouseOver.kill(), da || (S = 1, ScreenInfo.setTouchEvt(1)))
    }

    function I(a) {
        !Address.mobileView && S && (MouseOver.kill(), TweenLite.killDelayedCallsTo(W), TweenLite.delayedCall(0.1, W), g(), z())
    }

    function K(a) {
        Address.mobileView || (TweenLite.killDelayedCallsTo(W), MouseOver.kill(), qa || (S = 1, ScreenInfo.setTouchEvt(1)))
    }

    function A(a) {
        !Address.mobileView &&
            S && (MouseOver.kill(), TweenLite.killDelayedCallsTo(W), TweenLite.delayedCall(0.1, W), s(), r())
    }

    function W() {
        MouseOver.kill();
        S = 0;
        ScreenInfo.setTouchEvt(0)
    }
    var Q, S = 0,
        ga, O, ea, fa, Y, X, U, T, ia, V, P, ja, ca = 0,
        ba, ha, L, F, ka = 0,
        ua, sa = [],
        xa = null,
        da = 0,
        qa = 0,
        f = [],
        q = [],
        c, M = 0,
        aa;
    return {
        init: function(a) {
            Q = a;
            U = document.createElement("div");
            U.className = "side-dom side-prev";
            U.setAttribute("data-id", 0);
            T = document.createElement("div");
            T.className = "side-dom side-next";
            T.setAttribute("data-id", 1);
            V = document.createElement("div");
            V.className = "side-last";
            ga = document.createElement("p");
            ga.innerHTML = "<i></i><i></i><i></i>";
            V.appendChild(ga);
            ia = document.createElement("div");
            ia.className = "side-last";
            O = document.createElement("p");
            O.innerHTML = "<i></i><i></i><i></i>";
            ia.appendChild(O);
            ea = document.createElement("canvas");
            Y = ea.getContext("2d");
            fa = document.createElement("canvas");
            X = fa.getContext("2d");
            U.appendChild(ea);
            T.appendChild(fa);
            U.appendChild(V);
            T.appendChild(ia);
            Q.appendChild(U);
            Q.appendChild(T);
            P = Model.getData();
            ja = P.length;
            if (CMDetect.isTouch) {
                a = new Hammer(U);
                var b = new Hammer(T);
                a.on("press", G);
                a.on("pressup", I);
                b.on("press", K);
                b.on("pressup", A)
            }
        },
        addEvent: function() {
            MouseOver.over(U, w, t, T, v, y);
            $(ia).on("click", C);
            $(V).on("click", C);
            "pc" == CMDetect.DEVICE && ($(ia).on("mouseenter", H).on("mouseleave", J), $(V).on("mouseenter", b).on("mouseleave", u))
        },
        resize: function(a, b) {
            c = a;
            ua = (c - 130 - 100) / 100 | 0;
            aa = 100 * ua + 130;
            T.style.width = U.style.width = aa + "px";
            L = c - aa;
            F = 0;
            ba = L + (aa - 60);
            ha = F - (aa - 60);
            ea.style.width = fa.style.width = aa + "px";
            ea.style.height =
                fa.style.height = "130px";
            ea.width = fa.width = aa * CMDetect.RATIO;
            ea.height = fa.height = 130 * CMDetect.RATIO;
            Y.scale(CMDetect.RATIO, CMDetect.RATIO);
            X.scale(CMDetect.RATIO, CMDetect.RATIO);
            U.style[CMDetect.DURATION] = "0s";
            T.style[CMDetect.DURATION] = "0s";
            1 == ca ? (T.style[CMDetect.TRANSFORM] = "translate3d(" + ba + "px, 0px, 0px)", U.style[CMDetect.TRANSFORM] = "translate3d(" + ha + "px, 0px, 0px)") : 0 == ca && (U.style[CMDetect.TRANSFORM] = "translate3d(" + (ha - 60) + "px, 0px, 0px)", T.style[CMDetect.TRANSFORM] = "translate3d(" + (ba + 60) + "px, 0px, 0px)");
            d();
            ca && m()
        },
        show: m,
        change: function(a) {
            k();
            TweenLite.killDelayedCallsTo(p);
            TweenLite.delayedCall(0.4, p, [a])
        },
        hide: k,
        dispose: function() {
            h();
            TweenLite.killDelayedCallsTo(p);
            MouseOver.removeOver();
            $(ia).off("click", C);
            $(V).off("click", C);
            "pc" == CMDetect.DEVICE && ($(ia).off("mouseenter", H).off("mouseleave", J), $(V).off("mouseenter", b).off("mouseleave", u))
        },
        setting: a,
        onClickSide: function(a) {
            S || hasher.setHash(Address.URL_VIEW + "/" + a)
        },
        getShowedSide: function() {
            var a = 0;
            da ? (r(), a = 1) : qa && (z(), a = 1);
            return a
        }
    }
}();
var VimeoPlayer = VimeoPlayer || function() {
    function a(a) {
        if (!r) {
            if (!/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1;
            "*" === z && (z = a.origin);
            a = JSON.parse(a.data);
            switch (a.event) {
                case "ready":
                    r || (t ? d("setVolume", "0") : d("setVolume", "0.8"), d("addEventListener", "play"), d("addEventListener", "pause"), d("addEventListener", "finish"), d("addEventListener", "playProgress"), s || d("play"));
                    break;
                case "playProgress":
                    a = a.data;
                    if (!r) {
                        s && d("pause");
                        var h = a.percent;
                        w = a.duration;
                        0 < h && n && (k.style.opacity = 1, n = 0, View.startPlay());
                        Control.progress(h)
                    }
                    break;
                case "play":
                    r || (g = 1, Control.setPlay(1));
                    break;
                case "pause":
                    r || (g = 0, Control.setPlay(0));
                    break;
                case "finish":
                    if (!r && !s) ScreenInfo.onNext()
            }
        }
    }

    function d(a, d) {
        var b = {
            method: a
        };
        d && (b.value = d);
        b = JSON.stringify(b);
        h[0].contentWindow && h[0].contentWindow.postMessage(b, z)
    }

    function m() {
        n || r || (g ? d("pause") : d("play"))
    }
    var k, p, h, n = 1,
        g = 0,
        r = 0,
        s = 0,
        z = "*",
        w = 0,
        t = 0;
    return {
        init: function() {
            k = document.createElement("div");
            k.className = "vp-dom";
            p = document.createElement("div");
            p.className = "vp-overlay";
            k.appendChild(p)
        },
        setting: function(d, g) {
            p.style.paddingBottom = 0.1 * g.data.video.h + "%";
            d.appendChild(k);
            p.innerHTML = '<iframe id="video-player" src="https://player.vimeo.com/video/' + g.data.video.id + '?api=1&player_id=video-player&badge=0&byline=0&color=fff&portrait=0&title=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            h = $("iframe");
            z = "*";
            addListener(window, "message", a)
        },
        clear: function() {
            removeListener(window, "message", a);
            p.innerHTML = "";
            CMUtiles.removeDom(k);
            k.style.opacity =
                0;
            n = 1;
            r = w = 0;
            h = null
        },
        pause: function() {
            r = 1;
            d("pause")
        },
        clickPlay: m,
        clickSeek: function(a) {
            n || r || d("seekTo", a * w)
        },
        setPause: function() {
            g && !r && m()
        },
        setVolume: function(a) {
            t = a;
            0 != w && (t ? d("setVolume", "0") : d("setVolume", "0.8"))
        },
        openSide: function() {
            s = 1;
            h && d("pause")
        },
        closeSide: function() {
            s = 0;
            h && d("play")
        }
    }
}();
var YoutubePlayer = YoutubePlayer || function() {
    function a() {
        w = window.requestAnimationFrame(a);
        if (g && (0 != t && g.getCurrentTime) && (v = g.getCurrentTime(), !b)) {
            z && (g && g.pauseVideo) && g.pauseVideo();
            var d = v / t;
            0 < d && r && (p.style.opacity = 1, r = 0, View.startPlay());
            Control.progress(d)
        }
    }

    function d(a) {
        b || (t = a.target.getDuration(), y ? a.target.setVolume(0) : a.target.setVolume(80), a.target.setPlaybackQuality("hd1080"), z ? a.target.pauseVideo() : a.target.playVideo())
    }

    function m(a) {
        switch (a.data) {
            case YT.PlayerState.PLAYING:
                b ||
                    (s = 1, Control.setPlay(1));
                break;
            case YT.PlayerState.PAUSED:
                b || (s = 0, Control.setPlay(0));
                break;
            case YT.PlayerState.ENDED:
                if (!b && !z) ScreenInfo.onNext()
        }
    }

    function k() {
        !r && (g && !b && g.pauseVideo && g.playVideo) && (s ? g.pauseVideo() : g.playVideo())
    }
    var p, h, n = 0,
        g, r = 1,
        s = 0,
        z = 0,
        w, t = 0,
        v = 0,
        y = 0,
        b = 0;
    return {
        init: function() {
            p = document.createElement("div");
            p.className = "yp-dom";
            h = document.createElement("div");
            h.className = "yp-overlay";
            h.id = "yp-player";
            p.appendChild(h)
        },
        setting: function(b, h) {
            b.appendChild(p);
            g = new YT.Player("yp-player", {
                height: "100%",
                width: "100%",
                videoId: h.data.video.id,
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    rel: 0,
                    showinfo: 0
                },
                events: {
                    onReady: d,
                    onStateChange: m
                }
            });
            n || (n = 1, a())
        },
        clear: function() {
            n = 0;
            w && (window.cancelAnimationFrame(w), w = null);
            g && (g.destroy(), g = null);
            CMUtiles.removeDom(p);
            p.style.opacity = 0;
            r = 1;
            b = v = t = 0
        },
        pause: function() {
            b = 1;
            g && g.pauseVideo && g.pauseVideo()
        },
        clickPlay: k,
        clickSeek: function(a) {
            !r && (g && !b && g.seekTo) && g.seekTo(a * t, !0)
        },
        setPause: function() {
            s && !b && k()
        },
        setVolume: function(a) {
            y = a;
            g && g.setVolume && (y ?
                g.setVolume(0) : g.setVolume(80))
        },
        openSide: function() {
            z = 1;
            g && g.pauseVideo && g.pauseVideo()
        },
        closeSide: function() {
            z = 0;
            g && g.playVideo && g.playVideo()
        }
    }
}();
var GifPlayer = GifPlayer || function() {
    function a(a) {
        t = a;
        p && p.setRepeat(t)
    }

    function d() {
        0 != r && p.resize(z, w, r, s)
    }

    function m() {
        p && p.getLoaded() && (v ? p.pause() : p.play())
    }
    var k, p, h, n, g, r = 0,
        s = 0,
        z, w, t = 5,
        v = 0,
        y = 0,
        b = 0;
    return {
        init: function() {
            k = document.createElement("div");
            k.className = "gp-dom";
            h = document.createElement("canvas");
            n = h.getContext("2d");
            g = document.createElement("canvas");
            k.appendChild(h)
        },
        setting: function(a, b) {
            var m = "data/gif/" + b.data.video.id;
            r = b.data.video.w | 0;
            s = b.data.video.h | 0;
            p = new SuperGif({
                gif: k,
                auto_play: 1,
                canvas: h,
                ctx: n,
                tmp: g,
                tw: r,
                th: s
            });
            p.load_url(m);
            p.setRepeat(t);
            d();
            a.appendChild(k);
            k.style.opacity = 1
        },
        clear: function() {
            p && p.dispose();
            p = null;
            CMUtiles.removeDom(k);
            b = r = s = k.style.opacity = 0
        },
        resize: function(b, g) {
            z = b;
            w = g;
            d();
            Address.mobileView && a(0)
        },
        pause: function() {
            b = 1;
            p && p.pause()
        },
        clickPlay: m,
        clickSeek: function(a) {
            p && p.getLoaded() && (a = p.get_length() * a | 0, p.move_to(a))
        },
        setPause: function() {
            v && !b && m()
        },
        setVolume: function(a) {},
        openSide: function() {
            y = 1;
            p && p.pause()
        },
        closeSide: function() {
            y = 0;
            p && p.play()
        },
        loaded: function() {
            View.startPlay()
        },
        loading: function(a) {
            b || Control.loading(a)
        },
        progress: function(a) {
            b || Control.progress(a)
        },
        onPlay: function() {
            b || (v = 1, Control.setPlay(1))
        },
        onPause: function() {
            b || (v = 0, Control.setPlay(0))
        },
        setRepeat: a,
        onFinish: function() {
            if (!(b || y || Address.mobileView)) ScreenInfo.onNext()
        }
    }
}();
var MobilePlayer = MobilePlayer || function() {
    var a, d, m = 0;
    return {
        init: function() {
            a = document.createElement("div");
            a.className = "mb-dom"
        },
        setting: function(k, p) {
            m = 0;
            k.appendChild(a);
            "v" == p.data.video.media ? (a.innerHTML = '<iframe src="https://player.vimeo.com/video/' + p.data.video.id + '?badge=0&byline=0&color=fff&portrait=0&title=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', a.style.opacity = 1, View.startPlay()) : "y" == p.data.video.media ? (a.innerHTML =
                '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + p.data.video.id + '?showinfo=0&rel=0&theme=dark" frameborder="0" allowfullscreen></iframe>', a.style.opacity = 1, View.startPlay()) : "d" == p.data.video.media && (d = new Image, d.src = "data/gif/" + p.data.video.id, d.onload = function() {
                m || (a.innerHTML = '<img src="' + d.src + '" width="100%" height="100%">', a.style.opacity = 1, View.startPlay())
            })
        },
        clear: function() {
            m = 1;
            d && (d = d.onload = null);
            a.innerHTML = "";
            CMUtiles.removeDom(a)
        },
        pause: function() {},
        clickPlay: function() {},
        clickSeek: function(a) {},
        setPause: function() {},
        setVolume: function(a) {},
        openSide: function() {},
        closeSide: function() {}
    }
}();
var NoPlayer = NoPlayer || function() {
    return {
        init: function() {},
        setting: function(a, d) {},
        clear: function() {},
        pause: function() {},
        clickPlay: function() {},
        clickSeek: function(a) {},
        setPause: function() {},
        setVolume: function(a) {},
        openSide: function() {},
        closeSide: function() {}
    }
}();
var Player = Player || function() {
    var a, d = 0;
    return {
        init: function() {
            VimeoPlayer.init();
            YoutubePlayer.init();
            MobilePlayer.init();
            GifPlayer.init()
        },
        setting: function(d, k) {
            -1 == k.no ? a = NoPlayer : Address.mobileView ? a = MobilePlayer : "d" == k.data.video.media ? a = GifPlayer : "v" == k.data.video.media ? a = VimeoPlayer : "y" == k.data.video.media && (a = YoutubePlayer);
            a.setting(d, k)
        },
        clear: function() {
            a && a.clear()
        },
        pause: function() {
            a && a.pause()
        },
        clickPlay: function() {
            a && a.clickPlay()
        },
        clickSeek: function(d) {
            a && a.clickSeek(d)
        },
        setPause: function() {
            Address.mobileView ||
                a && a.setPause()
        },
        clickVolume: function() {
            d = !d;
            VimeoPlayer.setVolume(d);
            YoutubePlayer.setVolume(d);
            return d
        },
        openSide: function() {
            VimeoPlayer.openSide();
            YoutubePlayer.openSide()
        },
        closeSide: function() {
            VimeoPlayer.closeSide();
            YoutubePlayer.closeSide()
        }
    }
}();
var Popup = Popup || function() {
    function a() {
        0 == u && Submit.focus();
        Address.hammertime.on("swipe", g);
        Address.able()
    }

    function d() {
        Address.hammertime.off("swipe", g);
        m();
        StageController.removeResize("Popup");
        CMUtiles.removeDom(w);
        Submit.hideMsg();
        Address.show()
    }

    function m() {
        H = 0;
        J && (window.cancelAnimationFrame(J), J = null)
    }

    function k() {
        J = window.requestAnimationFrame(k);
        n()
    }

    function p() {
        m();
        G.x = 0;
        G.y = 1;
        I.x = 0;
        I.y = 1;
        n();
        Submit.hideMsg()
    }

    function h() {
        K = StageController.stageWidth;
        A = 1.5 * K;
        W = StageController.stageHeight;
        m();
        TweenLite.killTweensOf(N);
        TweenLite.killTweensOf(C);
        TweenLite.killTweensOf(I);
        TweenLite.killTweensOf(I);
        TweenLite.killDelayedCallsTo(p);
        I.x = 0;
        I.y = 1;
        G.x = 0;
        G.y = 1;
        0 == u ? (N.x = 0, C.x = A) : (N.x = -A, C.x = 0);
        n();
        Submit.resize(K, W);
        About.resize(K, W)
    }

    function n() {
        v.style[CMDetect.TRANSFORM] = "translate3d(" + N.x + "px, 0px, 0px)";
        t.style[CMDetect.TRANSFORM] = "translate3d(" + C.x + "px, 0px, 0px)";
        y.style[CMDetect.TRANSFORM] = "matrix(1, 0, " + I.x + ", " + I.y + ", 0, 0)";
        b.style[CMDetect.TRANSFORM] = "matrix(1, 0, " + G.x + ", " + G.y +
            ", 0, 0)"
    }

    function g(a) {
        Address.getAble() && (2 == a.direction ? 0 == u && hasher.setHash(Address.URL_ABOUT) : 4 == a.direction && 1 == u && hasher.setHash(Address.URL_SUBMIT))
    }

    function r(a) {
        var b;
        switch (a) {
            case Address.URL_SUBMIT_SUB:
                b = 0;
                break;
            case Address.URL_ABOUT_SUB:
                b = 1
        }
        return b
    }
    var s, z, w, t, v, y, b, u, H = 0,
        J = null,
        C = {
            x: 0
        },
        N = {
            x: 0
        },
        G = {
            x: 0,
            y: 1
        },
        I = {
            x: 0,
            y: 1
        },
        K, A, W;
    return {
        init: function(a) {
            s = a;
            z = document.getElementById("menu");
            z.getElementsByTagName("li");
            w = document.getElementById("popup");
            w.getElementsByClassName("p-move");
            v = w.getElementsByClassName("submit")[0];
            t = w.getElementsByClassName("about")[0];
            y = Submit.init(v);
            b = About.init(t);
            CMUtiles.removeDom(w);
            w.style.display = "block"
        },
        start: function(a) {
            return 0
        },
        ready: function(a) {},
        show: function(b) {
            u = r(b);
            s.appendChild(w);
            StageController.addResize("Popup", h);
            Triangle.show(w, "#fff", 0, K, W, 0, a)
        },
        hide: function() {
            Submit.blur();
            Triangle.show(w, "#fff", 1, K, W, 0, d)
        },
        change: function(a) {
            u = r(a);
            a = Circ.easeIn;
            var b = Back.easeOut;
            TweenLite.killTweensOf(N);
            TweenLite.killTweensOf(C);
            TweenLite.killTweensOf(I);
            TweenLite.killTweensOf(I);
            TweenLite.killDelayedCallsTo(p);
            0 == u ? (TweenLite.to(C, 0.4, {
                x: A,
                ease: a
            }), TweenLite.to(N, 0.6, {
                delay: 0.3,
                x: 0,
                ease: b,
                easeParams: [0.6]
            }), TweenLite.to(G, 0.4, {
                x: 0.34202,
                y: 0.93969,
                ease: Sine.easeIn
            }), TweenLite.to(I, 0.1, {
                x: 0.34202,
                y: 0.93969,
                ease: Cubic.easeOut
            }), TweenLite.to(I, 0.2, {
                delay: 0.5,
                x: -0.10452,
                y: 0.99452,
                ease: Cubic.easeOut
            }), TweenLite.to(I, 0.2, {
                delay: 0.7,
                x: 0,
                y: 1,
                ease: Cubic.easeOut
            })) : (TweenLite.to(N, 0.4, {
                    x: -A,
                    ease: a
                }), TweenLite.to(C, 0.6, {
                    delay: 0.3,
                    x: 0,
                    ease: b,
                    easeParams: [0.6]
                }),
                TweenLite.to(I, 0.4, {
                    x: -0.34202,
                    y: 0.93969,
                    ease: Sine.easeIn
                }), TweenLite.to(G, 0.1, {
                    x: -0.34202,
                    y: 0.93969,
                    ease: Cubic.easeOut
                }), TweenLite.to(G, 0.2, {
                    delay: 0.5,
                    x: 0.10452,
                    y: 0.99452,
                    ease: Cubic.easeOut
                }), TweenLite.to(G, 0.2, {
                    delay: 0.7,
                    x: 0,
                    y: 1,
                    ease: Cubic.easeOut
                }));
            TweenLite.delayedCall(0.9, p);
            H || (H = 1, k());
            Address.able()
        }
    }
}();
var About = About || function() {
    function a(a) {
        a = a.currentTarget.getAttribute("data-id") | 0;
        u[a].style[CMDetect.TIMING] = UI.easeExpo;
        u[a].style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scaleX(1)"
    }

    function d(a) {
        a = a.currentTarget.getAttribute("data-id") | 0;
        u[a].style[CMDetect.TIMING] = "cubic-bezier(0.6, 0.04, 0.98, 0.335)";
        u[a].style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scaleX(0)"
    }

    function m(a) {
        0 == (a.currentTarget.getAttribute("data-id") | 0) ? hasher.setHash(Address.URL_SUBMIT) : window.location.href =
            "mailto:cmiscm@gmail.com"
    }

    function k(a) {
        b.style[CMDetect.TIMING] = UI.easeExpo;
        b.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scaleX(1)"
    }

    function p(a) {
        b.style[CMDetect.TIMING] = "cubic-bezier(0.6, 0.04, 0.98, 0.335)";
        b.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scaleX(0)"
    }

    function h(a) {
        window.open("http://blog.cmiscm.com")
    }

    function n(a) {
        a = "http://twitter.com/share?url=" + encodeURIComponent(CMDetect.SITE_URL) + "&text=" + encodeURIComponent("A collection of inspiring short videos and GIFs / Booounce!");
        CMUtiles.openPopup(a, "", 600, 260)
    }

    function g(a) {
        a = "https://www.facebook.com/dialog/feed?app_id=" + CMDetect.APP_ID + "&link=" + encodeURIComponent(CMDetect.SITE_URL) + "&picture=" + encodeURIComponent(CMDetect.SITE_URL + "/images/share.png") + "&name=" + encodeURIComponent("Booounce") + "&caption=" + encodeURIComponent(CMDetect.SITE_URL) + "&description=" + encodeURIComponent("A collection of inspiring short videos and GIFs / Booounce!") + "&redirect_uri=" + encodeURIComponent(CMDetect.SITE_URL + "/close.html") + "&display=popup";
        CMUtiles.openPopup(a, "", 600, 500)
    }

    function r(a) {
        a = "https://plus.google.com/share?url=" + encodeURIComponent(CMDetect.SITE_URL);
        CMUtiles.openPopup(a, "", 600, 400)
    }

    function s(a) {
        a = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(CMDetect.SITE_URL) + "&media=" + encodeURIComponent(CMDetect.SITE_URL + "/images/share.png") + "&description=" + encodeURIComponent("Booounce");
        CMUtiles.openPopup(a, "", 700, 300)
    }
    var z, w, t, v, y, b, u = [],
        H, J, C, N, G, I, K;
    return {
        init: function(A) {
            z = A;
            w = z.getElementsByClassName("p-box")[0];
            t = w.getElementsByClassName("p-skew")[0];
            v = w.getElementsByClassName("p-skew2")[0];
            A = w.getElementsByTagName("li");
            var I = w.getElementsByTagName("span"),
                K, S;
            for (K = 0; 2 > K; K++) S = I[K].getElementsByTagName("i")[0], u[K] = S, S.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scaleX(0)", "pc" == CMDetect.DEVICE && (I[K].setAttribute("data-id", K), $(I[K]).on("mouseenter", a).on("mouseleave", d), S.style[CMDetect.DURATION] = ".4s"), $(I[K]).on("click", m);
            J = new UI.button("about-fb");
            J.setFacebook("circle-button big light about-fb");
            A[0].appendChild(J.dom);
            C = new UI.button("about-tw");
            C.setTwitter("circle-button big light about-ftwb");
            A[1].appendChild(C.dom);
            N = new UI.button("about-gp");
            N.setGplus("circle-button big light about-gp");
            A[2].appendChild(N.dom);
            G = new UI.button("about-pi");
            G.setPinterest("circle-button big light about-pi");
            A[3].appendChild(G.dom);
            H = v.getElementsByTagName("p")[0];
            y = z.getElementsByClassName("copy-link")[0];
            b = y.getElementsByTagName("i")[0];
            b.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px) scaleX(0)";
            $(J.dom).on("click", g);
            $(C.dom).on("click", n);
            $(N.dom).on("click", r);
            $(G.dom).on("click", s);
            "pc" == CMDetect.DEVICE && ($(y).on("mouseenter", k).on("mouseleave", p), b.style[CMDetect.DURATION] = ".4s");
            $(y).on("click", h);
            return t
        },
        resize: function(a, b) {
            I = a;
            K = b;
            var d = a - 2 * UI.GAP_X,
                g = b - 2 * UI.GAP_Y,
                h = 60;
            1E3 < d && (d = 1E3);
            447 < g && (g = 447);
            d = 48 * (Math.sqrt(d * d + g * g) / 1095.3579323673152);
            H.style.fontSize = d + "px";
            H.style.lineHeight = 1.18 * d + "px";
            0 == Address.sizeMode && (h = 20);
            d = v.getBoundingClientRect();
            w.style[CMDetect.TRANSFORM] =
                "translate3d(" + ((I - d.width >> 1) - h) + "px, " + ((K - d.height >> 1) - h) + "px, 0px)";
            t.style.height = 2 * d.height + "px"
        }
    }
}();
var Submit = Submit || function() {
    function a(a) {
        u || (u = 1, t.innerHTML = 1 == a ? "Thanks!" : "Error", t.style[CMDetect.DURATION] = "0s", t.style.opacity = 0, t.style[CMDetect.TRANSFORM] = "translate3d(0px, 20px, 0px)", a = z.getBoundingClientRect(), Triangle.show(y, "#d61e30", 1, a.width, a.height, 0, d))
    }

    function d() {
        y.appendChild(b);
        z.style.visibility = "hidden";
        TweenLite.delayedCall(0.01, function() {
            t.style[CMDetect.TIMING] = UI.easeExpo;
            t.style[CMDetect.DURATION] = ".3s";
            t.style.opacity = 1;
            t.style[CMDetect.TRANSFORM] = "translate3d(0px, 0px, 0px)";
            v.onOut();
            w.appendChild(v.dom);
            CMUtiles.removeDom(H.dom);
            Address.able()
        })
    }

    function m() {
        if (u) {
            u = 0;
            r.val("");
            t.style[CMDetect.TIMING] = "cubic-bezier(0.47, 0, 0.745, 0.715)";
            t.style[CMDetect.DURATION] = ".2s";
            t.style.opacity = 0;
            t.style[CMDetect.TRANSFORM] = "translate3d(0px, -20px, 0px)";
            z.style.visibility = "visible";
            var a = z.getBoundingClientRect();
            Triangle.show(y, "#d61e30", 0, a.width, a.height, 0, k)
        }
    }

    function k() {
        CMUtiles.removeDom(b)
    }

    function p(b) {
        u ? m() : "" == r.val() ? r.focus() : (Address.unable(), w.appendChild(H.dom),
            CMUtiles.removeDom(v.dom), b = {
                url: r.val()
            }, $.ajax({
                type: "POST",
                url: "data/submit.php",
                cache: "false",
                data: b,
                dataType: "json"
            }).done(function(b) {
                b.success ? a(1) : a(0)
            }).fail(function(b, d, g) {
                a(0)
            }))
    }
    var h, n, g, r, s, z, w, t, v, y, b, u = 0,
        H, J, C;
    return {
        init: function(a) {
            h = a;
            n = h.getElementsByClassName("p-box")[0];
            g = n.getElementsByClassName("p-skew")[0];
            s = n.getElementsByClassName("p-skew2")[0];
            y = n.getElementsByClassName("submit-dom")[0];
            b = document.createElement("div");
            b.className = "submit-msg";
            t = document.createElement("p");
            b.appendChild(t);
            z = n.getElementsByClassName("submit-input")[0];
            r = $(z.getElementsByTagName("input")[0]);
            w = n.getElementsByClassName("submit-button")[0];
            v = new UI.button("submit-ok");
            v.setOK("circle-button big light submit-ok");
            w.appendChild(v.dom);
            H = new UI.button("submit-dots");
            H.setDots("circle-button big light submit-dots bt-dots");
            $(v.dom).on("click", p);
            return g
        },
        resize: function(a, b) {
            J = a;
            C = b;
            var d = 60;
            0 == Address.sizeMode && (d = 20);
            var h = s.getBoundingClientRect();
            n.style[CMDetect.TRANSFORM] = "translate3d(" +
                ((J - h.width >> 1) - d) + "px, " + ((C - h.height >> 1) - d) + "px, 0px)";
            g.style.height = 2 * h.height + "px"
        },
        focus: function() {},
        blur: function() {},
        hideMsg: m
    }
}();
var Triangle = Triangle || function() {
    function a(a) {
        n = 1;
        d();
        a && a()
    }

    function d() {
        b && (window.cancelAnimationFrame(b), b = null);
        s = null;
        CMUtiles.removeDom(k)
    }

    function m(a) {
        n || (b = window.requestAnimationFrame(m), s || (s = a), 20 < a - s && (s = a, p.clearRect(0, 0, w, t), p.beginPath(), p.moveTo(r[0].x, r[0].y), p.lineTo(r[1].x, r[1].y), p.lineTo(r[2].x, r[2].y), p.lineTo(r[3].x, r[3].y), p.moveTo(r[0].x, r[0].y), p.quadraticCurveTo(r[0].x + (r[1].x - r[0].x >> 1), r[1].y - r[0].v, r[1].x, r[1].y), p.quadraticCurveTo(r[1].x + r[1].v, r[1].y + (r[2].y - r[1].y >>
            1), r[2].x, r[2].y), p.quadraticCurveTo(r[2].x - (r[2].x - r[3].x >> 1), r[2].y + r[2].v, r[3].x, r[3].y), p.quadraticCurveTo(r[3].x - r[3].v, r[3].y - (r[3].y - r[0].y >> 1), r[0].x, r[0].y), p.closePath(), p.fill(), p.globalCompositeOperation = "xor", p.beginPath(), p.fillRect(0, 0, w, t), p.closePath(), p.fill()))
    }
    var k, p, h, n = 0,
        g = [],
        r = [],
        s = null,
        z, w, t, v, y, b;
    return {
        setting: function() {
            k = document.createElement("canvas");
            k.className = "triangle-canvas"
        },
        show: function(d, s, J, C, N, G, I) {
            h = s;
            z = J;
            w = C;
            t = N;
            v = C >> 1;
            y = N >> 1;
            k.style.width = w + "px";
            k.style.height =
                t + "px";
            k.style[CMDetect.TRANSFORM] = "translate3d(0px, " + G + "px, 0px)";
            k.width = w;
            k.height = t;
            p = k.getContext("2d");
            p.fillStyle = h;
            z || p.fillRect(0, 0, w, t);
            d.appendChild(k);
            n = 0;
            b = window.requestAnimationFrame(m);
            z ? (d = 1, J = 0, C = d + 4 * J, s = Expo.easeInOut, G = y, N = 0, g = [{
                x: 0,
                y: y
            }, {
                x: w,
                y: y
            }, {
                x: w,
                y: y
            }, {
                x: 0,
                y: y
            }], r = [{
                x: 0,
                y: 0,
                v: G
            }, {
                x: w,
                y: 0,
                v: G
            }, {
                x: w,
                y: t,
                v: G
            }, {
                x: 0,
                y: t,
                v: G
            }]) : (d = 1.6, J = 0.05, C = d + 4 * J, s = Bounce.easeOut, G = 0, N = 100, g = [{
                x: 0,
                y: 0
            }, {
                x: w,
                y: 0
            }, {
                x: w,
                y: t
            }, {
                x: 0,
                y: t
            }], r = [{
                x: v,
                y: y,
                v: G
            }, {
                x: v,
                y: y,
                v: G
            }, {
                x: v,
                y: y,
                v: G
            }, {
                x: v,
                y: y,
                v: G
            }]);
            for (G = 0; 4 > G; G++) TweenLite.to(r[G], d, {
                delay: J * G,
                x: g[G].x,
                y: g[G].y,
                v: N,
                ease: s
            });
            TweenLite.delayedCall(C, a, [I])
        },
        dispose: d
    }
}();
var KeyEvents = KeyEvents || function() {
    function a(a) {
        if (Help.getIsHelp() && 27 == a.which) Help.hideHelp();
        else if (Search.getIsSearch() && 27 == a.which) Search.hideSearch();
        else if (!Search.getIsSearch() && Address.curURL != Address.URL_SUBMIT) switch (a.which) {
            case 72:
                Help.onClick();
                break;
            case 70:
                m();
                break;
            case 86:
                if (Address.curURL == Address.URL_VIEW) Control.onVolume();
                break;
            case 83:
                Search.onSearch();
                break;
            case 32:
                Address.curURL == Address.URL_VIEW && Player.clickPlay();
                break;
            case 40:
                List.onNext();
                break;
            case 38:
                List.onPrev()
        }
    }

    function d(a) {
        if (!Search.getIsSearch() && Address.curURL != Address.URL_SUBMIT) switch (a.which) {
            case 39:
                ScreenInfo.onNext();
                break;
            case 37:
                ScreenInfo.onPrev()
        }
    }

    function m() {
        screenfull.toggle(p)
    }

    function k() {
        screenfull.isFullscreen ? Control.setFull() : Control.setNormal()
    }
    var p, h = 0;
    return {
        init: function(m) {
            p = m;
            h = screenfull.enabled;
            $(document).on("keyup", a).on("keydown", d);
            if (h) $(document).on(screenfull.raw.fullscreenchange, k)
        },
        getIsFullSupport: function() {
            return h
        },
        onFull: m
    }
}();
var MouseOver = MouseOver || function() {
    function a() {
        CMDetect.isTouch && (TweenLite.killDelayedCallsTo(k), TweenLite.killDelayedCallsTo(n), TweenLite.killDelayedCallsTo(g), TweenLite.killDelayedCallsTo(z), TweenLite.killDelayedCallsTo(w))
    }

    function d(a) {
        y && y()
    }

    function m(a) {
        CMDetect.isTouch ? (TweenLite.killDelayedCallsTo(k), TweenLite.delayedCall(0.01, k)) : k()
    }

    function k() {
        b && b()
    }

    function p(a) {
        CMDetect.isTouch ? (TweenLite.killDelayedCallsTo(n), TweenLite.delayedCall(0.01, n)) : n()
    }

    function h(a) {
        CMDetect.isTouch ? (TweenLite.killDelayedCallsTo(g),
            TweenLite.delayedCall(0.01, g)) : g()
    }

    function n() {
        u && u()
    }

    function g() {
        H && H()
    }

    function r(a) {
        CMDetect.isTouch ? (TweenLite.killDelayedCallsTo(z), TweenLite.delayedCall(0.01, z)) : z()
    }

    function s(a) {
        CMDetect.isTouch ? (TweenLite.killDelayedCallsTo(w), TweenLite.delayedCall(0.01, w)) : w()
    }

    function z() {
        J && J()
    }

    function w() {
        C && C()
    }
    var t, v, y, b, u, H, J, C;
    return {
        move: function(a, g, h) {
            t = a;
            y = g;
            b = h;
            $(t).on("mouseleave", d).on("mousemove", m)
        },
        over: function(a, b, d, g, k, m) {
            t = a;
            u = b;
            H = d;
            $(t).on("mouseenter", p).on("mouseleave", h);
            v = g;
            J = k;
            C = m;
            $(v).on("mouseenter", r).on("mouseleave", s)
        },
        removeMove: function() {
            a();
            t && ($(t).off("mouseleave", d).off("mousemove", m), b = y = t = null)
        },
        removeOver: function() {
            a();
            t && ($(t).off("mouseenter", p).off("mouseleave", h), H = u = t = null);
            v && ($(v).off("mouseenter", r).off("mouseleave", s), C = J = v = null)
        },
        kill: a
    }
}();
