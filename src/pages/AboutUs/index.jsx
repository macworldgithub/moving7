import React from "react";

import Experience from "../experience";
import ChooseUs from "../choose_us/choose";
import Compare from "../../pages/moving_componies/compare";
import Service from "../service/service";
import CarouselSlider from "../Carousel/Carousel";
import Footer from "../footer/footer";
import MovingType from "../moving_type/moving-type";

import MainBanner from "../../components/banner";
import AvailablePartners from "../../components/AvailablePartners";

export default function AboutUs() {
  return (
    <div>
      <MainBanner />
      <div className="mt-20 mx-5 md:mx-20 mb-20">
        <h1 className="text-[25px] md:text-[30px] font-medium mb-5">Moving 7- Your All-In-One Moving Services  </h1>
        <p className="text-[20px] md:text-[20px] font-light 2xl:mr-[14rem]">Moving 7 is your go-to-go partner in relocation, packing, unpacking, and setting your belongings from local, and commercial to international services in UAE. We ensure you focus on what is important, and we take care of the relocation hassles. With a competent staff, modern equipment, and transportation, we strive to create a flawless service that guarantees client pleasure.</p>
        <h1 className="text-[25px] md:text-[30px] font-medium mb-5 mt-10">For Consumers </h1>
        <p className="text-[20px] md:text-[20px] font-light 2xl:mr-[14rem]">
        Relocation is such a challenging and daunting task. Packing, searching for transportation, unpacking, and settling into a new location is quite time-consuming and a great hassle. Moving 7 provides local, business, and international relocation services ranging from the local to the international level. 
          <br/>
          <br/>
          We strive to create seamless operations by delivering high-quality moving services, allowing you to get off to a strong start in a new environment with new memories.
           <br/>
        </p>
        <h1 className="text-[25px] md:text-[30px] font-medium mt-10 mb-5">For Companies</h1>
        <p className="text-[20px] md:text-[20px] font-light 2xl:mr-[14rem]">Moving 7 is the best opportunity for new moving startups looking for collaboration and partnership with other moving firms. We offer seamless integration, and online portals to register, select your preferences, and get leads so you can run your business at your own pace..</p>
      </div>
      <Footer />
    </div>
  );
}