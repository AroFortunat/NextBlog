import { prisma } from "@/lib/connect";
import { allPostSchema } from "@/types";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const postBySlug = await prisma.post.findMany();

    if (postBySlug === null) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const validationResult = allPostSchema.safeParse(postBySlug);

    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return NextResponse.json(
        { error: "Invalid post data structure" },
        { status: 500 }
      );
    }

    return NextResponse.json(validationResult.data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
