javascript: (function() {
    ! function(e, t, s) {
        "use strict";
        var c = function() {
            this.sheets = t.styleSheets
        };
        c.prototype.usedRules = function(e, s) {
            var c, n, o = {},
                r = new RegExp(window.location.host),
                i = {},
                a = {},
                l = {},
                f = "",
                x = function(e) {
                    for (var t = "", s = 0; s < e.length; s++) t += "\\" + ("000" + e[s].charCodeAt(0).toString(16)).substr(-4);
                    return t
                };
            if (r.ignoreCase, [].some.call(this.sheets, function(e) {
                    try {
                        c = e.cssRules || e.rules, [].some.call(c, function(e) {
                            if (e instanceof CSSStyleRule && (console.log(e.selectorText.replace(/(:|::)(before|after|hover|visited|active)/gm, "").replace(/>(\s|,|\s)\*?(?!\w)/g, '> *')),n = e.selectorText.replace(/(:|::)(before|after|hover|visited|active)/gm, "").replace(/>(\s|,|\s)\*?(?!\w)/g, '> *'), "*, , " == n || ", ," == n || ", " == n || " ," == n || " , " == n ? o[e.selectorText] ? o[e.selectorText].push(e) : o[e.selectorText] = [e] : t.querySelector(n) && (o[e.selectorText] ? o[e.selectorText].push(e) : o[e.selectorText] = [e]), s && s.length)) {
                                var c;
                                s.some(function(t) {
                                    c = new RegExp(t), c.test(n) && (o[e.selectorText] ? o[e.selectorText].push(e) : o[e.selectorText] = [e])
                                })
                            }
                            e instanceof CSSFontFaceRule && (i[e.style.fontFamily] = e), window.CSSKeyframesRule && e instanceof CSSKeyframesRule && (a[e.name] = e), e instanceof CSSMediaRule && (l[e.media.mediaText] = [], 
                            	[].some.call(e.cssRules || e.rules, function(c) {
                                if (n = c.selectorText.replace(/(:|::)(before|after|hover|visited|active)/gm, "").replace(/>(\s|,|\s)\*?(?!\w)/g, '> *'), "*, , " == n || ", ," == n || ", " == n || " ," == n || " , " == n ? l[e.media.mediaText][c.selectorText] ? l[e.media.mediaText][c.selectorText].push(c) : l[e.media.mediaText][e.selectorText] = [c] : t.querySelector(n) && (l[e.media.mediaText][c.selectorText] ? l[e.media.mediaText][c.selectorText].push(c) : l[e.media.mediaText][c.selectorText] = [c]), s && s.length) {
                                    var o;
                                    s.some(function(t) {
                                        o = new RegExp(t), o.test(n) && (l[e.media.mediaText][c.selectorText] ? l[e.media.mediaText][c.selectorText].push(c) : l[e.media.mediaText][c.selectorText] = [c])
                                    })
                                } else {console.log(c.selectorText, 'is not used');}
                            }))
                        })
                    } catch (r) {
                        console.log(r.message, e.href)
                    }
                }), Object.keys(i).length > 1) {
                var T = [];
                Object.keys(i).some(function(e) {
                    for (var t in o) {
                        var s = o[t];
                        s.some(function(t) {
                            return t.style["font-family"] == e && -1 == T.indexOf(e) ? (f += i[e].cssText, T.push(e), !0) : void 0
                        })
                    }
                })
            }
            if (1 == Object.keys(i).length) {
                var e = Object.keys(i)[0],
                    T = [];
                for (var u in o) {
                    var m = o[u];
                    m.forEach(function(t) {
                        return t.style["font-family"] == e && -1 == T.indexOf(e) ? (f += i[e].cssText, T.push(e), !0) : void 0
                    })
                }
            }
            if (Object.keys(a).length > 1 && Object.keys(a).some(function(e) {
                    f += a[e].cssText
                }), 1 == Object.keys(a).length) {
                var e = Object.keys(a)[0];
                f += a[e].cssText
            }
            if (Object.keys(o).some(function(e) {
                    o[e].forEach(function(e) {
                        if (/content:/.test(e.cssText)) {
                            var t = e.cssText.match(/content:\s?"(.*)"/)[1];
                            f += /^\s|\w|!|\?|\./.test(t) ? e.cssText : e.cssText.replace(/content:\s?"(.*)"/, 'content:"' + x(t) + '"')
                        } else f += e.cssText
                    })
                }), Object.keys(l).length > 1 && Object.keys(l).some(function(e) {
                    f += "@media " + e + "{";
                    for (var t in l[e]) {
                        var s = l[e][t];
                        s.forEach(function(e) {
                            if (/content:/.test(e.cssText)) {
                                var t = e.cssText.match(/content:\s?"(.*)"/)[1];
                                f += e.cssText.replace(/content:\s?"(.*)"/, 'content:"' + x(t) + '"')
                            } else f += e.cssText
                        })
                    }
                    f += "}"
                }), 1 == Object.keys(l).length) {
                var e = Object.keys(l)[0];
                f += "@media " + e + "{";
                for (var u in l[e]) {
                    var m = l[e][u];
                    m.forEach(function(e) {
                        if (/content:/.test(e.cssText)) {
                            var t = e.cssText.match(/content:\s?"(.*)"/)[1];
                            f += e.cssText.replace(/content:\s?"(.*)"/, 'content:"' + x(t) + '"')
                        } else f += e.cssText
                    })
                }
                f += "}"
            }
            return f
        }, e.Style = c, e.sheet = new c
    }(window, document);
    console.log(sheet.usedRules());
})();