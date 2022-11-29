import React from "react";
//import{View, Image, Style} from "react-native"
import CardVendas from "../../components/CardVendas";
import {VendasDiv, VendasText} from "./styles";

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