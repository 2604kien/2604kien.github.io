import React from "react";
import "./css/ProjectItem.css";
import next from "./Images/next.png"
import {motion, useAnimation, useInView} from "framer-motion"
export default function ProjectContent(props){
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
        ref={component}  className="projectItem" style={{backgroundImage:`url(${props.src[currIMG]})`, backgroundSize:"cover"}}>
            {/* <div className="clickToKnow" >
                <h2 style={{color: props.id===3? "white":"black",display: "flex", justifyContent:"center", flexDirection: "row", width: "100%",textDecoration:"underline", marginTop:"-100px"}}>Click To Know More</h2>
            </div> */}
            <div className="projectName" style={{display: "flex", alignItems:"center", justifyContent:"left", flexDirection: "row", width: "100%", marginLeft:"inherit"}}>
                <h2 style={{color: props.id===3? "white":"#333", opacity: 0.3, fontSize: "50px"}}>0{props.id+1}</h2>
                <h2 style={{color: props.id===3? "white":"black",marginLeft:"15px"}}>{props.name}</h2>
            </div>    

                
        </motion.div>
    )
}