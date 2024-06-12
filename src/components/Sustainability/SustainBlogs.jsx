import Image from "next/image";
import React from "react";

const SustainBlogs = ({ blogs, heroData }) => {
  return (
    <div>
      <div className="md:mt-[100px] mt-[50px]">
        <div
          className="wrapper"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <h1 className="font-semibold md:text-[55px] text-[40px] text-accent md:leading-[80px]">
            {heroData?.title}
          </h1>
          <p className="text-accent md:text-[30px] font-normal md:leading-[45px] mt-5">
            {heroData?.description}
          </p>
        </div>
        <div className="md:py-20 py-10 md:mt-10">
          <div className="wrapper">
            <Image
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mx-auto w-full md:h-[750px] object-cover"
              src={heroData?.img}
              width={800}
              height={800}
              alt={heroData?.description}
            />
          </div>
        </div>
      </div>

      <div>
        {blogs?.map((item, index) => {
          return (
            <div
              key={item?._id}
              className={`md:pt-20}`}
              style={{
                background:
                  index === 0
                    ? "black"
                    : index % 2 == 0
                    ? "rgb(18, 41, 18)"
                    : "#fff",
                color:
                  index === 0 ? "white" : index % 2 == 0 ? "white" : "black",
              }}
            >
              <div className="wrapper">
                <div className="md:flex justify-between items-center gap-10">
                  <div
                    data-aos={`fade-${index & (2 === 0) ? "right" : "left"}`}
                    className="w-full space-y-5  md:py-20 py-10 md:space-y-10"
                  >
                    <h2 className="md:leading-[60px] leading-[40px] md:text-[50px] text-[30px] font-medium">
                      {item?.title}
                    </h2>
                    <hr
                      className={`border-0 w-[170px] h-[10px] ${
                        index % 2 == 0 ? "bg-white" : "bg-black"
                      }`}
                    />
                    <p className="">{item?.subTitle}</p>
                  </div>
                  <div
                    data-aos={`fade-${index & (2 === 0) ? "left" : "right"}`}
                    className="lg:w-4/6 w-full"
                  >
                    <Image
                      className="w-full"
                      src={item?.img}
                      width={400}
                      height={400}
                      alt={item?.subTitle}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SustainBlogs;
