import React from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import "./css/SkillComponent.css"
export default function SkillComponents({name, image, proficiency, bc}){
    let pro=React.useRef(null);
    let isInView=useInView(pro, {once: false});
    const control=useAnimation();
    React.useEffect(()=>{
        if(isInView) control.start("visible");
        else control.start("hidden");
    },[isInView])
    return (
        <div style={{display: "flex", alignItems: "flex-start", padding: "10px"}}>
            <div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                <h2>{name}</h2>
            </div>  
                <div className="proCon">
                    <motion.div
                    variants={{
                        hidden:{width: 0},
                        visible:{width: proficiency+"%"}
                }}
                initial="hidden"
                animate={control}
                transition={{type:"tween", duration: 1, ease: "easeInOut"}}
                     ref={pro} className="proficiency" style={{backgroundColor: bc, boxShadow: "0px 0px 5px 1px "+bc}}></motion.div>
                </div>  
            </div>
        </div>
    )
}