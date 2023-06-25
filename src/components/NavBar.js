import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar bg-white">
      <div className="container-fluid d-flex justify-content-center shadow">
        <Link to={"/"}>
          <div className="navbar-brand fs-1">
            <img src="logo.png" className="" alt="logo" />
          </div>
        </Link>
        <div>
          <ul className="menu-bar bg-white">
            <li>
              <Link
                to={"/TermsConditions"}
                className="menu-bar-item menu-button"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to={"/PrivacyPolicy"} className="menu-bar-item menu-button">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/ReturnRefund"} className="menu-bar-item menu-button">
                Return & Refund
              </Link>
            </li>
            <li>
              <Link to={"/Contact"} className="menu-bar-item menu-button">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
