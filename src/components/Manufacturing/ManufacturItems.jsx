import Image from "next/image";
import React from "react";

const ManufacturItems = ({ data }) => {
  return (
    <div className="md:my-[100px] my-[50px]">
      <div
        className="wrapper"
        data-aos="fade-up"
      >
       <div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-between">
        <div className="w-full">
        <h1 className="font-semibold md:text-[45px] text-[30px] text-accent md:leading-[60px]">
          {data?.title}
        </h1>
        <p className="text-accent md:text-[25px] font-normal md:leading-[35px] mt-5 text-justify">
          {data?.description}
        </p>
        </div>
        <div className="md:w-2/3 w-full">
          <Image className="w-full h-full object-cover rounded-lg" src={data?.img} width={600} height={600} alt={data?.title}/>
        </div>
       </div>
      </div>
    </div>
  );
};

export default ManufacturItems;
