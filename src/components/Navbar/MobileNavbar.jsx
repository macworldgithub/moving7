import Logo from "../../assets/images/logo/logo3.svg";
import { IoMdMenu } from "react-icons/io";
import { Menu, Switch } from "antd";
import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const MobileNavbar = ({ user }) => {
  const [open, setOpen] = useState(false);
  const items = [
    getItem(
      <Link
        to={"/"}
        onClick={() => setOpen(false)}
        className="cursor-pointer font-bold"
      >
        Quote
      </Link>,
      "1",
      null,
    ),
    getItem(
      <Link
        to="/aboutus"
        onClick={() => setOpen(false)}
        className="cursor-pointer font-bold"
      >
        About Us
      </Link>,
      "sub3",
      null,
    ),
    getItem(
      <Link
        onClick={() => setOpen(false)}
        to="/partnerSignUp"
        className="cursor-pointer font-bold"
      >
        Become a Partner
      </Link>,
      "sub4",
      null,
    ),
    getItem(
      <Link
        onClick={() => setOpen(false)}
        to={`${user?.isPartner && user?.proof ? "/partner/overview/" + user?._id : user?.isPartner && !user?.proof ? "/partner/documentsVerification" : "/login"}`}
        className="text-black font-bold cursor-pointer"
      >
        {user?.isPartner ? "Dashboard" : "Login"}
      </Link>,
      "sub5",
      null,
    ),
  ];

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
      <Drawer title="Moving 7" className="px-0" onClose={onClose} open={open}>
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
