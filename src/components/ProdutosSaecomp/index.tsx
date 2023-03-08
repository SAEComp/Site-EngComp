import React from "react";
//import{View, Image, Style} from "react-native"
import CardVendas from "../../components/CardVendas";
import { Defaultmargin } from "../../pages/Default/styles";
import {VendasDiv} from "./styles";




const ProdutosSaecomp = (props:any) =>{

    return(
        <VendasDiv>
            <Defaultmargin>
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
            </Defaultmargin>
        </VendasDiv>
        
    );
}

export default ProdutosSaecomp;