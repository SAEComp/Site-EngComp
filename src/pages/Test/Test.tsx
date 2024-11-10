import DropDown from "../../components/Inputs/DropDown";
import { useState } from "react";

const _options = [
    {
        label: "Option 1",
        id: "option1",
        subtitle: "This is the first option",
    },
    {
        label: "Option 2",
        id: "option2",
        subtitle: "This is the second option",
    },
    {
        label: "Option 3",
        id: "option3",
        subtitle: "This is the third option",
    },
    {
        label: "Option 4",
        id: "option4",
        subtitle: "This is the fourth option",
    },
    {
        label: "Option 5",
        id: "option5",
        subtitle: "This is the fifth option",
    },
    {
        label: "Option 6",
        id: "option6",
        subtitle: "This is the sixth option",
    },
    {
        label: "Option 7",
        id: "option7",
        subtitle: "This is the seventh option",
    },
    {
        label: "Option 8",
        id: "option8",
        subtitle: "This is the eighth option",
    },
    {
        label: "Option 9",
        id: "option9",
        subtitle: "This is the ninth option",
    },
    {
        label: "Option 10",
        id: "option10",
        subtitle: "This is the tenth option",
    },
    {
        label: "Option 11",
        id: "option11",
        subtitle: "This is the eleventh option",
    },
    {
        label: "Option 12",
        id: "option12",
        subtitle: "This is the twelfth option",
    },
    {
        label: "Option 13",
        id: "option13",
        subtitle: "This is the thirteenth option",
    },
    {
        label: "Option 14",
        id: "option14",
        subtitle: "This is the fourteenth option",
    },
    {
        label: "Option 15",
        id: "option15",
        subtitle: "This is the fifteenth option",
    },
    {
        label: "Option 16",
        id: "option16",
        subtitle: "This is the sixteenth option",
    },
    {
        label: "Option 17",
        id: "option17",
        subtitle: "This is the seventeenth option",
    },
    {
        label: "Option 18",
        id: "option18",
        subtitle: "This is the eighteenth option",
    },
    {
        label: "Option 19",
        id: "option19",
        subtitle: "This is the nineteenth option",
    },
    {
        label: "Option 20",
        id: "option20",
        subtitle: "This is the twentieth option"
    }
]

const Test = () => {
    const [value, setValue] = useState<typeof _options[0] | null>(null);
    return (
        <div
            className="flex items-center justify-center h-screen w-screen bg-slate-800"
        >
            <DropDown
                options={_options}
                showSubtitle={false}
                placeholder="Select an option"
                value={value}
                onChange={(option) => setValue(option)}
            />
        </div>
    );
}

export default Test;