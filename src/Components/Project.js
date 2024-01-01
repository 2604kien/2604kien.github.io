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
                ease: "power4.inOut",
                y: 100
            })
        });
        return ()=>{ctx.revert()}
    },[]);
    const projectElement=imageData.map((data, i)=><ProjectContent link={data.link} key={i} id={i} src={data.src} description={data.description} duration={data.duration} skill={data.skill} name={data.name}/>)
    return(
        <>
            <div id="project" className="project">
                <h1 ref={el=>{title=el}} style={{fontWeight: "bold", marginBottom: "70px"}}>PROJECTS</h1>
                <div className="g-container">
                    {projectElement}
                </div>
            </div>
            
            <div style={{
                display:"flex",
                justifyContent:"center",
                backgroundColor:"whitesmoke",
                width:"100%",
                textAlign:"center",
                paddingBottom:"5%"}}>
                <h2 onClick={()=>{window.location.href="https://github.com/2604kien"}} style={{textDecoration:"underline", cursor:"pointer", width:"fit-content"}}>Click for more!!!</h2>
            </div>
           
        </>
    )
}