"use client";
import Image from "next/image";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const ProductsCategory = () => {
  const data = [
    {
      _id: 1,
      name: "Denim",
      img: "/images/products-category/img1.jpg",
    },
    {
      _id: 3,
      name: "Denim",
      img: "/images/products-category/img3.jpg",
    },
    {
      _id: 4,
      name: "Denim",
      img: "/images/products-category/img4.jpg",
    },
    {
      _id: 2,
      name: "Denim",
      img: "/images/products-category/img2.jpg",
    },
    {
      _id: 5,
      name: "Denim",
      img: "/images/products-category/img5.jpg",
    },
    {
      _id: 6,
      name: "Denim",
      img: "/images/products-category/img6.jpg",
    },
  ];
  return (
    <div className="wrapper">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className="title"
      >
        Offering a Diverse <br /> Range of Products.
      </h1>
      <div className="md:mt-[100px] mt-[50px] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
        {data?.slice(0, 6).map((item, index) => {
         
          return (
            <div
              className={`relative group h-[400px] overflow-hidden mx-auto ${
                index === 1 || index === 4 ? "md:mt-10" : "md:-mt-10"
              }`}
              key={item._id}
              data-aos="zoom-in"
              data-aos-duration={index * 0.5}
              // data-aos-duration="1000"
            >
              <div className="h-full">
                <Image
                  className="group-hover:scale-[120%] h-full object-cover"
                  style={{ transition: "0.8s all ease" }}
                  src={item?.img}
                  width={400}
                  height={500}
                  alt=""
                />
              </div>
              <div
                className="absolute group-hover:top-0 top-[100%] left-0 right-0 bottom-0 h-full w-full flex justify-center items-center"
                style={{ background: "rgba(0, 0, 0, 0.3)", transition: "0.8s" }}
              >
                <h3 className="flex items-center text-4xl text-textLight font-bold">
                  <span>{item?.name}</span>
                  <HiOutlineArrowRight />
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCategory;