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
        <h4 className="lg:text-xl text-[#13C265] text-center">Benefits</h4>
        <h2 className=" text-2xl lg:text-3xl font-medium">
          We’ve got your needs in minds
        </h2>
      </div>
      <div className="flex justify-around flex-wrap p-4 mt-4">
        <div className="flex justify-center items-center flex-col cursor-pointer flex-start">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center mb-2 justify-center shadow-md rounded-2xl">
            <img src={Manager} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">
            Dedicated Account Manager
          </h2>
          <p className="p-2 text-md mb-6 md:w-80">
            Your point of contact for business growth.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center mb-2 justify-center shadow-md rounded-2xl">
            <img src={Setting} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">Customizable Leads</h2>
          <p className="p-2 text-md mb-6 md:w-80">
            Select your pick up area and the types of moves you prefer.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center shadow-md mb-2 justify-center rounded-2xl">
            <img src={Leads} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">Pay-per-lead</h2>
          <p className="p-2 text-md mb-6 md:w-80">
            Only pay when you receive qualified leads to your inbox.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-32 h-28 bg-[#F5F5F5] flex items-center shadow-md mb-2 justify-center rounded-2xl">
            <img src={OnlineAcc} alt="" />
          </div>
          <h2 className="text-md md:text-lg font-medium">Online Account</h2>
          <p className="p-2 text-md mb-6 md:w-80">
            Manage your leads and grow your sales with your easy-to-use online
            account.
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
