'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Pagination from '../pagination/pagination';
import styles from './transactions.module.css';

type Transaction = {
  _id: string;
  username: string;
  status: string;
  createdAt?: Date;
  amount: number;
};

export default function Transactions({
  transactions,
  count,
}: {
  transactions: Transaction[];
  count?: number;
}) {
  const pathname = usePathname();
  const isDashboardPage = pathname === '/dashboard';

  return (
    <div className={styles.container}>
      {isDashboardPage && <h2 className={styles.title}>Latest Transactions</h2>}
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactions && transactions.length > 0 ? (
            transactions?.map((transaction: Transaction) => (
              <tr key={transaction._id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src="/noavatar.png"
                      alt="no avatar image"
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    {transaction.username}
                  </div>
                </td>
                <td>
                  <span
                    className={`${styles.status} ${
                      transaction.status === 'cancelled'
                        ? styles.cancelled
                        : transaction.status === 'pending'
                        ? styles.pending
                        : styles.done
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td>{transaction.createdAt?.toString().slice(4, 15)}</td>
                <td>${transaction.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
      {!isDashboardPage && count !== undefined && <Pagination count={count} />}
    </div>
  );
}
