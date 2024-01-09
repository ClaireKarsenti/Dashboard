import styles from '@/src/components/layout/login/login.module.css';
import LoginForm from '@/src/components/layout/login/loginForm/loginForm';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
