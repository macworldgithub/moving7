import React from "react";
import { Carousel } from "antd";
import "../../App.css";
import Group38 from "../../assets/images/Group 38.svg";
import Group34 from "../../assets/images/Group 34.svg";
import MovingTruck from "../../assets/images/Moving_Truck.svg";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

function SliderService({ open, setOpen }) {
  return (
    <div className="text-center dots sm:hidden">
      <div className="text-center m-7 lg:bg-slate-600">
        <h2 className="text-black text-3xl font-semibold">Our services</h2>
      </div>
      <Carousel autoplay>
        <div onClick={() => setOpen(true)}>
          <h3 style={contentStyle}>
            <div className="inline-block">
              <div className="inline-block rounded-2xl w-48 bg-primary flex justify-center h-38 p-6 box-shadow">
                <img src={Group38} alt="Local Service" className="w-28" />
              </div>
            </div>
          </h3>
          <div>
            <h4 className="text-sub-head py-6 px-6 text-black h">Local</h4>
          </div>
        </div>
        <div onClick={() => setOpen(true)}>
          <h3 style={contentStyle}>
            <div className="inline-block">
              <div className="inline-block rounded-2xl w-48 bg-primary flex justify-center h-38 p-6 box-shadow">
                <img src={Group34} alt="Local Service" className="w-28" />
              </div>
            </div>
          </h3>
          <div>
            <h4 className="text-sub-head py-6 px-6 text-black h">
              International
            </h4>
          </div>
        </div>
        <div onClick={() => setOpen(true)}>
          <h3 style={contentStyle}>
            <div className="inline-block">
              <div className="inline-block rounded-2xl w-48 bg-primary h-38 p-6 box-shadow">
                <img src={MovingTruck} alt="Local Service" className="w-full" />
              </div>
            </div>
          </h3>
          <div>
            <h4 className="text-sub-head py-6 px-6 text-black h">Commercial</h4>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default SliderService;
