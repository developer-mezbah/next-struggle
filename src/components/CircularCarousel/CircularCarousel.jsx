"use client";
import React, { useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import "./CircularCarousel.css";

const CircularCarousel = () => {
  const [focusElement, setFocusElement] = useState(0);
  const info = [
    {
      name: "Didarul Maksud",
      title: "CEO",
      phone: "+12675368321",
      location: "",
      email: "didar@strugglestyle.net",
      img: "/images/didar.jpg"
    },
    {
      name: "Kamrul Hasan",
      title: "Managing Director",
      phone: "+14753198400",
      location: "USA office",
      email: "kamrul@strugglestyle.net",
      img:"/images/kamrul.jpg"
    },
    {
      name: "Shakhawat Hossain",
      title: "Managing Director",
      phone: "+8801707936699",
      location: "GA-130A Progati Sharani,Gulshan, Dhaka 1212",
      email: "info@strugglestyle.net ",
      img:"/images/shakhawat.jpg"
    },
  ];
  const images  = info.map(item => item.img);

  return (
    <div className="md:mt-[200px] mt-[100px] md:pb-20 pb-10">
      <div className="wrapper">
        <div className="flex lg:flex-row flex-col gap-20 justify-center">
          <div className="lg:w-2/3 lg:mb-0 sm:mb-20">
            <div className="carousel md:block hidden">
              <FancyCarousel
                images={images}
                carouselRadius={200} // full carousel size
                peripheralImageRadius={80}
                centralImageRadius={50} // middle imaze size
                focusElementStyling={{ border: "2px solid #20FB8B" }}
                autoRotateTime={3}
                borderWidth={4}
                borderHexColor={"20FB8B"}
                setFocusElement={setFocusElement}
              />
            </div>
            {/* For small size like mobile */}
            <div className="carousel block md:hidden">
              <FancyCarousel
                images={images}
                carouselRadius={100} // full carousel size
                peripheralImageRadius={30}
                centralImageRadius={25} // middle imaze size
                focusElementStyling={{ border: "2px solid #20FB8B" }}
                autoRotateTime={3}
                borderWidth={4}
                borderHexColor={"20FB8B"}
                setFocusElement={setFocusElement}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:w-1/3">
            <div className="bg-accent p-5 rounded-md border-2 border-primary flex flex-col text-white">
              <div>
                <span className="text-primary text-lg">Name:</span>{" "}
                <span className="text-sm">{info[focusElement]?.name}</span>
              </div>
              <div>
                <span className="text-primary text-lg">Title:</span>{" "}
                <span className="text-sm">{info[focusElement]?.title}</span>
              </div>
              <div>
                <span className="text-primary text-lg">Office Location:</span>{" "}
                <span className="text-sm">{info[focusElement]?.location}</span>
              </div>
              <div>
                <span className="text-primary text-lg">Phone Number:</span>{" "}
                <span className="text-sm">{info[focusElement]?.phone}</span>
              </div>
              <div>
                <span className="text-primary text-lg">Email:</span>{" "}
                <span className="text-sm">{info[focusElement]?.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularCarousel;
