import React from "react";
import dayjs from "dayjs";
import { DatePicker, theme, TimePicker } from "antd";
const SpecificDate = ({ handleInputStateChange, handleDataChange }) => {
    const { token } = theme.useToken();
    const style = {
        border: `1px solid ${token.colorPrimary}`,
        borderRadius: "50%",
    };
    const cellRender = React.useCallback((current, info) => {
        if (info.type !== "date") {
            return info.originNode;
        }
        if (typeof current === "number") {
            return <div className="ant-picker-cell-inner">{current}</div>;
        }
        return (
            <div
                className="ant-picker-cell-inner"
                style={current.date() === 1 ? style : {}}
            >
                {current.date()}
            </div>
        );
    }, []);
    return (
        <div className="flex justify-between md:w-1/2">
            <DatePicker
                cellRender={cellRender}
                style={{ borderColor: "#13C26580" }}
                placeholder="Specific date"
                onClick={() => handleInputStateChange("isVisible_6", true)}
                onFocus={() => handleInputStateChange("isVisible_6", true)}
                className="w-full lg:w-3/5"
                onChange={(_, dateStr) => {
                    handleDataChange("specificDate", dateStr);
                }}
            />
            <TimePicker className="w-2/5 ms-2" onChange={(_, dateStr) => handleDataChange("specificTime",dateStr)} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
        </div>
    );
};
export default SpecificDate;
