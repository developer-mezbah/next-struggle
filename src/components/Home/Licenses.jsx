import Image from "next/image";
import React from "react";

const Licenses = () => {
  const data = [
    {
      _id: 1,
      img: "/images/license/img1.png",
    },
    {
      _id: 2,
      img: "/images/license/img2.png",
    },
    {
      _id: 3,
      img: "/images/license/img3.png",
    },
    {
      _id: 4,
      img: "/images/license/img4.png",
    },
    {
      _id: 5,
      img: "/images/license/img5.png",
    },
    {
      _id: 6,
      img: "/images/license/img6.png",
    },
    {
      _id: 7,
      img: "/images/license/img7.png",
    },
    {
      _id: 8,
      img: "/images/license/img8.png",
    },
    {
      _id: 9,
      img: "/images/license/img9.png",
    },
    {
      _id: 10,
      img: "/images/license/img10.png",
    },
    {
      _id: 11,
      img: "/images/license/img11.png",
    },
  ];
  return (
    <div className=" bg-accent py-20 mt-10 overflow-hidden">
      <div className="bg-[#132911]" 
      // data-aos="zoom-out-down"
      >
        <div className="wrapper py-5">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3">
            {data?.map((item) => (
              <Image
                key={item?._id}
                className=""
                src={item?.img}
                width={400}
                height={200}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licenses;
