import { deleteUser } from '@/src/lib/actions';
import { fetchUsers } from '@/src/lib/data';
import Pagination from '@/src/components/layout/dashboard/pagination/pagination';
import Search from '@/src/components/layout/dashboard/search/search';
import styles from '@/src/components/ui/dashboard/users/users.module.css';
import NoAvatar from '@/public/noavatar.png';
import { User, ItemsProps } from '../users/page';
import Image from 'next/image';
import Link from 'next/link';

export default async function TeamsPage({ searchParams }: ItemsProps) {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  const { users, count }: any = await fetchUsers({ query, page });

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a member..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users?.map(
              (user: User) =>
                user.isAdmin && (
                  <tr key={user.id}>
                    <td>
                      <div className={styles.user}>
                        <Image
                          src={user.img || NoAvatar}
                          alt="profile picture"
                          width={40}
                          height={40}
                          className={styles.userImage}
                        />
                        {user.username}
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.createdAt?.toString().slice(4, 15)}</td>
                    <td>Admin</td>
                    <td>{user.isActive ? 'active' : 'passive'}</td>
                    <td>
                      <div className={styles.buttons}>
                        <Link href={`/dashboard/users/${user.id}`}>
                          <button className={`${styles.button} ${styles.view}`}>
                            View
                          </button>
                        </Link>
                        <form action={deleteUser}>
                          <input type="hidden" name="id" value={user.id} />
                          <button
                            className={`${styles.button} ${styles.delete}`}
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                )
            )
          ) : (
            <tr>
              <td colSpan={6}>No members found</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}
