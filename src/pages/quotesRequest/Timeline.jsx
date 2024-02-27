import React from 'react';
import { Timeline } from 'antd';
const TimeLine = () => (
    <Timeline
    style={{width:200}}
        items={[
            {
                children: 'Update the status of your project to track progress',
            },
            {
                children: ' When a project status is project completed, request a review',
            },
            {
                children: 'Completed reviews will be visible on your company profile',
            }
        ]}
    />
);
export default TimeLine;