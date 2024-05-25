"use client";
import React, { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";

const Youtube = () => {
  const [play, setPlay] = useState(false);
  const [showPause, setShowPause] = useState(false);

  useEffect(() => {
    var video = document.getElementById("video2");
    var btn = document.getElementById("pause-btn2");
    btn.onclick = () => {
      if (video.paused) {
        video.play();
        setPlay(true);
      } else {
        video.pause();
        setPlay(false);
      }
    };
  }, []);

  const handleMouseLeave = () => {
    setShowPause(false);
  };
  const handleMouseMove = () => {
    setShowPause(true);
  };
  return (
    <div className="md:my-[80px] my-[50px]">
      <div className="wrapper">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="border-[7px] border-primary overflow-hidden relative"
          //  data-aos="zoom-in" data-aos-duration="2000"
        >
          <video
            id="video2"
            className="h-full"
            width="100%"
            height="600"
            preload="true"
            loop
          >
            <source src="https://res.cloudinary.com/dmiz7yey9/video/upload/v1716303520/Video/MADE_IN_BANGLADESH_-_BGMEA_THEME_SONG_-_MEHREEN_3_u2ue2u.mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <button
              className="text-5xl text-primary"
              id="pause-btn2"
              style={{ zIndex: 9999 }}
            >
              {/* {play ? <FaCirclePause/>: <FaPlayCircle />} */}
              {play ? (
                showPause && <FaCirclePause className="text-8xl" />
              ) : (
                <span>
                  <svg
                    width="92"
                    height="92"
                    viewBox="0 0 92 92"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-textColor"
                  >
                    <path
                      d="M46.0022 0C20.586 0 0 20.586 0 46.0022C0 71.4185 20.586 92.0045 46.0022 92.0045C71.4185 92.0045 92.0045 71.4185 92.0045 46.0022C92.0045 20.586 71.4185 0 46.0022 0ZM34.5017 23.0011L69.0033 46.0022L34.5017 69.0033V23.0011Z"
                      fill="white"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;