import React from "react";
import { DatePicker } from "antd";

export default function Date_Picker({
  handleInputStateChange,
  handleMultipleDataChanges,
}) {
  const { RangePicker } = DatePicker;
  return (
    <>
      <RangePicker
        size="large"
        onClick={() => handleInputStateChange("isVisible_6", true)}
        className="w-full lg:w-1/2"
        onChange={(_, s) => {
          let obj = {
            startDate: s[0],
            endDate: s[1],
          };
          handleMultipleDataChanges(obj);
        }}
        style={{
          // width: "50%",
          borderColor: "#13C26580",
        }}
      />
    </>
  );
}
