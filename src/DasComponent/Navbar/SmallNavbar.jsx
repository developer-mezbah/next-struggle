import Image from "next/image";
import React from "react";
import Horizontal from "../Others/Horizontal";
import { DasNavData } from "@/utils/DasNavData";

const SmallNavbar = () => {
  return (
    <div className="md:w-[80px] w-[50px] fixed">
      <div className="smaill-logo">
        <Image
          width={100}
          height={100}
          alt="Logo"
          src={"/images/icon-logo.png"}
          className="w-10 h-10 mx-auto my-4"
        />
      </div>
      <Horizontal />
      <div className="mt-5 space-y-3">
        {DasNavData?.map((data, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-5">
              <div className="md:text-2xl text-textColor mt-5">{data.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmallNavbar;
