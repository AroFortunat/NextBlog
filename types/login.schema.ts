import { z } from "zod/v4";

export const loginSchemaValues = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export type loginValues = z.infer<typeof loginSchemaValues>