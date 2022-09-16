import React from 'react';
import {HeaderTopic, HeaderText, HeaderGradient, HeaderTextTitle, TextDiv, ArrowDiv} from "./styles"
import {FaCaretDown} from 'react-icons/fa';

interface Props{
  title:string;
  text:string;
}

const Header:React.FC<Props> = ({title, text}) =>{
    return(
      <HeaderTopic>
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