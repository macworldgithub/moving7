import React from "react";
import BenefitsSteps from "./steps";
import Tickimg from "../../../assets/images/partnerChooseimg/Vector 7.svg";
// import Login from "../../login";
export default function PartnerBenefits() {
  return (
    <>

      <div className=" w-[90%] flex items-center gap-7 flex-col sm:flex-row lg:mt-16 p-6 justify-around mx-auto shadow-sm bg-[#D0F3E0]">
        <div className="sm:w-80">
          <h4 className="text-md lg:text-lg">How it works</h4>
          <h2 className="text-lg lg:text-2xl font-medium lg:w-96 mt-4">
            A simple 3-step process to receive removal leads
          </h2>
          <p className="text-md lg:text-lg lg:w-96 mt-4 mb-4 ">
            Only a few easy steps between you and qualified leads.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#13C265] w-32 h-11 text-white rounded-sm">
              Get Started
            </button>
            <img src={Tickimg} alt="" />
            <p>It’s free to try!</p>
          </div>
        </div>

        <div>
          <BenefitsSteps />
        </div>
      </div>
      
    </>
  );
}
