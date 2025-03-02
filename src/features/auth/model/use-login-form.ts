import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { login } from '../api';

const LoginSchema = z
  .object({
    email: z.string().email({ message: 'Неверный формат электронной почты' }),
    password: z.string(),
  })
  .required();

export type LoginDTO = z.input<typeof LoginSchema>;

export const useLoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const changePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prevState) => !prevState);
  }, [setIsPasswordVisible]);

  const onSubmit = useCallback(async (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
    await login(data);
  }, []);

  return {
    form,
    onSubmit,
    passwordVisibility: isPasswordVisible,
    changePasswordVisibility,
  };
};
