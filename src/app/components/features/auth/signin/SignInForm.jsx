'use client';

import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputField from '../../atom/Input';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema } from './validSchema';

const SignInForm = () => {
    const [dataSignIn, setDataSignIn] = useState({
        username: '',
        password: '',
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(SignInSchema),
        mode: 'all',
    });

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <Box>
                <InputField
                    name="username"
                    control={control}
                    className="w-full text-gray-300"
                    placeholder="Your username"
                    label="Username"
                    value={dataSignIn.username}
                    onChange={(e) => setDataSignIn({ ...dataSignIn, username: e.target.value })}
                    errorField={errors['username']}
                />
                <InputField
                    name="password"
                    control={control}
                    className="w-full text-gray-300"
                    placeholder="Your password"
                    label="Password"
                    type="password"
                    value={dataSignIn.password}
                    onChange={(e) => setDataSignIn({ ...dataSignIn, password: e.target.value })}
                    errorField={errors['password']}
                />
            </Box>
            <Link href={'/sign-up'} className="text-center text-white mb-6">
                <Typography variant="body2" fontWeight={600}>
                    Don't have an account?
                </Typography>
            </Link>
            <Button
                type="submit"
                className="w-60 mx-auto !rounded-[29px] !text-base font-bold h-[50px] text-white bg-primary hover:bg-secondary"
            >
                SIGN IN
            </Button>
        </form>
    );
};

export default SignInForm;
