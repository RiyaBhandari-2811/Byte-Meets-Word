/* eslint-disable @typescript-eslint/no-explicit-any */

import { styled, TextField, Stack, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import TagSelect from '../tag_select/TagSelect ';
import CategorySelect from '../category_select/CategorySelect';
import { useEffect } from 'react';

interface ArticleFormProps {
  handleNext: (data: any) => void;
  defaultValues: any;
  post: any | null;
}

const ArticleForm = ({ handleNext, defaultValues, post }: ArticleFormProps) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  console.log('post', post);

  useEffect(() => {
    if (post) {
      const article = post.article;

      reset({
        title: article.title,
        subtitle: '',
        description: article.summary,
        featureImage: article.featureImage,
        tags: article.tags,
        category: article.category,
        readTime: article.readTime?.toString(),
        isActive: article.isActive,
      });
    }
  }, [post, reset]);

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

  const fields: Array<{
    name:
      | 'title'
      | 'subtitle'
      | 'description'
      | 'featureImage'
      | 'tags'
      | 'category'
      | 'readTime'
      | 'isActive';
    type: string;
    label: string;
    isRequired?: boolean;
    isOptional?: boolean;
  }> = [
    { name: 'title', type: 'text', label: 'Title', isRequired: true },
    { name: 'subtitle', type: 'text', label: 'Subtitle', isOptional: true },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      isRequired: true,
    },
    {
      name: 'featureImage',
      type: 'url',
      label: 'Featured Image',
      isRequired: false,
    },
    // { name: 'tags', type: 'text', label: 'Tags', isRequired: true },
    // { name: 'category', type: 'text', label: 'Category', isOptional: true },
    { name: 'readTime', type: 'number', label: 'Read Time', isRequired: true },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Is Active',
      isRequired: true,
    },
  ];

  const onSubmit = (data: any) => {
    console.log('data: ', data);
    handleNext(data);
  };

  return (
    <Stack>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          gap: '1rem',
        }}
      >
        {fields.map((field) => {
          if (field.type === 'file') {
            return (
              <Controller
                key={field.name}
                name={field.name}
                control={control}
                render={({ field: controllerField }) => (
                  <input
                    type="file"
                    onChange={(e) =>
                      controllerField.onChange(e.target.files?.[0])
                    }
                    ref={controllerField.ref}
                  />
                )}
              />
            );
          } else if (field.type === 'checkbox') {
            return (
              <Controller
                key={field.name}
                name={field.name}
                control={control}
                render={({ field: controllerField }) => (
                  <label>
                    <input
                      type="checkbox"
                      checked={Boolean(controllerField.value)}
                      onChange={controllerField.onChange}
                    />
                    {field.label}
                  </label>
                )}
              />
            );
          } else {
            return (
              <Controller
                key={field.name}
                name={field.name}
                control={control}
                render={({ field: controllerField }) => (
                  <GradientTextField
                    {...controllerField}
                    type={field.type}
                    label={field.label}
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            );
          }
        })}
        <Controller
          name={'tags'}
          control={control}
          render={() => <TagSelect control={control} />}
        />
        <Controller
          name={'category'}
          control={control}
          render={() => <CategorySelect control={control} />}
        />
        <Button type="submit" variant="contained" color="info">
          NEXT
        </Button>
      </form>
    </Stack>
  );
};

export default ArticleForm;
