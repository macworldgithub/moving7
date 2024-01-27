import React from "react";
import "./App.css";
import Header from "./pages/header/header";
import HeroSection from "./pages/hero-section";
import Experience from "./pages/experience";
import ChooseUs from "./pages/choose_us/choose";
import Compare from "./pages/moving_componies.jsx/compare";
import Service from "./pages/service/service";
import CarouselSlider from "./pages/Carousel/Carousel";
import Footer from "./pages/footer/footer";
import MovingType from "./pages/moving_type/moving-type";

import MainBanner from "./components/banner";

function App() {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <Header />
      <MainBanner />
      {/* <MovingType />
      <Experience />
      <Compare />
      <Service />
      <CarouselSlider />
      <ChooseUs />
      <Footer /> */}
    </div>
  );

  let onLocalClick = () => {};
}

export default App;
