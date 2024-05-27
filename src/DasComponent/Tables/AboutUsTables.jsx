"use client"
import Loading from "@/components/Loading/Loading";
import { customStyles } from "@/utils/TableTheme";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrashCan } from "react-icons/fa6";

const AboutUsTables = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);
  if (loader) {
    return <Loading/>;
  }
  const data = [
    {
      name: "Beetlejuice",
      email: "developer.mezbah@gmail.com",
      id: 1,
      createAt: "01/ 01/ 2024",
      DeleteID: 10,
    },
    {
      name: "Mezbah Uddin",
      email: "mk6449248@gmail.com",
      id: 2,
      createAt: "01/ 01/ 2024",
      DeleteID: 10,
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "Email",
      selector: (row) => row?.email,
    },
    {
      name: "View Message",
      selector: (row) => (
        <div className=" cursor-pointer	bg-purple-50 text-purple-600 px-[10px] py-0 rounded-full">
          <Link href={`/dashboard/inbox/details/${row?.id}`}>View</Link>
        </div>
      ),
    },
    {
      name: "Date",
      selector: (row) => row?.createAt.substring(0, 10),
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="p-2 cursor-pointer text-red-400">
          <FaTrashCan onClick={() => DeleteMessage(row?.DeleteID)} />
        </div>
      ),
    },
  ];

  return (
    <section className="md:p-10 p-3">
      <DataTable
        columns={columns}
        data={data}
        pagination
        theme="solarized"
        customStyles={customStyles}
      />
    </section>
  );
};

export default AboutUsTables;
