import SignUpForm from "@/app/components/features/auth/signup/SignUpForm";
import { Box, Typography } from "@mui/material";
import React from "react";

const SignUpPage = () => {
  return (
    <Box className="flex flex-col items-center justify-center mx-auto">
      <Box className="w-full p-6 rounded-lg shadow-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Typography variant="h1" className="text-gray-300 text-4xl text-center font-bold">
          Sign Up <span className="text-primary"> ChatApp</span>
        </Typography>
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default SignUpPage;
