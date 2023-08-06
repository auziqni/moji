"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import "./navbar.css";
import Dropdown from "./dropdown";
import { useUser } from "@clerk/nextjs";

function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar -mt-6 z-10 ">
      <Link
        href="/"
        className=" flex navbar-logo bg-red-500 h-20 w-20"
        onClick={closeMobileMenu}
      >
        <Image alt="Logo" src="/logo.jpg" width={100} height={60} />
        <i className="fab fa-firstdraft my-auto">MOJI</i>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}>
          <Menu />
        </i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link href="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            href="/#keyfeature"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Services <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link
            href="/#contactus"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </li>

        {isSignedIn ? (
          <></>
        ) : (
          <li className="nav-item">
            <Link
              href="/sign-in"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
        )}

        <li>
          <Link
            href={isSignedIn ? "/dashboard" : "/sign-up"}
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            {isSignedIn ? "Dashboard" : "Sign Up"}
          </Link>
        </li>
      </ul>

      <Button />
    </nav>
  );
}

export default Navbar;
