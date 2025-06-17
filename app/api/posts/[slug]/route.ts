import { Post } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const POST: Post = {
    id: 1,
    category: "React",
    title: "React State Management: Choosing the Right Solution",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    caption:
      "Explore different state management solutions in React and choose the one that fits your needs.",
    date: "2023-01-15",
    minutesToRead: 10,
    author: "John ReactDev",
    nbViews: 25,
    nbComments: 8,
    slug: "react-state-management-choosing-right-solution",
    content:'Hello'
  }
export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  return NextResponse.json(POST,{status:200});
};
 