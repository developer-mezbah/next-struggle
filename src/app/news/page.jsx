import Blogs from "@/components/Home/Blogs";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

async function getData(id) {
  try {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/news`)
    ).json();
    const singleData = await (
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/news/${id}`, {
        cache: "no-store",
      })
    ).json();
    return { data, singleData };
  } catch (error) {
    console.log(error);
  }
}

const page = async (props) => {
  let id = await props.searchParams["id"];
  const data = await getData(id);
  function formatDate(inputDate) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(inputDate);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${months[monthIndex]}, ${year}`;
  }
  return (
    <MasterLayout>
      <ReUseableBanner title="News" img="/images/bg_banner2.png" />
      {/* Latest Post */}
      <div className="wrapper">
        {!data?.singleData.error && (
          <div>
            <h1
              data-aos="flip-up"
              className="lg:text-[50px] text-[40px] font-bold lg:leading-[62px] leading-[40px] py-5 mt-5"
            >
              Latest Post
            </h1>
            <div className="md:flex justify-between items-center gap-10 space-y-5">
              <div data-aos="fade-right" className="w-full">
                <Image
                  className="w-full rounded-2xl h-full object-cover max-h-[350px]"
                  src={data?.singleData?.img}
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
              <div
                data-aos="fade-left"
                className="w-full xl:space-y-8 lg:space-y-3 md:space-y-3"
              >
                <h2 className="font-bold lg:text-[29px] text-[20px] lg:leading-[35px]">
                  {data?.singleData?.title}
                </h2>
                <p>{data?.singleData?.description}</p>
                <div className="flex justify-between items-center flex-wrap">
                  <span>{formatDate(data?.singleData?.createdAt)}</span>
                  <button className="bg-gray-300 p-4 rounded-full">
                    <MdArrowForwardIos />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* News & Articles */}
      <div className="mt-20">
        <Blogs data={data?.data?.data} />
      </div>
    </MasterLayout>
  );
};

export default page;
