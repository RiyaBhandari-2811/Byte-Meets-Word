/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetTagsQuery } from '@/features/tagsSlice';
import {
  Autocomplete,
  TextField,
  CircularProgress,
  styled,
} from '@mui/material';
import { Controller } from 'react-hook-form';

const TagSelect = ({ control }: { control: any }) => {
  const { data, isLoading } = useGetTagsQuery(0);

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
      name="tags"
      control={control}
      render={({ field }) => (
        <Autocomplete
          multiple
          options={data?.tags || []}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option._id === value._id}
          onChange={(_, newValue) => {
            if (newValue.length <= 3) {
              field.onChange(newValue);
            }
          }}
          value={field.value || []}
          renderInput={(params) => (
            <GradientTextField
              {...params}
              label="Tags (max 3)"
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
        />
      )}
    />
  );
};

export default TagSelect;
