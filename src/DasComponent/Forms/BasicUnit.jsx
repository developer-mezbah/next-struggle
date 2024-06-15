"use client";
import React, { useState } from "react";
import SubmitButton from "../Others/SubmitButton";
import FormTitle from "../Others/FormTitle";
import toast from "react-hot-toast";
import client_api from "@/Helper/api_fetch";
import { useRouter } from "next/navigation";
import ImageUpload from "../Others/ImageUpload";
import { IoMdAdd, IoMdClose } from "react-icons/io";

const BasicUnit = ({ updateFormData }) => {
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState("");
  const [whoami, setWhoami] = useState(updateFormData?.specification || []);
  const [whoamiInput, setWhoamiInput] = useState("");

  const addWhoamiData = () => {
    if (whoamiInput.trim() !== "") {
      if (whoami.length < 4) {
        setWhoami((prev) => [...prev, whoamiInput]);
        setWhoamiInput("");
      } else {
        ErrorToast("Maximum able to add 4 items!");
      }
    }
  };
  const deleteWhoami = (index) => {
    setWhoami((prev) => prev.filter((item, i) => i !== index));
  };

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
              .create(`${process.env.NEXT_PUBLIC_SERVER_URL}/basic-unit`, {
                title: title,
                description,
                specification: whoami,
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
            `${process.env.NEXT_PUBLIC_SERVER_URL}/basic-unit?id=${updateFormData?._id}`,
            { title, description, specification: whoami }
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
                `${process.env.NEXT_PUBLIC_SERVER_URL}/basic-unit?id=${updateFormData?._id}`,
                {
                  title: title,
                  description,
                  specification: whoami,
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
          <FormTitle text={"Basic Unit"} />
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
              <label htmlFor="description" className="das-label">
                Description
              </label>
              <textarea
                type="text"
                id="description"
                className="das-input"
                placeholder="Write description"
                name="description"
                rows={4}
                defaultValue={updateFormData?.description}
                required
              />
            </div>
            {/* Image Upload Component  */}
            <ImageUpload file={file || updateFormData?.img} setFile={setFile} />
            <div className=" mb-5">
              <ul className="flex gap-3 flex-wrap">
                {whoami?.map(
                  (data, index) =>
                    data !== "" && (
                      <li
                        key={index}
                        className="px-3 py-2 rounded text-white bg-themeColor flex items-center gap-2"
                      >
                        {`${index + 1}. ${data}`}
                        <IoMdClose
                          onClick={() => deleteWhoami(index)}
                          className="text-xl text-red-200 cursor-pointer"
                        />
                      </li>
                    )
                )}
              </ul>
              <div className="flex gap-2 mt-5">
                <input
                  type="text"
                  id="whoami"
                  className="das-input"
                  placeholder="Add Specipication ?"
                  onChange={(e) => setWhoamiInput(e.target.value)}
                  value={whoamiInput}
                />
                <button
                  onClick={addWhoamiData}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-themeColor text-textColor hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3"
                  type="button"
                >
                  Add
                  <IoMdAdd className="text-xl" />
                </button>
              </div>
            </div>
          </div>
          <SubmitButton text={"Submit"} submit={loader} />
        </form>
      </div>
    </div>
  );
};

export default BasicUnit;
