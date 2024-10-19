import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { ITeacher } from "../../../interfaces/TeacherFeedback/feedback.interface";
import feedbackProvider from "../../../services/TeacherFeedback/feedback.provider";
import arrow from "../../../assets/svg/arrow.svg"

const ResultsContainer = () => {
    const [teachers, setTeachers] = useState<ITeacher[]>([]);

    const fetchTeachers = async () => {
        const response = await feedbackProvider.getTeachers({ pageSize: 9 });
        if (response) {
            setTeachers(response.data);
        }
    }

    useEffect(() => {
        fetchTeachers();
    }, []);


    return (
        <Box
            sx={{
                bgcolor: '#03B04B',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                paddingY: '50px',
                gap: '50px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginX: {xs: '1vw', sm: '10vw', md: '5vw', lg: '5vw', xl: '10vw'},
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {teachers.map((teacher) => (
                    <Box
                        key={teacher.teacherId}
                        sx={{
                            height: '50vh',
                            width: {xs: '85vw', sm: '60vw', md: '40vw', lg: '25vw', xl: '20vw'},
                            bgcolor: 'white',
                            borderRadius: '30px',
                            margin: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5%'
                        }}
                    >
                        <Box
                            sx={{
                                width: '60%',
                                aspectRatio: '1 / 1',
                                bgcolor: '#d9d9d9',
                                borderRadius: '100%'
                            }}
                        ></Box>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                bgcolor: '#d9d9d9',
                                color: '#54007C',
                                borderRadius: '12px',
                                paddingX: '10px',
                                paddingY: '5px',
                                fontWeight: '500'
                            }}
                        >
                            {teacher.teacherName}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                bgcolor: '#d9d9d9',
                                color: '#54007C',
                                borderRadius: '12px',
                                paddingX: '10px',
                                paddingY: '5px',
                                fontWeight: '500'
                            }}
                        >
                            {teacher.ratingCount == 0 ? '-' : teacher.rating}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box
            component={'img'}
            src={arrow}
            />

        </Box>
    )
}

export default ResultsContainer;