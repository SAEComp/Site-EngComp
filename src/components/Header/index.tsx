import React from 'react';
import {HeaderTopic, HeaderText, HeaderGradient, HeaderTextTitle, TextDiv, ArrowDiv} from "./styles"
import {Defaultmargin, StandardText} from '../../pages/Default/styles'
import {FaCaretDown} from 'react-icons/fa';
import img1 from '../../assets/img/background1.jpg';
import img2 from '../../assets/img/background2.jpg'

interface Props{
  title:string;
  text:string;
  url: string;
}


const Header:React.FC<Props> = ({title, text, url}) =>{
  let img;
  if(url == 'img2'){
     img = img2;
  }
  else{
     img = img1
  }
    
    return(
      <HeaderTopic style={{  
        backgroundImage: `url("${img}")` }}>
        <HeaderGradient>
          
            <TextDiv>
            <Defaultmargin>
            <HeaderTextTitle>
                    {title}
            </HeaderTextTitle>
            <div style={{maxWidth: '60vw', color: '#ffffff'}}>
              <StandardText>
                {text}
              </StandardText>
            </div>
            </Defaultmargin>
            </TextDiv>
            
        
        </HeaderGradient>
        <ArrowDiv>
            <a href = "#"><FaCaretDown className="arrow"/></a>
        </ArrowDiv>
      </HeaderTopic>
      
    );
  }
  
  export default Header;