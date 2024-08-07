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

const PartnerLayout = ({ user, setUser }) => {
    const navigate = useNavigate()

    const [showVerificationModal, setShowVerificationModal] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [otp, setOtp] = useState('');

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
    const refetchStatus = fetchPartnerWappStatus.refetch
    const verifyOtpMutation = useMutation({
        mutationKey: "verifyWappOTP",
        mutationFn: verifyPartnerWappOTP,
        onSuccess: (d) => {
            console.log(d, "OTPPPPPPPPPPP RESSSSSSSSSSSS")
            if (d?.data?.verified) {
                toast.success("OTP verified successfully!")
                refetchStatus()
                setShowVerificationModal(false)
            }
        },
        onError: (err) => {
            if (err?.response?.data?.message === "wrong code") {
                toast.error("Wrong Code!")
            } else {
                toast.error(err.message)
            }
        },
        onSettled: (d, e) => console.log(d, e),
    });
    useEffect(() => {
        if (!isPartnerVerified) {
            setShowVerificationModal(true)
            console.log(user)
        } else {
            setShowVerificationModal(false)
        }
    }, [fetchPartnerWappStatus])


    if (getIsPartnerWappVerified.isLoading) {
        return <LoaderLayout>
            <Truck />
        </LoaderLayout>
    }

    const isPartnerVerified = fetchPartnerWappStatus?.data?.data?.wappVerified ?? {}


    console.log(isPartnerVerified, "VERRRR", showVerificationModal)


    if (!user?.isPartner) navigate("/");
    if (!user?.proof) navigate("/partner/documentsVerification");
    return (
        <div className=" max-w-[1440px] mx-auto">
            {
                showVerificationModal ? (
                    <MyModal>
                        <div className="bg-white rounded-lg h-48 w-96">
                            <h1 className="text-primary font-bold text-2xl text-center pt-4">
                                Verify that it's you!
                            </h1>
                            <p className="text-center text-gray-500">
                                A verification message is sent to your no through Whats App!
                            </p>
                            <div className="flex justify-center mt-4">
                                <OTPInput
                                    value={otp}
                                    onChange={(val) => {
                                        if (val.length === 4) {
                                            verifyOtpMutation.mutate({
                                                telephone: user?.telephone,
                                                code: val
                                            })
                                        }
                                        console.log(val, "imvalll")
                                        setOtp(val)
                                    }}
                                    numInputs={4}
                                    renderSeparator={<span className="mx-3"></span>}
                                    renderInput={(props) => {
                                        props.className = "text-xl border-b-4 w-10 customOTPclass"
                                        return <input className="text-xl border-b-4" {...props} />
                                    }}

                                />
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
