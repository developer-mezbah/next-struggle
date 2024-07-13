import Image from "next/image";
import React from "react";

const MajorBuyer = () => {
  const data = [
    {
      name: "FRANCH",
      img: "/images/major-buyers/img1.png",
    },
    {
      name: "UK",
      img: "/images/major-buyers/img2.png",
    },
    {
      name: "CANADA",
      img: "/images/major-buyers/img3.png",
    },
    {
      name: "CHILE",
      img: "/images/major-buyers/img4.png",
    },
    {
      name: "CANADA",
      img: "/images/major-buyers/img5.png",
    },
    {
      name: "UK",
      img: "/images/major-buyers/img6.png",
    },
    {
      name: "BRAZIL",
      img: "/images/major-buyers/img7.png",
    },
    {
      name: "UK",
      img: "/images/major-buyers/img8.png",
    },
    {
      name: "USA",
      img: "/images/major-buyers/img9.png",
    },
  ];
  return (
    <div className="py-20 bg-black">
      <div className="wrapper">
        <div className="text-center">
          <h1 className="md:text-[50px] sm:text-[30px] text-[20px] leading-[62px] font-semibold bg-[#D9D9D9] inline p-5">
            MAJOR BUYER
          </h1>
        </div>
        <div className="mt-10 bg-[#FFFFFF] p-5 flex justify-center items-center flex-wrap gap-5">
          {data?.map((item, index) => (
            <div key={index}>
              <p className="text-[20px] text-[#FB6F20] text-center">
                {item?.name}
              </p>
              <Image
                className="max-h-[100px]"
                src={item?.img}
                alt=""
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MajorBuyer;
