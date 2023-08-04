import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const data = [
  {
    id: 1,
    imgSrc: "/featmap.png",
    altText: "Map",
    title: "Monitoring",
    text: "Dilengkapi dengan GPS yang dapat melacak lokasi secara real-time dari setiap jamaah haji. Informasi ini dapat ditampilkan pada peta interaktif di web.",
  },
  {
    id: 2,
    imgSrc: "/feattemp.png",
    altText: "temp",
    title: "Suhu Udara",
    text: "Dengan sensor suhu yang akurat. Data ini akan dikumpulkan dan dikirim ke server secara berkala untuk dipantau.",
  },
  {
    id: 3,
    imgSrc: "/feathumid.png",
    altText: "humid",
    title: "Kelembaban Udara",
    text: "Dengan sensor kelembaban yang akurat. Data ini akan dikumpulkan dan dikirim ke server secara berkala untuk dipantau.",
  },
  {
    id: 4,
    imgSrc: "/feateldery.png",
    altText: "eldery",
    title: "Mudah Digunakan",
    text: "mengirimkan notifikasi keadaan darurat jika terdeteksi kondisi berisiko bagi jamaah haji. Petugas akan diberitahu segera untuk mengambil tindakan yang tepat.",
  },
];

export default function KeyFeature() {
  return (
    <section>
      <div className="mb-12 flex flex-col content-center">
        <h1 className="mx-auto mb-2">QUALITY FEATURES</h1>
        <h2 className="mx-auto text-3xl font-bold text-center md:text-2xl">
          Temukan Berbagai Kemudahan
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 lg:mx-32 md:grid-cols-2 md:mx-20 sm:grid-cols-1 xs:grid-cols-1">
        {data.map((item) => (
          <Card
            key={item.id}
            className="p-5 border-black rounded-xl hover:border-green-400"
          >
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={80}
              height={80}
              className="mx-auto  mb-5"
            />

            <h1 className=" mb-5 text-lg font-bold text-center">
              {item.title}
            </h1>
            <h2 className="text-sm text-center">{item.text}</h2>
          </Card>
        ))}
      </div>
    </section>
  );
}
