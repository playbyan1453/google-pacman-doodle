(function() {
    var aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
      , ba = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
      , ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }
      , da = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this
      , ea = function(a, b) {
        if (b) {
            for (var c = da, d = a.split("."), e = 0; e < d.length - 1; e++) {
                var f = d[e];
                f in c || (c[f] = {});
                c = c[f]
            }
            d = d[d.length - 1];
            e = c[d];
            f = b(e);
            f != e && null != f && ca(c, d, {
                configurable: !0,
                writable: !0,
                value: f
            })
        }
    };
    ea("Array.prototype.fill", function(a) {
        return a ? a : function(a, c, d) {
            var b = this.length || 0;
            0 > c && (c = Math.max(0, b + c));
            if (null == d || d > b)
                d = b;
            d = Number(d);
            0 > d && (d = Math.max(0, b + d));
            for (c = Number(c || 0); c < d; c++)
                this[c] = a;
            return this
        }
    });
    var fa = function() {
        fa = function() {}
        ;
        da.Symbol || (da.Symbol = ha)
    }
      , ha = function() {
        var a = 0;
        return function(b) {
            return "jscomp_symbol_" + (b || "") + a++
        }
    }()
      , ja = function() {
        fa();
        var a = da.Symbol.iterator;
        a || (a = da.Symbol.iterator = da.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && ca(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ia(aa(this))
            }
        });
        ja = function() {}
    }
      , ia = function(a) {
        ja();
        a = {
            next: a
        };
        a[da.Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
      , ka = function(a, b) {
        ja();
        a instanceof String && (a += "");
        var c = 0
          , d = {
            next: function() {
                if (c < a.length) {
                    var e = c++;
                    return {
                        value: b(e, a[e]),
                        done: !1
                    }
                }
                d.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                }
                ;
                return d.next()
            }
        };
        d[Symbol.iterator] = function() {
            return d
        }
        ;
        return d
    };
    ea("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ka(this, function(a) {
                return a
            })
        }
    });
    var g = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    ea("WeakMap", function(a) {
        function b() {}
        function c(a) {
            g(a, e) || ca(a, e, {
                value: new b
            })
        }
        function d(a) {
            var d = Object[a];
            d && (Object[a] = function(a) {
                if (a instanceof b)
                    return a;
                c(a);
                return d(a)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var b = Object.seal({})
                  , c = Object.seal({})
                  , d = new a([[b, 2], [c, 3]]);
                if (2 != d.get(b) || 3 != d.get(c))
                    return !1;
                d["delete"](b);
                d.set(c, 4);
                return !d.has(b) && 4 == d.get(c)
            } catch (Qe) {
                return !1
            }
        }())
            return a;
        var e = "$jscomp_hidden_" + Math.random();
        d("freeze");
        d("preventExtensions");
        d("seal");
        var f = 0
          , l = function(a) {
            this.i = (f += Math.random() + 1).toString();
            if (a) {
                a = ba(a);
                for (var b; !(b = a.next()).done; )
                    b = b.value,
                    this.set(b[0], b[1])
            }
        };
        l.prototype.set = function(a, b) {
            c(a);
            if (!g(a, e))
                throw Error("a`" + a);
            a[e][this.i] = b;
            return this
        }
        ;
        l.prototype.get = function(a) {
            return g(a, e) ? a[e][this.i] : void 0
        }
        ;
        l.prototype.has = function(a) {
            return g(a, e) && g(a[e], this.i)
        }
        ;
        l.prototype["delete"] = function(a) {
            return g(a, e) && g(a[e], this.i) ? delete a[e][this.i] : !1
        }
        ;
        return l
    });
    ea("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var b = Object.seal({
                    x: 4
                })
                  , c = new a(ba([[b, "s"]]));
                if ("s" != c.get(b) || 1 != c.size || c.get({
                    x: 4
                }) || c.set({
                    x: 4
                }, "t") != c || 2 != c.size)
                    return !1;
                var d = c.entries()
                  , e = d.next();
                if (e.done || e.value[0] != b || "s" != e.value[1])
                    return !1;
                e = d.next();
                return e.done || 4 != e.value[0].x || "t" != e.value[1] || !d.next().done ? !1 : !0
            } catch (Re) {
                return !1
            }
        }())
            return a;
        ja();
        var b = new WeakMap
          , c = function(a) {
            this.j = {};
            this.i = f();
            this.size = 0;
            if (a) {
                a = ba(a);
                for (var b; !(b = a.next()).done; )
                    b = b.value,
                    this.set(b[0], b[1])
            }
        };
        c.prototype.set = function(a, b) {
            a = 0 === a ? 0 : a;
            var c = d(this, a);
            c.list || (c.list = this.j[c.id] = []);
            c.La ? c.La.value = b : (c.La = {
                next: this.i,
                Ua: this.i.Ua,
                head: this.i,
                key: a,
                value: b
            },
            c.list.push(c.La),
            this.i.Ua.next = c.La,
            this.i.Ua = c.La,
            this.size++);
            return this
        }
        ;
        c.prototype["delete"] = function(a) {
            a = d(this, a);
            return a.La && a.list ? (a.list.splice(a.index, 1),
            a.list.length || delete this.j[a.id],
            a.La.Ua.next = a.La.next,
            a.La.next.Ua = a.La.Ua,
            a.La.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this.j = {};
            this.i = this.i.Ua = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(a) {
            return !!d(this, a).La
        }
        ;
        c.prototype.get = function(a) {
            return (a = d(this, a).La) && a.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(a) {
                return [a.key, a.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(a) {
                return a.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(a) {
                return a.value
            })
        }
        ;
        c.prototype.forEach = function(a, b) {
            for (var c = this.entries(), d; !(d = c.next()).done; )
                d = d.value,
                a.call(b, d[1], d[0], this)
        }
        ;
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(a, c) {
            var d = c && typeof c;
            "object" == d || "function" == d ? b.has(c) ? d = b.get(c) : (d = "" + ++l,
            b.set(c, d)) : d = "p_" + c;
            var e = a.j[d];
            if (e && g(a.j, d))
                for (var f = 0; f < e.length; f++) {
                    var q = e[f];
                    if (c !== c && q.key !== q.key || c === q.key)
                        return {
                            id: d,
                            list: e,
                            index: f,
                            La: q
                        }
                }
            return {
                id: d,
                list: e,
                index: -1,
                La: void 0
            }
        }
          , e = function(a, b) {
            var c = a.i;
            return ia(function() {
                if (c) {
                    for (; c.head != a.i; )
                        c = c.Ua;
                    for (; c.next != c.head; )
                        return c = c.next,
                        {
                            done: !1,
                            value: b(c)
                        };
                    c = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var a = {};
            return a.Ua = a.next = a.head = a
        }
          , l = 0;
        return c
    });
    var h = this
      , la = function() {}
      , ma = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
      , na = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
      , oa = Date.now || function() {
        return +new Date
    }
      , pa = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Gb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.nc = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
                d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var qa = function(a) {
        this.Ka = a;
        this.H = !1;
        this.T = []
    }
      , ra = function(a, b) {
        a.H ? b() : a.T.push(b)
    };
    var ua = function(a) {
        var b = new Image
          , c = sa
          , d = "";
        b.onerror = b.onload = b.onabort = function() {
            delete ta[c]
        }
        ;
        ta[c] = b;
        -1 != a.search("&ei=") || (window.google && window.google.kEI ? d = "&ei=" + window.google.kEI : d = "&ei=");
        a = "/gen_204?atyp=i&ct=doodle&cad=" + a + d + "&zx=" + oa();
        /^http:/i.test(a) && "https:" == window.location.protocol ? delete ta[c] : (b.src = a,
        sa = c + 1)
    }
      , ta = []
      , sa = 0;
    var va = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" == typeof a)
            return "string" == typeof b && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var wa = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , k = function(a, b) {
        return -1 != a.indexOf(b)
    }
      , xa = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var m = navigator.userAgent
      , ya = window.location.href
      , za = k(m, "iPad") || k(m, "iPhone") || k(m, "iPod")
      , Aa = k(m.toLowerCase(), "gsa") && !za
      , Ba = za || k(m, "Android") || k(m, "Mobile") || k(m, "Silk") || k(m, "UCBrowser") || k(m, "UCWEB");
    k(m, "Chrome") && k(m, "Mobile") && k(m, "wv");
    0 <= m.indexOf("MSIE") && m.indexOf("MSIE 8.");
    k(m, "GT-I9300") && k(m, "Chrome");
    k(ya, "/logos/") && k(ya, ".html");
    var Ca = ["", "moz", "ms", "o", "webkit"]
      , Da = function(a) {
        var b = document;
        if (!b)
            return null;
        for (var c = 0; c < Ca.length; c++) {
            var d = Ca[c]
              , e = a;
            0 < d.length && (e = a.charAt(0).toUpperCase() + a.substr(1));
            d += e;
            if ("undefined" != typeof b[d])
                return d
        }
        return null
    }
      , Ea = function() {
        for (var a = ["requestAnimationFrame", "mozRequestAnimationFrame", "msRequestAnimationFrame", "oRequestAnimationFrame", "webkitRequestAnimationFrame"], b = 0; b < a.length; b++) {
            var c = window[a[b]];
            if (c)
                return function(a, b, d) {
                    return c(function(b) {
                        return a.call(d, b)
                    }, b)
                }
        }
        var d = 0
          , e = 33
          , f = 50;
        return function(a, b, c) {
            b && 0 > --f && (1.25 < b / e ? (d = 0,
            e = Math.min(66, ++e)) : 10 < ++d && (d = 0,
            e = Math.max(17, --e)));
            window.setTimeout(function(b) {
                a.call(c, b)
            }, e)
        }
    }
      , Fa = function(a, b, c) {
        Fa = Ea();
        return Fa(a, b, c)
    };
    var Ga;
    a: {
        var Ha = h.navigator;
        if (Ha) {
            var Ia = Ha.userAgent;
            if (Ia) {
                Ga = Ia;
                break a
            }
        }
        Ga = ""
    }
    var n = function(a) {
        return k(Ga, a)
    };
    var Ja = function() {
        return n("iPhone") && !n("iPod") && !n("iPad")
    };
    var Ka = function(a) {
        Ka[" "](a);
        return a
    };
    Ka[" "] = la;
    var La = n("Opera")
      , Na = n("Trident") || n("MSIE")
      , Oa = n("Edge")
      , Pa = n("Gecko") && !(k(Ga.toLowerCase(), "webkit") && !n("Edge")) && !(n("Trident") || n("MSIE")) && !n("Edge")
      , Qa = k(Ga.toLowerCase(), "webkit") && !n("Edge");
    Qa && n("Mobile");
    n("Macintosh");
    n("Windows");
    n("Linux") || n("CrOS");
    var Ra = h.navigator || null;
    Ra && k(Ra.appVersion || "", "X11");
    n("Android");
    Ja();
    n("iPad");
    n("iPod");
    Ja() || n("iPad") || n("iPod");
    k(Ga.toLowerCase(), "kaios");
    var Sa = function() {
        var a = h.document;
        return a ? a.documentMode : void 0
    }, Ta;
    a: {
        var Ua = ""
          , Va = function() {
            var a = Ga;
            if (Pa)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Oa)
                return /Edge\/([\d\.]+)/.exec(a);
            if (Na)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Qa)
                return /WebKit\/(\S+)/.exec(a);
            if (La)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Va && (Ua = Va ? Va[1] : "");
        if (Na) {
            var Wa = Sa();
            if (null != Wa && Wa > parseFloat(Ua)) {
                Ta = String(Wa);
                break a
            }
        }
        Ta = Ua
    }
    var Xa = Ta, Ya = {}, Za;
    var $a = h.document;
    Za = $a && Na ? Sa() || ("CSS1Compat" == $a.compatMode ? parseInt(Xa, 10) : 5) : void 0;
    var ab;
    (ab = !Na) || (ab = 9 <= Number(Za));
    var bb = ab, cb;
    if (cb = Na) {
        var db;
        if (Object.prototype.hasOwnProperty.call(Ya, "9"))
            db = Ya["9"];
        else {
            for (var eb, fb = 0, gb = wa(String(Xa)).split("."), hb = wa("9").split("."), ib = Math.max(gb.length, hb.length), jb = 0; 0 == fb && jb < ib; jb++) {
                var kb = gb[jb] || ""
                  , lb = hb[jb] || "";
                do {
                    var mb = /(\d*)(\D*)(.*)/.exec(kb) || ["", "", "", ""]
                      , nb = /(\d*)(\D*)(.*)/.exec(lb) || ["", "", "", ""];
                    if (0 == mb[0].length && 0 == nb[0].length)
                        break;
                    fb = xa(0 == mb[1].length ? 0 : parseInt(mb[1], 10), 0 == nb[1].length ? 0 : parseInt(nb[1], 10)) || xa(0 == mb[2].length, 0 == nb[2].length) || xa(mb[2], nb[2]);
                    kb = mb[3];
                    lb = nb[3]
                } while (0 == fb)
            }
            eb = 0 <= fb;
            db = Ya["9"] = eb
        }
        cb = !db
    }
    var ob = cb
      , pb = function() {
        if (!h.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            h.addEventListener("test", la, b),
            h.removeEventListener("test", la, b)
        } catch (c) {}
        return a
    }();
    var qb = function() {
        this.H = this.H;
        this.Sa = this.Sa
    };
    qb.prototype.H = !1;
    qb.prototype.Cb = function() {
        this.H || (this.H = !0,
        this.$a())
    }
    ;
    qb.prototype.$a = function() {
        if (this.Sa)
            for (; this.Sa.length; )
                this.Sa.shift()()
    }
    ;
    var rb = function(a, b) {
        this.type = a;
        this.i = this.target = b
    };
    rb.prototype.preventDefault = function() {}
    ;
    var tb = function(a, b) {
        rb.call(this, a ? a.type : "");
        this.relatedTarget = this.i = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.j = null;
        if (a) {
            var c = this.type = a.type
              , d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.i = b;
            var e = a.relatedTarget;
            if (e) {
                if (Pa) {
                    a: {
                        try {
                            Ka(e.nodeName);
                            var f = !0;
                            break a
                        } catch (l) {}
                        f = !1
                    }
                    f || (e = null)
                }
            } else
                "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.relatedTarget = e;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
            this.screenX = a.screenX || 0,
            this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
            this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
            this.screenX = d.screenX || 0,
            this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" == typeof a.pointerType ? a.pointerType : sb[a.pointerType] || "";
            this.j = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    pa(tb, rb);
    var sb = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    tb.prototype.preventDefault = function() {
        tb.Gb.preventDefault.call(this);
        var a = this.j;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        ob)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var ub = "closure_listenable_" + (1E6 * Math.random() | 0)
      , vb = 0;
    var wb = function(a, b, c, d, e) {
        this.listener = a;
        this.i = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.j = e;
        this.key = ++vb;
        this.removed = this.Ab = !1
    }
      , xb = function(a) {
        a.removed = !0;
        a.listener = null;
        a.i = null;
        a.src = null;
        a.j = null
    };
    var yb = function(a) {
        this.src = a;
        this.i = {};
        this.j = 0
    };
    yb.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.i[f];
        a || (a = this.i[f] = [],
        this.j++);
        var l;
        a: {
            for (l = 0; l < a.length; ++l) {
                var q = a[l];
                if (!q.removed && q.listener == b && q.capture == !!d && q.j == e)
                    break a
            }
            l = -1
        }
        -1 < l ? (b = a[l],
        c || (b.Ab = !1)) : (b = new wb(b,this.src,f,!!d,e),
        b.Ab = c,
        a.push(b));
        return b
    }
    ;
    var zb = function(a, b) {
        var c = b.type;
        if (c in a.i) {
            var d = a.i[c], e = va(d, b), f;
            (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
            f && (xb(b),
            0 == a.i[c].length && (delete a.i[c],
            a.j--))
        }
    };
    var Ab = "closure_lm_" + (1E6 * Math.random() | 0)
      , Bb = {}
      , Cb = 0
      , Eb = function() {
        var a = Db
          , b = bb ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
      , Fb = function(a, b, c, d, e) {
        if ("array" == ma(b))
            for (var f = 0; f < b.length; f++)
                Fb(a, b[f], c, d, e);
        else if (c = Gb(c),
        a && a[ub])
            a.i.add(String(b), c, !0, na(d) ? !!d.capture : !!d, e);
        else {
            if (!b)
                throw Error("c");
            f = na(d) ? !!d.capture : !!d;
            var l = Hb(a);
            l || (a[Ab] = l = new yb(a));
            c = l.add(b, c, !0, f, e);
            if (!c.i) {
                e = Eb();
                c.i = e;
                e.src = a;
                e.listener = c;
                if (a.addEventListener)
                    pb || (d = f),
                    void 0 === d && (d = !1),
                    a.addEventListener(b.toString(), e, d);
                else if (a.attachEvent)
                    a.attachEvent(Ib(b.toString()), e);
                else if (a.addListener && a.removeListener)
                    a.addListener(e);
                else
                    throw Error("d");
                Cb++
            }
        }
    }
      , Ib = function(a) {
        return a in Bb ? Bb[a] : Bb[a] = "on" + a
    }
      , Kb = function(a, b, c, d) {
        var e = !0;
        if (a = Hb(a))
            if (b = a.i[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.removed && (f = Jb(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
      , Jb = function(a, b) {
        var c = a.listener
          , d = a.j || a.src;
        if (a.Ab && "number" != typeof a && a && !a.removed) {
            var e = a.src;
            if (e && e[ub])
                zb(e.i, a);
            else {
                var f = a.type
                  , l = a.i;
                e.removeEventListener ? e.removeEventListener(f, l, a.capture) : e.detachEvent ? e.detachEvent(Ib(f), l) : e.addListener && e.removeListener && e.removeListener(l);
                Cb--;
                (f = Hb(e)) ? (zb(f, a),
                0 == f.j && (f.src = null,
                e[Ab] = null)) : xb(a)
            }
        }
        return c.call(d, b)
    }
      , Db = function(a, b) {
        if (a.removed)
            return !0;
        if (!bb) {
            var c;
            if (!(c = b))
                a: {
                    c = ["window", "event"];
                    for (var d = h, e = 0; e < c.length; e++)
                        if (d = d[c[e]],
                        null == d) {
                            c = null;
                            break a
                        }
                    c = d
                }
            e = c;
            c = new tb(e,this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode)
                        try {
                            e.keyCode = -1;
                            break a
                        } catch (Ma) {
                            f = !0
                        }
                    if (f || void 0 == e.returnValue)
                        e.returnValue = !0
                }
                e = [];
                for (f = c.i; f; f = f.parentNode)
                    e.push(f);
                f = a.type;
                for (var l = e.length - 1; 0 <= l; l--) {
                    c.i = e[l];
                    var q = Kb(e[l], f, !0, c);
                    d = d && q
                }
                for (l = 0; l < e.length; l++)
                    c.i = e[l],
                    q = Kb(e[l], f, !1, c),
                    d = d && q
            }
            return d
        }
        return Jb(a, new tb(b,this))
    }
      , Hb = function(a) {
        a = a[Ab];
        return a instanceof yb ? a : null
    }
      , Lb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
      , Gb = function(a) {
        if ("function" == ma(a))
            return a;
        a[Lb] || (a[Lb] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Lb]
    };
    var Nb = function(a, b) {
        this.T = a;
        this.H = b;
        this.$ = this.i = null;
        this.Oa = !1;
        this.Ka = [];
        this.j = null
    }
      , Ob = !(!window.AudioContext && !window.webkitAudioContext) && !!window.GainNode
      , Pb = function(a) {
        a.j = a.i.createBufferSource();
        a.j.buffer = a.i.createBuffer(1, 1, 22050);
        a.j.connect(a.i.destination);
        a.j.onended = function() {
            a.Oa = !0;
            for (var b = 0; b < a.Ka.length; b++)
                a.Ka[b]()
        }
        ;
        a.j.start(0)
    }
      , Qb = function(a) {
        a.i && (null == a.j ? Pb(a) : void 0 !== a.j.playbackState ? a.j.playbackState !== a.j.PLAYING_STATE && a.j.playbackState !== a.j.FINISHED_STATE && Pb(a) : Pb(a))
    };
    Nb.prototype.destroy = function() {
        this.i.close();
        this.i = null
    }
    ;
    Nb.prototype.reset = function() {
        for (var a in this.T)
            this.T[a].T = [];
        for (var b in this.H)
            this.H[b].stop()
    }
    ;
    var p = function(a, b, c) {
        this.Fb = a;
        this.Ka = b;
        this.$ = c;
        this.j = {};
        this.T = this.i = this.H = null;
        this.Oa = 0
    }
      , Rb = function(a, b, c) {
        a.i = b;
        a.T = c
    }
      , Sb = document.createElement("audio")
      , Tb = "function" == ma(Sb.canPlayType) && "" != Sb.canPlayType("audio/mpeg") ? ".mp3" : ".ogg"
      , Ub = function(a) {
        if (a.i) {
            var b = 1E3 * a.i.currentTime, c;
            for (c in a.j) {
                var d = a.j[c];
                !d.Yb && d.Eb + a.$ < b && delete a.j[c]
            }
        }
    };
    p.prototype.play = function(a, b, c, d, e) {
        if (!this.i || !this.T)
            return -1;
        Ub(this);
        a = this.i.currentTime + (a || 0) / 1E3;
        d || (d = this.i.createBufferSource(),
        d.playbackRate.setValueAtTime(1, this.i.currentTime));
        !this.H && this.i.createGain && (this.H = this.i.createGain());
        this.H ? (d.connect(this.H),
        this.H.connect(this.T)) : d.connect(this.T);
        d.loop = !!b;
        try {
            d.buffer = this.Fb.$
        } catch (q) {
            return -1
        }
        c = c || 0;
        var f = this.Ka / 1E3
          , l = this.$ / 1E3 / d.playbackRate.value;
        b ? (d.loopStart = f + (e ? c / 1E3 : 0),
        d.loopEnd = f + l,
        d.start(a, f + c / 1E3)) : d.start(a, f + c / 1E3, l);
        e = this.Oa++;
        this.j[e] = {
            node: d,
            Eb: 1E3 * a - c,
            Yb: !!b
        };
        return e
    }
    ;
    p.prototype.stop = function(a) {
        Ub(this);
        if (void 0 !== a) {
            if (this.j[a]) {
                try {
                    this.j[a].node.stop(0)
                } catch (c) {}
                var b = (1E3 * this.i.currentTime - this.j[a].Eb) % this.$;
                delete this.j[a];
                return [b]
            }
            return []
        }
        a = [];
        for (b in this.j)
            a = a.concat(this.stop(b));
        return a
    }
    ;
    var Vb = function(a, b) {
        qa.call(this, a + b + Tb);
        this.j = this.$ = null;
        this.i = 0
    };
    pa(Vb, qa);
    Vb.prototype.preload = function(a, b) {
        a && ra(this, a);
        if (0 == this.i && this.j) {
            var c = this
              , d = new XMLHttpRequest;
            d.open("GET", this.Ka, !0);
            d.responseType = "arraybuffer";
            d.onload = function() {
                c.j.decodeAudioData(d.response, function(a) {
                    if (a && (c.$ = a,
                    c.i = 3,
                    !c.H)) {
                        c.H = !0;
                        a = 0;
                        for (var b; b = c.T[a]; a++)
                            b()
                    }
                });
                c.i = 2
            }
            ;
            b && (d.onprogress = function(a) {
                a.lengthComputable && b(a.loaded / a.total)
            }
            );
            d.send();
            this.i = 1
        }
    }
    ;
    var Wb = {}
      , Xb = {
        hc: 0,
        kc: 1,
        mc: 2,
        bc: 3,
        jc: 4,
        lc: 5,
        ac: 6
    };
    Wb.ub = null;
    var Yb = []
      , Zb = {}
      , $b = 0
      , ac = null
      , bc = null
      , cc = !1
      , r = function(a, b) {
        return a.buttons[b] && .5 < a.buttons[b]
    }
      , t = function(a, b, c) {
        return "undefined" == typeof a.axes[b] ? !1 : c ? -.75 > a.axes[b] : .75 < a.axes[b]
    }
      , ec = function(a) {
        Wb.ub = a.gamepad;
        cc || (cc = !0,
        dc())
    }
      , fc = function() {
        delete Wb.ub;
        cc = !1
    }
      , dc = function() {
        if (Wb.ub)
            var a = Wb.ub;
        else {
            var b = navigator.getGamepads && navigator.getGamepads() || navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads;
            a = b && (b[3] || b[2] || b[1] || b[0]) || null
        }
        if (a && (!a.timestamp || a.timestamp != $b)) {
            $b = a.timestamp;
            b = [];
            b[0] = r(a, 14) || t(a, 0, !0) || t(a, 2, !0);
            b[1] = r(a, 15) || t(a, 0, !1) || t(a, 2, !1);
            b[2] = r(a, 12) || t(a, 1, !0) || t(a, 3, !0);
            b[3] = r(a, 13) || t(a, 1, !1) || t(a, 3, !1);
            b[4] = r(a, 0) || r(a, 4) || r(a, 6) || r(a, 8) || r(a, 9) || r(a, 10);
            b[5] = r(a, 1) || r(a, 5) || r(a, 7) || r(a, 11);
            b[6] = r(a, 2) || r(a, 3);
            if (Yb.length)
                for (var c in Xb) {
                    a = Xb[c];
                    var d = b[a];
                    if ("undefined" != typeof d && d != Yb[a] && Zb[a]) {
                        bc && bc();
                        var e = document.createEvent("Event");
                        e.initEvent(d ? "keydown" : "keyup", !0, !0);
                        e.keyCode = Zb[a];
                        ac.dispatchEvent(e)
                    }
                }
            Yb = b
        }
        cc && (window.requestAnimationFrame ? window.requestAnimationFrame(dc) : window.oRequestAnimationFrame ? window.oRequestAnimationFrame(dc) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(dc) : window.msRequestAnimationFrame ? window.msRequestAnimationFrame(dc) : window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame(dc))
    };
    var jc = function(a, b, c) {
        qb.call(this);
        this.kb = a;
        this.wb = b;
        this.$b = c;
        this.lb = oa();
        this.rb = Da("hidden");
        this.j = (this.Ya = Da("visibilityState")) ? this.Ya.replace(/state$/i, "change").toLowerCase() : null;
        this.$ = gc(this);
        this.Ka = !1;
        this.Oa = this.$;
        hc(this);
        ic(this)
    };
    pa(jc, qb);
    var hc = function(a) {
        a.j ? kc(a) : Aa && lc(a, function() {
            kc(a)
        })
    }
      , kc = function(a) {
        a.i = function() {
            a.$ = gc(a);
            a.$ ? mc(a) : nc(a)
        }
        ;
        var b = window.agsa_ext;
        a.j ? document.addEventListener(a.j, a.i, !1) : b && b.registerPageVisibilityListener && (google.doodle || (google.doodle = {}),
        google.doodle.pvc = function() {
            a.i && a.i()
        }
        ,
        b.registerPageVisibilityListener("google.doodle.pvc();"))
    }
      , lc = function(a, b) {
        window.agsa_ext ? b() : a.vb = window.setTimeout(function() {
            hc(a)
        }, 100)
    };
    jc.prototype.$a = function() {
        window.clearTimeout(this.T);
        window.clearTimeout(this.vb);
        this.i && (this.j && document.removeEventListener ? document.removeEventListener(this.j, this.i, !1) : window.agsa_ext && window.agsa_ext.registerPageVisibilityListener && (this.i = null));
        jc.Gb.$a.call(this)
    }
    ;
    var gc = function(a) {
        if (!a.rb && !a.Ya && window.agsa_ext && window.agsa_ext.getPageVisibility)
            return "hidden" == window.agsa_ext.getPageVisibility();
        var b = document[a.Ya];
        return document[a.rb] || "hidden" == b
    }
      , mc = function(a) {
        var b = a.$ || a.Ka;
        a.Oa && !b ? (a.Oa = !1,
        a.$b(),
        ic(a)) : !a.Oa && b && (a.Oa = !0,
        a.wb())
    }
      , ic = function(a) {
        a.T && window.clearTimeout(a.T);
        var b = Math.max(100, a.kb - oc(a));
        a.T = window.setTimeout(function() {
            a.T = null;
            a.Ka = oc(a) >= a.kb;
            a.Ka || ic(a);
            mc(a)
        }, b)
    }
      , oc = function(a) {
        return oa() - a.lb
    }
      , nc = function(a) {
        a.lb = oa();
        a.Ka = !1;
        mc(a)
    };
    var w = function() {
        Nb.call(this, u, v)
    };
    pa(w, Nb);
    var u = {
        Xa: new Vb("pacman10_regular"),
        Ra: new Vb("pacman10_looped")
    }
      , v = {
        Hb: new p(u.Ra,0,402.313),
        Ib: new p(u.Ra,1402.313,327.256),
        Jb: new p(u.Ra,2729.569,298.299),
        Kb: new p(u.Ra,4027.868,264.512),
        Lb: new p(u.Ra,5292.381,268.254),
        Mb: new p(u.Ra,6560.635,538.367),
        Nb: new p(u.Ra,8099.002,5255.896),
        Ob: new p(u.Xa,2410.612,1724.082),
        Pb: new p(u.Xa,0,1410.612),
        Qb: new p(u.Xa,5134.694,130.612),
        Rb: new p(u.Xa,6265.306,130.612),
        Sb: new p(u.Xa,7395.918,208.98),
        Tb: new p(u.Xa,8604.898,574.694),
        Ub: new p(u.Xa,10179.592,2089.796),
        Vb: new p(u.Xa,13269.388,496.327),
        Wb: new p(u.Ra,19518.005,4191.973),
        Xb: new p(u.Ra,14354.898,4163.107)
    };
    w.i = void 0;
    w.j = function() {
        return w.i ? w.i : w.i = new w
    }
    ;
    google.doodle || (google.doodle = {});
    var x, y, pc, qc, z, rc, A, B, sc, C, tc, D, E, uc, vc, wc, F, xc, yc, G, H, I, zc, Ac, J, K, Bc, Cc, Dc, Ec, Fc, Gc, L, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, M, Rc, Sc, Tc, Uc, Vc, Wc, N, Xc, Yc, Zc, $c, ad, bd, cd, dd, ed, fd, gd, hd, id, jd, kd, ld, md, O, nd, od, P, pd, qd, rd, sd, td, ud, Q, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd = [1, 4, 2, 8], R = {
        0: {
            axis: 0,
            Ma: 0
        },
        1: {
            axis: 0,
            Ma: -1
        },
        2: {
            axis: 0,
            Ma: 1
        },
        4: {
            axis: 1,
            Ma: -1
        },
        8: {
            axis: 1,
            Ma: 1
        }
    }, Ed = [0, 7, 17, 32], Fd = [{
        x: 5,
        y: 1,
        S: 56
    }, {
        x: 5,
        y: 4,
        S: 5
    }, {
        x: 5,
        y: 1,
        h: 4
    }, {
        x: 9,
        y: 1,
        h: 12
    }, {
        x: 5,
        y: 12,
        h: 4
    }, {
        x: 10,
        y: 12,
        h: 4
    }, {
        x: 5,
        y: 15,
        S: 16
    }, {
        x: 5,
        y: 12,
        S: 31
    }, {
        x: 60,
        y: 1,
        h: 4
    }, {
        x: 54,
        y: 1,
        h: 4
    }, {
        x: 19,
        y: 1,
        h: 12
    }, {
        x: 19,
        y: 4,
        S: 26
    }, {
        x: 13,
        y: 5,
        S: 7
    }, {
        x: 13,
        y: 5,
        h: 4
    }, {
        x: 13,
        y: 8,
        S: 3
    }, {
        x: 56,
        y: 4,
        h: 9
    }, {
        x: 48,
        y: 4,
        S: 13
    }, {
        x: 48,
        y: 1,
        h: 12
    }, {
        x: 60,
        y: 12,
        h: 4
    }, {
        x: 44,
        y: 15,
        S: 17
    }, {
        x: 54,
        y: 12,
        h: 4
    }, {
        x: 44,
        y: 12,
        S: 17
    }, {
        x: 44,
        y: 1,
        h: 15
    }, {
        x: 41,
        y: 13,
        S: 4
    }, {
        x: 41,
        y: 13,
        h: 3
    }, {
        x: 38,
        y: 13,
        h: 3
    }, {
        x: 38,
        y: 15,
        S: 4
    }, {
        x: 35,
        y: 10,
        S: 10
    }, {
        x: 35,
        y: 1,
        h: 15
    }, {
        x: 35,
        y: 13,
        S: 4
    }, {
        x: 21,
        y: 12,
        h: 4
    }, {
        x: 24,
        y: 12,
        h: 4
    }, {
        x: 24,
        y: 15,
        S: 12
    }, {
        x: 27,
        y: 4,
        h: 9
    }, {
        x: 52,
        y: 9,
        S: 5
    }, {
        x: 56,
        y: 8,
        S: 10,
        type: 1
    }, {
        x: 1,
        y: 8,
        S: 9,
        type: 1
    }], S = [{
        x: 1,
        y: 8,
        S: 8
    }, {
        x: 57,
        y: 8,
        S: 9
    }, {
        x: 44,
        y: 2,
        h: 10
    }, {
        x: 35,
        y: 5,
        h: 7
    }, {
        x: 36,
        y: 4,
        S: 8
    }, {
        x: 36,
        y: 10,
        S: 8
    }, {
        x: 39,
        y: 15,
        S: 2
    }], Gd = [{
        x: 5,
        y: 15
    }, {
        x: 5,
        y: 3
    }, {
        x: 15,
        y: 8
    }, {
        x: 60,
        y: 3
    }, {
        x: 60,
        y: 15
    }], Hd = [{
        x: 2,
        y: 8
    }, {
        x: 63,
        y: 8
    }], Id = {
        1: [{
            x: 39.5,
            y: 15,
            dir: 4
        }, {
            x: 39.5,
            y: 4,
            dir: 4,
            Va: 57,
            Wa: -4
        }, {
            x: 39.5,
            y: 7,
            dir: 2,
            Va: 0,
            Wa: -4
        }, {
            x: 37.625,
            y: 7,
            dir: 1,
            Va: 57,
            Wa: 20
        }, {
            x: 41.375,
            y: 7,
            dir: 1,
            Va: 0,
            Wa: 20
        }],
        2: [{
            x: 40.25,
            y: 15,
            dir: 8
        }, {
            x: 38.75,
            y: 15,
            dir: 4
        }, {
            x: 39.5,
            y: 4,
            dir: 4,
            Va: 57,
            Wa: -4
        }, {
            x: 39.5,
            y: 7,
            dir: 2,
            Va: 0,
            Wa: -4
        }, {
            x: 37.625,
            y: 7,
            dir: 1,
            Va: 57,
            Wa: 20
        }, {
            x: 41.375,
            y: 7,
            dir: 1,
            Va: 0,
            Wa: 20
        }]
    }, Jd = [32, 312], Kd = [80, 312], Ld = {
        0: .16,
        1: .23,
        2: 1,
        3: 1,
        4: 2.23,
        5: .3,
        6: 1.9,
        7: 2.23,
        8: 1.9,
        9: 5,
        10: 1.9,
        11: 1.18,
        12: .3,
        13: .5,
        14: 1.9,
        15: 9,
        16: 10,
        17: .26
    }, T = .8 * .4, Md = [{}, {
        ra: .75,
        ta: .4,
        Ia: .8,
        ka: .71,
        Ga: .5,
        Ha: .9,
        Aa: .79,
        ya: 20,
        Ca: .8,
        Ba: 10,
        Da: .85,
        V: 6,
        Ea: 5,
        ha: 1,
        Fa: 100,
        ma: [7, 20, 7, 20, 5, 20, 5, 1],
        va: 4,
        wa: [0, 0, 30, 60]
    }, {
        ra: .85,
        ta: .45,
        Ia: .9,
        ka: .79,
        Ga: .55,
        Ha: .95,
        Aa: .83,
        ya: 30,
        Ca: .9,
        Ba: 15,
        Da: .95,
        V: 5,
        Ea: 5,
        ha: 2,
        Fa: 300,
        ma: [7, 20, 7, 20, 5, 1033, 1 / 60, 1],
        va: 4,
        wa: [0, 0, 0, 50],
        ab: 1
    }, {
        ra: .85,
        ta: .45,
        Ia: .9,
        ka: .79,
        Ga: .55,
        Ha: .95,
        Aa: .83,
        ya: 40,
        Ca: .9,
        Ba: 20,
        Da: .95,
        V: 4,
        Ea: 5,
        ha: 3,
        Fa: 500,
        ma: [7, 20, 7, 20, 5, 1033, 1 / 60, 1],
        va: 4,
        wa: [0, 0, 0, 0]
    }, {
        ra: .85,
        ta: .45,
        Ia: .9,
        ka: .79,
        Ga: .55,
        Ha: .95,
        Aa: .83,
        ya: 40,
        Ca: .9,
        Ba: 20,
        Da: .95,
        V: 3,
        Ea: 5,
        ha: 3,
        Fa: 500,
        ma: [7, 20, 7, 20, 5, 1033, 1 / 60, 1],
        va: 4,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 40,
        Ca: 1,
        Ba: 20,
        Da: 1.05,
        V: 2,
        Ea: 5,
        ha: 4,
        Fa: 700,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0],
        ab: 2
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 50,
        Ca: 1,
        Ba: 25,
        Da: 1.05,
        V: 5,
        Ea: 5,
        ha: 4,
        Fa: 700,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 50,
        Ca: 1,
        Ba: 25,
        Da: 1.05,
        V: 2,
        Ea: 5,
        ha: 5,
        Fa: 1E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 50,
        Ca: 1,
        Ba: 25,
        Da: 1.05,
        V: 2,
        Ea: 5,
        ha: 5,
        Fa: 1E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 60,
        Ca: 1,
        Ba: 30,
        Da: 1.05,
        V: 1,
        Ea: 3,
        ha: 6,
        Fa: 2E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0],
        ab: 3
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 60,
        Ca: 1,
        Ba: 30,
        Da: 1.05,
        V: 5,
        Ea: 5,
        ha: 6,
        Fa: 2E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 60,
        Ca: 1,
        Ba: 30,
        Da: 1.05,
        V: 2,
        Ea: 5,
        ha: 7,
        Fa: 3E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 80,
        Ca: 1,
        Ba: 40,
        Da: 1.05,
        V: 1,
        Ea: 3,
        ha: 7,
        Fa: 3E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 80,
        Ca: 1,
        Ba: 40,
        Da: 1.05,
        V: 1,
        Ea: 3,
        ha: 8,
        Fa: 5E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0],
        ab: 3
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 80,
        Ca: 1,
        Ba: 40,
        Da: 1.05,
        V: 3,
        Ea: 5,
        ha: 8,
        Fa: 5E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 100,
        Ca: 1,
        Ba: 50,
        Da: 1.05,
        V: 1,
        Ea: 3,
        ha: 8,
        Fa: 5E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 100,
        Ca: 1,
        Ba: 50,
        Da: 1.05,
        V: 1,
        Ea: 3,
        ha: 8,
        Fa: 5E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 100,
        Ca: 1,
        Ba: 50,
        Da: 1.05,
        V: 0,
        Ea: 0,
        ha: 8,
        Fa: 5E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0],
        ab: 3
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 100,
        Ca: 1,
        Ba: 50,
        Da: 1.05,
        V: 1,
        Ea: 3,
        ha: 8,
        Fa: 5E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 120,
        Ca: 1,
        Ba: 60,
        Da: 1.05,
        V: 0,
        Ea: 0,
        ha: 8,
        Fa: 5E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: 1,
        ka: .87,
        Ga: .6,
        Ha: 1,
        Aa: .87,
        ya: 120,
        Ca: 1,
        Ba: 60,
        Da: 1.05,
        V: 0,
        Ea: 0,
        ha: 8,
        Fa: 5E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }, {
        ra: .95,
        ta: .5,
        Ia: .9,
        ka: .79,
        Ga: .75,
        Ha: .9,
        Aa: .79,
        ya: 120,
        Ca: 1,
        Ba: 60,
        Da: 1.05,
        V: 0,
        Ea: 0,
        ha: 8,
        Fa: 5E3,
        ma: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
        va: 3,
        wa: [0, 0, 0, 0]
    }], Nd = {
        1: [{
            x: 37.6,
            y: 7,
            dir: 1,
            U: 6.375,
            speed: .48
        }, {
            x: 37.6,
            y: 6.375,
            dir: 2,
            U: 7.625,
            speed: .48
        }, {
            x: 37.6,
            y: 7.625,
            dir: 1,
            U: 7,
            speed: .48
        }],
        2: [{
            x: 39.5,
            y: 7,
            dir: 2,
            U: 7.625,
            speed: .48
        }, {
            x: 39.5,
            y: 7.625,
            dir: 1,
            U: 6.375,
            speed: .48
        }, {
            x: 39.5,
            y: 6.375,
            dir: 2,
            U: 7,
            speed: .48
        }],
        3: [{
            x: 41.4,
            y: 7,
            dir: 1,
            U: 6.375,
            speed: .48
        }, {
            x: 41.4,
            y: 6.375,
            dir: 2,
            U: 7.625,
            speed: .48
        }, {
            x: 41.4,
            y: 7.625,
            dir: 1,
            U: 7,
            speed: .48
        }],
        4: [{
            x: 37.6,
            y: 7,
            dir: 8,
            U: 39.5,
            speed: T
        }, {
            x: 39.5,
            y: 7,
            dir: 1,
            U: 4,
            speed: T
        }],
        5: [{
            x: 39.5,
            y: 7,
            dir: 1,
            U: 4,
            speed: T
        }],
        6: [{
            x: 41.4,
            y: 7,
            dir: 4,
            U: 39.5,
            speed: T
        }, {
            x: 39.5,
            y: 7,
            dir: 1,
            U: 4,
            speed: T
        }],
        7: [{
            x: 39.5,
            y: 4,
            dir: 2,
            U: 7,
            speed: 1.6
        }, {
            x: 39.5,
            y: 7,
            dir: 4,
            U: 37.625,
            speed: 1.6
        }],
        8: [{
            x: 39.5,
            y: 4,
            dir: 2,
            U: 7,
            speed: 1.6
        }],
        9: [{
            x: 39.5,
            y: 4,
            dir: 2,
            U: 7,
            speed: 1.6
        }, {
            x: 39.5,
            y: 7,
            dir: 8,
            U: 41.375,
            speed: 1.6
        }],
        10: [{
            x: 37.6,
            y: 7,
            dir: 8,
            U: 39.5,
            speed: T
        }, {
            x: 39.5,
            y: 7,
            dir: 1,
            U: 4,
            speed: T
        }],
        11: [{
            x: 39.5,
            y: 7,
            dir: 1,
            U: 4,
            speed: T
        }],
        12: [{
            x: 41.4,
            y: 7,
            dir: 4,
            U: 39.5,
            speed: T
        }, {
            x: 39.5,
            y: 7,
            dir: 1,
            U: 4,
            speed: T
        }]
    }, Od = {
        0: {
            Za: [{
                w: !1,
                x: 26,
                y: 9,
                id: 1
            }, {
                w: !1,
                x: 28,
                y: 9,
                id: 2
            }, {
                w: !1,
                x: 30,
                y: 9,
                id: 3
            }, {
                w: !1,
                x: 32,
                y: 9,
                id: 4
            }, {
                w: !1,
                x: 34,
                y: 9,
                id: 5
            }, {
                w: !1,
                x: 36,
                y: 9,
                id: 6
            }, {
                w: !1,
                x: 38,
                y: 9,
                id: 7
            }, {
                w: !1,
                x: 40,
                y: 9,
                id: 8
            }, {
                w: !1,
                x: 42,
                y: 9,
                id: 9
            }, {
                w: !1,
                x: 44,
                y: 9,
                id: 10
            }, {
                w: !1,
                x: 46,
                y: 9,
                id: 11
            }, {
                w: !1,
                x: 24,
                y: 9,
                id: 0
            }, {
                w: !1,
                x: 27,
                y: 21,
                id: 12
            }, {
                w: !1,
                x: 26,
                y: 18,
                id: 13
            }],
            sequence: [{
                time: .1,
                W: [{
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-dot"
                }, {
                    dir: 8,
                    speed: 1.6,
                    v: "pcm-bpcm"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-hidden"
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-fing"
                }]
            }, {
                time: .1,
                W: [{
                    dir: 0,
                    speed: 0,
                    v: "pcm-hidden"
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 8,
                    speed: 1.6
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }]
            }, {
                time: .1,
                W: [{
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-hidden"
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 8,
                    speed: 1.6
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }]
            }, {
                time: .1,
                W: [{
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-hidden"
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 8,
                    speed: 1.6
                }, {
                    dir: 1,
                    speed: .8 * 3
                }, {
                    dir: 1,
                    speed: .8 * 3
                }]
            }, {
                time: .1,
                W: [{
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-hidden"
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 8,
                    speed: 1.6
                }, {
                    dir: 1,
                    speed: .8 * 3
                }, {
                    dir: 1,
                    speed: .8 * 3
                }]
            }, {
                time: .1,
                W: [{
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-hidden"
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 8,
                    speed: 1.6
                }, {
                    dir: 1,
                    speed: .8 * 3
                }, {
                    dir: 1,
                    speed: .8 * 3
                }]
            }, {
                time: .1,
                W: [{
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-hidden"
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 8,
                    speed: 1.6
                }, {
                    dir: 1,
                    speed: .8 * 3
                }, {
                    dir: 1,
                    speed: .8 * 3
                }]
            }, {
                time: .1,
                W: [{
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-hidden"
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 8,
                    speed: 1.6
                }, {
                    dir: 4,
                    speed: .8 * 3,
                    v: "pcm-swipe"
                }, {
                    dir: 4,
                    speed: .8 * 3
                }]
            }, {
                time: .1,
                W: [{
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0,
                    v: "pcm-hidden"
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 8,
                    speed: 1.6
                }, {
                    dir: 4,
                    speed: .8 * 3
                }, {
                    dir: 4,
                    speed: .8 * 3
                }]
            }, {
                time: 1.5,
                W: [{
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 0,
                    speed: 0
                }, {
                    dir: 4,
                    speed: 1.6
                }, {
                    dir: 4,
                    speed: 3.2
                }, {
                    dir: 4,
                    speed: 3.2
                }]
            }]
        },
        1: {
            Za: [{
                w: !1,
                x: 64,
                y: 9,
                id: 0
            }, {
                w: !0,
                x: 68.2,
                y: 9,
                id: 1
            }],
            sequence: [{
                time: 5.5,
                W: [{
                    dir: 4,
                    speed: .8 * 1.5
                }, {
                    dir: 4,
                    speed: .8 * 1.56
                }]
            }, {
                time: .1,
                W: [{
                    dir: 4,
                    speed: 32
                }, {
                    dir: 4,
                    speed: 0
                }]
            }, {
                time: 9,
                W: [{
                    dir: 8,
                    speed: .8 * 1.5,
                    v: "pcm-bpcm"
                }, {
                    dir: 8,
                    speed: .8,
                    mode: 4
                }]
            }]
        },
        2: {
            Za: [{
                w: !0,
                x: 32,
                y: 9.5,
                id: 2
            }, {
                w: !1,
                x: 64,
                y: 9,
                id: 0
            }, {
                w: !0,
                x: 70.2,
                y: 9,
                id: 1
            }],
            sequence: [{
                time: 2.7,
                W: [{
                    dir: 0,
                    speed: 0,
                    v: "pcm-stck"
                }, {
                    dir: 4,
                    speed: .8 * 1.5
                }, {
                    dir: 4,
                    speed: .8 * 1.56
                }]
            }, {
                time: 1,
                W: [{
                    dir: 0,
                    speed: 0,
                    v: "pcm-stck"
                }, {
                    dir: 4,
                    speed: .8 * 1.5
                }, {
                    dir: 4,
                    speed: .1 * .8
                }]
            }, {
                time: 1.3,
                W: [{
                    dir: 0,
                    speed: 0,
                    v: "pcm-stck"
                }, {
                    dir: 4,
                    speed: .8 * 1.5
                }, {
                    dir: 4,
                    speed: 0
                }]
            }, {
                time: 1,
                W: [{
                    dir: 0,
                    speed: 0,
                    v: "pcm-stck"
                }, {
                    dir: 4,
                    speed: .8 * 1.5
                }, {
                    dir: 4,
                    speed: 0,
                    v: "pcm-ghfa"
                }]
            }, {
                time: 2.5,
                W: [{
                    dir: 0,
                    speed: 0,
                    v: "pcm-stck"
                }, {
                    dir: 4,
                    speed: .8 * 1.5
                }, {
                    dir: 4,
                    speed: 0,
                    v: "pcm-ghfa"
                }]
            }]
        },
        3: {
            Za: [{
                w: !1,
                x: 64,
                y: 9,
                id: 0
            }, {
                w: !0,
                x: 70.2,
                y: 9,
                id: 2
            }],
            sequence: [{
                time: 5.3,
                W: [{
                    dir: 4,
                    speed: .8 * 1.5
                }, {
                    dir: 4,
                    speed: .8 * 1.56,
                    v: "pcm-ghin"
                }]
            }, {
                time: 5.3,
                W: [{
                    dir: 4,
                    speed: 0
                }, {
                    dir: 8,
                    speed: .8 * 1.56,
                    v: "pcm-gbug"
                }]
            }]
        }
    }, Pd = 1E3 / 90, Qd = function(a) {
        this.id = a;
        this.v = null
    };
    Qd.prototype.draw = function() {
        var a = 4
          , b = 4
          , c = 16
          , d = 16;
        if ("pcm-bpcm" == this.v)
            c = d = 32,
            a = b = 20;
        else if ("pcm-fing" == this.v)
            c = 32,
            d = 148;
        else if ("pcm-dot" == this.v)
            a = b = c = d = 8;
        else if ("pcm-swipe" == this.v)
            c = 88,
            d = 34,
            a = 0,
            b = 20;
        else if ("pcm-hidden" == this.v)
            return;
        var e = this.vb[1]
          , f = this.vb[0];
        a = this.kb[1] + 10 - a;
        b = this.kb[0] + 40 - b;
        "pcm-bpcm" == this.v && 4 == this.dir ? (x.save(),
        x.translate(a + c / 2, b),
        x.scale(-1, 1),
        U(e, f, c, d, -c / 2, 0),
        x.restore()) : "pcm-swipe" == this.v ? (e = x.createLinearGradient(a, 0, a + c, 0),
        e.addColorStop(0, "rgba(104, 186, 253, 1)"),
        e.addColorStop(1, "rgba(104, 186, 253, 0)"),
        x.fillStyle = e,
        x.fillRect(a, b, c, d)) : U(e, f, c, d, a, b)
    }
    ;
    var W = function(a, b) {
        var c = a.mode;
        a.mode = b;
        a.id != y + 3 || 16 != b && 16 != c || Rd();
        switch (c) {
        case 32:
            pc = !1;
            break;
        case 8:
            0 < qc && qc--,
            0 == qc && V()
        }
        switch (b) {
        case 4:
            a.nb = .8 * z.Ga;
            a.tb = .8 * z.ta;
            a.$ = !1;
            break;
        case 1:
            a.nb = .8 * z.ra;
            a.tb = .8 * z.ta;
            a.$ = !1;
            break;
        case 2:
            a.j = a.rb;
            a.nb = .8 * z.ra;
            a.tb = .8 * z.ta;
            a.$ = !1;
            break;
        case 8:
            a.nb = 1.6;
            a.tb = 1.6;
            a.j = [Jd[0], Jd[1]];
            a.$ = !1;
            a.Ta = !1;
            break;
        case 16:
            Sd(a);
            a.$ = !0;
            a.T = -1;
            switch (a.id) {
            case y + 1:
                a.H = 2;
                break;
            case y + 2:
                a.H = 1;
                break;
            case y + 3:
                a.H = 3
            }
            break;
        case 32:
            a.$ = !0;
            a.T = -1;
            switch (a.id) {
            case y + 1:
                a.H = 5;
                break;
            case y + 2:
                a.H = 4;
                break;
            case y + 3:
                a.H = 6
            }
            pc = !0;
            break;
        case 64:
            a.$ = !0;
            a.T = -1;
            switch (a.id) {
            case y:
            case y + 1:
                a.H = 8;
                break;
            case y + 2:
                a.H = 7;
                break;
            case y + 3:
                a.H = 9
            }
            break;
        case 128:
            switch (a.$ = !0,
            a.T = -1,
            a.id) {
            case y:
            case y + 1:
                a.H = 11;
                break;
            case y + 2:
                a.H = 10;
                break;
            case y + 3:
                a.H = 12
            }
        }
        Td(a)
    }
      , Sd = function(a) {
        a.id >= y && (a.wb = Math.floor(Ud() * y))
    }
      , Wd = function(a, b) {
        var c = a.R
          , d = R[a.dir]
          , e = [c[0], c[1]];
        e[d.axis] += 8 * d.Ma;
        var f = B[e[0]][e[1]];
        b && !f.intersection && (f = B[c[0]][c[1]]);
        if (f.intersection)
            switch (a.mode) {
            case 2:
            case 1:
            case 8:
                if (0 == (a.dir & f.Ja) && f.Ja == A[a.dir])
                    a.i = A[a.dir];
                else {
                    c = 99999999999;
                    for (var l = 0, q = 0; q < Dd.length; q++) {
                        var Ma = Dd[q];
                        if (f.Ja & Ma && a.dir != A[Ma]) {
                            d = R[Ma];
                            var Mb = [e[0], e[1]];
                            Mb[d.axis] += d.Ma;
                            d = Vd(Mb, [a.j[0], a.j[1]]);
                            d < c && (c = d,
                            l = Ma)
                        }
                    }
                    l && (a.i = l)
                }
                break;
            case 4:
                if (0 == (a.dir & f.Ja) && f.Ja == A[a.dir])
                    a.i = A[a.dir];
                else {
                    do
                        e = Dd[Math.floor(4 * Ud())];
                    while (0 == (e & f.Ja) || e == A[a.dir]);a.i = e
                }
            }
    }
      , Zd = function(a) {
        if (-1 == a.T || a.Ya)
            a: {
                a.T++;
                if (a.T == Nd[a.H].length) {
                    if (16 == a.mode && a.Ta && !pc) {
                        a.mb ? W(a, 128) : W(a, 32);
                        break a
                    }
                    if (32 == a.mode || 128 == a.mode) {
                        a.o = [Jd[0], Jd[1] + 4];
                        a.dir = a.Db ? 8 : 4;
                        var b = E;
                        128 == a.mode && 4 == b && (b = uc);
                        W(a, b);
                        break a
                    }
                    if (64 == a.mode) {
                        a.id == y || a.Ta ? W(a, 128) : (a.mb = !0,
                        W(a, 16));
                        break a
                    }
                    a.T = 0
                }
                b = Nd[a.H][a.T];
                a.o[0] = 8 * b.y;
                a.o[1] = 8 * b.x;
                a.dir = b.dir;
                a.Sa = 0;
                a.$a = Xd(b.speed);
                a.Ya = !1;
                Yd(a)
            }
        if ((b = Nd[a.H][a.T]) && a.$a[vc]) {
            var c = R[a.dir];
            a.o[c.axis] += c.Ma;
            switch (a.dir) {
            case 1:
            case 4:
                a.o[c.axis] < 8 * b.U && (a.o[c.axis] = 8 * b.U,
                a.Ya = !0);
                break;
            case 2:
            case 8:
                a.o[c.axis] > 8 * b.U && (a.o[c.axis] = 8 * b.U,
                a.Ya = !0)
            }
            Yd(a)
        }
    }
      , Td = function(a) {
        switch (a.lb) {
        case 0:
            var b = a.id != y || 2 != a.mode && 1 != a.mode ? a.nb : wc;
            break;
        case 1:
            b = a.ka;
            break;
        case 2:
            b = a.tb
        }
        a.Sa != b && (a.Sa = b,
        a.$a = Xd(a.Sa))
    }
      , $d = function(a, b) {
        a.lb = b;
        Td(a)
    }
      , de = function(a) {
        if (a.dir && a.$a[vc]) {
            var b = R[a.dir];
            a.o[b.axis] += b.Ma;
            var c = a.o[0] / 8
              , d = a.o[1] / 8;
            b = [8 * Math.round(c), 8 * Math.round(d)];
            if (b[0] != a.R[0] || b[1] != a.R[1]) {
                sc = !0;
                a.yb && (a.dir = A[a.dir],
                a.i = 0,
                a.yb = !1,
                Wd(a, !0));
                a.w || B[b[0]][b[1]].path ? a.Oa = [b[0], b[1]] : (a.o[0] = a.Oa[0],
                a.o[1] = a.Oa[1],
                b[0] = a.Oa[0],
                b[1] = a.Oa[1],
                a.dir = 0);
                1 == B[b[0]][b[1]].type && 8 != a.mode ? $d(a, 2) : $d(a, 0);
                if (!a.w && B[b[0]][b[1]].Pa) {
                    c = a.id;
                    C--;
                    Fc++;
                    $d(D[c], 1);
                    ae(c);
                    2 == B[b[0]][b[1]].Pa ? (be(4, !1),
                    ce(50, c)) : ce(10, c);
                    B[b[0]][b[1]].Pa = 0;
                    Rd();
                    jd = 90 * z.va;
                    if (fd)
                        switch (gd++,
                        gd) {
                        case Ed[1]:
                            D[y + 1].Ta = !0;
                            break;
                        case Ed[2]:
                            D[y + 2].Ta = !0;
                            break;
                        case Ed[3]:
                            16 == D[y + 3].mode && (fd = !1)
                        }
                    else if (16 == D[y + 1].mode || 8 == D[y + 1].mode)
                        D[y + 1].hb++,
                        D[y + 1].hb >= z.wa[1] && (D[y + 1].Ta = !0);
                    else if (16 == D[y + 2].mode || 8 == D[y + 2].mode)
                        D[y + 2].hb++,
                        D[y + 2].hb >= z.wa[2] && (D[y + 2].Ta = !0);
                    else if (16 == D[y + 3].mode || 8 == D[y + 3].mode)
                        D[y + 3].hb++,
                        D[y + 3].hb >= z.wa[3] && (D[y + 3].Ta = !0);
                    if (70 == Fc || 170 == Fc)
                        kd = !0,
                        Sc = H[15] + (H[16] - H[15]) * Ud();
                    0 == C && X(9);
                    V()
                }
                a.R[0] = b[0];
                a.R[1] = b[1]
            } else
                c = [8 * Math.floor(c), 8 * Math.floor(d)],
                a.o[1] == c[1] && a.o[0] == c[0] && (a.o[0] == 8 * Hd[0].y && a.o[1] == 8 * Hd[0].x ? (a.o[0] = 8 * Hd[1].y,
                a.o[1] = 8 * (Hd[1].x - 1)) : a.o[0] == 8 * Hd[1].y && a.o[1] == 8 * Hd[1].x && (a.o[0] = 8 * Hd[0].y,
                a.o[1] = 8 * (Hd[0].x + 1)),
                8 == a.mode && a.o[0] == Jd[0] && a.o[1] == Jd[1] && W(a, 64),
                a.w || a.o[0] != Kd[0] || a.o[1] != Kd[1] && a.o[1] != Kd[1] + 8 || (c = a.id,
                kd && (Y("fruit"),
                kd = !1,
                ld = !0,
                Sc = H[14],
                ce(z.Fa, c))),
                a.w && Wd(a, !1),
                c = B[a.o[0]][a.o[1]],
                c.intersection && (a.i && a.i & c.Ja ? (0 != a.dir && (a.Ka = a.dir),
                a.dir = a.i,
                a.i = 0,
                a.w || (a.o[0] += a.Qa[0],
                a.o[1] += a.Qa[1],
                a.Qa = [0, 0])) : 0 == (a.dir & c.Ja) && (0 != a.dir && (a.Ka = a.dir),
                a.dir = 0,
                a.i = 0,
                $d(a, 0))));
            if (!a.w && a.i && B[b[0]][b[1]].intersection && a.i & B[b[0]][b[1]].Ja) {
                b = a.R;
                switch (a.dir) {
                case 1:
                    var e = [b[0], b[1]]
                      , f = [b[0] + 3.6, b[1]];
                    break;
                case 2:
                    e = [b[0] - 4, b[1]];
                    f = [b[0], b[1]];
                    break;
                case 4:
                    e = [b[0], b[1]];
                    f = [b[0], b[1] + 3.6];
                    break;
                case 8:
                    e = [b[0], b[1] - 4],
                    f = [b[0], b[1]]
                }
                a.o[0] >= e[0] && a.o[0] <= f[0] && a.o[1] >= e[1] && a.o[1] <= f[1] && (e = R[a.i],
                a.Qa[e.axis] += e.Ma)
            }
            Yd(a)
        }
    };
    Qd.prototype.move = function() {
        if (0 == F || this.w && 1 == F && (8 == this.mode || 64 == this.mode)) {
            if (0 != this.Na) {
                a: {
                    var a = this.Na;
                    rc || (google.doodle.pacManSound = !0,
                    ee());
                    if (this.dir == A[a])
                        this.dir = a,
                        this.Qa = [0, 0],
                        2 != this.lb && $d(this, 0),
                        0 != this.dir && (this.Ka = this.dir),
                        this.i = 0;
                    else if (this.dir != a)
                        if (0 == this.dir)
                            B[this.o[0]][this.o[1]].Ja & a && (this.dir = a);
                        else {
                            var b = B[this.R[0]][this.R[1]];
                            if (b && b.Ja & a) {
                                b = R[this.dir];
                                var c = [this.o[0], this.o[1]];
                                c[b.axis] -= b.Ma;
                                var d = 0;
                                c[0] == this.R[0] && c[1] == this.R[1] ? d = 1 : (c[b.axis] -= b.Ma,
                                c[0] == this.R[0] && c[1] == this.R[1] && (d = 2));
                                if (d) {
                                    this.dir = a;
                                    this.o[0] = this.R[0];
                                    this.o[1] = this.R[1];
                                    b = R[this.dir];
                                    this.o[b.axis] += b.Ma * d;
                                    break a
                                }
                            }
                            this.i = a;
                            this.Qa = [0, 0]
                        }
                }
                this.Na = 0
            }
            this.$ ? (Zd(this),
            64 == this.mode && Zd(this)) : (de(this),
            8 == this.mode && de(this))
        }
    }
    ;
    var fe = function(a) {
        a.kb = [a.o[0] + a.Qa[0] + 0, a.o[1] + a.Qa[1] + -32]
    }
      , Yd = function(a) {
        fe(a);
        if (8 == F || 14 == F)
            var b = [0, 3];
        else if (a.w) {
            b = 0;
            if (10 == F || 4 == F || 3 == F) {
                b = 3;
                var c = 0
            } else if (1 == F && a.id == zc) {
                switch (Ac) {
                case 2:
                    b = 0;
                    break;
                case 4:
                    b = 1;
                    break;
                case 8:
                    b = 2;
                    break;
                case 16:
                    b = 3
                }
                c = 11
            } else if (4 != a.mode && (16 != a.mode && 32 != a.mode || 4 != E || a.mb))
                if (8 == a.mode || 64 == a.mode) {
                    c = a.i;
                    c || (c = a.dir);
                    switch (c) {
                    case 4:
                        b = 2;
                        break;
                    case 8:
                        b = 3;
                        break;
                    case 1:
                        b = 0;
                        break;
                    case 2:
                        b = 1
                    }
                    c = 10
                } else if ("pcm-ghin" == a.v)
                    c = 8,
                    b = 6 + Math.floor(I / 16) % 2;
                else if ("pcm-gbug" == a.v)
                    b = 6,
                    c = 9 + Math.floor(I / 16) % 2;
                else if ("pcm-ghfa" == a.v)
                    b = 3 == K ? 6 : 7,
                    c = 11;
                else if ("pcm-stck" == a.v)
                    b = 1 == K ? 60 < Bc ? 1 : 45 < Bc ? 2 : 3 : 2 == K ? 3 : 3 == K || 4 == K ? 4 : 0,
                    c = 13;
                else {
                    c = a.i;
                    c && 1 != B[a.R[0]][a.R[1]].type || (c = a.dir);
                    switch (c) {
                    case 4:
                        b = 4;
                        break;
                    case 8:
                        b = 6;
                        break;
                    case 1:
                        b = 0;
                        break;
                    case 2:
                        b = 2
                    }
                    c = 4 + a.id - y;
                    if (0 < a.speed || 13 != F)
                        b += Math.floor(I / 16) % 2
                }
            else
                b = 0,
                c = 8,
                J < z.Bb - z.V && 0 == Math.floor(J / H[1]) % 2 && (b += 2),
                b += Math.floor(I / 16) % 2;
            b = [c, b]
        } else {
            c = b = 0;
            var d = a.dir;
            0 == d && (d = a.Ka);
            if (1 == F && a.id == xc)
                b = 3,
                c = 0;
            else if (9 != F && 10 != F || 0 != a.id)
                if (4 == F || 5 == F || 7 == F)
                    b = 0 == a.id ? 2 : 4,
                    c = 0;
                else if (3 == F)
                    if (a.id == yc)
                        if (d = 20 - Math.floor(G / H[4] * 21),
                        0 == a.id) {
                            b = d - 1;
                            switch (b) {
                            case -1:
                                b = 0;
                                break;
                            case 11:
                                b = 10;
                                break;
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                                b = 11
                            }
                            c = 12
                        } else
                            switch (d) {
                            case 0:
                            case 1:
                            case 2:
                            case 6:
                            case 10:
                                b = 4;
                                c = 3;
                                break;
                            case 3:
                            case 7:
                            case 11:
                                b = 4;
                                c = 0;
                                break;
                            case 4:
                            case 8:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                                b = 4;
                                c = 2;
                                break;
                            case 5:
                            case 9:
                                b = 4,
                                c = 1
                            }
                    else
                        b = 3,
                        c = 0;
                else if ("pcm-bpcm" == a.v)
                    b = 14,
                    c = Math.floor(.2 * I) % 4,
                    3 == c && (c = 1),
                    c *= 2;
                else if ("pcm-fing" == a.v)
                    b = 14,
                    c = 6;
                else if ("pcm-dot" == a.v)
                    b = 0,
                    c = 9;
                else if ("pcm-hidden" == a.v)
                    c = b = 0;
                else {
                    switch (d) {
                    case 4:
                        c = 0;
                        break;
                    case 8:
                        c = 1;
                        break;
                    case 1:
                        c = 2;
                        break;
                    case 2:
                        c = 3
                    }
                    2 != F && (b = Math.floor(.3 * I) % 4);
                    3 == b && 0 == a.dir && (b = 0);
                    2 == b && 0 == a.id && (b = 0);
                    3 == b && (b = 2,
                    0 == a.id && (c = 0));
                    1 == a.id && (b += 4)
                }
            else
                b = 2,
                c = 0;
            b = [c, b]
        }
        b[0] *= 16;
        b[1] *= 16;
        a.vb = [b[0] / 8 * 10 + 2, b[1] / 8 * 10 + 2]
    }
      , Ud = function() {
        return (Cc = (134775813 * Cc + 1) % 4294967296) / 4294967296
    }
      , Vd = function(a, b) {
        return Math.sqrt((b[1] - a[1]) * (b[1] - a[1]) + (b[0] - a[0]) * (b[0] - a[0]))
    }
      , ge = function() {
        D = [];
        for (var a = 0; a < y + 4; a++)
            D[a] = new Qd(a),
            a < y ? (D[a].w = !1,
            D[a].mode = 1) : D[a].w = !0
    }
      , ie = function(a) {
        nc(Gc);
        a || (a = window.event);
        27 == a.which && he();
        var b = !1;
        switch (a.keyCode) {
        case 37:
            D[0].Na = 4;
            b = !0;
            break;
        case 38:
            D[0].Na = 1;
            b = !0;
            break;
        case 39:
            D[0].Na = 8;
            b = !0;
            break;
        case 40:
            D[0].Na = 2;
            b = !0;
            break;
        case 65:
            2 == y && (D[1].Na = 4,
            b = !0);
            break;
        case 83:
            2 == y && (D[1].Na = 2,
            b = !0);
            break;
        case 68:
            2 == y && (D[1].Na = 8,
            b = !0);
            break;
        case 87:
            2 == y && (D[1].Na = 1,
            b = !0)
        }
        b && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    }
      , he = function() {
        for (var a = window; a.postMessage("lightbox-exit", "*"),
        a !== a.parent; )
            a = a.parent
    }
      , je = function(a, b) {
        var c = L
          , d = [0, 0];
        do
            d[0] += c.offsetTop,
            d[1] += c.offsetLeft;
        while (c = c.offsetParent);a -= d[1] - -32;
        b -= d[0] - 0;
        c = D[0];
        d = c.o[1] + c.Qa[1] + -32 + 16;
        var e = c.o[0] + c.Qa[0] + 0 + 32
          , f = Math.abs(a - d)
          , l = Math.abs(b - e);
        8 < f && l < f ? c.Na = a > d ? 8 : 4 : 8 < l && f < l && (c.Na = b > e ? 2 : 1)
    }
      , ke = function(a) {
        nc(Gc);
        a || (a = window.event);
        je(a.clientX, a.clientY)
    }
      , ne = function(a) {
        nc(Gc);
        Ic = Hc = 0;
        1 == a.touches.length && (Jc = a.touches[0].pageX,
        Kc = a.touches[0].pageY,
        document.addEventListener("touchmove", le, !0),
        document.addEventListener("touchend", me, !0));
        a.preventDefault();
        a.stopPropagation()
    }
      , le = function(a) {
        nc(Gc);
        1 < a.touches.length ? oe() : (Hc = a.touches[0].pageX - Jc,
        Ic = a.touches[0].pageY - Kc);
        a.preventDefault();
        a.stopPropagation()
    }
      , me = function(a) {
        nc(Gc);
        if (0 == Hc && 0 == Ic)
            je(Jc, Kc);
        else {
            var b = Math.abs(Hc)
              , c = Math.abs(Ic);
            8 > b && 8 > c ? je(Jc, Kc) : 15 < b && c < 2 * b / 3 ? D[0].Na = 0 < Hc ? 8 : 4 : 15 < c && b < 2 * c / 3 && (D[0].Na = 0 < Ic ? 2 : 1);
            Lc || (Lc = !0,
            Mc && 0 == Nc && (pe(),
            ae(0)))
        }
        a.preventDefault();
        a.stopPropagation();
        oe()
    }
      , oe = function() {
        document.removeEventListener("touchmove", le, !0);
        document.removeEventListener("touchend", me, !0);
        Kc = Jc = null
    }
      , re = function() {
        Oc = [0, 0];
        Pc = [!1, !1];
        Qc = 3;
        M = 0;
        Rc = !1;
        I = 0;
        qe(!0)
    }
      , se = function(a) {
        Tc = Sc = G = vc = J = Cc = 0;
        Uc = 90 * z.ma[0];
        pc = !1;
        qc = 0;
        sc = !1;
        Rd();
        ld = kd = !1;
        jd = 90 * z.va;
        for (var b = 0; b < D.length; b++) {
            var c = D[b]
              , d = Id[y][c.id];
            c.o = [8 * d.y, 8 * d.x];
            c.Qa = [0, 0];
            c.R = [8 * d.y, 8 * d.x];
            c.j = [8 * d.Wa, 8 * d.Va];
            c.rb = [8 * d.Wa, 8 * d.Va];
            c.dir = d.dir;
            c.Ka = c.dir;
            c.i = 0;
            c.Na = 0;
            c.Sa = 0;
            $d(c, 0);
            c.mb = !1;
            c.Db = !1;
            c.Ta = !1;
            c.yb = !1;
            Sd(c)
        }
        for (b = 0; b < D.length; b++)
            fe(D[b]);
        be(2, !0);
        for (b = y + 1; b < y + 4; b++)
            W(D[b], 16);
        Vc = [1, 1];
        sd = [!1, !1];
        td = [!1, !1];
        a ? X(4) : X(6)
    }
      , te = function() {
        y = 1;
        rd = 1 == y ? 10 : 5;
        ge();
        Mc = Wc = !1;
        Yc = Xc = N = !0;
        $c = Zc = !1;
        bd = ad = !0;
        cd = !1;
        re()
    }
      , qe = function(a) {
        M++;
        ue("L" + M);
        z = M >= Md.length ? Md[Md.length - 1] : Md[M];
        z.Zb || (z.V = Math.round(90 * z.V),
        z.Bb = z.V + H[1] * (2 * z.Ea - 1),
        z.Zb = !0);
        for (var b = 0; b < D.length; b++)
            D[b].hb = 0;
        tc = fd = !1;
        for (b = Ec = Dc = Fc = C = 0; b < Fd.length; b++) {
            var c = Fd[b];
            c.S ? (c = c.x + c.S - 1,
            c > Dc && (Dc = c)) : (c = c.y + c.h - 1,
            c > Ec && (Ec = c))
        }
        B = [];
        for (b = 0; b <= Ec + 1; b++)
            for (B[8 * b] = [],
            c = -2; c <= Dc + 1; c++)
                B[8 * b][8 * c] = {
                    path: 0,
                    Pa: 0,
                    intersection: 0
                };
        for (b = 0; b < Fd.length; b++) {
            c = Fd[b];
            var d = c.type;
            if (c.S) {
                for (var e = 8 * c.y, f = 8 * c.x; f <= 8 * (c.x + c.S - 1); f += 8)
                    B[e][f].path = !0,
                    0 == B[e][f].Pa && (B[e][f].Pa = 1,
                    C++),
                    !d || f != 8 * c.x && f != 8 * (c.x + c.S - 1) ? B[e][f].type = d : B[e][f].type = 0;
                B[e][8 * c.x].intersection = !0;
                B[e][8 * (c.x + c.S - 1)].intersection = !0
            } else {
                f = 8 * c.x;
                for (e = 8 * c.y; e <= 8 * (c.y + c.h - 1); e += 8)
                    B[e][f].path && (B[e][f].intersection = !0),
                    B[e][f].path = !0,
                    0 == B[e][f].Pa && (B[e][f].Pa = 1,
                    C++),
                    !d || e != 8 * c.y && e != 8 * (c.y + c.h - 1) ? B[e][f].type = d : B[e][f].type = 0;
                B[8 * c.y][f].intersection = !0;
                B[8 * (c.y + c.h - 1)][f].intersection = !0
            }
        }
        for (b = 0; b < S.length; b++)
            if (S[b].S)
                for (f = 8 * S[b].x; f <= 8 * (S[b].x + S[b].S - 1); f += 8)
                    B[8 * S[b].y][f].Pa = 0,
                    C--;
            else
                for (e = 8 * S[b].y; e <= 8 * (S[b].y + S[b].h - 1); e += 8)
                    B[e][8 * S[b].x].Pa = 0,
                    C--;
        for (b = 8; b <= 8 * Ec; b += 8)
            for (c = 8; c <= 8 * Dc; c += 8)
                B[b][c].Ja = 0,
                B[b - 8][c].path && (B[b][c].Ja += 1),
                B[b + 8][c].path && (B[b][c].Ja += 2),
                B[b][c - 8].path && (B[b][c].Ja += 4),
                B[b][c + 8].path && (B[b][c].Ja += 8);
        for (b = 0; b < Gd.length; b++)
            c = Gd[b],
            B[8 * c.y][8 * c.x].Pa = 2;
        se(a);
        256 == M && (ue("K"),
        Wc = N = !0,
        X(14))
    }
      , be = function(a, b) {
        if (4 == a && 0 == z.V)
            for (var c = 0; c < D.length; c++) {
                var d = D[c];
                d.w && (d.yb = !0)
            }
        else {
            c = E;
            4 == a && 4 != E && (uc = E);
            E = a;
            4 != a && 4 != c || V();
            switch (a) {
            case 1:
            case 2:
                hd = .8 * z.Ia;
                id = .8 * z.ka;
                break;
            case 4:
                hd = .8 * z.Ha,
                id = .8 * z.Aa,
                J = z.Bb,
                Ac = 1
            }
            for (c = 0; c < D.length; c++)
                if (d = D[c],
                d.w) {
                    if (64 == a || b || (d.Db = !0),
                    4 == a && (d.mb = !1),
                    8 != d.mode && 16 != d.mode && 32 != d.mode && 128 != d.mode && 64 != d.mode || b)
                        b || 4 == d.mode || d.mode == a || (d.yb = !0),
                        W(d, a)
                } else
                    d.nb = hd,
                    d.ka = id,
                    d.tb = hd,
                    Td(d)
        }
    }
      , ve = function(a) {
        return [4 >= a ? 128 : 160, 128 + (a - 1) % 4 * 16]
    }
      , Rd = function() {
        var a = .8 * z.ra;
        if (!tc || 16 != D[y + 3].mode) {
            var b = z;
            C < b.Ba ? a = .8 * b.Da : C < b.ya && (a = .8 * b.Ca)
        }
        a != wc && (wc = a,
        Td(D[y]))
    }
      , Xd = function(a) {
        if (!md[a]) {
            var b = 0
              , c = 0;
            md[a] = [];
            for (var d = 0; 90 > d; d++)
                b += a,
                Math.floor(b) > c ? (md[a].push(!0),
                c = Math.floor(b)) : md[a].push(!1)
        }
        return md[a]
    }
      , X = function(a) {
        F = a;
        if (13 != a)
            for (var b = 0; b < y + 4; b++)
                Yd(D[b]);
        switch (a) {
        case 0:
            V();
            break;
        case 2:
            Z();
            G = H[3];
            break;
        case 3:
            0 == yc ? Y("death") : Y("death-double");
            G = H[4];
            break;
        case 6:
            N = !1;
            G = H[5];
            break;
        case 7:
            Z();
            Zc = Yc = N = !0;
            G = H[6];
            break;
        case 4:
            Zc = Yc = !0;
            G = H[7];
            Z();
            2 == y ? Y("start-music-double") : Y("start-music");
            break;
        case 5:
            Qc--;
            G = H[8];
            break;
        case 8:
        case 14:
            Zc = !1;
            Z();
            $c = !0;
            G = H[9];
            break;
        case 9:
            Z();
            G = H[10];
            break;
        case 10:
            Yc = !1;
            G = H[11];
            break;
        case 11:
            N = !1;
            G = H[12];
            break;
        case 12:
            Xc = !1;
            G = H[13];
            break;
        case 1:
            G = H[2];
            break;
        case 13:
            Mc = !0;
            N = !1;
            nd = Od[Nc];
            K = -1;
            J = z.Bb;
            od = [];
            for (var c in nd.Za)
                a = nd.Za[c].id,
                0 < a && (a += y - 1),
                a = new Qd(a),
                a.o = [8 * nd.Za[c].y, 8 * nd.Za[c].x],
                a.Qa = [0, 0],
                a.w = nd.Za[c].w,
                od.push(a);
            we();
            Z();
            V()
        }
    }
      , xe = function(a) {
        a = window.event || a;
        a.cancelBubble = !0;
        google.doodle.pacManSound ? (rc = !0,
        Z(),
        google.doodle.pacManSound = !1) : (rc = !1,
        google.doodle.pacManSound = !0,
        V());
        var b = !rc;
        window.localStorage && window.localStorage.setItem("doodle-pacman-audio", b ? "true" : "false");
        ee();
        return a.returnValue = !1
    }
      , ee = function() {
        O && (O.style.backgroundPosition = google.doodle.pacManSound ? "-216px -105px" : "-236px -105px")
    }
      , pe = function() {
        Mc = !1;
        N = !0;
        0 == Nc ? Lc ? qe(!0) : (Nc = 0,
        X(13)) : qe(!1)
    }
      , we = function() {
        K++;
        if (nd.sequence.length == K)
            pe();
        else {
            var a = nd.sequence[K];
            Bc = 90 * a.time;
            for (var b = 0; b < od.length; b++) {
                var c = od[b];
                c.dir = a.W[b].dir;
                c.speed = a.W[b].speed;
                a.W[b].v && (c.v = a.W[b].v);
                a.W[b].mode && (c.mode = a.W[b].mode);
                Yd(c)
            }
        }
    }
      , ye = function() {
        13 != F && (0 == I % (2 * H[17]) ? bd = !0 : I % (2 * H[17]) == H[17] && (bd = !1))
    }
      , ze = !1
      , Ae = !1
      , Be = function() {
        Ae ? ze = !1 : (ze = !0,
        Fa(Be));
        var a = (new Date).getTime();
        P += a - pd - Pd;
        100 < P ? P = 100 : -100 > P && (P = -100);
        var b = 0;
        P > Pd ? (b = Math.floor(P / Pd),
        P -= Pd * b) : P < -Pd && (b = Math.ceil(P / Pd),
        P -= Pd * b);
        b = 1 + b;
        pd = a;
        if (13 == F) {
            for (a = 0; a < b; a++) {
                for (var c = 0; c < od.length; c++) {
                    var d = od[c]
                      , e = R[d.dir];
                    d.o[e.axis] += e.Ma * d.speed;
                    Yd(d)
                }
                Bc--;
                vc = (vc + 1) % 90;
                I++
            }
            0 >= Bc && we();
            ye()
        } else
            for (a = 0; a < b; a++) {
                for (c = 0; c < D.length; c++)
                    D[c].move();
                if (0 == F && sc) {
                    a: for (sc = !1,
                    d = y; d < y + 4; d++)
                        for (c = 0; c < y; c++)
                            if (D[d].R[0] == D[c].R[0] && D[d].R[1] == D[c].R[1]) {
                                if (4 == D[d].mode) {
                                    Y("eating-ghost");
                                    ce(200 * Ac, c);
                                    Ac *= 2;
                                    zc = d;
                                    xc = c;
                                    X(1);
                                    break a
                                }
                                8 != D[d].mode && 16 != D[d].mode && 32 != D[d].mode && 128 != D[d].mode && 64 != D[d].mode && (yc = c,
                                X(2))
                            }
                    for (c = y; c < y + 4; c++)
                        if (d = D[c],
                        d.id == y && C < z.ya && 2 == d.mode && (!tc || 16 != D[y + 3].mode))
                            e = D[d.wb],
                            d.j = [e.R[0], e.R[1]];
                        else if (d.w && 1 == d.mode)
                            switch (e = D[d.wb],
                            d.id) {
                            case y:
                                d.j = [e.R[0], e.R[1]];
                                break;
                            case y + 1:
                                d.j = [e.R[0], e.R[1]];
                                var f = R[e.dir];
                                d.j[f.axis] += 32 * f.Ma;
                                1 == e.dir && (d.j[1] -= 32);
                                break;
                            case y + 2:
                                var l = D[y]
                                  , q = [e.R[0], e.R[1]];
                                f = R[e.dir];
                                q[f.axis] += 16 * f.Ma;
                                1 == e.dir && (q[1] -= 16);
                                d.j[0] = 2 * q[0] - l.R[0];
                                d.j[1] = 2 * q[1] - l.R[1];
                                break;
                            case y + 3:
                                64 < Vd(e.R, d.R) ? d.j = [e.R[0], e.R[1]] : d.j = d.rb
                            }
                }
                I++;
                vc = (vc + 1) % 90;
                switch (F) {
                case 4:
                case 5:
                case 6:
                case 7:
                case 9:
                case 10:
                case 11:
                case 12:
                    ad = !0;
                    break;
                case 8:
                case 14:
                    ad = !1;
                    break;
                default:
                    0 == I % (2 * H[0]) ? ad = !0 : I % (2 * H[0]) == H[0] && (ad = !1)
                }
                ye();
                if (0 == F) {
                    if (jd && (jd--,
                    0 >= jd)) {
                        for (c = 1; 3 >= c; c++)
                            if (16 == D[y + c].mode) {
                                D[y + c].Ta = !0;
                                break
                            }
                        jd = 90 * z.va
                    }
                    Sc && (Sc--,
                    0 >= Sc && (ld = kd = !1));
                    if (J)
                        J--,
                        0 >= J && (J = 0,
                        be(uc, !1));
                    else if (0 < Uc && (Uc--,
                    0 >= Uc && (Uc = 0,
                    Tc++,
                    z.ma[Tc])))
                        switch (Uc = 90 * z.ma[Tc],
                        E) {
                        case 2:
                            be(1, !1);
                            break;
                        case 1:
                            be(2, !1)
                        }
                }
                if (G) {
                    G--;
                    switch (F) {
                    case 2:
                    case 3:
                        for (c = 0; c < y + 4; c++)
                            Yd(D[c]);
                        break;
                    case 10:
                        cd = 0 == Math.floor(G / (H[11] / 8)) % 2 ? !1 : !0
                    }
                    if (0 >= G)
                        switch (G = 0,
                        F) {
                        case 1:
                            X(0);
                            qc++;
                            V();
                            W(D[zc], 8);
                            d = !1;
                            for (c = y; c < y + 4; c++)
                                if (4 == D[c].mode || (16 == D[c].mode || 128 == D[c].mode) && !D[c].mb) {
                                    d = !0;
                                    break
                                }
                            d || be(uc, !1);
                            break;
                        case 2:
                            X(3);
                            break;
                        case 3:
                            fd = tc = !0;
                            gd = 0;
                            Qc--;
                            -1 == Qc ? (ue("G"),
                            X(8)) : se(!1);
                            break;
                        case 4:
                            X(5);
                            break;
                        case 6:
                            X(7);
                            break;
                        case 7:
                        case 5:
                            Zc = !1;
                            X(0);
                            break;
                        case 8:
                            $c = !1;
                            he();
                            google.doodle.pacManQuery && google.doodle.pacManQuery();
                            break;
                        case 9:
                            X(10);
                            break;
                        case 10:
                            X(11);
                            break;
                        case 11:
                            z.ab ? (Nc = z.ab,
                            X(13)) : (N = !0,
                            qe(!1));
                            break;
                        case 12:
                            N = Xc = !0,
                            y = 2,
                            rd = 1 == y ? 10 : 5,
                            ge(),
                            re()
                        }
                }
            }
        b = x;
        b.fillStyle = "black";
        b.fillRect(0, 0, 484, 208);
        if (Mc) {
            b.save();
            b.beginPath();
            b.rect(10, 40, 464, 136);
            b.clip();
            for (a = 0; a < od.length; a++)
                od[a].draw(b);
            b.restore();
            Ce()
        }
        if (N) {
            if (Xc) {
                U(322, cd ? 138 : 2, 464, 136, 10, 40);
                b.fillStyle = "#f8b090";
                b.beginPath();
                for (d = 8; d <= 8 * Ec; d += 8)
                    for (e = 8; e <= 8 * Dc; e += 8)
                        1 == B[d][e].Pa && b.rect(e + -32 + 10 + 3, d + 0 + 40 + 3, 2, 2);
                b.fill();
                if (ad)
                    for (d = 8; d <= 8 * Ec; d += 8)
                        for (e = 8; e <= 8 * Dc; e += 8)
                            2 == B[d][e].Pa && (a = e + -32 + 10,
                            c = d + 0 + 40,
                            U(2, 182, 8, 8, a, c));
                Yc && (b.fillStyle = "#ffaaa5",
                b.fillRect(289, 86, 19, 2));
                if (kd || ld)
                    a = ld ? [128, 16 * (z.ha - 1)] : ve(z.ha),
                    d = a[0] / 8 * 10 + 2,
                    e = a[1] / 8 * 10 + 2,
                    a = Kd[1] + -32 + 10 - 8,
                    c = Kd[0] + 0 + 40 - 4,
                    U(d, e, 32, 16, a, c);
                if (1 == F) {
                    for (a = 0; a < D.length; a++)
                        a != zc && D[a].draw(b);
                    D[zc].draw(b)
                } else
                    for (a = 0; a < D.length; a++)
                        D[a].draw(b)
            }
            bd && (U(202, 72, 48, 8, -2, 8),
            2 == y && U(202, 82, 48, 8, 62, 8));
            De(0);
            2 == y && De(1);
            if (Wc) {
                b.save();
                b.beginPath();
                b.rect(10, 40, 464, 136);
                b.clip();
                Cc = 0;
                b.fillStyle = "black";
                b.fillRect(282, 40, 200, 80);
                b.fillRect(290, 120, 192, 56);
                dd = 80;
                ed = 0;
                for (a = 280; 472 >= a; a += 8)
                    for (c = 0; 136 >= c; c += 8)
                        .03 > Ud() && (dd = 10 * Math.floor(25 * Ud()),
                        ed = 10 * Math.floor(2 * Ud())),
                        U(dd, ed, 8, 8, a + 10, c + 40),
                        ed += 8;
                b.restore()
            }
            Ce();
            for (a = 0; a < Qc; a++)
                U(82, 163, 16, 12, 10 + 15 * a, 184);
            $c && U(12, 192, 80, 8, 258, 120);
            Zc && U(202, 2, 48, 8, 274, 120)
        }
    }
      , U = function(a, b, c, d, e, f) {
        x.drawImage(qd, a, b, c, d, e, f, c, d)
    }
      , De = function(a) {
        var b = Oc[a].toString();
        b.length > rd && (b = b.substr(b.length - rd, rd));
        a = 0 == a ? 10 : 74;
        for (var c = 0; c < rd; c++) {
            var d = b.substr(c, 1);
            d && U((8 + 8 * parseInt(d, 10)) / 8 * 10 + 2, 182, 8, 8, a + 8 * c, 24)
        }
    }
      , Ce = function() {
        for (var a = Math.max(M - 4 + 1, 1), b = M; b >= a; b--) {
            var c = ve(b >= Md.length ? Md[Md.length - 1].ha : Md[b].ha);
            U(c[0] / 8 * 10 + 2, c[1] / 8 * 10 + 2, 32, 16, 466 - 16 * (1 + b - a), 184)
        }
    }
      , ce = function(a, b) {
        Oc[b] += a;
        !Pc[b] && 1E4 < Oc[b] && (Y("extra-life"),
        Pc[b] = !0,
        Qc++,
        5 < Qc && (Qc = 5))
    }
      , Y = function(a) {
        ud && google.doodle.pacManSound && !Rc && Q.get(a).play()
    }
      , Z = function() {
        if (ud) {
            for (var a = ba(Q.keys()), b = a.next(); !b.done; b = a.next())
                Q.get(b.value).stop();
            vd = null
        }
    }
      , ae = function(a) {
        ud && google.doodle.pacManSound && 0 == F && (sd[a] ? td[a] = !0 : (0 == a ? (Y(1 == Vc[a] ? "eating-dot-1" : "eating-dot-2"),
        wd = window.setInterval(Ee, 150)) : (Y("eating-dot-double"),
        xd = window.setInterval(Fe, 150)),
        Vc[a] = 3 - Vc[a]))
    }
      , Ge = function(a) {
        sd[a] = !1;
        td[a] && (td[a] = !1,
        ae(a))
    }
      , Ee = function() {
        Ge(0)
    }
      , Fe = function() {
        Ge(1)
    }
      , V = function() {
        if (ud && google.doodle.pacManSound) {
            var a = 0;
            0 == F || 1 == F ? a = qc ? "ambient-eyes" : 4 == E ? "ambient-fright" : 241 < Fc ? "ambient-4" : 207 < Fc ? "ambient-3" : 138 < Fc ? "ambient-2" : "ambient-1" : 13 == F && 0 != Nc && (a = "cutscene");
            if (a) {
                var b = !1;
                vd && (vd != a ? Q.get(vd).stop() : b = !0);
                b || (vd = a,
                Q.get(a).play(0, !0))
            }
        }
    }
      , He = function() {
        Ae = !1;
        ze ? V() : (V(),
        pd = (new Date).getTime(),
        P = 0,
        Be())
    }
      , Ie = function() {
        Ae = !0;
        Z();
        window.clearInterval(wd);
        window.clearInterval(xd)
    }
      , Ke = function() {
        (Ad || Bd) && Je(.67);
        if (Ad && Bd && (Je(1),
        !zd)) {
            zd = !0;
            var a = document.getElementById("hplogo-l");
            a && a.parentNode && a.parentNode.removeChild(a);
            yd.style.background = "black";
            L = document.createElement("canvas");
            L.id = "hplogo-c";
            L.width = 484;
            L.height = 208;
            x = L.getContext("2d");
            yd.appendChild(L);
            L.tabIndex = 0;
            L.focus();
            ud && (O = document.createElement("div"),
            O.style.background = "url(pacman10-hp-sprite-3.png) 38px 18px no-repeat",
            O.style.position = "absolute",
            O.style.right = "0",
            O.style.top = "0",
            O.style.width = "12px",
            O.style.height = "12px",
            O.style.border = "10px solid black",
            O.style.cursor = "pointer",
            yd.appendChild(O),
            O.onclick = xe,
            ee());
            md = [];
            A = [, 2, 1, , 8, , , , 4];
            window.addEventListener ? (window.addEventListener("keydown", ie, !1),
            L.addEventListener("click", ke, !1),
            document.addEventListener("touchstart", ne, !0),
            L.addEventListener("touchstart", ne, !0),
            document.f && document.f.q && document.f.q.addEventListener("touchstart", ne, !0)) : (document.body.attachEvent("onkeydown", ie),
            L.attachEvent("onclick", ke));
            H = {};
            for (var b in Ld)
                H[b] = Math.round(90 * (google.doodle.pacManSound || 7 != b && 8 != b ? Ld[b] : 1));
            Gc = new jc(12E4,Ie,He);
            te();
            Ba && (Nc = M = 0,
            X(13));
            He()
        }
    }
      , Le = function() {
        Bd = !0;
        Ke()
    }
      , Me = function() {
        --Cd;
        0 == Cd && (Ad = ud = !0,
        Ke())
    }
      , Je = function(a) {
        document.getElementById("hplogo-b").style.width = Math.round(200 * a) + "px"
    }
      , ue = function(a) {
        a = "pacman,e:" + a;
        window.google && window.google.log ? window.google.log("doodle", a) : ua(a)
    };
    ue("I");
    Lc = zd = !1;
    yd = document.getElementById("hplogo");
    yd.title = "";
    Je(.33);
    google.pacman = google.pacman || {};
    google.pacman.insertCoin = function() {
        8 == F || 14 == F ? te() : 2 != y && (Z(),
        X(12))
    }
    ;
    google.pacman.destroy = function() {
        if (google.pacman) {
            Z();
            window.clearInterval(wd);
            window.clearInterval(xd);
            L && L.parentNode && L.parentNode.removeChild(L);
            google.pacman = void 0;
            window.removeEventListener && (window.removeEventListener("MozGamepadConnected", ec, !1),
            window.removeEventListener("MozGamepadDisconnected", fc, !1));
            cc = !1;
            var a = Gc;
            a && "function" == typeof a.Cb && a.Cb()
        }
    }
    ;
    Bd = !1;
    qd = document.createElement("img");
    var Ne = -1 != navigator.userAgent.indexOf("MSIE");
    Ne || (qd.onload = Le);
    qd.src = "pacman10-hp-sprite-3.png";
    Ne && Le();
    0 == function() {
        if (window.localStorage) {
            var a = window.localStorage.getItem("doodle-pacman-audio");
            if (a && (a = a.toLowerCase(),
            "0" != a && "no" != a && "false" != a))
                return !0;
            if (null != a)
                return !1
        }
        return null
    }() && (rc = !0,
    google.doodle.pacManSound = !1);
    Ad = ud = !1;
    if (function() {
        var a = w.j()
          , b = yd;
        if (!Ob)
            return !1;
        if (a.i)
            return !0;
        a.i = new (window.AudioContext || window.webkitAudioContext);
        a.$ = a.i.createGain();
        a.$.connect(a.i.destination);
        for (var c in a.T)
            a.T[c].j = a.i;
        for (c in a.H)
            Rb(a.H[c], a.i, a.$);
        Qb(a);
        Fb(b, ["click", "pointerup", "mouseup", "touchend"], function() {
            a.i.resume();
            Qb(a)
        }, !0);
        return !0
    }()) {
        Q = new Map;
        Q.set("death", v.Ob);
        Q.set("eating-dot-1", v.Qb);
        Q.set("eating-dot-2", v.Rb);
        Q.set("ambient-1", v.Hb);
        Q.set("ambient-2", v.Ib);
        Q.set("ambient-3", v.Jb);
        Q.set("ambient-4", v.Kb);
        Q.set("ambient-eyes", v.Lb);
        Q.set("ambient-fright", v.Mb);
        Q.set("cutscene", v.Nb);
        Q.set("death-double", v.Pb);
        Q.set("eating-dot-double", v.Sb);
        Q.set("eating-ghost", v.Tb);
        Q.set("extra-life", v.Ub);
        Q.set("fruit", v.Vb);
        Q.set("start-music", v.Wb);
        Q.set("start-music-double", v.Xb);
        Cd = Q.size;
        for (var Oe = ba(Q.values()), Pe = Oe.next(); !Pe.done; Pe = Oe.next())
            Pe.value.Fb.preload(Me)
    } else
        Ad = !0,
        Ke();
    Zb[0] = 37;
    Zb[1] = 39;
    Zb[2] = 38;
    Zb[3] = 40;
    ac = yd;
    bc = null;
    window.addEventListener && (window.addEventListener("MozGamepadConnected", ec, !1),
    window.addEventListener("MozGamepadDisconnected", fc, !1));
    !navigator.webkitGamepads && !navigator.webkitGetGamepads || cc || (cc = !0,
    dc());
}
).call(this);