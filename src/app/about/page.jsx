import AboutBlogs from "@/components/AboutUs/AboutBlogs";
import Testimonials from "@/components/AboutUs/Testimonials";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

async function getData() {
  try {
    const aboutBlogs = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us`
    );
    const heroData = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/hero`, {
        cache: "no-store",
      })
    ).json();
    const review = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/review`)
    ).json();
    return { aboutBlogs: await aboutBlogs.json(), heroData,review };
  } catch (error) {
    console.log(error);
  }
}

const About = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <div>
        <ReUseableBanner title="About Us" img="/images/bg_banner2.png" />
        <AboutBlogs aboutBlogs={data?.aboutBlogs?.data} heroData={data?.heroData?.data} />
        <Testimonials data={data?.review?.data}/>
      </div>
    </MasterLayout>
  );
};

export default About;
