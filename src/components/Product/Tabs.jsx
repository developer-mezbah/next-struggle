import React from "react";

const Tabs = () => {
  return (
    <div  data-aos="zoom-in-down">
      <div className="border-2 border-primary py-5 md:px-10 pr-5 rounded-3xl font-semibold md:text-[18px] md:leading-[22px] flex gap-5 justify-center items-center flex-wrap">
        <button className="md:py-5 py-3 md:px-10 px-5 rounded-[20px]">Denim</button>
        <button className="bg-primary md:py-5 py-3 md:px-10 px-5 rounded-[20px]">Suits</button>
        <button className="md:py-5 py-3 md:px-10 px-5 rounded-[20px]">Sweaters</button>
        <button className="md:py-5 py-3 md:px-10 px-5 rounded-[20px]">Intimates</button>
        <button className="md:py-5 py-3 md:px-10 px-5 rounded-[20px]">Outerwear</button>
        <button className="md:py-5 py-3 md:px-10 px-5 rounded-[20px]">Activewear</button>
      </div>
    </div>
  );
};

export default Tabs;
