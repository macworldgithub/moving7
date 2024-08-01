import React, { useState } from "react";
import { Steps } from "antd";
import "./Partnerbenefits";
import "./steps.css";
// import { hover } from "@testing-library/user-event/dist/hover";
const BenefitsSteps = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  // const description = "This is a description.";
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        style={{ width: "260px"}}
        items={[
          {
            title: "How to Register",
            description:
              "To join our network, simply fill out our quick application form.",
          },
          {
            title: "Decide on your preferences",
            description:
              "Tailor your internet profile to attract leads that are pertinent to your requirements and offerings.",
          },
          {
            title: "Get leads",
            description: "Get removal leads sent straight to your inbox.",
          },
        ]}
      />
    </>
  );
};
export default BenefitsSteps;
