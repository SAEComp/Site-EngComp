
interface ITextInputProps {
    label: string;
    multiline?: boolean;
    rows?: number;
    value?: string;
    onChange?: (value: string) => void;
}

const TextInput = ({
    label,
    value = '',
    multiline = false,
    rows = 3,
    onChange,
}: ITextInputProps) => {
    return (
        <div className="relative">
            {multiline ? (
                <textarea
                    value={value}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    rows={rows}
                    placeholder={label}
                    className="block w-full h-full rounded-lg pr-16 py-3 pl-3 bg-white text-gray-900 font-inter font-normal whitespace-nowrap overflow-hidden text-ellipsis placeholder-gray-400 placeholder-opacity-100 focus:placeholder-opacity-30 focus:outline-none focus:ring-0 focus:border-0 resize-none"
                />
            ) : (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    placeholder={label}
                    className="block w-full h-full rounded-lg pr-16 py-3 pl-3 bg-white text-gray-900 font-inter font-normal whitespace-nowrap overflow-hidden text-ellipsis placeholder-gray-400 placeholder-opacity-100 focus:placeholder-opacity-30 focus:outline-none focus:ring-0 focus:border-0"
                />
            )}
        </div>
    );
};

export default TextInput;
