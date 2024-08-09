import { Outlet } from "react-router-dom"
import PartnerHeader from "../pages/header/becomePartner-Header"
import { useNavigate } from "react-router-dom"
import { getIsPartnerWappVerified, requestPartnerWAppOTP, verifyPartnerWappOTP } from "../apiFunctions/partner"
import LoaderLayout from "../components/Loaders/LoaderLayout"
import Truck from "../components/Loaders/Truck"
import { useMutation, useQuery } from "react-query"
import { useState } from "react"
import OTPInput from "react-otp-input"
import MyModal from "../components/Modal/Modal"
import { useEffect } from "react"
import { toast } from "react-toastify"
import VerifyOTP from "../components/VerifyOtp"

const PartnerLayout = ({ user, setUser }) => {
    const navigate = useNavigate()

    const [showVerificationModal, setShowVerificationModal] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const getOtpMutation = useMutation({
        mutationKey: "fetchOtp",
        mutationFn: requestPartnerWAppOTP,
        onSuccess: (d) => {
            console.log(d)
            toast.success("Verification code sent successfully!")
            setIsButtonDisabled(true)
        },
        onSettled: (d, e) => console.log(d, e),
    });

    const fetchPartnerWappStatus = useQuery({
        queryKey: ["getIsPartnerWappVerified", user._id],
        queryFn: getIsPartnerWappVerified
    })
    const isPartnerVerified = fetchPartnerWappStatus?.data?.data?.wappVerified ?? {}

    useEffect(() => {
        if (!isPartnerVerified) {
            setShowVerificationModal(true)
            console.log(user)
        } else {
            setShowVerificationModal(false)
        }
    }, [fetchPartnerWappStatus])

    const refetchStatus = fetchPartnerWappStatus.refetch


    if (getIsPartnerWappVerified.isLoading) {
        return <LoaderLayout>
            <Truck />
        </LoaderLayout>
    }



    console.log(isPartnerVerified, "VERRRR", showVerificationModal)


    if (!user?.isPartner) navigate("/");
    if (!user?.proof) navigate("/partner/documentsVerification");


    return (
        <div className=" max-w-[1440px] mx-auto">
            {
                showVerificationModal ? (
                    <MyModal>
                        <div onClick={() => {
                            localStorage.removeItem('userData')
                            setUser({})
                            navigate('/')
                        }} className="absolute cursor-pointer top-10 right-10  py-2 px-4 rounded bg-primary text-white">
                            Logout
                        </div>
                        <div className="bg-white rounded-lg h-48 w-96">
                            <h1 className="text-primary font-bold text-2xl text-center pt-4">
                                Verify that it's you!
                            </h1>
                            <p className="text-center text-gray-500">
                                A verification message will be sent on your WhatsApp!
                            </p>
                            <div className="flex justify-center mt-4">
                                <VerifyOTP telephone={user?.telephone} refetchStatus={refetchStatus} showModal={setShowVerificationModal} />
                            </div>
                            <div className="w-full bg- flex mt-2 justify-center">
                                <button disabled={isButtonDisabled} className={` rounded text-white px-5 text-xs py-1 ${isButtonDisabled ? "bg-slate-400" : "bg-primary"} `} onClick={() => getOtpMutation.mutate(user.telephone)}>
                                    Send OTP
                                </button>
                            </div>
                        </div>
                    </MyModal>
                ) : null
            }
            <PartnerHeader user={user} setUser={setUser} />
            <Outlet context={[user]} />
        </div>
    )
}

export default PartnerLayout
