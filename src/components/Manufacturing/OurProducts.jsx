import React from 'react'

const OurProducts = () => {
  return (
    <div className='wrapper'>
        <div className='text-center'>
        <h1 className='md:text-[50px] sm:text-[30px] text-[20px] leading-[62px] font-semibold bg-[#D9D9D9] inline p-5'>OUR PRODUCTS</h1>
        </div>
        <h4 className='leading-[40px] font-semibold sm:text-[32px] mt-10'>We are specialized in Woven Garments Like-</h4>
        <ul className='grid sm:grid-cols-2 list-disc text-[22px] leading-[44px] font-medium mt-5 mx-2'>
            <li>Men’s, Ladies & Children Denim Pant</li>
            <li>Long/Short Chino Pant</li>
            <li>Cargo long & short pant</li>
            <li>Bermuda shorts, Capri, Overall, Short all, Skirt etc </li>
            <li>Men’s, Ladies & Children denim/ non-denim shorts.</li>
        </ul>
    </div>
  )
}

export default OurProducts