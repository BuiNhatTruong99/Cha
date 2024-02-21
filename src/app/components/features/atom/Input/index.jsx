// InputField.jsx
import { Box, InputBase, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';

const InputField = ({ label, className, placeholder, type, errorField, name, control }) => {
    const isErrorField = useMemo(() => errorField?.message && errorField?.message?.length > 0, [errorField]);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                paddingY: '10px',
            }}
        >
            <Typography variant="body1" className="font-normal text-primary">
                {label}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    height: '45px',
                    border: '2px solid #4c78dd',
                    borderRadius: '10px',
                    padding: '16px 12px',
                }}
            >
                <Controller
                    control={control}
                    name={name}
                    defaultValue=""
                    render={({ field }) => (
                        <InputBase className={className} placeholder={placeholder} type={type} {...field} />
                    )}
                />
            </Box>
            {isErrorField && (
                <Typography variant="body2" className="italic text-red-500 z-10 font-bold p-[2px] left-2">
                    {errorField.message}
                </Typography>
            )}
        </Box>
    );
};

export default InputField;
