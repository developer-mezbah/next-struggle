"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import "./Banner.css";

const Star = ({ className }) => {
  return (
    <svg
      width={107}
      height={107}
      viewBox="0 0 107 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <path
        d="M42.0906 71.3758C41.1294 68.1256 38.5873 65.5835 35.3371 64.6223L1.29617 54.5551C0.102157 54.202 0.102166 52.5109 1.29617 52.1578L35.3371 42.0906C38.5873 41.1294 41.1294 38.5873 42.0906 35.3371L52.1578 1.29617C52.5109 0.102159 54.202 0.102165 54.5551 1.29617L64.6223 35.3371C65.5835 38.5873 68.1256 41.1294 71.3758 42.0906L105.417 52.1578C106.611 52.5109 106.611 54.202 105.417 54.5551L71.3758 64.6223C68.1256 65.5835 65.5835 68.1256 64.6223 71.3758L54.5551 105.417C54.202 106.611 52.5109 106.611 52.1578 105.417L42.0906 71.3758Z"
        fill="#20FB8B"
        fillOpacity="0.4"
      />
    </svg>
  );
};

const Banner = () => {
  const [play, setPlay] = useState(false);
  const ref = useRef(null)
  useEffect(() => {
    const video = document.getElementById("banner-video");
    const btn = document.getElementById("pause-btn");
    if (video.paused) {
      setPlay(true);
    } else {
      setPlay(false);
    }
    btn.onclick = () => {
      if (video.paused) {
        video.play();
        setPlay(true);
      } else {
        video.pause();
        setPlay(false);
      }
    };

    window.onload = function () {
      video.play();
    };
  }, [ref]);
  return (
    <div className="banner">
      <video  ref={ref} id="banner-video" className="background-video" loop autoPlay>
        <source
          src="https://res.cloudinary.com/dl63ay6nm/video/upload/v1720269893/website%20video/ybucdapqwwzu2pbbb9zd.mp4"
          type="video/mp4"
          label="fullHD"
        />
        Your browser does not support the video tag.
      </video>
      <div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 text-center flex justify-center items-center flex-col z-50 pt-20"
          style={{ background: "rgb(6, 60, 1, 0.4)" }}
        >
          <div data-aos="flip-up">
            <h1 className="lg:text-[70px] md:text-[45px] text-[25px] font-bold capitalize lg:leading-[100px] md:leading-[70px] leading-[40px]">
              <span className="text-[#E99211]">Struggle</span> <span className="lg:text-[50px] md:text-[30px] text-[17px] text-primary">style inc.</span>
            </h1>
            <p className="sm:text-[30px] text-[22px]">
              Quality textiles and apparel with efficiency & Sustainability
              <br />
              <span className="text-primary">
                <i>Your passion our mission.</i>
              </span>
            </p>
          </div>
          <div>
            <p className="md:mt-14 mt-5 mb-5 sm:text-[25px] text-[18px]">lets begin journey with your promotion</p>
            <div data-aos="flip-down" className="flex gap-5 items-center justify-center">
              <Link href="/contact-us" className="btn1">
                Contact Us
              </Link>
              <button
                className=" text-5xl text-primary "
                id="pause-btn"
                style={{ zIndex: 9999999999 }}
              >
                {play ? <FaCirclePause /> : <FaPlayCircle />}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-[30%] right-[25%]">
          <Star />
        </div>
        <div className="absolute top-[80%] right-[25%]">
          <Star className="w-16 h-16" />
        </div>
        <div className="absolute top-[80%] left-[25%]">
          <Star className="w-10 h-10" />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
          <Image
            className="w-[420px] h-[310px]"
            src="/images/banner-shadow.png"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
