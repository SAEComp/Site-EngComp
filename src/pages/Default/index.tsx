import React from "react";
import barra from "../../assets/img/barra.png"
import Insta from "../../assets/img/Insta.png"
import Face from "../../assets/img/Face.png"
import manutencao from "../../assets/img/manutencao.png"
import {ContentSection, Title, Text, Card, Row, SocialImg} from "./styles";

const Default:React.FC =()=>{
    return(
        <div>
            <ContentSection>
                <Card>
                    <Title>EM</Title>
                    <Title>DESENVOLVIMENTO!</Title>
                    <img style ={{margin:'auto', width:'450px' }}src ={manutencao}/>
                    <img style ={{margin:'auto', width:'450px' }}src ={barra}/>
                    <Text>Essa página está quase pronta. Volte em breve!</Text>
                    <Text>Enquanto isso, visite as redes sociais da SAEComp:</Text>
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
            
        </div>
    )
}
export default Default;