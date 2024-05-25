import Blogs from "@/components/Home/Blogs";
import ReUseableBanner from "@/components/Reuseable/ReUseableBanner";
import MasterLayout from "@/layout/MasterLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const page = () => {
  return (
    <MasterLayout>
      <ReUseableBanner title="News" img="/images/bg_banner2.png" />
      {/* Latest Post */}
      <div className="wrapper">
        <h1
          data-aos="flip-up"
          className="lg:text-[50px] text-[40px] font-bold lg:leading-[62px] leading-[40px] py-5 mt-5"
        >
          Latest Post
        </h1>
        <div className="md:flex justify-between items-center gap-10 space-y-5">
          <div data-aos="fade-right" className="w-full">
            <Image
              className="w-full rounded-2xl h-full object-cover"
              src="/images/latest-post.png"
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
              Low Cost Latest Invented Textile Designing Ideas
            </h2>
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief. Lorem
              Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
            <div className="flex justify-between items-center flex-wrap">
              <span>26 December,2024</span>
              <Link href={"/"} className="bg-gray-300 p-4 rounded-full">
                <MdArrowForwardIos />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* News & Articles */}
      <div className="mt-20">
        <Blogs />
      </div>
    </MasterLayout>
  );
};

export default page;
