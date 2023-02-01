import React from "react";
import { ContentSection, Container, TitleCont, SubtitleCont, DivFlex, DivFlex2, TextCont, ImgPerry, LinkSocial, TextSocial } from "./styles";
import perry from "../../assets/img/perry.png"

const Text = ({children}: {children: React.ReactNode})=>{
    return <TextCont>{children}</TextCont>
}

const Perry:React.FC = () => {
    return(
        <div>
            <ContentSection>
                <Container>
                    <TitleCont>Perry Oliveira, o ornitorrinco</TitleCont>
                    <SubtitleCont>Mascote da Eng. Comp.</SubtitleCont>
                    <DivFlex>
                        <ImgPerry src = {perry}></ImgPerry>
                        <DivFlex2>
                            <Text>Mais fiel membro da SAEComp e mascote da Eng. Comp. Mas por que ornitorrinco?<br></br>O ornitorrinco é um animal extremamente exótico que apresenta características que lembram aves e répteis, mas na verdade é um mamífero. Como o ornitorrinco, alunos de Engenharia de Computação sofrem com sua identidade de não saber se é um Cientista da Computação #xupabcc ou Engenheiro Elétrico. <br></br>Mas não fique confuso, pois um <LinkSocial target= "_blank " href="https://jornal.usp.br/universidade/estude-na-usp/engenharia-da-computacao-um-hibrido-entre-duas-areas-de-interesse/"> aluno Eng. Comp. é um híbrido entre duas áreas de grande interesse </LinkSocial> e com grandes potenciais. E nada melhor que o Perry para representar nosso curso!<br></br><br></br>Siga o Perry nas redes socias:<br></br></Text>
                            <TextSocial> Facebook: </TextSocial> <LinkSocial target = "_blank" href="https://www.facebook.com/perry.oliveira.ec" >@perry.oliveira.ec</LinkSocial><br></br>
                        <   TextSocial> Instagram: </TextSocial> <LinkSocial target = "_blank" href="https://www.instagram.com/perry.oliveira/" >@perry.oliveira</LinkSocial>
                        </DivFlex2>
                    </DivFlex>
                </Container>
            </ContentSection>
        </div>
    )
}
export default Perry;