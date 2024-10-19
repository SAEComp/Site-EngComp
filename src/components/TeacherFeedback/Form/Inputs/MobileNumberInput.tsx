import { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const grey = {
	50: '#F3F6F9',
	100: '#E5EAF2',
	200: '#DAE2ED',
	300: '#C7D0DD',
	400: '#B0B8C4',
	500: '#9DA8B7',
	600: '#6B7A90',
	700: '#434D5B',
	800: '#303740',
	900: '#1C2025',
};

interface INumberInputProps {
	placeholder?: string;
	min?: number;
	max?: number;
	defaultValue?: number;
	onChange?: (value: number | null) => void;
}

export default function MobileNumberInput({ min = 0, max = 100, defaultValue = 0, onChange }: INumberInputProps) {
	const [value, setValue] = useState<number | null>(defaultValue);

	const handleIncrement = () => {
		if (value && value < max) {
			const newValue = value + 1;
			setValue(newValue);
			if (onChange) onChange(newValue);
		}
	};

	const handleDecrement = () => {
		if (value && value > min) {
			const newValue = value - 1;
			setValue(newValue);
			if (onChange) onChange(newValue);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = event.target.value;

		const sValue = rawValue.replace(/\D/g, '');

		if (sValue === '') {
			setValue(null);
			return;
		}

		const newValue = parseInt(sValue, 10);

		setValue(newValue);

		if (!isNaN(newValue) && newValue >= min && newValue <= max && onChange) onChange(newValue);
	};
	const handleBlur = () => {
		if (value === null || value < min) {
			setValue(min);
			if (onChange) onChange(min);
			return;
		}
		if (value > max) {
			setValue(max);
			if (onChange) onChange(min);
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 1,
			}}
		>
			<Button
				onClick={handleDecrement}
				disabled={(value ?? min - 1) <= min}
				sx={{
					borderRadius: '50%',
					minWidth: '40px',
					width: '40px',
					height: '40px',
					bgcolor: grey[100],
					color: grey[600],
					'&:hover': { bgcolor: grey[200] },
				}}
			>
				<RemoveIcon />
			</Button>
			<TextField
				value={value !== null ? value : ''}
				onChange={handleInputChange}
				onBlur={handleBlur}
				slotProps={{
					htmlInput: {
						inputMode: 'numeric',
						pattern: '[0-9]*',
					},
				}}
				sx={{
					width: '4rem',
					height: '48px',
					border: '0px',
					textAlign: 'center',
					borderRadius: '8px',
					backgroundColor: '#fff',
					display: 'flex',
					alignItems: 'center',
					input: {
						textAlign: 'center',
						border: 'none',
						outline: 'none',
						padding: '0',
						height: '48px',
						display: 'flex',
						alignItems: 'center',
					},
					'& .MuiOutlinedInput-notchedOutline': {
						border: 'none',
					},
				}}
				variant="outlined"
			/>

			<Button
				onClick={handleIncrement}
				disabled={(value ?? max + 1) >= max}
				sx={{
					borderRadius: '50%',
					minWidth: '40px',
					width: '40px',
					height: '40px',
					bgcolor: grey[100],
					color: grey[600],
					'&:hover': { bgcolor: grey[200] },
				}}
			>
				<AddIcon />
			</Button>
		</Box>
	);
}
