(function(g) {
    var window = this;
    'use strict';
    var yQa = function(a, b) {
            return g.Qb(a, b)
        },
        zQa = function(a, b) {
            b = b instanceof g.Kc ? b : g.Qc(b, /^data:image\//i.test(b));
            a.src = g.Lc(b)
        },
        AQa = function(a) {
            if (a instanceof g.Th) return a;
            if ("function" == typeof a.Jg) return a.Jg(!1);
            if (g.La(a)) {
                var b = 0,
                    c = new g.Th;
                c.i = function() {
                    for (;;) {
                        if (b >= a.length) throw g.Zh;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                c.next = c.i.bind(c);
                return c
            }
            throw Error("Not implemented");
        },
        BQa = function(a, b, c) {
            if (g.La(a)) try {
                g.Db(a, b, c)
            } catch (d) {
                if (d !== g.Zh) throw d;
            } else {
                a = AQa(a);
                try {
                    for (;;) b.call(c, a.i(), void 0, a)
                } catch (d) {
                    if (d !== g.Zh) throw d;
                }
            }
        },
        N6 = function(a) {
            g.rk(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Qa()).toString(36));
            return a
        },
        O6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.wk(a.l, b, c)
        },
        CQa = function(a, b) {
            var c = [];
            BQa(b, function(d) {
                try {
                    var e = g.lr.prototype.l.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.kr(e) && c.push(d)
            }, a);
            return c
        },
        DQa = function(a, b) {
            CQa(a, b).forEach(function(c) {
                g.lr.prototype.remove.call(this, c)
            }, a)
        },
        EQa = function(a) {
            if (a.U) {
                if (a.U.locationOverrideToken) return {
                    locationOverrideToken: a.U.locationOverrideToken
                };
                if (null != a.U.latitudeE7 && null != a.U.longitudeE7) return {
                    latitudeE7: a.U.latitudeE7,
                    longitudeE7: a.U.longitudeE7
                }
            }
            return null
        },
        FQa = function(a, b) {
            g.jb(a, b) || a.push(b)
        },
        P6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        GQa = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        Q6 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return GQa(a)
        },
        HQa = function(a, b, c, d) {
            var e = new g.fk(null, void 0);
            a && g.gk(e, a);
            b && g.hk(e, b);
            c && g.ik(e, c);
            d && (e.J = d);
            return e
        },
        R6 = function(a, b) {
            g.Su[a] = !0;
            var c = g.Qu();
            c && c.publish.apply(c, arguments);
            g.Su[a] = !1
        },
        S6 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.ai;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", IQa(this, a.capabilities || ""), JQa(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        IQa = function(a, b) {
            a.capabilities.clear();
            g.Ho(b.split(","), g.Pa(yQa, KQa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        JQa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        T6 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        U6 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        LQa = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        MQa = function(a) {
            return new T6(a)
        },
        NQa = function(a) {
            return Array.isArray(a) ? g.Qe(a, MQa) : []
        },
        V6 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        W6 = function(a) {
            return Array.isArray(a) ? "[" + g.Qe(a, V6).join(",") + "]" : "null"
        },
        X6 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        OQa = function(a) {
            return g.Qe(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Y6 = function(a, b) {
            return g.fb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        Z6 = function(a, b) {
            return g.fb(a, function(c) {
                return U6(c, b)
            })
        },
        PQa = function() {
            var a = (0, g.vz)();
            a && DQa(a, a.i.Jg(!0))
        },
        $6 = function() {
            var a = g.yz("yt-remote-connected-devices") || [];
            g.Ab(a);
            return a
        },
        QQa = function(a) {
            if (g.kb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Qe(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        RQa = function(a) {
            g.xz("yt-remote-connected-devices", a, 86400)
        },
        b7 = function() {
            if (a7) return a7;
            var a = g.yz("yt-remote-device-id");
            a || (a = X6(), g.xz("yt-remote-device-id", a, 31536E3));
            for (var b = $6(), c = 1, d = a; g.jb(b, d);) c++, d = a + "#" + c;
            return a7 = d
        },
        c7 = function() {
            var a = $6(),
                b = b7();
            g.jb(a, b);
            g.Bz() && g.Cb(a, b);
            a = QQa(a);
            if (g.kb(a)) try {
                g.Bt("remote_sid")
            } catch (c) {} else try {
                g.zt("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        SQa = function() {
            return g.yz("yt-remote-session-browser-channel")
        },
        TQa = function() {
            return g.yz("yt-remote-local-screens") || []
        },
        UQa = function() {
            g.xz("yt-remote-lounge-token-expiration", !0, 86400)
        },
        VQa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Qe(TQa(), function(d) {
                    return d.loungeToken
                }),
                c = g.Qe(a, function(d) {
                    return d.loungeToken
                });
            g.ym(c, function(d) {
                return !g.jb(b, d)
            }) && UQa();
            g.xz("yt-remote-local-screens", a, 31536E3)
        },
        WQa = function(a, b) {
            g.xz("yt-remote-session-browser-channel", a);
            g.xz("yt-remote-session-screen-id", b);
            a = $6();
            b = b7();
            g.jb(a, b) || a.push(b);
            RQa(a);
            c7()
        },
        d7 = function(a) {
            a || (g.Az("yt-remote-session-screen-id"), g.Az("yt-remote-session-video-id"));
            c7();
            a = $6();
            g.ob(a, b7());
            RQa(a)
        },
        XQa = function() {
            if (!e7) {
                var a = g.vr();
                a && (e7 = new g.fr(a))
            }
        },
        YQa = function() {
            XQa();
            return e7 ? !!e7.get("yt-remote-use-staging-server") : !1
        },
        f7 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        ZQa = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        $Qa = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        g7 = function(a) {
            a.length ? aRa(a.shift(), function() {
                g7(a)
            }) : h7()
        },
        bRa = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        aRa = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Ej(d, g.Uq(a));
            (document.head || document.documentElement).appendChild(d)
        },
        cRa = function() {
            var a = f7(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        h7 = function() {
            var a = $Qa();
            a && a(!1, "No cast extension found")
        },
        i7 = function() {
            if (dRa) {
                var a = 2,
                    b = $Qa(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                aRa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", h7, c)
            }
        },
        eRa = function() {
            i7();
            var a = cRa();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            g7(a)
        },
        gRa = function() {
            i7();
            var a = cRa();
            a.push.apply(a, g.v(fRa.map(bRa)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            g7(a)
        },
        j7 = function(a, b, c) {
            g.G.call(this);
            this.I = null != c ? (0, g.D)(a, c) : a;
            this.Nf = b;
            this.C = (0, g.D)(this.OO, this);
            this.i = !1;
            this.l = 0;
            this.u = this.Jb = null;
            this.B = []
        },
        k7 = function(a, b, c) {
            g.G.call(this);
            this.B = null != c ? a.bind(c) : a;
            this.Nf = b;
            this.u = null;
            this.i = !1;
            this.l = 0;
            this.Jb = null
        },
        l7 = function(a) {
            a.Jb = g.lh(function() {
                a.Jb = null;
                a.i && !a.l && (a.i = !1, l7(a))
            }, a.Nf);
            var b = a.u;
            a.u = null;
            a.B.apply(null, b)
        },
        m7 = function() {},
        n7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        p7 = function(a) {
            o7.dispatchEvent(new hRa(o7, a))
        },
        hRa = function(a, b) {
            g.mf.call(this, "statevent", a);
            this.stat = b
        },
        q7 = function(a, b, c, d) {
            this.i = a;
            this.l = b;
            this.L = c;
            this.J = d || 1;
            this.u = 45E3;
            this.B = new g.xk(this);
            this.I = new g.kh;
            this.I.setInterval(250)
        },
        jRa = function(a, b, c) {
            a.Ss = 1;
            a.Im = N6(b.clone());
            a.bq = c;
            a.C = !0;
            iRa(a, null)
        },
        r7 = function(a, b, c, d, e) {
            a.Ss = 1;
            a.Im = N6(b.clone());
            a.bq = null;
            a.C = c;
            e && (a.WL = !1);
            iRa(a, d)
        },
        iRa = function(a, b) {
            a.Hs = Date.now();
            s7(a);
            a.Wn = a.Im.clone();
            O6(a.Wn, "t", a.J);
            a.vA = 0;
            a.If = a.i.mC(a.i.Aw() ? b : null);
            0 < a.iB && (a.Gz = new k7((0, g.D)(a.XM, a, a.If), a.iB));
            a.B.Ra(a.If, "readystatechange", a.PO);
            b = a.Eo ? g.Zb(a.Eo) : {};
            a.bq ? (a.rA = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.If.send(a.Wn, a.rA, a.bq, b)) : (a.rA = "GET", a.WL && !g.ng && (b.Connection = "close"), a.If.send(a.Wn, a.rA, null, b));
            a.i.rj(1)
        },
        lRa = function(a, b) {
            var c = a.vA,
                d = b.indexOf("\n", c);
            if (-1 == d) return t7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return kRa;
            d += 1;
            if (d + c > b.length) return t7;
            b = b.substr(d, c);
            a.vA = d + c;
            return b
        },
        nRa = function(a, b) {
            a.Hs = Date.now();
            s7(a);
            var c = b ? window.location.hostname : "";
            a.Wn = a.Im.clone();
            g.rk(a.Wn, "DOMAIN", c);
            g.rk(a.Wn, "t", a.J);
            try {
                a.Hj = new ActiveXObject("htmlfile")
            } catch (m) {
                u7(a);
                a.Em = 7;
                p7(22);
                v7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in w7) f = w7[f];
                        else if (f in mRa) f = w7[f] = mRa[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                w7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.md(g.lc("b/12014412"), d);
            a.Hj.open();
            a.Hj.write(g.hd(c));
            a.Hj.close();
            a.Hj.parentWindow.m = (0, g.D)(a.bV, a);
            a.Hj.parentWindow.d = (0, g.D)(a.oL, a, !0);
            a.Hj.parentWindow.rpcClose = (0, g.D)(a.oL, a, !1);
            c = a.Hj.createElement("DIV");
            a.Hj.parentWindow.document.body.appendChild(c);
            d = g.Pc(a.Wn.toString());
            d = g.vd(g.Lc(d));
            d = g.md(g.lc("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.od(c, d);
            a.i.rj(1)
        },
        s7 = function(a) {
            a.IF = Date.now() +
                a.u;
            oRa(a, a.u)
        },
        oRa = function(a, b) {
            if (null != a.Zs) throw Error("WatchDog timer not null");
            a.Zs = n7((0, g.D)(a.iV, a), b)
        },
        x7 = function(a) {
            a.Zs && (g.C.clearTimeout(a.Zs), a.Zs = null)
        },
        v7 = function(a) {
            a.i.jf() || a.Wo || a.i.bx(a)
        },
        u7 = function(a) {
            x7(a);
            g.ff(a.Gz);
            a.Gz = null;
            a.I.stop();
            g.zk(a.B);
            if (a.If) {
                var b = a.If;
                a.If = null;
                b.abort();
                b.dispose()
            }
            a.Hj && (a.Hj = null)
        },
        y7 = function(a, b) {
            try {
                a.i.hL(a, b), a.i.rj(4)
            } catch (c) {}
        },
        qRa = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                pRa(a, b, function(h) {
                    h ? c(!0) : g.C.setTimeout(function() {
                        qRa(a, b, c, d, f)
                    }, f)
                })
            }
        },
        pRa = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    z7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            zQa(d, a)
        },
        z7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        rRa = function(a) {
            this.i = a;
            this.l = new m7
        },
        sRa = function(a) {
            var b = A7(a.i, a.au, "/mail/images/cleardot.gif");
            N6(b);
            qRa(b.toString(), 5E3, (0, g.D)(a.JP, a), 3, 2E3);
            a.rj(1)
        },
        C7 = function(a) {
            var b = a.i.L;
            if (null != b) p7(5), b ? (p7(11), B7(a.i, a, !1)) : (p7(12), B7(a.i, a, !0));
            else if (a.nh = new q7(a, void 0, void 0, void 0), a.nh.Eo = a.jB, b = a.i, b = A7(b, b.Aw() ? a.Kt : null, a.kB), p7(5), !g.ke || g.ce(10)) O6(b, "TYPE", "xmlhttp"), r7(a.nh, b, !1, a.Kt, !1);
            else {
                O6(b, "TYPE", "html");
                var c = a.nh;
                a = !!a.Kt;
                c.Ss = 3;
                c.Im = N6(b.clone());
                nRa(c, a)
            }
        },
        D7 = function(a, b, c) {
            this.Qa = 1;
            this.i = [];
            this.u = [];
            this.B = new m7;
            this.J = a || null;
            this.L = null != b ? b : null;
            this.C = c || !1
        },
        tRa = function(a, b) {
            this.i = a;
            this.map = b;
            this.context = null
        },
        uRa = function(a, b, c, d) {
            g.mf.call(this, "timingevent", a);
            this.size = b;
            this.pw = d
        },
        vRa = function(a) {
            g.mf.call(this, "serverreachability", a)
        },
        yRa = function(a) {
            wRa(a);
            if (3 == a.Qa) {
                var b = a.Jv++,
                    c = a.Kx.clone();
                g.rk(c, "SID", a.l);
                g.rk(c, "RID", b);
                g.rk(c, "TYPE", "terminate");
                E7(a, c);
                b = new q7(a, a.l, b, void 0);
                b.Ss = 2;
                b.Im = N6(c.clone());
                zQa(new Image, b.Im.toString());
                b.Hs = Date.now();
                s7(b)
            }
            xRa(a)
        },
        zRa = function(a) {
            a.jQ(1, 0);
            a.Kx = A7(a, null, a.lB);
            F7(a)
        },
        wRa = function(a) {
            a.Nm && (a.Nm.abort(), a.Nm = null);
            a.Ce && (a.Ce.cancel(), a.Ce = null);
            a.vl && (g.C.clearTimeout(a.vl), a.vl = null);
            G7(a);
            a.Ug && (a.Ug.cancel(), a.Ug = null);
            a.Wm && (g.C.clearTimeout(a.Wm), a.Wm = null)
        },
        ARa = function(a, b) {
            if (0 == a.Qa) throw Error("Invalid operation: sending map when state is closed");
            a.i.push(new tRa(a.TR++, b));
            2 != a.Qa && 3 != a.Qa || F7(a)
        },
        BRa = function(a) {
            var b = 0;
            a.Ce && b++;
            a.Ug && b++;
            return b
        },
        F7 = function(a) {
            a.Ug || a.Wm || (a.Wm = n7((0, g.D)(a.mL, a), 0), a.Dr = 0)
        },
        DRa = function(a, b) {
            if (1 == a.Qa) {
                if (!b) {
                    a.Jv = Math.floor(1E5 * Math.random());
                    b = a.Jv++;
                    var c = new q7(a, "", b, void 0);
                    c.Eo = a.Vj;
                    var d = H7(a),
                        e = a.Kx.clone();
                    g.rk(e, "RID", b);
                    g.rk(e, "CVER", "1");
                    E7(a, e);
                    jRa(c, e, d);
                    a.Ug = c;
                    a.Qa = 2
                }
            } else 3 == a.Qa && (b ? CRa(a, b) : 0 == a.i.length || a.Ug || CRa(a))
        },
        CRa = function(a, b) {
            if (b)
                if (6 < a.Xo) {
                    a.i = a.u.concat(a.i);
                    a.u.length = 0;
                    var c = a.Jv - 1;
                    b = H7(a)
                } else c = b.L, b = b.bq;
            else c = a.Jv++, b = H7(a);
            var d = a.Kx.clone();
            g.rk(d, "SID", a.l);
            g.rk(d, "RID", c);
            g.rk(d, "AID", a.Wr);
            E7(a, d);
            c = new q7(a, a.l, c, a.Dr + 1);
            c.Eo = a.Vj;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Ug = c;
            jRa(c, d, b)
        },
        E7 = function(a, b) {
            a.Jf && (a = a.Jf.MI()) && g.Fb(a, function(c, d) {
                g.rk(b, d, c)
            })
        },
        H7 = function(a) {
            var b = Math.min(a.i.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Xo && 0 < b) {
                var d = a.i[0].i;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Gq: e.Gq
                }, f++) {
                e.Gq = a.i[f].i;
                var h = a.i[f].map;
                e.Gq = 6 >= a.Xo ? f : e.Gq - d;
                try {
                    g.Fb(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Gq + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Gq + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.u = a.u.concat(a.i.splice(0, b));
            return c.join("&")
        },
        ERa = function(a) {
            a.Ce || a.vl || (a.I = 1, a.vl = n7((0, g.D)(a.lL, a), 0), a.dr = 0)
        },
        I7 = function(a) {
            if (a.Ce || a.vl || 3 <= a.dr) return !1;
            a.I++;
            a.vl = n7((0, g.D)(a.lL, a), FRa(a, a.dr));
            a.dr++;
            return !0
        },
        B7 = function(a, b, c) {
            a.pA = c;
            a.Wj = b.Yk;
            a.C || zRa(a)
        },
        G7 = function(a) {
            null != a.ip && (g.C.clearTimeout(a.ip), a.ip = null)
        },
        FRa = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        J7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Jf && (c = null);
                var d = (0, g.D)(a.eW, a);
                c || (c = new g.fk("//www.google.com/images/cleardot.gif"), N6(c));
                pRa(c.toString(), 1E4, d)
            } else p7(2);
            GRa(a, b)
        },
        GRa = function(a, b) {
            a.Qa = 0;
            a.Jf && a.Jf.aI(b);
            xRa(a);
            wRa(a)
        },
        xRa = function(a) {
            a.Qa = 0;
            a.Wj = -1;
            if (a.Jf)
                if (0 == a.u.length && 0 == a.i.length) a.Jf.ZB();
                else {
                    g.rb(a.u);
                    var b = g.rb(a.i);
                    a.u.length = 0;
                    a.i.length = 0;
                    a.Jf.ZB(b)
                }
        },
        A7 = function(a, b, c) {
            var d = g.sk(c);
            if ("" != d.i) b && g.hk(d, b + "." + d.i), g.ik(d, d.u);
            else {
                var e = window.location;
                d = HQa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Gu && g.Fb(a.Gu, function(f, h) {
                g.rk(d, h, f)
            });
            g.rk(d, "VER", a.Xo);
            E7(a, d);
            return d
        },
        HRa = function() {},
        IRa = function() {
            this.i = [];
            this.l = []
        },
        JRa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        K7 = function(a, b) {
            g.G.call(this);
            this.i = new g.K(this.TU, 0, this);
            g.J(this, this.i);
            this.Nf = 5E3;
            this.l = 0;
            if ("function" === typeof a) b && (a = (0, g.D)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.D)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.u = a
        },
        L7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.xa = a;
            this.I = b;
            this.u = new g.er;
            this.l = new K7(this.JV, this);
            this.i = null;
            this.Z = !1;
            this.C = null;
            this.U = "";
            this.L = this.B = 0;
            this.J = [];
            this.ya = c;
            this.ea = d;
            this.Aa = e
        },
        KRa = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.i.pA,
                sessionId: a.i.l,
                arrayId: a.i.Wr
            }
        },
        LRa = function(a, b) {
            a.L = b || 0;
            a.l.stop();
            M7(a);
            a.i && (3 == a.i.getState() && DRa(a.i), yRa(a.i));
            a.L = 0
        },
        N7 = function(a) {
            return !!a.i && 3 == a.i.getState()
        },
        M7 = function(a) {
            if (a.i) {
                var b = a.ea(),
                    c = a.i.Vj || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.i.Vj = c
            }
        },
        O7 = function(a) {
            this.port = this.domain = "";
            this.i = "/api/lounge";
            this.l = !0;
            a = a || document.location.href;
            var b = Number(g.gi(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.hi(a) || "";
            a = g.$c;
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Ic(a, "10.0") && (this.l = !1))
        },
        P7 = function(a, b) {
            var c = a.i;
            a.l && (c = "https://" + a.domain + a.port + a.i);
            return g.si(c + b, {})
        },
        Q7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Pa(a.B, d, !0),
                onError: g.Pa(a.u, e),
                onTimeout: g.Pa(a.C, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.mt(b, a)
        },
        PRa = function() {
            var a = MRa;
            NRa();
            R7.push(a);
            ORa()
        },
        S7 = function(a, b) {
            NRa();
            var c = QRa(a, String(b));
            g.kb(R7) ? RRa(c) : (ORa(), g.Db(R7, function(d) {
                d(c)
            }))
        },
        NRa = function() {
            R7 || (R7 = g.Ha("yt.mdx.remote.debug.handlers_") || [], g.Ga("yt.mdx.remote.debug.handlers_", R7, void 0))
        },
        RRa = function(a) {
            var b = (T7 + 1) % 50;
            T7 = b;
            U7[b] = a;
            V7 || (V7 = 49 == b)
        },
        ORa = function() {
            var a = R7;
            if (U7[0]) {
                var b = V7 ? T7 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = U7[b];
                    g.Db(a, function(d) {
                        d(c)
                    })
                } while (b != T7);
                U7 = Array(50);
                T7 = -1;
                V7 = !1
            }
        },
        QRa = function(a, b) {
            var c = (Date.now() - SRa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        W7 = function(a) {
            g.R.call(this);
            this.I = a;
            this.screens = []
        },
        TRa = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        URa = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Ho(a.screens, function(f) {
                return !!Y6(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = TRa(a, b[d]) || c;
            return c
        },
        VRa = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Ho(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        X7 = function(a, b, c, d, e) {
            g.R.call(this);
            this.u = a;
            this.J = b;
            this.B = c;
            this.I = d;
            this.C = e;
            this.l = 0;
            this.i = null;
            this.Jb = NaN
        },
        Z7 = function(a) {
            W7.call(this, "LocalScreenService");
            this.l = a;
            this.i = NaN;
            Y7(this);
            this.info("Initializing with " + W6(this.screens))
        },
        WRa = function(a) {
            if (a.screens.length) {
                var b = g.Qe(a.screens, function(d) {
                        return d.id
                    }),
                    c = P7(a.l, "/pairing/get_lounge_token_batch");
                Q7(a.l, c, {
                    screen_ids: b.join(",")
                }, (0, g.D)(a.IQ, a), (0, g.D)(a.HQ, a))
            }
        },
        Y7 = function(a) {
            if (g.is("deprecate_pair_servlet_enabled")) return URa(a, []);
            var b = NQa(TQa());
            b = g.Ho(b, function(c) {
                return !c.uuid
            });
            return URa(a, b)
        },
        $7 = function(a, b) {
            VQa(g.Qe(a.screens, LQa));
            b && UQa()
        },
        b8 = function(a, b) {
            g.R.call(this);
            this.I = b;
            b = (b = g.yz("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.I(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.jb(b, h)
            }
            this.i = c;
            this.C = a;
            this.u = this.B = NaN;
            this.l = null;
            a8("Initialized with " + g.Jh(this.i))
        },
        c8 = function(a, b, c) {
            var d = P7(a.C, "/pairing/get_screen_availability");
            Q7(a.C, d, {
                lounge_token: b.token
            }, (0, g.D)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.D)(function() {
                c(!1)
            }, a))
        },
        d8 = function(a, b) {
            a: if (P6(b) != P6(a.i)) var c = !1;
                else {
                    c = g.Ob(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.i[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (a8("Updated online screens: " + g.Jh(a.i)), a.i = b, a.Y("screenChange"));XRa(a)
        },
        e8 = function(a) {
            isNaN(a.u) || g.ht(a.u);
            a.u = g.ft((0, g.D)(a.DE, a), 0 < a.B && a.B < g.Qa() ? 2E4 : 1E4)
        },
        a8 = function(a) {
            S7("OnlineScreenService", a)
        },
        YRa = function(a) {
            var b = {};
            g.Db(a.I(), function(c) {
                c.token ? b[c.token] = c.id : this.Yd("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        XRa = function(a) {
            a = g.Ob(g.Hb(a.i, function(b) {
                return b
            }));
            g.Ab(a);
            a.length ? g.xz("yt-remote-online-screen-ids", a.join(","), 60) : g.Az("yt-remote-online-screen-ids")
        },
        f8 = function(a, b) {
            b = void 0 === b ? !1 : b;
            W7.call(this, "ScreenService");
            this.B = a;
            this.J = b;
            this.i = this.l = null;
            this.u = [];
            this.C = {};
            ZRa(this)
        },
        aSa = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.C[b]);
            var h = a.Hh(),
                l = c ? Z6(h, c) : null;
            c && (a.J || l) || (l = Z6(h, b));
            if (l) {
                l.uuid = b;
                var m = g8(a, l);
                c8(a.i, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? $Ra(a, c, (0, g.D)(function(n) {
                var p = g8(this, new T6({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                c8(this.i, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        bSa = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        cSa = function(a, b, c) {
            c8(a.i, b, c)
        },
        $Ra = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.mt(P7(a.B, "/pairing/get_lounge_token_batch"), e)
        },
        dSa = function(a) {
            a.screens = a.l.Hh();
            var b = a.C,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + W6(a.screens))
        },
        ZRa = function(a) {
            h8(a);
            a.l = new Z7(a.B);
            a.l.subscribe("screenChange", (0, g.D)(a.RQ, a));
            dSa(a);
            a.J || (a.u = NQa(g.yz("yt-remote-automatic-screen-cache") || []));
            h8(a);
            a.info("Initializing automatic screens: " + W6(a.u));
            a.i = new b8(a.B, (0, g.D)(a.Hh, a, !0));
            a.i.subscribe("screenChange", (0, g.D)(function() {
                this.Y("onlineScreenChange")
            }, a))
        },
        g8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = Z6(a.u, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.u.push(b), a.J || eSa(a));
            h8(a);
            a.C[b.uuid] = b.id;
            g.xz("yt-remote-device-id-map", a.C, 31536E3);
            return b
        },
        eSa = function(a) {
            a = g.Ho(a.u, function(b) {
                return "shortLived" != b.idType
            });
            g.xz("yt-remote-automatic-screen-cache", g.Qe(a, LQa))
        },
        h8 = function(a) {
            a.C = g.yz("yt-remote-device-id-map") || {}
        },
        i8 = function(a, b, c) {
            g.R.call(this);
            this.Aa = c;
            this.u = a;
            this.i = b;
            this.B = null
        },
        j8 = function(a, b) {
            a.B = b;
            a.Y("sessionScreen", a.B)
        },
        fSa = function(a, b) {
            a.B && (a.B.token = b, g8(a.u, a.B));
            a.Y("sessionScreen", a.B)
        },
        k8 = function(a, b) {
            S7(a.Aa, b)
        },
        l8 = function(a, b, c) {
            i8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.l = null;
            this.ea = (0, g.D)(this.UO, this);
            this.ya = (0, g.D)(this.lV, this);
            this.Z = g.ft(function() {
                gSa(d, null)
            }, 12E4);
            this.J = this.C = this.I = this.L = 0;
            this.xa = !1;
            this.U = "unknown"
        },
        m8 = function(a, b) {
            g.ht(a.J);
            a.J = 0;
            0 == b ? hSa(a) : a.J = g.ft(function() {
                hSa(a)
            }, b)
        },
        hSa = function(a) {
            iSa(a, "getLoungeToken");
            g.ht(a.C);
            a.C = g.ft(function() {
                jSa(a, null)
            }, 3E4)
        },
        iSa = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Jh(void 0));
            var c = {};
            c.type = b;
            a.l ? a.l.sendMessage("urn:x-cast:com.google.youtube.mdx", c, g.Ia, (0, g.D)(function() {
                k8(this, "Failed to send message: " + b + ".")
            }, a)) : k8(a, "Sending yt message without session: " + g.Jh(c))
        },
        n8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.aJ(b, function(c) {
                j8(a, c)
            }, function() {
                return a.rg()
            }, 5)) : a.rg(Error("Waiting for session status timed out."))
        },
        lSa = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new T6(b);
            kSa(a, d, function(e) {
                e ? (a.xa = !0, g8(a.u, d), j8(a, d), a.U = "unknown", m8(a, c)) : (g.ns(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.rg())
            }, 5)
        },
        gSa = function(a, b) {
            g.ht(a.Z);
            a.Z = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? lSa(a, {
                name: a.i.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.ns(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), n8(a, b.screenId))) : (g.ns(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), n8(a, b.screenId)) : n8(a, b.screenId) : a.rg(Error("Waiting for session status timed out."))
        },
        jSa = function(a, b) {
            g.ht(a.C);
            a.C = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.U = c, m8(a, 3E4)) : (fSa(a, b.loungeToken), a.xa = !1, a.U = "unknown", m8(a, b.loungeTokenRefreshIntervalMs))
        },
        kSa = function(a, b, c, d) {
            g.ht(a.I);
            a.I = 0;
            cSa(a.u, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.ft(function() {
                    kSa(a, b, c, d - 1)
                }, 300)
            })
        },
        mSa = function(a) {
            g.ht(a.L);
            a.L = 0;
            g.ht(a.I);
            a.I = 0;
            g.ht(a.Z);
            a.Z = 0;
            g.ht(a.C);
            a.C = 0;
            g.ht(a.J);
            a.J = 0
        },
        o8 = function(a, b, c, d) {
            i8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.l = this.L = null;
            this.ya = "";
            this.Ja = c;
            this.Ka = null;
            this.Z = g.Ia;
            this.U = NaN;
            this.Ga = (0, g.D)(this.VO, this);
            this.C = g.Ia;
            this.J = this.I = 0;
            this.ea = !1;
            this.xa = "unknown"
        },
        p8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.l) ? 0 : b.getDialAppInfo))
        },
        nSa = function(a) {
            a.C = a.u.HG(a.ya, a.i.label, a.i.friendlyName, p8(a), function(b, c) {
                a.C = g.Ia;
                a.ea = !0;
                j8(a, b);
                "shortLived" == b.idType && 0 < c && q8(a, c)
            }, function(b) {
                a.C = g.Ia;
                a.rg(b)
            })
        },
        oSa = function(a) {
            var b = {};
            b.pairingCode = a.ya;
            b.theme = a.Ja;
            YQa() && (b.env_useStageMdx = 1);
            return g.qi(b)
        },
        r8 = function(a) {
            return new Promise(function(b) {
                a.ya = X6();
                if (a.Ka) {
                    var c = new chrome.cast.DialLaunchResponse(!0, oSa(a));
                    b(c);
                    nSa(a)
                } else a.Z = function() {
                    g.ht(a.U);
                    a.Z = function() {};
                    a.U = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, oSa(a));
                    b(d);
                    nSa(a)
                }, a.U = g.ft(function() {
                    a.Z()
                }, 100)
            })
        },
        qSa = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new T6(b);
            return (new Promise(function(e) {
                pSa(a, d, function(f) {
                    f ? (a.ea = !0, g8(a.u, d), j8(a, d), q8(a, c)) : g.ns(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : r8(a)
            })
        },
        rSa = function(a, b) {
            var c = a.L.receiver.label,
                d = a.i.friendlyName;
            return (new Promise(function(e) {
                aSa(a.u, c, b, d, function(f) {
                    f && f.token && j8(a, f);
                    e(f)
                }, function(f) {
                    k8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : r8(a)
            })
        },
        pSa = function(a, b, c, d) {
            g.ht(a.I);
            a.I = 0;
            cSa(a.u, b, function(e) {
                e || 0 > d ? c(e) : a.I = g.ft(function() {
                    pSa(a, b, c, d - 1)
                }, 300)
            })
        },
        q8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            p8(a) && (g.ht(a.J), a.J = 0, 0 == b ? sSa(a) : a.J = g.ft(function() {
                sSa(a)
            }, b))
        },
        sSa = function(a) {
            p8(a) && a.l.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.xa = c, q8(a, 3E4)) : (a.ea = !1, a.xa = "unknown", fSa(a, b.loungeToken), q8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.xa = "noLoungeTokenResponse";
                q8(a, 3E4)
            })
        },
        tSa = function(a) {
            g.ht(a.I);
            a.I = 0;
            g.ht(a.J);
            a.J = 0;
            a.C();
            a.C = function() {};
            g.ht(a.U)
        },
        s8 = function(a, b) {
            i8.call(this, a, b, "ManualSession");
            this.l = g.ft((0, g.D)(this.Xr, this, null), 150)
        },
        t8 = function(a, b) {
            g.R.call(this);
            this.config_ = b;
            this.l = a;
            this.L = b.appId || "233637DE";
            this.B = b.theme || "cl";
            this.U = b.disableCastApi || !1;
            this.I = b.forceMirroring || !1;
            this.i = null;
            this.J = !1;
            this.u = [];
            this.C = (0, g.D)(this.hU, this)
        },
        uSa = function(a, b) {
            return b ? g.fb(a.u, function(c) {
                return U6(b, c.label)
            }, a) : null
        },
        u8 = function(a) {
            S7("Controller", a)
        },
        MRa = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        v8 = function(a) {
            return a.J || !!a.u.length || !!a.i
        },
        w8 = function(a, b, c) {
            b != a.i && (g.ff(a.i), (a.i = b) ? (c ? a.Y("yt-remote-cast2-receiver-resumed",
                b.i) : a.Y("yt-remote-cast2-receiver-selected", b.i), b.subscribe("sessionScreen", (0, g.D)(a.kL, a, b)), b.subscribe("sessionFailed", function() {
                return vSa(a, b)
            }), b.getScreen() ? a.Y("yt-remote-cast2-session-change", b.getScreen()) : c && a.i.Xr(null)) : a.Y("yt-remote-cast2-session-change", null))
        },
        vSa = function(a, b) {
            a.i == b && a.Y("yt-remote-cast2-session-failed")
        },
        wSa = function(a) {
            var b = a.l.GG(),
                c = a.i && a.i.i;
            a = g.Qe(b, function(d) {
                c && U6(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = uSa(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        BSa = function(a, b, c, d) {
            d.disableCastApi ? x8("Cannot initialize because disabled by Mdx config.") : xSa() ? ySa(b, d) && (y8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? zSa(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? zSa(a, c) : (z8("Failed to load cast API: " + f), A8(!1), y8(!1), g.Az("yt-remote-cast-available"), g.Az("yt-remote-cast-receiver"),
                    ASa(), c(!1))
            }, d.loadCastApiSetupScript ? g.Cz("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= f7() && eRa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? h7() : 89 <= f7() ? gRa() : (i7(), g7(fRa.map(bRa))))) : x8("Cannot initialize because not running Chrome")
        },
        ASa = function() {
            x8("dispose");
            var a = B8();
            a && a.dispose();
            g.Ga("yt.mdx.remote.cloudview.instance_", null, void 0);
            CSa(!1);
            g.Vu(C8);
            C8.length = 0
        },
        D8 = function() {
            return !!g.yz("yt-remote-cast-installed")
        },
        DSa = function() {
            var a = g.yz("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        ESa = function() {
            x8("clearCurrentReceiver");
            g.Az("yt-remote-cast-receiver")
        },
        FSa = function() {
            return D8() ? B8() ? B8().getCastSession() : (z8("getCastSelector: Cast is not initialized."), null) : (z8("getCastSelector: Cast API is not installed!"), null)
        },
        F8 = function() {
            D8() ? B8() ? E8() ? (x8("Requesting cast selector."), B8().requestSession()) : (x8("Wait for cast API to be ready to request the session."), C8.push(g.Uu("yt-remote-cast2-api-ready", F8))) : z8("requestCastSelector: Cast is not initialized.") : z8("requestCastSelector: Cast API is not installed!")
        },
        G8 =
        function(a, b) {
            E8() ? B8().setConnectedScreenStatus(a, b) : z8("setConnectedScreenStatus called before ready.")
        },
        xSa = function() {
            var a = 0 <= g.$c.search(/ (CrMo|Chrome|CriOS)\//);
            return g.dj || a
        },
        GSa = function(a, b) {
            B8().init(a, b)
        },
        ySa = function(a, b) {
            var c = !1;
            B8() || (a = new t8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.xz("yt-remote-cast-available", d);
                R6("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                x8("onReceiverSelected: " + d.friendlyName);
                g.xz("yt-remote-cast-receiver", d);
                R6("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                x8("onReceiverResumed: " + d.friendlyName);
                g.xz("yt-remote-cast-receiver", d);
                R6("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                x8("onSessionChange: " + V6(d));
                d || g.Az("yt-remote-cast-receiver");
                R6("yt-remote-cast2-session-change", d)
            }), g.Ga("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
            x8("cloudview.createSingleton_: " + c);
            return c
        },
        B8 = function() {
            return g.Ha("yt.mdx.remote.cloudview.instance_")
        },
        zSa = function(a, b) {
            A8(!0);
            y8(!1);
            GSa(a, function(c) {
                c ? (CSa(!0), g.Wu("yt-remote-cast2-api-ready")) : (z8("Failed to initialize cast API."), A8(!1), g.Az("yt-remote-cast-available"), g.Az("yt-remote-cast-receiver"), ASa());
                b(c)
            })
        },
        x8 = function(a) {
            S7("cloudview", a)
        },
        z8 = function(a) {
            S7("cloudview", a)
        },
        A8 = function(a) {
            x8("setCastInstalled_ " + a);
            g.xz("yt-remote-cast-installed", a)
        },
        E8 = function() {
            return !!g.Ha("yt.mdx.remote.cloudview.apiReady_")
        },
        CSa = function(a) {
            x8("setApiReady_ " + a);
            g.Ga("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        y8 = function(a) {
            g.Ga("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        H8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.I = this.J = 0;
            this.trackData = null;
            this.hasNext = this.Ak = !1;
            this.L = this.C = this.i = this.B = 0;
            this.u = NaN;
            this.l = !1;
            this.reset(a)
        },
        I8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Ak = !1;
            a.hasNext = !1;
            a.J = 0;
            a.I = g.Qa();
            a.B = 0;
            a.i = 0;
            a.C = 0;
            a.L = 0;
            a.u = NaN;
            a.l = !1
        },
        J8 = function(a) {
            return a.xc() ? (g.Qa() - a.I) / 1E3 : 0
        },
        K8 = function(a, b) {
            a.J = b;
            a.I = g.Qa()
        },
        L8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Qa() - a.I) / 1E3 + a.J;
                case -1E3:
                    return 0
            }
            return a.J
        },
        M8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && I8(a)
        },
        N8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.$b(a.trackData);
            b.hasPrevious = a.Ak;
            b.hasNext = a.hasNext;
            b.playerTime = a.J;
            b.playerTimeAt = a.I;
            b.seekableStart = a.B;
            b.seekableEnd = a.i;
            b.duration = a.C;
            b.loadedTime = a.L;
            b.liveIngestionTime = a.u;
            return b
        },
        P8 = function(a, b) {
            g.R.call(this);
            this.Qa = 0;
            this.u = a;
            this.C = [];
            this.B = new IRa;
            this.l = this.i = null;
            this.L = (0, g.D)(this.ES, this);
            this.I = (0, g.D)(this.Qv, this);
            this.J = (0, g.D)(this.DS, this);
            this.U = (0, g.D)(this.MS, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.TE, this), HSa(this))) : c = 3;
            0 != c && (b ? this.TE(c) : g.ft((0, g.D)(function() {
                this.TE(c)
            }, this), 0));
            (a = FSa()) && O8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.U)
        },
        Q8 = function(a) {
            return new H8(a.u.getPlayerContextData())
        },
        HSa = function(a) {
            g.Db("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled".split(" "), function(b) {
                this.C.push(this.u.subscribe(b, g.Pa(this.eU, b), this))
            }, a)
        },
        ISa = function(a) {
            g.Db(a.C, function(b) {
                this.u.unsubscribeByKey(b)
            }, a);
            a.C.length = 0
        },
        R8 = function(a) {
            return 1 == a.getState()
        },
        S8 = function(a, b) {
            var c = a.B;
            50 > c.i.length + c.l.length && a.B.l.push(b)
        },
        U8 = function(a, b, c) {
            var d = Q8(a);
            K8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            T8(a, d)
        },
        V8 = function(a, b, c) {
            a.u.sendMessage(b, c)
        },
        T8 = function(a, b) {
            ISa(a);
            a.u.setPlayerContextData(N8(b));
            HSa(a)
        },
        O8 = function(a, b) {
            a.l && (a.l.removeUpdateListener(a.L), a.l.removeMediaListener(a.I), a.Qv(null));
            a.l = b;
            a.l && (S7("CP", "Setting cast session: " + a.l.sessionId), a.l.addUpdateListener(a.L), a.l.addMediaListener(a.I), a.l.media.length && a.Qv(a.l.media[0]))
        },
        JSa = function(a) {
            var b = a.i.media,
                c = a.i.customData;
            if (b && c) {
                var d = Q8(a);
                b.contentId != d.videoId && S7("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                K8(d, a.i.getEstimatedTime());
                T8(a, d)
            } else S7("CP", "No cast media video. Ignoring state update.")
        },
        W8 = function(a, b, c) {
            return (0, g.D)(function(d) {
                this.Yd("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Yd("Retrying " + b + " using MDx browser channel."), V8(this, b, c))
            }, a)
        },
        X8 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.R.call(this);
            this.C = NaN;
            this.xa = !1;
            this.L = this.J = this.Z = this.ea = NaN;
            this.U = [];
            this.B = this.I = this.u = this.hc = this.i = null;
            this.Ga = a;
            this.Aa = d;
            this.U.push(g.lu(window, "beforeunload", (0, g.D)(this.DQ, this)));
            this.l = [];
            this.hc = new H8;
            this.Ka = b.id;
            this.ya = b.idType;
            this.i = KSa(this, c);
            this.i.subscribe("handlerOpened", this.JS, this);
            this.i.subscribe("handlerClosed", this.GS, this);
            this.i.subscribe("handlerError", this.HS, this);
            this.i.subscribe("handlerMessage", this.IS, this);
            this.i.Sz(b.token);
            this.subscribe("remoteQueueChange",
                function() {
                    var e = this.hc.videoId;
                    g.Bz() && g.xz("yt-remote-session-video-id", e)
                }, this)
        },
        LSa = function(a) {
            return g.fb(a.l, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        Y8 = function(a) {
            S7("conn", a)
        },
        KSa = function(a, b) {
            return new L7(P7(a.Ga, "/bc"), b, !1, function() {
                return a.LG()
            }, "shortLived" == a.ya)
        },
        Z8 = function(a, b) {
            a.Y("proxyStateChange", b)
        },
        MSa = function(a) {
            a.C = g.ft((0, g.D)(function() {
                Y8("Connecting timeout");
                this.yr(1)
            }, a), 2E4)
        },
        $8 = function(a) {
            g.ht(a.C);
            a.C = NaN
        },
        a9 = function(a) {
            g.ht(a.ea);
            a.ea = NaN
        },
        NSa = function(a) {
            b9(a);
            a.Z = g.ft((0, g.D)(function() {
                c9(this, "getNowPlaying")
            }, a), 2E4)
        },
        b9 = function(a) {
            g.ht(a.Z);
            a.Z = NaN
        },
        PSa = function(a, b) {
            var c = null;
            if (b) {
                var d = LSa(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ga("yt.mdx.remote.remoteClient_", c, void 0);
            b && ($8(a), a9(a));
            c = N7(a.i) && isNaN(a.C);
            b == c ? b && (Z8(a, 1), c9(a, "getSubtitlesTrack")) : b ? (a.ZI() && a.hc.reset(), Z8(a, 1), c9(a, "getNowPlaying"), OSa(a)) : a.yr(1)
        },
        QSa = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.hc.videoId && (g.Vb(b.params) ? a.hc.trackData = null : a.hc.trackData = b.params, a.Y("remotePlayerChange"))
        },
        RSa = function(a, b) {
            var c = b.params.videoId || b.params.video_id,
                d = parseInt(b.params.currentIndex, 10);
            a.hc.listId = b.params.listId || a.hc.listId;
            M8(a.hc, c, d);
            a.Y("remoteQueueChange")
        },
        TSa = function(a, b) {
            b.params = b.params || {};
            RSa(a, b);
            SSa(a, b);
            a.Y("autoplayDismissed")
        },
        SSa = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            K8(a.hc, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.hc.playerState && (c = -1E3);
            a.hc.playerState = c;
            c = Number(b.params.loadedTime);
            a.hc.L = isNaN(c) ? 0 : c;
            a.hc.Cj(Number(b.params.duration));
            c = a.hc;
            var d = Number(b.params.liveIngestionTime);
            c.u = d;
            c.l = isNaN(d) ? !1 : !0;
            c = a.hc;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.B = isNaN(d) ? 0 : d;
            c.i = isNaN(b) ? 0 : b;
            1 == a.hc.playerState ? NSa(a) : b9(a);
            a.Y("remotePlayerChange")
        },
        USa = function(a, b) {
            if (-1E3 != a.hc.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.hc.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                K8(a.hc, isNaN(b) ? 0 : b);
                a.Y("remotePlayerChange")
            }
        },
        VSa = function(a, b) {
            var c = "true" == b.params.muted;
            a.hc.volume = parseInt(b.params.volume, 10);
            a.hc.muted = c;
            a.Y("remotePlayerChange")
        },
        WSa = function(a, b) {
            a.I = b.params.videoId;
            a.Y("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        XSa = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.hc.Ak = "true" == b.params.hasPrevious;
            a.hc.hasNext = c;
            a.Y("previousNextChange")
        },
        OSa = function(a) {
            g.ht(a.L);
            a.L = g.ft((0, g.D)(a.yr, a, 1), 864E5)
        },
        c9 = function(a, b, c) {
            c ? Y8("Sending: action=" + b + ", params=" + g.Jh(c)) : Y8("Sending: action=" + b);
            a.i.sendMessage(b, c)
        },
        d9 = function(a) {
            W7.call(this, "ScreenServiceProxy");
            this.Ne = a;
            this.i = [];
            this.i.push(this.Ne.$_s("screenChange", (0, g.D)(this.ZO, this)));
            this.i.push(this.Ne.$_s("onlineScreenChange", (0, g.D)(this.IT, this)))
        },
        aTa = function(a, b) {
            XQa();
            if (!e7 || !e7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.P("MDX_CONFIG") || b;
                PQa();
                c7();
                e9 || (e9 = new O7(b ? b.loungeApiHost : void 0), YQa() && (e9.i = "/api/loungedev"));
                f9 || (f9 = g.Ha("yt.mdx.remote.deferredProxies_") || [], g.Ga("yt.mdx.remote.deferredProxies_", f9, void 0));
                YSa();
                var c = g9();
                if (!c) {
                    var d = new f8(e9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ga("yt.mdx.remote.screenService_", d, void 0);
                    c = g9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ga("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1, void 0);
                    BSa(a, d, function(f) {
                        f ? h9() && G8(h9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            R6("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ha("yt.mdx.remote.initialized_") && (g.Ga("yt.mdx.remote.initialized_", !0, void 0), i9("Initializing: " +
                        g.Jh(b)), j9.push(g.Uu("yt-remote-cast2-api-ready", function() {
                        R6("yt-remote-api-ready")
                    })), j9.push(g.Uu("yt-remote-cast2-availability-change", function() {
                        R6("yt-remote-receiver-availability-change")
                    })), j9.push(g.Uu("yt-remote-cast2-receiver-selected", function() {
                        k9(null);
                        R6("yt-remote-auto-connect", "cast-selector-receiver")
                    })), j9.push(g.Uu("yt-remote-cast2-receiver-resumed", function() {
                        R6("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), j9.push(g.Uu("yt-remote-cast2-session-change", ZSa)), j9.push(g.Uu("yt-remote-connection-change", function(f) {
                        f ? G8(h9(), "YouTube TV") : l9() || (G8(null, null), ESa())
                    })), j9.push(g.Uu("yt-remote-cast2-session-failed", function() {
                        R6("yt-remote-connection-failed")
                    })), a = m9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.is("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), i9(" -- with channel params: " + g.Jh(a)), a ? (g.xz("yt-remote-session-app", a.app), g.xz("yt-remote-session-name", a.name)) : (g.Az("yt-remote-session-app"), g.Az("yt-remote-session-name")), g.Ga("yt.mdx.remote.channelParams_", a, void 0), c.start(), h9() || $Sa())
            }
        },
        bTa = function() {
            var a = g9().Ne.$_gos();
            var b = n9();
            b && o9() && (Y6(a, b) || a.push(b));
            return OQa(a)
        },
        p9 = function() {
            var a = cTa();
            !a && D8() && DSa() && (a = {
                key: "cast-selector-receiver",
                name: DSa()
            });
            return a
        },
        cTa = function() {
            var a = bTa(),
                b = n9();
            b || (b = l9());
            return g.fb(a, function(c) {
                return b && U6(b, c.key) ? !0 : !1
            })
        },
        n9 = function() {
            var a = h9();
            if (!a) return null;
            var b = g9().Hh();
            return Z6(b, a)
        },
        ZSa = function(a) {
            i9("remote.onCastSessionChange_: " + V6(a));
            if (a) {
                var b = n9();
                if (b && b.id == a.id) {
                    if (G8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) q9 && (q9.token = a), (b = o9()) && b.Sz(a)
                } else b && r9(), s9(a, 1)
            } else o9() && r9()
        },
        r9 = function() {
            E8() ? B8().stopSession() : z8("stopSession called before API ready.");
            var a = o9();
            a && (a.disconnect(1), t9(null))
        },
        u9 = function() {
            var a = o9();
            return !!a && 3 != a.getProxyState()
        },
        i9 = function(a) {
            S7("remote", a)
        },
        g9 = function() {
            if (!v9) {
                var a = g.Ha("yt.mdx.remote.screenService_");
                v9 = a ? new d9(a) : null
            }
            return v9
        },
        h9 = function() {
            return g.Ha("yt.mdx.remote.currentScreenId_")
        },
        dTa = function(a) {
            g.Ga("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        eTa = function() {
            return g.Ha("yt.mdx.remote.connectData_")
        },
        k9 = function(a) {
            g.Ga("yt.mdx.remote.connectData_", a, void 0)
        },
        o9 = function() {
            return g.Ha("yt.mdx.remote.connection_")
        },
        t9 = function(a) {
            var b = o9();
            k9(null);
            a || dTa("");
            g.Ga("yt.mdx.remote.connection_", a, void 0);
            f9 && (g.Db(f9, function(c) {
                c(a)
            }), f9.length = 0);
            b && !a ? R6("yt-remote-connection-change", !1) : !b && a && R6("yt-remote-connection-change", !0)
        },
        l9 = function() {
            var a = g.Bz();
            if (!a) return null;
            var b = g9();
            if (!b) return null;
            b = b.Hh();
            return Z6(b, a)
        },
        s9 = function(a, b) {
            h9();
            n9() && n9();
            if (w9) q9 = a;
            else {
                dTa(a.id);
                var c = g.Ha("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new X8(e9, a, m9(), c);
                a.connect(b, eTa());
                a.subscribe("beforeDisconnect", function(d) {
                    R6("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    o9() && (o9(), t9(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = n9();
                    d && "shortLived" == d.idType && (E8() ? B8().handleBrowserChannelAuthError() : z8("refreshLoungeToken called before API ready."))
                });
                t9(a)
            }
        },
        $Sa = function() {
            var a = l9();
            a ? (i9("Resume connection to: " + V6(a)), s9(a, 0)) : (d7(), ESa(), i9("Skipping connecting because no session screen found."))
        },
        YSa = function() {
            var a = m9();
            if (g.Vb(a)) {
                a = b7();
                var b = g.yz("yt-remote-session-name") || "",
                    c = g.yz("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ga("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        m9 = function() {
            return g.Ha("yt.mdx.remote.channelParams_") || {}
        },
        x9 = function(a, b, c) {
            g.G.call(this);
            var d = this;
            this.l = a;
            this.G = b;
            this.Qb = c;
            this.events = new g.dN(this);
            this.Z = this.events.N(this.G, "onVolumeChange", function(e) {
                fTa(d, e)
            });
            this.C = !1;
            this.suggestion = null;
            this.I = new g.iK(64);
            this.i = new g.K(this.gM, 500, this);
            this.u = new g.K(this.hM, 1E3, this);
            this.L = new j7(this.vW, 0, this);
            this.B = {};
            this.U = new g.K(this.QM, 1E3, this);
            this.J = new k7(this.seekTo, 1E3, this);
            this.ea = g.Ia;
            g.J(this, this.events);
            this.events.N(b, "onCaptionsTrackListChanged", this.sT);
            this.events.N(b, "captionschanged", this.BS);
            this.events.N(b, "captionssettingschanged", this.nM);
            this.events.N(b, "videoplayerreset", this.oz);
            this.events.N(b, "mdxautoplaycancel", function() {
                d.Qb.vI()
            });
            a = this.Qb;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.gL, this);
            a.subscribe("remotePlayerChange", this.Vv, this);
            a.subscribe("remoteQueueChange", this.oz, this);
            a.subscribe("previousNextChange", this.dL, this);
            a.subscribe("nowAutoplaying", this.XK, this);
            a.subscribe("autoplayDismissed", this.AK, this);
            g.J(this, this.i);
            g.J(this, this.u);
            g.J(this, this.L);
            g.J(this, this.U);
            g.J(this, this.J);
            this.nM();
            this.oz();
            this.Vv()
        },
        fTa = function(a, b) {
            if (y9(a)) {
                a.Qb.unsubscribe("remotePlayerChange", a.Vv, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = Q8(a.Qb);
                if (c !== d.volume || b !== d.muted) a.Qb.setVolume(c, b), a.U.start();
                a.Qb.subscribe("remotePlayerChange", a.Vv, a)
            }
        },
        gTa = function(a) {
            a.Nb(0);
            a.i.stop();
            a.Rb(new g.iK(64))
        },
        z9 = function(a, b) {
            if (y9(a) && !a.C) {
                var c = null;
                b && (c = {
                    style: a.G.getSubtitlesUserSettings()
                }, g.dc(c, b));
                a.Qb.KG(a.G.getVideoData(1).videoId, c);
                a.B = Q8(a.Qb).trackData
            }
        },
        A9 = function(a, b) {
            var c = a.G.getPlaylist();
            if (null === c || void 0 === c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.G.getVideoData(1);
            a.Qb.playVideo(c.videoId, b, d, e, c.playerParams, c.Sa, EQa(c));
            a.Rb(new g.iK(1))
        },
        hTa = function(a, b) {
            if (b) {
                var c = a.G.getOption("captions", "tracklist", {
                    vJ: 1
                });
                c && c.length ? (a.G.setOption("captions", "track", b), a.C = !1) : (a.G.loadModule("captions"), a.C = !0)
            } else a.G.setOption("captions", "track", {})
        },
        y9 = function(a) {
            return Q8(a.Qb).videoId === a.G.getVideoData(1).videoId
        },
        B9 = function() {
            g.W.call(this, {
                D: "div",
                K: "ytp-mdx-manual-pairing-popup-dialog",
                V: {
                    role: "dialog"
                },
                S: [{
                    D: "div",
                    K: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
                    S: [{
                        D: "div",
                        K: "ytp-mdx-manual-pairing-popup-title",
                        ra: "Connecting to your TV on web using a code will be going away soon"
                    }, {
                        D: "div",
                        K: "ytp-mdx-manual-pairing-popup-buttons",
                        S: [{
                            D: "button",
                            Fa: ["ytp-button", "ytp-mdx-manual-pairing-popup-learn-more"],
                            ra: "Learn more"
                        }, {
                            D: "button",
                            Fa: ["ytp-button", "ytp-mdx-manual-pairing-popup-ok"],
                            ra: "OK"
                        }]
                    }]
                }]
            });
            this.i = new g.OL(this, 250);
            this.learnMoreButton =
                this.Da("ytp-mdx-manual-pairing-popup-learn-more");
            this.okButton = this.Da("ytp-mdx-manual-pairing-popup-ok");
            g.J(this, this.i);
            this.N(this.learnMoreButton, "click", this.l);
            this.N(this.okButton, "click", this.u)
        },
        C9 = function() {
            g.W.call(this, {
                D: "div",
                K: "ytp-mdx-popup-dialog",
                V: {
                    role: "dialog"
                },
                S: [{
                    D: "div",
                    K: "ytp-mdx-popup-dialog-inner-content",
                    S: [{
                        D: "div",
                        K: "ytp-mdx-popup-title",
                        ra: "You're signed out"
                    }, {
                        D: "div",
                        K: "ytp-mdx-popup-description",
                        ra: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        D: "div",
                        K: "ytp-mdx-privacy-popup-buttons",
                        S: [{
                            D: "button",
                            Fa: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ra: "Cancel"
                        }, {
                            D: "button",
                            Fa: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ra: "Confirm"
                        }]
                    }]
                }]
            });
            this.i = new g.OL(this, 250);
            this.cancelButton = this.Da("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Da("ytp-mdx-privacy-popup-confirm");
            g.J(this, this.i);
            this.N(this.cancelButton, "click", this.l);
            this.N(this.confirmButton, "click", this.u)
        },
        D9 = function(a) {
            g.W.call(this, {
                D: "div",
                K: "ytp-remote",
                S: [{
                    D: "div",
                    K: "ytp-remote-display-status",
                    S: [{
                        D: "div",
                        K: "ytp-remote-display-status-icon",
                        S: [g.Jra()]
                    }, {
                        D: "div",
                        K: "ytp-remote-display-status-text",
                        ra: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.i = new g.OL(this, 250);
            g.J(this, this.i);
            this.N(a, "presentingplayerstatechange", this.l);
            iTa(this, a.ub())
        },
        iTa = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.V(b, 128) ? g.HI("Error on $RECEIVER_NAME", c) : b.xc() || g.V(b, 4) ? g.HI("Playing on $RECEIVER_NAME", c) : g.HI("Connected to $RECEIVER_NAME", c);
                a.Ta("statustext", b);
                a.i.show()
            } else a.i.hide()
        },
        E9 = function(a, b) {
            g.eQ.call(this, "Play on", 0, a, b);
            this.G = a;
            this.Tn = {};
            this.N(a, "onMdxReceiversChange", this.C);
            this.N(a, "presentingplayerstatechange", this.C);
            this.C()
        },
        F9 = function(a) {
            g.nN.call(this, a);
            this.nj = {
                key: X6(),
                name: "This computer"
            };
            this.yh = null;
            this.subscriptions = [];
            this.tE = this.Qb = null;
            this.Tn = [this.nj];
            this.Pm = this.nj;
            this.od = new g.iK(64);
            this.TJ = 0;
            this.mf = -1;
            this.hs = null;
            this.bw = this.Ny = !1;
            this.em = this.Cs = null;
            if (!g.wF(this.player.T()) && !g.xF(this.player.T())) {
                a = this.player;
                var b = g.RM(a);
                b && (b = b.qn()) && (b = new E9(a, b), g.J(this, b));
                b = new D9(a);
                g.J(this, b);
                g.aN(a, b.element, 4);
                this.Cs = new C9;
                g.J(this, this.Cs);
                g.aN(a, this.Cs.element, 4);
                g.T(this.player.T().experiments, "pair_servlet_deprecation_warning_enabled") &&
                    !g.T(this.player.T().experiments, "deprecate_pair_servlet_enabled") && (this.hs = new B9, g.J(this, this.hs), g.aN(a, this.hs.element, 4));
                this.bw = !!l9();
                this.Ny = !!g.yz("yt-remote-manual-pairing-warning-shown")
            }
        },
        G9 = function(a) {
            a.em && (a.player.removeEventListener("presentingplayerstatechange", a.em), a.em = null)
        },
        jTa = function(a, b, c) {
            a.od = c;
            a.player.Y("presentingplayerstatechange", new g.tI(c, b))
        },
        kTa = function(a, b, c) {
            var d = !1;
            1 === b ? d = !a.bw : 2 === b && (d = !a.Ny);
            d && g.vI(c, 8) && (a.player.pauseVideo(), G9(a))
        },
        H9 = function(a, b) {
            if (b.key !== a.Pm.key)
                if (b.key === a.nj.key) r9();
                else {
                    if (a.hs && !a.Ny && b !== a.nj && "cast-selector-receiver" !== b.key && g.OF(a.player.T())) lTa(a);
                    else {
                        var c;
                        (c = !g.T(a.player.T().experiments, "mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.P("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.P("SESSION_INDEX") && !g.P("LOGGED_IN"))) || a.bw || !a.Cs);
                        (c ? 0 : g.OF(a.player.T()) || g.RF(a.player.T())) && mTa(a)
                    }
                    a.Pm = b;
                    if (!a.player.T().X("disable_mdx_connection_in_mdx_module_for_music_web") || !g.xF(a.player.T())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e = c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && g.T(a.player.T().experiments, "should_clear_video_data_on_player_cued_unstarted")) a = null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var h = [];
                                for (var l = 0; l < f.length; l++) h[l] = g.jN(f, l).videoId
                            } else h = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: h,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.Sa,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = EQa(c)) && (a.locationInfo = c)
                        }
                        i9("Connecting to: " +
                            g.Jh(b));
                        "cast-selector-receiver" == b.key ? (k9(a || null), b = a || null, E8() ? B8().setLaunchParams(b) : z8("setLaunchParams called before ready.")) : !a && u9() && h9() == b.key ? R6("yt-remote-connection-change", !0) : (r9(), k9(a || null), a = g9().Hh(), (b = Z6(a, b.key)) && s9(b, 1))
                    }
                }
        },
        mTa = function(a) {
            a.player.ub().xc() ? a.player.pauseVideo() : (a.em = function(b) {
                kTa(a, 1, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.em));
            a.Cs && a.Cs.bd();
            o9() || (w9 = !0)
        },
        lTa = function(a) {
            a.player.ub().xc() ? a.player.pauseVideo() : (a.em = function(b) {
                kTa(a, 2, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.em));
            a.hs && a.hs.bd();
            o9() || (w9 = !0)
        },
        mRa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        w7 = {
            "'": "\\'"
        },
        KQa = {
            uX: "atp",
            H7: "ska",
            w6: "que",
            F4: "mus",
            G7: "sus",
            O0: "dsp",
            R6: "seq",
            i4: "mic",
            L_: "dpa",
            IX: "cds",
            D4: "mlm"
        },
        e7, a7 = "",
        dRa = ZQa("loadCastFramework") || ZQa("loadCastApplicationFramework"),
        fRa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Ra(j7, g.G);
    g.k = j7.prototype;
    g.k.NO = function(a) {
        this.B = arguments;
        this.i = !1;
        this.Jb ? this.u = g.Qa() + this.Nf : this.Jb = g.lh(this.C, this.Nf)
    };
    g.k.stop = function() {
        this.Jb && (g.C.clearTimeout(this.Jb), this.Jb = null);
        this.u = null;
        this.i = !1;
        this.B = []
    };
    g.k.pause = function() {
        ++this.l
    };
    g.k.resume = function() {
        this.l && (--this.l, !this.l && this.i && (this.i = !1, this.I.apply(null, this.B)))
    };
    g.k.va = function() {
        this.stop();
        j7.Xd.va.call(this)
    };
    g.k.OO = function() {
        this.Jb && (g.C.clearTimeout(this.Jb), this.Jb = null);
        this.u ? (this.Jb = g.lh(this.C, this.u - g.Qa()), this.u = null) : this.l ? this.i = !0 : (this.i = !1, this.I.apply(null, this.B))
    };
    g.w(k7, g.G);
    g.k = k7.prototype;
    g.k.FG = function(a) {
        this.u = arguments;
        this.Jb || this.l ? this.i = !0 : l7(this)
    };
    g.k.stop = function() {
        this.Jb && (g.C.clearTimeout(this.Jb), this.Jb = null, this.i = !1, this.u = null)
    };
    g.k.pause = function() {
        this.l++
    };
    g.k.resume = function() {
        this.l--;
        this.l || !this.i || this.Jb || (this.i = !1, l7(this))
    };
    g.k.va = function() {
        g.G.prototype.va.call(this);
        this.stop()
    };
    m7.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    m7.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    var o7 = new g.Mf;
    g.w(hRa, g.mf);
    g.k = q7.prototype;
    g.k.Eo = null;
    g.k.qm = !1;
    g.k.Zs = null;
    g.k.IF = null;
    g.k.Hs = null;
    g.k.Ss = null;
    g.k.Im = null;
    g.k.Wn = null;
    g.k.bq = null;
    g.k.If = null;
    g.k.vA = 0;
    g.k.Hj = null;
    g.k.rA = null;
    g.k.Em = null;
    g.k.Jt = -1;
    g.k.WL = !0;
    g.k.Wo = !1;
    g.k.iB = 0;
    g.k.Gz = null;
    var kRa = {},
        t7 = {};
    g.k = q7.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.PO = function(a) {
        a = a.target;
        var b = this.Gz;
        b && 3 == g.Fi(a) ? b.FG() : this.XM(a)
    };
    g.k.XM = function(a) {
        try {
            if (a == this.If) a: {
                var b = g.Fi(this.If),
                    c = this.If.l,
                    d = this.If.getStatus();
                if (g.ke && !g.ce(10) || g.ng && !g.be("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Ki(this.If)) break a;this.Wo || 4 != b || 7 == c || (8 == c || 0 >= d ? this.i.rj(3) : this.i.rj(2));x7(this);
                var e = this.If.getStatus();this.Jt = e;
                var f = g.Ki(this.If);
                if (this.qm = 200 == e) {
                    4 == b && u7(this);
                    if (this.C) {
                        for (a = !0; !this.Wo && this.vA < f.length;) {
                            var h = lRa(this, f);
                            if (h == t7) {
                                4 == b && (this.Em = 4, p7(15), a = !1);
                                break
                            } else if (h == kRa) {
                                this.Em = 4;
                                p7(16);
                                a = !1;
                                break
                            } else y7(this, h)
                        }
                        4 == b && 0 == f.length && (this.Em = 1, p7(17), a = !1);
                        this.qm = this.qm && a;
                        a || (u7(this), v7(this))
                    } else y7(this, f);
                    this.qm && !this.Wo && (4 == b ? this.i.bx(this) : (this.qm = !1, s7(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Em = 3, p7(13)) : (this.Em = 0, p7(14)),
                u7(this),
                v7(this)
            }
        } catch (l) {
            this.If && g.Ki(this.If)
        } finally {}
    };
    g.k.bV = function(a) {
        n7((0, g.D)(this.aV, this, a), 0)
    };
    g.k.aV = function(a) {
        this.Wo || (x7(this), y7(this, a), s7(this))
    };
    g.k.oL = function(a) {
        n7((0, g.D)(this.ZU, this, a), 0)
    };
    g.k.ZU = function(a) {
        this.Wo || (u7(this), this.qm = a, this.i.bx(this), this.i.rj(4))
    };
    g.k.cancel = function() {
        this.Wo = !0;
        u7(this)
    };
    g.k.iV = function() {
        this.Zs = null;
        var a = Date.now();
        0 <= a - this.IF ? (2 != this.Ss && this.i.rj(3), u7(this), this.Em = 2, p7(18), v7(this)) : oRa(this, this.IF - a)
    };
    g.k.getLastError = function() {
        return this.Em
    };
    g.k = rRa.prototype;
    g.k.jB = null;
    g.k.nh = null;
    g.k.Hz = !1;
    g.k.iM = null;
    g.k.Jx = null;
    g.k.xD = null;
    g.k.kB = null;
    g.k.Qa = null;
    g.k.Yk = -1;
    g.k.Kt = null;
    g.k.au = null;
    g.k.connect = function(a) {
        this.kB = a;
        a = A7(this.i, null, this.kB);
        p7(3);
        this.iM = Date.now();
        var b = this.i.J;
        null != b ? (this.Kt = b[0], (this.au = b[1]) ? (this.Qa = 1, sRa(this)) : (this.Qa = 2, C7(this))) : (O6(a, "MODE", "init"), this.nh = new q7(this, void 0, void 0, void 0), this.nh.Eo = this.jB, r7(this.nh, a, !1, null, !0), this.Qa = 0)
    };
    g.k.JP = function(a) {
        if (a) this.Qa = 2, C7(this);
        else {
            p7(4);
            var b = this.i;
            b.Wj = b.Nm.Yk;
            J7(b, 9)
        }
        a && this.rj(2)
    };
    g.k.mC = function(a) {
        return this.i.mC(a)
    };
    g.k.abort = function() {
        this.nh && (this.nh.cancel(), this.nh = null);
        this.Yk = -1
    };
    g.k.jf = function() {
        return !1
    };
    g.k.hL = function(a, b) {
        this.Yk = a.Jt;
        if (0 == this.Qa)
            if (b) {
                try {
                    var c = this.l.parse(b)
                } catch (d) {
                    a = this.i;
                    a.Wj = this.Yk;
                    J7(a, 2);
                    return
                }
                this.Kt = c[0];
                this.au = c[1]
            } else a = this.i, a.Wj = this.Yk, J7(a, 2);
        else if (2 == this.Qa)
            if (this.Hz) p7(7), this.xD = Date.now();
            else if ("11111" == b) {
            if (p7(6), this.Hz = !0, this.Jx = Date.now(), a = this.Jx - this.iM, !g.ke || g.ce(10) || 500 > a) this.Yk = 200, this.nh.cancel(), p7(12), B7(this.i, this, !0)
        } else p7(8), this.Jx = this.xD = Date.now(), this.Hz = !1
    };
    g.k.bx = function() {
        this.Yk = this.nh.Jt;
        if (this.nh.qm) 0 == this.Qa ? this.au ? (this.Qa = 1, sRa(this)) : (this.Qa = 2, C7(this)) : 2 == this.Qa && ((!g.ke || g.ce(10) ? !this.Hz : 200 > this.xD - this.Jx) ? (p7(11), B7(this.i, this, !1)) : (p7(12), B7(this.i, this, !0)));
        else {
            0 == this.Qa ? p7(9) : 2 == this.Qa && p7(10);
            var a = this.i;
            this.nh.getLastError();
            a.Wj = this.Yk;
            J7(a, 2)
        }
    };
    g.k.Aw = function() {
        return this.i.Aw()
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.rj = function(a) {
        this.i.rj(a)
    };
    g.k = D7.prototype;
    g.k.Vj = null;
    g.k.Gu = null;
    g.k.Ug = null;
    g.k.Ce = null;
    g.k.lB = null;
    g.k.Kx = null;
    g.k.MH = null;
    g.k.dx = null;
    g.k.Jv = 0;
    g.k.TR = 0;
    g.k.Jf = null;
    g.k.Wm = null;
    g.k.vl = null;
    g.k.ip = null;
    g.k.Nm = null;
    g.k.pA = null;
    g.k.Wr = -1;
    g.k.SJ = -1;
    g.k.Wj = -1;
    g.k.Dr = 0;
    g.k.dr = 0;
    g.k.Xo = 8;
    g.Ra(uRa, g.mf);
    g.Ra(vRa, g.mf);
    g.k = D7.prototype;
    g.k.connect = function(a, b, c, d, e) {
        p7(0);
        this.lB = b;
        this.Gu = c || {};
        d && void 0 !== e && (this.Gu.OSID = d, this.Gu.OAID = e);
        this.C ? (n7((0, g.D)(this.gI, this, a), 100), zRa(this)) : this.gI(a)
    };
    g.k.gI = function(a) {
        this.Nm = new rRa(this);
        this.Nm.jB = this.Vj;
        this.Nm.l = this.B;
        this.Nm.connect(a)
    };
    g.k.jf = function() {
        return 0 == this.Qa
    };
    g.k.getState = function() {
        return this.Qa
    };
    g.k.mL = function(a) {
        this.Wm = null;
        DRa(this, a)
    };
    g.k.lL = function() {
        this.vl = null;
        this.Ce = new q7(this, this.l, "rpc", this.I);
        this.Ce.Eo = this.Vj;
        this.Ce.iB = 0;
        var a = this.MH.clone();
        g.rk(a, "RID", "rpc");
        g.rk(a, "SID", this.l);
        g.rk(a, "CI", this.pA ? "0" : "1");
        g.rk(a, "AID", this.Wr);
        E7(this, a);
        if (!g.ke || g.ce(10)) g.rk(a, "TYPE", "xmlhttp"), r7(this.Ce, a, !0, this.dx, !1);
        else {
            g.rk(a, "TYPE", "html");
            var b = this.Ce,
                c = !!this.dx;
            b.Ss = 3;
            b.Im = N6(a.clone());
            nRa(b, c)
        }
    };
    g.k.hL = function(a, b) {
        if (0 != this.Qa && (this.Ce == a || this.Ug == a))
            if (this.Wj = a.Jt, this.Ug == a && 3 == this.Qa)
                if (7 < this.Xo) {
                    try {
                        var c = this.B.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.vl) {
                                if (this.Ce)
                                    if (this.Ce.Hs + 3E3 < this.Ug.Hs) G7(this), this.Ce.cancel(), this.Ce = null;
                                    else break a;
                                I7(this);
                                p7(19)
                            }
                        }
                    else this.SJ = a[1], 0 < this.SJ - this.Wr && 37500 > a[2] && this.pA && 0 == this.dr && !this.ip && (this.ip = n7((0, g.D)(this.yS, this), 6E3));
                    else J7(this, 11)
                } else null != b && J7(this, 11);
        else if (this.Ce ==
            a && G7(this), !g.vc(b))
            for (a = this.B.parse(b), b = 0; b < a.length; b++) c = a[b], this.Wr = c[0], c = c[1], 2 == this.Qa ? "c" == c[0] ? (this.l = c[1], this.dx = c[2], c = c[3], null != c ? this.Xo = c : this.Xo = 6, this.Qa = 3, this.Jf && this.Jf.cI(), this.MH = A7(this, this.Aw() ? this.dx : null, this.lB), ERa(this)) : "stop" == c[0] && J7(this, 7) : 3 == this.Qa && ("stop" == c[0] ? J7(this, 7) : "noop" != c[0] && this.Jf && this.Jf.bI(c), this.dr = 0)
    };
    g.k.yS = function() {
        null != this.ip && (this.ip = null, this.Ce.cancel(), this.Ce = null, I7(this), p7(20))
    };
    g.k.bx = function(a) {
        if (this.Ce == a) {
            G7(this);
            this.Ce = null;
            var b = 2
        } else if (this.Ug == a) this.Ug = null, b = 1;
        else return;
        this.Wj = a.Jt;
        if (0 != this.Qa)
            if (a.qm)
                if (1 == b) {
                    b = Date.now() - a.Hs;
                    var c = o7;
                    c.dispatchEvent(new uRa(c, a.bq ? a.bq.length : 0, b, this.Dr));
                    F7(this);
                    this.u.length = 0
                } else ERa(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Wj)) {
                if (d = 1 == b) this.Ug || this.Wm || 1 == this.Qa || 2 <= this.Dr ? d = !1 : (this.Wm = n7((0, g.D)(this.mL, this, a), FRa(this, this.Dr)), this.Dr++, d = !0);
                d = !(d || 2 == b && I7(this))
            }
            if (d) switch (c) {
                case 1:
                    J7(this,
                        5);
                    break;
                case 4:
                    J7(this, 10);
                    break;
                case 3:
                    J7(this, 6);
                    break;
                case 7:
                    J7(this, 12);
                    break;
                default:
                    J7(this, 2)
            }
        }
    };
    g.k.jQ = function(a) {
        if (!g.jb(arguments, this.Qa)) throw Error("Unexpected channel state: " + this.Qa);
    };
    g.k.eW = function(a) {
        a ? p7(2) : (p7(1), GRa(this, 8))
    };
    g.k.mC = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.zi;
        a.L = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Jf && this.Jf.isActive(this)
    };
    g.k.rj = function(a) {
        var b = o7;
        b.dispatchEvent(new vRa(b, a))
    };
    g.k.Aw = function() {
        return !(!g.ke || g.ce(10))
    };
    g.k = HRa.prototype;
    g.k.cI = function() {};
    g.k.bI = function() {};
    g.k.aI = function() {};
    g.k.ZB = function() {};
    g.k.MI = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = IRa.prototype;
    g.k.isEmpty = function() {
        return 0 === this.i.length && 0 === this.l.length
    };
    g.k.clear = function() {
        this.i = [];
        this.l = []
    };
    g.k.contains = function(a) {
        return g.jb(this.i, a) || g.jb(this.l, a)
    };
    g.k.remove = function(a) {
        var b = this.i;
        var c = (0, g.HKa)(b, a);
        0 <= c ? (g.nb(b, c), b = !0) : b = !1;
        return b || g.ob(this.l, a)
    };
    g.k.Xg = function() {
        for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
        var c = this.l.length;
        for (b = 0; b < c; ++b) a.push(this.l[b]);
        return a
    };
    g.Ra(K7, g.G);
    g.k = K7.prototype;
    g.k.TU = function() {
        this.Nf = Math.min(3E5, 2 * this.Nf);
        this.u();
        this.l && this.start()
    };
    g.k.start = function() {
        var a = this.Nf + 15E3 * Math.random();
        g.Eq(this.i, a);
        this.l = Date.now() + a
    };
    g.k.stop = function() {
        this.i.stop();
        this.l = 0
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.reset = function() {
        this.i.stop();
        this.Nf = 5E3
    };
    g.Ra(L7, HRa);
    g.k = L7.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.u.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.u.unsubscribe(a, b, c)
    };
    g.k.Uf = function(a) {
        return this.u.Uf(a)
    };
    g.k.Y = function(a, b) {
        return this.u.Y.apply(this.u, arguments)
    };
    g.k.dispose = function() {
        this.Z || (this.Z = !0, g.ff(this.u), LRa(this), g.ff(this.l), this.l = null, this.ea = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.Z
    };
    g.k.connect = function(a, b, c) {
        if (!this.i || 2 != this.i.getState()) {
            this.U = "";
            this.l.stop();
            this.C = a || null;
            this.B = b || 0;
            a = this.xa + "/test";
            b = this.xa + "/bind";
            var d = new D7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.ya),
                e = this.i;
            e && (e.Jf = null);
            d.Jf = this;
            this.i = d;
            M7(this);
            if (this.i) {
                d = g.P("ID_TOKEN");
                var f = this.i.Vj || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.i.Vj = f
            }
            e ? (3 != e.getState() && 0 == BRa(e) || e.getState(), this.i.connect(a, b, this.I, e.l, e.Wr)) : c ? this.i.connect(a,
                b, this.I, c.sessionId, c.arrayId) : this.i.connect(a, b, this.I)
        }
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.dc(a, b);
        this.l.isActive() || 2 == (this.i ? this.i.getState() : 0) ? this.J.push(a) : N7(this) && (M7(this), ARa(this.i, a))
    };
    g.k.cI = function() {
        this.l.reset();
        this.C = null;
        this.B = 0;
        if (this.J.length) {
            var a = this.J;
            this.J = [];
            for (var b = 0, c = a.length; b < c; ++b) ARa(this.i, a[b])
        }
        this.Y("handlerOpened")
    };
    g.k.aI = function(a) {
        var b = 2 == a && 401 == this.i.Wj;
        4 == a || b || this.l.start();
        this.Y("handlerError", a, b)
    };
    g.k.ZB = function(a) {
        if (!this.l.isActive()) this.Y("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.J.push(d)
            }
    };
    g.k.MI = function() {
        var a = {
            v: 2
        };
        this.U && (a.gsessionid = this.U);
        0 != this.B && (a.ui = "" + this.B);
        0 != this.L && (a.ui = "" + this.L);
        this.C && g.dc(a, this.C);
        return a
    };
    g.k.bI = function(a) {
        "S" == a[0] ? this.U = a[1] : "gracefulReconnect" == a[0] ? (this.l.start(), yRa(this.i)) : this.Y("handlerMessage", new JRa(a[0], a[1]))
    };
    g.k.Sz = function(a) {
        (this.I.loungeIdToken = a) || this.l.stop();
        if (this.Aa && this.i) {
            var b = this.i.Vj || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.i.Vj = b
        }
    };
    g.k.JV = function() {
        this.l.isActive();
        0 == BRa(this.i) && this.connect(this.C, this.B)
    };
    O7.prototype.B = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    O7.prototype.u = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    O7.prototype.C = function(a) {
        a(Error("request timed out"))
    };
    var SRa = Date.now(),
        R7 = null,
        U7 = Array(50),
        T7 = -1,
        V7 = !1;
    g.Ra(W7, g.R);
    W7.prototype.Hh = function() {
        return this.screens
    };
    W7.prototype.contains = function(a) {
        return !!Y6(this.screens, a)
    };
    W7.prototype.get = function(a) {
        return a ? Z6(this.screens, a) : null
    };
    W7.prototype.info = function(a) {
        S7(this.I, a)
    };
    g.w(X7, g.R);
    g.k = X7.prototype;
    g.k.start = function() {
        !this.i && isNaN(this.Jb) && this.vL()
    };
    g.k.stop = function() {
        this.i && (this.i.abort(), this.i = null);
        isNaN(this.Jb) || (g.ht(this.Jb), this.Jb = NaN)
    };
    g.k.va = function() {
        this.stop();
        g.R.prototype.va.call(this)
    };
    g.k.vL = function() {
        this.Jb = NaN;
        this.i = g.mt(P7(this.u, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.J
            },
            timeout: 5E3,
            onSuccess: (0, g.D)(this.RO, this),
            onError: (0, g.D)(this.QO, this),
            onTimeout: (0, g.D)(this.SO, this)
        })
    };
    g.k.RO = function(a, b) {
        this.i = null;
        a = b.screen || {};
        a.dialId = this.B;
        a.name = this.I;
        b = -1;
        this.C && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.Y("pairingComplete", new T6(a), b)
    };
    g.k.QO = function(a) {
        this.i = null;
        a.status && 404 == a.status ? this.l >= nTa.length ? this.Y("pairingFailed", Error("DIAL polling timed out")) : (a = nTa[this.l], this.Jb = g.ft((0, g.D)(this.vL, this), a), this.l++) : this.Y("pairingFailed", Error("Server error " + a.status))
    };
    g.k.SO = function() {
        this.i = null;
        this.Y("pairingFailed", Error("Server not responding"))
    };
    var nTa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ra(Z7, W7);
    g.k = Z7.prototype;
    g.k.start = function() {
        Y7(this) && this.Y("screenChange");
        !g.yz("yt-remote-lounge-token-expiration") && WRa(this);
        g.ht(this.i);
        this.i = g.ft((0, g.D)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        Y7(this);
        TRa(this, a);
        $7(this, !1);
        this.Y("screenChange");
        b(a);
        a.token || WRa(this)
    };
    g.k.remove = function(a, b) {
        var c = Y7(this);
        VRa(this, a) && ($7(this, !1), c = !0);
        b(a);
        c && this.Y("screenChange")
    };
    g.k.nA = function(a, b, c, d) {
        var e = Y7(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, $7(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.Y("screenChange")
    };
    g.k.va = function() {
        g.ht(this.i);
        Z7.Xd.va.call(this)
    };
    g.k.IQ = function(a) {
        Y7(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        $7(this, !b);
        b && S7(this.I, "Missed " + b + " lounge tokens.")
    };
    g.k.HQ = function(a) {
        S7(this.I, "Requesting lounge tokens failed: " + a)
    };
    g.w(b8, g.R);
    g.k = b8.prototype;
    g.k.start = function() {
        var a = parseInt(g.yz("yt-remote-fast-check-period") || "0", 10);
        (this.B = g.Qa() - 144E5 < a ? 0 : a) ? e8(this): (this.B = g.Qa() + 3E5, g.xz("yt-remote-fast-check-period", this.B), this.DE())
    };
    g.k.isEmpty = function() {
        return g.Vb(this.i)
    };
    g.k.update = function() {
        a8("Updating availability on schedule.");
        var a = this.I(),
            b = g.Hb(this.i, function(c, d) {
                return c && !!Z6(a, d)
            }, this);
        d8(this, b)
    };
    g.k.va = function() {
        g.ht(this.u);
        this.u = NaN;
        this.l && (this.l.abort(), this.l = null);
        g.R.prototype.va.call(this)
    };
    g.k.DE = function() {
        g.ht(this.u);
        this.u = NaN;
        this.l && this.l.abort();
        var a = YRa(this);
        if (P6(a)) {
            var b = P7(this.C, "/pairing/get_screen_availability");
            this.l = Q7(this.C, b, {
                lounge_token: g.Ob(a).join(",")
            }, (0, g.D)(this.AU, this, a), (0, g.D)(this.zU, this))
        } else d8(this, {}), e8(this)
    };
    g.k.AU = function(a, b) {
        this.l = null;
        var c = g.Ob(YRa(this));
        if (g.Bb(c, g.Ob(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            d8(this, c);
            e8(this)
        } else this.Yd("Changing Screen set during request."), this.DE()
    };
    g.k.zU = function(a) {
        this.Yd("Screen availability failed: " + a);
        this.l = null;
        e8(this)
    };
    g.k.Yd = function(a) {
        S7("OnlineScreenService", a)
    };
    g.Ra(f8, W7);
    g.k = f8.prototype;
    g.k.start = function() {
        this.l.start();
        this.i.start();
        this.screens.length && (this.Y("screenChange"), this.i.isEmpty() || this.Y("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.l.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.l.remove(a, b, c);
        this.i.update()
    };
    g.k.nA = function(a, b, c, d) {
        this.l.contains(a) ? this.l.nA(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, S7(this.I, a), d(Error(a)))
    };
    g.k.Hh = function(a) {
        return a ? this.screens : g.qb(this.screens, g.Ho(this.u, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.GG = function() {
        return g.Ho(this.Hh(!0), function(a) {
            return !!this.i.i[a.id]
        }, this)
    };
    g.k.HG = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new X7(this.B, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.ff(l);
            e(g8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.ff(l);
            f(m)
        });
        l.start();
        return (0, g.D)(l.stop, l)
    };
    g.k.TO = function(a, b, c, d) {
        g.mt(P7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.D)(function(e, f) {
                e = new T6(f.screen || {});
                if (!e.name || bSa(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); bSa(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(g8(this, e))
            }, this),
            onError: (0, g.D)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.D)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.va = function() {
        g.ff(this.l);
        g.ff(this.i);
        f8.Xd.va.call(this)
    };
    g.k.RQ = function() {
        dSa(this);
        this.Y("screenChange");
        this.i.update()
    };
    f8.prototype.dispose = f8.prototype.dispose;
    g.Ra(i8, g.R);
    g.k = i8.prototype;
    g.k.getScreen = function() {
        return this.B
    };
    g.k.rg = function(a) {
        this.isDisposed() || (a && (k8(this, "" + a), this.Y("sessionFailed")), this.B = null, this.Y("sessionScreen", null))
    };
    g.k.info = function(a) {
        S7(this.Aa, a)
    };
    g.k.IG = function() {
        return null
    };
    g.k.RE = function(a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.D)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.D)(function() {
            k8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.va = function() {
        this.RE("");
        i8.Xd.va.call(this)
    };
    g.w(l8, i8);
    g.k = l8.prototype;
    g.k.QE = function(a) {
        if (this.l) {
            if (this.l == a) return;
            k8(this, "Overriding cast session with new session object");
            mSa(this);
            this.xa = !1;
            this.U = "unknown";
            this.l.removeUpdateListener(this.ea);
            this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya)
        }
        this.l = a;
        this.l.addUpdateListener(this.ea);
        this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya);
        iSa(this, "getMdxSessionStatus")
    };
    g.k.Xr = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Jh(a))
    };
    g.k.stop = function() {
        this.l ? this.l.stop((0, g.D)(function() {
            this.rg()
        }, this), (0, g.D)(function() {
            this.rg(Error("Failed to stop receiver app."))
        }, this)) : this.rg(Error("Stopping cast device without session."))
    };
    g.k.RE = function() {};
    g.k.va = function() {
        this.info("disposeInternal");
        mSa(this);
        this.l && (this.l.removeUpdateListener(this.ea), this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya));
        this.l = null;
        i8.prototype.va.call(this)
    };
    g.k.lV = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = Q6(b), g.Ma(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Jh(b)), a) {
                    case "mdxSessionStatus":
                        gSa(this, b);
                        break;
                    case "loungeToken":
                        jSa(this, b);
                        break;
                    default:
                        k8(this, "Unknown youtube message: " + a)
                } else k8(this, "Unable to parse message.");
                else k8(this, "No data in message.")
    };
    g.k.aJ = function(a, b, c, d) {
        g.ht(this.L);
        this.L = 0;
        aSa(this.u, this.i.label, a, this.i.friendlyName, (0, g.D)(function(e) {
            e ? b(e) : 0 <= d ? (k8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.L = g.ft((0, g.D)(this.aJ, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.IG = function() {
        return this.l
    };
    g.k.UO = function(a) {
        this.isDisposed() || a || (k8(this, "Cast session died."), this.rg())
    };
    g.w(o8, i8);
    g.k = o8.prototype;
    g.k.QE = function(a) {
        this.l = a;
        this.l.addUpdateListener(this.Ga)
    };
    g.k.Xr = function(a) {
        this.Ka = a;
        this.Z()
    };
    g.k.stop = function() {
        tSa(this);
        this.l ? this.l.stop((0, g.D)(this.rg, this, null), (0, g.D)(this.rg, this, "Failed to stop DIAL device.")) : this.rg()
    };
    g.k.va = function() {
        tSa(this);
        this.l && this.l.removeUpdateListener(this.Ga);
        this.l = null;
        i8.prototype.va.call(this)
    };
    g.k.VO = function(a) {
        this.isDisposed() || a || (k8(this, "DIAL session died."), this.C(), this.C = g.Ia, this.rg())
    };
    g.w(s8, i8);
    s8.prototype.stop = function() {
        this.rg()
    };
    s8.prototype.QE = function() {};
    s8.prototype.Xr = function() {
        g.ht(this.l);
        this.l = NaN;
        var a = Z6(this.u.Hh(), this.i.label);
        a ? j8(this, a) : this.rg(Error("No such screen"))
    };
    s8.prototype.va = function() {
        g.ht(this.l);
        this.l = NaN;
        i8.prototype.va.call(this)
    };
    g.w(t8, g.R);
    g.k = t8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.L);
        this.U || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.I ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.D)(this.kU, this);
        c = new chrome.cast.ApiConfig(c, (0, g.D)(this.iL, this), e, d, a);
        c.customDialLaunchCallback = (0, g.D)(this.VS, this);
        chrome.cast.initialize(c, (0, g.D)(function() {
            this.isDisposed() ||
                (chrome.cast.addReceiverActionListener(this.C), PRa(), this.l.subscribe("onlineScreenChange", (0, g.D)(this.JG, this)), this.u = wSa(this), chrome.cast.setCustomReceivers(this.u, g.Ia, (0, g.D)(function(f) {
                    this.Yd("Failed to set initial custom receivers: " + g.Jh(f))
                }, this)), this.Y("yt-remote-cast2-availability-change", v8(this)), b(!0))
        }, this), (0, g.D)(function(f) {
            this.Yd("Failed to initialize API: " + g.Jh(f));
            b(!1)
        }, this))
    };
    g.k.OV = function(a, b) {
        u8("Setting connected screen ID: " + a + " -> " + b);
        if (this.i) {
            var c = this.i.getScreen();
            if (!a || c && c.id != a) u8("Unsetting old screen status: " + this.i.i.friendlyName), w8(this, null)
        }
        if (a && b) {
            if (!this.i) {
                c = Z6(this.l.Hh(), a);
                if (!c) {
                    u8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    u8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = uSa(this, c);
                a || (u8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.u.push(a), chrome.cast.setCustomReceivers(this.u, g.Ia, (0, g.D)(function(d) {
                    this.Yd("Failed to set initial custom receivers: " + g.Jh(d))
                }, this)));
                u8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                w8(this, new s8(this.l, a), !0)
            }
            this.i.RE(b)
        } else u8("setConnectedScreenStatus: no screen.")
    };
    g.k.PV = function(a) {
        this.isDisposed() ? this.Yd("Setting connection data on disposed cast v2") : this.i ? this.i.Xr(a) : this.Yd("Setting connection data without a session")
    };
    g.k.XO = function() {
        this.isDisposed() ? this.Yd("Stopping session on disposed cast v2") : this.i ? (this.i.stop(), w8(this, null)) : u8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.D)(this.iL, this), (0, g.D)(this.DU, this))
    };
    g.k.va = function() {
        this.l.unsubscribe("onlineScreenChange", (0, g.D)(this.JG, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.C);
        var a = MRa,
            b = g.Ha("yt.mdx.remote.debug.handlers_");
        g.ob(b || [], a);
        g.ff(this.i);
        g.R.prototype.va.call(this)
    };
    g.k.Yd = function(a) {
        S7("Controller", a)
    };
    g.k.kL = function(a, b) {
        this.i == a && (b || w8(this, null), this.Y("yt-remote-cast2-session-change", b))
    };
    g.k.hU = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), u8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.i)
                        if (this.i.i.label != a.label) u8("onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName), this.i.stop();
                        else {
                            u8("onReceiverAction_: Casting to active receiver.");
                            this.i.getScreen() && this.Y("yt-remote-cast2-session-change", this.i.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            w8(this,
                                new s8(this.l, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            w8(this, new o8(this.l, a, this.B, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            w8(this, new l8(this.l, a, this.config_));
                            break;
                        default:
                            this.Yd("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.i && this.i.i.label == a.label ? this.i.stop() : this.Yd("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Yd("onReceiverAction_ called without receiver.")
    };
    g.k.VS = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Yd("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.i ? this.i.i : null;
        if (!c || c.label != b.label) return this.Yd("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.i.getScreen()) return u8("Reselecting dial screen."),
                this.Y("yt-remote-cast2-session-change", this.i.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Yd('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            w8(this, new o8(this.l, b, this.B, this.config_))
        }
        b = this.i;
        b.L = a;
        b.L.appState == chrome.cast.DialAppState.RUNNING ? (a = b.L.extraData || {}, c = a.screenId || null, p8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = qSa(b, {
            name: b.i.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.L.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.ns(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = rSa(b, c)) : a = rSa(b, c)) : a = r8(b);
        return a
    };
    g.k.iL = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.I) {
            u8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.i)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) u8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), w8(this, new l8(this.l, c, this.config_), !0);
                    else {
                        this.Yd("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.i.i,
                    e = Z6(this.l.Hh(),
                        d.label);
                e && U6(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (u8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.ff(this.i), this.i = new l8(this.l, c, this.config_), this.i.subscribe("sessionScreen", (0, g.D)(this.kL, this, this.i)), this.i.subscribe("sessionFailed", function() {
                    return vSa(b, b.i)
                }), this.i.Xr(null));
                this.i.QE(a)
            }
        }
    };
    g.k.WO = function() {
        return this.i ? this.i.IG() : null
    };
    g.k.DU = function(a) {
        this.isDisposed() || (this.Yd("Failed to estabilish a session: " + g.Jh(a)), a.code != chrome.cast.ErrorCode.CANCEL && w8(this, null), this.Y("yt-remote-cast2-session-failed"))
    };
    g.k.kU = function(a) {
        u8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = v8(this);
            this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            v8(this) != b && this.Y("yt-remote-cast2-availability-change", v8(this))
        }
    };
    g.k.JG = function() {
        this.isDisposed() || (this.u = wSa(this), u8("Updating custom receivers: " + g.Jh(this.u)), chrome.cast.setCustomReceivers(this.u, g.Ia, (0, g.D)(function() {
            this.Yd("Failed to set custom receivers.")
        }, this)), this.Y("yt-remote-cast2-availability-change", v8(this)))
    };
    t8.prototype.setLaunchParams = t8.prototype.PV;
    t8.prototype.setConnectedScreenStatus = t8.prototype.OV;
    t8.prototype.stopSession = t8.prototype.XO;
    t8.prototype.getCastSession = t8.prototype.WO;
    t8.prototype.requestSession = t8.prototype.requestSession;
    t8.prototype.init = t8.prototype.init;
    t8.prototype.dispose = t8.prototype.dispose;
    var C8 = [];
    g.k = H8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        I8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Ak = a.hasPrevious, this.hasNext = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.B = a.seekableStart, this.i = a.seekableEnd, this.C = a.duration, this.L = a.loadedTime, this.u = a.liveIngestionTime, this.l = !isNaN(this.u))
    };
    g.k.xc = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.Cj = function(a) {
        this.C = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.l ? this.C + J8(this) : this.C
    };
    g.k.clone = function() {
        return new H8(N8(this))
    };
    g.w(P8, g.R);
    g.k = P8.prototype;
    g.k.getState = function() {
        return this.Qa
    };
    g.k.play = function() {
        R8(this) ? (this.i ? this.i.play(null, g.Ia, W8(this, "play")) : V8(this, "play"), U8(this, 1, L8(Q8(this))), this.Y("remotePlayerChange")) : S8(this, this.play)
    };
    g.k.pause = function() {
        R8(this) ? (this.i ? this.i.pause(null, g.Ia, W8(this, "pause")) : V8(this, "pause"), U8(this, 2, L8(Q8(this))), this.Y("remotePlayerChange")) : S8(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (R8(this)) {
            if (this.i) {
                var b = Q8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.xc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ia, W8(this, "seekTo", {
                    newTime: a
                }))
            } else V8(this, "seekTo", {
                newTime: a
            });
            U8(this, 3, a);
            this.Y("remotePlayerChange")
        } else S8(this, g.Pa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (R8(this)) {
            this.i ? this.i.stop(null, g.Ia, W8(this, "stopVideo")) : V8(this, "stopVideo");
            var a = Q8(this);
            a.index = -1;
            a.videoId = "";
            I8(a);
            T8(this, a);
            this.Y("remotePlayerChange")
        } else S8(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (R8(this)) {
            var c = Q8(this);
            if (this.l) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.l.setReceiverVolumeLevel(d, (0, g.D)(function() {
                        S7("CP", "set receiver volume: " + d)
                    }, this), (0, g.D)(function() {
                        this.Yd("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.l.setReceiverMuted(b, (0, g.D)(function() {
                    S7("CP", "set receiver muted: " + b)
                }, this), (0, g.D)(function() {
                    this.Yd("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                V8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            T8(this, c)
        } else S8(this, g.Pa(this.setVolume, a, b))
    };
    g.k.KG = function(a, b) {
        if (R8(this)) {
            var c = Q8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Jh(b.style), g.dc(a, c.trackData));
            V8(this, "setSubtitlesTrack", a);
            T8(this, c)
        } else S8(this, g.Pa(this.KG, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        R8(this) ? (b = b.getLanguageInfo().getId(), V8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = Q8(this), a.audioTrackId = b, T8(this, a)) : S8(this, g.Pa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = Q8(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        M8(l, a, c || 0);
        void 0 !== b && (K8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Jh(h));
        V8(this, "setPlaylist", m);
        d || T8(this, l)
    };
    g.k.Az = function(a, b) {
        if (R8(this)) {
            if (a && b) {
                var c = Q8(this);
                M8(c, a, b);
                T8(this, c)
            }
            V8(this, "previous")
        } else S8(this, g.Pa(this.Az, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (R8(this)) {
            if (a && b) {
                var c = Q8(this);
                M8(c, a, b);
                T8(this, c)
            }
            V8(this, "next")
        } else S8(this, g.Pa(this.nextVideo, a, b))
    };
    g.k.vI = function() {
        R8(this) ? V8(this, "dismissAutoplay") : S8(this, this.vI)
    };
    g.k.dispose = function() {
        if (3 != this.Qa) {
            var a = this.Qa;
            this.Qa = 3;
            this.Y("proxyStateChange", a, this.Qa)
        }
        g.R.prototype.dispose.call(this)
    };
    g.k.va = function() {
        ISa(this);
        this.u = null;
        this.B.clear();
        O8(this, null);
        g.R.prototype.va.call(this)
    };
    g.k.TE = function(a) {
        if ((a != this.Qa || 2 == a) && 3 != this.Qa && 0 != a) {
            var b = this.Qa;
            this.Qa = a;
            this.Y("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.B.isEmpty();) b = a = this.B, 0 === b.i.length && (b.i = b.l, b.i.reverse(), b.l = []), a.i.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.eU = function(a, b) {
        this.Y(a, b)
    };
    g.k.ES = function(a) {
        if (!a) this.Qv(null), O8(this, null);
        else if (this.l.receiver.volume) {
            a = this.l.receiver.volume;
            var b = Q8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) S7("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, T8(this, b)
        }
    };
    g.k.Qv = function(a) {
        S7("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.J);
        if (this.i = a) this.i.addUpdateListener(this.J), JSa(this), this.Y("remotePlayerChange")
    };
    g.k.DS = function(a) {
        a ? (JSa(this), this.Y("remotePlayerChange")) : this.Qv(null)
    };
    g.k.mF = function() {
        V8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.MS = function() {
        var a = FSa();
        a && O8(this, a)
    };
    g.k.Yd = function(a) {
        S7("CP", a)
    };
    g.w(X8, g.R);
    g.k = X8.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Aa && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.hc.listId = c);
            this.hc.videoId = d;
            this.hc.index = l || 0;
            this.hc.state = 3;
            K8(this.hc,
                n);
            this.B = "UNSUPPORTED";
            c = this.Aa ? "setInitialState" : "setPlaylist";
            Y8("Connecting with " + c + " and params: " + g.Jh(m));
            this.i.connect({
                method: c,
                params: g.Jh(m)
            }, a, SQa())
        } else Y8("Connecting without params"), this.i.connect({}, a, SQa());
        MSa(this)
    };
    g.k.Sz = function(a) {
        this.i.Sz(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ga("yt.mdx.remote.remoteClient_", null, void 0), this.Y("beforeDispose"), Z8(this, 3));
        g.R.prototype.dispose.call(this)
    };
    g.k.va = function() {
        $8(this);
        b9(this);
        a9(this);
        g.ht(this.J);
        this.J = NaN;
        g.ht(this.L);
        this.L = NaN;
        this.u = null;
        g.mu(this.U);
        this.U.length = 0;
        this.i.dispose();
        g.R.prototype.va.call(this);
        this.B = this.I = this.l = this.hc = this.i = null
    };
    g.k.DQ = function() {
        this.yr(2)
    };
    g.k.JS = function() {
        Y8("Channel opened");
        this.xa && (this.xa = !1, a9(this), this.ea = g.ft((0, g.D)(function() {
            Y8("Timing out waiting for a screen.");
            this.yr(1)
        }, this), 15E3));
        WQa(KRa(this.i), this.Ka)
    };
    g.k.GS = function() {
        Y8("Channel closed");
        isNaN(this.C) ? d7(!0) : d7();
        this.dispose()
    };
    g.k.HS = function(a, b) {
        d7();
        isNaN(this.Yu()) ? (b && "shortLived" == this.ya && this.Y("browserChannelAuthError", a), Y8("Channel error: " + a + " without reconnection"), this.dispose()) : (this.xa = !0, Y8("Channel error: " + a + " with reconnection in " + this.Yu() + " ms"), Z8(this, 2))
    };
    g.k.GJ = function(a) {
        if (!this.l || 0 === this.l.length) return !1;
        for (var b = g.r(this.l), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.IS = function(a) {
        a.params ? Y8("Received: action=" + a.action + ", params=" + g.Jh(a.params)) : Y8("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = Q6(a.params.devices);
                this.l = g.Qe(a, function(c) {
                    return new S6(c)
                });
                a = !!g.fb(this.l, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                PSa(this, a);
                a = this.GJ("mlm");
                this.Y("multiStateLoopEnabled", a);
                break;
            case "loungeScreenDisconnected":
                g.pb(this.l, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                PSa(this, !1);
                break;
            case "remoteConnected":
                var b = new S6(Q6(a.params.device));
                g.fb(this.l, function(c) {
                    return b ? c.id == b.id : !1
                }) || FQa(this.l, b);
                break;
            case "remoteDisconnected":
                b = new S6(Q6(a.params.device));
                g.pb(this.l, function(c) {
                    return b ? c.id == b.id : !1
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                RSa(this, a);
                break;
            case "nowPlaying":
                TSa(this, a);
                break;
            case "onStateChange":
                SSa(this, a);
                break;
            case "onAdStateChange":
                USa(this, a);
                break;
            case "onVolumeChanged":
                VSa(this, a);
                break;
            case "onSubtitlesTrackChanged":
                QSa(this, a);
                break;
            case "nowAutoplaying":
                WSa(this, a);
                break;
            case "autoplayDismissed":
                this.Y("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.I = a.params.videoId || null;
                this.Y("autoplayUpNext", this.I);
                break;
            case "onAutoplayModeChanged":
                this.B =
                    a.params.autoplayMode;
                this.Y("autoplayModeChange", this.B);
                "DISABLED" == this.B && this.Y("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                XSa(this, a);
                break;
            case "requestAssistedSignIn":
                this.Y("assistedSignInRequested", a.params.authCode);
                break;
            case "onLoopModeChanged":
                this.Y("loopModeChange", a.params.loopMode);
                break;
            default:
                Y8("Unrecognized action: " + a.action)
        }
    };
    g.k.EV = function() {
        if (this.u) {
            var a = this.u;
            this.u = null;
            this.hc.videoId != a && c9(this, "getNowPlaying")
        }
    };
    g.k.yQ = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.Yu()) ? N7(this.i) && isNaN(this.C) && (a = 1) : a = 2);
        return a
    };
    g.k.yr = function(a) {
        Y8("Disconnecting with " + a);
        g.Ga("yt.mdx.remote.remoteClient_", null, void 0);
        $8(this);
        this.Y("beforeDisconnect", a);
        1 == a && d7();
        LRa(this.i, a);
        this.dispose()
    };
    g.k.wQ = function() {
        var a = this.hc;
        this.u && (a = this.hc.clone(), M8(a, this.u, a.index));
        return N8(a)
    };
    g.k.QV = function(a) {
        var b = new H8(a);
        b.videoId && b.videoId != this.hc.videoId && (this.u = b.videoId, g.ht(this.J), this.J = g.ft((0, g.D)(this.EV, this), 5E3));
        var c = [];
        this.hc.listId == b.listId && this.hc.videoId == b.videoId && this.hc.index == b.index || c.push("remoteQueueChange");
        this.hc.playerState == b.playerState && this.hc.volume == b.volume && this.hc.muted == b.muted && L8(this.hc) == L8(b) && g.Jh(this.hc.trackData) == g.Jh(b.trackData) || c.push("remotePlayerChange");
        this.hc.reset(a);
        g.Db(c, function(d) {
            this.Y(d)
        }, this)
    };
    g.k.ZI = function() {
        var a = this.i.I.id,
            b = g.fb(this.l, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.Yu = function() {
        var a = this.i;
        return a.l.isActive() ? a.l.l - Date.now() : NaN
    };
    g.k.tQ = function() {
        return this.B || "UNSUPPORTED"
    };
    g.k.uQ = function() {
        return this.I || ""
    };
    g.k.YO = function() {
        if (!isNaN(this.Yu())) {
            var a = this.i.l;
            g.Fq(a.i);
            a.start()
        }
    };
    g.k.NV = function(a, b) {
        c9(this, a, b);
        OSa(this)
    };
    g.k.LG = function() {
        var a = g.At("SID", "") || "",
            b = g.At("SAPISID", "") || "",
            c = g.At("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.he(g.Ya(a), 2);
        b = g.he(g.Ya(b), 2);
        c = g.he(g.Ya(c), 2);
        return g.he(g.Ya(a + "," + b + "," + c), 2)
    };
    X8.prototype.subscribe = X8.prototype.subscribe;
    X8.prototype.unsubscribeByKey = X8.prototype.Uf;
    X8.prototype.getProxyState = X8.prototype.yQ;
    X8.prototype.disconnect = X8.prototype.yr;
    X8.prototype.getPlayerContextData = X8.prototype.wQ;
    X8.prototype.setPlayerContextData = X8.prototype.QV;
    X8.prototype.getOtherConnectedRemoteId = X8.prototype.ZI;
    X8.prototype.getReconnectTimeout = X8.prototype.Yu;
    X8.prototype.getAutoplayMode = X8.prototype.tQ;
    X8.prototype.getAutoplayVideoId = X8.prototype.uQ;
    X8.prototype.reconnect = X8.prototype.YO;
    X8.prototype.sendMessage = X8.prototype.NV;
    X8.prototype.getXsrfToken = X8.prototype.LG;
    X8.prototype.isCapabilitySupportedOnConnectedDevices = X8.prototype.GJ;
    g.w(d9, W7);
    g.k = d9.prototype;
    g.k.Hh = function(a) {
        return this.Ne.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Ne.$_c(a)
    };
    g.k.get = function(a) {
        return this.Ne.$_g(a)
    };
    g.k.start = function() {
        this.Ne.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Ne.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Ne.$_r(a, b, c)
    };
    g.k.nA = function(a, b, c, d) {
        this.Ne.$_un(a, b, c, d)
    };
    g.k.va = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.Ne.$_ubk(this.i[a]);
        this.i.length = 0;
        this.Ne = null;
        W7.prototype.va.call(this)
    };
    g.k.ZO = function() {
        this.Y("screenChange")
    };
    g.k.IT = function() {
        this.Y("onlineScreenChange")
    };
    f8.prototype.$_st = f8.prototype.start;
    f8.prototype.$_gspc = f8.prototype.TO;
    f8.prototype.$_gsppc = f8.prototype.HG;
    f8.prototype.$_c = f8.prototype.contains;
    f8.prototype.$_g = f8.prototype.get;
    f8.prototype.$_a = f8.prototype.add;
    f8.prototype.$_un = f8.prototype.nA;
    f8.prototype.$_r = f8.prototype.remove;
    f8.prototype.$_gs = f8.prototype.Hh;
    f8.prototype.$_gos = f8.prototype.GG;
    f8.prototype.$_s = f8.prototype.subscribe;
    f8.prototype.$_ubk = f8.prototype.Uf;
    var q9 = null,
        w9 = !1,
        e9 = null,
        f9 = null,
        v9 = null,
        j9 = [];
    g.w(x9, g.G);
    g.k = x9.prototype;
    g.k.va = function() {
        g.G.prototype.va.call(this);
        this.i.stop();
        this.u.stop();
        this.L.stop();
        this.ea();
        var a = this.Qb;
        a.unsubscribe("proxyStateChange", this.gL, this);
        a.unsubscribe("remotePlayerChange", this.Vv, this);
        a.unsubscribe("remoteQueueChange", this.oz, this);
        a.unsubscribe("previousNextChange", this.dL, this);
        a.unsubscribe("nowAutoplaying", this.XK, this);
        a.unsubscribe("autoplayDismissed", this.AK, this);
        this.Qb = this.l = null
    };
    g.k.hj = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (2 != this.Qb.Qa)
            if (y9(this)) {
                if (!Q8(this.Qb).isAdPlaying() || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        Q8(this.Qb).xc() ? this.Qb.pause() : this.Qb.play();
                        break;
                    case "control_play":
                        this.Qb.play();
                        break;
                    case "control_pause":
                        this.Qb.pause();
                        break;
                    case "control_seek":
                        this.J.FG(c[0], c[1]);
                        break;
                    case "control_subtitles_set_track":
                        z9(this, c[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(c[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    c =
                        this.G.getCurrentTime();
                    A9(this, 0 === c ? void 0 : c);
                    break;
                case "control_seek":
                    A9(this, c[0]);
                    break;
                case "control_subtitles_set_track":
                    z9(this, c[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(c[0])
            }
    };
    g.k.BS = function(a) {
        this.L.NO(a)
    };
    g.k.vW = function(a) {
        this.hj("control_subtitles_set_track", g.Vb(a) ? null : a)
    };
    g.k.nM = function() {
        var a = this.G.getOption("captions", "track");
        g.Vb(a) || z9(this, a)
    };
    g.k.Nb = function(a) {
        this.l.Nb(a, this.G.getVideoData().lengthSeconds)
    };
    g.k.sT = function() {
        g.Vb(this.B) || hTa(this, this.B);
        this.C = !1
    };
    g.k.gL = function(a, b) {
        this.u.stop();
        2 === b && this.hM()
    };
    g.k.Vv = function() {
        if (y9(this)) {
            this.i.stop();
            var a = Q8(this.Qb);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.l.mf = 1;
                    break;
                case 1082:
                case 1083:
                    this.l.mf = 0;
                    break;
                default:
                    this.l.mf = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Rb(new g.iK(8));
                    this.gM();
                    break;
                case 1085:
                case 3:
                    this.Rb(new g.iK(9));
                    break;
                case 1083:
                case 0:
                    this.Rb(new g.iK(2));
                    this.J.stop();
                    this.Nb(this.G.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Rb(new g.iK(4));
                    break;
                case 2:
                    this.Rb(new g.iK(4));
                    this.Nb(L8(a));
                    break;
                case -1:
                    this.Rb(new g.iK(64));
                    break;
                case -1E3:
                    this.Rb(new g.iK(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback."
                    }))
            }
            a = Q8(this.Qb).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, hTa(this, a));
            a = Q8(this.Qb); - 1 === a.volume || Math.round(this.G.getVolume()) === a.volume && this.G.isMuted() === a.muted || this.U.isActive() || this.QM()
        } else gTa(this)
    };
    g.k.dL = function() {
        this.G.Y("mdxpreviousnextchange")
    };
    g.k.oz = function() {
        y9(this) || gTa(this)
    };
    g.k.XK = function(a) {
        isNaN(a) || this.G.Y("mdxnowautoplaying", a)
    };
    g.k.AK = function() {
        this.G.Y("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        y9(this) && this.Qb.setAudioTrack(this.G.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === Q8(this.Qb).playerState ? A9(this, a) : b && this.Qb.seekTo(a)
    };
    g.k.QM = function() {
        var a = this;
        if (y9(this)) {
            var b = Q8(this.Qb);
            this.events.jc(this.Z);
            b.muted ? this.G.mute() : this.G.unMute();
            this.G.setVolume(b.volume);
            this.Z = this.events.N(this.G, "onVolumeChange", function(c) {
                fTa(a, c)
            })
        }
    };
    g.k.gM = function() {
        this.i.stop();
        if (!this.Qb.isDisposed()) {
            var a = Q8(this.Qb);
            a.xc() && this.Rb(new g.iK(8));
            this.Nb(L8(a));
            this.i.start()
        }
    };
    g.k.hM = function() {
        this.u.stop();
        this.i.stop();
        var a = this.Qb.u.getReconnectTimeout();
        2 == this.Qb.Qa && !isNaN(a) && this.u.start()
    };
    g.k.Rb = function(a) {
        this.u.stop();
        var b = this.I;
        if (!g.nK(b, a)) {
            var c = g.V(a, 2);
            c !== g.V(this.I, 2) && this.G.Ls(c);
            this.I = a;
            jTa(this.l, b, a)
        }
    };
    g.w(B9, g.W);
    B9.prototype.bd = function() {
        this.i.show()
    };
    B9.prototype.Bb = function() {
        this.i.hide()
    };
    B9.prototype.l = function() {
        g.QJ("https://support.google.com/youtube/answer/7640706")
    };
    B9.prototype.u = function() {
        R6("mdx-manual-pairing-popup-ok");
        this.Bb()
    };
    g.w(C9, g.W);
    C9.prototype.bd = function() {
        this.i.show()
    };
    C9.prototype.Bb = function() {
        this.i.hide()
    };
    C9.prototype.l = function() {
        R6("mdx-privacy-popup-cancel");
        this.Bb()
    };
    C9.prototype.u = function() {
        R6("mdx-privacy-popup-confirm");
        this.Bb()
    };
    g.w(D9, g.W);
    D9.prototype.l = function(a) {
        iTa(this, a.state)
    };
    g.w(E9, g.eQ);
    E9.prototype.C = function() {
        var a = this.G.getOption("remote", "receivers");
        a && 1 < a.length && !this.G.getOption("remote", "quickCast") ? (this.Tn = g.Eb(a, this.i, this), g.fQ(this, g.Qe(a, this.i)), a = this.G.getOption("remote", "currentReceiver"), a = this.i(a), this.options[a] && this.Xh(a), this.enable(!0)) : this.enable(!1)
    };
    E9.prototype.i = function(a) {
        return a.key
    };
    E9.prototype.Yi = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Tn[a].name
    };
    E9.prototype.wf = function(a) {
        g.eQ.prototype.wf.call(this, a);
        this.G.setOption("remote", "currentReceiver", this.Tn[a]);
        this.zb.Bb()
    };
    g.w(F9, g.nN);
    g.k = F9.prototype;
    g.k.create = function() {
        var a = this.player.T(),
            b = g.uF(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: g.T(a.experiments, "mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: g.T(a.experiments, "enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: g.T(a.experiments, "enable_cast_short_lived_lounge_token")
        };
        aTa(b, a);
        this.subscriptions.push(g.Uu("yt-remote-before-disconnect", this.AS, this));
        this.subscriptions.push(g.Uu("yt-remote-connection-change", this.lU, this));
        this.subscriptions.push(g.Uu("yt-remote-receiver-availability-change",
            this.fL, this));
        this.subscriptions.push(g.Uu("yt-remote-auto-connect", this.jU, this));
        this.subscriptions.push(g.Uu("yt-remote-receiver-resumed", this.iU, this));
        this.subscriptions.push(g.Uu("mdx-privacy-popup-confirm", this.tV, this));
        this.subscriptions.push(g.Uu("mdx-privacy-popup-cancel", this.sV, this));
        this.subscriptions.push(g.Uu("mdx-manual-pairing-popup-ok", this.ER, this));
        this.fL()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.nN.prototype.load.call(this);
        this.yh = new x9(this, this.player, this.Qb);
        var a = (a = eTa()) ? a.currentTime : 0;
        var b = u9() ? new P8(o9(), void 0) : null;
        0 == a && b && (a = L8(Q8(b)));
        0 !== a && this.Nb(a);
        jTa(this, this.od, this.od);
        this.player.Pk(6)
    };
    g.k.unload = function() {
        this.player.Y("mdxautoplaycanceled");
        this.Pm = this.nj;
        g.gf(this.yh, this.Qb);
        this.Qb = this.yh = null;
        g.nN.prototype.unload.call(this);
        this.player.Pk(5);
        G9(this)
    };
    g.k.va = function() {
        g.Vu(this.subscriptions);
        g.nN.prototype.va.call(this)
    };
    g.k.Ik = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.loaded && this.yh.hj.apply(this.yh, [a].concat(g.v(c)))
    };
    g.k.getAdState = function() {
        return this.mf
    };
    g.k.zQ = function() {
        return this.loaded ? this.yh.suggestion : null
    };
    g.k.Ak = function() {
        return this.Qb ? Q8(this.Qb).Ak : !1
    };
    g.k.hasNext = function() {
        return this.Qb ? Q8(this.Qb).hasNext : !1
    };
    g.k.Nb = function(a, b) {
        this.TJ = a || 0;
        this.player.Y("progresssync", a, b);
        this.player.Ma("onVideoProgress", a)
    };
    g.k.getCurrentTime = function() {
        return this.TJ
    };
    g.k.getProgressState = function() {
        var a = Q8(this.Qb),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: g.T(this.player.T().experiments, "web_player_mdx_allow_seeking_change_killswitch") ? this.player.kf() : !a.isAdPlaying() && this.player.kf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.l ? a.u + J8(a) : a.u,
            isAtLiveHead: 1 >= (a.l ? a.i + J8(a) : a.i) - this.getCurrentTime(),
            loaded: a.L,
            seekableEnd: a.l ? a.i + J8(a) : a.i,
            seekableStart: 0 < a.B ? a.B + J8(a) : a.B
        }
    };
    g.k.nextVideo = function() {
        this.Qb && this.Qb.nextVideo()
    };
    g.k.Az = function() {
        this.Qb && this.Qb.Az()
    };
    g.k.AS = function(a) {
        1 === a && (this.tE = this.Qb ? Q8(this.Qb) : null)
    };
    g.k.lU = function() {
        var a = u9() ? new P8(o9(), void 0) : null;
        if (a) {
            var b = this.Pm;
            this.loaded && this.unload();
            this.Qb = a;
            this.tE = null;
            b.key !== this.nj.key && (this.Pm = b, this.load())
        } else g.ff(this.Qb), this.Qb = null, this.loaded && (this.unload(), (a = this.tE) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, L8(a)));
        this.player.Y("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.fL = function() {
        var a = [this.nj],
            b = a.concat,
            c = bTa();
        D8() && g.yz("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Tn = b.call(a, c);
        a = p9() || this.nj;
        H9(this, a);
        this.player.Ma("onMdxReceiversChange")
    };
    g.k.jU = function() {
        var a = p9();
        H9(this, a)
    };
    g.k.iU = function() {
        this.Pm = p9()
    };
    g.k.tV = function() {
        this.bw = !0;
        G9(this);
        w9 = !1;
        q9 && s9(q9, 1);
        q9 = null
    };
    g.k.sV = function() {
        this.bw = !1;
        G9(this);
        H9(this, this.nj);
        this.Pm = this.nj;
        w9 = !1;
        q9 = null;
        this.player.playVideo()
    };
    g.k.ER = function() {
        this.Ny = !0;
        G9(this);
        g.xz("yt-remote-manual-pairing-warning-shown", !0, 2592E3);
        w9 = !1;
        q9 && s9(q9, 1);
        q9 = null
    };
    g.k.bf = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Tn;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? F8() : H9(this, b)), this.loaded ? this.Pm : this.nj;
            case "quickCast":
                return 2 === this.Tn.length && "cast-selector-receiver" === this.Tn[1].key ? (b && F8(), !0) : !1
        }
    };
    g.k.mF = function() {
        this.Qb.mF()
    };
    g.k.Ji = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.yN.remote = F9;
})(_yt_player);