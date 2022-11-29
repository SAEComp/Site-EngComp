import React from "react";
import {Container, Wrapper} from './styles';

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import WhatIs from "../../components/WhatIs";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";
import img from '../../assets/img/background1.jpg';
const Manual = ()=>{
    return(
       <Container>
          <NavBar/>
          <Wrapper>
            <Header 
            title="MANUAL DO BIXO"
            text="Parabéns bixo/bixete pela grande conquista e seja bem vindo à Universidade de São Paulo, a melhor universidade da América Latina! Confira dicas importantes para essa nova fase.
            "
            url = "img1"
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

export default Manual;
