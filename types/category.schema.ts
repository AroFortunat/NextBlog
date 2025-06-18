import { z } from "zod/v4";

export const AllCategorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  image: z.string().optional().nullable(),
}).array();

export type AllCategory = z.infer<typeof AllCategorySchema>;
