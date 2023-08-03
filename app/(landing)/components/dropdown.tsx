import React, { useState } from "react";
import { MenuItems } from "./menuitems";
import "./Dropdown.css";
import Link from "next/link";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item: any, index: any) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
