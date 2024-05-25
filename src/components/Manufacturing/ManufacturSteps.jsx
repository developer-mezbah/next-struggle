import Image from "next/image";
import React from "react";
import { HiArrowLongUp } from "react-icons/hi2";
import { HiArrowLongDown } from "react-icons/hi2";

const ManufacturSteps = () => {
  return (
    <div className="my-20">
      <div
        className="title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        Steps of expert <br />
        manufacturing
      </div>
      {/* First manufacture Seteps  */}
      <div className="w-full">
        <div className="lg:w-5/6 md:w-[95%] w-[99%]">
          <div className="mt-[100px]">
            <div className="w-full">
              <div
                data-aos="fade-up"
                className="flex justify-between lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%] mx-auto"
              >
                <div className="-mb-3 flex flex-col items-center space-y-3">
                  <div className="flex gap-3 flex-nowrap pr-10">
                    <Image
                      className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                      src="/images/manufactur/img2.png"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <h2
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      className="md:text-[30px] text-[18px]"
                    >
                      01
                    </h2>
                  </div>
                  <h1 className="font-medium md:text-[30px] -ml-[22%]">
                    Merchandising
                  </h1>
                  <HiArrowLongUp className="text-4xl -ml-[22%]" />
                </div>
                <div className="-mb-3 flex flex-col items-center space-y-3">
                  <div className="flex gap-3 flex-nowrap pr-10">
                    <Image
                      className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                      src="/images/manufactur/img3.png"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <h2
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      className="md:text-[30px] text-[18px]"
                    >
                      02
                    </h2>
                  </div>
                  <h1 className="font-medium md:text-[30px] -ml-[22%]">
                    Sourcing
                  </h1>
                  <HiArrowLongUp className="text-4xl -ml-[22%]" />
                </div>
              </div>
              {/* Horizontal And bubble */}
              <div className="flex justify-center items-center w-full">
                <div className="bg-accent h-[5px] w-full"></div>
                <div className="w-5 h-5 bg-primary rounded-full"></div>
              </div>
              <div
                data-aos="fade-down"
                className="flex justify-between ml-auto lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%]"
              >
                <div className="-mt-3 flex flex-col items-center space-y-3">
                  <HiArrowLongDown className="text-4xl -ml-[22%]" />
                  <h1 className="font-medium md:text-[30px] -ml-[22%]">
                    Design
                  </h1>
                  <div className="flex gap-3 flex-nowrap pr-10">
                    <Image
                      className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                      src="/images/manufactur/img4.png"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <h2
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      className="md:text-[30px] text-[18px]"
                    >
                      03
                    </h2>
                  </div>
                </div>
                <div className="-mt-3 flex flex-col items-center space-y-3">
                  <HiArrowLongDown className="text-4xl -ml-[22%]" />
                  <h1 className="font-medium md:text-[30px] -ml-[22%]">
                    Knitting & dyeing
                  </h1>
                  <div className="flex gap-3 flex-nowrap pr-10">
                    <Image
                      className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                      src="/images/manufactur/img5.png"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <h2
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      className="md:text-[30px] text-[18px]"
                    >
                      04
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second manufacture Seteps  */}
      <div className="w-full pt-5">
        <div className="lg:w-5/6 md:w-[95%] w-[99%] ml-auto">
          <div className="mt-[100px]">
            <div className="w-full">
              <div data-aos="fade-up"  className="flex justify-between lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%] mr-auto">
                <div className="-mb-3 flex flex-col justify-end items-center space-y-3">
                  <div className="flex gap-3 flex-nowrap pr-10">
                    <Image
                      className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                      src="/images/manufactur/img6.png"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <h2
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      className="md:text-[30px] text-[18px]"
                    >
                      05
                    </h2>
                  </div>
                  <h1 className="font-medium md:text-[30px] -ml-[22%]">
                    Cutting & sewing
                  </h1>
                  <HiArrowLongUp className="text-4xl -ml-[22%]" />
                </div>
                <div className="-mb-3 flex flex-col items-center space-y-3">
                  <div className="flex gap-3 flex-nowrap pr-10">
                    <Image
                      className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                      src="/images/manufactur/img7.png"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <h2
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      className="md:text-[30px] text-[18px]"
                    >
                      06
                    </h2>
                  </div>
                  <h1 className="font-medium md:text-[30px] -ml-[22%]">
                    Distribution
                  </h1>
                  <HiArrowLongUp className="text-4xl -ml-[22%]" />
                </div>
              </div>
              {/* Horizontal And bubble */}
              <div  className="flex justify-center items-center w-full">
                <div className="w-5 h-5 bg-primary rounded-full"></div>
                <div className="bg-accent h-[5px] w-full"></div>
              </div>
              <div data-aos="fade-down"  className="flex justify-between mx-auto lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%]">
                <div className="-mt-3 flex flex-col items-center space-y-3">
                  <HiArrowLongDown className="text-4xl -ml-[22%]" />
                  <h1 className="font-medium md:text-[30px] -ml-[22%]">
                    Screen printing & <br /> sublimation
                  </h1>
                  <div className="flex gap-3 flex-nowrap pr-10">
                    <Image
                      className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                      src="/images/manufactur/img8.png"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <h2
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      className="md:text-[30px] text-[18px]"
                    >
                      07
                    </h2>
                  </div>
                </div>
                <div className="-mt-3 flex flex-col items-center space-y-3">
                  <HiArrowLongDown className="text-4xl -ml-[22%]" />
                  <h1 className="font-medium md:text-[30px] -ml-[22%]">End</h1>
                  <div className="flex gap-3 flex-nowrap pr-10">
                    <Image
                      className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                      src="/images/manufactur/img9.png"
                      width={200}
                      height={200}
                      alt=""
                    />
                    <h2
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      className="md:text-[30px] text-[18px]"
                    >
                      08
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturSteps;
