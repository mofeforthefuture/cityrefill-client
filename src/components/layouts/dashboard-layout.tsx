import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='bg-slate-50 flex h-screen w-screen flex-row'>
      <Suspense fallback={<h1 className='text-black'>...loading</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
