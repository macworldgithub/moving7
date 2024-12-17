import React from "react";
import { DatePicker } from "antd";

export default function Date_Picker({
    handleInputStateChange,
    handleMultipleDataChanges,
    handleDataChange
}) {
    const { RangePicker } = DatePicker;
    return (
        <div className="w-full flex justify-center items-center max-sm:flex-col ">
            {
                /*
                *
            <RangePicker
              size="large"
              onClick={() => handleInputStateChange("isVisible_6", true)}
              className="w-full lg:w-1/2"
              onChange={(_, s) => {
                let obj = {
                  startDate: s[0],
                  endDate: s[1],
                };
                  console.log(obj)
                handleMultipleDataChanges(obj);
              }}
              style={{
                // width: "50%",
                borderColor: "#13C26580",
              }}
            />
                */
            }
            <div className="  w-[25%] max-md:w-full">
                <p className="text-[12px]">
                    from
                </p>
                <input
                    onClick={() => handleInputStateChange("isVisible_6", true)}
                    className="px-2 rounded lg text-para my-2 h-8 w-full" type={"date"} placeholder={"Start Date"} onChange={(e) => handleDataChange("startDate", e.target.value)} />
            </div>
            <div className="w-[25%] max-md:w-full">
                <p className="text-[12px]">
                    to
                </p>
                <input
                    onClick={() => handleInputStateChange("isVisible_6", true)}
                    className="rounded my-2 h-8 w-full px-2 4 text-para" type={"date"} placeholder="End Date" onChange={(e) => handleDataChange("endDate", e.target.value)} />
            </div>
        </div>
    );
}
