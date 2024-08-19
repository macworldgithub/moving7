import React from "react";
import "./footer.css";
import img from "../../assets/images/Truck.svg";
import footerLogo from "../../assets/images/icon-32-logo 2.svg";
import logo2 from "../../assets/images/logo/logo3.svg"

function Footer() {
  return (
    <div className="bg-[#C1E1EE] text-white w-full md:w-full py-10 md:mt-20 pl-8 pt-7 footer lg:p-10">
      <div className="flex flex-wrap flex-col sm:flex gap-y-4 md:flex justify-around leading-loose lg:flex-row lg:mt-6 md:p-0 size-full">
        <div className="footer-truck">
          <img src={img} alt="Truck Icon" />
        </div>

        <div>
          <img src={logo2} alt="Logo" />
          <p className="text-black text-lg">
            We connect people and removal
            <br /> companies
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-8 p-3">
          <div>
            <h1 className="text-base md:text-xl text-black tracking-wider">
              For consumers
            </h1>
            <ul>
              <div className="text-black">
                <li>What we do?</li>
                <li>Moving to us</li>
                <li>Moving to uk</li>
                <li>Moving to uae</li>
              </div>
            </ul>
          </div>
          <div>
            <h2 className="text-base text-black md:text-xl tracking-wider">
              For removal companies
            </h2>
            <ul>
              <div className="text-black">
                <li>Become a partner</li>
                <li>Start your free trial</li>
                <li>Partner sign in</li>
              </div>
            </ul>
          </div>
          <div>
            <ul>
              <h2 className="text-base md:text-xl text-black tracking-wider">
                Need help?
              </h2>
              <div className="text-black">
                <li>Contact us</li>
                <li>UAE@gmail.com</li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-start pt-8 md:justify-evenly">
        <div className="border-dashed border-t-2 w-[90%] border-black">
          <div className="flex flex-col text-center items-start sm:flex sm:items-center sm:flex-row sm:justify-around md:justify-between pt-5 flex-wrap lg:items-start">
            <div>
              <h4 className="text-black pb-3">Copyright © 2023</h4>
            </div>
            <div className="lg:flex lg:px-5">
              <ul className="flex gap-8 text-black">
                <li>Legal</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
