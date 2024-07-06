"use client";
import Image from "next/image";
import React from "react";

const AboutUs = () => {

  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-center lg:gap-20 gap-10 my-10 py-10">
      <div className="w-full md:pt-0 pt-5 flex flex-col gap-5" data-aos="fade-right">
        <Image
          className="h-[250px] w-full object-cover"
          src="/images/about-us-1.png"
          width={600}
          height={600}
          alt=""
        />
        <Image
          className="h-[250px] w-full object-cover"
          src="/images/about-us2.png"
          width={600}
          height={600}
          alt=""
        />
      </div>
      <div className="w-full space-y-6" data-aos="fade-left">
        <button className="bg-primary font-semibold px-10 py-3 text-2xl">
          Main Manufacturing
        </button>
        <h2 className="text-textLight font-medium md:text-[55px] text-[35px] md:leading-[80px] leading-[50px] ">
          our factory.
        </h2>
        <p className="text-textLight">
          Our Mission is to pursue sustainable business growth, continually
          refine our unique process, foster a working environment for employee
          satisfaction, cherish the relationship with our stakeholders and
          commit to a safe greener environemnt .
        </p>
        <button className="btn1">
          special manufacturing
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
