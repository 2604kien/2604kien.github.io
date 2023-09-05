import React, {  useEffect, useRef } from "react";
import { gsap } from "gsap";
const boxes = gsap.utils.toArray('li');

export default function Navbar(){
    const component = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            boxes.forEach(box => {
                gsap.from(box,.15,{top:-10,opacity:0,ease:'none'},'+=0.0')
                console.log("Hello")
            });
        }, component)
        return () => ctx.revert();
    }, [])
    return (
        <nav className="navbar">
            <div>Hong Kien</div>
            <div>
                <ul className="nav-li">
                    <li className="mgl20">Home</li>
                    <li className="mgl20">About</li>
                    <li className="mgl20">Projects</li>
                    <li className="mgl20">Education</li>
                    <li className="mgl20">Technologies</li>
                    <li className="mgl20">Contact</li>
                </ul>
            </div>
        </nav>
    )
}