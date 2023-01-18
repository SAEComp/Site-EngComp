import React from "react";
import {Container, ContentSection, TitleCont, TextCont, NumberCont, LineThrough, SocialDiv } from "./styles";
import Logo from "../../assets/img/Logo.png"
/*import {ReactComponent as CPUSvg} from "../../assets/svg/cpu.svg";*/

type TitleProps = {
    text: string;
    numb: string;
}
const Title = ({text, numb}: TitleProps) =>{
    return <section><NumberCont>{numb}. </NumberCont><TitleCont>{text}</TitleCont></section>
}

const Text = ({children}: {children: React.ReactNode})=>{
    return <TextCont>{children}</TextCont>
}

const TopicosManual:React.FC = ()=>{
    return(
        <ContentSection>
            <Container>
                <Title text = "Bem-vindo à engenharia da computação" numb = "1"></Title>
                <Text>A transição do <LineThrough>maternal</LineThrough> ensino médio/cursinho para a universidade é algo que assusta muitos calouros, e é algo bem comum. No entanto, vocês verão que <LineThrough>nunca</LineThrough> em pouco tempo estarão acostumados à vida universitária. O campus de São Carlos é um ambiente agradável e de fácil locomoção. A cidade oferece uma vasta gama de lojas e serviços ao universitário, e o pessoal da universidade é amigável e está sempre disposto a auxiliar o próximo.  Seja lá quais forem suas dúvidas e preocupações, nós da <b>SAEComp</b> estaremos sempre presentes e prontos para auxiliar em qualquer situação. Este manual busca sanar dúvidas frequentes e fornecer dicas úteis aos calouros do curso através de textos informais e objetivos, evitando uma leitura cansativa ou o bombardeamento de informações, então só vai e leia essa budega!  Não se preocupe, bixo/bixete! Sinta-se orgulhoso por ter entrado na USP e aproveite os melhores anos que você terá na sua vida!</Text>
            
                <Title text = "SAEComp" numb = "2"></Title>
                <img style = {{ margin: 'auto', display: 'table', width: '380px', marginBottom: '3rem'}}src = {Logo}/>
                <Text>A USP São Carlos oferece atualmente cerca de 20 cursos de graduação e inúmeros de pós-graduação, deixando a tarefa de auxiliar os alunos bem difícil para o <b>CAASO, o Centro Acadêmico Armando de Salles Oliveira. </b> Neste contexto, surgiram as secretarias acadêmicas, pequenos grupos de estudantes que auxiliam um ou alguns cursos de graduação, para facilitar o diálogo entre os estudantes e o centro acadêmico, ajudando na fiscalização e manutenção do alto nível dos cursos desta unidade da USP. A Engenharia de Computação não poderia ficar de fora. Em 2006, surge a <b>SAEComp</b>, a <LineThrough>melhor</LineThrough> mais nova secretaria acadêmica que veio auxiliar a sua vida, bixão. Não se esconda nos livros: venha nos ajudar a manter esse curso como o melhor, participando das festas, palestras, cursos, saraus, campeonatos e é claro, a sua Semana de Recepção. Precisamos de você para tornar nossa atuação verdadeiramente eficaz. Por isso, participe das reuniões semanais da secretaria, fuce em nosso site <SocialDiv target= "_blank " href="saecomp.github.io">saecomp.github.io</SocialDiv> , procure-nos para conversar, tirar dúvidas e o mais importante: opine!</Text>
            
                            
            </Container>
        </ContentSection>
    );
}

export default TopicosManual;