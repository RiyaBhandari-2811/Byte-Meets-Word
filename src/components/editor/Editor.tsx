/* eslint-disable @typescript-eslint/no-explicit-any */

import { Stack } from '@mui/material';
import Button from '@mui/material/Button/Button';
import styled from '@mui/material/styles/styled';
import TextEditor from '../text_editor/TextEditor';
import { useState } from 'react';
import { useCreateArticleMutation } from '@/features/articlesSlice';
import { useSelector } from 'react-redux';

const Editor = ({
  formData,
  handlePrev,
}: {
  formData: any;
  handlePrev: any;
}) => {
  const [postArticle] = useCreateArticleMutation();
  const [mainContent, setMainContent] = useState('');
  const SubmitButton = styled(Button)({
    background: 'linear-gradient(90deg, #27d7ff, #1c92ff)',
    width: 'max-content',
    color: 'rgba(30, 41, 59, 1)',
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: '50px',
    padding: '7px 35px',
    '&:hover': {
      background: 'linear-gradient(90deg, #1c92ff, #27d7ff)',
    },
  });

  const userStore: any = useSelector((state: any) => state.userStore);

  console.log(userStore);

  const handleSubmit = () => {
    const payload = { ...formData, mainContent };
    console.log('payload', payload);
    postArticle({ payload, authToken: userStore.token });
  };

  return (
    <Stack justifyContent={'space-between'} spacing={5}>
      <TextEditor mainContent={mainContent} setMainContent={setMainContent} />
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Button
          type="submit"
          variant="contained"
          color="info"
          onClick={handlePrev}
        >
          PREV
        </Button>
        <SubmitButton onClick={handleSubmit}> Save the Article </SubmitButton>
      </Stack>
    </Stack>
  );
};

export default Editor;
