import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { UserCommunication } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body: UserCommunication = await request.json();
  const jamaah = await prisma.userCommunication.update({
    where: {
      UserId: body.UserId,
    },
    data: {
      Teleid: body.Teleid,
    },
  });

  return NextResponse.json(jamaah);
}
