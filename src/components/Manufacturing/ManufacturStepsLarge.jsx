import Image from "next/image";
import React from "react";
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";

const ManufacturStepsLarge = () => {
  return (
    <div className="md:block hidden">
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
                  className="flex justify-between lg:w-[80%] md:w-[90%] w-[98%] sm:w-[90%] ml-auto"
                >
                  <div className="-mb-3 flex flex-col space-y-3">
                    <div className="flex gap-3 flex-nowrap lg:pr-10 pr-2">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step1.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px]">
                      Merchandising
                    </h1>
                    <HiArrowLongUp className="text-4xl" />
                  </div>
                  <div className="-mb-3 flex flex-col space-y-3">
                    <div className="flex gap-3 flex-nowrap lg:pr-10 pr-2">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step2.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px]">
                      Sourcing
                    </h1>
                    <HiArrowLongUp className="text-4xl" />
                  </div>
                  <div className="-mb-3 flex flex-col space-y-3">
                    <div className="flex gap-3 flex-nowrap lg:pr-10 pr-2">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step3.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px]">
                      Sourcing
                    </h1>
                    <HiArrowLongUp className="text-4xl" />
                  </div>
                  <div className="-mb-3 flex flex-col space-y-3">
                    <div className="flex gap-3 flex-nowrap lg:pr-10 pr-2">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step4.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px]">
                      Sourcing
                    </h1>
                    <HiArrowLongUp className="text-4xl" />
                  </div>
                </div>
                {/* Horizontal And bubble */}
                <div className="flex justify-center items-center w-full">
                  <div className="bg-accent h-[5px] w-full"></div>
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                </div>
                <div
                  data-aos="fade-down"
                  className="flex justify-between ml-auto lg:w-[80%] md:w-[90%] w-[98%] sm:w-[90%]"
                >
                  <div className="-mt-3 flex flex-col items-end space-y-3 pr-5">
                    <HiArrowLongDown className="text-4xl" />
                    <h1 className="font-medium md:text-[30px]">
                      Design
                    </h1>
                    <div className="flex gap-3 flex-nowrap pl-2 lg:pl-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step5.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-end space-y-3">
                    <HiArrowLongDown className="text-4xl" />
                    <h1 className="font-medium md:text-[30px]">
                      Knitting & dyeing
                    </h1>
                    <div className="flex gap-3 flex-nowrap pl-2 lg:pl-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step6.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-end space-y-3">
                    <HiArrowLongDown className="text-4xl" />
                    <h1 className="font-medium md:text-[30px]">
                      Knitting & dyeing
                    </h1>
                    <div className="flex gap-3 flex-nowrap pl-2 lg:pl-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step7.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-end space-y-3">
                    <HiArrowLongDown className="text-4xl mr-10" />
                    <h1 className="font-medium md:text-[30px]">
                      Knitting & dyeing
                    </h1>
                    <div className="flex gap-3 flex-nowrap pl-2 lg:pl-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step8.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second manufacture Seteps  */}
        <div className="w-full">
          <div className="lg:w-5/6 md:w-[95%] w-[99%]">
            <div className="mt-[100px]">
              <div className="w-full">
                <div
                  data-aos="fade-up"
                  className="flex justify-between lg:w-[80%] md:w-[90%] w-[98%] sm:w-[90%] ml-auto"
                >
                  <div className="-mb-3 flex flex-col space-y-3">
                    <div className="flex gap-3 flex-nowrap lg:pr-10 pr-2">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step9.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px]">
                      Merchandising
                    </h1>
                    <HiArrowLongUp className="text-4xl" />
                  </div>
                  <div className="-mb-3 flex flex-col space-y-3">
                    <div className="flex gap-3 flex-nowrap lg:pr-10 pr-2">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step10.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px]">
                      Sourcing
                    </h1>
                    <HiArrowLongUp className="text-4xl" />
                  </div>
                  <div className="-mb-3 flex flex-col space-y-3">
                    <div className="flex gap-3 flex-nowrap lg:pr-10 pr-2">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step11.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px]">
                      Sourcing
                    </h1>
                    <HiArrowLongUp className="text-4xl" />
                  </div>
                  <div className="-mb-3 flex flex-col space-y-3">
                    <div className="flex gap-3 flex-nowrap lg:pr-10 pr-2">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step12.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px]">
                      Sourcing
                    </h1>
                    <HiArrowLongUp className="text-4xl" />
                  </div>
                </div>
                {/* Horizontal And bubble */}
                <div className="flex justify-center items-center w-full">
                  <div className="bg-accent h-[5px] w-full"></div>
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                </div>
                <div
                  data-aos="fade-down"
                  className="flex justify-between ml-auto lg:w-[80%] md:w-[90%] w-[98%] sm:w-[90%]"
                >
                  <div className="-mt-3 flex flex-col items-end space-y-3 pr-5">
                    <HiArrowLongDown className="text-4xl" />
                    <h1 className="font-medium md:text-[30px]">
                      Design
                    </h1>
                    <div className="flex gap-3 flex-nowrap pl-2 lg:pl-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step13.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-end space-y-3">
                    <HiArrowLongDown className="text-4xl" />
                    <h1 className="font-medium md:text-[30px]">
                      Knitting & dyeing
                    </h1>
                    <div className="flex gap-3 flex-nowrap pl-2 lg:pl-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step14.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-end space-y-3">
                    <HiArrowLongDown className="text-4xl" />
                    <h1 className="font-medium md:text-[30px]">
                      Knitting & dyeing
                    </h1>
                    <div className="flex gap-3 flex-nowrap pl-2 lg:pl-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step15.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-end space-y-3">
                    <HiArrowLongDown className="text-4xl mr-10" />
                    <h1 className="font-medium md:text-[30px]">
                      Knitting & dyeing
                    </h1>
                    <div className="flex gap-3 flex-nowrap pl-2 lg:pl-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step16.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
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

export default ManufacturStepsLarge;
