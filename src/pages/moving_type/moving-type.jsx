import { useState, useEffect } from "react";
import "./moving.css"
import "../header/header.css"
import { Input } from "antd";
import DatePicker from "../../components/DatePicker";
import SpecificDate from "../../components/Specific";
function MovingType() {
    const [lock_1, setUnlock_1] = useState(false)
    const [lock1, setUnlock1] = useState(false)
    const [lock2, setUnlock2] = useState(false)
    const [lock3, setUnlock3] = useState(false)
    const [lock4, setUnlock4] = useState(false)
    const [lock5, setUnlock5] = useState(false)
    const [lock6, setUnlock6] = useState(false)
    const [lock7, setUnlock7] = useState(false)
    const [lock8, setUnlock8] = useState(false)
    const [lock9, setUnlock9] = useState(false)
    const [active, setActive] = useState(null)

    const [selectBg, setSelectBg] = useState("bg-[#00DD68]")

    const firstHandler = (e) => {
        console.log("e===>", e)
    }
    const localClickHandler = () => {
        setUnlock_1((prevLock_1) => {
            const newLock_1 = !prevLock_1;
            setActive(newLock_1 ? 1 : null);
            return newLock_1;
        });
    };

    const HeadButton = () => {

        return (
            <div className="felx items-center justify-between">
                <button className={` w-40 ${active === 1 ? selectBg : " bg-[#D1D1D1]"} flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue`} onClick={localClickHandler} onChange={(e) => firstHandler(e.target.value)}>Local</button>
                <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg">Commerical</button>
                <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg">International</button>
            </div>
        )

    }

    useEffect(() => {

        HeadButton()

    }, [active])

    return (
        <>
            <div className=" flex justify-center items-center header-btn mt-2 lg:mt-10">
                <button className="text-sm py-2 bg-[#13C265] w-40 font-bold lg:text-lg">Get Quotes</button>
            </div>
            <div className=" bg-[#8AFFC133] mx-auto w-11/12 h-auto items-center justify-center text-center p-4 lg:w-4/5 rounded-lg border-neutral-600 m-8 border">
                <div>
                    <h2 className=" text-[#13C265] text-2xl font-semibold mb-4">Moving Type</h2>
                </div>
                <HeadButton />
                {lock_1 && <div>
                    <div className="text-start flex flex-col items-center mt-6">
                        <p className="lg:w-1/2">Move from</p>
                        <Input className="lg:w-2/4" placeholder="Address" onClick={() => setUnlock1(true)} onChange={(e) => firstHandler(e.target.value)} />
                    </div>


                    {lock1 && (
                        <div className="text-start flex flex-col mt-4 items-center">
                            <div className="lg:w-1/2 ">Move to</div>
                            <Input className="lg:w-2/4" placeholder="Address" onClick={() => setUnlock2(true)} onChange={(e) => firstHandler(e.target.value)} />
                        </div>
                    )}

                    {lock2 && <div className="text-start flex flex-col items-center mt-4">
                        <p className="lg:w-1/2">Bedrooms</p>
                        <p className="lg:w-1/2 text-gray-400">Current Property</p>
                        <Input className=" lg:w-2/4" placeholder="Address" onClick={() => setUnlock3(true)} onChange={(e) => firstHandler(e.target.value)} />
                    </div>}

                    {lock3 && <div className="text-start flex flex-col items-center pt-4">
                        <p></p>
                        {/* <Input
                            className="text-black lg:w-2/4 placeholder-black"
                            placeholder="Specific date"
                            onClick={() => setUnlock4(true)}
                            onChange={(e) => firstHandler(e.target.value)}
                        /> */}

                        <SpecificDate setUnlock4={setUnlock4} />
                    </div>}

                    {lock4 && (
                        <div className="text-start flex flex-col mt-4 items-center">
                            <div className="lg:w-1/2 ">Moving date</div>
                            <Input className="lg:w-2/4" placeholder="Your moving date" onClick={() => setUnlock5(true)} onChange={(e) => firstHandler(e.target.value)} />
                        </div>
                    )}

                    {lock5 && <div className="text-start flex flex-col items-center justify-center pt-4">
                        <p className="lg:w-1/2 ">Date Range</p>
                        {/* <Input className=" " placeholder="Address" onClick={() => setUnlock6(true)} onChange={(e) => firstHandler(e.target.value)} /> */}
                        <DatePicker setUnlock6={setUnlock6} />
                    </div>}

                    {lock6 && <div className="text-start flex flex-col items-center pt-4">
                        <p className="lg:w-1/2 ">Personal details</p>
                        <Input className=" lg:w-2/4" placeholder="Name" onClick={() => setUnlock7(true)} onChange={(e) => firstHandler(e.target.value)} />
                    </div>}

                    {lock7 && <div className="text-start flex flex-col items-center pt-4">
                        <p className="lg:w-1/2 ">Contact details</p>
                        <Input className=" lg:w-2/4" placeholder="Email" onClick={() => setUnlock8(true)} onChange={(e) => firstHandler(e.target.value)} />
                    </div>}
                    {lock8 && <div className="text-start flex flex-col items-center pt-4">
                        <p className="lg:w-1/2 ">Contact details</p>
                        <Input type="number" className=" lg:w-2/4" placeholder="Phone number" onClick={() => setUnlock9(true)} onChange={(e) => firstHandler(e.target.value)} />
                    </div>}

                    <button className=" w-2/3 lg:w-80 bg-[#00DD68] p-2 rounded-lg text-white mt-4">Request quoets</button>

                </div>}
            </div>
        </>
    );
}

export default MovingType;