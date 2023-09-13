import React, { useState } from "react";
import "./css/Header.css";
import gsap from "gsap";
import { description } from "../Documents/AboutMe";
import { ScrollTrigger } from "gsap/all";
export default function Header(){
    gsap.registerPlugin(ScrollTrigger)
    let text=React.useRef(null);
    let photo=React.useRef(null);
    let scroll=React.useRef(null);

    React.useEffect(()=>{
        let ctx=gsap.context(()=>{
            const tl=gsap.timeline();
            tl.from(text, {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power4.easeInOut"
            }).from(scroll,{
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "easeInOut",
                delay: 0.2
            }).to(scroll, {
                y: 10,
                opacity: 0.8,
                yoyo: true,
                repeat: -1,
                ease: "Sine.easeInOut",
                duration: 1,
                color: "rgba(47,102,154,1)"
            })
            gsap.from(photo,{
                duration: 1,
                scale: 0.8
            })
        })
        return ()=>{ctx.revert()}
    },[])
    return (
        <div className="header-container" >
          <div className="header-text">
        
            
            <h1 style={{position: "absolute", color: "#666", top:"25%", opacity: 0.2, fontSize: "70px"}}> Web Developer</h1>
            <div ref={el=>{text=el}}>
                <div style={{fontSize: "2.3em", fontWeight: "bold "}}>Hello World!!!</div>
                    <h1 style={{fontSize: "55px"}}>Hong Kien Nguyen</h1>
                    <p style={{fontSize: "1.2em"}}>{description}</p>
                </div>
                <p onClick={()=>{document.documentElement.scrollTop=750}}className="border-bottom border-primary" ref={el=>{scroll=el}} style={{fontSize:"2em", width: "fit-content", cursor:"pointer"}}>Scroll For More ↓</p>
            </div>
            <div ref={el=>{photo=el}} className="header-img"></div>
            
        </div>
    );
}