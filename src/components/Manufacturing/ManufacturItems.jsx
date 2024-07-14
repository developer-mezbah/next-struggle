import Image from "next/image";
import React from "react";

const ManufacturItems = ({ data }) => {
  return (
    <div className="md:mt-[100px] mt-[50px]">
      <div
        className="wrapper"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <h1 className="font-semibold md:text-[55px] text-[40px] text-accent md:leading-[80px]">
          {data?.title}
        </h1>
        <p className="text-accent md:text-[30px] font-normal md:leading-[45px] mt-5">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default ManufacturItems;
