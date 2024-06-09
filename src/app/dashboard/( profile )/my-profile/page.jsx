"use client";
import { AdminContext } from "@/Context/AdminContext";
import PageTitle from "@/DasComponent/Others/PageTitle";
import SubmitButton from "@/DasComponent/Others/SubmitButton";
import Image from "next/image";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { logOut, handleUpdatePassword } = useContext(AdminContext);
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value.length < 6) {
      toast.error("New Password will be 6 charector!")
    }
    handleUpdatePassword(e.target.oldPassword.value, e.target.password.value,e);
  };
  return (
    <div>
      <PageTitle text={"Profile Information"} />
      <div>
        <div className=" mx-[30px] mt-[40px]">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-6">
              <form
                onSubmit={handleSubmit}
                className="rounded-xl  dashboard-form-bg p-[30px]"
              >
                <div
                  className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                  role="tabpanel"
                  id="panel:r0:3"
                  aria-labelledby="tab:r0:3"
                >
                  <div className="body__option my-6">
                    <h2 className="text-slate-300 text-2xl font-semibold mb-2">
                      Change Password
                    </h2>
                    <div />
                    <div className="intro__form">
                      <div className="p-0">
                        <div className="mt-3 md:grid grid-cols-2 gap-3">
                          <div>
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              Old Password:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              type={showPassword ? "show" : "password"}
                              name="oldPassword"
                            />
                          </div>
                          <div className="mt-3 md:mt-0">
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              New Password:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              type={showPassword ? "show" : "password"}
                              name="password"
                            />
                          </div>
                        </div>
                        <div onClick={() => {
                          setShowPassword(!showPassword)
                        }} className="mt-3 flex gap-3 text-white cursor-pointer">
                          <input
                            type="checkbox"
                            checked={showPassword}
                          />
                          <span style={{userSelect: "none"}}>show Passoword</span>
                        </div>
                        <div className="mt-10">
                          <SubmitButton
                            text={"Update Profile"}
                            submit={false}
                            className={"bg-red-500"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
