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
          <button className="text-sm bg-[#13C265] lg:text-lg sm:p-3 md:w-32 lg:w-40 md:py-2 md:px-2 font-bold">Review</button>
          <button className="text-sm bg-[#13C265] lg:text-lg sm:p-3 md:w-32 lg:w-40 md:py-2 md:px-2 font-bold">About Us</button>
          <button className="text-sm bg-[#13C265] lg:text-lg sm:p-3 md:w-32 lg:w-40 md:py-2 md:px-2  font-bold">Become a partner</button>
        </div>
        <div className="block sm:hidden">
          <AiOutlineMenu />
        </div>
      </div>
      <div>
        <img src={Ellipse1} className=" absolute z-10 top-[0%] w-[10rem] sm:w-64 md:w-[248px] lg:w-[337px] " alt="" />
        <img src={Ellipse2} className=" absolute z-10 top-[-7%] w-[170px] sm:w-72 md:w-[258px] lg:w-[353px]" alt="" />
      </div>
    </>
  );
}

export default Header;
