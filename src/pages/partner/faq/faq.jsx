import { SettingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Collapse, Select } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const App = () => {
  const [expandIconPosition, setExpandIconPosition] = useState("right");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "What are the benefits after my Free Trial?",
      children: <div>{text}</div>,
    },
  ];
  return (
    <>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={onChange}
        accordion
        expandIconPosition={expandIconPosition}
        size="medium"
        items={items}
        className="custom-collapse"
      />
      <style jsx>{`
        .custom-collapse {
          width: 540px;
          margin-bottom: 10px;
        }

        @media screen and (max-width: 600px) {
          .custom-collapse {
            width: 80%;
          }
        }
        @media screen and (min-width: 601px) and (max-width: 768px) {
          .custom-collapse {
            width: 345px;
          }
        }
        @media screen and (min-width: 769px) and (max-width: 1024px) {
          .custom-collapse {
            width: 440px;
          }
        }
      `}</style>
    </>
  );
};
export default App;
