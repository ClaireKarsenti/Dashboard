import Card from '../ui/dashboard/card/card';
import Chart from '../ui/dashboard/chart/chart';
import styles from '../ui/dashboard/dashboard.module.css';
import RightBar from '../ui/dashboard/rightbar/rightbar';
import Transactions from '../ui/dashboard/transactions/transactions';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Card title={"Test"} number={70} change={30} />
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
