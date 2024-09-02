import Logo from "../../assets/images/logo/logo3.svg"
import { IoMdMenu } from "react-icons/io";
import { Menu, Switch } from "antd";
import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";


function getItem(
  label,
  key,
  icon,
  children,
){
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <Link to={"/"} className="cursor-pointer font-bold">
      Home
    </Link>,
    "1",
    null
  ),
  getItem(<p className="cursor-pointer font-bold">Tours</p>, "sub1", null, [
    getItem(
      <Link to="/pages/tourpackages/international">International</Link>,
      "3",
      null,
      [
        getItem(
          <Link
            to={"/pages/tourpackages/international/dubai"}
            className="hover:text-[#FBAD17] my-2"
          >
            Dubai
          </Link>,
          "7"
        ),
        getItem(
          <Link
            to={"/pages/tourpackages/international/thailand"}
            className="cursor-pointer hover:text-[#FBAD17] my-2"
          >
            Thailand
          </Link>,
          "8"
        ),
        getItem(
          <Link
            to={"/pages/tourpackages/international/maldives"}
            className="cursor-pointer hover:text-[#FBAD17] my-2"
          >
            Maldives
          </Link>,
          "9"
        ),
        getItem(
          <Link
            to={"/pages/tourpackages/international/indonesia"}
            className="cursor-pointer hover:text-[#FBAD17] my-2"
          >
            Indonesia
          </Link>,
          "10"
        ),
        getItem(
          <Link
            to={"/pages/tourpackages/international/baku"}
            className="cursor-pointer hover:text-[#FBAD17] my-2"
          >
            Baku
          </Link>,
          "11"
        ),
        getItem(
          <Link
            to={"/pages/tourpackages/international/srilanka"}
            className="cursor-pointer hover:text-[#FBAD17] my-2"
          >
            Srilanka
          </Link>,
          "12"
        ),
        getItem(
          <Link
            to={"/pages/tourpackages/international/malaysia"}
            className="cursor-pointer hover:text-[#FBAD17] my-2 "
          >
            Malaysia
          </Link>,
          "13"
        ),
        getItem(
          <Link
            to={"/pages/tourpackages/international/turkey"}
            className="cursor-pointer hover:text-[#FBAD17] my-2"
          >
            Turkey
          </Link>,
          "14"
        ),
        getItem(
          <Link
            to={"/pages/tourpackages/international/singapore"}
            className="cursor-pointer hover:text-[#FBAD17] my-2"
          >
            Singapore
          </Link>,
          "15"
        ),
      ]
    ),
    getItem(
      <Link to="/pages/tourpackages/domestic">Domestic</Link>,
      "4",
      null,
      [
        getItem(
          <Link
            to={"/pages/tourpackages/domestic/north"}
            className="cursor-pointer hover:text-[#FBAD17] my-2"
          >
            North
          </Link>,
          "7"
        ),
        getItem(
          <Link
            to={"/pages/tourpackages/domestic/south"}
            className="cursor-pointer hover:text-[#FBAD17] my-2"
          >
            South
          </Link>,
          "8"
        ),
      ]
    ),
  ]),
  // getItem("Activities", "sub2", null),
  getItem(
    <Link to="/pages/hotel" className="cursor-pointer font-bold">
      Hotels
    </Link>,
    "sub3",
    null
  ),
  getItem(
    <Link to="/pages/rentcar" className="cursor-pointer font-bold">
      Car Rental
    </Link>,
    "sub4",
    null
  ),
  getItem(
    <Link to={"/pages/visa"} className="cursor-pointer font-bold">
      Visa
    </Link>,
    "sub5",
    null
  ),
  getItem(<Link to="/pages/tourpackages" className="cursor-pointer font-bold">Packages</Link>, "sub6", null, [
    getItem(<Link to="/pages/tourpackages/group">Group</Link>, "10"),
    getItem(<Link to="/pages/tourpackages/honeymoon">Honeymoon</Link>, "11"),
    getItem(<Link to="/pages/tourpackages/private-family">Private Family</Link>,"12"),
    getItem(<Link to="/pages/tourpackages/corporate">Corporate</Link>, "13"),
  ]),
  getItem(<Link to="/pages/contactus" className="cursor-pointer font-bold">Contact Us</Link>,"sub7",null),
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-white py-3 min-w-min flex justify-between lg:hidden  items-center ">
        <IoMdMenu
          onClick={showDrawer}
          className="cursor-pointer text-3xl text-black"
        />
      </div>
      <Drawer
        title="Moving 7"
        className="px-0"
        onClose={onClose}
        open={open}
      >
        <Menu
          className="w-full"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          theme={"light"}
          mode={"inline"}
          items={items}
        />
      </Drawer>
    </>
  );
};

export default MobileNavbar;
