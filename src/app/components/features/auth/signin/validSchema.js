import { z } from 'zod';

const SignInSchema = z.object({
    username: z.string().nonempty('Username is required'),
    password: z.string().min(6).max(20),
});

export { SignInSchema };
