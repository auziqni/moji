import React from "react";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      <p className="text-lg"> Dashboard (protected)</p>

      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
      <p>
        <a href="/">landingpage</a>
      </p>
      <p>
        <a href="/dashboard">dashboard</a>
      </p>
      <p>
        <a href="/map">map</a>
      </p>
    </div>
  );
}
