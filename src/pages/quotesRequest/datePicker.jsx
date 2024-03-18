import React from 'react';
import { DatePicker, Space } from 'antd';
const QuotePicker = ({ dates, setDate }) => (
    <Space direction="horizontal">
        <DatePicker
            style={{ height: 40 }}
            placeholder='Date from'
            onChange={(_, dateString) => {
                setDate({ ...dates, fromDate: dateString })
            }}
        />
        <DatePicker
            style={{ height: 40 }}
            placeholder='Date to'
            onChange={(_, dateString) => {
                setDate({ ...dates, toDate: dateString })
            }}
        />
    </Space>
);
export default QuotePicker;
