import { createTheme, Theme } from '@mui/material/styles';
import getCssVariable from './getCssVariable';

type GenerateTheme = () => Theme;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }

  interface PaletteOptions {
    quaternary: {
      main: string;
    };
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
      quaternary: {
        main: getCssVariable('--quaternary'),
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
