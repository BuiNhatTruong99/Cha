'use client';

import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InputField from '../../atom/Input';
import Link from 'next/link';
import GenderRadio from './GenderRadio';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from './validSchema';

const SignUpForm = () => {
    const [gender, setGender] = useState('female');

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(SignUpSchema),
        mode: 'all',
    });

    const onSubmit = (value) => {
        console.log(gender);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <Box>
                <InputField
                    name="fullName"
                    control={control}
                    className="w-full text-gray-300"
                    placeholder="Your full name"
                    label="Full name"
                    errorField={errors.fullName}
                />
                <InputField
                    name="username"
                    control={control}
                    className="w-full text-gray-300"
                    placeholder="Your username"
                    label="Username"
                    errorField={errors['username']}
                />
                <InputField
                    name="password"
                    control={control}
                    className="w-full text-gray-300"
                    placeholder="Your password"
                    label="Password"
                    type="password"
                    errorField={errors['password']}
                />
                <InputField
                    name="confirmPassword"
                    control={control}
                    className="w-full text-gray-300"
                    placeholder="Confirm your password"
                    label="Confirm Password"
                    type="password"
                    errorField={errors['confirmPassword']}
                />
            </Box>

            <GenderRadio />

            <Link href={'/sign-in'} className="text-center text-white mb-6">
                <Typography variant="body2" fontWeight={600}>
                    Already have an account?
                </Typography>
            </Link>
            <Button
                type="submit"
                className="w-60 mx-auto !rounded-[29px] !text-base font-bold h-[50px] text-white bg-primary hover:bg-secondary"
            >
                SIGN UP
            </Button>
        </form>
    );
};

export default SignUpForm;
