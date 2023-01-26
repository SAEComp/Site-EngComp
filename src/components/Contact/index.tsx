import React from "react";
import { Container, Text } from "./style";
import { FaCaretDown, FaEnvelope, FaHome, FaPhone, FaSmile } from "react-icons/fa";
import img1 from '../../assets/img/background1.jpg';
import img2 from '../../assets/img/background2.jpg'
import img3 from '../../assets/img/background2.jpg'

interface  Props{
    type:string;
    text:string;
};
const ContactDir:React.FC<Props> = ({text, type})=>{
  
    let img = <FaSmile/>;
    if(type == "Email"){
        img = <FaEnvelope/>
    }
    else{
        if(type == "Telefone"){
            img = <FaPhone/>
        }

        else{
            if(type == "Endereço"){
                img = <FaHome/>
            }
        }
    }
    
    return (
        <Container>
            <div style={{padding: "2rem"}}>
                {img}
            </div>
            <div>
            
                {type}
            <Text>
                {text}
            </Text>
            </div>
        </Container>        
            
            
        
        
    )
}

export default ContactDir;