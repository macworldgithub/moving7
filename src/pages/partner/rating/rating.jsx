import React from 'react'

import ResultsImg from '../../../assets/images/rating/100,000.svg'
import ThousandImg from "../../../assets/images/rating/37,400.svg"
import HundredImg from "../../../assets/images/rating/8.6.svg"

export default function Rating() {
    return (
        <div className='flex items-center justify-around flex-wrap gap-8 sm:p-6 mt-8'>
            <div>
                <img src={ResultsImg} alt="" />
                <div className='flex items-center gap-1'>
                    <h2 className='text-2xl text-[#787878]'>Google results</h2>
                    <span className='mt-2 text-gray-400'>Last month</span>
                </div>
            </div>
            <div>
                <img src={ThousandImg} alt="" />
                <div className='flex items-center gap-1'>
                    <h2 className='text-2xl text-[#787878]'>Removal leads</h2>
                    <span className='mt-2 text-gray-400'>Last month</span>
                </div>
            </div>
            <div>
                <img src={HundredImg} alt="" />
                <div className='flex items-center gap-1'>
                    <h2 className='text-2xl text-[#787878]'>Average rating</h2>
                </div>
            </div>
        </div>
    )
}
