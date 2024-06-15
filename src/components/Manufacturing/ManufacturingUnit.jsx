import Image from "next/image";
import React from "react";
import "./ManufacturingUnit.css"

const ManufacturingUnit = ({data}) => {
  return (
    <div className="menufac-unit overflow-hidden mt-10">
      <div className="wrapper">
        <div className="md:flex justify-center items-center gap-5 ">
          <div data-aos="fade-right" className="w-full space-y-5">
            <h1 className="font-medium lg:text-[50px] text-[30px] md:leading-[60px] leading-[40px]">{data?.title}</h1>
            <p className="text-[20px] leading-[30px]">
              {data?.description}
            </p>
            <div>
              <ul className="text-[22px] leading-[44px] font-bold">
                {data?.specification?.map((item, index) => (
                  <li key={item?._id}>{`${index + 1}. ${item}`}</li>
                ))}
              </ul>
              <div className="w-[150px] h-[13px] bg-accent mt-5 mb-10"></div>
            </div>
          </div>
          <div data-aos="fade-left" className="w-4/5">
            <Image
            className="mx-auto"
              width={500}
              height={500}
              src={data?.img}
              alt={data?.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingUnit;
