import Link from 'next/link';
import { cards, fetchTransactions } from '../lib/data';
import Card from '../ui/dashboard/card/card';
import Chart from '../ui/dashboard/chart/chart';
import styles from '../ui/dashboard/dashboard.module.css';
import RightBar from '../ui/dashboard/rightbar/rightbar';
import Transactions from '../ui/dashboard/transactions/transactions';
import { ItemsProps } from './users/page';

export default async function Dashboard({ searchParams }: ItemsProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  const { transactions } = await fetchTransactions({ query, page });

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Link
              href={
                item.title === 'Total Users'
                  ? '/dashboard/users'
                  : item.title === 'Stock'
                  ? '/dashboard/products'
                  : '/dashboard/revenue'
              }
              key={item.id}
            >
              <Card
                key={item.id}
                title={item.title}
                number={item.number}
                change={item.change}
              />{' '}
            </Link>
          ))}
        </div>
        <Transactions transactions={transactions} />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}
