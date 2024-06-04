import React from "react";
import CategoryForm from "@/DasComponent/Forms/CategoryForm";
async function getData() {
  try {
    const categories = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category`, { cache: 'no-store' })
    ).json();
    return categories
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const categories= await getData()
  return (
    <div className="md:p-10 p-4">
      <CategoryForm categories={categories}/>
    </div>
  );
};

export default page;
