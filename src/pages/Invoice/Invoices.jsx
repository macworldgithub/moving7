import React from 'react'
// import { IoIosArrowDown } from "react-icons/io";
import QuotePicker from '../quotesRequest/datePicker'
import QuoteDropdown from '../quotesRequest/DropDown'
import TimeLine from '../quotesRequest/Timeline'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import UserImg from '../../assets/images/overview/Group 17.png'
import SmalllFooter from '../footer/smalllFooter';
import { getContactManagerDetails, getPartnerQuotes } from '../../apiFunctions/partner';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Modal } from 'antd';
import MyModal from '../../components/Modal/Modal';
import LoaderLayout from '../../components/Loaders/LoaderLayout';
import Truck from '../../components/Loaders/Truck';

let Projects = [
    { Name: "Bilal" },
    { Status: "Open" },
    { Date: "20-04-2000" }

]

export default function Invoices() {
    const userData = window.localStorage.getItem("userData")
    const json = JSON.parse(userData)
    const [dates, setDates] = useState({
        fromDate: "",
        toDate: ""
    })
    const [searchQuery, setSearchQuery] = useState("")
    const [quotationData, setQuotationData] = useState("")
    const [showModal, setShowModal] = useState(false)
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
    const contactManagerRes = useQuery({
        queryKey: ["getContactManagerDetails"],
        queryFn: getContactManagerDetails
    })

    if (partnerQuotesRes.isLoading || contactManagerRes.isLoading) {
        return (<LoaderLayout>
            <Truck />
        </LoaderLayout>)
    }


    const ManagerData = contactManagerRes?.data?.data ?? {}

    const openWhatsApp = () => {
        window.open(`https://wa.me/${ManagerData?.contactManagerContactNumber}`, '_blank');
    };
    const partnerQuotesData = partnerQuotesRes?.data?.data?.quotes ?? []
    const totalRequests = partnerQuotesRes?.data?.data?.total ?? []
    const prJunction = partnerQuotesRes?.data?.data?.res ?? []
    const refetchQuotes = partnerQuotesRes.refetch
    console.log(prJunction, "pageno")
    return (
        <>
            <div className='flex flex-col md:flex-row mt-8 lg:mt-10 gap-4 px-4 lg:mb-96'>
                <div className='rounded-b-none sm:w-[80%] lg:w-[60%] flex lg:ml-28 py-4 px-8 sm:h-48 md:h-52 lg:h-28 rounded-lg border-[1.5px] border-b-0 relative '>
                    <div className='w-full'>
                        <h2 className='text-lg font-medium mb-2'>Quote Request</h2>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-2 xl:gap-10 '>
                            <QuotePicker dates={dates} setDate={setDates} />
                            {/*<QuoteDropdown />*/}
                            <div className='flex'>
                                <input type="search" placeholder='E.g. Peter' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='border rounded-r-none border-gray-300 px-6 w-28 outline-none rounded-md' />
                                <button className=' bg-[#C1E1EE] text-black py-2 px-6 text-md rounded-sm rounded-l-none'>Search</button>
                            </div>
                        </div>
                        <table className='lg:mt-[12px] w-full mt-4 sm:mt-4 mt-5 -ml-8 lg:-ml-8 rounded-b-md absolute'>
                            <thead className='px-4 py-3 bg-[#E6EBEC]'>
                                <tr>
                                    <th className='py-3'>Name</th>
                                    <th className='py-3'>Email</th>
                                    <th className='py-3'>Status</th>
                                    <th className='py-3'>Requested At</th>
                                </tr>
                            </thead>
                            <tbody className='bg-gray-100'>
                                {partnerQuotesData?.length > 0 ? (
                                    partnerQuotesData?.map((quote, index) => {
                                        const status = prJunction.filter((elem) => elem.quoteId === quote._id)[0].status

                                        return (
                                            <tr key={index} className="cursor-pointer" onClick={() => {
                                                setShowModal(true)
                                                setQuotationData(quote)
                                            }}>
                                                <td className='text-center py-2'>{quote?.name}</td>
                                                <td className='text-center'>{quote?.email}</td>
                                                <td className='text-center py-2'>{status ? status : "Not Paid"}</td>
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
                                    <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
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


                <div className='w-full md:w-[50%] lg:w-[27%] xl:w-[23%] mt-60 sm:mt-0'>
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
                            incorrect telephone numbers. <span className='text-[#fffff]'>Terms & Conditions</span></p>

                        <div className='flex items-center justify-between border-b-2 mt-4'>
                            <h2 className=' font-medium mb-4'>Help Desk</h2>
                            <IoIosArrowForward />
                        </div>
                        <div className='flex gap-6 mt-3 py-4'>
                            <img src={UserImg} alt="" className=' cursor-pointer' />
                            <div>
                                <h2 className='text-md md:text-lg'>{ManagerData?.contactManagerName}</h2>
                                <button className='bg-[#C1E1EE] text-black text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1' onClick={openWhatsApp}>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <SmalllFooter />

            {
                showModal &&
                <MyModal >



                    <div className="lg:w-[50%] min-h-[70%] max-h-[70%]  overflow-y-scroll pb-5 bg-primary rounded-xl p-2 shadow-blue-300 shadow-md flex flex-col  ">
                        <div className="flex justify-end">

                            <p className='cursor-pointer' onClick={() => setShowModal(false)}>
                                X
                            </p>
                        </div>
                        <div className=" gap-2 w-full h-full">
                            <h1 className="px-10 text-3xl text-[#fffff] fontbold bold">
                                Details
                            </h1>
                            <div className="flex mx-10 my-2 justify-between flex-wrap">
                                <div className="flex w-64 border-black  me-5 flex-col items-start border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        Move From
                                    </p>

                                    <p className="text-gray-500 py-1 w-ful">
                                        {quotationData?.moveFrom}
                                    </p>
                                </div>

                                <div className="flex w-64 flex-col items-start  border-black justify-start border-b-2 ">
                                    <p className="text-[#fffff]">
                                        Move To
                                    </p>

                                    <p className="text-gray-500  border-black">
                                        {quotationData?.moveTo}
                                    </p>
                                </div>
                            </div>


                            <h1 className="text-2xl my-4 text-[#fffff] mx-10">
                                Current Property
                            </h1>


                            <div className="flex my-2 mx-10 justify-between flex-wrap">
                                <div className="flex w-64  me-5 flex-col  border-black items-start border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        Type
                                    </p>

                                    <p className="text-gray-500 py-1 w-ful ">
                                        {quotationData?.currPropertyType}
                                    </p>
                                </div>

                                <div className="flex w-64 flex-col items-start  border-black justify-start border-b-2 ">
                                    <p className="text-[#fffff]">
                                        Bedrooms
                                    </p>

                                    <p className="text-gray-500">
                                        {quotationData?.currPropertyBedrooms}
                                    </p>
                                </div>
                            </div>


                            {
                                quotationData?.currPropertyType === "appartment" ? (
                                    <div className="flex my-2 mx-10 justify-between flex-wrap">
                                        <div className="flex w-64  me-5 flex-col items-start border-black border-b-2 justify-start">
                                            <p className="text-[#fffff]">
                                                No of Floors
                                            </p>

                                            <p className="text-gray-500 py-1 w-ful">
                                                {quotationData?.currPropertyFloorNo}
                                            </p>
                                        </div>

                                        <div className="flex w-64 flex-col items-start justify-start border-b-2 border-black ">
                                            <p className="text-[#fffff]">
                                                Lift
                                            </p>

                                            <p className="text-gray-500">
                                                {quotationData?.hasCurrPropertyLift}
                                            </p>
                                        </div>
                                    </div>

                                ) : (
                                    null
                                )
                            }








                            <h1 className="text-2xl my-4 text-[#fffff] mx-10">
                                New Property
                            </h1>


                            <div className="flex my-2 mx-10 justify-between flex-wrap">
                                <div className="flex w-64  me-5 flex-col items-start border-black border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        Type
                                    </p>

                                    <p className="text-gray-500 py-1 w-ful">
                                        {quotationData?.newPropertyType}
                                    </p>
                                </div>

                                <div className="flex w-64 flex-col items-start justify-start border-black border-b-2 ">
                                    <p className="text-[#fffff]">
                                        Bedrooms
                                    </p>

                                    <p className="text-gray-500">
                                        {quotationData?.newPropertyBedrooms}
                                    </p>
                                </div>
                            </div>


                            {
                                quotationData?.newPropertyType === "appartment" ? (
                                    <div className="flex my-2 mx-10 justify-between flex-wrap">
                                        <div className="flex w-64  me-5 flex-col items-start border-black border-b-2 justify-start">
                                            <p className="text-[#fffff]">
                                                No of Floors
                                            </p>

                                            <p className="text-gray-500 py-1 w-ful">
                                                {quotationData?.newPropertyFloorNo}
                                            </p>
                                        </div>

                                        <div className="flex w-64 flex-col items-start justify-start border-black border-b-2 ">
                                            <p className="text-[#fffff]">
                                                Lift
                                            </p>

                                            <p className="text-gray-500">
                                                {quotationData?.hasNewPropertyLift}
                                            </p>
                                        </div>
                                    </div>

                                ) : (
                                    null
                                )
                            }






                            <div className="flex mx-10 my-2 justify-between flex-wrap">
                                <div className="flex w-64  me-5 flex-col items-start  border-black border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        Scope of Work
                                    </p>

                                    <p className="text-gray-500 text-left py-1 w-ful">
                                        {quotationData?.newPropertyAdditionalInfo?.join(" , ")}
                                    </p>
                                </div>

                            </div>


                            <h1 className="text-2xl my-4 text-[#fffff] mx-10">
                                Date
                            </h1>


                            <div className="flex mx-10 my-2 justify-between flex-wrap">
                                <div className="flex w-64  me-5 flex-col items-start border-black border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        Moving Date Preference
                                    </p>

                                    <p className="text-gray-500 py-1 w-ful">
                                        {quotationData?.movingDatePref}
                                    </p>
                                </div>

                            </div>





                            <div className="flex mx-10 my-2 justify-between flex-wrap">
                                <div className="flex w-64  me-5 flex-col items-start border-black border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        {quotationData?.movingDatePref === "flexible" ? "Start Date" : "Date"}
                                    </p>

                                    <p className="text-gray-500 py-1 w-ful">
                                        {quotationData?.movingDatePref === "flexible" ? quotationData?.startDate : quotationData?.specificDate}
                                    </p>
                                </div>

                                <div className="flex w-64 flex-col items-start justify-start border-black border-b-2 ">
                                    <p className="text-[#fffff]">
                                        {quotationData?.movingDatePref === "flexible" ? "End Date" : "Time"}
                                    </p>

                                    <p className="text-gray-500">
                                        {quotationData?.movingDatePref === "flexible" ? quotationData?.endDate : quotationData?.specificTime}
                                    </p>
                                </div>
                            </div>





                            <h1 className="text-2xl my-4 text-[#fffff] mx-10">
                                Customer Details
                            </h1>


                            <div className="flex my-2 mx-10 justify-between flex-wrap">
                                <div className="flex w-64  me-5 flex-col items-start border-black border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        Name
                                    </p>

                                    <p className="text-gray-500 py-1 w-ful">
                                        {quotationData?.name}
                                    </p>
                                </div>

                                <div className="flex w-64 flex-col items-start justify-start border-black border-b-2 ">
                                    <p className="text-[#fffff]">
                                        Email
                                    </p>

                                    <p className="text-gray-500">
                                        {quotationData?.email}
                                    </p>
                                </div>
                            </div>



                            <div className="flex my-2 mx-10 justify-between flex-wrap">
                                <div className="flex w-64  me-5 flex-col items-start border-black border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        Contact number
                                    </p>

                                    <p className="text-gray-500 py-1 w-ful">
                                        {quotationData?.wappNum}
                                    </p>
                                </div>

                                <div className="flex w-64 flex-col items-start justify-start border-black border-b-2 ">
                                    <p className="text-[#fffff]">
                                        Flat name / Office / Villa
                                    </p>

                                    <p className="text-gray-500">
                                        {quotationData?.building}
                                    </p>
                                </div>
                            </div>



                            <h1 className="text-2xl my-4 text-[#fffff] mx-10">
                                Budget Range
                            </h1>


                            <div className="flex my-2 mx-10 justify-between flex-wrap">
                                <div className="flex w-64  me-5 flex-col items-start border-black border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        From
                                    </p>

                                    <p className="text-gray-500 py-1 w-ful">
                                        {quotationData?.minBudgetRange} AED
                                    </p>
                                </div>

                                <div className="flex w-64 flex-col items-start justify-start border-black border-b-2 ">
                                    <p className="text-[#fffff]">
                                        To
                                    </p>

                                    <p className="text-gray-500">
                                        {quotationData?.maxBudgetRange} AED
                                    </p>
                                </div>
                            </div>











                        </div>
                    </div>






                </MyModal >
            }
        </>
    )
}
