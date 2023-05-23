import React, {useEffect} from 'react';
import {ArrowDiv, Container, TextDiv, TitleTex, ExtrasLogos, LogoDiv,Button, Centered} from "./styles"
import {StandardText} from '../../pages/Default/styles'
import {FaCaretDown} from 'react-icons/fa';
import saecomp from "../../assets/img/saecomp.png";
import ada from "../../assets/img/ada.png";
import senc from "../../assets/svg/senc.svg";

interface Props{
    title:string;
    text:string;
  }
const Extras:React.FC<Props> = ({title, text}) =>{
    
    return(
        <Container>
            <TextDiv>
                <TitleTex>
                    {title}
                </TitleTex>
                <div style= {{color: '#ffffff', marginTop: '1.5rem'}}>
                    <StandardText>
                        {text}
                    </StandardText>
                </div>
                <ExtrasLogos>
                    <LogoDiv href="https://www.instagram.com/ada_usp/" target="_blank" rel="noopener noreferrer">
                        <img src={ada} alt="saecomp" className='Ada'/>
                    </LogoDiv>
                    <LogoDiv className="centered" href="https://www.instagram.com/saecomp.ec/"target="_blank" rel="noopener noreferrer">
                        <img src={saecomp} alt="saecomp"/>
                    </LogoDiv>
                    <LogoDiv href="https://www.instagram.com/senc.usp/" target="_blank" rel="noopener noreferrer">
                        <img src={senc} alt="saecomp"/>
                    </LogoDiv>
                </ExtrasLogos>
                <ArrowDiv><FaCaretDown href = "#" className='arrow' />
                <div style= {{color: '#ffffff'}}>
                    <StandardText>
                        Quer saber mais? Tem muitas outras!
                    </StandardText>
                </div>
                </ArrowDiv>
                <Centered>
                <a href="/Manual-Bixo"><Button>Manual do Bixo</Button></a>
                </Centered>
                
            </TextDiv>
            
        </Container>
    )
}
export default Extras;