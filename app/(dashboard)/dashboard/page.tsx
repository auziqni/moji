// import { PrismaClient } from "@prisma/client";
import InfoCounter from "@/components/infoCounter";
import { DialogAdd } from "@/components/dialogAdd";
import Table from "@/components/table";
// import { auth } from "@clerk/nextjs";

// const prisma = new PrismaClient();
import { GetDataAllJamaah, GetDataAdmin } from "@/lib/getdata";

// const GetDataAllJamaah = async () => {
//   const res = await prisma.jamaah.findMany({
//     // const res = await prisma.AllJamaah.findMany({
//     select: {
//       id: true,
//       name: true,
//       ismale: true,
//       age: true,
//       province: true,
//       group: true,
//       namaPengurus:true,
//       lat: true,
//       lng: true,
//       temp: true,
//       humid: true,
//     },
//   });
//   return res;
// };

export default async function Dashboard() {
  // const { use } = auth();
  const DataAdmin = await GetDataAdmin();
  console.log(DataAdmin?.name);
  const DataAllJamaah = await GetDataAllJamaah();

  // const data = await prisma.userCommunication.findUnique({
  //   where: { UserId: userId ?? "" },
  // });

  // if (!data) {
  //   await prisma.userCommunication.create({
  //     data: { UserId: userId ?? "" },
  //   });
  // }

  // useEffect(() => {
  //   const newArray = props.filter((obj: AllJamaah) => {
  //     const distance = calculateDistance(
  //       myLocation?.lat ?? center.lat,
  //       myLocation?.lng ?? center.lng,
  //       obj.Lat ?? center.lat,
  //       obj.Lng ?? center.lng
  //     );
  //     console.log(distance);
  //     return distance > 7.5;
  //   });
  //   myLocation ? setjamaahOutranged(newArray) : "";
  // }, []);

  return (
    <div className="p-10">
      <div className="mb-6 ">
        <InfoCounter props={DataAllJamaah} />
      </div>

      <div className="flex justify-between mb-2 ">
        <h1 className=" my-auto font-bold">Data Jamaah</h1>
        <DialogAdd />
      </div>

      <div className="">
        <Table props={DataAllJamaah} />
      </div>
    </div>
  );
}
