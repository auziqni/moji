import React from "react";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export default function Dashboard() {
  return (
    <div className="p-5">
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3  mb-10 p-5">
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
      </div>

      <div className="h-40 bg-red-500"></div>
    </div>
  );
}

function Mycard() {
  return (
    <div className=" rounded-xl p-1 pl-2 border border-solid border-black ">
      <h2 className="text-xs">Total Jamaah</h2>
      <h1 className="text-2xl text-right pr-4 font-semibold">1200</h1>
      {/* <h3 className="text-xs">orang</h3> */}
    </div>
  );
}
