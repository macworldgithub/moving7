import React from "react";
import invertedcomma from "../assets/images/invertedcomma.png";
import { Image } from "antd";

function TCard({ description, name, companyname }) {
  return (
    <div className="pt-6 mb-12 relative w-fit lg:text-xl ">
      <div>
        <div className="flex relative">
          <div>
            <Image src={invertedcomma} alt="" width={15} />
          </div>
          <div>
            <p className="ml-4">{description}</p>
          </div>
        </div>
        <div className="pt-4 ml-7">
          <h5>{name}</h5>
          <p className="text-gray-400">{companyname}</p>
        </div>
      </div>
    </div>
  );
}

export default TCard;
