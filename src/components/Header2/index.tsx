import React from 'react';
import {HeaderTopic, TextDiv, HeaderTextTitle, HeaderText} from './styles'
import img1 from '../../assets/img/logo_saecomp_extenso_verde_transparente 1.jpg'

interface Props{
    title:string;
    text:string;
    url: string;
  }

const Header2:React.FC<Props> = ({title, text, url}) =>{
    return(
        <HeaderTopic style={{
            backgroundImage: `url("${img1}")` }}>
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

