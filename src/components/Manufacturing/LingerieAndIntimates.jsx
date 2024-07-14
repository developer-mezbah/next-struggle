"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Scrollbar,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css/effect-coverflow";

const LingerieAndIntimates = ({ data }) => {
  return (
    <div className="bg-[#111204] py-20 space-y-5">
      <div className="wrapper">
        <h1 className="text-center md:text-[50px] text-[30px] md:leading-[60px] leading-[40px] font-semibold overflow-hidden">
          <span className="text-white bg-[#132911] px-5 py-5 inline-block">
            Manufacturing Lingerie & Intimates
          </span>
        </h1>
        <p
          data-aos="fade-right"
          className="text-[20px] leading-[30px] text-white text-center mt-10"
        >
          Manufacturing undergarments is a specialized segment of the apparel
          industry that involves a blend of creativity, engineering, and
          precision. This sector focuses on producing a variety of intimate wear
          items such as bras, panties, shapewear, camisoles, and lingerie. The
          process includes several critical stages, each requiring specific
          expertise and technology to ensure comfort, fit, and aesthetics.
        </p>
      </div>
      <div className="my-20 md:pt-20 pt-10 relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            el: ".swiper-custom-pagination",
          }}
          loop={true}
          autoplay={{ delay: 800, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination]}
        >
          <SwiperSlide>
            <div className="w-full">
              <Image
                width={1200}
                height={1200}
                src={"/images/manufactur/img11.png"}
                className="me-5 h-[250px] md:h-[500px] object-cover"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                width={1200}
                height={1200}
                src={"/images/manufactur/lingeria2.png"}
                className="me-5 h-[250px] md:h-[500px] object-cover"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                width={1200}
                height={1200}
                src={"/images/manufactur/lingeria3.png"}
                className="me-5 h-[250px] md:h-[500px] object-cover"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                width={1200}
                height={1200}
                src={"/images/manufactur/lingeria4.png"}
                className="me-5 h-[250px] md:h-[500px] object-cover"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                width={1200}
                height={1200}
                src={"/images/manufactur/lingeria5.png"}
                className="me-5 h-[250px] md:h-[500px] object-cover"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-[200px] w-full h-[50px]">
          <Image
            className="mx-auto"
            src="/images/banner-shadow.png"
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div
          className="swiper-custom-pagination mt-10 gap-5"
          style={{ textAlign: "center" }}
        />
      </div>

      <div className="mt-20 pt-10">
        <div data-aos="fade-right" className="wrapper">
          <h2 className="md:text-[50px] text-[30px] md:leading-[60px] leading-[40px] text-white mt-5 font-medium my-5">
            Innovation in the Industry
          </h2>
          <p className="text-[20px] leading-[30px] text-white mt-5">
            Recent advancements in the manufacturing of women&apos;s undergarments
            include the use of smart fabrics, such as those that adapt to body
            temperature, and eco-friendly materials like organic cotton and
            recycled fibers. Additionally, 3D printing technology is beginning
            to influence the design and prototyping phases, offering new
            possibilities for customization and fit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LingerieAndIntimates;
