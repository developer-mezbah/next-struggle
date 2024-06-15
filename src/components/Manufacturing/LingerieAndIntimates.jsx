import Image from "next/image";
import React from "react";

const LingerieAndIntimates = ({ data }) => {
  return (
    <div className="bg-black py-20 space-y-5">
      <div className="wrapper">
        <h1 className="text-center md:text-[50px] text-[30px] md:leading-[60px] leading-[40px] font-semibold overflow-hidden">
          <span className="text-white bg-[#132911] px-5 py-5 inline-block">
            Manufacturing Lingerie & Intimates
          </span>
        </h1>
        <p data-aos="fade-right" className="text-[20px] leading-[30px] text-white text-center mt-10">
          {data?.subtitleTop}
        </p>
      </div>

      <div className="w-full overflow-x-hidden">
        <Image
         data-aos="flip-up"
          className="w-full"
          width={1400}
          height={600}
          src={data?.img}
          alt=""
        />
      </div>
      <div data-aos="fade-right" className="wrapper">
        <h2 className="md:text-[50px] text-[30px] md:leading-[60px] leading-[40px] text-white mt-5 font-medium my-5">
        {data?.title}
        </h2>
        <p className="text-[20px] leading-[30px] text-white mt-5">
          {data?.subtitleBottom}
        </p>
      </div>
    </div>
  );
};

export default LingerieAndIntimates;
