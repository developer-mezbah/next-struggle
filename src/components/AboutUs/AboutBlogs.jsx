import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutBlogs = () => {
  return (
    <>
      <div className="wrapper about-blogs my-10">
        <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-accent font-bold text-[50px] leading-[60px]"
        >
          We Build Bridge <br />
          Between Your Expectation <br />& Reality
        </h1>
        <hr
          data-aos="fade-up"
          className="border-0 h-[16px] w-[140px] bg-primary mt-5 mb-10"
        />
        <Image
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-full md:h-[550px] object-cover"
          src="/images/about-us-2.png"
          width={800}
          height={800}
          alt=""
        />
      </div>
      <div className="bg-accent py-[100px]">
        <div className="wrapper space-y-20">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            className="md:flex flex-row gap-10 space-y-10 items-center"
          >
            <div className="md:space-y-10 space-y-5 md:w-4/5">
              <h2 className="text-textLight font-semibold leading-[60px] text-[50px]">
                What We Do
              </h2>
              <p className="text-textLight">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <button className="flex items-center gap-5 justify-center px-8 py-5 rounded-xl bg-white font-semibold hover:bg-gray-200 group">
                <span>Our Concept</span>
                <span className="text-primary text-2xl">
                  <FaArrowRightLong className="group-hover:translate-x-1.5" />
                </span>
              </button>
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-[50px] h-[350px] object-cover"
                src="/images/our-concept.png"
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            className="md:flex flex-row-reverse gap-10 space-y-10 items-center"
          >
            <div className="md:space-y-10 space-y-5 md:w-4/5">
              <h2 className="text-textLight font-semibold leading-[60px] text-[50px]">
                The End Result
              </h2>
              <p className="text-textLight">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <button className="flex items-center gap-5 justify-center px-8 py-5 rounded-xl bg-white font-semibold hover:bg-gray-200 group">
                <span>Our Portfolio</span>
                <span className="text-primary text-2xl">
                  <FaArrowRightLong className="group-hover:translate-x-1.5" />
                </span>
              </button>
            </div>
            <div className="w-full">
              <Image
                className="w-full rounded-[50px] h-[350px] object-cover"
                src="/images/our-porfolio.png"
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBlogs;
