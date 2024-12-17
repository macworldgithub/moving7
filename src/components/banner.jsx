import Banner from "../assets/images/banner.png";
import Youtube from "../assets/images/youtube.svg";
import YoutubeIcon from "../assets/images/youtubeicon.svg";
import CircleImg from "../assets/images/Ellipse 4.svg";
import BgRing from "../assets/images/Ellipse 5.svg";

import "./banner.css";

function MainBanner({ banner, showCenterCircle, classes }) {
  return (
    <div className="w-full relative  text-center  ">
      <div className="">
        <img
          src={banner ?? Banner}
          alt="banner"
          className={`${banner ? "" : "sm:h-[70vh]"} w-full ${classes ? classes : ""} `}
        />
      </div>
      <div className="absolute top-[-4rem] right-0">
        <img src={CircleImg} alt="" />
      </div>
      <div className="absolute top-8 right-[44%]">
        {showCenterCircle === "no" ? null : (
          <img className="max-sm:hidden" src={BgRing} alt="" />
        )}
      </div>
    </div>
  );
}

export default MainBanner;
