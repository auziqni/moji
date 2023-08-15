import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Admin } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body: Admin = await request.json();
  const jamaah = await prisma.admin.update({
    where: {
      name: body.name,
    },
    data: {
      lat: body.lat,
      lng: body.lng,
    },
  });

  return NextResponse.json(jamaah);
}
