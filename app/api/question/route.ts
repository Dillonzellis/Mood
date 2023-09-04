import { qa } from "@/util/ai";
import { getUserByClerkID } from "@/util/auth";
import { prisma } from "@/util/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { question } = await request.json();
  const user = await getUserByClerkID();

  const entries = await prisma.jounralEntry.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      content: true,
      createdAt: true,
    },
  });

  const answer = await qa(question, entries);

  return NextResponse.json({ data: answer });
};
