import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import generateTheme from '@/utils/theme';
import { Box, Container, Stack, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme: () => void = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={generateTheme()}>
      <Container
        sx={{
          paddingLeft: { lg: '1rem', xl: '0px', xxl: '0px' },
          border: 3,
          borderColor: {
            xs: 'red',
            sm: 'green',
            md: 'yellow',
            lg: 'blue',
            xl: 'orange',
          },
        }}
      >
        <Stack className="layout">
          <NavBar toggleTheme={toggleTheme} />
          <Box component="main" className="layout__content">
            <Outlet />
          </Box>
          <Footer />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
