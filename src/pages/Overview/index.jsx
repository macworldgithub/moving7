import { Segmented, Table } from "antd";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import UserImg from "../../../src/assets/images/overview/Group 17.png";
import {
  getContactManagerDetails,
  getPartnerOverview,
  getPartnerSentQuotes,
} from "../../apiFunctions/partner";
import AntdModal from "../../components/AntdModal";
import LoaderLayout from "../../components/Loaders/LoaderLayout";
import Truck from "../../components/Loaders/Truck";
import SmalllFooter from "../footer/smalllFooter";
import logo3 from "../../assets/images/logo/logo3.png";

export default function Overview() {
  const userData = window.localStorage.getItem("userData");
  const json = JSON.parse(userData);

  const [isTargetingModalOpen, setIsTargetingModalOpen] = useState(false);
  const [currTargetingCountry, setCurrTargetingCountry] = useState("");

  const partnerOverviewRes = useQuery({
    queryKey: ["fetchPartnerOverview", json?._id],
    queryFn: getPartnerOverview,
  });
  const quotes = useQuery({
    queryKey: ["fetchRequestOfPartner"],
    queryFn: getPartnerSentQuotes,
  });

  const contactManagerRes = useQuery({
    queryKey: ["getContactManagerDetails"],
    queryFn: getContactManagerDetails,
  });

  if (
    partnerOverviewRes.isLoading ||
    quotes.isLoading ||
    contactManagerRes.isLoading
  ) {
    return (
      <LoaderLayout>
        <Truck />
      </LoaderLayout>
    );
  }

  const ManagerData = contactManagerRes?.data?.data ?? {};

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${ManagerData?.contactManagerContactNumber}`,
      "_blank",
    );
  };
  const quotesData = quotes?.data?.data ?? [];
  const partnerOverviewData = partnerOverviewRes?.data?.data ?? {};

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center px-8">
        <div className="flex items-center justify-start flex-col">
          <div className="w-11/12 md:w-4/6 lg:w-11/12 bg-[#C1E1EE] px-6 py-8 mt-10 lg:-mt- lg:-ml-[4rem]">
            <h2 className="text-md md:text-2xl font-semibold">
              Welcome to Moving7!
            </h2>
            <p className="text-md md:text-lg pt-2">
              {partnerOverviewData?.accountStatus === "Active"
                ? "Congratulations your account is 'Active' .You may start to receive job requests - if so, you will find them below, and we will send them to your email."
                : "We are currently in the process of verifying your business, which usually takes 1-2 working days. In the meantime you can begin to complete your company profile"}
            </p>
          </div>
          <div className="w-11/12 md:w-4/6 lg:lg:w-11/12 bg-[#C1E1EE] px-6 py-8 mt-8 lg:-ml-[4rem]">
            <h2 className=" text-lg md:text-2xl font-semibold">
              More accepted quotes?
            </h2>
            <p className="text-md md:text-lg pt-2">
              Presentation is Key to Crafting Your Image
            </p>
            <ul className="ms-5">
              <li>⦁ 65% of customers first check your company profile</li>
              <li>
                ⦁ Your online presence is crucial for making a great first
                impression
              </li>
            </ul>
            <p className="text-md md:text-lg pt-2">
              Completing Your Company Profile
            </p>
            <ul className="ms-5">
              <li>
                ⦁ Optimize your business listings and social media profiles
              </li>
              <li>⦁ Ensure all key information is up-to-date and accurate.</li>
            </ul>
            <p className="text-md md:text-lg pt-2">
              Encourage External Reviews
            </p>
            <ul className="mb-10 ms-5">
              <li>⦁ Reach out to satisfied customers to leave reviews</li>
              <li>
                ⦁ Respond professionally to all reviews, both positive and
                negative
              </li>
              <li>
                ⦁ Monitor your online reputation and address any issues promptly
              </li>
            </ul>

            {/* <button className='bg-[#1ABD5E] px-4 py-2 text-white mt-6 rounded-sm'>Let’s get started!</button> */}
          </div>
        </div>
        <div className="w-11/12 lg:w-2/4 flex flex-col sm:flex-row gap-3 lg:gap-0 lg:flex-col items-start justify-center  ">
          <div className="w-full shadow-xl rounded-md px-4 py-6">
            <div className="border-b-2 w-full">
              <h2 className="font-semibold text-md md:text-lg pb-2">
                Company Info
              </h2>
            </div>
            <div>
              <h2 className="w-full font-semibold pt-2 text-md md:text-lg">
                Company Name
              </h2>
              <p className="text-md md:text-lg text-gray-400">
                {partnerOverviewData?.companyName ?? "None"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="w-full font-semibold pt-2 text-md md:text-lg">
                  Account status
                </h2>
                <p className="text-md md:text-lg font-light">
                  {partnerOverviewData?.accountStatus}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="w-full font-semibold pt-2 text-md md:text-lg">
                  Targeting
                </h2>
                <p className="text-md md:text-lg text-gray-400">
                  {partnerOverviewData?.areaPreference === "radius"
                    ? `Radius ${partnerOverviewData?.radius ?? "___"} mils from ${partnerOverviewData?.location ?? "___"}`
                    : partnerOverviewData?.regions
                          ?.map((region) => region?.name)
                          .join(" , ").length > 200
                      ? partnerOverviewData?.regions
                          ?.map((region) => region?.name)
                          .filter((_, i) => i < 10)
                          .join(" , ") + "...."
                      : partnerOverviewData?.regions
                          ?.map((region) => region?.name)
                          .join(" , ")}
                  {partnerOverviewData?.regions
                    ?.map((region) => region?.name)
                    .join(" , ").length > 200 ? (
                    <span
                      onClick={() => setIsTargetingModalOpen(true)}
                      className="text-blue-500 underline mx-5 cursor-pointer"
                    >
                      {" "}
                      See All
                    </span>
                  ) : null}
                </p>
                <AntdModal
                  isModalOpen={isTargetingModalOpen}
                  classes="w-80"
                  title="Targeting"
                  setIsModalOpen={setIsTargetingModalOpen}
                >
                  <Segmented
                    options={partnerOverviewData.regions?.reduce(
                      (arr, elem) => {
                        if (!arr.includes(elem?.country)) {
                          arr.push(elem.country);
                        }
                        return arr;
                      },
                      [],
                    )}
                    onChange={(value) => {
                      setCurrTargetingCountry(value);
                    }}
                  />
                  <p className="mt-5">
                    {partnerOverviewData.regions
                      ?.filter((elem) => elem.country === currTargetingCountry)
                      .map((elem, i) => (
                        <p className="py-1 border-bottom rounded  border-gray-300 ">
                          <span className="mx-3">{i + 1}</span>
                          {elem?.name}
                        </p>
                      ))}
                  </p>
                </AntdModal>
              </div>
            </div>
          </div>
          <div className="w-full shadow-xl rounded-md px-4 py-6 lg:mt-8">
            <div className="flex items-center justify-between border-b-2">
              <div>
                <h2 className=" font-medium mb-4">
                  <Link to={"/partner/helpdesk"}>Help Desk</Link>
                </h2>
              </div>
              <div>
                <IoIosArrowForward size={25} />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-md md:text-lg text-gray-400 mt-4">
                  Or contact your Account Manager
                </p>
              </div>
              <div className="flex gap-6 items-center mt-3">
                <img src={logo3} alt="" style={{objectFit:"contain"}} className="w-16 h-16 shadow-lg rounded-full cursor-pointer" />
                <div>
                  <h2 className="text-md md:text-lg">
                    {ManagerData?.contactManagerName}
                  </h2>
                  <button
                    className=" bg-[#C1E1EE] text-black text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1"
                    onClick={openWhatsApp}
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center w-11/12 md:w-4/5 lg:w-[64%] overflow-hidden xl:w-[66%]
                 lg:-ml-4 flex-col   mx-auto lg:flex-col"
      >
        <div className="w-[90%] py-8 mt-1 md:-mt-20 rounded-sm ">
          <div className="bg-white shadow-lg">
            <h2 className="text-md md:text-lg px-4 py-4 font-medium">
              5 most recent Quote Requests
            </h2>
          </div>
        </div>
      {
          /*
        <div className="w-[90%] -mt-8 bg-[#EFF2F3] rounded-lg overflow-x-scroll">
          <div className="bg-[#E6EBEC] flex justify-between px-6 py-4  font-semibold text-[#6A6A6A]">
            <h2>Name</h2>
            <h2>Email</h2>
            <h2>Move From</h2>
            <h2>Move To</h2>
            <h2>Date</h2>
          </div>
          <div className="h-64 flex mt-2 justify-start">
            {quotesData?.length > 0 ? (
              <div className="w-full">
                {quotesData.map((elem, idx) => (
                  <div className="flex justify-between" key={idx}>
                    <h2 className="px-6">{elem?.name}</h2>
                    <h2 className="px-6">{elem?.email}</h2>
                    <h2 className="px-6">{elem?.moveFrom}</h2>
                    <h2 className="px-6">{elem?.moveTo}</h2>
                    <h2 className="px-6">
                      {new Date(elem?.requestTime).getDate() +
                        "-" +
                        new Date(elem?.requestTime).getMonth() +
                        "-" +
                        new Date(elem?.requestTime).getFullYear()}
                    </h2>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-md font-light flex items-center justify-center text-center w-full">
                No quote requests received yet. We will email you once we have
                suitable projects.
              </p>
            )}
          </div>
        </div>
          */
      }
      </div>
      <SmalllFooter />
    </div>
  );
}
