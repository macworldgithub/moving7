import React from "react";
import companiesLogo from "../../assets/images/companiesLogo.svg";

// import logo from '../../assets/images/Logo 1.svg'
import SliderLogo from "./company";

function Compare() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-2">
        <div className="text-center pb-6 sm:pt-8">
          <h2 className="text-2xl font-semibold">Compare moving companies like:</h2>
        </div>
        <div>
          <div className="flex-wrap p-4 hidden md:block">
            <img src={companiesLogo} alt="Companies Logo" />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        < SliderLogo />
      </div>
    </div>
  );
}

export default Compare;
