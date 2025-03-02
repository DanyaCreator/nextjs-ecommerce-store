import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { LoginDTO } from '@/features/auth';
import { db } from './lib';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        // TODO: add validation
        if (credentials) {
          const { email, password } = credentials as LoginDTO;

          const user = await db.user.findUnique({ where: { email } });
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
