import React from "react";
import "./css/ProjectItem.css";
import { useAnimation, useInView} from "framer-motion"
import { useDispatch } from "react-redux";
import {setIsClick, addToProjectDisplay} from "../reducers/projectSlice";
export default function ProjectContent(props){
    const dispatch=useDispatch();
    const [currIMG, setCurrIMG]=React.useState(0);
    let component=React.useRef(null);
    let isInView=useInView(component, { once: false });
    const control=useAnimation();
    
    React.useEffect(()=>{
        if(isInView){
            control.start("visible");
        }
    },[isInView, control]);
    const handleClick=()=>{
        const data={
            description: props.description,
            skill: props.skill,
            name: props.name,
            duration: props.duration,
            src: props.src,
            id: props.id,
            link: props.link
        }
        dispatch(addToProjectDisplay(data));
        dispatch(setIsClick(true))

    }
    return (
        <div className="projectItem" onClick={handleClick}>
            <div className="wrapper">
                <div className="cover-image" style={{backgroundImage:`url(${props.src[currIMG]})`, backgroundSize:"cover"}}></div>
            </div>
            {/* <div className="clickToKnow" >
                <h2 style={{color: props.id===3? "white":"black",display: "flex", justifyContent:"center", flexDirection: "row", width: "100%",textDecoration:"underline", marginTop:"-100px"}}>Click To Know More</h2>
            </div> */}
            <div className="projectName" style={{fontSize: "bold", display: "flex", alignItems:"center", justifyContent:"left", flexDirection: "row", width: "100%", marginLeft:"25px"}}>
                <h2 style={{color: props.id===3? "white":"#333", opacity: 0.3, fontSize: "50px"}}>0{props.id+1}</h2>
                <h2 style={{color: props.id===3? "white":"black",marginLeft:"15px"}}>{props.name}</h2>
            </div>    
            <div className="character">
                <p style={{fontSize: "1rem",width:"75%"}}><span style={{fontWeight: "600"}}>Skills:</span> {props.skill}</p>
                <p style={{fontSize: "1rem", width:"75%"}}>{props.description}</p>
            </div>
                
        </div>
    )
}