"use client";
import React, { useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import client_api from "@/Helper/api_fetch";
import toast from "react-hot-toast";

const ContactUsForm = ({ data }) => {
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const form = e.target;
    const firstEmail = form.firstEmail.value;
    const secondEmail = form.secondEmail.value;
    const number = form.number.value;
    const locationOne = form.locationOne.value;
    const locationTwo = form.locationTwo.value;
    const locationThree = form.locationThree.value;
    const sendData = {
      firstEmail,
      secondEmail,
      number,
      locationOne,
      locationTwo,
      locationThree
    };
    if (data) {
      client_api
        .update(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/contact-us?id=${data?._id}`,
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
        .create(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact-us`, sendData)
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
            <label htmlFor="firstEmail" className="das-label">
              First Email
            </label>
            <input
              type="text"
              id="firstEmail"
              className="das-input"
              placeholder="Write your first Email"
              name="firstEmail"
              defaultValue={data?.firstEmail}
            />
          </div>
          <div>
            <label htmlFor="secondEmail" className="das-label">
              Second Email
            </label>
            <input
              type="text"
              id="secondEmail"
              className="das-input"
              placeholder="Write your second Email"
              name="secondEmail"
              defaultValue={data?.secondEmail}
            />
          </div>
          <div>
            <label htmlFor="number" className="das-label">
              Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              className="das-input"
              placeholder="Write your number"
              defaultValue={data?.number}
            />
          </div>

          <div>
            <label htmlFor="location-one" className="das-label">
              Loacation One
            </label>
            <input
              type="text"
              id="location-one"
              className="das-input"
              placeholder="Write your location-one"
              defaultValue={data?.locationOne}
              name="locationOne"
            />
          </div>

          <div>
            <label htmlFor="location-two" className="das-label">
              Loacation Two
            </label>
            <input
              type="text"
              id="location-two"
              className="das-input"
              placeholder="Write your location-two"
              defaultValue={data?.locationTwo}
              name="locationTwo"
            />
          </div>

          <div>
            <label htmlFor="location-three" className="das-label">
              Loacation Three
            </label>
            <input
              type="text"
              id="location-three"
              className="das-input"
              placeholder="Write your location-three"
              defaultValue={data?.locationThree}
              name="locationThree"
            />
          </div>
        </div>
        <SubmitButton text={"Submit"} submit={loader} />
      </form>
    </div>
  );
};

export default ContactUsForm;
