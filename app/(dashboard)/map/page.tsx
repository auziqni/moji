import Map from "@/components/map";
import React from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const GetDataAllJamaah = async () => {
  const res = await prisma.allJamaah.findMany({
    // const res = await prisma.AllJamaah.findMany({
    select: {
      Id: true,
      Nama: true,
      Ismale: true,
      Age: true,
      Province: true,
      Group: true,
      Lat: true,
      Lng: true,
      Temp: true,
      Humid: true,
    },
  });
  return res;
};

export default async function Mappage() {
  const DataAllJamaah = await GetDataAllJamaah();

  return (
    <main>
      <Map props={DataAllJamaah} />
    </main>
  );
}
