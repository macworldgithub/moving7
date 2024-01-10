import React from "react";
import "./App.css";
import Header from "./pages/header/header";
import HeroSection from "./pages/hero-section";
import Experience from "./pages/experience";

function App() {
  return (
    <div className="main-container">
      <Header />
      <HeroSection />
      <Experience />
    </div>
  );
}

export default App;
