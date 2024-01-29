import React from "react";

import { WhatEnfDiv, Grid, Container, Enf_img } from "./styles";
import Enfases_img from "../../assets/img/Enfases.png"
import {Defaultmargin, DefaultTitle, StandardText } from "../../pages/Default/styles";


const WhatEnf:React.FC = ()=>{
    return(
        <Container>
        <Defaultmargin>
        <WhatEnfDiv>
            <Grid>
                <div className="explanation">
                <DefaultTitle style = {{color: '#003CC5'}}>O QUE SÃO ÊNFASES?</DefaultTitle>
                <div style = {{color:'#545454', display:'grid', gridGap:'1.25rem', marginBottom: '1.2vw'}}>
                    <p>
                    <StandardText>
                    As ênfases são focos de estudo dentro de um curso universitário, permitindo que os estudantes explorem a fundo determinadas áreas temáticas relacionadas à sua formação acadêmica. Essa abordagem oferece uma experiência mais personalizada e alinhada aos objetivos de carreira de cada aluno, permitindo-lhes aprofundar seus conhecimentos em áreas específicas de seu campo de estudo.

                    Além disso, as ênfases podem agregar valor ao currículo dos estudantes, destacando suas habilidades e conhecimentos especializados ao procurar oportunidades de estágio, emprego ou pós-graduação. Empresas e instituições acadêmicas muitas vezes valorizam candidatos que demonstram um compromisso sólido e uma expertise particular em um determinado domínio.
                    </StandardText>
                    </p>
                    <p>
                    <StandardText>

                    Cada ênfase é uma oportunidade de aprofundar-se em áreas específicas. Ao escolher uma ênfase, os estudantes abrem portas para uma compreensão mais refinada e especializada, permitindo que moldem sua formação de acordo com suas aspirações profissionais.
                    
                    </StandardText>
                    </p>
                </div>
                </div>
            </Grid> 
        </WhatEnfDiv>
        </Defaultmargin>     
        </Container>
    );
}

export default WhatEnf;