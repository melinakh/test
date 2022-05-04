import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="panel">
        <NavLink className="link" to={"/shop"}>
          سبد خرید
        </NavLink>
        <NavLink className="link" to={"/admin"}>
          مدیریت
        </NavLink>
      </div>
      <div className="logo-text">
        <h2>فروشگاه سلین</h2>
        <img src={require("../../assetes/images/logo.JPG")} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
