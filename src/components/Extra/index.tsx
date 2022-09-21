import React, {useEffect} from 'react';
import {ArrowDiv, Container, TextDiv, TitleTex, NormalText, ExtrasLogos, LogoDiv,Button} from "./styles"
import {FaCaretRight} from 'react-icons/fa';
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
                <NormalText>
                    {text}
                </NormalText>
                <ExtrasLogos>
                    <LogoDiv href="#">
                        <img src={ada} alt="saecomp" className='Ada'/>
                    </LogoDiv>
                    <LogoDiv className="centered" href="#">
                        <img src={saecomp} alt="saecomp"/>
                    </LogoDiv>
                    <LogoDiv href="#">
                        <img src={senc} alt="saecomp"/>
                    </LogoDiv>
                    <LogoDiv href="#">
                        <img src={senc} alt="saecomp"/>
                    </LogoDiv>
                </ExtrasLogos>
                <ArrowDiv><FaCaretRight href = "#" className='arrow' />
                <NormalText>Arrasta pro lado!</NormalText>
                </ArrowDiv>
                <Button>E MUITAS OUTRAS</Button>
            </TextDiv>
            
        </Container>
    )
}
export default Extras;