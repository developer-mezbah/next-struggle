"use client";
import React, { useState } from "react";
import SubmitButton from "../Others/SubmitButton";
import ImageUpload from "../Others/ImageUpload";
import FormTitle from "../Others/FormTitle";
import client_api from "@/Helper/api_fetch";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ReviewForm = () => {
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
    if (img.name === "") {
      setLoader(false);
      return toast.error("Please upload user photo");
    }
    if (brandImg.name === "") {
      setLoader(false);
      return toast.error("Please upload Brand Image");
    }
    const resImg = await client_api.upload_image(imgData);
    const resbrandImg = await client_api.upload_image(brandImgData);
    if (resImg.success && resbrandImg.success) {
      const res = await client_api.create(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/review`,
        {
          ...sendData,
          img: resImg.data.url,
          deleteImg: resImg.data.delete_url,
          brandImg: resbrandImg.data.url,
          deleteBrandImg: resbrandImg.data.delete_url,
        }
      );
      if (res.status) {
        toast.success("Data Created!");
        e.target.reset();
        setFile("");
        setFile2("");
        setLoader(false);
        router.push("/dashboard/about-us/all-review")
        router.refresh()
      }
    } else {
      toast.error("something went wrong!");
      setLoader(false);
    }
  };
  return (
    <div className="dashboard-form-bg flex flex-col">
      <FormTitle text={"Review"} />
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
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="linkedin" className="das-label">
              linkedin
            </label>
            <input
              type="text"
              id="linkedin"
              className="das-input"
              name="linkedin"
              placeholder="paste linkedin link"
            />
          </div>
          <div>
            <label htmlFor="instagram" className="das-label">
              instagram
            </label>
            <input
              type="text"
              id="instagram"
              className="das-input"
              name="instagram"
              placeholder="paste instagram link"
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <p className="text-white mb-2">User Photo</p>
            <ImageUpload
              file={file}
              setFile={setFile}
              name={"img"}
              id={"img"}
            />
          </div>
          <div>
            <p className="text-white mb-2">Brand Image</p>

            <ImageUpload
              file={file2}
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

export default ReviewForm;
