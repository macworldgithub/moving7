import "./header.css";

import logo from '../../assets/images/logo.svg'
import Ellipse1 from '../../assets/images/Ellipse 1.svg'
import Ellipse2 from '../../assets/images/Ellipse 2.svg'
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <>
      <div className="header px-8 bg-transparent h-20 flex items-center justify-between md:justify-around lg:gap-[20%]">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="header-btn hidden sm:flex lg:flex gap-6 lg:text-xl">
          <button className="text-sm bg-[#13C265] lg:text-lg sm:p-3 md:w-26 lg:w-44 md:py-2 md:px-6 lg:px-0 lg:py-2 font-bold">Review</button>
          <button className="text-sm bg-[#13C265] lg:text-lg sm:p-3 md:w-26 lg:w-44 md:py-2 md:px-6 lg:px-0 lg:py-2 font-bold">About Us</button>
          <button className="text-sm bg-[#13C265] lg:text-lg sm:p-3 md:w-26 lg:w-44 md:py-2 md:px-6 lg:px-0 lg:py-2  font-bold">Become a partner</button>
        </div>
        <div className="block sm:hidden">
          <AiOutlineMenu />
        </div>
      </div>
      <div>
        <img src={Ellipse1} className="absolute z-10 top-[0%] h-[150px] sm:h-[190px] md:h-[190px] lg:h-[245px] " alt="" />
        <img src={Ellipse2} className="absolute z-10 top-[-7%] h-[14rem] w-[256px] sm:h-[240px] sm:w-[170px] md:h-[270px] md:w-[317px] lg:h-[335px] lg:w-[430px] " alt="" />
      </div>
    </>
  );
}

export default Header;
