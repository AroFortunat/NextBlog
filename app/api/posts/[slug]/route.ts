import { prisma } from "@/lib/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = await params;

    const postBySlug = await prisma.post.findUnique({
      where: { slug },
    });

    return NextResponse.json(postBySlug, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error something wrong" },
      { status: 500 }
    );
  }
};
