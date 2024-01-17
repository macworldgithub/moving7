import React from "react";
import "./footer.css";
import img from "../../assets/images/Truck.svg";

function Footer() {
  return (
    <div className="bg-[#333] text-white w-full md:w-full py-10 md:mt-20 pl-8 pt-7 footer lg:p-10 lg:w-[1280pxX]">
      <div className="flex flex-wrap flex-col sm:flex gap-y-4 md:flex justify-around leading-loose lg:flex-row lg:mt-6 md:p-0 size-full">

        <div className="footer-truck">
          <img src={img} alt="Truck Icon" />
        </div>

        <div>
          <img src="images/icon-32-logo 2.svg" alt="Logo" />
          <p className="text-gray-4 text-lg">
            We connect people and removal
            <br /> companies
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-8 p-3">
          <div>
            <h1 className="text-base md:text-xl tracking-wider">
              For consumers
            </h1>
            <ul>
              <div className="text-gray-400">
                <li>What we do?</li>
                <li>Moving to us</li>
                <li>Moving to uk</li>
                <li>Moving to uae</li>
              </div>
            </ul>
          </div>
          <div>
            <h2 className="text-base md:text-xl tracking-wider">
              For removal companies
            </h2>
            <ul>
              <div className="text-gray-400">
                <li>Become a partner</li>
                <li>Start your free trial</li>
                <li>Partner sign in</li>
              </div>
            </ul>
          </div>
          <div>
            <ul>
              <h2 className="text-base md:text-xl tracking-wider">Need help?</h2>
              <div className="text-gray-400">
                <li>Contact us</li>
                <li>UAE@gmail.com</li>
              </div>
            </ul>
          </div>
        </div>

      </div>

      <div className="flex items-start pt-8 md:justify-evenly">
        <div className="border-dashed border-t-2 w-[90%] border-gray-400">
          <div className="flex flex-col text-center items-start sm:flex sm:items-center sm:flex-row sm:justify-around md:justify-between pt-5 flex-wrap lg:items-start">
            <div>
              <h4 className="pb-3">Copyright © 2023</h4>
            </div>
            <div className="lg:flex lg:px-5">
              <ul className="flex gap-8 text-gray-400">
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
