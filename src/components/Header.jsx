import React from "react";
import logo from "../image/image 2 (2).png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="" />
          <nav>
            <Link to="/menu">
              <h3>menu</h3>
            </Link>
            <Link to="/orders">
              <h3>orders</h3>
            </Link>
            <Link to="/admin">
              <h3>admin</h3>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
