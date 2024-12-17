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
        style={{ width: "260px" }}
        className={"text-para"}
        items={[
          {
            title: "Register",
            description: "",
          },
          {
            title: "Upload Documents",
            description: "",
          },
          {
            title: "Gain Moving7 Agent",
            description: "AccessTap into a World of New Opportunities",
          },
        ]}
      />
    </>
  );
};
export default BenefitsSteps;
