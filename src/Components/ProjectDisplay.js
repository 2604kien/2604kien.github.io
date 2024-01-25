import React from "react";
import "./css/ProjectItem.css";
import next from "./Images/next.png"
import {motion, useAnimation, useInView} from "framer-motion"
import  ReactDOM  from "react-dom";
import "./css/overlay.css";
import { useSelector, useDispatch } from "react-redux";
import { setIsClick } from "../reducers/projectSlice";

export default function ProjectDisplay(){
    const dispatch=useDispatch()
    const data=useSelector(state=>state.project.entities)
    const [currIMG, setCurrIMG]=React.useState(0);
    let component=React.useRef(null);
    let isInView=useInView(component, { once: false });
    const control=useAnimation();
    React.useEffect(()=>{
        if(isInView){
            control.start("visible");
        }
    },[isInView, control]);
    const prevImage=()=>{
        setCurrIMG(prev=>{
            return prev<=0? data.src.length-1 : prev-1;
        })
    }
    const nextImage=()=>{
        setCurrIMG(prev=>{
            return prev>=data.src.length-1? 0 : prev+1;
        })
    }
    const handleClick=()=>{
        dispatch(setIsClick(false));
    }
    return ReactDOM.createPortal(
        <div className="overlay">
            <div className="content">
            
                <motion.div 
                variants={{
                    hidden: {opacity: 0, x: 100},
                    visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate={control}
                transition={{type:"spring", duration: 2}}
                ref={component}  className="project--overlay">
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <div style={{display: "flex", alignItems:"center", flexDirection: "row", width: "fit-content", marginLeft:"12.5%"}}>
                            <h2 style={{color: "grey", opacity: 0.3, fontSize: "50px"}}>0{data.id+1}</h2>
                            <h2 style={{marginLeft:"15px"}}>{data.name}</h2>
                        </div>
                        <h2 onClick={handleClick} style={{zIndex:1000, borderRadius:"50%", width:"50px", height:"50px", color:"white", cursor:"pointer"}}>X</h2>    
                    </div>
                        <div className="image--section">
                            <img src={next} onClick={prevImage} style={{visibility: data.src.length<=1?"hidden": "visible", cursor: "pointer"}} className="prev" alt="Left arrow"/>
                            <img className="proIMG" onClick={()=>{window.location.href=data.link}} style={{width: "100%", borderRadius: 20, cursor: "pointer"}} alt="Project IMG" src={data.src[currIMG]} />
                            <img src={next} onClick={nextImage} style={{visibility: data.src.length<=1?"hidden": "visible", cursor: "pointer"}} alt="Right Arrow" className="next" />
                        </div>
                        <p style={{fontSize: "1.2rem",width:"75%", marginLeft:"12.5%"}}><span style={{fontWeight: "600"}}>Skills:</span> {data.skill}</p>
                        <p style={{fontSize: "1.2rem", width:"75%", marginLeft:"12.5%", whiteSpace:"pre-wrap"}}>{data.description}</p>   
                        <p style={{fontSize: "1.2rem", width:"75%", marginLeft:"12.5%"}}><span style={{fontWeight: "bold"}}>Link:</span> <a href={data.link}>{data.link}</a></p>
                </motion.div>
             </div>
        </div>,
        document.body
    )
}