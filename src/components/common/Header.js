import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Employees
      </NavLink>
      {" | "}
      <NavLink to="/employee" activeStyle={activeStyle}>
        Register
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
