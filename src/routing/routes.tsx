import { useParams } from 'react-router-dom';

import Articles from '@pages/Articles';
import Contact from '@pages/Contact';
import Home from '@pages/Home';
import Tags from '@/pages/tags/Tags';
import Courses from '@pages/Courses';
import { JSX } from 'react';

const TagsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Showing results for: {id}</h1>
    </div>
  );
};

interface RouteType {
  path: string;
  element: JSX.Element;
  name: string;
  hidden?: boolean;
}

const routes: RouteType[] = [
  { path: '/', element: <Home />, name: 'Home', hidden: true },
  { path: '/articles', element: <Articles />, name: 'Articles' },
  { path: '/tags', element: <Tags />, name: 'Tags' },
  { path: '/tags/:id', element: <TagsPage />, name: 'TagsPage', hidden: true },
  { path: '/courses', element: <Courses />, name: 'Courses' },
  { path: '/contact', element: <Contact />, name: 'Contact', hidden: true },
];

export type { RouteType };

export default routes;
