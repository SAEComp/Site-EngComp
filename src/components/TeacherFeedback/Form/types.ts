export type TAutocompleteOptions = {
    label: string;
    id: number | string;
    subtitle?: string;
};

export interface IQuestion {
    questionId: number;
    teacherId: string | null;
    subjectId: string | null;
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
    teachers: TAutocompleteOptions[];
    courses: TAutocompleteOptions[];
}