import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import UserImg from "../../assets/images/overview/Group 17.png";
import SmalllFooter from "../footer/smalllFooter";

export default function Targeting() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-10 lg:mb-96">
        <div className="w-11/12 md:w-7/12 ml-0 lg:ml-12 lg:-mt-36 rounded-md shadow-xl border-[1.5px]">
          <div className="p-4">
            <h2 className="text-lg font-medium">Edit targeting</h2>
          </div>
          <div className="flex flex-col text-lg">
            <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center px-8 py-2 gap-2 sm:gap-4 xl:gap-12">
              <h2 className="bg-[#E4E4E4] font-semibold px-6 py-3 border  rounded-t-md rounded-b-none">
                Name
              </h2>
              <h2 className="text-gray-400">Destination (To)</h2>
              <h2 className="text-gray-400">Destination (international)</h2>
            </div>
            <div className="flex flex-col mt-2 lg:-mt-3 w-full">
              <div className="flex gap-8 md:gap-36 lg:gap-96 px-6 py-3 font-medium  bg-[#E4E4E4]">
                <h2>Area</h2>
                <h2>Lead Categories</h2>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-28 px-4 py-10">
                <p className="text-gray-400">
                  Radius 20 miles from Seattle, WA, USA
                </p>
                <button className="bg-primary px-6 py-2 text-white rounded-md">
                  Residential
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 md:w-7/12 lg:w-1/5 mt-8 rounded-md shadow-xl">
          <div className="px-4 py-4 shadow-lg shadow-gray-300 rounded-lg mt-4 border-[1.5px]">
            <h2 className="text-lg font-medium border-b-2 mb-4">Need help?</h2>
            <h2 className="text-gray-500 ">Tips $ Best Practices</h2>
            <p className="p-1 text-gray-400">
              Contact a new lead within 8hrs to win more jobs
            </p>
            <p className="p-1 text-gray-400">
              If you cannot get hold of the potential client, send an email to
              start the converstation
            </p>
            <p className="p-1 text-gray-400">
              Use our fair reclaims services for incorrect telephone numbers.{" "}
              <span className="text-[#13C265]">Terms & Conditions</span>
            </p>

            <div className="flex items-center justify-between border-b-2 mt-4">
              <h2 className=" font-medium mb-4">Help Desk</h2>
              <IoIosArrowForward />
            </div>
            <div className="flex gap-6 mt-3 py-4">
              <img src={UserImg} alt="" className=" cursor-pointer" />
              <div>
                <h2 className="text-md md:text-lg">Asad Khan</h2>
                <button className=" bg-[#1ABD5E] text-white text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SmalllFooter />
    </>
  );
}
