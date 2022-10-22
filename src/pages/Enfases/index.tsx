import React from "react";
import {Container, Wrapper} from './styles';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import WhatIs from "../../components/WhatIs";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";
import CardExtra from "../../components/Card";

const Enfases = ()=>{
    return(
       <Container> 
          <NavBar/>
          <Wrapper>
          <Header 
            title="ENFASES"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam recusandae velit sapiente perferendis repudiandae eum provident aut! Nobis quas magnam reprehenderit accusantium dolorum quia eos necessitatibus fugit non fuga!"
            url = "../../assets/img/background1.jpg"
            />
            <WhatIs />
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