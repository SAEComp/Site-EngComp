import { IForm, IQuestion } from "./types";


type Action =
    | { type: 'SET_CURRENT_QUESTION'; payload: number }
    | { type: 'SET_TOTAL_QUESTIONS'; payload: number }
    | { type: 'UPDATE_QUESTION'; questionId: number; field: keyof IQuestion; value: any }
    | { type: 'ADD_QUESTION'; questionId: number }
    | { type: 'ADD_N_QUESTIONS'; n: number }
    | { type: 'REMOVE_QUESTION'; questionId: number }
    | { type: 'REMOVE_N_QUESTIONS'; n: number }
    | { type: 'ADD_ADDITIONAL_COMMENTS'; payload: string }
    | { type: 'RESET_FORM' };

export const questionInitialState: IQuestion = {
    questionId: 0,
    teacherId: null,
    subjectId: null,
    positiveAspects: '',
    negativeAspects: '',
    rating: 0,
    additionalComments: '',
}

export const initialState: IForm = {
    currentQuestion: 0,
    totalQuestions: 1,
    questions: [questionInitialState],
    additionalComments: '',
};

export const formReducer = (state: IForm, action: Action): IForm => {
    switch (action.type) {
        case 'SET_CURRENT_QUESTION':
            return {
                ...state,
                currentQuestion: action.payload,
            };

        case 'SET_TOTAL_QUESTIONS':
            return {
                ...state,
                totalQuestions: action.payload,
            };

        case 'UPDATE_QUESTION':
            return {
                ...state,
                questions: state.questions.map(question =>
                    question.questionId === action.questionId
                        ? { ...question, [action.field]: action.value }
                        : question
                ),
            };
        case 'ADD_QUESTION':
            const newQuestion = {
                ...questionInitialState,
                questionId: action.questionId
            };
            return {
                ...state,
                questions: [
                    ...state.questions,
                    newQuestion
                ]
            };
        case 'ADD_N_QUESTIONS':
            let newQuestions = [];
            for (let i = 0; i < action.n; i++) {
                newQuestions.push({
                    ...questionInitialState,
                    questionId: state.totalQuestions + i
                });
            }
            return {
                ...state,
                questions: [
                    ...state.questions,
                    ...newQuestions
                ]
            };

        case 'REMOVE_QUESTION':
            return {
                ...state,
                questions: state.questions.filter(question =>
                    question.questionId !== action.questionId
                ),
            };

        case 'REMOVE_N_QUESTIONS':
            return {
                ...state,
                questions: state.questions.slice(0, action.n)
            };

        case 'ADD_ADDITIONAL_COMMENTS':
            return {
                ...state,
                additionalComments: action.payload,
            };

        case 'RESET_FORM':
            return initialState;

        default:
            return state;
    }
}