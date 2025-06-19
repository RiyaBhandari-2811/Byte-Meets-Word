/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetCategoriesQuery } from '@/features/categoriesSlice';
import {
  Autocomplete,
  TextField,
  CircularProgress,
  styled,
} from '@mui/material';
import { Controller } from 'react-hook-form';

const CategorySelect = ({ control }: { control: any }) => {
  const { data, isLoading } = useGetCategoriesQuery(0);

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

  return (
    <Controller
      name="categories"
      control={control}
      render={({ field }) => (
        <Autocomplete
          multiple
          options={data?.categories || []}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option._id === value._id}
          onChange={(_, newValue) => {
            if (newValue.length <= 1) {
              field.onChange(newValue);
            }
          }}
          value={field.value || []}
          renderInput={(params) => (
            <GradientTextField
              {...params}
              label="Category (max 1)"
              variant="outlined"
              fullWidth
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading ? <CircularProgress size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          slotProps={{
            chip: {
              sx: {
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid #ccc',
                '& .MuiChip-deleteIcon': {
                  color: 'black',
                  '&:hover': {
                    color: 'red',
                  },
                },
              },
            },
          }}
        />
      )}
    />
  );
};

export default CategorySelect;
