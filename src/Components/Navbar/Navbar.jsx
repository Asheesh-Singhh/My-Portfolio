import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="Nav-part-1">
        <h1>ASHISH.TECH</h1>
      </div>
      <div className="Nav-part-2">
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/about">ABOUT</Link>
        </div>
        <div>
          <Link to="/services">SERVICES</Link>
        </div>
        <div>
          <Link to="/skill">SKILLS</Link>
        </div>

        <div>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      <div className="Nav-btn">
        <a href="https://drive.google.com/file/d/1B5OtYb4uZwF9akIiTxNhE4X4-G2ff0VL/view?usp=sharing" target="_blank">
          <button>RESUME</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
