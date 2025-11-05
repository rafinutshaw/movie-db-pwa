import React from "react";

import "./Navbar.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container content">
        <div className="nav-left">
          <Link href="/">Home</Link>
        </div>
        <div className="nav-right"></div>
      </div>
    </nav>
  );
};

export default Navbar;
