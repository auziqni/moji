import Image from "next/image";
import KeyFeature from "./components/landing/features";
export default function page() {
  return (
    <main className="mx-10">
      <div className="h-screen z-0 my-5 ">
        <Image alt="Logo" src="/landingbgnew.jpg" fill priority={true} />
      </div>

      <div className="h-screen bg-white my-5 ">
        <KeyFeature />
      </div>

      <div className="h-screen bg-sky-300 my-5 ">tentang kami</div>
    </main>
  );
}
