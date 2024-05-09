import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className='bg-slate-50 flex h-screen w-screen flex-row'>
      <div className='bg-black h-screen w-2/5 max-md:hidden '></div>
      <div className='bg-slate-50 flex justify-center h-screen max-md:w-full w-3/5'>
        <Suspense fallback={<h1 className='text-black'>...loading</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
