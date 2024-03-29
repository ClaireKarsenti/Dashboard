import { updateProduct } from '@/src/lib/actions';
import { fetchProduct } from '@/src/lib/data';
import styles from '@/src/components/layout/dashboard/products/singleProduct/singleProduct.module.css';
import NoAvatar from '@/public/noavatar.png';
import Image from 'next/image';

type SingleProductPageProps = {
  params: {
    id: string;
  };
};

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={NoAvatar} alt="no avatar image" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || 'color'}
          />
          <label>Size</label>
          <textarea name="size" placeholder={product.size || 'size'} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
