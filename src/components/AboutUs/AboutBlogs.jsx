import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutBlogs = async ({ aboutBlogs }) => {
  const info = [
    {
      name: "Didarul Maksud",
      title: "CEO",
      phone: "+12675368321",
      email: "didar@strugglestyle.net",
      img: "/images/didar.jpg",
    },
    {
      name: "Kamrul Hasan",
      title: "Managing Director",
      phone: "+14753198400",
      location: "USA office",
      email: "kamrul@strugglestyle.net",
      img: "/images/kamrul.jpg",
    },
    {
      name: "Shakhawat Hossain",
      title: "Managing Director",
      phone: "+8801707936699",
      email: "info@strugglestyle.net ",
      location: "Dhaka Office",
      img: "/images/shakhawat.jpg",
    },
  ];
  return (
    <>
      <div className="wrapper about-blogs my-10">
        <div className="py-10">
          <h1
            data-aos="fade-right"
            className="text-green-500 font-bold text-[50px] leading-[60px]"
          >
            We Build Bridge Between Your Expectation & Reality
          </h1>
          <hr
            data-aos="fade-up"
            className="border-0 h-[16px] w-[140px] bg-accent mt-5 mb-10"
          />
          <p
            data-aos="fade-down"
            className="text-accent md:text-[20px] font-normal mt-5"
          >
            With global economic activity recovering, we have resumed our quest
            to become No. 1 brand around the world. On Year 2020, we started our
            global trading from Bangladesh with a focus on bringing together
            Apparel and Art. Economies and people have grown insular during the
            COVID-19 pandemic, but we have the power to brighten customer mood
            by conducting our business with energy and enthusiasm. Opened in
            September 2023, our newly refurbished STRUGGLE Style Inc. started
            operation from New York, USA to optimizes our idea for our buyers
            and partners. <br /> Our Struggle Style philosophy is to enrich the
            lives of everywhere with simple, high-quality clothing. Struggle
            Style is the concrete expression our commitment to reduce the
            environmental impact of our daily business activities, to help
            achieve sustainable growth for society and to make the world a
            better place through our business and products. As society and
            Struggle Style evolve, affinity and support for Struggle Style is
            growing everywhere. <br /> The unique concept of Struggle Style is
            the foundation on which we continue to expand our business
            internationally as we pursue our corporate commitment: Changing
            clothes. Changing commercial wisdom. Change the world. I am keen to
            join forces with enterprising individuals and companies worldwide to
            build framework for sustainable growth
          </p>
          <h2 className="text-[25px]">Didarul Maksud, CEO</h2>
        </div>
      </div>
      <div className="bg-accent py-[100px]">
        <div className="wrapper space-y-20">
          {aboutBlogs?.map((item, index) => (
            <div key={item?._id}>
              <div
                data-aos={`fade-${index % 2 === 0 ? "left" : "right"}`}
                data-aos-easing="ease-in-sine"
                className={`md:flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } gap-10 space-y-10 items-center`}
              >
                <div className="md:space-y-10 space-y-5 md:w-4/5">
                  <h2 className="text-textLight font-semibold leading-[60px] text-[50px]">
                    {item?.title}
                  </h2>
                  <p className="text-textLight">{item?.subTitle}</p>
                  <Link href="/manufacturing" className="flex items-center gap-5 justify-center px-8 py-5 rounded-xl bg-white font-semibold hover:bg-gray-200 group">
                    <span>Our Concept</span>
                    <span className="text-primary text-2xl">
                      <FaArrowRightLong className="group-hover:translate-x-1.5" />
                    </span>
                  </Link>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full rounded-[50px] h-[350px] object-cover"
                    // src="/images/our-concept.png"
                    src={item?.img}
                    width={400}
                    height={400}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="wrapper">
          <h1
            data-aos="fade-right"
            className="text-textLight font-bold text-[50px] leading-[60px] md:mt-20 mt-10"
          >
            Our Team
          </h1>
          <hr
            data-aos="fade-up"
            className="border-0 h-[16px] w-[140px] bg-[#1F2937] mt-5 mb-10"
          />
          <div className="grid md:grid-cols-3 sm:grid-cols-2 md:justify-between gap-5 mt-10">
            {info.map((item, index) => (
              <div className="w-full mx-auto" key={index}>
                <div className="w-full rounded-lg shadow bg-gray-800 border-gray-700 h-[300px]">
                  <div className="flex flex-col items-center py-10 px-5">
                    <Image
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={item?.img}
                      alt="Bonnie image"
                      width={200}
                      height={200}
                    />
                    <h5 className="mb-1 text-xl font-medium text-white">
                      {item?.name}
                    </h5>
                    <span className="text-sm text-gray-400">{item?.title}</span>
                    <span className="text-sm text-gray-400">{item?.phone}</span>
                    <span className="text-sm text-gray-400">{item?.email}</span>
                    <span className="text-sm text-gray-400">
                      {item?.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="bg-black py-10">
        <div className="wrapper">
          <div className="md:flex items-center justify-between text-textLight space-y-5 md:space-y-0">
            <div className="w-full">
              <h1 className="text-[50px] leading-[60px] text-textLight font-semibold">
                Location:
              </h1>
            </div>
            <div className="w-full flex justify-between items-center">
              <p>Head office 2221 Powel Avenue 1st Floor Bronx, NY 10462</p>
              <div className="location-bar h-[50px] w-[4px] bg-primary mr-5 md:flex hidden"></div>
            </div>
            <div className="w-full flex justify-between items-center">
              <p>
                Hong Kong office <br /> Kwong Yuen Building 2/F, Flat-P 4 <br />{" "}
                Kam Lam Street, Kowloon Hong Kong
              </p>
              <div className="location-bar h-[50px] w-[4px] bg-primary mr-5 md:flex hidden"></div>
            </div>
            <div className="w-full">
              <p>
                Bangladesh office <br /> Azhar Comfort Complex, Level 9 <br />{" "}
                GA-130/A, Progati Sharani Gulshan-1, Dhaka 1212
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBlogs;
