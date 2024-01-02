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
  
  const newTransactionsArray = transactions.map((item) => {
    const { _id, ...rest } = item._doc; // Destructure _id from _doc
    return {
      _id: _id.toString(),
      ...rest,
    };
  });

  const getCardUrl = (title: string) => {
    switch (title) {
      case 'Total Users':
        return '/dashboard/users';
      case 'Stock':
        return '/dashboard/products';
      case 'Revenue':
        return '/dashboard/revenue';
      default:
        return '/dashboard';
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Link href={getCardUrl(item.title)} key={item.id}>
              <Card
                key={item.id}
                title={item.title}
                number={item.number}
                change={item.change}
              />{' '}
            </Link>
          ))}
        </div>
        <Transactions transactions={newTransactionsArray} />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}
