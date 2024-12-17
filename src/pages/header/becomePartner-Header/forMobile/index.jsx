import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  return (
    <div className="w-44 sm:w-56 z-[100] relative lg:w-72 flex flex-col flex-wrap items-center justify-center text-sm sm:text-md md:text-lg mt-[2.5rem] font-medium border-b-2 gap-1 px-6 py-8 right-8 text-white bg-[#1ae073] rounded-md lg:hidden">
      <Link to="/overview">
        <h2>Overview</h2>
      </Link>
      <Link to="/quoteRequest">
        <h2>Quote Requests</h2>
      </Link>
      <Link to="/">
        <h2>Company Profile</h2>
      </Link>
      <Link to="/targeting">
        <h2>Targeting</h2>
      </Link>
      <Link to="/">
        <h2>Help Desk</h2>
      </Link>
      <div className="flex items-center gap-2">
        <Link to="/account">
          <h2>Settings</h2>
        </Link>
        <IoIosArrowDown />
      </div>
    </div>
  );
}
