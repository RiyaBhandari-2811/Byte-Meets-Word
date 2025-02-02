import { createTheme, Theme } from '@mui/material/styles';
import getCssVariable from './getCssVariable';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type GenerateTheme = () => Theme;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

const generateTheme: GenerateTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: getCssVariable('--primary'),
      },
      secondary: {
        main: getCssVariable('--secondary'),
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
      body1: {
        fontWeight: 400,
      },
      body2: {
        fontWeight: 300,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 400,
        md: 768,
        lg: 1024,
        xl: 1440,
        xxl: 1920,
      },
    },
  });
};

export default generateTheme;
