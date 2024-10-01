import { Autocomplete, TextField, Box, Typography } from "@mui/material";
import { TAutocompleteOptions } from "../types";
import { SxProps, Theme } from "@mui/material";

interface IDropDown {
    options: TAutocompleteOptions[];
    label: string;
    search: boolean;
    value?: TAutocompleteOptions | null;
    onChange?: (value: TAutocompleteOptions | null) => void;
    sx?: SxProps<Theme>;
}

const filterOptions = (options: TAutocompleteOptions[], { inputValue }: { inputValue: string }) => {
    return options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
        (option.subtitle && option.subtitle.toLowerCase().includes(inputValue.toLowerCase()))
    );
};

const DropDown = ({ options, label, search, value, onChange, sx }: IDropDown) => {
    return (
        <Autocomplete
            sx={sx}
            options={options}
            value={value}
            onChange={(_, newValue) => {
                onChange && onChange(newValue);
            }}
            filterOptions={search ? filterOptions : undefined}
            renderOption={(props, option) => (
                <Box
                    component="li"
                    {...props}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        textAlign: 'left'
                    }}
                >
                    {option.subtitle && (
                        <Typography
                            variant="caption"
                            color="textSecondary"
                            sx={{
                                alignSelf: 'flex-start',
                                marginLeft: 0,
                                textAlign: 'left',
                                fontFamily: 'Inter',
                                fontWeight: 400
                            }}
                        >
                            {option.subtitle}
                        </Typography>
                    )}
                    <Typography
                        variant="body1"
                        sx={{
                            alignSelf: 'flex-start',
                            marginLeft: 1,
                            textAlign: 'left',
                            fontFamily: 'Inter',
                            fontWeight: 400
                        }}
                    >
                        {option.label}
                    </Typography>
                </Box>
            )}

            renderInput={(params) => (
                <TextField
                    {...params}
                    slotProps={{
                        htmlInput: {
                            ...params.inputProps,
                            readOnly: !search
                        }
                    }}

                    label={label}
                    variant="filled"

                    sx={{
                        fontFamily: 'Inter',
                        '& .MuiFilledInput-root': {
                            bgcolor: 'white',
                            borderRadius: '4px',
                            '&:hover': {
                                bgcolor: 'white',
                            },
                            '&.Mui-focused': {
                                bgcolor: 'white',
                            },
                            '& input': {
                                fontFamily: 'Inter'
                            }
                        },
                        '& .MuiFilledInput-underline:before': {
                            borderBottom: 'none',
                        },
                        '& .MuiFilledInput-underline:after': {
                            borderBottom: 'none',
                        },
                        '& .MuiFilledInput-underline:hover:before': {
                            borderBottom: 'none !important',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'gray',
                            fontFamily: 'Inter'
                        },
                        '& .MuiInputLabel-root': {
                            color: 'gray',
                            fontFamily: 'Inter'
                        }
                    }}
                />
            )}
        />
    )
}

export default DropDown;