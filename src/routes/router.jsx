import { Home } from '@/pages/Home';
import MyPage from '@/pages/Mypage/MyPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);
