import React from "react";
import { EnemNotasDiv, Grid, Container, TableDiv } from "./styles";
import { StandardText } from '../../pages/Default/styles';
import OrangePinkButton from "../Button";
import { DefaultTitle, Defaultmargin } from "../../pages/Default/styles";
import myImage from '../../assets/img/boypointing.png';

const EnemNotas: React.FC = () => {
    return (
        <Container>
            <Defaultmargin>
                <EnemNotasDiv>

                    <Grid>
                    <img src={myImage} alt="Descrição da imagem" style={{ width: '65%', height: 'auto', marginRight:'15em'}} />
                        <div className="explanation">
                            <DefaultTitle style={{ color: 'aqua', textShadow:'2px 2px 5px black' }}>NOTAS DE CORTE - ENEM USP</DefaultTitle>
                            <div style={{ color: '#545454', display: 'grid', gridGap: '1.25rem', marginBottom: '1.2vw' }}>
                                <p>
                                    <StandardText style={{color:'white', textShadow:'2px 2px 1px black', backgroundColor:'rgb(23, 162, 162)', padding:'7px', borderRadius:'10px'}}>
                                    Confira agora as notas de corte do ENEM USP
                                    </StandardText>
                                </p>
                            </div>
                            <TableDiv>
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.2vw'}}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'10%', backgroundColor:'aqua' }}>Ano</th>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'18%', backgroundColor:'aqua' }}>AC</th>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'18%', backgroundColor:'aqua' }}>EP-L1</th>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'18%', backgroundColor:'aqua' }}>PPI-L2</th>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'18%', backgroundColor:'aqua' }}>EP-L3</th>
                                            <th style={{ padding: '8px', border: '1px solid black', width:'18%', backgroundColor:'aqua' }}>PPI-L4</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '8px', border: '1px solid black', backgroundColor:'white' }}>2024</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white'}}>842,31</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white' }}>807,43</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white' }}>775,02</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white' }}>837,57</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white' }}>782,16</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '8px', border: '1px solid black', backgroundColor:'white' }}>2023</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white' }}>830,75</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white' }}>771,85</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white' }}>697,09</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white' }}>797,73</td>
                                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center', backgroundColor:'white' }}>744,75</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TableDiv>

                            <div>
                                <a href="https://www.fuvest.br/wp-content/uploads/enem_usp_2024_notas_minimas_classificacao_aprovado_chamada_1.pdf" target="_blank">
                                    <OrangePinkButton text="SAIBA MAIS" />
                                </a>
                            </div>
                        </div>

                    </Grid>
                </EnemNotasDiv>
            </Defaultmargin>
        </Container>
    );
}
export default EnemNotas;
