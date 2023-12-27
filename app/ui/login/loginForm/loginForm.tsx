'use client';

import { authenticate } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import styles from './loginForm.module.css';

const initialState = undefined;

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, initialState);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;
