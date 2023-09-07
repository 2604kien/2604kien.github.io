import React from "react";
import Profile from "../Images/Profile.jpg";
import { motion, useViewportScroll, useInView, useAnimation} from "framer-motion/dist/framer-motion"
import "./About.css"
import { description } from "../Documents/AboutMe";
export default function About(){
    const text=React.useRef(null);
    const imageRef=React.useRef(null);
    const isTextInView=useInView(text,{once:true});
    const isImageInView=useInView(imageRef, {once:true});
    const controlText=useAnimation();
    const controlImage=useAnimation();
    React.useEffect(()=>{
        if(isTextInView) controlText.start("visible");
        if(isImageInView) controlImage.start("visible");
    },[isTextInView, isImageInView])
    return(
        <div className="container-fluid animateSection">
            <div className="row">
                <h2 className="d-flex justify-content-center border-bottom ">About Me</h2>
            </div>
           <div  className="row">
            <div className="col d-flex align-items-center p-5 animate">
            
            <motion.p ref={text}
            variants={{
                hidden:{opacity:0, x:-75},
                visible:{opacity:1, x:0}
            }}
            initial="hidden"
            animate={controlText}
            transition={{type:"tween", duration:1.5, delay: 0.25}}
            className="text-center">
                {description}
            </motion.p>
            
            </div>
            <div className="col p-0 animate">
            <motion.div ref={imageRef} 
            whileHover={{scale:1.025}}
            variants={{
                hidden:{opacity:0, x:75, scale: 1},
                visible:{opacity:1, x:0}
            }}
            initial="hidden"
            animate={controlImage}
            transition={{type:"tween", duration:1}}
           >
                    <img className="img-fluid" style={{borderRadius: "15px"}} src={Profile}/>
            </motion.div>
            </div>
           </div>

        </div>
    );
}