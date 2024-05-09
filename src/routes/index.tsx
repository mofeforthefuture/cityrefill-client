import Paths from './paths';
import { RouteObject } from 'react-router-dom';
import Login from '@/pages/authentication/login';
import { lazy } from 'react';

interface Paths {
  LOGIN: string;
  REGISTER: string;
}
const Register = lazy(() => import('@/pages/authentication/register'));
const routes: RouteObject[] = [
  { path: Paths.LOGIN, element: <Login /> },
  { path: Paths.REGISTER, element: <Register /> },
];

export default routes;
