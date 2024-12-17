import React from "react";
import { Timeline } from "antd";
import "./Timeline.css";

const TimeLine = () => (
  <Timeline
    style={{ width: 200 }}
    items={[
      {
        style: { fontSize: 16, width: 240, color: "GrayText" },
        children: "Update the status of your project to track progress",
      },
      {
        style: { fontSize: 16, width: 240, color: "GrayText" },
        children:
          " When a project status is project completed, request a review",
      },
      {
        style: { fontSize: 16, width: 240, color: "GrayText" },
        children: "Completed reviews will be visible on your company profile",
      },
    ]}
  />
);
export default TimeLine;
