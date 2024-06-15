"use client";
import React, { useState } from "react";
import SubmitButton from "../Others/SubmitButton";
import FormTitle from "../Others/FormTitle";
import toast from "react-hot-toast";
import client_api from "@/Helper/api_fetch";
import { useRouter } from "next/navigation";
import ImageUpload from "../Others/ImageUpload";

const LinkAndInt = ({ updateFormData }) => {
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const form = new FormData(e.target);

    const title = form.get("title");
    const subtitleTop = form.get("subtitleTop");
    const subtitleBottom = form.get("subtitleBottom");
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
              .create(`${process.env.NEXT_PUBLIC_SERVER_URL}/lingerie`, {
                title: title,
                subtitleTop,
                subtitleBottom,
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
            `${process.env.NEXT_PUBLIC_SERVER_URL}/lingerie?id=${updateFormData?._id}`,
            { title, subtitleTop, subtitleBottom }
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
                `${process.env.NEXT_PUBLIC_SERVER_URL}/lingerie?id=${updateFormData?._id}`,
                {
                  title: title,
                  subtitleTop,
                  subtitleBottom,
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
          <FormTitle text={"Lingerie"} />
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
              <label htmlFor="subtitle-top" className="das-label">
                Top Sub Title
              </label>
              <textarea
                type="text"
                id="subtitle-top"
                className="das-input"
                placeholder="Write top subtitle"
                name="subtitleTop"
                rows={4}
                defaultValue={updateFormData?.subtitleTop}
                required
              />
            </div>
            <div>
              <label htmlFor="subtitle-bottom" className="das-label">
                Bottom Sub Title
              </label>
              <textarea
                type="text"
                id="subtitle-bottom"
                className="das-input"
                placeholder="Write bottom subtitle"
                name="subtitleBottom"
                rows={4}
                defaultValue={updateFormData?.subtitleBottom}
                required
              />
            </div>
            {/* Image Upload Component  */}
            <ImageUpload file={file || updateFormData?.img} setFile={setFile} />
          </div>
          <SubmitButton text={"Submit"} submit={loader} />
        </form>
      </div>
    </div>
  );
};

export default LinkAndInt;
