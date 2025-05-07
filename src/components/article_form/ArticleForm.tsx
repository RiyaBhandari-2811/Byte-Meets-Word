import { styled, Button, TextField, Stack } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Heading from '../heading/Heading';

const ArticleForm = () => {
  const { control } = useForm();
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

  const GradientTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
      color: 'black',
      borderRadius: '8px',
      '& fieldset': {
        border: '2px solid var(--quinary)',
      },
      '&:hover fieldset': {
        border: '2px solid var(--quinary)',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid var(--quinary)',
      },
      input: {
        color: 'white',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
  }));
  const fields = [
    { name: 'title', type: 'text', label: 'Title', isRequired: true },
    { name: 'subtitle', type: 'text', label: 'Subtitle', isOptional: true },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      isRequired: true,
    },
    {
      name: 'featuredImage',
      type: 'file',
      label: 'Featured Image',
      isRequired: true,
    },
    { name: 'tags', type: 'text', label: 'Tags', isRequired: true },
    { name: 'category', type: 'text', label: 'Category', isOptional: true },
    { name: 'readTime', type: 'number', label: 'Read Time', isRequired: true },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Is Active',
      isRequired: true,
    },
  ];
  return (
    <Stack>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          gap: '1rem',
        }}
      >
        <Heading title={'Editor'} styleProps={{ marginBottom: '1rem' }} />

        {fields.map((field) => {
          return (
            <Controller
              name={field.name}
              render={({ field: controllerField }) => (
                <GradientTextField
                  {...controllerField}
                  type={field.type}
                  id="outlined-basic"
                  label={field.label}
                  variant="outlined"
                  fullWidth
                />
              )}
              control={control}
            />
          );
        })}

        <SubmitButton> Save the Article </SubmitButton>
      </form>
    </Stack>
  );
};

export default ArticleForm;
