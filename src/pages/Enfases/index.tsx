import React from "react";
import {Container, Wrapper} from './styles';

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import WhatIs from "../../components/WhatIs";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";
import CardExtra from "../../components/Card";
import EmConstrucao from "../../components/EmConstrucao";


const Enfases = ()=>{
    return(
       <Container> 
            <NavBar/>
          <Wrapper>

            <EmConstrucao />
           
            <Footer />
          </Wrapper>
            
           
       </Container>
    )
}

export default Enfases;