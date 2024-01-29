import React from "react";
import {Container, Wrapper} from './styles';

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";
import CardExtra from "../../components/Card";
import WhatEnf from "../../components/WhatEnf";
import { Defaultmargin, DefaultTitle } from "../Default/styles";
import Carrossel from "../../components/EnfaseCarousel";
import { Carrosseldiv } from "./styles";
const Enfases = ()=>{
    return(
       <Container> 
            <NavBar/>
          <Wrapper>
          
          <Header 
            title="ÊNFASES"
            text="As ênfases são oportunidades dentro da Engenharia de Computação para mergulhar mais fundo em áreas específicas de interesse. Enquanto as disciplinas gerais oferecem uma visão ampla, as ênfases são uma oportunidade para um conhecimento mais especializado, mantendo sempre um vínculo essencial com os fundamentos do curso. Uma oportunidade de personalizar a jornada acadêmica, explorar e aprofundar-se em áreas específicas."
            url = "../../assets/img/background1.jpg"
            />
            <WhatEnf/>
            <Carrosseldiv> <Carrossel/> </Carrosseldiv>
             <Extras 
            title = "EXTRACURRICULARES" 
            text = "Umas das melhores oportunidades que se tem na universidade são as extras curriculares. Além de gerar muito aprendizado, também são ótimas para socializar. Dentre as diversas, estas foram responsáveis pelo desenvolvimento do site, mas você pode conferir as demais pelo seu manual!"
            />
            <Footer />
          </Wrapper>
            
           
       </Container>
    )
}

export default Enfases;