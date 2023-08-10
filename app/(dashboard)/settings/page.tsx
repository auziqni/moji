import { FormSettings } from "@/components/formSettings";
import { auth } from "@clerk/nextjs";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Settings() {
  const { userId } = auth();
  let plch_teleid: string = "123";

  const data = await prisma.userCommunication.findUnique({
    where: { UserId: userId ?? "" },
  });

  if (data) {
    plch_teleid = data.Teleid ?? "456";
  }

  const myprop = {
    userid: userId ?? "098",
    teleid: plch_teleid,
  };
  return <FormSettings prop={myprop} />;
}
