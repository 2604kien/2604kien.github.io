import React from "react";
import "./css/Project.css"
import { imageData } from "../Documents/ImageData";
import ProjectContent from "./ProjectContent";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
export default function Project(){
    const navigate=useNavigate();
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
    const projectElement=imageData.map((data, i)=>{
        if(i<=5) return<ProjectContent link={data.link} key={i+Math.random()*1000} id={i} src={data.src} description={data.description} duration={data.duration} skill={data.skill} name={data.name}/>
        else return (<></>);
})
    return(
        <>
            <div  id="project" className="project">
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
                <h2 onClick={()=>{navigate('/all-projects')}} style={{
                        textDecoration:"underline",
                        cursor:"pointer",
                        width:"fit-content",
                        color:"rgba(47,102,154,0.8)"
                    }}>Click for more!!!</h2>
            </div>
           
        </>
    )
}