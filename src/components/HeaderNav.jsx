import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav({ menu, setMenu }) {
  return (
    <>
      <nav className="Burger-nav">
        <Link to="/">Trang Chủ</Link>
        <Link>Khóa Học</Link>
        <Link to="/team">CFD Team</Link>
        <Link to="/faq">Hỏi Đáp</Link>
        <Link to="/contact">Hợp Tác</Link>
      </nav>
      <div className="background-nav" onClick={() => setMenu(!menu)}></div>
    </>
  );
}
