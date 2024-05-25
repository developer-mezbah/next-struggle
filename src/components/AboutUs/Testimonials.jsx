import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Testimonials = () => {
  const data = [
    {
      _id: 1,
      img: "/images/teams/img1.png",
    },
    {
      _id: 2,
      img: "/images/teams/img2.png",
    },
    {
      _id: 3,
      img: "/images/teams/img1.png",
    },
    {
      _id: 4,
      img: "/images/teams/img4.jpg",
    },
  ];
  return (
    <div className="wrapper my-10">
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="font-semibold md:text-[50px] text-[30px] md:leading-[60px] leading-[30px] text-center my-5"
      >
        What the People Thinks <br />
        About Us
      </h1>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {data?.map((item, index) => (
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay={index * 200}
            key={item?._id}
            className="relative group min-h-[400px] overflow-hidden cursor-pointer"
          >
            <div className="rounded-2xl h-full overflow-hidden w-full">
              <Image
                className="h-full object-cover group-hover:blur-sm delay-75 w-full"
                src={item?.img}
                width={400}
                height={500}
                alt=""
              />
            </div>
            <div
              className="absolute left-0 right-0 bottom-0 w-full h-full flex rounded-2xl flex-col justify-center items-center gap-10 group-hover:top-0 top-[100%]"
              // group-hover:top-0 top-[100%]
              style={{
                transition: "0.8s all ease",
                background: "rgba(32, 251, 139, 0.4)",
              }}
            >
              <Image
                className="w-[100px]"
                src="/images/teams/team-brand.png"
                width={200}
                height={200}
                alt=""
              />
              <div className="flex gap-4 text-2xl">
                <button className=" hover:text-textLight">
                  <FaFacebookF />
                </button>
                <button className=" hover:text-textLight">
                  <FaTwitter />
                </button>
                <button className=" hover:text-textLight">
                  <FaLinkedinIn />
                </button>
                <button className=" hover:text-textLight">
                  <FaInstagram />
                </button>
              </div>
              <div className="leading-[24px]">
                <p>+1 (378) 400-1234</p>
                <p>h&m@email.com</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
