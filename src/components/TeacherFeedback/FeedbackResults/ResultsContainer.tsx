import { useState, useEffect } from "react";
import { ITeacher, IFilterData, IFeedbacksResponse, IPagination } from "../../../interfaces/TeacherFeedback/feedback.interface";
import feedbackProvider from "../../../services/TeacherFeedback/feedback.provider";
import arrow from "../../../assets/svg/arrow.svg";
import Card from "./Card"
import Filter from "./Filter"
import Spinner from "../../Spinner/Spinner";

const ResultsContainer = () => {
    const [teachers, setTeachers] = useState<IPagination<ITeacher> | null>(null);
    const [loadingTeachers, setLoadingTeachers] = useState<boolean>(false);
    const [filterData, setFilterData] = useState<IFilterData[]>([]);
    const [cardData, setCardData] = useState<IPagination<IFeedbacksResponse> | null>(null);
    const [loadingCard, setLoadingCard] = useState<boolean>(false);
    const [showCard, setShowCard] = useState<boolean>(false);

    const fetchTeachers = async () => {
        setLoadingTeachers(true);
        const response = await feedbackProvider.getTeachers({
            pageSize: 9,
            ...(teachers?.lastVisible && { lastVisible: teachers.lastVisible })
        });
        if (response) {
            if (teachers) {
                response.data = [...teachers.data, ...response.data];
            }
            setTeachers(response);
        }
        setLoadingTeachers(false);
    }

    const loadCard = async (teacherId: string) => {
        setLoadingCard(true);
        const response = await feedbackProvider.getFeedbacks({
            pageSize: 10,
            teacherId: teacherId
        })
        if (response) {
            setCardData(response);
        }
        setLoadingCard(false);
        setShowCard(true);
    }

    const fetchFilterData = async () => {
        const response = await feedbackProvider.getFilterData();
        if (response) {
            setFilterData(response);
        }
    }

    useEffect(() => {
        fetchTeachers();
        fetchFilterData();
    }, []);

    return (
        <>
            {showCard && <Card data={cardData} setShowCard={setShowCard} />}
            <div 
            className="bg-[#03B04B] w-full flex flex-col items-center justify-center py-[50px] gap-[50px]"
            style={{
                overflowY: showCard ? "hidden" : "auto"
            }}
            >
                <Filter
                    filterData={filterData}
                    setTeachers={setTeachers}
                />
                <div
                    className="flex flex-wrap mx-[1vw] sm:mx-[10vw] md:mx-[5vw] lg:mx-[5vw] xl:mx-[10vw] justify-center items-center"
                >
                    {teachers?.data.map((teacher) => (
                        <div
                            key={teacher.teacherId}
                            className="h-[50vh] w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] bg-white rounded-[30px] m-[10px] flex flex-col items-center justify-center gap-[5%] transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                            onClick={() => loadCard(teacher.teacherId)}
                        >
                            <div className="w-[60%] aspect-square bg-[#d9d9d9] rounded-full"></div>
                            <p className="font-inter bg-[#d9d9d9] text-[#54007C] rounded-[12px] px-[10px] py-[5px] font-medium">
                                {teacher.teacherName}
                            </p>
                            <p className="font-inter bg-[#d9d9d9] text-[#54007C] rounded-[12px] px-[10px] py-[5px] font-medium">
                                {teacher.ratingCount == 0 ? '-' : teacher.rating}
                            </p>
                        </div>
                    ))}
                </div>
                {!loadingTeachers && teachers?.hasNext &&
                    <img
                        src={arrow}
                        alt="arrow"
                        className="cursor-pointer"
                        onClick={fetchTeachers}
                    />
                }
                {loadingTeachers && <Spinner />}
            </div>
        </>
    );
}

export default ResultsContainer;
