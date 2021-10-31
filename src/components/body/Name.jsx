import React from "react";
import Contact from "../Contact";
import SocialNetworks from "./SocialNetworks";
import portada from "../../img/portada.png"

function Name(){
    return(
        <div className="name" id="home">
        <div className="name-section">
            <h1>David Oliva</h1>
            <h2>Soy desarrollador web, actualmente trabajo realizando proyectos que van desde landing pages hasta sistemas SaaS (Software as a Service) para la venta, contabilidad y administración de empresas.</h2>
            <div className="social-name"> 
                <SocialNetworks />
            </div>
            <div className="contact-name">
                <Contact /> 
            </div>
            </div>
            <div className="portada">
                <img src={portada} ></img>
            </div>
        </div>    
            
                
        
    );
}


export default Name