"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { MapIcon, LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
// import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Map",
    icon: MapIcon,
    href: "/map",
    color: "text-violet-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

// todo : kalo bagian dipilih maka sidebar nutup
export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4  flex flex-col h-full bg-[#001f00] text-black">
      <div className="h-32  py-5">
        <Link
          href="/dashboard"
          className="flex items-center pl-3 mb-14 mx-auto"
        >
          <div
            className="relative h-20 w-20
           mr-4"
          >
            <Image fill alt="Logo" src="/logo.jpg" sizes="" priority={true} />
          </div>
          <h1
            className={cn(
              "text-2xl font-bold text-yellow-500",
              poppins.className
            )}
          >
            MoJi
          </h1>
        </Link>
      </div>
      <div className="px-3 py-2 flex-1 ">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
