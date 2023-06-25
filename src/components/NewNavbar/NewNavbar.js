import React from "react";
import { Link } from "react-router-dom";
import "../NewNavbar/NewNavbar.scss";
import Logo from "../../images/logo.png";
import NavIcon from "../../images/nav-icon.png";

const NewNavbar = () => {
  return (
    <div className="nav-section-wrapper fixed-top">
      <div className="container">
        <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light custom-margin">
          <Link to={"/"}>
            <a class="navbar-brand" href="#">
              <div className="logo-section ">
                <img src={Logo} alt={Logo} className="src" />
              </div>
            </a>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
          >
            <img src={NavIcon} alt={NavIcon} srcset="" />
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li>
                <Link
                  to={"/TermsConditions"}
                  className="menu-bar-item menu-button"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to={"/PrivacyPolicy"}
                  className="menu-bar-item menu-button"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/ReturnRefund"}
                  className="menu-bar-item menu-button"
                >
                  Return & Refund
                </Link>
              </li>
              <li id="contact">
                <Link to={"/Contact"} className="menu-bar-item menu-button">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NewNavbar;
