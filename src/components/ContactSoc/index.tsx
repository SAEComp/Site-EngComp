import React from "react";
import { Container, Text, Container2} from "./style";
import { FaCaretDown, FaEnvelope, FaHome, FaInstagram, FaPhone, FaSmile, FaTwitch, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import img1 from '../../assets/img/background1.jpg';
import img2 from '../../assets/img/background2.jpg'
import img3 from '../../assets/img/background2.jpg'
import { DefaultSubtitle } from "../../pages/Default/styles";

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
            <Container2>
                <div style={{padding: "2rem"}}>
                    {img}
                </div>
            </Container2>        
            <DefaultSubtitle style= {{color: '#248F42'}}>{text}</DefaultSubtitle>
        </Container>
            
        
        
    )
}

export default ContactSoc;