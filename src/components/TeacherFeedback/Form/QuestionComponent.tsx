import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import { ComponentType } from "react";

interface IQuestionContainer<ComponentProps> {
    label: string;
    component: ComponentType<ComponentProps>;
    componentProps: ComponentProps;
    sx?: SxProps<Theme>;
}


const QuestionComponent = <ComponentProps extends {}>({
    label,
    component: Component,
    componentProps,
    sx
}: IQuestionContainer<ComponentProps>) => {
    return (
        <Box
            sx={{
                bgcolor: '#F1F1F1',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                ...sx
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Inter'
                }}
            >
                {label}
            </Typography>
            <Component {...componentProps} />

        </Box>
    )
}

export default QuestionComponent;
