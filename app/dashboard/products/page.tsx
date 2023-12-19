import { fetchProducts } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import styles from '@/app/ui/dashboard/products/products.module.css';
import Search from '@/app/ui/dashboard/search/search';
import NoProduct from '@/public/noproduct.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { ItemsProps } from '../users/page';

type Product = {
  id: string;
  img?: string;
  title: string;
  description: string;
  price: number;
  createdAt: string;
  stock: number;
  action: string;
};

export default async function ProductsPage({ searchParams }: ItemsProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  const { products, count }: any = await fetchProducts({ query, page });

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
          {products && products.length > 0 ? (
            products?.map((product: Product) => (
              <tr key={product.id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={product.img || NoProduct}
                      alt="product image"
                      width={40}
                      height={40}
                      className={styles.productImage}
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.createdAt?.toString().slice(4, 15)}</td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${product.id}`}>
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
            ))
          ) : (
            <tr>
              <td colSpan={6}>No products found</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}
