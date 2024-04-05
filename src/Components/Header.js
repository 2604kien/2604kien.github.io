import React from "react";
import "./css/Header.css";
import gsap from "gsap";
import { description } from "../Documents/AboutMe";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/all";
export default function Header(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    let text=React.useRef(null);
    let photo=React.useRef(null);
    let scroll=React.useRef(null);
    let type=React.useRef(null);
    let cur=React.useRef(null);
    let word=React.useRef(null);
    const word1= "Hello World!!!";
    React.useEffect(()=>{
        let ctx=gsap.context(()=>{
            const tl=gsap.timeline();
            
            tl.from(text, {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power4.easeInOut"
            }).from(type,{
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "easeInOut"
            }).to(word, {
                delay: 0.25,
                duration: 1.5,
                text: word1
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
            });
            
            gsap.to(cur,{
                opacity: 0,
                repeat: -1,
                ease: "power2.inOut"
            })
        })
        return ()=>{ctx.revert()}
    },[])
    return (
        <div className="header-container" >
          <div className="header-text">
        
            
            <h1 className="web" style={{position: "absolute", color: "#666", opacity: 0.2}}> Software Engineer</h1>

                <div className="hello" ref={el=>{type=el}} style={{width: "fit-content"}}>
                    <span ref={el=>{word=el}} style={{fontSize: "2.3em", fontWeight: "bold "}}></span>
                    <span ref={el=>{cur=el}} style={{fontSize: "2.3em", fontWeight: "bold "}} className="underScore">_</span>
                </div>
                <div ref={el=>{text=el}}>
                    <h1 className="nameHeader">Hong Kien Nguyen</h1>
                    <p style={{fontSize: "1.2em"}}>{description}</p>
                </div>
                <p onClick={(e)=>{e.preventDefault(); window.location.replace("#project")}} className="border-bottom border-primary" ref={el=>{scroll=el}} style={{fontSize:"2em", width: "fit-content", cursor:"pointer"}}>Scroll For More ↓</p>
            </div>
            <div ref={el=>{photo=el}} className="header-img"></div>
            
        </div>
    );
}