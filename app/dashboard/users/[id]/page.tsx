import { updateUser } from '@/src/lib/actions';
import { fetchUser } from '@/src/lib/data';
import styles from '@/src/components/layout/dashboard/users/singleUser/singleUser.module.css';
import NoAvatar from '@/public/noavatar.png';
import Image from 'next/image';

type SingleUserPageProps = {
  params: {
    id: string;
  };
};

const SingleUserPage = async ({ params }: SingleUserPageProps) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || NoAvatar} alt="no avatar image" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateUser}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={user.isAdmin}>
              Yes
            </option>
            <option value="false" selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={user.isActive}>
              Yes
            </option>
            <option value="false" selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
