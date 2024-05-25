import Image from "next/image";
import React from "react";

const SustainBlogs = () => {
  const data = [
    {
      _id: 1,
      title: "Environmental impact reduction",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
      img: "/images/sustainable/img2.png",
      backgroundColor: "#111204",
    },
    {
      _id: 2,
      title: "Lowering emission",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
      img: "/images/sustainable/img3.png",
      backgroundColor: "#ffffff",
    },
    {
      _id: 3,
      title: "Minimizing waste",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
      img: "/images/sustainable/img4.png",
      backgroundColor: "#122912",
    },
    {
      _id: 4,
      title: "⁠Efficiency using resources",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
      img: "/images/sustainable/img5.png",
      backgroundColor: "#ffffff",
    },
  ];
  return (
    <div>
      <div className="md:mt-[100px] mt-[50px]">
        <div
          className="wrapper"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <h1 className="font-semibold md:text-[55px] text-[40px] text-accent md:leading-[80px]">
            VCommitted to the environment
          </h1>
          <p className="text-accent md:text-[30px] font-normal md:leading-[45px] mt-5">
            From the way we dye our fabrics to the way we produce our products,
            sustainability and social responsibility are always at the
            forefront. We happily employ eco-friendly practices in our
            manufacturing processes such as maintaining energy-efficient
            facilities, utilizing renewable energy in the form of solar panels,
            and sourcing sustainable packaging materials.
          </p>
        </div>
        <div className="md:py-20 py-10 md:mt-10">
          <div className="wrapper">
            <Image
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mx-auto w-full md:h-[750px] object-cover"
              src="/images/sustainable/img1.png"
              width={800}
              height={800}
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        {data?.map((item, index) => (
          <div
            key={item?._id}
            className={`md:pt-20}`}
            style={{
              background: item?.backgroundColor,
              color: item?.backgroundColor === "#ffffff" ? "black" : "#fff",
            }}
          >
            <div className="wrapper">
              <div className="md:flex justify-between items-center gap-10">
                <div
                  data-aos={`fade-${index & (2 === 0) ? "right" : "left"}`}
                  className="w-full space-y-5  md:py-20 py-10 md:space-y-10"
                >
                  <h2 className="md:leading-[60px] leading-[40px] md:text-[50px] text-[30px] font-medium">
                    {item?.title}
                  </h2>
                  <hr
                    className={`border-0 w-[170px] h-[10px] ${
                      item?.backgroundColor === "#ffffff"
                        ? "bg-black"
                        : "bg-white"
                    }`}
                  />
                  <p className="">{item?.description}</p>
                </div>
                <div
                  data-aos={`fade-${index & (2 === 0) ? "left" : "right"}`}
                  className="lg:w-4/6 w-full"
                >
                  <Image
                    className="w-full"
                    src={item?.img}
                    width={400}
                    height={400}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SustainBlogs;
