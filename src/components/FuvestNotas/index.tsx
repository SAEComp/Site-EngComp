import React from "react";
import { FuvestNotasDiv, Grid, Container, TableDiv } from "./styles";
import { StandardText } from '../../pages/Default/styles';
import OrangePinkButton from "../Button";
import { DefaultTitle, Defaultmargin } from "../../pages/Default/styles";
import myImage from '../../assets/img/computergirl.png';

const FuvestNotas: React.FC = () => {
    return (
        <Container>
            <Defaultmargin>
                <FuvestNotasDiv>

                    <Grid>
                        <div className="explanation">
                            <DefaultTitle style={{ color: '#003CC5' }}>NOTAS DE CORTE - FUVEST</DefaultTitle>
                            <div style={{ color: '#545454', display: 'grid', gridGap: '1.25rem', marginBottom: '1.2vw' }}>
                                <p>
                                    <StandardText>
                                        Confira as notas de corte da Fundação ​Universitaria para o Vestibular (FUVEST)
                                    </StandardText>
                                </p>
                            </div>
                            <TableDiv>
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.2vw'}}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'10%', backgroundColor:'rgb(213, 53, 80)' }}>Ano</th>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'30%', backgroundColor:'rgb(213, 53, 80)' }}>Ampla Concorrência</th>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'30%', backgroundColor:'rgb(213, 53, 80)' }}>Escola Pública</th>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'30%', backgroundColor:'rgb(213, 53, 80)' }}>PPI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '8px', border: '1px solid black' }}>2024</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center'}}>65</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>47</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>27</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '8px', border: '1px solid black' }}>2023</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>65</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>46</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>27</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '8px', border: '1px solid black' }}>2022</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>62</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>46</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>28</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TableDiv>

                            <div>
                                <a href="https://acervo.fuvest.br/?t=vestibular" target="_blank">
                                    <OrangePinkButton text="SAIBA MAIS" />
                                </a>
                            </div>
                        </div>
                        <img src={myImage} alt="Descrição da imagem" style={{ width: '65%', height: 'auto', marginLeft:'15em' }} />
                    </Grid>
                </FuvestNotasDiv>
            </Defaultmargin>
        </Container>
    );
}
export default FuvestNotas;
