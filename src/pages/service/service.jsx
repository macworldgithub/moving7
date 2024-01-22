import React from "react";
import "../../App.css";
import Group38 from "../../assets/images/Group 38.svg";
import Group34 from "../../assets/images/Group 34.svg";
import MovingTruck from "../../assets/images/Moving_Truck.svg";

import SliderService from "./service_slider";

function Service() {
  return (
    <div className="main text-center w-full">
      <div className="text-center m-12">
        <h2 className="hidden sm:block text-black text-3xl font-semibold">Our services</h2>
      </div>

      <div className="hidden sm:flex md:items-center justify-evenly flex-wrap sm:flex-row w-full sm:py-0 lg:gap-2">
        <div>
          <div className="flex flex-col items-center justify-center rounded-2xl w-48 bg-[#f5f5f5] h-38 p-6 box-shadow">
            <img src={Group38} alt="Local Service" />
          </div>
          <div>
            {/* <h4 >Local</h4> */}
            <button className="text-3xl py-6 px-6 text-gray-400 h">Local</button>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center rounded-2xl w-48 bg-[#f5f5f5] h-38 p-8 box-shadow">
            <img src={MovingTruck} alt="Commercial Service" />
          </div>
          <div>
            <h4 className="text-3xl py-6 px-6 text-gray-400">Commercial</h4>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center rounded-2xl w-48 bg-[#f5f5f5] h-38 p-8 box-shadow">
            <img src={Group34} alt="International Service" />
          </div>
          <div>
            <h4 className="text-3xl py-6 px-6 text-gray-400">International</h4>
          </div>
        </div>
      </div>
      <div>
        <SliderService />
      </div>
    </div>
  );
}

export default Service;
