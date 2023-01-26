import React from "react";
import { Container, Text } from "./style";
import { FaCaretDown, FaEnvelope, FaHome, FaInstagram, FaPhone, FaSmile, FaTwitch, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import img1 from '../../assets/img/background1.jpg';
import img2 from '../../assets/img/background2.jpg'
import img3 from '../../assets/img/background2.jpg'

interface  Props{
    type:string;
    text:string;
};
const ContactSoc:React.FC<Props> = ({text, type})=>{
  
    let img = <FaSmile/>;
    if(type == "Insta"){
        img = <FaInstagram/>
    }
    else{
        if(type == "Twitch"){
            img = <FaTwitch/>
        }

        else{
            if(type == "Twitter"){
                img = <FaTwitter/>
            }
        }
    }
    
    return (
        <Container>
            <div style={{padding: "2rem"}}>
                {img}
            </div>
            <div>
                {text}
            </div>
        </Container>        
            
            
        
        
    )
}

export default ContactSoc;