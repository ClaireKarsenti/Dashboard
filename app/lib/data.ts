import { User } from './models';
import { connectToDB } from './utils';

export type FetchUsersProps = {
  query: string;
};

export const fetchUsers = async ({ query }: FetchUsersProps) => {
  const regex = new RegExp(query, 'i');

  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } });

    return { users };
  } catch (err) {
    console.log(err);
    throw new Error('❗️Failed to fetch users!');
  }
};
