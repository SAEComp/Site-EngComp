
interface ICounterProps {
    setCurrentQuestion: (currentQuestion: number) => void;
    totalQuestions: number;
    currentQuestion: number;
}

const Arrow = (
    <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 14L0.5 27.8564L0.5 0.143594L26 14Z" fill="#D9D9D9" />
    </svg>
)

const Counter = ({ setCurrentQuestion, totalQuestions, currentQuestion }: ICounterProps) => {
    return (
        <div
            className="bg-[#03B04B] h-12 w-full md:w-1/2 lg:w-1/3 rounded-3xl flex justify-center items-center px-5"
        >
            <span
                className="font-inter font-normal text-white grow pl-1"
            >
                Formulário
            </span>
            <button
                className="bg-transparent text-white rounded-[10px] min-w-auto transform scale-[0.9] rotate-180 disabled:opacity-50"
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
                {Arrow}
            </button>

            <p className="font-inter font-normal text-white mx-[8px]">
                {currentQuestion + 1}/{totalQuestions}
            </p>

            <button
                className="bg-transparent text-white rounded-[10px] min-w-auto transform scale-[0.9] disabled:opacity-50"
                disabled={currentQuestion + 1 === totalQuestions}
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
                {Arrow}
            </button>

        </div>
    )
}

export default Counter;