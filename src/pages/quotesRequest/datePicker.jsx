import React from 'react';
import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
    console.log(date, dateString);
};
const QuotePicker = () => (
    <Space direction="horizontal">
        <DatePicker
            style={{ height: 40 }}
            placeholder='Date from'
            format={{
                format: 'YYYY-MM-DD',
                type: 'mask',
            }}
            onChange={onChange}
        />
        <DatePicker
            style={{ height: 40 }}
            placeholder='Date to'
            format={{
                format: 'YYYY-MM-DD HH:mm:ss',
                type: 'mask',
            }}
            onChange={onChange}
        />
    </Space>
);
export default QuotePicker;