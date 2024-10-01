import { Box, Typography } from "@mui/material";
import Form from "../../components/TeacherFeedback/Form/Form";
import NavBar from "../../components/TeacherFeedback/NavBar/NavBar";
import Footer from "../../components/TeacherFeedback/NavBar/Footer";

const TeacherFeedback = () => {

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                fontFamily: 'Inter'
            }}
        >
            
           
            <NavBar/>
            <Box
                sx={{
                    paddingTop: '5px'
                }}
            >
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    paddingX: '5%',
                    marginY: '20px'
                }}
                >
                    <Typography
                        sx={{
                            fontSize: '2rem',
                            fontWeight: 600,
                            fontFamily: 'Inter'

                        }}
                    >
                        Avaliação de professores
                    </Typography>
                    <Typography
                    sx={{
                        fontFamily: 'Inter',
                        color: '#828282',
                        fontWeight: 300,
                        fontSize: '0.95rem',
                    }}
                    >
                        Todo semestre, a SAEComp realiza a Avaliação de Professores, com o intuito de fiscalizar e fomentar uma maior comunicação dos discentes com a coordenação e a Secretaria.
                        Para isso, avalie os professores e exponha pontos positivos e negativos de conviver com o professor na sala de aula, e dê uma nota final a cada um de 0 a 10. Os professores mais bem avaliados receberão um certificado pelo bom desempenho. Pegaremos o feedback escrito para dar um repasse para os professores.
                    </Typography>
                </Box>
                <Form/>
            </Box>
            <Footer/>
        </Box>
    )
}

export default TeacherFeedback;
