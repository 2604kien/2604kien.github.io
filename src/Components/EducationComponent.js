import React from "react";
import "./css/Education.css";
import gsap from "gsap";

export default function EducationComponent(props){
    let edu=React.useRef(null);
    React.useEffect(()=>{},[])
    return(
        <div ref={el=>{edu=el}} className="container-fluid">
            <div className="education-container" style={{justifyContent: (props.id%2!=0?"flex-end": "flex-start")}}>
                <img src={props.image} style={{width: "135px", height:"150px"}}/>
                <div style={{paddingLeft:"30px", width: "35%"}}>
                    <h2>{props.name}</h2>
                    <p>Duration: {props.duration}</p>
                    <p>Qualification: {props.qualification}</p>
                    <p>Specialisation: {props.specialisation}</p>
                </div>
            </div>
        </div>
    )
}