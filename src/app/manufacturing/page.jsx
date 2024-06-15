import LingerieAndIntimates from "@/components/Manufacturing/LingerieAndIntimates";
import ManufacturItems from "@/components/Manufacturing/ManufacturItems";
import ManufacturSteps from "@/components/Manufacturing/ManufacturSteps";
import ManufacturingUnit from "@/components/Manufacturing/ManufacturingUnit";
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
    const lingerie = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/lingerie`, {
        cache: "no-store",
      })
    ).json();
    const basicUnit = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/basic-unit`, {
        cache: "no-store",
      })
    ).json();
    return { data, lingerie, basicUnit };
  } catch (error) {
    console.log(error);
  }
}

const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <div>
        <ReUseableBanner
          title="Global Manufacturing"
          img="/images/bg_banner2.png"
        />
        <ManufacturItems data={data?.data?.data} />
        <ManufacturSteps />
        <LingerieAndIntimates data={data?.lingerie?.data} />
        <ManufacturingUnit data={data?.basicUnit?.data} />
      </div>
    </MasterLayout>
  );
};

export default page;
