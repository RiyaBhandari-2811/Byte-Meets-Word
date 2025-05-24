/* eslint-disable @typescript-eslint/no-explicit-any */

import ArticleForm from '@/components/article_form/ArticleForm';
import Editor from '@/components/editor/Editor';
import Heading from '@/components/heading/Heading';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack/Stack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@/features/store_slice/userStoreSlice';

const ArticleEditor = () => {
  const dispatch = useDispatch();

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

  const handlePrev = () => {
    setPage(page - 1);
  };

  const ActivePage = () => {
    if (page === 1) {
      return <Editor formData={formData} handlePrev={handlePrev} />;
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
      <Stack
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Heading title={title[page]} styleProps={{ marginBottom: '1rem' }} />
        <Button
          variant="contained"
          color="info"
          onClick={() => dispatch(logout())}
        >
          Logout
        </Button>
      </Stack>
      <ActivePage />
    </Stack>
  );
};

export default ArticleEditor;
