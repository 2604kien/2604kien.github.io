import React from "react";
import Profile from "../Images/Profile.jpg";
import { description } from "../Documents/AboutMe";
export default function About(){

    return(
        <div className="container-fluid border border-primary ">
            <div className="row border border-primary ">
                <h2 className="d-flex justify-content-center">About Me</h2>
            </div>
           <div className="row">
            <div className="col d-flex align-items-center p-5">
            <p className="text-center">
                {description}
            </p>
            </div>
            <div className="col border border-primary p-0">
                <div>
                    <img className="img-fluid" src={Profile}/>
                </div>
            </div>
           </div>
        </div>
    );
}