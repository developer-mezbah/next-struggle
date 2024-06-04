import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = ({ data }) => {
  // charector 61
  // const data = [
  //   {
  //     _id: 1,
  //     category: "Branding",
  //     title: "What is the branding, and what we need it?",
  //     description:
  //       "On the other hand, we denounce with righteous indignation and",
  //     img: "/images/articles/img1.jpg",
  //   },
  //   {
  //     _id: 2,
  //     category: "TIKTOK",
  //     title: "What is the branding, and what we need it?",
  //     description:
  //       "On the other hand, we denounce with righteous indignation and",
  //     img: "/images/articles/img2.jpg",
  //   },
  //   {
  //     _id: 3,
  //     category: "LOGO DESIGN",
  //     title: "What is the branding, and what we need it?",
  //     description:
  //       "On the other hand, we denounce with righteous indignation and",
  //     img: "/images/articles/img3.jpg",
  //   },
  //   {
  //     _id: 4,
  //     category: "FB",
  //     title: "What is the branding, and what we need it?",
  //     description:
  //       "On the other hand, we denounce with righteous indignation and",
  //     img: "/images/articles/img4.jpg",
  //   },
  //   {
  //     _id: 5,
  //     category: "AI",
  //     title: "What is the branding, and what we need it?",
  //     description:
  //       "On the other hand, we denounce with righteous indignation and",
  //     img: "/images/articles/img5.jpg",
  //   },
  //   {
  //     _id: 6,
  //     category: "Branding",
  //     title: "What is the branding, and what we need it?",
  //     description:
  //       "On the other hand, we denounce with righteous indignation and",
  //     img: "/images/articles/img6.jpg",
  //   },
  // ];

  return (
    <div className="bg-accent py-10">
      <div className="wrapper">
        <div data-aos="flip-left" data-aos-duration="1200">
          <p className="text-center uppercase text-primary">blogs</p>
          <h1 className="font-bold text-center text-textLight text-[45px]">
            News & Articles
          </h1>
          <p className="text-[18px] text-textLight text-center">
            Best Articles to get started
          </p>
        </div>
        <div className="my-10 grid xl:grid-cols-2 gap-10">
          {data?.map((item, index) => {
            const cal = index % 2;
            return (
              <Link
                href={`/news?article=${item?.title
                  .replace(/[^a-zA-Z0-9-.\s]/g, "")
                  .replace(/ /g, "-")}&id=${item?._id}`}
                className="flex sm:flex-row flex-col gap-5 sm:gap-0 items-center sm:h-[220px] overflow-hidden"
                key={item?._id}
                data-aos={`${cal !== 0 ? "fade-left" : "fade-right"}`}
                data-aos-duration="2000"
              >
                <div className="z-10 sm:-mr-3 h-full sm:w-3/5 w-full px-0">
                  <Image
                    className="rounded-2xl object-cover w-full sm:w-full h-[200px] sm:h-full mx-auto"
                    src={item?.img}
                    width={500}
                    height={500}
                    alt={item?.title}
                  />
                </div>
                <div className="space-y-2 h-full rounded-2xl sm:rounded-l-none border-2 border-primary -z-0 p-5">
                  <p className="uppercase text-primary">{item?.category}</p>
                  <h3 className="font-bold text-[24px] text-textLight text-elip">
                    {item?.title.length >= 43
                      ? item?.title.slice(0, 43) + "..."
                      : item?.title}
                  </h3>
                  <p className="text-[18px] text-textLight text-elip">
                    {item?.description.length >= 61
                      ? item?.description.slice(0, 61) + "..."
                      : item?.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
