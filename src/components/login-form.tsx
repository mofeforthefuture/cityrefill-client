import { loginSchema } from '@/helpers/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import FormInput from './form-elements/form-input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { loginAction } from '@/actions/auth.action';
import { useState } from 'react';

export default function LoginForm() {
  const [responseErr, setResponseErr] = useState<string | null>(null);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const response = await loginAction(values);
    if (response.data.error) {
      setResponseErr(response.data.error);
    } else {
      console.log(response);
    }
  }
  return (
    <Card className='w-[400px] min-h-[380px]'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>Welcome back!!</CardDescription>
        {responseErr && (
          <CardDescription className='text-red-600'>
            {responseErr}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormInput
              control={form.control}
              name='email'
              label='Email'
              placeholder='mofe@org.com'
              autoComplete='email'
            />
            <FormInput
              control={form.control}
              name='password'
              label='Password'
              placeholder='******'
              type='password'
            />

            <Button className='w-full ' type='submit'>
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
