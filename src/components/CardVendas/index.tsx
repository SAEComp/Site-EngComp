import React from "react";
//import{Image} from "react-native"
import {VendasTopic, VendasImg, ComprarButtonDiv, DivBlock} from "./styles"
import ComprarButton from "../../components/ComprarButton"
import img1 from "../../assets/img/sueter_branco_frente.png"
import img2 from "../../assets/img/sueter_preto_frente.png"
import img3 from "../../assets/img/moletom_preto_1 frente.png"
import img4 from "../../assets/img/moletom_cinza_frente.png"
import img5 from "../../assets/img/moletom_preto_2 frente.png"

interface Props{
    url: string;
}

const CardVendas:React.FC<Props> = ({url})=>{
    let img;
    let link;
    if(url == "img1"){
        img = img1;
        link = 'https://beuni.com.br/plataforma/';
    }
    else if(url == "img2"){
        img = img2;
        link = 'https://beuni.com.br/plataforma/';
    }
    else if(url == "img3"){
        img = img3;
        link = 'https://beuni.com.br/plataforma/';
    }
    else if(url == "img4"){
        img = img4;
        link = 'https://beuni.com.br/plataforma/';
    }
    else if(url == "img5"){
        img = img5;
        link ="#"
    }
    return(
        <DivBlock>
        <VendasTopic>
            
            <VendasImg style={{backgroundImage: `url("${img}")` }}/>
            <a href={link} target= "_blank"><ComprarButtonDiv> 
                <ComprarButton text = "COMPRAR"/>
            </ComprarButtonDiv></a>
            
        </VendasTopic>
        </DivBlock>
    );
}

export default CardVendas;