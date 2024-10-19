import * as React from 'react';
import {
    unstable_useNumberInput as useNumberInput,
    UseNumberInputParameters,
} from '@mui/base/unstable_useNumberInput';
import { styled } from '@mui/system';
import { unstable_useForkRef as useForkRef } from '@mui/utils';

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

const StyledInputRoot = styled('div')<{
    isInvalid?: boolean;
}>(
    ({ isInvalid }) => `
      font-family: 'Inter';
      font-weight: 400;
      border-radius: 8px;
      color: ${grey[900]};
      background: #fff;
      display: grid;
      grid-template-columns: 1fr 19px;
      grid-template-rows: 1fr 1fr;
      overflow: hidden;
      column-gap: 8px;
      padding: 4px;
      border: 1px solid ${isInvalid ? 'red' : grey[300]};

      &.focused {
          &:focus-visible {
              outline: 0;
          }
      }
    `,
);

const StyledInputElement = styled('input')(
    () => `
      font-size: 0.875rem;
      font-family: 'Inter';
      font-weight: 400;
      line-height: 1.5;
      grid-column: 1/2;
      grid-row: 1/3;
      color: ${grey[900]};
      background: inherit;
      border: none;
      border-radius: inherit;
      padding: 8px 12px;
      outline: 0;
      &::placeholder {
        color: ${grey[500]};
        opacity: 1; /* Garantir que o placeholder seja visível */
      }
    `,
);

const StyledStepperButton = styled('div')(
    () => `
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      appearance: none;
      padding: 0;
      width: 19px;
      height: 19px;
      font-family: system-ui, sans-serif;
      font-size: 0.875rem;
      line-height: 1;
      box-sizing: border-box;
      border: 0;
      color: ${grey[900]};
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;

        &.increment {
          grid-column: 2/3;
          grid-row: 1/2;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          border-bottom: 0;
          background: ${grey[50]};
          color: ${grey[900]};

          &:hover {
            cursor: pointer;
            color: ${grey[900]};
            background: ${grey[100]};
          }
        }

        &.decrement {
          grid-column: 2/3;
          grid-row: 2/3;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          background: ${grey[50]};
          color: ${grey[900]};

          &:hover {
            cursor: pointer;
            color: ${grey[900]};
            background: ${grey[100]};
          }
      }
    `,
);

const CustomNumberInput = React.forwardRef(function CustomNumberInput(
    props: UseNumberInputParameters & React.InputHTMLAttributes<HTMLInputElement> & { onChangeValue?: (newValue: number | null) => void},
    ref: React.ForwardedRef<HTMLInputElement>,
) {
    const { min = 1, max = 50, defaultValue = 1, onChangeValue, ...other } = props;

    const [value, setValue] = React.useState<number>(defaultValue);

    const handleChange = (
        _: React.FocusEvent<HTMLInputElement, Element> | React.PointerEvent<Element> | React.KeyboardEvent<Element>,
        newValue: number | null,
    ) => {
        if (newValue === null || newValue < min) {
            setValue(min);
        } else if (newValue > max) {
            setValue(max);
        } else {
            setValue(newValue);
        }
        onChangeValue && onChangeValue(newValue);
    };

    const {
        getRootProps,
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
        focused,
    } = useNumberInput({
        ...other,
        min,
        max,
        value,
        onChange: handleChange,
    });

    const inputProps = getInputProps();

    const combinedRef = useForkRef(inputProps.ref, ref);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (value < min) {
            setValue(min);
        } else if (value > max) {
            setValue(max);
        }

        if (inputProps.onBlur) {
            inputProps.onBlur(event);
        }
    };

    const updatedInputProps = {
        ...inputProps,
        ref: combinedRef,
        onBlur: handleBlur,
    };

    return (
        <StyledInputRoot {...getRootProps()} isInvalid={value < min || value > max} className={focused ? 'focused' : undefined}>
            <StyledStepperButton {...getIncrementButtonProps()} className="increment">
                ▴
            </StyledStepperButton>
            <StyledStepperButton {...getDecrementButtonProps()} className="decrement">
                ▾
            </StyledStepperButton>
            <StyledInputElement {...updatedInputProps} />
        </StyledInputRoot>
    );
});

interface INumberInputProps {
    placeholder?: string;
    min?: number;
    max?: number;
    defaultValue?: number;
    onChange?: (value: number | null) => void;
}

export default function NumberInput({ placeholder, min, max, defaultValue, onChange }: INumberInputProps) {
    return (
        <CustomNumberInput
            placeholder={placeholder}
            min={min}
            max={max}
            defaultValue={defaultValue}
            onChangeValue={(newValue) => {
                onChange && onChange(newValue);
            }}
        />
    );
}
