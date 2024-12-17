import React, { useState } from "react";

import trust1 from "../../../../assets/images/partnerChooseimg/01.svg";
import together from "../../../../assets/images/partnerChooseimg/02.svg";
import play from "../../../../assets/images/partnerChooseimg/03.svg";
import us from "../../../../assets/images/partnerChooseimg/04.svg.png";
//import us from "../../../../assets/images/benefits/business-profile 1.svg"

import "./choose.css";

export default function ChooseUs() {
  const [showText, setShowText] = useState(false);

  const Extras = [
    <li className="text-para">
      <strong className="text-sub-heading">
        Increase Your Business Opportunities:
      </strong>{" "}
      With our advanced tools and features, you can showcase your services to
      the right audience, manage leads efficiently, and convert inquiries into
      bookings.
    </li>,
    <li className="text-para">
      <strong className="text-sub-heading">
        Leverage Cutting-Edge Technology:
      </strong>{" "}
      Our platform integrates seamlessly with your existing systems, providing
      you with the latest in technology to simplify your operations and enhance
      customer interactions.
    </li>,
    <li className="text-para">
      <strong className="text-sub-heading">Gain Valuable Insights:</strong>{" "}
      Access powerful analytics that help you understand market trends, customer
      behavior, and performance metrics, enabling you to make informed decisions
      and improve your service offerings.
    </li>,
    <li className="text-para">
      <strong className="text-sub-heading">Boost Your Reputation:</strong> Stand
      out with our easy-to-use interface and support systems, ensuring your
      clients have a smooth and positive experience, and enhancing your
      reputation in the industry.
    </li>,
  ];

  return (
    <div className="flex   justify-evenly max-md:items-center md:items:start flex-col md:flex-row md:gap-0 gap-6 mt-0 sm:mt-[35px] lg:mt-[50px] md:p-1 custom-responsive">
      <div className=" w-3/4 lg:w-1/3 p-">
        <h3 className=" text-heading my-2 font-bold mt-">
          Why Partner with Moving7?
        </h3>
        <p className="text-para">
          By joining our network, you'll unlock a range of benefits designed to
          boost your visibility and streamline your operations:
        </p>
        <ul className="list-disc list-inside">
          <li className="text-para">
            <strong className="text-sub-heading">
              Reach a Wider Audience:
            </strong>{" "}
            Tap into our extensive and diverse user base actively seeking
            relocation services. Our platform is visited by thousands of
            potential clients looking for reliable and high-quality relocation
            solutions.
          </li>
          <span
            onClick={() => setShowText(true)}
            l
            className={`cursor-pointer text-blue-500 underline ${showText ? "hidden" : ""} `}
          >
            read more
          </span>

          <div className="cursor-pointe" onClick={() => setShowText(false)}>
            {showText && Extras.map((elem) => elem)}
          </div>
        </ul>
      </div>
      <div className="flex justify-center md:flex-start flex-col sm:flex-row flex-wrap text-center md:items-top gap-8 custom-flex">
        <div>
          <div className=" w-40 h-36 shadow-sm bg-[#C1E1EE] flex items-center justify-center rounded-2xl">
            <div>
              <img src={trust1} alt="" className="w-24" />
            </div>
          </div>
          <div className="pt-2 text-para">
            <h4>
              Professional <br /> Assistance
            </h4>
          </div>
        </div>

        <div>
          <div className=" w-40 h-36 shadow-sm bg-[#C1E1EE] flex items-center justify-center rounded-2xl">
            <img src={together} alt="" className="w-24" />
          </div>
          <div className="pt-2 text-para">
            <h4>Flexible Leads</h4>
          </div>
        </div>
        <div>
          <div className=" w-40 h-36 shadow-sm bg-[#C1E1EE] flex items-center justify-center rounded-2xl">
            <img src={play} className="w-24" alt="" />
          </div>
          <div className="pt-2 text-para">
            <h4>Economical</h4>
          </div>
        </div>

        <div>
          <div className=" w-40 h-36 shadow-sm bg-[#C1E1EE] flex items-center justify-center rounded-2xl">
            <img src={us} className="w-24" alt="" />
          </div>
          <div className="pt-2 text-para">
            <h4>Simple Procedure</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
