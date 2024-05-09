import AuthLayout from '@/components/layouts/auth-layout';
import authRoutes from '@/routes/auth-routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export default function Auth() {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      errorElement: <h1>404</h1>,
      children: authRoutes,
    },
  ]);

  return <RouterProvider router={router} />;
}
