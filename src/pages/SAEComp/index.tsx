import React from "react";
import { Container, Wrapper, ProjetosEmAcao, Centered, DualGrid, Button } from "./styles";
import NavBar from "../../components/NavBar";
import Header2 from "../../components/Header2";
import ProdutosSaecomp from "../../components/ProdutosSaecomp";
import Extras from "../../components/Extra";
import Projeto from "../../components/Projetos";
import Footer from "../../components/Footer";
import ContactDir from "../../components/Contact";
import ContactSoc from "../../components/ContactSoc";


const Titulos = {
   fontSize: "3rem",
  fontWeight: "bold",
  color: "#238d41",
  marginLeft: "10rem"

};

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
            
            <div style={{padding: "3rem 0 3rem 0"}}>
            <p style={Titulos}> PROJETOS EM AÇÃO</p>
            <Centered>
         
            <ProjetosEmAcao>
           
               <Projeto title = "Projeto 1" text = "Texto 1"/>
               <Projeto title = "Projeto 2" text = "Texto 2"/>
               <Projeto title = "Projeto 3" text = "Texto 3"/>
            </ProjetosEmAcao>
           
            </Centered>
            </div>

            <div style={{padding: "3rem 0 3rem 0"}}>

            <p style={Titulos}>Converse Com a Gente!</p>
            <DualGrid>
               
               <div>
                  <ContactDir text = "AA" type = "Email"/>
                  <ContactDir text = "AA" type = "Telefone"/>
                  <ContactDir text = "AA" type = "Endereço"/>
               </div>

               <div>
                  <ContactSoc text = "AA" type = "Twitch"/>
                  <ContactSoc text = "AA" type = "Insta"/>
                  <ContactSoc text = "AA" type = "Twitter"/>
               </div>
            </DualGrid>
            <Centered><a href="https://wa.me/5516997381861" target="_blank"><Button>  Curtiu? Chama nossa presida no Zap!</Button></a></Centered>
            
            </div>
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