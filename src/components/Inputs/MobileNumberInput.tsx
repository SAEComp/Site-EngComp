import { useState } from 'react';

interface INumberInputProps {
	placeholder?: string;
	min?: number;
	max?: number;
	defaultValue?: number;
	onChange?: (value: number | null) => void;
}

const MobileNumberInput = ({
	min = 1,
	max = 50,
	defaultValue = 1,
	onChange,
}: INumberInputProps) => {
	const [value, setValue] = useState<number | null>(defaultValue);

	const handleIncrement = () => {
		if (value !== null && value < max) {
			const newValue = value + 1;
			setValue(newValue);
			if (onChange) onChange(newValue);
		}
	};

	const handleDecrement = () => {
		if (value !== null && value > min) {
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

		if (!isNaN(newValue) && newValue >= min && newValue <= max && onChange) {
			onChange(newValue);
		}
	};

	const handleBlur = () => {
		if (value === null || value < min) {
			setValue(min);
			if (onChange) onChange(min);
			return;
		}
		if (value > max) {
			setValue(max);
			if (onChange) onChange(max);
		}
	};

	return (
		<div className="flex items-center gap-2">
			<button
				onClick={handleDecrement}
				disabled={(value ?? min - 1) <= min}
				className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 disabled:opacity-50"
			>
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
				</svg>
			</button>

			<input
				type="text"
				value={value !== null ? value : ''}
				onChange={handleInputChange}
				onBlur={handleBlur}
				inputMode="numeric"
				pattern="[0-9]*"
				className="w-16 h-12 text-center bg-white rounded-md outline-none"
			/>

			<button
				onClick={handleIncrement}
				disabled={(value ?? max + 1) >= max}
				className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 disabled:opacity-50"
			>
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
				</svg>
			</button>
		</div>
	);
}

export default MobileNumberInput;