import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/products/products.module.css';
import NoProduct from '@/public/noproduct.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a products..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={NoProduct}
                  alt="no product image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                MacBook
              </div>
            </td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ipsa ex.
            </td>
            <td>$1999</td>
            <td>13/12/2023</td>
            <td>56</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/testId">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
