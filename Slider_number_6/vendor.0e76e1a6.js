var Pe = Object.defineProperty
  , Me = Object.defineProperties;
var Ie = Object.getOwnPropertyDescriptors;
var de = Object.getOwnPropertySymbols;
var Le = Object.prototype.hasOwnProperty
  , Ae = Object.prototype.propertyIsEnumerable;
var ce = (i,e,t)=>e in i ? Pe(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t
  , Y = (i,e)=>{
    for (var t in e || (e = {}))
        Le.call(e, t) && ce(i, t, e[t]);
    if (de)
        for (var t of de(e))
            Ae.call(e, t) && ce(i, t, e[t]);
    return i
}
  , X = (i,e)=>Me(i, Ie(e));
function fe(i) {
    return i !== null && typeof i == "object" && "constructor"in i && i.constructor === Object
}
function U(i, e) {
    i === void 0 && (i = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t=>{
        typeof i[t] == "undefined" ? i[t] = e[t] : fe(e[t]) && fe(i[t]) && Object.keys(e[t]).length > 0 && U(i[t], e[t])
    }
    )
}
const ue = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
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
function V() {
    const i = typeof document != "undefined" ? document : {};
    return U(i, ue),
    i
}
const ze = {
    document: ue,
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
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(i) {
        return typeof setTimeout == "undefined" ? (i(),
        null) : setTimeout(i, 0)
    },
    cancelAnimationFrame(i) {
        typeof setTimeout != "undefined" && clearTimeout(i)
    }
};
function k() {
    const i = typeof window != "undefined" ? window : {};
    return U(i, ze),
    i
}
function Oe(i) {
    return i === void 0 && (i = ""),
    i.trim().split(" ").filter(e=>!!e.trim())
}
function ke(i) {
    const e = i;
    Object.keys(e).forEach(t=>{
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function K(i, e) {
    return e === void 0 && (e = 0),
    setTimeout(i, e)
}
function H() {
    return Date.now()
}
function $e(i) {
    const e = k();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)),
    !t && i.currentStyle && (t = i.currentStyle),
    t || (t = i.style),
    t
}
function Ge(i, e) {
    e === void 0 && (e = "x");
    const t = k();
    let s, n, r;
    const o = $e(i);
    return t.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform,
    n.split(",").length > 6 && (n = n.split(", ").map(l=>l.replace(",", ".")).join(", ")),
    r = new t.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    s = r.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])),
    e === "y" && (t.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])),
    n || 0
}
function R(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
}
function De(i) {
    return typeof window != "undefined" && typeof window.HTMLElement != "undefined" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
}
function $() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (s != null && !De(s)) {
            const n = Object.keys(Object(s)).filter(r=>e.indexOf(r) < 0);
            for (let r = 0, o = n.length; r < o; r += 1) {
                const l = n[r]
                  , a = Object.getOwnPropertyDescriptor(s, l);
                a !== void 0 && a.enumerable && (R(i[l]) && R(s[l]) ? s[l].__swiper__ ? i[l] = s[l] : $(i[l], s[l]) : !R(i[l]) && R(s[l]) ? (i[l] = {},
                s[l].__swiper__ ? i[l] = s[l] : $(i[l], s[l])) : i[l] = s[l])
            }
        }
    }
    return i
}
function _(i, e, t) {
    i.style.setProperty(e, t)
}
function pe(i) {
    let {swiper: e, targetPosition: t, side: s} = i;
    const n = k()
      , r = -e.translate;
    let o = null, l;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    n.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > r ? "next" : "prev"
      , f = (h,g)=>u === "next" && h >= g || u === "prev" && h <= g
      , p = ()=>{
        l = new Date().getTime(),
        o === null && (o = l);
        const h = Math.max(Math.min((l - o) / a, 1), 0)
          , g = .5 - Math.cos(h * Math.PI) / 2;
        let S = r + g * (t - r);
        if (f(S, t) && (S = t),
        e.wrapperEl.scrollTo({
            [s]: S
        }),
        f(S, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout(()=>{
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [s]: S
                })
            }
            ),
            n.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = n.requestAnimationFrame(p)
    }
    ;
    p()
}
function Z(i) {
    return i.querySelector(".swiper-slide-transform") || i.shadowRoot && i.shadowRoot.querySelector(".swiper-slide-transform") || i
}
function D(i, e) {
    return e === void 0 && (e = ""),
    [...i.children].filter(t=>t.matches(e))
}
function W(i) {
    try {
        console.warn(i);
        return
    } catch {}
}
function F(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : Oe(e)),
    t
}
function Be(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function Ve(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function B(i, e) {
    return k().getComputedStyle(i, null).getPropertyValue(e)
}
function q(i) {
    let e = i, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function me(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
        e ? s.matches(e) && t.push(s) : t.push(s),
        s = s.parentElement;
    return t
}
function Fe(i, e) {
    function t(s) {
        s.target === i && (e.call(i, s),
        i.removeEventListener("transitionend", t))
    }
    e && i.addEventListener("transitionend", t)
}
function J(i, e, t) {
    const s = k();
    return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth
}
function he(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach(n=>{
        if (!t[n] && t.auto === !0) {
            let r = D(i.el, `.${s[n]}`)[0];
            r || (r = F("div", s[n]),
            r.className = s[n],
            i.el.append(r)),
            t[n] = r,
            e[n] = r
        }
    }
    ),
    t
}
function ii(i) {
    let {swiper: e, extendParams: t, on: s, emit: n} = i;
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    e.navigation = {
        nextEl: null,
        prevEl: null
    };
    const r = v=>(Array.isArray(v) ? v : [v]).filter(T=>!!T);
    function o(v) {
        let T;
        return v && typeof v == "string" && e.isElement && (T = e.el.querySelector(v),
        T) ? T : (v && (typeof v == "string" && (T = [...document.querySelectorAll(v)]),
        e.params.uniqueNavElements && typeof v == "string" && T.length > 1 && e.el.querySelectorAll(v).length === 1 && (T = e.el.querySelector(v))),
        v && !T ? v : T)
    }
    function l(v, T) {
        const w = e.params.navigation;
        v = r(v),
        v.forEach(d=>{
            d && (d.classList[T ? "add" : "remove"](...w.disabledClass.split(" ")),
            d.tagName === "BUTTON" && (d.disabled = T),
            e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? "add" : "remove"](w.lockClass))
        }
        )
    }
    function a() {
        const {nextEl: v, prevEl: T} = e.navigation;
        if (e.params.loop) {
            l(T, !1),
            l(v, !1);
            return
        }
        l(T, e.isBeginning && !e.params.rewind),
        l(v, e.isEnd && !e.params.rewind)
    }
    function u(v) {
        v.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
        n("navigationPrev"))
    }
    function f(v) {
        v.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
        n("navigationNext"))
    }
    function p() {
        const v = e.params.navigation;
        if (e.params.navigation = he(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(v.nextEl || v.prevEl))
            return;
        let T = o(v.nextEl)
          , w = o(v.prevEl);
        Object.assign(e.navigation, {
            nextEl: T,
            prevEl: w
        }),
        T = r(T),
        w = r(w);
        const d = (c,m)=>{
            c && c.addEventListener("click", m === "next" ? f : u),
            !e.enabled && c && c.classList.add(...v.lockClass.split(" "))
        }
        ;
        T.forEach(c=>d(c, "next")),
        w.forEach(c=>d(c, "prev"))
    }
    function h() {
        let {nextEl: v, prevEl: T} = e.navigation;
        v = r(v),
        T = r(T);
        const w = (d,c)=>{
            d.removeEventListener("click", c === "next" ? f : u),
            d.classList.remove(...e.params.navigation.disabledClass.split(" "))
        }
        ;
        v.forEach(d=>w(d, "next")),
        T.forEach(d=>w(d, "prev"))
    }
    s("init", ()=>{
        e.params.navigation.enabled === !1 ? S() : (p(),
        a())
    }
    ),
    s("toEdge fromEdge lock unlock", ()=>{
        a()
    }
    ),
    s("destroy", ()=>{
        h()
    }
    ),
    s("enable disable", ()=>{
        let {nextEl: v, prevEl: T} = e.navigation;
        if (v = r(v),
        T = r(T),
        e.enabled) {
            a();
            return
        }
        [...v, ...T].filter(w=>!!w).forEach(w=>w.classList.add(e.params.navigation.lockClass))
    }
    ),
    s("click", (v,T)=>{
        let {nextEl: w, prevEl: d} = e.navigation;
        w = r(w),
        d = r(d);
        const c = T.target;
        if (e.params.navigation.hideOnClick && !d.includes(c) && !w.includes(c)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === c || e.pagination.el.contains(c)))
                return;
            let m;
            w.length ? m = w[0].classList.contains(e.params.navigation.hiddenClass) : d.length && (m = d[0].classList.contains(e.params.navigation.hiddenClass)),
            n(m === !0 ? "navigationShow" : "navigationHide"),
            [...w, ...d].filter(x=>!!x).forEach(x=>x.classList.toggle(e.params.navigation.hiddenClass))
        }
    }
    );
    const g = ()=>{
        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
        p(),
        a()
    }
      , S = ()=>{
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
        h()
    }
    ;
    Object.assign(e.navigation, {
        enable: g,
        disable: S,
        update: a,
        init: p,
        destroy: h
    })
}
function N(i) {
    return i === void 0 && (i = ""),
    `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function si(i) {
    let {swiper: e, extendParams: t, on: s, emit: n} = i;
    const r = "swiper-pagination";
    t({
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
            formatFractionCurrent: d=>d,
            formatFractionTotal: d=>d,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
        }
    }),
    e.pagination = {
        el: null,
        bullets: []
    };
    let o, l = 0;
    const a = d=>(Array.isArray(d) ? d : [d]).filter(c=>!!c);
    function u() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }
    function f(d, c) {
        const {bulletActiveClass: m} = e.params.pagination;
        !d || (d = d[`${c === "prev" ? "previous" : "next"}ElementSibling`],
        d && (d.classList.add(`${m}-${c}`),
        d = d[`${c === "prev" ? "previous" : "next"}ElementSibling`],
        d && d.classList.add(`${m}-${c}-${c}`)))
    }
    function p(d) {
        const c = d.target.closest(N(e.params.pagination.bulletClass));
        if (!c)
            return;
        d.preventDefault();
        const m = q(c) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === m)
                return;
            e.slideToLoop(m)
        } else
            e.slideTo(m)
    }
    function h() {
        const d = e.rtl
          , c = e.params.pagination;
        if (u())
            return;
        let m = e.pagination.el;
        m = a(m);
        let x, C;
        const z = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , A = e.params.loop ? Math.ceil(z / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (C = e.previousRealIndex || 0,
        x = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex != "undefined" ? (x = e.snapIndex,
        C = e.previousSnapIndex) : (C = e.previousIndex || 0,
        x = e.activeIndex || 0),
        c.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const I = e.pagination.bullets;
            let y, E, P;
            if (c.dynamicBullets && (o = J(I[0], e.isHorizontal() ? "width" : "height", !0),
            m.forEach(b=>{
                b.style[e.isHorizontal() ? "width" : "height"] = `${o * (c.dynamicMainBullets + 4)}px`
            }
            ),
            c.dynamicMainBullets > 1 && C !== void 0 && (l += x - (C || 0),
            l > c.dynamicMainBullets - 1 ? l = c.dynamicMainBullets - 1 : l < 0 && (l = 0)),
            y = Math.max(x - l, 0),
            E = y + (Math.min(I.length, c.dynamicMainBullets) - 1),
            P = (E + y) / 2),
            I.forEach(b=>{
                const M = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(L=>`${c.bulletActiveClass}${L}`)].map(L=>typeof L == "string" && L.includes(" ") ? L.split(" ") : L).flat();
                b.classList.remove(...M)
            }
            ),
            m.length > 1)
                I.forEach(b=>{
                    const M = q(b);
                    M === x ? b.classList.add(...c.bulletActiveClass.split(" ")) : e.isElement && b.setAttribute("part", "bullet"),
                    c.dynamicBullets && (M >= y && M <= E && b.classList.add(...`${c.bulletActiveClass}-main`.split(" ")),
                    M === y && f(b, "prev"),
                    M === E && f(b, "next"))
                }
                );
            else {
                const b = I[x];
                if (b && b.classList.add(...c.bulletActiveClass.split(" ")),
                e.isElement && I.forEach((M,L)=>{
                    M.setAttribute("part", L === x ? "bullet-active" : "bullet")
                }
                ),
                c.dynamicBullets) {
                    const M = I[y]
                      , L = I[E];
                    for (let O = y; O <= E; O += 1)
                        I[O] && I[O].classList.add(...`${c.bulletActiveClass}-main`.split(" "));
                    f(M, "prev"),
                    f(L, "next")
                }
            }
            if (c.dynamicBullets) {
                const b = Math.min(I.length, c.dynamicMainBullets + 4)
                  , M = (o * b - o) / 2 - P * o
                  , L = d ? "right" : "left";
                I.forEach(O=>{
                    O.style[e.isHorizontal() ? L : "top"] = `${M}px`
                }
                )
            }
        }
        m.forEach((I,y)=>{
            if (c.type === "fraction" && (I.querySelectorAll(N(c.currentClass)).forEach(E=>{
                E.textContent = c.formatFractionCurrent(x + 1)
            }
            ),
            I.querySelectorAll(N(c.totalClass)).forEach(E=>{
                E.textContent = c.formatFractionTotal(A)
            }
            )),
            c.type === "progressbar") {
                let E;
                c.progressbarOpposite ? E = e.isHorizontal() ? "vertical" : "horizontal" : E = e.isHorizontal() ? "horizontal" : "vertical";
                const P = (x + 1) / A;
                let b = 1
                  , M = 1;
                E === "horizontal" ? b = P : M = P,
                I.querySelectorAll(N(c.progressbarFillClass)).forEach(L=>{
                    L.style.transform = `translate3d(0,0,0) scaleX(${b}) scaleY(${M})`,
                    L.style.transitionDuration = `${e.params.speed}ms`
                }
                )
            }
            c.type === "custom" && c.renderCustom ? (I.innerHTML = c.renderCustom(e, x + 1, A),
            y === 0 && n("paginationRender", I)) : (y === 0 && n("paginationRender", I),
            n("paginationUpdate", I)),
            e.params.watchOverflow && e.enabled && I.classList[e.isLocked ? "add" : "remove"](c.lockClass)
        }
        )
    }
    function g() {
        const d = e.params.pagination;
        if (u())
            return;
        const c = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let m = e.pagination.el;
        m = a(m);
        let x = "";
        if (d.type === "bullets") {
            let C = e.params.loop ? Math.ceil(c / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && C > c && (C = c);
            for (let z = 0; z < C; z += 1)
                d.renderBullet ? x += d.renderBullet.call(e, z, d.bulletClass) : x += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${d.bulletClass}"></${d.bulletElement}>`
        }
        d.type === "fraction" && (d.renderFraction ? x = d.renderFraction.call(e, d.currentClass, d.totalClass) : x = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),
        d.type === "progressbar" && (d.renderProgressbar ? x = d.renderProgressbar.call(e, d.progressbarFillClass) : x = `<span class="${d.progressbarFillClass}"></span>`),
        e.pagination.bullets = [],
        m.forEach(C=>{
            d.type !== "custom" && (C.innerHTML = x || ""),
            d.type === "bullets" && e.pagination.bullets.push(...C.querySelectorAll(N(d.bulletClass)))
        }
        ),
        d.type !== "custom" && n("paginationRender", m[0])
    }
    function S() {
        e.params.pagination = he(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const d = e.params.pagination;
        if (!d.el)
            return;
        let c;
        typeof d.el == "string" && e.isElement && (c = e.el.querySelector(d.el)),
        !c && typeof d.el == "string" && (c = [...document.querySelectorAll(d.el)]),
        c || (c = d.el),
        !(!c || c.length === 0) && (e.params.uniqueNavElements && typeof d.el == "string" && Array.isArray(c) && c.length > 1 && (c = [...e.el.querySelectorAll(d.el)],
        c.length > 1 && (c = c.filter(m=>me(m, ".swiper")[0] === e.el)[0])),
        Array.isArray(c) && c.length === 1 && (c = c[0]),
        Object.assign(e.pagination, {
            el: c
        }),
        c = a(c),
        c.forEach(m=>{
            d.type === "bullets" && d.clickable && m.classList.add(...(d.clickableClass || "").split(" ")),
            m.classList.add(d.modifierClass + d.type),
            m.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.type === "bullets" && d.dynamicBullets && (m.classList.add(`${d.modifierClass}${d.type}-dynamic`),
            l = 0,
            d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
            d.type === "progressbar" && d.progressbarOpposite && m.classList.add(d.progressbarOppositeClass),
            d.clickable && m.addEventListener("click", p),
            e.enabled || m.classList.add(d.lockClass)
        }
        ))
    }
    function v() {
        const d = e.params.pagination;
        if (u())
            return;
        let c = e.pagination.el;
        c && (c = a(c),
        c.forEach(m=>{
            m.classList.remove(d.hiddenClass),
            m.classList.remove(d.modifierClass + d.type),
            m.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.clickable && (m.classList.remove(...(d.clickableClass || "").split(" ")),
            m.removeEventListener("click", p))
        }
        )),
        e.pagination.bullets && e.pagination.bullets.forEach(m=>m.classList.remove(...d.bulletActiveClass.split(" ")))
    }
    s("changeDirection", ()=>{
        if (!e.pagination || !e.pagination.el)
            return;
        const d = e.params.pagination;
        let {el: c} = e.pagination;
        c = a(c),
        c.forEach(m=>{
            m.classList.remove(d.horizontalClass, d.verticalClass),
            m.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass)
        }
        )
    }
    ),
    s("init", ()=>{
        e.params.pagination.enabled === !1 ? w() : (S(),
        g(),
        h())
    }
    ),
    s("activeIndexChange", ()=>{
        typeof e.snapIndex == "undefined" && h()
    }
    ),
    s("snapIndexChange", ()=>{
        h()
    }
    ),
    s("snapGridLengthChange", ()=>{
        g(),
        h()
    }
    ),
    s("destroy", ()=>{
        v()
    }
    ),
    s("enable disable", ()=>{
        let {el: d} = e.pagination;
        d && (d = a(d),
        d.forEach(c=>c.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }
    ),
    s("lock unlock", ()=>{
        h()
    }
    ),
    s("click", (d,c)=>{
        const m = c.target
          , x = a(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && x && x.length > 0 && !m.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && m === e.navigation.nextEl || e.navigation.prevEl && m === e.navigation.prevEl))
                return;
            const C = x[0].classList.contains(e.params.pagination.hiddenClass);
            n(C === !0 ? "paginationShow" : "paginationHide"),
            x.forEach(z=>z.classList.toggle(e.params.pagination.hiddenClass))
        }
    }
    );
    const T = ()=>{
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let {el: d} = e.pagination;
        d && (d = a(d),
        d.forEach(c=>c.classList.remove(e.params.pagination.paginationDisabledClass))),
        S(),
        g(),
        h()
    }
      , w = ()=>{
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let {el: d} = e.pagination;
        d && (d = a(d),
        d.forEach(c=>c.classList.add(e.params.pagination.paginationDisabledClass))),
        v()
    }
    ;
    Object.assign(e.pagination, {
        enable: T,
        disable: w,
        render: g,
        update: h,
        init: S,
        destroy: v
    })
}
function Ne(i) {
    const {effect: e, swiper: t, on: s, setTranslate: n, setTransition: r, overwriteParams: o, perspective: l, recreateShadows: a, getEffectParams: u} = i;
    s("beforeInit", ()=>{
        if (t.params.effect !== e)
            return;
        t.classNames.push(`${t.params.containerModifierClass}${e}`),
        l && l() && t.classNames.push(`${t.params.containerModifierClass}3d`);
        const p = o ? o() : {};
        Object.assign(t.params, p),
        Object.assign(t.originalParams, p)
    }
    ),
    s("setTranslate", ()=>{
        t.params.effect === e && n()
    }
    ),
    s("setTransition", (p,h)=>{
        t.params.effect === e && r(h)
    }
    ),
    s("transitionEnd", ()=>{
        if (t.params.effect === e && a) {
            if (!u || !u().slideShadows)
                return;
            t.slides.forEach(p=>{
                p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())
            }
            ),
            a()
        }
    }
    );
    let f;
    s("virtualUpdate", ()=>{
        t.params.effect === e && (t.slides.length || (f = !0),
        requestAnimationFrame(()=>{
            f && t.slides && t.slides.length && (n(),
            f = !1)
        }
        ))
    }
    )
}
function He(i, e) {
    const t = Z(e);
    return t !== e && (t.style.backfaceVisibility = "hidden",
    t.style["-webkit-backface-visibility"] = "hidden"),
    t
}
function Re(i) {
    let {swiper: e, duration: t, transformElements: s, allSlides: n} = i;
    const {activeIndex: r} = e
      , o = l=>l.parentElement ? l.parentElement : e.slides.filter(u=>u.shadowRoot && u.shadowRoot === l.parentNode)[0];
    if (e.params.virtualTranslate && t !== 0) {
        let l = !1, a;
        n ? a = s : a = s.filter(u=>{
            const f = u.classList.contains("swiper-slide-transform") ? o(u) : u;
            return e.getSlideIndex(f) === r
        }
        ),
        a.forEach(u=>{
            Fe(u, ()=>{
                if (l || !e || e.destroyed)
                    return;
                l = !0,
                e.animating = !1;
                const f = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                e.wrapperEl.dispatchEvent(f)
            }
            )
        }
        )
    }
}
function _e(i, e, t) {
    const s = `swiper-slide-shadow${t ? `-${t}` : ""}${i ? ` swiper-slide-shadow-${i}` : ""}`
      , n = Z(e);
    let r = n.querySelector(`.${s.split(" ").join(".")}`);
    return r || (r = F("div", s.split(" ")),
    n.append(r)),
    r
}
function ri(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
            }
        }
    });
    const n = l=>typeof l == "string" ? l : `${l}px`;
    Ne({
        effect: "creative",
        swiper: e,
        on: s,
        setTranslate: ()=>{
            const {slides: l, wrapperEl: a, slidesSizesGrid: u} = e
              , f = e.params.creativeEffect
              , {progressMultiplier: p} = f
              , h = e.params.centeredSlides;
            if (h) {
                const g = u[0] / 2 - e.params.slidesOffsetBefore || 0;
                a.style.transform = `translateX(calc(50% - ${g}px))`
            }
            for (let g = 0; g < l.length; g += 1) {
                const S = l[g]
                  , v = S.progress
                  , T = Math.min(Math.max(S.progress, -f.limitProgress), f.limitProgress);
                let w = T;
                h || (w = Math.min(Math.max(S.originalProgress, -f.limitProgress), f.limitProgress));
                const d = S.swiperSlideOffset
                  , c = [e.params.cssMode ? -d - e.translate : -d, 0, 0]
                  , m = [0, 0, 0];
                let x = !1;
                e.isHorizontal() || (c[1] = c[0],
                c[0] = 0);
                let C = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1
                };
                T < 0 ? (C = f.next,
                x = !0) : T > 0 && (C = f.prev,
                x = !0),
                c.forEach((b,M)=>{
                    c[M] = `calc(${b}px + (${n(C.translate[M])} * ${Math.abs(T * p)}))`
                }
                ),
                m.forEach((b,M)=>{
                    m[M] = C.rotate[M] * Math.abs(T * p)
                }
                ),
                S.style.zIndex = -Math.abs(Math.round(v)) + l.length;
                const z = c.join(", ")
                  , A = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`
                  , I = w < 0 ? `scale(${1 + (1 - C.scale) * w * p})` : `scale(${1 - (1 - C.scale) * w * p})`
                  , y = w < 0 ? 1 + (1 - C.opacity) * w * p : 1 - (1 - C.opacity) * w * p
                  , E = `translate3d(${z}) ${A} ${I}`;
                if (x && C.shadow || !x) {
                    let b = S.querySelector(".swiper-slide-shadow");
                    if (!b && C.shadow && (b = _e("creative", S)),
                    b) {
                        const M = f.shadowPerProgress ? T * (1 / f.limitProgress) : T;
                        b.style.opacity = Math.min(Math.max(Math.abs(M), 0), 1)
                    }
                }
                const P = He(f, S);
                P.style.transform = E,
                P.style.opacity = y,
                C.origin && (P.style.transformOrigin = C.origin)
            }
        }
        ,
        setTransition: l=>{
            const a = e.slides.map(u=>Z(u));
            a.forEach(u=>{
                u.style.transitionDuration = `${l}ms`,
                u.querySelectorAll(".swiper-slide-shadow").forEach(f=>{
                    f.style.transitionDuration = `${l}ms`
                }
                )
            }
            ),
            Re({
                swiper: e,
                duration: l,
                transformElements: a,
                allSlides: !0
            })
        }
        ,
        perspective: ()=>e.params.creativeEffect.perspective,
        overwriteParams: ()=>({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
let Q;
function We() {
    const i = k()
      , e = V();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    }
}
function ge() {
    return Q || (Q = We()),
    Q
}
let ee;
function qe(i) {
    let {userAgent: e} = i === void 0 ? {} : i;
    const t = ge()
      , s = k()
      , n = s.navigator.platform
      , r = e || s.navigator.userAgent
      , o = {
        ios: !1,
        android: !1
    }
      , l = s.screen.width
      , a = s.screen.height
      , u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let f = r.match(/(iPad).*OS\s([\d_]+)/);
    const p = r.match(/(iPod)(.*OS\s([\d_]+))?/)
      , h = !f && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , g = n === "Win32";
    let S = n === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !f && S && t.touch && v.indexOf(`${l}x${a}`) >= 0 && (f = r.match(/(Version)\/([\d.]+)/),
    f || (f = [0, 1, "13_0_0"]),
    S = !1),
    u && !g && (o.os = "android",
    o.android = !0),
    (f || h || p) && (o.os = "ios",
    o.ios = !0),
    o
}
function je(i) {
    return i === void 0 && (i = {}),
    ee || (ee = qe(i)),
    ee
}
let te;
function Ye() {
    const i = k();
    let e = !1;
    function t() {
        const s = i.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    if (t()) {
        const s = String(i.navigator.userAgent);
        if (s.includes("Version/")) {
            const [n,r] = s.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));
            e = n < 16 || n === 16 && r < 2
        }
    }
    return {
        isSafari: e || t(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
    }
}
function Xe() {
    return te || (te = Ye()),
    te
}
function Ue(i) {
    let {swiper: e, on: t, emit: s} = i;
    const n = k();
    let r = null
      , o = null;
    const l = ()=>{
        !e || e.destroyed || !e.initialized || (s("beforeResize"),
        s("resize"))
    }
      , a = ()=>{
        !e || e.destroyed || !e.initialized || (r = new ResizeObserver(p=>{
            o = n.requestAnimationFrame(()=>{
                const {width: h, height: g} = e;
                let S = h
                  , v = g;
                p.forEach(T=>{
                    let {contentBoxSize: w, contentRect: d, target: c} = T;
                    c && c !== e.el || (S = d ? d.width : (w[0] || w).inlineSize,
                    v = d ? d.height : (w[0] || w).blockSize)
                }
                ),
                (S !== h || v !== g) && l()
            }
            )
        }
        ),
        r.observe(e.el))
    }
      , u = ()=>{
        o && n.cancelAnimationFrame(o),
        r && r.unobserve && e.el && (r.unobserve(e.el),
        r = null)
    }
      , f = ()=>{
        !e || e.destroyed || !e.initialized || s("orientationchange")
    }
    ;
    t("init", ()=>{
        if (e.params.resizeObserver && typeof n.ResizeObserver != "undefined") {
            a();
            return
        }
        n.addEventListener("resize", l),
        n.addEventListener("orientationchange", f)
    }
    ),
    t("destroy", ()=>{
        u(),
        n.removeEventListener("resize", l),
        n.removeEventListener("orientationchange", f)
    }
    )
}
function Ke(i) {
    let {swiper: e, extendParams: t, on: s, emit: n} = i;
    const r = []
      , o = k()
      , l = function(f, p) {
        p === void 0 && (p = {});
        const h = o.MutationObserver || o.WebkitMutationObserver
          , g = new h(S=>{
            if (e.__preventObserver__)
                return;
            if (S.length === 1) {
                n("observerUpdate", S[0]);
                return
            }
            const v = function() {
                n("observerUpdate", S[0])
            };
            o.requestAnimationFrame ? o.requestAnimationFrame(v) : o.setTimeout(v, 0)
        }
        );
        g.observe(f, {
            attributes: typeof p.attributes == "undefined" ? !0 : p.attributes,
            childList: typeof p.childList == "undefined" ? !0 : p.childList,
            characterData: typeof p.characterData == "undefined" ? !0 : p.characterData
        }),
        r.push(g)
    }
      , a = ()=>{
        if (!!e.params.observer) {
            if (e.params.observeParents) {
                const f = me(e.hostEl);
                for (let p = 0; p < f.length; p += 1)
                    l(f[p])
            }
            l(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            l(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , u = ()=>{
        r.forEach(f=>{
            f.disconnect()
        }
        ),
        r.splice(0, r.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    s("init", a),
    s("destroy", u)
}
var Ze = {
    on(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        const n = t ? "unshift" : "push";
        return i.split(" ").forEach(r=>{
            s.eventsListeners[r] || (s.eventsListeners[r] = []),
            s.eventsListeners[r][n](e)
        }
        ),
        s
    },
    once(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        function n() {
            s.off(i, n),
            n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
                o[l] = arguments[l];
            e.apply(s, o)
        }
        return n.__emitterProxy = e,
        s.on(i, n, t)
    },
    onAny(i, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof i != "function")
            return t;
        const s = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i),
        t
    },
    offAny(i) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(i);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(i, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s=>{
            typeof e == "undefined" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((n,r)=>{
                (n === e || n.__emitterProxy && n.__emitterProxy === e) && t.eventsListeners[s].splice(r, 1)
            }
            )
        }
        ),
        t
    },
    emit() {
        const i = this;
        if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
            return i;
        let e, t, s;
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0],
        t = r.slice(1, r.length),
        s = i) : (e = r[0].events,
        t = r[0].data,
        s = r[0].context || i),
        t.unshift(s),
        (Array.isArray(e) ? e : e.split(" ")).forEach(a=>{
            i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(u=>{
                u.apply(s, [a, ...t])
            }
            ),
            i.eventsListeners && i.eventsListeners[a] && i.eventsListeners[a].forEach(u=>{
                u.apply(s, t)
            }
            )
        }
        ),
        i
    }
};
function Je() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width != "undefined" && i.params.width !== null ? e = i.params.width : e = s.clientWidth,
    typeof i.params.height != "undefined" && i.params.height !== null ? t = i.params.height : t = s.clientHeight,
    !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(B(s, "padding-left") || 0, 10) - parseInt(B(s, "padding-right") || 0, 10),
    t = t - parseInt(B(s, "padding-top") || 0, 10) - parseInt(B(s, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t
    }))
}
function Qe() {
    const i = this;
    function e(y, E) {
        return parseFloat(y.getPropertyValue(i.getDirectionLabel(E)) || 0)
    }
    const t = i.params
      , {wrapperEl: s, slidesEl: n, size: r, rtlTranslate: o, wrongRTL: l} = i
      , a = i.virtual && t.virtual.enabled
      , u = a ? i.virtual.slides.length : i.slides.length
      , f = D(n, `.${i.params.slideClass}, swiper-slide`)
      , p = a ? i.virtual.slides.length : f.length;
    let h = [];
    const g = []
      , S = [];
    let v = t.slidesOffsetBefore;
    typeof v == "function" && (v = t.slidesOffsetBefore.call(i));
    let T = t.slidesOffsetAfter;
    typeof T == "function" && (T = t.slidesOffsetAfter.call(i));
    const w = i.snapGrid.length
      , d = i.slidesGrid.length;
    let c = t.spaceBetween
      , m = -v
      , x = 0
      , C = 0;
    if (typeof r == "undefined")
        return;
    typeof c == "string" && c.indexOf("%") >= 0 ? c = parseFloat(c.replace("%", "")) / 100 * r : typeof c == "string" && (c = parseFloat(c)),
    i.virtualSize = -c,
    f.forEach(y=>{
        o ? y.style.marginLeft = "" : y.style.marginRight = "",
        y.style.marginBottom = "",
        y.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && (_(s, "--swiper-centered-offset-before", ""),
    _(s, "--swiper-centered-offset-after", ""));
    const z = t.grid && t.grid.rows > 1 && i.grid;
    z ? i.grid.initSlides(f) : i.grid && i.grid.unsetSlides();
    let A;
    const I = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(y=>typeof t.breakpoints[y].slidesPerView != "undefined").length > 0;
    for (let y = 0; y < p; y += 1) {
        A = 0;
        let E;
        if (f[y] && (E = f[y]),
        z && i.grid.updateSlide(y, E, f),
        !(f[y] && B(E, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                I && (f[y].style[i.getDirectionLabel("width")] = "");
                const P = getComputedStyle(E)
                  , b = E.style.transform
                  , M = E.style.webkitTransform;
                if (b && (E.style.transform = "none"),
                M && (E.style.webkitTransform = "none"),
                t.roundLengths)
                    A = i.isHorizontal() ? J(E, "width", !0) : J(E, "height", !0);
                else {
                    const L = e(P, "width")
                      , O = e(P, "padding-left")
                      , xe = e(P, "padding-right")
                      , ae = e(P, "margin-left")
                      , le = e(P, "margin-right")
                      , oe = P.getPropertyValue("box-sizing");
                    if (oe && oe === "border-box")
                        A = L + ae + le;
                    else {
                        const {clientWidth: Ee, offsetWidth: Ce} = E;
                        A = L + O + xe + ae + le + (Ce - Ee)
                    }
                }
                b && (E.style.transform = b),
                M && (E.style.webkitTransform = M),
                t.roundLengths && (A = Math.floor(A))
            } else
                A = (r - (t.slidesPerView - 1) * c) / t.slidesPerView,
                t.roundLengths && (A = Math.floor(A)),
                f[y] && (f[y].style[i.getDirectionLabel("width")] = `${A}px`);
            f[y] && (f[y].swiperSlideSize = A),
            S.push(A),
            t.centeredSlides ? (m = m + A / 2 + x / 2 + c,
            x === 0 && y !== 0 && (m = m - r / 2 - c),
            y === 0 && (m = m - r / 2 - c),
            Math.abs(m) < 1 / 1e3 && (m = 0),
            t.roundLengths && (m = Math.floor(m)),
            C % t.slidesPerGroup == 0 && h.push(m),
            g.push(m)) : (t.roundLengths && (m = Math.floor(m)),
            (C - Math.min(i.params.slidesPerGroupSkip, C)) % i.params.slidesPerGroup == 0 && h.push(m),
            g.push(m),
            m = m + A + c),
            i.virtualSize += A + c,
            x = A,
            C += 1
        }
    }
    if (i.virtualSize = Math.max(i.virtualSize, r) + T,
    o && l && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + c}px`),
    t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + c}px`),
    z && i.grid.updateWrapperSize(A, h),
    !t.centeredSlides) {
        const y = [];
        for (let E = 0; E < h.length; E += 1) {
            let P = h[E];
            t.roundLengths && (P = Math.floor(P)),
            h[E] <= i.virtualSize - r && y.push(P)
        }
        h = y,
        Math.floor(i.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 && h.push(i.virtualSize - r)
    }
    if (a && t.loop) {
        const y = S[0] + c;
        if (t.slidesPerGroup > 1) {
            const E = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup)
              , P = y * t.slidesPerGroup;
            for (let b = 0; b < E; b += 1)
                h.push(h[h.length - 1] + P)
        }
        for (let E = 0; E < i.virtual.slidesBefore + i.virtual.slidesAfter; E += 1)
            t.slidesPerGroup === 1 && h.push(h[h.length - 1] + y),
            g.push(g[g.length - 1] + y),
            i.virtualSize += y
    }
    if (h.length === 0 && (h = [0]),
    c !== 0) {
        const y = i.isHorizontal() && o ? "marginLeft" : i.getDirectionLabel("marginRight");
        f.filter((E,P)=>!t.cssMode || t.loop ? !0 : P !== f.length - 1).forEach(E=>{
            E.style[y] = `${c}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let y = 0;
        S.forEach(P=>{
            y += P + (c || 0)
        }
        ),
        y -= c;
        const E = y - r;
        h = h.map(P=>P <= 0 ? -v : P > E ? E + T : P)
    }
    if (t.centerInsufficientSlides) {
        let y = 0;
        if (S.forEach(E=>{
            y += E + (c || 0)
        }
        ),
        y -= c,
        y < r) {
            const E = (r - y) / 2;
            h.forEach((P,b)=>{
                h[b] = P - E
            }
            ),
            g.forEach((P,b)=>{
                g[b] = P + E
            }
            )
        }
    }
    if (Object.assign(i, {
        slides: f,
        snapGrid: h,
        slidesGrid: g,
        slidesSizesGrid: S
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        _(s, "--swiper-centered-offset-before", `${-h[0]}px`),
        _(s, "--swiper-centered-offset-after", `${i.size / 2 - S[S.length - 1] / 2}px`);
        const y = -i.snapGrid[0]
          , E = -i.slidesGrid[0];
        i.snapGrid = i.snapGrid.map(P=>P + y),
        i.slidesGrid = i.slidesGrid.map(P=>P + E)
    }
    if (p !== u && i.emit("slidesLengthChange"),
    h.length !== w && (i.params.watchOverflow && i.checkOverflow(),
    i.emit("snapGridLengthChange")),
    g.length !== d && i.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && i.updateSlidesOffset(),
    !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const y = `${t.containerModifierClass}backface-hidden`
          , E = i.el.classList.contains(y);
        p <= t.maxBackfaceHiddenSlides ? E || i.el.classList.add(y) : E && i.el.classList.remove(y)
    }
}
function et(i) {
    const e = this
      , t = []
      , s = e.virtual && e.params.virtual.enabled;
    let n = 0, r;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const o = l=>s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(l=>{
                t.push(l)
            }
            );
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const l = e.activeIndex + r;
                if (l > e.slides.length && !s)
                    break;
                t.push(o(l))
            }
    else
        t.push(o(e.activeIndex));
    for (r = 0; r < t.length; r += 1)
        if (typeof t[r] != "undefined") {
            const l = t[r].offsetHeight;
            n = l > n ? l : n
        }
    (n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}
function tt() {
    const i = this
      , e = i.slides
      , t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
        e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment()
}
function it(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this
      , t = e.params
      , {slides: s, rtlTranslate: n, snapGrid: r} = e;
    if (s.length === 0)
        return;
    typeof s[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
    let o = -i;
    n && (o = i),
    s.forEach(a=>{
        a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }
    ),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < s.length; a += 1) {
        const u = s[a];
        let f = u.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (f -= s[0].swiperSlideOffset);
        const p = (o + (t.centeredSlides ? e.minTranslate() : 0) - f) / (u.swiperSlideSize + l)
          , h = (o - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - f) / (u.swiperSlideSize + l)
          , g = -(o - f)
          , S = g + e.slidesSizesGrid[a]
          , v = g >= 0 && g <= e.size - e.slidesSizesGrid[a];
        (g >= 0 && g < e.size - 1 || S > 1 && S <= e.size || g <= 0 && S >= e.size) && (e.visibleSlides.push(u),
        e.visibleSlidesIndexes.push(a),
        s[a].classList.add(t.slideVisibleClass)),
        v && s[a].classList.add(t.slideFullyVisibleClass),
        u.progress = n ? -p : p,
        u.originalProgress = n ? -h : h
    }
}
function st(i) {
    const e = this;
    if (typeof i == "undefined") {
        const f = e.rtlTranslate ? -1 : 1;
        i = e && e.translate && e.translate * f || 0
    }
    const t = e.params
      , s = e.maxTranslate() - e.minTranslate();
    let {progress: n, isBeginning: r, isEnd: o, progressLoop: l} = e;
    const a = r
      , u = o;
    if (s === 0)
        n = 0,
        r = !0,
        o = !0;
    else {
        n = (i - e.minTranslate()) / s;
        const f = Math.abs(i - e.minTranslate()) < 1
          , p = Math.abs(i - e.maxTranslate()) < 1;
        r = f || n <= 0,
        o = p || n >= 1,
        f && (n = 0),
        p && (n = 1)
    }
    if (t.loop) {
        const f = e.getSlideIndexByData(0)
          , p = e.getSlideIndexByData(e.slides.length - 1)
          , h = e.slidesGrid[f]
          , g = e.slidesGrid[p]
          , S = e.slidesGrid[e.slidesGrid.length - 1]
          , v = Math.abs(i);
        v >= h ? l = (v - h) / S : l = (v + S - g) / S,
        l > 1 && (l -= 1)
    }
    Object.assign(e, {
        progress: n,
        progressLoop: l,
        isBeginning: r,
        isEnd: o
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i),
    r && !a && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    (a && !r || u && !o) && e.emit("fromEdge"),
    e.emit("progress", n)
}
function rt() {
    const i = this
      , {slides: e, params: t, slidesEl: s, activeIndex: n} = i
      , r = i.virtual && t.virtual.enabled
      , o = i.grid && t.grid && t.grid.rows > 1
      , l = p=>D(s, `.${t.slideClass}${p}, swiper-slide${p}`)[0];
    e.forEach(p=>{
        p.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
    }
    );
    let a, u, f;
    if (r)
        if (t.loop) {
            let p = n - i.virtual.slidesBefore;
            p < 0 && (p = i.virtual.slides.length + p),
            p >= i.virtual.slides.length && (p -= i.virtual.slides.length),
            a = l(`[data-swiper-slide-index="${p}"]`)
        } else
            a = l(`[data-swiper-slide-index="${n}"]`);
    else
        o ? (a = e.filter(p=>p.column === n)[0],
        f = e.filter(p=>p.column === n + 1)[0],
        u = e.filter(p=>p.column === n - 1)[0]) : a = e[n];
    a && (a.classList.add(t.slideActiveClass),
    o ? (f && f.classList.add(t.slideNextClass),
    u && u.classList.add(t.slidePrevClass)) : (f = Ve(a, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !f && (f = e[0]),
    f && f.classList.add(t.slideNextClass),
    u = Be(a, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !u === 0 && (u = e[e.length - 1]),
    u && u.classList.add(t.slidePrevClass))),
    i.emitSlidesClasses()
}
const j = (i,e)=>{
    if (!i || i.destroyed || !i.params)
        return;
    const t = ()=>i.isElement ? "swiper-slide" : `.${i.params.slideClass}`
      , s = e.closest(t());
    if (s) {
        let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
        !n && i.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            s.shadowRoot && (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),
            n && n.remove())
        }
        )),
        n && n.remove()
    }
}
  , ie = (i,e)=>{
    if (!i.slides[e])
        return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , se = i=>{
    if (!i || i.destroyed || !i.params)
        return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView)
      , n = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
        const o = n
          , l = [o - e];
        l.push(...Array.from({
            length: e
        }).map((a,u)=>o + s + u)),
        i.slides.forEach((a,u)=>{
            l.includes(a.column) && ie(i, u)
        }
        );
        return
    }
    const r = n + s - 1;
    if (i.params.rewind || i.params.loop)
        for (let o = n - e; o <= r + e; o += 1) {
            const l = (o % t + t) % t;
            (l < n || l > r) && ie(i, l)
        }
    else
        for (let o = Math.max(n - e, 0); o <= Math.min(r + e, t - 1); o += 1)
            o !== n && (o > r || o < n) && ie(i, o)
}
;
function nt(i) {
    const {slidesGrid: e, params: t} = i
      , s = i.rtlTranslate ? i.translate : -i.translate;
    let n;
    for (let r = 0; r < e.length; r += 1)
        typeof e[r + 1] != "undefined" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
    return t.normalizeSlideIndex && (n < 0 || typeof n == "undefined") && (n = 0),
    n
}
function at(i) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: s, params: n, activeIndex: r, realIndex: o, snapIndex: l} = e;
    let a = i, u;
    const f = g=>{
        let S = g - e.virtual.slidesBefore;
        return S < 0 && (S = e.virtual.slides.length + S),
        S >= e.virtual.slides.length && (S -= e.virtual.slides.length),
        S
    }
    ;
    if (typeof a == "undefined" && (a = nt(e)),
    s.indexOf(t) >= 0)
        u = s.indexOf(t);
    else {
        const g = Math.min(n.slidesPerGroupSkip, a);
        u = g + Math.floor((a - g) / n.slidesPerGroup)
    }
    if (u >= s.length && (u = s.length - 1),
    a === r && !e.params.loop) {
        u !== l && (e.snapIndex = u,
        e.emit("snapIndexChange"));
        return
    }
    if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = f(a);
        return
    }
    const p = e.grid && n.grid && n.grid.rows > 1;
    let h;
    if (e.virtual && n.virtual.enabled && n.loop)
        h = f(a);
    else if (p) {
        const g = e.slides.filter(v=>v.column === a)[0];
        let S = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(S) && (S = Math.max(e.slides.indexOf(g), 0)),
        h = Math.floor(S / n.grid.rows)
    } else if (e.slides[a]) {
        const g = e.slides[a].getAttribute("data-swiper-slide-index");
        g ? h = parseInt(g, 10) : h = a
    } else
        h = a;
    Object.assign(e, {
        previousSnapIndex: l,
        snapIndex: u,
        previousRealIndex: o,
        realIndex: h,
        previousIndex: r,
        activeIndex: a
    }),
    e.initialized && se(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function lt(i, e) {
    const t = this
      , s = t.params;
    let n = i.closest(`.${s.slideClass}, swiper-slide`);
    !n && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(l=>{
        !n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l)
    }
    );
    let r = !1, o;
    if (n) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === n) {
                r = !0,
                o = l;
                break
            }
    }
    if (n && r)
        t.clickedSlide = n,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var ot = {
    updateSize: Je,
    updateSlides: Qe,
    updateAutoHeight: et,
    updateSlidesOffset: tt,
    updateSlidesProgress: it,
    updateProgress: st,
    updateSlidesClasses: rt,
    updateActiveIndex: at,
    updateClickedSlide: lt
};
function dt(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: t, rtlTranslate: s, translate: n, wrapperEl: r} = e;
    if (t.virtualTranslate)
        return s ? -n : n;
    if (t.cssMode)
        return n;
    let o = Ge(r, i);
    return o += e.cssOverflowAdjustment(),
    s && (o = -o),
    o || 0
}
function ct(i, e) {
    const t = this
      , {rtlTranslate: s, params: n, wrapperEl: r, progress: o} = t;
    let l = 0
      , a = 0;
    const u = 0;
    t.isHorizontal() ? l = s ? -i : i : a = i,
    n.roundLengths && (l = Math.floor(l),
    a = Math.floor(a)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? l : a,
    n.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -a : n.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(),
    r.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`);
    let f;
    const p = t.maxTranslate() - t.minTranslate();
    p === 0 ? f = 0 : f = (i - t.minTranslate()) / p,
    f !== o && t.updateProgress(i),
    t.emit("setTranslate", t.translate, e)
}
function ft() {
    return -this.snapGrid[0]
}
function ut() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function pt(i, e, t, s, n) {
    i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = !0);
    const r = this
      , {params: o, wrapperEl: l} = r;
    if (r.animating && o.preventInteractionOnTransition)
        return !1;
    const a = r.minTranslate()
      , u = r.maxTranslate();
    let f;
    if (s && i > a ? f = a : s && i < u ? f = u : f = i,
    r.updateProgress(f),
    o.cssMode) {
        const p = r.isHorizontal();
        if (e === 0)
            l[p ? "scrollLeft" : "scrollTop"] = -f;
        else {
            if (!r.support.smoothScroll)
                return pe({
                    swiper: r,
                    targetPosition: -f,
                    side: p ? "left" : "top"
                }),
                !0;
            l.scrollTo({
                [p ? "left" : "top"]: -f,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0),
    r.setTranslate(f),
    t && (r.emit("beforeTransitionStart", e, n),
    r.emit("transitionEnd"))) : (r.setTransition(e),
    r.setTranslate(f),
    t && (r.emit("beforeTransitionStart", e, n),
    r.emit("transitionStart")),
    r.animating || (r.animating = !0,
    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(h) {
        !r || r.destroyed || h.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.onTranslateToWrapperTransitionEnd = null,
        delete r.onTranslateToWrapperTransitionEnd,
        t && r.emit("transitionEnd"))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
    !0
}
var mt = {
    getTranslate: dt,
    setTranslate: ct,
    minTranslate: ft,
    maxTranslate: ut,
    translateTo: pt
};
function ht(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`,
    t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""),
    t.emit("setTransition", i, e)
}
function ve(i) {
    let {swiper: e, runCallbacks: t, direction: s, step: n} = i;
    const {activeIndex: r, previousIndex: o} = e;
    let l = s;
    if (l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"),
    e.emit(`transition${n}`),
    t && r !== o) {
        if (l === "reset") {
            e.emit(`slideResetTransition${n}`);
            return
        }
        e.emit(`slideChangeTransition${n}`),
        l === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
    }
}
function gt(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(),
    ve({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "Start"
    }))
}
function vt(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    t.animating = !1,
    !s.cssMode && (t.setTransition(0),
    ve({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "End"
    }))
}
var wt = {
    setTransition: ht,
    transitionStart: gt,
    transitionEnd: vt
};
function St(i, e, t, s, n) {
    i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const r = this;
    let o = i;
    o < 0 && (o = 0);
    const {params: l, snapGrid: a, slidesGrid: u, previousIndex: f, activeIndex: p, rtlTranslate: h, wrapperEl: g, enabled: S} = r;
    if (r.animating && l.preventInteractionOnTransition || !S && !s && !n)
        return !1;
    const v = Math.min(r.params.slidesPerGroupSkip, o);
    let T = v + Math.floor((o - v) / r.params.slidesPerGroup);
    T >= a.length && (T = a.length - 1);
    const w = -a[T];
    if (l.normalizeSlideIndex)
        for (let c = 0; c < u.length; c += 1) {
            const m = -Math.floor(w * 100)
              , x = Math.floor(u[c] * 100)
              , C = Math.floor(u[c + 1] * 100);
            typeof u[c + 1] != "undefined" ? m >= x && m < C - (C - x) / 2 ? o = c : m >= x && m < C && (o = c + 1) : m >= x && (o = c)
        }
    if (r.initialized && o !== p && (!r.allowSlideNext && (h ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate()) || !r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== o))
        return !1;
    o !== (f || 0) && t && r.emit("beforeSlideChangeStart"),
    r.updateProgress(w);
    let d;
    if (o > p ? d = "next" : o < p ? d = "prev" : d = "reset",
    h && -w === r.translate || !h && w === r.translate)
        return r.updateActiveIndex(o),
        l.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        l.effect !== "slide" && r.setTranslate(w),
        d !== "reset" && (r.transitionStart(t, d),
        r.transitionEnd(t, d)),
        !1;
    if (l.cssMode) {
        const c = r.isHorizontal()
          , m = h ? w : -w;
        if (e === 0) {
            const x = r.virtual && r.params.virtual.enabled;
            x && (r.wrapperEl.style.scrollSnapType = "none",
            r._immediateVirtual = !0),
            x && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
            requestAnimationFrame(()=>{
                g[c ? "scrollLeft" : "scrollTop"] = m
            }
            )) : g[c ? "scrollLeft" : "scrollTop"] = m,
            x && requestAnimationFrame(()=>{
                r.wrapperEl.style.scrollSnapType = "",
                r._immediateVirtual = !1
            }
            )
        } else {
            if (!r.support.smoothScroll)
                return pe({
                    swiper: r,
                    targetPosition: m,
                    side: c ? "left" : "top"
                }),
                !0;
            g.scrollTo({
                [c ? "left" : "top"]: m,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e),
    r.setTranslate(w),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, s),
    r.transitionStart(t, d),
    e === 0 ? r.transitionEnd(t, d) : r.animating || (r.animating = !0,
    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(m) {
        !r || r.destroyed || m.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.onSlideToWrapperTransitionEnd = null,
        delete r.onSlideToWrapperTransitionEnd,
        r.transitionEnd(t, d))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
    !0
}
function Tt(i, e, t, s) {
    i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const n = this
      , r = n.grid && n.params.grid && n.params.grid.rows > 1;
    let o = i;
    if (n.params.loop)
        if (n.virtual && n.params.virtual.enabled)
            o = o + n.virtual.slidesBefore;
        else {
            let l;
            if (r) {
                const h = o * n.params.grid.rows;
                l = n.slides.filter(g=>g.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else
                l = n.getSlideIndexByData(o);
            const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length
              , {centeredSlides: u} = n.params;
            let f = n.params.slidesPerView;
            f === "auto" ? f = n.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(n.params.slidesPerView, 10)),
            u && f % 2 == 0 && (f = f + 1));
            let p = a - l < f;
            if (u && (p = p || l < Math.ceil(f / 2)),
            p) {
                const h = u ? l < n.activeIndex ? "prev" : "next" : l - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                n.loopFix({
                    direction: h,
                    slideTo: !0,
                    activeSlideIndex: h === "next" ? l + 1 : l - a + 1,
                    slideRealIndex: h === "next" ? n.realIndex : void 0
                })
            }
            if (r) {
                const h = o * n.params.grid.rows;
                o = n.slides.filter(g=>g.getAttribute("data-swiper-slide-index") * 1 === h)[0].column
            } else
                o = n.getSlideIndexByData(o)
        }
    return requestAnimationFrame(()=>{
        n.slideTo(o, e, t, s)
    }
    ),
    n
}
function bt(i, e, t) {
    i === void 0 && (i = this.params.speed),
    e === void 0 && (e = !0);
    const s = this
      , {enabled: n, params: r, animating: o} = s;
    if (!n)
        return s;
    let l = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l
      , u = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (o && !u && r.loopPreventsSliding)
            return !1;
        if (s.loopFix({
            direction: "next"
        }),
        s._clientLeft = s.wrapperEl.clientLeft,
        s.activeIndex === s.slides.length - 1 && r.cssMode)
            return requestAnimationFrame(()=>{
                s.slideTo(s.activeIndex + a, i, e, t)
            }
            ),
            !0
    }
    return r.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + a, i, e, t)
}
function yt(i, e, t) {
    i === void 0 && (i = this.params.speed),
    e === void 0 && (e = !0);
    const s = this
      , {params: n, snapGrid: r, slidesGrid: o, rtlTranslate: l, enabled: a, animating: u} = s;
    if (!a)
        return s;
    const f = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (u && !f && n.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "prev"
        }),
        s._clientLeft = s.wrapperEl.clientLeft
    }
    const p = l ? s.translate : -s.translate;
    function h(w) {
        return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w)
    }
    const g = h(p)
      , S = r.map(w=>h(w));
    let v = r[S.indexOf(g) - 1];
    if (typeof v == "undefined" && n.cssMode) {
        let w;
        r.forEach((d,c)=>{
            g >= d && (w = c)
        }
        ),
        typeof w != "undefined" && (v = r[w > 0 ? w - 1 : w])
    }
    let T = 0;
    if (typeof v != "undefined" && (T = o.indexOf(v),
    T < 0 && (T = s.activeIndex - 1),
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (T = T - s.slidesPerViewDynamic("previous", !0) + 1,
    T = Math.max(T, 0))),
    n.rewind && s.isBeginning) {
        const w = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(w, i, e, t)
    } else if (n.loop && s.activeIndex === 0 && n.cssMode)
        return requestAnimationFrame(()=>{
            s.slideTo(T, i, e, t)
        }
        ),
        !0;
    return s.slideTo(T, i, e, t)
}
function xt(i, e, t) {
    i === void 0 && (i = this.params.speed),
    e === void 0 && (e = !0);
    const s = this;
    return s.slideTo(s.activeIndex, i, e, t)
}
function Et(i, e, t, s) {
    i === void 0 && (i = this.params.speed),
    e === void 0 && (e = !0),
    s === void 0 && (s = .5);
    const n = this;
    let r = n.activeIndex;
    const o = Math.min(n.params.slidesPerGroupSkip, r)
      , l = o + Math.floor((r - o) / n.params.slidesPerGroup)
      , a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[l]) {
        const u = n.snapGrid[l]
          , f = n.snapGrid[l + 1];
        a - u > (f - u) * s && (r += n.params.slidesPerGroup)
    } else {
        const u = n.snapGrid[l - 1]
          , f = n.snapGrid[l];
        a - u <= (f - u) * s && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0),
    r = Math.min(r, n.slidesGrid.length - 1),
    n.slideTo(r, i, e, t)
}
function Ct() {
    const i = this
      , {params: e, slidesEl: t} = i
      , s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let n = i.clickedIndex, r;
    const o = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (i.animating)
            return;
        r = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? n < i.loopedSlides - s / 2 || n > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(),
        n = i.getSlideIndex(D(t, `${o}[data-swiper-slide-index="${r}"]`)[0]),
        K(()=>{
            i.slideTo(n)
        }
        )) : i.slideTo(n) : n > i.slides.length - s ? (i.loopFix(),
        n = i.getSlideIndex(D(t, `${o}[data-swiper-slide-index="${r}"]`)[0]),
        K(()=>{
            i.slideTo(n)
        }
        )) : i.slideTo(n)
    } else
        i.slideTo(n)
}
var Pt = {
    slideTo: St,
    slideToLoop: Tt,
    slideNext: bt,
    slidePrev: yt,
    slideReset: xt,
    slideToClosest: Et,
    slideToClickedSlide: Ct
};
function Mt(i) {
    const e = this
      , {params: t, slidesEl: s} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    const n = ()=>{
        D(s, `.${t.slideClass}, swiper-slide`).forEach((p,h)=>{
            p.setAttribute("data-swiper-slide-index", h)
        }
        )
    }
      , r = e.grid && t.grid && t.grid.rows > 1
      , o = t.slidesPerGroup * (r ? t.grid.rows : 1)
      , l = e.slides.length % o != 0
      , a = r && e.slides.length % t.grid.rows != 0
      , u = f=>{
        for (let p = 0; p < f; p += 1) {
            const h = e.isElement ? F("swiper-slide", [t.slideBlankClass]) : F("div", [t.slideClass, t.slideBlankClass]);
            e.slidesEl.append(h)
        }
    }
    ;
    if (l) {
        if (t.loopAddBlankSlides) {
            const f = o - e.slides.length % o;
            u(f),
            e.recalcSlides(),
            e.updateSlides()
        } else
            W("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else if (a) {
        if (t.loopAddBlankSlides) {
            const f = t.grid.rows - e.slides.length % t.grid.rows;
            u(f),
            e.recalcSlides(),
            e.updateSlides()
        } else
            W("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else
        n();
    e.loopFix({
        slideRealIndex: i,
        direction: t.centeredSlides ? void 0 : "next"
    })
}
function It(i) {
    let {slideRealIndex: e, slideTo: t=!0, direction: s, setTranslate: n, activeSlideIndex: r, byController: o, byMousewheel: l} = i === void 0 ? {} : i;
    const a = this;
    if (!a.params.loop)
        return;
    a.emit("beforeLoopFix");
    const {slides: u, allowSlidePrev: f, allowSlideNext: p, slidesEl: h, params: g} = a
      , {centeredSlides: S} = g;
    if (a.allowSlidePrev = !0,
    a.allowSlideNext = !0,
    a.virtual && g.virtual.enabled) {
        t && (!g.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : g.centeredSlides && a.snapIndex < g.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
        a.allowSlidePrev = f,
        a.allowSlideNext = p,
        a.emit("loopFix");
        return
    }
    let v = g.slidesPerView;
    v === "auto" ? v = a.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(g.slidesPerView, 10)),
    S && v % 2 == 0 && (v = v + 1));
    const T = g.slidesPerGroupAuto ? v : g.slidesPerGroup;
    let w = T;
    w % T != 0 && (w += T - w % T),
    w += g.loopAdditionalSlides,
    a.loopedSlides = w;
    const d = a.grid && g.grid && g.grid.rows > 1;
    u.length < v + w ? W("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : d && g.grid.fill === "row" && W("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const c = []
      , m = [];
    let x = a.activeIndex;
    typeof r == "undefined" ? r = a.getSlideIndex(u.filter(b=>b.classList.contains(g.slideActiveClass))[0]) : x = r;
    const C = s === "next" || !s
      , z = s === "prev" || !s;
    let A = 0
      , I = 0;
    const y = d ? Math.ceil(u.length / g.grid.rows) : u.length
      , P = (d ? u[r].column : r) + (S && typeof n == "undefined" ? -v / 2 + .5 : 0);
    if (P < w) {
        A = Math.max(w - P, T);
        for (let b = 0; b < w - P; b += 1) {
            const M = b - Math.floor(b / y) * y;
            if (d) {
                const L = y - M - 1;
                for (let O = u.length - 1; O >= 0; O -= 1)
                    u[O].column === L && c.push(O)
            } else
                c.push(y - M - 1)
        }
    } else if (P + v > y - w) {
        I = Math.max(P - (y - w * 2), T);
        for (let b = 0; b < I; b += 1) {
            const M = b - Math.floor(b / y) * y;
            d ? u.forEach((L,O)=>{
                L.column === M && m.push(O)
            }
            ) : m.push(M)
        }
    }
    if (z && c.forEach(b=>{
        u[b].swiperLoopMoveDOM = !0,
        h.prepend(u[b]),
        u[b].swiperLoopMoveDOM = !1
    }
    ),
    C && m.forEach(b=>{
        u[b].swiperLoopMoveDOM = !0,
        h.append(u[b]),
        u[b].swiperLoopMoveDOM = !1
    }
    ),
    a.recalcSlides(),
    g.slidesPerView === "auto" ? a.updateSlides() : d && (c.length > 0 && z || m.length > 0 && C) && a.slides.forEach((b,M)=>{
        a.grid.updateSlide(M, b, a.slides)
    }
    ),
    g.watchSlidesProgress && a.updateSlidesOffset(),
    t) {
        if (c.length > 0 && z) {
            if (typeof e == "undefined") {
                const b = a.slidesGrid[x]
                  , L = a.slidesGrid[x + A] - b;
                l ? a.setTranslate(a.translate - L) : (a.slideTo(x + A, 0, !1, !0),
                n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - L,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - L))
            } else if (n) {
                const b = d ? c.length / g.grid.rows : c.length;
                a.slideTo(a.activeIndex + b, 0, !1, !0),
                a.touchEventsData.currentTranslate = a.translate
            }
        } else if (m.length > 0 && C)
            if (typeof e == "undefined") {
                const b = a.slidesGrid[x]
                  , L = a.slidesGrid[x - I] - b;
                l ? a.setTranslate(a.translate - L) : (a.slideTo(x - I, 0, !1, !0),
                n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - L,
                a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - L))
            } else {
                const b = d ? m.length / g.grid.rows : m.length;
                a.slideTo(a.activeIndex - b, 0, !1, !0)
            }
    }
    if (a.allowSlidePrev = f,
    a.allowSlideNext = p,
    a.controller && a.controller.control && !o) {
        const b = {
            slideRealIndex: e,
            direction: s,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(a.controller.control) ? a.controller.control.forEach(M=>{
            !M.destroyed && M.params.loop && M.loopFix(X(Y({}, b), {
                slideTo: M.params.slidesPerView === g.slidesPerView ? t : !1
            }))
        }
        ) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix(X(Y({}, b), {
            slideTo: a.controller.control.params.slidesPerView === g.slidesPerView ? t : !1
        }))
    }
    a.emit("loopFix")
}
function Lt() {
    const i = this
      , {params: e, slidesEl: t} = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled)
        return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach(n=>{
        const r = typeof n.swiperSlideIndex == "undefined" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
        s[r] = n
    }
    ),
    i.slides.forEach(n=>{
        n.removeAttribute("data-swiper-slide-index")
    }
    ),
    s.forEach(n=>{
        t.append(n)
    }
    ),
    i.recalcSlides(),
    i.slideTo(i.realIndex, 0)
}
var At = {
    loopCreate: Mt,
    loopFix: It,
    loopDestroy: Lt
};
function zt(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = i ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1
    }
    )
}
function Ot() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0),
    i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    i.isElement && requestAnimationFrame(()=>{
        i.__preventObserver__ = !1
    }
    ))
}
var kt = {
    setGrabCursor: zt,
    unsetGrabCursor: Ot
};
function $t(i, e) {
    e === void 0 && (e = this);
    function t(s) {
        if (!s || s === V() || s === k())
            return null;
        s.assignedSlot && (s = s.assignedSlot);
        const n = s.closest(i);
        return !n && !s.getRootNode ? null : n || t(s.getRootNode().host)
    }
    return t(e)
}
function we(i, e, t) {
    const s = k()
      , {params: n} = i
      , r = n.edgeSwipeDetection
      , o = n.edgeSwipeThreshold;
    return r && (t <= o || t >= s.innerWidth - o) ? r === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function Gt(i) {
    const e = this
      , t = V();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const n = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (n.pointerId !== null && n.pointerId !== s.pointerId)
            return;
        n.pointerId = s.pointerId
    } else
        s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        we(e, s, s.targetTouches[0].pageX);
        return
    }
    const {params: r, touches: o, enabled: l} = e;
    if (!l || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
        return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let a = s.target;
    if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which"in s && s.which === 3 || "button"in s && s.button > 0 || n.isTouched && n.isMoved)
        return;
    const u = !!r.noSwipingClass && r.noSwipingClass !== ""
      , f = s.composedPath ? s.composedPath() : s.path;
    u && s.target && s.target.shadowRoot && f && (a = f[0]);
    const p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
      , h = !!(s.target && s.target.shadowRoot);
    if (r.noSwiping && (h ? $t(p, a) : a.closest(p))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !a.closest(r.swipeHandler))
        return;
    o.currentX = s.pageX,
    o.currentY = s.pageY;
    const g = o.currentX
      , S = o.currentY;
    if (!we(e, s, g))
        return;
    Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    o.startX = g,
    o.startY = S,
    n.touchStartTime = H(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    r.threshold > 0 && (n.allowThresholdMove = !1);
    let v = !0;
    a.matches(n.focusableElements) && (v = !1,
    a.nodeName === "SELECT" && (n.isTouched = !1)),
    t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== a && t.activeElement.blur();
    const T = v && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || T) && !a.isContentEditable && s.preventDefault(),
    r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", s)
}
function Dt(i) {
    const e = V()
      , t = this
      , s = t.touchEventsData
      , {params: n, touches: r, rtlTranslate: o, enabled: l} = t;
    if (!l || !n.simulateTouch && i.pointerType === "mouse")
        return;
    let a = i;
    if (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId))
        return;
    let u;
    if (a.type === "touchmove") {
        if (u = [...a.changedTouches].filter(C=>C.identifier === s.touchId)[0],
        !u || u.identifier !== s.touchId)
            return
    } else
        u = a;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", a);
        return
    }
    const f = u.pageX
      , p = u.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = f,
        r.startY = p;
        return
    }
    if (!t.allowTouchMove) {
        a.target.matches(s.focusableElements) || (t.allowClick = !1),
        s.isTouched && (Object.assign(r, {
            startX: f,
            startY: p,
            currentX: f,
            currentY: p
        }),
        s.touchStartTime = H());
        return
    }
    if (n.touchReleaseOnEdges && !n.loop) {
        if (t.isVertical()) {
            if (p < r.startY && t.translate <= t.maxTranslate() || p > r.startY && t.translate >= t.minTranslate()) {
                s.isTouched = !1,
                s.isMoved = !1;
                return
            }
        } else if (f < r.startX && t.translate <= t.maxTranslate() || f > r.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
        s.isMoved = !0,
        t.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && t.emit("touchMove", a),
    r.previousX = r.currentX,
    r.previousY = r.currentY,
    r.currentX = f,
    r.currentY = p;
    const h = r.currentX - r.startX
      , g = r.currentY - r.startY;
    if (t.params.threshold && Math.sqrt(h ** 2 + g ** 2) < t.params.threshold)
        return;
    if (typeof s.isScrolling == "undefined") {
        let C;
        t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : h * h + g * g >= 25 && (C = Math.atan2(Math.abs(g), Math.abs(h)) * 180 / Math.PI,
        s.isScrolling = t.isHorizontal() ? C > n.touchAngle : 90 - C > n.touchAngle)
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", a),
    typeof s.startMoving == "undefined" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0),
    s.isScrolling || t.zoom && t.params.zoom && t.params.zoom.enabled) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving)
        return;
    t.allowClick = !1,
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
    let S = t.isHorizontal() ? h : g
      , v = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    n.oneWayMovement && (S = Math.abs(S) * (o ? 1 : -1),
    v = Math.abs(v) * (o ? 1 : -1)),
    r.diff = S,
    S *= n.touchRatio,
    o && (S = -S,
    v = -v);
    const T = t.touchesDirection;
    t.swipeDirection = S > 0 ? "prev" : "next",
    t.touchesDirection = v > 0 ? "prev" : "next";
    const w = t.params.loop && !n.cssMode
      , d = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
        if (w && d && t.loopFix({
            direction: t.swipeDirection
        }),
        s.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const C = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(C)
        }
        s.allowMomentumBounce = !1,
        n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", a)
    }
    let c;
    if (new Date().getTime(),
    s.isMoved && s.allowThresholdMove && T !== t.touchesDirection && w && d && Math.abs(S) >= 1) {
        Object.assign(r, {
            startX: f,
            startY: p,
            currentX: f,
            currentY: p,
            startTranslate: s.currentTranslate
        }),
        s.loopSwapReset = !0,
        s.startTranslate = s.currentTranslate;
        return
    }
    t.emit("sliderMove", a),
    s.isMoved = !0,
    s.currentTranslate = S + s.startTranslate;
    let m = !0
      , x = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (x = 0),
    S > 0 ? (w && d && !c && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    s.currentTranslate > t.minTranslate() && (m = !1,
    n.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + S) ** x))) : S < 0 && (w && d && !c && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (n.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }),
    s.currentTranslate < t.maxTranslate() && (m = !1,
    n.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - S) ** x))),
    m && (a.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
        if (Math.abs(S) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                s.currentTranslate = s.startTranslate,
                r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }
    !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && t.freeMode || n.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(s.currentTranslate),
    t.setTranslate(s.currentTranslate))
}
function Bt(i) {
    const e = this
      , t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let n;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (n = [...s.changedTouches].filter(m=>m.identifier === t.touchId)[0],
        !n || n.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || s.pointerId !== t.pointerId)
            return;
        n = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: o, touches: l, rtlTranslate: a, slidesGrid: u, enabled: f} = e;
    if (!f || !o.simulateTouch && s.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && o.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const p = H()
      , h = p - t.touchStartTime;
    if (e.allowClick) {
        const m = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(m && m[0] || s.target, m),
        e.emit("tap click", s),
        h < 300 && p - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (t.lastClickTime = H(),
    K(()=>{
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let g;
    if (o.followFinger ? g = a ? e.translate : -e.translate : g = -t.currentTranslate,
    o.cssMode)
        return;
    if (o.freeMode && o.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: g
        });
        return
    }
    let S = 0
      , v = e.slidesSizesGrid[0];
    for (let m = 0; m < u.length; m += m < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
        const x = m < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        typeof u[m + x] != "undefined" ? g >= u[m] && g < u[m + x] && (S = m,
        v = u[m + x] - u[m]) : g >= u[m] && (S = m,
        v = u[u.length - 1] - u[u.length - 2])
    }
    let T = null
      , w = null;
    o.rewind && (e.isBeginning ? w = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (T = 0));
    const d = (g - u[S]) / v
      , c = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (h > o.longSwipesMs) {
        if (!o.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (d >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? T : S + c) : e.slideTo(S)),
        e.swipeDirection === "prev" && (d > 1 - o.longSwipesRatio ? e.slideTo(S + c) : w !== null && d < 0 && Math.abs(d) > o.longSwipesRatio ? e.slideTo(w) : e.slideTo(S))
    } else {
        if (!o.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(S + c) : e.slideTo(S) : (e.swipeDirection === "next" && e.slideTo(T !== null ? T : S + c),
        e.swipeDirection === "prev" && e.slideTo(w !== null ? w : S))
    }
}
function Se() {
    const i = this
      , {params: e, el: t} = i;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && i.setBreakpoint();
    const {allowSlideNext: s, allowSlidePrev: n, snapGrid: r} = i
      , o = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0,
    i.allowSlidePrev = !0,
    i.updateSize(),
    i.updateSlides(),
    i.updateSlidesClasses();
    const l = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !l ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !o ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout),
    i.autoplay.resizeTimeout = setTimeout(()=>{
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume()
    }
    , 500)),
    i.allowSlidePrev = n,
    i.allowSlideNext = s,
    i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow()
}
function Vt(i) {
    const e = this;
    !e.enabled || e.allowClick || (e.params.preventClicks && i.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (i.stopPropagation(),
    i.stopImmediatePropagation()))
}
function Ft() {
    const i = this
      , {wrapperEl: e, rtlTranslate: t, enabled: s} = i;
    if (!s)
        return;
    i.previousTranslate = i.translate,
    i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop,
    i.translate === 0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
    let n;
    const r = i.maxTranslate() - i.minTranslate();
    r === 0 ? n = 0 : n = (i.translate - i.minTranslate()) / r,
    n !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1)
}
function Nt(i) {
    const e = this;
    j(e, i.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function Ht() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0,
    i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"))
}
const Te = (i,e)=>{
    const t = V()
      , {params: s, el: n, wrapperEl: r, device: o} = i
      , l = !!s.nested
      , a = e === "on" ? "addEventListener" : "removeEventListener"
      , u = e;
    t[a]("touchstart", i.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }),
    n[a]("touchstart", i.onTouchStart, {
        passive: !1
    }),
    n[a]("pointerdown", i.onTouchStart, {
        passive: !1
    }),
    t[a]("touchmove", i.onTouchMove, {
        passive: !1,
        capture: l
    }),
    t[a]("pointermove", i.onTouchMove, {
        passive: !1,
        capture: l
    }),
    t[a]("touchend", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointerup", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointercancel", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("touchcancel", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointerout", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("pointerleave", i.onTouchEnd, {
        passive: !0
    }),
    t[a]("contextmenu", i.onTouchEnd, {
        passive: !0
    }),
    (s.preventClicks || s.preventClicksPropagation) && n[a]("click", i.onClick, !0),
    s.cssMode && r[a]("scroll", i.onScroll),
    s.updateOnWindowResize ? i[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Se, !0) : i[u]("observerUpdate", Se, !0),
    n[a]("load", i.onLoad, {
        capture: !0
    })
}
;
function Rt() {
    const i = this
      , {params: e} = i;
    i.onTouchStart = Gt.bind(i),
    i.onTouchMove = Dt.bind(i),
    i.onTouchEnd = Bt.bind(i),
    i.onDocumentTouchStart = Ht.bind(i),
    e.cssMode && (i.onScroll = Ft.bind(i)),
    i.onClick = Vt.bind(i),
    i.onLoad = Nt.bind(i),
    Te(i, "on")
}
function _t() {
    Te(this, "off")
}
var Wt = {
    attachEvents: Rt,
    detachEvents: _t
};
const be = (i,e)=>i.grid && e.grid && e.grid.rows > 1;
function qt() {
    const i = this
      , {realIndex: e, initialized: t, params: s, el: n} = i
      , r = s.breakpoints;
    if (!r || r && Object.keys(r).length === 0)
        return;
    const o = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
    if (!o || i.currentBreakpoint === o)
        return;
    const a = (o in r ? r[o] : void 0) || i.originalParams
      , u = be(i, s)
      , f = be(i, a)
      , p = s.enabled;
    u && !f ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()) : !u && f && (n.classList.add(`${s.containerModifierClass}grid`),
    (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(w=>{
        if (typeof a[w] == "undefined")
            return;
        const d = s[w] && s[w].enabled
          , c = a[w] && a[w].enabled;
        d && !c && i[w].disable(),
        !d && c && i[w].enable()
    }
    );
    const h = a.direction && a.direction !== s.direction
      , g = s.loop && (a.slidesPerView !== s.slidesPerView || h)
      , S = s.loop;
    h && t && i.changeDirection(),
    $(i.params, a);
    const v = i.params.enabled
      , T = i.params.loop;
    Object.assign(i, {
        allowTouchMove: i.params.allowTouchMove,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev
    }),
    p && !v ? i.disable() : !p && v && i.enable(),
    i.currentBreakpoint = o,
    i.emit("_beforeBreakpoint", a),
    t && (g ? (i.loopDestroy(),
    i.loopCreate(e),
    i.updateSlides()) : !S && T ? (i.loopCreate(e),
    i.updateSlides()) : S && !T && i.loopDestroy()),
    i.emit("breakpoint", a)
}
function jt(i, e, t) {
    if (e === void 0 && (e = "window"),
    !i || e === "container" && !t)
        return;
    let s = !1;
    const n = k()
      , r = e === "window" ? n.innerHeight : t.clientHeight
      , o = Object.keys(i).map(l=>{
        if (typeof l == "string" && l.indexOf("@") === 0) {
            const a = parseFloat(l.substr(1));
            return {
                value: r * a,
                point: l
            }
        }
        return {
            value: l,
            point: l
        }
    }
    );
    o.sort((l,a)=>parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < o.length; l += 1) {
        const {point: a, value: u} = o[l];
        e === "window" ? n.matchMedia(`(min-width: ${u}px)`).matches && (s = a) : u <= t.clientWidth && (s = a)
    }
    return s || "max"
}
var Yt = {
    setBreakpoint: qt,
    getBreakpoint: jt
};
function Xt(i, e) {
    const t = [];
    return i.forEach(s=>{
        typeof s == "object" ? Object.keys(s).forEach(n=>{
            s[n] && t.push(e + n)
        }
        ) : typeof s == "string" && t.push(e + s)
    }
    ),
    t
}
function Ut() {
    const i = this
      , {classNames: e, params: t, rtl: s, el: n, device: r} = i
      , o = Xt(["initialized", t.direction, {
        "free-mode": i.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: s
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: r.android
    }, {
        ios: r.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...o),
    n.classList.add(...e),
    i.emitContainerClasses()
}
function Kt() {
    const i = this
      , {el: e, classNames: t} = i;
    e.classList.remove(...t),
    i.emitContainerClasses()
}
var Zt = {
    addClasses: Ut,
    removeClasses: Kt
};
function Jt() {
    const i = this
      , {isLocked: e, params: t} = i
      , {slidesOffsetBefore: s} = t;
    if (s) {
        const n = i.slides.length - 1
          , r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
        i.isLocked = i.size > r
    } else
        i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    e && e !== i.isLocked && (i.isEnd = !1),
    e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
}
var Qt = {
    checkOverflow: Jt
}
  , ye = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
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
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function ei(i, e) {
    return function(s) {
        s === void 0 && (s = {});
        const n = Object.keys(s)[0]
          , r = s[n];
        if (typeof r != "object" || r === null) {
            $(e, s);
            return
        }
        if (i[n] === !0 && (i[n] = {
            enabled: !0
        }),
        n === "navigation" && i[n] && i[n].enabled && !i[n].prevEl && !i[n].nextEl && (i[n].auto = !0),
        ["pagination", "scrollbar"].indexOf(n) >= 0 && i[n] && i[n].enabled && !i[n].el && (i[n].auto = !0),
        !(n in i && "enabled"in r)) {
            $(e, s);
            return
        }
        typeof i[n] == "object" && !("enabled"in i[n]) && (i[n].enabled = !0),
        i[n] || (i[n] = {
            enabled: !1
        }),
        $(e, s)
    }
}
const re = {
    eventsEmitter: Ze,
    update: ot,
    translate: mt,
    transition: wt,
    slide: Pt,
    loop: At,
    grabCursor: kt,
    events: Wt,
    breakpoints: Yt,
    checkOverflow: Qt,
    classes: Zt
}
  , ne = {};
class G {
    constructor() {
        let e, t;
        for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
            n[r] = arguments[r];
        n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? t = n[0] : [e,t] = n,
        t || (t = {}),
        t = $({}, t),
        e && !t.el && (t.el = e);
        const o = V();
        if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
            const f = [];
            return o.querySelectorAll(t.el).forEach(p=>{
                const h = $({}, t, {
                    el: p
                });
                f.push(new G(h))
            }
            ),
            f
        }
        const l = this;
        l.__swiper__ = !0,
        l.support = ge(),
        l.device = je({
            userAgent: t.userAgent
        }),
        l.browser = Xe(),
        l.eventsListeners = {},
        l.eventsAnyListeners = [],
        l.modules = [...l.__modules__],
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
        const a = {};
        l.modules.forEach(f=>{
            f({
                params: t,
                swiper: l,
                extendParams: ei(t, a),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l)
            })
        }
        );
        const u = $({}, ye, a);
        return l.params = $({}, u, ne, t),
        l.originalParams = $({}, l.params),
        l.passedParams = $({}, t),
        l.params && l.params.on && Object.keys(l.params.on).forEach(f=>{
            l.on(f, l.params.on[f])
        }
        ),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return l.params.direction === "horizontal"
            },
            isVertical() {
                return l.params.direction === "vertical"
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
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
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
    getSlideIndex(e) {
        const {slidesEl: t, params: s} = this
          , n = D(t, `.${s.slideClass}, swiper-slide`)
          , r = q(n[0]);
        return q(e) - r
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: s} = e;
        e.slides = D(t, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        !e.enabled || (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate()
          , o = (s.maxTranslate() - n) * e + n;
        s.translateTo(o, typeof t == "undefined" ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(s=>s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(s=>s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(s=>{
            const n = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: n
            }),
            e.emit("_slideClass", s, n)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
        t === void 0 && (t = !1);
        const s = this
          , {params: n, slides: r, slidesGrid: o, slidesSizesGrid: l, size: a, activeIndex: u} = s;
        let f = 1;
        if (typeof n.slidesPerView == "number")
            return n.slidesPerView;
        if (n.centeredSlides) {
            let p = r[u] ? r[u].swiperSlideSize : 0, h;
            for (let g = u + 1; g < r.length; g += 1)
                r[g] && !h && (p += r[g].swiperSlideSize,
                f += 1,
                p > a && (h = !0));
            for (let g = u - 1; g >= 0; g -= 1)
                r[g] && !h && (p += r[g].swiperSlideSize,
                f += 1,
                p > a && (h = !0))
        } else if (e === "current")
            for (let p = u + 1; p < r.length; p += 1)
                (t ? o[p] + l[p] - o[u] < a : o[p] - o[u] < a) && (f += 1);
        else
            for (let p = u - 1; p >= 0; p -= 1)
                o[u] - o[p] < a && (f += 1);
        return f
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: s} = e;
        s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{
            o.complete && j(e, o)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function n() {
            const o = e.rtlTranslate ? e.translate * -1 : e.translate
              , l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
            e.setTranslate(l),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let r;
        if (s.freeMode && s.freeMode.enabled && !s.cssMode)
            n(),
            s.autoHeight && e.updateAutoHeight();
        else {
            if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(o.length - 1, 0, !1, !0)
            } else
                r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || n()
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const s = this
          , n = s.params.direction;
        return e || (e = n === "horizontal" ? "vertical" : "horizontal"),
        e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        s.params.direction = e,
        s.slides.forEach(r=>{
            e === "vertical" ? r.style.width = "" : r.style.height = ""
        }
        ),
        s.emit("changeDirection"),
        t && s.update()),
        s
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let s = e || t.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)),
        !s)
            return !1;
        s.swiper = t,
        s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === "SWIPER-CONTAINER" && (t.isElement = !0);
        const n = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let o = (()=>s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : D(s, n())[0])();
        return !o && t.params.createElements && (o = F("div", t.params.wrapperClass),
        s.append(o),
        D(s, `.${t.params.slideClass}`).forEach(l=>{
            o.append(l)
        }
        )),
        Object.assign(t, {
            el: s,
            wrapperEl: o,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || B(s, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || B(s, "direction") === "rtl"),
            wrongRTL: B(o, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
        const n = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        n.forEach(r=>{
            r.complete ? j(t, r) : r.addEventListener("load", o=>{
                j(t, o.target)
            }
            )
        }
        ),
        se(t),
        t.initialized = !0,
        se(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0);
        const s = this
          , {params: n, el: r, wrapperEl: o, slides: l} = s;
        return typeof s.params == "undefined" || s.destroyed || (s.emit("beforeDestroy"),
        s.initialized = !1,
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        t && (s.removeClasses(),
        r.removeAttribute("style"),
        o.removeAttribute("style"),
        l && l.length && l.forEach(a=>{
            a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass),
            a.removeAttribute("style"),
            a.removeAttribute("data-swiper-slide-index")
        }
        )),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach(a=>{
            s.off(a)
        }
        ),
        e !== !1 && (s.el.swiper = null,
        ke(s)),
        s.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        $(ne, e)
    }
    static get extendedDefaults() {
        return ne
    }
    static get defaults() {
        return ye
    }
    static installModule(e) {
        G.prototype.__modules__ || (G.prototype.__modules__ = []);
        const t = G.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t=>G.installModule(t)),
        G) : (G.installModule(e),
        G)
    }
}
Object.keys(re).forEach(i=>{
    Object.keys(re[i]).forEach(e=>{
        G.prototype[e] = re[i][e]
    }
    )
}
);
G.use([Ue, Ke]);
export {ri as E, ii as N, si as P, G as S};
