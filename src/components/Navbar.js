import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from "../app/auth/thunk";

export const Navbar = () => {

  const dispatch = useDispatch()

  const {displayName, photoURL} = useSelector((state) => state.auth)

  const clickToLogout= () =>{
    dispatch( startLogout() )
  }

  let activeStyle = {
    pDecoration: "underline",
    color: "#212529",
  };

  return (
    <nav>
      <h1>{ displayName }</h1>
      <img src={ photoURL } alt={ photoURL } />
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
        <li onClick={ clickToLogout }>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
