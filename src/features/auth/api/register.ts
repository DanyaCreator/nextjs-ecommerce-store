'use server';

import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { db } from '@/lib';
import { RegisterDTO } from '../model';

// TODO: custom errors
// TODO: add email verification
// TODO: replace to entity/user
export const register = async (values: RegisterDTO) => {
  const { name, email, password } = values;
  const hashedPassword = await bcrypt.hash(password, 10);

  let existingUser: User | null = null;

  try {
    existingUser = await db.user.findUnique({ where: { email } });
  } catch {
    existingUser = null;
  }

  if (existingUser) throw new Error('Пользователь уже существует');

  db.user
    .create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
    .then(() => console.log('successfully saved'));
};
