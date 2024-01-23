import "./header.css";

import logo from '../../assets/images/logo.svg'
import Ellipse1 from '../../assets/images/Ellipse 1.svg'
import Ellipse2 from '../../assets/images/Ellipse 2.svg'

function Header() {
  return (
    <>
      <div className="header px-8 bg-transparent h-20 flex items-center justify-around gap-8 lg:gap-[20%]">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="header-btn hidden lg:flex gap-3 lg:text-xl">
          <button className="text-sm py-2 bg-[#13C265] lg:text-lg lg:w-40 font-bold">Review</button>
          <button className="text-sm py-2 bg-[#13C265] lg:text-lg lg:w-40 font-bold">About Us</button>
          <button className="text-sm py-2 bg-[#13C265] lg:text-lg lg:w-40 font-bold">Become a partner</button>
        </div>
      </div>
      <div className="hidden md:block">
        <img src={Ellipse1} className=" absolute top-[0%]" alt="" />
        <img src={Ellipse2} className=" absolute top-[-7%]" alt="" />
      </div>
    </>
  );
}

export default Header;
