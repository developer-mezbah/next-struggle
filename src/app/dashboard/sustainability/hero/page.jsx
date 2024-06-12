import SustainabilityHero from "@/DasComponent/Forms/SustainabilityHero";
import React from "react";
async function getData() {
  try {
    const heroData = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/sustainability/hero`, {
        cache: "no-store",
      })
    ).json();
    return heroData;
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const data = await getData();
  return (
    <div className="md:p-10 p-5">
      <SustainabilityHero data={data?.data} />
    </div>
  );
};

export default page;
