import Banner from "../assets/images/banner.svg";
import Youtube from "../assets/images/youtube.svg";
import YoutubeIcon from "../assets/images/youtubeicon.svg";

function MainBanner() {
    return (
        <div className="w-11/12 mx-auto text-center items-center gap-y-2 pt-8 lg:flex md:flex md:justify-between">
            <div>
                <img src={Banner} alt="banner" />
            </div>
            <div className="relative inline-block mt-4">
                <img src={Youtube} alt="banner" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={YoutubeIcon} height={50} width={50} alt="banner" />
                </div>
            </div>
        </div>
    );
}

export default MainBanner;
