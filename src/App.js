import React from "react";
import "./App.css";
import Header from "./pages/header/header";
import HeroSection from "./pages/hero-section";
import Experience from "./pages/experience";
import ChooseUs from "./pages/choose_us/choose";
import Compare from "./pages/moving_componies.jsx/compare";
import Service from "./pages/service/service";
import Footer from "./pages/footer/footer";

function App() {
  return (
    <div className="main-container">
      <Header />
      <HeroSection />
      <Experience />
      <ChooseUs />
      <Compare />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
