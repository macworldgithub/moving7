import React from "react";
import { DatePicker } from "antd";

export default function Date_Picker({setUnlock6}) {
  const { RangePicker } = DatePicker;
  return (
    <>
      <RangePicker size="large" onClick={()=>setUnlock6(true)} className="w-full lg:w-1/2" 
      style={{ 
        // width: "50%",
       borderColor: "#13C26580" }} />
    </>
  );
}
