import ProductPage from "@/components/Product/ProductPage";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

async function getData() {
  try {
    const categories = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category`, {
        cache: "no-store",
      })
    ).json();
    return { categories };
  } catch (error) {
    console.log(error);
  }
}

export function generateMetadata({params}) {
  return {
    title: "Struggle | Product",
    description:
      "Quality Textiles And Apparel With Efficiency & Sustainability",
  };
}


const page = async ({params}) => {
  const data = await getData();
  return (
    <MasterLayout>
      <ReUseableBanner title="Product" img="/images/bg_banner2.png" />
      <ProductPage categoryId={params.id} categories={data?.categories?.data}/>
    </MasterLayout>
  );
};

export default page;
