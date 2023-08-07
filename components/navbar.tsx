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
    <div className="flex sticky z-20 h-12 p-4 shadow-lg bg-white border-solid ">
      <MobileSidebar />
      <h1>{getPageDecription(pathName)}</h1>
      {/* <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} /> */}
      <div className="flex w-full justify-end p-3">
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
