import React from "react";
import "./Button.css";
import Link from "next/link";

export function Button() {
  return (
    <Link href="sign-up">
      <button className="btn">Sign Up</button>
    </Link>
  );
}
