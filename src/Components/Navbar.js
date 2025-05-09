import React from "react";
import {motion} from "framer-motion";
import {data} from "../Documents/SignatureSVG";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./css/Navbar.css"
import 'bootstrap/dist/css/bootstrap.css';
const transition={duration: 8, yoyo: Infinity, ease: "easeInOut"};

export default function Navbar(){
    const navigate=useNavigate();
    const [dropDown, setDropDown]= React.useState(false);
    const {pathname}=useLocation();
    const toggle=()=>{
        setDropDown(prev=> !prev);
    }
    return (
        <>
        <nav>
        {!pathname.includes("mybaby")&&<div onClick={toggle} className="toggle_btn" >
                <i className="fa-solid fa-bars"></i>
            </div>}
            <ul className={dropDown?"dropdown open": "dropdown"}>
            <li
            onClick={(e) => {
                e.preventDefault();
                toggle();

                if (pathname === "/") {
                const section = document.querySelector("#section-1");
                if (section) {
                    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
                } else {
                navigate("/");
                }
            }}
            > VISUAL ARTS – Annotated Toolkit</li>          
                <li
            onClick={(e) => {
                e.preventDefault();
                toggle();

                if (pathname === "/") {
                const section = document.querySelector("#section-2");
                if (section) {
                    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
                } else {
                navigate("/");
                }
            }}
            > DANCE – Annotated Toolkit </li>
                <li
            onClick={(e) => {
                e.preventDefault();
                toggle();

                if (pathname === "/") {
                const section = document.querySelector("#section-3");
                if (section) {
                    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
                } else {
                navigate("/");
                }
            }}
            >DRAMA – Annotated Toolkit </li>
                <li
            onClick={(e) => {
                e.preventDefault();
                toggle();

                if (pathname === "/") {
                const section = document.querySelector("#section-4");
                if (section) {
                    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
                } else {
                navigate("/");
                }
            }}
            > MUSIC – Annotated Toolkit </li>
                <li
            onClick={(e) => {
                e.preventDefault();
                toggle();

                if (pathname === "/") {
                const section = document.querySelector("#section-5");
                if (section) {
                    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
                } else {
                navigate("/");
                }
            }}
            > MEDIA ARTS – Annotated Toolkit </li>
            </ul>
            <ul className="nav-item">
                <svg onClick={()=>{document.documentElement.scrollTop=0}} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="200px"  height="60px">
                    <motion.path
                        d={data}
                        strokeWidth="1.5px"
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
            </ul>
            
        </nav>
        <Outlet/>
        </>
    )
}