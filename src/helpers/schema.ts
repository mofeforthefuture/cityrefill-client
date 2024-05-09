import { z } from 'zod';

const userSchema = z.object({
  first_name: z
    .string({ required_error: 'First name is required' })
    .trim()
    .min(3, { message: 'First name must be 3 or more characters long' }),
  last_name: z
    .string({ required_error: 'Last name is required' })
    .trim()
    .min(3, { message: 'Last name must be 3 or more characters long' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  phone_number: z.string({ required_error: 'Phone number is required' }),
  country: z.string().optional(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be 6 or more characters long' }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be 6 or more characters long' }),
});

export { userSchema, loginSchema };
