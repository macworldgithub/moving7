import "./../../App.css";

import img from "../../assets/images/Frame(3).svg";
import Frame1 from "../../assets/images/Frame (1).svg";
import Frame2 from "../../assets/images/Frame (2).svg";

function ChooseUs() {
    return (
        <div className="items-center flex flex-col flex-wrap justify-between pt-6 pb-2 px-8 size-full md:flex md:flex-col lg:items-center lg:flex-wrap lg:justify-center lg:mb-20 lg:mt-9">
            <div className="lg:flex lg:flex-row lg:items-start">
                <div className="md:px-24 lg:px-8">
                    <h2 className="text-2xl pb-6 font-bold lg:text-3xl">
                        Why use Moving7 for relocations?
                    </h2>
                    <h2 className="text-2xl font-bold lg:text-xl">
                        Streamline Your Relocation Experience
                    </h2>
                    <p className="pt-2 pb-2 sm:text-lg text-justify">
                        Relocating can be a complex and stressful process, whether you're moving your home or your business. <span className="font-bold">Moving 7</span> streamlines & simplifies this process by bringing together a wide range of relocation services in one convenient place.
                        </p>


                            <p className="pt-2 pb-6 sm:text-lg text-justify ">
                                Here’s why using <span className="font-bold">Moving 7</span> is incredibly useful:
                                </p>

                                    <h2 className="text-2xl font-bold lg:text-xl">
                                        Comparative Shopping Made Easy
                                    </h2>
                                    <p className="pt-2 pb-6 sm:text-lg text-justify ">
                                        Comparing different relocation companies can be time-consuming. With <span className="font-bold">Moving 7</span>, you can quickly compare prices, services, and customer reviews from multiple providers. This transparency helps you make informed decisions and choose the best option based on your budget and requirements.
                                        </p>





                                            <h2 className="text-2xl font-bold lg:text-xl">
                                                Time and Cost Efficiency
                                            </h2>
                                            <p className="pt-2 pb-6 sm:text-lg text-justify ">
                                                Instead of spending hours researching and contacting different relocation companies, <span className="font-bold">Moving 7</span> saves you time by offering a streamlined process. You can request quotes, check availability, and even book services directly through the platform, reducing the effort and time needed to organize your move.
                                                </p>
                                                    <h2 className="text-2xl font-bold lg:text-xl">
                                                        Trusted Reviews and Ratings
                                                    </h2>
                                                    <p className="pt-2 pb-6 sm:text-lg text-justify ">
                                                        <span className="font-bold">Moving 7</span> features customer reviews and ratings for each relocation company listed. These reviews provide valuable insights into the quality of service, reliability, and professionalism of the companies. You can trust the feedback from other customers to guide your choice and ensure a smooth moving experience.
                                                        </p>
                                                            <h2 className="text-2xl font-bold lg:text-xl">
                                                                Access to Specialized Services
                                                            </h2>
                                                            <p className="pt-2 pb-6 sm:text-lg text-justify ">
                                                                Whether you need help with packing, storage, or moving delicate items, <span className="font-bold">Moving 7</span> connects you with companies that offer specialized services tailored to your needs. This ensures that you find providers with the expertise required to handle specific aspects of your relocation efficiently.
                                                                </p>



                                                                    <h2 className="text-2xl font-bold lg:text-xl">
                                                                        Convenient and User-Friendly
                                                                    </h2>
                                                                    <p className="pt-2 pb-6 sm:text-lg text-justify ">
                                                                        <span className="font-bold">Moving 7</span> platforms are designed to be user-friendly, with intuitive search and filter options. You can easily find relocation companies based on location, service type, or other criteria, making the entire process straightforward and hassle-free.
                                                                        </p>



                                                                            <p className="pt-6 pb-6 sm:text-lg text-justify ">
                                                                                Finally, <span className="font-bold">Moving 7</span> for relocation companies is an invaluable tool for anyone planning a move. By offering a centralized platform to compare options, access specialized services, and read trusted reviews, it transforms a potentially overwhelming process into a manageable and efficient experience. Save time, reduce stress, and make informed decisions with the help of <span className="font-bold">Moving 7</span>.
                                                                                </p>















                                                                                </div>
                                                                                    <div className="flex flex-wrap flex-col items-center text-center sm:flex sm:flex-row justify-evenly pt-4 basis-1/2 gap-6  md:flex md:flex-row lg:flex lg:flex-nowrap lg:gap-4">
                                                                                        <div>
                                                                                            <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-44 flex items-center justify-center">
                                                                                                <img src={img} alt="" />
                                                                                            </div>
                                                                                            <h3 className="py-6 font-medium text-gray-500">Save Time</h3>
                                                                                        </div>
                                                                                        <div>
                                                                                            <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-44 flex items-center justify-center">
                                                                                                <img className="img-height" src={Frame1} alt="" />
                                                                                            </div>
                                                                                            <h3 className="py-6 font-medium text-gray-500">Save Money</h3>
                                                                                        </div>
                                                                                        <div>
                                                                                            <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-44 flex items-center justify-center">
                                                                                                <img src={Frame2} alt="" />
                                                                                            </div>
                                                                                            <h3 className="py-6 font-medium text-gray-500">
                                                                                                Receive multiple quotes
                                                                                            </h3>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                                );
}

                                                                                export default ChooseUs;
