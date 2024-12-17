import React from "react";
import "./experience.css";
import k5 from "../assets/images/5K +.svg";
import img230 from "../assets/images/230 +.svg";
import img15 from "../assets/images/15.svg";
import mouse from "../assets/images/Group 6 (1).svg";

function Experience() {
  return (
    <div className="main-container flex text-[#787878] flex-col items-center justify-evenly pt-6 pb-32 md:pb-20 gap-8 sm:flex sm:flex-row  md:flex-row">
      <div className="absolute mt-[450px] sm:mt-44 md:mt-48">
        <img src={mouse} alt="Mouse" />
      </div>
      <div>
        <h2 className="text-primary font-bold text-[3.5rem] text-center leading-[1.8rem]">
          100k+
        </h2>
        <h2 className="p-y-4 text-sub-head pt-2 lg:text-2xl">
          Leads Generated
        </h2>
      </div>
      <div>
        <h2 className="text-primary font-bold text-[3.5rem] text-center leading-[1.8rem]">
          180+
        </h2>
        <h2 className="p-y-4 pt-2 lg:text-2xl text-sub-head">Countries</h2>
      </div>
      <div>
        <h2 className="text-primary font-bold text-center text-[3.5rem] leading-[1.8rem]">
          2000+
        </h2>
        <h2 className="p-y-4 pt-2 text-sub-head lg:text-2xl">Cities</h2>
      </div>
      <div>
        <h2 className="text-primary bg-0 text-center font-bold text-[3.5rem] leading-[1.8rem]">
          20+
        </h2>
        <h2 className="p-y-4 pt-2 lg:text-2xl text-sub-head">
          Years of Experience
        </h2>
      </div>
    </div>
  );
}

export default Experience;
