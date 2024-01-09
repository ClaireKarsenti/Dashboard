'use client';

import { Toaster } from 'sonner';
import LoginPage from './login/page';

const Homepage = () => {
  return (
    <div>
      <Toaster />
      <LoginPage />
    </div>
  );
};

export default Homepage;
