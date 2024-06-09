import FooterForm from "@/DasComponent/Forms/FooterForm";
import React from "react";
async function getData() {
  try {
    const contactUs = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/footer`, {
        cache: "no-store",
      })
    ).json();
    return contactUs;
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const data = await getData();
  return (
    <div>
      <FooterForm data={data?.data} />
    </div>
  );
};

export default page;
