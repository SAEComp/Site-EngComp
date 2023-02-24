import React from "react";
import {Container, Wrapper} from './styles';

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";
import CardExtra from "../../components/Card";
import WhatEnf from "../../components/WhatEnf";
import Enfase from "../../components/Enfase";

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
            <Enfase title="Ênfase Exemplo" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Enfase>
            <Extras 
            title = "EXTRACURRICULARES" 
            text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam recusandae velit sapiente perferendis repudiandae eum provident aut! Nobis quas magnam reprehenderit accusantium dolorum quia eos necessitatibus fugit non fuga!"
            />
           
            <Footer />
          </Wrapper>
            
           
       </Container>
    )
}

export default Enfases;