import { z } from "zod/v4";

export type category = {
    id:number;
    name:string;
    slug:string;
}

export const PostSchema = z.object({
  id: z.string(),
  category: z.string(),
  title: z.string(),
  image: z.string(),
  caption: z.string(),
  date: z.date(),
  minutesToRead: z.number(),
  author: z.string(),
  nbViews: z.number().default(0),
  nbComments: z.number().default(0),
  slug: z.string(),
  content: z.string().nullable(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date()
});

export type Post = z.infer<typeof PostSchema>;

