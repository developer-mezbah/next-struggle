import ProductPage from "@/components/Product/ProductPage";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

const page = ({params}) => {
  return (
    <MasterLayout>
      <ReUseableBanner title="Product" img="/images/bg_banner2.png" />
      <ProductPage categoryId={params.id}/>
    </MasterLayout>
  );
};

export default page;
