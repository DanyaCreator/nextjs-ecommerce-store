import * as z from 'zod';

export const ReviewFormSchema = z.object({
  text: z.string().min(1),
  name: z.string().min(1),
  rating: z.number().default(1),
  saveName: z.boolean().default(false),
});
