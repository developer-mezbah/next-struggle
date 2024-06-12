"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import {
  MdArrowForwardIos,
  MdFolderDelete,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import client_api from "@/Helper/api_fetch";
import { useRouter } from "next/navigation";

const AllImages = ({ data }) => {
const router = useRouter()


  const [currentPage, setCurrentPage] = useState(1);

  const recordPerPage = 15;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="md:p-10 p-5">
      <div className="gallery-images">
        {records?.map((item) => (
          <div key={item?._id} className="box">
            <div className="group cursor-pointer relative">
              <Image
                width={500}
                height={500}
                alt="Struggle style"
                src={item?.img}
                className="w-full h-full"
              />
              <div
                className="w-full absolute top-[100%] left-0 right-0 bottom-0 group-hover:top-0"
                style={{
                  transition: ".5s all ease",
                  background: "rgba(0, 0, 0, .5)",
                }}
              >
                <div className="text-6xl group-hover:flex items-center justify-center h-full hidden text-red-500">
                  <MdFolderDelete onClick={()=> {
                    window.open(item?.imgDeleteUrl, "_blank")
                    client_api.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/gallary?id=${item?._id}`).then(res => {
                        router.refresh()
                    })
                  }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center md:gap-5 gap-2 my-10 font-medium text-[#A3AED1]">
        <button
          onClick={prePage}
          className="rounded-full w-12 h-12 overflow-hidden flex justify-center items-center border-2 border-[#6a4ea5] hover:bg-[rgb(106,78,165)]"
        >
          <MdOutlineArrowBackIosNew />
        </button>
        {numbers.map((n, i) => (
          <button
            onClick={() => changeCPage(n)}
            key={i}
            className={`${
              currentPage === n ? "bg-[#6d3bda]" : ""
            } rounded-full p-4 w-12 h-12 overflow-hidden flex justify-center items-center border-2  border-[#6a4ea5] hover:bg-[rgb(106,78,165)]`}
          >
            {n}
          </button>
        ))}
        <button
          onClick={nextPage}
          className="rounded-full w-12 h-12 overflow-hidden flex justify-center items-center border-2  border-[#6a4ea5] hover:bg-[rgb(106,78,165)]"
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default AllImages;
