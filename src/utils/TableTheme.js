"use client";
import { createTheme } from "react-data-table-component";

export const Theme = createTheme(
  "solarized",
  {
    text: {
      primary: "#268bd2",
      secondary: "#2aa198",
    },
    background: {
      default: "#111C43",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);


export const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      color: "#7E5BE2",
      fontSize: "16px",
    },
  },
  cells: {
    style: {
      color: "#A3AED1",
    },
  },
};
