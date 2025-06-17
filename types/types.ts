import { z } from "zod/v4";

export type category = {
    id:number;
    name:string;
    slug:string;
}

export const PostSchema = z.object({
  id: z.number(),
  category: z.string(),
  title: z.string(),
  image: z.string(),
  caption: z.string(),
  date: z.date(),
  minutesToRead: z.number(),
  author: z.string(),
  nbViews: z.number(),
  nbComments: z.number(),
  slug: z.string(),
  content: z.string().optional(),
});

export type Post = z.infer<typeof PostSchema>;

