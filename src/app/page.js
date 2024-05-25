import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Blogs from "@/components/Home/Blogs";
import Brands from "@/components/Home/Brands";
import Licenses from "@/components/Home/Licenses";
import ProductsCategory from "@/components/Home/ProductsCategory";
import Youtube from "@/components/Home/Youtube";
import MasterLayout from "@/layout/MasterLayout";
import Image from "next/image";

export default function Home() {
  return (
    <MasterLayout>
      {/* Banner section  */}
      <Banner />
      <div className="brands-and-aboutus bg-accent">
        <div className="wrapper">
          {/* Brands  */}
          <Brands />
          {/* About US  */}
          <AboutUs />
        </div>
      </div>

      {/* Categories  */}
      <ProductsCategory />
      {/* Licenses  */}
      <Licenses/>
      {/* Blogs */}
      <Blogs/>
      {/* Youtube Section  */}
      <Youtube/>
    </MasterLayout>
  );
}
