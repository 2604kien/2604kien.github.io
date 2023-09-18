import React from "react";
import  gsap  from "gsap";
import {motion} from "framer-motion/dist/framer-motion";
import {data} from "../Documents/SignatureSVG"
import "./css/Navbar.css"
import 'bootstrap/dist/css/bootstrap.css';
const transition={duration: 3, yoyo: Infinity, ease: "easeInOut"};

export default function Navbar(){
  
    return (
        <nav>
            <ul className="nav-item">
                <svg onClick={()=>{document.documentElement.scrollTop=0}} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="137px"  height="60px">
                    <motion.path
                        d={data}
                        strokeWidth="3px"
                        stroke="rgb(255,255,255)"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, fill: "rgb(255,255,255,0)" }}
                        animate={{ pathLength: 1, fill: "rgb(255,255,255,0)"}}
                        transition={transition}
                    ></motion.path>
                    <motion.div
                        className="box"
                        initial={{ offsetDistance: "0%", scale: 1 }}
                        animate={{ offsetDistance: "100%", scale: 1 }}
                        transition={transition}
                    />
                </svg>
                
                <li onClick={()=>{document.documentElement.scrollTop=0}}> Home </li>
                <li onClick={(e)=>{e.preventDefault(); window.location.replace("#project")}}> Project </li>          
                <li> Skills </li>
                <li> Education </li>
                <li> Contact </li>
            </ul>
            
        </nav>
    )
}