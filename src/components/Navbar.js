import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  let activeStyle = {
    pDecoration: "underline",
    color: "#212529",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
