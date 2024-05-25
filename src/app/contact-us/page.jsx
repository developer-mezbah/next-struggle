import ContactForm from "@/components/ContactUs/ContactForm";
import Map from "@/components/ContactUs/Map";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

const page = () => {
  return (
    <MasterLayout>
        <ReUseableBanner
          title="Contact Us"
          img="/images/bg_banner2.png"
        />
        <ContactForm/>
        <Map/>
    </MasterLayout>
  );
};

export default page;
