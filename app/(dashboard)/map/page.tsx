import Map from "@/components/map";
import { auth } from "@clerk/nextjs";
import React from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { GetDataAllJamaah, GetDataAdmin } from "@/lib/getdata";

export default async function Mappage() {
  const DataAllJamaah = await GetDataAllJamaah();
  const DataAdmin = await GetDataAdmin();

  return (
    <main>
      <Map jamaahArr={DataAllJamaah} admin={DataAdmin} />
    </main>
  );
}
