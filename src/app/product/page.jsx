import ProductPage from "@/components/Product/ProductPage";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

const page = () => {
  return (
    <MasterLayout>
      <ReUseableBanner title="Product" img="/images/bg_banner2.png" />
      <ProductPage/>
    </MasterLayout>
  );
};

export default page;
