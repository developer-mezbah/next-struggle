"use client";
import React, { useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import "./CircularCarousel.css"

const CircularCarousel = () => {
  const [focusElement, setFocusElement] = useState(0);
  const images = [
    "/images/logo.png",
    "/images/flag.jpg",
    "/images/avatar.jpg",
    "/images/wepik.png",
  ];

  const info = [
    {
      name: "Dilhi",
      subtitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
    },
    {
      name: "cumilla",
      subtitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
    },
    {
      name: "bangladesh",
      subtitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
    },
    {
      name: "Kolkata",
      subtitle:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop",
    },
  ];
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
            <div className="bg-accent p-5 rounded-md border-2 border-primary">
              <p className="text-primary text-md">{info[focusElement]?.name}</p>
              <p className="text-white mt-2 text-sm">
                {info[focusElement]?.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularCarousel;
