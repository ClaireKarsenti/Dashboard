import { Product, User } from './models';
import { connectToDB } from './utils';

export type FetchItemsProps = {
  query: string;
  page: number;
};

export const fetchUsers = async ({ query, page }: FetchItemsProps) => {
  const regex = new RegExp(query, 'i');

  const USER_PER_PAGE = process.env.USER_PER_PAGE
    ? parseInt(process.env.USER_PER_PAGE)
    : 5;

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

export const fetchUser = async (id: string) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error('❗️Failed to fetch user!');
  }
};

export const fetchProducts = async ({ query, page }: FetchItemsProps) => {
  const regex = new RegExp(query, 'i');

  const PRODUCT_PER_PAGE = process.env.PRODUCT_PER_PAGE
    ? parseInt(process.env.PRODUCT_PER_PAGE)
    : 5;

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

export const fetchProduct = async (id: string) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error('❗️Failed to fetch user!');
  }
};

export const cards = [
  {
    id: 1,
    title: 'Total Users',
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: 'Stock',
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: 'Revenue',
    number: 6.642,
    change: 18,
  },
];
