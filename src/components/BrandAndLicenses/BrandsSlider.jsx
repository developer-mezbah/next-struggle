"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "./BrandsStyle.css";

const BrandsSlider = () => {
  const data = [
    {
      _id: 1,
      img: "/images/brands/img1.png",
    },
    {
      _id: 2,
      img: "/images/brands/img2.png",
    },
    {
      _id: 3,
      img: "/images/brands/img3.png",
    },
    {
      _id: 4,
      img: "/images/brands/img4.png",
    },
    {
      _id: 5,
      img: "/images/brands/img5.png",
    },
    {
      _id: 6,
      img: "/images/brands/img3.png",
    },
  ];
  return (
    <div data-aos="zoom-in-down" className=" mt-10 bg-[#e9fff4]">
      <div className="wrapper">
        <div className="">
          <div className="rounded-2xl mt-5">
            <Swiper
              modules={[Autoplay, Pagination, Scrollbar]}
              spaceBetween={25}
              slidesPerView={5}
              // navigation={true}
              pagination={true}
              breakpoints={{
                992: {
                  slidesPerView: 5,
                },
                800: {
                  slidesPerView: 3,
                },
                200: {
                  slidesPerView: 2,
                },
              }}
              // scrollbar={{ draggable: true }}
              loop={true}
              autoplay={{ delay: 800, disableOnInteraction: false }}
              className="brands-slider2 py-5 px-2"
            >
              {data.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="card border-0 mr-5 mt-2">
                    <Image
                      width={500}
                      height={500}
                      src={item.img}
                      className="img-fluid me-5"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;
