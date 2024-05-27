import React from "react";
import SubmitButton from "../Others/SubmitButton";
import FormTitle from "../Others/FormTitle";
import Image from "next/image";

const AboutUsForm = () => {
  return (
    <div className="dashboard-form-bg flex flex-col">
      <FormTitle text={"Create About Item"} />
      <form className="das-form">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="das-label">
              Title
            </label>
            <textarea
              type="text"
              id="title"
              className="das-input"
              placeholder="Write title"
              name="title"
            />
          </div>
          <div>
            <label htmlFor="subtitle" className="das-label">
              sub title
            </label>
            <textarea
              type="text"
              id="subtitle"
              className="das-input"
              placeholder="Write sub title"
              name="subtitle"
            />
          </div>
          <div>
            <label htmlFor="description" className="das-label">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              className="das-input"
              placeholder="Write description"
              name="description"
              rows={3}
            />
          </div>
          <div className="flex items-center justify-center w-full gap-5">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full border-2  border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700  border-gray-600 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <div className="w-full">
              <Image src="/images/logo.png" width={150} height={150} alt="" />
            </div>
          </div>
        </div>

        <SubmitButton text={"Submit"} submit={false} />
      </form>
    </div>
  );
};

export default AboutUsForm;
