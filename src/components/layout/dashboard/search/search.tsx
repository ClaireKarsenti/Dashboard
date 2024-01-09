'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MdSearch } from 'react-icons/md';
import { useDebouncedCallback } from 'use-debounce';
import styles from './search.module.css';

export type SearchProps = {
  placeholder: string;
};

const Search = ({ placeholder }: SearchProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);

      params.set('page', '1');

      const inputValue = e.target.value;

      if (inputValue) {
        inputValue.length > 2 && params.set('query', inputValue);
      } else {
        params.delete('query');
      }

      replace(`${pathname}?${params}`);
    },
    300
  );

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
