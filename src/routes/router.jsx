import Layout from '@/Layouts/Layout';
import CrudTest from '@/pages/CrudTest/CrudTest';
import { getSessionWithSupabase } from '@/api/api.auth';
import { Home } from '@/pages/Home';
import { LogIn } from '@/pages/LogIn';
import { SignUp } from '@/pages/SignUp';
import { Detail } from '@/pages/detail';
import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { FeedWrite } from '@/pages/FeedWrite/FeedWrite';

export const router = createBrowserRouter([
  { path: '', element: <Home /> },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'my-page'
        // element: <MyPage />
      },
      {
        path: 'detail/:id',
        element: <Detail />
      },
      {
        path: 'fix-my-profile'
        // element: <FixMyProfile />
      },
      { path: 'writingpage', element: <FeedWrite /> }
    ],
    loader: getSessionWithSupabase
  },

  {
    path: '/',
    element: (
      <PublicRoute>
        <Layout />
      </PublicRoute>
    ),
    children: [
      {
        path: 'sign-up',
        element: <SignUp />
      },
      {
        path: 'log-in',
        element: <LogIn />
      }
    ],
    loader: getSessionWithSupabase
  },
  {
    path: '/crudtest',
    element: <CrudTest />
  }
]);
