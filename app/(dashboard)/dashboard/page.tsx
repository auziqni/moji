import InfoCounter from "@/components/infoCounter";
import { DialogAdd } from "@/components/dialogAdd";
import Table from "@/components/table";

import { GetDataAllJamaah, GetDataAdmin } from "@/lib/getdata";

export default async function Dashboard() {
  const DataAllJamaah = await GetDataAllJamaah();
  const DataAdmin = await GetDataAdmin();
  //hihi
  return (
    <div className="p-10">
      <div className="mb-6 ">
        <InfoCounter props={DataAllJamaah} />
      </div>

      <div className="flex justify-between mb-2 ">
        <h1 className=" my-auto font-bold">
          Data Jamaah <span>{DataAdmin?.name}</span>
        </h1>
        <DialogAdd namaPengurus={DataAdmin?.name ?? ""} />
      </div>

      <div className="">
        <Table props={DataAllJamaah} />
      </div>
    </div>
  );
}
