import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import img_logo from "../imgs/logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [menu, setMenu] = useState(true);

  function handleClick() {
    setClick(!click);
  }
  // function closeMenu() {
  //   setMenu(false);
  // }

  return (
    <div className="NavBar">
      <div className="Navigation">
        <div className="nav-container">
          <Link to="/" className="image-logo">
            <img src={img_logo} alt="news-logo" />
          </Link>
          <div className="menu">
            <Link to="/" className="menu-link">
              Home
            </Link>
            <Link to="/" className="menu-link">
              New
            </Link>
            <Link to="/popular" className="menu-link">
              Popular
            </Link>
            <Link to="/" className="menu-link">
              Trending
            </Link>
            <Link to="/" className="menu-link">
              Categories
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
            {/* <FaBars className="menuBars" /> */}
          </div>

          <div className={click ? "menu-small" : "menu-small-close"}>
            <Link to="/" className="menu-link">
              Home
            </Link>
            <Link to="/" className="menu-link">
              New
            </Link>
            <Link to="/popular" className="menu-link">
              Popular
            </Link>
            <Link to="/" className="menu-link">
              Trending
            </Link>
            <Link to="/" className="menu-link">
              Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
