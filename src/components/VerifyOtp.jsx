import { useState } from "react";
import OTPInput from "react-otp-input"
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { verifyPartnerWappOTP } from "../apiFunctions/partner";

const VerifyOTP = ({refetchStatus,telephone, showModal}) => {
    const [otp, setOtp] = useState('');

    const verifyOtpMutation = useMutation({
        mutationKey: "verifyWappOTP",
        mutationFn: verifyPartnerWappOTP,
        onSuccess: (d) => {
            console.log(d, "OTPPPPPPPPPPP RESSSSSSSSSSSS")
            if (d?.data?.verified) {
                toast.success("OTP verified successfully!")
                refetchStatus()
                showModal(false)
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

    return (
        <OTPInput
        value={otp}
            onChange={(val) => {
                if (val.length === 4) {
                    verifyOtpMutation.mutate({
                        telephone,
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
    )
}

export default VerifyOTP
