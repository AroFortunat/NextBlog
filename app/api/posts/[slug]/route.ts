import { prisma } from "@/lib/connect";
import { PostSchema } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = await params;

    const postBySlug = await prisma.post.findUnique({ where: { slug } });

    if (postBySlug === null) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const validationResult = PostSchema.safeParse(postBySlug);

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
