import { z } from 'zod';

export const personalInfoSchema = z.object({
  fullName: z.string().trim().min(2, 'Name must be at least 2 characters.').max(80, 'Name must be 80 characters or fewer.'),
  email: z.string().trim().min(1, 'Email is required.').email('Please enter a valid email address.').max(120, 'Email must be 120 characters or fewer.'),
  phone: z.string().trim().regex(/^\+?[1-9][\d\s-]{6,17}\d$/, 'Please enter a valid phone number.'),
});

export const accountDetailsSchema = z.object({
  username: z.string().trim().min(3, 'Username must be at least 3 characters.').max(20, 'Username must be 20 characters or fewer.').regex(/^[a-zA-Z0-9_]+$/, 'Use letters, numbers, and underscores only.'),
  password: z.string().min(8, 'Password must be at least 8 characters.').max(72, 'Password must be 72 characters or fewer.'),
  confirmPassword: z.string().min(1, 'Please confirm your password.'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match.',
  path: ['confirmPassword'],
});

export const onboardingSchema = personalInfoSchema.merge(
  z.object({
    username: z.string().trim().min(3, 'Username must be at least 3 characters.').max(20, 'Username must be 20 characters or fewer.').regex(/^[a-zA-Z0-9_]+$/, 'Use letters, numbers, and underscores only.'),
    password: z.string().min(8, 'Password must be at least 8 characters.').max(72, 'Password must be 72 characters or fewer.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
  }),
).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match.',
  path: ['confirmPassword'],
});

export const defaultValues = {
  fullName: '',
  email: '',
  phone: '',
  username: '',
  password: '',
  confirmPassword: '',
};
