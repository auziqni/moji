import Navbar from "./components/navbar";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
    </div>
    //
  );
};

export default LandingLayout;
