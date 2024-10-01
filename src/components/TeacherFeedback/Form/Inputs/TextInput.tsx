import { TextField } from "@mui/material";

interface ITextInputProps {
    label: string;
    multiline?: boolean
    rows?: number;
    value?: string;
    onChange?: (value: string) => void;
}


const TextInput = ({ label, value, multiline, rows, onChange }: ITextInputProps) => {
    return (
        <TextField
            multiline={multiline}
            rows={rows}
            variant='filled'
            label={label}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
                '& .MuiFilledInput-root': {
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                    '&.Mui-focused': {
                        backgroundColor: 'white',
                    },
                    '&.Mui-disabled': {
                        backgroundColor: 'white',
                    },
                    '&:before': {
                        borderBottom: 'none',
                    },
                    '&:after': {
                        borderBottom: 'none',
                    },
                },
                '& .MuiInputBase-root:before': {
                    borderBottom: 'none',
                },
                '& .MuiInputBase-root:after': {
                    borderBottom: 'none',
                },
                '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
                    borderBottom: 'none',
                },
                '& .MuiInputLabel-root': {
                    color: 'gray',
                    fontFamily: 'Inter',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'gray',
                    fontFamily: 'Inter',
                },
                '.MuiInputBase-input': {
                    fontFamily: 'Inter',
                },
            }}
        />
    );
};

export default TextInput;
