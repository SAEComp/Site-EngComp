import React from "react";

import { EnfDiv, Grid, Container } from "./styles";
import Enfases_img from "../../assets/img/Enfases.png"
import { DefaultTitle } from "../../pages/Default/styles";

type Props = {
    
    text: string;
  }  

const Enfase:React.FC<Props> = ({ text})=>{
    return(
        <Container>
        <EnfDiv>
            
            <Grid>
                <DefaultTitle style = {{color: '#003CC5'}}>ÊNFASE EXEMPLO</DefaultTitle>
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