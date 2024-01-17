import React from "react";
import "./hero-section.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero_section h-auto relative">
      {/* header images */}
      <div className="hero-ring-img">
        <img className="half-shape" src="./images/Ellipse 1.svg" alt="Half Shape" />
        <img className="ring" src="./images/Ellipse 2.svg" alt="Ring" />
        <img className="circle" src="./images/Ellipse 5.svg" alt="Circle" />
        <img className="second-circle" src="./images/Ellipse 4.svg" alt="Second Circle" />
        {/* <img className="car-img" src="./images/Vector.svg" alt="Car Image" /> */}
      </div>

      <div className="inner_section flex items-center justify-between pt-48 overflow-hidden">
        <div className="left-container">
          <img src="images/Frame.svg" alt="Frame" />
        </div>
        <div className="right-container">
          <h2 className="text-4xl bg-red-700">
            Efficient and Reliable <br /> <span>Moving Services</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
