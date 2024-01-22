import "./moving.css"
function MovingType() {
    return (
        <div className=" bg-[#8AFFC133] mx-auto w-11/12 h-auto items-center text-center p-4 lg:w-4/5 rounded-lg border-neutral-600 m-12 border">
            <div>
                <h2 className=" text-[#13C265] text-2xl font-semibold mb-4">Moving Type</h2>
            </div>
            <div className="felx items-center justify-between">
                <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg">Local</button>
                <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg">Commerical</button>
                <button className=" w-40 bg-[#D1D1D1] flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg">International</button>
            </div>
        </div>
    );
}

export default MovingType;