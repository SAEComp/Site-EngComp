import React from 'react';
import {CardDiv, NormalText} from "./style"

interface Props{
    text:string;
    imgUrl: string;
    
  }

const CardExtra:React.FC<Props> = ({text, imgUrl}) =>{
    return (  
        <div className='Container' onClick ={()=> {window.open('https://www.google.com.br', '_blank');}}>
           
            <CardDiv>

                <div className='Imagem'>
                    <img width="70vw" src={imgUrl}></img>
                </div>

                <NormalText>
                    {text}
                </NormalText>
            </CardDiv>

        </div>
    );
}

export default CardExtra;