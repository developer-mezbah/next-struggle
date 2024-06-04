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

const UpdateLicenseForm = ({ data, setShowUpdateForm }) => {
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

    imgData.append("image", img);
    brandImgData.append("image", brandImg);

    const sendData = {
      description,
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
          `${process.env.NEXT_PUBLIC_SERVER_URL}/license?id=${data?._id}`,
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
        `${process.env.NEXT_PUBLIC_SERVER_URL}/license?id=${data?._id}`,
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
        <FormTitle text={"Update License"} />

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
              defaultValue={data?.description}
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <p className="text-white mb-2">Thubmnail Image</p>
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

export default UpdateLicenseForm;
