import React from "react";
import {Container, ContentSection, TitleCont, TextCont, NumberCont, LineThrough, SocialDiv, TextSocial, ContentSection2, DivApp, UlApp, ImgApp, TextFaded} from "./styles";
import Logo from "../../assets/img/Logo.png"
import Caaso from "../../assets/img/Caaso.png"
import Eesc from "../../assets/img/Eesc.png"
import Icmc from "../../assets/img/Icmc.png"
import Senc from "../../assets/img/Senc.png"
import Suite from "../../assets/img/Suite.png"
import Cartao from "../../assets/img/Cartao.png"
import App1 from "../../assets/img/App1.png"
import App2 from "../../assets/img/App2.png"
import App3 from "../../assets/img/App3.png"
import App4 from "../../assets/img/App4.png"
import Jupiter from "../../assets/img/Jupiter.jpg"
/*import {ReactComponent as CPUSvg} from "../../assets/svg/cpu.svg";*/

type TitleProps = {
    text: string;
    number: string;
}
type SubtitleProps= {
    text: string;
    number: string;
}
const Title = ({text, number}: TitleProps) =>{
    return <div><NumberCont>{number}. </NumberCont><TitleCont>{text}</TitleCont></div>
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
                <Title text = "Bem-vindo à engenharia da computação" number = "1"></Title>
                <Text>A transição do <LineThrough>maternal</LineThrough> ensino médio/cursinho para a universidade é algo que assusta muitos calouros, e é algo bem comum. No entanto, vocês verão que <LineThrough>nunca</LineThrough> em pouco tempo estarão acostumados à vida universitária. O campus de São Carlos é um ambiente agradável e de fácil locomoção. A cidade oferece uma vasta gama de lojas e serviços ao universitário, e o pessoal da universidade é amigável e está sempre disposto a auxiliar o próximo.  Seja lá quais forem suas dúvidas e preocupações, nós da <b>SAEComp</b> estaremos sempre presentes e prontos para auxiliar em qualquer situação. Este manual busca sanar dúvidas frequentes e fornecer dicas úteis aos calouros do curso através de textos informais e objetivos, evitando uma leitura cansativa ou o bombardeamento de informações, então só vai e leia essa budega!  Não se preocupe, bixo/bixete! Sinta-se orgulhoso por ter entrado na USP e aproveite os melhores anos que você terá na sua vida!</Text>
            
                <Title text = "SAEComp" number = "2"></Title>
                <img style = {{ margin: 'auto', display: 'table', width: '380px', marginBottom: '3rem'}}src = {Logo}/>
                <Text>A USP São Carlos oferece atualmente cerca de 20 cursos de graduação e inúmeros de pós-graduação, deixando a tarefa de auxiliar os alunos bem difícil para o <b>CAASO, o Centro Acadêmico Armando de Salles Oliveira. </b> Neste contexto, surgiram as secretarias acadêmicas, pequenos grupos de estudantes que auxiliam um ou alguns cursos de graduação, para facilitar o diálogo entre os estudantes e o centro acadêmico, ajudando na fiscalização e manutenção do alto nível dos cursos desta unidade da USP. A Engenharia de Computação não poderia ficar de fora. Em 2006, surge a <b>SAEComp</b>, a <LineThrough>melhor</LineThrough> mais nova secretaria acadêmica que veio auxiliar a sua vida, bixão. Não se esconda nos livros: venha nos ajudar a manter esse curso como o melhor, participando das festas, palestras, cursos, saraus, campeonatos e é claro, a sua Semana de Recepção. Precisamos de você para tornar nossa atuação verdadeiramente eficaz. Por isso, participe das reuniões semanais da secretaria, fuce em nosso site <SocialDiv target= "_blank " href="https://saecomp.github.io/">saecomp.github.io</SocialDiv> , procure-nos para conversar, tirar dúvidas e o mais importante: opine!</Text>               
                <Text> Já seguiu a SaeComp nas redes sociais? Não perca tempo!</Text>
                <TextSocial> Facebook: </TextSocial> <SocialDiv target = "_blank" href="https://www.facebook.com/saecomp" >@saecomp</SocialDiv><br></br>
                <TextSocial> Instagram: </TextSocial> <SocialDiv target = "_blank" href="https://www.instagram.com/saecomp.ec" >@saecomp.ec</SocialDiv>
    

                <Title number = "3"text = "CAASO"/>
                <img style = {{margin : 'auto', display : 'table', width: '300px', marginBottom: '3rem'}} src = {Caaso}/>
                <Text>O CAASO, <b>Centro Acadêmico Armando de Salles Oliveira</b>, é a entidade representativa de todos os estudantes de graduação do campus da USP de São Carlos. O seu nome é uma homenagem ao governador do Estado de São Paulo que criou a Universidade de São Paulo.É considerado um dos maiores centros acadêmicos da América Latina, temos a difícil tarefa de representar 22 cursos da graduação do campus da USP de São Carlos, organizando reivindicações e lutando por melhorias para todos! Durante seus 66 anos de História, o CAASO fez muito pelos estudantes da USP São Carlos. Desde lutar contra a ditadura militar de 1964, que perseguiu estudantes e professores da USP, até organizar eventos e criar um espaço de convivência e organização para os alunos que é o prédio do CAASO. Atualmente, temas como a permanência estudantil, o apoio à luta dos funcionários por melhores condições de trabalho, defesa dos espaços estudantis, como o palquinho e o Colégio CAASO, a reestruturação financeira e administrativa do CAASO e o combate à liminar que proíbe a realização de eventos no campus têm sido algumas de nossas pautas. Mas não é só isso. Consideramos que é muito importante que os estudantes, de alguma forma, se relacionem mais com a sociedade ao seu redor, o CAASO, além de apoiar e realizar diversos eventos e atividades fora da USP, administra um Colégio de Ensino médio e pré-vestibular, que inicialmente surgiu como um cursinho onde os alunos da USP davam aula e, hoje, tem um prédio próprio com professores, funcionários e diretores contratados.</Text>
            
            </Container>
        </ContentSection>
        
        <ContentSection>
            <Container>
                <Title text = "O curso" number = "4"></Title>
                <Text>O Curso de Engenharia de Computação é sediado pela EESC, juntamente com o ICMC. Ele e um dos poucos cursos interunidades dentro do campus de São Carlos. </Text>
                <Subtitle text = "Escola de Engenharia de São Carlos (EESC)" number = "4.1"></Subtitle>
                <img style = {{margin : 'auto', display : 'table', width: '300px', marginBottom: '3rem'}} src = {Eesc}/>
                <Text>Fundada em 1952, a EESC surgiu como uma alternativa à Escola Politécnica da USP, sendo a unidade responsável por ministrar cursos de engenharia no campus de São Carlos. Situa-se entre as melhores e mais qualificadas instituições de engenharia do Brasil e executa um dos maiores orçamentos destinados a unidades de ensino na USP.</Text>
                <Subtitle text = "Instituto de Ciências Matemáticas e de Computação (ICMC) " number = "4.2"></Subtitle>
                <img style = {{margin : 'auto', display : 'table', width: '300px', marginBottom: '3rem'}} src = {Icmc}/>
                <Text>O ICMC surgiu do antigo Departamento de Matemática da EESC, em 1953. Com o surgimento dos computadores, criou-se o Departamento de Ciências de Computação e Estatística, em 1970, também vinculado a EESC. No ano seguinte, cria-se o Instituto de Ciências Matemáticas de São Carlos, constituindo-se dos dois departamentos citados, agora desvinculados da EESC. Em 1996, então acrescentou-se o nome computação ao Instituto, dando a ele seu nome atual.</Text>
                <Subtitle text = "O Prédio " number = "4.3"></Subtitle>
                <Text>O Prédio da Engenharia de Computação está localizado na distante área 2 do campus de São Carlos. Nele, você encontrará vários laboratórios, a sala das secretárias Shirley e Cris e a sala da SAEComp.</Text>

                <Title text = "SEnC" number = "5"></Title>
                <img style={{margin: 'auto', display: 'table', width:'150px'}} src = {Senc}/>
                <Text>Criada em 2016, a <b>Semana da Engenharia de Computação (SEnC)</b> é um evento organizado pelos alunos de Engenharia de Computação da USP - São Carlos que visa fortalecer a identidade profissional do engenheiro de computação. A grade do evento conta com palestras, workshops, rodas de conversa, feira de mercado e projetos, viagens técnicas e várias outras atividades.A edição de 2020 ocorreu de forma online entre os dias 26 e 30 de outubro. A iniciativa surgiu da necessidade de uma semana acadêmica que representasse por completo o perfil do profissional em engenharia de computação. O principal objetivo do evento foi fortalecer a identidade do engenheiro de computação no mercado e no próprio curso. </Text>
                <TextSocial> Facebook: </TextSocial> <SocialDiv target = "_blank" href= "https://www.facebook.com/senc.usp">@senc.usp</SocialDiv><br></br>
                <TextSocial> Instagram: </TextSocial> <SocialDiv target = "_blank" href= "https://www.instagram.com/senc.usp/">@senc.usp</SocialDiv><br></br>
                <TextSocial> Site: </TextSocial> <SocialDiv target = "_blank" href= "https://senc.icmc.usp.br">senc.icmc.usp.br</SocialDiv><br></br>

                <Title text = "O campus" number = "6"></Title>           
                <Subtitle number = "6.1" text = "Campus 1 e 2"></Subtitle>
                <Text>O campus de São Carlos é dividido em 2 áreas: a central apelidada de “campus 1” e o <LineThrough>novo Iraque</LineThrough> a nova área afastada do centro da cidade apelidada de “campus 2”. Nos seguintes mapas é possível localizar diversos prédios que você passará bastante tempo de sua vida sofrendo.<br></br><br></br> <b>Ao escolher sua moradia, SEMPRE escolha perto do Campus 1. É onde está localizado grande parte do comércio, bancos, hospitais e todo o resto! Como você poderá observar nos mapas o Campus 2 é um pouco deserto. A USP disponibiliza ônibus gratuito para o campus 2. </b></Text>
                
                <Subtitle number="6.2" text="Bandejão"></Subtitle>
                <Text>Bandejão! Nosso querido restaurante universitário, de onde você tirará forças para se manter em pé durante o dia inteiro de aula. Por apenas R$2,00 você poderá se servir de arroz, feijão, saladas diversas, pão, uma mistura, uma segunda opção de mistura e <a style = {{textDecoration: 'none', color: '#212529'}} target="_blank" href="http://www.staggeringbeauty.com/">sobremesa</a>. No Campus 1, fica dentro do CAASO, e no campus 2, é localizado perto da biblioteca.<br></br> Mais informações no <SocialDiv  target="_blank" href="http://www.puspsc.usp.br/cardapio/">site da prefeitura do campus de São Carlos</SocialDiv>.</Text>
                <Subtitle number = "6.3" text = "Ônibus C2"></Subtitle>
                <Text>Como as aulas do nosso curso são ministradas no campus 2, a USP oferece um ônibus gratuito para o transporte dos estudantes entre os campus. <b>Fique atento aos horários, que mudam de tempos em tempos!</b> O tempo de transporte é de aproximadamente 10 minutos. <br></br><SocialDiv target= "_blank" href="http://www.puspsc.usp.br/horario-de-onibus-areas-1-e-2/">Os horários estão no site do campus</SocialDiv>.</Text>

                <Title text = "Matrícula" number = "7"></Title>
                <Text>Todos os convocados precisam realizar a matrícula virtual e a presencial para garantir sua vaga na USP. Elas ocorrem em momentos diferentes. <br></br>A matrícula virtual será realizada no Sistema Júpiter da USP, haverá um tutorial para esclarecer esse processo. Nesta etapa, o candidato deve preencher os formulários e enviar os documentos pedidos em formato digital. <br></br>A matrícula presencial é realizada nas unidades que oferecem o curso. Os dias e horários serão enviados por e-mail a todos ingressantes conforme consta no Manual do Candidato.<br></br> Confira instruções da Pró-Reitoria de Graduação com o passo-a-passo para realizar o envio dos documentos e preenchimento dos seus dados na etapa virtual. <SocialDiv target="_blank" href="https://jornal.usp.br/universidade/matricula-2020/">Confira aqui vídeos explicativos sobre a etapa virtual.</SocialDiv>.</Text>           
                
                <Title text = "Graduação" number = "8"></Title>
                <Text>Todos os convocados precisam realizar a matrícula virtual e a presencial para garantir sua vaga na USP. Elas ocorrem em momentos diferentes. <br></br>A matrícula virtual será realizada no Sistema Júpiter da USP, haverá um tutorial para esclarecer esse processo. Nesta etapa, o candidato deve preencher os formulários e enviar os documentos pedidos em formato digital. <br></br>A matrícula presencial é realizada nas unidades que oferecem o curso. Os dias e horários serão enviados por e-mail a todos ingressantes conforme consta no Manual do Candidato.<br></br> Confira instruções da Pró-Reitoria de Graduação com o passo-a-passo para realizar o envio dos documentos e preenchimento dos seus dados na etapa virtual. <SocialDiv target="_blank" href="https://jornal.usp.br/universidade/matricula-2020/">Confira aqui vídeos explicativos sobre a etapa virtual.</SocialDiv>.</Text>           
                <Subtitle number = "8.1" text = "Grade curricular"></Subtitle>
                <Text>Você pode encontrar toda a grade de disciplinas da Eng. Comp. no sistema  <SocialDiv target="_blank" href="https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=97&codcur=97001&codhab=0&tipo=N">Júpiter Web</SocialDiv>.</Text>
                <Subtitle number = "8.2" text = "O que são créditos?"></Subtitle>
                <Text>Não bixo, a USP não está te dando dinheiro. Créditos são o número de horas-aula (50 minutos) que uma disciplina ocupa por semana. Por exemplo, as aulas de Física I te tomarão 5 horas-aula por semana. Se você consultar o JupiterWeb poderá ver quanto isso resulta em horas totais cumpridas em um semestre. O sistema JupiterWeb é uma ferramenta interessante para ajudar sua organização acadêmica e será apresentada a frente.  </Text>
                <Subtitle number = "8.3" text = "O que é requisito?"></Subtitle>
                <Text>Como o próprio nome já diz, ele consiste de uma disciplina que deve ter sido cursada anteriormente para que uma outra possa ser. As disciplinas vão formando assim uma hierarquia. <br></br>Antes de cursar uma disciplina é importante verificar quais são os requisitos dela, pois desse jeito dá para se ter uma boa idéia de como as matérias dela vão fluir. Por exemplo, uma disciplina que tenha o requisito SMA0301 (Cálculo I) vai utilizar o conhecimento dessa disciplina em algum momento. <br></br><br></br><b>Requisito fraco:</b> Para se cursar Física 2 (2º semestre), por exemplo, é preciso quebrar o requisito fraco em Física 1, o que significa que você deve ter cursado Física 1 e ter tido média igual ou maior que 3,0 e freqüência maior ou superior a 70%. <br></br><b>Requisito forte:</b> Requer que o aluno tenha sido aprovado nas disciplinas. Felizmente não temos nenhuma disciplina obrigatória que exija requisito forte. <br></br><br></br><b>Um lembrete, mais importante que cuidar das notas é cuidar da freqüência. Caso você não complete 70% de presença em uma disciplina, não importa qual seja sua nota, você será reprovado sem quebrar o pré! Por isso tome cuidado e vá às aulas!</b></Text>
            
            </Container>
        </ContentSection>

        <ContentSection>
            <Container>
                <Title text = "Número USP" number = "9"></Title>
                <Text>O <b>Número USP</b> ou NUSP é sua identificação na USP, como se fosse o RG. Esse número é usado em tudo e em algumas semanas você vai decorar. Com o Número USP você deve criar sua <b>SENHA ÚNICA</b>.<br></br>Acesse o endereço <SocialDiv target="_blank" href="http://id.usp.br">http://id.usp.br</SocialDiv>, em <b>Primeiro Acesso</b> informe seu Número USP e e-mail alternativo e siga os passos de validação para criar sua senha única. <SocialDiv target="_blank" href="https://www.youtube.com/watch?v=Izv-qS1cQbs&feature=youtu.be">Vídeo com instruções AQUI</SocialDiv><br></br>O Número USP e Senha Única são as portas de acesso para diversos serviços da Universidade, como a rede sem fio Eduroam, VPN , consulta a bases bibliográficas e o sistema acadêmico, Júpiter, etc...</Text>

                <Title text = "E-mail USP" number = "10"></Title>
                <Text>O principal canal de comunicação entre aluno e USP, Professores e Graduação. Você recebe todas as informações no e-mail USP. É SUPER indicado adicionar sua conta no celular para ver todos os dias o e-mail. Recebemos muitas coisas todos os dias, muito mesmo (até nota de falecimento), estão para não perder e-mails importantes, tenha hábito de visualizá-lo todos os dias. O e-mail USP tem os mecanismos iguais ao Gmail (G-Suite USP). É fácil configurar no seu celular.<br></br><br></br>Para criar seu e-mail: Entre em <SocialDiv target="_blank" href="http://id.usp.br">http://id.usp.br</SocialDiv> utilize o botão <b>Entrar</b> com sua senha única para criar seu e-mail @usp.br.<br></br><br></br><b>Cuidado ao criar o e-mail USP. Depois de criado, não é possível alterar o nome e esse e-mail será usado em documentos oficiais da USP. NADA de gatinho2000@usp.br! É comum os alunos usarem o nome e um sobrenome. Ex: perryoliveira@usp.br </b><br></br><br></br>Após a criação do e-mail, o acesso deve ser realizado através do endereço <SocialDiv target="_blank" href="http://email.usp.br">http://email.usp.br</SocialDiv>.<br></br></Text>

                <Title text = "JúpiterWEB" number = "11"></Title>
                <img style = {{margin: 'auto', display: 'table', width: '300px', marginBottom: '3rem'}} src = {Jupiter}></img>               
                <Text>Então bixo, para evitar filas intermináveis e desperdício de papel, a USP criou um sistema para ajudar (e aliviar o serviço de graduação) professores, alunos e departamentos. O nome desse sistema é <SocialDiv target="_blank" href="https://uspdigital.usp.br/jupiterweb">JúpiterWeb</SocialDiv>, no caso da graduação (existem outros, mas para você ainda não são relevantes).<br></br>Quando você fez sua matrícula, além do papel que vendia um pedaço da sua alma para a USP, você colocou CPF, RG, quantos rins você ainda tem e outras milhares de informações. Todas elas serão colocadas no, comumente chamado, Júpiter para que você e professores possam ter contato com elas. Você encontrará todo o seu histórico acadêmico, notas, presença, e outras informações importantes sobre seu currículo acadêmico. Também é no Júpiter que você encontra a emissão de documentos, atestado de matrícula, declarações, etc...<br></br>E no Júpiter também que você fará sua matrícula a partir do segundo semestre e também de onde alguns professores tiram informações para criação de sistemas de submissão online. <br></br>Desde já é bom avisar, TODA a USP faz matrícula no mesmo período, no mesmo sistema, então...Não se estresse com a lentidão do sistema nessa época. O JúpiterWeb é bem útil e é bom que você o frequente regularmente. Muitas das inscrições que dependem de rendimento acadêmico vão pedir uma cópia impressa do Júpiter (outras, mais rigorosas pedem um histórico emitido pela Secretaria de Graduação).<br></br></Text>
                
                <Title text = "G-Suite USP" number = "12"></Title>
                <img style = {{margin: 'auto', display: 'table', width: '300px', marginBottom: '3rem'}} src = {Suite}></img>               
                <Text>A USP e a Google firmaram um termo de cooperação que possibilita a alunos, docentes e servidores técnicos e administrativos da Universidade a utilização dos recursos que compõem a ferramenta G Suite for Education. Tais recursos incluem o uso <b>ILIMITADO</b> dos serviços de e-mail, com controle de spam, calendário, contato, comunicação digital, armazenamento e compartilhamento de documentos.<br></br>Para os membros da comunidade universitária, a cooperação possibilita armazenamento <b>ILIMITADO</b> do Google Drive e administração do <b>e-mail USP</b> por mecanismos iguais ao Gmail, customizados para o ambiente da Universidade.<br></br><br></br>Vale lembrar, que mesmo com armazenamento <a style={{textDecoration: 'none', color: '#212529'}} target="_blank" href="https://apod.nasa.gov/apod/astropix.html">ilimitado</a> <b>NUNCA</b> use para pirataria e arquivos pessoais. G-Suite é para assuntos acadêmicos!</Text>
            
            </Container>
        </ContentSection>

        <ContentSection2>
            <Container>
            
            <Title text = "Cartão USP" number = "13"></Title>
            <img style = {{margin: 'auto', display: 'table', width: '300px', marginBottom: '3rem'}} src = {Cartao}></img>
            <Text>O cartão USP é o cartão de identificação do aluno USP. Para solicitar o cartão USP definitivo, acesse o sistema Júpiter Web, clique em <b>Cartões USP</b> no menu lateral esquerdo, e depois clique em <b>Nova solicitação</b>. Na solicitação do primeiro cartão, o único motivo disponível é <b>Novo Cartão</b> e basta salvar para que seu pedido seja enviado para aprovação do Serviço de Graduação de sua Unidade.<br></br><br></br>Peça-o assim que possível, demora para chegar e a segunda remessa dos pedidos demora mais ainda. Com o cartão USP você consegue pegar livros nas bibliotecas USP, frequentar o bandejão, ter acesso aos prédios e laboratórios, pagar meia no cinema, dentre outros benefícios. Cuide bem dele, pois ele te acompanhará por pelo menos 5 anos de graduação!</Text>

            <Title text = "Aplicativos USP" number = "14"></Title>
            <Text>Estes são os aplicativos oficiais criados pela USP para informar, proteger e facilitar a vida da comunidade universitária. <br></br>Confira na <SocialDiv href="https://itunes.apple.com/br/developer/universidade-de-sao-paulo/id552358548" target="_blank">App Store</SocialDiv> e <SocialDiv target="_blank" href="https://play.google.com/store/apps/developer?id=Universidade%20de%20S%C3%A3o%20Paulo&hl=pt_BR">Google Play</SocialDiv>.</Text>
                <UlApp>
                    <li><DivApp><ImgApp style = {{marginBottom: '.5rem'}} src = {App1}></ImgApp><h4 style = {{fontSize: '1.5rem', marginBottom : '.5rem'}}>e-Card USP</h4><TextFaded>Pode ser utilizado no bandejão ou biblioteca.</TextFaded></DivApp></li>
                    <li><DivApp><ImgApp style = {{marginBottom: '.5rem'}} src = {App2}></ImgApp><h4 style = {{fontSize: '1.5rem', marginBottom : '.5rem'}}>Cardápio USP</h4><TextFaded>Consultar o cardápio do bandeco</TextFaded></DivApp></li>
                    <li><DivApp><ImgApp style = {{marginBottom: '.5rem'}} src = {App3}></ImgApp><h4 style = {{fontSize: '1.5rem', marginBottom : '.5rem'}}>Biblioteca USP</h4><TextFaded>Consulta, reserva e renovação do acervo da USP.</TextFaded></DivApp></li>
                    <li><DivApp><ImgApp style = {{marginBottom: '.5rem'}} src = {App4}></ImgApp><h4 style = {{fontSize: '1.5rem', marginBottom : '.5rem'}}>Campus USP</h4><TextFaded>Central da Guarda Universitária</TextFaded></DivApp></li>
                </UlApp>

            <Title text = "Conectividade" number = "15"></Title>
            <Text>A USP oferece aos alunos serviço gratuito de internet em todo o Campus. Acesse <SocialDiv  target="_blank" href="http://informatica.eesc.usp.br/index.php?option=com_content&view=article&id=10&Itemid=118#senha-de-acesso">AQUI</SocialDiv> e saiba como ter acesso à internet nos seus dispositivos. Existem dois tipos de conexão wireless:<br></br><br></br><b>USPnet:</b> Para usa-la basta fazer um cadastro de uma senha no site <SocialDiv  target="_blank" href="https://www.semfio.usp.br/">https://www.semfio.usp.br/</SocialDiv> (a senha para acessar a USPnet não é a senha única USP) e usuário o número USP com o sufixo @usp.br (exemplo: 123456@usp.br).<br></br><br></br><b>Eduoram:</b> O Eduroam é um serviço de acesso sem fio seguro, desenvolvido para a comunidade internacional de educação e pesquisa. A iniciativa permite que os estudantes, os pesquisadores e as equipes das instituições participantes obtenham conectividade à Internet, através de conexão sem fio (wi-fi), dentro de seus campi e em qualquer localidade que ofereça essa facilidade como provedora de serviço. Para usa-la você utiliza como usuário o número USP com o sufixo @usp.br (exemplo: 123456@usp.br) e a senha única USP.</Text>

            </Container>
        </ContentSection2>

        <ContentSection>
            <Container>
                <Title text = "São Carlos, ou Sanca (para os íntimos)" number = "16"></Title>
                <Text>São Carlos está localizada no centro do Estado de São Paulo. Sobre a cidade, é importante falarmos sobre a amplitude térmica. Quando é verão, é muito quente. Quando é inverno, é muito frio. Então é bom ter todos os tipos de roupa no seu guarda-roupa, porque serão necessárias! Além disso, as temperaturas costumam variar muito ao longo do dia, portanto, por mais que esteja sol pela manhã, leve um casaco!<br></br><br></br><b>São Carlos pode ter todos os tipos de clima em um mesmo dia. Chuva, sol, vento, neve, furacões e outras forças da natureza no mesmo dia. Por isso tenha um guarda-chuva na bolsa e ande com um casaco. Dica de mãe! </b><br></br><br></br>São Carlos é muito conhecida pelo título de <b>Capital da Tecnologia</b>. Isso aconteceu devido à presença de suas universidades e centros de pesquisa. Nós, na USP, e a UFSCar marcamos a cidade por nossas graduações de ensino gratuito e de alta qualidade. E por causa desse reconhecimento, surgiu uma das maiores rivalidades entre estudantes no Brasil!<br></br>A cidade tem o ambiente ideal para os universitários. Com facilidades de moradia (muitas repúblicas, apartamentos e casas, com o apoio das imobiliárias aos estudantes), locomoção (a cidade não é tão grande e tudo que o estudante precisa está a seu alcance, inclusive a própria universidade), alimentação (diversas opções de alimentação 24hrs por dia, além das restaurantes universitários), entre outras, a cidade está pronta para receber os calouros perdidos que acabaram de sair da casa dos pais.<br></br><br></br><SocialDiv target="_blank" href="https://www.youtube.com/watch?v=o0egsw0WL9k">Conheça mais sobre São Carlos!</SocialDiv></Text>

                <Title text ="Dicas" number = "17"></Title>
                <Text><b>1. </b>Se precisar de atendimento médico, vá até o final da Carlos Botelho (lado onde está a USP) que tem a Santa Casa, ou também tem o posto no centro do nosso Campus I. E, é claro, a Unimed, na Alexandrina, meio quarteirão abaixo da Carlos Botelho.<br></br><br></br><b>2. </b>Os veteranos, quando terminam algumas disciplinas e quando não precisam mais de alguns livros/apostilas, fazem doações para a BiblioteCAASO (apostilas de laboratório de física sempre estão lá!). Você também pode encontrar anotações de aula e provas resolvidas.<br></br><br></br><b>3. </b>Se tiver dúvida sobre alguma coisa do curso, procure um veterano ou algum professor para saná-la. <b>Lembre-se, seus veteranos geralmente são uma versão mais velha e mais sábia de você.</b><br></br><br></br><b>4. </b>No Campus I, evite o Bandejão em torno do meio-dia (até mais ou menos meio dia e meia), pois a fila é gigantesca e fica difícil de achar lugar para sentar.<br></br><br></br><b>5. </b>Cuidado para não perder o ônibus para o Campus I quando estiver comendo no Bandejão do Campus II.<br></br><br></br><b>6. </b>Você vai ter uma cota de impressão. Imprima só o que for REALMENTE necessário. Caso precise imprimir slides, tire figuras pesadas e cores fortes, para evitar gasto de toner e também imprima 6 slides por página (dá para ler bem e economiza toner). Ajude a cuidar dos recursos da sua Universidade.<br></br><br></br><b>7. </b>A internet na USP é <SocialDiv target="_blank" href="img/internet.png">muito boa</SocialDiv>, não estrague isso!<b> Lembrem, baixar torrent é como cagar, você só faz fora de casa se estiver muito desesperado.</b> É sério, se não pararem com o torrent, decisões extremas serão tomadas.<br></br><br></br><b>8. </b>No nosso curso o conteúdo é muito denso, os professores podem ser um pouco superficiais às vezes. Se não entender algo, não hesite em perguntar, se as dúvidas se acumularem, pode ser tarde demais. Aprenda muito bem as matérias básicas como Cálculo, GA, EDO, etc.<br></br><br></br><b>9. </b>Não deixe de conhecer a SAEComp. Estamos no Campus 2 no prédio Eng. Comp.<br></br><br></br><b>10. </b>Visite o site da Secretaria Acadêmica! <SocialDiv target="_blank" href="https://saecomp.github.io">saecomp.github.io</SocialDiv></Text>
            </Container>
        </ContentSection>
    </div>
    );
}

export default TopicosManual;