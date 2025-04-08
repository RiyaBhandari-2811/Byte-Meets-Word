import Articles from '@/pages/articles/Articles';
import Home from '@pages/Home';
import Tags from '@/pages/tags/Tags';
import Courses from '@pages/Courses';
import { JSX } from 'react';
import ArticleDetail from '@/pages/article-detail/ArticleDetail';
import TagDetail from '@/pages/tag-detail/TagDetail';
import Category from '@/pages/category/Category';

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
  {
    path: '/tags/:tagId',
    element: <TagDetail />,
    name: 'TagDetail',
    hidden: true,
  },
  {
    path: '/articles/category/:categoryId',
    element: <Category />,
    name: 'Category',
    hidden: true,
  },
  {
    path: '/articles/:articleId',
    element: <ArticleDetail />,
    name: 'ArticleDetail',
    hidden: true,
  },
  { path: '/courses', element: <Courses />, name: 'Courses' },
];

export type { RouteType };

export default routes;
