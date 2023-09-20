import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // Import your CSS file

const Menu = () => {
  return (
    <div className="menu-container">
      
        <h1 className="page-title">Home Page</h1>

        <div className="home-box">
        <p className="quote quote-box">
          "Finding the best medicine is as important as finding the best doctor."
        </p>
        <ul className="menu-list">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Menu;
