/* eslint-disable @typescript-eslint/no-explicit-any */

import ArticleForm from '@/components/article_form/ArticleForm';
import Editor from '@/components/editor/Editor';
import Heading from '@/components/heading/Heading';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack/Stack';
import { useState } from 'react';

const ArticleEditor = () => {
  const [page, setPage] = useState(0);
  const defaultValues = {
    title: '',
    subtitle: '',
    description: '',
    featuredImage: '',
    tags: '',
    category: '',
    readTime: '',
    isActive: false,
  };
  const [formData, setFormData] = useState(defaultValues);

  const handleNext = (dataFromStep: any) => {
    setFormData((prev) => ({ ...prev, ...dataFromStep }));
    console.log(' dataFromStep ' + dataFromStep);
    setPage(page + 1);
  };

  const ActivePage = () => {
    if (page === 1) {
      return <Editor formData={formData} />;
    } else if (page === 0) {
      return (
        <ArticleForm handleNext={handleNext} defaultValues={defaultValues} />
      );
    } else {
      return null;
    }
  };

  const title = ['Editor', 'Main Content'];

  return (
    <Stack>
      <Heading title={title[page]} styleProps={{ marginBottom: '1rem' }} />
      <ActivePage />
      <Stack>
        <Button
          color="info"
          disabled={page < 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
      </Stack>
    </Stack>
  );
};

export default ArticleEditor;
