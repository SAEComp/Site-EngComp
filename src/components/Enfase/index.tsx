import React from "react";

import { EnfDiv, Grid, Container } from "./styles";
import Enfases_img from "../../assets/img/Enfases.png"


type Props = {
    title:string;
    text: string;
  }  

const Enfase:React.FC<Props> = ({title, text})=>{
    return(
        <Container>
        <EnfDiv>
            <h1>{title}</h1>
            <Grid>
                <div className="explanation">
                    <p>
                        {text}
                    </p>
                    <p> MATERÉRIAS NECESSÁRIAS </p>
                </div>
            </Grid> 
        </EnfDiv>               
        </Container>
    );
}

export default Enfase;