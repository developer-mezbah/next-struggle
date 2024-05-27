import React from "react";
import Navbar from "@/DasComponent/Navbar/Navbar";
import Footer from "@/DasComponent/Others/Footer";
import "./style.css";
import PrivateRoute from "@/utils/PrivateRoute";
import { Theme } from "@/utils/TableTheme";


export default function Layout({ children }) {
  return (
    <PrivateRoute>
      <div className="flex">
        <div className="bg-bgDark min-h-screen">
          <Navbar />
        </div>
        <div className="w-full mt-[65px]">
          <div className="bg-[url('/images/dashboard-bg.jpg')] bg-fixed bg-center bg-no-repeat bg-cover min-h-[88vh]">
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
