import { Box, Typography, Button } from "@mui/material";
import { useReducer } from "react";
import { IQuestion } from "./types";
import QuestionsContainer from "./QuestionsContainer";
import { formReducer, initialState } from "./reducer";
import NumberInput from "./Inputs/NumberInput";
import TextInput from "./Inputs/TextInput";



const Form = () => {
    const [formState, dispatch] = useReducer(formReducer, initialState);

    const updateQuestion = (questionId: number, field: keyof IQuestion, value: number | string) => {
        dispatch({ type: 'UPDATE_QUESTION', questionId, field, value });
    };

    const addQuestion = (questionId: number) => {
        dispatch({ type: 'ADD_QUESTION', questionId });
    };

    const removeQuestion = (questionId: number) => {
        dispatch({ type: 'REMOVE_QUESTION', questionId });
    };

    const setCurrentQuestion = (currentQuestion: number) => {
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: currentQuestion });
    };

    const setTotalQuestions = (totalQuestions: number) => {
        dispatch({ type: 'SET_TOTAL_QUESTIONS', payload: totalQuestions });
    };

    const addAdditionalComments = (comments: string) => {
        dispatch({ type: 'ADD_ADDITIONAL_COMMENTS', payload: comments });
    };

    return (
        <Box
            sx={{
                bgcolor: '#03B04B',
                width: '100%',
                paddingY: '30px',
                paddingX: { xs: '15px', sm: '30px', md: '40px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: '20px', md: '10%' },
                    width: '100%'

                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        color: 'white'
                    }}
                >
                    Quantas disciplinas você cursou esse semestre?
                </Typography>
                <NumberInput
                    min={1}
                    max={50}
                    defaultValue={1}
                    onChange={(newValue) => {
                        console.log('.')
                        if (newValue === null) return;
                        const newQuestions = newValue - formState.totalQuestions
                        console.log(newQuestions)
                        for (let i = 0; i < Math.abs(newQuestions); i++) {
                            console.log(i)
                            newQuestions > 0 ? addQuestion(formState.totalQuestions + i) : removeQuestion(formState.totalQuestions - 1 - i);
                        }
                        if (formState.currentQuestion + 1 > newValue) setCurrentQuestion(newValue - 1);
                        setTotalQuestions(newValue);
                    }}
                />
            </Box>
            <QuestionsContainer
                setCurrentQuestion={setCurrentQuestion}
                updateQuestion={updateQuestion}
                formState={formState}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    width: { xs: '100%', md: '50%'}

                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        color: 'white'
                    }}
                >
                    Comentários adicionais
                </Typography>
                <TextInput
                    label="Comente outras sugestões ou reclamações gerais, não específicas a um professor"
                    multiline
                    rows={6}
                    value={formState.additionalComments}
                    onChange={addAdditionalComments}
                />
            </Box>
            <Button
                sx={{
                    bgcolor: '#101010',
                    color: 'white',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    height: '50px',
                    width: { xs: '80%', md: '30%'},
                    borderRadius: '8px'
                }}
                onClick={() => {
                    console.log(formState);
                }}
            >
                Enviar
            </Button>

        </Box>
    )
}

export default Form;
