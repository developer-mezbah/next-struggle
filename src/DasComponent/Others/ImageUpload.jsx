import Image from "next/image";
import React from "react";

const ImageUpload = ({ file, setFile, name, id }) => {
  return (
    <div className="flex items-center justify-center w-full gap-5">
      <label
        htmlFor={id? id: "dropzone-file"}
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
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          name={name? name: "img"}// for multi image get data
          id={id? id: "dropzone-file"} // for multi component in one page
          type="file"
          className="hidden"
          onChange={(e) => {
            setFile(URL?.createObjectURL(e.target.files[0]));
          }}
        />
      </label>
      <div className="w-full">
        <Image
          src={file || "/images/not-found.png"}
          width={150}
          height={150}
          alt=""
          className="max-h-[130px] object-scale-down"
        />
      </div>
    </div>
  );
};

export default ImageUpload;
