import React from "react";

import trust1 from "../../../../assets/images/partnerChooseimg/trust 1.svg";
import together from "../../../../assets/images/partnerChooseimg/together 1.svg";
import play from "../../../../assets/images/partnerChooseimg/Vector (1).svg";

import "./choose.css";

export default function ChooseUs() {
    return (
        <div className='flex justify-evenly items-center flex-col md:flex-row md:gap-0 gap-6 mt-0 sm:mt-[35px] lg:mt-[50px] md:p-1 custom-responsive'>
            <div className=' w-3/4 lg:w-1/3 p-4'>
                <h3 className=' text-2xl font-medium mt-8'>Why choose us?</h3>
                <p className='text-lg'>With over 15 years of experience and operations in over 150 markets worldwide, we are the most trusted name in international and domestic moving services.</p>
            </div>
            <div className='flex justify-center md:flex-start flex-col sm:flex-row flex-wrap text-center md:items-top gap-8 custom-flex'>
                <div>
                    <div className=' w-40 h-36 shadow-sm bg-[#f5f5f5] flex items-center justify-center rounded-2xl'>
                        <div>
                            <img src={trust1} alt="" />
                        </div>
                    </div>
                    <div className='pt-2'>
                        <h4>Trust</h4>
                    </div>
                </div>

                <div>
                    <div className=' w-40 h-36 shadow-sm bg-[#f5f5f5] flex items-center justify-center rounded-2xl'>
                        <img src={together} alt="" />
                    </div>
                    <div className='pt-2'>
                        <h4>Expertise</h4>
                    </div>
                </div>
                <div>
                    <div className=' w-40 h-36 shadow-sm bg-[#f5f5f5] flex items-center justify-center rounded-2xl'>
                        <img src={play} alt="" />
                    </div>
                    <div className='pt-2'>
                        <h4>Flexibility</h4>
                    </div>
                </div>
            </div>
          </div>
       
  );
}
