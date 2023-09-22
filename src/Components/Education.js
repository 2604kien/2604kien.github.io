import React from "react";
import gsap from "gsap";
import {school} from "../Documents/SchoolData.js";
import EducationComponent from "./EducationComponent.js";
export default function Education(){
    let title=React.useRef(null);
    React.useEffect(()=>{
        let ctx=gsap.context(()=>{
            gsap.from(title, {
                scrollTrigger:{
                    trigger: title,
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 1,
                ease: "power4.inOut",
                y: 50
            })
        });
        return ()=>{ctx.revert()}
    },[])
    const educationElements= school.map((a, i)=><EducationComponent key={i} id={i} name={a.name} duration={a.duration} qualification={a.qualification} specialisation={a.specialisation} image={a.image} />)
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems:"center", width: "80%"}}>
             <h1 ref={el=>{title=el}} style={{fontWeight: "bold", overflow: "hidden"}}>EDUCATION</h1>
                 {educationElements}
        </div>
    )
}