import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { AllJamaah } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  console.log("=========getrequest");
  const body: AllJamaah = await request.json();
  const jamaah = await prisma.allJamaah.delete({
    where: {
      Id: body.Id,
    },
  });

  return NextResponse.json(jamaah);
}
