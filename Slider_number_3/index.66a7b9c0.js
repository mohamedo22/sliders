import {S as e, P as t, E as a} from "./vendor.94a26bcf.js";
!function(r, s="horizontal") {
    let i;
    const o = []
      , n = ()=>{
        const {offsetWidth: e, offsetHeight: t} = r
          , a = ((e / 2) ** 2 + (t / 2) ** 2) ** .5;
        i.style.width = 4 * a + "px",
        i.style.height = 4 * a + "px",
        i.style.marginLeft = "vertical" === s ? `-${2 * a}px` : `-${a}px`,
        i.style.marginTop = "vertical" === s ? `-${a}px` : `-${2 * a}px`
    }
    ;
    i = document.createElement("div"),
    i.classList.add("paper-onboarding-fills"),
    r.prepend(i),
    r.querySelectorAll(".swiper-slide").forEach((e=>{
        const t = e.getAttribute("data-paper-bg-color") || "#000"
          , a = document.createElement("div");
        a.classList.add("paper-onboarding-fill"),
        a.style.backgroundColor = t,
        i.appendChild(a),
        o.push(a)
    }
    )),
    n(),
    window.addEventListener("resize", n),
    new e(r.querySelector(".swiper"),{
        modules: [t, a],
        effect: "creative",
        direction: s,
        speed: 500,
        resistanceRatio: 0,
        grabCursor: !0,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0,
            dynamicBullets: !0
        },
        creativeEffect: {
            progressMultiplier: 2,
            prev: {
                opacity: 0,
                translate: "vertical" === s ? [0, -128, 0] : [-128, 0, 0]
            },
            next: {
                opacity: 0,
                translate: "vertical" === s ? [0, 128, 0] : [128, 0, 0]
            }
        },
        on: {
            setTranslate: e=>{
                const {slides: t} = e;
                for (let a = 0; a < t.length; a += 1) {
                    const e = t[a].progress
                      , r = 1 - Math.max(Math.min(Math.abs(e), 1), 0);
                    o[a].style.transform = e < 0 ? `scale(${r})` : "scale(1)"
                }
            }
            ,
            setTransition: (e,t)=>{
                o.forEach((e=>{
                    e.style.transitionDuration = `${t}ms`
                }
                ))
            }
        }
    })
}(document.querySelector(".paper-onboarding"), "vertical");
