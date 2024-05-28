"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./ProductDetails.css";
import MagnifyImage from "./MagnifyImage";

const data = {
  thumbnailImg:
    "https://m.media-amazon.com/images/I/7174dIfJvQL._AC_SY695_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/71Sk21yoG2L._AC_SY695_.jpg",
    "https://m.media-amazon.com/images/I/61waM-H33PL._AC_SY575_.jpg",
    "https://m.media-amazon.com/images/I/61z6YQogYxL._AC_SX575_.jpg",
    "https://m.media-amazon.com/images/I/710upmHIr0L._AC_SY695_.jpg",
    "https://m.media-amazon.com/images/I/71Xrz2TjUwL._AC_SY695_.jpg",
  ],
  title:
    "MYS Men's 3 Piece Slim Fit Suit Set",
  size: "5.8",
  fabricQuality: "High",
  quantity: "100",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

const ProductDetails = () => {
  const [magnifyImg, setMagnifyImg] = useState(data.thumbnailImg || "");

  return (
    <div>
      <div className="wrapper">
        <div className="lg:flex justify-between gap-10">
          <div className="relative w-full overflow-hidden">
            <MagnifyImage img={magnifyImg} />
          </div>
          <div className="relative lg:block flex justify-center mt-7 sm:gap-5 gap-2 lg:mt-0">
            <div
              onClick={() => {
                setMagnifyImg(data.thumbnailImg);
              }}
            >
              <div
                className={`product-details-pagination md:h-[120px] overflow-hidden object-scale-down ${
                  data.thumbnailImg === magnifyImg
                    ? "before:transparent"
                    : "before:bg-gray-500"
                }`}
              >
                <Image
                  className="h-full"
                  src={data.thumbnailImg}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
            {data.images?.map((item, index) => (
              <div
                onClick={() => {
                  setMagnifyImg(item);
                }}
                key={index}
              >
                <div
                  className={`product-details-pagination md:h-[120px] overflow-hidden object-scale-down ${
                    item === magnifyImg
                      ? "before:transparent"
                      : "before:bg-gray-500"
                  }`}
                >
                  <Image
                    className="h-full"
                    src={item}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-300 mt-10 p-5">
          <h3 className="text-[40px] leading-[60px] font-semibold text-accent">{data?.title}</h3>
          <ul className="mt-3">
            <li className="flex items-center gap-3">
              <span className="text-accent text-[25px]">Size:</span>
              <span className="font-semibold">{data?.size}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent text-[25px]">Fabric Quality:</span>
              <span className="font-semibold">{data?.fabricQuality}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent text-[25px]">Quantity:</span>
              <span className="font-semibold">{data?.quantity}</span>
            </li>
            <li className="mt-3">
              <p><b className="text-accent text-[25px]">Description:</b><span>{data?.description}</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
