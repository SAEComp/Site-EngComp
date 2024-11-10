import { ComponentType } from "react";

interface IQuestionContainer<ComponentProps> {
    label: string;
    component: ComponentType<ComponentProps>;
    componentProps: ComponentProps;
    sx?: React.CSSProperties;
}


const QuestionComponent = <ComponentProps extends {}>({
    label,
    component: Component,
    componentProps,
    sx
}: IQuestionContainer<ComponentProps>) => {
    return (
        <div
            className="bg-[#F1F1F1] rounded-3xl flex flex-col gap-5 p-5"
            style={sx}
        >
            <span
                className="font-inter"
            >
                {label}
            </span>
            <Component {...componentProps} />

        </div>
    )
}

export default QuestionComponent;
