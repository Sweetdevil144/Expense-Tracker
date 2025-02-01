// app/login/page.js
'use client';

import LoginForm from '../components/Auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <LoginForm />
    </div>
  );
}
