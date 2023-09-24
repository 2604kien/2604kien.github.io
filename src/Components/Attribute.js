import React from "react";
import {motion, useAnimation, useInView} from "framer-motion/dist/framer-motion"
import "./css/Skills.css";
import { attribute } from "../Documents/SkillsData";
import SkillComponents from "./SkillComponent";
export default function Attribute(props){
    let attribute1=React.useRef(null);
    let isInView=useInView(attribute1, {once: true});
    const controlView=useAnimation();
    let title=React.useRef(null);
    const [backColor, setBackColor]=React.useState("rgba(29, 29, 29, 0.856)");
    const skillElements=attribute.map((a,i)=><SkillComponents key={i} name={a.name} image={a.image} proficiency={a.proficiency} bc={props.bc}/>)
    function handleChange(color){
        setBackColor(color);
    }
    React.useEffect(()=>{
        if(isInView) controlView.start("visible");
    },[isInView])
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
                <div className="title" onMouseOver={()=>handleChange("rgba(255, 204, 0, 0.8)")} onMouseLeave={()=>handleChange("rgba(29, 29, 29, 0.856)")} style={{backgroundColor:backColor}}>Attribute</div>
                    {skillElements}
                    
                </motion.div>
    )
}