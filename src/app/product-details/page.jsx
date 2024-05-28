import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

const page = () => {
  return (
    <MasterLayout>
      <ReUseableBanner title="Suite" img="/images/bg_banner2.png" />
      <div className="md:mt-[150px] mt-[50px]">
        <ProductDetails />
      </div>
    </MasterLayout>
  );
};

export default page;
