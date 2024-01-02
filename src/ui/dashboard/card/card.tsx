'use client';

import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';
import { usePathname } from 'next/navigation';

export type CardProps = {
  title: string;
  number: number;
  change: number;
};

const Card = ({ title, number, change }: CardProps) => {
  // const pathname = usePathname();

  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{title}</span>
        <span className={styles.number}>{number}</span>
        <span className={styles.detail}>
          <span className={change > 0 ? styles.positive : styles.negative}>
            {change}%
          </span>{' '}
          {change > 0 ? 'more' : 'less'} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
