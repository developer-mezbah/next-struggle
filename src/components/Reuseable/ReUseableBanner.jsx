import React from "react";

const ReUseableBanner = ({title, img}) => {
  return (
    <div
      className="w-full h-[450px] relative flex justify-center"
      style={{
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <h1
        data-aos="fade-up"
        className="absolute text-4xl text-accent bg-white rounded-t-2xl px-10 py-5 bottom-0"
      >
        {title}
      </h1>
    </div>
  );
};

export default ReUseableBanner;
