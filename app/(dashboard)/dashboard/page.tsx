import React from "react";

import Table from "@/components/table";
import { Button } from "@/components/ui/button";
import { CardsMonitorJamaah } from "@/lib/mock";
import { Key } from "lucide-react";

import { PrismaClient } from "@prisma/client";
import InfoCounter from "@/components/infoCounter";

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

export default async function Dashboard() {
  const DataAllJamaah = await GetDataAllJamaah();
  return (
    <div className="p-10">
      <div className="mb-6 ">
        <InfoCounter props={DataAllJamaah} />
      </div>

      <div className="flex justify-between mb-2 ">
        <h1 className=" my-auto font-bold">Data Jamaah</h1>
        <Button variant="outline" className="rounded-xl">
          {" "}
          Add Jamaah
        </Button>
      </div>

      <div className="">
        <Table props={DataAllJamaah} />
      </div>
    </div>
  );
}
