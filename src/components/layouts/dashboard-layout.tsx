import { sideBarArr } from '@/constants/data';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import OrganisationSwitcher from '../dashboard/organisation-switcher';

export default function DashboardLayout() {
  return (
    <div className='bg-slate-50 flex h-screen w-screen flex-row'>
      <div className='h-screen w-1/5 bg-blue-900 py-5 flex flex-col items-center '>
        <OrganisationSwitcher />
        {sideBarArr.map((dashItem) => (
          <NavLink key={dashItem.text} to={dashItem.to} className={'w-full'}>
            {({ isActive, isPending }) => (
              <div
                className={
                  isActive
                    ? 'flex-row flex h-16 items-center px-2 bg-slate-100 border-r-8 '
                    : isPending
                    ? 'pending flex-row flex h-16 items-center'
                    : 'inactive flex-row flex h-16 items-center px-2'
                }
              >
                {dashItem.icon(isActive)}
                <h1
                  className={
                    isActive ? 'mx-2 text-blue-900' : 'mx-2 text-slate-100'
                  }
                >
                  {dashItem.text}
                </h1>
              </div>
            )}
          </NavLink>
        ))}
      </div>
      <div className='bg-slate-50 flex justify-center h-screen max-md:w-full w-4/5'>
        <Suspense fallback={<h1 className='text-black'>...loading</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
