import PageTitle from "@/DasComponent/Others/PageTitle";
import SubmitButton from "@/DasComponent/Others/SubmitButton";
import Image from "next/image";
import React from "react";

const MyProfile = () => {
  return (
    <div>
      <PageTitle text={"Profile Information"} />
      <div>
        <div className=" mx-[30px] mt-[40px]">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-6">
              <div className=" rounded-xl dashboard-form-bg p-[30px] text-textColor">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src="/images/avatar.jpg"
                    alt=""
                    className="rounded-full w-[80px] h-[80px] object-cover"
                  />
                </div>
                <div className="mt-8 grid gap-2">
                  <p>
                    <strong>Full Name:</strong>
                  </p>
                  <p>
                    <strong>Email:</strong> admin@lariv.com
                  </p>
                  <p>
                    <strong>Mobile Number:</strong>{" "}
                  </p>
                  <p>
                    <strong>Age:</strong>{" "}
                  </p>
                  <p>
                    <strong>Last Profile Update:</strong> 2/22/2024
                  </p>
                  <br />
                  <div>
                    <button className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 delay-75">
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="rounded-xl  dashboard-form-bg p-[30px]">
                <div />
                <div
                  className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                  role="tabpanel"
                  id="panel:r0:3"
                  aria-labelledby="tab:r0:3"
                >
                  <div className="body__option my-6">
                    <h2 className="text-slate-300 text-2xl font-semibold mb-2">
                      Change details
                    </h2>
                    <div />
                    <div className="intro__form">
                      <div className="p-0">
                        <div className="mt-5 md:grid grid-cols-2 gap-3">
                          <div>
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              First Name:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="First Name"
                              type="text"
                            />
                          </div>
                          <div className="mt-3 md:mt-0">
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm ">
                              Last Name:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="Last Name"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="mt-3 md:grid grid-cols-2 gap-3">
                          <div>
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              Age:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="Age"
                              type="text"
                            />
                          </div>
                          <div className="mt-3 md:mt-0">
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              Mobile Number:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="Mobile Number"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="mt-3">
                          <div>
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm ">
                              Email ID:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              type="email"
                              defaultValue="admin@lariv.com"
                            />
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="mb-3">
                            <label
                              htmlFor="name"
                              className="mb-1 block text-sm  text-slate-200"
                            >
                              Add Profile Image
                            </label>
                            <div className="img__file ">
                              <div>
                                <label className="block mt-2 cursor-pointer ">
                                  <span className="sr-only">
                                    Choose profile photo
                                  </span>
                                  <input
                                    className="block  w-[250px] cursor-pointer text-sm text-slate-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                    type="file"
                                  />
                                </label>
                                <div className="grid grid-cols-3 md:grid-cols-5 gap-1 mt-3 md:w-9/12">
                                  <div className="border w-[100px] h-[100px] rounded-md flex justify-center items-center relative overflow-hidden">
                                    <img
                                      src="/images/avatar.jpg"
                                      className="w-[65px] h-[auto] rounded-md"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 md:grid grid-cols-2 gap-3">
                          <div>
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              Password:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              type="password"
                            />
                          </div>
                          <div className="mt-3 md:mt-0">
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              Confirm Password:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              type="password"
                            />
                          </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
