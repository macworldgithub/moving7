import { useState, useEffect } from "react";
import { AutoComplete, Select } from "antd";
import { useQuery, useMutation } from "react-query";
import { getLocationSuggestions } from "../../apiFunctions/partner";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "./moving.css";
import "../header/header.css";
import { Input } from "antd";
import DatePicker from "../../components/DatePicker";
import SpecificDate from "../../components/Specific";
import { setInputSelection } from "rc-mentions/lib/util";

const selectBg = "bg-[#00DD68]";

function MovingType() {


    const [locationOptions, setLocationOptions] = useState([]);
    const fetchLocationsMutation = useMutation({
        mutationKey: "fetchLocation",
        mutationFn: getLocationSuggestions,
        onSuccess: (data) => {
            let arr = data?.data?.map((elem) => {
                return {
                    value: elem?.address,
                    label: elem?.address,
                };
            });
            setLocationOptions(arr);
        },
        onSettled: (d, e) => console.log(d, e),
    });


    const [inputStates, setInputState] = useState({
        isVisible_0: false,
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

    const [data, setData] = useState({
        moveFrom: "",
        moveTo: "",
        address: "",
        currPropertyType: "",
        currPropertyBedrooms: "",
        currPropertyFloorNo: "",
        hasCurrPropertyLift: "",
        newPropertyType: "",
        newPropertyAdditionalInfo: "",
        newPropertyFloorNo: "",
        hasNewPropertyLift: "",
        movingDatePref: "",
        specificDate: null,
        movingDate: null,
        startDate: null,
        endDate: null,
        name: "",
        email: "",
        wappNum: "",
        budgetRange: "",
        building: "",
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
            !data.moveTo ||
            !data.address ||
            !data.specificDate ||
            !data.movingDate ||
            !data.startDate ||
            !data.endDate ||
            !data.name ||
            !data.email ||
            !data.wappNum ||
            !data.budgetRange ||
            !data.building;
        if (notIsValid) {
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
    };

    return (
        <>
            <div className=" flex justify-center items-center header-btn mt-2 lg:mt-10">
                <button className="text-sm py-2 bg-[#13C265] w-40 font-bold lg:text-lg">
                    Get Quotes
                </button>
            </div>
            <div className=" bg-[#8AFFC133] mx-auto w-11/12 h-auto items-center justify-center text-center p-8 lg:w-4/5 rounded-lg border-neutral-600 m-8 border">
                <div>
                    <h2 className=" text-[#13C265] text-2xl font-semibold mb-4">
                        Moving Type
                    </h2>
                </div>
                <HeadButton
                    handleInputStateChange={handleInputStateChange}
                    active={active}
                    setActive={setActive}
                />

                {inputStates.isVisible_0 && (
                    <div>
                        <div className="text-start flex flex-col items-center mt-6">
                            <p className="lg:w-1/2">Move from</p>
                            <AutoComplete
                                onSelect={(val) => handleDataChange("moveFrom", val)}
                                onSearch={onLocationChange}
                                options={locationOptions}
                                placeholder="Address"
                                className="lg:w-2/4 outline-[#13C265]"
                                onClick={() => handleInputStateChange("isVisible_1", true)}
                                onFocus={() => handleInputStateChange("isVisible_1", true)}
                            />
                        </div>

                        {inputStates.isVisible_1 && (
                            <div className="text-start flex flex-col mt-4 items-center">
                                <div className="lg:w-1/2 ">Move to</div>
                                <AutoComplete
                                    onSelect={(val) => handleDataChange("moveTo", val)}
                                    onSearch={onLocationChange}
                                    options={locationOptions}
                                    placeholder="Address"
                                    className="lg:w-2/4 outline-[#13C265]"
                                    onFocus={() => handleInputStateChange("isVisible_2", true)}
                                    onClick={() => handleInputStateChange("isVisible_2", true)}
                                />
                            </div>
                        )}

                        {inputStates.isVisible_2 && (
                            <div className="text-start flex flex-col items-center mt-4">
                                <p className="lg:w-1/2">Bedrooms/Office cabins</p>
                                <p className="lg:w-1/2 text-gray-400">Current Property</p>
                                <div className=" bg-white rounded-md md:w-1/2 border-[#13C26580] border-[1.5px]">
                                    <div className="flex w-[255px]  px-2 py-1">
                                        <input
                                            onClick={() => handleDataChange("currPropertyType", "house")}
                                            checked={data.currPropertyType === "house"}
                                            type="radio"
                                            name="currPropertyType"
                                        />
                                        <p className="ml-2">House / Villa</p>
                                    </div>
                                </div>
                                <div className=" bg-white mt-2 md:w-1/2 rounded-md border-[#13C26580] border-[1.5px]">
                                    <div className="flex w-[255px] px-2 py-1">
                                        <input
                                            onClick={() => handleDataChange("currPropertyType", "appartment")}
                                            checked={data.currPropertyType === "appartment"}
                                            type="radio"
                                            name="currPropertyType"
                                        />
                                        <p className="ml-2">Appartment / Condo</p>
                                    </div>
                                </div>



                            </div>
                        )}
                        {data.currPropertyType === "appartment" && (
                            <div className="text-start flex flex-col mt-4 items-center">
                                <Input
                                    type="number"
                                    placeholder="Floor number"
                                    className=" lg:w-2/4 outline-[#13C265]"
                                    onClick={() => handleInputStateChange("isVisible_2b", true)}
                                    onFocus={() => handleInputStateChange("isVisible_2b", true)}
                                    value={data.currPropertyFloorNo}
                                    onChange={(e) =>
                                        handleDataChange("currPropertyFloorNo", e.target.value)
                                    }
                                />
                                {
                                    inputStates.isVisible_2b && (
                                        <Select
                                            placeholder="Elevator available?"
                                            onClick={() => handleInputStateChange("isVisible_2c", true)}
                                            onFocus={() => handleInputStateChange("isVisible_2c", true)}
                                            className="lg:w-2/4 mt-2 outline-[#13C265]"
                                            onChange={(val) => handleDataChange("hasCurrPropertyLift", val)}
                                            options={[
                                                {
                                                    value: 'yes',
                                                    label: 'Yes',
                                                },
                                                {
                                                    value: 'no',
                                                    label: 'No',
                                                },
                                            ]}
                                        />
                                    )
                                }
                                {
                                    inputStates.isVisible_2c && (
                                        <Select
                                            placeholder="Bedrooms?"
                                            className="lg:w-2/4 mt-2 outline-[#13C265]"
                                            onChange={(val) => handleDataChange("currPropertyBedrooms", val)}
                                            onFocus={() => handleInputStateChange("isVisible_3", true)}
                                            onClick={() => handleInputStateChange("isVisible_3", true)}
                                            options={[
                                                {
                                                    value: '1',
                                                    label: '1',
                                                },
                                                {
                                                    value: '2',
                                                    label: '2',
                                                },
                                                {
                                                    value: '3',
                                                    label: '3',
                                                },
                                                {
                                                    value: '4',
                                                    label: '4',
                                                },
                                                {
                                                    value: '5',
                                                    label: '5',
                                                },
                                            ]}
                                        />
                                    )
                                }
                            </div>
                        )}


                        {data.currPropertyType === "house" && (
                            <div className="text-start flex flex-col mt-4 items-center">
                                <Select
                                    placeholder="Bedrooms?"
                                    onFocus={() => handleInputStateChange("isVisible_3", true)}
                                    className="lg:w-2/4 mt-2 outline-[#13C265]"
                                    onChange={(val) => handleDataChange("currPropertyBedrooms", val)}
                                    onClick={() => handleInputStateChange("isVisible_3", true)}
                                    options={[
                                        {
                                            value: '1',
                                            label: '1',
                                        },
                                        {
                                            value: '2',
                                            label: '2',
                                        },
                                        {
                                            value: '3',
                                            label: '3',
                                        },
                                        {
                                            value: '4',
                                            label: '4',
                                        },
                                        {
                                            value: '5+',
                                            label: '5+',
                                        },
                                    ]}
                                />
                            </div>

                        )}





                        {inputStates.isVisible_3 && (
                            <div className="text-start flex flex-col items-center mt-4">
                                <p className="lg:w-1/2">Bedrooms/Office cabins</p>
                                <p className="lg:w-1/2 text-gray-400">New Property</p>
                                <div className=" bg-white rounded-md md:w-1/2 border-[#13C26580] border-[1.5px]">
                                    <div className="flex w-[255px] px-2 py-1">
                                        <input
                                            onClick={() => handleDataChange("newPropertyType", "house")}
                                            checked={data.newPropertyType === "house"}
                                            type="radio"
                                            name="newPropertyType"
                                        />
                                        <p className="ml-2">House / Villa</p>
                                    </div>
                                </div>
                                <div className=" bg-white mt-2 md:w-1/2 rounded-md border-[#13C26580] border-[1.5px]">
                                    <div className="flex w-[255px]  px-2 py-1">
                                        <input
                                            onClick={() => handleDataChange("newPropertyType", "appartment")}
                                            checked={data.newPropertyType === "appartment"}
                                            type="radio"
                                            name="newPropertyType"
                                        />
                                        <p className="ml-2">Appartment / Condo</p>
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
                                    className=" lg:w-2/4 outline-[#13C265]"
                                    onClick={() => handleInputStateChange("isVisible_3b", true)}
                                    value={data.newPropertyFloorNo}
                                    onChange={(e) =>
                                        handleDataChange("newPropertyFloorNo", e.target.value)
                                    }
                                />
                                {
                                    inputStates.isVisible_3b && (
                                        <Select
                                            placeholder="Elevator available?"
                                            className="lg:w-2/4 mt-2 outline-[#13C265]"
                                            onChange={(val) => handleDataChange("hasNewPropertyLift", val)}
                                            onFocus={() => handleInputStateChange("isVisible_3c", true)}
                                            onClick={() => handleInputStateChange("isVisible_3c", true)}
                                            options={[
                                                {
                                                    value: 'yes',
                                                    label: 'Yes',
                                                },
                                                {
                                                    value: 'no',
                                                    label: 'No',
                                                },
                                            ]}
                                        />
                                    )

                                }
                                {
                                    inputStates.isVisible_3c && (
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            onFocus={() => handleInputStateChange("isVisible_4", true)}
                                            placeholder="Scope of work"
                                            className="lg:w-2/4 mt-2 outline-[#13C265]"
                                            onChange={(e) => console.log(e)}
                                            onClick={() => handleInputStateChange("isVisible_4", true)}
                                            options={[
                                                { "label": "Packing services", "value": "Packingservices" },
                                                { "label": "Packing materials", "value": "Packingmaterials" },
                                                { "label": "Disassemble furniture", "value": "Disassemblefurniture" },
                                                { "label": "Assemble furniture", "value": "Assemblefurniture" },
                                                { "label": "Storage", "value": "Storage" },

                                            ]}
                                        />
                                    )
                                }
                            </div>
                        )}


                        {data.newPropertyType === "house" && (
                            <div className="text-start flex flex-col mt-4 items-center">
                                <Select
                                    mode="multiple"
                                    allowClear
                                    onFocus={() => handleInputStateChange("isVisible_4", true)}
                                    placeholder="Scope of work"
                                    className="lg:w-2/4 mt-2 outline-[#13C265]"
                                    onChange={(e) => console.log(e)}
                                    onClick={() => handleInputStateChange("isVisible_4", true)}
                                    options={[
                                        { "label": "Packing services", "value": "Packingservices" },
                                        { "label": "Packing materials", "value": "Packingmaterials" },
                                        { "label": "Disassemble furniture", "value": "Disassemblefurniture" },
                                        { "label": "Assemble furniture", "value": "Assemblefurniture" },
                                        { "label": "Storage", "value": "Storage" },

                                    ]}
                                />
                            </div>

                        )}












                        {
                            inputStates.isVisible_4 && (
                                <div className="text-start flex flex-col items-center mt-4">
                                    <p className="lg:w-1/2">When are you moving?</p>
                                    <div className=" bg-white rounded-md md:w-1/2 border-[#13C26580] border-[1.5px]">
                                        <div className="flex w-[255px] px-2 py-1">
                                            <input
                                                onClick={() => handleDataChange("movingDatePref", "specific")}
                                                checked={data.movingDatePref === "specific"}
                                                type="radio"
                                                name="movingDatePref"
                                            />
                                            <p className="ml-2">I want Specific Date</p>
                                        </div>
                                    </div>
                                    <div className=" bg-white mt-2 rounded-md md:w-1/2 border-[#13C26580] border-[1.5px]">
                                        <div className="flex w-[255px] px-2 py-1">
                                            <input
                                                onClick={() => handleDataChange("movingDatePref", "flexible")}
                                                checked={data.movingDatePref === "flexible"}
                                                type="radio"
                                                name="movingDatePref"
                                            />
                                            <p className="ml-2">I am flexible</p>
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
                            //                            </div>
                            //                        )
                        }

                        {data.movingDatePref === "flexible" && (
                            <div className="text-start flex flex-col items-center justify-center pt-4">
                                <p className="lg:w-1/2 outline-[#13C265]">Date Range</p>
                                {/* <Input className=" " placeholder="Address" onClick={() => setUnlock6(true)} onChange={(e) => firstHandler(e.target.value)} /> */}
                                <DatePicker
                                    handleMultipleDataChanges={handleMultipleChanges}
                                    handleInputStateChange={handleInputStateChange}
                                />
                            </div>
                        )}

                        {inputStates.isVisible_6 && (
                            <div className="text-start flex flex-col items-center pt-4">
                                <p className="lg:w-1/2 ">Personal details</p>
                                <Input
                                    className=" lg:w-2/4 outline-[#13C265]"
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
                                <p className="lg:w-1/2 ">Contact details</p>
                                <Input
                                    className=" lg:w-2/4 outline-[#13C265]"
                                    placeholder="Email"
                                    onFocus={() => handleInputStateChange("isVisible_8", true)}
                                    onClick={() => handleInputStateChange("isVisible_8", true)}
                                    value={data.email}
                                    onChange={(e) => handleDataChange("email", e.target.value)}
                                />
                            </div>
                        )}
                        {inputStates.isVisible_8 && (
                            <div className="text-start flex flex-col items-center pt-4">
                                <p className="lg:w-1/2 ">
                                    <span className=" text-gray-400">Whatsapp number</span>
                                </p>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    onFocus={() => handleInputStateChange("isVisible_9", true)}
                                    onClick={() => handleInputStateChange("isVisible_9", true)}
                                    value={data.wappNum}
                                    onChange={(e) => handleDataChange("wappNum", e)}
                                    className="lg:w-2/4 h-8 border-l-[1px] border-r-[1px] border-b-[1px] border-t-[1px] rounded-md border-[#13C26580]"
                                />
                            </div>
                        )}
                        {inputStates.isVisible_9 && (
                            <div className="text-start flex flex-col items-center pt-4">
                                <p className="lg:w-1/2 ">Budget range</p>
                                <Input
                                    type="number"
                                    className=" lg:w-2/4 outline-[#13C265]"
                                    onFocus={() => handleInputStateChange("isVisible_10", true)}
                                    onClick={() => handleInputStateChange("isVisible_10", true)}
                                    value={data.budgetRange}
                                    onChange={(e) =>
                                        handleDataChange("budgetRange", e.target.value)
                                    }
                                />
                            </div>
                        )}
                        {inputStates.isVisible_10 && (
                            <div className="text-start flex flex-col items-center mt-4">
                                <p className="lg:w-1/2">
                                    Flat build name/ District apartment/ Office / Villa{" "}
                                </p>
                                <Input
                                    className=" lg:w-2/4 outline-[#13C265]"
                                    onClick={() => handleInputStateChange("isVisible_11", true)}
                                    onFocus={() => handleInputStateChange("isVisible_11", true)}
                                    value={data.building}
                                    onChange={(e) => handleDataChange("building", e.target.value)}
                                />
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            className=" w-2/3 lg:w-80 bg-[#00DD68] p-2 rounded-lg text-white mt-4"
                        >
                            Request quoets
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default MovingType;

const HeadButton = ({ active, setActive, handleInputStateChange }) => {
    return (
        <div className="felx items-center justify-between">
            <button
                className={` w-40 ${active === 1 ? selectBg + " text-white" : " bg-[#D1D1D1]"} flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue`}
                onClick={() => {
                    active === 1 ? setActive(null) : setActive(1);
                    handleInputStateChange("isVisible_0", true);
                }}
            >
                Local
            </button>
            <button 
                onClick={() => {
                    active === 2 ? setActive(null) : setActive(2);
                    handleInputStateChange("isVisible_0", true);
                }}
                className={` w-40 ${active === 2 ? selectBg + " text-white" : " bg-[#D1D1D1] "} flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue`} >
                Commerical
            </button>
            <button
                onClick={() => {
                    active === 3 ? setActive(null) : setActive(3);
                    handleInputStateChange("isVisible_0", true);
                }}
                className={` w-40 ${active === 3 ? selectBg  + " text-white": " bg-[#D1D1D1] "} flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue`}>
                International
            </button>
        </div>
    );
};
