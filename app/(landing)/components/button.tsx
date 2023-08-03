import React from "react";
import "./Button.css";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export function Button() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <>
      {isSignedIn ? (
        <Link href="/dashboard">
          <button className="btn">Dashboard</button>
        </Link>
      ) : (
        <Link href="sign-up">
          <button className="btn">Sign Up</button>
        </Link>
      )}
    </>
  );
}
