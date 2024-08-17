import { FaTrash } from "react-icons/fa";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { useQuery } from 'react-query';
import { fetchPaymentMethods } from '../../apiFunctions/partner';



const PaymentMethodList = () => {

    const fetchPaymentMethdosRes = useQuery({
        queryKey: ["fetchPaymentMethods"],
        queryFn: fetchPaymentMethods,
        onSettled: (d, e) => {
            console.log(d, e)
        }
    })

    const paymenMethods = fetchPaymentMethdosRes?.data?.data?.data ?? []

    console.log(paymenMethods, "payment")


    return (
        <div className='my-6'>
            <h1 className='text-xl '>
                Payment Methods
            </h1>
            <div className="my-6 ">
                {
                    paymenMethods?.map((pm) => {
                        return (
                            <div className="my-2 rounded-lg justify-between items-center border py-2 px-4 flex">
                                <div className="flex items-center gap-4">
                                    {
                                        pm?.card?.brand === "visa" ? <RiVisaLine className="" size={50} /> : pm?.card?.brand === "mastercard" ? <RiMastercardFill size={50} /> : null
                                    }
                                    <div className="mx-4 ">
                                        <p className="text-sm">
                                           Ending in {pm?.card?.last4}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Expiry date  {pm?.card?.exp_month}/{pm?.card?.exp_year}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <FaTrash className="text-gray-400" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PaymentMethodList
