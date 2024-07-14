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
          {/* lg:text-[22px] text-[18px] lg:leading-[44px] leading-[30px] font-medium mt-5 mx-2 gap-5 */}
          <ul className="grid md:grid-cols-2 list-disc gap-5">
            <li className="flex gap-5 items-center justify-between">
              <span>Men’s, Ladies & Children Denim Pant</span>
              <Image className="h-[80px] w-[100px] object-cover" src="/images/manufactur/m-our-products-1.png" width={100} height={100} alt="" />
            </li>
            <li className="flex gap-5 items-center justify-between">
              <span>Long/Short Chino Pant</span>
              <Image className="h-[80px] w-[100px] object-cover" src="/images/manufactur/m-our-products-2.png" width={100} height={100} alt="" />
            </li>
            <li className="flex gap-5 items-center justify-between">
              <span>Cargo long & short pant</span>
              <Image className="h-[80px] w-[100px] object-cover" src="/images/manufactur/m-our-products-3.png" width={100} height={100} alt="" />
            </li>
            <li className="flex gap-5 items-center justify-between">
              <span>Bermuda shorts, Capri, Overall, Short all, Skirt etc </span>
              <Image className="h-[80px] w-[100px] object-cover" src="/images/manufactur/m-our-products-4.png" width={100} height={100} alt="" />
            </li>
            <li className="flex gap-5 items-center justify-between">
              <span>Men’s, Ladies & Children denim/ non-denim shorts.</span>
              <Image className="h-[80px] w-[100px] object-cover" src="/images/manufactur/m-our-products-5.png" width={100} height={100} alt="" />
            </li>
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
