import React from "react";
import barra from "../../assets/img/barra.png"
import manutencao from "../../assets/img/manutencao.png"
import Insta from "../../assets/img/Insta.png"
import Face from "../../assets/img/Face.png"
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {ContentSection, DevTitle, DevText, Card, Row, SocialImg} from "./styles";
const Default:React.FC =()=>{
    return(
        <div>
            <NavBar/>
            <ContentSection>
                
                <Card>
                    <DevTitle>EM</DevTitle>
                    <DevTitle>DESENVOLVIMENTO!</DevTitle>
                    <img style ={{margin:'auto', width:'450px' }}src ={manutencao}/>
                    <img style ={{margin:'auto', width:'450px' }}src ={barra}/>
                    <DevText>Essa página está quase pronta. Volte em breve!</DevText>
                    <DevText>Enquanto isso, visite as redes sociais da SAEComp:</DevText>
                    <Row>
                        <a href = "https://www.instagram.com/saecomp.ec">
                            <SocialImg src = {Insta}/>
                        </a>
                        <a href = "https://www.facebook.com/saecomp">
                            <SocialImg src = {Face}/>
                        </a>
                    </Row>
                </Card>
            </ContentSection>
            <Footer/>
        </div>
    )
}
export default Default;