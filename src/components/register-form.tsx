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
import { registerAction } from '@/actions/auth.action';
import { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [responseErr, setResponseErr] = useState<string | null>(null);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const response = await registerAction(values);
    console.log(response);
    if (response?.data.error) {
      setResponseErr(response.data.error);
    } else {
      console.log(response);
      toast(response.data.message, {
        description: 'Well done!! you can now login.',
        action: {
          label: 'Login',
          onClick: () => navigate('/auth/login'),
        },
      });
    }
  }
  return (
    <Card className='w-[400px] min-h-[380px]'>
      <CardHeader>
        <CardTitle className='text-2xl'>Register</CardTitle>
        <CardDescription>Hi there, Can't wait to have you!!</CardDescription>
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
