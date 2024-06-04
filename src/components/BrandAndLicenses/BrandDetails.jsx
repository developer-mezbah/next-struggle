import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const BrandDetails = ({ data }) => {
  return (
    <div className="my-20">
      <div className="wrapper space-y-10">
        {data?.map((item, index) => (
          <div
            key={item?._id}
            data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            className={`md:flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } justify-between items-center gap-10 border-2 border-primary px-5 py-10 rounded-xl space-y-5`}
          >
            <div className="w-full space-y-5">
              <div>
                <Image
                  className="h-[50px] w-[80px] object-cover"
                  src={item?.brandImg}
                  width={300}
                  height={300}
                  alt={item?.description}
                />
              </div>
              <p>{item?.description}</p>
            </div>
            <div className="w-full">
              <Image
                className="h-[260px] w-full"
                src={item?.img}
                width={700}
                height={400}
                alt={item?.description}
              />
            </div>
          </div>
        ))}
      </div>
      <div data-aos="zoom-in-up" className="flex justify-center md:mt-10 mt-5">
        <button className="flex flex-col items-center font-medium text-[18px] bg-[#E3E3E3] hover:bg-gray-300 px-10 py-5 rounded-xl">
          <span>Load More</span>
          <span>
            <IoIosArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BrandDetails;
