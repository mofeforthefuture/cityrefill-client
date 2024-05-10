import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import background from '../../assets/images/lagos.png';

export default function AuthLayout() {
  return (
    <div className='bg-slate-50 flex h-screen w-screen flex-row'>
      <div
        className="h-screen w-2/5 max-md:hidden bg-[url('../../assets/images/lagos.png')]bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <img
          className='w-40'
          src='../src/assets/images/no-bg-logo.png'
          alt='Logo'
        />
      </div>
      <div className='bg-slate-50 flex justify-center h-screen max-md:w-full w-3/5'>
        <Suspense fallback={<h1 className='text-black'>...loading</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
