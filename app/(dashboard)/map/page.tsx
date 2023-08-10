import Map from "@/components/map";
import { auth } from "@clerk/nextjs";
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

const GetUserCon = async () => {
  const { userId } = auth();
  const res = await prisma.userCommunication.findUnique({
    where: {
      UserId: userId ?? "",
    },
  });
  return res;
};

const mock = {
  Id: 0,
  UserId: "",
  Teleid: "",
};

export default async function Mappage() {
  const DataAllJamaah = await GetDataAllJamaah();
  const UserCon = await GetUserCon();

  return (
    <main>
      <Map props={DataAllJamaah} teleuser={UserCon ?? mock} />
    </main>
  );
}
