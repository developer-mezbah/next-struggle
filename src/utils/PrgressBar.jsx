"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Progress = () => {
  return (
    <div className="fixed top-0 z-[9999999999999000000000000000000000009999999]">
      <ProgressBar
        height="4px"
        color="#22C55E"
        options={{ showSpinner: false }}
      />
    </div>
  );
};

export default Progress;
