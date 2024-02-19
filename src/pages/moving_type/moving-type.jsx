import { useState, useEffect } from "react";
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
  const [inputStates, setInputState] = useState({
    isVisible_0: false,
    isVisible_1: false,
    isVisible_2: false,
    isVisible_3: false,
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

        {inputStates.isVisible_0 && active === 1 && (
          <div>
            <div className="text-start flex flex-col items-center mt-6">
              <p className="lg:w-1/2">Move from</p>
              <Input
                className="lg:w-2/4 outline-[#13C265]"
                placeholder="Address"
                value={data.moveFrom}
                onChange={(e) => handleDataChange("moveFrom", e.target.value)}
                onClick={() => handleInputStateChange("isVisible_1", true)}
              />
            </div>

            {inputStates.isVisible_1 && (
              <div className="text-start flex flex-col mt-4 items-center">
                <div className="lg:w-1/2 ">Move to</div>
                <Input
                  className="lg:w-2/4 outline-[#13C265]"
                  placeholder="Address"
                  onClick={() => handleInputStateChange("isVisible_2", true)}
                  value={data.moveTo}
                  onChange={(e) => handleDataChange("moveTo", e.target.value)}
                />
              </div>
            )}

            {inputStates.isVisible_2 && (
              <div className="text-start flex flex-col items-center mt-4">
                <p className="lg:w-1/2">Bedrooms/Office cabins</p>
                <p className="lg:w-1/2 text-gray-400">Current Property</p>
                <Input
                  className=" lg:w-2/4 outline-[#13C265]"
                  placeholder="Address"
                  onClick={() => handleInputStateChange("isVisible_3", true)}
                  value={data.address}
                  onChange={(e) => handleDataChange("address", e.target.value)}
                />
              </div>
            )}

            {inputStates.isVisible_3 && (
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

            {inputStates.isVisible_4 && (
              <div className="text-start flex flex-col mt-4 items-center">
                <div className="lg:w-1/2 ">Moving date</div>
                <Input
                  className="lg:w-2/4 outline-[#13C265]"
                  placeholder="Your moving date"
                  onClick={() => handleInputStateChange("isVisible_5", true)}
                  value={data.movingDate}
                  onChange={(e) =>
                    handleDataChange("movingDate", e.target.value)
                  }
                />
              </div>
            )}

            {inputStates.isVisible_5 && (
              <div className="text-start flex flex-col items-center justify-center pt-4">
                <p className="lg:w-1/2 ">Date Range</p>
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
                  className=" lg:w-2/4"
                  placeholder="Name"
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
                  className=" lg:w-2/4"
                  placeholder="Email"
                  onClick={() => handleInputStateChange("isVisible_8", true)}
                  value={data.email}
                  onChange={(e) => handleDataChange("email", e.target.value)}
                />
              </div>
            )}
            {inputStates.isVisible_8 && (
              <div className="text-start flex flex-col items-center pt-4">
                <p className="lg:w-1/2 ">
                  Contact details
                  <br />
                  <span className=" text-gray-400">Whatsapp number</span>
                </p>
                <PhoneInput
                  placeholder="Enter phone number"
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
                  className=" lg:w-2/4"
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
        className={` w-40 ${active === 1 ? selectBg : " bg-[#D1D1D1]"} flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue`}
        onClick={() => {
          active === 1 ? setActive(null) : setActive(1);
          handleInputStateChange("isVisible_0", true);
        }}
      >
        Local
      </button>
      <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg">
        Commerical
      </button>
      <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg">
        International
      </button>
    </div>
  );
};
