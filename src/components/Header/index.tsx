import React from 'react';
import {HeaderTopic, HeaderText, HeaderGradient, HeaderTextTitle, TextDiv, ArrowDiv} from "./styles"
import {FaCaretDown} from 'react-icons/fa';
import img from '../../assets/img/background2.jpg';
interface Props{
  title:string;
  text:string;
  url: string;
}


const Header:React.FC<Props> = ({title, text, url}) =>{
    return(
      <HeaderTopic style={{  
        backgroundImage: `url("${img}")` }}>
        <HeaderGradient>

            <TextDiv>
            <HeaderTextTitle>
                    {title}
            </HeaderTextTitle>

                <HeaderText>
                   {text}
                </HeaderText>
            </TextDiv>
        
        </HeaderGradient>
        <ArrowDiv>
            <a href = "#"><FaCaretDown className="arrow"/></a>
        </ArrowDiv>
      </HeaderTopic>
      
    );
  }
  
  export default Header;