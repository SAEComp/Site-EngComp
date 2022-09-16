import React from 'react';
import {Container, TextDiv, TitleTex, NormalText, ExtrasLogos, LogoDiv,Button} from "./styles"

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
                        
                        <img src={saecomp} alt="saecomp" height="100px"/>
                    </LogoDiv>
                    <LogoDiv className="centered" href="#">
                        <img src={ada} alt="saecomp" height="100px"/>
                    </LogoDiv>
                    <LogoDiv href="#">
                        <img src={senc} alt="saecomp"/>
                    </LogoDiv>
                </ExtrasLogos>
                <Button>E MUITAS OUTRAS</Button>
            </TextDiv>
        </Container>
    )
}
export default Extras;