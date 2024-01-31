import { User, Product, Transaction } from '@/src/lib/models';

describe('Mongoose Models Validation', () => {
  it('User Model Validation', async () => {
    const user = new User({
      username: 'claire',
      email: 'claire@example.com',
      password: 'password',
      isAdmin: true,
      isActive: true,
    });

    await expect(user.validate()).resolves.toBeUndefined();
  });

  it('Product Model Validation', async () => {
    const product = new Product({
      title: 'Product 1',
      desc: 'Description of Product 1',
      price: 10,
      stock: 100,
    });

    await expect(product.validate()).resolves.toBeUndefined();
  });

  it('Transaction Model Validation', async () => {
    const transaction = new Transaction({
      username: 'claire',
      status: 'completed',
      amount: 70,
    });

    await expect(transaction.validate()).resolves.toBeUndefined();
  });
});
