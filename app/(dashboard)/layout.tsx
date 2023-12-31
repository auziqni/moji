import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-60">
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
    //
  );
};

export default DashboardLayout;
