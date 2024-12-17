import React from "react";

import Faqs from "./faq";

export default function PartnerFaq() {
  return (
    <div className="flex items-center">
      <div className="lg:flex items-center mx-auto flex-col lg:mt-12">
        <h2 className="text-heading p-6 md:text-2xl font-semibold lg:mb-6">
          Frequently Asked Questions
        </h2>
        <div className="flex justify-between mb- gap-4 flex-col md:flex-row">
          <div className="flex items-center flex-col">
            <Faqs
              question={"How to Register?"}
              answer={
                "Complete and submit the registration form. Upload the documents and sign the agreement. Once approved, Moving7 will create your account and top-up your wallet. You can then begin receiving qualified leads."
              }
            />
            <Faqs
              question={
                "What's the mechanism behind the lead-based payment model?"
              }
              answer={
                "You will only be charged for confirmed leads you receive. Each lead category has its own specific cost, ensuring that your investment goes toward prospects who align well with your company's needs."
              }
            />
          </div>
          <div className="flex items-center flex-col">
            <Faqs
              question={"What is the current availability of service leads?"}
              answer={
                <div>
                  <p>
                    Currently, Local Moving, International Moving, Commercial
                    Moving, Industrial Moving and Storage Services
                  </p>
                </div>
              }
            />
            <Faqs
              question={
                "How can I monitor my leads and maintain an active subscription?"
              }
              answer={
                <div>
                  <p>
                    The online control panel is designed for ease of use and
                    provides convenient access to several key features. These
                    include:
                  </p>

                  <p>Managing leads</p>

                  <p>Overseeing accounts</p>

                  <p>Reviewing payment records</p>

                  <p>
                    Users can quickly navigate these functions through the
                    intuitive interface of the control panel. To ensure
                    uninterrupted access to Qualified Leads, it's important to
                    maintain a minimum account balance of $15. This balance is
                    necessary to continue receiving qualified leads.
                  </p>
                </div>
              }
            />
          </div>
        </div>
        <div className="flex justify-between mb- gap-4 flex-col md:flex-row">
          <div className="flex items-center flex-col">
            <Faqs
              question={"Can I customize my budget?"}
              answer={
                "Yes, you can set no of leads and select the specific area."
              }
            />
            <Faqs
              question={"Can I select the lead categories?"}
              answer={"Yes, you can."}
            />
          </div>
          <div className="flex items-center flex-col">
            <Faqs
              question={"Can I control my leads' budget?"}
              answer={"Yes, Simple pay as you go"}
            />
            <Faqs
              question={"Can I inactive or temporarily my account?"}
              answer={"Yes, you can be inactive and active on your dashboard."}
            />
          </div>
        </div>
        <div className="flex  flex md:gap-4 max-md:items-center  items-start max-md:flex-col max-sm">
          <Faqs
            question={"What is the definition of a qualified lead?"}
            answer={
              <div>
                <p>For Local Moving:</p>
                <p>
                  Correct Contact No, Correct Email ID, Schedule move within 3
                  months
                </p>

                <p>For International Moving:</p>
                <p>
                  Correct Contact No, Correct Email ID, Schedule move within 6
                  months
                </p>

                <p>For Commercial Moving:</p>
                <p>
                  Correct Contact No, Correct Email ID, Schedule move within 6
                  months
                </p>

                <p>For Storage:</p>
                <p>
                  Correct Contact No, Correct Email ID, Schedule move within 3
                  months
                </p>
              </div>
            }
          />
          <Faqs
            question={"Can I select my service offer country and city?"}
            answer={"Yes, you can."}
          />
        </div>
      </div>
    </div>
  );
}
