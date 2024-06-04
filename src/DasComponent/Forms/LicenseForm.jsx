"use client";
import React, { useState } from "react";
import SubmitButton from "../Others/SubmitButton";
import ImageUpload from "../Others/ImageUpload";
import FormTitle from "../Others/FormTitle";
import client_api from "@/Helper/api_fetch";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LicenseForm = () => {
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const form = new FormData(e.target);

    const description = form.get("description");
    const img = form.get("img");
    const brandImg = form.get("brandImg");
    const imgData = new FormData();
    const brandImgData = new FormData();
    if (imgData.name === "") {
      toast.error("Please upload thumbnail Image");
    }
    if (brandImgData.name === "") {
      toast.error("Please upload Brand Image");
    }
    imgData.append("image", img);
    brandImgData.append("image", brandImg);

    const sendData = {
      description,
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/license`,
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
        router.push("/dashboard/license/all-licenses");
        router.refresh();
      }
    } else {
      toast.error("something went wrong!");
      setLoader(false);
    }
  };
  return (
    <div className="dashboard-form-bg flex flex-col">
      <FormTitle text={"Create License"} />
      <form onSubmit={handleSubmit} className="das-form">
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label htmlFor="Description" className="das-label">
              Description
            </label>
            <textarea
              rows={5}
              type="text"
              id="Description"
              className="das-input"
              name="description"
              placeholder="Write Description"
              required
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <p className="text-white mb-2">Thubmnail Image</p>
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

export default LicenseForm;
