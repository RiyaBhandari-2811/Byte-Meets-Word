import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams<string>();
  return <div>{id}</div>;
};

export default ArticleDetail;
