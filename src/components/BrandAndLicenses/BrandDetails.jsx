import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const BrandDetails = () => {
  return (
    <div className="my-20">
      <div className="wrapper space-y-10">
        <div data-aos="fade-up-right" className="md:flex flex-row justify-between items-center gap-10 border-2 border-primary px-5 py-10 rounded-xl space-y-5">
          <div className="w-full space-y-5">
            <div>
              <Image
                className="h-[50px] w-[80px] object-cover"
                src="/images/brands/img5.png"
                width={300}
                height={300}
                alt=""
              />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry is standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of
            </p>
          </div>
          <div className="w-full">
            <Image
              className="h-[260px] w-full"
              src="/images/brands/hm.png"
              width={700}
              height={400}
              alt=""
            />
          </div>
        </div>
        <div data-aos="fade-up-left" className="md:flex flex-row-reverse justify-between items-center gap-10 border-2 border-primary px-5 py-10 rounded-xl space-y-5">
          <div className="w-full space-y-5">
            <div>
              <Image
                className="h-[50px] w-[80px]"
                src="/images/brands/img1.png"
                width={300}
                height={300}
                alt=""
              />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry is standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of
            </p>
          </div>
          <div className="w-full">
            <Image
              className="h-[260px] w-full"
              src="/images/brands/zara.png"
              width={700}
              height={400}
              alt=""
            />
          </div>
        </div>
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
