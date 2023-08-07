import React from "react";

import Table from "@/components/table";
import { CardsMonitorJamaah } from "@/lib/mock";
import { Key } from "lucide-react";

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

export default async function Dashboard() {
  const DataAllJamaah = await GetDataAllJamaah();
  return (
    <div className="p-5">
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3   p-5">
        {CardsMonitorJamaah.map((card) => (
          <div
            key={card.id}
            className=" rounded-xl p-1 pl-2 border border-solid border-black "
          >
            <h2 className="text-xs">{card.tittle}</h2>
            <h1 className="text-2xl text-right pr-4 font-semibold">
              {card.jumlah}
            </h1>
            {/* <h3 className="text-xs">orang</h3> */}
          </div>
        ))}
      </div>

      {/* {Data.map((datax) => (
        <div>{datax.Nama}</div>
      ))} */}
      <div className="p-5">
        <Table props={DataAllJamaah} />
      </div>
    </div>
  );
}
