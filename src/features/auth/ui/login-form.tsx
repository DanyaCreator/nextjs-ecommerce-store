'use client';

import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { UiButton } from '@/shared/ui/button';
import {
  UiForm,
  UiFormControl,
  UiFormField,
  UiFormItem,
  UiFormMessage,
} from '@/shared/ui/form';
import { UiInput } from '@/shared/ui/input';
import { useLoginForm } from '../model';

// TODO: add toast message
export const LoginForm = () => {
  const { form, onSubmit, passwordVisibility, changePasswordVisibility } =
    useLoginForm();

  return (
    <UiForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='w-full flex flex-col items-center gap-12 mb-16'>
          <UiFormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <UiFormItem className='w-full'>
                <UiFormControl>
                  <UiInput
                    placeholder='Email'
                    data-invalid={!!form.formState.errors.email}
                    {...field}
                  />
                </UiFormControl>
                {form.formState.errors.email && (
                  <UiFormMessage>
                    {form.formState.errors.email.message}
                  </UiFormMessage>
                )}
              </UiFormItem>
            )}
          />
          <UiFormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <UiFormItem className='w-full'>
                <UiFormControl>
                  <UiInput
                    placeholder='Password'
                    data-invalid={!!form.formState.errors.password}
                    type={passwordVisibility ? 'text' : 'password'}
                    iconSlot={
                      passwordVisibility ? (
                        <EyeOffIcon
                          className='cursor-pointer'
                          onClick={() => changePasswordVisibility()}
                        />
                      ) : (
                        <EyeIcon
                          className='cursor-pointer'
                          onClick={() => changePasswordVisibility()}
                        />
                      )
                    }
                    {...field}
                  />
                </UiFormControl>
                {form.formState.errors.password && (
                  <UiFormMessage>
                    {form.formState.errors.password.message}
                  </UiFormMessage>
                )}
              </UiFormItem>
            )}
          />
        </div>
        <UiButton type='submit'>SIGN IN</UiButton>
        {/* TODO: reset password */}
      </form>
    </UiForm>
  );
};
