import React from "react";
import {Container, Wrapper} from './styles';

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";
import CardExtra from "../../components/Card";
import WhatEnf from "../../components/WhatEnf";
import Enfase from "../../components/Enfase";
import { DefaultTitle } from "../Default/styles";

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
            <WhatEnf></WhatEnf>
            <DefaultTitle style = {{color: '#003CC5'}}>ÊNFASE EXEMPLO</DefaultTitle>
            <Enfase
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Enfase>
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