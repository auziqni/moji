import React from "react";

import Table from "@/components/table";
import { CardsMonitorJamaah } from "@/lib/mock";
import { Key } from "lucide-react";

export default function Dashboard() {
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

      <div className="p-5">
        <Table />
      </div>
    </div>
  );
}
