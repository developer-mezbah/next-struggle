import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import SustainBlogs from "@/components/Sustainability/SustainBlogs";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";
export const metadata = {
  title: "Struggle | Sustainability",
  description: "Quality Textiles And Apparel With Efficiency & Sustainability",
};
const page = () => {
  return (
    <MasterLayout>
      <div>
        <ReUseableBanner title="Sustainability" img="/images/bg_banner2.png" />
        <SustainBlogs />
      </div>
    </MasterLayout>
  );
};

export default page;
