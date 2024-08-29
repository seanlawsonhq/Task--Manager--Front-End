// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fineGirl from "../assets/Fine Girl.png";
import navLogo from "../assets/Nav logo.png";

const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const allNavLinks = () => {
    return location.pathname === "/" ? (
      <>
        <Link to="/new"> New Task</Link>
        <Link to="/tasks">All Task</Link>
      </>
    ) : location.pathname === "/tasks" ? (
      <Link to="/new">New Task</Link>
    ) : location.pathname === "/new" ? (
      <Link to="/tasks">All Task</Link>
    ) : location.pathname === "/edit" || location.pathname === "edit" ? (
      <Link to="/tasks">All Task</Link>
    ) : null;
  };

  return (
    <div className="nav-con">
      <nav className="d-flex align-items-center justify-content-between">
        <Link to="/">
          <img src={navLogo} alt="" />
        </Link>

        <div className="inner-nav d-flex align-items-center justify-content-between">
          {allNavLinks ()}

          <img src={fineGirl} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
