import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { AllJamaah } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  console.log("=========getrequest");
  const body: AllJamaah = await request.json();
  const jamaah = await prisma.allJamaah.update({
    where: {
      Id: body.Id,
    },
    data: {
      Lat: body.Lat,
      Lng: body.Lng,
      Temp: body.Temp,
      Humid: body.Humid,
    },
  });

  return NextResponse.json(jamaah);
}
