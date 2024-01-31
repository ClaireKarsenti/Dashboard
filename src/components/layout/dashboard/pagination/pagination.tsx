'use client';

import styles from './pagination.module.css';
// @ts-ignore
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  count: number;
};

const Pagination = ({ count }: PaginationProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams?.get('page') || '1';

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 5;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: 'prev' | 'next') => {
    type === 'prev'
      ? params.set('page', String(parseInt(page) - 1))
      : params.set('page', String(parseInt(page) + 1));
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
