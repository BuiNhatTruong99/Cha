import SignInForm from "@/app/components/features/auth/signin/SignInForm";
import { Box, Typography } from "@mui/material";
import React from "react";

const SignInPage = () => {
  return (
    <Box className="flex flex-col items-center justify-center mx-auto">
      <Box className="w-full p-6 rounded-lg shadow-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Typography variant="h1" className="text-gray-300 text-4xl text-center font-bold">
          Sign In <span className="text-primary"> ChatApp</span>
        </Typography>
        <SignInForm />
      </Box>
    </Box>
  );
};

export default SignInPage;
