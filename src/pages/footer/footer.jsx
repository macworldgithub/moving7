import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import img from "../../assets/images/Truck.svg";
import footerLogo from "../../assets/images/icon-32-logo 2.svg";
import logo2 from "../../assets/images/logo/logo3.png";

function Footer() {
  return (
    <div className="bg-[#C1E1EE] text-white w-full md:w-full py-10 md:mt-20 pl-8 pt-7 footer lg:p-10">
      <div className="flex flex-wrap flex-col sm:flex gap-y-4 md:flex relative z-[10] justify-around leading-loose lg:flex-row lg:mt-6 md:p-0 size-full">
        <div className="footer-truck">
          <img src={img} alt="Truck Icon" className="relative z-[0]" />
        </div>

        <div className="flex items-center">
          <img src={logo2} className="w-48" alt="Logo" />
        </div>
        <div className="flex flex-wrap relative z-[10] justify-between gap-8 p-3">
          <div>
            <Link to={"/"}>
              <h1 className="text-base cursor-pointer md:text-xl font-medium text-black tracking-wider">
                For consumers
              </h1>
            </Link>
            <ul>
              <div className="text-black gap-[2px] flex flex-col text-para fontmedium">
                <li>What we do?</li>
                <Link to={"/internationalmoving/unitedkingdom"}>
                  <li className="text-para">Moving to UK</li>
                </Link>
                <Link to={"/internationalmoving/uae"}>
                  <li>Moving to UAE</li>
                </Link>
                <Link to={"/internationalmoving/usa"}>
                  <li className="cursor-pointer text-para">Moving to USA</li>
                </Link>
                <Link to={"/internationalmoving/dubai"}>
                  <li>Moving to Dubai</li>
                </Link>
                <Link to={"/internationalmoving/qatar"}>
                  <li>Moving to Qatar</li>
                </Link>
                <Link to={"/internationalmoving/oman"}>
                  <li>Moving to Oman</li>
                </Link>
                <Link to={"/internationalmoving/kuwait1"}>
                  <li>Moving to Kuwait</li>
                </Link>
                <Link to={"/internationalmoving/bahrain"}>
                  <li>Moving to Bahrain</li>
                </Link>
                <Link to={"/internationalmoving/saudiarabia"}>
                  <li>Moving to Saudi Arabia</li>
                </Link>
              </div>
            </ul>
          </div>
          <div>
            <Link to={"/partnerSignUp"}>
              <h2 className="text-base text-black md:text-xl tracking-wider font-medium">
                For removal companies
              </h2>
            </Link>
            <ul>
              <div className="text-black flex flex-col gap-[2px] text-para fontmedium">
                <Link to={"/partneronboarding"}>
                  <li>Partner Onboarding</li>
                </Link>
                <Link to={"/partnerSignUp"}>
                  <li>Become a partner</li>
                </Link>
                <Link to={"/clientonboarding"}>
                  <li>Client Onboarding</li>
                </Link>
                <Link to={""}>
                  <li>Moving Innovation</li>
                </Link>
              </div>
            </ul>
          </div>
          <div>
            <ul>
              <h2 className="text-base md:text-xl text-black font-medium tracking-wider">
                Need help?
              </h2>
              <div className="text-black text-para flex flex-col gap-[2px] fontmedium">
                <li>FAQ</li>
                <li>Contact us at</li>
                <li>
                  <a href="mailto:hello@moving7.com">hello@moving7.com</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-start pt-8 md:justify-evenly">
        <div className="border-dashed border-t-2 w-[90%] border-black">
          <div className="flex flex-col text-center items-start sm:flex sm:items-center sm:flex-row sm:justify-around md:justify-between pt-5 flex-wrap lg:items-start">
            <div>
              <h4 className="text-black pb-3">Copyright © 2024</h4>
            </div>
            <div className="lg:flex lg:px-5">
              <ul className="flex gap-8 text-black">
      <Link to={"/cookies-policy"}>
                <li>Cookies</li>
      </Link>
      <Link to={"/privacy-policy"}>
                <li>Privacy Policy</li>
      </Link>
      <Link to={"/terms-and-conditions"}>
                <li className="pointer-cursor cursor-pointer">Terms & Conditions</li>
      </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
