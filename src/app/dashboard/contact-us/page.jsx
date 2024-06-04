import ContactUsForm from "@/DasComponent/Forms/ContactUsForm";
import React from "react";
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
    <div className="p-5 md:p-10">
      <ContactUsForm data={contactUs?.data} />
    </div>
  );
};

export default page;
