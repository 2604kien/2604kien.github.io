import React from "react";
import Profile from "../Images/Profile.jpg";
import { motion, useViewportScroll, useInView, useAnimation} from "framer-motion/dist/framer-motion"
import "./About.css"
import { description } from "../Documents/AboutMe";
export default function About(){
    const text=React.useRef(null);
    const imageRef=React.useRef(null);

    const isTextInView=useInView(text,{once:false});
    const isImageInView=useInView(imageRef, {once:false});

    const controlText=useAnimation();
    const controlImage=useAnimation();

    const slideControl=useAnimation();
    React.useEffect(()=>{
        if(isTextInView) {
            controlText.start("visible");
            slideControl.start("visible");
        }
        else{
            controlText.start("hidden");
            slideControl.start("hidden");
        }
        ;
        if(isImageInView) {
            controlImage.start("visible");
        }
        else{
            controlImage.start("hidden");
        }
    },[isTextInView, isImageInView])
    return(
        <div className="container-fluid animateSection p-3">
            <div className="container-md">
            <div className="row">
                <h2 className="d-flex justify-content-center m-3">About Me</h2>
            </div>
           <div  className="row">
            <div style={{position: "relative",width: "fit-content", overflow:"hidden"}}className="col d-flex align-items-center p-5 animate">
            <div className="border" ref={text} >
            <motion.p 
            variants={{
                hidden:{opacity:0, x:-75},
                visible:{opacity:1, x:0}
            }}
            initial="hidden"
            animate={controlText}
            transition={{type:"tween", duration:1.5, delay: 0.25}}
            className="text-center p-5">
                {description}
            </motion.p>
            <motion.div
                variants={{
                    hidden: {left:0},
                    visible: {left:"100%"}
                }}
                transition={{duration: 0.5, ease:"easeIn"}}
                initial="hidden"
                animate={slideControl}
                style={
                    {
                        backgroundColor: "rgb(10, 113,205,1)",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 37,
                        zIndex: 20
                    }
                }
            />
            </div>
           
            
            </div>
            <div className="col animate">
            <motion.div ref={imageRef} 
            whileHover={{scale:1.03}}
            variants={{
                hidden:{opacity:0, x:75, scale: 1},
                visible:{opacity:1, x:0}
            }}
            initial="hidden"
            animate={controlImage}
            transition={{type:"tween", duration:2, delay: 0.25}}
           >
                    <img  className="img-fluid" style={{borderRadius: "15px"}} src={Profile}/>
            </motion.div>
           
            </div>
           </div>
           </div>
        </div>
    );
}