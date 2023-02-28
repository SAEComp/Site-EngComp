import React from "react";

import { EnfDiv, Grid, Container } from "./styles";
import Enfases_img from "../../assets/img/Enfases.png"


type Props = {
    
    text: string;
  }  

const Enfase:React.FC<Props> = ({ text})=>{
    return(
        <Container>
        <EnfDiv>
            
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