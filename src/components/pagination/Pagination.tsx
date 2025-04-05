import React from 'react';
import { Pagination as MUIPagination } from '@mui/material';

interface PaginationProps {
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, setPage }) => {
  return (
    <MUIPagination
      count={totalPages}
      variant="outlined"
      shape="rounded"
      sx={{
        color: 'tertiary',
        '& .MuiPaginationItem-root': {
          color: 'white',
          border: '1.5px solid rgb(52 152 219 / 80%)',
        },
        '& .MuiPaginationItem-root.Mui-selected': {
          boxShadow: '0 0 5px rgb(52 152 219 / 80%)',
          background: 'linear-gradient(90deg, #22d3ee 0%, #0ea5e9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transition: 'all 0.3s ease-in-out',
        },
      }}
      defaultPage={1}
      onChange={(_, pageNum) => setPage(pageNum)}
    />
  );
};

export default Pagination;
