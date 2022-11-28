import React from "react";
//import{View, Image, Style} from "react-native"
import CardVendas from "../../components/CardVendas";
import {VendasDiv, VendasText} from "./styles";
import img1 from "../../assets/img/sueter_branco_frente.png"
import img2 from "../../assets/img/sueter_preto_frente.png"
import img3 from "../../assets/img/moletom_branco_frente.png"
import img4 from "../../assets/img/moletom_preto_frente_1.png"
import img5 from "../../assets/img/moletom_cinza_frente.png"
import img6 from "../../assets/img/moletom_preto_frente_2.png"

const ProdutosSaecomp = (props:any) =>{
    return(
        <VendasDiv>
            <VendasText> VENDAS </VendasText>
            <CardVendas
            url = "img1">
            </CardVendas>
            <CardVendas
            url = "img2">
            </CardVendas>
            <CardVendas
            url = "img3">
            </CardVendas>
            <CardVendas
            url = "img4">
            </CardVendas>
            <CardVendas
            url = "img5">
            </CardVendas>
        </VendasDiv>
    );
}

export default ProdutosSaecomp;