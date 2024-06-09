import ManufacturItems from "@/components/Manufacturing/ManufacturItems";
import ManufacturSteps from "@/components/Manufacturing/ManufacturSteps";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

export const metadata = {
  title: "Struggle | Manufacturing",
  description: "Quality Textiles And Apparel With Efficiency & Sustainability",
};

async function getData() {
  try {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/manufacturing`, {
        cache: "no-store",
      })
    ).json();
    return data;
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
          title="Global Manufacturing"
          img="/images/bg_banner2.png"
        />
        <ManufacturItems data={data?.data}/>
        <ManufacturSteps/>
      </div>
    </MasterLayout>
  );
};

export default page;
