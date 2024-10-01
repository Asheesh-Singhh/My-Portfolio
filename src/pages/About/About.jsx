import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <section class="about-section">
        <div class="about-header">
          <h2>ABOUT ME</h2>
          <h1>Know Me More</h1>
        </div>

        <div class="about-content">
          <div class="left-column">
            <h2>
              Hi, I'm <span class="highlight">ASHISH SINGH</span>
            </h2>
            <p>
              I'm a designer & developer with a passion for web design. I enjoy
              developing simple, clean and slick websites that provide real
              value to the end user. Thousands of clients have procured
              exceptional results while working with me. Delivering work within
              time and budget which meets client’s requirements is our motto.
            </p>

            <div class="details">
              <div class="detail-item">
                <strong>Name:</strong>
                <p>Ashish Singh</p>

                <strong>Email:</strong>
                <p>
                  <a href="smartt.ashish.11@gmail.com">
                    smartt.ashish.11@gmail.com
                  </a>
                </p>
              </div>
              <div class="detail-item">
                <strong>Date of Birth:</strong>
                <p>01 JANUARY, 2004</p>

                <strong>From:</strong>
                <p>PRYAGRAJ, UP</p>
              </div>
            </div>
          </div>

          <div class="right-column">
            <div class="experience">
              
              <h1 class="highlight"> FRESHER</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
