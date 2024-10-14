import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import "./Layout.css"; // Ensure the path is correct

const Layout = () => {
  return (
    <>
      <header className="header">
        <h1 className="header-title">
          <Link to="/">Cloud Kitchen</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
