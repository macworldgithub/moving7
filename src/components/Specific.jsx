import React from "react";
import dayjs from "dayjs";
import { DatePicker, Select, theme, TimePicker } from "antd";
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
            <Select
                defaultValue="Select Hour"
                options={[
                    { value: '00', label: '00' },
                    { value: '01', label: '01' },
                    { value: '02', label: '02' },
                    { value: '03', label: '03' },
                    { value: '04', label: '04' },
                    { value: '05', label: '05' },
                    { value: '06', label: '06' },
                    { value: '07', label: '07' },
                    { value: '08', label: '08' },
                    { value: '09', label: '09' },
                    { value: '10', label: '10' },
                    { value: '11', label: '11' },
                    { value: '12', label: '12' },
                    { value: '13', label: '13' },
                    { value: '14', label: '14' },
                    { value: '15', label: '15' },
                    { value: '16', label: '16' },
                    { value: '17', label: '17' },
                    { value: '18', label: '18' },
                    { value: '19', label: '19' },
                    { value: '20', label: '20' },
                    { value: '21', label: '21' },
                    { value: '22', label: '22' },
                    { value: '23', label: '23' }
                ]
                } className="w-2/5 ms-2" placeholder="Select Hour" onChange={(dateStr) => {
                    handleDataChange("specificTime", dateStr)
                }}
            />
        </div>
    );
};
export default SpecificDate;
