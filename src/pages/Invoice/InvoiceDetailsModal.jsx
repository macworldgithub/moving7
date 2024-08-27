import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getPartnerReqOfInvoice } from "../../apiFunctions/partner";
import MyModal from "../../components/Modal/Modal";

const InvoiceDetailsModal = ({ setShowModal, invoiceId, email }) => {

    const [showReqModal, setShowReqModal] = useState(false)

    const { id } = useParams()
    const [quotationData, setQuotationData] = useState("")

    const navigate = useNavigate()
    console.log(invoiceId, "here")
    const partnerReqOfInvoiceRes = useQuery({
        queryKey: ["fetchansdiofnasodinf", {
            email,
            stripeInvoiceId: invoiceId
        }],
        queryFn: getPartnerReqOfInvoice,
    });


    const requests = partnerReqOfInvoiceRes?.data?.data?.quotes ?? []
    const totalRequests = partnerReqOfInvoiceRes?.data?.data?.total ?? []

    console.log(requests, " there ")

    return (
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
                <h1 className="px-10 text-xl text-[#fffff] fontbold bold">
                    Paid for the following requests
                </h1>

                <table className=' w-full rounded-b-md  mt-7'>
                    <thead className='px-4 py-3 bg-[#E6EBEC]'>
                        <tr>
                            <th className='py-3'>Name</th>
                            <th className='py-3'>Email</th>
                            <th className='py-3'>Requested Time</th>
                            <th className='py-3'>Moving Type</th>
                            <th className='py-3 pe-3'>View</th>
                        </tr>
                    </thead>
                    <tbody className='bg-gray-100'>
                        {requests?.length > 0 ? (
                            requests?.map((quote, index) => {

                                return (
                                    <>
                                        <tr key={index} className="cursor-pointer" onClick={() => {
                                            setQuotationData(quote)
                                            setShowReqModal(true)
                                        }}>
                                            <td className='text-center py-2'>{quote?.name}</td>
                                            <td className='text-center'>{quote?.email}</td>
                                            <td className='text-center'>{new Date(quote?.requestTime)?.toLocaleString()}</td>
                                            <td className='text-center'>{quote?.movingType}</td>
                                            <td className='text-center py-2 pe-3'>View</td>
                                        </tr>

                                    </>
                                )
                            }
                            )) : (
                            <tr className='bg-[#EFF2F3]'>
                                <td></td>
                                <td></td>
                                <td className='py-16 w-80 px-4 text-center text-gray-400'>No quote requests </td>
                                <td></td>
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
                            </td>
                            <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
                            </td>
                            <td className="p-2 bg-gray-100 fs-5 text-dark font-primary text-center">
                            </td>
                            <td class=" text-center bg-gray-100">
                            </td>
                        </tr>
                    </tfoot>

                </table>


            </div>
            {
                showReqModal &&
                <MyModal styleClasses="absolute">



                    <div className="lg:w-[50%] min-h-[70%] max-h-[70%]  overflow-y-scroll pb-5 bg-primary rounded-xl p-2 shadow-blue-300 shadow-md flex flex-col  ">
                        <div className="flex justify-end">

                            <p className='cursor-pointer' onClick={() => setShowReqModal(false)}>
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
                                <div className="flex mt-4 w-64 border-black  me-5 flex-col items-start border-b-2 justify-start">
                                    <p className="text-[#fffff]">
                                        Moving Type
                                    </p>

                                    <p className="text-gray-500 py-1 w-ful">
                                        {quotationData?.movingType}
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
        </div>
    )
}

export default InvoiceDetailsModal
