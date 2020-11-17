import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
 
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Portfolio
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Projects"
                className={window.location.pathname === "/Projects" ? "nav-link active" : "nav-link"}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar;