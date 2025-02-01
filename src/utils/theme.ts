import { createTheme, Theme } from '@mui/material/styles';
import getCssVariable from './getCssVariable';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type GenerateTheme = () => Theme;

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
  });
};

export default generateTheme;
