'use server';

import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginDTO } from '../model';

// TODO: validation && toast
export const login = async (values: LoginDTO) => {
  if (!values) return { error: 'Invalid fields' };

  const { email, password } = values;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: 'Successful login!' };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'No access or invalid credentials!' };
        default:
          return { error: 'Something went wrong!' };
      }
    }

    throw error;
  }
};
