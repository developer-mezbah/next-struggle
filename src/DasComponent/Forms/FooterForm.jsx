"use client";
import React, { useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import client_api from "@/Helper/api_fetch";
import toast from "react-hot-toast";

const FooterForm = ({ data }) => {
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const form = e.target;
    const title = form.title.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const sendData = {
      title,
      email,
      phone,
    };
    if (data) {
      client_api
        .update(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/footer?id=${data?._id}`,
          sendData
        )
        .then((res) => {
          if (res.status) {
            toast.success("Data Updated!");
            setLoader(false);
          } else {
            toast.error("Something went wrong");
            setLoader(false);
          }
        });
    } else {
      client_api
        .create(`${process.env.NEXT_PUBLIC_SERVER_URL}/footer`, sendData)
        .then((res) => {
          if (res.status) {
            toast.success("Data Created!");
            setLoader(false);
          } else {
            toast.error("Something went wrong");
            setLoader(false);
          }
        });
    }
  };
  return (
    <div className="dashboard-form-bg flex flex-col">
      <FormTitle text={"Contact Us"} />
      <form onSubmit={handleSubmit} className="das-form">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="das-label">
              Footer Title
            </label>
            <textarea
              rows={5}
              type="text"
              id="title"
              className="das-input"
              placeholder="Write Footer title"
              name="title"
              defaultValue={data?.title}
            />
          </div>
          <div className="space-y-2">
            <div>
              <label htmlFor="Email" className="das-label">
                Footer Email
              </label>
              <input
                type="text"
                id="Email"
                className="das-input"
                placeholder="Write Footer Email"
                name="email"
                defaultValue={data?.email}
              />
            </div>
            <div>
              <label htmlFor="number" className="das-label">
                Footer Number
              </label>
              <input
                type="text"
                id="number"
                className="das-input"
                placeholder="Write your number"
                defaultValue={data?.phone}
                name="phone"
              />
            </div>
          </div>
        </div>
        <SubmitButton text={"Submit"} submit={loader} />
      </form>
    </div>
  );
};

export default FooterForm;
