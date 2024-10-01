import { Box } from "@mui/material";
import QuestionComponent from "./QuestionComponent";
import DropDown from "./Inputs/DropDown";
import TextInput from "./Inputs/TextInput";
import SliderInput from "./Inputs/SliderInput";
import { disciplinas, docentes } from "./mock";
import { IQuestionProps } from "./types";


interface IQuestion extends Omit<IQuestionProps, 'setCurrentQuestion'> {
    questionIndex: number;
}

const Questions = ({ updateQuestion, formState, questionIndex }: IQuestion) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    gap: { xs: '20px', md: '40px' },
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <QuestionComponent
                    label="Nome do Docente:"
                    component={DropDown}
                    componentProps={{
                        options: docentes,
                        label: "Sua resposta",
                        search: true,
                        value: docentes.find((obj) => obj.id === formState.questions[questionIndex].teacherId) ?? null,
                        onChange: (newValue) => {
                            updateQuestion(questionIndex, 'teacherId', newValue?.id ?? null);
                        }
                    }}
                    sx={{
                        flexGrow: '1'
                    }}
                />
                <QuestionComponent
                    label="Nome e/ou Código da Disciplina"
                    component={DropDown}
                    componentProps={{
                        options: disciplinas,
                        label: "Sua resposta",
                        search: true,
                        value: disciplinas.find((obj) => obj.id === formState.questions[questionIndex].subjectId) ?? null,
                        onChange: (newValue) => {
                            updateQuestion(questionIndex, 'subjectId', newValue?.id ?? null);
                        }
                    }}
                    sx={{
                        flexGrow: '2'
                    }}
                />
            </Box>
            <QuestionComponent
                label="Quais foram os pontos positivos do professor nesse semestre?"
                component={TextInput}
                componentProps={{
                    multiline: true,
                    rows: 4,
                    label: 'Sua resposta',
                    value: formState.questions[questionIndex].positiveAspects,
                    onChange: (newValue) => {
                        updateQuestion(questionIndex, 'positiveAspects', newValue);
                    }
                }}
            />
            <QuestionComponent
                label="Quais foram os pontos negativos do professor nesse semestre?"
                component={TextInput}
                componentProps={{
                    multiline: true,
                    rows: 4,
                    label: 'Sua resposta',
                    value: formState.questions[questionIndex].negativeAspects,
                    onChange: (newValue) => {
                        updateQuestion(questionIndex, 'negativeAspects', newValue);
                    }
                }}
            />
            <QuestionComponent
                label="Nota geral que você daria ao professor nesse semestre:"
                component={SliderInput}
                componentProps={{
                    value: formState.questions[questionIndex].rating,
                    setValue: (newValue) => {
                        updateQuestion(questionIndex, 'rating', newValue);
                    }
                }}
            />
            <QuestionComponent
                label="Algum comentário extra ou dicas sobre o professor e a disciplina que você gostaria de deixar pras próximas turmas?
                    (Escolheremos algumas respostas pra divulgar para uso dos alunos que terão aulas da disciplina/com o professor nos semestres futuros. Sua resposta SEMPRE será anônima);"
                component={TextInput}
                componentProps={{
                    multiline: true,
                    rows: 4,
                    label: 'Sua resposta',
                    value: formState.questions[questionIndex].additionalComments,
                    onChange: (newValue) => {
                        updateQuestion(questionIndex, 'additionalComments', newValue);
                    }
                }}
            />
        </Box>
    )
}

export default Questions;
