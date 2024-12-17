import React from "react";
import "../../App.css";
import Group38 from "../../assets/images/Group 38.svg";
import Group34 from "../../assets/images/Group 34.svg";
import MovingTruck from "../../assets/images/Moving_Truck.svg";

import SliderService from "./service_slider";

function Service({ open, setOpen }) {
  return (
    <div className="main text-center w-full">
      <div className="text-center m-12">
        <h2 className="hidden sm:block text-black text-heading font-semibold">
          Our services
        </h2>
      </div>

      <div className="hidden sm:flex md:items-center justify-evenly flex-wrap sm:flex-row w-full sm:py-0 lg:px-[80px] cursor-pointer">
        <div onClick={() => setOpen(true)}>
          <div className="flex flex-col items-center justify-center rounded-2xl w-48 bg-primary h-38 p-6 shadow-md">
            <img src={Group38} alt="Local Service" />
          </div>
          <div>
            {/* <h4 >Local</h4> */}
            <button className="text-sub-head py-6 px-6 text-gray-400 h">
              Local
            </button>
          </div>
        </div>

        <div onClick={() => setOpen(true)}>
          <div className="flex flex-col items-center justify-center rounded-2xl w-48 bg-primary h-38 p-8 shadow-md">
            <img src={MovingTruck} alt="Commercial Service" />
          </div>
          <div>
            <h4 className="text-sub-head py-6 px-6 text-gray-400">
              Commercial
            </h4>
          </div>
        </div>

        <div onClick={() => setOpen(true)}>
          <div className="flex flex-col items-center justify-center rounded-2xl w-48 bg-primary h-38 p-8 shadow-md">
            <img src={Group34} alt="International Service" />
          </div>
          <div>
            <h4 className="text-sub-head py-6 px-6 text-gray-400">
              International
            </h4>
          </div>
        </div>
      </div>
      <div>
        <SliderService open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Service;
