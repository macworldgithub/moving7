import React from "react";
import Footer from "../footer/footer";
import MainBanner from "../../components/banner";
import Banner from "../../assets/images/02-01.svg";
import { useParams } from "react-router-dom";
import { MovingToCountryData } from "../../utils/data";

export default function MovingToCountry() {
  const { country } = useParams();

  let renderData = MovingToCountryData.filter((elem) => elem.value === country);

  renderData.length ? (renderData = renderData[0]) : (renderData = {});

  return (
    <div>
      <div className="flex justify-center mx-">
        <img
          src={renderData.banner}
          className="h-[70vh] max-sm:h-[30vh] max-md:h-[50vh] max-lg:h-[60vh] w-full"
        />
      </div>
      {renderData.content}
      <Footer />
    </div>
  );
}
