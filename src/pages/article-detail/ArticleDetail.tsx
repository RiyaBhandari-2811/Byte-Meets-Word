import articleData from '@assets/json/articleDetail.json';
import { Typography } from '@mui/material';
import parse from 'html-react-parser';

const ArticleDetail = () => {
  return (
    <div>
      {articleData.map((article) => (
        <div key={article.id}>
          <Typography>{article.title}</Typography>
          {parse(article.main_content)}
        </div>
      ))}
    </div>
  );
};

export default ArticleDetail;
