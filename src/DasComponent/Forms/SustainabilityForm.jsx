"use client";
import React, { useState } from "react";
import SubmitButton from "../Others/SubmitButton";
import FormTitle from "../Others/FormTitle";
import Image from "next/image";
import toast from "react-hot-toast";
import client_api from "@/Helper/api_fetch";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";
import ImageUpload from "../Others/ImageUpload";

const SustainabilityForm = ({ setShowUpdateForm, updateFormData }) => {
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState(updateFormData?.img || "");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const form = new FormData(e.target);

    const title = form.get("title");
    const subTitle = form.get("subTitle");
    const img = form.get("img");
    const data = new FormData();
    data.append("image", img);

    if (img.name === "") {
      if (!updateFormData) {
        setLoader(false);
        return toast.error("Please Upload Image");
      }
    }

    if (!updateFormData) {
      client_api
        .upload_image(data)
        .then((result) => {
          if (result.success) {
            client_api
              .create(`${process.env.NEXT_PUBLIC_SERVER_URL}/sustainability`, {
                title: title,
                subTitle: subTitle,
                img: result.data.url,
                imgDeleteUrl: result.data.delete_url,
              })
              .then((backenddata) => {
                if (backenddata) {
                  toast.success("Data added.");
                  router.push("/dashboard/sustainability/all-blogs");
                  router.refresh();
                }
                setLoader(false);
              });
          }
        })
        .catch((err) => {
          setLoader(false);
        });
    } else {
      if (img.name === "") {
        client_api
          .update(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/sustainability?id=${updateFormData?._id}`,
            { title, subTitle }
          )
          .then((result) => {
            if (result) {
              setShowUpdateForm(false);
              toast.success("Data Updated.");
              setLoader(false);
            }
          });
      } else {
        client_api.upload_image(data).then((result) => {
          if (result.success) {
            client_api
              .update(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/sustainability?id=${updateFormData?._id}`,
                {
                  title: title,
                  subTitle: subTitle,
                  img: result.data.url,
                  imgDeleteUrl: result.data.delete_url,
                }
              )
              .then((backenddata) => {
                if (backenddata) {
                  setShowUpdateForm(false);
                  toast.success("Data Updated.");
                }
                setLoader(false);
              });
          }
        });
      }
    }
  };
  return (
    <div className="dashboard-form-bg flex flex-col">
      <div className="flex items-center justify-between">
        <FormTitle text={"Create"} />

        {updateFormData && (
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
            <label htmlFor="title" className="das-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="das-input"
              placeholder="Write title"
              name="title"
              rows={4}
              defaultValue={updateFormData?.title}
              required
            />
          </div>
          <div>
            <label htmlFor="subTitle" className="das-label">
              Sub Title
            </label>
            <textarea
              type="text"
              id="subTitle"
              className="das-input"
              placeholder="Write sub title"
              name="subTitle"
              rows={4}
              defaultValue={updateFormData?.subTitle}
              required
            />
          </div>
        </div>
        <div className="mb-10">
          {/* Image Upload Component  */}
          <ImageUpload file={file} setFile={setFile} />
        </div>
        <SubmitButton text={"Submit"} submit={loader} />
      </form>
    </div>
  );
};

export default SustainabilityForm;
