import React from "react";
import "./css/ProjectItem.css";
import next from "./Images/next.png"
import {motion, useAnimation, useInView} from "framer-motion/dist/framer-motion"
export default function ProjectContent(props){
    const [currIMG, setCurrIMG]=React.useState(0);
    let component=React.useRef(null);
    let isInView=useInView(component, { once: false });
    const control=useAnimation();
    React.useEffect(()=>{
        if(isInView){
            control.start("visible");
        }
    },[isInView]);
    const prevImage=()=>{
        setCurrIMG(prev=>{
            return prev<=0? props.src.length-1 : prev-1;
        })
    }
    const nextImage=()=>{
        setCurrIMG(prev=>{
            return prev>=props.src.length-1? 0 : prev+1;
        })
    }
    return (
        <motion.div 
        variants={{
            hidden: {opacity: 0, x: 100},
            visible: {opacity: 1, x: 0}
        }}
        initial="hidden"
        animate={control}
        transition={{type:"spring", duration: 2}}
        ref={component}  className="projectItem">
            <div style={{display: "flex", alignItems:"center", flexDirection: "row", width: "fit-content",width:"75%", marginLeft:"12.5%"}}>
                <h2 style={{color: "#333", opacity: 0.3, fontSize: "50px"}}>0{props.id+1}</h2>
                <h2 style={{marginLeft:"15px"}}>{props.name}</h2>
            </div>    
                <div className="image--section">
                    <img src={next} onClick={prevImage} style={{visibility: props.src.length<=1?"hidden": "visible", cursor: "pointer"}} className="prev"/>
                    <img className="proIMG" onClick={()=>{window.location.href=props.link}} style={{width: "100%", borderRadius: 20, cursor: "pointer"}} src={props.src[currIMG]} />
                    <img src={next} onClick={nextImage} style={{visibility: props.src.length<=1?"hidden": "visible", cursor: "pointer"}} className="next" />
                </div>
                <p style={{fontSize: "1.2rem",width:"75%", marginLeft:"12.5%"}}><span style={{fontWeight: "600"}}>Skills:</span> {props.skill}</p>
                <p style={{fontSize: "1.2rem", width:"75%", marginLeft:"12.5%"}}>{props.description}</p>
        </motion.div>
    )
}