import AboutHero from "@/DasComponent/Forms/AboutHero";
import React from "react";
async function getData() {
  try {
    const heroData = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/hero`, {
        cache: "no-store",
      })
    ).json();
    return heroData;
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const heroData = await getData();
  return (
    <div className="p-5 md:p-10">
      <AboutHero data={heroData?.data} />
    </div>
  );
};

export default page;
