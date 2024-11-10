import React, { useState } from 'react';

interface INumberInputProps {
    placeholder?: string;
    min?: number;
    max?: number;
    mobile?: boolean;
    defaultValue?: number;
    onChange?: (value: number | null) => void;
}

export default function NumberInput({
    placeholder,
    min = 1,
    max = 50,
    defaultValue = 1,
    mobile = false,
    onChange,
}: INumberInputProps) {
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <>
            {mobile ? (
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
                        onChange={handleChange}
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
            ) : (
                <div
                    className={`flex min-w-3 min-h-5 h-12 bg-white gap-0 overflow-hidden rounded-md border border-gray-300`}
                >
                    <input
                        type="text"
                        value={value !== null ? value : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        min={min}
                        max={max}
                        placeholder={placeholder}
                        className="col-start-1 col-end-2 row-start-1 row-end-3 px-3 py-2 text-sm font-inter font-normal leading-6 text-gray-900 bg-white border-none outline-none focus:outline-none placeholder-gray-500 placeholder-opacity-100"
                    />
                    <div className="flex flex-col h-full p-1" >
                        <button
                            onClick={handleIncrement}
                            className="flex items-center justify-center w-[19px] h-1/2 bg-gray-50 text-gray-900 hover:bg-gray-100 cursor-pointer rounded-tl rounded-tr"
                        >
                            ▴
                        </button>
                        <button
                            onClick={handleDecrement}
                            className="flex items-center justify-center w-[19px] h-1/2 bg-gray-50 text-gray-900 hover:bg-gray-100 cursor-pointer rounded-bl rounded-br"
                        >
                            ▾
                        </button>
                    </div>

                </div>
            )}
        </>

    );
}
