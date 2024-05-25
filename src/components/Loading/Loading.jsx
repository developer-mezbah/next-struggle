import React from "react";
import "./Loading.css"
import Image from "next/image";

const Loading = () => {
  return (
    <div className="loader">
      <div className="loader-box"></div>
      <Image width={100} height={100} src="/images/logo.png" alt="web developers" />
    </div>
  );
};

export default Loading;
