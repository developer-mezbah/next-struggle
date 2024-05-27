"use client";
import FormTitle from "@/DasComponent/Others/FormTitle";
import SubmitButton from "@/DasComponent/Others/SubmitButton";
import React from "react";

const DashboardBanner = () => {
  return (
    <div className="md:p-10 p-5">
      <div className="dashboard-form-bg flex flex-col">
        <FormTitle text={"Social Link"} />
        <form className="das-form">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="title" className="das-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="das-input"
                placeholder="Write banner title"
                name="title"
              />
            </div>
            <div>
              <label htmlFor="highlight" className="das-label">
                High Light Title
              </label>
              <input
                type="text"
                id="highlight"
                className="das-input"
                placeholder="Write High light text Form Title"
                name="highlight"
              />
            </div>
            <div>
              <label htmlFor="video-url" className="das-label">
                High Light Title
              </label>
              <textarea
                type="text"
                id="video-url"
                className="das-input"
                placeholder="Paste Your Video Link."
                name="videoUrl"
                rows={3}
              />
            </div>
          </div>
          <div>
            <SubmitButton text={"Submit"} submit={true} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardBanner;
