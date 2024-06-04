import AllProducts from '@/DasComponent/Tables/AllProducts'
import React from 'react'
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
    <div>
      <AllProducts categories={categories?.data}/>
    </div>
  )
}

export default page