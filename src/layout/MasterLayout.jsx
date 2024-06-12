import { cookies } from "next/headers";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MasterLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MasterLayout;
