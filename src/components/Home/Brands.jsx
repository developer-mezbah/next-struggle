"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = ({ data }) => {
  return (
    <div className="py-10" data-aos="fade-up" data-aos-duration="2000">
      <div className="flex gap-5 justify-center items-center whitespace-nowrap">
        <span className="h-1 bg-primary rounded-md sm:w-[50px] w-[30px]"></span>
        <span className="uppercase text-textLight">OUR ACHIEVEMENTS</span>
        <span className="h-1 bg-primary rounded-md sm:w-[50px] w-[30px]"></span>
      </div>
      <div className="bg-[#222222] rounded-2xl mt-5 relative pl-5 pr-5">
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
          className="brands-slider"
        >
          {data?.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="card border-0 mr-5 mt-2 rounded-2xl md:h-[130px] overflow-hidden">
                <Image
                  width={500}
                  height={200}
                  src={item.img}
                  className="md:me-5 md:h-full h-[80px] object-scale-down"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
