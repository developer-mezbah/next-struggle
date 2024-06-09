import { SiPowerpages } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineContactPhone, MdPrecisionManufacturing } from "react-icons/md";
import { FaNewspaper, FaPersonArrowDownToLine, FaRegNewspaper } from "react-icons/fa6";
import { GrLicense } from "react-icons/gr";
import { GiSwordBrandish } from "react-icons/gi";

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
    ],
  },
  {
    pageName: "product & category",
    pageTitle: "Products",
    icon: <GoProjectSymlink />,
    subItems: [
      {
        name: "All products",
        url: "/dashboard/products/all-products",
      },
      {
        name: "Create products",
        url: "/dashboard/products/create-product",
      },
      {
        name: "Create Category",
        url: "/dashboard/products/create-category",
      },
    ],
  },
  {
    pageName: "Frontend",
    pageTitle: "About Us",
    icon: <FcAbout />,
    subItems: [
      {
        name: "Create Blogs",
        url: "/dashboard/about-us/create-blog",
      },
      {
        name: "All blogs",
        url: "/dashboard/about-us/all-blogs",
      },
      {
        name: "Hero section",
        url: "/dashboard/about-us/hero",
      },
      {
        name: "All Review",
        url: "/dashboard/about-us/all-review",
      },
      {
        name: "Create Review",
        url: "/dashboard/about-us/create-review",
      },
    ],
  },
  {
    pageName: "Contact Us",
    pageTitle: "contact",
    icon: <MdOutlineContactPhone />,
    subItems: [
      {
        name: "Create & update",
        url: "/dashboard/contact-us",
      },
    ],
  },
  {
    pageName: "Frontend Footer",
    pageTitle: "footer",
    icon: <FaPersonArrowDownToLine />,
    subItems: [
      {
        name: "Create & update",
        url: "/dashboard/footer",
      },
    ],
  },
  {
    pageName: "Brands & License",
    pageTitle: "Licenses",
    icon: <GrLicense />,
    subItems: [
      {
        name: "All License",
        url: "/dashboard/license/all-licenses",
      },
      {
        name: "Create license",
        url: "/dashboard/license/create-license",
      },
    ],
  },
  {
    pageName: "News & Articles",
    pageTitle: "News",
    icon: <FaNewspaper />,
    subItems: [
      {
        name: "All newses",
        url: "/dashboard/news/all-news",
      },
      {
        name: "Create news",
        url: "/dashboard/news/create-news",
      },
    ],
  },
  {
    pageName: "Pages",
    pageTitle: "Manufacturing",
    icon: <MdPrecisionManufacturing/>,
    subItems: [
      {
        name: "Create & Update",
        url: "/dashboard/manufacturing",
      },
    ],
  },
  {
    pageName: "Trusted Brands",
    pageTitle: "brands",
    icon: <GiSwordBrandish/>,
    subItems: [
      {
        name: "Create & Delete",
        url: "/dashboard/brands",
      },
    ],
  },
];
