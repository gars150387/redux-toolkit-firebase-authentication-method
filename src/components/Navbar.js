import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../app/auth/thunk";

export const Navbar = () => {
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth);

  const { displayName, photoURL } = useSelector((state) => state.auth);

  const clickToLogout = () => {
    dispatch(startLogout());
  };

  let activeStyle = {
    pDecoration: "underline",
    color: "#212529",
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100% ', border: '1px solid #000' }}>
      <div>
        <h1>{displayName}</h1>
      <img src={photoURL} alt={photoURL} />
      </div>
      
      <div>
        
        {status === "authenticated" ? (
          <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
              <NavLink
                to="/main"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Main
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/profile"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Profile
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/help"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Help
              </NavLink>
            </div>
            <div onClick={clickToLogout}>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Logout
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </div>
          </>
        )}
      </div>
    </nav>
  );
};
