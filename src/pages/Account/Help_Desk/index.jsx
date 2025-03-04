import React from "react";
import logo3 from "../../../assets/images/logo/logo3.png";
import { useQuery } from "react-query";
import { IoIosArrowForward } from "react-icons/io";
import UserImg from "../../../assets/images/overview/Group 17.png";
import SmalllFooter from "../../footer/smalllFooter";
import { Collapse, Divider } from "antd";
import { getContactManagerDetails } from "../../../apiFunctions/partner";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Help_Desk = () => {
  const contactManagerRes = useQuery({
    queryKey: ["getContactManagerDetails"],
    queryFn: getContactManagerDetails,
  });

  const data = contactManagerRes?.data?.data ?? {};

  const openWhatsApp = () => {
    window.open(`https://wa.me/${data?.contactManagerContactNumber}`, "_blank");
  };

  return (
    <>
      <div className="flex xl:px-32 flex-col lg:flex-row justify-evenly gap-8 lg:gap-0 items-baseline xxl:justify-around">
        {/* <div orientation="left">Large Size</div> */}
        <div className="w-11/12 m-auto lg:w-[60%] xl:w-[65%] mt-10">
          <div class="my-2 section">
            <h2 className="font-bold text-heading">Domestic Moving</h2>
            <p className="text-para">
              Domestic moving services are designed to help individuals and
              families relocate their belongings from one home to another within
              the same country. This service encompasses a range of tasks to
              ensure a smooth and stress-free move.
            </p>
            <div class="key-points">
              <ul className="list-disc list-outside">
                <li className="text-para">
                  <span className="text-para">Packing and Unpacking:</span>{" "}
                  Professional movers can pack your entire household using
                  durable materials and techniques to protect your belongings.
                </li>
                <li className="text-para">
                  <span className="text-para">Loading and Unloading:</span> The
                  service includes loading all packed items onto the moving
                  truck and unloading them at your new residence.
                </li>
                <li className="text-para">
                  <span className="text-para">Transportation:</span> Secure
                  transportation of your belongings from the old house to the
                  new one.
                </li>
                <li className="text-para">
                  <span className="text-para">Disassembly and Reassembly:</span>{" "}
                  Movers handle the disassembly before the move and reassemble
                  the pieces at your new home.
                </li>
                <li className="text-para">
                  <span className="text-para">Specialty Item Moving:</span>{" "}
                  Specialized services are available for items requiring special
                  care such as pianos, artwork, or antiques.
                </li>
                <li className="text-para">
                  <span className="text-para">Insurance and Liability:</span>{" "}
                  Options for insurance to protect your belongings during the
                  move.
                </li>
                <li className="text-para">
                  <span className="text-para">Consultation and Planning:</span>{" "}
                  A pre-move consultation to plan every detail of the move
                  tailored to your specific needs.
                </li>
                <li className="text-para">
                  <span className="text-para">Storage Solutions:</span> Secure
                  storage facilities are available if you need to store your
                  belongings temporarily.
                </li>
              </ul>
            </div>
          </div>

          <div class="my-2 section">
            <h2 className="text-heading font-bold">Office Moving</h2>
            <p className="text-para">
              Office moving services are specialized to handle the complexities
              of relocating a business from one location to another. This
              service ensures minimal disruption to operations and is tailored
              to meet the unique needs of commercial relocations.
            </p>
            <div class="key-points">
              <ul className="list-disc list-outside">
                <li className="text-para">
                  <span className="text-para">Pre-Move Planning:</span> Detailed
                  consultations to understand the specific needs of the
                  business.
                </li>
                <li className="text-para">
                  <span className="text-para">Packing and Unpacking:</span>{" "}
                  Professional packing services designed to protect office
                  equipment, furniture, and documents.
                </li>
                <li className="text-para">
                  <span className="text-para">IT and Equipment Handling:</span>{" "}
                  Safe disconnecting, packing, transporting, and reconnecting of
                  computers, servers, and other technology.
                </li>
                <li className="text-para">
                  <span className="text-para">
                    Furniture Disassembly and Reassembly:
                  </span>{" "}
                  Movers handle the breakdown and reassembly of large furniture
                  items.
                </li>
                <li className="text-para">
                  <span className="text-para">Secure Transportation:</span>{" "}
                  Transportation with utmost care using appropriate vehicles and
                  securing methods.
                </li>
                <li className="text-para">
                  <span className="text-para">Minimal Disruption:</span> Moving
                  with as little disruption to business operations as possible.
                </li>
                <li className="text-para">
                  <span className="text-para">Liability and Insurance:</span>{" "}
                  Insurance options to protect the company’s assets.
                </li>
                <li className="text-para">
                  <span className="text-para">Specialty Services:</span>{" "}
                  Additional services such as document shredding and electronic
                  waste disposal.
                </li>
                <li className="text-para">
                  <span className="text-para">Storage Solutions:</span> Storage
                  options for furniture, documents, or equipment not immediately
                  needed in the new space.
                </li>
              </ul>
            </div>
          </div>

          <div class="my-2 section">
            <h2 className="text-heading font-bold">International Relocation</h2>
            <p className="text-para">
              International relocation involves moving from one country to
              another, which can be a complex process due to logistics,
              legalities, and practical challenges. Understanding the key
              aspects of international relocation can help ensure a smoother
              transition.
            </p>
            <div class="key-points">
              <ul className="list-disc list-outside">
                <li className="text-para">
                  <span className="text-para">Planning and Preparation:</span>{" "}
                  Early planning, securing visas, healthcare, and insurance.
                </li>
                <li className="text-para">
                  <span className="text-para">Logistics:</span> Hiring an
                  international moving company, choosing shipping options, and
                  understanding customs regulations.
                </li>
                <li className="text-para">
                  <span className="text-para">Settling In:</span> Securing
                  accommodation, banking and finances, and cultural integration.
                </li>
                <li className="text-para">
                  <span className="text-para">Legal and Documentation:</span>{" "}
                  Managing important documents, driving licenses, and residency
                  permits.
                </li>
                <li className="text-para">
                  <span className="text-para">Family Considerations:</span>{" "}
                  Schooling for children and support for spouses or partners.
                </li>
              </ul>
            </div>
          </div>

          <div class="section my-2">
            <h2 className="text-heading font-bold">Vehicle Moving</h2>
            <p className="text-para">
              Vehicle moving services provide a specialized solution for
              transporting vehicles from one location to another, often over
              long distances or across borders.
            </p>
            <div class="key-points">
              <ul className="list-disc list-outside">
                <li className="text-para">
                  <span className="text-para">Types of Transport:</span> Open
                  transport and enclosed transport options available.
                </li>
                <li className="text-para">
                  <span className="text-para">Door-to-Door Service:</span>{" "}
                  Vehicle pickup and delivery directly to the destination.
                </li>
                <li className="text-para">
                  <span className="text-para">
                    Terminal-to-Terminal Service:
                  </span>{" "}
                  A more cost-effective option with pickup and drop-off at
                  designated terminals.
                </li>
                <li className="text-para">
                  <span className="text-para">
                    Professional Loading and Unloading:
                  </span>{" "}
                  Experienced professionals handle vehicle loading and
                  unloading.
                </li>
                <li className="text-para">
                  <span className="text-para">Insurance Coverage:</span>{" "}
                  Protection against unforeseen incidents during transport.
                </li>
                <li className="text-para">
                  <span className="text-para">Tracking:</span> Monitor the
                  progress of your vehicle as it is being transported.
                </li>
                <li className="text-para">
                  <span className="text-para">Special Requirements:</span>{" "}
                  Accommodating special needs like moving non-operational
                  vehicles.
                </li>
                <li className="text-para">
                  <span className="text-para">Regulatory Compliance:</span>{" "}
                  Ensuring the move is conducted legally and safely.
                </li>
              </ul>
            </div>
          </div>

          <div class="my-2 section">
            <h2 className="text-heading font-bold">Storage Solutions</h2>
            <div class="section ">
              <h2 className="text-para bold">Normal Storage</h2>
              <p className="text-para">
                Normal storage facilities provide a basic, no-frills storage
                environment. These units are typically not climate-controlled
                but are perfect for items that are not sensitive to temperature
                or humidity changes. This option is usually the most
                cost-effective and is suitable for:
              </p>
              <div class="key-points">
                <ul className="list-disc list-outside">
                  <li className="text-para">Non-perishable items</li>
                  <li className="text-para">
                    Furniture that is not sensitive to temperature changes
                  </li>
                  <li className="text-para">
                    Seasonal items such as holiday decorations
                  </li>
                  <li className="text-para">Sports equipment</li>
                </ul>
              </div>
            </div>

            <div class="section my-2">
              <h2 className="text-para font-bold">Air-Conditioned Storage</h2>
              <p className="text-para">
                Air-conditioned storage units maintain a controlled environment,
                keeping a consistent temperature and often humidity levels. This
                type of storage is ideal for items that could be damaged by
                extreme temperatures or fluctuating humidity. It is particularly
                suitable for:
              </p>
              <div class="key-points">
                <ul className="list-disc list-outside">
                  <li className="text-para">Artwork and Antiques</li>
                  <li className="text-para">
                    Electronics and Media (Computer IT)
                  </li>
                  <li className="text-para">Furniture</li>
                  <li className="text-para">Apparel</li>
                  <li className="text-para">Leather Products</li>
                  <li className="text-para">Medical Equipment</li>
                  <li className="text-para">Food Items</li>
                </ul>
              </div>
              <p className="text-para">
                Air-conditioned storage typically costs more than normal storage
                but provides added protection for valuable or sensitive items.
              </p>
            </div>

            <div class="section my-2">
              <h2 className="text-para font-bold">Self-Storage</h2>
              <p className="text-para">
                Self-storage facilities offer a do-it-yourself storage solution
                where you rent a unit and have control over how your items are
                stored. These units can vary in size and may offer features like
                climate control. Self-storage is a flexible option that is ideal
                for:
              </p>
              <div class="key-points">
                <ul className="list-disc list-outside">
                  <li className="text-para">Individuals</li>
                  <li className="text-para">
                    Businesses needing extra space for inventory or equipment
                  </li>
                  <li className="text-para">
                    Long-term travels or deployments
                  </li>
                  <li className="text-para">
                    Seasonal storage needs (e.g., winter gear or summer sports
                    equipment)
                  </li>
                </ul>
              </div>
              <p className="text-para">
                Self-storage units provide access often 24/7, allowing you to
                access your belongings whenever you need. This type of storage
                offers a high degree of flexibility and control, making it a
                popular choice for both personal and business use.
              </p>
            </div>

            <div class="section my-2">
              <h2 className="text-para font-bold">
                Choosing the Right Storage Solution
              </h2>
              <p className="text-para">
                When selecting a storage solution, consider the following
                factors:
              </p>
              <div class="key-points">
                <ul className="list-disc list-outside">
                  <li className="text-para">
                    <span className="text-para">Nature of the Items:</span>{" "}
                    Determine if your items need special care such as climate
                    control.
                  </li>
                  <li className="text-para">
                    <span className="text-para">Budget:</span> Assess how much
                    you are willing to spend. Air-conditioned storage will cost
                    more than normal storage.
                  </li>
                  <li className="text-para">
                    <span className="text-para">Access Needs:</span> Consider
                    how often you need to access your items. Self-storage offers
                    more flexibility compared to other options.
                  </li>
                  <li className="text-para">
                    <span className="text-para">Security:</span> Ensure the
                    facility offers adequate security measures to protect your
                    belongings.
                  </li>
                </ul>
              </div>
              <p className="text-para">
                By understanding the differences and benefits of each storage
                type, you can choose the solution that best fits your needs,
                ensuring your items are safely stored and preserved.
              </p>
            </div>
          </div>
          {/*
                        <Collapse
                            size="middle"
                            items={[
                                {
                                    label: 'The Service',
                                    collapsible: "disabled",
                                    showArrow: false,
                                    expandIcon: "disabled"
        
                                },
                                {
                                    key: '1',
                                    label: 'This is large size panel header',
                                    children: <p>{text}</p>,
                                },
                                {
                                    key: '1',
                                    label: 'This is large size panel header',
                                    children: <p>{text}</p>,
                                },
                                {
                                    key: '1',
                                    label: 'This is large size panel header',
                                    children: <p>{text}</p>,
                                },
                            ]}
                        />
                    */}
        </div>
        <div className="w-11/12 sm:w-2/5 lg:w-[30%] xl:w-[25%] m-auto shadow-xl md:h-[310px] lg:h-auto rounded-md px-4 py-6 lg:mt-8 border-[1.5px]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-md md:text-lg text-black mt-">
                Contact our Account Manager
              </p>
            </div>
            <div className="flex items-center gap-6 mt-3">
                <img src={logo3} alt="" style={{objectFit:"contain"}} className="w-16 h-16 shadow-lg rounded-full cursor-pointer" />
              <div>
                <h2 className="text-md md:text-lg">
                  {data?.contactManagerName}
                </h2>
                <button
                  onClick={openWhatsApp}
                  className=" bg-[#C1E1EE] text-black text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SmalllFooter />
    </>
  );
};
export default Help_Desk;
