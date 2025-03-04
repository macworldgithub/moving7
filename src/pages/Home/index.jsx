import React, { useState } from "react";

import Experience from "../experience";
import ChooseUs from "../choose_us/choose";
import Compare from "../../pages/moving_componies/compare";
import Service from "../service/service";
import CarouselSlider from "../Carousel/Carousel";
import Footer from "../footer/footer";
import MovingType from "../moving_type/moving-type";

import MainBanner from "../../components/banner";
import AvailablePartners from "../../components/AvailablePartners";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <MainBanner />
      {/*
          <Compare title={"Moving7 - Your Trusted Partner in Moving Services!"} />
          */}
      <MovingType open={open} setOpen={setOpen} />
      <Experience />
      <Service open={open} setOpen={setOpen} />
      <CarouselSlider />
      <ChooseUs />
      <Footer />
    </div>
  );
}
