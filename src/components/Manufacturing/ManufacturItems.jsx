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
      {data?.img && (
        <div
          className="md:py-20 py-10 md:mt-10 mt-3"
          style={{
            background: "url('/images/manufactur/bg-img.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "#111204",
          }}
        >
          <div className="wrapper">
            <Image
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mx-auto w-full md:h-[750px]"
              src={data?.img}
              width={800}
              height={800}
              alt={data?.description}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManufacturItems;
