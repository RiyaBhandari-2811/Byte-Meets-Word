/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */

import {
  Button,
  IconButton,
  ToggleButton,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

type ButtonVariant =
  | 'contained'
  | 'gradient'
  | 'outlined'
  | 'text'
  | 'icon-end'
  | 'nav'
  | 'toggle';

interface ButtonAtomProps {
  variant?: ButtonVariant;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  icon?: React.ReactNode;
  isActive?: boolean;
  navText?: string;
  navPath?: string;
  showPassword?: boolean;
  sx?: any;
}

const GradientButton = styled(Button)(() => ({
  background: 'linear-gradient(90deg, #27d7ff, #1c92ff)',
  color: 'rgba(30, 41, 59, 1)',
  textTransform: 'none',
  fontWeight: 'bold',
  borderRadius: '50px',
  padding: '7px 35px',
  '&:hover': {
    background: 'linear-gradient(90deg, #1c92ff, #27d7ff)',
  },
}));

const TransparentOutlineButton = styled(Button)({
  border: '1.5px solid rgb(52 152 219 / 80%)',
  borderRadius: '10px',
  backgroundColor: 'transparent',
  color: 'white',
  '&:hover': {
    boxShadow: '0 0 15px rgb(52 152 219 / 80%)',
    background: 'linear-gradient(90deg, #22d3ee 0%, #0ea5e9 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transition: 'all 0.3s ease-in-out',
  },
});

export const ButtonAtom: React.FC<ButtonAtomProps> = ({
  variant = 'contained',
  children,
  onClick,
  disabled,
  type = 'button',
  icon,
  isActive,
  navText,
  navPath,
  sx = {},
}) => {
  switch (variant) {
    case 'gradient':
      return (
        <GradientButton
          onClick={onClick}
          disabled={disabled}
          type={type}
          sx={sx}
        >
          {children}
        </GradientButton>
      );

    case 'outlined':
      return (
        <Button
          variant="outlined"
          onClick={onClick}
          disabled={disabled}
          type={type}
          sx={sx}
        >
          {children}
        </Button>
      );

    case 'text':
      return (
        <Button
          variant="text"
          onClick={onClick}
          disabled={disabled}
          type={type}
          sx={sx}
        >
          {children}
        </Button>
      );

    case 'icon-end':
      return (
        <IconButton onClick={onClick} edge="end" sx={sx}>
          {icon}
        </IconButton>
      );

    case 'nav':
      return (
        <ListItemButton
          disableGutters
          onClick={onClick}
          sx={{ padding: '0px', ...sx }}
        >
          <ListItemText
            primary={navText}
            className={`nav-items__button-text ${
              isActive ? 'nav-items__button-text--active' : ''
            }`}
            slotProps={{
              primary: {
                sx: {
                  fontSize: {
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem',
                    lg: '1.1rem',
                    xl: '1.5rem',
                  },
                  fontWeight: 500,
                  margin: { md: '1.5rem', lg: '1rem', xl: '1rem' },
                },
              },
            }}
          />
        </ListItemButton>
      );

    case 'toggle':
      return (
        <ToggleButton
          value={navText ?? ''}
          onClick={onClick}
          sx={{
            border: '1px solid grey',
            borderRadius: '10px',
            color: '#0ea5e9',
            ...sx,
          }}
        >
          {icon || children}
        </ToggleButton>
      );

    case 'contained':
    default:
      return (
        <Button
          variant="contained"
          onClick={onClick}
          disabled={disabled}
          type={type}
          sx={sx}
        >
          {children}
        </Button>
      );
  }
};
