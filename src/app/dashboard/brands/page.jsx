import BrandsForm from "@/DasComponent/Forms/BrandsForm";
import React from "react";
async function getData() {
  try {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/brand`, {
        cache: "no-store",
      })
    ).json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const data = await getData();
  return (
    <div className="md:p-10">
      <BrandsForm data={data?.data} />
    </div>
  );
};

export default page;
