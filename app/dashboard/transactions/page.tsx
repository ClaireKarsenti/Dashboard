import { fetchTransactions } from '@/src/lib/data';
import Search from '@/src/components/layout/dashboard/search/search';
import Transactions from '@/src/components/layout/dashboard/transactions/transactions';
import styles from '@/src/components/layout/dashboard/transactions/transactions.module.css';
import { ItemsProps } from '../users/page';

export default async function TransactionsPage({ searchParams }: ItemsProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  const { transactions, count } = await fetchTransactions({ query, page });

  const newTransactionsArray = transactions.map((item) => {
    const { _id, ...rest } = item._doc; // Destructure _id from _doc
    return {
      _id: _id.toString(),
      ...rest,
    };
  });

  return (
    <div className={styles.container_page}>
      <div className={styles.top}>
        <Search placeholder="Search a transaction..." />
      </div>
      <Transactions transactions={newTransactionsArray} count={count} />
    </div>
  );
}
