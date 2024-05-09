import Paths from './paths';
import { RouteObject } from 'react-router-dom';
import AuthLayout from '@/components/layouts/auth-layout';
import authRoutes from './auth-routes';
interface Paths {
  AUTH: string;
}

const routes: RouteObject[] = [
  { path: Paths.AUTH, element: <AuthLayout />, children: authRoutes },
];

export default routes;
