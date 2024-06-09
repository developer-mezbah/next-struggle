"use client";
import React, { useState } from "react";
import SubmitButton from "../Others/SubmitButton";
import FormTitle from "../Others/FormTitle";
import Image from "next/image";
import ImageUpload from "../Others/ImageUpload";
import client_api from "@/Helper/api_fetch";
import toast from "react-hot-toast";
import DataTable from "react-data-table-component";
import { customStyles } from "@/utils/TableTheme";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { DeleteAlert } from "@/Helper/DeleteAlert";
import { useRouter } from "next/navigation";

const BrandsForm = ({ categories, data }) => {
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (file === "") {
      setLoader(false);
      return toast.error("Please Upload Image");
    }
    const form = new FormData(e.target);
    const img = form.get("img");
    const imgData = new FormData();
    imgData.append("image", img);

    client_api
      .upload_image(imgData)
      .then((result) => {
        if (result.success) {
          client_api
            .create(`${process.env.NEXT_PUBLIC_SERVER_URL}/brand`, {
              img: result.data.url,
              imgDeleteUrl: result.data.delete_url,
            })
            .then((backenddata) => {
              if (backenddata.error) {
                toast.error(backenddata.error);
                setLoader(false);
              } else {
                e.target.reset();
                setFile("");
                toast.success("Data added.");
                setLoader(false);
                router.refresh();
              }
            });
        }
      })
      .catch((err) => {
        setLoader(false);
      });
  };

  const columns = [

    {
      name: "Image",
      // selector: (row) => row?.createAt.substring(0, 10),
      selector: (row) => (
        <Image
          src={
            row?.img?.includes("http://") || row?.img?.includes("https://")
              ? row?.img
              : "/images/not-found.png"
          }
          width={100}
          height={100}
          alt=""
          className="py-2 w-20 h-20 object-scale-down"
        />
      ),
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="flex text-2xl gap-3">
          <FaTrashCan
            className="text-red-400 cursor-pointer "
            onClick={() => {
            
              DeleteAlert(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/brand?id=${row?._id}`
              ).then((result) => {
                console.log(result);
                if (result) {
                  router.refresh();
                  toast.success("Data deleted!");
                  setLoader(true);
                } else {
                  toast.error("Something went wrong!");
                }
              });
            }}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="dashboard-form-bg flex flex-col">
        <FormTitle text={"Create Brand"} />
        <form onSubmit={handleSubmit} className="das-form">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <ImageUpload file={file} setFile={setFile} />
          </div>

          <SubmitButton text={"Submit"} submit={loader} />
        </form>
      </div>
      <div className="dashboard-form-bg flex flex-col mt-10 mx-auto p-5">
        <FormTitle text={"Delete"} />
        <DataTable
          columns={columns}
          data={data}
          pagination
          theme="solarized"
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default BrandsForm;
