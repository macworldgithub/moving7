import "./../../App.css";

import img from "../../assets/images/Frame(3).svg";
import Frame1 from "../../assets/images/Frame (1).svg";
import Frame2 from "../../assets/images/Frame (2).svg";

function ChooseUs() {
  return (
    <div className="items-center flex flex-col flex-wrap justify-between py-6 px-8 size-full md:flex md:flex-col lg:items-center lg:flex-wrap lg:justify-center lg:mb-40 lg:mt-9">
      <div className="lg:flex lg:flex-row lg:items-center">
        <div className="md:px-24 lg:px-8">
          <h2 className="text-2xl font-bold lg:text-2xl">
            Why choose us for moving?
          </h2>
          <p className="pt-6 pb-6 sm:text-lg text-justify lg:flex lg:flex-row">
          We have Professional expertise in the industry of packing and transportation safely and efficiently. Our moving packing services use high-quality equipment to keep your belongings safe and secure during transit. Our efficient processes and skilled team guarantee that your move goes as smoothly as possible, letting you focus on settling into your new space.
          </p>
        </div>
        <div className="flex flex-wrap flex-col items-center text-center sm:flex sm:flex-row justify-evenly pt-4 basis-1/2 gap-6  md:flex md:flex-row lg:flex lg:flex-nowrap lg:gap-4">
          <div>
            <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-44 flex items-center justify-center">
              <img src={img} alt="" />
            </div>
            <h3 className="py-6 font-medium text-gray-500">Save Time</h3>
          </div>
          <div>
            <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-44 flex items-center justify-center">
              <img className="img-height" src={Frame1} alt="" />
            </div>
            <h3 className="py-6 font-medium text-gray-500">Save Money</h3>
          </div>
          <div>
            <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-44 flex items-center justify-center">
              <img src={Frame2} alt="" />
            </div>
            <h3 className="py-6 font-medium text-gray-500">
              Receive multiple quotes
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
