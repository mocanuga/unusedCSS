javascript: (function () { 
    (function(e, t, s) {
        "use strict";
        var n = function() {
            this.sheets = t.styleSheets
        };
        n.prototype.usedRules = function(e, s, n) {
            var o, c, r = {},
                a = new RegExp(window.location.host),
                n = n || !1,
                i = {},
                l = 0,
                f = 0,
                u = {},
                d = {},
                x = "",
                m = function(e) {
                    for (var t = "", s = 0; s < e.length; s++) t += "\\" + ("000" + e[s].charCodeAt(0).toString(16)).substr(-4);
                    return t
                };
            if (a.ignoreCase, [].some.call(this.sheets, function(e) {
                    try {
                        o = e.cssRules || e.rules, [].some.call(o, function(e) {
                            if (l++, e instanceof CSSStyleRule)
                                if (c = e.selectorText.replace(/(:|::)(before|after|hover|visited|active)/gm, "").replace(/>(\s|,|\s)\*?(?!\w)/g, "> *"), "*, , " == c || ", ," == c || ", " == c || " ," == c || " , " == c) r[e.selectorText] ? r[e.selectorText].push(e) : r[e.selectorText] = [e];
                                else if (t.querySelector(c) && (r[e.selectorText] ? r[e.selectorText].push(e) : r[e.selectorText] = [e]), s && s.length) {
                                var n;
                                s.some(function(t) {
                                    n = new RegExp(t), n.test(c) && (r[e.selectorText] ? r[e.selectorText].push(e) : r[e.selectorText] = [e])
                                })
                            }
                            e instanceof CSSFontFaceRule && (i[e.style.fontFamily] = e), window.CSSKeyframesRule && e instanceof CSSKeyframesRule && (u[e.name] = e), e instanceof CSSMediaRule && (d[e.media.mediaText] = [], [].some.call(e.cssRules || e.rules, function(n) {
                                if (c = n.selectorText.replace(/(:|::)(before|after|hover|visited|active)/gm, "").replace(/>(\s|,|\s)\*?(?!\w)/g, "> *"), "*, , " == c || ", ," == c || ", " == c || " ," == c || " , " == c ? d[e.media.mediaText][n.selectorText] ? d[e.media.mediaText][n.selectorText].push(n) : d[e.media.mediaText][e.selectorText] = [n] : t.querySelector(c) && (d[e.media.mediaText][n.selectorText] ? d[e.media.mediaText][n.selectorText].push(n) : d[e.media.mediaText][n.selectorText] = [n]), s && s.length) {
                                    var o;
                                    s.some(function(t) {
                                        o = new RegExp(t), o.test(c) && (d[e.media.mediaText][n.selectorText] ? d[e.media.mediaText][n.selectorText].push(n) : d[e.media.mediaText][n.selectorText] = [n])
                                    })
                                }
                            }))
                        })
                    } catch (n) {
                        console.log(n, e.href)
                    }
                }), Object.keys(i).length > 1) {
                var T = [];
                Object.keys(i).some(function(e) {
                    for (var t in r) {
                        var s = r[t];
                        s.some(function(t) {
                            return t.style["font-family"] == e && -1 == T.indexOf(e) ? (x += i[e].cssText, T.push(e), f++, !0) : void 0
                        })
                    }
                })
            }
            if (1 == Object.keys(i).length) {
                var e = Object.keys(i)[0],
                    T = [];
                for (var h in r) {
                    var v = r[h];
                    v.forEach(function(t) {
                        return t.style["font-family"] == e && -1 == T.indexOf(e) ? (x += i[e].cssText, T.push(e), f++, !0) : void 0
                    })
                }
            }
            if (Object.keys(u).length > 1 && Object.keys(u).some(function(e) {
                    x += u[e].cssText, f++
                }), 1 == Object.keys(u).length) {
                var e = Object.keys(u)[0];
                x += u[e].cssText.replace(/'/gm, '"'), f++
            }
            if (Object.keys(r).some(function(e) {
                    r[e].forEach(function(e) {
                        if (f++, /content:/.test(e.cssText)) {
                            var t = e.cssText.match(/content:\s?"(.*)"/)[1];
                            x += /^\s|\w|!|\?|\./.test(t) ? e.cssText : e.cssText.replace(/content:\s?"(.*)"/, 'content:"' + m(t) + '"')
                        } else x += e.cssText
                    })
                }), Object.keys(d).length > 1 && Object.keys(d).some(function(e) {
                    x += "@media " + e + "{";
                    for (var t in d[e]) {
                        var s = d[e][t];
                        s.forEach(function(e) {
                            if (f++, /content:/.test(e.cssText)) {
                                var t = e.cssText.match(/content:\s?"(.*)"/)[1];
                                x += e.cssText.replace(/content:\s?"(.*)"/, 'content:"' + m(t) + '"')
                            } else x += e.cssText
                        })
                    }
                    x += "}", f++
                }), 1 == Object.keys(d).length) {
                var e = Object.keys(d)[0];
                x += "@media " + e + "{";
                for (var h in d[e]) {
                    var v = d[e][h];
                    v.forEach(function(e) {
                        if (f++, /content:/.test(e.cssText)) {
                            var t = e.cssText.match(/content:\s?"(.*)"/)[1];
                            x += e.cssText.replace(/content:\s?"(.*)"/, 'content:"' + m(t) + '"')
                        } else x += e.cssText
                    })
                }
                x += "}", f++
            }
            x = "undefined" != typeof window.autoprefixer ? autoprefixer.process(x, {
                browsers: ["ff > 1%", "ie >= 8 > 2%", "Chrome > 3%", "Opera > 4%", "Safari > 5%", "ios_saf > 6%", "and_chr > 7%", "and_ff > 8%", "ie_mob > 9%"]
            }).toString().replace(/content:\s?"(.*)"/gim, 'content:"\\$1"') : x;
            var p = n ? function(e) {
                var t = new Blob([e], {
                        type: "text/json"
                    }),
                    s = document.createEvent("MouseEvents"),
                    n = document.createElement("a"),
                    o = location.host + location.pathname + "-used.css";
                n.download = o, n.href = window.URL.createObjectURL(t), n.dataset.downloadurl = ["text/json", n.download, n.href].join(":"), s.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(s)
            }(x) : x;
            return {
                cleaned: p,
                raport: {
                    rulesUsed: f,
                    rulesParsed: l,
                    reductionFactor: (100 - f / l * 100).toFixed(2) + "%"
                }
            }
        }, e.sheet = new n
    }(window, document)), console.log(sheet.usedRules())
}());