import React from 'react';
import { DatePicker, theme } from 'antd';
const SpecificDate = ({setUnlock4}) => {
    const { token } = theme.useToken();
    const style = {
        border: `1px solid ${token.colorPrimary}`,
        borderRadius: '50%',
    };
    const cellRender = React.useCallback((current, info) => {
        if (info.type !== 'date') {
            return info.originNode;
        }
        if (typeof current === 'number') {
            return <div className="ant-picker-cell-inner">{current}</div>;
        }
        return (
            <div className="ant-picker-cell-inner" style={current.date() === 1 ? style : {}}>
                {current.date()}
            </div>
        );
    }, []);
    return (
        <DatePicker
            cellRender={cellRender}
            style={{borderColor:"#13C26580"}}
            placeholder='Specific date'
            onClick={()=>setUnlock4(true)}
            className="w-full lg:w-1/2"
        />
    );
};
export default SpecificDate;