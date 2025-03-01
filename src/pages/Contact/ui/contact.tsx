'use client';

import { Controller, useForm } from 'react-hook-form';

import { RoundedButton } from '@/shared/ui/buttons';
import { TextField } from '@/shared/ui/form-fields';

type ContactType = {
  firstName: string;
  lastName: string;
  email: string;
  theme: string;
  message: string;
};

export const Contact = () => {
  const { control, handleSubmit } = useForm<ContactType>();

  const onSubmit = (data: ContactType) => {
    // TODO API для отправки сообщений
    console.log(data);
  };

  return (
    <main className={'container pt-[30px] flex flex-col gap-[100px]'}>
      <div className={'flex flex-col items-center gap-[40px]'}>
        <h1>Contact Us</h1>
        <p className={'text-[20px] text-center'}>
          Say Hello send us your thoughts about our products or share
          <br />
          your ideas with our Team!
        </p>
      </div>
      <form
        className={'flex flex-col gap-[90px]'}
        onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={'flex gap-[116px]'}>
          <Controller
            control={control}
            name='firstName'
            render={({ field }) => (
              <TextField
                label={'First name'}
                className={'w-1/2'}
                required={true}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name='lastName'
            render={({ field }) => (
              <TextField
                label={'Last name'}
                className={'w-1/2'}
                required={true}
                {...field}
              />
            )}
          />
        </fieldset>
        <fieldset className={'flex gap-[116px]'}>
          <Controller
            control={control}
            name='email'
            render={({ field }) => (
              <TextField
                label={'Email'}
                className={'w-1/2'}
                required={true}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name='theme'
            render={({ field }) => (
              <TextField
                label={'Theme'}
                className={'w-1/2'}
                required={true}
                {...field}
              />
            )}
          />
        </fieldset>
        <Controller
          control={control}
          name='message'
          render={({ field }) => (
            <TextField label={'Message'} required={true} {...field} />
          )}
        />
        <div className={'p-[0_200px]'}>
          <RoundedButton text={'SEND'} />
        </div>
      </form>
    </main>
  );
};
