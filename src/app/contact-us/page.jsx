import ContactForm from "@/components/ContactUs/ContactForm";
import Map from "@/components/ContactUs/Map";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

export const metadata = {
  title: "Struggle | Contact US",
  description: "Quality Textiles And Apparel With Efficiency & Sustainability",
};



async function getData() {
  try {
    const contactUs = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact-us`, {
        cache: "no-store",
      })
    ).json();
    return contactUs;
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const contactUs = await getData();
  return (
    <MasterLayout>
      <ReUseableBanner title="Contact Us" img="/images/bg_banner2.png" />
      <ContactForm data={contactUs?.data}/>
      <Map />
    </MasterLayout>
  );
};

export default page;
