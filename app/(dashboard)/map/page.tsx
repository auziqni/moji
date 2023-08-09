import Map from "@/components/map";
import React from "react";
import { GetDataAllJamaah } from "../dashboard/page";

export default async function Mappage() {
  const DataAllJamaah = await GetDataAllJamaah();

  return (
    <main>
      <Map />
    </main>
  );
}
