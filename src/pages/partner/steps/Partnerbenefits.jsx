import React from "react";
import BenefitsSteps from "./steps";
import Tickimg from "../../../assets/images/partnerChooseimg/Vector 7.svg";
import { useNavigate } from "react-router-dom";
// import Login from "../../login";
export default function PartnerBenefits() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" w-[90%] flex items-center gap-7 max-sm:items-start flex-col sm:flex-row lg:mt-16 py-14 p-6 justify-around mx-auto shadow-sm bg-[#C1E1EE]">
        <div className="sm:w-80">
          <h4 className="text-sub-head">Boost Your Moving Business:</h4>
          <h2 className="text-sub-head font-medium lg:w-96 mt-4">
            3 Easy Steps to a Stream of Qualified Moving Leads
          </h2>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#EE504C] my-4  w-32 h-11 text-white rounded-sm"
          >
            Get Started
          </button>
        </div>

        <div>
          <BenefitsSteps />
        </div>
      </div>
    </>
  );
}
