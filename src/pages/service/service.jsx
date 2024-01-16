import "../../App.css";

function Service() {
  return (
    <div className="main pt-8 text-center w-full">
      <div className="text-center pb-8 pt-8">
        <h2 className="text-black text-3xl font-semibold">Our services</h2>
      </div>
      <div className="flex justify-evenly gap-8 flex-col items-center flex-wrap sm:flex sm:flex-row w-full sm:py-0 sm:px-24 lg:gap-2">
        <div>
          <div className="flex flex-col items-center justify-center rounded-2xl w-48 bg-[#f5f5f5] h-38 p-6  box-shadow">
            <img src="images/Group 38.svg" alt="" />
          </div>
          <div>
            <h4 className="text-3xl pt-6 text-gray-400 h">Local</h4>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center rounded-2xl w-48 bg-[#f5f5f5] h-38 p-8 box-shadow">
            <img src="images/Moving_Truck.svg" alt="" />
          </div>
          <div>
            <h4 className="text-3xl pt-6 text-gray-400">Commercial</h4>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center rounded-2xl w-48 bg-[#f5f5f5] h-38 p-8 box-shadow">
            <img src="images/Group 34.svg" alt="" />
          </div>
          <div>
            <h4 className="text-3xl pt-6 text-gray-400">International</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
