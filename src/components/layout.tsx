import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='bg-slate-50 h-screen w-screen'>
      <Suspense fallback={<h1 className='text-black'>...loading</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
