import React from "react";
import {Container, Wrapper, HeaderNotas, HeaderGradient, HeaderNotasTitle} from './styles';

import NavBar from "../../components/NavBar";
import FuvestNotas from "../../components/FuvestNotas";
import EnemNotas from "../../components/EnemNotas";
import OlimNotas from "../../components/OlimNotas";
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
                     <HeaderNotasTitle style = {{color: 'aqua', borderWidth: '.5rem', borderColor: 'black'}}>
                        NOTAS DE CORTE
                     </HeaderNotasTitle>
                     <StandardText style = {{color: 'white', borderWidth: '.5rem', borderColor: 'black', width: '55em'}}>
                     O curso de Engenharia de Computação (ENGCOMP) na USP de São Carlos é um dos mais concorridos, atraindo estudantes de todo o país devido à sua excelência e relevância no mercado tecnológico. A cada ano, muitos candidatos se dedicam para conquistar uma vaga nesse curso altamente prestigiado.
                     </StandardText>
                  </Defaultmargin>
               </HeaderGradient>
            </HeaderNotas>
            <FuvestNotas />
            <EnemNotas />
            <OlimNotas />
            <Footer />
          </Wrapper>
       </Container>
    )
}

export default Notas;