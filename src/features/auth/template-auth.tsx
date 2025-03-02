'use client';

import { useRouter } from 'next/navigation';

import {
  UiTabs,
  UiTabsContent,
  UiTabsList,
  UiTabsTrigger,
} from '@/shared/ui/tabs';
import { RegisterForm } from './ui';

export const TemplateAuth = ({
  authType,
}: {
  authType: 'login' | 'register';
}) => {
  const router = useRouter();

  return (
    <div className='container flex justify-center items-center'>
      <main className='w-fit'>
        <h1 className='text-center mt-[135px] mb-16'>My account</h1>
        <UiTabs defaultValue={authType}>
          <UiTabsList className='w-[500px] h-[60px] mb-32'>
            <UiTabsTrigger
              className='flex-1 h-full disabled:opacity-100'
              value='login'
              disabled={authType === 'login'}
              onClick={() => router.push('/login')}>
              Sign in
            </UiTabsTrigger>
            <UiTabsTrigger
              value='register'
              className='flex-1 h-full disabled:opacity-100'
              disabled={authType === 'register'}
              onClick={() => router.push('/register')}>
              Register
            </UiTabsTrigger>
          </UiTabsList>
          <UiTabsContent value='login' />
          <UiTabsContent value='register'>
            <RegisterForm />
          </UiTabsContent>
        </UiTabs>
      </main>
    </div>
  );
};
