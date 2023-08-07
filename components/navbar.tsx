"use client";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  // const currentPage = router.pathname;

  // bg-[#E4EFE7]
  return (
    <div className="flex sticky inset-0 justify-between z-20 h-16 p-4 shadow-lg ">
      <MobileSidebar />
      <h1>{getPageDecription(pathName)}</h1>
      {/* <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} /> */}
      <div className="">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;

function getPageDecription(path: string) {
  switch (path) {
    case "/":
      return "Home";
    case "/map":
      return "Map";
    case "/settings":
      return "Settings";
    default:
      return "Dashboard";
  }
}
