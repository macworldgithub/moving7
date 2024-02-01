import React from 'react'

import Faqs from './faq'

export default function PartnerFaq() {
    return (
        <div className='flex items-center'>
            <div className='lg:flex items-center mx-auto flex-col lg:mt-12'>
                <h2 className='text-2xl p-6 md:text-2xl font-semibold lg:mb-6'>Frequently Asked Questions</h2>
                <div className='flex justify-between mb-14 gap-4 flex-col md:flex-row'>
                    <div className='flex items-center flex-col'>
                        <Faqs />
                        <Faqs />
                    </div>
                    <div className='flex items-center flex-col'>
                        <Faqs />
                        <Faqs />
                    </div>
                </div>
            </div>

        </div>
    )
}
