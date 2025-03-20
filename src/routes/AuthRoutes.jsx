import { lazy } from 'react';
import PublicRoute from '../components/publicRoute/PublicRoute';
import { Navigate } from 'react-router-dom';
import Loadable from '../components/shared/Loadable';

export const AuthView = Loadable(lazy(() => import('../features/auth/screens/AuthView')));

const AuthRoutes = {
  path: '/',
  element: <PublicRoute />,
  children: [
    {
      path: 'login',
      element: <AuthView />
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />
    }
  ]
};

export default AuthRoutes;
