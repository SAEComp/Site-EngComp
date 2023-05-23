import React from 'react';
import { Title, Text, Container } from './style';
interface Props{
    title: string;
    text:string;
    
  }

const Projeto:React.FC<Props> = ({title, text}) =>{
    return (  
        <Container>
           <Title>
                {title}
           </Title>
           <Text>
                {text}
           </Text>

        </Container>
    );
}

export default Projeto;