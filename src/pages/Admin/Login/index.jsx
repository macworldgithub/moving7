import React from "react";
import TransportVan from "../../../assets/images/admin/transport.png";
import GoogleImg from "../../../assets/images/admin/Vector.png";
import AppleImg from "../../../assets/images/admin/google.png";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

export default function Admin_Login() {
  return (
    <div className="w-11/12 m-auto mt-10 flex flex-col lg:flex-row justify-around items-center ">
      <div className="flex flex-col items-center w-4/5">
        <h2 className="text-lg font-medium mb-6 md:text-3xl lg:text-4xl">
          Log In to Your Account
        </h2>
        <div className=" relative">
          <h3 className="md:text-md text-gray-400">Email or Username</h3>
          <div>
            <input type="text" className="border-b-2 outline-none md:w-96" />
            <MailOutlined className=" absolute right-0" />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="md:text-md text-gray-400">Password</h3>
          <div className="flex relative">
            <input
              type="password"
              className="border-b-2 outline-none md:w-96"
            />
            <LockOutlined className=" absolute right-0" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row md:gap-32 justify-around mt-4 mb-4">
          <div className="flex gap-2 mb-2">
            <input type="checkbox" name="" id="" />
            <p className="text-gray-400">Remember Me</p>
          </div>
          <div className="text-primary cursor-pointer">Forget Password</div>
        </div>
        <button className="bg-primary py-2 rounded-md text-white w-4/5 sm:w-2/3 md:w-2/4 lg:w-4/5 xl:w-2/4">
          Login
        </button>
        <div className="flex items-center flex-col">
          <div className=" flex flex-col md:flex-row gap-1 m-2">
            <div className=" text-gray-400">------------</div>
            <div>
              <h2 className="text-gray-400">Instant Login</h2>
            </div>
            <div className=" text-gray-400">------------</div>
          </div>
          <div>
            <div className="flex gap-2 border-2 px-4 md:px-24 py-3 rounded-md cursor-pointer">
              <img src={AppleImg} alt="" />
              <h2 className="font-medium">Continue with Apple</h2>
            </div>
            <div className="flex gap-2 border-2 px-4 md:px-24 py-3 rounded-md mt-2 cursor-pointer">
              <img src={GoogleImg} alt="" />
              <h2 className="font-medium">Continue with Apple</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={TransportVan} alt="" />
      </div>
    </div>
  );
}
