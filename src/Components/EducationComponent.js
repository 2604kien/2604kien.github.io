import React from "react";
import "./css/Education.css";
import gsap from "gsap";

export default function EducationComponent(props){
    let edu=React.useRef(null);
    React.useEffect(()=>{
        let ctx=gsap.context(()=>{
            gsap.from(edu, {
                scrollTrigger:{
                    trigger: edu,
                    markers: false,
                    scrub: true,
                    start: "top bottom",
                    end: "-5px center"
                },
                opacity: 0,
                x: props.id%2!==0?100:-100,
                ease: "power4.inOut",
            })
        });
        return ()=>{ctx.revert()}
    })
    return(
        <div ref={el=>{edu=el}} className="container-fluid">
            <div className="education-container" style={{justifyContent: (props.id%2!==0?"flex-end": "flex-start")}}>
                <img src={props.image} style={{width: "135px", height:"150px"}} alt="School Icon"/>
                <div className="textEdu" style={{paddingLeft:"30px"}}>
                    <h2>{props.name}</h2>
                    <p><span>Duration:</span> {props.duration}</p>
                    <p><span>Qualification:</span> {props.qualification}</p>
                    <p><span>Specialisation:</span> {props.specialisation}</p>
                </div>
            </div>
        </div>
    )
}