import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='bg-black h-screen w-screen'>
      <Suspense fallback={<h1 className='text-slate-50'>...loading</h1>}>
        <Outlet />
        <div className='bg-white py-24 w-screen'></div>
      </Suspense>
    </div>
  );
}
