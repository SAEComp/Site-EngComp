import { useEffect, useReducer, useState } from "react";
import { IQuestion } from "./types";
import QuestionsContainer from "./QuestionsContainer";
import { formReducer, initialState } from "./reducer";
import NumberInput from "../../Inputs/NumberInput";
import TextInput from "../../Inputs/TextInput";
import { TAutocompleteOptions } from "./types";
import feedbackProvider from "../../../services/TeacherFeedback/feedback.provider";




const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
  
      const handleMediaChange = () => setIsMobile(mediaQuery.matches);
  
      handleMediaChange();
      mediaQuery.addEventListener('change', handleMediaChange);
  
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);
  
    return isMobile;
  }

const Form = () => {
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const [teachers, setTeachers] = useState<TAutocompleteOptions[]>([]);
    const [courses, setCourses] = useState<TAutocompleteOptions[]>([]);
    const isMobile = useIsMobile();

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

    return (
        <div
        className="flex flex-col justify-center items-center gap-10 w-full bg-[#03B04B] py-8 sm:px-8 md:px-10 px-2"

        >
            <div
                className="flex flex-col justify-center items-center w-full gap-4 md:flex-row md:gap-[10%]"
            >
                <span
                    className="font-inter text-white"
                >
                    Quantas disciplinas você cursou esse semestre?
                </span>
                <NumberInput
                    min={1}
                    max={50}
                    defaultValue={1}
                    onChange={changeFunction}
                    mobile={isMobile}
                />
            </div>
            <QuestionsContainer
                setCurrentQuestion={setCurrentQuestion}
                updateQuestion={updateQuestion}
                formState={formState}
                teachers={teachers}
                courses={courses}
            />
            <div
                className="flex flex-col gap-4 p-3 w-full md:w-1/2"
            >
                <span
                    className="font-inter text-white"
                >
                    Comentários adicionais
                </span>
                <TextInput
                    label="Comente outras sugestões ou reclamações gerais, não específicas a um professor"
                    multiline
                    rows={6}
                    value={formState.additionalComments}
                    onChange={addAdditionalComments}
                />
            </div>
            <button
                className="bg-[#101010] text-white font-inter font-medium h-12 w-[80%] md:w-[30%] rounded-lg"
                onClick={() => {
                    console.log(formState);
                    createFeedback();
                }}
            >
                Enviar
            </button>
        </div>
    )
}

export default Form;
