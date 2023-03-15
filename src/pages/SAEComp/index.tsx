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
import WhatWeDo from "../../components/WhatWeDo";
import {Defaultmargin, DefaultTitle} from "../Default/styles"

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
            text="Oferecemos suporte acadêmico e representatividade frente aos órgãos da Universidade de São Paulo para todos os alunos de graduação do curso de Engenharia de Computação. Nossa organização é composta somente por alunos de graduação do curso de Engenharia de Computação, dessa forma, estamos inseridos no ambiente e no grupo que queremos impactar, alcançando nossos objetivos a partir da integração das turmas e dos indivíduos.
            "
            url = "../../assets/img/background1.jpg"
            />
            <Container>
            <Defaultmargin><DefaultTitle style = {{color: '#238d41'}}>O QUE FAZEMOS</DefaultTitle></Defaultmargin></Container>          
            <WhatWeDo/>
            <Container>
            <Defaultmargin><DefaultTitle style = {{color: '#238d41'}}>VENDAS</DefaultTitle></Defaultmargin></Container>             
            <ProdutosSaecomp/>
            <div style={{padding: "3rem 0 3rem 0"}}>
            <Container>
            <Defaultmargin><DefaultTitle style = {{color: '#238d41'}}>PROJETOS EM AÇÃO</DefaultTitle></Defaultmargin></Container>
            <Centered>
            
            <ProjetosEmAcao>
           
               <Projeto title = "Drive da Eng Comp" text = "Drive que reúne materiais, provas antigas e trabalhos disponibilizados pelos veteranos  das matérias que compõem a grade do curso."/>
               <Projeto title = "Kit Bixo" text = "Um conjunto de artigos elaborados especialmente para você começar o curso vestindo as cores de seu curso."/>
               <Projeto title = "Portfólio de IC's" text = "Um documento com todas as oportunidades de Iniciação Científica oferecidas por professores de diversos professores da USP."/>
            </ProjetosEmAcao>
           
            </Centered>
            </div>

            <div style={{padding: "3rem 0 3rem 0"}}>

            <Defaultmargin><DefaultTitle style = {{color: '#238d41'}}>CONVERSE COM A GENTE</DefaultTitle></Defaultmargin>
            <DualGrid>
               
               <div>
                  <ContactDir text = "saecomp.ec@gmail.com" type = "Email"/>
                  <ContactDir text = "(16) 99738-1861" type = "Telefone"/>
                  <ContactDir text = "Sala 8-001 | Prédio da Eng Comp - USP Campus 2. São Carlos, Brasil" type = "Endereço"/>
               </div>

               <div>
                  <ContactSoc text = "SAEComp" type = "Twitch"/>
                  <ContactSoc text = "@saecomp.ec" type = "Insta"/>
                  <ContactSoc text = "@saecompusp" type = "Twitter"/>
               </div>
            </DualGrid>
            <Centered><a href="https://wa.me/5516997381861" target="_blank"><Button>  Curtiu? Chama nossa presida no Zap!</Button></a></Centered>
            
            </div>
            <Extras 
            title = "EXTRACURRICULARES" 
            text = "Umas das melhores oportunidades que se tem na universidade são as extras curriculares. Além de gerar muito aprendizado, também são ótimas para socializar. Dentre as diversas, estas foram responsáveis pelo desenvolvimento do site, mas você pode conferir as demais pelo seu manual!"
            />
            <Footer />

            

            

          </Wrapper>
       </Container>
    )
}

export default SAEcomp;