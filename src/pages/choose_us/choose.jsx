import "./../../App.css";

import img from "../../assets/images/Frame(3).svg"
import Frame1 from "../../assets/images/Frame (1).svg"
import Frame2 from "../../assets/images/Frame (2).svg"

function ChooseUs() {
  return (
    <div className="items-center flex flex-col flex-wrap justify-between py-6 px-7 size-full md:flex md:flex-col lg:items-center lg:flex-wrap lg:justify-center">
      <div className="lg:flex lg:flex-row lg:items-center">
        <div className="md:px-24 lg:px-20">
          <h2 className="text-4xl font-bold">Why choose us for moving?</h2>
          <p className="pt-6 text-justify lg:flex lg:flex-row">
            Choose us for your moving needs because we prioritize your peace of mind. Our experienced team is dedicated to ensuring a seamless and stress-free relocation process.
          </p>
        </div>
        <div className="flex flex-wrap text-center sm:flex justify-evenly pt-4 basis-1/2 gap-6  md:flex md:flex-row lg:flex lg:flex-nowrap lg:gap-4">
          <div>
            <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-44 flex items-center justify-center">
              <img src={img} alt="" />
            </div>
            <h3>Save Time</h3>
          </div>
          <div>
            <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-44 flex items-center justify-center">
              <img className="img-height" src={Frame1} alt="" />
            </div>
            <h3>Save Time</h3>
          </div>
          <div>
            <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-44 flex items-center justify-center">
              <img src={Frame2} alt="" />
            </div>
            <h3>Save Time</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
