import React from "react";
import { CardDiv, WhatImg, DivText, StandardText } from './styles';
import img1 from '../../assets/img/brain.png';
import img2 from '../../assets/img/blusa.png';
import img3 from '../../assets/img/prancheta.png';
import img4 from '../../assets/img/hug.png';
import img5 from '../../assets/img/pc.png';
import img6 from '../../assets/img/festa.png';


type Props = {
    text: string;
    url: string;
  }
  
const CardWhatwedo:React.FC<Props> = ({text, url}) =>{
    let img;
    if(url == 'img1'){
        img = img1;
    }
    else if(url == 'img2'){
        img = img2;
    }
    else if(url == 'img3'){
        img = img3;
    }
    else if(url == 'img4'){
        img = img4;
    }
    else if(url == 'img5'){
        img = img5;
    }
    else if(url == 'img6'){
        img = img6;
    }
    return(
        <CardDiv>
           <WhatImg src = {img}/>
           
            <DivText>
                <div ><StandardText>{text}</StandardText></div>
            </DivText>
        
        </CardDiv>
    )
}
export default CardWhatwedo;