import React from "react";
import {Container, Wrapper, HeaderBixo, Centered} from './styles';
import { Button } from "../../components/Button/styles";
import NavBar from "../../components/NavBar";
import TopicosManual from "../../components/TopicosManual";
import Extras from "../../components/Extra";
import Footer from "../../components/Footer";
import logo from "../../assets/img/header_023.png";

const Manual = ()=>{
    return(
       <Container>
          <NavBar/>
            <HeaderBixo>
               <img src={logo} style={{width: "30vw"}} alt="Perry 023"/>
               <a href="SAEComp"><Button style={{padding: "2rem"}}>O que fazer para não ser um bixo burro?</Button></a>
            </HeaderBixo>
            <TopicosManual />
            <Extras 
            title = "EXTRACURRICULARES" 
            text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam recusandae velit sapiente perferendis repudiandae eum provident aut! Nobis quas magnam reprehenderit accusantium dolorum quia eos necessitatibus fugit non fuga!"
            />
            <Footer />

       </Container>
    )
}

export default Manual;
