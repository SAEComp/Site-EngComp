import React from 'react';
import {HeaderTopic, TextDiv, HeaderTextTitle, HeaderText, HeaderImg} from './styles'
import img1 from '../../assets/img/white-background.jpg';
import img2 from '../../assets/img/logo_saecomp_extenso_verde_transparente 1.jpg'

interface Props{
    title:string;
    text:string;
    url: string;
  }

const Header2:React.FC<Props> = ({title, text, url}) =>{
    let img;
    if(url == 'img2'){
        img = img2;
    }
    else{
        img = img1
    }
    return(
        <HeaderTopic style={{  
            backgroundImage: `url("${img1}")` }}>
                <HeaderImg>
                <img src={img2}/>
                </HeaderImg>
                <TextDiv>
                    <HeaderTextTitle>
                        {title}
                    </HeaderTextTitle>
                    
                        <HeaderText>
                            {text}
                        </HeaderText>
                </TextDiv>
            
        </HeaderTopic>
    );
}

export default Header2;

