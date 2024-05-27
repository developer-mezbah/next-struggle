import { SiPowerpages } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { FcAbout } from "react-icons/fc";

export const DasNavData = [
  {
    pageName: "main", // Not change able
    pageTitle: "Dashboards",
    icon: <LuLayoutDashboard />,
    subItems: [
      {
        name: "Home",
        url: "/dashboard",
      },
    ],
  },
  {
    pageName: "pages",
    pageTitle: "Home",
    icon: <FaHome />,
    subItems: [
      {
        name: "Banner",
        url: "/dashboard/home/banner",
      },
      {
        name: "Forms",
        url: "/dashboard/home-page",
      },
      {
        name: "not-found",
        url: "/dashboard/not-found",
      },
      {
        name: "Table",
        url: "/dashboard/table",
      },
    ],
  },
  {
    pageName: "personal info",
    pageTitle: "Profile",
    icon: <ImProfile />,
    subItems: [
      {
        name: "My Profile",
        url: "/dashboard/my-profile",
      },
      {
        name: "Inbox",
        url: "/dashboard/inbox",
      },
    ],
  },
  {
    pageName: "Frontend",
    pageTitle: "About Us",
    icon: <FcAbout />,
    subItems: [
      {
        name: "Create item",
        url: "/dashboard/about-us/create-item",
      },
      {
        name: "All Items",
        url: "/dashboard/about-us/all-itmes",
      },
    ],
  },
];
