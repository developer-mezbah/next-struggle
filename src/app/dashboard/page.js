import Card from "@/DasComponent/DashboardHome/Card/card";
import styles from "../../DasComponent/DashboardHome/dashboard.module.css";
import Transaction from "@/DasComponent/DashboardHome/Transaction/Transaction";
import RightBar from "@/DasComponent/DashboardHome/Rightbar/Rightbar";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        {/* <Chart /> */}
      </div>
      <div className={styles.side+" lg:block hidden"}>
        <RightBar />
      </div>
    </div>
  );
};

export default page;
