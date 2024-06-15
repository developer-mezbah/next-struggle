import ManufacturingForm from "@/DasComponent/Forms/ManufacturingForm";
import React from "react";
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
  const data = await getData();
  return (
    <div className="md:p-10">
      <ManufacturingForm updateFormData={data?.data} />
    </div>
  );
};

export default page;
