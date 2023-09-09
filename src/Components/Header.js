import React, { useState } from "react";
import "./Header.css";
import photo from "../Images/HeaderBackground1.png"
import gsap from "gsap";

export default function Header(){
    let item1=React.useRef(null);
    React.useEffect(()=>{
    item1.style.display="none";
      
    },[]);
    console.log("hi")
    return (
        <div >
          <div className="grid-container" width="100%">
          <div ref={item1} className="name" style={{fontSize:"5vw", letterSpacing:2}}>KIEN NGUY</div>
          <div className="explore" style={{fontSize:"5vw", wordBreak:"break-all", lineHeight: 1, paddingTop: "1.2vw", textAlign:"center"}}>EXPLORE ↓</div>
          <div className="name2" style={{fontSize:"5vw"}}><div>N</div></div>
          <div className="title" style={{fontSize:"5vw"}}>FULL-STACK DEVELOPER</div>
          <img src={photo} className="intro"/>
          </div>
        </div>
    );
}