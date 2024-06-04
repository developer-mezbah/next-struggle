"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import SubmitButton from "../Others/SubmitButton";
import FormTitle from "../Others/FormTitle";
import ImageUpload from "../Others/ImageUpload";
import { IoIosCloseCircleOutline } from "react-icons/io";
import client_api from "@/Helper/api_fetch";

const AboutHero = ({ data }) => {
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const form = new FormData(e.target);

    const title = form.get("title");
    const img = form.get("img");
    const imgData = new FormData();
    imgData.append("image", img);
    if (img.name === "") {
      if (!data) {
        setLoader(false);
        return toast.error("Please Upload Image");
      }
    }
    if (data) {
      if (img.name === "") {
        client_api
          .update(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/hero?id=${data?._id}`,
            { title }
          )
          .then((result) => {
            if (result) {
              toast.success("Data Updated.");
              setLoader(false);
            }
          });
      } else {
        client_api.upload_image(imgData).then((result) => {
          if (result.success) {
            client_api
              .update(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/hero?id=${data?._id}`,
                {
                  title: title,
                  img: result.data.url,
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
    } else {
      client_api.upload_image(imgData).then((result) => {
        if (result.success) {
          client_api
            .create(`${process.env.NEXT_PUBLIC_SERVER_URL}/about-us/hero`, {
              title: title,
              img: result.data.url,
              imgDeleteUrl: result.data.delete_url,
            })
            .then((backenddata) => {
              if (backenddata.status) {
                toast.success("Data added.");
                setLoader(false);
              }
            });
        }
      });
    }
  };
  return (
    <div className="dashboard-form-bg flex flex-col">
      <div className="flex items-center justify-between">
        <FormTitle text={"Create About Hero"} />
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
              className="das-input"
              placeholder="Write title"
              name="title"
              rows={4}
              defaultValue={data?.title}
              required
            />
          </div>

          <ImageUpload file={file || data?.img} setFile={setFile} />
        </div>

        <SubmitButton text={"Submit"} submit={loader} />
      </form>
    </div>
  );
};

export default AboutHero;
