import React from "react";
import { WhatIsDiv, Grid, Container, } from "./styles";
import {StandardText} from '../../pages/Default/styles'
import {ReactComponent as CPUSvg} from "../../assets/svg/cpu.svg";
import OrangePinkButton from "../Button";
import { DefaultTitle, Defaultmargin } from "../../pages/Default/styles";

const WhatIs:React.FC = ()=>{
    return(
        <Container>
        <Defaultmargin>
        <WhatIsDiv>
            
            <Grid>
                <div className="explanation">
                    <DefaultTitle style={{color: '#003CC5'}}>O QUE É A ENGENHARIA DE COMPUTAÇÃO?</DefaultTitle>
                    <div style = {{color:'#545454', display:'grid', gridGap:'1.25rem', marginBottom: '1.2vw'}}>
                        <p>
                            <StandardText>
                                Com este curso você se tornará um engenheiro capaz de projetar e desenvolver soluções computacionais complexas, incluindo o planejamento e construção de computadores, periféricos e sistemas que realizem a integração entre hardware e software.
                            </StandardText>
                        </p>
                        <p>
                            <StandardText>
                                Além disso, o profissional também encontra um bom mercado para atuar em campos como automação industrial e robótica, fabricação de hardware, suporte até mesmo em marketing e vendas, para a comercialização de equipamentos de alta tecnologia.
                            </StandardText>
                        </p>
                        <p>
                            <StandardText>
                                No caso da USP de São Carlos, o curso é uma parceria entre a Escola de Engenharia de São Carlos (EESC) e o Instituto de Ciências Matemáticas e de Computação (ICMC), com duração de cinco anos. 
                            </StandardText>
                        </p>
                    </div>
                    <div> 
                        <a href="https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=97&codcur=97001&codhab=0&tipo=N"><OrangePinkButton text="VEJA A GRADE DO CURSO"/> </a>
                    </div>
                </div>
                <div className="LogoDiv">
                    <CPUSvg  className="svg-logo"/>
                </div>
            </Grid> 
        </WhatIsDiv>
        </Defaultmargin>
        </Container>
        
    );
}

export default WhatIs;