import React from "react";
import banner from "../../assets/images/Logiin 1.png";
import ChooseUs from "./form/parthnerChooseUs/chooseUs";
import Compare from "../moving_componies/compare";
import Steps from "./steps/Partnerbenefits";
import Benefits from "./benefits/benefits";
import CarouselSlider from "../Carousel/Carousel";
import Rating from "./rating/rating";
import PartnerFaq from "./faq";
import FreeTrialForm from "./form/parthnerChooseUs/PartnerForm/index";
import RingImg from "../../assets/images/Ellipse 5.svg";
//import Banner from "../../assets/images/Banner-01.png"
import Footer from "../footer/footer";
import Banner from "../../assets/images/03-01.svg";
import CircleImg from "../../assets/images/Ellipse 4.svg";
import BgRing from "../../assets/images/Ellipse 5.svg";

export default function Partner() {
  return (
    <div className="relative">
      <div className="w-full relative  text-center  ">
        <div className="">
          <img src={Banner} alt="banner" className="w-full" />
        </div>
        <div className="absolute top-[-4rem] right-0">
          <img src={CircleImg} alt="" />
        </div>
        <div className="absolute top-8 right-[44%]">
          <img className="max-sm:hidden" src={BgRing} alt="" />
        </div>
        {/*
                <div className="relative">
                <img src={Youtube} alt="banner" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={YoutubeIcon} height={50} width={50} alt="banner" />
                </div>
                */}
      </div>

      {/* 
                <div className=" flex items-center justify-center text-white mt-1 sm:mt-6 lg:mt-12">
                <div className="absolute p-8 z-10 mt-6 md:ml-12 lg:ml-32 lg:mt-[-70px]">
                <h3 className="text-md text-gray-500 font-light md:text-xl md:pb-1 lg:mb-4">
                Join Moving 7’s Network of Relocation Experts
                </h3>
                <h2 className=" text-xl font-medium md:w-3/5 md:text-2xl lg:text-[38px] text-gray-600">
                Elevate Your Business with Us

                </h2>
                <p className="text-md font-light md:text-xl md:w-1/2 lg:pt-8 text-gray-500">
                Are you ready to elevate your relocation business and connect with more clients? At Moving 7, we offer relocation companies like yours an unparalleled opportunity to expand your reach and attract new business through our dynamic platform.
                </p>
                </div>
                <img src={Banner} className='h-64 w-11/12 lg:h-[470px]' alt="" />
                <img className=' hidden lg:block absolute lg:top-[-40px] lg:ml-28' src={RingImg} alt="" />
                </div>
            * */}

      <FreeTrialForm />
      <ChooseUs />
      <Compare title={"5000+ Partner businesses and counting"} />
      <Steps />
      <Benefits />
      <CarouselSlider />
      <Rating />
      <PartnerFaq />
      <Footer />
    </div>
  );
}
