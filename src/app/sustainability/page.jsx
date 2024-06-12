import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import SustainBlogs from "@/components/Sustainability/SustainBlogs";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";
export const metadata = {
  title: "Struggle | Sustainability",
  description: "Quality Textiles And Apparel With Efficiency & Sustainability",
};

async function getData() {
  try {
    const heroData = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/sustainability/hero`, {
        cache: "no-store",
      })
    ).json();
    const blogs = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/sustainability`)
    ).json();
    return {heroData,blogs };
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const data = await getData()
  return (
    <MasterLayout>
      <div>
        <ReUseableBanner title="Sustainability" img="/images/bg_banner2.png" />
        <SustainBlogs heroData={data?.heroData?.data} blogs={data?.blogs?.data} />
      </div>
    </MasterLayout>
  );
};

export default page;
