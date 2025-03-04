import React from "react";

export default function Rating() {
  return (
    <div className="flex items-center max-sm:flex-col max-sm:items-center  justify-around flex-wrap gap-8 sm:p-6 mt-8">
      <div>
        <p className="text-[4rem] max-md:text-[3rem] leading-[3rem] font-[600] text-[#C1E1EE]">
          100,000
        </p>
        <div className="flex items-center gap-1">
          <h2 className="text-para text-[#787878]">Google results</h2>
        </div>
      </div>
      <div>
        <p className="text-[4rem] max-md:text-[3rem] leading-[3rem] font-[600] text-[#C1E1EE]">
          37,400
        </p>
        <div className="flex items-center gap-1">
          <h2 className="text-para text-[#787878]">Removal leads</h2>
        </div>
      </div>
      <div>
        <p className="text-[4rem] max-md:text-[3rem] leading-[3rem] font-[600] text-[#C1E1EE]">
          8.6
        </p>
        <div className="flex items-center gap-1">
          <h2 className="text-para text-[#787878]">Average rating</h2>
        </div>
      </div>
    </div>
  );
}
