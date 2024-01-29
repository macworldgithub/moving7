import React from "react";
import { DatePicker } from "antd";

export default function Date_Picker() {
  const { RangePicker } = DatePicker;
  return (
    <>
      <RangePicker size="large" style={{ width: "50%", borderColor: "#13C26580" }} />
    </>
  );
}
