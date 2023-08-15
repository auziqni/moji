import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Jamaah } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body: Jamaah = await request.json();
  const jamaah = await prisma.jamaah.delete({
    where: {
      id: body.id,
    },
  });

  return NextResponse.json(jamaah);
}
