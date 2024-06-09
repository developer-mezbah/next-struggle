import "./globals.css";
import "aos/dist/aos.css";
import AosHook from "@/utils/AosHook";
import AdminContextProvider from "@/Context/AdminContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Struggle | Home",
  description: "Quality Textiles And Apparel With Efficiency & Sustainability",
  openGraph: {
    title: "",
    images: [],
    description: "",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon" type="image/x-icon"
          href="/favicon/favicon.ico"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <AdminContextProvider>
          <AosHook>{children}</AosHook>
        </AdminContextProvider>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
