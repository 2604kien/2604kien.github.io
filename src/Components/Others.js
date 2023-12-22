import React from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import "./css/Skills.css";
import { others } from "../Documents/SkillsData";
import SkillComponents from "./SkillComponent";
export default function Attribute(){
    let other1=React.useRef(null);
    let isInView=useInView(other1, {once: true});
    const controlView=useAnimation();
    const skillElements=others.map((a,i)=><SkillComponents key={i} name={a.name} image={a.image} proficiency={a.proficiency}/>);
    const imageDisplay=others.map((a,i)=><motion.img key={i} whileHover={{scale: 1.3, filter: "brightness(1.3)"}} src={a.image} style={{width: "50px", height:"50px"}}/>)

    React.useEffect(()=>{
        if(isInView) controlView.start("visible");
    },[isInView, controlView])
    return(
                <motion.div 
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate={controlView}
                transition={{type:"spring", duration: 1.5}} 
                ref={other1}
                className="programming">
                <div className="title">Others</div>
                    {skillElements}
                    <div width="100%" style={{display: "flex", justifyContent: "space-around", alignItems:"center", margin: "10px"}}>
                        {imageDisplay}
                    </div>
                </motion.div>
    )
}