import { Box, Typography, Button } from "@mui/material";
import { useEffect, useReducer, useRef, useState } from "react";
import { IQuestion } from "./types";
import QuestionsContainer from "./QuestionsContainer";
import { formReducer, initialState } from "./reducer";
import NumberInput from "./Inputs/NumberInput";
import MobileNumberInput from "./Inputs/MobileNumberInput";
import TextInput from "./Inputs/TextInput";
import { TAutocompleteOptions } from "./types";
import feedbackProvider from "../../../services/TeacherFeedback/feedback.provider";

const useDebouncedFunction = (func: (...args: any[]) => void, delay: number) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    return (...args: any[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            func(...args);
            timeoutRef.current = null;
        }, delay);
    };
};

const Form = () => {
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const [teachers, setTeachers] = useState<TAutocompleteOptions[]>([]);
    const [courses, setCourses] = useState<TAutocompleteOptions[]>([]);

    const fetchDropdownData = async () => {
        const [teacherResult, courseResult] = await Promise.all([
            feedbackProvider.getTeachers({ pageSize: -1 }),
            feedbackProvider.getCourses({ pageSize: -1 })
        ]);
        if (teacherResult) setTeachers(teacherResult.data.map((teacher) => ({ id: teacher.teacherId, label: teacher.teacherName })));
        if (courseResult) setCourses(courseResult.data.map((course) => ({ id: course.courseId, label: course.courseName, subtitle: course.courseCode })));
        console.log(teacherResult, courseResult);
    }

    useEffect(() => {
        fetchDropdownData();
    }, []);

    const createFeedback = async () => {
        
        for (const question of formState.questions) {
            if (question.teacherId === null || question.subjectId === null) {
                alert('Por favor, preencha todos os campos');
                return;
            }
        }
        for (const question of formState.questions) {
            const response = await feedbackProvider.createFeedback({
                userId: '1',
                teacherId: question.teacherId as string,
                courseId: question.subjectId as string,
                positiveAspects: question.positiveAspects,
                negativeAspects: question.negativeAspects,
                rating: question.rating,
                additionalComments: question.additionalComments
            });
            console.log(response);
        }
    };

    const updateQuestion = (questionId: number, field: keyof IQuestion, value: number | string) => {
        dispatch({ type: 'UPDATE_QUESTION', questionId, field, value });
    };

    const addNQuestions = (n: number) => {
        dispatch({ type: 'ADD_N_QUESTIONS', n });
    };

    const removeNQuestions = (n: number) => {
        dispatch({ type: 'REMOVE_N_QUESTIONS', n });
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

    const changeFunction = (newValue: number | null) => {
        if (newValue === null || newValue == formState.totalQuestions) return;
        const newQuestions = newValue - formState.totalQuestions
        if (newQuestions > 0) addNQuestions(newQuestions);
        else removeNQuestions(newQuestions);
        setTotalQuestions(newValue);
    }

    const debouncedChangeFunction = useDebouncedFunction(changeFunction, 50);

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
                <Box
                sx={{
                    display: {xs: 'none', md: 'flex'}
                }}
                >
                <NumberInput
                    min={1}
                    max={50}
                    defaultValue={1}
                    onChange={changeFunction}
                />
                </Box>
                <Box
                sx={{
                    display: {xs: 'flex', md: 'none'}
                }}
                >
                <MobileNumberInput
                    min={1}
                    max={50}
                    defaultValue={1}
                    onChange={(newValue) => debouncedChangeFunction(newValue)}
                />
                </Box>
                
            </Box>
            <QuestionsContainer
                setCurrentQuestion={setCurrentQuestion}
                updateQuestion={updateQuestion}
                formState={formState}
                teachers={teachers}
                courses={courses}
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
                    createFeedback();
                }}
            >
                Enviar
            </Button>

        </Box>
    )
}

export default Form;
