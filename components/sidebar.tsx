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

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4  flex flex-col h-full bg-[#f3f3f3] text-black">
      <div className="h-20 bg-green-700 py-5">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
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
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-black hover:bg-green-900/20 rounded-lg transition",
                pathname === route.href
                  ? "text-black bg-green-900/20"
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
