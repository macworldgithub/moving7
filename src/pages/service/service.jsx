import "../../App.css";

function Service() {
  return (
    <div className="flex flex-col main pt-20 text-center">
      <div className="text-center pb-8 pt-8">
        <h2 className="text-black text-3xl font-semibold">Our services</h2>
      </div>
      <div className="flex justify-evenly w-full">
        <div>
          <img src="images/Local.svg" alt="" />
          <h4 className="text-3xl text-gray-400">Local</h4>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center rounded-2xl w-[200px] bg-[#f5f5f5] h-[186px] p-10  box-shadow">
            <img src="images/Moving_Truck.svg" alt="" />
          </div>
          <div>
            <h4 className="text-3xl pt-6 text-gray-400">Commercial</h4>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center rounded-2xl w-[167px] bg-[#f5f5f5] h-[153px] p-8 mt-4 box-shadow">
            <img className="object-cover" src="images/Group 34.svg" alt="" />
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
