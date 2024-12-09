import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';

import * as z from 'zod';
import { dmSans } from '@/shared/assets/fonts';
import { useToastStore } from '@/shared/model/stores';
import { RoundedButton } from '@/shared/ui/buttons';
import {
  CheckboxField,
  TextareaField,
  TextField,
} from '@/shared/ui/form-fields';
import { postReview } from '../api';
import { ReviewFormSchema } from '../model';
import { ReviewRating } from './review-rating';

type ProductReviewFormProps = {
  productId: string;
  fetchReviews: () => Promise<void>;
};

export const ProductReviewForm = ({
  productId,
  fetchReviews,
}: ProductReviewFormProps) => {
  const toastStore = useToastStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ReviewFormSchema>>({
    resolver: zodResolver(ReviewFormSchema),
    defaultValues: {
      name: localStorage.getItem('review-name') ?? '',
      text: '',
      rating: 1,
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: z.infer<typeof ReviewFormSchema>) => {
    startTransition(async () => {
      try {
        const { saveName, ...reviewData } = data;

        await postReview(productId, reviewData);

        if (saveName) localStorage.setItem('review-name', reviewData.name);

        toastStore.onOpen('Review was sent!', 'success');

        await fetchReviews();
      } catch (e) {
        console.error(e);
        toastStore.onOpen('Review was rejected...', 'error');
      }
    });
  };

  return (
    <form
      className='flex-1 flex flex-col gap-[46px]'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col w-full gap-[11px]'>
        <h3 className={`${dmSans.className} text-black font-normal`}>
          Add a Review
        </h3>
        <div className={`${dmSans.className} font-normal`}>
          Required fields are marked *
        </div>
      </div>
      <Controller
        control={control}
        name='text'
        render={({ field }) => (
          <TextareaField
            label='Your review*'
            disabled={isPending}
            error={errors.text?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='name'
        render={({ field }) => (
          <TextField
            label='Your name*'
            disabled={isPending}
            error={errors.name?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='saveName'
        render={({ field }) => (
          <CheckboxField
            label='Save my name, and website in this browser for the next time I comment'
            disabled={isPending}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='rating'
        render={({ field }) => (
          <ReviewRating
            value={field.value}
            onChange={(v) => {
              if (!v) return;

              field.onChange(v);
            }}
          />
        )}
      />
      <RoundedButton
        text='Submit'
        style={{ width: 'fit-content' }}
        type='submit'
      />
    </form>
  );
};
