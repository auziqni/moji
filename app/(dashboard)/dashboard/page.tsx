import React from "react";

export default function Dashboard() {
  return (
    <div>
      <p className="text-lg"> Dashboard (protected)</p>

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
