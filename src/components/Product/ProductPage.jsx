import React from "react";
import Tabs from "./Tabs";
import Products from "./Products";
import { MdArrowForwardIos } from "react-icons/md";

const ProductPage = () => {
  return (
    <div className="md:mt-[100px] mt-[50px]">
      <div className="wrapper">
        <Tabs/>
        <Products/>
        <div className="flex justify-center items-center gap-5 my-10 font-medium text-accent">
          <button className="bg-primary rounded-full p-4 w-12 h-12 overflow-hidden flex justify-center items-center border-2 border-primary hover:bg-primary">01</button>
          <button className="rounded-full p-4 w-12 h-12 overflow-hidden flex justify-center items-center border-2 border-primary hover:bg-primary">02</button>
          <button className="rounded-full p-4 w-12 h-12 overflow-hidden flex justify-center items-center border-2 border-primary hover:bg-primary">03</button>
          <button className="rounded-full w-12 h-12 overflow-hidden flex justify-center items-center border-2 border-primary hover:bg-primary"><MdArrowForwardIos/></button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
