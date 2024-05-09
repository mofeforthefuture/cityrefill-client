import { userSchema } from '@/helpers/schema';
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

export default function RegisterForm() {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone_number: '',
    },
  });
  function onSubmit(values: z.infer<typeof userSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Card className='w-[400px] min-h-[380px]'>
      <CardHeader>
        <CardTitle className='text-2xl'>Register</CardTitle>
        <CardDescription>Hi there, Can't wait to have you!!</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormInput
              control={form.control}
              name='first_name'
              label='Firstname'
              placeholder='Eyimofe'
              autoComplete='given-name'
            />
            <FormInput
              control={form.control}
              name='last_name'
              label='Lastname'
              placeholder='Omotayo'
              autoComplete='family-name'
            />
            <FormInput
              control={form.control}
              name='email'
              label='Email'
              placeholder='mofe@org.com'
              autoComplete='email'
            />
            <FormInput
              control={form.control}
              name='phone_number'
              label='Phone Number'
              placeholder='081xxxxxxxx'
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
