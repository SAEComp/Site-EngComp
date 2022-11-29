import React from "react";
import { Container, Wrapper } from "./styles";
import NavBar from "../../components/NavBar";
import Header2 from "../../components/Header2";
import ProdutosSaecomp from "../../components/ProdutosSaecomp";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";

const SAEcomp = ()=>{
    return(
       <Container>
          <NavBar/>
          <Wrapper>
            <Header2
            title="CONHEÇA A SECRETARIA ACADÊMICA"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam recusandae velit sapiente perferendis repudiandae eum provident aut! Nobis quas magnam reprehenderit accusantium dolorum quia eos necessitatibus fugit non fuga!
            "
            url = "../../assets/img/background1.jpg"
            />
            <ProdutosSaecomp/>
            <Extras 
            title = "EXTRACURRICULARES" 
            text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam recusandae velit sapiente perferendis repudiandae eum provident aut! Nobis quas magnam reprehenderit accusantium dolorum quia eos necessitatibus fugit non fuga!"
            />
            <Footer />
          </Wrapper>
       </Container>
    )
}

export default SAEcomp;