import React from "react";

//-- images/icons ---
import hamburger from "../img/icons/hamberger.svg";
import logo from "../img/icons/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="burger">
        <div className="icon-container">
          <img src={hamburger} alt="" />
        </div>
        <span>menu</span>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="user-btns">
        <a className="btn">đăng nhập</a>
        <a className="btn active">đăng ký</a>
      </div>
    </header>
  );
}
