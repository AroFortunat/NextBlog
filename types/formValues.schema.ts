import { z } from "zod/v4";

export const FormValuesSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export type FormValues = z.infer<typeof FormValuesSchema>