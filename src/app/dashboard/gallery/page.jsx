import AllImages from '@/DasComponent/Gallery/AllImages';
import React from 'react'
async function getData() {
    try {
      const data = await (
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/gallary`, {
          cache: "no-store",
        })
      ).json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
const page = async () => {
    const data = await getData()
  return (
    <div>
        <AllImages data={data?.data}/>
    </div>
  )
}

export default page