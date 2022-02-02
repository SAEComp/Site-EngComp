import React from "react";
import {Container, Wrapper} from './styles';

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import WhatIs from "../../components/WhatIs";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";

const Home:React.FC = ()=>{
    return(
       <Container>
          <NavBar />
          <Wrapper>
            <Header 
            title="ENGENHARIA DE COMPUTAÇÃO"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam recusandae velit sapiente perferendis repudiandae eum provident aut! Nobis quas magnam reprehenderit accusantium dolorum quia eos necessitatibus fugit non fuga!
            "
            />
            <WhatIs />
            <Extras 
            title = "EXTRACURRICULARES" 
            text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam recusandae velit sapiente perferendis repudiandae eum provident aut! Nobis quas magnam reprehenderit accusantium dolorum quia eos necessitatibus fugit non fuga!"
            />
            <Footer />
          </Wrapper>
       </Container>
    );
}

export default Home;