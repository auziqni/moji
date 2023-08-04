import Navbar from "./components/navbar";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
      {/* <h1>{createTitle("title")}</h1> */}
      {/* <CreateTitle title={true}> */}
    </div>
    //
  );
};

export default LandingLayout;
