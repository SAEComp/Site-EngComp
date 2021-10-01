import React from "react";
import {Button} from './styles';

interface  Props{
    text:string
}
const OrangePinkButton:React.FC<Props> = ({text})=>{
    return (
        <Button>
            {text}
        </Button>
    )
}

export default OrangePinkButton;