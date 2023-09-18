import React from "react";
import "./css/ProjectItem.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {motion, useAnimation} from "framer-motion/dist/framer-motion"
export default function ProjectContent(props){
    let component=React.useRef(null);
    gsap.registerPlugin(ScrollTrigger)
    React.useEffect(()=>{
        let ctx= gsap.context(()=>{
            gsap.from(component,{
                scrollTrigger: {
                    trigger: component,
                    toggleActions: "play none none none"
                },
                duration: 1,
                y:100,
                opacity: 0,
                ease: "easeInOut",
                delay: props.id<3? props.id/5: (props.id-3)/5
            })
        });
        return ()=>{ctx.revert()}
    },[])
    return (
        <div onClick={()=>{window.location.href=props.link}} ref={el=>{component=el}}  className="projectItem">
                <h2>{props.name}</h2>
                <h2 style={{position: "absolute", color: "#333", top:"0%", left:"-5%", opacity: 0.3, fontSize: "70px"}}>0{props.id+1}</h2>
                
                <motion.img whileHover={{scale: 1.3}} style={{width: "100%", borderRadius: 20}} src={props.src} />
               
                <p style={{fontSize: "1.2rem"}}>Skills: {props.skill}</p>
                <p style={{fontSize: "1.2rem"}}>{props.description}</p>
        </div>
    )
}