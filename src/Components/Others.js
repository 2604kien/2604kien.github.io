import React from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import "./css/Skills.css";
import { others } from "../Documents/SkillsData";
import SkillComponents from "./SkillComponent";
export default function Attribute(props){
    let other1=React.useRef(null);
    let isInView=useInView(other1, {once: true});
    const controlView=useAnimation();
    const [backColor, setBackColor]=React.useState("rgba(29, 29, 29, 0.856)");
    const skillElements=others.map((a,i)=><SkillComponents key={i} name={a.name} image={a.image} proficiency={a.proficiency} bc={props.bc}/>);
    const imageDisplay=others.map((a,i)=><motion.img key={i} whileHover={{scale: 1.3, filter: "brightness(1.3)"}} src={a.image} style={{width: "50px", height:"50px"}}/>)
    function handleChange(color){
        setBackColor(color);
    }
    React.useEffect(()=>{
        if(isInView) controlView.start("visible");
    },[isInVie, controlView])
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
                <div className="title" onMouseOver={()=>handleChange("rgba(0, 165, 114, 0.8)")} onMouseLeave={()=>handleChange("rgba(29, 29, 29, 0.856)")} style={{backgroundColor:backColor}}>Others</div>
                    {skillElements}
                    <div width="100%" style={{display: "flex", justifyContent: "space-around", alignItems:"center", margin: "10px"}}>
                        {imageDisplay}
                    </div>
                </motion.div>
    )
}