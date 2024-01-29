import { Carousel } from "react-bootstrap";
import { CarouselHover } from "./styles";
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { DefaultTitle, StandardText } from "../../pages/Default/styles";



export default function Carrossel(){
  const [open, setOpen] = useState(false);


    return (
        <div>
            <Carousel
              onClick={() => setOpen(!open)}
              onMouseEnter={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              onMouseLeave={()=> setOpen(!open)}
            >
        
              <Carousel.Item>
                <CarouselHover>
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: open ? 'brightness(5%)' : "brightness(30%)",
                      transition: "1s",
                      width: "auto"
                    }}
                  />
                  
                </picture>
                </CarouselHover>
            
                <Carousel.Caption 
                  style={{
                    position: "absolute",
                    top: open ? "5%" : "45%",
                    transition: "top 0.5s ease",
                    fontSize: "18px",
                    margin: "0 auto",
                    overflow: "scroll", 
                    maxHeight: "87%"
                }}
                >
                  <DefaultTitle>SISTEMAS COMPUTACIONAIS AVANÇADOS</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <p>
                      <StandardText>
                      O Certificado de Estudos Especiais em Sistemas Computacionais Avançados será conferido aos alunos que completarem um mínimo de 5 disciplinas do grupo a seguir:<br/><br/>
                      SSC0743 - Sistemas Operacionais II<br/>
                      SSC0900 - Engenharia de Segurança<br/>
                      SSC0952 - Internet das Coisas<br/>
                      SSC0152 - Administração e Gerenciamento de Redes<br/>
                      SSC0744 - Computação Distribuída<br/>
                      SSC0745 - Sistemas Computacionais em Tempo Real<br/>
                      SSC0748 - Redes Móveis<br/>
                      SSC0901 - Laboratório de Engenharia de Segurança<br/>
                      SSC0958 - Criptomoedas e Blockchain<br/>
                      SSC0158 - Computação em Nuvem e Arquitetura Orientadas a Serviços<br/>
                      SSC0959 - Teste e Inspeção de Software<br/> 
                        
                      </StandardText>
                      </p>
                    </div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>
      
              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: open ? 'brightness(5%)' : "brightness(30%)",
                      transition: "1s",
                      width: "auto",
                      
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption
                  style={{
                    position: "absolute",
                    top: open ? "5%" : "45%",
                    transition: "top 0.5s ease",
                    fontSize: "18px",
                    margin: "0 auto",
                    overflow: "scroll",
                    maxHeight: "87%"
                  }}
                >
                  <DefaultTitle>SISTEMAS EMBARCADOS</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                        <StandardText>
                        Será conferido o Certificado de Estudos Especiais em Sistemas Embarcados ao aluno que cursar 6 (seis) disciplinas, sendo 3 (três) disciplinas do Grupo 1 e 3 (três) disciplinas do Grupo 2. <br/><br/>
                        Disciplinas do Grupo 1: <br/><br/>
                        SEL0632 - Linguagens de Descrição de Hardware <br/>
                        SEL0629 - Aplicações de Microprocessadores I <br/>
                        SEL0631 - Processadores Digitais de Sinais e Aplicações<br/> 
                        SEL0338 – Tópicos Especiais em Sistemas Digitais <br/>
                        SEL0630 - Projetos em Sistemas Embarcados <br/>
                        SEL0373 - Projeto em Internet das Coisas <br/><br/>
                        Disciplinas do Grupo 2:  <br/><br/>
                        SSC0711 - Co-projeto de Hardware/Software para Sistemas Embarcados <br/>
                        SSC0740 - Sistemas Embarcados <br/>
                        SSC0710 - Projeto e Implementação de Sistemas Embarcados <br/>
                        SSC0720 - Engenharia de Software para Sistemas Embarcados <br/>
                        SSC0745 - Sistemas Computacionais de Tempo Real <br/>
                        SSC0959 - Teste e Inspeção de Software <br/>
                        SSC0741 - Projeto e Implementação de Sistemas Embarcados<br/> 
                        SSC0746 - Sistemas Computacionais Tolerantes a Faltas <br/>

                      </StandardText>
                      </p>
                    </div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>
            
              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: open ? 'brightness(5%)' : "brightness(30%)",
                      transition: "1s",
                      width: "auto"
                  
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption 
                  style={{
                    position: "absolute",
                    top: open ? "5%" : "45%",
                    transition: "top 0.5s ease",
                    fontSize: "18px",
                    margin: "0 auto",
                    overflow: "scroll",
                    maxHeight: "87%"
                  }}
                >
                  <DefaultTitle>SISTEMAS DE COMUNICAÇÃO E COMPUTAÇÃO MÓVEL</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                        <StandardText>

                        Será conferido o Certificado de Estudos Especiais em Sistemas de Comunicação e Computação Móvel ao aluno que cursar um mínimo de 5 (cinco) disciplinas do grupo. <br/><br/>
                        Disciplinas: <br/><br/>
                        SEL0344 - Antenas <br/>
                        SEL0366 - Comunicações Ópticas <br/> 
                        SEL0361 - Laboratório de Telecomunicações <br/>
                        SEL0347 - Comunicação Digital II <br/>
                        SEL0369 - Microondas <br/>
                        SEL0370 - Redes Fixas de Comunicação <br/>
                        SEL0623 - Serviços de Telecomunicações e Redes Faixa Larga <br/>
                        SEL0371 - Sistemas de Comunicação <br/>
                        SEL0386 - Redes Móveis de Comunicação <br/>
                        SEL0387 - Computação Móvel <br/>   
                      </StandardText>
                      </p>
                      </div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: open ? 'brightness(5%)' : "brightness(30%)",
                      transition: "1s",
                      width: "auto"
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption 
                  style={{
                    position: "absolute",
                    top: open ? "5%" : "45%",
                    transition: "top 0.5s ease",
                    fontSize: "18px",
                    margin: "0 auto",
                    overflow: "scroll",
                    maxHeight: "87%"
                  }}
                >
                  <DefaultTitle>ROBÓTICA</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                      <StandardText>
                        
                      Será conferido o Certificado de Estudos Especiais em Robótica ao aluno que cursar 6 (seis) disciplinas, sendo 3 (três) disciplinas do Grupo 1 e 3 (três) disciplinas do Grupo 2. <br/><br/>
                      Disciplinas do Grupo 1: <br/><br/>
                      SEL0406 - Automação <br/>
                      SEL0431 - Laboratório de Controle de Processos Industriais <br/>
                      SEL0328 - Laboratório de Controle de Sistemas. <br/>
                      SEL0339 - Visão Computacional <br/>
                      SEL0635 - Visão Computacional em Robótica <br/> 
                      SEL0633 - Controle de Robôs Manipuladores <br/>
                      SEL0634 - Laboratório de Robôs Manipuladores <br/><br/>
                      Disciplinas do Grupo 2: <br/><br/>
                      SCC0651 - Processamento de Imagens<br/> 
                      SSC0712 - Programação de Robôs Móveis <br/>
                      SSC0714 - Robôs Móveis Autônomos <br/>
                      SSC0740 - Sistemas Embarcados <br/>
                      SCC0273 - Robôs Móveis Inteligentes<br/> 
                      SSC0713 - Sistemas Evolutivos Aplicados à Robótica <br/>
                      SSC0715 - Sensores Inteligentes<br/>
                                            
                      </StandardText>
                      </p>
                      </div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: open ? 'brightness(5%)' : "brightness(30%)",
                      transition: "1s",
                      width: "auto"
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption 
                  style={{
                    position: "absolute",
                    top: open ? "5%" : "45%",
                    transition: "top 0.5s ease",
                    fontSize: "18px",
                    margin: "0 auto",
                    maxHeight: "87%",
                    overflow: "scroll",
                  }}
                >
                  <DefaultTitle>CIÊNCIA DE DADOS</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                        <StandardText>

                        Será conferido o Certificado de Estudos Especiais em Ciência de Dados ao aluno que cursar 6 (seis) disciplinas, sendo 3 (três) disciplinas do Grupo 1 e 3 (três) disciplinas do Grupo 2. <br/><br/>
                        Disciplinas do Grupo 1: <br/><br/>
                        SCC0270 - Redes Neurais e Aprendizado Profundo <br/>
                        SCC0276 – Aprendizado de Máquina <br/>
                        SCC0244 – Mineração a Partir de Grandes Bases de Dados<br/> 
                        SCC0252 – Visualização Computacional <br/>
                        SCC0275 - Introdução à Ciência de Dados <br/><br/>
                        Disciplinas do Grupo 2: <br/><br/>
                        SME0806 – Estatística Computacional<br/> 
                        SME0808 – Séries Temporais e Aprendizado Dinâmico<br/> 
                        SME0822 – Análise Multivariada e Aprendizado Não-Supervisionado <br/>
                        SME0823 – Modelos de Regressão e Aprendizado Supervisionado II <br/>
                        SME0130 – Redes Complexas <br/>
                        SME0878 – Mineração Estatística de Dados.<br/> 
                        
                      
                      </StandardText>
                      </p></div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: open ? 'brightness(5%)' : "brightness(30%)",
                      transition: "1s",
                      width: "auto"
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption 
                  style={{
                    position: "absolute",
                    top: open ? "5%" : "45%",
                    transition: "top 0.5s ease",
                    fontSize: "18px",
                    margin: "0 auto",
                    maxHeight: "87%",
                    overflow: "scroll",
                  }}
                >
                  <DefaultTitle>ENGENHARIA DE SOFTWARE</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                        <StandardText>

                        Será conferido o Certificado de Estudos Especiais em Engenharia de Software ao aluno que cursar um mínimo de 5 (cinco) disciplinas do grupo. <br/><br/>
                        Disciplinas:<br/><br/>
                        SSC0622 - Sistemas de Informação ou SSC0120 Sistemas de Informação<br/>
                        SSC0531 - Gestão de Sistemas de Informação<br/>
                        SSC0570 - Empreendedorismo<br/>
                        SSC0723 - Sistemas Colaborativos: Fundamentos e Aplicações<br/>
                        SSC0725 - Arquitetura de Software<br/>
                        SSC0726 - Reuso de Software<br/>
                        SSC0961 - Desenvolvimento Web e Mobile<br/>
                        SSC0959 - Teste e Inspeção de Software<br/>
                        
                      
                      </StandardText>
                      </p></div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <CarouselHover>
                  <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://wallpapercave.com/uwp/uwp4232623.png"
                  />
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/uwp/uwp4232585.jpeg"
                    alt="First slide"
                    style={{
                      filter: open ? 'brightness(5%)' : "brightness(30%)",
                      transition: "1s",
                      width: "auto"
                    }}
                  />
                </picture>
                </CarouselHover>

                <Carousel.Caption 
                  style={{
                    position: "absolute",
                    top: open ? "5%" : "45%",
                    transition: "top 0.5s ease",
                    fontSize: "18px",
                    margin: "0 auto",
                    maxHeight: "87%",
                    overflow: "scroll",
                  }}
                >
                  <DefaultTitle>ENGENHARIA BIOMÉDICA</DefaultTitle>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                    <p>
                        <StandardText>

                        Será conferido o Certificado de Estudos Especiais em Engenharia Biomédica ao aluno que obter aprovação nas “Disciplinas Obrigatórias” e em 12 créditos-aula em “Disciplinas de Livre Escolha" abaixo: <br/><br/>
                        Disciplinas Obrigatórias:<br/><br/>
                        1800118 - Introdução à Engenharia Biomédica<br/>
                        1800119 - Anatomia e Fisiologia para o Engenheiro Biomédico<br/>
                        SMM0307 - Biomateriais<br/>
                        SEM0589 - Biomecânica e Controle Motor<br/>
                        SEL0396 - Introdução à Instrumentação Eletrônica Biomédica<br/><br/>
                        Disciplinas de Livre Escolha:<br/><br/>
                        SMM0193 - Engenharia e Ciência dos Materiais I<br/>
                        SEL0397 - Princípios Físicos de Formação de Imagens Médicas<br/>
                        7600067 - Processamento e Análise de Imagens *<br/>
                        SEL0388 - Bioengenharia Ocular I<br/>
                        SEL0434 - Imagens Radiológicas Digitais<br/>
                        SEL0339 - Introdução à Visão Computacional<br/>
                        SEL0356 - Aplicação de Processamento Digital de Sinais<br/>
                        SEL0429 - Bioengenharia Ocular II<br/>
                        SEM0587 - Fundamentos de Manufatura Aditiva<br/>
                        SEL0395 - Introdução à Engenharia de Reabilitação<br/>
                        SEL0398 - Projetos em Avaliação de Imagens Médicas Reabilitação<br/>
                        SEL0449 - Processamento Digital de Imagens Médicas<br/>
                        SEL0633 - Controle de Robôs Manipuladores<br/>
                        * Possibilidade de equivalência com SCC0651 - Processamento de Imagens<br/>
                        
                      
                      </StandardText>
                      </p></div>
                  </Collapse>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
        </div>
    )

}