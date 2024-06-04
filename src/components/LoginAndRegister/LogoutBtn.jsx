"use client";
import { AdminContext } from "@/Context/AdminContext";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const LogoutBtn = () => {
  const { logOut } = useContext(AdminContext);
  return (
    <div>
      <button
        onClick={() => {
          logOut().then((res) => {
            localStorage.removeItem('token')
            toast.success("Logout success.");
          });
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default LogoutBtn;
