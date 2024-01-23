import { useState } from "react";
import "./moving.css"
import { Input } from "antd";
function MovingType() {
    const [lock_1, setUnlock_1] = useState(false)
    const [lock1, setUnlock1] = useState(false)
    const [lock2, setUnlock2] = useState(false)
    const [lock3, setUnlock3] = useState(false)
    const [lock4, setUnlock4] = useState(false)
    const [lock5, setUnlock5] = useState(false)
    const [lock6, setUnlock6] = useState(false)
    const [lock7, setUnlock7] = useState(false)


    const firstHandler = (e) => {
        console.log("e===>", e)
    }

    return (
        <div className=" bg-[#8AFFC133] mx-auto w-11/12 h-auto items-center justify-center text-center p-4 lg:w-4/5 rounded-lg border-neutral-600 m-12 border">
            <div>
                <h2 className=" text-[#13C265] text-2xl font-semibold mb-4">Moving Type</h2>
            </div>
            <div className="felx items-center justify-between">
                <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue" onClick={() => setUnlock_1(true)} onChange={(e) => firstHandler(e.target.value)}>Local</button>
                <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg">Commerical</button>
                <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg">International</button>
            </div>
            {lock_1 && <div>
                <div className="text-start flex flex-col items-center">
                    <p className="lg:w-1/2">Move from</p>
                    <Input className="lg:w-2/4" placeholder="Address" onClick={() => setUnlock1(true)} onChange={(e) => firstHandler(e.target.value)} />
                </div>

                {lock1 && (
                    <div className="text-start flex flex-col items-center">
                        <div className="lg:w-1/2 ">Move to</div>
                        <Input className="lg:w-2/4" placeholder="Address" onClick={() => setUnlock2(true)} />
                    </div>
                )}

                {lock2 && <div className="text-start flex flex-col items-center">
                    <p className="lg:w-1/2">Bedrooms</p>
                    <p className="lg:w-1/2 text-gray-400">Current Property</p>
                    <Input className=" lg:w-2/4" placeholder="Address" onClick={() => setUnlock3(true)} />
                </div>}

                {lock3 && <div className="text-start flex flex-col items-center pt-4">
                    <p></p>
                    <Input className=" text-black lg:w-2/4" placeholder="Specific date" onClick={() => setUnlock4(true)} />

                </div>}

                {lock4 && <div className="text-start flex flex-col items-center pt-4">
                    <p className="lg:w-1/2 ">Date Range</p>
                    <Input className=" lg:w-2/4" placeholder="Address" onClick={() => setUnlock5(true)} />
                </div>}

                {lock5 && <div className="text-start flex flex-col items-center pt-4">
                    <p className="lg:w-1/2 ">Personal details</p>
                    <Input className=" lg:w-2/4" placeholder="Name" onClick={() => setUnlock6(true)} />
                </div>}

                {lock6 && <div className="text-start flex flex-col items-center pt-4">
                    <p className="lg:w-1/2 ">Contact details</p>
                    <Input className=" lg:w-2/4" placeholder="Email" onClick={() => setUnlock7(true)} />
                </div>}
                {lock7 && <div className="text-start flex flex-col items-center pt-4">
                    <p className="lg:w-1/2 ">Contact details</p>
                    <Input className=" lg:w-2/4" placeholder="Phone number" onClick={() => setUnlock7(true)} />
                </div>}

                <button className=" w-2/3 lg:w-80 bg-[#00DD68] p-2 rounded-lg text-white mt-4">Request quoets</button>

            </div>}
        </div>
    );
}

export default MovingType;