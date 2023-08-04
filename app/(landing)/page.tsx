import Image from "next/image";
import KeyFeature from "./components/landing/features";
export default function page() {
  return (
    <main className="mx-10">
      <section className="h-screen z-0 my-5 ">
        <Image alt="Logo" src="/landingbgnew.jpg" fill priority={true} />
      </section>

      <section id="keyfeature" className="mb-10  my-5 ">
        <KeyFeature />
      </section>

      <section
        id="contactus"
        className="grid  sm:grid-cols-1  sm:rounded-tr-3xl md:grid-cols-2 md:rounded-tr-full my-5 "
      >
        <div className=" ">
          <Image alt="data" src="/aboutus.png" width={600} height={500} />
        </div>
        <div className="p-8 lg:pt-28 ">
          <h1 className="text-3xl font-bold">Moji </h1>
          <h2 className="font-bold mb-5 ml-3">Monitoring haji</h2>
          <h2 className="text-justify mb-10">
            Moji, aplikasi web inovatif, memberikan pemantauan lokasi, suhu
            udara, dan kelembaban jemaah haji. Memastikan petugas mendapat data
            real-time untuk menjaga jamaah dengan baik dan mencegah kesesatan.
            Keamanan, kenyamanan, dan efisiensi menjadi prioritas,
            mengoptimalkan pengalaman ibadah para peziarah di tanah suci.
          </h2>
          <div className="grid grid-cols-3">
            <div className="">
              {" "}
              <h1 className="font-bold">TIM</h1>
              <h1>TMoji Team</h1>
            </div>
            <div className="">
              {" "}
              <h1 className="font-bold">Email</h1>
              <h1>moji@mail.com</h1>
            </div>
            <div className="">
              <h1 className="font-bold">Alamat</h1>
              <h1>jl.kemana saja hayuk no.0821</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
