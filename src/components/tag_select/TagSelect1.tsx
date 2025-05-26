/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetTagsQuery } from '@/features/tagsSlice';
import {
  Autocomplete,
  TextField,
  CircularProgress,
  styled,
  autocompleteClasses,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { Virtuoso } from 'react-virtuoso';
import { HTMLAttributes, forwardRef, useEffect, useState } from 'react';
import { ITag } from '@/types/tag';

// Custom Listbox component using Virtuoso
const ListboxComponent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {
  const { children } = props;
  const itemData = Array.isArray(children) ? children : [];

  return (
    <div ref={ref}>
      <Virtuoso
        style={{ height: 300 }}
        totalCount={itemData.length}
        itemContent={(index) => itemData[index]}
        components={{
          Scroller: forwardRef<HTMLDivElement>((props, ref) => (
            <div
              ref={ref}
              {...props}
              style={{
                ...(props as { style?: React.CSSProperties }).style,
                scrollbarWidth: 'thin',
              }}
            />
          )),
        }}
      />
    </div>
  );
});

const TagSelect1 = ({ control }: { control: any }) => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isFetching } = useGetTagsQuery(page);
  const [allTags, setAllTags] = useState<any[]>([]);

  useEffect(() => {
    if (data?.tags) {
      setAllTags((prev) => [...prev, ...data.tags]);
    }
  }, [data?.tags]);

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

  const StyledAutocomplete = styled(Autocomplete)({
    [`& .${autocompleteClasses.listbox}`]: {
      '& ul': {
        padding: 0,
      },
    },
  });

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;

    console.log('target', target);

    if (
      target.scrollHeight - target.scrollTop === target.clientHeight &&
      !isFetching
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Controller
      name="tags"
      control={control}
      render={({ field }) => (
        <StyledAutocomplete
          multiple
          options={allTags}
          getOptionLabel={(option) => (option as ITag)?.name || ''}
          isOptionEqualToValue={(option, value) =>
            (option as ITag)._id === (value as ITag)._id
          }
          onChange={(event, value) => {
            // Only allow up to 3 tags
            if ((value as ITag[]).length <= 3) {
              field.onChange(value);
            }
          }}
          value={field.value || []}
          role="listbox"
          ListboxComponent={ListboxComponent}
          onScroll={handleScroll}
          disableCloseOnSelect
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
                    {isLoading || isFetching ? (
                      <CircularProgress size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          // Optional: disable already selected items if max reached
          getOptionDisabled={(option) =>
            (field.value?.length ?? 0) >= 3 &&
            !field.value?.some((tag: ITag) => tag._id === (option as ITag)._id)
          }
        />
      )}
    />
  );
};

export default TagSelect1;
