import React from "react";
import { Carousel } from "antd";
import "./company.css";
import logo from "../../assets/images/Logo 1.svg";

const SliderLogo = () => (
  <div className="dots relative mx-auto top-1/2 transform -translate-y-1/2 mt-9">
    <Carousel autoplay>
      <div className="inline-block">
        <img src={logo} alt="" className="mx-auto" />
      </div>
      <div className="inline-block">
        <img src={logo} alt="" className="mx-auto" />
      </div>
      <div className="inline-block">
        <img src={logo} alt="" className="mx-auto" />
      </div>
    </Carousel>
  </div>
);

export default SliderLogo;
