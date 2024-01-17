import React from "react";
import companiesLogo from "../../assets/images/companiesLogo.svg";

function Compare() {
  return (
    <div className="flex flex-col justify-center items-center pt-2">
      <div className="text-center pb-6 pt-2">
        <h2 className="text-2xl font-semibold">Compare moving companies like:</h2>
      </div>
      <div className="flex flex-row flex-wrap p-4">
        <img src={companiesLogo} alt="Companies Logo" />
      </div>
    </div>
  );
}

export default Compare;
