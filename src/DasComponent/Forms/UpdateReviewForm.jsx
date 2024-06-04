"use client";
import React, { useState } from "react";
import SubmitButton from "../Others/SubmitButton";
import ImageUpload from "../Others/ImageUpload";
import FormTitle from "../Others/FormTitle";
import client_api from "@/Helper/api_fetch";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { IoIosCloseCircleOutline } from "react-icons/io";

const UpdateReviewForm = ({ data, setShowUpdateForm }) => {
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const form = new FormData(e.target);

    const number = form.get("number");
    const email = form.get("email");
    const facebook = form.get("facebook");
    const twitter = form.get("twitter");
    const linkedin = form.get("linkedin");
    const instagram = form.get("instagram");
    const img = form.get("img");
    const brandImg = form.get("brandImg");
    const imgData = new FormData();
    const brandImgData = new FormData();

    imgData.append("image", img);
    brandImgData.append("image", brandImg);

    const sendData = {
      number,
      email,
      facebook,
      twitter,
      linkedin,
      instagram,
      imgData,
      brandImgData,
    };

    if (img.name !== "" || brandImg.name !== "") {
      const resImg =
        img.name !== "" ? await client_api.upload_image(imgData) : null;
      const resbrandImg =
        brandImg.name !== ""
          ? await client_api.upload_image(brandImgData)
          : null;
      if (resImg?.success || resbrandImg?.success) {
        const res = await client_api.update(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/review?id=${data?._id}`,
          {
            ...sendData,
            brandImg:
              brandImg.name !== "" ? resbrandImg?.data?.url : data?.brandImg,
            deleteBrandImg:
              brandImg.name !== ""
                ? resbrandImg?.data?.delete_url
                : data?.deleteBrandImg,
            img: img.name !== "" ? resImg?.data?.url : data?.img,
            deleteImg:
              img.name !== "" ? resImg?.data?.delete_url : data?.deleteImg,
          }
        );
        if (res.status) {
          toast.success("Data Updated!");
          setLoader(false);
          setShowUpdateForm(false);
        }
      } else {
        toast.error("something went wrong!");
        setLoader(false);
      }
    } else {
      const res = await client_api.update(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/review?id=${data?._id}`,
        sendData
      );
      if (res.status) {
        toast.success("Data updated!");
        setLoader(false);
        setShowUpdateForm(false);
      }
    }
  };
  return (
    <div className="dashboard-form-bg flex flex-col">
      <div className="flex items-center justify-between">
        <FormTitle text={"Update"} />

        {data && (
          <div
            onClick={() => setShowUpdateForm(false)}
            className="cursor-pointer text-6xl md:mr-10 mr-5 text-red-500"
          >
            <IoIosCloseCircleOutline />
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="das-form">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="number" className="das-label">
              Number
            </label>
            <input
              type="text"
              id="number"
              className="das-input"
              name="number"
              placeholder="Write review user number"
              defaultValue={data?.number}
            />
          </div>
          <div>
            <label htmlFor="email" className="das-label">
              email
            </label>
            <input
              type="text"
              id="email"
              className="das-input"
              name="email"
              placeholder="Write user email"
              defaultValue={data?.email}
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="facebook" className="das-label">
              facebook
            </label>
            <input
              type="text"
              id="quality"
              className="das-input"
              name="facebook"
              placeholder="paste facebook link"
              defaultValue={data?.facebook}
            />
          </div>
          <div>
            <label htmlFor="twitter" className="das-label">
              twitter
            </label>
            <input
              type="text"
              id="twitter"
              className="das-input"
              name="twitter"
              placeholder="paste twitter link"
              defaultValue={data?.twitter}
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="linkedin" className="das-label">
              linkedin
            </label>
            <textarea
              type="text"
              id="linkedin"
              className="das-input"
              name="linkedin"
              placeholder="paste linkedin link"
              defaultValue={data?.linkedin}
            />
          </div>
          <div>
            <label htmlFor="instagram" className="das-label">
              instagram
            </label>
            <textarea
              type="text"
              id="instagram"
              className="das-input"
              name="instagram"
              placeholder="paste instagram link"
              defaultValue={data?.instagram}
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <p className="text-white mb-2">User Photo</p>
            <ImageUpload
              file={file || data?.img}
              setFile={setFile}
              name={"img"}
              id={"img"}
            />
          </div>
          <div>
            <p className="text-white mb-2">Brand Image</p>

            <ImageUpload
              file={file2 || data?.brandImg}
              setFile={setFile2}
              name={"brandImg"}
              id={"brandImg"}
            />
          </div>
        </div>
        <SubmitButton text={"Submit"} submit={loader} />
      </form>
    </div>
  );
};

export default UpdateReviewForm;
