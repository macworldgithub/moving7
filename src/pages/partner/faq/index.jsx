import React from "react";

import Faqs from "./faq";

export default function PartnerFaq() {
  return (
    <div className="flex items-center">
      <div className="lg:flex items-center mx-auto flex-col lg:mt-12">
        <h2 className="text-2xl p-6 md:text-2xl font-semibold lg:mb-6">
          Frequently Asked Questions
        </h2>
        <div className="flex justify-between mb-14 gap-4 flex-col md:flex-row">
          <div className="flex items-center flex-col">
            <Faqs question={ "How do I sign up to receive removal leads?"} answer={"Simply complete our online registration form. Once you submit your information, our team will check it and set up your account so you can begin receiving leads."} />
            <Faqs question={"What types of leads will I get?"} answer={"You will receive leads based on your stated criteria, such as local, commercial, and worldwide removal requests"}/>
          </div>
          <div className="flex items-center flex-col">
            <Faqs question={"How does the pay-per-lead model work?"} answer={"You only have to pay for the leads that you receive. Because each lead is charged independently, you can be confident that you are investing in prospects who are a good fit for your organization."}/>
            <Faqs question={" How can I maintain track of my leads and account information?"} answer={"Our user-friendly web dashboard allows you to easily manage your leads and account information, while also providing real-time updates and tracking"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
