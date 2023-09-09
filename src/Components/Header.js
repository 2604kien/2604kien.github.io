import React, { useState } from "react";
import moon from "../Images/moon.svg";
import {motion} from "framer-motion/dist/framer-motion";
import "./Header.css";
import {data} from "../Documents/SignatureSVG"
import photo from "../Images/HeaderBackground1.png"

export default function Header(){

    


    return (
        <div >
          <div className="grid-container" width="100%">
          <div className="name" style={{fontSize:"5vw", letterSpacing:2}}>KIEN NGUY</div>
          <div className="explore" style={{fontSize:"5vw", wordBreak:"break-all", lineHeight: 1, paddingTop: "1.2vw", textAlign:"center"}}>EXPLORE ↓</div>
          <div className="name2" style={{fontSize:"5vw"}}>N</div>
          <div className="title" style={{fontSize:"5vw"}}>FULL-STACK DEVELOPER</div>
          <img src={photo} className="intro"/>
          </div>
        </div>
    );
}