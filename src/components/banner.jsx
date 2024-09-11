import Banner from "../assets/images/banner.png";
import Youtube from "../assets/images/youtube.svg";
import YoutubeIcon from "../assets/images/youtubeicon.svg";
import CircleImg from "../assets/images/Ellipse 4.svg";
import BgRing from "../assets/images/Ellipse 5.svg";

import "./banner.css";

function MainBanner({ banner, showCenterCircle }) {
    return (
        <div className="w-full relative  text-center  ">
            <div className="">
                <img src={banner ?? Banner} alt="banner" className={`${banner ? ""  :"sm:h-[70vh]"} w-full `} />
            </div>
            <div className="absolute top-[-4rem] right-0">
                <img src={CircleImg} alt="" />
            </div>
            <div className="absolute top-8 right-[44%]">
                {
                    showCenterCircle === "no" ? (
                        null
                    ) : (
                        <img className="max-sm:hidden" src={BgRing} alt="" />
                    )
                }
            </div>
            {
                /*
                <div className="relative">
                <img src={Youtube} alt="banner" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={YoutubeIcon} height={50} width={50} alt="banner" />
                </div>
                */
            }
        </div>
    );
}

export default MainBanner;
