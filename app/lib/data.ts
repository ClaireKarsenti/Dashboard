import { Product, User } from './models';
import { connectToDB } from './utils';

export type FetchItemsProps = {
  query: string;
  page: number;
};

export const fetchUsers = async ({ query, page }: FetchItemsProps) => {
  const regex = new RegExp(query, 'i');
  const USER_PER_PAGE = 5;

  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } })
      .limit(USER_PER_PAGE)
      .skip(USER_PER_PAGE * (page - 1));

    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();

    return { users, count };
  } catch (err) {
    console.log(err);
    throw new Error('❗️Failed to fetch users!');
  }
};

export const fetchProducts = async ({ query, page }: FetchItemsProps) => {
  const regex = new RegExp(query, 'i');

  const PRODUCT_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(PRODUCT_PER_PAGE)
      .skip(PRODUCT_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error('❗️Failed to fetch products!');
  }
};
