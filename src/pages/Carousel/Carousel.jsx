import React from "react";
import { Carousel } from "antd";
import "../Carousel/carousel.css";
import TCard from "../TCard";
const contentStyle = {
  height: "160px",
  color: "#fff",
  textAlign: "center",
  color: "#000",
};

const data = [
  {
    description: (
      <div>
        <p>Dear Moving7,</p>

        <p>
          We wanted to express our gratitude for your assistance. Your services
          have helped us save a significant amount of money and connect with a
          reliable relocation company.
        </p>
      </div>
    ),
    name: "Jennifer Lawrence",
    companyName: "",
  },
  {
    description: (
      <div>
        <p>Hi Moving7,</p>

        <p>
          Our recent relocation from Virginia to Dubai was handled with great
          care, thanks to the professional moving company we found through your
          platform.
        </p>

        <p>
          We would highly recommend Moving7 to anyone in need of international
          moving services. Your assistance in finding a reliable and
          professional moving company made our transition smooth and
          stress-free.
        </p>

        <p>Thank you for your excellent service.</p>
      </div>
    ),
    name: "Tom Hanks",
    companyName: "",
  },
  {
    description: (
      <div>
        <p>Moving7 Team,</p>

        <p>
          I am writing to express my satisfaction with the service. After
          spending a significant amount of time researching moving companies on
          Google for my recent local move, I was unable to find suitable
          options. However, upon visiting your website, I was able to quickly
          and easily find reliable moving companies with competitive pricing.
        </p>

        <p>
          Thank you for providing such an excellent service. I would highly
          recommend Moving7 to anyone in need of moving services.
        </p>
      </div>
    ),
    name: "Mariyam",
    companyName: "",
  },
];

const CarouselSlider = () => (
  <>
    <div className="mx-auto p-2 mb w-[90%] sm:w-[90%] md:w-1/2 lg:w-1/2">
      <div className="text-center text-2xl pb-4 font-bold pt-6">
        <h2 className="text-heading">What Our Customer Says</h2>
      </div>
      <Carousel autoplay>
        {data.map((card) => {
          return (
            <TCard
              description={card.description}
              name={card.name}
              companyname={card.companyName}
            />
          );
        })}
      </Carousel>
    </div>
  </>
);
export default CarouselSlider;
