import "./hero-section.css";
import "../App.css";

// hero section start
function HeroSection() {
  return (
    <div className="hero_section">
      {/* header images */}
      <div className="hero-ring-img">
        <img className="half-shape" src="./images/Ellipse 1.svg" />
        <img className="ring" src="./images/Ellipse 2.svg" />
        <img className="circle" src="./images/Ellipse 5.svg" />
        <img className="second-circle" src="./images/Ellipse 4.svg" />
        <img className="car-img" src="./images/Vector.svg" />
      </div>

      <div className="inner_section">
        <div className="left-container">
          <img src="images/Frame.svg" />
        </div>
        <div className="right-container">
          <h2>
            Efficient and Reliable <br /> <span>Moving Services</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna taliqua.
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

// hero section end
