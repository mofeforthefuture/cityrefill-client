import Paths from './paths';
import { RouteObject } from 'react-router-dom';
import AuthLayout from '@/components/layouts/auth-layout';
import authRoutes from './auth-routes';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import DashboardPage from '@/pages/dashboard';
interface Paths {
  AUTH: string;
}

const routes: RouteObject[] = [
  { path: Paths.AUTH, element: <AuthLayout />, children: authRoutes },
  {
    path: Paths.HOME,
    element: <DashboardLayout />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
];

export default routes;
