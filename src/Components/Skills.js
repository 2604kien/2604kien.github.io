import React from "react";
import "./css/Skills.css"
export default function Skills(){
    let title=React.useRef(null);
    return(
        
        <div id="skills" className="skills">
            <h1 ref={el=>{title=el}} style={{fontWeight: "bold"}}>SKILLS</h1>
        </div>
    )
}