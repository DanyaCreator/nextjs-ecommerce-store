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
import { useRegisterForm } from '../model';

export const RegisterForm = () => {
  const {
    form,
    onSubmit,
    getPasswordFieldVisibility,
    changePasswordVisibility,
  } = useRegisterForm();

  return (
    <UiForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='w-full flex flex-col items-center gap-12 mb-16'>
          <UiFormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <UiFormItem className='w-full'>
                <UiFormControl>
                  <UiInput
                    placeholder='Name'
                    data-invalid={!!form.formState.errors.name}
                    {...field}
                  />
                </UiFormControl>
                {form.formState.errors.name && (
                  <UiFormMessage>
                    {form.formState.errors.name.message}
                  </UiFormMessage>
                )}
              </UiFormItem>
            )}
          />
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
                    type={
                      getPasswordFieldVisibility('password')
                        ? 'text'
                        : 'password'
                    }
                    iconSlot={
                      getPasswordFieldVisibility('password') ? (
                        <EyeOffIcon
                          className='cursor-pointer'
                          onClick={() => changePasswordVisibility('password')}
                        />
                      ) : (
                        <EyeIcon
                          className='cursor-pointer'
                          onClick={() => changePasswordVisibility('password')}
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
          <UiFormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <UiFormItem className='w-full'>
                <UiFormControl>
                  <UiInput
                    placeholder='Confirm password'
                    data-invalid={!!form.formState.errors.confirmPassword}
                    type={
                      getPasswordFieldVisibility('confirmPassword')
                        ? 'text'
                        : 'password'
                    }
                    iconSlot={
                      getPasswordFieldVisibility('confirmPassword') ? (
                        <EyeOffIcon
                          className='cursor-pointer'
                          onClick={() =>
                            changePasswordVisibility('confirmPassword')
                          }
                        />
                      ) : (
                        <EyeIcon
                          className='cursor-pointer'
                          onClick={() =>
                            changePasswordVisibility('confirmPassword')
                          }
                        />
                      )
                    }
                    {...field}
                  />
                </UiFormControl>
                {form.formState.errors.confirmPassword && (
                  <UiFormMessage>
                    {form.formState.errors.confirmPassword.message}
                  </UiFormMessage>
                )}
              </UiFormItem>
            )}
          />
        </div>
        <UiButton type='submit'>SIGN IN</UiButton>
      </form>
    </UiForm>
  );
};
