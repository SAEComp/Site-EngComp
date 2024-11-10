import DropDown from "../../Inputs/DropDown";
import { IFilterData, ITeacher, IPagination } from "../../../interfaces/TeacherFeedback/feedback.interface";
import { useState, useEffect } from "react";
import { TAutocompleteOptions } from "../Form/types";
import feedbackProvider from "../../../services/TeacherFeedback/feedback.provider";
import Spinner from "../../Spinner/Spinner";

interface IFilter {
    filterData: IFilterData[];
    setTeachers: React.Dispatch<React.SetStateAction<IPagination<ITeacher> | null>>
}

const distinct = <T,>(list: T[], key: keyof T): T[] => {
    return [...new Map(list.map(item => [item[key], item])).values()];
};



const Filter = ({ filterData, setTeachers }: IFilter) => {
    const [teacherFilter, setTeacherFilter] = useState<TAutocompleteOptions[]>([]);
    const [courseFilter, setCourseFilter] = useState<TAutocompleteOptions[]>([]);
    const [selectedTeacher, setSelectedTeacher] = useState<TAutocompleteOptions | null>(null);
    const [selectedCourse, setSelectedCourse] = useState<TAutocompleteOptions | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const setFilters = (teacher: TAutocompleteOptions | null, course: TAutocompleteOptions | null) => {
        console.log("...", filterData);
        setTeacherFilter(distinct(filterData.filter((obj) => {
            return course === null ? true : obj.courseId === course.id
        }).map((el) => { return { id: el.teacherId, label: el.teacherName, subtitle: el.teacherNickname } }), "id"))

        setCourseFilter(distinct(filterData.filter((obj) => {
            return teacher === null ? true : obj.teacherId === teacher.id
        }).map((el) => { return { id: el.courseId, label: el.courseName, subtitle: el.courseCode } }), "id"))
    }

    useEffect(() => {
        setFilters(selectedTeacher, selectedCourse);
    }, [filterData]);

    const fetchFilteredTeachers = async () => {
        setLoading(true);
        const response = await feedbackProvider.getTeachers({
            pageSize: -1,
            ...(selectedTeacher?.id && { teacherId: String(selectedTeacher.id) }),
            ...(selectedCourse?.subtitle && { courseCode: selectedCourse.subtitle })
        });
        if (response) {
            setTeachers(response);
        }
        setLoading(false);
    }

    return (
        <div
            className="w-full flex justify-center flex-col md:flex-row gap-5 md:gap-5 lg:gap-[3%] px-[1vw] sm:px-[1vw] md:px-[1vw] lg:px-[5vw] xl:px-[2vw]"
        >
            <DropDown
                className="w-full md:w-1/3 lg:w-1/4"
                options={teacherFilter}
                placeholder={"Professor"}
                searchable={true}
                showSubtitle={true}
                value={selectedTeacher}
                searchFilter={(search, option) => {
                    const normalizedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    return (
                        option.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedSearch.toLowerCase()) ||
                        option.subtitle?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedSearch.toLowerCase())
                    ) ?? false;
                }}
                onChange={(newValue) => {
                    setSelectedTeacher(newValue);
                    setFilters(newValue, selectedCourse);
                }}
            />
            <DropDown
                className="w-full md:w-1/3 lg:w-1/4"
                options={courseFilter}
                placeholder={"Curso"}
                searchable={true}
                showSubtitle={true}
                value={selectedCourse}
                searchFilter={(search, option) => {
                    const normalizedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    return (
                        option.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedSearch.toLowerCase()) ||
                        option.subtitle?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedSearch.toLowerCase())
                    ) ?? false;
                }}
                onChange={(newValue) => {
                    setSelectedCourse(newValue);
                    setFilters(selectedTeacher, newValue);
                }}
            />
            <div
                className="w-full md:w-28 h-12 flex justify-center items-center"
            >
                {loading ? (
                    <Spinner />
                ) : (
                    <button
                        className="bg-black text-white px-5 rounded-md h-12 w-full"
                        onClick={fetchFilteredTeachers}
                    >
                        Filtrar
                    </button>
                )}
            </div>




        </div>
    )
}

export default Filter;