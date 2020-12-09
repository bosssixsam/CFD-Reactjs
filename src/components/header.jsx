import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

//-- images/icons ---
import hamburger from "../icons/hamberger.svg";
import logo from "../icons/logo.svg";
import HeaderNav from "./HeaderNav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {}, []);

  function toggleBurger() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className={menuOpen ? "open-menu" : ""}>
      <div className="burger" onClick={toggleBurger}>
        <div className="icon-container">
          <img src={hamburger} alt="" />
        </div>
        <span>menu</span>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="user-btns">
        <Link to="/login" className="btn login">
          đăng nhập
        </Link>
        <Link to="/signup" className="btn active">
          đăng ký
        </Link>
      </div>

      <HeaderNav menu={menuOpen} setMenu={setMenuOpen} />
    </header>
  );
}
