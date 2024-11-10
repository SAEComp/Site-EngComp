import { IFeedbacksResponse, IPagination } from "../../../interfaces/TeacherFeedback/feedback.interface";


interface ICard {
    data: IPagination<IFeedbacksResponse> | null;
    setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({ data, setShowCard }: ICard) => {
    return (
        <div 
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20"
        >
            <div
                className="bg-white w-full md:w-1/2 rounded-md p-8"
            >
                <button
                    onClick={() => setShowCard(false)}
                >fechar</button>
                <div>
                    {JSON.stringify(data, null, 2)}
                </div>
            </div>
        </div>
    )
}


export default Card;