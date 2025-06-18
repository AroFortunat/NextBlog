import { z } from "zod/v4";

export const categorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  image: z.string().optional(),
});

export type category = z.infer<typeof categorySchema>;
