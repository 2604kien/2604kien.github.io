import React, { useState } from "react";
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header(){
    gsap.registerPlugin(ScrollTrigger);

    const component01 = React.useRef(null);
    React.useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".parallax-bg", {
                scrollTrigger: {
                  scrub: true
                }, 
                y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
                ease: "none"
              });
        }, component01);
        return (() => {ctx.revert()});
    }, []);

    const [active, setActive] = useState(false);
    const [array01, setArray01] = useState([]);
    const [array02, setArray02] = useState([]);
    const [array03, setArray03] = useState([]);
    const component02 = React.useRef(null);
    React.useEffect(() => {
        let str01 = "Hong Kien Nguyen";
        setArray01(() => str01.split("").map((e,i)=><div className="k1" key={i}>{e}</div>))

        let str02 = "Full Stack Developer";
        setArray02(() => str02.split("").map((e,i)=><div className="k1" key={i}>{e}</div>))

        let str03 = "Welcome to my portfolio";
        setArray03(() => str03.split("").map((e,i)=><div className="k1" key={i}>{e}</div>))

        const text1 = gsap.utils.toArray('.k1');
        setActive(true);

        const ctx = gsap.context(() => {
            text1.forEach((text, i) => {
                gsap.from(text, {
                    top:100,
                    delay: i * 0.015,
                    ease: "back.out",
                    duration: 1
                });
            });
        }, component02)
        return (() => {ctx.revert()});
    }, [active])

    return (
        <div className="container-fluid middle">
            <div className="header">
                <div ref={component02} className="header-1">
                    <h1 className="container-h">{array01}</h1>
                </div>
                <div ref={component02} className="header-2">
                    <h4 className="container-h">{array02}</h4>
                </div>
                <div ref={component02} className="header-3">
                    <h2 className="container-h">{array03}</h2>
                </div>
            </div>
            <div ref={component01}>
                <div id="parallax-bg-2" className="parallax-bg" data-speed=".4">
                    <div id="bg-2-1"></div>
                    <div id="bg-2-2"></div>
                    <div id="bg-2-3"></div> 
                    <div id="bg-2-4"></div>
                    <div id="bg-2-5"></div>
                    <div id="bg-2-6"></div>
                </div>
            </div>
        </div>
    );
}