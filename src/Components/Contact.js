import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./css/Contact.css";
import gsap from "gsap";
export default function Contact(){
    const [success, setSuccess]=React.useState(false);
    let title=React.useRef(null);
    let form = useRef();
    const [formData, setFormData]= React.useState({
        subject: "",
        name:"",
        userEmail:"",
        message:""
    })
    function handleChange(e){
        const {name, value}= e.target;
        setFormData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        });
        console.log(formData);
    }
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
    },[]);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yjhq3q8', 'template_48pgukj', form.current, 'tAzp0xY6tQ-qgjapk')
          .then((result) => {
            setSuccess(true);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div id="contact" className="contact">
            <div className='contact--container'>
             <h1 ref={el=>{title=el}} style={{fontWeight: "bold", overflow: "hidden"}}>CONTACT</h1>
             <div className="contact--form">
                <form ref={form} onSubmit={sendEmail}>
                <div className="success" style={{display: success?"block":"none"}}>Your message is successfully sent!</div>
                    <label htmlFor="name">Full Name: <span style={{color: "red"}}>*</span></label>
                    <input onChange={handleChange} id="name" className="name" type="text" placeholder="Please enter your name." name="name" value={formData.name} required/>
                    
                    <label htmlFor="email">Email: <span style={{color: "red"}}>*</span></label>
                    <input onChange={handleChange} id="email" className="email" type="email" placeholder="Please enter your email." name="email" value={formData.mail} required/>

                    <label htmlFor="message">Message: <span style={{color: "red"}}>*</span></label>
                    <textarea onChange={handleChange} id="message" className="message" placeholder="Please enter your message." name="message" value={formData.message} required/>

                    <button type="submit" style={{borderRadius: "5px", width:"150px", height:"35px", border:"2px solid black", backgroundColor: "white"}}><span style={{textDecoration:"underline", fontSize:"1.2rem", color:"black", zIndex:"1000"}}>Send</span></button>
                   
                </form>

             </div>
             </div>
        </div>
    )
}