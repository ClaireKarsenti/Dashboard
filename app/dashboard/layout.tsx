import { PropsWithChildren } from 'react';
import styles from '@/src/components/layout/dashboard/dashboard.module.css';
import Navbar from '@/src/components/layout/dashboard/navbar/navbar';
import Sidebar from '@/src/components/layout/dashboard/sidebar/sidebar';
import Footer from '@/src/components/layout/dashboard/footer/footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
