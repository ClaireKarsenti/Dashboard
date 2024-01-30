'use client';

import { usePathname } from 'next/navigation';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';
import styles from './navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname?.split('/').pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch data-testid="search-icon" />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} data-testid="chat-icon" />
          <MdNotifications size={20} data-testid="notifications-icon" />
          <MdPublic size={20} data-testid="public-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
