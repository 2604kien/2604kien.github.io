import React from "react";
import  gsap  from "gsap";

export default function Navbar(){
    const component = React.useRef(null);
    React.useLayoutEffect(() => {
        const boxes = gsap.utils.toArray('li');
        const ctx = gsap.context(() => {
            boxes.forEach(box => {
                gsap.from(box,.15,{top:-10,opacity:0,ease:'none'},'+=0.0');
            });
            boxes.forEach(li => {
                li.addEventListener("mouseenter", () => gsap.to(li,.25,{color:'green',ease:'none'},'+=0.0').play());
                li.addEventListener("mouseleave", () => gsap.to(li,.25,{color:'gray',ease:'none'},'+=0.0').play());
            });
        }, component);
        return (() => {ctx.revert()});
    }, []);
    return (
    <div style={{backgroundColor:"white", opacity:0.7}}>
        <nav className="navbar" >
            <div >Hong Kien</div>
            <div className="test">
                <ul ref={component} className="nav-li">
                    <li className="mgl20">Home</li>
                    <li className="mgl20">About</li>
                    <li className="mgl20">Projects</li>
                    <li className="mgl20">Education</li>
                    <li className="mgl20">Technologies</li>
                    <li className="mgl20">Contact</li>
                </ul>
            </div>
        </nav>
    </div>
    )
}