"use client";
import React, { useState } from "react";
import ImageUpload from "../Others/ImageUpload";
import SubmitButton from "../Others/SubmitButton";
import FormTitle from "../Others/FormTitle";
import Image from "next/image";
import client_api from "@/Helper/api_fetch";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProductsForm = ({ categories }) => {
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [multiImgUrl, setMultiImgUrl] = useState([]);
  const fileobj = [];

  const router = useRouter();

  const handleFileChange = (e) => {
    setSelectedFiles(event.target.files);
    let files = event.target.files;
    fileobj.push(files);
    let reader;

    for (var i = 0; i < fileobj[0].length; i++) {
      reader = new FileReader();
      reader.readAsDataURL(fileobj[0][i]);
      reader.onload = (event) => {
        preview.push(event.target.result);
        setPreview([...new Set(preview)]);
      };
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const form = new FormData(e.target);

    const title = form.get("title");
    const category = form.get("category");
    const size = form.get("size");
    const description = form.get("description");
    const quality = form.get("quality");
    const quantity = form.get("quantity");
    const price = form.get("price");
    const img = form.get("img");
    const thumnailImg = new FormData();
    thumnailImg.append("image", img);
    if (file === "") {
      setLoader(false);
      return toast.error("Please Upload Thumbnail Image");
    }
    if (preview.length === 0) {
      setLoader(false);
      return toast.error("Please Upload other Images for product details");
    }
    const selectCategory = categories.find((item) => item._id === category);
    const sendData = {
      title,
      size,
      description,
      quality,
      quantity,
      price,
      categoryId: selectCategory?._id || "",
      categoryName: selectCategory?.name || "",
    };
    client_api
      .create(`${process.env.NEXT_PUBLIC_SERVER_URL}/product`, sendData)
      .then((createdData) => {
        if (createdData.status) {
          client_api.upload_image(thumnailImg).then((uploadedImg) => {
            const thumnailImg = uploadedImg.data.url;
            const imgDeleteUrl = uploadedImg.data.delete_url;
            const newArray = [];
            for (let i = 0; i < selectedFiles.length; i++) {
              const img = new FormData();
              img.append("image", selectedFiles[i]);
              client_api.upload_image(img).then((res) => {
                const data = {
                  img: res.data.url,
                  imgDeleteUrl: res.data.delete_url,
                };
                newArray.push(data);
                client_api
                  .update(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/product?id=${createdData.data._id}`,
                    { thumnailImg, imgDeleteUrl, images: newArray }
                  )
                  .then((res) => {
                    if (i + 1 == selectedFiles.length) {
                      // product created
                      router.refresh();
                      setLoader(false);
                      toast.success("Created Data!");
                      router.push("/dashboard/products/all-products");
                    }
                  });
              });
            }
          });

        }
      });
  };
  return (
    <div className="dashboard-form-bg flex flex-col">
      <FormTitle text={"Product"} />
      <form onSubmit={handleSubmit} className="das-form">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="das-label">
              Title
            </label>
            <textarea
              type="text"
              id="name"
              className="das-input"
              name="title"
              placeholder="Write product title"
              required
            />
          </div>
          <div>
            <label htmlFor="size" className="das-label">
              Size
            </label>
            <input
              type="text"
              id="size"
              className="das-input"
              name="size"
              placeholder="Write product size"
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <label htmlFor="quality" className="das-label">
              Fabric Quality
            </label>
            <input
              type="text"
              id="quality"
              className="das-input"
              name="quality"
              placeholder="Write product quality"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="das-label">
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              className="das-input"
              name="quantity"
              placeholder="Write product quantity"
            />
          </div>
          <div>
            <label htmlFor="Price" className="das-label">
              Price
            </label>
            <input
              type="text"
              id="Price"
              className="das-input"
              name="price"
              placeholder="Write product Price"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="description" className="das-label">
              Description
            </label>
            <textarea
              rows={6}
              type="text"
              id="description"
              className="das-input"
              name="description"
              placeholder="Write product description"
              required
            />
          </div>
          <div>
            <p className="text-white mb-2">Thumbnail Image</p>
            <ImageUpload file={file} setFile={setFile} />
          </div>
        </div>
        <div className="mb-5 flex flex-wrap gap-3 items-center">
          <div>
            <label htmlFor="other" className="das-label">
              Other Images
            </label>
            <input
              className="das-input"
              id="other"
              type="file"
              multiple
              onChange={handleFileChange}
            />
          </div>
          <div className="flex gap-3">
            {preview?.map((item, index) => (
              <Image
                key={index}
                width={100}
                height={100}
                src={item}
                alt=""
                className="object-scale-down"
              />
            ))}
          </div>
          <div>
            <label htmlFor="category" className="das-label">
              Selete Product Category
            </label>
            <select
              id="category"
              name="category"
              className="border text-sm rounded-lg block p-2.5 bg-bgDark border-themeColor placeholder-gray-400 text-white focus:ring-themeColor focus:border-themeColor"
            >
              <option disabled selected>
                Select Category
              </option>
              {categories?.map((item) => (
                <option key={item?._id} value={item?._id}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <SubmitButton text={"Submit"} submit={loader} />
      </form>
    </div>
  );
};

export default ProductsForm;
