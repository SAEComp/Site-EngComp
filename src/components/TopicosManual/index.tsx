import React from "react";
import {Container, ContentSection, TitleCont, TextCont, NumberCont, LineThrough, SocialDiv } from "./styles";
import Logo from "../../assets/img/Logo.png"
import Caaso from "../../assets/img/Caaso.png"
import Eesc from "../../assets/img/Eesc.png"
import Icmc from "../../assets/img/Icmc.png"
/*import {ReactComponent as CPUSvg} from "../../assets/svg/cpu.svg";*/

type TitleProps = {
    text: string;
    numb: string;
}
type SubtitleProps= {
    text: string;
    number: string;
}
const Title = ({text, numb}: TitleProps) =>{
    return <div><NumberCont>{numb}. </NumberCont><TitleCont>{text}</TitleCont></div>
}

const Text = ({children}: {children: React.ReactNode})=>{
    return <TextCont>{children}</TextCont>
}

const Subtitle = ({text, number}: SubtitleProps)=>{
    return <div><h2><b>{number}. </b>{text}</h2></div>
}   

const TopicosManual:React.FC = ()=>{
    return(
    <div>
        <ContentSection>
            <Container>
                <Title text = "Bem-vindo à engenharia da computação" numb = "1"></Title>
                <Text>A transição do <LineThrough>maternal</LineThrough> ensino médio/cursinho para a universidade é algo que assusta muitos calouros, e é algo bem comum. No entanto, vocês verão que <LineThrough>nunca</LineThrough> em pouco tempo estarão acostumados à vida universitária. O campus de São Carlos é um ambiente agradável e de fácil locomoção. A cidade oferece uma vasta gama de lojas e serviços ao universitário, e o pessoal da universidade é amigável e está sempre disposto a auxiliar o próximo.  Seja lá quais forem suas dúvidas e preocupações, nós da <b>SAEComp</b> estaremos sempre presentes e prontos para auxiliar em qualquer situação. Este manual busca sanar dúvidas frequentes e fornecer dicas úteis aos calouros do curso através de textos informais e objetivos, evitando uma leitura cansativa ou o bombardeamento de informações, então só vai e leia essa budega!  Não se preocupe, bixo/bixete! Sinta-se orgulhoso por ter entrado na USP e aproveite os melhores anos que você terá na sua vida!</Text>
            
                <Title text = "SAEComp" numb = "2"></Title>
                <img style = {{ margin: 'auto', display: 'table', width: '380px', marginBottom: '3rem'}}src = {Logo}/>
                <Text>A USP São Carlos oferece atualmente cerca de 20 cursos de graduação e inúmeros de pós-graduação, deixando a tarefa de auxiliar os alunos bem difícil para o <b>CAASO, o Centro Acadêmico Armando de Salles Oliveira. </b> Neste contexto, surgiram as secretarias acadêmicas, pequenos grupos de estudantes que auxiliam um ou alguns cursos de graduação, para facilitar o diálogo entre os estudantes e o centro acadêmico, ajudando na fiscalização e manutenção do alto nível dos cursos desta unidade da USP. A Engenharia de Computação não poderia ficar de fora. Em 2006, surge a <b>SAEComp</b>, a <LineThrough>melhor</LineThrough> mais nova secretaria acadêmica que veio auxiliar a sua vida, bixão. Não se esconda nos livros: venha nos ajudar a manter esse curso como o melhor, participando das festas, palestras, cursos, saraus, campeonatos e é claro, a sua Semana de Recepção. Precisamos de você para tornar nossa atuação verdadeiramente eficaz. Por isso, participe das reuniões semanais da secretaria, fuce em nosso site <SocialDiv target= "_blank " href="saecomp.github.io">saecomp.github.io</SocialDiv> , procure-nos para conversar, tirar dúvidas e o mais importante: opine!</Text>               
                <Text> Já seguiu a SaeComp nas redes sociais? Não perca tempo!</Text>
                <b className = "textSocial"> Facebook: </b> <SocialDiv target = "_blank" href="https://www.facebook.com/saecomp" >@saecomp</SocialDiv><br></br>
                <b className = "textSocial"> Instagram: </b> <SocialDiv target = "_blank" href="https://www.instagram.com/saecomp.ec" >@saecomp.ec</SocialDiv>
    

                <Title numb = "3"text = "CAASO"/>
                <img style = {{margin : 'auto', display : 'table', width: '300px', marginBottom: '3rem'}} src = {Caaso}/>
                <Text>O CAASO, <b>Centro Acadêmico Armando de Salles Oliveira</b>, é a entidade representativa de todos os estudantes de graduação do campus da USP de São Carlos. O seu nome é uma homenagem ao governador do Estado de São Paulo que criou a Universidade de São Paulo.É considerado um dos maiores centros acadêmicos da América Latina, temos a difícil tarefa de representar 22 cursos da graduação do campus da USP de São Carlos, organizando reivindicações e lutando por melhorias para todos! Durante seus 66 anos de História, o CAASO fez muito pelos estudantes da USP São Carlos. Desde lutar contra a ditadura militar de 1964, que perseguiu estudantes e professores da USP, até organizar eventos e criar um espaço de convivência e organização para os alunos que é o prédio do CAASO. Atualmente, temas como a permanência estudantil, o apoio à luta dos funcionários por melhores condições de trabalho, defesa dos espaços estudantis, como o palquinho e o Colégio CAASO, a reestruturação financeira e administrativa do CAASO e o combate à liminar que proíbe a realização de eventos no campus têm sido algumas de nossas pautas. Mas não é só isso. Consideramos que é muito importante que os estudantes, de alguma forma, se relacionem mais com a sociedade ao seu redor, o CAASO, além de apoiar e realizar diversos eventos e atividades fora da USP, administra um Colégio de Ensino médio e pré-vestibular, que inicialmente surgiu como um cursinho onde os alunos da USP davam aula e, hoje, tem um prédio próprio com professores, funcionários e diretores contratados.</Text>
            
            </Container>
        </ContentSection>
        
        <ContentSection>
            <Container>
                <Title text = "O curso" numb = "4"></Title>
                <Text>O Curso de Engenharia de Computação é sediado pela EESC, juntamente com o ICMC. Ele e um dos poucos cursos interunidades dentro do campus de São Carlos. </Text>
                <Subtitle text = "Escola de Engenharia de São Carlos (EESC)" number = "4.1"></Subtitle>
                <img style = {{margin : 'auto', display : 'table', width: '300px', marginBottom: '3rem'}} src = {Eesc}/>
                <Text>Fundada em 1952, a EESC surgiu como uma alternativa à Escola Politécnica da USP, sendo a unidade responsável por ministrar cursos de engenharia no campus de São Carlos. Situa-se entre as melhores e mais qualificadas instituições de engenharia do Brasil e executa um dos maiores orçamentos destinados a unidades de ensino na USP.</Text>
                <Subtitle text = "Instituto de Ciências Matemáticas e de Computação (ICMC) " number = "4.2"></Subtitle>
                <img style = {{margin : 'auto', display : 'table', width: '300px', marginBottom: '3rem'}} src = {Icmc}/>
                <Text>O ICMC surgiu do antigo Departamento de Matemática da EESC, em 1953. Com o surgimento dos computadores, criou-se o Departamento de Ciências de Computação e Estatística, em 1970, também vinculado a EESC. No ano seguinte, cria-se o Instituto de Ciências Matemáticas de São Carlos, constituindo-se dos dois departamentos citados, agora desvinculados da EESC. Em 1996, então acrescentou-se o nome computação ao Instituto, dando a ele seu nome atual.</Text>
            
            </Container>
        </ContentSection>
    </div>
    );
}

export default TopicosManual;