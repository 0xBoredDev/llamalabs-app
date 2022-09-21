import React from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg" id="navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler header-icon"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <MdMenu />
        </button>
        <div className="navbar-collapse collapse" id="navbarNav">
          <div className="header-links">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#llamaverse">
                  llamaverse
                </a>
              </li>
              <li className="nav-item">
                <span className="divider">|</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#whitelistping">
                  whitelistping
                </a>
              </li>
              <li className="nav-item">
                <span className="divider">|</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#operationsin">
                  operationsin
                </a>
              </li>
              <li className="nav-item">
                <span className="divider">|</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#nucyber">
                  nucyber
                </a>
              </li>
              <li className="nav-item">
                <span className="divider">|</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gosutools">
                  gosutools
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
