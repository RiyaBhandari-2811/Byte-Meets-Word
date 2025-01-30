import { useParams } from 'react-router-dom';

import Articles from '@pages/Articles';
import Contact from '@pages/Contact';
import Home from '@pages/Home';
import Tags from '@pages/Tags';
import Courses from '@pages/Courses';

const TagsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Showing results for: {id}</h1>
    </div>
  );
};

const routes = [
  { path: '/', element: <Home />, name: 'Home' },
  { path: '/articles', element: <Articles />, name: 'Articles' },
  { path: '/tags', element: <Tags />, name: 'Tags' },
  { path: '/tags/:id', element: <TagsPage />, name: 'TagsPage', hidden: true },
  { path: '/courses', element: <Courses />, name: 'Courses' },
  { path: '/contact', element: <Contact />, name: 'Contact' },
];

export default routes;
