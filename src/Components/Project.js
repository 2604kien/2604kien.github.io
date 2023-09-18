import React from "react";
import "./css/Project.css"
import { imageData } from "../Documents/ImageData";
import ProjectContent from "./ProjectContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Project(){
    let title=React.useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    React.useEffect(()=>{
        let ctx=gsap.context(()=>{
            gsap.from(title, {
                scrollTrigger:{
                    trigger: title,
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 1,
                ease: "easeInOut",
                y: 100
            })
        });
        return ()=>{ctx.revert()}
    },[])
    console.log(imageData);
    const projectElement=imageData.map((data, i)=><ProjectContent link={data.link} key={i} id={i} src={data.src} description={data.description} duration={data.duration} skill={data.skill} name={data.name}/>)
    return(
        <div id="project" className="project pt-5">
            <h1 ref={el=>{title=el}} style={{fontWeight: "bold"}}>PROJECTS</h1>
            <div className="g-container">
                {projectElement}
            </div>
        </div>
    )
}