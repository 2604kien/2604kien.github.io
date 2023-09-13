import React from "react";
import "./css/ProjectItem.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function ProjectContent(props){
    let component=React.useRef(null);
    gsap.registerPlugin(ScrollTrigger)
    React.useEffect(()=>{
        let ctx= gsap.context(()=>{
            gsap.from(component,{
                scrollTrigger: {
                    trigger: component,
                    toggleActions: "play none none none"
                },
                duration: 2,
                y:100,
                opacity: 0,
                ease: "easeInOut"
            })
        });
        return ()=>{ctx.revert()}
    },[])
    return (
        <div ref={el=>{component=el}}  className="projectItem">
                <h2>{props.name}</h2>
                <h2 style={{position: "absolute", color: "#333", top:"0%", left:"-5%", opacity: 0.3, fontSize: "70px"}}>0{props.id+1}</h2>
                <img style={{width: "100%"}} src={props.src} />
                <p style={{fontSize: "1.2rem"}}>Skills: {props.skill}</p>
                <p style={{fontSize: "1.2rem"}}>{props.description}</p>
        </div>
    )
}