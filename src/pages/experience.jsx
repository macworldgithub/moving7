import "./experience.css"
function Experience() {
  return (
    <div className="main-conatiner flex text-[#787878] flex-col items-center justify-evenly pt-6 pb-24 gap-8 sm:flex sm:flex-row  md:flex-row">
      <div className="absolute mt-[432px] sm:mt-44 md:mt-48">
        <img src="images/Group 6 (1).svg" alt="" />
      </div>
      <div>
        <img src="images/5K.svg" />
        <h2>Happy Clients</h2>
      </div>
      <div>
        <img src="images/230 +.svg" />
        <h2>Moving Companies</h2>
      </div>
      <div>
        <img src="images/15.svg" />
        <h2>Years of experience</h2>
      </div>
    </div>
  );
}

export default Experience;
