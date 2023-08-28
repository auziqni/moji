import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import type { Jamaah } from "@prisma/client";
const prisma = new PrismaClient();
const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELE_BOT_ID}/sendMessage`;

type getreq = {
  id: number;
  lat: number;
  lng: number;
  temp: number;
  humid: number;
  namaPengurus: string;
};
const GetDataJamaah = async (id: number) => {
  const res = await prisma.jamaah.findUnique({
    where: {
      id: id,
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

const GetDataAdmin = async (name: string) => {
  const data = await prisma.admin.findUnique({
    where: { name: name },
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

  return data;
};

export async function POST(request: Request) {
  const body: getreq = await request.json();
  const DataJamaah = await GetDataJamaah(body.id);
  const DataAdmin = await GetDataAdmin(DataJamaah?.namaPengurus ?? "");

  const hasupdate = await prisma.jamaah.update({
    where: {
      id: body.id,
    },
    data: {
      lat: body.lat,
      lng: body.lng,
      temp: body.temp,
      humid: body.humid,
    },
  });

  if (hasupdate) {
    if (DataAdmin?.lat !== null) {
      const distance = calculateDistance(
        DataAdmin?.lat ?? 0,
        DataAdmin?.lng ?? 0,
        body.lat,
        body.lng
      );

      // todo
      if (distance > 0.1) {
        try {
          await axios.post(url, {
            chat_id: DataAdmin?.contact,
            text: `Warning Jammah keluar zona! \n
            Id:${DataJamaah?.id} dengan Nama:${DataJamaah?.name}\n 
            ${DataJamaah?.ismale ? "Pria" : "Wanita"}, ${
              DataJamaah?.age
            }tahun, Asal:${DataJamaah?.province}, Rombongan:${
              DataJamaah?.group
            } dengan jarak:${distance * 1000}m`,
          });
          console.log("tele berhasil");
        } catch (error) {
          console.log("tele gagal");
        }
      }
      return NextResponse.json({
        status: "berhasil",
        admin: "ready",
        jarak: distance,
      });
    } else {
      return NextResponse.json({
        status: "berhasil",
        admin: "not ready",
        jarak: "",
      });
    }
  } else {
    return NextResponse.json({ status: "gagal", jarak: "" });
  }
  // const DataAdmin = await GetDataAdminJamaah(body.namaPengurus);

  // return NextResponse.json({
  //   status: "berhasil",
  //   lokasi: "dekat",
  //   jarak: distance,
  //   adminlat: DataAdmin?.lat ?? 0,
  //   adminlng: DataAdmin?.lng ?? 0,
  // });

  // return NextResponse.json(DataAdmin);
}

function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) *
      Math.cos(degToRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function degToRad(deg: number) {
  return deg * (Math.PI / 180);
}
