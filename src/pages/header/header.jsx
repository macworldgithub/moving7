import "./header.css";

import logo from '../../assets/images/logo.svg'
function Header() {
  return (
    <div className="header px-8 bg-transparent h-20 flex items-center justify-between gap-8 lg:gap-[60%]">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-btn">
        <button className="text-sm px-6 py-3 bg-[#13C265] font-bold">Get Quotes</button>
      </div>
    </div>
  );
}

export default Header;
