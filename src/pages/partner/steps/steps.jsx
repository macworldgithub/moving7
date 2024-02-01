import React, { useState } from 'react';
import { Steps } from 'antd';
import "./Partnerbenefits"
import "./steps.css"
const BenefitsSteps = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        style={{ width: '260px' }}
        items={[
          {
            title: 'Get registered',
            description: "Get started with your free trial by completing the registration form."
          },
          {
            title: 'Set your preferences',
            description: "Let us know what your preferences are, so we can send you relevant leads."
          },
          {
            title: 'Receive leads',
            description: "Start winning jobs from customers in your area."
          },
        ]}
      />
    </>
  );
};
export default BenefitsSteps;