import Banner from "../assets/images/banner.svg";
import Youtube from "../assets/images/youtube.svg";
import YoutubeIcon from "../assets/images/youtubeicon.svg";
import CircleImg from "../assets/images/Ellipse 4.svg"
import CarBg from "../assets/images/Group.svg"

import './banner.css';

function MainBanner() {
    return (
        <div className="w-11/12 mx-auto text-center items-center gap-[4%] gap-y-2 pt-8 lg:flex md:flex md:justify-between">
            <div>
                <img src={Banner} alt="banner" />
            </div>
            <div className="relative inline-block mt-4 sm:right-[24px]">
                <div className="absolute hidden md:block circleImg top-[-85px] sm:top-[-55px]  md:top-[-94px] md:right-[-55px]">
                    <img src={CircleImg} alt="" />
                </div>
                <div>
                    <img src={CarBg} className="absolute md:right-[-80px] lg:top-20 lg:h-[28rem]  hidden md:block" alt="" />
                </div>
                <div className="relative">
                    <img src={Youtube} alt="banner" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={YoutubeIcon} height={50} width={50} alt="banner" />
                </div>
            </div>
        </div>
    );
}

export default MainBanner;
