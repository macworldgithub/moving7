import "./../../App.css";
function ChooseUs() {
  return (
    <div className="items-center flex justify-between mt-[80px] size-full bg-width py-0 px-16">
      <div className="basis-1/2 bg-ww">
        <h2 className="text-4xl font-bold">Why choose us for moving?</h2>
        <p className="pt-4 w-4/5 text-justify">
          Choose us for your moving needs because we prioritize your peace of
          mind.Our experienced team is dedicated to ensuring a seamless and
          stress-free relocation process.
        </p>
      </div>
      <div className="flex justify-evenly items-center basis-1/2 gap-8">
        <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-[170px] flex items-center justify-center">
          <img  src="images/Frame(3).svg" alt="" />
        </div>
    <div className="img-height bg-[#F5F5F5] rounded-[28px] p-8 w-[170px] flex items-center justify-center">
          <img src="images/Frame (1).svg" alt="" />
        </div>
        <div className="bg-[#F5F5F5] rounded-[28px] p-8 w-[170px] flex items-center justify-center">
          <img src="images/Frame (2).svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
