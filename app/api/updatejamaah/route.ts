import { NextRequest, NextResponse } from "next/server";

const URL = "https://jsonplaceholder.typicode.com/todos";

const data = [
  { nama: "siapa", umur: 25 },
  { nama: "siapa", umur: 25 },
  { nama: "siapa", umur: 25 },
  { nama: "siapa", umur: 25 },
];

export async function POST(request: Request) {
  console.log("=========getrequest");
  // const res = await fetch(URL);
  // const datas = await res.json();
  // return NextResponse.json(datas);

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  return NextResponse.json({ ini: "sipp" });

  // const res = await request.json();
  // return NextResponse.json(res);

  // const { Nama } = await request.json();
  // if (!Nama) return NextResponse.json({ ini: "ada yang salah" });
  // return NextResponse.json({ ini: "sip" });

  // return NextResponse.json({ ini: "ada yang salah" });
}
