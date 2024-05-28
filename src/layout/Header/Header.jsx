"use client";
import Image from "next/image";
import "./Header.css";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GoGlobe } from "react-icons/go";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const [translate, setTranslate] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [navbarBG, setNavbarBG] = useState(true);

  // DropDown hidden when click outside
  const popupRef = useRef(null);
  const navPopupRef = useRef(null);
  useEffect(() => {
    setNavbarBG(false);
    const banner = document.getElementById("banner");
    const bannerSticky = banner?.offsetHeight;
    if (banner && bannerSticky) {
      window.onscroll = () => {
        if (window.scrollY >= bannerSticky) {
          setNavbarBG(true);
        } else {
          setNavbarBG(false);
        }
      };
    } else {
      setNavbarBG(true);
    }
  }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setTranslate(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    if (!translate) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [translate]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navPopupRef.current && !navPopupRef.current.contains(e.target)) {
        setNavbar(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    if (!navbar) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navbar]);
  // ref={popupRef} use in current DropDown div
  const navData = [
    {
      _id: 1,
      name: "Global Manufacturing",
      url: "/manufacturing",
    },
    {
      _id: 2,
      name: "Product",
      url: "/product/1",
    },
    {
      _id: 3,
      name: "Sustainability",
      url: "/sustainability",
    },
    {
      _id: 4,
      name: "Brands & Licenses",
      url: "/brand-and-licenses",
    },
    {
      _id: 5,
      name: "About Us",
      url: "/about",
    },
  ];
  return (
    <>
      <div
        id="navbar"
        className="w-full h-[115px] navbar-section fixed top-0"
        style={{
          zIndex: 9999999,
          background: navbarBG ? "rgba(0, 0, 0, 0.5)" : "",
        }}
      >
        <div className="wrapper">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                className="w-[112px] h-[112px]"
                src="/images/logo.png"
                width={400}
                height={200}
                alt="Logo"
              />
            </Link>
            <div className="lg:block hidden">
              <ul className="navbar flex flex-nowrap justify-center items-center xl:gap-5 gap-3 h-[55px] px-4">
                {navData?.map((item) => (
                  <li key={item._id}>
                    <Link
                      href={item.url}
                      className={`${
                        path === item.url ? "text-primary" : "text-[#ffffff]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 items-center">
              <div className="relative">
                <div
                  onClick={() => setTranslate(!translate)}
                  className="p-2 text-2xl bg-primary rounded-full cursor-pointer"
                >
                  <GoGlobe />
                </div>
                {translate && (
                  <div
                    ref={popupRef}
                    className="absolute bg-accent text-[#ffffff] p-5 rounded-lg mt-2"
                  >
                    <ul className="translate space-y-2 cursor-pointer">
                      <li>German</li>
                      <li>French</li>
                      <li>Turkis</li>
                      <li>Spanish</li>
                      <li>Russia </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                onClick={() => {
                  setNavbar(!navbar);
                }}
                className="lg:hidden block text-4xl text-primary cursor-pointer"
              >
                {navbar ? <IoMdClose /> : <HiMenuAlt1 />}
              </div>
            </div>
          </div>
        </div>
      </div>
      {navbar && (
        <div
          className="max-w-[1140px] md:mx-auto right-0 left-0 fixed top-[115px]"
          style={{ zIndex: 9999999999 }}
        >
          <div
            className="float-end md:w-1/3 w-full text-center bg-accent rounded-xl md:mx-2"
            ref={navPopupRef}
          >
            <ul className="">
              {navData.map((item) => (
                <li
                  key={item._id}
                  className={`border-b-2 border-gray-500 px-2 py-4 hover:bg-primary hover:text-accent ${
                    path === item.url ? "text-primary" : "text-textLight"
                  }`}
                >
                  <Link onClick={() => setNavbar(false)} href={item.url}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
