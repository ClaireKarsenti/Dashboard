import styles from '@/src/ui/login/login.module.css';
import LoginForm from '@/src/ui/login/loginForm/loginForm';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
