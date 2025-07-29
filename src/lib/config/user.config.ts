import { z } from "zod";

export const signinObject = z.object({
    email: z.email({ error: "Invalid Email Address" }),
    password: z
        .string({ error: "Password is required" })
        .min(5, { error: "Password must be at least 5 characters long" })
        .max(100, { error: "Max 50 characters allowed for password" })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            {
                error: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            }
        ),
});

export const signupObject = z.object({
    username: z
        .string({ error: "Username is required" })
        .max(50, { error: "Only 20 characters allowed" }),
    email: z.email({ error: "Invalid Email Id, try again" }),
    password: z
        .string({ error: "Password is required" })
        .min(5, { error: "Password must be at least 5 characters long" })
        .max(100, { error: "Max 50 characters allowed for password" })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            {
                error: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            }
        ),
});

export type Signin = z.infer<typeof signinObject>;
export type Signup = z.infer<typeof signupObject>;
