import React from "react";
import { motion, useViewportScroll, useInView, useAnimation} from "framer-motion/dist/framer-motion"
import "./About.css"
import { description } from "../Documents/AboutMe";
export default function About(){
    const text=React.useRef(null);
    const isTextInView=useInView(text,{once:true});
    const controlText=useAnimation();
    React.useEffect(()=>{
        if(isTextInView) controlText.start("visible");
      
    },[isTextInView])
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
           
           </div>

        </div>
    );
}