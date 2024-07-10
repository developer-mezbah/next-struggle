import Image from "next/image";
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";

const ManufacturStepsSmall = () => {
  const data = [
    {
      name: "SAMPLE SECTION",
    },
    {
      name: "interlining fixing  procesS",
    },
    {
      name: "fabric inspection",
    },
    {
      name: "PRODUCTION FLOOR",
    },
    {
      name: "merchandising",
    },
    {
      name: "cutting process",
    },
    {
      name: "fabric storage",
    },
    {
      name: "PRODUCTION QUALITY CHECK",
    },
    {
      name: "BARTACK SECTION",
    },
    {
      name: "NEEDLE DETECTION",
    },
    {
      name: "PACKING PROCESS",
    },
    {
      name: "SHOWROOM",
    },
    {
      name: "APW MACHINE",
    },
    {
      name: "IRONING SECTION",
    },
    {
      name: "FINISHED GOODS & STORAGE",
    },
    {
      name: "CAD ROOM",
    },
  ];
  return (
    <div className="block md:hidden">
      <div className="my-10">
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
            <div className="mt-[30px]">
              <div className="w-full">
                <div
                  data-aos="fade-up"
                  className="flex justify-between lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%] mx-auto"
                >
                  <div className="-mb-3 flex flex-col items-center space-y-3">
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step1.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    SAMPLE SECTION
                    </h1>
                    <HiArrowLongUp className="text-4xl -ml-[22%]" />
                  </div>
                  <div className="-mb-3 flex flex-col items-center space-y-3">
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step2.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    interlining
                    fixing  procesS
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
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    fabric
                    inspection
                    </h1>
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step3.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-center space-y-3">
                    <HiArrowLongDown className="text-4xl -ml-[22%]" />
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    PRODUCTION
                    FLOOR
                    </h1>
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step4.png"
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
        <div className="w-full pt-5">
          <div className="lg:w-5/6 md:w-[95%] w-[99%] ml-auto">
            <div className="mt-[30px]">
              <div className="w-full">
                <div
                  data-aos="fade-up"
                  className="flex justify-between lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%] mr-auto"
                >
                  <div className="-mb-3 flex flex-col justify-end items-center space-y-3">
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step5.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    merchandising
                    </h1>
                    <HiArrowLongUp className="text-4xl -ml-[22%]" />
                  </div>
                  <div className="-mb-3 flex flex-col items-center space-y-3">
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step6.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    cutting
                    process
                    </h1>
                    <HiArrowLongUp className="text-4xl -ml-[22%]" />
                  </div>
                </div>
                {/* Horizontal And bubble */}
                <div className="flex justify-center items-center w-full">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                  <div className="bg-accent h-[5px] w-full"></div>
                </div>
                <div
                  data-aos="fade-down"
                  className="flex justify-between mx-auto lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%]"
                >
                  <div className="-mt-3 flex flex-col items-center space-y-3">
                    <HiArrowLongDown className="text-4xl -ml-[22%]" />
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    fabric
                    storage
                    </h1>
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step7.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-center space-y-3">
                    <HiArrowLongDown className="text-4xl -ml-[22%]" />
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    PRODUCTION
                    QUALITY CHECK
                    </h1>
                    <div className="flex gap-3 flex-nowrap pr-10">
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
        {/* Third manufacture Seteps  */}
        <div className="w-full pt-5">
          <div className="lg:w-5/6 md:w-[95%] w-[99%] ml-auto">
            <div className="mt-[30px]">
              <div className="w-full">
                <div
                  data-aos="fade-up"
                  className="flex justify-between lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%] mr-auto"
                >
                  <div className="-mb-3 flex flex-col justify-end items-center space-y-3">
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step9.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    BARTACK SECTION
                    </h1>
                    <HiArrowLongUp className="text-4xl -ml-[22%]" />
                  </div>
                  <div className="-mb-3 flex flex-col items-center space-y-3">
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step10.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    NEEDLE 
                    DETECTION
                    </h1>
                    <HiArrowLongUp className="text-4xl -ml-[22%]" />
                  </div>
                </div>
                {/* Horizontal And bubble */}
                <div className="flex justify-center items-center w-full">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                  <div className="bg-accent h-[5px] w-full"></div>
                </div>
                <div
                  data-aos="fade-down"
                  className="flex justify-between mx-auto lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%]"
                >
                  <div className="-mt-3 flex flex-col items-center space-y-3">
                    <HiArrowLongDown className="text-4xl -ml-[22%]" />
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    PACKING
                    PROCESS
                    </h1>
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step11.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-center space-y-3">
                    <HiArrowLongDown className="text-4xl -ml-[22%]" />
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    SHOWROOM
                    </h1>
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step12.png"
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
        {/* Four manufacture Seteps  */}
        <div className="w-full pt-5">
          <div className="lg:w-5/6 md:w-[95%] w-[99%] ml-auto">
            <div className="mt-[30px]">
              <div className="w-full">
                <div
                  data-aos="fade-up"
                  className="flex justify-between lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%] mr-auto"
                >
                  <div className="-mb-3 flex flex-col justify-end items-center space-y-3">
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step13.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    APW MACHINE
                    </h1>
                    <HiArrowLongUp className="text-4xl -ml-[22%]" />
                  </div>
                  <div className="-mb-3 flex flex-col items-center space-y-3">
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step14.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    IRONING
                    SECTION
                    </h1>
                    <HiArrowLongUp className="text-4xl -ml-[22%]" />
                  </div>
                </div>
                {/* Horizontal And bubble */}
                <div className="flex justify-center items-center w-full">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                  <div className="bg-accent h-[5px] w-full"></div>
                </div>
                <div
                  data-aos="fade-down"
                  className="flex justify-between mx-auto lg:w-[60%] md:w-[80%] w-[98%] sm:w-[90%]"
                >
                  <div className="-mt-3 flex flex-col items-center space-y-3">
                    <HiArrowLongDown className="text-4xl -ml-[22%]" />
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    FINISHED GOODS
                    & STORAGE
                    </h1>
                    <div className="flex gap-3 flex-nowrap pr-10">
                      <Image
                        className="md:h-[130px] md:w-[200px] w-full object-cover border-[2px] border-accent"
                        src="/images/manufactur/step15.png"
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="-mt-3 flex flex-col items-center space-y-3">
                    <HiArrowLongDown className="text-4xl -ml-[22%]" />
                    <h1 className="font-medium md:text-[30px] sm:-ml-[22%]">
                    CAD ROOM
                    </h1>
                    <div className="flex gap-3 flex-nowrap pr-10">
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

export default ManufacturStepsSmall;
