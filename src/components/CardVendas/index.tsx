import React from "react";
//import{Image} from "react-native"
import {VendasTopic, VendasImg, ComprarButtonDiv} from "./styles"
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
    if(url == "img1"){
        img = img1;
    }
    else if(url == "img2"){
        img = img2;
    }
    else if(url == "img3"){
        img = img3;
    }
    else if(url == "img4"){
        img = img4;
    }
    else if(url == "img5"){
        img = img5;
    }
    return(
        <VendasTopic>
            <VendasImg style={{backgroundImage: `url("${img}")` }}/>
            <ComprarButtonDiv>
                <ComprarButton text = "COMPRAR"/>
            </ComprarButtonDiv>
        </VendasTopic>
    );
}

export default CardVendas;