

// navigation bar

function toggleNaviagtion() {
    var e = document.getElementsByTagName("body")[0];
    if (e.classList) e.classList.toggle("menu-open");
    else {
        var t = e.className.split(" "),
            i = t.indexOf("menu-open");
        0 <= i ? t.splice(i, 1) : t.push("menu-open"), e.className = t.join(" ")
    }
}
for (var menu_click = document.getElementsByClassName("menu-link"), remove_menu = function(e) {
        var t = document.getElementsByTagName("body")[0];
        setTimeout(function() {
            t.classList.remove("menu-open")
        }, 200)
    }, i = 0; i < menu_click.length; i++) menu_click[i].addEventListener("click", remove_menu, !1);

// end of navigation bar

// other

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function t() {
        return (t = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
            }
            return e
        }).apply(this, arguments)
    }

    function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function s(t, a) {
        void 0 === t && (t = {}), void 0 === a && (a = {}), Object.keys(a).forEach(function(e) {
            void 0 === t[e] ? t[e] = a[e] : i(a[e]) && i(t[e]) && 0 < Object.keys(a[e]).length && s(t[e], a[e])
        })
    }
    var a = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function C() {
        var e = "undefined" != typeof document ? document : {};
        return s(e, a), e
    }
    var r = {
        document: a,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        },
        requestAnimationFrame: function(e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function S() {
        var e = "undefined" != typeof window ? window : {};
        return s(e, r), e
    }

    function n(e) {
        return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function o(e, t, a) {
        return (o = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(e, t, a) {
            var i = [null];
            i.push.apply(i, t);
            var s = new(Function.bind.apply(e, i));
            return a && l(s, a.prototype), s
        }).apply(null, arguments)
    }

    function d(e) {
        var i = "function" == typeof Map ? new Map : void 0;
        return (d = function(e) {
            if (null === e || (t = e, -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
            var t;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== i) {
                if (i.has(e)) return i.get(e);
                i.set(e, a)
            }

            function a() {
                return o(e, arguments, n(this).constructor)
            }
            return a.prototype = Object.create(e.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(a, e)
        })(e)
    }
    var p, u, c, h = (p = d(Array), c = p, (u = v).prototype = Object.create(c.prototype), (u.prototype.constructor = u).__proto__ = c, v);

    function v(e) {
        var t, a, i;
        return a = function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(t = p.call.apply(p, [this].concat(e)) || this), i = a.__proto__, Object.defineProperty(a, "__proto__", {
            get: function() {
                return i
            },
            set: function(e) {
                i.__proto__ = e
            }
        }), t
    }

    function f(e) {
        void 0 === e && (e = []);
        var t = [];
        return e.forEach(function(e) {
            Array.isArray(e) ? t.push.apply(t, f(e)) : t.push(e)
        }), t
    }

    function m(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function I(e, s) {
        var t = S(),
            r = C(),
            a = [];
        if (!s && e instanceof h) return e;
        if (!e) return new h(a);
        if ("string" == typeof e) {
            var i = e.trim();
            if (0 <= i.indexOf("<") && 0 <= i.indexOf(">")) {
                var n = "div";
                0 === i.indexOf("<li") && (n = "ul"), 0 === i.indexOf("<tr") && (n = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (n = "tr"), 0 === i.indexOf("<tbody") && (n = "table"), 0 === i.indexOf("<option") && (n = "select");
                var l = r.createElement(n);
                l.innerHTML = i;
                for (var o = 0; o < l.childNodes.length; o += 1) a.push(l.childNodes[o])
            } else a = function(e) {
                if ("string" != typeof e) return [e];
                for (var t = [], a = (s || r).querySelectorAll(e), i = 0; i < a.length; i += 1) t.push(a[i]);
                return t
            }(e.trim())
        } else if (e.nodeType || e === t || e === r) a.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof h) return e;
            a = e
        }
        return new h(function(e) {
            for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
            return t
        }(a))
    }
    I.fn = h.prototype;
    var g, b, y, w = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            var i = f(t.map(function(e) {
                return e.split(" ")
            }));
            return this.forEach(function(e) {
                var t;
                (t = e.classList).add.apply(t, i)
            }), this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            var i = f(t.map(function(e) {
                return e.split(" ")
            }));
            return this.forEach(function(e) {
                var t;
                (t = e.classList).remove.apply(t, i)
            }), this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            var i = f(t.map(function(e) {
                return e.split(" ")
            }));
            return 0 < m(this, function(t) {
                return 0 < i.filter(function(e) {
                    return t.classList.contains(e)
                }).length
            }).length
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            var i = f(t.map(function(e) {
                return e.split(" ")
            }));
            this.forEach(function(t) {
                i.forEach(function(e) {
                    t.classList.toggle(e)
                })
            })
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var a = 0; a < this.length; a += 1)
                if (2 === arguments.length) this[a].setAttribute(e, t);
                else
                    for (var i in e) this[a][i] = e[i], this[a].setAttribute(i, e[i]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            var i = t[0],
                r = t[1],
                n = t[2],
                s = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e), I(t).is(r)) n.apply(t, a);
                    else
                        for (var i = I(t).parents(), s = 0; s < i.length; s += 1) I(i[s]).is(r) && n.apply(i[s], a)
                }
            }

            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }
            "function" == typeof t[1] && (i = t[0], n = t[1], s = t[2], r = void 0), s = s || !1;
            for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
                var c = this[u];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
                            listener: n,
                            proxyListener: l
                        }), c.addEventListener(h, l, s)
                    } else
                        for (d = 0; d < p.length; d += 1) {
                            var v = p[d];
                            c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[v] || (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({
                                listener: n,
                                proxyListener: o
                            }), c.addEventListener(v, o, s)
                        }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n = n || !1;
            for (var l = i.split(" "), o = 0; o < l.length; o += 1)
                for (var d = l[o], p = 0; p < this.length; p += 1) {
                    var u = this[p],
                        c = void 0;
                    if (!s && u.dom7Listeners ? c = u.dom7Listeners[d] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]), c && c.length)
                        for (var h = c.length - 1; 0 <= h; h -= 1) {
                            var v = c[h];
                            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1)) : r || (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = S(), t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
            for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)
                for (var l = s[n], o = 0; o < this.length; o += 1) {
                    var d = this[o];
                    if (e.CustomEvent) {
                        var p = new e.CustomEvent(l, {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        });
                        d.dom7EventData = a.filter(function(e, t) {
                            return 0 < t
                        }), d.dispatchEvent(p), d.dom7EventData = [], delete d.dom7EventData
                    }
                }
            return this
        },
        transitionEnd: function(a) {
            var i = this;
            return a && i.on("transitionend", function e(t) {
                t.target === this && (a.call(this, t), i.off("transitionend", e))
            }), this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            var e = S();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (0 < this.length) {
                var e = S(),
                    t = C(),
                    a = this[0],
                    i = a.getBoundingClientRect(),
                    s = t.body,
                    r = a.clientTop || s.clientTop || 0,
                    n = a.clientLeft || s.clientLeft || 0,
                    l = a === e ? e.scrollY : a.scrollTop,
                    o = a === e ? e.scrollX : a.scrollLeft;
                return {
                    top: i.top + l - r,
                    left: i.left + o - n
                }
            }
            return null
        },
        css: function(e, t) {
            var a, i = S();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var s in e) this[a].style[s] = e[s];
                    return this
                }
                if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e) return this;
            for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
            return this
        },
        each: function(a) {
            return a && this.forEach(function(e, t) {
                a.apply(e, [e, t])
            }), this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, a, i = S(),
                s = C(),
                r = this[0];
            if (!r || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (r.matches) return r.matches(e);
                if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
                if (r.msMatchesSelector) return r.msMatchesSelector(e);
                for (t = I(e), a = 0; a < t.length; a += 1)
                    if (t[a] === r) return !0;
                return !1
            }
            if (e === s) return r === s;
            if (e === i) return r === i;
            if (e.nodeType || e instanceof h) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
                    if (t[a] === r) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t = this.length;
            if (t - 1 < e) return I([]);
            if (e < 0) {
                var a = t + e;
                return I(a < 0 ? [] : [this[a]])
            }
            return I([this[e]])
        },
        append: function() {
            for (var e, t = C(), a = 0; a < arguments.length; a += 1) {
                e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
                for (var i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        var s = t.createElement("div");
                        for (s.innerHTML = e; s.firstChild;) this[i].appendChild(s.firstChild)
                    } else if (e instanceof h)
                    for (var r = 0; r < e.length; r += 1) this[i].appendChild(e[r]);
                else this[i].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, a, i = C();
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var s = i.createElement("div");
                    for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(s.childNodes[a], this[t].childNodes[0])
                } else if (e instanceof h)
                for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && I(this[0].nextElementSibling).is(e) ? I([this[0].nextElementSibling]) : I([]) : this[0].nextElementSibling ? I([this[0].nextElementSibling]) : I([]) : I([])
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return I([]);
            for (; a.nextElementSibling;) {
                var i = a.nextElementSibling;
                e ? I(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return I(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && I(t.previousElementSibling).is(e) ? I([t.previousElementSibling]) : I([]) : t.previousElementSibling ? I([t.previousElementSibling]) : I([])
            }
            return I([])
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return I([]);
            for (; a.previousElementSibling;) {
                var i = a.previousElementSibling;
                e ? I(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return I(t)
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? I(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return I(t)
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i;) e ? I(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return I(t)
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? I([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1) {
                try {
                    var i = this[a].querySelectorAll(e)
                } catch (t) {
                    console.log(e)
                }
                for (var s = 0; s < i.length; s += 1) t.push(i[s])
            }
            return I(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].children, s = 0; s < i.length; s += 1) e && !I(i[s]).is(e) || t.push(i[s]);
            return I(t)
        },
        filter: function(e) {
            return I(m(this, e))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function A(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function D() {
        return Date.now()
    }

    function E(e, t) {
        void 0 === t && (t = "x");
        var a, i, s, r, n, l, o = S(),
            d = (r = e, (l = S()).getComputedStyle && (n = l.getComputedStyle(r, null)), !n && r.currentStyle && (n = r.currentStyle), n = n || r.style);
        return o.WebKitCSSMatrix ? (6 < (i = d.transform || d.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
            return e.replace(",", ".")
        }).join(", ")), s = new o.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = o.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = o.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function x(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function ne(e) {
        for (var t = Object(arguments.length <= 0 ? void 0 : e), a = ["__proto__", "constructor", "prototype"], i = 1; i < arguments.length; i += 1) {
            var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (null != s)
                for (var r = Object.keys(Object(s)).filter(function(e) {
                        return a.indexOf(e) < 0
                    }), n = 0, l = r.length; n < l; n += 1) {
                    var o = r[n],
                        d = Object.getOwnPropertyDescriptor(s, o);
                    void 0 !== d && d.enumerable && (x(t[o]) && x(s[o]) ? s[o].__swiper__ ? t[o] = s[o] : ne(t[o], s[o]) : !x(t[o]) && x(s[o]) ? (t[o] = {}, s[o].__swiper__ ? t[o] = s[o] : ne(t[o], s[o])) : t[o] = s[o])
                }
        }
        return t
    }

    function T(a, i) {
        Object.keys(i).forEach(function(t) {
            x(i[t]) && Object.keys(i[t]).forEach(function(e) {
                "function" == typeof i[t][e] && (i[t][e] = i[t][e].bind(a))
            }), a[t] = i[t]
        })
    }

    function M(e) {
        return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".")
    }

    function z(a, i, e, s) {
        var r = C();
        return e && Object.keys(s).forEach(function(e) {
            if (!i[e] && !0 === i.auto) {
                var t = r.createElement("div");
                t.className = s[e], a.append(t), i[e] = t
            }
        }), i
    }

    function P() {
        return g || (a = S(), e = C(), g = {
            touch: !!("ontouchstart" in a || a.DocumentTouch && e instanceof a.DocumentTouch),
            pointerEvents: !!a.PointerEvent && "maxTouchPoints" in a.navigator && 0 <= a.navigator.maxTouchPoints,
            observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    a.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in a
        }), g;
        var a, e
    }
    Object.keys(w).forEach(function(e) {
        Object.defineProperty(I.fn, e, {
            value: w[e],
            writable: !0
        })
    });
    var k = {
            name: "resize",
            create: function() {
                var n = this;
                ne(n, {
                    resize: {
                        observer: null,
                        createObserver: function() {
                            n && !n.destroyed && n.initialized && (n.resize.observer = new ResizeObserver(function(e) {
                                var t = n.width,
                                    a = n.height,
                                    s = t,
                                    r = a;
                                e.forEach(function(e) {
                                    var t = e.contentBoxSize,
                                        a = e.contentRect,
                                        i = e.target;
                                    i && i !== n.el || (s = a ? a.width : (t[0] || t).inlineSize, r = a ? a.height : (t[0] || t).blockSize)
                                }), s === t && r === a || n.resize.resizeHandler()
                            }), n.resize.observer.observe(n.el))
                        },
                        removeObserver: function() {
                            n.resize.observer && n.resize.observer.unobserve && n.el && (n.resize.observer.unobserve(n.el), n.resize.observer = null)
                        },
                        resizeHandler: function() {
                            n && !n.destroyed && n.initialized && (n.emit("beforeResize"), n.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            n && !n.destroyed && n.initialized && n.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function(e) {
                    var t = S();
                    e.params.resizeObserver && void 0 !== S().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
                },
                destroy: function(e) {
                    var t = S();
                    e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        },
        $ = {
            attach: function(e, t) {
                void 0 === t && (t = {});
                var a = S(),
                    i = this,
                    s = new(a.MutationObserver || a.WebkitMutationObserver)(function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                i.emit("observerUpdate", e[0])
                            };
                            a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                        } else i.emit("observerUpdate", e[0])
                    });
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(s)
            },
            init: function() {
                var e = this;
                if (e.support.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        L = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                T(this, {
                    observer: t({}, $, {
                        observers: []
                    })
                })
            },
            on: {
                init: function(e) {
                    e.observer.init()
                },
                destroy: function(e) {
                    e.observer.destroy()
                }
            }
        };

    function O() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    var N = !1;

    function G() {}
    var B, H = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !1,
            nested: !1,
            createElements: !1,
            enabled: !0,
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        },
        X = {
            modular: {
                useParams: function(a) {
                    var i = this;
                    i.modules && Object.keys(i.modules).forEach(function(e) {
                        var t = i.modules[e];
                        t.params && ne(a, t.params)
                    })
                },
                useModules: function(i) {
                    void 0 === i && (i = {});
                    var s = this;
                    s.modules && Object.keys(s.modules).forEach(function(e) {
                        var t = s.modules[e],
                            a = i[e] || {};
                        t.on && s.on && Object.keys(t.on).forEach(function(e) {
                            s.on(e, t.on[e])
                        }), t.create && t.create.bind(s)(a)
                    })
                }
            },
            eventsEmitter: {
                on: function(e, t, a) {
                    var i = this;
                    if ("function" != typeof t) return i;
                    var s = a ? "unshift" : "push";
                    return e.split(" ").forEach(function(e) {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
                    }), i
                },
                once: function(i, s, e) {
                    var r = this;
                    if ("function" != typeof s) return r;

                    function n() {
                        r.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        s.apply(r, t)
                    }
                    return n.__emitterProxy = s, r.on(i, n, e)
                },
                onAny: function(e, t) {
                    if ("function" != typeof e) return this;
                    var a = t ? "unshift" : "push";
                    return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[a](e), this
                },
                offAny: function(e) {
                    var t = this;
                    if (!t.eventsAnyListeners) return t;
                    var a = t.eventsAnyListeners.indexOf(e);
                    return 0 <= a && t.eventsAnyListeners.splice(a, 1), t
                },
                off: function(e, i) {
                    var s = this;
                    return s.eventsListeners && e.split(" ").forEach(function(a) {
                        void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].forEach(function(e, t) {
                            (e === i || e.__emitterProxy && e.__emitterProxy === i) && s.eventsListeners[a].splice(t, 1)
                        })
                    }), s
                },
                emit: function() {
                    var e, a, i, s = this;
                    if (!s.eventsListeners) return s;
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return i = "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], a = r.slice(1, r.length), s) : (e = r[0].events, a = r[0].data, r[0].context || s), a.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(function(t) {
                        s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function(e) {
                            e.apply(i, [t].concat(a))
                        }), s.eventsListeners && s.eventsListeners[t] && s.eventsListeners[t].forEach(function(e) {
                            e.apply(i, a)
                        })
                    }), s
                }
            },
            update: {
                updateSize: function() {
                    var e, t, a = this,
                        i = a.$el;
                    e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), ne(a, {
                        width: e,
                        height: t,
                        size: a.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var t = this;

                    function a(e) {
                        return t.isHorizontal() ? e : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[e]
                    }

                    function e(e, t) {
                        return parseFloat(e.getPropertyValue(a(t)) || 0)
                    }
                    var i = t.params,
                        s = t.$wrapperEl,
                        r = t.size,
                        n = t.rtlTranslate,
                        l = t.wrongRTL,
                        o = t.virtual && i.virtual.enabled,
                        d = o ? t.virtual.slides.length : t.slides.length,
                        p = s.children("." + t.params.slideClass),
                        u = o ? t.virtual.slides.length : p.length,
                        c = [],
                        h = [],
                        v = [],
                        f = i.slidesOffsetBefore;
                    "function" == typeof f && (f = i.slidesOffsetBefore.call(t));
                    var m = i.slidesOffsetAfter;
                    "function" == typeof m && (m = i.slidesOffsetAfter.call(t));
                    var g = t.snapGrid.length,
                        b = t.slidesGrid.length,
                        y = i.spaceBetween,
                        w = -f,
                        E = 0,
                        x = 0;
                    if (void 0 !== r) {
                        var T, C;
                        "string" == typeof y && 0 <= y.indexOf("%") && (y = parseFloat(y.replace("%", "")) / 100 * r), t.virtualSize = -y, n ? p.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : p.css({
                            marginRight: "",
                            marginBottom: ""
                        }), 1 < i.slidesPerColumn && (T = Math.floor(u / i.slidesPerColumn) === u / t.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
                        for (var S, M, z, P = i.slidesPerColumn, k = T / P, $ = Math.floor(u / i.slidesPerColumn), L = 0; L < u; L += 1) {
                            C = 0;
                            var I = p.eq(L);
                            if (1 < i.slidesPerColumn) {
                                var O = void 0,
                                    A = void 0,
                                    D = void 0;
                                if ("row" === i.slidesPerColumnFill && 1 < i.slidesPerGroup) {
                                    var N = Math.floor(L / (i.slidesPerGroup * i.slidesPerColumn)),
                                        G = L - i.slidesPerColumn * i.slidesPerGroup * N,
                                        B = 0 === N ? i.slidesPerGroup : Math.min(Math.ceil((u - N * P * i.slidesPerGroup) / P), i.slidesPerGroup);
                                    O = (A = G - (D = Math.floor(G / B)) * B + N * i.slidesPerGroup) + D * T / P, I.css({
                                        "-webkit-box-ordinal-group": O,
                                        "-moz-box-ordinal-group": O,
                                        "-ms-flex-order": O,
                                        "-webkit-order": O,
                                        order: O
                                    })
                                } else "column" === i.slidesPerColumnFill ? (D = L - (A = Math.floor(L / P)) * P, ($ < A || A === $ && D === P - 1) && (D += 1) >= P && (D = 0, A += 1)) : A = L - (D = Math.floor(L / k)) * k;
                                I.css(a("margin-top"), 0 !== D && i.spaceBetween && i.spaceBetween + "px")
                            }
                            if ("none" !== I.css("display")) {
                                if ("auto" === i.slidesPerView) {
                                    var H = getComputedStyle(I[0]),
                                        X = I[0].style.transform,
                                        Y = I[0].style.webkitTransform;
                                    if (X && (I[0].style.transform = "none"), Y && (I[0].style.webkitTransform = "none"), i.roundLengths) C = t.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                                    else {
                                        var R = e(H, "width"),
                                            W = e(H, "padding-left"),
                                            V = e(H, "padding-right"),
                                            F = e(H, "margin-left"),
                                            _ = e(H, "margin-right"),
                                            q = H.getPropertyValue("box-sizing");
                                        if (q && "border-box" === q) C = R + F + _;
                                        else {
                                            var j = I[0],
                                                U = j.clientWidth;
                                            C = R + W + V + F + _ + (j.offsetWidth - U)
                                        }
                                    }
                                    X && (I[0].style.transform = X), Y && (I[0].style.webkitTransform = Y), i.roundLengths && (C = Math.floor(C))
                                } else C = (r - (i.slidesPerView - 1) * y) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), p[L] && (p[L].style[a("width")] = C + "px");
                                p[L] && (p[L].swiperSlideSize = C), v.push(C), i.centeredSlides ? (w = w + C / 2 + E / 2 + y, 0 === E && 0 !== L && (w = w - r / 2 - y), 0 === L && (w = w - r / 2 - y), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), x % i.slidesPerGroup == 0 && c.push(w), h.push(w)) : (i.roundLengths && (w = Math.floor(w)), (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && c.push(w), h.push(w), w = w + C + y), t.virtualSize += C + y, E = C, x += 1
                            }
                        }
                        if (t.virtualSize = Math.max(t.virtualSize, r) + m, n && l && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
                                width: t.virtualSize + i.spaceBetween + "px"
                            }), i.setWrapperSize && s.css(((M = {})[a("width")] = t.virtualSize + i.spaceBetween + "px", M)), 1 < i.slidesPerColumn && (t.virtualSize = (C + i.spaceBetween) * T, t.virtualSize = Math.ceil(t.virtualSize / i.slidesPerColumn) - i.spaceBetween, s.css(((z = {})[a("width")] = t.virtualSize + i.spaceBetween + "px", z)), i.centeredSlides)) {
                            S = [];
                            for (var K = 0; K < c.length; K += 1) {
                                var Z = c[K];
                                i.roundLengths && (Z = Math.floor(Z)), c[K] < t.virtualSize + c[0] && S.push(Z)
                            }
                            c = S
                        }
                        if (!i.centeredSlides) {
                            S = [];
                            for (var J = 0; J < c.length; J += 1) {
                                var Q = c[J];
                                i.roundLengths && (Q = Math.floor(Q)), c[J] <= t.virtualSize - r && S.push(Q)
                            }
                            c = S, 1 < Math.floor(t.virtualSize - r) - Math.floor(c[c.length - 1]) && c.push(t.virtualSize - r)
                        }
                        if (0 === c.length && (c = [0]), 0 !== i.spaceBetween) {
                            var ee, te = t.isHorizontal() && n ? "marginLeft" : a("marginRight");
                            p.filter(function(e, t) {
                                return !i.cssMode || t !== p.length - 1
                            }).css(((ee = {})[te] = y + "px", ee))
                        }
                        if (i.centeredSlides && i.centeredSlidesBounds) {
                            var ae = 0;
                            v.forEach(function(e) {
                                ae += e + (i.spaceBetween ? i.spaceBetween : 0)
                            });
                            var ie = (ae -= i.spaceBetween) - r;
                            c = c.map(function(e) {
                                return e < 0 ? -f : ie < e ? ie + m : e
                            })
                        }
                        if (i.centerInsufficientSlides) {
                            var se = 0;
                            if (v.forEach(function(e) {
                                    se += e + (i.spaceBetween ? i.spaceBetween : 0)
                                }), (se -= i.spaceBetween) < r) {
                                var re = (r - se) / 2;
                                c.forEach(function(e, t) {
                                    c[t] = e - re
                                }), h.forEach(function(e, t) {
                                    h[t] = e + re
                                })
                            }
                        }
                        ne(t, {
                            slides: p,
                            snapGrid: c,
                            slidesGrid: h,
                            slidesSizesGrid: v
                        }), u !== d && t.emit("slidesLengthChange"), c.length !== g && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), h.length !== b && t.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(e) {
                    var t, a = this,
                        i = [],
                        s = a.virtual && a.params.virtual.enabled,
                        r = 0;
                    "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);

                    function n(t) {
                        return s ? a.slides.filter(function(e) {
                            return parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t
                        })[0] : a.slides.eq(t)[0]
                    }
                    if ("auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                        if (a.params.centeredSlides) a.visibleSlides.each(function(e) {
                            i.push(e)
                        });
                        else
                            for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                                var l = a.activeIndex + t;
                                if (l > a.slides.length && !s) break;
                                i.push(n(l))
                            } else i.push(n(a.activeIndex));
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) {
                            var o = i[t].offsetHeight;
                            r = r < o ? o : r
                        }
                    r && a.$wrapperEl.css("height", r + "px")
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this,
                        a = t.params,
                        i = t.slides,
                        s = t.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                        var r = -e;
                        s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (var n = 0; n < i.length; n += 1) {
                            var l = i[n],
                                o = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);
                            if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
                                var d = -(r - l.swiperSlideOffset),
                                    p = d + t.slidesSizesGrid[n];
                                (0 <= d && d < t.size - 1 || 1 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
                            }
                            l.progress = s ? -o : o
                        }
                        t.visibleSlides = I(t.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    var t = this;
                    if (void 0 === e) {
                        var a = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * a || 0
                    }
                    var i = t.params,
                        s = t.maxTranslate() - t.minTranslate(),
                        r = t.progress,
                        n = t.isBeginning,
                        l = t.isEnd,
                        o = n,
                        d = l;
                    l = 0 == s ? n = !(r = 0) : (n = (r = (e - t.minTranslate()) / s) <= 0, 1 <= r), ne(t, {
                        progress: r,
                        isBeginning: n,
                        isEnd: l
                    }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !n || d && !l) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function() {
                    var e, t = this,
                        a = t.slides,
                        i = t.params,
                        s = t.$wrapperEl,
                        r = t.activeIndex,
                        n = t.realIndex,
                        l = t.virtual && i.virtual.enabled;
                    a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = l ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
                    var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
                    var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    var t, a = this,
                        i = a.rtlTranslate ? a.translate : -a.translate,
                        s = a.slidesGrid,
                        r = a.snapGrid,
                        n = a.params,
                        l = a.activeIndex,
                        o = a.realIndex,
                        d = a.snapIndex,
                        p = e;
                    if (void 0 === p) {
                        for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? p = u : i >= s[u] && i < s[u + 1] && (p = u + 1) : i >= s[u] && (p = u);
                        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
                    }
                    if (0 <= r.indexOf(i)) t = r.indexOf(i);
                    else {
                        var c = Math.min(n.slidesPerGroupSkip, p);
                        t = c + Math.floor((p - c) / n.slidesPerGroup)
                    }
                    if (t >= r.length && (t = r.length - 1), p !== l) {
                        var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                        ne(a, {
                            snapIndex: t,
                            realIndex: h,
                            previousIndex: l,
                            activeIndex: p
                        }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !== h && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange")
                    } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t, a = this,
                        i = a.params,
                        s = I(e.target).closest("." + i.slideClass)[0],
                        r = !1;
                    if (s)
                        for (var n = 0; n < a.slides.length; n += 1)
                            if (a.slides[n] === s) {
                                r = !0, t = n;
                                break
                            }
                    if (!s || !r) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
                    a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(I(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = t, i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        a = this.rtlTranslate,
                        i = this.translate,
                        s = this.$wrapperEl;
                    if (t.virtualTranslate) return a ? -i : i;
                    if (t.cssMode) return i;
                    var r = E(s[0], e);
                    return a && (r = -r), r || 0
                },
                setTranslate: function(e, t) {
                    var a = this,
                        i = a.rtlTranslate,
                        s = a.params,
                        r = a.$wrapperEl,
                        n = a.wrapperEl,
                        l = a.progress,
                        o = 0,
                        d = 0;
                    a.isHorizontal() ? o = i ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : d;
                    var p = a.maxTranslate() - a.minTranslate();
                    (0 == p ? 0 : (e - a.minTranslate()) / p) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, a, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
                    var r = this,
                        n = r.params,
                        l = r.wrapperEl;
                    if (r.animating && n.preventInteractionOnTransition) return !1;
                    var o, d = r.minTranslate(),
                        p = r.maxTranslate();
                    if (o = i && d < e ? d : i && e < p ? p : e, r.updateProgress(o), n.cssMode) {
                        var u, c = r.isHorizontal();
                        return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -o : l.scrollTo ? l.scrollTo(((u = {})[c ? "left" : "top"] = -o, u.behavior = "smooth", u)) : l[c ? "scrollLeft" : "scrollTop"] = -o, !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var a = this,
                        i = a.activeIndex,
                        s = a.params,
                        r = a.previousIndex;
                    if (!s.cssMode) {
                        s.autoHeight && a.updateAutoHeight();
                        var n = t;
                        if (n = n || (r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
                            if ("reset" === n) return void a.emit("slideResetTransitionStart");
                            a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
                        }
                    }
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var a = this,
                        i = a.activeIndex,
                        s = a.previousIndex,
                        r = a.params;
                    if (a.animating = !1, !r.cssMode) {
                        a.setTransition(0);
                        var n = t;
                        if (n = n || (s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
                            if ("reset" === n) return void a.emit("slideResetTransitionEnd");
                            a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
                        }
                    }
                }
            },
            slide: {
                slideTo: function(e, t, a, i, s) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                    if ("string" == typeof e) {
                        var r = parseInt(e, 10);
                        if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                        e = r
                    }
                    var n = this,
                        l = e;
                    l < 0 && (l = 0);
                    var o = n.params,
                        d = n.snapGrid,
                        p = n.slidesGrid,
                        u = n.previousIndex,
                        c = n.activeIndex,
                        h = n.rtlTranslate,
                        v = n.wrapperEl,
                        f = n.enabled;
                    if (n.animating && o.preventInteractionOnTransition || !f && !i && !s) return !1;
                    var m = Math.min(n.params.slidesPerGroupSkip, l),
                        g = m + Math.floor((l - m) / n.params.slidesPerGroup);
                    g >= d.length && (g = d.length - 1), (c || o.initialSlide || 0) === (u || 0) && a && n.emit("beforeSlideChangeStart");
                    var b, y = -d[g];
                    if (n.updateProgress(y), o.normalizeSlideIndex)
                        for (var w = 0; w < p.length; w += 1) {
                            var E = -Math.floor(100 * y),
                                x = Math.floor(100 * p[w]),
                                T = Math.floor(100 * p[w + 1]);
                            void 0 !== p[w + 1] ? x <= E && E < T - (T - x) / 2 ? l = w : x <= E && E < T && (l = w + 1) : x <= E && (l = w)
                        }
                    if (n.initialized && l !== c) {
                        if (!n.allowSlideNext && y < n.translate && y < n.minTranslate()) return !1;
                        if (!n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (c || 0) !== l) return !1
                    }
                    if (b = c < l ? "next" : l < c ? "prev" : "reset", h && -y === n.translate || !h && y === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(y), "reset" != b && (n.transitionStart(a, b), n.transitionEnd(a, b)), !1;
                    if (o.cssMode) {
                        var C, S = n.isHorizontal(),
                            M = -y;
                        return h && (M = v.scrollWidth - v.offsetWidth - M), 0 === t ? v[S ? "scrollLeft" : "scrollTop"] = M : v.scrollTo ? v.scrollTo(((C = {})[S ? "left" : "top"] = M, C.behavior = "smooth", C)) : v[S ? "scrollLeft" : "scrollTop"] = M, !0
                    }
                    return 0 === t ? (n.setTransition(0), n.setTranslate(y), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.transitionEnd(a, b)) : (n.setTransition(t), n.setTranslate(y), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(a, b))
                    }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function(e, t, a, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
                    var s = e;
                    return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
                },
                slideNext: function(e, t, a) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        r = i.animating;
                    if (!i.enabled) return i;
                    var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                    if (s.loop) {
                        if (r && s.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }
                    return i.slideTo(i.activeIndex + n, e, t, a)
                },
                slidePrev: function(e, t, a) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        r = i.animating,
                        n = i.snapGrid,
                        l = i.slidesGrid,
                        o = i.rtlTranslate;
                    if (!i.enabled) return i;
                    if (s.loop) {
                        if (r && s.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }

                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var p = d(o ? i.translate : -i.translate),
                        u = n.map(function(e) {
                            return d(e)
                        });
                    n[u.indexOf(p)];
                    var c, h = n[u.indexOf(p) - 1];
                    return void 0 === h && s.cssMode && n.forEach(function(e) {
                        !h && e <= p && (h = e)
                    }), void 0 !== h && (c = l.indexOf(h)) < 0 && (c = i.activeIndex - 1), i.slideTo(c, e, t, a)
                },
                slideReset: function(e, t, a) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
                },
                slideToClosest: function(e, t, a, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                    var s = this,
                        r = s.activeIndex,
                        n = Math.min(s.params.slidesPerGroupSkip, r),
                        l = n + Math.floor((r - n) / s.params.slidesPerGroup),
                        o = s.rtlTranslate ? s.translate : -s.translate;
                    if (o >= s.snapGrid[l]) {
                        var d = s.snapGrid[l];
                        o - d > (s.snapGrid[l + 1] - d) * i && (r += s.params.slidesPerGroup)
                    } else {
                        var p = s.snapGrid[l - 1];
                        o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup)
                    }
                    return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, a)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        a = t.params,
                        i = t.$wrapperEl,
                        s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
                        r = t.clickedIndex;
                    if (a.loop) {
                        if (t.animating) return;
                        e = parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), A(function() {
                            t.slideTo(r)
                        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), A(function() {
                            t.slideTo(r)
                        })) : t.slideTo(r)
                    } else t.slideTo(r)
                }
            },
            loop: {
                loopCreate: function() {
                    var i = this,
                        e = C(),
                        t = i.params,
                        a = i.$wrapperEl;
                    a.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
                    var s = a.children("." + t.slideClass);
                    if (t.loopFillGroupWithBlank) {
                        var r = t.slidesPerGroup - s.length % t.slidesPerGroup;
                        if (r !== t.slidesPerGroup) {
                            for (var n = 0; n < r; n += 1) {
                                var l = I(e.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                                a.append(l)
                            }
                            s = a.children("." + t.slideClass)
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length), i.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), i.loopedSlides += t.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
                    var o = [],
                        d = [];
                    s.each(function(e, t) {
                        var a = I(e);
                        t < i.loopedSlides && d.push(e), t < s.length && t >= s.length - i.loopedSlides && o.push(e), a.attr("data-swiper-slide-index", t)
                    });
                    for (var p = 0; p < d.length; p += 1) a.append(I(d[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (var u = o.length - 1; 0 <= u; u -= 1) a.prepend(I(o[u].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function() {
                    var e = this;
                    e.emit("beforeLoopFix");
                    var t, a = e.activeIndex,
                        i = e.slides,
                        s = e.loopedSlides,
                        r = e.allowSlidePrev,
                        n = e.allowSlideNext,
                        l = e.snapGrid,
                        o = e.rtlTranslate;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    var d = -l[a] - e.getTranslate();
                    a < s ? (t = i.length - 3 * s + a, t += s, e.slideTo(t, 0, !1, !0) && 0 != d && e.setTranslate((o ? -e.translate : e.translate) - d)) : a >= i.length - s && (t = -i.length + a + s, t += s, e.slideTo(t, 0, !1, !0) && 0 != d && e.setTranslate((o ? -e.translate : e.translate) - d)), e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix")
                },
                loopDestroy: function() {
                    var e = this.$wrapperEl,
                        t = this.params,
                        a = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    var t = this;
                    if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                        var a = t.el;
                        a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() {
                    var e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
                }
            },
            manipulation: {
                appendSlide: function(e) {
                    var t = this,
                        a = t.$wrapperEl,
                        i = t.params;
                    if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                    else a.append(e);
                    i.loop && t.loopCreate(), i.observer && t.support.observer || t.update()
                },
                prependSlide: function(e) {
                    var t = this,
                        a = t.params,
                        i = t.$wrapperEl,
                        s = t.activeIndex;
                    a.loop && t.loopDestroy();
                    var r = s + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                        r = s + e.length
                    } else i.prepend(e);
                    a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1)
                },
                addSlide: function(e, t) {
                    var a = this,
                        i = a.$wrapperEl,
                        s = a.params,
                        r = a.activeIndex;
                    s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
                    var n = a.slides.length;
                    if (e <= 0) a.prependSlide(t);
                    else if (n <= e) a.appendSlide(t);
                    else {
                        for (var l = e < r ? r + 1 : r, o = [], d = n - 1; e <= d; d -= 1) {
                            var p = a.slides.eq(d);
                            p.remove(), o.unshift(p)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
                            l = e < r ? r + t.length : r
                        } else i.append(t);
                        for (var c = 0; c < o.length; c += 1) i.append(o[c]);
                        s.loop && a.loopCreate(), s.observer && a.support.observer || a.update(), s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1)
                    }
                },
                removeSlide: function(e) {
                    var t = this,
                        a = t.params,
                        i = t.$wrapperEl,
                        s = t.activeIndex;
                    a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
                    var r, n = s;
                    if ("object" == typeof e && "length" in e) {
                        for (var l = 0; l < e.length; l += 1) r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                        n = Math.max(n, 0)
                    } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
                    a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            events: {
                attachEvents: function() {
                    var e = this,
                        t = C(),
                        a = e.params,
                        i = e.touchEvents,
                        s = e.el,
                        r = e.wrapperEl,
                        n = e.device,
                        l = e.support;
                    e.onTouchStart = function(e) {
                        var t = this,
                            a = C(),
                            i = S(),
                            s = t.touchEventsData,
                            r = t.params,
                            n = t.touches;
                        if (t.enabled && (!t.animating || !r.preventInteractionOnTransition)) {
                            var l = e;
                            l.originalEvent && (l = l.originalEvent);
                            var o = I(l.target);
                            if (("wrapper" !== r.touchEventsTarget || o.closest(t.wrapperEl).length) && (s.isTouchEvent = "touchstart" === l.type, (s.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!s.isTouchEvent && "button" in l && 0 < l.button || s.isTouched && s.isMoved)))
                                if (!!r.noSwipingClass && "" !== r.noSwipingClass && l.target && l.target.shadowRoot && e.path && e.path[0] && (o = I(e.path[0])), r.noSwiping && o.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) t.allowClick = !0;
                                else if (!r.swipeHandler || o.closest(r.swipeHandler)[0]) {
                                n.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, n.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                var d = n.currentX,
                                    p = n.currentY,
                                    u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                                    c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                                if (u && (d <= c || d >= i.innerWidth - c)) {
                                    if ("prevent" !== u) return;
                                    e.preventDefault()
                                }
                                if (ne(s, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }), n.startX = d, n.startY = p, s.touchStartTime = D(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < r.threshold && (s.allowThresholdMove = !1), "touchstart" !== l.type) {
                                    var h = !0;
                                    o.is(s.formElements) && (h = !1), a.activeElement && I(a.activeElement).is(s.formElements) && a.activeElement !== o[0] && a.activeElement.blur();
                                    var v = h && t.allowTouchMove && r.touchStartPreventDefault;
                                    !r.touchStartForcePreventDefault && !v || o[0].isContentEditable || l.preventDefault()
                                }
                                t.emit("touchStart", l)
                            }
                        }
                    }.bind(e), e.onTouchMove = function(e) {
                        var t = C(),
                            a = this,
                            i = a.touchEventsData,
                            s = a.params,
                            r = a.touches,
                            n = a.rtlTranslate;
                        if (a.enabled) {
                            var l = e;
                            if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
                                if (!i.isTouchEvent || "touchmove" === l.type) {
                                    var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                                        d = "touchmove" === l.type ? o.pageX : l.pageX,
                                        p = "touchmove" === l.type ? o.pageY : l.pageY;
                                    if (l.preventedByNestedSwiper) return r.startX = d, void(r.startY = p);
                                    if (!a.allowTouchMove) return a.allowClick = !1, void(i.isTouched && (ne(r, {
                                        startX: d,
                                        startY: p,
                                        currentX: d,
                                        currentY: p
                                    }), i.touchStartTime = D()));
                                    if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                                        if (a.isVertical()) {
                                            if (p < r.startY && a.translate <= a.maxTranslate() || p > r.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                                        } else if (d < r.startX && a.translate <= a.maxTranslate() || d > r.startX && a.translate >= a.minTranslate()) return;
                                    if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && I(l.target).is(i.formElements)) return i.isMoved = !0, void(a.allowClick = !1);
                                    if (i.allowTouchCallbacks && a.emit("touchMove", l), !(l.targetTouches && 1 < l.targetTouches.length)) {
                                        r.currentX = d, r.currentY = p;
                                        var u, c = r.currentX - r.startX,
                                            h = r.currentY - r.startY;
                                        if (!(a.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold))
                                            if (void 0 === i.isScrolling && (a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : 25 <= c * c + h * h && (u = 180 * Math.atan2(Math.abs(h), Math.abs(c)) / Math.PI, i.isScrolling = a.isHorizontal() ? u > s.touchAngle : 90 - u > s.touchAngle)), i.isScrolling && a.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                                            else if (i.startMoving) {
                                            a.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", l)), a.emit("sliderMove", l), i.isMoved = !0;
                                            var v = a.isHorizontal() ? c : h;
                                            r.diff = v, v *= s.touchRatio, n && (v = -v), a.swipeDirection = 0 < v ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                                            var f = !0,
                                                m = s.resistanceRatio;
                                            if (s.touchReleaseOnEdges && (m = 0), 0 < v && i.currentTranslate > a.minTranslate() ? (f = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < a.maxTranslate() && (f = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - v, m))), f && (l.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate), 0 < s.threshold) {
                                                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                            }
                                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                                                position: r[a.isHorizontal() ? "startX" : "startY"],
                                                time: i.touchStartTime
                                            }), i.velocities.push({
                                                position: r[a.isHorizontal() ? "currentX" : "currentY"],
                                                time: D()
                                            })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate))
                                        }
                                    }
                                }
                            } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", l)
                        }
                    }.bind(e), e.onTouchEnd = function(e) {
                        var t = this,
                            a = t.touchEventsData,
                            i = t.params,
                            s = t.touches,
                            r = t.rtlTranslate,
                            n = t.$wrapperEl,
                            l = t.slidesGrid,
                            o = t.snapGrid;
                        if (t.enabled) {
                            var d = e;
                            if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
                            i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                            var p, u = D(),
                                c = u - a.touchStartTime;
                            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), a.lastClickTime = D(), A(function() {
                                    t.destroyed || (t.allowClick = !0)
                                }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
                            if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode)
                                if (i.freeMode) {
                                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                                    if (p > -t.maxTranslate()) return void(t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
                                    if (i.freeModeMomentum) {
                                        if (1 < a.velocities.length) {
                                            var h = a.velocities.pop(),
                                                v = a.velocities.pop(),
                                                f = h.position - v.position,
                                                m = h.time - v.time;
                                            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < D() - h.time) && (t.velocity = 0)
                                        } else t.velocity = 0;
                                        t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                                        var g = 1e3 * i.freeModeMomentumRatio,
                                            b = t.velocity * g,
                                            y = t.translate + b;
                                        r && (y = -y);
                                        var w, E, x = !1,
                                            T = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                        if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -T && (y = t.maxTranslate() - T), w = t.maxTranslate(), x = !0, a.allowMomentumBounce = !0) : y = t.maxTranslate(), i.loop && i.centeredSlides && (E = !0);
                                        else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > T && (y = t.minTranslate() + T), w = t.minTranslate(), x = !0, a.allowMomentumBounce = !0) : y = t.minTranslate(), i.loop && i.centeredSlides && (E = !0);
                                        else if (i.freeModeSticky) {
                                            for (var C, S = 0; S < o.length; S += 1)
                                                if (o[S] > -y) {
                                                    C = S;
                                                    break
                                                }
                                            y = -(y = Math.abs(o[C] - y) < Math.abs(o[C - 1] - y) || "next" === t.swipeDirection ? o[C] : o[C - 1])
                                        }
                                        if (E && t.once("transitionEnd", function() {
                                                t.loopFix()
                                            }), 0 !== t.velocity) {
                                            if (g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), i.freeModeSticky) {
                                                var M = Math.abs((r ? -y : y) - t.translate),
                                                    z = t.slidesSizesGrid[t.activeIndex];
                                                g = M < z ? i.speed : M < 2 * z ? 1.5 * i.speed : 2.5 * i.speed
                                            }
                                        } else if (i.freeModeSticky) return void t.slideToClosest();
                                        i.freeModeMomentumBounce && x ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
                                            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function() {
                                                t.setTranslate(w), n.transitionEnd(function() {
                                                    t && !t.destroyed && t.transitionEnd()
                                                })
                                            }, 0))
                                        })) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(y)), t.updateActiveIndex(), t.updateSlidesClasses()
                                    } else {
                                        if (i.freeModeSticky) return void t.slideToClosest();
                                        i.freeMode && t.emit("_freeModeNoMomentumRelease")
                                    }(!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                                } else {
                                    for (var P = 0, k = t.slidesSizesGrid[0], $ = 0; $ < l.length; $ += $ < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                                        var L = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                                        void 0 !== l[$ + L] ? p >= l[$] && p < l[$ + L] && (k = l[(P = $) + L] - l[$]) : p >= l[$] && (P = $, k = l[l.length - 1] - l[l.length - 2])
                                    }
                                    var I = (p - l[P]) / k,
                                        O = P < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                                    if (c > i.longSwipesMs) {
                                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                                        "next" === t.swipeDirection && (I >= i.longSwipesRatio ? t.slideTo(P + O) : t.slideTo(P)), "prev" === t.swipeDirection && (I > 1 - i.longSwipesRatio ? t.slideTo(P + O) : t.slideTo(P))
                                    } else {
                                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                                        !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(P + O), "prev" === t.swipeDirection && t.slideTo(P)) : d.target === t.navigation.nextEl ? t.slideTo(P + O) : t.slideTo(P)
                                    }
                                }
                        }
                    }.bind(e), a.cssMode && (e.onScroll = function() {
                        var e = this,
                            t = e.wrapperEl,
                            a = e.rtlTranslate;
                        if (e.enabled) {
                            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                            var i = e.maxTranslate() - e.minTranslate();
                            (0 == i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
                        }
                    }.bind(e)), e.onClick = function(e) {
                        var t = this;
                        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
                    }.bind(e);
                    var o = !!a.nested;
                    if (!l.touch && l.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, o), t.addEventListener(i.end, e.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var d = !("touchstart" !== i.start || !l.passiveListener || !a.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(i.start, e.onTouchStart, d), s.addEventListener(i.move, e.onTouchMove, l.passiveListener ? {
                                passive: !1,
                                capture: o
                            } : o), s.addEventListener(i.end, e.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, d), N || (t.addEventListener("touchstart", G), N = !0)
                        }(a.simulateTouch && !n.ios && !n.android || a.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, o), t.addEventListener("mouseup", e.onTouchEnd, !1))
                    }(a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), a.cssMode && r.addEventListener("scroll", e.onScroll), a.updateOnWindowResize ? e.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e.on("observerUpdate", O, !0)
                },
                detachEvents: function() {
                    var e = this,
                        t = C(),
                        a = e.params,
                        i = e.touchEvents,
                        s = e.el,
                        r = e.wrapperEl,
                        n = e.device,
                        l = e.support,
                        o = !!a.nested;
                    if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, o), t.removeEventListener(i.end, e.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var d = !("onTouchStart" !== i.start || !l.passiveListener || !a.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(i.start, e.onTouchStart, d), s.removeEventListener(i.move, e.onTouchMove, o), s.removeEventListener(i.end, e.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, d)
                        }(a.simulateTouch && !n.ios && !n.android || a.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, o), t.removeEventListener("mouseup", e.onTouchEnd, !1))
                    }(a.preventClicks || a.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), a.cssMode && r.removeEventListener("scroll", e.onScroll), e.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this,
                        t = e.activeIndex,
                        a = e.initialized,
                        i = e.loopedSlides,
                        s = void 0 === i ? 0 : i,
                        r = e.params,
                        n = e.$el,
                        l = r.breakpoints;
                    if (l && (!l || 0 !== Object.keys(l).length)) {
                        var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                        if (o && e.currentBreakpoint !== o) {
                            var d = o in l ? l[o] : void 0;
                            d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(e) {
                                var t = d[e];
                                void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            });
                            var p = d || e.originalParams,
                                u = 1 < r.slidesPerColumn,
                                c = 1 < p.slidesPerColumn,
                                h = r.enabled;
                            u && !c ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !u && c && (n.addClass(r.containerModifierClass + "multirow"), "column" === p.slidesPerColumnFill && n.addClass(r.containerModifierClass + "multirow-column"), e.emitContainerClasses());
                            var v = p.direction && p.direction !== r.direction,
                                f = r.loop && (p.slidesPerView !== r.slidesPerView || v);
                            v && a && e.changeDirection(), ne(e.params, p);
                            var m = e.params.enabled;
                            ne(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), h && !m ? e.disable() : !h && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", p), f && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", p)
                        }
                    }
                },
                getBreakpoint: function(e, t, a) {
                    if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
                        var i = !1,
                            s = S(),
                            r = "window" === t ? s.innerWidth : a.clientWidth,
                            n = "window" === t ? s.innerHeight : a.clientHeight,
                            l = Object.keys(e).map(function(e) {
                                if ("string" != typeof e || 0 !== e.indexOf("@")) return {
                                    value: e,
                                    point: e
                                };
                                var t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            });
                        l.sort(function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        });
                        for (var o = 0; o < l.length; o += 1) {
                            var d = l[o],
                                p = d.point;
                            d.value <= r && (i = p)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.params,
                        a = e.isLocked,
                        i = 0 < e.slides.length && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a && a !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e, a, i, t = this,
                        s = t.classNames,
                        r = t.params,
                        n = t.rtl,
                        l = t.$el,
                        o = t.device,
                        d = t.support,
                        p = (e = ["initialized", r.direction, {
                            "pointer-events": d.pointerEvents && !d.touch
                        }, {
                            "free-mode": r.freeMode
                        }, {
                            autoheight: r.autoHeight
                        }, {
                            rtl: n
                        }, {
                            multirow: 1 < r.slidesPerColumn
                        }, {
                            "multirow-column": 1 < r.slidesPerColumn && "column" === r.slidesPerColumnFill
                        }, {
                            android: o.android
                        }, {
                            ios: o.ios
                        }, {
                            "css-mode": r.cssMode
                        }], a = r.containerModifierClass, i = [], e.forEach(function(t) {
                            "object" == typeof t ? Object.keys(t).forEach(function(e) {
                                t[e] && i.push(a + e)
                            }) : "string" == typeof t && i.push(a + t)
                        }), i);
                    s.push.apply(s, p), l.addClass([].concat(s).join(" ")), t.emitContainerClasses()
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(e, t, a, i, s, r) {
                    var n, l = S();

                    function o() {
                        r && r()
                    }
                    I(e).parent("picture")[0] || e.complete && s ? o() : t ? ((n = new l.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        Y = {},
        R = ((B = W.prototype).enable = function() {
            var e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }, B.disable = function() {
            var e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }, B.setProgress = function(e, t) {
            var a = this;
            e = Math.min(Math.max(e, 0), 1);
            var i = a.minTranslate(),
                s = (a.maxTranslate() - i) * e + i;
            a.translateTo(s, void 0 === t ? 0 : t), a.updateActiveIndex(), a.updateSlidesClasses()
        }, B.emitContainerClasses = function() {
            var t = this;
            if (t.params._emitClasses && t.el) {
                var e = t.el.className.split(" ").filter(function(e) {
                    return 0 === e.indexOf("swiper-container") || 0 === e.indexOf(t.params.containerModifierClass)
                });
                t.emit("_containerClasses", e.join(" "))
            }
        }, B.getSlideClasses = function(e) {
            var t = this;
            return e.className.split(" ").filter(function(e) {
                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
            }).join(" ")
        }, B.emitSlidesClasses = function() {
            var a = this;
            if (a.params._emitClasses && a.el) {
                var i = [];
                a.slides.each(function(e) {
                    var t = a.getSlideClasses(e);
                    i.push({
                        slideEl: e,
                        classNames: t
                    }), a.emit("_slideClass", e, t)
                }), a.emit("_slideClasses", i)
            }
        }, B.slidesPerViewDynamic = function() {
            var e = this,
                t = e.params,
                a = e.slides,
                i = e.slidesGrid,
                s = e.size,
                r = e.activeIndex,
                n = 1;
            if (t.centeredSlides) {
                for (var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !l && (n += 1, (o += a[d].swiperSlideSize) > s && (l = !0));
                for (var p = r - 1; 0 <= p; p -= 1) a[p] && !l && (n += 1, (o += a[p].swiperSlideSize) > s && (l = !0))
            } else
                for (var u = r + 1; u < a.length; u += 1) i[u] - i[r] < s && (n += 1);
            return n
        }, B.update = function() {
            var a = this;
            if (a && !a.destroyed) {
                var e = a.snapGrid,
                    t = a.params;
                t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
            }

            function i() {
                var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                    t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
            }
        }, B.changeDirection = function(t, e) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.params.direction;
            return (t = t || ("horizontal" === i ? "vertical" : "horizontal")) === i || "horizontal" !== t && "vertical" !== t || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + t), a.emitContainerClasses(), a.params.direction = t, a.slides.each(function(e) {
                "vertical" === t ? e.style.width = "" : e.style.height = ""
            }), a.emit("changeDirection"), e && a.update()), a
        }, B.mount = function(t) {
            var a = this;
            if (a.mounted) return !0;
            var i = I(t || a.params.el);
            if (!(t = i[0])) return !1;
            t.swiper = a;
            var s = function() {
                if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                    var e = I(t.shadowRoot.querySelector("." + a.params.wrapperClass));
                    return e.children = function(e) {
                        return i.children(e)
                    }, e
                }
                return i.children("." + a.params.wrapperClass)
            }();
            if (0 === s.length && a.params.createElements) {
                var e = C().createElement("div");
                s = I(e), e.className = a.params.wrapperClass, i.append(e), i.children("." + a.params.slideClass).each(function(e) {
                    s.append(e)
                })
            }
            return ne(a, {
                $el: i,
                el: t,
                $wrapperEl: s,
                wrapperEl: s[0],
                mounted: !0,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
                rtlTranslate: "horizontal" === a.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
                wrongRTL: "-webkit-box" === s.css("display")
            }), !0
        }, B.init = function(e) {
            var t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }, B.destroy = function(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var a, i = this,
                s = i.params,
                r = i.$el,
                n = i.$wrapperEl,
                l = i.slides;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                i.off(e)
            }), !1 !== e && (i.$el[0].swiper = null, a = i, Object.keys(a).forEach(function(e) {
                try {
                    a[e] = null
                } catch (e) {}
                try {
                    delete a[e]
                } catch (e) {}
            })), i.destroyed = !0), null
        }, W.extendDefaults = function(e) {
            ne(Y, e)
        }, W.installModule = function(e) {
            W.prototype.modules || (W.prototype.modules = {});
            var t = e.name || Object.keys(W.prototype.modules).length + "_" + D();
            W.prototype.modules[t] = e
        }, W.use = function(e) {
            return Array.isArray(e) ? e.forEach(function(e) {
                return W.installModule(e)
            }) : W.installModule(e), W
        }, null, e(W, [{
            key: "extendedDefaults",
            get: function() {
                return Y
            }
        }, {
            key: "defaults",
            get: function() {
                return H
            }
        }]), W);

    function W() {
        for (var e, s, t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
        if (s = ne({}, s = (s = 1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? a[0] : (e = a[0], a[1])) || {}), e && !s.el && (s.el = e), s.el && 1 < I(s.el).length) {
            var r = [];
            return I(s.el).each(function(e) {
                var t = ne({}, s, {
                    el: e
                });
                r.push(new W(t))
            }), r
        }
        var n = this;
        n.__swiper__ = !0, n.support = P(), n.device = function(e) {
            return void 0 === e && (e = {}), b || (t = (void 0 === e ? {} : e).userAgent, a = P(), i = S(), s = i.navigator.platform, r = t || i.navigator.userAgent, n = {
                ios: !1,
                android: !1
            }, l = i.screen.width, o = i.screen.height, d = r.match(/(Android);?[\s\/]+([\d.]+)?/), p = r.match(/(iPad).*OS\s([\d_]+)/), u = r.match(/(iPod)(.*OS\s([\d_]+))?/), c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = "Win32" === s, v = "MacIntel" === s, !p && v && a.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(l + "x" + o) && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), v = !1), d && !h && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), b = n), b;
            var t, a, i, s, r, n, l, o, d, p, u, c, h, v
        }({
            userAgent: s.userAgent
        }), n.browser = function() {
            return y || (t = S(), y = {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (e = t.navigator.userAgent.toLowerCase(), 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }), y;
            var e, t
        }(), n.eventsListeners = {}, n.eventsAnyListeners = [], void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function(e) {
            var t = n.modules[e];
            if (t.params) {
                var a = Object.keys(t.params)[0],
                    i = t.params[a];
                if ("object" != typeof i || null === i) return;
                if (0 <= ["navigation", "pagination", "scrollbar"].indexOf(a) && !0 === s[a] && (s[a] = {
                        auto: !0
                    }), !(a in s && "enabled" in i)) return;
                !0 === s[a] && (s[a] = {
                    enabled: !0
                }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
                    enabled: !1
                })
            }
        });
        var l, o, d = ne({}, H);
        return n.useParams(d), n.params = ne({}, d, Y, s), n.originalParams = ne({}, n.params), n.passedParams = ne({}, s), n.params && n.params.on && Object.keys(n.params.on).forEach(function(e) {
            n.on(e, n.params.on[e])
        }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = I, ne(n, {
            enabled: n.params.enabled,
            el: e,
            classNames: [],
            slides: I(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function() {
                return "horizontal" === n.params.direction
            },
            isVertical: function() {
                return "vertical" === n.params.direction
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], o = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (o = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
                start: l[0],
                move: l[1],
                end: l[2],
                cancel: l[3]
            }, n.touchEventsDesktop = {
                start: o[0],
                move: o[1],
                end: o[2]
            }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video, label",
                lastClickTime: D(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n
    }
    Object.keys(X).forEach(function(t) {
        Object.keys(X[t]).forEach(function(e) {
            R.prototype[e] = X[t][e]
        })
    }), R.use([k, L]);
    var V = {
            update: function(e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    l = n.addSlidesBefore,
                    o = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    u = d.to,
                    c = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m, g, b, y = t.activeIndex || 0;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", b = r ? (g = Math.floor(i / 2) + s + o, Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, s + l);
                var w = Math.max((y || 0) - b, 0),
                    E = Math.min((y || 0) + g, c.length - 1),
                    x = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

                function T() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (ne(t.virtual, {
                        from: w,
                        to: E,
                        offset: x,
                        slidesGrid: t.slidesGrid
                    }), p === w && u === E && !e) return t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: x,
                    from: w,
                    to: E,
                    slides: function() {
                        for (var e = [], t = w; t <= E; t += 1) e.push(c[t]);
                        return e
                    }()
                }), void(t.params.virtual.renderExternalUpdate && T());
                var C = [],
                    S = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var M = p; M <= u; M += 1)(M < w || E < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var z = 0; z < c.length; z += 1) w <= z && z <= E && (void 0 === u || e ? S.push(z) : (u < z && S.push(z), z < p && C.push(z)));
                S.forEach(function(e) {
                    t.$wrapperEl.append(v(c[e], e))
                }), C.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(v(c[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T()
            },
            renderSlide: function(e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? I(i.renderSlide.call(a, e, t)) : I('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this,
                    a = t.activeIndex,
                    i = a + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
                    i = a + e.length, s = e.length
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var n = t.virtual.cache,
                        l = {};
                    Object.keys(n).forEach(function(e) {
                        var t = n[e],
                            a = t.attr("data-swiper-slide-index");
                        a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), l[parseInt(e, 10) + s] = t
                    }), t.virtual.cache = l
                }
                t.virtual.update(!0), t.slideTo(i, 0)
            },
            removeSlide: function(e) {
                var t = this;
                if (null != e) {
                    var a = t.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; 0 <= i; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
                    else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
                    t.virtual.update(!0), t.slideTo(a, 0)
                }
            },
            removeAllSlides: function() {
                var e = this;
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
            }
        },
        F = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                T(this, {
                    virtual: t({}, V, {
                        slides: this.params.virtual.slides,
                        cache: {}
                    })
                })
            },
            on: {
                beforeInit: function(e) {
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        ne(e.params, t), ne(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function(e) {
                    e.params.virtual.enabled && e.virtual.update()
                }
            }
        },
        _ = {
            handle: function(e) {
                var t = this;
                if (t.enabled) {
                    var a = S(),
                        i = C(),
                        s = t.rtlTranslate,
                        r = e;
                    r.originalEvent && (r = r.originalEvent);
                    var n = r.keyCode || r.charCode,
                        l = t.params.keyboard.pageUpDown,
                        o = l && 33 === n,
                        d = l && 34 === n,
                        p = 37 === n,
                        u = 39 === n,
                        c = 38 === n,
                        h = 40 === n;
                    if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || d)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && c || o)) return !1;
                    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (o || d || p || u || c || h)) {
                            var v = !1;
                            if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                            var f = t.$el,
                                m = f[0].clientWidth,
                                g = f[0].clientHeight,
                                b = a.innerWidth,
                                y = a.innerHeight,
                                w = t.$el.offset();
                            s && (w.left -= t.$el[0].scrollLeft);
                            for (var E = [
                                    [w.left, w.top],
                                    [w.left + m, w.top],
                                    [w.left, w.top + g],
                                    [w.left + m, w.top + g]
                                ], x = 0; x < E.length; x += 1) {
                                var T = E[x];
                                if (0 <= T[0] && T[0] <= b && 0 <= T[1] && T[1] <= y) {
                                    if (0 === T[0] && 0 === T[1]) continue;
                                    v = !0
                                }
                            }
                            if (!v) return
                        }
                        t.isHorizontal() ? ((o || d || p || u) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), ((d || u) && !s || (o || p) && s) && t.slideNext(), ((o || p) && !s || (d || u) && s) && t.slidePrev()) : ((o || d || c || h) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (d || h) && t.slideNext(), (o || c) && t.slidePrev()), t.emit("keyPress", n)
                    }
                }
            },
            enable: function() {
                var e = C();
                this.keyboard.enabled || (I(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                var e = C();
                this.keyboard.enabled && (I(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        q = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            },
            create: function() {
                T(this, {
                    keyboard: t({
                        enabled: !1
                    }, _)
                })
            },
            on: {
                init: function(e) {
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy: function(e) {
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        },
        j = {
            lastScrollTime: D(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                return -1 < S().navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                    var e = C(),
                        t = "onwheel",
                        a = t in e;
                    if (!a) {
                        var i = e.createElement("div");
                        i.setAttribute(t, "return;"), a = "function" == typeof i.onwheel
                    }
                    return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a
                }() ? "wheel" : "mousewheel"
            },
            normalize: function(e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: a,
                    pixelX: i,
                    pixelY: s
                }
            },
            handleMouseEnter: function() {
                this.enabled && (this.mouseEntered = !0)
            },
            handleMouseLeave: function() {
                this.enabled && (this.mouseEntered = !1)
            },
            handle: function(e) {
                var t = e,
                    a = this;
                if (a.enabled) {
                    var i = a.params.mousewheel;
                    a.params.cssMode && t.preventDefault();
                    var s = a.$el;
                    if ("container" !== a.params.mousewheel.eventsTarget && (s = I(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var r = 0,
                        n = a.rtlTranslate ? -1 : 1,
                        l = j.normalize(t);
                    if (i.forceToAxis)
                        if (a.isHorizontal()) {
                            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                            r = -l.pixelX * n
                        } else {
                            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                            r = -l.pixelY
                        }
                    else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
                    if (0 === r) return !0;
                    i.invert && (r = -r);
                    var o = a.getTranslate() + r * i.sensitivity;
                    if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), !a.params.loop && (o === a.minTranslate() || o === a.maxTranslate()) || !a.params.nested || t.stopPropagation(), a.params.freeMode) {
                        var d = {
                                time: D(),
                                delta: Math.abs(r),
                                direction: Math.sign(r)
                            },
                            p = a.mousewheel.lastEventBeforeSnap,
                            u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;
                        if (!u) {
                            a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
                            var c = a.getTranslate() + r * i.sensitivity,
                                h = a.isBeginning,
                                v = a.isEnd;
                            if (c >= a.minTranslate() && (c = a.minTranslate()), c <= a.maxTranslate() && (c = a.maxTranslate()), a.setTransition(0), a.setTranslate(c), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !v && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
                                clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
                                var f = a.mousewheel.recentWheelEvents;
                                15 <= f.length && f.shift();
                                var m = f.length ? f[f.length - 1] : void 0,
                                    g = f[0];
                                if (f.push(d), m && (d.delta > m.delta || d.direction !== m.direction)) f.splice(0);
                                else if (15 <= f.length && d.time - g.time < 500 && 1 <= g.delta - d.delta && d.delta <= 6) {
                                    var b = 0 < r ? .8 : .2;
                                    a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.mousewheel.timeout = A(function() {
                                        a.slideToClosest(a.params.speed, !0, void 0, b)
                                    }, 0)
                                }
                                a.mousewheel.timeout || (a.mousewheel.timeout = A(function() {
                                    a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5)
                                }, 500))
                            }
                            if (u || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), c === a.minTranslate() || c === a.maxTranslate()) return !0
                        }
                    } else {
                        var y = {
                                time: D(),
                                delta: Math.abs(r),
                                direction: Math.sign(r),
                                raw: e
                            },
                            w = a.mousewheel.recentWheelEvents;
                        2 <= w.length && w.shift();
                        var E = w.length ? w[w.length - 1] : void 0;
                        if (w.push(y), E ? (y.direction !== E.direction || y.delta > E.delta || y.time > E.time + 150) && a.mousewheel.animateSlider(y) : a.mousewheel.animateSlider(y), a.mousewheel.releaseScroll(y)) return !0
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                }
            },
            animateSlider: function(e) {
                var t = this,
                    a = S();
                return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta || this.params.mousewheel.thresholdTime && D() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime || !(6 <= e.delta && D() - t.mousewheel.lastScrollTime < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new a.Date).getTime(), 1))
            },
            releaseScroll: function(e) {
                var t = this,
                    a = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0
                } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;
                return !1
            },
            enable: function() {
                var e = this,
                    t = j.event();
                if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                if (!t) return !1;
                if (e.mousewheel.enabled) return !1;
                var a = e.$el;
                return "container" !== e.params.mousewheel.eventsTarget && (a = I(e.params.mousewheel.eventsTarget)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function() {
                var e = this,
                    t = j.event();
                if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
                if (!t) return !1;
                if (!e.mousewheel.enabled) return !1;
                var a = e.$el;
                return "container" !== e.params.mousewheel.eventsTarget && (a = I(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
            }
        },
        U = {
            toggleEl: function(e, t) {
                e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t)
            },
            update: function() {
                var e = this,
                    t = e.params.navigation,
                    a = e.navigation.toggleEl;
                if (!e.params.loop) {
                    var i = e.navigation,
                        s = i.$nextEl,
                        r = i.$prevEl;
                    r && 0 < r.length && (e.isBeginning ? a(r, !0) : a(r, !1), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && 0 < s.length && (e.isEnd ? a(s, !0) : a(s, !1), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, a = this,
                    i = a.params.navigation;
                a.params.navigation = z(a.$el, a.params.navigation, a.params.createElements, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), (i.nextEl || i.prevEl) && (i.nextEl && (e = I(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = I(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ne(a.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }), a.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)))
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
            }
        },
        K = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    i = e.params.pagination;
                if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var s, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el,
                        n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (s -= a - 2 * e.loopedSlides), n - 1 < s && (s -= n), s < 0 && "bullets" !== e.params.paginationType && (s = n + s)) : s = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var l, o, d, p = e.pagination.bullets;
                        if (i.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += s - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = s - e.pagination.dynamicBulletIndex, d = ((o = l + (Math.min(p.length, i.dynamicMainBullets) - 1)) + l) / 2), p.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < r.length) p.each(function(e) {
                            var t = I(e),
                                a = t.index();
                            a === s && t.addClass(i.bulletActiveClass), i.dynamicBullets && (l <= a && a <= o && t.addClass(i.bulletActiveClass + "-main"), a === l && t.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), a === o && t.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        });
                        else {
                            var u = p.eq(s),
                                c = u.index();
                            if (u.addClass(i.bulletActiveClass), i.dynamicBullets) {
                                for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1) p.eq(f).addClass(i.bulletActiveClass + "-main");
                                if (e.params.loop)
                                    if (c >= p.length - i.dynamicMainBullets) {
                                        for (var m = i.dynamicMainBullets; 0 <= m; m -= 1) p.eq(p.length - m).addClass(i.bulletActiveClass + "-main");
                                        p.eq(p.length - i.dynamicMainBullets - 1).addClass(i.bulletActiveClass + "-prev")
                                    } else h.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), v.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next");
                                else h.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), v.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                            }
                        }
                        if (i.dynamicBullets) {
                            var g = Math.min(p.length, i.dynamicMainBullets + 4),
                                b = (e.pagination.bulletSize * g - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                y = t ? "right" : "left";
                            p.css(e.isHorizontal() ? y : "top", b + "px")
                        }
                    }
                    if ("fraction" === i.type && (r.find(M(i.currentClass)).text(i.formatFractionCurrent(s + 1)), r.find(M(i.totalClass)).text(i.formatFractionTotal(n))), "progressbar" === i.type) {
                        var w;
                        w = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var E = (s + 1) / n,
                            x = 1,
                            T = 1;
                        "horizontal" == w ? x = E : T = E, r.find(M(i.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(e.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (r.html(i.renderCustom(e, s + 1, n)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && !e.params.loop && a < r && (r = a);
                        for (var n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(s), e.pagination.bullets = i.find(M(t.bulletClass))
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var a = this;
                a.params.pagination = z(a.$el, a.params.pagination, a.params.createElements, {
                    el: "swiper-pagination"
                });
                var e = a.params.pagination;
                if (e.el) {
                    var t = I(e.el);
                    0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", M(e.bulletClass), function(e) {
                        e.preventDefault();
                        var t = I(this).index() * a.params.slidesPerGroup;
                        a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                    }), ne(a.pagination, {
                        $el: t,
                        el: t[0]
                    }), a.enabled || t.addClass(e.lockClass))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", M(t.bulletClass))
                }
            }
        },
        Z = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        l = t.$el,
                        o = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), n[0].style.width = d + "px") : (n.transform("translate3d(0px, " + p + "px, 0)"), n[0].style.height = d + "px"), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                        l[0].style.opacity = 0, l.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    a[0].style.width = "", a[0].style.height = "";
                    var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        l = n * (r / e.size);
                    s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), ne(t, {
                        trackSize: r,
                        divider: n,
                        moveDivider: l,
                        dragSize: s
                    }), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function(e) {
                var t, a = this,
                    i = a.scrollbar,
                    s = a.rtlTranslate,
                    r = i.$el,
                    n = i.dragSize,
                    l = i.trackSize,
                    o = i.dragStartPos;
                t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (l - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(d), a.setTranslate(d), a.updateActiveIndex(), a.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    a = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = A(function() {
                    r.css("opacity", 0), r.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = C(),
                        a = e.scrollbar,
                        i = e.touchEventsTouch,
                        s = e.touchEventsDesktop,
                        r = e.params,
                        n = e.support,
                        l = a.$el[0],
                        o = !(!n.passiveListener || !r.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        d = !(!n.passiveListener || !r.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    l && (n.touch ? (l.addEventListener(i.start, e.scrollbar.onDragStart, o), l.addEventListener(i.move, e.scrollbar.onDragMove, o), l.addEventListener(i.end, e.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, e.scrollbar.onDragStart, o), t.addEventListener(s.move, e.scrollbar.onDragMove, o), t.addEventListener(s.end, e.scrollbar.onDragEnd, d)))
                }
            },
            disableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = C(),
                        a = e.scrollbar,
                        i = e.touchEventsTouch,
                        s = e.touchEventsDesktop,
                        r = e.params,
                        n = e.support,
                        l = a.$el[0],
                        o = !(!n.passiveListener || !r.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        d = !(!n.passiveListener || !r.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    l && (n.touch ? (l.removeEventListener(i.start, e.scrollbar.onDragStart, o), l.removeEventListener(i.move, e.scrollbar.onDragMove, o), l.removeEventListener(i.end, e.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, e.scrollbar.onDragStart, o), t.removeEventListener(s.move, e.scrollbar.onDragMove, o), t.removeEventListener(s.end, e.scrollbar.onDragEnd, d)))
                }
            },
            init: function() {
                var e = this,
                    t = e.scrollbar,
                    a = e.$el;
                e.params.scrollbar = z(a, e.params.scrollbar, e.params.createElements, {
                    el: "swiper-scrollbar"
                });
                var i = e.params.scrollbar;
                if (i.el) {
                    var s = I(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length && (r = I('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ne(t, {
                        $el: s,
                        el: s[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), i.draggable && t.enableDraggable(), s && s[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        J = {
            setTransform: function(e, t) {
                var a = this.rtl,
                    i = I(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    l = i.attr("data-swiper-parallax-y"),
                    o = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", l = 0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = p
                }
                if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");
                else {
                    var u = o - (o - 1) * (1 - Math.abs(t));
                    i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")")
                }
            },
            setTranslate: function() {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    s = i.progress,
                    r = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e) {
                    i.parallax.setTransform(e, s)
                }), t.each(function(e, t) {
                    var a = e.progress;
                    1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(t / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), I(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e) {
                        i.parallax.setTransform(e, a)
                    })
                })
            },
            setTransition: function(i) {
                void 0 === i && (i = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e) {
                    var t = I(e),
                        a = parseInt(t.attr("data-swiper-parallax-duration"), 10) || i;
                    0 === i && (a = 0), t.transition(a)
                })
            }
        },
        Q = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
            },
            onGestureStart: function(e) {
                var t = this,
                    a = t.support,
                    i = t.params.zoom,
                    s = t.zoom,
                    r = s.gesture;
                if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !a.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    s.fakeGestureTouched = !0, r.scaleStart = Q.getDistanceBetweenTouches(e)
                }
                r.$slideEl && r.$slideEl.length || (r.$slideEl = I(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.support,
                    a = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!t.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = Q.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length ? (t.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")")) : "gesturechange" === e.type && i.onGestureStart(e)
            },
            onGestureEnd: function(e) {
                var t = this,
                    a = t.device,
                    i = t.support,
                    s = t.params.zoom,
                    r = t.zoom,
                    n = r.gesture;
                if (!i.gestures) {
                    if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android) return;
                    r.fakeGestureTouched = !1, r.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (n.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.device,
                    a = this.zoom,
                    i = a.gesture,
                    s = a.image;
                i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (t.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = E(i.$imageWrapEl[0], "x") || 0, s.startY = E(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var n = s.width * a.scale,
                        l = s.height * a.scale;
                    if (!(n < i.slideWidth && l < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
                    a.isTouched = !1, a.isMoved = !1;
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        l = a.currentX + n,
                        o = i.y * r,
                        d = a.currentY + o;
                    0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    a.currentX = l, a.currentY = d;
                    var u = a.width * e.scale,
                        c = a.height * e.scale;
                    a.minX = Math.min(t.slideWidth / 2 - u / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - c / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, a, i, s, r, n, l, o, d, p, u, c, h, v, f, m, g = this,
                    b = S(),
                    y = g.zoom,
                    w = g.params.zoom,
                    E = y.gesture,
                    x = y.image;
                E.$slideEl || (g.params.virtual && g.params.virtual.enabled && g.virtual ? E.$slideEl = g.$wrapperEl.children("." + g.params.slideActiveClass) : E.$slideEl = g.slides.eq(g.activeIndex), E.$imageEl = E.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), E.$imageWrapEl = E.$imageEl.parent("." + w.containerClass)), E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length && (E.$slideEl.addClass("" + w.zoomedSlideClass), a = void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, x.touchesStart.y), y.scale = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y.currentScale = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = E.$slideEl[0].offsetWidth, m = E.$slideEl[0].offsetHeight, i = E.$slideEl.offset().left + b.scrollX + f / 2 - t, s = E.$slideEl.offset().top + b.scrollY + m / 2 - a, l = E.$imageEl[0].offsetWidth, o = E.$imageEl[0].offsetHeight, d = l * y.scale, p = o * y.scale, h = -(u = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - p / 2, 0)), (r = i * y.scale) < u && (r = u), h < r && (r = h), (n = s * y.scale) < c && (n = c), v < n && (n = v)) : n = r = 0, E.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), E.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
            },
            out: function() {
                var e = this,
                    t = e.zoom,
                    a = e.params.zoom,
                    i = t.gesture;
                i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && i.$imageWrapEl && 0 !== i.$imageWrapEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
            },
            toggleGestures: function(e) {
                var t = this.zoom,
                    a = t.slideSelector,
                    i = t.passiveListener;
                this.$wrapperEl[e]("gesturestart", a, t.onGestureStart, i), this.$wrapperEl[e]("gesturechange", a, t.onGestureChange, i), this.$wrapperEl[e]("gestureend", a, t.onGestureEnd, i)
            },
            enableGestures: function() {
                this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"))
            },
            disableGestures: function() {
                this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"))
            },
            enable: function() {
                var e = this,
                    t = e.support,
                    a = e.zoom;
                if (!a.enabled) {
                    a.enabled = !0;
                    var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        s = !t.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        r = "." + e.params.slideClass;
                    e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s)
                }
            },
            disable: function() {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    var a = e.support;
                    e.zoom.enabled = !1;
                    var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        s = !a.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        r = "." + e.params.slideClass;
                    a.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s)
                }
            }
        },
        ee = {
            loadInSlide: function(e, d) {
                void 0 === d && (d = !0);
                var p = this,
                    u = p.params.lazy;
                if (void 0 !== e && 0 !== p.slides.length) {
                    var c = p.virtual && p.params.virtual.enabled ? p.$wrapperEl.children("." + p.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : p.slides.eq(e),
                        t = c.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")");
                    !c.hasClass(u.elementClass) || c.hasClass(u.loadedClass) || c.hasClass(u.loadingClass) || t.push(c[0]), 0 !== t.length && t.each(function(e) {
                        var i = I(e);
                        i.addClass(u.loadingClass);
                        var s = i.attr("data-background"),
                            r = i.attr("data-src"),
                            n = i.attr("data-srcset"),
                            l = i.attr("data-sizes"),
                            o = i.parent("picture");
                        p.loadImage(i[0], r || s, n, l, !1, function() {
                            if (null != p && p && (!p || p.params) && !p.destroyed) {
                                if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), l && (i.attr("sizes", l), i.removeAttr("data-sizes")), o.length && o.children("source").each(function(e) {
                                        var t = I(e);
                                        t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                                    }), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(u.loadedClass).removeClass(u.loadingClass), c.find("." + u.preloaderClass).remove(), p.params.loop && d) {
                                    var e = c.attr("data-swiper-slide-index");
                                    if (c.hasClass(p.params.slideDuplicateClass)) {
                                        var t = p.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + p.params.slideDuplicateClass + ")");
                                        p.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var a = p.$wrapperEl.children("." + p.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        p.lazy.loadInSlide(a.index(), !1)
                                    }
                                }
                                p.emit("lazyImageReady", c[0], i[0]), p.params.autoHeight && p.updateAutoHeight()
                            }
                        }), p.emit("lazyImageLoad", c[0], i[0])
                    })
                }
            },
            load: function() {
                var a = this,
                    t = a.$wrapperEl,
                    i = a.params,
                    s = a.slides,
                    e = a.activeIndex,
                    r = a.virtual && i.virtual.enabled,
                    n = i.lazy,
                    l = i.slidesPerView;

                function o(e) {
                    if (r) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (s[e]) return !0;
                    return !1
                }

                function d(e) {
                    return r ? I(e).attr("data-swiper-slide-index") : I(e).index()
                }
                if ("auto" === l && (l = 0), a.lazy.initialImageLoaded || (a.lazy.initialImageLoaded = !0), a.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(e) {
                    var t = r ? I(e).attr("data-swiper-slide-index") : I(e).index();
                    a.lazy.loadInSlide(t)
                });
                else if (1 < l)
                    for (var p = e; p < e + l; p += 1) o(p) && a.lazy.loadInSlide(p);
                else a.lazy.loadInSlide(e);
                if (n.loadPrevNext)
                    if (1 < l || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                        for (var u = n.loadPrevNextAmount, c = l, h = Math.min(e + c + Math.max(u, c), s.length), v = Math.max(e - Math.max(c, u), 0), f = e + l; f < h; f += 1) o(f) && a.lazy.loadInSlide(f);
                        for (var m = v; m < e; m += 1) o(m) && a.lazy.loadInSlide(m)
                    } else {
                        var g = t.children("." + i.slideNextClass);
                        0 < g.length && a.lazy.loadInSlide(d(g));
                        var b = t.children("." + i.slidePrevClass);
                        0 < b.length && a.lazy.loadInSlide(d(b))
                    }
            },
            checkInViewOnLoad: function() {
                var e = S(),
                    t = this;
                if (t && !t.destroyed) {
                    var a = t.params.lazy.scrollingElement ? I(t.params.lazy.scrollingElement) : I(e),
                        i = a[0] === e,
                        s = i ? e.innerWidth : a[0].offsetWidth,
                        r = i ? e.innerHeight : a[0].offsetHeight,
                        n = t.$el.offset(),
                        l = !1;
                    t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
                    for (var o = [
                            [n.left, n.top],
                            [n.left + t.width, n.top],
                            [n.left, n.top + t.height],
                            [n.left + t.width, n.top + t.height]
                        ], d = 0; d < o.length; d += 1) {
                        var p = o[d];
                        if (0 <= p[0] && p[0] <= s && 0 <= p[1] && p[1] <= r) {
                            if (0 === p[0] && 0 === p[1]) continue;
                            l = !0
                        }
                    }
                    var u = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    l ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad, u)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, a.on("scroll", t.lazy.checkInViewOnLoad, u))
                }
            }
        },
        te = {
            LinearSpline: function(e, t) {
                var a, i, s, r, n;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (n = function(e, t) {
                        for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
                        return a
                    }(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new te.LinearSpline(t.slidesGrid, e.slidesGrid) : new te.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var a, i, s = this,
                    r = s.controller.control,
                    n = s.constructor;

                function l(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof n && l(r[o]);
                else r instanceof n && t !== r && l(r)
            },
            setTransition: function(t, e) {
                var a, i = this,
                    s = i.constructor,
                    r = i.controller.control;

                function n(e) {
                    e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && A(function() {
                        e.updateAutoHeight()
                    }), e.$wrapperEl.transitionEnd(function() {
                        r && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }
                if (Array.isArray(r))
                    for (a = 0; a < r.length; a += 1) r[a] !== e && r[a] instanceof s && n(r[a]);
                else r instanceof s && e !== r && n(r)
            }
        },
        ae = {
            getRandomNumber: function(e) {
                return void 0 === e && (e = 16), "x".repeat(e).replace(/x/g, function() {
                    return Math.round(16 * Math.random()).toString(16)
                })
            },
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            makeElNotFocusable: function(e) {
                return e.attr("tabIndex", "-1"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElRoleDescription: function(e, t) {
                return e.attr("aria-roledescription", t), e
            },
            addElControls: function(e, t) {
                return e.attr("aria-controls", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            addElId: function(e, t) {
                return e.attr("id", t), e
            },
            addElLive: function(e, t) {
                return e.attr("aria-live", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterOrSpaceKey: function(e) {
                if (13 === e.keyCode || 32 === e.keyCode) {
                    var t = this,
                        a = t.params.a11y,
                        i = I(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is(M(t.params.pagination.bulletClass)) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop && e.navigation) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && 0 < i.length && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a && 0 < a.length && (e.isEnd ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a)) : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)))
                }
            },
            updatePagination: function() {
                var a = this,
                    i = a.params.a11y;
                a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.bullets.each(function(e) {
                    var t = I(e);
                    a.a11y.makeElFocusable(t), a.params.pagination.renderBullet || (a.a11y.addElRole(t, "button"), a.a11y.addElLabel(t, i.paginationBulletMessage.replace(/\{\{index\}\}/, t.index() + 1)))
                })
            },
            init: function() {
                var i = this,
                    s = i.params.a11y;
                i.$el.append(i.a11y.liveRegion);
                var e = i.$el;
                s.containerRoleDescriptionMessage && i.a11y.addElRoleDescription(e, s.containerRoleDescriptionMessage), s.containerMessage && i.a11y.addElLabel(e, s.containerMessage);
                var t, a, r = i.$wrapperEl,
                    n = r.attr("id") || "swiper-wrapper-" + i.a11y.getRandomNumber(16),
                    l = i.params.autoplay && i.params.autoplay.enabled ? "off" : "polite";
                i.a11y.addElId(r, n), i.a11y.addElLive(r, l), s.itemRoleDescriptionMessage && i.a11y.addElRoleDescription(I(i.slides), s.itemRoleDescriptionMessage), i.a11y.addElRole(I(i.slides), s.slideRole), i.slides.each(function(e) {
                    var t = I(e),
                        a = s.slideLabelMessage.replace(/\{\{index\}\}/, t.index() + 1).replace(/\{\{slidesLength\}\}/, i.slides.length);
                    i.a11y.addElLabel(t, a)
                }), i.navigation && i.navigation.$nextEl && (t = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (a = i.navigation.$prevEl), t && t.length && (i.a11y.makeElFocusable(t), "BUTTON" !== t[0].tagName && (i.a11y.addElRole(t, "button"), t.on("keydown", i.a11y.onEnterOrSpaceKey)), i.a11y.addElLabel(t, s.nextSlideMessage), i.a11y.addElControls(t, n)), a && a.length && (i.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (i.a11y.addElRole(a, "button"), a.on("keydown", i.a11y.onEnterOrSpaceKey)), i.a11y.addElLabel(a, s.prevSlideMessage), i.a11y.addElControls(a, n)), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.on("keydown", M(i.params.pagination.bulletClass), i.a11y.onEnterOrSpaceKey)
            },
            destroy: function() {
                var e, t, a = this;
                a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterOrSpaceKey), t && t.off("keydown", a.a11y.onEnterOrSpaceKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", M(a.params.pagination.bulletClass), a.a11y.onEnterOrSpaceKey)
            }
        },
        ie = {
            init: function() {
                var e = this,
                    t = S();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var a = e.history;
                    a.initialized = !0, a.paths = ie.getPathValues(e.params.url), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                var e = S();
                this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                var e = this;
                e.history.paths = ie.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
            },
            getPathValues: function(e) {
                var t = S(),
                    a = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                }
            },
            setHistory: function(e, t) {
                var a = this,
                    i = S();
                if (a.history.initialized && a.params.history.enabled) {
                    var s;
                    s = a.params.url ? new URL(a.params.url) : i.location;
                    var r = a.slides.eq(t),
                        n = ie.slugify(r.attr("data-history"));
                    if (0 < a.params.history.root.length) {
                        var l = a.params.history.root;
                        "/" === l[l.length - 1] && (l = l.slice(0, l.length - 1)), n = l + "/" + e + "/" + n
                    } else s.pathname.includes(e) || (n = e + "/" + n);
                    var o = i.history.state;
                    o && o.value === n || (a.params.history.replaceState ? i.history.replaceState({
                        value: n
                    }, null, n) : i.history.pushState({
                        value: n
                    }, null, n))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (ie.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var l = n.index();
                            i.slideTo(l, e, a)
                        }
                    } else i.slideTo(0, e, a)
            }
        },
        se = {
            onHashCange: function() {
                var e = this,
                    t = C();
                e.emit("hashChange");
                var a = t.location.hash.replace("#", "");
                if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + a + '"]').index();
                    if (void 0 === i) return;
                    e.slideTo(i)
                }
            },
            setHash: function() {
                var e = this,
                    t = S(),
                    a = C();
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), e.emit("hashSet");
                    else {
                        var i = e.slides.eq(e.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        a.location.hash = s || "", e.emit("hashSet")
                    }
            },
            init: function() {
                var e = this,
                    t = C(),
                    a = S();
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var i = t.location.hash.replace("#", "");
                    if (i)
                        for (var s = 0, r = e.slides.length; s < r; s += 1) {
                            var n = e.slides.eq(s);
                            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(e.params.slideDuplicateClass)) {
                                var l = n.index();
                                e.slideTo(l, 0, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    e.params.hashNavigation.watchState && I(a).on("hashchange", e.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                var e = S();
                this.params.hashNavigation.watchState && I(e).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        re = {
            run: function() {
                var t = this,
                    e = t.slides.eq(t.activeIndex),
                    a = t.params.autoplay.delay;
                e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), clearTimeout(t.autoplay.timeout), t.autoplay.timeout = A(function() {
                    var e;
                    t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), e = t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (e = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (e = t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), e = t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (e = t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (e = t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")), (t.params.cssMode && t.autoplay.running || !1 === e) && t.autoplay.run()
                }, a)
            },
            start: function() {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function(e) {
                    t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd)
                }) : (t.autoplay.paused = !1, t.autoplay.run())))
            },
            onVisibilityChange: function() {
                var e = this,
                    t = C();
                "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
            },
            onTransitionEnd: function(e) {
                var t = this;
                t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function(e) {
                    t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd)
                }), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            },
            onMouseEnter: function() {
                var t = this;
                t.params.autoplay.disableOnInteraction ? t.autoplay.stop() : t.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach(function(e) {
                    t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd)
                })
            },
            onMouseLeave: function() {
                this.params.autoplay.disableOnInteraction || (this.autoplay.paused = !1, this.autoplay.run())
            },
            attachMouseEvents: function() {
                var e = this;
                e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", e.autoplay.onMouseEnter), e.$el.on("mouseleave", e.autoplay.onMouseLeave))
            },
            detachMouseEvents: function() {
                this.$el.off("mouseenter", this.autoplay.onMouseEnter), this.$el.off("mouseleave", this.autoplay.onMouseLeave)
            }
        },
        le = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: n
                    }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.$wrapperEl;
                if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    t.transitionEnd(function() {
                        if (!s && a && !a.destroyed) {
                            s = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
                        }
                    })
                }
            }
        },
        oe = {
            setTranslate: function() {
                var e, t = this,
                    a = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    r = t.width,
                    n = t.height,
                    l = t.rtlTranslate,
                    o = t.size,
                    d = t.browser,
                    p = t.params.cubeEffect,
                    u = t.isHorizontal(),
                    c = t.virtual && t.params.virtual.enabled,
                    h = 0;
                p.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = I('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = I('<div class="swiper-cube-shadow"></div>'), a.append(e)));
                for (var v = 0; v < s.length; v += 1) {
                    var f = s.eq(v),
                        m = v;
                    c && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var g = 90 * m,
                        b = Math.floor(g / 360);
                    l && (g = -g, b = Math.floor(-g / 360));
                    var y = Math.max(Math.min(f[0].progress, 1), -1),
                        w = 0,
                        E = 0,
                        x = 0;
                    m % 4 == 0 ? (w = 4 * -b * o, x = 0) : (m - 1) % 4 == 0 ? (w = 0, x = 4 * -b * o) : (m - 2) % 4 == 0 ? (w = o + 4 * b * o, x = o) : (m - 3) % 4 == 0 && (w = -o, x = 3 * o + 4 * o * b), l && (w = -w), u || (E = w, w = 0);
                    var T = "rotateX(" + (u ? 0 : -g) + "deg) rotateY(" + (u ? g : 0) + "deg) translate3d(" + w + "px, " + E + "px, " + x + "px)";
                    if (y <= 1 && -1 < y && (h = 90 * m + 90 * y, l && (h = 90 * -m - 90 * y)), f.transform(T), p.slideShadows) {
                        var C = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            S = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = I('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(C)), 0 === S.length && (S = I('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(S)), C.length && (C[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
                        "transform-origin": "50% 50% -" + o / 2 + "px"
                    }), p.shadow)
                    if (u) e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
                    else {
                        var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                            P = p.shadowScale,
                            k = p.shadowScale / z,
                            $ = p.shadowOffset;
                        e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / k + "px) rotateX(-90deg)")
                    }
                var L = d.isSafari || d.isWebView ? -o / 2 : 0;
                i.transform("translate3d(0px,0," + L + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        de = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var s = t.eq(i),
                        r = s[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        l = 0,
                        o = -s[0].swiperSlideOffset,
                        d = 0;
                    if (e.isHorizontal() ? a && (n = -n) : (d = o, l = -n, n = o = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                        var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            u = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && (p = I('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === u.length && (u = I('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), p.length && (p[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
                    }
                    s.transform("translate3d(" + o + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.activeIndex,
                    s = a.$wrapperEl;
                if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    t.eq(i).transitionEnd(function() {
                        if (!r && a && !a.destroyed) {
                            r = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                        }
                    })
                }
            }
        },
        pe = {
            setTranslate: function() {
                for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), l = e.translate, o = n ? t / 2 - l : a / 2 - l, d = n ? r.rotate : -r.rotate, p = r.depth, u = 0, c = i.length; u < c; u += 1) {
                    var h = i.eq(u),
                        v = s[u],
                        f = (o - h[0].swiperSlideOffset - v / 2) / v * r.modifier,
                        m = n ? d * f : 0,
                        g = n ? 0 : d * f,
                        b = -p * Math.abs(f),
                        y = r.stretch;
                    "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * v);
                    var w = n ? 0 : y * f,
                        E = n ? y * f : 0,
                        x = 1 - (1 - r.scale) * Math.abs(f);
                    Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(m) < .001 && (m = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
                    var T = "translate3d(" + E + "px," + w + "px," + b + "px)  rotateX(" + g + "deg) rotateY(" + m + "deg) scale(" + x + ")";
                    if (h.transform(T), h[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
                        var C = n ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                            S = n ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = I('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), h.append(C)), 0 === S.length && (S = I('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), h.append(S)), C.length && (C[0].style.opacity = 0 < f ? f : 0), S.length && (S[0].style.opacity = 0 < -f ? -f : 0)
                    }
                }
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        ue = {
            init: function() {
                var e = this,
                    t = e.params.thumbs;
                if (e.thumbs.initialized) return !1;
                e.thumbs.initialized = !0;
                var a = e.constructor;
                return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ne(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), ne(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : x(t.swiper) && (e.thumbs.swiper = new a(ne({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0
            },
            onThumbClick: function() {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a = t.clickedIndex,
                        i = t.clickedSlide;
                    if (!(i && I(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                        var s;
                        if (s = t.params.loop ? parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                            var r = e.activeIndex;
                            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
                            var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                                l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                            s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n
                        }
                        e.slideTo(s)
                    }
                }
            },
            update: function(e) {
                var t = this,
                    a = t.thumbs.swiper;
                if (a) {
                    var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
                        s = t.params.thumbs.autoScrollOffset,
                        r = s && !a.params.loop;
                    if (t.realIndex !== a.realIndex || r) {
                        var n, l, o = a.activeIndex;
                        if (a.params.loop) {
                            a.slides.eq(o).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, o = a.activeIndex);
                            var d = a.slides.eq(o).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                p = a.slides.eq(o).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            n = void 0 === d ? p : void 0 === p ? d : p - o == o - d ? 1 < a.params.slidesPerGroup ? p : o : p - o < o - d ? p : d, l = t.activeIndex > t.previousIndex ? "next" : "prev"
                        } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";
                        r && (n += "next" === l ? s : -1 * s), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = o < n ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : o < n && a.params.slidesPerGroup, a.slideTo(n, e ? 0 : void 0))
                    }
                    var u = 1,
                        c = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (u = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), a.slides.removeClass(c), a.params.loop || a.params.virtual && a.params.virtual.enabled)
                        for (var h = 0; h < u; h += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(c);
                    else
                        for (var v = 0; v < u; v += 1) a.slides.eq(t.realIndex + v).addClass(c)
                }
            }
        },
        ce = [F, q, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            },
            create: function() {
                T(this, {
                    mousewheel: {
                        enabled: !1,
                        lastScrollTime: D(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: [],
                        enable: j.enable,
                        disable: j.disable,
                        handle: j.handle,
                        handleMouseEnter: j.handleMouseEnter,
                        handleMouseLeave: j.handleMouseLeave,
                        animateSlider: j.animateSlider,
                        releaseScroll: j.releaseScroll
                    }
                })
            },
            on: {
                init: function(e) {
                    !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy: function(e) {
                    e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                T(this, {
                    navigation: t({}, U)
                })
            },
            on: {
                init: function(e) {
                    e.navigation.init(), e.navigation.update()
                },
                toEdge: function(e) {
                    e.navigation.update()
                },
                fromEdge: function(e) {
                    e.navigation.update()
                },
                destroy: function(e) {
                    e.navigation.destroy()
                },
                "enable disable": function(e) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    a && a[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                },
                click: function(e, t) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl,
                        r = t.target;
                    if (e.params.navigation.hideOnClick && !I(r).is(s) && !I(r).is(i)) {
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
                        var n;
                        i ? n = i.hasClass(e.params.navigation.hiddenClass) : s && (n = s.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass)
                    }
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                T(this, {
                    pagination: t({
                        dynamicBulletIndex: 0
                    }, K)
                })
            },
            on: {
                init: function(e) {
                    e.pagination.init(), e.pagination.render(), e.pagination.update()
                },
                activeIndexChange: function(e) {
                    !e.params.loop && void 0 !== e.snapIndex || e.pagination.update()
                },
                snapIndexChange: function(e) {
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange: function(e) {
                    e.params.loop && (e.pagination.render(), e.pagination.update())
                },
                snapGridLengthChange: function(e) {
                    e.params.loop || (e.pagination.render(), e.pagination.update())
                },
                destroy: function(e) {
                    e.pagination.destroy()
                },
                "enable disable": function(e) {
                    var t = e.pagination.$el;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                },
                click: function(e, t) {
                    var a = t.target;
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && 0 < e.pagination.$el.length && !I(a).hasClass(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
                        !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
                    }
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                T(this, {
                    scrollbar: t({
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }, Z)
                })
            },
            on: {
                init: function(e) {
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                },
                update: function(e) {
                    e.scrollbar.updateSize()
                },
                resize: function(e) {
                    e.scrollbar.updateSize()
                },
                observerUpdate: function(e) {
                    e.scrollbar.updateSize()
                },
                setTranslate: function(e) {
                    e.scrollbar.setTranslate()
                },
                setTransition: function(e, t) {
                    e.scrollbar.setTransition(t)
                },
                "enable disable": function(e) {
                    var t = e.scrollbar.$el;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
                },
                destroy: function(e) {
                    e.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                T(this, {
                    parallax: t({}, J)
                })
            },
            on: {
                beforeInit: function(e) {
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                init: function(e) {
                    e.params.parallax.enabled && e.parallax.setTranslate()
                },
                setTranslate: function(e) {
                    e.params.parallax.enabled && e.parallax.setTranslate()
                },
                setTransition: function(e, t) {
                    e.params.parallax.enabled && e.parallax.setTransition(t)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var i = this;
                T(i, {
                    zoom: t({
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    }, Q)
                });
                var s = 1;
                Object.defineProperty(i.zoom, "scale", {
                    get: function() {
                        return s
                    },
                    set: function(e) {
                        if (s !== e) {
                            var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                                a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                            i.emit("zoomChange", e, t, a)
                        }
                        s = e
                    }
                })
            },
            on: {
                init: function(e) {
                    e.params.zoom.enabled && e.zoom.enable()
                },
                destroy: function(e) {
                    e.zoom.disable()
                },
                touchStart: function(e, t) {
                    e.zoom.enabled && e.zoom.onTouchStart(t)
                },
                touchEnd: function(e, t) {
                    e.zoom.enabled && e.zoom.onTouchEnd(t)
                },
                doubleTap: function(e, t) {
                    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
                },
                transitionEnd: function(e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                },
                slideChange: function(e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                T(this, {
                    lazy: t({
                        initialImageLoaded: !1
                    }, ee)
                })
            },
            on: {
                beforeInit: function(e) {
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init: function(e) {
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load())
                },
                scroll: function(e) {
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                "scrollbarDragMove resize _freeModeNoMomentumRelease": function(e) {
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart: function(e) {
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function(e) {
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                },
                slideChange: function(e) {
                    e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                T(this, {
                    controller: t({
                        control: this.params.controller.control
                    }, te)
                })
            },
            on: {
                update: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                resize: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                observerUpdate: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                setTranslate: function(e, t, a) {
                    e.controller.control && e.controller.setTranslate(t, a)
                },
                setTransition: function(e, t, a) {
                    e.controller.control && e.controller.setTransition(t, a)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group"
                }
            },
            create: function() {
                T(this, {
                    a11y: t({}, ae, {
                        liveRegion: I('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    })
                })
            },
            on: {
                afterInit: function(e) {
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                },
                toEdge: function(e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                fromEdge: function(e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                paginationUpdate: function(e) {
                    e.params.a11y.enabled && e.a11y.updatePagination()
                },
                destroy: function(e) {
                    e.params.a11y.enabled && e.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                T(this, {
                    history: t({}, ie)
                })
            },
            on: {
                init: function(e) {
                    e.params.history.enabled && e.history.init()
                },
                destroy: function(e) {
                    e.params.history.enabled && e.history.destroy()
                },
                "transitionEnd _freeModeNoMomentumRelease": function(e) {
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                },
                slideChange: function(e) {
                    e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                T(this, {
                    hashNavigation: t({
                        initialized: !1
                    }, se)
                })
            },
            on: {
                init: function(e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                },
                destroy: function(e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                },
                "transitionEnd _freeModeNoMomentumRelease": function(e) {
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                },
                slideChange: function(e) {
                    e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            },
            create: function() {
                T(this, {
                    autoplay: t({}, re, {
                        running: !1,
                        paused: !1
                    })
                })
            },
            on: {
                init: function(e) {
                    e.params.autoplay.enabled && (e.autoplay.start(), C().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents())
                },
                beforeTransitionStart: function(e, t, a) {
                    e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
                },
                sliderFirstMove: function(e) {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                touchEnd: function(e) {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                },
                destroy: function(e) {
                    e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), C().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                T(this, {
                    fadeEffect: t({}, le)
                })
            },
            on: {
                beforeInit: function(e) {
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ne(e.params, t), ne(e.originalParams, t)
                    }
                },
                setTranslate: function(e) {
                    "fade" === e.params.effect && e.fadeEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "fade" === e.params.effect && e.fadeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                T(this, {
                    cubeEffect: t({}, oe)
                })
            },
            on: {
                beforeInit: function(e) {
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        ne(e.params, t), ne(e.originalParams, t)
                    }
                },
                setTranslate: function(e) {
                    "cube" === e.params.effect && e.cubeEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "cube" === e.params.effect && e.cubeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                T(this, {
                    flipEffect: t({}, de)
                })
            },
            on: {
                beforeInit: function(e) {
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ne(e.params, t), ne(e.originalParams, t)
                    }
                },
                setTranslate: function(e) {
                    "flip" === e.params.effect && e.flipEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "flip" === e.params.effect && e.flipEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                T(this, {
                    coverflowEffect: t({}, pe)
                })
            },
            on: {
                beforeInit: function(e) {
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function(e) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                T(this, {
                    thumbs: t({
                        swiper: null,
                        initialized: !1
                    }, ue)
                })
            },
            on: {
                beforeInit: function(e) {
                    var t = e.params.thumbs;
                    t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                },
                slideChange: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                update: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                resize: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                observerUpdate: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                setTransition: function(e, t) {
                    var a = e.thumbs.swiper;
                    a && a.setTransition(t)
                },
                beforeDestroy: function(e) {
                    var t = e.thumbs.swiper;
                    t && e.thumbs.swiperCreated && t && t.destroy()
                }
            }
        }];
    return R.use(ce), R
});

// end of other

// swiper

function toggleNaviagtion() {
    var e = document.getElementsByTagName("body")[0];
    if (e.classList) e.classList.toggle("menu-open");
    else {
        var t = e.className.split(" "),
            i = t.indexOf("menu-open");
        0 <= i ? t.splice(i, 1) : t.push("menu-open"), e.className = t.join(" ")
    }
}
for (var menu_click = document.getElementsByClassName("menu-link"), remove_menu = function(e) {
        var t = document.getElementsByTagName("body")[0];
        setTimeout(function() {
            t.classList.remove("menu-open")
        }, 200)
    }, i = 0; i < menu_click.length; i++) menu_click[i].addEventListener("click", remove_menu, !1);
var swiper_about = new Swiper("#about .swiper-container", {
        loop: !0,
        speed: 600,
        parallax: !0,
        autoHeight: !0,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        breakpoints: {
            992: {
                pagination: !1,
                navigation: {
                    nextEl: "#about .swiper-button-next",
                    prevEl: "#about .swiper-button-prev"
                },
                autoHeight: !1
            }
        }
    }),
    swiper_testimonials = new Swiper("#testimonials .swiper-container", {
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        breakpoints: {
            992: {
                pagination: !1,
                navigation: {
                    nextEl: "#testimonials .swiper-button-next",
                    prevEl: "#testimonials .swiper-button-prev"
                }
            }
        }
    }),
    swiper_space = new Swiper("#space .swiper-container", {
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        breakpoints: {
            992: {
                pagination: !1,
                navigation: {
                    nextEl: "#space .swiper-button-next",
                    prevEl: "#space .swiper-button-prev"
                },
                autoHeight: !1
            }
        }
    }),
    swiper_brains = new Swiper("#brains .testemonials_holder .swiper-container", {
        observer: !0,
        observeParents: !0,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        breakpoints: {
            992: {
                pagination: !1,
                navigation: {
                    nextEl: "#brains .testemonials_holder .swiper-button-next",
                    prevEl: "#brains .testemonials_holder .swiper-button-prev"
                }
            }
        }
    }),
    video_author = document.querySelectorAll(".video-author");
for (i = 0; i < video_author.length; i++) video_author[i].addEventListener("click", function(e) {
    return function() {
        Array.from(document.querySelectorAll(".video-author")).forEach(function(e) {
            e.classList.remove("active")
        });
        this.classList.add("active");
        swiper_brains.slideTo(e, 700, !1)
    }
}(i));


function init() {
    for (var e = document.getElementsByClassName("defer-first"), t = 0; t < e.length; t++) e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src"))
}


swiper_testimonials.on("slideChange", function() {
    var e = swiper_testimonials.previousIndex,
        t = document.getElementsByClassName("testemunhos__video"),
        i = swiper_testimonials.activeIndex;
    //t[e].removeAttribute("src"), t[i].setAttribute("src", t[i].getAttribute("data-src"))
}), 
swiper_brains.on("slideChange", function() {
    Array.from(document.querySelectorAll(".video-author")).forEach(function(e) {
        e.classList.remove("active")
    });
    var e = swiper_brains.activeIndex + 1;
    document.querySelector(".video-author:nth-child(" + e + ")").classList.add("active");
    var t = swiper_brains.previousIndex,
        i = document.getElementsByClassName("testemunhos__video"),
        n = swiper_brains.activeIndex;
    //i[t].removeAttribute("src"), i[n].setAttribute("src", i[n].getAttribute("data-src"))
}), 
window.onload = init;
var collapsable_click = document.getElementsByClassName("collapse-title"),
    toggle_collapse = function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle("active")
    };
for (i = 0; i < collapsable_click.length; i++) collapsable_click[i].addEventListener("click", toggle_collapse, !1);
var close_click = document.getElementsByClassName("close"),
    close_collapse = function(e) {
        this.parentNode.classList.remove("active")
    };
for (i = 0; i < close_click.length; i++) close_click[i].addEventListener("click", close_collapse, !1);
var event_type_click = document.getElementsByClassName("events-thype__link"),
    change_type = function(e) {
        e.preventDefault(), Array.from(document.querySelectorAll(".events-thype__link")).forEach(function(e) {
            e.parentNode.classList.remove("active")
        });
        this.parentNode.classList.add("active");
        var t = this.getAttribute("data-term"),
            i = this.getAttribute("href"),
            a = document.getElementById("append-events");
        a.style.opacity = 0, a.innerHTML = "";
        var s = document.getElementById("events-thype-description");
        s.style.opacity = 0, s.innerHTML = "";
        var n = new XMLHttpRequest;
        n.open("POST", i, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"), n.onload = function() {
            if (200 <= this.status && this.status < 400) {
                var e = this.response,
                    t = (new DOMParser).parseFromString(e, "text/html"),
                    i = t.getElementById("events-thype-description");
                s.innerHTML = i.innerHTML, s.style.opacity = 1;
                for (var n = t.querySelectorAll("#append-events li"), o = 0; o < n.length; o++) a.appendChild(n[o]);
                a.style.opacity = 1
            } else console.log(this.response)
        }, n.onerror = function() {}, n.send("termo=" + t)
    };
for (i = 0; i < event_type_click.length; i++) event_type_click[i].addEventListener("click", change_type, !1);

// end of swiper

// ------- scroll up ------

//Get the button

mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

// scroll up button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// end of scroll up