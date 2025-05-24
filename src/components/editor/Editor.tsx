/* eslint-disable @typescript-eslint/no-explicit-any */

import { Stack } from '@mui/material';
import Button from '@mui/material/Button/Button';
import styled from '@mui/material/styles/styled';

const Editor = ({
  formData,
  handlePrev,
}: {
  formData: any;
  handlePrev: any;
}) => {
  const SubmitButton = styled(Button)({
    background: 'linear-gradient(90deg, #27d7ff, #1c92ff)',
    color: 'rgba(30, 41, 59, 1)',
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: '50px',
    padding: '7px 35px',
    '&:hover': {
      background: 'linear-gradient(90deg, #1c92ff, #27d7ff)',
    },
  });

  console.log('formData: ', formData);

  return (
    <Stack>
      <SubmitButton> Save the Article </SubmitButton>
      <Button
        type="submit"
        variant="contained"
        color="info"
        onClick={handlePrev}
      >
        PREV
      </Button>
    </Stack>
  );
};

export default Editor;
