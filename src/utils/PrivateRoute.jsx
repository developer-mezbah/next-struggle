"use client";
import { AdminContext } from "@/Context/AdminContext";
import Loading from "@/components/Loading/Loading";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AdminContext);
  const router = useRouter();
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return router.push("/login")
};

export default PrivateRoute;
