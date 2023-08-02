import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

// import { MobileSidebar } from "@/components/mobile-sidebar";
// import { getApiLimitCount } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  //   const apiLimitCount = await getApiLimitCount();
  //   const isPro = await checkSubscription();
  // bg-[#E4EFE7]
  return (
    <div className="flex w-full items-center p-4 shadow-lg bg-white  border border-solid border-b-black">
      <MobileSidebar />
      {/* <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} /> */}
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
