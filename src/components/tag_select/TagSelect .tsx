/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useLazyGetTagsQuery } from '@/features/tagsSlice';
import { ITag } from '@/types/tag';
import {
  Autocomplete,
  TextField,
  CircularProgress,
  styled,
} from '@mui/material';
import React from 'react';
import { useCallback, useEffect, useState, forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { Virtuoso } from 'react-virtuoso';

const TagSelect = ({ control }: { control: any }) => {
  const [page, setPage] = useState<number>(0);
  const [options, setOptions] = useState<ITag[]>([]);
  const [selected, setSelected] = useState<ITag[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  const [trigger, { isFetching }] = useLazyGetTagsQuery();

  const fetchOptions = useCallback(async () => {
    if (isFetching || !hasMore) return;

    try {
      const res = await trigger(page).unwrap();
      const newItems = res.tags;
      const totalPages = res.totalPages;

      setOptions((prev) => [...prev, ...newItems]);

      if (page + 1 >= totalPages) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error('Error fetching tags:', err);
    }
  }, [page, hasMore, isFetching, trigger]);

  useEffect(() => {
    if (open && options.length === 0) {
      fetchOptions();
    }
  }, [open]);

  const ListboxComponent = forwardRef<
    HTMLUListElement,
    React.HTMLAttributes<HTMLElement>
  >(function ListboxComponent(props, ref) {
    const { children, ...rest } = props;
    const childCount = React.Children.count(children);

    return (
      <ul
        {...rest}
        ref={ref}
        style={{ height: 300, padding: 0, margin: 0, listStyle: 'none' }}
      >
        <Virtuoso
          style={{ height: '100%' }}
          totalCount={React.Children.count(children)}
          itemContent={(index) => React.Children.toArray(children)[index]}
          rangeChanged={({ endIndex }) => {
            if (endIndex >= childCount - 5) {
              fetchOptions();
            }
          }}
        />
      </ul>
    );
  });

  const GradientTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
      color: 'white',
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
      render={({ field }) => {
        useEffect(() => {
          if (field.value && field.value.length > 0) {
            setSelected(field.value);
          }
        }, [field.value]);
        return (
          <Autocomplete
            multiple
            disableListWrap
            options={options}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            loading={isFetching}
            value={selected}
            onChange={(_, newValue) => {
              setSelected(newValue);
              field.onChange(newValue);
            }}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(a, b) => a._id === b._id}
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
                      {isFetching ? <CircularProgress size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
            slots={{ listbox: ListboxComponent }}
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
        );
      }}
    />
  );
};

export default TagSelect;
