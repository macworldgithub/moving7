import React from "react";

import Manager from "../../../assets/images/benefits/dedication 1.svg";
import Leads from "../../../assets/images/benefits/pay-per-lead 1.svg";
import Setting from "../../../assets/images/benefits/settings 1.svg";
import Pay from "../../../assets/images/benefits/quality 1.svg";
import BusinessProfile from "../../../assets/images/benefits/business-profile 1.svg";
import OnlineAcc from "../../../assets/images/benefits/online-account 1.svg";

export default function Benefits() {
  return (
    <div className=" flex items-center justify-center flex-col flex-wrap text-center mt-16">
      <div>
        <h4 className="lg:text-xl text-[#13C265] text-center">Why Partner with Us?</h4>
        <h2 className=" text-2xl lg:text-3xl font-medium">
        Enjoy These Key Benefits
        </h2>
      </div>
      <div className="flex justify-around flex-wrap p-4 lg:px-40 mt-4">
        <div className="flex justify-center items-center flex-col cursor-pointer flex-start">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center mb-2 justify-center shadow-md rounded-2xl">
            <img src={Manager} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">
          Tailored Lead Options
          </h2>
          <p className="p-2 text-md mb-6 md:w-80">
          Match your lead preferences to your company objectives.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center mb-2 justify-center shadow-md rounded-2xl">
            <img src={Setting} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">Pay-Per-Lead Model</h2>
          <p className="p-2 text-md mb-6 md:w-80">
          You only pay for the leads you receive, resulting in cost-effective growth.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center shadow-md mb-2 justify-center rounded-2xl">
            <img src={Leads} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">Enhanced Company Profile</h2>
          <p className="p-2 text-md mb-6 md:w-80">
          Make an impact with a detailed profile that emphasizes your strengths.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center shadow-md mb-2 justify-center rounded-2xl">
            <img src={OnlineAcc} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">Authentic, Verified Reviews</h2>
          <p className="p-2 text-md mb-6 md:w-80">
          Increase prospective consumers' confidence by displaying verified testimonials from prior clients.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center shadow-md mb-2 justify-center rounded-2xl">
            <img src={BusinessProfile} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">Company Profile</h2>
          <p className="p-2 text-md mb-6 md:w-80">
            Share your business' story with potential customers.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center shadow-md mb-2 justify-center rounded-2xl">
            <img src={Pay} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">Verified Reviews</h2>
          <p className="p-2 text-md mb-6 md:w-80">
            Review platform to showcase happy customers.
          </p>
        </div>
      </div>
    </div>
  );
}
