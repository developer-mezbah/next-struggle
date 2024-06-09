import BrandDetails from "@/components/BrandAndLicenses/BrandDetails";
import BrandsSlider from "@/components/BrandAndLicenses/BrandsSlider";
import Licenses from "@/components/Home/Licenses";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

export const metadata = {
  title: "Struggle | Brands & Licenses",
  description: "We are proud to offer high-quality apparel utilizing the same sustainable, eco-friendly manufacturing processes used to produce apparel for our partners. Under our own labels, we can provide customers with affordable clothing that fits their budget and their lifestyle.",
};

async function getData() {
  try {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/license`)
    ).json();
    const brand = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/brand`, {
        cache: "no-store",
      })
    ).json();
    return {data, brand};
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const data = await getData()
  return (
    <MasterLayout>
      <div>
        <ReUseableBanner
          title="Brands & Licenses"
          img="/images/bg_banner2.png"
        />
        <div className="wrapper">
          <p className="text-accent md:text-[30px] font-normal md:leading-[45px] md:mt-20 mt-10">
            We are proud to offer high-quality apparel utilizing the same
            sustainable, eco-friendly manufacturing processes used to produce
            apparel for our partners. Under our own labels, we can provide
            customers with affordable clothing that fits their budget and their
            lifestyle.
          </p>
        </div>
        {/* Brands slider  */}
        <BrandsSlider data={data?.brand?.data}/>
        {/* Brand and Licenses Details  */}
        <BrandDetails data={data?.data?.data}/>
        <Licenses/>
      </div>
    </MasterLayout>
  );
};

export default page;
