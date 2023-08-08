import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { AllJamaah } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  console.log("=========getrequest");
  const body: AllJamaah = await request.json();
  const jamaah = await prisma.allJamaah.create({
    data: {
      Nama: body.Nama,
      Ismale: body.Ismale,
      Age: body.Age,
      Province: body.Province,
      Group: body.Group,
    },
  });

  return NextResponse.json(jamaah);
}
