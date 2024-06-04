"use client";
import { DeleteAlert } from "@/Helper/DeleteAlert";
import client_api from "@/Helper/api_fetch";
import Loading from "@/components/Loading/Loading";
import { customStyles } from "@/utils/TableTheme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import UpdateProductsForm from "../Forms/UpdateProductsForm";

const AllProducts = ({categories}) => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});

  const router = useRouter();

  useEffect(() => {
    client_api
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/product`)
      .then((data) => {
        if (data.status) {
          setData(data?.data);
        }
      });
    setLoader(false);
  }, [loader,showUpdateForm]);
  if (loader) {
    return <Loading />;
  }
  const columns = [
    {
      name: "Title",
      selector: (row) => row?.title,
    },
    {
      name: "Image",
      // selector: (row) => row?.createAt.substring(0, 10),
      selector: (row) => (
        <Image
          src={
            row?.thumnailImg?.includes("http://") ||
            row?.thumnailImg?.includes("https://")
              ? row?.thumnailImg
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
            onClick={() =>
              DeleteAlert(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/product?id=${row?._id}`
              ).then((result) => {
                if (result) {
                  router.refresh();
                  toast.success("Data deleted!");
                  setLoader(true);
                } else {
                  toast.error("Something went wrong!");
                }
              })
            }
          />
          <FaRegEdit
            onClick={() => {
              setUpdateFormData(row);
              setShowUpdateForm(true);
            }}
            className="cursor-pointer "
          />
        </div>
      ),
    },
  ];
  return (
    <div className="md:p-10 p-3">
      {showUpdateForm ? (
        <UpdateProductsForm
          updateFormData={updateFormData}
          setShowUpdateForm={setShowUpdateForm}
          categories={categories}
        />
      ) : (
        <DataTable
          columns={columns}
          data={data}
          pagination
          theme="solarized"
          customStyles={customStyles}
        />
      )}
    </div>
  );
};

export default AllProducts;
