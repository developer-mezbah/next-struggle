import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="pb-10">
      <div className="wrapper">
        <h1
          data-aos="flip-up"
          className="text-center md:text-[50px] text-[30px]  font-semibold md:leading-[75px] leading-[45px] my-10"
        >
          We love meeting new people
          <br /> and helping them.
        </h1>
        <div className="md:flex items-center lg:gap-10 gap-5 space-y-10">
          <div
            data-aos="fade-right"
            className="md:w-2/3 bg-[#F4F0EC] rounded-3xl lg:p-10 p-5 lg:space-y-10 space-y-5 text-[20px]"
          >
            <div className="flex gap-3 items-center">
              <span className="bg-white rounded-full text-4xl p-3 text-primary">
                <MdOutlineEmail />
              </span>
              <span>info@yourdomain.com</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white rounded-full text-4xl p-3 text-primary">
                <FiPhone />
              </span>
              <span>+1 (378) 400-1234</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white rounded-full text-4xl p-3 text-primary">
                <GiWorld />
              </span>
              <span>www.yourdomain.com</span>
            </div>
            <div className="flex gap-10 text-2xl text-accent">
              <button className=" hover:text-primary">
                <FaFacebookF />
              </button>
              <button className=" hover:text-primary">
                <FaTwitter />
              </button>
              <button className=" hover:text-primary">
                <FaLinkedinIn />
              </button>
              <button className=" hover:text-primary">
                <FaInstagram />
              </button>
            </div>
          </div>
          <div data-aos="fade-left" className="w-full">
            <form>
              <div className="relative">
                <div className="mx-auto">
                  <div className="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 flex items-center justify-center gap-5">
                    <div className="relative w-full">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Username"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="name"
                        className="absolute left-0 -top-6 text-accent peer-placeholder-shown:text-[22px] peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm leading-[33px] text-sm"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative w-full">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-accent peer-placeholder-shown:text-[22px] peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm leading-[33px]"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 flex items-center justify-center gap-5">
                    <div className="relative w-full">
                      <input
                        id="Subject"
                        name="subject"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Subject"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="Subject"
                        className="absolute left-0 -top-3.5 text-accent peer-placeholder-shown:text-[22px] peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm leading-[33px]"
                      >
                        Subject
                      </label>
                    </div>
                    <div className="relative w-full">
                      <input
                        id="Phone"
                        name="phone"
                        type="number"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Phone"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="Phone"
                        className="absolute left-0 -top-6 text-accent peer-placeholder-shown:text-[22px] peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm leading-[33px] text-sm"
                      >
                        Phone
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="mx-auto">
                  <div className="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 flex items-center justify-center gap-5">
                    <div className="relative w-full">
                      <textarea
                        id="Intrested"
                        name="intrested"
                        type="text"
                        rows={5}
                        className="peer placeholder-transparent w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Intrested"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="Intrested"
                        className="absolute left-0 -top-6 text-accent peer-placeholder-shown:text-[22px] peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm leading-[33px] text-sm"
                      >
                        Hello Iam Intrested in..
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                type="submit"
                className="flex gap-2 justify-center items-center px-10 py-5 bg-primary rounded-xl float-end font-medium text-[18px] text-accent leading-[22px] hover:bg-green-600 hover:text-white group transition-colors"
              >
                <span>Send Now </span>
                <span>
                  <FaArrowAltCircleRight className="group-hover:scale-150 group-hover:text-accent transition-colors" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
