import { IRootState } from '@/redux/store';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Paths from './paths';

type ProtectedRouteType = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: ProtectedRouteType) => {
  const { user } = useSelector((state: IRootState) => state.user);
  console.log('====================================');
  console.log(user);
  console.log('====================================');
  let location = useLocation();

  if (!user.isAuthenticated) {
    return <Navigate to={Paths.LOGIN} state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
