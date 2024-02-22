import logo from "../../assets/images/logo.svg";
import { ToastContainer } from "react-toastify";
import Ellipse1 from "../../assets/images/Ellipse 1.svg";
import Ellipse2 from "../../assets/images/Ellipse 2.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <>
      <ToastContainer />
      <div className="header px-8 bg-transparent h-20 flex items-center justify-between md:justify-around lg:gap-[20%]">
        <div className="logo cursor-pointer">
          <Link to="/">
            <img
              className="w-28 md:w-full cursor-pointer"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        <div className="header-btn hidden sm:flex sm:flex-row lg:flex gap-6 lg:text-xl">
          <button className="text-sm bg-[#13C265] lg:text-lg sm:p-3 md:w-26 lg:w-44 md:py-2 md:px-6 lg:px-0 lg:py-2 font-bold">
            <Link to={`/`}>Review</Link>
          </button>
          <button className="text-sm bg-[#13C265] lg:text-lg sm:p-3 md:w-26 lg:w-44 md:py-2 md:px-6 lg:px-0 lg:py-2 font-bold">
            <Link to={`/`}>About Us</Link>
          </button>
          <button className="text-sm bg-[#13C265] lg:text-lg sm:p-3 md:w-26 lg:w-44 md:py-2 md:px-6 lg:px-0 lg:py-2  font-bold">
            <Link to={`/partner`}>Become a partner</Link>
          </button>
        </div>

        <div className="block sm:hidden">
          <AiOutlineMenu />
        </div>
      </div>
      <div>
        <img
          src={Ellipse1}
          className="absolute z-10 top-[0%] h-[150px] sm:h-[190px] md:h-[175px] lg:h-[245px] "
          alt=""
        />
        <img
          src={Ellipse2}
          className="absolute z-10 top-[-45px] sm:top-[-65px] h-[14rem] w-[256px] sm:h-[240px] sm:w-[170px] md:h-[270px] md:w-[285px] lg:h-[351px] lg:w-[425px] "
          alt=""
        />
        <div
          className="bg-transparent h-10 w-36 absolute mt-[-54px] ml-24 z-10 cursor-pointer"
          onClick={() => (window.location = "/")}
        ></div>
      </div>
    </>
  );
}

export default Header;
