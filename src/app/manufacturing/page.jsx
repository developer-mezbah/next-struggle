import ManufacturItems from "@/components/Manufacturing/ManufacturItems";
import ManufacturSteps from "@/components/Manufacturing/ManufacturSteps";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

const page = () => {
  return (
    <MasterLayout>
      <div>
        <ReUseableBanner
          title="Global Manufacturing"
          img="/images/bg_banner2.png"
        />
        <ManufacturItems/>
        <ManufacturSteps/>
      </div>
    </MasterLayout>
  );
};

export default page;
