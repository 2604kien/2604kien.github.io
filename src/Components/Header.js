import React, { useState } from "react";
import "./Header.css";
import photo from "../Images/HeaderBackground1.png"
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header(){
    let item1=React.useRef(null);
    let item2=React.useRef(null);
    let item3=React.useRef(null);
    let item4=React.useRef(null);
    React.useEffect(()=>{
      let ctx=gsap.context(()=>{
        let tl=gsap.timeline();
        tl.from(item2, { y: -1000,
          duration: 2,
          ease: "easeIn"}).to(item2,{
            y: 20,
            repeat: -1,
            opacity: 0.6,
            yoyo: true,
            duration: 1,
            ease: "sineInOut"
          })
        gsap.from(item1,{
          x: 1000,
          ease: "easeIn",
        duration: 2
        });

        gsap.from(item3, {
          x: -100,
          opacity:0,
          duration: 2,
          ease: "power4.inOut"
        });
        gsap.to(item4, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity:1,
          duration: 2,
          ease: "easeIn"
        });
        
      });

      return ()=> {ctx.revert()}
    },[])

    console.log("hi")
    return (
        <div >
          <div className="grid-container" width="100%" style={{overflow: "hidden"}}>
            <div className="name" style={{overflow: "hidden"}}>
            <p ref={el=>{item1=el}}style={{fontSize:"5vw", letterSpacing:2}}>KIEN NGUY</p>
            </div>
            <div className="explore">
            <p ref={el=>{item2=el}}style={{fontSize:"5vw", wordBreak:"break-all", lineHeight: 1, paddingTop: "1.2vw", textAlign:"center"}}>EXPLORE ↓</p>
            </div>
            <div className="name2" style={{fontSize:"5vw"}}><div>N</div></div>
            <div className="title" style={{overflow: "hidden"}}>
            <p ref={el=>{item3=el}} className="title" style={{fontSize:"5vw"}}>FULL-STACK</p>
            </div>
          <img ref={el=>{item4=el}} src={photo} className="intro"/>
          </div>
        </div>
    );
}