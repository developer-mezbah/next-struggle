"use server";
import Login from "@/components/LoginAndRegister/Login";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";
import jwt from "jsonwebtoken";

const Token = (accessToken) => {
  "use server";
  var older_token = jwt.sign(
    { foo: accessToken },
    process.env.JWT_SECRET_KEY
  ); //30 seconds
  return older_token;
};


const page = () => {
  return (
    <MasterLayout>
      <Login token={Token} />
    </MasterLayout>
  );
};

export default page;
