import React from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import "./css/Skills.css";
import { attribute } from "../Documents/SkillsData";
import SkillComponents from "./SkillComponent";
export default function Attribute(){
    let attribute1=React.useRef(null);
    let isInView=useInView(attribute1, {once: true});
    const controlView=useAnimation();
    const skillElements=attribute.map((a,i)=><SkillComponents key={i} name={a.name} image={a.image} proficiency={a.proficiency}/>)

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
                ref={attribute1}
                className="programming">
                <div className="title" >Attribute</div>
                    {skillElements}
                    
                </motion.div>
    )
}