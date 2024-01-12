import React from "react";
import {motion} from "framer-motion";
import {data} from "../Documents/SignatureSVG";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/Navbar.css"
import 'bootstrap/dist/css/bootstrap.css';
const transition={duration: 3, yoyo: Infinity, ease: "easeInOut"};

export default function Navbar(){
    const navigate=useNavigate();
    const [dropDown, setDropDown]= React.useState(false);
    const {pathname}=useLocation();
    console.log(pathname);
    const toggle=()=>{
        setDropDown(prev=> !prev);
    }
    return (
        <nav>
            <div onClick={toggle} className="toggle_btn" >
                <i className="fa-solid fa-bars"></i>
            </div>
            <ul className={dropDown?"dropdown open": "dropdown"}>
            <li onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#project"); else {navigate('/')} }}> Project </li>          
                <li onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#skills"); else {navigate('/')} }}> About Me </li>
                <li onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#education"); else {navigate('/')} }}> Education </li>
                <li onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#contact"); else {navigate('/')} }}> Contact </li>
                <li ><a style={{backgroundColor:"transparent", textDecoration:"none", width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}} href="/Resume/RESUME_HongKienNguyen.pdf" download>⤓ Resume</a> </li>
            </ul>
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
                <li onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#project"); else {navigate('/')} }}> Project </li>          
                <li onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#skills"); else {navigate('/')} }}> About Me </li>
                <li onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#education"); else {navigate('/')} }}> Education </li>
                <li onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#contact"); else {navigate('/')} }}> Contact </li>
                <li ><a style={{backgroundColor:"transparent", textDecoration:"none", width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}} href="/Resume/RESUME_HongKienNguyen.pdf" download>⤓ Resume</a> </li>
            </ul>
            
        </nav>
    )
}