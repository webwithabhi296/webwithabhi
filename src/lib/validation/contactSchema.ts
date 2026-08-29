import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be at most 50 characters' })
    .regex(/^[A-Za-z\s]+$/,{ message: 'Name can only contain letters and spaces' }),
  email: z.string()
    .email({ message: 'Invalid email address' }),
  phone: z.string()
    .regex(/^\+?[0-9]{10,15}$/, { message: 'Phone must be 10‑15 digits, optional leading +' }),
  service: z.string().nonempty({ message: 'Service is required' }),
  projectScope: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
