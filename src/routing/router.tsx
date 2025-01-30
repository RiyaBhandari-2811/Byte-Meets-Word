import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/layout/Layout';
import routes from '@routing/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map(({ path, element }) => ({ path, element })),
  },
]);

export default router;
