import React from "react";
import logo3 from "../../assets/images/logo/logo3.png";
import {
  getContactManagerDetails,
  updatePassword,
} from "../../apiFunctions/partner";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";
import UserImg from "../../assets/images/overview/Group 17.png";
import SmalllFooter from "../footer/smalllFooter";
import LoaderLayout from "../../components/Loaders/LoaderLayout";
import Truck from "../../components/Loaders/Truck";
import PaymentMethod from "../../components/PaymentMethods/PaymentMethods";
import { Link } from "react-router-dom";

export default function Account() {
  const updatePasswordMutation = useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Password updated successfully");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const contactManagerRes = useQuery({
    queryKey: ["getContactManagerDetails"],
    queryFn: getContactManagerDetails,
  });

  if (updatePasswordMutation.isLoading) {
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

  const submit = () => {
    if (!password || !confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password does not match");
      return;
    }
    updatePasswordMutation.mutate({ password, confirmPassword });
  };

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row lg:items-start items-center pt-5 justify-center gap-6 mt-2 lg:mb-96">
        <div className="flex flex-col w-11/12 md:w-[60%] gap-6  ">
          <div className=" rounded-md shadow-xl border-2">
            <div className="px-8 py-4 flex justify-between items-center border-b-2">
              <h2 className="text-lg font-medium">Change Password</h2>
              <button
                onClick={submit}
                className="bg-primary px-6 py-1 rounded-sm text-black"
              >
                Save
              </button>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex gap-2 lg:gap-10 p-4 border-b-2 items-center">
                <h2 className="font-medium text-gray-400">Password</h2>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className=" font-medium text-gray-400 outline-none"
                />
              </div>
              <div className="flex gap-10 p-4">
                <h2 className=" font-medium text-gray-400">Confirm password</h2>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="********"
                  className=" font-medium text-gray-400 outline-none"
                />
              </div>
            </div>
          </div>

          <PaymentMethod />
        </div>

        <div className=" w-11/12 md:w-7/12 lg:w-[22%]  rounded-md shadow-xl">
          <div className="px-4 shadow-lg shadow-gray-300 rounded-lg t-4 py-4 border-2">
            <h2 className="text-lg font-medium border-b-2 mb-4 py-3">
              Need help?
            </h2>

            <p className="text-para">
              <span className="font-bold">Q: How are payments structured?</span>
              <br />
              A: Payment is based on a pay-as-you-go system.
            </p>

            <p className="text-para">
              <span className="font-bold">
                Q: What's the process for obtaining a credit note if a lead
                doesn't meet qualified protocol requirements?
              </span>
              <br />
              A: You can submit a request through the Invoices section of your
              online portal.
            </p>

            <p className="text-para">
              <span className="font-bold">
                Q: What's the timeframe for credit note issuance?
              </span>
              <br />
              A: After completing the financial review, the credit note amount
              will be released within 7 working days.
            </p>

            <p className="text-para">
              <span className="font-bold">
                Q: What's the minimum account balance needed for activation?
              </span>
              <br />
              A: A minimum balance of 10 USD is required.
            </p>

            <p className="text-para">
              <span className="font-bold">
                Q: Under what circumstances would my account become inactive?
              </span>
              <br />
              A: Your account may become inactive if your company documents
              expire or if your account balance falls below 10 USD.
            </p>

            <div className="flex items-center justify-between border-b-2 mt-4">
              <h2 className=" font-medium mb-4">
                <Link to={"/partner/helpdesk"}>Help Desk</Link>
              </h2>
              <IoIosArrowForward />
            </div>
            <div className="flex items-center gap-6 mt-3 py-4">
                <img src={logo3} alt="" style={{objectFit:"contain"}} className="w-16 h-16 shadow-lg rounded-full cursor-pointer" />
              <div>
                <h2 className="text-md md:text-lg">
                  {ManagerData?.contactManagerName}
                </h2>
                <button
                  onClick={openWhatsApp}
                  className=" bg-[#C1E1EE] text-black text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1"
                >
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
