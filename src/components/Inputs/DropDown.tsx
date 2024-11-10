import { useState, useRef, useEffect, memo } from "react";
import { FixedSizeList as List } from "react-window";

interface IOption {
    label: string;
    id: string | number;
    subtitle?: string;
};

interface IDropDown {
    options: IOption[];
    showSubtitle?: boolean;
    placeholder?: string;
    searchable?: boolean;
    searchFilter?: (search: string, option: IOption) => boolean;
    value: IOption | null;
    onChange: (option: IOption | null) => void;
    className?: React.HTMLProps<HTMLElement>["className"];
};

const DropDown = ({ options, showSubtitle = false, placeholder, searchable = true, searchFilter, value, onChange, className="" }: IDropDown) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<IOption[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setSearch(options);
        setSearchValue(value?.label ?? '')
    }, [options]);

    const toggleDropdown = (open: boolean) => {
        setIsOpen(open);
    };

    const selectOption = (option: IOption) => {
        setSearchValue(option.label);
        onChange(option);
        toggleDropdown(false);
    };

    const handleFocus = () => {
        toggleDropdown(true);
        if (inputRef.current) {
            inputRef.current.select();
        }
    };

    const handleBlur = () => {
        setTimeout(() => {
            toggleDropdown(false);
        }, 50);
        setSearch(options);
        if (searchValue !== value?.label) {
            setSearchValue(value?.label ?? '');
        }
    };

    const defaultSearch = (search: string, option: IOption) => {
        const normalizedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return option.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedSearch.toLowerCase());
    };

    const searchOptions = (search: string) => {
        setSearchValue(search);
        if (searchFilter) setSearch(options.filter((option) => searchFilter(search, option)));
        else setSearch(options.filter((option) => defaultSearch(search, option)));


    };

    const clearSelection = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        setSearchValue('');
        onChange(null);
        inputRef.current?.focus();

    };

    const renderOption = memo(({ index, style }: { index: number; style: React.CSSProperties }) => {
        const option = search[index];
        return (
            <div
                key={option.id}
                style={style}
                className="flex flex-col justify-center gap-1 py-2 px-3 cursor-pointer hover:bg-gray-100"
                onMouseDown={() => selectOption(option)}
            >
                {showSubtitle && (
                    <span className="text-gray-500 text-xs font-inter">
                        {option.subtitle}
                    </span>
                )}
                <span className={`text-gray-800 font-inter font-normal text-sm whitespace-nowrap overflow-hidden text-ellipsis`}>
                    {option.label}
                </span>
            </div>
        );
    });

    return (
        <div className={className + " group relative min-w-3 min-h-5 font-inter"}>
            <input
                ref={inputRef}
                className="focus:outline-none focus:ring-0 focus:border-0 font-inter font-normal w-full h-full rounded-lg pr-16 py-3 pl-3 whitespace-nowrap overflow-hidden text-ellipsis placeholder-gray-400 placeholder-opacity-100 focus:placeholder-opacity-30"
                type="text"
                placeholder={placeholder}
                value={searchValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => searchOptions(e.target.value)}
                readOnly={!searchable}
                autoCorrect="off"
                spellCheck={false}
            />
            {searchValue && (
                <div
                    className="absolute inset-y-0 right-8 h-full flex items-center pr-3 cursor-pointer"
                    onMouseDown={clearSelection}
                >
                    <svg
                        className="w-4 h-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                </div>
            )}
            {!searchValue && search.length === 0 && (
                <div className="absolute inset-y-0 right-8 h-full flex items-center pr-3">
                    <svg
                        className="w-4 h-4 text-gray-500 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 12h4z"
                        ></path>
                    </svg>
                </div>
            )}
            <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onMouseDown={(e) => {
                    if (isOpen) return handleBlur();
                    e.preventDefault();
                    inputRef.current?.focus();
                    handleFocus();
                }}
            >
                <svg
                    className="w-5 h-5 text-gray-500 transition duration-200 group-focus-within:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M7 10l5 5 5-5z"></path>
                </svg>
            </div>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-sm py-2">
                    <List
                        height={Math.min(search.length * 60, 240)}
                        itemCount={search.length}
                        itemSize={60}
                        width="100%"
                    >
                        {renderOption}
                    </List>
                </div>
            )}
        </div>
    );
}

export default DropDown;
