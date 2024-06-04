import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Blogs from "@/components/Home/Blogs";
import Brands from "@/components/Home/Brands";
import Licenses from "@/components/Home/Licenses";
import ProductsCategory from "@/components/Home/ProductsCategory";
import Youtube from "@/components/Home/Youtube";
import MasterLayout from "@/layout/MasterLayout";
import Image from "next/image";

async function getData() {
  try {
    const categories = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category`, {
        cache: "no-store",
      })
    ).json();
    const newsData = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/news`)
    ).json();
    return { categories,newsData };
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data = await getData();
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
      <ProductsCategory categories={data?.categories?.data} />
      {/* Licenses  */}
      <Licenses />
      {/* Blogs */}
      <Blogs data={data?.newsData?.data.slice(0, 6)} />
      {/* Youtube Section  */}
      <Youtube />
    </MasterLayout>
  );
}
