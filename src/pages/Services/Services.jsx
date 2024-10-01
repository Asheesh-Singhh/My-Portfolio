import React from "react";
import "./services.css"
import webImg from "../../assets/Computer.png"
import Ux from "../../assets/ui-ux.png"
import paint from "../../assets/paint-box.png"
import appDEV from "../../assets/app-development.png"
import business from "../../assets/analysis.png"
import seo from "../../assets/seo.png"
const Services = () => {
  return (
    <>
      <section class="services">
        <h2>How I can help your next project</h2>
        <div class="service-container">
          <div class="service-box">
            <img src={paint} alt="Graphic Design Icon" />
            <h3>Graphic Design</h3>
            <p>
             I have created a graphic design project for you to create a graphic with your project and you will be able to create a graphic with your project 
            </p>
          </div>
          <div class="service-box">
            <img src={webImg} alt="Web Design Icon" />
            <h3>Web Design</h3>
            <p>
              I have created a web design project for you to create a web design.
            </p>
          </div>
          <div class="service-box">
            <img src={Ux} alt="UI/UX Design Icon" />
            <h3>UI/UX Design</h3>
            <p>
              
              I have created a UI/UX design project for you to create a UI/UX design. you can give me work to create your project.
            </p>
          </div>
          <div class="service-box">
            <img src={appDEV} alt="App Design Icon" />
            <h3>App Design & Develop</h3>
            <p>
              In App Design, I am a developer of the app design project.
            </p>
          </div>
          <div class="service-box">
            <img src={business} alt="Business Analysis Icon" />
            <h3>Business Analysis</h3>
            <p>
             I have some knowledge of business analysis.
            </p>
          </div>
          <div class="service-box">
            <img src={seo} alt="SEO Marketing Icon" />
            <h3>SEO Marketing</h3>
            <p>
              I am also intrest in the SEO Marketing
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
