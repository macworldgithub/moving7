import React from "react";
import { Carousel } from 'antd';
import "../../App.css";
import Group38 from "../../assets/images/Group 38.svg";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

function SliderService() {
  return (
    <div className="text-center dots sm:hidden">
      <div className="text-center pb-8">
        <h2 className="text-black text-3xl font-semibold">Our services</h2>
      </div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <div className="inline-block">
              <div className="inline-block rounded-2xl w-48 bg-[#f5f5f5] h-38 p-6 box-shadow">
                <img src={Group38} alt="Local Service" />
              </div>
              <div>
                <h4 className="text-3xl py-6 px-6 text-gray-400 h">Local</h4>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className="inline-block">
              <div className="inline-block rounded-2xl w-48 bg-[#f5f5f5] h-38 p-6 box-shadow">
                <img src={Group38} alt="Local Service" />
              </div>
              <div>
                <h4 className="text-3xl py-6 px-6 text-gray-400 h">Local</h4>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div className="inline-block">
              <div className="inline-block rounded-2xl w-48 bg-[#f5f5f5] h-38 p-6 box-shadow">
                <img src={Group38} alt="Local Service" />
              </div>
              <div>
                <h4 className="text-3xl py-6 px-6 text-gray-400 h">Local</h4>
              </div>
            </div>
          </h3>
        </div>
      </Carousel >
    </div>
  );
}

export default SliderService;
