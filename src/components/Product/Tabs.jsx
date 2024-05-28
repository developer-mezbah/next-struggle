import Link from "next/link";
import React from "react";

const Tabs = ({ Categories, categoryId,handleProducts }) => {
  return (
    <div>
      <div className="border-2 border-primary py-5 md:px-10 pr-5 rounded-3xl font-semibold md:text-[18px] md:leading-[22px] flex gap-5 justify-center items-center flex-wrap">
        {Categories?.map((item) => (
          <button
            onClick={() => handleProducts(item?._id)}
            key={item?._id}
            className={`${
              item._id == categoryId ? "bg-primary hover:text-black" : ""
            } md:py-5 py-3 md:px-10 px-5 rounded-[20px] hover:text-green-500`}
          >
            {item?.name}
          </button>
        ))}
        {/* <button className="bg-primary md:py-5 py-3 md:px-10 px-5 rounded-[20px]">Suits</button> */}
      </div>
    </div>
  );
};

export default Tabs;
