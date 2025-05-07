 
import ArticleForm from '@/components/article_form/ArticleForm';
import Editor from '@/components/editor/Editor';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack/Stack';
import { useState } from 'react';

const ArticleEditor = () => {
  const [page, setPage] = useState(0);

  return (
    <Stack>
      {!page ? <ArticleForm /> : <Editor />}
      <Stack>
        <Button
          color="info"
          disabled={page < 0}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Button
          color="info"
          disabled={page > 1}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default ArticleEditor;
