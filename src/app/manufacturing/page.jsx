import HolyIntimates from "@/components/Manufacturing/HolyIntimates";
import LingerieAndIntimates from "@/components/Manufacturing/LingerieAndIntimates";
import MajorBuyer from "@/components/Manufacturing/MajorBuyer";
import ManufacturItems from "@/components/Manufacturing/ManufacturItems";
import ManufacturStepsLarge from "@/components/Manufacturing/ManufacturStepsLarge";
import ManufacturStepsSmall from "@/components/Manufacturing/ManufacturStepsSmall";
import ManufacturingUnit from "@/components/Manufacturing/ManufacturingUnit";
import OurProducts from "@/components/Manufacturing/OurProducts";
import ProductionCapacity from "@/components/Manufacturing/ProductionCapacity";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";

export const metadata = {
  title: "Struggle | Manufacturing",
  description: "Quality Textiles And Apparel With Efficiency & Sustainability",
};

async function getData() {
  try {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/manufacturing`, {
        cache: "no-store",
      })
    ).json();
    const lingerie = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/lingerie`, {
        cache: "no-store",
      })
    ).json();
    const basicUnit = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/basic-unit`, {
        cache: "no-store",
      })
    ).json();
    return { data, lingerie, basicUnit };
  } catch (error) {
    console.log(error);
  }
}

const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <div className="">
        <ReUseableBanner
          title="Global Manufacturing"
          img="/images/bg_banner2.png"
        />
        <ManufacturItems data={data?.data?.data} />
        <ManufacturStepsLarge/>
        <ManufacturStepsSmall />
        <ProductionCapacity/>
        <OurProducts/>
        <MajorBuyer/>
        <HolyIntimates/>
        <LingerieAndIntimates data={data?.lingerie?.data} />
        <ManufacturingUnit data={data?.basicUnit?.data} />
      </div>
    </MasterLayout>
  );
};

export default page;
