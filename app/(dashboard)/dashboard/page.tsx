import React from "react";

import Table from "@/components/table";
import { CardsMonitorJamaah } from "@/lib/mock";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export default function Dashboard() {
  return (
    <div className="p-5">
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3   p-5">
        {CardsMonitorJamaah.map((card) => (
          <div className=" rounded-xl p-1 pl-2 border border-solid border-black ">
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

const Person: React.FC<CardMonitorJamaah> = (personData) => {
  return (
    <div className=" rounded-xl p-1 pl-2 border border-solid border-black ">
      <h2 className="text-xs">{personData.tittle}</h2>
      <h1 className="text-2xl text-right pr-4 font-semibold">
        {personData.jumlah}
      </h1>
      {/* <h3 className="text-xs">orang</h3> */}
    </div>
  );
};
