import React from 'react'
// import { IoIosArrowDown } from "react-icons/io";
import QuotePicker from '../quotesRequest/datePicker'
import QuoteDropdown from '../quotesRequest/DropDown'
import TimeLine from '../quotesRequest/Timeline'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import UserImg from '../../assets/images/overview/Group 17.png'
import SmalllFooter from '../footer/smalllFooter';
import { getPartnerQuotes } from '../../apiFunctions/partner';
import { useState } from 'react';
import { useQuery } from 'react-query';

let Projects = [
    { Name: "Bilal" },
    { Status: "Open" },
    { Date: "20-04-2000" }

]

export default function QuotesRequest() {
    const userData = window.localStorage.getItem("userData")
    const json = JSON.parse(userData)
    const [dates, setDates] = useState({
        fromDate: "",
        toDate: ""
    })
    const [searchQuery, setSearchQuery] = useState("")
    const [pageNo, setPageNo] = useState(0)
    const partnerQuotesRes = useQuery({
        queryKey: ["fetchPartnerQuotes", {
            email: json?.email,
            pageNo,
            fromDate: dates.fromDate,
            toDate: dates.toDate,
            searchQuery,
        }],
        queryFn: getPartnerQuotes,
    });
    const partnerQuotesData = partnerQuotesRes?.data?.data?.quotes ?? []
    const totalRequests = partnerQuotesRes?.data?.data?.total ?? []
    const refetchQuotes = partnerQuotesRes.refetch
    console.log(pageNo, "pageno")
    console.log(partnerQuotesData, "partnerQuotesData", partnerQuotesRes, "partnerQuotesRes")
    return (
        <>
            <div className='flex flex-col md:flex-row mt-8 lg:mt-10 gap-4 px-4'>
                <div className='shadow-sm rounded-b-none shadow-gray-400 sm:w-[80%] lg:w-[63%] flex lg:ml-28 py-4 px-8 sm:h-48 md:h-52 lg:h-28 relative'>
                    <div className='w-full'>
                        <h2 className='text-lg font-medium mb-2'>Quote Request</h2>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-2 xl:gap-10 '>
                            <QuotePicker dates={dates} setDate={setDates} />
                            {/*<QuoteDropdown />*/}
                            <div className='flex'>
                                <input type="search" placeholder='E.g. Peter' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='border rounded-r-none border-gray-300 px-6 w-28 outline-none rounded-md' />
                                <button className=' bg-[#13C265] text-white py-2 px-6 text-md rounded-sm rounded-l-none'>Search</button>
                            </div>
                        </div>
                        <table className='lg:mt-[12px] w-full mt-4 sm:mt-4 mt-5 -ml-8 lg:-ml-8 rounded-b-md absolute'>
                            <thead className='px-4 py-3 bg-[#E6EBEC]'>
                                <tr>
                                    <th className='py-3'>Name</th>
                                    <th className='py-3'>Email</th>
                                    <th className='py-3'>Requested At</th>
                                </tr>
                            </thead>
                            <tbody className='bg-gray-100'>
                                {partnerQuotesData?.length > 0 ? (
                                    partnerQuotesData?.map((quote, index) => {
                                        return (
                                            <tr key={index} className="cursor-pointer">
                                                <td className='text-center py-2'>{quote?.name}</td>
                                                <td className='text-center'>{quote?.email}</td>
                                                <td className='text-center'>{new Date(quote?.requestTime)?.toLocaleString()}</td>
                                            </tr>

                                        )
                                    }
                                    )) : (
                                    <tr className='bg-[#EFF2F3]'>
                                        <td></td>
                                        <td className='py-16 w-80 px-4 text-center text-gray-400'>No quote requests received yet. We will email you once we have suitable projects.</td>
                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr bg-gray-100>
                                    <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
                                        Total Records : {totalRequests}
                                    </td>
                                    <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
                                        Page {pageNo + 1} of {Math.ceil(totalRequests / 10)}
                                    </td>
                                    <td class=" text-center bg-gray-100">
                                        <button
                                            onClick={() => setPageNo(pageNo - 1)}
                                            disabled={pageNo === 0}
                                            className="border-0 mx-1 text-dgreen bg-white fs-4"
                                        >
                                            <IoIosArrowBack size={20} className="bg-gray-100" />
                                        </button>
                                        <button
                                            onClick={() => setPageNo(pageNo + 1)}
                                            disabled={pageNo === Math.ceil(totalRequests / 10) - 1}
                                            className="border-0 mx-1 text-dgreen bg-white fs-4"
                                        >
                                            <IoIosArrowForward size={20} className="bg-gray-100" />
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>


                <div className='w-full lg:w-[25%] mt-60 sm:mt-0'>
                    <div className='px-4 shadow-lg shadow-gray-300 rounded-lg'>
                        <h2 className='text-lg font-medium border-b-2 mb-4 py-3'>How to get customers reviews</h2>
                        <TimeLine />
                    </div>
                    <div className='px-4 shadow-lg shadow-gray-300 rounded-lg mt-4'>
                        <h2 className='text-lg font-medium border-b-2 mb-4 py-3'>Need help?</h2>
                        <h2 className='text-gray-500 '>Tips $ Best Practices</h2>
                        <p className='p-1 text-gray-400'>Contact a new lead within 8hrs to
                            win more jobs</p>
                        <p className='p-1 text-gray-400'>If you cannot get hold of the potential
                            client, send an email to start the
                            converstation</p>
                        <p className='p-1 text-gray-400'>Use our fair reclaims services for
                            incorrect telephone numbers. <span className='text-[#13C265]'>Terms & Conditions</span></p>

                        <div className='flex items-center justify-between border-b-2 mt-4'>
                            <h2 className=' font-medium mb-4'>Help Desk</h2>
                            <IoIosArrowForward />
                        </div>
                        <div className='flex gap-6 mt-3 py-4'>
                            <img src={UserImg} alt="" className=' cursor-pointer' />
                            <div>
                                <h2 className='text-md md:text-lg'>Asad Khan</h2>
                                <button className=' bg-[#1ABD5E] text-white text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1'>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <SmalllFooter />
        </>
    )
}
