import "./header.css";

import logo from '../../assets/images/logo.svg'
function Header() {
  return (
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
  );
}

export default Header;
