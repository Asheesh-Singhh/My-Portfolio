import React, { useEffect, useState } from "react";
import "./skill.css";
import html from "../../assets/html5-brands-solid.svg";
import react from "../../assets/react-brands-solid.svg";
import apple from "../../assets/apple-brands-solid.svg";
import angular from "../../assets/angular-brands-solid.svg";
import java from "../../assets/java.png";
import CP from "../../assets/CP.png";
import app from "../../assets/appdev.svg";
import css from "../../assets/css3-brands-solid.svg";
const Skill = () => {
  const [val, setVal] = useState(0);
  const [htmlVal, setHtml] = useState(0);
  const [CssVal, setCssVal] = useState(0);
  const [cppVal, setcppVal] = useState(0);
  const [javaVal, setjavaVal] = useState(0);
  const [angVal, setangVal] = useState(0);
  function setSkill() {
    setTimeout(() => {
      if (val != 70) setVal((prev) => prev + 1);
      if (htmlVal != 90) setHtml((prev) => prev + 1);
      if (CssVal != 80) setCssVal((prev) => prev + 1);
      if (javaVal != 60) setjavaVal((prev) => prev + 1);
      if (cppVal != 70) setcppVal((prev) => prev + 1);
      if (angVal != 40) setangVal((prev) => prev + 1);
    }, 10);
  }
  useEffect(() => {
    setSkill();
  });
  return (
    <>
      <div className="skill-section">
        <div className="skill-part-1">
          <section className="skills">
            <h2>MY SKILLS</h2>
            <div className="skills-container">
              <div className="skill-box html">
                <img src={html} alt="HTML Icon" />
                <p>HTML</p>
              </div>
              <div className="skill-box css">
                <img src={css} alt="CSS Icon" />
                <p>CSS</p>
              </div>
              <div className="skill-box react">
                <img src={react} alt="React JS Icon" />
                <p>React JS</p>
              </div>
              <div className="skill-box angular">
                <img src={angular} alt="Angular Icon" />
                <p>Angular</p>
              </div>
              <div className="skill-box ios">
                <img src={apple} alt="iOS App Icon" />
                <p>iOS App</p>
              </div>
              <div className="skill-box app-dev">
                <img src={app} alt="App Development Icon" />
                <p>App Dev</p>
              </div>
              <div className="skill-box cpp">
                <img src={CP} alt="C++ Icon" />
                <p>C++</p>
              </div>
              <div className="skill-box java">
                <img src={java} alt="Java Icon" />
                <p>JAVA</p>
              </div>
            </div>
          </section>
        </div>

        <div className="skill-part-2">
          <h1>Skill Chart</h1>
          <div className="skill-chart">
            <div className="range-val">
              <p>HTML</p>
              <p>{htmlVal}%</p>
            </div>
            <div className="range-bar">
              <div
                className="range-slide"
                style={{
                  width: `${htmlVal}%`,
                }}
              ></div>
            </div>
            <div className="range-val">
              <p>CSS</p>
              <p>{CssVal}%</p>
            </div>
            <div className="range-bar">
              <div
                className="range-slide"
                style={{
                  width: `${CssVal}%`,
                }}
              ></div>
            </div>
            <div className="range-val">
              <p>REACT JS</p>
              <p>{val}%</p>
            </div>
            <div className="range-bar">
              <div
                className="range-slide"
                style={{
                  width: `${val}%`,
                }}
              ></div>
            </div>
            <div className="range-val">
              <p>ANGULAR</p>
              <p>{angVal}%</p>
            </div>
            <div className="range-bar">
              <div
                className="range-slide"
                style={{
                  width: `${angVal}%`,
                }}
              ></div>
            </div>
            <div className="range-val">
              <p>C++ DSA</p>
              <p>{cppVal}%</p>
            </div>
            <div className="range-bar">
              <div
                className="range-slide"
                style={{
                  width: `${cppVal}%`,
                }}
              ></div>
            </div>
            <div className="range-val">
              <p>JAVA DEVELOPMENT</p>
              <p>{javaVal}%</p>
            </div>
            <div className="range-bar">
              <div
                className="range-slide"
                style={{
                  width: `${javaVal}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
