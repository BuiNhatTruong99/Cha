import { z } from 'zod';

const SignUpSchema = z.object({
    fullName: z.string().min(3).max(20).nonempty('Full name is required'),
    username: z.string().nonempty('Username is required'),
    password: z.string().min(6).max(20),
    confirmPassword: z.string().nonempty('Password is required'),
});

export { SignUpSchema };
