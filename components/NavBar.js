import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <strong>Logo</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/article/2">Article</Link>
        </li>
        <li>
          <Link href="/2">Two</Link>
        </li>
        <li>
          <button>Button</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
