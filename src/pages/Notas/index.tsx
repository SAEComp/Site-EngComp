import React from "react";
import {Container, Wrapper, HeaderNotas, HeaderGradient, HeaderNotasTitle} from './styles';
import App from "./graficos";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import WhatIs from "../../components/WhatIs";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";
import Background from "../../assets/img/background_notas.jpg";
import {Defaultmargin, StandardText} from "../Default/styles";

const Notas = ()=>{
    return(
       <Container>
          <NavBar/>
          <Wrapper>
            <HeaderNotas style = {{backgroundImage: `url(${Background})`}}>
               <HeaderGradient>
                  <Defaultmargin>
                     <HeaderNotasTitle>
                        Notas de Corte
                     </HeaderNotasTitle>
                     <StandardText style = {{color: 'white', borderWidth: '.5rem', borderColor: 'black'}}>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam recusandae velit sapiente perferendis repudiandae eum provident aut! Nobis quas magnam reprehenderit accusantium dolorum quia eos necessitatibus fugit non fuga!
                     </StandardText>
                  </Defaultmargin>
               </HeaderGradient>
            </HeaderNotas>
            <App/>
            <Footer />
          </Wrapper>
       </Container>
    )
}

export default Notas;