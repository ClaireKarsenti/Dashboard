import Chart from '@/src/components/layout/dashboard/chart/chart';
import styles from '@/src/components/layout/dashboard/dashboard.module.css';

export default async function ReportsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Chart />
      </div>
    </div>
  );
}
