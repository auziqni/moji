import { PrismaClient } from "@prisma/client";
import { centeroffice } from "@/lib/mapsettings";
import { currentUser } from "@clerk/nextjs";
const prisma = new PrismaClient();

export const GetDataAllJamaah = async () => {
  const user = await currentUser();
  const res = await prisma.jamaah.findMany({
    where: {
      namaPengurus: user?.username === "admin" ? {} : user?.username ?? "",
    },
    select: {
      id: true,
      name: true,
      ismale: true,
      age: true,
      province: true,
      group: true,
      namaPengurus: true,
      lat: true,
      lng: true,
      temp: true,
      humid: true,
    },
  });
  return res;
};

export const GetDataAdmin = async () => {
  const user = await currentUser();
  const data = await prisma.admin.findUnique({
    where: { name: user?.username ?? "" },
    select: {
      id: true,
      name: true,
      ismale: true,
      role: true,
      lat: true,
      lng: true,
      contact: true,
    },
  });

  if (!data) {
    await prisma.admin.create({
      data: { name: user?.username ?? "" },
    });
  }

  return data;
};

export const GetDataAdminJamaah = async (namaPengurus: string) => {
  const user = await currentUser();
  const data = await prisma.admin.findUnique({
    where: { name: namaPengurus },
    select: {
      id: true,
      name: true,
      ismale: true,
      role: true,
      lat: true,
      lng: true,
      contact: true,
    },
  });

  if (!data) {
    await prisma.admin.create({
      data: { name: user?.username ?? "" },
    });
  }

  return data;
};

export const UpdateAdminLoc = async ({
  lat = centeroffice.lat,
  lng = centeroffice.lng,
}: {
  lat: number;
  lng: number;
}) => {
  const user = await currentUser();
  const data = await prisma.admin.update({
    where: { name: user?.username ?? "" },
    data: {
      lat: lat,
      lng: lng,
    },
  });

  return data;
};

export const GetTeleId = async () => {
  const user = await currentUser();

  const data = await prisma.admin.findUnique({
    where: { name: user?.username ?? "" },
  });

  if (data) {
    return data.contact;
  } else {
    return null;
  }
};
