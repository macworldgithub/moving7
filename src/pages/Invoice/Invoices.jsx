import React from 'react'
// import { IoIosArrowDown } from "react-icons/io";
import QuotePicker from '../quotesRequest/datePicker'
import QuoteDropdown from '../quotesRequest/DropDown'
import TimeLine from '../quotesRequest/Timeline'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import UserImg from '../../assets/images/overview/Group 17.png'
import SmalllFooter from '../footer/smalllFooter';
import { getContactManagerDetails, getPartnerInvoices, getPartnerQuotes } from '../../apiFunctions/partner';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Modal } from 'antd';
import MyModal from '../../components/Modal/Modal';
import LoaderLayout from '../../components/Loaders/LoaderLayout';
import Truck from '../../components/Loaders/Truck';
import InvoiceItem from './InvoiceItem';
import InvoiceDetailsModal from './InvoiceDetailsModal';

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
    const [quotationData, setQuotationData] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [pageNo, setPageNo] = useState(0)
    const partnerInvoicesRes = useQuery({
        queryKey: ["fetchPartnerQuotes", {
            id: json?._id,
            pageNo,
            fromDate: dates.fromDate,
            toDate: dates.toDate,
        }],
        queryFn: getPartnerInvoices,
    });
    const contactManagerRes = useQuery({
        queryKey: ["getContactManagerDetails"],
        queryFn: getContactManagerDetails
    })

    if (contactManagerRes.isLoading) {
        return (<LoaderLayout>
            <Truck />
        </LoaderLayout>)
    }


    const ManagerData = contactManagerRes?.data?.data ?? {}

    const openWhatsApp = () => {
        window.open(`https://wa.me/${ManagerData?.contactManagerContactNumber}`, '_blank');
    };
    const partnerInvoicesData = partnerInvoicesRes?.data?.data?.invoices ?? []
    const totalInvoices = partnerInvoicesRes?.data?.data?.total ?? []
    const refetchInvoices = partnerInvoicesRes.refetch
    return (
        <>
            <div className='flex flex-col md:flex-row mt-8 lg:mt-10 gap-4 px-4 lg:mb-96'>
                <div className='rounded-b-none sm:w-[80%] lg:w-[60%] flex lg:ml-28 py-4 px-8 sm:h-48 md:h-52 lg:h-28 rounded-lg border-[1.5px] border-b-0 relative '>
                    <div className='w-full'>
                        <h2 className='text-lg font-medium mb-2'>Invoices</h2>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-2 xl:gap-10 '>
                            <QuotePicker dates={dates} setDate={setDates} />
                        </div>
                        <table className='lg:mt-[12px] w-full mt-4 sm:mt-4 mt-5 -ml-8 lg:-ml-8 rounded-b-md absolute'>
                            <thead className='px-4 py-3 bg-[#E6EBEC]'>
                                <tr>
                                    <th className='py-3'>Id</th>
                                    <th className='py-3'>From</th>
                                    <th className='py-3'>To</th>
                                    <th className='py-3'>Paid At</th>
                                    <th className='py-3'>Amount</th>
                                    <th className='py-3'>Status</th>
                                    <th className='py-3'>PDF</th>
                                </tr>
                            </thead>
                            <tbody className='bg-gray-100'>
                                {partnerInvoicesData?.length > 0 ? (
                                    partnerInvoicesData?.map((inv, index) => {
                                        return (
                                            <InvoiceItem setShowModal={setShowModal} setData={setQuotationData} inv={inv} />
                                        )
                                    }
                                    )) : (
                                    <tr className='bg-[#EFF2F3]'>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className='py-16 w-80 px-4 text-center text-gray-400'>No invoices yet.</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr bg-gray-100>
                                    <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
                                        Total Records : {totalInvoices}
                                    </td>
                                    <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
                                        Page {pageNo + 1} of {Math.ceil(totalInvoices / 10)}
                                    </td>
                                    <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
                                    </td>
                                    <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
                                    </td>
                                    <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
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
                                            disabled={pageNo === Math.ceil(totalInvoices / 10) - 1}
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

    

                <InvoiceDetailsModal setShowModal={setShowModal} invoiceId={quotationData.invoiceStripeId} email={json.email} />







                </MyModal >
            }
        </>
    )
}
