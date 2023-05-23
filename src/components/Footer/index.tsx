import React from "react";
import { FooterContainer } from "./styles";
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa';



const Footer = ()=>{
    return(

        <FooterContainer>
      
            <h1>Engenharia de Computação</h1>
            <h2>USP - São Carlos</h2>
            
            <div>
                <a href="https://www.facebook.com/saecomp"><FaFacebook className="svg"/></a>
                <a href="https://twitter.com/saecompusp?s=20"><FaTwitter className="svg"/></a>
                <a href="https://www.instagram.com/saecomp.ec"><FaInstagram className="svg"/></a>
            </div>
        </FooterContainer>
    );
}

export default Footer;