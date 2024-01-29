import React from "react";
//import{View, Image, Style} from "react-native"
import CardVendas from "../../components/CardVendas";
import { Defaultmargin } from "../../pages/Default/styles";
import { VendasDiv } from "./styles";
import { Button, Card, Carousel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../assets/img/sueter_branco_frente.png"
import img2 from "../../assets/img/sueter_preto_frente.png"
import img3 from "../../assets/img/moletom_preto_1 frente.png"
import img4 from "../../assets/img/moletom_cinza_frente.png"
import img5 from "../../assets/img/moletom_preto_2 frente.png"


const ProdutosSaecomp = (props: any) => {
    const link = "https://api.whatsapp.com/send?phone=559991439702&text=Oii,%20gostaria%20de%20comprar%20um%20dos%20produtos%20da%20SAEComp!!";
    return (


        <Carousel variant="dark" indicators={false}>
            <Carousel.Item>
                <Container>
                    <VendasDiv>
                        <Row>
                            <Col md={4}>
                                <Card className="mb-3" style={{ width: '100%', maxWidth: '16rem' }}>
                                    <Card.Img variant="top" src={img1} />
                                    <Card.Body>
                                        <Card.Title>Sueter Branco</Card.Title>
                                        <Card.Text style={{ fontStyle: "bold", fontSize: "1.3rem" }}>
                                            R$ 199,99
                                        </Card.Text>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <Button variant="success" size="lg">
                                                Comprar
                                            </Button>
                                        </a>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-3" style={{ width: '100%', maxWidth: '16rem' }}>
                                    <Card.Img variant="top" src={img2} />
                                    <Card.Body>
                                        <Card.Title>Sueter Preto</Card.Title>
                                        <Card.Text style={{ fontStyle: "bold", fontSize: "1.3rem" }}>
                                            R$ 199,99
                                        </Card.Text>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <Button variant="success" size="lg">
                                                Comprar
                                            </Button>
                                        </a>                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-3" style={{ width: '100%', maxWidth: '16rem' }}>
                                    <Card.Img variant="top" src={img3} />
                                    <Card.Body>
                                        <Card.Title>Moletom P/B</Card.Title>
                                        <Card.Text style={{ fontStyle: "bold", fontSize: "1.3rem" }}>
                                            R$ 199,99
                                        </Card.Text>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <Button variant="success" size="lg">
                                                Comprar
                                            </Button>
                                        </a>                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </VendasDiv>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container>
                    <VendasDiv>
                        <Row>
                            <Col md={4}>
                                <Card className="mb-3" style={{ width: '100%', maxWidth: '16rem' }}>
                                    <Card.Img variant="top" src={img4} />
                                    <Card.Body>
                                        <Card.Title>Moletom Cinza</Card.Title>
                                        <Card.Text style={{ fontStyle: "bold", fontSize: "1.3rem" }}>
                                            R$ 199,99
                                        </Card.Text>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <Button variant="success" size="lg">
                                                Comprar
                                            </Button>
                                        </a>                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-3" style={{ width: '100%', maxWidth: '16rem' }}>
                                    <Card.Img variant="top" src={img5} />
                                    <Card.Body>
                                        <Card.Title>Moletom Preto/Verde</Card.Title>
                                        <Card.Text style={{ fontStyle: "bold", fontSize: "1.3rem" }}>
                                            R$ 199,99
                                        </Card.Text>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <Button variant="success" size="lg">
                                                Comprar
                                            </Button>
                                        </a>                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-3" style={{ width: '100%', maxWidth: '16rem' }}>
                                    <Card.Img variant="top" src={img3} />
                                    <Card.Body>
                                        <Card.Title>Moletom P/B</Card.Title>
                                        <Card.Text style={{ fontStyle: "bold", fontSize: "1.3rem" }}>
                                            R$ 199,99
                                        </Card.Text>
                                        <a href={link} target="_blank" rel="noopener noreferrer" >
                                            <Button variant="success" size="lg">
                                                Comprar
                                            </Button>
                                        </a>                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </VendasDiv>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProdutosSaecomp;