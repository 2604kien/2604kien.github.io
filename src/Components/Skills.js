import React from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import "./css/Skills.css";
import gsap from "gsap";
import { skills } from "../Documents/SkillsData";
import SkillComponents from "./SkillComponent";
import Others from "./Others"
import Attribute from "./Attribute"
export default function Skills(){
    let programming=React.useRef(null);
    let isInView=useInView(programming, { once: true });
    const controlView=useAnimation();
    let title=React.useRef(null);
    const skillElements=skills.map((a,i)=><SkillComponents key={i} name={a.name} image={a.image} proficiency={a.proficiency} inview={isInView} />)
    const imageDisplay=skills.map((a,i)=><motion.img key={i} whileHover={{scale: 1.3, filter: "brightness(1.3)"}} src={a.image} style={{width: "50px", height:"50px"}}/>)

    React.useEffect(()=>{
        if(isInView) controlView.start("visible");
        let ctx=gsap.context(()=>{
            gsap.from(title, {
                scrollTrigger:{
                    trigger: title,
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 1,
                ease: "power4.inOut",
                y: 50
            })
        });
        return ()=>{ctx.revert()}
    },[isInView, controlView])
    return(
        
        <div id="skills" className="skills-container">
            <h1 ref={el=>{title=el}} style={{fontWeight: "bold", overflow: "hidden"}}>ABOUT ME</h1>
            <div className="skills">
            <Attribute />
                <motion.div 
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
            }}
            initial="hidden"
            animate={controlView}
            transition={{type:"spring", duration: 1.5}}
                ref={programming} className="programming">
                    <div className="title">Technology</div>
                    {skillElements}
                    <div width="100%" style={{display: "flex", justifyContent: "space-around", alignItems:"center", margin: "10px"}}>
                        {imageDisplay}
                    </div>
            </motion.div>
            <Others />
            </div>
        </div>
    )
}