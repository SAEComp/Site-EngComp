import QuestionComponent from "./QuestionComponent";
// import DropDown from "./Inputs/DropDown";
import TextInput from "../../Inputs/TextInput";
import SliderInput from "../../Inputs/SliderInput";
import { disciplinas, docentes } from "./mock";
import { IQuestionProps } from "./types";
import DropDown from "../../Inputs/DropDown";


interface IQuestion extends Omit<IQuestionProps, 'setCurrentQuestion'> {
    questionIndex: number;
}

const Questions = ({ updateQuestion, formState, questionIndex, teachers, courses }: IQuestion) => {
    return (
        <div
            className="flex flex-col gap-5"
        >
            <div
                className="flex flex-col w-full gap-5 md:gap-10 md:flex-row"
            >
                <QuestionComponent
                    label="Nome do Docente:"
                    component={DropDown}
                    componentProps={{
                        options: teachers,
                        placeholder: "Sua resposta",
                        searchable: true,
                        value: teachers.find((obj) => obj.id === formState.questions[questionIndex].teacherId) ?? null,
                        onChange: (newValue) => {
                            console.log(newValue)
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
                        options: courses,
                        placeholder: "Sua resposta",
                        searchable: true,
                        showSubtitle: true,
                        value: courses.find((obj) => obj.id === formState.questions[questionIndex].subjectId) ?? null,
                        searchFilter: (search, option) => {
                            const normalizedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                            return (
                                option.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedSearch.toLowerCase()) || 
                                option.subtitle?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedSearch.toLowerCase())
                            ) ?? false;
                        },
                        onChange: (newValue) => {
                            updateQuestion(questionIndex, 'subjectId', newValue?.id ?? null);
                        }
                    }}
                    sx={{
                        flexGrow: '2'
                    }}
                />
            </div>
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
        </div>
    )
}

export default Questions;
