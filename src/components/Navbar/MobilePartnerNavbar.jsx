import Logo from "../../assets/images/logo/logo3.svg";
import { IoMdMenu } from "react-icons/io";
import { Menu, Switch } from "antd";
import React, { useState } from "react";
import { Drawer } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import QuoteDropdown from "../../pages/quotesRequest/DropDown";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const MobilePartnerNavbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const items = [
    getItem(
      <h2
        className="cursor-pointer"
        onClick={() => {
          if (user?.proof) {
            navigate(`/partner/overview/${user?._id}`);
          } else {
            console.log("ran");
            toast.error("Please complete your profile first");
          }

          setOpen(false);
        }}
      >
        Overview
      </h2>,
      "1",
      null,
    ),
    getItem(
      <h2
        onClick={() => {
          if (user?.proof) {
            navigate(`/partner/quoteRequest/${user?._id}`);
          } else {
            toast.error("Please complete your profile first");
          }

          setOpen(false);
        }}
        className="cursor-pointer"
      >
        Quote Requests
      </h2>,
      "sub3",
      null,
    ),
    getItem(
      <h2
        onClick={() => {
          if (user?.proof) {
            navigate(
              `/partner/companyprofile/${user?.companyName}/${user?._id}`,
            );
          } else {
            toast.error("Please complete your profile first");
          }
          setOpen(false);
        }}
        className="cursor-pointer"
      >
        Company Profile
      </h2>,
      "sub4",
      null,
    ),
    getItem(
      <h2
        onClick={() => {
          if (user?.proof) {
            navigate(`/partner/helpdesk`);
          } else {
            toast.error("Please complete your profile first");
          }
          setOpen(false);
        }}
        className="cursor-pointer"
      >
        Help Desk
      </h2>,
      "sub5",
      null,
    ),
    getItem(
      <h2
        onClick={() => {
          if (user?.proof) {
            navigate(`/partner/invoices/${user?._id}`);
          } else {
            toast.error("Please complete your profile first");
          }
          setOpen(false);
        }}
        className="cursor-pointer"
      >
        Invoices
      </h2>,
      "sub6",
      null,
    ),
    getItem(
      <h2
        onClick={() => {
          if (user?.proof) {
            navigate(`/partner/documents/${user?._id}`);
          } else {
            toast.error("Please complete your profile first");
          }
          setOpen(false);
        }}
        className="cursor-pointer"
      >
        Documents
      </h2>,
      "sub7",
      null,
    ),
    getItem(
      user?.proof ? (
        <>
          <h2
            className="cursor-pointer"
            onClick={() => {
              navigate(`/partner/account/${user?._id}`);
              setOpen(false);
            }}
          >
            Account
          </h2>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              console.log("clicked here");
              localStorage.removeItem("userData");
              setUser({});
              navigate("/");
            }}
            className=" cursor-pointer"
          >
            Logout{" "}
          </button>
        </>
      ),
      "sub8",
      null,
    ),
    getItem(
      user?.proof ? (
        <>
          <h2
            className="text-red-500 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("userData");
              setUser({});
              navigate("/");
              setOpen(false);
            }}
          >
            Logout
          </h2>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              console.log("clicked here");
              localStorage.removeItem("userData");
              setUser({});
              navigate("/");
            }}
            className=" cursor-pointer"
          >
            Logout{" "}
          </button>
        </>
      ),
      "sub9",
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
      <div className="bg-white  min-w-min flex justify-between lg:hidden  items-center ">
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

export default MobilePartnerNavbar;
