"use client";
import React, { useEffect, useState } from "react";
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
import { SiAmazonsimpleemailservice } from "react-icons/si";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = ({ data }) => {
  const [currentDomain, setCurrentDomain] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setCurrentDomain(window.location.origin);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    const cc = "mk6449248@gmail.com";
    // console.log({name, email, subject, phone, message});

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          sendername: name,
          to: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
          subject,
          message,
          phone,
          email: email,
          cc,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          if (response.status == 200) {
            setLoader(false)
            toast.success("Email send Successfull.");
            e.target.reset();
          }
          // console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setLoader(false)
          toast.error("FAILED...", err);
          console.log("FAILED...", err);
        }
      );
  };

  const labelClass =
    "absolute left-0 -top-6 text-accent peer-placeholder-shown:text-[22px] peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm leading-[33px] text-sm";
  const inputClass =
    "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600";
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
            className="md:w-2/3 bg-[#F4F0EC] rounded-3xl lg:p-10 p-5 space-y-5 text-[20px]"
          >
            <div className="flex gap-3 items-center">
              <span className="bg-white rounded-full text-4xl p-3 text-primary">
                <MdOutlineEmail />
              </span>
              <span>{data?.firstEmail}</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white rounded-full text-4xl p-3 text-primary">
                <SiAmazonsimpleemailservice />
              </span>
              <span>{data?.secondEmail}</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white rounded-full text-4xl p-3 text-primary">
                <FiPhone />
              </span>
              <span>{data?.number}</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white rounded-full text-4xl p-3 text-primary">
                <GiWorld />
              </span>
              <span>{currentDomain}</span>
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
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <div className="mx-auto">
                  <div className="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 flex items-center justify-center gap-5">
                    <div className="relative w-full">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={inputClass}
                        placeholder="Username"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="name"
                        className={labelClass}
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative w-full">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={inputClass}
                        placeholder="Email address"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="email"
                        className={labelClass}
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
                        className={inputClass}
                        placeholder="Subject"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="Subject"
                        className={labelClass}
                      >
                        Subject
                      </label>
                    </div>
                    <div className="relative w-full">
                      <input
                        id="Phone"
                        name="phone"
                        type="number"
                        className={inputClass}
                        placeholder="Phone"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="Phone"
                        className={labelClass}
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
                        name="message"
                        type="text"
                        rows={5}
                        className="peer placeholder-transparent w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Intrested"
                      />
                      <label
                        data-aos="fade-up"
                        data-aos-duration="500"
                        htmlFor="Intrested"
                        className={labelClass}
                      >
                        Hello Iam Intrested in..
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {loader ? (
                <button
                  type="submit"
                  disabled
                  className="flex gap-2 justify-center items-center px-10 py-5 bg-primary rounded-xl float-end font-medium text-[18px] text-accent leading-[22px] hover:bg-green-600 hover:text-white group transition-colors"
                >
                  <span>Processing </span>
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex gap-2 justify-center items-center px-10 py-5 bg-primary rounded-xl float-end font-medium text-[18px] text-accent leading-[22px] hover:bg-green-600 hover:text-white group transition-colors"
                >
                  <span>Send Now </span>
                  <span>
                    <FaArrowAltCircleRight className="group-hover:scale-150 group-hover:text-accent transition-colors" />
                  </span>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
