import React, {useEffect} from "react";
import {Container, Wrapper} from './styles';

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import WhatIs from "../../components/WhatIs";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";

const Home:React.FC = ()=>{
 
    return(
       <Container>
          <NavBar/>
          <Wrapper>
            <Header 
            title="ENGENHARIA DE COMPUTAÇÃO"
            text="A Engenharia da Computação tem como objetivo principal o desenvolvimento de hardware, que é a parte física dos equipamentos e seus periféricos. No entanto, nessa profissão também existe a interface com o software, que são os sistemas, programas e redes computacionais. Neste site você conhecerá tudo sobre o curso na USP em São Carlos."
            url = "img2"
            />
            <WhatIs />
            <Extras 
            title = "EXTRACURRICULARES" 
            text = "O curso de Engenharia de Computação da USP São Carlos possui diversas extracurriculares atreladas a ele, dentre elas estão a ADA, SaeComp e a SenC."
            />
            <Footer />
          </Wrapper>
       </Container>
    );
}

export default Home;