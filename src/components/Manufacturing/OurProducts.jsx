import Image from "next/image";
import React from "react";

const OurProducts = () => {
  return (
    <div
      className="py-20 bg-[url('/images/product-capcity-bg.png')] bg-cover bg-center bg-no-repeat"
      // style={{
      //   background: "url('/images/product-capcity-bg.png')",
      //   backgroundSize: "100% 100%",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="wrapper">
        <div className="md:ml-[200px] relative">
          <div className="text-center mt-5">
            <h1 className="md:text-[50px] sm:text-[30px] text-[20px] leading-[62px] font-semibold bg-[#ffffff] inline p-5">
              OUR PRODUCTS
            </h1>
          </div>
          <h4 className="leading-[40px] font-semibold sm:text-[28px] mt-10">
            We are specialized in Woven Garments Like-
          </h4>
          <ul className="grid md:grid-cols-2 list-disc lg:text-[22px] text-[18px] lg:leading-[44px] leading-[30px] font-medium mt-5 mx-2 gap-5">
            <li>Men’s, Ladies & Children Denim Pant</li>
            <li>Long/Short Chino Pant</li>
            <li>Cargo long & short pant</li>
            <li>Bermuda shorts, Capri, Overall, Short all, Skirt etc </li>
            <li>Men’s, Ladies & Children denim/ non-denim shorts.</li>
          </ul>
        <div className="absolute top-0 lg:-left-[300px] md:-left-[200px] md:block hidden">
          <Image
            src="/images/products-bg-shape.png"
            width={200}
            height={200}
            alt="shape"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
