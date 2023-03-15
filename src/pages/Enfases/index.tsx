import React from "react";
import {Container, Wrapper} from './styles';

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";
import CardExtra from "../../components/Card";
import WhatEnf from "../../components/WhatEnf";
import { Defaultmargin, DefaultTitle } from "../Default/styles";

const Enfases = ()=>{
    return(
       <Container> 
            <NavBar/>
          <Wrapper>
          
          <Header 
            title="ÊNFASES"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam recusandae velit sapiente perferendis repudiandae eum provident aut! Nobis quas magnam reprehenderit accusantium dolorum quia eos necessitatibus fugit non fuga!"
            url = "../../assets/img/background1.jpg"
            />
            <WhatEnf/>
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