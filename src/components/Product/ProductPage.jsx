"use client"
import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import Products from "./Products";
import { MdArrowForwardIos } from "react-icons/md";
import { ProductsData } from "@/utils/FakeData/Products";
import { Categories } from "@/utils/FakeData/Categories";

const ProductPage = ({categoryId}) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [catId, setCatId] = useState(categoryId || 1)
  useEffect(() => {
    const filterData = ProductsData.filter(
      (category) => category.categoryId == categoryId
    );
    setData(filterData);
  }, []);

  
  const handleProducts = (id) => {
    setCatId(id)
    const filterData = ProductsData.filter(
      (category) => category.categoryId == id
    );
    setData(filterData);
  };
  return (
    <div className="md:mt-[100px] mt-[50px]">
      <div className="wrapper">
        <Tabs Categories={Categories} categoryId={catId} handleProducts={handleProducts}/>
        <Products data={data}/>

        {/* Pagination  */}
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
