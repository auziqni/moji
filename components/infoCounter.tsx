import React from "react";
import type { AllJamaah } from "@prisma/client";

export default function InfoCounter({ props }: { props: AllJamaah[] }) {
  const CardsMonitorJamaah: CardMonitorJamaah[] = [
    {
      id: 1,
      tittle: "Jumlah Jamaah",
      jumlah: props.length,
    },
    {
      id: 2,
      tittle: "Jamaah Pria",
      jumlah: props.filter((person) => person.Ismale).length,
    },
    {
      id: 3,
      tittle: "Jamaah Wanita",
      jumlah: props.filter((person) => !person.Ismale).length,
    },

    {
      id: 4,
      tittle: "Jumlah Jamaah Lansia",
      jumlah: props.filter((person) => person.Age > 50).length,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
      {CardsMonitorJamaah.map((card: CardMonitorJamaah) => (
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
  );
}
