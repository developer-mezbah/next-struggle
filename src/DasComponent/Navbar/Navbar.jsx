"use client";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import TopNavbar from "../TopNavbar";
import { useContext, useEffect, useState } from "react";
import Horizontal from "../Others/Horizontal";
import NavItems from "./NavItems";
import SmallNavbar from "./SmallNavbar";
import { DasNavData } from "@/utils/DasNavData";
import { FaSignOutAlt } from "react-icons/fa";
import { AdminContext } from "@/Context/AdminContext";

const Navbar = () => {
  const {logOut} = useContext(AdminContext)
  const [navToggle, setNavToggle] = useState(false);
  const [smallNavbar, setSmaillNavbar] = useState(false);
  const handleNavbar = () => {
    setSmaillNavbar(!smallNavbar);
  };

  const handleMouseMove = () => {
    if (smallNavbar) {
      setSmaillNavbar(false);
      setNavToggle(true);
    }
  };
  const handleMouseLeave = () => {
    if (navToggle) {
      setSmaillNavbar(true);
      setNavToggle(false);
    }
  };
  useEffect(() => {
    const width = screen.width;
    if (width <= 768) {
      setSmaillNavbar(true);
    }
  }, []);
  return (
    <>
      <TopNavbar handleNavbar={handleNavbar} smallNavbar={smallNavbar} />
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={
          smallNavbar
            ? "md:w-[80px] w-[50px] h-full"
            : "md:w-[250px] w-[150px] overflow-x-hidden overflow-y-scroll h-screen dasboard-navbar-scrollbar"
        }
      >
        <div className={smallNavbar ? "hidden" : "md:w-[250px] w-[150px]"}>
          <div className="logo py-2">
            <Link href={"/dashboard"}>
              <Image
                src={"/images/logo.png"}
                className="mx-auto h-[70px] md:w-full w-[150px] my-1 object-cover"
                width={200}
                height={100}
                alt="Logo"
              />
            </Link>
          </div>
          <Horizontal className={"mb-2"} />
          <NavItems data={DasNavData[0]} />
          {DasNavData?.slice(1).map((navData, index) => (
            <NavItems data={navData} key={index} />
          ))}
          <button onClick={() => {
            logOut()
          }} className="flex text-lg text-red-500 items-center gap-5 pl-3">
            <FaSignOutAlt />
            Log Out
          </button>
        </div>
        {smallNavbar && <SmallNavbar />}
      </div>
    </>
  );
};

export default Navbar;
