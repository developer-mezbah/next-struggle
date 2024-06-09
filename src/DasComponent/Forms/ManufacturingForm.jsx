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

const ManufacturingForm = ({ updateFormData }) => {
  const [loader, setLoader] = useState(false);
  const [isRoleHero, setRoleHero] = useState(true);
  const [file, setFile] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const form = new FormData(e.target);

    const title = form.get("title");
    const description = form.get("description");
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
          // console.log(result);
          if (result.success) {
            client_api
              .create(`${process.env.NEXT_PUBLIC_SERVER_URL}/manufacturing`, {
                title: title,
                description: description,
                img: result.data.url,
                imgDeleteUrl: result.data.delete_url,
              })
              .then((backenddata) => {
                if (backenddata) {
                  toast.success("Data added.");
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
            `${process.env.NEXT_PUBLIC_SERVER_URL}/manufacturing?id=${updateFormData?._id}`,
            { title, description }
          )
          .then((result) => {
            if (result) {
              toast.success("Data Updated.");
              setLoader(false);
            }
          });
      } else {
        client_api.upload_image(data).then((result) => {
          if (result.success) {
            client_api
              .update(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/manufacturing?id=${updateFormData?._id}`,
                {
                  title: title,
                  description: description,
                  img: result.data.url,
                  imgDeleteUrl: result.data.delete_url,
                }
              )
              .then((backenddata) => {
                if (backenddata) {
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
    <div>
      <div className="dashboard-form-bg flex flex-col">
        <div className="flex items-center justify-between">
          <FormTitle text={"Manufacturing"} />
        </div>
        <form onSubmit={handleSubmit} className="das-form">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="title" className="das-label">
                Title
              </label>
              <textarea
                type="text"
                id="title"
                rows={4}
                className="das-input"
                placeholder="Write title"
                name="title"
                defaultValue={updateFormData?.title}
                required
              />
            </div>
            <div>
              <label htmlFor="Description" className="das-label">
                Description
              </label>
              <textarea
                type="text"
                id="Description"
                className="das-input"
                placeholder="Write Description"
                name="description"
                rows={4}
                defaultValue={updateFormData?.description}
                required
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {/* Image Upload Component  */}
            <ImageUpload file={file || updateFormData?.img} setFile={setFile} />
          </div>
          <SubmitButton text={"Submit"} submit={loader} />
        </form>
      </div>
    </div>
  );
};

export default ManufacturingForm;
