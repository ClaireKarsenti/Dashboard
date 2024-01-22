import { auth, signOut } from '@/src/lib/auth';
import NoAvatar from '@/public/noavatar.png';
import Image from 'next/image';
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from 'react-icons/md';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import Link from 'next/link';

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();

  return (
    <div className={styles.container}>
      {user && (
        <Link href="/dashboard">
          <div className={styles.user}>
            <Image
              className={styles.userImage}
              src={user?.img || NoAvatar}
              alt=""
              width="50"
              height="50"
            />
            <div className={styles.userDetail}>
              <span className={styles.username}>{user?.username}</span>
              <span className={styles.userTitle}>Administrator</span>
            </div>
          </div>
        </Link>
      )}
      <ul className={styles.list}>
        {menuItems.map((category, index) => (
          <li key={index}>
            <span className={styles.cat}>{category.title}</span>
            {category.list.map((item) => (
              <MenuLink
                key={item.title}
                icon={item.icon}
                title={item.title}
                path={item.path}
              />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
