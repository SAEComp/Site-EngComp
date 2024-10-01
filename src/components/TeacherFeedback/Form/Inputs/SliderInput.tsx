import { Box, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SxProps, Theme } from "@mui/material";

interface IMark {
    value: number;
    label: string;
}

interface ISliderInputProps {
    value: number;
    setValue: (value: number) => void;
    sx?: SxProps<Theme>;
}


const marks: IMark[] = Array.from({ length: 11 }, (_, i) => ({
    value: i,
    label: `${i}`,
}));


const valuetext = (value: number): string => `${value}`;


const StyledSlider = styled(Slider)(() => ({
    '& .MuiSlider-mark': {
        opacity: 1,
        backgroundColor: '#F2F2F2', // Cor das marcas inativas
        height: 40,
        width: 40,
        borderRadius: '50%',
        marginLeft: -19,
        border: '7px solid #D9D9D9'
    },
    '& .MuiSlider-markActive': {
        backgroundColor: '#F2F2F2',
        border: '7px solid #D9D9D9'
    },
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#03B04B',
        boxShadow: 'none',
        border: 'none',

        '&:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'none',
            border: 'none',
        },
        '&::before': {
            boxShadow: 'none',
        },
    },
    '& .MuiSlider-rail': {
        opacity: 1,
        backgroundColor: '#D9D9D9',
        height: 10
    },
    '& .MuiSlider-track': {
        opacity: 1,
        border: 'none',
        backgroundColor: '#D9D9D9',
    },
    '& .MuiSlider-markLabel': {
        fontFamily: 'Inter',
        fontSize: '1rem',
        fontWeight: '500',
        color: '#000',
        marginTop: '-70px',

    },
}));

const SliderInput = ({ value, setValue, sx }: ISliderInputProps) => {

    const handleChange = (_: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px', ...sx }}>
            <StyledSlider
                aria-label="Custom marks"
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="off"
                marks={marks}
                min={0}
                max={10}
                track="inverted"
                sx={{
                    width: '90%'
                }}
            />
        </Box>
    );
};

export default SliderInput;
