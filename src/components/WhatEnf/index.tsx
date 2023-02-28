import React from "react";

import { WhatEnfDiv, Grid, Container, Enf_img } from "./styles";
import Enfases_img from "../../assets/img/Enfases.png"
import { DefaultTitle } from "../../pages/Default/styles";


const WhatEnf:React.FC = ()=>{
    return(
        <Container>
        <WhatEnfDiv>
            <DefaultTitle style = {{color: '#003CC5'}}>TUDO SOBRE ÊNFASES</DefaultTitle>
            <Grid>
                <div className="explanation">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu. A erat nam at lectus urna duis. Nunc sed id semper risus. Faucibus vitae aliquet nec ullamcorper. Felis donec et odio pellentesque diam volutpat commodo. Eget mi proin sed libero. Vitae congue eu consequat ac felis donec et odio. Amet dictum sit amet justo donec enim diam vulputate ut. Dui ut ornare lectus sit amet est placerat. Convallis posuere morbi leo urna molestie at elementum eu. Ullamcorper a lacus vestibulum sed arcu non odio. Adipiscing elit duis tristique sollicitudin nibh sit. Mauris a diam maecenas sed enim ut. Tellus id interdum velit laoreet id. Duis ut diam quam nulla porttitor massa. Eget mauris pharetra et ultrices neque. Sit amet dictum sit amet justo donec enim diam. Non sodales neque sodales ut etiam sit.
                    </p>
                    <p>Quis enim lobortis scelerisque fermentum dui faucibus. Eget mauris pharetra et ultrices neque ornare. Non pulvinar neque laoreet suspendisse. Quis eleifend quam adipiscing vitae proin. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Euismod nisi porta lorem mollis aliquam ut. Velit dignissim sodales ut eu sem integer vitae. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sit amet porttitor eget dolor morbi non. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Faucibus purus in massa tempor nec.                    
                    </p>
                </div>
            </Grid> 
        </WhatEnfDiv>
        <Enf_img> <img src={Enfases_img}/> </Enf_img>
               
        </Container>
    );
}

export default WhatEnf;