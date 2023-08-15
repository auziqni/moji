import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Jamaah } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body: Jamaah = await request.json();
  const jamaah = await prisma.jamaah.create({
    data: {
      name: body.name,
      ismale: body.ismale,
      age: body.age,
      province: body.province,
      group: body.group,
      pengurus: { connect: { name: body.namaPengurus ?? "admin" } },
    },
  });

  return NextResponse.json(jamaah);
}
