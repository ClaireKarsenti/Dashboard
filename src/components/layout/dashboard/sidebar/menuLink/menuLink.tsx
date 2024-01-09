'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './menuLink.module.css';

type MenuLinkProps = {
  icon: JSX.Element;
  title: string;
  path: string;
};

export default function MenuLink({ icon, title, path }: MenuLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${styles.container} ${pathname === path && styles.active}`}
    >
      {icon}
      {title}
    </Link>
  );
}
