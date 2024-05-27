import React from "react";
import {
  FaArrowAltCircleRight,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import toast from "react-hot-toast";
import LogoutBtn from "@/components/LoginAndRegister/LogoutBtn";

const Footer = () => {
  return (
    <div className="md:mt-[350px] mt-[230px]">
      <div className="wrapper relative">
        <div className="mx-auto md:space-y-7 space-y-4 md:px-5 px-2 md:py-14 py-5 text-center rounded-3xl footer-banner absolute lg:left-[150px] lg:right-[150px] left-2 right-2 md:-mt-[250px] -mt-[150px]">
          <h1 className="text-textLight font-bold lg:text-4xl text-2xl mt-5">
            A Partnership With <br /> benefits and sustainability sustainability
          </h1>
          <p className="text-[18px] text-textLight font-normal">
            Jump on free quotes and start your new journey right away!
          </p>
          <button className="mx-auto md:p-5 p-3 text-accent text-xl bg-primary gap-2 flex justify-center items-center rounded-xl hover:bg-green-500 delay-75">
            Free Quotes <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
      <div className="bg-accent pt-[170px]">
        {/* Footer logo and social section  */}
        <div className="wrapper">
          <div className="flex justify-between items-center flex-wrap space-y-10">
            <div>
              <Image
                className="w-[112px]"
                src="/images/logo.png"
                width={400}
                height={200}
                alt="Footer logo"
              />
              <p className="text-textLight md:w-[400px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry is 
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex gap-3 items-center text-md text-textLight">
                <MdEmail />
                <span>info@yourmail.com</span>
              </div>
              <div className="flex gap-3 items-center text-md text-textLight">
                <FaPhone />
                <span>(001) 1231 3435</span>
              </div>
              <div className="flex gap-5">
                <Link
                  className="text-textLight text-3xl hover:text-primary delay-75"
                  href="/"
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="text-textLight text-3xl hover:text-primary delay-75"
                  href="/"
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="text-textLight text-3xl hover:text-primary delay-75"
                  href="/"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  className="text-textLight text-3xl hover:text-primary delay-75"
                  href="/"
                >
                  <FaDribbble />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-10 border-1 border-[#404040]" />
        {/* Footer copy Wright section  */}
        <div className="wrapper flex justify-between items-center pb-10 flex-wrap space-y-5">
          <ul className="flex gap-5 items-center text-textLight flex-wrap">
            <li>
              <Link className="text-[16px]" href="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-[16px]" href="/">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link className="text-[16px]" href="/">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-[16px]" href="/">
                News
              </Link>
            </li>
            <li>
              <Link className="text-[16px]" href="/">
                FAQ
              </Link>
            </li>
            <li>
              <LogoutBtn/>
            </li>
            <li>
            <Link className="text-[16px]" href="/dashboard">
                Dashobard
              </Link>
            </li>
          </ul>
          <p className="text-textLight">© 2024FAHIMKHAN - All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
