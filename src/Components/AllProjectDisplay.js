import React from "react";
import "./css/Project.css"
import { imageData } from "../Documents/ImageData";
import ProjectContent from "./ProjectContent";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
export default function AllProjectDisplay(){
    let title=React.useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    const navigate=useNavigate();
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
                y: 100
            })
        });
        return ()=>{ctx.revert()}
    },[]);
    const projectElement=imageData.map((data, i)=><ProjectContent link={data.link} key={i} id={i} src={data.src} description={data.description} duration={data.duration} skill={data.skill} name={data.name}/>)
    return(
        <>
            <div id="project" className="project" style={{paddingTop:"50px"}}>
                <div style={{position:"absolute", width:"100%", display:"flex", justifyContent:"center"}}>
                    <i onClick={()=>{navigate('/')}} className="fa fa-arrow-left" aria-hidden="true" style={{position:"absolute", fontSize:"2.5rem", left:"7%", cursor:"pointer"}}></i>
                    <h1 ref={el=>{title=el}} style={{fontWeight: "bold"}}>PROJECTS</h1>
                </div>
                <div className="g-container" style={{marginTop:"100px"}}>
                    {projectElement}
                </div>
            </div>
</>
    )
}