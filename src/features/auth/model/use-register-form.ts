import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { register } from '../api';

const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Имя должно содержать хотя бы 2 символа' }),
    email: z.string().email({ message: 'Неверный формат электронной почты' }),
    password: z
      .string()
      .min(8, { message: 'Пароль должен содержать хотя бы 8 символов' })
      .regex(/\d/, { message: 'Пароль должен содержать хотя бы одну цифру' }),
    confirmPassword: z.string(),
  })
  .required()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Пароли не совпадают',
        path: ['confirmPassword'],
      });
    }
  });

export type RegisterDTO = z.input<typeof RegisterSchema>;

export const useRegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] =
    useState(false);

  const getPasswordFieldVisibility = useCallback(
    (passwordType: 'password' | 'confirmPassword') => {
      if (passwordType === 'password') return isPasswordVisible;
      else return isPasswordConfirmVisible;
    },
    [isPasswordVisible, isPasswordConfirmVisible]
  );

  const changePasswordVisibility = useCallback(
    (type: 'password' | 'confirmPassword') => {
      if (type === 'password') setIsPasswordVisible((prevState) => !prevState);
      else setIsPasswordConfirmVisible((prevState) => !prevState);
    },
    [setIsPasswordVisible, setIsPasswordConfirmVisible]
  );

  const onSubmit = useCallback(async (data: z.infer<typeof RegisterSchema>) => {
    console.log(data);
    await register(data);
  }, []);

  return {
    form,
    onSubmit,
    getPasswordFieldVisibility,
    changePasswordVisibility,
  };
};
