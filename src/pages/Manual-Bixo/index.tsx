import React from "react";
import {Container, Wrapper, HeaderBixo, Centered} from './styles';
import { Button } from "../../components/Button/styles";
import NavBar from "../../components/NavBar";
import TopicosManual from "../../components/TopicosManual";
import CardExtraScreen from "../../components/CardExtraScreen";
import Footer from "../../components/Footer";
import logo from "../../assets/img/header_023.png";
import { Card } from "../Default/styles";

const Manual = ()=>{
   let clientH = document.documentElement.clientHeight;
   const scrollbar = () => {
      window.scrollTo({top: clientH, behavior: 'smooth'});
    }
    return(
       <Container>
          <NavBar/>
            <HeaderBixo>
               <img src={logo} style={{width: "30vw"}} alt="Perry 023"/>
               <Button style={{padding: "2rem"}} onClick = {scrollbar}>O que fazer para não ser um bixo burro?</Button>
            
         
            </HeaderBixo>
            <TopicosManual />

           <CardExtraScreen/>
            
            <Footer />

       </Container>
    )
}

export default Manual;
