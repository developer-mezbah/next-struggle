import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-center lg:gap-20 gap-10 my-10 py-10">
      <div
        className="w-full md:pt-0 pt-5"
        data-aos="fade-right"
      >
        <Image
          className="min-h-[500px] w-full object-cover"
          src="/images/about-us.jpg"
          width={600}
          height={600}
          alt=""
        />
      </div>
      <div
        className="w-full space-y-6"
        data-aos="fade-left"
      >
        <button className="bg-primary font-semibold px-10 py-3 text-2xl">
          About US
        </button>
        <h2 className="text-textLight font-medium md:text-[55px] text-[35px] md:leading-[80px] leading-[50px] ">
          Serving With Sustainability.
        </h2>
        <p className="text-textLight">
          Our story began over 100 years ago but the Intradeco of today was
          founded in 1982, having been built on a solid foundation in the
          textiles industry in Central America. A family-owned and operated
          business, we manufacture and distribute quality apparel with a focus
          on sustainability.
        </p>
        <button className="btn1">Learn More</button>
      </div>
    </div>
  );
};

export default AboutUs;
