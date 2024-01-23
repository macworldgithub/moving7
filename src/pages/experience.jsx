import React from "react";
import "./experience.css";
import k5 from "../assets/images/5K.svg";
import img230 from "../assets/images/230.svg";
import img15 from "../assets/images/15.svg";
import mouse from "../assets/images/Group 6 (1).svg";

function Experience() {
  return (
    <div className="main-container flex text-[#787878] flex-col items-center justify-evenly pt-6 pb-32 md:pb-20 gap-8 sm:flex sm:flex-row  md:flex-row">
      <div className="absolute mt-[450px] sm:mt-44 md:mt-48">
        <img src={mouse} alt="Mouse" />
      </div>
      <div>
        <img src={k5} alt="Happy Clients" />
        <h2 className="p-y-4 pt-2 lg:text-2xl">Happy Clients</h2>
      </div>
      <div>
        <img src={img230} alt="Moving Companies" />
        <h2 className="p-y-4 pt-2 lg:text-2xl">Moving Companies</h2>
      </div>
      <div>
        <img src={img15} alt="Years of Experience" />
        <h2 className="p-y-4 pt-2 lg:text-2xl">Years of Experience</h2>
      </div>
    </div>
  );
}

export default Experience;
