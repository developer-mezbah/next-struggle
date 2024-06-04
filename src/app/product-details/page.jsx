export const revalidate = 0;
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

async function getData(id) {
  try {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product/${id}`, {
        cache: "no-store",
      })
    ).json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}


const page = async (props) => {
  let id = await props.searchParams["id"];
  const data = await getData(id)
  return (
    <MasterLayout>
      <ReUseableBanner title={data?.data?.categoryName} img="/images/bg_banner2.png" />
      <div className="md:mt-[150px] mt-[50px]">
        <ProductDetails data={data?.data}/>
      </div>
    </MasterLayout>
  );
};

export default page;
