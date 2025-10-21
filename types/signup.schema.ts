import { z } from "zod/v4";

export const signupSchemaValues = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
})

export type signupValues = z.infer<typeof signupSchemaValues>