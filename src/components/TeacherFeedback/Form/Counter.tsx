import { Box, Typography, Button } from "@mui/material";

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
        <Box
            sx={{
                bgcolor: '#03B04B',
                height: '50px',
                width: { sm: '100%', md: '50%', lg: '30%' },
                borderRadius: '23px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingX: '20px'
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    color: 'white',
                    flexGrow: '1',
                    paddingLeft: '5px'
                }}
            >
                Formulário
            </Typography>
            <Button
                size="small"
                sx={{
                    borderRadius: '10px',
                    color: 'white',
                    minWidth: 'auto',
                    scale: '0.9',
                    transform: 'rotate(180deg)'
                }}
                disabled={currentQuestion === 0}
                onClick={() => {
                    setCurrentQuestion(currentQuestion - 1)
                }}
                >
                {Arrow}
            </Button>
            <Typography
                sx={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    color: 'white',
                    marginX: '3px'
                }}
            >
                { currentQuestion + 1 }/{ totalQuestions }
            </Typography>
            <Button
                size="small"
                sx={{
                    borderRadius: '10px',
                    color: 'white',
                    minWidth: 'auto',
                    scale: '0.9'
                }}
                disabled={currentQuestion + 1 === totalQuestions}
                onClick={() => {
                    setCurrentQuestion(currentQuestion + 1)
                }}
                >
                
                {Arrow}
            </Button>
        </Box>
    )
}

export default Counter;