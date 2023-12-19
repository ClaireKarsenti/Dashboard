import { Product, User } from './models';
import { connectToDB } from './utils';

export type FetchItemsProps = {
  query: string;
  page: number;
};

export const fetchUsers = async ({ query, page }: FetchItemsProps) => {
  const regex = new RegExp(query, 'i');
  console.log('page', typeof page);
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
