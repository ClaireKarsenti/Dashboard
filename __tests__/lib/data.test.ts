import { cards, fetchProduct, fetchUser, fetchUsers } from '@/src/lib/data';
import { Product, User } from '@/src/lib/models';

jest.mock('../../src/lib/utils', () => ({
  connectToDB: jest.fn(),
}));

describe('fetchUsers tests', () => {
  it('fetches users successfully', async () => {
    const query = 'test';
    const page = 1;
    const regex = new RegExp(query, 'i');

    const mockedUser = { _id: '1', username: 'test', email: 'test@test.com' };

    User.find = jest.fn().mockReturnValue({
      limit: jest.fn().mockReturnValue({
        skip: jest.fn().mockReturnValue([mockedUser]),
      }),
      countDocuments: jest.fn().mockReturnValue(1),
    });

    const result = await fetchUsers({ query, page });

    expect(User.find).toHaveBeenCalledWith({ username: { $regex: regex } });
    expect(result.users).toEqual([mockedUser]);
    expect(result.count).toEqual(1);
  });
});

describe('fetchUser tests', () => {
  it('fetches a user successfully by ID', async () => {
    const mockedUserId = 'mockedUserId';
    const mockedUser = {
      _id: mockedUserId,
      username: 'Claire',
      email: 'claire@test.com',
    };

    User.findById = jest.fn().mockResolvedValue(mockedUser);

    const result = await fetchUser(mockedUserId);

    expect(User.findById).toHaveBeenCalledWith(mockedUserId);
    expect(result).toEqual(mockedUser);
  });

  it('throws an error when failing to fetch a user by ID', async () => {
    const mockedUserId = 'mockedUserId';
    const mockedError = new Error('Failed to fetch user');

    User.findById = jest.fn().mockRejectedValue(mockedError);

    await expect(fetchUser(mockedUserId)).rejects.toThrow(
      '❗️Failed to fetch user!'
    );
  });
});

describe('fetchProduct tests', () => {
  it('fetches a product by ID successfully', async () => {
    const productId = 'mockProductId';

    const mockProduct = {
      _id: productId,
      title: 'Mock Product',
      price: 10.99,
    };

    // Mock the database operation
    jest.spyOn(Product, 'findById').mockResolvedValueOnce(mockProduct);

    const result = await fetchProduct(productId);

    expect(result).toEqual(mockProduct);
  });

  it('handles errors when fetching a product', async () => {
    const productId = 'invalidId';
    const errorMessage = '❗️Failed to fetch product!';

    // Mock the database operation to throw an error
    jest
      .spyOn(Product, 'findById')
      .mockRejectedValueOnce(new Error(errorMessage));

    // Call the fetchProduct function and expect it to throw an error
    await expect(fetchProduct(productId)).rejects.toThrow(errorMessage);
  });
});

describe('cards', () => {
  it('contains the correct card data', () => {
    expect(cards).toEqual([
      { id: 1, title: 'Total Users', number: 10.928, change: 12 },
      { id: 2, title: 'Stock', number: 8.236, change: -2 },
      { id: 3, title: 'Revenue', number: 6.642, change: 18 },
    ]);
  });
});
