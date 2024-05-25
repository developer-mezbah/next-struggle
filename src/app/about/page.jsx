import AboutBlogs from "@/components/AboutUs/AboutBlogs";
import Testimonials from "@/components/AboutUs/Testimonials";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";

const About = () => {
  return (
      <MasterLayout>
        <div>
          <ReUseableBanner title="About Us" img="/images/bg_banner2.png"/>
          <AboutBlogs/>
          <Testimonials/>
        </div>
      </MasterLayout>
  );
};

export default About;
