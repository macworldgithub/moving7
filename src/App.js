import React from "react";
import "./App.css";
// import Header from "./pages/header/header";
// import HeroSection from "./pages/hero-section";
// import Experience from "./pages/experience";
// import ChooseUs from "./pages/choose_us/choose";
import Compare from "./pages/moving_componies.jsx/compare";
// import Service from "./pages/service/service";
// import CarouselSlider from "./pages/Carousel/Carousel";
// import Footer from "./pages/footer/footer";
// import MovingType from "./pages/moving_type/moving-type";

// import MainBanner from "./components/banner";

import Partner from '../src/pages/partner/partner';

function App() {
  return (
    <div className=" max-w-[1440px] mx-auto">
       {/* <Header />
      <MainBanner />
      <Compare title={"Compare moving companies like:"} />
      <MovingType />
      <Experience />
      <Service />
      <CarouselSlider />
      <ChooseUs />
      <Footer /> */}
      <Partner />
    </div>
  );
}

export default App;
