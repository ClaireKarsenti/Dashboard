import { fetchTransactions } from '@/app/lib/data';
import Search from '@/app/ui/dashboard/search/search';
import Transactions from '@/app/ui/dashboard/transactions/transactions';
import styles from '../../ui/dashboard/transactions/transactions.module.css';
import { ItemsProps } from '../users/page';

export default async function TransactionsPage({ searchParams }: ItemsProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  const { transactions, count } = await fetchTransactions({ query, page });

  return (
    <div className={styles.container_page}>
      <div className={styles.top}>
        <Search placeholder="Search a transaction..." />
      </div>
      <Transactions transactions={transactions} count={count} />
    </div>
  );
}
