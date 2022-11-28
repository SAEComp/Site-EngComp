import React from "react";
import {ComprarButton} from './styles';

interface  Props{
    text:string
}
const GreenButton:React.FC<Props> = ({text})=>{
    return (
        <ComprarButton>
            {text}
        </ComprarButton>
    )
}

export default GreenButton;