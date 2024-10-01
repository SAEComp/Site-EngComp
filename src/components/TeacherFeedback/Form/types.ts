export type TAutocompleteOptions = {
    label: string;
    id: number;
    subtitle?: string;
};

export interface IQuestion {
    questionId: number;
    teacherId: number | null;
    subjectId: number | null;
    positiveAspects: string;
    negativeAspects: string;
    rating: number;
    additionalComments: string;
}



export interface IForm {
    currentQuestion: number;
    totalQuestions: number;
    questions: IQuestion[];
    additionalComments: string;
}

export interface IQuestionProps {
    setCurrentQuestion: (currentQuestion: number) => void;
    updateQuestion: (questionId: number, field: keyof IQuestion, value: any) => void;
    formState: IForm;
}