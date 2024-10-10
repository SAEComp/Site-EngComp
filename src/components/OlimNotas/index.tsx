import React from "react";
import { OlimNotasDiv, Grid, Container, TableDiv } from "./styles";
import { StandardText } from '../../pages/Default/styles';
import OrangePinkButton from "../Button";
import { DefaultTitle, Defaultmargin } from "../../pages/Default/styles";
import myImage from '../../assets/img/computerman.png';

const OlimNotas: React.FC = () => {
    return (
        <Container>
            <Defaultmargin>
                <OlimNotasDiv>

                    <Grid>
                        <div className="explanation">
                            <DefaultTitle style={{ color: '#003CC5' }}>NOTAS DE CORTE - OLIMPÍADAS</DefaultTitle>
                            <div style={{ color: '#545454', display: 'grid', gridGap: '1.25rem', marginBottom: '1.2vw' }}>
                                <p>
                                    <StandardText>
                                    Confira abaixo as notas de corte pelo processo de ​competições olímpicas
                                    </StandardText>
                                </p>
                            </div>
                            <TableDiv>
                                <table style={{ width: '50%',height:'20%', borderCollapse: 'collapse', marginBottom: '1.2vw'}}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'30%', backgroundColor:'purple', color:'white'}}>Ano</th>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'70%', backgroundColor:'purple', color:'white' }}>Pontuação Mínima</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '8px', border: '1px solid black' }}>2024</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center'}}>2,5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TableDiv>

                            <div>
                                <a href="https://www.fuvest.br/wp-content/uploads/olimpiadas2024_edital_retificado_2023-11-21.pdf" target="_blank">
                                    <OrangePinkButton text="SAIBA MAIS" />
                                </a>
                            </div>
                        </div>
                        <img src={myImage} alt="Descrição da imagem" style={{ width: '65%', height: 'auto', marginLeft:'15em' }} />
                    </Grid>
                </OlimNotasDiv>
            </Defaultmargin>
        </Container>
    );
}
export default OlimNotas;
