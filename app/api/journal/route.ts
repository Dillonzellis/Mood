import { getUserByClerkID } from "@/util/auth";
import { prisma } from "@/util/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserByClerkID();
  const entry = await prisma.jounralEntry.create({
    data: {
      userId: user.id,
      content: "Write about your day dawg!",
    },
  });

  revalidatePath("/journal");

  return NextResponse.json({ data: entry });
};
