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

const HolyIntimates = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const swiperRef = React.useRef(null);
  return (
    <>
      <div className="bg-[#111204] py-10 relative z-10">
        <div className="wrapper">
          <div className="text-center mb-10">
            <Image
              className="inline"
              src="/images/holy-intimates.jpeg"
              width={400}
              height={200}
              alt=""
            />
          </div>
          <h4 className="leading-[48px] font-medium text-[32px] mt-10 text-textLight">
            Holy Intimates is a Bangladeshi Lingerie manufacturer. We have
            started the journey in 2023. The organization creates the most
            trendy and fashionable readymade garments and possesses the most
            complete and updated manufacturing system and machineries. Basically
            we are making Ladies Bra, Panty, Nighty, Tank top and Men’s Boxer &
            Vest. We ensure the best quality in needle point area. We export the
            quality lingerie to Africa, Canada, UAE etc. Factory capacity is
            about 1 lakh pcs in monthly basis.
          </h4>

          <div className="mt-20 scale-125">
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
                    src={"/images/sliders/img1.png"}
                    className="img-fluid me-5 h-full object-scale-down"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image
                    width={1200}
                    height={1200}
                    src={"/images/sliders/img2.png"}
                    className="me-5 h-full"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image
                    width={1200}
                    height={1200}
                    src={"/images/sliders/img2.png"}
                    className="me-5 h-full"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image
                    width={1200}
                    height={1200}
                    src={"/images/sliders/img2.png"}
                    className="me-5 h-full"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image
                    width={1200}
                    height={1200}
                    src={"/images/sliders/img2.png"}
                    className="me-5 h-full"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Image
                    width={1200}
                    height={1200}
                    src={"/images/sliders/img2.png"}
                    className="me-5 h-full"
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
        </div>
      </div>
    </>
  );
};

export default HolyIntimates;
