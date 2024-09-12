import { Outlet } from "react-router-dom"
import PartnerHeader from "../pages/header/becomePartner-Header"
import { useNavigate } from "react-router-dom"
import { getIsPartnerWappVerified, requestPartnerEmailOTP, requestPartnerWAppOTP, verifyPartnerWappOTP } from "../apiFunctions/partner"
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
    const [showEmailVerificationModal, setShowEmailVerificationModal] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [isVerificationEmailSend, setIsVerificationEmailSent] = useState(false)

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


    const getEmailOTPMutation = useMutation({
        mutationKey: "fetchEmailOtp",
        mutationFn: requestPartnerEmailOTP,
        onSuccess: (d) => {
            console.log(d)
            toast.success("Verification code sent successfully!")
        },
        onSettled: (d, e) => console.log(d, e),
    });

    const fetchPartnerWappStatus = useQuery({
        queryKey: ["getIsPartnerWappVerified", user._id],
        queryFn: getIsPartnerWappVerified
    })
    const isPartnerVerified = fetchPartnerWappStatus?.data?.data?.wappVerified ?? false
    const isPartnerEmailVerified = fetchPartnerWappStatus?.data?.data?.emailVerified ?? false

    console.log(user, " statussssssss")

    useEffect(() => {
        if (!user?.isPartner) navigate("/");
        if (!user?.proof && window.location.pathname !== '/partner/documentsVerification') navigate("/partner/documentsVerification");
    }, [])


    console.log("WHATTTTTTT", isPartnerVerified, fetchPartnerWappStatus)

    useEffect(() => {
        if (!isPartnerVerified) {
            setShowVerificationModal(true)
            console.log(user)
        } else if (!isPartnerEmailVerified && isPartnerVerified) {
            console.log("idhar")
            setShowVerificationModal(false)
            setShowEmailVerificationModal(true)
            if (!isVerificationEmailSend) {
                getEmailOTPMutation.mutate(user?.email)
            }
            setIsVerificationEmailSent(true)
        } else {
            setShowVerificationModal(false)
            setShowEmailVerificationModal(false)
        }
    }, [fetchPartnerWappStatus])

    const refetchStatus = fetchPartnerWappStatus.refetch


    if (getIsPartnerWappVerified.isLoading) {
        return <LoaderLayout>
            <Truck />
        </LoaderLayout>
    }



    console.log(isPartnerVerified, "VERRRR", showVerificationModal)




    return (
        <div className=" max-w-[1440px] mx-auto">
            {
                showEmailVerificationModal ? (
                    <MyModal>
                        <div onClick={() => {
                            localStorage.removeItem('userData')
                            setUser({})
                            navigate('/')
                        }} className="absolute  cursor-pointer top-10 right-10  py-2 px-4 rounded bg-primary text-black">
                            Logout
                        </div>
                        <div className="bg-white rounded-lg h-48 w-96">
                            <h1 className="text-primary font-bold text-2xl text-center pt-4">
                                Please verify your email
                            </h1>
                            <p className="text-center text-gray-500">
                                A verification message is sent to your Email
                            </p>
                            <div className="flex justify-center mt-4">
                                <VerifyOTP email={user?.email} refetchStatus={refetchStatus} showModal={setShowVerificationModal} />
                            </div>
                        </div>
                    </MyModal>
                ) : null
            }
            {
                showVerificationModal ? (
                    <MyModal>
                        <div onClick={() => {
                            localStorage.removeItem('userData')
                            setUser({})
                            navigate('/')
                        }} className="absolute  cursor-pointer top-10 right-10  py-2 px-4 rounded bg-primary text-black">
                            Logout
                        </div>
                        <div className="bg-white rounded-lg h-48 w-96">
                            <h1 className="text-primary font-bold text-2xl text-center pt-4">
                                Verify that it's you!
                            </h1>
                            {
                                isButtonDisabled ? (
                                    <>
                                        <p className="text-center text-gray-500">
                                            A verification message is sent on your WhatsApp! Please verify.
                                        </p>
                                        <div className="flex justify-center mt-4">
                                            <VerifyOTP telephone={user?.telephone} refetchStatus={refetchStatus} showModal={setShowVerificationModal} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="h-[50%] flex flex-col justify-between">
                                        <p className="text-center text-gray-500">
                                            Click on the button below to send OTP.
                                        </p>
                                        <div className="w-full bg- flex mt-2 justify-center">
                                            <button disabled={isButtonDisabled} className={` rounded text-black px-5 text-xs py-1 ${isButtonDisabled ? "bg-slate-400" : "bg-primary"} `} onClick={() => getOtpMutation.mutate(user.telephone)}>
                                                Send OTP
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
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
