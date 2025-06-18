import { prisma } from "@/lib/connect";
import { AllCategorySchema } from "@/types";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany()
    const safeCategories = AllCategorySchema.safeParse(categories);

    if (!safeCategories.success) {
      console.error(safeCategories.error)
      return NextResponse.json(
        { error: "Invalid data format" },
        { status: 400 }
      );
    }

    return NextResponse.json(safeCategories.data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
