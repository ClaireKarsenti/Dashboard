import { PropsWithChildren } from 'react';
import styles from '@/src/ui/dashboard/dashboard.module.css';
import Navbar from '@/src/ui/dashboard/navbar/navbar';
import Sidebar from '@/src/ui/dashboard/sidebar/sidebar';
import Footer from '@/src/ui/dashboard/footer/footer';

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
