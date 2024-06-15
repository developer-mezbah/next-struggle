import BasicUnit from '@/DasComponent/Forms/BasicUnit'
import React from 'react'
async function getData() {
  try {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/basic-unit`, {
        cache: "no-store",
      })
    ).json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const data = await getData();
  return (
    <div className="md:p-10">
      <BasicUnit updateFormData={data?.data}/>
    </div>
  )
}

export default page