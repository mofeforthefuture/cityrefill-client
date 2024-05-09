import { RegisterForm } from '@/components';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='flex items-center h-full w-full py-5 flex-col'>
      <div className='w-full flex justify-end px-10 basis-1/12 '>
        <Button variant='ghost' asChild>
          <Link to='/auth/login'>Login</Link>
        </Button>
      </div>
      <div className=' w-full items-center justify-center flex basis-10/12'>
        <RegisterForm />
      </div>
    </div>
  );
}
