import React from "react";
import "./Home.css";
import Dp from "../../assets/dp.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="home-part1">
          <h3>✋MY NAME IS ASHISH SINGH </h3>
          <h2>I'M A FREELANCER</h2>
          <h1>DESIGNER</h1>

          <div className="home-btn">
            <Link to="/Services">
              <button>View My Works</button>
            </Link>
            <Link to="/contact">
              <button>Contact Me</button>
            </Link>
          </div>
        </div>

        <div className="home-part2">
          <div className="dp">
            <img src={Dp} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
