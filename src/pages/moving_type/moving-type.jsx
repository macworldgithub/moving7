import { useState, useEffect, useRef } from "react";
import OtpInput from "react-otp-input";
import dayjs from "dayjs";
import { AutoComplete, Select, Spin, TimePicker, Tour } from "antd";
import { useQuery, useMutation } from "react-query";
import MyModal from "../../components/Modal/Modal";
import {
    fetchMinimumBudgetRange,
    fetchOnePartner,
    getLocationSuggestions,
    quoteRequest,
    requestOTP,
    sendEmailToPartners,
    verifyOTP,
} from "../../apiFunctions/partner";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "./moving.css";
import "../header/header.css";
import { Input } from "antd";
import DatePicker from "../../components/DatePicker";
import SpecificDate from "../../components/Specific";
import { useNavigate } from "react-router-dom";
import LoaderLayout from "../../components/Loaders/LoaderLayout";
import Truck from "../../components/Loaders/Truck";

const selectBg = "bg-[#EE504C]";

function MovingType({ open, setOpen }) {
    const [otp, setOtp] = useState("");
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [locationOptions, setLocationOptions] = useState([]);
    const [data, setData] = useState({
        movingType: "",
        moveFrom: "",
        moveTo: "",
        moveFromCountry: "",
        moveToCountry: "",
        currPropertyType: "",
        currPropertyBedrooms: "",
        currPropertyFloorNo: "",
        hasCurrPropertyLift: "",
        newPropertyType: "",
        newPropertyBedrooms: "",
        newPropertyAdditionalInfo: "",
        newPropertyFloorNo: "",
        hasNewPropertyLift: "",
        movingDatePref: "",
        specificDate: null,
        specificTime: null,
        startDate: null,
        endDate: null,
        name: "",
        email: "",
        wappNum: "",
        budgetRange: {
            minimum: 1000,
            maximum: 0,
        },
        building: "",
    });
    const navigate = useNavigate();
    const minimumBudgetRange = useQuery({
        queryKey: ["fetchMinimumBudgetRange"],
        queryFn: fetchMinimumBudgetRange,
        onSuccess: (d) => {
            console.log(d?.data, "minnnnnn");
            setData({
                ...data,
                budgetRange: {
                    ...data.budgetRange,
                    minimum: d?.data?.minimumBudgetRange,
                },
            });
        },
    });
    const minBudget = minimumBudgetRange?.data?.data?.minimumBudgetRange ?? 0;
    const sendEmailToPartnersMutation = useMutation({
        mutationKey: "sendToPartners",
        mutationFn: sendEmailToPartners,
        onSuccess: (data) => {
            console.log(data, "emails");
            toast.success("Request Sent Successfully to Partners! ");

            window.localStorage.removeItem("userData");
            navigate("/response", { state: { emails: data?.data ?? [] } });
        },
        onError: (err) => {
            toast.error("Sorry, Service not available in this region!");
        },
        onSettled: (d, e) => console.log(d, e),
    });
    const postRequest = useMutation({
        mutationKey: "postRequest",
        mutationFn: quoteRequest,
        onSuccess: (d) => {
            console.log(d, "insertedd");
            toast.success("Request submitted successfully!");
            setShowVerificationModal(false);
            console.log(data.moveFrom, data, "JUSTTTTTTTTTTTTTTTTT");
            sendEmailToPartnersMutation.mutate({
                moveFrom: data.moveFrom,
                moveTo: data.moveTo,
                movingType: data.movingType,
                id: d.data.insertedId,
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
        onSettled: (d, e) => console.log(d, e),
    });
    const verifyOtpMutation = useMutation({
        mutationKey: "verifyOTP",
        mutationFn: verifyOTP,
        onSuccess: (d) => {
            console.log(d, "OTPPPPPPPPPPP RESSSSSSSSSSSS");
            if (d?.data?.verified) {
                toast.success("OTP verified successfully!");
                toast.info("Processing your request...");
                window.localStorage.setItem("userData", JSON.stringify(d?.data?.user));
                postRequest.mutate(data);
            }
        },
        onError: (err) => {
            if (err?.response?.data?.message === "wrong code") {
                toast.error("Wrong Code!");
            } else {
                toast.error(err.message);
            }
        },
        onSettled: (d, e) => console.log(d, e),
    });
    const getOtpMutation = useMutation({
        mutationKey: "fetchOtp",
        mutationFn: requestOTP,
        onSuccess: () => {
            setShowVerificationModal(true);
            toast.success("Verification code sent successfully!");
        },
        onSettled: (d, e) => console.log(d, e),
    });

    const fetchLocationsMutation = useMutation({
        mutationKey: "fetchLocation",
        mutationFn: getLocationSuggestions,
        onSuccess: (data) => {
            console.log("data loc", data)
            let arr = data?.data?.map((elem) => {
                return {
                    value: elem?.fulladdress,
                    label: elem?.fulladdress,
                };
            });
            setLocationOptions(arr);
        },
        onSettled: (d, e) => console.log(d, e),
    });

    const [inputStates, setInputState] = useState({
        isVisible_0: true,
        isVisible_1: false,
        isVisible_2: false,
        isVisible_2b: false,
        isVisible_2c: false,
        isVisible_3: false,
        isVisible_3b: false,
        isVisible_3c: false,
        isVisible_4: false,
        isVisible_5: false,
        isVisible_6: false,
        isVisible_7: false,
        isVisible_8: false,
        isVisible_9: false,
        isVisible_10: false,
        isVisible_11: false,
        isVisible_12: false,
    });

    const [active, setActive] = useState(null);
    const onLocationChange = (e) => {
        fetchLocationsMutation.mutate(e);
    };

    console.log(data);

    const handleDataChange = (key, value) => {
        setData({
            ...data,
            [key]: value,
        });
    };

    //new handler for min and max range
    const handleRangeChange = (key, value) => {
        setData({
            ...data,
            budgetRange: {
                ...data.budgetRange,
                [key]: value,
            },
        });
    };

    const handleMultipleChanges = (obj) => {
        setData({
            ...data,
            ...obj,
        });
    };

    const handleInputStateChange = (key, value) => {
        setInputState({
            ...inputStates,
            [key]: value,
        });
    };

    const handleSubmit = () => {
        const notIsValid =
            !data.moveFrom ||
            !data.moveFromCountry ||
            !data.currPropertyType ||
            !data.newPropertyType ||
            !data.movingDatePref ||
            !data.newPropertyBedrooms ||
            !data.moveTo ||
//            !data.moveToCountry ||
            !data.name ||
            !data.email ||
            !data.wappNum ||
//            !data.budgetRange.maximum ||
//            !data.budgetRange.minimum ||
            !data.building;
        if (!data.movingType) {
            toast.error("Choose a Moving Type");
            return;
        }
        if (notIsValid) {
            toast.error("Fields can't be empty!");
            return;
        }
        if (data.currPropertyType === "house" && !data.currPropertyBedrooms) {
            toast.error("Fields can't be empty!");
            return;
        }
        if (
            data.currPropertyType === "appartment" &&
            (!data.currPropertyBedrooms ||
                !data.currPropertyFloorNo ||
                !data.hasCurrPropertyLift)
        ) {
            toast.error("Fields can't be empty!");
            return;
        }
        if (data.newPropertyType === "house" && !data.newPropertyAdditionalInfo) {
            toast.error("Fields can't be empty!");
            return;
        }
        if (
            data.newPropertyType === "appartment" &&
            (!data.newPropertyAdditionalInfo ||
                !data.newPropertyFloorNo ||
                !data.hasNewPropertyLift)
        ) {
            toast.error("Fields can't be empty!");
            return;
        }
        if (
            data.movingDatePref === "specific" &&
            (!data.specificDate || !data.specificTime)
        ) {
            toast.error("Fields can't be empty!");
            return;
        }
        if (
            data.movingDatePref === "flexible" &&
            (!data.startDate || !data.endDate)
        ) {
            toast.error("Fields can't be empty!");
            return;
        }
        if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)) {
            toast.error("Invalid Email!");
            return;
        }
        if (!data?.wappNum || !isValidPhoneNumber(data?.wappNum.toString())) {
            toast.error("Invalid PhoneNumber!");
            return;
        }
//        if (data?.budgetRange.minimum > data.budgetRange.maximum) {
//            toast.error(
//                "Minimum budget range cant be greater than maximum budget range!",
//            );
//            return;
//        }
//        if (data?.budgetRange.minimum < minBudget) {
//            toast.error("Minimum budget should be atleast " + minBudget + " !");
//            return;
//        }
        getOtpMutation.mutate(data.email);
    };

    if (
        postRequest.isLoading ||
        sendEmailToPartnersMutation.isLoading ||
        verifyOtpMutation.isLoading ||
        getOtpMutation.isLoading
    ) {
        return (
            <LoaderLayout>
                <Truck />
            </LoaderLayout>
        );
    }

    return (
        <>
            {showVerificationModal ? (
                <MyModal>
                    <div className="bg-white rounded-lg h-40 w-96">
                        <h1 className="text-primary font-bold text-2xl text-center pt-4">
                            Verify that it's you!
                        </h1>
                        <p className="text-center text-gray-500">
                            A verification email is send to your account!
                        </p>
                        <div className="flex justify-center mt-4">
                            <OtpInput
                                value={otp}
                                onChange={(val) => {
                                    if (val.length === 4) {
                                        verifyOtpMutation.mutate({
                                            email: data?.email,
                                            code: val,
                                        });

                                        setOtp("");
                                    }
                                    console.log(val, "imvalll");
                                    setOtp(val);
                                }}
                                numInputs={4}
                                renderSeparator={<span className="mx-3"></span>}
                                renderInput={(props) => {
                                    props.className = "text-xl border-b-4 w-10 customOTPclass";
                                    return <input className="text-xl border-b-4" {...props} />;
                                }}
                            />
                        </div>
                    </div>
                </MyModal>
            ) : null}
            <div className=" flex justify-center items-center header-btn mt-2 lg:mt-10">
                <button
                    onClick={() => setOpen(true)}
                    className="text-sub-heading py-2 bg-[#EE504C] px-5 font-bold "
                >
                    Get Quote
                </button>
            </div>
            <div className=" bg-[#C1E1EE] mx-auto w-11/12 h-auto items-center justify-center text-center p-8 lg:w-4/5 rounded-lg border-neutral-600 m-8 border">
                <div>
                    <h1 className=" text-black text-heading font-semibold mb-4">
                        Moving Type
                    </h1>
                </div>
                <HeadButton
                    open={open}
                    setOpen={setOpen}
                    handleInputStateChange={handleInputStateChange}
                    active={active}
                    setActive={setActive}
                    handleDataChange={handleDataChange}
                />

                {inputStates.isVisible_0 && (
                    <div>
                        <div className="text-start flex flex-col items-center mt-6">
                            <p className="lg:w-1/2 text-para">Move from</p>
                            <Select
                                placeholder="Select Country"
                                onChange={(val) => handleDataChange("moveFromCountry", val)}
                                className=" mb-1 lg:w-2/4 text-para outline-[#13C265] w-full"
                                options={[
                                    { value: 'United Arab Emirates', label: 'United Arab Emirates' },
                                    { value: 'United States of America', label: 'United States of America' },
                                    { value: 'United Kingdom', label: 'United Kingdom' },
                                    { value: 'Bahrain', label: 'Bahrain' },
                                    { value: 'Qatar', label: 'Qatar' },
                                    { value: 'Kuwait', label: 'Kuwait' },
                                    { value: 'Saudi Arab', label: 'Saudi Arab' },
                                ]}
                            />
                            <AutoComplete
                                onSelect={(val) => handleDataChange("moveFrom", val)}
                                onChange={(val) => handleDataChange("moveFrom", val)}
                                onSearch={onLocationChange}
                                options={locationOptions}
                                placeholder="Address"
                                className=" text-para lg:w-2/4 w-full outline-[#13C265]"
                                notFoundContent={
                                    fetchLocationsMutation?.isLoading ? (
                                        <Spin size="ps-3 small" />
                                    ) : null
                                }
                                onClick={() => handleInputStateChange("isVisible_1", true)}
                                onFocus={() => handleInputStateChange("isVisible_1", true)}
                            />
                        </div>

                        {inputStates.isVisible_1 && (
                            <div className="text-start flex flex-col mt-4 items-center">
                                <p className="lg:w-1/2 text-para">Move to</p>
                                <AutoComplete
                                    onSelect={(val) => handleDataChange("moveTo", val)}
                                    onSearch={onLocationChange}
                                    options={locationOptions}
                                    placeholder="Address"
                                    className="lg:w-2/4 text-para outline-[#13C265] w-full"
                                    notFoundContent={
                                        fetchLocationsMutation?.isLoading ? (
                                            <Spin size="small" />
                                        ) : null
                                    }
                                    onFocus={() => handleInputStateChange("isVisible_2", true)}
                                    onClick={() => handleInputStateChange("isVisible_2", true)}
                                />
                            </div>
                        )}

                        {inputStates.isVisible_2 && (
                            <div className="text-start flex flex-col items-center mt-4">
                                <p className="lg:w-1/2 text-para">Current Property</p>
                                <p className="lg:w-1/2 text-gray-400 text-para">
                                    Bedrooms/Office cabins
                                </p>
                                <div className=" bg-white rounded-md md:w-1/2 w-full border-[#13C26580] border-[1.5px]">
                                    <div className="flex md:w-[255px]  px-2 py-1 w-full">
                                        <input
                                            onClick={() =>
                                                handleDataChange("currPropertyType", "house")
                                            }
                                            checked={data.currPropertyType === "house"}
                                            type="radio"
                                            name="currPropertyType"
                                        />
                                        <p className="ml-2 py-1 text-para">House / Villa</p>
                                    </div>
                                </div>
                                <div className=" bg-white mt-2 w-full md:w-1/2 rounded-md border-[#13C26580] border-[1.5px]">
                                    <div className="flex md:w-[255px] w-full px-2 py-1">
                                        <input
                                            onClick={() =>
                                                handleDataChange("currPropertyType", "appartment")
                                            }
                                            checked={data.currPropertyType === "appartment"}
                                            type="radio"
                                            name="currPropertyType"
                                        />
                                        <p className="ml-2 py-1 text-para">Appartment / Condo</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {data.currPropertyType === "appartment" && (
                            <div className="text-start flex flex-col mt-4 items-center">
                                <Input
                                    type="number"
                                    placeholder="Floor number"
                                    className=" lg:w-2/4 text-para py-2 outline-[#13C265] w-full"
                                    onClick={() => handleInputStateChange("isVisible_2b", true)}
                                    onFocus={() => handleInputStateChange("isVisible_2b", true)}
                                    value={data.currPropertyFloorNo}
                                    onChange={(e) =>
                                        handleDataChange("currPropertyFloorNo", e.target.value)
                                    }
                                />
                                {inputStates.isVisible_2b && (
                                    <Select
                                        placeholder="Elevator available?"
                                        onClick={() => handleInputStateChange("isVisible_2c", true)}
                                        onFocus={() => handleInputStateChange("isVisible_2c", true)}
                                        className="lg:w-2/4 mt-2 text-para outline-[#13C265] w-full"
                                        onChange={(val) =>
                                            handleDataChange("hasCurrPropertyLift", val)
                                        }
                                        options={[
                                            {
                                                value: "yes",
                                                label: "Yes",
                                            },
                                            {
                                                value: "no",
                                                label: "No",
                                            },
                                        ]}
                                    />
                                )}
                                {inputStates.isVisible_2c && (
                                    <Select
                                        placeholder="Bedrooms?"
                                        className="lg:w-2/4 text-para mt-2 outline-[#13C265] w-full"
                                        onChange={(val) =>
                                            handleDataChange("currPropertyBedrooms", val)
                                        }
                                        onFocus={() => handleInputStateChange("isVisible_3", true)}
                                        onClick={() => handleInputStateChange("isVisible_3", true)}
                                        options={[
                                            {
                                                value: "1",
                                                label: "1",
                                            },
                                            {
                                                value: "2",
                                                label: "2",
                                            },
                                            {
                                                value: "3",
                                                label: "3",
                                            },
                                            {
                                                value: "4",
                                                label: "4",
                                            },
                                            {
                                                value: "5",
                                                label: "5",
                                            },
                                        ]}
                                    />
                                )}
                            </div>
                        )}

                        {data.currPropertyType === "house" && (
                            <div className="text-start flex flex-col mt-4 items-center">
                                <Select
                                    placeholder="Bedrooms?"
                                    onFocus={() => handleInputStateChange("isVisible_3", true)}
                                    className="lg:w-2/4 text-para mt-2 outline-[#13C265] w-full"
                                    onChange={(val) =>
                                        handleDataChange("currPropertyBedrooms", val)
                                    }
                                    onClick={() => handleInputStateChange("isVisible_3", true)}
                                    options={[
                                        {
                                            value: "1",
                                            label: "1",
                                        },
                                        {
                                            value: "2",
                                            label: "2",
                                        },
                                        {
                                            value: "3",
                                            label: "3",
                                        },
                                        {
                                            value: "4",
                                            label: "4",
                                        },
                                        {
                                            value: "5+",
                                            label: "5+",
                                        },
                                    ]}
                                />
                            </div>
                        )}

                        {inputStates.isVisible_3 && (
                            <div className="text-start flex flex-col items-center mt-4">
                                <p className="lg:w-1/2 text-para">New Property</p>
                                <p className="lg:w-1/2 text-gray-400 text-para">
                                    Bedrooms/Office cabins
                                </p>
                                <div className=" bg-white w-full rounded-md md:w-1/2 border-[#13C26580] border-[1.5px]">
                                    <div className="flex md:w-[255px] px-2 py-1 w-full">
                                        <input
                                            onClick={() =>
                                                handleDataChange("newPropertyType", "house")
                                            }
                                            checked={data.newPropertyType === "house"}
                                            type="radio"
                                            name="newPropertyType"
                                        />
                                        <p className="ml-2 text-para py-1">House / Villa</p>
                                    </div>
                                </div>
                                <div className=" bg-white mt-2 w-full md:w-1/2 rounded-md border-[#13C26580] border-[1.5px]">
                                    <div className="flex md:w-[255px] w-full  px-2 py-1">
                                        <input
                                            onClick={() =>
                                                handleDataChange("newPropertyType", "appartment")
                                            }
                                            checked={data.newPropertyType === "appartment"}
                                            type="radio"
                                            name="newPropertyType"
                                        />
                                        <p className="ml-2 text-para py-1">Appartment / Condo</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {data.newPropertyType === "appartment" && (
                            <div className="text-start flex flex-col mt-4 items-center">
                                <Input
                                    type="number"
                                    placeholder="Floor number"
                                    onFocus={() => handleInputStateChange("isVisible_3b", true)}
                                    className=" text-para lg:w-2/4 py-2 outline-[#13C265] w-full"
                                    onClick={() => handleInputStateChange("isVisible_3b", true)}
                                    value={data.newPropertyFloorNo}
                                    onChange={(e) =>
                                        handleDataChange("newPropertyFloorNo", e.target.value)
                                    }
                                />
                                {inputStates.isVisible_3b && (
                                    <Select
                                        placeholder="Elevator available?"
                                        className="lg:w-2/4 text-para mt-2 outline-[#13C265] w-full"
                                        onChange={(val) =>
                                            handleDataChange("hasNewPropertyLift", val)
                                        }
                                        onFocus={() => handleInputStateChange("isVisible_3c", true)}
                                        onClick={() => handleInputStateChange("isVisible_3c", true)}
                                        options={[
                                            {
                                                value: "yes",
                                                label: "Yes",
                                            },
                                            {
                                                value: "no",
                                                label: "No",
                                            },
                                        ]}
                                    />
                                )}
                                {inputStates.isVisible_3c && (
                                    <>
                                        <Select
                                            placeholder="Bedrooms?"
                                            onFocus={() =>
                                                handleInputStateChange("isVisible_4", true)
                                            }
                                            className="lg:w-2/4 text-para mt-2 outline-[#13C265] w-full"
                                            onChange={(val) =>
                                                handleDataChange("newPropertyBedrooms", val)
                                            }
                                            onClick={() =>
                                                handleInputStateChange("isVisible_4", true)
                                            }
                                            options={[
                                                {
                                                    value: "1",
                                                    label: "1",
                                                },
                                                {
                                                    value: "2",
                                                    label: "2",
                                                },
                                                {
                                                    value: "3",
                                                    label: "3",
                                                },
                                                {
                                                    value: "4",
                                                    label: "4",
                                                },
                                                {
                                                    value: "5+",
                                                    label: "5+",
                                                },
                                            ]}
                                        />
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            onFocus={() =>
                                                handleInputStateChange("isVisible_4", true)
                                            }
                                            placeholder="Scope of work"
                                            className="lg:w-2/4 text-para mt-2 outline-[#13C265] w-full"
                                            onChange={(e) => {
                                                let temp = data;
                                                temp.newPropertyAdditionalInfo = e;
                                                setData(temp);
                                            }}
                                            onClick={() =>
                                                handleInputStateChange("isVisible_4", true)
                                            }
                                            options={[
                                                { label: "Packing services", value: "Packingservices" },
                                                { label: "Vehicle Moving", value: "vehicleMoving" },
                                                {
                                                    label: "Packing materials",
                                                    value: "Packingmaterials",
                                                },
                                                {
                                                    label: "Disassemble furniture",
                                                    value: "Disassemblefurniture",
                                                },
                                                {
                                                    label: "Assemble furniture",
                                                    value: "Assemblefurniture",
                                                },
                                                { label: "Storage", value: "Storage" },
                                            ]}
                                        />
                                    </>
                                )}
                            </div>
                        )}

                        {data.newPropertyType === "house" && (
                            <div className="text-start flex flex-col mt-4 items-center">
                                <Select
                                    placeholder="Bedrooms?"
                                    onFocus={() => handleInputStateChange("isVisible_4", true)}
                                    className="lg:w-2/4 text-para mt-2 outline-[#13C265] w-full"
                                    onChange={(val) =>
                                        handleDataChange("newPropertyBedrooms", val)
                                    }
                                    onClick={() => handleInputStateChange("isVisible_4", true)}
                                    options={[
                                        {
                                            value: "1",
                                            label: "1",
                                        },
                                        {
                                            value: "2",
                                            label: "2",
                                        },
                                        {
                                            value: "3",
                                            label: "3",
                                        },
                                        {
                                            value: "4",
                                            label: "4",
                                        },
                                        {
                                            value: "5+",
                                            label: "5+",
                                        },
                                    ]}
                                />
                                <Select
                                    mode="multiple"
                                    allowClear
                                    onFocus={() => handleInputStateChange("isVisible_4", true)}
                                    placeholder="Scope of work"
                                    className="lg:w-2/4 mt-2 text-para outline-[#13C265] w-full"
                                    onChange={(e) => {
                                        let temp = data;
                                        temp.newPropertyAdditionalInfo = e;
                                        setData(temp);
                                    }}
                                    onClick={() => handleInputStateChange("isVisible_4", true)}
                                    options={[
                                                { label: "Vehicle Moving", value: "vehicleMoving" },
                                        { label: "Packing services", value: "Packingservices" },
                                        { label: "Packing materials", value: "Packingmaterials" },
                                        {
                                            label: "Disassemble furniture",
                                            value: "Disassemblefurniture",
                                        },
                                        { label: "Assemble furniture", value: "Assemblefurniture" },
                                        { label: "Storage", value: "Storage" },
                                    ]}
                                />
                            </div>
                        )}

                        {inputStates.isVisible_4 && (
                            <div className="text-start flex flex-col items-center mt-4">
                                <p className="lg:w-1/2 text-para">When are you moving?</p>
                                <div className=" bg-white rounded-md md:w-1/2 w-full border-[#13C26580] border-[1.5px]">
                                    <div className="flex w-[255px] px-2 py-1">
                                        <input
                                            onClick={() =>
                                                handleDataChange("movingDatePref", "specific")
                                            }
                                            checked={data.movingDatePref === "specific"}
                                            type="radio"
                                            name="movingDatePref"
                                        />
                                        <p className="ml-2 text-para py-1">I want Specific Date</p>
                                    </div>
                                </div>
                                <div className=" bg-white mt-2 w-full rounded-md md:w-1/2 border-[#13C26580] border-[1.5px]">
                                    <div className="flex md:w-[255px] px-2 py-1 w-full">
                                        <input
                                            onClick={() =>
                                                handleDataChange("movingDatePref", "flexible")
                                            }
                                            checked={data.movingDatePref === "flexible"}
                                            type="radio"
                                            name="movingDatePref"
                                        />
                                        <p className="ml-2 text-para py-1">I am flexible</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {data.movingDatePref === "specific" && (
                            <div className="text-start flex flex-col items-center pt-4">
                                <p></p>
                                {/* <Input
                            className="text-black lg:w-2/4 placeholder-black"
                            placeholder="Specific date"
                            onClick={() => setUnlock4(true)}
                            onChange={(e) => firstHandler(e.target.value)}
                        /> */}

                                <SpecificDate
                                    handleDataChange={handleDataChange}
                                    handleInputStateChange={handleInputStateChange}
                                />
                            </div>
                        )}

                        {
                            //                            data.movingDatePref === "flexible" && (
                            //                            <div className="text-start flex flex-col mt-4 items-center">
                            //                                <div className="lg:w-1/2 ">Moving date</div>
                            //                                <Input
                            //                                    className="lg:w-2/4 outline-[#13C265]"
                            //                                    placeholder="Your moving date"
                            //                                    onClick={() => handleInputStateChange("isVisible_5", true)}
                            //                                    value={data.movingDate}
                            //                                    onChange={(e) =>
                            //                                        handleDataChange("movingDate", e.target.value)
                            //                                    }
                            //                                />
                            //                            </div>movingtype
                            //                        )
                        }

                        {data.movingDatePref === "flexible" && (
                            <div className="text-start flex flex-col items-center justify-center pt-4">
                                <p className="lg:w-1/2 w-full outline-[#13C265] text-para">
                                    Date Range
                                </p>
                                {/* <Input className=" " placeholder="Address" onClick={() => setUnlock6(true)} onChange={(e) => firstHandler(e.target.value)} /> */}
                                <DatePicker
                                    handleMultipleDataChanges={handleMultipleChanges}
                                    handleInputStateChange={handleInputStateChange}
                                    handleDataChange={handleDataChange}
                                />
                            </div>
                        )}

                        {inputStates.isVisible_6 && (
                            <div className="text-start flex flex-col items-center pt-4">
                                <p className="lg:w-1/2  w-full text-para">Applicant Name</p>
                                <Input
                                    className=" lg:w-2/4 text-para w-full  py-2 outline-[#13C265]"
                                    placeholder="Name"
                                    onFocus={() => handleInputStateChange("isVisible_7", true)}
                                    onClick={() => handleInputStateChange("isVisible_7", true)}
                                    value={data.name}
                                    onChange={(e) => handleDataChange("name", e.target.value)}
                                />
                            </div>
                        )}

                        {inputStates.isVisible_7 && (
                            <div className="text-start flex flex-col items-center pt-4">
                                <p className="lg:w-1/2 w-full  text-para">Email</p>
                                <Input
                                    className=" lg:w-2/4 text-para w-full  py-2 outline-[#13C265]"
                                    placeholder="Email"
                                    onFocus={() => handleInputStateChange("isVisible_8", true)}
                                    onClick={() => handleInputStateChange("isVisible_8", true)}
                                    value={data.email}
                                    onChange={(e) => handleDataChange("email", e.target.value)}
                                />
                            </div>
                        )}
                        {inputStates.isVisible_8 && (
                            <div className="text-start w-full flex flex-col items-center pt-4">
                                <p className="lg:w-1/2 w-full ">
                                    <span className=" text-gray-400 text-para py-2">
                                        Whatsapp number
                                    </span>
                                </p>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    onFocus={() => handleInputStateChange("isVisible_10", true)}
                                    onClick={() => handleInputStateChange("isVisible_10", true)}
                                    value={data.wappNum}
                                    onChange={(e) => handleDataChange("wappNum", e)}
                                    className="lg:w-2/4 h-8 text-para border-l-[1px] bg-white py-1 border-r-[1px] border-b-[1px] border-t-[1px] rounded-md border-[#13C26580]"
                                />
                            </div>
                        )}
                        {
                            /*
                            inputStates.isVisible_9 && (
                            <div className="text-start flex flex-col  items-center p-4">
                                <p className="lg:w-1/2  w-full text-para">Budget range</p>
                                <div className="flex  flex-wrap justify-center items-center mt-4 40">
                                    <div>
                                        <Input
                                            defaultValue={500}
                                            type="number"
                                            placeholder="Min range"
                                            className="lg:w-44 w-full text-para mx-1 my-1 outline-[#13C265]"
                                            onClick={() =>
                                                handleInputStateChange("isVisible_10", true)
                                            }
                                            value={data.budgetRange.minimum}
                                            onChange={(e) => {
                                                // handleDataChange("budgetRange", e.target.value)
                                                handleRangeChange("minimum", e.target.value);
                                            }}
                                            onFocus={() =>
                                                handleInputStateChange("isVisible_10", true)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="number"
                                            placeholder="Max range"
                                            className="lg:w-44 mx-1 w-full my-1 text-para outline-[#13C265]"
                                            onClick={() =>
                                                handleInputStateChange("isVisible_10", true)
                                            }
                                            value={data.budgetRange.maximum}
                                            onChange={(e) => {
                                                // handleDataChange("budgetRange", e.target.value)
                                                handleRangeChange("maximum", e.target.value);
                                            }}
                                            onFocus={() =>
                                                handleInputStateChange("isVisible_10", true)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                                */
                        }
                        {inputStates.isVisible_10 && (
                            <div className="text-start flex flex-col items-center mt-4">
                                <p className="lg:w-1/2 text-para">
                                    Full Address including Building Name and Community
                                </p>
                                <Input
                                    className=" text-para lg:w-2/4  w-full outline-[#13C265] py-2"
                                    onClick={() => handleInputStateChange("isVisible_11", true)}
                                    onFocus={() => handleInputStateChange("isVisible_11", true)}
                                    value={data.building}
                                    onChange={(e) => handleDataChange("building", e.target.value)}
                                />
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            className=" w-2/3 lg:w-80 bg-[#EE504C] text-para p-2 rounded-lg text-white mt-4"
                        >
                            Request Quote
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default MovingType;

const HeadButton = ({
    open,
    setOpen,
    handleDataChange,
    active,
    setActive,
    handleInputStateChange,
}) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        const value = localStorage.getItem("visited");

        console.log(value, "valueeeee");
        if (value === null) {
            setTimeout(() => {
                console.log("Hello timeout");
                setOpen(true);
                localStorage.setItem("visited", true);
            }, 5000);
        }
    }, []);

    const steps = [
        {
            title: "Local",
            description: "Choose the moving type",
            target: () => ref1.current,
        },
        {
            title: "Commercial",
            description: "Choose the moving type",
            target: () => ref2.current,
        },
        {
            title: "International",
            description: "Choose the moving type",
            target: () => ref3.current,
        },
    ];

    return (
        <div className="felx items-center justify-between">
            <button
                className={` w-40 ${active === 1 ? selectBg + " text-white" : " bg-[#D1D1D1]"} flex-wrap m-2 p-1 py-2 rounded shadow text-para active:text-red-blue`}
                onClick={() => {
                    active === 1 ? setActive(null) : setActive(1);
                    handleInputStateChange("isVisible_0", true);
                    handleDataChange("movingType", "local");
                }}
                ref={ref1}
            >
                Local
            </button>
            <button
                onClick={() => {
                    active === 3 ? setActive(null) : setActive(3);
                    handleInputStateChange("isVisible_0", true);
                    handleDataChange("movingType", "international");
                }}
                ref={ref3}
                className={` w-40 ${active === 3 ? selectBg + " text-white" : " bg-[#D1D1D1] "} flex-wrap m-2 p-1 rounded shadow text-md text-para py-2 active:text-red-blue`}
            >
                International
            </button>
            <button
                onClick={() => {
                    active === 2 ? setActive(null) : setActive(2);
                    handleInputStateChange("isVisible_0", true);
                    handleDataChange("movingType", "commercial");
                }}
                ref={ref2}
                className={` w-40 ${active === 2 ? selectBg + " text-white" : " bg-[#D1D1D1] "} flex-wrap m-2 p-1 rounded shadow text-para py-2 active:text-red-blue`}
            >
                Storage
            </button>
        </div>
    );
};
